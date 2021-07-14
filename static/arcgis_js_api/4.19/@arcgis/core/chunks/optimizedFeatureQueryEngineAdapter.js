/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{a as t,b as e}from"./OptimizedFeatureSet.js";import{g as r}from"./centroid.js";const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(e,r)=>new t(r,e.attributes,null,e.objectId),getGeometry:t=>t.geometry,getCentroid:(t,o)=>(t.centroid||(t.centroid=r(new e,t.geometry,o.hasZ,o.hasM)),t.centroid)};export{o};
