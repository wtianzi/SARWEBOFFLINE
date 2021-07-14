/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../geometry/SpatialReference.js";import"../request.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/ProjectParameters.js";import"../chunks/utils4.js";import e from"./Task.js";import{a as I,b as _,c as o,d as N,e as T,f as i,g as U,h as u,i as E,j as p,k as n,l as m,m as A,o as a,r as R,n as c,s as l,t as S,p as j,u as O}from"../chunks/union.js";import{p as h}from"../chunks/trimExtend.js";import"./support/GeneralizeParameters.js";import"./support/LengthsParameters.js";import"./support/OffsetParameters.js";import"./support/RelationParameters.js";import"./support/TrimExtendParameters.js";let L=class extends e{constructor(r){super(r),this.url=null}areasAndLengths(r,s){return I(this.url,r,s)}autoComplete(r,s,t){return _(this.url,r,s,t)}buffer(r,s){return o(this.url,r,s)}convexHull(r,s){return N(this.url,r,s)}cut(r,s,t){return T(this.url,r,s,t)}densify(r,s){return i(this.url,r,s)}difference(r,s,t){return U(this.url,r,s,t)}distance(r,s){return u(this.url,r,s)}fromGeoCoordinateString(r,s){return E(this.url,r,s)}generalize(r,s){return p(this.url,r,s)}intersect(r,s,t){return n(this.url,r,s,t)}labelPoints(r,s){return m(this.url,r,s)}lengths(r,s){return A(this.url,r,s)}offset(r,s){return a(this.url,r,s)}project(r,s){return h(this.url,r,s)}relation(r,s){return R(this.url,r,s)}reshape(r,s,t){return c(this.url,r,s,t)}simplify(r,s){return l(this.url,r,s)}toGeoCoordinateString(r,s){return S(this.url,r,s)}trimExtend(r,s){return j(this.url,r,s)}union(r,s){return O(this.url,r,s)}};L.UNIT_METER=9001,L.UNIT_GERMAN_METER=9031,L.UNIT_FOOT=9002,L.UNIT_SURVEY_FOOT=9003,L.UNIT_CLARKE_FOOT=9005,L.UNIT_FATHOM=9014,L.UNIT_NAUTICAL_MILE=9030,L.UNIT_SURVEY_CHAIN=9033,L.UNIT_SURVEY_LINK=9034,L.UNIT_SURVEY_MILE=9035,L.UNIT_KILOMETER=9036,L.UNIT_CLARKE_YARD=9037,L.UNIT_CLARKE_CHAIN=9038,L.UNIT_CLARKE_LINK=9039,L.UNIT_SEARS_YARD=9040,L.UNIT_SEARS_FOOT=9041,L.UNIT_SEARS_CHAIN=9042,L.UNIT_SEARS_LINK=9043,L.UNIT_BENOIT_1895A_YARD=9050,L.UNIT_BENOIT_1895A_FOOT=9051,L.UNIT_BENOIT_1895A_CHAIN=9052,L.UNIT_BENOIT_1895A_LINK=9053,L.UNIT_BENOIT_1895B_YARD=9060,L.UNIT_BENOIT_1895B_FOOT=9061,L.UNIT_BENOIT_1895B_CHAIN=9062,L.UNIT_BENOIT_1895B_LINK=9063,L.UNIT_INDIAN_FOOT=9080,L.UNIT_INDIAN_1937_FOOT=9081,L.UNIT_INDIAN_1962_FOOT=9082,L.UNIT_INDIAN_1975_FOOT=9083,L.UNIT_INDIAN_YARD=9084,L.UNIT_INDIAN_1937_YARD=9085,L.UNIT_INDIAN_1962_YARD=9086,L.UNIT_INDIAN_1975_YARD=9087,L.UNIT_FOOT_1865=9070,L.UNIT_RADIAN=9101,L.UNIT_DEGREE=9102,L.UNIT_ARCMINUTE=9103,L.UNIT_ARCSECOND=9104,L.UNIT_GRAD=9105,L.UNIT_GON=9106,L.UNIT_MICRORADIAN=9109,L.UNIT_ARCMINUTE_CENTESIMAL=9112,L.UNIT_ARCSECOND_CENTESIMAL=9113,L.UNIT_MIL6400=9114,L.UNIT_BRITISH_1936_FOOT=9095,L.UNIT_GOLDCOAST_FOOT=9094,L.UNIT_INTERNATIONAL_CHAIN=109003,L.UNIT_INTERNATIONAL_LINK=109004,L.UNIT_INTERNATIONAL_YARD=109001,L.UNIT_STATUTE_MILE=9093,L.UNIT_SURVEY_YARD=109002,L.UNIT_50KILOMETER_LENGTH=109030,L.UNIT_150KILOMETER_LENGTH=109031,L.UNIT_DECIMETER=109005,L.UNIT_CENTIMETER=109006,L.UNIT_MILLIMETER=109007,L.UNIT_INTERNATIONAL_INCH=109008,L.UNIT_US_SURVEY_INCH=109009,L.UNIT_INTERNATIONAL_ROD=109010,L.UNIT_US_SURVEY_ROD=109011,L.UNIT_US_NAUTICAL_MILE=109012,L.UNIT_UK_NAUTICAL_MILE=109013,L.UNIT_SQUARE_INCHES="esriSquareInches",L.UNIT_SQUARE_FEET="esriSquareFeet",L.UNIT_SQUARE_YARDS="esriSquareYards",L.UNIT_ACRES="esriAcres",L.UNIT_SQUARE_MILES="esriSquareMiles",L.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",L.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",L.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",L.UNIT_SQUARE_METERS="esriSquareMeters",L.UNIT_ARES="esriAres",L.UNIT_HECTARES="esriHectares",L.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",r([s()],L.prototype,"url",void 0),L=r([t("esri.tasks.GeometryService")],L);var C=L;export default C;
