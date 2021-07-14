// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../geometry/projectionEllipsoid ../../../../chunks/mat4 ../geometryUtils".split(" "),function(d,p,f,u,v,k){function q(a){return{operations:a,value:a.create()}}function m(a,b,c=q(a)){c.operations=a;a.copy(b,c.value);return c}function r(a,b,c,e){return a.operations.setAltitudeAt(a.value,b,c,e)}const t=2**50,g=p.create(),n={operations:null,value:null},l=p.create();d.altitudeAt=function(a,b){return a.operations.altitudeAt(a.value,
b)};d.axisAt=function(a,b,c,e){return a.operations.axisAt(a.value,b,c,e)};d.closestPoint=function(a,b,c){return a.operations.closestPoint(a.value,b,c)};d.closestPointOnSilhouette=function(a,b,c){return a.operations.closestPointOnSilhouette(a.value,b,c)};d.coordinateSystemFromOneAxisAndNormalVector=function(a,b,c,e,h){f.copy(c,a);f.copy(l,b);f.normalize(l,l);f.cross(e,l,c);f.cross(h,e,c)};d.create=function(a){const {value:b,operations:c}=a;return{operations:c,value:c.create(b)}};d.createFromOperations=
q;d.createGlobal=function(a){return m(k.sphere,k.sphere.fromValues(0,0,0,u.getReferenceEllipsoid(a).radius))};d.createLocal=function(){return m(k.boundedPlane,k.boundedPlane.fromValues([0,0,0],[t,0,0],[0,t,0]))};d.distanceToSilhouette=function(a,b){return a.operations.distanceToSilhouette(a.value,b)};d.elevate=function(a,b,c){return a.operations.elevate(a.value,b,c.value)};d.fromValues=m;d.intersectRay=function(a,b,c){return a.operations.intersectRay(a.value,b,c)};d.intersectRayClosestSilhouette=
function(a,b,c){return a.operations.intersectRayClosestSilhouette(a.value,b,c)};d.intersectsRay=function(a,b){return a.operations.intersectRay(a.value,b,null)};d.normalAt=function(a,b,c){return a.operations.axisAt(a.value,b,2,c)};d.setAltitudeAt=r;d.setAltitudeOfTransformation=function(a,b,c,e){b!==e&&v.copy(e,b);f.set(g,e[12],e[13],e[14]);r(a,g,c,g);e[12]=g[0];e[13]=g[1];e[14]=g[2];return e};d.setExtent=function(a,b,c){a.operations.setExtent(a.value,b,c.value);return c};d.vectorCoordinates=function(a,
b,c,e,h){h[0]=f.dot(a,b);h[1]=f.dot(a,c);h[2]=f.dot(a,e);return h};d.wrap=function(a,b){n.operations=a;n.value=b;return n};Object.defineProperty(d,"__esModule",{value:!0})});