// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Accessor ../../../core/Handles ../../../core/watchUtils ../../input/InputManager ./handlers/DoubleClickZoom ./handlers/DoubleTapDragZoom ./handlers/DragPan ./handlers/DragRotate ./handlers/GamepadNavigation ./handlers/KeyPan ./handlers/KeyRotate ./handlers/KeyZoom ./handlers/MouseWheelZoom ./handlers/PinchAction ../../input/BrowserEventSource ../../input/handlers/PreventContextMenu ../../input/recognizers/SingleAndDoubleClick ../../input/recognizers/DoubleTapDrag ../../input/recognizers/Drag ../../input/recognizers/ImmediateDoubleClick ../../input/recognizers/PointerClickHoldAndDrag".split(" "),
function(h,k,c,N,O,n,P,p,Q,R,S,q,r,f,g,l,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){var J={left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},K={zoomIn:["\x3d","+"],zoomOut:["-","_"]},L={clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"};c=function(m){function d(){var b=m.apply(this,arguments)||this;b._handles=new r;return b}h._inheritsLoose(d,m);var e=d.prototype;e.initialize=function(){this._handles.add([f.whenNot(this.view,
"ready",()=>this._disconnect()),f.when(this.view,"ready",()=>this._connect())])};e.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null);this._disconnect()};e._disconnect=function(){this._inputManager&&(this.view.viewEvents.disconnect(),this._inputManager.destroy(),this._inputManager=null,this._source.destroy(),this._source=null)};e._connect=function(){const b=new C.BrowserEventSource(this.view.surface,this.view.input);var a=[new H.ImmediateDoubleClick,new I.PointerClickHoldAndDrag,
new E.SingleAndDoubleClick,new G.Drag(this.view.navigation),new F.DoubleTapDrag];a=new g.InputManager({eventSource:b,recognizers:a});a.installHandlers("prevent-context-menu",[new D.PreventContextMenu],g.ViewEventPriorities.INTERNAL);a.installHandlers("navigation",[new B.PinchRotateAndZoom(this.view),new w.GamepadNavigation(this.view),new A.MouseWheelZoom(this.view),new l.DoubleClickZoom(this.view),new l.DoubleClickZoom(this.view,["Ctrl"]),new u.DragPan(this.view,"primary"),new x.KeyPan(this.view,
J),new z.KeyZoom(this.view,K),new y.KeyRotate(this.view,L),new v.DragRotate(this.view,"secondary"),new t.DoubleTapDragZoom(this.view,"touch")],g.ViewEventPriorities.INTERNAL);this.view.viewEvents.connect(a);this._source=b;this._inputManager=a;f.init(this.view.navigation,"browserTouchPanEnabled",M=>{this._source.browserTouchPanningEnabled=!M})};h._createClass(d,[{key:"test",get:function(){return{inputManager:this._inputManager}}}]);return d}(q);k.__decorate([n.property()],c.prototype,"view",void 0);
return c=k.__decorate([p.subclass("esri.views.2d.input.MapViewInputManager")],c)});