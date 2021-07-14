/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{c as t,i,u as r,L as n}from"./Logger.js";import{n as o}from"./compilerUtils.js";import{c as a}from"./mathUtils2.js";import{c as s}from"./vec3f64.js";import{a as l,s as p,d as c,b as d,e as u,g as f,l as v,k as h,i as m}from"./vec3.js";import{d as g}from"./screenUtils.js";import{c as b}from"./mat4.js";import{projectBuffer as x,computeLinearTransformation as y}from"../geometry/projection.js";import{c as C,a as D}from"./quatf64.js";import{c as S}from"./vec2.js";import{i as E}from"./dehydratedFeatures.js";import{i as O,g as P}from"./ElevationProvider.js";import{g as A,S as z,o as j,l as R,n as T,d as L,C as w,E as F,p as U,a as N,b as q,V,O as W,q as I,r as _,s as M,t as B,F as G,u as J,H,v as $,x as k,aa as X,ab as Z,ac as K,ad as Q,ae as Y,R as ee,m as te,M as ie,z as re,G as ne}from"./VertexColor.glsl.js";import{P as oe}from"./Program.js";import{m as ae,a as se,d as le}from"./renderState.js";import{n as pe}from"./InterleavedLayout.js";import{f as ce}from"./vec3f32.js";import{u as de,p as ue}from"./geometryUtils.js";import{u as fe}from"./ColorMaterial.js";import{h as ve}from"./Util.js";import{i as he}from"./Object3D.js";import{P as me,V as ge}from"./PiUtils.glsl.js";function be(e,t,i,r,n,o,a,s,l,p,c){const d=Oe[c.mode];let u,f,v=0;if(x(e,t,i,r,l.spatialReference,n,s))return d.requiresAlignment(c)?(v=d.applyElevationAlignmentBuffer(r,n,o,a,s,l,p,c),u=o,f=a):(u=r,f=n),x(u,l.spatialReference,f,o,p.spatialReference,a,s)?v:void 0}function xe(e,i,r,n,a){const s=(E(e)?e.z:O(e)?e.array[e.offset+2]:e[2])||0;switch(r.mode){case"on-the-ground":{const r=t(P(i,e,"ground"),0);return a&&(a.verticalDistanceToGround=0,a.sampledElevation=r),r}case"relative-to-ground":{const o=t(P(i,e,"ground"),0),l=r.geometryZWithOffset(s,n);return a&&(a.verticalDistanceToGround=l,a.sampledElevation=o),l+o}case"relative-to-scene":{const o=t(P(i,e,"scene"),0),l=r.geometryZWithOffset(s,n);return a&&(a.verticalDistanceToGround=l,a.sampledElevation=o),l+o}case"absolute-height":{const o=r.geometryZWithOffset(s,n);if(a){const r=t(P(i,e,"ground"),0);a.verticalDistanceToGround=o-r,a.sampledElevation=r}return o}default:return o(r.mode),0}}function ye(e,t,i){return null==t||null==i?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===i?e.staysOnTheGround:t===i||"on-the-ground"!==t&&"on-the-ground"!==i?Ee.UPDATE:e.onTheGroundChanged}function Ce(e){return"relative-to-ground"===e||"relative-to-scene"===e}function De(e){return"absolute-height"!==e}function Se(e,t,i,r,n){const o=xe(t,i,n,r,Ae);fe(e,Ae.verticalDistanceToGround);const a=Ae.sampledElevation,s=b(Pe,e.transformation);ze[0]=t.x,ze[1]=t.y,ze[2]=o;return y(t.spatialReference,ze,s,r.spatialReference)?e.transformation=s:console.warn("Could not locate symbol object properly, it might be misplaced"),a}var Ee;!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(Ee||(Ee={}));const Oe={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,i,r,n,o,a,s){const l=s.calculateOffsetRenderUnits(a),p=s.featureExpressionInfoContext;t*=3,r*=3;for(let o=0;o<n;++o){const n=e[t+0],o=e[t+1],a=e[t+2];i[r+0]=n,i[r+1]=o,i[r+2]=null==p?a+l:l,t+=3,r+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return 0!==t||null!=i}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,i,r,n,o,a){let s=0;const l=a.spatialReference;i*=3,n*=3;for(let p=0;p<o;++p){const o=e[i+0],p=e[i+1],c=e[i+2],d=t(a.getElevation(o,p,c,l,"ground"),0);s+=d,r[n+0]=o,r[n+1]=p,r[n+2]=d,i+=3,n+=3}return s/o},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,i,r,n,o,a,s,l){let p=0;const c=l.calculateOffsetRenderUnits(s),d=l.featureExpressionInfoContext,u=a.spatialReference;i*=3,n*=3;for(let s=0;s<o;++s){const o=e[i+0],s=e[i+1],l=e[i+2],f=t(a.getElevation(o,s,l,u,"ground"),0);p+=f,r[n+0]=o,r[n+1]=s,r[n+2]=null==d?l+f+c:f+c,i+=3,n+=3}return p/o},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,i,r,n,o,a,s,l){let p=0;const c=l.calculateOffsetRenderUnits(s),d=l.featureExpressionInfoContext,u=a.spatialReference;i*=3,n*=3;for(let s=0;s<o;++s){const o=e[i+0],s=e[i+1],l=e[i+2],f=t(a.getElevation(o,s,l,u,"scene"),0);p+=f,r[n+0]=o,r[n+1]=s,r[n+2]=null==d?l+f+c:f+c,i+=3,n+=3}return p/o},requiresAlignment:()=>!0}},Pe=C(),Ae={verticalDistanceToGround:0,sampledElevation:0},ze=s();var je;!function(e){e.Default={vvSizeEnabled:!1,vvSizeMinSize:ce(1,1,1),vvSizeMaxSize:ce(100,100,100),vvSizeOffset:ce(0,0,0),vvSizeFactor:ce(1,1,1),vvSizeValue:ce(1,1,1),vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvOpacityEnabled:!1,vvOpacityValues:[0,0,0,0,0,0,0,0],vvOpacityOpacities:[1,1,1,1,1,1,1,1],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:D()}}(je||(je={}));var Re=je;function Te(e,t){e.vertex.uniforms.add("intrinsicWidth","float"),t.vvSize?(e.attributes.add("sizeFeatureAttribute","float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(A`
    float getSize() {
      return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
    }
    `)):(e.attributes.add("size","float"),e.vertex.code.add(A`
    float getSize(){
      return intrinsicWidth * size;
    }
    `)),t.vvOpacity?(e.attributes.add("opacityFeatureAttribute","float"),e.vertex.constants.add("vvOpacityNumber","int",8),e.vertex.code.add(A`
    uniform float vvOpacityValues[vvOpacityNumber];
    uniform float vvOpacityOpacities[vvOpacityNumber];

    float interpolateOpacity( float value ){
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity( vec4 color ){
      return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):e.vertex.code.add(A`
    vec4 applyOpacity( vec4 color ){
      return color;
    }
    `),t.vvColor?(e.attributes.add("colorFeatureAttribute","float"),e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(A`
    uniform float vvColorValues[vvColorNumber];
    uniform vec4 vvColorColors[vvColorNumber];

    vec4 interpolateColor( float value ) {
      if (value <= vvColorValues[0]) {
        return vvColorColors[0];
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return mix(vvColorColors[i-1], vvColorColors[i], f);
        }
      }

      return vvColorColors[vvColorNumber - 1];
    }

    vec4 getColor(){
      return applyOpacity(interpolateColor(colorFeatureAttribute));
    }
    `)):(e.attributes.add("color","vec4"),e.vertex.code.add(A`
    vec4 getColor(){
      return applyOpacity(color);
    }
    `))}function Le(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?function(e,t){e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),t.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float");e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),t.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4");e.fragment.code.add(A`
  float getStippleAlpha() {
    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
    ${t.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}

    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;
  }`),t.stippleOffColorEnabled?e.fragment.code.add(A`
    #define discardByStippleAlpha(stippleAlpha, threshold) {}
    #define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)
    `):e.fragment.code.add(A`
    #define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
    #define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)
    `)}(e,t):function(e){e.fragment.code.add(A`
  float getStippleAlpha() { return 1.0; }

  #define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
  #define blendStipple(color, _stippleAlpha_) color
  `)}(e)}var we=Object.freeze({__proto__:null,build:function(e){const t=new z;t.extensions.add("GL_OES_standard_derivatives"),t.include(me),t.include(Te,e),t.include(Le,e),1===e.output&&t.include(j,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),t.attributes.add("position","vec3"),t.attributes.add("subdivisionFactor","float"),t.attributes.add("uv0","vec2"),t.attributes.add("auxpos1","vec3"),t.attributes.add("auxpos2","vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&t.varyings.add("depth","float");const i=e.falloffEnabled,r=e.innerColorEnabled;return r&&t.varyings.add("vLineDistance","float"),i&&t.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&t.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(t.fragment.uniforms.add("innerColor","vec4"),t.fragment.uniforms.add("innerWidth","float")),t.vertex.code.add(A`
		#define PERPENDICULAR(v) vec2(v.y, -v.x);
		#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y > 0.0

		float interp(float ncp, vec4 a, vec4 b) {
			return (-ncp - a.z) / (b.z - a.z);
		}

		vec2 rotate(vec2 v, float a) {
			float s = sin(a);
			float c = cos(a);
			mat2 m = mat2(c, -s, s, c);
			return m * v;
		}
`),t.vertex.code.add(A`
    vec4 projectAndScale(vec4 pos) {
      vec4 posNdc = proj * pos;

      // Note that posNdc is in -1:1, scaling by screenSize converts this to a coordinate system
      // that is twice scaled (going from -size:size).
      posNdc.xy *= screenSize / posNdc.w;
      return posNdc;
    }
`),t.vertex.code.add(A`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${e.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),t.vertex.code.add(A`
  void main(void) {
    float coverage = 1.0;
    vpos = position;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;
      bool isJoin = abs(uv0.y)-3.0 < 0.0;

      float lineWidth = getSize() * pixelRatio;

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),e.stippleEnabled&&t.vertex.code.add(A`
      // uv0.x is either 0 or 1, depending on whether this is considered the start of a line segment
      // or the end. If start, then use pos->next, otherwise use prev->pos to define the line segment
      // vector
      vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);
      vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;

      // Scale s.t. it's in units of stipple pattern size.
      vec2 stippleSegmentDirection = stippleSegmentInfo.zw;
    `),t.vertex.code.add(A`
    left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
    right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);

    vec2 capDisplacementDir = vec2(0, 0);
    vec2 joinDisplacementDir = vec2(0, 0);
    float displacementLen = lineWidth;

    if (isJoin) {

      // JOIN handling ---------------------------------------------------
      // determine if vertex is on the "outside or "inside" of the join
      bool isOutside = ISOUTSIDE;

      // compute miter join position first
      joinDisplacementDir = normalize(left + right);
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      // compute miter stretch
      if (leftLen > 0.001 && rightLen > 0.001) {
        float nDotSeg = dot(joinDisplacementDir, left);
        displacementLen /= length(nDotSeg * left - joinDisplacementDir);

        // limit displacement of inner vertices
        if (!isOutside) {
          displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
        }
      }

      if (isOutside && (displacementLen > miterLimit * lineWidth)) {
    `),e.roundJoins?t.vertex.code.add(A`
        vec2 startDir;
        vec2 endDir;

        if (leftLen < 0.001) {
          startDir = right;
        }
        else{
          startDir = left;
        }
        startDir = normalize(startDir);
        startDir = PERPENDICULAR(startDir);

        if (rightLen < 0.001) {
          endDir = left;
        }
        else{
          endDir = right;
        }
        endDir = normalize(endDir);
        endDir = PERPENDICULAR(endDir);

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);
      `):t.vertex.code.add(A`
        // convert to bevel join if miterLimit is exceeded
        if (leftLen < 0.001) {
          joinDisplacementDir = right;
        }
        else if (rightLen < 0.001) {
          joinDisplacementDir = left;
        }
        else {
          joinDisplacementDir = isStartVertex ? right : left;
        }
        joinDisplacementDir = normalize(joinDisplacementDir);
        joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
  `),t.vertex.code.add(A`
        displacementLen = lineWidth;
      }
    } else {
    // CAP handling ---------------------------------------------------
    if (leftLen < 0.001) {
      joinDisplacementDir = right;
    }
    else if (rightLen < 0.001) {
      joinDisplacementDir = left;
    }
    else {
      joinDisplacementDir = isStartVertex ? right : left;
    }
    joinDisplacementDir = normalize(joinDisplacementDir);
    joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
    displacementLen = lineWidth;

    capDisplacementDir = isStartVertex ? -right : left;
  `),e.roundCaps?t.vertex.code.add(A`
    float angle = subdivisionFactor*PI*0.5;
    joinDisplacementDir *= cos(angle);
    capDisplacementDir *= sin(angle);
    `):t.vertex.code.add(A`
    capDisplacementDir *= subdivisionFactor;
    `),t.vertex.code.add(A`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${i||r?A`float lineDist = lineWidth * sign(uv0.y) * pos.w;`:""}

  ${r?A`vLineDistance = lineDist;`:""}
  ${i?A`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `),e.stippleEnabled&&(t.vertex.code.add(A`
    {
      // Compute the stipple pattern UV coordinate from the actual position, based on the origin
      // and direction of the line segment on which the stipple pattern is based.

      // Project the vector from the origin of the segment to the vertex onto the line segment.
      // Note the 0.5 factor due to projected positions being at twice the screen size scale (see projectAndScale)
      vec2 posVec = pos.xy - stippleSegmentOrigin;

      float stippleSegmentDirectionLength = length(stippleSegmentDirection);
    `),e.stippleIntegerRepeatsEnabled&&t.vertex.code.add(A`
      float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
      float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
      stipplePatternUvMax = roundedNumberOfPatternRepeats;
      `),t.vertex.code.add(A`
      if (stippleSegmentDirectionLength >= 0.001) {
        // Project the vertex position onto the line segment.
        float projectedLength = dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;
     ${e.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
        stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `)),t.vertex.code.add(A`
      // Convert back into NDC
      pos.xy = pos.xy / screenSize * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      gl_Position = pos;
    }
  }
  `),e.multipassTerrainEnabled&&(t.fragment.include(R),t.include(T,e)),t.include(L,e),t.fragment.uniforms.add("intrinsicColor","vec4"),t.fragment.include(w),t.fragment.code.add(A`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 color = intrinsicColor * vColor;
  `),e.innerColorEnabled&&(t.fragment.uniforms.add("pixelRatio","float"),t.fragment.code.add(A`
    float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
    float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
    float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
    color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);
    `)),t.fragment.code.add(A`
    vec4 finalColor = blendStipple(color, stippleAlpha);
  `),e.falloffEnabled&&t.fragment.code.add(A`
    finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);
    `),t.fragment.code.add(A`
    if (finalColor.a < ${A.float(F)}) {
      discard;
    }

    ${7===e.output?A`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===e.output?A`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===e.output&&e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===e.output?A`gl_FragColor = vec4(1.0);`:""}
    ${1===e.output?A`outputDepth(linearDepth);`:""}
  }
  `),t}});const Fe={position:0,subdivisionFactor:1,uv0:2,auxpos1:3,auxpos2:4,size:6,sizeFeatureAttribute:6,color:5,colorFeatureAttribute:5,opacityFeatureAttribute:7};class Ue extends q{constructor(e,t){super(e,t),this.stipplePattern=null,this.stippleTextureBind=null,this.stippleTextureRepository=e.stippleTextureRepository}initializeProgram(e){const t=Ue.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,stippleEnabled:i.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleUVMaxEnabled:i.stippleIntegerRepeatsEnabled,stippleIntegerRepeatsEnabled:i.stippleIntegerRepeatsEnabled,roundCaps:i.roundCaps,roundJoins:i.roundJoins,vvColor:i.vvColor,vvSize:i.vvSize,vvInstancingEnabled:!0,vvOpacity:i.vvOpacity,falloffEnabled:i.falloffEnabled,innerColorEnabled:i.innerColorEnabled,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new oe(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),Fe)}dispose(){super.dispose(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,n,o){if(V.bindProjectionMatrix(this.program,o.camera.projectionMatrix),4===this.configuration.output&&W.bindOutputHighlight(e,this.program,o),o.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",o.inverseViewport),I(this.program,e,o)),this.program.setUniform1f("intrinsicWidth",n.width),this.program.setUniform4fv("intrinsicColor",n.color),this.program.setUniform1f("miterLimit","miter"!==n.join?0:n.miterLimit),this.program.setUniform2fv("cameraNearFar",o.camera.nearFar),this.program.setUniform1f("pixelRatio",o.camera.pixelRatio),this.program.setUniform2f("screenSize",o.camera.fullViewport[2],o.camera.fullViewport[3]),ge.bindUniformsWithOpacity(this.program,n),this.stipplePattern!==n.stipplePattern){const e=n.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,e),this.stipplePattern=e}if(this.configuration.stippleEnabled){const t=i(this.stippleTextureBind)?this.stippleTextureBind(e,0)*o.camera.pixelRatio:1;if(this.program.setUniform1i("stipplePatternTexture",0),this.program.setUniform1f("stipplePatternPixelSizeInv",1/t),this.configuration.stippleOffColorEnabled){const e=r(n.stippleOffColor);this.program.setUniform4f("stippleOffColor",e[0],e[1],e[2],e.length>3?e[3]:1)}}this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",n.falloff),this.configuration.innerColorEnabled&&(this.program.setUniform4fv("innerColor",t(n.innerColor,n.color)),this.program.setUniform1f("innerWidth",n.innerWidth*o.camera.pixelRatio))}bindDraw(e){V.bindView(this.program,e),L.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e,t){const i=this.configuration,r=3===e,n=2===e;return ae({blending:0===i.output||7===i.output?r?_:M(e):null,depthTest:{func:B(e)},depthWrite:r?!i.transparent&&i.writeDepth&&se:G(e),colorWrite:le,stencilWrite:i.sceneHasOcludees?J:null,stencilTest:i.sceneHasOcludees?t?H:$:null,polygonOffset:r||n?i.polygonOffset&&Ne:k})}initializePipeline(){const e=this.configuration,t=e.polygonOffset&&Ne;return e.occluder&&(this._occluderPipelineTransparent=ae({blending:_,polygonOffset:t,depthTest:X,depthWrite:null,colorWrite:le,stencilWrite:null,stencilTest:Z}),this._occluderPipelineOpaque=ae({blending:_,polygonOffset:t,depthTest:X,depthWrite:null,colorWrite:le,stencilWrite:K,stencilTest:Q}),this._occluderPipelineMaskWrite=ae({blending:null,polygonOffset:t,depthTest:Y,depthWrite:null,colorWrite:null,stencilWrite:J,stencilTest:H})),this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return 5}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?11===e?this._occluderPipelineTransparent:10===e?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:this.pipeline}}Ue.shader=new ee(we,(()=>Promise.resolve().then((function(){return we}))));const Ne={factor:0,units:-4};class qe extends N{constructor(){super(...arguments),this.output=0,this.occluder=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.polygonOffset=!1,this.writeDepth=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleIntegerRepeatsEnabled=!1,this.roundCaps=!1,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}e([U({count:8})],qe.prototype,"output",void 0),e([U()],qe.prototype,"occluder",void 0),e([U()],qe.prototype,"slicePlaneEnabled",void 0),e([U()],qe.prototype,"transparent",void 0),e([U()],qe.prototype,"polygonOffset",void 0),e([U()],qe.prototype,"writeDepth",void 0),e([U()],qe.prototype,"stippleEnabled",void 0),e([U()],qe.prototype,"stippleOffColorEnabled",void 0),e([U()],qe.prototype,"stippleIntegerRepeatsEnabled",void 0),e([U()],qe.prototype,"roundCaps",void 0),e([U()],qe.prototype,"roundJoins",void 0),e([U()],qe.prototype,"vvSize",void 0),e([U()],qe.prototype,"vvColor",void 0),e([U()],qe.prototype,"vvOpacity",void 0),e([U()],qe.prototype,"falloffEnabled",void 0),e([U()],qe.prototype,"innerColorEnabled",void 0),e([U()],qe.prototype,"sceneHasOcludees",void 0),e([U({count:4})],qe.prototype,"transparencyPassType",void 0),e([U()],qe.prototype,"multipassTerrainEnabled",void 0),e([U()],qe.prototype,"cullAboveGround",void 0);const Ve=n.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");class We extends ie{constructor(e){super(e,_e),this._vertexAttributeLocations=Fe,this.techniqueConfig=new qe,this.layout=this.createLayout()}isClosed(e,t){return Je(this.params,e,t)}dispose(){}getPassParameters(){return this.params}getTechniqueConfig(e,t){this.techniqueConfig.output=e;const r=i(this.params.stipplePattern);return this.techniqueConfig.stippleEnabled=r,this.techniqueConfig.stippleIntegerRepeatsEnabled=r&&this.params.stippleIntegerRepeats,this.techniqueConfig.stippleOffColorEnabled=r&&i(this.params.stippleOffColor),this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.roundJoins="round"===this.params.join,this.techniqueConfig.roundCaps="round"===this.params.cap,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.vvOpacity=this.params.vvOpacityEnabled,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.params.innerWidth>0&&i(this.params.innerColor),this.techniqueConfig.falloffEnabled=this.params.falloff>0,this.techniqueConfig.occluder=8===this.params.renderOccluded,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,this.techniqueConfig}intersect(e,t,i,r,n,o,a,s,l){l?this.intersectDrapedLineGeometry(e,r,o,a):this.intersectLineGeometry(e,t,i,r,this.params.width,a)}intersectDrapedLineGeometry(e,t,i,r){if(!t.options.selectionMode)return;const n=e.vertexAttributes.get("position").data,o=e.vertexAttributes.get("size");let s=this.params.width;if(this.params.vvSizeEnabled){const t=e.vertexAttributes.get("sizeFeatureAttribute").data[0];s*=a(this.params.vvSizeOffset[0]+t*this.params.vvSizeFactor[0],this.params.vvSizeMinSize[0],this.params.vvSizeMaxSize[0])}else o&&(s*=o.data[0]);const l=i[0],p=i[1],c=(s/2+4)*e.screenToWorldRatio;let d=Number.MAX_VALUE;for(let e=0;e<n.length-5;e+=3){const t=n[e],i=n[e+1],r=l-t,o=p-i,s=n[e+3]-t,c=n[e+4]-i,u=a((s*r+c*o)/(s*s+c*c),0,1),f=s*u-r,v=c*u-o,h=f*f+v*v;h<d&&(d=h)}d<c*c&&r()}intersectLineGeometry(e,t,i,r,n,o){if(!r.options.selectionMode||he(t))return;if(!ve(i))return void Ve.error("intersection assumes a translation-only matrix");const s=e.vertexAttributes,m=s.get("position").data;let g=n;if(this.params.vvSizeEnabled){const e=s.get("sizeFeatureAttribute").data[0];g*=a(this.params.vvSizeOffset[0]+e*this.params.vvSizeFactor[0],this.params.vvSizeMinSize[0],this.params.vvSizeMaxSize[0])}else s.has("size")&&(g*=s.get("size").data[0]);const b=r.camera,x=Qe;S(x,r.point);const y=g*b.pixelRatio/2+4*b.pixelRatio;l(lt[0],x[0]-y,x[1]+y,0),l(lt[1],x[0]+y,x[1]+y,0),l(lt[2],x[0]+y,x[1]-y,0),l(lt[3],x[0]-y,x[1]-y,0);for(let e=0;e<4;e++)if(!b.unprojectFromRenderScreen(lt[e],pt[e]))return;ue.fromPoints(b.eye,pt[0],pt[1],ct),ue.fromPoints(b.eye,pt[1],pt[2],dt),ue.fromPoints(b.eye,pt[2],pt[3],ut),ue.fromPoints(b.eye,pt[3],pt[0],ft);let C=Number.MAX_VALUE;const D=Ge(this.params,s,e.indices)?m.length-2:m.length-5;for(let e=0;e<D;e+=3){ke[0]=m[e]+i[12],ke[1]=m[e+1]+i[13],ke[2]=m[e+2]+i[14];const t=(e+3)%m.length;if(Xe[0]=m[t]+i[12],Xe[1]=m[t+1]+i[13],Xe[2]=m[t+2]+i[14],ue.signedDistance(ct,ke)<0&&ue.signedDistance(ct,Xe)<0||ue.signedDistance(dt,ke)<0&&ue.signedDistance(dt,Xe)<0||ue.signedDistance(ut,ke)<0&&ue.signedDistance(ut,Xe)<0||ue.signedDistance(ft,ke)<0&&ue.signedDistance(ft,Xe)<0)continue;if(b.projectToRenderScreen(ke,Ye),b.projectToRenderScreen(Xe,et),Ye[2]<0&&et[2]>0){p(Ze,ke,Xe);const e=b.frustum,t=-ue.signedDistance(e[4],ke)/c(Ze,ue.normal(e[4]));d(Ze,Ze,t),u(ke,ke,Ze),b.projectToRenderScreen(ke,Ye)}else if(Ye[2]>0&&et[2]<0){p(Ze,Xe,ke);const e=b.frustum,t=-ue.signedDistance(e[4],Xe)/c(Ze,ue.normal(e[4]));d(Ze,Ze,t),u(Xe,Xe,Ze),b.projectToRenderScreen(Xe,et)}else if(Ye[2]<0&&et[2]<0)continue;Ye[2]=0,et[2]=0;const r=de.distance2(de.fromPoints(Ye,et,rt),x);r<C&&(C=r,f(tt,ke),f(it,Xe))}const E=r.rayBeginPoint,O=r.rayEndPoint;if(C<y*y){let e=Number.MAX_VALUE;if(de.closestLineSegmentPoint(de.fromPoints(tt,it,rt),de.fromPoints(E,O,nt),Ke)){p(Ke,Ke,E);const t=v(Ke);d(Ke,Ke,1/t),e=t/h(E,O)}o(e,Ke)}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return null;const r=e.indices,n=i.get("position");return re(n,r?r.get("position"):null,r&&Ge(this.params,i,r),t)}createLayout(){const e=pe().vec3f("position").f32("subdivisionFactor").vec2f("uv0").vec3f("auxpos1").vec3f("auxpos2");return this.params.vvSizeEnabled?e.f32("sizeFeatureAttribute"):e.f32("size"),this.params.vvColorEnabled?e.f32("colorFeatureAttribute"):e.vec4f("color"),this.params.vvOpacityEnabled&&e.f32("opacityFeatureAttribute"),e}createBufferWriter(){return new Me(this.layout,this.params)}getGLMaterial(e){return 0===e.output||7===e.output||4===e.output||1===e.output?new Ie(e):void 0}validateParameterValues(e){"miter"!==e.join&&(e.miterLimit=0),this.requiresTransparent(e)&&(e.transparent=!0)}requiresTransparent(e){return!!((e.color&&e.color[3])<1||e.innerWidth>0&&this.colorRequiresTransparent(e.innerColor)||e.stipplePattern&&this.colorRequiresTransparent(e.stippleOffColor)||e.falloff>0)}colorRequiresTransparent(e){return i(e)&&e[3]<1&&e[3]>0}}class Ie extends ne{constructor(e){super(e),this.updateParameters()}updateParameters(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(Ue,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){return this.technique.configuration.occluder?3===e||10===e||11===e:0===this.output||7===this.output?(this.targetSlot=this.technique.configuration.writeDepth?5:8,e===this.targetSlot):3===e}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)}getPipelineState(e,t){return this.technique.getPipelineState(e,t)}}const _e={width:0,color:[1,1,1,1],join:"miter",cap:"butt",miterLimit:5,writeDepth:!0,polygonOffset:!1,stipplePattern:null,stippleIntegerRepeats:!1,stippleOffColor:null,slicePlaneEnabled:!1,vvFastUpdate:!1,transparent:!1,isClosed:!1,falloff:0,innerWidth:0,innerColor:null,sceneHasOcludees:!1,...te,...Re.Default};class Me{constructor(e,t){switch(this.params=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e,this.params.join){case"miter":case"bevel":this.numJoinSubdivisions=t.stipplePattern?1:0;break;case"round":this.numJoinSubdivisions=$e}}isClosed(e){return Ge(this.params,e.vertexAttributes,e.indices)}numCapSubdivisions(e){if(this.isClosed(e))return 0;switch(this.params.cap){case"butt":return 0;case"square":return 1;case"round":return He}}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=2*this.numCapSubdivisions(e)+2,i=e.indices.get("position").length/2+1,r=this.isClosed(e);let n=r?2:2*t;const o=r?0:1,a=r?i:i-1;if(e.vertexAttributes.has("subdivisions")){const t=e.vertexAttributes.get("subdivisions").data;for(let e=o;e<a;++e){n+=4+2*t[e]}}else{n+=(a-o)*(2*this.numJoinSubdivisions+4)}return n+=2,n}write(e,t,i,r){const n=ot,o=at,a=st,s=t.vertexAttributes.get("position").data,p=t.indices&&t.indices.get("position"),c=this.numCapSubdivisions(t);p&&p.length!==2*(s.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let d=null;t.vertexAttributes.has("subdivisions")&&(d=t.vertexAttributes.get("subdivisions").data);let u=1,v=0;this.params.vvSizeEnabled?v=t.vertexAttributes.get("sizeFeatureAttribute").data[0]:t.vertexAttributes.has("size")&&(u=t.vertexAttributes.get("size").data[0]);let h=[1,1,1,1],g=0;this.params.vvColorEnabled?g=t.vertexAttributes.get("colorFeatureAttribute").data[0]:t.vertexAttributes.has("color")&&(h=t.vertexAttributes.get("color").data);let b=0;this.params.vvOpacityEnabled&&(b=t.vertexAttributes.get("opacityFeatureAttribute").data[0]);const x=s.length/3,y=e.transformation,C=new Float32Array(i.buffer),D=this.vertexBufferLayout.stride/4;let S=r*D;const E=S,O=(e,t,i,r,n,o,a)=>{if(C[S++]=t[0],C[S++]=t[1],C[S++]=t[2],C[S++]=r,C[S++]=n,C[S++]=o,C[S++]=e[0],C[S++]=e[1],C[S++]=e[2],C[S++]=i[0],C[S++]=i[1],C[S++]=i[2],this.params.vvSizeEnabled?C[S++]=v:C[S++]=u,this.params.vvColorEnabled)C[S++]=g;else{const e=Math.min(4*a,h.length-4);C[S++]=h[e+0],C[S++]=h[e+1],C[S++]=h[e+2],C[S++]=h[e+3]}this.params.vvOpacityEnabled&&(C[S++]=b)};S+=D,l(o,s[0],s[1],s[2]),y&&m(o,o,y);const P=this.isClosed(t);if(P){const e=s.length-3;l(n,s[e],s[e+1],s[e+2]),y&&m(n,n,y)}else{f(n,o),l(a,s[3],s[4],s[5]),y&&m(a,a,y);for(let e=0;e<c;++e){const t=1-e/c;O(n,o,a,t,1,-4,0),O(n,o,a,t,1,4,0)}O(n,o,a,0,0,-4,0),O(n,o,a,0,0,4,0),f(n,o),f(o,a)}const A=P?x:x-1;for(let e=P?0:1;e<A;e++){const t=(e+1)%x*3;l(a,s[t+0],s[t+1],s[t+2]),y&&m(a,a,y),O(n,o,a,0,1,-1,e),O(n,o,a,0,1,1,e);const i=d?d[e]:this.numJoinSubdivisions;for(let t=0;t<i;++t){const r=(t+1)/(i+1);O(n,o,a,r,1,-2,e),O(n,o,a,r,1,2,e)}O(n,o,a,1,0,-2,e),O(n,o,a,1,0,2,e),f(n,o),f(o,a)}if(P){S=Be(C,E+D,C,S,2*D)}else{O(n,o,a,0,1,-5,A),O(n,o,a,0,1,5,A);for(let e=0;e<c;++e){const t=(e+1)/c;O(n,o,a,t,1,-5,A),O(n,o,a,t,1,5,A)}}Be(C,E+D,C,E,D);S=Be(C,S-D,C,S,D)}}function Be(e,t,i,r,n){for(let o=0;o<n;o++)i[r++]=e[t++];return r}function Ge(e,t,i){return Je(e,t.get("position").data,i?i.get("position"):null)}function Je(e,t,i){return!!e.isClosed&&(i?i.length>2:t.length>6)}const He=3,$e=1,ke=s(),Xe=s(),Ze=s(),Ke=s(),Qe=s(),Ye=g(),et=g(),tt=s(),it=s(),rt=de.create(),nt=de.create(),ot=s(),at=s(),st=s(),lt=[g(),g(),g(),g()],pt=[s(),s(),s(),s()],ct=ue.create(),dt=ue.create(),ut=ue.create(),ft=ue.create();export{Le as L,We as R,Ee as S,Re as V,ye as a,be as b,De as c,Se as d,xe as e,Ce as n};
