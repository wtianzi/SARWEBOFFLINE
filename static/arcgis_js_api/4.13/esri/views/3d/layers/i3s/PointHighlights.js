// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/iteratorUtils","../../../../core/maybe","../../webgl-engine/lib/HighlightUtils"],function(d,f,g,h,k){Object.defineProperty(f,"__esModule",{value:!0});d=function(){function a(b){this.context=b;this.highlights=new Set}Object.defineProperty(a.prototype,"hasHighlights",{get:function(){return 0<this.highlights.size},enumerable:!0,configurable:!0});a.prototype.destroy=function(){this.highlights=null};a.prototype.add=function(b,c){var e=this,a=new l(b,c);this.highlights.add(a);
this.enableSet(a);return{remove:function(){return e.removeSet(a)},pause:function(){e.disableSet(a)},resume:function(){e.enableSet(a)}}};a.prototype.removeSet=function(b){this.disableSet(b);this.highlights.delete(b)};a.prototype.enableSet=function(b){var c=this;b.enabled||(b.enabled=!0,this.context.forEachNode(function(a){return c.enableSetForNode(b,a)}))};a.prototype.enableSetForNode=function(b,c){var a=this;if(b.enabled){var d=b.ids.get(c.id);d&&d.forEach(function(e){return a.context.addHighlight(c,
e,b.options,b.id)})}};a.prototype.disableSet=function(b){var a=this;b.enabled&&(b.enabled=!1,this.context.forEachNode(function(c){return a.disableSetForNode(b,c)}))};a.prototype.disableSetForNode=function(b,a){b.enabled||this.context.removeHighlight(a,b.id)};a.prototype.nodeAdded=function(b){var a=this;this.highlights.forEach(function(c){return a.enableSetForNode(c,b)})};a.prototype.nodeRemoved=function(b){var a=this;this.highlights.forEach(function(c){return a.disableSetForNode(c,b)})};a.prototype.removeAll=
function(){var b=this;this.highlights.forEach(function(a){return b.disableSet(a)})};return a}();f.PointHighlights=d;var l=function(){function a(a,c){this.options=c;this.id=k.generateHighlightId();this.ids=new Map;this.enabled=!1;for(c=0;c<a.length;c++){var b=a[c];h.isSome(b)&&this.add(b.nodeId,b.pointId)}}a.prototype.add=function(a,c){var b=this.ids.get(a);b?b.add(c):this.ids.set(a,g.SetFromValues([c]))};return a}()});