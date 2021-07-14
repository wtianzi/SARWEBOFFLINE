// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../core/urlUtils ../../../kernel ../../../request ../support/AttachmentInfo ../../../tasks/operations/urlUtils".split(" "),function(e,h,k,l,m,n){function p(a){a=a.toJSON();a.attachmentTypes&&(a.attachmentTypes=a.attachmentTypes.join(","));a.keywords&&(a.keywords=a.keywords.join(","));a.globalIds&&(a.globalIds=a.globalIds.join(","));a.objectIds&&(a.objectIds=a.objectIds.join(","));a.size&&(a.size=a.size.join(","));return a}e.executeAttachmentQuery=function(a,b,c){b={query:n.mapParameters({...a.query,
f:"json",...p(b)})};c&&(b={...c,...b,query:{...c.query,...b.query}});return l(a.path+"/queryAttachments",b)};e.processAttachmentQueryResult=function(a,b){const c={};for(const q of a){const {parentObjectId:d,parentGlobalId:r,attachmentInfos:t}=q;for(const g of t){({id:a}=g);a=h.addProxy(k.addTokenParameter(`${b}/${d}/attachments/${a}`));const f=m.fromJSON(g);f.set({url:a,parentObjectId:d,parentGlobalId:r});c[d]?c[d].push(f):c[d]=[f]}}return c};Object.defineProperty(e,"__esModule",{value:!0})});