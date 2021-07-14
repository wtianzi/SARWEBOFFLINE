// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../tasks/support/FeatureSet ../../tasks/support/Query ../utils ./operations/query ./operations/pbfJSONFeatureSet".split(" "),function(d,f,g,h,k,l){async function e(b,a,c){b=h.parseUrl(b);c={...c};a=g.from(a);({data:a}=await k.executeQueryPBF(b,a,new l.JSONFeatureSetParserContext({sourceSpatialReference:a.sourceSpatialReference,applyTransform:!a.quantizationParameters}),c));return a}d.executeQueryPBF=async function(b,a,c){b=await e(b,a,c);return f.fromJSON(b)};d.executeRawQueryPBF=
e;Object.defineProperty(d,"__esModule",{value:!0})});