/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{i as e,b as t,u as s}from"./Logger.js";import{E as r}from"./Evented.js";import{g as i}from"../geometry/SpatialReference.js";import n from"../geometry/Point.js";import{f as o,c as a,b as h}from"./vec3f64.js";import{f as l}from"./vec3.js";import c from"../geometry/Polygon.js";import p from"../geometry/Polyline.js";import"../geometry.js";import{c as u,f as d,a as g}from"./vec4f64.js";import{m as f,a as m,b as v,i as y,p as x,r as w}from"./vec2.js";import{l as R}from"./vec4.js";import{c as V,f as z,d as P}from"./vec2f64.js";import{c as Z}from"./stack.js";class k{constructor(e,t){this.spatialReference=e,this.viewingMode=t,this._unnormalizationInfo=j(e,t)}tag(e){return e}createNew(){return this.tag(V())}fromPoint(e){return this.tag(z(e.x,e.y))}fromArray(e){return this.tag(z(e[0],e[1]))}toArray(e){return[e[0],e[1]]}clone(e){return this.tag(P(e))}toPoint(e,t){return t.x=e[0],t.y=e[1],t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}createPoint(e){return new n({x:e[0],y:e[1],z:void 0,m:void 0,spatialReference:this.spatialReference})}createPointFromArray(e){return new n({x:e[0],y:e[1],z:void 0,m:void 0,spatialReference:this.spatialReference})}createDehydratedPoint(e){return{x:e[0],y:e[1],z:void 0,m:void 0,hasZ:!1,hasM:!1,spatialReference:this.spatialReference,type:"point"}}lerp(e,t,s,r){return f(r,e,t,s)}addDelta(e,t,s){e[0]+=t,e[1]+=s}scale(e,t,s,r){const i=Z.get(),n=m(i,e,t),o=v(i,s,y(s,n));x(e,e,o,r-1)}rotate(e,t,s){w(e,e,t,s)}pointToArray(e){return[e.x,e.y]}getZ(e,t){return t}hasZ(){return!1}unnormalize(e){S(e,this._unnormalizationInfo)}fromXYZ(e){return this.tag(z(e[0],e[1]))}toXYZ(e,t=0){return o(e[0],e[1],t)}}class E{constructor(e,t,s){this.valueType=e,this.spatialReference=t,this._unnormalizationInfo=j(t,s)}tag(e){return e}createNew(){return this.tag(a())}fromPoint(e){return this.tag(o(e.x,e.y,0===this.valueType?e.z:e.m))}fromArray(e){return this.tag(o(e[0],e[1],e[2]||0))}toArray(e){return[e[0],e[1],e[2]]}clone(e){return this.tag(h(e))}toPoint(e,t){return t.x=e[0],t.y=e[1],0===this.valueType?(t.z=e[2],t.hasZ=!0,t.hasM=!1):(t.m=e[2],t.hasZ=!1,t.hasM=!0),t.spatialReference=this.spatialReference,t}createPoint(e){return new n({x:e[0],y:e[1],z:0===this.valueType?e[2]:void 0,m:1===this.valueType?e[2]:void 0,spatialReference:this.spatialReference})}createPointFromArray(e){return new n({x:e[0],y:e[1],z:0===this.valueType?e[2]:void 0,m:1===this.valueType?e[2]:void 0,spatialReference:this.spatialReference})}createDehydratedPoint(e){const t=0===this.valueType,s=1===this.valueType;return{x:e[0],y:e[1],z:t?e[2]:void 0,m:s?e[2]:void 0,hasZ:t,hasM:s,spatialReference:this.spatialReference,type:"point"}}lerp(e,t,s,r){return l(r,e,t,s)}addDelta(e,t,s,r){e[0]+=t,e[1]+=s,0===this.valueType&&(e[2]+=r)}scale(e,t,s,r){const i=Z.get(),n=m(i,e,t),o=v(i,s,y(s,n));x(e,e,o,r-1)}rotate(e,t,s){w(e,e,t,s)}pointToArray(e){return 0===this.valueType?[e.x,e.y,e.z]:[e.x,e.y,e.m]}getZ(e,t){return 0===this.valueType?e[2]:t}hasZ(){return 0===this.valueType}unnormalize(e){S(e,this._unnormalizationInfo)}fromXYZ(e,t=0,s=0){return this.tag(o(e[0],e[1],0===this.valueType?e.length>2?e[2]:t:s))}toXYZ(e,t=0){return this.tag(o(e[0],e[1],0===this.valueType?e[2]:t))}}class T{constructor(e,t){this.spatialReference=e,this._unnormalizationInfo=j(e,t)}tag(e){return e}createNew(){return this.tag(u())}fromPoint(e){return this.tag(d(e.x,e.y,e.z,e.m))}fromArray(e){return this.tag(d(e[0],e[1],e[2]||0,e[3]||0))}toArray(e){return[e[0],e[1],e[2],e[3]]}clone(e){return this.tag(g(e))}toPoint(e,t){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}createPoint(e){return new n({x:e[0],y:e[1],z:e[2],m:e[3],spatialReference:this.spatialReference})}createPointFromArray(e){return new n({x:e[0],y:e[1],z:e[2],m:e[3],spatialReference:this.spatialReference})}createDehydratedPoint(e){return{x:e[0],y:e[1],z:e[2],m:e[3],hasZ:!0,hasM:!0,spatialReference:this.spatialReference,type:"point"}}lerp(e,t,s,r){return R(r,e,t,s)}addDelta(e,t,s,r){e[0]+=t,e[1]+=s,e[2]+=r}scale(e,t,s,r){const i=Z.get(),n=m(i,e,t),o=v(i,s,y(s,n));x(e,e,o,r-1)}rotate(e,t,s){w(e,e,t,s)}pointToArray(e){return[e.x,e.y,e.z,e.m]}getZ(e){return e[2]}hasZ(){return!0}unnormalize(e){S(e,this._unnormalizationInfo)}fromXYZ(e,t=0,s=0){return this.tag(d(e[0],e[1],e.length>2?e[2]:t,s))}toXYZ(e){return o(e[0],e[1],e[2])}}function A(e,t,s,r){return e&&t?new T(s,r):t?new E(1,s,r):e?new E(0,s,r):new k(s,r)}function S(e,t){if(!t.supported)return;let s=1/0,r=-1/0;const i=t.upperBoundX-t.lowerBoundX;e.forEach((e=>{let n=e.pos[0];for(;n<t.lowerBoundX;)n+=i;for(;n>t.upperBoundX;)n-=i;s=Math.min(s,n),r=Math.max(r,n),e.pos[0]=n}));const n=r-s;i-n<n&&e.forEach((e=>{e.pos[0]<0&&(e.pos[0]+=i)}))}function j(e,t){const s=i(e);return"global"===t&&s?{supported:!0,lowerBoundX:s.valid[0],upperBoundX:s.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}class X{constructor(e){this.left=null,this.right=null,this.type="vertex",this.index=null,this.component=e}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}class M{constructor(e,t,s){this.type="edge",this.component=e,this.left=t,this.right=s,t.right=this,s.left=this}}class I{constructor(e){this.vertices=[],this.edges=[],this.data=e}unnormalizeVertexPositions(){this.vertices.length<=1||this.data.coordinateHelper.unnormalize(this.vertices)}updateVertexIndex(e,t){if(0===this.vertices.length)return;const s=this.vertices[0];let r=null,i=e,n=t;do{r=i,r.index=n++,i=r.right?r.right.right:null}while(null!=i&&i!==s);r.left&&r!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(r),this.vertices.length-1)}getFirstVertex(){return 0===this.vertices.length?null:this.vertices[0]}getLastVertex(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}swapVertices(e,t){const s=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=s}iterateVertices(t){if(0===this.vertices.length)return;const s=this.vertices[0];let r=s;do{t(r,r.index),r=e(r.right)?r.right.right:null}while(r!==s&&null!=r)}}class B extends r{constructor(e){super(),this.coordinateHelper=e,this.undoStack=[],this.redoStack=[],this.components=[]}apply(e,s=1){0!==s&&!t(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this.undoStack.push(e),this.redoStack=[])}undo(){if(this.undoStack.length>0){const e=this.undoStack.pop();return e.undo(),this.redoStack.push(e),e}return null}get canUndo(){return this.undoStack.length>0}get lastOperation(){return this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:null}redo(){if(this.redoStack.length>0){const e=this.redoStack.pop();return e.apply(),this.undoStack.push(e),e}return null}get canRedo(){return this.redoStack.length>0}toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.createPoint(this.components[0].vertices[0].pos)}toPolyline(){const e=[],t=this.coordinateHelper.toArray;return this.components.forEach(((s,r)=>{const i=[];let n=s.vertices.find((e=>null==e.left));const o=n;do{i.push(t(n.pos)),n=n.right?n.right.right:null}while(n&&n!==o);e.push(i)})),new p({paths:e,spatialReference:this.coordinateHelper.spatialReference})}toPolygon(){const t=[],s=this.coordinateHelper.toArray;return this.components.forEach(((r,i)=>{const n=[],o=r.vertices[0];let a=o;const h=a;do{n.push(s(a.pos)),a=e(a.right)?a.right.right:null}while(a&&a!==h);n.push(s(o.pos)),t.push(n)})),new c({rings:t,spatialReference:this.coordinateHelper.spatialReference})}static fromGeometry(e,t){const s=A(e.hasZ,e.hasM,e.spatialReference,t),r=new B(s);switch(e.type){case"polygon":{const t=e.rings;for(let e=0;e<t.length;++e){const i=t[e],n=new I(r),o=i.length-1;for(let e=0;e<o;++e){const t=s.fromArray(i[e]),r=new X(n);n.vertices.push(r),r.pos=t,r.index=e}const a=n.vertices.length-1;for(let e=0;e<a;++e){const t=n.vertices[e],s=n.vertices[e+1],r=new M(n,t,s);n.edges.push(r)}const h=new M(n,n.vertices[n.vertices.length-1],n.vertices[0]);n.edges.push(h),r.components.push(n)}}break;case"polyline":for(const t of e.paths){const e=new I(r),i=t.length;for(let r=0;r<i;++r){const i=s.fromArray(t[r]),n=new X(e);e.vertices.push(n),n.pos=i,n.index=r}const n=e.vertices.length-1;for(let t=0;t<n;++t){const s=e.vertices[t],r=e.vertices[t+1],i=new M(e,s,r);e.edges.push(i)}r.components.push(e)}break;case"point":{const t=new I(r),s=new X(t);s.index=0,s.pos=r.coordinateHelper.fromPoint(e),t.vertices.push(s),r.components.push(t)}}return r}}class H{constructor(e,t,s){this.editGeometry=e,this.component=t,this.pos=s,this.addedVertex=null,this.originalEdge=null,this.left=null,this.right=null}apply(){let r="redo";if(t(this.addedVertex)&&(r="apply",this.addedVertex=new X(this.component)),0===this.component.vertices.length)this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=0;else{const r=s(this.component.getLastVertex());let i=null;r.right&&(this.originalEdge=r.right,i=this.originalEdge.right,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1)),this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,t(this.left)&&(this.left=new M(this.component,r,this.addedVertex)),this.component.edges.push(this.left),r.right=this.left,e(this.originalEdge)&&e(i)&&(t(this.right)&&(this.right=new M(this.component,this.addedVertex,i)),this.component.edges.push(this.right),i.left=this.right),this.component.updateVertexIndex(this.addedVertex,r.index+1)}const i={addedVertices:[this.addedVertex],operation:r};this.editGeometry.emit("change",i)}undo(){if(t(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1),e(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.left.right=null),e(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),1),this.right.right.left=null),e(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.left.right=this.originalEdge,this.originalEdge.right.left=this.originalEdge),e(this.left)?this.component.updateVertexIndex(this.left.left,this.left.left.index):this.component.updateVertexIndex(this.addedVertex,0);const s={removedVertices:[this.addedVertex],operation:"undo"};this.editGeometry.emit("change",s)}accumulate(e){return!1}}export{H as A,I as C,B as E,X as V,M as a,A as c};
