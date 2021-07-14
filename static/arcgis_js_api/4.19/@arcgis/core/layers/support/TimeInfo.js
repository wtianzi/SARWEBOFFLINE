/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import{clone as t}from"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{a as n}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/jsonMap.js";import{r as s}from"../../chunks/reader.js";import{w as l}from"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import{a as o}from"../../chunks/timeUtils.js";import a from"../../TimeExtent.js";import p from"../../TimeInterval.js";var m;let u=m=class extends n{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new m({respectsDaylightSaving:e,timezone:t})}};e([r({type:Boolean,json:{write:!0}})],u.prototype,"respectsDaylightSaving",void 0),e([s("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],u.prototype,"readRespectsDaylightSaving",null),e([r({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],u.prototype,"timezone",void 0),u=m=e([i("esri.layers.support.TimeReference")],u);var c,d=u;let v=c=class extends n{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const r=new Date(t.timeExtent[0]),i=new Date(t.timeExtent[1]);return new a({start:r,end:i})}writeFullTimeExtent(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new p({value:t.timeInterval,unit:o.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new p({value:t.defaultTimeInterval,unit:o.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:r,hasLiveData:i,interval:n,startField:s,timeReference:l,fullTimeExtent:o,trackIdField:a,useTime:p}=this;return new c({cumulative:e,endField:r,hasLiveData:i,interval:n,startField:s,timeReference:t(l),fullTimeExtent:t(o),trackIdField:a,useTime:p})}};e([r({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],v.prototype,"cumulative",void 0),e([r({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],v.prototype,"endField",void 0),e([r({type:a,json:{write:{enabled:!0,allowNull:!0}}})],v.prototype,"fullTimeExtent",void 0),e([s("fullTimeExtent",["timeExtent"])],v.prototype,"readFullTimeExtent",null),e([l("fullTimeExtent")],v.prototype,"writeFullTimeExtent",null),e([r({type:Boolean,json:{write:!0}})],v.prototype,"hasLiveData",void 0),e([r({type:p,json:{write:{enabled:!0,allowNull:!0}}})],v.prototype,"interval",void 0),e([s("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],v.prototype,"readInterval",null),e([l("interval")],v.prototype,"writeInterval",null),e([r({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],v.prototype,"startField",void 0),e([r({type:d,json:{write:{enabled:!0,allowNull:!0}}})],v.prototype,"timeReference",void 0),e([r({type:String,json:{write:{enabled:!0,allowNull:!0}}})],v.prototype,"trackIdField",void 0),e([r({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],v.prototype,"useTime",void 0),v=c=e([i("esri.layers.support.TimeInfo")],v);var h=v;export default h;
