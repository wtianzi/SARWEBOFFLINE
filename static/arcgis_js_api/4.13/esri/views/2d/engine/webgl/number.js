// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,b){function c(a,b,c){return Math.round(Math.max(Math.min(a,c),b))}Object.defineProperty(b,"__esModule",{value:!0});var d=new Float32Array(1),e=new Uint32Array(d.buffer);b.i8=function(a){return c(a,-128,127)};b.i16=function(a){return c(a,-32768,32767)};b.i32=function(a){return c(a,-2147483648,2147483647)};b.u8=function(a){return c(a,0,255)};b.u16=function(a){return c(a,0,65535)};b.u32=function(a){return c(a,0,4294967295)};b.toUint32=function(a){d[0]=a;return e[0]};
b.toFloat32=function(a){e[0]=a;return d[0]};b.i1616to32=function(a,b){return 65535&a|b<<16};b.i8888to32=function(a,b,c,d){return a&255|(b&255)<<8|(c&255)<<16|d<<24};b.i8816to32=function(a,b,c){return a&255|(b&255)<<8|c<<16};b.numTo32=function(a){return a|0}});