/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../core/lang.js";import{i as e}from"./Logger.js";import t from"../core/Error.js";import{a as n,c as s}from"./number.js";import o from"../Color.js";import i from"../symbols/ExtrudeSymbol3DLayer.js";import a from"../symbols/SimpleLineSymbol.js";import r from"../symbols/FillSymbol3DLayer.js";import l from"../symbols/IconSymbol3DLayer.js";import m from"../symbols/LineSymbol3DLayer.js";import u from"../symbols/ObjectSymbol3DLayer.js";import c from"../symbols/PathSymbol3DLayer.js";import f from"../symbols/LineSymbol3D.js";import d from"../symbols/MeshSymbol3D.js";import p from"../symbols/PointSymbol3D.js";import y from"../symbols/PolygonSymbol3D.js";import w from"../symbols/SimpleFillSymbol.js";import h from"../symbols/SimpleMarkerSymbol.js";import"../symbols.js";import{a as b}from"./PointSizeSplatAlgorithm.js";import g from"../renderers/visualVariables/SizeVariable.js";import{c as v,g as j}from"./layerUtils2.js";import{a as z}from"./scaleUtils.js";import{s as D}from"./spatialStatistics.js";import{d as S,e as x,f as V}from"./utils5.js";import{r as L}from"./numberUtils.js";import U from"../smartMapping/statistics/summaryStatistics.js";import T from"../smartMapping/statistics/classBreaks.js";import{getBackgroundColorTheme as k}from"../views/support/colorUtils.js";const I=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];async function M(n){const{layerAdapter:s,...o}=await async function(n){const{view:s}=n;if(!(n&&s&&n.layer))throw new t("outline:missing-parameters","'view' and 'layer' parameters are required");const o=[0,2,3,1],{layer:i,...a}=n,r=v(i,o),l={layerAdapter:r,...a};if(!r)throw new t("outline:invalid-parameters","'layer' must be one of these types: "+j(o).join(", "));await s.when();const m=e(l.signal)?{signal:l.signal}:null;if(await r.load(m),"polygon"!==r.geometryType)throw new t("outline:not-supported",`outline is not supported for geometryType: ${r.geometryType}`);return l}(n),i=await s.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...o}),a=await D({features:i,geometryType:s.geometryType});if(!("avgSize"in a)||!a.avgSize)throw new t("outline:insufficient-info","average polygon size is invalid");return function(e,t){const n=e.avgSize,s=z(1,t.spatialReference),o=I.map((e=>({size:e.width,value:Math.round(n/e.size*s)})));return o.sort(((e,t)=>e.value-t.value)),{visualVariables:[new g({target:"outline",valueExpression:"$view.scale",stops:o})],opacity:.25}}(a,o.view)}const B=/^(\d+(\.\d+)?)\s*(%)$/i,F=[0,0,0,.4],A=["hours","minutes","seconds"],C=[].concat(V.light).concat(V.dark);function P(e,t,o){if("string"==typeof e){const t=o.getField(e);if(t&&"date"===t.type)return t.alias||t.name}else if("number"==typeof e||e instanceof Date){const o=A.indexOf(t)>-1?"short-date-short-time":"short-date";return n(e,s(o))}return e}function R(e,n){return new t(e,n)}function q(e,t,n){return e+t>0&&0>e-t&&n<0?0:e}function E(e,t,n,s,o=!0){const i="90-10"===n&&t?{min:t.classBreakInfos[0].maxValue,max:t.classBreakInfos[t.classBreakInfos.length-1].minValue,avg:null,stddev:null}:e,{avg:a,stddev:r,min:l,max:m}=i,u=O(i,s,o);let c=u?u[0]:l,f=u?u[1]:m;return u?{minDataValue:c,maxDataValue:f,defaultValuesUsed:!0}:("above"===n?c=q(a,r,l):"below"===n&&(f=q(a,r,l)),{minDataValue:c,maxDataValue:f,defaultValuesUsed:!1})}function O(e,t,n){let s,o;const i=function(e){let t,n,s=e&&e.statistics;s||(s={});if(null==s.min)if(e.isDate){const e=Y();t=e[0],n=e[1]}else t=0,n=100;else if(s.min===s.max)if(e.isDate){const e=Y(s.min);t=e[0],n=e[1]}else s.min<0?(t=2*s.min,n=0):s.min>0?(t=0,n=2*s.min):(t=0,n=100);return{min:null!=t?t:s.min,max:null!=n?n:s.max,defaultValuesUsed:null!=t||null!=n}}({statistics:e,isDate:t});return i.defaultValuesUsed?(s=i.min,o=i.max):!n||null!=e.avg&&e.stddev||(s=e.min,o=e.max),null!=s?[s,o]:null}function Y(e){const t=("number"==typeof e?new Date(e):new Date).getUTCFullYear();let n=Date.UTC(t,0,1,12,0,0,0),s=Date.UTC(t,11,31,12,0,0,0);return"number"==typeof e&&(e<n&&(n=e),e>s&&(s=e)),[n,s]}function $(e,t){const n=[],s=e.length;for(let i=0;i<t;i++)n.push(new o(e[i%s]));return n}function W(e,t,n,s=!0){const{minDataValue:o,maxDataValue:i,defaultValuesUsed:a}=e;return a||"above"===n||"below"===n||"90-10"===n?H(o,i,5):J(t,s)}function G(e){const{avg:t,stddev:n,min:s,max:o}=e;if(null==t||null==n)return H(s,o,5);const i=q(t,n,s),a=o-i,r=i-s,l=Math.max(a,r);return L([i-l,i-l/2,i,l/2+i,i+l],{strictBounds:!0})}function N(e,t){const{min:n,max:s}=t,[o,i,a,r,l]=e,m=null!=n&&o<n,u=null!=s&&l>s;if(null==n||null==s||!m&&!u)return e;const c=m?n:o,f=u?s:l;return L([c,m?c+(a-c)/2:i,a,u?a+(f-a)/2:r,f],{strictBounds:!0})}function H(e,t,n){const s=(t-e)/(n-1),o=[e];for(let t=1;t<=n-2;t++)o.push(e+t*s);return o.push(t),L(o,{strictBounds:!0})}function J(e,t=!0){let n=e.avg,s=n-e.stddev,o=n+e.stddev;s<e.min&&(s=e.min),o>e.max&&(o=e.max),t&&(n=s+(o-s)/2);let i=L([s,o],{strictBounds:!0});return s=i[0],o=i[1],i=[s,s+(n-s)/2,n,n+(o-n)/2,o],L(i,{strictBounds:!0})}function K(e,t,n){switch(t){case"point":case"multipoint":return n?"noDataSize"in e?e.noDataSize:null:"size"in e?e.size:null;case"polyline":return n?"noDataWidth"in e?e.noDataWidth:null:"width"in e?e.width:null;case"polygon":return"size"in e?e.size:null;case"mesh":default:return}}function Q(e,t,n){switch(t){case"point":case"multipoint":case"polygon":{if(!("outline"in e))return null;const t={color:e.outline.color,width:e.outline.width};if(null!=n&&t.color){const e=t.color.clone();e.a=n,t.color=e}return t}case"polyline":case"mesh":default:return}}function X(e,t){const{type:n,size:s,color:o,outline:b}=t;let g;switch(e){case"point":case"multipoint":if("2d"===n)g=new h({color:o,size:s,outline:{color:b.color,width:b.width}});else if("3d-flat"===n)g=new p({symbolLayers:[new l({size:s,resource:{primitive:"circle"},material:{color:o},outline:{color:b.color,size:b.width}})]});else if(n.indexOf("3d-volumetric")>-1){const e="3d-volumetric-uniform"===n,i=new u({height:s,resource:{primitive:e?"sphere":"cylinder"},material:{color:o}});e||(i.width=t.widthAndDepth,i.depth=t.widthAndDepth),g=new p({symbolLayers:[i]})}break;case"polyline":"2d"===n?g=new a({color:o,width:s}):"3d-flat"===n?g=new f({symbolLayers:[new m({size:s,material:{color:o}})]}):"3d-volumetric"===n&&(g=new f({symbolLayers:[new c({size:s,material:{color:o}})]}));break;case"polygon":"2d"===n?g=new w({color:o,outline:{color:b.color,width:b.width}}):"3d-flat"===n?g=new y({symbolLayers:[new r({material:{color:o},outline:{color:b.color,size:b.width}})]}):"3d-volumetric"===n&&(g=new y({symbolLayers:[new i({size:s,material:{color:o}})]}));break;case"mesh":{const e=t.meshInfo&&t.meshInfo.colorMixMode,n=t.meshInfo&&t.meshInfo.edgesType;g=new d({symbolLayers:[new r({material:{color:o,colorMixMode:e},edges:null==n||"none"===n?null:{type:n,color:F}})]});break}}return g}function Z(e,t,n){const s=function(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}({layer:e,fields:t});if(s.length)return R(n,"Unknown fields: "+s.join(", ")+". You can only use fields defined in the layer schema");const o=function(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsRenderer}))}({layer:e,fields:t});return o.length?R(n,"Unsupported fields: "+o.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}async function _(e,t){const n={layer:e.layer,view:e.view,signal:e.signal},[s,o]=await Promise.all([T(e),t?M(n):null]),i=O({min:s.minValue,max:s.maxValue,avg:null,stddev:null},!1,!1);return{result:i?await T({...e,classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:i[0],maxValue:i[1],normalizationTotal:i[0]+i[1]}):s,defaultValuesUsed:!!i,outlineResult:o}}function ee(e){return U(e)}function te(e,t){let{minSize:n,maxSize:s}=e;if("height"===t){n=((s-n)/2+n)/(2*2.3),s*=2}return{minSize:n,maxSize:s}}function ne(e){return B.test(e)}function se(e){const t=e.match(B),n=Number(t[1]);if("%"===t[3])return new b({scaleFactor:n/100})}function oe(e,t,n,s){e.startTime=t instanceof Date?t.getTime():t,e.endTime=n instanceof Date?n.getTime():n,e.units=s,e.field="string"==typeof t?t:"string"==typeof n?n:null}async function ie(t,n){let s=null,o=null;if(!t&&!n)return{basemapId:s,basemapTheme:o};var i;!t&&n&&(t=n&&(null==(i=n.map)?void 0:i.basemap));if(t&&(s=S(t,C,!1),s)){const t=x(s);e(t)&&(o=t)}return s||"2d"!==(null==n?void 0:n.type)||(o=await k(n),e(o)&&(s="dark"===o?"dark-gray":"gray")),{basemapId:s,basemapTheme:o}}export{_ as a,se as b,R as c,$ as d,O as e,P as f,ee as g,J as h,ne as i,E as j,W as k,X as l,K as m,Q as n,M as o,ie as p,H as q,te as r,G as s,N as t,oe as u,Z as v};
