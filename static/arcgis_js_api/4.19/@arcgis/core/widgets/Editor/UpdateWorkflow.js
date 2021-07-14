/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{i as s}from"../../chunks/Logger.js";import"../../chunks/string.js";import{f as e}from"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import{createAbortController as o,onAbort as i,createAbortError as r,throwIfAborted as a,isAborted as p}from"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import"../../chunks/vec3f64.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import"../../Graphic.js";import"../../core/Handles.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/symbolConversion.js";import"../../chunks/diffUtils.js";import"../../chunks/MemCache.js";import"../../chunks/ItemCache.js";import"../../chunks/utils3.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils2.js";import{watch as n}from"../../core/watchUtils.js";import"../../core/HandleOwner.js";import"../../symbols/support/symbolUtils.js";import{h as l}from"../../chunks/layerViewUtils.js";import"../../chunks/hitTestSelectUtils.js";import"../../chunks/drapedUtils.js";import c from"./Edits.js";import u from"./Workflow.js";import{b as d,c as j,f as h,g as y,a as b}from"../../chunks/workflowUtils.js";import g from"./UpdateWorkflowData.js";var f;let k=f=class extends u{constructor(t){super(t),this.type="update"}static create(t,s,e){const o=new g({edits:new c,viewModel:t}),i=new f({data:o,afterCommit:e});return i._set("steps",this._createWorkflowSteps(i,s)),i}highlight(t){const{data:{viewModel:{view:s}}}=this,e=t&&s.allLayerViews.items.find((({layer:s})=>s===t.layer));l(e)&&this.handles.add(e.highlight(t),"candidate-highlight")}unhighlight(){this.handles.remove("candidate-highlight")}static _createWorkflowSteps(t,m="awaiting-feature-to-update"){const{data:l,handles:c}=t,u={"awaiting-feature-to-update":()=>({id:"awaiting-feature-to-update",async setUp(){const{spinnerViewModel:t,view:s}=l.viewModel;let e=null;c.add({remove(){e&&(e.abort(),e=null)}},this.id),l.edits.feature=null;const p=s.on("immediate-click",(p=>{t.location=p.mapPoint,t.visible=!0,e&&e.abort();const{editableItems:m}=l.viewModel;e=o(),new Promise(((t,o)=>{i(e.signal,(()=>o(r()))),t(d(m,s,p,e.signal))})).then((t=>{if(l.viewModel.spinnerViewModel.visible=!1,a(e),l.candidates=t.reduce(((t,s)=>s.error?t:[...t,...s.value]),[]),0!==l.candidates.length)if(1===l.candidates.length){const t=l.candidates[0];l.edits.feature=t,l.viewModel.activeWorkflow.go("editing-existing-feature")}else l.viewModel.activeWorkflow.next()}))}));c.add(p,this.id)},async tearDown(){c.remove(this.id)}}),"awaiting-update-feature-candidate":()=>({id:"awaiting-update-feature-candidate",async setUp(){const{edits:s}=l;s.feature=null,c.add(n(s,"feature",(s=>{t.unhighlight(),t.highlight(s)})),this.id)},async tearDown(){t.unhighlight(),c.remove(this.id)}}),"editing-existing-feature":()=>({id:"editing-existing-feature",async setUp(){const i=l.edits.feature,r=l.viewModel;l.editableItem=r.editableItems.find((t=>t.layer===i.layer));const a=o();c.add({remove:()=>a.abort()},this.id);const m=r.view.whenLayerView(i.layer),n=j(i,r.view,a.signal),u=await m,d=await n;if(p(a))return;l.edits.updateGeometry(d.geometry),l.edits.updateAttributes(d.attributes),l.edits.trackChanges();const g=d.layer,f=h(r.layerInfos,g),k=f&&f.fieldConfig;r.attachmentsViewModel.set({graphic:d,mode:"view"}),r.featureFormViewModel.set({feature:d,fieldConfig:k});const w="createInteractiveEditSession"in u?u.createInteractiveEditSession(i):null,S=[r.featureFormViewModel.on("value-change",(t=>{l.edits.updateAttributes(r.featureFormViewModel.getValues()),d.attributes=l.edits.feature.attributes,w&&w.setAttribute(t.fieldName,t.value)})),r.attachmentsViewModel.watch("mode",(t=>{"add"===t&&l.viewModel.activeWorkflow.go("adding-attachment"),"edit"===t&&l.viewModel.activeWorkflow.go("editing-attachment")}))];w&&(S.push(e((()=>w.rollback()))),c.add(e((()=>w.commit())),t._handleKeys.afterCommit));const{supportsGeometryUpdate:M}=g.capabilities.editing;if(M){const e=y(d),{interactive:o,visual:i}=await b(d,e,r.sketchViewModel,r.view,(({geometry:t,attributes:o})=>{if(s(e.rotation)){const{field:t}=e.rotation;r.featureFormViewModel.setValue(t,o[t])}if(s(e.size)){const{field:t}=e.size;r.featureFormViewModel.setValue(t,o[t])}l.edits.updateAttributes(o),l.edits.updateGeometry(t)}));S.push(o,i),c.add(o,t._handleKeys.beforeCommit),c.add(i,t._handleKeys.afterCommit)}else t.highlight(d);c.add(S,this.id)},async tearDown(){t.unhighlight(),c.remove(this.id)}}),"adding-attachment":()=>({id:"adding-attachment",parent:"editing-existing-feature",async setUp(){},async tearDown(){}}),"editing-attachment":()=>({id:"editing-attachment",parent:"editing-existing-feature",async setUp(){},async tearDown(){}})};let g=!1;return["awaiting-feature-to-update","awaiting-update-feature-candidate","editing-existing-feature","adding-attachment","editing-attachment"].filter((t=>!!g||(g=t===m,g))).map((t=>u[t]()))}};k=f=t([m("esri.widgets.Editor.UpdateWorkflow")],k);var w=k;export default w;
