// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../webgl/Program ../../../../../webgl/BufferObject ../../../../../webgl/Texture ../../../../../webgl/VertexArrayObject ../../../../../webgl/Renderbuffer ../../../../../webgl/FramebufferObject ../../../../../webgl/ProgramCache ../../../../../webgl/RenderingContext ../../../../../webgl/ShaderCompiler".split(" "),function(f,g,q,n,r,t,u,v,w,x){g=function(){function h(){this._size=[0,0]}var e=h.prototype;e.dispose=function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),
this._layerFBOTexture=null)};e.draw=function(a,b,c){const {width:k,height:l}=b;this._createOrResizeResources(a,k,l);const {context:d,painter:p}=a;({amount:a}=c);c=d.gl;const m=this._layerFBOTexture;d.bindFramebuffer(b);b.copyToTexture(0,0,k,l,0,0,m);d.setBlendingEnabled(!0);d.setStencilTestEnabled(!1);d.setDepthTestEnabled(!1);d.setClearColor(0,0,0,0);d.clear(c.COLOR_BUFFER_BIT);p.blitTexture(d,m,9728,a)};e._createOrResizeResources=function(a,b,c){({context:a}=a);this._layerFBOTexture&&this._size[0]===
b&&this._size[1]===c||(this._size[0]=b,this._size[1]=c,this._layerFBOTexture?this._layerFBOTexture.resize(b,c):this._layerFBOTexture=new n(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:b,height:c}))};return h}();f.Opacity=g;Object.defineProperty(f,"__esModule",{value:!0})});