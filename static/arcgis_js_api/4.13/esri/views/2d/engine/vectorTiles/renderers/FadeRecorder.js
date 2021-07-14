// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/now"],function(g,h,k){Object.defineProperty(h,"__esModule",{value:!0});(function(){return function(e,a){this.level=e;this.now=a}})();g=function(){return function(e,a,f,c){this.fadeSpeed=e;this.minfadeLevel=a;this.maxfadeLevel=f;this.fadeChange=c}}();h.FadeProperties=g;g=function(){function e(a){void 0===a&&(a=300);this._levelSnapshots=[];this._duration=a}e.prototype.recordLevel=function(a){var f=k(),c=this._levelSnapshots;0===c.length&&(c.push({level:a,
now:0}),c.push({level:a,now:0}));2!==c.length&&c[0].level===a||c.push({level:a,now:f})};e.prototype.needsRedraw=function(){if(0===this._levelSnapshots.length)return!1;for(var a=this._duration,f=this._levelSnapshots,c=f.length,b=f[c-1],d=-1;c>d+1&&f[d+1].now+a<b.now;)d++;for(0>d&&(d=0);d<c;d++)if(f[d].level!==b.level)return!0;return!1};e.prototype.getFadeValues=function(a){void 0===a&&(a=!1);for(var f=this._duration,c=k(),b=this._levelSnapshots;3<b.length&&b[1].now+f<c;)b.shift();b[1].now+f<c&&(b[0].level=
b[1].level);var d=b[0].level,e=b[b.length-1],g=e.level,h=Math.min(d,g),d=Math.max(d,g),b=(e.level-b[1].level)/((e.now-b[1].now)/f);return a?{fadeSpeed:0,minfadeLevel:h,maxfadeLevel:d,fadeChange:0}:{fadeSpeed:b,minfadeLevel:h,maxfadeLevel:d,fadeChange:(c-e.now)/f*b}};return e}();h.FadeRecorder=g});