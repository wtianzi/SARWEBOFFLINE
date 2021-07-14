// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","./GPOptions","./utils","../../tasks/support/JobInfo"],function(c,e,f,g){c.submitJob=async function(d,h,b,k){b=e.from(b);return f.constructRequest(d,"submitJob",b,h,k).then(a=>{a=g.fromJSON(a.data);a.sourceUrl=d;return a})};Object.defineProperty(c,"__esModule",{value:!0})});