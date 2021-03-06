// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/mat3 ../../../chunks/mat3f32 ../../../chunks/vec2f32 ../../webgl/Program ../../webgl/BufferObject ../../webgl/Texture ../../webgl/VertexArrayObject ../../webgl/Renderbuffer ../../webgl/FramebufferObject ../../webgl/ProgramCache ../../webgl/RenderingContext ../../webgl/ShaderCompiler ./DisplayObject ./ImageryBitmapSource".split(" "),function(p,l,g,t,k,q,z,u,A,B,C,D,E,F,v,w){function x(f){const d=document.createElement("canvas");
d.width=f.width;d.height=f.height;f.render(d.getContext("2d"));return d}function r(f,d,e){const a={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};d&&e&&(a.width=d,a.height=e);return new u(f,a)}q=function(f){function d(a=null,c,m=!0){var b=f.call(this)||this;b.requestRenderOnSourceChangedEnabled=m;b._textureInvalidated=!0;b.stencilRef=0;b.coordScale=[1,1];b._height=void 0;b.pixelRatio=1;b.resolution=0;b.rotation=0;b._source=null;b._width=void 0;b.x=0;b.y=0;b.transforms=
{dvs:t.create()};b.blendFunction=c;b.source=a;b.requestRender=b.requestRender.bind(l._assertThisInitialized(b));return b}l._inheritsLoose(d,f);var e=d.prototype;e.destroy=function(){this._texture&&(this._texture.dispose(),this._texture=null)};e.beforeRender=function(a){f.prototype.beforeRender.call(this,a);this.updateTexture(a)};e.invalidateTexture=function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())};e.setTransform=function(a){const c=
g.identity(this.transforms.dvs),[m,b]=a.toScreenNoRotation([0,0],this.x,this.y);var h=this.resolution/this.pixelRatio/a.resolution;const n=h*this.width;h*=this.height;const y=Math.PI*this.rotation/180;g.translate(c,c,k.fromValues(m,b));g.translate(c,c,k.fromValues(n/2,h/2));g.rotate(c,c,-y);g.translate(c,c,k.fromValues(-n/2,-h/2));g.scaleByVec2(c,c,k.fromValues(n,h));g.multiply(this.transforms.dvs,a.displayViewMat3,c)};e.setSamplingProfile=function(a){this._texture&&(a.mips&&!this._texture.descriptor.hasMipmap&&
this._texture.generateMipmap(),this._texture.setSamplingMode(a.samplingMode))};e.bind=function({context:a},c){this._texture&&a.bindTexture(this._texture,c)};e.updateTexture=function({context:a}){if(this.stage)this._textureInvalidated&&(this._textureInvalidated=!1,this._texture||(this._texture=this.source?r(a,this.sourceWidth,this.sourceHeight):r(a)),(a=this.source)?(this._texture.resize(this.sourceWidth,this.sourceHeight),a&&"render"in a?a instanceof w?(a=a.getRenderedRasterPixels(),this._texture.setData(a.renderedRasterPixels)):
this._texture.setData(x(a)):!a||"render"in a||this._texture.setData(a),this.ready()):this._texture.setData(null));else{var c;null==(c=this._texture)?void 0:c.dispose();this._texture=null}};e.onAttach=function(){this.invalidateTexture()};e.onDetach=function(){this.invalidateTexture()};l._createClass(d,[{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},
set:function(a){this._height=a}},{key:"source",get:function(){return this._source},set:function(a){this._source=a;this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(a){this._width=
a}}]);return d}(v.DisplayObject);p.Bitmap=q;Object.defineProperty(p,"__esModule",{value:!0})});