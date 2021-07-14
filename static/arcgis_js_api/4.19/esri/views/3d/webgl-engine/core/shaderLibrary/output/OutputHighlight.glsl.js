// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/vec4f64","../../shaderModules/interfaces"],function(b,e,k){function c(a){a.fragment.uniforms.add("depthTex","sampler2D");a.fragment.uniforms.add("highlightViewportPixelSz","vec4");a.fragment.constants.add("occludedHighlightFlag","vec4",f).add("unoccludedHighlightFlag","vec4",g);a.fragment.code.add(k.glsl`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}const f=e.fromValues(1,1,0,1),g=e.fromValues(1,0,1,1);(function(a){a.bindOutputHighlight=function(l,h,d){l.bindTexture(d.highlightDepthTexture,5);h.setUniform1i("depthTex",5);h.setUniform4f("highlightViewportPixelSz",0,0,d.inverseViewport[0],d.inverseViewport[1])}})(c||(c={}));b.OutputHighlight=c;b.occludedHighlightFlag=f;b.unoccludedHighlightFlag=g;Object.defineProperty(b,"__esModule",{value:!0})});