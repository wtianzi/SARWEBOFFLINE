// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../../../core/mathUtils"],function(k){return function(){function g(a,b=0){this.count=this.capacity=0;this.emptySlots=[];this.emptySlotCount=0;this.id2slot=new Map;this.slot2id=[];this.layout=a;this.resize(b)}var c=g.prototype;c.prepareAllocate=function(a){a=this.count+a;a>this.capacity&&this.resize(a)};c.allocate=function(a){this.count>=this.capacity&&this.resize(this.count+1);const b=0<this.emptySlotCount?this.emptySlots[--this.emptySlotCount]:this.count;this.id2slot.set(a,b);this.slot2id[b]=
a;this.count++;return b};c.prepareFree=function(a){this.emptySlots.length+=a};c.free=function(a){const b=this.id2slot.get(a);null!=b&&(this.emptySlots.length<=this.emptySlotCount&&(this.emptySlots.length=this.emptySlotCount+1),this.emptySlots[this.emptySlotCount++]=b,this.id2slot.delete(a),this.slot2id[b]=null,this.count--)};c.getCount=function(){return this.count};c.getSlot=function(a){return this.id2slot.get(a)};c.hasSlot=function(a){return this.id2slot.has(a)};c.getBuffer=function(){return this.buffer};
c.compact=function(){if(0<this.emptySlotCount){const a=this.emptySlots;let b=this.emptySlotCount,d=this.count+b;a.length=b;for(a.sort((e,f)=>e-f);0<b;){if(a[b-1]!==d-1){const e=d-1,f=a[b-1];this.buffer.copyFrom(this.buffer,e,f,1);const h=this.slot2id[e];this.slot2id[e]=null;this.slot2id[f]=h;this.id2slot.set(h,f)}b--;d--}}this.emptySlotCount=0;this.emptySlots.length=0;this.resize(this.count)};c.resize=function(a){var b=this.capacity;a=Math.max(0,a);0<a&&(a=k.nextHighestPowerOfTwo(a));if(a>b){const d=
this.layout.createBuffer(a);this.buffer&&d.copyFrom(this.buffer,0,0,b);this.buffer=d}else a<b&&(b=this.layout.createBuffer(a),b.copyFrom(this.buffer,0,0,a),this.buffer=b);this.buffer||(this.buffer=this.layout.createBuffer(0));this.capacity=a;this.slot2id.length=a};return g}()});