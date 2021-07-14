// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../geometry/Extent ../../geometry ../../tasks/support/Query ../utils ./operations/query".split(" "),function(b,d,l,e,f,g){b.executeForExtent=async function(a,h,k){a=f.parseUrl(a);return g.executeQueryForExtent(a,e.from(h),{...k}).then(c=>({count:c.data.count,extent:d.fromJSON(c.data.extent)}))};Object.defineProperty(b,"__esModule",{value:!0})});