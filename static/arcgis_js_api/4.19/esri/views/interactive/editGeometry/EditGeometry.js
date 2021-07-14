// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../geometry/Polygon ../../../geometry/Polyline ../../../geometry ../../../core/Evented ../coordinateHelper".split(" "),function(n,t,u,x,y,w,z,A){let p=function(){function k(g){this.right=this.left=null;this.type="vertex";this.index=null;this.component=g}t._createClass(k,[{key:"pos",get:function(){return this._pos},set:function(g){this._pos=g;this.component.unnormalizeVertexPositions()}}]);return k}(),q=function(k,
g,e){this.type="edge";this.component=k;this.left=g;this.right=e;g.right=this;e.left=this},r=function(){function k(e){this.vertices=[];this.edges=[];this.data=e}var g=k.prototype;g.unnormalizeVertexPositions=function(){1>=this.vertices.length||this.data.coordinateHelper.unnormalize(this.vertices)};g.updateVertexIndex=function(e,a){if(0!==this.vertices.length){var b=this.vertices[0],c=null;do c=e,c.index=a++,e=c.right?c.right.right:null;while(null!=e&&e!==b);c.left&&c!==this.vertices[this.vertices.length-
1]&&this.swapVertices(this.vertices.indexOf(c),this.vertices.length-1)}};g.getFirstVertex=function(){return 0===this.vertices.length?null:this.vertices[0]};g.getLastVertex=function(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]};g.swapVertices=function(e,a){const b=this.vertices[e];this.vertices[e]=this.vertices[a];this.vertices[a]=b};g.iterateVertices=function(e){if(0!==this.vertices.length){var a=this.vertices[0],b=a;do e(b,b.index),b=u.isSome(b.right)?b.right.right:
null;while(b!==a&&null!=b)}};return k}();w=function(k){function g(a){var b=k.call(this)||this;b.coordinateHelper=a;b.undoStack=[];b.redoStack=[];b.components=[];return b}t._inheritsLoose(g,k);var e=g.prototype;e.apply=function(a,b=1){if(0===b||u.isNone(this.lastOperation)||!this.lastOperation.accumulate(a))a.apply(),this.undoStack.push(a),this.redoStack=[]};e.undo=function(){if(0<this.undoStack.length){const a=this.undoStack.pop();a.undo();this.redoStack.push(a);return a}return null};e.redo=function(){if(0<
this.redoStack.length){const a=this.redoStack.pop();a.apply();this.undoStack.push(a);return a}return null};e.toPoint=function(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.createPoint(this.components[0].vertices[0].pos)};e.toPolyline=function(){const a=[],b=this.coordinateHelper.toArray;this.components.forEach((c,h)=>{h=[];const d=c=c.vertices.find(f=>null==f.left);do h.push(b(c.pos)),c=c.right?c.right.right:null;while(c&&c!==d);a.push(h)});
return new y({paths:a,spatialReference:this.coordinateHelper.spatialReference})};e.toPolygon=function(){const a=[],b=this.coordinateHelper.toArray;this.components.forEach((c,h)=>{h=[];let d=c=c.vertices[0];const f=d;do h.push(b(d.pos)),d=u.isSome(d.right)?d.right.right:null;while(d&&d!==f);h.push(b(c.pos));a.push(h)});return new x({rings:a,spatialReference:this.coordinateHelper.spatialReference})};g.fromGeometry=function(a,b){var c=A.createCoordinateHelper(a.hasZ,a.hasM,a.spatialReference,b);b=new g(c);
switch(a.type){case "polygon":var h=a.rings;for(a=0;a<h.length;++a){var d=h[a],f=new r(b),l=d.length-1;for(var m=0;m<l;++m){const B=c.fromArray(d[m]),v=new p(f);f.vertices.push(v);v.pos=B;v.index=m}d=f.vertices.length-1;for(l=0;l<d;++l)m=new q(f,f.vertices[l],f.vertices[l+1]),f.edges.push(m);d=new q(f,f.vertices[f.vertices.length-1],f.vertices[0]);f.edges.push(d);b.components.push(f)}break;case "polyline":for(h of a.paths){a=new r(b);f=h.length;for(d=0;d<f;++d)l=c.fromArray(h[d]),m=new p(a),a.vertices.push(m),
m.pos=l,m.index=d;f=a.vertices.length-1;for(d=0;d<f;++d)l=new q(a,a.vertices[d],a.vertices[d+1]),a.edges.push(l);b.components.push(a)}break;case "point":c=new r(b),h=new p(c),h.index=0,h.pos=b.coordinateHelper.fromPoint(a),c.vertices.push(h),b.components.push(c)}return b};t._createClass(g,[{key:"canUndo",get:function(){return 0<this.undoStack.length}},{key:"lastOperation",get:function(){return 0<this.undoStack.length?this.undoStack[this.undoStack.length-1]:null}},{key:"canRedo",get:function(){return 0<
this.redoStack.length}}]);return g}(z);n.Component=r;n.Edge=q;n.EditGeometry=w;n.Vertex=p;Object.defineProperty(n,"__esModule",{value:!0})});