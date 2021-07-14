// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Handles ../../../../core/promiseUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/Point ../../../../geometry/support/aaBoundingRect".split(" "),function(d,f,h,e,k,l,g,m,c,n,p,q){Object.defineProperty(f,"__esModule",{value:!0});d=function(d){function a(b){b=
d.call(this,b)||this;b.location=null;b._updateController=null;b._handles=new l;return b}h(a,d);Object.defineProperty(a.prototype,"renderLocation",{get:function(){if(!this.location)return null;var b=n.vec3f64.create();this.view.renderCoordsHelper.toRenderCoords(this.location,b);return b},enumerable:!0,configurable:!0});a.prototype.initialize=function(){var b=this;this.view.state.isLocal&&(this._handles.add([this.watch(["surfaceView.spatialReference","surfaceView.extent"],function(){return b._update()}),
m.on(this,"surface.layers","change",function(){return b._update()})]),this._update())};a.prototype.destroy=function(){this._handles.destroy()};a.prototype._update=function(){var b=this;this._updateController&&(this._updateController.abort(),this._updateController=null);if(this.surfaceView&&this.surfaceView.extent&&this.surfaceView.spatialReference){var a=q.center(this.surfaceView.extent),a=new p({x:a[0],y:a[1],z:0,spatialReference:this.surfaceView.spatialReference});this.surface&&0<this.surface.layers.length?
(this._set("location",null),this._updateController=g.createAbortController(),this.surface.queryElevation(a,{noDataValue:0,signal:this._updateController.signal}).then(function(a){b._updateController=null;b._set("location",a.geometry)}).catch(function(a){g.isAbortError(a)||a&&"elevation-query:invalid-layer"===a.name||console.error("StableSurfaceCenter failed to update: ",a)})):this._set("location",a)}else this._set("location",null)};e([c.property({constructOnly:!0})],a.prototype,"view",void 0);e([c.property({readOnly:!0,
aliasOf:"view.map.ground"})],a.prototype,"surface",void 0);e([c.property({readOnly:!0,aliasOf:"view.basemapTerrain"})],a.prototype,"surfaceView",void 0);e([c.property({readOnly:!0})],a.prototype,"location",void 0);e([c.property({readOnly:!0,dependsOn:["location"]})],a.prototype,"renderLocation",null);return a=e([c.subclass("esri.views.3d.terrain.StableSurfaceCenter")],a)}(c.declared(k));f.StableSurfaceCenter=d;f.default=d});