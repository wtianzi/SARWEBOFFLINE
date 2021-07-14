// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/vec3f64 ../../../../../chunks/vec3 ../../../support/buffer/BufferView ../../../../../geometry/support/aaBoundingBox ../../lib/geometryDataUtils ../../materials/internal/MaterialUtil ../../lib/ComponentUtils".split(" "),function(v,l,w,m,x,y,z,n,A){let G=function(){function p(a,b){this._indices=l.isSome(a.indices)?a.indices:z.generateDefaultIndexArray(a.positions.length/3);this._positions=new x.BufferViewVec3f(a.positions);
this._components=b}var g=p.prototype;g.getComponentAabb=function(a,b){if(l.isSome(this._perComponentAabbs)){for(let d=0;6>d;d++)b[d]=this._perComponentAabbs[6*a+d];return b}this._computePerComponentAabbs();return this.getComponentAabb(a,b)};g.getComponentPositions=function(a,b){b.indices=this._indices;b.data=this._positions.typedBuffer;b.stride=this._positions.typedBufferStride;b.startIndex=this._components.offsets[a];b.endIndex=this._components.offsets[a+1]};g.intersect=function(a,b,d,c,e,q){const h=
{data:this._positions.typedBuffer,stride:this._positions.typedBufferStride,size:3},f=this._indices,r=this._components.offsets,C=n.computeInvDir(a,b,B);this._components.visibility.forEachComponent(k=>{if(!A.getVisibility(this._components.pickability,k))return!0;const t=this.getComponentAabb(k,D);l.isSome(e)&&e.applyToAabb(t);if(!n.intersectAabbInvDir(t,a,C,d))return!0;n.intersectTriangles(a,b,r[k]/3,r[k+1]/3,f,h,void 0,e,(E,u,F)=>q(k,E,m.transformMat3(u,u,c),F));return!0})};g._computePerComponentAabbs=
function(){const a=this._components.count;this._perComponentAabbs=new Float32Array(6*a);for(let b=0;b<a;b++)this._computeAABB(b)};g._computeAABB=function(a){const b=this._indices,d=this._positions;var c=this._components.offsets,e=c[a];const q=c[a+1],h=[0,0,0];c=[Infinity,Infinity,Infinity];const f=[-Infinity,-Infinity,-Infinity];for(;e<q;e++)d.getVec(b[e],h),m.min(c,c,h),m.max(f,f,h);a*=6;this._perComponentAabbs[a++]=c[0];this._perComponentAabbs[a++]=c[1];this._perComponentAabbs[a++]=c[2];this._perComponentAabbs[a++]=
f[0];this._perComponentAabbs[a++]=f[1];this._perComponentAabbs[a]=f[2]};v._createClass(p,[{key:"positions",get:function(){return this._positions}},{key:"indices",get:function(){return this._indices}}]);return p}();const B=w.create(),D=y.create();return G});