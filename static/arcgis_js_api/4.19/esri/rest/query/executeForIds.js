// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../tasks/support/Query","../utils","./operations/query"],function(b,c,d,e){b.executeForIds=async function(a,f,g){a=d.parseUrl(a);return e.executeQueryForIds(a,c.from(f),{...g}).then(h=>h.data.objectIds)};Object.defineProperty(b,"__esModule",{value:!0})});