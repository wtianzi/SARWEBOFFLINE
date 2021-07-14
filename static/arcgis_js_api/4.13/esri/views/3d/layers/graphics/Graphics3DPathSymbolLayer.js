// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/Error ../../../../core/lang ../../../../core/mathUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/mat2 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f32 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../layers/graphics/dehydratedFeatures ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ../support/FastSymbolUpdates ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/pathGeometryUtils ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/materials/PathMaterial ../../webgl-engine/materials/internal/MaterialUtil".split(" "),
function(z,l,V,ja,W,X,Y,Z,E,y,aa,I,ba,f,J,K,A,ca,x,F,L,M,da,ea,c,fa,ga,N){function O(h,a,g){switch(a){case "world":for(var b=0,u=h.vertices;b<u.length;b++)a=u[b],f.vec3.add(m,a.pos,h.offset),g.worldUpAtPosition(m,n),a.setFrameFromUpVector(n),a.computeRotationAxisAndAngleFromUpVector();break;case "path":for(f.vec3.add(m,h.vertices[0].pos,h.offset),g.worldUpAtPosition(m,n),c.computeMinimumRotationTangentFrame(h,n),g=0,h=h.vertices;g<h.length;g++){a=h[g];b=E.sign(f.vec3.dot(a.frame.right,a.vRight));
f.vec3.cross(a.rotationFrame.up,a.vRight,a.vLeft);f.vec3.scale(a.rotationFrame.up,a.rotationFrame.up,b);f.vec3.normalize(a.rotationFrame.up,a.rotationFrame.up);var u=f.vec3.dot(a.rotationFrame.up,a.frame.up),w=f.vec3.dot(a.rotationFrame.up,a.frame.right);f.vec3.scale(m,a.frame.up,-w);f.vec3.scale(P,a.frame.right,u);f.vec3.add(m,m,P);f.vec3.normalize(a.rotationFrame.right,m);c.vertexSpaceToProfileSpace(a.rotationRight,a.frame,a.rotationFrame.right);f.vec3.negate(m,a.vLeft);a.rotationAngle=-b*(Math.PI-
E.acosClamped(f.vec3.dot(m,a.vRight)));0<Math.abs(a.rotationAngle)&&(b=1/Math.cos(.5*a.rotationAngle),aa.mat2.set(a.miterStretch,1+(b-1)*a.rotationRight[0]*a.rotationRight[0],(b-1)*a.rotationRight[0]*a.rotationRight[1],(b-1)*a.rotationRight[0]*a.rotationRight[1],1+(b-1)*a.rotationRight[1]*a.rotationRight[1]));a.maxStretchDistance=Math.abs(Math.min(a.vLeftLength,a.vRightLength)/Math.cos(.5*(Math.PI-a.rotationAngle)))}}}function Q(c,a,g){switch(c){case "symbolValue":return g;case "proportional":return a;
default:return c}}function ha(c,a,g,b){c=c.stageObject;var u=c.geometryRecords,w=u.length,R=0;v.spatialReference=g.spatialReference;ia.spatialReference=b.spatialReference;for(var d=0;d<w;d++){var C=u[d].geometry,p=C.metadata,S=p.pathGeometry,D=S.builder.path;T.spatialReference=p.geometrySR;for(var q=D,h=a,G=g,e=b,k=0,r=0,t=q.vertices;r<t.length;r++){var l=t[r];v.x=l.posES[0];v.y=l.posES[1];v.z=l.posES[2];var m=x.computeElevation(G,v,h,e,U),k=k+U.terrainElevation;f.vec3.add(n,l.pos,q.offset);e.setAltitude(m,
n);f.vec3.subtract(l.pos,n,q.offset)}q.updatePathVertexInformation();R+=k/q.vertices.length;"world"!==D.upVector&&O(D,p.upVectorAlignment,b);S.onPathChanged();C.invalidateBoundingInfo();c.geometryVertexAttrsUpdated(d)}return R/w}Object.defineProperty(l,"__esModule",{value:!0});z=function(h){function a(a,b,c,w){a=h.call(this,a,b,c,w)||this;a._intrinsicSize=ba.vec2f64.fromValues(1,1);a.upVectorAlignment="path";a.stencilWidth=.1;return a}V(a,h);a.prototype.doLoad=function(){return X(this,void 0,void 0,
function(){var a,b,u,w,f,d,C,p,h,D,q,m,n,e;return W(this,function(g){a=y.isSome(this.symbolLayer.width)?this.symbolLayer.width:y.isSome(this.symbolLayer.height)?this.symbolLayer.height:this.symbolLayer.size;b=y.isSome(this.symbolLayer.height)?this.symbolLayer.height:a;this._vvConvertOptions={modelSize:[1,1,1],symbolSize:[a,1,b],unitInMeters:this._context.renderCoordsHelper.unitInMeters,transformation:{anchor:[0,0,0],scale:[1,1,1],rotation:[0,0,0]},supportedTypes:{size:!0,color:!0,opacity:!0,rotation:!1}};
this._fastUpdates=this._context.renderer&&this._context.renderer.visualVariables&&0<this._context.renderer.visualVariables.length?M.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):{enabled:!1};u=this.symbolLayer.anchor||"center";this.upVectorAlignment="path";"heading"===this.symbolLayer.profileRotation&&(this.upVectorAlignment="world");w=this.symbolLayer.profile||"circle";switch(w){default:this._profile=c.Profile.circle(l.NUM_CIRCLE_PROFILE_SUBDIVISIONS);break;case "quad":this._profile=
c.Profile.rect()}f=[0,0];"center"!==u&&(f={left:[.5,0],right:[-.5,0],top:[0,-.5],bottom:[0,.5]}[u],this._profile.translate(f[0],f[1]));d=this.symbolLayer.join||"simple";switch(d){case "round":this._extruder=new c.MiterExtruder(0,l.NUM_ROUND_JOIN_SUBDIVISIONS);break;case "bevel":this._extruder=new c.MiterExtruder(0,1);break;case "miter":this._extruder=new c.MiterExtruder(.8*Math.PI,1);break;default:this._extruder=new c.SimpleExtruder}C=this.symbolLayer.cap||"butt";switch(C){case "none":this._startCap=
new c.NoCapBuilder;this._endCap=new c.NoCapBuilder;break;default:this._startCap=new c.TriangulationCapBuilder(this._profile,0);this._endCap=new c.TriangulationCapBuilder(this._profile,0,!0);break;case "square":this._startCap=new c.TriangulationCapBuilder(this._profile,-.5);this._endCap=new c.TriangulationCapBuilder(this._profile,.5,!0);break;case "round":p="quad"===w?!0:!1,this._startCap=new c.RoundCapBuilder({profile:this._profile,flip:!1,breakNormals:p,subdivisions:l.NUM_ROUND_CAP_EXTRUSION_SUBDIVISIONS}),
this._endCap=new c.RoundCapBuilder({profile:this._profile,flip:!0,breakNormals:p,subdivisions:l.NUM_ROUND_CAP_EXTRUSION_SUBDIVISIONS})}h=this._getIdHint();D=y.get(this.symbolLayer,"material","color");q=this._getCombinedOpacityAndColor(D);m=K.vec3f64.fromArray(q);n=q[3];e={diffuse:m,ambient:m,opacity:n,transparent:1>n||this._isPropertyDriven("opacity"),vertexColors:!1,slicePlaneEnabled:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,cullFace:"none"===C?"none":void 0,offsetTransparentBackfaces:!0};
if(!this._isPropertyDriven("size")&&(I.vec2.set(this._intrinsicSize,a,b),!L.isValidSize(this._intrinsicSize[0])||!L.isValidSize(this._intrinsicSize[1])))throw new Y("graphics3dpathsymbollayer:invalid-size","Symbol sizes may not be negative values");this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size||I.vec2.scale(this._intrinsicSize,this._intrinsicSize,1/this._context.renderCoordsHelper.unitInMeters);this._fastUpdates.enabled?(Z.mixin(e,this._fastUpdates.materialParameters,{size:[this._intrinsicSize[0],
this._intrinsicSize[1],0]}),this._material=new ga(e,h+"_pathmat")):(e.vertexColors=this._isPropertyDriven("color")||this._isPropertyDriven("opacity"),this._material=new fa(e,h+"_pathmat"));this._material.setParameterValues(N.returnDefaultPBRMaterialParameters(this._context.physicalBasedRenderingEnabled));this._context.stage.add(3,this._material);return[2]})})};a.prototype.destroy=function(){h.prototype.destroy.call(this);this._material&&(this._context.stage.remove(3,this._material.id),this._material=
null)};a.prototype.createGraphics3DGraphic=function(g){var b=g.graphic;if(!this._validateGeometryType(b.geometry,a.validGeometryTypes,this.symbolLayer.type)||!this._validateGeometry(b.geometry))return null;var c="graphic"+b.uid,f=this.getGraphicElevationContext(b);return this._createAs3DShape(b,g.renderingInfo,f,c,b.uid)};a.prototype.layerOpacityChanged=function(){var a=y.get(this.symbolLayer,"material","color"),a=this._getCombinedOpacity(a),b=1>a||this._isPropertyDriven("opacity");this._material.setParameterValues({opacity:a,
transparent:b});return!0};a.prototype.layerElevationInfoChanged=function(a,b,c){var g=this;a.forEach(function(a){var d=b(a);y.isSome(d)&&(a=g.getGraphicElevationContext(a.graphic),d.needsElevationUpdates=x.needsElevationUpdates3D(a.mode),d.elevationContext.set(a))});return x.SymbolUpdateType.UPDATE};a.prototype.slicePlaneEnabledChanged=function(a,b){this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};a.prototype.physicalBasedRenderingChanged=function(a,
b){this._material.setParameterValues(N.returnDefaultPBRMaterialParameters(this._context.physicalBasedRenderingEnabled));return!0};a.prototype.pixelRatioChanged=function(a,b){return!0};a.prototype.applyRendererDiff=function(a,b){for(var c in a.diff)switch(c){case "visualVariables":if(M.updateFastSymbolUpdatesState(this._fastUpdates,b,this._vvConvertOptions))this._material.setParameterValues(this._fastUpdates.materialParameters);else return!1;break;default:return!1}return!0};a.prototype.getVertexData=
function(a){for(var b=0,c=a.paths,f=[],g=a.spatialReference,d=this._context.elevationProvider.spatialReference,h=this._context.renderSpatialReference,p=0;p<c.length;p++)var l=c[p],b=b+l.length;for(var p=new Float64Array(3*b),m=new Float64Array(3*b),q=new Float64Array(3*b),n=0,v=0;v<c.length;v++){l=c[v];f.push({index:n,numVertices:l.length});for(var e=0;e<l.length;e++){var k=l[e];p[n++]=k[0];p[n++]=k[1];p[n++]=a.hasZ?k[2]:0}}a=!0;g.equals(d)?x.copyVertices(p,0,m,0,b):a=x.reproject(p,0,g,m,0,d,b);d.equals(h)?
x.copyVertices(m,0,q,0,b):x.reproject(m,0,d,q,0,h,b);return{pathVertexDataInfos:f,vertexDataGS:p,vertexDataES:m,vertexDataRS:q,projectionSuccess:a,terrainElevation:0}};a.prototype._createAs3DShape=function(a,b,l,h,m){var d=a.geometry,g=[],p=[],u=[],w=d.spatialReference,q=this._context.elevationProvider.spatialReference,y=Array(6),G=this._context.renderCoordsHelper;T.spatialReference=w;v.spatialReference=q;d=this.getVertexData(d);if(!d.projectionSuccess)return this.logger.warn("PathSymbol3DLayer geometry failed to be created (failed to project geometry to view spatial reference)"),
null;if(0<d.pathVertexDataInfos.length){for(q=0;q<d.pathVertexDataInfos.length;++q){var e=d.pathVertexDataInfos[q],k=e.index,e=e.numVertices;if(2>e)this.logger.warn("PathSymbol3DLayer geometry failed to be created (paths should contain at least 2 vertices)");else{if(this._context.clippingExtent&&(x.computeBoundingBox(d.vertexDataES,k,e,y),x.boundingBoxClipped(y,this._context.clippingExtent)))continue;for(var r=[],t=k;t<k+3*e;){var z=t++,A=t++,H=t++,B=new c.PathVertex;f.vec3.set(B.posGS,d.vertexDataGS[z],
d.vertexDataGS[A],d.vertexDataGS[H]);f.vec3.set(B.posES,d.vertexDataES[z],d.vertexDataES[A],d.vertexDataES[H]);v.x=B.posES[0];v.y=B.posES[1];v.z=B.posES[2];var E=x.computeElevation(this._context.elevationProvider,v,l,G,null);f.vec3.set(n,d.vertexDataRS[z],d.vertexDataRS[A],d.vertexDataRS[H]);G.setAltitude(E,n);f.vec3.set(B.pos,n[0],n[1],n[2]);r.push(B)}k=new c.Path(r);O(k,this.upVectorAlignment,this._context.renderCoordsHelper);k=new c.Builder(k,this._profile,this._extruder,this._startCap,this._endCap);
e=null;this._fastUpdates.enabled?(t=this._fastUpdates.visualVariables,e=t.size?F.getAttributeValue(t.size.field,a):0,r=t.color?F.getAttributeValue(t.color.field,a):0,t=t.opacity?F.getAttributeValue(t.opacity.field,a):0,e=new c.FastUpdatePathGeometry(k,e,r,t)):(e=[this._intrinsicSize[0],this._intrinsicSize[1]],this._isPropertyDriven("size")&&(e[0]*=Q(b.size[0],b.size[2],this.symbolLayer.width),e[1]*=Q(b.size[2],b.size[0],this.symbolLayer.height)),r=null,this._isPropertyDriven("color")&&(r=b.color),
this._isPropertyDriven("opacity")&&null!=b.opacity&&(r=r?[r[0],r[1],r[2],b.opacity]:[1,1,1,b.opacity]),k=new c.StaticPathGeometry(k),k.bake(e),r&&k.bakeVertexColors(r),e=k);k=e.createGeometryData();k=new da(k,h+"path"+q);r={pathGeometry:e,geometrySR:w,upVectorAlignment:this.upVectorAlignment,stencilWidth:this.stencilWidth};k.singleUse=!0;k.metadata=r;g.push(k);p.push(this._material);u.push(e.xform)}}a={layerUid:this._context.layer.uid,graphicUid:m};if(0<g.length)return h=new ea({geometries:g,materials:p,
transformations:u,castShadow:!0,metadata:a,idHint:h}),g=new ca(this,h,g,null,null,ha,l),g.alignedTerrainElevation=d.terrainElevation,g.needsElevationUpdates=x.needsElevationUpdates3D(l.mode),g}else this.logger.warn("PathSymbol3DLayer geometry failed to be created (no paths were defined)");return null};a.validGeometryTypes=["polyline"];return a}(F.Graphics3DSymbolLayer);l.Graphics3DPathSymbolLayer=z;var ia=A.makeDehydratedPoint(0,0,0,null),v=A.makeDehydratedPoint(0,0,0,null),T=A.makeDehydratedPoint(0,
0,0,null),n=K.vec3f64.create(),m=J.vec3f32.create(),P=J.vec3f32.create();l.NUM_ROUND_JOIN_SUBDIVISIONS=3;l.NUM_ROUND_CAP_EXTRUSION_SUBDIVISIONS=3;l.NUM_CIRCLE_PROFILE_SUBDIVISIONS=10;var U={verticalDistanceToGround:0,terrainElevation:0};l.default=z});