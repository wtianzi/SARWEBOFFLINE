// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","./common"],function(t,d,l){function m(a,b,c){var q=b[0],d=b[1],e=b[2],g=b[3],f=b[4];b=b[5];var k=c[0],l=c[1],n=c[2],p=c[3],m=c[4];c=c[5];a[0]=q*k+e*l;a[1]=d*k+g*l;a[2]=q*n+e*p;a[3]=d*n+g*p;a[4]=q*m+e*c+f;a[5]=d*m+g*c+b;return a}function r(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];return a}Object.defineProperty(d,"__esModule",{value:!0});d.copy=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];
return a};d.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;return a};d.set=function(a,b,c,d,h,e,g){a[0]=b;a[1]=c;a[2]=d;a[3]=h;a[4]=e;a[5]=g;return a};d.invert=function(a,b){var c=b[0],d=b[1],h=b[2],e=b[3],g=b[4];b=b[5];var f=c*e-d*h;if(!f)return null;f=1/f;a[0]=e*f;a[1]=-d*f;a[2]=-h*f;a[3]=c*f;a[4]=(h*b-e*g)*f;a[5]=(d*g-c*b)*f;return a};d.determinant=function(a){return a[0]*a[3]-a[1]*a[2]};d.multiply=m;d.rotate=function(a,b,c){var d=b[0],h=b[1],e=b[2],g=b[3],f=b[4];b=b[5];var k=Math.sin(c);
c=Math.cos(c);a[0]=d*c+e*k;a[1]=h*c+g*k;a[2]=d*-k+e*c;a[3]=h*-k+g*c;a[4]=f;a[5]=b;return a};d.scale=function(a,b,c){var d=b[1],h=b[2],e=b[3],g=b[4],f=b[5],k=c[0];c=c[1];a[0]=b[0]*k;a[1]=d*k;a[2]=h*c;a[3]=e*c;a[4]=g;a[5]=f;return a};d.translate=function(a,b,c){var d=b[0],h=b[1],e=b[2],g=b[3],f=b[4];b=b[5];var k=c[0];c=c[1];a[0]=d;a[1]=h;a[2]=e;a[3]=g;a[4]=d*k+e*c+f;a[5]=h*k+g*c+b;return a};d.fromRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=-c;a[3]=b;a[4]=0;a[5]=0;return a};
d.fromScaling=function(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=b[1];a[4]=0;a[5]=0;return a};d.fromTranslation=function(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=b[0];a[5]=b[1];return a};d.str=function(a){return"mat2d("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+")"};d.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+1)};d.add=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+
c[4];a[5]=b[5]+c[5];return a};d.subtract=r;d.multiplyScalar=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;return a};d.multiplyScalarAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;return a};d.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]};d.equals=function(a,b){var c=a[0],d=a[1],h=a[2],e=a[3],g=a[4];a=a[5];var f=b[0],
k=b[1],m=b[2],n=b[3],p=b[4];b=b[5];return Math.abs(c-f)<=l.EPSILON*Math.max(1,Math.abs(c),Math.abs(f))&&Math.abs(d-k)<=l.EPSILON*Math.max(1,Math.abs(d),Math.abs(k))&&Math.abs(h-m)<=l.EPSILON*Math.max(1,Math.abs(h),Math.abs(m))&&Math.abs(e-n)<=l.EPSILON*Math.max(1,Math.abs(e),Math.abs(n))&&Math.abs(g-p)<=l.EPSILON*Math.max(1,Math.abs(g),Math.abs(p))&&Math.abs(a-b)<=l.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))};d.mul=m;d.sub=r});