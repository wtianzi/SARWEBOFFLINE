// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../kernel ../../request ../../core/colorUtils ../../core/Error ../../core/has ../../core/promiseUtils ./svgUtils maquette".split(" "),function(F,u,w,y,v,z,x,A,B,C){function D(a,h,c){return a?y(a,{responseType:"image"}).then(function(a){a=a.data;var g=a.width,e=a.height,l=g/e,k=h;c&&(k=Math.min(k,Math.max(g,e)));return{image:a,width:1>=l?Math.ceil(k*l):k,height:1>=l?k:Math.ceil(k/l)}}):A.reject(new z("renderUtils: imageDataSize","href not provided."))}Object.defineProperty(u,
"__esModule",{value:!0});var E=C.createProjector();u.renderSymbol=function(a,h,c){var p=Math.ceil(h[0]);h=Math.ceil(h[1]);if(!a.some(function(a){return!!a.length}))return null;var g=c&&c.node||document.createElement("div");null!=c.opacity&&(g.style.opacity=c.opacity.toString());E.append(g,B.renderSVG.bind(null,a,p,h,c));return g};u.tintImageWithColor=function(a,h,c,p,g){return D(a,h,g).then(function(e){var l=e.width?e.width:h,k=e.height?e.height:h,d;if(d=e.image)d=c&&"ignore"!==p?"multiply"===p&&
255===c.r&&255===c.g&&255===c.b&&1===c.a?!1:!0:!1;if(d){var g=e.image.width,t=e.image.height;(x("edge")||x("ie"))&&/\.svg$/i.test(a)&&(--g,--t);var m,b;m=Math.ceil(l);b=Math.ceil(k);d=document.createElement("canvas");d.width=m;d.height=b;d.style.width=m+"px";d.style.height=b+"px";d=d.getContext("2d");d.clearRect(0,0,m,b);d.drawImage(e.image,0,0,g,t,0,0,l,k);e=d.getImageData(0,0,l,k);g=[c.r/255,c.g/255,c.b/255,c.a];t=v.toHSV(c);for(m=0;m<e.data.length;m+=4){b=e.data;var f=m,q=g,n=t;switch(p){case "multiply":b[f+
0]*=q[0];b[f+1]*=q[1];b[f+2]*=q[2];b[f+3]*=q[3];break;default:var r=v.toHSV({r:b[f+0],g:b[f+1],b:b[f+2]});r.h=n.h;r.s=n.s;r.v=r.v/100*n.v;n=v.toRGB(r);b[f+0]=n.r;b[f+1]=n.g;b[f+2]=n.b;b[f+3]*=q[3]}}d.putImageData(e,0,0);a=d.canvas.toDataURL("image/png")}else(d=w.id&&w.id.findCredential(a))&&d.token&&(e=-1===a.indexOf("?")?"?":"\x26",a=""+a+e+"token\x3d"+d.token);return{url:a,width:l,height:k}}).catch(function(){return{url:a,width:h,height:h}})}});