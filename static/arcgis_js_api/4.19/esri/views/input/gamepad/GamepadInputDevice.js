// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Accessor".split(" "),function(g,c,a,p,q,d,r,k,t,u,v,l){a=function(h){function e(f){var b=h.call(this)||this;b.nativeIndex=null;
b._detectedDeviceType="unknown";"standard"===f.mapping?b._detectedDeviceType="standard":m.test(f.id)?b._detectedDeviceType="spacemouse":b._detectedDeviceType="unknown";b.nativeIndex=f.index;return b}g._inheritsLoose(e,h);g._createClass(e,[{key:"native",get:function(){return(navigator.getGamepads?navigator.getGamepads():[])[this.nativeIndex]}},{key:"deviceType",get:function(){return this._detectedDeviceType}},{key:"axisThreshold",get:function(){return n[this.deviceType]}}]);return e}(l);c.__decorate([d.property({nonNullable:!0,
readOnly:!0})],a.prototype,"nativeIndex",void 0);c.__decorate([d.property({type:String,readOnly:!0})],a.prototype,"deviceType",null);c.__decorate([d.property({type:Number,readOnly:!0})],a.prototype,"axisThreshold",null);a=c.__decorate([k.subclass("esri.views.input.gamepad.GamepadInputDevice")],a);const m=/^(3dconnexion|space(mouse|navigator|pilot|explorer))/i,n={standard:.15,spacemouse:.025,unknown:0};return a});