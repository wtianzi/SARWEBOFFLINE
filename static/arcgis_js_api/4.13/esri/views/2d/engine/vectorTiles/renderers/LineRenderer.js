// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f32 ../../../../../core/libs/gl-matrix-2/vec2f32 ../../../../../core/libs/gl-matrix-2/vec3f32 ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ../GeometryUtils ./rendererUtils".split(" "),function(E,F,x,y,z,A,B,u,C,D){return function(){function n(e){this._initialized=!1;this._viewProjMat=y.mat4f32.create();this._offsetVector=A.vec3f32.create();this._color=B.vec4f32.create();this._dashArray=
z.vec2f32.create();this._programOptions={id:!1,dd:!1,pattern:!1};this._programCache=e}n.prototype.dispose=function(){};n.prototype.render=function(e,c,b,g,l,q,f,p,n,w,a){if(0===c.triangleElementCount)return 0;this._initialized||this._initialize(e);var r=q.tileTransform.transform,v=q.coordRange/512,h=f.getPaintValue("line-translate",b);if(0!==h[0]||0!==h[1]){x.mat4.copy(this._viewProjMat,q.tileTransform.transform);var r=h[0],h=h[1],m=0,k=0,k=(1<<q.key.level)/Math.pow(2,b)*v;l=l.rotation;if(1===f.getPaintValue("line-translate-anchor",
b)){m=-C.C_DEG_TO_RAD*l;l=Math.sin(m);var d=Math.cos(m),m=k*(r*d-h*l),k=k*(r*l+h*d)}else m=k*r,k*=h;this._offsetVector[0]=m;this._offsetVector[1]=k;this._offsetVector[2]=0;x.mat4.translate(this._viewProjMat,this._viewProjMat,this._offsetVector);r=this._viewProjMat}h=f.getPaintValue("line-pattern",b);k=void 0!==h;w=1/w;l=f.getPaintValue("line-blur",b);var d=f.hasDataDrivenColor?[1,1,1,1]:f.getPaintValue("line-color",b),u=f.hasDataDrivenOpacity?1:f.getPaintValue("line-opacity",b),m=f.hasDataDrivenWidth?
1:f.getPaintValue("line-width",b);a*=u*d[3];this._color[0]=a*d[0];this._color[1]=a*d[1];this._color[2]=a*d[2];this._color[3]=a;a=f.hasDataDrivenLine;g=4===g;var t;g&&(t=D.int32To4Bytes(c.layerID));d=this._getLineVAO(e,q,a);if(!d)return 0;e.bindVAO(d);d=this._programOptions;d.id=g;d.dd=a;d.pattern=k;a=this._programCache.getProgram(3,(g?1:0)<<2|(a?1:0)<<1|(k?1:0),d);e.bindProgram(a);a.setUniformMatrix4fv("u_transformMatrix",r);a.setUniformMatrix4fv("u_extrudeMatrix",n);a.setUniform2fv("u_normalized_origin",
q.tileTransform.displayCoord);a.setUniform1f("u_depth",f.z);a.setUniform1f("u_blur",l);a.setUniform1f("u_antialiasing",w);a.setUniform4fv("u_color",this._color);a.setUniform1f("u_width",m);g&&a.setUniform4f("u_id",t[0],t[1],t[2],t[3]);if(k){if(b=p.getMosaicItemPosition(h,!0))p.bind(e,9729,b.page,5),a.setUniform2f("u_pattern_tl",b.tl[0],b.br[1]),a.setUniform2f("u_pattern_br",b.br[0],b.tl[1]),a.setUniform2f("u_spriteSize",v*b.size[0],b.size[1]),a.setUniform1i("u_texture",5)}else p=f.getPaintValue("line-dasharray",
b),2>p.length&&(p=[1,-1]),this._dashArray[0]=v*p[0],this._dashArray[1]=v*p[1],a.setUniform2fv("u_dasharray",this._dashArray);e.drawElements(4,c.triangleElementCount,5125,12*c.triangleElementStart);e.bindVAO();return c.triangleCount()};n.prototype._initialize=function(e){if(this._initialized)return!0;this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:12,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:12,normalized:!1,divisor:0},{name:"a_accumulatedDistance",
count:2,type:5123,offset:8,stride:12,normalized:!1,divisor:0}]};this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:20,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5122,offset:8,stride:20,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:20,normalized:!0,divisor:0},{name:"a_width",count:1,type:5126,offset:16,stride:20,normalized:!1,
divisor:0}]};return this._initialized=!0};n.prototype._getLineVAO=function(e,c,b){if(b){if(c.lineDDVertexArrayObject)return c.lineDDVertexArrayObject;b=c.lineDDVertexBuffer;var g=c.lineIndexBuffer;if(!b||!g)return null;c.lineDDVertexArrayObject=new u.VertexArrayObject(e,this._programCache.getProgramAttributes(3),this._vertexAttributesDD,{geometry:b},g);return c.lineDDVertexArrayObject}if(c.lineVertexArrayObject)return c.lineVertexArrayObject;b=c.lineVertexBuffer;g=c.lineIndexBuffer;if(!b||!g)return null;
c.lineVertexArrayObject=new u.VertexArrayObject(e,this._programCache.getProgramAttributes(3),this._vertexAttributes,{geometry:b},g);return c.lineVertexArrayObject};return n}()});