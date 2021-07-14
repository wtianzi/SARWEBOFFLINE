/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import s from"../config.js";import{L as t}from"./Logger.js";import o from"../core/Error.js";import{join as r}from"../core/urlUtils.js";import e from"../request.js";const i=t.getLogger("esri.assets");function n(s,t){return e(a(s),t)}function a(t){if(!s.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o("assets:path-not-set","config.assetsPath is not set");return r(s.assetsPath,t)}export{n as f,a as g};
