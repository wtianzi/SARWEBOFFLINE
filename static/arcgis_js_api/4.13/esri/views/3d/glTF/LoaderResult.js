// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/assignHelper"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.makeMaterialParameters=function(a){void 0===a&&(a={});return d({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,
colorMixMode:"multiply"},a)};c.makeTextureSource=function(a,b){void 0===b&&(b={});return{data:a,parameters:d({wrap:d({s:10497,t:10497},b.wrap),noUnpackFlip:!0,mipmap:!1},b)}}});