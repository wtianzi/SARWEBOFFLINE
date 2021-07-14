// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Error ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../layers/support/ExportWMSImageParameters ./DynamicLayerView3D ../../layers/WMSLayerView".split(" "),function(q,r,g,f,h,k,d,l,m,n,p){return function(e){function a(){return null!==e&&e.apply(this,arguments)||this}g(a,e);a.prototype.initialize=function(){var a=this;this.layer.supportsSpatialReference(this.view.spatialReference)||
this.addResolvingPromise(k.reject(new h("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view")));this._exportWMSImageParameters=new m({layer:this.layer});this.updatingHandles.add(this._exportWMSImageParameters,"version",function(c){a.updatingHandles.addPromise(a.refreshDebounced())})};a.prototype.destroy=function(){this._exportWMSImageParameters&&(this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),
this._exportWMSImageParameters=null)};a.prototype.createFetchPopupFeaturesQuery=function(a){var c=this.findExtentInfoAt(a),b=c.extent,b=new l(b[0],b[1],b[2],b[3],c.spatialReference),c=c.imageSize,d=c.width,e=b.width/d;return{extent:b,width:d,height:c.height,x:Math.round((a.x-b.xmin)/e),y:Math.round((b.ymax-a.y)/e)}};f([d.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],a.prototype,"suspended",void 0);return a=f([d.subclass("esri.views.3d.layers.WMSLayerView3D")],a)}(d.declared(p.WMSLayerView(n)))});