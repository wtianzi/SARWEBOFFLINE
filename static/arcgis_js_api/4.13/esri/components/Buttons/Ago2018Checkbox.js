// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["../Component"],function(h){return function(g){function b(a){if(f[a])return f[a].exports;var c=f[a]={i:a,l:!1,exports:{}};return g[a].call(c.exports,c,c.exports,b),c.l=!0,c.exports}var f={};return b.m=g,b.c=f,b.d=function(a,c,e){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:e})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,c){if((1&c&&(a=
b(a)),8&c)||4&c&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(b.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var d in a)b.d(e,d,function(d){return a[d]}.bind(null,d));return e},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)},b.p="",b(b.s=368)}({0:function(g,b,f){function a(a,b){function d(){this.constructor=
a}c(a,b);a.prototype=null===b?Object.create(b):(d.prototype=b.prototype,new d)}f.d(b,"b",function(){return a});f.d(b,"a",function(){return e});var c=function(a,b){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])})(a,b)},e=function(){return(e=Object.assign||function(a){for(var b,d=1,c=arguments.length;d<c;d++)for(var e in b=arguments[d])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,
arguments)}},1:function(g,b){g.exports=h},368:function(g,b,f){f.r(b);var a=f(0);g=function(b){function c(a){a=b.call(this,a)||this;return a.handleCheckChange=a.handleCheckChange.bind(a),a}return a.b(c,b),c.prototype.render=function(a){var b={"btn-2018check__custom":!0,"btn-2018check__custom--active":this.props.checked||this.props.indeterminate};return a("span",{class:"btn-2018check__wrap",key:this.props.key},a("input",{type:"checkbox",checked:this.props.checked,class:"btn-2018check__input",indeterminate:this.props.indeterminate,
onchange:this.handleCheckChange,onclick:this.handleCheckChange,title:this.props.title,id:this.props.id,"aria-label":this.props.title}),a("span",{classes:b},this.props.checked?a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a("path",{d:"M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z"})):this.props.indeterminate?a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",
d:"M4 7h8v2H4z"})):null))},c.prototype.handleCheckChange=function(a){a.stopPropagation();a.preventDefault();this.props.onChange&&this.props.onChange(!this.props.checked)},c}(f(1).Component);b.default=g}})});