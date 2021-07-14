// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ../../geometry/Point".split(" "),function(g,b,a,m,n,d,p,h,q,r,t,k,l){a=function(e){function f(){var c=e.apply(this,arguments)||this;c.blockWidth=void 0;
c.blockHeight=void 0;c.compression=null;c.origin=null;c.firstPyramidLevel=null;c.maximumPyramidLevel=null;c.pyramidScalingFactor=2;c.pyramidBlockWidth=null;c.pyramidBlockHeight=null;c.isVirtualTileInfo=!1;c.tileInfo=null;c.blockBoundary=null;return c}g._inheritsLoose(f,e);return f}(k.JSONSupport);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"blockWidth",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"blockHeight",void 0);b.__decorate([d.property({type:String,
json:{write:!0}})],a.prototype,"compression",void 0);b.__decorate([d.property({type:l,json:{write:!0}})],a.prototype,"origin",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"firstPyramidLevel",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maximumPyramidLevel",void 0);b.__decorate([d.property()],a.prototype,"pyramidScalingFactor",void 0);b.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"pyramidBlockWidth",void 0);b.__decorate([d.property({type:Number,
json:{write:!0}})],a.prototype,"pyramidBlockHeight",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"isVirtualTileInfo",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"tileInfo",void 0);b.__decorate([d.property()],a.prototype,"blockBoundary",void 0);return a=b.__decorate([h.subclass("esri.layers.support.RasterStorageInfo")],a)});