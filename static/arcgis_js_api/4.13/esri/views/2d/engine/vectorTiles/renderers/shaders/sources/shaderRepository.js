// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(a,b){return{background:{"background.frag":"#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\n  mediump vec2 normalizedTextureCoord \x3d mod(v_tileTextureCoord, 1.0);\n  mediump vec2 samplePos \x3d mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  lowp vec4 color \x3d texture2D(u_texture, samplePos);\n  gl_FragColor \x3d u_opacity * color;\n#else\n  gl_FragColor \x3d u_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a \x3c 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor \x3d v_id;\n#endif\n}",
"background.vert":"precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat4 u_transformMatrix;\nuniform mediump vec2 u_normalized_origin;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\nvoid main() {\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(u_coord_range * a_pos, 0.0, 1.0);\n#ifdef PATTERN\n  v_tileTextureCoord \x3d (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif\n#ifdef ID\n  v_id \x3d u_id / 255.0;\n#endif\n}"},
circle:{"circle.frag":"precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  mediump float dist \x3d length(v_offset);\n  mediump float alpha \x3d smoothstep(0.0, -v_blur, dist - 1.0);\n  lowp float color_mix_ratio \x3d v_stroke_width \x3c 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\n  gl_FragColor \x3d alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\n  if (gl_FragColor.a \x3c 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor \x3d v_id;\n#endif\n}",
"circle.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec4 a_color;\nattribute vec4 a_stroke_color;\nattribute vec4 a_data;\nconst float sizePrecision \x3d 0.25;\nconst float blurPrecision \x3d 0.03125;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat4 u_transformMatrix;\nuniform highp mat4 u_extrudeMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_depth;\nuniform mediump float u_radius;\nuniform lowp vec4 u_color;\nuniform mediump float u_blur;\nuniform mediump float u_stroke_width;\nuniform lowp vec4 u_stroke_color;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n  v_color \x3d a_color * u_color;\n  v_stroke_color \x3d a_stroke_color * u_stroke_color;\n  v_stroke_width \x3d a_data[1] * sizePrecision * u_stroke_width;\n  v_radius \x3d a_data[2] * u_radius;\n  v_blur \x3d max(a_data[0] * blurPrecision + u_blur, u_antialiasingWidth / (v_radius + v_stroke_width));\n  mediump vec2 offset \x3d vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n  v_offset \x3d offset;\n#ifdef ID\n  v_id \x3d u_id / 255.0;\n#endif\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos * 0.5, 0.0, 1.0) + u_extrudeMatrix * (v_radius + v_stroke_width) * vec4(offset, 0.0, 0.0);\n}"},
fill:{"fill.frag":"precision lowp float;\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\n  float compositeAlpha \x3d color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor \x3d color2.rgb + color1.rgb * (1.0 - color2.a);\n  return vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\n  mediump vec2 normalizedTextureCoord \x3d fract(v_tileTextureCoord);\n  mediump vec2 samplePos \x3d mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  lowp vec4 color \x3d texture2D(u_texture, samplePos);\n  gl_FragColor \x3d v_color[3] * color;\n#else\n  gl_FragColor \x3d v_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a \x3c 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor \x3d v_id;\n#endif\n}",
"fill.vert":"precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat4 u_transformMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\n#ifdef DD\nattribute vec4 a_color;\n#endif\nuniform lowp vec4 u_color;\nvarying lowp vec4 v_color;\nvoid main()\n{\n#ifdef DD\n  v_color \x3d a_color * u_color;\n#else\n  v_color \x3d u_color;\n#endif\n#ifdef ID\n  v_id \x3d u_id / 255.0;\n#endif\n#ifdef PATTERN\n  v_tileTextureCoord \x3d (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0, 1.0);\n}"},
icon:{"icon.frag":"precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\nuniform mediump float u_outlineSize;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_transparency;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include \x3cutil/encoding.glsl\x3e\nvec4 mixColors(vec4 color1, vec4 color2) {\n  float compositeAlpha \x3d color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor \x3d color2.rgb + color1.rgb * (1.0 - color2.a);\n  return vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\n  lowp vec4 fillPixelColor \x3d v_color;\n  float d \x3d rgba2float(texture2D(u_texture, v_tex)) - 0.5;\n  const float sofetEdgeRatio \x3d 0.248062016;\n  float size \x3d max(v_size.x, v_size.y);\n  float dist \x3d d * sofetEdgeRatio * size;\n  fillPixelColor *\x3d clamp(0.5 - dist, 0.0, 1.0);\n  if (u_outlineSize \x3e 0.25) {\n    lowp vec4 outlinePixelColor \x3d u_outlineColor;\n    const float outlineLimitRatio \x3d (16.0 / 86.0);\n    float clampedOutlineSize \x3d sofetEdgeRatio * min(u_outlineSize, outlineLimitRatio * max(v_size.x, v_size.y));\n    outlinePixelColor *\x3d clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\n    gl_FragColor \x3d v_transparency * mixColors(fillPixelColor, outlinePixelColor);\n  }\n  else {\n    gl_FragColor \x3d v_transparency * fillPixelColor;\n  }\n#else\n  lowp vec4 texColor \x3d texture2D(u_texture, v_tex);\n  gl_FragColor \x3d v_transparency * texColor;\n#endif\n#ifdef ID\n  if (gl_FragColor.a \x3c 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor \x3d v_id;\n#endif\n}",
"icon.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_tex;\nattribute vec4 a_levelInfo;\n#ifdef DD\nattribute vec4 a_color;\nattribute mediump float a_size;\n#endif\nuniform lowp vec4 u_color;\nuniform mediump float u_size;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nuniform highp mat4 u_transformMatrix;\nuniform highp mat4 u_extrudeMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeSpeed;\nuniform mediump float u_minfadeLevel;\nuniform mediump float u_maxfadeLevel;\nuniform mediump float u_fadeChange;\nuniform mediump float u_opacity;\nvarying mediump vec2 v_tex;\nvarying lowp float v_transparency;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION \x3d 1.0 / 8.0;\nconst float C_256_TO_RAD \x3d 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD \x3d 3.14159265359 / 180.0;\nconst float tileCoordRatio \x3d 1.0 / 8.0;\nvoid main()\n{\n  mediump float a_labelMinLevel \x3d a_levelInfo[0];\n  mediump float a_angle         \x3d a_levelInfo[1];\n  mediump float a_minLevel      \x3d a_levelInfo[2];\n  mediump float a_maxLevel      \x3d a_levelInfo[3];\n  mediump float delta_z \x3d 0.0;\n  mediump float rotated \x3d mod(a_angle + u_mapRotation, 256.0);\n  delta_z +\x3d (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\n  delta_z +\x3d 1.0 - step(a_minLevel, u_level);\n  delta_z +\x3d step(a_maxLevel, u_level);\n  mediump float alpha \x3d u_fadeSpeed !\x3d 0.0 ? clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0) : 1.0;\n  v_transparency \x3d (u_fadeSpeed \x3e\x3d 0.0 ? alpha : 1.0 - alpha);\n  if (u_maxfadeLevel \x3c a_labelMinLevel)\n  {\n    v_transparency \x3d 0.0;\n  }\n  if (u_minfadeLevel \x3e\x3d a_labelMinLevel)\n  {\n    v_transparency \x3d 1.0;\n  }\n  delta_z +\x3d step(v_transparency, 0.0);\n  vec2 offset \x3d C_OFFSET_PRECISION * a_vertexOffset;\n  v_size \x3d abs(offset);\n#ifdef SDF\n  offset \x3d (120.0 / 86.0) * offset;\n#endif\n#ifdef DD\n  mediump float icon_size \x3d a_size * u_size;\n#else\n  mediump float icon_size \x3d u_size;\n#endif\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * icon_size * vec4(offset, delta_z, 0.0);\n#ifdef DD\n  v_color \x3d a_color * u_color;\n#else\n  v_color \x3d u_color;\n#endif\n#ifdef ID\n  v_id \x3d u_id / 255.0;\n#endif\n  v_tex \x3d a_tex.xy / u_mosaicSize;\n  v_transparency *\x3d v_color.w;\n}"},
line:{"line.frag":"varying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform mediump vec2 u_spriteSize;\nuniform sampler2D u_texture;\nconst mediump float tileCoordRatio \x3d 8.0;\n#else\nvarying mediump vec2 v_dasharray;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  mediump float fragDist \x3d length(v_normal) * v_lineHalfWidth;\n  lowp float alpha \x3d clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\n  mediump float relativeTexX \x3d mod((v_accumulatedDistance + v_normal.x * v_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);\n  mediump float relativeTexY \x3d 0.5 + (v_normal.y * v_lineHalfWidth / u_spriteSize.y);\n  mediump vec2 texCoord \x3d mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));\n  lowp vec4 color \x3d texture2D(u_texture, texCoord);\n  gl_FragColor \x3d alpha * v_color[3] * color;\n#else\n  lowp float dashPos \x3d  mod(v_accumulatedDistance, v_dasharray.x + v_dasharray.y);\n  lowp float dashAlpha \x3d clamp(min(dashPos, v_dasharray.x - dashPos) + 0.5, 0.0, 1.0);\n  dashAlpha \x3d max(sign(-v_dasharray.y), dashAlpha);\n  alpha *\x3d dashAlpha;\n  gl_FragColor \x3d alpha * v_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a \x3c 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor \x3d v_id;\n#endif\n}",
"line.vert":"attribute vec2 a_pos;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistance;\nuniform highp mat4 u_transformMatrix;\nuniform highp mat4 u_extrudeMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_blur;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale \x3d 1.0 / 31.0;\n#ifdef DD\nattribute vec4 a_color;\nattribute mediump float a_width;\n#endif\nuniform lowp vec4 u_color;\nuniform mediump float u_width;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\n#ifndef PATTERN\nuniform mediump vec2 u_dasharray;\nvarying mediump vec2 v_dasharray;\n#endif\nvoid main()\n{\n  v_normal \x3d a_offsetAndNormal.zw * scale;\n#ifdef DD\n  v_lineHalfWidth \x3d a_width * u_width;\n#else\n  v_lineHalfWidth \x3d u_width;\n#endif\n  v_lineHalfWidth +\x3d u_antialiasing;\n  v_lineHalfWidth *\x3d 0.5;\n#ifndef PATTERN\n#ifdef DD\n  v_dasharray \x3d u_dasharray * a_width;\n#else\n  v_dasharray \x3d u_dasharray * u_width;\n#endif\n#endif\n  mediump vec2 dist \x3d v_lineHalfWidth * a_offsetAndNormal.xy * scale;\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(dist, 0.0, 0.0);\n  v_accumulatedDistance \x3d a_accumulatedDistance.x;\n  v_blur \x3d u_blur + u_antialiasing;\n  #ifdef DD\n    v_color \x3d a_color * u_color;\n  #else\n    v_color \x3d u_color;\n  #endif\n  #ifdef ID\n    v_id \x3d u_id / 255.0;\n  #endif\n}"},
outline:{"outline.frag":"varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  lowp float dist \x3d abs(v_normal.y);\n  lowp float alpha \x3d smoothstep(1.0, 0.0, dist);\n  gl_FragColor \x3d alpha * v_color;\n#ifdef ID\n  if (gl_FragColor.a \x3c 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor \x3d v_id;\n#endif\n}","outline.vert":"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#ifdef DD\nattribute vec4 a_color;\n#endif\nuniform lowp vec4 u_color;\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat4 u_transformMatrix;\nuniform highp mat4 u_extrudeMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale \x3d 1.0 / 15.0;\nvoid main()\n{\n#ifdef DD\n  v_color \x3d a_color * u_color;\n#else\n  v_color \x3d u_color;\n#endif\n#ifdef ID\n  v_id \x3d u_id / 255.0;\n#endif\n  v_normal \x3d a_xnormal;\n  mediump vec4 dist \x3d vec4(u_outline_width * a_offset * scale, 0.0, 0.0);\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * dist;\n}"},
text:{"text.frag":"uniform lowp sampler2D u_texture;\nuniform mediump float u_edgeDistance;\nvarying lowp vec2 v_tex;\nvarying lowp float v_transparency;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  lowp float dist \x3d texture2D(u_texture, v_tex).a;\n  mediump float alpha \x3d smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist) * v_transparency;\n  gl_FragColor \x3d alpha * v_color;\n#ifdef ID\n  if (gl_FragColor.a \x3c 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor \x3d v_id;\n#endif\n}",
"text.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_tex;\nattribute vec4 a_levelInfo;\nuniform lowp vec4 u_color;\n#ifdef DD\nattribute vec4 a_color;\n#endif\nvarying lowp vec4 v_color;\nuniform mediump float u_size;\n#ifdef DD\nattribute mediump float a_size;\n#endif\nvarying mediump float v_size;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat4 u_transformMatrix;\nuniform highp mat4 u_extrudeMatrix;\nuniform highp vec2 u_normalized_origin;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeSpeed;\nuniform mediump float u_minfadeLevel;\nuniform mediump float u_maxfadeLevel;\nuniform mediump float u_fadeChange;\nuniform mediump float u_opacity;\nvarying lowp vec2 v_tex;\nvarying lowp float v_transparency;\nconst float offsetPrecision \x3d 1.0 / 8.0;\nconst mediump float edgePos \x3d 0.75;\nuniform mediump float u_edgeDistance;\nuniform mediump float u_edgeBlur;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nvoid main()\n{\n  mediump float a_labelMinLevel \x3d a_levelInfo[0];\n  mediump float a_angle        \x3d a_levelInfo[1];\n  mediump float a_minLevel    \x3d a_levelInfo[2];\n  mediump float a_maxLevel    \x3d a_levelInfo[3];\n  mediump float delta_z \x3d 0.0;\n  mediump float rotated \x3d mod(a_angle + u_mapRotation, 256.0);\n  delta_z +\x3d (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\n  delta_z +\x3d 1.0 - step(a_minLevel, u_level);\n  delta_z +\x3d step(a_maxLevel, u_level);\n  mediump float alpha \x3d u_fadeSpeed !\x3d 0.0 ? clamp((u_fadeChange - a_labelMinLevel) / u_fadeSpeed, 0.0, 1.0) : 1.0;\n  v_transparency \x3d (u_fadeSpeed \x3e\x3d 0.0 ? alpha : 1.0 - alpha);\n  if (u_maxfadeLevel \x3c a_labelMinLevel)\n  {\n    v_transparency \x3d 0.0;\n  }\n  if (u_minfadeLevel \x3e\x3d a_labelMinLevel)\n  {\n    v_transparency \x3d 1.0;\n  }\n  delta_z +\x3d step(v_transparency, 0.0);\n  v_tex \x3d a_tex.xy / u_mosaicSize;\n#ifdef DD\n  if (u_halo \x3e 0.5)\n  {\n    v_color \x3d u_color;\n  }\n  else\n  {\n    v_color \x3d a_color * u_color;\n  }\n#else\n  v_color \x3d u_color;\n#endif\n#ifdef DD\n  v_size \x3d a_size * u_size;\n#else\n  v_size \x3d u_size;\n#endif\n#ifdef ID\n  v_id \x3d u_id / 255.0;\n#endif\n  v_edgeDistance \x3d edgePos - u_edgeDistance / v_size;\n  v_edgeWidth \x3d (u_antialiasingWidth + u_edgeBlur) / v_size;\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * v_size * vec4(offsetPrecision * a_vertexOffset, delta_z, 0.0);\n}"},
tileInfo:{"tileInfo.frag":"uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\nvoid main(void) {\n  lowp vec4 color \x3d texture2D(u_texture, v_tex);\n  gl_FragColor \x3d 0.75 * color;\n}","tileInfo.vert":"attribute vec2 a_pos;\nuniform highp mat4 u_transformMatrix;\nuniform mediump vec2 u_normalized_origin;\nuniform mediump float u_depth;\nuniform mediump float u_coord_ratio;\nuniform mediump vec2 u_delta;\nuniform mediump vec2 u_dimensions;\nvarying mediump vec2 v_tex;\nvoid main() {\n  mediump vec2 offests \x3d u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\n  gl_Position \x3d vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(offests, 0.0, 1.0);\n  v_tex \x3d a_pos;\n}"},
util:{"encoding.glsl":"const vec4 rgba2float_factors \x3d vec4(\n    255.0 / (256.0),\n    255.0 / (256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n  );\nfloat rgba2float(vec4 rgba) {\n  return dot(rgba, rgba2float_factors);\n}"}}});