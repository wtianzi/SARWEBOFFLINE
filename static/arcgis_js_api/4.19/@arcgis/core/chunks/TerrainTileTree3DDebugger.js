/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"./mathUtils2.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import s from"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import"../Graphic.js";import{init as r}from"../core/watchUtils.js";import{t as p}from"./aaBoundingRect.js";import{T as e}from"./TileTreeDebugger.js";let i=class extends e{constructor(o){super(o),this.enablePolygons=!1}initialize(){r(this,"enabled",(o=>this.view.basemapTerrain.renderPatchBorders=o))}getTiles(){return this.view.basemapTerrain.test.getRenderedTiles().map((o=>({...o,geometry:s.fromExtent(p(o.extent,this.view.basemapTerrain.spatialReference))})))}};i=o([t("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],i);export{i as TerrainTileTree3DDebugger};
