// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ../../core/colorUtils ./colorRampUtils ../../layers/support/RasterInfo ../../layers/support/rasterFunctions/pixelUtils ../../layers/support/rasterFunctions/surfaceUtils".split(" "),
function(H,z,w,x,I,P,B,Q,J,R,S,T,K,L,D,M,n,C){function N(y,u){const {attributeTable:m,bandCount:b}=y;return!x.isSome(m)||1<b||u&&null==m.fields.find(a=>a.name.toLowerCase()===u.toLowerCase())?!1:!0}function O(y){const {bandCount:u,colormap:m}=y;return x.isSome(m)&&m.length&&1===u}const E=I.getLogger("esri.renderers.support.RasterSymbolizer"),F={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767],u32:[0,4294967295],s32:[-2147483648,2147483647],f32:[-3.4*1E39,3.4*1E39],
f64:[-Number.MAX_VALUE,Number.MAX_VALUE]};w=function(y){function u(b){return y.call(this,b)||this}H._inheritsLoose(u,y);var m=u.prototype;m.bind=function(){const {rendererJSON:b}=this;if(!b)return!1;this.lookup={rendererJSON:{}};let a;switch(b.type){case "uniqueValue":a=this._updateUVRenderer(b);break;case "rasterColormap":a=this._updateColormapRenderer(b);break;case "rasterStretch":a=this._updateStretchRenderer(b);break;case "classBreaks":a=this._updateClassBreaksRenderer(b);break;case "rasterShadedRelief":a=
this._updateShadedReliefRenderer(b)}return a};m.symbolize=function(b){let a=b&&b.pixelBlock;if(!this.isValidPixelBlock(a))return a;if(b.simpleStretchParams&&"rasterStretch"===this.rendererJSON.type)return this.simpleStretch(a,b.simpleStretchParams);try{3<a.pixels.length&&(a=n.extractBands(a,[0,1,2]));let d;switch(this.rendererJSON.type){case "uniqueValue":case "rasterColormap":d=this._symbolize_colormap(a);break;case "classBreaks":d=this._symbolize_classBreaks(a);break;case "rasterStretch":d=this._symbolize_stretch(a,
b.bandIds);break;case "rasterShadedRelief":({extent:b}=b),d=this._symbolize_shadedRelief(a,{isGCS:b.spatialReference.isGeographic,resolution:{x:(b.xmax-b.xmin)/a.width,y:(b.ymax-b.ymin)/a.height}})}return d}catch(d){return E.error("symbolize",d.message),a}};m.simpleStretch=function(b,a){if(!this.isValidPixelBlock(b))return b;try{return 3<b.pixels.length&&(b=n.extractBands(b,[0,1,2])),n.stretch(b,a)}catch(d){return E.error("symbolize",d.message),b}};m.generateWebGLParameters=function(b){if(-1<["uniqueValue",
"rasterColormap","classBreaks"].indexOf(this.rendererJSON.type)){var a;const {indexedColormap:c,offset:f}=(null==(a=this.lookup)?void 0:a.colormapLut)||{};return{colormap:c,colormapOffset:f,type:"lut"}}const {pixelBlock:d,isGCS:h,resolution:e,bandIds:k}=b;({rendererJSON:b}=this);return"rasterStretch"===b.type?this.generateStretchWebGLParams(d,b,k):"rasterShadedRelief"===b.type?this.generateShadedReliefWebGLParams(b,h,e):null};m._isLUTChanged=function(b){if(!this.lookup||!this.lookup.rendererJSON)return!0;
if("colorRamp"in this.rendererJSON){const a=this.rendererJSON.colorRamp;if(b)return JSON.stringify(a)!==JSON.stringify(this.lookup.rendererJSON.colorRamp)}return JSON.stringify(this.rendererJSON)!==JSON.stringify(this.lookup.rendererJSON)};m._symbolize_colormap=function(b){return this._isLUTChanged()&&!this.bind()?b:n.colorize(b,this.lookup.colormapLut)};m._symbolize_classBreaks=function(b){const a=-1<["u8","u16","s8","s16"].indexOf(this.rasterInfo.pixelType);return this._isLUTChanged()&&!this.bind()?
b:a?n.colorize(b,this.lookup.colormapLut):n.remapColor(b,this.lookup.remapLut)};m._symbolize_stretch=function(b,a){const {pixelType:d,bandCount:h}=this.rasterInfo,e=this.rendererJSON,k=-1<["u8","u16","s8","s16"].indexOf(d);let c;var {dra:f}=e;var g=e.useGamma?e.gamma:null;if("histogramEqualization"===e.stretchType){var l=f?null:this.lookup.histogramLut;a=this.getStretchCutoff(e,b,a,!l);g=n.stretch(b,{...a,gamma:g});g=n.lookupPixels(g,{lut:f?a.histogramLut:l,offset:0})}else if(k){if(f)f=this.getStretchCutoff(e,
b,a),c=n.createStretchLUT({pixelType:d,...f,gamma:g});else{if(this._isLUTChanged()&&!this.bind())return b;c=this.lookup?this.lookup.stretchLut:null}if(!c)return b;1<h&&(null==a?void 0:a.length)===b.pixels.length&&(null==(l=c)?void 0:l.lut.length)===h&&(c={lut:a.map(q=>c.lut[q]),offset:c.offset});g=n.lookupPixels(b,c)}else f=this.getStretchCutoff(e,b,a),g=n.stretch(b,{...f,gamma:g});if(e.colorRamp){if(this._isLUTChanged(!0)&&!this.bind())return b;g=n.colorize(g,this.lookup.colormapLut)}return g};m._symbolize_shadedRelief=
function(b,a){var d,h,e=this.rendererJSON;a=C.hillshade(b,{...e,...a});if(!e.colorRamp||this._isLUTChanged(!0)&&!this.bind())return a;e=this.lookup?this.lookup.hsvMap:null;if(!e)return a;const k=null!=(d=null==(h=x.unwrap(this.rasterInfo.statistics))?void 0:h[0])?d:{min:0,max:8E3};C.tintHillshade(a,b,e,k);return a};m._updateUVRenderer=function(b){const {bandCount:a,attributeTable:d,statistics:h,pixelType:e}=this.rasterInfo,k=b.field1;if(!k)return!1;var c=-1<["u8","s8"].indexOf(e)&&h&&null!=h[0].min&&
null!=h[0].max;if(!(N(this.rasterInfo,k)||1===a&&c))return!1;const f=[];if(d){const g=d.fields.filter(l=>"value"===l.name.toLowerCase())[0];if(!g)return!1;d.features.forEach(l=>{var q,r=b.uniqueValueInfos.filter(v=>String(v.value)===String(l.attributes[k]))[0];(r=null==r?void 0:null==(q=r.symbol)?void 0:q.color)&&f.push([l.attributes[g.name]].concat(r))})}else{if("value"!==k.toLowerCase())return!1;b.uniqueValueInfos.forEach(g=>{var l;const q=null==g?void 0:null==(l=g.symbol)?void 0:l.color;q&&f.push([parseInt(""+
g.value,10)].concat(q))})}if(0===f.length)return!1;c=n.createColormapLUT({colormap:f});this.lookup={rendererJSON:b,colormapLut:c};return this.canRenderInWebGL=!0};m._updateColormapRenderer=function(b){if(!O(this.rasterInfo))return!1;var a=b.colormapInfos.map(d=>[d.value].concat(d.color)).sort((d,h)=>d[0]-h[0]);if(!a||0===a.length)return!1;a=n.createColormapLUT({colormap:a});this.lookup={rendererJSON:b,colormapLut:a};return this.canRenderInWebGL=!0};m._updateShadedReliefRenderer=function(b){if("elevation"!==
this.rasterInfo.dataType)return!1;if(b.colorRamp){var a=D.convertColorRampToColormap(b.colorRamp,256,!0);a=n.createColormapLUT({colormap:a});const d=[],h=a.indexedColormap;for(let e=0;e<h.length;e+=4){const k=L.toHSV({r:h[e],g:h[e+1],b:h[e+2]});d.push([k.h/60,k.s/100,255*k.v/100])}this.lookup={rendererJSON:b,colormapLut:a,hsvMap:d}}else this.lookup=null;return this.canRenderInWebGL=!0};m._updateClassBreaksRenderer=function(b){var a=-1<["u8","u16","s8","s16"].indexOf(this.rasterInfo.pixelType),d=b.classBreakInfos;
if(null==d||!d.length)return!1;d=d.sort((f,g)=>f.classMaxValue-g.classMaxValue);const h=d[d.length-1];var e=b.minValue;if(!a){a=[];for(var k=0;k<d.length;k++){var c;a.push({value:null!=(c=d[k].classMinValue)?c:e,mappedColor:d[k].symbol.color});e=d[k].classMaxValue}a.push({value:h.classMaxValue,mappedColor:h.symbol.color});this.lookup={rendererJSON:b,remapLut:a};this.canRenderInWebGL=!1;return!0}c=[];e=Math.floor(b.minValue);for(a=0;a<d.length;a++){for(k=d[a];e<k.classMaxValue;e++)c.push([e].concat(k.symbol.color));
e=Math.ceil(k.classMaxValue)}h.classMaxValue===e&&c.push([h.classMaxValue].concat(h.symbol.color));d=n.createColormapLUT({colormap:c,fillUnspecified:!1});this.lookup={rendererJSON:b,colormapLut:d};return this.canRenderInWebGL=!0};m._isHistogramRequired=function(b){return"percentClip"===b||"histogramEqualization"===b};m._updateStretchRenderer=function(b){let {stretchType:a,dra:d}=b;if(!("none"===a||b.statistics||this.rasterInfo.statistics||d))return!1;var h=x.unwrap(b.histograms||this.rasterInfo.histograms);
!this._isHistogramRequired(b.stretchType)||null!=h&&h.length||d||(a="minMax");const {gamma:e,useGamma:k,colorRamp:c}=b;var f=this.rasterInfo.pixelType;const g=!d&&-1<["u8","u16","s8","s16"].indexOf(f);"histogramEqualization"===a?(f=h.map(l=>n.createHistogramEqualizationLUT(l)),this.lookup={rendererJSON:b,histogramLut:f}):g&&(h=this.getStretchCutoff(b),f=n.createStretchLUT({pixelType:f,...h,gamma:k?e:null}),this.lookup={rendererJSON:b,stretchLut:f});c&&(f=D.convertColorRampToColormap(c,256,!0),this.lookup||
(this.lookup={rendererJSON:b}),this.lookup.colormapLut=n.createColormapLUT({colormap:f}),this.lookup.rendererJSON=b);return this.canRenderInWebGL=!0};m.getStretchCutoff=function(b,a,d,h){var e,k=b.stretchType;if(b.dra)if("minMax"===k&&a.statistics)var c=a.statistics.map(t=>[t.minValue,t.maxValue,0,0]);else{var f=n.estimateStatisticsHistograms(a);c=f.statistics;f=f.histograms}else{var g;c=0<(null==(g=b.statistics)?void 0:g.length)?b.statistics:x.unwrap(this.rasterInfo.statistics);f=b.histograms||x.unwrap(this.rasterInfo.histograms)}!this._isHistogramRequired(k)||
null!=(e=f)&&e.length||(k="minMax");var l=c||f?(c||f).length:this.rasterInfo.bandCount;e=[];g=[];let q;let r,v,p;c&&!Array.isArray(c[0])&&(c=c.map(t=>[t.min,t.max,t.avg,t.stddev]));switch(k){case "none":c=F[this.rasterInfo.pixelType]||F.f32;for(a=0;a<l;a++)e[a]=c[0],g[a]=c[1];break;case "minMax":for(a=0;a<l;a++)e[a]=c[a][0],g[a]=c[a][1];break;case "standardDeviation":for(a=0;a<l;a++)e[a]=c[a][2]-b.numberOfStandardDeviations*c[a][3],g[a]=c[a][2]+b.numberOfStandardDeviations*c[a][3],e[a]<c[a][0]&&(e[a]=
c[a][0]),g[a]>c[a][1]&&(g[a]=c[a][1]);break;case "histogramEqualization":for(a=0;a<l;a++)e[a]=f[a].min,g[a]=f[a].max;break;case "percentClip":for(a=0;a<f.length;a++){c=f[a];r=new Uint32Array(c.size);var A=c.counts;q=0;l=(c.max-c.min)/c.size;v=-.5===c.min&&1===l?.5:0;for(p=0;p<c.size;p++)q+=A[p],r[p]=q;A=b.minPercent*q/100;for(p=0;p<c.size;p++)if(r[p]>A){e[a]=c.min+l*(p+v);break}A=(1-b.maxPercent/100)*q;for(p=c.size-2;0<=p;p--)if(r[p]<A){g[a]=c.min+l*(p+2-v);break}}break;default:for(a=0;a<l;a++)e[a]=
c[a][0],g[a]=c[a][1]}let G;"histogramEqualization"===k?(k=f[0].size||256,b=0,h&&(G=f.map(t=>n.createHistogramEqualizationLUT(t)))):(k=b.max||255,b=b.min||0);return this.getSelectedBandCutoffs({minCutOff:e,maxCutOff:g,outMax:k,outMin:b,histogramLut:G},d)};m.getSelectedBandCutoffs=function(b,a){if(null==a||0===a.length)return b;const d=Math.max.apply(null,a),{minCutOff:h,maxCutOff:e,outMin:k,outMax:c,histogramLut:f}=b;return h.length===a.length||h.length<=d?b:{minCutOff:a.map(g=>h[g]),maxCutOff:a.map(g=>
e[g]),histogramLut:f?a.map(g=>f[g]):null,outMin:k,outMax:c}};m.generateStretchWebGLParams=function(b,a,d){var h;let e=null,k=null;var c=this.lookup&&this.lookup.colormapLut;a.colorRamp&&c&&(e=c.indexedColormap,k=c.offset);"histogramEqualization"===a.stretchType&&(a={...a,stretchType:"minMax"});({gamma:c}=a);const f=!!(a.useGamma&&c&&c.some(p=>1!==p)),{minCutOff:g,maxCutOff:l,outMin:q,outMax:r}=this.getStretchCutoff(a,b,d);a=null==(h=b)?void 0:h.getPlaneCount();2===a&&(b=b.clone(),b.statistics=[b.statistics[0]],
b.pixels=[b.pixels[0]]);b=Math.min(3,(null==d?void 0:d.length)||a||this.rasterInfo.bandCount);d=new Float32Array(b);h=e||f?1:255;for(a=0;a<b;a++)d[a]=(r-q)/(l[a]-g[a])/h;const v=new Float32Array(b);if(f)for(a=0;a<b;a++)v[a]=1<c[a]?2<c[a]?6.5+(c[a]-2)**2.5:6.5+100*(2-c[a])**4:1;return{bandCount:b,outMin:q/h,outMax:r/h,minCutOff:g,maxCutOff:l,factor:d,useGamma:f,gamma:f?c:[1,1,1],gammaCorrection:f?v:[1,1,1],colormap:e,colormapOffset:k,type:"stretch"}};m.generateShadedReliefWebGLParams=function(b,a,
d){var h,e,k;let c=null,f=null;const g=this.lookup&&this.lookup.colormapLut;b.colorRamp&&g&&(c=g.indexedColormap,f=g.offset);a=C.calculateHillshadeParams({...b,isGCS:a,resolution:d});d=null==(h=x.unwrap(this.rasterInfo.statistics))?void 0:h[0];return{...a,minValue:null!=(e=d.min)?e:0,maxValue:null!=(k=d.max)?k:8E3,hillshadeType:"traditional"===b.hillshadeType?0:1,type:"hillshade",colormap:c,colormapOffset:f}};m.isValidPixelBlock=function(b){return!!(b&&b.pixels&&0<b.pixels.length&&0!==b.validPixelCount)};
return u}(K.JSONSupport);z.__decorate([B.property({json:{write:!0}})],w.prototype,"rendererJSON",void 0);z.__decorate([B.property({type:M,json:{write:!0}})],w.prototype,"rasterInfo",void 0);z.__decorate([B.property({json:{write:!0}})],w.prototype,"lookup",void 0);z.__decorate([B.property()],w.prototype,"canRenderInWebGL",void 0);return w=z.__decorate([J.subclass("esri.renderers.support.RasterSymbolizer")],w)});