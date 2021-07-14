// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/arrayUtils","../../../support/Scheduler"],function(k,l,m){let n=function(){function f(a){this.referenceCount=0;this.callbacks=[];this.runIndex=0;this.handle=a.registerTask(m.Task.I3S_CONTROLLER,e=>this.update(e),()=>this.needsUpdate())}var b=f.prototype;b.destroy=function(){this.handle&&(this.handle.remove(),this.handle=null)};b.needsUpdate=function(){for(const a of this.callbacks)if(a.needsUpdate())return!0;return!1};b.update=function(a){this.sort();const e=this.callbacks,
g={numIndexLoading:0,numNodesLoading:0};for(let c=0;c<e.length&&!a.done;++c)e[c].priority=e[c].update(a,g),this.runIndex=c};b.sort=function(){const a=this.callbacks;let e=a.length;for(let g=this.runIndex;0<g;g--){const c=a[g-1];let d=g;for(;d<a.length&&c.priority<=a[d].priority&&(d!==e||c.priority<a[d].priority);)a[d-1]=a[d],d++;a[d-1]=c;e=d-1}this.runIndex=0};b.add=function(a){this.sort();a.priority=Infinity;this.callbacks.unshift(a)};b.remove=function(a){l.removeUnordered(this.callbacks,a);this.runIndex=
this.callbacks.length;this.sort()};return f}();const h=new Map;k.addTask=function(f,b){let a=h.get(f);null==a&&(a=new n(f),h.set(f,a));a.add(b);return{remove:()=>{null!=a&&(a.remove(b),0<a.callbacks.length||(h.delete(f),a.destroy()),a=null)}}};Object.defineProperty(k,"__esModule",{value:!0})});