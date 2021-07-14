/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{eachAlways as e}from"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import r from"../core/Collection.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"./asyncUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import a from"../portal/PortalItem.js";import{h as t}from"./portalItemUtils.js";import{l as o}from"./styleUtils2.js";import{l as i}from"./lazyLayerLoader.js";import{selectLayerClassPath as y}from"./portalLayers.js";async function s(e,r,o,i){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===o)return!0;if(e.itemId){const o=new a({id:e.itemId,portal:r});return await o.load(),"Feature Collection"===o.type&&t(o,i)}return!1}async function p(r,a,t){if(!a)return;const o=[];for(const e of a){const r=S(e,t);"GroupLayer"===e.layerType?o.push(g(r,e,t)):o.push(r)}const i=await e(o);for(const e of i)!e.value||t.filter&&!t.filter(e.value)||r.add(e.value)}const n={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},l={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},c={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},L={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},m={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function S(e,r){return async function(e,r,a){const t=new e;t.read(r,a.context),"group"===t.type&&d(r)&&await async function(e,r,a){const t=i.FeatureLayer,o=await t(),y=r.featureCollection,s=y.showLegend,p=y.layers.map((e=>{const r=new o;return r.read(e,a),null!=s&&r.read({showLegend:s},a),r}));e.layers.addMany(p)}(t,r,a.context);return await o(t,a.context),t}(await async function(e,r){const t=r.context,o=function(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=c;break;case"ground":r=l;break;default:r=n}break;default:switch(e.layerContainerType){case"basemap":r=u;break;case"tables":r=m;break;default:r=L}}return r}(t);let p=e.layerType||e.type;!p&&r&&r.defaultLayerType&&(p=r.defaultLayerType);const S=o[p];let g=S?i[S]:i.UnknownLayer;const j=t&&t.portal;if(I(e)){if(e.itemId){const r=new a({id:e.itemId,portal:j});await r.load();const t=(await y(r)).className||"UnknownLayer";g=i[t]}}else"ArcGISFeatureLayer"===p&&(await function(e,r){return s(e,r,"notes","Map Notes")}(e,j)?g=i.MapNotesLayer:await function(e,r){return s(e,r,"route","Route Layer")}(e,j)?g=i.RouteLayer:d(e)&&(g=i.GroupLayer));e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(g=i.WMTSLayer);return g()}(e,r),e,r)}function d(e){if("ArcGISFeatureLayer"!==e.layerType||I(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function I(e){return"Feature Collection"===e.type}async function g(e,a,t){const o=new r,i=p(o,Array.isArray(a.layers)?a.layers:[],t),y=await e;if(await i,"group"===y.type)return y.layers.addMany(o),y}export{p as populateOperationalLayers};
