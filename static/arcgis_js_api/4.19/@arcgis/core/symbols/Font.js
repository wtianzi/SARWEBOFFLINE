/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{a as s}from"../chunks/JSONSupport.js";import"../core/urlUtils.js";import{cast as e}from"../core/accessorSupport/decorators/cast.js";import"../chunks/resourceExtension.js";import{t as i}from"../chunks/screenUtils.js";var n;let p=n=class extends s{constructor(o){super(o),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal"}castSize(o){return i(o)}clone(){return new n({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};o([t({type:["underline","line-through","none"],json:{default:"none",write:!0}})],p.prototype,"decoration",void 0),o([t({type:String,json:{write:!0}})],p.prototype,"family",void 0),o([t({type:Number,json:{write:{overridePolicy:(o,t,r)=>({enabled:!r||!r.textSymbol3D})}}})],p.prototype,"size",void 0),o([e("size")],p.prototype,"castSize",null),o([t({type:["normal","italic","oblique"],json:{default:"normal",write:!0}})],p.prototype,"style",void 0),o([t({type:["normal","bold","bolder","lighter"],json:{default:"normal",write:!0}})],p.prototype,"weight",void 0),p=n=o([r("esri.symbols.Font")],p);var c=p;export default c;
