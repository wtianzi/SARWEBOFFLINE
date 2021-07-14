// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/promiseUtils"],function(c,e){let f=function(){function a(){this._resolver=null}var b=a.prototype;b.isHeld=function(){return!!this._resolver};b.acquire=async function(){if(!this._resolver)return this._resolver=e.createResolver(),Promise.resolve();await this._resolver.promise;await this.acquire()};b.release=function(){const d=this._resolver;this._resolver=null;d.resolve()};return a}();c.default=f;c.withLock=async function(a,b,d){try{await a.acquire(),await b(d),
a.release()}catch(g){throw a.release(),g;}};Object.defineProperty(c,"__esModule",{value:!0})});