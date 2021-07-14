// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../layers/support/fieldUtils ../Color ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ./Renderer ./mixins/VisualVariablesMixin ./support/AttributeColorInfo ./support/DotDensityLegendOptions".split(" "),
function(r,c,b,e,B,C,d,m,t,u,D,E,F,v,n,p,w,x,y,z,A){var k;b=k=function(q){function l(a){a=q.call(this,a)||this;a.attributes=null;a.backgroundColor=new n([0,0,0,0]);a.blendDots=!0;a.dotBlendingEnabled=!0;a.dotShape="square";a.dotSize=1;a.legendOptions=null;a.outline=new p;a.dotValue=null;a.referenceDotValue=null;a.referenceScale=null;a.seed=1;a.type="dot-density";return a}r._inheritsLoose(l,q);var f=l.prototype;f.calculateDotValue=function(a){if(null==this.referenceScale)return this.dotValue;a=a/this.referenceScale*
this.dotValue;return 1>a?1:a};f.getSymbol=function(){return new w({outline:this.outline})};f.getSymbolAsync=async function(){return this.getSymbol()};f.getSymbols=function(){return[this.getSymbol()]};f.getAttributeHash=function(){return this.attributes&&this.attributes.reduce((a,h)=>a+h.getAttributeHash(),"")};f.getMeshHash=function(){return JSON.stringify(this.outline)};f.clone=function(){return new k({attributes:e.clone(this.attributes),backgroundColor:e.clone(this.backgroundColor),dotBlendingEnabled:e.clone(this.dotBlendingEnabled),
dotShape:e.clone(this.dotShape),dotSize:e.clone(this.dotSize),dotValue:e.clone(this.dotValue),legendOptions:e.clone(this.legendOptions),outline:e.clone(this.outline),referenceScale:e.clone(this.referenceScale),visualVariables:e.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};f.getControllerHash=function(){const a=this.attributes.map(g=>g.field||g.valueExpression||""),h=this.outline&&JSON.stringify(this.outline.toJSON())||"";return`${a}-${h}`};f.collectRequiredFields=
async function(a,h){await this.collectVVRequiredFields(a,h);for(const g of this.attributes)g.valueExpression&&await v.collectArcadeFieldNames(a,h,g.valueExpression),g.field&&a.add(g.field)};return l}(y.VisualVariablesMixin(x));c.__decorate([d.property({type:[z],json:{write:!0}})],b.prototype,"attributes",void 0);c.__decorate([d.property({type:n,json:{write:!0}})],b.prototype,"backgroundColor",void 0);c.__decorate([d.property({type:Boolean}),m.aliasOf("dotBlendingEnabled")],b.prototype,"blendDots",
void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"dotBlendingEnabled",void 0);c.__decorate([d.property({type:String,json:{write:!1}})],b.prototype,"dotShape",void 0);c.__decorate([d.property({type:Number,json:{write:!1}})],b.prototype,"dotSize",void 0);c.__decorate([d.property({type:A,json:{write:!0}})],b.prototype,"legendOptions",void 0);c.__decorate([d.property({type:p,json:{default:null,write:!0}})],b.prototype,"outline",void 0);c.__decorate([d.property({type:Number,
json:{write:!0}})],b.prototype,"dotValue",void 0);c.__decorate([d.property({type:Number}),m.aliasOf("dotValue")],b.prototype,"referenceDotValue",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"referenceScale",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"seed",void 0);c.__decorate([t.enumeration({dotDensity:"dot-density"})],b.prototype,"type",void 0);return b=k=c.__decorate([u.subclass("esri.renderers.DotDensityRenderer")],b)});