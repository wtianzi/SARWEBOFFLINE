// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/mathUtils ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../geometry/projection ../../../../chunks/vec4f64 ../../../../chunks/vec4 ../../../../geometry/support/aaBoundingBox ../../support/stack ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/HUDMaterial ../../layers/graphics/elevationAlignmentUtils ../../layers/graphics/ElevationContext ../../layers/graphics/sdfPrimitives ../../webgl-engine/lib/Texture ./VisualElementResources".split(" "),
function(k,r,d,l,t,u,m,n,g,v,p,w,x,y,z,A,B,C){let F=function(){function h(a){this._geometry=this.view=null;this._size=3;this._color=n.fromValues(1,0,1,1);this._pixelSnappingEnabled=!0;this._primitive="square";this._outlineSize=1;this._outlineColor=n.fromValues(1,1,1,1);this._elevationInfo=null;this.resources=new C.VisualElementResources({view:a.view,createResources:b=>this.createResources(b),recreateGeometry:(b,e)=>{b.geometry=this.recreateGeometry(e,b.material);return d.isSome(b.geometry)?[b.geometry]:
[]}});let c=!0;for(const b in a)b in this?"attached"===b?c=a[b]:this[b]=a[b]:console.error("Cannot set unknown property",b);this.attached=c}var f=h.prototype;f.destroy=function(){this.resources.destroy()};f.updateMaterial=function(){const a=this.resources.resources;d.isNone(a)||a.material.setParameterValues(this.materialParameters(a.texture.id))};f.updateSizeAttribute=function(){var a=this.resources.resources;const c=this.resources.object;if(!d.isNone(a)&&!d.isNone(c)&&(a=a.geometry,!d.isNone(a))){a=
a.getMutableAttribute("size").data;var b=this.geometrySize;a[0]=b;a[1]=b;c.geometryVertexAttrsUpdated(0)}};f.materialParameters=function(a){return{color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:D,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:a,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled}};f.recreateGeometry=function(a,c){const b=this.createRenderGeometry();
d.isSome(b)&&a.addGeometry(b,c);return b};f.createResources=function(a){const c=this.createTexture(),b=new x.HUDMaterial(this.materialParameters(c.id));a=this.recreateGeometry(a,b);return{material:b,texture:c,geometry:a,forEach(e){e(c);e(b);d.isSome(this.geometry)&&e(this.geometry)}}};f.createTexture=function(){const a=this.preferredTextureSize;return new B.Texture(A.createType(this._primitive,a,.5*a),{mipmap:!1,wrap:{s:33071,t:33071},width:a,height:a,components:4,noUnpackFlip:!0})};f.calculateMapBounds=
function(a){if(d.isNone(this.resources.resources)||d.isNone(this.resources.resources.geometry))return!1;const c=this.resources.resources.geometry.vertexAttributes.get("position");m.projectVectorToVector(c.data,this.view.renderCoordsHelper.spatialReference,q,this.view.spatialReference);v.expandWithBuffer(a,q);return!0};f.createRenderGeometry=function(){var a=this.geometry;if(d.isNone(a))return null;const {renderCoordsHelper:c,elevationProvider:b}=this.view;var e=y.evaluateElevationAlignmentAtPoint(a,
b,z.ElevationContext.fromElevationInfo(this.elevationInfo),c);const E=u.set(p.sv3d.get(),a.x,a.y,e);e=p.sv3d.get();m.projectVectorToVector(E,a.spatialReference,e,c.spatialReference);a=this.geometrySize;return w.createPointGeometry(null,e,null,[a,a],[0,0,0,1])};r._createClass(h,[{key:"visible",get:function(){return this.resources.visible},set:function(a){this.resources.visible=a}},{key:"attached",get:function(){return this.resources.attached},set:function(a){this.resources.attached=a}},{key:"geometry",
get:function(){return this._geometry},set:function(a){this._geometry=a;this.resources.recreateGeometry()}},{key:"size",get:function(){return this._size},set:function(a){if(a!==this._size){const c=this.preferredTextureSize;this._size=a;c<this.preferredTextureSize?d.isSome(this.resources)&&this.resources.recreate():this.updateSizeAttribute()}}},{key:"color",get:function(){return this._color},set:function(a){g.exactEquals(a,this._color)||(g.copy(this._color,a),this.updateMaterial())}},{key:"pixelSnappingEnabled",
get:function(){return this._pixelSnappingEnabled},set:function(a){this._pixelSnappingEnabled!==a&&(this._pixelSnappingEnabled=a,this.updateMaterial())}},{key:"primitive",get:function(){return this._primitive},set:function(a){this._primitive!==a&&(this._primitive=a,d.isSome(this.resources)&&this.resources.recreate())}},{key:"outlineSize",get:function(){return this._outlineSize},set:function(a){a!==this._outlineSize&&(this._outlineSize=a,this.updateMaterial())}},{key:"outlineColor",get:function(){return this._outlineColor},
set:function(a){g.exactEquals(a,this._outlineColor)||(g.copy(this._outlineColor,a),this.updateMaterial())}},{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(a){this._elevationInfo=a;this.resources&&this.resources.recreateGeometry()}},{key:"geometrySize",get:function(){return this._size/.5}},{key:"preferredTextureSize",get:function(){return l.clamp(l.nextHighestPowerOfTwo(2*this.geometrySize),16,128)}}]);return h}();const D=[.25,.25,.75,.75],q=t.create();k.PointVisualElement=
F;Object.defineProperty(k,"__esModule",{value:!0})});