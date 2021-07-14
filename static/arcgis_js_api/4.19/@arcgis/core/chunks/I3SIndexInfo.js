/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{i as e}from"./Logger.js";import o from"../core/Error.js";import r from"../request.js";async function n(n,t,s,a,i){let d=null;if(e(s)){const o=`${n}/nodepages/`,t=o+Math.floor(s.rootIndex/s.nodesPerPage);try{return{type:"page",rootPage:(await r(t,{query:{f:"json"},responseType:"json",signal:i})).data,rootIndex:s.rootIndex,pageSize:s.nodesPerPage,lodMetric:s.lodSelectionMetricType,urlPrefix:o}}catch(o){e(a)&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",t,o),d=o}}if(!t)return null;const l=`${n}/nodes/`,p=l+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await r(p,{query:{f:"json"},responseType:"json",signal:i})).data,urlPrefix:l}}catch(e){throw new o("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:e,url:p})}}export{n as f};
