/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{n as t}from"./Logger.js";import{n as e}from"../core/scheduling.js";import{d as s}from"./vec3f64.js";import{d as i}from"./vec4f64.js";import{e as r,g as f,h}from"./quatf64.js";import{b as a}from"./vec2f64.js";class c{constructor(t,s,i){this.itemByteSize=t,this.itemCreate=s,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(i/this.itemByteSize),this.tickHandle=e.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=t(this.tickHandle)),this.itemsPtr=0,this.items=t(this.items),this.buffers=t(this.buffers)}get(){0===this.itemsPtr&&e((()=>{}));const t=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=t;){const t=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let e=0;e<this.itemsPerBuffer;++e)this.items.push(this.itemCreate(t,e*this.itemByteSize));this.buffers.push(t)}return this.items[this.itemsPtr++]}reset(){const t=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>t;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(t=m){return new c(16,a,t)}static createVec3f64(t=m){return new c(24,s,t)}static createVec4f64(t=m){return new c(32,i,t)}static createMat3f64(t=m){return new c(72,r,t)}static createMat4f64(t=m){return new c(128,f,t)}static createQuatf64(t=m){return new c(32,h,t)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const m=4096,n=c.createVec2f64(),u=c.createVec3f64(),o=c.createVec4f64(),l=(c.createMat3f64(),c.createMat4f64()),P=c.createQuatf64();export{u as a,o as b,n as c,P as d,l as s};
