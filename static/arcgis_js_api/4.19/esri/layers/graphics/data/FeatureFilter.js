// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/Logger ../../../core/Error ../../../geometry/support/boundsUtils ../../../geometry/support/aaBoundingRect ../../../tasks/support/Query ./utils ./spatialQuerySupport ./timeSupport ../../../views/2d/layers/features/FeatureStore2D ../../../views/2d/layers/features/support/whereUtils".split(" "),function(l,m,n,p,q,r,t,u,v,w,x,y){const z=n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");return function(){function g(a){this._geometryBounds=
r.create();this._idToVisibility=new Map;this._serviceInfo=a}var b=g.prototype;b.check=function(a){return this._applyFilter(a)};b.clear=function(){const a=this._resetAllHiddenIds();this.update();return{show:a,hide:[]}};b.invalidate=function(){this._idToVisibility.forEach((a,c)=>{this._idToVisibility.set(c,0)})};b.setKnownIds=function(a){for(const c of a)this._idToVisibility.set(c,1)};b.setTrue=function(a){const c=[],d=[],h=new Set(a);this._idToVisibility.forEach((e,f)=>{e=!!(this._idToVisibility.get(f)&
1);const k=h.has(f);!e&&k?c.push(f):e&&!k&&d.push(f);this._idToVisibility.set(f,k?3:0)});return{show:c,hide:d}};b.createQuery=function(){const {geometry:a,spatialRel:c,where:d,timeExtent:h,objectIds:e}=this;return t.fromJSON({geometry:a,spatialRel:c,where:d,timeExtent:h,objectIds:e})};b.update=async function(a,c){this._hash=JSON.stringify(a);a=await u.normalizeQueryLike(a,null,c);await Promise.all([this._setGeometryFilter(a),this._setIdFilter(a),this._setAttributeFilter(a),this._setTimeFilter(a)])};
b._setAttributeFilter=async function(a){a&&a.where?(this._clause=await y.createWhereClause(a.where,this._serviceInfo.fieldsIndex),this.where=a.where):this.where=this._clause=null};b._setIdFilter=function(a){this._idsToShow=a&&a.objectIds&&new Set(a.objectIds);this._idsToHide=a&&a.hiddenIds&&new Set(a.hiddenIds);this.objectIds=a&&a.objectIds};b._setGeometryFilter=async function(a){if(a&&a.geometry){var c=a.geometry;a=a.spatialRel||"esriSpatialRelIntersects";var d=await v.getSpatialQueryOperator(a,
c,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);q.getBoundsXY(this._geometryBounds,c);this._spatialQueryOperator=d;this.geometry=c;this.spatialRel=a}else this.spatialRel=this.geometry=this._spatialQueryOperator=null};b._setTimeFilter=function(a){this.timeExtent=this._timeOperator=null;a&&a.timeExtent&&(this._serviceInfo.timeInfo?(this.timeExtent=a.timeExtent,this._timeOperator=w.getTimeOperator(this._serviceInfo.timeInfo,a.timeExtent,x.featureAdapter)):(a=new p("feature-layer-view:time-filter-not-available",
"Unable to apply time filter, as layer doesn't have time metadata.",a.timeExtent),z.error(a)))};b._applyFilter=function(a){return this._filterByGeometry(a)&&this._filterById(a)&&this._filterByTime(a)&&this._filterByExpression(a)};b._filterByExpression=function(a){return this.where?this._clause(a):!0};b._filterById=function(a){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(a.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(a.getObjectId()))};b._filterByGeometry=
function(a){return this.geometry?(a=a.readHydratedGeometry())?this._spatialQueryOperator(a):!1:!0};b._filterByTime=function(a){return m.isSome(this._timeOperator)?this._timeOperator(a):!0};b._resetAllHiddenIds=function(){const a=[];this._idToVisibility.forEach((c,d)=>{c&1||(this._idToVisibility.set(d,1),a.push(d))});return a};l._createClass(g,[{key:"hash",get:function(){return this._hash}}]);return g}()});