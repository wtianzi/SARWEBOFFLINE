/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import{b as i}from"../chunks/Logger.js";import{r as e}from"../chunks/string.js";import"../chunks/metadata.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import r,{g as m}from"./SpatialReference.js";import a from"./Geometry.js";import o from"./Point.js";import"../chunks/Ellipsoid.js";import{canProject as h,geographicToWebMercator as x,webMercatorToGeographic as c}from"./support/webMercatorUtils.js";const l=[0,0];function u(t,i){return d(t,i.x,i.y,i.z)}function p(t,i){if(!i.points||i.points.length)return!1;for(const e of i.points)if(!f(t,e))return!1;return!0}function f(t,i){return d(t,i[0],i[1])}function y(t,i){return d(t,i[0],i[1],i[2])}function d(t,i,e,n){return i>=t.xmin&&i<=t.xmax&&e>=t.ymin&&e<=t.ymax&&(null==n||!t.hasZ||n>=t.zmin&&n<=t.zmax)}function z(t,i){return l[1]=i.y,l[0]=i.x,g(t,l)}function g(t,i){return function(t,i){if(!t)return!1;if(function(t){return!Array.isArray(t[0][0])}(t))return M(!1,t,i);let e=!1;for(let n=0,s=t.length;n<s;n++)e=M(e,t[n],i);return e}(t.rings,i)}function M(t,i,e){const[n,s]=e;let r=t,m=0;for(let t=0,e=i.length;t<e;t++){m++,m===e&&(m=0);const[a,o]=i[t],[h,x]=i[m];(o<s&&x>=s||x<s&&o>=s)&&a+(s-o)/(x-o)*(h-a)<n&&(r=!r)}return r}function j(t,i){return u(t,i)}function w(t,i){const e=t.hasZ&&i.hasZ;let n,s,r;if(t.xmin<=i.xmin){if(n=i.xmin,t.xmax<n)return!1}else if(n=t.xmin,i.xmax<n)return!1;if(t.ymin<=i.ymin){if(s=i.ymin,t.ymax<s)return!1}else if(s=t.ymin,i.ymax<s)return!1;if(e&&i.hasZ)if(t.zmin<=i.zmin){if(r=i.zmin,t.zmax<r)return!1}else if(r=t.zmin,i.zmax<r)return!1;return!0}function b(t,i){const{points:e,hasZ:n}=i,s=n?y:f;for(const i of e)if(s(t,i))return!0;return!1}const v=[0,0],R=[0,0],P=[0,0],Z=[0,0],_=[v,R,P,Z],k=[[P,v],[v,R],[R,Z],[Z,P]];function N(t,i){v[0]=t.xmin,v[1]=t.ymax,R[0]=t.xmax,R[1]=t.ymax,P[0]=t.xmin,P[1]=t.ymin,Z[0]=t.xmax,Z[1]=t.ymin;for(const t of _)if(g(i,t))return!0;for(const e of i.rings){if(!e.length)continue;let i=e[0];if(f(t,i))return!0;for(let n=1;n<e.length;n++){const s=e[n];if(f(t,s)||C(i,s,k))return!0;i=s}}return!1}function S(t,i){v[0]=t.xmin,v[1]=t.ymax,R[0]=t.xmax,R[1]=t.ymax,P[0]=t.xmin,P[1]=t.ymin,Z[0]=t.xmax,Z[1]=t.ymin;const e=i.paths;for(const i of e){if(!e.length)continue;let n=i[0];if(f(t,n))return!0;for(let e=1;e<i.length;e++){const s=i[e];if(f(t,s)||C(n,s,k))return!0;n=s}}return!1}const O=[0,0];function I(t){for(let i=0;i<t.length;i++){const e=t[i];for(let n=0;n<e.length-1;n++){const s=e[n],r=e[n+1];for(let e=i+1;e<t.length;e++)for(let i=0;i<t[e].length-1;i++){const n=t[e][i],m=t[e][i+1];if(G(s,r,n,m,O)&&!(O[0]===s[0]&&O[1]===s[1]||O[0]===n[0]&&O[1]===n[1]||O[0]===r[0]&&O[1]===r[1]||O[0]===m[0]&&O[1]===m[1]))return!0}}const n=e.length;if(!(n<=4))for(let t=0;t<n-3;t++){let i=n-1;0===t&&(i=n-2);const s=e[t],r=e[t+1];for(let n=t+2;n<i;n++){const t=e[n],i=e[n+1];if(G(s,r,t,i,O)&&!(O[0]===s[0]&&O[1]===s[1]||O[0]===t[0]&&O[1]===t[1]||O[0]===r[0]&&O[1]===r[1]||O[0]===i[0]&&O[1]===i[1]))return!0}}}return!1}function C(t,i,e){for(let n=0;n<e.length;n++)if(G(t,i,e[n][0],e[n][1]))return!0;return!1}function G(t,i,e,n,s){const[r,m]=t,[a,o]=i,[h,x]=e,[c,l]=n,u=c-h,p=r-h,f=a-r,y=l-x,d=m-x,z=o-m,g=y*f-u*z;if(0===g)return!1;const M=(u*d-y*p)/g,j=(f*d-z*p)/g;return M>=0&&M<=1&&j>=0&&j<=1&&(s&&(s[0]=r+M*(a-r),s[1]=m+M*(o-m)),!0)}function A(t){switch(t){case"esriGeometryEnvelope":case"extent":return w;case"esriGeometryMultipoint":case"multipoint":return b;case"esriGeometryPoint":case"point":return j;case"esriGeometryPolygon":case"polygon":return N;case"esriGeometryPolyline":case"polyline":return S;case"mesh":return w}}var W;function E(t,i,e){return null==i?e:null==e?i:t(i,e)}let q=W=class extends a{constructor(...t){super(...t),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(t,i,e,n,s){return!(m=t)||"esri.geometry.SpatialReference"!==m.declaredClass&&null==m.wkid?"object"==typeof t?(t.spatialReference=null==t.spatialReference?r.WGS84:t.spatialReference,t):{xmin:t,ymin:i,xmax:e,ymax:n,spatialReference:null==s?r.WGS84:s}:{spatialReference:t,xmin:0,ymin:0,xmax:0,ymax:0};var m}static fromBounds(t,i){return new W({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:i})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const t=new o({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(t.z=.5*(this.zmin+this.zmax)),this.hasM&&(t.m=.5*(this.mmin+this.mmax)),t}get extent(){return this.clone()}get hasM(){return null!=this.mmin&&null!=this.mmax}get hasZ(){return null!=this.zmin&&null!=this.zmax}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(t){const i=this.center;return null!=t.z&&this.hasZ?this.offset(t.x-i.x,t.y-i.y,t.z-i.z):this.offset(t.x-i.x,t.y-i.y)}clone(){const t=new W;return t.xmin=this.xmin,t.ymin=this.ymin,t.xmax=this.xmax,t.ymax=this.ymax,t.spatialReference=this.spatialReference,null!=this.zmin&&(t.zmin=this.zmin,t.zmax=this.zmax),null!=this.mmin&&(t.mmin=this.mmin,t.mmax=this.mmax),t}contains(t){if(!t)return!1;const i=this.spatialReference,e=t.spatialReference;return i&&e&&!i.equals(e)&&h(i,e)&&(t=i.isWebMercator?x(t):c(t,!0)),"point"===t.type?u(this,t):"extent"===t.type&&function(t,i){const{xmin:e,ymin:n,zmin:s,xmax:r,ymax:m,zmax:a}=i;return t.hasZ&&i.hasZ?d(t,e,n,s)&&d(t,e,m,s)&&d(t,r,m,s)&&d(t,r,n,s)&&d(t,e,n,a)&&d(t,e,m,a)&&d(t,r,m,a)&&d(t,r,n,a):d(t,e,n)&&d(t,e,m)&&d(t,r,m)&&d(t,r,n)}(this,t)}equals(t){if(!t)return!1;const i=this.spatialReference,e=t.spatialReference;return i&&e&&!i.equals(e)&&h(i,e)&&(t=i.isWebMercator?x(t):c(t,!0)),this.xmin===t.xmin&&this.ymin===t.ymin&&this.zmin===t.zmin&&this.mmin===t.mmin&&this.xmax===t.xmax&&this.ymax===t.ymax&&this.zmax===t.zmax&&this.mmax===t.mmax}expand(t){const i=.5*(1-t),e=this.width*i,n=this.height*i;if(this.xmin+=e,this.ymin+=n,this.xmax-=e,this.ymax-=n,this.hasZ){const t=(this.zmax-this.zmin)*i;this.zmin+=t,this.zmax-=t}if(this.hasM){const t=(this.mmax-this.mmin)*i;this.mmin+=t,this.mmax-=t}return this}intersects(t){if(i(t))return!1;"mesh"===t.type&&(t=t.extent);const e=this.spatialReference,n=t.spatialReference;e&&n&&!e.equals(n)&&h(e,n)&&(t=e.isWebMercator?x(t):c(t,!0));return A(t.type)(this,t)}normalize(){const t=this._normalize(!1,!0);return Array.isArray(t)?t:[t]}offset(t,i,e){return this.xmin+=t,this.ymin+=i,this.xmax+=t,this.ymax+=i,null!=e&&(this.zmin+=e,this.zmax+=e),this}shiftCentralMeridian(){return this._normalize(!0)}union(t){return this.xmin=Math.min(this.xmin,t.xmin),this.ymin=Math.min(this.ymin,t.ymin),this.xmax=Math.max(this.xmax,t.xmax),this.ymax=Math.max(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=E(Math.min,this.zmin,t.zmin),this.zmax=E(Math.max,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=E(Math.min,this.mmin,t.mmin),this.mmax=E(Math.max,this.mmax,t.mmax)),this}intersection(t){return this.intersects(t)?(this.xmin=Math.max(this.xmin,t.xmin),this.ymin=Math.max(this.ymin,t.ymin),this.xmax=Math.min(this.xmax,t.xmax),this.ymax=Math.min(this.ymax,t.ymax),(this.hasZ||t.hasZ)&&(this.zmin=E(Math.max,this.zmin,t.zmin),this.zmax=E(Math.min,this.zmax,t.zmax)),(this.hasM||t.hasM)&&(this.mmin=E(Math.max,this.mmin,t.mmin),this.mmax=E(Math.min,this.mmax,t.mmax)),this):null}toJSON(t){return this.write(null,t)}_shiftCM(t=m(this.spatialReference)){if(!t||!this.spatialReference)return this;const i=this.spatialReference,n=this._getCM(t);if(n){const s=i.isWebMercator?c(n):n;this.xmin-=n.x,this.xmax-=n.x,i.isWebMercator||(s.x=this._normalizeX(s.x,t).x),this.spatialReference=new r(e(i.isWGS84?t.altTemplate:t.wkTemplate,{Central_Meridian:s.x}))}return this}_getCM(t){let i=null;const[e,n]=t.valid,s=this.xmin,r=this.xmax;return s>=e&&s<=n&&(r>=e&&r<=n)||(i=this.center),i}_normalize(t,i,e){const n=this.spatialReference;if(!n)return this;if(!(e=e||m(n)))return this;const s=this._getParts(e).map((t=>t.extent));if(s.length<2)return s[0]||this;if(s.length>2)return t?this._shiftCM(e):this.set({xmin:e.valid[0],xmax:e.valid[1]});if(t)return this._shiftCM(e);if(i)return s;let r=!0,a=!0;return s.forEach((t=>{t.hasZ||(r=!1),t.hasM||(a=!1)})),{rings:s.map((t=>{const i=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(r){const e=(t.zmax-t.zmin)/2;for(let t=0;t<i.length;t++)i[t].push(e)}if(a){const e=(t.mmax-t.mmin)/2;for(let t=0;t<i.length;t++)i[t].push(e)}return i})),hasZ:r,hasM:a,spatialReference:n}}_getParts(t){let i=this.cache._parts;if(!i){i=[];const{ymin:e,ymax:n,spatialReference:s}=this,r=this.width,a=this.xmin,o=this.xmax;let h;t=t||m(s);const[x,c]=t.valid;h=this._normalizeX(this.xmin,t);const l=h.x,u=h.frameId;h=this._normalizeX(this.xmax,t);const p=h.x,f=h.frameId,y=l===p&&r>0;if(r>2*c){const t=new W(a<o?l:p,e,c,n,s),r=new W(x,e,a<o?p:l,n,s),m=new W(0,e,c,n,s),h=new W(x,e,0,n,s),y=[],d=[];t.contains(m)&&y.push(u),t.contains(h)&&d.push(u),r.contains(m)&&y.push(f),r.contains(h)&&d.push(f);for(let t=u+1;t<f;t++)y.push(t),d.push(t);i.push({extent:t,frameIds:[u]},{extent:r,frameIds:[f]},{extent:m,frameIds:y},{extent:h,frameIds:d})}else l>p||y?i.push({extent:new W(l,e,c,n,s),frameIds:[u]},{extent:new W(x,e,p,n,s),frameIds:[f]}):i.push({extent:new W(l,e,p,n,s),frameIds:[u]});this.cache._parts=i}const e=this.hasZ,n=this.hasM;if(e||n){const t={};e&&(t.zmin=this.zmin,t.zmax=this.zmax),n&&(t.mmin=this.mmin,t.mmax=this.mmax);for(let e=0;e<i.length;e++)i[e].extent.set(t)}return i}_normalizeX(t,i){const[e,n]=i.valid,s=2*n;let r,m=0;return t>n?(r=Math.ceil(Math.abs(t-n)/s),t-=r*s,m=r):t<e&&(r=Math.ceil(Math.abs(t-e)/s),t+=r*s,m=-r),{x:t,frameId:m}}};t([n({readOnly:!0})],q.prototype,"cache",null),t([n({readOnly:!0})],q.prototype,"center",null),t([n({readOnly:!0})],q.prototype,"extent",null),t([n({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],q.prototype,"hasM",null),t([n({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],q.prototype,"hasZ",null),t([n({readOnly:!0})],q.prototype,"height",null),t([n({readOnly:!0})],q.prototype,"width",null),t([n({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],q.prototype,"xmin",void 0),t([n({type:Number,json:{write:!0}})],q.prototype,"ymin",void 0),t([n({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],q.prototype,"mmin",void 0),t([n({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],q.prototype,"zmin",void 0),t([n({type:Number,json:{write:!0}})],q.prototype,"xmax",void 0),t([n({type:Number,json:{write:!0}})],q.prototype,"ymax",void 0),t([n({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],q.prototype,"mmax",void 0),t([n({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],q.prototype,"zmax",void 0),q=W=t([s("esri.geometry.Extent")],q),q.prototype.toJSON.isDefaultToJSON=!0;var J=q;export default J;export{S as a,p as b,y as c,u as e,A as g,I as i,z as p,G as s};