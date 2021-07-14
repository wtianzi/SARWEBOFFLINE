// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ../../geometry/SpatialReference ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils ../../geometry ../../Graphic ./NAMessage".split(" "),
function(q,c,b,r,A,B,g,C,h,t,D,E,F,u,v,n,w,x,y,G,m,z){function p(e){return e.features.map(d=>{const f=v.fromJSON(e.spatialReference);d=m.fromJSON(d);r.unwrap(d.geometry).spatialReference=f;return d})}function l(e){return e.features.map(d=>{d.geometry.spatialReference=e.spatialReference;return y.fromJSON(d.geometry)})}b=function(e){function d(a){a=e.call(this,a)||this;a.facilities=null;a.messages=null;a.pointBarriers=null;a.polylineBarriers=null;a.polygonBarriers=null;a.serviceAreaPolylines=null;a.serviceAreaPolygons=
null;return a}q._inheritsLoose(d,e);var f=d.prototype;f.readFacilities=function(a){return l(a)};f.readPointBarriers=function(a,k){return l(k.barriers)};f.readPolylineBarriers=function(a){return l(a)};f.readPolygonBarriers=function(a){return l(a)};f.readIncidents=function(a,k){return p(k.saPolylines)};f.readServiceAreaPolygons=function(a,k){return p(k.saPolygons)};return d}(u.JSONSupport);c.__decorate([g.property({type:[n]})],b.prototype,"facilities",void 0);c.__decorate([h.reader("facilities")],b.prototype,
"readFacilities",null);c.__decorate([g.property({type:[z]})],b.prototype,"messages",void 0);c.__decorate([g.property({type:[n]})],b.prototype,"pointBarriers",void 0);c.__decorate([h.reader("pointBarriers",["barriers"])],b.prototype,"readPointBarriers",null);c.__decorate([g.property({type:[x]})],b.prototype,"polylineBarriers",void 0);c.__decorate([h.reader("polylineBarriers")],b.prototype,"readPolylineBarriers",null);c.__decorate([g.property({type:[w]})],b.prototype,"polygonBarriers",void 0);c.__decorate([h.reader("polygonBarriers")],
b.prototype,"readPolygonBarriers",null);c.__decorate([g.property({type:[m]})],b.prototype,"serviceAreaPolylines",void 0);c.__decorate([h.reader("serviceAreaPolylines",["saPolylines"])],b.prototype,"readIncidents",null);c.__decorate([g.property({type:[m]})],b.prototype,"serviceAreaPolygons",void 0);c.__decorate([h.reader("serviceAreaPolygons",["saPolygons"])],b.prototype,"readServiceAreaPolygons",null);return b=c.__decorate([t.subclass("esri.tasks.support.ServiceAreaSolveResult")],b)});