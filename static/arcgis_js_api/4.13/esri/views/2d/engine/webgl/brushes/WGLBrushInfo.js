// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ../GeometryUtils ./WGLBrush ../shaders/BackgroundPrograms ../shaders/TileInfoPrograms".split(" "),function(k,l,p,q,f,r,t,m,n){Object.defineProperty(l,"__esModule",{value:!0});k=function(h){function c(){var a=null!==h&&h.apply(this,arguments)||this;a._initialized=!1;a._color=q.vec4f32.fromValues(1,0,0,1);a._maxWidth=0;return a}p(c,h);c.prototype.dispose=function(){this._outlineProgram&&
(this._outlineProgram.dispose(),this._outlineProgram=null);this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null);this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null);this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null);this._canvas=null};c.prototype.prepareState=function(a,b){a=a.context;a.setBlendingEnabled(!0);a.setBlendFunctionSeparate(1,771,1,771);
a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!0);a.setStencilFunction(514,b.stencilRef,255)};c.prototype.draw=function(a,b){a=a.context;if(b.isReady){this._initialized||this._initialize(a);a.bindVAO(this._outlineVertexArrayObject);a.bindProgram(this._outlineProgram);this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs);this._outlineProgram.setUniform2f("u_coord_range",b.size[0],b.size[1]);this._outlineProgram.setUniform1f("u_depth",0);this._outlineProgram.setUniform4fv("u_color",
this._color);a.drawArrays(3,0,4);a.bindVAO();var g=this._getTexture(a,b);g&&(a.bindVAO(this._tileInfoVertexArrayObject),a.bindProgram(this._tileInfoProgram),a.bindTexture(g,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",1,1),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",g.descriptor.width,g.descriptor.height),a.drawArrays(5,
0,4),a.bindVAO())}};c.prototype._initialize=function(a){if(this._initialized)return!0;var b=f.createProgram(a,m.background),g=f.createProgram(a,n.tileInfo),d={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},e=new Int8Array([0,0,1,0,1,1,0,1]),e=f.BufferObject.createVertex(a,35044,e),e=new f.VertexArrayObject(a,m.background.attributes,d,{geometry:e}),c=new Int8Array([0,0,1,0,0,1,1,1]),c=f.BufferObject.createVertex(a,35044,c);a=new f.VertexArrayObject(a,n.tileInfo.attributes,
d,{geometry:c});this._outlineProgram=b;this._tileInfoProgram=g;this._outlineVertexArrayObject=e;this._tileInfoVertexArrayObject=a;return this._initialized=!0};c.prototype._getTexture=function(a,b){if(b.texture)return b.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var c=b.key.id,d=this._canvas.getContext("2d");
d.font="24px sans-serif";d.textAlign="left";d.textBaseline="middle";var e=d.measureText(c),e=Math.pow(2,Math.ceil(r.log2(e.width+2)));e>this._maxWidth&&(this._maxWidth=e);d.clearRect(0,0,this._maxWidth,32);d.fillStyle="blue";d.fillText(c,0,16);b.texture=new f.Texture(a,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas);return b.texture};return c}(t.default);l.default=k});