/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{h as r}from"../../lang.js";import{b as s}from"../../../chunks/deprecate.js";import"../../../chunks/object.js";import"../../../config.js";import{L as e}from"../../../chunks/Logger.js";import"../../../chunks/string.js";function o(o,...t){if(t.length>0)throw new Error("Multi-inheritance unsupported since 4.16");return r("esri-deprecation-warnings")&&s(e.getLogger("esri.core.accessorSupport.decorators"),"'extends declared(superclass)' syntax",{version:"4.16",see:"https://arcg.is/T8fr4"}),o}export{o as declared};
