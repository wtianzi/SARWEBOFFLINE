// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/decorateHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/assignHelper ../Map ../TimeExtent ../core/Accessor ../core/Collection ../core/CollectionFlattener ../core/Evented ../core/HandleOwner ../core/Loadable ../core/Logger ../core/maybe ../core/Promise ../core/promiseUtils ../core/scheduling ../core/watchUtils ../core/accessorSupport/decorators ../geometry/Extent ../geometry/HeightModelInfo ../geometry/SpatialReference ../geometry/support/spatialReferenceUtils ../support/GraphicsCollection ./BasemapView ./LayerViewManager ./RefreshManager ./ToolViewManager ./input/Input ./navigation/Navigation ./support/DefaultsFromMap".split(" "),
function(N,O,d,r,P,t,u,v,k,w,x,y,l,z,A,B,g,C,e,c,m,D,E,F,n,G,H,I,J,K,L,M){var p=z.getLogger("esri.views.View");return function(q){function a(a){var b=q.call(this)||this;b._isValid=!1;b._readyCycleForced=!1;b._userSpatialReference=null;b._currentSpatialReference=null;b._cursor=null;b.allLayerViews=new w({root:b,rootCollectionNames:["basemapView.baseLayerViews","groundView?.layerViews","layerViews","basemapView.referenceLayerViews"],getChildrenFunction:function(a){return a.layerViews}});b.animation=
null;b.basemapView=null;b.defaultsFromMap=new M({view:b});b.fatalError=null;b.extent=null;b.graphics=new n.default;b.interacting=!1;b.internallyReady=!1;b.layerViews=new k;b.padding={left:0,top:0,right:0,bottom:0};b.spatialReferenceWarningDelay=1E3;b.timeExtent=null;b.type=null;b.scale=null;b.updating=!1;b.initialExtentRequired=!0;b.renderContext=null;b.input=new K;b.navigation=new L;b.layerViewManager=null;b.refreshManager=null;b.isHeightModelInfoRequired=!1;b.width=null;b.height=null;b.resizing=
!1;b.suspended=!1;b.handles.add(b.watch("ready",function(a,h){a?(b._currentSpatialReference=b.spatialReference,f.views.add(b)):(b._currentSpatialReference=null,f.views.remove(b));b.notifyChange("spatialReference");!a&&h?(b.layerViewManager.clear(),b.toolViewManager.detach()):a&&!h&&b.whenReady().then(function(){return b.toolViewManager.attach()})}));return b}r(a,q);f=a;a.prototype.initialize=function(){var a=this,b=this.validate().then(function(){a._isValid=!0;a.notifyChange("ready");var b=function(){return e.whenOnce(a,
"ready").then(function(){return g.after(0)}).then(function(){return a.ready?void 0:b()})};return b()});this.addResolvingPromise(b);this.basemapView=new G.BasemapView({view:this});this.layerViewManager=new H.default({view:this});this.refreshManager=new I({view:this});this.toolViewManager=new J({view:this});this._resetInitialViewPropertiesFromContent();var c;e.init(this.defaultsFromMap,"isSpatialReferenceDone",function(b){var d=!!(a.map&&0<a.map.allLayers.length);if((!b||a.spatialReference||!d)&&c)c=
null;else if(b&&!a.spatialReference&&d&&!c){var h=c=g.after(a.spatialReferenceWarningDelay);c.then(function(){h===c&&p.warn("#spatialReference","no spatial reference could be derived from the currently added map layers")}).catch(function(){})}},!0)};a.prototype.destroy=function(){this.destroyed||(f.views.remove(this),this.destroyViewData(),this.defaultsFromMap.destroy(),this.defaultsFromMap=null,this.navigation&&(this.navigation.destroy(),this._set("navigation",null)),this.map=null,this.graphics.destroy(),
this._emitter.clear())};a.prototype.destroyViewData=function(){null!=this.toolViewManager&&(this.toolViewManager.destroy(),this.toolViewManager=null,this.refreshManager.destroy(),this.refreshManager=null,this.layerViewManager.destroy(),this.layerViewManager=null,this.basemapView.destroy(),this.basemapView=null,this.allLayerViews.destroy())};a.prototype.whenReady=function(){return g.resolve()};Object.defineProperty(a.prototype,"heightModelInfo",{get:function(){return this.getDefaultHeightModelInfo()},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"map",{set:function(a){var b=this._get("map");a!==b&&(l.isLoadable(a)&&a.load(),this.initialized&&(this.forceReadyCycle(),this._resetInitialViewPropertiesFromContent()),this._set("map",a))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"ready",{get:function(){return!!(!this.fatalError&&this._isValid&&!this._readyCycleForced&&this.map&&0!==this.width&&0!==this.height&&this.spatialReference&&(!l.isLoadable(this.map)||
this.map.loaded)&&(this._currentSpatialReference||!this.initialExtentRequired||this.initialExtent||this.defaultsFromMap&&this.defaultsFromMap.isSpatialReferenceDone)&&this.defaultsFromMap&&this.defaultsFromMap.isTileInfoDone&&this.isSpatialReferenceSupported(this.spatialReference))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"spatialReference",{get:function(){var a=this._userSpatialReference||this._currentSpatialReference||this.getDefaultSpatialReference()||null;a&&this.isHeightModelInfoRequired&&
this.defaultsFromMap&&(a=a.clone(),a.vcsWkid=this.defaultsFromMap.vcsWkid,a.latestVcsWkid=this.defaultsFromMap.latestVcsWkid);return a},set:function(a){this._userSpatialReference=a;this._set("spatialReference",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"stationary",{get:function(){return!this.animation&&!this.interacting&&!this.resizing},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"initialExtent",{get:function(){return this.defaultsFromMap&&this.defaultsFromMap.extent},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"cursor",{get:function(){var a=this.toolViewManager?this.toolViewManager.cursor:null;return A.isSome(a)?a:this._cursor||"default"},set:function(a){this._cursor=a;this.notifyChange("cursor")},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"size",{get:function(){return[this.width,this.height]},enumerable:!0,configurable:!0});a.prototype.whenLayerView=function(a){return this.layerViewManager.whenLayerView(a)};a.prototype.getDefaultSpatialReference=
function(){return this.get("defaultsFromMap.spatialReference")};a.prototype.getDefaultHeightModelInfo=function(){return this.get("map.supportsHeightModelInfo")&&this.get("map.heightModelInfo")||this.get("defaultsFromMap.heightModelInfo")||null};a.prototype.validate=function(){return g.resolve()};a.prototype.isSpatialReferenceSupported=function(a,b,c){return!0};a.prototype.isTileInfoRequired=function(){return!1};a.prototype.when=function(a,b){this.isResolved()&&!this.ready&&p.warn("#when()",'Calling view.when() while the view is no longer ready but was already resolved once will resolve immediately. Use watchUtils.whenOnce(view, "ready").then(...) instead.');
return this.inherited(arguments)};a.prototype.forceReadyCycle=function(){var a=this;this.ready&&(this._readyCycleForced=!0,e.whenFalseOnce(this,"ready",function(){a._readyCycleForced=!1;a.notifyChange("ready")}),this.notifyChange("ready"))};a.prototype.createTool=function(a,b,c){return this.toolViewManager.createTool(a,b,c)};a.prototype.removeTool=function(a){this.toolViewManager&&this.toolViewManager.removeTool(a)};a.prototype.tryFatalErrorRecovery=function(){this.fatalError=null};a.prototype._resetInitialViewPropertiesFromContent=
function(){var a=this;if(this.defaultsFromMap){var b=function(){a.defaultsFromMap.start()};this.defaultsFromMap.reset();this._currentSpatialReference=null;this.notifyChange("spatialReference");this.handles.remove("defaultsFromMap");this.handles.add([e.watch(this,"spatialReference",function(a,c){F.equals(a,c)||b()}),e.watch(this,"initialExtentRequired",b),C.schedule(b)],"defaultsFromMap")}};var f;a.views=new k;d([c.aliasOf("toolViewManager.activeTool")],a.prototype,"activeTool",void 0);d([c.property({readOnly:!0})],
a.prototype,"allLayerViews",void 0);d([c.property()],a.prototype,"animation",void 0);d([c.property()],a.prototype,"basemapView",void 0);d([c.property()],a.prototype,"defaultsFromMap",void 0);d([c.property()],a.prototype,"fatalError",void 0);d([c.property({type:m})],a.prototype,"extent",void 0);d([c.property(n.graphicsCollectionProperty)],a.prototype,"graphics",void 0);d([c.property({readOnly:!0,type:D,dependsOn:["map.heightModelInfo?","defaultsFromMap.heightModelInfo"]})],a.prototype,"heightModelInfo",
null);d([c.property()],a.prototype,"interacting",void 0);d([c.property()],a.prototype,"internallyReady",void 0);d([c.property({type:k,readOnly:!0})],a.prototype,"layerViews",void 0);d([c.property({value:null,type:t})],a.prototype,"map",null);d([c.property()],a.prototype,"padding",void 0);d([c.property({readOnly:!0,dependsOn:"fatalError map spatialReference width height initialExtentRequired initialExtent defaultsFromMap.isSpatialReferenceDone defaultsFromMap.isTileInfoDone map.loaded?".split(" ")})],
a.prototype,"ready",null);d([c.property({type:E,dependsOn:["defaultsFromMap.spatialReference","defaultsFromMap.vcsWkid","defaultsFromMap.latestVcsWkid"]})],a.prototype,"spatialReference",null);d([c.property()],a.prototype,"spatialReferenceWarningDelay",void 0);d([c.property({dependsOn:["animation","interacting","resizing"]})],a.prototype,"stationary",null);d([c.property({type:u})],a.prototype,"timeExtent",void 0);d([c.aliasOf("toolViewManager.tools")],a.prototype,"tools",void 0);d([c.property()],
a.prototype,"toolViewManager",void 0);d([c.property({readOnly:!0})],a.prototype,"type",void 0);d([c.property({type:Number})],a.prototype,"scale",void 0);d([c.property({readOnly:!0})],a.prototype,"updating",void 0);d([c.property({readOnly:!0})],a.prototype,"initialExtentRequired",void 0);d([c.property({readOnly:!0,type:m,dependsOn:["defaultsFromMap.extent"]})],a.prototype,"initialExtent",null);d([c.property({dependsOn:["toolViewManager.cursor"]})],a.prototype,"cursor",null);d([c.property()],a.prototype,
"renderContext",void 0);d([c.property({readOnly:!0})],a.prototype,"input",void 0);d([c.property({readOnly:!0})],a.prototype,"navigation",void 0);d([c.property()],a.prototype,"layerViewManager",void 0);d([c.property()],a.prototype,"width",void 0);d([c.property()],a.prototype,"height",void 0);d([c.property({readOnly:!0})],a.prototype,"resizing",void 0);d([c.property({value:null,dependsOn:["width","height"],readOnly:!0})],a.prototype,"size",null);d([c.property({readOnly:!0})],a.prototype,"suspended",
void 0);return a=f=d([c.subclass("esri.views.View")],a)}(c.declared(y.HandleOwnerMixin(x.EventedMixin(B.EsriPromiseMixin(v)))))});