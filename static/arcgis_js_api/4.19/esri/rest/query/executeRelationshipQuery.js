// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../tasks/support/FeatureSet","../../tasks/support/RelationshipQuery","../utils","./operations/queryRelatedRecords"],function(c,n,f,g,h){c.executeRelationshipQuery=async function(a,b,d){b=f.from(b);a=g.parseUrl(a);return h.executeRelationshipQuery(a,b,d).then(e=>{const k=e.data,l={};Object.keys(k).forEach(m=>l[m]=n.fromJSON(k[m]));return l})};c.executeRelationshipQueryForCount=async function(a,b,d){b=f.from(b);a=g.parseUrl(a);return h.executeRelationshipQueryForCount(a,b,{...d}).then(e=>
e.data)};Object.defineProperty(c,"__esModule",{value:!0})});