// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/support/buffer/math/common"],function(r,B){function C(b,c,a){if(b.count!==c.count)B.logger.error("source and destination buffers need to have the same number of elements");else{var p=b.count,e=a[0],f=a[1],d=a[2],g=a[4],h=a[5],v=a[6],w=a[8],x=a[9],t=a[10],u=a[12],l=a[13];a=a[14];var m=b.typedBuffer;b=b.typedBufferStride;var q=c.typedBuffer;c=c.typedBufferStride;for(let n=0;n<p;n++){const y=n*b;var k=n*c;const z=q[k],A=q[k+1];k=q[k+2];m[y]=e*z+g*A+w*k+u;m[y+1]=f*z+h*A+
x*k+l;m[y+2]=d*z+v*A+t*k+a}}}function D(b,c,a){if(b.count!==c.count)B.logger.error("source and destination buffers need to have the same number of elements");else{var p=b.count,e=a[0],f=a[1],d=a[2],g=a[3],h=a[4],v=a[5],w=a[6],x=a[7];a=a[8];var t=b.typedBuffer;b=b.typedBufferStride;var u=c.typedBuffer;c=c.typedBufferStride;for(let m=0;m<p;m++){const q=m*b;var l=m*c;const k=u[l],n=u[l+1];l=u[l+2];t[q]=e*k+g*n+w*l;t[q+1]=f*k+h*n+x*l;t[q+2]=d*k+v*n+a*l}}}function E(b,c,a){const p=Math.min(b.count,c.count),
e=b.typedBuffer;b=b.typedBufferStride;const f=c.typedBuffer;c=c.typedBufferStride;for(let d=0;d<p;d++){const g=d*b,h=d*c;e[g]=a*f[h];e[g+1]=a*f[h+1];e[g+2]=a*f[h+2]}}function F(b,c,a){const p=Math.min(b.count,c.count),e=b.typedBuffer;b=b.typedBufferStride;const f=c.typedBuffer;c=c.typedBufferStride;for(let d=0;d<p;d++){const g=d*b,h=d*c;e[g]=f[h]>>a;e[g+1]=f[h+1]>>a;e[g+2]=f[h+2]>>a}}var G=Object.freeze({__proto__:null,transformMat4:C,transformMat3:D,scale:E,shiftRight:F});r.scale=E;r.shiftRight=
F;r.transformMat3=D;r.transformMat4=C;r.vec3=G});