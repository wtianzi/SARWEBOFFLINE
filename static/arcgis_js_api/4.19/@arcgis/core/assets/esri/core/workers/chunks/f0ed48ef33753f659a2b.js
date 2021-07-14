self.webpackChunkRemoteClient([23],{459:function(e,t,a){"use strict";a.r(t),a.d(t,"applyEdits",(function(){return p})),a.d(t,"isEditableLayer",(function(){return u}));a(11),a(17);var r=a(1),s=(a(19),a(4),a(18),a(6),a(0)),d=(a(9),a(3),a(7),a(15),a(16),a(12),a(2),a(10),a(8)),i=(a(5),a(13),a(68),a(72)),n=(a(101),a(42),a(73),a(74),a(14)),l=(a(103),a(48),a(43),a(47),a(45),a(44),a(21),a(76),a(46),a(57),a(58),a(77),a(27),a(69),a(51),a(52),a(49),a(54),a(50),a(84),a(88),a(86),a(85),a(87),a(75),a(53),a(56),a(55),a(65),a(63),a(62),a(60),a(61),a(67),a(59),a(64),a(78),a(71),a(79),a(80),a(82),a(95),a(89),a(105),a(139),a(150),a(125),a(140),a(151),a(141),a(106),a(118),a(119),a(120),a(152),a(153),a(142),a(154),a(155),a(156),a(143),a(144),a(160),a(161),a(162),a(157),a(163),a(93),a(158),a(164),a(165),a(166),a(83),a(146),a(91),a(66),a(70),a(81),a(94),a(96),a(97),a(100),a(92),a(108),a(121),a(122),a(107),a(130),a(109),a(110),a(98),a(102),a(99),a(111),a(112),a(113),a(114),a(115),a(116),a(117),a(104),a(124),a(123),a(131),a(135),a(136),a(132),a(147),a(148),a(149),a(137),a(138),a(133),a(126),a(127),a(128),a(134),a(159),a(167),a(168)),o=(a(216),a(201));function u(e){var t,a;return!0===(null==e||null==(t=e.capabilities)||null==(a=t.operations)?void 0:a.supportsEditing)&&e&&(!("editingEnabled"in e)||e.editingEnabled)}async function p(e,t,a,n){let l,u;const p={edits:a,result:new Promise((e,t)=>{l=e,u=t})};e.emit("apply-edits",p);try{const{results:u,edits:p}=await async function(e,t,a,r){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(t))return Promise.reject(new d.a(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new d.a(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});const n=await function(e,t,a){const r=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),n=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!r&&!n)throw new d.a(e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new d.a(e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new d.a(e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new d.a(e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&n)throw new d.a(e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&n)throw new d.a(e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const l={...t};if(l.addFeatures=t&&i.a.isCollection(t.addFeatures)?t.addFeatures.toArray():l.addFeatures||[],l.updateFeatures=t&&i.a.isCollection(t.updateFeatures)?t.updateFeatures.toArray():l.updateFeatures||[],l.deleteFeatures=t&&i.a.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():l.deleteFeatures||[],l.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new d.a(e.type+"-layer:unsupported-operation","Layer does not support adding features.");if(l.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new d.a(e.type+"-layer:unsupported-operation","Layer does not support updating features.");if(l.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new d.a(e.type+"-layer:unsupported-operation","Layer does not support deleting features.");l.addAttachments=l.addAttachments||[],l.updateAttachments=l.updateAttachments||[],l.deleteAttachments=l.deleteAttachments||[],l.addFeatures=l.addFeatures.map(m),l.updateFeatures=l.updateFeatures.map(m);const u=a&&a.globalIdUsed;return l.addFeatures.forEach(t=>function(e,t,a){h(e,t,a)}(t,e,u)),l.updateFeatures.forEach(t=>function(e,t,a){if(h(e,t,a),"geometry"in e&&Object(s.h)(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new d.a(t.type+"-layer:unsupported-operation","Layer does not support geometry updates.")}(t,e,u)),l.deleteFeatures.forEach(t=>function(e,t,a){h(e,t,a)}(t,e,u)),l.addAttachments.forEach(t=>c(t,e)),l.updateAttachments.forEach(t=>c(t,e)),async function(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map(e=>e.geometry),s=await Object(o.a)(r),d=t.length,i=a.length;return s.slice(0,d).forEach((t,a)=>{e.addFeatures[a].geometry=t}),s.slice(d,d+i).forEach((t,a)=>{e.updateFeatures[a].geometry=t}),e}(l)}(e,a,r);return n.addFeatures.length||n.updateFeatures.length||n.deleteFeatures.length||n.addAttachments.length||n.updateAttachments.length||n.deleteAttachments.length?{edits:n,results:await t.applyEdits(n,r)}:{edits:n,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,n),y=e=>e.filter(e=>!e.error).map(r.b),b={edits:p,addedFeatures:y(u.addFeatureResults),updatedFeatures:y(u.updateFeatureResults),deletedFeatures:y(u.deleteFeatureResults),addedAttachments:y(u.addAttachmentResults),updatedAttachments:y(u.updateAttachmentResults),deletedAttachments:y(u.deleteAttachmentResults)};return(b.addedFeatures.length||b.updatedFeatures.length||b.deletedFeatures.length||b.addedAttachments.length||b.updatedAttachments.length||b.deletedAttachments.length)&&e.emit("edits",b),l(b),u}catch(e){throw u(e),e}}function h(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new d.a(t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new d.a(t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&Object(s.h)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new d.a(t.type+"-layer:z-unsupported","Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new d.a(t.type+"-layer:m-unsupported","Layer does not support m values while feature has m values.")}}function c(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new d.a(t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new d.a(t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new d.a(t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new d.a(t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new d.a(t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new d.a(t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=Object(n.i)(r.data);if(e&&!e.isBase64)throw new d.a(t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}function m(e){const t=new l.a;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}});