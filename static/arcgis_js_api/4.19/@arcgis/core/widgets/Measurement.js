/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{ignoreAbortErrors as i}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../core/urlUtils.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../chunks/Ellipsoid.js";import"../core/Handles.js";import"../chunks/unitUtils.js";import"../core/watchUtils.js";import"../chunks/domUtils.js";import"../chunks/widgetUtils.js";import"../chunks/projector.js";import{m as o}from"../chunks/messageBundle.js";import{j as a}from"../chunks/index.js";import n from"./Widget.js";import"../chunks/commonProperties4.js";import c from"./Measurement/MeasurementViewModel.js";const l="esri-measurement",d="esri-icon-measure";let u=class extends n{constructor(e,t){super(e,t),this._widgets=new Map,this.activeTool=null,this.activeWidget=null,this.areaUnit=null,this.iconClass=d,this.label=void 0,this.linearUnit=null,this.messages=null,this.view=null,this.viewModel=new c}initialize(){this.activeWidget&&this.viewModel.set("activeViewModel",this.activeWidget.viewModel),this.view&&this.activeTool&&this._getActiveWidget().then((e=>{this._set("activeWidget",e)})),this.own([this.watch(["view","activeTool"],(()=>{this._getActiveWidget().then((e=>{this._set("activeWidget",e)}))})),this.watch("activeWidget",((e,t)=>{this.viewModel.set("activeViewModel",e?e.viewModel:null),t&&(t.visible=!1)})),this.watch(["areaUnit","linearUnit"],(()=>this._updateWidgetUnits()))])}destroy(){this._destroyWidgets()}render(){const{activeWidget:e}=this,t=e&&!e.destroyed?e.render():null;return a("div",{class:l},t)}clear(){this.activeTool=null,this._destroyWidgets()}startMeasurement(){const{activeViewModel:e}=this.viewModel;e&&i(e.start())}async _createWidget(e){const{areaUnit:t,linearUnit:i,view:s}=this;switch(e){case"area":{const{type:e}=s;switch(e){case"2d":return new(0,(await import("./AreaMeasurement2D.js")).default)({view:s,unit:t});case"3d":return new(0,(await import("./AreaMeasurement3D.js")).default)({view:s,unit:t});default:return null}}case"distance":return new(0,(await import("./DistanceMeasurement2D.js")).default)({view:s,unit:i});case"direct-line":return new(0,(await import("./DirectLineMeasurement3D.js")).default)({view:s,unit:i});default:return null}}_destroyWidgets(){this._widgets.forEach((e=>e.destroy())),this._widgets.clear()}async _getActiveWidget(){const{activeTool:e,view:t}=this;if(!t||!e)return null;let i=null;if(this._widgets.has(e))i=this._widgets.get(e),i.visible=!0;else{if(i=await this._createWidget(e),!i)return null;await i.viewModel.start(),this._widgets.set(e,i)}return i}_updateWidgetUnits(){this._widgets.forEach((e=>{const{areaUnit:t,linearUnit:i}=this;e.unit=function(e){return e&&("esri.widgets.AreaMeasurement2D"===e.declaredClass||"esri.widgets.AreaMeasurement3D"===e.declaredClass)}(e)?t:i}))}};e([r("viewModel.activeTool")],u.prototype,"activeTool",void 0),e([t({readOnly:!0})],u.prototype,"activeWidget",void 0),e([r("viewModel.areaUnit")],u.prototype,"areaUnit",void 0),e([t()],u.prototype,"iconClass",void 0),e([t({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],u.prototype,"label",void 0),e([r("viewModel.linearUnit")],u.prototype,"linearUnit",void 0),e([t(),o("esri/widgets/Measurement/t9n/Measurement")],u.prototype,"messages",void 0),e([r("viewModel.view")],u.prototype,"view",void 0),e([t({type:c})],u.prototype,"viewModel",void 0),u=e([s("esri.widgets.Measurement")],u);var p=u;export default p;
