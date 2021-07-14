//>>built
define(["dojo","dijit","dojox","dojo/require!dojox/xml/parser,dojox/wire/Wire"],function(f,l,g){f.provide("dojox.wire.ml.util");f.require("dojox.xml.parser");f.require("dojox.wire.Wire");g.wire.ml._getValue=function(a,b){if(a){var d=void 0;if(b&&9<=a.length&&"arguments"==a.substring(0,9))return d=a.substring(9),(new g.wire.Wire({property:d})).getValue(b);b=a.indexOf(".");0<=b&&(d=a.substring(b+1),a=a.substring(0,b));if(a=l.byId(a)||f.byId(a)||f.getObject(a))return d?(new g.wire.Wire({object:a,property:d})).getValue():
a}};g.wire.ml._setValue=function(a,b){if(a){var d=a.indexOf(".");if(!(0>d)){var e=this._getValue(a.substring(0,d));e&&(a=a.substring(d+1),(new g.wire.Wire({object:e,property:a})).setValue(b))}}};f.declare("dojox.wire.ml.XmlElement",null,{constructor:function(a){f.isString(a)&&(a=this._getDocument().createElement(a));this.element=a},getPropertyValue:function(a){var b=void 0;if(!this.element||!a)return b;if("@"==a.charAt(0))b=a.substring(1),b=this.element.getAttribute(b);else if("text()"==a){if(a=this.element.firstChild)b=
a.nodeValue}else{for(var d=[],e=0;e<this.element.childNodes.length;e++){var c=this.element.childNodes[e];1===c.nodeType&&c.nodeName==a&&d.push(new g.wire.ml.XmlElement(c))}0<d.length&&(b=1===d.length?d[0]:d)}return b},setPropertyValue:function(a,b){var d;if(this.element&&a)if("@"==a.charAt(0)){var e=a.substring(1);b?this.element.setAttribute(e,b):this.element.removeAttribute(e)}else if("text()"==a){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);b&&(b=this._getDocument().createTextNode(b),
this.element.appendChild(b))}else{var e=null,c;for(d=this.element.childNodes.length-1;0<=d;d--)c=this.element.childNodes[d],1===c.nodeType&&c.nodeName==a&&(e||(e=c.nextSibling),this.element.removeChild(c));if(b)if(f.isArray(b))for(d in b)c=b[d],c.element&&this.element.insertBefore(c.element,e);else b instanceof g.wire.ml.XmlElement?b.element&&this.element.insertBefore(b.element,e):(c=this._getDocument().createElement(a),b=this._getDocument().createTextNode(b),c.appendChild(b),this.element.insertBefore(c,
e))}},toString:function(){var a="";if(this.element){var b=this.element.firstChild;b&&(a=b.nodeValue)}return a},toObject:function(){if(!this.element)return null;var a="",b={},d=0,e;for(e=0;e<this.element.childNodes.length;e++){var c=this.element.childNodes[e];if(1===c.nodeType){d++;var h=(new g.wire.ml.XmlElement(c)).toObject(),c=c.nodeName,k=b[c];k?f.isArray(k)?k.push(h):b[c]=[k,h]:b[c]=h}else if(3===c.nodeType||4===c.nodeType)a+=c.nodeValue}h=0;if(1===this.element.nodeType)for(h=this.element.attributes.length,
e=0;e<h;e++)c=this.element.attributes[e],b["@"+c.nodeName]=c.nodeValue;if(0===d){if(0===h)return a;b["text()"]=a}return b},_getDocument:function(){return this.element?9==this.element.nodeType?this.element:this.element.ownerDocument:g.xml.parser.parse()}})});