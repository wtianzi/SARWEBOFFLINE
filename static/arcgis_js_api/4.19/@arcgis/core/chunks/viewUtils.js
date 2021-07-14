/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{clone as e}from"../core/lang.js";import{c as r}from"./vec3f64.js";import{a as o,e as n,b as t}from"./vec3.js";import{d as s,b as c}from"./screenUtils.js";import{d as a,a as f,g as i}from"./vec2.js";function p(r,o){return{...r,...e(o)}}function m(e,r,o,n){for(;e.length<r;)e.push(o());if(n)for(;e.length>r;){n(e.pop())}else e.length=r}function l(e,r){if(o(r,0,0,0),e.length>0){for(let o=0;o<e.length;++o)n(r,r,e[o]);t(r,r,1/e.length)}}function d(e,r,o,n){n.projectToRenderScreen(e,R),n.projectToRenderScreen(r,T),f(o,v,S),i(o,o)}function u(e,r,o){const n=o.state.camera;o.renderCoordsHelper.toRenderCoords(e,j),n.projectToRenderScreen(j,h),o.state.camera.renderToScreen(h,r)}function g(e,r,o){return u(e,b,o),u(r,C,o),a(b,C)}const j=r(),h=s(),R=s(),S=R,T=s(),v=T,b=c(),C=c();export{p as c,l as m,g as p,m as r,d as s};
