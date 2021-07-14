/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{s as t}from"../core/lang.js";import{f as r,b as i,L as s,i as a,e as o,u as n,c as d}from"./Logger.js";import{o as l}from"./metadata.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import c from"../core/Accessor.js";import{r as u,P as m,a as p}from"../core/scheduling.js";import"./ensureType.js";import{subclass as g}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import f from"../geometry/SpatialReference.js";import{n as v,c as _,b as y}from"./mathUtils2.js";import{c as w,f as R}from"./vec3f64.js";import{s as b,a as T,g as x,o as C,b as E,e as S,n as O,d as M}from"./vec3.js";import{g as D}from"./uid.js";import I from"../core/Handles.js";import{init as P}from"../core/watchUtils.js";import{a as A,b as L,m as H,o as U,i as F,t as z}from"./mat4.js";import{c as N}from"./aaBoundingRect.js";import{projectBuffer as j}from"../geometry/projection.js";import{T as G}from"./Scheduler.js";import{Z as V,O as W}from"./vec4f64.js";import{p as k}from"./triangulationUtils.js";import{I as B,d as q,c as Z}from"./quatf64.js";import{s as Q}from"./MapUtils.js";import{c as Y}from"./vec2f64.js";import{g as $,l as X,S as J,T as K,E as ee,n as te,d as re,C as ie,O as se,p as ae,a as oe,b as ne,D as de,V as le,q as he,r as ce,s as ue,t as me,F as pe,I as ge,R as fe,G as ve,a3 as _e,Y as ye,a4 as we}from"./VertexColor.glsl.js";import{P as Re}from"./Program.js";import{F as be,T as Te}from"./FramebufferObject.js";import{m as xe,a as Ce,d as Ee,s as Se}from"./renderState.js";import{g as Oe}from"./glUtil.js";import{W as Me,S as De}from"./ColorMaterial.js";import{a as Ie,s as Pe}from"./Util.js";import{G as Ae,e as Le,c as He}from"./glUtil3D.js";import{O as Ue,b as Fe,r as ze,c as Ne}from"./Object3D.js";import{g as je,V as Ge,B as Ve,a as We,v as ke}from"./VertexArrayObject.js";import{I as Be}from"./intersectorUtils.js";import{C as qe}from"./Camera.js";import{D as Ze}from"./PiUtils.glsl.js";import{R as Qe,b as Ye}from"./RibbonLineMaterial.js";import{P as $e,F as Xe,R as Je}from"./PhysicallyBasedRendering.glsl.js";class Ke{constructor(e=w(),t=R(.57735,.57735,.57735),r=!0){this.intensity=e,this.direction=t,this.castShadows=r}}class et{constructor(e=w(),t=R(.57735,.57735,.57735)){this.intensity=w(),this.direction=w(),this.intensity=e,this.direction=t}}class tt{constructor(e=w()){this.intensity=e}}class rt{constructor(){this.sh={r:[0],g:[0],b:[0]}}}let it=class extends c{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.SCENEVIEW_LOCKING_LOG=!1,this.HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED=!0,this.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,this.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,this.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.ENABLE_PROFILE_DEPTH_RANGE=!1,this.DISABLE_FAST_UPDATES=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1}};e([h()],it.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),e([h()],it.prototype,"SCENEVIEW_LOCKING_LOG",void 0),e([h()],it.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED",void 0),e([h()],it.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),e([h()],it.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),e([h()],it.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),e([h()],it.prototype,"DECONFLICTOR_SHOW_GRID",void 0),e([h()],it.prototype,"LABELS_SHOW_BORDER",void 0),e([h()],it.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),e([h()],it.prototype,"OVERLAY_SHOW_CENTER",void 0),e([h()],it.prototype,"SHOW_POI",void 0),e([h()],it.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),e([h()],it.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),e([h()],it.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),e([h()],it.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),e([h()],it.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),e([h()],it.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),e([h()],it.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),e([h()],it.prototype,"I3S_TREE_SHOW_TILES",void 0),e([h()],it.prototype,"I3S_SHOW_MODIFICATIONS",void 0),e([h()],it.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),e([h()],it.prototype,"DISABLE_FAST_UPDATES",void 0),e([h()],it.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),e([h()],it.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),e([h()],it.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),it=e([g("esri.views.3d.support.DebugFlags")],it);const st=new it;class at{constructor(e,t){this.id=D(),this._renderTarget=null,this._renderTarget=new be(e,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,hasMipmap:t,maxAnisotropy:8,width:0,height:0})}dispose(){this._renderTarget=r(this._renderTarget)}getTexture(){return this._renderTarget?this._renderTarget.colorTexture:null}isValid(){return null!==this._renderTarget}resize(e,t){this._renderTarget.resize(e,t)}bind(e){e.bindFramebuffer(this._renderTarget)}generateMipMap(){this._renderTarget.colorTexture.descriptor.hasMipmap&&this._renderTarget.colorTexture.generateMipmap()}disposeRenderTargetMemory(){this._renderTarget&&this._renderTarget.resize(0,0)}getGpuMemoryUsage(){let e=0;return this._renderTarget&&(e+=je(this._renderTarget)),e}}class ot{constructor(e,t){this.vec3=e,this.id=t}}function nt(e,t,r,i){return new ot(R(e,t,r),i)}class dt{constructor(e){this.extent=N(),this.resolution=0,this.renderLocalOrigin=nt(0,0,0,"O"),this.pixelRatio=1,this.renderTargets={color:{fbo:new at(e,!0),valid:!1,lastUsed:1/0},colorWithoutRasterImage:{fbo:new at(e,!0),valid:!1,lastUsed:1/0},highlight:{fbo:new at(e,!1),valid:!1,lastUsed:1/0},water:{fbo:new at(e,!0),valid:!1,lastUsed:1/0},occluded:{fbo:new at(e,!0),valid:!1,lastUsed:1/0}}}dispose(){this.renderTargets.color.fbo.dispose(),this.renderTargets.colorWithoutRasterImage.fbo.dispose(),this.renderTargets.highlight.fbo.dispose(),this.renderTargets.water.fbo.dispose(),this.renderTargets.occluded.fbo.dispose()}drawRenderTargets(e,t,r){const i=this.renderTargets;i.color.valid=e.drawPass(0,i.color.fbo,t),i.highlight.valid=e.drawPass(5,i.highlight.fbo,t),i.water.valid=e.drawPass(3,i.water.fbo,t),i.occluded.valid=e.drawPass(0,i.occluded.fbo,t,1),i.colorWithoutRasterImage.valid=r&&e.drawPass(0,i.colorWithoutRasterImage.fbo,t,2)}computeRenderTargetValidityBitfield(){const e=this.renderTargets;return+e.color.valid|+e.colorWithoutRasterImage.valid<<1|+e.highlight.valid<<2|+e.water.valid<<3|+e.occluded.valid<<4}validateUsage(e,t){if(e.valid)e.lastUsed=t;else if(t-e.lastUsed>lt)e.fbo.disposeRenderTargetMemory(),e.lastUsed=1/0;else if(e.lastUsed<1/0)return!0;return!1}collectUnusedMemory(e){let t=!1;return t=this.validateUsage(this.renderTargets.color,e)||t,t=this.validateUsage(this.renderTargets.colorWithoutRasterImage,e)||t,t=this.validateUsage(this.renderTargets.highlight,e)||t,t=this.validateUsage(this.renderTargets.occluded,e)||t,t=this.validateUsage(this.renderTargets.water,e)||t,t}getGpuMemoryUsage(){return this.renderTargets.color.fbo.getGpuMemoryUsage()+this.renderTargets.colorWithoutRasterImage.fbo.getGpuMemoryUsage()+this.renderTargets.highlight.fbo.getGpuMemoryUsage()+this.renderTargets.water.fbo.getGpuMemoryUsage()+this.renderTargets.occluded.fbo.getGpuMemoryUsage()}}const lt=1e3;class ht{constructor(){this._uniforms={proj:[],uShadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}dispose(){this._uniforms=null}getPrograms(e){return this._uniforms[e]||[]}subscribeProgram(e){for(const t in this._uniforms)e.hasUniform(t)&&this._uniforms[t].push(e)}unsubscribeProgram(e){for(const t in this._uniforms)u(this._uniforms[t],e)}}class ct{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}class ut{constructor(e){this._context=e,this._perConstructorInstances=new Map,this._frameCounter=0,this._keepAliveFrameCount=1200}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.dispose())))),this._perConstructorInstances.clear()}acquire(e,t){const r=t.key;let i=this._perConstructorInstances.get(e);i||(i=new Map,this._perConstructorInstances.set(e,i));let s=i.get(r);return void 0===s&&(s=new ct(new e(this._context,t)),i.set(r,s)),++s.refCount,s.technique}acquireAndReleaseExisting(e,t,r){return i(r)?this.acquire(e,t):t.key===r.key&&r instanceof e?r:(this.release(r),this.acquire(e,t))}release(e){if(i(e))return;const t=this._perConstructorInstances.get(e.constructor).get(e.key);t.refCount-=1,0===t.refCount&&(t.refZeroFrame=this._frameCounter)}frameUpdate(){this._frameCounter++,this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((t,r)=>{0===t.refCount&&t.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(t.technique.dispose(),e.delete(r))})),0===e.size&&this._perConstructorInstances.delete(t)}))}getProgramsUsingUniform(e){return this._context.commonUniformStore.getPrograms(e)}async hotReload(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{e.push((async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context)})))})(t,r))})),await Promise.all(e)}}const mt=[{output:0,name:"color"},{output:1,name:"depth"},{output:2,name:"normal"},{output:3,name:"depthShadowMap"},{output:4,name:"highlight"},{output:5,name:"draped"},{output:6,name:"occlusion"},{output:7,name:"alpha"}];function pt(e,t){return e+"_"+mt.find((e=>e.output===t)).name}const gt=s.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRep");class ft{constructor(e){this.refCnt=0,this.glMaterial=e}incRefCnt(){++this.refCnt}decRefCnt(){--this.refCnt,Ie(this.refCnt>=0)}getRefCnt(){return this.refCnt}getGLMaterial(){return this.glMaterial}}class vt{constructor(e,t,r){this._textureRep=e,this._techniqueRep=t,this.onMaterialChanged=r,this._id2glMaterialRef=new Map}dispose(){this._textureRep.dispose()}acquire(e,t){this.ownMaterial(e);const r=pt(e.id,t);let i=this._id2glMaterialRef.get(r);if(null==i){const s=e.getGLMaterial({material:e,techniqueRep:this._techniqueRep,textureRep:this._textureRep,output:t});return i=new ft(s),i.incRefCnt(),this._id2glMaterialRef.set(r,i),s}return i.incRefCnt(),i.getGLMaterial()}release(e,t){const r=pt(e.id,t),i=this._id2glMaterialRef.get(r);if(i.decRefCnt(),0===i.getRefCnt()){const e=i.getGLMaterial();e&&e.dispose(),this._id2glMaterialRef.delete(r)}}materialChanged(e){for(const t of mt)if(5!==t.output&&6!==t.output){const r=this._id2glMaterialRef.get(pt(e.id,t.output));if(r&&r.getGLMaterial()){const e=r.getGLMaterial();e.updateParameters&&e.updateParameters()}}this.onMaterialChanged&&this.onMaterialChanged(e)}ownMaterial(e){a(e.materialRepository)&&e.materialRepository!==this&&gt.error("Material is already owned by a different material repository"),e.materialRepository=this}}let _t=0;class yt{constructor(){this.ROOT_ORIGIN_ID="rg_root_"+_t++,this._origins=new Map,this._gridSize=42e5}getOrigin(e){const t=this._origins.get(this.ROOT_ORIGIN_ID);if(null==t){if(a(yt.testOrigin)){const t=yt.testOrigin;return this._origins.set(this.ROOT_ORIGIN_ID,nt(t[0],t[1],t[2],this.ROOT_ORIGIN_ID)),this.getOrigin(e)}const t=nt(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,t),t}b(wt,e,t.vec3),wt[0]=Math.abs(wt[0]),wt[1]=Math.abs(wt[1]),wt[2]=Math.abs(wt[2]);const r=this._gridSize;if(wt[0]<r&&wt[1]<r&&wt[2]<r)return t;const i=Math.round(e[0]/r),s=Math.round(e[1]/r),o=Math.round(e[2]/r),n=`rg_${i}/${s}/${o}`;let d=this._origins.get(n);return d||(d=nt(i*r,s*r,o*r,n),this._origins.set(n,d)),d}_drawOriginBox(e){const t=window.view,r=t._stage;if(null==this._object){this._material=new Qe({width:2,color:[0,1,0,1]}),r.add(this._material);const e=new Me({isPickable:!1});this._object=new Ue({castShadow:!1}),r.add(this._object),e.add(this._object),r.add(e)}const i=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=i.length,a=new Array(3*s),o=new Uint16Array(2*(s-1)),n=.5*this._gridSize;for(let t=0;t<s;t++)a[3*t+0]=e[0]+(1&i[t]?n:-n),a[3*t+1]=e[1]+(2&i[t]?n:-n),a[3*t+2]=e[2]+(4&i[t]?n:-n),t>0&&(o[2*t+0]=t-1,o[2*t+1]=t);j(a,f.WebMercator,0,a,t.spatialReference,0,s);const d=new Ae([["position",{size:3,data:a,exclusive:!0}]],[["position",o]],2);r.add(d),this._object.addGeometry(d,this._material,B),console.log(this._origins.size,e)}}const wt=w();!function(e){e.testOrigin=null}(yt||(yt={}));var Rt=yt;class bt{constructor(e,t,r,i,s,a){this.rctx=e,this.offscreenRenderingHelper=t,this.scenelightingData=r,this.shadowMap=i,this.ssaoHelper=s,this.sliceHelper=a,this.camera=null,this.lastFrameCamera=new qe,this.pass=0,this.slot=0,this.highlightDepthTexture=null,this.renderOccludedMask=Tt,this.hasOccludees=!1}resetRenderOccludedMask(){this.renderOccludedMask=Tt}get isHighlightPass(){return 5===this.pass}}const Tt=13;class xt{constructor(){this.adds=new m,this.removes=new m,this.updates=new m({allocator:e=>e||new Ct,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class Ct{}class Et{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}function St(e){const t=new Map,r=e=>{let r=t.get(e);return r||(r=new Et,t.set(e,r)),r};return e.adds.forAll((e=>{Ot(e)&&r(e.material).adds.push(e)})),e.removes.forAll((e=>{Ot(e)&&r(e.material).removes.push(e)})),e.updates.forAll((e=>{Ot(e.renderGeometry)&&r(e.renderGeometry.material).updates.push(e)})),t}function Ot(e){return e.data.indexCount>=1}class Mt{constructor(e){null==e?e=16:e<65536&&(e=v(e)),this._array=new Float32Array(e),this._size=0}resize(e,t){if(this._size=e,this._size>this._array.length){let e=this._array.length||1;for(;e<this._size;)e*=2;const r=new Float32Array(e);return t&&r.set(this._array),this._array=r,!0}const r=2*this._size;if(r<=this._array.length){let e=this._array.length;for(;e>=r;)e=Math.floor(e/2);const i=new Float32Array(e);return t&&i.set(this._array.subarray(0,e)),this._array=i,!0}return!1}append(e){const t=this._size;this.resize(this._size+e.length,!0),this._array.set(e,t)}erase(e,t){for(let r=e;r<t;++r)this._array[r]=0}get array(){return this._array}get size(){return this._size}}function Dt(e){e.fragment.uniforms.add("lastFrameColorMap","sampler2D"),e.fragment.uniforms.add("reprojectionMat","mat4"),e.fragment.uniforms.add("rpProjectionMat","mat4"),e.fragment.code.add($`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy*0.5 + 0.5;
  }
  `)}function It(e,t){e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("depthMapView","sampler2D"),e.fragment.uniforms.add("ssrViewMat","mat4"),e.fragment.uniforms.add("invResolutionHeight","float"),e.fragment.include(X),e.include(Dt),e.fragment.code.add($`
  const int maxSteps = ${t.highStepCount?"150;":"75;"}

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(rpProjectionMat, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMapView, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
          return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}function Pt(e){e.fragment.code.add($`
    float normals2FoamIntensity(vec3 n, float waveStrength){
      float normalizationFactor =  max(0.015, waveStrength);
      return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
    }
  `)}function At(e){e.fragment.code.add($`
    vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
      return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
    }
  `)}function Lt(e){e.fragment.uniforms.add("texWaveNormal","sampler2D"),e.fragment.uniforms.add("texWavePerturbation","sampler2D"),e.fragment.uniforms.add("waveParams","vec4"),e.fragment.uniforms.add("waveDirection","vec2"),e.include(Pt),e.fragment.code.add($`
      const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);

      vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
        return 2.0 * texture2D(_tex, _uv).rg - 1.0;
      }

      float sampleNoiseTexture(vec2 _uv) {
        return texture2D(texWavePerturbation, _uv).b;
      }

      vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
        return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
      }

      float computeProgress(vec2 uv, float time) {
        return fract(time);
      }

      float computeWeight(vec2 uv, float time) {
        float progress = computeProgress(uv, time);
        return 1.0 - abs(1.0 - 2.0 * progress);
      }

      vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
        float flowStrength = waveParams[2];
        float flowOffset = waveParams[3];

        vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;

        float progress = computeProgress(uv, time + phaseOffset);
        float weight = computeWeight(uv, time + phaseOffset);

        vec2 result = uv;
        result -= flowVector * (progress + flowOffset);
        result += phaseOffset;
        result += (time - progress) * FLOW_JUMP;

        return vec3(result, weight);
      }

      const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
      const float TIME_NOISE_STRENGTH = 7.77;

      vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
        float waveStrength = waveParams[0];

        // overall directional shift in uv's for directional wave movement for
        // now we do a hard coded scale for wave speed such that a unit length
        // direction is not too fast.
        vec2 waveMovement = time * -_waveDir;

        float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;

        // compute two perturbed uvs and blend weights
        // then sample the wave normals at the two positions and blend
        vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
        vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);

        vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
        vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;

        // logic to flatten the wave pattern
        // scale xy components of the normal, then adjust z (up) component
        vec3 mixNormal = normalize(normal_A + normal_B);
        mixNormal.xy *= waveStrength;
        mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));

        return mixNormal;
      }

      vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
        float waveTextureRepeat = waveParams[1];
        vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
        float foam  = normals2FoamIntensity(normal, waveParams[0]);
        return vec4(normal, foam);
      }
    `)}function Ht(e,t){1===t.viewingMode?e.vertex.code.add($`
      vec3 getLocalUp(in vec3 pos, in vec3 origin) {
          return normalize(pos + origin);
      }
    `):e.vertex.code.add($`
      vec3 getLocalUp(in vec3 pos, in vec3 origin) {
          return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code
      }
    `),1===t.viewingMode?e.vertex.code.add($`
        mat3 getTBNMatrix(in vec3 n) {
            vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
            vec3 b = normalize(cross(n, t));
            return mat3(t, b, n);
        }
    `):e.vertex.code.add($`
        mat3 getTBNMatrix(in vec3 n) {
            vec3 t = vec3(1.0, 0.0, 0.0);
            vec3 b = normalize(cross(n, t));
            return mat3(t, b, n);
        }
    `)}function Ut(e){e.fragment.code.add($`
    const float GAMMA = 2.2;
    const float INV_GAMMA = 0.4545454545;

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}function Ft(e,t){e.include($e,t),e.include(Ut),e.include(At),t.ssrEnabled&&e.include(It,t),e.fragment.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.775).add("waterSeeColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]),e.fragment.code.add($`
    PBRShadingWater shadingInfo;

    /*
    *   This function is an approximation for the sky gradient reflected
    *   the water surface and describes a combination of two fresnel terms.
    *   @parameter: cosTheta = is the result of max(dot(n,v), 0.0)
    *   @parameter: horizon = the dominant color of the sky horizon
    *   @parameter: cosTheta = the dominant color of the sky zenit
    */
    vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
      float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
      return mix(zenit, horizon, exponent);
    }

    /*
    *   This function determines the water color per pixel.
    *   @parameter: n = normal facing away from the surface
    *   @parameter: v = view direction facing away from the surface.
    *   @parameter: l = light direction facing away from the surface
    *   @parameter: lightIntensity = light intensity, currently between 0...PI
    *   @parameter: localUp = a normal for the general direction of the surface
    *   @parameter: shadow = the amount of shadow at this pixel (0 = no shadow)
    */
    vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 positionView) {

      float reflectionHit = 0.;
      vec3 seaWaterColor = linearizeGamma(color);
      // using half vector to determine the specular light
      vec3 h = normalize(l + v);
      shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
      shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
      shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
      shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
      shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
      shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);

      // angle between vertex normal and view direction
      float upDotV = max(dot(localUp,v), 0.0);
      // reflected sky color: the reflected sky color consists of two main colors, the
      // reflected color at the horizon and the reflected color of the zenit.
      // the reflected sky color is then an approximation based on the fresnel term.
      vec3 skyHorizon = linearizeGamma(skyColor);
      vec3 skyZenit = linearizeGamma(skyZenitColor);
      vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );

      // we use the upDotL to smoothen out the
      // reflected color of the water
      float upDotL = max(dot(localUp,l),0.0);

      // The approximated sky color is adjusted according to the sun position.
      // This is done as approximation for e.g. night views.
      float daytimeMod = 0.1 + upDotL * 0.9;
      skyColor *= daytimeMod;

      // If a water surface is in shadow we just use a slight darkening of the
      // water surface expressed with this shadowModifier.
      float shadowModifier = clamp(shadow, 0.8, 1.0);

      // The reflected sky color consists of the fresnel reflection multiplied with the approximated sky color.
      // The shadow is influencing the frensel term to keep the shadow impression for really near views. As long
      // as reflection are absent there is a need to have a slight shadow for depth perception.
      vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
      vec3 reflSky = fresnelModifier * skyColor * shadowModifier;

      // The reflected sea color is the input water color combined with the reflected sky color.
      // The reflected sky color is modified by the incoming light.
      vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;

      vec3 specular = vec3(0.0);
      // This prevents the specular light to be rendered when:
      // - sun is behind a polygon (e.g. sundown for elevated polygons where nDotL might be still ok)
      // - viewer is under water (for this localUp is better than n)
      if(upDotV > 0.0 && upDotL > 0.0) {
        // calculate the cook torrance BRDF but with simplified occlusion
        vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);

        // Normalize light intensity to be between 0...1. Shadow cancels out specular light here
        vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;

        specular = shadingInfo.NdotL * incidentLight * specularSun;
      }

      vec3 foam = vec3(0.0);
      if(upDotV > 0.0) {
        foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
      }
      `),t.ssrEnabled?e.fragment.code.add($`
      // Convert the world position to view position
      vec4 viewPosition = vec4(positionView.xyz, 1.0);
      vec3 viewDir = normalize(viewPosition.xyz);
      vec4 viewNormalVectorCoordinate = ssrViewMat *vec4(n, 0.0);
      vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
      vec4 viewUp = ssrViewMat *vec4(localUp, 0.0);

      // at steeper viewing angles we use more of a vertex normal (in this case up) then the wave normal
      // this removes some artifacts of normal mapping
      float correctionViewingFactor = pow(max(dot(-viewDir, viewUp.xyz), 0.0), correctionViewingPowerFactor);
      vec3 viewNormalCorrected = mix(viewUp.xyz, viewNormal, correctionViewingFactor);

      vec3 reflected = normalize(reflect(viewDir, viewNormalCorrected));

      // perform screen space reflection to detect hit
      vec3 hitCoordinate = screenSpaceIntersection( normalize(reflected), viewPosition.xyz, viewDir, viewUp.xyz);
      vec3 reflectedColor = vec3(0.0);

      // if there is a hit with ssr find reflected color from the reprojeted frame
      if (hitCoordinate.z > 0.0)
      {
        vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);

        // fade out if there if the hit is near end of Y axis
        vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
        float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -positionView.z);
        reflectionHit = waterDiffusion * clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;

        reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHit * fresnelModifier.y * ssrIntensity;
      }
      float seeColorMod =  mix(waterSeeColorMod, waterSeeColorMod*0.5, reflectionHit);
      // combining reflected sky, reflected sea, specular highlight and SSR reflections.
      return tonemapACES((1. - reflectionHit) * reflSky + reflectedColor + reflSea * seeColorMod + specular + foam);
    }
  `):e.fragment.code.add($`
      // combining reflected sky, reflected sea, specular highlight and SSR reflections.
      return tonemapACES(reflSky + reflSea * waterSeeColorMod + specular + foam);
    }
  `)}!function(e){e.bindUniforms=function(e,t,r){e.setUniform1i("lastFrameColorMap",r.lastFrameColorTextureUnit),t.bindTexture(r.lastFrameColorTexture,r.lastFrameColorTextureUnit),e.setUniformMatrix4fv("reprojectionMat",r.reprojectionMat),e.setUniformMatrix4fv("rpProjectionMat",r.camera.projectionMatrix)}}(Dt||(Dt={})),function(e){e.bindUniforms=function(e,t,r){r.ssrEnabled&&(e.setUniform1i("depthMapView",r.linearDepthTextureUnit),t.bindTexture(r.linearDepthTexture,r.linearDepthTextureUnit),e.setUniform2fv("nearFar",r.camera.nearFar),e.setUniformMatrix4fv("ssrViewMat",r.camera.viewMatrix),e.setUniform1f("invResolutionHeight",1/r.camera.height),Dt.bindUniforms(e,t,r))}}(It||(It={})),function(e){e.bindUniforms=function(e,t){e.setUniform1i("texWaveNormal",0),e.setUniform1i("texWavePerturbation",1),e.setUniform4f("waveParams",t.waveStrength,t.waveTextureRepeat,t.flowStrength,t.flowOffset),e.setUniform2f("waveDirection",t.waveDirection[0]*t.waveVelocity,t.waveDirection[1]*t.waveVelocity)}}(Lt||(Lt={}));var zt=Object.freeze({__proto__:null,build:function(e){const t=new J;return t.include(K,{linearDepth:!1}),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),t.vertex.uniforms.add("waterColor","vec4"),0!==e.output&&7!==e.output||(t.include(Ht,e),t.include(Xe,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.code.add($`
      void main(void) {
        if (waterColor.a < ${$.float(ee)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${0===e.output?"forwardLinearDepth();":""}
      }
    `)),e.multipassTerrainEnabled&&(t.fragment.include(X),t.include(te,e)),7===e.output&&(t.include(re,e),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add($`
        void main() {
          discardBySlice(vpos);
          ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),0===e.output&&(t.include(Lt,e),t.include(re,e),e.receiveShadows&&t.include(Je,e),t.include(Ft,e),t.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),t.fragment.include(ie),t.fragment.code.add($`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - camPos);
        vec3 l = normalize(-lightingMainDirection);
        float shadow = ${e.receiveShadows?$`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, l, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),2===e.output&&(t.include(Ht,e),t.include(Lt,e),t.include(re,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),t.vertex.code.add($`
        void main(void) {
          if (waterColor.a < ${$.float(ee)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.fragment.uniforms.add("timeElapsed","float"),t.fragment.code.add($`
        void main() {
          discardBySlice(vpos);

          // the created normal is in tangent space and foam
          vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
          tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);

          gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
        }
    `)),5===e.output&&(t.varyings.add("vpos","vec3"),t.vertex.code.add($`
        void main(void) {
          if (waterColor.a < ${$.float(ee)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add($`
        void main() {
          gl_FragColor = waterColor;
        }
    `)),4===e.output&&(t.include(se),t.varyings.add("vpos","vec3"),t.vertex.code.add($`
      void main(void) {
        if (waterColor.a < ${$.float(ee)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),t.include(re,e),t.fragment.code.add($`
      void main() {
        discardBySlice(vpos);
        outputHighlight();
      }
    `)),t}});class Nt extends ne{constructor(e,t){super(e,t),this.waterTextureRepository=e.waterTextureRepository}initializeProgram(e){const t=Nt.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:r.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:r.useSSR,highStepCount:!0,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Re(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),de)}ensureResource(e){return this.waterTextureRepository.ready||this.waterTextureRepository.updating||this.waterTextureRepository.loadTextures(e),this.waterTextureRepository.ready?2:1}bindPass(e,t,r){le.bindProjectionMatrix(this.program,r.camera.projectionMatrix),r.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),this.program.setUniform2fv("inverseViewport",r.inverseViewport),he(this.program,e,r)),0===this.configuration.output&&(r.lighting.setUniforms(this.program,!1),It.bindUniforms(this.program,e,r)),0!==this.configuration.output&&2!==this.configuration.output||(Lt.bindUniforms(this.program,t),this.waterTextureRepository.bindRepo(e)),this.program.setUniform4fv("waterColor",t.color),4===this.configuration.output&&se.bindOutputHighlight(e,this.program,r)}bindDraw(e){le.bindView(this.program,e),0!==this.configuration.output&&7!==this.configuration.output||le.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),0===this.configuration.output&&Je.bindUniforms(this.program,e,Ze.SHADOW_MAP),0!==this.configuration.output&&7!==this.configuration.output&&4!==this.configuration.output||re.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e){const t=this.configuration,r=3===e,i=2===e;return xe({blending:2!==t.output&&4!==t.output&&t.transparent?r?ce:ue(e):null,depthTest:{func:me(e)},depthWrite:r?t.writeDepth&&Ce:pe(e),colorWrite:Ee,polygonOffset:r||i?null:ge(t.enableOffset)})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}}Nt.shader=new fe(zt,(()=>Promise.resolve().then((function(){return zt}))));class jt extends oe{constructor(){super(...arguments),this.output=0,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.useSSR=!1,this.isDraped=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}e([ae({count:8})],jt.prototype,"output",void 0),e([ae()],jt.prototype,"receiveShadows",void 0),e([ae()],jt.prototype,"slicePlaneEnabled",void 0),e([ae()],jt.prototype,"transparent",void 0),e([ae()],jt.prototype,"enableOffset",void 0),e([ae()],jt.prototype,"writeDepth",void 0),e([ae()],jt.prototype,"useSSR",void 0),e([ae()],jt.prototype,"isDraped",void 0),e([ae({count:4})],jt.prototype,"transparencyPassType",void 0),e([ae()],jt.prototype,"multipassTerrainEnabled",void 0),e([ae()],jt.prototype,"cullAboveGround",void 0);class Gt extends ve{constructor(e){super(e),this.updateParameters()}updateParameters(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(Nt,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){if(2===this.output)return 22===e;if(5===this.output)return null==e;if(4===this.output)return 3===e;let t=3;return this.material.params.transparent&&(t=this.material.params.writeDepth?5:8),e===t}setElapsedTimeUniform(e){const t=.001*this.material.animation.time;e.setUniform1f("timeElapsed",t*this.material.params.animationSpeed)}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.receiveShadows&&this.material.setParameterValues({receiveShadows:e.shadowMappingEnabled})}_updateSSRState(e){e.ssrEnabled!==this.material.params.ssrEnabled&&this.material.setParameterValues({ssrEnabled:e.ssrEnabled})}ensureResources(e){return this.technique.ensureResource(e)}ensureParameters(e){0===this.output&&(this._updateShadowState(e),this._updateSSRState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),2!==this.output&&0!==this.output||this.setElapsedTimeUniform(this.technique.program)}}class Vt{constructor(e,t,r,i,s,a){this.from=e,this.to=t,this.isVisible=r,this.hasHighlights=i,this.hasOccludees=s,this.transformation=a,null!=a&&(this.transformationNormal=q(a),A(this.transformationNormal,this.transformationNormal),L(this.transformationNormal,this.transformationNormal))}}function Wt(e,t){const r=e=>({first:e.from,count:e.to-e.from});if(0===e.length)return void e.push(r(t));const i=e[e.length-1];if(a=t,(s=i).first+s.count>=a.from){const e=t.from-i.first+t.to-t.from;i.count=e}else e.push(r(t));var s,a}function kt(e){const t=e.capabilities.disjointTimerQuery;return i(t)?null:t.timestampBits()>0?new Bt(t):Zt?null:new qt(t)}class Bt{constructor(e){this.timer=e,this.start=e.createQuery(),e.createTimestamp(this.start)}stop(e,t=50){this.end=this.timer.createQuery(),this.timer.createTimestamp(this.end),this.checkQueryResult(e,t)}checkQueryResult(e,t){if(!this.timer.resultAvailable(this.end))return void setTimeout((()=>this.checkQueryResult(e,t)),t);if(this.timer.disjoint())return void e(null);const r=this.timer.getResult(this.start),i=this.timer.getResult(this.end);e((i-r)/1e6)}}class qt{constructor(e){this.timer=e,this.query=e.createQuery(),Zt=!0,this.timer.beginTimeElapsed(this.query)}stop(e,t=50){this.timer.endTimeElapsed(),Zt=!1,this.checkQueryResult(e,t)}checkQueryResult(e,t){const r=this.timer.resultAvailable(this.query),i=this.timer.disjoint();if(!r||i)i?e(null):setTimeout((()=>this.checkQueryResult(e,t)),t);else{const t=this.timer.getResult(this.query);e(t/1e6)}}}let Zt=!1;const Qt=["prepare","shadowmap","lineardepth","normals","ssao","opaque","opaque edges","transparent","transparent edges","hudvisibility","transparent terrain","atmosphere","laserline","occluded","antialiasing","highlights","hudOccluded","hudNotoccluded"];class Yt{constructor(){this.triangles=0,this.drawCalls=0}reset(){this.triangles=0,this.drawCalls=0}}function $t(e,t,r){a(r)&&(r.drawCalls+=e,r.triangles+=t)}class Xt extends p{constructor(){super("total"),this.total=0,this.frameCount=0}}class Jt{constructor(){this._startTime=0,this._lastSample=0,this._enableGPUTimer=0,this.totalTime=new Xt,this.gpuTime=new p("gpu",9),this.renderPassTimings=Qt.map((e=>new p(e))),this.stats=new Yt}enableGPUTimer(){return++this._enableGPUTimer,{remove:l((()=>--this._enableGPUTimer))}}prerender(e){this._startTime=this._lastSample=performance.now(),this._enableGPUTimer&&(this._gpuTimer=kt(e))}advance(e){const t=performance.now();this.renderPassTimings[e].record(t-this._lastSample),this._lastSample=t}postrender(){a(this._gpuTimer)&&(this._gpuTimer.stop((e=>a(e)&&this.gpuTime.record(e)),16),this._gpuTimer=null);const e=performance.now()-this._startTime;this.totalTime.record(e),this.totalTime.total+=e,this.totalTime.frameCount++}}class Kt{constructor(e,t,r){this.type="MergedRenderer",this._dataByOrigin=new Map,this._hasHighlights=!1,this._hasOccludees=!1,this._rctx=e,this._material=r,this._materialRep=t,this._glMaterials=Fe(this._material,this._materialRep),this._bufferWriter=r.createBufferWriter()}dispose(){ze(this._material,this._materialRep),this._dataByOrigin&&(this._dataByOrigin.forEach((e=>{e.vao.dispose(!0),e.vao=null})),this._dataByOrigin.clear(),this._dataByOrigin=null),this._glMaterials&&(this._glMaterials.forEach((e=>{e&&e.dispose()})),this._glMaterials.clear(),this._glMaterials=null)}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&Q(this._glMaterials,(e=>e instanceof Gt))}get rendersOccluded(){return!this.isEmpty&&1!==this._material.renderOccluded}modify(e){this.updateGeometries(e.updates),this.addAndRemoveGeometries(e.adds,e.removes),this.updateRenderCommands()}addAndRemoveGeometries(e,t){const r=this._bufferWriter,i=r.vertexBufferLayout,s=i.stride/4,a=this._dataByOrigin,o=function(e,t,r,i){const s=new Map,a=t.vertexBufferLayout.stride/4,o=(r,i)=>{const o=r.origin,n=e.get(o.id);let d=s.get(o.id);null==d&&(d={optimalCount:null==n?0:n.optimalCount,sparseCount:null==n?0:n.buffer.size,toAdd:[],toRemove:[],origin:o.vec3},s.set(o.id,d));const l=t.elementCount(r.data)*a;i?(d.optimalCount+=l,d.sparseCount+=l,d.toAdd.push(r)):(d.optimalCount-=l,d.toRemove.push(r))};for(const e of r)o(e,!0);for(const e of i)o(e,!1);return s}(a,r,e,t);o.forEach(((e,t)=>{o.delete(t);const r=e.optimalCount,n=e.sparseCount;let d=a.get(t);if(null==d)Ie(r>0),d=this.createData(i,r,e.origin),a.set(t,d);else if(0===r)return d.vao.dispose(!0),d.vao=null,void a.delete(t);const l=r<e.sparseCount/2,h=l?r:n,c=tr,u=d.buffer.size,m=d.buffer.array,p=d.buffer.resize(h,!1);l||p?this.removeAndRebuild(d,e.toRemove,s,m,c):e.toRemove.length>0?(this.removeByErasing(d,e.toRemove,s,c),e.toAdd.length>0&&(c.end=u)):(c.begin=u,c.end=u);const g=rr;Pe(g,-e.origin[0],-e.origin[1],-e.origin[2]),this.append(d,e.toAdd,s,g,c);const f=d.vao.vertexBuffers.geometry;if(f.byteSize!==d.buffer.array.buffer.byteLength)f.setData(d.buffer.array);else{const{begin:e,end:t}=c;if(e<t){const r=d.buffer.array,i=4,s=e*i,a=t*i;f.setSubData(r,s,s,a)}}d.drawCommandsDirty=!0}))}updateGeometries(e){const t=this._bufferWriter,r=t.vertexBufferLayout.stride/4;for(const i of e){const e=i.updateType,s=i.renderGeometry,a=this._dataByOrigin.get(s.origin.id),o=a&&a.instances.get(s.id);if(!o)return;if(1&e&&(o.isVisible=s.instanceParameters.visible),9&e){const e=s.instanceParameters.visible;o.hasHighlights=!!s.instanceParameters.highlights&&e}if(16&e&&(o.hasOccludees=!!s.instanceParameters.occludees),6&e){const e=a.buffer.array,i=a.vao;Ne(s,ir,sr),t.write({transformation:ir,invTranspTransformation:sr},s.data,t.vertexBufferLayout.createView(e.buffer),o.from),Ie(o.from+t.elementCount(s.data)===o.to,"material VBO layout has changed"),i.vertexBuffers.geometry.setSubData(e,o.from*r*4,o.from*r*4,o.to*r*4)}a.drawCommandsDirty=!0}}updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((e=>{e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,Q(e.instances,(t=>(t.isVisible?(t.hasHighlights&&(this._hasHighlights=!0,e.hasHighlights=!0),t.hasOccludees&&(this._hasOccludees=!0,e.hasOccludees=!0)):e.hasHiddenInstances=!0,e.hasHiddenInstances&&e.hasHighlights&&e.hasOccludees)))}));this._dataByOrigin.forEach((e=>{e.drawCommandsDirty&&((e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.drawCommandsShadowHighlightRest=null,e.stats={default:0,highlight:0,occludees:0,shadowHighlightRest:0},0===e.instances.size)return;if(!er(e)){const t=4*e.buffer.size/We(e.vao.layout.geometry);return e.drawCommandsDefault=[{first:0,count:t}],void(e.stats={default:t,highlight:0,occludees:0,shadowHighlightRest:0})}const t=[...e.instances.values()].sort(((e,t)=>e.from===t.from?e.to>t.to?1:e.to<t.to?-1:0:e.from>t.from?1:e.from<t.from?-1:0));e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[],e.drawCommandsShadowHighlightRest=[];for(const r of t)r.isVisible&&(r.hasOccludees?Wt(e.drawCommandsOccludees,r):Wt(e.drawCommandsDefault,r),r.hasHighlights?Wt(e.drawCommandsHighlight,r):Wt(e.drawCommandsShadowHighlightRest,r));const r=e=>{let t=0;for(const r of e)t+=r.count;return t/3};e.stats={default:r(e.drawCommandsDefault),highlight:r(e.drawCommandsHighlight),occludees:r(e.drawCommandsOccludees),shadowHighlightRest:r(e.drawCommandsShadowHighlightRest)}})(e),e.drawCommandsDirty=!1)}))}updateLogic(e){return this._material.update(e)}render(e,t,r,s){const o=this._rctx,n=this._glMaterials.get(t.pass),d=5===t.pass||7===t.pass,l=6===t.pass,h=!(d||l);let c=e;if(3===t.pass&&null===c&&(c=22),!n||2!==n.ensureResources(o)||null!=c&&!n.beginSlot(c)||d&&!this._hasHighlights)return!1;n.ensureParameters(r);const u=n.getTechnique(),m=n.getPipelineState(c,!1);o.setPipelineState(m),n.bind(o,r);let p=!1;return this._dataByOrigin.forEach((e=>{if(i(e.drawCommandsDefault)&&i(e.drawCommandsHighlight)&&i(e.drawCommandsOccludees)&&i(e.drawCommandsShadowHighlightRest))return;if(d&&!e.hasHighlights)return;r.origin=e.origin,u.bindDraw(r),u.ensureAttributeLocations(e.vao),o.bindVAO(e.vao);const t=u.primitiveType;let g=d?e.drawCommandsHighlight:l&&er(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault;const f=d?e.stats.highlight:l&&er(e)?e.stats.shadowHighlightRest:e.stats.default;if(a(g)&&(this.renderCommands(o,t,g),$t(g.length,f,s),p=!0),h&&(g=e.drawCommandsOccludees,a(g))){const r=n.getPipelineState(c,!0);o.setPipelineState(r),this.renderCommands(o,t,g),o.setPipelineState(m),$t(g.length,e.stats.occludees,s),p=!0}})),p}renderCommands(e,t,r){for(let i=0;i<r.length;i++)e.drawArrays(t,r[i].first,r[i].count)}createData(e,t,r){return{instances:new Map,vao:new Ge(this._rctx,this._material.vertexAttributeLocations,{geometry:Oe(e)},{geometry:Ve.createVertex(this._rctx,35044)}),buffer:new Mt(t),optimalCount:0,origin:r,hasHiddenInstances:!1,hasHighlights:!1,hasOccludees:!1,drawCommandsDirty:!1,drawCommandsDefault:null,drawCommandsOccludees:null,drawCommandsHighlight:null,drawCommandsShadowHighlightRest:null,stats:{default:0,highlight:0,occludees:0,shadowHighlightRest:0}}}removeAndRebuild(e,t,r,i,s){for(const i of t){const t=i.id,s=e.instances.get(t);e.optimalCount-=(s.to-s.from)*r,e.instances.delete(t)}let a=0;const o=e.buffer.array;s.begin=0,s.end=0;let n=-1,d=-1,l=0;e.instances.forEach((e=>{const t=e.from*r,s=e.to*r,h=s-t;n!==d&&d!==t?(o.set(i.subarray(n,d),l),l+=d-n,n=t):-1===n&&(n=t),d=s,e.from=a/r,a+=h,e.to=a/r})),n!==d&&o.set(i.subarray(n,d),l),s.end=a}removeByErasing(e,t,r,i){i.begin=1/0,i.end=-1/0;let s=-1,a=-1;for(const o of t){const t=o.id,n=e.instances.get(t),d=n.from*r,l=n.to*r;s!==a&&a!==d?(e.buffer.erase(s,a),s=d):-1===s&&(s=d),a=l,e.instances.delete(t),e.optimalCount-=l-d,d<i.begin&&(i.begin=d),l>i.end&&(i.end=l)}s!==a&&e.buffer.erase(s,a)}append(e,t,r,i,s){const o=this._bufferWriter;for(const n of t){const t=a(n.transformation)?H(ir,i,n.transformation):i;A(sr,t),L(sr,sr);const d=s.end;o.write({transformation:t,invTranspTransformation:sr},n.data,o.vertexBufferLayout.createView(e.buffer.array.buffer),s.end/r);const l=o.elementCount(n.data)*r,h=d+l;Ie(null==e.instances.get(n.id));const c=n.instanceParameters.visible,u=!!n.instanceParameters.highlights&&c,m=!!n.instanceParameters.occludees,p=new Vt(d/r,h/r,c,u,m);e.instances.set(n.id,p),e.optimalCount+=l,s.end+=l}}get test(){return{material:this._material,glMaterials:this._glMaterials}}}function er(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}const tr={begin:0,end:0},rr=Z(),ir=Z(),sr=Z();let ar=class extends c{constructor(){super(...arguments),this._pendingAddsRemoves=new Map,this._changes=new xt,this._materialRenderers=new Map,this._sortedMaterialRenderers=new m,this._hasHighlights=!1,this._hasWater=!1}dispose(){this._changes.prune(),this._materialRenderers&&(this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear())}get updating(){return this._pendingAddsRemoves.size>0||this._changes.updates.length>0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return Q(this._materialRenderers,(e=>e.rendersOccluded))}stopAnimationsAtTime(e){this._sortedMaterialRenderers.forAll((t=>o(t.material.animation,(t=>t.stopAtTime(e)))))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size}commitChanges(){let e=!1;if(!this.updating)return!1;this.updateAddsRemoves();const t=St(this._changes);let r=!1,i=!1;return t.forEach(((t,s)=>{let a=this._materialRenderers.get(s);if(!a&&t.adds.length>0&&(a=new Kt(this.rctx,this.materialRepository,s),this._materialRenderers.set(s,a),e=!0,r=!0,i=!0),!a)return;const o=r||a.hasHighlights,n=i||a.hasWater;a.modify(t),r=r||o!==a.hasHighlights,i=i||n!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(s),a.dispose(),e=!0)})),this._changes.clear(),this._pendingAddsRemoves.clear(),e&&this.updateSortedMaterialRenderers(),r&&(this._hasHighlights=Q(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=Q(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}add(e){if(0===e.length)return;const t=0===this._pendingAddsRemoves.size;for(const t of e)this._pendingAddsRemoves.set(t,0);t&&this.notifyChange("updating")}remove(e){const t=0===this._pendingAddsRemoves.size;for(const t of e){const e=this._pendingAddsRemoves.get(t);0===e?this._pendingAddsRemoves.set(t,2):2!==e&&this._pendingAddsRemoves.set(t,1)}t&&this._pendingAddsRemoves.size>0&&this.notifyChange("updating")}modify(e,t){const r=0===this._changes.updates.length;for(const r of e){const e=this._changes.updates.pushNew();e.renderGeometry=r,e.updateType=t}r&&this._changes.updates.length>0&&this.notifyChange("updating")}updateLogic(e){let t=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:r})=>{r.updateLogic&&r.updateLogic(e)&&(t=!0)})),t}draw(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const i=this._sortedMaterialRenderers.data[r];_e(i.material,e)&&i.materialRenderer.render(null,e,t,null)}}updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))}updateAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._pendingAddsRemoves.forEach(((e,t)=>{switch(e){case 0:this._changes.adds.push(t);break;case 1:this._changes.removes.push(t)}}));let e=0;for(;e<this._changes.updates.length;){const t=this._changes.updates.data[e].renderGeometry;this._pendingAddsRemoves.has(t)?this._changes.updates.removeUnorderedIndex(e):e++}}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};e([h()],ar.prototype,"rctx",void 0),e([h()],ar.prototype,"materialRepository",void 0),e([h()],ar.prototype,"updating",null),ar=e([g("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],ar);var or=Object.freeze({__proto__:null,build:function(){const e=new J;return e.include(De),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add($`
    void main() {
      vec4 texColor = texture2D(tex, uv);
      gl_FragColor = texColor * color;
    }
  `),e}});class nr extends ne{initializeProgram(e){const t=nr.shader.get().build();return new Re(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),de)}initializePipeline(){return this.configuration.hasAlpha?xe({blending:Se(770,1,771,771),colorWrite:Ee}):xe({colorWrite:Ee})}}nr.shader=new fe(or,(()=>Promise.resolve().then((function(){return or}))));class dr extends oe{constructor(){super(...arguments),this.hasAlpha=!1}}function lr(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t[i];return r}function hr(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t;return r}function cr(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]+t[i];return r}function ur(e){return(e+1)*(e+1)}function mr(e,t,r){const i=e[0],s=e[1],a=e[2],o=r||[];return o.length=ur(t),t>=0&&(o[0]=.28209479177),t>=1&&(o[1]=.4886025119*i,o[2]=.4886025119*a,o[3]=.4886025119*s),t>=2&&(o[4]=1.09254843059*i*s,o[5]=1.09254843059*s*a,o[6]=.31539156525*(3*a*a-1),o[7]=1.09254843059*i*a,o[8]=.54627421529*(i*i-s*s)),o}function pr(e,t){const r=(i=t.r.length,_(Math.floor(Math.sqrt(i)-1),0,2));var i;for(const i of e)C(Rr,i.direction),mr(Rr,r,yr),lr(yr,br),hr(yr,i.intensity[0],wr),cr(t.r,wr),hr(yr,i.intensity[1],wr),cr(t.g,wr),hr(yr,i.intensity[2],wr),cr(t.b,wr);return t}function gr(e,t,r){!function(e,t){const r=ur(e),i=t||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let e=0;e<r;e++)i.r[e]=i.g[e]=i.b[e]=0}(t,r.sphericalHarmonics.sh),T(r.main.intensity,0,0,0);let i=!1;const s=fr,a=vr,o=_r;s.length=0,a.length=0,o.length=0;for(const t of e)t instanceof Ke&&!i?(x(r.main.direction,t.direction),r.main.intensity[0]=t.intensity[0],r.main.intensity[1]=t.intensity[1],r.main.intensity[2]=t.intensity[2],r.main.castShadows=t.castShadows,i=!0):t instanceof Ke||t instanceof et?s.push(t):t instanceof tt?a.push(t):t instanceof rt&&o.push(t);pr(s,r.sphericalHarmonics.sh),function(e,t){mr(Rr,0,yr);for(const r of e)t.r[0]+=yr[0]*br[0]*r.intensity[0]*4*Math.PI,t.g[0]+=yr[0]*br[0]*r.intensity[1]*4*Math.PI,t.b[0]+=yr[0]*br[0]*r.intensity[2]*4*Math.PI}(a,r.sphericalHarmonics.sh);for(const e of o)cr(r.sphericalHarmonics.sh.r,e.sh.r),cr(r.sphericalHarmonics.sh.g,e.sh.g),cr(r.sphericalHarmonics.sh.b,e.sh.b)}e([ae()],dr.prototype,"hasAlpha",void 0);const fr=[],vr=[],_r=[],yr=[0],wr=[0],Rr=w(),br=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398],Tr=w();class xr{constructor(){this._renderLighting={main:{intensity:w(),direction:R(1,0,0),castShadows:!1},sphericalHarmonics:{sh:{r:[0],g:[0],b:[0]}}},this._shOrder=2,this._oldSunlight={direction:w(),ambient:{color:w(),intensity:0},diffuse:{color:w(),intensity:0}}}setLightDirectionUniform(e){e.setUniform3fv("lightingMainDirection",this._renderLighting.main.direction)}setUniforms(e,t=!1){if(t){const t=(1-this._info.groundLightingFactor)*(1-this._info.globalFactor);e.setUniform1f("lightingFixedFactor",t)}else e.setUniform1f("lightingFixedFactor",0);e.setUniform1f("lightingGlobalFactor",this._info.globalFactor),this.setLightDirectionUniform(e),e.setUniform3fv("lightingMainIntensity",this._renderLighting.main.intensity),e.setUniform1f("ambientBoostFactor",.4);const r=this._renderLighting.sphericalHarmonics.sh;0===this._shOrder?e.setUniform3f("lightingAmbientSH0",r.r[0],r.g[0],r.b[0]):1===this._shOrder?(e.setUniform4f("lightingAmbientSH_R",r.r[0],r.r[1],r.r[2],r.r[3]),e.setUniform4f("lightingAmbientSH_G",r.g[0],r.g[1],r.g[2],r.g[3]),e.setUniform4f("lightingAmbientSH_B",r.b[0],r.b[1],r.b[2],r.b[3])):2===this._shOrder&&(e.setUniform3f("lightingAmbientSH0",r.r[0],r.g[0],r.b[0]),e.setUniform4f("lightingAmbientSH_R1",r.r[1],r.r[2],r.r[3],r.r[4]),e.setUniform4f("lightingAmbientSH_G1",r.g[1],r.g[2],r.g[3],r.g[4]),e.setUniform4f("lightingAmbientSH_B1",r.b[1],r.b[2],r.b[3],r.b[4]),e.setUniform4f("lightingAmbientSH_R2",r.r[5],r.r[6],r.r[7],r.r[8]),e.setUniform4f("lightingAmbientSH_G2",r.g[5],r.g[6],r.g[7],r.g[8]),e.setUniform4f("lightingAmbientSH_B2",r.b[5],r.b[6],r.b[7],r.b[8]))}set(e){this._info=e,gr(e.lights,this._shOrder,this._renderLighting),C(this._oldSunlight.direction,this._renderLighting.main.direction);const t=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._renderLighting.sphericalHarmonics.sh.r[0]*t,this._oldSunlight.ambient.color[1]=.282095*this._renderLighting.sphericalHarmonics.sh.g[0]*t,this._oldSunlight.ambient.color[2]=.282095*this._renderLighting.sphericalHarmonics.sh.b[0]*t,this._oldSunlight.ambient.intensity=1,this._oldSunlight.diffuse.color[0]=this._renderLighting.main.intensity[0]*t,this._oldSunlight.diffuse.color[1]=this._renderLighting.main.intensity[1]*t,this._oldSunlight.diffuse.color[2]=this._renderLighting.main.intensity[2]*t,this._oldSunlight.diffuse.intensity=1;const r=x(Tr,this._oldSunlight.diffuse.color);E(r,r,.4*this._info.globalFactor),S(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,r)}get globalFactor(){return this._info.globalFactor}get old(){return this._oldSunlight}}class Cr{constructor(){this.cache=new Map}dispose(){this.cache.forEach((e=>{a(e.texture)&&(e.texture.dispose(),e.texture=null)})),this.cache.clear()}acquire(e){if(i(e))return null;const t=this.patternId(e),r=this.cache.get(t);if(r)return r.refCount++,r.bind;const s=this.patternToTextureData(e,2),a=s.length/2,o={refCount:1,texture:null,bind:(e,t)=>(i(o.texture)&&(o.texture=new Te(e,{width:s.length,height:1,internalFormat:6406,pixelFormat:6406,dataType:5121,wrapMode:33071},s)),e.bindTexture(o.texture,t),a)};return this.cache.set(t,o),o.bind}release(e){if(i(e))return;const t=this.patternId(e),r=this.cache.get(t);r&&(r.refCount--,0===r.refCount&&(a(r.texture)&&r.texture.dispose(),this.cache.delete(t)))}swap(e,t){const r=this.acquire(t);return this.release(e),r}patternId(e){return e.join(",")}patternToTextureData(e,t){const r=e.reduce(((e,t)=>e+t))*t,i=new Uint8Array(r);let s=!0,a=0;for(const r of e){for(let e=0;e<r*t;e++)i[a++]=s?255:0;s=!s}return i}}function Er(e){return i(e)?e:e.slice()}function Sr(e){return[e,e]}const Or=s.getLogger("esri.views.3d.webgl-engine.lib.OverlayRenderer");let Mr=class extends(we(c)){constructor(e){super(e),this._overlays=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._lighting=new xr,this._localOrigins=new Rt,this._handles=new I,this._layerRenderers=new Map,this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers=new m,this._geometries=new Map,this.globalUnitScale=1,this.longitudeCyclical=null}initialize(){this._rctx=this.renderView.renderingContext,this._renderContext=new bt(this._rctx,null,null,null,null,null),this._stippleTextureRepository=new Cr,this.waterTextureRepository=this.renderView.waterTextureRepository,this._shaderTechniqueRepository=new ut({rctx:this._rctx,viewingMode:2,commonUniformStore:new ht,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:this.waterTextureRepository}),P(this.waterTextureRepository,"loadingState",(()=>this.emitContentChanged())),this._materialRepository=new vt(this.renderView.textureRepository,this._shaderTechniqueRepository),this._materialRepository.onMaterialChanged=e=>{(e.renderOccluded&Ur)>0!==this._rendersOccluded&&this.updateRendersOccluded(),this.emitContentChanged(),this.notifyChange("updating")},this._compositingHelper=this.renderView.compositingHelper,this._lighting.set({lights:[new tt(R(1,1,1))],groundLightingFactor:1,globalFactor:0}),this._bindParameters={slot:null,highlightDepthTexture:Le(this._rctx),camera:Pr,inverseViewport:Y(),origin:null,screenToWorldRatio:null,screenToWorldRatioGlobalWM:null,shadowMappingEnabled:!1,slicePlane:null,ssaoEnabled:!1,hasOccludees:!1,linearDepthTexture:null,linearDepthTextureUnit:0,lastFrameColorTexture:null,lastFrameColorTextureUnit:0,reprojectionMat:null,ssrEnabled:!1,lighting:this._lighting,transparencyPassType:3,terrainLinearDepthTexture:null,geometryLinearDepthTexture:null,multipassTerrainEnabled:!1,cullAboveGround:!0,multipassGeometryEnabled:!1},this._handles.add(this.scheduler.registerTask(G.STAGE,(()=>this.commitChanges()),(()=>this.updating)))}dispose(){this._handles.destroy(),this._layerRenderers.forEach((e=>e.dispose())),this._layerRenderers.clear(),this._bindParameters.highlightDepthTexture=r(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=r(this._shaderTechniqueRepository),this._temporaryRenderTarget=r(this._temporaryRenderTarget),this._debugPatternTexture=r(this._debugPatternTexture),this._quadVAO=r(this._quadVAO)}get updating(){return this._sortedLayerRenderersDirty||Q(this._layerRenderers,(e=>e.updating))||this.waterTextureRepository.updating}get hasOverlays(){return a(this._overlays)}get gpuMemoryUsage(){return a(this._overlays)?this._overlays[0].getGpuMemoryUsage()+this._overlays[1].getGpuMemoryUsage():0}get overlays(){return this._overlays}forEachOverlay(e){a(this._overlays)&&(e(this._overlays[0],0),e(this._overlays[1],1))}ensureOverlays(){if(i(this._overlays)){const e=this.renderView.renderingContext;this._overlays=[new dt(e),new dt(e)]}}disposeOverlays(){a(this._overlays)&&(this._overlays.forEach((e=>e.dispose())),this._overlays=null)}commitChanges(){let e=!1;this._layerRenderers.forEach(((t,r)=>{t.commitChanges()&&(e=!0),t.isEmpty&&(this._layerRenderers.delete(r),this._sortedLayerRenderersDirty=!0,this._handles.remove(r))})),this._sortedLayerRenderersDirty&&(this.updateSortedLayerRenderers(),e=!0),e&&(this.notifyChange("updating"),this.emitContentChanged(),this.updateHasHighlights(),this.updateRendersOccluded(),this.updateHasWater())}addGeometries(e,t,r){for(const t of e)null==t.origin&&(t.origin=this._localOrigins.getOrigin(t.boundingSphere)),i(t.id)&&(t.id=D()),this._geometries.set(t.id,t);this.ensureLayerRenderer(t).add(e),2===r&&this.notifyGraphicGeometryChanged(e,t)}removeGeometries(e,t,r){for(const t of e)this._geometries.delete(n(t.id));const i=this._layerRenderers.get(t);i&&(i.remove(e),2===r&&this.notifyGraphicGeometryChanged(e,t))}updateGeometries(e,t,r){const i=this._layerRenderers.get(t);if(i)switch(i.modify(e,r),r){case 4:case 2:return this.notifyGraphicGeometryChanged(e,t);case 1:return this.notifyGraphicVisibilityChanged(e,t)}else Or.warn("Attempted to update geometry for nonexistent layer")}notifyGraphicGeometryChanged(e,t){if(i(t.notifyGraphicGeometryChanged))return;let r;for(const i of e){const e=i.graphicUid;e!==r&&(t.notifyGraphicGeometryChanged(e),r=e)}}notifyGraphicVisibilityChanged(e,t){if(i(t.notifyGraphicVisibilityChanged))return;let r;for(const i of e){const e=i.graphicUid;e!==r&&(t.notifyGraphicVisibilityChanged(e),r=e)}}updateHighlights(e,t){const r=this._layerRenderers.get(t);r?r.modify(e,8):Or.warn("Attempted to update highlights for nonexistent layer")}isEmpty(){return 0===this._geometries.size&&!st.OVERLAY_DRAW_DEBUG_TEXTURE}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateLogic(e){let t=!1;return this._layerRenderers.forEach((r=>{r.updateLogic(e)&&(t=!0)})),t}updateLayerOrder(){this._sortedLayerRenderersDirty=!0}drawPass(e,t,r,i=0){if(0===r.numViews)return!1;if(this._screenToWorldRatio=r.pixelRatio*Math.abs(r.views[0].extent[2]-r.views[0].extent[0])/Math.abs(r.views[0].viewport[2]-r.views[0].viewport[0]),this.isEmpty()||5===e&&!this.hasHighlights||3===e&&!this.hasWater)return!1;if(!this.hasNonZeroSizedView(r))return!1;const s=r.width,o=r.height;if(!t.isValid())return!1;t.resize(s,o);const d=this._rctx;if(Pr.pixelRatio=r.pixelRatio||1,this._renderContext.pass=e,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToWorldRatioGlobalWM=this._screenToWorldRatio*this.globalUnitScale,t.bind(d),d.setClearColor(0,0,0,0),d.clearSafe(16384),1===i&&(this._renderContext.renderOccludedMask=Ur),st.OVERLAY_DRAW_DEBUG_TEXTURE&&1!==i)for(let e=0;e<r.numViews;e++)this.setViewParameters(r.views[e],Pr),this.drawDebugTexture(s,o,Ir[r.index%Ir.length]);return this._layerRenderers.size>0&&this._sortedLayerRenderers.forAll((({layerView:l,renderer:h})=>{if(2===i&&a(l)&&0===l.drapeSourceType)return;const c=a(l)&&a(l.fullOpacity)&&l.fullOpacity<1&&0===e;c&&(this.bindTemporaryFramebuffer(this._rctx,s,o),d.clearSafe(16384));for(let e=0;e<r.numViews;e++)this.setViewParameters(r.views[e],Pr),h.draw(this._renderContext,this._bindParameters);c&&a(this._temporaryRenderTarget)&&(t.bind(d),this._compositingHelper.composite(this._temporaryRenderTarget.getTexture(),2,n(n(l).fullOpacity)))})),d.bindFramebuffer(null),t.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,t,r){i(this._temporaryRenderTarget)&&(this._temporaryRenderTarget=new at(e,!1)),this._temporaryRenderTarget.resize(t,r),this._temporaryRenderTarget.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.hotReload()}intersect(e,t,r){let i=0;this._geometries.forEach((s=>{if(r&&!r(s))return;this.intersectRenderGeometry(s,t,0,e,i);const a=this.longitudeCyclical;a&&(s.boundingSphere[0]-s.boundingSphere[3]<a.min&&this.intersectRenderGeometry(s,t,a.range,e,i),s.boundingSphere[0]+s.boundingSphere[3]>a.max&&this.intersectRenderGeometry(s,t,-a.range,e,i)),i++}))}intersectRenderGeometry(e,t,r,i,s){if(!e.instanceParameters.visible)return;let o=0;a(e.transformation)&&(r+=e.transformation[12],o=e.transformation[13]),Ar[0]=t[0]-r,Ar[1]=t[1]-o,Ar[2]=1,Lr[0]=t[0]-r,Lr[1]=t[1]-o,Lr[2]=0,e.screenToWorldRatio=this._screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),i,Ar,Lr,((t,r,a)=>{this.addIntersectionResult(a,e.material.renderPriority,s,i,e.layerUid,e.graphicUid)}),e.calculateShaderTransformation,!0)}addIntersectionResult(e,t,r,i,s,a){const o={type:"external",metadata:{layerUid:s,graphicUid:a}},n=s=>{s.set(o,null,i.results.ground.dist,i.results.ground.normal,i.results.ground.transformation,t,null,null,e,r),s.intersector="OverlayRenderer"};if((null==i.results.min.drapedLayerOrder||t>=i.results.min.drapedLayerOrder)&&(null==i.results.min.dist||i.results.ground.dist<=i.results.min.dist)&&n(i.results.min),0!==i.options.store&&(null==i.results.max.drapedLayerOrder||t<i.results.max.drapedLayerOrder)&&(null==i.results.max.dist||i.results.ground.dist>i.results.max.dist)&&n(i.results.max),2===i.options.store){const e=new Be(i.ray);n(e),i.results.all.push(e)}}stopAnimationsAtTime(e){this._sortedLayerRenderers.forAll((t=>t.renderer.stopAnimationsAtTime(e)))}ensureLayerRenderer(e){let t=this._layerRenderers.get(e);return t||(t=new ar({rctx:this._rctx,materialRepository:this._materialRepository}),this._layerRenderers.set(e,t),this._sortedLayerRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(e.watch("fullOpacity",(()=>this.emitContentChanged())),e),this._handles.add(P(t,"updating",(()=>this.notifyChange("updating"))),e)),t}updateSortedLayerRenderers(){if(!this._sortedLayerRenderersDirty)return;if(this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers.clear(),0===this._layerRenderers.size)return;const[{view:{allLayerViews:e}}]=this._layerRenderers.keys(),t=new Set(this._layerRenderers.values());e.forEach((e=>{const r=e,i=this._layerRenderers.get(r);i&&(this._sortedLayerRenderers.push(new Dr(r,i)),t.delete(i))})),t.forEach((e=>{this._sortedLayerRenderers.push(new Dr(null,e))}))}setViewParameters(e,t){t.viewport=e.viewport;const r=e.extent;U(t.projectionMatrix,0,r[2]-r[0],0,r[3]-r[1],t.near,t.far),F(t.viewMatrix),z(t.viewMatrix,t.viewMatrix,[-e.extent[0],-e.extent[1],0]),t.setGLViewport(this._rctx),this._renderContext.camera=t,this._bindParameters.camera=t,this._bindParameters.inverseViewport[0]=1/t.fullViewport[2],this._bindParameters.inverseViewport[1]=1/t.fullViewport[3]}hasNonZeroSizedView(e){for(let t=0;t<e.numViews;t++){const r=e.views[t];if(r.extent[0]!==r.extent[2]&&r.extent[1]!==r.extent[3])return!0}return!1}emitContentChanged(){this.onContentChanged&&this.onContentChanged()}updateHasWater(){const e=Q(this._layerRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e)}updateHasHighlights(){const e=Q(this._layerRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.onHasHighlightsChanged&&this.onHasHighlightsChanged(this._hasHighlights))}updateRendersOccluded(){const e=Q(this._layerRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.onRendersOccludedChanged&&this.onRendersOccludedChanged(this.rendersOccluded))}drawDebugTexture(e,t,r){const i=this._rctx;this.ensureDebugPatternResources(e,t);const s=this._debugTextureTechnique.program;i.bindProgram(s),i.setPipelineState(this._debugTextureTechnique.pipeline),s.setUniform4f("color",r[0],r[1],r[2],1),s.setUniform1i("tex",0),i.bindTexture(this._debugPatternTexture,0),i.bindVAO(this._quadVAO),i.drawArrays(5,0,ke(this._quadVAO,"geometry"))}ensureDebugPatternResources(e,t){if(this._debugPatternTexture)return;const r=new Uint8Array(e*t*4);let i=0;for(let s=0;s<t;s++)for(let a=0;a<e;a++){const o=Math.floor(a/10),n=Math.floor(s/10);o<2||n<2||10*o>e-20||10*n>t-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&n?1&a^1&s?0:255:1&o^1&n?0:128)}this._debugPatternTexture=new Te(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:e,height:t},r);const s=new dr;s.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquireAndReleaseExisting(nr,s,this._debugTextureTechnique),this._quadVAO=He(this._rctx)}get test(){return{layerRenderers:this._layerRenderers}}};e([ye()],Mr.prototype,"_shaderTechniqueRepository",void 0),e([ye()],Mr.prototype,"_stippleTextureRepository",void 0),e([h(),ye()],Mr.prototype,"waterTextureRepository",void 0),e([h({constructOnly:!0})],Mr.prototype,"renderView",void 0),e([h({constructOnly:!0})],Mr.prototype,"scheduler",void 0),e([h()],Mr.prototype,"globalUnitScale",void 0),e([h({type:Boolean,readOnly:!0})],Mr.prototype,"updating",null),Mr=e([g("esri.views.3d.terrain.OverlayRenderer")],Mr);class Dr{constructor(e,t){this.layerView=e,this.renderer=t}}const Ir=[[1,.5,.5],[.5,.5,1],[.5,1,.5]],Pr=new qe;Pr.near=1,Pr.far=1e4,Pr.relativeElevation=null;const Ar=w(),Lr=w(),Hr=-2,Ur=4,Fr=1.2,zr=V,Nr=W;function jr(e){const r=[],s=[];!function(e,r,i){const{attributeData:{position:s},removeDuplicateStartEnd:a}=e,o=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(s)&&1===a,n=s.length/3-(o?1:0),d=new Uint32Array(2*(n-1)),l=o?t(s,0,s.length-3):s;let h=0;for(let e=0;e<n-1;e++)d[h++]=e,d[h++]=e+1;r.push(["position",{size:3,data:l,exclusive:o}]),i.push(["position",d])}(e,s,r);const o=s[0][1].data,n=r[0][1].length,l=new Uint16Array(n);return function(e,t,r){const s=e.attributeData.mapPosition;if(i(s))return;r.push(["mapPos",r[0][1]]),t.push(["mapPos",{size:3,data:s}])}(e,s,r),function(e,t,r,i){if(a(e.attributeData.colorFeature))return;const s=e.attributeData.color;t.push(["color",{size:4,data:d(s,Nr)}]),r.push(["color",i])}(e,s,r,l),function(e,t,r,i){if(a(e.attributeData.sizeFeature))return;const s=e.attributeData.size;t.push(["size",{size:1,data:[d(s,1)]}]),r.push(["size",i])}(e,s,r,l),function(e,t,r,s){const a=e.attributeData.colorFeature;if(i(a))return;t.push(["colorFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["color",s])}(e,s,r,l),function(e,t,r,s){const a=e.attributeData.sizeFeature;if(i(a))return;t.push(["sizeFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["sizeFeatureAttribute",s])}(e,s,r,l),function(e,t,r,s){const a=e.attributeData.opacityFeature;if(i(a))return;t.push(["opacityFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["opacityFeatureAttribute",s])}(e,s,r,l),function(e,t,r,i){if("round"!==e.join)return;const s=i.length/3,a=new Float32Array(s),o=Br,n=qr;T(o,0,0,0);const l=d(e.uniformSize,1);for(let e=-1;e<s;++e){const t=e<0?s+e:e,r=(e+1)%s;if(T(n,i[3*r+0]-i[3*t+0],i[3*r+1]-i[3*t+1],i[3*r+2]-i[3*t+2]),O(n,n),e>=0){const t=1*((Math.PI-y(M(o,n)))*Zr)*kr(l);a[e]=Math.max(Math.floor(t),0)}E(o,n,-1)}t.push(["subdivisions",{size:1,data:a}]),r.push(["subdivisions",r[0][1]])}(e,s,r,o),new Ae(s,r,2)}function Gr(e,t,r,i){const s="polygon"===e.type?1:0,a="polygon"===e.type?e.rings:e.paths,{position:o,outlines:n}=k(a,e.hasZ,s),d=new Float64Array(o.length),l=Ye(o,e.spatialReference,0,d,0,o,0,o.length/3,t,r,i),h=null!=l;return{lines:h?Vr(n,o,d):[],projectionSuccess:h,sampledElevation:l}}function Vr(e,t,r){const i=new Array;for(const{index:s,count:a}of e){if(a<=1)continue;const e=3*s,o=e+3*a;i.push({position:t.subarray(e,o),mapPosition:r?r.subarray(e,o):void 0})}return i}function Wr(e,t){const r="polygon"===e.type?1:0,i="polygon"===e.type?e.rings:e.paths,{position:s,outlines:a}=k(i,!1,r),o=j(s,e.spatialReference,0,s,t,0,s.length/3);for(let e=2;e<s.length;e+=3)s[e]=-2;return{lines:o?Vr(a,s):[],projectionSuccess:o}}function kr(e){return 1.863798+-2.0062872/(1+e/18.2313)**.8856294}const Br=w(),qr=w(),Zr=4/Math.PI;export{tt as A,ht as C,Hr as D,et as F,Rt as G,Ke as M,Ht as N,Mr as O,Jt as R,It as S,zr as T,jt as W,jr as a,Wr as b,Er as c,st as d,Gt as e,nt as f,Gr as g,Ft as h,xr as i,bt as j,Kt as k,kt as l,dr as m,nr as n,Ur as o,Cr as p,ut as q,vt as r,St as s,xt as t,Sr as u,Fr as v};
