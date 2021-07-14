// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/ObjectPool ../../../../geometry/Polygon ../../../../core/asyncUtils ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../geometry/support/aaBoundingRect ../../../../geometry/projection ../../../../layers/graphics/featureConversionUtils ../../../../core/byteSizeEstimations ../../../../chunks/vec2f64 ../../../../chunks/vec2 ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures ./featureExpressionInfoUtils".split(" "),
function(v,k,w,x,y,q,r,n,z,A,B,C,D,l,t,E){const u=new w(Array,m=>l.set(m,l.ZERO),null,10,5),F=n.create();return function(){function m(a,b,c,f,d){this._labelGraphics=[];this._auxiliaryGraphics=[];var g=Array(2);for(let h=0;h<g.length;h++)g[h]=Array(4);this._visibilityFlags=g;this._featureExpressionFeature=null;this._optimizedGeometry={geometry:null,hasZ:!1,hasM:!1};this._extent=null;this.isElevationSource=!1;++b.referenced;this.graphics3DSymbol=b;this.graphic=a;this._graphics=c;this._featureExpressionFeature=
d?E.createFeature(d,a,f):null;for(const h of this._graphics)k.isSome(h)&&(this.isElevationSource=this.isElevationSource||h.isElevationSource)}var e=m.prototype;e.initialize=function(a,b,c){this._layer=b;this._stage=a;this.forEachSymbolLayerGraphic(f=>{f.initialize(a,b,c);f.setVisibility(this.isVisible())})};e.destroy=function(){this.forEachSymbolLayerGraphic(a=>a.destroy());this._auxiliaryGraphics=this._graphics=null;--this.graphics3DSymbol.referenced;this.graphics3DSymbol=null};e.clearLabelGraphics=
function(){this.forEachLabelGraphic(a=>a.destroy());this._labelGraphics.length=0};e.addLabelGraphic=function(a,b,c){this._labelGraphics.push(a);a.initialize(b,c);a.setVisibility(this.isVisible(1))};e.addAuxiliaryGraphic=function(a){this._auxiliaryGraphics.push(a);this._layer&&(a.initialize(this._stage,this._layer),a.setVisibility(this.isVisible()))};e.isVisible=function(a=0,b){for(let c=0;c<=a;c++){const f=this._visibilityFlags[c];for(let d=0;d<f.length;++d)if(!1===f[d]&&d!==b)return!1}return!0};
e.hasVisibilityFlag=function(a,b){return null!=this._visibilityFlags[b][a]};e.setVisibilityFlag=function(a,b,c){const f=this.isVisible(c);this._visibilityFlags[c][a]=b;const d=this.isVisible(c);if(f===d)return!1;if(1===c)this.forEachLabelGraphic(g=>g.setVisibility(d));else{this.forEachSymbolLayerGraphic(h=>h.setVisibility(d));const g=this.isVisible(1);this.forEachLabelGraphic(h=>h.setVisibility(g))}return!0};e.clearVisibilityFlag=function(a,b=0){return this.setVisibilityFlag(a,void 0,b)};e.getBSRadius=
function(){let a=0;this.forEachSymbolLayerGraphic(b=>{a=Math.max(a,b.getBSRadius())});return a};e.getCenterObjectSpace=function(a=q.create()){if(0===this._graphics.length)return r.set(a,0,0,0),a;const b=this._graphics[0];return k.isSome(b)?b.getCenterObjectSpace(a):a};e.computeExtent=function(a){if(!this._extent){var b=this.graphic.geometry;if(k.isNone(b))return!1;this._extent=n.create();t.computeAABR(b,this._extent);b=b.spatialReference;if(!b.equals(a)&&!z.projectBoundingRect(this._extent,b,this._extent,
a))return this._extent=null,!1}return!0};e.getAsOptimizedGeometry=function(a,b){if(this._optimizedGeometry.geometry&&this._optimizedGeometry.hasZ===a&&this._optimizedGeometry.hasM===b)return this._optimizedGeometry.geometry;this._optimizedGeometry.geometry=this._convertGraphicToOptimizedGeometry(this.graphic,a,b);this._optimizedGeometry.hasZ=a;this._optimizedGeometry.hasM=b;return this._optimizedGeometry.geometry};e._convertGraphicToOptimizedGeometry=function(a,b,c){a=a.geometry;if("mesh"===a.type||
"extent"===a.type)a=x.fromExtent("mesh"===a.type?a.extent:a);return A.convertFromGeometry(a,b,c)};e.computeAttachmentOrigin=function(){const a={render:{origin:q.create(),num:0},draped:{origin:C.create(),num:0}};for(const b of this._graphics)k.isNone(b)||b.computeAttachmentOrigin(a);a.render.num&&r.scale(a.render.origin,a.render.origin,1/a.render.num);a.draped.num&&D.scale(a.draped.origin,a.draped.origin,1/a.draped.num);return a};e.getProjectedBoundingBox=async function(a,b,c,f,d){d||(d={boundingBox:null,
requiresDrapedElevation:!1,screenSpaceObjects:[]});d.boundingBox?l.empty(d.boundingBox):d.boundingBox=l.empty();d.requiresDrapedElevation=!1;await y.forEach(this._graphics,async g=>{if(!k.isNone(g)){var h="draped"===g.type?b:a,p=u.acquire();g=await g.getProjectedBoundingBox(h,c,d.screenSpaceObjects,f,p);isFinite(g[2])&&isFinite(g[5])||(d.requiresDrapedElevation=!0);g&&l.expandWithAABB(d.boundingBox,p);u.release(p)}});return l.allFinite(d.boundingBox)||n.allFinite(l.toRect(d.boundingBox,F))?d:null};
e.needsElevationUpdates=function(){for(const a of this._graphics)if(k.isSome(a)&&("object3d"===a.type||"lod-instance"===a.type)&&a.needsElevationUpdates)return!0;for(const a of this._labelGraphics)if(a&&a.needsElevationUpdates)return!0;return!1};e.alignWithElevation=function(a,b,c){this.forEachRenderedGraphic(f=>{"object3d"!==f.type&&"lod-instance"!==f.type||f.alignWithElevation(a,b,this._featureExpressionFeature,c)})};e.addObjectStateSet=function(a,b){this.forEachSymbolLayerGraphic(c=>c.addObjectState(a,
b))};e.removeObjectState=function(a){this.forEachSymbolLayerGraphic(b=>b.removeObjectState(a))};e.forEachGraphicList=function(a,b){a.forEach(c=>c&&b(c))};e.forEachSymbolLayerGraphic=function(a){this.forEachGraphicList(this._graphics,a);this.forEachGraphicList(this._auxiliaryGraphics,a)};e.forEachLabelGraphic=function(a){this.forEachGraphicList(this._labelGraphics,a)};e.forEachRenderedGraphic=function(a){this.forEachSymbolLayerGraphic(a);this.forEachLabelGraphic(a)};v._createClass(m,[{key:"labelGraphics",
get:function(){return this._labelGraphics}},{key:"extent",get:function(){return this._extent}},{key:"destroyed",get:function(){return null==this._graphics}},{key:"isDraped",get:function(){let a=!1;this.forEachSymbolLayerGraphic(b=>{"draped"===b.type&&(a=!0)});return a}},{key:"usedMemory",get:function(){let a=B.estimateAttributesObjectSize(this.graphic.attributes);this.forEachSymbolLayerGraphic(b=>{const c=b.graphics3DSymbolLayer.complexity;k.isNone(c)||(b="draped"===b.type?c.memory.draped:c.memory,
a+=b.bytesPerFeature,b.bytesPerCoordinate&&(a+=t.numVertices(this.graphic.geometry)*b.bytesPerCoordinate))});return a}}]);return m}()});