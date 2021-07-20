// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Logger ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../support/imageUtils ./glUtil3D ./Util ../shaders/SSAOPrograms ../../../webgl/FramebufferObject ../../../webgl/renderState ../../../webgl/Texture ../../../webgl/Util".split(" "),function(x,q,y,z,A,B,r,C,t,u,v,p,w,D,m){var E=y.getLogger("esri.views.3d.webgl-engine.lib.SSAOHelper");q=function(){function b(a,
d,b){this._enabled=!1;this._BLUR_F=2;this._attenuation=.5;this._radius=3;this._samples=16;this._viewportToRestore=r.vec4f64.create();this._rctx=d;this._programRep=a;this._requestRender=b;this._emptyTexture=t.createEmptyTexture(d)}b.prototype.dispose=function(){this._emptyTexture.dispose();this._emptyTexture=null};Object.defineProperty(b.prototype,"isSupported",{get:function(){var a=this._rctx,d=-1!==a.parameters.versionString.indexOf("WebGL 0.93"),a=-1!==a.parameters.versionString.indexOf("WebGL 0.94");
return!(d||a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"enabled",{get:function(){return this._enabled},set:function(a){a?this.enable():this.disable()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"attenuation",{get:function(){return this._attenuation},set:function(a){this._attenuation=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"radius",{get:function(){return this._radius},set:function(a){this._radius=a},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"filterRadius",{get:function(){return 4},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"samples",{get:function(){return this._samples},set:function(a){this._samples=a;this._enabled&&this.selectPrograms()},enumerable:!0,configurable:!0});b.prototype.computeSSAO=function(a,d,b){if(this._noiseTexture){u.assert(this.enabled);var c=this._rctx,l=a.fullViewport,e=l[2],g=l[3],l=e/this._BLUR_F,h=g/this._BLUR_F;this._ssaoFBO.resize(e,g);this._blur0FBO.resize(l,
h);this._blur1FBO.resize(l,h);l=1*e;h=1*g;c.bindFramebuffer(this._ssaoFBO);B.vec4.copy(this._viewportToRestore,a.fullViewport);c.setViewport(0,0,e,g);var f=this._ssaoProgram,k=this._blurProgram;f.setUniform2f("rnmScale",e/this._noiseTexture.descriptor.width,g/this._noiseTexture.descriptor.height);f.setUniform3fv("pSphere",8>=this._samples?this._data.random8:16>=this._samples?this._data.random16:32>=this._samples?this._data.random32:this._data.random64);c.bindProgram(f);c.setPipelineState(this._pipelineState);
e=this._data.minDiscrepancy;f.setUniform1f("numSpiralTurns",this._samples<e.length?e[this._samples]:5779);e=F;g=G;u.inverseProjectionInfo(a.projectionMatrix,a.fullWidth,a.fullHeight,e,g);f.setUniform4fv("projInfo",e);f.setUniform2fv("zScale",g);f.setUniform2f("nearFar",a.near,a.far);e=1/a.computeRenderPixelSizeAtDist(1);f.setUniform1f("projScale",1*e);f.setUniform2f("screenDimensions",l,h);var n=2*this._radius,g=A.vec3.distance(a.eye,a.center),n=20*a.computeRenderPixelSizeAtDist(g),n=Math.max(.1,
n);f.setUniform1f("radius",n);f.setUniform1f("intensity",4*this._attenuation/Math.pow(n,6));f.setUniform1i("rnm",0);f.setUniform1i("normalMap",1);f.setUniform1i("depthMap",2);c.bindTexture(this._noiseTexture,0);c.bindTexture(b,1);c.bindTexture(d,2);d=t.createQuadVAO(this._rctx);c.bindVAO(d);c.drawArrays(5,0,m.vertexCount(d,"geometry"));c.bindTexture(this._ssaoFBO.colorTexture,0);c.setViewport(0,0,l/this._BLUR_F,h/this._BLUR_F);c.bindFramebuffer(this._blur0FBO);k.setUniform2f("screenDimensions",l,
h);k.setUniform1i("tex",0);k.setUniform1i("normalMap",1);k.setUniform1i("depthMap",2);k.setUniform2f("blurSize",0,1*this._BLUR_F/h);k.setUniform1i("radius",4);k.setUniform1f("g_BlurFalloff",.08);k.setUniform2f("nearFar",a.near,a.far);5E4<g&&(e=Math.max(0,e-(g-5E4)));k.setUniform1f("projScale",e);k.setUniform2f("zScale",1,0);c.drawArrays(5,0,m.vertexCount(d,"geometry"));k.setUniform2f("blurSize",1*this._BLUR_F/l,0);c.bindFramebuffer(this._blur1FBO);c.bindTexture(this._blur0FBO.colorTexture,0);c.drawArrays(5,
0,m.vertexCount(d,"geometry"));c.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3])}};b.prototype.setUniforms=function(a){var d=this.enabled&&this._noiseTexture,b=this._rctx;b.bindTexture(d?this._blur1FBO.colorTexture:this._emptyTexture,6);b.setActiveTexture(0);a.setUniform1i("ssaoTex",6);d?a.setUniform4f("viewportPixelSz",this._viewportToRestore[0],this._viewportToRestore[1],1/this._ssaoFBO.width,1/this._ssaoFBO.height):a.setUniform4f("viewportPixelSz",
-1,-1,-1,-1)};b.prototype.bindAll=function(a){a=a.getProgramsUsingUniform("viewportPixelSz");for(var b=0;b<a.length;b++)this.setUniforms(a[b])};b.prototype.selectPrograms=function(){this._ssaoProgram=this._programRep.getProgram(v.ssaoPass,{samples:8>=this._samples?8:16>=this._samples?16:32>=this._samples?32:64});this._blurProgram=this._programRep.getProgram(v.blurPass,{radius:4});this._pipelineState=w.makePipelineState({colorWrite:w.defaultColorWriteParams})};b.prototype.enable=function(){var a=this;
this.enabled||(this.isSupported?(this._enabled=!0,this.loadResources(function(){a._enabled&&a.initialize()})):E.warn("SSAO is not supported for this browser or hardware"))};b.prototype.loadResources=function(a){var b=this;this._data?a():x(["./SSAOHelperData"],function(d){b._data=d;a()})};b.prototype.initialize=function(){var a=this,b={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:0,height:0},h={colorTarget:0,depthStencilTarget:0};this._ssaoFBO=p.createWithAttachments(this._rctx,
b,h);this._blur0FBO=p.createWithAttachments(this._rctx,b,h);this._blur1FBO=p.createWithAttachments(this._rctx,b,h);C.requestImage(this._data.noiseTexture).then(function(b){a._enabled&&(a._noiseTexture=new D(a._rctx,{target:3553,pixelFormat:6408,dataType:5121,hasMipmap:!0,width:b.width,height:b.height},b),a._requestRender())});this.selectPrograms()};b.prototype.disable=function(){this.enabled&&(this._enabled=!1,this._noiseTexture&&(this._noiseTexture.dispose(),this._noiseTexture=null),this._blur1FBO&&
(this._blur1FBO.dispose(),this._blur1FBO=null),this._blur0FBO&&(this._blur0FBO.dispose(),this._blur0FBO=null),this._ssaoFBO&&(this._ssaoFBO.dispose(),this._ssaoFBO=null))};b.prototype.getGpuMemoryUsage=function(){return m.getGpuMemoryUsage(this._blur0FBO)+m.getGpuMemoryUsage(this._blur1FBO)+m.getGpuMemoryUsage(this._ssaoFBO)};return b}();var G=z.vec2f64.create(),F=r.vec4f64.create();return q});