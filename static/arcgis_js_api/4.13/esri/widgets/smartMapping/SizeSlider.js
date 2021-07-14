// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/i18n!./SizeSlider/nls/SizeSlider ../../Color ../../core/maybe ../../core/accessorSupport/decorators ../../renderers/visualVariables/SizeVariable ../../renderers/visualVariables/support/SizeStop ./SmartMappingSliderBase ./SizeSlider/SizeSliderViewModel ./support/utils ./../support/widget".split(" "),function(C,D,r,y,h,z,n,t,e,u,v,A,B,p,l){var w={trackFillColor:new n([149,
149,149]),trackBackgroundColor:new n([224,224,224])};return function(x){function b(a){a=x.call(this)||this;a._maxRampFillWidth=1;a._minRampFillWidth=.2;a._rampNode=null;a.label=z.widgetLabel;a.stops=null;a.style=r({},w);a.viewModel=new B;a.zoomOptions=null;return a}y(b,x);q=b;b.prototype.castStyle=function(a){return r({},w,a)};b.fromRendererResult=function(a,f){var c=a.statistics,g=c.avg,b=c.max,d=c.min,c=c.stddev;a=a.visualVariables[0];var k=p.getSizesFromVariable(a);return new q({max:b,min:d,stops:[{value:a.minDataValue,
size:k[1]},{value:a.maxDataValue,size:k[0]}],histogramConfig:{average:g,standardDeviation:c,bins:f?f.bins:[]}})};b.prototype.updateFromRendererResult=function(a,f){var c=a.statistics,b=c.avg,m=c.max,d=c.min,c=c.stddev;a=a.visualVariables[0];var k=p.getSizesFromVariable(a);this.set({max:m,min:d,stops:[{value:a.minDataValue,size:k[1]},{value:a.maxDataValue,size:k[0]}],histogramConfig:{average:b,standardDeviation:c,bins:f?f.bins:[]}})};b.prototype.updateVisualVariable=function(a){var f=a.clone(),c=this.stops;
if(!a||!c)return null;if(f.stops)return f.stops=c,f;a=c[0];var c=c[c.length-1],b=f.maxSize,m=f.minSize;if(b instanceof u){var d=b.stops,k=c.size/d[0].size,d=d.map(function(a){a.size*=k;return a});b.stops=d}else b=c.size;if(m instanceof u){var d=m.stops,e=a.size/d[0].size,d=d.map(function(a){a.size*=e;return a});m.stops=d}else m=a.size;f.set({maxDataValue:c.value,minDataValue:a.value,maxSize:b,minSize:m});return f};b.prototype.updateFromVisualVariable=function(a){if(a){var b=a.maxDataValue,c=a.minDataValue,
g=a.stops;g?this.stops=g:(a=p.getSizesFromVariable(a),g=a[0],this.stops=[new v({value:c,size:a[1]}),new v({value:b,size:g})])}};b.prototype.render=function(){var a,b=this.label,c="disabled"===this.state,g=this.classes("esri-size-slider","esri-widget","esri-widget--panel",(a={},a["esri-disabled"]=c,a));return l.tsx("div",{"aria-label":b,class:g},c?null:this.renderContent(this.renderRamp(),"esri-size-slider__slider-container","esri-size-slider__histogram-container"))};b.prototype.renderRamp=function(){var a=
this.zoomOptions;return l.tsx("div",{afterCreate:l.storeNode,bind:this,class:"esri-size-slider__ramp","data-node-ref":"_rampNode"},l.tsx("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},l.tsx("rect",{x:"0",y:"0",fill:this._getFillFromColor(this.style.trackBackgroundColor),height:"100%",width:"100%"}),this.renderPath()),a?this.renderZoomCaps():null)};b.prototype.renderPath=function(){if(this._rampNode){var a=this._rampNode,b=a.offsetHeight,b=void 0===b?0:b,a=a.offsetWidth,c=void 0===a?0:a;
if(t.isSome(b)&&t.isSome(c)){var g=this.stops,a=this.style,e=this.values,d=this.viewModel,k=d.max,d=d.min,h=[this._maxRampFillWidth,this._minRampFillWidth];g[0].size<g[g.length-1].size&&h.reverse();b=p.getPathForSizeStops({bottomValue:e[0],bottomWidth:h[0],max:k,min:d,pathHeight:b,pathWidth:c,topValue:e[1],topWidth:h[1]});return l.tsx("path",{d:b,fill:this._getFillFromColor(a.trackFillColor)})}}};b.prototype._getFillFromColor=function(a){return a instanceof n?a.toCss(!0):n.fromString(a).toCss(!0)};
var q;h([e.property()],b.prototype,"label",void 0);h([e.aliasOf("viewModel.stops")],b.prototype,"stops",void 0);h([e.property(),l.renderable()],b.prototype,"style",void 0);h([e.cast("style")],b.prototype,"castStyle",null);h([e.property(),l.renderable("viewModel.hasTimeData viewModel.labelFormatFunction viewModel.max viewModel.min viewModel.stops viewModel.values viewModel.zoomOptions".split(" "))],b.prototype,"viewModel",void 0);h([e.aliasOf("viewModel.zoomOptions")],b.prototype,"zoomOptions",void 0);
return b=q=h([e.subclass("esri.widgets.smartMapping.SizeSlider")],b)}(e.declared(A.SmartMappingSliderBase))});