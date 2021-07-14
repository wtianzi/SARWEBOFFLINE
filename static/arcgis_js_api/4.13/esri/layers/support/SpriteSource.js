// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../request ../../core/Error ../../core/has ../../core/Logger ../../core/promiseUtils".split(" "),function(g,h,v,w,m,n,p,l,q,r,t,k){Object.defineProperty(h,"__esModule",{value:!0});var u=t.getLogger("esri.layers.support.SpriteSource");g=function(){function f(e,b){this.baseURL=e;this.devicePixelRatio=
b;this._isRetina=!1;this._spritesData={};this.height=this.width=this.image=null;this.loadStatus="not-loaded"}Object.defineProperty(f.prototype,"spriteNames",{get:function(){var e=[],b;for(b in this._spritesData)e.push(b);e.sort();return e},enumerable:!0,configurable:!0});f.prototype.getSpriteInfo=function(e){return this._spritesData[e]};f.prototype.load=function(e){return p(this,void 0,void 0,function(){return n(this,function(b){switch(b.label){case 0:k.throwIfAborted(e);this.loadStatus="loading";
if(!this.baseURL)return[2,k.resolve(this)];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,this._loadSprites(e)];case 2:return b.sent(),this.loadStatus="loaded",[3,4];case 3:return b.sent(),this.loadStatus="failed",[3,4];case 4:return[2,this]}})})};f.prototype._loadSprites=function(e){var b=this;this._isRetina=1.15<this.devicePixelRatio?!0:!1;var f=this.baseURL,g=this._isRetina?"@2x":"",h=""+f+g+".png";return k.all([l(f+g+".json",e),l(h,m({responseType:"image"},e))]).then(function(c){var a=c[0];
c=c[1];var d=Object.keys(a.data);if(!d||0===d.length||1===d.length&&"_ssl"===d[0]||!c||!c.data)return b._spritesData=b.image=null,b.width=b.height=0,k.resolve(null);b._spritesData=a.data;a=c.data;c=Math.max(r("esri-webgl-max-texture-size"),4096);if(a.width>c||a.height>c)throw a="Sprite resource for style "+f+" is bigger than the maximum allowed of "+c+" pixels}",u.error(a),new q("SpriteSource",a);b.width=a.width;b.height=a.height;c=document.createElement("canvas");d=c.getContext("2d");c.width=a.width;
c.height=a.height;d.drawImage(a,0,0,a.width,a.height);a=d.getImageData(0,0,a.width,a.height);a=new Uint8Array(a.data);for(d=0;d<a.length;d+=4)c=a[d+3]/255,a[d]*=c,a[d+1]*=c,a[d+2]*=c;b.image=a})};return f}();h.default=g});