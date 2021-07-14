/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{clone as t,h as e}from"../core/lang.js";import{d as r,a as n,b as i}from"./defaultsJSON.js";function s(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?r:"esriGeometryPolyline"===t?n:i}}}function o(t,r){if(e("csp-restrictions"))return()=>({[r]:null,...t});try{let e=`this.${r} = null;`;for(const r in t){e+=`this${r.indexOf(".")?`["${r}"]`:`.${r}`} = ${JSON.stringify(t[r])};`}const n=new Function(e);return()=>new n}catch(e){return()=>({[r]:null,...t})}}function u(e={}){return[{name:"New Feature",description:"",prototype:{attributes:t(e)}}]}export{u as a,o as b,s as c};
