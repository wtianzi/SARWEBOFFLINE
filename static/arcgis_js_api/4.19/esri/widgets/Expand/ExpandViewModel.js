// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../core/Handles ../../core/watchUtils".split(" "),function(k,c,b,r,t,e,u,n,v,w,x,p,q,g){b=function(l){function h(a){a=l.call(this,a)||this;a._viewpointHandle=
null;a._handles=new q;a.group=null;return a}k._inheritsLoose(h,l);var f=h.prototype;f.initialize=function(){this._handles.add(g.on(this,"view.ui","expand",a=>{({target:a}=a);a&&a!==this&&a.expanded&&a.group&&a.group===this.group&&this._collapse()}))};f.destroy=function(){this.view=this._viewpointHandle=null;this._handles.destroy();this._handles=null};f._viewpointHandleChange=function(a){this._viewpointHandle&&(a?g.whenTrueOnce(this.view,"stationary",()=>this._viewpointHandle.resume()):this._viewpointHandle.pause())};
f._watchViewpoint=function(){this._handles.remove("viewpoint");this._viewpointHandle=null;const {autoCollapse:a,view:d}=this;if(d&&a){const m=g.pausable(d,"3d"===d.type?"camera":"viewpoint",()=>this._collapse());this._handles.add(m,"viewpoint");this._viewpointHandle=m}};f._collapse=function(){this.expanded=!1};k._createClass(h,[{key:"autoCollapse",set:function(a){this._set("autoCollapse",a);this._watchViewpoint()}},{key:"expanded",set:function(a){a=!!a;this._set("expanded",a);const d=this.get("view.ui");
d&&d.emit("expand",{target:this});this._viewpointHandleChange(a)}},{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}},{key:"view",set:function(a){this._get("view")!==a&&(this._set("view",a),a&&g.whenTrueOnce(a,"ready",()=>{this.view===a&&this._watchViewpoint()}))}}]);return h}(p);c.__decorate([e.property({value:!1})],b.prototype,"autoCollapse",null);c.__decorate([e.property({value:!1})],b.prototype,"expanded",null);c.__decorate([e.property()],b.prototype,"group",void 0);
c.__decorate([e.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([e.property({value:null})],b.prototype,"view",null);return b=c.__decorate([n.subclass("esri.widgets.Expand.ExpandViewModel")],b)});