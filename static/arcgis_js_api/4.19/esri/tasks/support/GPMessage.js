// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport".split(" "),function(h,c,d,m,n,e,k,l,p,q,r,a){d=new k.JSONMap({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",
esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});a=function(f){function g(b){b=f.call(this,b)||this;b.description=null;b.type=null;return b}h._inheritsLoose(g,f);return g}(a.JSONSupport);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c.__decorate([e.property({type:String,json:{read:d.read,
write:d.write}})],a.prototype,"type",void 0);return a=c.__decorate([l.subclass("esri.tasks.support.GPMessage")],a)});