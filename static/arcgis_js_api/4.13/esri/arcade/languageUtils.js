// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports dojo/number ./FunctionWrapper ./ImmutableArray ./ImmutablePathArray ./ImmutablePointArray ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../core/promiseUtils ../geometry/support/coordsUtils ../core/maybe".split(" "),function(A,d,I,U,t,V,w,J,B,K,x,L,M,W,X,Y){function v(a,b,c){return""===b||null===b||void 0===b||b===c||b===c?a:a=a.split(b).join(c)}function C(a){return a instanceof D||a instanceof U||a instanceof
E}function N(a){return h(a)||m(a)||k(a)||n(a)||null===a||a===d.voidOperation||"number"===typeof a?!0:!1}function h(a){return"string"===typeof a||a instanceof String}function n(a){return"boolean"===typeof a}function m(a){return"number"===typeof a}function p(a){return a instanceof Array}function r(a){return a instanceof t}function k(a){return a instanceof Date}function F(a,b){if(!1===isNaN(a)){if(void 0===b||null===b||""===b)return a.toString();b=v(b,"\u2030","");b=v(b,"\u00a4","");return I.format(a,
{pattern:b})}return a.toString()}function y(a,b){a=d.MomentLibrary.Moment(a);return void 0===b||null===b||""===b?a.format():a.format(O(b))}function O(a){return a.replace(/(LTS)|L|l/g,function(a){return"["+a+"]"})}function e(a,b,c){switch(c){case "\x3e":return a>b;case "\x3c":return a<b;case "\x3e\x3d":return a>=b;case "\x3c\x3d":return a<=b}return!1}function P(a,b){if(a===b||null===a&&b===d.voidOperation||null===b&&a===d.voidOperation)return!0;if(k(a)&&k(b))return a.getTime()===b.getTime();if(a instanceof
V||a instanceof w)return a.equalityTest(b);if(a instanceof x&&b instanceof x){var c=void 0,l=void 0,c=a.cache._arcadeCacheId,l=b.cache._arcadeCacheId;if(void 0!==c&&null!==c)return c===l}return void 0!==a&&void 0!==b&&null!==a&&null!==b&&"object"===typeof a&&"object"===typeof b&&(a._arcadeCacheId===b._arcadeCacheId&&void 0!==a._arcadeCacheId&&null!==a._arcadeCacheId||a._underlyingGraphic===b._underlyingGraphic&&void 0!==a._underlyingGraphic&&null!==a._underlyingGraphic)?!0:!1}function q(a,b){if(h(a))return a;
if(null===a)return"";if(m(a))return F(a,b);if(n(a))return a.toString();if(k(a))return y(a,b);if(a instanceof B)return JSON.stringify(a.toJSON());if(p(a)){b=[];for(var c=0;c<a.length;c++)b[c]=z(a[c]);return"["+b.join(",")+"]"}if(a instanceof t){b=[];for(c=0;c<a.length();c++)b[c]=z(a.get(c));return"["+b.join(",")+"]"}return null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():C(a)?"object, Function":""}function Q(a,b){if(h(a))return a;if(null===a)return"";if(m(a))return F(a,b);if(n(a))return a.toString();
if(k(a))return y(a,b);if(a instanceof B)return a instanceof J?'{"xmin":'+a.xmin.toString()+',"ymin":'+a.ymin.toString()+","+(a.hasZ?'"zmin":'+a.zmin.toString()+",":"")+(a.hasM?'"mmin":'+a.mmin.toString()+",":"")+'"xmax":'+a.xmax.toString()+',"ymax":'+a.ymax.toString()+","+(a.hasZ?'"zmax":'+a.zmax.toString()+",":"")+(a.hasM?'"mmax":'+a.mmax.toString()+",":"")+'"spatialReference":'+G(a.spatialReference)+"}":G(a.toJSON(),function(a,b){return a.key===b.key?0:"spatialReference"===a.key?1:"spatialReference"===
b.key||a.key<b.key?-1:a.key>b.key?1:0});if(p(a)){b=[];for(var c=0;c<a.length;c++)b[c]=z(a[c]);return"["+b.join(",")+"]"}if(a instanceof t){b=[];for(c=0;c<a.length();c++)b[c]=z(a.get(c));return"["+b.join(",")+"]"}return null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():C(a)?"object, Function":""}function z(a){return null===a?"null":n(a)||m(a)||h(a)?JSON.stringify(a):a instanceof B||a instanceof t||a instanceof Array?Q(a):a instanceof Date?JSON.stringify(y(a,"")):null!==a&&"object"===
typeof a&&void 0!==a.castToText?a.castToText():"null"}function g(a,b){return m(a)?a:null===a||""===a?0:k(a)?NaN:n(a)?a?1:0:p(a)||""===a||void 0===a?NaN:void 0!==b&&h(a)?(b=v(b,"\u2030",""),b=v(b,"\u00a4",""),I.parse(a,{pattern:b})):a===d.voidOperation?0:Number(a)}function R(a,b){var c;b.fields.some(function(b){b.name===a&&(c=b.domain);return!!c});return c}function G(a,b){b||(b={});"function"===typeof b&&(b={cmp:b});var c="boolean"===typeof b.cycles?b.cycles:!1,d=b.cmp&&function(a){return function(b){return function(c,
d){return a({key:c,value:b[c]},{key:d,value:b[d]})}}}(b.cmp),f=[];return function S(a){a&&a.toJSON&&"function"===typeof a.toJSON&&(a=a.toJSON());if(void 0!==a){if("number"===typeof a)return isFinite(a)?""+a:"null";if("object"!==typeof a)return JSON.stringify(a);var b,l;if(Array.isArray(a)){l="[";for(b=0;b<a.length;b++)b&&(l+=","),l+=S(a[b])||"null";return l+"]"}if(null===a)return"null";if(-1!==f.indexOf(a)){if(c)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON");
}var e=f.push(a)-1,g=Object.keys(a).sort(d&&d(a));l="";for(b=0;b<g.length;b++){var h=g[b],k=S(a[h]);k&&(l&&(l+=","),l+=JSON.stringify(h)+":"+k)}f.splice(e,1);return"{"+l+"}"}}(a)}function u(a,b){if(b instanceof x)a.push(b.hasZ?b.hasM?[b.x,b.y,b.z,b.m]:[b.x,b.y,b.z]:[b.x,b.y]);else throw Error("Invalid Argument");}Object.defineProperty(d,"__esModule",{value:!0});A=function(){return function(a){this.value=a}}();d.ReturnResultE=A;var T=function(){return function(a){this.value=a}}();d.ImplicitResultE=
T;var D=function(){return function(a){this.fn=a}}();d.NativeFunctionE=D;var E=function(){return function(a){this.fn=a}}();d.SizzleFunctionE=E;d.NativeFunction=D;d.ImplicitResult=T;d.ReturnResult=A;d.SizzleFunction=E;d.voidOperation={type:"VOID"};d.breakResult={type:"BREAK"};d.continueResult={type:"CONTINUE"};d.multiReplace=v;d.isFunctionParameter=C;d.isSimpleType=N;d.defaultUndefined=function(a,b){return void 0===a?b:a};d.isString=h;d.isBoolean=n;d.isNumber=m;d.isArray=p;d.isFeatureSet=function(a){return!0===
(a&&a.declaredRootClass&&"esri.arcade.featureset.support.FeatureSet"===a.declaredRootClass)};d.isFeatureSetCollection=function(a){return!0===(a&&a.declaredRootClass&&"esri.arcade.featureSetCollection"===a.declaredRootClass)};d.isImmutableArray=r;d.isDate=k;d.pcCheck=function(a,b,c){if(a.length<b||a.length>c)throw Error("Function called with wrong number of Parameters");};d.generateUUID=function(){var a=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=
(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"===b?c:c&3|8).toString(16)})};d.formatNumber=F;d.formatDate=y;d.standardiseDateFormat=O;d.greaterThanLessThan=function(a,b,c){if(null===a){if(null===b||b===d.voidOperation)return e(null,null,c);if(m(b))return e(0,b,c);if(h(b)||n(b))return e(0,g(b),c);if(k(b))return e(0,b.getTime(),c)}if(a===d.voidOperation){if(null===b||b===d.voidOperation)return e(null,null,c);if(m(b))return e(0,b,c);if(h(b)||n(b))return e(0,g(b),c);if(k(b))return e(0,b.getTime(),
c)}else if(m(a)){if(m(b))return e(a,b,c);if(n(b))return e(a,g(b),c);if(null===b||b===d.voidOperation)return e(a,0,c);if(h(b))return e(a,g(b),c);if(k(b))return e(a,b.getTime(),c)}else if(h(a)){if(h(b))return e(q(a),q(b),c);if(k(b))return e(g(a),b.getTime(),c);if(m(b))return e(g(a),b,c);if(null===b||b===d.voidOperation)return e(g(a),0,c);if(n(b))return e(g(a),g(b),c)}else if(k(a)){if(k(b))return e(a,b,c);if(null===b||b===d.voidOperation)return e(a.getTime(),0,c);if(m(b))return e(a.getTime(),b,c);if(n(b)||
h(b))return e(a.getTime(),g(b),c)}else if(n(a)){if(n(b))return e(a,b,c);if(m(b))return e(g(a),g(b),c);if(k(b))return e(g(a),b.getTime(),c);if(null===b||b===d.voidOperation)return e(g(a),0,c);if(h(b))return e(g(a),g(b),c)}return!P(a,b)||"\x3c\x3d"!==c&&"\x3e\x3d"!==c?!1:!0};d.equalityTest=P;d.toString=q;d.toNumberArray=function(a){var b=[];if(!1===p(a))return null;if(a instanceof t){for(var c=0;c<a.length();c++)b[c]=g(a.get(c));return b}for(c=0;c<a.length;c++)b[c]=g(a[c]);return b};d.toStringExplicit=
Q;d.toNumber=g;d.toDate=function(a,b){return k(a)?a:h(a)&&(a=d.MomentLibrary.Moment(a,[void 0===b||null===b||""===b?d.MomentLibrary.Moment.ISO_8601:b]),a.isValid())?a.toDate():null};d.toDateM=function(a,b){return k(a)?d.MomentLibrary.Moment(a):h(a)&&(a=d.MomentLibrary.Moment(a,[void 0===b||null===b||""===b?d.MomentLibrary.Moment.ISO_8601:b]),a.isValid())?a:null};d.toBoolean=function(a){return n(a)?a:h(a)?(a=a.toLowerCase(),"true"===a?!0:!1):m(a)?0===a||isNaN(a)?!1:!0:!1};d.fixSpatialReference=function(a,
b){if(Y.isNone(a))return null;if(null===a.spatialReference||void 0===a.spatialReference)a.spatialReference=b;return a};d.fixNullGeometry=function(a){return null===a?null:a instanceof x?"NaN"===a.x||null===a.x||isNaN(a.x)?null:a:a instanceof L?0===a.rings.length?null:a:a instanceof M?0===a.paths.length?null:a:a instanceof K?0===a.points.length?null:a:a instanceof J?"NaN"===a.xmin||null===a.xmin||isNaN(a.xmin)?null:a:null};d.getDomainValue=function(a,b){if(!a||!a.domain)return b;var c=null;b="string"===
a.field.type||"esriFieldTypeString"===a.field.type?q(b):g(b);for(var d=0;d<a.domain.codedValues.length;d++){var f=a.domain.codedValues[d];f.code===b&&(c=f)}return null===c?b:c.name};d.getDomainCode=function(a,b){if(!a||!a.domain)return b;var c=null;b=q(b);for(var d=0;d<a.domain.codedValues.length;d++){var f=a.domain.codedValues[d];f.name===b&&(c=f)}return null===c?b:c.code};d.getDomain=function(a,b,c,d){void 0===c&&(c=null);if(!b||!b.fields)return null;for(var f=null,l=0;l<b.fields.length;l++){var e=
b.fields[l];e.name.toLowerCase()===a.toString().toLowerCase()&&(f=e)}if(null===f)throw Error("Field not found");var g,h;d||(d=c&&b.typeIdField&&c._field(b.typeIdField));null!=d&&b.types.some(function(a){return a.id===d?((g=a.domains&&a.domains[f.name])&&"inherited"===g.type&&(g=R(f.name,b),h=!0),!0):!1});h||g||(g=R(a,b));return{field:f,domain:g}};d.stableStringify=G;d.autoCastFeatureToGeometry=function(a){if(null===a)return null;for(var b=[],c=0;c<a.length;c++){var d=a[c];d&&d.declaredClass&&"esri.arcade.Feature"===
d.declaredClass?b.push(d.geometry()):b.push(d)}return b};d.autoCastArrayOfPointsToPolygon=function(a,b){if(p(a)||r(a)){var c=!1,d=!1,f=[];if(p(a)){for(var e=0;e<a.length;e++){var g=a[e];u(f,g)}0<f.length&&(b=a[0].spatialReference,c=a[0].hasZ,d=a[0].hasM)}else if(a instanceof w)f=a._elements,0<f.length&&(c=a._hasZ,d=a._hasM,b=a.get(0).spatialReference);else if(r(a)){for(var e=0,h=a.toArray();e<h.length;e++)g=h[e],u(f,g);0<f.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,d=!0===a.get(0).hasM)}else throw Error("Invalid Argument");
if(0===f.length)return null;!1===X.isClockwise(f,d,c)&&(f=f.slice(0).reverse());return new L({rings:[f],spatialReference:b,hasZ:c,hasM:d})}return a};d.autoCastArrayOfPointsToPolyline=function(a,b){if(p(a)||r(a)){var c=!1,d=!1,f=[];if(p(a)){for(var e=0;e<a.length;e++){var g=a[e];u(f,g)}0<f.length&&(b=a[0].spatialReference,c=!0===a[0].hasZ,d=!0===a[0].hasM)}else if(a instanceof w)f=a._elements,0<f.length&&(c=a._hasZ,d=a._hasM,b=a.get(0).spatialReference);else if(r(a)){for(var e=0,h=a.toArray();e<h.length;e++)g=
h[e],u(f,g);0<f.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,d=!0===a.get(0).hasM)}return 0===f.length?null:new M({paths:[f],spatialReference:b,hasZ:c,hasM:d})}return a};d.autoCastArrayOfPointsToMultiPoint=function(a,b){if(p(a)||r(a)){var c=!1,d=!1,f=[];if(p(a)){for(var e=0;e<a.length;e++){var g=a[e];u(f,g)}0<f.length&&(b=a[0].spatialReference,c=!0===a[0].hasZ,d=!0===a[0].hasM)}else if(a instanceof w)f=a._elements,0<f.length&&(c=a._hasZ,d=a._hasM,b=a.get(0).spatialReference);else if(r(a)){for(var e=
0,h=a.toArray();e<h.length;e++)g=h[e],u(f,g);0<f.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,d=!0===a.get(0).hasM)}return 0===f.length?null:new K({points:f,spatialReference:b,hasZ:c,hasM:d})}return a};d.toStringArray=function(a,b){void 0===b&&(b=!1);var c=[];if(null===a)return c;if(!0===p(a)){for(var d=0;d<a.length;d++){var e=q(a[d]);""===e&&!0!==b||c.push(e)}return c}if(a instanceof t){for(d=0;d<a.length();d++)e=q(a.get(d)),""===e&&!0!==b||c.push(e);return c}return N(a)?(e=q(a),""===
e&&!0!==b||c.push(e),c):[]};var H=0;d.tick=function(a){H++;return 0===H%100?(H=0,W.create(function(b,c){setTimeout(function(){b(a)},0)})):a};d.MomentLibrary={Moment:null}});