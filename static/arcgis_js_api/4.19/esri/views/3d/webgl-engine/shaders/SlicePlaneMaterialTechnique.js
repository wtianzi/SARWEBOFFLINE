// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../../../webgl/Program ../../../webgl/renderState ../core/shaderLibrary/util/View.glsl ../../../../chunks/SlicePlaneMaterial.glsl".split(" "),function(l,h,m,n,c,p,q,g,k,r){c=function(d){function a(){return d.apply(this,arguments)||this}m._inheritsLoose(a,d);var e=a.prototype;e.initializeProgram=function(f){const b=
a.shader.get().build();return new q(f.rctx,b.generateSource("vertex"),b.generateSource("fragment"),p.Default3D)};e.bindPass=function(f,b,t){k.View.bindProjectionMatrix(this.program,t.camera.projectionMatrix);this.program.setUniform4fv("backgroundColor",b.backgroundColor);this.program.setUniform4fv("gridColor",b.gridColor);this.program.setUniform1f("gridWidth",b.gridWidth)};e.bindDraw=function(f){k.View.bindView(this.program,f)};e.initializePipeline=function(){return g.makePipelineState({blending:g.separateBlendingParams(1,
1,771,771),depthTest:{func:513},colorWrite:g.defaultColorWriteParams})};return a}(c.ShaderTechnique);c.shader=new n.ReloadableShaderModule(r.SlicePlaneMaterialShader,()=>new Promise(function(d,a){l(["./SlicePlaneMaterial.glsl"],d,a)}));h.SlicePlaneMaterialTechnique=c;Object.defineProperty(h,"__esModule",{value:!0})});