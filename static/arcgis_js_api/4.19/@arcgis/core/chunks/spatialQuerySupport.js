/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{b as e}from"./Logger.js";import t from"../core/Error.js";import{J as r}from"./jsonMap.js";import{l as i,i as n,W as s,j as o}from"../geometry/SpatialReference.js";import{e as l,b as a,g as u}from"../geometry/Extent.js";import{e as f}from"./extentUtils.js";import{fromJSON as c,isPolygon as p,isExtent as m,getJsonType as y}from"../geometry/support/jsonUtils.js";import{E as S}from"./unitUtils.js";import{normalizeCentralMeridian as g}from"../geometry/support/normalizeUtils.js";import{b as R}from"./OptimizedFeatureSet.js";import{q as h,f as d,h as w,r as j,i as I,j as N,k as b,e as G}from"./featureConversionUtils.js";import{c as v,p as P}from"./projectionSupport.js";function M(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:n}=e;let s=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((e=>{const t=r.getAttribute(e,i),l=r.getAttribute(e,n);null==t||isNaN(t)||(s=Math.min(s,t)),null==l||isNaN(l)||(o=Math.max(o,l))}));else{const e=i||n;t.forEach((t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),o=Math.max(o,i))}))}return{start:s,end:o}}function E(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:n}=e;if(!i&&!n)return null;const{start:s,end:o}=t;return null===s&&null===o?null:void 0===s&&void 0===o?()=>!1:i&&n?function(e,t,r,i,n){if(null!=i&&null!=n)return s=>{const o=e.getAttribute(s,t),l=e.getAttribute(s,r);return(null==o||o<=n)&&(null==l||l>=i)};if(null!=i)return t=>{const n=e.getAttribute(t,r);return null==n||n>=i};if(null!=n)return r=>{const i=e.getAttribute(r,t);return null==i||i<=n};return}(r,i,n,s,o):function(e,t,r,i){if(null!=r&&null!=i&&r===i)return i=>e.getAttribute(i,t)===r;if(null!=r&&null!=i)return n=>{const s=e.getAttribute(n,t);return s>=r&&s<=i};if(null!=r)return i=>e.getAttribute(i,t)>=r;if(null!=i)return r=>e.getAttribute(r,t)<=i;return}(r,i||n,s,o)}const F=new r({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),U=Object.freeze({}),A=new R,O=new R,T=new R,q={esriGeometryPoint:d,esriGeometryPolyline:I,esriGeometryPolygon:N,esriGeometryMultipoint:b};function C(e,t,r,i=e.hasZ,n=e.hasM){const s=e.hasZ&&i,o=e.hasM&&n;if(r){const l=h(T,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return d(l,s,o)}return d(t,s,o)}function _(e,t,r,i,n,s,o=t,l=r){const a=t&&o,u=r&&l,f=i?"coords"in i?i:i.geometry:null;if(!f)return null;if(n){let i=w(O,f,t,r,e,n,o,l);return s&&(i=h(T,i,a,u,e,s)),q[e](i,a,u)}if(s){const i=h(T,f,t,r,e,s,o,l);return q[e](i,a,u)}return j(A,f,t,r,o,l),q[e](A,a,u)}async function x(e,t,r){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:o}=e;if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(s)for(let e=0;e<s.length;e++)s[e]=s[e].trim();if(o)for(let e=0;e<o.length;e++)o[e].onStatisticField&&(o[e].onStatisticField=o[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),J(e,t,r)}async function J(t,r,o){if(!t)return null;let{where:l}=t;if(t.where=l=l&&l.trim(),(!l||/^1 *= *1$/.test(l)||r&&r===l)&&(t.where=null),!t.geometry)return t;let a=await async function(e){const{geometry:t,distance:r,units:o}=e;if(null==r||"vertexAttributes"in t)return t;const l=t.spatialReference,a=o?F.fromJSON(o):S(l),u=l&&(i(l)||n(l))?t:await v(l,s).then((()=>P(t,s)));return(await async function(){return(await import("./geometryEngineJSON.js").then((function(e){return e.g}))).geodesicBuffer}())(u.spatialReference,u,r,a)}(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:e}=t.geometry;a=f(a),a.spatialReference=e}t.geometry=a,await v(a.spatialReference,o);const u=(await g(c(a)))[0];if(e(u))throw U;const p=u.toJSON(),m=await P(p,p.spatialReference,o);if(!m)throw U;return m.spatialReference=o,t.geometry=m,t}function z(e){return e&&B in e?JSON.parse(JSON.stringify(e,V)):e}const B="_geVersion",V=(e,t)=>e!==B?t:void 0;function W(e,t){return e?t?4:3:t?3:2}function Z(e,t,r,i,n){if(!e)return!1;const s=W(t,r),{coords:o,lengths:l}=e;let a=!1,u=0;for(const e of l)a=k(a,o,s,u,e,i,n),u+=e*s;return a}function k(e,t,r,i,n,s,o){let l=e,a=i;for(let e=i,u=i+n*r;e<u;e+=r){a=e+r,a===u&&(a=i);const n=t[e],f=t[e+1],c=t[a],p=t[a+1];(f<o&&p>=o||p<o&&f>=o)&&n+(o-f)/(p-f)*(c-n)<s&&(l=!l)}return l}const D={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},Y={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},K={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},L={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function Q(e,t,r,i,n){if(p(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=G(new R,t,!1,!1);return Promise.resolve((t=>function(e,t,r,i){return Z(e,t,r,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if(p(t)&&"esriGeometryMultipoint"===r){const r=G(new R,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>function(e,t,r,i,n,s){const o=W(n,s),{coords:l,lengths:a}=i;if(!a)return!1;for(let i=0,n=0;i<a.length;i++,n+=o)if(!Z(e,t,r,l[n],l[n+1]))return!1;return!0}(r,!1,!1,e,i,n)))}if(m(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>l(t,_(r,i,n,e))));if(m(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Promise.resolve((e=>a(t,_(r,i,n,e))));if(m(t)&&"esriSpatialRelIntersects"===e){const e=u(r);return Promise.resolve((s=>e(t,_(r,i,n,s))))}return import("./geometryEngineJSON.js").then((function(e){return e.g})).then((s=>{const o=s[D[e]].bind(null,t.spatialReference,t);return e=>o(_(r,i,n,e))}))}async function $(e,r,i){const{spatialRel:n,geometry:s}=e;if(s){if(!0!==Y[n])throw new t("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(o(s.spatialReference)&&o(i)){if(!function(e){return!0===K[y(e)]}(s))throw new t("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===L[e]}(r))throw new t("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});if(e.outSR)return v(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function H(e){if(m(e))return!0;if(p(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}export{U as Q,_ as a,M as b,z as c,Q as d,H as e,$ as f,E as g,J as h,x as n,C as t};
