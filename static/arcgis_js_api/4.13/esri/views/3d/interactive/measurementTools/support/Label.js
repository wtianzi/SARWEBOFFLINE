// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../overlay/LineOverlayItem","../../../../overlay/TextOverlayItem"],function(g,h,e,f){return function(){function b(a){this._textItem=new f({visible:!1});this._calloutItem=new e({visible:!1,width:2});this._visible=!1;this._calloutVisible=!0;a&&(this.fontSize=a)}Object.defineProperty(b.prototype,"textItem",{get:function(){return this._textItem},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"calloutItem",{get:function(){return this._calloutItem},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"text",{get:function(){return this._textItem.text},set:function(a){this._textItem.text=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fontSize",{get:function(){return this._textItem.fontSize},set:function(a){this._textItem.fontSize=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{get:function(){return this._visible},set:function(a){this._visible=a;this._updateVisibility()},enumerable:!0,
configurable:!0});b.prototype.addToView=function(a){a.overlay.items.addMany([this._textItem,this._calloutItem])};b.prototype.removeFromView=function(a){a.overlay&&!a.overlay.destroyed&&a.overlay.items.removeMany([this._textItem,this._calloutItem])};b.prototype.updatePosition=function(a,b){if(b){var c=b[0]-a[0],d=b[1]-a[1];this._textItem.position=[b[0],b[1]];this._textItem.anchor=Math.abs(c)>Math.abs(d)?0<c?"left":"right":0<d?"top":"bottom";this._calloutItem.startPosition=[a[0],a[1]];this._calloutItem.endPosition=
[b[0],b[1]];this._calloutVisible=!0}else this._textItem.position=[a[0],a[1]],this._textItem.anchor="center",this._calloutVisible=!1};b.prototype._updateVisibility=function(){this._textItem.visible=this._visible;this._calloutItem.visible=this._visible&&this._calloutVisible};return b}()});