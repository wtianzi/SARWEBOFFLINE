// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/handleUtils","./Graphics3DObjectStateSet"],function(f,g,h,k){let l=function(){function e(a){this._graphicsCore=a;this._stateSets=[]}var d=e.prototype;d.destroy=function(){this._stateSets&&this._stateSets.forEach(a=>a.objectStateSet.removeAll());this._stateSets=null};d.acquireSet=function(a,b){const c=new k.Graphics3DObjectStateSet(a,b);this._stateSets.push(c);a=h.makeHandle(()=>this.releaseSet(c));return{set:c,handle:a}};
d.releaseSet=function(a){a.objectStateSet.removeAll();a=this._stateSets?this._stateSets.indexOf(a):-1;-1!==a&&this._stateSets.splice(a,1)};d._addObjectStateSet=function(a,b){a.addObjectStateSet(b.stateType,b.objectStateSet)};d._removeObjectStateSet=function(a,b){a.removeObjectState(b.objectStateSet)};d.setUid=function(a,b){a.ids.add(b);(b=this._graphicsCore.graphics3DGraphics.get(b))&&this._addObjectStateSet(b,a)};d.setUids=function(a,b){b.forEach(c=>this.setUid(a,c))};d.setObjectIds=function(a,b){b.forEach(c=>
a.ids.add(c));this.initializeSet(a)};d.addGraphic=function(a){this._stateSets.forEach(b=>{!b.paused&&b.hasGraphic(a)&&this._addObjectStateSet(a,b)})};d.removeGraphic=function(a){this._stateSets.forEach(b=>{b.hasGraphic(a)&&this._removeObjectStateSet(a,b)})};d.allGraphicsDeleted=function(){this._stateSets&&this._stateSets.forEach(a=>a.objectStateSet.removeAll())};d.initializeSet=function(a){const b=this._graphicsCore.graphics3DGraphics;a.objectIdField?b.forEach(c=>{c&&a.hasGraphic(c)&&this._addObjectStateSet(c,
a)}):a.ids.forEach(c=>{(c=b.get(c))&&this._addObjectStateSet(c,a)})};g._createClass(e,[{key:"test",get:function(){return{states:this._stateSets}}}]);return e}();f.Graphics3DObjectStates=l;Object.defineProperty(f,"__esModule",{value:!0})});