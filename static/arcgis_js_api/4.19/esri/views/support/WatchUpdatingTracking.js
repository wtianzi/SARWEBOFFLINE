// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/accessorSupport/get ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../core/scheduling ../../core/accessorSupport/trackingUtils ../../core/Accessor ../../core/Handles ../../core/watchUtils".split(" "),function(h,p,m,q,r,t,u,v,w,x,y,k){h.WatchUpdatingTracking=function(n){function l(){var a=n.apply(this,arguments)||this;a.updating=!1;a.handleId=0;
a.handles=new y;a.scheduleHandleId=0;a.pendingPromises=new Set;return a}p._inheritsLoose(l,n);var e=l.prototype;e.destroy=function(){this.removeAll();this.handles.destroy()};e.add=function(a,b,c,d=0){const f=0!==(d&1),g=++this.handleId;f||this.installSyncUpdatingWatch(a,b,g);a=0!==(d&2)?k.init(a,b,c,f):a.watch(b,c,f);this.handles.add(a,g);return{remove:()=>{this.handles.remove(g)}}};e.addOnCollectionPropertyChange=function(a,b,c,d=0){d=0!==(d&2);const f=++this.handleId;this.handles.add([k.on(a,b,
"after-changes",this.createSyncUpdatingCallback()),k.on(a,b,"change",c,d?g=>{c({added:g.items,removed:[],moved:[],target:g})}:void 0)],f);return{remove:()=>{this.handles.remove(f)}}};e.addOnCollectionChange=function(a,b,c=0){c=0!==(c&2);const d=++this.handleId;this.handles.add([a.on("after-changes",this.createSyncUpdatingCallback()),a.on("change",b)],d);c&&b({added:a.items,removed:[],moved:[],target:a});return{remove:()=>{this.handles.remove(d)}}};e.addPromise=function(a){if(q.isNone(a))return a;
const b=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(a)&&(0!==this.pendingPromises.size||this.handles.has(-42)||this._set("updating",!1))}},b);this.pendingPromises.add(a);this._set("updating",!0);const c=()=>this.handles.remove(b);a.then(c,c);return a};e.removeAll=function(){this.pendingPromises.clear();this.handles.removeAll();this._set("updating",!1)};e.installSyncUpdatingWatch=function(a,b,c){var d=this.createSyncUpdatingCallback();d=w.reaction(()=>r.valueOf(a,b),d);
this.handles.add(d,c);return d};e.createSyncUpdatingCallback=function(){return()=>{this.handles.remove(-42);++this.scheduleHandleId;const a=this.scheduleHandleId;this._get("updating")||this._set("updating",!0);this.handles.add(v.schedule(()=>{a===this.scheduleHandleId&&(this._set("updating",0<this.pendingPromises.size),this.handles.remove(-42))}),-42)}};return l}(x);m.__decorate([t.property({readOnly:!0})],h.WatchUpdatingTracking.prototype,"updating",void 0);h.WatchUpdatingTracking=m.__decorate([u.subclass("esri.views.support.WatchUpdatingTracking")],
h.WatchUpdatingTracking);Object.defineProperty(h,"__esModule",{value:!0})});