// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2f64 ./snappingUtils ./SnappingAlgorithm ../../support/geometry2dUtils ./candidates/LineSnappingCandidate".split(" "),function(p,r,t,u,k,l,v,w){l=function(q){function m(){return q.apply(this,arguments)||this}r._inheritsLoose(m,q);var n=m.prototype;n.snapNewVertex=function(f,b){var c=b.geometry.editGeometry.components[0],a=c.edges.length;const e=[];if(1>a)return e;const h=k.anyMapPointToScreenPoint(f,b.coordinateHelper,
b.elevationInfo,this.view);a=c=c.edges[a-1];do this.edgeExceedsShortLineThreshold(a,b)&&this._processCandidateProposal(a.left.pos,a.right.pos,f,h,b,e),a=a.left.left;while(a&&a!==c);return e};n.snapExistingVertex=function(f,b){const c=[],a=t.unwrap(b.vertexHandle);var e=a.component;if(2>e.edges.length)return c;const h=k.anyMapPointToScreenPoint(f,b.coordinateHelper,b.elevationInfo,this.view);var d=a.left;const g=a.right;d&&g&&this.edgeExceedsShortLineThreshold(d,b)&&this.edgeExceedsShortLineThreshold(g,
b)&&this._processCandidateProposal(d.left.pos,g.right.pos,f,h,b,c);d=e=e.edges[0];do d!==a.left&&d!==a.right&&this.edgeExceedsShortLineThreshold(d,b)&&this._processCandidateProposal(d.left.pos,d.right.pos,f,h,b,c),d=d.right.right;while(d&&d!==e);return c};n._processCandidateProposal=function(f,b,c,a,e,h){const d=v.projectPointToLine(u.create(),c,f,b),g=e.coordinateHelper;c=g.fromXYZ(d,g.getZ(c,0));k.squareDistance(a,k.anyMapPointToScreenPoint(c,g,e.elevationInfo,this.view))<this.squaredProximityTreshold(e.pointer)&&
h.push(new w.LineSnappingCandidate({coordinateHelper:e.coordinateHelper,lineStart:f,lineEnd:b,targetPoint:c}))};return m}(l.SnappingAlgorithm);p.LineSnapper=l;Object.defineProperty(p,"__esModule",{value:!0})});