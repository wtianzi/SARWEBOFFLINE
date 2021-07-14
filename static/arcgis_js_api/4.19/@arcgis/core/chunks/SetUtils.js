/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{i as r}from"./Logger.js";function o(r,o){for(const n of r.entries())if(o(n[0]))return!0;return!1}function n(o,n){const t=new Set;return r(o)&&o.forEach((r=>t.add(r))),r(n)&&n.forEach((r=>t.add(r))),t}export{o as s,n as u};
