/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{b as t,L as s,u as i}from"./Logger.js";import"./string.js";import"./metadata.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{debounce as o,isAbortError as a,createAbortController as l,eachAlways as n}from"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import m from"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import h from"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./mathUtils.js";import"../Camera.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import{c as u}from"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import c from"../Graphic.js";import"../core/Handles.js";import"./unitUtils.js";import d from"../layers/support/PixelBlock.js";import"../Viewpoint.js";import{watch as y}from"../core/watchUtils.js";import"./mat4.js";import"./pe.js";import{c as b}from"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"./earcut.js";import{i as _,a as f,r as j,h as g,m as x}from"./mat3.js";import"./vec2.js";import"../layers/support/LOD.js";import T from"../layers/support/TileInfo.js";import{e as I}from"./pixelUtils.js";import"./OptimizedFeatureSet.js";import"./featureConversionUtils.js";import{u as S,c as P,r as w,g as C}from"./RawBlockCache.js";import{c as v}from"./rasterProjectionHelper.js";import"./TileKey.js";import"./vec4f32.js";import"./definitions.js";import{g as U}from"./capabilities2.js";import"./mat2d.js";import{f as R}from"./vec2f32.js";import"./number2.js";import"./Queue.js";import{R as D}from"./RefreshableLayerView.js";import"./mat2df64.js";import"./vec2f64.js";import{w as z}from"./viewpointUtils.js";import{c as L}from"./mat3f32.js";import"./QueueProcessor.js";import{a as k,T as G}from"./TileStrategy.js";import{T as V}from"./TileInfoView.js";import"./Program.js";import"./FramebufferObject.js";import"./mat4f32.js";import"./VertexArrayObject.js";import"./ShaderCompiler.js";import"./config.js";import{D as M}from"./DisplayObject.js";import{T as B}from"./TiledDisplayObject.js";import{c as F,i as O,j as q}from"./rasterUtils.js";import E from"../views/layers/LayerView.js";import"./Container.js";import"./ClipRect.js";import{L as Q}from"./LayerView2D.js";import{b as A}from"./brushes.js";import{W}from"./enums.js";import"./Utils10.js";import"./GeometryUtils2.js";import"./MaterialKey.js";import"./WGLContainer.js";import{a as H}from"./drapedUtils.js";import{T as J}from"./TileContainer.js";import"./popupUtils.js";import{I as N}from"./ImageryTileLayerView.js";const K={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};class X extends M{constructor(e=null,t=null,s=null){super(),this._textureInvalidated=!0,this._memoryUsed=null,this._supportsBilinear=!0,this.stencilRef=0,this.coordScale=[1,1],this._symbolizerParameters=null,this.height=null,this.isRendereredSource=!1,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this.rawPixelData=null,this._suspended=!1,this._bandIds=null,this._interpolation=null,this._transformGrid=null,this.width=null,this.x=0,this.y=0,this.transforms={dvs:L()},this.source=e,this.transformGrid=t,this.interpolation=s}destroy(){const e=this.getTextures();null==e||e.textures.forEach((e=>e.dispose())),this._rasterTexture=null,this._transformGridTexture=null,this._colormapTexture=null}get symbolizerParameters(){return this._symbolizerParameters||K}set symbolizerParameters(e){this._symbolizerParameters=e}get source(){return this._source}set source(e){this._source=e,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._memoryUsed=null)}get suspended(){return this._suspended}set suspended(e){this._suspended&&!e&&this.stage&&(this.ready(),this.requestRender()),this._suspended=e}get bandIds(){return this._bandIds}set bandIds(e){this._bandIds=e,this.invalidateTexture()}get interpolation(){return this._interpolation}set interpolation(e){this._interpolation=e,this._rasterTexture&&this._rasterTexture.setSamplingMode(!this._supportsBilinear||"bilinear"!==e&&"cubic"!==e?9728:9729)}get transformGrid(){return this._transformGrid}set transformGrid(e){this._transformGrid=e,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null,this._memoryUsed=null)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender())}setTransform(e){const t=_(this.transforms.dvs),[s,i]=e.toScreenNoRotation([0,0],this.x,this.y),r=this.resolution/this.pixelRatio/e.resolution,o=r*this.width,a=r*this.height,l=Math.PI*this.rotation/180;f(t,t,R(s,i)),f(t,t,R(o/2,a/2)),j(t,t,-l),f(t,t,R(-o/2,-a/2)),g(t,t,R(o,a)),x(this.transforms.dvs,e.displayViewMat3,t)}getTextures(){if(!this._rasterTexture)return null;const e=[],t=[];return this._transformGridTexture&&(t.push(this._transformGridTexture),e.push("u_transformGrid")),this._rasterTexture&&(t.push(this._rasterTexture),e.push("u_image")),this._colormapTexture&&(t.push(this._colormapTexture),e.push("u_colormap")),{names:e,textures:t}}getMemoryUsage(){if(t(this._memoryUsed)){const e=this.getTextures();if(null==e)return 0;this._memoryUsed=e.textures.map((e=>e.descriptor.width*e.descriptor.height*4)).reduce(((e,t)=>e+t))}return this._memoryUsed}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}updateTexture({context:e}){var t,s,i;if(!this.stage)return null==(t=this._rasterTexture)||t.dispose(),null==(s=this._transformGridTexture)||s.dispose(),null==(i=this._colormapTexture)||i.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._transformGridTexture=null,void(this._colormapTexture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1;const r=this.source,o=r&&r.pixels&&r.pixels.length>0;this._createOrDestroyRasterTexture(e),this._rasterTexture&&(o?(this._updateColormapTexture(e),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=F(e,this.transformGrid))):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender())}_createOrDestroyRasterTexture(e){var t,s;const i=this.source?I(this.source,this.bandIds):null;if(!(i&&i.pixels&&i.pixels.length>0))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null));const r=null==this._rasterTextureBandIds&&null==this.bandIds||this._rasterTextureBandIds&&this.bandIds&&this._rasterTextureBandIds.join("")===this.bandIds.join("");if(this._rasterTexture){if(r)return;this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null}const o=this.interpolation||"nearest",a=this.isRendereredSource||!(null!=(t=e.capabilities.textureFloat)&&t.textureFloat);this._rasterTexture=O(e,i,o,a),this._supportsBilinear=null==(s=e.capabilities.textureFloat)?void 0:s.textureFloatLinear,this._rasterTextureBandIds=this.bandIds}_updateColormapTexture(e){const t=this._colormap,s=this.symbolizerParameters.colormap;return s?t?s.length!==t.length||s.some(((e,s)=>e!==t[s]))?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=q(e,s),void(this._colormap=s)):void 0:(this._colormapTexture=q(e,s),void(this._colormap=s)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}class Y extends B{constructor(e,t,s,i=null){super(e,t,s),this.bitmap=new X(i,null,null),this.bitmap.coordScale=s,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}getMemoryUsage(){return this.bitmap.getMemoryUsage()}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class Z extends J{constructor(){super(...arguments),this.isCustomTilingScheme=!1}createTile(e){const t=this._getTileBounds(e);return new Y(e,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[A.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:W.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===W.MAP&&super.doRender(e)}_getTileBounds(e){const t=this._tileInfoView.getTileBounds(b(),e);if(this.isCustomTilingScheme&&e.world){const{tileInfo:s}=this._tileInfoView,i=z(s.spatialReference);if(i){const{resolution:r}=s.lodAt(e.level),o=i/r%s.size[0],a=o?(s.size[0]-o)*r:0;t[0]-=a*e.world,t[2]-=a*e.world}}return t}}const $=s.getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),ee=[0,0];let te=class extends(N(D(Q(E)))){constructor(){super(...arguments),this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._bitmapView=null,this._emptyTilePixelBlock=null,this._srcResolutions=null,this._previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._globalUpdateRequested=!1,this._isCustomTilingScheme=!1,this.useWebGLForProcessing=!0,this._redrawDebounced=o((e=>this._redrawImage(e)),2e3)}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this._bitmapView.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new k({cachePolicy:"purge",resampling:!1,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.requestUpdate()}}hitTest(e,t){if(this.suspended)return Promise.resolve(null);const s=this.view.toMap(u(e,t));return Promise.resolve(new c({attributes:{},geometry:s}))}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:s,scale:i}=e.state,r=this._tileInfoView.getClosestInfoForScale(i);if(this.layer.raster){var o;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],i=t.toJSON?t:h.fromJSON(t);S(this._blockCacheRegistryUrl,this._blockCacheRegistryId,i,s,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,(null==(o=this._previousLOD)?void 0:o.level)!==r.level&&(this._previousLOD=r,null!=this._symbolizerParams&&this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0))}this.notifyChange("updating")}attach(){this.layer.increaseRasterJobHandlerUsage(),U().supportsTextureFloat||(this.useWebGLForProcessing=!1),this.layer.raster&&(this.layer.raster.ioConfig.allowPartialFill=!0),this._initializeTileInfo(),this._tileInfoView=new V(this.tileInfo,this.fullExtent),this._fetchQueue=new G({tileInfoView:this._tileInfoView,concurrency:10,process:(e,t)=>this.fetchTile(e,t)});const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new k({cachePolicy:"purge",resampling:!1,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:e,tileInfoView:this._tileInfoView}),this._bitmapView=new Z(this._tileInfoView),this._bitmapView.isCustomTilingScheme=this._isCustomTilingScheme,this.container.addChild(this._bitmapView),this.handles.add([y(this,["layer.bandIds","layer.renderer"],(()=>this._redrawDebounced().catch((e=>{a(e)||$.error(e)})))),y(this,["layer.interpolation"],((e,t)=>{"majority"!==e&&"majority"!==t||!this._canUseMajorityInterpolationOnDataSource()?this._redrawDebounced().catch((e=>{a(e)||$.error(e)})):this.refreshDebounced()})),y(this,["layer.multidimensionalDefinition"],this.refreshDebounced)],"attach"),this._updateBlockCacheRegistry()}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,P(this._blockCacheRegistryUrl,this._blockCacheRegistryId)}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){!this.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=l(),0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.requestUpdate()})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return H(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this.layer.updateRenderer(),this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){return this._fetchQueue.length>0||this._globalUpdateRequested}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(ee,t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>{e.destroy(),this.requestUpdate()})),this.requestUpdate()}fetchTile(e,s){const r=!t(s)&&s.signal,o=this._canUseWebGLForProcessing(),a={tileInfo:this.tileInfo,signal:i(r),registryId:this._blockCacheRegistryId,requestRawData:o,srcResolution:this._srcResolutions[e.level],datumTransformation:this.datumTransformation,interpolation:o?"nearest":this.layer.interpolation};return this.layer.fetchTile(e.level,e.row,e.col,a)}_canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&this._canUseMajorityInterpolationOnDataSource())}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.view.spatialReference,t=new m({x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:e}),{scales:s,srcResolutions:i,isCustomTilingScheme:r}=v(this.layer.rasterInfo,e),o=T.create({spatialReference:e,size:512,scales:s});(0===o.origin.x||o.origin.x>t.x)&&(o.origin=t),this._isCustomTilingScheme=r,this._set("tileInfo",o),this._srcResolutions=null!=i?i:[]}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:s}=this.layer;let i=!this.useProgressiveUpdate||this.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.moving&&0===this._fetchQueue.length){i=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(e){a(e)&&$.error(e)}this._globalUpdateRequested=!1}const r=this._canUseWebGLForProcessing();if(r&&!this.hasTilingEffects&&null==this._symbolizerParams&&this._updateSymbolizerParams(),t&&t.pixelBlock){const s={extent:t.extent,pixelBlock:t.pixelBlock};if(e.bitmap.rawPixelData=s,r)e.bitmap.source=t.pixelBlock,e.bitmap.isRendereredSource=!1;else{const t=await this.layer.applyRenderer(s,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null);e.bitmap.source=t,e.bitmap.isRendereredSource=!0}e.bitmap.symbolizerParameters=r?this._globalSymbolizerParams||this._symbolizerParams:null,r?e.bitmap.transformGrid||(e.bitmap.transformGrid=t.transformGrid):e.bitmap.transformGrid=null}else{const t=this._createEmptyTilePixelBlock();e.bitmap.source=t,e.bitmap.symbolizerParameters=r?this._symbolizerParams:null,e.bitmap.transformGrid=null}e.bitmap.bandIds=s,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=i,e.bitmap.invalidateTexture(),e.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(e)}catch(e){a(e)||$.error(e)}this.requestUpdate()}}async _redrawImage(e){this.layer.updateRenderer(),this.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const{bandIds:t}=this.layer,s=this._bitmapView.children.map((async e=>{const s=this._canUseWebGLForProcessing();!s&&e.bitmap.rawPixelData?(e.bitmap.source=await this.layer.applyRenderer(e.bitmap.rawPixelData,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null),e.bitmap.isRendereredSource=!0):(e.bitmap.isRendereredSource&&e.bitmap.rawPixelData&&(e.bitmap.source=e.bitmap.rawPixelData.pixelBlock),e.bitmap.isRendereredSource=!1),e.bitmap.symbolizerParameters=s?this._globalSymbolizerParams||this._symbolizerParams:null,e.bitmap.bandIds=t,e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=!1}));await n(s),this.container.requestRender()}_createEmptyTilePixelBlock(){if(!this._emptyTilePixelBlock){const e=this._tileInfoView.tileInfo.size[0],t=this._tileInfoView.tileInfo.size[1];this._emptyTilePixelBlock=new d({width:e,height:t,pixels:[new Uint8Array(e*t)],mask:new Uint8Array(e*t),pixelType:"u8"})}return this._emptyTilePixelBlock}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this._previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},s=await this.layer.fetchPixels(this.view.extent,this.view.width,this.view.height,t);if(!s||!s.pixelBlock)return;const i=this.layer.symbolizer.generateWebGLParameters({pixelBlock:I(s.pixelBlock,this.layer.bandIds),isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds});!this._canUseWebGLForProcessing()&&i&&"stretch"===i.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(i.factor=i.factor.map((e=>255*e)),i.outMin=Math.round(255*i.outMin),i.outMax=Math.round(255*i.outMax)),this._globalSymbolizerParams=i}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:s,multidimensionalDefinition:i,raster:r}=this.layer,o=null!=s&&s.multidimensionalInfo?r.getSliceIndex(i):null,a=C(t,o);if(a!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&P(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=w(a,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.view.scale),t=this._srcResolutions[e.level];S(a,this._blockCacheRegistryId,this.view.extent,this.view.resolution,t,this.layer.raster.ioConfig.sampling)}this._blockCacheRegistryUrl=a}}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:t,colormap:s,pixelType:i}=this.layer.rasterInfo;return 1===e&&(null!=t||null!=s||"u8"===i||"s8"===i)}_getLayerInterpolation(){const e=this.layer.renderer.type;return"raster-colormap"===e||"unique-value"===e||"class-breaks"===e?"nearest":this.layer.interpolation}};e([r()],te.prototype,"useProgressiveUpdate",null),te=e([p("esri.views.2d.layers.ImageryTileLayerView2D")],te);var se=te;export default se;