// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../core/Evented ../../core/screenUtils ../../layers/graphics/dehydratedFeatures ../2d/interactive/SnappingVisualizer2D ../interactive/coordinateHelper ../interactive/editGeometry/EditGeometry ../interactive/editGeometry/EditGeometryHelper ../interactive/snapping/SnappingContext".split(" "),
function(l,g,e,d,C,D,h,E,q,F,G,H,r,t,m,u,v,w,n,x,y){e=function(p){function k(a){var c;var b=p.call(this,a)||this;b._hasZ=null;b._snappingTask=null;b._stagedVertex=null;b._stagedVertexUnsnapped=null;b._lastVertexUnsnapped=null;b._nativeEventHistory={undoStack:[],redoStack:[]};b.interactiveUndoDisabled=!1;b.history=[];b.redoHistory=[];b.snapToScene=!1;b.view=null;b.elevationInfo=null;b.defaultZ=0;b._coordinateHelper=w.createCoordinateHelper(a.hasZ,!1,a.view.spatialReference,"local");b._snappingManager=
a.snappingManager;b._editGeometry=new x.EditGeometryHelper(new n.EditGeometry(b._coordinateHelper),null!=(c=a.editGeometryType)?c:"polygon");b._snappingContext=new y.SnappingContext({geometry:b._editGeometry,elevationInfo:{mode:"on-the-ground",offset:0},pointer:"mouse",visualizer:new v.SnappingVisualizer2D});b._activeComponent=new n.Component(b._editGeometry.editGeometry);b._editGeometry.editGeometry.components.push(b._activeComponent);return b}l._inheritsLoose(k,p);var f=k.prototype;f.destroy=function(){this._snappingTask=
d.abortMaybe(this._snappingTask);d.isSome(this._snappingManager)&&this._snappingManager.doneSnapping();this._editGeometry.destroy()};f.canUndo=function(){return this._editGeometry.editGeometry.canUndo};f.canRedo=function(){return this._editGeometry.editGeometry.canRedo};f.undo=function(){this.canUndo()&&this._editGeometry.undo()};f.redo=function(){this.canRedo()&&this._editGeometry.redo()};f.getCoordsFromScreenPoint=function(a){a=this.screenToMap(a);return d.isSome(a)?a.hasZ?[a.x,a.y,a.z]:[a.x,a.y]:
null};f.getCoordsAndPointFromScreenPoint=function(a){a=this.screenToMap(a);return d.isSome(a)?a.hasZ?{vertex:[a.x,a.y,a.z],mapPoint:a}:{vertex:[a.x,a.y],mapPoint:a}:null};f._pushCursorVertex=function(a){const c=u.makeDehydratedPoint(a[0],a[1],null,this.view.spatialReference);this._stagedVertexUnsnapped=c;d.isNone(this._snappingManager)?this._stagedVertex=c:(this._stagedVertex=this._snappingManager.update(c,this._snappingContext),this._snappingTask=r.createTask(async b=>d.isSome(this._snappingManager)?
(b=await this._snappingManager.snap(c,this._snappingContext,b),b.valid&&(this._stagedVertex=b.apply(),this.notifyChange("vertices")),b):null))};f._popCursorVertex=function(){this._stagedVertexUnsnapped=this._stagedVertex=null;this.notifyChange("vertices")};f.getGeometryZValue=function(){return this.defaultZ};f.screenToMap=function(a){var c=null;"3d"===this.view.type?this.hasZ?(c=d.unwrapOr(this.elevationInfo,z),c=this.view.sceneIntersectionHelper.intersectElevationFromScreen(m.createScreenPointArray(a.x,
a.y),c,this.getGeometryZValue())):(c=d.unwrapOr(this.elevationInfo,A),c=this.view.sceneIntersectionHelper.intersectElevationFromScreen(m.createScreenPointArray(a.x,a.y),c,0),d.isSome(c)&&(c.z=void 0)):(c=this.view.toMap(a),d.isSome(c)&&(c.z=this.hasZ?this.getGeometryZValue():void 0));return c};f._isDuplicateOfLastVertex=function(a){const c=this._editGeometry.editGeometry.components[0].getLastVertex();if(d.isSome(c)&&a[0]===c[0]&&a[1]===c[1])return!0;const {x:b,y:B}=this._coordinateHelper.createDehydratedPoint(a);
return d.isSome(this._lastVertexUnsnapped)&&b===this._lastVertexUnsnapped.x&&B===this._lastVertexUnsnapped.y?!0:!1};l._createClass(k,[{key:"_committedVertices",get:function(){return this._editGeometry.editGeometry.components[0].vertices.map(a=>a.pos)}},{key:"vertices",get:function(){return d.isSome(this._stagedVertex)?[...this._committedVertices,this._coordinateHelper.pointToArray(this._stagedVertex)]:this._committedVertices}},{key:"hasZ",get:function(){return d.isSome(this._hasZ)?this._hasZ:"3d"===
this.view.type},set:function(a){this._hasZ=a;this.notifyChange("hasZ")}}]);return k}(t.EventedAccessor);g.__decorate([h.property({readOnly:!0})],e.prototype,"vertices",null);g.__decorate([h.property({type:Boolean,nonNullable:!0})],e.prototype,"interactiveUndoDisabled",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"history",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"redoHistory",void 0);g.__decorate([h.property()],e.prototype,"snapToScene",void 0);g.__decorate([h.property()],
e.prototype,"view",void 0);g.__decorate([h.property()],e.prototype,"elevationInfo",void 0);g.__decorate([h.property({nonNullable:!0})],e.prototype,"defaultZ",void 0);g.__decorate([h.property()],e.prototype,"hasZ",null);e=g.__decorate([q.subclass("esri.views.draw.DrawAction")],e);const z={mode:"absolute-height",offset:0},A={mode:"on-the-ground",offset:0};return e});