// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../shading/MultipassGeometryTest.glsl"],function(b,d,e){(function(a){a.bindUniforms=function(c){c.setUniform4f("color",1,1,1,1)}})(b.HUDOcclusion||(b.HUDOcclusion={}));b.HUDOcclusionPass=function(a,c){c.multipassGeometryEnabled&&a.vertex.include(e.multipassGeometryTest);a.vertex.code.add(d.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${c.multipassGeometryEnabled?d.glsl`
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
  `);a.fragment.uniforms.add("color","vec4");a.fragment.code.add(d.glsl`
  void main() {
    gl_FragColor = color;
  }
  `)};Object.defineProperty(b,"__esModule",{value:!0})});