// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","./ObservationHandle"],function(b,g){let l=function(){function c(){this._observers=new Set}var d=c.prototype;d.observe=function(a){return new g.ObservationHandle(this._observers.add(a),a)};d.notify=function(){var a=this._observers;const e=this._observers.size,f=Array(e);let h=0;for(const k of a)f[h++]=k;for(a=0;a<e;a++)f[a].notify()};return c}();b.SimpleObservable=l;Object.defineProperty(b,"__esModule",{value:!0})});