// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/screenUtils ../../../../../../symbols/cim/enums ../../color ../../number ../../materialKey/MaterialKey ./util ./WGLBaseLineTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(g,k,t,l,u,m,n,p,e,v,w,x){Object.defineProperty(k,"__esModule",{value:!0});g=function(g){function f(y,b){var d=g.call(this,b)||this;d._cimLineLayer=b;var f=0;e.isFunction(b.width)||(f=.5*l.pt2px(b.width));d._dynamicPropertyMap.set("_halfWidth",
function(a,c,d){return e.isFunction(b.width)?.5*l.pt2px(b.width(a,c,d)):f});var c=u.CapType.ROUND;e.isFunction(b.cap)||(c=b.cap);d._dynamicPropertyMap.set("_capType",function(a,d,f){return e.isFunction(b.cap)?b.cap(a,d,f):c});var a;e.isFunction(b.join)||(a=b.join);d._dynamicPropertyMap.set("_joinType",function(d,c,f){return e.isFunction(b.join)?b.join(d,c,f):a});var q;if(!e.isFunction(b.color)){var h=b.color;q=h&&m.premultiplyAlphaRGBA(h)||0}d._dynamicPropertyMap.set("_fillColor",function(a,d,c){return e.isFunction(b.color)?
(a=b.color(a,d,c))&&m.premultiplyAlphaRGBA(a)||0:q});var r;e.isFunction(b.miterLimit)||(r=e.getLimitCosine(b.miterLimit));d._dynamicPropertyMap.set("_miterLimitCosine",function(a,d,c){return e.isFunction(b.miterLimit)?e.getLimitCosine(b.miterLimit(a,d,c)):r});d._isDashed=b.isDashed;d.tessellationProperties._bitset=b.colorLocked?1:0;d._materialKey=p.createMaterialKey(d.geometryType,y,b.isOutline);d._initializeTessellator(!0);return d}t(f,g);f.fromCIMLine=function(e,b){return new f(e,b)};f.prototype.bindFeature=
function(e,b,d){var f=this,c=this._dynamicPropertyMap;c&&c.forEach(function(a,c){f[c]=a(e,b,d)});var c=this._materialCache,a=this._cimLineLayer.materialHash,a=a(e,b,d),a=c.get(a),c=null;a&&x.ok(a.spriteMosaicItem)&&(c=a.spriteMosaicItem);if(c){this._hasPattern=!0;var a=c.rect,g=a.x+1+c.width,h=a.y+1+c.height;this.tessellationProperties._tl=n.i1616to32(a.x+1,a.y+1);this.tessellationProperties._br=n.i1616to32(g,h)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=
0;this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;a=p.LineMaterialKey.load(this._materialKey);c&&(a.sdf=c.sdf,a.pattern=!0,a.textureBinding=c.textureBinding);this._materialKey=a.data};return f}(v.default(w.default));k.default=g});