/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{g as t}from"./metadata.js";import s from"../core/Accessor.js";import{n as e,O as o}from"./PropertyOrigin.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{w as n}from"./JSONSupport.js";import{R as p}from"./ReadOnlyMultiOriginJSONSupport.js";const c=s=>{let p=class extends s{constructor(...r){super(...r)}clear(r,t="user"){return u(this).delete(r,e(t))}write(r={},t){return n(this,r=r||{},t),r}setAtOrigin(r,s,o){t(this).setAtOrigin(r,s,e(o))}removeOrigin(r){const t=u(this),s=e(r),o=t.keys(s);for(const r of o)t.originOf(r)===s&&t.set(r,t.get(r,s),6)}updateOrigin(r,t){const s=u(this),i=e(t),n=this.get(r);for(let t=i+1;t<o;++t)s.delete(r,t);s.set(r,n,i)}toJSON(r){return this.write({},r)}};return p=r([i("esri.core.WriteableMultiOriginJSONSupport")],p),p.prototype.toJSON.isDefaultToJSON=!0,p};function u(r){return t(r).store}const a=t=>{let s=class extends(c(p(t))){constructor(...r){super(...r)}};return s=r([i("esri.core.MultiOriginJSONSupport")],s),s};let O=class extends(a(s)){};O=r([i("esri.core.MultiOriginJSONSupport")],O);export{a as M,O as a};
