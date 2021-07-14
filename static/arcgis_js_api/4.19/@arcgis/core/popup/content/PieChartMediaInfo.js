/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../chunks/jsonMap.js";import"../../chunks/resourceExtension.js";import"../../chunks/MediaInfo.js";import"./support/ChartMediaInfoValueSeries.js";import"./support/ChartMediaInfoValue.js";import{C as o,c as e}from"../../chunks/chartMediaInfoUtils.js";var i;let p=i=class extends o{constructor(r){super(r),this.type="pie-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};r([s({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:e.write}})],p.prototype,"type",void 0),p=i=r([t("esri.popup.content.PieChartMediaInfo")],p);var c=p;export default c;
