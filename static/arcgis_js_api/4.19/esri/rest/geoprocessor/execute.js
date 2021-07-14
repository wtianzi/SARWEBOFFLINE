// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../tasks/support/GPMessage","./GPOptions","./utils"],function(b,e,f,c){b.execute=async function(g,h,a,k){a=f.from(a);return c.constructRequest(g,"execute",a,h,k).then(d=>{const l=d.data.messages||[];return{results:(d.data.results||[]).map(c.decode),messages:l.map(m=>e.fromJSON(m))}})};Object.defineProperty(b,"__esModule",{value:!0})});