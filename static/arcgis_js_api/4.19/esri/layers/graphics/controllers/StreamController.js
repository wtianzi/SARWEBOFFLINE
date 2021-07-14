// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Accessor ../../../geometry/support/typeUtils ../../../geometry ../../../core/Promise ../../../Graphic ../../../core/HandleOwner ../data/StreamFeatureManager ../sources/connections/createConnection ../../../views/3d/support/EventedSet".split(" "),
function(l,e,f,q,O,P,h,Q,r,R,S,T,v,w,U,x,y,z,A,B,C){var p;let m=p=function(d){function c(){return d.apply(this,arguments)||this}l._inheritsLoose(c,d);var b=c.prototype;b.getObjectId=function(){return this.objectId};b.clone=function(){return new p({objectId:this.objectId,...this.cloneProperties()})};return c}(y);e.__decorate([h.property({type:Number,json:{read:!0}})],m.prototype,"objectId",void 0);m=p=e.__decorate([r.subclass("esri.layers.graphics.controllers.StreamGraphic")],m);let D=function(){function d(b){this.onUpdate=
b;this._idToGraphic=new Map}var c=d.prototype;c.destroy=function(){this._idToGraphic.clear()};c.add=function(b){this._idToGraphic.set(b.objectId,b)};c.get=function(b){return this._idToGraphic.get(b)};c.forEach=function(b){this._idToGraphic.forEach(b)};c.removeById=function(b){const a=this._idToGraphic.get(b);if(!a)return null;a.sourceLayer=a.layer=null;this._idToGraphic.delete(b);return a};c.update=function(b,a){this.onUpdate(b,a)};l._createClass(d,[{key:"size",get:function(){return this._idToGraphic.size}}]);
return d}();f=function(d){function c(){var a=d.apply(this,arguments)||this;a._updateInfo={websocket:0,client:0};a.graphics=new C.EventedSet;return a}l._inheritsLoose(c,d);var b=c.prototype;b.initialize=function(){this.addResolvingPromise(this.layer.when(()=>this._startup()))};b.destroy=function(){this.clear()};b.clear=function(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0);this.connection&&(this.connection.destroy(),this.connection=null);this.store&&(this.store.destroy(),
this.store=null);this.graphics.clear();this.handles.removeAll()};b._startup=function(){const {parsedUrl:a,spatialReference:n,definitionExpression:E,geometryDefinition:F,objectIdField:G,timeInfo:H,purgeOptions:I,maxReconnectionAttempts:J,maxReconnectionInterval:K,updateInterval:L}=this.layer,M=w.featureGeometryTypeKebabDictionary.toJSON(this.layer.geometryType),t=this.layerView.view.spatialReference,N={geometry:F,where:E};this.clear();this._set("connection",B.createConnection(a,n,t,M,N,J,K));this._outSpatialReference=
t.toJSON();this.store=new D(this._onUpdate.bind(this));this.featuresManager=new A["default"](this.store,G,H.toJSON(),I);this.handles.add([this.connection.on("feature",g=>this._onFeature(g)),this.layer.watch("definitionExpression",()=>this._startup()),this.layer.watch("geometryDefinition",()=>this._startup()),this.layer.watch("purgeOptions",()=>this._startup())]);let u=performance.now();this._updateIntervalId=setInterval(()=>{var g=performance.now(),k=g-u;2500<k&&(u=g,g=Math.round(this._updateInfo.client/
(k/1E3)),k=Math.round(this._updateInfo.websocket/(k/1E3)),this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:g,websocket:k}));this.featuresManager.checkForUpdates()},L)};b._onFeature=function(a){this._updateInfo.websocket++;this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:a.attributes,centroid:a.centroid,geometry:a.geometry});try{a.geometry&&!a.geometry.spatialReference&&(a.geometry.spatialReference=this._outSpatialReference),
this.featuresManager.add(m.fromJSON(a))}catch{}};b._onUpdate=function(a,n){q.isSome(n)&&this.graphics.removeMany(n);q.isSome(a)&&(this._updateInfo.client+=a.length,this.graphics.addMany(a))};l._createClass(c,[{key:"updating",get:function(){return!this.connection||"connected"===this.connection.connectionStatus}}]);return c}(z.HandleOwnerMixin(x.EsriPromiseMixin(v)));e.__decorate([h.property()],f.prototype,"connection",void 0);e.__decorate([h.property()],f.prototype,"layer",void 0);e.__decorate([h.property()],
f.prototype,"layerView",void 0);e.__decorate([h.property({readOnly:!0})],f.prototype,"updating",null);return f=e.__decorate([r.subclass("esri.layers.graphics.controllers.StreamController")],f)});