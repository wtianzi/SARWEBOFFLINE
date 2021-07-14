/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import"../../../chunks/ArrayPool.js";import"../../../core/lang.js";import"../../../chunks/deprecate.js";import"../../../chunks/object.js";import"../../../kernel.js";import"../../../config.js";import{i as s}from"../../../chunks/Logger.js";import"../../../chunks/string.js";import"../../../chunks/metadata.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/Accessor.js";import"../../../chunks/PropertyOrigin.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../chunks/Message.js";import"../../../core/Error.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/Evented.js";import"../../../core/Collection.js";import"../../../chunks/collectionUtils.js";import"../../../chunks/JSONSupport.js";import"../../../chunks/Promise.js";import"../../../chunks/Loadable.js";import"../../../core/urlUtils.js";import"../../../core/accessorSupport/decorators/aliasOf.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../chunks/jsonMap.js";import"../../../chunks/enumeration.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../chunks/resourceExtension.js";import"../../../chunks/persistableUrlUtils.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/locale.js";import"../../../chunks/number.js";import"../../../intl.js";import"../../../request.js";import"../../../chunks/assets.js";import"../../../geometry/Geometry.js";import"../../../geometry/Point.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Extent.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalUser.js";import"../../../portal/Portal.js";import"../../../chunks/mathUtils2.js";import"../../../chunks/colorUtils.js";import"../../../Color.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Multipoint.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../geometry.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/domains.js";import"../../../chunks/arcadeOnDemand.js";import"../../../layers/support/fieldUtils.js";import"../../../popup/content/Content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/CustomContent.js";import"../../../chunks/date.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../popup/FieldInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../chunks/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/TextContent.js";import"../../../popup/content.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../chunks/Identifiable.js";import"../../../support/actions/ActionBase.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../PopupTemplate.js";import"../../../symbols/Symbol.js";import"../../../symbols/CIMSymbol.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/screenUtils.js";import"../../../chunks/opacityUtils.js";import"../../../chunks/materialUtils.js";import"../../../symbols/edges/Edges3D.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/utils.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../chunks/colors.js";import"../../../chunks/Symbol3DOutline.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/Thumbnail.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../chunks/Symbol3DVerticalOffset.js";import"../../../symbols/LabelSymbol3D.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureFillSymbol.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../symbols.js";import"../../../chunks/uid.js";import"../../../Graphic.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../renderers/visualVariables/SizeVariable.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../chunks/numberUtils.js";import"../../../chunks/utils7.js";import"../../Slider/SliderViewModel.js";import"../support/utils.js";import"../SmartMappingSliderViewModel.js";import p from"../SmartMappingPrimaryHandleSliderViewModel.js";let i=class extends p{constructor(o){super(o)}set stops(o){if(o&&o.length){const t=o.map((o=>o.value)),{max:r,min:p}=this,i={};s(p)&&t.some((o=>o<p))&&(i.min=Math.min(...t)),s(r)&&t.some((o=>o>r))&&(i.max=Math.max(...t)),this.set({...i})}this._set("stops",o)}getStopInfo(){const{min:o,max:s,stops:t}=this;return t&&t.length?t.map((t=>({color:t.color,offset:(s-t.value)/(s-o)}))):[]}};o([t()],i.prototype,"stops",null),i=o([r("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],i);var e=i;export default e;
