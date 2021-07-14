// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../request ../renderers/support/jsonUtils ../layers/support/source/DataLayerSource ./support/StatisticDefinition ./support/Query ./Task ./QueryTask".split(" "),function(p,g,f,B,C,k,D,u,E,F,G,v,w,x,q,y,z,A){f=
function(r){function l(a){a=r.call(this,a)||this;a._field=null;a.checkValueRange=null;a.gdbVersion=null;a.source=null;return a}p._inheritsLoose(l,r);var m=l.prototype;m.execute=function(a,e){var {classificationDefinition:c}=a;a={...a.toJSON(),f:"json"};this._field="esri.tasks.support.ClassBreaksDefinition"===c.declaredClass?c.classificationField:c.attributeField;if(this.source){var b;c={source:null==(b=this.source)?void 0:b.toJSON()};a.layer=JSON.stringify(c)}this.gdbVersion&&(a.gdbVersion=this.gdbVersion);
a.classificationDef&&(a.classificationDef=JSON.stringify(a.classificationDef));b={query:a};if(this.requestOptions||e)b={...this.requestOptions,...e,...b};return v(this.parsedUrl.path,b).then(d=>this._handleExecuteResponse(d))};m._handleExecuteResponse=function(a){const e=a&&a.data;if(e){if(!this.checkValueRange)return a=this._processRendererJSON(e),Promise.resolve(a);a=new A({url:this.url});var c=new q({statisticType:"min",onStatisticField:this._field}),b=new q({statisticType:"max",onStatisticField:this._field});
c=new y({outStatistics:[c,b]});return a.execute(c).then(d=>{d=d.features[0].attributes;let h=null,t=null;for(const n in d)0===n.toLowerCase().indexOf("min")?h=d[n]:t=d[n];return this._processRendererJSON(e,h,t)})}};m._processRendererJSON=function(a,e,c){if("classBreaks"===a.type){const b=w.fromJSON(a);return{classBreaks:b.classBreakInfos.map((d,h)=>{0===h&&void 0!==e&&null!==e&&(d.minValue=e);h===b.classBreakInfos.length-1&&void 0!==c&&null!==c&&(d.maxValue=c);return{minValue:d.minValue,maxValue:d.maxValue,
label:d.label}}),normalizationTotal:b.normalizationTotal}}return{uniqueValues:a.uniqueValueInfos.map((b,d)=>{0===d&&void 0!==e&&null!==e&&(b.value=e);d===a.uniqueValueInfos.length-1&&void 0!==c&&null!==c&&(b.value=c);return{count:b.count,value:b.value,label:b.label}})}};p._createClass(l,[{key:"parsedUrl",get:function(){const a=this._parseUrl(this.url);a.path+="/generateRenderer";return a}}]);return l}(z);g.__decorate([k.property()],f.prototype,"checkValueRange",void 0);g.__decorate([k.property()],
f.prototype,"gdbVersion",void 0);g.__decorate([k.property({type:x.DataLayerSource})],f.prototype,"source",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"parsedUrl",null);return f=g.__decorate([u.subclass("esri.tasks.GenerateRendererTask")],f)});