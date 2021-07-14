// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/arrayUtils ../../../core/mathUtils ../../../geometry/support/aaBoundingBox ./TerrainConst ../webgl-engine/lib/DefaultVertexAttributeLocations ../support/buffer/glUtil ../../webgl/BufferObject ../../webgl/VertexArrayObject ./PatchGeometryFactory ./tileUtils ./TextureFader ./TileOverlayData".split(" "),function(q,u,n,v,w,x,y,z,A,r,B,t,C,D,E){let F=function(){function p(){this.geometryInfo=new t.PatchGeometry;
this._textureRef=new D["default"](()=>this.tile.surface.textureFadeDuration);this.overlay=new E}var g=p.prototype;g.init=function(a){this.tile=a;this.clear();a=this.geometryInfo;a.indices=null;a.vertexAttributes=null;x.empty(a.boundingBox);a.numSurfaceIndices=0;a.numSkirtIndices=0;a.numWithoutSkirtIndices=0;a.numVertsPerRow=0;this.geometryState={numVertsPerRow:0,samplerData:null,clippingArea:null,wireframe:!1};this.opacity=1;this.localOrigin=null;this.overlay.clear()};g.clear=function(){this.releaseGeometry();
this.releaseTexture();this._textureRef.clear()};g.updateGeometry=function(a,d){if(!this._updateGeometryState(d))return!1;this._releaseGeometry();this._createGeometry(a);return!0};g.releaseGeometry=function(){return this._releaseGeometry()?(this.geometryState={numVertsPerRow:0,samplerData:null,clippingArea:null,wireframe:!1},!0):!1};g.ensureTexture=function(a,d){n.isSome(this._texture)&&this._texture.descriptor.width!==a&&this.releaseTexture();this._texture||(this._texture=d(),this.tile.setMemoryDirty());
return this._texture};g.releaseTexture=function(){n.isSome(this._texture)&&(this._texture.release(),this._texture=null,this.tile.setMemoryDirty())};g._updateGeometryState=function(a){const d=this._getElevationInfo();var e=this.tile.level,b=8>e?this.tile.numSubdivisionsAtLevel[e]+1:2;d.samplerData&&(b=this.tile.maxTesselation,b=w.clamp((b>>Math.max(e-d.maxTileLevel,y.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-e)))+1,2,b+1));e=this.tile.clippingArea;if(!this.tile.intersectsClippingArea||this.tile.isWithinClippingArea)e=
null;const c=this.geometryState;let f=!1;c.numVertsPerRow!==b&&(c.numVertsPerRow=b,f=!0);d.changed&&(c.samplerData=d.samplerData,f=!0);v.equals(c.clippingArea,e)||(c.clippingArea=e,f=!0);c.wireframe!==a&&(c.wireframe=a,f=!0);return f};g._createGeometry=function(a){this.tile.createGeometry(this.geometryState,this.localOrigin);const d=this.geometryInfo.vertexAttributes,e=this.geometryInfo.indices,b=a.gl;this._vao=new B(a,z.Default3D,{geometry:A.glLayout(d.layout)},{geometry:r.createVertex(a,b.STATIC_DRAW,
d.buffer)},r.createIndex(a,b.STATIC_DRAW,e))};g._releaseGeometry=function(){if(!this._vao)return!1;this._vao.dispose();this._vao=null;t.releaseGeometry(this.geometryInfo);return!0};g.setTextureReference=function(a,d,e,b,c=0){a!==this._texture&&this.releaseTexture();this._textureRef.push(a,d,e,b,c)};g._getElevationInfo=function(){const a=this.geometryState.samplerData,d=this.tile.layerInfo[0],e=d.length;let b=Array(e),c=0;var f=0;let m=!1;for(let l=0;l<e;l++){var h=d[l];if(h.upsampleInfo){h=h.upsampleInfo.tile;
var k=h.layerInfo[0][l].data;k=k&&k.samplerData;a&&a[c]===k||(m=!0);b[c++]=k;f=Math.max(f,h.lij[0])}else h.data&&(k=this.tile.surface.layerViewByIndex(l,0),C.fallsWithinLayer(this.tile,k.layer,!1)&&(f=h.data,a&&a[c]===f.samplerData||(m=!0),b[c++]=f.samplerData,f=this.tile.lij[0]))}a&&a.length!==c&&(m=!0);0<c?b.length=c:b=null;return{changed:m,samplerData:b,maxTileLevel:f}};u._createClass(p,[{key:"vao",get:function(){return this._vao}},{key:"textureReference",get:function(){return this._textureRef.current}},
{key:"nextTextureReference",get:function(){return this._textureRef.next}},{key:"textureFadeFactor",get:function(){return this._textureRef.fadeFactor}},{key:"textureIsFading",get:function(){return this._textureRef.isFading}},{key:"estimatedGeometryMemoryUsage",get:function(){return this.geometryInfo.indices.byteLength+this.geometryInfo.vertexAttributes.byteLength}},{key:"textureDescriptor",get:function(){return n.isSome(this._texture)?this._texture.descriptor:null}},{key:"test",get:function(){return{hasTexture:null!=
this._texture}}}]);return p}();q.PatchRenderData=F;Object.defineProperty(q,"__esModule",{value:!0})});