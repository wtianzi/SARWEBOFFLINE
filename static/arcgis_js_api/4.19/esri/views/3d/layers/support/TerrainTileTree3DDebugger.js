// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../geometry/Polygon ../../../../geometry ../../../../core/watchUtils ../../../../geometry/support/aaBoundingRect ../../../support/TileTreeDebugger".split(" "),
function(b,f,g,p,q,r,t,u,h,v,w,x,k,y,l,m,n){b.TerrainTileTree3DDebugger=function(d){function c(a){a=d.call(this,a)||this;a.enablePolygons=!1;return a}f._inheritsLoose(c,d);var e=c.prototype;e.initialize=function(){l.init(this,"enabled",a=>this.view.basemapTerrain.renderPatchBorders=a)};e.getTiles=function(){return this.view.basemapTerrain.test.getRenderedTiles().map(a=>({...a,geometry:k.fromExtent(m.toExtent(a.extent,this.view.basemapTerrain.spatialReference))}))};return c}(n.TileTreeDebugger);b.TerrainTileTree3DDebugger=
g.__decorate([h.subclass("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],b.TerrainTileTree3DDebugger);Object.defineProperty(b,"__esModule",{value:!0})});