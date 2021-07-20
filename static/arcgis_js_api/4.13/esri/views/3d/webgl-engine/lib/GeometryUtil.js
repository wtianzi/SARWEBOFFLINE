// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f32 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/geometryUtils ./BufferVectorMath ./GeometryData ./Util".split(" "),function(Z,aa,g,n,Y,U,T,C,k){var G=T.Vec3Compact,P;(function(g){for(var n=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],p=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],c=[0,0,1,0,1,1,0,1],d=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,
2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],a=Array(36),b=0;6>b;b++)for(var f=0;6>f;f++)a[6*b+f]=b;for(var h=Array(36),b=0;6>b;b++)h[6*b+0]=0,h[6*b+1]=1,h[6*b+2]=2,h[6*b+3]=2,h[6*b+4]=3,h[6*b+5]=0;g.createGeometry=function(b){Array.isArray(b)||(b=[b,b,b]);for(var e=new Float32Array(24),f=0;8>f;f++)e[3*f]=n[f][0]*b[0],e[3*f+1]=n[f][1]*b[1],e[3*f+2]=n[f][2]*b[2];b={};b[k.VertexAttrConstants.POSITION]=new Uint32Array(d);b[k.VertexAttrConstants.NORMAL]=new Uint32Array(a);b[k.VertexAttrConstants.UV0]=new Uint32Array(h);
f={};f[k.VertexAttrConstants.POSITION]={size:3,data:e};f[k.VertexAttrConstants.NORMAL]={size:3,data:new Float32Array(p)};f[k.VertexAttrConstants.UV0]={size:2,data:new Float32Array(c)};return new C.GeometryData(f,b)}})(P||(P={}));var M;(function(g){var n=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],p=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],c=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],d=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];g.createGeometry=function(a){Array.isArray(a)||
(a=[a,a,a]);for(var b=new Float32Array(18),f=0;6>f;f++)b[3*f]=n[f][0]*a[0],b[3*f+1]=n[f][1]*a[1],b[3*f+2]=n[f][2]*a[2];a={};a[k.VertexAttrConstants.POSITION]=new Uint32Array(c);a[k.VertexAttrConstants.NORMAL]=new Uint32Array(d);f={};f[k.VertexAttrConstants.POSITION]={size:3,data:b};f[k.VertexAttrConstants.NORMAL]={size:3,data:new Float32Array(p)};return new C.GeometryData(f,a)}})(M||(M={}));var Q;(function(p){var u=n.vec3f32.fromValues(-.5,0,-.5),K=n.vec3f32.fromValues(.5,0,-.5),c=n.vec3f32.fromValues(0,
0,.5),d=n.vec3f32.fromValues(0,.5,0),a=n.vec3f32.create(),b=n.vec3f32.create(),f=n.vec3f32.create(),h=n.vec3f32.create(),e=n.vec3f32.create();g.vec3.subtract(a,u,d);g.vec3.subtract(b,u,K);g.vec3.cross(f,a,b);g.vec3.normalize(f,f);g.vec3.subtract(a,K,d);g.vec3.subtract(b,K,c);g.vec3.cross(h,a,b);g.vec3.normalize(h,h);g.vec3.subtract(a,c,d);g.vec3.subtract(b,c,u);g.vec3.cross(e,a,b);g.vec3.normalize(e,e);var r=[u,K,c,d],v=[0,-1,0,f[0],f[1],f[2],h[0],h[1],h[2],e[0],e[1],e[2]],l=[0,1,2,3,1,0,3,2,1,3,
0,2],A=[0,0,0,1,1,1,2,2,2,3,3,3];p.createGeometry=function(a){Array.isArray(a)||(a=[a,a,a]);for(var b=new Float32Array(12),c=0;4>c;c++)b[3*c]=r[c][0]*a[0],b[3*c+1]=r[c][1]*a[1],b[3*c+2]=r[c][2]*a[2];a={};a[k.VertexAttrConstants.POSITION]=new Uint32Array(l);a[k.VertexAttrConstants.NORMAL]=new Uint32Array(A);c={};c[k.VertexAttrConstants.POSITION]={size:3,data:b};c[k.VertexAttrConstants.NORMAL]={size:3,data:new Float32Array(v)};return new C.GeometryData(c,a)}})(Q||(Q={}));var R;(function(p){function J(c,
d,a,b,f){if(Math.abs(g.vec3.dot(d,c))>f)return!1;g.vec3.cross(a,c,d);g.vec3.normalize(a,a);g.vec3.cross(b,a,c);g.vec3.normalize(b,b);return!0}function K(c,d,a,b,f,h,e){return J(c,d,f,h,e)||J(c,a,f,h,e)||J(c,b,f,h,e)}p.createBoxGeometry=P.createGeometry;p.createDiamondGeometry=M.createGeometry;p.createTetrahedronGeometry=Q.createGeometry;p.createSphereGeometry=function(c,d,a,b,f,h,e){c=c||50;b=void 0!==b?b:-Math.PI;f=void 0!==f?f:2*Math.PI;h=void 0!==h?h:.5*-Math.PI;e=void 0!==e?e:Math.PI;var r=Math.max(3,
Math.floor(d)||8),g=Math.max(2,Math.floor(a)||6),l=(r+1)*(g+1);a=new Float32Array(3*l);d=new Float32Array(3*l);for(var l=new Float32Array(2*l),n=[],m=0,t=0;t<=g;t++){for(var p=[],u=t/g,y=h+u*e,w=Math.cos(y),D=0;D<=r;D++){var q=D/r,z=b+q*f,N=Math.cos(z)*w,F=Math.sin(y),z=-Math.sin(z)*w;a[3*m]=N*c;a[3*m+1]=F*c;a[3*m+2]=z*c;d[3*m]=N;d[3*m+1]=F;d[3*m+2]=z;l[2*m]=q;l[2*m+1]=u;p.push(m);++m}n.push(p)}c=new Uint32Array(2*r*(g-1)*3);for(t=m=0;t<g;t++)for(D=0;D<r;D++)b=n[t][D],f=n[t][D+1],h=n[t+1][D+1],e=
n[t+1][D],0===t?(c[m++]=b,c[m++]=h,c[m++]=e):t===g-1?(c[m++]=b,c[m++]=f,c[m++]=h):(c[m++]=b,c[m++]=f,c[m++]=h,c[m++]=h,c[m++]=e,c[m++]=b);k.assert(m===c.length);r={};r[k.VertexAttrConstants.POSITION]=c;r[k.VertexAttrConstants.NORMAL]=c;r[k.VertexAttrConstants.UV0]=c;g={};g[k.VertexAttrConstants.POSITION]={size:3,data:a};g[k.VertexAttrConstants.NORMAL]={size:3,data:d};g[k.VertexAttrConstants.UV0]={size:2,data:l};return new C.GeometryData(g,r)};p.createPolySphereGeometry=function(c,d,a){function b(a,
b){a>b&&(b=[b,a],a=b[0],b=b[1]);var d=a.toString()+"."+b.toString();if(e[d])return e[d];var h=f.length;f.length+=3;G.add(f,3*a,f,3*b,f,h);G.scale(f,h,c/G.length(f,h));h/=3;return e[d]=h}var f;a?(f=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=new Uint32Array([0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1])):(a=c*(1+Math.sqrt(5))/2,f=[-c,a,0,c,a,0,-c,-a,0,c,-a,0,0,-c,a,0,c,a,0,-c,-a,0,c,-a,a,0,-c,a,0,c,-a,0,-c,-a,0,c],a=new Uint32Array([0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,
7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]));for(var h=0;h<f.length;h+=3)G.scale(f,h,c/G.length(f,h));for(var e={},h=0;h<d;h++){for(var g=a.length,v=new Uint32Array(4*g),l=0;l<g;l+=3){var n=a[l],m=a[l+1],t=a[l+2],p=b(n,m),u=b(m,t),y=b(t,n),w=4*l;v[w]=n;v[w+1]=p;v[w+2]=y;v[w+3]=m;v[w+4]=u;v[w+5]=p;v[w+6]=t;v[w+7]=y;v[w+8]=u;v[w+9]=p;v[w+10]=u;v[w+11]=y}a=v;e={}}d=new Float32Array(f);for(h=0;h<d.length;h+=3)G.normalize(d,h);h={};h[k.VertexAttrConstants.POSITION]=a;h[k.VertexAttrConstants.NORMAL]=
a;a={};a[k.VertexAttrConstants.POSITION]={size:3,data:new Float32Array(f)};a[k.VertexAttrConstants.NORMAL]={size:3,data:d};return new C.GeometryData(a,h)};p.createPointGeometry=function(c,d,a,b,f,h,e,g){d=d?new Float64Array([d[0],d[1],d[2]]):new Float32Array([0,0,0]);c=c?new Float32Array([c[0],c[1],c[2]]):new Float32Array([0,0,1]);h=h?new Float32Array(h):new Float32Array([0,0]);a=a?new Uint8Array([255*a[0],255*a[1],255*a[2],3<a.length?255*a[3]:255]):new Uint8Array([255,255,255,255]);var r=null!=b&&
2===b.length?new Float32Array(b):new Float32Array([1,1]);b={};b[k.VertexAttrConstants.POSITION]={size:3,data:d};b[k.VertexAttrConstants.NORMAL]={size:3,data:c};b[k.VertexAttrConstants.UV0]={size:h.length,data:h};b[k.VertexAttrConstants.COLOR]={size:4,data:a};b[k.VertexAttrConstants.SIZE]={size:2,data:r};null!=f&&(f=new Float32Array([f[0],f[1],f[2],f[3]]),b[k.VertexAttrConstants.AUXPOS1]={size:4,data:f});null!=e&&(e=new Float32Array([e[0],e[1],e[2],e[3]]),b[k.VertexAttrConstants.AUXPOS2]={size:4,data:e});
return null!=g?(C.GeometryData.call(g,b,C.GeometryData.DefaultIndices,C.GeometryData.DefaultOffsets,"point"),g):new C.GeometryData(b,C.GeometryData.DefaultIndices,C.GeometryData.DefaultOffsets,"point")};p.updatePointGeometry=function(c,d,a,b,f,h,e,g){var r=g.vertexAttributes;if(null!=c){var l=r[k.VertexAttrConstants.NORMAL].data;l[0]=c[0];l[1]=c[1];l[2]=c[2]}null!=d&&(l=r[k.VertexAttrConstants.POSITION].data,l[0]=d[0],l[1]=d[1],l[2]=d[2]);null!=a&&(l=r[k.VertexAttrConstants.COLOR].data,l[0]=a[0],
l[1]=a[1],l[2]=a[2],l[3]=a[3]);null!=b&&(l=r[k.VertexAttrConstants.SIZE].data,l[0]=b[0],l[1]=b[1]);null!=f&&(l=r[k.VertexAttrConstants.AUXPOS1].data,l[0]=f[0],l[1]=f[1],l[2]=f[2],l[3]=f[3]);null!=h&&(l=r[k.VertexAttrConstants.UV0].data,l[0]=h[0],l[1]=h[1]);null!=e&&(l=r[k.VertexAttrConstants.AUXPOS2].data,l[0]=e[0],l[1]=e[1],l[2]=e[2],l[3]=e[3]);return g};p.createPointArrayGeometry=function(c,d){for(var a=new Float32Array(3*c.length),b=new Float32Array(d?3*c.length:3),f=new Uint32Array(c.length),
h=new Uint32Array(c.length),e=0;e<c.length;e++)a[3*e]=c[e][0],a[3*e+1]=c[e][1],a[3*e+2]=c[e][2],d&&(b[3*e]=d[e][0],b[3*e+1]=d[e][1],b[3*e+2]=d[e][2]),f[e]=e,h[e]=0;d||(b[0]=0,b[1]=1,b[2]=0);c=new Float32Array(2);c[0]=0;c[1]=0;e={};e[k.VertexAttrConstants.POSITION]=f;e[k.VertexAttrConstants.NORMAL]=d?f:h;e[k.VertexAttrConstants.UV0]=h;d={};d[k.VertexAttrConstants.POSITION]={size:3,data:a};d[k.VertexAttrConstants.NORMAL]={size:3,data:b};d[k.VertexAttrConstants.UV0]={size:2,data:c};return new C.GeometryData(d,
e,C.GeometryData.DefaultOffsets,"point")};p.createTriangleGeometry=function(){var c=new Float32Array([0,0,0,0,0,100,100,0,0]),d=new Uint32Array([0,1,2]),a=new Float32Array([0,1,0]),b=new Uint32Array([0,0,0]),f=new Float32Array([0,0]),h=new Uint32Array([0,0,0]),e={};e[k.VertexAttrConstants.POSITION]=d;e[k.VertexAttrConstants.NORMAL]=b;e[k.VertexAttrConstants.UV0]=h;d={};d[k.VertexAttrConstants.POSITION]={size:3,data:c};d[k.VertexAttrConstants.NORMAL]={size:3,data:a};d[k.VertexAttrConstants.UV0]={size:2,
data:f};return new C.GeometryData(d,e)};p.createSquareGeometry=function(c){var d=new Float32Array(12);if(c)for(var a=0;4>a;a++)for(var b=0;3>b;b++)d[3*a+b]=c[a][b];else d[0]=-1,d[1]=-1,d[2]=0,d[3]=1,d[4]=-1,d[5]=0,d[6]=1,d[7]=1,d[8]=0,d[9]=-1,d[10]=1,d[11]=0;var f=new Uint32Array([0,1,2,2,3,0]);c=new Float32Array([0,0,1]);var h=new Uint32Array([0,0,0,0,0,0]),a=new Float32Array([0,0,1,0,1,1,0,1]),b=new Uint8Array([255,255,255,255]),e={};e[k.VertexAttrConstants.POSITION]=f;e[k.VertexAttrConstants.NORMAL]=
h;e[k.VertexAttrConstants.UV0]=f;e[k.VertexAttrConstants.COLOR]=h;f={};f[k.VertexAttrConstants.POSITION]={size:3,data:d};f[k.VertexAttrConstants.NORMAL]={size:3,data:c};f[k.VertexAttrConstants.UV0]={size:2,data:a};f[k.VertexAttrConstants.COLOR]={size:4,data:b};return new C.GeometryData(f,e)};p.createConeGeometry=function(c,d,a,b,f,h){void 0===f&&(f=!0);void 0===h&&(h=!0);var e=0,g=n.vec3f32.fromValues(0,e,0),v=n.vec3f32.fromValues(0,e+c,0),l=n.vec3f32.fromValues(0,-1,0),A=n.vec3f32.fromValues(0,1,
0);b&&(e=c,v=n.vec3f32.fromValues(0,0,0),g=n.vec3f32.fromValues(0,e,0),l=n.vec3f32.fromValues(0,1,0),A=n.vec3f32.fromValues(0,-1,0));g=[v,g];l=[l,A];A=a+2;v=Math.sqrt(c*c+d*d);if(b)for(b=a-1;0<=b;b--)m=2*Math.PI/a*b,t=n.vec3f32.fromValues(Math.cos(m)*d,e,Math.sin(m)*d),g.push(t),m=n.vec3f32.fromValues(c*Math.cos(m)/v,-d/v,c*Math.sin(m)/v),l.push(m);else for(b=0;b<a;b++){var m=2*Math.PI/a*b,t=n.vec3f32.fromValues(Math.cos(m)*d,e,Math.sin(m)*d);g.push(t);m=n.vec3f32.fromValues(c*Math.cos(m)/v,d/v,c*
Math.sin(m)/v);l.push(m)}c=new Uint32Array(6*(a+2));a=new Uint32Array(6*(a+2));e=d=0;if(f){for(b=3;b<g.length;b++)c[d++]=1,c[d++]=b-1,c[d++]=b,a[e++]=0,a[e++]=0,a[e++]=0;c[d++]=g.length-1;c[d++]=2;c[d++]=1;a[e++]=0;a[e++]=0;a[e++]=0}if(h){for(b=3;b<g.length;b++)c[d++]=b,c[d++]=b-1,c[d++]=0,a[e++]=b,a[e++]=b-1,a[e++]=1;c[d++]=0;c[d++]=2;c[d++]=g.length-1;a[e++]=1;a[e++]=2;a[e++]=l.length-1}f=new Float32Array(3*A);for(b=0;b<A;b++)f[3*b]=g[b][0],f[3*b+1]=g[b][1],f[3*b+2]=g[b][2];h=new Float32Array(3*
A);for(b=0;b<A;b++)h[3*b]=l[b][0],h[3*b+1]=l[b][1],h[3*b+2]=l[b][2];g={};g[k.VertexAttrConstants.POSITION]=c;g[k.VertexAttrConstants.NORMAL]=a;l={};l[k.VertexAttrConstants.POSITION]={size:3,data:f};l[k.VertexAttrConstants.NORMAL]={size:3,data:h};return new C.GeometryData(l,g)};p.createCylinderGeometry=function(c,d,a,b,f,h){b=b?n.vec3f32.clone(b):n.vec3f32.fromValues(1,0,0);f=f?n.vec3f32.clone(f):n.vec3f32.fromValues(0,0,0);h=void 0===h?!0:h;var e=n.vec3f32.create();g.vec3.normalize(e,b);b=n.vec3f32.create();
g.vec3.scale(b,e,Math.abs(c));var r=n.vec3f32.create();g.vec3.scale(r,b,-.5);g.vec3.add(r,r,f);var v=n.vec3f32.fromValues(0,1,0);.2>Math.abs(1-g.vec3.dot(e,v))&&g.vec3.set(v,0,0,1);var l=n.vec3f32.create();g.vec3.cross(l,e,v);g.vec3.normalize(l,l);g.vec3.cross(v,l,e);var A=2*a+(h?2:0),m=a+(h?2:0);c=new Float32Array(3*A);f=new Float32Array(3*m);var t=new Float32Array(2*A),p=new Uint32Array(3*a*(h?4:2)),u=new Uint32Array(3*a*(h?4:2));h&&(c[3*(A-2)+0]=r[0],c[3*(A-2)+1]=r[1],c[3*(A-2)+2]=r[2],t[2*(A-
2)]=0,t[2*(A-2)+1]=0,c[3*(A-1)+0]=c[3*(A-2)+0]+b[0],c[3*(A-1)+1]=c[3*(A-2)+1]+b[1],c[3*(A-1)+2]=c[3*(A-2)+2]+b[2],t[2*(A-1)]=1,t[2*(A-1)+1]=1,f[3*(m-2)+0]=-e[0],f[3*(m-2)+1]=-e[1],f[3*(m-2)+2]=-e[2],f[3*(m-1)+0]=e[0],f[3*(m-1)+1]=e[1],f[3*(m-1)+2]=e[2]);for(var e=function(a,b,c){p[a]=b;u[a]=c},y=0,w=n.vec3f32.create(),D=n.vec3f32.create(),q=0;q<a;q++){var z=2*Math.PI/a*q;g.vec3.scale(w,v,Math.sin(z));g.vec3.scale(D,l,Math.cos(z));g.vec3.add(w,w,D);f[3*q+0]=w[0];f[3*q+1]=w[1];f[3*q+2]=w[2];g.vec3.scale(w,
w,d);g.vec3.add(w,w,r);c[3*q+0]=w[0];c[3*q+1]=w[1];c[3*q+2]=w[2];t[2*q+0]=q/a;t[2*q+1]=0;c[3*(q+a)+0]=c[3*q+0]+b[0];c[3*(q+a)+1]=c[3*q+1]+b[1];c[3*(q+a)+2]=c[3*q+2]+b[2];t[2*(q+a)+0]=q/a;t[2*q+1]=1;z=(q+1)%a;e(y++,q,q);e(y++,q+a,q);e(y++,z,z);e(y++,z,z);e(y++,q+a,q);e(y++,z+a,z)}if(h){for(q=0;q<a;q++)z=(q+1)%a,e(y++,A-2,m-2),e(y++,q,m-2),e(y++,z,m-2);for(q=0;q<a;q++)z=(q+1)%a,e(y++,q+a,m-1),e(y++,A-1,m-1),e(y++,z+a,m-1)}d={};d[k.VertexAttrConstants.POSITION]=p;d[k.VertexAttrConstants.NORMAL]=u;d[k.VertexAttrConstants.UV0]=
p;a={};a[k.VertexAttrConstants.POSITION]={size:3,data:c};a[k.VertexAttrConstants.NORMAL]={size:3,data:f};a[k.VertexAttrConstants.UV0]={size:2,data:t};return new C.GeometryData(a,d)};p.createTubeGeometry=function(c,d,a,b,f){a=a||10;b=null!=b?b:!0;k.assert(1<c.length);for(var h=[],e=[],g=0;g<a;g++){h.push([0,-g-1,-((g+1)%a)-1]);var n=g/a*2*Math.PI;e.push([Math.cos(n)*d,Math.sin(n)*d])}return p.createPathExtrusionGeometry(e,c,[[0,0,0]],h,b,f)};p.createPathExtrusionGeometry=function(c,d,a,b,f,h){void 0===
h&&(h=n.vec3f32.fromValues(0,0,0));var e=c.length,r=new Float32Array(d.length*e*3+(6*a.length||0)),v=new Float32Array(d.length*e+(2*a.length||0)),l=new Float32Array(d.length*e*3+(a?6:0)),p=(d.length-1)*e*6+6*b.length,m=new Uint32Array(p),p=new Uint32Array(p),t=0,u=0,G=0,y=0,w=0,D=n.vec3f32.create(),q=n.vec3f32.create(),z=n.vec3f32.create(),N=n.vec3f32.create(),F=n.vec3f32.create(),B=n.vec3f32.create(),J=n.vec3f32.create(),E=Y.vec3f64.create(),V=n.vec3f32.create(),S=n.vec3f32.create(),P=n.vec3f32.create(),
M=n.vec3f32.create(),Q=n.vec3f32.create(),R=U.plane.create();g.vec3.set(V,0,1,0);g.vec3.subtract(q,d[1],d[0]);g.vec3.normalize(q,q);f?(g.vec3.add(E,d[0],h),g.vec3.normalize(z,E)):g.vec3.set(z,0,0,1);K(q,z,V,V,F,z,W);g.vec3.copy(N,z);g.vec3.copy(M,F);for(var x=0;x<a.length;x++)g.vec3.scale(B,F,a[x][0]),g.vec3.scale(E,z,a[x][2]),g.vec3.add(B,B,E),g.vec3.add(B,B,d[0]),r[t++]=B[0],r[t++]=B[1],r[t++]=B[2],v[G++]=0;l[u++]=-q[0];l[u++]=-q[1];l[u++]=-q[2];for(x=0;x<b.length;x++)m[y++]=0<b[x][0]?b[x][0]:-b[x][0]-
1+a.length,m[y++]=0<b[x][1]?b[x][1]:-b[x][1]-1+a.length,m[y++]=0<b[x][2]?b[x][2]:-b[x][2]-1+a.length,p[w++]=0,p[w++]=0,p[w++]=0;for(var H=a.length,x=a.length-1,I=0;I<d.length;I++){var T=!1;0<I&&(g.vec3.copy(D,q),I<d.length-1?(g.vec3.subtract(q,d[I+1],d[I]),g.vec3.normalize(q,q)):T=!0,g.vec3.add(S,D,q),g.vec3.normalize(S,S),g.vec3.add(P,d[I-1],N),U.plane.fromPositionAndNormal(d[I],S,R),U.plane.intersectRay(R,U.ray.wrap(P,D),E)?(g.vec3.subtract(E,E,d[I]),g.vec3.normalize(z,E),g.vec3.cross(F,S,z),g.vec3.normalize(F,
F)):K(S,N,M,V,F,z,W),g.vec3.copy(N,z),g.vec3.copy(M,F));f&&(g.vec3.add(E,d[I],h),g.vec3.normalize(Q,E));for(var L=0;L<e;L++)if(g.vec3.scale(B,F,c[L][0]),g.vec3.scale(E,z,c[L][1]),g.vec3.add(B,B,E),g.vec3.normalize(J,B),l[u++]=J[0],l[u++]=J[1],l[u++]=J[2],f?v[G++]=g.vec3.dot(B,Q):v[G++]=B[2],g.vec3.add(B,B,d[I]),r[t++]=B[0],r[t++]=B[1],r[t++]=B[2],!T){var O=(L+1)%e;m[y++]=H+L;m[y++]=H+e+L;m[y++]=H+O;m[y++]=H+O;m[y++]=H+e+L;m[y++]=H+e+O;for(O=0;6>O;O++)p[w++]=m[y-6+O]-x}H+=e}c=d[d.length-1];for(x=0;x<
a.length;x++)g.vec3.scale(B,F,a[x][0]),g.vec3.scale(E,z,a[x][1]),g.vec3.add(B,B,E),g.vec3.add(B,B,c),r[t++]=B[0],r[t++]=B[1],r[t++]=B[2],v[G++]=0;a=u/3;l[u++]=q[0];l[u++]=q[1];l[u++]=q[2];e=H-e;for(x=0;x<b.length;x++)m[y++]=0<=b[x][0]?H+b[x][0]:-b[x][0]-1+e,m[y++]=0<=b[x][2]?H+b[x][2]:-b[x][2]-1+e,m[y++]=0<=b[x][1]?H+b[x][1]:-b[x][1]-1+e,p[w++]=a,p[w++]=a,p[w++]=a;b={};b[k.VertexAttrConstants.POSITION]=m;b[k.VertexAttrConstants.NORMAL]=p;m={};m[k.VertexAttrConstants.POSITION]={size:3,data:r};m.zOffset=
{size:1,data:v};m[k.VertexAttrConstants.NORMAL]={size:3,data:l};return new C.GeometryData(m,b)};p.createPolylineGeometry=function(c,d){k.assert(1<c.length,"createPolylineGeometry(): polyline needs at least 2 points");k.assert(3===c[0].length,"createPolylineGeometry(): malformed vertex");k.assert(void 0===d||d.length===c.length,"createPolylineGeometry: need same number of points and normals");k.assert(void 0===d||3===d[0].length,"createPolylineGeometry(): malformed normal");for(var a=new Float32Array(3*
c.length),b=new Uint32Array(2*(c.length-1)),f=0,h=0,e=0;e<c.length;e++){for(var g=0;3>g;g++)a[f++]=c[e][g];0<e&&(b[h++]=e-1,b[h++]=e)}f={};h={};f[k.VertexAttrConstants.POSITION]=b;h[k.VertexAttrConstants.POSITION]={size:3,data:a};if(d){for(var a=new Float32Array(3*d.length),n=0,e=0;e<c.length;e++)for(g=0;3>g;g++)a[n++]=d[e][g];f[k.VertexAttrConstants.NORMAL]=b;h[k.VertexAttrConstants.NORMAL]={size:3,data:a}}return new C.GeometryData(h,f,C.GeometryData.DefaultOffsets,"line")};p.createExtrudedTriangle=
function(c,d,a,b){var f,g,e=new Float32Array(18);c=[[-d,0,b/2],[a,0,b/2],[0,c,b/2],[-d,0,-b/2],[a,0,-b/2],[0,c,-b/2]];for(d=0;6>d;d++)e[3*d]=c[d][0],e[3*d+1]=c[d][1],e[3*d+2]=c[d][2];c=(f={},f[k.VertexAttrConstants.POSITION]=new Uint32Array([0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]),f);f=(g={},g[k.VertexAttrConstants.POSITION]={size:3,data:e},g);return new C.GeometryData(f,c)};p.transformInPlace=function(c,d){c=c.vertexAttributes[k.VertexAttrConstants.POSITION].data;for(var a=0;a<c.length;a+=
3)g.vec3.set(u,c[a],c[a+1],c[a+2]),g.vec3.transformMat4(u,u,d),c[a]=u[0],c[a+1]=u[1],c[a+2]=u[2]};p.addVertexColors=function(c,d){var a=d||[1,1,1,1];d=new Uint8Array(4);d[0]=255*a[0];d[1]=255*a[1];d[2]=255*a[2];d[3]=255*(3<a.length?a[3]:1);var a={},b=c.getVertexAttr(),f;for(f in b)a[f]=b[f];a[k.VertexAttrConstants.COLOR]={size:4,data:d};d={};for(f in c.indices)d[f]=c.indices[f];d[k.VertexAttrConstants.COLOR]=new Uint32Array(d[k.VertexAttrConstants.POSITION].length);return c=new C.GeometryData(a,d,
c.componentOffsets,c.primitiveType)};p.addNormals=function(c){var d=c.getVertexAttr();c=c.indices;for(var a=T.Vec3Compact.subtract,b=new Float32Array(c.position.length/3*3),f=d.position.data,h=0,e=c.position,n=new Uint32Array(e.length),p=0;p<e.length;p+=3){a(f,3*e[p],f,3*e[p+2],X,0);a(f,3*e[p],f,3*e[p+1],u,0);g.vec3.cross(u,u,X);g.vec3.normalize(u,u);var l=h/3;b[h++]=u[0];b[h++]=u[1];b[h++]=u[2];n[p]=l;n[p+1]=l;n[p+2]=l}d[k.VertexAttrConstants.NORMAL]={size:3,data:b,offsetIdx:0,strideIdx:3};c[k.VertexAttrConstants.NORMAL]=
n};p.cgToGIS=function(c,d){void 0===d&&(d=c);var a=c.getVertexAttr();c=a.position.data;var a=a.normal.data,b=d.getVertexAttr(),f=b.position.data,b=b.normal.data;if(a)for(var g=0;g<a.length;g+=3){var e=a[g+1];b[g+1]=-a[g+2];b[g+2]=e}if(c)for(g=0;g<c.length;g+=3)e=c[g+1],f[g+1]=-c[g+2],f[g+2]=e;return d};p.makeOrthoBasisDirUp=J;p.makeOrthoBasisDirUpFallback=K})(R||(R={}));var W=.99619469809,u=n.vec3f32.create(),X=n.vec3f32.create();return R});