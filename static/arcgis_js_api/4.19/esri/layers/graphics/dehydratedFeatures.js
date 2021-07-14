// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/has ../../core/typedArrayUtil ../../core/maybe ../../geometry/SpatialReference ../../geometry/support/typeUtils ../../core/uid ../../geometry/support/aaBoundingRect ../support/Field ../../core/byteSizeEstimations ../../geometry/support/aaBoundingBox ../../geometry/support/quantizationUtils ./dehydratedFeatureComparison".split(" "),function(e,D,l,n,y,q,z,h,A,B,k,m,C){function r(a,b,c){if(!a)return null;switch(b){case "point":return{x:a.x,y:a.y,z:a.z,m:a.m,hasZ:null!=a.z,
hasM:null!=a.m,type:"point",spatialReference:c};case "polyline":return{paths:a.paths,hasZ:!!a.hasZ,hasM:!!a.hasM,type:"polyline",spatialReference:c};case "polygon":return{rings:a.rings,hasZ:!!a.hasZ,hasM:!!a.hasM,type:"polygon",spatialReference:c};case "multipoint":return{points:a.points,hasZ:!!a.hasZ,hasM:!!a.hasM,type:"multipoint",spatialReference:c}}}function t(a){if(n.isNone(a))return 0;let b=32;switch(a.type){case "point":b+=42;break;case "polyline":case "polygon":{var c=0;const g=2+(a.hasZ?
1:0)+(a.hasM?1:0);a="polyline"===a.type?a.paths:a.rings;for(const p of a)c+=p.length;b+=8*c*g+64;b+=128*c;b=b+34+32*(a.length+1);break}case "multipoint":c=a.points.length;b+=8*c*(2+(a.hasZ?1:0)+(a.hasM?1:0))+64;b+=128*c;b=b+34+32;break;case "extent":b+=98;a.hasM&&(b+=32);a.hasZ&&(b+=32);break;case "mesh":b+=l.estimateSize(a.vertexAttributes.position),b+=l.estimateSize(a.vertexAttributes.normal),b+=l.estimateSize(a.vertexAttributes.uv),b+=l.estimateSize(a.vertexAttributes.tangent)}return b}function u(a,
b){k.empty(b);"mesh"===a.type&&(a=a.extent);switch(a.type){case "point":b[0]=b[3]=a.x;b[1]=b[4]=a.y;a.hasZ&&(b[2]=b[5]=a.z);break;case "polyline":for(var c=0;c<a.paths.length;c++)k.expandWithNestedArray(b,a.paths[c],a.hasZ);break;case "polygon":for(c=0;c<a.rings.length;c++)k.expandWithNestedArray(b,a.rings[c],a.hasZ);break;case "multipoint":k.expandWithNestedArray(b,a.points,a.hasZ);break;case "extent":b[0]=a.xmin,b[1]=a.ymin,b[3]=a.xmax,b[4]=a.ymax,null!=a.zmin&&(b[2]=a.zmin),null!=a.zmax&&(b[5]=
a.zmax)}}function v(a,b){h.empty(b);"mesh"===a.type&&(a=a.extent);switch(a.type){case "point":b[0]=b[2]=a.x;b[1]=b[3]=a.y;break;case "polyline":for(var c=0;c<a.paths.length;c++)h.expandWithNestedArray(b,a.paths[c]);break;case "polygon":for(c=0;c<a.rings.length;c++)h.expandWithNestedArray(b,a.rings[c]);break;case "multipoint":h.expandWithNestedArray(b,a.points);break;case "extent":b[0]=a.xmin,b[1]=a.ymin,b[2]=a.xmax,b[3]=a.ymax}}const w=k.create(),x=h.create();e.equals=C.equals;e.DehydratedFeatureClass=
function(a,b,c){this.uid=a;this.geometry=b;this.attributes=c;this.visible=!0;this.centroid=this.objectId=null};e.DehydratedFeatureSetClass=function(){this.exceededTransferLimit=!1;this.features=[];this.fields=[];this.hasZ=this.hasM=!1;this.transform=this.spatialReference=this.geohashFieldName=this.geometryProperties=this.globalIdFieldName=this.objectIdFieldName=this.geometryType=null};e.computeAABB=u;e.computeAABR=v;e.estimateGeometryObjectSize=t;e.estimateSize=function(a){let b;b=32+B.estimateAttributesObjectSize(a.attributes);
return b=b+3+(8+t(a.geometry))};e.expandAABB=function(a,b){u(a,w);k.expandWithAABB(b,w)};e.expandAABR=function(a,b){v(a,x);h.expand(b,x)};e.fromFeatureSetJSON=function(a){const b=q.featureGeometryTypeKebabDictionary.fromJSON(a.geometryType),c=y.fromJSON(a.spatialReference),g=a.transform,p=a.features.map(f=>{var d=a.objectIdFieldName;f={uid:z.generateUID(),objectId:d&&f.attributes?f.attributes[d]:null,attributes:f.attributes,geometry:r(f.geometry,b,c),visible:!0};if((d=f.geometry)&&g)switch(d.type){case "point":f.geometry=
m.unquantizePoint(g,d,d,d.hasZ,d.hasM);break;case "multipoint":f.geometry=m.unquantizeMultipoint(g,d,d,d.hasZ,d.hasM);break;case "polygon":f.geometry=m.unquantizePolygon(g,d,d,d.hasZ,d.hasM);break;case "polyline":f.geometry=m.unquantizePolyline(g,d,d,d.hasZ,d.hasM)}return f});return{geometryType:b,features:p,spatialReference:c,fields:a.fields?a.fields.map(f=>A.fromJSON(f)):null,objectIdFieldName:a.objectIdFieldName,globalIdFieldName:a.globalIdFieldName,geohashFieldName:a.geohashFieldName,geometryProperties:a.geometryProperties,
hasZ:a.hasZ,hasM:a.hasM,exceededTransferLimit:a.exceededTransferLimit,transform:null}};e.fromJSONGeometry=r;e.getObjectId=function(a,b){return null!=a.objectId?a.objectId:a.attributes&&b?a.attributes[b]:null};e.hasGeometry=function(a){return n.isSome(a.geometry)};e.hasVertices=function(a){if(!a)return!1;switch(a.type){case "extent":case "point":return!0;case "polyline":for(const b of a.paths)if(0<b.length)return!0;return!1;case "polygon":for(const b of a.rings)if(0<b.length)return!0;return!1;case "multipoint":return 0<
a.points.length;case "mesh":return a.vertexAttributes&&a.vertexAttributes.position&&0<a.vertexAttributes.position.length}};e.isDehydratedPoint=function(a){return"point"===a.type};e.isFeatureGeometry=function(a){return q.isFeatureGeometryType(a.type)};e.makeDehydratedPoint=function(a,b,c,g){return{x:a,y:b,z:c,hasZ:null!=c,hasM:!1,spatialReference:g,type:"point"}};e.numVertices=function(a){if(n.isNone(a))return 0;switch(a.type){case "point":return 1;case "polyline":var b=0;for(var c of a.paths)b+=c.length;
return b;case "polygon":c=0;for(b of a.rings)c+=b.length;return c;case "multipoint":return a.points.length;case "extent":return 2;case "mesh":return(a=a.vertexAttributes&&a.vertexAttributes.position)?a.length/3:0}};Object.defineProperty(e,"__esModule",{value:!0})});