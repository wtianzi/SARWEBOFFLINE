// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ./Layer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer".split(" "),function(f,u,l,d,m,n,g,p,h,c,q,r,t){return function(e){function a(){var b=null!==e&&e.apply(this,arguments)||this;b.type="base-dynamic";return b}l(a,e);a.prototype.getImageUrl=function(b,
a,k){throw new p("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented");};a.prototype.fetchImage=function(b,a,k,c){b=this.getImageUrl(b,a,k);var d={responseType:"image"};c&&c.timestamp&&(d.query={_ts:c.timestamp});return"string"===typeof b?g(b,d).then(function(a){return a.data}):b.then(function(a){return g(a,d)}).then(function(a){return a.data})};a.prototype.importLayerViewModule=function(a){return n(this,void 0,void 0,function(){return m(this,function(b){switch(a.type){case "2d":return[2,
h.create(function(a){return f(["../views/2d/layers/BaseDynamicLayerView2D"],a)})];case "3d":return[2,h.create(function(a){return f(["../views/3d/layers/DynamicLayerView3D"],a)})]}return[2]})})};d([c.property({readOnly:!0,value:"base-dynamic"})],a.prototype,"type",void 0);d([c.property({type:["show","hide"]})],a.prototype,"listMode",void 0);return a=d([c.subclass("esri.layers.BaseDynamicLayer")],a)}(c.declared(t.ScaleRangeLayer(r.RefreshableLayer(q))))});