// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers"],function(f){return function(){function e(a,b){this._pos=0;b=b?this._roundToNearest(b,a.BYTES_PER_ELEMENT):40;this._array=new ArrayBuffer(b);this._buffer=new a(this._array);this._ctor=a;this._i16View=new Int16Array(this._array)}var c=e.prototype;c._roundToNearest=function(a,b){a=Math.round(a);return a+(b-a%b)};c._ensureSize=function(a){if(this._pos+a>=this._buffer.length){a=this._roundToNearest(1.5*(this._array.byteLength+a*this._buffer.BYTES_PER_ELEMENT),
this._buffer.BYTES_PER_ELEMENT);a=new ArrayBuffer(a);const b=new this._ctor(a);b.set(this._buffer,0);this._array=a;this._buffer=b;this._i16View=new Int16Array(this._array)}};c.writeF32=function(a){this._ensureSize(1);const b=this._pos;(new Float32Array(this._array,4*this._pos,1))[0]=a;this._pos++;return b};c.push=function(a){this._ensureSize(1);const b=this._pos;this._buffer[this._pos++]=a;return b};c.writeFixed=function(a){this._buffer[this._pos++]=a};c.setValue=function(a,b){this._buffer[a]=b};
c.i1616Add=function(a,b,d){this._i16View[2*a]+=b;this._i16View[2*a+1]+=d};c.getValue=function(a){return this._buffer[a]};c.incr=function(a){if(this._buffer.length<a)throw Error("Increment index overflows the target buffer");this._buffer[a]++};c.decr=function(a){this._buffer[a]--};c.writeRegion=function(a){this._ensureSize(a.length);const b=this._pos;this._buffer.set(a,this._pos);this._pos+=a.length;return b};c.writeManyFrom=function(a,b,d){for(this._ensureSize(d-b);b!==d;b++)this.writeFixed(a._buffer[b])};
c.buffer=function(){const a=this._array.slice(0,4*this._pos);this.destroy();return a};c.toArray=function(){const a=this._array,b=[];for(let d=0;d<a.byteLength/4;d++)b.push(a[d]);return b};c.seek=function(a){this._pos=a};c.destroy=function(){this._buffer=this._array=null};f._createClass(e,[{key:"length",get:function(){return this._pos}}]);return e}()});