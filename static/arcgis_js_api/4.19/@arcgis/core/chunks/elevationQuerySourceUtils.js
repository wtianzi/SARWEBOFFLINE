/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{b as n,i as r}from"./Logger.js";import{l as t,m as l}from"../core/scheduling.js";import o from"../Ground.js";import{a as i}from"./unitUtils.js";function e(r){if(n(r))return null;if(r instanceof o)return s(r);const l=r.tileInfo;if(n(l))return null;const e=t(l.lods);return n(e)?null:e.resolution*i(l.spatialReference)}function s(t){var o;if(n(t))return null;const i=t.layers.items.map(u).filter(r);return null!=(o=l(i))?o:null}function u(n){return"tileInfo"in n?e(n):null}export{e as a,s as g};
