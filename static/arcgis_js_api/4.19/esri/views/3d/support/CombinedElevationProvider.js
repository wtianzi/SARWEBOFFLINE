// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../core/Accessor ../../../core/Evented ../layers/graphics/ElevationQuery".split(" "),
function(l,t,r,B,n,C,D,u,E,w,F,G,H,v,x,y,z){function p(h,d,k,a,b,c,g){for(const e of d)d=e.getElevation(k,a,b,c,g),n.isSome(d)&&(h=n.isSome(h)?Math.max(d,h):d);return h}l.CombinedElevationProvider=function(h){function d(a){a=h.call(this,a)||this;a.im=[];a.ground=[];a.scene=[];a.handles=new Map;return a}t._inheritsLoose(d,h);var k=d.prototype;k.destroy=function(){this._elevationQuery=n.destroyMaybe(this._elevationQuery)};k.getElevation=function(a,b,c,g,e){let f;f=p(null,this.im,a,b,c,g,e);n.isNone(f)&&
(f=p(f,this.ground,a,b,c,g,e));"scene"===e&&(f=p(f,this.scene,a,b,c,g,e));return f};k.queryElevation=function(a,b,c,g,e,f=null,A=0){const q=v.createResolver();this.elevationQuery.queryElevation(a,b,f,A).then(m=>{"scene"===e&&(m=p(m,this.scene,a,b,c,g,e));q.resolve(m)}).catch(m=>{v.isAbortError(m)?q.reject(m):q.resolve(this.getElevation(a,b,c,g,e))});return q.promise};k.register=function(a,b){this.handles.set(b,b.on("elevation-change",c=>this.emit("elevation-change",c)));this[a].push(b)};k.unregister=
function(a){this.handles.has(a)&&(this.handles.get(a).remove(),this.handles.delete(a));for(const b of[this.im,this.ground,this.scene]){const c=b.indexOf(a);-1<c&&b.splice(c,1)}};t._createClass(d,[{key:"elevationQuery",get:function(){n.isNone(this._elevationQuery)&&(this._elevationQuery=new z.ElevationQuery(this.view.resourceController.scheduler,this.view.spatialReference,()=>this.view.map&&this.view.map.ground,{maximumAutoTileRequests:4}));return this._elevationQuery}}]);return d}(y.EventedMixin(x));
r.__decorate([u.property({constructOnly:!0})],l.CombinedElevationProvider.prototype,"view",void 0);r.__decorate([u.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],l.CombinedElevationProvider.prototype,"spatialReference",void 0);l.CombinedElevationProvider=r.__decorate([w.subclass("esri.views.3d.support.CombinedElevationProvider")],l.CombinedElevationProvider);Object.defineProperty(l,"__esModule",{value:!0})});