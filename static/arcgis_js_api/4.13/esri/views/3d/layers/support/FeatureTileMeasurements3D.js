// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingRect ./FeatureTileVisibility3D ../../support/geometryUtils ../../webgl-engine/lib/Camera".split(" "),function(q,r,m,u,b,e,x,t,y){Object.defineProperty(r,"__esModule",{value:!0});q=function(){function d(a){this.camera=new y.default;this.pointOfInterestInMap=[0,0];this.screenRect=e.create();this.tileSize=a.tileSize;this.maxVerticalScreenSize=
a.maxVerticalScreenSize;this.renderCoordsHelper=a.renderCoordsHelper;this.tilingScheme=a.tilingScheme;this.visibility=new x.FeatureTileVisibility3D({renderCoordsHelper:a.renderCoordsHelper})}d.prototype.begin=function(a,g,c){this.camera.copyFrom(a);this.z=c;this.pointOfInterestInMap[0]=g.x;this.pointOfInterestInMap[1]=g.y;e.fromValues(0,0,a.fullWidth,a.fullHeight,this.screenRect);this.visibility.begin(this.camera,c)};d.prototype.end=function(){this.visibility.end()};d.prototype.updateTile=function(a){a.measures.visibility=
this.visibility.calculate(a);0!==a.measures.visibility&&this.updateScreenMeasure(a);this.updateDistanceMeasure(a)};d.prototype.updateDistanceMeasure=function(a){a.measures.distance=e.distance(a.extent,this.pointOfInterestInMap)};d.prototype.updateScreenMeasure=function(a){var g=z,c=1<<g,d=a.measures.screen.rect;e.empty(d);for(var f=0,A=a.lij[0]+g,m=a.lij[1]<<g,g=a.lij[2]<<g,b=this.tileSizeWithBias(a),b=b*b,h=!1,k=0;k<c;k++){for(var l=0;l<c&&!(h=this.computeScreenArea(a,A,m+k,g+l,d),f+=h.area,h=f>
b&&e.height(d)>this.maxVerticalScreenSize);l++);if(h)break}a.measures.shouldSplit=f>b};d.prototype.tileSizeWithBias=function(a){return 1===a.measures.visibility?this.tileSize*B:this.tileSize};d.prototype.computeScreenArea=function(a,g,c,d,f){var b=p.points;this.projectToScreen(g,c,d,1===a.measures.visibility,b);e.empty(h);for(a=0;4>a;a++)e.expandPointInPlace(h,b[a]);e.expand(f,h);e.intersection(h,this.screenRect,v);p.screenOverlap=e.area(v)/e.area(h);p.area=t.triangle.areaPoints2d(b[0],b[1],b[2])+
t.triangle.areaPoints2d(b[0],b[2],b[3]);return p};d.prototype.projectToScreen=function(a,b,c,d,e){this.tilingScheme.ensureMaxLod(a);this.tilingScheme.getExtent(a,b,c,k);this.toRenderCoords(k,0,3,f[0]);this.toRenderCoords(k,2,3,f[1]);this.toRenderCoords(k,2,1,f[2]);this.toRenderCoords(k,0,1,f[3]);d&&(this.projectToPlane(f,this.camera.frustum.planes[4]),this.projectToPlane(f,this.camera.frustum.planes[3]),this.projectToPlane(f,this.camera.frustum.planes[2]));for(a=0;4>a;a++)this.camera.projectPoint(f[a],
w),this.camera.renderToScreen(w,e[a])};d.prototype.projectToPlane=function(a,b){for(var c=0;4>c;c++)l[c]=t.plane.signedDistance(b,a[c]);c=Math.max(l[0],l[1],l[2],l[3]);if(0<c)for(b=u.vec3.scale(n,b,-c),c=0;4>c;c++)u.vec3.add(a[c],a[c],b)};d.prototype.toRenderCoords=function(a,b,c,d){n[0]=a[b];n[1]=a[c];n[2]=this.z;this.renderCoordsHelper.toRenderCoords(n,this.tilingScheme.spatialReference,d);return d};return d}();r.FeatureTileMeasurements3D=q;var h=e.create(),v=e.create(),z=2,B=5,p={points:[m.createScreenPointArray(),
m.createScreenPointArray(),m.createScreenPointArray(),m.createScreenPointArray()],area:0,screenOverlap:0},k=e.create(),n=b.vec3f64.create(),f=[b.vec3f64.create(),b.vec3f64.create(),b.vec3f64.create(),b.vec3f64.create()],l=[0,0,0,0],w=m.createRenderScreenPointArray3();r.default=q});