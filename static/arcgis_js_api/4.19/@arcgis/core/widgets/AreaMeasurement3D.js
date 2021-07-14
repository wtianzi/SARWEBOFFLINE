/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{ignoreAbortErrors as e}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/compilerUtils.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../chunks/asyncUtils.js";import"../core/urlUtils.js";import{aliasOf as o}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/shared.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/vec3.js";import"../chunks/mathUtils.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"../chunks/uid.js";import"../Graphic.js";import"../core/Handles.js";import"../layers/Layer.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"../chunks/colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/sizeVariableUtils.js";import{v as i}from"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/VisualVariablesMixin.js";import"../chunks/symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/normalizeUtilsCommon.js";import"../geometry/support/normalizeUtils.js";import"../chunks/MemCache.js";import"../chunks/ItemCache.js";import"../chunks/utils3.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils2.js";import"../chunks/LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/watchUtils.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/fieldType.js";import"../geometry/HeightModelInfo.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/commonProperties2.js";import"../chunks/Scheduler.js";import"../core/HandleOwner.js";import"../chunks/_commonjsHelpers.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"../form/ExpressionInfo.js";import"../form/elements/FieldElement.js";import"../form/support/elements.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/support/inputs.js";import"../form/elements/GroupElement.js";import"../form/FormTemplate.js";import"../geometry/support/geodesicUtils.js";import"../chunks/geometryEngineBase.js";import"../chunks/hydrated.js";import"../geometry/geometryEngine.js";import"../chunks/vec4f64.js";import"../chunks/earcut.js";import"../chunks/deduplicate.js";import"../chunks/triangulationUtils.js";import"../chunks/quatf64.js";import"../chunks/mat3.js";import"../chunks/BufferView.js";import"../chunks/vec2.js";import"../chunks/vec4.js";import"../chunks/quat.js";import"../chunks/domUtils.js";import"../chunks/widgetUtils.js";import"../chunks/projector.js";import"../chunks/quantityFormatUtils.js";import{a as p}from"../chunks/accessibleHandler.js";import{m}from"../chunks/messageBundle.js";import"./support/widget.js";import"../chunks/vmEvent.js";import{j as n}from"../chunks/index.js";import a from"./Widget.js";import"../chunks/zscale.js";import"../chunks/queryZScale.js";import"../layers/support/Field.js";import"../tasks/support/FeatureSet.js";import"../layers/FeatureLayer.js";import"../chunks/ArcGISService.js";import"../chunks/BlendLayer.js";import"../chunks/CustomParametersMixin.js";import"../chunks/PortalLayer.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../layers/support/TimeInfo.js";import"../chunks/TemporalLayer.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../chunks/labelUtils.js";import"../layers/support/LabelClass.js";import"../chunks/defaultsJSON.js";import"../chunks/defaults.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/DataLayerSource.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../tasks/support/AttachmentQuery.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../tasks/support/RelationshipQuery.js";import"../chunks/utils4.js";import"../tasks/Task.js";import"../rest/query/support/AttachmentInfo.js";import"../chunks/query.js";import"../chunks/executeRelationshipQuery.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/pbfQueryUtils.js";import"../chunks/featureConversionUtils.js";import"../tasks/QueryTask.js";import"../chunks/aaBoundingBox.js";import"../chunks/vec4f32.js";import"../chunks/quantizationUtils.js";import"../symbols/support/symbolUtils.js";import"../chunks/byteSizeEstimations.js";import"../chunks/dehydratedFeatures.js";import"../chunks/ElevationProvider.js";import"../chunks/interactiveToolUtils.js";import"../chunks/throttle.js";import"./Attachments.js";import"./Attachments/AttachmentsViewModel.js";import"./Feature/FeatureViewModel.js";import"./Feature.js";import"../chunks/AnchorElementViewModel.js";import"./Spinner/SpinnerViewModel.js";import"./Popup.js";import"../chunks/Queue.js";import"../chunks/InputManager.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"./Popup/PopupViewModel.js";import"../chunks/GoTo.js";import"../chunks/MapUtils.js";import"../chunks/screenUtils2.js";import"../chunks/vec2f64.js";import"../chunks/VertexColor.glsl.js";import"../chunks/Program.js";import"../chunks/FramebufferObject.js";import"../chunks/renderState.js";import"../chunks/glUtil.js";import"../chunks/InterleavedLayout.js";import"../chunks/mat4f32.js";import"../chunks/vec3f32.js";import"../chunks/stack.js";import"../chunks/geometryUtils.js";import"../chunks/ColorMaterial.js";import"../chunks/Util.js";import"../chunks/glUtil3D.js";import"../chunks/Object3D.js";import"../chunks/VertexArrayObject.js";import"../chunks/lineUtils.js";import"../chunks/intersectorUtils.js";import"../chunks/Intersector.js";import"../chunks/Camera.js";import"../chunks/PiUtils.glsl.js";import"../chunks/RibbonLineMaterial.js";import"../chunks/PhysicallyBasedRendering.glsl.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/elevationInfoUtils.js";import"../chunks/AppendVertex.js";import l from"./AreaMeasurement3D/AreaMeasurement3DViewModel.js";import"../chunks/InteractiveToolBase.js";import"../chunks/VisualElement.js";import"../chunks/LaserlineVisualElement.js";import"../chunks/Object3DVisualElement.js";import"../chunks/commonProperties4.js";import"../chunks/InteractiveToolViewModel.js";import"../chunks/dragEventPipeline3D.js";import"../chunks/manipulatorUtils.js";import"../chunks/viewUtils.js";import"../chunks/LineVisualElement.js";import"../chunks/UnitNormalizer.js";const u="esri-area-measurement-3d",c={buttonDisabled:"esri-button--disabled",base:`${u} esri-widget esri-widget--panel`,container:`${u}__container`,hint:`${u}__hint`,hintText:`${u}__hint-text`,panelError:`${u}__panel--error`,measurement:`${u}__measurement`,measurementItem:`${u}__measurement-item`,measurementItemDisabled:`${u}__measurement-item--disabled`,measurementItemTitle:`${u}__measurement-item-title`,measurementItemValue:`${u}__measurement-item-value`,settings:`${u}__settings`,units:`${u}__units`,unitsLabel:`${u}__units-label`,unitsSelect:`${u}__units-select esri-select`,unitsSelectWrapper:`${u}__units-select-wrapper`,actionSection:`${u}__actions`,newMeasurementButton:`${u}__clear-button esri-button esri-button--primary`,widgetIcon:"esri-icon-measure-area"};let j=class extends a{constructor(s,t){super(s,t),this.view=null,this.visible=null,this.iconClass=c.widgetIcon,this.label=void 0,this.messages=null,this.messagesUnits=null,this.viewModel=new l,this.unitOptions=null,this.unit=null}render(){const{isSupported:s,active:t,measurement:e,state:r,unit:o}=this.viewModel,p="disabled"===r,m="ready"===r,a="measuring"===r||"measured"===r,{messages:l,messagesUnits:u}=this,j=t&&m?n("section",{key:"esri-area-measurement-3d__hint",class:c.hint},n("p",{class:c.hintText},l.hint)):null,h=s?null:n("section",{key:"esri-area-measurement-3d__unsupported",class:c.panelError},n("p",null,l.unsupported)),k=(s,t,e)=>{switch(t.state){case"available":return n("div",{key:`${e}-enabled`,class:c.measurementItem},n("span",{class:c.measurementItemTitle},s),n("span",{class:c.measurementItemValue},t.text));case"unavailable":return n("div",{key:`${e}-disabled`,class:this.classes(c.measurementItem,c.measurementItemDisabled)},n("span",{class:c.measurementItemTitle},s));case"invalid":return n("div",{key:`${e}-enabled`,class:c.measurementItem},n("span",{class:c.measurementItemTitle},s),n("span",{class:c.measurementItemValue},l.notApplicable))}},d=a?n("section",{key:"esri-area-measurement-3d__measurement",class:c.measurement},k(l.area,e.area,"area"),k(l.perimeterLength,e.perimeterLength,"perimeter-length")):null,y=`${this.id}__units`,b=n("label",{class:c.unitsLabel,for:y},l.unit),g=n("div",{class:c.unitsSelectWrapper},n("select",{class:c.unitsSelect,id:y,onchange:this._changeUnit,bind:this,value:o},this.viewModel.unitOptions.map((s=>{var t;return n("option",{key:s,value:s},i(s)?u.systems[s]:null==(t=u.units[s])?void 0:t.pluralCapitalized)})))),f=a?n("section",{key:"esri-area-measurement-3d__units",class:c.units},b,g):null,v=a?n("div",{key:"settings",class:c.settings},f):null,S=!s||t&&!a?null:n("div",{class:c.actionSection},n("button",{disabled:p,class:this.classes(c.newMeasurementButton,p&&c.buttonDisabled),bind:this,onclick:this._newMeasurement,type:"button"},l.newMeasurement)),U=this.visible?n("div",{class:c.container},h,j,v,d,S):null;return n("div",{key:this,class:c.base,role:"presentation"},U)}_newMeasurement(){e(this.viewModel.start())}_changeUnit(s){const t=s.target,e=t.options[t.selectedIndex];e&&(this.unit=e.value)}};s([o("viewModel.view")],j.prototype,"view",void 0),s([o("viewModel.visible")],j.prototype,"visible",void 0),s([o("viewModel.active")],j.prototype,"active",void 0),s([t()],j.prototype,"iconClass",void 0),s([t({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],j.prototype,"label",void 0),s([t(),m("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")],j.prototype,"messages",void 0),s([t(),m("esri/core/t9n/Units")],j.prototype,"messagesUnits",void 0),s([t({type:l})],j.prototype,"viewModel",void 0),s([o("viewModel.unitOptions")],j.prototype,"unitOptions",void 0),s([o("viewModel.unit")],j.prototype,"unit",void 0),s([p()],j.prototype,"_newMeasurement",null),s([p()],j.prototype,"_changeUnit",null),j=s([r("esri.widgets.AreaMeasurement3D")],j);var h=j;export default h;
