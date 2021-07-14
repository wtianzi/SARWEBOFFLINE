// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../output/ReadLinearDepth.glsl"],function(b,d,e){b.bindMultipassGeometryUniforms=function(a,f,c){c.multipassGeometryEnabled&&c.geometryLinearDepthTexture&&(a.setUniform1i("geometryDepthTexture",11),f.bindTexture(c.geometryLinearDepthTexture,11))};b.multipassGeometryTest=function(a){a.include(e.ReadLinearDepth);a.uniforms.add("geometryDepthTexture","sampler2D");a.uniforms.add("cameraNearFar","vec2");a.code.add(d.glsl`
    //Compare the linearized depths of the vertex/fragment and the geometry in the scene. If vertex/fragment is behind geometry, don't draw it.
    bool geometryDepthTest(vec2 pos, float elementDepth){

      float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
      if(elementDepth < (geometryDepth - 1.0)){
        return true;
      }
      return false;
    }
  `)};Object.defineProperty(b,"__esModule",{value:!0})});