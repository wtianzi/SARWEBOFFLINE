/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{s as e}from"../core/lang.js";import"./object.js";import"../kernel.js";import"../config.js";import{i as t}from"./Logger.js";import"./string.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"../core/urlUtils.js";import"../request.js";import{g as r}from"./assets.js";function n(e){return r(`esri/libs/i3s/${e}`)}let o,s,i;async function f(e){await g();const t=[e.geometryBuffer];return{result:b(e,t),transferList:t}}async function a(t){var r;await g();const n=[t.geometryBuffer],{geometryBuffer:o}=t,s=o.byteLength,f=i._malloc(s),a=new Uint8Array(i.HEAPU8.buffer,f,s);a.set(new Uint8Array(o));const u=i.dracoDecompressPointCloudData(f,a.byteLength);if(i._free(f),u.error.length>0)throw`i3s.wasm: ${u.error}`;const c=(null==(r=u.featureIds)?void 0:r.length)>0?e(u.featureIds):null,l=e(u.positions);c&&n.push(c.buffer),n.push(l.buffer);return{result:{positions:l,featureIds:c},transferList:n}}async function u(e){await g(),h(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function c(e){await g(),y(e)}async function l(e){await g(),i.setLegacySchema(e.context,e.jsonSchema)}function m(e){p(e)}function y(e){const t=e.modifications,r=i._malloc(8*t.length),n=new Float64Array(i.HEAPU8.buffer,r,t.length);for(let e=0;e<t.length;++e)n[e]=t[e];i.setModifications(e.context,r,t.length,e.isGeodetic),i._free(r)}function b(r,n){if(!i)return null;const{context:o,localOrigin:s,globalTrafo:f,mbs:a,obb:u,elevationOffset:c,geometryBuffer:l,geometryDescriptor:m,indexToVertexProjector:y,vertexToRenderProjector:b}=r,d=i._malloc(l.byteLength),h=i._malloc(33*Float64Array.BYTES_PER_ELEMENT),p=new Uint8Array(i.HEAPU8.buffer,d,l.byteLength);p.set(new Uint8Array(l));const g=new Float64Array(i.HEAPU8.buffer,h,33);E(g,s);let w=g.byteOffset+3*g.BYTES_PER_ELEMENT,A=new Float64Array(g.buffer,w);E(A,f),w+=16*g.BYTES_PER_ELEMENT,A=new Float64Array(g.buffer,w),E(A,a),w+=4*g.BYTES_PER_ELEMENT,t(u)&&(A=new Float64Array(g.buffer,w),E(A,u.center),w+=3*g.BYTES_PER_ELEMENT,A=new Float64Array(g.buffer,w),E(A,u.halfSize),w+=3*g.BYTES_PER_ELEMENT,A=new Float64Array(g.buffer,w),E(A,u.quaternion));const L=m,_={isDraco:!1,isLegacy:!1,color:r.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:r.needNormals&&r.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:r.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:r.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:L.featureIndex},T=i.process(o,!!r.obb,d,p.byteLength,L,_,h,c,y,b,r.normalReferenceFrame);if(i._free(h),i._free(d),T.error.length>0)throw`i3s.wasm: ${T.error}`;if(T.discarded)return null;const j=T.componentOffsets.length>0?e(T.componentOffsets):null,P=T.featureIds.length>0?e(T.featureIds):null,I=e(T.interleavedVertedData).buffer,U=1===T.indicesType?e(new Uint16Array(T.indices.buffer,T.indices.byteOffset,T.indices.byteLength/2)):e(new Uint32Array(T.indices.buffer,T.indices.byteOffset,T.indices.byteLength/4)),B=e(T.positions),F=1===T.positionIndicesType?e(new Uint16Array(T.positionIndices.buffer,T.positionIndices.byteOffset,T.positionIndices.byteLength/2)):e(new Uint32Array(T.positionIndices.buffer,T.positionIndices.byteOffset,T.positionIndices.byteLength/4)),R={layout:r.layouts[0],interleavedVertexData:I,indices:U,hasColors:T.hasColors,hasModifications:T.hasModifications,positionData:{data:B,indices:F}};return P&&n.push(P.buffer),j&&n.push(j.buffer),n.push(I),n.push(U.buffer),n.push(B.buffer),n.push(F.buffer),{componentOffsets:j,featureIds:P,transformedGeometry:R,obb:T.obb}}function d(e){return 0===e?0:1===e?1:2===e?2:3}function h(e){const{context:t,buffer:r}=e,n=i._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(i.HEAPU8.buffer,n,o),f=new Float64Array(r);s.set(f),i.filterOBBs(t,n,o),f.set(s),i._free(n)}function p(e){i&&i.destroy(e)}function E(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function g(){return i?Promise.resolve():(s||(s=(o||(o=new Promise((e=>import("./i3s.js").then((function(e){return e.i})).then((({default:t})=>{const r=t({locateFile:n,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>Promise.reject(e)))),o).then((e=>{i=e,s=null}))),s)}const w={transform:b,destroy:p};export{m as destroyContext,a as dracoDecompressPointCloudData,u as filterObbsForModifications,h as filterObbsForModificationsSync,g as initialize,d as interpretObbModificationResults,f as process,l as setLegacySchema,c as setModifications,y as setModificationsSync,w as test};
