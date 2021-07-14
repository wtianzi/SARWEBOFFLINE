// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ./MomentumController".split(" "),function(c,f,g,d,h,k){Object.defineProperty(f,"__esModule",{value:!0});c=function(c){function e(a,b){a=c.call(this,a,4)||this;a.momentum=b;a.tmpPan=h.vec3f64.create();return a}g(e,c);e.prototype.momentumStep=function(a,b){a=this.momentum.value(a);d.vec3.scale(this.tmpPan,this.momentum.direction,a);d.vec3.subtract(b.eye,
b.eye,this.tmpPan);d.vec3.subtract(b.center,b.center,this.tmpPan);b.markViewDirty();this.constraintOptions.interactionDirection=this.tmpPan};return e}(k.MomentumController);f.PanPlanarMomentumController=c});