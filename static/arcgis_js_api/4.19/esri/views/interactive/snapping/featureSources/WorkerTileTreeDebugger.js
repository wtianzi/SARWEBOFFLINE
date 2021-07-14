// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/handleUtils ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../geometry/Polygon ../../../../core/Handles ../../../../geometry/support/aaBoundingRect ../../../support/TileTreeDebugger".split(" "),
function(c,p,h,A,B,C,q,r,D,t,E,F,G,u,v,w,x){c.WorkerTileTreeDebugger=function(k){function f(b){b=k.call(this,b)||this;b.handles=new v;return b}p._inheritsLoose(f,k);var d=f.prototype;d.initialize=function(){const b=setInterval(()=>this.fetchDebugInfo(),2E3);this.handles.add(q.makeHandle(()=>clearInterval(b)))};d.destroy=function(){this.handles.destroy()};d.getTiles=function(){if(!this.debugInfo)return[];const b=new Map,l=new Map;this.debugInfo.storedTiles.forEach(a=>{b.set(a.data.id,a.featureCount)});
this.debugInfo.pendingTiles.forEach(a=>{b.set(a.data.id,a.featureCount);l.set(a.data.id,a.state)});const g=new Map;this.debugInfo.storedTiles.forEach(a=>{g.set(a.data.id,a.data)});this.debugInfo.pendingTiles.forEach(a=>{g.set(a.data.id,a.data)});return Array.from(g.values()).map(a=>{var y=[a.level,a.row,a.col],z=u.fromExtent(w.toExtent(a.extent,this.view.spatialReference)),e;{a=a.id;const m=l.get(a),n=null!=(e=b.get(a))?e:"?";e=m?`${m}:${n}\n${a}`:`store:${n}\n${a}`}return{lij:y,geometry:z,label:e}})};
d.fetchDebugInfo=function(){this.handle.getDebugInfo(null).then(b=>{this.debugInfo=b;this.update()})};return f}(x.TileTreeDebugger);h.__decorate([r.property({constructOnly:!0})],c.WorkerTileTreeDebugger.prototype,"handle",void 0);c.WorkerTileTreeDebugger=h.__decorate([t.subclass("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],c.WorkerTileTreeDebugger);Object.defineProperty(c,"__esModule",{value:!0})});