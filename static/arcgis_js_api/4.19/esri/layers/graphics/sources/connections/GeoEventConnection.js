// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/Error ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../geometry/SpatialReference ../../../../geometry/support/jsonUtils ../../../../geometry ../../../../request ../../../../tasks/support/Query ../../../../rest/query/operations/query ./WebSocketConnection".split(" "),
function(u,v,w,p,h,x,J,K,L,y,m,M,N,O,z,A,B,P,C,D,r,E){const l=x.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),F={maxQueryDepth:5,maxRecordCountFactor:3};p=function(t){function q(a){return t.call(this,{...F,...a})||this}v._inheritsLoose(q,t);var g=q.prototype;g._open=async function(){var a=await this._fetchServiceDefinition(this._config.source);a.timeInfo.trackIdField||l.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
a=await this._fetchWebSocketUrl(a.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices());await this._buddyServicesQuery;await this._tryCreateWebSocket(a);const {filter:b,outFields:c}=this._config;this.destroyed||this._setFilter(b,c)};g._onMessage=function(a){let b;try{b=this._enrich(JSON.parse(a.data)),this._featureZScaler&&this._featureZScaler(b.geometry)}catch(c){l.error(new m("geoevent-connection","Failed to parse message",c));
return}this.onFeature(b)};g._fetchServiceDefinition=async function(a){return this._serviceDefinition=a=(await C(a.path,{query:{f:"json"},responseType:"json"})).data};g._fetchWebSocketUrl=async function(a,b){const {urls:c,token:d}=a[0];return`${this._inferWebSocketBaseUrl(c)}/subscribe?outSR=${b.wkid}${d?"\x26token\x3d"+d:""}`};g._inferWebSocketBaseUrl=function(a){if(1===a.length)return a[0];for(const b of a)if(-1!==b.indexOf("wss"))return b;l.error(new m("geoevent-connection","Unable to infer WebSocket url",
a));return null};g._setFilter=async function(a,b){const c=this._websocket;if(!(h.isNone(c)||h.isNone(a)&&h.isNone(b))){a=JSON.stringify({filter:this._serializeFilter(a,b)});var d=!1,e=z.createResolver();c.onmessage=f=>{f=JSON.parse(f.data);f.filter&&(f.error&&(l.error(new m("geoevent-connection","Failed to set service filter",f.error)),this._set("errorString",`Could not set service filter - ${f.error}`),e.reject(f.error)),c.onmessage=this._onMessage.bind(this),d=!0,e.resolve())};c.send(a);setTimeout(()=>
{d||(this.destroyed||this._websocket!==c||l.error(new m("geoevent-connection","Server timed out when setting filter")),e.reject())},1E4);return e.promise}};g._serializeFilter=function(a,b){const c={};if(h.isNone(a)&&h.isNone(b))return c;if(h.isSome(a)&&a.geometry)try{const d=B.fromJSON(a.geometry);if("extent"!==d.type)throw new m(`Expected extent but found type ${d.type}`);c.geometry=JSON.stringify(d.shiftCentralMeridian())}catch(d){l.error(new m("geoevent-connection","Encountered an error when setting connection geometryDefinition",
d))}h.isSome(a)&&a.where&&"1 \x3d 1"!==a.where&&(c.where=a.where);h.isSome(b)&&(c.outFields=b.join(","));return c};g._enrich=function(a){if(!this._relatedFeatures)return a;const b=a.attributes[this._serviceDefinition.relatedFeatures.joinField];if(!this._relatedFeatures.has(b))return l.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",a),a;const {attributes:c,geometry:d}=this._relatedFeatures.get(b);for(const e in c)a.attributes[e]=c[e];d&&(a.geometry=d);a.geometry||
a.centroid||l.error(new m("geoevent-connection","Found malformed feature - no geometry found",a));return a};g._queryBuddyServices=async function(){try{const {relatedFeatures:a,keepLatestArchive:b}=this._serviceDefinition,c=this._queryRelatedFeatures(a),d=this._queryArchive(b);await c;const e=await d;if(e)for(const f of e.features)this.onFeature(this._enrich(f))}catch(a){l.error(new m("geoevent-connection","Encountered an error when querying buddy services",{error:a}))}};g._queryRelatedFeatures=async function(a){a&&
(a=await this._queryBuddy(a.featuresUrl),this._addRelatedFeatures(a))};g._queryArchive=async function(a){if(a)return this._queryBuddy(a.featuresUrl)};g._queryBuddy=async function(a){const b=new (await new Promise(function(G,H){u(["../../../FeatureLayer"],function(I){G(Object.freeze({__proto__:null,"default":I}))},H)})).default({url:a});var {capabilities:c}=await b.load();const d=c.query.supportsMaxRecordCountFactor,e=c.query.supportsPagination;c=c.query.supportsCentroid;const f=this._config.maxRecordCountFactor;
var n=b.capabilities.query.maxRecordCount;n=d?n*f:n;const k=new D;k.outFields=h.unwrapOr(this._config.outFields,["*"]);k.where=h.unwrapOr(h.get(this._config.filter,"where"),"1\x3d1");k.returnGeometry=!0;k.returnExceededLimitFeatures=!0;k.outSpatialReference=A.fromJSON(this._config.spatialReference);c&&(k.returnCentroid=!0);d&&(k.maxRecordCountFactor=f);if(e)return k.num=n,b.destroy(),this._queryPages(a,k);a=await r.executeQuery(a,k,this._config.sourceSpatialReference);b.destroy();return a.data};g._queryPages=
async function(a,b,c=[],d=0){b.start=h.isSome(b.num)?d*b.num:null;const {data:e}=await r.executeQuery(a,b,this._config.sourceSpatialReference);if(e.exceededTransferLimit&&d<this._config.maxQueryDepth)return e.features.forEach(f=>c.push(f)),this._queryPages(a,b,c,d+1);c.forEach(f=>e.features.push(f));return e};g._addRelatedFeatures=function(a){const b=new Map;a=a.features;const c=this._serviceDefinition.relatedFeatures.joinField;for(const d of a)b.set(d.attributes[c],d);this._relatedFeatures=b};return q}(E.WebSocketConnection);
return p=w.__decorate([y.subclass("esri.layers.graphics.sources.connections.GeoEventConnection")],p)});