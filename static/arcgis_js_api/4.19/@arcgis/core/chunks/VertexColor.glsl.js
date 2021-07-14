/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{L as e,b as t,i as r}from"./Logger.js";import{l as i,h as a,d as s,c as n,m as o}from"./mathUtils2.js";import{c,Z as l}from"./vec3f64.js";import{a as d,b as f,e as u,p as h,c as m,n as p,s as g}from"./vec3.js";import{t as v}from"./mat4.js";import{f as b}from"./vec4f64.js";import{f as _,h as x,d as S,a as P}from"./BufferView.js";import{c as F,s as y,g as T}from"./aaBoundingBox.js";import{s as O,c as D,a as A}from"./renderState.js";import{c as w}from"./mat4f32.js";import{K as C}from"./geometryUtils.js";import{a as M}from"./Util.js";import{i as z,C as L}from"./Object3D.js";function I(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}function B(e,t){t.linearDepth?e.vertex.code.add(I`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(I`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(I||(I={}));const $=e.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class k{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&$.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class H extends k{constructor(){super(...arguments),this.vertex=new G,this.fragment=new G,this.attributes=new R,this.varyings=new j,this.extensions=new E,this.constants=new N}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),a="vertex"===e?this.vertex:this.fragment,s=a.uniforms.generateSource(),n=a.code.generateSource(),o="vertex"===e?q:W,c=this.constants.generateSource().concat(a.constants.generateSource());return`\n${t.join("\n")}\n\n${o}\n\n${c.join("\n")}\n\n${s.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}}class U{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const i=`${e}_${t}_${r}`;return this._set.has(i)||(this._entries.push([e,t,r]),this._set.add(i)),this}generateSource(){return this._entries.map((e=>{return`uniform ${e[1]} ${e[0]}${t=e[2],t?`[${t}]`:""};`;var t}))}}class V{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class G extends k{constructor(){super(...arguments),this.uniforms=new U,this.code=new V,this.constants=new N}get builder(){return this}}class R{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class j{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class E{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?E.ALLOWLIST_VERTEX:E.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}E.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],E.ALLOWLIST_VERTEX=[];class N{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=N.numberToFloatStr(r);break;case"int":i=N.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${N.numberToFloatStr(r[0])},                            ${N.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${N.numberToFloatStr(r[0])},                            ${N.numberToFloatStr(r[1])},                            ${N.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${N.numberToFloatStr(r[0])},                            ${N.numberToFloatStr(r[1])},                            ${N.numberToFloatStr(r[2])},                            ${N.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${N.numberToIntStr(r[0])},                             ${N.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${N.numberToIntStr(r[0])},                             ${N.numberToIntStr(r[1])},                             ${N.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${N.numberToIntStr(r[0])},                             ${N.numberToIntStr(r[1])},                             ${N.numberToIntStr(r[2])},                             ${N.numberToIntStr(r[3])})`;break;case"bvec2":i=`bvec2(${r[0].toString()},                             ${r[1].toString()})`;break;case"bvec3":i=`bvec3(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()})`;break;case"bvec4":i=`bvec4(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()},                             ${r[3].toString()})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>N.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const W="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",q="precision highp float;\nprecision highp sampler2D;";class Y{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class K{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}class X{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function Z(e={}){return(t,r)=>{var a,s;t._parameterNames=null!=(a=t._parameterNames)?a:[],t._parameterNames.push(r);const n=t._parameterNames.length-1,o=e.count||2,c=Math.ceil(i(o)),l=null!=(s=t._parameterBits)?s:[0];let d=0;for(;l[d]+c>16;)d++,d>=l.length&&l.push(0);t._parameterBits=l;const f=l[d],u=(1<<c)-1<<f;l[d]+=c,Object.defineProperty(t,r,{get(){return this[n]},set(e){if(this[n]!==e&&(this[n]=e,this._keyDirty=!0,this._parameterBits[d]=this._parameterBits[d]&~u|+e<<f&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}const J={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};var Q;!function(e){function t(e,t,r){v(ee,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",ee)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(Q||(Q={}));const ee=w();let te=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const re=new Uint16Array([0]),ie=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function ae(e){if(1===e)return re;if(e<ie.length)return new Uint16Array(ie.buffer,0,e);if(e>te.length){const t=Math.max(2*te.length,e);te=new Uint32Array(t);for(let e=0;e<te.length;e++)te[e]=e}return new Uint32Array(te.buffer,0,e)}function se(e,t,r){if(!e)return!1;const{size:i,data:a}=e;d(r,0,0,0),d(fe,0,0,0);let s=0,n=0;for(let e=0;e<t.length-2;e+=3){const o=t[e+0]*i,c=t[e+1]*i,l=t[e+2]*i;d(ce,a[o+0],a[o+1],a[o+2]),d(le,a[c+0],a[c+1],a[c+2]),d(de,a[l+0],a[l+1],a[l+2]);const h=C(ce,le,de);h?(u(ce,ce,le),u(ce,ce,de),f(ce,ce,1/3*h),u(r,r,ce),s+=h):(u(fe,fe,ce),u(fe,fe,le),u(fe,fe,de),n+=3)}return(0!==n||0!==s)&&(0!==s?(f(r,r,1/s),!0):0!==n&&(f(r,fe,1/n),!0))}function ne(e,t,r){if(!e||!t)return!1;const{size:i,data:a}=e;d(r,0,0,0);let s=-1,n=0;for(let e=0;e<t.length;e++){const o=t[e]*i;s!==o&&(r[0]+=a[o+0],r[1]+=a[o+1],r[2]+=a[o+2],n++),s=o}return n>1&&f(r,r,1/n),n>0}function oe(e,t,r,i){if(!e)return!1;const{size:a,data:s}=e;d(i,0,0,0),d(fe,0,0,0);let n=0,o=0;const c=t?t.length-1:s.length/a-1,l=c+(r?2:0);for(let e=0;e<l;e+=2){const r=e<c?e:c,l=e<c?e+1:0,d=(t?t[r]:r)*a,m=(t?t[l]:l)*a;ce[0]=s[d+0],ce[1]=s[d+1],ce[2]=s[d+2],le[0]=s[m+0],le[1]=s[m+1],le[2]=s[m+2],f(ce,u(ce,ce,le),.5);const p=h(ce,le);p>0?(u(i,i,f(ce,ce,p)),n+=p):(u(fe,fe,ce),o++)}return 0!==n?(f(i,i,1/n),!0):0!==o&&(f(i,fe,1/o),!0)}const ce=c(),le=c(),de=c(),fe=c();function ue(e){e.code.add(I`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function he(e,t){return new xe(e,Se,t)}function me(e,t){const{curvatureDependent:r,scaleStart:i,scaleFallOffRange:a}=Se;return new xe(e,{curvatureDependent:{min:{curvature:r.min.curvature,tiltAngle:r.min.tiltAngle,scaleFallOffFactor:Pe.curvatureDependent.min.scaleFallOffFactor},max:{curvature:r.max.curvature,tiltAngle:r.max.tiltAngle,scaleFallOffFactor:Pe.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:a,minPixelSize:Pe.minPixelSize},t)}function pe(e,t,r){const i=r.parameters,a=r.paddingPixelsOverride;return Fe.scale=Math.min(i.divisor/(t-i.offset),1),Fe.factor=function(e){return Math.abs(e*e*e)}(e),Fe.minPixelSize=i.minPixelSize,Fe.paddingPixels=a,Fe}function ge(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function ve(e,t){return Math.max(a(e*t.scale,e,t.factor),ge(e,t))}function be(e,t,r,i){i.scale=function(e,t,r){const i=pe(e,t,r);return i.minPixelSize=0,i.paddingPixels=0,ve(1,i)}(e,t,r),i.factor=0,i.minPixelSize=r.parameters.minPixelSize,i.paddingPixels=r.paddingPixelsOverride}function _e(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,ge(e[1],t)/e[1]),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}class xe{constructor(e,t,r,i={camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0},a){this.viewingMode=e,this.description=t,this.ellipsoidRadius=r,this.parameters=i,this._paddingPixelsOverride=a,2===this.viewingMode?(this.coverageCompensation=this.surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this.surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersGlobal)}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this.calculateParameters(e,this.ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new xe(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,e):this}calculateParameters(e,t,r){const{scaleStart:i,scaleFallOffRange:a,minPixelSize:s}=this.description,{fovY:n,distance:o}=e,c=this.calculateCurvatureDependentParameters(e,t),l=this.coverageCompensation(e,t,c),{tiltAngle:d,scaleFallOffFactor:f}=c,u=Math.sin(d)*o,h=.5*Math.PI-d-n*(.5-i*l),m=u/Math.cos(h),p=h+n*a*l,g=(m-f*(u/Math.cos(p)))/(1-f);return r.camera.fovY=e.fovY,r.camera.distance=e.distance,r.offset=g,r.divisor=m-g,r.minPixelSize=s,r}calculateCurvatureDependentParametersLocal(e,t,r=ye){return r.tiltAngle=this.description.curvatureDependent.min.tiltAngle,r.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,r}calculateCurvatureDependentParametersGlobal(e,t,r=ye){const i=this.description.curvatureDependent,s=1+e.distance/t,o=Math.sqrt(s*s-1),[c,l]=[i.min.curvature,i.max.curvature],d=n((o-c)/(l-c),0,1),[f,u]=[i.min,i.max];return r.tiltAngle=a(f.tiltAngle,u.tiltAngle,d),r.scaleFallOffFactor=a(f.scaleFallOffFactor,u.scaleFallOffFactor,d),r}surfaceCoverageCompensationLocal(e,t,r){return(e.fovY-r.tiltAngle)/e.fovY}surfaceCoverageCompensationGlobal(e,t,r){const i=t*t,a=r.tiltAngle+.5*Math.PI,{fovY:s,distance:n}=e,o=n*n+i-2*Math.cos(a)*n*t,c=Math.sqrt(o),l=Math.sqrt(o-i);return(Math.acos(l/c)-Math.asin(t/(c/Math.sin(a)))+.5*s)/s}}const Se={curvatureDependent:{min:{curvature:s(10),tiltAngle:s(12),scaleFallOffFactor:.5},max:{curvature:s(70),tiltAngle:s(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},Pe={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};const Fe={scale:0,factor:0,minPixelSize:0,paddingPixels:0},ye={tiltAngle:0,scaleFallOffFactor:0},Te=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Oe extends(Te(class{})){}function De(){return(e,t)=>{var r,i;e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=null!=(r=null==(i=e._managedDisposables)?void 0:i.slice())?r:[]);e._managedDisposables.unshift(t)}}class Ae extends Oe{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}}const we=F();function Ce(e,t,r,i,a,s,n){const o=z(t),c=r.tolerance;if(!o)if(e.boundingInfo)M(0===e.primitiveType),ze(e.boundingInfo,i,a,c,s,n);else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");Ie(i,a,0,t.length/3,t,r,void 0,s,n)}}const Me=c();function ze(e,i,a,s,n,o){if(t(e))return;const c=He(i,a,Me);if(y(we,e.getBBMin()),T(we,e.getBBMax()),r(n)&&n.applyToAabb(we),Ue(we,i,c,s)){const{primitiveIndices:t,indices:r,position:c}=e,l=t?t.length:r.length/3;if(l>Ye){const t=e.getChildren();if(void 0!==t){for(let e=0;e<8;++e)void 0!==t[e]&&ze(t[e],i,a,s,n,o);return}}Ie(i,a,0,l,r,c,t,n,o)}}const Le=c();function Ie(e,t,i,a,s,n,o,c,l){if(o)return function(e,t,i,a,s,n,o,c,l){const d=n.data,f=n.stride||n.size,u=e[0],h=e[1],m=e[2],p=t[0],g=t[1],v=t[2],b=p-u,_=g-h,x=v-m;for(let e=i;e<a;++e){const t=o[e];let i=3*t,a=f*s[i++],n=d[a++],p=d[a++],g=d[a];a=f*s[i++];let v=d[a++],S=d[a++],P=d[a];a=f*s[i];let F=d[a++],y=d[a++],T=d[a];r(c)&&([n,p,g]=c.applyToVertex(n,p,g,e),[v,S,P]=c.applyToVertex(v,S,P,e),[F,y,T]=c.applyToVertex(F,y,T,e));const O=v-n,D=S-p,A=P-g,w=F-n,C=y-p,M=T-g,z=_*M-C*x,L=x*w-M*b,I=b*C-w*_,B=O*z+D*L+A*I;if(Math.abs(B)<=Number.EPSILON)continue;const $=u-n,k=h-p,H=m-g,U=$*z+k*L+H*I;if(B>0){if(U<0||U>B)continue}else if(U>0||U<B)continue;const V=k*A-D*H,G=H*O-A*$,R=$*D-O*k,j=b*V+_*G+x*R;if(B>0){if(j<0||U+j>B)continue}else if(j>0||U+j<B)continue;const E=(w*V+C*G+M*R)/B;if(E>=0){l(E,ke(O,D,A,w,C,M,Le),t)}}}(e,t,i,a,s,n,o,c,l);const d=n.data,f=n.stride||n.size,u=e[0],h=e[1],m=e[2],p=t[0]-u,g=t[1]-h,v=t[2]-m;for(let e=i,t=3*i;e<a;++e){let i=f*s[t++],a=d[i++],n=d[i++],o=d[i];i=f*s[t++];let b=d[i++],_=d[i++],x=d[i];i=f*s[t++];let S=d[i++],P=d[i++],F=d[i];r(c)&&([a,n,o]=c.applyToVertex(a,n,o,e),[b,_,x]=c.applyToVertex(b,_,x,e),[S,P,F]=c.applyToVertex(S,P,F,e));const y=b-a,T=_-n,O=x-o,D=S-a,A=P-n,w=F-o,C=g*w-A*v,M=v*D-w*p,z=p*A-D*g,L=y*C+T*M+O*z;if(Math.abs(L)<=Number.EPSILON)continue;const I=u-a,B=h-n,$=m-o,k=I*C+B*M+$*z;if(L>0){if(k<0||k>L)continue}else if(k>0||k<L)continue;const H=B*O-T*$,U=$*y-O*I,V=I*T-y*B,G=p*H+g*U+v*V;if(L>0){if(G<0||k+G>L)continue}else if(G>0||k+G<L)continue;const R=(D*H+A*U+w*V)/L;if(R>=0){l(R,ke(y,T,O,D,A,w,Le),e)}}}const Be=c(),$e=c();function ke(e,t,r,i,a,s,n){return d(Be,e,t,r),d($e,i,a,s),m(n,Be,$e),p(n,n),n}function He(e,t,r){return d(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function Ue(e,t,r,i){return Ve(e,t,r,i,1/0)}function Ve(e,t,r,i,a){const s=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let o=Math.min(s,n),c=Math.max(s,n);const l=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(o=Math.max(o,Math.min(l,d)),o>c)return!1;const f=(e[2]-i-t[2])*r[2],u=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(f,u)),!(c<0)&&(o=Math.max(o,Math.min(f,u)),!(o>c)&&o<a)}function Ge(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;a&&(s=function(e,t,r,i){return ve(e,pe(t,r,i))}(s,i,t,a));const n=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return o(n*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function Re(e,t,r){if(!e)return;const i=e.parameters,a=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,a)}function je(e,t){const r=t?je(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=We(i)),null==i&&t in r||(r[t]=i)}return r}function Ee(e,t){let r=!1;for(const i in t){const a=t[i];void 0!==a&&(r=!0,Array.isArray(a)?e[i]=a.slice():e[i]=a)}return r}function Ne(e,t,r,i,a){if(!t.options.selectionMode)return;const s=e.vertexAttributes.get("position").data,o=e.vertexAttributes.get("size"),c=o&&o.data[0],l=r[0],d=r[1],f=((c+i)/2+4)*e.screenToWorldRatio;let u=Number.MAX_VALUE;for(let e=0;e<s.length-5;e+=3){const t=s[e],r=s[e+1],i=l-t,a=d-r,o=s[e+3]-t,c=s[e+4]-r,f=n((o*i+c*a)/(o*o+c*c),0,1),h=o*f-i,m=c*f-a,p=h*h+m*m;p<u&&(u=p)}u<f*f&&a()}function We(e){const t=[];return e.forEach((e=>t.push(e))),t}const qe={multiply:1,ignore:2,replace:3,tint:4},Ye=1e3;class Ke extends L{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=J,this._params=je(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){Ee(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function Xe(e,t){return e.isVisible()&&e.isVisibleInPass(t.pass)&&0!=(e.renderOccluded&t.renderOccludedMask)}const Ze={renderOccluded:1};function Je(e,t,r,i){const a=r.typedBuffer,s=r.typedBufferStride,n=e.length;i*=s;for(let r=0;r<n;++r){const n=2*e[r];a[i]=t[n],a[i+1]=t[n+1],i+=s}}function Qe(e,t,r,i,a){const s=r.typedBuffer,n=r.typedBufferStride,o=e.length;if(i*=n,null==a||1===a)for(let r=0;r<o;++r){const a=3*e[r];s[i]=t[a],s[i+1]=t[a+1],s[i+2]=t[a+2],i+=n}else for(let r=0;r<o;++r){const o=3*e[r];for(let e=0;e<a;++e)s[i]=t[o],s[i+1]=t[o+1],s[i+2]=t[o+2],i+=n}}function et(e,t,r,i,a=1){const s=r.typedBuffer,n=r.typedBufferStride,o=e.length;if(i*=n,1===a)for(let r=0;r<o;++r){const a=4*e[r];s[i]=t[a],s[i+1]=t[a+1],s[i+2]=t[a+2],s[i+3]=t[a+3],i+=n}else for(let r=0;r<o;++r){const o=4*e[r];for(let e=0;e<a;++e)s[i]=t[o],s[i+1]=t[o+1],s[i+2]=t[o+2],s[i+3]=t[o+3],i+=n}}function tt(e,t,r,i,a,s=1){if(r){const n=i.typedBuffer,o=i.typedBufferStride,c=e.length,l=r[0],d=r[1],f=r[2],u=r[4],h=r[5],m=r[6],p=r[8],g=r[9],v=r[10],b=r[12],_=r[13],x=r[14];if(a*=o,1===s)for(let r=0;r<c;++r){const i=3*e[r],s=t[i],c=t[i+1],S=t[i+2];n[a]=l*s+u*c+p*S+b,n[a+1]=d*s+h*c+g*S+_,n[a+2]=f*s+m*c+v*S+x,a+=o}else for(let r=0;r<c;++r){const i=3*e[r],c=t[i],S=t[i+1],P=t[i+2],F=l*c+u*S+p*P+b,y=d*c+h*S+g*P+_,T=f*c+m*S+v*P+x;for(let e=0;e<s;++e)n[a]=F,n[a+1]=y,n[a+2]=T,a+=o}}else Qe(e,t,i,a,s)}function rt(e,t,r,i,a,s){if(r){const n=r,o=i.typedBuffer,c=i.typedBufferStride,l=e.length,d=n[0],f=n[1],u=n[2],h=n[4],m=n[5],p=n[6],g=n[8],v=n[9],b=n[10],_=Math.abs(1-d*d+h*h+g*g)>1e-5||Math.abs(1-f*f+m*m+v*v)>1e-5||Math.abs(1-u*u+p*p+b*b)>1e-5,x=1e-6,S=1-x;if(a*=c,1===s)for(let r=0;r<l;++r){const i=3*e[r],s=t[i],n=t[i+1],l=t[i+2];let P=d*s+h*n+g*l,F=f*s+m*n+v*l,y=u*s+p*n+b*l;if(_){const e=P*P+F*F+y*y;if(e<S&&e>x){const t=Math.sqrt(e);P/=t,F/=t,y/=t}}o[a+0]=P,o[a+1]=F,o[a+2]=y,a+=c}else for(let r=0;r<l;++r){const i=3*e[r],n=t[i],l=t[i+1],P=t[i+2];let F=d*n+h*l+g*P,y=f*n+m*l+v*P,T=u*n+p*l+b*P;if(_){const e=F*F+y*y+T*T;if(e<S&&e>x){const t=Math.sqrt(e);F/=t,y/=t,T/=t}}for(let e=0;e<s;++e)o[a+0]=F,o[a+1]=y,o[a+2]=T,a+=c}}else Qe(e,t,i,a,s)}function it(e,t,r,i,a,s=1){const n=i.typedBuffer,o=i.typedBufferStride,c=e.length;if(a*=o,1===s){if(4===r)for(let r=0;r<c;++r){const i=4*e[r];n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=t[i+3],a+=o}else if(3===r)for(let r=0;r<c;++r){const i=3*e[r];n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=255,a+=o}}else if(4===r)for(let r=0;r<c;++r){const i=4*e[r];for(let e=0;e<s;++e)n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=t[i+3],a+=o}else if(3===r)for(let r=0;r<c;++r){const i=3*e[r];for(let e=0;e<s;++e)n[a]=t[i],n[a+1]=t[i+1],n[a+2]=t[i+2],n[a+3]=255,a+=o}}function at(e,t,r,i,a,s){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),o=e.indices.get(n);if(t&&o)switch(n){case"position":{M(3===t.size);const e=a.getField(n,P);e&&tt(o,t.data,r,e,s);break}case"normal":{M(3===t.size);const e=a.getField(n,P);e&&rt(o,t.data,i,e,s,1);break}case"uv0":{M(2===t.size);const e=a.getField(n,S);e&&Je(o,t.data,e,s);break}case"color":{M(3===t.size||4===t.size);const e=a.getField(n,x);e&&it(o,t.data,t.size,e,s);break}case"symbolColor":{M(3===t.size||4===t.size);const e=a.getField(n,x);e&&it(o,t.data,t.size,e,s);break}case"tangent":{M(4===t.size);const e=a.getField(n,_);e&&et(o,t.data,e,s);break}}}}function st(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=I`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,i=I`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,a=t.sliceHighlightDisabled?I`#define highlightSlice(_color_, _pos_) (_color_)`:I`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(a)}else{const r=I`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}!function(e){e.bindUniformsWithOrigin=function(t,r,i){e.bindUniforms(t,r,i.slicePlane,i.origin)},e.bindUniforms=function(e,t,i,a){t.slicePlaneEnabled&&(r(i)?(a?(g(nt,i.origin,a),e.setUniform3fv("slicePlaneOrigin",nt)):e.setUniform3fv("slicePlaneOrigin",i.origin),e.setUniform3fv("slicePlaneBasis1",i.basis1),e.setUniform3fv("slicePlaneBasis2",i.basis2)):(e.setUniform3fv("slicePlaneBasis1",l),e.setUniform3fv("slicePlaneBasis2",l),e.setUniform3fv("slicePlaneOrigin",l)))}}(st||(st={}));const nt=c();function ot(e){e.code.add(I`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}function ct(e){e.include(ot),e.code.add(I`
    float linearDepthFromFloat(float depth, vec2 nearFar) {
      return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }

    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
    }
  `)}const lt=b(1,1,0,1),dt=b(1,0,1,1);function ft(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",lt).add("unoccludedHighlightFlag","vec4",dt),e.fragment.code.add(I`
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
  `)}!function(e){e.bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])}}(ft||(ft={}));const ut=.1,ht=.001;function mt(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(I`
        #define discardOrAdjustAlpha(color) { if (color.a < ${I.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(I`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(I`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(I`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}const pt=O(770,1,771,771),gt=D(1,1),vt=D(0,771);function bt(e){return 2===e?null:1===e?vt:gt}function _t(e){return 2===e?A:null}const xt=5e5,St={factor:-1,units:-2};function Pt(e){return e?St:null}function Ft(e){return 3===e||2===e?513:515}function yt(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(I`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function Tt(e,t,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),t.bindTexture(r.terrainLinearDepthTexture,10))}const Ot={func:513},Dt={func:519},At={mask:255},wt={mask:0},Ct=e=>({function:{func:517,ref:e,mask:e},operation:{fail:7680,zFail:7680,zPass:7680}}),Mt=e=>({function:{func:519,ref:e,mask:e},operation:{fail:7680,zFail:7680,zPass:7681}}),zt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Lt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},It={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},Bt={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}};function $t(e,t){e.fragment.include(ot),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(I`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(I`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}function kt(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(I`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(I`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(I`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}export{Mt as $,at as A,kt as B,ue as C,J as D,ht as E,_t as F,Ae as G,Lt as H,Pt as I,xt as J,Ce as K,it as L,Ke as M,he as N,ft as O,me as P,ke as Q,Y as R,H as S,B as T,Ct as U,Q as V,Ve as W,Oe as X,De as Y,He as Z,mt as _,X as a,ut as a0,ot as a1,dt as a2,Xe as a3,Te as a4,Ge as a5,ve as a6,ne as a7,be as a8,se as a9,Dt as aa,Bt as ab,wt as ac,It as ad,Ot as ae,Ne as af,je as ag,Ee as ah,K as b,_e as c,st as d,Re as e,rt as f,I as g,et as h,ae as i,qe as j,Ie as k,ct as l,Ze as m,yt as n,$t as o,Z as p,Tt as q,pt as r,bt as s,Ft as t,At as u,zt as v,tt as w,St as x,Ue as y,oe as z};
