// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../core/scheduling ../../../../../core/Evented ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../chunks/vec3f64 ../../../../../chunks/common ../../../../../chunks/vec3 ../../../support/mathUtils ../../../../../core/Handles ../../../../../core/watchUtils ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../support/elevationInfoUtils ../../../support/stack ../../../support/geometryUtils ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/ColorMaterial ../../../../interactive/dragEventPipeline ../dragEventPipeline3D ../../Manipulator3D ../../manipulatorUtils ../manipulations/config".split(" "),
function(K,S,v,T,U,B,L,D,V,w,W,X,Y,z,Z,aa,q,C,H,ba,M,ca,da,I,d){function ea(e,c){var a=w.subtract(q.sv3d.get(),c.renderStart,e.origin);e=w.subtract(q.sv3d.get(),c.renderEnd,e.origin);a=w.length(a);e=w.length(e);return 0===a?0:e/a}function fa(e,c){const a=e.allLayerViews.find(g=>g.layer===c.layer);if(v.isNone(c.symbol))return null;const b=c.symbol;return{symbolLayers:b.symbolLayers.map(g=>{let n=null,p=null;"object"===g.type&&(n=g.heading);p=a.getSymbolLayerSize(b,g);return{heading:n,size:p}}).toArray()}}
function ha(e,c,a,b){const {renderStart:g,renderEnd:n}=e;var p=G(g,b,q.sv3d.get());e=G(n,b,q.sv3d.get());if(w.squaredDistance(p,e)<d.DRAG_THRESHOLD_PX*d.DRAG_THRESHOLD_PX)return null;const t=w.subtract(q.sv3d.get(),g,a);c=w.cross(q.sv3d.get(),t,c);c=w.add(q.sv3d.get(),g,c);a=G(a,b,q.sv3d.get());b=G(c,b,q.sv3d.get());c=w.subtract(q.sv3d.get(),b,p);b=w.subtract(q.sv3d.get(),p,a);p=C.ray.wrap(p,c);b=C.ray.wrap(a,b);return C.ray.distance2(p,e)<C.ray.distance2(b,e)?"rotate":"scale"}function G(e,c,a){e=
c.projectToRenderScreen(e,L.castRenderScreenPointArray(ia));c=c.renderToScreen(e,ja);return w.set(a,c[0],c[1],0)}function N(e,c){let a=null,b=1;const g=()=>b;return{start:()=>{b=e.getScale();a=e.getScale;e.getScale=g;c()},update:n=>{b+=((b+1)/2-b)*Math.min(n*d.RING_RESET_ANIMATION_SPEED_FACTOR,1);c();return.01>Math.abs(b-1)?1:0},destroy:()=>{e.getScale=a;c()}}}function ka(e,c){let a=0,b=null;const g=()=>!1;return{start:()=>{b=e.getFocused;e.getFocused=g;a=0;c()},update:n=>{a+=n;return!b()||a>d.RING_INDICATOR_DELAY_MS?
1:0},destroy:()=>{e.getFocused=b;c()}}}var h;(function(e){e.ScaleIn=32;e.ScaleOut=64;e.RotateLeft=128;e.RotateRight=256;e.Unlocked=1024;e.DelayedFocused=2048;e.TouchInput=32768})(h||(h={}));let la=function(){function e(a){this.mode=null;this._handles=new X;this._activeAnimation=this._scaleRotateDragData=null;this.events=new U;this.getFocused=()=>this.ringManipulator.focused;this.getScale=()=>v.isSome(this._scaleRotateDragData)&&"scale"===this._scaleRotateDragData.mode?this._scaleRotateDragData.scale:
1;this.tool=a.tool;this.mode=a.mode;this.createManipulator();this.updateDragState();this.updateManipulatorTransform()}var c=e.prototype;c.destroy=function(){v.isSome(this._activeAnimation)&&(this._activeAnimation.frameTask.remove(),this._activeAnimation=null);this._handles.removeAll();this.tool.manipulators.remove(this.ringManipulator);this.ringManipulator=null};c.startAnimation=function(a){this.cancelActiveAnimation();a.start();const b=T.addFrameTask({update:({deltaTime:g})=>{a.update(g)&&this.cancelActiveAnimation()}});
this._activeAnimation={...a,frameTask:b}};c.cancelActiveAnimation=function(){v.isSome(this._activeAnimation)&&(this._activeAnimation.frameTask.remove(),this._activeAnimation.destroy(),this._activeAnimation=null)};c.forEachManipulator=function(a){a(this.ringManipulator,4)};c.createManipulator=function(){this.ringManipulator=this.createRingManipulator();this.tool.manipulators.add(this.ringManipulator);const a=this.tool.graphicState.graphic,b=M.createManipulatorDragEventPipeline(this.ringManipulator,
(g,n,p)=>{this._scaleRotateDragData=null;var t=fa(this.tool.view,a);if(v.isNone(t))return this.updateDragState(),null;const f={mode:"none",origin:D.clone(g.renderLocation),angle:0,startAngle:this.tool.symbolRotationAngle,angleDir:0,scale:1,scaleDir:0,startSymbolData:t};this._scaleRotateDragData=f;this.updateDragState();t=q.sv3d.get();this.tool.view.renderCoordsHelper.worldUpAtPosition(g.renderLocation,t);n.next(ca.screenToRenderPlane(this.tool.view,C.plane.fromPositionAndNormal(g.renderLocation,t))).next(m=>
{var k=C.plane.normal(m.plane);k=I.calculateInputRotationTransform(m.renderStart,m.renderEnd,f.origin,k);var l=W.cyclicalPI.shortestSignedDiff(f.angle,k);f.angleDir=B.clamp(f.angleDir+l,-d.ROTATE_INDICATOR_DIRECTION_BUFFER,d.ROTATE_INDICATOR_DIRECTION_BUFFER);f.angle=k;k=ea(f,m);f.scaleDir=B.clamp(f.scaleDir+(k-f.scale),-d.SCALE_INDICATOR_DIRECTION_BUFFER,d.SCALE_INDICATOR_DIRECTION_BUFFER);f.scale=k;this.onScaleChanged();if("none"===f.mode&&(k=this.mode||ha(m,m.plane,f.origin,this.tool.view.state.camera),
v.isSome(k))){switch(k){case "rotate":this.tool.emit("graphic-rotate-start",{graphic:a,angle:B.rad2deg(f.angle)});break;case "scale":this.tool.emit("graphic-scale-start",{graphic:a,xScale:f.scale,yScale:f.scale})}f.mode=k}this.updateDragState();if(v.isSome(a.symbol)){k=a.symbol.clone();l=0;let u=1;switch(f.mode){default:case "none":break;case "scale":u=f.scale;break;case "rotate":l=f.angle}this.applySymbolData(k,f.startSymbolData,l,u);a.symbol=k;this.updateManipulatorTransform()}switch(m.action){case "start":case "update":switch(f.mode){case "rotate":this.tool.emit("graphic-rotate",
{graphic:a,angle:B.rad2deg(f.angle)});break;case "scale":this.tool.emit("graphic-scale",{graphic:a,xScale:f.scale,yScale:f.scale})}break;case "end":switch(f.mode){case "rotate":this.tool.emit("graphic-rotate-stop",{graphic:a,angle:B.rad2deg(f.angle)});break;case "scale":this.tool.emit("graphic-scale-stop",{graphic:a,xScale:f.scale,yScale:f.scale})}}"end"===m.action&&(this.startAnimation(N(this,()=>this.onScaleChanged())),this._scaleRotateDragData=null,this.updateDragState())});p.next(M.resetSymbol(a)).next(()=>
{if(v.isSome(this._scaleRotateDragData)){switch(this._scaleRotateDragData.mode){case "rotate":this.tool.emit("graphic-rotate-stop",{graphic:a,angle:B.rad2deg(this._scaleRotateDragData.startAngle)});break;case "scale":this.tool.emit("graphic-scale-stop",{graphic:a,xScale:1,yScale:1})}this.startAnimation(N(this,()=>this.onScaleChanged()));this._scaleRotateDragData=null}})});this._handles.add(b);this._handles.add([this.ringManipulator.events.on("focus-changed",g=>{"focus"===g.action?this.startAnimation(ka(this,
()=>this.updateDelayedFocusedState())):this.updateDelayedFocusedState()}),this.ringManipulator.events.on("immediate-click",g=>{g.stopPropagation()}),Y.init(this.tool.graphicState,"displaying",g=>this.ringManipulator.available=g),this.tool.graphicState.on("changed",()=>I.placeAtGraphic(this.tool.view,this.ringManipulator,a))]);I.placeAtGraphic(this.tool.view,this.ringManipulator,a)};c.onScaleChanged=function(){this.events.emit("scale-changed");this.updateManipulatorTransform()};c.updateDelayedFocusedState=
function(){this.ringManipulator.updateStateEnabled(h.DelayedFocused,this.getFocused())};c.updateDragState=function(){this.ringManipulator.updateStateEnabled(h.Unlocked,!(v.isSome(this._scaleRotateDragData)&&"none"!==this._scaleRotateDragData.mode));if(v.isSome(this._scaleRotateDragData))switch(this._scaleRotateDragData.mode){case "rotate":this.ringManipulator.updateStateEnabled(h.ScaleIn|h.ScaleOut,!1);this.ringManipulator.updateStateEnabled(h.RotateLeft,0>this._scaleRotateDragData.angleDir);this.ringManipulator.updateStateEnabled(h.RotateRight,
0<=this._scaleRotateDragData.angleDir);break;case "scale":this.ringManipulator.updateStateEnabled(h.RotateLeft|h.RotateRight,!1),this.ringManipulator.updateStateEnabled(h.ScaleIn,0>this._scaleRotateDragData.scaleDir),this.ringManipulator.updateStateEnabled(h.ScaleOut,0<=this._scaleRotateDragData.scaleDir)}else this.ringManipulator.updateStateEnabled(h.ScaleIn|h.ScaleOut|h.RotateLeft|h.RotateRight,!1)};c.updateManipulatorTransform=function(){const a=z.identity(q.sm4d.get());z.rotate(a,a,this.tool.symbolRotationAngle,
D.fromValues(0,0,1));var b=this.getScale();b=z.fromScaling(q.sm4d.get(),w.set(q.sv3d.get(),b,b,b));const g=z.identity(q.sm4d.get());z.multiply(g,b,a);this.ringManipulator.modelTransform=g};c.createRingManipulator=function(){var a=(E,A,O)=>{const P=[],Q=Math.ceil(d.GEOMETRY_SEGMENTS*(A-E)/(2*Math.PI));for(let J=0;J<Q+1;J++){const R=E+J*(A-E)/Q;P.push(D.fromValues(O*Math.cos(R),O*Math.sin(R),0))}return P},b=(E,A)=>H.createPathExtrusionGeometry([[-A/2,0],[A/2,0],[A/2,d.RING_HEIGHT/2],[-A/2,d.RING_HEIGHT/
2]],E,[],[],!1),g=a(0,2*Math.PI,d.RING_RADIUS),n=b(g,d.RING_THICKNESS),p=[],t=[];const f=[];for(var m=0;2>m;m++){var k=m*Math.PI-Math.PI/4,l=Math.PI/2-d.ROTATE_INDICATOR_ARC_LENGTH,u=k+l;k=k+Math.PI/2-l;l=a(u,k,d.INNER_INDICATOR_RADIUS);var x=b(l,d.INDICATOR_THICKNESS);f.push(l);f.push(a(u,k,d.OUTER_INDICATOR_RADIUS-d.RING_THICKNESS/2));p.push(x);t.push(x);for(x=0;2>x;x++){var F=0===x,r=Z.create();if(F){z.scale(r,r,[1,-1,1]);z.rotate(r,r,-u,[0,0,1]);var y=Math.round(d.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE*
(l.length-1));r[12]=l[y][0];r[13]=l[y][1];r[14]=l[y][2]}else z.rotate(r,r,k,[0,0,1]),y=Math.round((1-d.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE)*(l.length-1)),r[12]=l[y][0],r[13]=l[y][1],r[14]=l[y][2];y=H.createExtrudedTriangle(d.ROTATE_INDICATOR_ARROW_TIP_LENGTH,0,d.ROTATE_INDICATOR_ARROW_TIP_RADIUS,d.RING_HEIGHT);H.transformInPlace(y,r);(F?p:t).push(y)}}m=[];for(u=0;2>u;u++)k=u*Math.PI-Math.PI/4,l=Math.PI/2-d.SCALE_INDICATOR_ARC_LENGTH,k=a(k+l,k+Math.PI/2-l,d.OUTER_INDICATOR_RADIUS),m.push(b(k,
d.INDICATOR_THICKNESS));u=a(0,2*Math.PI,d.RING_RADIUS+d.SCALE_INDICATOR_OFFSET1);k=a(0,2*Math.PI,d.RING_RADIUS+d.SCALE_INDICATOR_OFFSET2);u=b(u,d.INDICATOR_THICKNESS);k=b(k,d.INDICATOR_THICKNESS);l=a(0,2*Math.PI,d.RING_RADIUS-d.SCALE_INDICATOR_OFFSET1);x=a(0,2*Math.PI,d.RING_RADIUS-d.SCALE_INDICATOR_OFFSET2);a=b(l,d.INDICATOR_THICKNESS);b=b(x,d.INDICATOR_THICKNESS);l=this.createMaterial();x=this.createMaterial(.66);r=this.createMaterial(.5);F=this.createMaterial(.33);n=[{geometry:n,material:l,stateMask:h.DelayedFocused},
{geometry:n,material:r,stateMask:0}];this.mode&&"scale"!==this.mode||(n=n.concat([{geometry:m,material:l,stateMask:h.DelayedFocused|h.Unlocked},{geometry:u,material:x,stateMask:h.DelayedFocused|h.ScaleIn},{geometry:k,material:F,stateMask:h.DelayedFocused|h.ScaleIn},{geometry:a,material:x,stateMask:h.DelayedFocused|h.ScaleOut},{geometry:b,material:F,stateMask:h.DelayedFocused|h.ScaleOut}]));this.mode&&"rotate"!==this.mode||(n=n.concat([{geometry:t,material:l,stateMask:h.DelayedFocused|h.Unlocked},
{geometry:p,material:l,stateMask:h.DelayedFocused|h.RotateLeft},{geometry:t,material:l,stateMask:h.DelayedFocused|h.RotateRight}]));g=[g,...f];return new da.Manipulator3D({view:this.tool.view,renderObjects:n,autoScaleRenderObjects:!1,worldOriented:!0,radius:d.RING_THICKNESS,focusMultiplier:1,touchMultiplier:1.5,elevationInfo:aa.getGraphicEffectiveElevationInfo(this.tool.graphicState.graphic),collisionType:{type:"ribbon",paths:g,direction:D.fromValues(0,0,1)}})};c.createMaterial=function(a=1){const b=
[...d.HANDLE_COLOR,a];return new ba.ColorMaterial({color:b,transparent:1!==a,cullFace:2,renderOccluded:2})};c.applySymbolData=function(a,b,g,n){a.symbolLayers.forEach((p,t)=>{const {heading:f,size:m}=b.symbolLayers[t];"object"===p.type&&(p.heading=(v.isSome(f)?f:0)-V.toDegree(g),v.isSome(m)&&"width"in m&&(m.width=this.enforceNonZeroSize(m.width),m.height=this.enforceNonZeroSize(m.height),m.depth=this.enforceNonZeroSize(m.depth),p.width=m.width*n,p.depth=m.depth*n,p.height=m.height*n))})};c.enforceNonZeroSize=
function(a){return a||this.tool.view.state.camera.computeRenderPixelSizeAt(this.ringManipulator.renderLocation)};S._createClass(e,[{key:"test",get:function(){return{ringManipulator:this.ringManipulator}}}]);return e}();const ia=D.create(),ja=L.createScreenPointArray();K.GraphicScaleRotateTransform=la;Object.defineProperty(K,"__esModule",{value:!0})});