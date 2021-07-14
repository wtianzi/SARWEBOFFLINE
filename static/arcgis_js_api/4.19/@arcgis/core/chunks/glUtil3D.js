/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{b as t}from"./Logger.js";import{P as i}from"../core/scheduling.js";import{c as e,f as n,a as s}from"./vec3f64.js";import{f as r,h}from"./vec3.js";import{i as o,a9 as a,a7 as c,D as u}from"./VertexColor.glsl.js";import{T as d}from"./FramebufferObject.js";import{a as l}from"./Util.js";import{C as b}from"./Object3D.js";import{V as g,B as m}from"./VertexArrayObject.js";class f{constructor(t,i,h,o){this.primitiveIndices=t,this._numIndexPerPrimitive=i,this.indices=h,this.position=o,this.center=e(),l(t.length>=1),l(h.length%this._numIndexPerPrimitive==0),l(h.length>=t.length*this._numIndexPerPrimitive),l(3===o.size||4===o.size);const{data:a,size:c}=o,u=t.length;let d=c*h[this._numIndexPerPrimitive*t[0]];p.clear(),p.push(d),this.bbMin=n(a[d],a[d+1],a[d+2]),this.bbMax=s(this.bbMin);for(let i=0;i<u;++i){const e=this._numIndexPerPrimitive*t[i];for(let t=0;t<this._numIndexPerPrimitive;++t){d=c*h[e+t],p.push(d);let i=a[d];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=a[d+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=a[d+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}r(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let b=this.radius*this.radius;for(let t=0;t<p.length;++t){d=p.getItemAt(t);const i=a[d]-this.center[0],e=a[d+1]-this.center[1],n=a[d+2]-this.center[2],s=i*i+e*e+n*n;if(s<=b)continue;const r=Math.sqrt(s),h=.5*(r-this.radius);this.radius=this.radius+h,b=this.radius*this.radius;const o=h/r;this.center[0]+=i*o,this.center[1]+=e*o,this.center[2]+=n*o}p.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(h(this.bbMin,this.bbMax)>1){const t=r(e(),this.bbMin,this.bbMax,.5),i=this.primitiveIndices.length,n=new Uint8Array(i),s=new Array(8);for(let t=0;t<8;++t)s[t]=0;const{data:h,size:o}=this.position;for(let e=0;e<i;++e){let i=0;const r=this._numIndexPerPrimitive*this.primitiveIndices[e];let a=o*this.indices[r],c=h[a],u=h[a+1],d=h[a+2];for(let t=1;t<this._numIndexPerPrimitive;++t){a=o*this.indices[r+t];const i=h[a],e=h[a+1],n=h[a+2];i<c&&(c=i),e<u&&(u=e),n<d&&(d=n)}c<t[0]&&(i|=1),u<t[1]&&(i|=2),d<t[2]&&(i|=4),n[e]=i,++s[i]}let a=0;for(let t=0;t<8;++t)s[t]>0&&++a;if(a<2)return;const c=new Array(8);for(let t=0;t<8;++t)c[t]=s[t]>0?new Uint32Array(s[t]):void 0;for(let t=0;t<8;++t)s[t]=0;for(let t=0;t<i;++t){const i=n[t];c[i][s[i]++]=this.primitiveIndices[t]}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==c[t]&&(this._children[t]=new f(c[t],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){p.prune()}}const p=new i({deallocator:null});class x extends b{constructor(t,i=[],e=0,n=-1){super(),this._primitiveType=e,this.edgeIndicesLength=n,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[i,e]of t)e&&this._vertexAttributes.set(i,{...e});if(null==i||0===i.length){const t=function(t){const i=t.values().next().value;if(null==i)return 0;return i.data.length/i.size}(this._vertexAttributes),i=o(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const t of this._vertexAttributes.keys())this._indices.set(t,i)}else for(const[t,e]of i)e&&(this._indices.set(t,M(e)),"position"===t&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(t).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const i=this._vertexAttributes.get(t);return i&&!i.exclusive&&(i.data=Array.from(i.data),i.exclusive=!0),i}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return t(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const i=this.indices.get("position"),e=this.vertexAttributes.get("position");return a(e,i,t)}computeAttachmentOriginPoints(t){const i=this.indices.get("position"),e=this.vertexAttributes.get("position");return c(e,i,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.indices.get("position");if(0===t.length)return null;const i=0===this.primitiveType?3:1;l(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const e=o(t.length/i),n=this.vertexAttributes.get("position");return new f(e,i,t,n)}}function M(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const i of t)if(i>=65536)return t;return new Uint16Array(t)}const v=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],_=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];function I(t,i=v,e=u,n=-1,s=1){let r=null;switch(i){case _:r=new Float32Array([n,n,0,0,s,n,1,0,n,s,0,1,s,s,1,1]);break;case v:default:r=new Float32Array([n,n,s,n,n,s,s,s])}return new g(t,e,{geometry:i},{geometry:m.createVertex(t,35044,r)})}function A(t,i=4){return new d(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:i,height:i})}function y(t,i,e=4){const n=new Uint8Array(e*e*4);for(let t=0;t<n.length;t+=4)n[t+0]=255*i[0],n[t+1]=255*i[1],n[t+2]=255*i[2],n[t+3]=255*i[3];return new d(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:e,height:e},n)}function P(t){return new d(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}export{f as B,x as G,_ as P,y as a,A as b,I as c,v as d,P as e};
