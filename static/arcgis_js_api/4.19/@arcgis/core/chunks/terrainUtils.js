/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{clone as t}from"../core/lang.js";import{i as s,b as r,c as i}from"./Logger.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import a from"../core/Accessor.js";import{r as n}from"../core/scheduling.js";import{createResolver as l,onAbort as u,createAbortError as c,throwIfAborted as h,isAbortError as m,createAbortController as d}from"../core/promiseUtils.js";import p from"../core/Error.js";import"./ensureType.js";import{subclass as f}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import{b as g,c as _}from"../geometry/SpatialReference.js";import y from"../request.js";import{c as T}from"./vec3f64.js";import{g as x,s as k,d as b,e as w,b as I}from"./vec3.js";import{b as L,v as j,u as v,c as S}from"./aaBoundingRect.js";import{canProjectToWGS84ComparableLonLat as C}from"../geometry/projection.js";import{T as E}from"./Scheduler.js";import z from"../layers/ElevationLayer.js";import M from"../layers/TileLayer.js";import"../layers/VectorTileLayer.js";import{T as Q,d as W}from"./TerrainConst.js";import{a as G}from"./Util.js";import{V as R}from"./VectorTile.js";import{c as q,b as U,d as P,e as O,f as F,h as A,i as V,j as D}from"./rasterUtils.js";class N{constructor(e){this.typeWorkerQuota=e,this.tasks=new Array,this.numWorkers=0,this.statistics=new H}}class H{constructor(){this.requests=0,this.size=0,this.duration=0,this.speed=0}}class B{constructor(e,t,s,r){this._workerFunc=e,this._callbackFunc=t,this._maxTotalNumWorkers=s,this._totalNumWorkers=0,this._clients=r.map((e=>new N(e)))}hasQuota(e){const t=this._clients[e];return!!t&&(this._totalNumWorkers<this._maxTotalNumWorkers||t.numWorkers+t.tasks.length<t.typeWorkerQuota)}push(e){const t=this._clients[e.client];t&&(this._totalNumWorkers<this._maxTotalNumWorkers?(t.numWorkers++,this._totalNumWorkers++,this._workerFunc(e,((e,t)=>this._taskCallback(e,t)))):t.tasks.push(e))}cancel(e){this._taskFinished(e),e._cancelled=!0}destroy(){this._clients.length=0}_taskFinished(e){const t=this._clients[e.client];this._totalNumWorkers--,t.numWorkers--,t.statistics.requests++,t.statistics.size+=e.size||0,t.statistics.duration+=e.duration||0,t.statistics.speed=t.statistics.duration>0?t.statistics.size/t.statistics.duration:0,G(t.numWorkers>=0),this._next()}_next(){for(const e of this._clients)if(e&&e.numWorkers<e.typeWorkerQuota&&this._processQueue(e))return;for(const e of this._clients)if(e&&this._processQueue(e))return}_processQueue(e){for(;e.tasks.length>0;)if(this._workerFunc(e.tasks.shift(),((e,t)=>this._taskCallback(e,t))))return e.numWorkers++,this._totalNumWorkers++,!0;return!1}_taskCallback(e,t){e._cancelled||(this._callbackFunc(e,t),this._taskFinished(e))}getStatsForType(e){const t=this._clients[e];return t?{quota:t.typeWorkerQuota,workers:t.numWorkers,queueSize:t.tasks.length,requestStats:t.statistics}:null}get test(){const e=this;return{set workerFunc(t){e._workerFunc=t}}}}class $ extends class{constructor(e){this.client=e,this._cancelled=!1,this.size=0,this.duration=0}}{constructor(e,t,s,r,i){super(r),this.url=e,this.options=t,this.docType=s,this.key=i,this.result=null,this.status=1,this.request=null,this.abortController=null,this.resolvers=new Array,this.startTime=0}}let K=class extends a{constructor(){super(...arguments),this.tasks=new Map,this.onLoadQueue=new Array,this.doneQueue=new Array,this.updating=!1}setup(e,t,s){this.loadQueue=new B(((e,t)=>this.startLoading(e,t)),((e,t)=>this.doneLoadingCallback(e,t)),e,t),s&&(this.taskHandle=s.registerTask(E.STREAM_DATA_LOADER,(e=>this.update(e)),(()=>this.doneQueue.length>0||this.onLoadQueue.length>0)))}destroy(){this.taskHandle&&(this.taskHandle.remove(),this.taskHandle=null),this.tasks.forEach((e=>{e.abortController&&e.abortController.abort()})),this.loadQueue.destroy(),this.loadQueue=null,this.onLoadQueue=null,this.doneQueue=null,this.tasks=null}hasDownloadSlots(e){return this.loadQueue.hasQuota(e)}request(e,t,r,i={}){const o=l();o.__signal=s(i)?i.signal:null;const a=this.createOrUpdateTask(e,t,r,i,o);return u(i,(()=>this.cancelRequest(a,o))),o.promise}createTask(e,t,s,r,i,o){const a=new $(e,t,s,r,i);return this.updateTask(a,o),this.tasks.set(i,a),1===this.tasks.size&&this._set("updating",!0),this.loadQueue.push(a),a}cancelRequest(e,t){n(e.resolvers,t),t.reject(c()),0===e.resolvers.length&&(2===e.status&&(e.status=4,this.loadQueue.cancel(e),e.abortController.abort(),e.request=null,e.abortController=null),e.status=4,this.tasks.delete(e.key),0===this.tasks.size&&this._set("updating",!1))}taskKey(e,t,s){return`${e}:${t}:${s}`}updateTask(e,t){e.resolvers.push(t)}createOrUpdateTask(e,t,r,i,o){const a=s(i)&&i.uid||e,n=this.taskKey(a,t,r),l=this.tasks.get(n);return l?(this.updateTask(l,o),l):this.createTask(e,i,t,r,n,o)}doneLoadingCallback(e,t){this.loadQueue&&(G(2===e.status),e.status=3,this.taskHandle?this.doneQueue.push({task:e,err:t}):this.doneLoading(e,t))}update(e){for(;!e.done&&this.onLoadQueue.length>0;){const t=this.onLoadQueue.shift();h(t.task.abortController),t.task.abortController=null,t.callback(t.task),e.madeProgress()}for(;!e.done&&this.doneQueue.length>0;){const t=this.doneQueue.shift();3!==t.task.status&&(t.err=t.err||c()),this.doneLoading(t.task,t.err),e.madeProgress()}}doneLoading(e,s){let r=e.result instanceof HTMLImageElement?0:e.resolvers.length;for(const i of e.resolvers)if(s)m(s)?i.reject(s):i.reject(new p("stream-data-loader:request-error",`Failed to request resource at '${e.url}'. ${s}`,{url:e.url,error:s}));else{--r;const s=r<=0?e.result:t(e.result);i.resolve(s)}this.tasks.delete(e.key),0===this.tasks.size&&this._set("updating",!1)}startLoading(e,t){if(4===e.status)return!1;let s,r;switch(e.startTime=performance.now(),e.status=2,e.docType){case"binary":r="array-buffer",s=0;break;case"image":r="image";break;case"image+type":r="array-buffer";break;default:r="json"}e.abortController=d();const i=e.abortController.signal;e.request=y(e.url,{...e.options,responseType:r,timeout:s,signal:i});let o=()=>{};const a=s=>{e.duration=performance.now()-e.startTime,e.size=s instanceof ArrayBuffer?s.byteLength:e.size||0,e.result=s,this.taskHandle?this.onLoadQueue.push({callback:t,task:e}):(e.abortController=null,t(e))},n=s=>{2===e.status&&t(e,s),o()};return"image+type"!==e.docType?(e.request.then((e=>a(e.data)),n),!0):(e.request.then((t=>{const l=t.data,u=function(e){if(e.byteLength<2)return"unknown";const t=new Uint8Array(e,0,e.byteLength);if(137===t[0]&&80===t[1])return"image/png";if(71===t[0]&&73===t[1])return"image/gif";if(66===t[0]&&77===t[1])return"image/bmp";if(255===t[0]&&216===t[1])return"image/jpeg";return"unknown"}(l);if(r="image",e.size=l.byteLength,"unknown"===u)return e.request=y(e.url,{responseType:r,timeout:s,signal:i}),void e.request.then((e=>a(e.data)),n);const c=new Blob([l],{type:u}),h=window.URL.createObjectURL(c);o=()=>window.URL.revokeObjectURL(h),e.request=y(h,{responseType:r,timeout:s,signal:i}),e.request.then((e=>a(new J(e.data,u,o))),n)}),n),!0)}get test(){return{loadQueue:this.loadQueue}}};e([o({readOnly:!0})],K.prototype,"updating",void 0),K=e([f("esri.views.3d.support.StreamDataLoader")],K);class J{constructor(e,t,s){this.image=e,this.type=t,this.release=s}get isOpaque(){return"image/jpeg"===this.type}}var X=K;const Y={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};class Z{constructor(e,t,s=null,r=null){this._memoryUsed=null,this._source=null,this._symbolizerParameters=null,this._bandIds=null,this._interpolation=null,this._dirty=!1,this._transformGrid=null,this.symbolizerRenderer=null,this.rawPixelData=null,this.lij=null,this.scale=1,this.offset=[0,0],this.opacity=1,this.lij=e,this.source=t,this.width=s||t.width,this.height=r||t.height}get source(){return this._source}set source(e){this._source=e,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._memoryUsed=null)}get symbolizerParameters(){return this._symbolizerParameters||Y}set symbolizerParameters(e){this._symbolizerParameters=e}get bandIds(){return this._bandIds}set bandIds(e){if(s(e)&&e.length>0){this._bandIds&&e.every(((e,t)=>!!this._bandIds[t]&&e===this._bandIds[t]))||(this._bandIds=e,this._dirty=!0)}else this._bandIds=null}get interpolation(){return this._interpolation}set interpolation(e){this._interpolation=e,this._rasterTexture&&this._rasterTexture.setSamplingMode("bilinear"===e?9729:9728)}get transformGrid(){return this._transformGrid}set transformGrid(e){this._transformGrid=e,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null,this._memoryUsed=null)}bind(e){return!!(this.source&&this.source.pixels&&this.source.pixels.length>0)&&(this._rasterTexture&&!this._dirty||this._updateRasterTexture(e,this.bandIds),this._rasterTexture&&(this._updateColormapTexture(e),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=q(e,this.transformGrid))),!0)}getUniforms(){const e=U(this.scale,this.offset),{symbolizerParameters:t,transformGrid:s,width:r,height:i,opacity:o}=this;return{basic:e,common:P(s,[r,i],[this.source.width,this.source.height],o),colormap:t.colormap?O(t.colormap,t.colormapOffset):null,stretch:"stretch"===this.symbolizerParameters.type?F(this.symbolizerParameters):null,hillshade:"hillshade"===this.symbolizerParameters.type?A(this.symbolizerParameters):null}}getTextures(){if(!this._rasterTexture)return null;const e=[],t=[];return this._transformGridTexture&&(t.push(this._transformGridTexture),e.push("u_transformGrid")),this._rasterTexture&&(t.push(this._rasterTexture),e.push("u_image")),this._colormapTexture&&(t.push(this._colormapTexture),e.push("u_colormap")),{names:e,textures:t}}getMemoryUsage(){if(r(this._memoryUsed)){const e=this.getTextures();if(null==e)return 0;this._memoryUsed=e.textures.map((e=>e.descriptor.width*e.descriptor.height*4)).reduce(((e,t)=>e+t))}return this._memoryUsed}release(){return this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null),this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null),this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this.source=null,this.transformGrid=null,this.rawPixelData=null,!0}_updateRasterTexture(e,t){const i=this.source?this.source.extractBands(t):null;if(!(i&&i.pixels&&i.pixels.length>0))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null));const o=r(t)&&r(this.bandIds)||s(t)&&s(this.bandIds)&&t.join("")===this.bandIds.join("");if(this._rasterTexture){if(o)return;this._rasterTexture.dispose(),this._rasterTexture=null}this._rasterTexture=V(e,i,this.interpolation||"nearest")}_updateColormapTexture(e){const t=this._colormap,s=this.symbolizerParameters.colormap;return s?t?s.length!==t.length||s.some(((e,s)=>e!==t[s]))?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=D(e,s),void(this._colormap=s)):void 0:(this._colormapTexture=D(e,s),void(this._colormap=s)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}const ee=T(),te=T(),se=T(),re=T();function ie(e,t,s,r){x(ee,s),ee[r]=t[r];const i=k(ee,ee,t),o=k(te,e,t),a=b(o,i),n=b(i,i);let l;l=a<=0?t:n<=a?s:w(ee,t,I(i,i,a/n));const u=k(ee,e,l);return Math.PI/2-Math.atan(u[2]/Math.sqrt(u[0]*u[0]+u[1]*u[1]))}var oe=Object.freeze({__proto__:null,isInsideExtent:function(e,t,s=0){const r=e.extent;if(0===s)return L(r,t);const i=Math.min(r[2]-r[0],r[3]-r[1]);return j(r,t,s*i)},tiltOnEdge:ie,tiltToExtentEdge:function(e,t){const s=e.elevationBounds,r=e.extent,i=.5*(s.min+s.max);se[0]=r[0],se[1]=r[1],se[2]=i,re[0]=r[2],re[1]=r[3],re[2]=i;let o=1/0,a=1/0;return t[0]<se[0]?o=ie(t,se,re,0):t[0]>re[0]&&(o=ie(t,re,se,0)),t[1]<se[1]?a=ie(t,se,re,1):t[1]>re[1]&&(a=ie(t,re,se,1)),Math.min(o,a)},checkIfTileInfoSupportedForViewSR:function(e,t,s){if(e.spatialReference.isGeographic)return new p("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");const r=Q.checkUnsupported(e);if(r)return r;const i=function(e,t){const s=e.lods,r=s[0].resolution*2**s[0].level,i=[r*e.size[0],r*e.size[1]],o=[e.origin.x,e.origin.y],a=v(t),n=S();Q.computeRowColExtent(a,i,o,n);const l=(n[2]-n[0])*(n[3]-n[1]);if(l>W){const t=s[0].scale*2**s[0].level;let i=Math.max((a[3]-a[1])/e.size[1],(a[2]-a[0])/e.size[0])*t/r;const o=Math.floor(Math.log(i)/Math.log(10));return i=Math.ceil(i/10**o)*10**o,new p("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(t).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+i.toLocaleString()+".",{level0Scale:t,suggestedLevel0Scale:i,requiredNumRootTiles:l,allowedNumRootTiles:W})}return null}(e,s);return i||(t&&!e.spatialReference.equals(t)?new p("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}});var ae=Object.freeze({__proto__:null,isInsideExtent:function(){return!0},tiltToExtentEdge:function(){return 0},checkIfTileInfoSupportedForViewSR:function(e,t){const s=e.lods.length-1,r=e.spatialReference,i=C(r)||g(r)||_(r);if(r.isWebMercator){if(!Q.makeWebMercatorAuxiliarySphere(s).compatibleWith(e))return new p("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!i)return new p("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!Q.makeGCSWithTileSize(e.spatialReference,e.size[0],s).compatibleWith(e))return e.spatialReference.isWGS84?new p("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new p("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}if(t&&!e.spatialReference.equals(t))return new p("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}});class ne{constructor(e){this._texture=e,this._refCount=1}retain(){++this._refCount}release(){--this._refCount,0===this._refCount&&this._texture.dispose()}get texture(){return this._texture}generateMipmap(){this._texture.generateMipmap()}get descriptor(){return this._texture.descriptor}}const le={planar:oe,spherical:ae};function ue(e,t){e||console.warn("Terrain: "+t)}const ce=80/180*Math.PI,he=110/180*Math.PI;function me(e,t,s){const r=le[e.manifold];let o;if(r.isInsideExtent(e,t))o=i(e.getElevation(t[0],t[1],t[1],e.spatialReference),0);else{if(!r.isInsideExtent(e,t,1.2))return 0;const s=r.tiltToExtentEdge(e,t);if(s>ce&&s<he)return 0;const i=e.elevationBounds;o=.5*(i.min+i.max)}const a=t[2]-o;return Math.abs(a)<s?0:a<0?-1:1}function de(e){return fe(e)?{fullExtent:e.fullExtent,minScale:e.layer.minScale,maxScale:e.layer.maxScale,tilemapCache:null}:e.layer}function pe(e){return"imagery-tile"===e.type||"wcs"===e.type}function fe(e){return e&&"esri.views.3d.layers.ImageryTileLayerView3D"===e.declaredClass}function ge(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function _e(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function ye(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function Te(e){return e&&(ge(e)||fe(e)||ye(e)||_e(e)||function(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}(e))}function xe(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof Z}function ke(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof R}function be(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof ne}function we(e){const t=e&&e.sourceLayerInfo&&e.sourceLayerInfo.data;return t instanceof HTMLImageElement||t instanceof J||t instanceof HTMLCanvasElement||t instanceof ImageData}function Ie(e){return s(e)&&"release"in e&&e.release(),null}function Le(e){return e.fetchTile&&!(e.fetchTile===M.prototype.fetchTile||e.fetchTile===z.prototype.fetchTile)}function je(e,t,s,r){let i;return i=2===r||"planar"===r?"planar":"spherical",le[i].checkIfTileInfoSupportedForViewSR(e,s,t)}function ve(e,t,s){let r,i;if("wmts"===e.type){const o=e.activeLayer;if(o){const e=o.tileMatrixSet;if(e)r=e.tileInfo,i=e.fullExtent;else{const e=o.tileMatrixSets;if(e){const r=e.find((e=>null==je(e.tileInfo,e.fullExtent,t,s)));if(r)return{tileInfo:r.tileInfo,fullExtent:r.fullExtent}}}}}else i=pe(e)?e.getCompatibleFullExtent(t):e.fullExtent,r="vector-tile"!==e.type||Se.force512VTL?pe(e)?e.getCompatibleTileInfo(t,i):e.tileInfo:e.compatibleTileInfo256;return r&&i&&null==je(r,i,t,s)?{tileInfo:r,fullExtent:i}:{tileInfo:null,fullExtent:null}}const Se={force512VTL:!1};export{J as I,Z as R,X as S,ne as T,ve as a,_e as b,je as c,ke as d,xe as e,we as f,de as g,be as h,pe as i,me as j,Te as k,ye as l,fe as m,ge as n,Ie as r,Le as u,ue as w};
