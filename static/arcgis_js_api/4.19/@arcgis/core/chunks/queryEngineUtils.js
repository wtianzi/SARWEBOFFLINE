/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{L as t,j as e}from"../views/draw/DrawAction.js";import{F as r,L as n,P as o}from"../widgets/Sketch/SketchViewModel.js";class s extends r{constructor(t){super({...t,constraint:new n(t.coordinateHelper,t.edgeStart,t.edgeEnd)})}get hints(){return[new t(1,this.constraint.start,this.constraint.end)]}}class a extends r{constructor(t){super({...t,constraint:new o(t.coordinateHelper,t.targetPoint)})}get hints(){return[new e(this.targetPoint)]}}function i(t,e){switch(t.type){case"edge":return new s({coordinateHelper:e,edgeStart:e.fromPoint(t.start),edgeEnd:e.fromPoint(t.end),targetPoint:e.fromPoint(t.target),objectId:t.objectId});case"vertex":return new a({coordinateHelper:e,targetPoint:e.fromPoint(t.target),objectId:t.objectId})}}export{i as c};
