// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ./renderers/ClassBreaksRenderer ./renderers/DictionaryRenderer ./renderers/DotDensityRenderer ./renderers/HeatmapRenderer ./renderers/Renderer ./renderers/SimpleRenderer ./renderers/UniqueValueRenderer ./renderers/support/jsonUtils".split(" "),function(l,a,c,d,e,f,g,h,k,b){Object.defineProperty(a,"__esModule",{value:!0});a.ClassBreaksRenderer=c;a.DictionaryRenderer=d;a.DotDensityRenderer=e;a.HeatmapRenderer=f;a.BaseRenderer=g;a.SimpleRenderer=h;a.UniqueValueRenderer=k;a.isRenderer=
function(b){return b instanceof a.BaseRenderer};a.read=b.read;a.write=b.write;a.fromJSON=b.fromJSON;a.rendererTypes={key:"type",base:a.BaseRenderer,typeMap:{heatmap:a.HeatmapRenderer,simple:a.SimpleRenderer,"unique-value":a.UniqueValueRenderer,"class-breaks":a.ClassBreaksRenderer,"dot-density":a.DotDensityRenderer,dictionary:a.DictionaryRenderer}};a.webSceneRendererTypes={key:"type",base:a.BaseRenderer,typeMap:{simple:a.SimpleRenderer,"unique-value":a.UniqueValueRenderer,"class-breaks":a.ClassBreaksRenderer}}});