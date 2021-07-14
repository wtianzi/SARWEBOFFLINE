/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"./asyncUtils.js";import"./loadAll.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./shared.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../Basemap.js";import"./writeUtils.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./mathUtils.js";import"../Camera.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import"../Graphic.js";import"../Ground.js";import"../core/Handles.js";import"./CollectionFlattener.js";import"./basemapUtils.js";import"../Map.js";import"../layers/Layer.js";import"./TablesMixin.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"./colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"./sizeVariableUtils.js";import"./unitUtils.js";import"./lengthUtils.js";import"./visualVariableUtils.js";import"./VisualVariablesMixin.js";import"./symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"./colorUtils2.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./devEnvironmentUtils.js";import"./styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"./normalizeUtilsCommon.js";import"../geometry/support/normalizeUtils.js";import"./MemCache.js";import"./ItemCache.js";import"./utils3.js";import"../symbols/support/cimSymbolUtils.js";import"./utils2.js";import"./LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"./timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import"../Viewpoint.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"./MultiOriginJSONSupport.js";import"../core/watchUtils.js";import"./arcgisLayerUrl.js";import"../tasks/support/ProjectParameters.js";import"./fieldType.js";import"./Version.js";import"../geometry/HeightModelInfo.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"./heightModelInfoUtils.js";import"./spatialReferenceSupport.js";import"../webscene/Lighting.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"../webscene/Environment.js";import"./OperationalLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./commonProperties2.js";import"./Scheduler.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"../form/ExpressionInfo.js";import"../form/elements/FieldElement.js";import"../form/support/elements.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/support/inputs.js";import"../form/elements/GroupElement.js";import"../form/FormTemplate.js";import"./vec4f64.js";import"./screenshotUtils.js";import"../geometry/support/MeshTexture.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"../geometry/support/MeshComponent.js";import"./earcut.js";import"./deduplicate.js";import"./triangulationUtils.js";import"./quatf64.js";import"./mat3.js";import"./BufferView.js";import"./vec2.js";import"./vec4.js";import"./projection.js";import"./vec32.js";import"./quat.js";import"./domUtils.js";import"./widgetUtils.js";import"./projector.js";import"./accessibleHandler.js";import"./messageBundle.js";import"../widgets/support/widget.js";import"./vmEvent.js";import"./index.js";import"../widgets/Widget.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./zscale.js";import"./queryZScale.js";import"../layers/support/Field.js";import"../tasks/support/FeatureSet.js";import"../layers/FeatureLayer.js";import"./ArcGISService.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./PortalLayer.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"../layers/support/TimeInfo.js";import"./TemporalLayer.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"./labelUtils.js";import"../layers/support/LabelClass.js";import"./defaultsJSON.js";import"./defaults.js";import"./featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./DataLayerSource.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"../tasks/support/AttachmentQuery.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../tasks/support/RelationshipQuery.js";import"./serviceTileInfoProperty.js";import"./TilemapCache.js";import"./ArcGISCachedService.js";import"./WorkerHandle.js";import"../layers/ElevationLayer.js";import"./GraphicsCollection.js";import"./utils4.js";import"../tasks/Task.js";import"../rest/query/support/AttachmentInfo.js";import"./query.js";import"./executeRelationshipQuery.js";import"./pbf.js";import"./OptimizedFeatureSet.js";import"./pbfQueryUtils.js";import"./featureConversionUtils.js";import"../tasks/QueryTask.js";import"./aaBoundingBox.js";import"./scaleUtils.js";import"./SublayersOwner.js";import"../layers/support/Sublayer.js";import"./sublayerUtils.js";import"./ExportImageParameters.js";import"../layers/TileLayer.js";import"../layers/VectorTileLayer.js";import"./TileKey.js";import"./TileIndex.js";import"./jsonContext.js";import"./vec4f32.js";import"./StyleRepository.js";import"./unitBezier.js";import"./definitions.js";import"./capabilities2.js";import"../layers/support/ElevationSampler.js";import"./layerUtils.js";import"./quantizationUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2f32.js";import"../symbols/support/symbolUtils.js";import"../views/BasemapView.js";import"./byteSizeEstimations.js";import"./dehydratedFeatures.js";import"./ElevationProvider.js";import"./TerrainConst.js";import"../views/GroundView.js";import"../views/Magnifier.js";import"./WebGLRequirements.js";import"./interactiveToolUtils.js";import"./throttle.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../widgets/Feature/FeatureViewModel.js";import"../widgets/Feature.js";import"./AnchorElementViewModel.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../widgets/Popup.js";import"./Queue.js";import"./InputManager.js";import"./layerViewUtils.js";import"./actions.js";import"../widgets/Popup/PopupViewModel.js";import"./GoTo.js";import"./MapUtils.js";import"../views/View.js";import"./RefreshableLayerView.js";import"./screenUtils2.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/Input.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../views/navigation/Navigation.js";import"../views/ViewAnimation.js";import"./mat2df64.js";import"./vec2f64.js";import"./viewpointUtils.js";import"./mat3f32.js";import"../views/2d/ViewState.js";import"../views/ui/UI.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Attribution.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/Compass.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";import"../views/ui/DefaultUI.js";import"../views/SceneView.js";import"./requestImageUtils.js";import"./VertexColor.glsl.js";import"./Program.js";import"./FramebufferObject.js";import"./renderState.js";import"./glUtil.js";import"./InterleavedLayout.js";import"./mat4f32.js";import"./vec3f32.js";import"./stack.js";import"./geometryUtils.js";import"./ColorMaterial.js";import"./Util.js";import"./glUtil3D.js";import"./Object3D.js";import"./VertexArrayObject.js";import"./sdfPrimitives.js";import"./lineUtils.js";import"./intersectorUtils.js";import"./Intersector.js";import"./Camera.js";import"./resources.js";import"./PropertiesPool.js";import"./PiUtils.glsl.js";import"./GLMaterialTexture.js";import"./VerticalOffset.glsl.js";import"./labelFormatUtils.js";import"./RibbonLineMaterial.js";import"./pointUtils.js";import"./RenderingContext.js";import"./PhysicallyBasedRendering.glsl.js";import"./testSVGPremultipliedAlpha.js";import"./vec42.js";import"./callExpressionWithFeature.js";import"./RenderGeometry.js";import"./Texture.js";import"./NativeLineMaterial.js";import"./symbolLayerUtils3D.js";import"./objectResourceUtils.js";import"./geometryServiceUtils.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"./terrainUtils.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./config.js";import"./VectorTile.js";import"./DisplayObject.js";import"./TiledDisplayObject.js";import"./rasterUtils.js";import"./ElevationQueryTileCache.js";import"../views/layers/LayerView.js";import"./tileUtils.js";import"./quatf32.js";import"./CameraSpace.glsl.js";import"./EdgeProcessingWorker.js";import"./hitTestSelectUtils.js";import{a as o}from"./drapedUtils.js";import"./ImageMaterial.js";import"./popupUtils.js";import{M as s}from"./MapImageLayerView.js";import{D as e}from"./DynamicLayerView3D.js";import"./projectExtentUtils.js";let i=class extends(s(e)){constructor(){super(...arguments),this.updateWhenStationary=!0}initialize(){this.updatingHandles.add(this,"exportImageVersion",(()=>this.updatingHandles.addPromise(this.refreshDebounced())))}createFetchPopupFeaturesQueryGeometry(t,r){return o(t,r,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp}}};i=t([r("esri.views.3d.layers.MapImageLayerView3D")],i);var p=i;export default p;
