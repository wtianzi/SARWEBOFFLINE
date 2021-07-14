/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import r from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/urlUtils.js";import"../../chunks/resourceExtension.js";import"../input/gamepad/GamepadInputDevice.js";import t from"./gamepad/GamepadSettings.js";let p=class extends r{constructor(o){super(o),this.browserTouchPanEnabled=!0,this.gamepad=new t,this.momentumEnabled=!0,this.mouseWheelZoomEnabled=!0}};o([e({type:Boolean})],p.prototype,"browserTouchPanEnabled",void 0),o([e({type:t,nonNullable:!0})],p.prototype,"gamepad",void 0),o([e({type:Boolean})],p.prototype,"momentumEnabled",void 0),o([e({type:Boolean})],p.prototype,"mouseWheelZoomEnabled",void 0),p=o([s("esri.views.navigation.Navigation")],p);var i=p;export default i;
