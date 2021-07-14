/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import{o as t}from"./SpatialReference.js";import"./Geometry.js";import o from"./Point.js";import"../chunks/Ellipsoid.js";import{webMercatorToGeographic as i,geographicToWebMercator as c}from"./support/webMercatorUtils.js";import"./Extent.js";import"../chunks/zmUtils.js";import"./Multipoint.js";import n from"./Polygon.js";import"../chunks/extentUtils.js";import"./Polyline.js";import"../chunks/typeUtils.js";import"./support/jsonUtils.js";import"../geometry.js";import{c as p,l as a,e as u}from"../chunks/unitUtils.js";import"../chunks/geodesicConstants.js";import{directGeodeticSolver as m}from"./support/geodesicUtils.js";var l;let h=l=class extends n{constructor(...e){super(...e),this.center=null,this.geodesic=!1,this.numberOfPoints=60,this.radius=1e3,this.radiusUnit="meters"}normalizeCtorArgs(e,r){let s;if(e&&e.center)s=e;else{if(e&&e.rings)return super.normalizeCtorArgs(e,r);s={center:e}}return{...super.normalizeCtorArgs(),...s,...r}}initialize(){const e=this.center,r=this.numberOfPoints;if(this.hasZ=e&&e.hasZ,0!==this.rings.length||!e)return;const s=p(this.radius,this.radiusUnit,"meters"),o=e.spatialReference;let n,m="geographic";if(o.isWebMercator?m="webMercator":(null!=t[o.wkid]||o.wkt&&0===o.wkt.indexOf("PROJCS"))&&(m="projected"),this.geodesic){let t;switch(m){case"webMercator":t=i(e);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":t=e}n=this._createGeodesicCircle(t,s,r),"webMercator"===m&&(n=c(n))}else{let t;"webMercator"===m||"projected"===m?t=s/this._convert2Meters(1,e.spatialReference):"geographic"===m&&(t=a(s,"meters",u(e.spatialReference).radius)),n=this._createPlanarCircle(e,t,r)}this.spatialReference=n.spatialReference,this.addRing(n.rings[0])}clone(){const{center:e,numberOfPoints:r,radius:s,radiusUnit:t,geodesic:o}=this;return new l({center:e.clone(),numberOfPoints:r,radius:s,radiusUnit:t,geodesic:o})}_createGeodesicCircle(e,r,s){let t=0;const o=[];for(;t<360;){const i=[0,0],c=[e.x,e.y];m(i,c,t,r),this.hasZ&&i.push(e.z),o.push(i),t+=360/s}return o.push(o[0]),new n(o)}_createPlanarCircle(e,r,s){let t=0;const o=[];for(;t<2*Math.PI;){const i=[e.x+Math.cos(-t)*r,e.y+Math.sin(-t)*r];this.hasZ&&i.push(e.z),o.push(i),t+=Math.PI/(s/2)}return o.push(o[0]),new n({spatialReference:e.spatialReference,rings:[o]})}_convert2Meters(e,r){let s;if(null!=t[r.wkid])s=t.values[t[r.wkid]];else{const e=r.wkt,t=e.lastIndexOf(",")+1,o=e.lastIndexOf("]]");s=parseFloat(e.substring(t,o))}return e*s}};e([r({type:o})],h.prototype,"center",void 0),e([r()],h.prototype,"geodesic",void 0),e([r()],h.prototype,"numberOfPoints",void 0),e([r()],h.prototype,"radius",void 0),e([r()],h.prototype,"radiusUnit",void 0),h=l=e([s("esri.geometry.Circle")],h);var d=h;export default d;