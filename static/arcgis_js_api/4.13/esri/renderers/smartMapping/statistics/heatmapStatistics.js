// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Error ../../../layers/support/fieldUtils ./support/utils ../support/utils".split(" "),function(w,x,r,l,f,m,t,n,g){function u(c){return f(this,void 0,void 0,function(){var a,d,b,e,h,f,p,q;return l(this,function(k){switch(k.label){case 0:if(!(c&&c.layer&&c.view))throw new m("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required");
a=r({},c);a.blurRadius=null==a.blurRadius?10:a.blurRadius;d=[0,2,1];b=g.createLayerAdapter(a.layer,d);a.layer=b;if(!b)throw new m("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+g.getLayerTypeLabels(d).join(", "));return[4,b.load()];case 1:return k.sent(),h=(e=a.field)?b.getField(e):null,[4,g.getFieldsList({field:e})];case 2:f=k.sent();if(p=n.verifyBasicFieldValidity(b,f,"heatmap-statistics:invalid-parameters"))throw p;if(h&&(q=n.verifyFieldType(b,h,"heatmap-statistics:invalid-parameters",
v)))throw q;return[2,a]}})})}var v=t.numericTypes;return function(c){return f(this,void 0,void 0,function(){var a,d,b;return l(this,function(e){switch(e.label){case 0:return[4,u(c)];case 1:return a=e.sent(),d=a.layer,b={field:a.field,fieldOffset:a.fieldOffset,blurRadius:a.blurRadius,features:a.features,view:a.view},[2,d.heatmapStatistics(b)]}})})}});