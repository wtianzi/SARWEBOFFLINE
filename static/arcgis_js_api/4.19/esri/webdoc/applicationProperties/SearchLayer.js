// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/lang ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ./SearchLayerField".split(" "),function(h,c,a,k,q,l,d,r,m,t,u,v,n,p){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.field=
null;b.id=null;b.subLayer=null;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e(k.clone({field:this.field,id:this.id,subLayer:this.subLayer}))};return f}(n.JSONSupport);c.__decorate([d.property({type:p,json:{write:{isRequired:!0}}})],a.prototype,"field",void 0);c.__decorate([d.property({type:String,json:{write:{isRequired:!0}}})],a.prototype,"id",void 0);c.__decorate([d.property({type:l.Integer,json:{write:!0}})],a.prototype,"subLayer",void 0);return a=e=c.__decorate([m.subclass("esri.webdoc.applicationProperties.SearchLayer")],
a)});