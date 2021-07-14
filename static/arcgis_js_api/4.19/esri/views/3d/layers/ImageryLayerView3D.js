// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../core/watchUtils ../../layers/ImageryLayerView ./DynamicLayerView3D".split(" "),function(k,l,f,t,u,v,w,m,
x,y,z,n,p,q,r){f=function(h){function g(){var a=h.apply(this,arguments)||this;a.updateWhenStationary=!0;a.redrawDebounced=n.debounce(async b=>{a.redraw((c,e)=>a.redrawImage(c,{signal:e}),b)},2E3);return a}k._inheritsLoose(g,h);var d=g.prototype;d.initialize=function(){this.handles.add([p.whenOnce(this.view.basemapTerrain,"ready",()=>this.initializeMaximumDataResolution()),this.layer.on("redraw",()=>this.redrawDebounced())]);this.updatingHandles.add(this.layer,"exportImageServiceParameters.version",
()=>{this.updatingHandles.addPromise(this.refreshDebounced())});this.updatingHandles.add(this,"timeExtent",()=>this.updatingHandles.addPromise(this.refreshDebounced()))};d.initializeMaximumDataResolution=function(){const a=this.view.basemapTerrain.spatialReference,b=this.layer.fullExtent;b&&a.equals(b.spatialReference)&&(this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY})};d.getFetchOptions=function(){return{timeExtent:this.timeExtent}};d.processResult=async function(a,b,
c){b.imageElement?a.image=b.imageElement:(a.image=document.createElement("canvas"),a.pixelData=b.pixelData,await this.redrawImage(a,{signal:c}))};d.redrawImage=async function(a,b){if(!(a.image instanceof HTMLCanvasElement&&a.pixelData))return Promise.reject();var c=a.image;const e=c.getContext("2d");a=await this.layer.applyRenderer(a.pixelData,b);a=this.layer.applyFilter(a);b=a.pixelBlock;c.width=b.width;c.height=b.height;c=e.createImageData(b.width,b.height);c.data.set(a.pixelBlock.getAsRGBA());
e.putImageData(c,0,0)};return g}(q.ImageryLayerView(r));return f=l.__decorate([m.subclass("esri.views.3d.layers.ImageryLayerView3D")],f)});