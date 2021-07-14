// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../../request ../../../../core/arrayUtils ../../../../core/Error ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/typedArrayUtil ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/quat ../../../../core/libs/gl-matrix-2/quatf32 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/SpatialReference ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/webMercatorUtils ../../../../tasks/QueryTask ../../../../tasks/support/Query ./I3SBinaryReader ../../support/projectionUtils ../../support/stack".split(" "),
function(ha,e,N,O,h,r,n,z,A,P,B,Q,C,R,D,S,T,U,V,W,u,X){function x(a){return a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10)}function E(a,b){var c=b[0],f=b[1],d=b[2];b=b[3];var k=a[0]-c,c=c-a[3],e=a[1]-f,f=f-a[4],g=a[2]-d;a=d-a[5];var d=Math.max(k,c,0),l=Math.max(e,f,0),t=Math.max(g,a,0),d=d*d+l*l+t*t;return d>b*b?0:0<d?1:-Math.max(k,c,e,f,g,a)>b?3:2}function y(a,b,c){var f=[],d=c&&c.missingFields;c=c&&c.originalFields;for(var k=0;k<a.length;k++){for(var e=a[k],g=e.toLowerCase(),l=!1,t=
0,F=b;t<F.length;t++){var G=F[t];if(g===G.name.toLowerCase()){f.push(G.name);l=!0;c&&c.push(e);break}}!l&&d&&d.push(e)}return f}function Y(a,b){return a.filter(function(a){return a.toLowerCase()!==b.toLowerCase()}).concat([b])}function Z(a,b,c,f){b.sort(function(a,b){return a.attributes[c]-b.attributes[c]});var d=b.map(function(a){return a.attributes[c]}),e=[],q=y(f,a.fields,{originalFields:e});return H(a,d,q).then(function(a){for(var c=0;c<b.length;c++){var d=b[c],f=a[c],k={},g;for(g in d.attributes)k[g]=
d.attributes[g];for(var h=0;h<e.length;h++)k[e[h]]=f[q[h]];d.attributes=k}return b})}function aa(a,b){for(var c=[],f=0;f<a.length;f++){var d=a[f];d in b.attributes||c.push(d)}return c}function H(a,b,c){if(null!=a.maxRecordCount&&b.length>a.maxRecordCount){var f=ba(b,a.maxRecordCount);return n.all(f.map(function(b){return H(a,b,c)})).then(ca)}f=new V({objectIds:b,outFields:c,orderByFields:[a.objectIdField]});return(new U(a.parsedUrl.path)).execute(f).then(function(a){return a&&a.features&&a.features.length===
b.length?a.features.map(function(a){return a.attributes}):n.reject(new h("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer"))})}function da(a,b,c,f,d,e){for(var k=[],g=0;g<b.length;g++){var l=b[g];l&&-1!==d.indexOf(l.name)&&k.push({url:a+"/nodes/"+c.resources.attributes+"/attributes/"+l.key+"/0",storageInfo:l})}return n.eachAlways(k.map(function(a){return N(a.url,{responseType:"array-buffer"}).then(function(b){return W.readBinaryAttribute(a.storageInfo,b.data)})})).then(function(a){var b=
[];if(!e.ignoreUnavailableFields&&a.some(function(a){return null==a.value})){for(var b=[],c=0;c<a.length;c++)null==a[c].value&&b.push({name:k[c].storageInfo.name,error:a[c].error});return n.reject(new h("scenelayer:attribute-request-failed","Request for scene layer attributes failed",{failedAttributes:b}))}for(var d=0;d<f.length;d++){for(var g=f[d],q={},c=0;c<a.length;c++)null!=a[c].value&&(q[k[c].storageInfo.name]=I(a[c].value,g));b.push(q)}return b})}function I(a,b){if(!a)return null;b=a[b];return z.isInt16Array(a)?
b===ea?null:b:z.isInt32Array(a)?b===fa?null:b:b!==b?null:b}function ba(a,b){var c=a.length;b=Math.ceil(c/b);for(var f=[],d=0;d<b;d++)f.push(a.slice(Math.floor(c*d/b),Math.floor(c*(d+1)/b)));return f}function ca(a){for(var b=[],c=0;c<a.length;c++)b=b.concat(a[c]);return b}function J(a){var b=new D(x(a.store.indexCRS||a.store.geographicCRS));return b.equals(a.spatialReference)?a.spatialReference:b}function K(a){var b=new D(x(a.store.vertexCRS||a.store.projectedCRS));return b.equals(a.spatialReference)?
a.spatialReference:b}function w(a,b,c){if(!T.canProject(a,b))throw new h("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===c&&a.isGeographic)throw new h("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",{});}function L(a,b,c){var f=J(a);a=K(a);w(f,b,c);w(a,b,c)}Object.defineProperty(e,"__esModule",{value:!0});e.DDS_ENCODING_STRING="image/vnd-ms.dds";
e.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS=["image/jpeg","image/png"];e.extractWkid=x;e.selectEncoding=function(a,b){if(b)for(b=0;b<a.length;b++)if(a[b].encoding===e.DDS_ENCODING_STRING)return a[b];for(b=0;b<a.length;b++)if(-1<e.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS.indexOf(a[b].encoding))return a[b];return null};e.findIntersectingNodes=function(a,b,c,f,d,e){d.traverse(c,function(c){var d=c.mbs;b!==f&&(d=ga,u.mbsToMbs(c.mbs,f,d,b));d=E(a,d);if(0!==d)return e(c,d),!0})};e.filterInPlace=function(a,
b,c){for(var f=0,d=0,e=0;e<b.length&&f<a.length;e++)a[f]===b[e]&&(c(e)&&(a[d]=a[f],d++),f++);a.length=d};var p=S.create();e.getClipAABB=function(a,b){var c=A.mat4.copy(X.sm4d.get(),b.objectTransformation);b=b.geometryRecords[0].getShaderTransformation();A.mat4.multiply(c,c,b);if(0===c[1]&&0===c[2]&&0===c[3]&&0===c[4]&&0===c[6]&&0===c[7]&&0===c[8]&&0===c[9]&&0===c[11]&&1===c[15])return p[0]=(a[0]-c[12])/c[0],p[1]=(a[1]-c[13])/c[5],p[2]=(a[2]-c[14])/c[10],p[3]=(a[3]-c[12])/c[0],p[4]=(a[4]-c[13])/c[5],
p[5]=(a[5]-c[14])/c[10],p};var ga=R.vec4f64.create();e.intersectBoundingBoxWithMbs=E;e.findFieldsCaseInsensitive=y;e.whenGraphicAttributes=function(a,b,c,f,d,e){var k=!0===(e&&e.populateObjectId),g=e.ignoreUnavailableFields?void 0:[],l=1===f.length&&"*"===f[0];!l&&k&&(f=Y(f,c));f=l?f:y(f,a.fields,{missingFields:g});if(g&&0!==g.length)return n.reject(new h("scenelayer:unknown-fields","This scene layer does not have the requested fields",{unknownFields:g}));if(0===b.length)return n.resolve(b);var g=
a.associatedLayer,m=a.attributeStorageInfo,l=l?a.fields.map(function(a){return a.name}):f;if(g)return Z(g,b,c,l);var p=aa(l,b[0]);if(0===p.length)return n.resolve(b);if(m){b=d(b);if(!b)return n.reject(new h("scenelayer:features-not-loaded","Tried to query attributes for unloaded features"));var r=a.parsedUrl.path;return n.all(b.map(function(a){return da(r,m,a.node,a.indices,p,e).then(function(b){for(var c=0;c<a.graphics.length;c++){var d=a.graphics[c],f=b[c],e;for(e in d.attributes)e in f||(f[e]=
d.attributes[e]);d.attributes=f}return a.graphics})})).then(O.flatten)}return n.reject(new h("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available"))};var ea=-Math.pow(2,15),fa=-Math.pow(2,31);e.getCachedAttributeValue=I;e.convertFlatRangesToOffsets=function(a,b,c){b=null!=b?b:a.length/c;for(var f=new Uint32Array(b+1),d=0;d<b;d++){var e=a[d*c];f[d]=3*e;var q=(d-1)*c+1;if(0<=q&&e-1!==a[q])throw new h("Face ranges are not continuous");}f[f.length-1]=3*(a[(b-
1)*c+1]+1);return f};e.getIndexCrs=J;e.getVertexCrs=K;e.getCacheKeySuffix=function(a,b){return b===u.SphericalECEFSpatialReference?"@ECEF":a.equals(b)?"":null!=b.wkid?"@"+b.wkid:null};e.checkSpatialReference=w;e.checkSpatialReferences=L;e.checkSceneLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null!=a.geometryType&&"triangles"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null==a.vertexAttributes||
null==a.vertexAttributes.position));if(b)throw new h("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{});};e.checkSceneLayerCompatibleWithView=function(a,b){L(a,b.spatialReference,b.viewingMode)};e.checkPointCloudLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null==a.geometryType||"points"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null!=a.encoding&&
""!==a.encoding&&"lepcc-xyz"!==a.encoding||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new h("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{});};e.checkPointCloudLayerCompatibleWithView=function(a,b){w(a.spatialReference,b.spatialReference,b.viewingMode)};e.rendererNeedsTextures=function(a){if(null==a||"simple"!==a.type&&"class-breaks"!==a.type&&"unique-value"!==a.type||("unique-value"===a.type||"class-breaks"===
a.type)&&null==a.defaultSymbol)return!0;a=a.getSymbols();if(0===a.length)return!0;for(var b=0;b<a.length;b++){var c=a[b];if("mesh-3d"!==c.type||0===c.symbolLayers.length)return!0;for(var f=0,c=c.symbolLayers.items;f<c.length;f++){var d=c[f];if("fill"!==d.type||r.isNone(d.material)||r.isNone(d.material.color)||"replace"!==d.material.colorMixMode)return!0}}return!1};var M=function(){return function(){this.material=this.edges=null;this.castShadows=!0}}();e.SymbolInfo=M;e.getSymbolInfo=function(a){var b=
new M,c=!1,f=!1,d=0;for(a=a.symbolLayers.items;d<a.length;d++){var e=a[d];if("fill"===e.type&&e.enabled){var h=e.material,g=e.edges;r.isSome(h)&&!c&&(c=h.color,h=h.colorMixMode,r.isSome(c)?b.material={color:[c.r/255,c.g/255,c.b/255],alpha:c.a,colorMixMode:h}:b.material={color:[1,1,1],alpha:1,colorMixMode:"multiply"},b.castShadows=e.castShadows,c=!0);r.isSome(g)&&!f&&(b.edges=g,f=!0)}}b.material||(b.material={color:[1,1,1],alpha:1,colorMixMode:"multiply"});return b};e.addWraparound=function(a,b){return(a|
0)+(b|0)|0};e.transformObb=function(a,b,c,e,d){void 0===d&&(d=0);C.vec3.set(c.center,a.center[0],a.center[1],a.center[2]+d);b.isGeographic||e!==u.SphericalECEFSpatialReference?B.quat.copy(c.quaternion,a.quaternion):(u.computeLinearTransformation(b,c.center,m,e),d=2*Math.sqrt(1+m[0]+m[5]+m[10]),v[0]=(m[6]-m[9])/d,v[1]=(m[8]-m[2])/d,v[2]=(m[1]-m[4])/d,v[3]=.25*d,B.quat.multiply(c.quaternion,v,a.quaternion));C.vec3.copy(c.halfSize,a.halfSize);u.bufferToBuffer(c.center,b,0,c.center,e,0,1)};var m=P.mat4f64.create(),
v=Q.quatf32.create()});