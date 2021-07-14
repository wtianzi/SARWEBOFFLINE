// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,k){var g=function(){function b(a){var c=this;c._keys=[];c._values=[];c.length=0;a&&a.forEach(function(a,b){c.set(a[0],a[1])})}b.prototype.entries=function(){var a=this;return[].slice.call(this.keys().map(function(c){return[c,a.get(c)]}))};b.prototype.keys=function(){return[].slice.call(this._keys)};b.prototype.values=function(){return[].slice.call(this._values)};b.prototype.has=function(a){return-1<this._keys.indexOf(a)};b.prototype.get=function(a){a=this._keys.indexOf(a);
return-1<a?this._values[a]:void 0};b.prototype.deepGet=function(a){if(!a||!a.length)return null;var c=function(a,d){return void 0===a||null===a?null:d.length?c(a instanceof b?a.get(d[0]):a[d[0]],d.slice(1)):a};return c(this.get(a[0]),a.slice(1))};b.prototype.set=function(a,c){var b=this._keys.indexOf(a);-1<b?this._values[b]=c:(this._keys.push(a),this._values.push(c),this.length=this._values.length);return this};b.prototype.sortedSet=function(a,c,b,d){var e=this._keys.length;b=b||0;d=void 0!==d?d:
e-1;if(0===e)return this._keys.push(a),this._values.push(c),this;if(a===this._keys[b])return this._values.splice(b,0,c),this;if(a===this._keys[d])return this._values.splice(d,0,c),this;if(a>this._keys[d])return this._keys.splice(d+1,0,a),this._values.splice(d+1,0,c),this;if(a<this._keys[b])return this._values.splice(b,0,c),this._keys.splice(b,0,a),this;if(b>=d)return this;e=b+Math.floor((d-b)/2);return a<this._keys[e]?this.sortedSet(a,c,b,e-1):a>this._keys[e]?this.sortedSet(a,c,e+1,d):this};b.prototype.size=
function(){return this.length};b.prototype.clear=function(){this._keys.length=this.length=this._values.length=0;return this};b.prototype.delete=function(a){a=this._keys.indexOf(a);return-1<a?(this._keys.splice(a,1),this._values.splice(a,1),this.length=this._keys.length,!0):!1};b.prototype.forEach=function(a){var b=this;this._keys.forEach(function(c,d){a(b.get(c),c,d)})};b.prototype.map=function(a){var b=this;return this.keys().map(function(c,d){return a(b.get(c),c,d)})};b.prototype.filter=function(a){var b=
this;b._keys.forEach(function(c,d){!1===a(b.get(c),c,d)&&b.delete(c)});return this};b.prototype.clone=function(){return new b(this.entries())};return b}(),f=function(){function b(a){void 0===a&&(a=20);this.maxEntries=a;this.values=new g}b.prototype.delete=function(a){this.values.has(a)&&this.values.delete(a)};b.prototype.get=function(a){var b=null;this.values.has(a)&&(b=this.values.get(a),this.values.delete(a),this.values.set(a,b));return b};b.prototype.put=function(a,b){if(this.values.size()>=this.maxEntries){var c=
this.values.keys()[0];this.values.delete(c)}this.values.set(a,b)};return b}();return function(){function b(a){void 0===a&&(a=20);this.maxEntries=a;this._cache=new f(this.maxEntries)}b.prototype.clear=function(){this._cache=new f(this.maxEntries)};b.prototype.addToCache=function(a,b){this._cache.put(a,b)};b.prototype.removeFromCache=function(a){this._cache.delete(a)};b.prototype.getFromCache=function(a){return this._cache.get(a)};return b}()});