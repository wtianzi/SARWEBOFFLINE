// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/iteratorUtils ../core/jsonMap ../core/JSONSupport ../core/accessorSupport/decorators ./support/AuthoringInfo".split(" "),function(q,r,k,c,f,g,l,m,n,b,p){var d=new m.default({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary"},{ignoreUnknown:!0});
return function(h){function a(a){a=h.call(this,a)||this;a.authoringInfo=null;a.type=null;return a}k(a,h);a.prototype.getRequiredFields=function(a){return g(this,void 0,void 0,function(){var e;return f(this,function(b){switch(b.label){case 0:if(!this.collectRequiredFields)return[2,[]];e=new Set;return[4,this.collectRequiredFields(e,a)];case 1:return b.sent(),[2,l.valuesOfSet(e).sort()]}})})};a.prototype.getSymbol=function(a,b){};a.prototype.getSymbolAsync=function(a,b){return g(this,void 0,void 0,
function(){return f(this,function(a){return[2]})})};a.prototype.getSymbols=function(){return[]};a.prototype.getAttributeHash=function(){return JSON.stringify(this)};a.prototype.getMeshHash=function(){return JSON.stringify(this)};c([b.property({type:p,json:{write:!0}})],a.prototype,"authoringInfo",void 0);c([b.property({type:d.apiValues,readOnly:!0,json:{type:d.jsonValues,read:!1,write:{writer:d.write,ignoreOrigin:!0}}})],a.prototype,"type",void 0);return a=c([b.subclass("esri.renderers.Renderer")],
a)}(b.declared(n.JSONSupport))});