// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/lang ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ../../geometry/SpatialReference ../../geometry ./commonProperties".split(" "),
function(r,c,f,t,g,h,d,e,u,v,w,k,z,A,b,x,B,y){var m;f=new e.JSONMap({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"});g=new e.JSONMap({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",
esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"});h=new e.JSONMap({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"});k=new e.JSONMap({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"});e=new e.JSONMap({esriCentimeters:"centimeters",
esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});b=m=function(q){function n(a){a=q.call(this,a)||this;a.accumulateAttributes=null;a.apiKey=null;a.attributeParameterValues=null;a.directionsLanguage=null;a.directionsLengthUnits=null;a.directionsOutputType=null;a.directionsStyleName=
null;a.directionsTimeAttribute=null;a.doNotLocateOnRestrictedElements=!0;a.findBestSequence=null;a.ignoreInvalidLocations=null;a.impedanceAttribute=null;a.outputGeometryPrecision=null;a.outputGeometryPrecisionUnits=null;a.outputLines="true-shape";a.outSpatialReference=null;a.pointBarriers=null;a.polygonBarriers=null;a.polylineBarriers=null;a.preserveFirstStop=null;a.preserveLastStop=null;a.restrictionAttributes=null;a.restrictUTurns=null;a.returnBarriers=!1;a.returnDirections=!1;a.returnPolygonBarriers=
!1;a.returnPolylineBarriers=!1;a.returnRoutes=!0;a.returnStops=!1;a.returnZ=!0;a.startTime=null;a.startTimeIsUTC=!0;a.stops=null;a.travelMode=null;a.useHierarchy=null;a.useTimeWindows=null;return a}r._inheritsLoose(n,q);var p=n.prototype;p.readStartTime=function(a,l){return null!=l.startTime?new Date(l.startTime):null};p.writeStartTime=function(a,l){l.startTime=a?a.getTime():null};p.clone=function(){return new m(t.clone({accumulateAttributes:this.accumulateAttributes,apiKey:this.apiKey,attributeParameterValues:this.attributeParameterValues,
directionsLanguage:this.directionsLanguage,directionsLengthUnits:this.directionsLengthUnits,directionsOutputType:this.directionsOutputType,directionsStyleName:this.directionsStyleName,directionsTimeAttribute:this.directionsTimeAttribute,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements,findBestSequence:this.findBestSequence,ignoreInvalidLocations:this.ignoreInvalidLocations,impedanceAttribute:this.impedanceAttribute,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:this.outputGeometryPrecisionUnits,
outputLines:this.outputLines,outSpatialReference:this.outSpatialReference,pointBarriers:this.pointBarriers,polygonBarriers:this.polygonBarriers,polylineBarriers:this.polylineBarriers,preserveFirstStop:this.preserveFirstStop,preserveLastStop:this.preserveLastStop,restrictionAttributes:this.restrictionAttributes,restrictUTurns:this.restrictUTurns,returnBarriers:this.returnBarriers,returnDirections:this.returnDirections,returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,
returnRoutes:this.returnRoutes,returnStops:this.returnStops,returnZ:this.returnZ,startTime:this.startTime,startTimeIsUTC:this.startTimeIsUTC,stops:this.stops,travelMode:this.travelMode,useHierarchy:this.useHierarchy,useTimeWindows:this.useTimeWindows}))};return n}(b.JSONSupport);c.__decorate([d.property({type:[String],json:{write:!0}})],b.prototype,"accumulateAttributes",void 0);c.__decorate([d.property(y.apiKey)],b.prototype,"apiKey",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,
"attributeParameterValues",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"directionsLanguage",void 0);c.__decorate([d.property({type:g.apiValues,json:{read:g.read,write:g.write}})],b.prototype,"directionsLengthUnits",void 0);c.__decorate([d.property({type:k.apiValues,json:{read:k.read,write:k.write}})],b.prototype,"directionsOutputType",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"directionsStyleName",void 0);c.__decorate([d.property({type:String,
json:{write:!0}})],b.prototype,"directionsTimeAttribute",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"doNotLocateOnRestrictedElements",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"findBestSequence",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"ignoreInvalidLocations",void 0);c.__decorate([d.property({type:String,json:{read:{source:"impedanceAttributeName"},write:{target:"impedanceAttributeName"}}})],b.prototype,"impedanceAttribute",
void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"outputGeometryPrecision",void 0);c.__decorate([d.property({type:e.apiValues,json:{read:e.read,write:e.write}})],b.prototype,"outputGeometryPrecisionUnits",void 0);c.__decorate([d.property({type:f.apiValues,json:{read:f.read,write:f.write}})],b.prototype,"outputLines",void 0);c.__decorate([d.property({type:x,json:{write:!0}})],b.prototype,"outSpatialReference",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,
"pointBarriers",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"polygonBarriers",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"polylineBarriers",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"preserveFirstStop",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"preserveLastStop",void 0);c.__decorate([d.property({type:[String],json:{write:!0}})],b.prototype,"restrictionAttributes",void 0);c.__decorate([d.property({type:h.apiValues,
json:{read:h.read,write:h.write}})],b.prototype,"restrictUTurns",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnBarriers",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnDirections",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnPolygonBarriers",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnPolylineBarriers",void 0);c.__decorate([d.property({type:Boolean,
json:{write:!0}})],b.prototype,"returnRoutes",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnStops",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"returnZ",void 0);c.__decorate([d.property({type:Date,json:{type:Number,write:!0}})],b.prototype,"startTime",void 0);c.__decorate([u.reader("startTime")],b.prototype,"readStartTime",null);c.__decorate([w.writer("startTime")],b.prototype,"writeStartTime",null);c.__decorate([d.property({type:Boolean,
json:{write:!0}})],b.prototype,"startTimeIsUTC",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"stops",void 0);c.__decorate([d.property({json:{write:!0}})],b.prototype,"travelMode",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"useHierarchy",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"useTimeWindows",void 0);return b=m=c.__decorate([v.subclass("esri.tasks.support.RouteParameters")],b)});