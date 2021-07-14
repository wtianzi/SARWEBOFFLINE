// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/RandomLCG ../definitions ../../../../webgl/Program ../../../../webgl/BufferObject ../../../../webgl/Texture ../../../../webgl/VertexArrayObject ../../../../webgl/Renderbuffer ../../../../webgl/FramebufferObject ../../../../webgl/ProgramCache ../../../../webgl/RenderingContext ../../../../webgl/ShaderCompiler ../enums ../materialKey/MaterialKey ../Utils ./WGLGeometryBrush".split(" "),function(r,t,k,C,D,u,E,F,G,H,I,J,v,w,x,
y){return function(m){function l(){var a=m.apply(this,arguments)||this;a._dotTextureSize=0;a._dotTextures=null;a._dotSamplers=new Int32Array([k.TEXTURE_BINDING_RENDERER_0,k.TEXTURE_BINDING_RENDERER_1]);return a}r._inheritsLoose(l,m);var h=l.prototype;h.dispose=function(){this._disposeTextures()};h.getGeometryType=function(){return v.WGLGeometryType.FILL};h.drawGeometry=function(a,b,d,c){const {context:g,painter:n,rendererInfo:f,requiredLevel:p}=a;var e=w.FillMaterialKey.load(d.materialKey);const {bufferLayouts:z,
attributes:q}=x.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},...e.dotDensity?[]:[{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_tlbr",count:4,type:5123},{location:4,name:"a_aux1",count:4,type:5121},{location:5,name:"a_aux2",count:2,type:5123},{location:6,name:"a_aux3",count:4,type:5121}],...e.dotDensity?[{location:2,name:"a_inverseArea",count:1,type:5126}]:[]]});c=n.materialManager.getMaterialProgram(a,
e,"materials/fill",q,c);g.bindProgram(c);this._setSharedUniforms(c,a,b);e.textureBinding&&(n.textureManager.bindTextures(g,c,e),c.setUniform1f("u_zoomFactor",1/2**(p-b.key.level)/a.pixelRatio));e.vvColor&&(c.setUniform1fv("u_vvColorValues",f.vvColorValues),c.setUniform4fv("u_vvColors",f.vvColors));e.vvOpacity&&(c.setUniform1fv("u_vvOpacityValues",f.vvOpacityValues),c.setUniform1fv("u_vvOpacities",f.vvOpacities));if(e.dotDensity){e=k.TILE_SIZE/f.ddDotSize;const A=e*window.devicePixelRatio*e*window.devicePixelRatio;
b=1/2**(p-b.key.level);const B=1/b*(1/b);a=f.ddDotScale?a.state.scale/f.ddDotScale:1;c.setUniform1f("u_tileZoomFactor",b);c.setUniform1f("u_tileDotsOverArea",A/(k.TILE_SIZE*window.devicePixelRatio*k.TILE_SIZE*window.devicePixelRatio));c.setUniformMatrix4fv("u_dotColors",f.ddColors);c.setUniform4fv("u_isActive",f.ddActiveDots);c.setUniform4fv("u_dotBackgroundColor",f.ddBackgroundColor);c.setUniform1f("u_dotValue",Math.max(1,f.ddDotValue*a*B));this._bindDotDensityTextures(g,c,f,e)}d.draw(g,z,q)};h._disposeTextures=
function(){if(this._dotTextures){for(let a=0;a<this._dotTextures.length;a++)this._dotTextures[a].dispose();this._dotTextures=null}};h._bindDotDensityTextures=function(a,b,d,c){d=this._createDotDensityTextures(a,c,d.ddSeed);b.setUniform1iv("u_dotTextures",this._dotSamplers);for(b=0;b<d.length;b++)a.bindTexture(d[b],this._dotSamplers[b])};h._createDotDensityTextures=function(a,b,d){if(this._dotTextureSize!==b||this._seed!==d)this._disposeTextures(),this._dotTextureSize=b,this._seed=d;null===this._dotTextures&&
(d=new t(d),this._dotTextures=[this._allocDotDensityTexture(a,b,d),this._allocDotDensityTexture(a,b,d)]);return this._dotTextures};h._allocDotDensityTexture=function(a,b,d){const c=new Float32Array(b*b*4);for(let g=0;g<c.length;g++)c[g]=d.getFloat();return new u(a,{wrapMode:10497,pixelFormat:6408,dataType:5126,samplingMode:9728,width:b,height:b},c)};return l}(y)});