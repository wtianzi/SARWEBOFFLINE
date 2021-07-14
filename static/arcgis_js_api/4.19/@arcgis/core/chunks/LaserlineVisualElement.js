/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../core/lang.js";import{i as t,b as i,f as n}from"./Logger.js";import{d as r}from"./mathUtils2.js";import{c as s,a}from"./vec3f64.js";import{a as o,s as l,g as c,i as h,k as d,n as f,c as p,e as u}from"./vec3.js";import{t as g}from"./mat4.js";import{c as m}from"./vec4f64.js";import{c as _}from"./quatf64.js";import{t as b}from"./vec4.js";import{c as P}from"./vec2f64.js";import{l as v,g as V,S as x,p as D,a as L,b as E,R as y,D as C,ag as w,ah as S}from"./VertexColor.glsl.js";import{P as M}from"./Program.js";import"./FramebufferObject.js";import{m as A,c as R,d as U}from"./renderState.js";import{g as q}from"./glUtil.js";import{n as j}from"./InterleavedLayout.js";import{P as T,u as I,p as z,s as O,r as B,w as W}from"./geometryUtils.js";import{S as F}from"./ColorMaterial.js";import{i as H}from"./Util.js";import{c as N}from"./glUtil3D.js";import{V as G,B as k}from"./VertexArrayObject.js";import{C as X}from"./CameraSpace.glsl.js";import{V as J}from"./VisualElement.js";function K(e,t){e.extensions.add("GL_OES_standard_derivatives"),e.fragment.include(v),e.include(X),e.fragment.uniforms.add("glowColor","vec3"),e.fragment.uniforms.add("glowWidth","float"),e.fragment.uniforms.add("glowFalloff","float"),e.fragment.uniforms.add("innerColor","vec3"),e.fragment.uniforms.add("innerWidth","float"),e.fragment.uniforms.add("depthMap","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("frameColor","sampler2D"),t.contrastControlEnabled&&e.fragment.uniforms.add("globalAlphaContrastBoost","float"),e.fragment.code.add(V`
  vec4 blendPremultiplied(vec4 source, vec4 dest) {
    float oneMinusSourceAlpha = 1.0 - source.a;

    return vec4(
      source.rgb + dest.rgb * oneMinusSourceAlpha,
      source.a + dest.a * oneMinusSourceAlpha
    );
  }
  `),e.fragment.code.add(V`
  vec4 premultipliedColor(vec3 rgb, float alpha) {
    return vec4(rgb * alpha, alpha);
  }
  `),e.fragment.code.add(V`
  vec4 laserlineProfile(float dist) {
    if (dist > glowWidth) {
      return vec4(0.0);
    }

    float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
    float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);

    return blendPremultiplied(
      premultipliedColor(innerColor, innerAlpha),
      premultipliedColor(glowColor, glowAlpha)
    );
  }
  `),e.fragment.code.add(V`
  bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
    float depth = linearDepthFromTexture(depthMap, uv, nearFar);

    if (-depth == nearFar[0]) {
      return false;
    }

    pos = reconstructPosition(gl_FragCoord.xy, depth);
    normal = normalize(cross(dFdx(pos), dFdy(pos)));

    float ddepth = fwidth(depth);
    depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);

    return true;
  }
  `),t.contrastControlEnabled?e.fragment.code.add(V`
    float rgbToLuminance(vec3 color) {
      return dot(vec3(0.2126, 0.7152, 0.0722), color);
    }

    vec4 laserlineOutput(vec4 color) {
      float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
      float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);

      return color * alpha;
    }
    `):e.fragment.code.add(V`
    vec4 laserlineOutput(vec4 color) {
      return color * globalAlpha;
    }
    `)}var Q=Object.freeze({__proto__:null,build:function(e){const t=new x;return t.include(K,e),t.vertex.uniforms.add("uModelViewMatrix","mat4"),t.vertex.uniforms.add("uProjectionMatrix","mat4"),t.attributes.add("start","vec3"),t.attributes.add("end","vec3"),t.attributes.add("up","vec3"),t.attributes.add("extrude","vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),t.vertex.uniforms.add("glowWidth","float"),t.vertex.uniforms.add("pixelToNDC","vec2"),t.vertex.code.add(V`
  void main() {
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = uModelViewMatrix * vec4(pos, 1);
    vec4 projPos = uProjectionMatrix * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    vec3 viewUp = (uModelViewMatrix * vec4(extrude.y * up, 0)).xyz;
    vec4 projPosUp = uProjectionMatrix * vec4(viewPos.xyz + viewUp, 1);
    vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
    ndcPos += length(lxy) * projExtrudeDir;

    vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
    vec3 viewPlaneNormal = (uModelViewMatrix * vec4(worldPlaneNormal, 0)).xyz;

    vViewStart = (uModelViewMatrix * vec4(start, 1)).xyz;
    vViewEnd = (uModelViewMatrix * vec4(end, 1)).xyz;
    vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));

    // Add enough padding in the X screen space direction for glow
    float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    uv = ndcPos * 0.5 + 0.5;
    gl_Position = vec4(ndcPos, 0, 1);
  }
  `),t.fragment.uniforms.add("globalAlpha","float"),t.fragment.uniforms.add("perScreenPixelRatio","float"),t.fragment.code.add(V`
  float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
    vec3 origin = mix(start, end, 0.5);
    vec3 basis = end - origin;
    vec3 posAtOrigin = pos - origin;

    float x = dot(normalize(basis), posAtOrigin);
    float y = dot(plane.xyz, posAtOrigin);

    float dx = max(abs(x) - length(basis), 0.0);
    float dy = y;

    float dist = length(vec2(dx, dy));

    float width = fwidth(y);
    float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
    float pixelDist = dist / min(width, maxPixelDistance);
    return abs(pixelDist);
  }

  void main() {
    vec3 pos;
    vec3 normal;
    float depthDiscontinuityAlpha;

    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
      discard;
    }

    float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);

    vec4 color = laserlineProfile(distance);
    float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));

    gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
  }
  `),t}});class Y extends E{initializeProgram(e){const t=Y.shader.get(),i=this.configuration,n=t.build(i);return new M(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),Y.attributeLocations)}bind(e,t,i){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*i.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*i.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.program.setUniform1f("perScreenPixelRatio",i.perScreenPixelRatio),this.program.setUniform2f("pixelToNDC",2/i.fullWidth,2/i.fullHeight),this.program.setUniformMatrix4fv("uProjectionMatrix",i.projectionMatrix),g($,i.viewMatrix,t),this.program.setUniformMatrix4fv("uModelViewMatrix",$),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1)}initializePipeline(){return A({blending:R(1,771),colorWrite:U})}bindPipelineState(e){e.setPipelineState(this.pipeline)}}Y.shader=new y(Q,(()=>Promise.resolve().then((function(){return Q})))),Y.attributeLocations={start:0,end:1,up:2,extrude:3};class Z extends L{constructor(){super(...arguments),this.contrastControlEnabled=!1}}e([D()],Z.prototype,"contrastControlEnabled",void 0);const $=_();class ee{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=s(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=new Float64Array(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);o(this._origin,e[t+0],e[t+1],e[t+2])}else o(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const i=this.ensureVAO(e);t(i)&&(e.bindVAO(i),e.drawArrays(4,0,this._count))}dispose(){t(this._vao)&&this._vao.dispose()}ensureVAO(e){return i(this._buffers)?null:(i(this._vao)&&(this._vao=this.createVAO(e,this._buffers)),this.ensureVertexData(this._vao,this._buffers),this._vao)}createVAO(e,t){const i=this.createDataBuffer(t);return this._dirty=!1,new G(e,Y.attributeLocations,{data:q(ne)},{data:k.createVertex(e,35044,i)})}ensureVertexData(e,t){if(!this._dirty)return;const i=this.createDataBuffer(t);e.vertexBuffers.data.setData(i),this._dirty=!1}numberOfRenderVertices(e){return 3*(2*(e.length/3-1))}createDataBuffer(e){const t=e.reduce(((e,t)=>e+this.numberOfRenderVertices(t)),0);this._count=t;const i=ne.createBuffer(t),n=this._origin;let r=0,s=0;for(const t of e){for(let e=0;e<t.length;e+=3){const a=o(ie,t[e+0],t[e+1],t[e+2]);0===e?s=this._renderCoordsHelper.getAltitude(a):this._renderCoordsHelper.setAltitude(s,a);const c=this._renderCoordsHelper.worldUpAtPosition(a,te),h=r+2*e,d=l(ie,a,n);if(e<t.length-3){i.up.setVec(h,c),i.up.setVec(h+3,c),i.up.setVec(h+5,c);for(let e=0;e<6;e++)i.start.setVec(h+e,d);i.extrude.setValues(h+0,0,-1),i.extrude.setValues(h+1,1,-1),i.extrude.setValues(h+2,1,1),i.extrude.setValues(h+3,0,-1),i.extrude.setValues(h+4,1,1),i.extrude.setValues(h+5,0,1)}if(e>0){i.up.setVec(h-2,c),i.up.setVec(h-4,c),i.up.setVec(h-5,c);for(let e=-6;e<0;e++)i.end.setVec(h+e,d)}}r+=this.numberOfRenderVertices(t)}return i.buffer}}const te=s(),ie=s(),ne=j().vec3f("start").vec3f("end").vec3f("up").vec2f("extrude"),re=r(6);var se=Object.freeze({__proto__:null,defaultAngleCutoff:re,build:function(e){const t=new x;return t.extensions.add("GL_OES_standard_derivatives"),t.include(F),t.include(K,e),t.fragment.uniforms.add("angleCutoff","vec2"),t.fragment.uniforms.add("globalAlpha","float"),e.heightManifoldEnabled&&t.fragment.uniforms.add("heightPlane","vec4"),e.pointDistanceEnabled&&t.fragment.uniforms.add("pointDistanceSphere","vec4"),e.lineVerticalPlaneEnabled&&t.fragment.uniforms.add("lineVerticalPlane","vec4").add("lineVerticalStart","vec3").add("lineVerticalEnd","vec3"),(e.heightManifoldEnabled||e.pointDistanceEnabled||e.lineVerticalPlaneEnabled)&&t.fragment.uniforms.add("maxPixelDistance","float"),e.intersectsLineEnabled&&t.fragment.uniforms.add("intersectsLineStart","vec3").add("intersectsLineEnd","vec3").add("intersectsLineDirection","vec3").add("intersectsLineRadius","float").add("perScreenPixelRatio","float"),(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)&&t.fragment.code.add(V`
      float planeDistancePixels(vec4 plane, vec3 pos) {
        float dist = dot(plane.xyz, pos) + plane.w;
        float width = fwidth(dist);
        dist /= min(width, maxPixelDistance);
        return abs(dist);
      }`),e.pointDistanceEnabled&&t.fragment.code.add(V`
    float sphereDistancePixels(vec4 sphere, vec3 pos) {
      float dist = distance(sphere.xyz, pos) - sphere.w;
      float width = fwidth(dist);
      dist /= min(width, maxPixelDistance);
      return abs(dist);
    }
    `),e.intersectsLineEnabled&&t.fragment.code.add(V`
    float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
      float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
      return abs(dist) - radius;
    }
    `),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&t.fragment.code.add(V`
    bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
      vec3 dir = end - start;
      float t2 = dot(dir, pos - start);
      float l2 = dot(dir, dir);
      return t2 >= 0.0 && t2 <= l2;
    }
    `),t.fragment.code.add(V`
  void main() {
    vec3 pos;
    vec3 normal;
    float depthDiscontinuityAlpha;

    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
      discard;
    }

    vec4 color = vec4(0, 0, 0, 0);
  `),e.heightManifoldEnabled&&t.fragment.code.add(V`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
      vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `),e.pointDistanceEnabled&&t.fragment.code.add(V`
    {
      // distance to sphere
      float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
      vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
      float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));

      color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
    }
    `),e.lineVerticalPlaneEnabled&&t.fragment.code.add(V`
    {
      if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
        float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);

        vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
        float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));

        color = max(color, lineVerticalColor * lineVerticalAlpha);
      }
    }
    `),e.intersectsLineEnabled&&t.fragment.code.add(V`
    {
      if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
        float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
        vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
        float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));

        color = max(color, intersectsLineColor * intersectsLineAlpha);
      }
    }
    `),t.fragment.code.add(V`
    gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
  }
  `),t}});class ae extends E{initializeProgram(e){const t=ae.shader.get(),i=this.configuration,n=t.build(i);return new M(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),C)}bind(e,t){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*t.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*t.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1);const i=null!=e.angleCutoff?e.angleCutoff:re;this.program.setUniform2f("angleCutoff",Math.cos(i),Math.cos(Math.max(0,i-r(2)))),this.configuration.intersectsLineEnabled&&this.program.setUniform1f("perScreenPixelRatio",t.perScreenPixelRatio)}initializePipeline(){return A({blending:R(1,771),colorWrite:U})}}ae.shader=new y(se,(()=>Promise.resolve().then((function(){return se}))));class oe extends L{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.contrastControlEnabled=!1}}e([D()],oe.prototype,"heightManifoldEnabled",void 0),e([D()],oe.prototype,"pointDistanceEnabled",void 0),e([D()],oe.prototype,"lineVerticalPlaneEnabled",void 0),e([D()],oe.prototype,"intersectsLineEnabled",void 0),e([D()],oe.prototype,"contrastControlEnabled",void 0);const le=s(),ce=m(),he={glowColor:[1,.5,0],glowWidth:8,glowFalloff:8,innerColor:[1,1,1],innerWidth:1,globalAlpha:.75,angleCutoff:r(6),globalAlphaContrastBoost:2};function de(e,t,i,n){const r=le,s=ce;h(r,t,n),c(s,i),s[3]=0,b(s,s,n),z.fromPositionAndNormal(r,s,e)}class fe{constructor(e,t={},i={contrastControlEnabled:!1}){this._renderCoordsHelper=e,this._config=i,this._technique=null,this._projInfo=m(),this._zScale=P(),this._heightManifoldEnabled=!1,this._heightManifoldTarget=s(),this._pointDistanceEnabled=!1,this._pointDistanceOrigin=s(),this._pointDistanceTarget=s(),this._lineVerticalPlaneEnabled=!1,this._lineVerticalPlaneSegment=I.create(),this._intersectsLineEnabled=!1,this._intersectsLineSegment=I.create(),this._intersectsLineRadius=3,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._tempNormal=s(),this._tempDir=s(),this._tempUp=s(),this._tempVec3A=s(),this._tempVec3B=s(),this._tempVec4=m(),this._tempPlane=z.create(),this._tempSphere=O.create(),this._params=w(t,he)}get renderSlots(){return[this._config.contrastControlEnabled?17:16]}get needsLinearDepth(){return!0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._heightManifoldTarget}set heightManifoldTarget(e){c(this._heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._pointDistanceTarget}set pointDistanceTarget(e){c(this._pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._pointDistanceOrigin}set pointDistanceOrigin(e){c(this._pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){I.copy(e,this._lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._intersectsLineSegment}set intersectsLineSegment(e){I.copy(e,this._intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._intersectsLineRadius}set intersectsLineRadius(e){e!==this._intersectsLineRadius&&(this._intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,t(this._pathVerticalPlaneData)&&this._requestRender())}set pathVerticalPlaneVertices(e){i(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new ee(this._renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){i(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new ee(this._renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameterValues(e){S(this._params,e)&&this._requestRender()}initializeRenderContext(e){this._context=e;const t=e.renderContext.rctx;this._quadVAO=N(t),this._techniqueRepository=e.shaderTechniqueRep,this._techniqueConfig=new oe,this._pathTechniqueConfig=new Z}uninitializeRenderContext(){this._quadVAO=n(this._quadVAO),this._techniqueRepository.release(this._technique),this._technique=null,this._pathVerticalPlaneData=n(this._pathVerticalPlaneData),this._techniqueRepository.release(this._pathTechnique),this._pathTechnique=null}render(e){const t=this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled,i=this.pathVerticalPlaneEnabled;if(!t&&!i)return!0;const n=e.camera;return H(n.projectionMatrix,n.fullWidth,n.fullHeight,this._projInfo,this._zScale),t&&this.renderUnified(e),i&&this.renderPath(e),!0}renderUnified(e){const t=e.rctx,i=this._selectTechnique(),n=i.program;t.bindProgram(n),i.bindPipelineState(t),this.bindGlobalUniforms(e,n),this.bindHeightManifoldUniforms(e,n),this.bindPointDistanceUniforms(e,n),this.bindLineVerticalPlaneUniforms(e,n),this.bindIntersectsLineUniforms(e,n),i.bind(this._params,e.camera),t.bindVAO(this._quadVAO),t.drawArrays(5,0,4)}renderPath(e){if(i(this._pathVerticalPlaneData))return;this._pathTechniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquireAndReleaseExisting(Y,this._pathTechniqueConfig,this._pathTechnique);const t=e.rctx,n=this._pathTechnique,r=n.program;t.bindProgram(r),n.bindPipelineState(t),this.bindGlobalUniforms(e,r),n.bind(this._params,this._pathVerticalPlaneData.origin,e.camera),this._pathVerticalPlaneData.draw(e.rctx)}bindHeightManifoldUniforms(e,t){if(!this.heightManifoldEnabled)return;const i=this._tempVec3A,n=this._tempPlane;this._renderCoordsHelper.worldUpAtPosition(this._heightManifoldTarget,i),de(n,this._heightManifoldTarget,i,e.camera.viewMatrix),t.setUniform4fv("heightPlane",n)}bindPointDistanceUniforms(e,t){if(!this._pointDistanceEnabled)return;const i=e.camera,n=this._tempSphere;c(n,this._pointDistanceOrigin),h(n,n,i.viewMatrix),n[3]=d(this._pointDistanceOrigin,this._pointDistanceTarget),t.setUniform4f("pointDistanceSphere",n[0],n[1],n[2],n[3])}bindLineVerticalPlaneUniforms(e,t){if(!this._lineVerticalPlaneEnabled)return;const i=this._renderCoordsHelper,n=e.camera,r=this._tempPlane,s=this._tempVec3A,a=this._tempUp,o=this._tempDir,l=this._tempNormal;I.pointAt(this._lineVerticalPlaneSegment,.5,s),i.worldUpAtPosition(s,a),f(o,this._lineVerticalPlaneSegment.vector),p(l,a,o),f(l,l),de(r,this._lineVerticalPlaneSegment.origin,l,n.viewMatrix),t.setUniform4fv("lineVerticalPlane",r);const d=this._tempVec3A;c(d,this._lineVerticalPlaneSegment.origin),i.setAltitude(0,d),h(d,d,n.viewMatrix),t.setUniform3fv("lineVerticalStart",d);const g=this._tempVec3B;u(g,this._lineVerticalPlaneSegment.origin,this._lineVerticalPlaneSegment.vector),i.setAltitude(0,g),h(g,g,n.viewMatrix),t.setUniform3fv("lineVerticalEnd",g)}bindIntersectsLineUniforms(e,t){if(!this._intersectsLineEnabled)return;const i=ue,n=ge;if(this._intersectsLineInfinite){const t=e.camera;if(T.fromRay(B.wrap(this._intersectsLineSegment.origin,this._intersectsLineSegment.vector),pe),pe.c0=-Number.MAX_VALUE,!W.intersectClipRay(t.frustum,pe))return;T.getStart(pe,i),T.getEnd(pe,n)}else c(i,this._intersectsLineSegment.origin),u(n,this._intersectsLineSegment.origin,this._intersectsLineSegment.vector);const r=this._tempVec3A;h(r,i,e.camera.viewMatrix),t.setUniform3fv("intersectsLineStart",r);const s=this._tempVec4;c(s,this._intersectsLineSegment.vector),this._tempVec4[3]=0,b(this._tempVec4,this._tempVec4,e.camera.viewMatrix),h(n,n,e.camera.viewMatrix),t.setUniform3fv("intersectsLineEnd",n),f(s,s),t.setUniform3f("intersectsLineDirection",s[0],s[1],s[2]),t.setUniform1f("intersectsLineRadius",this._intersectsLineRadius)}bindGlobalUniforms(e,t){const i=e.camera;t.setUniform4fv("projInfo",this._projInfo),t.setUniform2fv("zScale",this._zScale),t.setUniform2f("nearFar",i.near,i.far),this._heightManifoldEnabled?t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._heightManifoldTarget)):this._pointDistanceEnabled?t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._pointDistanceTarget)):this._lineVerticalPlaneEnabled&&t.setUniform1f("maxPixelDistance",2*i.computeScreenPixelSizeAt(this._lineVerticalPlaneSegment.origin)),t.setUniform1i("depthMap",0),e.rctx.bindTexture(e.offscreenRenderingHelper.linearDepthTexture,0),t.setUniform1i("frameColor",1),e.rctx.bindTexture(e.offscreenRenderingHelper.mainColorTexture,1)}_requestRender(){this._context&&this._context.requestRender()}_selectTechnique(){return this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._technique=this._techniqueRepository.acquireAndReleaseExisting(ae,this._techniqueConfig,this._technique),this._technique}}const pe=T.create(),ue=s(),ge=s();class me extends J{constructor(e){super(e.view),this._angleCutoff=re,this._style={},this._heightManifoldTarget=s(),this._heightManifoldEnabled=!1,this._intersectsLine=I.create(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e)}get testData(){return this.renderer}createResources(){this.ensureRenderer()}destroyResources(){this.disposeRenderer()}updateVisibility(){this.syncHeightManifold(),this.syncIntersectsLine(),this.syncPathVerticalPlane(),this.syncLineVerticalPlane(),this.syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this.syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this.syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){t(e)?(c(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this.syncRenderer(),this.syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(i(e))return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,_e);this.intersectsLine=I.fromValues(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){t(e)?(I.copy(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this.syncIntersectsLine(),this.syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this.syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=t(e)?I.copy(e):null,this.syncLineVerticalPlane(),this.syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this.syncPathVerticalPlane(),this.syncLineVerticalPlane(),this.syncPointDistance(),this.syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=t(e)?{origin:a(e.origin),target:a(e.target)}:null,this.syncPointDistance(),this.syncRenderer()}syncRenderer(){this.attached&&(this._intersectsLineEnabled||this._heightManifoldEnabled||t(this._pointDistanceLine)||t(this._pathVerticalPlaneBuffers))?this.ensureRenderer():this.disposeRenderer()}ensureRenderer(){t(this.renderer)||(this.renderer=new fe(this.view.renderCoordsHelper,void 0,{contrastControlEnabled:!0}),this.syncStyle(),this.syncHeightManifold(),this.syncIntersectsLine(),this.syncIntersectsLineInfinite(),this.syncPathVerticalPlane(),this.syncLineVerticalPlane(),this.syncPointDistance(),this.syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer))}syncStyle(){i(this.renderer)||(this.renderer.setParameterValues(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius))}syncAngleCutoff(){i(this.renderer)||this.renderer.setParameterValues({angleCutoff:this._angleCutoff})}syncHeightManifold(){i(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget))}syncIntersectsLine(){i(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine))}syncIntersectsLineInfinite(){i(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite)}syncPathVerticalPlane(){i(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=t(this._pathVerticalPlaneBuffers)&&this.visible,t(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}syncLineVerticalPlane(){i(this.renderer)||(this.renderer.lineVerticalPlaneEnabled=t(this._lineVerticalPlaneSegment)&&this.visible,t(this._lineVerticalPlaneSegment)&&(this.renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}syncPointDistance(){i(this.renderer)||(this.renderer.pointDistanceEnabled=t(this._pointDistanceLine)&&this.visible,t(this._pointDistanceLine)&&(this.renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this.renderer.pointDistanceTarget=this._pointDistanceLine.target))}disposeRenderer(){t(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null)}}const _e=s();export{me as L};
