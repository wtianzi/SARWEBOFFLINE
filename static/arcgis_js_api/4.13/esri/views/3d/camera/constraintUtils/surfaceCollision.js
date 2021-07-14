// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../intersectionUtils"],function(n,h,d,l,m){Object.defineProperty(h,"__esModule",{value:!0});h.apply=function(e,b,f,a){void 0===f&&(f=0);void 0===a&&(a=b);var c=e.state.constraints;b!==a&&a.copyFrom(b);if(!c.collision.enabled)return!1;var g=m.surfaceElevationBelowEye(e,b);b=e.renderCoordsHelper.getAltitude(b.eye);c=g+c.collision.elevationMargin;if(b>=c)return!1;g=d.vec3.length(a.eye);d.vec3.subtract(k,
a.center,a.eye);e.renderCoordsHelper.setAltitude(c,a.eye);1===f?d.vec3.add(a.center,a.eye,k):2===f&&d.vec3.scale(a.center,a.center,(g-b+c)/g);a.markViewDirty();return!0};var k=l.vec3f64.create()});