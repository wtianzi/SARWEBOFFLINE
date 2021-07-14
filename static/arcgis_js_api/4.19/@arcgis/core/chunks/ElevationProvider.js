/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{c as e}from"./Logger.js";import{i as r}from"./dehydratedFeatures.js";class a{constructor(e,r=null,a=0){this.array=e,this.spatialReference=r,this.offset=a}}function t(e){return"array"in e}function s(a,s,i="ground"){if(r(s))return a.getElevation(s.x,s.y,s.z||0,s.spatialReference,i);if(t(s)){let r=s.offset;return a.getElevation(s.array[r++],s.array[r++],s.array[r]||0,e(s.spatialReference,a.spatialReference),i)}return a.getElevation(s[0],s[1],s[2]||0,a.spatialReference,i)}export{a as S,s as g,t as i};
