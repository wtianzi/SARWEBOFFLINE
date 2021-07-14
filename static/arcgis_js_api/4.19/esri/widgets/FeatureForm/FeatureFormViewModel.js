// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/ReentrantObjectPool ../../core/Evented ../../support/arcadeOnDemand ../../intl/locale ../../intl/messages ../../intl ../../Graphic ../../core/watchUtils ../../form/FormTemplate ../../core/HandleOwner ./FieldConfig ./FieldGroupConfig ./InputField ./InputFieldGroup ./support/formTemplateUtils".split(" "),
function(A,f,c,H,g,I,Y,J,Z,aa,ba,B,K,L,M,N,ca,O,P,Q,R,C,D,S,T,U){function V(t){return!!t.fieldConfig}const x=new O({attributes:{}}),W=H.getLogger("esri.widgets.FeatureForm.FeatureFormViewModel");c=function(t){function u(a){a=t.call(this,a)||this;a._arcade=null;a._fieldPool=new B.ReentrantObjectPool(S);a._fieldGroupPool=new B.ReentrantObjectPool(T);a._featureClone=x.clone();a._initialFeature=x.clone();a._needsArcade=!1;a.messages=null;a.strict=!1;return a}A._inheritsLoose(u,t);var m=u.prototype;m.initialize=
function(){const a=async()=>this.messages=await N.fetchMessageBundle("esri/widgets/FeatureForm/t9n/FeatureForm");a();this.handles.add(M.onLocaleChange(a));const b=P.init(this,"fieldConfig",async d=>{const e=[];d&&d.forEach(h=>{e.push(h.visibilityExpression);h.fieldConfig?h.fieldConfig.forEach(({requiredExpression:k,visibilityExpression:q})=>{e.push(k,q)}):e.push(h.requiredExpression)});d=e.filter(h=>!!h);const l=0<d.length;if(l){const h=await L.loadArcade(),{arcadeUtils:k}=h;d.some(q=>k.hasGeometryOperations(q))&&
(await k.enableGeometryOperations(),b.remove());this._arcade=h;this.notifyChange("inputFields")}this._needsArcade=l});this.handles.add(b)};m.destroy=function(){this.layer=this.feature=this.fieldConfig=null;this._fieldPool.destroy();this._fieldGroupPool.destroy()};m.castFieldConfig=function(a){return a?a.map(b=>b instanceof C||b instanceof D?b:b.fieldConfig?new D(b):new C(b)):null};m.findField=function(a){return this._allInputFields.find(b=>b.name===a)};m.getValue=function(a){var b;const {_featureClone:d,
layer:e}=this,l=!(null==e||!e.getField(a));return null!=(b=d.getAttribute(a))?b:l?null:void 0};m.setValue=function(a,b){const {_featureClone:d,strict:e}=this,l=this.findField(a);b=""===b?null:b;if(l&&d.getAttribute(a)!==b){l.value=b;if(this.get("layer.typeIdField")===l.name){const h=new Set;this.layer.types.forEach(k=>Object.keys(k.domains).forEach(q=>h.add(q)));h.forEach(k=>{(k=this.findField(k))&&k.notifyChange("domain")})}if(!e||l.valid)d.setAttribute(a,b),this.notifyChange("inputFields"),this._emitChangeEvent(l)}};
m.getValues=function(){return{...this._featureClone.attributes}};m.submit=function(){var a=this._allInputFields;const b=a.filter(e=>e.valid).map(({name:e})=>e);a=a.filter(e=>!e.valid).map(({name:e})=>e);const d=this.getValues();this.emit("submit",{valid:b,invalid:a,values:d})};m._disposeInputOrGroup=function(a){a.inputFields?this._disposeGroup(a):this._disposeInput(a)};m._disposeGroup=function(a){a.inputFields.forEach(b=>this._disposeInput(b));this._fieldGroupPool.release(a)};m._disposeInput=function(a){this._fieldPool.release(a)};
m._emitChangeEvent=function({name:a,valid:b,value:d}){this.emit("value-change",{layer:this.layer,feature:this.feature,fieldName:a,value:d,valid:b})};A._createClass(u,[{key:"_allInputFields",get:function(){return this.inputFields.reduce((a,b)=>b.inputFields?[...a,...b.inputFields]:[...a,b],[])}},{key:"_inputFieldCache",get:function(){const a=this._get("_inputFieldCache")||new Map;a.forEach(b=>this._disposeInputOrGroup(b));a.clear();(this.get("layer.fields")||[]).forEach(b=>a.set(b,this._fieldPool.acquire()));
return a}},{key:"_inputFieldGroupCache",get:function(){const a=this._get("_inputFieldGroupCache")||new Map;a.forEach(b=>this._disposeInputOrGroup(b));a.clear();(this.fieldConfig||[]).filter(V).forEach(b=>a.set(b,this._fieldGroupPool.acquire()));return a}},{key:"description",get:function(){var a;return null==(a=this.formTemplate)?void 0:a.description},set:function(a){void 0===a?this._clearOverride("description"):this._override("description",a)}},{key:"feature",get:function(){return this._get("feature")},
set:function(a){this._featureClone=a?a.clone():x.clone();this._initialFeature=this._featureClone.clone();this._set("feature",a)}},{key:"fieldConfig",get:function(){const {formTemplate:a}=this;if(!a)return null;const {config:b,encounteredUnsupportedTypes:d}=U.fieldConfigsFromFormTemplate(a);0<d.length&&W.warn("form-info::unsupported-type","encountered unsupported elements/types when parsing form info",d);return b},set:function(a){a?this._override("fieldConfig",a):this._clearOverride("fieldConfig")}},
{key:"formTemplate",get:function(){var a;return null==(a=this.layer)?void 0:a.formTemplate},set:function(a){void 0===a?this._clearOverride("formTemplate"):this._override("formTemplate",a)}},{key:"inputFields",get:function(){const {_arcade:a,_inputFieldCache:b,_inputFieldGroupCache:d,_featureClone:e,messages:l,_needsArcade:h,layer:k,state:q}=this,v=e.clone();if("ready"!==q||h&&!a)return[];const y=this.get("layer.fields")||[],E=this.fieldConfig||[];return(0!==E.length?E.map(n=>{if(n.fieldConfig){const r=
d.get(n);var p=n.fieldConfig.map(w=>{const z=y.find(X=>X.name===w.name),F=b.get(z);F.set({arcade:a,field:z,config:w,feature:v,group:r,initialFeature:this._initialFeature,layer:k,messages:l,value:this.getValue(z.name)});return F}).filter(w=>w.visible);r.set({arcade:a,config:n,feature:v,inputFields:p});return r}p=y.find(r=>r.name===n.name);const G=b.get(p);G.set({arcade:a,field:p,config:n,feature:v,group:null,initialFeature:this._initialFeature,layer:k,messages:l,value:this.getValue(p.name)});return G}):
y.map(n=>{const p=b.get(n);p.set({arcade:a,config:null,field:n,feature:v,group:null,initialFeature:this._initialFeature,layer:k,messages:l,value:this.getValue(n.name)});return p})).filter(n=>n.visible)}},{key:"layer",get:function(){return this.get("feature.layer")},set:function(a){a?this._override("layer",a):this._clearOverride("layer")}},{key:"state",get:function(){return this.messages&&this.get("layer.loaded")?"ready":"disabled"}},{key:"title",get:function(){var a;return null==(a=this.formTemplate)?
void 0:a.title},set:function(a){void 0===a?this._clearOverride("title"):this._override("title",a)}},{key:"valid",get:function(){const a=this._allInputFields;return 0<a.length&&a.every(({valid:b})=>b)}}]);return u}(R.HandleOwnerMixin(K.EventedAccessor));f.__decorate([g.property({readOnly:!0})],c.prototype,"_allInputFields",null);f.__decorate([g.property({readOnly:!0})],c.prototype,"_inputFieldCache",null);f.__decorate([g.property({readOnly:!0})],c.prototype,"_inputFieldGroupCache",null);f.__decorate([g.property()],
c.prototype,"description",null);f.__decorate([g.property()],c.prototype,"feature",null);f.__decorate([g.property()],c.prototype,"fieldConfig",null);f.__decorate([I.cast("fieldConfig")],c.prototype,"castFieldConfig",null);f.__decorate([g.property({type:Q})],c.prototype,"formTemplate",null);f.__decorate([g.property({readOnly:!0,dependsOn:"messages feature fieldConfig layer.fields layer.loaded state".split(" ")})],c.prototype,"inputFields",null);f.__decorate([g.property()],c.prototype,"layer",null);
f.__decorate([g.property()],c.prototype,"messages",void 0);f.__decorate([g.property()],c.prototype,"state",null);f.__decorate([g.property()],c.prototype,"strict",void 0);f.__decorate([g.property()],c.prototype,"title",null);f.__decorate([g.property()],c.prototype,"valid",null);f.__decorate([g.property()],c.prototype,"getValues",null);f.__decorate([g.property()],c.prototype,"submit",null);return c=f.__decorate([J.subclass("esri.widgets.FeatureForm.FeatureFormViewModel")],c)});