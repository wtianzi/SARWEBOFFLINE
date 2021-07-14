// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Handles ../../layers/LayerView ./graphics/GraphicsView2D ./graphics/GraphicContainer ./LayerView2D".split(" "),function(k,l,e,
w,x,y,z,m,A,B,C,n,p,q,r,t){e=function(h){function f(){var a=h.apply(this,arguments)||this;a._handles=new n;a._popupTemplates=new Map;a.graphicsViews=[];return a}k._inheritsLoose(f,h);var c=f.prototype;c.hitTest=function(a,b){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const u=this.graphicsViews.map(g=>g.hitTest(a,b));return Promise.all(u).then(g=>g.filter((d,v)=>{d&&(d.popupTemplate=this._popupTemplates.get(this.graphicsViews[v]),d.layer=this.layer,d.sourceLayer=this.layer);
return!!d})[0]||null)};c.update=function(a){if(this.graphicsViews)for(const b of this.graphicsViews)b.processUpdate(a)};c.attach=function(){this.layer.featureCollections.forEach(a=>{const b=new q({view:this.view,graphics:a.source,requestUpdateCallback:()=>this.requestUpdate(),container:new r(this.view.featuresTilingScheme)});b.renderer=a.renderer;this._popupTemplates.set(b,a.popupTemplate);this.graphicsViews.push(b);this.container.addChild(b.container)})};c.detach=function(){this.container.removeAllChildren();
for(const a of this.graphicsViews)a.destroy();this.graphicsViews.length=0;this._handles.removeAll();this._popupTemplates=null};c.moveStart=function(){};c.moveEnd=function(){};c.viewChange=function(){for(const a of this.graphicsViews)a.viewChange()};return f}(t.LayerView2DMixin(p));return e=l.__decorate([m.subclass("esri.views.2d.layers.RouteLayerView2D")],e)});