// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ./has ./nextTick ./now ./promiseUtils".split(" "),function(p,q,l,g,h,d){function k(){var b=0===a.length;if(!b){for(var m=h();!b&&h()-m<n;){var e=a[c];if(e){if(!0===e()){var d=f.get(e);a[c]=null;f.delete(e);d()}c=(c+1)%a.length}else a.splice(c,1),c=(b=0===a.length)?0:c%a.length}b||g(k)}}var n=l("host-browser")?6:200,a=[],f=new Map,c=0;return function(b){return b?d.create(function(c){a.push(b);f.set(b,c);1===a.length&&g(k)},function(){a[a.indexOf(b)]=null;f.delete(b)}):d.reject(new TypeError("callback is not a function"))}});