// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/arrayUtils ../../../../geometry/support/aaBoundingRect ../../../../layers/graphics/dehydratedFeatures".split(" "),function(k,p,h,q,e,g){const m=new Set;let t=function(){function l(a){this.descriptor=a;this.fetchStatus=0;this._features=null;this._featureLimit=this._numVertices=0;this.featuresMissing=!0;this._shuffled=!1;this._numFeatures=-1;this._emptyFeatureRatio=0;this._estimatedSize=-1;this._estimatedUnusedSize=
0;this._estimatedUnusedSizeDirty=!1;this._availableFields=m;this._displayingFeatures=null;this.alive=!0;this.filtered=!1}var f=l.prototype;f.setFeatures=function(a,b,c){this._availableFields=h.unwrapOr(c,m);this._features=a;this._shuffled=!1;this._estimatedSize=-1;this._estimatedUnusedSizeDirty=!0;a&&0<a.length?(this._emptyFeatureRatio=b/(a.length+b),this._numVertices=a.reduce((d,r)=>d+g.numVertices(r.geometry),0)):this._numVertices=this._emptyFeatureRatio=0};f.updateMemoryEstimates=function(){if(0>
this._estimatedSize){this._estimatedUnusedSize=this._estimatedSize=0;if(this._features)for(var a=0;a<this._features.length;++a){const b=g.estimateSize(this._features[a]);this._estimatedSize+=b;a>=this.featureLimit&&(this._estimatedUnusedSize+=b)}return!0}if(this._estimatedUnusedSizeDirty){this._estimatedUnusedSize=0;this._estimatedUnusedSizeDirty=!1;if(this._features)for(a=this.featureLimit;a<this._features.length;++a)this._estimatedUnusedSize+=g.estimateSize(this._features[a]);return!0}return!1};
f.resetFetching=function(){this.fetchStatus=3===this.fetchStatus?1:0};f.intersects=function(a){if(!a||!this.descriptor.extent)return!0;e.fromExtent(a,n);return e.intersects(this.descriptor.extent,n)};f.intersectionIncludingBorrowed=function(a,b){const c=h.isSome(this.extentIncludingBorrowedFeatures)?this.extentIncludingBorrowedFeatures:this.descriptor.extent;if(!a&&!c)return e.set(b,e.POSITIVE_INFINITY),b;a?(e.fromExtent(a,b),e.intersection(b,c,b)):e.set(b,c);return b};f._shuffle=function(a){this._features.sort((b,
c)=>g.getObjectId(b,a)-g.getObjectId(c,a));q.shuffle(this._features,16438);this._estimatedUnusedSizeDirty=this._shuffled=!0};f.reduceFeatures=function(a,b,c){if(0>=a)return!1;if(!this._features)return this.featureLimit=0,!1;let d=!1;this.featureLimit=Math.ceil(this.numFeatures*a);this.featureLimit>this._features.length&&(this.featureLimit=this._features.length,4===this.fetchStatus&&0<this._features.length&&(this.fetchStatus=1,d=!0));!this._shuffled&&1>a&&this._shuffle(c);a=Math.max(this.featureLimit,
Math.ceil(b*this.numFeatures));this._features.length>a&&(this._features.length=a,this.featuresMissing=!0,5===this.fetchStatus&&(this.fetchStatus=4));return d};p._createClass(l,[{key:"displayingFeatures",get:function(){return this._displayingFeatures},set:function(a){this._displayingFeatures=a;this.extentIncludingBorrowedFeatures=null}},{key:"perTileMaximumNumberOfFeaturesExceeded",get:function(){return!this.filtered&&(this.featuresMissing||this.features&&this.featureLimit!==this.features.length)}},
{key:"features",get:function(){return this._features}},{key:"featureLimit",get:function(){return this._featureLimit},set:function(a){this._featureLimit!==a&&(this._featureLimit=a,this._estimatedUnusedSizeDirty=!0)}},{key:"availableFields",get:function(){return this._availableFields}},{key:"emptyFeatureRatio",get:function(){return this._emptyFeatureRatio}},{key:"numFeatures",get:function(){return this.hasPreciseFeatureCount?this._numFeatures:this._features?this._features.length:0},set:function(a){this._numFeatures=
a}},{key:"hasPreciseFeatureCount",get:function(){return-1<this._numFeatures}},{key:"needsFeatureCount",get:function(){return-1===this._numFeatures}},{key:"numVertices",get:function(){return this._numVertices}},{key:"id",get:function(){return this.descriptor.id}},{key:"estimatedSize",get:function(){this.updateMemoryEstimates();return this._estimatedSize}},{key:"estimatedUnusedSize",get:function(){return this._estimatedUnusedSize}},{key:"isFetching",get:function(){return 2===this.fetchStatus||3===this.fetchStatus}},
{key:"isRefetching",get:function(){return 3===this.fetchStatus}},{key:"needsFetching",get:function(){return 0===this.fetchStatus||1===this.fetchStatus}},{key:"needsRefetching",get:function(){return 1===this.fetchStatus}},{key:"isFetched",get:function(){return 4===this.fetchStatus||5===this.fetchStatus}},{key:"needsDisplayUpdate",get:function(){var a;if(a=!!this._features){a:{a=this._features;var b=this.displayingFeatures,c=this.featureLimit;if(h.isNone(b)||h.isNone(a)||c!==b.length||c>a.length)a=
!1;else{for(let d=0;d<c;++d)if(a[d]!==b[d]){a=!1;break a}a=!0}}a=!a}return a}},{key:"cache",get:function(){return{availableFields:this._availableFields,features:this.features,numFeatures:this._numFeatures,emptyFeatureRatio:this._emptyFeatureRatio,fetchStatus:this.fetchStatus,featuresMissing:this.featuresMissing}},set:function(a){this.requestController=null;this._availableFields=a.availableFields;this._features=a.features;this._numFeatures=a.numFeatures;this._emptyFeatureRatio=a.emptyFeatureRatio;
this.fetchStatus=a.fetchStatus;this.featuresMissing=a.featuresMissing;this._estimatedSize=-1;this._estimatedUnusedSizeDirty=!0}}]);return l}();const n=e.create();k.FAILED_FEATURE_COUNT=-2;k.FeatureTile=t;Object.defineProperty(k,"__esModule",{value:!0})});