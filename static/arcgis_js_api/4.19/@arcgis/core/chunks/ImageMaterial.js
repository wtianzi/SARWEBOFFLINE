/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{S as t,T as a,g as i,d as r,l as s,n,a0 as o,C as l,p as u,a as c,b as p,D as d,V as h,q as m,s as g,t as f,F as v,u as b,H as P,v as T,I as y,R as x,M as C,J as q,K as E,m as O}from"./VertexColor.glsl.js";import{P as F}from"./Program.js";import{c as S,m as w,a as _,d as D}from"./renderState.js";import{D as j,P as H}from"./ColorMaterial.js";import{G}from"./GLMaterialTexture.js";var A=Object.freeze({__proto__:null,build:function(e){const u=new t;return u.include(a,{linearDepth:!1}),u.vertex.uniforms.add("proj","mat4").add("view","mat4"),u.attributes.add("position","vec3"),u.attributes.add("uv0","vec2"),u.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&u.varyings.add("depth","float"),u.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),u.vertex.code.add(i`
    void main(void) {
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),u.include(r,e),e.multipassTerrainEnabled&&(u.fragment.include(s),u.include(n,e)),u.fragment.uniforms.add("tex","sampler2D"),u.fragment.uniforms.add("opacity","float"),u.varyings.add("vTexCoord","vec2"),7===e.output?u.fragment.code.add(i`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${i.float(o)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(u.fragment.include(l),u.fragment.code.add(i`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${i.float(o)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),u}});class V extends p{initializeProgram(e){const t=V.shader.get(),a=this.configuration,i=t.build({output:a.output,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===a.transparencyPassType,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new F(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),d)}bindPass(e,t,a){h.bindProjectionMatrix(this.program,a.camera.projectionMatrix),this.program.setUniform1f("opacity",t.opacity),a.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",a.camera.nearFar),this.program.setUniform2fv("inverseViewport",a.inverseViewport),m(this.program,e,a))}bindDraw(e){h.bindView(this.program,e),r.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e,t){const a=this.configuration,i=3===e,r=2===e;return w({blending:0!==a.output&&7!==a.output||!a.transparent?null:i?I:g(e),culling:(s=a.cullFace,0!==s&&{face:1===s?1028:1029,mode:2305}),depthTest:{func:f(e)},depthWrite:i?a.writeDepth&&_:v(e),colorWrite:D,stencilWrite:a.sceneHasOcludees?b:null,stencilTest:a.sceneHasOcludees?t?P:T:null,polygonOffset:i||r?null:y(a.enableOffset)});var s}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}V.shader=new x(A,(()=>Promise.resolve().then((function(){return A}))));const I=S(1,771);class M extends c{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}e([u({count:8})],M.prototype,"output",void 0),e([u({count:3})],M.prototype,"cullFace",void 0),e([u()],M.prototype,"slicePlaneEnabled",void 0),e([u()],M.prototype,"transparent",void 0),e([u()],M.prototype,"enableOffset",void 0),e([u()],M.prototype,"writeDepth",void 0),e([u()],M.prototype,"sceneHasOcludees",void 0),e([u({count:4})],M.prototype,"transparencyPassType",void 0),e([u()],M.prototype,"multipassTerrainEnabled",void 0),e([u()],M.prototype,"cullAboveGround",void 0);class $ extends C{constructor(e){super(e,z),this.supportsEdges=!0,this.techniqueConfig=new M}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<q,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,this.techniqueConfig}intersect(e,t,a,i,r,s,n){E(e,t,i,r,s,void 0,n)}getGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new W(e):void 0}createBufferWriter(){return new j(H)}}class W extends G{constructor(e){super({...e,...e.material.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=this.techniqueRep.acquireAndReleaseExisting(V,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){if(4===this.output)return 3===e;return e===(this.technique.configuration.transparent?this.technique.configuration.writeDepth?5:8:3)}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&(this.material.setParameterValues({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e))}ensureParameters(e){0!==this.output&&7!==this.output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.bindTexture(e,this.technique.program),this.bindTextureScale(e,this.technique.program),this.technique.bindPass(e,this.material.params,t)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const z={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...O};export{$ as I};
