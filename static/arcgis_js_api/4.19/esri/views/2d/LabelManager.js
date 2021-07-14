// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../core/HandleOwner ../../core/throttle ./engine/webgl/collisions/CollisionEngine ./engine/webgl/collisions/LayerViewSorter".split(" "),
function(h,d,b,l,w,f,x,m,n,y,z,A,p,q,r,t,u){const v=l.getLogger("esri.views.2d.layers.labels.LabelManager");b=function(k){function g(a){a=k.call(this,a)||this;a._applyVisibilityPassThrottled=r.throttle(a._applyVisibilityPass,32,h._assertThisInitialized(a));a.lastUpdateId=-1;a.updateRequested=!1;a.view=null;return a}h._inheritsLoose(g,k);var c=g.prototype;c.initialize=function(){this.collisionEngine=new t.CollisionEngine(this.view.featuresTilingScheme);this._layerViewSorter=new u.LayerViewSorter((a,
e)=>{this.collisionEngine.registerLayerView(a,e);this.requestUpdate()},a=>{this.collisionEngine.unregisterLayerView(a);this.requestUpdate()});this.handles.add(this.view.allLayerViews.on("change",a=>{this._layerViewSorter.update(a)}))};c.destroy=function(){this._layerViewSorter.destroy();this.collisionEngine=this._layerViewSorter=null;this._applyVisibilityPassThrottled.remove();this._applyVisibilityPassThrottled=null};c.update=function(a){this._applyVisibilityPassThrottled(a)};c.viewChange=function(){this.requestUpdate()};
c.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())};c.processUpdate=function(a){this._set("updateParameters",a);this.updateRequested&&(this.updateRequested=!1,this.update(a))};c._applyVisibilityPass=function(a){try{const e=this.view.featuresTilingScheme.getClosestInfoForScale(a.state.scale).level;this.collisionEngine.run(a,e)}catch(e){v.error(new n("mapview-labeling","Encountered an error during label decluttering",e))}};h._createClass(g,[{key:"updating",
get:function(){return this.updateRequested}}]);return g}(q.HandleOwnerMixin(p));d.__decorate([f.property()],b.prototype,"updateRequested",void 0);d.__decorate([f.property({readOnly:!0})],b.prototype,"updateParameters",void 0);d.__decorate([f.property()],b.prototype,"updating",null);d.__decorate([f.property()],b.prototype,"view",void 0);return b=d.__decorate([m.subclass("esri.views.2d.layers.labels.LabelManager")],b)});