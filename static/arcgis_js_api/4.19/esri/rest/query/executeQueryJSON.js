// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../tasks/support/FeatureSet","../../tasks/support/Query","../utils","./operations/query"],function(d,f,g,h,k){async function e(b,a,c){b=h.parseUrl(b);c={...c};a=g.from(a);({data:a}=await k.executeQuery(b,a,a.sourceSpatialReference,c));return a}d.executeQueryJSON=async function(b,a,c){b=await e(b,a,c);return f.fromJSON(b)};d.executeRawQueryJSON=e;Object.defineProperty(d,"__esModule",{value:!0})});