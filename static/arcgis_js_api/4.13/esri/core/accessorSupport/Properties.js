// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../has ../lang ../Logger ../ObjectPool ./extensions ./PropertyOrigin ./Store".split(" "),function(g,h,k,l,m,n,p,e,q){Object.defineProperty(h,"__esModule",{value:!0});m.getLogger("esri.core.accessorSupport.Properties");g=function(){function d(a){this.host=a;this._origin=e.OriginId.USER;this.ctorArgs=this.cursors=null;this.destroyed=!1;this.dirties={};this.lifecycle=0;this.overridden=null;this.store=new q.default;a=this.host.constructor.__accessorMetadata__;this.metadatas=a.properties;
this.autoDestroy=a.autoDestroy}d.prototype.initialize=function(){this.lifecycle=1;p.instanceCreated(this.host,this.metadatas)};d.prototype.constructed=function(){this.lifecycle=2};d.prototype.destroy=function(){this.destroyed=!0;var a=this.cursors;if(a)for(var b=0,c=Object.getOwnPropertyNames(a);b<c.length;b++){var d=c[b],e=a[d];if(e){for(;0<e.length;)e.pop().propertyDestroyed(this,d);a[d]=null}}if(this.autoDestroy)for(d in this.metadatas)(a=this.internalGet(d))&&a&&"function"===typeof a.destroy&&
(a.destroy(),this.metadatas[d].nonNullable||this.internalSet(d,null))};Object.defineProperty(d.prototype,"initialized",{get:function(){return 0!==this.lifecycle},enumerable:!0,configurable:!0});d.prototype.clearOverride=function(a){this.isOverridden(a)&&(this.overridden[a]=!1,this.propertyInvalidated(a))};d.prototype.get=function(a){var b=this.metadatas[a],c=b.get;return!this.store.has(a)||c&&this.dirties[a]?c?(b=c.call(this.host),this.store.set(a,b,e.OriginId.COMPUTED),this.propertyCommitted(a),
b):b.value:this.store.get(a)};d.prototype.getterStatic=function(a,b){return this.store.has(a)?this.store.get(a):b.value};d.prototype.getterComputed=function(a,b){if(this.store.has(a)&&!this.dirties[a])return this.store.get(a);b=b.get.call(this.host);this.store.set(a,b,e.OriginId.COMPUTED);this.propertyCommitted(a);return b};d.prototype.originOf=function(a){var b=this.store.originOf(a);return void 0===b&&(a=this.metadatas[a])&&a.hasOwnProperty("value")?"defaults":e.idToName(b)};d.prototype.has=function(a){return this.metadatas[a]?
this.store.has(a):!1};d.prototype.internalGet=function(a){if(this.metadatas[a]){var b=this.store;return b.has(a)?b.get(a):this.metadatas[a].value}};d.prototype.internalSet=function(a,b){if(this.metadatas[a]){var c=this.initialized?this._origin:e.OriginId.DEFAULTS,d=this.store.get(a);l.equals(b,d)&&c===this.store.originOf(a)&&this.store.has(a,c)&&!this.isOverridden(a)||(this.propertyInvalidated(a),this.store.set(a,b,c),this.propertyCommitted(a))}};d.prototype.isOverridden=function(a){return null!=
this.overridden&&!0===this.overridden[a]};d.prototype.keys=function(){return Object.keys(this.metadatas)};d.prototype.override=function(a,b){if(this.metadatas[a]){this.overridden||(this.overridden={});var c=this.metadatas[a];if(!c.nonNullable||null!=b){if(c=c.cast){b=this.cast(c,b);var c=b.valid,d=b.value;f.release(b);if(!c)return;b=d}this.overridden[a]=!0;this.internalSet(a,b)}}};d.prototype.set=function(a,b){if(this.metadatas[a]){var c=this.metadatas[a];if(!c.nonNullable||null!=b){var d=c.set;if(c=
c.cast){b=this.cast(c,b);var c=b.valid,e=b.value;f.release(b);if(!c)return;b=e}d?d.call(this.host,b):this.internalSet(a,b)}}};d.prototype.setDefaultOrigin=function(a){this._origin=e.nameToId(a)};d.prototype.propertyInvalidated=function(a){var b=this.dirties;this.isOverridden(a)||(b[a]=!0);if(b=this.cursors&&this.cursors[a])for(var c=0;c<b.length;c++)b[c].propertyInvalidated(this,a)};d.prototype.propertyCommitted=function(a){var b=this.cursors&&this.cursors[a];this.dirties[a]=!1;if(b)for(var c=0;c<
b.length;c++)b[c].propertyCommitted(this,a)};d.prototype.addCursor=function(a,b){this.cursors||(this.cursors={});var c=this.cursors[a];c||(this.cursors[a]=c=[]);c.push(b)};d.prototype.removeCursor=function(a,b){var c=this.cursors[a];this.cursors[a]&&(c.splice(c.indexOf(b),1),0===c.length&&(this.cursors[a]=null))};d.prototype.cast=function(a,b){var c=f.acquire();c.valid=!0;c.value=b;a&&(c.value=a.call(this.host,b,c));return c};return d}();k=function(){function d(){this.value=null;this.valid=!0}d.prototype.acquire=
function(){this.valid=!0};d.prototype.release=function(){this.value=null};return d}();var f=new n(k);h.default=g});