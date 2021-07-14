// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../definitions ../../../../../../chunks/mat2df32 ../../../../../../chunks/vec2f32 ../../number ../../materialKey/MaterialKey ../../color ./WGLMeshTemplate ./WGLBaseMarkerTemplate".split(" "),function(E,F,k,x,G,H,r,I,t,J,K){return function(D){function p(a,b,h,l,g,d,m,e,n,y,z,A,B,u,f,v,q,C,w,L,M){var c=D.call(this)||this;c.angle=l;c.height=m;c.width=d;c.xOffset=b*w;c.yOffset=
h*w;c._markerPlacement=L;c._effects=M;c._anchorX=.5-(.5+v)*f.width/f.width;c._anchorY=.5-(.5+q)*f.height/f.height;b=(1===u?1:0)|(z?1:0)<<1|(B?1:0)<<2|(A?1:0)<<3;h=f&&f.sdf;a=I.MarkerMaterialKey.load(a);a.sdf=h;a.pattern=!0;a.textureBinding=f.textureBinding;c._materialKey=a.data;c._fillColor=g;c._outlineColor=n;c._sizeOutlineWidth=r.i8888to32(Math.round(Math.min(Math.sqrt(128*d),255)),Math.round(Math.min(Math.sqrt(128*m),255)),Math.round(Math.min(Math.sqrt(128*y),255)),Math.round(Math.min(Math.sqrt(128*
e),255)));g=f.rect.x+x.SPRITE_PADDING;e=f.rect.y+x.SPRITE_PADDING;n=g+f.width;f=e+f.height;c._offsets.xUpperLeft=g;c._offsets.yUpperLeft=e;c._offsets.xUpperRight=n;c._offsets.yUpperRight=e;c._offsets.xBottomLeft=g;c._offsets.yBottomLeft=f;c._offsets.xBottomRight=n;c._offsets.yBottomRight=f;c._texUpperLeft=r.i1616to32(g,e);c._texUpperRight=r.i1616to32(n,e);c._texBottomLeft=r.i1616to32(g,f);c._texBottomRight=r.i1616to32(n,f);d=d*C*w;m=m*C*w;c._bitestAndDistRatio=r.i1616to32(b,Math.round(64*C));c._computedWidth=
d;c._computedHeight=m;d=H.create();m=G.create();c._applyTransformation(m,d);return c}E._inheritsLoose(p,D);p.fromCIMMarker=function(a,b){const h=a.size,l=(b&&b.width||1)/(b&&b.height||1)*a.scaleX;var g=a.scaleSymbolsProportionally&&a.frameHeight?h/a.frameHeight:1;const d=t.premultiplyAlphaRGBA(a.color),m=t.premultiplyAlphaRGBA(a.outlineColor),e=k.pt2px(h),n=e*l,y=k.pt2px(a.offsetX||0),z=k.pt2px(a.offsetY||0);g*=k.pt2px(a.outlineWidth||0);const A=a.alignment||0,B=k.pt2px(a.referenceSize);let u=a.rotation||
0;a.rotateClockwise||(u=-u);let f=0,v=0;const q=a.anchorPoint;q&&(a.isAbsoluteAnchorPoint?h&&(f=-q.x/(h*l),v=q.y/h):(f=q.x,v=q.y));b=new p(a.materialKey,y,z,u,d,n,e,B,m,g,a.colorLocked,a.scaleSymbolsProportionally,!1,A,b,f,v,a.sizeRatio,F.unwrapOr(a.scaleFactor,1),a.markerPlacement,a.effects);b._vertexBoundsScaleX=a.maxVVSize?a.maxVVSize/n:1;b._vertexBoundsScaleY=a.maxVVSize?a.maxVVSize/e:1;return b};p.fromPictureMarker=function(a,b){const h=Math.round(k.pt2px(a.width)),l=Math.round(k.pt2px(a.height)),
g=x.PICTURE_FILL_COLOR,d=Math.round(k.pt2px(a.xoffset||0)),m=Math.round(k.pt2px(a.yoffset||0));b=new p(a.materialKey,d,m,a.angle,g,h,l,l,0,0,!1,!1,!1,0,b,0,0,1,1,null,null);b._vertexBoundsScaleX=a.maxVVSize?a.maxVVSize/a.width:1;b._vertexBoundsScaleY=a.maxVVSize?a.maxVVSize/a.height:1;return b};p.fromSimpleMarker=function(a,b){const h=t.premultiplyAlphaRGBAArray(a.color),l=Math.round(k.pt2px(a.size)),g=Math.round(k.pt2px(a.xoffset||0)),d=Math.round(k.pt2px(a.yoffset||0)),m=a.style;var e=a.outline;
const n=(e&&e.color&&t.premultiplyAlphaRGBAArray(e.color))|0;e=(e&&e.width&&Math.round(k.pt2px(e.width)))|0;b=new p(a.materialKey,g,d,a.angle,h,l,l,l,n,e,!1,!1,"esriSMSCross"===m||"esriSMSX"===m,0,b,0,0,1.96875,1,null,null);b.boundsType="esriSMSCircle"===m?"circle":"square";b._vertexBoundsScaleX=a.maxVVSize?a.maxVVSize/a.size:1;b._vertexBoundsScaleY=a.maxVVSize?a.maxVVSize/a.size:1;return b};p.fromLineSymbolMarker=function(a,b){const h=t.premultiplyAlphaRGBAArray(a.color),l=Math.round(k.pt2px(6*a.lineWidth)),
g="cross"===a.style||"x"===a.style;switch(a.placement){case "begin-end":var d="Both";break;case "begin":d="JustBegin";break;case "end":d="JustEnd";break;default:d="None"}d={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:d,offsetAlongLine:0};b=new p(a.materialKey,0,0,0,h,l,l,l/6,h,g?Math.round(k.pt2px(a.lineWidth)):0,!1,!1,g,1,b,0,0,1.96875,1,d,null);b.boundsType="circle"===a.style?"circle":"square";return b};return p}(K(J))});