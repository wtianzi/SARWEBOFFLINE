// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/watchUtils ../../../../../core/accessorSupport/decorators ./isSupportedGraphic ./ReshapeOperation ./reshapeUtils ../../../../interactive/InteractiveToolBase".split(" "),function(f,h,g,k,l,m,n,d,p,e,q,r,t,u){Object.defineProperty(h,"__esModule",{value:!0});
var v=n.getLogger("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshape3DTool");f=function(f){function c(a){a=f.call(this,a)||this;a._handles=new m;a._reshapeOperation=null;a._internalGeometryUpdate=!1;a.type="reshape-3d";return a}k(c,f);c.prototype.destroy=function(){this._handles.removeAll();this._set("view",null);this._set("graphic",null)};Object.defineProperty(c.prototype,"graphic",{set:function(a){d.isSome(a)&&!q.isSupportedGraphic(a)?v.error("Only polyline and polygon geometries are supported"):
this._set("graphic",a)},enumerable:!0,configurable:!0});c.prototype._updateGeometry=function(){d.isSome(this.graphic)&&t.isReshapeGeometry(this.graphic.geometry)?this._reshapeOperation.inputGeometry=this.graphic.geometry.clone():this._reshapeOperation.inputGeometry=null};c.prototype._updateGraphic=function(){var a=this;this._handles.remove("onGraphicGeometryChange");this._updateGeometry();var b=this.watch("graphic.geometry",function(){!1===a._internalGeometryUpdate&&a._updateGeometry()},!0);this._handles.add(b,
"onGraphicGeometryChange")};c.prototype._onReshapeGeometryChanged=function(){d.isNone(this.graphic)||(this._internalGeometryUpdate=!0,this.graphic.geometry=this._reshapeOperation.outputGeometry.clone(),this._internalGeometryUpdate=!1)};c.prototype.initialize=function(){var a=this;this._reshapeOperation=new r.ReshapeOperation({view:this.view,manipulators:this.manipulators});this._handles.add([this._reshapeOperation.watch("cursor",function(){a.cursor=a._reshapeOperation.cursor}),this._reshapeOperation.on("reshape-operation-start",
function(b){d.isNone(a.graphic)||(b.graphic=a.graphic,a.emit("reshape-start",b))}),this._reshapeOperation.on("vertex-move",function(b){a._onReshapeGeometryChanged();d.isSome(a.graphic)&&(b.graphic=a.graphic,a.emit("vertex-move",b))}),this._reshapeOperation.on("translate",function(b){a._onReshapeGeometryChanged();d.isSome(a.graphic)&&(b.graphic=a.graphic,a.emit("translate",b))}),this._reshapeOperation.on("vertex-add",function(b){a._onReshapeGeometryChanged();d.isSome(a.graphic)&&(b.graphic=a.graphic,
a.emit("vertex-add",b))}),this._reshapeOperation.on("vertex-remove",function(b){a._onReshapeGeometryChanged();d.isSome(a.graphic)&&(b.graphic=a.graphic,a.emit("vertex-remove",b))}),this._reshapeOperation.on("reshape-operation-stop",function(b){d.isNone(a.graphic)||(b.graphic=a.graphic,a.emit("reshape-stop",b))}),this._reshapeOperation.on("click",function(){return a.emit("click")}),p.init(this,"graphic",function(){a._updateGraphic()},!0)])};c.prototype.handleInputEvent=function(a){"key-down"!==a.type||
"Delete"!==a.key&&"Backspace"!==a.key||this._reshapeOperation.removeSelectedVertices()};c.prototype.reset=function(){this.graphic=null};g([e.property({constructOnly:!0,nonNullable:!0})],c.prototype,"view",void 0);g([e.property({value:null})],c.prototype,"graphic",null);g([e.property({readOnly:!0})],c.prototype,"type",void 0);g([e.property({value:null})],c.prototype,"cursor",void 0);return c=g([e.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshape3DTool")],c)}(e.declared(l.EventedMixin(u.InteractiveToolBase)));
h.GraphicReshape3DTool=f});