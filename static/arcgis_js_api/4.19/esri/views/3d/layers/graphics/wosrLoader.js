// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/Logger ../../../../core/Error ../../../../core/promiseUtils ../../../../request ../../../../core/asyncUtils ../../../../chunks/vec3f64 ../../../../core/Version ../../../../geometry/support/aaBoundingBox ../../../../support/requestImageUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/lib/Texture".split(" "),function(v,t,I,J,B,K,C,D,E,y,L,M,N,O){async function P(a,c){const e=t.isSome(c)&&c.streamDataRequester;
if(e)return Q(a,e,c);a=await C.result(K(a,t.unwrap(c)));if(!0===a.ok)return a.value.data;B.throwIfAbortError(a.error);F(a.error)}async function Q(a,c,e){a=await C.result(c.request(a,"json",e));if(!0===a.ok)return a.value;B.throwIfAbortError(a.error);F(a.error.details.url)}function F(a){throw new J("",`Request for object resource failed: ${a}`);}function R(a){const c=y.empty();a.forEach(e=>{e=e.boundingInfo;t.isSome(e)&&(y.expandWithVec3(c,e.getBBMin()),y.expandWithVec3(c,e.getBBMax()))});return c}
async function G(a,c){const e=[];for(const l in a){const q=a[l];var m=q.images[0].data;if(!m){n.warn("Externally referenced texture data is not yet supported");continue}m=q.encoding+";base64,"+m;const r="/textureDefinitions/"+l,u={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0};m=t.isSome(c)&&c.disableTextures?Promise.resolve(null):L.requestImage(m,c);e.push(m.then(w=>({refId:r,image:w,params:u,alphaChannelUsage:"rgba"===q.channels?q.alphaChannelUsage||"transparency":"none"})))}a=await Promise.all(e);
c={};for(const l of a)c[l.refId]=l;return c}function S(a){switch(a){case "mask":return 2;case "maskAndTransparency":return 3;case "none":return 1;case "transparency":return 0;default:return 0}}const n=I.getLogger("esri.views.3d.layers.graphics.objectResourceUtils"),T=new E.Version(1,2,"wosr");v.createTextureResources=G;v.load=async function(a,c){a=await P(a,c);c=await G(a.textureDefinitions,c);return{resource:a,textures:c}};v.processLoadResult=function(a,c){const e=[],m=[],l=[],q=[],r=a.resource;
var u=E.Version.parse(r.version||"1.0","wosr");T.validate(u);u=r.model.name;const w=r.model.geometries,U=r.materialDefinitions;a=a.textures;let H=0;const z=new Map;for(let A=0;A<w.length;A++){var f=w[A],p=f,d=p.params,g=d.topology;var b=!0;d.vertexAttributes||(n.warn("Geometry must specify vertex attributes"),b=!1);switch(d.topology){case "PerAttributeArray":break;case "Indexed":case null:case void 0:g=d.faces;if(!g)n.warn("Indexed geometries must specify faces"),b=!1;else if(d.vertexAttributes)for(const k in d.vertexAttributes)(d=
g[k])&&d.values?(null!=d.valueType&&"UInt32"!==d.valueType&&(n.warn(`Unsupported indexed geometry indices type '${d.valueType}', only UInt32 is currently supported`),b=!1),null!=d.valuesPerElement&&1!==d.valuesPerElement&&(n.warn(`Unsupported indexed geometry values per element '${d.valuesPerElement}', only 1 is currently supported`),b=!1)):(n.warn(`Indexed geometry does not specify face indices for '${k}' attribute`),b=!1);break;default:n.warn(`Unsupported topology '${g}'`),b=!1}p.params.material||
(n.warn("Geometry requires material"),b=!1);p=p.params.vertexAttributes;for(const k in p)p[k].values||(n.warn("Geometries with externally defined attributes are not yet supported"),b=!1);if(b){b=f.params;b={id:1,material:b.material,texture:b.texture,region:b.texture};d=f.params.vertexAttributes;p=[];for(const k in d)g=d[k],p.push([k,{data:g.values,size:g.valuesPerElement,exclusive:!0}]);d=[];if("PerAttributeArray"!==f.params.topology){f=f.params.faces;for(const k in f)d.push([k,new Uint32Array(f[k].values)])}if((f=
a&&a[b.texture])&&!z.has(b.texture)){const {image:k,params:V}=f;g=new O.Texture(k,V);q.push(g);z.set(b.texture,g)}g=(g=z.get(b.texture))?g.id:void 0;var h=l[b.material]?l[b.material][b.texture]:null;if(!h){h=b.material.substring(b.material.lastIndexOf("/")+1);h=U[h].params;1===h.transparency&&(h.transparency=0);var x=f&&f.alphaChannelUsage;x=0<h.transparency||"transparency"===x||"maskAndTransparency"===x;f={ambient:D.fromArray(h.diffuse),diffuse:D.fromArray(h.diffuse),opacity:1-(h.transparency||0),
transparent:x,textureAlphaMode:f?S(f.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:g,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:h.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};t.isSome(c)&&c.materialParamsMixin&&Object.assign(f,c.materialParamsMixin);h=new N.DefaultMaterial(f);l[b.material]||(l[b.material]={});l[b.material][b.texture]=h}m.push(h);b=new M.Geometry(p,d);H+=d.position?d.position.length:0;e.push(b)}}return{name:u,stageResources:{textures:q,
materials:m,geometries:e},pivotOffset:r.model.pivotOffset,boundingBox:R(e),numberOfVertices:H,lodThreshold:null}};Object.defineProperty(v,"__esModule",{value:!0})});