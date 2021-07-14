// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/Error ../../../../../core/promiseUtils ./BaseFeatureSource".split(" "),function(r,v,w,m,x,l,y){const z=m.getLogger("esri.views.2d.layers.features.sources.FeatureSource");m=function(t){function n(b){return t.call(this,b)||this}v._inheritsLoose(n,t);var u=n.prototype;u._fetchDataTile=async function(b){const e=this._subscriptions.get(b.key.id);let f=!1,p=0,c=0;const k=
(g,a)=>{c--;l.throwIfAborted(e);const h=b.id,d=g.reader;g=g.query;d.exceededTransferLimit?(a={id:h,addOrUpdate:d,end:f&&0===c,type:"append"},e.add({message:a,query:g}),this._onMessage(a)):(f=!0,a={id:h,addOrUpdate:d,end:0===c,type:"append"},e.add({message:a,query:g}),this._onMessage(a))};let q=0,A=0;for(;!f&&20>A++;){let g;for(let a=0;a<q+1;a++){const h=p++;c++;g=this._fetchDataTilePage(b,h,e).then(d=>d&&k(d,h)).catch(d=>{f=!0;l.isAbortError(d)||(z.error(new x("mapview-query-error","Encountered error when fetching tile",
{tile:b,error:d})),this._onMessage({id:b.id,addOrUpdate:null,end:f,type:"append"}))})}await g;l.throwIfAborted(e);q=Math.min(q+2,6)}};u._fetchDataTilePage=async function(b,e,f){const p=this._queryInfo;var c={start:this.pageSize*e,num:this.pageSize,returnExceededLimitFeatures:!0,quantizationParameters:b.getQuantizationParameters()};w.isSome(this.maxRecordCountFactor)&&(c.maxRecordCountFactor=this.maxRecordCountFactor);c=this._createQuery(b,c);try{const k=await this._queue.push({tile:b,query:c,signal:f.signal,
depth:e});l.throwIfAborted(f);return k?p!==this._queryInfo?this._fetchDataTilePage(b,e,f):{reader:k,query:c}:null}catch(k){return l.throwIfNotAbortError(k),null}};return n}(y.BaseFeatureSource);r.PagedFeatureSource=m;Object.defineProperty(r,"__esModule",{value:!0})});