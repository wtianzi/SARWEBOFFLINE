// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/PooledArray"],function(w,q,x){let y=function(){function r(a){this.layerView=a;this._lodGlobalDirty=!1}var e=r.prototype;e.startNodeLoading=function(a,b,d,c){this._maxLodLevel=c.maxLodLevel;this._index=d;this._isNodeInScaleBounds=a;this._removeNodes=b};e.shouldLoadNode=function(a){if(q.isNone(a))return!1;const b=this._index.nodeTraversalState(a);return this.isChosenMaxLOD(b)?!0:b.isChosen?this._childrenRequireLoading(a):
!1};e.setLodGlobalDirty=function(){this._lodGlobalDirty=!0};e.lodGlobalHandling=function(a){if(!this.requiresLODGlobalHandling)return!1;this._lodGlobalDirty=!1;var b=Math.max(0,Math.floor(10*(this.layerView.view.resourceController.memoryController.usedMemory-1)));f.clear();this._lodGlobalHandling(this._index.rootNode,b,!1);b=f.length;this._removeNodes(f,a);a=f.length<b;0!==f.length&&(this._lodGlobalDirty=!0);f.clear();return a};e._lodGlobalHandling=function(a,b,d){if(q.isNone(a))return!1;const c=
a.index,g=this._index,h=this.layerView;var k=g.nodeTraversalState(a);const p=this.isChosenMaxLOD(k);k=h.isNodeLoaded(c);const v=h.nodeCrossfadingEnabled;if(v&&k&&p){var l=!d&&this.hasNoVisibleChildren(a);h.fadeNode(c,0,!l)}l=k&&(!h.isNodeFullyFadedIn||h.isNodeFullyFadedIn(c));if(k&&(h.updateNodeState(c,p?1:0),p))return l&&this._removeChildrenRecursive(a),l;var m=0<a.childCount;let n=m;if(m)for(m=0;m<a.childCount;m++){const t=g.getChildIndex(a,m),u=g.getNode(t);q.isSome(u)?g.isGeometryVisible(t)&&
!this._lodGlobalHandling(u,b,d||l)&&this._isNodeInScaleBounds(u)&&(n=!1):g.isNodeVisible(t)&&(n=!1)}(b=k&&!p&&(n||f.length<b))&&f.push(c);!v||b||!k||d||n||h.fadeNode(c,0,!1);a=!a.resources.hasFeatureData;return n||l&&!b||a};e._removeChildrenRecursive=function(a){this._index.traverseChildren(a,b=>{(this.layerView.isNodeLoaded(b.index)||this.layerView.isNodeReloading(b.index))&&f.push(b.index);return!0})};e.hasNoVisibleChildren=function(a){let b=!0;this._index.traverseChildren(a,d=>b&&this._index.isNodeVisible(d.index)?
this.layerView.isNodeLoaded(d.index)?b=!1:!0:!1);return b};e._childrenRequireLoading=function(a){let b=!1,d=!0;this._index.traverseChildren(a,c=>{if(!d||!this._index.isNodeVisible(c.index))return!1;const g=this._index.nodeTraversalState(c);this.isChosenMaxLOD(g)&&this._index.isGeometryVisible(c.index)&&(b=!0);return this.layerView.isNodeLoaded(c.index)?d=!1:!0});return d&&b};e.isChosenMaxLOD=function(a){return a.isChosen&&(!a.nodeHasLOD||a.lodLevel===this._maxLodLevel)};w._createClass(r,[{key:"requiresLODGlobalHandling",
get:function(){return null!=this._index&&!0===this._lodGlobalDirty}}]);return r}();const f=new x({deallocator:null});return y});