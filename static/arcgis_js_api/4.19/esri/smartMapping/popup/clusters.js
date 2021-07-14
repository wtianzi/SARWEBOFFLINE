// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/maybe ../../core/Error ../../intl/messages ../../views/2d/layers/support/clusterUtils ./support/clusterUtils".split(" "),function(d,f,g,h,k,l){async function m(a){const {layer:b,renderer:c}=a;await b.load();a=c||b.renderer;if(!k.isClusterCompatibleRenderer(a))throw new g("clusters-popup:invalid-parameters","'renderer' is not valid");return{layer:b,renderer:a}}d.getTemplates=async function(a){const [{renderer:b,layer:c},n]=await Promise.all([m(a),h.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);
a=await l.createPopupTemplate(c,b);let e=null;if(f.isSome(a))e={name:"clusters",title:n.clusters.templateTitle,value:a};else return null;return{primaryTemplate:e,secondaryTemplates:[]}};Object.defineProperty(d,"__esModule",{value:!0})});