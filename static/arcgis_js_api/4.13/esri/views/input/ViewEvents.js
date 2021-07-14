// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/compilerUtils ../../core/mathUtils ../../core/screenUtils ./InputHandler".split(" "),function(p,h,t,u,v,k,w){function q(g){return!!r[g]}function x(g){for(var c=0;c<g.length;c++)if(!q(g[c]))return!1;return!0}Object.defineProperty(h,"__esModule",{value:!0});h.eventTypes="click double-click immediate-click hold drag key-down key-up pointer-down pointer-move pointer-up pointer-drag mouse-wheel pointer-enter pointer-leave gamepad focus blur".split(" ");
var r={};h.eventTypes.forEach(function(g){r[g]=!0});p=function(){function g(c){this.handlers=new Map;this.counter=0;this.handlerCounts=new Map;this.view=c;this.inputManager=null}g.prototype.connect=function(c){var b=this;c&&this.disconnect();this.inputManager=c;this.handlers.forEach(function(a,f){return b.inputManager.installHandlers(f,[a])})};g.prototype.disconnect=function(){var c=this;this.inputManager&&this.handlers.forEach(function(b,a){return c.inputManager.uninstallHandlers(a)});this.inputManager=
null};g.prototype.destroy=function(){this.disconnect();this.handlers.clear();this.view=null};g.prototype.register=function(c,b,a){var f=this,e=Array.isArray(c)?c:c.split(",");if(!x(e))return e.some(q)&&console.error("Error: registering input events and other events on the view at the same time is not supported."),null;c=Array.isArray(b)?b:[];a=Array.isArray(b)?a:b;var d=this.createUniqueGroupName();b=new y(this.view,e,c,a);this.handlers.set(d,b);for(a=0;a<e.length;a++){c=e[a];var g=this.handlerCounts.get(c)||
0;this.handlerCounts.set(c,g+1)}this.inputManager&&this.inputManager.installHandlers(d,[b]);return{remove:function(){return f.removeHandler(d,e)}}};g.prototype.hasHandler=function(c){return!!this.handlerCounts.get(c)};g.prototype.removeHandler=function(c,b){if(this.handlers.has(c)){this.handlers.delete(c);for(var a=0;a<b.length;a++){var f=b[a],e=this.handlerCounts.get(f);void 0===e?console.error("Trying to remove handler for event that has no handlers registered: ",f):1===e?this.handlerCounts.delete(f):
this.handlerCounts.set(f,e-1)}}this.inputManager&&this.inputManager.uninstallHandlers(c)};g.prototype.createUniqueGroupName=function(){this.counter+=1;return"viewEvents_"+this.counter};return g}();h.ViewEvents=p;var y=function(g){function c(b,a,f,e){var d=g.call(this,!0)||this;d.view=b;for(b=0;b<a.length;b++){var c=a[b];switch(c){case "click":d.registerIncoming("click",f,function(a){return e(d.wrapClick(a))});break;case "double-click":d.registerIncoming("double-click",f,function(a){return e(d.wrapDoubleClick(a))});
break;case "immediate-click":d.registerIncoming("immediate-click",f,function(a){return e(d.wrapImmediateClick(a))});break;case "hold":d.registerIncoming("hold",f,function(a){return e(d.wrapHold(a))});break;case "drag":d.registerIncoming("drag",f,function(a){(a=d.wrapDrag(a))&&e(a)});break;case "key-down":d.registerIncoming("key-down",f,function(a){return e(d.wrapKeyDown(a))});break;case "key-up":d.registerIncoming("key-up",f,function(a){return e(d.wrapKeyUp(a))});break;case "pointer-down":d.registerIncoming("pointer-down",
f,function(a){return e(d.wrapPointer(a,"pointer-down"))});break;case "pointer-move":d.registerIncoming("pointer-move",f,function(a){return e(d.wrapPointer(a,"pointer-move"))});break;case "pointer-up":d.registerIncoming("pointer-up",f,function(a){return e(d.wrapPointer(a,"pointer-up"))});break;case "pointer-drag":d.registerIncoming("pointer-drag",f,function(a){return e(d.wrapPointerDrag(a))});break;case "mouse-wheel":d.registerIncoming("mouse-wheel",f,function(a){return e(d.wrapMouseWheel(a))});break;
case "pointer-enter":d.registerIncoming("pointer-enter",f,function(a){return e(d.wrapPointer(a,"pointer-enter"))});break;case "pointer-leave":d.registerIncoming("pointer-leave",f,function(a){return e(d.wrapPointer(a,"pointer-leave"))});break;case "gamepad":d.registerIncoming("gamepad",f,function(a){e(d.wrapGamepad(a))});break;case "focus":d.registerIncoming("focus",f,function(a){e(d.wrapFocus(a))});break;case "blur":d.registerIncoming("blur",f,function(a){e(d.wrapBlur(a))});break;default:u.neverReached(c)}}return d}
t(c,g);c.prototype.wrapFocus=function(b){return{type:"focus",timestamp:b.timestamp,native:b.data.native,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapBlur=function(b){return{type:"blur",timestamp:b.timestamp,native:b.data.native,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapClick=function(b){var a=b.data,f=a.pointerType,e=a.button,d=a.buttons,c=a.x,g=a.y,h=a.native,a=a.eventId,m=b.timestamp,l=k.createScreenPoint(c,g),n=this.view.toMap(l);return{type:"click",
pointerType:f,button:e,buttons:d,x:c,y:g,native:h,timestamp:m,screenPoint:l,mapPoint:n,eventId:a,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapDoubleClick=function(b){var a=b.data,f=a.x,c=a.y,d=a.eventId;return{type:"double-click",pointerType:a.pointerType,button:a.button,buttons:a.buttons,x:f,y:c,native:a.native,timestamp:b.timestamp,mapPoint:this.view.toMap(k.createScreenPoint(f,c)),eventId:d,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapImmediateClick=
function(b){var a=b.data,f=a.x,c=a.y,d=a.native,g=a.eventId;return{type:"immediate-click",pointerId:d.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,x:f,y:c,native:d,timestamp:b.timestamp,mapPoint:this.view.toMap(k.createScreenPoint(f,c)),eventId:g,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapHold=function(b){var a=b.data,c=a.x,e=a.y;return{type:"hold",pointerType:a.pointerType,button:a.button,buttons:a.buttons,x:c,y:e,native:a.native,timestamp:b.timestamp,
mapPoint:this.view.toMap(k.createScreenPoint(c,e)),stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapDrag=function(b){var a=b.data,c=a.center,e=c.x,c=c.y,d=a.action,g=a.pointerType,h=a.button;"start"===d&&(this.latestDragStart=a);if(this.latestDragStart){var k=a.pointer.native,m=a.buttons,l=b.timestamp,n={x:this.latestDragStart.center.x,y:this.latestDragStart.center.y};"end"===d&&(this.latestDragStart=void 0);return{type:"drag",action:d,x:e,y:c,origin:n,pointerType:g,button:h,
buttons:m,radius:a.radius,angle:v.rad2deg(a.angle),native:k,timestamp:l,stopPropagation:function(){return b.stopPropagation()}}}};c.prototype.wrapKeyDown=function(b){var a=b.data;return{type:"key-down",key:a.key,repeat:a.repeat,native:a.native,timestamp:b.timestamp,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapKeyUp=function(b){var a=b.data;return{type:"key-up",key:a.key,native:a.native,timestamp:b.timestamp,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapPointer=
function(b,a){var c=b.data,e=c.native;return{type:a,x:c.x,y:c.y,pointerId:e.pointerId,pointerType:e.pointerType,button:c.button,buttons:c.buttons,native:e,timestamp:b.timestamp,eventId:c.eventId,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapPointerDrag=function(b){var a=b.data.currentEvent;return{type:"pointer-drag",x:a.x,y:a.y,pointerId:b.data.startEvent.native.pointerId,pointerType:b.data.startEvent.native.pointerType,button:b.data.startEvent.button,buttons:a.buttons,
action:b.data.action,origin:{x:b.data.startEvent.x,y:b.data.startEvent.y},native:a.native,timestamp:b.timestamp,eventId:a.eventId,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapMouseWheel=function(b){var a=b.data;return{type:"mouse-wheel",x:a.x,y:a.y,deltaY:a.deltaY,native:a.native,timestamp:b.timestamp,stopPropagation:function(){return b.stopPropagation()}}};c.prototype.wrapGamepad=function(b){var a=b.data,c=a.state;return{type:"gamepad",device:a.device,timestamp:b.timestamp,
action:a.action,buttons:c.buttons,axes:c.axes,stopPropagation:function(){return b.stopPropagation()}}};return c}(w.InputHandler)});