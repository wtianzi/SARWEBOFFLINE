// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/compilerUtils ../../../../../core/maybe ../../../../../core/Logger ../../../../../geometry/Point ../../../../../geometry ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../chunks/vec3f64 ../../../../../chunks/vec3 ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/quat ../../../support/stack ../../../../../chunks/vector ../../../support/geometryUtils ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/RibbonLineMaterial ../../../webgl-engine/materials/NativeLineMaterial ../../../webgl-engine/materials/ColorMaterial ../../Manipulator3D ../../manipulatorUtils ../../visualElements/LineVisualElement ./sliceToolConfig ../../visualElements/SlicePlaneVisualElement ../../../webgl-engine/materials/ImageMaterial ../../../../../widgets/Slice/SlicePlane".split(" "),
function(q,V,C,W,X,ha,E,J,y,e,t,K,Q,l,F,x,Y,z,Z,L,G,M,aa,ba,n,ca,da,ea){function R(a,c,b,d,f,g){const h=e.dot(a,c),k=l.sv3d.get(),p=l.sv3d.get();switch(0===d?Math.abs(h)>n.VERTICAL_DOT_THRESHOLD?1:2:d){case 2:e.cross(k,Math.abs(h)<=n.SMALL_ANGLE_DOT_THRESHOLD?a:b.viewUp,c);e.copy(p,c);break;case 1:e.cross(k,b.viewUp,c);e.cross(p,c,k);break;case 3:e.cross(k,Math.abs(h)<=n.SMALL_ANGLE_DOT_THRESHOLD?c:b.viewUp,a),e.cross(p,a,k)}a=e.cross(l.sv3d.get(),k,p);0<e.dot(a,b.viewForward)&&e.scale(p,p,-1);e.normalize(f,
k);e.normalize(g,p)}function N(a,c){switch(c){case 0:return{basis:a.basis1,direction:1,position:e.add(l.sv3d.get(),a.origin,a.basis1),edge:c};case 1:return{basis:a.basis2,direction:1,position:e.add(l.sv3d.get(),a.origin,a.basis2),edge:c};case 2:return{basis:a.basis1,direction:-1,position:e.subtract(l.sv3d.get(),a.origin,a.basis1),edge:c};case 3:return{basis:a.basis2,direction:-1,position:e.subtract(l.sv3d.get(),a.origin,a.basis2),edge:c}}}function O(a,c,b){const d=b.projectToRenderScreen(e.add(l.sv3d.get(),
a,c),J.castRenderScreenPointArray3(l.sv3d.get()));a=b.projectToRenderScreen(e.subtract(l.sv3d.get(),a,c),J.castRenderScreenPointArray3(l.sv3d.get()));return e.squaredLength(e.subtract(d,d,a))}function D(a){const c=e.length(a.basis1);a=e.length(a.basis2);return n.RESIZE_HANDLE_EDGE_PADDING_FRAC*Math.min(c,a)}function H(a){return 0!==a.direction[0]&&0!==a.direction[1]}function S(a,c,b){const d=f=>{const g=(f?c:a).slice(0);var h=e.subtract(l.sv3d.get(),g[0],g[1]);e.normalize(h,h);var k=e.subtract(l.sv3d.get(),
g[g.length-1],g[g.length-2]);e.normalize(k,k);if(0<b.padding){var p=e.scale(y.create(),k,-b.padding);g[g.length-1]=e.add(p,p,g[g.length-1]);b.bothEnds&&(p=e.scale(y.create(),h,-b.padding),g[0]=e.add(p,p,g[0]))}var m=f?b.tipFocusMultiplier:1;p=b.tipLength*(b.focusTipLength?m:1);const v=b.tipRadius*m;m=t.identity(l.sm4d.get());if(0<b.padding){var r=p/4,u=e.set(l.sv3d.get(),0,r,0);r=1+b.padding/r;t.translate(m,m,u);t.scale(m,m,e.set(l.sv3d.get(),r,r,r));t.translate(m,m,e.scale(u,u,-1/r))}r=t.identity(K.create());
u=y.fromValues(0,1,0);k=t.fromQuat(K.create(),Q.rotationTo(l.sq4d.get(),u,k));k[12]=g[g.length-1][0];k[13]=g[g.length-1][1];k[14]=g[g.length-1][2];t.multiply(k,k,m);{f=b.tubeRadius*(f?b.tubeFocusMultiplier:1)+b.padding;var w=b.flat;const P=[];if(C.isSome(w))P.push([f,w.thickness/2],[-f,w.thickness/2],[-f,-w.thickness/2],[f,-w.thickness/2]);else for(w=0;12>w;w++){const T=w/12*2*Math.PI;P.push([Math.cos(T)*f,Math.sin(T)*f])}f=z.createPathExtrusionGeometry(P,g,[],[],!1)}f=[{part:"tube",geometry:f,transform:r}];
let A;C.isSome(b.flat)?r=z.createExtrudedTriangle(p,v,v,b.flat.thickness):(r=z.createConeGeometry(p,v,24,!1,!1,!0),A=z.createConeGeometry(p,v,24,!1,!0,!1));f.push({part:"tip",geometry:r,transform:k});A&&f.push({part:"cap",geometry:A,transform:k});b.bothEnds&&(h=t.fromQuat(K.create(),Q.rotationTo(l.sq4d.get(),u,h)),h[12]=g[0][0],h[13]=g[0][1],h[14]=g[0][2],t.multiply(h,h,m),f.push({part:"tip",geometry:r,transform:h}),A&&f.push({part:"cap",geometry:A,transform:h}));return f};return{normal:d(!1),focused:d(!0)}}
function U(a,c){const b=e.subtract(y.create(),a[a.length-1],a[a.length-2]);e.normalize(b,b);e.scale(b,b,n.ROTATE_HEADING_TIP_LENGTH);e.add(b,b,a[a.length-1]);return c?(c=e.subtract(y.create(),a[0],a[1]),e.normalize(c,c),e.scale(c,c,n.ROTATE_HEADING_TIP_LENGTH),e.add(c,c,a[0]),[c,...a,b]):[...a,b]}const fa=W.getLogger("esri.views.3d.interactive.analysisTools.slice.sliceToolUtils"),I=x.ray.create(),B=Math.PI/2;q.DidPointerMoveRecentlyFlag=16;q.IsShiftEdgeOnScreenFlag=32;q.addArrowTips=U;q.calculateBoundedPlaneTranslateRotate=
function(a,c){return aa.calculateTranslateRotateFromBases(a.basis1,a.basis2,a.origin,c)};q.calculateDiagonalResizeHandleScale=function(a){return D(a)};q.calculatePlaneHalfSize=function(a,c){return n.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION*Math.min(c.width,c.height)*c.computeRenderPixelSizeAt(a)};q.calculateResizeHandlePadding=D;q.calculateScreenSpaceBasisLength2=O;q.createArrowGeometry=S;q.createGridVisualElement=function(a){return new ca.SlicePlaneVisualElement({view:a,attached:!0,backgroundColor:[...n.PLANE_BACKGROUND_COLOR],
gridColor:n.GRID_COLOR,gridWidth:4,renderOccluded:4})};q.createOutlineVisualElement=function(a){return new ba.LineVisualElement({view:a,attached:!0,color:n.PLANE_OUTLINE_COLOR,width:n.PLANE_OUTLINE_WIDTH,writeDepthEnabled:!1,renderOccluded:4,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]]})};q.createPlane=function(a,c,b,d,f,g,h,k){h=h.worldUpAtPosition(a,l.sv3d.get());R(c,h,f,g,k.basis1,k.basis2);e.scale(k.basis1,k.basis1,b);e.scale(k.basis2,k.basis2,d);e.copy(k.origin,a);x.plane.fromVectorsAndPoint(k.basis2,
k.basis1,k.origin,k.plane);return k};q.createResizeManipulator=function(a,c){const b=(c=H(c))?[y.fromValues(1,0,0),y.fromValues(0,0,0),y.fromValues(0,1,0)]:[y.fromValues(1,0,0),y.fromValues(-1,0,0)];var d=z.createPolylineGeometry(b);const f=[...n.HANDLE_COLOR,1],g=v=>new Z.RibbonLineMaterial({color:f,width:v,renderOccluded:4}),h=()=>new L.NativeLineMaterial({color:f,renderOccluded:4}),k=c?n.RESIZE_HANDLE_CORNER_WIDTH:n.RESIZE_HANDLE_EDGE_WIDTH,p=k*n.DISPLAY_FOCUS_MULTIPLIER,m=n.RESIZE_HANDLE_EDGE_WIDTH;
d=[{geometry:d,material:1<k?g(k):h(),stateMask:17},{geometry:d,material:1<p?g(p):h(),stateMask:18},{geometry:d,material:1<m?g(m):h(),stateMask:32}];a=new M.Manipulator3D({view:a,renderObjects:d,collisionType:{type:"line",paths:[b]},autoScaleRenderObjects:!1,worldSized:!0,radius:c?n.RESIZE_HANDLE_CORNER_INPUT_RADIUS:n.RESIZE_HANDLE_EDGE_INPUT_RADIUS,idHint:c?1:2});a.state=16;return a};q.createRotateManipulator=function(a,c){var b=new da.ImageMaterial({transparent:!0,writeDepth:!1,textureId:c.id,renderOccluded:16});
const d=n.ROTATE_HEADING_OFFSET_DISTANCE;c=n.ROTATE_HEADING_DISC_RADIUS;const f=c*n.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,g=m=>{const v=new Uint32Array([0,1,2,2,3,0]);return new Y.Geometry([["position",{size:3,data:[d-m,-m,0,d+m,-m,0,d+m,m,0,d-m,m,0],exclusive:!0}],["uv0",{size:2,data:[0,0,1,0,1,1,0,1]}]],[["position",v],["uv0",v]])},h=z.createPolylineGeometry([[0,0,0],[d-c,0,0]]),k=z.createPolylineGeometry([[0,0,0],[d-f,0,0]]),p=new L.NativeLineMaterial({color:n.ROTATE_HEADING_CALLOUT_COLOR,
renderOccluded:4});b=[{geometry:g(c),material:b,stateMask:17},{geometry:h,material:p,stateMask:17},{geometry:g(f),material:b,stateMask:18},{geometry:k,material:p,stateMask:18}];return new M.Manipulator3D({view:a,renderObjects:b,autoScaleRenderObjects:!1,collisionType:{type:"disc",direction:[0,0,1],offset:[d,0,0]},collisionPriority:1,radius:c/2,state:16})};q.createRotatePlane=function(a,c,b,d){c=c.worldUpAtPosition(a.origin,l.sv3d.get());const f=l.sv3d.get();switch(b){case 1:e.copy(f,c);break;case 2:e.copy(f,
a.basis1)}return x.plane.fromPositionAndNormal(a.origin,f,d)};q.createShiftManipulator=function(a,c=1){var b=0===c?n.SHIFT_RESTART_OFFSET_DISTANCE:0;const d=[y.fromValues(b,0,-n.SHIFT_RESTART_ARROW_LENGTH/2),y.fromValues(b,0,n.SHIFT_RESTART_ARROW_LENGTH/2)];c=U(d,!0);var f=(u,w)=>S(d,d,{tubeRadius:n.SHIFT_RESTART_TUBE_RADIUS,tipRadius:n.SHIFT_RESTART_TIP_RADIUS,tipLength:n.SHIFT_RESTART_TIP_LENGTH,tubeFocusMultiplier:n.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER,tipFocusMultiplier:n.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER,
padding:u,bothEnds:!0,flat:null,focusTipLength:!0,addCap:w});const g=f(0,!1);f=f(n.SHIFT_RESTART_ARROW_OUTLINE_WIDTH,!0);const h=new G.ColorMaterial({color:n.SHIFT_RESTART_ARROW_TIP_COLOR,cullFace:2,renderOccluded:16}),k=new G.ColorMaterial({color:n.SHIFT_RESTART_ARROW_CAP_COLOR,cullFace:2,renderOccluded:16}),p=new G.ColorMaterial({color:n.SHIFT_RESTART_TUBE_COLOR,cullFace:2,renderOccluded:16}),m=new G.ColorMaterial({color:n.SHIFT_RESTART_OUTLINE_COLOR,transparent:!0,writeDepth:!1,cullFace:1,renderOccluded:2}),
v=z.createPolylineGeometry([[b,0,0],[b-n.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]);b=z.createPolylineGeometry([[b,0,0],[b-n.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]);const r=new L.NativeLineMaterial({color:n.SHIFT_RESTART_CALLOUT_COLOR,renderOccluded:4});return new M.Manipulator3D({view:a,renderObjects:[...g.normal.map(({part:u,geometry:w,transform:A})=>({geometry:w,material:"tip"===u?h:"cap"===u?k:p,transform:A,stateMask:17})),...f.normal.map(({geometry:u,transform:w})=>({geometry:u,material:m,transform:w,
stateMask:17})),{geometry:v,material:r,stateMask:49},...g.focused.map(({part:u,geometry:w,transform:A})=>({geometry:w,material:"tip"===u?h:"cap"===u?k:p,transform:A,stateMask:18})),...f.focused.map(({geometry:u,transform:w})=>({geometry:u,material:m,transform:w,stateMask:18})),{geometry:b,material:r,stateMask:50}],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[c]},collisionPriority:1,radius:n.SHIFT_RESTART_TIP_RADIUS,state:16})};q.createShiftPlane=function(a,c,b,d){b=e.cross(l.sv3d.get(),
c,b);e.cross(b,b,c);return x.plane.fromPositionAndNormal(a,b,d)};q.forceHorizontalOrVertical=function(a,c,b){var d=c.worldUpAtPosition(a.origin,l.sv3d.get());c=a.basis1;d=F.angleAroundAxis(d,a.basis2,a.basis1)+B;return x.boundedPlane.rotate(a,Math.round(d/B)*B-d,c,b)};q.isAlwaysDrapedLayer=function(a){switch(a.type){case "building-scene":case "csv":case "feature":case "geo-rss":case "geojson":case "graphics":case "group":case "integrated-mesh":case "kml":case "map-notes":case "ogc-feature":case "point-cloud":case "route":case "scene":case "stream":case "unknown":case "unsupported":case null:return!1;
case "base-dynamic":case "base-elevation":case "base-tile":case "bing-maps":case "elevation":case "imagery":case "imagery-tile":case "map-image":case "open-street-map":case "tile":case "vector-tile":case "wcs":case "web-tile":case "wms":case "wmts":return!0;default:return V.neverReached(a.type),!1}};q.isDiagonalResizeHandle=H;q.normalToBases=R;q.planeToShape=function(a,c,b,d=new ea){if(C.isNone(a))return null;const f=C.isSome(d.position)?d.position:new X;c.fromRenderCoords(a.origin,f,b);d.position=
f;b=c.worldUpAtPosition(a.origin,l.sv3d.get());c=c.worldBasisAtPosition(a.origin,1,l.sv3d.get());d.width=2*e.length(a.basis1);d.height=2*e.length(a.basis2);d.tilt=E.rad2deg(F.angleAroundAxis(b,a.basis2,a.basis1)+B);d.heading=E.rad2deg(F.angleAroundAxis(a.basis1,c,b)-B);return d};q.resizeNormal=16;q.resizeOutlineOnly=32;q.resizePlane=function(a,c,b,d,f,g){const h=e.copy(l.sv3d.get(),f.origin);e.add(h,h,e.scale(l.sv3d.get(),f.basis1,0>a.direction[0]?1:-1));e.add(h,h,e.scale(l.sv3d.get(),f.basis2,0>
a.direction[1]?1:-1));var k=e.length(f.basis1);const p=e.length(f.basis2);b=e.subtract(l.sv3d.get(),b,h);var m=e.subtract(l.sv3d.get(),c,h);let v=0;c=0;if(H(a)){var r=D(f);const u=D(g);v=k-.5*a.direction[0]*e.dot(f.basis1,m)/k;c=p-.5*a.direction[1]*e.dot(f.basis2,m)/p;m=u/r;v*=m;c*=m}m=.5*a.direction[0]*e.dot(f.basis1,b)/k;r=.5*a.direction[1]*e.dot(f.basis2,b)/p;b=v+m;c+=r;k=e.scale(l.sv3d.get(),f.basis1,b/k);f=e.scale(l.sv3d.get(),f.basis2,c/p);(0>=b||O(g.origin,k,d)<=n.PLANE_MIN_BASIS_SCREEN_LEN2)&&
e.copy(k,g.basis1);(0>=c||O(g.origin,f,d)<=n.PLANE_MIN_BASIS_SCREEN_LEN2)&&e.copy(f,g.basis2);d=e.copy(l.sv3d.get(),h);e.add(d,d,e.scale(l.sv3d.get(),k,0>a.direction[0]?-1:1));e.add(d,d,e.scale(l.sv3d.get(),f,0>a.direction[1]?-1:1));return x.boundedPlane.fromValues(d,k,f,g)};q.shapeToPlane=function(a,c,b=x.boundedPlane.create()){if(C.isNone(a)||C.isNone(a.position))return null;if(!c.toRenderCoords(a.position,b.origin))return fa.error(`Failed to project slice plane position, projection from ${a.position.spatialReference.wkid} is not supported`),
null;c.worldBasisAtPosition(b.origin,0,b.basis1);c.worldBasisAtPosition(b.origin,1,b.basis2);x.plane.fromVectorsAndPoint(b.basis2,b.basis1,b.origin,b.plane);x.boundedPlane.rotate(b,-E.deg2rad(a.heading),x.boundedPlane.normal(b),b);x.boundedPlane.rotate(b,E.deg2rad(a.tilt),b.basis1,b);e.scale(b.basis1,b.basis1,a.width/2);e.scale(b.basis2,b.basis2,a.height/2);x.boundedPlane.updateUnboundedPlane(b);return b};q.updateResizeHandle=function(a,c,b,d){var f=e.length(d.basis1);const g=e.length(d.basis2);var h=
D(d);const k=D(d),p=e.set(l.sv3d.get(),0,0,0);e.add(p,e.scale(l.sv3d.get(),d.basis1,c.direction[0]),e.scale(l.sv3d.get(),d.basis2,c.direction[1]));e.add(p,d.origin,p);d=0;let m=1;H(c)?(1===c.direction[0]&&-1===c.direction[1]?d=B:1===c.direction[0]&&1===c.direction[1]?d=Math.PI:-1===c.direction[0]&&1===c.direction[1]&&(d=3*Math.PI/2),m=k):(d=0!==c.direction[0]?1:2,f=1===d?g:f,d=1===d?B:0,m=f-h);h=t.identity(l.sm4d.get());t.rotateZ(h,h,d);t.scale(h,h,e.set(l.sv3d.get(),m,m,m));t.multiply(h,b,h);h[12]=
0;h[13]=0;h[14]=0;a.modelTransform=h;a.renderLocation=p};q.updateRotateHeadingHandle=function(a,c,b,d){d=d.worldUpAtPosition(b.origin,l.sv3d.get());const f=N(b,0),g=t.identity(l.sm4d.get());t.rotateZ(g,g,f.edge*Math.PI/2);t.rotateX(g,g,-(F.angleAroundAxis(d,b.basis2,b.basis1)+B));t.multiply(g,c,g);g[12]=0;g[13]=0;g[14]=0;a.modelTransform=g;a.renderLocation=f.position};q.updateRotateTiltHandle=function(a,c,b){b=N(b,1);const d=t.identity(l.sm4d.get());t.rotateZ(d,d,b.edge*Math.PI/2);t.rotateX(d,d,B);
t.multiply(d,c,d);d[12]=0;d[13]=0;d[14]=0;a.modelTransform=d;a.renderLocation=b.position};q.updateShiftRestartHandle=function(a,c,b,d){var f=N(b,2);const g=l.sm4d.get();t.rotateZ(g,c,f.edge*Math.PI/2);c=e.normalize(l.sv3d.get(),f.basis);c=e.scale(l.sv3d.get(),c,f.direction*d.computeScreenPixelSizeAt(f.position)*n.SHIFT_RESTART_OFFSET_DISTANCE);e.add(c,c,f.position);f=d.projectToRenderScreen(c,J.castRenderScreenPointArray3(l.sv3d.get()));{const [k,p,m,v]=d.viewport;var h=Math.min(m,v)/16;let r=!0;
f[0]<k+h?(f[0]=k+h,r=!1):f[0]>k+m-h&&(f[0]=k+m-h,r=!1);f[1]<p+h?(f[1]=p+h,r=!1):f[1]>p+v-h&&(f[1]=p+v-h,r=!1);h=r}x.ray.fromRender(d,f,I);e.normalize(I.direction,I.direction);d=l.sv3d.get();!h&&x.boundedPlane.intersectRay(b,I,d)&&(c=d);g[12]=0;g[13]=0;g[14]=0;a.modelTransform=g;a.renderLocation=y.clone(c);a.state=h?a.state|32:a.state&-33};Object.defineProperty(q,"__esModule",{value:!0})});