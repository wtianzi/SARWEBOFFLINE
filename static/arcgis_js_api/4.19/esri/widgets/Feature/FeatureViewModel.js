// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../core/Accessor ../../popup/content/TextContent ../../Graphic ../../core/Handles ../../core/watchUtils ../../core/throttle ./support/featureUtils ./FeatureAttachments/FeatureAttachmentsViewModel ./FeatureContent/FeatureContentViewModel ./FeatureFields/FeatureFieldsViewModel ./support/relatedFeatureUtils ./FeatureMedia/FeatureMediaViewModel ./support/arcadeFeatureUtils".split(" "),
function(v,l,k,A,D,P,n,Q,E,R,S,T,z,F,G,H,I,J,K,p,L,B,M,u,w,N){const O=D.getLogger("esri.widgets.FeatureViewModel");k=function(C){function x(a){var b=C.call(this,a)||this;b._handles=new I;b._featureAbortController=null;b.graphicChangedThrottled=K.throttle(b.graphicChanged,1,v._assertThisInitialized(b));b.content=null;b.contentViewModels=[];b.defaultPopupTemplateEnabled=!1;b.formattedAttributes=null;b.lastEditInfo=null;b.relatedInfos=new Map;b.title="";b.view=null;b._handles.add(J.init(v._assertThisInitialized(b),
["graphic","_effectivePopupTemplate"],()=>b.graphicChangedThrottled()));return b}v._inheritsLoose(x,C);var f=x.prototype;f.destroy=function(){this._clear();this._cancelFeatureQuery();this._handles.destroy();this.graphic=this._handles=null;this._destroyContentViewModels();this.relatedInfos.clear()};f.setActiveMedia=function(a,b){a=this.contentViewModels[a];a instanceof w&&a.setActiveMedia(b)};f.nextMedia=function(a){a=this.contentViewModels[a];a instanceof w&&a.next()};f.previousMedia=function(a){a=
this.contentViewModels[a];a instanceof w&&a.previous()};f._clear=function(){this._set("title","");this._set("content",null);this._set("formattedAttributes",null)};f.graphicChanged=async function(){this._cancelFeatureQuery();this._clear();const {graphic:a}=this;if(a){var b=z.createAbortController();this._featureAbortController=b;try{await this._queryFeature({signal:b.signal})}catch(c){O.error("error","error loading popupTemplate for graphic",{error:c,graphic:a})}this._featureAbortController===b&&(this._featureAbortController=
null)}};f._cancelFeatureQuery=function(){const {_featureAbortController:a}=this;a&&a.abort();this._featureAbortController=null};f._compileContent=function(a){this._destroyContentViewModels();if(this.graphic)return Array.isArray(a)?a.map((b,c)=>{if("attachments"===b.type)return this._compileAttachments(b,c);if("custom"===b.type)return this._compileCustom(b,c);if("fields"===b.type)return this._compileFields(b,c);if("media"===b.type)return this._compileMedia(b,c);if("text"===b.type)return this._compileText(b,
c)}):"string"===typeof a?this._compileText(new G({text:a}),0).text:a};f._destroyContentViewModels=function(){this.contentViewModels.forEach(a=>a&&!a.destroyed&&a.destroy());this._set("contentViewModels",[])};f._compileAttachments=function(a,b){const {graphic:c}=this,{description:d,title:e}=a;this.contentViewModels[b]=new L({graphic:c,...this._compileTitleAndDesc({title:e,description:d})});return a};f._compileCustom=function(a,b){const {graphic:c}=this,{creator:d,destroyer:e}=a;this.contentViewModels[b]=
new B({graphic:c,creator:d,destroyer:e});return a};f._compileTitleAndDesc=function({title:a,description:b}){const {_fieldInfoMap:c,_sourceLayer:d,graphic:e,formattedAttributes:h}=this,{attributes:q}=e,m=h.global;return{title:p.substituteFieldsInLinksAndAttributes({attributes:q,fieldInfoMap:c,globalAttributes:m,layer:d,text:a}),description:p.substituteFieldsInLinksAndAttributes({attributes:q,fieldInfoMap:c,globalAttributes:m,layer:d,text:b})}};f._compileFields=function(a,b){const {_effectivePopupTemplate:c,
formattedAttributes:d}=this,e=a.clone();a=(null==a?void 0:a.fieldInfos)||(null==c?void 0:c.fieldInfos);const h=null==c?void 0:c.expressionInfos,q={...d.global,...d.content[b]},{description:m,title:r}=e;a=new M({attributes:q,expressionInfos:h,fieldInfos:a,...this._compileTitleAndDesc({title:r,description:m})});this.contentViewModels[b]=a;e.fieldInfos=a.formattedFieldInfos.slice(0);return e};f._compileMedia=function(a,b){const {graphic:c,_fieldInfoMap:d,_effectivePopupTemplate:e,relatedInfos:h,_sourceLayer:q}=
this;var {attributes:m}=c;const r=this.formattedAttributes.global;a=a.clone();const {description:g,mediaInfos:t,title:y}=a;m=new w({activeMediaInfoIndex:a.activeMediaInfoIndex||0,attributes:m,layer:q,fieldInfoMap:d,formattedAttributes:r,mediaInfos:t,popupTemplate:e,relatedInfos:h,...this._compileTitleAndDesc({title:y,description:g})});a.mediaInfos=m.formattedMediaInfos.slice(0);this.contentViewModels[b]=m;return a};f._compileText=function(a,b){a=a.clone();const {graphic:c,_fieldInfoMap:d,_sourceLayer:e}=
this;if(a&&a.text){const {attributes:h}=c;a.text=p.substituteFieldsInLinksAndAttributes({attributes:h,fieldInfoMap:d,globalAttributes:this.formattedAttributes.global,layer:e,text:a.text})}this.contentViewModels[b]=new B({graphic:c,creator:a.text});return a};f._compileLastEditInfo=function(){const {_effectivePopupTemplate:a,_sourceLayer:b,graphic:c}=this;if(a){var {lastEditInfoEnabled:d}=a,e=null==b?void 0:b.editFieldsInfo;if(d&&e)return p.formatEditInfo(e,c.attributes)}};f._compileTitle=function(a){const {_fieldInfoMap:b,
_sourceLayer:c,graphic:d}=this,{attributes:e}=d;return p.substituteFieldsInLinksAndAttributes({attributes:e,fieldInfoMap:b,globalAttributes:this.formattedAttributes.global,layer:c,text:a})};f._getTitle=async function(){const {_effectivePopupTemplate:a,graphic:b}=this;return p.graphicCallback(null==a?void 0:a.title,{graphic:b})};f._getContent=async function(){const {_effectivePopupTemplate:a,graphic:b}=this;return p.graphicCallback(null==a?void 0:a.content,{graphic:b})};f._queryFeature=async function(a){const {_featureAbortController:b,
_sourceLayer:c,graphic:d,_effectivePopupTemplate:e,spatialReference:h,map:q,view:m}=this,{content:{value:r},title:{value:g}}=await z.eachAlways({content:this._getContent(),title:this._getTitle()});b===this._featureAbortController&&d&&({expressionAttributes:{value:a}}=await z.eachAlways({checkForRelatedFeatures:this._checkForRelatedFeatures(a),expressionAttributes:N.createFormattedExpressions({popupTemplate:this._effectivePopupTemplate,spatialReference:h,graphic:d,map:q,view:m}),queryUpdatedFeature:p.queryUpdatedFeature({graphic:d,
popupTemplate:e,layer:c,spatialReference:h},a)}),b===this._featureAbortController&&d&&(this._set("formattedAttributes",this._createFormattedAttributes(r,a)),this._set("title",this._compileTitle(g)),this._set("lastEditInfo",this._compileLastEditInfo()||null),this._set("content",this._compileContent(r)||null)))};f._createFormattedAttributes=function(a,b){const {_effectivePopupTemplate:c,graphic:d,relatedInfos:e,_sourceLayer:h,_fieldInfoMap:q}=this,m={...d.attributes,...b},r={global:p.formatAttributes({fieldInfos:null==
c?void 0:c.fieldInfos,graphic:d,attributes:m,layer:h,fieldInfoMap:q,relatedInfos:e}),content:[]};Array.isArray(a)&&a.forEach((g,t)=>{"fields"===g.type&&g.fieldInfos&&(r.content[t]=p.formatAttributes({fieldInfos:g.fieldInfos,graphic:d,attributes:m,layer:h,fieldInfoMap:q,relatedInfos:e}))});return r};f._checkForRelatedFeatures=function(a){const {graphic:b,_effectivePopupTemplate:c}=this;return this._queryRelatedInfos(b,p.getAllFieldInfos(c),a)};f._queryRelatedInfos=async function(a,b,c){const {relatedInfos:d,
_sourceLayer:e}=this;d.clear();const h=A.isSome(e.associatedLayer)?await e.associatedLayer.load(c):e;if(h){var q=b.filter(g=>g&&p.isRelatedField(g.fieldName));if(q&&q.length){b.forEach(g=>this._configureRelatedInfo(g,h));var m=await u.queryLayerInfos({relatedInfos:d,layer:h},c);Object.keys(m).forEach(g=>{var t;const y=d.get(g.toString());g=null==(t=m[g])?void 0:t.value;y&&g&&(y.layerInfo=g.data)});var r=await u.queryRelatedFeatures({graphic:a,relatedInfos:d,layer:h},c);Object.keys(r).forEach(g=>{var t;
u.setRelatedFeatures(null==(t=r[g])?void 0:t.value,d.get(g.toString()))})}}};f._configureRelatedInfo=function(a,b){const {relatedInfos:c}=this,d=u.getRelatedFieldInfo(a.fieldName);if(d){var {layerId:e,fieldName:h}=d;e&&(b=c.get(e.toString())||u.createRelatedInfo(e,b))&&(u.updateRelatedInfo({relatedInfo:b,fieldName:h,fieldInfo:a}),this.relatedInfos.set(e,b))}};v._createClass(x,[{key:"_effectivePopupTemplate",get:function(){return A.isSome(this.graphic)?this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled):
null}},{key:"_fieldInfoMap",get:function(){return p.createfieldInfoMap(p.getAllFieldInfos(this._effectivePopupTemplate),this._sourceLayer)}},{key:"_sourceLayer",get:function(){return p.getSourceLayer(this.graphic)}},{key:"graphic",set:function(a){this._set("graphic",a?a.clone():null)}},{key:"spatialReference",get:function(){return this.get("view.spatialReference")||null},set:function(a){void 0===a?this._clearOverride("spatialReference"):this._override("spatialReference",a)}},{key:"map",get:function(){return this.get("view.map")||
null},set:function(a){void 0===a?this._clearOverride("map"):this._override("map",a)}},{key:"waitingForContent",get:function(){return!!this._featureAbortController}}]);return x}(F);l.__decorate([n.property()],k.prototype,"_featureAbortController",void 0);l.__decorate([n.property({readOnly:!0})],k.prototype,"_effectivePopupTemplate",null);l.__decorate([n.property({readOnly:!0})],k.prototype,"_fieldInfoMap",null);l.__decorate([n.property({readOnly:!0})],k.prototype,"_sourceLayer",null);l.__decorate([n.property({readOnly:!0})],
k.prototype,"content",void 0);l.__decorate([n.property({readOnly:!0})],k.prototype,"contentViewModels",void 0);l.__decorate([n.property({type:Boolean})],k.prototype,"defaultPopupTemplateEnabled",void 0);l.__decorate([n.property({readOnly:!0})],k.prototype,"formattedAttributes",void 0);l.__decorate([n.property({type:H,value:null})],k.prototype,"graphic",null);l.__decorate([n.property({readOnly:!0})],k.prototype,"lastEditInfo",void 0);l.__decorate([n.property()],k.prototype,"relatedInfos",void 0);l.__decorate([n.property()],
k.prototype,"spatialReference",null);l.__decorate([n.property({readOnly:!0})],k.prototype,"title",void 0);l.__decorate([n.property()],k.prototype,"map",null);l.__decorate([n.property({readOnly:!0})],k.prototype,"waitingForContent",null);l.__decorate([n.property()],k.prototype,"view",void 0);return k=l.__decorate([E.subclass("esri.widgets.FeatureViewModel")],k)});