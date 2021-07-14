// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(D,c){function A(a){return function(b,d){return null==b?d:null==d?b:a(b,d)}}function w(a,b,d,h){var r=d?3:2;if(!b.length||!b[0].length)return null;for(var k=b[0][0],m=k[0],k=k[1],e=b[0][0],g=e[0],e=e[1],f=void 0,l=void 0,z=void 0,n=void 0,c=0;c<b.length;c++)for(var v=b[c],x=0;x<v.length;x++){var p=v[x],q=p[0],y=p[1],m=t(m,q),k=t(k,y),g=u(g,q),e=u(e,y);d&&2<p.length&&(q=p[2],f=t(f,q),l=u(l,q));h&&p.length>r&&(n=p[r],z=t(f,n),n=u(l,n))}if(d){if(h)return a[0]=m,a[1]=
k,a[2]=f,a[3]=z,a[4]=g,a[5]=e,a[6]=l,a[7]=n,a.length=8,a;a[0]=m;a[1]=k;a[2]=f;a[3]=g;a[4]=e;a[5]=l;a.length=6;return a}if(h)return a[0]=m,a[1]=k,a[2]=z,a[3]=g,a[4]=e,a[5]=n,a.length=6,a;a[0]=m;a[1]=k;a[2]=g;a[3]=e;a.length=4;return a}function B(a,b,d,h,r,k){d=b.xmin;h=b.xmax;var m=b.ymin,e=b.ymax,g=b.zmin,f=b.zmax,l=b.mmin;b=b.mmax;if(r){g=g||0;f=f||0;if(k)return a[0]=d,a[1]=m,a[2]=g,a[3]=l||0,a[4]=h,a[5]=e,a[6]=f,a[7]=b||0,a;a[0]=d;a[1]=m;a[2]=g;a[3]=h;a[4]=e;a[5]=f;return a}if(k)return a[0]=d,a[1]=
m,a[2]=l||0,a[3]=h,a[4]=e,a[5]=b||0,a;a[0]=d;a[1]=m;a[2]=h;a[3]=e;return a}function C(a,b,d,h,r,k){var m=d?3:2;h=h&&k;d=d&&r;if(!b.length||!b[0].length)return null;for(var e=b[0],g=e[0],e=e[1],f=b[0],l=f[0],f=f[1],c=void 0,n=void 0,w=void 0,v=void 0,x=0;x<b.length;x++){var p=b[x],q=p[0],y=p[1],g=t(g,q),e=t(e,y),l=u(l,q),f=u(f,y);d&&2<p.length&&(q=p[2],c=t(c,q),n=u(n,q));h&&p.length>m&&(v=p[m],w=t(c,v),v=u(n,v))}if(r){c=c||0;n=n||0;if(k)return a[0]=g,a[1]=e,a[2]=c,a[3]=w||0,a[4]=l,a[5]=f,a[6]=n,a[7]=
v||0,a;a[0]=g;a[1]=e;a[2]=c;a[3]=l;a[4]=f;a[5]=n;return a}if(k)return a[0]=g,a[1]=e,a[2]=w||0,a[3]=l,a[4]=f,a[5]=v||0,a;a[0]=g;a[1]=e;a[2]=l;a[3]=f;return a}Object.defineProperty(c,"__esModule",{value:!0});var t=A(Math.min),u=A(Math.max);c.getBoundsXY=function(a,b){if(void 0!==b.paths)return w(a,b.paths,!1,!1);if(void 0!==b.rings)return w(a,b.rings,!1,!1);if(void 0!==b.points)return C(a,b.points,!1,!1,!1,!1);if(void 0!==b.xmin&&void 0!==b.ymin&&void 0!==b.xmax&&void 0!==b.ymax)return B(a,b);void 0!==
b.x&&void 0!==b.y&&(a[0]=b.x,a[1]=b.y,a[2]=b.x,a[3]=b.y);return a};c.getRingsOrPathsBounds=w;c.getExtentBounds=B;c.getPointsBounds=C;c.getPointsBoundsWidth=function(a){if(!a.length||!a[0].length)return null;for(var b=a[0][0],d=a[0][0],h=0;h<a.length;h++)var c=a[h][0],b=t(b,c),d=u(d,c);return d-b};c.getPointsBoundsCenterX=function(a){if(!a.length||!a[0].length)return null;for(var b=a[0][0],d=a[0][0],c=0;c<a.length;c++)var r=a[c][0],b=t(b,r),d=u(d,r);return b+.5*(d-b)}});