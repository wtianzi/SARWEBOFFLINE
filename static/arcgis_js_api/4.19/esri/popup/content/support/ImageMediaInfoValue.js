// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/JSONSupport".split(" "),function(h,c,a,m,n,f,p,k,q,r,t,l){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.linkURL=
null;b.sourceURL=null;return b}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({linkURL:this.linkURL,sourceURL:this.sourceURL})};return e}(l.JSONSupport);c.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"linkURL",void 0);c.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"sourceURL",void 0);return a=d=c.__decorate([k.subclass("esri.popup.content.support.ImageMediaInfoValue")],a)});