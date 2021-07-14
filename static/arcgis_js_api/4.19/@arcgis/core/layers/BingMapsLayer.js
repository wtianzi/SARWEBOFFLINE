/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import{i as t,b as r}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import s from"../core/Error.js";import"../chunks/ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import{J as a}from"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import n from"../geometry/SpatialReference.js";import l from"../request.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"./support/fieldUtils.js";import"../chunks/Identifiable.js";import"../chunks/opacityUtils.js";import"./Layer.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as p}from"../chunks/MultiOriginJSONSupport.js";import"../chunks/aaBoundingRect.js";import{O as u}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/commonProperties2.js";import"./support/LOD.js";import m from"./support/TileInfo.js";import{B as c}from"../chunks/BlendLayer.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import g from"./BaseTileLayer.js";const h=new a({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let d=class extends(c(u(p(g)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new m({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:n.WebMercator},spatialReference:n.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return t(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return h.toJSON(this.style)}get bingLogo(){return t(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new s("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,o){if(!this.loaded||r(this.bingMetadata))return null;const s=this.bingMetadata.resourceSets[0].resources[0],i=s.imageUrlSubdomains[t%s.imageUrlSubdomains.length],a=this._getQuadKey(e,t,o);return s.imageUrl.replace("{subdomain}",i).replace("{quadkey}",a)}async fetchAttributionData(){return this.load().then((()=>{if(r(this.bingMetadata))return null;return{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return l(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new s("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new s("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new s("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new s("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return l(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new s("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new s("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,r){let o="";for(let s=e;s>0;s--){let e=0;const i=1<<s-1;0!=(r&i)&&(e+=1),0!=(t&i)&&(e+=2),o+=e.toString()}return o}};e([o({json:{read:!1,write:!1},value:null})],d.prototype,"bingMetadata",null),e([o({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],d.prototype,"type",void 0),e([o({type:m})],d.prototype,"tileInfo",void 0),e([o({type:String,readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"copyright",null),e([o({type:String,json:{write:!1,read:!1}})],d.prototype,"key",void 0),e([o({type:h.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:h.read}}})],d.prototype,"style",void 0),e([o({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],d.prototype,"operationalLayerType",null),e([o({type:String,json:{write:!1,read:!1}})],d.prototype,"culture",void 0),e([o({type:String,json:{write:!1,read:!1}})],d.prototype,"region",void 0),e([o({type:String,json:{write:!0,read:!0}})],d.prototype,"portalUrl",void 0),e([o({type:Boolean,json:{write:!1,read:!1}})],d.prototype,"hasAttributionData",void 0),e([o({type:String,readOnly:!0})],d.prototype,"bingLogo",null),d=e([i("esri.layers.BingMapsLayer")],d);var y=d;export default y;
