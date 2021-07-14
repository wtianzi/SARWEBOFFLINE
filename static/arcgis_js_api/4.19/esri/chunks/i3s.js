// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(hb,N){N=N.createCommonjsModule(function(ib,ya){ya=function(){var za="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return function(Q){function jb(a){return c.locateFile?c.locateFile(a,D):D+a}function R(a,b,d){var e=b+d;for(d=b;a[d]&&!(d>=e);)++d;if(16<d-b&&a.subarray&&Aa)return Aa.decode(a.subarray(b,d));for(e="";b<d;){var g=a[b++];if(g&128){var h=a[b++]&63;if(192==(g&224))e+=String.fromCharCode((g&31)<<6|h);
else{var m=a[b++]&63;g=224==(g&240)?(g&15)<<12|h<<6|m:(g&7)<<18|h<<12|m<<6|a[b++]&63;65536>g?e+=String.fromCharCode(g):(g-=65536,e+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else e+=String.fromCharCode(g)}return e}function Ba(a,b,d,e){if(!(0<e))return 0;var g=d;e=d+e-1;for(var h=0;h<a.length;++h){var m=a.charCodeAt(h);if(55296<=m&&57343>=m){var k=a.charCodeAt(++h);m=65536+((m&1023)<<10)|k&1023}if(127>=m){if(d>=e)break;b[d++]=m}else{if(2047>=m){if(d+1>=e)break;b[d++]=192|m>>6}else{if(65535>=
m){if(d+2>=e)break;b[d++]=224|m>>12}else{if(d+3>=e)break;b[d++]=240|m>>18;b[d++]=128|m>>12&63}b[d++]=128|m>>6&63}b[d++]=128|m&63}}b[d]=0;return d-g}function Ca(a){for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}function kb(a){var b;for(b=a>>1;I[b];)++b;b<<=1;if(32<b-a&&Da)return Da.decode(v.subarray(a,b));b=0;for(var d="";;){var e=I[a+2*b>>1];if(0==e)return d;++b;d+=String.fromCharCode(e)}}
function lb(a,b,d){void 0===d&&(d=2147483647);if(2>d)return 0;d-=2;var e=b;d=d<2*a.length?d/2:a.length;for(var g=0;g<d;++g){var h=a.charCodeAt(g);I[b>>1]=h;b+=2}I[b>>1]=0;return b-e}function mb(a){return 2*a.length}function nb(a){for(var b=0,d="";;){var e=u[a+4*b>>2];if(0==e)return d;++b;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}}function ob(a,b,d){void 0===d&&(d=2147483647);if(4>d)return 0;var e=b;d=e+d-4;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);
if(55296<=h&&57343>=h){var m=a.charCodeAt(++g);h=65536+((h&1023)<<10)|m&1023}u[b>>2]=h;b+=4;if(b+4>d)break}u[b>>2]=0;return b-e}function pb(a){for(var b=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&++d;b+=4}return b}function qb(a,b){0<a%b&&(a+=b-a%b);return a}function Ea(a){S=a;c.HEAP8=O=new Int8Array(a);c.HEAP16=I=new Int16Array(a);c.HEAP32=u=new Int32Array(a);c.HEAPU8=v=new Uint8Array(a);c.HEAPU16=ma=new Uint16Array(a);c.HEAPU32=E=new Uint32Array(a);c.HEAPF32=Fa=new Float32Array(a);
c.HEAPF64=Ga=new Float64Array(a)}function ca(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(c);else{var d=b.func;"number"===typeof d?void 0===b.arg?c.dynCall_v(d):c.dynCall_vi(d,b.arg):d(void 0===b.arg?null:b.arg)}}}function na(a){if(c.onAbort)c.onAbort(a);a+="";Ha(a);J(a);Ia=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS\x3d1 for more info.");}function Ja(a,b){return String.prototype.startsWith?a.startsWith(b):0===a.indexOf(b)}function Ka(){try{if(T)return new Uint8Array(T);
if(oa)return oa(G);throw"both async and sync fetching of the wasm failed";}catch(a){na(a)}}function rb(){return T||!pa&&!U||"function"!==typeof fetch?new Promise(function(a,b){a(Ka())}):fetch(G,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+G+"'";return a.arrayBuffer()}).catch(function(){return Ka()})}function La(a){return u[Ma()>>2]=a}function Na(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function da(a){return this.fromWireType(E[a>>2])}function Oa(a){if(void 0===
a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Pa(a,b){a=Oa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function qa(a,b){var d=Pa(b,function(e){this.name=b;this.message=e;e=Error(e).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))});d.prototype=Object.create(a.prototype);d.prototype.constructor=d;d.prototype.toString=
function(){return void 0===this.message?this.name:this.name+": "+this.message};return d}function Qa(a,b,d){function e(k){k=d(k);if(k.length!==a.length)throw new ra("Mismatched type converter count");for(var n=0;n<a.length;++n)F(a[n],k[n])}a.forEach(function(k){ea[k]=b});var g=Array(b.length),h=[],m=0;b.forEach(function(k,n){K.hasOwnProperty(k)?g[n]=K[k]:(h.push(k),P.hasOwnProperty(k)||(P[k]=[]),P[k].push(function(){g[n]=K[k];++m;m===h.length&&e(g)}))});0===h.length&&e(g)}function sa(a){switch(a){case 1:return 0;
case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function x(a){for(var b="";v[a];)b+=Ra[v[a++]];return b}function y(a){throw new Sa(a);}function F(a,b,d){d=d||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||y('type "'+e+'" must have a positive integer typeid pointer');if(K.hasOwnProperty(a)){if(d.ignoreDuplicateRegistrations)return;y("Cannot register type '"+e+"' twice")}K[a]=
b;delete ea[a];P.hasOwnProperty(a)&&(b=P[a],delete P[a],b.forEach(function(g){g()}))}function Ta(a){4<a&&0===--z[a].refcount&&(z[a]=void 0,ta.push(a))}function ua(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=ta.length?ta.pop():z.length;z[b]={refcount:1,value:a};return b}}function va(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function sb(a,b){switch(b){case 2:return function(d){return this.fromWireType(Fa[d>>
2])};case 3:return function(d){return this.fromWireType(Ga[d>>3])};default:throw new TypeError("Unknown float type: "+a);}}function tb(a,b){if(!(a instanceof Function))throw new TypeError("new_ called with constructor type "+typeof a+" which is not a function");var d=Pa(a.name||"unknownFunctionName",function(){});d.prototype=a.prototype;d=new d;a=a.apply(d,b);return a instanceof Object?a:d}function ub(a,b,d){if(void 0===a[b].overloadTable){var e=a[b];a[b]=function(){a[b].overloadTable.hasOwnProperty(arguments.length)||
y("Function '"+d+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].overloadTable+")!");return a[b].overloadTable[arguments.length].apply(this,arguments)};a[b].overloadTable=[];a[b].overloadTable[e.argCount]=e}}function vb(a,b,d){c.hasOwnProperty(a)?((void 0===d||void 0!==c[a].overloadTable&&void 0!==c[a].overloadTable[d])&&y("Cannot register public name '"+a+"' twice"),ub(c,a,a),c.hasOwnProperty(d)&&y("Cannot register multiple overloads of a function with the same number of arguments ("+
d+")!"),c[a].overloadTable[d]=b):(c[a]=b,void 0!==d&&(c[a].numArguments=d))}function wb(a,b){for(var d=[],e=0;e<a;e++)d.push(u[(b>>2)+e]);return d}function V(a,b){a=x(a);var d=c["dynCall_"+a];for(var e=[],g=1;g<a.length;++g)e.push("a"+g);g="return function dynCall_"+(a+"_"+b)+"("+e.join(", ")+") {\n";g+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";d=(new Function("dynCall","rawFunction",g+"};\n"))(d,b);"function"!==typeof d&&y("unknown function pointer with signature "+
a+": "+b);return d}function Ua(a){a=Va(a);var b=x(a);C(a);return b}function xb(a,b){function d(h){g[h]||K[h]||(ea[h]?ea[h].forEach(d):(e.push(h),g[h]=!0))}var e=[],g={};b.forEach(d);throw new Wa(a+": "+e.map(Ua).join([", "]));}function yb(a,b,d){switch(b){case 0:return d?function(e){return O[e]}:function(e){return v[e]};case 1:return d?function(e){return I[e>>1]}:function(e){return ma[e>>1]};case 2:return d?function(e){return u[e>>2]}:function(e){return E[e>>2]};default:throw new TypeError("Unknown integer type: "+
a);}}function W(){if(!W.strings){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Xa||"./this.program"},b;for(b in Ya)a[b]=Ya[b];var d=[];for(b in a)d.push(b+"\x3d"+a[b]);W.strings=d}return W.strings}function fa(a){return 0===a%4&&(0!==a%100||0===a%400)}function wa(a,b){for(var d=0,e=0;e<=b;d+=a[e++]);return d}function ha(a,b){for(a=new Date(a.getTime());0<
b;){var d=fa(a.getFullYear()),e=a.getMonth();d=(d?ia:ja)[e];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>e?a.setMonth(e+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}function zb(a,b,d,e){function g(f,l,r){for(f="number"===typeof f?f.toString():f||"";f.length<l;)f=r[0]+f;return f}function h(f,l){return g(f,l,"0")}function m(f,l){function r(B){return 0>B?-1:0<B?1:0}var w;0===(w=r(f.getFullYear()-l.getFullYear()))&&0===(w=r(f.getMonth()-l.getMonth()))&&
(w=r(f.getDate()-l.getDate()));return w}function k(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function n(f){f=ha(new Date(f.tm_year+1900,0,1),f.tm_yday);var l=new Date(f.getFullYear(),0,4),r=new Date(f.getFullYear()+1,0,4);l=k(l);
r=k(r);return 0>=m(l,f)?0>=m(r,f)?f.getFullYear()+1:f.getFullYear():f.getFullYear()-1}var p=u[e+40>>2];e={tm_sec:u[e>>2],tm_min:u[e+4>>2],tm_hour:u[e+8>>2],tm_mday:u[e+12>>2],tm_mon:u[e+16>>2],tm_year:u[e+20>>2],tm_wday:u[e+24>>2],tm_yday:u[e+28>>2],tm_isdst:u[e+32>>2],tm_gmtoff:u[e+36>>2],tm_zone:p?p?R(v,p,void 0):"":""};d=d?R(v,d,void 0):"";p={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c",
"%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var q in p)d=d.replace(new RegExp(q,"g"),p[q]);var t="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),A="January February March April May June July August September October November December".split(" ");p={"%a":function(f){return t[f.tm_wday].substring(0,3)},"%A":function(f){return t[f.tm_wday]},
"%b":function(f){return A[f.tm_mon].substring(0,3)},"%B":function(f){return A[f.tm_mon]},"%C":function(f){return h((f.tm_year+1900)/100|0,2)},"%d":function(f){return h(f.tm_mday,2)},"%e":function(f){return g(f.tm_mday,2," ")},"%g":function(f){return n(f).toString().substring(2)},"%G":function(f){return n(f)},"%H":function(f){return h(f.tm_hour,2)},"%I":function(f){f=f.tm_hour;0==f?f=12:12<f&&(f-=12);return h(f,2)},"%j":function(f){return h(f.tm_mday+wa(fa(f.tm_year+1900)?ia:ja,f.tm_mon-1),3)},"%m":function(f){return h(f.tm_mon+
1,2)},"%M":function(f){return h(f.tm_min,2)},"%n":function(){return"\n"},"%p":function(f){return 0<=f.tm_hour&&12>f.tm_hour?"AM":"PM"},"%S":function(f){return h(f.tm_sec,2)},"%t":function(){return"\t"},"%u":function(f){return f.tm_wday||7},"%U":function(f){var l=new Date(f.tm_year+1900,0,1),r=0===l.getDay()?l:ha(l,7-l.getDay());f=new Date(f.tm_year+1900,f.tm_mon,f.tm_mday);return 0>m(r,f)?(l=wa(fa(f.getFullYear())?ia:ja,f.getMonth()-1)-31,r=31-r.getDate()+l+f.getDate(),h(Math.ceil(r/7),2)):0===m(r,
l)?"01":"00"},"%V":function(f){var l=new Date(f.tm_year+1901,0,4),r=k(new Date(f.tm_year+1900,0,4));l=k(l);var w=ha(new Date(f.tm_year+1900,0,1),f.tm_yday);if(0>m(w,r))return"53";if(0>=m(l,w))return"01";f=r.getFullYear()<f.tm_year+1900?f.tm_yday+32-r.getDate():f.tm_yday+1-r.getDate();return h(Math.ceil(f/7),2)},"%w":function(f){return f.tm_wday},"%W":function(f){var l=new Date(f.tm_year,0,1),r=1===l.getDay()?l:ha(l,0===l.getDay()?1:7-l.getDay()+1);f=new Date(f.tm_year+1900,f.tm_mon,f.tm_mday);return 0>
m(r,f)?(l=wa(fa(f.getFullYear())?ia:ja,f.getMonth()-1)-31,r=31-r.getDate()+l+f.getDate(),h(Math.ceil(r/7),2)):0===m(r,l)?"01":"00"},"%y":function(f){return(f.tm_year+1900).toString().substring(2)},"%Y":function(f){return f.tm_year+1900},"%z":function(f){f=f.tm_gmtoff;var l=0<=f;f=Math.abs(f)/60;return(l?"+":"-")+String("0000"+(f/60*100+f%60)).slice(-4)},"%Z":function(f){return f.tm_zone},"%%":function(){return"%"}};for(q in p)0<=d.indexOf(q)&&(d=d.replace(new RegExp(q,"g"),p[q](e)));q=Ab(d,!1);if(q.length>
b)return 0;O.set(q,a);return q.length-1}function Ab(a,b,d){d=0<d?d:Ca(a)+1;d=Array(d);a=Ba(a,d,0,d.length);b&&(d.length=a);return d}function xa(a){function b(){if(!X&&(X=!0,c.calledRun=!0,!Ia)){ca(Za);ca(Bb);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;)$a.unshift(c.postRun.shift());ca($a)}}if(!(0<L)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)ab.unshift(c.preRun.shift());
ca(ab);0<L||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1);b()},1)):b())}}Q=Q||{};var c="undefined"!==typeof Q?Q:{},Y={},H;for(H in c)c.hasOwnProperty(H)&&(Y[H]=c[H]);var Xa="./this.program",pa=!1,U=!1;pa="object"===typeof window;U="function"===typeof importScripts;var D="",oa;if(pa||U)U?D=self.location.href:document.currentScript&&(D=document.currentScript.src),za&&(D=za),D=0!==D.indexOf("blob:")?D.substr(0,D.lastIndexOf("/")+1):"",U&&(oa=
function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var Ha=c.print||console.log.bind(console),J=c.printErr||console.warn.bind(console);for(H in Y)Y.hasOwnProperty(H)&&(c[H]=Y[H]);Y=null;c.thisProgram&&(Xa=c.thisProgram);var T;c.wasmBinary&&(T=c.wasmBinary);"object"!==typeof WebAssembly&&J("no native wasm support detected");var Z,Cb=new WebAssembly.Table({initial:904,maximum:904,element:"anyfunc"}),Ia=!1,Aa="undefined"!==
typeof TextDecoder?new TextDecoder("utf8"):void 0,Da="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0,O,v,I,ma,u,E,Fa,Ga,bb=c.INITIAL_MEMORY||16777216;if(Z=c.wasmMemory?c.wasmMemory:new WebAssembly.Memory({initial:bb/65536,maximum:32768}))var S=Z.buffer;bb=S.byteLength;Ea(S);u[12616]=5293504;var ab=[],Za=[],Bb=[],$a=[],cb=Math.ceil,db=Math.floor,L=0,aa=null;c.preloadedImages={};c.preloadedAudios={};var G="i3s.wasm";Ja(G,"data:application/octet-stream;base64,")||(G=jb(G));Za.push({func:function(){eb()}});
var M={mappings:{},buffers:[null,[],[]],printChar:function(a,b){var d=M.buffers[a];0===b||10===b?((1===a?Ha:J)(R(d,0)),d.length=0):d.push(b)},varargs:void 0,get:function(){M.varargs+=4;return u[M.varargs-4>>2]},getStr:function(a){return a?R(v,a,void 0):""},get64:function(a,b){return a}},ka={},P={},K={},ea={},ra=void 0,Ra=void 0,Sa=void 0,ta=[],z=[{},{value:void 0},{value:null},{value:!0},{value:!1}],Wa=void 0,Db={},Ya={},ia=[31,29,31,30,31,30,31,31,30,31,30,31],ja=[31,28,31,30,31,30,31,31,30,31,30,
31];ra=c.InternalError=qa(Error,"InternalError");(function(){for(var a=Array(256),b=0;256>b;++b)a[b]=String.fromCharCode(b);Ra=a})();Sa=c.BindingError=qa(Error,"BindingError");c.count_emval_handles=function(){for(var a=0,b=5;b<z.length;++b)void 0!==z[b]&&++a;return a};c.get_first_emval=function(){for(var a=5;a<z.length;++a)if(void 0!==z[a])return z[a];return null};Wa=c.UnboundTypeError=qa(Error,"UnboundTypeError");var fb={__cxa_allocate_exception:function(a){return la(a)},__cxa_atexit:function(a,
b){},__cxa_throw:function(a,b,d){throw a;},__map_file:function(a,b){La(63);return-1},__sys_munmap:function(a,b){if(-1===(a|0)||0===b)a=-28;else{var d=M.mappings[a];d&&b===d.len&&(M.mappings[a]=null,d.allocated&&C(d.malloc));a=0}return a},_embind_finalize_value_object:function(a){var b=ka[a];delete ka[a];var d=b.rawConstructor,e=b.rawDestructor,g=b.fields,h=g.map(function(m){return m.getterReturnType}).concat(g.map(function(m){return m.setterArgumentType}));Qa([a],h,function(m){var k={};g.forEach(function(n,
p){var q=m[p],t=n.getter,A=n.getterContext,f=m[p+g.length],l=n.setter,r=n.setterContext;k[n.fieldName]={read:function(w){return q.fromWireType(t(A,w))},write:function(w,B){var ba=[];l(r,w,f.toWireType(ba,B));Na(ba)}}});return[{name:b.name,fromWireType:function(n){var p={},q;for(q in k)p[q]=k[q].read(n);e(n);return p},toWireType:function(n,p){for(var q in k)if(!(q in p))throw new TypeError("Missing field");var t=d();for(q in k)k[q].write(t,p[q]);null!==n&&n.push(e,t);return t},argPackAdvance:8,readValueFromPointer:da,
destructorFunction:e}]})},_embind_register_bool:function(a,b,d,e,g){var h=sa(d);b=x(b);F(a,{name:b,fromWireType:function(m){return!!m},toWireType:function(m,k){return k?e:g},argPackAdvance:8,readValueFromPointer:function(m){if(1===d)var k=O;else if(2===d)k=I;else if(4===d)k=u;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[m>>h])},destructorFunction:null})},_embind_register_emval:function(a,b){b=x(b);F(a,{name:b,fromWireType:function(d){var e=z[d].value;Ta(d);
return e},toWireType:function(d,e){return ua(e)},argPackAdvance:8,readValueFromPointer:da,destructorFunction:null})},_embind_register_float:function(a,b,d){d=sa(d);b=x(b);F(a,{name:b,fromWireType:function(e){return e},toWireType:function(e,g){if("number"!==typeof g&&"boolean"!==typeof g)throw new TypeError('Cannot convert "'+va(g)+'" to '+this.name);return g},argPackAdvance:8,readValueFromPointer:sb(b,d),destructorFunction:null})},_embind_register_function:function(a,b,d,e,g,h){var m=wb(b,d);a=x(a);
g=V(e,g);vb(a,function(){xb("Cannot call "+a+" due to unbound types",m)},b-1);Qa([],m,function(k){var n=[k[0],null].concat(k.slice(1)),p=k=a,q=g,t=n.length;2>t&&y("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var A=null!==n[1]&&!1,f=!1,l=1;l<n.length;++l)if(null!==n[l]&&void 0===n[l].destructorFunction){f=!0;break}var r="void"!==n[0].name,w="",B="";for(l=0;l<t-2;++l)w+=(0!==l?", ":"")+"arg"+l,B+=(0!==l?", ":"")+"arg"+l+"Wired";p="return function "+Oa(p)+"("+
w+") {\nif (arguments.length !\x3d\x3d "+(t-2)+") {\nthrowBindingError('function "+p+" called with ' + arguments.length + ' arguments, expected "+(t-2)+" args!');\n}\n";f&&(p+="var destructors \x3d [];\n");var ba=f?"destructors":"null";w="throwBindingError invoker fn runDestructors retType classParam".split(" ");q=[y,q,h,Na,n[0],n[1]];A&&(p+="var thisWired \x3d classParam.toWireType("+ba+", this);\n");for(l=0;l<t-2;++l)p+="var arg"+l+"Wired \x3d argType"+l+".toWireType("+ba+", arg"+l+"); // "+n[l+
2].name+"\n",w.push("argType"+l),q.push(n[l+2]);A&&(B="thisWired"+(0<B.length?", ":"")+B);p+=(r?"var rv \x3d ":"")+"invoker(fn"+(0<B.length?", ":"")+B+");\n";if(f)p+="runDestructors(destructors);\n";else for(l=A?1:2;l<n.length;++l)t=1===l?"thisWired":"arg"+(l-2)+"Wired",null!==n[l].destructorFunction&&(p+=t+"_dtor("+t+"); // "+n[l].name+"\n",w.push(t+"_dtor"),q.push(n[l].destructorFunction));r&&(p+="var ret \x3d retType.fromWireType(rv);\nreturn ret;\n");w.push(p+"}\n");n=tb(Function,w).apply(null,
q);l=b-1;if(!c.hasOwnProperty(k))throw new ra("Replacing nonexistant public symbol");void 0!==c[k].overloadTable&&void 0!==l?c[k].overloadTable[l]=n:(c[k]=n,c[k].argCount=l);return[]})},_embind_register_integer:function(a,b,d,e,g){b=x(b);-1===g&&(g=4294967295);var h=sa(d),m=function(p){return p};if(0===e){var k=32-8*d;m=function(p){return p<<k>>>k}}var n=-1!=b.indexOf("unsigned");F(a,{name:b,fromWireType:m,toWireType:function(p,q){if("number"!==typeof q&&"boolean"!==typeof q)throw new TypeError('Cannot convert "'+
va(q)+'" to '+this.name);if(q<e||q>g)throw new TypeError('Passing a number "'+va(q)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+g+"]!");return n?q>>>0:q|0},argPackAdvance:8,readValueFromPointer:yb(b,h,0!==e),destructorFunction:null})},_embind_register_memory_view:function(a,b,d){function e(h){h>>=2;var m=E;return new g(S,m[h+1],m[h])}var g=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];
d=x(d);F(a,{name:d,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(a,b){b=x(b);var d="std::string"===b;F(a,{name:b,fromWireType:function(e){var g=E[e>>2];if(d){var h=v[e+4+g],m=0;0!=h&&(m=h,v[e+4+g]=0);var k=e+4;for(h=0;h<=g;++h){var n=e+4+h;if(0==v[n]){k=k?R(v,k,void 0):"";if(void 0===p)var p=k;else p+=String.fromCharCode(0),p+=k;k=n+1}}0!=m&&(v[e+4+g]=m)}else{p=Array(g);for(h=0;h<g;++h)p[h]=String.fromCharCode(v[e+
4+h]);p=p.join("")}C(e);return p},toWireType:function(e,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var h="string"===typeof g;h||g instanceof Uint8Array||g instanceof Uint8ClampedArray||g instanceof Int8Array||y("Cannot pass non-string to std::string");var m=(d&&h?function(){return Ca(g)}:function(){return g.length})(),k=la(4+m+1);E[k>>2]=m;if(d&&h)Ba(g,v,k+4,m+1);else if(h)for(h=0;h<m;++h){var n=g.charCodeAt(h);255<n&&(C(k),y("String has UTF-16 code units that do not fit in 8 bits"));v[k+
4+h]=n}else for(h=0;h<m;++h)v[k+4+h]=g[h];null!==e&&e.push(C,k);return k},argPackAdvance:8,readValueFromPointer:da,destructorFunction:function(e){C(e)}})},_embind_register_std_wstring:function(a,b,d){d=x(d);if(2===b){var e=kb;var g=lb;var h=mb;var m=function(){return ma};var k=1}else 4===b&&(e=nb,g=ob,h=pb,m=function(){return E},k=2);F(a,{name:d,fromWireType:function(n){var p=E[n>>2],q=m(),t=q[n+4+p*b>>k],A=0;0!=t&&(A=t,q[n+4+p*b>>k]=0);var f=n+4;for(t=0;t<=p;++t){var l=n+4+t*b;if(0==q[l>>k]){f=e(f);
if(void 0===r)var r=f;else r+=String.fromCharCode(0),r+=f;f=l+b}}0!=A&&(q[n+4+p*b>>k]=A);C(n);return r},toWireType:function(n,p){"string"!==typeof p&&y("Cannot pass non-string to C++ string type "+d);var q=h(p),t=la(4+q+b);E[t>>2]=q>>k;g(p,t+4,q+b);null!==n&&n.push(C,t);return t},argPackAdvance:8,readValueFromPointer:da,destructorFunction:function(n){C(n)}})},_embind_register_value_object:function(a,b,d,e,g,h){ka[a]={name:x(b),rawConstructor:V(d,e),rawDestructor:V(g,h),fields:[]}},_embind_register_value_object_field:function(a,
b,d,e,g,h,m,k,n,p){ka[a].fields.push({fieldName:x(b),getterReturnType:d,getter:V(e,g),getterContext:h,setterArgumentType:m,setter:V(k,n),setterContext:p})},_embind_register_void:function(a,b){b=x(b);F(a,{isVoid:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(d,e){}})},_emval_decref:Ta,_emval_incref:function(a){4<a&&(z[a].refcount+=1)},_emval_new_cstring:function(a){var b=Db[a];a=void 0===b?x(a):b;return ua(a)},_emval_take_value:function(a,b){var d=K[a];void 0===d&&y("_emval_take_value has unknown type "+
Ua(a));a=d.readValueFromPointer(b);return ua(a)},abort:function(){na()},emscripten_get_sbrk_ptr:function(){return 50464},emscripten_memcpy_big:function(a,b,d){v.copyWithin(a,b,b+d)},emscripten_resize_heap:function(a){a>>>=0;var b=v.length;if(2147483648<a)return!1;for(var d=1;4>=d;d*=2){var e=b*(1+.2/d);e=Math.min(e,a+100663296);e=Math.min(2147483648,qb(Math.max(16777216,a,e),65536));a:{try{Z.grow(e-S.byteLength+65535>>>16);Ea(Z.buffer);var g=1;break a}catch(h){}g=void 0}if(g)return!0}return!1},environ_get:function(a,
b){var d=0;W().forEach(function(e,g){var h=b+d;g=u[a+4*g>>2]=h;for(h=0;h<e.length;++h)O[g++>>0]=e.charCodeAt(h);O[g>>0]=0;d+=e.length+1});return 0},environ_sizes_get:function(a,b){var d=W();u[a>>2]=d.length;var e=0;d.forEach(function(g){e+=g.length+1});u[b>>2]=e;return 0},fd_close:function(a){return 0},fd_seek:function(a,b,d,e,g){},fd_write:function(a,b,d,e){for(var g=0,h=0;h<d;h++){for(var m=u[b+8*h>>2],k=u[b+(8*h+4)>>2],n=0;n<k;n++)M.printChar(a,v[m+n]);g+=k}u[e>>2]=g;return 0},memory:Z,raise:function(a){La(52);
return-1},round:function(a){a=+a;return 0<=a?+db(a+.5):+cb(a-.5)},roundf:function(a){a=+a;return 0<=a?+db(a+.5):+cb(a-.5)},setTempRet0:function(a){},strftime_l:function(a,b,d,e){return zb(a,b,d,e)},table:Cb},gb=function(){function a(g,h){c.asm=g.exports;L--;c.monitorRunDependencies&&c.monitorRunDependencies(L);0==L&&aa&&(g=aa,aa=null,g())}function b(g){a(g.instance)}function d(g){return rb().then(function(h){return WebAssembly.instantiate(h,e)}).then(g,function(h){J("failed to asynchronously prepare wasm: "+
h);na(h)})}var e={env:fb,wasi_snapshot_preview1:fb};L++;c.monitorRunDependencies&&c.monitorRunDependencies(L);if(c.instantiateWasm)try{return c.instantiateWasm(e,a)}catch(g){return J("Module.instantiateWasm callback failed with error: "+g),!1}(function(){if(T||"function"!==typeof WebAssembly.instantiateStreaming||Ja(G,"data:application/octet-stream;base64,")||"function"!==typeof fetch)return d(b);fetch(G,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,e).then(b,
function(h){J("wasm streaming compile failed: "+h);J("falling back to ArrayBuffer instantiation");d(b)})})})();return{}}();c.asm=gb;var eb=c.___wasm_call_ctors=function(){return(eb=c.___wasm_call_ctors=c.asm.__wasm_call_ctors).apply(null,arguments)},la=c._malloc=function(){return(la=c._malloc=c.asm.malloc).apply(null,arguments)},C=c._free=function(){return(C=c._free=c.asm.free).apply(null,arguments)},Ma=c.___errno_location=function(){return(Ma=c.___errno_location=c.asm.__errno_location).apply(null,
arguments)};c._setThrew=function(){return(c._setThrew=c.asm.setThrew).apply(null,arguments)};var Va=c.___getTypeName=function(){return(Va=c.___getTypeName=c.asm.__getTypeName).apply(null,arguments)};c.___embind_register_native_and_builtin_types=function(){return(c.___embind_register_native_and_builtin_types=c.asm.__embind_register_native_and_builtin_types).apply(null,arguments)};c.stackSave=function(){return(c.stackSave=c.asm.stackSave).apply(null,arguments)};c.stackAlloc=function(){return(c.stackAlloc=
c.asm.stackAlloc).apply(null,arguments)};c.stackRestore=function(){return(c.stackRestore=c.asm.stackRestore).apply(null,arguments)};c.__growWasmMemory=function(){return(c.__growWasmMemory=c.asm.__growWasmMemory).apply(null,arguments)};c.dynCall_ii=function(){return(c.dynCall_ii=c.asm.dynCall_ii).apply(null,arguments)};c.dynCall_i=function(){return(c.dynCall_i=c.asm.dynCall_i).apply(null,arguments)};c.dynCall_vi=function(){return(c.dynCall_vi=c.asm.dynCall_vi).apply(null,arguments)};c.dynCall_dii=
function(){return(c.dynCall_dii=c.asm.dynCall_dii).apply(null,arguments)};c.dynCall_viid=function(){return(c.dynCall_viid=c.asm.dynCall_viid).apply(null,arguments)};c.dynCall_fii=function(){return(c.dynCall_fii=c.asm.dynCall_fii).apply(null,arguments)};c.dynCall_viif=function(){return(c.dynCall_viif=c.asm.dynCall_viif).apply(null,arguments)};c.dynCall_iii=function(){return(c.dynCall_iii=c.asm.dynCall_iii).apply(null,arguments)};c.dynCall_viii=function(){return(c.dynCall_viii=c.asm.dynCall_viii).apply(null,
arguments)};c.dynCall_vii=function(){return(c.dynCall_vii=c.asm.dynCall_vii).apply(null,arguments)};c.dynCall_viiiii=function(){return(c.dynCall_viiiii=c.asm.dynCall_viiiii).apply(null,arguments)};c.dynCall_viiii=function(){return(c.dynCall_viiii=c.asm.dynCall_viiii).apply(null,arguments)};c.dynCall_iiiiiiiiidiii=function(){return(c.dynCall_iiiiiiiiidiii=c.asm.dynCall_iiiiiiiiidiii).apply(null,arguments)};c.dynCall_iiiiiiiidiii=function(){return(c.dynCall_iiiiiiiidiii=c.asm.dynCall_iiiiiiiidiii).apply(null,
arguments)};c.dynCall_iiii=function(){return(c.dynCall_iiii=c.asm.dynCall_iiii).apply(null,arguments)};c.dynCall_v=function(){return(c.dynCall_v=c.asm.dynCall_v).apply(null,arguments)};c.dynCall_vij=function(){return(c.dynCall_vij=c.asm.dynCall_vij).apply(null,arguments)};c.dynCall_iiiiiiii=function(){return(c.dynCall_iiiiiiii=c.asm.dynCall_iiiiiiii).apply(null,arguments)};c.dynCall_iiiii=function(){return(c.dynCall_iiiii=c.asm.dynCall_iiiii).apply(null,arguments)};c.dynCall_iif=function(){return(c.dynCall_iif=
c.asm.dynCall_iif).apply(null,arguments)};c.dynCall_viijii=function(){return(c.dynCall_viijii=c.asm.dynCall_viijii).apply(null,arguments)};c.dynCall_iiiiii=function(){return(c.dynCall_iiiiii=c.asm.dynCall_iiiiii).apply(null,arguments)};c.dynCall_viiiiiiddi=function(){return(c.dynCall_viiiiiiddi=c.asm.dynCall_viiiiiiddi).apply(null,arguments)};c.dynCall_iiiiiii=function(){return(c.dynCall_iiiiiii=c.asm.dynCall_iiiiiii).apply(null,arguments)};c.dynCall_jiji=function(){return(c.dynCall_jiji=c.asm.dynCall_jiji).apply(null,
arguments)};c.dynCall_iidiiii=function(){return(c.dynCall_iidiiii=c.asm.dynCall_iidiiii).apply(null,arguments)};c.dynCall_iiiiiiiii=function(){return(c.dynCall_iiiiiiiii=c.asm.dynCall_iiiiiiiii).apply(null,arguments)};c.dynCall_iiiiij=function(){return(c.dynCall_iiiiij=c.asm.dynCall_iiiiij).apply(null,arguments)};c.dynCall_iiiiid=function(){return(c.dynCall_iiiiid=c.asm.dynCall_iiiiid).apply(null,arguments)};c.dynCall_iiiiijj=function(){return(c.dynCall_iiiiijj=c.asm.dynCall_iiiiijj).apply(null,arguments)};
c.dynCall_iiiiiijj=function(){return(c.dynCall_iiiiiijj=c.asm.dynCall_iiiiiijj).apply(null,arguments)};c.dynCall_viiiiii=function(){return(c.dynCall_viiiiii=c.asm.dynCall_viiiiii).apply(null,arguments)};c.asm=gb;var X;c.then=function(a){if(X)a(c);else{var b=c.onRuntimeInitialized;c.onRuntimeInitialized=function(){b&&b();a(c)}}return c};aa=function b(){X||xa();X||(aa=b)};c.run=xa;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();xa();return Q}}();
ib.exports=ya});N=Object.freeze(Object.assign(Object.create(null),N,{"default":N}));hb.i3s=N});