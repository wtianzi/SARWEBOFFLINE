// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./FeatureSetReader"],function(h,k,l){let n=function(m){function e(b,c){var d=m.call(this,l.FeatureSetReader.createInstance())||this;d._currentIndex=-1;d._reader=b;d._indices=c;return d}k._inheritsLoose(e,m);e.from=function(b,c){return new e(b.copy(),c)};var a=e.prototype;a.getApproximateSize=function(){return this._indices.length};a.getCursor=function(){return this.copy()};a.copy=function(){const b=new e(this._reader.copy(),this._indices);
b._currentIndex=this._currentIndex;return b};a.next=function(){for(;this._nextIndex()&&!this._reader._passesFilter()&&!this._reader._getExists(););return this._currentIndex<this._indices.length};a._nextIndex=function(){return++this._currentIndex<this._indices.length?(this._reader.setIndex(this._indices[this._currentIndex]),!0):!1};a.setArcadeSpatialReference=function(b){this._reader.setArcadeSpatialReference(b)};a.attachStorage=function(b){this._reader.attachStorage(b)};a.getStorage=function(){return this._reader.getStorage()};
a.getComputedNumeric=function(b){return this._reader.getComputedNumericAtIndex(0)};a.setComputedNumeric=function(b,c){return this._reader.setComputedNumericAtIndex(c,0)};a.getComputedString=function(b){return this._reader.getComputedStringAtIndex(0)};a.setComputedString=function(b,c){return this._reader.setComputedStringAtIndex(0,c)};a.getComputedNumericAtIndex=function(b){return this._reader.getComputedNumericAtIndex(b)};a.setComputedNumericAtIndex=function(b,c){this._reader.setComputedNumericAtIndex(b,
c)};a.getComputedStringAtIndex=function(b){return this._reader.getComputedStringAtIndex(b)};a.setComputedStringAtIndex=function(b,c){return this._reader.setComputedStringAtIndex(b,c)};a.transform=function(b,c,d,g){const f=this.copy();f._reader=this._reader.transform(b,c,d,g);return f};a.extent=function(b,c,d,g){const f=this.copy();f._reader=this._reader.extent(b,c,d,g);return f};a.hasFilter=function(){return this._reader.hasFilter()};a.readAttribute=function(b,c=!1){return this._reader.readAttribute(b,
c)};a.readAttributes=function(){return this._reader.readAttributes()};a.joinAttributes=function(b){return this._reader.joinAttributes(b)};a.readArcadeFeature=function(){return this._reader.readArcadeFeature()};a.geometry=function(){return this._reader.geometry()};a.field=function(b){return this.readAttribute(b,!0)};a.hasField=function(b){return this._reader.hasField(b)};a.setField=function(b,c){return this._reader.setField(b,c)};a.keys=function(){return this._reader.keys()};a.castToText=function(){return this._reader.castToText()};
a.getQuantizationTransform=function(){return this._reader.getQuantizationTransform()};a.getAttributeHash=function(){return this._reader.getAttributeHash()};a.getObjectId=function(){return this._reader.getObjectId()};a.getDisplayId=function(){return this._reader.getDisplayId()};a.setDisplayId=function(b){return this._reader.setDisplayId(b)};a.getGroupId=function(){return this._reader.getGroupId()};a.setGroupId=function(b){return this._reader.setGroupId(b)};a.getXHydrate=function(){return this._reader.getXHydrate()};
a.getYHydrate=function(){return this._reader.getYHydrate()};a.getX=function(){return this._reader.getX()};a.getY=function(){return this._reader.getY()};a.setIndex=function(b){return this._reader.setIndex(b)};a.getIndex=function(){return this._reader.getIndex()};a.readLegacyFeature=function(){return this._reader.readLegacyFeature()};a.readOptimizedFeature=function(){return this._reader.readOptimizedFeature()};a.readLegacyPointGeometry=function(){return this._reader.readLegacyPointGeometry()};a.readLegacyGeometry=
function(){return this._reader.readLegacyGeometry()};a.readLegacyCentroid=function(){return this._reader.readLegacyCentroid()};a.readGeometryArea=function(){return this._reader.readGeometryArea()};a.readUnquantizedGeometry=function(){return this._reader.readUnquantizedGeometry()};a.readHydratedGeometry=function(){return this._reader.readHydratedGeometry()};a.readGeometry=function(){return this._reader.readGeometry()};a.readCentroid=function(){return this._reader.readCentroid()};a._passesFilter=function(){return this._reader._passesFilter()};
a._readAttribute=function(b,c){throw Error("Error: Should not be called. Underlying _reader should be used instead");};a._readAttributes=function(){throw Error("Error: Should not be called. Underlying _reader should be used instead");};k._createClass(e,[{key:"hasNext",get:function(){return this._currentIndex+1<this._indices.length}},{key:"geometryType",get:function(){return this._reader.geometryType}},{key:"hasFeatures",get:function(){return this._reader.hasFeatures}},{key:"exceededTransferLimit",
get:function(){return this._reader.exceededTransferLimit}},{key:"hasZ",get:function(){return this._reader.hasZ}},{key:"hasM",get:function(){return this._reader.hasM}}]);return e}(l.FeatureSetReader);h.FeatureSetReaderIndirect=n;Object.defineProperty(h,"__esModule",{value:!0})});