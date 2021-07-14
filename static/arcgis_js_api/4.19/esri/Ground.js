// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require ./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./core/has ./core/compilerUtils ./core/lang ./core/Logger ./core/accessorSupport/ensureType ./core/accessorSupport/decorators/property ./core/jsonMap ./core/accessorSupport/decorators/subclass ./core/accessorSupport/decorators/writer ./core/Error ./core/urlUtils ./core/uuid ./portal/support/resourceExtension ./core/promiseUtils ./core/JSONSupport ./core/Collection ./Color ./webdoc/support/opacityUtils ./core/collectionUtils ./core/Loadable ./core/loadAll ./ground/NavigationConstraint".split(" "),
function(u,q,m,h,B,w,C,x,p,N,D,E,F,O,P,Q,r,G,H,I,y,J,K,L,M){function z(g){return"elevation"===g.type||g&&"createElevationSampler"in g}var v;const A=C.getLogger("esri.Ground");h=v=function(g){function k(a){var b=g.call(this,a)||this;b.opacity=1;b.surfaceColor=null;b.navigationConstraint=null;b.layers=new H;b.layers.on("after-add",c=>{c=c.item;c.parent&&c.parent!==q._assertThisInitialized(b)&&"remove"in c.parent&&c.parent.remove(c);c.parent=q._assertThisInitialized(b);"elevation"!==c.type&&"base-elevation"!==
c.type&&A.error(`Layer '${c.title}, id:${c.id}' of type '${c.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)});b.layers.on("after-remove",c=>{c.item.parent=null});return b}q._inheritsLoose(k,g);var d=k.prototype;d.initialize=function(){this.when().catch(a=>{A.error("#load()","Failed to load ground",a)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)};d.destroy=function(){const a=this.layers.removeAll();
for(const b of a)b.destroy();this.layers.destroy()};d.normalizeCtorArgs=function(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a={...a},delete a.resourceInfo);return a};d.writeLayers=function(a,b,c,e){const l=[];a&&(e={...e,layerContainerType:"ground"},a.forEach(f=>{if("write"in f){const n={};B.typeCast(f)().write(n,e)&&l.push(n)}else e&&e.messages&&e.messages.push(new F("layer:unsupported",`Layers (${f.title}, ${f.id}) of type '${f.declaredClass}' cannot be persisted in the ground`,
{layer:f}))}));b.layers=l};d.load=function(a){this.addResolvingPromise(this._loadFromSource(a));return Promise.resolve(this)};d.loadAll=function(){return L.loadAll(this,a=>{a(this.layers)})};d.queryElevation=async function(a,b){await this.load({signal:null==b?void 0:b.signal});var {ElevationQuery:c}=await new Promise(function(l,f){u(["./layers/support/ElevationQuery"],l,f)});r.throwIfAborted(b);c=new c;const e=this.layers.filter(z).toArray();return c.queryAll(e,a,b)};d.createElevationSampler=async function(a,
b){await this.load({signal:null==b?void 0:b.signal});var {ElevationQuery:c}=await new Promise(function(l,f){u(["./layers/support/ElevationQuery"],l,f)});r.throwIfAborted(b);c=new c;const e=this.layers.filter(z).toArray();return c.createSamplerAll(e,a,b)};d.clone=function(){const a={opacity:this.opacity,surfaceColor:w.clone(this.surfaceColor),navigationConstraint:w.clone(this.navigationConstraint),layers:this.layers.slice()};this.loaded&&(a.loadStatus="loaded");return(new v({resourceInfo:this.resourceInfo})).set(a)};
d.read=function(a,b){this.resourceInfo||this._set("resourceInfo",{data:a,context:b});g.prototype.read.call(this,a,b)};d._loadFromSource=function(a){const b=this.resourceInfo;return b?this._loadLayersFromJSON(b.data,b.context,a):Promise.resolve(null)};d._loadLayersFromJSON=function(a,b,c){const e=b&&b.origin||"web-scene",l=b&&b.portal||null,f=b&&b.url||null;return(new Promise(function(n,t){u(["./layers/support/layersCreator"],n,t)})).then(({populateOperationalLayers:n})=>{r.throwIfAborted(c);const t=
[];a.layers&&Array.isArray(a.layers)&&t.push(n(this.layers,a.layers,{context:{origin:e,url:f,portal:l,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"}));return r.eachAlways(t)}).then(()=>{})};q._createClass(k,[{key:"layers",set:function(a){this._set("layers",J.referenceSetter(a,this._get("layers")))}}]);return k}(G.JSONSupportMixin(K));m.__decorate([p.property({json:{read:!1}})],h.prototype,"layers",null);m.__decorate([E.writer("layers")],h.prototype,"writeLayers",
null);m.__decorate([p.property({readOnly:!0})],h.prototype,"resourceInfo",void 0);m.__decorate([p.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:x.Integer,read:{reader:y.transparencyToOpacity,source:"transparency"},write:{writer:(g,k)=>{k.transparency=y.opacityToTransparency(g)},target:"transparency"}}})],h.prototype,"opacity",void 0);m.__decorate([p.property({type:I,json:{type:[x.Integer],write:(g,k)=>{k.surfaceColor=g.toJSON().slice(0,3)}}})],h.prototype,"surfaceColor",void 0);
m.__decorate([p.property({type:M.NavigationConstraint,json:{write:!0}})],h.prototype,"navigationConstraint",void 0);return h=v=m.__decorate([D.subclass("esri.Ground")],h)});