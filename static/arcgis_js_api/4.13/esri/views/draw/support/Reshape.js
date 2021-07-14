// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../geometry ../../../Graphic ../../../core/Evented ../../../core/Handles ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/support/coordsUtils ../../../symbols/SimpleMarkerSymbol ./drawUtils ./GraphicMover".split(" "),function(O,P,z,n,t,p,A,y,q,u,k,x,v,B,C){var D=function(){return function(d,b,a){this.graphic=d;this.mover=b;this.selected=
a;this.type="reshape-start"}}(),E=function(){return function(d,b,a){this.graphic=d;this.mover=b;this.selected=a;this.type="reshape"}}(),F=function(){return function(d,b,a){this.graphic=d;this.mover=b;this.selected=a;this.type="reshape-stop"}}(),G=function(){return function(d,b,a){this.mover=d;this.dx=b;this.dy=a;this.type="move-start"}}(),H=function(){return function(d,b,a){this.mover=d;this.dx=b;this.dy=a;this.type="move"}}(),I=function(){return function(d,b,a){this.mover=d;this.dx=b;this.dy=a;this.type=
"move-stop"}}(),J=function(){return function(d){this.added=d;this.type="vertex-select"}}(),K=function(){return function(d){this.removed=d;this.type="vertex-deselect"}}(),L=function(){return function(d,b,a){this.added=d;this.graphic=b;this.oldGraphic=a;this.type="vertex-add"}}(),M=function(){return function(d,b,a){this.removed=d;this.graphic=b;this.oldGraphic=a;this.type="vertex-remove"}}(),N=["Backspace","Delete"];return function(d){function b(a){a=d.call(this,a)||this;a._handles=new y;a._mover=null;
a._viewHandles=new y;a._totalDx=0;a._totalDy=0;a.type="reshape";a.callbacks={onReshapeStart:function(a){},onReshape:function(a){},onReshapeStop:function(a){},onMoveStart:function(a){},onMove:function(a){},onMoveStop:function(a){}};a.graphic=null;a.handleGraphics=[];a.handleHoverSymbol=new v({style:"circle",size:8,color:[33,205,255],outline:{color:[0,12,255],width:1}});a.handleSelectionSymbol=new v({style:"circle",size:8,color:[255,255,255],outline:{color:[0,12,255],width:1}});a.handleSymbol=new v({style:"circle",
size:6,color:[33,205,255],outline:{color:[0,12,255],width:1}});a.layer=null;a.midpointGraphics=[];a.midpointSymbol=new v({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}});a.enableMidpoints=!0;a.selectedHandles=[];a.view=null;return a}z(b,d);b.prototype.initialize=function(){var a=this;this._setup();this._handles.add([u.whenOnce(this,"view.ready",function(){a.view&&a.view.map&&a.view.map.add(a.layer);a._viewHandles.add([a.view.on("key-down",function(c){return a._keyDownHandler(c)})])}),
u.pausable(this,"graphic",function(){return a.refresh()}),u.pausable(this,"layer",function(c,b){b&&(a._clearSelection(),a._resetGraphics(b));a.refresh()}),u.pausable(this,"enableMidpoints",function(){a.refresh()})])};b.prototype.destroy=function(){this._reset();this._mover&&this._mover.destroy();this._mover=null;this._handles.removeAll();this._handles=null;this._viewHandles.removeAll();this._viewHandles=null};Object.defineProperty(b.prototype,"state",{get:function(){var a=!!this.get("view.ready"),
c=!(!this.get("graphic")||!this.get("layer"));return a&&c?"active":a?"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype.isUIGraphic=function(a){var c=[];this.graphic&&c.push(this.graphic);c.concat(this.handleGraphics,this.midpointGraphics);return c.length&&-1<c.indexOf(a)};b.prototype.refresh=function(){this._reset();this._setup()};b.prototype.reset=function(){this.graphic=null};b.prototype.clearSelection=function(){this._clearSelection()};b.prototype.removeSelectedHandles=function(){this.selectedHandles.length&&
this._removeVertex(this.selectedHandles)};b.prototype._setup=function(){this.graphic&&this.layer&&(this._setupGraphics(),this._setupMover())};b.prototype._reset=function(){this._clearSelection();this._resetGraphicStateVars();this._resetGraphics();this._mover&&this._mover.destroy();this._mover=null;this.view.cursor="default"};b.prototype._resetGraphicStateVars=function(){this._totalDy=this._totalDx=0};b.prototype._resetGraphics=function(a){if(a=a||this.layer)a.removeMany(this.handleGraphics),a.removeMany(this.midpointGraphics);
this.handleGraphics.forEach(function(a){return a.destroy()});this.midpointGraphics.forEach(function(a){return a.destroy()});this._set("handleGraphics",[]);this._set("midpointGraphics",[]);this._set("selectedHandles",[])};b.prototype._setupGraphics=function(){var a=q.expect(this.graphic.geometry),c=x.geometryToCoordinates(a.clone());if("polygon"===a.type)for(a=0;a<c.length;a++){var b=c[a],l=b[b.length-1];b[0][0]===l[0]&&b[0][1]===l[1]&&2<b.length&&b.pop()}this._set("handleGraphics",this._createHandleGraphics(c));
this.enableMidpoints&&this._set("midpointGraphics",this._createMidpointGraphics(c));this._saveRelatedIndices(this.handleGraphics);this.layer.addMany(this.midpointGraphics);this.layer.addMany(this.handleGraphics)};b.prototype._createHandleGraphics=function(a){for(var c=[],b=0;b<a.length;b++)for(var l=a[b],e=a.indexOf(l),g=0,f=l;g<f.length;g++){var h=f[g],r=l.indexOf(h);c.push(new p({geometry:new t.Point({x:h[0],y:h[1],spatialReference:this.view.spatialReference}),symbol:this.handleSymbol,attributes:{pathIndex:e,
pointIndex:r}}))}return c};b.prototype._createMidpointGraphics=function(a){for(var c=[],b=0;b<a.length;b++)for(var l=a[b],e=a.indexOf(l),g=0,f=l;g<f.length;g++){var h=f[g],r=l.indexOf(h),m=h[0],d=h[1],h=l[r+1]?r+1:0;if("polygon"===q.get(this.graphic.geometry,"type")||0!==h){var k=l[h],m=x.getMidpoint([m,d],[k[0],k[1]]);c.push(new p({geometry:new t.Point({x:m[0],y:m[1],spatialReference:this.view.spatialReference}),symbol:this.midpointSymbol,attributes:{pathIndex:e,pointIndexStart:r,pointIndexEnd:h}}))}}return c};
b.prototype._saveRelatedIndices=function(a){for(var c=0;c<a.length;c++){for(var b=a[c],l=a.indexOf(b),e=[],g=b.geometry,f=g.x,g=g.y,h=0,d=a;h<d.length;h++){var m=d[h],k=a.indexOf(m);if(l!==k){var m=m.geometry,n=m.y;f===m.x&&g===n&&e.push(k)}}b.attributes.relatedGraphicIndices=e}};b.prototype._setupMover=function(){var a=this;this._mover=new C({enableMoveAllGraphics:!1,graphics:[].concat(this.handleGraphics,this.graphic,this.midpointGraphics),view:this.view,callbacks:{onGraphicClick:function(c){return a._onGraphicClickCallback(c)},
onGraphicMoveStart:function(c){return a._onGraphicMoveStartCallback(c)},onGraphicMove:function(c){return a._onGraphicMoveCallback(c)},onGraphicMoveStop:function(c){return a._onGraphicMoveStopCallback(c)},onGraphicPointerOver:function(c){return a._onGraphicPointerOverCallback(c)},onGraphicPointerOut:function(c){return a._onGraphicPointerOutCallback(c)}}})};b.prototype._onGraphicClickCallback=function(a){var c=a.graphic;c===this.graphic?this.clearSelection():-1<this.midpointGraphics.indexOf(c)?(a.viewEvent.stopPropagation(),
2!==a.viewEvent.button&&(a=this.graphic.clone(),this._createHandleFromMidpoint(c),this.refresh(),this._emitVertexAddEvent([c],a))):-1<this.handleGraphics.indexOf(c)&&(a.viewEvent.stopPropagation(),2===a.viewEvent.button?this._removeVertex(c):(a=a.viewEvent.native,a.ctrlKey||a.metaKey||this._clearSelection(),-1===this.selectedHandles.indexOf(c)?this._addToSelection(c):this._removeFromSelection(c,!0)))};b.prototype._onGraphicMoveStartCallback=function(a){var c=a.graphic;this._resetGraphicStateVars();
c===this.graphic?(c=a.dx,a=a.dy,this.handleGraphics.forEach(function(a){return a.visible=!1}),this.midpointGraphics.forEach(function(a){return a.visible=!1}),this._clearSelection(),this._emitMoveStartEvent(c,a)):(-1<this.midpointGraphics.indexOf(c)?(this._clearSelection(),this._createHandleFromMidpoint(c),this._addToSelection(c)):-1===this.selectedHandles.indexOf(c)&&(this._clearSelection(),this._addToSelection(c)),this._emitReshapeStartEvent(c))};b.prototype._onGraphicMoveCallback=function(a){var c=
a.graphic,b=a.dx;a=a.dy;this._totalDx+=b;this._totalDy+=a;c===this.graphic?this._emitMoveEvent(b,a):(this._syncGeometryAfterHandleMove(c,b,a),this._emitReshapeEvent(c))};b.prototype._onGraphicMoveStopCallback=function(a){var c=a.graphic,b=a.dx;a=a.dy;this._totalDx+=b;this._totalDy+=a;if(c===this.graphic){c=0;for(b=[].concat(this.handleGraphics,this.midpointGraphics);c<b.length;c++)b[c].visible=!0;this._syncGraphicsWithGeometry();this._emitMoveStopEvent()}else this._syncGeometryAfterHandleMove(c,b,
a),-1<this.midpointGraphics.indexOf(c)&&this.refresh(),this._emitReshapeStopEvent(c);this._resetGraphicStateVars()};b.prototype._syncGraphicsWithGeometry=function(){var a=this.graphic.geometry,a="polyline"===a.type?a.paths:a.rings;this._updateHandleGraphicLocations(a);this._updateMidpointGraphicLocations(a)};b.prototype._updateHandleGraphicLocations=function(a){for(var c=0,b=this.handleGraphics;c<b.length;c++){var l=b[c],e=l.attributes,e=a[e.pathIndex][e.pointIndex];l.set("geometry",new t.Point(e[0],
e[1],this.view.spatialReference))}};b.prototype._updateMidpointGraphicLocations=function(a){for(var b=0,w=this.midpointGraphics;b<w.length;b++){var l=w[b],e=l.attributes,g=e.pathIndex,f=a[g][e.pointIndexStart],e=a[g][e.pointIndexEnd],f=x.getMidpoint([f[0],f[1]],[e[0],e[1]]);l.geometry=new t.Point({x:f[0],y:f[1],spatialReference:this.view.spatialReference})}};b.prototype._syncGeometryAfterHandleMove=function(a,b,w){var c=q.expect(this.graphic.geometry).clone(),e="polyline"===c.type?c.paths:c.rings,
g=a.attributes,f=g.pathIndex,h=g.pointIndex,d=a.geometry,g=d.x,d=d.y,m=e[f].length-1;e[f][h]=[g,d];"polygon"===c.type&&(0===h?e[f][m]=[g,d]:h===m&&(e[f][0]=[g,d]));if(-1<this.handleGraphics.indexOf(a)){f=0;for(m=a.attributes.relatedGraphicIndices;f<m.length;f++){var h=m[f],h=this.handleGraphics[h],k=h.attributes;e[k.pathIndex][k.pointIndex]=[g,d];h.geometry=a.geometry}g=0;for(d=this.selectedHandles;g<d.length;g++)if(h=d[g],h!==a){var f=h.attributes,m=f.pathIndex,k=f.pointIndex,n=f.relatedGraphicIndices,
f=B.cloneMove(h.geometry,b,w,this.view),p=e[m].length-1;e[m][k]=[f.x,f.y];h.geometry=f;"polygon"===c.type&&(0===k?e[m][p]=[f.x,f.y]:k===p&&(e[m][0]=[f.x,f.y]));m=0;for(k=n;m<k.length;m++)h=k[m],h=this.handleGraphics[h],n=h.attributes,e[n.pathIndex][n.pointIndex]=[f.x,f.y],h.geometry=f}this._updateMidpointGraphicLocations(e)}this.graphic.geometry=c};b.prototype._onGraphicPointerOverCallback=function(a){a=a.graphic;-1<this.handleGraphics.indexOf(a)&&-1===this.selectedHandles.indexOf(a)&&(a.symbol=this.handleHoverSymbol);
this.view.cursor="pointer"};b.prototype._onGraphicPointerOutCallback=function(a){a=a.graphic;-1<this.handleGraphics.indexOf(a)&&-1===this.selectedHandles.indexOf(a)&&(a.symbol=this.handleSymbol);this.view.cursor="default"};b.prototype._createHandleFromMidpoint=function(a){var b=q.expect(this.graphic.geometry).clone(),d=a.attributes,l=d.pathIndex,e=d.pointIndexStart,g=d.pointIndexEnd,d=a.geometry,e=0===g?e+1:g;("polyline"===b.type?b.paths:b.rings)[l].splice(e,0,[d.x,d.y]);a.attributes={pathIndex:l,
pointIndex:e,relatedGraphicIndices:[]};this.graphic.geometry=b};b.prototype._removeHandles=function(a){var b=q.expect(this.graphic.geometry).clone(),d="polygon"===b.type?b.rings:b.paths;a instanceof p&&(a=[a]);for(var l=0,e=a;l<e.length;l++){var g=e[l].geometry;a=g.x;for(var g=g.y,f=0;f<d.length;f++)for(var h=d[f],k=0;k<h.length;k++){var m=h[k],n=m[1];a===m[0]&&g===n&&d[f].splice(Number(k),1)}}if("polygon"===b.type)for(l=0;l<d.length;l++)e=d[l],g=e[0],a=g[0],g=g[1],h=e[e.length-1],f=h[0],h=h[1],(1===
e.length||3>e.length&&a===f&&g===h)&&d.splice(d.indexOf(e),1),2<e.length&&(a!==f||g!==h)&&e.push(e[0]);else for(a=0;a<d.length;a++)g=d[a],1===g.length&&d.splice(d.indexOf(g),1);this.graphic.geometry=b};b.prototype._addToSelection=function(a){a instanceof p&&(a=[a]);for(var b=0,d=a;b<d.length;b++)d[b].symbol=this.handleSelectionSymbol;this._set("selectedHandles",this.selectedHandles.concat(a));this._emitSelectEvent(a)};b.prototype._removeFromSelection=function(a,b){b=b?this.handleHoverSymbol:this.handleSymbol;
a instanceof p&&(a=[a]);for(var c=0,d=a;c<d.length;c++){var e=d[c];this.selectedHandles.splice(this.selectedHandles.indexOf(e),1);this._set("selectedHandles",this.selectedHandles);e.symbol=b}this._emitDeselectEvent(a)};b.prototype._clearSelection=function(){if(this.selectedHandles.length){for(var a=this.selectedHandles,b=0,d=this.selectedHandles;b<d.length;b++){var k=d[b];k&&(k.symbol=this.handleSymbol)}this._set("selectedHandles",[]);this._emitDeselectEvent(a)}};b.prototype._keyDownHandler=function(a){-1<
N.indexOf(a.key)&&!a.repeat&&this.selectedHandles.length&&this._removeVertex(this.selectedHandles)};b.prototype._removeVertex=function(a){if(!("polygon"===this.graphic.geometry.type&&4>this.handleGraphics.length||3>this.handleGraphics.length)){var b=this.graphic.clone();a instanceof p&&(a=[a]);this._removeHandles(a);this.refresh();this._emitVertexRemoveEvent(a,b)}};b.prototype._emitMoveStartEvent=function(a,b){a=new G(this.graphic,a,b);this.emit("move-start",a);if(this.callbacks.onMoveStart)this.callbacks.onMoveStart(a)};
b.prototype._emitMoveEvent=function(a,b){a=new H(this.graphic,a,b);this.emit("move",a);if(this.callbacks.onMove)this.callbacks.onMove(a)};b.prototype._emitMoveStopEvent=function(){var a=new I(this.graphic,this._totalDx,this._totalDy);this.emit("move-stop",a);if(this.callbacks.onMoveStop)this.callbacks.onMoveStop(a)};b.prototype._emitReshapeStartEvent=function(a){a=new D(this.graphic,a,this.selectedHandles);this.emit("reshape-start",a);if(this.callbacks.onReshapeStart)this.callbacks.onReshapeStart(a)};
b.prototype._emitReshapeEvent=function(a){a=new E(this.graphic,a,this.selectedHandles);this.emit("reshape",a);if(this.callbacks.onReshape)this.callbacks.onReshape(a)};b.prototype._emitReshapeStopEvent=function(a){a=new F(this.graphic,a,this.selectedHandles);this.emit("reshape-stop",a);if(this.callbacks.onReshapeStop)this.callbacks.onReshapeStop(a)};b.prototype._emitSelectEvent=function(a){a=new J(a);this.emit("select",a);if(this.callbacks.onVertexSelect)this.callbacks.onVertexSelect(a)};b.prototype._emitDeselectEvent=
function(a){a=new K(a);this.emit("deselect",a);if(this.callbacks.onVertexDeselect)this.callbacks.onVertexDeselect(a)};b.prototype._emitVertexAddEvent=function(a,b){a=new L(a,this.graphic,b);this.emit("vertex-add",a);if(this.callbacks.onVertexAdd)this.callbacks.onVertexAdd(a)};b.prototype._emitVertexRemoveEvent=function(a,b){a=new M(a,this.graphic,b);this.emit("vertex-remove",a);if(this.callbacks.onVertexRemove)this.callbacks.onVertexRemove(a)};n([k.property({readOnly:!0})],b.prototype,"type",void 0);
n([k.property()],b.prototype,"callbacks",void 0);n([k.property()],b.prototype,"graphic",void 0);n([k.property({readOnly:!0})],b.prototype,"handleGraphics",void 0);n([k.property()],b.prototype,"handleHoverSymbol",void 0);n([k.property()],b.prototype,"handleSelectionSymbol",void 0);n([k.property()],b.prototype,"handleSymbol",void 0);n([k.property()],b.prototype,"layer",void 0);n([k.property({readOnly:!0})],b.prototype,"midpointGraphics",void 0);n([k.property()],b.prototype,"midpointSymbol",void 0);
n([k.property()],b.prototype,"enableMidpoints",void 0);n([k.property({readOnly:!0})],b.prototype,"selectedHandles",void 0);n([k.property({dependsOn:["view.ready","graphic","layer"],readOnly:!0})],b.prototype,"state",null);n([k.property()],b.prototype,"view",void 0);return b=n([k.subclass("esri.views.draw.support.Reshape")],b)}(k.declared(A.EventedAccessor))});