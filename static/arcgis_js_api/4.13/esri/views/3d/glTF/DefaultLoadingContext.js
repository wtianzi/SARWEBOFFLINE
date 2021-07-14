// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/assignHelper ../../../request ../../../core/asyncUtils ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/urlUtils".split(" "),function(g,h,d,f,t,m,n,p,q,k,l){Object.defineProperty(h,"__esModule",{value:!0});g=function(){function b(a){this.streamDataRequester=a}b.prototype.loadJSON=function(a,c){return d(this,void 0,void 0,function(){return f(this,
function(b){return[2,this.load("json",a,c)]})})};b.prototype.loadBinary=function(a,c){return d(this,void 0,void 0,function(){return f(this,function(b){return l.isDataProtocol(a)?(k.throwIfAborted(c),[2,l.dataToArrayBuffer(a)]):[2,this.load("binary",a,c)]})})};b.prototype.loadImage=function(a,c){return d(this,void 0,void 0,function(){return f(this,function(b){return[2,this.load("image",a,c)]})})};b.prototype.load=function(a,c,b){return d(this,void 0,void 0,function(){var e;return f(this,function(d){switch(d.label){case 0:return q.isNone(this.streamDataRequester)?
[4,m(c,r[a])]:[3,2];case 1:return[2,d.sent().data];case 2:return[4,n.result(this.streamDataRequester.request(c,a,b))];case 3:e=d.sent();if(!0===e.ok)return[2,e.value];k.throwIfAbortError(e.error);throw new p("","Request for resource failed: "+e.error);}})})};return b}();h.DefaultLoadingContext=g;var r={image:{responseType:"image"},binary:{responseType:"array-buffer"},json:void 0}});