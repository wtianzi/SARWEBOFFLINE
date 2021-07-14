/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../core/lang.js";import e from"../layers/support/CodedValueDomain.js";import r from"../layers/support/Domain.js";import a from"../layers/support/InheritedDomain.js";import n from"../layers/support/RangeDomain.js";var o;function t(e,r){switch(e.type){case"range":{const a="range"in e?e.range[0]:e.minValue,n="range"in e?e.range[1]:e.maxValue;if(+r<a||+r>n)return o.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==r)))return o.INVALID_CODED_VALUE}return null}!function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(o||(o={}));const i={key:"type",base:r,typeMap:{range:n,"coded-value":e,inherited:a}};function u(e){if(!e||"range"!==e.type)return;return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}function l(r){if(!r||!r.type)return null;switch(r.type){case"range":return n.fromJSON(r);case"codedValue":return e.fromJSON(r);case"inherited":return a.fromJSON(r)}return null}export{o as D,l as f,u as g,i as t,t as v};
