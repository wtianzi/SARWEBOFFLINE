/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../core/lang.js";import{b as s}from"./Logger.js";import o from"../symbols/SimpleLineSymbol.js";import r from"../symbols/SimpleFillSymbol.js";import m from"../symbols/SimpleMarkerSymbol.js";import e from"../symbols/TextSymbol.js";import{d as a,a as t,b as l,c as n,e as i,f,g as p}from"./defaultsJSON.js";const S=m.fromJSON(a),c=o.fromJSON(t),u=r.fromJSON(l),b=e.fromJSON(n);function y(o){if(s(o))return null;switch(o.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return c;case"polygon":case"extent":return u}return null}const J=m.fromJSON(i),N=o.fromJSON(f),O=r.fromJSON(p);export{O as a,J as b,S as c,b as d,N as e,c as f,y as g,u as h};
