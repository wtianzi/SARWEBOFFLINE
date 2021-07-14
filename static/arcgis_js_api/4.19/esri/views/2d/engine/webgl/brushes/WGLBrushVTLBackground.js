// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/vec4f32 ../definitions ../../../../../chunks/mat3f32 ../../../../webgl/Program ../../../../webgl/BufferObject ../../../../webgl/Texture ../../../../webgl/VertexArrayObject ../../../../webgl/Renderbuffer ../../../../webgl/FramebufferObject ../../../../webgl/ProgramCache ../../../../webgl/RenderingContext ../../../../webgl/ShaderCompiler ../number ../enums ./WGLBrush".split(" "),function(u,A,B,n,C,v,D,L,E,M,N,O,P,
Q,F,G,H){v=function(w){function p(){var a=w.apply(this,arguments)||this;a._color=B.fromValues(1,0,0,1);a._patternMatrix=C.create();a._programOptions={id:!1,pattern:!1};return a}A._inheritsLoose(p,w);var q=p.prototype;q.dispose=function(){this._vao&&(this._vao.dispose(),this._vao=null)};q.drawMany=function(a,f){const {context:e,painter:g,styleLayerUID:I}=a;this._loadWGLResources(a);const k=a.displayLevel;var c=a.styleLayer,b=c.backgroundMaterial;const J=g.vectorTilesMaterialManager,l=c.getPaintValue("background-color",
k),x=c.getPaintValue("background-opacity",k),y=c.getPaintValue("background-pattern",k),r=void 0!==y,m=l[3]*x,z=a.spriteMosaic;let d;const K=(window.devicePixelRatio|1)>n.VTL_HIGH_RES_CUTOFF?2:1;a=a.drawPhase===G.WGLDrawPhase.HITTEST;const t=this._programOptions;t.id=a;t.pattern=r;b=J.getMaterialProgram(e,b,t);e.bindVAO(this._vao);e.bindProgram(b);if(r){d=z.getMosaicItemPosition(y,!0);if(!d)return;b.setUniform1f("u_opacity",x);b.setUniform2f("u_pattern_tl",d.tl[0],d.tl[1]);b.setUniform2f("u_pattern_br",
d.br[0],d.br[1]);b.setUniform1i("u_texture",n.VTL_TEXTURE_BINDING_UNIT_SPRITES);z.bind(e,9729,d.page,n.VTL_TEXTURE_BINDING_UNIT_SPRITES)}else this._color[0]=m*l[0],this._color[1]=m*l[1],this._color[2]=m*l[2],this._color[3]=m,b.setUniform4fv("u_color",this._color);b.setUniform1f("u_depth",c.z||0);a&&(c=F.u32to4Xu8(I+1),b.setUniform4fv("u_id",c));for(const h of f)b.setUniform1f("u_coord_range",h.coordRange[0]),b.setUniformMatrix3fv("u_dvsMat3",h.transforms.dvs),r&&(f=K*h.size[0]*Math.max(2**(Math.round(k)-
h.key.level),1),c=f/d.size[1],this._patternMatrix[0]=f/d.size[0],this._patternMatrix[4]=c,b.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)),e.setStencilFunction(514,h.stencilRef,255),e.drawArrays(5,0,4)};q._loadWGLResources=function(a){if(!this._vao){var {context:f,styleLayer:e}=a;a=e.backgroundMaterial;var g=new Int8Array([0,0,1,0,0,1,1,1]);g=D.createVertex(f,35044,g);this._vao=new E(f,a.getAttributeLocations(),a.getLayoutInfo(),{geometry:g})}};return p}(H);u.WGLBrushVTLBackground=v;
Object.defineProperty(u,"__esModule",{value:!0})});