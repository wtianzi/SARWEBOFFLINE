// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(e,g){let h=function(){function d(a,c){c&&(this._config=c.snapshot());this._program=this.initializeProgram(a);a.commonUniformStore&&(this._commonUniformStore=a.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program));this._pipeline=this.initializePipeline(a)}var b=d.prototype;b.dispose=function(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),
this._program=null)};b.reload=function(a){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose());this._program=this.initializeProgram(a);this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)};b.bindPass=function(a,c,f){};b.bindMaterial=function(a,c,f){};b.bindDraw=function(a,c,f){};b.bindPipelineState=function(a){a.setPipelineState(this.pipeline)};b.ensureAttributeLocations=function(a){this.program.assertCompatibleVertexAttributeLocations(a)};
g._createClass(d,[{key:"program",get:function(){return this._program}},{key:"pipeline",get:function(){return this._pipeline}},{key:"key",get:function(){return this._config.key}},{key:"configuration",get:function(){return this._config}},{key:"primitiveType",get:function(){return 4}}]);return d}();e.ShaderTechnique=h;Object.defineProperty(e,"__esModule",{value:!0})});