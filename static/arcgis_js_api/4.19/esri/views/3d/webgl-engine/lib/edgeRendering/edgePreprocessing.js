// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/typedArrayUtil ../../../../../core/arrayUtils ../../../../../core/mathUtils ../../../../../chunks/vec3f64 ../../../../../chunks/vec3 ../../../support/mathUtils".split(" "),function(G,P,Q,D,n,h,R){function S(b,l){const f=D.acosClamped(b.cosAngle),a=E.fwd,c=E.ortho;R.directionFromTo(a,b.position1,b.position0);b=0<h.dot(h.cross(c,b.faceNormal0,b.faceNormal1),a)?-1:1;return f*b>l}function T(b){const l=b.faces.length/3,f=b.faces;b=b.neighbors;var a=0;for(var c=0;c<l;c++){var e=
b[3*c+1],k=b[3*c+2],g=f[3*c],p=f[3*c+1],d=f[3*c+2];a+=-1===b[3*c]||g<p?1:0;a+=-1===e||p<d?1:0;a+=-1===k||d<g?1:0}a=new Int32Array(4*a);c=0;for(e=0;e<l;e++){k=b[3*e];g=b[3*e+1];p=b[3*e+2];d=f[3*e];const t=f[3*e+1],u=f[3*e+2];if(-1===k||d<t)a[c++]=d,a[c++]=t,a[c++]=e,a[c++]=k;if(-1===g||t<u)a[c++]=t,a[c++]=u,a[c++]=e,a[c++]=g;if(-1===p||u<d)a[c++]=u,a[c++]=d,a[c++]=e,a[c++]=p}return a}function U(b){const l=b.faces.length/3,f=b.vertices.position;b=b.faces;const a=F.v0,c=F.v1,e=F.v2,k=new Float32Array(3*
l);for(let g=0;g<l;g++){const p=b[3*g+1],d=b[3*g+2];f.getVec(b[3*g],a);f.getVec(p,c);f.getVec(d,e);h.subtract(c,c,a);h.subtract(e,e,a);h.cross(a,c,e);h.normalize(a,a);k[3*g]=a[0];k[3*g+1]=a[1];k[3*g+2]=a[2]}return k}const E={edge:{position0:n.create(),position1:n.create(),faceNormal0:n.create(),faceNormal1:n.create(),componentIndex:0,cosAngle:0},ortho:n.create(),fwd:n.create()},F={v0:n.create(),v1:n.create(),v2:n.create()},V={anglePlanar:4,angleSignificantEdge:35};G.extractEdges=function(b,l,f,a=
V){const c=b.vertices.position;var e=b.vertices.componentIndex,k=D.deg2rad(a.anglePlanar);a=D.deg2rad(a.angleSignificantEdge);const g=Math.cos(a),p=Math.cos(k),d=E.edge,t=d.position0,u=d.position1,w=d.faceNormal0,z=d.faceNormal1,q=U(b),v=T(b),A=v.length/4;b=l.allocate(A);a=0;const H=f.allocate(A);let I=0,J=0,K=0;const L=Q.range(0,A),C=new Float32Array(A);P.forEach(C,(x,r,B)=>{c.getVec(v[4*r],t);c.getVec(v[4*r+1],u);B[r]=h.distance(t,u)});L.sort((x,r)=>C[r]-C[x]);const M=[],N=[];for(let x=0;x<A;x++){var m=
L[x];const r=C[m],B=v[4*m],W=v[4*m+1],y=v[4*m+2];m=v[4*m+3];const O=-1===m;c.getVec(B,t);c.getVec(W,u);if(O)h.set(w,q[3*y],q[3*y+1],q[3*y+2]),h.copy(z,w),d.componentIndex=e.get(B),d.cosAngle=h.dot(w,z);else{h.set(w,q[3*y],q[3*y+1],q[3*y+2]);h.set(z,q[3*m],q[3*m+1],q[3*m+2]);d.componentIndex=e.get(B);d.cosAngle=h.dot(w,z);if(d.cosAngle>p)continue;-.9999>d.cosAngle&&h.copy(z,w)}J+=r;K++;O||d.cosAngle<g?(l.write(b,a++,d),M.push(r)):S(d,k)&&(f.write(H,I++,d),N.push(r))}e=new Float32Array(M.reverse());
k=new Float32Array(N.reverse());return{regular:{instancesData:l.trim(b,a),lodInfo:{lengths:e}},silhouette:{instancesData:f.trim(H,I),lodInfo:{lengths:k}},averageEdgeLength:J/K}};Object.defineProperty(G,"__esModule",{value:!0})});