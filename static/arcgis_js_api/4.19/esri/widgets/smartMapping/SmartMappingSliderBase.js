// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/aliasOf ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../Color ../../core/watchUtils ../support/widgetUtils ../../chunks/index ../Widget ../Slider ../Histogram ./support/utils".split(" "),
function(e,l,h,E,p,F,G,q,m,H,w,I,J,K,u,r,L,k,x,y,z,A){e.SmartMappingSliderBase=function(v){function t(a,c){var b=v.call(this,a,c)||this;b.hasTimeData=null;b.histogram=new z({layout:"vertical"});b.histogramConfig=null;b.inputFormatFunction=null;b.inputParseFunction=null;b.labelFormatFunction=null;b.precision=4;b.slider=new y({layout:"vertical",visibleElements:{labels:!0,rangeLabels:!0},labelInputsEnabled:!0,rangeLabelInputsEnabled:!0});b.state=null;b.viewModel=null;b.zoomOptions=null;const f=b.slider;
null==a||!a.hasTimeData||null!=a&&a.inputParseFunction||null!=a&&a.inputFormatFunction||f.set({labelInputsEnabled:!1,rangeLabelInputsEnabled:!1});b.own(f.on("max-change",d=>b.emit("max-change",d)),f.on("min-change",d=>b.emit("min-change",d)),f.on("thumb-change",d=>b.emit("thumb-change",d)),f.on("thumb-drag",d=>b.emit("thumb-drag",d)),r.watch(l._assertThisInitialized(b),["histogramConfig","max","min","zoomOptions"],()=>{const {histogram:d,histogramConfig:n,viewModel:{max:B,min:C}}=l._assertThisInitialized(b),
D=b.getParamsFromHistogramConfig(n);d.set({...D,max:B,min:C})}),r.watch(l._assertThisInitialized(b),"labelFormatFunction",()=>{const {histogram:d,labelFormatFunction:n}=l._assertThisInitialized(b);d.set({labelFormatFunction:n})}),r.watch(l._assertThisInitialized(b),"hasTimeData",d=>{d=!d||b.inputFormatFunction&&b.inputParseFunction;f.set({labelInputsEnabled:d,rangeLabelInputsEnabled:d})}));b._onMaxZoomCapPointerDown=b._onMaxZoomCapPointerDown.bind(l._assertThisInitialized(b));b._onMinZoomCapPointerDown=
b._onMinZoomCapPointerDown.bind(l._assertThisInitialized(b));return b}l._inheritsLoose(t,v);var g=t.prototype;g.initialize=function(){const {histogramConfig:a={},viewModel:c}=this,{labelFormatFunction:b,max:f,min:d}=c,n=this.getParamsFromHistogramConfig(a);this.own(r.watch(c,"max",()=>this.notifyChange("max")),r.watch(c,"min",()=>this.notifyChange("min")));this.histogram.set({labelFormatFunction:b,...n,max:f,min:d});this.slider.set({viewModel:c})};g.renderContent=function(a,c,b){this.slider.extraNodes=
[a,this.renderHistogram(b)];return k.jsx("div",{class:c},this.slider.render())};g.renderHistogram=function(a){return this.histogramConfig?k.jsx("div",{class:a?a:null},this.histogram.render()):null};g.renderBackgroundFillDefinition=function(a){return k.jsx("pattern",{id:a,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"15",height:"15"},k.jsx("image",{x:"0",y:"0",width:"15",height:"15",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}))};
g.renderRampFillDefinition=function(a,c){return k.jsx("linearGradient",{id:a,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops(c))};g.renderRampFillStops=function(a){return a.reverse().map((c,b)=>this.renderStop(c,b))};g.renderStop=function(a,c){const {color:b,offset:f,opacity:d}=this.getPropsForStop(a);return k.jsx("stop",{key:`${c}-stop`,offset:f,"stop-color":b,"stop-opacity":d})};g.renderZoomCaps=function(){return[this.renderMaxZoomCap(),this.renderMinZoomCap()]};g.renderMinZoomCap=function(){if(this.zoomOptions&&
p.isSome(this.zoomOptions.min))return k.jsx("svg",{key:"bottom",class:this.classes("zoom-cap","zoom-cap--min"),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMinZoomCapPointerDown},k.jsx("polygon",{class:"zoom-cap--mask",key:"mask",fill:"#1B8617",points:"0 11.3846154 30 11.3846154 30 1 25 5.38461538 20 1 15 5.38461538 10 1 5 5.38461538 0 1"}),k.jsx("polygon",{class:"zoom-cap--underline",key:"underline",fill:"#69DCFF",points:"0 0 5 4.38461538 10 0 15 4.38461538 20 0 25 4.38461538 30 0 30 4.61538462 25 9 20 4.61538462 15 9 10 4.61538462 5 9 0 4.61538462"}),
k.jsx("polygon",{class:"zoom-cap--line",key:"line",fill:"#DA5656",points:"0 1 5 5.38461538 10 1 15 5.38461538 20 1 25 5.38461538 30 1 30 5.61538462 25 10 20 5.61538462 15 10 10 5.61538462 5 10 0 5.61538462"}))};g.renderMaxZoomCap=function(){if(this.zoomOptions&&p.isSome(this.zoomOptions.max))return k.jsx("svg",{key:"top",class:this.classes("zoom-cap","zoom-cap--max"),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMaxZoomCapPointerDown},k.jsx("polygon",{class:"zoom-cap--mask",
key:"mask",points:"0 -1.81994377e-12 30 -1.81994377e-12 30 8.23076923 25 3.61538462 20 8.23076923 15 3.61538462 10 8.23076923 5 3.61538462 0 8.23076923"}),k.jsx("polygon",{class:"zoom-cap--underline",key:"underline",points:"0 5.61538462 5 1 10 5.61538462 15 1 20 5.61538462 25 1 30 5.61538462 30 10.2307692 25 5.61538462 20 10.2307692 15 5.61538462 10 10.2307692 5 5.61538462 0 10.2307692"}),k.jsx("polygon",{class:"zoom-cap--line",key:"line",points:"0 4.61538462 5 -1.87329639e-12 10 4.61538462 15 -1.87329639e-12 20 4.61538462 25 -1.87329639e-12 30 4.61538462 30 9.23076923 25 4.61538462 20 9.23076923 15 4.61538462 10 9.23076923 5 4.61538462 0 9.23076923"}))};
g.getPropsForStop=function(a){const {color:c,offset:b}=a;return{color:c instanceof u?c.toCss(!0):u.fromString(c).toCss(!0),offset:(100*b).toFixed(2)+"%",opacity:c instanceof u?c.toRgba()[3]:null}};g.getParamsFromHistogramConfig=function(a){if(!a)return null;const {average:c,barCreatedFunction:b,bins:f,dataLineCreatedFunction:d,dataLineUpdatedFunction:n}=a;return{average:c,barCreatedFunction:b,bins:f,dataLineCreatedFunction:d,dataLineUpdatedFunction:n,dataLines:this._getDataLines(a)}};g._onMaxZoomCapPointerDown=
function(){var {zoomOptions:a}=this;a&&p.isSome(a.max)&&({min:a}=a,this.zoomOptions=p.isSome(a)?{min:a}:null)};g._onMinZoomCapPointerDown=function(){var {zoomOptions:a}=this;a&&p.isSome(a.min)&&({max:a}=a,this.zoomOptions=p.isSome(a)?{max:a}:null)};g._getDataLines=function(a){const {average:c,standardDeviation:b,standardDeviationCount:f}=a;return[...this._getStandardDeviationDataLines(b,c,f||1),...a.dataLines||[]]};g._getStandardDeviationDataLines=function(a,c,b){return A.getDeviationValues(a,c,b).map(f=>
({value:f}))};l._createClass(t,[{key:"max",get:function(){return this.viewModel?this.viewModel.getUnzoomedMax():null},set:function(a){this.viewModel.max=a;this._set("max",a)}},{key:"min",get:function(){return this.viewModel?this.viewModel.getUnzoomedMin():null},set:function(a){this.viewModel.min=a;this._set("min",a)}}]);return t}(x);h.__decorate([m.aliasOf("viewModel.hasTimeData")],e.SmartMappingSliderBase.prototype,"hasTimeData",void 0);h.__decorate([q.property()],e.SmartMappingSliderBase.prototype,
"histogram",void 0);h.__decorate([q.property()],e.SmartMappingSliderBase.prototype,"histogramConfig",void 0);h.__decorate([m.aliasOf("viewModel.inputFormatFunction")],e.SmartMappingSliderBase.prototype,"inputFormatFunction",void 0);h.__decorate([m.aliasOf("viewModel.inputParseFunction")],e.SmartMappingSliderBase.prototype,"inputParseFunction",void 0);h.__decorate([m.aliasOf("viewModel.labelFormatFunction")],e.SmartMappingSliderBase.prototype,"labelFormatFunction",void 0);h.__decorate([q.property()],
e.SmartMappingSliderBase.prototype,"max",null);h.__decorate([q.property()],e.SmartMappingSliderBase.prototype,"min",null);h.__decorate([m.aliasOf("viewModel.precision")],e.SmartMappingSliderBase.prototype,"precision",void 0);h.__decorate([q.property()],e.SmartMappingSliderBase.prototype,"slider",void 0);h.__decorate([m.aliasOf("viewModel.state")],e.SmartMappingSliderBase.prototype,"state",void 0);h.__decorate([m.aliasOf("viewModel.values")],e.SmartMappingSliderBase.prototype,"values",void 0);h.__decorate([q.property()],
e.SmartMappingSliderBase.prototype,"viewModel",void 0);h.__decorate([m.aliasOf("viewModel.zoomOptions")],e.SmartMappingSliderBase.prototype,"zoomOptions",void 0);e.SmartMappingSliderBase=h.__decorate([w.subclass("esri.widgets.smartMapping.SmartMappingSliderBase")],e.SmartMappingSliderBase);Object.defineProperty(e,"__esModule",{value:!0})});