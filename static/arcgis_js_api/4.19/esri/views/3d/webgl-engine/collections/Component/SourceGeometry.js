// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../support/buffer/InterleavedLayout"],function(c,d){c.createVertexBufferLayout=function(b){const a=d.newLayout().vec3f("position");b.normals&&a.vec2i16("normalCompressed",{glNormalized:!0});1===b.textureCoordinates?a.vec2f("uv0"):2===b.textureCoordinates&&(a.vec2f("uv0"),a.vec4u16("uvRegion",{glNormalized:!0}));b.colors&&a.vec4u8("color",{glNormalized:!0});return a.alignTo(4)};Object.defineProperty(c,"__esModule",{value:!0})});