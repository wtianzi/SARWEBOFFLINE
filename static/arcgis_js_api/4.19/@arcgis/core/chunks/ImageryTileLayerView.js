/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../core/lang.js";import{i as t}from"./Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import i from"../core/Error.js";import"./ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import s from"../Graphic.js";import{d as a,b as n}from"./rasterProjectionHelper.js";import{g as l}from"./popupUtils.js";const u=u=>{let p=class extends u{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,r){const{layer:o}=this;if(!e)return Promise.reject(new i("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));const{popupEnabled:a}=o,n=l(o,r);if(!a||!t(n))throw new i("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const u=[],{value:p}=await o.identify(e);if(p){var f,m;const e=p.join(", "),t={ObjectId:0},r="Raster.ServicePixelValue";t[r]=this._formatAttributeValue(e,r);const i=null==(f=o.rasterInfo)||null==(m=f.attributeTable)?void 0:m.features;if(i&&i.length>0){const r=i.filter((t=>{const r=t.attributes.value||t.attributes.Value||t.attributes.VALUE;return String(r)===e}));if(r.length>0){const e=r[0];if(e)for(const r in e.attributes)if(e.attributes.hasOwnProperty(r)){const i=this._rasterFieldPrefix+r;t[i]=this._formatAttributeValue(e.attributes[r],i)}}}const a=new s(this.fullExtent.clone(),null,t);a.layer=o,a.sourceLayer=a.layer,u.push(a)}return u}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new i("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const r=a(this.layer.fullExtent,this.view.spatialReference,!1),o=n(this.layer.fullExtent,this.view.spatialReference,r);return null==o&&(t=new i("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",o),this.datumTransformation||(this.datumTransformation=a(this.layer.fullExtent,this.view.spatialReference,!0)),t?Promise.reject(t):Promise.resolve()}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=e,!0))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return e([r()],p.prototype,"layer",void 0),e([r()],p.prototype,"view",void 0),e([r()],p.prototype,"fullExtent",void 0),e([r()],p.prototype,"tileInfo",void 0),e([r({readOnly:!0})],p.prototype,"hasTilingEffects",null),p=e([o("esri.views.layers.ImageryTileLayerView")],p),p};export{u as I};