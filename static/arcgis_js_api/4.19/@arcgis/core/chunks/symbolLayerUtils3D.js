/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../core/lang.js";import{f as e}from"./vec3f64.js";import{u as n}from"./aaBoundingBox.js";function r(n,{isPrimitive:r,width:t,depth:o,height:s}){const c=r?10:1;if(null==t&&null==s&&null==o)return[c*n[0],c*n[1],c*n[2]];const a=e(t,o,s);let i;for(let e=0;e<3;e++){const r=a[e];if(null!=r){i=r/n[e];break}}for(let e=0;e<3;e++)null==a[e]&&(a[e]=n[e]*i);return a}const t=n(-.5,-.5,-.5,.5,.5,.5),o=n(-.5,-.5,0,.5,.5,1),s=n(-.5,-.5,0,.5,.5,.5);function c(e){switch(e){case"sphere":case"cube":case"diamond":return t;case"cylinder":case"cone":case"inverted-cone":return o;case"tetrahedron":return s;default:return}}export{r as a,c as o};
