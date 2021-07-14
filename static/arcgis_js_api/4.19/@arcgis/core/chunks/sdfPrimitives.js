/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../core/lang.js";import{i as t,L as i,c as o,b as r}from"./Logger.js";import{c as s,s as n}from"./mathUtils2.js";import{c as a,f as l}from"./vec3f64.js";import{a as c,i as d,n as u,s as f,b as p,g as h,l as m,k as v,t as g,d as x,e as b}from"./vec3.js";import{l as y}from"./arcadeOnDemand.js";import{d as P}from"./screenUtils.js";import{a as C}from"./mat4.js";import{c as O}from"./aaBoundingRect.js";import{g as S,a as w}from"./unitConversionUtils.js";import{Z as z}from"./vec4f64.js";import{a as E,c as A}from"./quatf64.js";import{f as D}from"./mat3.js";import{c as U}from"./vec2.js";import{c as j,f as T}from"./vec2f64.js";import{g as R,l as F,S as V,d as q,a1 as M,C as H,E as _,a0 as I,O as G,p as B,a as $,b as N,D as L,V as k,s as W,R as Q,M as Y,a6 as Z,c as J,a7 as K,a8 as X,a5 as ee,m as te,w as ie,f as oe,L as re,h as se}from"./VertexColor.glsl.js";import{P as ne}from"./Program.js";import{c as ae,a as le,m as ce,d as de}from"./renderState.js";import{n as ue}from"./InterleavedLayout.js";import{f as fe}from"./ColorMaterial.js";import{a as pe,b as he}from"./Util.js";import{i as me}from"./Object3D.js";import{V as ve}from"./PiUtils.glsl.js";import{G as ge}from"./GLMaterialTexture.js";import{S as xe,V as be}from"./VerticalOffset.glsl.js";function ye(e){const t=R`
    vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
      vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
      vec2 pixelSz = vec2(1.0) / widthHeight;
      vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
      return vec4(result, clipCoord.zw);
    }
  `,i=R`

    vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
      vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
      vec2 pixelSz = vec2(1.0) / widthHeight;
      vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
      return vec4(result, clipCoord.zw);
    }
  `;e.vertex.code.add(t),e.vertex.code.add(i),e.fragment.code.add(t),e.fragment.code.add(i)}function Pe(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}function Ce(e,t){const i=e;i.include(xe),i.attributes.add("position","vec3"),i.attributes.add("normal","vec3"),i.attributes.add("auxpos1","vec4"),i.vertex.uniforms.add("proj","mat4"),i.vertex.uniforms.add("view","mat4"),i.vertex.uniforms.add("viewNormal","mat4"),i.vertex.uniforms.add("viewport","vec4"),i.vertex.uniforms.add("camPos","vec3"),i.vertex.uniforms.add("polygonOffset","float"),i.vertex.uniforms.add("cameraGroundRelative","float"),i.vertex.uniforms.add("pixelRatio","float"),i.vertex.uniforms.add("perDistancePixelRatio","float"),i.vertex.uniforms.add("uRenderTransparentlyOccludedHUD","float"),t.verticalOffsetEnabled&&i.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&i.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),i.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),i.vertex.constants.add("smallOffsetAngle","float",.984807753012208),i.vertex.code.add(R`
    struct ProjectHUDAux {
      vec3 posModel;
      vec3 posView;
      vec3 vnormal;

      float distanceToCamera;
      float absCosAngle;
    };
  `),i.vertex.code.add(R`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = sign(pointGroundDistance);

      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation
      // we take the absolute value because the sign that is dropped is
      // instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);

        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.isDraped||i.vertex.code.add(R`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `),i.vertex.code.add(R`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(camPos - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.screenSizePerspectiveEnabled&&(t.verticalOffsetEnabled||1===t.screenCenterOffsetUnitsEnabled)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.verticalOffsetEnabled?t.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.verticalOffsetEnabled?R`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${1!==t.screenCenterOffsetUnitsEnabled?R`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${1===t.screenCenterOffsetUnitsEnabled?t.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${1===t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.vertex.code.add(R`
    bool testVisibilityHUD(vec4 posProj) {
      // For occlusion testing, use the nearest pixel center to avoid
      // subpixel filtering messing up the color we use to test for
      vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);

      // the red pixel here indicates that the occlusion pixel passed the depth test against solid geometry and was written
      // the green pixel stores transparency of transparent geometry (1.0 -> fully transparent)
      // note that we also check against green == 0.0, i.e. transparent geometry that has opaque parts

      // thus we render visible pixels that are occluded by semi-transparent (but not fully transparent!) geometry here
      if (uRenderTransparentlyOccludedHUD > 0.5) {
        // multiplying by uRenderTransparentlyOccludedHUD allows us to ignore the second condition if
        // uRenderTransparentlyOccludedHUD = 0.75
        return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * uRenderTransparentlyOccludedHUD < 1.0;
      }

      // and visible pixels that are not occluded by semi-transparent geometry here
      return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
    }
  `)}function Oe(e){e.include(F),e.uniforms.add("geometryDepthTexture","sampler2D"),e.uniforms.add("cameraNearFar","vec2"),e.code.add(R`
    //Compare the linearized depths of the vertex/fragment and the geometry in the scene. If vertex/fragment is behind geometry, don't draw it.
    bool geometryDepthTest(vec2 pos, float elementDepth){

      float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
      if(elementDepth < (geometryDepth - 1.0)){
        return true;
      }
      return false;
    }
  `)}function Se(e,t,i){i.multipassGeometryEnabled&&i.geometryLinearDepthTexture&&(e.setUniform1i("geometryDepthTexture",11),t.bindTexture(i.geometryLinearDepthTexture,11))}function we(e,t){t.multipassGeometryEnabled&&e.vertex.include(Oe),e.vertex.code.add(R`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.multipassGeometryEnabled?R`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    }
    else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(R`
  void main() {
    gl_FragColor = color;
  }
  `)}var ze,Ee;function Ae(e,t=De){var i,o,r;return e.textureIsSignedDistanceField?(i=e.anchorPos,o=e.distanceFieldBoundingBox,(r=t)[0]=i[0]*(o[2]-o[0])+o[0],r[1]=i[1]*(o[3]-o[1])+o[1]):U(t,e.anchorPos),t}!function(e){e.bindUniforms=function(e,t){e.setUniform1f("uRenderTransparentlyOccludedHUD",0===t.renderTransparentlyOccludedHUD?1:1===t.renderTransparentlyOccludedHUD?0:.75)},e.bindVisibilityTexture=function(e,t,i){t.setUniform1i("hudVisibilityTexture",4),e.bindTexture(i.hudVisibilityTexture,4),e.setActiveTexture(0)}}(Ce||(Ce={})),function(e){e.bindUniforms=function(e){e.setUniform4f("color",1,1,1,1)}}(ze||(ze={})),function(e){e.bindUniforms=function(e,t,i){e.setUniform4fv("materialColor",t.color),t.textureIsSignedDistanceField&&(t.outlineColor[3]<=0||t.outlineSize<=0?(e.setUniform4fv("outlineColor",z),e.setUniform1f("outlineSize",0)):(e.setUniform4fv("outlineColor",t.outlineColor),e.setUniform1f("outlineSize",t.outlineSize))),e.setUniform2f("screenOffset",2*t.screenOffset[0]*i,2*t.screenOffset[1]*i),e.setUniform2fv("anchorPos",Ae(t))}}(Ee||(Ee={}));const De=j();var Ue=Object.freeze({__proto__:null,build:function(e){const t=new V,i=e.signedDistanceFieldEnabled;if(t.include(ye),t.include(Ce,e),t.include(q,e),6===e.output)return t.include(we,e),t;t.include(xe),t.fragment.include(M),t.fragment.include(H),t.include(ve,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),t.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),i&&t.vertex.uniforms.add("outlineColor","vec4"),e.screenSizePerspectiveEnabled&&t.vertex.uniforms.add("screenSizePerspective","vec4"),(e.debugDrawBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add("uv0","vec2"),t.attributes.add("color","vec4"),t.attributes.add("size","vec2"),t.attributes.add("auxpos2","vec4"),t.vertex.code.add(R`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.screenSizePerspectiveEnabled?R`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:R`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const o=R`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;
  `,r=e.pixelSnappingEnabled?i?R`
  posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:R`
  posProj += quadOffset;
  if (inputSize.x == size.x) {
    posProj = alignToPixelOrigin(posProj, viewport.zw);
  }`:R`posProj += quadOffset;`;t.vertex.code.add(R`
      ${e.occlusionTestEnabled?"if (visible) {":""}
      ${o}
      ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${R.float(_)};
      ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${R.float(_)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${r}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${e.debugDrawBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${e.occlusionTestEnabled?R`} else { vtc = vec2(0.0);
        ${e.debugDrawBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),t.fragment.uniforms.add("tex","sampler2D"),i&&(t.fragment.uniforms.add("outlineColor","vec4"),t.fragment.uniforms.add("outlineSize","float"));const s=e.debugDrawBorder?R`(isBorder > 0.0 ? 0.0 : ${R.float(I)})`:R.float(I),n=R`
    ${e.debugDrawBorder?R`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?R`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${s} ||
          fillPixelColor.a + outlinePixelColor.a < ${R.float(_)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${s}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:R`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${s}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${e.debugDrawBorder?R`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;return 7===e.output&&t.fragment.code.add(R`
      void main() {
        ${n}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),0===e.output&&t.fragment.code.add(R`
    void main() {
      ${n}
      ${e.FrontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),4===e.output&&(t.include(G),t.fragment.code.add(R`
    void main() {
      ${n}
      ${e.binaryHighlightOcclusionEnabled?R`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t},get HUDMaterial(){return Ee},calculateAnchorPosForRendering:Ae});class je extends N{initializeProgram(e){const t=je.shader.get(),i=this.configuration,o=t.build({output:i.output,FrontFacePass:2===i.transparencyPassType,viewingMode:e.viewingMode,occlusionTestEnabled:i.occlusionTestEnabled,signedDistanceFieldEnabled:i.sdf,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,debugDrawBorder:i.debugDrawBorder,binaryHighlightOcclusionEnabled:i.binaryHighlightOcclusion,screenCenterOffsetUnitsEnabled:i.screenCenterOffsetUnitsEnabled,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,pixelSnappingEnabled:i.pixelSnappingEnabled,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!1,isDraped:i.isDraped,multipassGeometryEnabled:i.multipassGeometryEnabled});return new ne(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),L)}bindPass(e,t,i){k.bindProjectionMatrix(this.program,i.camera.projectionMatrix),this.program.setUniform1f("cameraGroundRelative",i.camera.aboveGround?1:-1),this.program.setUniform1f("perDistancePixelRatio",Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",i.camera.viewInverseTransposeMatrix),this.program.setUniform1f("polygonOffset",t.shaderPolygonOffset),be.bindUniforms(this.program,t,i),xe.bindUniforms(this.program,t),this.program.setUniform1f("pixelRatio",i.camera.pixelRatio||1),k.bindViewport(this.program,i),6===this.configuration.output?(ze.bindUniforms(this.program),this.program.setUniform2fv("cameraNearFar",i.camera.nearFar),this.program.setUniform2fv("inverseViewport",i.inverseViewport),Se(this.program,e,i)):(Ce.bindUniforms(this.program,i),Ee.bindUniforms(this.program,t,i.camera.pixelRatio||1),ve.bindUniforms(this.program,t),this.configuration.occlusionTestEnabled&&Ce.bindVisibilityTexture(e,this.program,i)),4===this.configuration.output&&G.bindOutputHighlight(e,this.program,i)}bindDraw(e){k.bindView(this.program,e),k.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),q.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e){const t=this.configuration,i=3===e,o=2===e,r=this.configuration.polygonOffsetEnabled&&Te,s=(i||o)&&4!==t.output?(t.depthEnabled||6===t.output)&&le:null;return ce({blending:0===t.output||7===t.output||4===t.output?i?Re:W(e):null,depthTest:{func:515},depthWrite:s,colorWrite:de,polygonOffset:r})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return 6===this.configuration.output?0:4}}je.shader=new Q(Ue,(()=>Promise.resolve().then((function(){return Ue}))));const Te={factor:0,units:-4},Re=ae(1,771);class Fe extends ${constructor(){super(...arguments),this.output=0,this.occlusionTestEnabled=!0,this.sdf=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.screenSizePerspective=!1,this.screenCenterOffsetUnitsEnabled=0,this.debugDrawBorder=!0,this.binaryHighlightOcclusion=!0,this.slicePlaneEnabled=!1,this.polygonOffsetEnabled=!1,this.depthEnabled=!0,this.transparencyPassType=3,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.multipassGeometryEnabled=!1}}e([B({count:8})],Fe.prototype,"output",void 0),e([B()],Fe.prototype,"occlusionTestEnabled",void 0),e([B()],Fe.prototype,"sdf",void 0),e([B()],Fe.prototype,"vvSize",void 0),e([B()],Fe.prototype,"vvColor",void 0),e([B()],Fe.prototype,"verticalOffset",void 0),e([B()],Fe.prototype,"screenSizePerspective",void 0),e([B({count:2})],Fe.prototype,"screenCenterOffsetUnitsEnabled",void 0),e([B()],Fe.prototype,"debugDrawBorder",void 0),e([B()],Fe.prototype,"binaryHighlightOcclusion",void 0),e([B()],Fe.prototype,"slicePlaneEnabled",void 0),e([B()],Fe.prototype,"polygonOffsetEnabled",void 0),e([B()],Fe.prototype,"depthEnabled",void 0),e([B({count:4})],Fe.prototype,"transparencyPassType",void 0),e([B()],Fe.prototype,"pixelSnappingEnabled",void 0),e([B()],Fe.prototype,"isDraped",void 0),e([B()],Fe.prototype,"multipassGeometryEnabled",void 0);class Ve extends Y{constructor(e){super(e,ot),this.techniqueConfig=new Fe}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.verticalOffset=!!this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=!!this.params.screenSizePerspective,this.techniqueConfig.screenCenterOffsetUnitsEnabled="screen"===this.params.centerOffsetUnits?1:0,this.techniqueConfig.polygonOffsetEnabled=this.params.polygonOffset,this.techniqueConfig.isDraped=this.params.isDraped,this.techniqueConfig.occlusionTestEnabled=this.params.occlusionTest,this.techniqueConfig.pixelSnappingEnabled=this.params.pixelSnappingEnabled,this.techniqueConfig.sdf=this.params.textureIsSignedDistanceField,this.techniqueConfig.vvSize=!!this.params.vvSizeEnabled,this.techniqueConfig.vvColor=!!this.params.vvColorEnabled,0===e&&(this.techniqueConfig.debugDrawBorder=!!this.params.debugDrawBorder),4===e&&(this.techniqueConfig.binaryHighlightOcclusion=this.params.binaryHighlightOcclusion),this.techniqueConfig.depthEnabled=this.params.depthEnabled,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.multipassGeometryEnabled=!!t&&t.multipassGeometryEnabled,this.techniqueConfig}intersect(e,t,i,o,r,s,n,a,l){l?this.intersectDrapedHudGeometry(e,s,n,a):this.intersectHudGeometry(e,t,i,o,n,a)}intersectDrapedHudGeometry(e,i,o,r){const s=e.vertexAttributes.get("position"),n=e.vertexAttributes.get("size"),a=this.params,l=Ae(a);let c=1,d=1;if(t(r)){const e=r(Ke);c=e[0],d=e[5]}c*=e.screenToWorldRatio,d*=e.screenToWorldRatio;const u=et*e.screenToWorldRatio;for(let t=0;t<s.data.length/s.size;t++){const r=t*s.size,f=s.data[r],p=s.data[r+1],h=t*n.size;let m;tt[0]=n.data[h]*c,tt[1]=n.data[h+1]*d,a.textureIsSignedDistanceField&&(m=a.outlineSize*e.screenToWorldRatio/2),_e(i,f,p,tt,u,m,a,l)&&o()}}intersectHudGeometry(e,i,o,r,s,n){if(!r.options.selectionMode||!r.options.hud)return;if(me(i))return;const l=this.params;let g=1,x=1;if(D(We,o),t(n)){const e=n(Ke);g=e[0],x=e[5],function(e){const t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],n=e[5],a=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+i*i+o*o),u=1/Math.sqrt(r*r+s*s+n*n),f=1/Math.sqrt(a*a+l*l+c*c);e[0]=t*d,e[1]=i*d,e[2]=o*d,e[3]=r*u,e[4]=s*u,e[5]=n*u,e[6]=a*f,e[7]=l*f,e[8]=c*f}(We)}const b=e.vertexAttributes.get("position"),y=e.vertexAttributes.get("size"),P=e.vertexAttributes.get("normal"),O=e.vertexAttributes.get("auxpos1");pe(b.size>=3);const S=r.point,w=r.camera,z=Ae(l);g*=w.pixelRatio,x*=w.pixelRatio;const E="screen"===this.params.centerOffsetUnits;for(let e=0;e<b.data.length/b.size;e++){const t=e*b.size;c(Be,b.data[t],b.data[t+1],b.data[t+2]),d(Be,Be,o);const i=e*y.size;tt[0]=y.data[i]*g,tt[1]=y.data[i+1]*x,d(Be,Be,w.viewMatrix);const n=e*O.size;if(c(Ze,O.data[n+0],O.data[n+1],O.data[n+2]),!E&&(Be[0]+=Ze[0],Be[1]+=Ze[1],0!==Ze[2])){const e=Ze[2];u(Ze,Be),f(Be,Be,p(Ze,Ze,e))}const A=e*P.size;if(c($e,P.data[A],P.data[A+1],P.data[A+2]),this.normalAndViewAngle($e,We,w,Je),this.applyVerticalOffsetTransformationView(Be,Je,w,Ie),w.applyProjection(Be,Ne),Ne[0]>-1){let e=Math.floor(Ne[0])+this.params.screenOffset[0],t=Math.floor(Ne[1])+this.params.screenOffset[1];E&&(e+=Ze[0],0!==Ze[1]&&(t+=Z(Ze[1],Ie.factorAlignment))),J(tt,Ie.factor,tt);const i=Xe*w.pixelRatio;let o;if(l.textureIsSignedDistanceField&&(o=l.outlineSize*w.pixelRatio/2),_e(S,e,t,tt,i,o,l,z)){const e=r.ray;if(d(ke,Be,C(Ye,w.viewMatrix)),Ne[0]=S[0],Ne[1]=S[1],w.unprojectFromRenderScreen(Ne,Be)){const t=a();h(t,e.direction);const i=1/m(t);p(t,t,i);s(v(e.origin,Be)*i,t,-1,1,!0,ke)}}}}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return!1;const o=i.get("position"),r=e.indices.get("position");return K(o,r,t)}createBufferWriter(){return new st(this)}normalAndViewAngle(e,t,i,o){return Pe(t)&&(t=D(Qe,t)),g(o.normal,e,t),d(o.normal,o.normal,i.viewInverseTransposeMatrix),o.cosAngle=x(Le,it),o}updateScaleInfo(e,t,i){const o=this.params;o.screenSizePerspective?X(i,t,o.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),o.screenSizePerspectiveAlignment?X(i,t,o.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,i,o,r,s,n){const a=this.normalAndViewAngle(t,i,r,Je);return this.applyVerticalGroundOffsetView(e,a,r,n),this.applyVerticalOffsetTransformationView(n,a,r,s),this.applyPolygonOffsetView(n,a,o[3],r,n),this.applyCenterOffsetView(n,o,n),n}applyShaderOffsetsNDC(e,i,o,r,s){return this.applyCenterOffsetNDC(e,i,o,r),t(s)&&h(s,r),this.applyPolygonOffsetNDC(r,i,o,r),r}applyPolygonOffsetView(e,t,i,o,r){const a=o.aboveGround?1:-1;let l=n(i);0===l&&(l=a);const c=a*l;if(this.params.shaderPolygonOffset<=0)return h(r,e);const d=s(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-d*d)/d/o.viewport[2];return p(r,e,c>0?u:1/u),r}applyVerticalGroundOffsetView(e,t,i,o){const r=m(e),s=i.aboveGround?1:-1,n=.5*i.computeRenderPixelSizeAtDist(r),a=p(Be,t.normal,s*n);return b(o,e,a),o}applyVerticalOffsetTransformationView(e,t,i,o){const r=this.params;if(!r.verticalOffset||!r.verticalOffset.screenLength){if(r.screenSizePerspective||r.screenSizePerspectiveAlignment){const i=m(e);this.updateScaleInfo(o,i,t.cosAngle)}else o.factor.scale=1,o.factorAlignment.scale=1;return e}const s=m(e),n=r.screenSizePerspectiveAlignment||r.screenSizePerspective,a=ee(i,s,r.verticalOffset,t.cosAngle,n);return this.updateScaleInfo(o,s,t.cosAngle),p(t.normal,t.normal,a),b(e,e,t.normal)}applyCenterOffsetView(e,t,i){const o="screen"!==this.params.centerOffsetUnits;return i!==e&&h(i,e),o&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(u($e,i),b(i,i,p($e,$e,t[2])))),i}applyCenterOffsetNDC(e,t,i,o){const r="screen"!==this.params.centerOffsetUnits;return o!==e&&h(o,e),r||(o[0]+=t[0]/i.fullWidth*2,o[1]+=t[1]/i.fullHeight*2),o}applyPolygonOffsetNDC(e,t,i,o){const r=this.params.shaderPolygonOffset;if(e!==o&&h(o,e),r){const e=i.aboveGround?1:-1,s=e*n(t[3]);o[2]-=(s||e)*r}return o}getGLMaterial(e){return 0===e.output||7===e.output?new Me(e):4===e.output?new He(e):void 0}calculateRelativeScreenBounds(e,t,i=O()){return function(e,t,i,o=Ge){U(o,e.anchorPos),o[0]*=-t[0],o[1]*=-t[1],o[0]+=e.screenOffset[0]*i,o[1]+=e.screenOffset[1]*i}(this.params,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class qe extends ge{constructor(e){super({...e,...e.material.params}),this.updateParameters()}beginSlot(e){return e===(this.material.params.drawInSecondSlot?19:18)}updateParameters(e){this.updateTexture(this.material.params.textureId),this.selectProgram(e)}selectProgram(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(je,this.material.getTechniqueConfig(this.output,e),this.technique)}ensureParameters(e){this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.bindTexture(e,this.technique.program),this.bindTextureScale(e,this.technique.program),this.technique.bindPass(e,this.material.params,t)}}class Me extends qe{constructor(e){super(e),this.isOcclusionSlot=!1}beginSlot(e){const t=this.material.params.drawInSecondSlot?19:18;return this.material.params.occlusionTest?(this.isOcclusionSlot=12===e,12===e||e===t):(this.isOcclusionSlot=!1,e===t)}getTechnique(){return this.isOcclusionSlot?this.occlusionTechnique:this.technique}selectProgram(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(je,this.material.getTechniqueConfig(this.output,e),this.technique),this.occlusionTechnique=this.techniqueRep.acquireAndReleaseExisting(je,this.material.getTechniqueConfig(6,e),this.occlusionTechnique)}bind(e,t){const i=this.getTechnique();e.bindProgram(i.program),this.isOcclusionSlot||(this.bindTexture(e,i.program),this.bindTextureScale(e,i.program)),i.bindPass(e,this.material.params,t)}}class He extends qe{constructor(e){super({...e,output:4})}}function _e(e,t,i,o,r,s,n,a){let l=t-r-(a[0]>0?o[0]*a[0]:0),c=l+o[0]+2*r,d=i-r-(a[1]>0?o[1]*a[1]:0),u=d+o[1]+2*r;if(n.textureIsSignedDistanceField){const e=n.distanceFieldBoundingBox;l+=o[0]*e[0],d+=o[1]*e[1],c-=o[0]*(1-e[2]),u-=o[1]*(1-e[3]),l-=s,c+=s,d-=s,u+=s}return e[0]>l&&e[0]<c&&e[1]>d&&e[1]<u}const Ie={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},Ge=j(),Be=a(),$e=a(),Ne=P(),Le=a(),ke=a(),We=E(),Qe=E(),Ye=A(),Ze=a(),Je={normal:Le,cosAngle:0},Ke=A(),Xe=1,et=2,tt=[0,0],it=l(0,0,1),ot={texCoordScale:[1,1],occlusionTest:!0,binaryHighlightOcclusion:!0,drawInSecondSlot:!1,color:[1,1,1,1],outlineColor:[1,1,1,1],outlineSize:0,textureIsSignedDistanceField:!1,distanceFieldBoundingBox:null,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],screenOffset:[0,0],verticalOffset:null,screenSizePerspective:null,screenSizePerspectiveAlignment:null,slicePlaneEnabled:!1,anchorPos:T(.5,.5),shaderPolygonOffset:1e-5,polygonOffset:!1,textureId:null,centerOffsetUnits:"world",depthEnabled:!0,pixelSnappingEnabled:!0,debugDrawBorder:!1,isDraped:!1,...te},rt=ue().vec3f("position").vec3f("normal").vec2f("uv0").vec4u8("color").vec2f("size").vec4f("auxpos1").vec4f("auxpos2");class st{constructor(e){this.material=e,this.vertexBufferLayout=rt}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get("position").length}write(e,t,i,o){ie(t.indices.get("position"),t.vertexAttributes.get("position").data,e.transformation,i.position,o,6),oe(t.indices.get("normal"),t.vertexAttributes.get("normal").data,e.invTranspTransformation,i.normal,o,6);{const e=t.vertexAttributes.get("uv0").data;let r,s,n,a;if(null==e||e.length<4){const e=this.material.params;r=0,s=0,n=e.texCoordScale[0],a=e.texCoordScale[1]}else r=e[0],s=e[1],n=e[2],a=e[3];n=Math.min(1.99999,n+1),a=Math.min(1.99999,a+1);const l=t.indices.get("position").length,c=i.uv0;let d=o;for(let e=0;e<l;++e)c.set(d,0,r),c.set(d,1,s),d+=1,c.set(d,0,n),c.set(d,1,s),d+=1,c.set(d,0,n),c.set(d,1,a),d+=1,c.set(d,0,n),c.set(d,1,a),d+=1,c.set(d,0,r),c.set(d,1,a),d+=1,c.set(d,0,r),c.set(d,1,s),d+=1}re(t.indices.get("color"),t.vertexAttributes.get("color").data,4,i.color,o,6);{const e=t.indices.get("size"),r=t.vertexAttributes.get("size").data,s=e.length,n=i.size;let a=o;for(let t=0;t<s;++t){const i=r[2*e[t]],o=r[2*e[t]+1];for(let e=0;e<6;++e)n.set(a,0,i),n.set(a,1,o),a+=1}}t.indices.get("auxpos1")&&t.vertexAttributes.get("auxpos1")&&se(t.indices.get("auxpos1"),t.vertexAttributes.get("auxpos1").data,i.auxpos1,o,6),t.indices.get("auxpos2")&&t.vertexAttributes.get("auxpos2")&&se(t.indices.get("auxpos2"),t.vertexAttributes.get("auxpos2").data,i.auxpos2,o,6)}}const nt=i.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function at(e){const t=e&&e.expression;if("string"==typeof t){const e=ht(t);if(null!=e)return{cachedResult:e}}return null}async function lt(e,t,i){const o=e&&e.expression;if("string"!=typeof o)return null;const r=ht(o);if(null!=r)return{cachedResult:r};const s=await y(),n=s.arcadeUtils,a=n.createSyntaxTree(o);return n.dependsOnView(a)?(null!=i&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:n.createFunction(a),context:n.createExecContext(null,{sr:t}),modules:s}}}function ct(e,t,i){return e.arcadeUtils.createFeature(t.attributes,t.geometry,i)}function dt(e,t){if(null!=e&&!pt(e)){if(!t||!e.arcade)return void nt.errorOncePerTick("Arcade support required but not provided");const i=t;i._geometry&&(i._geometry=fe(i._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function ut(e,t=!1){let i=e&&e.featureExpressionInfo;const o=i&&i.expression;return t||"0"===o||(i=null),i}const ft={cachedResult:0};function pt(e){return null!=e.cachedResult}function ht(e){return"0"===e?0:null}class mt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=S(e)}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return null!=i&&(t+=function(e){if(null!=e){if(pt(e))return e.cachedResult;const t=e.arcade;let i=e.arcade.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof i&&(e.cachedResult=0,i=0),i}return 0}(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=w(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=o(e.offset,0)}updateFeatureExpressionInfoContext(e,i,o){if(r(e))return void(this._featureExpressionInfoContext=null);const s=e&&e.arcade;var n;s&&t(i)&&t(o)?(this._featureExpressionInfoContext={cachedResult:(n=e).cachedResult,arcade:n.arcade?{func:n.arcade.func,context:n.arcade.modules.arcadeUtils.createExecContext(null,{sr:n.arcade.context.spatialReference}),modules:n.arcade.modules}:null},dt(this._featureExpressionInfoContext,ct(s.modules,i,o))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new mt;return t(e)&&i.setFromElevationInfo(e),i}}function vt(e,t,i){switch(e){case"circle":return gt(t,i);case"square":return xt(t,i);case"cross":return yt(t,i);case"x":return Pt(t,i);case"kite":return bt(t,i);case"triangle":return Ct(t,i);default:return gt(t,i)}}function gt(e,t){const i=e,o=new Uint8Array(4*i*i),r=i/2-.5,s=t/2;for(let t=0;t<i;t++)for(let n=0;n<i;n++){const a=n+i*t,l=n-r,c=t-r;let d=Math.sqrt(l*l+c*c)-s;d=d/e+.5,he(d,o,4*a)}return o}function xt(e,t){return Ot(e,t,!1)}function bt(e,t){return Ot(e,t,!0)}function yt(e,t){return St(e,t,!1)}function Pt(e,t){return St(e,t,!0)}function Ct(e,t){const i=new Uint8Array(4*e*e),o=-.5,r=Math.sqrt(1.25),s=(e-t)/2;for(let n=0;n<e;n++)for(let a=0;a<e;a++){const l=n*e+a,c=(a-s)/t,d=(n-s+.75)/t,u=-(1*c+o*d)/r,f=(1*(c-1)+o*-d)/r,p=-d,h=Math.max(u,f,p);he(h*t/e+.5,i,4*l)}return i}function Ot(e,t,i){i&&(t/=Math.SQRT2);const o=new Uint8Array(4*e*e);for(let r=0;r<e;r++)for(let s=0;s<e;s++){let n=s-.5*e+.25,a=.5*e-r-.75;const l=r*e+s;if(i){const e=(n+a)/Math.SQRT2;a=(a-n)/Math.SQRT2,n=e}let c=Math.max(Math.abs(n),Math.abs(a))-.5*t;c=c/e+.5,he(c,o,4*l)}return o}function St(e,t,i){i&&(t*=Math.SQRT2);const o=.5*t,r=new Uint8Array(4*e*e);for(let t=0;t<e;t++)for(let s=0;s<e;s++){let n=s-.5*e,a=.5*e-t-1;const l=t*e+s;if(i){const e=(n+a)/Math.SQRT2;a=(a-n)/Math.SQRT2,n=e}let c;n=Math.abs(n),a=Math.abs(a),c=n>a?n>o?Math.sqrt((n-o)*(n-o)+a*a):a:a>o?Math.sqrt(n*n+(a-o)*(a-o)):n,c=c/e+.5,he(c,r,4*l)}return r}export{ye as A,mt as E,Ve as H,Ce as a,Se as b,ct as c,Ct as d,Pt as e,yt as f,bt as g,xt as h,gt as i,vt as j,ut as k,lt as l,Oe as m,at as n,dt as s,ft as z};
