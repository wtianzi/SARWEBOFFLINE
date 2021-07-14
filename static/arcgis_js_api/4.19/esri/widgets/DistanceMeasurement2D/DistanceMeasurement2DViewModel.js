// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Handles ../../core/unitUtils ../../core/watchUtils ../support/commonProperties ../support/InteractiveToolViewModel ./DistanceMeasurement2DTool".split(" "),function(h,
c,b,p,y,d,z,q,A,B,C,r,g,t,u,v,k){const w={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,0,255],pathSecondaryColor:[255,255,255,255]},l=p.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel");b=function(m){function f(a){a=m.call(this,a)||this;a.supportedViewType="2d";a._handles=new r;a.geodesicDistanceThreshold=1E5;a.measurement=null;a.measurementLabel=null;a.palette=w;a.tool=null;return a}h._inheritsLoose(f,m);var e=f.prototype;e.initialize=
function(){this._handles.add([t.init(this,["unit","palette","geodesicDistanceThreshold"],(a,n,x)=>{this.tool&&(this.tool[x]=a)})])};e.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)};e.start=function(){return this.createTool()};e.clear=function(){this.removeTool()};e.createToolParams=function(){return{toolConstructor:k["default"],constructorArguments:()=>({geodesicDistanceThreshold:this.geodesicDistanceThreshold,palette:this.palette,unit:this.unit})}};e.logUnsupportedError=
function(){l.error("DistanceMeasurement2D widget is not implemented for SceneView")};e.logError=function(...a){l.error(...a)};e._validateUnit=function(a){return-1!==this.unitOptions.indexOf(a)?a:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]};e._validateUnits=function(a=[]){a=a.filter(n=>-1!==g.measurementLengthUnits.indexOf(n));return 0===a.length?g.measurementLengthUnits.slice():a};h._createClass(f,[{key:"state",get:function(){var a;return this.isDisabled||
!k.isSupported(null==(a=this.view)?void 0:a.spatialReference)?"disabled":this.tool?this.measurement?this.tool.active?"measuring":"measured":"ready":"ready"}},{key:"unit",get:function(){return this._validateUnit(this.defaultUnit)},set:function(a){void 0===a?this._clearOverride("unit"):this._override("unit",this._validateUnit(a))}},{key:"unitOptions",get:function(){return g.measurementLengthUnits},set:function(a){void 0===a?this._clearOverride("unitOptions"):this._override("unitOptions",this._validateUnits(a))}}]);
return f}(v.InteractiveToolViewModel);c.__decorate([d.property(u.defaultUnitPropertyMetadata)],b.prototype,"defaultUnit",void 0);c.__decorate([d.property({type:Number})],b.prototype,"geodesicDistanceThreshold",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"tool.measurement"})],b.prototype,"measurement",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"tool.measurementLabel"})],b.prototype,"measurementLabel",void 0);c.__decorate([d.property()],b.prototype,"palette",void 0);c.__decorate([d.property({readOnly:!0})],
b.prototype,"state",null);c.__decorate([d.property({constructOnly:!0,readOnly:!0})],b.prototype,"tool",void 0);c.__decorate([d.property({type:String})],b.prototype,"unit",null);c.__decorate([d.property({type:[String]})],b.prototype,"unitOptions",null);return b=c.__decorate([q.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],b)});