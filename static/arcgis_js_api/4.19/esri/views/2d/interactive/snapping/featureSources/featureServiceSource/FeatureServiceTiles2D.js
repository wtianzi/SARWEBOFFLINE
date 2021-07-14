// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/tslib.es6 ../../../../../../core/has ../../../../../../core/maybe ../../../../../../core/Logger ../../../../../../core/accessorSupport/ensureType ../../../../../../core/accessorSupport/decorators/property ../../../../../../core/jsonMap ../../../../../../core/accessorSupport/decorators/subclass ../../../../../../core/urlUtils ../../../../../../core/uuid ../../../../../../portal/support/resourceExtension ../../../../../../core/Accessor ../../../../../../core/HandleOwner ../../../../../support/layerViewUtils ../../../../../interactive/snapping/featureSources/featureServiceSource/tileUtils".split(" "),
function(a,n,c,A,k,B,C,d,D,t,E,F,G,u,v,w,p){a.FeatureServiceTiles2D=function(q){function f(b){b=q.call(this,b)||this;b.pointOfInterest=null;return b}n._inheritsLoose(f,q);var r=f.prototype;r.scaleEnabled=function(){return w.scaleBoundsPredicate(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)};r.initialize=function(){this.handles.add(this.watch("view.state.viewpoint",()=>this.notifyChange("tilesCoveringView"),!0))};n._createClass(f,[{key:"tiles",get:function(){const b=this.tilesCoveringView,
e=k.isSome(this.pointOfInterest)?this.pointOfInterest:this.view.center;b.sort((l,g)=>p.distanceToTile(e,l)-p.distanceToTile(e,g));return b}},{key:"tilesCoveringView",get:function(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||k.isNone(this.tileInfo)||!this.scaleEnabled)return[];const {spans:b,lodInfo:e}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:l}=e,g=[];for(const {row:x,colFrom:y,colTo:z}of b)for(let m=y;m<=z;m++){var h=e.normalizeCol(m);
h={id:null,level:l,row:x,col:h};this.tileInfo.updateTileInfo(h);g.push(h)}return g}},{key:"tileInfo",get:function(){var b,e;return null!=(b=null==(e=this.view.featuresTilingScheme)?void 0:e.tileInfo)?b:null}},{key:"tileSize",get:function(){return k.isSome(this.tileInfo)?this.tileInfo.size[0]:256}}]);return f}(v.HandleOwnerMixin(u));c.__decorate([d.property({readOnly:!0})],a.FeatureServiceTiles2D.prototype,"tiles",null);c.__decorate([d.property({readOnly:!0})],a.FeatureServiceTiles2D.prototype,"scaleEnabled",
null);c.__decorate([d.property({readOnly:!0})],a.FeatureServiceTiles2D.prototype,"tilesCoveringView",null);c.__decorate([d.property({readOnly:!0})],a.FeatureServiceTiles2D.prototype,"tileInfo",null);c.__decorate([d.property({readOnly:!0})],a.FeatureServiceTiles2D.prototype,"tileSize",null);c.__decorate([d.property({constructOnly:!0})],a.FeatureServiceTiles2D.prototype,"view",void 0);c.__decorate([d.property({constructOnly:!0})],a.FeatureServiceTiles2D.prototype,"layer",void 0);c.__decorate([d.property()],
a.FeatureServiceTiles2D.prototype,"pointOfInterest",void 0);a.FeatureServiceTiles2D=c.__decorate([t.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],a.FeatureServiceTiles2D);Object.defineProperty(a,"__esModule",{value:!0})});