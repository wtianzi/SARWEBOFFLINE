// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../core/urlUtils"],function(f,l){function h(a,d,k){const e={};for(const c in a)if("declaredClass"!==c){var b=a[c];if(null!=b&&"function"!==typeof b)if(Array.isArray(b)){e[c]=[];for(let g=0;g<b.length;g++)e[c][g]=h(b[g])}else"object"===typeof b?b.toJSON?(b=b.toJSON(k&&k[c]),e[c]=d?b:JSON.stringify(b)):e[c]=d?b:JSON.stringify(b):e[c]=b}return e}f.asValidOptions=function(a,d){a={query:a};d&&(a={...d,...a},a.query={...a.query,...d.query});return a};f.encode=h;f.parseUrl=function(a){return"string"===
typeof a?l.urlToObject(a):a};Object.defineProperty(f,"__esModule",{value:!0})});