// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/awaiterHelper ../core/tsSupport/generatorHelper ../core/iteratorUtils ./locale @dojo/framework/shim/Promise".split(" "),function(f,g,k,l,m,n){Object.defineProperty(g,"__esModule",{value:!0});var h=m.SetFromValues("ar ar-dz ar-kw ar-ly ar-ma ar-sa ar-tn bs ca cs da de de-at de-ch el en-au en-ca en-gb en-ie en-il en-nz es es-do es-us et fi fr fr-ca fr-ch he hi hr hu id it it-ch ja ko lt lv nb nl nl-be pl pt pt-br ro ru sl sr sr-cyrl sv th tr uk vi zh-cn zh-hk zh-tw".split(" "));
g.loadMoment=function(a){void 0===a&&(a=n.getLocale());return k(this,void 0,void 0,function(){var b,c,d;return l(this,function(e){switch(e.label){case 0:return[4,new Promise(function(a,b){f(["moment/moment"],a,b)})];case 1:return b=e.sent(),c=h.has(a),c||(d=a.split("-"),1<d.length&&h.has(d[0])&&(a=d[0],c=!0)),c?[4,new Promise(function(b,c){f(["moment/locale/"+a],b,c)})]:[3,3];case 2:return e.sent(),[3,4];case 3:a="en",e.label=4;case 4:return a!==b.locale()&&b.locale(a),[2,b]}})})}});