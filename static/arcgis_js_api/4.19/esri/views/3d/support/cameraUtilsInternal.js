// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/mathUtils","../../../chunks/vec3f64","../../../chunks/vec3"],function(m,g,h,a){const p=h.create(),k=h.create();m.createDirectionUp=function(){return{direction:h.create(),up:h.create()}};m.directionToHeadingTilt=function(d,c,l,e,n){let b=a.normalize(p,d),f=a.dot(b,e);const q=0<f;f=Math.abs(f);.99<f&&(f=Math.abs(a.dot(c,e)),.99>f?(a.copy(b,c),q&&a.scale(b,b,-1)):b=null);c=0;b&&(a.scale(k,e,a.dot(e,b)),a.subtract(b,b,k),c=a.dot(b,n)/(a.length(b)*a.length(n)),a.cross(k,
b,n),c=(0<a.dot(k,e)?1:-1)*g.rad2deg(g.acosClamped(c)));d=g.rad2deg(g.acosClamped(-a.dot(e,d)/a.length(d)));if(!l)return{heading:c,tilt:d};l.heading=c;l.tilt=d;return l};Object.defineProperty(m,"__esModule",{value:!0})});