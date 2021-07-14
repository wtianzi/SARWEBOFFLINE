/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import o from"../core/Error.js";import m from"../symbols/SimpleLineSymbol.js";import r from"../symbols/LabelSymbol3D.js";import e from"../symbols/LineSymbol3D.js";import s from"../symbols/PictureMarkerSymbol.js";import l from"../symbols/PointSymbol3D.js";import i from"../symbols/PolygonSymbol3D.js";import y from"../symbols/SimpleFillSymbol.js";import t from"../symbols/SimpleMarkerSymbol.js";import b from"../symbols/TextSymbol.js";import f from"../symbols/WebStyleSymbol.js";import{isSymbol3D as n}from"../symbols.js";function p(p,S=!1,a=!1,c=!0){if(!p)return{symbol:null};let j;if(n(p)||p instanceof f)j=p.clone();else if("cim"===p.type)j=l.fromCIMSymbol(p);else if(p instanceof m)j=e.fromSimpleLineSymbol(p);else if(p instanceof t)j=l.fromSimpleMarkerSymbol(p);else if(p instanceof s)j=l.fromPictureMarkerSymbol(p);else if(p instanceof y)j=i.fromSimpleFillSymbol(p);else{if(!(p instanceof b))return{error:new o("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${p.type||p.declaredClass}' is unsupported in 3D`,{symbol:p})};j=c?r.fromTextSymbol(p):l.fromTextSymbol(p)}if(S&&(j.id=p.id),a&&n(j))for(let o=0;o<j.symbolLayers.length;++o)j.symbolLayers.getItemAt(o)._ignoreDrivers=!0;return{symbol:j}}export{p as t};
