/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../config.js";import{L as e}from"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import r from"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"./locale.js";import{a as t,c as o,f as s}from"./number.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import{b as i}from"./arcadeOnDemand.js";import{isNumericField as a,getField as p}from"../layers/support/fieldUtils.js";import{a as n,g as m}from"./labelUtils.js";import l from"../layers/support/FieldsIndex.js";const u=e.getLogger("esri.layers.support.labelFormatUtils"),c={type:"simple",evaluate:()=>null},j={getAttribute:(e,r)=>e.field(r)};async function y(e,t,o){if(!e||!e.symbol)return c;const s=e.where,a=n(e),y=s?await import("../core/sql/WhereClause.js"):null;let f;if("arcade"===a.type){const e=await i(a.expression,o,t);f={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):e.repurposeAdapter(t)});if(null!=r)return r.toString()}catch(e){u.error(new r("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:a}))}return null},needsHydrationToEvaluate:()=>null==m(a.expression)}}else f={type:"simple",evaluate:e=>a.expression.replace(/{[^}]*}/g,(r=>{const o=r.slice(1,-1),s=p(t,o);if(!s)return r;let i=null;if("attributes"in e){e&&e.attributes&&(i=e.attributes[s.name])}else i=e.field(s.name);return null==i?"":d(i,s)}))};if(s){let e;try{e=y.WhereClause.create(s,new l(t))}catch(e){return c}const r=f.evaluate;f.evaluate=t=>{const o="attributes"in t?void 0:j;return e.testFeature(t,o)?r(t):null}}return f}function d(e,r){if(null==e)return"";const i=r.domain;if(i)if("codedValue"===i.type||"coded-value"===i.type){const r=e;for(const e of i.codedValues)if(e.code===r)return e.name}else if("range"===i.type){const r=+e,t="range"in i?i.range[0]:i.minValue,o="range"in i?i.range[1]:i.maxValue;if(t<=r&&r<=o)return i.name}let p=e;return"date"===r.type||"esriFieldTypeDate"===r.type?p=t(p,o("short-date")):a(r)&&(p=s(+p)),p||""}export{y as createLabelFunction,d as formatField};
