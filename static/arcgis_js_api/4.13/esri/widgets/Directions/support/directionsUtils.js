// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/i18n!../nls/Directions","../../../intl","../../../moment"],function(q,d,g,e,p){function f(a){return"esriNAUSeconds"===a||"esriNAUMinutes"===a||"esriNAUHours"===a||"esriNAUDays"===a}function l(a,b,c){var d=f(b),e=f(c);b=d?h(a,b):k(a,b);return d===e?e?m(b,c):n(b,c):a}function h(a,b,c){a=a||0;switch(b){case "esriNAUSeconds":a/=Math.pow(60,c?-1:1);break;case "esriNAUHours":a*=Math.pow(60,c?-1:1);break;case "esriNAUDays":a*=Math.pow(1440,c?-1:1)}return a}function m(a,
b){return h(a,b,!0)}function k(a,b,c){a=a||0;switch((b||"").replace("esriNAU","esri")){case "esriInches":a*=Math.pow(.0254,c?-1:1);break;case "esriFeet":a*=Math.pow(.3048,c?-1:1);break;case "esriYards":a*=Math.pow(.9144,c?-1:1);break;case "esriMiles":a*=Math.pow(1609.344,c?-1:1);break;case "esriNauticalMiles":a*=Math.pow(1851.995396854,c?-1:1);break;case "esriMillimeters":a/=Math.pow(1E3,c?-1:1);break;case "esriCentimeters":a/=Math.pow(100,c?-1:1);break;case "esriKilometers":a*=Math.pow(1E3,c?-1:
1);break;case "esriDecimeters":a/=Math.pow(10,c?-1:1)}return a}function n(a,b){return k(a,b,!0)}Object.defineProperty(d,"__esModule",{value:!0});d.useSpatiallyLocalTime=function(a,b){return!(!a._associatedStop||!b||-22091616E5===a.get("attributes.ETA"))};d.toSpatiallyLocalTimeString=function(a,b,c){var d=new Date(b),f=new Date(d.getTime()+6E4*d.getTimezoneOffset()),d=e.formatDate(f,{hour:"2-digits",minute:"2-digits",hour12:!1});return a?(b=(b-a)/1E3/60/60,a=Math.floor(b),c=60*(b-a),b=e.formatNumber(a,
{minimumIntegerDigits:2}),c=e.formatNumber(c,{minimumIntegerDigits:2}),d+" "+g.gmt+(0>a?"":"+")+b+c):c?e.formatDate(f,{hour:"numeric",minute:"numeric"}):d};d.isTimeUnits=f;d.convertCostValue=l;d.toMinutes=h;d.fromMinutes=m;d.toMeters=k;d.fromMeters=n;d.isFirstStop=function(a){a=a&&a.attributes||{};return null===(a.ArriveCurbApproach||null)&&null!==(a.DepartCurbApproach||null)};d.isMiddleStop=function(a){a=a&&a.attributes||{};return null!==(a.ArriveCurbApproach||null)&&null!==(a.DepartCurbApproach||
null)};d.isLastStop=function(a){a=a&&a.attributes||{};return null!==(a.ArriveCurbApproach||null)&&null===(a.DepartCurbApproach||null)};d.isWaypoint=function(a){return a&&a.get("attributes.isWaypoint")};d.isStopLocated=function(a){a=a&&a.get("attributes.Status");return!a||6===a};d.getAssociatedStop=function(a){return a._associatedStop};d.formatTime=function(a,b){void 0===b&&(b={});b=b.unit;b=p.duration(Math.round(a),void 0===b?"minutes":b);a=b.asHours();b=b.asMilliseconds();a=1>a?e.formatDate(b,{minute:"numeric"})+
"m":Math.floor(a)+":"+e.formatDate(b,{minute:"2-digit"})+"h";return a};d.formatDistance=function(a,b){void 0===b&&(b={});var c=b.toUnits;a=l(a,b.fromUnits,c);if(!a)return"";c=(b=g.units[c])?b.abbr:c.replace("esri","").toLowerCase();return e.substitute(g.distanceTemplate,{distance:a,units:c},{format:{distance:{type:"number",intlOptions:{minimumFractionDigits:2,maximumFractionDigits:2}}}})}});