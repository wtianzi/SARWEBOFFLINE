// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],function(c,d,e,f,g){async function h(a){return a=await g.processRasterRendererParameters(a)}c.createRenderer=async function(a){a=await h(a);const b=f.createVectorFieldRenderer(a.layer.rasterInfo);if(!d.isSome(b))throw new e("vector-field-renderer:not-supported","Only vector data is supported");a.flowRepresentation&&(b.flowRepresentation=a.flowRepresentation);a.rotationType&&
(b.rotationType=a.rotationType);a.style&&(b.style=a.style);return{renderer:b}};Object.defineProperty(c,"__esModule",{value:!0})});