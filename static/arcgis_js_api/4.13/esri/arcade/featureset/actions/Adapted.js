// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../Graphic ../../kernel ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../../../core/promiseUtils ../../../core/sql/WhereClause ../../../geometry/SpatialReference".split(" "),function(r,t,v,B,C,x,w,u,p,q,y,D){Object.defineProperty(t,"__esModule",{value:!0});r=function(){function n(){this.sqlRewritable=!1}n.prototype.extractValue=function(d){return null};n.prototype.postInitialization=function(d,a){};
n.prototype.rewriteSql=function(d,a){return{rewritten:this.sqlRewritable,where:d}};return n}();t.AdaptedField=r;var z=function(n){function d(a){var b=n.call(this)||this;b.field=a;b.sqlRewritable=!0;return b}v(d,n);d.prototype.extractValue=function(a){return a.attributes[this.field.name]};d.prototype.rewriteSql=function(a,b){return{rewritten:this.sqlRewritable,where:a}};return d}(r);t.OriginalField=z;var A=function(n){function d(a,b,c){var f=n.call(this)||this;f.originalField=a;f.sqlRewritable=!0;
f.field=u.cloneField(a);f.field.name=b;f.field.alias=c;return f}v(d,n);d.prototype.rewriteSql=function(a,b){return{rewritten:this.sqlRewritable,where:p.reformulateWithoutField(a,this.field.name,this.originalField.name,b.getFieldsIndex())}};d.prototype.extractValue=function(a){return a.attributes[this.originalField.name]};return d}(r);t.FieldRename=A;var E=function(n){function d(a,b,c){var f=n.call(this)||this;f.field=a;f.codefield=b;f.lkp=c;f.reverseLkp={};for(var e in c)f.reverseLkp[c[e]]=e;f.sqlRewritable=
!0;return f}v(d,n);d.prototype.rewriteSql=function(a,b){var c=this.evaluateNodeToWhereClause(a.parseTree,u.FeatureServiceDatabaseType.Standardised,this.field.name,this.codefield instanceof y.WhereClause?p.toWhereClause(this.codefield,u.FeatureServiceDatabaseType.Standardised):this.codefield,a.parameters);return 0<=c.indexOf(d.BADNESS)?{rewritten:!1,where:a}:{rewritten:this.sqlRewritable,where:y.WhereClause.create(c,b._parent.getFieldsIndex())}};d.prototype.evaluateNodeToWhereClause=function(a,b,c,
f,e){void 0===c&&(c=null);void 0===f&&(f=null);var h;switch(a.type){case "interval":return p.convertIntervalToSql(this.evaluateNodeToWhereClause(a.value,b,c,f,e),a.qualifier,a.op,u.FeatureServiceDatabaseType.Standardised);case "case_expression":h=" CASE ";"simple"===a.format&&(h+=this.evaluateNodeToWhereClause(a.operand,b,c,d.BADNESS,e));for(f=0;f<a.clauses.length;f++)h+=" WHEN "+this.evaluateNodeToWhereClause(a.clauses[f].operand,b,c,d.BADNESS,e)+" THEN "+this.evaluateNodeToWhereClause(a.clauses[f].value,
b,c,d.BADNESS,e);null!==a.else&&(h+=" ELSE "+this.evaluateNodeToWhereClause(a.else,b,c,d.BADNESS,e));return h+" END ";case "param":c=e[a.value.toLowerCase()];if("string"===typeof c)return"'"+e[a.value.toLowerCase()].toString().replace(/'/g,"''")+"'";if(c instanceof Date)return p.makeDateString(c,b);if(c instanceof Array){a=[];for(f=0;f<c.length;f++)"string"===typeof c[f]?a.push("'"+c[f].toString().replace(/'/g,"''")+"'"):c[f]instanceof Date?a.push(p.makeDateString(c[f],b)):a.push(c[f].toString());
return a}return c.toString();case "expr_list":h=[];var k=0;for(a=a.value;k<a.length;k++)h.push(this.evaluateNodeToWhereClause(a[k],b,c,f,e));return h;case "unary_expr":return" ( NOT "+this.evaluateNodeToWhereClause(a.expr,b,c,d.BADNESS,e)+" ) ";case "binary_expr":switch(a.operator){case "AND":return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" AND "+this.evaluateNodeToWhereClause(a.right,b,c,f,e)+") ";case "OR":return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" OR "+this.evaluateNodeToWhereClause(a.right,
b,c,f,e)+") ";case "IS":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" IS NULL )";case "ISNOT":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" IS NOT NULL )";case "IN":h=[];if("expr_list"===a.right.type){if("column_ref"===a.left.type&&a.left.column.toUpperCase()===this.field.name.toUpperCase()){h=[];for(var k=!0,m=0,g=a.right.value;m<g.length;m++){var l=
g[m];if("string"===l.type)if(void 0!==this.lkp[l.value])h.push(this.lkp[l.value].toString());else{k=!1;break}else{k=!1;break}}if(k)return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" IN ("+h.join(",")+")) "}h=this.evaluateNodeToWhereClause(a.right,b,c,f,e);return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" IN ("+h.join(",")+")) "}h=this.evaluateNodeToWhereClause(a.right,b,c,f,e);return h instanceof Array?" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" IN ("+h.join(",")+")) ":
" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" IN ("+h+")) ";case "NOT IN":h=[];if("expr_list"===a.right.type){if("column_ref"===a.left.type&&a.left.column.toUpperCase()===this.field.name.toUpperCase()){h=[];k=!0;m=0;for(g=a.right.value;m<g.length;m++)if(l=g[m],"string"===l.type)if(void 0!==this.lkp[l.value])h.push(this.lkp[l.value].toString());else{k=!1;break}else{k=!1;break}if(k)return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" NOT IN ("+h.join(",")+")) "}h=this.evaluateNodeToWhereClause(a.right,
b,c,f,e);return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" NOT IN ("+h.join(",")+")) "}h=this.evaluateNodeToWhereClause(a.right,b,c,f,e);return h instanceof Array?" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" NOT IN ("+h.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,f,e)+" NOT IN ("+h+")) ";case "BETWEEN":return f=this.evaluateNodeToWhereClause(a.right,b,c,d.BADNESS,e)," ("+this.evaluateNodeToWhereClause(a.left,b,c,d.BADNESS,e)+" BETWEEN "+f[0]+" AND "+f[1]+" ) ";
case "NOTBETWEEN":return f=this.evaluateNodeToWhereClause(a.right,b,c,d.BADNESS,e)," ("+this.evaluateNodeToWhereClause(a.left,b,c,d.BADNESS,e)+" NOT BETWEEN "+f[0]+" AND "+f[1]+" ) ";case "LIKE":return""!==a.escape?" ("+this.evaluateNodeToWhereClause(a.left,b,c,d.BADNESS,e)+" LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,d.BADNESS,e)+" ESCAPE '"+a.escape+"') ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,d.BADNESS,e)+" LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,d.BADNESS,e)+") ";case "NOT LIKE":return""!==
a.escape?" ("+this.evaluateNodeToWhereClause(a.left,b,c,d.BADNESS,e)+" NOT LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,d.BADNESS,e)+" ESCAPE '"+a.escape+"') ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,d.BADNESS,e)+" NOT LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,d.BADNESS,e)+") ";case "\x3c\x3e":case "\x3d":if("column_ref"===a.left.type&&"string"===a.right.type){if(a.left.column.toUpperCase()===this.field.name.toUpperCase()&&void 0!==this.lkp[a.right.value.toString()])return" ("+
f+" "+a.operator+" "+this.lkp[a.right.value.toString()].toString()+") "}else if("column_ref"===a.right.type&&"string"===a.left.type&&a.right.column.toUpperCase()===this.field.name.toUpperCase())return" ("+this.lkp[a.right.value.toString()].toString()+" "+a.operator+" "+f+") ";return" ("+this.evaluateNodeToWhereClause(a.left,b,c,d.BADNESS,e)+" "+a.operator+" "+this.evaluateNodeToWhereClause(a.right,b,c,d.BADNESS,e)+") ";case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "*":case "-":case "+":case "/":return" ("+
this.evaluateNodeToWhereClause(a.left,b,c,d.BADNESS,e)+" "+a.operator+" "+this.evaluateNodeToWhereClause(a.right,b,c,d.BADNESS,e)+") "}throw Error("Not Supported Operator "+a.operator);case "null":return"null";case "bool":return!0===a.value?"1":"0";case "string":return"'"+a.value.toString().replace(/'/g,"''")+"'";case "timestamp":return p.makeDateString(a.value,b);case "date":return p.makeDateString(a.value,b);case "number":return a.value.toString();case "column_ref":return"CURRENT_DATE"===a.column.toUpperCase()?
p.makeToday(!0,b):"CURRENT_TIMESTAMP"===a.column.toUpperCase()?p.makeToday(!1,b):c&&c.toLowerCase()===a.column.toLowerCase()?"("+f+")":a.column;case "function":return e=this.evaluateNodeToWhereClause(a.args,b,c,d.BADNESS,e),p.translateFunctionToDatabaseSpecific(a.name,e,b)}throw Error("Unsupported sql syntax "+a.type);};d.prototype.extractValue=function(a){return this.codefield instanceof y.WhereClause?this.reverseLkp[this.codefield.calculateValueCompiled(a)]:a.attributes[this.codefield]};d.BADNESS=
"_!!!_BAD_LKP_!!!!";return d}(r);t.StringToCodeAdapted=E;r=function(n){function d(a,b){var c=n.call(this)||this;c.field=a;c.sql=b;return c}v(d,n);d.prototype.rewriteSql=function(a,b){return{rewritten:!0,where:p.reformulateWithoutField(a,this.field.name,p.toWhereClause(this.sql,u.FeatureServiceDatabaseType.Standardised),b.getFieldsIndex())}};d.prototype.postInitialization=function(a,b){};d.prototype.extractValue=function(a){return this.sql.calculateValueCompiled(a)};return d}(r);t.SqlExpressionAdapted=
r;x=function(n){function d(a){var b=n.call(this,a)||this;b._calcFunc=null;b.declaredClass="esri.arcade.featureset.actions.Adapted";b.adaptedFields=null;b._extraFilter=null;b._extraFilter=a.extraFilter;b._parent=a.parentfeatureset;b._maxProcessing=30;b.adaptedFields=a.adaptedFields;return b}v(d,n);d.findField=function(a,b){for(var c=0;c<a.length;c++){var f=a[c];if(f.name.toLowerCase()===b.toString().toLowerCase())return f}return null};d.prototype._initialiseFeatureSet=function(){null!==this._parent?
(this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.spatialReference=new D({wkid:4326}),this.objectIdField="",this.geometryType=u.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null);this.fields=[];for(var a=0,b=this.adaptedFields;a<b.length;a++){var c=b[a];
c.postInitialization(this,this._parent);this.fields.push(c.field)}};d.prototype._getSet=function(a){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._extraFilter?b._getFilteredSet("",null,null,null,a):b._parent._getSet(a)}).then(function(c){b._checkCancelled(a);b._wset=new w(c._candidates.slice(0),c._known.slice(0),c._ordered,b._clonePageDefinition(c.pagesDefinition));return b._wset}):q.resolve(this._wset)};d.prototype._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};
d.prototype._getFeatures=function(a,b,c,f){var e=this,d=[];-1!==b&&void 0===this._featureCache[b]&&d.push(b);var k=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,k,f))return this._expandPagedSet(a,k,0,0,f).then(function(d){return e._getFeatures(a,b,c,f)});for(var m=0,g=a._lastFetchedIndex;g<a._known.length&&!(m++,m<=c&&(a._lastFetchedIndex+=1),void 0===this._featureCache[a._known[g]]&&(a._known[g]!==b&&d.push(a._known[g]),d.length>=k-1));g++);if(0===d.length)return q.resolve("success");
a=new w([],d,a._ordered,null);var l=Math.min(d.length,c);return this._parent._getFeatures(a,-1,l,f).then(function(a){e._checkCancelled(f);a=[];for(var b=0;b<l;b++){var c=e._parent._featureFromCache(d[b]);void 0!==c&&a.push({geometry:c.geometry,attributes:c.attributes,id:d[b]})}for(b=0;b<a.length;b++){for(var c=a[b],h=[],g=0,k=e.adaptedFields;g<k.length;g++){var m=k[g];h[m.field.name]=m.extractValue(c)}e._featureCache[c.id]=new B({attributes:h,geometry:C.cloneGeometry(c.geometry)})}return"success"})};
d.prototype._fetchAndRefineFeatures=function(a,b,c){return q.reject(Error("Fetch and Refine should not be called in this featureset"))};d.prototype._getFilteredSet=function(a,b,c,f,e){var d=this,k=!1,m=this.reformulateWithoutAdaptions(c),k=m.cannot;c=m.where;var g=!1;if(null!==f){for(var g=!0,m=[],l=0,n=this.adaptedFields;l<n.length;l++){var q=n[l];if(!(q instanceof z)&&!0===f.scanForField(q.field.name))if(q instanceof A)m.push({field:q.field.name,newfield:q.originalField.name});else{f=null;g=!1;
break}}f&&0<m.length&&(f=f.replaceFields(m))}null!==c?null!==this._extraFilter&&(c=p.combine(this._extraFilter,c)):c=this._extraFilter;return this._ensureLoaded().then(function(){return d._parent._getFilteredSet(a,b,c,f,e)}).then(function(a){d._checkCancelled(e);return!0===k?new w(a._candidates.slice(0).concat(a._known.slice(0)),[],!0===g?a._ordered:!1,d._clonePageDefinition(a.pagesDefinition)):new w(a._candidates.slice(0),a._known.slice(0),!0===g?a._ordered:!1,d._clonePageDefinition(a.pagesDefinition))})};
d.prototype.reformulateWithoutAdaptions=function(a){var b={cannot:!1,where:a};if(null!==a)for(var c=0,f=this.adaptedFields;c<f.length;c++){var e=f[c];if(!0===p.scanForField(a,e.field.name))if(e=e.rewriteSql(a,this),!0===e.rewritten)b.where=e.where;else{b.cannot=!0;b.where=null;break}}return b};d.prototype._stat=function(a,b,c,f,e,d,k){var h=this,g=!1,l=this.reformulateWithoutAdaptions(b),g=l.cannot;b=l.where;l=this.reformulateWithoutAdaptions(e);g=g||l.cannot;e=l.where;null!==e?null!==this._extraFilter&&
(e=p.combine(this._extraFilter,e)):e=this._extraFilter;return!0===g?null===e&&""===c&&null===f?this._manualStat(a,b,d,k):q.resolve({calculated:!1}):this._parent._stat(a,b,c,f,e,d,k).then(function(g){return!1===g.calculated?null===e&&""===c&&null===f?h._manualStat(a,b,d,k):{calculated:!1}:g})};d.prototype._canDoAggregates=function(a,b,c,f,e){if(null===this._parent)return q.resolve(!1);for(var d=0;d<a.length;d++)for(var k=0,m=this.adaptedFields;k<m.length;k++){var g=m[k];if(a[d].toLowerCase()===g.field.name.toLowerCase()&&
!(g instanceof z))return q.resolve(!1)}k=[];for(d=0;d<b.length;d++){g=b[d];if(null!==g.workingexpr){m=this.reformulateWithoutAdaptions(g.workingexpr);if(m.cannot)return q.resolve(!1);g=g.clone();g.workingexpr=m.where}k.push(g)}b=this.reformulateWithoutAdaptions(e);if(b.cannot)return q.resolve(!1);e=b.where;null!==e?null!==this._extraFilter&&(e=p.combine(this._extraFilter,e)):e=this._extraFilter;return this._parent._canDoAggregates(a,k,c,f,e)};d.prototype._getAggregatePagesDataSourceDefinition=function(a,
b,c,d,e,h,k){if(null===this._parent)return q.reject(Error("Should never be called"));for(var f=[],g=0;g<b.length;g++){var l=b[g];if(null!==l.workingexpr){var n=this.reformulateWithoutAdaptions(l.workingexpr);if(n.cannot)return q.reject(Error("Should never be called"));l=l.clone();l.workingexpr=n.where}f.push(l)}b=this.reformulateWithoutAdaptions(e);if(b.cannot)return q.reject(Error("Should never be called"));e=b.where;null!==e?null!==this._extraFilter&&(e=p.combine(this._extraFilter,e)):e=this._extraFilter;
return this._parent._getAggregatePagesDataSourceDefinition(a,f,c,d,e,h,k)};return d}(x);t.AdaptedFeatureSet=x});