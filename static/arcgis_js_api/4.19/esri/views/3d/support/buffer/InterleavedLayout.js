// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./BufferView","./types"],function(k,n,d,p){let l=function(){function g(a,b){this.layout=a;this.buffer="number"===typeof b?new ArrayBuffer(b*a.stride):b;for(const e of a.fieldNames)b=a.fields.get(e),this[e]=new b.constructor(this.buffer,b.offset,this.stride)}var c=g.prototype;c.getField=function(a,b){return(a=this[a])&&a.elementCount===b.ElementCount&&a.elementType===b.ElementType?a:null};c.slice=function(a,b){return new g(this.layout,
this.buffer.slice(a*this.stride,b*this.stride))};c.copyFrom=function(a,b,e,h){const f=this.stride;0===f%4?(a=new Uint32Array(a.buffer,b*f,h*f/4),(new Uint32Array(this.buffer,e*f,h*f/4)).set(a)):(a=new Uint8Array(a.buffer,b*f,h*f),(new Uint8Array(this.buffer,e*f,h*f)).set(a))};n._createClass(g,[{key:"stride",get:function(){return this.layout.stride}},{key:"count",get:function(){return this.buffer.byteLength/this.stride}},{key:"byteLength",get:function(){return this.buffer.byteLength}}]);return g}(),
m=function(){function g(){this.stride=0;this.fields=new Map;this.fieldNames=[]}var c=g.prototype;c.vec2f=function(a,b){this.appendField(a,d.BufferViewVec2f,b);return this};c.vec2f64=function(a,b){this.appendField(a,d.BufferViewVec2f64,b);return this};c.vec3f=function(a,b){this.appendField(a,d.BufferViewVec3f,b);return this};c.vec3f64=function(a,b){this.appendField(a,d.BufferViewVec3f64,b);return this};c.vec4f=function(a,b){this.appendField(a,d.BufferViewVec4f,b);return this};c.vec4f64=function(a,
b){this.appendField(a,d.BufferViewVec4f64,b);return this};c.mat3f=function(a,b){this.appendField(a,d.BufferViewMat3f,b);return this};c.mat3f64=function(a,b){this.appendField(a,d.BufferViewMat3f64,b);return this};c.mat4f=function(a,b){this.appendField(a,d.BufferViewMat4f,b);return this};c.mat4f64=function(a,b){this.appendField(a,d.BufferViewMat4f64,b);return this};c.vec4u8=function(a,b){this.appendField(a,d.BufferViewVec4u8,b);return this};c.f32=function(a,b){this.appendField(a,d.BufferViewFloat,b);
return this};c.f64=function(a,b){this.appendField(a,d.BufferViewFloat64,b);return this};c.u8=function(a,b){this.appendField(a,d.BufferViewUint8,b);return this};c.u16=function(a,b){this.appendField(a,d.BufferViewUint16,b);return this};c.i8=function(a,b){this.appendField(a,d.BufferViewInt8,b);return this};c.vec2i8=function(a,b){this.appendField(a,d.BufferViewVec2i8,b);return this};c.vec2i16=function(a,b){this.appendField(a,d.BufferViewVec2i16,b);return this};c.vec2u8=function(a,b){this.appendField(a,
d.BufferViewVec2u8,b);return this};c.vec4u16=function(a,b){this.appendField(a,d.BufferViewVec4u16,b);return this};c.u32=function(a,b){this.appendField(a,d.BufferViewUint32,b);return this};c.appendField=function(a,b,e){const h=b.ElementCount*p.elementTypeSize(b.ElementType);this.fields.set(a,{size:h,constructor:b,offset:this.stride,optional:e});this.stride+=h;this.fieldNames.push(a)};c.alignTo=function(a){this.stride=Math.floor((this.stride+a-1)/a)*a;return this};c.hasField=function(a){return 0<=this.fieldNames.indexOf(a)};
c.createBuffer=function(a){return new l(this,a)};c.createView=function(a){return new l(this,a)};c.clone=function(){const a=new g;a.stride=this.stride;a.fields=new Map;this.fields.forEach((b,e)=>a.fields.set(e,b));a.fieldNames=this.fieldNames.slice();a.BufferType=this.BufferType;return a};return g}();k.InterleavedBuffer=l;k.InterleavedLayout=m;k.newLayout=function(){return new m};Object.defineProperty(k,"__esModule",{value:!0})});