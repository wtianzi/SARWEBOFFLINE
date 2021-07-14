/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import e from"../symbols/Symbol.js";import s from"../symbols/PolygonSymbol3D.js";import{symbolTypes as o,symbolTypesRenderer as r,symbolTypesRenderer3D as t}from"../symbols.js";import{write as p}from"../symbols/support/jsonUtils.js";const i={types:r,json:{write:{writer:p},origins:{"web-scene":{types:t,write:{writer:p}}}}},l={types:{base:e,key:"type",typeMap:{"simple-fill":o.typeMap["simple-fill"],"picture-fill":o.typeMap["picture-fill"],"polygon-3d":o.typeMap["polygon-3d"]}},json:{write:{writer:p},origins:{"web-scene":{type:s,write:{writer:p}}}}};export{i as a,l as r};
