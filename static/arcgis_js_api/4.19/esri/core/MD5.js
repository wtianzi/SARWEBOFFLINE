// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports"],function(q){function n(b,g){const e=(b&65535)+(g&65535);return(b>>16)+(g>>16)+(e>>16)<<16|e&65535}function h(b,g,e,d,a,c){b=n(n(g,b),n(d,c));return n(b<<a|b>>>32-a,e)}function k(b,g,e,d,a,c,f){return h(g&e|~g&d,b,g,a,c,f)}function l(b,g,e,d,a,c,f){return h(g&d|e&~d,b,g,a,c,f)}function m(b,g,e,d,a,c,f){return h(e^(g|~d),b,g,a,c,f)}const p={Base64:0,Hex:1,String:2,Raw:3};q.createMD5Hash=function(b,g=p.Hex){g=g||p.Base64;var e=[];for(let a=0,c=8*b.length;a<c;a+=8)e[a>>5]|=(b.charCodeAt(a/
8)&255)<<a%32;{b=8*b.length;e[b>>5]|=128<<b%32;e[(b+64>>>9<<4)+14]=b;b=1732584193;var d=-271733879;let a=-1732584194,c=271733878;for(let f=0;f<e.length;f+=16){const r=b,t=d,u=a,v=c;b=k(b,d,a,c,e[f+0],7,-680876936);c=k(c,b,d,a,e[f+1],12,-389564586);a=k(a,c,b,d,e[f+2],17,606105819);d=k(d,a,c,b,e[f+3],22,-1044525330);b=k(b,d,a,c,e[f+4],7,-176418897);c=k(c,b,d,a,e[f+5],12,1200080426);a=k(a,c,b,d,e[f+6],17,-1473231341);d=k(d,a,c,b,e[f+7],22,-45705983);b=k(b,d,a,c,e[f+8],7,1770035416);c=k(c,b,d,a,e[f+9],
12,-1958414417);a=k(a,c,b,d,e[f+10],17,-42063);d=k(d,a,c,b,e[f+11],22,-1990404162);b=k(b,d,a,c,e[f+12],7,1804603682);c=k(c,b,d,a,e[f+13],12,-40341101);a=k(a,c,b,d,e[f+14],17,-1502002290);d=k(d,a,c,b,e[f+15],22,1236535329);b=l(b,d,a,c,e[f+1],5,-165796510);c=l(c,b,d,a,e[f+6],9,-1069501632);a=l(a,c,b,d,e[f+11],14,643717713);d=l(d,a,c,b,e[f+0],20,-373897302);b=l(b,d,a,c,e[f+5],5,-701558691);c=l(c,b,d,a,e[f+10],9,38016083);a=l(a,c,b,d,e[f+15],14,-660478335);d=l(d,a,c,b,e[f+4],20,-405537848);b=l(b,d,a,
c,e[f+9],5,568446438);c=l(c,b,d,a,e[f+14],9,-1019803690);a=l(a,c,b,d,e[f+3],14,-187363961);d=l(d,a,c,b,e[f+8],20,1163531501);b=l(b,d,a,c,e[f+13],5,-1444681467);c=l(c,b,d,a,e[f+2],9,-51403784);a=l(a,c,b,d,e[f+7],14,1735328473);d=l(d,a,c,b,e[f+12],20,-1926607734);b=h(d^a^c,b,d,e[f+5],4,-378558);c=h(b^d^a,c,b,e[f+8],11,-2022574463);a=h(c^b^d,a,c,e[f+11],16,1839030562);d=h(a^c^b,d,a,e[f+14],23,-35309556);b=h(d^a^c,b,d,e[f+1],4,-1530992060);c=h(b^d^a,c,b,e[f+4],11,1272893353);a=h(c^b^d,a,c,e[f+7],16,-155497632);
d=h(a^c^b,d,a,e[f+10],23,-1094730640);b=h(d^a^c,b,d,e[f+13],4,681279174);c=h(b^d^a,c,b,e[f+0],11,-358537222);a=h(c^b^d,a,c,e[f+3],16,-722521979);d=h(a^c^b,d,a,e[f+6],23,76029189);b=h(d^a^c,b,d,e[f+9],4,-640364487);c=h(b^d^a,c,b,e[f+12],11,-421815835);a=h(c^b^d,a,c,e[f+15],16,530742520);d=h(a^c^b,d,a,e[f+2],23,-995338651);b=m(b,d,a,c,e[f+0],6,-198630844);c=m(c,b,d,a,e[f+7],10,1126891415);a=m(a,c,b,d,e[f+14],15,-1416354905);d=m(d,a,c,b,e[f+5],21,-57434055);b=m(b,d,a,c,e[f+12],6,1700485571);c=m(c,b,
d,a,e[f+3],10,-1894986606);a=m(a,c,b,d,e[f+10],15,-1051523);d=m(d,a,c,b,e[f+1],21,-2054922799);b=m(b,d,a,c,e[f+8],6,1873313359);c=m(c,b,d,a,e[f+15],10,-30611744);a=m(a,c,b,d,e[f+6],15,-1560198380);d=m(d,a,c,b,e[f+13],21,1309151649);b=m(b,d,a,c,e[f+4],6,-145523070);c=m(c,b,d,a,e[f+11],10,-1120210379);a=m(a,c,b,d,e[f+2],15,718787259);d=m(d,a,c,b,e[f+9],21,-343485551);b=n(b,r);d=n(d,t);a=n(a,u);c=n(c,v)}e=[b,d,a,c]}switch(g){case p.Raw:return e;case p.Hex:g=[];for(let a=0,c=4*e.length;a<c;a++)g.push("0123456789abcdef".charAt(e[a>>
2]>>a%4*8+4&15)+"0123456789abcdef".charAt(e[a>>2]>>a%4*8&15));return g=g.join("");case p.String:g=[];for(let a=0,c=32*e.length;a<c;a+=8)g.push(String.fromCharCode(e[a>>5]>>>a%32&255));return g=g.join("");case p.Base64:g=[];for(let a=0,c=4*e.length;a<c;a+=3)for(b=(e[a>>2]>>a%4*8&255)<<16|(e[a+1>>2]>>(a+1)%4*8&255)<<8|e[a+2>>2]>>(a+2)%4*8&255,d=0;4>d;d++)8*a+6*d>32*e.length?g.push("\x3d"):g.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b>>6*(3-d)&63));return g=g.join("")}};
q.outputTypes=p;Object.defineProperty(q,"__esModule",{value:!0})});