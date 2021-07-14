// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../intl/messages ../../symbols/TextSymbol ../../symbols ../../layers/support/LabelExpressionInfo ../../layers/support/LabelClass ../heuristics/clusterMinSize ../support/clusterUtils ../../views/2d/layers/support/clusterUtils".split(" "),function(n,q,r,t,z,u,v,w,g,x){async function y(a){const {layer:b,renderer:h,view:c}=a;await Promise.all([b.load(),c.when()]);a=h||b.renderer;return x.isClusterCompatibleRenderer(a)?{layer:b,renderer:a,view:c}:Promise.reject(new q("clusters-label-schemes:invalid-parameters",
"'renderer' is not valid"))}async function p(a){const {renderer:b,view:h,statInfo:c}=a,f=null==c?void 0:c.statisticType,e=c?g.getClusterField(c.attributeInfo,f):g.clusterCountField;{a="type"===f?g.getPredominantTypeExpression("unique-value"===b.type?b.uniqueValueInfos:[],e,a.noneValueLabel):`
  $feature["${e}"];
  var value = $feature["${e}"];
  var num = Count(Text(Round(value)));
  var label = When(
    num < 4, Text(value, "#.#"),
    num == 4, Text(value / Pow(10, 3), "#.0k"),
    num <= 6, Text(value / Pow(10, 3), "#k"),
    num == 7, Text(value / Pow(10, 6), "#.0m"),
    num > 7, Text(value / Pow(10, 6), "#m"),
    Text(value, "#,###")
  );
  return label;
  `;const m=new t({haloColor:"#373837",haloSize:"1px",color:"#f0f0f0",font:{family:"Noto Sans",size:"12px",weight:"bold"}});a=new v({symbol:m,deconflictionStrategy:"none",labelPlacement:"center-center",labelExpressionInfo:new u({expression:a})})}return{name:c?`clusters-${f}-${g.getClusterFieldHash(e,f)}`:"clusters-count",labelingInfo:[a],clusterMinSize:await w(a.symbol,h),fieldName:e}}n.getLabelSchemes=async function(a){const [{renderer:b,layer:h,view:c},f]=await Promise.all([y(a),r.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);
if(!b)return null;a=null;const e=[];{var m=g.getStatisticInfos(h,b,!1);const l=new Map;for(d of m)"size"===d.attributeInfo.vvType?l.set(d.statisticHash,d):l.has(d.statisticHash)||l.set(d.statisticHash,d);var d=[...l.values()]}for(var k of d)d=await p({renderer:b,view:c,statInfo:k,noneValueLabel:f.clusters.predominantNoneValue}),"size"===k.attributeInfo.vvType?a=d:e.push(d);k=await p({renderer:b,view:c});a?e.unshift(k):a=k;return{primaryScheme:a,secondarySchemes:e}};Object.defineProperty(n,"__esModule",
{value:!0})});