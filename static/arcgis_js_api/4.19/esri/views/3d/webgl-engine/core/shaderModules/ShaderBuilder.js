// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Logger"],function(h,l,k){const r=k.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");k=function(){function b(){this.includedModules=new Map}b.prototype.include=function(d,a){this.includedModules.has(d)?this.includedModules.get(d)!==a&&r.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(d,a),d(this.builder,a))};return b}();let x=
function(b){function d(){var a=b.apply(this,arguments)||this;a.vertex=new m;a.fragment=new m;a.attributes=new t;a.varyings=new u;a.extensions=new n;a.constants=new p;return a}l._inheritsLoose(d,b);d.prototype.generateSource=function(a){const e=this.extensions.generateSource(a),c=this.attributes.generateSource(a),f=this.varyings.generateSource();var g="vertex"===a?this.vertex:this.fragment;const v=g.uniforms.generateSource(),w=g.code.generateSource();a="vertex"===a?"precision highp float;\nprecision highp sampler2D;":
"#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif";g=this.constants.generateSource().concat(g.constants.generateSource());return`
${e.join("\n")}

${a}

${g.join("\n")}

${v.join("\n")}

${c.join("\n")}

${f.join("\n")}

${w.join("\n")}`};l._createClass(d,[{key:"builder",get:function(){return this}}]);return d}(k),y=function(){function b(){this._entries=[];this._set=new Set}var d=b.prototype;d.add=function(a,e,c){const f=`${a}_${e}_${c}`;this._set.has(f)||(this._entries.push([a,e,c]),this._set.add(f));return this};d.generateSource=function(){return this._entries.map(a=>{var e=a[2];return`uniform ${a[1]} ${a[0]}${e?`[${e}]`:""};`})};return b}(),q=function(){function b(){this._entries=[]}var d=b.prototype;d.add=function(a){this._entries.push(a)};
d.generateSource=function(){return this._entries};return b}(),m=function(b){function d(){var a=b.apply(this,arguments)||this;a.uniforms=new y;a.code=new q;a.constants=new p;return a}l._inheritsLoose(d,b);l._createClass(d,[{key:"builder",get:function(){return this}}]);return d}(k),t=function(){function b(){this._entries=[]}var d=b.prototype;d.add=function(a,e){this._entries.push([a,e])};d.generateSource=function(a){return"fragment"===a?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)};return b}(),
u=function(){function b(){this._entries=[]}var d=b.prototype;d.add=function(a,e){this._entries.push([a,e])};d.generateSource=function(){return this._entries.map(a=>`varying ${a[1]} ${a[0]};`)};return b}(),n=function(){function b(){this._entries=new Set}var d=b.prototype;d.add=function(a){this._entries.add(a)};d.generateSource=function(a){const e="vertex"===a?b.ALLOWLIST_VERTEX:b.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(c=>e.includes(c)).map(c=>`#extension ${c} : enable`)};return b}();
n.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"];n.ALLOWLIST_VERTEX=[];let p=function(){function b(){this._entries=[]}var d=b.prototype;d.add=function(a,e,c){let f="ERROR_CONSTRUCTOR_STRING";switch(e){case "float":f=b.numberToFloatStr(c);break;case "int":f=b.numberToIntStr(c);break;case "bool":f=c.toString();break;case "vec2":f=`vec2(${b.numberToFloatStr(c[0])},\
                            ${b.numberToFloatStr(c[1])})`;break;case "vec3":f=`vec3(${b.numberToFloatStr(c[0])},\
                            ${b.numberToFloatStr(c[1])},\
                            ${b.numberToFloatStr(c[2])})`;break;case "vec4":f=`vec4(${b.numberToFloatStr(c[0])},\
                            ${b.numberToFloatStr(c[1])},\
                            ${b.numberToFloatStr(c[2])},\
                            ${b.numberToFloatStr(c[3])})`;break;case "ivec2":f=`ivec2(${b.numberToIntStr(c[0])},\
                             ${b.numberToIntStr(c[1])})`;break;case "ivec3":f=`ivec3(${b.numberToIntStr(c[0])},\
                             ${b.numberToIntStr(c[1])},\
                             ${b.numberToIntStr(c[2])})`;break;case "ivec4":f=`ivec4(${b.numberToIntStr(c[0])},\
                             ${b.numberToIntStr(c[1])},\
                             ${b.numberToIntStr(c[2])},\
                             ${b.numberToIntStr(c[3])})`;break;case "bvec2":f=`bvec2(${c[0].toString()},\
                             ${c[1].toString()})`;break;case "bvec3":f=`bvec3(${c[0].toString()},\
                             ${c[1].toString()},\
                             ${c[2].toString()})`;break;case "bvec4":f=`bvec4(${c[0].toString()},\
                             ${c[1].toString()},\
                             ${c[2].toString()},\
                             ${c[3].toString()})`;break;case "mat2":case "mat3":case "mat4":f=`${e}(${Array.prototype.map.call(c,g=>b.numberToFloatStr(g)).join(", ")})`}this._entries.push(`const ${e} ${a} = ${f};`);return this};b.numberToIntStr=function(a){return a.toFixed(0)};b.numberToFloatStr=function(a){return Number.isInteger(a)?a.toFixed(1):a.toString()};d.generateSource=function(){return Array.from(this._entries)};return b}();h.Code=q;h.Includes=k;h.ShaderBuilder=x;h.Stage=m;Object.defineProperty(h,
"__esModule",{value:!0})});