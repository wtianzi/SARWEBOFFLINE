// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./Color ./core/asyncUtils ./core/collectionUtils ./core/compilerUtils ./core/Error ./core/JSONSupport ./core/lang ./core/Loadable ./core/loadAll ./core/Logger ./core/promiseUtils ./core/accessorSupport/decorators ./core/accessorSupport/ensureType ./ground/NavigationConstraint ./layers/BaseElevationLayer ./layers/support/LayerCollection ./layers/support/types ./webdoc/support/opacityUtils".split(" "),
function(l,I,m,x,f,y,n,p,z,A,B,q,C,D,E,g,d,r,F,G,h,H,t){function u(d){return"elevation"===d.type||d.isInstanceOf(G)}var w=E.getLogger("esri.Ground");return function(v){function c(a){var b=v.call(this)||this;b.opacity=1;b.surfaceColor=null;b.navigationConstraint=null;b.layers=new h.default;b.layers.on("after-add",function(a){a=a.item;a.parent&&a.parent!==b&&"remove"in a.parent&&a.parent.remove(a);a.parent=b;H.isOfType(a,["elevation","base-elevation"])||w.error("Layer '"+a.title+", id:"+a.id+"' of type '"+
a.type+"' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.")});b.layers.on("after-remove",function(a){a.item.parent=null});return b}x(c,v);k=c;c.prototype.initialize=function(){this.when().catch(function(a){w.error("#load()","Failed to load ground",a)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)};c.prototype.normalizeCtorArgs=function(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),
a=m({},a),delete a.resourceInfo);return a};Object.defineProperty(c.prototype,"layers",{set:function(a){this._set("layers",p.referenceSetter(a,this._get("layers"),h.default))},enumerable:!0,configurable:!0});c.prototype.writeLayers=function(a,b,c,e){var d=[];a&&(e=m({},e,{layerContainerType:"ground"}),a.forEach(function(a){if("write"in a){var b={};z.typeCast(a)().write(b,e)&&d.push(b)}else e&&e.messages&&e.messages.push(new A("layer:unsupported","Layers ("+a.title+", "+a.id+") of type '"+a.declaredClass+
"' cannot be persisted in the ground",{layer:a}))}));b.layers=d};c.prototype.load=function(a){this.addResolvingPromise(this._loadFromSource(a));return this.when()};c.prototype.loadAll=function(){var a=this;return n.safeCast(D.loadAll(this,function(b){b(a.layers)}))};c.prototype.queryElevation=function(a,b){var c=this;return this._importElevationQuery().then(function(d){d=new d.ElevationQuery;var e=c.layers.filter(u).toArray();return d.queryAll(e,a,b)})};c.prototype.createElevationSampler=function(a,
b){var c=this.layers.filter(u).toArray();return 1===c.length?c[0].createElevationSampler(a,b):this._importElevationQuery().then(function(d){return(new d.ElevationQuery).createSamplerAll(c,a,b)})};c.prototype.clone=function(){var a={opacity:this.opacity,surfaceColor:q.clone(this.surfaceColor),navigationConstraint:q.clone(this.navigationConstraint),layers:this.layers.slice()};this.loaded&&(a.loadStatus="loaded");return(new k({resourceInfo:this.resourceInfo})).set(a)};c.prototype.read=function(a,b){this.resourceInfo||
this._set("resourceInfo",{data:a,context:b});this.inherited(arguments)};c.prototype._loadFromSource=function(a){var b=this.resourceInfo;return b?this._loadLayersFromJSON(b.data,b.context,a):g.resolve(null)};c.prototype._loadLayersFromJSON=function(a,b,c){var d=this,f=b&&b.origin||"web-scene",h=b&&b.portal||null,k=b&&b.url||null;return g.create(function(a){return l(["./portal/support/layersCreator"],a)}).then(function(b){g.throwIfAborted(c);var e=[];a.layers&&Array.isArray(a.layers)&&e.push(n.safeCast(b.populateOperationalLayers(d.layers,
a.layers,{context:{origin:f,url:k,portal:h,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"})));return g.eachAlways(e)}).then(function(){})};c.prototype._importElevationQuery=function(){return g.create(function(a){l(["./layers/support/ElevationQuery"],a)})};var k;f([d.property({type:h.default,json:{read:!1}}),d.cast(p.castForReferenceSetter)],c.prototype,"layers",null);f([d.writer("layers")],c.prototype,"writeLayers",null);f([d.property({readOnly:!0})],c.prototype,
"resourceInfo",void 0);f([d.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:r.Integer,read:{reader:t.transparencyToOpacity,source:"transparency"},write:{writer:function(a,b){b.transparency=t.opacityToTransparency(a)},target:"transparency"}}})],c.prototype,"opacity",void 0);f([d.property({type:y,json:{type:[r.Integer],write:function(a,b){b.surfaceColor=a.toJSON().slice(0,3)}}})],c.prototype,"surfaceColor",void 0);f([d.property({type:F.NavigationConstraint,json:{write:!0}})],c.prototype,
"navigationConstraint",void 0);return c=k=f([d.subclass("esri.Ground")],c)}(d.declared(B.JSONSupportMixin(C)))});