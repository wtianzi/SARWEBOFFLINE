// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./Camera ./geometry ./core/JSONSupport ./core/accessorSupport/decorators ./geometry/support/jsonUtils".split(" "),function(n,p,h,c,k,l,m,b,f){function d(){return{enabled:!this.camera}}return function(g){function a(a){a=g.call(this)||this;a.rotation=0;a.scale=0;a.targetGeometry=null;a.camera=null;return a}h(a,g);e=a;a.prototype.castRotation=function(a){a%=360;0>a&&(a+=360);return a};a.prototype.clone=function(){return new e({rotation:this.rotation,
scale:this.scale,targetGeometry:this.targetGeometry?this.targetGeometry.clone():null,camera:this.camera?this.camera.clone():null})};var e;c([b.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:d}}}}})],a.prototype,"rotation",void 0);c([b.cast("rotation")],a.prototype,"castRotation",null);c([b.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:d}}}}})],a.prototype,"scale",void 0);c([b.property({types:l.geometryTypes,json:{read:f.fromJSON,
write:!0,origins:{"web-scene":{read:f.fromJSON,write:{overridePolicy:d}}}}})],a.prototype,"targetGeometry",void 0);c([b.property({type:k,json:{write:!0}})],a.prototype,"camera",void 0);return a=e=c([b.subclass("esri.Viewpoint")],a)}(b.declared(m.JSONSupport))});