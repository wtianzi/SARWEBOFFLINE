/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{E as i}from"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import{b as o,c as r,a as s,f as l}from"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import a from"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import{isNumericField as u,isStringField as d}from"../../layers/support/fieldUtils.js";import"../../core/Handles.js";import{watch as c}from"../../core/watchUtils.js";import{HandleOwnerMixin as p}from"../../core/HandleOwner.js";import"../../chunks/domUtils.js";import{r as m}from"../../chunks/widgetUtils.js";import"../../chunks/projector.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/index.js";import"../Widget.js";import"./Grid/support/ButtonMenuItem.js";import"./Grid/support/ButtonMenuViewModel.js";import"../../chunks/Popover.js";import h from"./Grid/support/ButtonMenu.js";import"../../chunks/MomentElementViewModel.js";import"../support/DatePickerViewModel.js";import"../../chunks/moment.js";import v from"../support/DatePicker.js";import"../support/TimePickerViewModel.js";import f from"../support/TimePicker.js";import g from"../FeatureForm/InputField.js";const y="esri-icon-arrow-up",F="esri-icon-arrow-down",b="esri-column__menu-container",E="esri-icon-handle-horizontal",j="esri-column__sorter",C="Enter",w="Spacebar";let _=class extends(p(i.EventedAccessor)){constructor(e){super(e),this._menuContainer=null,this.activeRowIndex=null,this.autoWidth=!1,this.cellValueFormatFunction=({value:e})=>m.sanitize(e),this.flexGrow=1,this.footerRenderFunction=null,this.frozen=!1,this.grid=null,this.header=null,this.headerRenderFunction=e=>{const{root:t}=e,{header:n,headerMenuEnabled:i,path:o,sortable:r}=this;if(this.removeCellContent(t),r)return this.headerSorterRenderFunction(e),void(i&&this.headerMenuRenderFunction(e));i&&this.headerMenuRenderFunction(e);const s=n||o;t.innerHTML!==s&&(t.innerHTML=s)},this.headerMenuRenderFunction=({root:e})=>{var t,n;(null==(t=this.menu)||null==(n=t.items)?void 0:n.length)&&e.appendChild(this._menuContainer)},this.headerSorterRenderFunction=({root:e})=>{var t;const{header:n,path:i,sortElement:o}=this,r=n||i;if(!o)return void(e.innerHTML=r);o.innerHTML!==r&&o.setAttribute("innerHTML",r),e.appendChild(o);const s=null==(t=this.grid)?void 0:t.getSlotElementByName(e.slot),l=null==s?void 0:s.parentElement;l&&!l.onkeydown&&(l.onkeydown=({key:e})=>{e!==C&&e!==w||o.click()})},this.hidden=!1,this.headerMenuEnabled=!0,this.menu=null,this.menuConfig=null,this.messages=null,this.messagesCommon=null,this.renderFunction=({root:e,column:t,rowData:n})=>{const i=this.getCellValue(t,n),o=this.cellValueFormatFunction({column:t,rowData:n,value:i});e.innerHTML!==o&&(e.innerHTML=o)},this.resizable=!0,this.sortable=!0,this.sortElement=null,this.textAlign="start",this.width=200}initialize(){const{messages:e,path:t}=this;this._set("sortElement",this.createSortElement()),this.sortElement.setAttribute("path",t),this._menuContainer=document.createElement("div"),this._menuContainer.classList.add(b),this.menu=new h({label:null==e?void 0:e.options,iconClass:E,...this.menuConfig}),this.menu.container=this._menuContainer,this.menu.set("items",this.getMenuItems()),this.handles.add([c(this,"hidden",(()=>{var e;return null==(e=this.menu)?void 0:e.set("open",!1)}))])}destroy(){var e;null==(e=this.menu)||e.destroy()}set direction(e){this.sortable&&(this.sortElement&&(e?this.sortElement.direction!==e&&this.sortElement.setAttribute("direction",e):this.sortElement.removeAttribute("direction")),this._set("direction",e))}get direction(){return this._get("direction")||null}set path(e){this.sortElement&&this.sortElement.path!==e&&this.sortElement.setAttribute("path",e),this._set("path",e)}getMenuItems(){const{menuConfig:e,sortable:t}=this,n=null==e?void 0:e.items,i=this.getSortMenuItems(),o=[];return t&&o.push(...i),(null==n?void 0:n.length)&&o.push(...n),o.length?o:null}getSortMenuItems(){const{messages:e}=this;return[{selected:"asc"===this.direction,iconClass:y,label:null==e?void 0:e.sortAsc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","asc"!==this.direction?"asc":null)},{selected:"desc"===this.direction,iconClass:F,label:null==e?void 0:e.sortDesc,autoCloseMenu:!0,clickFunction:()=>this.set("direction","desc"!==this.direction?"desc":null)}]}getCellValue(e,t){var n;return null!=(n=null==t?void 0:t.item[null==e?void 0:e.path])?n:""}createSortElement(){const{direction:e,header:t,path:n}=this,i=t||n,o=document.createElement("vaadin-grid-sorter");return o.classList.add(j),o.setAttribute("path",n),e&&o.setAttribute("direction",e),o.innerHTML=i,o.setAttribute("title",i),o}removeCellContent(e){if(e)for(;e.firstChild;)try{e.removeChild(e.firstChild)}catch(e){}}};e([t()],_.prototype,"activeRowIndex",void 0),e([t()],_.prototype,"autoWidth",void 0),e([t()],_.prototype,"cellValueFormatFunction",void 0),e([t()],_.prototype,"direction",null),e([t()],_.prototype,"flexGrow",void 0),e([t()],_.prototype,"footerRenderFunction",void 0),e([t()],_.prototype,"frozen",void 0),e([t()],_.prototype,"grid",void 0),e([t()],_.prototype,"header",void 0),e([t()],_.prototype,"headerRenderFunction",void 0),e([t()],_.prototype,"headerMenuRenderFunction",void 0),e([t()],_.prototype,"headerSorterRenderFunction",void 0),e([t()],_.prototype,"hidden",void 0),e([t()],_.prototype,"headerMenuEnabled",void 0),e([t()],_.prototype,"menu",void 0),e([t()],_.prototype,"menuConfig",void 0),e([t()],_.prototype,"messages",void 0),e([t()],_.prototype,"messagesCommon",void 0),e([t()],_.prototype,"path",null),e([t()],_.prototype,"renderFunction",void 0),e([t()],_.prototype,"resizable",void 0),e([t()],_.prototype,"sortable",void 0),e([t({readOnly:!0})],_.prototype,"sortElement",void 0),e([t()],_.prototype,"textAlign",void 0),e([t()],_.prototype,"width",void 0),_=e([n("esri.widgets.FeatureTable.Grid.Column")],_);var k=_;const I="esri-editor-column__cell-input",M="esri-editor-column__cell-input--container",V="Enter",D="Escape";let L=class extends k{constructor(e){super(e),this.activeEditInfo=null,this.cellValueValidatorFunction=({oldValue:e,value:t})=>e!==t,this.editable=!1,this.inputRenderFunction=({root:e,column:t,rowData:n})=>{var i,o;if(null!=(i=this.activeEditInfo)&&i.updating)return;if(!this.editable)return;const r=this.getCellValue(t,n),s=this.createInputElement({root:e,column:t,rowData:n,value:r});this._set("activeEditInfo",{column:t,input:s,root:e,rowData:n,updating:!0,oldValue:r});const l=this.createInputContainer();l.appendChild(s),this.removeCellContent(e),e.appendChild(l),s.focus(),s instanceof HTMLInputElement&&s.select(),null==(o=this.grid)||o.notifyResize()},this.loadingMessage="",this.inputType="text",this.maxLength=null,this.parseInputValueFunction=({input:e})=>e.value,this.renderFunction=e=>{var t;const{root:n,column:i,rowData:o}=e,{activeEditInfo:r}=this;if(r&&r.updating)return;const s=this.getCellValue(i,o),l=this.cellValueFormatFunction({column:i,rowData:o,value:s});n.onclick=()=>n.focus(),n.ondblclick=()=>this.inputRenderFunction(e),n.ontouchend=()=>this.inputRenderFunction(e);const a=null==(t=this.grid)?void 0:t.getSlotElementByName(n.slot),u=null==a?void 0:a.parentElement;u&&!u.onkeydown&&(u.onkeydown=t=>{t.key!==V||this.activeEditInfo||this.inputRenderFunction(e),t.key===D&&this.activeEditInfo&&this.cancel()}),(null==l?void 0:l.toString())!==n.innerHTML&&(n.innerHTML=l)},this.required=!1,this.store=null,this.updateRowItemFunction=({rowData:e,column:t,value:n})=>{e.item[t.path]=n},this.updateStoreItemFunction=({rowData:e,column:t,value:n})=>{var i;return null==(i=this.store)?void 0:i.updateItem({index:e.index,name:t.path,value:n})}}cancel(){var e;const{activeEditInfo:t}=this;if(!t)return;const{column:n,root:i,rowData:o,oldValue:r}=t;this._set("activeEditInfo",null);const s=this.cellValueFormatFunction({column:n,rowData:o,value:r});i.innerHTML=s,null==(e=this.grid)||e.notifyResize()}createInputContainer(){const e=document.createElement("div");return e.classList.add(M),e}createInputElement({value:e}){const t=document.createElement("input");return t.classList.add(I),t.maxLength=this.maxLength,t.type=this.inputType,t.value=e,t.onblur=()=>{t.onblur=null,this.submit()},t}async submit(){var e;const{activeEditInfo:t}=this;if(!t)return;const{column:n,input:i,root:o,rowData:r,oldValue:s}=t,l=this.parseInputValueFunction({input:i,column:n,rowData:r});if(!this.cellValueValidatorFunction({value:l,oldValue:s,column:n,rowData:r}))this.cancel();else{o.innerHTML=this.loadingMessage,null==(e=this.grid)||e.notifyResize();try{var a;await this.updateStoreItemFunction({rowData:r,column:n,value:l}),this.updateRowItemFunction({rowData:r,column:n,value:l});const e=this.getCellValue(n,r),t=this.cellValueFormatFunction({column:n,rowData:r,value:e});o.innerHTML=t,this.emit("value-change",{column:n,rowData:r,value:e}),this._set("activeEditInfo",null),null==(a=this.grid)||a.notifyResize()}catch(e){this.cancel()}}}};e([t({readOnly:!0})],L.prototype,"activeEditInfo",void 0),e([t()],L.prototype,"cellValueValidatorFunction",void 0),e([t()],L.prototype,"editable",void 0),e([t()],L.prototype,"inputRenderFunction",void 0),e([t({constructOnly:!0})],L.prototype,"loadingMessage",void 0),e([t()],L.prototype,"inputType",void 0),e([t()],L.prototype,"maxLength",void 0),e([t()],L.prototype,"parseInputValueFunction",void 0),e([t()],L.prototype,"renderFunction",void 0),e([t()],L.prototype,"required",void 0),e([t()],L.prototype,"store",void 0),e([t()],L.prototype,"updateRowItemFunction",void 0),e([t()],L.prototype,"updateStoreItemFunction",void 0),L=e([n("esri.widgets.FeatureTable.EditorColumn")],L);var R=L;const T="Escape",x="esri-field-column__header-content",O="esri-field-column__cell-input",S="esri-field-column__cell__input-container",H="esri-field-column__cell__date-input-container",z="esri-field-column__cell__date-input-wrapper",A="esri-field-column__button",U="esri-icon-save",P="esri-icon-trash",q="esri-icon-locked",G=r("short-date-short-time"),B=r("short-date"),N=o({digitSeparator:!0,places:null});let W=class extends R{constructor(e){super(e),this._inputField=null,this.alias=null,this.cellValueFormatFunction=({rowData:e,value:t})=>{if(this.formatFunction){const{config:e,field:n}=this;return this.formatFunction({config:e,field:n,value:m.sanitize(t)})}if(null===t)return"&nbsp;";const{config:n,field:i,type:a}=this,{item:{feature:d}}=e,c=this._getDomainForFeature(d);if(c)return this._getComputedDomain(t,c);if("date"===a){var p;const e=null!=n&&null!=(p=n.format)&&p.dateFormat?r(n.format.dateFormat):!1===(null==n?void 0:n.includeTime)?B:G;return t?s(t,e):null}if(u(i)){const e=null!=n&&n.format?o(n.format):N;return l(parseFloat(t),e)}return m.sanitize(t)},this.cellValueValidatorFunction=({oldValue:e,value:t})=>e!==t,this.config=null,this.defaultValue=null,this.description=null,this.editingEnabled=!1,this.field=null,this.formatFunction=null,this.headerRenderFunction=e=>{const{root:t}=e,{editable:n,editingEnabled:i,headerMenuEnabled:o,sortable:r}=this;if(this.removeCellContent(t),t.classList.add(x),i&&!n&&t.appendChild(this.createLockedElement()),r)this.headerSorterRenderFunction(e);else{const{header:e,path:n}=this,i=document.createElement("div");i.innerHTML=e||n,t.appendChild(i)}o&&this.headerMenuRenderFunction(e)},this.inputRenderFunction=({root:e,column:t,rowData:n})=>{var i,o;if(null!=(i=this.activeEditInfo)&&i.updating)return;if(!this.editable)return;const r=this.getCellValue(t,n),s=this.createInputElement({root:e,column:t,rowData:n,value:r});if(this._set("activeEditInfo",{column:t,input:s,root:e,rowData:n,updating:!0,oldValue:r}),"date"===this.type)return void this._renderDateEditors(r,e,s);const l=this.createInputContainer();l.appendChild(s),this.removeCellContent(e),e.appendChild(l),s.focus(),s instanceof HTMLInputElement&&s.select(),null==(o=this.grid)||o.notifyResize()},this.layer=null,this.menuConfig=null,this.name=null,this.nullable=!0,this.parseInputValueFunction=({input:e})=>{const t=this._inputField,n=e.value,{required:i,type:o}=t;return i||""!==n?"number"===o||"date"===o?parseFloat(n):n:null},this.path=null,this.type=null,this.updateRowItemFunction=({rowData:e,column:t,value:n})=>{e.item.feature.attributes[t.path]=n}}get editable(){var e,t,n;return this.editingEnabled?this.config?!1!==this.config.editable&&(null==(t=this.field)?void 0:t.editable):null==(n=this.field)?void 0:n.editable:!!this.config&&(!0===this.config.editable&&(null==(e=this.field)?void 0:e.editable))}get header(){var e;return(null==(e=this.config)?void 0:e.label)||this.alias||this.path||null}get hidden(){const{config:e}=this;return!1===(null==e?void 0:e.visible)||this._get("hidden")||!1}set hidden(e){this._set("hidden",e)}get loadingMessage(){var e;return(null==(e=this.messages)?void 0:e.loading)||"..."}get maxLength(){var e,t;const n=null==(e=this.field)?void 0:e.length,i=null==(t=this.config)?void 0:t.maxLength;return!isNaN(i)&&i>=-1&&(-1===n||i<=n)?i:n}get required(){const e=this.get("field.nullable"),t=this.get("config.required");return this.editable&&(!e||!0===t)}get sortable(){var e;return!1!==(null==(e=this.config)?void 0:e.sortable)}createInputElement({rowData:e,value:t}){const{item:n}=e;if(!n||!n.feature)return null;this._inputField=this._setUpInputField(n.feature,t);const{field:i,maxLength:o,required:r}=this,{domain:s}=this._inputField;let l=null;"coded-value"===(null==s?void 0:s.type)?(l=this._createSelectElement(t,s.codedValues.map((({code:e,name:t})=>({value:e,name:t}))),this._inputField),l.onchange=()=>{l.onblur=null,d()}):(l=document.createElement("input"),l.type=u(i)?"number":"text",o>-1&&(l.maxLength=o)),l.classList.add(O),l.value=t,l.required=r;let a=!1;l.onkeydown=e=>{a=e.key===T},l.onblur=()=>{l.onblur=null,d()};const d=()=>{a?this.cancel():this.submit(),this._inputField=null};return l}createInputContainer(){const e=document.createElement("div");return e.classList.add(S),e}createLockedElement(){const e=document.createElement("div");return e.classList.add(q),e}getCellValue({path:e},{item:t}){var n,i,o;return null!=(n=null==t||null==(i=t.feature)||null==(o=i.attributes)?void 0:o[e])?n:null}_renderDateEditors(e,t,n){var i;const{config:o,messagesCommon:r}=this,s=e?new Date(e):new Date(Date.now()),l=new v({dateInputEnabled:!0,value:s}),a=new f({value:s});n.value=s.getTime().toString();let u=!e;const d=()=>{u=!0;const e=this._getCombinedDateTime(l.value,a.value);n.value=e.getTime().toString()},c=()=>{u?this.submit():this.cancel()},p=()=>{n.value=null,this.submit()};l.watch("value",(()=>d())),a.watch("value",(()=>d()));const m=document.createElement("div"),h=document.createElement("div");l.container=m,a.container=h;const g=document.createElement("button");g.classList.add(A,U),g.onclick=()=>c(),g.title=null==r?void 0:r.save;const y=document.createElement("button");y.classList.add(A,P),y.onclick=()=>p(),y.title=null==r?void 0:r.clear;const F=document.createElement("div");F.classList.add(z),F.appendChild(m),!1!==o.includeTime&&F.appendChild(h);const b=document.createElement("div");b.classList.add(H),b.appendChild(F),b.appendChild(g),b.appendChild(y),l.when((()=>{var e;return null==(e=this.grid)?void 0:e.notifyResize()})),a.when((()=>{var e;return null==(e=this.grid)?void 0:e.notifyResize()})),this.removeCellContent(t),t.appendChild(b),null==(i=this.grid)||i.notifyResize()}_createSelectElement(e,t,n){let i=!1;const o=t.map((t=>{t.value===e&&(i=!0);const n=document.createElement("option");return n.text=t.name,n.value=t.value,n}));if(null!=e&&""!==e&&!i){const t=document.createElement("option");t.text=e,t.value=e,o.unshift(t)}if(!n.required&&null==n.value){const e=document.createElement("option");e.value="",o.unshift(e)}const r=document.createElement("select");return o.forEach((e=>r.add(e))),r.value=e,r}_setUpInputField(e,t){const{config:n,field:i,layer:o}=this,r=new g({config:n,feature:e,field:i,layer:o,group:null,messages:null});return r.set("value",t),r}_isDomainCompatible(e){const{field:t}=this;if(e&&"coded-value"===e.type){const n=typeof e.codedValues[0].code;if("string"===n&&d(t)||"number"===n&&u(t))return!0}return!(!e||"range"!==e.type||!u(t))}_getDomainForFeature(e){const{layer:t,name:n}=this,{typeIdField:i}=t,o=i===n,r=this.get("field.domain");if(o&&!r)return new a({name:"__internal-type-based-coded-value-domain__",codedValues:t.types.map((({id:e,name:t})=>({code:e,name:t})))});const s=i&&t.getFieldDomain(n,{feature:e})||r,l=this.get("config.domain");return this._isDomainCompatible(l)?l:s}_getComputedDomain(e,t){if(!t)return null;if("range"===t.type)return e;if("coded-value"===t.type){const n=t.codedValues.filter((t=>t.hasOwnProperty("code")&&t.code===e));return n&&n.length?n[0].name:e}return null}_getCombinedDateTime(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds())}};e([t({readOnly:!0,aliasOf:"field.alias"})],W.prototype,"alias",void 0),e([t()],W.prototype,"cellValueFormatFunction",void 0),e([t()],W.prototype,"cellValueValidatorFunction",void 0),e([t()],W.prototype,"config",void 0),e([t({readOnly:!0,aliasOf:"field.defaultValue"})],W.prototype,"defaultValue",void 0),e([t({readOnly:!0,aliasOf:"field.description"})],W.prototype,"description",void 0),e([t({readOnly:!0})],W.prototype,"editable",null),e([t()],W.prototype,"editingEnabled",void 0),e([t()],W.prototype,"field",void 0),e([t()],W.prototype,"formatFunction",void 0),e([t({readOnly:!0})],W.prototype,"header",null),e([t()],W.prototype,"hidden",null),e([t()],W.prototype,"headerRenderFunction",void 0),e([t()],W.prototype,"inputRenderFunction",void 0),e([t()],W.prototype,"layer",void 0),e([t({readOnly:!0})],W.prototype,"loadingMessage",null),e([t()],W.prototype,"maxLength",null),e([t({readOnly:!0,aliasOf:"config.menuConfig"})],W.prototype,"menuConfig",void 0),e([t({readOnly:!0,aliasOf:"field.name"})],W.prototype,"name",void 0),e([t({readOnly:!0,aliasOf:"field.nullable"})],W.prototype,"nullable",void 0),e([t()],W.prototype,"parseInputValueFunction",void 0),e([t({readOnly:!0,aliasOf:"field.name"})],W.prototype,"path",void 0),e([t({readOnly:!0})],W.prototype,"required",null),e([t()],W.prototype,"sortable",null),e([t({readOnly:!0,aliasOf:"field.type"})],W.prototype,"type",void 0),e([t()],W.prototype,"updateRowItemFunction",void 0),W=e([n("esri.widgets.FeatureTable.FieldColumn")],W);var J=W;export default J;export{k as C};
