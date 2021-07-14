/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import s from"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{E as o}from"../../chunks/Evented.js";import"../../core/Collection.js";import"../../core/urlUtils.js";import"../../chunks/resourceExtension.js";import"../../core/Handles.js";import"../../core/watchUtils.js";import{HandleOwnerMixin as r}from"../../core/HandleOwner.js";let n=class extends(r(o.EventedAccessor)){constructor(t){super(t),this._indexHistory=[],this._lastStepIndex=-1,this._stepIndex=-1,this._handleKeys={afterCommit:"after-commit",beforeCommit:"before-commit"},this.data=null,this.started=!1,this.steps=null,this.type=null}get hasNextStep(){const{steps:t}=this;return!!(t&&this._stepIndex<t.filter((t=>!t.parent)).length-1)}get hasPreviousStep(){return this._stepIndex>0}get stepId(){const{steps:t}=this,e=t&&t[this._stepIndex];return e&&e.id}async cancel(t={force:!0}){return!1!==t.force?this._cancel():new Promise(((t,e)=>{this.emit("cancel-request",{controller:{allow:()=>{this._cancel().then(t)},deny:()=>e(new s("workflow:cancel-denied","Request to cancel workflow was denied."))}})}))}async commit(){const{data:t}=this;this.handles.remove(this._handleKeys.beforeCommit);const e=t.edits.feature,s=e.clone();if(!t.edits.attributesModified){const{objectIdField:t}=e.layer;s.attributes={[t]:e.getAttribute(t)}}t.edits.geometryModified||(s.geometry=null),await this.afterCommit(s),this.handles.remove(this._handleKeys.afterCommit),this.emit("commit");this.started&&await this.reset()}async go(t){const{steps:e}=this,s=e.findIndex((e=>e.id===t));this._indexHistory.push(this._stepIndex),await this._go(s)}async next(){this._indexHistory.push(this._stepIndex),await this._go(this._stepIndex+1)}async previous(){await this._go(this._indexHistory.pop())}async reset(){await this._cancel(!1),await this.start()}async start(){this._set("started",!0);const t=-1===this._stepIndex?0:this._stepIndex;await this._go(t)}async _cancel(t=!0){this.started&&(this._set("started",!1),await this.steps[this._stepIndex].tearDown()),this.handles.remove([this._handleKeys.afterCommit,this._handleKeys.beforeCommit]),this._resetIndexing(t),t&&this.emit("cancel")}async _go(t=-1){if(!(t<=-1||t>=this.steps.length)){if(!this.started)return this._stepIndex=t,void this._notifyStepProps();this._lastStepIndex>-1&&await this.steps[this._lastStepIndex].tearDown(),await this.steps[t].setUp(),this._lastStepIndex=t,this._stepIndex=t,this._notifyStepProps()}}_resetIndexing(t=!0){this._stepIndex=-1,this._lastStepIndex=-1,this._indexHistory.length=0,t&&this._notifyStepProps()}_notifyStepProps(){this.notifyChange("stepId"),this.notifyChange("hasPreviousStep"),this.notifyChange("hasNextStep")}};t([e()],n.prototype,"afterCommit",void 0),t([e()],n.prototype,"data",void 0),t([e()],n.prototype,"hasNextStep",null),t([e()],n.prototype,"hasPreviousStep",null),t([e()],n.prototype,"started",void 0),t([e({readOnly:!0})],n.prototype,"stepId",null),t([e()],n.prototype,"steps",void 0),t([e()],n.prototype,"type",void 0),t([e()],n.prototype,"commit",null),n=t([i("esri.widgets.Editor.Workflow")],n);var a=n;export default a;
