// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","./tsSupport/generatorHelper"],function(n,p,m){var e;(function(e){function k(c,a,d,f){for(var b=a,e=d>>>1,h=c[b-1];a<=e;){a=b<<1;a<d&&0>f(c[a-1],c[a])&&++a;var g=c[a-1];if(0>=f(g,h))break;c[b-1]=g;b=a}c[b-1]=h}function l(c,a){return c<a?-1:c>a?1:0}e.sort=function(c,a,d,f){void 0===a&&(a=0);void 0===d&&(d=c.length);void 0===f&&(f=l);for(var b=d>>>1;b>a;b--)k(c,b,d,f);for(var e=a+1,b=d-1;b>a;b--)d=c[a],c[a]=c[b],c[b]=d,k(c,e,b,f)};e.iterableSort=function(c,a,d,f){var b,e,
h;return m(this,function(g){switch(g.label){case 0:void 0===a&&(a=0),void 0===d&&(d=c.length),void 0===f&&(f=l),b=d>>>1,g.label=1;case 1:if(!(b>a))return[3,4];k(c,b,d,f);return[4];case 2:g.sent(),g.label=3;case 3:return b--,[3,1];case 4:e=a+1,b=d-1,g.label=5;case 5:if(!(b>a))return[3,8];h=c[a];c[a]=c[b];c[b]=h;k(c,e,b,f);return[4];case 6:g.sent(),g.label=7;case 7:return b--,[3,5];case 8:return[2]}})}})(e||(e={}));return e});