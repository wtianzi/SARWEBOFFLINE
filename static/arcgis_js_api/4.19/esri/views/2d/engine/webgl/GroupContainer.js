// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../webgl/Program ../../../webgl/BufferObject ../../../webgl/Texture ../../../webgl/VertexArrayObject ../../../webgl/Renderbuffer ../../../webgl/FramebufferObject ../../../webgl/ProgramCache ../../../webgl/RenderingContext ../../../webgl/ShaderCompiler ./WGLContainer".split(" "),function(m,p,n,u,v,w,x,q,y,z,A,r){n=function(k){function l(){var b=k.apply(this,arguments)||this;b._lastWidth=0;b._lastHeight=0;b.requiresDedicatedFBO=!1;return b}
p._inheritsLoose(l,k);var h=l.prototype;h.dispose=function(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)};h.doRender=function(b){const d=this.createRenderParams(b),{context:a,painter:c,profiler:e}=d;this._prevFBO=a.getBoundFramebufferObject();e.recordContainerStart(this.name);const f=this._getFbo(d),t=c.getRenderTarget();a.bindFramebuffer(f);c.setRenderTarget(f);a.setDepthWriteEnabled(!0);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,0,0,0);a.setClearDepth(1);a.clear(a.gl.COLOR_BUFFER_BIT|
a.gl.DEPTH_BUFFER_BIT);a.setDepthWriteEnabled(!1);for(const g of this.children)g.beforeRender(b);for(const g of this.children)g.processRender(d);for(const g of this.children)g.afterRender(b);c.setRenderTarget(t);a.bindFramebuffer(this._prevFBO);c.beforeRenderLayer(d,this._clippingInfos?255:0,this.computedOpacity);a.setStencilTestEnabled(!1);a.setStencilWriteMask(0);c.blitTexture(a,f.colorTexture,9728);c.compositeLayer(d,this.computedOpacity);e.recordContainerEnd()};h.createRenderParams=function(b){return{...k.prototype.createRenderParams.call(this,
b),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}};h._getFbo=function(b){const {context:d,painter:a}=b,{width:c,height:e}=d.getViewport();if(c!==this._lastWidth||e!==this._lastHeight)if(this._lastWidth=c,this._lastHeight=e,this._renderTarget)this._renderTarget.resize(c,e);else{b={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:c,height:e};const f=a.getSharedStencilBuffer();this._renderTarget=new q(d,{colorTarget:0,depthStencilTarget:3},b,f)}return this._renderTarget};
return l}(r);m.GroupContainer=n;Object.defineProperty(m,"__esModule",{value:!0})});