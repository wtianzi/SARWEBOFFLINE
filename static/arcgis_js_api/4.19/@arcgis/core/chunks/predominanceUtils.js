/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{i as n,c as a}from"./utils5.js";const e="no_dominant_category";function l(n){return`(${n.map((n=>`${n} >= 0`)).join(" OR ")})`}function u(n){return{expression:r(n,{returnFieldName:!0,defaultValue:"'no_dominant_category'"})}}function r(e,l){const{returnFieldName:u,defaultValue:r,layer:t}=l,i=[];if(u&&r){const n=e.map((n=>`${n} <= 0`)).join(" AND ");i.push(`WHEN ${n} THEN ${r}`)}for(const l of e){const r=e.reduce(((n,a)=>(l!==a&&n.push(`${l} > ${a}`),n)),[]).join(" AND "),s=t&&n(t,l),o=u&&`'${l}'`?`'${l}'`:s?a(l):l;i.push(`WHEN ${r} THEN ${o}`)}return`CASE ${i.join(" ")} ELSE ${r||"0"} END`}function t(n,a){const e=a.join(" + "),u={sqlExpression:`(${e})`,sqlWhere:l(a)},t={sqlExpression:`(( (${r(a,{layer:n})}) / (${e}) ) * 100)`,sqlWhere:`${l(a)} AND ((${e}) > 0)`};return{predominantCategory:{valueExpression:o(a)},size:{valueExpression:p(a),statisticsQuery:u,histogramQuery:u},opacity:{valueExpression:$(a),statisticsQuery:t,histogramQuery:t}}}function i(n){return n&&n.map((n=>`$feature["${n}"];`)).join("\n")+"\n"||""}function s(n,a=!1){const e=n.map((n=>`"${n}"`));return`\n  var fieldNames = [ ${e.join(", ")} ];\n  var numFields = ${e.length};\n  var maxValueField = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueField = fieldNames[i];\n      }\n      else if (value == maxValue) {\n        maxValueField = null;\n      }\n    }\n    ${a?"\n  if(value != null && value >= 0) {\n    if (totalValue == null) { totalValue = 0; }\n    totalValue = totalValue + value;\n  }\n  ":""}\n  }\n  `}function o(n){const a=s(n);return`\n  ${i(n)}\n  ${a}\n  return maxValueField;\n  `}function f(n){const a=s(n);return`\n  ${i(n)}\n  ${a}\n  return maxValue;\n  `}function v(n,a){const e=n.map((n=>n.fieldName)),l=i(e),u=n.map((n=>n.label?`"${n.label}"`:`"${n.fieldName}"`)),r=e.map((n=>`Number($feature["${n}"])`)),t=[];return a&&a.forEach(((n,a)=>{t.push(`function getValueForExpr${a}() {\n  ${n.expression} \n}`),r.push(`Number(getValueForExpr${a}())`),u.push(`"${n.title||n.name}"`)})),`\n  ${l}\n\n  ${t.length?t.join("\n"):""}\n\n  var values = [ ${r.join(", ")} ];\n  var aliases = [ ${u.join(", ")} ];\n  var numValues = ${r.length};\n  var maxValueAlias = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numValues; i++) {\n    value = values[i];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueAlias = aliases[i];\n      }\n      else if (value == maxValue) {\n        maxValueAlias = "Tie";\n      }\n    }\n  }\n  return maxValueAlias;\n  `}function m(n){return`\n  ${i(n)}\n  var fieldValues = [ ${n.map((n=>`$feature["${n}"]`)).join(", ")} ];\n  var totalValue = Sum(fieldValues);\n  var order = Reverse(Sort(fieldValues));\n  return IIF(totalValue > 0, Round(((order[0] - order[1]) / totalValue) * 100, 2), null);\n  `}function p(n){const a=i(n),e=n.map((n=>`"${n}"`));return`\n  ${a}\n  var fieldNames = [ ${e.join(", ")} ];\n  var numFields = ${e.length};\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value != null && value >= 0) {\n      if (totalValue == null) { totalValue = 0; }\n      totalValue = totalValue + value;\n    }\n  }\n\n  return totalValue;\n  `}function $(n){const a=s(n,!0);return`\n  ${i(n)}\n  ${a}\n\n  var strength = null;\n\n  if (maxValueField != null && totalValue > 0) {\n    strength = (maxValue / totalValue) * 100;\n  }\n\n  return strength;\n  `}function V(n,a){const e=i(n.map((n=>n.fieldName))),l=n.map((n=>`{\n    value: Number($feature["${n.fieldName}"]),\n    alias: "${n.label||n.fieldName}"\n    }`)),u=[];return a&&a.forEach(((n,a)=>{u.push(`function getValueForExpr${a}() {\n  ${n.expression} \n}`),l.push(`{\n          value: Number(getValueForExpr${a}()),\n          alias: "${n.title||n.name}"\n          }`)})),`\n  ${e}\n\n  ${u.length?u.join("\n"):""}\n\n  var groups = [ ${l.join(", ")} ];\n  var numTopValues = Count(groups);\n\n  function getValuesArray(arr){\n    var valuesArray = []\n    for(var i in arr){\n      valuesArray[i] = arr[i].value;\n    }\n    return valuesArray;\n  }\n\n  function findAliases(top5Array, fullArray){\n    var aliases = [];\n    var found = "";\n    for(var i in top5Array){\n      for(var k in fullArray){\n        if(top5Array[i] == fullArray[k].value && Find(fullArray[k].alias, found) == -1){\n          found += fullArray[k].alias;\n          aliases[Count(aliases)] = {\n            alias: fullArray[k].alias,\n            value: top5Array[i]\n          };\n        }\n      }\n    }\n    return aliases;\n  }\n\n  function getTopGroups(groupsArray){\n    var values = getValuesArray(groupsArray);\n    var top5Values = IIF(Max(values) > 0, Top(Reverse(Sort(values)),numTopValues), "no data");\n    var top5Aliases = findAliases(top5Values,groupsArray);\n\n    if(TypeOf(top5Values) == "String"){\n      return top5Values;\n    } else {\n      var content = "";\n      for(var i in top5Aliases){\n        if(top5Aliases[i].value > 0){\n          content += (i+1) + ". " + top5Aliases[i].alias + " (" + Text(top5Aliases[i].value, "#,###") + ")";\n          content += IIF(i < numTopValues-1, TextFormatting.NewLine, "");\n        }\n      }\n    }\n\n    return content;\n  }\n\n  getTopGroups(groups);\n  `}export{u as a,V as b,v as c,f as d,m as e,$ as f,o as g,p as h,t as i,e as n};
