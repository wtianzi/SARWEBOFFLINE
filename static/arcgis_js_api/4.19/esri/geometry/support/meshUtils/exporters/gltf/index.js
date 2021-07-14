// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/promiseUtils ../../../../Point ./asset ./types ./glb ./imageutils ./gltf ./scene ./node".split(" "),function(a,u,m,v,b,w,n,x,y,z){function p(g,c,d){c=c||{};g=new x.GLTF(g,c,d);d=g.params;d?d.origin||(d.origin=new m({x:-1,y:-1,z:-1})):d={origin:new m({x:-1,y:-1,z:-1})};const A=d.origin,k=g.gltf;let q=1,r=1,l=null;return u.eachAlways(k.extras.promises).then(()=>{const h={origin:A};delete k.extras;const t=JSON.stringify(k,(e,f)=>{if("extras"!==e){if(f instanceof ArrayBuffer){if(n.isArrayBufferPNG(f))switch(c.imageOutputType){case b.ImageOutputType.DataURI:case b.ImageOutputType.GLB:break;
default:return e=`img${r}.png`,r++,h[e]=f,e}switch(c.bufferOutputType){case b.BufferOutputType.DataURI:return n.encodeBase64DataUri(f);case b.BufferOutputType.GLB:if(l)throw Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");l=f;return;default:return e=`data${q}.bin`,q++,h[e]=f,e}}return f}},"number"===typeof c.jsonSpacing?c.jsonSpacing:4);c.bufferOutputType===b.BufferOutputType.GLB||c.imageOutputType===b.ImageOutputType.GLB?h["model.glb"]=(new w.GLB(t,l)).buffer:
h["model.gltf"]=t;return h})}a.Asset=v.Asset;Object.defineProperty(a,"AlphaMode",{enumerable:!0,get:function(){return b.AlphaMode}});Object.defineProperty(a,"BufferOutputType",{enumerable:!0,get:function(){return b.BufferOutputType}});Object.defineProperty(a,"ColorMode",{enumerable:!0,get:function(){return b.ColorMode}});Object.defineProperty(a,"ComponentType",{enumerable:!0,get:function(){return b.ComponentType}});Object.defineProperty(a,"DataType",{enumerable:!0,get:function(){return b.DataType}});
Object.defineProperty(a,"FilterMode",{enumerable:!0,get:function(){return b.FilterMode}});Object.defineProperty(a,"ImageOutputType",{enumerable:!0,get:function(){return b.ImageOutputType}});Object.defineProperty(a,"MeshMode",{enumerable:!0,get:function(){return b.MeshMode}});a.Scene=y.Scene;a.Node=z.Node;a.MODEL_NAME_GLB="model.glb";a.MODEL_NAME_GLTF="model.gltf";a.exportGLB=function(g,c){return p(g,{bufferOutputType:b.BufferOutputType.GLB,imageOutputType:b.ImageOutputType.GLB,jsonSpacing:0},c)};
a.exportGLTF=p;Object.defineProperty(a,"__esModule",{value:!0})});