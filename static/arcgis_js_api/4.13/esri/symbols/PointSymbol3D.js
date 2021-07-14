// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/Error ../core/lang ../core/accessorSupport/decorators ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(v,w,q,d,f,r,g,e,h,l,t,m,k,u){var n=f.ofType({base:null,key:"type",typeMap:{icon:h,object:l,text:m}}),p=f.ofType({base:null,key:"type",typeMap:{icon:h,object:l}});return function(f){function b(a){a=
f.call(this)||this;a.verticalOffset=null;a.callout=null;a.symbolLayers=new n;a.type="point-3d";return a}q(b,f);c=b;b.prototype.writeSymbolLayers=function(a,b,e,c){var d=a.filter(function(a){return"text"!==a.type});c&&c.messages&&d.length<a.length&&(a=a.find(function(a){return"text"===a.type}),c.messages.push(new r("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:a})));b[e]=d.map(function(a){return a.write({},c)}).toArray()};b.prototype.supportsCallout=
function(){if(1>(this.symbolLayers?this.symbolLayers.length:0))return!1;for(var a=0,b=this.symbolLayers.items;a<b.length;a++)switch(b[a].type){case "icon":case "text":case "object":continue;default:return!1}return!0};b.prototype.hasVisibleCallout=function(){return k.hasVisibleCallout(this)};b.prototype.hasVisibleVerticalOffset=function(){return k.hasVisibleVerticalOffset(this)};b.prototype.clone=function(){return new c({verticalOffset:g.clone(this.verticalOffset),callout:g.clone(this.callout),styleOrigin:g.clone(this.styleOrigin),
symbolLayers:g.clone(this.symbolLayers),thumbnail:g.clone(this.thumbnail)})};b.fromSimpleMarkerSymbol=function(a){return new c({symbolLayers:[h.fromSimpleMarkerSymbol(a)]})};b.fromPictureMarkerSymbol=function(a){return new c({symbolLayers:[h.fromPictureMarkerSymbol(a)]})};b.fromCIMSymbol=function(a){return new c({symbolLayers:[h.fromCIMSymbol(a)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}})};b.fromTextSymbol=function(a){return new c({symbolLayers:[m.fromTextSymbol(a)]})};
var c;d([e.property({type:u.default,json:{write:!0}})],b.prototype,"verticalOffset",void 0);d([e.property(k.calloutProperty)],b.prototype,"callout",void 0);d([e.property({type:n,json:{type:p,origins:{"web-scene":{type:p}}}})],b.prototype,"symbolLayers",void 0);d([e.writer("web-scene","symbolLayers")],b.prototype,"writeSymbolLayers",null);d([e.enumeration.serializable()({PointSymbol3D:"point-3d"})],b.prototype,"type",void 0);return b=c=d([e.subclass("esri.symbols.PointSymbol3D")],b)}(e.declared(t))});