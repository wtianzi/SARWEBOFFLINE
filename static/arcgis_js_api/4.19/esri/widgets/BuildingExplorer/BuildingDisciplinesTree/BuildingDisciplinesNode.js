// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/watchUtils ../../support/widgetUtils ../../../chunks/index ../../Widget ../support/LayerTreeNode".split(" "),function(t,k,f,z,
A,l,B,u,C,D,E,v,q,g,w,x){var n;const y={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"},c={base:"esri-building-disciplines-tree-node",root:"esri-building-disciplines-tree-node--root",leaf:"esri-building-disciplines-tree-node--leaf",label:"esri-building-disciplines-tree-node__label",checkbox:"esri-building-disciplines-tree-node__checkbox",checkboxChecked:"esri-building-disciplines-tree-node__checkbox--checked esri-icon-check-mark",checkboxIndeterminate:"esri-building-disciplines-tree-node__checkbox--indeterminate esri-icon-minus",
collapseToggle:"esri-building-disciplines-tree-node__collapse-toggle esri-icon-right",collapseToggleCollapsed:"esri-building-disciplines-tree-node__collapse-toggle--collapsed",children:"esri-building-disciplines-tree-node__children",level:m=>`${"esri-building-disciplines-tree-node"}--level-${m}`};f=n=function(m){function p(a){var b=m.call(this,a)||this;b.messages=y;b.toggleSiblingsVisibility=!1;b._childWidgets=[];b._updateChildWidgets=()=>{b._destroyChildWidgets();b._childWidgets=b.node.children.toArray().reverse().map(d=>
new n({node:d,messages:b.messages,toggleSiblingsVisibility:b.toggleSiblingsVisibility}))};return b}t._inheritsLoose(p,m);var e=p.prototype;e.initialize=function(){this.own(v.on(this,"node.children","after-changes",this._updateChildWidgets,this._updateChildWidgets,this._updateChildWidgets),this.watch(["messages","toggleSiblingsVisibility"],this._updateChildWidgets))};e.destroy=function(){this._destroyChildWidgets()};e.render=function(){const a=this.node,b=a.isRoot,d=a.isLeaf;return a.isDiscipline&&
d?[]:g.jsx("div",{key:a.id,class:this.classes(c.base,c.level(a.level),{[c.root]:b,[c.leaf]:d}),bind:this,onkeydown:this._onKeydown,tabIndex:d?null:0,role:"treeitem","aria-expanded":a.collapsed?"false":"true"},g.jsx("label",{bind:this,class:c.label,onclick:this._onCheckboxToggle},this._renderCollapseToggle(),this._renderCheckbox(),g.jsx("span",null,a.title)),this._renderChildren(a))};e._renderCheckbox=function(){var a,b;const d=this.node.visible,h=!0===d,r=h?null==(a=this.messages)?void 0:a.hideSublayer:
null==(b=this.messages)?void 0:b.showSublayer;return g.jsx("button",{bind:this,class:this.classes(c.checkbox,{[c.checkboxChecked]:h,[c.checkboxIndeterminate]:null===d}),onclick:this._onCheckboxToggle,role:"checkbox","aria-checked":h?"true":"false","aria-label":r,title:r,type:"button"})};e._renderCollapseToggle=function(){var a,b;if(!this.node.hasChildren)return[];const d=this.node.collapsed,h=d?null==(a=this.messages)?void 0:a.expand:null==(b=this.messages)?void 0:b.collapse;return g.jsx("div",{bind:this,
class:this.classes(c.collapseToggle,{[c.collapseToggleCollapsed]:d}),onclick:this._onCollapseToggle,"aria-label":h,title:h})};e._renderChildren=function(a){return!a.hasChildren||a.collapsed?[]:g.jsx("div",{class:c.children},this._childWidgets.map(b=>b.render()))};e._onKeydown=function(a){switch(a.key){case "Space":case "Enter":if(!a.target.classList.contains(c.base))break;a.stopPropagation();this.node.toggleVisibility();break;case "ArrowLeft":a.stopPropagation();this.node.toggleCollapsed(q.isRTL()?
!1:!0);break;case "ArrowRight":a.stopPropagation(),this.node.toggleCollapsed(q.isRTL()?!0:!1)}};e._onCheckboxToggle=function(a){a.preventDefault();a.stopPropagation();(a.metaKey||a.ctrlKey)&&this.toggleSiblingsVisibility?this.node.toggleAllSiblingsVisibility():this.node.toggleVisibility()};e._onCollapseToggle=function(a){a.preventDefault();a.stopPropagation();this.node.toggleCollapsed()};e._destroyChildWidgets=function(){this._childWidgets.forEach(a=>a.destroy());this._childWidgets=[]};return p}(w);
k.__decorate([l.property({type:x.LayerTreeNode})],f.prototype,"node",void 0);k.__decorate([l.property()],f.prototype,"messages",void 0);k.__decorate([l.property({nonNullable:!0})],f.prototype,"toggleSiblingsVisibility",void 0);k.__decorate([l.property()],f.prototype,"_childWidgets",void 0);return f=n=k.__decorate([u.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesNode")],f)});