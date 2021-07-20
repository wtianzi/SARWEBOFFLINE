// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/maybe ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../chunks/mat4f64 ../../support/geometryUtils ../materials/renderers/utils ./intersectorUtils".split(" "),function(B,E,v,m,k,w,F,C,G,g){v=function(){function x(a){this.options=new g.IntersectorOptions;this.results=new g.IntersectorResults;this.transform=new g.IntersectorTransform;this.performanceInfo={queryDuration:0,numObjectsTested:0};
this.tolerance=1E-5;this.verticalOffset=null;this._ray={origin:k.create(),direction:k.create()};this._rayEndPoint=k.create();this._rayStartPointTransformed=k.create();this._rayEndPointTransformed=k.create();this.viewingMode=null==a?1:a}var l=x.prototype;l.reset=function(a,b){this.resetWithRay(C.ray.fromPoints(a,b,this._ray))};l.resetWithRay=function(a){a!==this._ray&&C.ray.copy(a,this._ray);0!==this.options.verticalOffset?2===this.viewingMode?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=
this.options.verticalOffset:this.verticalOffset=null;w.add(this._rayEndPoint,this._ray.origin,this._ray.direction);this._numObjectsTested=0;this.results.init(this._ray)};l.intersect=function(a,b,y,n,p,f){this.point=b;this.camera=y;this.filterPredicate=p;this.tolerance=null==n?1E-5:n;b=g.getVerticalOffsetObject3D(this.verticalOffset);const e=f?c=>{f(c)&&this.intersectObject(c)}:c=>{this.intersectObject(c)};if(a&&0<a.length)for(const c of a)a=c.getSpatialQueryAccelerator&&c.getSpatialQueryAccelerator(),
m.isSome(a)?(m.isSome(b)?a.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,e,b):a.forEachAlongRay(this._ray.origin,this._ray.direction,e),this.options.selectionMode&&this.options.hud&&a.forEachDegenerateObject(e)):c.getObjects().forAll(z=>e(z));this.sortResults()};l.intersectObject=function(a){this._numObjectsTested++;const b=a.geometryRecords;if(b){var y=a.id,n=a.transformation,p=g.getVerticalOffsetObject3D(this.verticalOffset);for(const e of b){const {geometry:c,material:z,
instanceParameters:D}=e;if(G.isInstanceHidden(D))continue;var f=c.id;this.transform.setAndInvalidateLazyTransforms(n,e.getShaderTransformation());w.transformMat4(this._rayStartPointTransformed,this._ray.origin,this.transform.inverse);w.transformMat4(this._rayEndPointTransformed,this._rayEndPoint,this.transform.inverse);const A=this.transform.transform;m.isSome(p)&&(p.objectTransform=this.transform);z.intersect(c,D,this.transform.transform,this,this._rayStartPointTransformed,this._rayEndPointTransformed,
(d,q,r,h,t,H)=>{if(0<=d&&(!m.isSome(this.filterPredicate)||this.filterPredicate(this._ray.origin,this._rayEndPoint,d))){var u=`Object3D ${y}`;t?(null==this.results.hud.dist||d<this.results.hud.dist)&&this.results.hud.set(a,u,d,q,F.IDENTITY,h,H,f,r):((null==this.results.min.drapedLayerOrder||h>=this.results.min.drapedLayerOrder)&&(null==this.results.min.dist||d<this.results.min.dist)&&this.results.min.set(a,u,d,q,A,h,null,f,r),0!==this.options.store&&(null==this.results.max.drapedLayerOrder||h<this.results.max.drapedLayerOrder)&&
(null==this.results.max.dist||d>this.results.max.dist)&&this.results.max.set(a,u,d,q,A,h,null,f,r),2===this.options.store&&(t=new g.IntersectorResult(this._ray),t.set(a,u,d,q,A,h,null,f,r),this.results.all.push(t)))}},e.shaderTransformation)}}};l.sortResults=function(){this.results.all.sort((a,b)=>a.dist!==b.dist?a.dist-b.dist:a.drapedLayerOrder!==b.drapedLayerOrder?(void 0!==a.drapedLayerOrder?a.drapedLayerOrder:Number.MAX_VALUE)-(void 0!==b.drapedLayerOrder?b.drapedLayerOrder:Number.MAX_VALUE):
(void 0!==b.drapedLayerGraphicOrder?b.drapedLayerGraphicOrder:Number.MIN_VALUE)-(void 0!==a.drapedLayerGraphicOrder?a.drapedLayerGraphicOrder:Number.MIN_VALUE))};E._createClass(x,[{key:"ray",get:function(){return this._ray}},{key:"rayBeginPoint",get:function(){return this._ray.origin}},{key:"rayEndPoint",get:function(){return this._rayEndPoint}}]);return x}();v.DEFAULT_TOLERANCE=1E-5;B.Intersector=v;Object.defineProperty(B,"__esModule",{value:!0})});