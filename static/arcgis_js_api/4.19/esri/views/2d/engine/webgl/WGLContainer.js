// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/maybe ./enums ../Container ../brushes ./ClippingInfo".split(" "),function(k,u,g,d,n,p,q){return function(e){function f(){var a=e.apply(this,arguments)||this;a.name=a.constructor.name;return a}k._inheritsLoose(f,e);var c=f.prototype;c.doRender=function(a){const b=this.createRenderParams(a),{painter:h,globalOpacity:r,profiler:l,drawPhase:t}=b,m=t===d.WGLDrawPhase.LABEL?1:r*this.computedOpacity;l.recordContainerStart(this.name);
h.beforeRenderLayer(b,this._clippingInfos?255:0,m);this.updateTransforms(a.state);this.renderChildren(b);h.compositeLayer(b,m);l.recordContainerEnd()};c.renderChildren=function(a){g.isNone(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(a.painter));for(const b of this.children)b.beforeRender(a);for(const b of this._renderPasses)try{b.render(a)}catch(h){}for(const b of this.children)b.afterRender(a)};c.createRenderParams=function(a){return{...a,requireFBO:this.requiresDedicatedFBO}};
c.prepareRenderPasses=function(a){return[a.registerRenderPass({name:"clip",brushes:[p.brushes.clip],target:()=>this._clippingInfos,drawPhase:d.WGLDrawPhase.MAP|d.WGLDrawPhase.LABEL|d.WGLDrawPhase.LABEL_ALPHA|d.WGLDrawPhase.DEBUG|d.WGLDrawPhase.HIGHLIGHT})]};c.updateTransforms=function(a){for(const b of this.children)b.setTransform(a)};c.onAttach=function(){e.prototype.onAttach.call(this);this._updateClippingInfo()};c.onDetach=function(){e.prototype.onDetach.call(this);this._updateClippingInfo()};
c._updateClippingInfo=function(){g.isSome(this._clippingInfos)&&(this._clippingInfos.forEach(b=>b.destroy()),this._clippingInfos=null);if(this.stage){var a=this._clips;g.isSome(a)&&a.length&&(this._clippingInfos=a.items.map(b=>q.fromClipArea(this.stage,b)));this.requestRender()}};k._createClass(f,[{key:"clips",set:function(a){this._clips=a;this.children.forEach(b=>b.clips=a);this._updateClippingInfo()}}]);return f}(n.Container)});