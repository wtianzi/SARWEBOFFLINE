self.webpackChunkRemoteClient([53],{202:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a}));var s=r(14);function o(e,t){let r={query:e};return t&&(r={...t,...r},r.query={...r.query,...t.query}),r}function a(e){return"string"==typeof e?Object(s.I)(e):e}function n(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const a=e[o];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){s[o]=[];for(let e=0;e<a.length;e++)s[o][e]=n(a[e])}else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?a:JSON.stringify(a);else s[o]=a}return s}},244:function(e,t,r){"use strict";var s=r(11),o=(r(17),r(1),r(19),r(4),r(6),r(0),r(9),r(3),r(7)),a=r(15),n=(r(16),r(12),r(2),r(10),r(8),r(5),r(13)),i=r(14);r(21);let l=class extends a.d{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?Object(i.I)(e):null}_encode(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const a=e[o];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){s[o]=[];for(let e=0;e<a.length;e++)s[o][e]=this._encode(a[e])}else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?a:JSON.stringify(a);else s[o]=a}return s}};Object(s.a)([Object(o.d)({readOnly:!0})],l.prototype,"parsedUrl",null),Object(s.a)([Object(o.d)()],l.prototype,"requestOptions",void 0),Object(s.a)([Object(o.d)({type:String})],l.prototype,"url",void 0),l=Object(s.a)([Object(n.g)("esri.tasks.Task")],l);var c=l;t.a=c},275:function(e,t,r){"use strict";var s=r(11),o=(r(17),r(1),r(19),r(4),r(6),r(0),r(9),r(3),r(7)),a=(r(15),r(16),r(12),r(2),r(10),r(8),r(5),r(13)),n=r(42),i=(r(14),r(43));r(21);const l=new i.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends n.b{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(o.d)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(s.a)([Object(o.d)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(a.g)("esri.tasks.support.GPMessage")],c);var u=c;t.a=u},301:function(e,t,r){"use strict";var s=r(11),o=(r(17),r(1),r(19),r(4),r(6),r(0),r(9),r(3),r(7)),a=(r(15),r(16),r(12),r(2),r(10),r(8),r(5),r(13)),n=(r(42),r(14),r(43)),i=(r(21),r(275));const l=new n.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends i.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(o.d)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(a.g)("esri.tasks.support.NAMessage")],c);var u=c;t.a=u},309:function(e,t,r){"use strict";var s=r(11),o=(r(17),r(1),r(19),r(4),r(18),r(6),r(0)),a=(r(9),r(3),r(7)),n=(r(15),r(16),r(12),r(2),r(10),r(8),r(5),r(13)),i=(r(68),r(72),r(101),r(42),r(73),r(74),r(14),r(103),r(48),r(43),r(47),r(45)),l=(r(44),r(21),r(76),r(46)),c=(r(57),r(58),r(77),r(27),r(69),r(51),r(52)),u=(r(49),r(54),r(50)),p=(r(84),r(88),r(86),r(85),r(87),r(75),r(53),r(56),r(55),r(65),r(63),r(62),r(60),r(61)),d=(r(67),r(59),r(64),r(78),r(71),r(79),r(80),r(82),r(95),r(89),r(105),r(139),r(150),r(125),r(140),r(151),r(141),r(106),r(118),r(119),r(120),r(152),r(153),r(142),r(154),r(155),r(156),r(143),r(144),r(160),r(161),r(162),r(157),r(163),r(93),r(158),r(164),r(165),r(166),r(83),r(146),r(91),r(66),r(70),r(81),r(94),r(96),r(97),r(100),r(92),r(108),r(121),r(122),r(107),r(130),r(109),r(110),r(98),r(102),r(99),r(111),r(112),r(113),r(114),r(115),r(116),r(117),r(104),r(124),r(123),r(131),r(135),r(136),r(132),r(147),r(148),r(149),r(137),r(138),r(133),r(126),r(127),r(128),r(134),r(159),r(167),r(168)),f=(r(173),r(170),r(182));let y=class extends f.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach(e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)});const r=l.f.fromJSON(t.spatialReference);return e.map(e=>{const t=d.a.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(Object(o.p)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map(t=>{const r=new d.a({geometry:new c.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r}),t})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:e})=>Object(o.p)(e)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,o=0,a=0;const n=[];let i,l,c,u,p,d,f,y,b=0,O=0,j=0;if(p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),p||(p=[]),0===parseInt(p[b],32)){b=2;const e=parseInt(p[b],32);b++,d=parseInt(p[b],32),b++,1&e&&(O=p.indexOf("|")+1,f=parseInt(p[O],32),O++),2&e&&(j=p.indexOf("|",O)+1,y=parseInt(p[j],32),j++)}else d=parseInt(p[b],32),b++;for(;b<p.length&&"|"!==p[b];){i=parseInt(p[b],32)+r,b++,r=i,l=parseInt(p[b],32)+s,b++,s=l;const e=[i/d,l/d];O&&(u=parseInt(p[O],32)+o,O++,o=u,e.push(u/f)),j&&(c=parseInt(p[j],32)+a,j++,a=c,e.push(c/y)),n.push(e)}return{paths:[n],hasZ:O>0,hasM:j>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach(e=>{e.paths.forEach(e=>{r=r.concat(e)})});const s=[];let o=[0,0];return r.forEach(e=>{e[0]===o[0]&&e[1]===o[1]||(s.push(e),o=e)}),new p.a({paths:[s]},t)}};Object(s.a)([Object(a.d)({type:u.b,json:{read:{source:"summary.envelope"}}})],y.prototype,"extent",void 0),Object(s.a)([Object(a.d)()],y.prototype,"features",void 0),Object(s.a)([Object(i.a)("features")],y.prototype,"readFeatures",null),Object(s.a)([Object(a.d)()],y.prototype,"geometryType",void 0),Object(s.a)([Object(a.d)({readOnly:!0})],y.prototype,"mergedGeometry",null),Object(s.a)([Object(a.d)()],y.prototype,"routeId",void 0),Object(s.a)([Object(a.d)()],y.prototype,"routeName",void 0),Object(s.a)([Object(a.d)({value:null,readOnly:!0})],y.prototype,"strings",null),Object(s.a)([Object(a.d)({json:{read:{source:"summary.totalDriveTime"}}})],y.prototype,"totalDriveTime",void 0),Object(s.a)([Object(a.d)({json:{read:{source:"summary.totalLength"}}})],y.prototype,"totalLength",void 0),Object(s.a)([Object(a.d)({json:{read:{source:"summary.totalTime"}}})],y.prototype,"totalTime",void 0),y=Object(s.a)([Object(n.g)("esri.tasks.support.DirectionsFeatureSet")],y);var b=y;t.a=b},317:function(e,t,r){"use strict";var s=r(11),o=(r(17),r(1),r(19),r(4),r(18),r(6),r(0),r(9),r(3),r(7)),a=(r(15),r(16),r(12),r(2),r(10),r(8),r(5),r(13)),n=(r(68),r(72),r(101),r(42)),i=(r(73),r(74),r(14),r(103),r(48),r(43),r(47),r(45),r(44),r(21),r(76),r(46),r(57),r(58),r(77),r(27),r(69),r(51),r(52),r(49),r(54),r(50),r(84),r(88),r(86),r(85),r(87),r(75),r(53),r(56),r(55),r(65),r(63),r(62),r(60),r(61),r(67),r(59),r(64),r(78),r(71),r(79),r(80),r(82),r(95),r(89),r(105),r(139),r(150),r(125),r(140),r(151),r(141),r(106),r(118),r(119),r(120),r(152),r(153),r(142),r(154),r(155),r(156),r(143),r(144),r(160),r(161),r(162),r(157),r(163),r(93),r(158),r(164),r(165),r(166),r(83),r(146),r(91),r(66),r(70),r(81),r(94),r(96),r(97),r(100),r(92),r(108),r(121),r(122),r(107),r(130),r(109),r(110),r(98),r(102),r(99),r(111),r(112),r(113),r(114),r(115),r(116),r(117),r(104),r(124),r(123),r(131),r(135),r(136),r(132),r(147),r(148),r(149),r(137),r(138),r(133),r(126),r(127),r(128),r(134),r(159),r(167),r(168)),l=(r(173),r(170),r(182),r(309));let c=class extends n.b{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(s.a)([Object(o.d)({type:l.a,json:{write:!0}})],c.prototype,"directions",void 0),Object(s.a)([Object(o.d)({type:i.a,json:{write:!0}})],c.prototype,"route",void 0),Object(s.a)([Object(o.d)({type:String,json:{write:!0}})],c.prototype,"routeName",void 0),Object(s.a)([Object(o.d)({type:[i.a],json:{write:!0}})],c.prototype,"stops",void 0),c=Object(s.a)([Object(a.g)("esri.tasks.support.RouteResult")],c);var u=c;t.a=u},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return T})),r.d(t,"c",(function(){return M})),r.d(t,"d",(function(){return N})),r.d(t,"e",(function(){return w})),r.d(t,"f",(function(){return B}));var s=r(11),o=(r(1),r(4)),a=r(0),n=r(7),i=r(8),l=(r(5),r(13)),c=r(42),u=(r(14),r(45)),p=(r(21),r(27)),d=r(168),f=r(182),y=r(202),b=r(301),O=r(317);class j{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach(e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,a="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=a&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else r[e]=t[e]},this),r}}function v(e){return new j(e)}function g(e){return e&&f.default.fromJSON(e).features.map(e=>e)}let h=class extends c.b{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return g(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return g(e)}readPolygonBarriers(e){return g(e)}};Object(s.a)([Object(n.d)({aliasOf:"pointBarriers"})],h.prototype,"barriers",void 0),Object(s.a)([Object(n.d)({type:[b.a]})],h.prototype,"messages",void 0),Object(s.a)([Object(n.d)({type:[d.a]})],h.prototype,"pointBarriers",void 0),Object(s.a)([Object(u.a)("pointBarriers",["barriers","pointBarriers"])],h.prototype,"readPointBarriers",null),Object(s.a)([Object(n.d)({type:[d.a]})],h.prototype,"polylineBarriers",void 0),Object(s.a)([Object(u.a)("polylineBarriers")],h.prototype,"readPolylineBarriers",null),Object(s.a)([Object(n.d)({type:[d.a]})],h.prototype,"polygonBarriers",void 0),Object(s.a)([Object(u.a)("polygonBarriers")],h.prototype,"readPolygonBarriers",null),Object(s.a)([Object(n.d)({type:[O.a]})],h.prototype,"routeResults",void 0),h=Object(s.a)([Object(l.g)("esri.tasks.support.RouteResultsContainer")],h);var m=h;function T(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}function M(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function w(e){const t=[],r=[],{directions:s=[],routes:{features:o=[],spatialReference:a=null}={},stops:{features:n=[],spatialReference:i=null}={},barriers:l,polygonBarriers:c,polylineBarriers:u,messages:p}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let f,y,b=!0;const O=o&&a||n&&i||l&&l.spatialReference||c&&c.spatialReference||u&&u.spatialReference;s.forEach(e=>{t.push(f=e.routeName),r[f]={directions:e}}),o.forEach(e=>{-1===t.indexOf(f=e.attributes.Name)&&(t.push(f),r[f]={}),e.geometry&&(e.geometry.spatialReference=O),r[f].route=e}),n.forEach(e=>{y=e.attributes,-1===t.indexOf(f=y.RouteName||d)&&(t.push(f),r[f]={}),f!==d&&(b=!1),e.geometry&&(e.geometry.spatialReference=O),null==r[f].stops&&(r[f].stops=[]),r[f].stops.push(e)}),n.length>0&&!0===b&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const j=t.map(e=>(r[e].routeName=e===d?null:e,r[e]));return m.fromJSON({routeResults:j,pointBarriers:l,polygonBarriers:c,polylineBarriers:u,messages:p})}function B(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.h)(e)&&e.hasZ)return!0}return!1}async function N(e){if(!e)throw new i.a("network-service:missing-url","Url to Network service is missing");const{data:t}=await Object(p.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(p.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new i.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(p.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(p.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),s=Object(o.b)("helperServices.routingUtilities.url",r);if(!s)return{supportedTravelModes:[],defaultTravelMode:null};const a=Object(y.c)(e),n=/\/solve$/.test(a.path)?"Route":/\/solveClosestFacility$/.test(a.path)?"ClosestFacility":"ServiceAreas",i=await Object(p.default)(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:n}}),l=[];let c=null;if(i&&i.data&&i.data.results&&i.data.results.length){const e=i.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);l.push(t)}}else"defaultTravelMode"===t.paramName&&(c=t.value)}return{supportedTravelModes:l,defaultTravelMode:c}}(e),{defaultTravelMode:s,supportedTravelModes:a}=await r;return t.defaultTravelMode=s,t.supportedTravelModes=a,t}},382:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r(11),o=(r(1),r(4)),a=r(0),n=(r(7),r(8)),i=(r(5),r(13)),l=r(14),c=(r(21),r(27)),u=r(244);const p=e=>{let t=class extends e{async getServiceDescription(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription(e)),this._serviceDescriptionPromise}async _fetchServiceDescription(e){if(!this.url||!this.parsedUrl)throw new n.a("network-service:missing-url","Url to Network service is missing");const t=this.url,{data:r}=await Object(c.default)(t,{query:{f:"json",token:e}});r.supportedTravelModes||(r.supportedTravelModes=[]);for(let e=0;e<r.supportedTravelModes.length;e++)r.supportedTravelModes[e].id||(r.supportedTravelModes[e].id=r.supportedTravelModes[e].itemId);const s=r.currentVersion>=10.4?async function(e,t){try{const{data:{supportedTravelModes:r,defaultTravelMode:s}}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json",token:t}});return{supportedTravelModes:r,defaultTravelMode:s}}catch(e){throw new n.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(t,e):async function(e,t){const{data:r}=await Object(c.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json",token:t}});if(!r||!r.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=r.owningSystemUrl;const{data:s}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json",token:t}}),a=Object(o.b)("helperServices.routingUtilities.url",s);if(!a)return{supportedTravelModes:[],defaultTravelMode:null};const n=Object(l.I)(e),i=/\/solveClosestFacility$/.test(n.path)?"Route":/\/solveClosestFacility$/.test(n.path)?"ClosestFacility":"ServiceAreas",u=await Object(c.default)(a+("/"===a[a.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i,token:t}}),p=[];let d=null;if(u&&u.data&&u.data.results&&u.data.results.length){const e=u.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(d=t.value)}return{supportedTravelModes:p,defaultTravelMode:d}}(t,e),{defaultTravelMode:a,supportedTravelModes:i}=await s;return r.defaultTravelMode=a,r.supportedTravelModes=i,r}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.h)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s.a)([Object(i.g)("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(p(u.a)){};d=Object(s.a)([Object(i.g)("esri.tasks.mixins.NAServiceDescription")],d)},452:function(e,t,r){"use strict";r.r(t);var s=r(11),o=(r(17),r(1),r(19),r(4),r(18),r(6),r(0)),a=(r(9),r(3),r(7)),n=(r(15),r(16),r(12),r(2),r(10),r(8),r(5),r(13)),i=(r(68),r(72),r(101),r(42)),l=(r(73),r(74),r(14),r(103),r(48),r(43),r(47),r(45)),c=(r(44),r(21),r(76),r(46)),u=(r(57),r(58),r(77),r(27)),p=(r(69),r(51),r(52)),d=(r(49),r(54),r(50),r(84),r(88),r(86),r(85),r(87),r(75),r(53),r(56),r(55),r(65),r(63),r(62)),f=(r(60),r(61)),y=(r(67),r(59),r(64),r(78),r(71),r(79),r(80),r(82),r(95),r(89),r(105),r(139),r(150),r(125),r(140),r(151),r(141),r(106),r(118),r(119),r(120),r(152),r(153),r(142),r(154),r(155),r(156),r(143),r(144),r(160),r(161),r(162),r(157),r(163),r(93),r(158),r(164),r(165),r(166),r(83),r(146),r(91),r(66),r(70),r(81),r(94),r(96),r(97),r(100),r(92),r(108),r(121),r(122),r(107),r(130),r(109),r(110),r(98),r(102),r(99),r(111),r(112),r(113),r(114),r(115),r(116),r(117),r(104),r(124),r(123),r(131),r(135),r(136),r(132),r(147),r(148),r(149),r(137),r(138),r(133),r(126),r(127),r(128),r(134),r(159),r(167),r(168)),b=(r(216),r(201)),O=(r(173),r(170),r(182)),j=r(202),v=r(244),g=r(345),h=(r(275),r(301)),m=r(309);r(317);function T(e){return O.default.fromJSON(e).features.map(e=>e.geometry)}let M=class extends i.b{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return T(e)}readIncidents(e){return T(e)}readPointBarriers(e,t){return T(t.barriers)}readPolylineBarriers(e){return T(e)}readPolygonBarriers(e){return T(e)}readRoutes(e){return function(e){return e.features.map(t=>{const r=c.f.fromJSON(e.spatialReference),s=y.a.fromJSON(t);return Object(o.h)(s.geometry)&&(s.geometry.spatialReference=r),s})}(e)}};Object(s.a)([Object(a.d)({type:[m.a]})],M.prototype,"directions",void 0),Object(s.a)([Object(a.d)({type:[p.a]})],M.prototype,"facilities",void 0),Object(s.a)([Object(l.a)("facilities")],M.prototype,"readFacilities",null),Object(s.a)([Object(a.d)({type:[p.a]})],M.prototype,"incidents",void 0),Object(s.a)([Object(l.a)("incidents")],M.prototype,"readIncidents",null),Object(s.a)([Object(a.d)({type:[h.a]})],M.prototype,"messages",void 0),Object(s.a)([Object(a.d)({type:[p.a]})],M.prototype,"pointBarriers",void 0),Object(s.a)([Object(l.a)("pointBarriers",["barriers"])],M.prototype,"readPointBarriers",null),Object(s.a)([Object(a.d)({type:[f.a]})],M.prototype,"polylineBarriers",void 0),Object(s.a)([Object(l.a)("polylineBarriers")],M.prototype,"readPolylineBarriers",null),Object(s.a)([Object(a.d)({type:[d.a]})],M.prototype,"polygonBarriers",void 0),Object(s.a)([Object(l.a)("polygonBarriers")],M.prototype,"readPolygonBarriers",null),Object(s.a)([Object(a.d)({type:[y.a]})],M.prototype,"routes",void 0),Object(s.a)([Object(l.a)("routes")],M.prototype,"readRoutes",null),M=Object(s.a)([Object(n.g)("esri.tasks.support.ClosestFacilitySolveResult")],M);var w=M;const B=Object(g.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});var N=r(382);let S=class extends(Object(N.a)(v.a)){constructor(e){super(e),this.url=null}solve(e,t){return async function(e,t,r){const s=[],o=[],a={},n={},i=Object(j.c)(e);return t.incidents&&t.incidents.features&&Object(g.b)(t.incidents.features,o,"incidents.features",a),t.facilities&&t.facilities.features&&Object(g.b)(t.facilities.features,o,"facilities.features",a),t.pointBarriers&&t.pointBarriers.features&&Object(g.b)(t.pointBarriers.features,o,"pointBarriers.features",a),t.polylineBarriers&&t.polylineBarriers.features&&Object(g.b)(t.polylineBarriers.features,o,"polylineBarriers.features",a),t.polygonBarriers&&t.polygonBarriers.features&&Object(g.b)(t.polygonBarriers.features,o,"polygonBarriers.features",a),Object(b.a)(o).then(e=>{for(const t in a){const r=a[t];s.push(t),n[t]=e.slice(r[0],r[1])}return Object(g.f)(n,s)?Object(g.d)(i.path):Promise.resolve({dontCheck:!0})}).then(e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||Object(g.c)(n,s);for(const e in n)n[e].forEach((r,s)=>{t.get(e)[s].geometry=r});let o={query:{...i.query,f:"json",...B.toQueryParams(t)}};return r&&(o={...r,...o}),Object(u.default)(i.path+"/solveClosestFacility",o)}).then(e=>w.fromJSON(e.data))}(this.url,e,t)}};Object(s.a)([Object(a.d)()],S.prototype,"url",void 0),S=Object(s.a)([Object(n.g)("esri.tasks.ClosestFacilityTask")],S);var R=S;t.default=R}});