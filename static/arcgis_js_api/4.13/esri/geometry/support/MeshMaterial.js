// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./ImageMeshColor ./MeshTexture ./ValueMeshColor".split(" "),function(w,x,p,e,f,q,g,r,c,l,t,d,u){function h(){m.warn('Assigning ImageMeshColor to "MeshMaterial.color" is deprecated. Assigning to "MeshMaterial.colorTexture" instead.')}var m=r.getLogger("esri.geometry.support.MeshMaterial"),
v=/^\s*(#|rgba?\()/;return function(n){function b(a){a=n.call(this)||this;a.color=null;a.colorTexture=null;a.normalTexture=null;a.alphaMode="auto";a.alphaCutoff=.5;a.doubleSided=!0;return a}p(b,n);k=b;b.prototype.castColor=function(a){if(!a)return a;if(Array.isArray(a))return new f(a);if(a instanceof f||a instanceof d)return a;if("string"===typeof a){if(v.test(a)||f.named[a])return new f(a);h();this.colorTexture=new d({url:a});return null}return a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||
a instanceof ImageData?(h(),this.colorTexture=new d({data:a}),null):a instanceof t?(h(),this.colorTexture=new d({url:a.url,data:a.data}),null):"image"===a.type?(h(),this.colorTexture=new d(a),null):a instanceof u?(m.warn('Assigning ValueMeshColor to "MeshMaterial.color" is deprecated. Automatically converting it to esri.Color.'),new f(a.value)):l.ensureType(f,a)};b.prototype.castColorTexture=function(a){return a?"string"===typeof a?new d({url:a}):a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||
a instanceof ImageData?new d({data:a}):l.ensureType(d,a):a};b.prototype.readColorTexture=function(a,b,c){if(a)return new d(a)};b.prototype.castNormalTexture=function(a){return a?"string"===typeof a?new d({url:a}):a instanceof HTMLImageElement||a instanceof HTMLCanvasElement||a instanceof ImageData?new d({data:a}):l.ensureType(d,a):a};b.prototype.readNormalTexture=function(a,b,c){if(a)return new d(a)};b.prototype.clone=function(){return new k({color:g.clone(this.color),colorTexture:g.clone(this.colorTexture),
normalTexture:g.clone(this.normalTexture),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided})};b.prototype.cloneWithDeduplication=function(a,b){var c=a.get(this);if(c)return c;b=new k({color:g.clone(this.color),colorTexture:this.colorTexture?this.colorTexture.cloneWithDeduplication(b):null,normalTexture:this.normalTexture?this.normalTexture.cloneWithDeduplication(b):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided});a.set(this,
b);return b};var k;e([c.property({type:f,json:{write:!0}})],b.prototype,"color",void 0);e([c.cast("color")],b.prototype,"castColor",null);e([c.property({json:{write:!0}})],b.prototype,"colorTexture",void 0);e([c.cast("colorTexture")],b.prototype,"castColorTexture",null);e([c.reader("colorTexture")],b.prototype,"readColorTexture",null);e([c.property({json:{write:!0}})],b.prototype,"normalTexture",void 0);e([c.cast("normalTexture")],b.prototype,"castNormalTexture",null);e([c.reader("normalTexture")],
b.prototype,"readNormalTexture",null);e([c.property({json:{write:!0}})],b.prototype,"alphaMode",void 0);e([c.property({json:{write:!0}})],b.prototype,"alphaCutoff",void 0);e([c.property({json:{write:!0}})],b.prototype,"doubleSided",void 0);return b=k=e([c.subclass("esri.geometry.support.MeshMaterial")],b)}(c.declared(q.JSONSupport))});