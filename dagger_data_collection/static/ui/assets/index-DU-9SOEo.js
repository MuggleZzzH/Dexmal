(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ha="178",Wi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wc=0,Pa=1,Xc=2,tc=1,nc=2,Fn=3,Vn=0,nn=1,bn=2,Qn=0,Xi=1,La=2,Ia=3,Da=4,qc=5,ui=100,$c=101,Yc=102,jc=103,Jc=104,Kc=200,Zc=201,Qc=202,eh=203,bo=204,To=205,th=206,nh=207,ih=208,sh=209,rh=210,oh=211,ah=212,lh=213,ch=214,wo=0,Ao=1,Ro=2,Yi=3,Co=4,Po=5,Lo=6,Io=7,wr=0,hh=1,dh=2,ei=0,uh=1,fh=2,ph=3,mh=4,gh=5,_h=6,vh=7,Na="attached",xh="detached",ic=300,ji=301,Ji=302,Do=303,No=304,Ar=306,pi=1e3,xn=1001,Uo=1002,ln=1003,yh=1004,Ds=1005,an=1006,zr=1007,On=1008,wn=1009,sc=1010,rc=1011,ys=1012,da=1013,mi=1014,Tn=1015,Ts=1016,ua=1017,fa=1018,Ss=1020,oc=35902,ac=1021,lc=1022,un=1023,Ms=1026,Es=1027,cc=1028,pa=1029,hc=1030,ma=1031,ga=1033,ur=33776,fr=33777,pr=33778,mr=33779,Fo=35840,Oo=35841,Bo=35842,ko=35843,zo=36196,Vo=37492,Ho=37496,Go=37808,Wo=37809,Xo=37810,qo=37811,$o=37812,Yo=37813,jo=37814,Jo=37815,Ko=37816,Zo=37817,Qo=37818,ea=37819,ta=37820,na=37821,gr=36492,ia=36494,sa=36495,dc=36283,ra=36284,oa=36285,aa=36286,vr=2300,la=2301,Vr=2302,Ua=2400,Fa=2401,Oa=2402,Sh=2500,Mh=3200,Eh=3201,_a=0,bh=1,Zn="",It="srgb",Ki="srgb-linear",xr="linear",xt="srgb",Ei=7680,Ba=519,Th=512,wh=513,Ah=514,uc=515,Rh=516,Ch=517,Ph=518,Lh=519,ka=35044,za="300 es",Bn=2e3,yr=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Va=1234567;const _s=Math.PI/180,Zi=180/Math.PI;function ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function va(s,e){return(s%e+e)%e}function Ih(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Dh(s,e,t){return s!==e?(t-s)/(e-s):0}function vs(s,e,t){return(1-t)*s+t*e}function Nh(s,e,t,n){return vs(s,e,1-Math.exp(-t*n))}function Uh(s,e=1){return e-Math.abs(va(s,e*2)-e)}function Fh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Oh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Bh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kh(s,e){return s+Math.random()*(e-s)}function zh(s){return s*(.5-Math.random())}function Vh(s){s!==void 0&&(Va=s);let e=Va+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hh(s){return s*_s}function Gh(s){return s*Zi}function Wh(s){return(s&s-1)===0&&s!==0}function Xh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $h(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:_s,RAD2DEG:Zi,generateUUID:ii,clamp:ot,euclideanModulo:va,mapLinear:Ih,inverseLerp:Dh,lerp:vs,damp:Nh,pingpong:Uh,smoothstep:Fh,smootherstep:Oh,randInt:Bh,randFloat:kh,randFloatSpread:zh,seededRandom:Vh,degToRad:Hh,radToDeg:Gh,isPowerOfTwo:Wh,ceilPowerOfTwo:Xh,floorPowerOfTwo:qh,setQuaternionFromProperEuler:$h,normalize:Kt,denormalize:ki};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-a;const u=l*f+c*p+h*g+d*x,b=u>=0?1:-1,C=1-u*u;if(C>Number.EPSILON){const P=Math.sqrt(C),I=Math.atan2(P,u*b);m=Math.sin(m*I)/P,a=Math.sin(a*I)/P}const T=a*b;if(l=l*m+f*T,c=c*m+p*T,h=h*m+g*T,d=d*m+x*T,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-a*p,e[t+2]=c*g+h*p+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new k,Ha=new yn;class it{constructor(e,t,n,i,r,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],u=i[6],b=i[1],C=i[4],T=i[7],P=i[2],I=i[5],L=i[8];return r[0]=o*x+a*b+l*P,r[3]=o*m+a*C+l*I,r[6]=o*u+a*T+l*L,r[1]=c*x+h*b+d*P,r[4]=c*m+h*C+d*I,r[7]=c*u+h*T+d*L,r[2]=f*x+p*b+g*P,r[5]=f*m+p*C+g*I,r[8]=f*u+p*T+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*d+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new it;function fc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yh(){const s=bs("canvas");return s.style.display="block",s}const Ga={};function qi(s){s in Ga||(Ga[s]=!0,console.warn(s))}function jh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Jh(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wa=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zh(){const s={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ki]:{primaries:e,whitePoint:n,transfer:xr,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const at=Zh();function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bi;class Qh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=bs("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ed=0;class xa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Wr(i[o].image)):r.push(Wr(i[o]))}else r=Wr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let td=0;const Xr=new k;class jt extends _i{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=xn,i=xn,r=an,o=On,a=un,l=wn,c=jt.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ii(),this.name="",this.source=new xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=ic;jt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,T=(p+1)/2,P=(u+1)/2,I=(h+f)/4,L=(d+x)/4,U=(g+m)/4;return C>T&&C>P?C<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(C),i=I/n,r=L/n):T>P?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=I/i,r=U/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=L/r,i=U/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nd extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new jt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new xa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends nd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pc extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class id extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),Us.subVectors(this.max,hs),Ti.subVectors(e.a,hs),wi.subVectors(e.b,hs),Ai.subVectors(e.c,hs),Hn.subVectors(wi,Ti),Gn.subVectors(Ai,wi),ri.subVectors(Ti,Ai);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-ri.z,ri.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,ri.z,0,-ri.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-ri.y,ri.x,0];return!qr(t,Ti,wi,Ai,Us)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,Ti,wi,Ai,Us))?!1:(Fs.crossVectors(Hn,Gn),t=[Fs.x,Fs.y,Fs.z],qr(t,Ti,wi,Ai,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new k,new k,new k,new k,new k,new k,new k,new k],pn=new k,Ns=new ts,Ti=new k,wi=new k,Ai=new k,Hn=new k,Gn=new k,ri=new k,hs=new k,Us=new k,Fs=new k,oi=new k;function qr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){oi.fromArray(s,r);const a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const sd=new ts,ds=new k,$r=new k;class ns{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add($r)),this.expandByPoint(ds.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ln=new k,Yr=new k,Os=new k,Wn=new k,jr=new k,Bs=new k,Jr=new k;class Rr{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Yr.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Yr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Os),a=Wn.dot(this.direction),l=-Wn.dot(Os),c=Wn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Yr).addScaledVector(Os,f),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,r){jr.subVectors(t,e),Bs.subVectors(n,e),Jr.crossVectors(jr,Bs);let o=this.direction.dot(Jr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot(Bs.crossVectors(Wn,Bs));if(l<0)return null;const c=a*this.direction.dot(jr.cross(Wn));if(c<0||l+c>o)return null;const h=-a*Wn.dot(Jr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,i,r,o,a,l,c,h,d,f,p,g,x,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,f,p,g,x,m)}set(e,t,n,i,r,o,a,l,c,h,d,f,p,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rd,e,od)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Xn.crossVectors(n,rn),Xn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Xn.crossVectors(n,rn)),Xn.normalize(),ks.crossVectors(rn,Xn),i[0]=Xn.x,i[4]=ks.x,i[8]=rn.x,i[1]=Xn.y,i[5]=ks.y,i[9]=rn.y,i[2]=Xn.z,i[6]=ks.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],b=n[3],C=n[7],T=n[11],P=n[15],I=i[0],L=i[4],U=i[8],M=i[12],y=i[1],D=i[5],z=i[9],H=i[13],J=i[2],Z=i[6],O=i[10],Q=i[14],W=i[3],oe=i[7],fe=i[11],pe=i[15];return r[0]=o*I+a*y+l*J+c*W,r[4]=o*L+a*D+l*Z+c*oe,r[8]=o*U+a*z+l*O+c*fe,r[12]=o*M+a*H+l*Q+c*pe,r[1]=h*I+d*y+f*J+p*W,r[5]=h*L+d*D+f*Z+p*oe,r[9]=h*U+d*z+f*O+p*fe,r[13]=h*M+d*H+f*Q+p*pe,r[2]=g*I+x*y+m*J+u*W,r[6]=g*L+x*D+m*Z+u*oe,r[10]=g*U+x*z+m*O+u*fe,r[14]=g*M+x*H+m*Q+u*pe,r[3]=b*I+C*y+T*J+P*W,r[7]=b*L+C*D+T*Z+P*oe,r[11]=b*U+C*z+T*O+P*fe,r[15]=b*M+C*H+T*Q+P*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*p-n*l*p)+x*(+t*l*p-t*c*f+r*o*f-i*o*p+i*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+u*(-i*a*h-t*l*d+t*a*f+i*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],b=d*m*c-x*f*c+x*l*p-a*m*p-d*l*u+a*f*u,C=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,T=h*x*c-g*d*c+g*a*p-o*x*p-h*a*u+o*d*u,P=g*d*l-h*x*l-g*a*f+o*x*f+h*a*m-o*d*m,I=t*b+n*C+i*T+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=b*L,e[1]=(x*f*r-d*m*r-x*i*p+n*m*p+d*i*u-n*f*u)*L,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*u+n*l*u)*L,e[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*p-n*l*p)*L,e[4]=C*L,e[5]=(h*m*r-g*f*r+g*i*p-t*m*p-h*i*u+t*f*u)*L,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*u-t*l*u)*L,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*p+t*l*p)*L,e[8]=T*L,e[9]=(g*d*r-h*x*r-g*n*p+t*x*p+h*n*u-t*d*u)*L,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*u+t*a*u)*L,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*p-t*a*p)*L,e[12]=P*L,e[13]=(h*x*i-g*d*i+g*n*f-t*x*f-h*n*m+t*d*m)*L,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*L,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,g=r*d,x=o*h,m=o*d,u=a*d,b=l*c,C=l*h,T=l*d,P=n.x,I=n.y,L=n.z;return i[0]=(1-(x+u))*P,i[1]=(p+T)*P,i[2]=(g-C)*P,i[3]=0,i[4]=(p-T)*I,i[5]=(1-(f+u))*I,i[6]=(m+b)*I,i[7]=0,i[8]=(g+C)*L,i[9]=(m-b)*L,i[10]=(1-(f+x))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const c=1/r,h=1/o,d=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(a===Bn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-r),f=(t+e)*c,p=(n+i)*h;let g,x;if(a===Bn)g=(o+r)*d,x=-2*d;else if(a===yr)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new k,mn=new Qe,rd=new k(0,0,0),od=new k(1,1,1),Xn=new k,ks=new k,rn=new k,qa=new Qe,$a=new yn;class hn{constructor(e=0,t=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $a.setFromEuler(this),this.setFromQuaternion($a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ad=0;const Ya=new k,Ci=new yn,In=new Qe,zs=new k,us=new k,ld=new k,cd=new yn,ja=new k(1,0,0),Ja=new k(0,1,0),Ka=new k(0,0,1),Za={type:"added"},hd={type:"removed"},Pi={type:"childadded",child:null},Kr={type:"childremoved",child:null};class Dt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new k,t=new hn,n=new yn,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new it}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(ja,e)}rotateY(e){return this.rotateOnAxis(Ja,e)}rotateZ(e){return this.rotateOnAxis(Ka,e)}translateOnAxis(e,t){return Ya.copy(e).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ja,e)}translateY(e){return this.translateOnAxis(Ja,e)}translateZ(e){return this.translateOnAxis(Ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(us,zs,this.up):In.lookAt(zs,us,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(In),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Za),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hd),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Za),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dt.DEFAULT_UP=new k(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new k,Dn=new k,Zr=new k,Nn=new k,Li=new k,Ii=new k,Qa=new k,Qr=new k,eo=new k,to=new k,no=new pt,io=new pt,so=new pt;class vn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gn.subVectors(i,t),Dn.subVectors(n,t),Zr.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Dn),l=gn.dot(Zr),c=Dn.dot(Dn),h=Dn.dot(Zr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(e,t),io.fromBufferAttribute(e,n),so.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(no,r.x),o.addScaledVector(io,r.y),o.addScaledVector(so,r.z),o}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),Dn.subVectors(e,t),gn.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),gn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Li.subVectors(i,n),Ii.subVectors(r,n),Qr.subVectors(e,n);const l=Li.dot(Qr),c=Ii.dot(Qr);if(l<=0&&c<=0)return t.copy(n);eo.subVectors(e,i);const h=Li.dot(eo),d=Ii.dot(eo);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Li,o);to.subVectors(e,r);const p=Li.dot(to),g=Ii.dot(to);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ii,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Qa.subVectors(r,i),a=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(Qa,a);const u=1/(m+x+f);return o=x*u,a=f*u,t.copy(n).addScaledVector(Li,o).addScaledVector(Ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function ro(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=va(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ro(o,r,e+1/3),this.g=ro(o,r,e),this.b=ro(o,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return at.workingToColorSpace(qt.copy(this),e),Math.round(ot(qt.r*255,0,255))*65536+Math.round(ot(qt.g*255,0,255))*256+Math.round(ot(qt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,r=qt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=It){at.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Vs);const n=vs(qn.h,Vs.h,t),i=vs(qn.s,Vs.s,t),r=vs(qn.l,Vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new st;st.NAMES=gc;let dd=0;class vi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Xi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=To,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sr extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new k,Hs=new Ke;let ud=0;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}}class _c extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vc extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fd=0;const dn=new Qe,oo=new Dt,Di=new k,on=new ts,fs=new ts,zt=new k;class sn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?vc:_c)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(on.min,fs.min),on.expandByPoint(zt),zt.addVectors(on.max,fs.max),on.expandByPoint(zt)):(on.expandByPoint(fs.min),on.expandByPoint(fs.max))}on.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)zt.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(e,c),zt.add(Di)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new k,l[U]=new k;const c=new k,h=new k,d=new k,f=new Ke,p=new Ke,g=new Ke,x=new k,m=new k;function u(U,M,y){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[U].add(x),a[M].add(x),a[y].add(x),l[U].add(m),l[M].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,M=b.length;U<M;++U){const y=b[U],D=y.start,z=y.count;for(let H=D,J=D+z;H<J;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const C=new k,T=new k,P=new k,I=new k;function L(U){P.fromBufferAttribute(i,U),I.copy(P);const M=a[U];C.copy(M),C.sub(P.multiplyScalar(P.dot(M))).normalize(),T.crossVectors(I,M);const D=T.dot(l[U])<0?-1:1;o.setXYZW(U,C.x,C.y,C.z,D)}for(let U=0,M=b.length;U<M;++U){const y=b[U],D=y.start,z=y.count;for(let H=D,J=D+z;H<J;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new cn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new Qe,ai=new Rr,Gs=new ns,tl=new k,Ws=new k,Xs=new k,qs=new k,ao=new k,$s=new k,nl=new k,Ys=new k;class Yt extends Dt{constructor(e=new sn,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(ao.fromBufferAttribute(d,e),o?$s.addScaledVector(ao,h):$s.addScaledVector(ao.sub(t),h))}t.add($s)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Gs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Gs,tl)===null||ai.origin.distanceToSquared(tl)>(e.far-e.near)**2))&&(el.copy(r).invert(),ai.copy(e.ray).applyMatrix4(el),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,P=C;T<P;T+=3){const I=a.getX(T),L=a.getX(T+1),U=a.getX(T+2);i=js(this,u,e,n,c,h,d,I,L,U),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const b=a.getX(m),C=a.getX(m+1),T=a.getX(m+2);i=js(this,o,e,n,c,h,d,b,C,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,P=C;T<P;T+=3){const I=T,L=T+1,U=T+2;i=js(this,u,e,n,c,h,d,I,L,U),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const b=m,C=m+1,T=m+2;i=js(this,o,e,n,c,h,d,b,C,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function pd(s,e,t,n,i,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Vn,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:s}}function js(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ws),s.getVertexPosition(l,Xs),s.getVertexPosition(c,qs);const h=pd(s,e,t,n,Ws,Xs,qs,nl);if(h){const d=new k;vn.getBarycoord(nl,Ws,Xs,qs,d),i&&(h.uv=vn.getInterpolatedAttribute(i,a,l,c,d,new Ke)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,d,new Ke)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};vn.getNormal(Ws,Xs,qs,f.normal),h.face=f,h.barycoord=d}return h}class is extends sn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function g(x,m,u,b,C,T,P,I,L,U,M){const y=T/L,D=P/U,z=T/2,H=P/2,J=I/2,Z=L+1,O=U+1;let Q=0,W=0;const oe=new k;for(let fe=0;fe<O;fe++){const pe=fe*D-H;for(let be=0;be<Z;be++){const Ee=be*y-z;oe[x]=Ee*b,oe[m]=pe*C,oe[u]=J,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[u]=I>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(be/L),d.push(1-fe/U),Q+=1}}for(let fe=0;fe<U;fe++)for(let pe=0;pe<L;pe++){const be=f+pe+Z*fe,Ee=f+pe+Z*(fe+1),X=f+(pe+1)+Z*(fe+1),K=f+(pe+1)+Z*fe;l.push(be,Ee,K),l.push(Ee,X,K),W+=6}a.addGroup(p,W,M),p+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(s){const e={};for(let t=0;t<s.length;t++){const n=Qi(s[t]);for(const i in n)e[i]=n[i]}return e}function md(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const gd={clone:Qi,merge:Zt};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yc extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new k,il=new Ke,sl=new Ke;class $t extends yc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,il,sl),t.subVectors(sl,il)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Ui=1;class xd extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(Ni,Ui,e,t);i.layers=this.layers,this.add(i);const r=new $t(Ni,Ui,e,t);r.layers=this.layers,this.add(r);const o=new $t(Ni,Ui,e,t);o.layers=this.layers,this.add(o);const a=new $t(Ni,Ui,e,t);a.layers=this.layers,this.add(a);const l=new $t(Ni,Ui,e,t);l.layers=this.layers,this.add(l);const c=new $t(Ni,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sc extends jt{constructor(e=[],t=ji,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yd extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new is(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Qn});r.uniforms.tEquirect.value=t;const o=new Yt(i,r),a=t.minFilter;return t.minFilter===On&&(t.minFilter=an),new xd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Hi extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sd={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mc extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rl=new k,ol=new pt,al=new pt,Md=new k,ll=new Qe,Js=new k,co=new ns,cl=new Qe,ho=new Rr;class Ed extends Yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Na,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ts),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Js),this.boundingBox.expandByPoint(Js)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ns),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Js),this.boundingSphere.expandByPoint(Js)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(i),e.ray.intersectsSphere(co)!==!1&&(cl.copy(i).invert(),ho.copy(e.ray).applyMatrix4(cl),!(this.boundingBox!==null&&ho.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Na?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ol.fromBufferAttribute(i.attributes.skinIndex,e),al.fromBufferAttribute(i.attributes.skinWeight,e),rl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=al.getComponent(r);if(o!==0){const a=ol.getComponent(r);ll.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Md.copy(rl).applyMatrix4(ll),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ec extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bc extends jt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=ln,h=ln,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hl=new Qe,bd=new Qe;class ya{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:bd;hl.multiplyMatrices(a,t[r]),hl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ya(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bc(t,e,e,un,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ec),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const uo=new k,Td=new k,wd=new it;class Kn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=uo.subVectors(n,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wd.getNormalMatrix(e),i=this.coplanarPoint(uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new ns,Ad=new Ke(.5,.5),Ks=new k;class Sa{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],f=i[7],p=i[8],g=i[9],x=i[10],m=i[11],u=i[12],b=i[13],C=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,m-p,T-u).normalize(),n[1].setComponents(l+r,f+c,m+p,T+u).normalize(),n[2].setComponents(l+o,f+h,m+g,T+b).normalize(),n[3].setComponents(l-o,f-h,m-g,T-b).normalize(),n[4].setComponents(l-a,f-d,m-x,T-C).normalize(),t===Bn)n[5].setComponents(l+a,f+d,m+x,T+C).normalize();else if(t===yr)n[5].setComponents(a,d,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=Ad.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mr extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Er=new k,br=new k,dl=new Qe,ps=new Rr,Zs=new ns,fo=new k,ul=new k;class Tc extends Dt{constructor(e=new sn,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Er.fromBufferAttribute(t,i-1),br.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Er.distanceTo(br);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;dl.copy(i).invert(),ps.copy(e.ray).applyMatrix4(dl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const u=h.getX(x),b=h.getX(x+1),C=Qs(this,e,ps,l,u,b,x);C&&t.push(C)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),u=Qs(this,e,ps,l,x,m,g-1);u&&t.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const u=Qs(this,e,ps,l,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Qs(this,e,ps,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qs(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Er.fromBufferAttribute(a,i),br.fromBufferAttribute(a,r),t.distanceSqToSegment(Er,br,fo,ul)>n)return;fo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(fo);if(!(c<e.near||c>e.far))return{distance:c,point:ul.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const fl=new k,pl=new k;class wc extends Tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fl.distanceTo(pl);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ac extends jt{constructor(e,t,n=mi,i,r,o,a=ln,l=ln,c,h=Ms,d=1){if(h!==Ms&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ma extends sn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const x=[],m=n/2;let u=0;b(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function b(){const T=new k,P=new k;let I=0;const L=(t-e)/n;for(let U=0;U<=r;U++){const M=[],y=U/r,D=y*(t-e)+e;for(let z=0;z<=i;z++){const H=z/i,J=H*l+a,Z=Math.sin(J),O=Math.cos(J);P.x=D*Z,P.y=-y*n+m,P.z=D*O,d.push(P.x,P.y,P.z),T.set(Z,L,O).normalize(),f.push(T.x,T.y,T.z),p.push(H,1-y),M.push(g++)}x.push(M)}for(let U=0;U<i;U++)for(let M=0;M<r;M++){const y=x[M][U],D=x[M+1][U],z=x[M+1][U+1],H=x[M][U+1];(e>0||M!==0)&&(h.push(y,D,H),I+=3),(t>0||M!==r-1)&&(h.push(D,z,H),I+=3)}c.addGroup(u,I,0),u+=I}function C(T){const P=g,I=new Ke,L=new k;let U=0;const M=T===!0?e:t,y=T===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const D=g;for(let z=0;z<=i;z++){const J=z/i*l+a,Z=Math.cos(J),O=Math.sin(J);L.x=M*O,L.y=m*y,L.z=M*Z,d.push(L.x,L.y,L.z),f.push(0,y,0),I.x=Z*.5+.5,I.y=O*.5*y+.5,p.push(I.x,I.y),g++}for(let z=0;z<i;z++){const H=P+z,J=D+z;T===!0?h.push(J,J+1,H):h.push(J+1,J,H),U+=3}c.addGroup(u,U,T===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){const b=u*f-o;for(let C=0;C<c;C++){const T=C*d-r;g.push(T,-b,0),x.push(0,0,1),m.push(C/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const C=b+c*u,T=b+c*(u+1),P=b+1+c*(u+1),I=b+1+c*u;p.push(C,T,I),p.push(T,P,I)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ea extends sn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new k,f=new k,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){const b=[],C=u/n;let T=0;u===0&&o===0?T=.5/t:u===n&&l===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const I=P/t;d.x=-e*Math.cos(i+I*r)*Math.sin(o+C*a),d.y=e*Math.cos(o+C*a),d.z=e*Math.sin(i+I*r)*Math.sin(o+C*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(I+T,1-C),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const C=h[u][b+1],T=h[u][b],P=h[u+1][b],I=h[u+1][b+1];(u!==0||o>0)&&p.push(C,T,I),(u!==n-1||l<Math.PI)&&p.push(T,P,I)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kn extends vi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new st(16777215),this.specular=new st(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rd extends vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cd extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pd extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function er(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ld(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Id(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ml(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Rc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dd extends Pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ua,endingEnd:Ua}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fa:r=e,a=2*t-n;break;case Oa:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fa:o=e,l=2*n-t;break;case Oa:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,C=(-1-p)*m+(1.5+p)*x+.5*g,T=p*m-p*x;for(let P=0;P!==a;++P)r[P]=u*o[h+P]+b*o[c+P]+C*o[l+P]+T*o[d+P];return r}}class Nd extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}}class Ud extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case la:t=this.InterpolantFactoryMethodLinear;break;case Vr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return Vr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ld(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vr,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){const x=t[d+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=la;class ss extends Sn{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=vr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Cc extends Sn{constructor(e,t,n,i){super(e,t,n,i)}}Cc.prototype.ValueTypeName="color";class Tr extends Sn{constructor(e,t,n,i){super(e,t,n,i)}}Tr.prototype.ValueTypeName="number";class Fd extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)yn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ws extends Sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Fd(this.times,this.values,this.getValueSize(),e)}}ws.prototype.ValueTypeName="quaternion";ws.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends Sn{constructor(e,t,n){super(e,t,n)}}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=vr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends Sn{constructor(e,t,n,i){super(e,t,n,i)}}es.prototype.ValueTypeName="vector";class gl{constructor(e="",t=-1,n=[],i=Sh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Bd(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Id(l);l=ml(l,1,h),c=ml(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Tr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,p,g,x){if(p.length!==0){const m=[],u=[];Rc(p,m,u,g),m.length!==0&&x.push(new d(f,m,u))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(const x in p){const m=[],u=[];for(let b=0;b!==f[g].morphTargets.length;++b){const C=f[g];m.push(C.time),u.push(C.morphTarget===x?1:0)}i.push(new Tr(".morphTargetInfluence["+x+"]",m,u))}l=p.length*o}else{const p=".bones["+t[d].name+"]";n(es,p+".position",f,"pos",i),n(ws,p+".quaternion",f,"rot",i),n(es,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Od(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return Cc;case"quaternion":return ws;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Od(s.type);if(s.times===void 0){const t=[],n=[];Rc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const xs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class kd{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Pc=new kd;class ni{constructor(e){this.manager=e!==void 0?e:Pc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ni.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class zd extends Error{constructor(e,t){super(e),this.response=t}}class ba extends ni{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xs.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:i});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Un[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let x=0;const m=new ReadableStream({start(u){b();function b(){d.read().then(({done:C,value:T})=>{if(C)u.close();else{x+=T.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let I=0,L=h.length;I<L;I++){const U=h[I];U.onProgress&&U.onProgress(P)}u.enqueue(T),b()}},C=>{u.error(C)})}}});return new Response(m)}else throw new zd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{xs.add(`file:${e}`,c);const h=Un[e];delete Un[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Un[e];if(h===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Fi=new WeakMap;class Vd extends ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Fi.get(o);d===void 0&&(d=[],Fi.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=bs("img");function l(){h(),t&&t(this);const d=Fi.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Fi.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),xs.remove(`image:${e}`);const f=Fi.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(d)}Fi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xs.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Hd extends ni{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new bc,a=new ba(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:xn,o.wrapT=c.wrapT!==void 0?c.wrapT:xn,o.magFilter=c.magFilter!==void 0?c.magFilter:an,o.minFilter=c.minFilter!==void 0?c.minFilter:an,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=On),c.mipmapCount===1&&(o.minFilter=an),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Lc extends ni{constructor(e){super(e)}load(e,t,n,i){const r=new jt,o=new Vd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Lr extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const po=new Qe,_l=new k,vl=new k;class Ta{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gd extends Ta{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wd extends Lr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xl=new Qe,ms=new k,mo=new k;class Xd extends Ta{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),mo.copy(n.position),mo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(mo),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl)}}class qd extends Lr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wa extends yc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $d extends Ta{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ic extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new $d}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dc extends Lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nc{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Yd extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class yl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jd extends wc{constructor(e=10,t=10,n=4473924,i=8947848){n=new st(n),i=new st(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=f===r?n:i;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const h=new sn;h.setAttribute("position",new Tt(l,3)),h.setAttribute("color",new Tt(c,3));const d=new Mr({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jd extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Sl(s,e,t,n){const i=Kd(n);switch(t){case ac:return s*e;case cc:return s*e/i.components*i.byteLength;case pa:return s*e/i.components*i.byteLength;case hc:return s*e*2/i.components*i.byteLength;case ma:return s*e*2/i.components*i.byteLength;case lc:return s*e*3/i.components*i.byteLength;case un:return s*e*4/i.components*i.byteLength;case ga:return s*e*4/i.components*i.byteLength;case ur:case fr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oo:case ko:return Math.max(s,16)*Math.max(e,8)/4;case Fo:case Bo:return Math.max(s,8)*Math.max(e,8)/2;case zo:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case gr:case ia:case sa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dc:case ra:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oa:case aa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kd(s){switch(s){case wn:case sc:return{byteLength:1,components:1};case ys:case rc:case Ts:return{byteLength:2,components:1};case ua:case fa:return{byteLength:2,components:4};case mi:case da:case Tn:return{byteLength:4,components:1};case oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zd(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
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
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
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
#endif`,ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,au=`#ifdef USE_BATCHING
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
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,du=`float G_BlinnPhong_Implicit( ) {
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
#endif`,fu=`#ifdef USE_BUMPMAP
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mu=`#define PI 3.141592653589793
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
} // validated`,Eu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ku=`#ifdef USE_FOG
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
}`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hu=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wu=`uniform bool receiveShadow;
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
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
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
#endif`,Ku=`struct PhysicalMaterial {
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
}`,Zu=`
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ff=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
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
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bf=`float getShadowMask() {
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,lp=`#define DISTANCE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
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
}`,up=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define LAMBERT
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
}`,_p=`#define MATCAP
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
}`,vp=`#define MATCAP
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
}`,xp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,Sp=`#define PHONG
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
}`,Mp=`#define PHONG
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
}`,Ep=`#define STANDARD
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
}`,bp=`#define STANDARD
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
}`,Tp=`#define TOON
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
}`,wp=`#define TOON
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
}`,Ap=`uniform float size;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 color;
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
}`,Lp=`uniform float rotation;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Qd,alphahash_pars_fragment:eu,alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:su,aomap_fragment:ru,aomap_pars_fragment:ou,batching_pars_vertex:au,batching_vertex:lu,begin_vertex:cu,beginnormal_vertex:hu,bsdfs:du,iridescence_fragment:uu,bumpmap_pars_fragment:fu,clipping_planes_fragment:pu,clipping_planes_pars_fragment:mu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:_u,color_fragment:vu,color_pars_fragment:xu,color_pars_vertex:yu,color_vertex:Su,common:Mu,cube_uv_reflection_fragment:Eu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Tu,displacementmap_vertex:wu,emissivemap_fragment:Au,emissivemap_pars_fragment:Ru,colorspace_fragment:Cu,colorspace_pars_fragment:Pu,envmap_fragment:Lu,envmap_common_pars_fragment:Iu,envmap_pars_fragment:Du,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:Xu,envmap_vertex:Uu,fog_vertex:Fu,fog_pars_vertex:Ou,fog_fragment:Bu,fog_pars_fragment:ku,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Hu,lights_lambert_pars_fragment:Gu,lights_pars_begin:Wu,lights_toon_fragment:qu,lights_toon_pars_fragment:$u,lights_phong_fragment:Yu,lights_phong_pars_fragment:ju,lights_physical_fragment:Ju,lights_physical_pars_fragment:Ku,lights_fragment_begin:Zu,lights_fragment_maps:Qu,lights_fragment_end:ef,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:of,map_pars_fragment:af,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:df,morphinstance_vertex:uf,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:_f,normal_fragment_maps:vf,normal_pars_fragment:xf,normal_pars_vertex:yf,normal_vertex:Sf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:wf,opaque_fragment:Af,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:Pf,dithering_fragment:Lf,dithering_pars_fragment:If,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Nf,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Of,shadowmask_pars_fragment:Bf,skinbase_vertex:kf,skinning_pars_vertex:zf,skinning_vertex:Vf,skinnormal_vertex:Hf,specularmap_fragment:Gf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:$f,transmission_pars_fragment:Yf,uv_pars_fragment:jf,uv_pars_vertex:Jf,uv_vertex:Kf,worldpos_vertex:Zf,background_vert:Qf,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:op,distanceRGBA_vert:ap,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:hp,linedashed_vert:dp,linedashed_frag:up,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:vp,meshnormal_vert:xp,meshnormal_frag:yp,meshphong_vert:Sp,meshphong_frag:Mp,meshphysical_vert:Ep,meshphysical_frag:bp,meshtoon_vert:Tp,meshtoon_frag:wp,points_vert:Ap,points_frag:Rp,shadow_vert:Cp,shadow_frag:Pp,sprite_vert:Lp,sprite_frag:Ip},ye={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},En={basic:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Zt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Zt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Zt([ye.points,ye.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Zt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Zt([ye.common,ye.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Zt([ye.sprite,ye.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Zt([ye.common,ye.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Zt([ye.lights,ye.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};En.physical={uniforms:Zt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const tr={r:0,b:0,g:0},ci=new hn,Dp=new Qe;function Np(s,e,t,n,i,r,o){const a=new st(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function x(C){let T=!1;const P=g(C);P===null?u(a,l):P&&P.isColor&&(u(P,1),T=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(C,T){const P=g(T);P&&(P.isCubeTexture||P.mapping===Ar)?(h===void 0&&(h=new Yt(new is(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Qi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ci.copy(T.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dp.makeRotationFromEuler(ci)),h.material.toneMapped=at.getTransfer(P.colorSpace)!==xt,(d!==P||f!==P.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=P,f=P.version,p=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Yt(new Cr(2,2),new ti({name:"BackgroundMaterial",uniforms:Qi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=at.getTransfer(P.colorSpace)!==xt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=P,f=P.version,p=s.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function u(C,T){C.getRGB(tr,xc(s)),n.buffers.color.setClear(tr.r,tr.g,tr.b,T,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,T=1){a.set(C),l=T,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,u(a,l)},render:x,addToRenderList:m,dispose:b}}function Up(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,D,z,H,J){let Z=!1;const O=d(H,z,D);r!==O&&(r=O,c(r.object)),Z=p(y,H,z,J),Z&&g(y,H,z,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,T(y,D,z,H),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,D,z){const H=z.wireframe===!0;let J=n[y.id];J===void 0&&(J={},n[y.id]=J);let Z=J[D.id];Z===void 0&&(Z={},J[D.id]=Z);let O=Z[H];return O===void 0&&(O=f(l()),Z[H]=O),O}function f(y){const D=[],z=[],H=[];for(let J=0;J<t;J++)D[J]=0,z[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,D,z,H){const J=r.attributes,Z=D.attributes;let O=0;const Q=z.getAttributes();for(const W in Q)if(Q[W].location>=0){const fe=J[W];let pe=Z[W];if(pe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),fe===void 0||fe.attribute!==pe||pe&&fe.data!==pe.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function g(y,D,z,H){const J={},Z=D.attributes;let O=0;const Q=z.getAttributes();for(const W in Q)if(Q[W].location>=0){let fe=Z[W];fe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));const pe={};pe.attribute=fe,fe&&fe.data&&(pe.data=fe.data),J[W]=pe,O++}r.attributes=J,r.attributesNum=O,r.index=H}function x(){const y=r.newAttributes;for(let D=0,z=y.length;D<z;D++)y[D]=0}function m(y){u(y,0)}function u(y,D){const z=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;z[y]=1,H[y]===0&&(s.enableVertexAttribArray(y),H[y]=1),J[y]!==D&&(s.vertexAttribDivisor(y,D),J[y]=D)}function b(){const y=r.newAttributes,D=r.enabledAttributes;for(let z=0,H=D.length;z<H;z++)D[z]!==y[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function C(y,D,z,H,J,Z,O){O===!0?s.vertexAttribIPointer(y,D,z,J,Z):s.vertexAttribPointer(y,D,z,H,J,Z)}function T(y,D,z,H){x();const J=H.attributes,Z=z.getAttributes(),O=D.defaultAttributeValues;for(const Q in Z){const W=Z[Q];if(W.location>=0){let oe=J[Q];if(oe===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){const fe=oe.normalized,pe=oe.itemSize,be=e.get(oe);if(be===void 0)continue;const Ee=be.buffer,X=be.type,K=be.bytesPerElement,ne=X===s.INT||X===s.UNSIGNED_INT||oe.gpuType===da;if(oe.isInterleavedBufferAttribute){const ie=oe.data,me=ie.stride,Ze=oe.offset;if(ie.isInstancedInterleavedBuffer){for(let ze=0;ze<W.locationSize;ze++)u(W.location+ze,ie.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ze=0;ze<W.locationSize;ze++)m(W.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ze=0;ze<W.locationSize;ze++)C(W.location+ze,pe/W.locationSize,X,fe,me*K,(Ze+pe/W.locationSize*ze)*K,ne)}else{if(oe.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)u(W.location+ie,oe.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ie=0;ie<W.locationSize;ie++)m(W.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ie=0;ie<W.locationSize;ie++)C(W.location+ie,pe/W.locationSize,X,fe,pe*K,pe/W.locationSize*ie*K,ne)}}else if(O!==void 0){const fe=O[Q];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(W.location,fe);break;case 3:s.vertexAttrib3fv(W.location,fe);break;case 4:s.vertexAttrib4fv(W.location,fe);break;default:s.vertexAttrib1fv(W.location,fe)}}}}b()}function P(){U();for(const y in n){const D=n[y];for(const z in D){const H=D[z];for(const J in H)h(H[J].object),delete H[J];delete D[z]}delete n[y]}}function I(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const z in D){const H=D[z];for(const J in H)h(H[J].object),delete H[J];delete D[z]}delete n[y.id]}function L(y){for(const D in n){const z=n[D];if(z[y.id]===void 0)continue;const H=z[y.id];for(const J in H)h(H[J].object),delete H[J];delete z[y.id]}}function U(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Fp(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Op(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==un&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const U=L===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==wn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Tn&&!U)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:P,maxSamples:I}}function Bp(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Kn,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,C=b*4;let T=u.clippingState||null;l.value=T,T=h(g,f,C,p);for(let P=0;P!==C;++P)T[P]=t[P];u.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=p+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let C=0,T=p;C!==x;++C,T+=4)o.copy(d[C]).applyMatrix4(b,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function kp(s){let e=new WeakMap;function t(o,a){return a===Do?o.mapping=ji:a===No&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Do||a===No)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yd(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Gi=4,Ml=[.125,.215,.35,.446,.526,.582],fi=20,go=new wa,El=new st;let _o=null,vo=0,xo=0,yo=!1;const di=(1+Math.sqrt(5))/2,Oi=1/di,bl=[new k(-di,Oi,0),new k(di,Oi,0),new k(-Oi,0,di),new k(Oi,0,di),new k(0,di,-Oi),new k(0,di,Oi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],zp=new k;class Tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=zp}=r;_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,vo,xo),this._renderer.xr.enabled=yo,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ts,format:un,colorSpace:Ki,depthBuffer:!1},i=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(r)),this._blurMaterial=Hp(r,e,t)}return i}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,i,r){const l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(El),d.toneMapping=ei,d.autoClear=!1;const g=new Sr({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new Yt(new is,g);let m=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,m=!0):(g.color.copy(El),m=!0);for(let b=0;b<6;b++){const C=b%3;C===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):C===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const T=this._cubeSize;nr(i,C*T,b>2?T:0,T,T),d.setRenderTarget(i),m&&d.render(x,l),d.render(e,l)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ji||e.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bl[(i-r-1)%bl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Yt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const u=[];let b=0;for(let L=0;L<fi;++L){const U=L/x,M=Math.exp(-U*U/2);u.push(M),L===0?b+=M:L<m&&(b+=2*M)}for(let L=0;L<u.length;L++)u[L]=u[L]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;const T=this._sizeLods[i],P=3*T*(i>C-Gi?i-C+Gi:0),I=4*(this._cubeSize-T);nr(t,P,I,3*T,2*T),l.setRenderTarget(t),l.render(d,go)}}function Vp(s){const e=[],t=[],n=[];let i=s;const r=s-Gi+1+Ml.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Gi?l=Ml[o-s+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,b=new Float32Array(x*g*p),C=new Float32Array(m*g*p),T=new Float32Array(u*g*p);for(let I=0;I<p;I++){const L=I%3*2/3-1,U=I>2?0:-1,M=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];b.set(M,x*g*I),C.set(f,m*g*I);const y=[I,I,I,I,I,I];T.set(y,u*g*I)}const P=new sn;P.setAttribute("position",new cn(b,x)),P.setAttribute("uv",new cn(C,m)),P.setAttribute("faceIndex",new cn(T,u)),e.push(P),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(s,e,t){const n=new gi(s,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hp(s,e,t){const n=new Float32Array(fi),i=new k(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Al(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Rl(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function Gp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Do||l===No,h=l===ji||l===Ji;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Tl(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Tl(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&qi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xp(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let C=0,T=b.length;C<T;C+=3){const P=b[C+0],I=b[C+1],L=b[C+2];f.push(P,I,I,L,L,P)}}else if(g!==void 0){const b=g.array;x=g.version;for(let C=0,T=b.length/3-1;C<T;C+=3){const P=C+0,I=C+1,L=C+2;f.push(P,I,I,L,L,P)}}else return;const m=new(fc(f)?vc:_c)(f,1);m.version=x;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function qp(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function d(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*x[b];t.update(u,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function $p(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yp(s,e,t){const n=new WeakMap,i=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),x===!0&&(T=2),m===!0&&(T=3);let P=a.attributes.position.count*T,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*I*4*d),U=new pc(L,P,I,d);U.type=Tn,U.needsUpdate=!0;const M=T*4;for(let D=0;D<d;D++){const z=u[D],H=b[D],J=C[D],Z=P*I*4*D;for(let O=0;O<z.count;O++){const Q=O*M;g===!0&&(i.fromBufferAttribute(z,O),L[Z+Q+0]=i.x,L[Z+Q+1]=i.y,L[Z+Q+2]=i.z,L[Z+Q+3]=0),x===!0&&(i.fromBufferAttribute(H,O),L[Z+Q+4]=i.x,L[Z+Q+5]=i.y,L[Z+Q+6]=i.z,L[Z+Q+7]=0),m===!0&&(i.fromBufferAttribute(J,O),L[Z+Q+8]=i.x,L[Z+Q+9]=i.y,L[Z+Q+10]=i.z,L[Z+Q+11]=J.itemSize===4?i.w:1)}}f={count:d,texture:U,size:new Ke(P,I)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function jp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Fc=new jt,Cl=new Ac(1,1),Oc=new pc,Bc=new id,kc=new Sc,Pl=[],Ll=[],Il=new Float32Array(16),Dl=new Float32Array(9),Nl=new Float32Array(4);function os(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Pl[i];if(r===void 0&&(r=new Float32Array(i),Pl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ir(s,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function Zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function em(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Nl.set(n),s.uniformMatrix2fv(this.addr,!1,Nl),kt(t,n)}}function tm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Dl.set(n),s.uniformMatrix3fv(this.addr,!1,Dl),kt(t,n)}}function nm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Il.set(n),s.uniformMatrix4fv(this.addr,!1,Il),kt(t,n)}}function im(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function am(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function dm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Cl.compareFunction=uc,r=Cl):r=Fc,t.setTexture2D(e||r,i)}function um(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bc,i)}function fm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kc,i)}function pm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Oc,i)}function mm(s){switch(s){case 5126:return Jp;case 35664:return Kp;case 35665:return Zp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return om;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(s,e){s.uniform1fv(this.addr,e)}function _m(s,e){const t=os(e,this.size,2);s.uniform2fv(this.addr,t)}function vm(s,e){const t=os(e,this.size,3);s.uniform3fv(this.addr,t)}function xm(s,e){const t=os(e,this.size,4);s.uniform4fv(this.addr,t)}function ym(s,e){const t=os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sm(s,e){const t=os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mm(s,e){const t=os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Em(s,e){s.uniform1iv(this.addr,e)}function bm(s,e){s.uniform2iv(this.addr,e)}function Tm(s,e){s.uniform3iv(this.addr,e)}function wm(s,e){s.uniform4iv(this.addr,e)}function Am(s,e){s.uniform1uiv(this.addr,e)}function Rm(s,e){s.uniform2uiv(this.addr,e)}function Cm(s,e){s.uniform3uiv(this.addr,e)}function Pm(s,e){s.uniform4uiv(this.addr,e)}function Lm(s,e,t){const n=this.cache,i=e.length,r=Ir(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Fc,r[o])}function Im(s,e,t){const n=this.cache,i=e.length,r=Ir(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bc,r[o])}function Dm(s,e,t){const n=this.cache,i=e.length,r=Ir(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kc,r[o])}function Nm(s,e,t){const n=this.cache,i=e.length,r=Ir(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Oc,r[o])}function Um(s){switch(s){case 5126:return gm;case 35664:return _m;case 35665:return vm;case 35666:return xm;case 35674:return ym;case 35675:return Sm;case 35676:return Mm;case 5124:case 35670:return Em;case 35667:case 35671:return bm;case 35668:case 35672:return Tm;case 35669:case 35673:return wm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Nm}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Um(t.type)}}class Bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Ul(s,e){s.seq.push(e),s.map[e.id]=e}function km(s,e,t){const n=s.name,i=n.length;for(So.lastIndex=0;;){const r=So.exec(n),o=So.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ul(t,c===void 0?new Fm(a,s,e):new Om(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Bm(a),Ul(t,d)),t=d}}}class _r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);km(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Fl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const zm=37297;let Vm=0;function Hm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ol=new it;function Gm(s){at._getMatrix(Ol,at.workingColorSpace,s);const e=`mat3( ${Ol.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case xr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Hm(s.getShaderSource(e),o)}else return i}function Wm(s,e){const t=Gm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xm(s,e){let t;switch(e){case uh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="Cineon";break;case mh:t="ACESFilmic";break;case _h:t="AgX";break;case vh:t="Neutral";break;case gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new k;function qm(){at.getLuminanceCoefficients(ir);const s=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Ym(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function gs(s){return s!==""}function kl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(s){return s.replace(Jm,Zm)}const Km=new Map;function Zm(s,e){let t=rt[e];if(t===void 0){const n=Km.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ca(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(s){return s.replace(Qm,eg)}function eg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hl(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ji:case Ji:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function sg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wr:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case dh:e="ENVMAP_BLENDING_ADD";break}return e}function rg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function og(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tg(t),c=ng(t),h=ig(t),d=sg(t),f=rg(t),p=$m(t),g=Ym(r),x=i.createProgram();let m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),u.length>0&&(u+=`
`)):(m=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),u=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?rt.tonemapping_pars_fragment:"",t.toneMapping!==ei?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),o=ca(o),o=kl(o,t),o=zl(o,t),a=ca(a),a=kl(a,t),a=zl(a,t),o=Vl(o),a=Vl(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const C=b+m+o,T=b+u+a,P=Fl(i,i.VERTEX_SHADER,C),I=Fl(i,i.FRAGMENT_SHADER,T);i.attachShader(x,P),i.attachShader(x,I),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function L(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(x).trim(),H=i.getShaderInfoLog(P).trim(),J=i.getShaderInfoLog(I).trim();let Z=!0,O=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,I);else{const Q=Bl(i,P,"vertex"),W=Bl(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+Q+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||J==="")&&(O=!1);O&&(D.diagnostics={runnable:Z,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:u}})}i.deleteShader(P),i.deleteShader(I),U=new _r(i,x),M=jm(i,x)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,zm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=I,this}let ag=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cg(e),t.set(e,n)),n}}class cg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function hg(s,e,t,n,i,r,o){const a=new mc,l=new lg,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,D,z,H){const J=z.fog,Z=H.geometry,O=M.isMeshStandardMaterial?z.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),W=Q&&Q.mapping===Ar?Q.image.height:null,oe=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pe=fe!==void 0?fe.length:0;let be=0;Z.morphAttributes.position!==void 0&&(be=1),Z.morphAttributes.normal!==void 0&&(be=2),Z.morphAttributes.color!==void 0&&(be=3);let Ee,X,K,ne;if(oe){const nt=En[oe];Ee=nt.vertexShader,X=nt.fragmentShader}else Ee=M.vertexShader,X=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),ne=l.getFragmentShaderID(M);const ie=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),Ze=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,wt=!!M.map,At=!!M.matcap,dt=!!Q,F=!!M.aoMap,Vt=!!M.lightMap,lt=!!M.bumpMap,_t=!!M.normalMap,De=!!M.displacementMap,ct=!!M.emissiveMap,Ve=!!M.metalnessMap,tt=!!M.roughnessMap,Lt=M.anisotropy>0,N=M.clearcoat>0,S=M.dispersion>0,q=M.iridescence>0,se=M.sheen>0,ae=M.transmission>0,ee=Lt&&!!M.anisotropyMap,Ue=N&&!!M.clearcoatMap,ve=N&&!!M.clearcoatNormalMap,Ie=N&&!!M.clearcoatRoughnessMap,Fe=q&&!!M.iridescenceMap,le=q&&!!M.iridescenceThicknessMap,Te=se&&!!M.sheenColorMap,Xe=se&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,_e=!!M.specularColorMap,je=!!M.specularIntensityMap,B=ae&&!!M.transmissionMap,Se=ae&&!!M.thicknessMap,ce=!!M.gradientMap,Re=!!M.alphaMap,de=M.alphaTest>0,re=!!M.alphaHash,Ce=!!M.extensions;let Je=ei;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Je=s.toneMapping);const St={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Ee,fragmentShader:X,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ze,batchingColor:ze&&H._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&H.instanceColor!==null,instancingMorph:Ze&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ki,alphaToCoverage:!!M.alphaToCoverage,map:wt,matcap:At,envMap:dt,envMapMode:dt&&Q.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:Vt,bumpMap:lt,normalMap:_t,displacementMap:f&&De,emissiveMap:ct,normalMapObjectSpace:_t&&M.normalMapType===bh,normalMapTangentSpace:_t&&M.normalMapType===_a,metalnessMap:Ve,roughnessMap:tt,anisotropy:Lt,anisotropyMap:ee,clearcoat:N,clearcoatMap:Ue,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ie,dispersion:S,iridescence:q,iridescenceMap:Fe,iridescenceThicknessMap:le,sheen:se,sheenColorMap:Te,sheenRoughnessMap:Xe,specularMap:Ge,specularColorMap:_e,specularIntensityMap:je,transmission:ae,transmissionMap:B,thicknessMap:Se,gradientMap:ce,opaque:M.transparent===!1&&M.blending===Xi&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:de,alphaHash:re,combine:M.combine,mapUv:wt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:Vt&&x(M.lightMap.channel),bumpMapUv:lt&&x(M.bumpMap.channel),normalMapUv:_t&&x(M.normalMap.channel),displacementMapUv:De&&x(M.displacementMap.channel),emissiveMapUv:ct&&x(M.emissiveMap.channel),metalnessMapUv:Ve&&x(M.metalnessMap.channel),roughnessMapUv:tt&&x(M.roughnessMap.channel),anisotropyMapUv:ee&&x(M.anisotropyMap.channel),clearcoatMapUv:Ue&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(M.sheenRoughnessMap.channel),specularMapUv:Ge&&x(M.specularMap.channel),specularColorMapUv:_e&&x(M.specularColorMap.channel),specularIntensityMapUv:je&&x(M.specularIntensityMap.channel),transmissionMapUv:B&&x(M.transmissionMap.channel),thicknessMapUv:Se&&x(M.thicknessMap.channel),alphaMapUv:Re&&x(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(_t||Lt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(wt||Re),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:me,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:ct&&M.emissiveMap.isVideoTexture===!0&&at.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bn,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function u(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)y.push(D),y.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(b(y,M),C(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function C(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function T(M){const y=g[M.type];let D;if(y){const z=En[y];D=gd.clone(z.uniforms)}else D=M.uniforms;return D}function P(M,y){let D;for(let z=0,H=h.length;z<H;z++){const J=h[z];if(J.cacheKey===y){D=J,++D.usedTimes;break}}return D===void 0&&(D=new og(s,y,M,r),h.push(D)),D}function I(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function L(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:T,acquireProgram:P,releaseProgram:I,releaseShaderCache:L,programs:h,dispose:U}}function dg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ug(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,p,g,x,m){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function a(d,f,p,g,x,m){const u=o(d,f,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(d,f,p,g,x,m){const u=o(d,f,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||ug),n.length>1&&n.sort(f||Gl),i.length>1&&i.sort(f||Gl)}function h(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function fg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Wl,s.set(n,[o])):i>=r.length?(o=new Wl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function pg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new st};break;case"SpotLight":t={position:new k,direction:new k,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function mg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gg=0;function _g(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vg(s){const e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,r=new Qe,o=new Qe;function a(c){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,b=0,C=0,T=0,P=0,I=0,L=0;c.sort(_g);for(let M=0,y=c.length;M<y;M++){const D=c[M],z=D.color,H=D.intensity,J=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*H,d+=z.g*H,f+=z.b*H;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],H);L++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=O,p++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(z).multiplyScalar(H),O.distance=J,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[x]=O;const Q=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,Q.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[x]=Q.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=Z,T++}x++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(z).multiplyScalar(H),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=O,m++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const Q=D.shadow,W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=D.shadow.matrix,C++}n.point[g]=O,g++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(H),O.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[u]=O,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==b||U.numPointShadows!==C||U.numSpotShadows!==T||U.numSpotMaps!==P||U.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=b,U.numPointShadows=C,U.numSpotShadows=T,U.numSpotMaps=P,U.numLightProbes=L,n.version=gg++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const C=c[u];if(C.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),d++}else if(C.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(C.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(C.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Xl(s){const e=new vg(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Xl(s),e.set(i,[a])):r>=o.length?(a=new Xl(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function Mg(s,e,t){let n=new Sa;const i=new Ke,r=new Ke,o=new pt,a=new Cd({depthPacking:Eh}),l=new Pd,c={},h=t.maxTextureSize,d={[Vn]:nn,[nn]:Vn,[bn]:bn},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:yg,fragmentShader:Sg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let u=this.type;this.render=function(I,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Qn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=u!==Fn&&this.type===Fn,J=u===Fn&&this.type!==Fn;for(let Z=0,O=I.length;Z<O;Z++){const Q=I[Z],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const oe=W.getFrameExtents();if(i.multiply(oe),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/oe.x),i.x=r.x*oe.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/oe.y),i.y=r.y*oe.y,W.mapSize.y=r.y)),W.map===null||H===!0||J===!0){const pe=this.type!==Fn?{minFilter:ln,magFilter:ln}:{};W.map!==null&&W.map.dispose(),W.map=new gi(i.x,i.y,pe),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const fe=W.getViewportCount();for(let pe=0;pe<fe;pe++){const be=W.getViewport(pe);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),z.viewport(o),W.updateMatrices(Q,pe),n=W.getFrustum(),T(L,U,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Fn&&b(W,U),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,D)};function b(I,L){const U=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new gi(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(L,null,U,f,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(L,null,U,p,x,null)}function C(I,L,U,M){let y=null;const D=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)y=D;else if(y=U.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const z=y.uuid,H=L.uuid;let J=c[z];J===void 0&&(J={},c[z]=J);let Z=J[H];Z===void 0&&(Z=y.clone(),J[H]=Z,L.addEventListener("dispose",P)),y=Z}if(y.visible=L.visible,y.wireframe=L.wireframe,M===Fn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:d[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=s.properties.get(y);z.light=U}return y}function T(I,L,U,M,y){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===Fn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const H=e.update(I),J=I.material;if(Array.isArray(J)){const Z=H.groups;for(let O=0,Q=Z.length;O<Q;O++){const W=Z[O],oe=J[W.materialIndex];if(oe&&oe.visible){const fe=C(I,oe,M,y);I.onBeforeShadow(s,I,L,U,H,fe,W),s.renderBufferDirect(U,null,H,fe,I,W),I.onAfterShadow(s,I,L,U,H,fe,W)}}}else if(J.visible){const Z=C(I,J,M,y);I.onBeforeShadow(s,I,L,U,H,Z,null),s.renderBufferDirect(U,null,H,Z,I,null),I.onAfterShadow(s,I,L,U,H,Z,null)}}const z=I.children;for(let H=0,J=z.length;H<J;H++)T(z[H],L,U,M,y)}function P(I){I.target.removeEventListener("dispose",P);for(const U in c){const M=c[U],y=I.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Eg={[wo]:Ao,[Ro]:Lo,[Co]:Io,[Yi]:Po,[Ao]:wo,[Lo]:Ro,[Io]:Co,[Po]:Yi};function bg(s,e){function t(){let B=!1;const Se=new pt;let ce=null;const Re=new pt(0,0,0,0);return{setMask:function(de){ce!==de&&!B&&(s.colorMask(de,de,de,de),ce=de)},setLocked:function(de){B=de},setClear:function(de,re,Ce,Je,St){St===!0&&(de*=Je,re*=Je,Ce*=Je),Se.set(de,re,Ce,Je),Re.equals(Se)===!1&&(s.clearColor(de,re,Ce,Je),Re.copy(Se))},reset:function(){B=!1,ce=null,Re.set(-1,0,0,0)}}}function n(){let B=!1,Se=!1,ce=null,Re=null,de=null;return{setReversed:function(re){if(Se!==re){const Ce=e.get("EXT_clip_control");re?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Se=re;const Je=de;de=null,this.setClear(Je)}},getReversed:function(){return Se},setTest:function(re){re?ie(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(re){ce!==re&&!B&&(s.depthMask(re),ce=re)},setFunc:function(re){if(Se&&(re=Eg[re]),Re!==re){switch(re){case wo:s.depthFunc(s.NEVER);break;case Ao:s.depthFunc(s.ALWAYS);break;case Ro:s.depthFunc(s.LESS);break;case Yi:s.depthFunc(s.LEQUAL);break;case Co:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Lo:s.depthFunc(s.GREATER);break;case Io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=re}},setLocked:function(re){B=re},setClear:function(re){de!==re&&(Se&&(re=1-re),s.clearDepth(re),de=re)},reset:function(){B=!1,ce=null,Re=null,de=null,Se=!1}}}function i(){let B=!1,Se=null,ce=null,Re=null,de=null,re=null,Ce=null,Je=null,St=null;return{setTest:function(nt){B||(nt?ie(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(nt){Se!==nt&&!B&&(s.stencilMask(nt),Se=nt)},setFunc:function(nt,Qt,fn){(ce!==nt||Re!==Qt||de!==fn)&&(s.stencilFunc(nt,Qt,fn),ce=nt,Re=Qt,de=fn)},setOp:function(nt,Qt,fn){(re!==nt||Ce!==Qt||Je!==fn)&&(s.stencilOp(nt,Qt,fn),re=nt,Ce=Qt,Je=fn)},setLocked:function(nt){B=nt},setClear:function(nt){St!==nt&&(s.clearStencil(nt),St=nt)},reset:function(){B=!1,Se=null,ce=null,Re=null,de=null,re=null,Ce=null,Je=null,St=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,C=null,T=null,P=null,I=null,L=new st(0,0,0),U=0,M=!1,y=null,D=null,z=null,H=null,J=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let oe=null,fe={};const pe=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Ee=new pt().fromArray(pe),X=new pt().fromArray(be);function K(B,Se,ce,Re){const de=new Uint8Array(4),re=s.createTexture();s.bindTexture(B,re),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<ce;Ce++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(Se+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return re}const ne={};ne[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(s.DEPTH_TEST),o.setFunc(Yi),lt(!1),_t(Pa),ie(s.CULL_FACE),F(Qn);function ie(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function me(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Ze(B,Se){return d[B]!==Se?(s.bindFramebuffer(B,Se),d[B]=Se,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Se),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function ze(B,Se){let ce=p,Re=!1;if(B){ce=f.get(Se),ce===void 0&&(ce=[],f.set(Se,ce));const de=B.textures;if(ce.length!==de.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let re=0,Ce=de.length;re<Ce;re++)ce[re]=s.COLOR_ATTACHMENT0+re;ce.length=de.length,Re=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Re=!0);Re&&s.drawBuffers(ce)}function wt(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const At={[ui]:s.FUNC_ADD,[$c]:s.FUNC_SUBTRACT,[Yc]:s.FUNC_REVERSE_SUBTRACT};At[jc]=s.MIN,At[Jc]=s.MAX;const dt={[Kc]:s.ZERO,[Zc]:s.ONE,[Qc]:s.SRC_COLOR,[bo]:s.SRC_ALPHA,[rh]:s.SRC_ALPHA_SATURATE,[ih]:s.DST_COLOR,[th]:s.DST_ALPHA,[eh]:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,[sh]:s.ONE_MINUS_DST_COLOR,[nh]:s.ONE_MINUS_DST_ALPHA,[oh]:s.CONSTANT_COLOR,[ah]:s.ONE_MINUS_CONSTANT_COLOR,[lh]:s.CONSTANT_ALPHA,[ch]:s.ONE_MINUS_CONSTANT_ALPHA};function F(B,Se,ce,Re,de,re,Ce,Je,St,nt){if(B===Qn){x===!0&&(me(s.BLEND),x=!1);return}if(x===!1&&(ie(s.BLEND),x=!0),B!==qc){if(B!==m||nt!==M){if((u!==ui||T!==ui)&&(s.blendEquation(s.FUNC_ADD),u=ui,T=ui),nt)switch(B){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case La:s.blendFunc(s.ONE,s.ONE);break;case Ia:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Da:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case La:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ia:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Da:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,C=null,P=null,I=null,L.set(0,0,0),U=0,m=B,M=nt}return}de=de||Se,re=re||ce,Ce=Ce||Re,(Se!==u||de!==T)&&(s.blendEquationSeparate(At[Se],At[de]),u=Se,T=de),(ce!==b||Re!==C||re!==P||Ce!==I)&&(s.blendFuncSeparate(dt[ce],dt[Re],dt[re],dt[Ce]),b=ce,C=Re,P=re,I=Ce),(Je.equals(L)===!1||St!==U)&&(s.blendColor(Je.r,Je.g,Je.b,St),L.copy(Je),U=St),m=B,M=!1}function Vt(B,Se){B.side===bn?me(s.CULL_FACE):ie(s.CULL_FACE);let ce=B.side===nn;Se&&(ce=!ce),lt(ce),B.blending===Xi&&B.transparent===!1?F(Qn):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Re=B.stencilWrite;a.setTest(Re),Re&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ct(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){y!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),y=B)}function _t(B){B!==Wc?(ie(s.CULL_FACE),B!==D&&(B===Pa?s.cullFace(s.BACK):B===Xc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),D=B}function De(B){B!==z&&(O&&s.lineWidth(B),z=B)}function ct(B,Se,ce){B?(ie(s.POLYGON_OFFSET_FILL),(H!==Se||J!==ce)&&(s.polygonOffset(Se,ce),H=Se,J=ce)):me(s.POLYGON_OFFSET_FILL)}function Ve(B){B?ie(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function tt(B){B===void 0&&(B=s.TEXTURE0+Z-1),oe!==B&&(s.activeTexture(B),oe=B)}function Lt(B,Se,ce){ce===void 0&&(oe===null?ce=s.TEXTURE0+Z-1:ce=oe);let Re=fe[ce];Re===void 0&&(Re={type:void 0,texture:void 0},fe[ce]=Re),(Re.type!==B||Re.texture!==Se)&&(oe!==ce&&(s.activeTexture(ce),oe=ce),s.bindTexture(B,Se||ne[B]),Re.type=B,Re.texture=Se)}function N(){const B=fe[oe];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(B){Ee.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Ee.copy(B))}function Xe(B){X.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function Ge(B,Se){let ce=c.get(Se);ce===void 0&&(ce=new WeakMap,c.set(Se,ce));let Re=ce.get(B);Re===void 0&&(Re=s.getUniformBlockIndex(Se,B.name),ce.set(B,Re))}function _e(B,Se){const Re=c.get(Se).get(B);l.get(Se)!==Re&&(s.uniformBlockBinding(Se,Re,B.__bindingPointIndex),l.set(Se,Re))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},oe=null,fe={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,b=null,C=null,T=null,P=null,I=null,L=new st(0,0,0),U=0,M=!1,y=null,D=null,z=null,H=null,J=null,Ee.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:me,bindFramebuffer:Ze,drawBuffers:ze,useProgram:wt,setBlending:F,setMaterial:Vt,setFlipSided:lt,setCullFace:_t,setLineWidth:De,setPolygonOffset:ct,setScissorTest:Ve,activeTexture:tt,bindTexture:Lt,unbindTexture:N,compressedTexImage2D:S,compressedTexImage3D:q,texImage2D:Fe,texImage3D:le,updateUBOMapping:Ge,uniformBlockBinding:_e,texStorage2D:ve,texStorage3D:Ie,texSubImage2D:se,texSubImage3D:ae,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ue,scissor:Te,viewport:Xe,reset:je}}function Tg(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,S){return p?new OffscreenCanvas(N,S):bs("canvas")}function x(N,S,q){let se=1;const ae=Lt(N);if((ae.width>q||ae.height>q)&&(se=q/Math.max(ae.width,ae.height)),se<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ee=Math.floor(se*ae.width),Ue=Math.floor(se*ae.height);d===void 0&&(d=g(ee,Ue));const ve=S?g(ee,Ue):d;return ve.width=ee,ve.height=Ue,ve.getContext("2d").drawImage(N,0,0,ee,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+Ue+")."),ve}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),N;return N}function m(N){return N.generateMipmaps}function u(N){s.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(N,S,q,se,ae=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ee=S;if(S===s.RED&&(q===s.FLOAT&&(ee=s.R32F),q===s.HALF_FLOAT&&(ee=s.R16F),q===s.UNSIGNED_BYTE&&(ee=s.R8)),S===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ee=s.R8UI),q===s.UNSIGNED_SHORT&&(ee=s.R16UI),q===s.UNSIGNED_INT&&(ee=s.R32UI),q===s.BYTE&&(ee=s.R8I),q===s.SHORT&&(ee=s.R16I),q===s.INT&&(ee=s.R32I)),S===s.RG&&(q===s.FLOAT&&(ee=s.RG32F),q===s.HALF_FLOAT&&(ee=s.RG16F),q===s.UNSIGNED_BYTE&&(ee=s.RG8)),S===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ee=s.RG8UI),q===s.UNSIGNED_SHORT&&(ee=s.RG16UI),q===s.UNSIGNED_INT&&(ee=s.RG32UI),q===s.BYTE&&(ee=s.RG8I),q===s.SHORT&&(ee=s.RG16I),q===s.INT&&(ee=s.RG32I)),S===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),q===s.UNSIGNED_INT&&(ee=s.RGB32UI),q===s.BYTE&&(ee=s.RGB8I),q===s.SHORT&&(ee=s.RGB16I),q===s.INT&&(ee=s.RGB32I)),S===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),q===s.UNSIGNED_INT&&(ee=s.RGBA32UI),q===s.BYTE&&(ee=s.RGBA8I),q===s.SHORT&&(ee=s.RGBA16I),q===s.INT&&(ee=s.RGBA32I)),S===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),S===s.RGBA){const Ue=ae?xr:at.getTransfer(se);q===s.FLOAT&&(ee=s.RGBA32F),q===s.HALF_FLOAT&&(ee=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ee=Ue===xt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(N,S){let q;return N?S===null||S===mi||S===Ss?q=s.DEPTH24_STENCIL8:S===Tn?q=s.DEPTH32F_STENCIL8:S===ys&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===mi||S===Ss?q=s.DEPTH_COMPONENT24:S===Tn?q=s.DEPTH_COMPONENT32F:S===ys&&(q=s.DEPTH_COMPONENT16),q}function P(N,S){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==ln&&N.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function I(N){const S=N.target;S.removeEventListener("dispose",I),U(S),S.isVideoTexture&&h.delete(S)}function L(N){const S=N.target;S.removeEventListener("dispose",L),y(S)}function U(N){const S=n.get(N);if(S.__webglInit===void 0)return;const q=N.source,se=f.get(q);if(se){const ae=se[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&M(N),Object.keys(se).length===0&&f.delete(q)}n.remove(N)}function M(N){const S=n.get(N);s.deleteTexture(S.__webglTexture);const q=N.source,se=f.get(q);delete se[S.__cacheKey],o.memory.textures--}function y(N){const S=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let ae=0;ae<S.__webglFramebuffer[se].length;ae++)s.deleteFramebuffer(S.__webglFramebuffer[se][ae]);else s.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)s.deleteFramebuffer(S.__webglFramebuffer[se]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=N.textures;for(let se=0,ae=q.length;se<ae;se++){const ee=n.get(q[se]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(q[se])}n.remove(N)}let D=0;function z(){D=0}function H(){const N=D;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),D+=1,N}function J(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function Z(N,S){const q=n.get(N);if(N.isVideoTexture&&Ve(N),N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){const se=N.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(q,N,S);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+S)}function O(N,S){const q=n.get(N);if(N.version>0&&q.__version!==N.version){ne(q,N,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+S)}function Q(N,S){const q=n.get(N);if(N.version>0&&q.__version!==N.version){ne(q,N,S);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+S)}function W(N,S){const q=n.get(N);if(N.version>0&&q.__version!==N.version){ie(q,N,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+S)}const oe={[pi]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[Uo]:s.MIRRORED_REPEAT},fe={[ln]:s.NEAREST,[yh]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[zr]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},pe={[Th]:s.NEVER,[Lh]:s.ALWAYS,[wh]:s.LESS,[uc]:s.LEQUAL,[Ah]:s.EQUAL,[Ph]:s.GEQUAL,[Rh]:s.GREATER,[Ch]:s.NOTEQUAL};function be(N,S){if(S.type===Tn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===zr||S.magFilter===Ds||S.magFilter===On||S.minFilter===an||S.minFilter===zr||S.minFilter===Ds||S.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,oe[S.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,oe[S.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,oe[S.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,fe[S.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==Ds&&S.minFilter!==On||S.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(N,S){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",I));const se=S.source;let ae=f.get(se);ae===void 0&&(ae={},f.set(se,ae));const ee=J(S);if(ee!==N.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ae[ee].usedTimes++;const Ue=ae[N.__cacheKey];Ue!==void 0&&(ae[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&M(S)),N.__cacheKey=ee,N.__webglTexture=ae[ee].texture}return q}function X(N,S,q){return Math.floor(Math.floor(N/q)/S)}function K(N,S,q,se){const ee=N.updateRanges;if(ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,q,se,S.data);else{ee.sort((le,Te)=>le.start-Te.start);let Ue=0;for(let le=1;le<ee.length;le++){const Te=ee[Ue],Xe=ee[le],Ge=Te.start+Te.count,_e=X(Xe.start,S.width,4),je=X(Te.start,S.width,4);Xe.start<=Ge+1&&_e===je&&X(Xe.start+Xe.count-1,S.width,4)===_e?Te.count=Math.max(Te.count,Xe.start+Xe.count-Te.start):(++Ue,ee[Ue]=Xe)}ee.length=Ue+1;const ve=s.getParameter(s.UNPACK_ROW_LENGTH),Ie=s.getParameter(s.UNPACK_SKIP_PIXELS),Fe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let le=0,Te=ee.length;le<Te;le++){const Xe=ee[le],Ge=Math.floor(Xe.start/4),_e=Math.ceil(Xe.count/4),je=Ge%S.width,B=Math.floor(Ge/S.width),Se=_e,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,je),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,je,B,Se,ce,q,se,S.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ve),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,Fe)}}function ne(N,S,q){let se=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=s.TEXTURE_3D);const ae=Ee(N,S),ee=S.source;t.bindTexture(se,N.__webglTexture,s.TEXTURE0+q);const Ue=n.get(ee);if(ee.version!==Ue.__version||ae===!0){t.activeTexture(s.TEXTURE0+q);const ve=at.getPrimaries(at.workingColorSpace),Ie=S.colorSpace===Zn?null:at.getPrimaries(S.colorSpace),Fe=S.colorSpace===Zn||ve===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=x(S.image,!1,i.maxTextureSize);le=tt(S,le);const Te=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type);let Ge=C(S.internalFormat,Te,Xe,S.colorSpace,S.isVideoTexture);be(se,S);let _e;const je=S.mipmaps,B=S.isVideoTexture!==!0,Se=Ue.__version===void 0||ae===!0,ce=ee.dataReady,Re=P(S,le);if(S.isDepthTexture)Ge=T(S.format===Es,S.type),Se&&(B?t.texStorage2D(s.TEXTURE_2D,1,Ge,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Ge,le.width,le.height,0,Te,Xe,null));else if(S.isDataTexture)if(je.length>0){B&&Se&&t.texStorage2D(s.TEXTURE_2D,Re,Ge,je[0].width,je[0].height);for(let de=0,re=je.length;de<re;de++)_e=je[de],B?ce&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,Xe,_e.data):t.texImage2D(s.TEXTURE_2D,de,Ge,_e.width,_e.height,0,Te,Xe,_e.data);S.generateMipmaps=!1}else B?(Se&&t.texStorage2D(s.TEXTURE_2D,Re,Ge,le.width,le.height),ce&&K(S,le,Te,Xe)):t.texImage2D(s.TEXTURE_2D,0,Ge,le.width,le.height,0,Te,Xe,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){B&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ge,je[0].width,je[0].height,le.depth);for(let de=0,re=je.length;de<re;de++)if(_e=je[de],S.format!==un)if(Te!==null)if(B){if(ce)if(S.layerUpdates.size>0){const Ce=Sl(_e.width,_e.height,S.format,S.type);for(const Je of S.layerUpdates){const St=_e.data.subarray(Je*Ce/_e.data.BYTES_PER_ELEMENT,(Je+1)*Ce/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Je,_e.width,_e.height,1,Te,St)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,le.depth,Te,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Ge,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,le.depth,Te,Xe,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Ge,_e.width,_e.height,le.depth,0,Te,Xe,_e.data)}else{B&&Se&&t.texStorage2D(s.TEXTURE_2D,Re,Ge,je[0].width,je[0].height);for(let de=0,re=je.length;de<re;de++)_e=je[de],S.format!==un?Te!==null?B?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Ge,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ce&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,Xe,_e.data):t.texImage2D(s.TEXTURE_2D,de,Ge,_e.width,_e.height,0,Te,Xe,_e.data)}else if(S.isDataArrayTexture)if(B){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ge,le.width,le.height,le.depth),ce)if(S.layerUpdates.size>0){const de=Sl(le.width,le.height,S.format,S.type);for(const re of S.layerUpdates){const Ce=le.data.subarray(re*de/le.data.BYTES_PER_ELEMENT,(re+1)*de/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,Te,Xe,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,Xe,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,le.width,le.height,le.depth,0,Te,Xe,le.data);else if(S.isData3DTexture)B?(Se&&t.texStorage3D(s.TEXTURE_3D,Re,Ge,le.width,le.height,le.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,Xe,le.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,le.width,le.height,le.depth,0,Te,Xe,le.data);else if(S.isFramebufferTexture){if(Se)if(B)t.texStorage2D(s.TEXTURE_2D,Re,Ge,le.width,le.height);else{let de=le.width,re=le.height;for(let Ce=0;Ce<Re;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Ge,de,re,0,Te,Xe,null),de>>=1,re>>=1}}else if(je.length>0){if(B&&Se){const de=Lt(je[0]);t.texStorage2D(s.TEXTURE_2D,Re,Ge,de.width,de.height)}for(let de=0,re=je.length;de<re;de++)_e=je[de],B?ce&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Te,Xe,_e):t.texImage2D(s.TEXTURE_2D,de,Ge,Te,Xe,_e);S.generateMipmaps=!1}else if(B){if(Se){const de=Lt(le);t.texStorage2D(s.TEXTURE_2D,Re,Ge,de.width,de.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Xe,le)}else t.texImage2D(s.TEXTURE_2D,0,Ge,Te,Xe,le);m(S)&&u(se),Ue.__version=ee.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function ie(N,S,q){if(S.image.length!==6)return;const se=Ee(N,S),ae=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+q);const ee=n.get(ae);if(ae.version!==ee.__version||se===!0){t.activeTexture(s.TEXTURE0+q);const Ue=at.getPrimaries(at.workingColorSpace),ve=S.colorSpace===Zn?null:at.getPrimaries(S.colorSpace),Ie=S.colorSpace===Zn||Ue===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let re=0;re<6;re++)!Fe&&!le?Te[re]=x(S.image[re],!0,i.maxCubemapSize):Te[re]=le?S.image[re].image:S.image[re],Te[re]=tt(S,Te[re]);const Xe=Te[0],Ge=r.convert(S.format,S.colorSpace),_e=r.convert(S.type),je=C(S.internalFormat,Ge,_e,S.colorSpace),B=S.isVideoTexture!==!0,Se=ee.__version===void 0||se===!0,ce=ae.dataReady;let Re=P(S,Xe);be(s.TEXTURE_CUBE_MAP,S);let de;if(Fe){B&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,je,Xe.width,Xe.height);for(let re=0;re<6;re++){de=Te[re].mipmaps;for(let Ce=0;Ce<de.length;Ce++){const Je=de[Ce];S.format!==un?Ge!==null?B?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,Je.width,Je.height,Ge,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,je,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,Je.width,Je.height,Ge,_e,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,je,Je.width,Je.height,0,Ge,_e,Je.data)}}}else{if(de=S.mipmaps,B&&Se){de.length>0&&Re++;const re=Lt(Te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,je,re.width,re.height)}for(let re=0;re<6;re++)if(le){B?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Te[re].width,Te[re].height,Ge,_e,Te[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,Te[re].width,Te[re].height,0,Ge,_e,Te[re].data);for(let Ce=0;Ce<de.length;Ce++){const St=de[Ce].image[re].image;B?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,St.width,St.height,Ge,_e,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,je,St.width,St.height,0,Ge,_e,St.data)}}else{B?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ge,_e,Te[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,Ge,_e,Te[re]);for(let Ce=0;Ce<de.length;Ce++){const Je=de[Ce];B?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,Ge,_e,Je.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,je,Ge,_e,Je.image[re])}}}m(S)&&u(s.TEXTURE_CUBE_MAP),ee.__version=ae.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function me(N,S,q,se,ae,ee){const Ue=r.convert(q.format,q.colorSpace),ve=r.convert(q.type),Ie=C(q.internalFormat,Ue,ve,q.colorSpace),Fe=n.get(S),le=n.get(q);if(le.__renderTarget=S,!Fe.__hasExternalTextures){const Te=Math.max(1,S.width>>ee),Xe=Math.max(1,S.height>>ee);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,Ie,Te,Xe,S.depth,0,Ue,ve,null):t.texImage2D(ae,ee,Ie,Te,Xe,0,Ue,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ct(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ae,le.__webglTexture,0,De(S)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ae,le.__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(N,S,q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),S.depthBuffer){const se=S.depthTexture,ae=se&&se.isDepthTexture?se.type:null,ee=T(S.stencilBuffer,ae),Ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=De(S);ct(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,ee,S.width,S.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ee,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,N)}else{const se=S.textures;for(let ae=0;ae<se.length;ae++){const ee=se[ae],Ue=r.convert(ee.format,ee.colorSpace),ve=r.convert(ee.type),Ie=C(ee.internalFormat,Ue,ve,ee.colorSpace),Fe=De(S);q&&ct(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ie,S.width,S.height):ct(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,Ie,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ze(N,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const ae=se.__webglTexture,ee=De(S);if(S.depthTexture.format===Ms)ct(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(S.depthTexture.format===Es)ct(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function wt(N){const S=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const se=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){const ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ae)};se.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=se}if(N.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const se=N.texture.mipmaps;se&&se.length>0?ze(S.__webglFramebuffer[0],N):ze(S.__webglFramebuffer,N)}else if(q){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=s.createRenderbuffer(),Ze(S.__webglDepthbuffer[se],N,!1);else{const ae=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ee)}}else{const se=N.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ze(S.__webglDepthbuffer,N,!1);else{const ae=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(N,S,q){const se=n.get(N);S!==void 0&&me(se.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&wt(N)}function dt(N){const S=N.texture,q=n.get(N),se=n.get(S);N.addEventListener("dispose",L);const ae=N.textures,ee=N.isWebGLCubeRenderTarget===!0,Ue=ae.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=S.version,o.memory.textures++),ee){q.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[ve]=[];for(let Ie=0;Ie<S.mipmaps.length;Ie++)q.__webglFramebuffer[ve][Ie]=s.createFramebuffer()}else q.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)q.__webglFramebuffer[ve]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let ve=0,Ie=ae.length;ve<Ie;ve++){const Fe=n.get(ae[ve]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&ct(N)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const Ie=ae[ve];q.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ve]);const Fe=r.convert(Ie.format,Ie.colorSpace),le=r.convert(Ie.type),Te=C(Ie.internalFormat,Fe,le,Ie.colorSpace,N.isXRRenderTarget===!0),Xe=De(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Te,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,q.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ze(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),be(s.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ie=0;Ie<S.mipmaps.length;Ie++)me(q.__webglFramebuffer[ve][Ie],N,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie);else me(q.__webglFramebuffer[ve],N,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(S)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ve=0,Ie=ae.length;ve<Ie;ve++){const Fe=ae[ve],le=n.get(Fe);t.bindTexture(s.TEXTURE_2D,le.__webglTexture),be(s.TEXTURE_2D,Fe),me(q.__webglFramebuffer,N,Fe,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),m(Fe)&&u(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,se.__webglTexture),be(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Ie=0;Ie<S.mipmaps.length;Ie++)me(q.__webglFramebuffer[Ie],N,S,s.COLOR_ATTACHMENT0,ve,Ie);else me(q.__webglFramebuffer,N,S,s.COLOR_ATTACHMENT0,ve,0);m(S)&&u(ve),t.unbindTexture()}N.depthBuffer&&wt(N)}function F(N){const S=N.textures;for(let q=0,se=S.length;q<se;q++){const ae=S[q];if(m(ae)){const ee=b(N),Ue=n.get(ae).__webglTexture;t.bindTexture(ee,Ue),u(ee),t.unbindTexture()}}}const Vt=[],lt=[];function _t(N){if(N.samples>0){if(ct(N)===!1){const S=N.textures,q=N.width,se=N.height;let ae=s.COLOR_BUFFER_BIT;const ee=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=n.get(N),ve=S.length>1;if(ve)for(let Fe=0;Fe<S.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ie=N.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Fe=0;Fe<S.length;Fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);const le=n.get(S[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,q,se,0,0,q,se,ae,s.NEAREST),l===!0&&(Vt.length=0,lt.length=0,Vt.push(s.COLOR_ATTACHMENT0+Fe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Vt.push(ee),lt.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Fe=0;Fe<S.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);const le=n.get(S[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const S=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function De(N){return Math.min(i.maxSamples,N.samples)}function ct(N){const S=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ve(N){const S=o.render.frame;h.get(N)!==S&&(h.set(N,S),N.update())}function tt(N,S){const q=N.colorSpace,se=N.format,ae=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Ki&&q!==Zn&&(at.getTransfer(q)===xt?(se!==un||ae!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}function Lt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=At,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ct}function wg(s,e){function t(n,i=Zn){let r;const o=at.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===ua)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return s.BYTE;if(n===rc)return s.SHORT;if(n===ys)return s.UNSIGNED_SHORT;if(n===da)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Ts)return s.HALF_FLOAT;if(n===ac)return s.ALPHA;if(n===lc)return s.RGB;if(n===un)return s.RGBA;if(n===Ms)return s.DEPTH_COMPONENT;if(n===Es)return s.DEPTH_STENCIL;if(n===cc)return s.RED;if(n===pa)return s.RED_INTEGER;if(n===hc)return s.RG;if(n===ma)return s.RG_INTEGER;if(n===ga)return s.RGBA_INTEGER;if(n===ur||n===fr||n===pr||n===mr)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Oo||n===Bo||n===ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===Vo||n===Ho)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===Vo)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ho)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Go||n===Wo||n===Xo||n===qo||n===$o||n===Yo||n===jo||n===Jo||n===Ko||n===Zo||n===Qo||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===ia||n===sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===ra||n===oa||n===aa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`;class Cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new jt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ti({vertexShader:Ag,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends _i{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const x=new Cg,m=t.getContextAttributes();let u=null,b=null;const C=[],T=[],P=new Ke;let I=null;const L=new $t;L.viewport=new pt;const U=new $t;U.viewport=new pt;const M=[L,U],y=new Yd;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=C[X];return K===void 0&&(K=new lo,C[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=C[X];return K===void 0&&(K=new lo,C[X]=K),K.getGripSpace()},this.getHand=function(X){let K=C[X];return K===void 0&&(K=new lo,C[X]=K),K.getHandSpace()};function H(X){const K=T.indexOf(X.inputSource);if(K===-1)return;const ne=C[K];ne!==void 0&&(ne.update(X.inputSource,X.frame,c||o),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",Z);for(let X=0;X<C.length;X++){const K=T[X];K!==null&&(T[X]=null,C[X].disconnect(K))}D=null,z=null,x.reset(),e.setRenderTarget(u),p=null,f=null,d=null,i=null,b=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ie=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Es:Ms,ie=m.stencil?Ss:mi);const Ze={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new gi(f.textureWidth,f.textureHeight,{format:un,type:wn,depthTexture:new Ac(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new gi(p.framebufferWidth,p.framebufferHeight,{format:un,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let K=0;K<X.removed.length;K++){const ne=X.removed[K],ie=T.indexOf(ne);ie>=0&&(T[ie]=null,C[ie].disconnect(ne))}for(let K=0;K<X.added.length;K++){const ne=X.added[K];let ie=T.indexOf(ne);if(ie===-1){for(let Ze=0;Ze<C.length;Ze++)if(Ze>=T.length){T.push(ne),ie=Ze;break}else if(T[Ze]===null){T[Ze]=ne,ie=Ze;break}if(ie===-1)break}const me=C[ie];me&&me.connect(ne)}}const O=new k,Q=new k;function W(X,K,ne){O.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(ne.matrixWorld);const ie=O.distanceTo(Q),me=K.projectionMatrix.elements,Ze=ne.projectionMatrix.elements,ze=me[14]/(me[10]-1),wt=me[14]/(me[10]+1),At=(me[9]+1)/me[5],dt=(me[9]-1)/me[5],F=(me[8]-1)/me[0],Vt=(Ze[8]+1)/Ze[0],lt=ze*F,_t=ze*Vt,De=ie/(-F+Vt),ct=De*-F;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ct),X.translateZ(De),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),me[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ve=ze+De,tt=wt+De,Lt=lt-ct,N=_t+(ie-ct),S=At*wt/tt*Ve,q=dt*wt/tt*Ve;X.projectionMatrix.makePerspective(Lt,N,S,q,Ve,tt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function oe(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let K=X.near,ne=X.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(ne=x.depthFar)),y.near=U.near=L.near=K,y.far=U.far=L.far=ne,(D!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,z=y.far),L.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,y.layers.mask=L.layers.mask|U.layers.mask;const ie=X.parent,me=y.cameras;oe(y,ie);for(let Ze=0;Ze<me.length;Ze++)oe(me[Ze],ie);me.length===2?W(y,L,U):y.projectionMatrix.copy(L.projectionMatrix),fe(X,y,ie)};function fe(X,K,ne){ne===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let pe=null;function be(X,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ie=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let ze=0;ze<ne.length;ze++){const wt=ne[ze];let At=null;if(p!==null)At=p.getViewport(wt);else{const F=d.getViewSubImage(f,wt);At=F.viewport,ze===0&&(e.setRenderTargetTextures(b,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(b))}let dt=M[ze];dt===void 0&&(dt=new $t,dt.layers.enable(ze),dt.viewport=new pt,M[ze]=dt),dt.matrix.fromArray(wt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(wt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(At.x,At.y,At.width,At.height),ze===0&&(y.matrix.copy(dt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(dt)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const ze=d.getDepthInformation(ne[0]);ze&&ze.isValid&&ze.texture&&x.init(e,ze,i.renderState)}}for(let ne=0;ne<C.length;ne++){const ie=T[ne],me=C[ne];ie!==null&&me!==void 0&&me.update(ie,K,c||o)}pe&&pe(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ee=new Uc;Ee.setAnimationLoop(be),this.setAnimationLoop=function(X){pe=X},this.dispose=function(){}}}const hi=new hn,Lg=new Qe;function Ig(s,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,xc(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,b,C,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,T)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,b,C):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===nn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===nn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=e.get(u),C=b.envMap,T=b.envMapRotation;C&&(m.envMap.value=C,hi.copy(T),hi.x*=-1,hi.y*=-1,hi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(hi)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,C){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=C*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dg(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,C){const T=C.program;n.uniformBlockBinding(b,T)}function c(b,C){let T=i[b.id];T===void 0&&(g(b),T=h(b),i[b.id]=T,b.addEventListener("dispose",m));const P=C.program;n.updateUBOMapping(b,P);const I=e.render.frame;r[b.id]!==I&&(f(b),r[b.id]=I)}function h(b){const C=d();b.__bindingPointIndex=C;const T=s.createBuffer(),P=b.__size,I=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,T),T}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const C=i[b.id],T=b.uniforms,P=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let I=0,L=T.length;I<L;I++){const U=Array.isArray(T[I])?T[I]:[T[I]];for(let M=0,y=U.length;M<y;M++){const D=U[M];if(p(D,I,M,P)===!0){const z=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let Z=0;Z<H.length;Z++){const O=H[Z],Q=x(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,z+J,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,C,T,P){const I=b.value,L=C+"_"+T;if(P[L]===void 0)return typeof I=="number"||typeof I=="boolean"?P[L]=I:P[L]=I.clone(),!0;{const U=P[L];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return P[L]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(b){const C=b.uniforms;let T=0;const P=16;for(let L=0,U=C.length;L<U;L++){const M=Array.isArray(C[L])?C[L]:[C[L]];for(let y=0,D=M.length;y<D;y++){const z=M[y],H=Array.isArray(z.value)?z.value:[z.value];for(let J=0,Z=H.length;J<Z;J++){const O=H[J],Q=x(O),W=T%P,oe=W%Q.boundary,fe=W+oe;T+=oe,fe!==0&&P-fe<Q.storage&&(T+=P-fe),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=Q.storage}}}const I=T%P;return I>0&&(T+=P-I),b.__size=T,b.__cache={},this}function x(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),C}function m(b){const C=b.target;C.removeEventListener("dispose",m);const T=o.indexOf(C.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[C.id]),delete i[C.id],delete r[C.id]}function u(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:u}}class Ng{constructor(e={}){const{canvas:t=Yh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const b=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1;this._outputColorSpace=It;let I=0,L=0,U=null,M=-1,y=null;const D=new pt,z=new pt;let H=null;const J=new st(0);let Z=0,O=t.width,Q=t.height,W=1,oe=null,fe=null;const pe=new pt(0,0,O,Q),be=new pt(0,0,O,Q);let Ee=!1;const X=new Sa;let K=!1,ne=!1;const ie=new Qe,me=new Qe,Ze=new k,ze=new pt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function dt(){return U===null?W:1}let F=n;function Vt(w,V){return t.getContext(w,V)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ha}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",re,!1),F===null){const V="webgl2";if(F=Vt(V,w),F===null)throw Vt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let lt,_t,De,ct,Ve,tt,Lt,N,S,q,se,ae,ee,Ue,ve,Ie,Fe,le,Te,Xe,Ge,_e,je,B;function Se(){lt=new Wp(F),lt.init(),_e=new wg(F,lt),_t=new Op(F,lt,e,_e),De=new bg(F,lt),_t.reverseDepthBuffer&&f&&De.buffers.depth.setReversed(!0),ct=new $p(F),Ve=new dg,tt=new Tg(F,lt,De,Ve,_t,_e,ct),Lt=new kp(T),N=new Gp(T),S=new Zd(F),je=new Up(F,S),q=new Xp(F,S,ct,je),se=new jp(F,q,S,ct),Te=new Yp(F,_t,tt),Ie=new Bp(Ve),ae=new hg(T,Lt,N,lt,_t,je,Ie),ee=new Ig(T,Ve),Ue=new fg,ve=new xg(lt),le=new Np(T,Lt,N,De,se,p,l),Fe=new Mg(T,se,_t),B=new Dg(F,ct,_t,De),Xe=new Fp(F,lt,ct),Ge=new qp(F,lt,ct),ct.programs=ae.programs,T.capabilities=_t,T.extensions=lt,T.properties=Ve,T.renderLists=Ue,T.shadowMap=Fe,T.state=De,T.info=ct}Se();const ce=new Pg(T,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=lt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=lt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(O,Q,!1))},this.getSize=function(w){return w.set(O,Q)},this.setSize=function(w,V,$=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,Q=V,t.width=Math.floor(w*W),t.height=Math.floor(V*W),$===!0&&(t.style.width=w+"px",t.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(O*W,Q*W).floor()},this.setDrawingBufferSize=function(w,V,$){O=w,Q=V,W=$,t.width=Math.floor(w*$),t.height=Math.floor(V*$),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(pe)},this.setViewport=function(w,V,$,Y){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,V,$,Y),De.viewport(D.copy(pe).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,V,$,Y){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,V,$,Y),De.scissor(z.copy(be).multiplyScalar(W).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(w){De.setScissorTest(Ee=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,$=!0){let Y=0;if(w){let G=!1;if(U!==null){const ue=U.texture.format;G=ue===ga||ue===ma||ue===pa}if(G){const ue=U.texture.type,xe=ue===wn||ue===mi||ue===ys||ue===Ss||ue===ua||ue===fa,Pe=le.getClearColor(),we=le.getClearAlpha(),$e=Pe.r,Ye=Pe.g,Be=Pe.b;xe?(g[0]=$e,g[1]=Ye,g[2]=Be,g[3]=we,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=$e,x[1]=Ye,x[2]=Be,x[3]=we,F.clearBufferiv(F.COLOR,0,x))}else Y|=F.COLOR_BUFFER_BIT}V&&(Y|=F.DEPTH_BUFFER_BIT),$&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",re,!1),le.dispose(),Ue.dispose(),ve.dispose(),Ve.dispose(),Lt.dispose(),N.dispose(),se.dispose(),je.dispose(),B.dispose(),ae.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",As),ce.removeEventListener("sessionend",Rs),An.stop()};function Re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ct.autoReset,V=Fe.enabled,$=Fe.autoUpdate,Y=Fe.needsUpdate,G=Fe.type;Se(),ct.autoReset=w,Fe.enabled=V,Fe.autoUpdate=$,Fe.needsUpdate=Y,Fe.type=G}function re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){const V=w.target;V.removeEventListener("dispose",Ce),Je(V)}function Je(w){St(w),Ve.remove(w)}function St(w){const V=Ve.get(w).programs;V!==void 0&&(V.forEach(function($){ae.releaseProgram($)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,$,Y,G,ue){V===null&&(V=wt);const xe=G.isMesh&&G.matrixWorld.determinant()<0,Pe=Nr(w,V,$,Y,G);De.setMaterial(Y,xe);let we=$.index,$e=1;if(Y.wireframe===!0){if(we=q.getWireframeAttribute($),we===void 0)return;$e=2}const Ye=$.drawRange,Be=$.attributes.position;let et=Ye.start*$e,mt=(Ye.start+Ye.count)*$e;ue!==null&&(et=Math.max(et,ue.start*$e),mt=Math.min(mt,(ue.start+ue.count)*$e)),we!==null?(et=Math.max(et,0),mt=Math.min(mt,we.count)):Be!=null&&(et=Math.max(et,0),mt=Math.min(mt,Be.count));const Rt=mt-et;if(Rt<0||Rt===1/0)return;je.setup(G,Y,Pe,$,we);let Mt,gt=Xe;if(we!==null&&(Mt=S.get(we),gt=Ge,gt.setIndex(Mt)),G.isMesh)Y.wireframe===!0?(De.setLineWidth(Y.wireframeLinewidth*dt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(G.isLine){let He=Y.linewidth;He===void 0&&(He=1),De.setLineWidth(He*dt()),G.isLineSegments?gt.setMode(F.LINES):G.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else G.isPoints?gt.setMode(F.POINTS):G.isSprite&&gt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const He=G._multiDrawStarts,Ct=G._multiDrawCounts,ht=G._multiDrawCount,Gt=we?S.get(we).bytesPerElement:1,bt=Ve.get(Y).currentProgram.getUniforms();for(let Ht=0;Ht<ht;Ht++)bt.setValue(F,"_gl_DrawID",Ht),gt.render(He[Ht]/Gt,Ct[Ht])}else if(G.isInstancedMesh)gt.renderInstances(et,Rt,G.count);else if($.isInstancedBufferGeometry){const He=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ct=Math.min($.instanceCount,He);gt.renderInstances(et,Rt,Ct)}else gt.render(et,Rt)};function nt(w,V,$){w.transparent===!0&&w.side===bn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,yi(w,V,$),w.side=Vn,w.needsUpdate=!0,yi(w,V,$),w.side=bn):yi(w,V,$)}this.compile=function(w,V,$=null){$===null&&($=w),u=ve.get($),u.init(V),C.push(u),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),w!==$&&w.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights();const Y=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Pe=ue[xe];nt(Pe,$,G),Y.add(Pe)}else nt(ue,$,G),Y.add(ue)}),u=C.pop(),Y},this.compileAsync=function(w,V,$=null){const Y=this.compile(w,V,$);return new Promise(G=>{function ue(){if(Y.forEach(function(xe){Ve.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){G(w);return}setTimeout(ue,10)}lt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Qt=null;function fn(w){Qt&&Qt(w)}function As(){An.stop()}function Rs(){An.start()}const An=new Uc;An.setAnimationLoop(fn),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(w){Qt=w,ce.setAnimationLoop(w),w===null?An.stop():An.start()},ce.addEventListener("sessionstart",As),ce.addEventListener("sessionend",Rs),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(V),V=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,V,U),u=ve.get(w,C.length),u.init(V),C.push(u),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X.setFromProjectionMatrix(me),ne=this.localClippingEnabled,K=Ie.init(this.clippingPlanes,ne),m=Ue.get(w,b.length),m.init(),b.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ue=T.xr.getDepthSensingMesh();ue!==null&&as(ue,V,-1/0,T.sortObjects)}as(w,V,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(oe,fe),At=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,At&&le.addToRenderList(m,w),this.info.render.frame++,K===!0&&Ie.beginShadows();const $=u.state.shadowsArray;Fe.render($,w,V),K===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,G=m.transmissive;if(u.setupLights(),V.isArrayCamera){const ue=V.cameras;if(G.length>0)for(let xe=0,Pe=ue.length;xe<Pe;xe++){const we=ue[xe];ls(Y,G,w,we)}At&&le.render(w);for(let xe=0,Pe=ue.length;xe<Pe;xe++){const we=ue[xe];Cs(m,w,we,we.viewport)}}else G.length>0&&ls(Y,G,w,V),At&&le.render(w),Cs(m,w,V);U!==null&&L===0&&(tt.updateMultisampleRenderTarget(U),tt.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(T,w,V),je.resetDefaultState(),M=-1,y=null,C.pop(),C.length>0?(u=C[C.length-1],K===!0&&Ie.setGlobalState(T.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function as(w,V,$,Y){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){Y&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const xe=se.update(w),Pe=w.material;Pe.visible&&m.push(w,xe,Pe,$,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const xe=se.update(w),Pe=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ze.copy(xe.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Pe)){const we=xe.groups;for(let $e=0,Ye=we.length;$e<Ye;$e++){const Be=we[$e],et=Pe[Be.materialIndex];et&&et.visible&&m.push(w,xe,et,$,ze.z,Be)}}else Pe.visible&&m.push(w,xe,Pe,$,ze.z,null)}}const ue=w.children;for(let xe=0,Pe=ue.length;xe<Pe;xe++)as(ue[xe],V,$,Y)}function Cs(w,V,$,Y){const G=w.opaque,ue=w.transmissive,xe=w.transparent;u.setupLightsView($),K===!0&&Ie.setGlobalState(T.clippingPlanes,$),Y&&De.viewport(D.copy(Y)),G.length>0&&xi(G,V,$),ue.length>0&&xi(ue,V,$),xe.length>0&&xi(xe,V,$),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ls(w,V,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Y.id]===void 0&&(u.state.transmissionRenderTarget[Y.id]=new gi(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Ts:wn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ue=u.state.transmissionRenderTarget[Y.id],xe=Y.viewport||D;ue.setSize(xe.z*T.transmissionResolutionScale,xe.w*T.transmissionResolutionScale);const Pe=T.getRenderTarget(),we=T.getActiveCubeFace(),$e=T.getActiveMipmapLevel();T.setRenderTarget(ue),T.getClearColor(J),Z=T.getClearAlpha(),Z<1&&T.setClearColor(16777215,.5),T.clear(),At&&le.render($);const Ye=T.toneMapping;T.toneMapping=ei;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),u.setupLightsView(Y),K===!0&&Ie.setGlobalState(T.clippingPlanes,Y),xi(w,$,Y),tt.updateMultisampleRenderTarget(ue),tt.updateRenderTargetMipmap(ue),lt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let mt=0,Rt=V.length;mt<Rt;mt++){const Mt=V[mt],gt=Mt.object,He=Mt.geometry,Ct=Mt.material,ht=Mt.group;if(Ct.side===bn&&gt.layers.test(Y.layers)){const Gt=Ct.side;Ct.side=nn,Ct.needsUpdate=!0,cs(gt,$,Y,He,Ct,ht),Ct.side=Gt,Ct.needsUpdate=!0,et=!0}}et===!0&&(tt.updateMultisampleRenderTarget(ue),tt.updateRenderTargetMipmap(ue))}T.setRenderTarget(Pe,we,$e),T.setClearColor(J,Z),Be!==void 0&&(Y.viewport=Be),T.toneMapping=Ye}function xi(w,V,$){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ue=w.length;G<ue;G++){const xe=w[G],Pe=xe.object,we=xe.geometry,$e=xe.group;let Ye=xe.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),Pe.layers.test($.layers)&&cs(Pe,V,$,we,Ye,$e)}}function cs(w,V,$,Y,G,ue){w.onBeforeRender(T,V,$,Y,G,ue),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(T,V,$,Y,w,ue),G.transparent===!0&&G.side===bn&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,T.renderBufferDirect($,V,Y,G,w,ue),G.side=Vn,G.needsUpdate=!0,T.renderBufferDirect($,V,Y,G,w,ue),G.side=bn):T.renderBufferDirect($,V,Y,G,w,ue),w.onAfterRender(T,V,$,Y,G,ue)}function yi(w,V,$){V.isScene!==!0&&(V=wt);const Y=Ve.get(w),G=u.state.lights,ue=u.state.shadowsArray,xe=G.state.version,Pe=ae.getParameters(w,G.state,ue,V,$),we=ae.getProgramCacheKey(Pe);let $e=Y.programs;Y.environment=w.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(w.isMeshStandardMaterial?N:Lt).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",Ce),$e=new Map,Y.programs=$e);let Ye=$e.get(we);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===xe)return Ls(w,Pe),Ye}else Pe.uniforms=ae.getUniforms(w),w.onBeforeCompile(Pe,T),Ye=ae.acquireProgram(Pe,we),$e.set(we,Ye),Y.uniforms=Pe.uniforms;const Be=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Ie.uniform),Ls(w,Pe),Y.needsLights=Fr(w),Y.lightsStateVersion=xe,Y.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function Ps(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=_r.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ls(w,V){const $=Ve.get(w);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Nr(w,V,$,Y,G){V.isScene!==!0&&(V=wt),tt.resetTextureUnits();const ue=V.fog,xe=Y.isMeshStandardMaterial?V.environment:null,Pe=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ki,we=(Y.isMeshStandardMaterial?N:Lt).get(Y.envMap||xe),$e=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,mt=!!$.morphAttributes.color;let Rt=ei;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Rt=T.toneMapping);const Mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=Mt!==void 0?Mt.length:0,He=Ve.get(Y),Ct=u.state.lights;if(K===!0&&(ne===!0||w!==y)){const Nt=w===y&&Y.id===M;Ie.setState(Y,w,Nt)}let ht=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ct.state.version||He.outputColorSpace!==Pe||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==we||Y.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ie.numPlanes||He.numIntersection!==Ie.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==Ye||He.morphTargets!==Be||He.morphNormals!==et||He.morphColors!==mt||He.toneMapping!==Rt||He.morphTargetsCount!==gt)&&(ht=!0):(ht=!0,He.__version=Y.version);let Gt=He.currentProgram;ht===!0&&(Gt=yi(Y,V,G));let bt=!1,Ht=!1,si=!1;const Et=Gt.getUniforms(),Jt=He.uniforms;if(De.useProgram(Gt.program)&&(bt=!0,Ht=!0,si=!0),Y.id!==M&&(M=Y.id,Ht=!0),bt||y!==w){De.buffers.depth.getReversed()?(ie.copy(w.projectionMatrix),Jh(ie),Kh(ie),Et.setValue(F,"projectionMatrix",ie)):Et.setValue(F,"projectionMatrix",w.projectionMatrix),Et.setValue(F,"viewMatrix",w.matrixWorldInverse);const Ft=Et.map.cameraPosition;Ft!==void 0&&Ft.setValue(F,Ze.setFromMatrixPosition(w.matrixWorld)),_t.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Et.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ht=!0,si=!0)}if(G.isSkinnedMesh){Et.setOptional(F,G,"bindMatrix"),Et.setOptional(F,G,"bindMatrixInverse");const Nt=G.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Et.setValue(F,"boneTexture",Nt.boneTexture,tt))}G.isBatchedMesh&&(Et.setOptional(F,G,"batchingTexture"),Et.setValue(F,"batchingTexture",G._matricesTexture,tt),Et.setOptional(F,G,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",G._indirectTexture,tt),Et.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",G._colorsTexture,tt));const Wt=$.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Te.update(G,$,Gt),(Ht||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Et.setValue(F,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Jt.envMap.value=we,Jt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Jt.envMapIntensity.value=V.environmentIntensity),Ht&&(Et.setValue(F,"toneMappingExposure",T.toneMappingExposure),He.needsLights&&Ur(Jt,si),ue&&Y.fog===!0&&ee.refreshFogUniforms(Jt,ue),ee.refreshMaterialUniforms(Jt,Y,W,Q,u.state.transmissionRenderTarget[w.id]),_r.upload(F,Ps(He),Jt,tt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_r.upload(F,Ps(He),Jt,tt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Et.setValue(F,"center",G.center),Et.setValue(F,"modelViewMatrix",G.modelViewMatrix),Et.setValue(F,"normalMatrix",G.normalMatrix),Et.setValue(F,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Nt=Y.uniformsGroups;for(let Ft=0,Si=Nt.length;Ft<Si;Ft++){const Rn=Nt[Ft];B.update(Rn,Gt),B.bind(Rn,Gt)}}return Gt}function Ur(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Fr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,V,$){const Y=Ve.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ve.get(w.texture).__webglTexture=V,Ve.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const $=Ve.get(w);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};const Or=F.createFramebuffer();this.setRenderTarget=function(w,V=0,$=0){U=w,I=V,L=$;let Y=!0,G=null,ue=!1,xe=!1;if(w){const we=Ve.get(w);if(we.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(we.__webglFramebuffer===void 0)tt.setupRenderTarget(w);else if(we.__hasExternalTextures)tt.rebindTextures(w,Ve.get(w.texture).__webglTexture,Ve.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Be=w.depthTexture;if(we.__boundDepthTexture!==Be){if(Be!==null&&Ve.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(xe=!0);const Ye=Ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?G=Ye[V][$]:G=Ye[V],ue=!0):w.samples>0&&tt.useMultisampledRTT(w)===!1?G=Ve.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[$]:G=Ye,D.copy(w.viewport),z.copy(w.scissor),H=w.scissorTest}else D.copy(pe).multiplyScalar(W).floor(),z.copy(be).multiplyScalar(W).floor(),H=Ee;if($!==0&&(G=Or),De.bindFramebuffer(F.FRAMEBUFFER,G)&&Y&&De.drawBuffers(w,G),De.viewport(D),De.scissor(z),De.setScissorTest(H),ue){const we=Ve.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,$)}else if(xe){const we=Ve.get(w.texture),$e=V;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,$,$e)}else if(w!==null&&$!==0){const we=Ve.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,$)}M=-1},this.readRenderTargetPixels=function(w,V,$,Y,G,ue,xe,Pe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){De.bindFramebuffer(F.FRAMEBUFFER,we);try{const $e=w.textures[Pe],Ye=$e.format,Be=$e.type;if(!_t.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Y&&$>=0&&$<=w.height-G&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pe),F.readPixels(V,$,Y,G,_e.convert(Ye),_e.convert(Be),ue))}finally{const $e=U!==null?Ve.get(U).__webglFramebuffer:null;De.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(w,V,$,Y,G,ue,xe,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we)if(V>=0&&V<=w.width-Y&&$>=0&&$<=w.height-G){De.bindFramebuffer(F.FRAMEBUFFER,we);const $e=w.textures[Pe],Ye=$e.format,Be=$e.type;if(!_t.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pe),F.readPixels(V,$,Y,G,_e.convert(Ye),_e.convert(Be),0);const mt=U!==null?Ve.get(U).__webglFramebuffer:null;De.bindFramebuffer(F.FRAMEBUFFER,mt);const Rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await jh(F,Rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.deleteBuffer(et),F.deleteSync(Rt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,$=0){const Y=Math.pow(2,-$),G=Math.floor(w.image.width*Y),ue=Math.floor(w.image.height*Y),xe=V!==null?V.x:0,Pe=V!==null?V.y:0;tt.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,xe,Pe,G,ue),De.unbindTexture()};const Br=F.createFramebuffer(),kr=F.createFramebuffer();this.copyTextureToTexture=function(w,V,$=null,Y=null,G=0,ue=null){ue===null&&(G!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=G,G=0):ue=0);let xe,Pe,we,$e,Ye,Be,et,mt,Rt;const Mt=w.isCompressedTexture?w.mipmaps[ue]:w.image;if($!==null)xe=$.max.x-$.min.x,Pe=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,$e=$.min.x,Ye=$.min.y,Be=$.isBox3?$.min.z:0;else{const Wt=Math.pow(2,-G);xe=Math.floor(Mt.width*Wt),Pe=Math.floor(Mt.height*Wt),w.isDataArrayTexture?we=Mt.depth:w.isData3DTexture?we=Math.floor(Mt.depth*Wt):we=1,$e=0,Ye=0,Be=0}Y!==null?(et=Y.x,mt=Y.y,Rt=Y.z):(et=0,mt=0,Rt=0);const gt=_e.convert(V.format),He=_e.convert(V.type);let Ct;V.isData3DTexture?(tt.setTexture3D(V,0),Ct=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(tt.setTexture2DArray(V,0),Ct=F.TEXTURE_2D_ARRAY):(tt.setTexture2D(V,0),Ct=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const ht=F.getParameter(F.UNPACK_ROW_LENGTH),Gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bt=F.getParameter(F.UNPACK_SKIP_PIXELS),Ht=F.getParameter(F.UNPACK_SKIP_ROWS),si=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Be);const Et=w.isDataArrayTexture||w.isData3DTexture,Jt=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const Wt=Ve.get(w),Nt=Ve.get(V),Ft=Ve.get(Wt.__renderTarget),Si=Ve.get(Nt.__renderTarget);De.bindFramebuffer(F.READ_FRAMEBUFFER,Ft.__webglFramebuffer),De.bindFramebuffer(F.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Rn=0;Rn<we;Rn++)Et&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(w).__webglTexture,G,Be+Rn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(V).__webglTexture,ue,Rt+Rn)),F.blitFramebuffer($e,Ye,xe,Pe,et,mt,xe,Pe,F.DEPTH_BUFFER_BIT,F.NEAREST);De.bindFramebuffer(F.READ_FRAMEBUFFER,null),De.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||Ve.has(w)){const Wt=Ve.get(w),Nt=Ve.get(V);De.bindFramebuffer(F.READ_FRAMEBUFFER,Br),De.bindFramebuffer(F.DRAW_FRAMEBUFFER,kr);for(let Ft=0;Ft<we;Ft++)Et?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,G,Be+Ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,G),Jt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,ue,Rt+Ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,ue),G!==0?F.blitFramebuffer($e,Ye,xe,Pe,et,mt,xe,Pe,F.COLOR_BUFFER_BIT,F.NEAREST):Jt?F.copyTexSubImage3D(Ct,ue,et,mt,Rt+Ft,$e,Ye,xe,Pe):F.copyTexSubImage2D(Ct,ue,et,mt,$e,Ye,xe,Pe);De.bindFramebuffer(F.READ_FRAMEBUFFER,null),De.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Jt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ct,ue,et,mt,Rt,xe,Pe,we,gt,He,Mt.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(Ct,ue,et,mt,Rt,xe,Pe,we,gt,Mt.data):F.texSubImage3D(Ct,ue,et,mt,Rt,xe,Pe,we,gt,He,Mt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ue,et,mt,xe,Pe,gt,He,Mt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ue,et,mt,Mt.width,Mt.height,gt,Mt.data):F.texSubImage2D(F.TEXTURE_2D,ue,et,mt,xe,Pe,gt,He,Mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ht),F.pixelStorei(F.UNPACK_SKIP_IMAGES,si),ue===0&&V.generateMipmaps&&F.generateMipmap(Ct),De.unbindTexture()},this.copyTextureToTexture3D=function(w,V,$=null,Y=null,G=0){return qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,$,Y,G)},this.initRenderTarget=function(w){Ve.get(w).__webglFramebuffer===void 0&&tt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?tt.setTextureCube(w,0):w.isData3DTexture?tt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?tt.setTexture2DArray(w,0):tt.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){I=0,L=0,U=null,De.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const ql={type:"change"},Ra={type:"start"},zc={type:"end"},sr=new Rr,$l=new Kn,Ug=Math.cos(70*zi.DEG2RAD),Ot=new k,tn=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mo=1e-6;class Fg extends Jd{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new yn,this._lastTargetPosition=new k,this._quat=new yn().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yl,this._sphericalDelta=new yl,this._scale=1,this._panOffset=new k,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new k,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bg.bind(this),this._onPointerDown=Og.bind(this),this._onPointerUp=kg.bind(this),this._onContextMenu=qg.bind(this),this._onMouseWheel=Hg.bind(this),this._onKeyDown=Gg.bind(this),this._onTouchStart=Wg.bind(this),this._onTouchMove=Xg.bind(this),this._onMouseDown=zg.bind(this),this._onMouseMove=Vg.bind(this),this._interceptControlDown=$g.bind(this),this._interceptControlUp=Yg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ql),this.update(),this.state=yt.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ot.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(sr.origin.copy(this.object.position),sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sr.direction))<Ug?this.object.lookAt(this.target):($l.setFromNormalAndCoplanarPoint(this.object.up,this.target),sr.intersectPlane($l,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mo||this._lastTargetPosition.distanceToSquared(this.target)>Mo?(this.dispatchEvent(ql),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ot.copy(i).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Og(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Bg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function kg(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zc),this.state=yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zg(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=yt.DOLLY;break;case Wi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=yt.ROTATE}break;case Wi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Ra)}function Vg(s){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Hg(s){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(s.preventDefault(),this.dispatchEvent(Ra),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(zc))}function Gg(s){this.enabled!==!1&&this._handleKeyDown(s)}function Wg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=yt.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=yt.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Ra)}function Xg(s){switch(this._trackPointer(s),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=yt.NONE}}function qg(s){this.enabled!==!1&&s.preventDefault()}function $g(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yg(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class jg extends ni{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ba(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){function t(c){const h=new DataView(c),d=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*d===h.byteLength)return!0;const g=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(g,h,x))return!1;return!0}function n(c,h,d){for(let f=0,p=c.length;f<p;f++)if(c[f]!==h.getUint8(d+f))return!1;return!0}function i(c){const h=new DataView(c),d=h.getUint32(80,!0);let f,p,g,x=!1,m,u,b,C,T;for(let D=0;D<70;D++)h.getUint32(D,!1)==1129270351&&h.getUint8(D+4)==82&&h.getUint8(D+5)==61&&(x=!0,m=new Float32Array(d*3*3),u=h.getUint8(D+6)/255,b=h.getUint8(D+7)/255,C=h.getUint8(D+8)/255,T=h.getUint8(D+9)/255);const P=84,I=50,L=new sn,U=new Float32Array(d*3*3),M=new Float32Array(d*3*3),y=new st;for(let D=0;D<d;D++){const z=P+D*I,H=h.getFloat32(z,!0),J=h.getFloat32(z+4,!0),Z=h.getFloat32(z+8,!0);if(x){const O=h.getUint16(z+48,!0);(O&32768)===0?(f=(O&31)/31,p=(O>>5&31)/31,g=(O>>10&31)/31):(f=u,p=b,g=C)}for(let O=1;O<=3;O++){const Q=z+O*12,W=D*3*3+(O-1)*3;U[W]=h.getFloat32(Q,!0),U[W+1]=h.getFloat32(Q+4,!0),U[W+2]=h.getFloat32(Q+8,!0),M[W]=H,M[W+1]=J,M[W+2]=Z,x&&(y.setRGB(f,p,g,It),m[W]=y.r,m[W+1]=y.g,m[W+2]=y.b)}}return L.setAttribute("position",new cn(U,3)),L.setAttribute("normal",new cn(M,3)),x&&(L.setAttribute("color",new cn(m,3)),L.hasColors=!0,L.alpha=T),L}function r(c){const h=new sn,d=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),u=new RegExp("normal"+x+x+x,"g"),b=[],C=[],T=[],P=new k;let I,L=0,U=0,M=0;for(;(I=d.exec(c))!==null;){U=M;const y=I[0],D=(I=p.exec(y))!==null?I[1]:"";for(T.push(D);(I=f.exec(y))!==null;){let J=0,Z=0;const O=I[0];for(;(I=u.exec(O))!==null;)P.x=parseFloat(I[1]),P.y=parseFloat(I[2]),P.z=parseFloat(I[3]),Z++;for(;(I=m.exec(O))!==null;)b.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),C.push(P.x,P.y,P.z),J++,M++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),J!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const z=U,H=M-U;h.userData.groupNames=T,h.addGroup(z,H,L),L++}return h.setAttribute("position",new Tt(b,3)),h.setAttribute("normal",new Tt(C,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d)&255;return h.buffer||h}else return c}const l=a(e);return t(l)?i(l):r(o(e))}}class Yl extends Hd{constructor(e){super(e)}parse(e){function t(O){switch(O.image_type){case f:case x:if(O.colormap_length>256||O.colormap_size!==24||O.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case u:if(O.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case d:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+O.image_type)}if(O.width<=0||O.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(O.pixel_size!==8&&O.pixel_size!==16&&O.pixel_size!==24&&O.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+O.pixel_size)}function n(O,Q,W,oe,fe){let pe,be;const Ee=W.pixel_size>>3,X=W.width*W.height*Ee;if(Q&&(be=fe.subarray(oe,oe+=W.colormap_length*(W.colormap_size>>3))),O){pe=new Uint8Array(X);let K,ne,ie,me=0;const Ze=new Uint8Array(Ee);for(;me<X;)if(K=fe[oe++],ne=(K&127)+1,K&128){for(ie=0;ie<Ee;++ie)Ze[ie]=fe[oe++];for(ie=0;ie<ne;++ie)pe.set(Ze,me+ie*Ee);me+=Ee*ne}else{for(ne*=Ee,ie=0;ie<ne;++ie)pe[me+ie]=fe[oe++];me+=ne}}else pe=fe.subarray(oe,oe+=Q?W.width*W.height:X);return{pixel_data:pe,palettes:be}}function i(O,Q,W,oe,fe,pe,be,Ee,X){const K=X;let ne,ie=0,me,Ze;const ze=y.width;for(Ze=Q;Ze!==oe;Ze+=W)for(me=fe;me!==be;me+=pe,ie++)ne=Ee[ie],O[(me+ze*Ze)*4+3]=255,O[(me+ze*Ze)*4+2]=K[ne*3+0],O[(me+ze*Ze)*4+1]=K[ne*3+1],O[(me+ze*Ze)*4+0]=K[ne*3+2];return O}function r(O,Q,W,oe,fe,pe,be,Ee){let X,K=0,ne,ie;const me=y.width;for(ie=Q;ie!==oe;ie+=W)for(ne=fe;ne!==be;ne+=pe,K+=2)X=Ee[K+0]+(Ee[K+1]<<8),O[(ne+me*ie)*4+0]=(X&31744)>>7,O[(ne+me*ie)*4+1]=(X&992)>>2,O[(ne+me*ie)*4+2]=(X&31)<<3,O[(ne+me*ie)*4+3]=X&32768?0:255;return O}function o(O,Q,W,oe,fe,pe,be,Ee){let X=0,K,ne;const ie=y.width;for(ne=Q;ne!==oe;ne+=W)for(K=fe;K!==be;K+=pe,X+=3)O[(K+ie*ne)*4+3]=255,O[(K+ie*ne)*4+2]=Ee[X+0],O[(K+ie*ne)*4+1]=Ee[X+1],O[(K+ie*ne)*4+0]=Ee[X+2];return O}function a(O,Q,W,oe,fe,pe,be,Ee){let X=0,K,ne;const ie=y.width;for(ne=Q;ne!==oe;ne+=W)for(K=fe;K!==be;K+=pe,X+=4)O[(K+ie*ne)*4+2]=Ee[X+0],O[(K+ie*ne)*4+1]=Ee[X+1],O[(K+ie*ne)*4+0]=Ee[X+2],O[(K+ie*ne)*4+3]=Ee[X+3];return O}function l(O,Q,W,oe,fe,pe,be,Ee){let X,K=0,ne,ie;const me=y.width;for(ie=Q;ie!==oe;ie+=W)for(ne=fe;ne!==be;ne+=pe,K++)X=Ee[K],O[(ne+me*ie)*4+0]=X,O[(ne+me*ie)*4+1]=X,O[(ne+me*ie)*4+2]=X,O[(ne+me*ie)*4+3]=255;return O}function c(O,Q,W,oe,fe,pe,be,Ee){let X=0,K,ne;const ie=y.width;for(ne=Q;ne!==oe;ne+=W)for(K=fe;K!==be;K+=pe,X+=2)O[(K+ie*ne)*4+0]=Ee[X+0],O[(K+ie*ne)*4+1]=Ee[X+0],O[(K+ie*ne)*4+2]=Ee[X+0],O[(K+ie*ne)*4+3]=Ee[X+1];return O}function h(O,Q,W,oe,fe){let pe,be,Ee,X,K,ne;switch((y.flags&b)>>C){default:case I:pe=0,Ee=1,K=Q,be=0,X=1,ne=W;break;case T:pe=0,Ee=1,K=Q,be=W-1,X=-1,ne=-1;break;case L:pe=Q-1,Ee=-1,K=-1,be=0,X=1,ne=W;break;case P:pe=Q-1,Ee=-1,K=-1,be=W-1,X=-1,ne=-1;break}if(H)switch(y.pixel_size){case 8:l(O,be,X,ne,pe,Ee,K,oe);break;case 16:c(O,be,X,ne,pe,Ee,K,oe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(y.pixel_size){case 8:i(O,be,X,ne,pe,Ee,K,oe,fe);break;case 16:r(O,be,X,ne,pe,Ee,K,oe);break;case 24:o(O,be,X,ne,pe,Ee,K,oe);break;case 32:a(O,be,X,ne,pe,Ee,K,oe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return O}const d=0,f=1,p=2,g=3,x=9,m=10,u=11,b=48,C=4,T=0,P=1,I=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let U=0;const M=new Uint8Array(e),y={id_length:M[U++],colormap_type:M[U++],image_type:M[U++],colormap_index:M[U++]|M[U++]<<8,colormap_length:M[U++]|M[U++]<<8,colormap_size:M[U++],origin:[M[U++]|M[U++]<<8,M[U++]|M[U++]<<8],width:M[U++]|M[U++]<<8,height:M[U++]|M[U++]<<8,pixel_size:M[U++],flags:M[U++]};if(t(y),y.id_length+U>e.length)throw new Error("THREE.TGALoader: No data.");U+=y.id_length;let D=!1,z=!1,H=!1;switch(y.image_type){case x:D=!0,z=!0;break;case f:z=!0;break;case m:D=!0;break;case p:break;case u:D=!0,H=!0;break;case g:H=!0;break}const J=new Uint8Array(y.width*y.height*4),Z=n(D,z,y,U,M);return h(J,y.width,y.height,Z.pixel_data,Z.palettes),{data:J,width:y.width,height:y.height,flipY:!0,generateMipmaps:!0,minFilter:On}}}class Jg extends ni{load(e,t,n,i){const r=this,o=r.path===""?Nc.extractUrlBase(e):r.path,a=new ba(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){function n(v,_){const A=[],E=v.childNodes;for(let R=0,j=E.length;R<j;R++){const te=E[R];te.nodeName===_&&A.push(te)}return A}function i(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),A=new Array(_.length);for(let E=0,R=_.length;E<R;E++)A[E]=_[E];return A}function r(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),A=new Array(_.length);for(let E=0,R=_.length;E<R;E++)A[E]=parseFloat(_[E]);return A}function o(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),A=new Array(_.length);for(let E=0,R=_.length;E<R;E++)A[E]=parseInt(_[E]);return A}function a(v){return v.substring(1)}function l(){return"three_default_"+Rn++}function c(v){return Object.keys(v).length===0}function h(v){return{unit:d(n(v,"unit")[0]),upAxis:f(n(v,"up_axis")[0])}}function d(v){return v!==void 0&&v.hasAttribute("meter")===!0?parseFloat(v.getAttribute("meter")):1}function f(v){return v!==void 0?v.textContent:"Y_UP"}function p(v,_,A,E){const R=n(v,_)[0];if(R!==void 0){const j=n(R,A);for(let te=0;te<j.length;te++)E(j[te])}}function g(v,_){for(const A in v){const E=v[A];E.build=_(v[A])}}function x(v,_){return v.build!==void 0||(v.build=_(v)),v.build}function m(v){const _={sources:{},samplers:{},channels:{}};let A=!1;for(let E=0,R=v.childNodes.length;E<R;E++){const j=v.childNodes[E];if(j.nodeType!==1)continue;let te;switch(j.nodeName){case"source":te=j.getAttribute("id"),_.sources[te]=ce(j);break;case"sampler":te=j.getAttribute("id"),_.samplers[te]=u(j);break;case"channel":te=j.getAttribute("target"),_.channels[te]=b(j);break;case"animation":m(j),A=!0;break;default:console.log(j)}}A===!1&&(qe.animations[v.getAttribute("id")||zi.generateUUID()]=_)}function u(v){const _={inputs:{}};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":const j=a(R.getAttribute("source")),te=R.getAttribute("semantic");_.inputs[te]=j;break}}return _}function b(v){const _={};let E=v.getAttribute("target").split("/");const R=E.shift();let j=E.shift();const te=j.indexOf("(")!==-1,Ae=j.indexOf(".")!==-1;if(Ae)E=j.split("."),j=E.shift(),_.member=E.shift();else if(te){const ge=j.split("(");j=ge.shift();for(let Me=0;Me<ge.length;Me++)ge[Me]=parseInt(ge[Me].replace(/\)/,""));_.indices=ge}return _.id=R,_.sid=j,_.arraySyntax=te,_.memberSyntax=Ae,_.sampler=a(v.getAttribute("source")),_}function C(v){const _=[],A=v.channels,E=v.samplers,R=v.sources;for(const j in A)if(A.hasOwnProperty(j)){const te=A[j],Ae=E[te.sampler],ge=Ae.inputs.INPUT,Me=Ae.inputs.OUTPUT,Oe=R[ge],he=R[Me],Ne=P(te,Oe,he);y(Ne,_)}return _}function T(v){return x(qe.animations[v],C)}function P(v,_,A){const E=qe.nodes[v.id],R=et(E.id),j=E.transforms[v.sid],te=E.matrix.clone().transpose();let Ae,ge,Me,Oe,he,Ne;const Le={};switch(j){case"matrix":for(Me=0,Oe=_.array.length;Me<Oe;Me++)if(Ae=_.array[Me],ge=Me*A.stride,Le[Ae]===void 0&&(Le[Ae]={}),v.arraySyntax===!0){const Pt=A.array[ge],vt=v.indices[0]+4*v.indices[1];Le[Ae][vt]=Pt}else for(he=0,Ne=A.stride;he<Ne;he++)Le[Ae][he]=A.array[ge+he];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break}const We=I(Le,te);return{name:R.uuid,keyframes:We}}function I(v,_){const A=[];for(const R in v)A.push({time:parseFloat(R),value:v[R]});A.sort(E);for(let R=0;R<16;R++)D(A,R,_.elements[R]);return A;function E(R,j){return R.time-j.time}}const L=new k,U=new k,M=new yn;function y(v,_){const A=v.keyframes,E=v.name,R=[],j=[],te=[],Ae=[];for(let ge=0,Me=A.length;ge<Me;ge++){const Oe=A[ge],he=Oe.time,Ne=Oe.value;V.fromArray(Ne).transpose(),V.decompose(L,M,U),R.push(he),j.push(L.x,L.y,L.z),te.push(M.x,M.y,M.z,M.w),Ae.push(U.x,U.y,U.z)}return j.length>0&&_.push(new es(E+".position",R,j)),te.length>0&&_.push(new ws(E+".quaternion",R,te)),Ae.length>0&&_.push(new es(E+".scale",R,Ae)),_}function D(v,_,A){let E,R=!0,j,te;for(j=0,te=v.length;j<te;j++)E=v[j],E.value[_]===void 0?E.value[_]=null:R=!1;if(R===!0)for(j=0,te=v.length;j<te;j++)E=v[j],E.value[_]=A;else z(v,_)}function z(v,_){let A,E;for(let R=0,j=v.length;R<j;R++){const te=v[R];if(te.value[_]===null){if(A=H(v,R,_),E=J(v,R,_),A===null){te.value[_]=E.value[_];continue}if(E===null){te.value[_]=A.value[_];continue}Z(te,A,E,_)}}}function H(v,_,A){for(;_>=0;){const E=v[_];if(E.value[A]!==null)return E;_--}return null}function J(v,_,A){for(;_<v.length;){const E=v[_];if(E.value[A]!==null)return E;_++}return null}function Z(v,_,A,E){if(A.time-_.time===0){v.value[E]=_.value[E];return}v.value[E]=(v.time-_.time)*(A.value[E]-_.value[E])/(A.time-_.time)+_.value[E]}function O(v){const _={name:v.getAttribute("id")||"default",start:parseFloat(v.getAttribute("start")||0),end:parseFloat(v.getAttribute("end")||0),animations:[]};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"instance_animation":_.animations.push(a(R.getAttribute("url")));break}}qe.clips[v.getAttribute("id")]=_}function Q(v){const _=[],A=v.name,E=v.end-v.start||-1,R=v.animations;for(let j=0,te=R.length;j<te;j++){const Ae=T(R[j]);for(let ge=0,Me=Ae.length;ge<Me;ge++)_.push(Ae[ge])}return new gl(A,E,_)}function W(v){return x(qe.clips[v],Q)}function oe(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"skin":_.id=a(R.getAttribute("source")),_.skin=fe(R);break;case"morph":_.id=a(R.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}qe.controllers[v.getAttribute("id")]=_}function fe(v){const _={sources:{}};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=r(R.textContent);break;case"source":const j=R.getAttribute("id");_.sources[j]=ce(R);break;case"joints":_.joints=pe(R);break;case"vertex_weights":_.vertexWeights=be(R);break}}return _}function pe(v){const _={inputs:{}};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":const j=R.getAttribute("semantic"),te=a(R.getAttribute("source"));_.inputs[j]=te;break}}return _}function be(v){const _={inputs:{}};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":const j=R.getAttribute("semantic"),te=a(R.getAttribute("source")),Ae=parseInt(R.getAttribute("offset"));_.inputs[j]={id:te,offset:Ae};break;case"vcount":_.vcount=o(R.textContent);break;case"v":_.v=o(R.textContent);break}}return _}function Ee(v){const _={id:v.id},A=qe.geometries[_.id];return v.skin!==void 0&&(_.skin=X(v.skin),A.sources.skinIndices=_.skin.indices,A.sources.skinWeights=_.skin.weights),_}function X(v){const A={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=v.sources,R=v.vertexWeights,j=R.vcount,te=R.v,Ae=R.inputs.JOINT.offset,ge=R.inputs.WEIGHT.offset,Me=v.sources[v.joints.inputs.JOINT],Oe=v.sources[v.joints.inputs.INV_BIND_MATRIX],he=E[R.inputs.WEIGHT.id].array;let Ne=0,Le,We,ke;for(Le=0,ke=j.length;Le<ke;Le++){const vt=j[Le],ut=[];for(We=0;We<vt;We++){const ft=te[Ne+Ae],Cn=te[Ne+ge],en=he[Cn];ut.push({index:ft,weight:en}),Ne+=2}for(ut.sort(Pt),We=0;We<4;We++){const ft=ut[We];ft!==void 0?(A.indices.array.push(ft.index),A.weights.array.push(ft.weight)):(A.indices.array.push(0),A.weights.array.push(0))}}for(v.bindShapeMatrix?A.bindMatrix=new Qe().fromArray(v.bindShapeMatrix).transpose():A.bindMatrix=new Qe().identity(),Le=0,ke=Me.array.length;Le<ke;Le++){const vt=Me.array[Le],ut=new Qe().fromArray(Oe.array,Le*Oe.stride).transpose();A.joints.push({name:vt,boneInverse:ut})}return A;function Pt(vt,ut){return ut.weight-vt.weight}}function K(v){return x(qe.controllers[v],Ee)}function ne(v){const _={init_from:n(v,"init_from")[0].textContent};qe.images[v.getAttribute("id")]=_}function ie(v){return v.build!==void 0?v.build:v.init_from}function me(v){const _=qe.images[v];return _!==void 0?x(_,ie):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",v),null)}function Ze(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"profile_COMMON":_.profile=ze(R);break}}qe.effects[v.getAttribute("id")]=_}function ze(v){const _={surfaces:{},samplers:{}};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"newparam":wt(R,_);break;case"technique":_.technique=F(R);break;case"extra":_.extra=Ve(R);break}}return _}function wt(v,_){const A=v.getAttribute("sid");for(let E=0,R=v.childNodes.length;E<R;E++){const j=v.childNodes[E];if(j.nodeType===1)switch(j.nodeName){case"surface":_.surfaces[A]=At(j);break;case"sampler2D":_.samplers[A]=dt(j);break}}}function At(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"init_from":_.init_from=R.textContent;break}}return _}function dt(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"source":_.source=R.textContent;break}}return _}function F(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=R.nodeName,_.parameters=Vt(R);break;case"extra":_.extra=Ve(R);break}}return _}function Vt(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[R.nodeName]=lt(R);break;case"transparent":_[R.nodeName]={opaque:R.hasAttribute("opaque")?R.getAttribute("opaque"):"A_ONE",data:lt(R)};break}}return _}function lt(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"color":_[R.nodeName]=r(R.textContent);break;case"float":_[R.nodeName]=parseFloat(R.textContent);break;case"texture":_[R.nodeName]={id:R.getAttribute("texture"),extra:_t(R)};break}}return _}function _t(v){const _={technique:{}};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"extra":De(R,_);break}}return _}function De(v,_){for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique":ct(R,_);break}}}function ct(v,_){for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[R.nodeName]=parseFloat(R.textContent);break;case"wrapU":case"wrapV":R.textContent.toUpperCase()==="TRUE"?_.technique[R.nodeName]=1:R.textContent.toUpperCase()==="FALSE"?_.technique[R.nodeName]=0:_.technique[R.nodeName]=parseInt(R.textContent);break;case"bump":_[R.nodeName]=Lt(R);break}}}function Ve(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique":_.technique=tt(R);break}}return _}function tt(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"double_sided":_[R.nodeName]=parseInt(R.textContent);break;case"bump":_[R.nodeName]=Lt(R);break}}return _}function Lt(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"texture":_[R.nodeName]={id:R.getAttribute("texture"),texcoord:R.getAttribute("texcoord"),extra:_t(R)};break}}return _}function N(v){return v}function S(v){return x(qe.effects[v],N)}function q(v){const _={name:v.getAttribute("name")};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"instance_effect":_.url=a(R.getAttribute("url"));break}}qe.materials[v.getAttribute("id")]=_}function se(v){let _,A=v.slice((v.lastIndexOf(".")-1>>>0)+2);switch(A=A.toLowerCase(),A){case"tga":_=Wt;break;default:_=Jt}return _}function ae(v){const _=S(v.url),A=_.profile.technique;let E;switch(A.type){case"phong":case"blinn":E=new kn;break;case"lambert":E=new Rd;break;default:E=new Sr;break}E.name=v.name||"";function R(ge,Me=null){const Oe=_.profile.samplers[ge.id];let he=null;if(Oe!==void 0){const Ne=_.profile.surfaces[Oe.source];he=me(Ne.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),he=me(ge.id);if(he!==null){const Ne=se(he);if(Ne!==void 0){const Le=Ne.load(he),We=ge.extra;if(We!==void 0&&We.technique!==void 0&&c(We.technique)===!1){const ke=We.technique;Le.wrapS=ke.wrapU?pi:xn,Le.wrapT=ke.wrapV?pi:xn,Le.offset.set(ke.offsetU||0,ke.offsetV||0),Le.repeat.set(ke.repeatU||1,ke.repeatV||1)}else Le.wrapS=pi,Le.wrapT=pi;return Me!==null&&(Le.colorSpace=Me),Le}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",he),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ge.id),null}const j=A.parameters;for(const ge in j){const Me=j[ge];switch(ge){case"diffuse":Me.color&&E.color.fromArray(Me.color),Me.texture&&(E.map=R(Me.texture,It));break;case"specular":Me.color&&E.specular&&E.specular.fromArray(Me.color),Me.texture&&(E.specularMap=R(Me.texture));break;case"bump":Me.texture&&(E.normalMap=R(Me.texture));break;case"ambient":Me.texture&&(E.lightMap=R(Me.texture,It));break;case"shininess":Me.float&&E.shininess&&(E.shininess=Me.float);break;case"emission":Me.color&&E.emissive&&E.emissive.fromArray(Me.color),Me.texture&&(E.emissiveMap=R(Me.texture,It));break}}at.colorSpaceToWorking(E.color,It),E.specular&&at.colorSpaceToWorking(E.specular,It),E.emissive&&at.colorSpaceToWorking(E.emissive,It);let te=j.transparent,Ae=j.transparency;if(Ae===void 0&&te&&(Ae={float:1}),te===void 0&&Ae&&(te={opaque:"A_ONE",data:{color:[1,1,1,1]}}),te&&Ae)if(te.data.texture)E.transparent=!0;else{const ge=te.data.color;switch(te.opaque){case"A_ONE":E.opacity=ge[3]*Ae.float;break;case"RGB_ZERO":E.opacity=1-ge[0]*Ae.float;break;case"A_ZERO":E.opacity=1-ge[3]*Ae.float;break;case"RGB_ONE":E.opacity=ge[0]*Ae.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',te.opaque)}E.opacity<1&&(E.transparent=!0)}if(A.extra!==void 0&&A.extra.technique!==void 0){const ge=A.extra.technique;for(const Me in ge){const Oe=ge[Me];switch(Me){case"double_sided":E.side=Oe===1?bn:Vn;break;case"bump":E.normalMap=R(Oe.texture),E.normalScale=new Ke(1,1);break}}}return E}function ee(v){return x(qe.materials[v],ae)}function Ue(v){const _={name:v.getAttribute("name")};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"optics":_.optics=ve(R);break}}qe.cameras[v.getAttribute("id")]=_}function ve(v){for(let _=0;_<v.childNodes.length;_++){const A=v.childNodes[_];switch(A.nodeName){case"technique_common":return Ie(A)}}return{}}function Ie(v){const _={};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];switch(E.nodeName){case"perspective":case"orthographic":_.technique=E.nodeName,_.parameters=Fe(E);break}}return _}function Fe(v){const _={};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[E.nodeName]=parseFloat(E.textContent);break}}return _}function le(v){let _;switch(v.optics.technique){case"perspective":_=new $t(v.optics.parameters.yfov,v.optics.parameters.aspect_ratio,v.optics.parameters.znear,v.optics.parameters.zfar);break;case"orthographic":let A=v.optics.parameters.ymag,E=v.optics.parameters.xmag;const R=v.optics.parameters.aspect_ratio;E=E===void 0?A*R:E,A=A===void 0?E/R:A,E*=.5,A*=.5,_=new wa(-E,E,A,-A,v.optics.parameters.znear,v.optics.parameters.zfar);break;default:_=new $t;break}return _.name=v.name||"",_}function Te(v){const _=qe.cameras[v];return _!==void 0?x(_,le):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",v),null)}function Xe(v){let _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"technique_common":_=Ge(R);break}}qe.lights[v.getAttribute("id")]=_}function Ge(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=R.nodeName,_.parameters=_e(R)}}return _}function _e(v){const _={};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"color":const j=r(R.textContent);_.color=new st().fromArray(j),at.colorSpaceToWorking(_.color,It);break;case"falloff_angle":_.falloffAngle=parseFloat(R.textContent);break;case"quadratic_attenuation":const te=parseFloat(R.textContent);_.distance=te?Math.sqrt(1/te):0;break}}return _}function je(v){let _;switch(v.technique){case"directional":_=new Ic;break;case"point":_=new qd;break;case"spot":_=new Wd;break;case"ambient":_=new Dc;break}return v.parameters.color&&_.color.copy(v.parameters.color),v.parameters.distance&&(_.distance=v.parameters.distance),_}function B(v){const _=qe.lights[v];return _!==void 0?x(_,je):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",v),null)}function Se(v){const _={name:v.getAttribute("name"),sources:{},vertices:{},primitives:[]},A=n(v,"mesh")[0];if(A!==void 0){for(let E=0;E<A.childNodes.length;E++){const R=A.childNodes[E];if(R.nodeType!==1)continue;const j=R.getAttribute("id");switch(R.nodeName){case"source":_.sources[j]=ce(R);break;case"vertices":_.vertices=Re(R);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",R.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(de(R));break;default:console.log(R)}}qe.geometries[v.getAttribute("id")]=_}}function ce(v){const _={array:[],stride:3};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"float_array":_.array=r(E.textContent);break;case"Name_array":_.array=i(E.textContent);break;case"technique_common":const R=n(E,"accessor")[0];R!==void 0&&(_.stride=parseInt(R.getAttribute("stride")));break}}return _}function Re(v){const _={};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];E.nodeType===1&&(_[E.getAttribute("semantic")]=a(E.getAttribute("source")))}return _}function de(v){const _={type:v.nodeName,material:v.getAttribute("material"),count:parseInt(v.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let A=0,E=v.childNodes.length;A<E;A++){const R=v.childNodes[A];if(R.nodeType===1)switch(R.nodeName){case"input":const j=a(R.getAttribute("source")),te=R.getAttribute("semantic"),Ae=parseInt(R.getAttribute("offset")),ge=parseInt(R.getAttribute("set")),Me=ge>0?te+ge:te;_.inputs[Me]={id:j,offset:Ae},_.stride=Math.max(_.stride,Ae+1),te==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=o(R.textContent);break;case"p":_.p=o(R.textContent);break}}return _}function re(v){const _={};for(let A=0;A<v.length;A++){const E=v[A];_[E.type]===void 0&&(_[E.type]=[]),_[E.type].push(E)}return _}function Ce(v){let _=0;for(let A=0,E=v.length;A<E;A++)v[A].hasUV===!0&&_++;_>0&&_<v.length&&(v.uvsNeedsFix=!0)}function Je(v){const _={},A=v.sources,E=v.vertices,R=v.primitives;if(R.length===0)return{};const j=re(R);for(const te in j){const Ae=j[te];Ce(Ae),_[te]=St(Ae,A,E)}return _}function St(v,_,A){const E={},R={array:[],stride:0},j={array:[],stride:0},te={array:[],stride:0},Ae={array:[],stride:0},ge={array:[],stride:0},Me={array:[],stride:4},Oe={array:[],stride:4},he=new sn,Ne=[];let Le=0;for(let We=0;We<v.length;We++){const ke=v[We],Pt=ke.inputs;let vt=0;switch(ke.type){case"lines":case"linestrips":vt=ke.count*2;break;case"triangles":vt=ke.count*3;break;case"polylist":for(let ut=0;ut<ke.count;ut++){const ft=ke.vcount[ut];switch(ft){case 3:vt+=3;break;case 4:vt+=6;break;default:vt+=(ft-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",ke.type)}he.addGroup(Le,vt,We),Le+=vt,ke.material&&Ne.push(ke.material);for(const ut in Pt){const ft=Pt[ut];switch(ut){case"VERTEX":for(const Cn in A){const en=A[Cn];switch(Cn){case"POSITION":const Mi=R.array.length;if(nt(ke,_[en],ft.offset,R.array),R.stride=_[en].stride,_.skinWeights&&_.skinIndices&&(nt(ke,_.skinIndices,ft.offset,Me.array),nt(ke,_.skinWeights,ft.offset,Oe.array)),ke.hasUV===!1&&v.uvsNeedsFix===!0){const Gc=(R.array.length-Mi)/R.stride;for(let Ca=0;Ca<Gc;Ca++)te.array.push(0,0)}break;case"NORMAL":nt(ke,_[en],ft.offset,j.array),j.stride=_[en].stride;break;case"COLOR":nt(ke,_[en],ft.offset,ge.array),ge.stride=_[en].stride;break;case"TEXCOORD":nt(ke,_[en],ft.offset,te.array),te.stride=_[en].stride;break;case"TEXCOORD1":nt(ke,_[en],ft.offset,Ae.array),te.stride=_[en].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Cn)}}break;case"NORMAL":nt(ke,_[ft.id],ft.offset,j.array),j.stride=_[ft.id].stride;break;case"COLOR":nt(ke,_[ft.id],ft.offset,ge.array,!0),ge.stride=_[ft.id].stride;break;case"TEXCOORD":nt(ke,_[ft.id],ft.offset,te.array),te.stride=_[ft.id].stride;break;case"TEXCOORD1":nt(ke,_[ft.id],ft.offset,Ae.array),Ae.stride=_[ft.id].stride;break}}}return R.array.length>0&&he.setAttribute("position",new Tt(R.array,R.stride)),j.array.length>0&&he.setAttribute("normal",new Tt(j.array,j.stride)),ge.array.length>0&&he.setAttribute("color",new Tt(ge.array,ge.stride)),te.array.length>0&&he.setAttribute("uv",new Tt(te.array,te.stride)),Ae.array.length>0&&he.setAttribute("uv1",new Tt(Ae.array,Ae.stride)),Me.array.length>0&&he.setAttribute("skinIndex",new Tt(Me.array,Me.stride)),Oe.array.length>0&&he.setAttribute("skinWeight",new Tt(Oe.array,Oe.stride)),E.data=he,E.type=v[0].type,E.materialKeys=Ne,E}function nt(v,_,A,E,R=!1){const j=v.p,te=v.stride,Ae=v.vcount;function ge(he){let Ne=j[he+A]*Oe;const Le=Ne+Oe;for(;Ne<Le;Ne++)E.push(Me[Ne]);if(R){const We=E.length-Oe-1;Nt.setRGB(E[We+0],E[We+1],E[We+2],It),E[We+0]=Nt.r,E[We+1]=Nt.g,E[We+2]=Nt.b}}const Me=_.array,Oe=_.stride;if(v.vcount!==void 0){let he=0;for(let Ne=0,Le=Ae.length;Ne<Le;Ne++){const We=Ae[Ne];if(We===4){const ke=he+te*0,Pt=he+te*1,vt=he+te*2,ut=he+te*3;ge(ke),ge(Pt),ge(ut),ge(Pt),ge(vt),ge(ut)}else if(We===3){const ke=he+te*0,Pt=he+te*1,vt=he+te*2;ge(ke),ge(Pt),ge(vt)}else if(We>4)for(let ke=1,Pt=We-2;ke<=Pt;ke++){const vt=he+te*0,ut=he+te*ke,ft=he+te*(ke+1);ge(vt),ge(ut),ge(ft)}he+=te*We}}else for(let he=0,Ne=j.length;he<Ne;he+=te)ge(he)}function Qt(v){return x(qe.geometries[v],Je)}function fn(v){const _={name:v.getAttribute("name")||"",joints:{},links:[]};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"technique_common":An(E,_);break}}qe.kinematicsModels[v.getAttribute("id")]=_}function As(v){return v.build!==void 0?v.build:v}function Rs(v){return x(qe.kinematicsModels[v],As)}function An(v,_){for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"joint":_.joints[E.getAttribute("sid")]=as(E);break;case"link":_.links.push(ls(E));break}}}function as(v){let _;for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":_=Cs(E);break}}return _}function Cs(v){const _={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",axis:new k,limits:{min:0,max:0},type:v.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"axis":const R=r(E.textContent);_.axis.fromArray(R);break;case"limits":const j=E.getElementsByTagName("max")[0],te=E.getElementsByTagName("min")[0];_.limits.max=parseFloat(j.textContent),_.limits.min=parseFloat(te.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function ls(v){const _={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",attachments:[],transforms:[]};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":_.attachments.push(xi(E));break;case"matrix":case"translate":case"rotate":_.transforms.push(cs(E));break}}return _}function xi(v){const _={joint:v.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"link":_.links.push(ls(E));break;case"matrix":case"translate":case"rotate":_.transforms.push(cs(E));break}}return _}function cs(v){const _={type:v.nodeName},A=r(v.textContent);switch(_.type){case"matrix":_.obj=new Qe,_.obj.fromArray(A).transpose();break;case"translate":_.obj=new k,_.obj.fromArray(A);break;case"rotate":_.obj=new k,_.obj.fromArray(A),_.angle=zi.degToRad(A[3]);break}return _}function yi(v){const _={name:v.getAttribute("name")||"",rigidBodies:{}};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":_.rigidBodies[E.getAttribute("name")]={},Ps(E,_.rigidBodies[E.getAttribute("name")]);break}}qe.physicsModels[v.getAttribute("id")]=_}function Ps(v,_){for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"technique_common":Ls(E,_);break}}}function Ls(v,_){for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"inertia":_.inertia=r(E.textContent);break;case"mass":_.mass=r(E.textContent)[0];break}}}function Nr(v){const _={bindJointAxis:[]};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":_.bindJointAxis.push(Ur(E));break}}qe.kinematicsScenes[a(v.getAttribute("url"))]=_}function Ur(v){const _={target:v.getAttribute("target").split("/").pop()};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType===1)switch(E.nodeName){case"axis":const R=E.getElementsByTagName("param")[0];_.axis=R.textContent;const j=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=j.substring(0,j.length-1);break}}return _}function Fr(v){return v.build!==void 0?v.build:v}function Or(v){return x(qe.kinematicsScenes[v],Fr)}function Br(){const v=Object.keys(qe.kinematicsModels)[0],_=Object.keys(qe.kinematicsScenes)[0],A=Object.keys(qe.visualScenes)[0];if(v===void 0||_===void 0)return;const E=Rs(v),R=Or(_),j=gt(A),te=R.bindJointAxis,Ae={};for(let Oe=0,he=te.length;Oe<he;Oe++){const Ne=te[Oe],Le=bt.querySelector('[sid="'+Ne.target+'"]');if(Le){const We=Le.parentElement;ge(Ne.jointIndex,We)}}function ge(Oe,he){const Ne=he.getAttribute("name"),Le=E.joints[Oe];j.traverse(function(We){We.name===Ne&&(Ae[Oe]={object:We,transforms:kr(he),joint:Le,position:Le.zeroPosition})})}const Me=new Qe;Si={joints:E&&E.joints,getJointValue:function(Oe){const he=Ae[Oe];if(he)return he.position;console.warn("THREE.ColladaLoader: Joint "+Oe+" doesn't exist.")},setJointValue:function(Oe,he){const Ne=Ae[Oe];if(Ne){const Le=Ne.joint;if(he>Le.limits.max||he<Le.limits.min)console.warn("THREE.ColladaLoader: Joint "+Oe+" value "+he+" outside of limits (min: "+Le.limits.min+", max: "+Le.limits.max+").");else if(Le.static)console.warn("THREE.ColladaLoader: Joint "+Oe+" is static.");else{const We=Ne.object,ke=Le.axis,Pt=Ne.transforms;V.identity();for(let vt=0;vt<Pt.length;vt++){const ut=Pt[vt];if(ut.sid&&ut.sid.indexOf(Oe)!==-1)switch(Le.type){case"revolute":V.multiply(Me.makeRotationAxis(ke,zi.degToRad(he)));break;case"prismatic":V.multiply(Me.makeTranslation(ke.x*he,ke.y*he,ke.z*he));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Le.type);break}else switch(ut.type){case"matrix":V.multiply(ut.obj);break;case"translate":V.multiply(Me.makeTranslation(ut.obj.x,ut.obj.y,ut.obj.z));break;case"scale":V.scale(ut.obj);break;case"rotate":V.multiply(Me.makeRotationAxis(ut.obj,ut.angle));break}}We.matrix.copy(V),We.matrix.decompose(We.position,We.quaternion,We.scale),Ae[Oe].position=he}}else console.log("THREE.ColladaLoader: "+Oe+" does not exist.")}}}function kr(v){const _=[],A=bt.querySelector('[id="'+v.id+'"]');for(let E=0;E<A.childNodes.length;E++){const R=A.childNodes[E];if(R.nodeType!==1)continue;let j,te;switch(R.nodeName){case"matrix":j=r(R.textContent);const Ae=new Qe().fromArray(j).transpose();_.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:Ae});break;case"translate":case"scale":j=r(R.textContent),te=new k().fromArray(j),_.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:te});break;case"rotate":j=r(R.textContent),te=new k().fromArray(j);const ge=zi.degToRad(j[3]);_.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:te,angle:ge});break}}return _}function w(v){const _=v.getElementsByTagName("node");for(let A=0;A<_.length;A++){const E=_[A];E.hasAttribute("id")===!1&&E.setAttribute("id",l())}}const V=new Qe,$=new k;function Y(v){const _={name:v.getAttribute("name")||"",type:v.getAttribute("type"),id:v.getAttribute("id"),sid:v.getAttribute("sid"),matrix:new Qe,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];if(E.nodeType!==1)continue;let R;switch(E.nodeName){case"node":_.nodes.push(E.getAttribute("id")),Y(E);break;case"instance_camera":_.instanceCameras.push(a(E.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(G(E));break;case"instance_light":_.instanceLights.push(a(E.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(G(E));break;case"instance_node":_.instanceNodes.push(a(E.getAttribute("url")));break;case"matrix":R=r(E.textContent),_.matrix.multiply(V.fromArray(R).transpose()),_.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":R=r(E.textContent),$.fromArray(R),_.matrix.multiply(V.makeTranslation($.x,$.y,$.z)),_.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":R=r(E.textContent);const j=zi.degToRad(R[3]);_.matrix.multiply(V.makeRotationAxis($.fromArray(R),j)),_.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":R=r(E.textContent),_.matrix.scale($.fromArray(R)),_.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return Be(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):qe.nodes[_.id]=_,_}function G(v){const _={id:a(v.getAttribute("url")),materials:{},skeletons:[]};for(let A=0;A<v.childNodes.length;A++){const E=v.childNodes[A];switch(E.nodeName){case"bind_material":const R=E.getElementsByTagName("instance_material");for(let j=0;j<R.length;j++){const te=R[j],Ae=te.getAttribute("symbol"),ge=te.getAttribute("target");_.materials[Ae]=a(ge)}break;case"skeleton":_.skeletons.push(a(E.textContent));break}}return _}function ue(v,_){const A=[],E=[];let R,j,te;for(R=0;R<v.length;R++){const Me=v[R];let Oe;if(Be(Me))Oe=et(Me),xe(Oe,_,A);else if(Mt(Me)){const Ne=qe.visualScenes[Me].children;for(let Le=0;Le<Ne.length;Le++){const We=Ne[Le];if(We.type==="JOINT"){const ke=et(We.id);xe(ke,_,A)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Me)}for(R=0;R<_.length;R++)for(j=0;j<A.length;j++)if(te=A[j],te.bone.name===_[R].name){E[R]=te,te.processed=!0;break}for(R=0;R<A.length;R++)te=A[R],te.processed===!1&&(E.push(te),te.processed=!0);const Ae=[],ge=[];for(R=0;R<E.length;R++)te=E[R],Ae.push(te.bone),ge.push(te.boneInverse);return new ya(Ae,ge)}function xe(v,_,A){v.traverse(function(E){if(E.isBone===!0){let R;for(let j=0;j<_.length;j++){const te=_[j];if(te.name===E.name){R=te.boneInverse;break}}R===void 0&&(R=new Qe),A.push({bone:E,boneInverse:R,processed:!1})}})}function Pe(v){const _=[],A=v.matrix,E=v.nodes,R=v.type,j=v.instanceCameras,te=v.instanceControllers,Ae=v.instanceLights,ge=v.instanceGeometries,Me=v.instanceNodes;for(let he=0,Ne=E.length;he<Ne;he++)_.push(et(E[he]));for(let he=0,Ne=j.length;he<Ne;he++){const Le=Te(j[he]);Le!==null&&_.push(Le.clone())}for(let he=0,Ne=te.length;he<Ne;he++){const Le=te[he],We=K(Le.id),ke=Qt(We.id),Pt=Ye(ke,Le.materials),vt=Le.skeletons,ut=We.skin.joints,ft=ue(vt,ut);for(let Cn=0,en=Pt.length;Cn<en;Cn++){const Mi=Pt[Cn];Mi.isSkinnedMesh&&(Mi.bind(ft,We.skin.bindMatrix),Mi.normalizeSkinWeights()),_.push(Mi)}}for(let he=0,Ne=Ae.length;he<Ne;he++){const Le=B(Ae[he]);Le!==null&&_.push(Le.clone())}for(let he=0,Ne=ge.length;he<Ne;he++){const Le=ge[he],We=Qt(Le.id),ke=Ye(We,Le.materials);for(let Pt=0,vt=ke.length;Pt<vt;Pt++)_.push(ke[Pt])}for(let he=0,Ne=Me.length;he<Ne;he++)_.push(et(Me[he]).clone());let Oe;if(E.length===0&&_.length===1)Oe=_[0];else{Oe=R==="JOINT"?new Ec:new Hi;for(let he=0;he<_.length;he++)Oe.add(_[he])}return Oe.name=R==="JOINT"?v.sid:v.name,Oe.matrix.copy(A),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe}const we=new Sr({name:ni.DEFAULT_MATERIAL_NAME,color:16711935});function $e(v,_){const A=[];for(let E=0,R=v.length;E<R;E++){const j=_[v[E]];j===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",v[E]),A.push(we)):A.push(ee(j))}return A}function Ye(v,_){const A=[];for(const E in v){const R=v[E],j=$e(R.materialKeys,_);if(j.length===0&&(E==="lines"||E==="linestrips"?j.push(new Mr):j.push(new kn)),E==="lines"||E==="linestrips")for(let Me=0,Oe=j.length;Me<Oe;Me++){const he=j[Me];if(he.isMeshPhongMaterial===!0||he.isMeshLambertMaterial===!0){const Ne=new Mr;Ne.color.copy(he.color),Ne.opacity=he.opacity,Ne.transparent=he.transparent,j[Me]=Ne}}const te=R.data.attributes.skinIndex!==void 0,Ae=j.length===1?j[0]:j;let ge;switch(E){case"lines":ge=new wc(R.data,Ae);break;case"linestrips":ge=new Tc(R.data,Ae);break;case"triangles":case"polylist":te?ge=new Ed(R.data,Ae):ge=new Yt(R.data,Ae);break}A.push(ge)}return A}function Be(v){return qe.nodes[v]!==void 0}function et(v){return x(qe.nodes[v],Pe)}function mt(v){const _={name:v.getAttribute("name"),children:[]};w(v);const A=n(v,"node");for(let E=0;E<A.length;E++)_.children.push(Y(A[E]));qe.visualScenes[v.getAttribute("id")]=_}function Rt(v){const _=new Hi;_.name=v.name;const A=v.children;for(let E=0;E<A.length;E++){const R=A[E];_.add(et(R.id))}return _}function Mt(v){return qe.visualScenes[v]!==void 0}function gt(v){return x(qe.visualScenes[v],Rt)}function He(v){const _=n(v,"instance_visual_scene")[0];return gt(a(_.getAttribute("url")))}function Ct(){const v=qe.clips;if(c(v)===!0){if(c(qe.animations)===!1){const _=[];for(const A in qe.animations){const E=T(A);for(let R=0,j=E.length;R<j;R++)_.push(E[R])}Ft.push(new gl("default",-1,_))}}else for(const _ in v)Ft.push(W(_))}function ht(v){let _="";const A=[v];for(;A.length;){const E=A.shift();E.nodeType===Node.TEXT_NODE?_+=E.textContent:(_+=`
`,A.push(...E.childNodes))}return _.trim()}if(e.length===0)return{scene:new Mc};const Gt=new DOMParser().parseFromString(e,"application/xml"),bt=n(Gt,"COLLADA")[0],Ht=Gt.getElementsByTagName("parsererror")[0];if(Ht!==void 0){const v=n(Ht,"div")[0];let _;return v?_=v.textContent:_=ht(Ht),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}const si=bt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",si);const Et=h(n(bt,"asset")[0]),Jt=new Lc(this.manager);Jt.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Wt;Yl&&(Wt=new Yl(this.manager),Wt.setPath(this.resourcePath||t));const Nt=new st,Ft=[];let Si={},Rn=0;const qe={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(bt,"library_animations","animation",m),p(bt,"library_animation_clips","animation_clip",O),p(bt,"library_controllers","controller",oe),p(bt,"library_images","image",ne),p(bt,"library_effects","effect",Ze),p(bt,"library_materials","material",q),p(bt,"library_cameras","camera",Ue),p(bt,"library_lights","light",Xe),p(bt,"library_geometries","geometry",Se),p(bt,"library_nodes","node",Y),p(bt,"library_visual_scenes","visual_scene",mt),p(bt,"library_kinematics_models","kinematics_model",fn),p(bt,"library_physics_models","physics_model",yi),p(bt,"scene","instance_kinematics_scene",Nr),g(qe.animations,C),g(qe.clips,Q),g(qe.controllers,Ee),g(qe.images,ie),g(qe.effects,N),g(qe.materials,ae),g(qe.cameras,le),g(qe.lights,je),g(qe.geometries,Je),g(qe.visualScenes,Rt),Ct(),Br();const Is=He(n(bt,"scene")[0]);return Is.animations=Ft,Et.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Is.rotation.set(-Math.PI/2,0,0)),Is.scale.multiplyScalar(Et.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ft},kinematics:Si,library:qe,scene:Is}}}const jl=new k,Kg=new hn,rr=new Qe,Yn=new Qe,or=new yn,ar=new k(1,1,1),lr=new k;class Dr extends Dt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class Zg extends Dr{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class Qg extends Dr{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class Vc extends Dr{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class Hc extends Dr{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new k(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new k(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),jl.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(jl,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],Yn.compose(this.origPosition,this.origQuaternion,ar),or.setFromEuler(Kg.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),lr.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),rr.compose(lr,or,ar),Yn.premultiply(rr),this.position.setFromMatrixPosition(Yn),this.rotation.setFromRotationMatrix(Yn),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],Yn.compose(this.origPosition,this.origQuaternion,ar),or.setFromAxisAngle(this.axis,this.jointValue[2]),lr.set(this.jointValue[0],this.jointValue[1],0),rr.compose(lr,or,ar),Yn.premultiply(rr),this.position.setFromMatrixPosition(Yn),this.rotation.setFromRotationMatrix(Yn),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class Jl extends Hc{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class e_ extends Vc{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(i=>this.joints[i.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const n in e){const i=e[n];Array.isArray(i)?t=this.setJointValue(n,...i)||t:t=this.setJointValue(n,i)||t}return t}}const Eo=new yn,Kl=new hn;function Bi(s){return s?s.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Zl(s,e,t=!1){t||s.rotation.set(0,0,0),Kl.set(e[0],e[1],e[2],"ZYX"),Eo.setFromEuler(Kl),Eo.multiply(s.quaternion),s.quaternion.copy(Eo)}class cr{constructor(e){this.manager=e||Pc,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,i){const r=this.manager,o=Nc.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(l=>{if(l.ok)return n&&n(null),l.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||o);t(c),r.itemEnd(a)}).catch(l=>{i?i(l):console.error("URDFLoader: Error loading file.",l),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){const n=this.packages,i=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,l={},c={},h={};function d(b){if(!/^package:\/\//.test(b))return t?t+b:b;const[C,T]=b.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(C)?n+"/"+T:n+"/"+C+"/"+T;if(n instanceof Function)return n(C)+"/"+T;if(typeof n=="object")return C in n?n[C]+"/"+T:(console.error(`URDFLoader : ${C} not found in provided package list.`),null)}function f(b){let C;b instanceof Document?C=[...b.children]:b instanceof Element?C=[b]:C=[...new DOMParser().parseFromString(b,"text/xml").children];const T=C.filter(P=>P.nodeName==="robot").pop();return p(T)}function p(b){const C=[...b.children],T=C.filter(D=>D.nodeName.toLowerCase()==="link"),P=C.filter(D=>D.nodeName.toLowerCase()==="joint"),I=C.filter(D=>D.nodeName.toLowerCase()==="material"),L=new e_;L.robotName=b.getAttribute("name"),L.urdfRobotNode=b,I.forEach(D=>{const z=D.getAttribute("name");h[z]=m(D)});const U={},M={};T.forEach(D=>{const z=D.getAttribute("name"),H=b.querySelector(`child[link="${z}"]`)===null;l[z]=x(D,U,M,H?L:null)}),P.forEach(D=>{const z=D.getAttribute("name");c[z]=g(D)}),L.joints=c,L.links=l,L.colliders=M,L.visual=U;const y=Object.values(c);return y.forEach(D=>{D instanceof Jl&&c[D.mimicJoint].mimicJoints.push(D)}),y.forEach(D=>{const z=new Set,H=J=>{if(z.has(J))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");z.add(J),J.mimicJoints.forEach(Z=>{H(Z)})};H(D)}),L.frames={...M,...U,...l,...c},L}function g(b){const C=[...b.children],T=b.getAttribute("type");let P;const I=C.find(z=>z.nodeName.toLowerCase()==="mimic");I?(P=new Jl,P.mimicJoint=I.getAttribute("joint"),P.multiplier=parseFloat(I.getAttribute("multiplier")||1),P.offset=parseFloat(I.getAttribute("offset")||0)):P=new Hc,P.urdfNode=b,P.name=b.getAttribute("name"),P.urdfName=P.name,P.jointType=T;let L=null,U=null,M=[0,0,0],y=[0,0,0];C.forEach(z=>{const H=z.nodeName.toLowerCase();H==="origin"?(M=Bi(z.getAttribute("xyz")),y=Bi(z.getAttribute("rpy"))):H==="child"?U=l[z.getAttribute("link")]:H==="parent"?L=l[z.getAttribute("link")]:H==="limit"&&(P.limit.lower=parseFloat(z.getAttribute("lower")||P.limit.lower),P.limit.upper=parseFloat(z.getAttribute("upper")||P.limit.upper))}),L.add(P),P.add(U),Zl(P,y),P.position.set(M[0],M[1],M[2]);const D=C.filter(z=>z.nodeName.toLowerCase()==="axis")[0];if(D){const z=D.getAttribute("xyz").split(/\s+/g).map(H=>parseFloat(H));P.axis=new k(z[0],z[1],z[2]),P.axis.normalize()}return P}function x(b,C,T,P=null){P===null&&(P=new Vc);const I=[...b.children];return P.name=b.getAttribute("name"),P.urdfName=P.name,P.urdfNode=b,r&&I.filter(U=>U.nodeName.toLowerCase()==="visual").forEach(U=>{const M=u(U,h);if(P.add(M),U.hasAttribute("name")){const y=U.getAttribute("name");M.name=y,M.urdfName=y,C[y]=M}}),o&&I.filter(U=>U.nodeName.toLowerCase()==="collision").forEach(U=>{const M=u(U);if(P.add(M),U.hasAttribute("name")){const y=U.getAttribute("name");M.name=y,M.urdfName=y,T[y]=M}}),P}function m(b){const C=[...b.children],T=new kn;return T.name=b.getAttribute("name")||"",C.forEach(P=>{const I=P.nodeName.toLowerCase();if(I==="color"){const L=P.getAttribute("rgba").split(/\s/g).map(U=>parseFloat(U));T.color.setRGB(L[0],L[1],L[2]),T.opacity=L[3],T.transparent=L[3]<1,T.depthWrite=!T.transparent}else if(I==="texture"){const L=P.getAttribute("filename");if(L){const U=new Lc(a),M=d(L);T.map=U.load(M),T.map.colorSpace=It}}}),T}function u(b,C={}){const T=b.nodeName.toLowerCase()==="collision",P=[...b.children];let I=null;const L=P.filter(M=>M.nodeName.toLowerCase()==="material")[0];if(L){const M=L.getAttribute("name");M&&M in C?I=C[M]:I=m(L)}else I=new kn;const U=T?new Zg:new Qg;return U.urdfNode=b,P.forEach(M=>{const y=M.nodeName.toLowerCase();if(y==="geometry"){const D=M.children[0].nodeName.toLowerCase();if(D==="mesh"){const z=M.children[0].getAttribute("filename"),H=d(z);if(H!==null){const J=M.children[0].getAttribute("scale");if(J){const Z=Bi(J);U.scale.set(Z[0],Z[1],Z[2])}i(H,a,(Z,O)=>{O?console.error("URDFLoader: Error loading mesh.",O):Z&&(Z instanceof Yt&&(Z.material=I),Z.position.set(0,0,0),Z.quaternion.identity(),U.add(Z))})}}else if(D==="box"){const z=new Yt;z.geometry=new is(1,1,1),z.material=I;const H=Bi(M.children[0].getAttribute("size"));z.scale.set(H[0],H[1],H[2]),U.add(z)}else if(D==="sphere"){const z=new Yt;z.geometry=new Ea(1,30,30),z.material=I;const H=parseFloat(M.children[0].getAttribute("radius"))||0;z.scale.set(H,H,H),U.add(z)}else if(D==="cylinder"){const z=new Yt;z.geometry=new Ma(1,1,1,30),z.material=I;const H=parseFloat(M.children[0].getAttribute("radius"))||0,J=parseFloat(M.children[0].getAttribute("length"))||0;z.scale.set(H,J,H),z.rotation.set(Math.PI/2,0,0),U.add(z)}}else if(y==="origin"){const D=Bi(M.getAttribute("xyz")),z=Bi(M.getAttribute("rpy"));U.position.set(D[0],D[1],D[2]),U.rotation.set(0,0,0),Zl(U,z)}}),U}return f(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new jg(t).load(e,r=>{const o=new Yt(r,new kn);n(o)}):/\.dae$/i.test(e)?new Jg(t).load(e,r=>n(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}const jn="",Ql=100;class t_{constructor(){this.isConnected=!1,this.pollInterval=null,this.onStateUpdate=null,this.onConnectionChange=null,this.lastUpdateTime=0,this.updateThrottle=50}async start(e,t){var i,r;this.onStateUpdate=e,this.onConnectionChange=t,await this.checkHealth()?(this.isConnected=!0,(i=this.onConnectionChange)==null||i.call(this,!0),await this.pollState(),this.pollInterval=setInterval(()=>this.pollState(),Ql),console.log("✅ API客户端已启动，轮询间隔:",Ql,"ms")):(this.isConnected=!1,(r=this.onConnectionChange)==null||r.call(this,!1),console.warn("⚠️ 后端API未连接，将在离线模式下运行"))}stop(){var e;this.pollInterval&&(clearInterval(this.pollInterval),this.pollInterval=null),this.isConnected=!1,(e=this.onConnectionChange)==null||e.call(this,!1),console.log("API客户端已停止")}async checkHealth(){try{return(await fetch(`${jn}/mode`,{method:"GET",signal:AbortSignal.timeout(2e3)})).status===200}catch{return!1}}async pollState(){var e,t,n;try{const i=await fetch(`${jn}/state`,{method:"GET",signal:AbortSignal.timeout(1e3)});if(!i.ok)throw new Error(`HTTP ${i.status}`);const r=await i.json();if(!r||!r.data){console.warn("⚠️ /state 返回数据格式异常:",r);return}const o=r.data;try{const a=await fetch(`${jn}/mode`,{method:"GET",signal:AbortSignal.timeout(1e3)});if(a.ok){const l=await a.json();l.code===200&&l.data!==void 0&&(o.mode_state=l.data)}}catch(a){console.warn("⚠️ 获取模式状态失败:",a.message)}this.isConnected||(this.isConnected=!0,(e=this.onConnectionChange)==null||e.call(this,!0),console.log("✅ API连接已恢复")),(t=this.onStateUpdate)==null||t.call(this,o)}catch(i){this.isConnected&&(this.isConnected=!1,(n=this.onConnectionChange)==null||n.call(this,!1),console.warn("⚠️ API连接断开:",i.message))}}async updateState(e){if(!this.isConnected)return console.warn("⚠️ API未连接，无法更新状态"),null;const t=Date.now();if(t-this.lastUpdateTime<this.updateThrottle)return null;this.lastUpdateTime=t;try{const n=await fetch(`${jn}/state`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),signal:AbortSignal.timeout(1e3)});if(!n.ok)throw new Error(`HTTP ${n.status}`);return await n.json()}catch(n){return console.error("❌ 更新状态失败:",n.message),null}}async executeCommand(e,t=null){if(!this.isConnected)return console.warn("⚠️ API未连接，无法执行命令:",e),{success:!1,message:"API未连接"};try{const n=await fetch(`${jn}/command`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:e,params:t}),signal:AbortSignal.timeout(2e3)});if(!n.ok)throw new Error(`HTTP ${n.status}`);const i=await n.json();return i.success?console.log(`✅ 命令执行成功: ${e} - ${i.message}`):console.warn(`⚠️ 命令执行失败: ${e} - ${i.message}`),i}catch(n){return console.error(`❌ 命令执行错误: ${e}`,n.message),{success:!1,message:n.message}}}async setMode(e){if(!this.isConnected)return console.warn("⚠️ API未连接，无法设置模式"),{success:!1};try{console.log(`设置模式中: ${e}...`);const t=await fetch(`${jn}/mode`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collect_mode:e}),signal:AbortSignal.timeout(2e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();return console.log("setMode result:",n),n.code===200?(console.log(`✅ 模式设置成功: ${e}`),{success:!0,data:n.data}):(console.warn(`⚠️ 模式设置失败: ${n.msg}`),{success:!1,message:n.msg})}catch(t){return console.error(`❌ 模式设置失败: ${e}`,t.message),{success:!1,message:t.message}}}async getImageState(e=".png"){if(!this.isConnected)return console.warn("⚠️ API未连接，无法获取图像"),null;try{const t=await fetch(`${jn}/infer_state?image_fmt=${e}`,{method:"GET",signal:AbortSignal.timeout(3e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);return await t.blob()}catch(t){return console.error("❌ 获取图像失败:",t.message),null}}async getImagesJSON(){if(!this.isConnected)return console.warn("⚠️ API未连接，无法获取图像"),null;try{const e=await fetch(`${jn}/images`,{method:"GET",signal:AbortSignal.timeout(3e3)});if(!e.ok)throw new Error(`HTTP ${e.status}`);return await e.json()}catch(e){return console.error("❌ 获取图像失败:",e.message),null}}joints6to7(e){return[...e,0]}joints7to6(e){return e.slice(0,6)}}const Mn=new t_,ec="robot_arm_storage_version",hr="1.0.2";class n_{constructor(){this.checkAndMigrateVersion()}checkAndMigrateVersion(){const e=this.getVersion();e!==hr&&(console.log(`Storage version mismatch. Current: ${e}, Required: ${hr}`),this.migrate(e,hr),this.setVersion(hr))}getVersion(){return localStorage.getItem(ec)||"0.0.0"}setVersion(e){localStorage.setItem(ec,e)}migrate(e,t){console.log(`Migrating storage from ${e} to ${t}`),e==="0.0.0"&&console.log("First time initialization")}get(e,t=null){try{const n=localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch(n){return console.warn(`Failed to parse localStorage key "${e}":`,n),t}}set(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(n){return console.error(`Failed to save to localStorage key "${e}":`,n),!1}}remove(e){try{return localStorage.removeItem(e),!0}catch(t){return console.error(`Failed to remove localStorage key "${e}":`,t),!1}}clear(){try{const e=this.getVersion();return localStorage.clear(),this.setVersion(e),!0}catch(e){return console.error("Failed to clear localStorage:",e),!1}}has(e){return localStorage.getItem(e)!==null}}const _n=new n_,Jn={KEY_BINDINGS:`${_n.getVersion()}_robotArmKeyBindings`,DIFF_THRESHOLD:`${_n.getVersion()}_robotArmDiffThreshold`,GRIPPER_DIFF_THRESHOLD:`${_n.getVersion()}_robotArmGripperDiffThreshold`},dr={DIFF_THRESHOLD:1.5,GRIPPER_DIFF_THRESHOLD:.05};class i_{constructor(e={}){this.wsUrl=e.wsUrl||"ws://localhost:8000/ws/images",this.ws=null,this.isConnected=!1,this.reconnectInterval=null,this.reconnectDelay=3e3,this.requestInterval=null,this.onVisibilityChange=e.onVisibilityChange||null,this.containers={high:null,left_hand:null,right_hand:null},this.visibility={high:!0,left_hand:!0,right_hand:!0},this.viewStates={high:{scale:1,offsetX:0,offsetY:0,isDragging:!1,startX:0,startY:0},left_hand:{scale:1,offsetX:0,offsetY:0,isDragging:!1,startX:0,startY:0},right_hand:{scale:1,offsetX:0,offsetY:0,isDragging:!1,startX:0,startY:0}},this.windowDragStates={high:{isDragging:!1,startX:0,startY:0},left_hand:{isDragging:!1,startX:0,startY:0},right_hand:{isDragging:!1,startX:0,startY:0}},this.windowSizes={high:{width:640,height:480},left_hand:{width:640,height:480},right_hand:{width:640,height:480}},this.resizeDragStates={high:{isDragging:!1,startX:0,startY:0,startWidth:0,startHeight:0},left_hand:{isDragging:!1,startX:0,startY:0,startWidth:0,startHeight:0},right_hand:{isDragging:!1,startX:0,startY:0,startWidth:0,startHeight:0}},this.config={fps:e.fps||30,width:640,height:480,quality:85},this.frameCount=0,this.lastFrameTime=Date.now(),this.fps=0,this.currentMaxZIndex=3,this.baseZIndexRange={min:1,max:49}}init(){this.createUI(),this.connectWebSocket(),this.loadImageConfig(),this.loadLayout(),this.setupKeyboardShortcuts(),window.addEventListener("resize",()=>{this.initializeLayout()})}setupKeyboardShortcuts(){document.addEventListener("keydown",e=>{e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"||(e.key==="1"?(e.preventDefault(),this.toggleVisibility("high")):e.key==="2"?(e.preventDefault(),this.toggleVisibility("left_hand")):e.key==="3"?(e.preventDefault(),this.toggleVisibility("right_hand")):e.ctrlKey&&e.key==="s"?(e.preventDefault(),this.saveLayout()):e.ctrlKey&&e.key==="l"&&(e.preventDefault(),this.loadLayout(),this.showNotification("布局已加载")))}),console.log("⌨️ 图像查看器快捷键已启用:"),console.log("  1 - 切换前视相机"),console.log("  2 - 切换左手相机"),console.log("  3 - 切换右手相机"),console.log("  Ctrl+S - 保存布局"),console.log("  Ctrl+L - 加载布局")}loadImageConfig(){try{const e=localStorage.getItem("imageViewerConfig");if(e){const t=JSON.parse(e);this.config.fps=t.fps||30,this.config.width=t.width||640,this.config.height=t.height||480,console.log(" 已加载图像配置:",this.config)}}catch(e){console.error(" 加载图像配置失败:",e)}}createUI(){const e=document.createElement("div");e.id="image-viewer-container",e.className="image-viewer-container";const t=document.createElement("div");t.className="views-wrapper",[{id:"high",title:"前视相机"},{id:"left_hand",title:"左手相机"},{id:"right_hand",title:"右手相机"}].forEach(i=>{const r=this.createViewContainer(i.id,i.title);t.appendChild(r),this.containers[i.id]=r.querySelector(".image-view-canvas")}),e.appendChild(t),document.body.appendChild(e),this.bindEvents(),this.initializeLayout()}createViewContainer(e,t){const n=document.createElement("div");return n.className="image-view-wrapper draggable",n.id=`${e}-wrapper`,n.innerHTML=`
      <div class="image-view-header drag-handle" data-view="${e}">
        <span class="image-view-drag-icon">⠿</span>
        <span class="image-view-title">${t}</span>
        <div class="image-view-controls">
          <button class="image-view-btn" data-action="reset-zoom" data-view="${e}" title="重置缩放">
            <span class="btn-icon">🔄</span>
          </button>
          <button class="image-view-btn" data-action="resize-settings" data-view="${e}" title="调整尺寸">
            <span class="btn-icon">⚙️</span>
          </button>
        </div>
        <span class="image-view-fps" id="${e}-fps">0 FPS</span>
      </div>
      <div class="image-view-content" id="${e}-content">
        <canvas class="image-view-canvas" id="${e}-canvas"></canvas>
        <div class="image-view-loading">连接中...</div>
        <div class="resize-handle" data-view="${e}"></div>
      </div>
    `,n}bindEvents(){document.querySelectorAll(".image-view-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.dataset.action,i=e.dataset.view;switch(n){case"toggle-visibility":this.toggleVisibility(i);break;case"reset-zoom":this.resetZoom(i);break;case"fullscreen":this.toggleFullscreen(i);break;case"save-layout":this.saveLayout();break;case"reset-layout":this.resetLayout();break;case"resize-settings":this.showResizeSettings(i);break}})}),document.querySelectorAll(".drag-handle").forEach(e=>{e.addEventListener("mousedown",t=>{const n=e.dataset.view;this.startWindowDrag(t,n)})}),document.addEventListener("mousemove",e=>{this.windowDragMove(e)}),document.addEventListener("mouseup",e=>{this.endWindowDrag(e)}),Object.keys(this.containers).forEach(e=>{const t=this.containers[e];t&&(t.addEventListener("wheel",n=>this.handleWheel(n,e)),t.addEventListener("mousedown",n=>this.handleMouseDown(n,e)),t.addEventListener("mousemove",n=>this.handleMouseMove(n,e)),t.addEventListener("mouseup",n=>this.handleMouseUp(n,e)),t.addEventListener("mouseleave",n=>this.handleMouseUp(n,e)),t.addEventListener("touchstart",n=>this.handleTouchStart(n,e)),t.addEventListener("touchmove",n=>this.handleTouchMove(n,e)),t.addEventListener("touchend",n=>this.handleTouchEnd(n,e)))}),document.querySelectorAll(".resize-handle").forEach(e=>{e.addEventListener("mousedown",t=>{const n=e.dataset.view;this.startResize(t,n)})}),document.addEventListener("mousemove",e=>{this.handleResizeMove(e)}),document.addEventListener("mouseup",e=>{this.endResize(e)}),document.querySelectorAll(".image-view-wrapper").forEach(e=>{e.addEventListener("mousedown",t=>{if(t.target.closest(".drag-handle")||t.target.closest(".resize-handle"))return;const n=e.id.replace("-wrapper","");this.bringToFront(n)})})}bringToFront(e){const t=document.getElementById(`${e}-wrapper`);!t||(parseInt(getComputedStyle(t).zIndex)||0)===this.currentMaxZIndex||(this.currentMaxZIndex>=this.baseZIndexRange.max&&this.resetZIndices(),this.currentMaxZIndex++,t.style.zIndex=this.currentMaxZIndex,console.log(`📌 ${e} 提到前面，z-index=${this.currentMaxZIndex}`))}resetZIndices(){const e=[{id:"high",wrapper:document.getElementById("high-wrapper")},{id:"left_hand",wrapper:document.getElementById("left_hand-wrapper")},{id:"right_hand",wrapper:document.getElementById("right_hand-wrapper")}];e.sort((t,n)=>{const i=t.wrapper&&parseInt(getComputedStyle(t.wrapper).zIndex)||0,r=n.wrapper&&parseInt(getComputedStyle(n.wrapper).zIndex)||0;return i-r}),e.forEach((t,n)=>{t.wrapper&&(t.wrapper.style.zIndex=this.baseZIndexRange.min+n)}),this.currentMaxZIndex=this.baseZIndexRange.min+e.length-1,console.log("🔄 重新分配 z-index:",e.map(t=>{var n;return`${t.id}=${(n=t.wrapper)==null?void 0:n.style.zIndex}`}).join(", "))}startWindowDrag(e,t){const n=document.getElementById(`${t}-wrapper`);if(!n)return;this.bringToFront(t);const i=this.windowDragStates[t];i.isDragging=!0;const r=n.getBoundingClientRect();n.style.position="fixed",n.style.left=`${r.left}px`,n.style.top=`${r.top}px`,n.style.margin="0",i.startX=e.clientX-r.left,i.startY=e.clientY-r.top,n.style.cursor="move",n.classList.add("dragging"),e.preventDefault(),e.stopPropagation()}windowDragMove(e){Object.keys(this.windowDragStates).forEach(t=>{const n=this.windowDragStates[t];if(!n.isDragging)return;const i=document.getElementById(`${t}-wrapper`);if(!i)return;const r=e.clientX-n.startX,o=e.clientY-n.startY;i.style.left=`${r}px`,i.style.top=`${o}px`})}endWindowDrag(e){Object.keys(this.windowDragStates).forEach(t=>{const n=this.windowDragStates[t];if(!n.isDragging)return;n.isDragging=!1;const i=document.getElementById(`${t}-wrapper`);i&&(i.style.cursor="default",i.classList.remove("dragging"))})}initializeLayout(){const e=window.innerWidth,t=window.innerHeight,n=this.config.width,i=this.config.height;let r=50,o=0,a=15,l=10;const c=n,h=i+r;let d=c*3+a*2+l,f=h+o+l,p=c+l,g=h*3+a*2+o+l,x=c*2+a+l,m=h*2+a+o+l;const u=document.getElementById("image-viewer-container"),b=document.querySelector(".views-wrapper");if(!u||!b)return;console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📐 布局计算
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
屏幕尺寸: ${e}x${t}
图像尺寸: ${n}x${i}
单窗尺寸: ${c}x${h}

1️⃣  水平布局需要: ${d}x${f}
  - 宽度充足: ${e>=d?"✅":"❌"} (${e} vs ${d})
  - 高度充足: ${t>=f?"✅":"❌"} (${t} vs ${f})

2️⃣  垂直布局需要: ${p}x${g}
  - 宽度充足: ${e>=p?"✅":"❌"} (${e} vs ${p})
  - 高度充足: ${t>=g?"✅":"❌"} (${t} vs ${g})

3️⃣  网格布局需要: ${x}x${m}
  - 宽度充足: ${e>=x?"✅":"❌"} (${e} vs ${x})
  - 高度充足: ${t>=m?"✅":"❌"} (${t} vs ${m})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim());let C="grid";if(e>=d&&t>=f)C="horizontal",console.log("✅ 选择: 水平布局 (3个横排，底部居中)");else if(e>=x&&t>=m)C="grid",console.log("✅ 选择: 网格布局 (2×2网格，底部居中)");else if(t>=g)C="vertical",console.log("✅ 选择: 垂直布局 (3个竖排，左侧居中)");else{const T=x-e,P=m-t;if(T<150&&P<150){if(C="grid-compact",P>0){const I=P+20;l=Math.max(10,l-Math.ceil(I/2)),a=Math.max(5,a-Math.ceil(I/4)),o=Math.max(30,o-Math.ceil(I/4))}console.log(`✅ 选择: 网格布局-紧凑模式 (调整: padding=${l}, gap=${a}, handle=${o})`)}else C="grid",console.log("⚠️  选择: 网格布局 (空间不足，可能需要滚动)")}C==="horizontal"?(b.style.flexDirection="row",b.style.flexWrap="nowrap",b.style.gap=`${a}px`,b.style.maxWidth="100%",u.style.left="0",u.style.right="0",u.style.top="auto",u.style.bottom=`${l}px`,u.style.transform="none",u.style.alignItems="center",u.style.gap=`${a}px`):C==="vertical"?(b.style.flexDirection="column",b.style.flexWrap="nowrap",b.style.gap=`${a}px`,b.style.maxWidth="100%",u.style.left=`${l}px`,u.style.right="auto",u.style.top="50%",u.style.bottom="auto",u.style.transform="translateY(-50%)",u.style.alignItems="flex-start",u.style.gap=`${a}px`):(b.style.flexDirection="row",b.style.flexWrap="wrap",b.style.gap=`${a}px`,b.style.maxWidth="100%",u.style.gap=`${a}px`,u.style.alignItems="center",h*2+a+o+l<=t?(u.style.left="0",u.style.right="0",u.style.top="auto",u.style.bottom=`${l}px`,u.style.transform="none",console.log("  → 定位: 底部居中")):(u.style.left="0",u.style.right="0",u.style.top=`${l}px`,u.style.bottom="auto",u.style.transform="none",console.log("  → 定位: 顶部居中（避免超出屏幕）"))),console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)}connectWebSocket(){try{console.log("🔌 连接WebSocket:",this.wsUrl),this.ws=new WebSocket(this.wsUrl),this.ws.binaryType="arraybuffer",this.ws.onopen=()=>{console.log("✅ WebSocket已连接"),this.isConnected=!0,this.hideLoading(),this.reconnectInterval&&(clearTimeout(this.reconnectInterval),this.reconnectInterval=null),this.startRequestLoop()},this.ws.onmessage=e=>{try{if(e.data instanceof ArrayBuffer){const t=e.data,n=new DataView(t);let i=0;const r=n.getUint32(i,!0);i+=4;const o=new Uint8Array(t,i,r);i+=r;const a=n.getUint32(i,!0);i+=4;const l=new Uint8Array(t,i,a);i+=a;const c=n.getUint32(i,!0);i+=4;const h=new Uint8Array(t,i,c),d=new Blob([o],{type:"image/jpeg"}),f=new Blob([l],{type:"image/jpeg"}),p=new Blob([h],{type:"image/jpeg"}),g={high:d,left_hand:f,right_hand:p};this.updateImages(g)}else{const t=JSON.parse(e.data);t.error?console.error("❌ 服务端错误:",t.error):this.updateImages(t)}}catch(t){console.error("❌ 解析WebSocket消息失败:",t)}},this.ws.onerror=e=>{console.error("❌ WebSocket错误:",e)},this.ws.onclose=()=>{console.warn("⚠️ WebSocket连接关闭"),this.isConnected=!1,this.showLoading(),this.stopRequestLoop(),this.reconnectInterval=setTimeout(()=>{console.log("🔄 尝试重新连接WebSocket..."),this.connectWebSocket()},this.reconnectDelay)}}catch(e){console.error("❌ WebSocket连接失败:",e),this.showLoading()}}startRequestLoop(){this.stopRequestLoop();const e=1e3/this.config.fps;console.log(`🎬 启动图像请求循环，fps=${this.config.fps}，间隔=${e.toFixed(2)}ms`),this.requestFrame(),this.requestInterval=setInterval(()=>{this.requestFrame()},e)}stopRequestLoop(){this.requestInterval&&(clearInterval(this.requestInterval),this.requestInterval=null,console.log("⏹️ 停止图像请求循环"))}requestFrame(){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send("request_frame")}setFPS(e){if(e<=0||e>120){console.warn(`⚠️ FPS值${e}超出范围，应在1-120之间`);return}console.log(`🎬 设置FPS: ${this.config.fps} → ${e}`),this.config.fps=e,this.requestInterval&&this.startRequestLoop()}updateImages(e){this.updateFPS(),["high","left_hand","right_hand"].forEach(t=>{e[t]&&this.visibility[t]&&this.drawImage(t,e[t])})}async drawImage(e,t){const n=this.containers[e];if(!n)return;const i=n.getContext("2d");try{(n.width!==this.config.width||n.height!==this.config.height)&&(n.width=this.config.width,n.height=this.config.height);let r;if(t instanceof Blob)r=await createImageBitmap(t);else{const a=new Image;await new Promise((l,c)=>{a.onload=l,a.onerror=c,a.src=`data:image/jpeg;base64,${t}`}),r=await createImageBitmap(a)}i.clearRect(0,0,n.width,n.height),i.save();const o=this.viewStates[e];i.translate(n.width/2,n.height/2),i.scale(o.scale,o.scale),i.translate(o.offsetX,o.offsetY),i.drawImage(r,-r.width/2,-r.height/2),i.restore(),r.close()}catch(r){console.error(`❌ 绘制图像失败 [${e}]:`,r)}}updateFPS(){this.frameCount++;const e=Date.now(),t=e-this.lastFrameTime;t>=1e3&&(this.fps=Math.round(this.frameCount/(t/1e3)),this.frameCount=0,this.lastFrameTime=e,Object.keys(this.containers).forEach(n=>{const i=document.getElementById(`${n}-fps`);i&&(i.textContent=`${this.fps} FPS`)}))}toggleVisibility(e){this.visibility[e]=!this.visibility[e];const t=document.getElementById(`${e}-wrapper`);this.visibility[e]?t.classList.remove("hidden"):t.classList.add("hidden"),this.onVisibilityChange&&this.onVisibilityChange(e,this.visibility[e])}resetZoom(e){const t=this.viewStates[e];t.scale=1,t.offsetX=0,t.offsetY=0;const n=this.containers[e];n&&n.getContext("2d").clearRect(0,0,n.width,n.height)}toggleFullscreen(e){const t=document.getElementById(`${e}-content`);t&&(document.fullscreenElement?document.exitFullscreen():t.requestFullscreen().catch(n=>{console.error("全屏失败:",n)}))}handleWheel(e,t){e.preventDefault();const n=this.viewStates[t],i=e.deltaY>0?.9:1.1;n.scale*=i,n.scale=Math.max(.1,Math.min(10,n.scale))}handleMouseDown(e,t){const n=this.viewStates[t];n.isDragging=!0,n.startX=e.clientX-n.offsetX,n.startY=e.clientY-n.offsetY;const i=this.containers[t];i.style.cursor="grabbing"}handleMouseMove(e,t){const n=this.viewStates[t];n.isDragging&&(n.offsetX=e.clientX-n.startX,n.offsetY=e.clientY-n.startY)}handleMouseUp(e,t){const n=this.viewStates[t];n.isDragging=!1;const i=this.containers[t];i.style.cursor="grab"}handleTouchStart(e,t){if(e.touches.length===1){const n=e.touches[0];this.handleMouseDown({clientX:n.clientX,clientY:n.clientY},t)}}handleTouchMove(e,t){if(e.preventDefault(),e.touches.length===1){const n=e.touches[0];this.handleMouseMove({clientX:n.clientX,clientY:n.clientY},t)}}handleTouchEnd(e,t){this.handleMouseUp({},t)}showLoading(){document.querySelectorAll(".image-view-loading").forEach(e=>{e.style.display="flex"})}hideLoading(){document.querySelectorAll(".image-view-loading").forEach(e=>{e.style.display="none"})}saveLayout(){const e={};["high","left_hand","right_hand"].forEach(t=>{const n=document.getElementById(`${t}-wrapper`);n&&(e[t]={left:n.style.left||"",top:n.style.top||"",position:n.style.position||"",visible:this.visibility[t],zIndex:n.style.zIndex||getComputedStyle(n).zIndex||"",width:this.windowSizes[t].width,height:this.windowSizes[t].height})}),e._maxZIndex=this.currentMaxZIndex,localStorage.setItem("imageViewerLayout",JSON.stringify(e)),console.log("💾 布局已保存:",e),this.showNotification("布局已保存")}loadLayout(){try{const e=localStorage.getItem("imageViewerLayout");if(!e){console.log("📂 没有保存的布局，使用默认布局");return}const t=JSON.parse(e);console.log("📂 加载保存的布局:",t),["high","left_hand","right_hand"].forEach(n=>{if(t[n]){const i=document.getElementById(`${n}-wrapper`);i&&(t[n].position&&(i.style.position=t[n].position),t[n].left&&(i.style.left=t[n].left),t[n].top&&(i.style.top=t[n].top),t[n].zIndex&&(i.style.zIndex=t[n].zIndex),t[n].width&&t[n].height&&this.setWindowSize(n,t[n].width,t[n].height),this.visibility[n]=t[n].visible!==!1,this.visibility[n]?i.classList.remove("hidden"):i.classList.add("hidden"))}}),t._maxZIndex!==void 0&&(this.currentMaxZIndex=t._maxZIndex,console.log(`📂 恢复 z-index 计数器: ${this.currentMaxZIndex}`)),this.onVisibilityChange&&["high","left_hand","right_hand"].forEach(n=>{this.onVisibilityChange(n,this.visibility[n])})}catch(e){console.error("❌ 加载布局失败:",e)}}resetLayout(){localStorage.removeItem("imageViewerLayout"),console.log("🔙 布局已重置"),["high","left_hand","right_hand"].forEach((e,t)=>{const n=document.getElementById(`${e}-wrapper`);n&&(n.style.position="",n.style.left="",n.style.top="",n.style.margin="",n.classList.remove("hidden"),n.style.zIndex=3-t),this.visibility[e]=!0}),this.currentMaxZIndex=3,console.log("重置 z-index 计数器: 3"),this.initializeLayout(),this.showNotification("布局已重置")}startResize(e,t){e.preventDefault(),e.stopPropagation();const n=this.resizeDragStates[t];document.getElementById(`${t}-content`)&&(n.isDragging=!0,n.startX=e.clientX,n.startY=e.clientY,n.startWidth=this.windowSizes[t].width,n.startHeight=this.windowSizes[t].height,document.body.style.cursor="nwse-resize")}handleResizeMove(e){Object.keys(this.resizeDragStates).forEach(t=>{const n=this.resizeDragStates[t];if(!n.isDragging)return;const i=e.clientX-n.startX,r=e.clientY-n.startY,o=Math.max(320,n.startWidth+i),a=Math.max(240,n.startHeight+r);this.setWindowSize(t,o,a)})}endResize(){Object.keys(this.resizeDragStates).forEach(e=>{const t=this.resizeDragStates[e];t.isDragging&&(t.isDragging=!1,document.body.style.cursor="")})}setWindowSize(e,t,n){this.windowSizes[e].width=t,this.windowSizes[e].height=n;const i=document.getElementById(`${e}-content`),r=this.containers[e];i&&(i.style.width=`${t}px`,i.style.height=`${n}px`),r&&(r.width=t,r.height=n)}showResizeSettings(e){const t=document.getElementById("resize-popover"),n=document.getElementById("resize-width-input"),i=document.getElementById("resize-height-input"),r=document.getElementById("resize-apply-btn"),o=document.getElementById("resize-cancel-btn"),a=document.getElementById("resize-reset-btn");if(!t||!n||!i)return;this.currentResizeViewId=e;const l=this.windowSizes[e];n.value=l.width,i.value=l.height;const c=document.getElementById(`${e}-wrapper`);if(c){const g=c.getBoundingClientRect(),x=window.innerHeight,m=200,u=g.left+g.width/2-150;let b;x-g.bottom<300?b=g.top-m-10:b=g.top+g.height/2-100,b=Math.max(10,Math.min(b,x-m-10)),t.style.left=`${u}px`,t.style.top=`${b}px`}t.style.display="block";const h=r.cloneNode(!0),d=o.cloneNode(!0),f=a.cloneNode(!0);r.parentNode.replaceChild(h,r),o.parentNode.replaceChild(d,o),a.parentNode.replaceChild(f,a),h.addEventListener("click",()=>{const g=parseInt(n.value),x=parseInt(i.value);if(isNaN(g)||isNaN(x)){alert("请输入有效的数字");return}if(g<320||x<240){alert("宽度最小为 320px，高度最小为 240px");return}this.setWindowSize(e,g,x),this.showNotification(`尺寸已调整为 ${g}x${x}`),t.style.display="none"}),d.addEventListener("click",()=>{t.style.display="none"}),f.addEventListener("click",()=>{const g=this.config.width,x=this.config.height;n.value=g,i.value=x,this.setWindowSize(e,g,x),this.showNotification(`已重置为默认尺寸 ${g}x${x}`),t.style.display="none"});const p=g=>{!t.contains(g.target)&&g.target.dataset.action!=="resize-settings"&&(t.style.display="none",document.removeEventListener("click",p))};setTimeout(()=>{document.addEventListener("click",p)},100)}showNotification(e){let t=document.getElementById("layout-notification");t||(t=document.createElement("div"),t.id="layout-notification",t.className="layout-notification",document.body.appendChild(t)),t.textContent=e,t.classList.add("show"),setTimeout(()=>{t.classList.remove("show")},2e3)}destroy(){this.stopRequestLoop(),this.ws&&(this.ws.close(),this.ws=null),this.reconnectInterval&&(clearTimeout(this.reconnectInterval),this.reconnectInterval=null);const e=document.getElementById("image-viewer-container");e&&e.remove()}}class s_{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.opacity=.2,this.leftRobot=null,this.leftSlaveRobot=null,this.rightRobot=null,this.rightSlaveRobot=null,this.animationId=null,this.isAnimating=!1,this.leftJointAngles={joint1:0,joint2:0,joint3:0,joint4:0,joint5:0,joint6:0},this.leftSlaveJointAngles={joint1:0,joint2:0,joint3:0,joint4:0,joint5:0,joint6:0},this.rightJointAngles={joint1:0,joint2:0,joint3:0,joint4:0,joint5:0,joint6:0},this.rightSlaveJointAngles={joint1:0,joint2:0,joint3:0,joint4:0,joint5:0,joint6:0},this.selectedArm="left",this.diffThreshold=_n.get(Jn.DIFF_THRESHOLD,dr.DIFF_THRESHOLD),this.gripperDiffThreshold=_n.get(Jn.GRIPPER_DIFF_THRESHOLD,dr.GRIPPER_DIFF_THRESHOLD),this.mode="manual",this.modeState=-2,this.leftGripper=0,this.rightGripper=0,this.leftSlaveGripper=0,this.rightSlaveGripper=0,this.isRecording=!1,this.recordedTrajectory=[],this.previousState=null,this.robotsLoaded=0,this.defaultKeyBindings={r:"start-record",s:"stop-record",x:"stop-motion",z:"rollback",m:"manual-mode",n:"model-mode",1:"select-left-arm",2:"select-right-arm",0:"reset",q:"random",d:"demo"},this.keyBindings=this.loadKeyBindings(),this.keyBindingNames={"start-record":"开始录制","stop-record":"停止录制","stop-motion":"停止运动",rollback:"回退","manual-mode":"手动模式","model-mode":"模型模式","select-left-arm":"选择左臂","select-right-arm":"选择右臂",reset:"重置位置",random:"随机姿态",demo:"演示动画"},this.apiEnabled=!1,this.apiConnected=!1,this.syncFromAPI=!1,this.imageViewer=null,this.init(),this.loadLeftRobot(),this.loadLeftSlaveRobot(),this.loadRightRobot(),this.loadRightSlaveRobot(),this.animate(),this.startAPI(),this.initImageViewer()}initImageViewer(){try{const e=`ws://${window.location.hostname}:8000/ws/images`;this.imageViewer=new i_({wsUrl:e,onVisibilityChange:()=>this.updateViewerMenuStatus()}),this.imageViewer.init(),this.initImageViewerDropdown(),console.log("✅ 图像查看器已初始化")}catch(e){console.error("❌ 图像查看器初始化失败:",e)}}initImageViewerDropdown(){const e=document.getElementById("image-viewer-menu-btn"),t=document.getElementById("image-viewer-menu");!e||!t||(e.addEventListener("click",n=>{n.stopPropagation(),t.classList.toggle("show")}),document.addEventListener("click",n=>{!e.contains(n.target)&&!t.contains(n.target)&&t.classList.remove("show")}),t.querySelectorAll(".dropdown-item").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const r=n.dataset.action,o=n.dataset.view;r==="toggle-view"&&o?(this.imageViewer.toggleVisibility(o),this.updateViewerMenuStatus()):r==="save-layout"?(this.imageViewer.saveLayout(),t.classList.remove("show")):r==="load-layout"?(this.imageViewer.loadLayout(),t.classList.remove("show")):r==="reset-layout"&&(this.imageViewer.resetLayout(),t.classList.remove("show"))})}),this.updateViewerMenuStatus())}updateViewerMenuStatus(){this.imageViewer&&["high","left_hand","right_hand"].forEach(e=>{const t=document.getElementById(`status-${e}`);if(t){const n=this.imageViewer.visibility[e];t.textContent=n?"✓":"✕",t.classList.toggle("hidden",!n)}})}async startAPI(){await Mn.start(e=>this.handleAPIStateUpdate(e),e=>this.handleAPIConnectionChange(e))}handleAPIStateUpdate(e){if(!(!this.apiEnabled||this.syncFromAPI)){this.syncFromAPI=!0;try{const t=e||{};t.lead_left_arm&&Array.isArray(t.lead_left_arm)&&t.lead_left_arm.length>=6&&this.leftRobot&&Object.keys(this.leftJointAngles).forEach((n,i)=>{t.lead_left_arm[i]!==void 0&&(this.leftJointAngles[n]=t.lead_left_arm[i],this.leftRobot.setJointValue(n,t.lead_left_arm[i]))}),t.lead_left_gripper!==void 0&&t.lead_left_gripper>=0&&(this.leftGripper=t.lead_left_gripper*.07/.048),t.follow_left_arm&&Array.isArray(t.follow_left_arm)&&t.follow_left_arm.length>=6&&this.leftSlaveRobot&&Object.keys(this.leftSlaveJointAngles).forEach((n,i)=>{t.follow_left_arm[i]!==void 0&&(this.leftSlaveJointAngles[n]=t.follow_left_arm[i],this.leftSlaveRobot.setJointValue(n,t.follow_left_arm[i]))}),t.follow_left_gripper!==void 0&&t.follow_left_gripper>=0&&(this.leftSlaveGripper=t.follow_left_gripper),t.lead_right_arm&&Array.isArray(t.lead_right_arm)&&t.lead_right_arm.length>=6&&this.rightRobot&&Object.keys(this.rightJointAngles).forEach((n,i)=>{t.lead_right_arm[i]!==void 0&&(this.rightJointAngles[n]=t.lead_right_arm[i],this.rightRobot.setJointValue(n,t.lead_right_arm[i]))}),t.lead_right_gripper!==void 0&&t.lead_right_gripper>=0&&(this.rightGripper=t.lead_right_gripper*.07/.048),t.follow_right_arm&&Array.isArray(t.follow_right_arm)&&t.follow_right_arm.length>=6&&this.rightSlaveRobot&&Object.keys(this.rightSlaveJointAngles).forEach((n,i)=>{t.follow_right_arm[i]!==void 0&&(this.rightSlaveJointAngles[n]=t.follow_right_arm[i],this.rightSlaveRobot.setJointValue(n,t.follow_right_arm[i]))}),t.follow_right_gripper!==void 0&&t.follow_right_gripper>=0&&(this.rightSlaveGripper=t.follow_right_gripper),t.mode_state!==void 0&&(this.modeState=t.mode_state,this.modeState===1?this.mode="model":this.modeState===2&&(this.mode="manual"),this.updateConnectionStatusUI()),this.isRecording=this.modeState>=0,this.updateModeUI(),this.updateRecordingUI(),this.updateButtonStates(),this.updateAllJointDisplays()}catch(t){console.error("❌ 处理API状态更新失败:",t)}finally{this.syncFromAPI=!1}}}handleAPIConnectionChange(e){this.apiConnected=e,this.updateConnectionStatusUI()}updateConnectionStatusUI(){const e=document.getElementById("api-status-dot"),t=document.getElementById("api-status-text");if(!(!e||!t))if(this.apiConnected){let n="已连接",i="api-status-dot idle";switch(this.modeState){case-2:n="初始化中",i="api-status-dot idle";break;case-1:n="未启动",i="api-status-dot idle";break;case 0:n="停止运动",i="api-status-dot stopped";break;case 1:n="模型模式",i="api-status-dot model";break;case 2:n="手动模式",i="api-status-dot manual";break;default:n="已连接",i="api-status-dot idle"}e.className=i,t.textContent=n,this.apiEnabled=!0}else e.className="api-status-dot disconnected",t.textContent="离线",this.apiEnabled=!1}checkAllJointsWithinThreshold(){for(let e in this.leftJointAngles)if(Math.abs(this.leftJointAngles[e]-this.leftSlaveJointAngles[e])>this.diffThreshold)return!1;if(Math.abs(this.leftGripper-this.leftSlaveGripper)>this.gripperDiffThreshold)return!1;for(let e in this.rightJointAngles)if(Math.abs(this.rightJointAngles[e]-this.rightSlaveJointAngles[e])>this.diffThreshold)return!1;return!(Math.abs(this.rightGripper-this.rightSlaveGripper)>this.gripperDiffThreshold)}updateButtonStates(){const e=document.getElementById("start-record-btn"),t=document.getElementById("stop-record-btn"),n=document.getElementById("stop-motion-btn"),i=document.getElementById("rollback-btn"),r=document.getElementById("manual-mode-btn"),o=document.getElementById("model-mode-btn"),a=document.getElementById("reset-btn"),l=document.getElementById("random-btn"),c=document.getElementById("demo-btn");if(!this.apiEnabled){[e,t,n,i,r,o,a,l,c].forEach(g=>{g&&(g.disabled=!1)});return}const h=this.modeState===-2,d=this.modeState===-1,f=this.modeState!==-2&&this.modeState!==-1,p=this.checkAllJointsWithinThreshold();if(h){[e,t,n,i,r,o,a,l,c].forEach(g=>{g&&(g.disabled=!0)});return}e&&(e.disabled=!d),[t,n,i,a,l,c].forEach(g=>{g&&(g.disabled=!f)}),r&&(r.disabled=!f||!p),o&&(o.disabled=!f)}async syncToAPI(){if(!this.apiEnabled||this.syncFromAPI)return;const e={lead_left_arm:Object.values(this.leftJointAngles),lead_left_gripper:this.leftGripper,lead_right_arm:Object.values(this.rightJointAngles),lead_right_gripper:this.rightGripper,follow_left_arm:Object.values(this.leftSlaveJointAngles),follow_left_gripper:this.leftSlaveGripper,follow_right_arm:Object.values(this.rightSlaveJointAngles),follow_right_gripper:this.rightSlaveGripper,robot_state:{mode:this.mode,is_recording:this.isRecording,is_animating:this.isAnimating,selected_arm:this.selectedArm}};await Mn.updateState(e)}init(){const e="/ui/";this.urdfUrl=`${e}dos-w1/urdf/replay.urdf`,this.meshBasePath=`${e}dos-w1`,this.scene=new Mc,this.scene.background=new st(16777215),this.camera=new $t(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,1,.5),this.camera.lookAt(0,.2,0),this.renderer=new Ng({canvas:document.getElementById("canvas"),antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nc,this.renderer.sortObjects=!0,this.controls=new Fg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=.5,this.controls.maxDistance=20;const t=new Dc(16777215,.8);this.scene.add(t);const n=new Ic(16777215,1);n.position.set(5,5,5),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,this.scene.add(n);const i=new jd(10,10,13421772,14737632);i.position.y=.001,this.scene.add(i),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.setupKeyboardControls()}setupKeyboardControls(){document.addEventListener("keydown",e=>{if(e.target.tagName==="INPUT")return;const t=e.key.toLowerCase(),n=this.keyBindings[t];if(n)switch(e.preventDefault(),n){case"start-record":this.startRecording();break;case"stop-record":this.stopRecording();break;case"stop-motion":this.stopMotion();break;case"rollback":this.rollback();break;case"manual-mode":this.switchToManualMode();break;case"model-mode":this.switchToModelMode();break;case"select-left-arm":this.switchArm("left");break;case"select-right-arm":this.switchArm("right");break;case"reset":this.resetPosition();break;case"random":this.randomPose();break;case"demo":this.toggleDemo();break}}),console.log("键盘快捷键已启用。查看 this.keyBindings 获取按键映射。")}loadKeyBindings(){return _n.get(Jn.KEY_BINDINGS,{...this.defaultKeyBindings})}saveKeyBindings(){_n.set(Jn.KEY_BINDINGS,this.keyBindings),console.log("键盘绑定配置已保存")}resetKeyBindings(){this.keyBindings={...this.defaultKeyBindings},this.saveKeyBindings(),this.diffThreshold=dr.DIFF_THRESHOLD,this.gripperDiffThreshold=dr.GRIPPER_DIFF_THRESHOLD,_n.set(Jn.DIFF_THRESHOLD,this.diffThreshold),_n.set(Jn.GRIPPER_DIFF_THRESHOLD,this.gripperDiffThreshold),this.imageViewer&&(this.imageViewer.config.fps=30,this.imageViewer.config.width=640,this.imageViewer.config.height=480,this.imageViewer.requestInterval&&this.imageViewer.startRequestLoop(),localStorage.setItem("imageViewerConfig",JSON.stringify(this.imageViewer.config))),this.updateButtonLabels(),this.updateAllJointDisplays(),this.updateButtonStates(),console.log("所有设置已恢复默认")}openSettingsModal(){var U,M,y;const e=document.getElementById("settings-modal"),t=document.getElementById("key-bindings-list");t.innerHTML="",this.tempKeyBindings={...this.keyBindings},this.tempDiffThreshold=this.diffThreshold,this.tempGripperDiffThreshold=this.gripperDiffThreshold;const n=document.createElement("div");n.style.cssText="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #e0e0e0;";const i=document.createElement("h3");i.textContent="差值阈值设置",i.style.cssText="margin-top: 0; margin-bottom: 15px; color: #0066cc; font-size: 18px;",n.appendChild(i);const r=document.createElement("div");r.className="key-binding-item",r.style.cssText="display: flex; align-items: center; justify-content: space-between;";const o=document.createElement("div");o.style.cssText="flex: 1;",o.innerHTML=`
      <div style="font-size: 14px; color: #333; font-weight: 500; margin-bottom: 4px;">关节差值阈值</div>
      <div style="font-size: 12px; color: #666;">单位：弧度</div>
    `;const a=document.createElement("input");a.type="number",a.step="0.1",a.min="0",a.value=this.tempDiffThreshold.toFixed(1),a.style.cssText="width: 100px; padding: 8px 12px; font-size: 14px; border: 2px solid #0066cc; border-radius: 4px;",a.id="diff-threshold-input",r.appendChild(o),r.appendChild(a),n.appendChild(r);const l=document.createElement("div");l.className="key-binding-item",l.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;";const c=document.createElement("div");c.style.cssText="flex: 1;",c.innerHTML=`
      <div style="font-size: 14px; color: #333; font-weight: 500; margin-bottom: 4px;">夹爪差值阈值</div>
      <div style="font-size: 12px; color: #666;">单位：米</div>
    `;const h=document.createElement("input");h.type="number",h.step="0.001",h.min="0",h.value=this.tempGripperDiffThreshold.toFixed(3),h.style.cssText="width: 100px; padding: 8px 12px; font-size: 14px; border: 2px solid #0066cc; border-radius: 4px;",h.id="gripper-diff-threshold-input",l.appendChild(c),l.appendChild(h),n.appendChild(l),t.appendChild(n);const d=document.createElement("div");d.style.cssText="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #e0e0e0;";const f=document.createElement("h3");f.textContent="图像设置",f.style.cssText="margin-top: 15px; margin-bottom: 15px; color: #0066cc; font-size: 18px;",d.appendChild(f);const p=document.createElement("div");p.className="key-binding-item",p.style.cssText="display: flex; align-items: center; justify-content: space-between;";const g=document.createElement("div");g.style.cssText="flex: 1;",g.innerHTML=`
      <div style="font-size: 14px; color: #333; font-weight: 500; margin-bottom: 4px;">帧率（FPS）</div>
      <div style="font-size: 12px; color: #666;">图像请求频率 (1-60)</div>
    `;const x=document.createElement("input");x.type="number",x.min="1",x.max="60",x.value=((U=this.imageViewer)==null?void 0:U.config.fps)||30,x.style.cssText="width: 100px; padding: 8px 12px; font-size: 14px; border: 2px solid #0066cc; border-radius: 4px;",x.id="image-fps-input",p.appendChild(g),p.appendChild(x),d.appendChild(p);const m=document.createElement("div");m.className="key-binding-item",m.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;";const u=document.createElement("div");u.style.cssText="flex: 1;",u.innerHTML=`
      <div style="font-size: 14px; color: #333; font-weight: 500; margin-bottom: 4px;">默认宽度</div>
      <div style="font-size: 12px; color: #666;">新窗口默认宽度 (320-1920px)</div>
    `;const b=document.createElement("input");b.type="number",b.min="320",b.max="1920",b.value=((M=this.imageViewer)==null?void 0:M.config.width)||640,b.style.cssText="width: 100px; padding: 8px 12px; font-size: 14px; border: 2px solid #0066cc; border-radius: 4px;",b.id="image-width-input",m.appendChild(u),m.appendChild(b),d.appendChild(m);const C=document.createElement("div");C.className="key-binding-item",C.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;";const T=document.createElement("div");T.style.cssText="flex: 1;",T.innerHTML=`
      <div style="font-size: 14px; color: #333; font-weight: 500; margin-bottom: 4px;">默认高度</div>
      <div style="font-size: 12px; color: #666;">新窗口默认高度 (240-1080px)</div>
    `;const P=document.createElement("input");P.type="number",P.min="240",P.max="1080",P.value=((y=this.imageViewer)==null?void 0:y.config.height)||480,P.style.cssText="width: 100px; padding: 8px 12px; font-size: 14px; border: 2px solid #0066cc; border-radius: 4px;",P.id="image-height-input",C.appendChild(T),C.appendChild(P),d.appendChild(C),t.appendChild(d);const I=document.createElement("h3");I.textContent="键盘快捷键",I.style.cssText="margin-top: 15px; margin-bottom: 10px; color: #0066cc; font-size: 18px;",t.appendChild(I),Object.entries({录制与控制:["start-record","stop-record","stop-motion","rollback"],模式切换:["manual-mode","model-mode"],臂选择:["select-left-arm","select-right-arm"],关节操作:["reset","random","demo"]}).forEach(([D,z])=>{const H=document.createElement("h3");H.textContent=D,H.style.cssText="margin-top: 15px; margin-bottom: 10px; color: #0066cc; font-size: 16px;",t.appendChild(H),z.forEach(J=>{const Z=Object.keys(this.tempKeyBindings).find(oe=>this.tempKeyBindings[oe]===J)||"",O=document.createElement("div");O.className="key-binding-item";const Q=document.createElement("span");Q.className="key-binding-label",Q.textContent=this.keyBindingNames[J]||J;const W=document.createElement("input");W.type="text",W.className="key-binding-input",W.value=Z.toUpperCase(),W.readOnly=!0,W.dataset.action=J,W.addEventListener("keydown",oe=>{oe.preventDefault();const fe=oe.key.toLowerCase(),pe=this.tempKeyBindings[fe];if(pe&&pe!==J){alert(`按键 "${fe.toUpperCase()}" 已被 "${this.keyBindingNames[pe]}" 使用`);return}Object.keys(this.tempKeyBindings).forEach(be=>{this.tempKeyBindings[be]===J&&delete this.tempKeyBindings[be]}),this.tempKeyBindings[fe]=J,W.value=fe.toUpperCase()}),O.appendChild(Q),O.appendChild(W),t.appendChild(O)})}),e.classList.add("show")}closeSettingsModal(){document.getElementById("settings-modal").classList.remove("show")}saveSettings(){this.keyBindings={...this.tempKeyBindings},this.saveKeyBindings();const e=document.getElementById("diff-threshold-input"),t=document.getElementById("gripper-diff-threshold-input");if(e){const o=parseFloat(e.value);!isNaN(o)&&o>=0&&(this.diffThreshold=o,_n.set(Jn.DIFF_THRESHOLD,o))}if(t){const o=parseFloat(t.value);!isNaN(o)&&o>=0&&(this.gripperDiffThreshold=o,_n.set(Jn.GRIPPER_DIFF_THRESHOLD,o))}const n=document.getElementById("image-fps-input"),i=document.getElementById("image-width-input"),r=document.getElementById("image-height-input");if(this.imageViewer&&n&&i&&r){const o=parseInt(n.value),a=parseInt(i.value),l=parseInt(r.value);let c=!1;if((isNaN(o)||o<1||o>60)&&(alert("FPS必须在1-60之间"),c=!0),!c&&(isNaN(a)||a<320||a>1920)&&(alert("宽度必须在320-1920之间"),c=!0),!c&&(isNaN(l)||l<240||l>1080)&&(alert("高度必须在240-1080之间"),c=!0),c)return;this.imageViewer.config.fps=o,this.imageViewer.config.width=a,this.imageViewer.config.height=l,this.imageViewer.requestInterval&&this.imageViewer.startRequestLoop(),localStorage.setItem("imageViewerConfig",JSON.stringify(this.imageViewer.config))}this.updateButtonLabels(),this.updateAllJointDisplays(),this.updateButtonStates(),this.closeSettingsModal(),alert("设置已保存！")}updateButtonLabels(){Object.entries({"start-record-btn":"start-record","stop-record-btn":"stop-record","stop-motion-btn":"stop-motion","rollback-btn":"rollback","manual-mode-btn":"manual-mode","model-mode-btn":"model-mode","select-left-arm-btn":"select-left-arm","select-right-arm-btn":"select-right-arm","reset-btn":"reset","random-btn":"random","demo-btn":"demo"}).forEach(([t,n])=>{const i=document.getElementById(t);if(i){const r=Object.keys(this.keyBindings).find(a=>this.keyBindings[a]===n),o=i.textContent.replace(/\s*\[.*?\]\s*$/,"");r?i.textContent=`${o} [${r.toUpperCase()}]`:i.textContent=o}})}waitForMeshesAndSetTransparency(e,t,n){let i=0,r=0,o=0;const a=300,l=5,c=()=>{i++;let h=!0,d=0,f=[];if(e.traverse(g=>{g.isMesh&&(d++,(!g.geometry||!g.material)&&(h=!1,f.push(g.name||"unnamed")))}),d===r&&d>0?o++:(o=0,r=d),d===0||!h||o<l){i<a?(requestAnimationFrame(c),i%10===0&&console.log(`${n}等待中... 尝试=${i}, mesh=${d}, 稳定=${o}/${l}`)):console.warn(`${n}超时，mesh=${d}, 未加载:`,f);return}console.log(`${n}开始设置透明度，尝试次数: ${i}, mesh数量: ${d}`);let p=0;e.traverse(g=>{if(g.isMesh){p++;const x=g.name||`unnamed_${p}`;if(g.material){if(Array.isArray(g.material))console.log(`${n} ${x}: 处理材质数组，长度=${g.material.length}`),g.material=g.material.map((m,u)=>{const b=m.clone();return b.transparent=!0,b.opacity=this.opacity,b.color.setHex(t),b.depthWrite=!1,b.needsUpdate=!0,console.log(`  [${u}] ${b.type} opacity=${b.opacity} transparent=${b.transparent}`),b});else{const m=g.material.opacity,u=g.material.transparent,b=g.material.clone();b.transparent=!0,b.opacity=this.opacity,b.color.setHex(t),b.depthWrite=!1,b.needsUpdate=!0,g.material=b,console.log(`${n} ${x}: ${b.type} 旧值[opacity=${m}, transparent=${u}] 新值[opacity=${b.opacity}, transparent=${b.transparent}]`)}g.castShadow=!1,g.receiveShadow=!1}else console.warn(`${n} ${x}: 没有材质！`)}}),console.log(`${n}透明度设置完成，共处理 ${p} 个mesh`)};c()}loadLeftRobot(){const e=new cr;e.packages={replay:this.meshBasePath},e.load(this.urdfUrl,t=>{this.leftRobot=t,this.scene.add(t),t.position.set(-.25,0,0),t.rotation.x=-Math.PI/2,t.rotation.z=Math.PI/6,t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,Array.isArray(n.material)?n.material=n.material.map(()=>new kn({color:16777215,shininess:30,flatShading:!1})):n.material=new kn({color:16777215,shininess:30,flatShading:!1}))}),console.log("左主机械臂载入成功！",t),this.robotsLoaded++,this.robotsLoaded===4&&this.setupControls()})}loadLeftSlaveRobot(){const e=new cr;e.packages={replay:this.meshBasePath},e.load(this.urdfUrl,t=>{this.leftSlaveRobot=t,t.position.set(-.25,0,0),t.rotation.x=-Math.PI/2,t.rotation.z=Math.PI/6,this.scene.add(t),this.waitForMeshesAndSetTransparency(t,8965375,"左从臂"),console.log("左从机械臂载入成功！"),this.robotsLoaded++,this.robotsLoaded===4&&this.setupControls()})}loadRightRobot(){const e=new cr;e.packages={replay:this.meshBasePath},e.load(this.urdfUrl,t=>{this.rightRobot=t,this.scene.add(t),t.position.set(.25,0,0),t.rotation.x=-Math.PI/2,t.rotation.z=Math.PI-Math.PI/6,t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,Array.isArray(n.material)?n.material=n.material.map(()=>new kn({color:16777215,shininess:30,flatShading:!1})):n.material=new kn({color:16777215,shininess:30,flatShading:!1}))}),console.log("右主机械臂载入成功！",t),this.robotsLoaded++,this.robotsLoaded===4&&this.setupControls()})}loadRightSlaveRobot(){const e=new cr;e.packages={replay:this.meshBasePath},e.load(this.urdfUrl,t=>{this.rightSlaveRobot=t,t.position.set(.25,0,0),t.rotation.x=-Math.PI/2,t.rotation.z=Math.PI-Math.PI/6,this.scene.add(t),this.waitForMeshesAndSetTransparency(t,8965375,"右从臂"),console.log("右从机械臂载入成功！"),this.robotsLoaded++,this.robotsLoaded===4&&this.setupControls()})}getCurrentRobot(){return this.selectedArm==="left"?this.leftRobot:this.rightRobot}getCurrentSlaveRobot(){return this.selectedArm==="left"?this.leftSlaveRobot:this.rightSlaveRobot}getCurrentJointAngles(){return this.selectedArm==="left"?this.leftJointAngles:this.rightJointAngles}getCurrentSlaveJointAngles(){return this.selectedArm==="left"?this.leftSlaveJointAngles:this.rightSlaveJointAngles}switchArm(e){this.selectedArm=e,this.updateArmSelectionUI(),this.updateUIFromState()}updateArmSelectionUI(){const e=document.getElementById("select-left-arm-btn"),t=document.getElementById("select-right-arm-btn");this.selectedArm==="left"?(e.style.background="#00cc00",t.style.background="#0066cc"):(e.style.background="#0066cc",t.style.background="#00cc00")}setupControls(){var i,r,o,a,l,c,h,d,f,p,g,x,m,u,b,C;const e={joint1:"关节1",joint2:"关节2",joint3:"关节3",joint4:"关节4",joint5:"关节5",joint6:"关节6"},t=document.getElementById("left-arm-controls");t&&(t.innerHTML="",this.createArmControls(t,"left",e));const n=document.getElementById("right-arm-controls");n&&(n.innerHTML="",this.createArmControls(n,"right",e)),(i=document.getElementById("left-reset-btn"))==null||i.addEventListener("click",()=>{this.selectedArm="left",this.resetPosition()}),(r=document.getElementById("left-random-btn"))==null||r.addEventListener("click",()=>{this.selectedArm="left",this.randomPose()}),(o=document.getElementById("left-demo-btn"))==null||o.addEventListener("click",()=>{this.selectedArm="left",this.toggleDemo()}),(a=document.getElementById("right-reset-btn"))==null||a.addEventListener("click",()=>{this.selectedArm="right",this.resetPosition()}),(l=document.getElementById("right-random-btn"))==null||l.addEventListener("click",()=>{this.selectedArm="right",this.randomPose()}),(c=document.getElementById("right-demo-btn"))==null||c.addEventListener("click",()=>{this.selectedArm="right",this.toggleDemo()}),(h=document.getElementById("start-record-btn"))==null||h.addEventListener("click",()=>{this.startRecording()}),(d=document.getElementById("stop-record-btn"))==null||d.addEventListener("click",()=>{this.stopRecording()}),(f=document.getElementById("model-mode-btn"))==null||f.addEventListener("click",()=>{this.switchToModelMode()}),(p=document.getElementById("manual-mode-btn"))==null||p.addEventListener("click",()=>{this.switchToManualMode()}),(g=document.getElementById("stop-motion-btn"))==null||g.addEventListener("click",()=>{this.stopMotion()}),(x=document.getElementById("rollback-btn"))==null||x.addEventListener("click",()=>{this.rollback()}),(m=document.getElementById("settings-btn"))==null||m.addEventListener("click",()=>{this.openSettingsModal()}),(u=document.getElementById("save-bindings-btn"))==null||u.addEventListener("click",()=>{this.saveSettings()}),(b=document.getElementById("cancel-bindings-btn"))==null||b.addEventListener("click",()=>{this.closeSettingsModal()}),(C=document.getElementById("reset-bindings-btn"))==null||C.addEventListener("click",()=>{confirm("确定要恢复默认键盘快捷键吗？")&&(this.resetKeyBindings(),this.openSettingsModal())}),this.updateAllJointDisplays()}createArmControls(e,t,n){const r=e.parentElement.querySelector("h3");if(r&&!r.querySelector(".arm-control-switch")){const c=document.createElement("div");c.className="arm-control-switch";const h=document.createElement("span");h.className="switch-label",h.id=`${t}-arm-switch-label`,h.textContent="主";const d=document.createElement("label");d.className="switch";const f=document.createElement("input");f.type="checkbox",f.id=`${t}-arm-switch`,f.checked=!1;const p=document.createElement("span");p.className="switch-slider",d.appendChild(f),d.appendChild(p),c.appendChild(h),c.appendChild(d),r.appendChild(c),f.addEventListener("change",g=>{const x=document.getElementById(`${t}-arm-switch-label`);g.target.checked?x.textContent="从":x.textContent="主",Object.keys(n).forEach(u=>{const b=document.getElementById(`${t}-${u}-slider`);if(b){const C=t==="left"?this.leftSlaveJointAngles:this.rightSlaveJointAngles,T=t==="left"?this.leftJointAngles:this.rightJointAngles;g.target.checked?b.value=C[u]||0:b.value=T[u]||0}});const m=document.getElementById(`${t}-gripper-slider`);if(m){const u=t==="left"?this.leftSlaveGripper:this.rightSlaveGripper,b=t==="left"?this.leftGripper:this.rightGripper;g.target.checked?m.value=u||0:m.value=b||0}})}const o=t==="left"?this.leftRobot:this.rightRobot,a=t==="left"?this.leftSlaveJointAngles:this.rightSlaveJointAngles,l=t==="left"?this.leftJointAngles:this.rightJointAngles;Object.keys(a).forEach(c=>{const h=o==null?void 0:o.joints[c];h&&this.createJointItem(e,t,c,n[c]||c,h,a,l)}),this.createGripperItem(e,t)}createArmSection(e,t,n,i){const r=document.createElement("div");r.className="arm-section",r.id=`${t}-arm-section`;const o=document.createElement("h4");o.textContent=n,r.appendChild(o);const a=t==="left"?this.leftRobot:this.rightRobot,l=t==="left"?this.leftSlaveJointAngles:this.rightSlaveJointAngles,c=t==="left"?this.leftJointAngles:this.rightJointAngles;Object.keys(l).forEach(h=>{const d=a==null?void 0:a.joints[h];d&&this.createJointItem(r,t,h,i[h]||h,d,l,c)}),this.createGripperItem(r,t),e.appendChild(r)}createJointItem(e,t,n,i,r,o,a){const l=document.createElement("div");l.className="joint-item",l.id=`${t}-${n}-item`;const c=document.createElement("div");c.className="joint-header";const h=document.createElement("span");h.className="joint-name",h.textContent=`${i}`,c.appendChild(h);const d=document.createElement("div");d.className="visual-axis-container",d.style.position="relative";const f=document.createElement("span");f.className="lead-value",f.id=`${t}-${n}-lead-value`,f.textContent="0.0°";const p=document.createElement("div");p.className="axis-track";const g=document.createElement("div");g.className="axis-dot follow",g.id=`${t}-${n}-follow-dot`,g.style.left="50%";const x=document.createElement("div");x.className="axis-dot lead",x.id=`${t}-${n}-lead-dot`,x.style.left="50%",p.appendChild(g),p.appendChild(x);const m=document.createElement("span");m.className="follow-value",m.id=`${t}-${n}-follow-value`,m.textContent="0.0°",d.appendChild(f),d.appendChild(p),d.appendChild(m);const u=document.createElement("div");u.className="slider-container";const b=document.createElement("input");b.type="range",b.min=r.limit.lower,b.max=r.limit.upper,b.step="0.01",b.value=a[n]||0,b.className="joint-slider-small",b.id=`${t}-${n}-slider`,b.addEventListener("input",T=>{const P=parseFloat(T.target.value),I=document.getElementById(`${t}-arm-switch`);if(I&&I.checked){o[n]=P;const L=t==="left"?this.leftSlaveRobot:this.rightSlaveRobot;L&&L.setJointValue(n,P)}else{a[n]=P;const L=t==="left"?this.leftRobot:this.rightRobot;L&&L.setJointValue(n,P)}this.updateJointDisplay(t,n),this.updateButtonStates()}),u.appendChild(b),d.appendChild(u),c.appendChild(d);const C=document.createElement("span");C.className="diff-badge",C.id=`${t}-${n}-diff-badge`,C.textContent="Diff: 0.0°",c.appendChild(C),l.appendChild(c),e.appendChild(l)}createGripperItem(e,t){const n=document.createElement("div");n.className="joint-item",n.id=`${t}-gripper-item`;const i=document.createElement("div");i.className="joint-header";const r=document.createElement("span");r.className="joint-name",r.textContent="夹爪",i.appendChild(r);const o=document.createElement("div");o.className="visual-axis-container",o.style.position="relative";const a=document.createElement("span");a.className="lead-value",a.id=`${t}-gripper-lead-value`,a.textContent="0.000";const l=document.createElement("div");l.className="axis-track";const c=document.createElement("div");c.className="axis-dot follow",c.id=`${t}-gripper-follow-dot`,c.style.left="0%";const h=document.createElement("div");h.className="axis-dot lead",h.id=`${t}-gripper-lead-dot`,h.style.left="0%",l.appendChild(c),l.appendChild(h);const d=document.createElement("span");d.className="follow-value",d.id=`${t}-gripper-follow-value`,d.textContent="0.000",o.appendChild(a),o.appendChild(l),o.appendChild(d);const f=document.createElement("div");f.className="slider-container";const p=document.createElement("input");p.type="range",p.min="0",p.max="0.072",p.step="0.001";const g=t==="left"?this.leftGripper:this.rightGripper;p.value=g||0,p.className="joint-slider-small",p.id=`${t}-gripper-slider`,p.addEventListener("input",m=>{const u=parseFloat(m.target.value),b=document.getElementById(`${t}-arm-switch`);b&&b.checked?t==="left"?this.leftSlaveGripper=u:this.rightSlaveGripper=u:t==="left"?this.leftGripper=u:this.rightGripper=u,this.updateGripperDisplay(t),this.updateButtonStates(),this.syncToAPI()}),f.appendChild(p),o.appendChild(f),i.appendChild(o);const x=document.createElement("span");x.className="diff-badge",x.id=`${t}-gripper-diff-badge`,x.textContent="Diff: 0.000",i.appendChild(x),n.appendChild(i),e.appendChild(n)}updateJointDisplay(e,t){const n=e==="left"?this.leftSlaveJointAngles:this.rightSlaveJointAngles,i=e==="left"?this.leftJointAngles:this.rightJointAngles,r=e==="left"?this.leftRobot:this.rightRobot,o=n[t]||0,a=i[t]||0,l=Math.abs(o-a),c=(o*180/Math.PI).toFixed(1),h=(a*180/Math.PI).toFixed(1),d=(l*180/Math.PI).toFixed(1),f=document.getElementById(`${e}-${t}-follow-value`),p=document.getElementById(`${e}-${t}-lead-value`),g=document.getElementById(`${e}-${t}-diff-badge`),x=document.getElementById(`${e}-${t}-item`);f&&(f.textContent=`${c}°`),p&&(p.textContent=`${h}°`);const m=r==null?void 0:r.joints[t];if(m){const u=m.limit.lower,C=m.limit.upper-u,T=(o-u)/C*100,P=(a-u)/C*100,I=document.getElementById(`${e}-${t}-follow-dot`),L=document.getElementById(`${e}-${t}-lead-dot`);I&&(I.style.left=`${T}%`),L&&(L.style.left=`${P}%`)}g&&(g.textContent=`Diff: ${d}°`,l>this.diffThreshold?(g.classList.add("warning"),x==null||x.classList.add("diff-warning")):(g.classList.remove("warning"),x==null||x.classList.remove("diff-warning")))}updateGripperDisplay(e){const t=e==="left"?this.leftSlaveGripper:this.rightSlaveGripper,n=e==="left"?this.leftGripper:this.rightGripper,i=Math.abs(t-n),r=document.getElementById(`${e}-gripper-follow-value`),o=document.getElementById(`${e}-gripper-lead-value`),a=document.getElementById(`${e}-gripper-diff-badge`),l=document.getElementById(`${e}-gripper-item`);r&&(r.textContent=t.toFixed(3)),o&&(o.textContent=n.toFixed(3));const c=.072,h=t/c*100,d=n/c*100,f=document.getElementById(`${e}-gripper-follow-dot`),p=document.getElementById(`${e}-gripper-lead-dot`);f&&(f.style.left=`${h}%`),p&&(p.style.left=`${d}%`),a&&(a.textContent=`Diff: ${i.toFixed(3)}`,i>this.gripperDiffThreshold?(a.classList.add("warning"),l==null||l.classList.add("diff-warning")):(a.classList.remove("warning"),l==null||l.classList.remove("diff-warning")))}updateAllJointDisplays(){Object.keys(this.leftJointAngles).forEach(e=>{this.updateJointDisplay("left",e)}),this.updateGripperDisplay("left"),Object.keys(this.rightJointAngles).forEach(e=>{this.updateJointDisplay("right",e)}),this.updateGripperDisplay("right")}updateJoint(e,t){const n=this.getCurrentRobot();n&&n.joints[e]&&(n.setJointValue(e,t),this.isRecording&&this.recordedTrajectory.push({timestamp:Date.now(),arm:this.selectedArm,jointAngles:{...this.getCurrentJointAngles()}}),this.updateJointDiffIndicators(),this.syncToAPI())}updateSlaveJoint(e,t){const n=this.getCurrentSlaveRobot();n&&n.joints[e]&&(n.setJointValue(e,t),this.updateJointDiffIndicators())}calculateJointDiff(e){return Math.abs(this.getCurrentJointAngles()[e]-this.getCurrentSlaveJointAngles()[e])}updateJointDiffIndicators(){const e=document.querySelectorAll(".joint-control");Object.keys(this.getCurrentJointAngles()).forEach((t,n)=>{const i=this.calculateJointDiff(t),r=e[n];r&&(i>this.diffThreshold?(r.style.borderColor="#ff0000",r.style.borderWidth="2px",r.style.backgroundColor="rgba(255, 0, 0, 0.1)"):(r.style.borderColor="rgba(0, 0, 0, 0.1)",r.style.borderWidth="1px",r.style.backgroundColor="rgba(0, 0, 0, 0.05)"))})}saveCurrentState(){this.previousState={leftJointAngles:{...this.leftJointAngles},leftSlaveJointAngles:{...this.leftSlaveJointAngles},rightJointAngles:{...this.rightJointAngles},rightSlaveJointAngles:{...this.rightSlaveJointAngles},selectedArm:this.selectedArm}}async startRecording(){this.isRecording||this.apiEnabled&&!(await Mn.setMode(10)).success||(this.saveCurrentState(),this.isRecording=!0,this.recordedTrajectory=[],this.updateRecordingUI(),console.log("开始录制轨迹"))}async stopRecording(){this.apiEnabled&&!(await Mn.setMode(11)).success||(this.isRecording=!1,this.updateRecordingUI(),console.log(`录制结束，共记录 ${this.recordedTrajectory.length} 个数据点`))}updateRecordingUI(){const e=document.getElementById("start-record-btn");if(e)if(this.isRecording)e.style.background="#cc0000",e.textContent=e.textContent.replace(/\s*\[.*?\]\s*$/,"")+" [R]",e.textContent=e.textContent.replace("开始录制","录制中...");else{e.style.background="#0066cc";const t="开始录制",n=Object.keys(this.keyBindings).find(i=>this.keyBindings[i]==="start-record");e.textContent=n?`${t} [${n.toUpperCase()}]`:t}}async switchToModelMode(){if(this.apiEnabled){const e=await Mn.setMode(1);if(console.log("result:",e),!e.success)return}this.saveCurrentState(),this.mode="model",this.modeState=1,this.updateModeUI(),console.log("切换到模型模式")}async switchToManualMode(){if(console.log("切换到手动模式函数被调用",this.mode),this.apiEnabled){console.log("before");const e=await Mn.setMode(2);if(console.log("after",e),!e.success)return}this.saveCurrentState(),this.mode="manual",this.modeState=2,this.updateModeUI(),console.log("切换到手动模式")}updateModeUI(){const e=document.getElementById("stop-motion-btn"),t=document.getElementById("model-mode-btn"),n=document.getElementById("manual-mode-btn");e&&(e.style.background=this.modeState===0?"#00cc00":"#0066cc"),t&&(t.style.background=this.modeState===1?"#00cc00":"#0066cc"),n&&(n.style.background=this.modeState===2?"#00cc00":"#0066cc")}async stopMotion(){this.apiEnabled&&await Mn.setMode(0),this.saveCurrentState(),this.isAnimating&&this.toggleDemo(),this.modeState=0,this.updateModeUI(),this.updateConnectionStatusUI(),console.log("停止所有运动")}async rollback(){if(this.apiEnabled)if((await Mn.setMode(3)).success){console.log("已回退到上一状态"),await Mn.setMode(0);return}else{alert("回退失败");return}if(!this.previousState){alert("没有可回退的状态");return}Object.keys(this.previousState.leftJointAngles).forEach(e=>{this.leftJointAngles[e]=this.previousState.leftJointAngles[e],this.leftSlaveJointAngles[e]=this.previousState.leftSlaveJointAngles[e],this.rightJointAngles[e]=this.previousState.rightJointAngles[e],this.rightSlaveJointAngles[e]=this.previousState.rightSlaveJointAngles[e]}),Object.keys(this.leftJointAngles).forEach(e=>{this.leftRobot&&this.leftRobot.setJointValue(e,this.leftJointAngles[e]),this.leftSlaveRobot&&this.leftSlaveRobot.setJointValue(e,this.leftSlaveJointAngles[e]),this.rightRobot&&this.rightRobot.setJointValue(e,this.rightJointAngles[e]),this.rightSlaveRobot&&this.rightSlaveRobot.setJointValue(e,this.rightSlaveJointAngles[e])}),this.selectedArm=this.previousState.selectedArm,this.updateArmSelectionUI(),this.updateUIFromState(),console.log("已回退到上一状态")}updateUIFromState(){document.querySelectorAll(".joint-control").forEach((e,t)=>{const n=Object.keys(this.getCurrentJointAngles())[t],i=e.querySelector(".joint-slider"),r=e.querySelector(".joint-number"),o=e.querySelector(".current-angle");if(i&&r&&o&&n){const a=this.getCurrentJointAngles()[n],l=(a*180/Math.PI).toFixed(1);i.value=a,r.value=a.toFixed(3),o.textContent=`${l}°`}})}async resetPosition(){if(this.apiEnabled){const n=await Mn.executeCommand("reset");if(n.success&&n.data){console.log("已复位到初始位置");return}}const e=document.getElementById(`${this.selectedArm}-arm-switch`);e&&e.checked?Object.keys(this.getCurrentSlaveJointAngles()).forEach(n=>{this.getCurrentSlaveJointAngles()[n]=0;const i=this.getCurrentSlaveRobot();i&&i.setJointValue(n,0)}):Object.keys(this.getCurrentJointAngles()).forEach(n=>{this.getCurrentJointAngles()[n]=0,this.updateJoint(n,0)}),this.updateAllJointDisplays()}randomPose(){if(this.isAnimating)return;this.saveCurrentState();const e=document.getElementById(`${this.selectedArm}-arm-switch`),t=e&&e.checked;if(t){const n=this.getCurrentSlaveJointAngles(),i=this.getCurrentSlaveRobot();Object.keys(n).forEach(r=>{const o=i==null?void 0:i.joints[r];if(!o)return;const a=o.limit.lower,l=o.limit.upper,c=Math.random()*(l-a)+a;n[r]=c,i&&i.setJointValue(r,c)})}else{const n=this.getCurrentJointAngles(),i=this.getCurrentRobot();Object.keys(n).forEach(r=>{const o=i==null?void 0:i.joints[r];if(!o)return;const a=o.limit.lower,l=o.limit.upper,c=Math.random()*(l-a)+a;n[r]=c,this.updateJoint(r,c)})}this.updateAllJointDisplays(),console.log(`在${this.selectedArm==="left"?"左":"右"}臂 ${t?"从臂":"主臂"}模式下生成随机姿态`)}toggleDemo(){const e=this.selectedArm,t=document.getElementById(`${e}-demo-btn`),n=document.getElementById(`${e}-random-btn`);this.isAnimating?(this.isAnimating=!1,t&&(t.textContent=t.textContent.replace("停止动画","演示")),n&&(n.disabled=!1,n.style.opacity="1")):(this.isAnimating=!0,t&&(t.textContent=t.textContent.replace("演示","停止动画")),n&&(n.disabled=!0,n.style.opacity="0.5"),this.demoAnimation())}demoAnimation(){if(!this.isAnimating)return;const e=Date.now()*.001,t={joint1:Math.sin(e*.5)*Math.PI*.5,joint2:Math.sin(e*.7)*Math.PI*.3,joint3:Math.sin(e*.9)*Math.PI*.4,joint4:Math.sin(e*1.1)*Math.PI*.3,joint5:Math.sin(e*1.3)*Math.PI*.3,joint6:Math.sin(e*1.5)*Math.PI},n=document.getElementById(`${this.selectedArm}-arm-switch`);n&&n.checked?Object.keys(t).forEach(r=>{const o=t[r];this.getCurrentSlaveJointAngles()[r]=o;const a=this.getCurrentSlaveRobot();a&&a.setJointValue(r,o)}):Object.keys(t).forEach(r=>{const o=t[r];this.getCurrentJointAngles()[r]=o,this.updateJoint(r,o)}),this.updateAllJointDisplays(),setTimeout(()=>this.demoAnimation(),50)}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.controls.update(),this.renderer.render(this.scene,this.camera)}}document.addEventListener("DOMContentLoaded",()=>{new s_});
