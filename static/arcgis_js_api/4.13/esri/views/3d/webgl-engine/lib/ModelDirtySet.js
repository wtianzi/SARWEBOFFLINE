// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/arrayUtils","../../../../core/iteratorUtils","./Util"],function(w,x,u,v,r){return function(){function d(a){this._residentGeomRecords=new Map;this._dirtyGeomRecords=new Map;this._dirtyMaterials=new Set;this._model=a}Object.defineProperty(d.prototype,"residentLayerCount",{get:function(){return this._residentGeomRecords.size},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"residentObjectCount",{get:function(){var a=0;this._residentGeomRecords.forEach(function(b){a+=
b.size});return a},enumerable:!0,configurable:!0});d.prototype.getDirtyMaterials=function(){return 0<this._dirtyMaterials.size?this._dirtyMaterials:null};d.prototype.clearDirtyMaterials=function(){this._dirtyMaterials.clear()};d.prototype.hasDirtyGeometryRecords=function(){var a=!1;v.everyMap(this._dirtyGeomRecords,function(b){if(a)return!1;v.everyMap(b,function(b){if(!a&&b&&0<b.size)return a=!0,!1})});return a};d.prototype.handleUpdate=function(a,b,c){r.assert(this[b],"ModelDirtySet doesn't know how to process "+
b);return this[b](a,c)};d.prototype.shaderTransformationChanged=function(a){var b=this;(a=this._residentGeomRecords.get(a.id))&&a.forEach(function(a,n){(n=b._model.get(1,n))&&n.hasVolativeTransformation()&&a.forEach(function(a){var b=0;for(a=a[1];b<a.length;b++)a[b].shaderTransformationChanged()})})};d.prototype.commit=function(){return this.commitLayers(u.keysOfMap(this._dirtyGeomRecords))};d.prototype.commitLayers=function(a){for(var b=this,c=[],n=[],d=[],h=function(h){var g=a[h];h=f._dirtyGeomRecords.get(g);
if(!h)return"continue";h.forEach(function(a,h){var e=b._ensureGeomRecord(g,h);a.forEach(function(a,g){var f=a[0],m=a[1];a=a[2];var l=!1;if(m&2){var k=e.get(g);if(k){k=k[1];if(a&4)for(var p=b._model.get(1,h),q=0;q<k.length;q++){var t=k[q];if(b._model.updateRenderGeometryTransformation(p,f,t)){l=!0;break}}if(!l)for(p=0;p<k.length;p++)t=k[p],d.push({renderGeometry:t,updateType:a})}else r.assert(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid update")}if(m&4||l)(k=e.get(g))?n.push.apply(n,
k[1]):4===m&&r.assert(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid remove"),k&&e.delete(g);if(m&1||l)m=[f,[]],p=b._model.get(1,h),b._model.getGeometryRenderGeometries(p,f,m[1]),c.push.apply(c,m[1]),e.set(g,m)});0===e.size&&b._residentGeomRecords.get(g).delete(h)});0===f._residentGeomRecords.get(g).size&&f._residentGeomRecords.delete(g);f._dirtyGeomRecords.delete(g)},f=this,e=0;e<a.length;e++)h(e);return[c,n,d]};d.prototype.getResidentRenderGeometries=function(){return this.getResidentRenderGeometriesFilteredByLayers(u.keysOfMap(this._residentGeomRecords))};
d.prototype.getResidentRenderGeometriesFilteredByLayers=function(a){for(var b=[],c=0;c<a.length;c++){var d=this._residentGeomRecords.get(a[c]);d&&d.forEach(function(a){a.forEach(function(a){b.push.apply(b,a[1])})})}return b};d.prototype.visibilityChanged=function(a,b,c){if(null!=b)this._componentPropertyChanged(a,b,c,1);else{b=0;for(var d=a.geometryRecords;b<d.length;b++)this._componentPropertyChanged(a,d[b],c,1)}};d.prototype.componentHighlightChanged=function(a,b,c){if(null!=b)this._componentPropertyChanged(a,
b,c,16);else{b=0;for(var d=a.geometryRecords;b<d.length;b++)this._componentPropertyChanged(a,d[b],c,16)}};d.prototype.vertexAttrsUpdated=function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,2,0,0,2,5,2)};d.prototype.matChanged=function(a){this._dirtyMaterials.add(a.id);if(this.onMaterialChanged)this.onMaterialChanged(a)};d.prototype.layerAdded=function(a){for(var b=a.getObjects(),c=0;c<b.length;c++)this.layerObjectAdded(a,b[c])};d.prototype.layerRemoved=function(a){for(var b=a.getObjects(),c=0;c<
b.length;c++)this.layerObjectRemoved(a,b[c])};d.prototype.layerObjectAdded=function(a,b){a=a.id;for(var c=b.geometryRecords,d=0;d<c.length;d++)this.objGeometryAdded(b,c[d],a)};d.prototype.layerObjectRemoved=function(a,b){a=a.id;for(var c=b.geometryRecords,d=0;d<c.length;d++)this.objGeometryRemoved(b,c[d],a)};d.prototype.layObjectReplaced=function(a,b){this.layerObjectRemoved(a,b[0]);this.layerObjectAdded(a,b[1])};d.prototype.objTransformation=function(a,b){var c=this;b=b||this._getParentLayerId(a);
this._ensureGeomRecord(b,a.id).forEach(function(d){c._updateOrCreateDirtyRecord(a,d[0],b,2,0,0,2,5,4)})};d.prototype.objGeometryAdded=function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,1,4,0,0,0)};d.prototype.objGeometryRemoved=function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,4,1,2,0,0)};d.prototype.objGeometryReplaced=function(a,b){this.objGeometryRemoved(a,b[0]);this.objGeometryAdded(a,b[1])};d.prototype.objGeometryTransformation=function(a,b){this.objGeometryReplaced(a,b)};d.prototype._componentPropertyChanged=
function(a,b,c,d){this._updateOrCreateDirtyRecord(a,b,c,2,0,0,2,5,d)};d.prototype._updateOrCreateDirtyRecord=function(a,b,c,d,q,h,f,e,l){c=c||this._getParentLayerId(a);var g=b.id;a=this._ensureDirtyRecord(c,a.id);(c=a.get(g))?(b=c[1],b&q?a.delete(g):b&h?(c[1]=d,c[2]=l):b&f?c[2]|=l:b&e||r.assert(!1,"ModelDirtySet.objGeometryAdded: inconsistent state")):a.set(g,[b,d,l])};d.prototype._ensureGeomRecord=function(a,b){var c=this._residentGeomRecords.get(a);c||(c=new Map,this._residentGeomRecords.set(a,
c));a=c.get(b);a||(a=new Map,c.set(b,a));return a};d.prototype._ensureDirtyRecord=function(a,b){var c=this._dirtyGeomRecords.get(a);c||(c=new Map,this._dirtyGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,a));return a};d.prototype._getParentLayerId=function(a){return a.parentLayer.id};d.prototype.formatDebugInfo=function(a){if(a)return"";var b=["ADD","UPD",void 0,"REM"],c="";this._dirtyGeomRecords.forEach(function(a,d){a.forEach(function(a,f){0<c.length&&(c+="\n");c+=d+"."+f;var e=[];a.forEach(function(a){var b=
a[1];e[b]||(e[b]=[]);e[b].push(a[0].geometry.id)});for(a=0;a<e.length;a++)if(e[a])for(c+=" "+b[a-1]+": ",f=0;f<e[a].length;f++)c+=e[a][f]+", "})});return c};return d}()});