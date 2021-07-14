// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/mathUtils ../../../../../../core/screenUtils ../../definitions ../../number ../../materialKey/MaterialKey ../../color ../../GeometryUtils ./WGLMeshTemplate ./WGLBaseFillTemplate".split(" "),function(B,q,v,u,e,C,z,D,E,F){return function(A){function n(a,f,g,m,p,r,t,d,c){var b=A.call(this)||this;b._effects=c;a=C.FillMaterialKey.load(a);f&&(a.sdf=f.sdf,a.pattern=!0,a.textureBinding=f.textureBinding);b.fillColor=g;b.tl=m;
b.br=p;b.aux1=r;b.aux2=t;b.aux3=d;b._materialKey=a.data;return b}B._inheritsLoose(n,A);n.fromCIMFill=function(a,f){var g=a.color;g=g&&z.premultiplyAlphaRGBA(g)||0;const m=a.materialKey;if(!f)return f=e.i8888to32(0,0,0,a.colorLocked?1:0),new n(m,null,g,0,0,0,0,f,a.effects);const {rect:p,width:r,height:t}=f;var d=p.x+u.SPRITE_PADDING;const c=p.y+u.SPRITE_PADDING;var b=d+r;const h=c+t;var k=q.nextHighestPowerOfTwo(t);255<k?k=255:0>=k&&(k=q.nextHighestPowerOfTwo(h-c));var l=q.nextHighestPowerOfTwo(r||
0);255<l?l=255:0>=l&&(l=q.nextHighestPowerOfTwo(b-d));let w=v.pt2px(a.offsetX||0)+128;255<w&&(w=255);let x=v.pt2px(-a.offsetY||0)+128;255<x&&(x=255);var y=a.scaleX||1;d=e.i1616to32(d,c);b=e.i1616to32(b,h);k=e.i8888to32(l,k,w,x);y=e.i1616to32(128*y,128);l=e.i8888to32(0,0,D.degToByte(a.angle),a.colorLocked?1:0);return new n(m,f,g,d,b,k,y,l,a.effects)};n.fromSimpleFill=function(a,f,g=!1){var {color:m}=a;m=m&&"esriSFSNull"!==a.style&&z.premultiplyAlphaRGBAArray(m)||0;g=e.i8888to32(0,0,0,g?255:0);a=a.materialKey;
if(!f)return new n(a,null,m,0,0,0,0,g,null);const {rect:p,width:r,height:t}=f;var d=p.x+u.SPRITE_PADDING,c=p.y+u.SPRITE_PADDING;const b=d+r,h=c+t,k=e.i1616to32(d,c),l=e.i1616to32(b,h);d=e.i8888to32(q.nextHighestPowerOfTwo(b-d),q.nextHighestPowerOfTwo(h-c),0,0);c=e.i1616to32(128,128);return new n(a,f,m,k,l,d,c,g,null)};n.fromPictureFill=function(a,f,g=!1){const m=u.PICTURE_FILL_COLOR,{rect:p,width:r,height:t}=f;var d=p.x+u.SPRITE_PADDING,c=p.y+u.SPRITE_PADDING,b=d+r,h=c+t;d=e.i1616to32(d,c);b=e.i1616to32(b,
h);h=q.nextHighestPowerOfTwo(v.pt2px(a.width));255<h&&(h=255);c=q.nextHighestPowerOfTwo(v.pt2px(a.height));255<c&&(c=255);let k=v.pt2px(a.xoffset)+128;255<k&&(k=255);let l=v.pt2px(-a.yoffset)+128;255<l&&(l=255);h=e.i8888to32(h,c,k,l);c=e.i1616to32(128*a.xscale,128*a.yscale);g=e.i8888to32(0,0,0,g?255:0);return new n(a.materialKey,f,m,d,b,h,c,g,null)};return n}(F(E))});