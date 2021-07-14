// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/promiseUtils ../../core/screenUtils ./gfxUtils ./previewUtils ./renderUtils".split(" "),function(B,p,u,t,m,q,v,w){function x(c,b){var a=r.getContext("2d"),g=[];b&&(b.weight&&g.push(b.weight),b.size&&g.push(b.size+"px"),b.family&&g.push(b.family));a.font=g.join(" ");return a.measureText(c).width}function y(c){if(0===c.length)return 0;if(2<c.length){var b=m.px2pt(1),a=parseFloat(c);switch(c.slice(-2)){case "px":return a;case "pt":return a*b;case "in":return 72*
a*b;case "pc":return 12*a*b;case "mm":return a*z*b;case "cm":return a*A*b}}return parseFloat(c)}Object.defineProperty(p,"__esModule",{value:!0});var r=document.createElement("canvas"),z=7.2/2.54,A=72/2.54;p.previewSymbol2D=function(c,b){var a=b&&b.size?m.pt2px(b.size):null,g=b&&b.maxSize?m.pt2px(b.maxSize):null,p=b&&null!=b.opacity?b.opacity:null,r=b&&null!=b.rotation?b.rotation:null,h=q.getStroke(c),k={shape:null,fill:null,stroke:h};h&&h.width&&(h.width=Math.min(h.width,80));var f=0,d=0;switch(c.type){case "simple-marker":var h=
c.style,e=m.pt2px(c.size),f=Math.min(a||e||22,g||120),d=Math.min(a||e||22,g||120);switch(h){case "circle":k.shape={type:"circle",cx:.5*e,cy:.5*e,r:.5*e};break;case "cross":k.shape={type:"path",path:[{command:"M",values:[0,.5*d]},{command:"L",values:[f,.5*d]},{command:"M",values:[.5*f,0]},{command:"L",values:[.5*f,d]}]};break;case "diamond":k.shape={type:"path",path:[{command:"M",values:[0,.5*d]},{command:"L",values:[.5*f,0]},{command:"L",values:[f,.5*d]},{command:"L",values:[.5*f,d]},{command:"Z",
values:[]}]};break;case "square":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,0]},{command:"L",values:[f,d]},{command:"L",values:[0,d]},{command:"Z",values:[]}]};break;case "triangle":k.shape={type:"path",path:[{command:"M",values:[.5*f,0]},{command:"L",values:[f,d]},{command:"L",values:[0,d]},{command:"Z",values:[]}]};break;case "x":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,d]},{command:"M",values:[f,0]},{command:"L",values:[0,d]}]};
break;case "path":k.shape={type:"path",path:c.path||""}}break;case "simple-line":a=Math.min(a||h&&h.width||22,g||80);h.width=a;f=22<a?2*a:40;d=a;k.shape={type:"path",path:[{command:"M",values:[0,d]},{command:"L",values:[f,d]}]};break;case "picture-fill":case "simple-fill":f=Math.min(a||22,g||120);d=Math.min(a||22,g||120);k.shape=v.shapes.fill[0];break;case "picture-marker":var h=m.pt2px(c.width),l=m.pt2px(c.height),e=Math.max(h,l),l=h/l,h=1>=l?Math.ceil(e*l):e,l=1>=l?e:Math.ceil(e/l),f=Math.min(a||
h||22,g||120),d=Math.min(a||l||22,g||120);k.shape={type:"image",x:-Math.round(f/2),y:-Math.round(d/2),width:f,height:d,src:c.url||""};break;case "text":h=c.text||"Aa",e=c.font,a=Math.min(a||m.pt2px(e.size),g||120),l=x(h,{weight:e.weight,size:a,family:e.family}),f=(g=/[\uE600-\uE6FF]/.test(h))?a:l,d=a,l=.25*y((e?a:0).toString()),g&&(l+=5),k.shape={type:"text",text:h,x:0,y:l,align:"middle",decoration:e&&e.decoration,rotated:c.rotated,kerning:c.kerning},k.font=e&&{size:a,style:e.style,decoration:e.decoration,
weight:e.weight,family:e.family}}if(!k.shape)return t.reject(new u("symbolPreview: renderPreviewHTML2D","symbol not supported."));var n=q.getFill(c),a=c.color,g=null;n&&"pattern"===n.type&&a&&"picture-fill"!==c.type?g=q.getPatternUrlWithColor(n.src,a.toCss(!0)).then(function(a){n.src=a;k.fill=n;return k}):(k.fill=n,g=t.resolve(k));return g.then(function(a){return w.renderSymbol([[a]],[f,d],{node:b&&b.node,scale:!0,opacity:p,rotation:r})})}});