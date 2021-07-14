// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/promiseUtils ../../../../core/libs/gl-matrix-2/vec2f32 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f32 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/meshUtils/deduplicate ./I3SBinaryReader ../../support/projectionUtils ../../webgl-engine/lib/Util".split(" "),function(L,p,M,N,O,F,t,B,P,Q,R,C,w){function S(a,b,c,d,f,g,
l){switch(c){case 1:for(c=0;c<l;c++)d[f]=a[b],b+=1,f+=g;break;case 2:for(c=0;c<l;c++)d[f]=a[b],d[f+1]=a[b+1],b+=2,f+=g;break;case 3:for(c=0;c<l;c++)d[f]=a[b],d[f+1]=a[b+1],d[f+2]=a[b+2],b+=3,f+=g;break;case 4:for(c=0;c<l;c++)d[f]=a[b],d[f+1]=a[b+1],d[f+2]=a[b+2],d[f+3]=a[b+3],b+=4,f+=g;break;default:throw x("Unhandled stride size "+c);}}function T(a,b,c,d,f,g){switch(b){case 1:for(b=0;b<g;b++)c[d]=a,d+=f;break;case 2:for(b=0;b<g;b++)c[d]=a,c[d+1]=a,d+=f;break;case 3:for(b=0;b<g;b++)c[d]=a,c[d+1]=
a,c[d+2]=a,d+=f;break;case 4:for(b=0;b<g;b++)c[d]=a,c[d+1]=a,c[d+2]=a,c[d+3]=a,d+=f;break;default:throw x("Unhandled stride size "+b);}}function U(a){switch(a){case 5120:return Int8Array;case 5126:return Float32Array;case 5124:return Int32Array;case 5122:return Int16Array;case 5121:return Uint8Array;case 5125:return Uint32Array;case 5123:return Uint16Array}throw Error("Unhandled data type: "+a);}function G(a){switch(a){case 5120:return"Int8";case 5126:return"Float32";case 5124:return"Int32";case 5122:return"Int16";
case 5121:return"UInt8";case 5125:return"UInt32";case 5123:return"UInt16"}throw Error("Unhandled data type: "+a);}function D(a){return 0<a&&0===a%Uint32Array.BYTES_PER_ELEMENT}function x(a){return Error("I3SGeometryUtil processing failed: "+a)}function H(a){var b=a.normals,c=a.positions,d=a.normalInd,f=a.positionInd;w.assert(a.normalInd.length===a.positionInd.length);a=B.vec3f32.create();for(var g=B.vec3f32.create(),l=F.vec2f32.create(),h=c.data,n=c.offsetIdx,c=c.strideIdx,I=b.data,q=b.offsetIdx,
b=b.strideIdx,k=0;k<f.length;k+=3){var e=f[k],e=n+c*e,A=h[e],m=h[e+1],v=h[e+2],e=f[k+1],e=n+c*e;a[0]=h[e]-A;a[1]=h[e+1]-m;a[2]=h[e+2]-v;e=f[k+2];e=n+c*e;g[0]=h[e]-A;g[1]=h[e+1]-m;g[2]=h[e+2]-v;t.vec3.cross(a,a,g);w.encodeNormal(a,l);for(A=0;3>A;A++)m=q+b*d[k+A],I[m]=w.encodeInt16(l[0]),I[m+1]=w.encodeInt16(l[1])}}function J(a,b){switch(b){case 0:switch(a.type){case "intersects":case "contains":case "crosses":case "envelope-intersects":case "overlaps":case "touches":case "within":return 1;case "disjoint":return 0}break;
case 2:switch(a.type){case "intersects":case "contains":case "envelope-intersects":case "within":return 0;case "disjoint":case "crosses":case "overlaps":case "touches":return 1}break;case 1:switch(a.type){case "envelope-intersects":return 0}}return 2}function K(a,b){return r.contains(a.mask,b)?2:r.intersects(a.mask,b)?1:0}Object.defineProperty(p,"__esModule",{value:!0});var E=new Uint8Array(64);p.interleaveGeometryBuffer=function(a,b,c,d,f){void 0===d&&(d=[]);void 0===f&&(f=[]);var g=a.params.vertexAttributes,
l=g.position.count;if(!D(c[0].stride))throw x("Layout stride must use "+Uint32Array.BYTES_PER_ELEMENT+"-byte words");var h=new Uint32Array(c[0].stride/Uint32Array.BYTES_PER_ELEMENT*l);c=c.slice(0).sort(function(b,a){return b.offset-a.offset});a=function(a){if(-1!==f.indexOf(a.name))return"continue";var c=g[a.name],k=U(a.type),e=void 0,n=!1;if(null==c)if(n=d.filter(function(b){return b.name===a.name})[0]){c={valueType:G(a.type),byteOffset:0,count:l,valuesPerElement:a.count};for(e=0;e<E.length;e++)E[e]=
n.byteValue;e=E.buffer;n=!0}else throw x("Geometry definition is missing attribute");else e=b;if(G(a.type)!==c.valueType)throw x("Geometry definition type must match attribute type");if(0!==c.byteOffset%Uint32Array.BYTES_PER_ELEMENT||0!==a.offset%Uint32Array.BYTES_PER_ELEMENT)throw x(a.name+" offset must use "+Uint32Array.BYTES_PER_ELEMENT+"-byte words");if(!D(c.valuesPerElement*k.BYTES_PER_ELEMENT)||!D(a.count*k.BYTES_PER_ELEMENT))throw x(a.name+" data must use "+Uint32Array.BYTES_PER_ELEMENT+"-byte words");
var e=new Uint32Array(e),m=c.byteOffset/Uint32Array.BYTES_PER_ELEMENT,c=c.valuesPerElement*k.BYTES_PER_ELEMENT/Uint32Array.BYTES_PER_ELEMENT,k=a.offset/Uint32Array.BYTES_PER_ELEMENT,v=a.stride/Uint32Array.BYTES_PER_ELEMENT;n?T(e[0],c,h,k,v,l):S(e,m,c,h,k,v,l)};for(var n=0;n<c.length;n++)a(c[n]);return h.buffer};p.processAndInterleaveNormals=function(a,b,c,d,f){if("none"===a)H(f);else{b=R.createTypedView(c,b.params.vertexAttributes.normal);c=f.normals;var g="earth-centered"===a?d:null;a=b.length/3;
d=c.data;f=c.offsetIdx;c=c.strideIdx;if(null!=g)for(var l=g[0],h=g[1],n=g[2],t=g[4],q=g[5],k=g[6],e=g[8],A=g[9],g=g[10],m=0;m<a;m++){var v=b[3*m],p=b[3*m+1],r=b[3*m+2];u[0]=l*v+h*p+n*r;u[1]=t*v+q*p+k*r;u[2]=e*v+A*p+g*r;w.encodeNormal(u,y);d[f+m*c]=w.encodeInt16(y[0]);d[f+m*c+1]=w.encodeInt16(y[1])}else for(m=0;m<a;m++)u[0]=b[3*m],u[1]=b[3*m+1],u[2]=b[3*m+2],w.encodeNormal(u,y),d[f+m*c]=w.encodeInt16(y[0]),d[f+m*c+1]=w.encodeInt16(y[1])}};p.computeCompressedNormals=H;p.extractPositionData=function(a,
b,c){var d=b[0];if(null==d||"position"!==d.name||5126!==d.type)return null;a=new Float32Array(a);b=d.stride/4;for(var d=d.offset/4,f=3*a.length/b,g=new Float32Array(f),l=0;l<f/3;l++)g[3*l]=a[l*b+d],g[3*l+1]=a[l*b+d+1],g[3*l+2]=a[l*b+d+2];c=Q.default(g.buffer,3,c);return 65536>c.uniqueCount?{data:new Float32Array(c.buffer),indices:new Uint16Array(c.indices)}:{data:new Float32Array(c.buffer),indices:c.indices}};var r;p.isGeometryEngineLoaded=function(){return!!r};p.loadGeometryEngine=function(){return N(this,
void 0,void 0,function(){return M(this,function(a){switch(a.label){case 0:return r?[2,r]:[4,O.create(function(a,c){return L(["../../../../geometry/geometryEngine"],a)})];case 1:return r=a.sent(),[2,r]}})})};p.acquireMaskFilterContext=function(a,b,c,d){var f=c.spatialReference||b.spatialReference;b=b.renderSpatialReference;var g={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:f};g.rings[0][4]=g.rings[0][0];var l=d.objectTransformation;d=d.geometryRecords[0].geometry;
var h={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:f};h.rings[0][3]=h.rings[0][0];var n=r[a];n||(console.error("Spatial relationship",a,"not supported"),n=function(){return!0});return{type:a,mask:c,maskSR:f,renderSR:b,aabb:g,transform:l,geometry:d,triangle:h,testFunction:n}};p.getIntersectRelation=J;p.intersectMaskWithMbs=function(a,b){b=r.buffer({x:b[0],y:b[1],hasZ:!1,hasM:!1,type:"point",spatialReference:a.maskSR},b[3],1,!0);return K(a,b)};var V=Math.pow(2,
-32);p.filterMask=function(a,b){var c=b.type,d=b.mask,f=b.transform,g=b.renderSR,l=b.maskSR,h=b.geometry,n=b.triangle,p=b.testFunction,q=b.aabb;h.getComponentAABB(a,z);var k=[q.rings[0][0],q.rings[0][1],q.rings[0][2],q.rings[0][3]];t.vec3.set(k[0],z[0],z[1],0);t.vec3.set(k[1],z[0],z[4],0);t.vec3.set(k[2],z[3],z[4],0);t.vec3.set(k[3],z[3],z[1],0);for(var e=0;4>e;++e)t.vec3.transformMat4(k[e],k[e],f),C.vectorToVector(k[e],g,k[e],l);delete q._geVersion;e=K(b,q);switch(J(b,e)){case 1:return!1;case 0:return!0}b=
n.rings[0][0];var q=n.rings[0][1],k=n.rings[0][2],r=h.data.getIndices(w.VertexAttrConstants.POSITION),e=h.data.componentOffsets,m=h.data.getAttribute(w.VertexAttrConstants.POSITION),h=m.data,v=m.offsetIdx,m=m.strideIdx,u=e.length?e[a]:0;a=e.length?e[a+1]:r.length;var x;switch(c){case "intersects":case "crosses":case "envelope-intersects":case "index-intersects":case "overlaps":case "touches":x=function(){return p(d,n)?0:2};break;default:x=function(){return p(d,n)?2:1}}for(e=u;e<a;e+=3){var u=v+m*
r[e+0],y=v+m*r[e+1],B=v+m*r[e+2];t.vec3.set(b,h[u+0],h[u+1],h[u+2]);t.vec3.set(q,h[y+0],h[y+1],h[y+2]);t.vec3.set(k,h[B+0],h[B+1],h[B+2]);t.vec3.transformMat4(b,b,f);t.vec3.transformMat4(q,q,f);t.vec3.transformMat4(k,k,f);C.vectorToVector(b,g,b,l);C.vectorToVector(q,g,q,l);C.vectorToVector(k,g,k,l);if(!(Math.abs((q[0]-b[0])*(k[1]-b[1])-(q[1]-b[1])*(k[0]-b[0]))<V))switch(delete n._geVersion,x()){case 1:return!1;case 0:return!0}}switch(c){case "intersects":case "crosses":case "envelope-intersects":case "index-intersects":case "overlaps":case "touches":return!1;
default:return!0}};var z=P.create(),u=B.vec3f32.create(),y=F.vec2f32.create()});