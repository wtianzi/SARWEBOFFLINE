/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{b as t,i,c as r}from"./Logger.js";import{i as s}from"./vec3.js";import{h as a}from"./mathUtils.js";import{c as n}from"./mat4.js";import{c as o}from"./vec4f64.js";import{I as e,c as h}from"./quatf64.js";import{a9 as m}from"./VertexColor.glsl.js";import{a as d,g as f,h as g}from"./Object3D.js";class u{constructor(t,i,r=null,s=null,a,n,e,h,m){this.data=t,this.material=i,this.layerUid=r,this.graphicUid=s,this.boundingSphere=o(),this.instanceParameters={highlights:null,occludees:null,visible:!0},this.shaderTransformationDirty=!0,this.boundingInfo=a,this.material=i,this.origin=null,this.transformation=null,this.calculateShaderTransformation=e,n&&this.updateTransformation(n,h),this.castShadow=m}updateTransformation(t,i){this.transformation=t,this.shaderTransformationDirty=!0,this.computeBoundingSphere(t,i,this.boundingSphere)}shaderTransformationChanged(){this.shaderTransformationDirty=!0}computeBoundingSphere(i,r,n){t(this.boundingInfo)||(r=r||a(i),s(n,this.boundingInfo.getCenter(),i),n[3]=this.boundingInfo.getBSRadius()*r)}get hasShaderTransformation(){return i(this.calculateShaderTransformation)}get primitiveType(){return this.data.primitiveType}getShaderTransformation(){return t(this.calculateShaderTransformation)?r(this.transformation,e):(this.shaderTransformationDirty&&(this.shaderTransformation||(this.shaderTransformation=h()),n(this.shaderTransformation,this.calculateShaderTransformation(r(this.transformation,e))),this.shaderTransformationDirty=!1),this.shaderTransformation)}computeAttachmentOrigin(t){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,t)&&(i(this.transformation)&&s(t,t,this.transformation),!0);const r=this.indices.get("position"),a=this.vertexAttributes.get("position");return!!m(a,r,t)&&(i(this.transformation)&&s(t,t,this.transformation),!0)}get indices(){return this.data.indices}get vertexAttributes(){return this.data.vertexAttributes}addHighlight(){const t=new d(0),i=this.instanceParameters;return i.highlights=f(i.highlights,t),t}removeHighlight(t){const i=this.instanceParameters;i.highlights=g(i.highlights,t)}}export{u as R};
