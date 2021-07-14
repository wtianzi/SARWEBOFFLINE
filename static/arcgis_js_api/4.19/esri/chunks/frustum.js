// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ./vec3f64 ./vec3 ./mat4 ../core/ObjectStack ./vec4f64 ./vec4 ../views/3d/support/stack ./plane ./clipRay".split(" "),function(e,f,F,q,k,g,G,r,d,l){function m(b){return b?[d.create(b[0]),d.create(b[1]),d.create(b[2]),d.create(b[3]),d.create(b[4]),d.create(b[5])]:[d.create(),d.create(),d.create(),d.create(),d.create(),d.create()]}function n(){return[f.create(),f.create(),f.create(),f.create(),f.create(),f.create(),f.create(),f.create()]}function t(b,a=m()){for(let c=0;6>c;c++)d.copy(b[c],
a[c])}function u(b,a,c,v=H){b=q.multiply(r.sm4d.get(),a,b);q.invert(b,b);for(a=0;8>a;++a){const h=G.transformMat4(r.sv4d.get(),I[a],b);F.set(v[a],h[0]/h[3],h[1]/h[3],h[2]/h[3])}p(c,v)}function p(b,a){d.fromPoints(a[4],a[0],a[3],b[0]);d.fromPoints(a[1],a[5],a[6],b[1]);d.fromPoints(a[4],a[5],a[1],b[2]);d.fromPoints(a[3],a[2],a[6],b[3]);d.fromPoints(a[0],a[1],a[2],b[4]);d.fromPoints(a[5],a[4],a[7],b[5])}function w(b,a){for(let c=0;6>c;c++)if(d.isSphereFullyInside(b[c],a))return!1;return!0}function x(b,
a){return y(b,l.fromRay(a,z.get()))}function A(b,a){for(let c=0;6>c;c++)if(!d.clipInfinite(b[c],a))return!1;return!0}function B(b,a,c){return y(b,l.fromLineSegmentAndDirection(a,c,z.get()))}function C(b,a){for(let c=0;6>c;c++)if(0<d.signedDistance(b[c],a))return!1;return!0}function D(b,a){for(let c=0;6>c;c++)if(d.isAABBFullyInside(b[c],a))return!1;return!0}function y(b,a){for(let c=0;6>c;c++)if(!d.clip(b[c],a))return!1;return!0}const E={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],
left:[4,0,3,7],top:[7,3,2,6]},I=[g.fromValues(-1,-1,-1,1),g.fromValues(1,-1,-1,1),g.fromValues(1,1,-1,1),g.fromValues(-1,1,-1,1),g.fromValues(-1,-1,1,1),g.fromValues(1,-1,1,1),g.fromValues(1,1,1,1),g.fromValues(-1,1,1,1)],z=new k.ObjectStack(l.create),H=n();k=Object.freeze({__proto__:null,create:m,createPoints:n,copy:t,fromMatrix:u,computePlanes:p,intersectsSphere:w,intersectsRay:x,intersectClipRay:A,intersectsLineSegment:B,intersectsPoint:C,intersectsAABB:D,planePointIndices:E});e.computePlanes=
p;e.copy=t;e.create=m;e.createPoints=n;e.fromMatrix=u;e.frustumModule=k;e.intersectClipRay=A;e.intersectsAABB=D;e.intersectsLineSegment=B;e.intersectsPoint=C;e.intersectsRay=x;e.intersectsSphere=w;e.planePointIndices=E});