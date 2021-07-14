// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces"],function(b,e){b.bindMultipassTerrainUniforms=function(a,c,d){d.multipassTerrainEnabled&&d.terrainLinearDepthTexture&&(a.setUniform1i("terrainDepthTexture",10),c.bindTexture(d.terrainLinearDepthTexture,10))};b.multipassTerrainTest=function(a,c){a.fragment.uniforms.add("terrainDepthTexture","sampler2D");a.fragment.uniforms.add("cameraNearFar","vec2");a.fragment.uniforms.add("inverseViewport","vec2");a.fragment.code.add(e.glsl`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${c.cullAboveGround?"\x3e":"\x3c\x3d"} terrainDepth){
        discard;
      }
    }
  `)};Object.defineProperty(b,"__esModule",{value:!0})});