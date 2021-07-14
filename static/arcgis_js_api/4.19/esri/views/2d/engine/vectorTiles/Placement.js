// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","./GeometryUtils","./decluttering/config","../webgl/Geometry","./TextShaping"],function(P,t,ia,l,S){let Y=function(H,F,a,d,b,c=.5,f=t.C_INFINITY){this.anchor=H;this.labelAngle=F;this.glyphAngle=a;this.page=d;this.alternateVerticalGlyph=b;this.minzoom=c;this.maxzoom=f},ea=function(H,F,a,d,b,c,f,g,m,v,e,r){this.tl=H;this.tr=F;this.bl=a;this.br=d;this.mosaicRect=b;this.labelAngle=c;this.minAngle=f;this.maxAngle=g;this.anchor=m;this.minzoom=v;this.maxzoom=e;this.page=r},fa=function(H){this.shapes=
H},ma=function(){function H(){}var F=H.prototype;F.getIconPlacement=function(a,d,b){const c=new l.Point(a.x,a.y),f=0===b.rotationAlignment,g=b.keepUpright;let m=b.rotate*t.C_DEG_TO_RAD;f&&(m+=a.angle);a=new fa([]);b.allowOverlap&&b.ignorePlacement||!ia.DECLUTTER_TILES||(a.iconColliders=[]);this._addIconPlacement(a,c,d,b,m);f&&g&&this._addIconPlacement(a,c,d,b,m+t.C_PI);return a};F._addIconPlacement=function(a,d,b,c,f){var g=b.pixelRatio;const m=b.width/g,v=b.height/g;var e=c.offset;let r=e[0];e=e[1];
switch(c.anchor){case 0:r-=m/2;e-=v/2;break;case 1:e-=v/2;break;case 2:r-=m;e-=v/2;break;case 3:r-=m/2;break;case 4:r-=m/2;e-=v;break;case 7:e-=v;break;case 6:r-=m;break;case 8:r-=m,e-=v}b=b.rect;var C=2/g,q=r-C,h=e-C,n=q+b.width/g,u=h+b.height/g;g=new l.Point(q,h);C=new l.Point(n,u);q=new l.Point(q,u);h=new l.Point(n,h);0!==f&&(n=Math.cos(f),u=Math.sin(f),g.rotate(n,u),C.rotate(n,u),q.rotate(n,u),h.rotate(n,u));b=new ea(g,h,q,C,b,f,0,256,d,.5,t.C_INFINITY,0);a.shapes.push(b);c.allowOverlap&&c.ignorePlacement||
!ia.DECLUTTER_TILES||(b=c.size,g=c.padding,a.iconColliders.push({xTile:d.x,yTile:d.y,dxPixels:r*b-g,dyPixels:e*b-g,hard:!c.optional,partIndex:0,width:m*b+2*g,height:v*b+2*g,angle:f,minLod:.5,maxLod:t.C_INFINITY}))};F.getTextPlacement=function(a,d,b,c){var f=new l.Point(a.x,a.y);const g=c.rotate*t.C_DEG_TO_RAD;var m=0===c.rotationAlignment;const v=c.keepUpright,e=c.padding;let r=.5;const C=m?a.angle:0,q=0<=a.segment&&m,h=c.allowOverlap&&c.ignorePlacement?null:[],n=[],u=!q;var k=Number.POSITIVE_INFINITY;
let y=Number.NEGATIVE_INFINITY,M=k,N=y;const la=q?v:m&&v,D=c.size/S.SDF_GLYPH_SIZE;let T=!1;for(var w of d)if(w.vertical){T=!0;break}let x=0;w=0;if(!q&&T){var p=S.TextShaping.getTextBox(d,c.lineHeight*S.SDF_GLYPH_SIZE);switch(c.anchor){case 1:x=p.height/2;w=-p.width/2;break;case 2:x=-p.height/2;w=p.width/2;break;case 3:x=p.height/2;w=p.width/2;break;case 4:x=-p.height/2;w=-p.width/2;break;case 5:x=p.height;break;case 7:w=-p.width;break;case 6:w=p.width;break;case 8:x=-p.height}}x+=c.offset[0]*S.SDF_GLYPH_SIZE;
w+=c.offset[1]*S.SDF_GLYPH_SIZE;for(const I of d){var z=I.glyphMosaicItem;if(!z||z.rect.isEmpty)continue;d=z.rect;p=z.metrics;var B=z.page;if(h&&u){if(void 0!==X&&X!==I.y){var O=void 0,Q=void 0;if(T){var X=-N+x;O=k+w;Q=N-M;k=y-k}else X=k+x,O=M+w,Q=y-k,k=N-M;h.push({xTile:a.x,yTile:a.y,dxPixels:X*D-e,dyPixels:O*D-e,hard:!c.optional,partIndex:1,width:Q*D+2*e,height:k*D+2*e,angle:g,minLod:.5,maxLod:t.C_INFINITY});k=Number.POSITIVE_INFINITY;y=Number.NEGATIVE_INFINITY;M=k;N=y}X=I.y}var G=[];if(q){if(z=
(I.x+p.left-4+.5*z.metrics.width)*D*8,r=this._placeGlyph(a,r,z,b,a.segment,1,I.vertical,B,G),v&&(r=this._placeGlyph(a,r,z,b,a.segment,-1,I.vertical,B,G)),2<=r)break}else G.push(new Y(f,C,C,B,!1)),m&&v&&G.push(new Y(f,C+t.C_PI,C+t.C_PI,B,!1));B=I.x+p.left;z=I.y-S.SDF_GLYPH_BASELINE-p.top;O=B+p.width;Q=z+p.height;let A,J,Z,aa;!q&&T?I.vertical?(A=new l.Point(-((z+Q)/2+p.width/2)-4+x,(B+O)/2-p.height/2-4+w),J=new l.Point(A.x+d.width,A.y+d.height),Z=new l.Point(A.x,J.y),aa=new l.Point(J.x,A.y)):(A=new l.Point(-z+
4+x,B-4+w),J=new l.Point(A.x-d.height,A.y+d.width),Z=new l.Point(J.x,A.y),aa=new l.Point(A.x,J.y)):(A=new l.Point(B-4+x,z-4+w),J=new l.Point(A.x+d.width,A.y+d.height),Z=new l.Point(A.x,J.y),aa=new l.Point(J.x,A.y));let R,ba,ja,ka;for(const E of G){let U,V,W;E.alternateVerticalGlyph?(R||(R=new l.Point((B+O)/2+x-p.height/2-4,(z+Q)/2+w+p.width/2+4),ba=new l.Point(R.x+d.height,R.y-d.width),ja=new l.Point(ba.x,R.y),ka=new l.Point(R.x,ba.y)),G=R,U=ja,V=ka,W=ba):(G=A,U=Z,V=aa,W=J);const ca=z,ha=Q,da=E.glyphAngle+
g;if(0!==da){var K=Math.cos(da),L=Math.sin(da);G=G.clone();U=U.clone();V=V.clone();W=W.clone();G.rotate(K,L);W.rotate(K,L);U.rotate(K,L);V.rotate(K,L)}K=0;L=256;q&&T?I.vertical?E.alternateVerticalGlyph?(K=32,L=96):(K=224,L=32):(K=224,L=96):(K=192,L=64);n.push(new ea(G,V,U,W,d,E.labelAngle,K,L,E.anchor,E.minzoom,E.maxzoom,E.page));!h||la&&!this._legible(E.labelAngle)||(u?(B<k&&(k=B),ca<M&&(M=ca),O>y&&(y=O),ha>N&&(N=ha)):2>E.minzoom&&h.push({xTile:a.x,yTile:a.y,dxPixels:(B+x)*D-e,dyPixels:(ca+x)*D-
e,hard:!c.optional,partIndex:1,width:(O-B)*D+2*e,height:(ha-ca)*D+2*e,angle:da,minLod:E.minzoom,maxLod:E.maxzoom}))}}if(2<=r)return null;h&&u&&(T?(b=-N+x,f=k+w,m=N-M,k=y-k):(b=k+x,f=M+w,m=y-k,k=N-M),h.push({xTile:a.x,yTile:a.y,dxPixels:b*D-e,dyPixels:f*D-e,hard:!c.optional,partIndex:1,width:m*D+2*e,height:k*D+2*e,angle:g,minLod:.5,maxLod:t.C_INFINITY}));a=new fa(n);h&&0<h.length&&(a.textColliders=h);return a};F._legible=function(a){a=t.radToByte(a);return 65>a||193<=a};F._placeGlyph=function(a,d,
b,c,f,g,m,v,e){const r=0>g?t.positiveMod(a.angle+t.C_PI,t.C_2PI):a.angle;let C=0;0>b&&(g*=-1,b*=-1,C=t.C_PI);0<g&&++f;a=new l.Point(a.x,a.y);let q=c[f];var h=t.C_INFINITY;if(c.length<=f)return h;for(;;){var n=q.x-a.x,u=q.y-a.y;const k=Math.sqrt(n*n+u*u),y=Math.max(b/k,d);n=t.positiveMod(Math.atan2(u/k,n/k)+C,t.C_2PI);e.push(new Y(a,r,n,v,!1,y,h));m&&e.push(new Y(a,r,n,v,!0,y,h));if(y<=d)return y;a=q.clone();do{f+=g;if(c.length<=f||0>f)return y;q=c[f]}while(a.isEqual(q));h=q.x-a.x;n=q.y-a.y;u=Math.sqrt(h*
h+n*n);h*=k/u;n*=k/u;a.x-=h;a.y-=n;h=y}};return H}();P.Anchor=function(H,F,a=0,d=-1,b=.5){this.x=H;this.y=F;this.angle=a;this.segment=d;this.minzoom=b};P.PlacedSymbol=ea;P.Placement=fa;P.PlacementEngine=ma;P.TILE_COORD_SIZE=4096;P.TILE_PIXEL_RATIO=8;P.TILE_PIXEL_SIZE=512;Object.defineProperty(P,"__esModule",{value:!0})});