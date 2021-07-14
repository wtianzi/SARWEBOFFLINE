// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/has ../../core/promiseUtils ../../core/Collection ../../portal/PortalItem ../../renderers/support/styleUtils ./lazyLayerLoader ../../portal/support/featureCollectionUtils ../../portal/support/portalLayers".split(" "),function(h,G,n,p,q,r,f,k,t){async function l(a,b,c){if(b){var d=[];for(const e of b)b=u(e,c),"GroupLayer"===e.layerType?d.push(v(b,e,c)):d.push(b);d=await n.eachAlways(d);for(const e of d)!e.value||c.filter&&!c.filter(e.value)||a.add(e.value)}}async function u(a,
b){const c=await w(a,b);return x(c,a,b)}async function x(a,b,c){a=new a;a.read(b,c.context);"group"===a.type&&m(b)&&await y(a,b,c.context);await r.loadStyleRenderer(a,c.context);return a}async function w(a,b){var c=b.context;switch(c.origin){case "web-scene":switch(c.layerContainerType){case "basemap":var d=z;break;case "ground":d=A;break;default:d=B}break;default:switch(c.layerContainerType){case "basemap":d=C;break;case "tables":d=D;break;default:d=E}}var e=d;d=a.layerType||a.type;!d&&b&&b.defaultLayerType&&
(d=b.defaultLayerType);b=(b=e[d])?f.layerLookupMap[b]:f.layerLookupMap.UnknownLayer;c=c&&c.portal;"Feature Collection"===a.type?a.itemId&&(c=new q({id:a.itemId,portal:c}),await c.load(),c=(await t.selectLayerClassPath(c)).className||"UnknownLayer",b=f.layerLookupMap[c]):"ArcGISFeatureLayer"===d&&(await k.isMapNotesLayer(a,c)?b=f.layerLookupMap.MapNotesLayer:await k.isRouteLayer(a,c)?b=f.layerLookupMap.RouteLayer:m(a)&&(b=f.layerLookupMap.GroupLayer));a.wmtsInfo&&a.wmtsInfo.url&&a.wmtsInfo.layerIdentifier&&
(b=f.layerLookupMap.WMTSLayer);return b()}function m(a){if("ArcGISFeatureLayer"!==a.layerType||"Feature Collection"===a.type)return!1;a=a.featureCollection;return!!(a&&a.layers&&1<a.layers.length)}async function v(a,b,c){const d=new p;b=l(d,Array.isArray(b.layers)?b.layers:[],c);a=await a;await b;if("group"===a.type)return a.layers.addMany(d),a}async function y(a,b,c){const d=await (0,f.layerLookupMap.FeatureLayer)();b=b.featureCollection;const e=b.showLegend;b=b.layers.map(F=>{const g=new d;g.read(F,
c);null!=e&&g.read({showLegend:e},c);return g});a.layers.addMany(b)}const B={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",
WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},A={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},z={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",
WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},E={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",
WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},D={ArcGISFeatureLayer:"FeatureLayer"},C={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",
WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};h.populateOperationalLayers=l;Object.defineProperty(h,"__esModule",{value:!0})});