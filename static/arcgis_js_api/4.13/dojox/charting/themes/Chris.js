//>>built
define(["../Theme","dojox/gfx/gradutils","./common"],function(e,g,a){var b=e.generateGradient,c={type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};a.Chris=new e({chart:{fill:"#c1c1c1",stroke:{color:"#666"}},plotarea:{fill:"#c1c1c1"},series:{stroke:{width:2,color:"white"},outline:null,fontColor:"#333"},marker:{stroke:{width:2,color:"white"},outline:{width:2,color:"white"},fontColor:"#333"},seriesThemes:[{fill:b(c,"#01b717","#238c01")},{fill:b(c,"#d04918","#7c0344")},{fill:b(c,"#0005ec","#002578")},
{fill:b(c,"#f9e500","#786f00")},{fill:b(c,"#e27d00","#773e00")},{fill:b(c,"#00b5b0","#005f5d")},{fill:b(c,"#ac00cb","#590060")}],markerThemes:[{fill:"#01b717",stroke:{color:"#238c01"}},{fill:"#d04918",stroke:{color:"#7c0344"}},{fill:"#0005ec",stroke:{color:"#002578"}},{fill:"#f9e500",stroke:{color:"#786f00"}},{fill:"#e27d00",stroke:{color:"#773e00"}},{fill:"#00b5b0",stroke:{color:"#005f5d"}},{fill:"#ac00cb",stroke:{color:"#590060"}}]});a.Chris.next=function(f,b,c){var a="line"==f;if(a||"area"==f){var d=
this.seriesThemes[this._current%this.seriesThemes.length];d.fill.space="plot";a&&(d.stroke={color:d.fill.colors[1].color},d.outline={width:2,color:"white"});a=e.prototype.next.apply(this,arguments);delete d.outline;delete d.stroke;d.fill.space="shape";return a}return e.prototype.next.apply(this,arguments)};a.Chris.post=function(a,b){a=e.prototype.post.apply(this,arguments);"slice"!=b&&"circle"!=b||!a.series.fill||"radial"!=a.series.fill.type||(a.series.fill=g.reverse(a.series.fill));return a};return a.Chris});