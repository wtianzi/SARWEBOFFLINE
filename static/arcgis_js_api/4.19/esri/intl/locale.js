// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../core/global"],function(b,d){function g(){var a,c;return null!=(a=null!=l?l:null==(c=d.navigator)?void 0:c.language)?a:"en"}function m(){void 0===e&&(e=g());return e}function n(){var a;const c=null!=(a=p)?a:g();e!==c&&(e=c,[...h].forEach(k=>{k.call(null,c)}),[...f].forEach(k=>{k.call(null,c)}))}var q,r,t;let p=void 0,e=void 0;const l=null!=(q=null==(r=d.esriConfig)?void 0:r.locale)?q:null==(t=d.dojoConfig)?void 0:t.locale,u={he:!0,ar:!0},f=[],h=[];null==d.addEventListener?void 0:
d.addEventListener("languagechange",n);b.beforeLocaleChange=function(a){h.push(a);return{remove(){f.splice(h.indexOf(a),1)}}};b.getDefaultLocale=g;b.getLocale=m;b.onLocaleChange=function(a){f.push(a);return{remove(){f.splice(f.indexOf(a),1)}}};b.prefersRTL=function(a=m()){a=/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(a);a=null==a?void 0:a[1].toLowerCase();return void 0!==a&&(u[a]||!1)};b.setLocale=function(a){p=a?a:void 0;n()};Object.defineProperty(b,"__esModule",{value:!0})});