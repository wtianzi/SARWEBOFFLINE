//>>built
(function(b,c){"object"===typeof exports&&"undefined"!==typeof module?c(exports):"function"===typeof define&&define.amd?define(["exports"],c):(b=b||self,c(b.maquetteCssTransitions={}))})(this,function(b){var c,g,k=function(d){if("WebkitTransition"in d.style)c="webkitTransitionEnd",g="webkitAnimationEnd";else if("transition"in d.style)c="transitionend",g="animationend";else throw Error("Your browser is not supported!");};b.createEnterCssTransition=function(d,e){void 0===e&&(e=d+"-active");return function(a){c||
k(a);var b=!1,f=function(h){b||(b=!0,a.removeEventListener(c,f),a.removeEventListener(g,f),a.classList.remove(d),a.classList.remove(e))};a.classList.add(d);a.addEventListener(c,f);a.addEventListener(g,f);requestAnimationFrame(function(){a.classList.add(e)})}};b.createExitCssTransition=function(b,e){void 0===e&&(e=b+"-active");return function(a,d){c||k(a);var f=!1,h=function(b){f||(f=!0,a.removeEventListener(c,h),a.removeEventListener(g,h),d())};a.classList.add(b);a.addEventListener(c,h);a.addEventListener(g,
h);requestAnimationFrame(function(){a.classList.add(e)})}};Object.defineProperty(b,"__esModule",{value:!0})});