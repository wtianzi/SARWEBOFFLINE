// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../core/arrayUtils","../../../Ground","../../../core/unitUtils"],function(d,b,e,h,k){function f(a){if(b.isNone(a))return null;if(a instanceof h)return g(a);a=a.tileInfo;if(b.isNone(a))return null;const c=e.last(a.lods);return b.isNone(c)?null:c.resolution*k.getMetersPerUnitForSR(a.spatialReference)}function g(a){var c;if(b.isNone(a))return null;a=a.layers.items.map(l).filter(b.isSome);return null!=(c=e.min(a))?c:null}function l(a){return"tileInfo"in a?
f(a):null}d.getGroundMinDemResolution=g;d.getQuerySourceMinDemResolution=f;Object.defineProperty(d,"__esModule",{value:!0})});