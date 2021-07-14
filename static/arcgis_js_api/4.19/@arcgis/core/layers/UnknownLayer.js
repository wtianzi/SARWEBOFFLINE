/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import{schedule as t}from"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import s from"../core/Error.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../chunks/Identifiable.js";import i from"./Layer.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as p}from"../chunks/MultiOriginJSONSupport.js";import{P as m}from"../chunks/PortalLayer.js";let n=class extends(m(p(i))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{t((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let t="Unknown layer type";r&&(t+=" "+r),o(new s("layer:unknown-layer-type",t,{layerType:r}))}))})))}read(r,o){super.read({resourceInfo:r},o)}write(){return null}};r([o({readOnly:!0})],n.prototype,"resourceInfo",void 0),r([o({type:["show","hide"]})],n.prototype,"listMode",void 0),r([o({json:{read:!1},readOnly:!0,value:"unknown"})],n.prototype,"type",void 0),n=r([e("esri.layers.UnknownLayer")],n);var a=n;export default a;
