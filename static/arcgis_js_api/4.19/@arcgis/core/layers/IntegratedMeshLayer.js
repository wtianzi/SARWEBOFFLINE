/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import{g as o,i as e,b as r}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{throwIfAbortError as i}from"../core/promiseUtils.js";import"../chunks/Message.js";import n from"../core/Error.js";import"../chunks/ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../chunks/asyncUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import{r as a}from"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/resourceExtension.js";import{f as m}from"../chunks/persistableUrlUtils.js";import{p as c}from"../chunks/persistable.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/vec3.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"./support/fieldUtils.js";import"../chunks/Identifiable.js";import"../chunks/opacityUtils.js";import l from"../core/Handles.js";import u from"./Layer.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as h}from"../chunks/MultiOriginJSONSupport.js";import{on as d}from"../core/watchUtils.js";import"../chunks/originUtils.js";import"../chunks/arcgisLayerUrl.js";import"../geometry/HeightModelInfo.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../chunks/resourceUtils.js";import"../chunks/saveUtils.js";import{O as y}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import{e as j}from"../chunks/commonProperties2.js";import{A as f}from"../chunks/ArcGISService.js";import{P as g}from"../chunks/PortalLayer.js";import{S as k}from"../chunks/ScaleRangeLayer.js";import"../chunks/I3SIndexInfo.js";import{I as v,a as S,b as U,c as w}from"../chunks/I3SLayerDefinitions.js";import{S as P}from"../chunks/SceneService.js";import"./support/SceneModification.js";import I from"./support/SceneModifications.js";let O=class extends(P(f(y(g(k(h(u))))))){constructor(...t){super(...t),this.handles=new l,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(d(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(t,o){return"string"==typeof t?{url:t,...o}:t}readModifications(t,o,e){this._modificationsSource={url:m(t,e),context:e}}async load(t){return this.addResolvingPromise(this._doLoad(t)),this}async _doLoad(t){const r=o(t,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},t)}catch(t){i(t)}if(await this._fetchService(r),e(this._modificationsSource)){const o=await I.fromUrl(this._modificationsSource.url,this.spatialReference,t);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,r)}beforeSave(){if(!r(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(t,o){return this._debouncedSaveOperations(1,{...o,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},t)}async save(){const t={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,t)}validateLayer(t){if(t.layerType&&"IntegratedMesh"!==t.layerType)throw new n("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([s({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),t([s({type:["show","hide"]})],O.prototype,"listMode",void 0),t([s({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),t([s({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),t([s({type:v,readOnly:!0})],O.prototype,"nodePages",void 0),t([s({type:[S],readOnly:!0})],O.prototype,"materialDefinitions",void 0),t([s({type:[U],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),t([s({type:[w],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),t([s({type:I}),c({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),t([a(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),t([s(j)],O.prototype,"elevationInfo",void 0),t([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=t([p("esri.layers.IntegratedMeshLayer")],O);var T=O;export default T;
