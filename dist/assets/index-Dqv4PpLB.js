(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="170",Li={ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uc=0,pa=1,Fc=2,Bl=1,Oc=2,En=3,Wn=0,be=1,wn=2,Gn=0,Di=1,ma=2,_a=3,ga=4,Bc=5,ii=100,zc=101,Hc=102,Vc=103,Gc=104,kc=200,Wc=201,Xc=202,qc=203,Jr=204,Qr=205,Yc=206,jc=207,Kc=208,Zc=209,$c=210,Jc=211,Qc=212,th=213,eh=214,to=0,eo=1,no=2,Fi=3,io=4,so=5,ro=6,oo=7,zl=0,nh=1,ih=2,kn=0,sh=1,rh=2,oh=3,ah=4,lh=5,ch=6,hh=7,Hl=300,Oi=301,Bi=302,ao=303,lo=304,or=306,co=1e3,ai=1001,ho=1002,Qe=1003,uh=1004,Ms=1005,ln=1006,mr=1007,li=1008,Rn=1009,Vl=1010,Gl=1011,rs=1012,ko=1013,ci=1014,Tn=1015,ls=1016,Wo=1017,Xo=1018,zi=1020,kl=35902,Wl=1021,Xl=1022,$e=1023,ql=1024,Yl=1025,Ii=1026,Hi=1027,jl=1028,qo=1029,Kl=1030,Yo=1031,jo=1033,js=33776,Ks=33777,Zs=33778,$s=33779,uo=35840,fo=35841,po=35842,mo=35843,_o=36196,go=37492,vo=37496,xo=37808,Mo=37809,yo=37810,So=37811,Eo=37812,wo=37813,To=37814,bo=37815,Ao=37816,Co=37817,Ro=37818,Po=37819,Lo=37820,Do=37821,Js=36492,Io=36494,No=36495,Zl=36283,Uo=36284,Fo=36285,Oo=36286,dh=3200,fh=3201,$l=0,ph=1,Vn="",He="srgb",Gi="srgb-linear",ar="linear",$t="srgb",fi=7680,va=519,mh=512,_h=513,gh=514,Jl=515,vh=516,xh=517,Mh=518,yh=519,xa=35044,Ma="300 es",bn=2e3,er=2001;class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,Bo=180/Math.PI;function cs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function Sh(s,t){return(s%t+t)%t}function _r(s,t,e){return(1-e)*s+e*t}function ji(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Eh={DEG2RAD:Qs};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,r,o,a,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],_=n[8],g=i[0],p=i[3],f=i[6],v=i[1],E=i[4],x=i[7],P=i[2],b=i[5],A=i[8];return r[0]=o*g+a*v+l*P,r[3]=o*p+a*E+l*b,r[6]=o*f+a*x+l*A,r[1]=c*g+h*v+d*P,r[4]=c*p+h*E+d*b,r[7]=c*f+h*x+d*A,r[2]=u*g+m*v+_*P,r[5]=u*p+m*E+_*b,r[8]=u*f+m*x+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,_=e*d+n*u+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Nt;function Ql(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wh(){const s=nr("canvas");return s.style.display="block",s}const ya={};function is(s){s in ya||(ya[s]=!0,console.warn(s))}function Th(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ah(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?ar:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ni(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Sa=[.64,.33,.3,.6,.15,.06],Ea=[.2126,.7152,.0722],wa=[.3127,.329],Ta=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ba=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Gi]:{primaries:Sa,whitePoint:wa,transfer:ar,toXYZ:Ta,fromXYZ:ba,luminanceCoefficients:Ea,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:Sa,whitePoint:wa,transfer:$t,toXYZ:Ta,fromXYZ:ba,luminanceCoefficients:Ea,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});let pi;class Ch{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=nr("canvas")),pi.width=t.width,pi.height=t.height;const n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rh=0;class tc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vr(i[o].image)):r.push(vr(i[o]))}else r=vr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ph=0;class De extends ui{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ai,i=ai,r=ln,o=li,a=$e,l=Rn,c=De.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=cs(),this.name="",this.source=new tc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case co:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case co:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Hl;De.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(m+1)/2,P=(f+1)/2,b=(h+u)/4,A=(d+g)/4,D=(_+p)/4;return E>x&&E>P?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=b/n,r=A/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=D/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=D/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lh extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Lh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ec extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dh extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Xn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==u||c!==m||h!==_){let p=1-a;const f=l*u+c*m+h*_+d*g,v=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const P=Math.sqrt(E),b=Math.atan2(P,f*v);p=Math.sin(p*b)/P,a=Math.sin(a*b)/P}const x=a*v;if(l=l*p+u*x,c=c*p+m*x,h=h*p+_*x,d=d*p+g*x,p===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*m-c*u,t[e+1]=l*_+h*u+c*d-a*m,t[e+2]=c*_+h*m+a*u-l*d,t[e+3]=h*_-a*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d-u*m*_;break;case"YXZ":this._x=u*h*d+c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d+u*m*_;break;case"ZXY":this._x=u*h*d-c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d-u*m*_;break;case"ZYX":this._x=u*h*d-c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d+u*m*_;break;case"YZX":this._x=u*h*d+c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d-u*m*_;break;case"XZY":this._x=u*h*d-c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Aa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Aa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new F,Aa=new Xn;class hs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(r,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),Ss.subVectors(this.max,Ki),mi.subVectors(t.a,Ki),_i.subVectors(t.b,Ki),gi.subVectors(t.c,Ki),In.subVectors(_i,mi),Nn.subVectors(gi,_i),Kn.subVectors(mi,gi);let e=[0,-In.z,In.y,0,-Nn.z,Nn.y,0,-Kn.z,Kn.y,In.z,0,-In.x,Nn.z,0,-Nn.x,Kn.z,0,-Kn.x,-In.y,In.x,0,-Nn.y,Nn.x,0,-Kn.y,Kn.x,0];return!Mr(e,mi,_i,gi,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,mi,_i,gi,Ss))?!1:(Es.crossVectors(In,Nn),e=[Es.x,Es.y,Es.z],Mr(e,mi,_i,gi,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new F,new F,new F,new F,new F,new F,new F,new F],qe=new F,ys=new hs,mi=new F,_i=new F,gi=new F,In=new F,Nn=new F,Kn=new F,Ki=new F,Ss=new F,Es=new F,Zn=new F;function Mr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Zn.fromArray(s,r);const a=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ih=new hs,Zi=new F,yr=new F;let Ko=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ih.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(yr)),this.expandByPoint(Zi.copy(t.center).sub(yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const mn=new F,Sr=new F,ws=new F,Un=new F,Er=new F,Ts=new F,wr=new F;let nc=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sr.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Sr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=Un.dot(this.direction),l=-Un.dot(ws),c=Un.lengthSq(),h=Math.abs(1-o*o);let d,u,m,_;if(h>0)if(d=o*l-a,u=o*a-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const g=1/h;d*=g,u*=g,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sr).addScaledVector(ws,u),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,r){Er.subVectors(e,t),Ts.subVectors(n,t),wr.crossVectors(Er,Ts);let o=this.direction.dot(wr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,t);const l=a*this.direction.dot(Ts.crossVectors(Un,Ts));if(l<0)return null;const c=a*this.direction.dot(Er.cross(Un));if(c<0||l+c>o)return null;const h=-a*Un.dot(wr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class le{constructor(t,e,n,i,r,o,a,l,c,h,d,u,m,_,g,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,m,_,g,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,m,_,g,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),o=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,m=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,_=c*h,g=c*d;e[0]=u+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,_=c*h,g=c*d;e[0]=u-g*a,e[4]=-o*d,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,m=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=_*c-m,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-u*d,e[8]=_*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+_,e[10]=u-g*d}else if(t.order==="XZY"){const u=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=o*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nh,t,Uh)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Fn.crossVectors(n,Ne),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Fn.crossVectors(n,Ne)),Fn.normalize(),bs.crossVectors(Ne,Fn),i[0]=Fn.x,i[4]=bs.x,i[8]=Ne.x,i[1]=Fn.y,i[5]=bs.y,i[9]=Ne.y,i[2]=Fn.z,i[6]=bs.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],v=n[3],E=n[7],x=n[11],P=n[15],b=i[0],A=i[4],D=i[8],T=i[12],y=i[1],R=i[5],V=i[9],L=i[13],N=i[2],O=i[6],I=i[10],Y=i[14],G=i[3],Z=i[7],st=i[11],ct=i[15];return r[0]=o*b+a*y+l*N+c*G,r[4]=o*A+a*R+l*O+c*Z,r[8]=o*D+a*V+l*I+c*st,r[12]=o*T+a*L+l*Y+c*ct,r[1]=h*b+d*y+u*N+m*G,r[5]=h*A+d*R+u*O+m*Z,r[9]=h*D+d*V+u*I+m*st,r[13]=h*T+d*L+u*Y+m*ct,r[2]=_*b+g*y+p*N+f*G,r[6]=_*A+g*R+p*O+f*Z,r[10]=_*D+g*V+p*I+f*st,r[14]=_*T+g*L+p*Y+f*ct,r[3]=v*b+E*y+x*N+P*G,r[7]=v*A+E*R+x*O+P*Z,r[11]=v*D+E*V+x*I+P*st,r[15]=v*T+E*L+x*Y+P*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],_=t[3],g=t[7],p=t[11],f=t[15];return _*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*m-n*l*m)+g*(+e*l*m-e*c*u+r*o*u-i*o*m+i*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+f*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],_=t[12],g=t[13],p=t[14],f=t[15],v=d*p*c-g*u*c+g*l*m-a*p*m-d*l*f+a*u*f,E=_*u*c-h*p*c-_*l*m+o*p*m+h*l*f-o*u*f,x=h*g*c-_*d*c+_*a*m-o*g*m-h*a*f+o*d*f,P=_*d*l-h*g*l-_*a*u+o*g*u+h*a*p-o*d*p,b=e*v+n*E+i*x+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=v*A,t[1]=(g*u*r-d*p*r-g*i*m+n*p*m+d*i*f-n*u*f)*A,t[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*f+n*l*f)*A,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*m-n*l*m)*A,t[4]=E*A,t[5]=(h*p*r-_*u*r+_*i*m-e*p*m-h*i*f+e*u*f)*A,t[6]=(_*l*r-o*p*r-_*i*c+e*p*c+o*i*f-e*l*f)*A,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*m+e*l*m)*A,t[8]=x*A,t[9]=(_*d*r-h*g*r-_*n*m+e*g*m+h*n*f-e*d*f)*A,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*A,t[12]=P*A,t[13]=(h*g*i-_*d*i+_*n*u-e*g*u-h*n*p+e*d*p)*A,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*A,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,_=r*d,g=o*h,p=o*d,f=a*d,v=l*c,E=l*h,x=l*d,P=n.x,b=n.y,A=n.z;return i[0]=(1-(g+f))*P,i[1]=(m+x)*P,i[2]=(_-E)*P,i[3]=0,i[4]=(m-x)*b,i[5]=(1-(u+f))*b,i[6]=(p+v)*b,i[7]=0,i[8]=(_+E)*A,i[9]=(p-v)*A,i[10]=(1-(u+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=vi.set(i[0],i[1],i[2]).length();const o=vi.set(i[4],i[5],i[6]).length(),a=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/r,h=1/o,d=1/a;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,e.setFromRotationMatrix(Ye),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=bn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let m,_;if(a===bn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===er)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=bn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,m=(n+i)*h;let _,g;if(a===bn)_=(o+r)*d,g=-2*d;else if(a===er)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new F,Ye=new le,Nh=new F(0,0,0),Uh=new F(1,1,1),Fn=new F,bs=new F,Ne=new F,Ca=new le,Ra=new Xn;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ca.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ca,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fh=0;const Pa=new F,xi=new Xn,_n=new le,As=new F,$i=new F,Oh=new F,Bh=new Xn,La=new F(1,0,0),Da=new F(0,1,0),Ia=new F(0,0,1),Na={type:"added"},zh={type:"removed"},Mi={type:"childadded",child:null},Tr={type:"childremoved",child:null};class xe extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new F,e=new hn,n=new Xn,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Nt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(La,t)}rotateY(t){return this.rotateOnAxis(Da,t)}rotateZ(t){return this.rotateOnAxis(Ia,t)}translateOnAxis(t,e){return Pa.copy(t).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(La,t)}translateY(t){return this.translateOnAxis(Da,t)}translateZ(t){return this.translateOnAxis(Ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt($i,As,this.up):_n.lookAt(As,$i,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(_n),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Na),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zh),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Na),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new F(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new F,gn=new F,br=new F,vn=new F,yi=new F,Si=new F,Ua=new F,Ar=new F,Cr=new F,Rr=new F,Pr=new ae,Lr=new ae,Dr=new ae;class Ze{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),gn.subVectors(n,e),br.subVectors(t,e);const o=je.dot(je),a=je.dot(gn),l=je.dot(br),c=gn.dot(gn),h=gn.dot(br),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Pr.setScalar(0),Lr.setScalar(0),Dr.setScalar(0),Pr.fromBufferAttribute(t,e),Lr.fromBufferAttribute(t,n),Dr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Pr,r.x),o.addScaledVector(Lr,r.y),o.addScaledVector(Dr,r.z),o}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),gn.subVectors(t,e),je.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;yi.subVectors(i,n),Si.subVectors(r,n),Ar.subVectors(t,n);const l=yi.dot(Ar),c=Si.dot(Ar);if(l<=0&&c<=0)return e.copy(n);Cr.subVectors(t,i);const h=yi.dot(Cr),d=Si.dot(Cr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(yi,o);Rr.subVectors(t,r);const m=yi.dot(Rr),_=Si.dot(Rr);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Si,a);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Ua.subVectors(r,i),a=(d-h)/(d-h+(m-_)),e.copy(i).addScaledVector(Ua,a);const f=1/(p+g+u);return o=g*f,a=u*f,e.copy(n).addScaledVector(yi,o).addScaledVector(Si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Ir(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Sh(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ir(o,r,t+1/3),this.g=Ir(o,r,t),this.b=Ir(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Xt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Te(Se.r*255,0,255))*65536+Math.round(Te(Se.g*255,0,255))*256+Math.round(Te(Se.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,i=Se.g,r=Se.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=He){Xt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,i=Se.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Cs);const n=_r(On.h,Cs.h,e),i=_r(On.s,Cs.s,e),r=_r(On.l,Cs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Bt;Bt.NAMES=sc;let Hh=0,us=class extends ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=cs(),this.name="",this.blending=Di,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class rc extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new F,Rs=new Lt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class oc extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ac extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vh=0;const ze=new le,Nr=new xe,Ei=new F,Ue=new hs,Ji=new hs,ve=new F;class un extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ql(t)?ac:oc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ue.min,Ji.min),Ue.expandByPoint(ve),ve.addVectors(Ue.max,Ji.max),Ue.expandByPoint(ve)):(Ue.expandByPoint(Ji.min),Ue.expandByPoint(Ji.max))}Ue.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ve.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(t,c),ve.add(Ei)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new F,l[D]=new F;const c=new F,h=new F,d=new F,u=new Lt,m=new Lt,_=new Lt,g=new F,p=new F;function f(D,T,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,D),m.fromBufferAttribute(r,T),_.fromBufferAttribute(r,y),h.sub(c),d.sub(c),m.sub(u),_.sub(u);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(R),a[D].add(g),a[T].add(g),a[y].add(g),l[D].add(p),l[T].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,T=v.length;D<T;++D){const y=v[D],R=y.start,V=y.count;for(let L=R,N=R+V;L<N;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const E=new F,x=new F,P=new F,b=new F;function A(D){P.fromBufferAttribute(i,D),b.copy(P);const T=a[D];E.copy(T),E.sub(P.multiplyScalar(P.dot(T))).normalize(),x.crossVectors(b,T);const R=x.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,R)}for(let D=0,T=v.length;D<T;++D){const y=v[D],R=y.start,V=y.count;for(let L=R,N=R+V;L<N;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,m=t.count;u<m;u+=3){const _=t.getX(u+0),g=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let f=0;f<h;f++)u[_++]=c[m++]}return new cn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new le,$n=new nc,Ps=new Ko,Oa=new F,Ls=new F,Ds=new F,Is=new F,Ur=new F,Ns=new F,Ba=new F,Us=new F;class Le extends xe{constructor(t=new un,e=new rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ur.fromBufferAttribute(d,t),o?Ns.addScaledVector(Ur,h):Ns.addScaledVector(Ur.sub(e),h))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Ps.containsPoint($n.origin)===!1&&($n.intersectSphere(Ps,Oa)===null||$n.origin.distanceToSquared(Oa)>(t.far-t.near)**2))&&(Fa.copy(r).invert(),$n.copy(t.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const p=u[_],f=o[p.materialIndex],v=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,P=E;x<P;x+=3){const b=a.getX(x),A=a.getX(x+1),D=a.getX(x+2);i=Fs(this,f,t,n,c,h,d,b,A,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const v=a.getX(p),E=a.getX(p+1),x=a.getX(p+2);i=Fs(this,o,t,n,c,h,d,v,E,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const p=u[_],f=o[p.materialIndex],v=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,P=E;x<P;x+=3){const b=x,A=x+1,D=x+2;i=Fs(this,f,t,n,c,h,d,b,A,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const v=p,E=p+1,x=p+2;i=Fs(this,o,t,n,c,h,d,v,E,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Gh(s,t,e,n,i,r,o,a){let l;if(t.side===be?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Wn,a),l===null)return null;Us.copy(a),Us.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:s}}function Fs(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ls),s.getVertexPosition(l,Ds),s.getVertexPosition(c,Is);const h=Gh(s,t,e,n,Ls,Ds,Is,Ba);if(h){const d=new F;Ze.getBarycoord(Ba,Ls,Ds,Is,d),i&&(h.uv=Ze.getInterpolatedAttribute(i,a,l,c,d,new Lt)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,a,l,c,d,new Lt)),o&&(h.normal=Ze.getInterpolatedAttribute(o,a,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};Ze.getNormal(Ls,Ds,Is,u.normal),h.face=u,h.barycoord=d}return h}class ki extends un{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(d,2));function _(g,p,f,v,E,x,P,b,A,D,T){const y=x/A,R=P/D,V=x/2,L=P/2,N=b/2,O=A+1,I=D+1;let Y=0,G=0;const Z=new F;for(let st=0;st<I;st++){const ct=st*R-L;for(let it=0;it<O;it++){const zt=it*y-V;Z[g]=zt*v,Z[p]=ct*E,Z[f]=N,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[f]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(it/A),d.push(1-st/D),Y+=1}}for(let st=0;st<D;st++)for(let ct=0;ct<A;ct++){const it=u+ct+O*st,zt=u+ct+O*(st+1),j=u+(ct+1)+O*(st+1),tt=u+(ct+1)+O*st;l.push(it,zt,tt),l.push(zt,j,tt),G+=6}a.addGroup(m,G,T),m+=G,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(s){const t={};for(let e=0;e<s.length;e++){const n=Vi(s[e]);for(const i in n)t[i]=n[i]}return t}function kh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function lc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Wh={clone:Vi,merge:we};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new F,za=new Lt,Ha=new Lt;class Ge extends cc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,za,Ha),e.subVectors(Ha,za)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ti=1;class Yh extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(wi,Ti,t,e);i.layers=this.layers,this.add(i);const r=new Ge(wi,Ti,t,e);r.layers=this.layers,this.add(r);const o=new Ge(wi,Ti,t,e);o.layers=this.layers,this.add(o);const a=new Ge(wi,Ti,t,e);a.layers=this.layers,this.add(a);const l=new Ge(wi,Ti,t,e);l.layers=this.layers,this.add(l);const c=new Ge(wi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hc extends De{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jh extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ki(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Gn});r.uniforms.tEquirect.value=e;const o=new Le(i,r),a=e.minFilter;return e.minFilter===li&&(e.minFilter=ln),new Yh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Fr=new F,Kh=new F,Zh=new Nt;class Hn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Fr.subVectors(n,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zh.getNormalMatrix(t),i=this.coplanarPoint(Fr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Ko,Os=new F;class Zo{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],m=i[8],_=i[9],g=i[10],p=i[11],f=i[12],v=i[13],E=i[14],x=i[15];if(n[0].setComponents(l-r,u-c,p-m,x-f).normalize(),n[1].setComponents(l+r,u+c,p+m,x+f).normalize(),n[2].setComponents(l+o,u+h,p+_,x+v).normalize(),n[3].setComponents(l-o,u-h,p-_,x-v).normalize(),n[4].setComponents(l-a,u-d,p-g,x-E).normalize(),e===bn)n[5].setComponents(l+a,u+d,p+g,x+E).normalize();else if(e===er)n[5].setComponents(a,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Os.x=i.normal.x>0?t.max.x:t.min.x,Os.y=i.normal.y>0?t.max.y:t.min.y,Os.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $h(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<d.length;m++){const _=d[u],g=d[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,d[u]=g)}d.length=u+1;for(let m=0,_=d.length;m<_;m++){const g=d[m];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class lr extends un{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,m=[],_=[],g=[],p=[];for(let f=0;f<h;f++){const v=f*u-o;for(let E=0;E<c;E++){const x=E*d-r;_.push(x,-v,0),g.push(0,0,1),p.push(E/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const E=v+c*f,x=v+c*(f+1),P=v+1+c*(f+1),b=v+1+c*f;m.push(E,x,b),m.push(x,P,b)}this.setIndex(m),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,su=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$u=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ad=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,af=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ef=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Jh,alphahash_pars_fragment:Qh,alphamap_fragment:tu,alphamap_pars_fragment:eu,alphatest_fragment:nu,alphatest_pars_fragment:iu,aomap_fragment:su,aomap_pars_fragment:ru,batching_pars_vertex:ou,batching_vertex:au,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:hu,iridescence_fragment:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:fu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:_u,color_fragment:gu,color_pars_fragment:vu,color_pars_vertex:xu,color_vertex:Mu,common:yu,cube_uv_reflection_fragment:Su,defaultnormal_vertex:Eu,displacementmap_pars_vertex:wu,displacementmap_vertex:Tu,emissivemap_fragment:bu,emissivemap_pars_fragment:Au,colorspace_fragment:Cu,colorspace_pars_fragment:Ru,envmap_fragment:Pu,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Du,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Nu,fog_vertex:Uu,fog_pars_vertex:Fu,fog_fragment:Ou,fog_pars_fragment:Bu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Vu,lights_lambert_pars_fragment:Gu,lights_pars_begin:ku,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:Yu,lights_phong_pars_fragment:ju,lights_physical_fragment:Ku,lights_physical_pars_fragment:Zu,lights_fragment_begin:$u,lights_fragment_maps:Ju,lights_fragment_end:Qu,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:od,map_particle_pars_fragment:ad,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphinstance_vertex:hd,morphcolor_vertex:ud,morphnormal_vertex:dd,morphtarget_pars_vertex:fd,morphtarget_vertex:pd,normal_fragment_begin:md,normal_fragment_maps:_d,normal_pars_fragment:gd,normal_pars_vertex:vd,normal_vertex:xd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:wd,opaque_fragment:Td,packing:bd,premultiplied_alpha_fragment:Ad,project_vertex:Cd,dithering_fragment:Rd,dithering_pars_fragment:Pd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Nd,shadowmap_vertex:Ud,shadowmask_pars_fragment:Fd,skinbase_vertex:Od,skinning_pars_vertex:Bd,skinning_vertex:zd,skinnormal_vertex:Hd,specularmap_fragment:Vd,specularmap_pars_fragment:Gd,tonemapping_fragment:kd,tonemapping_pars_fragment:Wd,transmission_fragment:Xd,transmission_pars_fragment:qd,uv_pars_fragment:Yd,uv_pars_vertex:jd,uv_vertex:Kd,worldpos_vertex:Zd,background_vert:$d,background_frag:Jd,backgroundCube_vert:Qd,backgroundCube_frag:tf,cube_vert:ef,cube_frag:nf,depth_vert:sf,depth_frag:rf,distanceRGBA_vert:of,distanceRGBA_frag:af,equirect_vert:lf,equirect_frag:cf,linedashed_vert:hf,linedashed_frag:uf,meshbasic_vert:df,meshbasic_frag:ff,meshlambert_vert:pf,meshlambert_frag:mf,meshmatcap_vert:_f,meshmatcap_frag:gf,meshnormal_vert:vf,meshnormal_frag:xf,meshphong_vert:Mf,meshphong_frag:yf,meshphysical_vert:Sf,meshphysical_frag:Ef,meshtoon_vert:wf,meshtoon_frag:Tf,points_vert:bf,points_frag:Af,shadow_vert:Cf,shadow_frag:Rf,sprite_vert:Pf,sprite_frag:Lf},rt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},on={basic:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:we([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:we([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:we([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:we([rt.points,rt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:we([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:we([rt.common,rt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:we([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:we([rt.sprite,rt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:we([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:we([rt.lights,rt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};on.physical={uniforms:we([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Bs={r:0,b:0,g:0},Qn=new hn,Df=new le;function If(s,t,e,n,i,r,o){const a=new Bt(0);let l=r===!0?0:1,c,h,d=null,u=0,m=null;function _(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?e:t).get(E)),E}function g(v){let E=!1;const x=_(v);x===null?f(a,l):x&&x.isColor&&(f(x,1),E=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,E){const x=_(E);x&&(x.isCubeTexture||x.mapping===or)?(h===void 0&&(h=new Le(new ki(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Vi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Qn.copy(E.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(Qn)),h.material.toneMapped=Xt.getTransfer(x.colorSpace)!==$t,(d!==x||u!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Le(new lr(2,2),new Pn({name:"BackgroundMaterial",uniforms:Vi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==$t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,m=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,E){v.getRGB(Bs,lc(s)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:g,addToRenderList:p}}function Nf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(y,R,V,L,N){let O=!1;const I=d(L,V,R);r!==I&&(r=I,c(r.object)),O=m(y,L,V,N),O&&_(y,L,V,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(y,R,V,L),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,R,V){const L=V.wireframe===!0;let N=n[y.id];N===void 0&&(N={},n[y.id]=N);let O=N[R.id];O===void 0&&(O={},N[R.id]=O);let I=O[L];return I===void 0&&(I=u(l()),O[L]=I),I}function u(y){const R=[],V=[],L=[];for(let N=0;N<e;N++)R[N]=0,V[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:L,object:y,attributes:{},index:null}}function m(y,R,V,L){const N=r.attributes,O=R.attributes;let I=0;const Y=V.getAttributes();for(const G in Y)if(Y[G].location>=0){const st=N[G];let ct=O[G];if(ct===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),st===void 0||st.attribute!==ct||ct&&st.data!==ct.data)return!0;I++}return r.attributesNum!==I||r.index!==L}function _(y,R,V,L){const N={},O=R.attributes;let I=0;const Y=V.getAttributes();for(const G in Y)if(Y[G].location>=0){let st=O[G];st===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));const ct={};ct.attribute=st,st&&st.data&&(ct.data=st.data),N[G]=ct,I++}r.attributes=N,r.attributesNum=I,r.index=L}function g(){const y=r.newAttributes;for(let R=0,V=y.length;R<V;R++)y[R]=0}function p(y){f(y,0)}function f(y,R){const V=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;V[y]=1,L[y]===0&&(s.enableVertexAttribArray(y),L[y]=1),N[y]!==R&&(s.vertexAttribDivisor(y,R),N[y]=R)}function v(){const y=r.newAttributes,R=r.enabledAttributes;for(let V=0,L=R.length;V<L;V++)R[V]!==y[V]&&(s.disableVertexAttribArray(V),R[V]=0)}function E(y,R,V,L,N,O,I){I===!0?s.vertexAttribIPointer(y,R,V,N,O):s.vertexAttribPointer(y,R,V,L,N,O)}function x(y,R,V,L){g();const N=L.attributes,O=V.getAttributes(),I=R.defaultAttributeValues;for(const Y in O){const G=O[Y];if(G.location>=0){let Z=N[Y];if(Z===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const st=Z.normalized,ct=Z.itemSize,it=t.get(Z);if(it===void 0)continue;const zt=it.buffer,j=it.type,tt=it.bytesPerElement,vt=j===s.INT||j===s.UNSIGNED_INT||Z.gpuType===ko;if(Z.isInterleavedBufferAttribute){const ot=Z.data,At=ot.stride,Pt=Z.offset;if(ot.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)f(G.location+Ot,ot.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)p(G.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let Ot=0;Ot<G.locationSize;Ot++)E(G.location+Ot,ct/G.locationSize,j,st,At*tt,(Pt+ct/G.locationSize*Ot)*tt,vt)}else{if(Z.isInstancedBufferAttribute){for(let ot=0;ot<G.locationSize;ot++)f(G.location+ot,Z.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<G.locationSize;ot++)p(G.location+ot);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let ot=0;ot<G.locationSize;ot++)E(G.location+ot,ct/G.locationSize,j,st,ct*tt,ct/G.locationSize*ot*tt,vt)}}else if(I!==void 0){const st=I[Y];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(G.location,st);break;case 3:s.vertexAttrib3fv(G.location,st);break;case 4:s.vertexAttrib4fv(G.location,st);break;default:s.vertexAttrib1fv(G.location,st)}}}}v()}function P(){D();for(const y in n){const R=n[y];for(const V in R){const L=R[V];for(const N in L)h(L[N].object),delete L[N];delete R[V]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const V in R){const L=R[V];for(const N in L)h(L[N].object),delete L[N];delete R[V]}delete n[y.id]}function A(y){for(const R in n){const V=n[R];if(V[y.id]===void 0)continue;const L=V[y.id];for(const N in L)h(L[N].object),delete L[N];delete V[y.id]}}function D(){T(),o=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function Uf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];e.update(m,n,1)}function l(c,h,d,u){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g]*u[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ff(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==$e&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Rn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!D)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:b}}function Of(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Hn,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,f=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,E=v*4;let x=f.clippingState||null;l.value=x,x=h(_,u,E,m);for(let P=0;P!==E;++P)x[P]=e[P];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=m+g*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,x=m;E!==g;++E,x+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Bf(s){let t=new WeakMap;function e(o,a){return a===ao?o.mapping=Oi:a===lo&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ao||a===lo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jh(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class dc extends cc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Pi=4,Va=[.125,.215,.35,.446,.526,.582],si=20,Or=new dc,Ga=new Bt;let Br=null,zr=0,Hr=0,Vr=!1;const ni=(1+Math.sqrt(5))/2,bi=1/ni,ka=[new F(-ni,bi,0),new F(ni,bi,0),new F(-bi,0,ni),new F(bi,0,ni),new F(0,ni,-bi),new F(0,ni,bi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Wa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br,zr,Hr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ls,format:$e,colorSpace:Gi,depthBuffer:!1},i=Xa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zf(r)),this._blurMaterial=Hf(r,t,e)}return i}_compileMaterial(t){const e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,i){const a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ga),h.toneMapping=kn,h.autoClear=!1;const m=new rc({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),_=new Le(new ki,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Ga),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const E=this._cubeSize;zs(i,v*E,f>2?E:0,E,E),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Oi||t.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ka[(i-r-1)%ka.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Le(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*si-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):si;p>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${si}`);const f=[];let v=0;for(let A=0;A<si;++A){const D=A/g,T=Math.exp(-D*D/2);f.push(T),A===0?v+=T:A<p&&(v+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:E}=this;u.dTheta.value=_,u.mipInt.value=E-n;const x=this._sizeLods[i],P=3*x*(i>E-Pi?i-E+Pi:0),b=4*(this._cubeSize-x);zs(e,P,b,3*x,2*x),l.setRenderTarget(e),l.render(d,Or)}}function zf(s){const t=[],e=[],n=[];let i=s;const r=s-Pi+1+Va.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Pi?l=Va[o-s+Pi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,g=3,p=2,f=1,v=new Float32Array(g*_*m),E=new Float32Array(p*_*m),x=new Float32Array(f*_*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,D=b>2?0:-1,T=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(T,g*_*b),E.set(u,p*_*b);const y=[b,b,b,b,b,b];x.set(y,f*_*b)}const P=new un;P.setAttribute("position",new cn(v,g)),P.setAttribute("uv",new cn(E,p)),P.setAttribute("faceIndex",new cn(x,f)),t.push(P),i>Pi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xa(s,t,e){const n=new hi(s,t,e);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Hf(s,t,e){const n=new Float32Array(si),i=new F(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function qa(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ya(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ao||l===lo,h=l===Oi||l===Bi;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Wa(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Wa(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kf(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let p=0,f=g.length;p<f;p++)t.remove(g[p])}u.removeEventListener("dispose",o),delete i[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const _ in u)t.update(u[_],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,f=g.length;p<f;p++)t.update(g[p],s.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const v=m.array;g=m.version;for(let E=0,x=v.length;E<x;E+=3){const P=v[E+0],b=v[E+1],A=v[E+2];u.push(P,b,b,A,A,P)}}else if(_!==void 0){const v=_.array;g=_.version;for(let E=0,x=v.length/3-1;E<x;E+=3){const P=E+0,b=E+1,A=E+2;u.push(P,b,b,A,A,P)}}else return;const p=new(Ql(u)?ac:oc)(u,1);p.version=g;const f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wf(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){s.drawElements(n,m,r,u*o),e.update(m,n,1)}function c(u,m,_){_!==0&&(s.drawElementsInstanced(n,m,r,u*o,_),e.update(m,n,_))}function h(u,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];e.update(p,n,1)}function d(u,m,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)c(u[f]/o,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,g,0,_);let f=0;for(let v=0;v<_;v++)f+=m[v]*g[v];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qf(s,t,e){const n=new WeakMap,i=new ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let P=a.attributes.position.count*x,b=1;P>t.maxTextureSize&&(b=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*b*4*d),D=new ec(A,P,b,d);D.type=Tn,D.needsUpdate=!0;const T=x*4;for(let R=0;R<d;R++){const V=f[R],L=v[R],N=E[R],O=P*b*4*R;for(let I=0;I<V.count;I++){const Y=I*T;_===!0&&(i.fromBufferAttribute(V,I),A[O+Y+0]=i.x,A[O+Y+1]=i.y,A[O+Y+2]=i.z,A[O+Y+3]=0),g===!0&&(i.fromBufferAttribute(L,I),A[O+Y+4]=i.x,A[O+Y+5]=i.y,A[O+Y+6]=i.z,A[O+Y+7]=0),p===!0&&(i.fromBufferAttribute(N,I),A[O+Y+8]=i.x,A[O+Y+9]=i.y,A[O+Y+10]=i.z,A[O+Y+11]=N.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new Lt(P,b)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Yf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class fc extends De{constructor(t,e,n,i,r,o,a,l,c,h=Ii){if(h!==Ii&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ci),n===void 0&&h===Hi&&(n=zi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pc=new De,ja=new fc(1,1),mc=new ec,_c=new Dh,gc=new hc,Ka=[],Za=[],$a=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ka[i];if(r===void 0&&(r=new Float32Array(i),Ka[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function cr(s,t){let e=Za[t];e===void 0&&(e=new Int32Array(t),Za[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function jf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function Zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function $f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function Jf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Qa.set(n),s.uniformMatrix2fv(this.addr,!1,Qa),ge(e,n)}}function Qf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Ja.set(n),s.uniformMatrix3fv(this.addr,!1,Ja),ge(e,n)}}function tp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;$a.set(n),s.uniformMatrix4fv(this.addr,!1,$a),ge(e,n)}}function ep(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function rp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function cp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ja.compareFunction=Jl,r=ja):r=pc,e.setTexture2D(t||r,i)}function hp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_c,i)}function up(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gc,i)}function dp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mc,i)}function fp(s){switch(s){case 5126:return jf;case 35664:return Kf;case 35665:return Zf;case 35666:return $f;case 35674:return Jf;case 35675:return Qf;case 35676:return tp;case 5124:case 35670:return ep;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return sp;case 5125:return rp;case 36294:return op;case 36295:return ap;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(s,t){s.uniform1fv(this.addr,t)}function mp(s,t){const e=Wi(t,this.size,2);s.uniform2fv(this.addr,e)}function _p(s,t){const e=Wi(t,this.size,3);s.uniform3fv(this.addr,e)}function gp(s,t){const e=Wi(t,this.size,4);s.uniform4fv(this.addr,e)}function vp(s,t){const e=Wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function xp(s,t){const e=Wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Mp(s,t){const e=Wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yp(s,t){s.uniform1iv(this.addr,t)}function Sp(s,t){s.uniform2iv(this.addr,t)}function Ep(s,t){s.uniform3iv(this.addr,t)}function wp(s,t){s.uniform4iv(this.addr,t)}function Tp(s,t){s.uniform1uiv(this.addr,t)}function bp(s,t){s.uniform2uiv(this.addr,t)}function Ap(s,t){s.uniform3uiv(this.addr,t)}function Cp(s,t){s.uniform4uiv(this.addr,t)}function Rp(s,t,e){const n=this.cache,i=t.length,r=cr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||pc,r[o])}function Pp(s,t,e){const n=this.cache,i=t.length,r=cr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||_c,r[o])}function Lp(s,t,e){const n=this.cache,i=t.length,r=cr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||gc,r[o])}function Dp(s,t,e){const n=this.cache,i=t.length,r=cr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||mc,r[o])}function Ip(s){switch(s){case 5126:return pp;case 35664:return mp;case 35665:return _p;case 35666:return gp;case 35674:return vp;case 35675:return xp;case 35676:return Mp;case 5124:case 35670:return yp;case 35667:case 35671:return Sp;case 35668:case 35672:return Ep;case 35669:case 35673:return wp;case 5125:return Tp;case 36294:return bp;case 36295:return Ap;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}class Np{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fp(e.type)}}class Up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ip(e.type)}}class Fp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function tl(s,t){s.seq.push(t),s.map[t.id]=t}function Op(s,t,e){const n=s.name,i=n.length;for(Gr.lastIndex=0;;){const r=Gr.exec(n),o=Gr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){tl(e,c===void 0?new Np(a,s,t):new Up(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Fp(a),tl(e,d)),e=d}}}class tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Op(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function el(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Bp=37297;let zp=0;function Hp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const nl=new Nt;function Vp(s){Xt._getMatrix(nl,Xt.workingColorSpace,s);const t=`mat3( ${nl.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case ar:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function il(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Hp(s.getShaderSource(t),o)}else return i}function Gp(s,t){const e=Vp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kp(s,t){let e;switch(t){case sh:e="Linear";break;case rh:e="Reinhard";break;case oh:e="Cineon";break;case ah:e="ACESFilmic";break;case ch:e="AgX";break;case hh:e="Neutral";break;case lh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hs=new F;function Wp(){Xt.getLuminanceCoefficients(Hs);const s=Hs.x.toFixed(4),t=Hs.y.toFixed(4),e=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function qp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ss(s){return s!==""}function sl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(s){return s.replace(jp,Zp)}const Kp=new Map;function Zp(s,t){let e=Ft[t];if(e===void 0){const n=Kp.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zo(e)}const $p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(s){return s.replace($p,Jp)}function Jp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function al(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function tm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function em(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function nm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zl:t="ENVMAP_BLENDING_MULTIPLY";break;case nh:t="ENVMAP_BLENDING_MIX";break;case ih:t="ENVMAP_BLENDING_ADD";break}return t}function im(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Qp(e),c=tm(e),h=em(e),d=nm(e),u=im(e),m=Xp(e),_=qp(r),g=i.createProgram();let p,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(p=[al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==kn?kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Gp("linearToOutputTexel",e.outputColorSpace),Wp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),o=zo(o),o=sl(o,e),o=rl(o,e),a=zo(a),a=sl(a,e),a=rl(a,e),o=ol(o),a=ol(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=v+p+o,x=v+f+a,P=el(i,i.VERTEX_SHADER,E),b=el(i,i.FRAGMENT_SHADER,x);i.attachShader(g,P),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(R){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(P).trim(),N=i.getShaderInfoLog(b).trim();let O=!0,I=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,P,b);else{const Y=il(i,P,"vertex"),G=il(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+Y+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||N==="")&&(I=!1);I&&(R.diagnostics={runnable:O,programLog:V,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:f}})}i.deleteShader(P),i.deleteShader(b),D=new tr(i,g),T=Yp(i,g)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Bp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=b,this}let rm=0;class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new am(t),e.set(t,n)),n}}class am{constructor(t){this.id=rm++,this.code=t,this.usedTimes=0}}function lm(s,t,e,n,i,r,o){const a=new ic,l=new om,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,y,R,V,L){const N=V.fog,O=L.geometry,I=T.isMeshStandardMaterial?V.environment:null,Y=(T.isMeshStandardMaterial?e:t).get(T.envMap||I),G=Y&&Y.mapping===or?Y.image.height:null,Z=_[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ct=st!==void 0?st.length:0;let it=0;O.morphAttributes.position!==void 0&&(it=1),O.morphAttributes.normal!==void 0&&(it=2),O.morphAttributes.color!==void 0&&(it=3);let zt,j,tt,vt;if(Z){const Zt=on[Z];zt=Zt.vertexShader,j=Zt.fragmentShader}else zt=T.vertexShader,j=T.fragmentShader,l.update(T),tt=l.getVertexShaderID(T),vt=l.getFragmentShaderID(T);const ot=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Pt=L.isInstancedMesh===!0,Ot=L.isBatchedMesh===!0,re=!!T.map,kt=!!T.matcap,ce=!!Y,H=!!T.aoMap,Oe=!!T.lightMap,Ht=!!T.bumpMap,Vt=!!T.normalMap,Tt=!!T.displacementMap,ee=!!T.emissiveMap,wt=!!T.metalnessMap,C=!!T.roughnessMap,S=T.anisotropy>0,k=T.clearcoat>0,$=T.dispersion>0,Q=T.iridescence>0,K=T.sheen>0,St=T.transmission>0,lt=S&&!!T.anisotropyMap,mt=k&&!!T.clearcoatMap,Wt=k&&!!T.clearcoatNormalMap,et=k&&!!T.clearcoatRoughnessMap,_t=Q&&!!T.iridescenceMap,bt=Q&&!!T.iridescenceThicknessMap,Ct=K&&!!T.sheenColorMap,gt=K&&!!T.sheenRoughnessMap,Gt=!!T.specularMap,Ut=!!T.specularColorMap,Qt=!!T.specularIntensityMap,U=St&&!!T.transmissionMap,at=St&&!!T.thicknessMap,q=!!T.gradientMap,J=!!T.alphaMap,dt=T.alphaTest>0,ht=!!T.alphaHash,Dt=!!T.extensions;let oe=kn;T.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(oe=s.toneMapping);const Me={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:zt,fragmentShader:j,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:vt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&L._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&L.instanceColor!==null,instancingMorph:Pt&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Gi,alphaToCoverage:!!T.alphaToCoverage,map:re,matcap:kt,envMap:ce,envMapMode:ce&&Y.mapping,envMapCubeUVHeight:G,aoMap:H,lightMap:Oe,bumpMap:Ht,normalMap:Vt,displacementMap:u&&Tt,emissiveMap:ee,normalMapObjectSpace:Vt&&T.normalMapType===ph,normalMapTangentSpace:Vt&&T.normalMapType===$l,metalnessMap:wt,roughnessMap:C,anisotropy:S,anisotropyMap:lt,clearcoat:k,clearcoatMap:mt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:et,dispersion:$,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:bt,sheen:K,sheenColorMap:Ct,sheenRoughnessMap:gt,specularMap:Gt,specularColorMap:Ut,specularIntensityMap:Qt,transmission:St,transmissionMap:U,thicknessMap:at,gradientMap:q,opaque:T.transparent===!1&&T.blending===Di&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:ht,combine:T.combine,mapUv:re&&g(T.map.channel),aoMapUv:H&&g(T.aoMap.channel),lightMapUv:Oe&&g(T.lightMap.channel),bumpMapUv:Ht&&g(T.bumpMap.channel),normalMapUv:Vt&&g(T.normalMap.channel),displacementMapUv:Tt&&g(T.displacementMap.channel),emissiveMapUv:ee&&g(T.emissiveMap.channel),metalnessMapUv:wt&&g(T.metalnessMap.channel),roughnessMapUv:C&&g(T.roughnessMap.channel),anisotropyMapUv:lt&&g(T.anisotropyMap.channel),clearcoatMapUv:mt&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(T.sheenRoughnessMap.channel),specularMapUv:Gt&&g(T.specularMap.channel),specularColorMapUv:Ut&&g(T.specularColorMap.channel),specularIntensityMapUv:Qt&&g(T.specularIntensityMap.channel),transmissionMapUv:U&&g(T.transmissionMap.channel),thicknessMapUv:at&&g(T.thicknessMap.channel),alphaMapUv:J&&g(T.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Vt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(re||J),fog:!!N,useFog:T.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:it,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:re&&T.map.isVideoTexture===!0&&Xt.getTransfer(T.map.colorSpace)===$t,decodeVideoTextureEmissive:ee&&T.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(T.emissiveMap.colorSpace)===$t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wn,flipSided:T.side===be,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Dt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&T.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function f(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)y.push(R),y.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(v(y,T),E(y,T),y.push(s.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function v(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function E(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const y=_[T.type];let R;if(y){const V=on[y];R=Wh.clone(V.uniforms)}else R=T.uniforms;return R}function P(T,y){let R;for(let V=0,L=h.length;V<L;V++){const N=h[V];if(N.cacheKey===y){R=N,++R.usedTimes;break}}return R===void 0&&(R=new sm(s,y,T,r),h.push(R)),R}function b(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:P,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:D}}function cm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function hm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ll(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,m,_,g,p){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=p),t++,f}function a(d,u,m,_,g,p){const f=o(d,u,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(d,u,m,_,g,p){const f=o(d,u,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||hm),n.length>1&&n.sort(u||ll),i.length>1&&i.sort(u||ll)}function h(){for(let d=t,u=s.length;d<u;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function um(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new cl,s.set(n,[o])):i>=r.length?(o=new cl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function dm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Bt};break;case"SpotLight":e={position:new F,direction:new F,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function fm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let pm=0;function mm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _m(s){const t=new dm,e=fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,r=new le,o=new le;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,_=0,g=0,p=0,f=0,v=0,E=0,x=0,P=0,b=0,A=0;c.sort(mm);for(let T=0,y=c.length;T<y;T++){const R=c[T],V=R.color,L=R.intensity,N=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*L,d+=V.g*L,u+=V.b*L;else if(R.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(R.sh.coefficients[I],L);A++}else if(R.isDirectionalLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,G=e.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=R.shadow.matrix,v++}n.directional[m]=I,m++}else if(R.isSpotLight){const I=t.get(R);I.position.setFromMatrixPosition(R.matrixWorld),I.color.copy(V).multiplyScalar(L),I.distance=N,I.coneCos=Math.cos(R.angle),I.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),I.decay=R.decay,n.spot[g]=I;const Y=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,Y.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[g]=Y.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=O,x++}g++}else if(R.isRectAreaLight){const I=t.get(R);I.color.copy(V).multiplyScalar(L),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=I,p++}else if(R.isPointLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity),I.distance=R.distance,I.decay=R.decay,R.castShadow){const Y=R.shadow,G=e.get(R);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=R.shadow.matrix,E++}n.point[_]=I,_++}else if(R.isHemisphereLight){const I=t.get(R);I.skyColor.copy(R.color).multiplyScalar(L),I.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[f]=I,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==v||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==P||D.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,D.directionalLength=m,D.pointLength=_,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=v,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=P,D.numLightProbes=A,n.version=pm++)}function l(c,h){let d=0,u=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const E=c[f];if(E.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(E.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),u++}else if(E.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function hl(s){const t=new _m(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new hl(s),t.set(i,[a])):r>=o.length?(a=new hl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class vm extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xm extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sm(s,t,e){let n=new Zo;const i=new Lt,r=new Lt,o=new ae,a=new vm({depthPacking:fh}),l=new xm,c={},h=e.maxTextureSize,d={[Wn]:be,[be]:Wn,[wn]:wn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Mm,fragmentShader:ym}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new un;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Le(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let f=this.type;this.render=function(b,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const T=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Gn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const L=f!==En&&this.type===En,N=f===En&&this.type!==En;for(let O=0,I=b.length;O<I;O++){const Y=b[O],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const Z=G.getFrameExtents();if(i.multiply(Z),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,G.mapSize.y=r.y)),G.map===null||L===!0||N===!0){const ct=this.type!==En?{minFilter:Qe,magFilter:Qe}:{};G.map!==null&&G.map.dispose(),G.map=new hi(i.x,i.y,ct),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const st=G.getViewportCount();for(let ct=0;ct<st;ct++){const it=G.getViewport(ct);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),V.viewport(o),G.updateMatrices(Y,ct),n=G.getFrustum(),x(A,D,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===En&&v(G,D),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(T,y,R)};function v(b,A){const D=t.update(g);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hi(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,D,u,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,D,m,g,null)}function E(b,A,D,T){let y=null;const R=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)y=R;else if(y=D.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=y.uuid,L=A.uuid;let N=c[V];N===void 0&&(N={},c[V]=N);let O=N[L];O===void 0&&(O=y.clone(),N[L]=O,A.addEventListener("dispose",P)),y=O}if(y.visible=A.visible,y.wireframe=A.wireframe,T===En?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=s.properties.get(y);V.light=D}return y}function x(b,A,D,T,y){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===En)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const L=t.update(b),N=b.material;if(Array.isArray(N)){const O=L.groups;for(let I=0,Y=O.length;I<Y;I++){const G=O[I],Z=N[G.materialIndex];if(Z&&Z.visible){const st=E(b,Z,T,y);b.onBeforeShadow(s,b,A,D,L,st,G),s.renderBufferDirect(D,null,L,st,b,G),b.onAfterShadow(s,b,A,D,L,st,G)}}}else if(N.visible){const O=E(b,N,T,y);b.onBeforeShadow(s,b,A,D,L,O,null),s.renderBufferDirect(D,null,L,O,b,null),b.onAfterShadow(s,b,A,D,L,O,null)}}const V=b.children;for(let L=0,N=V.length;L<N;L++)x(V[L],A,D,T,y)}function P(b){b.target.removeEventListener("dispose",P);for(const D in c){const T=c[D],y=b.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const Em={[to]:eo,[no]:ro,[io]:oo,[Fi]:so,[eo]:to,[ro]:no,[oo]:io,[so]:Fi};function wm(s,t){function e(){let U=!1;const at=new ae;let q=null;const J=new ae(0,0,0,0);return{setMask:function(dt){q!==dt&&!U&&(s.colorMask(dt,dt,dt,dt),q=dt)},setLocked:function(dt){U=dt},setClear:function(dt,ht,Dt,oe,Me){Me===!0&&(dt*=oe,ht*=oe,Dt*=oe),at.set(dt,ht,Dt,oe),J.equals(at)===!1&&(s.clearColor(dt,ht,Dt,oe),J.copy(at))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function n(){let U=!1,at=!1,q=null,J=null,dt=null;return{setReversed:function(ht){if(at!==ht){const Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const oe=dt;dt=null,this.setClear(oe)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?ot(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ht){q!==ht&&!U&&(s.depthMask(ht),q=ht)},setFunc:function(ht){if(at&&(ht=Em[ht]),J!==ht){switch(ht){case to:s.depthFunc(s.NEVER);break;case eo:s.depthFunc(s.ALWAYS);break;case no:s.depthFunc(s.LESS);break;case Fi:s.depthFunc(s.LEQUAL);break;case io:s.depthFunc(s.EQUAL);break;case so:s.depthFunc(s.GEQUAL);break;case ro:s.depthFunc(s.GREATER);break;case oo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ht}},setLocked:function(ht){U=ht},setClear:function(ht){dt!==ht&&(at&&(ht=1-ht),s.clearDepth(ht),dt=ht)},reset:function(){U=!1,q=null,J=null,dt=null,at=!1}}}function i(){let U=!1,at=null,q=null,J=null,dt=null,ht=null,Dt=null,oe=null,Me=null;return{setTest:function(Zt){U||(Zt?ot(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Zt){at!==Zt&&!U&&(s.stencilMask(Zt),at=Zt)},setFunc:function(Zt,We,dn){(q!==Zt||J!==We||dt!==dn)&&(s.stencilFunc(Zt,We,dn),q=Zt,J=We,dt=dn)},setOp:function(Zt,We,dn){(ht!==Zt||Dt!==We||oe!==dn)&&(s.stencilOp(Zt,We,dn),ht=Zt,Dt=We,oe=dn)},setLocked:function(Zt){U=Zt},setClear:function(Zt){Me!==Zt&&(s.clearStencil(Zt),Me=Zt)},reset:function(){U=!1,at=null,q=null,J=null,dt=null,ht=null,Dt=null,oe=null,Me=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,m=[],_=null,g=!1,p=null,f=null,v=null,E=null,x=null,P=null,b=null,A=new Bt(0,0,0),D=0,T=!1,y=null,R=null,V=null,L=null,N=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Y=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),I=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),I=Y>=2);let Z=null,st={};const ct=s.getParameter(s.SCISSOR_BOX),it=s.getParameter(s.VIEWPORT),zt=new ae().fromArray(ct),j=new ae().fromArray(it);function tt(U,at,q,J){const dt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(U,ht),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<q;Dt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(at+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ht}const vt={};vt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(s.DEPTH_TEST),o.setFunc(Fi),Ht(!1),Vt(pa),ot(s.CULL_FACE),H(Gn);function ot(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function At(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Pt(U,at){return d[U]!==at?(s.bindFramebuffer(U,at),d[U]=at,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Ot(U,at){let q=m,J=!1;if(U){q=u.get(at),q===void 0&&(q=[],u.set(at,q));const dt=U.textures;if(q.length!==dt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Dt=dt.length;ht<Dt;ht++)q[ht]=s.COLOR_ATTACHMENT0+ht;q.length=dt.length,J=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,J=!0);J&&s.drawBuffers(q)}function re(U){return _!==U?(s.useProgram(U),_=U,!0):!1}const kt={[ii]:s.FUNC_ADD,[zc]:s.FUNC_SUBTRACT,[Hc]:s.FUNC_REVERSE_SUBTRACT};kt[Vc]=s.MIN,kt[Gc]=s.MAX;const ce={[kc]:s.ZERO,[Wc]:s.ONE,[Xc]:s.SRC_COLOR,[Jr]:s.SRC_ALPHA,[$c]:s.SRC_ALPHA_SATURATE,[Kc]:s.DST_COLOR,[Yc]:s.DST_ALPHA,[qc]:s.ONE_MINUS_SRC_COLOR,[Qr]:s.ONE_MINUS_SRC_ALPHA,[Zc]:s.ONE_MINUS_DST_COLOR,[jc]:s.ONE_MINUS_DST_ALPHA,[Jc]:s.CONSTANT_COLOR,[Qc]:s.ONE_MINUS_CONSTANT_COLOR,[th]:s.CONSTANT_ALPHA,[eh]:s.ONE_MINUS_CONSTANT_ALPHA};function H(U,at,q,J,dt,ht,Dt,oe,Me,Zt){if(U===Gn){g===!0&&(At(s.BLEND),g=!1);return}if(g===!1&&(ot(s.BLEND),g=!0),U!==Bc){if(U!==p||Zt!==T){if((f!==ii||x!==ii)&&(s.blendEquation(s.FUNC_ADD),f=ii,x=ii),Zt)switch(U){case Di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ma:s.blendFunc(s.ONE,s.ONE);break;case _a:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ga:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ma:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _a:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ga:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,E=null,P=null,b=null,A.set(0,0,0),D=0,p=U,T=Zt}return}dt=dt||at,ht=ht||q,Dt=Dt||J,(at!==f||dt!==x)&&(s.blendEquationSeparate(kt[at],kt[dt]),f=at,x=dt),(q!==v||J!==E||ht!==P||Dt!==b)&&(s.blendFuncSeparate(ce[q],ce[J],ce[ht],ce[Dt]),v=q,E=J,P=ht,b=Dt),(oe.equals(A)===!1||Me!==D)&&(s.blendColor(oe.r,oe.g,oe.b,Me),A.copy(oe),D=Me),p=U,T=!1}function Oe(U,at){U.side===wn?At(s.CULL_FACE):ot(s.CULL_FACE);let q=U.side===be;at&&(q=!q),Ht(q),U.blending===Di&&U.transparent===!1?H(Gn):H(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function Vt(U){U!==Uc?(ot(s.CULL_FACE),U!==R&&(U===pa?s.cullFace(s.BACK):U===Fc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),R=U}function Tt(U){U!==V&&(I&&s.lineWidth(U),V=U)}function ee(U,at,q){U?(ot(s.POLYGON_OFFSET_FILL),(L!==at||N!==q)&&(s.polygonOffset(at,q),L=at,N=q)):At(s.POLYGON_OFFSET_FILL)}function wt(U){U?ot(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function C(U){U===void 0&&(U=s.TEXTURE0+O-1),Z!==U&&(s.activeTexture(U),Z=U)}function S(U,at,q){q===void 0&&(Z===null?q=s.TEXTURE0+O-1:q=Z);let J=st[q];J===void 0&&(J={type:void 0,texture:void 0},st[q]=J),(J.type!==U||J.texture!==at)&&(Z!==q&&(s.activeTexture(q),Z=q),s.bindTexture(U,at||vt[U]),J.type=U,J.texture=at)}function k(){const U=st[Z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(U){zt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),zt.copy(U))}function gt(U){j.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function Gt(U,at){let q=c.get(at);q===void 0&&(q=new WeakMap,c.set(at,q));let J=q.get(U);J===void 0&&(J=s.getUniformBlockIndex(at,U.name),q.set(U,J))}function Ut(U,at){const J=c.get(at).get(U);l.get(at)!==J&&(s.uniformBlockBinding(at,J,U.__bindingPointIndex),l.set(at,J))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,st={},d={},u=new WeakMap,m=[],_=null,g=!1,p=null,f=null,v=null,E=null,x=null,P=null,b=null,A=new Bt(0,0,0),D=0,T=!1,y=null,R=null,V=null,L=null,N=null,zt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:At,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:re,setBlending:H,setMaterial:Oe,setFlipSided:Ht,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:ee,setScissorTest:wt,activeTexture:C,bindTexture:S,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:_t,texImage3D:bt,updateUBOMapping:Gt,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:et,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Ct,viewport:gt,reset:Qt}}function ul(s,t,e,n){const i=Tm(n);switch(e){case Wl:return s*t;case ql:return s*t;case Yl:return s*t*2;case jl:return s*t/i.components*i.byteLength;case qo:return s*t/i.components*i.byteLength;case Kl:return s*t*2/i.components*i.byteLength;case Yo:return s*t*2/i.components*i.byteLength;case Xl:return s*t*3/i.components*i.byteLength;case $e:return s*t*4/i.components*i.byteLength;case jo:return s*t*4/i.components*i.byteLength;case js:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zs:case $s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fo:case mo:return Math.max(s,16)*Math.max(t,8)/4;case uo:case po:return Math.max(s,8)*Math.max(t,8)/2;case _o:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case So:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case wo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case To:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Co:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Po:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Do:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Js:case Io:case No:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Zl:case Uo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fo:case Oo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tm(s){switch(s){case Rn:case Vl:return{byteLength:1,components:1};case rs:case Gl:case ls:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case ci:case ko:case Tn:return{byteLength:4,components:1};case kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function bm(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return m?new OffscreenCanvas(C,S):nr("canvas")}function g(C,S,k){let $=1;const Q=wt(C);if((Q.width>k||Q.height>k)&&($=k/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor($*Q.width),St=Math.floor($*Q.height);d===void 0&&(d=_(K,St));const lt=S?_(K,St):d;return lt.width=K,lt.height=St,lt.getContext("2d").drawImage(C,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+St+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,S,k,$,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),S===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){const St=Q?ar:Xt.getTransfer($);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=St===$t?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(C,S){let k;return C?S===null||S===ci||S===zi?k=s.DEPTH24_STENCIL8:S===Tn?k=s.DEPTH32F_STENCIL8:S===rs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ci||S===zi?k=s.DEPTH_COMPONENT24:S===Tn?k=s.DEPTH_COMPONENT32F:S===rs&&(k=s.DEPTH_COMPONENT16),k}function P(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function b(C){const S=C.target;S.removeEventListener("dispose",b),D(S),S.isVideoTexture&&h.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),y(S)}function D(C){const S=n.get(C);if(S.__webglInit===void 0)return;const k=C.source,$=u.get(k);if($){const Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(C),Object.keys($).length===0&&u.delete(k)}n.remove(C)}function T(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const k=C.source,$=u.get(k);delete $[S.__cacheKey],o.memory.textures--}function y(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Q=0;Q<S.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=C.textures;for(let $=0,Q=k.length;$<Q;$++){const K=n.get(k[$]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(C)}let R=0;function V(){R=0}function L(){const C=R;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function N(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function O(C,S){const k=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,C,S);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function I(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Y(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function G(C,S){const k=n.get(C);if(C.version>0&&k.__version!==C.version){tt(k,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const Z={[co]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[ho]:s.MIRRORED_REPEAT},st={[Qe]:s.NEAREST,[uh]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[mr]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},ct={[mh]:s.NEVER,[yh]:s.ALWAYS,[_h]:s.LESS,[Jl]:s.LEQUAL,[gh]:s.EQUAL,[Mh]:s.GEQUAL,[vh]:s.GREATER,[xh]:s.NOTEQUAL};function it(C,S){if(S.type===Tn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===mr||S.magFilter===Ms||S.magFilter===li||S.minFilter===ln||S.minFilter===mr||S.minFilter===Ms||S.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Z[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,st[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qe||S.minFilter!==Ms&&S.minFilter!==li||S.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function zt(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let Q=u.get($);Q===void 0&&(Q={},u.set($,Q));const K=N(S);if(K!==C.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[K].usedTimes++;const St=Q[C.__cacheKey];St!==void 0&&(Q[C.__cacheKey].usedTimes--,St.usedTimes===0&&T(S)),C.__cacheKey=K,C.__webglTexture=Q[K].texture}return k}function j(C,S,k){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const Q=zt(C,S),K=S.source;e.bindTexture($,C.__webglTexture,s.TEXTURE0+k);const St=n.get(K);if(K.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);const lt=Xt.getPrimaries(Xt.workingColorSpace),mt=S.colorSpace===Vn?null:Xt.getPrimaries(S.colorSpace),Wt=S.colorSpace===Vn||lt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let et=g(S.image,!1,i.maxTextureSize);et=ee(S,et);const _t=r.convert(S.format,S.colorSpace),bt=r.convert(S.type);let Ct=E(S.internalFormat,_t,bt,S.colorSpace,S.isVideoTexture);it($,S);let gt;const Gt=S.mipmaps,Ut=S.isVideoTexture!==!0,Qt=St.__version===void 0||Q===!0,U=K.dataReady,at=P(S,et);if(S.isDepthTexture)Ct=x(S.format===Hi,S.type),Qt&&(Ut?e.texStorage2D(s.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Ct,et.width,et.height,0,_t,bt,null));else if(S.isDataTexture)if(Gt.length>0){Ut&&Qt&&e.texStorage2D(s.TEXTURE_2D,at,Ct,Gt[0].width,Gt[0].height);for(let q=0,J=Gt.length;q<J;q++)gt=Gt[q],Ut?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,_t,bt,gt.data):e.texImage2D(s.TEXTURE_2D,q,Ct,gt.width,gt.height,0,_t,bt,gt.data);S.generateMipmaps=!1}else Ut?(Qt&&e.texStorage2D(s.TEXTURE_2D,at,Ct,et.width,et.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,_t,bt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,et.width,et.height,0,_t,bt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ct,Gt[0].width,Gt[0].height,et.depth);for(let q=0,J=Gt.length;q<J;q++)if(gt=Gt[q],S.format!==$e)if(_t!==null)if(Ut){if(U)if(S.layerUpdates.size>0){const dt=ul(gt.width,gt.height,S.format,S.type);for(const ht of S.layerUpdates){const Dt=gt.data.subarray(ht*dt/gt.data.BYTES_PER_ELEMENT,(ht+1)*dt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ht,gt.width,gt.height,1,_t,Dt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,et.depth,_t,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ct,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,et.depth,_t,bt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ct,gt.width,gt.height,et.depth,0,_t,bt,gt.data)}else{Ut&&Qt&&e.texStorage2D(s.TEXTURE_2D,at,Ct,Gt[0].width,Gt[0].height);for(let q=0,J=Gt.length;q<J;q++)gt=Gt[q],S.format!==$e?_t!==null?Ut?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,_t,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt.width,gt.height,_t,bt,gt.data):e.texImage2D(s.TEXTURE_2D,q,Ct,gt.width,gt.height,0,_t,bt,gt.data)}else if(S.isDataArrayTexture)if(Ut){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ct,et.width,et.height,et.depth),U)if(S.layerUpdates.size>0){const q=ul(et.width,et.height,S.format,S.type);for(const J of S.layerUpdates){const dt=et.data.subarray(J*q/et.data.BYTES_PER_ELEMENT,(J+1)*q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,_t,bt,dt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,bt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,_t,bt,et.data);else if(S.isData3DTexture)Ut?(Qt&&e.texStorage3D(s.TEXTURE_3D,at,Ct,et.width,et.height,et.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,bt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,_t,bt,et.data);else if(S.isFramebufferTexture){if(Qt)if(Ut)e.texStorage2D(s.TEXTURE_2D,at,Ct,et.width,et.height);else{let q=et.width,J=et.height;for(let dt=0;dt<at;dt++)e.texImage2D(s.TEXTURE_2D,dt,Ct,q,J,0,_t,bt,null),q>>=1,J>>=1}}else if(Gt.length>0){if(Ut&&Qt){const q=wt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,at,Ct,q.width,q.height)}for(let q=0,J=Gt.length;q<J;q++)gt=Gt[q],Ut?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t,bt,gt):e.texImage2D(s.TEXTURE_2D,q,Ct,_t,bt,gt);S.generateMipmaps=!1}else if(Ut){if(Qt){const q=wt(et);e.texStorage2D(s.TEXTURE_2D,at,Ct,q.width,q.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,bt,et)}else e.texImage2D(s.TEXTURE_2D,0,Ct,_t,bt,et);p(S)&&f($),St.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function tt(C,S,k){if(S.image.length!==6)return;const $=zt(C,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const K=n.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(s.TEXTURE0+k);const St=Xt.getPrimaries(Xt.workingColorSpace),lt=S.colorSpace===Vn?null:Xt.getPrimaries(S.colorSpace),mt=S.colorSpace===Vn||St===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!Wt&&!et?_t[J]=g(S.image[J],!0,i.maxCubemapSize):_t[J]=et?S.image[J].image:S.image[J],_t[J]=ee(S,_t[J]);const bt=_t[0],Ct=r.convert(S.format,S.colorSpace),gt=r.convert(S.type),Gt=E(S.internalFormat,Ct,gt,S.colorSpace),Ut=S.isVideoTexture!==!0,Qt=K.__version===void 0||$===!0,U=Q.dataReady;let at=P(S,bt);it(s.TEXTURE_CUBE_MAP,S);let q;if(Wt){Ut&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Gt,bt.width,bt.height);for(let J=0;J<6;J++){q=_t[J].mipmaps;for(let dt=0;dt<q.length;dt++){const ht=q[dt];S.format!==$e?Ct!==null?Ut?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ht.width,ht.height,Ct,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ht.width,ht.height,Ct,gt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Gt,ht.width,ht.height,0,Ct,gt,ht.data)}}}else{if(q=S.mipmaps,Ut&&Qt){q.length>0&&at++;const J=wt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,Ct,gt,_t[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,_t[J].width,_t[J].height,0,Ct,gt,_t[J].data);for(let dt=0;dt<q.length;dt++){const Dt=q[dt].image[J].image;Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Dt.width,Dt.height,Ct,gt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Gt,Dt.width,Dt.height,0,Ct,gt,Dt.data)}}else{Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,gt,_t[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,Ct,gt,_t[J]);for(let dt=0;dt<q.length;dt++){const ht=q[dt];Ut?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Ct,gt,ht.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Gt,Ct,gt,ht.image[J])}}}p(S)&&f(s.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function vt(C,S,k,$,Q,K){const St=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),mt=E(k.internalFormat,St,lt,k.colorSpace),Wt=n.get(S),et=n.get(k);if(et.__renderTarget=S,!Wt.__hasExternalTextures){const _t=Math.max(1,S.width>>K),bt=Math.max(1,S.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,mt,_t,bt,S.depth,0,St,lt,null):e.texImage2D(Q,K,mt,_t,bt,0,St,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,et.__webglTexture,0,Ht(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,et.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(C,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const $=S.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=x(S.stencilBuffer,Q),St=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Ht(S);Vt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,K,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,C)}else{const $=S.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],St=r.convert(K.format,K.colorSpace),lt=r.convert(K.type),mt=E(K.internalFormat,St,lt,K.colorSpace),Wt=Ht(S);k&&Vt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,mt,S.width,S.height):Vt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,mt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const Q=$.__webglTexture,K=Ht(S);if(S.depthTexture.format===Ii)Vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Hi)Vt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const S=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=$}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(S.__webglFramebuffer,C)}else if(k){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),ot(S.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ot(S.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(C,S,k){const $=n.get(C);S!==void 0&&vt($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Pt(C)}function re(C){const S=C.texture,k=n.get(C),$=n.get(S);C.addEventListener("dispose",A);const Q=C.textures,K=C.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let mt=0;mt<S.mipmaps.length;mt++)k.__webglFramebuffer[lt][mt]=s.createFramebuffer()}else k.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)k.__webglFramebuffer[lt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(St)for(let lt=0,mt=Q.length;lt<mt;lt++){const Wt=n.get(Q[lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Vt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const mt=Q[lt];k.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const Wt=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),_t=E(mt.internalFormat,Wt,et,mt.colorSpace,C.isXRRenderTarget===!0),bt=Ht(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),it(s.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)vt(k.__webglFramebuffer[lt][mt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else vt(k.__webglFramebuffer[lt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(S)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let lt=0,mt=Q.length;lt<mt;lt++){const Wt=Q[lt],et=n.get(Wt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),it(s.TEXTURE_2D,Wt),vt(k.__webglFramebuffer,C,Wt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),p(Wt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),it(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)vt(k.__webglFramebuffer[mt],C,S,s.COLOR_ATTACHMENT0,lt,mt);else vt(k.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,lt,0);p(S)&&f(lt),e.unbindTexture()}C.depthBuffer&&Pt(C)}function kt(C){const S=C.textures;for(let k=0,$=S.length;k<$;k++){const Q=S[k];if(p(Q)){const K=v(C),St=n.get(Q).__webglTexture;e.bindTexture(K,St),f(K),e.unbindTexture()}}}const ce=[],H=[];function Oe(C){if(C.samples>0){if(Vt(C)===!1){const S=C.textures,k=C.width,$=C.height;let Q=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(C),lt=S.length>1;if(lt)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const Wt=n.get(S[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,Q,s.NEAREST),l===!0&&(ce.length=0,H.length=0,ce.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ce.push(K),H.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const Wt=n.get(S[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ht(C){return Math.min(i.maxSamples,C.samples)}function Vt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ee(C,S){const k=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Gi&&k!==Vn&&(Xt.getTransfer(k)===$t?($!==$e||Q!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=O,this.setTexture2DArray=I,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=re,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Vt}function Am(s,t){function e(n,i=Vn){let r;const o=Xt.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===Wo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vl)return s.BYTE;if(n===Gl)return s.SHORT;if(n===rs)return s.UNSIGNED_SHORT;if(n===ko)return s.INT;if(n===ci)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===ls)return s.HALF_FLOAT;if(n===Wl)return s.ALPHA;if(n===Xl)return s.RGB;if(n===$e)return s.RGBA;if(n===ql)return s.LUMINANCE;if(n===Yl)return s.LUMINANCE_ALPHA;if(n===Ii)return s.DEPTH_COMPONENT;if(n===Hi)return s.DEPTH_STENCIL;if(n===jl)return s.RED;if(n===qo)return s.RED_INTEGER;if(n===Kl)return s.RG;if(n===Yo)return s.RG_INTEGER;if(n===jo)return s.RGBA_INTEGER;if(n===js||n===Ks||n===Zs||n===$s)if(o===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===fo||n===po||n===mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===go||n===vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===go)return o===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xo||n===Mo||n===yo||n===So||n===Eo||n===wo||n===To||n===bo||n===Ao||n===Co||n===Ro||n===Po||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===So)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ao)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Po)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return o===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===Io||n===No)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Js)return o===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Uo||n===Fo||n===Oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Cm extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vs extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new De,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:Pm,fragmentShader:Lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends ui{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,_=null;const g=new Dm,p=e.getContextAttributes();let f=null,v=null;const E=[],x=[],P=new Lt;let b=null;const A=new Ge;A.viewport=new ae;const D=new Ge;D.viewport=new ae;const T=[A,D],y=new Cm;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=E[j];return tt===void 0&&(tt=new kr,E[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=E[j];return tt===void 0&&(tt=new kr,E[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=E[j];return tt===void 0&&(tt=new kr,E[j]=tt),tt.getHandSpace()};function L(j){const tt=x.indexOf(j.inputSource);if(tt===-1)return;const vt=E[tt];vt!==void 0&&(vt.update(j.inputSource,j.frame,c||o),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let j=0;j<E.length;j++){const tt=x[j];tt!==null&&(x[j]=null,E[j].disconnect(tt))}R=null,V=null,g.reset(),t.setRenderTarget(f),m=null,u=null,d=null,i=null,v=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new hi(m.framebufferWidth,m.framebufferHeight,{format:$e,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,vt=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Hi:Ii,vt=p.stencil?zi:ci);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new hi(u.textureWidth,u.textureHeight,{format:$e,type:Rn,depthTexture:new fc(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(j){for(let tt=0;tt<j.removed.length;tt++){const vt=j.removed[tt],ot=x.indexOf(vt);ot>=0&&(x[ot]=null,E[ot].disconnect(vt))}for(let tt=0;tt<j.added.length;tt++){const vt=j.added[tt];let ot=x.indexOf(vt);if(ot===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=x.length){x.push(vt),ot=Pt;break}else if(x[Pt]===null){x[Pt]=vt,ot=Pt;break}if(ot===-1)break}const At=E[ot];At&&At.connect(vt)}}const I=new F,Y=new F;function G(j,tt,vt){I.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(vt.matrixWorld);const ot=I.distanceTo(Y),At=tt.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,Ot=At[14]/(At[10]-1),re=At[14]/(At[10]+1),kt=(At[9]+1)/At[5],ce=(At[9]-1)/At[5],H=(At[8]-1)/At[0],Oe=(Pt[8]+1)/Pt[0],Ht=Ot*H,Vt=Ot*Oe,Tt=ot/(-H+Oe),ee=Tt*-H;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ee),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const wt=Ot+Tt,C=re+Tt,S=Ht-ee,k=Vt+(ot-ee),$=kt*re/C*wt,Q=ce*re/C*wt;j.projectionMatrix.makePerspective(S,k,$,Q,wt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Z(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let tt=j.near,vt=j.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),y.near=D.near=A.near=tt,y.far=D.far=A.far=vt,(R!==y.near||V!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,V=y.far),A.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,y.layers.mask=A.layers.mask|D.layers.mask;const ot=j.parent,At=y.cameras;Z(y,ot);for(let Pt=0;Pt<At.length;Pt++)Z(At[Pt],ot);At.length===2?G(y,A,D):y.projectionMatrix.copy(A.projectionMatrix),st(j,y,ot)};function st(j,tt,vt){vt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Bo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let ct=null;function it(j,tt){if(h=tt.getViewerPose(c||o),_=tt,h!==null){const vt=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let ot=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Pt=0;Pt<vt.length;Pt++){const Ot=vt[Pt];let re=null;if(m!==null)re=m.getViewport(Ot);else{const ce=d.getViewSubImage(u,Ot);re=ce.viewport,Pt===0&&(t.setRenderTargetTextures(v,ce.colorTexture,u.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(v))}let kt=T[Pt];kt===void 0&&(kt=new Ge,kt.layers.enable(Pt),kt.viewport=new ae,T[Pt]=kt),kt.matrix.fromArray(Ot.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ot.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(re.x,re.y,re.width,re.height),Pt===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(kt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=d.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&g.init(t,Pt,i.renderState)}}for(let vt=0;vt<E.length;vt++){const ot=x[vt],At=E[vt];ot!==null&&At!==void 0&&At.update(ot,tt,c||o)}ct&&ct(j,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const zt=new uc;zt.setAnimationLoop(it),this.setAnimationLoop=function(j){ct=j},this.dispose=function(){}}}const ti=new hn,Nm=new le;function Um(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,lc(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,v,E,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,v,E):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===be&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===be&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=t.get(f),E=v.envMap,x=v.envMapRotation;E&&(p.envMap.value=E,ti.copy(x),ti.x*=-1,ti.y*=-1,ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),p.envMapRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(ti)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=E*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===be&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const v=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fm(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const x=E.program;n.uniformBlockBinding(v,x)}function c(v,E){let x=i[v.id];x===void 0&&(_(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",p));const P=E.program;n.updateUBOMapping(v,P);const b=t.render.frame;r[v.id]!==b&&(u(v),r[v.id]=b)}function h(v){const E=d();v.__bindingPointIndex=E;const x=s.createBuffer(),P=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const E=i[v.id],x=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let b=0,A=x.length;b<A;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let T=0,y=D.length;T<y;T++){const R=D[T];if(m(R,b,T,P)===!0){const V=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let O=0;O<L.length;O++){const I=L[O],Y=g(I);typeof I=="number"||typeof I=="boolean"?(R.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,V+N,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=0,R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=0,R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=0):(I.toArray(R.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,E,x,P){const b=v.value,A=E+"_"+x;if(P[A]===void 0)return typeof b=="number"||typeof b=="boolean"?P[A]=b:P[A]=b.clone(),!0;{const D=P[A];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return P[A]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function _(v){const E=v.uniforms;let x=0;const P=16;for(let A=0,D=E.length;A<D;A++){const T=Array.isArray(E[A])?E[A]:[E[A]];for(let y=0,R=T.length;y<R;y++){const V=T[y],L=Array.isArray(V.value)?V.value:[V.value];for(let N=0,O=L.length;N<O;N++){const I=L[N],Y=g(I),G=x%P,Z=G%Y.boundary,st=G+Z;x+=Z,st!==0&&P-st<Y.storage&&(x+=P-st),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=Y.storage}}}const b=x%P;return b>0&&(x+=P-b),v.__size=x,v.__cache={},this}function g(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),E}function p(v){const E=v.target;E.removeEventListener("dispose",p);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function f(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Om{constructor(t={}){const{canvas:e=wh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const v=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=kn,this.toneMappingExposure=1;const x=this;let P=!1,b=0,A=0,D=null,T=-1,y=null;const R=new ae,V=new ae;let L=null;const N=new Bt(0);let O=0,I=e.width,Y=e.height,G=1,Z=null,st=null;const ct=new ae(0,0,I,Y),it=new ae(0,0,I,Y);let zt=!1;const j=new Zo;let tt=!1,vt=!1;const ot=new le,At=new le,Pt=new F,Ot=new ae,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ce(){return D===null?G:1}let H=n;function Oe(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Go}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),H===null){const B="webgl2";if(H=Oe(B,w),H===null)throw Oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ht,Vt,Tt,ee,wt,C,S,k,$,Q,K,St,lt,mt,Wt,et,_t,bt,Ct,gt,Gt,Ut,Qt,U;function at(){Ht=new Gf(H),Ht.init(),Ut=new Am(H,Ht),Vt=new Ff(H,Ht,t,Ut),Tt=new wm(H,Ht),Vt.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),ee=new Xf(H),wt=new cm,C=new bm(H,Ht,Tt,wt,Vt,Ut,ee),S=new Bf(x),k=new Vf(x),$=new $h(H),Qt=new Nf(H,$),Q=new kf(H,$,ee,Qt),K=new Yf(H,Q,$,ee),Ct=new qf(H,Vt,C),et=new Of(wt),St=new lm(x,S,k,Ht,Vt,Qt,et),lt=new Um(x,wt),mt=new um,Wt=new gm(Ht),bt=new If(x,S,k,Tt,K,m,l),_t=new Sm(x,K,Vt),U=new Fm(H,ee,Vt,Tt),gt=new Uf(H,Ht,ee),Gt=new Wf(H,Ht,ee),ee.programs=St.programs,x.capabilities=Vt,x.extensions=Ht,x.properties=wt,x.renderLists=mt,x.shadowMap=_t,x.state=Tt,x.info=ee}at();const q=new Im(x,H);this.xr=q,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(I,Y,!1))},this.getSize=function(w){return w.set(I,Y)},this.setSize=function(w,B,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,Y=B,e.width=Math.floor(w*G),e.height=Math.floor(B*G),W===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(I*G,Y*G).floor()},this.setDrawingBufferSize=function(w,B,W){I=w,Y=B,G=W,e.width=Math.floor(w*W),e.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(ct)},this.setViewport=function(w,B,W,X){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,B,W,X),Tt.viewport(R.copy(ct).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,B,W,X){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,B,W,X),Tt.scissor(V.copy(it).multiplyScalar(G).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(w){Tt.setScissorTest(zt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(w=!0,B=!0,W=!0){let X=0;if(w){let z=!1;if(D!==null){const nt=D.texture.format;z=nt===jo||nt===Yo||nt===qo}if(z){const nt=D.texture.type,ut=nt===Rn||nt===ci||nt===rs||nt===zi||nt===Wo||nt===Xo,xt=bt.getClearColor(),Mt=bt.getClearAlpha(),Rt=xt.r,It=xt.g,yt=xt.b;ut?(_[0]=Rt,_[1]=It,_[2]=yt,_[3]=Mt,H.clearBufferuiv(H.COLOR,0,_)):(g[0]=Rt,g[1]=It,g[2]=yt,g[3]=Mt,H.clearBufferiv(H.COLOR,0,g))}else X|=H.COLOR_BUFFER_BIT}B&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),Wt.dispose(),wt.dispose(),S.dispose(),k.dispose(),K.dispose(),Qt.dispose(),U.dispose(),St.dispose(),q.dispose(),q.removeEventListener("sessionstart",oa),q.removeEventListener("sessionend",aa),jn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ee.autoReset,B=_t.enabled,W=_t.autoUpdate,X=_t.needsUpdate,z=_t.type;at(),ee.autoReset=w,_t.enabled=B,_t.autoUpdate=W,_t.needsUpdate=X,_t.type=z}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const B=w.target;B.removeEventListener("dispose",Dt),oe(B)}function oe(w){Me(w),wt.remove(w)}function Me(w){const B=wt.get(w).programs;B!==void 0&&(B.forEach(function(W){St.releaseProgram(W)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,X,z,nt){B===null&&(B=re);const ut=z.isMesh&&z.matrixWorld.determinant()<0,xt=Dc(w,B,W,X,z);Tt.setMaterial(X,ut);let Mt=W.index,Rt=1;if(X.wireframe===!0){if(Mt=Q.getWireframeAttribute(W),Mt===void 0)return;Rt=2}const It=W.drawRange,yt=W.attributes.position;let qt=It.start*Rt,te=(It.start+It.count)*Rt;nt!==null&&(qt=Math.max(qt,nt.start*Rt),te=Math.min(te,(nt.start+nt.count)*Rt)),Mt!==null?(qt=Math.max(qt,0),te=Math.min(te,Mt.count)):yt!=null&&(qt=Math.max(qt,0),te=Math.min(te,yt.count));const ne=te-qt;if(ne<0||ne===1/0)return;Qt.setup(z,X,xt,W,Mt);let Ae,jt=gt;if(Mt!==null&&(Ae=$.get(Mt),jt=Gt,jt.setIndex(Ae)),z.isMesh)X.wireframe===!0?(Tt.setLineWidth(X.wireframeLinewidth*ce()),jt.setMode(H.LINES)):jt.setMode(H.TRIANGLES);else if(z.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),Tt.setLineWidth(Et*ce()),z.isLineSegments?jt.setMode(H.LINES):z.isLineLoop?jt.setMode(H.LINE_LOOP):jt.setMode(H.LINE_STRIP)}else z.isPoints?jt.setMode(H.POINTS):z.isSprite&&jt.setMode(H.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)jt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Et=z._multiDrawStarts,fn=z._multiDrawCounts,Kt=z._multiDrawCount,Xe=Mt?$.get(Mt).bytesPerElement:1,di=wt.get(X).currentProgram.getUniforms();for(let Ie=0;Ie<Kt;Ie++)di.setValue(H,"_gl_DrawID",Ie),jt.render(Et[Ie]/Xe,fn[Ie])}else if(z.isInstancedMesh)jt.renderInstances(qt,ne,z.count);else if(W.isInstancedBufferGeometry){const Et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,fn=Math.min(W.instanceCount,Et);jt.renderInstances(qt,ne,fn)}else jt.render(qt,ne)};function Zt(w,B,W){w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=be,w.needsUpdate=!0,xs(w,B,W),w.side=Wn,w.needsUpdate=!0,xs(w,B,W),w.side=wn):xs(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),f=Wt.get(W),f.init(B),E.push(f),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const X=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const nt=z.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const xt=nt[ut];Zt(xt,W,z),X.add(xt)}else Zt(nt,W,z),X.add(nt)}),E.pop(),f=null,X},this.compileAsync=function(w,B,W=null){const X=this.compile(w,B,W);return new Promise(z=>{function nt(){if(X.forEach(function(ut){wt.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){z(w);return}setTimeout(nt,10)}Ht.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let We=null;function dn(w){We&&We(w)}function oa(){jn.stop()}function aa(){jn.start()}const jn=new uc;jn.setAnimationLoop(dn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(w){We=w,q.setAnimationLoop(w),w===null?jn.stop():jn.start()},q.addEventListener("sessionstart",oa),q.addEventListener("sessionend",aa),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,D),f=Wt.get(w,E.length),f.init(B),E.push(f),At.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(At),vt=this.localClippingEnabled,tt=et.init(this.clippingPlanes,vt),p=mt.get(w,v.length),p.init(),v.push(p),q.enabled===!0&&q.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&pr(nt,B,-1/0,x.sortObjects)}pr(w,B,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(Z,st),kt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,kt&&bt.addToRenderList(p,w),this.info.render.frame++,tt===!0&&et.beginShadows();const W=f.state.shadowsArray;_t.render(W,w,B),tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,z=p.transmissive;if(f.setupLights(),B.isArrayCamera){const nt=B.cameras;if(z.length>0)for(let ut=0,xt=nt.length;ut<xt;ut++){const Mt=nt[ut];ca(X,z,w,Mt)}kt&&bt.render(w);for(let ut=0,xt=nt.length;ut<xt;ut++){const Mt=nt[ut];la(p,w,Mt,Mt.viewport)}}else z.length>0&&ca(X,z,w,B),kt&&bt.render(w),la(p,w,B);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(x,w,B),Qt.resetDefaultState(),T=-1,y=null,E.pop(),E.length>0?(f=E[E.length-1],tt===!0&&et.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function pr(w,B,W,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){X&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(At);const ut=K.update(w),xt=w.material;xt.visible&&p.push(w,ut,xt,W,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const ut=K.update(w),xt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ot.copy(ut.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(At)),Array.isArray(xt)){const Mt=ut.groups;for(let Rt=0,It=Mt.length;Rt<It;Rt++){const yt=Mt[Rt],qt=xt[yt.materialIndex];qt&&qt.visible&&p.push(w,ut,qt,W,Ot.z,yt)}}else xt.visible&&p.push(w,ut,xt,W,Ot.z,null)}}const nt=w.children;for(let ut=0,xt=nt.length;ut<xt;ut++)pr(nt[ut],B,W,X)}function la(w,B,W,X){const z=w.opaque,nt=w.transmissive,ut=w.transparent;f.setupLightsView(W),tt===!0&&et.setGlobalState(x.clippingPlanes,W),X&&Tt.viewport(R.copy(X)),z.length>0&&vs(z,B,W),nt.length>0&&vs(nt,B,W),ut.length>0&&vs(ut,B,W),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ca(w,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new hi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?ls:Rn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const nt=f.state.transmissionRenderTarget[X.id],ut=X.viewport||R;nt.setSize(ut.z,ut.w);const xt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(N),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),kt&&bt.render(W);const Mt=x.toneMapping;x.toneMapping=kn;const Rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),tt===!0&&et.setGlobalState(x.clippingPlanes,X),vs(w,W,X),C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let yt=0,qt=B.length;yt<qt;yt++){const te=B[yt],ne=te.object,Ae=te.geometry,jt=te.material,Et=te.group;if(jt.side===wn&&ne.layers.test(X.layers)){const fn=jt.side;jt.side=be,jt.needsUpdate=!0,ha(ne,W,X,Ae,jt,Et),jt.side=fn,jt.needsUpdate=!0,It=!0}}It===!0&&(C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt))}x.setRenderTarget(xt),x.setClearColor(N,O),Rt!==void 0&&(X.viewport=Rt),x.toneMapping=Mt}function vs(w,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,nt=w.length;z<nt;z++){const ut=w[z],xt=ut.object,Mt=ut.geometry,Rt=X===null?ut.material:X,It=ut.group;xt.layers.test(W.layers)&&ha(xt,B,W,Mt,Rt,It)}}function ha(w,B,W,X,z,nt){w.onBeforeRender(x,B,W,X,z,nt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,B,W,X,w,nt),z.transparent===!0&&z.side===wn&&z.forceSinglePass===!1?(z.side=be,z.needsUpdate=!0,x.renderBufferDirect(W,B,X,z,w,nt),z.side=Wn,z.needsUpdate=!0,x.renderBufferDirect(W,B,X,z,w,nt),z.side=wn):x.renderBufferDirect(W,B,X,z,w,nt),w.onAfterRender(x,B,W,X,z,nt)}function xs(w,B,W){B.isScene!==!0&&(B=re);const X=wt.get(w),z=f.state.lights,nt=f.state.shadowsArray,ut=z.state.version,xt=St.getParameters(w,z.state,nt,B,W),Mt=St.getProgramCacheKey(xt);let Rt=X.programs;X.environment=w.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",Dt),Rt=new Map,X.programs=Rt);let It=Rt.get(Mt);if(It!==void 0){if(X.currentProgram===It&&X.lightsStateVersion===ut)return da(w,xt),It}else xt.uniforms=St.getUniforms(w),w.onBeforeCompile(xt,x),It=St.acquireProgram(xt,Mt),Rt.set(Mt,It),X.uniforms=xt.uniforms;const yt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(yt.clippingPlanes=et.uniform),da(w,xt),X.needsLights=Nc(w),X.lightsStateVersion=ut,X.needsLights&&(yt.ambientLightColor.value=z.state.ambient,yt.lightProbe.value=z.state.probe,yt.directionalLights.value=z.state.directional,yt.directionalLightShadows.value=z.state.directionalShadow,yt.spotLights.value=z.state.spot,yt.spotLightShadows.value=z.state.spotShadow,yt.rectAreaLights.value=z.state.rectArea,yt.ltc_1.value=z.state.rectAreaLTC1,yt.ltc_2.value=z.state.rectAreaLTC2,yt.pointLights.value=z.state.point,yt.pointLightShadows.value=z.state.pointShadow,yt.hemisphereLights.value=z.state.hemi,yt.directionalShadowMap.value=z.state.directionalShadowMap,yt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,yt.spotShadowMap.value=z.state.spotShadowMap,yt.spotLightMatrix.value=z.state.spotLightMatrix,yt.spotLightMap.value=z.state.spotLightMap,yt.pointShadowMap.value=z.state.pointShadowMap,yt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=It,X.uniformsList=null,It}function ua(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=tr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function da(w,B){const W=wt.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Dc(w,B,W,X,z){B.isScene!==!0&&(B=re),C.resetTextureUnits();const nt=B.fog,ut=X.isMeshStandardMaterial?B.environment:null,xt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gi,Mt=(X.isMeshStandardMaterial?k:S).get(X.envMap||ut),Rt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,It=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),yt=!!W.morphAttributes.position,qt=!!W.morphAttributes.normal,te=!!W.morphAttributes.color;let ne=kn;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ne=x.toneMapping);const Ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,jt=Ae!==void 0?Ae.length:0,Et=wt.get(X),fn=f.state.lights;if(tt===!0&&(vt===!0||w!==y)){const Be=w===y&&X.id===T;et.setState(X,w,Be)}let Kt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==fn.state.version||Et.outputColorSpace!==xt||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==Mt||X.fog===!0&&Et.fog!==nt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Rt||Et.vertexTangents!==It||Et.morphTargets!==yt||Et.morphNormals!==qt||Et.morphColors!==te||Et.toneMapping!==ne||Et.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,Et.__version=X.version);let Xe=Et.currentProgram;Kt===!0&&(Xe=xs(X,B,z));let di=!1,Ie=!1,qi=!1;const ie=Xe.getUniforms(),tn=Et.uniforms;if(Tt.useProgram(Xe.program)&&(di=!0,Ie=!0,qi=!0),X.id!==T&&(T=X.id,Ie=!0),di||y!==w){Tt.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),bh(ot),Ah(ot),ie.setValue(H,"projectionMatrix",ot)):ie.setValue(H,"projectionMatrix",w.projectionMatrix),ie.setValue(H,"viewMatrix",w.matrixWorldInverse);const Ln=ie.map.cameraPosition;Ln!==void 0&&Ln.setValue(H,Pt.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&ie.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ie.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ie=!0,qi=!0)}if(z.isSkinnedMesh){ie.setOptional(H,z,"bindMatrix"),ie.setOptional(H,z,"bindMatrixInverse");const Be=z.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ie.setValue(H,"boneTexture",Be.boneTexture,C))}z.isBatchedMesh&&(ie.setOptional(H,z,"batchingTexture"),ie.setValue(H,"batchingTexture",z._matricesTexture,C),ie.setOptional(H,z,"batchingIdTexture"),ie.setValue(H,"batchingIdTexture",z._indirectTexture,C),ie.setOptional(H,z,"batchingColorTexture"),z._colorsTexture!==null&&ie.setValue(H,"batchingColorTexture",z._colorsTexture,C));const Yi=W.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Ct.update(z,W,Xe),(Ie||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,ie.setValue(H,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(tn.envMap.value=Mt,tn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(tn.envMapIntensity.value=B.environmentIntensity),Ie&&(ie.setValue(H,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Ic(tn,qi),nt&&X.fog===!0&&lt.refreshFogUniforms(tn,nt),lt.refreshMaterialUniforms(tn,X,G,Y,f.state.transmissionRenderTarget[w.id]),tr.upload(H,ua(Et),tn,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tr.upload(H,ua(Et),tn,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ie.setValue(H,"center",z.center),ie.setValue(H,"modelViewMatrix",z.modelViewMatrix),ie.setValue(H,"normalMatrix",z.normalMatrix),ie.setValue(H,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let Ln=0,Dn=Be.length;Ln<Dn;Ln++){const fa=Be[Ln];U.update(fa,Xe),U.bind(fa,Xe)}}return Xe}function Ic(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Nc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,B,W){wt.get(w.texture).__webglTexture=B,wt.get(w.depthTexture).__webglTexture=W;const X=wt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const W=wt.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,W=0){D=w,b=B,A=W;let X=!0,z=null,nt=!1,ut=!1;if(w){const Mt=wt.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(H.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Mt.__hasExternalTextures)C.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const yt=w.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&wt.has(yt)&&(w.width!==yt.image.width||w.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ut=!0);const It=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[B])?z=It[B][W]:z=It[B],nt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?z=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?z=It[W]:z=It,R.copy(w.viewport),V.copy(w.scissor),L=w.scissorTest}else R.copy(ct).multiplyScalar(G).floor(),V.copy(it).multiplyScalar(G).floor(),L=zt;if(Tt.bindFramebuffer(H.FRAMEBUFFER,z)&&X&&Tt.drawBuffers(w,z),Tt.viewport(R),Tt.scissor(V),Tt.setScissorTest(L),nt){const Mt=wt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,W)}else if(ut){const Mt=wt.get(w.texture),Rt=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,Rt)}T=-1},this.readRenderTargetPixels=function(w,B,W,X,z,nt,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Tt.bindFramebuffer(H.FRAMEBUFFER,xt);try{const Mt=w.texture,Rt=Mt.format,It=Mt.type;if(!Vt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&W>=0&&W<=w.height-z&&H.readPixels(B,W,X,z,Ut.convert(Rt),Ut.convert(It),nt)}finally{const Mt=D!==null?wt.get(D).__webglFramebuffer:null;Tt.bindFramebuffer(H.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,B,W,X,z,nt,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const Mt=w.texture,Rt=Mt.format,It=Mt.type;if(!Vt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-X&&W>=0&&W<=w.height-z){Tt.bindFramebuffer(H.FRAMEBUFFER,xt);const yt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,yt),H.bufferData(H.PIXEL_PACK_BUFFER,nt.byteLength,H.STREAM_READ),H.readPixels(B,W,X,z,Ut.convert(Rt),Ut.convert(It),0);const qt=D!==null?wt.get(D).__webglFramebuffer:null;Tt.bindFramebuffer(H.FRAMEBUFFER,qt);const te=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Th(H,te,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,yt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,nt),H.deleteBuffer(yt),H.deleteSync(te),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,W=0){w.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(w.image.width*X),nt=Math.floor(w.image.height*X),ut=B!==null?B.x:0,xt=B!==null?B.y:0;C.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,ut,xt,z,nt),Tt.unbindTexture()},this.copyTextureToTexture=function(w,B,W=null,X=null,z=0){w.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let nt,ut,xt,Mt,Rt,It,yt,qt,te;const ne=w.isCompressedTexture?w.mipmaps[z]:w.image;W!==null?(nt=W.max.x-W.min.x,ut=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,Mt=W.min.x,Rt=W.min.y,It=W.isBox3?W.min.z:0):(nt=ne.width,ut=ne.height,xt=ne.depth||1,Mt=0,Rt=0,It=0),X!==null?(yt=X.x,qt=X.y,te=X.z):(yt=0,qt=0,te=0);const Ae=Ut.convert(B.format),jt=Ut.convert(B.type);let Et;B.isData3DTexture?(C.setTexture3D(B,0),Et=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),Et=H.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),Et=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const fn=H.getParameter(H.UNPACK_ROW_LENGTH),Kt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Xe=H.getParameter(H.UNPACK_SKIP_PIXELS),di=H.getParameter(H.UNPACK_SKIP_ROWS),Ie=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ne.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ne.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Mt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Rt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,It);const qi=w.isDataArrayTexture||w.isData3DTexture,ie=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const tn=wt.get(w),Yi=wt.get(B),Be=wt.get(tn.__renderTarget),Ln=wt.get(Yi.__renderTarget);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,Be.__webglFramebuffer),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Dn=0;Dn<xt;Dn++)qi&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,z,It+Dn),w.isDepthTexture?(ie&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wt.get(B).__webglTexture,z,te+Dn),H.blitFramebuffer(Mt,Rt,nt,ut,yt,qt,nt,ut,H.DEPTH_BUFFER_BIT,H.NEAREST)):ie?H.copyTexSubImage3D(Et,z,yt,qt,te+Dn,Mt,Rt,nt,ut):H.copyTexSubImage2D(Et,z,yt,qt,te+Dn,Mt,Rt,nt,ut);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ie?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Et,z,yt,qt,te,nt,ut,xt,Ae,jt,ne.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Et,z,yt,qt,te,nt,ut,xt,Ae,ne.data):H.texSubImage3D(Et,z,yt,qt,te,nt,ut,xt,Ae,jt,ne):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,z,yt,qt,nt,ut,Ae,jt,ne.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,z,yt,qt,ne.width,ne.height,Ae,ne.data):H.texSubImage2D(H.TEXTURE_2D,z,yt,qt,nt,ut,Ae,jt,ne);H.pixelStorei(H.UNPACK_ROW_LENGTH,fn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Kt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xe),H.pixelStorei(H.UNPACK_SKIP_ROWS,di),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ie),z===0&&B.generateMipmaps&&H.generateMipmap(Et),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,W=null,X=null,z=0){return w.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,W,X,z)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){b=0,A=0,D=null,Tt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class Jo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Jo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bm extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qo extends un{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],m=[];let _=0;const g=[],p=n/2;let f=0;v(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(m,2));function v(){const x=new F,P=new F;let b=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const T=[],y=D/r,R=y*(e-t)+t;for(let V=0;V<=i;V++){const L=V/i,N=L*l+a,O=Math.sin(N),I=Math.cos(N);P.x=R*O,P.y=-y*n+p,P.z=R*I,d.push(P.x,P.y,P.z),x.set(O,A,I).normalize(),u.push(x.x,x.y,x.z),m.push(L,1-y),T.push(_++)}g.push(T)}for(let D=0;D<i;D++)for(let T=0;T<r;T++){const y=g[T][D],R=g[T+1][D],V=g[T+1][D+1],L=g[T][D+1];(t>0||T!==0)&&(h.push(y,R,L),b+=3),(e>0||T!==r-1)&&(h.push(R,V,L),b+=3)}c.addGroup(f,b,0),f+=b}function E(x){const P=_,b=new Lt,A=new F;let D=0;const T=x===!0?t:e,y=x===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,p*y,0),u.push(0,y,0),m.push(.5,.5),_++;const R=_;for(let V=0;V<=i;V++){const N=V/i*l+a,O=Math.cos(N),I=Math.sin(N);A.x=T*I,A.y=p*y,A.z=T*O,d.push(A.x,A.y,A.z),u.push(0,y,0),b.x=O*.5+.5,b.y=I*.5*y+.5,m.push(b.x,b.y),_++}for(let V=0;V<i;V++){const L=P+V,N=R+V;x===!0?h.push(N,N+1,L):h.push(N+1,N,L),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends un{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new F,u=new F,m=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){const v=[],E=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const b=P/e;d.x=-t*Math.cos(i+b*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(i+b*r)*Math.sin(o+E*a),_.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),p.push(b+x,1-E),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const E=h[f][v+1],x=h[f][v],P=h[f+1][v],b=h[f+1][v+1];(f!==0||o>0)&&m.push(E,x,b),(f!==n-1||l<Math.PI)&&m.push(x,P,b)}this.setIndex(m),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ta extends un{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new F,d=new F,u=new F;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const g=_/i*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(g),d.y=(t+e*Math.cos(p))*Math.sin(g),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const g=(i+1)*m+_-1,p=(i+1)*(m-1)+_-1,f=(i+1)*(m-1)+_,v=(i+1)*m+_;o.push(g,p,v),o.push(p,f,v)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ur extends us{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vc extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zm extends vc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wr=new le,dl=new F,fl=new F;class Hm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(dl),fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fl),e.updateMatrixWorld(),Wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vm extends Hm{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends vc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Vm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class km{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pl(){return performance.now()}class ml{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wm extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);const _l={type:"change"},ea={type:"start"},xc={type:"end"},Gs=new nc,gl=new Hn,Xm=Math.cos(70*Eh.DEG2RAD),fe=new F,Re=2*Math.PI,Jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xr=1e-6;class qm extends Wm{constructor(t,e=null){super(t,e),this.state=Jt.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Xn,this._lastTargetPosition=new F,this._quat=new Xn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ml,this._sphericalDelta=new ml,this._scale=1,this._panOffset=new F,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new F,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jm.bind(this),this._onPointerDown=Ym.bind(this),this._onPointerUp=Km.bind(this),this._onContextMenu=n_.bind(this),this._onMouseWheel=Jm.bind(this),this._onKeyDown=Qm.bind(this),this._onTouchStart=t_.bind(this),this._onTouchMove=e_.bind(this),this._onMouseDown=Zm.bind(this),this._onMouseMove=$m.bind(this),this._interceptControlDown=i_.bind(this),this._interceptControlUp=s_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_l),this.update(),this.state=Jt.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===Jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Re:n>Math.PI&&(n-=Re),i<-Math.PI?i+=Re:i>Math.PI&&(i-=Re),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=fe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gs.origin.copy(this.object.position),Gs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gs.direction))<Xm?this.object.lookAt(this.target):(gl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gs.intersectPlane(gl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xr||this._lastTargetPosition.distanceToSquared(this.target)>Xr?(this.dispatchEvent(_l),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Re/60*this.autoRotateSpeed*t:Re/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;fe.copy(i).sub(this.target);let r=fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ym(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function jm(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Km(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xc),this.state=Jt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zm(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Jt.DOLLY;break;case Li.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Jt.ROTATE}break;case Li.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Jt.PAN}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(ea)}function $m(s){switch(this.state){case Jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Jm(s){this.enabled===!1||this.enableZoom===!1||this.state!==Jt.NONE||(s.preventDefault(),this.dispatchEvent(ea),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(xc))}function Qm(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function t_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Jt.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Jt.TOUCH_PAN;break;default:this.state=Jt.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Jt.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Jt.TOUCH_DOLLY_ROTATE;break;default:this.state=Jt.NONE}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(ea)}function e_(s){switch(this._trackPointer(s),this.state){case Jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Jt.NONE}}function n_(s){this.enabled!==!1&&s.preventDefault()}function i_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Je{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Je);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],_=n[8],g=i[0],p=i[1],f=i[2],v=i[3],E=i[4],x=i[5],P=i[6],b=i[7],A=i[8];return r[0]=o*g+a*v+l*P,r[1]=o*p+a*E+l*b,r[2]=o*f+a*x+l*A,r[3]=c*g+h*v+d*P,r[4]=c*p+h*E+d*b,r[5]=c*f+h*x+d*A,r[6]=u*g+m*v+_*P,r[7]=u*p+m*E+_*b,r[8]=u*f+m*x+_*A,e}scale(t,e){e===void 0&&(e=new Je);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const m=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*m;while(--h)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Je);const e=3,n=6,i=r_;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=h;do d=h-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const u=i[r+n*o]/i[r+n*r];c=h;do d=h-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,m=n*l,_=i*l,g=r*o,p=r*a,f=r*l,v=this.elements;return v[3*0+0]=1-(u+_),v[3*0+1]=h-f,v[3*0+2]=d+p,v[3*1+0]=h+f,v[3*1+1]=1-(c+_),v[3*1+2]=m-g,v[3*2+0]=d-p,v[3*2+1]=m+g,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new Je);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const r_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Je([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=o_,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=a_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(vl),vl.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const o_=new M,a_=new M,vl=new M;class Fe{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,xl),c=xl),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Fe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Ml,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ml,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),_=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(_<0||m>_)}}const xl=new M,Ml=[new M,new M,new M,new M,new M,new M,new M,new M];class yl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Mc{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class he{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=l_,i=c_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new he);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-r*l,e.y=i*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new he);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new he),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*i,d=c*i+l*n-o*r,u=c*r+o*i-a*n,m=-o*n-a*i-l*r;return e.x=h*c+m*-o+d*-l-u*-a,e.y=d*c+m*-a+u*-o-h*-l,e.z=u*c+m*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,m=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*m),i=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new he(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new he);const i=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,m,_,g,p;return m=i*l+r*c+o*h+a*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),_=Math.sin(u),g=Math.sin((1-e)*u)/_,p=Math.sin(e*u)/_):(g=1-e,p=e),n.x=g*i+p*l,n.y=g*r+p*c,n.z=g*o+p*h,n.w=g*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new he);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*c),i.y+=u*(o*d+a*l-r*h),i.z+=u*(a*d+r*c-o*l),i.w+=u*(-r*l-o*c-a*h),i}}const l_=new M,c_=new M,h_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class pt{constructor(t){t===void 0&&(t={}),this.id=pt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}pt.idCounter=0;pt.types=h_;class Yt{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new he,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Yt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Yt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(Sl),Sl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Sl=new he;class Ui extends pt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:pt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Ui.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new M,o=new M;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let _=0;_<n.faces.length;_++){h.copy(n.faceNormals[_]),r.vmult(h,h);const g=h.dot(o);g>u&&(u=g,d=_)}const m=[];for(let _=0;_<n.faces[d].length;_++){const g=n.vertices[n.faces[d][_]],p=new M;p.copy(g),r.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,m,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){const c=new M,h=new M,d=new M,u=new M,m=new M,_=new M;let g=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let f=0;f!==p.uniqueAxes.length;f++){n.vmult(p.uniqueAxes[f],c);const v=p.testSepAxis(c,t,e,n,i,r);if(v===!1)return!1;v<g&&(g=v,o.copy(c))}else{const f=a?a.length:p.faces.length;for(let v=0;v<f;v++){const E=a?a[v]:v;c.copy(p.faceNormals[E]),n.vmult(c,c);const x=p.testSepAxis(c,t,e,n,i,r);if(x===!1)return!1;x<g&&(g=x,o.copy(c))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){r.vmult(t.uniqueAxes[f],h);const v=p.testSepAxis(h,t,e,n,i,r);if(v===!1)return!1;v<g&&(g=v,o.copy(h))}else{const f=l?l.length:t.faces.length;for(let v=0;v<f;v++){const E=l?l[v]:v;h.copy(t.faceNormals[E]),r.vmult(h,h);const x=p.testSepAxis(h,t,e,n,i,r);if(x===!1)return!1;x<g&&(g=x,o.copy(h))}}for(let f=0;f!==p.uniqueEdges.length;f++){n.vmult(p.uniqueEdges[f],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],m),u.cross(m,_),!_.almostZero()){_.normalize();const E=p.testSepAxis(_,t,e,n,i,r);if(E===!1)return!1;E<g&&(g=E,o.copy(_))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;Ui.project(a,t,n,i,qr),Ui.project(e,t,r,o,Yr);const l=qr[0],c=qr[1],h=Yr[0],d=Yr[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const l=new M,c=new M,h=new M,d=new M,u=new M,m=new M,_=new M,g=new M,p=this,f=[],v=i,E=f;let x=-1,P=Number.MAX_VALUE;for(let y=0;y<p.faces.length;y++){l.copy(p.faceNormals[y]),n.vmult(l,l);const R=l.dot(t);R<P&&(P=R,x=y)}if(x<0)return;const b=p.faces[x];b.connectedFaces=[];for(let y=0;y<p.faces.length;y++)for(let R=0;R<p.faces[y].length;R++)b.indexOf(p.faces[y][R])!==-1&&y!==x&&b.connectedFaces.indexOf(y)===-1&&b.connectedFaces.push(y);const A=b.length;for(let y=0;y<A;y++){const R=p.vertices[b[y]],V=p.vertices[b[(y+1)%A]];R.vsub(V,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(R),n.vmult(m,m),e.vadd(m,m);const L=b.connectedFaces[y];_.copy(this.faceNormals[L]);const N=this.getPlaneConstantOfFace(L);g.copy(_),n.vmult(g,g);const O=N-g.dot(e);for(this.clipFaceAgainstPlane(v,E,g,O);v.length;)v.shift();for(;E.length;)v.push(E.shift())}_.copy(this.faceNormals[x]);const D=this.getPlaneConstantOfFace(x);g.copy(_),n.vmult(g,g);const T=D-g.dot(e);for(let y=0;y<v.length;y++){let R=g.dot(v[y])+T;if(R<=r&&(console.log(`clamped: depth=${R} to minDist=${r}`),R=r),R<=o){const V=v[y];if(R<=1e-6){const L={point:V,normal:g,depth:R};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,r<0)if(o<0){const d=new M;d.copy(c),e.push(d)}else{const d=new M;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new M;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,l,c,h,d,u=new M;for(let m=0;m<r.length;m++){u.copy(r[m]),e.vmult(u,u),t.vadd(u,u);const _=u;(o===void 0||_.x<o)&&(o=_.x),(c===void 0||_.x>c)&&(c=_.x),(a===void 0||_.y<a)&&(a=_.y),(h===void 0||_.y>h)&&(h=_.y),(l===void 0||_.z<l)&&(l=_.z),(d===void 0||_.z>d)&&(d=_.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=new M;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new M;t.vsub(l,c);const h=a.dot(c),d=new M;r.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,r){const o=t.vertices.length,a=u_;let l=0,c=0;const h=d_,d=t.vertices;h.setZero(),Yt.vectorToLocalFrame(n,i,e,a),Yt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let m=1;m<o;m++){const _=d[m].dot(a);_>l&&(l=_),_<c&&(c=_)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}r[0]=l,r[1]=c}}const qr=[],Yr=[];new M;const u_=new M,d_=new M;class ds extends pt{constructor(t){super({type:pt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Ui({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),ds.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)zn.set(r[o][0],r[o][1],r[o][2]),e.vmult(zn,zn),t.vadd(zn,zn),n(zn.x,zn.y,zn.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;en[0].set(r.x,r.y,r.z),en[1].set(-r.x,r.y,r.z),en[2].set(-r.x,-r.y,r.z),en[3].set(-r.x,-r.y,-r.z),en[4].set(r.x,-r.y,-r.z),en[5].set(r.x,r.y,-r.z),en[6].set(-r.x,r.y,-r.z),en[7].set(r.x,-r.y,r.z);const o=en[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=en[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const zn=new M,en=[new M,new M,new M,new M,new M,new M,new M,new M],dr={DYNAMIC:1,STATIC:2,KINEMATIC:4},na={AWAKE:0,SLEEPY:1,SLEEPING:2};class ft extends Mc{constructor(t){t===void 0&&(t={}),super(),this.id=ft.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ft.STATIC:ft.DYNAMIC,typeof t.type==typeof ft.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ft.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new he,this.initQuaternion=new he,this.previousQuaternion=new he,this.interpolatedQuaternion=new he,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new Je,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new Je,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Fe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ft.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ft.SLEEPING&&this.dispatchEvent(ft.wakeupEvent)}sleep(){this.sleepState=ft.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ft.AWAKE&&n<i?(this.sleepState=ft.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ft.sleepyEvent)):e===ft.SLEEPY&&n>i?this.wakeUp():e===ft.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ft.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ft.SLEEPING||this.type===ft.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,r=new he;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=f_,o=p_,a=this.quaternion,l=this.aabb,c=m_;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=__,i=g_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const n=v_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;const n=x_,i=M_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ft.DYNAMIC&&(this.sleepState===ft.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const n=e,i=y_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=S_;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;const n=E_,i=w_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=T_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ds.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ft.DYNAMIC||this.type===ft.KINEMATIC)||this.sleepState===ft.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=a.x*m*u.x,i.y+=a.y*m*u.y,i.z+=a.z*m*u.z;const _=d.elements,g=this.angularFactor,p=l.x*g.x,f=l.y*g.y,v=l.z*g.z;r.x+=t*(_[0]*p+_[1]*f+_[2]*v),r.y+=t*(_[3]*p+_[4]*f+_[5]*v),r.z+=t*(_[6]*p+_[7]*f+_[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ft.idCounter=0;ft.COLLIDE_EVENT_NAME="collide";ft.DYNAMIC=dr.DYNAMIC;ft.STATIC=dr.STATIC;ft.KINEMATIC=dr.KINEMATIC;ft.AWAKE=na.AWAKE;ft.SLEEPY=na.SLEEPY;ft.SLEEPING=na.SLEEPING;ft.wakeupEvent={type:"wakeup"};ft.sleepyEvent={type:"sleepy"};ft.sleepEvent={type:"sleep"};const f_=new M,p_=new he,m_=new Fe,__=new Je,g_=new Je;new Je;const v_=new M,x_=new M,M_=new M,y_=new M,S_=new M,E_=new M,w_=new M,T_=new M;class b_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&ft.STATIC||t.sleepState===ft.SLEEPING)&&(e.type&ft.STATIC||e.sleepState===ft.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=A_;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=C_,i=R_,r=P_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const A_=new M;new M;new he;new M;const C_={keys:[]},R_=[],P_=[];new M;new M;new M;class L_ extends b_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class ir{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let yc,Sc,Ec,wc,Tc,bc,Ac;const ia={CLOSEST:1,ANY:2,ALL:4};yc=pt.types.SPHERE;Sc=pt.types.PLANE;Ec=pt.types.BOX;wc=pt.types.CYLINDER;Tc=pt.types.CONVEXPOLYHEDRON;bc=pt.types.HEIGHTFIELD;Ac=pt.types.TRIMESH;class de{get[yc](){return this._intersectSphere}get[Sc](){return this._intersectPlane}get[Ec](){return this._intersectBox}get[wc](){return this._intersectConvex}get[Tc](){return this._intersectConvex}get[bc](){return this._intersectHeightfield}get[Ac](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=de.ANY,this.result=new ir,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||de.ANY,this.result=e.result||new ir,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(El),jr.length=0,t.broadphase.aabbQuery(t,El,jr),this.intersectBodies(jr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=D_,r=I_;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(Y_(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const _=new M,g=new M,p=new M;o.vsub(n,_);const f=-c.dot(_)/m;l.scale(f,g),o.vadd(g,p),this.reportIntersection(c,p,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=N_;o.from.copy(this.from),o.to.copy(this.to),Yt.pointToLocalFrame(n,e,o.from,o.from),Yt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=U_;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Fe;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let m=l;m<h;m++)for(let _=c;_<d;_++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,_,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(m,_,!1),Yt.pointToWorldFrame(n,e,t.pillarOffset,ks),this._intersectConvex(t.pillarConvex,e,ks,i,r,wl),this.result.shouldStop)return;t.getConvexTrianglePillar(m,_,!0),Yt.pointToWorldFrame(n,e,t.pillarOffset,ks),this._intersectConvex(t.pillarConvex,e,ks,i,r,wl)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,m=F_,_=O_;if(!(u<0))if(u===0)o.lerp(a,u,m),m.vsub(n,_),_.normalize(),this.reportIntersection(_,m,r,i,-1);else{const g=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(g>=0&&g<=1&&(o.lerp(a,g,m),m.vsub(n,_),_.normalize(),this.reportIntersection(_,m,r,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,m),m.vsub(n,_),_.normalize(),this.reportIntersection(_,m,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=B_,l=Tl,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,_=this.from,g=this.to,p=_.distanceTo(g),f=c?c.length:h.length,v=this.result;for(let E=0;!v.shouldStop&&E<f;E++){const x=c?c[E]:E,P=h[x],b=u[x],A=e,D=n;l.copy(d[P[0]]),A.vmult(l,l),l.vadd(D,l),l.vsub(_,l),A.vmult(b,a);const T=m.dot(a);if(Math.abs(T)<this.precision)continue;const y=a.dot(l)/T;if(!(y<0)){m.scale(y,Pe),Pe.vadd(_,Pe),Ke.copy(d[P[0]]),A.vmult(Ke,Ke),D.vadd(Ke,Ke);for(let R=1;!v.shouldStop&&R<P.length-1;R++){nn.copy(d[P[R]]),sn.copy(d[P[R+1]]),A.vmult(nn,nn),A.vmult(sn,sn),D.vadd(nn,nn),D.vadd(sn,sn);const V=Pe.distanceTo(_);!(de.pointInTriangle(Pe,Ke,nn,sn)||de.pointInTriangle(Pe,nn,Ke,sn))||V>p||this.reportIntersection(a,Pe,r,i,x)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=z_,l=X_,c=q_,h=Tl,d=H_,u=V_,m=G_,_=W_,g=k_,p=t.indices;t.vertices;const f=this.from,v=this.to,E=this.direction;c.position.copy(n),c.quaternion.copy(e),Yt.vectorToLocalFrame(n,e,E,d),Yt.pointToLocalFrame(n,e,f,u),Yt.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const x=u.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let P=0,b=l.length;!this.result.shouldStop&&P!==b;P++){const A=l[P];t.getNormal(A,a),t.getVertex(p[A*3],Ke),Ke.vsub(u,h);const D=d.dot(a),T=a.dot(h)/D;if(T<0)continue;d.scale(T,Pe),Pe.vadd(u,Pe),t.getVertex(p[A*3+1],nn),t.getVertex(p[A*3+2],sn);const y=Pe.distanceSquared(u);!(de.pointInTriangle(Pe,nn,Ke,sn)||de.pointInTriangle(Pe,Ke,nn,sn))||y>x||(Yt.vectorToWorldFrame(e,a,g),Yt.pointToWorldFrame(n,e,Pe,_),this.reportIntersection(g,_,r,i,A))}l.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case de.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case de.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case de.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ri),n.vsub(e,Qi),t.vsub(e,Kr);const r=ri.dot(ri),o=ri.dot(Qi),a=ri.dot(Kr),l=Qi.dot(Qi),c=Qi.dot(Kr);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}de.CLOSEST=ia.CLOSEST;de.ANY=ia.ANY;de.ALL=ia.ALL;const El=new Fe,jr=[],Qi=new M,Kr=new M,D_=new M,I_=new he,Pe=new M,Ke=new M,nn=new M,sn=new M;new M;new ir;const wl={faceList:[0]},ks=new M,N_=new de,U_=[],F_=new M,O_=new M,B_=new M;new M;new M;const Tl=new M,z_=new M,H_=new M,V_=new M,G_=new M,k_=new M,W_=new M;new Fe;const X_=[],q_=new Yt,ri=new M,Ws=new M;function Y_(s,t,e){e.vsub(s,ri);const n=ri.dot(t);return t.scale(n,Ws),Ws.vadd(s,Ws),e.distanceTo(Ws)}class j_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class bl{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class fs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=fs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new bl,this.jacobianElementB=new bl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return r.scale(c,Al),a.scale(h,Cl),n.invInertiaWorldSolve.vmult(o,Rl),i.invInertiaWorldSolve.vmult(l,Pl),t.multiplyVectors(Al,Rl)+e.multiplyVectors(Cl,Pl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Xs),c+=Xs.dot(t.rotational),l.vmult(e.rotational,Xs),c+=Xs.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=K_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}fs.idCounter=0;const Al=new M,Cl=new M,Rl=new M,Pl=new M,Xs=new M,K_=new M;class Z_ extends fs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=$_,c=J_,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=r.velocity,m=r.angularVelocity;r.force,r.torque;const _=Q_,g=this.jacobianElementA,p=this.jacobianElementB,f=this.ni;o.cross(f,l),a.cross(f,c),f.negate(g.spatial),l.negate(g.rotational),p.spatial.copy(f),p.rotational.copy(c),_.copy(r.position),_.vadd(a,_),_.vsub(i.position,_),_.vsub(o,_);const v=f.dot(_),E=this.restitution+1,x=E*u.dot(f)-E*h.dot(f)+m.dot(c)-d.dot(l),P=this.computeGiMf();return-v*e-x*n-t*P}getImpactVelocityAlongNormal(){const t=tg,e=eg,n=ng,i=ig,r=sg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const $_=new M,J_=new M,Q_=new M,tg=new M,eg=new M,ng=new M,ig=new M,sg=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Ll extends fs{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=rg,o=og,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const rg=new M,og=new M;class ps{constructor(t,e,n){n=j_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ps.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ps.idCounter=0;class ms{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ms.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ms.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new de;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class ag extends pt{constructor(t){if(super({type:pt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-r,i[l]=t[l]+r}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class lg extends Ui{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=i,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new M(-e*u(0),-n*.5,e*d(0))),c.push(0),o.push(new M(-t*u(0),n*.5,t*d(0))),h.push(1);for(let _=0;_<r;_++){const g=2*Math.PI/r*(_+1),p=2*Math.PI/r*(_+.5);_<r-1?(o.push(new M(-e*u(g),-n*.5,e*d(g))),c.push(2*_+2),o.push(new M(-t*u(g),n*.5,t*d(g))),h.push(2*_+3),l.push([2*_,2*_+1,2*_+3,2*_+2])):l.push([2*_,2*_+1,1,0]),(r%2===1||_<r/2)&&a.push(new M(-u(p),0,d(p)))}l.push(c),a.push(new M(0,1,0));const m=[];for(let _=0;_<h.length;_++)m.push(h[h.length-_-1]);l.push(m),super({vertices:o,faces:l,axes:a}),this.type=pt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Fe;new M;new Fe;new M;new M;new M;new M;new M;new M;new M;new Fe;new M;new Yt;new Fe;class cg{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class hg extends cg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,m,_,g,p;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const f=dg,v=fg,E=ug;f.length=a,v.length=a,E.length=a;for(let x=0;x!==a;x++){const P=o[x];E[x]=0,v[x]=P.computeB(h),f[x]=1/P.computeC()}if(a!==0){for(let b=0;b!==c;b++){const A=l[b],D=A.vlambda,T=A.wlambda;D.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){_=0;for(let b=0;b!==a;b++){const A=o[b];d=v[b],u=f[b],p=E[b],g=A.computeGWlambda(),m=u*(d-g-A.eps*p),p+m<A.minForce?m=A.minForce-p:p+m>A.maxForce&&(m=A.maxForce-p),E[b]+=m,_+=m>0?m:-m,A.addToWlambda(m)}if(_*_<r)break}for(let b=0;b!==c;b++){const A=l[b],D=A.velocity,T=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),D.vadd(A.vlambda,D),A.wlambda.vmul(A.angularFactor,A.wlambda),T.vadd(A.wlambda,T)}let x=o.length;const P=1/h;for(;x--;)o[x].multiplier=E[x]*P}return n}}const ug=[],dg=[],fg=[];class pg{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class mg extends pg{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const se={sphereSphere:pt.types.SPHERE,spherePlane:pt.types.SPHERE|pt.types.PLANE,boxBox:pt.types.BOX|pt.types.BOX,sphereBox:pt.types.SPHERE|pt.types.BOX,planeBox:pt.types.PLANE|pt.types.BOX,convexConvex:pt.types.CONVEXPOLYHEDRON,sphereConvex:pt.types.SPHERE|pt.types.CONVEXPOLYHEDRON,planeConvex:pt.types.PLANE|pt.types.CONVEXPOLYHEDRON,boxConvex:pt.types.BOX|pt.types.CONVEXPOLYHEDRON,sphereHeightfield:pt.types.SPHERE|pt.types.HEIGHTFIELD,boxHeightfield:pt.types.BOX|pt.types.HEIGHTFIELD,convexHeightfield:pt.types.CONVEXPOLYHEDRON|pt.types.HEIGHTFIELD,sphereParticle:pt.types.PARTICLE|pt.types.SPHERE,planeParticle:pt.types.PLANE|pt.types.PARTICLE,boxParticle:pt.types.BOX|pt.types.PARTICLE,convexParticle:pt.types.PARTICLE|pt.types.CONVEXPOLYHEDRON,cylinderCylinder:pt.types.CYLINDER,sphereCylinder:pt.types.SPHERE|pt.types.CYLINDER,planeCylinder:pt.types.PLANE|pt.types.CYLINDER,boxCylinder:pt.types.BOX|pt.types.CYLINDER,convexCylinder:pt.types.CONVEXPOLYHEDRON|pt.types.CYLINDER,heightfieldCylinder:pt.types.HEIGHTFIELD|pt.types.CYLINDER,particleCylinder:pt.types.PARTICLE|pt.types.CYLINDER,sphereTrimesh:pt.types.SPHERE|pt.types.TRIMESH,planeTrimesh:pt.types.PLANE|pt.types.TRIMESH};class _g{get[se.sphereSphere](){return this.sphereSphere}get[se.spherePlane](){return this.spherePlane}get[se.boxBox](){return this.boxBox}get[se.sphereBox](){return this.sphereBox}get[se.planeBox](){return this.planeBox}get[se.convexConvex](){return this.convexConvex}get[se.sphereConvex](){return this.sphereConvex}get[se.planeConvex](){return this.planeConvex}get[se.boxConvex](){return this.boxConvex}get[se.sphereHeightfield](){return this.sphereHeightfield}get[se.boxHeightfield](){return this.boxHeightfield}get[se.convexHeightfield](){return this.convexHeightfield}get[se.sphereParticle](){return this.sphereParticle}get[se.planeParticle](){return this.planeParticle}get[se.boxParticle](){return this.boxParticle}get[se.convexParticle](){return this.convexParticle}get[se.cylinderCylinder](){return this.convexConvex}get[se.sphereCylinder](){return this.sphereConvex}get[se.planeCylinder](){return this.planeConvex}get[se.boxCylinder](){return this.boxConvex}get[se.convexCylinder](){return this.convexConvex}get[se.heightfieldCylinder](){return this.heightfieldCylinder}get[se.particleCylinder](){return this.particleCylinder}get[se.sphereTrimesh](){return this.sphereTrimesh}get[se.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new mg,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Z_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const _=this.frictionEquationPool,g=_.length?_.pop():new Ll(n,i,u*m),p=_.length?_.pop():new Ll(n,i,u*m);return g.bi=p.bi=n,g.bj=p.bj=i,g.minForce=p.minForce=-u*m,g.maxForce=p.maxForce=u*m,g.ri.copy(t.ri),g.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(g.t,p.t),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.enabled=p.enabled=t.enabled,e.push(g,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ei.setZero(),Ai.setZero(),Ci.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(ei.vadd(e.ni,ei),Ai.vadd(e.ri,Ai),Ci.vadd(e.rj,Ci)):(ei.vsub(e.ni,ei),Ai.vadd(e.rj,Ai),Ci.vadd(e.ri,Ci));const o=1/t;Ai.scale(o,n.ri),Ci.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ei.normalize(),ei.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=xg,c=Mg,h=gg,d=vg;for(let u=0,m=t.length;u!==m;u++){const _=t[u],g=e[u];let p=null;_.material&&g.material&&(p=n.getContactMaterial(_.material,g.material)||null);const f=_.type&ft.KINEMATIC&&g.type&ft.STATIC||_.type&ft.STATIC&&g.type&ft.KINEMATIC||_.type&ft.KINEMATIC&&g.type&ft.KINEMATIC;for(let v=0;v<_.shapes.length;v++){_.quaternion.mult(_.shapeOrientations[v],l),_.quaternion.vmult(_.shapeOffsets[v],h),h.vadd(_.position,h);const E=_.shapes[v];for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],c),g.quaternion.vmult(g.shapeOffsets[x],d),d.vadd(g.position,d);const P=g.shapes[x];if(!(E.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&E.collisionFilterGroup)||h.distanceTo(d)>E.boundingSphereRadius+P.boundingSphereRadius)continue;let b=null;E.material&&P.material&&(b=n.getContactMaterial(E.material,P.material)||null),this.currentContactMaterial=b||p||n.defaultContactMaterial;const A=E.type|P.type,D=this[A];if(D){let T=!1;E.type<P.type?T=D.call(this,E,P,h,d,l,c,_,g,E,P,f):T=D.call(this,P,E,d,h,c,l,g,_,E,P,f),T&&f&&(n.shapeOverlapKeeper.set(E.id,P.id),n.bodyOverlapKeeper.set(_.id,g.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,qs),u.ni.scale(u.ni.dot(qs),Dl),qs.vsub(Dl,u.rj),-qs.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,_=u.rj;m.vadd(n,m),m.vsub(a.position,m),_.vadd(i,_),_.vsub(l.position,_),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}sphereBox(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool,m=qg;n.vsub(i,Ys),e.getSideNormals(m,o);const _=t.radius;let g=!1;const p=jg,f=Kg,v=Zg;let E=null,x=0,P=0,b=0,A=null;for(let I=0,Y=m.length;I!==Y&&g===!1;I++){const G=kg;G.copy(m[I]);const Z=G.length();G.normalize();const st=Ys.dot(G);if(st<Z+_&&st>0){const ct=Wg,it=Xg;ct.copy(m[(I+1)%3]),it.copy(m[(I+2)%3]);const zt=ct.length(),j=it.length();ct.normalize(),it.normalize();const tt=Ys.dot(ct),vt=Ys.dot(it);if(tt<zt&&tt>-zt&&vt<j&&vt>-j){const ot=Math.abs(st-Z-_);if((A===null||ot<A)&&(A=ot,P=tt,b=vt,E=Z,p.copy(G),f.copy(ct),v.copy(it),x++,d))return!0}}}if(x){g=!0;const I=this.createContactEquation(a,l,t,e,c,h);p.scale(-_,I.ri),I.ni.copy(p),I.ni.negate(I.ni),p.scale(E,p),f.scale(P,f),p.vadd(f,p),v.scale(b,v),p.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let D=u.get();const T=Yg;for(let I=0;I!==2&&!g;I++)for(let Y=0;Y!==2&&!g;Y++)for(let G=0;G!==2&&!g;G++)if(D.set(0,0,0),I?D.vadd(m[0],D):D.vsub(m[0],D),Y?D.vadd(m[1],D):D.vsub(m[1],D),G?D.vadd(m[2],D):D.vsub(m[2],D),i.vadd(D,T),T.vsub(n,T),T.lengthSquared()<_*_){if(d)return!0;g=!0;const Z=this.createContactEquation(a,l,t,e,c,h);Z.ri.copy(T),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(_,Z.ri),Z.rj.copy(D),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(l.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}u.release(D),D=null;const y=u.get(),R=u.get(),V=u.get(),L=u.get(),N=u.get(),O=m.length;for(let I=0;I!==O&&!g;I++)for(let Y=0;Y!==O&&!g;Y++)if(I%3!==Y%3){m[Y].cross(m[I],y),y.normalize(),m[I].vadd(m[Y],R),V.copy(n),V.vsub(R,V),V.vsub(i,V);const G=V.dot(y);y.scale(G,L);let Z=0;for(;Z===I%3||Z===Y%3;)Z++;N.copy(n),N.vsub(L,N),N.vsub(R,N),N.vsub(i,N);const st=Math.abs(G),ct=N.length();if(st<m[Z].length()&&ct<_){if(d)return!0;g=!0;const it=this.createContactEquation(a,l,t,e,c,h);R.vadd(L,it.rj),it.rj.copy(it.rj),N.negate(it.ni),it.ni.normalize(),it.ri.copy(it.rj),it.ri.vadd(i,it.ri),it.ri.vsub(n,it.ri),it.ri.normalize(),it.ri.scale(_,it.ri),it.ri.vadd(n,it.ri),it.ri.vsub(a.position,it.ri),it.rj.vadd(i,it.rj),it.rj.vsub(l.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}}u.release(y,R,V,L,N)}planeBox(t,e,n,i,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}convexConvex(t,e,n,i,r,o,a,l,c,h,d,u,m){const _=uv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,_,u,m)){const g=[],p=dv;t.clipAgainstHull(n,r,e,i,o,_,-100,100,g);let f=0;for(let v=0;v!==g.length;v++){if(d)return!0;const E=this.createContactEquation(a,l,t,e,c,h),x=E.ri,P=E.rj;_.negate(E.ni),g[v].normal.negate(p),p.scale(g[v].depth,p),g[v].point.vadd(p,x),P.copy(g[v].point),x.vsub(n,x),P.vsub(i,P),x.vadd(n,x),x.vsub(a.position,x),P.vadd(i,P),P.vsub(l.position,P),this.result.push(E),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(E,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,r,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,$g);const m=e.faceNormals,_=e.faces,g=e.vertices,p=t.radius;let f=!1;for(let v=0;v!==g.length;v++){const E=g[v],x=ev;o.vmult(E,x),i.vadd(x,x);const P=tv;if(x.vsub(n,P),P.lengthSquared()<p*p){if(d)return!0;f=!0;const b=this.createContactEquation(a,l,t,e,c,h);b.ri.copy(P),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(p,b.ri),x.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,E=_.length;v!==E&&f===!1;v++){const x=m[v],P=_[v],b=nv;o.vmult(x,b);const A=iv;o.vmult(g[P[0]],A),A.vadd(i,A);const D=sv;b.scale(-p,D),n.vadd(D,D);const T=rv;D.vsub(A,T);const y=T.dot(b),R=ov;if(n.vsub(A,R),y<0&&R.dot(b)>0){const V=[];for(let L=0,N=P.length;L!==N;L++){const O=u.get();o.vmult(g[P[L]],O),i.vadd(O,O),V.push(O)}if(Gg(V,b,n)){if(d)return!0;f=!0;const L=this.createContactEquation(a,l,t,e,c,h);b.scale(-p,L.ri),b.negate(L.ni);const N=u.get();b.scale(-y,N);const O=u.get();b.scale(-p,O),n.vsub(i,L.rj),L.rj.vadd(O,L.rj),L.rj.vadd(N,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),u.release(N),u.release(O),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let I=0,Y=V.length;I!==Y;I++)u.release(V[I]);return}else for(let L=0;L!==P.length;L++){const N=u.get(),O=u.get();o.vmult(g[P[(L+1)%P.length]],N),o.vmult(g[P[(L+2)%P.length]],O),i.vadd(N,N),i.vadd(O,O);const I=Jg;O.vsub(N,I);const Y=Qg;I.unit(Y);const G=u.get(),Z=u.get();n.vsub(N,Z);const st=Z.dot(Y);Y.scale(st,G),G.vadd(N,G);const ct=u.get();if(G.vsub(n,ct),st>0&&st*st<I.lengthSquared()&&ct.lengthSquared()<p*p){if(d)return!0;const it=this.createContactEquation(a,l,t,e,c,h);G.vsub(i,it.rj),G.vsub(n,it.ni),it.ni.normalize(),it.ni.scale(p,it.ri),it.rj.vadd(i,it.rj),it.rj.vsub(l.position,it.rj),it.ri.vadd(n,it.ri),it.ri.vsub(a.position,it.ri),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult);for(let zt=0,j=V.length;zt!==j;zt++)u.release(V[zt]);u.release(N),u.release(O),u.release(G),u.release(ct),u.release(Z);return}u.release(N),u.release(O),u.release(G),u.release(ct),u.release(Z)}for(let L=0,N=V.length;L!==N;L++)u.release(V[L])}}}planeConvex(t,e,n,i,r,o,a,l,c,h,d){const u=av,m=lv;m.set(0,0,1),r.vmult(m,m);let _=0;const g=cv;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,g),m.dot(g)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),E=hv;m.scale(m.dot(g),E),u.vsub(E,E),E.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,m=t.radius,_=e.elementSize,g=wv,p=Ev;Yt.pointToLocalFrame(i,o,n,p);let f=Math.floor((p.x-m)/_)-1,v=Math.ceil((p.x+m)/_)+1,E=Math.floor((p.y-m)/_)-1,x=Math.ceil((p.y+m)/_)+1;if(v<0||x<0||f>u.length||E>u[0].length)return;f<0&&(f=0),v<0&&(v=0),E<0&&(E=0),x<0&&(x=0),f>=u.length&&(f=u.length-1),v>=u.length&&(v=u.length-1),x>=u[0].length&&(x=u[0].length-1),E>=u[0].length&&(E=u[0].length-1);const P=[];e.getRectMinMax(f,E,v,x,P);const b=P[0],A=P[1];if(p.z-m>A||p.z+m<b)return;const D=this.result;for(let T=f;T<v;T++)for(let y=E;y<x;y++){const R=D.length;let V=!1;if(e.getConvexTrianglePillar(T,y,!1),Yt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,l,t,e,d)),d&&V||(e.getConvexTrianglePillar(T,y,!0),Yt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,g,r,o,a,l,t,e,d)),d&&V))return!0;if(D.length-R>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,l,c,h,d){const u=e.data,m=e.elementSize,_=t.boundingSphereRadius,g=yv,p=Sv,f=Mv;Yt.pointToLocalFrame(i,o,n,f);let v=Math.floor((f.x-_)/m)-1,E=Math.ceil((f.x+_)/m)+1,x=Math.floor((f.y-_)/m)-1,P=Math.ceil((f.y+_)/m)+1;if(E<0||P<0||v>u.length||x>u[0].length)return;v<0&&(v=0),E<0&&(E=0),x<0&&(x=0),P<0&&(P=0),v>=u.length&&(v=u.length-1),E>=u.length&&(E=u.length-1),P>=u[0].length&&(P=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const b=[];e.getRectMinMax(v,x,E,P,b);const A=b[0],D=b[1];if(!(f.z-_>D||f.z+_<A))for(let T=v;T<E;T++)for(let y=x;y<P;y++){let R=!1;if(e.getConvexTrianglePillar(T,y,!1),Yt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,l,null,null,d,p,null)),d&&R||(e.getConvexTrianglePillar(T,y,!0),Yt.pointToWorldFrame(i,o,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,g,r,o,a,l,null,null,d,p,null)),d&&R))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,h,d){const u=_v;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,h);u.normalize(),_.rj.copy(u),_.rj.scale(t.radius,_.rj),_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,h,d){const u=fv;u.set(0,0,1),a.quaternion.vmult(u,u);const m=pv;if(i.vsub(a.position,m),u.dot(m)<=0){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0);const p=mv;u.scale(u.dot(i),p),i.vsub(p,p),g.rj.copy(p),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexParticle(t,e,n,i,r,o,a,l,c,h,d){let u=-1;const m=vv,_=xv;let g=null;const p=gv;if(p.copy(i),p.vsub(n,p),r.conjugate(Il),Il.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let f=0,v=t.faces.length;f!==v;f++){const E=[t.worldVertices[t.faces[f][0]]],x=t.worldFaceNormals[f];i.vsub(E[0],Nl);const P=-x.dot(Nl);if(g===null||Math.abs(P)<Math.abs(g)){if(d)return!0;g=P,u=f,m.copy(x)}}if(u!==-1){const f=this.createContactEquation(l,a,e,t,c,h);m.scale(g,_),_.vadd(i,_),_.vsub(n,_),f.rj.copy(_),m.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,E=f.rj;v.vadd(i,v),v.vsub(l.position,v),E.vadd(n,E),E.vsub(a.position,E),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,i,r,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=Cg,m=Rg,_=Pg,g=Lg,p=Dg,f=Ig,v=Og,E=Ag,x=Tg,P=Bg;Yt.pointToLocalFrame(i,o,n,p);const b=t.radius;v.lowerBound.set(p.x-b,p.y-b,p.z-b),v.upperBound.set(p.x+b,p.y+b,p.z+b),e.getTrianglesInAABB(v,P);const A=bg,D=t.radius*t.radius;for(let L=0;L<P.length;L++)for(let N=0;N<3;N++)if(e.getVertex(e.indices[P[L]*3+N],A),A.vsub(p,x),x.lengthSquared()<=D){if(E.copy(A),Yt.pointToWorldFrame(i,o,E,A),A.vsub(n,x),d)return!0;let O=this.createContactEquation(a,l,t,e,c,h);O.ni.copy(x),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.copy(A),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let L=0;L<P.length;L++)for(let N=0;N<3;N++){e.getVertex(e.indices[P[L]*3+N],u),e.getVertex(e.indices[P[L]*3+(N+1)%3],m),m.vsub(u,_),p.vsub(m,f);const O=f.dot(_);p.vsub(u,f);let I=f.dot(_);if(I>0&&O<0&&(p.vsub(u,f),g.copy(_),g.normalize(),I=f.dot(g),g.scale(I,f),f.vadd(u,f),f.distanceTo(p)<t.radius)){if(d)return!0;const G=this.createContactEquation(a,l,t,e,c,h);f.vsub(p,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),Yt.pointToWorldFrame(i,o,f,f),f.vsub(l.position,G.rj),Yt.vectorToWorldFrame(o,G.ni,G.ni),Yt.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const T=Ng,y=Ug,R=Fg,V=wg;for(let L=0,N=P.length;L!==N;L++){e.getTriangleVertices(P[L],T,y,R),e.getNormal(P[L],V),p.vsub(T,f);let O=f.dot(V);if(V.scale(O,f),p.vsub(f,f),O=f.distanceTo(p),de.pointInTriangle(f,T,y,R)&&O<t.radius){if(d)return!0;let I=this.createContactEquation(a,l,t,e,c,h);f.vsub(p,I.ni),I.ni.normalize(),I.ni.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),Yt.pointToWorldFrame(i,o,f,f),f.vsub(l.position,I.rj),Yt.vectorToWorldFrame(o,I.ni,I.ni),Yt.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,h,d){const u=new M,m=yg;m.set(0,0,1),r.vmult(m,m);for(let _=0;_<e.vertices.length/3;_++){e.getVertex(_,u);const g=new M;g.copy(u),Yt.pointToWorldFrame(i,o,g,u);const p=Sg;if(u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(m);const E=Eg;m.scale(p.dot(m),E),u.vsub(E,E),v.ri.copy(E),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ei=new M,Ai=new M,Ci=new M,gg=new M,vg=new M,xg=new he,Mg=new he,yg=new M,Sg=new M,Eg=new M,wg=new M,Tg=new M;new M;const bg=new M,Ag=new M,Cg=new M,Rg=new M,Pg=new M,Lg=new M,Dg=new M,Ig=new M,Ng=new M,Ug=new M,Fg=new M,Og=new Fe,Bg=[],qs=new M,Dl=new M,zg=new M,Hg=new M,Vg=new M;function Gg(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=zg;s[(r+1)%i].vsub(o,a);const l=Hg;a.cross(t,l);const c=Vg;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Ys=new M,kg=new M,Wg=new M,Xg=new M,qg=[new M,new M,new M,new M,new M,new M],Yg=new M,jg=new M,Kg=new M,Zg=new M,$g=new M,Jg=new M,Qg=new M,tv=new M,ev=new M,nv=new M,iv=new M,sv=new M,rv=new M,ov=new M;new M;new M;const av=new M,lv=new M,cv=new M,hv=new M,uv=new M,dv=new M,fv=new M,pv=new M,mv=new M,_v=new M,Il=new he,gv=new M;new M;const vv=new M,Nl=new M,xv=new M,Mv=new M,yv=new M,Sv=[0],Ev=new M,wv=new M;class Ul{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Fl(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Fl(e,h)}}}function Fl(s,t){s.push((t&4294901760)>>16,t&65535)}const Zr=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class Tv{constructor(){this.data={keys:[]}}get(t,e){const n=Zr(t,e);return this.data[n]}set(t,e,n){const i=Zr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Zr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class bv extends Mc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new L_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new hg,this.constraints=[],this.narrowphase=new _g(this),this.collisionMatrix=new yl,this.collisionMatrixPrevious=new yl,this.bodyOverlapKeeper=new Ul,this.shapeOverlapKeeper=new Ul,this.contactmaterials=[],this.contactMaterialTable=new Tv,this.defaultMaterial=new ms("default"),this.defaultContactMaterial=new ps(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ir?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=de.ALL,n.from=t,n.to=e,n.callback=i,$r.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=de.ANY,n.from=t,n.to=e,n.result=i,$r.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=de.CLOSEST,n.from=t,n.to=e,n.result=i,$r.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ft&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=pe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=pe.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(pe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Lv,i=Dv,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=ft.DYNAMIC;let u=-1/0;const m=this.constraints,_=Pv;l.length();const g=l.x,p=l.y,f=l.z;let v=0;for(c&&(u=pe.now()),v=0;v!==r;v++){const L=o[v];if(L.type===d){const N=L.force,O=L.mass;N.x+=O*g,N.y+=O*p,N.z+=O*f}}for(let L=0,N=this.subsystems.length;L!==N;L++)this.subsystems[L].update();c&&(u=pe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=pe.now()-u);let E=m.length;for(v=0;v!==E;v++){const L=m[v];if(!L.collideConnected)for(let N=n.length-1;N>=0;N-=1)(L.bodyA===n[N]&&L.bodyB===i[N]||L.bodyB===n[N]&&L.bodyA===i[N])&&(n.splice(N,1),i.splice(N,1))}this.collisionMatrixTick(),c&&(u=pe.now());const x=Rv,P=e.length;for(v=0;v!==P;v++)x.push(e[v]);e.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)_.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,_),c&&(h.narrowphase=pe.now()-u),c&&(u=pe.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const A=e.length;for(let L=0;L!==A;L++){const N=e[L],O=N.bi,I=N.bj,Y=N.si,G=N.sj;let Z;if(O.material&&I.material?Z=this.getContactMaterial(O.material,I.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,O.material&&I.material&&(O.material.friction>=0&&I.material.friction>=0&&O.material.friction*I.material.friction,O.material.restitution>=0&&I.material.restitution>=0&&(N.restitution=O.material.restitution*I.material.restitution)),a.addEquation(N),O.allowSleep&&O.type===ft.DYNAMIC&&O.sleepState===ft.SLEEPING&&I.sleepState===ft.AWAKE&&I.type!==ft.STATIC){const st=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),ct=I.sleepSpeedLimit**2;st>=ct*2&&(O.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===ft.DYNAMIC&&I.sleepState===ft.SLEEPING&&O.sleepState===ft.AWAKE&&O.type!==ft.STATIC){const st=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),ct=O.sleepSpeedLimit**2;st>=ct*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,I,!0),this.collisionMatrixPrevious.get(O,I)||(ts.body=I,ts.contact=N,O.dispatchEvent(ts),ts.body=O,I.dispatchEvent(ts)),this.bodyOverlapKeeper.set(O.id,I.id),this.shapeOverlapKeeper.set(Y.id,G.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=pe.now()-u,u=pe.now()),v=0;v!==r;v++){const L=o[v];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(E=m.length,v=0;v!==E;v++){const L=m[v];L.update();for(let N=0,O=L.equations.length;N!==O;N++){const I=L.equations[N];a.addEquation(I)}}a.solve(t,this),c&&(h.solve=pe.now()-u),a.removeAllEquations();const D=Math.pow;for(v=0;v!==r;v++){const L=o[v];if(L.type&d){const N=D(1-L.linearDamping,t),O=L.velocity;O.scale(N,O);const I=L.angularVelocity;if(I){const Y=D(1-L.angularDamping,t);I.scale(Y,I)}}}this.dispatchEvent(Cv),c&&(u=pe.now());const y=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,y,R);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=pe.now()-u),this.stepnumber+=1,this.dispatchEvent(Av);let V=!0;if(this.allowSleep)for(V=!1,v=0;v!==r;v++){const L=o[v];L.sleepTick(this.time),L.sleepState!==ft.SLEEPING&&(V=!0)}this.hasActiveBodies=V}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(xn,Mn),t){for(let r=0,o=xn.length;r<o;r+=2)es.bodyA=this.getBodyById(xn[r]),es.bodyB=this.getBodyById(xn[r+1]),this.dispatchEvent(es);es.bodyA=es.bodyB=null}if(e){for(let r=0,o=Mn.length;r<o;r+=2)ns.bodyA=this.getBodyById(Mn[r]),ns.bodyB=this.getBodyById(Mn[r+1]),this.dispatchEvent(ns);ns.bodyA=ns.bodyB=null}xn.length=Mn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(xn,Mn),n){for(let r=0,o=xn.length;r<o;r+=2){const a=this.getShapeById(xn[r]),l=this.getShapeById(xn[r+1]);yn.shapeA=a,yn.shapeB=l,a&&(yn.bodyA=a.body),l&&(yn.bodyB=l.body),this.dispatchEvent(yn)}yn.bodyA=yn.bodyB=yn.shapeA=yn.shapeB=null}if(i){for(let r=0,o=Mn.length;r<o;r+=2){const a=this.getShapeById(Mn[r]),l=this.getShapeById(Mn[r+1]);Sn.shapeA=a,Sn.shapeB=l,a&&(Sn.bodyA=a.body),l&&(Sn.bodyB=l.body),this.dispatchEvent(Sn)}Sn.bodyA=Sn.bodyB=Sn.shapeA=Sn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Fe;const $r=new de,pe=globalThis.performance||{};if(!pe.now){let s=Date.now();pe.timing&&pe.timing.navigationStart&&(s=pe.timing.navigationStart),pe.now=()=>Date.now()-s}new M;const Av={type:"postStep"},Cv={type:"preStep"},ts={type:ft.COLLIDE_EVENT_NAME,body:null,contact:null},Rv=[],Pv=[],Lv=[],Dv=[],xn=[],Mn=[],es={type:"beginContact",bodyA:null,bodyB:null},ns={type:"endContact",bodyA:null,bodyB:null},yn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Sn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Iv=document.getElementById("app"),an={width:window.innerWidth,height:window.innerHeight},qn=new Om({antialias:!0});qn.setSize(an.width,an.height);qn.setPixelRatio(Math.min(window.devicePixelRatio,2));qn.shadowMap.enabled=!0;Iv.appendChild(qn.domElement);const ke=new Bm;ke.background=new Bt(8965375);ke.fog=new Jo(8965375,50,180);const An=new Ge(60,an.width/an.height,.1,500);An.position.set(0,8,16);ke.add(An);const Ho=new qm(An,qn.domElement);Ho.enabled=!1;const Nv=new zm(16777215,4487082,.8);ke.add(Nv);const fr=new Gm(16777215,.9);fr.position.set(10,20,10);fr.castShadow=!0;fr.shadow.mapSize.set(2048,2048);ke.add(fr);const Uv=new hr(400,32,32),Fv=new Pn({side:be,uniforms:{topColor:{value:new Bt(7846143)},bottomColor:{value:new Bt(16777215)}},vertexShader:`varying vec3 vWorldPosition;
void main(){
 vec4 worldPosition = modelMatrix * vec4(position,1.0);
 vWorldPosition = worldPosition.xyz;
 gl_Position = projectionMatrix * viewMatrix * worldPosition;
}`,fragmentShader:`varying vec3 vWorldPosition; uniform vec3 topColor; uniform vec3 bottomColor;
void main(){
 float h = normalize(vWorldPosition).y * 0.5 + 0.5;
 gl_FragColor = vec4(mix(bottomColor, topColor, smoothstep(0.0,1.0,h)),1.0);
}`}),Ov=new Le(Uv,Fv);ke.add(Ov);const Xi=new bv({gravity:new M(0,-20,0)}),os=new ms("default"),Bv=new ps(os,os,{friction:.3,restitution:.1});Xi.defaultContactMaterial=Bv;function _s(s,t,e=14540253){const n=new ki(s.x,s.y,s.z),i=new ur({color:e}),r=new Le(n,i);r.position.copy(t),r.castShadow=!0,r.receiveShadow=!0,ke.add(r);const o=new ft({mass:0,material:os}),a=new ds(new M(s.x/2,s.y/2,s.z/2));return o.addShape(a),o.position.set(t.x,t.y,t.z),Xi.addBody(o),{mesh:r,body:o}}const Yn=[];Yn.push(_s(new F(8,1,8),new F(0,0,0),11194879));for(let s=1;s<=6;s++)Yn.push(_s(new F(6,1,6),new F(s*12,0,0),16777215));{const s=new F(6,1,6),t=new F(84,0,0),e=5,{mesh:n,body:i}=_s(s,t,16769194),r=t.y+6;n.position.y=r,i.position.y=r,i.type=dr.KINEMATIC,Yn.push({mesh:n,body:i,update:o=>{const a=r+Math.sin(o*1.5)*e;n.position.y=a,i.position.y=a,i.velocity.set(0,Math.cos(o*1.5)*e*1.5,0)}})}{const e=new Qo(.3,.3,12,16),n=new ur({color:16742006}),i=new Le(e,n);i.castShadow=!0,ke.add(i);const r=new xe;ke.add(r),r.position.set(120,3,0),i.position.copy(r.position),i.rotation.z=Math.PI/2;const o=new ft({mass:0,material:os}),a=new lg(.3,.3,12,16),l=new he;l.setFromEuler(Math.PI/2,0,0),o.addShape(a,new M(0,0,0),l),o.position.set(r.position.x,r.position.y,r.position.z),Xi.addBody(o),Yn.push({mesh:i,body:o,update:c=>{const d=c*1.6,u=new Xn().setFromAxisAngle(new F(0,1,0),d);new F(12/2,0,0).applyQuaternion(u),i.position.set(r.position.x,r.position.y,r.position.z),i.quaternion.copy(u),o.quaternion.set(u.x,u.y,u.z,u.w)}})}for(let s=1;s<=6;s++)Yn.push(_s(new F(3,1,3),new F(140+s*8,0,s%2===0?3:-3),16777215));const zv=_s(new F(10,1,10),new F(200,0,0),11206570);Yn.push(zv);const Hv=new ta(2,.2,16,100),Vv=new ur({color:7864268,emissive:2254404,emissiveIntensity:.6}),gs=new Le(Hv,Vv);gs.position.set(200,3,0);gs.rotation.y=Math.PI/2;gs.castShadow=!0;ke.add(gs);const Cc=-40,sa=new ft({mass:0});sa.addShape(new ds(new M(500,2,500)));sa.position.set(0,Cc,0);Xi.addBody(sa);const Rc=1,Gv=new hr(Rc,32,32),kv=new ur({color:3381759,roughness:.4,metalness:.1}),oi=new Le(Gv,kv);oi.castShadow=!0;ke.add(oi);const me=new ft({mass:2,material:os});me.addShape(new ag(Rc));Xi.addBody(me);const sr=[{position:new F(0,3,0),label:"起点"},{position:new F(84,12,0),label:"升降台"},{position:new F(140,8,0),label:"窄桥"},{position:new F(200,8,0),label:"终点"}];let Ve=0;function rr(s){Ve=Math.max(0,Math.min(sr.length-1,s));const t=sr[Ve].position;me.position.set(t.x,t.y,t.z),me.velocity.set(0,0,0),me.angularVelocity.set(0,0,0)}rr(0);const Wv=document.getElementById("timer"),Pc=document.getElementById("checkpoint");Pc.textContent=sr[Ve].label;let ra=performance.now(),as=!1;function Xv(){as=!0;const s=((performance.now()-ra)/1e3).toFixed(2),t=document.getElementById("centerHints");t.innerHTML=`<div class="panel">通关！用时 ${s}s，按 R 重玩</div>`}const rn={};window.addEventListener("keydown",s=>{rn[s.code]=!0,s.code==="KeyC"&&(Ho.enabled=!Ho.enabled)});window.addEventListener("keyup",s=>{rn[s.code]=!1});function qv(){const s=new F;return(rn.KeyW||rn.ArrowUp)&&(s.z-=1),(rn.KeyS||rn.ArrowDown)&&(s.z+=1),(rn.KeyA||rn.ArrowLeft)&&(s.x-=1),(rn.KeyD||rn.ArrowRight)&&(s.x+=1),s.normalize()}let Vo=!1;me.addEventListener("collide",s=>{const t=new M(0,1,0),e=s.contact;if(!e)return;const n=new M;e.bi.id===me.id?e.ni.negate(n):n.copy(e.ni),n.dot(t)>.5&&(Vo=!0)});window.addEventListener("keydown",s=>{if(s.code==="Space"&&Vo&&(me.velocity.y=8,Vo=!1),s.code==="KeyR")if(as){as=!1,ra=performance.now(),rr(0);const t=document.getElementById("centerHints");t.innerHTML='<div class="panel">WASD移动，空格跳跃，R重置到最近检查点</div>'}else rr(Ve)});const Yv=new F(-8,6,10),jv=new F(0,2,0);window.addEventListener("resize",()=>{an.width=window.innerWidth,an.height=window.innerHeight,An.aspect=an.width/an.height,An.updateProjectionMatrix(),qn.setSize(an.width,an.height),qn.setPixelRatio(Math.min(window.devicePixelRatio,2))});function Kv(){const s=me.position.x;Ve<1&&s>60&&(Ve=1),Ve<2&&s>130&&(Ve=2),Ve<3&&s>195&&(Ve=3),Pc.textContent=sr[Ve].label}const Ol=new km;function Lc(){const s=Math.min(.033,Ol.getDelta()),t=Ol.elapsedTime;Yn.forEach(h=>{var d;return(d=h.update)==null?void 0:d.call(h,t)});const e=qv(),n=new F(0,0,-1).applyQuaternion(An.quaternion);n.y=0,n.normalize();const i=new F().crossVectors(n,new F(0,1,0)).negate(),r=new F;r.addScaledVector(n,e.z),r.addScaledVector(i,e.x),r.normalize();const o=30,a=new M(r.x*o,0,r.z*o);me.applyForce(a,me.position),Xi.step(1/60,s,3),oi.position.set(me.position.x,me.position.y,me.position.z),oi.quaternion.set(me.quaternion.x,me.quaternion.y,me.quaternion.z,me.quaternion.w);const l=new F(oi.position.x,oi.position.y,oi.position.z),c=l.clone().add(Yv);if(An.position.lerp(c,.08),An.lookAt(l.clone().add(jv)),!as){const h=(performance.now()-ra)/1e3;Wv.textContent=h.toFixed(2)}Kv(),as||l.distanceTo(gs.position)<2.5&&Xv(),me.position.y<Cc+2&&rr(Ve),qn.render(ke,An),requestAnimationFrame(Lc)}for(const s of Yn)s.mesh.receiveShadow=!0;requestAnimationFrame(Lc);
