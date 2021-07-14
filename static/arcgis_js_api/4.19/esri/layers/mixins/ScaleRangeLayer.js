// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension".split(" "),function(f,g,b,l,m,n,c,p,k,q,r,t){f.ScaleRangeLayer=a=>{a=function(h){function d(){var e=h.apply(this,arguments)||this;e.minScale=0;e.maxScale=0;return e}
g._inheritsLoose(d,h);g._createClass(d,[{key:"scaleRangeId",get:function(){return`${this.minScale},${this.maxScale}`}}]);return d}(a);b.__decorate([c.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"minScale",void 0);b.__decorate([c.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"maxScale",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"scaleRangeId",null);return a=b.__decorate([k.subclass("esri.layers.mixins.ScaleRangeLayer")],a)};Object.defineProperty(f,
"__esModule",{value:!0})});