/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import{version as i}from"../kernel.js";import"../config.js";import{i as s,b as e}from"./Logger.js";import"./string.js";import"./metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import p from"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import{queryToObject as a,objectToQuery as l}from"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import m from"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import n from"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import{canProject as j,project as y}from"../geometry/support/webMercatorUtils.js";import u from"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import"../Graphic.js";import h from"../core/Handles.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"./colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"./sizeVariableUtils.js";import"./unitUtils.js";import"./lengthUtils.js";import"./visualVariableUtils.js";import"./VisualVariablesMixin.js";import"./symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./devEnvironmentUtils.js";import"./styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"./normalizeUtilsCommon.js";import"../geometry/support/normalizeUtils.js";import"./MemCache.js";import"./utils3.js";import"./LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"./timeUtils.js";import"../TimeExtent.js";import"../core/watchUtils.js";import"./fieldType.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import{load as c,project as d}from"../geometry/projection.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./mat3.js";import"./vec2.js";import"../layers/support/Field.js";import"../tasks/support/FeatureSet.js";import"./defaultsJSON.js";import"./defaults.js";import"../layers/support/FieldsIndex.js";import"./DataLayerSource.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import{a as b}from"./GraphicsCollection.js";import{p as g}from"./utils4.js";import"./OptimizedFeatureSet.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import{g as f,f as V,p as S}from"./kmlUtils.js";import"./TileKey.js";import"./vec4f32.js";import"./definitions.js";import"./capabilities2.js";import"./quantizationUtils.js";import"./BidiText.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2f32.js";import"./number2.js";import"./Rect.js";import"./BidiEngine.js";import"./MD5.js";import"./clusterUtils2.js";import"./Queue.js";import"./vec2f64.js";import"./mat3f32.js";import"./QueueProcessor.js";import"./TileStrategy.js";import"./TileInfoView.js";import"./Program.js";import"./FramebufferObject.js";import"./mat4f32.js";import"./VertexArrayObject.js";import"./ShaderCompiler.js";import"./callExpressionWithFeature.js";import"./config.js";import"./DisplayObject.js";import"./TiledDisplayObject.js";import"./rasterUtils.js";import w from"../views/layers/LayerView.js";import"./Container.js";import"./ClipRect.js";import{L as _}from"./LayerView2D.js";import{B as v}from"./Bitmap.js";import"./brushes.js";import"./visualVariablesUtils.js";import"./enums.js";import"./Utils10.js";import"./GeometryUtils2.js";import"./MaterialKey.js";import"./WGLContainer.js";import{B as C}from"./BitmapContainer.js";import"./normalizeUtilsSync.js";import"./json.js";import"./projectionSupport.js";import"./TurboLine.js";import"./util2.js";import"./centroid.js";import"./FeatureSetReader.js";import"./quickselect.js";import"./TileStore.js";import"./visualVariablesUtils2.js";import"./TileClipper.js";import"./CIMSymbolHelper.js";import"./cimAnalyzer.js";import"./WGLMeshFactory.js";import{G as I}from"./BaseGraphicContainer.js";import"./FeatureContainer.js";import"./tileUtils2.js";import"./schemaUtils.js";import"./GraphicsView.js";import"./TileContainer.js";import{G as U}from"./GraphicContainer.js";class P{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let D=class extends(_(w)){constructor(){super(...arguments),this._handles=new h,this._bitmapIndex=new Map,this._mapImageContainer=new C,this._kmlVisualData=new P,this.allVisiblePoints=new b,this.allVisiblePolylines=new b,this.allVisiblePolygons=new b,this.allVisibleMapImages=new p}hitTest(t,i){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);const s=[this._pointsView.hitTest(t,i),this._polylinesView.hitTest(t,i),this._polygonsView.hitTest(t,i)];return Promise.all(s).then((t=>t.filter((t=>(t&&(t.layer=this.layer,t.sourceLayer=this.layer),!!t)))[0]||null))}update(t){this._polygonsView&&this._polygonsView.processUpdate(t),this._polylinesView&&this._polylinesView.processUpdate(t),this._pointsView&&this._pointsView.processUpdate(t)}attach(){this._handles.add([this.allVisibleMapImages.on("change",(t=>{t.added.forEach((t=>this._addMapImage(t))),t.removed.forEach((t=>this._removeMapImage(t)))}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new I({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new I({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new I({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(t=>{for(const[t,i]of this._kmlVisualData.allSublayers)i.visibility=0;for(const i of t){const t=this._kmlVisualData.allSublayers.get(i.id);t&&(t.visibility=1)}this._refreshCollections()})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating")}))}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(t){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&n(t.href,{responseType:"image"}).then((({data:i})=>{let s=u.fromJSON(t.extent);j(s,this.view.spatialReference)&&(s=y(s,this.view.spatialReference));const e=new v(i,"standard");e.x=s.xmin,e.y=s.ymax,e.resolution=s.width/i.naturalWidth,e.rotation=t.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(t,e)}))}async _getViewDependentUrl(t,o){const{viewFormat:r,viewBoundScale:p,httpQuery:n}=t;if(s(r)){if(e(o))throw new Error("Loading this network link requires a view state.");let j;if(await c(),s(p)&&1!==p){const t=new u(o.extent);t.expand(p),j=t}else j=o.extent;j=d(j,m.WGS84);const y=d(j,m.WebMercator),h=j.xmin,b=j.xmax,f=j.ymin,V=j.ymax,S=o.size[0]*o.pixelRatio,w=o.size[1]*o.pixelRatio,_=Math.max(y.width,y.height),v={"[bboxWest]":h.toString(),"[bboxEast]":b.toString(),"[bboxSouth]":f.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":j.center.x.toString(),"[lookatLat]":j.center.y.toString(),"[lookatRange]":_.toString(),"[lookatTilt]":"0","[lookatHeading]":o.rotation.toString(),"[lookatTerrainLon]":j.center.x.toString(),"[lookatTerrainLat]":j.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":j.center.x.toString(),"[cameraLat]":j.center.y.toString(),"[cameraAlt]":_.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":S.toString(),"[vertPixels]":w.toString(),"[terrainEnabled]":"0","[clientVersion]":i,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},C=t=>{for(const i in t)for(const s in v)t[i]=t[i].replace(s,v[s])},I=a(r);C(I);let U={};s(n)&&(U=a(n),C(U));const P=g(t.href);P.query={...P.query,...I,...U};return`${P.path}?${l(I)}`}return t.href}async _fetchService(){const t=new P;await this._loadVisualData(this.layer.url,t),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((t=>this._isSublayerVisible(t.sublayerId))).map((({item:t})=>t)))}_isSublayerVisible(t){const i=this._kmlVisualData.allSublayers.get(t);return!!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(t,i){return this._fetchParsedKML(t).then((async t=>{for(const s of t.sublayers){i.allSublayers.set(s.id,s);const t=s.points?await f(s.points):[],e=s.polylines?await f(s.polylines):[],o=s.polygons?await f(s.polygons):[],r=s.mapImages||[];if(i.allPoints.push(...t.map((t=>({item:t,sublayerId:s.id})))),i.allPolylines.push(...e.map((t=>({item:t,sublayerId:s.id})))),i.allPolygons.push(...o.map((t=>({item:t,sublayerId:s.id})))),i.allMapImages.push(...r.map((t=>({item:t,sublayerId:s.id})))),s.networkLink){const t=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(t,i)}}}))}_fetchParsedKML(t){return V(t,this.view.spatialReference,this.layer.refreshInterval).then((t=>S(t.data)))}_removeMapImage(t){const i=this._bitmapIndex.get(t);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(t))}};t([o()],D.prototype,"_pointsView",void 0),t([o()],D.prototype,"_polylinesView",void 0),t([o()],D.prototype,"_polygonsView",void 0),t([o()],D.prototype,"_fetchingPromise",void 0),t([o()],D.prototype,"updating",void 0),D=t([r("esri.views.2d.layers.KMLLayerView2D")],D);var M=D;export default M;