// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../has","../metadata","../extensions"],function(l,m,x,n,t){function w(d,b){return null==b.get?function(){return this.__accessor__.getterStatic(d)}:function(){return this.__accessor__.getterComputed(d)}}function u(d){var b=d.prototype,e=b.declaredClass;b=n.getOwnClassMetadata(b).properties;t.processClassMetadatas(b,e);e={};for(const c of Object.getOwnPropertyNames(b)){const a=b[c];e[c]={enumerable:!0,configurable:!0,get:w(c,a),set(k){const f=
this.__accessor__;if(void 0===f)Object.defineProperty(this,c,{enumerable:!0,configurable:!0,writable:!0,value:k});else if(!Object.isFrozen(this)){if(f.initialized&&a.readOnly)throw new TypeError(`[accessor] cannot assign to read-only property '${c}' of ${this.declaredClass}`);if(2===f.lifecycle&&a.constructOnly)throw new TypeError(`[accessor] cannot assign to construct-only property '${c}' of ${this.declaredClass}`);f.set(c,k)}}}}Object.defineProperties(d.prototype,e)}const p=new Set,q=new Set;l.processClass=
u;l.subclass=function(d){return b=>{b.prototype.declaredClass=d;t.processPrototypeMetadatas(n.getOwnClassMetadata(b.prototype).properties,d);u(b);const e=[],c=[];for(var a=b.prototype;a;)a.hasOwnProperty("initialize")&&!p.has(a.initialize)&&(p.add(a.initialize),e.push(a.initialize)),a.hasOwnProperty("destroy")&&!q.has(a.destroy)&&(q.add(a.destroy),c.push(a.destroy)),a=Object.getPrototypeOf(a);p.clear();q.clear();a=function(k){function f(...v){var g=k.call(this,...v)||this;if(g.constructor===f&&"function"===
typeof g.postscript){e.length&&Object.defineProperty(m._assertThisInitialized(g),"initialize",{enumerable:!1,configurable:!0,value(){for(let h=e.length-1;0<=h;h--)e[h].call(this)}});if(c.length){let h=!1;Object.defineProperty(m._assertThisInitialized(g),"destroy",{enumerable:!1,configurable:!0,value(){if(!h){h=!0;for(let r=0;r<c.length;r++)c[r].call(this)}}})}g.postscript(...v)}return g}m._inheritsLoose(f,k);return f}(b);a.__accessorMetadata__=n.getOwnClassMetadata(b.prototype);a.prototype.declaredClass=
d;return a}};Object.defineProperty(l,"__esModule",{value:!0})});