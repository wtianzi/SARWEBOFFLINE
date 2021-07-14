// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils","../support/mathUtils","./TerrainConst"],function(w,x,u,t,v){return function(){function n(a,e,c,f){this.samplerData=null;this.level=a;this.i=e;this.j=c;this.extent=f}n.prototype.release=function(){this.bounds=this.samplerData=null};n.prototype.computeMinMaxValue=function(a,e,c,f){f.min=Infinity;f.max=-Infinity;f.hasNoDataValues=!1;a-=this.level;if(0>=a)return f;var b=Math.pow(2,a);if(Math.floor(e/b)!==this.i||Math.floor(c/b)!==this.j)return f;
var d=Infinity,h=-Infinity,g=this.samplerData.width,k=this.samplerData.pixelData,l=.5*v.ELEVATION_NODATA_VALUE;a=(g-1)/b;c=(c-this.j*b)*a;var m=(e-this.i*b)*a;if(1>a){var n=Math.floor(c),r=Math.floor(m),p=n+r*g;e=k[p];var b=k[p+1],q=k[p+g],p=k[p+g+1];if(e+b+q+p<l)return d=c-n,l=m-r,h=t.bilerp(e,b,q,p,d,l),g=t.bilerp(e,b,q,p,d+a,l),k=t.bilerp(e,b,q,p,d,l+a),a=t.bilerp(e,b,q,p,d+a,l+a),f.min=Math.min(h,g,k,a),f.max=Math.max(h,g,k,a),f;c=n;m=r;a=1}else c=Math.floor(c),m=Math.floor(m),a=Math.ceil(a);
for(e=c;e<=c+a;e++)for(b=m;b<=m+a;b++)p=e+b*g,q=k[p],q<l?(d=Math.min(d,q),h=Math.max(h,q)):f.hasNoDataValues=!0;f.min=d;f.max=h;return f};n.create=function(a,e,c){a=new n(a[0],a[1],a[2],e);e=c.noDataValue;for(var f=c.values,b=Infinity,d=-Infinity,h=!0,g=!1,k=0;k<f.length;k++){var l=f[k];l!==e?(b=l<b?l:b,d=l>d?l:d,h=!1):g=!0}h&&(d=b=0);d=-3E38<d?d:0;a.samplerData={pixelData:c.values,width:c.width,height:c.height,minValue:b,maxValue:d,noDataValue:e,safeWidth:.99999999*(c.width-1),dx:(c.width-1)/(a.extent[2]-
a.extent[0]),dy:(c.width-1)/(a.extent[3]-a.extent[1]),x0:a.extent[0],y1:a.extent[3]};a.bounds=[b,d];a.hasNoDataValues=g;return a};n.sample=function(a,e,c){for(var f=0;f<c.length;f++){var b=c[f];if(b){var d=b.safeWidth,h=b.width,g=b.pixelData,k=u.clamp(b.dy*(b.y1-e),0,d),b=u.clamp(b.dx*(a-b.x0),0,d),d=Math.floor(k),l=Math.floor(b),m=d*h+l,n=m+h,r=g[m],h=g[n],m=g[m+1],g=g[n+1];if(r+h+m+g<.5*v.ELEVATION_NODATA_VALUE)return k-=d,b-=l,a=r+(m-r)*b,a+(h+(g-h)*b-a)*k}}return null};return n}()});