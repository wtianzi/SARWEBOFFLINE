// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../tasks/support/AttachmentQuery","../utils","./operations/queryAttachments"],function(a,d,e,b){a.executeAttachmentQuery=async function(f,g,h){const c=e.parseUrl(f);return b.executeAttachmentQuery(c,d.from(g),{...h}).then(k=>b.processAttachmentQueryResult(k.data.attachmentGroups,c.path))};Object.defineProperty(a,"__esModule",{value:!0})});