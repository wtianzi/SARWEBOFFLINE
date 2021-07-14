// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/Accessor ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures ../../../../core/libs/rbush/PooledRBush".split(" "),
function(e,m,g,q,w,x,h,y,r,z,A,B,t,u,n,v){e.SpatialIndex2D=function(p){function k(a){a=p.call(this,a)||this;a._index=new v.PooledRBush(9,q("csp-restrictions")?b=>({minX:b.extent[0],minY:b.extent[1],maxX:b.extent[2],maxY:b.extent[3]}):[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]);a._missing=new Set;a._boundsByFeature=new Map;a.spatialReference=null;a.hasZ=null;a.hasM=null;a.objectIdField=null;a.updating=!1;return a}m._inheritsLoose(k,p);var c=k.prototype;c.setup=function(a){this._addMany(a)};
c.destroy=function(){this._missing.clear();this._index.destroy();this._index=null;this._boundsByFeature.clear();this._boundsByFeature=null};c.update=function(){0<this._missing.size&&(this._addMany(Array.from(this._missing.values())),this.updating=!1,this._missing.clear())};c.queryGraphicUIDsInExtent=function(a,b,f){b.equals(this.spatialReference)&&(d.minX=a[0],d.minY=a[1],d.maxX=a[2],d.maxY=a[3],this.update(),this._index.search(d,l=>f(l.graphic.uid)))};c.add=function(a){this._missing.add(a);this.updating=
!0};c.remove=function(a){this._missing.delete(a)?this.updating=0<this._missing.size:(this._index.remove(a),a=n.getObjectId(a.graphic,this._get("objectIdField")),null!=a&&this._boundsByFeature.delete(a))};c._addMany=function(a){if(0!==a.length){var b=this._get("objectIdField");for(const f of a){f.computeExtent(this.spatialReference);const l=n.getObjectId(f.graphic,b);null!=l&&this._boundsByFeature.set(l,f.extent)}this._index.load(a)}};c.clear=function(){this._index.clear();this._missing.clear();this._boundsByFeature.clear();
this.updating=!1};c.forEachInBounds=function(a,b){d.minX=a[0];d.minY=a[1];d.maxX=a[2];d.maxY=a[3];this.update();this._index.search(d,f=>{b(f)})};c.getBounds=function(a,b){this.update();return(a=this._boundsByFeature.get(a))?u.fromRect(b,a):null};m._createClass(k,[{key:"updatingRemaining",get:function(){return this._missing.size}}]);return k}(t);g.__decorate([h.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"spatialReference",void 0);g.__decorate([h.property({constructOnly:!0})],e.SpatialIndex2D.prototype,
"hasZ",void 0);g.__decorate([h.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"hasM",void 0);g.__decorate([h.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"objectIdField",void 0);g.__decorate([h.property()],e.SpatialIndex2D.prototype,"updating",void 0);e.SpatialIndex2D=g.__decorate([r.subclass("esri.views.3d.layers.graphics.SpatialIndex2D")],e.SpatialIndex2D);const d={minX:0,minY:0,maxX:0,maxY:0};Object.defineProperty(e,"__esModule",{value:!0})});