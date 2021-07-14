// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../Color","./utils"],function(n,l,h,t){function p(a,d){const b=[],c=a.length-1;5===a.length?b.push(0,2,4):b.push(0,c);return a.map((e,k)=>-1<b.indexOf(k)?t.createStopLabel(e,k,c,d):null)}async function u(a,d,b=v){b=new h(b);a=(await new Promise(function(c,e){n(["../../../renderers/visualVariables/support/visualVariableUtils"],c,e)})).getOpacity(d,a);null!=a&&(b.a=a);return b}function q(a,d){const {startIndex:b,endIndex:c,weight:e}=w(a,d);if(b===c)return d[b].color;
a=h.blendColors(d[b].color,d[c].color,e);return new h(a)}function w(a,d){let b=0,c=d.length-1;d.some((e,k)=>{if(a<e.value)return c=k,!0;b=k;return!1});return{startIndex:b,endIndex:c,weight:(a-d[b].value)/(d[c].value-d[b].value)}}const v=new h([64,64,64]);l.getColorFromPointCloudStops=q;l.getRampStops=async function(a,d,b){let c=!1,e=[],k=[];if(a.stops){var f=a.stops;e=f.map(g=>g.value);(c=f.some(g=>!!g.label))&&(k=f.map(g=>g.label))}f=e[e.length-1];if(null==e[0]&&null==f)return null;const m=c?null:
p(e,b);return(await Promise.all(e.map(async(g,r)=>{const z="opacity"===a.type?await u(g,a,d):(await new Promise(function(x,y){n(["../../../renderers/visualVariables/support/visualVariableUtils"],x,y)})).getColor(a,g);return{value:g,color:z,label:c?k[r]:m[r]}}))).reverse()};l.getRampStopsForPointCloud=function(a){let d=!1,b=[],c=[];b=a.map(f=>f.value);(d=a.some(f=>!!f.label))&&(c=a.map(f=>f.label));const e=b[b.length-1];if(null==b[0]&&null==e)return null;const k=d?null:p(b,!1);return b.map((f,m)=>
{const g=q(f,a);return{value:f,color:g,label:d?c[m]:k[m]}}).reverse()};l.getStrectchRampStops=function(a,d){let b=[];if(a&&"multipart"===a.type)a.colorRamps.reverse().forEach(function(c,e){0===e?b.push({value:d.max,color:new h(c.toColor),label:"high"}):b.push({value:null,color:new h(c.toColor),label:""});e===a.colorRamps.length-1?b.push({value:d.min,color:new h(c.fromColor),label:"low"}):b.push({value:null,color:new h(c.fromColor),label:""})});else{let c,e;a&&"algorithmic"===a.type?(c=a.fromColor,
e=a.toColor):(c=[0,0,0,1],e=[255,255,255,1]);b=[{value:d.max,color:new h(e),label:"high"},{value:d.min,color:new h(c),label:"low"}]}return b};Object.defineProperty(l,"__esModule",{value:!0})});