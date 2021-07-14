// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../WebStyleSymbol","../../symbols","./cimAnalyzer","./ExpandedCIM"],function(c,g,m,h,k){const e=async(a,b)=>new k.ExpandedCIM(await h.analyzeCIMSymbol(a.data,b),a.data,a.rendererKey,a.maxVVSize),f=async(a,b,d)=>a?"cim"===a.type?e(a,b):"web-style"===a.type?(a={type:"cim",data:(await g.fromJSON(a).fetchCIMSymbol(d)).data,rendererKey:a.rendererKey,maxVVSize:a.maxVVSize},e(a,b)):a:null;c.expandSymbol=f;c.expandSymbols=async(a,b,d)=>Promise.all(a.map(l=>f(l,b,d)));Object.defineProperty(c,
"__esModule",{value:!0})});