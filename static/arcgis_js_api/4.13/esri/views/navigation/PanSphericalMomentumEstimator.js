// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/libs/gl-matrix-2/vec2f64 ../../core/libs/gl-matrix-2/vec3 ../../core/libs/gl-matrix-2/vec3f64 ../3d/state/utils/navigationUtils ./FilteredFiniteDifference ./FilteredValue ./Momentum".split(" "),function(l,e,q,r,f,d,m,h,n,t){Object.defineProperty(e,"__esModule",{value:!0});var p=function(c){function b(a,b,g,f,d,k,e){void 0===k&&(k=0);a=c.call(this,a,b,g)||this;a.angularVelocity1=f;a.axis1=d;a.angularVelocity2=k;a.axis2=e;return a}
q(b,c);b.prototype.value1=function(a){return c.prototype.valueFromInitialVelocity.call(this,this.angularVelocity1,a)};b.prototype.value2=function(a){return c.prototype.valueFromInitialVelocity.call(this,this.angularVelocity2,a)};return b}(t.Momentum);e.PanSphericalMomentum=p;l=function(){function c(b,a,c){void 0===b&&(b=300);void 0===a&&(a=12);void 0===c&&(c=.84);this.minimumInitialVelocity=b;this.stopVelocity=a;this.friction=c;this.tmpAxis1=d.vec3f64.create();this.tmpAxis2=d.vec3f64.create();this.tmpAngles=
r.vec2f64.create();this.time=new h.FilteredFiniteDifference(.3);this.screen=[new h.FilteredFiniteDifference(.4),new h.FilteredFiniteDifference(.4)];this.angle1=new n.FilteredValue(.6);this.angle2=new n.FilteredValue(.6);this.axis1=d.vec3f64.create();this.axis2=d.vec3f64.create();this.lastScene=d.vec3f64.create()}c.prototype.addMomentumDirectRotation=function(b,a,c,g,d,e){if(this.time.hasLastValue){if(.01>this.time.computeDelta(c))return;g=m.rotationAngleAndAxisDirectRotation(this.lastScene,a,this.tmpAxis2,
g,d,e);this.angle2.update(0);1E-5>f.vec3.squaredLength(this.tmpAxis2)?g=0:f.vec3.normalize(this.axis1,this.tmpAxis2);this.angle1.update(g);f.vec3.copy(this.lastScene,a)}this.screen[0].update(b[0]);this.screen[1].update(b[1]);this.time.update(c)};c.prototype.addMomentumPreserveHeading=function(b,a,c,d,e,h,k){if(this.time.hasLastValue){if(.01>this.time.computeDelta(c))return;m.rotationAnglesAndAxesHeadingPreserving(this.lastScene,a,this.tmpAxis2,this.tmpAxis1,this.tmpAngles,d,e,h,k,!1);1E-5>f.vec3.squaredLength(this.tmpAxis2)?
(this.angle1.update(0),this.angle2.update(0)):(this.angle1.update(this.tmpAngles[1]),this.angle2.update(this.tmpAngles[0]),f.vec3.normalize(this.axis1,this.tmpAxis1),f.vec3.normalize(this.axis2,this.tmpAxis2));f.vec3.copy(this.lastScene,a)}this.screen[0].update(b[0]);this.screen[1].update(b[1]);this.time.update(c)};c.prototype.reset=function(){this.screen[0].reset();this.screen[1].reset();this.angle1.reset();this.angle2.reset();this.time.reset()};c.prototype.evaluateMomentum=function(){if(!this.screen[0].hasFilteredDelta)return null;
var b=this.screen[0].filteredDelta,a=this.screen[1].filteredDelta,b=Math.sqrt(b*b+a*a)/this.time.filteredDelta;return Math.abs(b)<this.minimumInitialVelocity?null:this.createMomentum(b,this.stopVelocity,this.friction)};c.prototype.createMomentum=function(b,a,c){return new p(b,a,c,this.angle1.filteredValue/this.time.filteredDelta,this.axis1,this.angle2.filteredValue/this.time.filteredDelta,this.axis2)};return c}();e.PanSphericalMomentumEstimator=l});