/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{L as e,c as t,b as i,i as n}from"./Logger.js";import r from"../core/Error.js";import a,{W as s,e as o}from"../geometry/SpatialReference.js";import l from"../request.js";import{project as d}from"../geometry/support/webMercatorUtils.js";import"../geometry.js";import{k as c}from"./fieldType.js";import u from"../tasks/support/FeatureSet.js";import f from"../layers/support/FieldsIndex.js";import{O as m}from"./OptimizedFeatureSet.js";import{a as y,c as p,b as g}from"./featureConversionUtils.js";import{v as b,i as w,c as F}from"./geojson.js";import{c as I}from"./clientSideDefaults.js";const j=e.getLogger("esri.layers.graphics.sources.ogcfeature");async function T(e,t,i,n,a=5){const s=`${e}/collections/${t}/items`,{data:o}=await l(s,{signal:n,query:{limit:a,f:"json"}});await b(o);const d=w(o,{geometryType:i.geometryType}),u=i.fields||d.fields||[],m=null!=i.hasZ?i.hasZ:d.hasZ,y=d.geometryType,p=i.objectIdField||d.objectIdFieldName||"OBJECTID";let g=i.timeInfo;const F=u.find((e=>e.name===p));if(!F){if(!d.objectIdFieldType)throw new r("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");u.unshift({name:p,alias:p,type:"esriFieldTypeOID",editable:!1,nullable:!1})}else F.type="esriFieldTypeOID",F.editable=!1,F.nullable=!1;if(p!==d.objectIdFieldName){const e=u.find((e=>e.name===d.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}if(!y)throw new r("ogc-feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");u===d.fields&&d.unknownFields.length>0&&j.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:d.unknownFields}});for(const e of u){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new r("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(-1===c.jsonValues.indexOf(e.type))throw new r("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(g){const e=new f(u);if(g.startTimeField){const t=e.get(g.startTimeField);t?(g.startTimeField=t.name,t.type="esriFieldTypeDate"):g.startTimeField=null}if(g.endTimeField){const t=e.get(g.endTimeField);t?(g.endTimeField=t.name,t.type="esriFieldTypeDate"):g.endTimeField=null}if(g.trackIdField){const t=e.get(g.trackIdField);t?g.trackIdField=t.name:(g.trackIdField=null,j.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:g}}))}g.startTimeField||g.endTimeField||(j.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:g}}),g=null)}return{drawingInfo:I(y),geometryType:y,fields:u,hasZ:!!m,objectIdField:p,timeInfo:g}}async function h(e,t,i){const n=`${e}/collections/${t}`,{data:r}=await l(n,{signal:i,query:{f:"json"}});return r}async function S(e,t){const i=`${e}/conformance`,{data:n}=await l(i,{signal:t,query:{f:"json"}});return n}async function x(e,t){const{data:i}=await l(e,{signal:t,query:{f:"json"}});return i}function k(e){const t=/^http:\/\/www\.opengis\.net\/def\/crs\/(.+)\/(.+)\/(.+)$/i.exec(e);if(!t)return null;const[,i,,n]=t;switch(i.toLowerCase()){case"ogc":switch(n.toLowerCase()){case"crs27":return a.GCS_NAD_1927;case"crs83":return new a({wkid:4269});case"crs84":case"crs84h":return a.WGS84;default:return null}case"esri":case"epsg":{const e=Number.parseInt(n,10);return Number.isNaN(e)?null:900913===e?a.WebMercator:new a({wkid:e})}default:return null}}async function N(e,t,i){const n=await $(e,t,i);return u.fromJSON(n)}async function $(e,t,i){const n=await q(e,t,i);return y(n)}async function q(e,o,c){const{capabilities:{query:{maxRecordCount:u}},collectionId:f,layerDefinition:y,spatialReference:b,supportedCrs:w,url:I}=e,j=`${I}/collections/${f}/items`,{geometry:T,num:h,start:S,timeExtent:x,where:k}=o;if(o.objectIds)throw new r("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const N=a.fromJSON(b),$=t(o.outSpatialReference,N),q=$.isWGS84?null:O($,w),W=function(e,t){if(!function(e){return n(e)&&"extent"===e.type}(e))return null;const{spatialReference:i}=e;if(!i||i.isWGS84)return{bbox:D(e)};const r=O(i,t);if(r)return{bbox:D(e),"bbox-crs":r};if(i.isWebMercator)return{bbox:D(d(e,a.WGS84))};return null}(T,w),v=function(e){if(i(e))return null;const{start:t,end:n}=e;return`${t?t.toISOString():".."}/${n?n.toISOString():".."}`}(x),M=function(e){if(i(e)||!e||"1=1"===e)return null;return e}(k),R=null!=h?h:null!=S&&void 0!==S?10:u,{data:C}=await l(j,{...c,query:{...W,crs:q,datetime:v,query:M,limit:R,startindex:S,f:"json"}});let G=!1;if(C.links){G=!!C.links.find((e=>"next"===e.rel))}!G&&Number.isInteger(C.numberMatched)&&Number.isInteger(C.numberReturned)&&(G=C.numberReturned<C.numberMatched);const{fields:Z,globalIdField:L,hasM:J,hasZ:E,objectIdField:U}=y,_=y.geometryType,z=F(C,{geometryType:_,hasZ:E,objectIdFieldName:U});if(!q&&$.isWebMercator)for(const e of z)if(e.geometry){const t=p(e.geometry,_,E,!1);t.spatialReference=a.WGS84,e.geometry=g(d(t,$))}for(const e of z)e.objectId=e.attributes[U];const A=q||!q&&$.isWebMercator?$.toJSON():s,B=new m;return B.exceededTransferLimit=G,B.features=z,B.fields=Z,B.geometryType=_,B.globalIdFieldName=L,B.hasM=J,B.hasZ=E,B.objectIdFieldName=U,B.spatialReference=A,B}function O(e,t){return t.find((t=>{const i=k(t);return o(i,e)}))}function D(e){const{xmin:t,ymin:i,xmax:n,ymax:r}=e;return`${t},${i},${n},${r}`}export{S as a,h as b,T as c,k as d,$ as e,q as f,x as g,N as q};
