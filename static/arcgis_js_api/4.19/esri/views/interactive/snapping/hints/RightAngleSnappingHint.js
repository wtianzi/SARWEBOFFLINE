// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Logger ../snappingUtils ./SnappingHint".split(" "),function(e,h,f,k,d,l){k.getLogger("esri.views.interactive.snapping.hints.RightAngleSnappingHint");f=function(g){function b(a,m,n){var c=g.call(this)||this;c.previousVertex=a;c.centerVertex=m;c.nextVertex=n;return c}h._inheritsLoose(b,g);b.prototype.equals=function(a){return a instanceof b?d.objectEqual(this.previousVertex,a.previousVertex)&&d.objectEqual(this.centerVertex,
a.centerVertex)&&d.objectEqual(this.nextVertex,a.nextVertex):!1};return b}(l.SnappingHint);e.RightAngleSnappingHint=f;Object.defineProperty(e,"__esModule",{value:!0})});