// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/mathUtils ../../webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../../webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../../webgl-engine/lib/Texture".split(" "),function(n,p,w,x,q,r){function t(b){return b.sort((a,c)=>a.encoding-c.encoding)}const y={basis:1,dds:2,png:4,jpg:8,"ktx-etc2":16},u={[r.Texture.BASIS_ENCODING]:1,[r.Texture.DDS_ENCODING]:2,"image/png":4,"image/jpg":8,"image/jpeg":8,"image/ktx":16};
n.getMaterialAndTextures=function(b,a){const c=new Map,g=(e,l)=>{if(p.isNone(e))return-1;if(c.has(e.id))return e=c.get(e.id),e.usage|=l,e.id;const k=c.size;c.set(e.id,{id:k,usage:l});return k};var d=a.pbrMetallicRoughness;const h=d&&d.baseColorFactor,f=a.emissiveFactor,m=null==a.normalTexture&&null==a.emissiveTexture&&null==a.occlusionTexture&&(d?null==d.metallicRoughnessTexture&&1===d.roughnessFactor&&(1===d.metallicFactor||0===d.metallicFactor):!0),z=m?q.PBRSchematicMRRValues[0]:d?d.metallicFactor:
1,A=m?q.PBRSchematicMRRValues[1]:d?d.roughnessFactor:1;d={baseColorFactor:h?[h[0],h[1],h[2],h[3]]:[1,1,1,1],baseColorTextureId:g(d&&d.baseColorTexture,"mask"===a.alphaMode?33:1),metallicRoughnessTextureId:g(d&&d.metallicRoughnessTexture,2),metallicFactor:z,roughnessFactor:A};a={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,cullFace:"none"===a.cullFace?0:"back"===a.cullFace?2:"front"===a.cullFace?1:void 0,normalTextureId:g(a.normalTexture,4),emissiveTextureId:g(a.emissiveTexture,
16),occlusionTextureId:g(a.occlusionTexture,8),emissiveFactor:f?[f[0],f[1],f[2]]:[0,0,0],metallicRoughness:d,wrapTextures:!1,hasParametersFromSource:m};const v=[];c.forEach(({usage:e},l)=>{var k=p.isSome(b)&&b[l]&&b[l].formats;k=k?t(k.map(({name:B,format:C})=>({name:B,encoding:y[C]}))):[];v.push({id:l,usage:e,encodings:k})});return{material:a,textures:v}};n.getMaterialAndTexturesFromShared=function(b){var a=b&&b.materialDefinitions?Object.keys(b.materialDefinitions)[0]:null,c=b&&b.textureDefinitions?
Object.keys(b.textureDefinitions)[0]:null;a=a&&b.materialDefinitions[a];c=c&&b.textureDefinitions[c];b={alphaMode:"opaque",alphaCutoff:x.defaultMaskAlphaCutoff,doubleSided:!0,cullFace:0,normalTextureId:-1,emissiveTextureId:-1,occlusionTextureId:-1,emissiveFactor:[0,0,0],metallicRoughness:{baseColorFactor:[.8,.8,.8,1],baseColorTextureId:-1,metallicRoughnessTextureId:-1,metallicFactor:0,roughnessFactor:.6},wrapTextures:!1,hasParametersFromSource:!0};if(null!=a){a=a.params;a.diffuse&&(b.metallicRoughness.baseColorFactor=
[a.diffuse[0],a.diffuse[1],a.diffuse[2],1]);null!=a.doubleSided&&(b.doubleSided=a.doubleSided,b.cullFace=a.doubleSided?0:2);if("none"===a.cullFace||"front"===a.cullFace||"back"===a.cullFace)b.cullFace="none"===a.cullFace?0:"back"===a.cullFace?2:1;a.transparency&&(b.metallicRoughness.baseColorFactor[3]=w.clamp(1-a.transparency,0,1));if(a.useVertexColorAlpha||1>b.metallicRoughness.baseColorFactor[3])b.alphaMode="blend"}a=[];if(null!=c){!c.wrap||"repeat"!==c.wrap[0]&&"repeat"!==c.wrap[1]||(b.wrapTextures=
!0);let g=1;"rgba"===c.channels&&(b.alphaMode="blend",g|=32);const d=c.images[c.images.length-1],h=f=>f&&f.split("/").pop();c=Array.isArray(c.encoding)?t(c.encoding.map((f,m)=>({name:h(d.href[m]),encoding:u[f]||0}))):[{name:h(d.href),encoding:u[c.encoding]||0}];a.push({id:0,usage:g,encodings:c});b.metallicRoughness.baseColorTextureId=0}return{material:b,textures:a}};Object.defineProperty(n,"__esModule",{value:!0})});