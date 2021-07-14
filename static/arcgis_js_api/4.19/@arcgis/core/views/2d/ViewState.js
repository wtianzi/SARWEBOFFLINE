/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import{a as e}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../geometry/Geometry.js";import o from"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import r from"../../geometry/Extent.js";import"../../chunks/mathUtils2.js";import"../../chunks/vec3f64.js";import{t as n}from"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/mathUtils.js";import"../../Camera.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../chunks/unitUtils.js";import a from"../../Viewpoint.js";import{s as p,i as c,a as m,r as h,m as l}from"../../chunks/mat3.js";import{c as u,t as j}from"../../chunks/vec2.js";import{i as f,t as d,r as k,b as y}from"../../chunks/mat2d.js";import{c as w}from"../../chunks/mat2df32.js";import{f as v}from"../../chunks/vec2f32.js";import{c as g}from"../../chunks/mat2df64.js";import{c as R}from"../../chunks/vec2f64.js";import{c as _,i as x,j as z,k as M,l as S,m as U,n as N}from"../../chunks/viewpointUtils.js";import{c as T}from"../../chunks/mat3f32.js";function b(t){return function(t){return t instanceof Float32Array&&t.length>=2}(t)||function(t){return Array.isArray(t)&&t.length>=2}(t)}var A;const E=[0,0];let P=A=class extends e{constructor(...t){super(...t),this._viewpoint2D={center:R(),rotation:0,scale:0,spatialReference:null},this.center=[0,0],this.extent=new r,this.id=0,this.inverseTransform=g(),this.resolution=0,this.rotation=0,this.scale=0,this.transform=g(),this.transformNoRotation=g(),this.displayMat3=T(),this.displayViewMat3=T(),this.viewMat3=T(),this.viewMat2d=w(),this.worldScreenWidth=0,this.size=[0,0]}set pixelRatio(t){this._set("pixelRatio",t),this._update()}set size(t){this._set("size",t),this._update()}set viewpoint(t){if(t){const s=this._viewpoint2D,i=t.targetGeometry;s.center[0]=i.x,s.center[1]=i.y,s.rotation=t.rotation,s.scale=t.scale,s.spatialReference=i.spatialReference}this._update()}copy(t){const s=this.size,i=this.viewpoint;return i&&s?(this.viewpoint=_(i,t.viewpoint),this._set("size",u(s,t.size))):(this.viewpoint=t.viewpoint.clone(),this._set("size",[t.size[0],t.size[1]])),this._set("pixelRatio",t.pixelRatio),this}clone(){return new A({size:this.size,viewpoint:this.viewpoint.clone(),pixelRatio:this.pixelRatio})}toMap(t,s,i){return b(s)?j(t,s,this.inverseTransform):(E[0]=s,E[1]=i,j(t,E,this.inverseTransform))}toScreen(t,s,i){return b(s)?j(t,s,this.transform):(E[0]=s,E[1]=i,j(t,E,this.transform))}toScreenNoRotation(t,s,i){return b(s)?j(t,s,this.transformNoRotation):(E[0]=s,E[1]=i,j(t,E,this.transformNoRotation))}getScreenTransform(t,s){const{center:i}=this._viewpoint2D,e=this._get("pixelRatio")||1,o=this._get("size");return x(t,i,o,s,0,e),t}_update(){const{center:t,spatialReference:s,scale:i,rotation:e}=this._viewpoint2D,r=this._get("pixelRatio")||1,j=this._get("size"),w=new a({targetGeometry:new o(t[0],t[1],s),scale:i,rotation:e});if(this._set("viewpoint",w),!j||!s||!i)return;this.resolution=z(w),this.rotation=e,this.scale=i,this.spatialReference=s,u(this.center,t);const g=0!==j[0]?2/j[0]:0,R=0!==j[1]?-2/j[1]:0;p(this.displayMat3,g,0,0,0,R,0,-1,1,1);const _=c(this.viewMat3),x=v(j[0]/2,j[1]/2),T=v(-j[0]/2,-j[1]/2),b=n(e);m(_,_,x),h(_,_,b),m(_,_,T),l(this.displayViewMat3,this.displayMat3,_);const A=f(this.viewMat2d);return d(A,A,x),k(A,A,b),d(A,A,T),M(this.extent,w,j),S(this.transform,w,j,r),y(this.inverseTransform,this.transform),U(this.transformNoRotation,w,j,r),this.worldScreenWidth=N(this.spatialReference,this.resolution),this._set("id",this.id+1),this}};t([s({readOnly:!0})],P.prototype,"id",void 0),t([s({value:1,json:{write:!0}})],P.prototype,"pixelRatio",null),t([s({json:{write:!0}})],P.prototype,"size",null),t([s({type:a,json:{write:!0}})],P.prototype,"viewpoint",null),P=A=t([i("esri.views.2d.ViewState")],P);var D=P;export default D;
