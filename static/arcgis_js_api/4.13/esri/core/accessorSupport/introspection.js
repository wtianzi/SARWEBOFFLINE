// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ./ensureType ./extensions ./metadata ./utils ./decorators/cast".split(" "),function(u,m,g,n,k,p,q){function r(a,f){return function(b){b=+a(b);null!=f.min&&(b=Math.max(f.min,b));null!=f.max&&(b=Math.min(f.max,b));return b}}function t(a,f){return null==f.get?function(){return this.__accessor__?this.__accessor__.getterStatic(a,f):f.value}:function(){return this.__accessor__?this.__accessor__.getterComputed(a,f):f.value}}Object.defineProperty(m,"__esModule",{value:!0});m.processPrototype=
function(a){var f=a.declaredClass,b=a.properties||{},e;for(e in b){var c=b[e],d=typeof c;null==c?k.setPropertyMetadata(a,e,{value:c}):Array.isArray(c)?k.setPropertyMetadata(a,e,{type:[c[0]],value:null}):"object"===d?p.getProperties(c)||c instanceof Date?k.setPropertyMetadata(a,e,{type:c.constructor,value:c}):k.setPropertyMetadata(a,e,c):"boolean"===d?k.setPropertyMetadata(a,e,{type:Boolean,value:c}):"string"===d?k.setPropertyMetadata(a,e,{type:String,value:c}):"number"===d?k.setPropertyMetadata(a,
e,{type:Number,value:c}):"function"===d&&k.setPropertyMetadata(a,e,{type:c,value:null})}a=k.getPropertiesMetadata(a);for(e in a){b=a[e];d=b.type;c=b.types;if(!b.cast)if(d){c=b;var l=0,h=d;if(g.isLongFormType(d))d=g.ensureLongFormType(d);else{for(;Array.isArray(h)&&1===h.length&&"string"!==typeof h[0]&&"number"!==typeof h[0];)h=h[0],l++;d=g.isOneOf(h)?0===l?g.ensureOneOf(h):g.ensureNArrayTyped(g.ensureOneOf(h),l):1===l?g.ensureArray(h):1<l?g.ensureNArray(h,l):g.ensureType(d)}c.cast=d}else c&&(Array.isArray(c)?
b.cast=g.ensureArrayTyped(g.ensureOneOfType(c[0])):b.cast=g.ensureOneOfType(c));b.range&&(b.cast=r(b.cast,b.range))}n.processPrototypeMetadatas(a,f);return a};m.processClass=function(a){for(var f=a.prototype,b=f.declaredClass,e=a._meta.bases,c={},d=e.length-1;0<=d;d--)k.merge(c,k.getMetadata(e[d].prototype));var g=c.properties;n.processClassMetadatas(g,b);Object.defineProperty(a,"__accessorMetadata__",{value:{properties:g,autoDestroy:!!c.autoDestroy}});for(var h={},b=function(a){var b=g[a];h[a]={enumerable:!0,
configurable:!0,get:t(a,b),set:function(c){var d=this.__accessor__;if(!d)Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:c});else if(!Object.isFrozen(this)){if(d.initialized&&b.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+a+"' of "+this.declaredClass);if(2===d.lifecycle&&b.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+a+"' of "+this.declaredClass);d.set(a,c)}}}},e=0,d=Object.getOwnPropertyNames(g);e<
d.length;e++)b(d[e]);Object.defineProperties(a.prototype,h);if(c.parameters)for(a=0,b=Object.getOwnPropertyNames(c.parameters);a<b.length;a++)e=b[a],d=Object.getOwnPropertyDescriptor(f,e)||{value:f[e]},(d=q.autocastMethod(f,e,d))&&Object.defineProperty(f,e,d);return c}});