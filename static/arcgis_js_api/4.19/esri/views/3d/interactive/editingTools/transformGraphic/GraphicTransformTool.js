// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/handleUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../core/Evented ../../../../../chunks/common ../../../../../core/Handles ../../../../../support/elevationInfoUtils ../../../../interactive/editGeometry/EditGeometry ../../../../interactive/editGeometry/EditGeometryHelper ../../../../interactive/snapping/SnappingContext ../../SnappingDragPipelineStep ../../SnappingVisualizer3D ../../../../interactive/InteractiveToolBase ../../manipulatorUtils ../manipulatorUtils ../../../layers/graphics/GraphicState ../visualElementUtils ../manipulations/config ../manipulations/MoveManipulation ./GraphicScaleRotateTransform".split(" "),
function(c,p,e,L,g,M,N,v,f,O,w,P,Q,R,x,y,z,q,A,B,C,D,E,F,G,r,H,I,J,t,K){c.GraphicTransformTool=function(u){function k(a){a=u.call(this,a)||this;a.enableZ=!0;a.enableRotation=!0;a.enableScaling=!0;a.type="transform-3d";a.handles=new z;a.scaleRotate=null;a.snappingPipeline=new D.SnappingPipeline;return a}p._inheritsLoose(k,u);var d=k.prototype;d.initialize=function(){this.graphicState=new H.GraphicState({graphic:this.graphic});this.moveManipulation=new t.MoveManipulation({tool:this,view:this.view,snapToScene:this.snapToScene,
xyAvailable:!0,xyAxisAvailable:!0,zAvailable:this.enableZ&&r.canMoveZ(this.graphic),radius:t.MoveManipulation.radiusForSymbol(this.graphic.symbol)});this.moveManipulation.forEachManipulator(b=>this.handles.add(b.events.on("immediate-click",l=>l.stopPropagation())));this.moveManipulation.elevationInfo=q.getGraphicEffectiveElevationInfo(this.graphic);const a=this.graphic.geometry;this.moveManipulation.createGraphicDragPipeline((b,l,h,m,n)=>{g.isSome(a)&&"point"===a.type&&0===b&&(h=h.next(this.snappingPipeline.createSnapDragEventPipelineStep({snappingContext:new C.SnappingContext({elevationInfo:q.getGraphicEffectiveElevationInfo(this.graphic),
pointer:n,geometry:new B.EditGeometryHelper(A.EditGeometry.fromGeometry(a,this.view.viewingMode),"point"),visualizer:new E.SnappingVisualizer3D,excludeFeature:this.graphic}),snappingManager:this.snappingManager,cancel:m}),this.snappingPipeline.next));return h},this.graphicState,b=>{const {action:l,graphic:h,dxScreen:m,dyScreen:n}=b;b={graphic:h,dxScreen:m,dyScreen:n};switch(l){case "start":this.emit("graphic-translate-start",b);break;case "update":this.emit("graphic-translate",b);break;case "end":this.emit("graphic-translate-stop",
b)}});this.moveManipulation.angle=this.symbolRotationAngle;if(this.enableScaling||this.enableRotation)this.scaleRotate=new K.GraphicScaleRotateTransform({tool:this,mode:this.enableScaling&&this.enableRotation?null:this.enableScaling?"scale":"rotate"}),this.handles.add(this.scaleRotate.events.on("scale-changed",()=>this.onScaleChanged()));this.handles.add([I.createVisualElements({view:this.view,graphic:this.graphic,forEachManipulator:b=>this.forEachManipulator(b),onManipulatorsChanged:()=>v.makeHandle()}),
this.graphic.watch("symbol",()=>this.updateMoveAngle()),this.graphicState.on("changed",()=>this.onGeometryChanged()),this.hideManipulatorsForGraphicState(),this.view.watch("scale",()=>this.updateMoveAngle())]);this.handles.add(this.view.trackGraphicState(this.graphicState));this.onGeometryChanged()};d.forEachManipulator=function(a){this.moveManipulation.forEachManipulator(a);g.isSome(this.scaleRotate)&&this.scaleRotate.forEachManipulator(a)};d.hideManipulatorsForGraphicState=function(){return this.graphicState.watch("displaying",
a=>{this.forEachManipulator(b=>b.available=a);this.moveManipulation.zManipulation.available=a&&this.enableZ&&r.canMoveZ(this.graphic)})};d.destroy=function(){this.handles.destroy();this.moveManipulation.destroy();this.scaleRotate=g.destroyMaybe(this.scaleRotate);this._set("view",null);this._set("graphic",null)};d.reset=function(){};d.onDetach=function(){g.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()};d.onHide=function(){g.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()};
d.onScaleChanged=function(){if(!g.isNone(this.scaleRotate)){var a=this.scaleRotate.getScale();this.moveManipulation.displayScale=a}};d.updateMoveAngle=function(){this.moveManipulation.angle="local"===this.view.viewingMode||this.view.scale<J.ALIGN_ARROWS_SCALE_THRESHOLD?this.symbolRotationAngle:0};d.onGeometryChanged=function(){G.placeAtGraphic(this.view,this.moveManipulation,this.graphic)};p._createClass(k,[{key:"snapToScene",set:function(a){this.moveManipulation&&(this.moveManipulation.snapToScene=
a);this._set("snapToScene",a)}},{key:"symbolRotationAngle",get:function(){var a=this.graphic.symbol;return a?(a=a.symbolLayers.find(b=>"object"===b.type),y.toRadian(-(a&&a.heading||0))):0}},{key:"test",get:function(){return{discManipulator:this.moveManipulation.xyManipulation.test.discManipulator,ringManipulator:g.isSome(this.scaleRotate)?this.scaleRotate.test.ringManipulator:null,arrowManipulators:this.moveManipulation.xyAxisManipulation.test.arrowManipulators}}}]);return k}(x.EventedMixin(F.InteractiveToolBase));
e.__decorate([f.property({constructOnly:!0,nonNullable:!0})],c.GraphicTransformTool.prototype,"view",void 0);e.__decorate([f.property({constructOnly:!0,nonNullable:!0})],c.GraphicTransformTool.prototype,"graphic",void 0);e.__decorate([f.property({constructOnly:!0,nonNullable:!0})],c.GraphicTransformTool.prototype,"enableZ",void 0);e.__decorate([f.property()],c.GraphicTransformTool.prototype,"enableRotation",void 0);e.__decorate([f.property()],c.GraphicTransformTool.prototype,"enableScaling",void 0);
e.__decorate([f.property({value:!1})],c.GraphicTransformTool.prototype,"snapToScene",null);e.__decorate([f.property({constructOnly:!0})],c.GraphicTransformTool.prototype,"snappingManager",void 0);e.__decorate([f.property({readOnly:!0})],c.GraphicTransformTool.prototype,"type",void 0);c.GraphicTransformTool=e.__decorate([w.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransformTool")],c.GraphicTransformTool);Object.defineProperty(c,"__esModule",{value:!0})});