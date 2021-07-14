/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../core/lang.js";import"./Logger.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import s from"../core/Accessor.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import r from"../core/Handles.js";import{e as n}from"./unitUtils.js";import{init as o}from"../core/watchUtils.js";import{T as a}from"./Scheduler.js";import{F as l}from"../views/SceneView.js";let h=class extends s{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new r,this.layerView=null,this.updating=!0}setup(e){this.layerView=e,this.extentIntersection=new l({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,s=t.basemapTerrain,i=t.resourceController.scheduler;this.handles.add([t.on("resize",(()=>this.viewChange())),t.state.watch("camera",(()=>this.viewChange()),!0),i.registerTask(a.FRUSTUM_VISIBILITY,(()=>this.update()),(()=>this.updating)),s.on("elevation-bounds-change",(()=>this.elevationBoundsChange()))]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([o(s,["opacity","wireframe"],(()=>this.updateIsVisibleBelowSurface())),o(t,"map.ground.navigationConstraint.type",(()=>this.updateIsVisibleBelowSurface()))])}destroy(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}_setDirty(){this.updating||this._set("updating",!0)}setExtent(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}viewChange(){this._setDirty()}elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0}set isVisibleBelowSurface(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}updateIsVisibleBelowSurface(){const e=this.layerView.view,t=e.basemapTerrain,s="local"===e.viewingMode,i=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=s||!t.opaque||i}updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.layerView.view;let t;if(this._isVisibleBelowSurface)t=-.3*n(e.spatialReference).radius;else{const{min:s,max:i}=e.basemapTerrain.elevationBounds;t=s-Math.max(1,(i-s)*(1.2-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)}update(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();const e=this.layerView.view.frustum,t=n(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}};e([t({readOnly:!0})],h.prototype,"suspended",void 0),e([t({readOnly:!0})],h.prototype,"updating",void 0),h=e([i("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],h);var u=h;export{u as G};
