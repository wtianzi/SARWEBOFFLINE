// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){let e=function(){function d(a){this.notify=a;this._accessed=new Set;this._handles=[]}var b=d.prototype;b.destroy=function(){this._accessed.clear();this.clear()};b.onObservableAccessed=function(a){this._accessed.add(a)};b.onTrackingEnd=function(){for(const a of this._accessed)this._handles.push(a.observe(this));this._accessed.clear()};b.clear=function(){for(const a of this._handles)a.remove();this._handles.length=0};return d}();c.SimpleTrackingTarget=e;Object.defineProperty(c,
"__esModule",{value:!0})});