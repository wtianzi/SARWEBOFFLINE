// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../webgl/Program ../../../../webgl/BufferObject ../../../../webgl/Texture ../../../../webgl/VertexArrayObject ../../../../webgl/Renderbuffer ../../../../webgl/FramebufferObject ../../../../webgl/programUtils ../../../../webgl/ProgramCache ../../../../webgl/RenderingContext ../../../../webgl/ShaderCompiler ./sources/resolver".split(" "),function(d,e,f,g,h,k,l,b,m,n,p,c){d.background={shaders:a=>({vertexShader:b.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+c.resolveIncludes("background/background.vert"),
fragmentShader:b.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+c.resolveIncludes("background/background.frag")})};d.circle={shaders:a=>({vertexShader:b.glslifyDefineMap({ID:a.id})+c.resolveIncludes("circle/circle.vert"),fragmentShader:b.glslifyDefineMap({ID:a.id})+c.resolveIncludes("circle/circle.frag")})};d.fill={shaders:a=>({vertexShader:b.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+c.resolveIncludes("fill/fill.vert"),fragmentShader:b.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+c.resolveIncludes("fill/fill.frag")})};
d.icon={shaders:a=>({vertexShader:b.glslifyDefineMap({ID:a.id,SDF:a.sdf})+c.resolveIncludes("icon/icon.vert"),fragmentShader:b.glslifyDefineMap({ID:a.id,SDF:a.sdf})+c.resolveIncludes("icon/icon.frag")})};d.line={shaders:a=>({vertexShader:b.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+c.resolveIncludes("line/line.vert"),fragmentShader:b.glslifyDefineMap({ID:a.id,PATTERN:a.pattern})+c.resolveIncludes("line/line.frag")})};d.outline={shaders:a=>({vertexShader:b.glslifyDefineMap({ID:a.id})+c.resolveIncludes("outline/outline.vert"),
fragmentShader:b.glslifyDefineMap({ID:a.id})+c.resolveIncludes("outline/outline.frag")})};d.text={shaders:a=>({vertexShader:b.glslifyDefineMap({ID:a.id})+c.resolveIncludes("text/text.vert"),fragmentShader:b.glslifyDefineMap({ID:a.id})+c.resolveIncludes("text/text.frag")})};Object.defineProperty(d,"__esModule",{value:!0})});