// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../Graphic ../../../request ../../Attachment ../support/FeatureSet ../support/IdSet ../support/sha ../support/shared ../support/sqlUtils ../support/sqlUtils ../support/stats ../../../core/promiseUtils ../../../geometry/support/jsonUtils ../../../layers/FeatureLayer ../../../layers/graphics/featureConversionUtils ../../../tasks/QueryTask ../../../tasks/operations/query ../../../tasks/support/FeatureSet ../../../tasks/support/Query ../../../tasks/support/StatisticDefinition".split(" "),
function(O,P,D,y,E,F,G,x,H,v,w,z,I,q,J,K,L,A,M,N,u,B){return function(C){function e(a){var d=C.call(this,a)||this;d.declaredClass="esri.arcade.featureset.sources.FeatureLayerDynamic";d._removeGeometry=!1;d._overrideFields=null;d.formulaCredential=null;d._pageJustIds=!1;d._requestStandardised=!1;a.spatialReference&&(d.spatialReference=a.spatialReference);d._transparent=!0;d._maxProcessing=1E3;d._layer=a.layer;d._wset=null;void 0!==a.outFields&&(d._overrideFields=a.outFields);void 0!==a.includeGeometry&&
(d._removeGeometry=!1===a.includeGeometry);return d}D(e,C);e.prototype._maxQueryRate=function(){return v.defaultMaxRecords};e.prototype.end=function(){return this._layer};e.prototype.optimisePagingFeatureQueries=function(a){this._pageJustIds=a};e.prototype.convertQueryToLruCacheKey=function(a){a=v.stableStringify(a.toJSON());return(new H(a,"TEXT")).getHash("SHA-1","B64")};e.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=q.create(function(d,g){try{!0===a._layer.loaded?
(a._initialiseFeatureSet(),d(a)):(a._layer.when().then(function(){try{a._initialiseFeatureSet(),d(a)}catch(f){g(f)}},g),a._layer.load())}catch(f){g(f)}}));return this._loadPromise};e.prototype._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this._layer.geometryType;this.fields=this._layer.fields.slice(0);if(this._layer.outFields&&(1!==this._layer.outFields.length||"*"!==this._layer.outFields[0])){for(var a=[],d=0,
g=this.fields;d<g.length;d++){var f=g[d];if("oid"===f.type)a.push(f);else for(var k=0,b=this._layer.outFields;k<b.length;k++){var h=b[k];if(h.toLowerCase()===f.name.toLowerCase()){a.push(f);break}}}this.fields=a}if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{a=[];d=[];g=0;for(k=this.fields;g<k.length;g++)if(f=k[g],"oid"===f.type)a.push(f),d.push(f.name);else for(var b=0,c=this._overrideFields;b<c.length;b++)if(h=c[b],
h.toLowerCase()===f.name.toLowerCase()){a.push(f);d.push(f.name);break}this.fields=a;this._overrideFields=d}this._layer.source&&this._layer.source.sourceJSON&&(a=this._layer.source.sourceJSON.currentVersion,!0===this._layer.source.sourceJSON.useStandardizedQueries?(this._databaseType=v.FeatureServiceDatabaseType.StandardisedNoInterval,void 0!==a&&null!==a&&10.61<=a&&(this._databaseType=v.FeatureServiceDatabaseType.Standardised)):void 0!==a&&null!==a&&(10.5<=a&&(this._databaseType=v.FeatureServiceDatabaseType.StandardisedNoInterval,
this._requestStandardised=!0),10.61<=a&&(this._databaseType=v.FeatureServiceDatabaseType.Standardised)));this.objectIdField=this._layer.objectIdField;this.hasM=this._layer.supportsM;this.hasZ=this._layer.supportsZ;this.typeIdField=this._layer.typeIdField;this.types=this._layer.types};e.prototype._isInFeatureSet=function(){return v.IdState.InFeatureSet};e.prototype._refineSetBlock=function(a){return q.resolve(a)};e.prototype._candidateIdTransform=function(a){return a};e.prototype._transformSetWithIdChanges=
function(){};e.prototype._getSet=function(a){var d=this;return null===this._wset?this._ensureLoaded().then(function(){return d._getFilteredSet("",null,null,null,a)}).then(function(a){return d._wset=a}):q.resolve(this._wset)};e.prototype._runDatabaseProbe=function(a){var d=this;return q.create(function(g,f){try{d._ensureLoaded().then(function(){try{var k=new u;k.where=a.replace("OBJECTID",d._layer.objectIdField);d._layer.queryObjectIds(k).then(function(){g(!0)},function(a){try{g(!1)}catch(h){f(h)}})}catch(b){f(b)}})}catch(k){f(k)}})};
e.prototype._canUsePagination=function(){return this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsPagination?!0:!1};e.prototype._cacheableFeatureSetSourceKey=function(){return this._layer.url};e.prototype.pbfSupportedForQuery=function(a){return!a.outStatistics&&this._layer&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsFormatPBF&&!0===this._layer.capabilities.query.supportsQuantizationEditMode};
e.prototype.queryPBF=function(a,d){a.quantizationParameters={mode:"edit"};return M.executeQueryPBF(this._layer.parsedUrl,a,{type:"optimized"}).then(function(a){return N.fromJSON(L.convertToFeatureSet(a.data)).unquantize()})};e.prototype.nativeCapabilities=function(){return{title:this._layer.title,source:this,canQueryRelated:!0,capabilities:this._layer.capabilities,databaseType:this._databaseType,requestStandardised:this._requestStandardised,maxRecordCount:this._layer.maxRecordCount}};e.prototype.executeQuery=
function(a,d){var g=this,f=new A({url:this._layer.parsedUrl.path}),k="execute"===d&&this.pbfSupportedForQuery(a),b=null;if(this.recentlyUsedQueries){var h=this.convertQueryToLruCacheKey(a),b=this.recentlyUsedQueries.getFromCache(h);null===b&&(b=!0!==k?f[d](a):this.queryPBF(a,f),this.recentlyUsedQueries.addToCache(h,b),b=b.catch(function(a){g.recentlyUsedQueries.removeFromCache(h);throw a;}))}null===b&&(b=!0!==k?f[d](a):this.queryPBF(a,f));return b};e.prototype._getFilteredSet=function(a,d,g,f,k){var b=
this;return this.databaseType().then(function(h){if(b.isTable()&&d&&null!==a&&""!==a)return new x([],[],!0,null);if(b._canUsePagination())return b._getFilteredSetUsingPaging(a,d,g,f,k);var c="",m=!1;null!==f&&b._layer.capabilities&&b._layer.capabilities.query&&!0===b._layer.capabilities.query.supportsOrderBy&&(c=f.constructClause(),m=!0);var l=new u;l.where=null===g?null===d?"1\x3d1":"":w.toWhereClause(g,h);b._requestStandardised&&(l.sqlFormat="standard");l.spatialRelationship=b._makeRelationshipEnum(a);
l.outSpatialReference=b.spatialReference;l.orderByFields=""!==c?c.split(","):null;l.geometry=null===d?null:d;l.relationParameter=b._makeRelationshipParam(a);return b.executeQuery(l,"executeForIds").then(function(a){null===a&&(a=[]);b._checkCancelled(k);return new x([],a,m,null)})})};e.prototype._expandPagedSet=function(a,d,g,f,k){return this._expandPagedSetFeatureSet(a,d,g,f,k)};e.prototype._getFilteredSetUsingPaging=function(a,d,g,f,k){var b=this;try{var h="",c=!1;null!==f&&this._layer.capabilities&&
this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(h=f.constructClause(),c=!0);return this.databaseType().then(function(f){f=null===g?null===d?"1\x3d1":"":w.toWhereClause(g,f);b._layer.definitionExpression&&(f=""!==f?"(("+b._layer.definitionExpression+") AND ("+f+"))":b._layer.definitionExpression);var l=b._maxQueryRate();void 0!==b._layer.maxRecordCount&&b._layer.maxRecordCount<l&&(l=b._layer.maxRecordCount);var e=null;if(!0===b._pageJustIds)e=new x([],["GETPAGES"],
c,{spatialRel:b._makeRelationshipEnum(a),relationParam:b._makeRelationshipParam(a),outFields:b._layer.objectIdField,resultRecordCount:l,resultOffset:0,geometry:null===d?null:d,where:f,orderByFields:h,returnGeometry:!1,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}});else{var m=!0;!0===b._removeGeometry&&(m=!1);var p=null!==b._overrideFields?b._overrideFields:b._fieldsIncludingObjectId(b._layer.outFields?b._layer.outFields:["*"]),e=new x([],["GETPAGES"],c,{spatialRel:b._makeRelationshipEnum(a),
relationParam:b._makeRelationshipParam(a),outFields:p.join(","),resultRecordCount:l,resultOffset:0,geometry:null===d?null:d,where:f,orderByFields:h,returnGeometry:m,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}})}return b._expandPagedSet(e,l,0,1,k).then(function(){return e})})}catch(m){return q.reject(m)}};e.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,
resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,
geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}};e.prototype._getPhysicalPage=function(a,d,g){var f=this;try{var k=a.pagesDefinition.internal.lastRetrieved,b=new u;this._requestStandardised&&(b.sqlFormat="standard");b.spatialRelationship=a.pagesDefinition.spatialRel;b.relationParameter=a.pagesDefinition.relationParam;b.outFields=a.pagesDefinition.outFields.split(",");b.num=a.pagesDefinition.resultRecordCount;
b.start=a.pagesDefinition.internal.lastRetrieved;b.geometry=a.pagesDefinition.geometry;b.where=a.pagesDefinition.where;b.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;b.returnGeometry=a.pagesDefinition.returnGeometry;b.outSpatialReference=this.spatialReference;return this.executeQuery(b,"execute").then(function(b){f._checkCancelled(g);if(a.pagesDefinition.internal.lastRetrieved!==k)return"done";for(var c=0;c<b.features.length;c++)a.pagesDefinition.internal.set[k+
c]=b.features[c].attributes[f._layer.objectIdField];if(!1===f._pageJustIds)for(c=0;c<b.features.length;c++)f._featureCache[b.features[c].attributes[f._layer.objectIdField]]=b.features[c];b.features.length!==a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=k+a.pagesDefinition.resultRecordCount;return"done"})}catch(h){return q.reject(h)}};e.prototype._fieldsIncludingObjectId=function(a){if(null===a)return[this.objectIdField];
a=a.slice(0);if(-1<a.indexOf("*"))return a;for(var d=!1,g=0;g<a.length;g++)if(a[g].toUpperCase()===this.objectIdField.toUpperCase()){d=!0;break}!1===d&&a.push(this.objectIdField);return a};e.prototype._getFeatures=function(a,d,g,f){var k=this,b=[];try{-1!==d&&void 0===this._featureCache[d]&&b.push(d);if(!0===this._checkIfNeedToExpandKnownPage(a,this._maxProcessingRate(),f))return this._expandPagedSet(a,this._maxProcessingRate(),0,0,f).then(function(){return k._getFeatures(a,d,g,f)});for(var h=0,c=
a._lastFetchedIndex;c<a._known.length;c++){a._lastFetchedIndex+=1;h++;if(void 0===this._featureCache[a._known[c]]){var e=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){var l=this._layer._mode;if(void 0!==l._featureMap[a._known[c]]){var t=l._featureMap[a._known[c]];null!==t&&(e=!0,this._featureCache[a._known[c]]=t)}}if(!1===e&&(a._known[c]!==d&&b.push(a._known[c]),b.length>=this._maxProcessingRate()-1))break}if(h>=g&&0===b.length)break}if(0===b.length)return q.resolve("success");try{var n=
new u;this._requestStandardised&&(n.sqlFormat="standard");n.objectIds=b;n.outFields=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._layer.outFields?this._layer.outFields:["*"]);n.returnGeometry=!0;!0===this._removeGeometry&&(n.returnGeometry=!1);n.outSpatialReference=this.spatialReference;return this.executeQuery(n,"execute").then(function(a){k._checkCancelled(f);if(void 0!==a.error)return q.reject(Error(a.error));for(var b=0;b<a.features.length;b++)k._featureCache[a.features[b].attributes[k._layer.objectIdField]]=
a.features[b];return"success"})}catch(p){return q.reject(p)}}catch(p){return q.reject(p)}};e.prototype._getDistinctPages=function(a,d,g,f,k,b,h,c,e){var l=this;return this._ensureLoaded().then(function(){return l.databaseType()}).then(function(m){for(var n=g.parseTree.column,p=0;p<l._layer.fields.length;p++)if(l._layer.fields[p].name.toLowerCase()===n.toLowerCase()){n=l._layer.fields[p].name;break}p=new u;l._requestStandardised&&(p.sqlFormat="standard");m=null===b?null===k?"1\x3d1":"":w.toWhereClause(b,
m);l._layer.definitionExpression&&(m=""!==m?"(("+l._layer.definitionExpression+") AND ("+m+"))":l._layer.definitionExpression);p.where=m;p.spatialRelationship=l._makeRelationshipEnum(f);p.relationParameter=l._makeRelationshipParam(f);p.geometry=null===k?null:k;p.returnDistinctValues=!0;p.returnGeometry=!1;p.outFields=[n];return l.executeQuery(p,"execute").then(function(m){l._checkCancelled(e);if(!m.hasOwnProperty("features"))return q.reject(Error("Unnexected Result querying statistics from layer"));
for(var p=!1,r=0;r<l._layer.fields.length;r++)if(l._layer.fields[r].name===n){"date"===l._layer.fields[r].type&&(p=!0);break}for(r=0;r<m.features.length;r++){if(p){var t=m.features[r].attributes[n];null!==t?c.push(new Date(t)):c.push(t)}else c.push(m.features[r].attributes[n]);if(c.length>=h)break}return 0===m.features.length?c:m.features.length===l._layer.maxRecordCount&&c.length<h?l._getDistinctPages(a+m.features.length,d,g,f,k,b,h,c,e).then(function(a){return{calculated:!0,result:a}}):c})})};e.prototype._distinctStat=
function(a,d,g,f,k,b,h){return this._getDistinctPages(0,a,d,g,f,k,b,[],h).then(function(a){return{calculated:!0,result:a}})};e.prototype.isTable=function(){return this._layer.isTable||null===this._layer.geometryType||"table"===this._layer.type||""===this._layer.geometryType};e.prototype._countstat=function(a,d,g,f,k){var b=this;return this.databaseType().then(function(a){var c=new u;b._requestStandardised&&(c.sqlFormat="standard");if(b.isTable()&&g&&null!==d&&""!==d)return{calculated:!0,result:0};
a=null===f?null===g?"1\x3d1":"":w.toWhereClause(f,a);b._layer.definitionExpression&&(a=""!==a?"(("+b._layer.definitionExpression+") AND ("+a+"))":b._layer.definitionExpression);c.where=a;c.where=a;c.spatialRelationship=b._makeRelationshipEnum(d);c.relationParameter=b._makeRelationshipParam(d);c.geometry=null===g?null:g;c.returnGeometry=!1;return b.executeQuery(c,"executeForCount").then(function(a){return{calculated:!0,result:a}})})};e.prototype._stats=function(a,d,g,f,k,b,h){var c=this;return this._ensureLoaded().then(function(){var e=
c._layer.capabilities&&c._layer.capabilities.query&&!0===c._layer.capabilities.query.supportsSqlExpression,l=c._layer.capabilities&&c._layer.capabilities.query&&!0===c._layer.capabilities.query.supportsStatistics,t=c._layer.capabilities&&c._layer.capabilities.query&&!0===c._layer.capabilities.query.supportsDistinct;return"count"===a?t?c._countstat(a,g,f,k,h):{calculated:!1}:!1===l||!1===z.isSingleField(d)&&!1===e||!1===d.isStandardized?""!==g||null!==k?{calculated:!1}:c._manualStat(a,d,b,h):"distinct"===
a?!1===t?""!==g||null!==k?{calculated:!1}:c._manualStat(a,d,b,h):c._distinctStat(a,d,g,f,k,b,h):c.databaseType().then(function(b){if(c.isTable()&&f&&null!==g&&""!==g)return{calculated:!0,result:null};var h=new u;c._requestStandardised&&(h.sqlFormat="standard");var e=null===k?null===f?"1\x3d1":"":w.toWhereClause(k,b);c._layer.definitionExpression&&(e=""!==e?"(("+c._layer.definitionExpression+") AND ("+e+"))":c._layer.definitionExpression);h.where=e;h.spatialRelationship=c._makeRelationshipEnum(g);
h.relationParameter=c._makeRelationshipParam(g);h.geometry=null===f?null:f;e=new B;e.statisticType=I.decodeStatType(a);e.onStatisticField=w.toWhereClause(d,b);e.outStatisticFieldName="ARCADE_STAT_RESULT";h.returnGeometry=!1;var l="ARCADE_STAT_RESULT";h.outStatistics=[e];return c.executeQuery(h,"execute").then(function(a){if(!a.hasOwnProperty("features")||0===a.features.length)return q.reject(Error("Unnexected Result querying statistics from layer"));for(var b=!1,c=0;c<a.fields.length;c++)if("ARCADE_STAT_RESULT"===
a.fields[c].name.toUpperCase()){l=a.fields[c].name;"date"===a.fields[c].type&&(b=!0);break}return b?(b=a.features[0].attributes[l],null!==b&&(b=new Date(a.features[0].attributes[l])),{calculated:!0,result:b}):{calculated:!0,result:a.features[0].attributes[l]}})})})};e.prototype._stat=function(a,d,g,f,e,b,h){return this._stats(a,d,g,f,e,b,h)};e.prototype._canDoAggregates=function(a,d,g,f,e){var b=this;return this._ensureLoaded().then(function(){var a=!1,c=b._layer.capabilities&&b._layer.capabilities.query&&
!0===b._layer.capabilities.query.supportsSqlExpression;void 0!==b._layer.capabilities&&null!==b._layer.capabilities.query&&!0===b._layer.capabilities.query.supportsStatistics&&!0===b._layer.capabilities.query.supportsOrderBy&&(a=!0);if(a)for(var f=0;f<d.length-1;f++)null!==d[f].workingexpr&&(!1===d[f].workingexpr.isStandardized?a=!1:!1===z.isSingleField(d[f].workingexpr)&&!1===c&&(a=!1));return!1===a?!1:!0})};e.prototype._makeRelationshipEnum=function(a){if(0<=a.indexOf("esriSpatialRelRelation"))return"relation";
switch(a){case "esriSpatialRelRelation":return"relation";case "esriSpatialRelIntersects":return"intersects";case "esriSpatialRelContains":return"contains";case "esriSpatialRelOverlaps":return"overlaps";case "esriSpatialRelWithin":return"within";case "esriSpatialRelTouches":return"touches";case "esriSpatialRelCrosses":return"crosses";case "esriSpatialRelEnvelopeIntersects":return"envelope-intersects"}return a};e.prototype._makeRelationshipParam=function(a){return 0<=a.indexOf("esriSpatialRelRelation")?
a.split(":")[1]:""};e.prototype._getAggregatePagesDataSourceDefinition=function(a,d,g,f,e,b,h){var c=this;return this._ensureLoaded().then(function(){return c.databaseType()}).then(function(k){var l="",m=!1,n=!1;null!==b&&c._layer.capabilities&&c._layer.capabilities.query&&!0===c._layer.capabilities.query.supportsOrderBy&&(l=b.constructClause(),n=!0);c._layer.capabilities&&c._layer.capabilities.query&&!1===c._layer.capabilities.query.supportsPagination&&(n=!1,m=!0,l=c._layer.objectIdField);for(var p=
[],r=0;r<d.length;r++){var q=new B;q.onStatisticField=null!==d[r].workingexpr?w.toWhereClause(d[r].workingexpr,k):"";q.outStatisticFieldName=d[r].field;q.statisticType=d[r].toStatisticsName();p.push(q)}""===l&&(l=a.join(","));r=c._maxQueryRate();void 0!==c._layer.maxRecordCount&&c._layer.maxRecordCount<r&&(r=c._layer.maxRecordCount);k=null===e?null===f?"1\x3d1":"":w.toWhereClause(e,k);c._layer.definitionExpression&&(k=""!==k?"(("+c._layer.definitionExpression+") AND ("+k+"))":c._layer.definitionExpression);
return new x([],["GETPAGES"],n,{groupbypage:!0,spatialRel:c._makeRelationshipEnum(g),relationParam:c._makeRelationshipParam(g),outFields:["*"],useOIDpagination:m,generatedOid:h,resultRecordCount:r,resultOffset:0,groupByFieldsForStatistics:a,outStatistics:p,geometry:null===f?null:f,where:k,orderByFields:l,returnGeometry:!1,returnIdsOnly:!1,internal:{lastMaxId:-1,set:[],lastRetrieved:0,fullyResolved:!1}})})};e.prototype._getAgregagtePhysicalPage=function(a,d,g){var f=this;try{var e=a.pagesDefinition.where;
!0===a.pagesDefinition.useOIDpagination&&(e=""!==e?"("+e+") AND ("+a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString()+")":a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString());var b=a.pagesDefinition.internal.lastRetrieved,h=new u;this._requestStandardised&&(h.sqlFormat="standard");h.where=e;h.spatialRelationship=a.pagesDefinition.spatialRel;h.relationParameter=a.pagesDefinition.relationParam;h.outFields=a.pagesDefinition.outFields;
h.outStatistics=a.pagesDefinition.outStatistics;h.geometry=a.pagesDefinition.geometry;h.groupByFieldsForStatistics=a.pagesDefinition.groupByFieldsForStatistics;h.num=a.pagesDefinition.resultRecordCount;h.start=a.pagesDefinition.internal.lastRetrieved;h.returnGeometry=a.pagesDefinition.returnGeometry;h.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;return this.isTable()&&h.geometry&&h.spatialRelationship?q.resolve([]):this.executeQuery(h,"execute").then(function(c){f._checkCancelled(g);
if(!c.hasOwnProperty("features"))return q.reject(Error("Unnexected Result querying aggregates from layer"));var d=[];if(a.pagesDefinition.internal.lastRetrieved!==b)return[];for(var e=0;e<c.features.length;e++)a.pagesDefinition.internal.set[b+e]=c.features[e].attributes[a.pagesDefinition.generatedOid];for(e=0;e<c.features.length;e++)d.push(new y({attributes:c.features[e].attributes,geometry:null}));!0===a.pagesDefinition.useOIDpagination?0===c.features.length?a.pagesDefinition.internal.fullyResolved=
!0:a.pagesDefinition.internal.lastMaxId=c.features[c.features.length-1].attributes[a.pagesDefinition.generatedOid]:c.features.length!==a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=b+a.pagesDefinition.resultRecordCount;return d})}catch(c){return q.reject(c)}};e.create=function(a,d,g,f){a=new K({url:a,outFields:null===d?["*"]:d});return new e({layer:a,spatialReference:g,lrucache:f})};e.prototype.relationshipMetaData=function(){return this._layer&&
this._layer.source&&this._layer.source.sourceJSON&&this._layer.source.sourceJSON.relationships?this._layer.source.sourceJSON.relationships:[]};e.prototype.serviceUrl=function(){return v.extractServiceUrl(this._layer.parsedUrl.path)};e.prototype.queryAttachments=function(a,d,e,f){var g=this;if(this._layer.capabilities.data.supportsAttachment&&this._layer.capabilities.operations.supportsQueryAttachments){var b={objectIds:[a]};if(d&&0<d||e&&0<e)b.size=[d&&0<d?d:0,e&&0<e?e:d+1];f&&0<f.length&&(b.attachmentTypes=
f);return this._layer.queryAttachments(b).then(function(b){var c=[];b&&b[a]&&b[a].forEach(function(b){c.push(new F(b.id,b.name,b.contentType,b.size,g._layer.parsedUrl.path+"/"+a.toString()+"/attachments/"+b.id.toString()))});return c})}return q.resolve([])};e.prototype.queryRelatedFeatures=function(a){var d={f:"json",relationshipId:a.relationshipId.toString(),definitionExpression:a.where,outFields:a.outFields.join(","),returnGeometry:a.returnGeometry.toString()};void 0!==a.resultOffset&&null!==a.resultOffset&&
(d.resultOffset=a.resultOffset.toString());void 0!==a.resultRecordCount&&null!==a.resultRecordCount&&(d.resultRecordCount=a.resultRecordCount.toString());a.orderByFields&&(d.orderByFields=a.orderByFields.join(","));0<a.objectIds.length&&(d.objectIds=a.objectIds.join(","));a.outSpatialReference&&(d.outSR=JSON.stringify(a.outSpatialReference.toJSON()));return E(this._layer.parsedUrl.path+"/queryRelatedRecords",{responseType:"json",query:d}).then(function(a){if(a.data){var d={};if((a=a.data)&&a.relatedRecordGroups)for(var e=
a.spatialReference,b=0,g=a.relatedRecordGroups;b<g.length;b++){for(var c=g[b],m=c.objectId,l=[],t=0,c=c.relatedRecords;t<c.length;t++){var n=c[t];n.geometry&&(n.geometry.spatialReference=e);n=new y({geometry:n.geometry?J.fromJSON(n.geometry):null,attributes:n.attributes});l.push(n)}d[m]={features:l,exceededTransferLimit:!0===a.exceededTransferLimit}}return d}return q.reject("Invalid Request")})};e.prototype.getFeatureByObjectId=function(a,d){var e=new A({url:this._layer.parsedUrl.path}),f=new u;f.outFields=
d;f.returnGeometry=!1;f.outSpatialReference=this.spatialReference;f.where=this.objectIdField+"\x3d"+a.toString();return e.execute(f).then(function(a){return 1===a.features.length?a.features[0]:null})};return e}(G)});