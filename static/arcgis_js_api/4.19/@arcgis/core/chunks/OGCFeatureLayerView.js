/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../core/lang.js";import"./Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import s from"../core/Error.js";import"./ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import{fixFields as t}from"../layers/support/fieldUtils.js";const i=i=>{let a=class extends i{initialize(){const{layer:e,view:r}=this;e.source.supportsSpatialReference(r.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return t(this.layer.fields,["*"])}};return e([r()],a.prototype,"layer",void 0),e([r({readOnly:!0})],a.prototype,"availableFields",null),a=e([o("esri.views.layers.OGCFeatureLayerView")],a),a};export{i as O};
