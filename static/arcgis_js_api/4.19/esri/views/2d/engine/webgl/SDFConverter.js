// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../../../core/promiseUtils","./packingUtils"],function(p,t){return function(){function q(a){this.size=a;const f=document.createElement("canvas");f.width=f.height=a;this._context=f.getContext("2d");this._gridOuter=new Float64Array(a*a);this._gridInner=new Float64Array(a*a);this._f=new Float64Array(a);this._d=new Float64Array(a);this._z=new Float64Array(a+1);this._v=new Int16Array(a)}var l=q.prototype;l.dispose=function(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=
this._v=null;this._svg&&(document.body.removeChild(this._svg),this._svg=null)};l.draw=function(a,f,d=31){this._initSVG();const g=this._createSVGString(a);return new Promise((k,c)=>{const b=new Image;b.src="data:image/svg+xml; charset\x3dutf8, "+encodeURIComponent(g);b.onload=()=>{b.onload=null;this._context.clearRect(0,0,this.size,this.size);this._context.drawImage(b,0,0,this.size,this.size);var e=this._context.getImageData(0,0,this.size,this.size);const r=new Uint8Array(this.size*this.size*4);for(let n=
0;n<this.size*this.size;n++){const m=e.data[4*n+3]/255;this._gridOuter[n]=1===m?0:0===m?1E20:Math.max(0,.5-m)**2;this._gridInner[n]=1===m?1E20:0===m?0:Math.max(0,m-.5)**2}this._edt(this._gridOuter,this.size,this.size);this._edt(this._gridInner,this.size,this.size);for(e=0;e<this.size*this.size;e++)t.packFloatRGBA(.5-(this._gridOuter[e]-this._gridInner[e])/(2*d),r,4*e);k(r)};const h=f&&f.signal;if(h)p.onAbort(h,()=>c(p.createAbortError()))})};l._initSVG=function(){if(!this._svg){const a=document.createElementNS("http://www.w3.org/2000/svg",
"svg");a.setAttribute("style","position: absolute;");a.setAttribute("width","0");a.setAttribute("height","0");a.setAttribute("aria-hidden","true");a.setAttribute("role","presentation");document.body.appendChild(a);this._svg=a}};l._createSVGString=function(a){const f=document.createElementNS("http://www.w3.org/2000/svg","path");f.setAttribute("d",a);this._svg.appendChild(f);a=f.getBBox();var d=a.width/a.height;const g=this.size/2;let k,c,b;1<d?(c=k=g/a.width,b=this.size/4,d=g-1/d*g/2):(k=c=g/a.height,
b=g-g*d/2,d=this.size/4);f.setAttribute("style",`transform: matrix(${k}, 0, 0, ${c}, ${-a.x*k+b}, ${-a.y*c+d})`);a=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`;this._svg.removeChild(f);return a};l._edt=function(a,f,d){const g=this._f,k=this._d,c=this._v,b=this._z;for(var h=0;h<f;h++){for(var e=0;e<d;e++)g[e]=a[e*f+h];this._edt1d(g,k,c,b,d);for(e=0;e<d;e++)a[e*f+h]=k[e]}for(h=0;h<d;h++){for(e=0;e<f;e++)g[e]=a[h*
f+e];this._edt1d(g,k,c,b,f);for(e=0;e<f;e++)a[h*f+e]=Math.sqrt(k[e])}};l._edt1d=function(a,f,d,g,k){d[0]=0;g[0]=-1E20;g[1]=1E20;for(let c=1,b=0;c<k;c++){let h=(a[c]+c*c-(a[d[b]]+d[b]*d[b]))/(2*c-2*d[b]);for(;h<=g[b];)b--,h=(a[c]+c*c-(a[d[b]]+d[b]*d[b]))/(2*c-2*d[b]);b++;d[b]=c;g[b]=h;g[b+1]=1E20}for(let c=0,b=0;c<k;c++){for(;g[b+1]<c;)b++;f[c]=(c-d[b])*(c-d[b])+a[d[b]]}};return q}()});