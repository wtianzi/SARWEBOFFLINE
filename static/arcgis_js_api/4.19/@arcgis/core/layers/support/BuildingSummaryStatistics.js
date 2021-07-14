/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{L as r,i as e}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{a as i}from"../../chunks/JSONSupport.js";import{a as l}from"../../chunks/Promise.js";import{L as p}from"../../chunks/Loadable.js";import"../../core/urlUtils.js";import"../../chunks/resourceExtension.js";import n from"../../request.js";const a=r.getLogger("esri.layers.support.BuildingSummaryStatistics");let u=class extends i{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};s([t({type:String})],u.prototype,"fieldName",void 0),s([t({type:String})],u.prototype,"modelName",void 0),s([t({type:String})],u.prototype,"label",void 0),s([t({type:Number})],u.prototype,"min",void 0),s([t({type:Number})],u.prototype,"max",void 0),s([t({json:{read:s=>Array.isArray(s)&&(s.every((s=>"string"==typeof s))||s.every((s=>"number"==typeof s)))?s.slice():null}})],u.prototype,"mostFrequentValues",void 0),s([t({type:[Number]})],u.prototype,"subLayerIds",void 0),u=s([o("esri.layers.support.BuildingFieldStatistics")],u);let m=class extends(p.LoadableMixin(l(i))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(a.error("building summary statistics are not loaded"),null)}load(s){const r=e(s)?s.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(s){const r=(await n(this.url,{query:{f:"json"},responseType:"json",signal:s})).data;this.read(r,{origin:"service"})}};s([t({constructOnly:!0,type:String})],m.prototype,"url",void 0),s([t({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=s([o("esri.layers.support.BuildingSummaryStatistics")],m);var c=m;export default c;
