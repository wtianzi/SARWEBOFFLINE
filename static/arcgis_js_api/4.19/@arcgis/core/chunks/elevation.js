/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{c as t}from"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{eachAlways as o}from"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"./asyncUtils.js";import"./loadAll.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import r from"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./opacityUtils.js";import e from"../Ground.js";import{a as s}from"./unitUtils.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"./vec4f64.js";import"./screenshotUtils.js";import"../geometry/support/MeshTexture.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"../geometry/support/MeshComponent.js";import"./earcut.js";import"./deduplicate.js";import"./triangulationUtils.js";import"./quatf64.js";import"./mat3.js";import"./BufferView.js";import"./vec2.js";import"./vec4.js";import"./projection.js";import i from"../geometry/Mesh.js";import"./vec32.js";import"./quat.js";async function p(r,p,n){let j;if(m(r)||r instanceof e){const t=await async function(t){if(m(t))return t.load();return await t.load(),await o(t.layers.map((t=>t.load()))),t}(r);j=await t.createElevationSampler(p,{demResolution:n&&n.demResolution||"finest-contiguous"})}else j=r;return function(o,r,e){const p=s(r.spatialReference),m=o.demResolution.min/p,n=Math.round(r.width/m),j=Math.round(r.height/m),l=n+1,c=j+1,u=new Float64Array(l*c*3),y=new Float32Array(l*c*2);let g=0,f=0;const d=new Uint32Array(n*j*2*3);let h=0,U=0;a.spatialReference=r.spatialReference;for(let e=0;e<c;e++){const s=r.ymin+r.height*(e/j);for(let i=0;i<l;i++){const p=r.xmin+r.width*(i/n);a.x=p,a.y=s,u[g++]=p,u[g++]=s,u[g++]=t(o.elevationAt(a),0);const m=i/n,c=e/j;y[f++]=m,y[f++]=c,e!==j&&i!==n&&(d[U++]=h+1,d[U++]=h+l+1,d[U++]=h+l,d[U++]=h,d[U++]=h+1,d[U++]=h+l),h++}}return new i({vertexAttributes:{position:u,uv:y},components:[{faces:d,shading:"smooth",material:e&&e.material||null}],spatialReference:r.spatialReference})}(j,p,n)}function m(t){return"type"in t&&("elevation"===t.type||"base-elevation"===t.type)}const a=new r;export{p as create};