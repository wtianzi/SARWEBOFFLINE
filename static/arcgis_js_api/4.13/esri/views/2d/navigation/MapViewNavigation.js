// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Viewpoint ../../../core/Accessor ../../../core/accessorSupport/decorators ../../../geometry/Point ../viewpointUtils ./ZoomBox ./actions/Pan ./actions/Pinch ./actions/Rotate".split(" "),function(f,q,t,e,m,g,u,v,d,w,h,x,y,z,A){Object.defineProperty(q,"__esModule",{value:!0});var B=new u({targetGeometry:new w}),
p=[0,0];f=function(f){function b(a){a=f.call(this)||this;a._endTimer=null;a.animationManager=null;return a}t(b,f);b.prototype.initialize=function(){this.pan=new y({navigation:this});this.rotate=new A({navigation:this});this.pinch=new z({navigation:this});this.zoomBox=new x({view:this.view,navigation:this})};b.prototype.destroy=function(){this.zoomBox.destroy();this.animationManager=this.zoomBox=null};Object.defineProperty(b.prototype,"momentumEnabled",{get:function(){return!0},enumerable:!0,configurable:!0});
b.prototype.begin=function(){this._set("interacting",!0)};b.prototype.end=function(){var a=this;this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=0);this._endTimer=setTimeout(function(){a._set("interacting",!1)},0)};b.prototype.zoom=function(a,c){void 0===c&&(c=this._getDefaultAnchor());return g(this,void 0,void 0,function(){return m(this,function(b){this.stop();this.begin();if(this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return 1>a?[2,this.zoomIn(c)]:[2,this.zoomOut(c)];
this.setViewpoint(c,a,0,[0,0]);return[2]})})};b.prototype.zoomIn=function(a){return g(this,void 0,void 0,function(){var c,b;return m(this,function(k){c=this.view;b=c.constraints.snapToNextScale(c.scale);return[2,this._zoomToScale(b,a)]})})};b.prototype.zoomOut=function(a){return g(this,void 0,void 0,function(){var c,b;return m(this,function(k){c=this.view;b=c.constraints.snapToPreviousScale(c.scale);return[2,this._zoomToScale(b,a)]})})};b.prototype.setViewpoint=function(a,c,b,d){this.begin();this.view.state.viewpoint=
this._scaleRotateTranslateViewpoint(this.view.viewpoint,a,c,b,d);this.end()};b.prototype.continousRotateClockwise=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){h.rotateBy(a,a,-1)})};b.prototype.continousRotateCounterclockwise=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){h.rotateBy(a,a,1)})};b.prototype.resetRotation=function(){this.view.rotation=0};b.prototype.continousPanLeft=function(){var a=this.get("view.viewpoint");
this.animationManager.animateContinous(a,function(a){h.translateBy(a,a,[-10,0])})};b.prototype.continousPanRight=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){h.translateBy(a,a,[10,0])})};b.prototype.continousPanUp=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){h.translateBy(a,a,[0,10])})};b.prototype.continousPanDown=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,
function(a){h.translateBy(a,a,[0,-10])})};b.prototype.stop=function(){this.pan.stopMomentumNavigation();this.animationManager.stop();this.end();this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=0,this._set("interacting",!1))};b.prototype._getDefaultAnchor=function(){var a=this.view,b=a.size,a=a.padding,k=a.top,d=a.bottom;p[0]=.5*(b[0]-a.right+a.left);p[1]=.5*(b[1]-d+k);return p};b.prototype._zoomToScale=function(a,b){void 0===b&&(b=this._getDefaultAnchor());return g(this,void 0,void 0,
function(){var c,d,e,r,f,g,l,n;return m(this,function(k){c=this.view;d=c.constraints;e=c.scale;r=c.viewpoint;f=c.size;g=c.padding;l=d.canZoomInTo(a);n=d.canZoomOutTo(a);return a<e&&!l||a>e&&!n?[2]:[2,this.view.goTo(h.padAndScaleAndRotateBy(B,r,a/e,0,b,f,g),{animate:this.momentumEnabled})]})})};b.prototype._scaleRotateTranslateViewpoint=function(a,b,d,e,f){var c=this.view,g=c.size,m=c.padding,l=c.constraints,n=c.viewpoint,k=c.scale*d,c=l.canZoomInTo(k),l=l.canZoomOutTo(k);if(1>d&&!c||1<d&&!l)d=1;h.translateBy(n,
n,f);return h.padAndScaleAndRotateBy(a,n,d,e,b,g,m)};e([d.property()],b.prototype,"animationManager",void 0);e([d.property({type:Boolean,readOnly:!0})],b.prototype,"interacting",void 0);e([d.property()],b.prototype,"pan",void 0);e([d.property()],b.prototype,"pinch",void 0);e([d.property()],b.prototype,"rotate",void 0);e([d.property()],b.prototype,"view",void 0);e([d.property()],b.prototype,"zoomBox",void 0);return b=e([d.subclass("esri.views.2d.navigation.MapViewNavigation")],b)}(d.declared(v));q.default=
f});