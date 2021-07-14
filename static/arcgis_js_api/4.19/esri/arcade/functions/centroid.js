// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/Point","../../geometry/support/intersects"],function(m,t,x){function y(a,b,d){const e={x:0,y:0};b&&(e.z=0);d&&(e.m=0);let g=0;var c=a[0];for(let u=0;u<a.length;u++){const p=a[u];a:if(p.length!==c.length)var f=!1;else{for(f=0;f<p.length;f++)if(p[f]!==c[f]){f=!1;break a}f=!0}if(!1===f){f=z(c,p,b);{var h=p,n=b,l=d;const q={x:(c[0]+h[0])/2,y:(c[1]+h[1])/2};n&&(q.z=(c[2]+h[2])/2);n&&l?q.m=(c[3]+h[3])/2:l&&(q.m=(c[2]+h[2])/2);c=q}c.x*=f;c.y*=f;e.x+=c.x;e.y+=c.y;b&&(c.z*=
f,e.z+=c.z);d&&(c.m*=f,e.m+=c.m);g+=f;c=p}}0<g?(e.x/=g,e.y/=g,b&&(e.z/=g),d&&(e.m/=g)):(e.x=a[0][0],e.y=a[0][1],b&&(e.z=a[0][2]),d&&b?e.m=a[0][3]:d&&(e.m=a[0][2]));return e}function z(a,b,d){const e=b[0]-a[0];a=b[1]-a[1];return d?(b=b[2]-b[2],Math.sqrt(e*e+a*a+b*b)):Math.sqrt(e*e+a*a)}function r(a,b,d=0){for(;a<d;)a+=b;for(d+=b;a>=d;)a-=b;return a}function v(a,b){return Math.atan2(b.y-a.y,b.x-a.x)}function w(a,b,d){var e=a.x-b.x;a=a.y-b.y;var g=d.x-b.x;b=d.y-b.y;return Math.atan2(e*b-g*a,e*g+a*b)}
const k=[0,0];m.angle2D=function(a,b){return r(v(a,b),2*Math.PI)*(180/Math.PI)};m.angleBetween2D=function(a,b,d){return r(w(a,b,d),2*Math.PI)*(180/Math.PI)};m.angleBetweenRad=w;m.angleRad=v;m.bearing2D=function(a,b){return r(Math.PI/2-v(a,b),2*Math.PI)*(180/Math.PI)};m.bearingBetween2D=function(a,b,d){return r(-1*w(a,b,d),2*Math.PI)*(180/Math.PI)};m.centroidMultiPoint=function(a){if(0===a.points.length)return null;var b=0;let d=0,e=0,g=0;for(let c=0;c<a.points.length;c++){const f=a.getPoint(c);!0===
f.hasZ&&(e+=f.z);!0===f.hasM&&(g+=f.m);b+=f.x;d+=f.y;g+=f.m}b={x:b/a.points.length,y:d/a.points.length,spatialReference:null};b.spatialReference=a.spatialReference.toJSON();!0===a.hasZ&&(b.z=e/a.points.length);!0===a.hasM&&(b.m=g/a.points.length);return new t(b)};m.centroidPolyline=function(a){const b={x:0,y:0,spatialReference:a.spatialReference.toJSON()},d={x:0,y:0,spatialReference:a.spatialReference.toJSON()};let e=0,g=0;for(let h=0;h<a.paths.length;h++)if(0!==a.paths[h].length){a:{var c=a.paths[h];
var f=!0===a.hasZ;if(1>=c.length){c=0;break a}let n=0;for(let l=1;l<c.length;l++)n+=z(c[l-1],c[l],f);c=n}0===c?(c=y(a.paths[h],!0===a.hasZ,!0===a.hasM),b.x+=c.x,b.y+=c.y,!0===a.hasZ&&(b.z+=c.z),!0===a.hasM&&(b.m+=c.m),++e):(f=y(a.paths[h],!0===a.hasZ,!0===a.hasM),d.x+=f.x*c,d.y+=f.y*c,!0===a.hasZ&&(d.z+=f.z*c),!0===a.hasM&&(d.m+=f.m*c),g+=c)}return 0<g?(d.x/=g,d.y/=g,!0===a.hasZ&&(d.z/=g),!0===a.hasM&&(d.m/=g),new t(d)):0<e?(b.x/=e,b.y/=e,!0===a.hasZ&&(d.z/=e),!0===a.hasM&&(b.m/=e),new t(b)):null};
m.pathsSelfIntersecting=function(a){for(let n=0;n<a.length;n++){const l=a[n];for(var b=0;b<l.length-1;b++){var d=l[b],e=l[b+1];for(var g=n+1;g<a.length;g++)for(var c=0;c<a[g].length-1;c++){var f=a[g][c],h=a[g][c+1];if(x.segmentIntersects(d,e,f,h,k)&&!(k[0]===d[0]&&k[1]===d[1]||k[0]===f[0]&&k[1]===f[1]||k[0]===e[0]&&k[1]===e[1]||k[0]===h[0]&&k[1]===h[1]))return!0}}b=l.length;if(!(3>b))for(d=0;d<=b-2;d++)for(e=l[d],g=l[d+1],c=d+2;c<=b-2;c++)if(f=l[c],h=l[c+1],x.segmentIntersects(e,g,f,h,k)&&!(k[0]===
e[0]&&k[1]===e[1]||k[0]===f[0]&&k[1]===f[1]||k[0]===g[0]&&k[1]===g[1]||k[0]===h[0]&&k[1]===h[1]))return!0}return!1};Object.defineProperty(m,"__esModule",{value:!0})});