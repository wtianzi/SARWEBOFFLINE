/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../Basemap.js";import"../../chunks/writeUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import e from"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../chunks/arcadeOnDemand.js";import"../../chunks/screenUtils.js";import"../../chunks/basemapUtils.js";import"../../chunks/utils5.js";import{c as r}from"../../chunks/colors2.js";import{c as i,g,a as t,f as l,b as a}from"../../chunks/symbologyUtils.js";import{h as o,t as h}from"../../chunks/utils9.js";const s={light:{color:[153,153,153,.25],width:"0.5px"},lighter:{color:[194,194,194,.25],width:"0.5px"},lightest:{color:[153,153,153,.25],width:"0.5px"}},n={lightBasemaps:{outline:s.lighter,fillOpacity:.8,width:"2px",size:"8px"},darkBasemaps:{outline:s.light,fillOpacity:.6,width:"2px",size:"8px"},grayBasemaps:{outline:s.lightest,fillOpacity:.8,width:"2px",size:"8px"}},b=["highlight-red-gray-bright","highlight-purple-gray-bright","highlight-blue-bright-gray-bright","highlight-green-gray-bright","highlight-yellow-gray-bright"],d=["highlight-pink-gray-dark","highlight-purple-gray-dark","highlight-blue-bright-gray-dark","highlight-green-gray-dark","highlight-brown-gray-dark"],y=["extremes-red-gray-bright","extremes-purple-gray-bright","extremes-blue-bright-gray-bright","extremes-green-gray-bright","extremes-yellow-gray-bright"],p=["extremes-pink-gray-dark","extremes-purple-gray-dark","extremes-blue-bright-gray-dark","extremes-green-gray-dark","extremes-brown-gray-dark"],u=["highlight-orange-gray","highlight-bluegreen-gray","highlight-purple-gray","highlight-pink-gray","highlight-blue-gray","highlight-red-gray","highlight-orange-gray-dark","highlight-blue-gray-dark","highlight-orange-gray-bright","highlight-blue-gray-bright","extremes-orange-gray","extremes-bluegreen-gray","extremes-purple-gray","extremes-pink-gray","extremes-blue-gray","extremes-red-gray","extremes-orange-gray-dark","extremes-blue-gray-dark","extremes-orange-gray-bright","extremes-blue-gray-bright"].concat(b).concat(d).concat(y).concat(p),m=["seq-single-blues","seq-single-greens","seq-single-grays","seq-single-oranges","seq-single-purples","seq-single-reds","seq-multi-bugn","seq-multi-bupu","seq-multi-gnbu","seq-multi-orrd","seq-multi-pubu","seq-multi-pubugn","seq-multi-purd","seq-multi-rdpu","seq-multi-ylgn","seq-multi-ylgnbu","seq-multi-ylorbr","seq-multi-ylorrd"],c=["div-brbg","div-piyg","div-prgn","div-puor","div-rdbu","div-rdgy","div-rdylbu","div-rdylgn","div-spectral"],v=["seq-blue-bright-1","seq-green-bright-1","seq-green-bright-2","seq-green-bright-3","seq-blue-bright-2","seq-blue-bright-3","seq-blue-bright-4","seq-blue-bright-5","seq-red-purple-bright","seq-red-magenta-bright","seq-red-bright-3","seq-red-bright-4","seq-yellow-bright-1","seq-yellow-bright-2","seq-yellow-bright-3","seq-yellow-bright-4","seq-yellow-gray-bright","seq-green-gray-bright","seq-blue-gray-bright","seq-red-gray-bright","seq-gray-redbright","seq-gray-green-bright","seq-gray-blue-bright","seq-gray-purple-bright","seq-plaingray-bright","seq-greengray-bright","seq-coolgray-bright","seq-warmgray-bright","seq-yellow-green-combo-bright","seq-cyan-blue-combo-bright","seq-magenta-purple-combo-bright"],q=["div-yellow-orange-purple-bright","div-yellow-blue-bright-1","div-yellow-blue-bright-2","div-yellow-blue-bright","div-yellow-blue-bright-3","div-yellow-purple-bright-1","div-yellow-purple-bright-2","div-yellow-red-bright-1","div-yellow-red-bright-2","div-yellow-gray-bright-1","div-yellow-gray-bright-2","div-yellow-gray-bright-3","div-purple-green-bright-1","div-purple-green-bright-2","div-pink-yellow-bright-1","div-pink-yellow-bright-2","div-red-blue-bright-1","div-red-blue-bright-2","div-orange-blue-bright-3","div-orange-blue-bright-4","div-red-purple-bright","div-red-gray-bright-1","div-red-gray-bright-2","div-red-gray-bright-3","div-teal-yellow-bright-1","div-teal-yellow-bright-2","div-teal-orange-bright","div-green-red-bright","div-green-magenta-bright","div-green-purple-bright-1","div-green-purple-bright-2","div-green-blue-bright-1","div-green-blue-bright-2","div-green-gray-bright-1","div-green-gray-bright-2","div-green-gray-bright-3","div-blue-green-bright-1","div-blue-yellow-bright-2","div-blue-lightorange-bright","div-blue-orange-bright-1","div-blue-orange-bright-2","div-blue-red-bright-1","div-blue-red-bright-2","div-blue-tan-bright","div-blue-gray-bright-1","div-blue-gray-bright-2","div-blue-gray-bright-3"],w=["div-blue-yellow-brown","div-purple-yellow-brown","div-purple-beige-green","div-teal-yellow-brown","div-yellow-magenta-light","div-green-yellow-blue","div-brown-blue","div-red-green-cyan","div-yellow-slate-teal","div-blue-green-orange","div-purple-orange","div-purple-green","div-teal-orange","div-red-purple-blue","div-yellow-magenta","div-green-blue","div-blue-brown","div-red-cyan","div-yellow-teal"],k={streets:["streets","streets-vector","streets-relief-vector","streets-navigation-vector"],light:["gray","gray-vector"],topo:["topo","topo-vector"],terrain:["terrain"],"national-geographic":["national-geographic"],oceans:["oceans"],osm:["osm"],satellite:["satellite"],hybrid:["hybrid"],dark:["dark-gray","dark-gray-vector","streets-night-vector"]},x=["extremesdiv-orange-gray-blue","extremesdiv-yellow-gray-purple","extremesdiv-red-gray-blue","extremesdiv-green-gray-purple"],j=["point-cloud-elevation-scheme","point-cloud-intensity-scheme"],f={streets:{common:n.lightBasemaps,primary:"seq-yellow-red-purple",secondary:["seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-green-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(v).concat(m).concat(j)},light:{common:n.grayBasemaps,primary:"seq-single-blues",secondary:["seq-yellow-red-purple","seq-orange-red-light","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(v).concat(m).concat(j).filter((e=>"seq-single-blues"!==e))},topo:{common:n.lightBasemaps,primary:"seq-yellow-green-blue",secondary:["seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-red-purple","seq-yellow-orange-red","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(v).concat(m).concat(j)},terrain:{common:n.lightBasemaps,primary:"seq-pink-red",secondary:["seq-yellow-pink-purple","seq-yellow-red-purple","seq-yellow-orange-red","seq-orange-red-light","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(v).concat(m).concat(j)},"national-geographic":{common:n.lightBasemaps,primary:"seq-yellow-orange-red",secondary:["seq-yellow-red-purple","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-green-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(v).concat(m).concat(j)},oceans:{common:n.lightBasemaps,primary:"seq-yellow-green-blue",secondary:["seq-yellow-red-purple","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-blue-red-yellow-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(v).concat(m).concat(j)},osm:{common:n.lightBasemaps,primary:"seq-red-blue-green",secondary:["seq-yellow-pink-purple","seq-yellow-red-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-blue-red-yellow-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(v).concat(m).concat(j)},satellite:{common:n.darkBasemaps,primary:"seq-orange-red-dark",secondary:["seq-yellow-green-blue","seq-red-blue-green","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(v).concat(m).concat(j)},hybrid:{common:n.darkBasemaps,primary:"seq-orange-red-dark",secondary:["seq-yellow-green-blue","seq-red-blue-green","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(v).concat(m).concat(j)},dark:{common:n.grayBasemaps,primary:"seq-blue-gray-bright",secondary:["seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-teal-lightgreen-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(v).concat(m).concat(j).filter((e=>"seq-blue-gray-bright"!==e))}},B=i({themeDictionary:{"high-to-low":{name:"high-to-low",label:"TODO",description:"TODO",basemapGroups:k,schemes:{default:f}},"above-and-below":{name:"above-and-below",label:"TODO",description:"TODO",basemapGroups:k,schemes:{default:{streets:{common:n.lightBasemaps,primary:"div-bluegreen-yellow-orange",secondary:["div-orange-yellow-blue-light","div-green-yellow-redpurple","div-green-yellow-orange","div-green-gray-bright","div-red-blue-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright"].concat(q).concat(w).concat(c)},light:{common:n.grayBasemaps,primary:"div-rdbu",secondary:["div-bluegreen-orange","div-orange-purple","div-bluegreen-purple","div-orange-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)},topo:{common:n.lightBasemaps,primary:"div-orange-pink",secondary:["div-redpurple-blue","div-orange-blue","div-green-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)},terrain:{common:n.lightBasemaps,primary:"div-bluegreen-orange",secondary:["div-bluegreen-redpurple","div-green-redpurple","div-green-orange","div-blue-yellow-red-bright","div-green-gray-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)},"national-geographic":{common:n.lightBasemaps,primary:"div-orange-yellow-blue-light",secondary:["div-bluegreen-yellow-orange","div-green-yellow-redpurple","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)},oceans:{common:n.lightBasemaps,primary:"div-red-yellow-pink",secondary:["div-blue-green","div-bluegreen-yellow-redpurple","div-bluegreen-yellow-orange","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)},osm:{common:n.lightBasemaps,primary:"div-bluegreen-pink",secondary:["div-bluegreen-redpurple","div-bluegreen-orange","div-orange-pink","div-green-gray-bright","div-red-blue-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)},satellite:{common:n.darkBasemaps,primary:"div-blue-green-bright",secondary:["div-red-yellow-purple","div-orange-yellow-pink","div-orange-yellow-blue-light","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-orange-yellow-blue-dark","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-lightblue-yellow-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)},hybrid:{common:n.darkBasemaps,primary:"div-blue-green-bright",secondary:["div-red-yellow-purple","div-orange-yellow-pink","div-orange-yellow-blue-light","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-orange-yellow-blue-dark","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-lightblue-yellow-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)},dark:{common:n.grayBasemaps,primary:"div-blue-red-bright-1",secondary:["div-blue-green-bright","div-yellow-gray-purple","div-lightblue-yellow-bright","div-red-gray-blue","div-green-gray-purple","div-orange-gray-blue","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q).concat(w).concat(c)}}}},"centered-on":{name:"centered-on",label:"TODO",description:"TODO",basemapGroups:k,schemes:{default:{streets:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"].concat(d)},light:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-purple","highlight-orange-gray","highlight-purple-gray"].concat(d)},topo:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-pink","highlight-orange-gray","highlight-pink-gray"].concat(d)},terrain:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"].concat(d)},"national-geographic":{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"highlight-orange",primaryGray:"highlight-orange-gray",secondary:["highlight-blue","highlight-orange-gray","highlight-blue-gray"].concat(d)},oceans:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"highlight-red",primaryGray:"highlight-red-gray",secondary:["highlight-pink","highlight-red-gray","highlight-pink-gray"].concat(d)},osm:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"highlight-pink",primaryGray:"highlight-pink-gray",secondary:["highlight-bluegreen","highlight-pink-gray","highlight-bluegreen-gray"].concat(d)},satellite:{common:{outline:s.light,width:"2px",size:"8px"},primary:"highlight-orange-dark",primaryGray:"highlight-orange-gray-dark",secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"].concat(b)},hybrid:{common:{outline:s.light,width:"2px",size:"8px"},primary:"highlight-orange-dark",primaryGray:"highlight-orange-gray-dark",secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"].concat(b)},dark:{common:{outline:s.light,width:"2px",size:"8px"},primary:"highlight-orange-bright",primaryGray:"highlight-orange-gray-bright",secondary:["highlight-blue-bright","highlight-orange-gray-bright","highlight-blue-gray-bright"].concat(b)}}}},extremes:{name:"extremes",label:"TODO",description:"TODO",basemapGroups:k,schemes:{default:{streets:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"extremesdiv-bluegreen-yellow-orange",primaryGray:"extremes-bluegreen-gray",secondary:["extremesdiv-orange-yellow-blue-light","extremesdiv-green-yellow-redpurple","extremesdiv-green-yellow-orange","extremes-orange","extremes-bluegreen","extremes-orange-gray","extremes-bluegreen-gray"].concat(p)},light:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"extremesdiv-orange-purple",primaryGray:"extremes-orange-gray",secondary:["extremesdiv-bluegreen-purple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-orange","extremes-purple","extremes-orange-gray","extremes-purple-gray"].concat(p)},topo:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"extremesdiv-orange-pink",primaryGray:"extremes-orange-gray",secondary:["extremesdiv-redpurple-blue","extremesdiv-orange-blue","extremesdiv-green-pink","extremes-orange","extremes-pink","extremes-orange-gray","extremes-pink-gray"].concat(p)},terrain:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"extremesdiv-bluegreen-orange",primaryGray:"extremes-bluegreen-gray",secondary:["extremesdiv-bluegreen-redpurple","extremesdiv-green-redpurple","extremesdiv-green-orange","extremes-orange","extremes-bluegreen","extremes-orange-gray","extremes-bluegreen-gray"].concat(p)},"national-geographic":{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-light",primaryGray:"extremes-orange-gray",secondary:["extremesdiv-bluegreen-yellow-orange","extremesdiv-green-yellow-redpurple","extremes-orange","extremes-blue","extremes-orange-gray","extremes-blue-gray"].concat(p)},oceans:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"extremesdiv-red-yellow-pink",primaryGray:"extremes-red-gray",secondary:["extremesdiv-blue-green","extremesdiv-bluegreen-yellow-redpurple","extremesdiv-bluegreen-yellow-orange","extremes-red","extremes-pink","extremes-red-gray","extremes-pink-gray"].concat(p)},osm:{common:{outline:s.lighter,width:"2px",size:"8px"},primary:"extremesdiv-bluegreen-pink",primaryGray:"extremes-bluegreen-gray",secondary:["extremesdiv-bluegreen-redpurple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-pink","extremes-bluegreen","extremes-pink-gray","extremes-bluegreen-gray"].concat(p)},satellite:{common:{outline:s.light,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-dark",primaryGray:"extremes-orange-gray-dark",secondary:["extremesdiv-red-yellow-purple","extremesdiv-orange-yellow-pink","extremesdiv-orange-yellow-blue-light","extremes-orange-dark","extremes-blue-dark","extremes-orange-gray-dark","extremes-blue-gray-dark"].concat(y)},hybrid:{common:{outline:s.light,width:"2px",size:"8px"},primary:"extremesdiv-orange-yellow-blue-dark",primaryGray:"extremes-orange-gray-dark",secondary:["extremesdiv-red-yellow-purple","extremesdiv-orange-yellow-pink","extremesdiv-orange-yellow-blue-light","extremes-orange-dark","extremes-blue-dark","extremes-orange-gray-dark","extremes-blue-gray-dark"].concat(y)},dark:{common:{outline:s.light,width:"2px",size:"8px"},primary:"extremesdiv-orange-gray-blue",primaryGray:"extremes-orange-gray-bright",secondary:["extremesdiv-yellow-gray-purple","extremesdiv-red-gray-blue","extremesdiv-green-gray-purple","extremes-orange-bright","extremes-blue-bright","extremes-orange-gray-bright","extremes-blue-gray-bright"].concat(y)}}}},above:{name:"above",label:"TODO",description:"TODO",basemapGroups:k,schemes:{default:f}},below:{name:"below",label:"TODO",description:"TODO",basemapGroups:k,schemes:{default:f}},"90-10":{name:"90-10",label:"TODO",description:"TODO",basemapGroups:k,schemes:{default:f}}}});function C(e){return g(B,e)}function O(e){const r=e.theme,i=t({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:B.get(r)});if(!i)return;let g=i.schemesInfo;const l=g.common,{basemapId:a,basemapTheme:o}=i;!e.worldScale||"centered-on"!==r&&"extremes"!==r||(g={...g},g.secondary=g.secondary.slice(0),g.secondary.push(g.primary),g.primary=g.primaryGray,delete g.primaryGray,g.secondary=g.secondary.filter((e=>{const r=e.indexOf("gray")>-1,i=x.indexOf(e)>-1;return e!==g.primary&&r&&!i})));const h={...e,basemap:a};return{primaryScheme:S(h,g.primary,l),secondarySchemes:g.secondary.map((e=>S(h,e,l))).filter(Boolean),basemapId:a,basemapTheme:o}}function z(e){return l(e.name,O(e))}function D(e){return a(e.includedTags,e.excludedTags,O(e))}function G(e){let r,i,g;const l=e.id;if(l){const e=l.split("/");e&&(r=e[0],i=e[1],g=e[2])}const a=t({basemap:i,theme:B.get(r)});if(!a)return;const{schemesInfo:o}=a;return S({theme:r,basemap:i,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view},g,o.common)}function T(r){if(!r)return;const i={...r};return i.colors=i.colors.map((r=>new e(r))),i.colorsForClassBreaks=i.colorsForClassBreaks.map((r=>({numClasses:r.numClasses,colors:r.colors.map((r=>new e(r)))}))),i.noDataColor&&(i.noDataColor=new e(i.noDataColor)),"outline"in i&&i.outline&&(i.outline={color:i.outline.color&&new e(i.outline.color),width:i.outline.width}),i}function F(e){const r=e;return r.colors.reverse(),r.colorsForClassBreaks.forEach((e=>{e.colors.reverse()})),r}function P(e){const r=e.theme,i=e.colors,g=B.get(r).supportedBasemaps,l=[],a={theme:r,basemap:null,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view};return g.forEach((e=>{const g=t({basemap:e,theme:B.get(r)}).schemesInfo;if(a.basemap=e,g){const e=U(S(a,g.primary,g.common),i);e&&l.push(e),g.secondary.forEach((e=>{const r=U(S(a,e,g.common),i);r&&l.push(r)}))}})),l}function U(e,r){let i,g;if(g=o(e.colors,r),g)i=g>0?e:F(e);else{let t;e.colorsForClassBreaks.some((e=>(e.numClasses===r.length&&(t=e.colors),!!t))),t&&(g=o(t,r),g&&(i=g>0?e:F(e)))}return i}function S(i,g,t){const l=r[g];if(!l)return;const a=i.theme,o="mesh"!==i.geometryType&&i.worldScale?i.view:null;let s=t.fillOpacity;null==s&&-1!==u.indexOf(g)&&(s=.8);const n="below"===i.theme,b=n?[...l.stops].reverse():l.stops,d=[];for(const e in l)if("stops"!==e&&"name"!==e&&"tags"!==e){const r=+e;d.push({numClasses:r,colors:n?[...l[r]].reverse():l[r]})}const y=-1!==u.indexOf(g)?"#ffffff":"#aaaaaa",p=a+"/"+i.basemap+"/"+g,m=s||1;switch(i.geometryType){case"point":case"multipoint":return function(r,i){return{id:r.id,name:r.name,tags:[...r.tags],theme:r.theme,colors:r.colors.map((r=>new e(r))),colorsForClassBreaks:E(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),outline:{color:new e(r.outline.color),width:r.outline.width},size:i&&"3d"===i.type?h(r.size,i):r.size,opacity:r.opacity}}({id:p,name:l.name,tags:l.tags,theme:a,opacity:m,colors:b,colorsForClassBreaks:d,noDataColor:y,outline:t.outline,size:t.size},o);case"polyline":return function(r,i){return{id:r.id,name:r.name,tags:[...r.tags],theme:r.theme,colors:r.colors.map((r=>new e(r))),colorsForClassBreaks:E(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),width:i&&"3d"===i.type?h(r.width,i):r.width,opacity:r.opacity}}({id:p,name:l.name,tags:l.tags,theme:a,opacity:m,colors:b,colorsForClassBreaks:d,noDataColor:y,width:t.width},o);case"polygon":return function(r,i){return{id:r.id,name:r.name,tags:[...r.tags],theme:r.theme,colors:r.colors.map((r=>new e(r))),colorsForClassBreaks:E(r.colorsForClassBreaks),noDataColor:new e(r.noDataColor),outline:{color:new e(r.outline.color),width:r.outline.width},opacity:r.opacity,size:i&&"3d"===i.type?h(r.size,i):r.size}}({id:p,name:l.name,tags:l.tags,theme:a,opacity:m,colors:b,colorsForClassBreaks:d,noDataColor:y,outline:t.outline,size:"12px"},o);case"mesh":{const r={id:p,name:l.name,tags:l.tags,theme:a,opacity:m,colors:b,colorsForClassBreaks:d,noDataColor:y};return{id:(c=r).id,name:c.name,tags:[...c.tags],theme:c.theme,colors:c.colors.map((r=>new e(r))),colorsForClassBreaks:E(c.colorsForClassBreaks),noDataColor:new e(c.noDataColor),opacity:c.opacity}}default:return}var c}function E(r){return r.map((r=>({numClasses:r.numClasses,colors:r.colors.map((r=>new e(r)))})))}export{T as cloneScheme,F as flipColors,P as getMatchingSchemes,G as getSchemeById,z as getSchemeByName,O as getSchemes,D as getSchemesByTag,C as getThemes};