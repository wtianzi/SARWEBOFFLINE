// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["require","exports","./core/has","./support/revision","./core/urlUtils"],function(h,a,g,f,k){g("host-webworker")||(console.debug(`Using ArcGIS API for JavaScript ${"4.19"} [Date: ${f.buildDate}, Revision: ${f.commitHash.slice(0,8)}]`),(g("edge")||g("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser"));a.buildDate=f.buildDate;a.revision=f.commitHash;a.addTokenParameter=function(b){const d=a.id&&a.id.findCredential(b);return d&&d.token?k.addQueryParameter(b,"token",
d.token):b};a.setId=function(b){a.id=b};a.version="4.19";a.workerMessages={request(b,d){return(new Promise(function(c,e){h(["./request"],function(l){c(Object.freeze({__proto__:null,"default":l}))},e)})).then(({default:c})=>{const e=b.options||{};e.responseType="array-buffer";e.signal=null==d?void 0:d.signal;return c(b.url,e)}).then(c=>({result:{data:c.data,ssl:c.ssl},transferList:[c.data]}))}};Object.defineProperty(a,"__esModule",{value:!0})});