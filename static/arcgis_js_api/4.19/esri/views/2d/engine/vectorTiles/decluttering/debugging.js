// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports"],function(t){function u(c,g){return`${Math.round(10*c)/10}${g}`}t.drawColliders=function(c,g){const b=window.COLLISION_XRAY;for(let m=0;m<g.length;++m){const f=!g[m].unique.show;if(b||!f)for(const n of g[m].colliders){if(!n.enabled)continue;var a=!g[m].unique.parts[n.partIndex].show;if(!b&&a)continue;var p=n.xScreen,d=n.yScreen;const q=n.dxScreen,r=n.dyScreen;c.globalAlpha=f||a?.2:1;a=c;var k=p-1,h=d-1;a.fillStyle="green";a.fillRect(k,h,3,3);a=c;k=p+q;h=d+r;var e=n.width,l=n.height;
a.strokeStyle="red";a.strokeRect(k,h,e,l);a=c;p=p+q-1;d=d+r-1;a.fillStyle="blue";a.fillRect(p,d,3,3);c.globalAlpha=1}}};t.drawGridIndex=function(c,g){c.strokeStyle="black";const b=g.cellSize,a=g.rows,p=g.columns;for(let d=0;d<a;d++){const k=g.cells[d],h=d*b,e=(d+1)*b;for(let l=0;l<p;l++){const m=k[l],f=l*b;c.strokeRect(f,h,(l+1)*b-f,e-h);c.fillText(`cells:${m.length}`,f+4,h+12)}}};t.perfAdd=function(c,g,b){if(window.PERFORMANCE_RECORDING_STORAGE){var a=window.PERFORMANCE_RECORDING_STORAGE;a.perf=
a.perf||{};a=a.perf;a[c]=a[c]||{start:null,time:0,min:void 0,max:void 0,samples:[],unit:b};a[c].time+=g;a[c].samples.push(g);if(null==a[c].min||g<a[c].min)a[c].min=g;if(null==a[c].max||g>a[c].max)a[c].max=g}};t.perfClear=function(){window.PERFORMANCE_RECORDING_STORAGE&&(window.PERFORMANCE_RECORDING_STORAGE.perf={})};t.perfElement=function(c){if(!window.PERFORMANCE_RECORDING_STORAGE){var g=document.createElement("div");g.innerHTML="No recorded data is present because performance recording is disabled.";
return g}g=document.createElement("div");var b=window.PERFORMANCE_RECORDING_STORAGE.perf;var a='\x3ctable style\x3d"border-collapse: collapse;"\x3e'+`<tr style="text-weight: bold; border-bottom: 1px solid "${c}";"><td>Name</td><td>Total</td><td>Runs</td><td>Average</td><td>Min</td><td>Distribution</td><td>Max</td><td>Histogram (${50} bins)</td></tr>`;const p=[];for(var d in b)p.push({name:d,value:b[d].time/b[d].samples.length,sortkey:b[d].max});p.sort((f,n)=>-(f.sortkey-n.sortkey));d=p.map(f=>f.name);
for(var k of d)a+="\x3ctr\x3e",a+=`<td>${k}</td>`,a+=`<td>${u(b[k].time,b[k].unit)}</td>`,a+=`<td>${b[k].samples.length}</td>`,a+=`<td>${u(b[k].time/b[k].samples.length,b[k].unit)}</td>`,a+=`<td style="text-align: right;">${u(b[k].min,b[k].unit)}</td>`,a+="\x3ctd data-distribution\x3d'1'\x3e\x3c/td\x3e",a+=`<td>${u(b[k].max,b[k].unit)}</td>`,a+="\x3ctd data-histogram\x3d'1'\x3e\x3c/td\x3e",a+="\x3c/tr\x3e";g.innerHTML=a+"\x3ctable\x3e";a=g.querySelectorAll("td[data-distribution\x3d'1']");k=g.querySelectorAll("td[data-histogram\x3d'1']");
for(let f=0;f<a.length;f++){let n=a[f];var h=document.createElement("canvas");h.height=10;h.width=100;var e=h.getContext("2d");e.strokeStyle=c;e.beginPath();e.moveTo(0,5);e.lineTo(100,5);if(b[d[f]].max>b[d[f]].min+.001)for(const q of b[d[f]].samples){var l=(q-b[d[f]].min)/(b[d[f]].max-b[d[f]].min);e.moveTo(100*l,3);e.lineTo(100*l,7)}e.stroke();e.strokeRect((p[f].value-b[d[f]].min)/(b[d[f]].max-b[d[f]].min)*100-2,0,4,9);n.appendChild(h);n=k[f];{h=Array(50);for(e=0;e<h.length;e++)h[e]=0;for(const r of b[d[f]].samples)e=
(r-b[d[f]].min)/(b[d[f]].max-b[d[f]].min),h[1===e?h.length-1:Math.floor(e*h.length)]++;e=document.createElement("canvas");e.height=30;e.width=120;l=e.getContext("2d");l.strokeStyle=c;l.fillStyle=c;let q=0;for(var m=0;m<h.length;m++)q=Math.max(q,h[m]);for(m=0;m<h.length;m++){const r=h[m];l.fillRect(m*e.width/h.length,e.height*(1-r/q),e.width/h.length,r/q*e.height)}l.beginPath();l.moveTo(0,e.height);l.lineTo(e.width,e.height);l.stroke();n.appendChild(e)}}c=g.querySelectorAll("td");for(b=0;b<c.length;b++)c[b].style.padding=
"5px";return g};Object.defineProperty(t,"__esModule",{value:!0})});