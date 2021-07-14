// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(r,c){function h(a){return"("+a.map(function(a){return a+" \x3e\x3d 0"}).join(" OR ")+")"}function k(a,b){var e=b.returnFieldName,f=b.defaultValue,c=b.integerFields,g=[];e&&f&&(b=a.map(function(a){return a+" \x3c\x3d 0"}).join(" AND "),g.push("WHEN "+b+" THEN "+f));b=function(b){var f=a.reduce(function(a,e){b!==e&&a.push(b+" \x3e "+e);return a},[]).join(" AND "),d=e&&"'"+b+"'"||(c&&-1<c.indexOf(b)?"cast("+b+" as float)":b);g.push("WHEN "+f+" THEN "+d)};for(var d=
0;d<a.length;d++)b(a[d]);return"CASE "+g.join(" ")+" ELSE "+(f||"0")+" END"}function d(a){return a&&a.map(function(a){return'$feature["'+a+'"];'}).join("\n")+"\n"||""}function l(a,b){void 0===b&&(b=!1);a=a.map(function(a){return'"'+a+'"'});return"\n  var fieldNames \x3d [ "+a.join(", ")+" ]; \n  var numFields \x3d "+a.length+";\n  var maxValueField \x3d null;\n  var maxValue \x3d -Infinity;\n  var value, i, totalValue \x3d null;\n\n  for(i \x3d 0; i \x3c numFields; i++) {\n    value \x3d $feature[fieldNames[i]];\n\n    if(value \x3e 0) {\n      if(value \x3e maxValue) {\n        maxValue \x3d value;\n        maxValueField \x3d fieldNames[i];\n      }\n      else if (value \x3d\x3d maxValue) {\n        maxValueField \x3d null;\n      }\n    }\n    "+
(b?"\n  if(value !\x3d null \x26\x26 value \x3e\x3d 0) {\n    if (totalValue \x3d\x3d null) { totalValue \x3d 0; }\n    totalValue \x3d totalValue + value;\n  }\n  ":"")+"\n  }\n  "}function m(a){var b=l(a);return"\n  "+d(a)+"\n  "+b+"\n  return maxValueField;\n  "}function n(a){var b=d(a);a=a.map(function(a){return'"'+a+'"'});return"\n  "+b+"\n  var fieldNames \x3d [ "+a.join(", ")+" ]; \n  var numFields \x3d "+a.length+";\n  var value, i, totalValue \x3d null;\n\n  for(i \x3d 0; i \x3c numFields; i++) {\n    value \x3d $feature[fieldNames[i]];\n\n    if(value !\x3d null \x26\x26 value \x3e\x3d 0) {\n      if (totalValue \x3d\x3d null) { totalValue \x3d 0; }\n      totalValue \x3d totalValue + value;\n    }\n  }\n\n  return totalValue;\n  "}
function p(a){var b=l(a,!0);return"\n  "+d(a)+"\n  "+b+"\n\n  var strength \x3d null;\n\n  if (maxValueField !\x3d null \x26\x26 totalValue \x3e 0) {\n    strength \x3d (maxValue / totalValue) * 100;\n  }\n\n  return strength;\n  "}Object.defineProperty(c,"__esModule",{value:!0});var q=["integer","small-integer"];c.noDominantCategoryField="no_dominant_category";c.getSQLForPredominantCategoryName=function(a){return{expression:k(a,{returnFieldName:!0,defaultValue:"'"+c.noDominantCategoryField+"'"})}};
c.getPredominanceExpressions=function(a,b){var e=b.filter(function(b){return-1<q.indexOf(a.getField(b).type)}),c=b.join(" + "),d={sqlExpression:"("+c+")",sqlWhere:h(b)},e={sqlExpression:"(( ("+k(b,{integerFields:e})+") / ("+c+") ) * 100)",sqlWhere:h(b)+" AND (("+c+") \x3e 0)"};return{predominantCategory:{valueExpression:m(b)},size:{valueExpression:n(b),statisticsQuery:d,histogramQuery:d},opacity:{valueExpression:p(b),statisticsQuery:e,histogramQuery:e}}};c.getArcadeForPredominantCategory=m});