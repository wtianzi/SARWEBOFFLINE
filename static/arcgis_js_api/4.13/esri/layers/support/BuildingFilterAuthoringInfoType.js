// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.filterType=null;a.filterValues=null;return a}f(a,d);e=a;a.prototype.clone=function(){return new e({filterType:this.filterType,filterValues:h.clone(this.filterValues)})};var e;c([b.property({type:String,json:{write:!0}})],
a.prototype,"filterType",void 0);c([b.property({type:[String],json:{write:!0}})],a.prototype,"filterValues",void 0);return a=e=c([b.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],a)}(b.declared(g.JSONSupport))});