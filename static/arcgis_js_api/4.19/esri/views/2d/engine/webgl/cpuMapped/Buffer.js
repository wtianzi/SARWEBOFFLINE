// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../webgl/Program ../../../../webgl/BufferObject ../../../../webgl/Texture ../../../../webgl/VertexArrayObject ../../../../webgl/Renderbuffer ../../../../webgl/FramebufferObject ../../../../webgl/ProgramCache ../../../../webgl/RenderingContext ../../../../webgl/ShaderCompiler ./FreeList".split(" "),function(l,p,h,m,n,r,t,u,v,w,x,y,q){m=function(){function k(a,c,b){c=new Uint32Array(c*b);this.strideInt=
b;this.bufferType=a;this.dirty={start:Infinity,end:0};this.cpu=c;this.gpu=null;this.clear()}var d=k.prototype;d.destroy=function(){h.andThen(this.gpu,a=>a.dispose())};d.clear=function(){this.dirty.start=Infinity;this.dirty.end=0;this.freeList=new q.FreeList({start:0,end:this.cpu.length/this.strideInt});this.fillPointer=0};d.maxAvailableSpace=function(){return this.freeList.maxAvailableSpace()};d.insert=function(a,c,b,g){var f=b*this.strideInt;a=new Uint32Array(a,c*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,
f);var e=h.unwrapOrThrow(this.freeList.firstFit(b),"First fit region must be defined");b=e*this.strideInt;f*=this.strideInt;c=e-c;if(0!==g)for(e=0;e<a.length;e++)a[e]+=g;this.cpu.set(a,b);this.dirty.start=Math.min(this.dirty.start,b);this.dirty.end=Math.max(this.dirty.end,b+f);this.fillPointer=Math.max(this.fillPointer,b+f);return c};d.free=function(a,c,b){const g=a*this.strideInt,f=(a+c)*this.strideInt;if(!0===b)for(b=a;b!==a+c;b++)this.cpu[b*this.strideInt]=2147450879;this.dirty.start=Math.min(this.dirty.start,
g);this.dirty.end=Math.max(this.dirty.end,f);this.freeList.free(a,c)};d.upload=function(a){this.dirty.end&&(h.isNone(this.gpu)?this.gpu=this._createBuffer(a):this.gpu.setSubData(this.cpu,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=Infinity,this.dirty.end=0)};d._createBuffer=function(a){return"index"===this.bufferType?n.createIndex(a,35048,this.cpu):n.createVertex(a,35048,this.cpu)};p._createClass(k,[{key:"bufferSize",get:function(){return this.cpu.length/this.strideInt}}]);
return k}();l.Buffer=m;Object.defineProperty(l,"__esModule",{value:!0})});