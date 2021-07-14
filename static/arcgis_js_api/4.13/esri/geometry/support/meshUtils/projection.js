// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Logger ../../../core/libs/gl-matrix-2/mat3 ../../../core/libs/gl-matrix-2/mat3f64 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../views/3d/support/projectionUtils ../../../views/3d/support/buffer/BufferView".split(" "),function(z,f,w,p,x,y,n,u,g,d){function q(h,c,v,e,b,d){if(c){var f=v.count;if(b.isWGS84)for(b=0;b<f;b++)e.getVec(b,k),c.getVec(b,l),g.computeLinearTransformation(g.SphericalECEFSpatialReference,
k,r,g.SphericalECEFSpatialReference),p.mat3.fromMat4(a,r),1===h&&p.mat3.transpose(a,a),n.vec3.transformMat3(l,l,a),d.setVec(b,l);else for(b=0;b<f;b++){e.getVec(b,k);c.getVec(b,l);g.computeLinearTransformation(g.SphericalECEFSpatialReference,k,r,g.SphericalECEFSpatialReference);p.mat3.fromMat4(a,r);var m=g.webMercator.y2lat(v.get(b,1)),m=Math.cos(m);0===h&&(m=1/m);a[0]*=m;a[1]*=m;a[2]*=m;a[3]*=m;a[4]*=m;a[5]*=m;1===h&&p.mat3.transpose(a,a);n.vec3.transformMat3(l,l,a);n.vec3.normalize(l,l);d.setVec(b,
l)}return d}}Object.defineProperty(f,"__esModule",{value:!0});var t=w.getLogger("esri.geometry.support.meshUtils.normalProjection");f.projectNormalToECEF=function(h,c,a,e,b){if(!e.isWebMercator&&!e.isWGS84)return t.error("Cannot convert PCS spatial reference buffer to ECEF"),b;q(0,d.BufferViewVec3f.fromTypedArray(h),d.BufferViewVec3f64.fromTypedArray(c),d.BufferViewVec3f64.fromTypedArray(a),e,d.BufferViewVec3f.fromTypedArray(b));return b};f.projectNormalFromECEF=function(h,c,a,e,b){if(!e.isWebMercator&&
!e.isWGS84)return t.error("Cannot convert to PCS spatial reference buffer from ECEF"),b;q(1,d.BufferViewVec3f.fromTypedArray(h),d.BufferViewVec3f64.fromTypedArray(c),d.BufferViewVec3f64.fromTypedArray(a),e,d.BufferViewVec3f.fromTypedArray(b));return b};f.projectToECEF=function(h,c,a){g.bufferToBuffer(h,c,0,a,g.SphericalECEFSpatialReference,0,h.length/3);return a};f.projectFromECEF=function(a,c,d){g.bufferToBuffer(a,g.SphericalECEFSpatialReference,0,c,d,0,a.length/3);return c};f.transformBufferInPlace=
function(a,c,d){void 0===d&&(d=!1);if(a)for(var e=0;e<a.length;e+=3){for(var b=0;3>b;b++)k[b]=a[e+b];n.vec3.transformMat4(k,k,c);d&&n.vec3.normalize(k,k);for(b=0;3>b;b++)a[e+b]=k[b]}};f.projectTangentToECEF=function(a,c,f,e,b){if(!e.isWebMercator&&!e.isWGS84)return t.error("Cannot convert PCS spatial reference buffer to ECEF"),b;q(0,d.BufferViewVec3f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),d.BufferViewVec3f64.fromTypedArray(c),d.BufferViewVec3f64.fromTypedArray(f),e,d.BufferViewVec3f.fromTypedArray(b,
4*Float32Array.BYTES_PER_ELEMENT));for(c=3;c<a.length;c+=4)b[c]=a[c];return b};f.projectTangentFromECEF=function(a,c,f,e,b){if(!e.isWebMercator&&!e.isWGS84)return t.error("Cannot convert to PCS spatial reference buffer from ECEF"),b;q(1,d.BufferViewVec3f.fromTypedArray(a,16),d.BufferViewVec3f64.fromTypedArray(c),d.BufferViewVec3f64.fromTypedArray(f),e,d.BufferViewVec3f.fromTypedArray(b,16));for(c=3;c<a.length;c+=4)b[c]=a[c];return b};var k=u.vec3f64.create(),l=u.vec3f64.create(),r=y.mat4f64.create(),
a=x.mat3f64.create()});