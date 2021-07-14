// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ./SpatialReference ./Geometry ./support/webMercatorUtils ./Point ./support/contains ./support/intersects ./Extent ./support/zmUtils ./support/coordsUtils ./support/centroid ./support/extentUtils".split(" "),
function(t,k,h,u,I,J,m,K,y,z,L,M,N,A,B,v,l,C,D,E,w,F,G,H){var q;h=q=function(x){function n(...a){a=x.call(this,...a)||this;a.rings=[];a.type="polygon";return a}t._inheritsLoose(n,x);n.fromExtent=function(a){var b=a.clone().normalize();a=a.spatialReference;let c=!1,e=!1;b.map(d=>{d.hasZ&&(c=!0);d.hasM&&(e=!0)});b={rings:b.map(function(d){const g=[[d.xmin,d.ymin],[d.xmin,d.ymax],[d.xmax,d.ymax],[d.xmax,d.ymin],[d.xmin,d.ymin]];if(c&&d.hasZ){var p=d.zmin+.5*(d.zmax-d.zmin);for(let r=0;r<g.length;r++)g[r].push(p)}if(e&&
d.hasM)for(d=d.mmin+.5*(d.mmax-d.mmin),p=0;p<g.length;p++)g[p].push(d);return g}),spatialReference:a};c&&(b.hasZ=!0);e&&(b.hasM=!0);return new q(b)};var f=n.prototype;f.normalizeCtorArgs=function(a,b){let c=null,e,d,g=null;a&&!Array.isArray(a)?(c=a.rings?a.rings:null,b||(a.spatialReference?b=a.spatialReference:a.rings||(b=a)),e=a.hasZ,d=a.hasM):c=a;c=c||[];b=b||A.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"===typeof c[0][0]&&(c=[c]);if(g=c[0]&&c[0][0])void 0===e&&void 0===d?(e=2<g.length,d=!1):void 0===
e?e=!d&&3<g.length:void 0===d&&(d=!e&&3<g.length);return{rings:c,spatialReference:b,hasZ:e,hasM:d}};f.writeRings=function(a,b){b.rings=u.clone(this.rings)};f.addRing=function(a){if(a){var b=this.rings,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();else{const e=[];for(let d=0,g=a.length;d<g;d++)e[d]=a[d].toArray();b[c]=e}this.notifyChange("rings");return this}};f.clone=function(){const a=new q;a.spatialReference=this.spatialReference;a.rings=u.clone(this.rings);a.hasZ=this.hasZ;a.hasM=this.hasM;
return a};f.contains=function(a){if(!a)return!1;v.canProject(a,this.spatialReference)&&(a=v.project(a,this.spatialReference));return C.polygonContainsPoint(this,a)};f.isClockwise=function(a){a=Array.isArray(a[0])?a:a.map(b=>this.hasZ?this.hasM?[b.x,b.y,b.z,b.m]:[b.x,b.y,b.z]:[b.x,b.y]);return F.isClockwise(a,this.hasM,this.hasZ)};f.getPoint=function(a,b){if(!this._validateInputs(a,b))return null;a=this.rings[a][b];b=this.hasZ;const c=this.hasM;return b&&!c?new l(a[0],a[1],a[2],void 0,this.spatialReference):
c&&!b?new l(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new l(a[0],a[1],a[2],a[3],this.spatialReference):new l(a[0],a[1],this.spatialReference)};f.insertPoint=function(a,b,c){if(!this._validateInputs(a,b,!0))return this;w.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.rings[a].splice(b,0,c);this.notifyChange("rings");return this};f.removePoint=function(a,b){if(!this._validateInputs(a,b))return null;a=new l(this.rings[a].splice(b,1)[0],this.spatialReference);this.notifyChange("rings");
return a};f.removeRing=function(a){if(!this._validateInputs(a,null))return null;a=this.rings.splice(a,1)[0];const b=this.spatialReference;a=a.map(c=>new l(c,b));this.notifyChange("rings");return a};f.setPoint=function(a,b,c){if(!this._validateInputs(a,b))return this;w.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.rings[a][b]=c;this.notifyChange("rings");return this};f._validateInputs=function(a,b,c=!1){return null==a||0>a||a>=this.rings.length||null!=b&&(a=this.rings[a],c&&
(0>b||b>a.length)||!c&&(0>b||b>=a.length))?!1:!0};f.toJSON=function(a){return this.write(null,a)};t._createClass(n,[{key:"cache",get:function(){this.commitProperty("rings");this.commitProperty("hasZ");this.commitProperty("hasM");this.commitProperty("spatialReference");return{}}},{key:"centroid",get:function(){const a=G.polygonCentroid(this);if(!a||isNaN(a[0])||isNaN(a[1])||this.hasZ&&isNaN(a[2]))return null;const b=new l;b.x=a[0];b.y=a[1];b.spatialReference=this.spatialReference;this.hasZ&&(b.z=a[2]);
return b}},{key:"extent",get:function(){const {spatialReference:a}=this;var b=H.getPolygonExtent(this);if(!b)return null;b=new E(b);b.spatialReference=a;return b}},{key:"isSelfIntersecting",get:function(){return D.isSelfIntersecting(this.rings)}}]);return n}(B);k.__decorate([m.property({readOnly:!0})],h.prototype,"cache",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"centroid",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"extent",null);k.__decorate([m.property({readOnly:!0})],
h.prototype,"isSelfIntersecting",null);k.__decorate([m.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],h.prototype,"rings",void 0);k.__decorate([z.writer("rings")],h.prototype,"writeRings",null);h=q=k.__decorate([y.subclass("esri.geometry.Polygon")],h);h.prototype.toJSON.isDefaultToJSON=!0;return h});