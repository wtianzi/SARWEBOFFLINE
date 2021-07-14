/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import s from"../tasks/support/GPMessage.js";import r from"../rest/geoprocessor/GPOptions.js";import t,{c as o,d as e}from"../tasks/support/JobInfo.js";async function a(t,a,n,m){return n=r.from(n),o(t,"execute",n,a,m).then((r=>{const t=r.data.results||[],o=r.data.messages||[];return{results:t.map(e),messages:o.map((r=>s.fromJSON(r)))}}))}async function n(s,e,a,n){return a=r.from(a),o(s,"submitJob",a,e,n).then((r=>{const o=t.fromJSON(r.data);return o.sourceUrl=s,o}))}export{a as e,n as s};
