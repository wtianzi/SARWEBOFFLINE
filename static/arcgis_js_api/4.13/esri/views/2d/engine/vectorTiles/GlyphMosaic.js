// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/has ../../../../core/promiseUtils ../../../webgl ./RectangleBinPack ../webgl/Rect".split(" "),function(A,B,C,x,y,w,z){return function(){function h(b,d,c){this.height=this.width=0;this._dirties=[];this._glyphData=[];this._currentPage=0;this._glyphIndex={};this._textures=[];this._rangePromises=new Map;this.width=b;this.height=d;this._glyphSource=c;this._binPack=new w(b-4,d-4);this._glyphData.push(new Uint8Array(b*d));this._dirties.push(!0);this._textures.push(void 0)}
h.prototype.getGlyphItems=function(b,d,c){var a=this,g=[],h=this._glyphSource;b=new Set;for(var k=1/256,f=0;f<c.length;f++)b.add(Math.floor(c[f]*k));var e=[];b.forEach(function(c){if(256>=c){var b=d+c;a._rangePromises.has(b)?e.push(a._rangePromises.get(b)):(c=h.getRange(d,c).then(function(){a._rangePromises["delete"](b)},function(){a._rangePromises["delete"](b)}),a._rangePromises.set(b,c),e.push(c))}});return x.all(e).then(function(b){var e=a._glyphIndex[d];e||(e={},a._glyphIndex[d]=e);for(var k=
0;k<c.length;k++){b=c[k];var l=e[b];if(l)g[b]={sdf:!0,rect:l.rect,metrics:l.metrics,page:l.page};else{var n=h.getGlyph(d,b);if(n&&n.metrics){var l=n.metrics,m=void 0;if(0===l.width)m=new z.default(0,0,0,0);else{var f=l.width+6,t=l.height+6,r=f%4?4-f%4:4,p=t%4?4-t%4:4;1===r&&(r=5);1===p&&(p=5);m=a._binPack.allocate(f+r,t+p);m.isEmpty&&(a._dirties[a._currentPage]||(a._glyphData[a._currentPage]=null),a._currentPage=a._glyphData.length,a._glyphData.push(new Uint8Array(a.width*a.height)),a._dirties.push(!0),
a._textures.push(void 0),a._binPack=new w(a.width-4,a.height-4),m=a._binPack.allocate(f+r,t+p));var r=a._glyphData[a._currentPage],n=n.bitmap,q=p=void 0;if(n)for(var u=0;u<t;u++)for(var p=f*u,q=a.width*(m.y+u+1)+m.x,v=0;v<f;v++)r[q+v+1]=n[p+v]}e[b]={rect:m,metrics:l,tileIDs:null,page:a._currentPage};g[b]={sdf:!0,rect:m,metrics:l,page:a._currentPage};a._dirties[a._currentPage]=!0}}}return g})};h.prototype.removeGlyphs=function(b){for(var d in this._glyphIndex){var c=this._glyphIndex[d];if(c){var a=
void 0,g;for(g in c)if(a=c[g],a.tileIDs["delete"](b),0===a.tileIDs.size){for(var h=this._glyphData[a.page],k=a.rect,f=void 0,e=void 0,q=0;q<k.height;q++)for(f=this.width*(k.y+q)+k.x,e=0;e<k.width;e++)h[f+e]=0;delete c[g];this._dirties[a.page]=!0}}}};h.prototype.bind=function(b,d,c,a){void 0===a&&(a=0);this._textures[c]||(this._textures[c]=new y.Texture(b,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var g=this._textures[c];g.setSamplingMode(d);
this._dirties[c]&&g.setData(this._glyphData[c]);b.bindTexture(g,a);this._dirties[c]=!1};h.prototype.dispose=function(){this._binPack=null;for(var b=0,d=this._textures;b<d.length;b++){var c=d[b];c&&c.dispose()}this._textures.length=0};return h}()});