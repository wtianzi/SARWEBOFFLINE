// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport".split(" "),function(k,e,c,n,p,f,l,m,q,r,t,a){var g;c=new l.JSONMap({slider:"slider",picker:"picker"});a=g=function(d){function h(b){b=d.call(this,b)||
this;b.interactionMode=null;b.numStops=null;b.stopInterval=null;return b}k._inheritsLoose(h,d);h.prototype.clone=function(){return new g({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})};return h}(a.JSONSupport);e.__decorate([f.property({type:c.apiValues,nonNullable:!0,json:{type:c.jsonValues,default:null,read:{reader:c.read},write:{isRequired:!0,writer:c.write}}})],a.prototype,"interactionMode",void 0);e.__decorate([f.property({type:Number,json:{read:{source:"numberOfStops"},
write:{target:"numberOfStops",overridePolicy(){const d=null!=this.stopInterval;return{enabled:!d,isRequired:!d}}}}})],a.prototype,"numStops",void 0);e.__decorate([f.property({type:Number,json:{write:{overridePolicy(){return{isRequired:null==this.numStops}}}}})],a.prototype,"stopInterval",void 0);return a=g=e.__decorate([m.subclass("esri.webdoc.widgets.Range")],a)});