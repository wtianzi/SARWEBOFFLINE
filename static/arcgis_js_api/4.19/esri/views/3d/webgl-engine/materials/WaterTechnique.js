// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../../../webgl/Program ../../../webgl/renderState ../core/shaderLibrary/util/View.glsl ../lib/DefaultTextureUnits ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../lib/OrderIndependentTransparency ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../core/shaderLibrary/shading/ReadShadowMap.glsl ../core/shaderLibrary/shading/ScreenSpaceReflections.glsl ../core/shaderLibrary/shading/WaterDistortion.glsl ../../../../chunks/WaterSurface.glsl".split(" "),
function(t,n,r,g,e,m,f,u,v,p,q,w,x,y,l,z,A,B,C,D){m=function(k){function h(a,d){d=k.call(this,a,d)||this;d.waterTextureRepository=a.waterTextureRepository;return d}r._inheritsLoose(h,k);var c=h.prototype;c.initializeProgram=function(a){var d=h.shader.get();const b=this.configuration;d=d.build({OITEnabled:0===b.transparencyPassType,output:b.output,viewingMode:a.viewingMode,slicePlaneEnabled:b.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:b.receiveShadows,
pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:b.useSSR,highStepCount:!0,multipassTerrainEnabled:b.multipassTerrainEnabled,cullAboveGround:b.cullAboveGround});return new v(a.rctx,d.generateSource("vertex"),d.generateSource("fragment"),u.Default3D)};c.ensureResource=function(a){this.waterTextureRepository.ready||this.waterTextureRepository.updating||this.waterTextureRepository.loadTextures(a);return this.waterTextureRepository.ready?2:1};c.bindPass=function(a,d,b){q.View.bindProjectionMatrix(this.program,
b.camera.projectionMatrix);b.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",b.camera.nearFar),this.program.setUniform2fv("inverseViewport",b.inverseViewport),z.bindMultipassTerrainUniforms(this.program,a,b));0===this.configuration.output&&(b.lighting.setUniforms(this.program,!1),B.ScreenSpaceReflections.bindUniforms(this.program,a,b));if(0===this.configuration.output||2===this.configuration.output)C.WaterDistortion.bindUniforms(this.program,d),this.waterTextureRepository.bindRepo(a);
this.program.setUniform4fv("waterColor",d.color);4===this.configuration.output&&y.OutputHighlight.bindOutputHighlight(a,this.program,b)};c.bindDraw=function(a){q.View.bindView(this.program,a);0!==this.configuration.output&&7!==this.configuration.output||q.View.bindCamPosition(this.program,a.origin,a.camera.viewInverseTransposeMatrix);0===this.configuration.output&&A.ReadShadowMap.bindUniforms(this.program,a,w.DefaultTextureUnits.SHADOW_MAP);0!==this.configuration.output&&7!==this.configuration.output&&
4!==this.configuration.output||x.Slice.bindUniformsWithOrigin(this.program,this.configuration,a)};c.setPipelineState=function(a){const d=this.configuration,b=3===a,E=2===a;return p.makePipelineState({blending:2!==d.output&&4!==d.output&&d.transparent?b?l.blendingDefault:l.OITBlending(a):null,depthTest:{func:l.OITDepthTest(a)},depthWrite:b?d.writeDepth&&p.defaultDepthWriteParams:l.OITDepthWrite(a),colorWrite:p.defaultColorWriteParams,polygonOffset:b||E?null:l.getOITPolygonOffset(d.enableOffset)})};
c.initializePipeline=function(){return this.setPipelineState(this.configuration.transparencyPassType)};return h}(m.ShaderTechnique);m.shader=new e.ReloadableShaderModule(D.WaterSurface,()=>new Promise(function(k,h){t(["../shaders/WaterSurface.glsl"],k,h)}));e=function(k){function h(){var c=k.apply(this,arguments)||this;c.output=0;c.receiveShadows=!1;c.slicePlaneEnabled=!1;c.transparent=!1;c.enableOffset=!0;c.writeDepth=!1;c.useSSR=!1;c.isDraped=!1;c.transparencyPassType=3;c.multipassTerrainEnabled=
!1;c.cullAboveGround=!0;return c}r._inheritsLoose(h,k);return h}(f.ShaderTechniqueConfiguration);g.__decorate([f.parameter({count:8})],e.prototype,"output",void 0);g.__decorate([f.parameter()],e.prototype,"receiveShadows",void 0);g.__decorate([f.parameter()],e.prototype,"slicePlaneEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"transparent",void 0);g.__decorate([f.parameter()],e.prototype,"enableOffset",void 0);g.__decorate([f.parameter()],e.prototype,"writeDepth",void 0);g.__decorate([f.parameter()],
e.prototype,"useSSR",void 0);g.__decorate([f.parameter()],e.prototype,"isDraped",void 0);g.__decorate([f.parameter({count:4})],e.prototype,"transparencyPassType",void 0);g.__decorate([f.parameter()],e.prototype,"multipassTerrainEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"cullAboveGround",void 0);n.WaterTechnique=m;n.WaterTechniqueConfiguration=e;Object.defineProperty(n,"__esModule",{value:!0})});