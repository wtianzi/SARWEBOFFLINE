// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f32 ./decluttering/config ./RenderBucket ../webgl/TiledDisplayObject".split(" "),function(m,p,q,k,u,r,l,n){n=function(h){function g(b,c,a,e,f=null){a=h.call(this,b,a,e,[4096,4096])||this;a._memCache=f;a._referenced=0;a._hasSymbolBuckets=!1;a._memoryUsedByLayerData=0;a.layerData=new Map;a.layerCount=0;a.status="loading";a.allSymbolsFadingOut=!1;a.lastOpacityUpdate=0;a.symbols=
new Map;a.isCoverage=!1;a.neededForCoverage=!1;a.decluttered=!1;a.invalidating=!1;a.parentTile=null;a.childrenTiles=new Set;a._processed=!1;a._referenced=1;a.styleRepository=c;a.id=b.id;a.transforms.tileUnitsToPixels=u.create();return a}p._inheritsLoose(g,h);var d=g.prototype;d.setData=function(b){this.changeDataImpl(b);this.requestRender();this.ready();this.invalidating=!1;this._processed=!0};d.deleteLayerData=function(b){let c=!1;for(const a of b)this.layerData.has(a)&&(b=this.layerData.get(a),
this._memoryUsedByLayerData-=b.memoryUsed,3===b.type&&this.symbols.has(a)&&(this.symbols.delete(a),c=!0),b.destroy(),this.layerData.delete(a),this.layerCount--);q.isSome(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData);c&&this.emit("symbols-changed");this.requestRender()};d.processed=function(){return this._processed};d.hasData=function(){return 0<this.layerCount};d.dispose=function(){"unloaded"!==this.status&&(t.delete(this),g._destroyRenderBuckets(this.layerData),
this.layerData=null,this._memoryUsedByLayerData=this.layerCount=0,this.destroy(),this.status="unloaded")};d.release=function(){return 0===--this._referenced?(this.dispose(),this.stage=null,!0):!1};d.retain=function(){++this._referenced};d.getMemoryUsage=function(){return(this._memoryUsedByLayerData+256)/(this._referenced||1)};d.changeDataImpl=function(b){let c=!1;if(b){b=this._createRenderBuckets(b);for(const [a,e]of b)this.layerData.has(a)&&(b=this.layerData.get(a),this._memoryUsedByLayerData-=e.memoryUsed,
b.destroy(),this.layerData.delete(a),this.layerCount--),3===e.type&&(this.symbols.set(a,e.symbols),c=!0),this._memoryUsedByLayerData+=e.memoryUsed,this.layerData.set(a,e),this.layerCount++;q.isSome(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData)}this._hasSymbolBuckets=!1;for(const [,a]of this.layerData)3===a.type&&(this._hasSymbolBuckets=!0);c&&this.emit("symbols-changed")};d.attachWithContext=function(b){this.stage={context:b,trashDisplayObject(c){c.processDetach()},
untrashDisplayObject(){return!1}}};d.setTransform=function(b,c){h.prototype.setTransform.call(this,b,c);var a=c/(b.resolution*b.pixelRatio);c=this.size[0]/this.coordRange[0]*a;a*=this.size[1]/this.coordRange[1];const e=[0,0];b.toScreen(e,this.coords);const f=this.transforms.tileUnitsToPixels;k.identity(f);k.translate(f,f,e);k.rotate(f,f,Math.PI*b.rotation/180);k.scale(f,f,[c,a,1])};g._destroyRenderBuckets=function(b){if(b){var c=new Set;b.forEach(a=>{c.has(a)||(a.destroy(),c.add(a))});b.clear()}};
d._createRenderBuckets=function(b){const c=new Map,a=new Map;for(const e of b){b=this._deserializeBucket(e,a);for(const f of b.layerUIDs)c.set(f,b)}return c};d._deserializeBucket=function(b,c){let a=c.get(b);if(a)return a;switch((new Uint32Array(b))[0]){case 1:a=new l.FillRenderBucket(b,this.styleRepository);break;case 2:a=new l.LineRenderBucket(b,this.styleRepository);break;case 3:a=new l.SymbolRenderBucket(b,this.styleRepository,this);break;case 4:a=new l.CircleRenderBucket(b,this.styleRepository)}c.set(b,
a);return a};p._createClass(g,[{key:"hasSymbolBuckets",get:function(){return this._hasSymbolBuckets}},{key:"isFading",get:function(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<r.FADE_DURATION}},{key:"isHoldingForFade",get:function(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<r.FADE_DURATION)}},{key:"wasRequested",get:function(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status}},{key:"referenced",
get:function(){return this._referenced}}]);return g}(n.TiledDisplayObject);const t=new Map;m.VectorTile=n;m.printAllocations=function(){t.forEach((h,g)=>{console.log(`\n${g.key}:`);h[0].forEach(d=>console.log(d));console.log("\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d");h[1].forEach(d=>console.log(d))})};Object.defineProperty(m,"__esModule",{value:!0})});