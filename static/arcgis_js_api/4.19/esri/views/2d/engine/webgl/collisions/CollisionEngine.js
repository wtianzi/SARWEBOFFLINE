// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ./CollisionGrid ./LayerCollisionInfo".split(" "),function(x,B,C,y,q,z){function r(t,k){const d=[];t.forEachTile(a=>d.push(a));d.sort((a,e)=>a.instanceId-e.instanceId);d.forEach(a=>{C.isSome(a.labelMetrics)&&a.isReady&&k(a,a.labelMetrics.getCursor())})}let E=function(){function t(d){this._layers=new Map;this._tilingScheme=d}var k=t.prototype;k.registerLayerView=function(d,a){this._layers.has(d)||
(a=z["default"].create(d,a,this.collisionInfos,this._tilingScheme),this._layers.set(d,a))};k.unregisterLayerView=function(d){if(this._layers.has(d)){var a=this._layers.get(d);z["default"].delete(a.index,this.collisionInfos);this._layers.delete(d)}};k.run=function(d,a){this._transformMetrics(d);this._runCollision(d,a)};k._runCollision=function(d,a){const [e,b]=d.state.size,c=new q.CollisionBitsetGrid(e,b);this._forEachLayer((g,f)=>{g=g.zoomRanges.some(u=>"none"===u.deconflictionStrategy);const v=f.featuresView.attributeView;
g?r(f,(u,h)=>{for(;h.nextId();)v.setLabelMinZoom(h.id,0)}):(this._prepare(f),this._collideVisible(c,f,a),this._collideInvisible(c,f))})};k._isFiltered=function(d,a,e){d=a.getFilterFlags(d);a=!e.effect||e.effect.excludedLabelsVisible||!!(d&y.EFFECT_FLAG_0);return!((!e.hasFilter||d&y.FILTER_FLAG_0)&&a)};k._prepare=function(d){const a=d.featuresView.attributeView,e=new Set;r(d,(b,c)=>{for(;c.nextId();)e.has(c.id)||(e.add(c.id),this._isFiltered(c.id,a,d.layerView)?a.setLabelMinZoom(c.id,254):0!==a.getLabelMinZoom(c.id)?
a.setLabelMinZoom(c.id,255):a.setLabelMinZoom(c.id,0))})};k._collideVisible=function(d,a,e){const b=a.featuresView.attributeView,c=new Set;r(a,(g,f)=>{for(;f.nextId();)if(!c.has(f.id))if(g.key.level!==e)b.setLabelMinZoom(f.id,254);else if(0===b.getLabelMinZoom(f.id))switch(d.insertMetrics(f)){case q.HAS_COLLISION:b.setLabelMinZoom(f.id,254);c.add(f.id);break;case q.NONE:b.setLabelMinZoom(f.id,0),c.add(f.id)}})};k._collideInvisible=function(d,a){const e=a.featuresView.attributeView,b=new Set;r(a,(c,
g)=>{for(;g.nextId();)if(!b.has(g.id)&&255===e.getLabelMinZoom(g.id))switch(d.insertMetrics(g)){case q.HAS_COLLISION:e.setLabelMinZoom(g.id,255);b.add(g.id);break;case q.NONE:e.setLabelMinZoom(g.id,0),b.add(g.id)}})};k._transformMetrics=function(d){this._forEachLayer((a,e)=>{r(e,(b,c)=>{const g=e.featuresView.attributeView;b=b.transforms.labelMat2d;b[4]=Math.round(b[4]);b[5]=Math.round(b[5]);const f=b[4],v=b[5],u="polyline"===a.geometryType;for(;c.next();){const D=c.boundsCount,w=c.anchorX,A=c.anchorY;
var h=0,p=0;a.hasVV()&&(h=g.getVVSize(c.id),h=a.vvEval(h),p=isNaN(h)||null==h||Infinity===h?c.size:h,h=p/2*c.directionX,p=p/2*c.directionY);for(let n=0;n<D;n++){var l=w,m=c.anchorY;u?(l=l+c.boundsCenterX(n)+h,m=m+c.boundsCenterY(n)+p,d.state.rotation?(l=b[0]*l+b[2]*m+b[4],m=b[1]*l+b[3]*m+b[5]):(l+=f,m+=v),c.setBoundsComputedAnchorX(n,Math.floor(l)),c.setBoundsComputedAnchorY(n,Math.floor(m))):(d.state.rotation?(l=b[0]*w+b[2]*A+b[4],m=b[1]*w+b[3]*A+b[5]):(l+=f,m+=v),l=l+c.boundsCenterX(n)+h,m=m+c.boundsCenterY(n)+
p,c.setBoundsComputedAnchorX(n,l),c.setBoundsComputedAnchorY(n,m))}}})})};k._forEachLayer=function(d){const a=[];this._layers.forEach(e=>a.push(e));a.sort((e,b)=>e.order-b.order);a.forEach(e=>{var b;const c=null==(b=e.layerView)?void 0:b.tileRenderer;c&&d(e,c)})};B._createClass(t,[{key:"collisionInfos",get:function(){return Array.from(this._layers.values())}}]);return t}();x.CollisionEngine=E;Object.defineProperty(x,"__esModule",{value:!0})});