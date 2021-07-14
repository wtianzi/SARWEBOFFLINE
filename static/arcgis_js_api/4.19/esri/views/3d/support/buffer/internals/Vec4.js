// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec4"],function(h,m,n){let l=function(){function g(a,b,e=0,c,d){this.TypedArrayConstructor=a;this.elementCount=4;a=this.TypedArrayConstructor;void 0===c&&(c=4*a.BYTES_PER_ELEMENT);const k=0===b.byteLength?0:e;this.typedBuffer=null==d?new a(b,k):new a(b,k,(d-e)/a.BYTES_PER_ELEMENT);this.typedBufferStride=c/a.BYTES_PER_ELEMENT;this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride);this.stride=this.typedBufferStride*
this.TypedArrayConstructor.BYTES_PER_ELEMENT}var f=g.prototype;f.getVec=function(a,b){return n.set(b,this.typedBuffer[a*this.typedBufferStride],this.typedBuffer[a*this.typedBufferStride+1],this.typedBuffer[a*this.typedBufferStride+2],this.typedBuffer[a*this.typedBufferStride+3])};f.setVec=function(a,b){this.typedBuffer[a*this.typedBufferStride]=b[0];this.typedBuffer[a*this.typedBufferStride+1]=b[1];this.typedBuffer[a*this.typedBufferStride+2]=b[2];this.typedBuffer[a*this.typedBufferStride+3]=b[3]};
f.get=function(a,b){return this.typedBuffer[a*this.typedBufferStride+b]};f.set=function(a,b,e){this.typedBuffer[a*this.typedBufferStride+b]=e};f.setValues=function(a,b,e,c,d){this.typedBuffer[a*this.typedBufferStride]=b;this.typedBuffer[a*this.typedBufferStride+1]=e;this.typedBuffer[a*this.typedBufferStride+2]=c;this.typedBuffer[a*this.typedBufferStride+3]=d};f.copyFrom=function(a,b,e){const c=this.typedBuffer,d=b.typedBuffer;a*=this.typedBufferStride;b=e*b.typedBufferStride;c[a]=d[b];c[a+1]=d[b+
1];c[a+2]=d[b+2];c[a+3]=d[b+3]};m._createClass(g,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]);return g}();l.ElementCount=4;h.BufferViewVec4Impl=l;Object.defineProperty(h,"__esModule",{value:!0})});