// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ./Input".split(" "),function(h,c,a,m,n,d,p,k,q,r,t,l){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.noValueOptionLabel=null;
b.showNoValueOption=!1;b.type="radio-buttons";return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})};return f}(l);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"noValueOptionLabel",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"showNoValueOption",void 0);c.__decorate([d.property({type:["radio-buttons"],json:{read:!1,write:!0}})],a.prototype,
"type",void 0);return a=e=c.__decorate([k.subclass("esri.form.elements.inputs.RadioButtonsInput")],a)});