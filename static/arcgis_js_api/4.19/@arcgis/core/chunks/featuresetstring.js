/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"./locale.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./sizeVariableUtils.js";import"./fieldType.js";import"../layers/support/Field.js";import"./OptimizedFeatureSet.js";import"./featureConversionUtils.js";import"./number3.js";import"./moment.js";import{p as r,y as o,t,C as e,z as n,al as i,D as s,am as a,an as m,U as c,ao as p,ap as u}from"./arcadeUtils.js";import"./centroid.js";import"./FeatureSetReader.js";function d(r){return r&&r.domain?"coded-value"===r.domain.type||"codedValue"===r.domain.type?s.convertObjectToArcadeDictionary({type:"codedValue",name:r.domain.name,dataType:u[r.field.type],codedValues:r.domain.codedValues.map((r=>({name:r.name,code:r.code})))}):s.convertObjectToArcadeDictionary({type:"range",name:r.domain.name,dataType:u[r.field.type],min:r.domain.min,max:r.domain.max}):null}function l(u){"async"===u.mode&&(u.functions.domain=function(s,a){return u.standardFunctionAsync(s,a,(function(s,a,m){if(r(m,2,3),m[0]instanceof o){return d(m[0].fullDomain(t(m[1]),void 0===m[2]?void 0:e(m[2])))}if(n(m[0]))return m[0]._ensureLoaded().then((()=>d(i(t(m[1]),m[0],null,void 0===m[2]?void 0:e(m[2])))));throw new Error("Invalid Parameter")}))},u.functions.subtypes=function(t,e){return u.standardFunctionAsync(t,e,(function(t,e,i){if(r(i,1,1),i[0]instanceof o){const r=i[0].subtypes();return r?s.convertObjectToArcadeDictionary(r):null}if(n(i[0]))return i[0]._ensureLoaded().then((()=>{const r=i[0].subtypes();return r?s.convertObjectToArcadeDictionary(r):null}));throw new Error("Invalid Parameter")}))},u.functions.domainname=function(s,m){return u.standardFunctionAsync(s,m,(function(s,m,c){if(r(c,2,4),c[0]instanceof o)return c[0].domainValueLookup(t(c[1]),c[2],void 0===c[3]?void 0:e(c[3]));if(n(c[0]))return c[0]._ensureLoaded().then((()=>{const r=i(t(c[1]),c[0],null,void 0===c[3]?void 0:e(c[3]));return a(r,c[2])}));throw new Error("Invalid Parameter")}))},u.signatures.push({name:"domainname",min:"2",max:"4"}),u.functions.domaincode=function(s,a){return u.standardFunctionAsync(s,a,(function(s,a,c){if(r(c,2,4),c[0]instanceof o)return c[0].domainCodeLookup(t(c[1]),c[2],void 0===c[3]?void 0:e(c[3]));if(n(c[0]))return c[0]._ensureLoaded().then((()=>{const r=i(t(c[1]),c[0],null,void 0===c[3]?void 0:e(c[3]));return m(r,c[2])}));throw new Error("Invalid Parameter")}))},u.signatures.push({name:"domaincode",min:"2",max:"4"})),u.functions.text=function(o,t){return u.standardFunctionAsync(o,t,(function(o,t,e){if(r(e,1,2),!n(e[0]))return p(e[0],e[1]);{const r=c(e[1],"");if(""===r)return e[0].castToText();if("schema"===r.toLowerCase())return e[0].convertToText("schema",o.abortSignal);if("featureset"===r.toLowerCase())return e[0].convertToText("featureset",o.abortSignal)}}))},u.functions.gdbversion=function(t,e){return u.standardFunctionAsync(t,e,(function(t,e,i){if(r(i,1,1),i[0]instanceof o)return i[0].gdbVersion();if(n(i[0]))return i[0].load().then((r=>r.gdbVersion));throw new Error("Invalid Parameter")}))},u.functions.schema=function(t,e){return u.standardFunctionAsync(t,e,(function(t,e,i){if(r(i,1,1),n(i[0]))return i[0].load().then((()=>s.convertObjectToArcadeDictionary(i[0].schema())));if(i[0]instanceof o){const r=i[0].schema();return r?s.convertObjectToArcadeDictionary(r):null}throw new Error("Invalid Parameter")}))}}export{l as registerFunctions};