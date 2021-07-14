// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils"],function(d,b,h,f){Object.defineProperty(b,"__esModule",{value:!0});d=function(){function c(a){this.requester=a;this.activeRequests=new Set}Object.defineProperty(c.prototype,"busy",{get:function(){return this.requester.busy},enumerable:!0,configurable:!0});c.prototype.request=function(a,c,e){var d=this,b=f.createAbortController();f.onAbortOrThrow(e,function(){return b.abort()});e=h({},e,{signal:b.signal});
a=this.requester.request(a,c,e);var g={response:a,abortController:b};this.activeRequests.add(g);f.always(a,function(){return d.activeRequests.delete(g)});return a};c.prototype.cancelAll=function(){this.activeRequests.forEach(function(a){return a.abortController.abort()});this.activeRequests.clear()};return c}();b.I3SStreamDataController=d;b.default=d});