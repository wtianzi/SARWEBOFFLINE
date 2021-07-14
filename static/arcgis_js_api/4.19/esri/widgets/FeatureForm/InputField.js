// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../layers/support/CodedValueDomain ../../layers/support/domains ../../layers/support/fieldUtils ../../intl/substitute ../../intl".split(" "),function(t,
d,c,C,D,e,E,z,F,G,H,A,B,q,g,u,I){const v={type:"number"},w={type:"number",intlOptions:{notation:"scientific"}},x={type:"date",intlOptions:{day:"2-digit",month:"2-digit",year:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}};c=function(y){function r(a){a=y.call(this,a)||this;a.arcade=null;a.config=null;a.feature=null;a.field=null;a.initialFeature=null;a.layer=null;a.description=null;a.editorType=null;a.error=null;a.format=null;a.group=null;a.hint=null;a.messages=null;a.name=null;return a}
t._inheritsLoose(r,y);var m=r.prototype;m._isDomainCompatible=function(a){const {field:b}=this;if("coded-value"===(null==a?void 0:a.type)){const f=typeof a.codedValues[0].code;if("string"===f&&g.isStringField(b)||"number"===f&&g.isNumericField(b))return!0}return"range"===(null==a?void 0:a.type)&&g.isNumericField(b)||g.isDateField(b)?!0:!1};m._validate=function(){const {domain:a,field:b,initialFeature:f,minLength:n,required:l,type:p,value:h}=this,k=l&&null===h;return k||f.getAttribute(b.name)!==h?
"text"===p&&-1<n&&"string"===typeof h&&h.length<n?"length-validation-error::too-short":a?null!==h||l?q.validateDomainValue(a,h):null:k?g.TypeValidationError.INVALID_TYPE:g.validateFieldValue(b,h):null};m._shownByDefault=function(){var a;const b=null==(a=this.field)?void 0:a.type;return"oid"!==b&&"global-id"!==b&&!this._isGeometryField()};m._isEditorField=function(){return-1<g.getFeatureEditFields(this.layer).indexOf(this.name)};m._isGeometryField=function(){return-1<g.getFeatureGeometryFields(this.layer).indexOf(this.name)};
m._toErrorMessage=function(){const {domain:a,field:b,messages:f,minLength:n,value:l,required:p,type:h}=this;var k=this.error;return p&&null===l?f.validationErrors.cannotBeNull:k===q.DomainValidationError.VALUE_OUT_OF_RANGE||k===g.NumericRangeValidationError.OUT_OF_RANGE?(k=q.getDomainRange(a)||g.getFieldRange(b),u.substitute(f.validationErrors.outsideRange,k,{format:{max:"date"===h?x:k.isInteger?v:w,min:"date"===h?x:k.isInteger?v:w}})):k===q.DomainValidationError.INVALID_CODED_VALUE?f.validationErrors.invalidCodedValue:
k===g.TypeValidationError.INVALID_TYPE?f.validationErrors.invalidType:"length-validation-error::too-short"===k?u.substitute(f.validationErrors.tooShort,{min:n}):null};t._createClass(r,[{key:"compiledFunc",get:function(){var a;const {arcade:b}=this;return b&&b.arcadeUtils.createFunction(null==(a=this.config)?void 0:a.visibilityExpression)}},{key:"compiledRequiredFunc",get:function(){var a;const {arcade:b}=this;return b&&b.arcadeUtils.createFunction(null==(a=this.config)?void 0:a.requiredExpression)}},
{key:"evaluatedRequirement",get:function(){const a=this.compiledRequiredFunc;if(!a)return null;const {arcade:b}=this;return b.arcadeUtils.executeFunction(a,b.arcadeUtils.createExecContext(this.feature))}},{key:"evaluatedVisibility",get:function(){const a=this.compiledFunc;if(!a)return null;const {arcade:b}=this;return b.arcadeUtils.executeFunction(a,b.arcadeUtils.createExecContext(this.feature))}},{key:"domain",get:function(){var a,b,{typeIdField:f}=this.layer;const n=f===this.name;var l=null==(a=
this.field)?void 0:a.domain;if(n&&!l)return new B({name:"__internal-type-based-coded-value-domain__",codedValues:this.layer.types.map(({id:p,name:h})=>({code:p,name:h}))});({feature:a}=this);f=f&&this.layer.getFieldDomain(this.name,{feature:a})||l;l=null==(b=this.config)?void 0:b.domain;return this._isDomainCompatible(l)?l:f}},{key:"editable",get:function(){var a;return this.layer.capabilities.operations.supportsEditing&&this.field.editable&&!1!==(null==(a=this.config)?void 0:a.editable)}},{key:"errorMessage",
get:function(){return this._toErrorMessage()}},{key:"includeTime",get:function(){var a;const b=null==(a=this.config)?void 0:a.includeTime;return void 0===b?!0:b}},{key:"label",get:function(){var a;return(null==(a=this.config)?void 0:a.label)||this.field.alias||this.field.name}},{key:"maxLength",get:function(){var a,b;if("date"===this.type)return-1;const f=null==(a=this.field)?void 0:a.length;a=null==(b=this.config)?void 0:b.maxLength;return!isNaN(a)&&-1<=a&&(-1===f||a<=f)?a:f}},{key:"minLength",get:function(){var a,
b;if("date"===this.type)return-1;const f=null==(a=this.field)?void 0:a.length;a=null==(b=this.config)?void 0:b.minLength;return!isNaN(a)&&-1<=a&&(-1===f||a<=f)?a:-1}},{key:"required",get:function(){var a,b;return this.editable?null!=(a=this.field)&&a.nullable?"boolean"===typeof this.evaluatedRequirement?this.evaluatedRequirement:!0===(null==(b=this.config)?void 0:b.required):!0:!1}},{key:"type",get:function(){const {field:a}=this;return g.isNumericField(a)?"number":g.isStringField(a)?"text":g.isDateField(a)?
"date":"unsupported"}},{key:"valid",get:function(){const a=this.editable?this._validate():null;this._set("error",a);return null===a}},{key:"value",get:function(){return this._get("value")},set:function(a){this.notifyChange("evaluatedVisibility");this._set("value",a)}},{key:"visible",get:function(){return this._isEditorField()?!1:"boolean"===typeof this.evaluatedVisibility?this.evaluatedVisibility:!!this.config||this._shownByDefault()}}]);return r}(A);d.__decorate([e.property()],c.prototype,"arcade",
void 0);d.__decorate([e.property()],c.prototype,"compiledFunc",null);d.__decorate([e.property()],c.prototype,"compiledRequiredFunc",null);d.__decorate([e.property()],c.prototype,"config",void 0);d.__decorate([e.property()],c.prototype,"evaluatedRequirement",null);d.__decorate([e.property()],c.prototype,"evaluatedVisibility",null);d.__decorate([e.property()],c.prototype,"feature",void 0);d.__decorate([e.property()],c.prototype,"field",void 0);d.__decorate([e.property()],c.prototype,"initialFeature",
void 0);d.__decorate([e.property()],c.prototype,"layer",void 0);d.__decorate([e.property({aliasOf:"config.description"})],c.prototype,"description",void 0);d.__decorate([e.property()],c.prototype,"domain",null);d.__decorate([e.property()],c.prototype,"editable",null);d.__decorate([e.property({aliasOf:"config.editorType"})],c.prototype,"editorType",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"error",void 0);d.__decorate([e.property({dependsOn:["error","messages","value"]})],c.prototype,
"errorMessage",null);d.__decorate([e.property({aliasOf:"config.format"})],c.prototype,"format",void 0);d.__decorate([e.property()],c.prototype,"group",void 0);d.__decorate([e.property({aliasOf:"config.hint"})],c.prototype,"hint",void 0);d.__decorate([e.property()],c.prototype,"includeTime",null);d.__decorate([e.property()],c.prototype,"label",null);d.__decorate([e.property()],c.prototype,"maxLength",null);d.__decorate([e.property()],c.prototype,"minLength",null);d.__decorate([e.property()],c.prototype,
"messages",void 0);d.__decorate([e.property({aliasOf:"field.name"})],c.prototype,"name",void 0);d.__decorate([e.property()],c.prototype,"required",null);d.__decorate([e.property()],c.prototype,"type",null);d.__decorate([e.property()],c.prototype,"valid",null);d.__decorate([e.property({value:null})],c.prototype,"value",null);d.__decorate([e.property()],c.prototype,"visible",null);return c=d.__decorate([z.subclass("esri.widgets.FeatureForm.InputField")],c)});