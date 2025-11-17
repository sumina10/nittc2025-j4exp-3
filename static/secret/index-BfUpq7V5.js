(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const qo="181",df=0,Al=1,pf=2,ru=1,mf=2,Nn=3,Qn=0,Kt=1,En=2,On=0,ji=1,wl=2,Cl=3,Rl=4,xf=5,di=100,gf=101,vf=102,_f=103,yf=104,bf=200,Mf=201,Sf=202,Tf=203,Js=204,Qs=205,Ef=206,Af=207,wf=208,Cf=209,Rf=210,Pf=211,Df=212,Uf=213,Lf=214,$s=0,eo=1,to=2,Zi=3,no=4,io=5,ro=6,ao=7,Ya=0,If=1,Ff=2,Jn=0,Nf=1,Of=2,Bf=3,kf=4,zf=5,Vf=6,Gf=7,Pl="attached",Hf="detached",au=300,Ji=301,Qi=302,za=303,so=304,qa=306,Fr=1e3,gn=1001,oo=1002,$t=1003,Wf=1004,ia=1005,jt=1006,us=1007,mi=1008,Cn=1009,su=1010,ou=1011,Nr=1012,jo=1013,gi=1014,An=1015,rr=1016,Ko=1017,Zo=1018,Or=1020,lu=35902,cu=35899,uu=1021,fu=1022,on=1023,Br=1026,kr=1027,hu=1028,Jo=1029,Qo=1030,$o=1031,el=1033,La=33776,Ia=33777,Fa=33778,Na=33779,lo=35840,co=35841,uo=35842,fo=35843,ho=36196,po=37492,mo=37496,xo=37808,go=37809,vo=37810,_o=37811,yo=37812,bo=37813,Mo=37814,So=37815,To=37816,Eo=37817,Ao=37818,wo=37819,Co=37820,Ro=37821,Po=36492,Do=36494,Uo=36495,Lo=36283,Io=36284,Fo=36285,No=36286,Va=2300,Oo=2301,fs=2302,Dl=2400,Ul=2401,Ll=2402,Xf=2500,Yf=3200,du=3201,ja=0,qf=1,Kn="",mt="srgb",$i="srgb-linear",Ga="linear",ft="srgb",Ci=7680,Il=519,jf=512,Kf=513,Zf=514,pu=515,Jf=516,Qf=517,$f=518,eh=519,Fl=35044,Nl="300 es",wn=2e3,Ha=2001;function mu(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function zr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function th(){const a=zr("canvas");return a.style.display="block",a}const Ol={};function Bl(...a){const e="THREE."+a.shift();console.log(e,...a)}function qe(...a){const e="THREE."+a.shift();console.warn(e,...a)}function it(...a){const e="THREE."+a.shift();console.error(e,...a)}function Vr(...a){const e=a.join(" ");e in Ol||(Ol[e]=!0,qe(...a))}function nh(a,e,t){return new Promise(function(i,n){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kl=1234567;const Rr=Math.PI/180,er=180/Math.PI;function $n(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[a&255]+Ft[a>>8&255]+Ft[a>>16&255]+Ft[a>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function tt(a,e,t){return Math.max(e,Math.min(t,a))}function tl(a,e){return(a%e+e)%e}function ih(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function rh(a,e,t){return a!==e?(t-a)/(e-a):0}function Pr(a,e,t){return(1-t)*a+t*e}function ah(a,e,t,i){return Pr(a,e,1-Math.exp(-t*i))}function sh(a,e=1){return e-Math.abs(tl(a,e*2)-e)}function oh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function lh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function ch(a,e){return a+Math.floor(Math.random()*(e-a+1))}function uh(a,e){return a+Math.random()*(e-a)}function fh(a){return a*(.5-Math.random())}function hh(a){a!==void 0&&(kl=a);let e=kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dh(a){return a*Rr}function ph(a){return a*er}function mh(a){return(a&a-1)===0&&a!==0}function xh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function gh(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function vh(a,e,t,i,n){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+i)/2),u=s((e+i)/2),f=r((e-i)/2),h=s((e-i)/2),d=r((i-e)/2),x=s((i-e)/2);switch(n){case"XYX":a.set(o*u,l*f,l*h,o*c);break;case"YZY":a.set(l*h,o*u,l*f,o*c);break;case"ZXZ":a.set(l*f,l*h,o*u,o*c);break;case"XZX":a.set(o*u,l*x,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*x,o*c);break;case"ZYZ":a.set(l*x,l*d,o*u,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Xi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Bt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:Rr,RAD2DEG:er,generateUUID:$n,clamp:tt,euclideanModulo:tl,mapLinear:ih,inverseLerp:rh,lerp:Pr,damp:ah,pingpong:sh,smoothstep:oh,smootherstep:lh,randInt:ch,randFloat:uh,randFloatSpread:fh,seededRandom:hh,degToRad:dh,radToDeg:ph,isPowerOfTwo:mh,ceilPowerOfTwo:xh,floorPowerOfTwo:gh,setQuaternionFromProperEuler:vh,normalize:Bt,denormalize:Xi};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let l=i[n+0],c=i[n+1],u=i[n+2],f=i[n+3],h=r[s+0],d=r[s+1],x=r[s+2],g=r[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=x,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==x){let m=l*h+c*d+u*x+f*g;m<0&&(h=-h,d=-d,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),v=Math.sin(b);p=Math.sin(p*b)/v,o=Math.sin(o*b)/v,l=l*p+h*o,c=c*p+d*o,u=u*p+x*o,f=f*p+g*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+x*o,f=f*p+g*o;const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,r,s){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],f=r[s],h=r[s+1],d=r[s+2],x=r[s+3];return e[t]=o*x+u*f+l*d-c*h,e[t+1]=l*x+u*h+c*f-o*d,e[t+2]=c*x+u*d+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),f=o(r/2),h=l(i/2),d=l(n/2),x=l(r/2);switch(s){case"XYZ":this._x=h*u*f+c*d*x,this._y=c*d*f-h*u*x,this._z=c*u*x+h*d*f,this._w=c*u*f-h*d*x;break;case"YXZ":this._x=h*u*f+c*d*x,this._y=c*d*f-h*u*x,this._z=c*u*x-h*d*f,this._w=c*u*f+h*d*x;break;case"ZXY":this._x=h*u*f-c*d*x,this._y=c*d*f+h*u*x,this._z=c*u*x+h*d*f,this._w=c*u*f-h*d*x;break;case"ZYX":this._x=h*u*f-c*d*x,this._y=c*d*f+h*u*x,this._z=c*u*x-h*d*f,this._w=c*u*f+h*d*x;break;case"YZX":this._x=h*u*f+c*d*x,this._y=c*d*f+h*u*x,this._z=c*u*x-h*d*f,this._w=c*u*f-h*d*x;break;case"XZY":this._x=h*u*f-c*d*x,this._y=c*d*f-h*u*x,this._z=c*u*x+h*d*f,this._w=c*u*f+h*d*x;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+n*c-r*l,this._y=n*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-n*o,this._w=s*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),u=2*(o*t-r*n),f=2*(r*i-s*t);return this.x=t+l*c+s*f-o*u,this.y=i+l*u+o*c-r*f,this.z=n+l*f+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hs=new K,zl=new Yt;class Ke{constructor(e,t,i,n,r,s,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c)}set(e,t,i,n,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],x=i[8],g=n[0],m=n[3],p=n[6],b=n[1],v=n[4],M=n[7],A=n[2],T=n[5],w=n[8];return r[0]=s*g+o*b+l*A,r[3]=s*m+o*v+l*T,r[6]=s*p+o*M+l*w,r[1]=c*g+u*b+f*A,r[4]=c*m+u*v+f*T,r[7]=c*p+u*M+f*w,r[2]=h*g+d*b+x*A,r[5]=h*m+d*v+x*T,r[8]=h*p+d*M+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*l+n*r*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*r,d=c*r-s*l,x=t*f+i*h+n*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=f*g,e[1]=(n*c-u*i)*g,e[2]=(o*i-n*s)*g,e[3]=h*g,e[4]=(u*t-n*l)*g,e[5]=(n*r-o*t)*g,e[6]=d*g,e[7]=(i*l-c*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Ke,Vl=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gl=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _h(){const a={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ft&&(n.r=Bn(n.r),n.g=Bn(n.g),n.b=Bn(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(n.r=Ki(n.r),n.g=Ki(n.g),n.b=Ki(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Kn?Ga:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[$i]:{primaries:e,whitePoint:i,transfer:Ga,toXYZ:Vl,fromXYZ:Gl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Vl,fromXYZ:Gl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),a}const Qe=_h();function Bn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ki(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ri;class yh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ri===void 0&&(Ri=zr("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Ri}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Bn(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bh=0;class nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?r.push(ps(n[s].image)):r.push(ps(n[s]))}else r=ps(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function ps(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?yh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Mh=0;const ms=new K;class Dt extends ar{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=gn,n=gn,r=jt,s=mi,o=on,l=Cn,c=Dt.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=$n(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ms).x}get height(){return this.source.getSize(ms).y}get depth(){return this.source.getSize(ms).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=au;Dt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,n=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(d+1)/2,A=(p+1)/2,T=(u+h)/4,w=(f+g)/4,P=(x+m)/4;return v>M&&v>A?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=T/i,r=w/i):M>A?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=T/n,r=P/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=w/r,n=P/r),this.set(i,n,r,t),this}let b=Math.sqrt((m-x)*(m-x)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(f-g)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const n={width:e,height:t,depth:i.depth},r=new Dt(n);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Sh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xu extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=$t,this.minFilter=$t,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Th extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=$t,this.minFilter=$t,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,fn):fn.fromBufferAttribute(r,s),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),aa.subVectors(this.max,vr),Pi.subVectors(e.a,vr),Di.subVectors(e.b,vr),Ui.subVectors(e.c,vr),Gn.subVectors(Di,Pi),Hn.subVectors(Ui,Di),ai.subVectors(Pi,Ui);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ai.y,ai.x,0];return!xs(t,Pi,Di,Ui,aa)||(t=[1,0,0,0,1,0,0,0,1],!xs(t,Pi,Di,Ui,aa))?!1:(sa.crossVectors(Gn,Hn),t=[sa.x,sa.y,sa.z],xs(t,Pi,Di,Ui,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new K,new K,new K,new K,new K,new K,new K,new K],fn=new K,ra=new ei,Pi=new K,Di=new K,Ui=new K,Gn=new K,Hn=new K,ai=new K,vr=new K,aa=new K,sa=new K,si=new K;function xs(a,e,t,i,n){for(let r=0,s=a.length-3;r<=s;r+=3){si.fromArray(a,r);const o=n.x*Math.abs(si.x)+n.y*Math.abs(si.y)+n.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),u=i.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Eh=new ei,_r=new K,gs=new K;class bi{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Eh.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(_r,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(gs)),this.expandByPoint(_r.copy(e.center).sub(gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new K,vs=new K,oa=new K,Wn=new K,_s=new K,la=new K,ys=new K;class il{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){vs.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(vs);const r=e.distanceTo(t)*.5,s=-this.direction.dot(oa),o=Wn.dot(this.direction),l=-Wn.dot(oa),c=Wn.lengthSq(),u=Math.abs(1-s*s);let f,h,d,x;if(u>0)if(f=s*l-o,h=s*o-l,x=r*u,f>=0)if(h>=-x)if(h<=x){const g=1/u;f*=g,h*=g,d=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(vs).addScaledVector(oa,h),d}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),n=Pn.dot(Pn)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,n,r){_s.subVectors(t,e),la.subVectors(i,e),ys.crossVectors(_s,la);let s=this.direction.dot(ys),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(la.crossVectors(Wn,la));if(l<0)return null;const c=o*this.direction.dot(_s.cross(Wn));if(c<0||l+c>s)return null;const u=-o*Wn.dot(ys);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,i,n,r,s,o,l,c,u,f,h,d,x,g,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c,u,f,h,d,x,g,m)}set(e,t,i,n,r,s,o,l,c,u,f,h,d,x,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),s=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,d=s*f,x=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+x*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=x+d*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,x=c*u,g=c*f;t[0]=h+g*o,t[4]=x*o-d,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=d*o-x,t[6]=g+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,x=c*u,g=c*f;t[0]=h-g*o,t[4]=-s*f,t[8]=x+d*o,t[1]=d+x*o,t[5]=s*u,t[9]=g-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,d=s*f,x=o*u,g=o*f;t[0]=l*u,t[4]=x*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,d=s*c,x=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=x*f+d,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+x,t[10]=h-g*f}else if(e.order==="XZY"){const h=s*l,d=s*c,x=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=s*u,t[9]=d*f-x,t[2]=x*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,wh)}lookAt(e,t,i){const n=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Xn.crossVectors(i,Jt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Xn.crossVectors(i,Jt)),Xn.normalize(),ca.crossVectors(Jt,Xn),n[0]=Xn.x,n[4]=ca.x,n[8]=Jt.x,n[1]=Xn.y,n[5]=ca.y,n[9]=Jt.y,n[2]=Xn.z,n[6]=ca.z,n[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],x=i[2],g=i[6],m=i[10],p=i[14],b=i[3],v=i[7],M=i[11],A=i[15],T=n[0],w=n[4],P=n[8],S=n[12],y=n[1],D=n[5],R=n[9],L=n[13],N=n[2],G=n[6],z=n[10],ne=n[14],Y=n[3],H=n[7],W=n[11],I=n[15];return r[0]=s*T+o*y+l*N+c*Y,r[4]=s*w+o*D+l*G+c*H,r[8]=s*P+o*R+l*z+c*W,r[12]=s*S+o*L+l*ne+c*I,r[1]=u*T+f*y+h*N+d*Y,r[5]=u*w+f*D+h*G+d*H,r[9]=u*P+f*R+h*z+d*W,r[13]=u*S+f*L+h*ne+d*I,r[2]=x*T+g*y+m*N+p*Y,r[6]=x*w+g*D+m*G+p*H,r[10]=x*P+g*R+m*z+p*W,r[14]=x*S+g*L+m*ne+p*I,r[3]=b*T+v*y+M*N+A*Y,r[7]=b*w+v*D+M*G+A*H,r[11]=b*P+v*R+M*z+A*W,r[15]=b*S+v*L+M*ne+A*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+r*l*f-n*c*f-r*o*h+i*c*h+n*o*d-i*l*d)+g*(+t*l*d-t*c*h+r*s*h-n*s*d+n*c*u-r*l*u)+m*(+t*c*f-t*o*d-r*s*f+i*s*d+r*o*u-i*c*u)+p*(-n*o*u-t*l*f+t*o*h+n*s*f-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],x=e[12],g=e[13],m=e[14],p=e[15],b=f*m*c-g*h*c+g*l*d-o*m*d-f*l*p+o*h*p,v=x*h*c-u*m*c-x*l*d+s*m*d+u*l*p-s*h*p,M=u*g*c-x*f*c+x*o*d-s*g*d-u*o*p+s*f*p,A=x*f*l-u*g*l-x*o*h+s*g*h+u*o*m-s*f*m,T=t*b+i*v+n*M+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=b*w,e[1]=(g*h*r-f*m*r-g*n*d+i*m*d+f*n*p-i*h*p)*w,e[2]=(o*m*r-g*l*r+g*n*c-i*m*c-o*n*p+i*l*p)*w,e[3]=(f*l*r-o*h*r-f*n*c+i*h*c+o*n*d-i*l*d)*w,e[4]=v*w,e[5]=(u*m*r-x*h*r+x*n*d-t*m*d-u*n*p+t*h*p)*w,e[6]=(x*l*r-s*m*r-x*n*c+t*m*c+s*n*p-t*l*p)*w,e[7]=(s*h*r-u*l*r+u*n*c-t*h*c-s*n*d+t*l*d)*w,e[8]=M*w,e[9]=(x*f*r-u*g*r-x*i*d+t*g*d+u*i*p-t*f*p)*w,e[10]=(s*g*r-x*o*r+x*i*c-t*g*c-s*i*p+t*o*p)*w,e[11]=(u*o*r-s*f*r-u*i*c+t*f*c+s*i*d-t*o*d)*w,e[12]=A*w,e[13]=(u*g*n-x*f*n+x*i*h-t*g*h-u*i*m+t*f*m)*w,e[14]=(x*o*n-s*g*n-x*i*l+t*g*l+s*i*m-t*o*m)*w,e[15]=(s*f*n-u*o*n+u*i*l-t*f*l-s*i*h+t*o*h)*w,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*s,0,c*l-n*o,u*l+n*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,f=o+o,h=r*c,d=r*u,x=r*f,g=s*u,m=s*f,p=o*f,b=l*c,v=l*u,M=l*f,A=i.x,T=i.y,w=i.z;return n[0]=(1-(g+p))*A,n[1]=(d+M)*A,n[2]=(x-v)*A,n[3]=0,n[4]=(d-M)*T,n[5]=(1-(h+p))*T,n[6]=(m+b)*T,n[7]=0,n[8]=(x+v)*w,n[9]=(m-b)*w,n[10]=(1-(h+g))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Li.set(n[0],n[1],n[2]).length();const s=Li.set(n[4],n[5],n[6]).length(),o=Li.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],hn.copy(this);const c=1/r,u=1/s,f=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),i.x=r,i.y=s,i.z=o,this}makePerspective(e,t,i,n,r,s,o=wn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-n),h=(t+e)/(t-e),d=(i+n)/(i-n);let x,g;if(l)x=r/(s-r),g=s*r/(s-r);else if(o===wn)x=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===Ha)x=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=wn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-n),h=-(t+e)/(t-e),d=-(i+n)/(i-n);let x,g;if(l)x=1/(s-r),g=s/(s-r);else if(o===wn)x=-2/(s-r),g=-(s+r)/(s-r);else if(o===Ha)x=-1/(s-r),g=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Li=new K,hn=new He,Ah=new K(0,0,0),wh=new K(1,1,1),Xn=new K,ca=new K,Jt=new K,Hl=new He,Wl=new Yt;class wt{constructor(e=0,t=0,i=0,n=wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wt.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const Xl=new K,Ii=new Yt,Dn=new He,ua=new K,yr=new K,Rh=new K,Ph=new Yt,Yl=new K(1,0,0),ql=new K(0,1,0),jl=new K(0,0,1),Kl={type:"added"},Dh={type:"removed"},Fi={type:"childadded",child:null},bs={type:"childremoved",child:null};class vt extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new K,t=new wt,i=new Yt,n=new K(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new He},normalMatrix:{value:new Ke}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ua.copy(e):ua.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(yr,ua,this.up):Dn.lookAt(ua,yr,this.up),this.quaternion.setFromRotationMatrix(Dn),n&&(Dn.extractRotation(n.matrixWorld),Ii.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dh),bs.child=e,this.dispatchEvent(bs),bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),x.length>0&&(i.nodes=x)}return i.object=n,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}vt.DEFAULT_UP=new K(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new K,Un=new K,Ms=new K,Ln=new K,Ni=new K,Oi=new K,Zl=new K,Ss=new K,Ts=new K,Es=new K,As=new nt,ws=new nt,Cs=new nt;class xn{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),dn.subVectors(e,t),n.cross(dn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){dn.subVectors(n,t),Un.subVectors(i,t),Ms.subVectors(e,t);const s=dn.dot(dn),o=dn.dot(Un),l=dn.dot(Ms),c=Un.dot(Un),u=Un.dot(Ms),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,x=(s*u-o*l)*h;return r.set(1-d-x,x,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,n,r,s,o,l){return this.getBarycoord(e,t,i,n,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(s,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,i,n,r,s){return As.setScalar(0),ws.setScalar(0),Cs.setScalar(0),As.fromBufferAttribute(e,t),ws.fromBufferAttribute(e,i),Cs.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(As,r.x),s.addScaledVector(ws,r.y),s.addScaledVector(Cs,r.z),s}static isFrontFacing(e,t,i,n){return dn.subVectors(i,t),Un.subVectors(e,t),dn.cross(Un).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let s,o;Ni.subVectors(n,i),Oi.subVectors(r,i),Ss.subVectors(e,i);const l=Ni.dot(Ss),c=Oi.dot(Ss);if(l<=0&&c<=0)return t.copy(i);Ts.subVectors(e,n);const u=Ni.dot(Ts),f=Oi.dot(Ts);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(Ni,s);Es.subVectors(e,r);const d=Ni.dot(Es),x=Oi.dot(Es);if(x>=0&&d<=x)return t.copy(r);const g=d*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Oi,o);const m=u*x-d*f;if(m<=0&&f-u>=0&&d-x>=0)return Zl.subVectors(r,n),o=(f-u)/(f-u+(d-x)),t.copy(n).addScaledVector(Zl,o);const p=1/(m+g+h);return s=g*p,o=h*p,t.copy(i).addScaledVector(Ni,s).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Rs(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Qe.workingColorSpace){if(e=tl(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Rs(s,r,e+1/3),this.g=Rs(s,r,e),this.b=Rs(s,r,e-1/3)}return Qe.colorSpaceToWorking(this,n),this}setStyle(e,t=mt){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const i=vu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Qe.workingToColorSpace(Nt.copy(this),e),Math.round(tt(Nt.r*255,0,255))*65536+Math.round(tt(Nt.g*255,0,255))*256+Math.round(tt(Nt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,n=Nt.g,r=Nt.b,s=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=mt){Qe.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,n=Nt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(fa);const i=Pr(Yn.h,fa.h,t),n=Pr(Yn.s,fa.s,t),r=Pr(Yn.l,fa.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new je;je.NAMES=vu;let Uh=0;class ti extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Js,this.blendDst=Qs,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Js&&(i.blendSrc=this.blendSrc),this.blendDst!==Qs&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rl extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new K,ha=new $e;let Lh=0;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fl&&(e.usage=this.usage),e}}class al extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _u extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ih=0;const an=new He,Ps=new vt,Bi=new K,Qt=new ei,br=new ei,Pt=new K;class en extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?_u:al)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Ps.lookAt(e),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Qt.min,br.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,br.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(br.min),Qt.expandByPoint(br.max))}Qt.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)Pt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Pt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(e,c),Pt.add(Bi)),n=Math.max(n,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new K,l[P]=new K;const c=new K,u=new K,f=new K,h=new $e,d=new $e,x=new $e,g=new K,m=new K;function p(P,S,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,y),h.fromBufferAttribute(r,P),d.fromBufferAttribute(r,S),x.fromBufferAttribute(r,y),u.sub(c),f.sub(c),d.sub(h),x.sub(h);const D=1/(d.x*x.y-x.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(D),o[P].add(g),o[S].add(g),o[y].add(g),l[P].add(m),l[S].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,S=b.length;P<S;++P){const y=b[P],D=y.start,R=y.count;for(let L=D,N=D+R;L<N;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new K,M=new K,A=new K,T=new K;function w(P){A.fromBufferAttribute(n,P),T.copy(A);const S=o[P];v.copy(S),v.sub(A.multiplyScalar(A.dot(S))).normalize(),M.crossVectors(T,S);const D=M.dot(l[P])<0?-1:1;s.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,S=b.length;P<S;++P){const y=b[P],D=y.start,R=y.count;for(let L=D,N=D+R;L<N;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const n=new K,r=new K,s=new K,o=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,d=e.count;h<d;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,r),f.subVectors(n,r),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),f.subVectors(n,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)h[x++]=c[d++]}return new vn(h,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new He,oi=new il,da=new bi,Ql=new K,pa=new K,ma=new K,xa=new K,Ds=new K,ga=new K,$l=new K,va=new K;class tn extends vt{constructor(e=new en,t=new rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Ds.fromBufferAttribute(f,e),s?ga.addScaledVector(Ds,u):ga.addScaledVector(Ds.sub(t),u))}t.add(ga)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(da.containsPoint(oi.origin)===!1&&(oi.intersectSphere(da,Ql)===null||oi.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(r).invert(),oi.copy(e.ray).applyMatrix4(Jl),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,g=h.length;x<g;x++){const m=h[x],p=s[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,A=v;M<A;M+=3){const T=o.getX(M),w=o.getX(M+1),P=o.getX(M+2);n=_a(this,p,e,i,c,u,f,T,w,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const x=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){const b=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);n=_a(this,s,e,i,c,u,f,b,v,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,g=h.length;x<g;x++){const m=h[x],p=s[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,A=v;M<A;M+=3){const T=M,w=M+1,P=M+2;n=_a(this,p,e,i,c,u,f,T,w,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const x=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){const b=m,v=m+1,M=m+2;n=_a(this,s,e,i,c,u,f,b,v,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Fh(a,e,t,i,n,r,s,o){let l;if(e.side===Kt?l=i.intersectTriangle(s,r,n,!0,o):l=i.intersectTriangle(n,r,s,e.side===Qn,o),l===null)return null;va.copy(o),va.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:a}}function _a(a,e,t,i,n,r,s,o,l,c){a.getVertexPosition(o,pa),a.getVertexPosition(l,ma),a.getVertexPosition(c,xa);const u=Fh(a,e,t,i,pa,ma,xa,$l);if(u){const f=new K;xn.getBarycoord($l,pa,ma,xa,f),n&&(u.uv=xn.getInterpolatedAttribute(n,o,l,c,f,new $e)),r&&(u.uv1=xn.getInterpolatedAttribute(r,o,l,c,f,new $e)),s&&(u.normal=xn.getInterpolatedAttribute(s,o,l,c,f,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new K,materialIndex:0};xn.getNormal(pa,ma,xa,h.normal),u.face=h,u.barycoord=f}return u}class jr extends en{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};const o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;x("z","y","x",-1,-1,i,t,e,s,r,0),x("z","y","x",1,-1,i,t,-e,s,r,1),x("x","z","y",1,1,e,i,t,n,s,2),x("x","z","y",1,-1,e,i,-t,n,s,3),x("x","y","z",1,-1,e,t,i,n,r,4),x("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function x(g,m,p,b,v,M,A,T,w,P,S){const y=M/w,D=A/P,R=M/2,L=A/2,N=T/2,G=w+1,z=P+1;let ne=0,Y=0;const H=new K;for(let W=0;W<z;W++){const I=W*D-L;for(let X=0;X<G;X++){const ee=X*y-R;H[g]=ee*b,H[m]=I*v,H[p]=N,c.push(H.x,H.y,H.z),H[g]=0,H[m]=0,H[p]=T>0?1:-1,u.push(H.x,H.y,H.z),f.push(X/w),f.push(1-W/P),ne+=1}}for(let W=0;W<P;W++)for(let I=0;I<w;I++){const X=h+I+G*W,ee=h+I+G*(W+1),ie=h+(I+1)+G*(W+1),$=h+(I+1)+G*W;l.push(X,ee,$),l.push(ee,ie,$),Y+=6}o.addGroup(d,Y,S),d+=Y,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function kt(a){const e={};for(let t=0;t<a.length;t++){const i=tr(a[t]);for(const n in i)e[n]=i[n]}return e}function Nh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function yu(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const bu={clone:tr,merge:kt};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new K,ec=new $e,tc=new $e;class Gt extends Mu{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,zi=1;class kh extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Gt(ki,zi,e,t);n.layers=this.layers,this.add(n);const r=new Gt(ki,zi,e,t);r.layers=this.layers,this.add(r);const s=new Gt(ki,zi,e,t);s.layers=this.layers,this.add(s);const o=new Gt(ki,zi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(ki,zi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(ki,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Su extends Dt{constructor(e=[],t=Ji,i,n,r,s,o,l,c,u){super(e,t,i,n,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Su(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new jr(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:On});r.uniforms.tEquirect.value=t;const s=new tn(n,r),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=jt),new kh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}class Yi extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vh={type:"move"};class Us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&h>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vh)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Gh extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wt,this.environmentIntensity=1,this.environmentRotation=new wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nc=new K,ic=new nt,rc=new nt,Hh=new K,ac=new He,ya=new K,Ls=new bi,sc=new He,Is=new il;class Wh extends tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pl,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ya),this.boundingBox.expandByPoint(ya)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ya),this.boundingSphere.expandByPoint(ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),e.ray.intersectsSphere(Ls)!==!1&&(sc.copy(n).invert(),Is.copy(e.ray).applyMatrix4(sc),!(this.boundingBox!==null&&Is.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;ic.fromBufferAttribute(n.attributes.skinIndex,e),rc.fromBufferAttribute(n.attributes.skinWeight,e),nc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=rc.getComponent(r);if(s!==0){const o=ic.getComponent(r);ac.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Hh.copy(nc).applyMatrix4(ac),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bo extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tu extends Dt{constructor(e=null,t=1,i=1,n,r,s,o,l,c=$t,u=$t,f,h){super(null,s,o,l,c,u,n,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oc=new He,Xh=new He;class sl{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:Xh;oc.multiplyMatrices(o,t[r]),oc.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new sl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Tu(t,e,e,on,An);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let s=t[r];s===void 0&&(qe("Skeleton: No bone found with UUID:",r),s=new Bo),this.bones.push(s),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const s=t[n];e.bones.push(s.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Yh extends vn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new K,qh=new K,jh=new Ke;class hi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Fs.subVectors(i,t).cross(qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jh.getNormalMatrix(e),n=this.coplanarPoint(Fs).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new bi,Kh=new $e(.5,.5),ba=new K;class ol{constructor(e=new hi,t=new hi,i=new hi,n=new hi,r=new hi,s=new hi){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){const n=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],x=r[8],g=r[9],m=r[10],p=r[11],b=r[12],v=r[13],M=r[14],A=r[15];if(n[0].setComponents(c-s,d-u,p-x,A-b).normalize(),n[1].setComponents(c+s,d+u,p+x,A+b).normalize(),n[2].setComponents(c+o,d+f,p+g,A+v).normalize(),n[3].setComponents(c-o,d-f,p-g,A-v).normalize(),i)n[4].setComponents(l,h,m,M).normalize(),n[5].setComponents(c-l,d-h,p-m,A-M).normalize();else if(n[4].setComponents(c-l,d-h,p-m,A-M).normalize(),t===wn)n[5].setComponents(c+l,d+h,p+m,A+M).normalize();else if(t===Ha)n[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=Kh.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(ba.x=n.normal.x>0?e.max.x:e.min.x,ba.y=n.normal.y>0?e.max.y:e.min.y,ba.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eu extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new K,Xa=new K,lc=new He,Mr=new il,Ma=new bi,Ns=new K,cc=new K;class Zh extends vt{constructor(e=new en,t=new Eu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Wa.fromBufferAttribute(t,n-1),Xa.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Wa.distanceTo(Xa);e.setAttribute("lineDistance",new qt(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(n),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;lc.copy(n).invert(),Mr.copy(e.ray).applyMatrix4(lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let g=d,m=x-1;g<m;g+=c){const p=u.getX(g),b=u.getX(g+1),v=Sa(this,e,Mr,l,p,b,g);v&&t.push(v)}if(this.isLineLoop){const g=u.getX(x-1),m=u.getX(d),p=Sa(this,e,Mr,l,g,m,x-1);p&&t.push(p)}}else{const d=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let g=d,m=x-1;g<m;g+=c){const p=Sa(this,e,Mr,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Sa(this,e,Mr,l,x-1,d,x-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sa(a,e,t,i,n,r,s){const o=a.geometry.attributes.position;if(Wa.fromBufferAttribute(o,n),Xa.fromBufferAttribute(o,r),t.distanceSqToSegment(Wa,Xa,Ns,cc)>i)return;Ns.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Ns);if(!(c<e.near||c>e.far))return{distance:c,point:cc.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}class Au extends Dt{constructor(e,t,i=gi,n,r,s,o=$t,l=$t,c,u=Br,f=1){if(u!==Br&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,n,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wu extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jh{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-s,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===s)return n/(r-1);const u=i[n],h=i[n+1]-u,d=(s-u)/h;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),o=this.getPoint(r),l=t||(s.isVector2?new $e:new K);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new K,n=[],r=[],s=[],o=new K,l=new He;for(let d=0;d<=e;d++){const x=d/e;n[d]=this.getTangentAt(x,new K)}r[0]=new K,s[0]=new K;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),f=Math.abs(n[0].y),h=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),s[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(tt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}s[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(n[x],d*x)),s[x].crossVectors(n[x],r[x])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Qh(a,e,t=2){const i=e&&e.length,n=i?e[0]*t:a.length;let r=Cu(a,0,n,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,l,c;if(i&&(r=id(a,e,r,t)),a.length>80*t){o=a[0],l=a[1];let u=o,f=l;for(let h=t;h<n;h+=t){const d=a[h],x=a[h+1];d<o&&(o=d),x<l&&(l=x),d>u&&(u=d),x>f&&(f=x)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Gr(r,s,t,o,l,c,0),s}function Cu(a,e,t,i,n){let r;if(n===pd(a,e,t,i)>0)for(let s=e;s<t;s+=i)r=uc(s/i|0,a[s],a[s+1],r);else for(let s=t-i;s>=e;s-=i)r=uc(s/i|0,a[s],a[s+1],r);return r&&nr(r,r.next)&&(Wr(r),r=r.next),r}function _i(a,e){if(!a)return a;e||(e=a);let t=a,i;do if(i=!1,!t.steiner&&(nr(t,t.next)||_t(t.prev,t,t.next)===0)){if(Wr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Gr(a,e,t,i,n,r,s){if(!a)return;!s&&r&&ld(a,i,n,r);let o=a;for(;a.prev!==a.next;){const l=a.prev,c=a.next;if(r?ed(a,i,n,r):$h(a)){e.push(l.i,a.i,c.i),Wr(a),a=c.next,o=c.next;continue}if(a=c,a===o){s?s===1?(a=td(_i(a),e),Gr(a,e,t,i,n,r,2)):s===2&&nd(a,e,t,i,n,r):Gr(_i(a),e,t,i,n,r,1);break}}}function $h(a){const e=a.prev,t=a,i=a.next;if(_t(e,t,i)>=0)return!1;const n=e.x,r=t.x,s=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(n,r,s),f=Math.min(o,l,c),h=Math.max(n,r,s),d=Math.max(o,l,c);let x=i.next;for(;x!==e;){if(x.x>=u&&x.x<=h&&x.y>=f&&x.y<=d&&Ar(n,o,r,l,s,c,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function ed(a,e,t,i){const n=a.prev,r=a,s=a.next;if(_t(n,r,s)>=0)return!1;const o=n.x,l=r.x,c=s.x,u=n.y,f=r.y,h=s.y,d=Math.min(o,l,c),x=Math.min(u,f,h),g=Math.max(o,l,c),m=Math.max(u,f,h),p=ko(d,x,e,t,i),b=ko(g,m,e,t,i);let v=a.prevZ,M=a.nextZ;for(;v&&v.z>=p&&M&&M.z<=b;){if(v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==n&&v!==s&&Ar(o,u,l,f,c,h,v.x,v.y)&&_t(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=g&&M.y>=x&&M.y<=m&&M!==n&&M!==s&&Ar(o,u,l,f,c,h,M.x,M.y)&&_t(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==n&&v!==s&&Ar(o,u,l,f,c,h,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=g&&M.y>=x&&M.y<=m&&M!==n&&M!==s&&Ar(o,u,l,f,c,h,M.x,M.y)&&_t(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function td(a,e){let t=a;do{const i=t.prev,n=t.next.next;!nr(i,n)&&Pu(i,t,t.next,n)&&Hr(i,n)&&Hr(n,i)&&(e.push(i.i,t.i,n.i),Wr(t),Wr(t.next),t=a=n),t=t.next}while(t!==a);return _i(t)}function nd(a,e,t,i,n,r){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&fd(s,o)){let l=Du(s,o);s=_i(s,s.next),l=_i(l,l.next),Gr(s,e,t,i,n,r,0),Gr(l,e,t,i,n,r,0);return}o=o.next}s=s.next}while(s!==a)}function id(a,e,t,i){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r]*i,l=r<s-1?e[r+1]*i:a.length,c=Cu(a,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(ud(c))}n.sort(rd);for(let r=0;r<n.length;r++)t=ad(n[r],t);return t}function rd(a,e){let t=a.x-e.x;if(t===0&&(t=a.y-e.y,t===0)){const i=(a.next.y-a.y)/(a.next.x-a.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function ad(a,e){const t=sd(a,e);if(!t)return e;const i=Du(t,a);return _i(i,i.next),_i(t,t.next)}function sd(a,e){let t=e;const i=a.x,n=a.y;let r=-1/0,s;if(nr(a,t))return t;do{if(nr(a,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const f=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,s=t.x<t.next.x?t:t.next,f===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Ru(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){const f=Math.abs(n-t.y)/(i-t.x);Hr(t,a)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&od(s,t)))&&(s=t,u=f)}t=t.next}while(t!==o);return s}function od(a,e){return _t(a.prev,a,e.prev)<0&&_t(e.next,a,a.next)<0}function ld(a,e,t,i){let n=a;do n.z===0&&(n.z=ko(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==a);n.prevZ.nextZ=null,n.prevZ=null,cd(n)}function cd(a){let e,t=1;do{let i=a,n;a=null;let r=null;for(e=0;i;){e++;let s=i,o=0;for(let c=0;c<t&&(o++,s=s.nextZ,!!s);c++);let l=t;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||i.z<=s.z)?(n=i,i=i.nextZ,o--):(n=s,s=s.nextZ,l--),r?r.nextZ=n:a=n,n.prevZ=r,r=n;i=s}r.nextZ=null,t*=2}while(e>1);return a}function ko(a,e,t,i,n){return a=(a-t)*n|0,e=(e-i)*n|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function ud(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Ru(a,e,t,i,n,r,s,o){return(n-s)*(e-o)>=(a-s)*(r-o)&&(a-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(n-s)*(i-o)}function Ar(a,e,t,i,n,r,s,o){return!(a===s&&e===o)&&Ru(a,e,t,i,n,r,s,o)}function fd(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!hd(a,e)&&(Hr(a,e)&&Hr(e,a)&&dd(a,e)&&(_t(a.prev,a,e.prev)||_t(a,e.prev,e))||nr(a,e)&&_t(a.prev,a,a.next)>0&&_t(e.prev,e,e.next)>0)}function _t(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function nr(a,e){return a.x===e.x&&a.y===e.y}function Pu(a,e,t,i){const n=Ea(_t(a,e,t)),r=Ea(_t(a,e,i)),s=Ea(_t(t,i,a)),o=Ea(_t(t,i,e));return!!(n!==r&&s!==o||n===0&&Ta(a,t,e)||r===0&&Ta(a,i,e)||s===0&&Ta(t,a,i)||o===0&&Ta(t,e,i))}function Ta(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Ea(a){return a>0?1:a<0?-1:0}function hd(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Hr(a,e){return _t(a.prev,a,a.next)<0?_t(a,e,a.next)>=0&&_t(a,a.prev,e)>=0:_t(a,e,a.prev)<0||_t(a,a.next,e)<0}function dd(a,e){let t=a,i=!1;const n=(a.x+e.x)/2,r=(a.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==a);return i}function Du(a,e){const t=zo(a.i,a.x,a.y),i=zo(e.i,e.x,e.y),n=a.next,r=e.prev;return a.next=e,e.prev=a,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function uc(a,e,t,i){const n=zo(a,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Wr(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function zo(a,e,t){return{i:a,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pd(a,e,t,i){let n=0;for(let r=e,s=t-i;r<t;r+=i)n+=(a[s]-a[r])*(a[r+1]+a[s+1]),s=r;return n}class md{static triangulate(e,t,i=2){return Qh(e,t,i)}}class ll{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return ll.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];fc(e),hc(i,e);let s=e.length;t.forEach(fc);for(let l=0;l<t.length;l++)n.push(s),s+=t[l].length,hc(i,t[l]);const o=md.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function fc(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function hc(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Mi extends en{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,f=e/o,h=t/l,d=[],x=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*h-s;for(let v=0;v<c;v++){const M=v*f-r;x.push(M,-b,0),g.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const v=b+c*p,M=b+c*(p+1),A=b+1+c*(p+1),T=b+1+c*p;d.push(v,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new qt(x,3)),this.setAttribute("normal",new qt(g,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class xd extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Aa extends ti{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gd extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wt,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uu extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lu extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function wa(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function vd(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function _d(a){function e(n,r){return a[n]-a[r]}const t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function dc(a,e,t){const i=a.length,n=new a.constructor(i);for(let r=0,s=0;s!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[s++]=a[o+l]}return n}function Iu(a,e,t,i){let n=1,r=a[0];for(;r!==void 0&&r[i]===void 0;)r=a[n++];if(r===void 0)return;let s=r[i];if(s!==void 0)if(Array.isArray(s))do s=r[i],s!==void 0&&(e.push(r.time),t.push(...s)),r=a[n++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[i],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[n++];while(r!==void 0);else do s=r[i],s!==void 0&&(e.push(r.time),t.push(s)),r=a[n++];while(r!==void 0)}class Ka{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;n:{i:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}s=i,i=0;break n}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yd extends Ka{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,o=n[r],l=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Ul:r=e,o=2*t-i;break;case Ll:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ul:s=e,l=2*i-t;break;case Ll:s=1,l=i+n[1]-n[0];break;default:s=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,x=(i-t)/(n-t),g=x*x,m=g*x,p=-h*m+2*h*g-h*x,b=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*x+1,v=(-1-d)*m+(1.5+d)*g+.5*x,M=d*m-d*g;for(let A=0;A!==o;++A)r[A]=p*s[u+A]+b*s[c+A]+v*s[l+A]+M*s[f+A];return r}}class bd extends Ka{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),f=1-u;for(let h=0;h!==o;++h)r[h]=s[c+h]*f+s[l+h]*u;return r}}class Md extends Ka{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class _n{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Md(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Va:t=this.InterpolantFactoryMethodDiscrete;break;case Oo:t=this.InterpolantFactoryMethodLinear;break;case fs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return fs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){it("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){it("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(n!==void 0&&vd(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){it("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===fs,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{const f=o*i,h=f-i,d=f+i;for(let x=0;x!==i;++x){const g=t[f+x];if(g!==t[h+x]||g!==t[d+x]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const f=o*i,h=s*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Oo;class sr extends _n{constructor(e,t,i){super(e,t,i)}}sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Va;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fu extends _n{constructor(e,t,i,n){super(e,t,i,n)}}Fu.prototype.ValueTypeName="color";class Xr extends _n{constructor(e,t,i,n){super(e,t,i,n)}}Xr.prototype.ValueTypeName="number";class Sd extends Ka{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Yt.slerpFlat(r,0,s,c-o,s,c,l);return r}}class ir extends _n{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends _n{constructor(e,t,i){super(e,t,i)}}or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Va;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends _n{constructor(e,t,i,n){super(e,t,i,n)}}Yr.prototype.ValueTypeName="vector";class Td{constructor(e="",t=-1,i=[],n=Xf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(Ad(i[s]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(_n.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=_d(l);l=dc(l,1,u),c=dc(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Xr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=n[f];h||(n[f]=h=[]),h.push(c)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}static parseAnimation(e,t){if(qe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return it("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,x,g){if(d.length!==0){const m=[],p=[];Iu(d,m,p,x),m.length!==0&&g.push(new f(h,m,p))}},n=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let x;for(x=0;x<h.length;x++)if(h[x].morphTargets)for(let g=0;g<h[x].morphTargets.length;g++)d[h[x].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let b=0;b!==h[x].morphTargets.length;++b){const v=h[x];m.push(v.time),p.push(v.morphTarget===g?1:0)}n.push(new Xr(".morphTargetInfluence["+g+"]",m,p))}l=d.length*s}else{const d=".bones["+t[f].name+"]";i(Yr,d+".position",h,"pos",n),i(ir,d+".quaternion",h,"rot",n),i(Yr,d+".scale",h,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ed(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return Yr;case"color":return Fu;case"quaternion":return ir;case"bool":case"boolean":return sr;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Ad(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ed(a.type);if(a.times===void 0){const t=[],i=[];Iu(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Dr={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class wd{constructor(e,t,i){const n=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Cd=new wd;class yi{constructor(e){this.manager=e!==void 0?e:Cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class Rd extends Error{constructor(e,t){super(e),this.response=t}}class Pd extends yi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Dr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:i,onError:n});return}In[e]=[],In[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=In[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,x=d!==0;let g=0;const m=new ReadableStream({start(p){b();function b(){f.read().then(({done:v,value:M})=>{if(v)p.close();else{g+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:d});for(let T=0,w=u.length;T<w;T++){const P=u[T];P.onProgress&&P.onProgress(A)}p.enqueue(M),b()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Rd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(x=>d.decode(x))}}}).then(c=>{Dr.add(`file:${e}`,c);const u=In[e];delete In[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=In[e];if(u===void 0)throw this.manager.itemError(e),c;delete In[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vi=new WeakMap;class Dd extends yi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Dr.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let f=Vi.get(s);f===void 0&&(f=[],Vi.set(s,f)),f.push({onLoad:t,onError:n})}return s}const o=zr("img");function l(){u(),t&&t(this);const f=Vi.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Vi.delete(this),r.manager.itemEnd(e)}function c(f){u(),n&&n(f),Dr.remove(`image:${e}`);const h=Vi.get(this)||[];for(let d=0;d<h.length;d++){const x=h[d];x.onError&&x.onError(f)}Vi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Dr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Ud extends yi{constructor(e){super(e)}load(e,t,i,n){const r=new Dt,s=new Dd(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Za extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Os=new He,pc=new K,mc=new K;class cl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(pc),mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mc),t.updateMatrixWorld(),Os.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ld extends cl{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=er*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Id extends Za{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Ld}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xc=new He,Sr=new K,Bs=new K;class Fd extends cl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sr),Bs.copy(i.position),Bs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bs),i.updateMatrixWorld(),n.makeTranslation(-Sr.x,-Sr.y,-Sr.z),xc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc,i.coordinateSystem,i.reversedDepth)}}class gc extends Za{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Fd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nu extends Mu{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Nd extends cl{constructor(){super(new Nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ou extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Nd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Od extends Za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bd{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kd extends en{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class zd extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ul="\\[\\]\\.:\\/",Vd=new RegExp("["+ul+"]","g"),fl="[^"+ul+"]",Gd="[^"+ul.replace("\\.","")+"]",Hd=/((?:WC+[\/:])*)/.source.replace("WC",fl),Wd=/(WCOD+)?/.source.replace("WCOD",Gd),Xd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),Yd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),qd=new RegExp("^"+Hd+Wd+Xd+Yd+"$"),jd=["material","materials","bones","map"];class Kd{constructor(e,t,i){const n=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class st{constructor(e,t,i){this.path=t,this.parsedPath=i||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,i):new st(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vd,"")}static parseTrackName(e){const t=qd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);jd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[n];if(s===void 0){const c=t.nodeName;it("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Kd;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function vc(a,e,t,i){const n=Zd(i);switch(t){case uu:return a*e;case hu:return a*e/n.components*n.byteLength;case Jo:return a*e/n.components*n.byteLength;case Qo:return a*e*2/n.components*n.byteLength;case $o:return a*e*2/n.components*n.byteLength;case fu:return a*e*3/n.components*n.byteLength;case on:return a*e*4/n.components*n.byteLength;case el:return a*e*4/n.components*n.byteLength;case La:case Ia:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Na:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case co:case fo:return Math.max(a,16)*Math.max(e,8)/4;case lo:case uo:return Math.max(a,8)*Math.max(e,8)/2;case ho:case po:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case mo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Po:case Do:case Uo:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Lo:case Io:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Fo:case No:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zd(a){switch(a){case Cn:case su:return{byteLength:1,components:1};case Nr:case ou:case rr:return{byteLength:2,components:1};case Ko:case Zo:return{byteLength:2,components:4};case gi:case jo:case An:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);function Bu(){let a=null,e=!1,t=null,i=null;function n(r,s){t(r,s),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Jd(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(a.bindBuffer(c,o),f.length===0)a.bufferSubData(c,0,u);else{f.sort((d,x)=>d.start-x.start);let h=0;for(let d=1;d<f.length;d++){const x=f[h],g=f[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,x=f.length;d<x;d++){const g=f[d];a.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:s}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,Wp=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Zp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,am=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define MATCAP
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
}`,xm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,vm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,bm=`#define STANDARD
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define TOON
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
}`,Tm=`#define TOON
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
}`,Em=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Rm=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Qd,alphahash_pars_fragment:$d,alphamap_fragment:ep,alphamap_pars_fragment:tp,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:rp,aomap_pars_fragment:ap,batching_pars_vertex:sp,batching_vertex:op,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:up,iridescence_fragment:fp,bumpmap_pars_fragment:hp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:xp,color_fragment:gp,color_pars_fragment:vp,color_pars_vertex:_p,color_vertex:yp,common:bp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:Tp,displacementmap_vertex:Ep,emissivemap_fragment:Ap,emissivemap_pars_fragment:wp,colorspace_fragment:Cp,colorspace_pars_fragment:Rp,envmap_fragment:Pp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Up,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Wp,envmap_vertex:Ip,fog_vertex:Fp,fog_pars_vertex:Np,fog_fragment:Op,fog_pars_fragment:Bp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:zp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Hp,lights_toon_fragment:Xp,lights_toon_pars_fragment:Yp,lights_phong_fragment:qp,lights_phong_pars_fragment:jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:Qp,lights_fragment_end:$p,logdepthbuf_fragment:e0,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:r0,map_pars_fragment:a0,map_particle_fragment:s0,map_particle_pars_fragment:o0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:c0,morphinstance_vertex:u0,morphcolor_vertex:f0,morphnormal_vertex:h0,morphtarget_pars_vertex:d0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:x0,normal_pars_fragment:g0,normal_pars_vertex:v0,normal_vertex:_0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:T0,opaque_fragment:E0,packing:A0,premultiplied_alpha_fragment:w0,project_vertex:C0,dithering_fragment:R0,dithering_pars_fragment:P0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:I0,shadowmap_vertex:F0,shadowmask_pars_fragment:N0,skinbase_vertex:O0,skinning_pars_vertex:B0,skinning_vertex:k0,skinnormal_vertex:z0,specularmap_fragment:V0,specularmap_pars_fragment:G0,tonemapping_fragment:H0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:Y0,uv_pars_fragment:q0,uv_pars_vertex:j0,uv_vertex:K0,worldpos_vertex:Z0,background_vert:J0,background_frag:Q0,backgroundCube_vert:$0,backgroundCube_frag:em,cube_vert:tm,cube_frag:nm,depth_vert:im,depth_frag:rm,distanceRGBA_vert:am,distanceRGBA_frag:sm,equirect_vert:om,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:um,meshbasic_vert:fm,meshbasic_frag:hm,meshlambert_vert:dm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:xm,meshnormal_vert:gm,meshnormal_frag:vm,meshphong_vert:_m,meshphong_frag:ym,meshphysical_vert:bm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:Tm,points_vert:Em,points_frag:Am,shadow_vert:wm,shadow_frag:Cm,sprite_vert:Rm,sprite_frag:Pm},Ie={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Tn={basic:{uniforms:kt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:kt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:kt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:kt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:kt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:kt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:kt([Ie.points,Ie.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:kt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:kt([Ie.common,Ie.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:kt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:kt([Ie.sprite,Ie.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:kt([Ie.common,Ie.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:kt([Ie.lights,Ie.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Tn.physical={uniforms:kt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ca={r:0,b:0,g:0},ci=new wt,Dm=new He;function Um(a,e,t,i,n,r,s){const o=new je(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function x(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function g(v){let M=!1;const A=x(v);A===null?p(o,l):A&&A.isColor&&(p(A,1),M=!0);const T=a.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(a.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(v,M){const A=x(M);A&&(A.isCubeTexture||A.mapping===qa)?(u===void 0&&(u=new tn(new jr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:tr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),ci.copy(M.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(ci)),u.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ft,(f!==A||h!==A.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,d=a.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new tn(new Mi(2,2),new kn({name:"BackgroundMaterial",uniforms:tr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,d=a.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(Ca,yu(a)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,M,s)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:g,addToRenderList:m,dispose:b}}function Lm(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=h(null);let r=n,s=!1;function o(y,D,R,L,N){let G=!1;const z=f(L,R,D);r!==z&&(r=z,c(r.object)),G=d(y,L,R,N),G&&x(y,L,R,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,M(y,D,R,L),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return a.createVertexArray()}function c(y){return a.bindVertexArray(y)}function u(y){return a.deleteVertexArray(y)}function f(y,D,R){const L=R.wireframe===!0;let N=i[y.id];N===void 0&&(N={},i[y.id]=N);let G=N[D.id];G===void 0&&(G={},N[D.id]=G);let z=G[L];return z===void 0&&(z=h(l()),G[L]=z),z}function h(y){const D=[],R=[],L=[];for(let N=0;N<t;N++)D[N]=0,R[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:L,object:y,attributes:{},index:null}}function d(y,D,R,L){const N=r.attributes,G=D.attributes;let z=0;const ne=R.getAttributes();for(const Y in ne)if(ne[Y].location>=0){const W=N[Y];let I=G[Y];if(I===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(I=y.instanceColor)),W===void 0||W.attribute!==I||I&&W.data!==I.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function x(y,D,R,L){const N={},G=D.attributes;let z=0;const ne=R.getAttributes();for(const Y in ne)if(ne[Y].location>=0){let W=G[Y];W===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(W=y.instanceColor));const I={};I.attribute=W,W&&W.data&&(I.data=W.data),N[Y]=I,z++}r.attributes=N,r.attributesNum=z,r.index=L}function g(){const y=r.newAttributes;for(let D=0,R=y.length;D<R;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const R=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;R[y]=1,L[y]===0&&(a.enableVertexAttribArray(y),L[y]=1),N[y]!==D&&(a.vertexAttribDivisor(y,D),N[y]=D)}function b(){const y=r.newAttributes,D=r.enabledAttributes;for(let R=0,L=D.length;R<L;R++)D[R]!==y[R]&&(a.disableVertexAttribArray(R),D[R]=0)}function v(y,D,R,L,N,G,z){z===!0?a.vertexAttribIPointer(y,D,R,N,G):a.vertexAttribPointer(y,D,R,L,N,G)}function M(y,D,R,L){g();const N=L.attributes,G=R.getAttributes(),z=D.defaultAttributeValues;for(const ne in G){const Y=G[ne];if(Y.location>=0){let H=N[ne];if(H===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(H=y.instanceColor)),H!==void 0){const W=H.normalized,I=H.itemSize,X=e.get(H);if(X===void 0)continue;const ee=X.buffer,ie=X.type,$=X.bytesPerElement,k=ie===a.INT||ie===a.UNSIGNED_INT||H.gpuType===jo;if(H.isInterleavedBufferAttribute){const B=H.data,Q=B.stride,pe=H.offset;if(B.isInstancedInterleavedBuffer){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,B.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let me=0;me<Y.locationSize;me++)v(Y.location+me,I/Y.locationSize,ie,W,Q*$,(pe+I/Y.locationSize*me)*$,k)}else{if(H.isInstancedBufferAttribute){for(let B=0;B<Y.locationSize;B++)p(Y.location+B,H.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let B=0;B<Y.locationSize;B++)m(Y.location+B);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let B=0;B<Y.locationSize;B++)v(Y.location+B,I/Y.locationSize,ie,W,I*$,I/Y.locationSize*B*$,k)}}else if(z!==void 0){const W=z[ne];if(W!==void 0)switch(W.length){case 2:a.vertexAttrib2fv(Y.location,W);break;case 3:a.vertexAttrib3fv(Y.location,W);break;case 4:a.vertexAttrib4fv(Y.location,W);break;default:a.vertexAttrib1fv(Y.location,W)}}}}b()}function A(){P();for(const y in i){const D=i[y];for(const R in D){const L=D[R];for(const N in L)u(L[N].object),delete L[N];delete D[R]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const R in D){const L=D[R];for(const N in L)u(L[N].object),delete L[N];delete D[R]}delete i[y.id]}function w(y){for(const D in i){const R=i[D];if(R[y.id]===void 0)continue;const L=R[y.id];for(const N in L)u(L[N].object),delete L[N];delete R[y.id]}}function P(){S(),s=!0,r!==n&&(r=n,c(r.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function Im(a,e,t){let i;function n(c){i=c}function r(c,u){a.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,f){f!==0&&(a.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let x=0;x<f;x++)d+=u[x];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)s(c[x],u[x],h[x]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g]*h[g];t.update(x,i,1)}}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fm(a,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==on&&i.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Cn&&i.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==An&&!P)}function l(w){if(w==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),v=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,T=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function Nm(a){const e=this;let t=null,i=0,n=!1,r=!1;const s=new hi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||n;return n=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const x=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=a.get(f);if(!n||x===null||x.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,v=b*4;let M=p.clippingState||null;l.value=M,M=u(x,h,v,d);for(let A=0;A!==v;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,x){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const p=d+g*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==g;++v,M+=4)s.copy(f[v]).applyMatrix4(b,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Om(a){let e=new WeakMap;function t(s,o){return o===za?s.mapping=Ji:o===so&&(s.mapping=Qi),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===za||o===so)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new zh(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Zn=4,_c=[.125,.215,.35,.446,.526,.582],pi=20,Bm=256,Tr=new Nu,yc=new je;let ks=null,zs=0,Vs=0,Gs=!1;const km=new K;class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:o=km}=r;ks=this._renderer.getRenderTarget(),zs=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel(),Gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ks,zs,Vs),this._renderer.xr.enabled=Gs,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ks=this._renderer.getRenderTarget(),zs=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel(),Gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:rr,format:on,colorSpace:$i,depthBuffer:!1},n=Mc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zm(r)),this._blurMaterial=Gm(r,e,t)}return n}_compileMaterial(e){const t=new tn(new en,e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,i,n,r){const l=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(yc),f.toneMapping=Jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new jr,new rl({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(yc),p=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const A=this._cubeSize;Gi(n,M*A,v>2?A:0,A,A),f.setRenderTarget(n),p&&f.render(g,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Ji||e.mapping===Qi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Gi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const b=3*Math.max(this._cubeSize,16),v=4*this._cubeSize;this._ggxMaterial=Vm(this._lodMax,b,v)}const s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,d=f*h,{_lodMax:x}=this,g=this._sizeLods[i],m=3*g*(i>x-Zn?i-x+Zn:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,Gi(r,m,p,3*g,2*g),n.setRenderTarget(r),n.render(o,Tr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,Gi(e,m,p,3*g,2*g),n.setRenderTarget(e),n.render(o,Tr)}_blur(e,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[n];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*pi-1),g=r/x,m=isFinite(r)?1+Math.floor(u*g):pi;m>pi&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let b=0;for(let w=0;w<pi;++w){const P=w/g,S=Math.exp(-P*P/2);p.push(S),w===0?b+=S:w<m&&(b+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const M=this._sizeLods[n],A=3*M*(n>v-Zn?n-v+Zn:0),T=4*(this._cubeSize-M);Gi(t,A,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Tr)}}function zm(a){const e=[],t=[],i=[];let n=a;const r=a-Zn+1+_c.length;for(let s=0;s<r;s++){const o=Math.pow(2,n);e.push(o);let l=1/o;s>a-Zn?l=_c[s-a+Zn-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,x=6,g=3,m=2,p=1,b=new Float32Array(g*x*d),v=new Float32Array(m*x*d),M=new Float32Array(p*x*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,P=T>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];b.set(S,g*x*T),v.set(h,m*x*T);const y=[T,T,T,T,T,T];M.set(y,p*x*T)}const A=new en;A.setAttribute("position",new vn(b,g)),A.setAttribute("uv",new vn(v,m)),A.setAttribute("faceIndex",new vn(M,p)),i.push(new tn(A,null)),n>Zn&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Mc(a,e,t){const i=new vi(a,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gi(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function Vm(a,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Gm(a,e,t){const i=new Float32Array(pi),n=new K(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Sc(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Tc(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}function Hm(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===za||l===so,u=l===Ji||l===Qi;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new bc(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new bc(a)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Wm(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=a.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Vr("WebGLRenderer: "+i+" extension not supported."),n}}}function Xm(a,e,t,i){const n={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete n[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],a.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,x=f.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let v=0,M=b.length;v<M;v+=3){const A=b[v+0],T=b[v+1],w=b[v+2];h.push(A,T,T,w,w,A)}}else if(x!==void 0){const b=x.array;g=x.version;for(let v=0,M=b.length/3-1;v<M;v+=3){const A=v+0,T=v+1,w=v+2;h.push(A,T,T,w,w,A)}}else return;const m=new(mu(h)?_u:al)(h,1);m.version=g;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ym(a,e,t){let i;function n(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,d){a.drawElements(i,d,r,h*s),t.update(d,i,1)}function c(h,d,x){x!==0&&(a.drawElementsInstanced(i,d,r,h*s,x),t.update(d,i,x))}function u(h,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];t.update(m,i,1)}function f(h,d,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/s,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,g,0,x);let p=0;for(let b=0;b<x;b++)p+=d[b]*g[b];t.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function qm(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function jm(a,e,t){const i=new WeakMap,n=new nt;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*T*4*f),P=new xu(w,A,T,f);P.type=An,P.needsUpdate=!0;const S=M*4;for(let D=0;D<f;D++){const R=p[D],L=b[D],N=v[D],G=A*T*4*D;for(let z=0;z<R.count;z++){const ne=z*S;x===!0&&(n.fromBufferAttribute(R,z),w[G+ne+0]=n.x,w[G+ne+1]=n.y,w[G+ne+2]=n.z,w[G+ne+3]=0),g===!0&&(n.fromBufferAttribute(L,z),w[G+ne+4]=n.x,w[G+ne+5]=n.y,w[G+ne+6]=n.z,w[G+ne+7]=0),m===!0&&(n.fromBufferAttribute(N,z),w[G+ne+8]=n.x,w[G+ne+9]=n.y,w[G+ne+10]=n.z,w[G+ne+11]=N.itemSize===4?n.w:1)}}h={count:f,texture:P,size:new $e(A,T)},i.set(o,h),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:r}}function Km(a,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const ku=new Dt,Ec=new Au(1,1),zu=new xu,Vu=new Th,Gu=new Su,Ac=[],wc=[],Cc=new Float32Array(16),Rc=new Float32Array(9),Pc=new Float32Array(4);function lr(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let r=Ac[n];if(r===void 0&&(r=new Float32Array(n),Ac[n]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Ct(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Rt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Qa(a,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Zm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Jm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;a.uniform2fv(this.addr,e),Rt(t,e)}}function Qm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;a.uniform3fv(this.addr,e),Rt(t,e)}}function $m(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;a.uniform4fv(this.addr,e),Rt(t,e)}}function ex(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;Pc.set(i),a.uniformMatrix2fv(this.addr,!1,Pc),Rt(t,i)}}function tx(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;Rc.set(i),a.uniformMatrix3fv(this.addr,!1,Rc),Rt(t,i)}}function nx(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;Cc.set(i),a.uniformMatrix4fv(this.addr,!1,Cc),Rt(t,i)}}function ix(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function rx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;a.uniform2iv(this.addr,e),Rt(t,e)}}function ax(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;a.uniform3iv(this.addr,e),Rt(t,e)}}function sx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;a.uniform4iv(this.addr,e),Rt(t,e)}}function ox(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function lx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;a.uniform2uiv(this.addr,e),Rt(t,e)}}function cx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;a.uniform3uiv(this.addr,e),Rt(t,e)}}function ux(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;a.uniform4uiv(this.addr,e),Rt(t,e)}}function fx(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let r;this.type===a.SAMPLER_2D_SHADOW?(Ec.compareFunction=pu,r=Ec):r=ku,t.setTexture2D(e||r,n)}function hx(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Vu,n)}function dx(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Gu,n)}function px(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||zu,n)}function mx(a){switch(a){case 5126:return Zm;case 35664:return Jm;case 35665:return Qm;case 35666:return $m;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return sx;case 5125:return ox;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}function xx(a,e){a.uniform1fv(this.addr,e)}function gx(a,e){const t=lr(e,this.size,2);a.uniform2fv(this.addr,t)}function vx(a,e){const t=lr(e,this.size,3);a.uniform3fv(this.addr,t)}function _x(a,e){const t=lr(e,this.size,4);a.uniform4fv(this.addr,t)}function yx(a,e){const t=lr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function bx(a,e){const t=lr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Mx(a,e){const t=lr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Sx(a,e){a.uniform1iv(this.addr,e)}function Tx(a,e){a.uniform2iv(this.addr,e)}function Ex(a,e){a.uniform3iv(this.addr,e)}function Ax(a,e){a.uniform4iv(this.addr,e)}function wx(a,e){a.uniform1uiv(this.addr,e)}function Cx(a,e){a.uniform2uiv(this.addr,e)}function Rx(a,e){a.uniform3uiv(this.addr,e)}function Px(a,e){a.uniform4uiv(this.addr,e)}function Dx(a,e,t){const i=this.cache,n=e.length,r=Qa(t,n);Ct(i,r)||(a.uniform1iv(this.addr,r),Rt(i,r));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||ku,r[s])}function Ux(a,e,t){const i=this.cache,n=e.length,r=Qa(t,n);Ct(i,r)||(a.uniform1iv(this.addr,r),Rt(i,r));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Vu,r[s])}function Lx(a,e,t){const i=this.cache,n=e.length,r=Qa(t,n);Ct(i,r)||(a.uniform1iv(this.addr,r),Rt(i,r));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Gu,r[s])}function Ix(a,e,t){const i=this.cache,n=e.length,r=Qa(t,n);Ct(i,r)||(a.uniform1iv(this.addr,r),Rt(i,r));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||zu,r[s])}function Fx(a){switch(a){case 5126:return xx;case 35664:return gx;case 35665:return vx;case 35666:return _x;case 35674:return yx;case 35675:return bx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return wx;case 36294:return Cx;case 36295:return Rx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Ix}}class Nx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mx(t.type)}}class Ox{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}}class Bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Hs=/(\w+)(\])?(\[|\.)?/g;function Dc(a,e){a.seq.push(e),a.map[e.id]=e}function kx(a,e,t){const i=a.name,n=i.length;for(Hs.lastIndex=0;;){const r=Hs.exec(i),s=Hs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Dc(t,c===void 0?new Nx(o,a,e):new Ox(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new Bx(o),Dc(t,f)),t=f}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),s=e.getUniformLocation(t,r.name);kx(r,s,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function Uc(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const zx=37297;let Vx=0;function Gx(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=n;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Lc=new Ke;function Hx(a){Qe._getMatrix(Lc,Qe.workingColorSpace,a);const e=`mat3( ${Lc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(a)){case Ga:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ic(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Gx(a.getShaderSource(e),o)}else return r}function Wx(a,e){const t=Hx(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xx(a,e){let t;switch(e){case Nf:t="Linear";break;case Of:t="Reinhard";break;case Bf:t="Cineon";break;case kf:t="ACESFilmic";break;case Vf:t="AgX";break;case Gf:t="Neutral";break;case zf:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ra=new K;function Yx(){Qe.getLuminanceCoefficients(Ra);const a=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function jx(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kx(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=a.getActiveAttrib(e,n),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function wr(a){return a!==""}function Fc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(a){return a.replace(Zx,Qx)}const Jx=new Map;function Qx(a,e){let t=Je[e];if(t===void 0){const i=Jx.get(e);if(i!==void 0)t=Je[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(a){return a.replace($x,eg)}function eg(a,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Bc(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===mf?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function rg(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Ff:e="ENVMAP_BLENDING_ADD";break}return e}function ag(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sg(a,e,t,i){const n=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=tg(t),c=ng(t),u=ig(t),f=rg(t),h=ag(t),d=qx(t),x=jx(r),g=n.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Jn?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),Yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),s=Vo(s),s=Fc(s,t),s=Nc(s,t),o=Vo(o),o=Fc(o,t),o=Nc(o,t),s=Oc(s),o=Oc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=b+m+s,M=b+p+o,A=Uc(n,n.VERTEX_SHADER,v),T=Uc(n,n.FRAGMENT_SHADER,M);n.attachShader(g,A),n.attachShader(g,T),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function w(D){if(a.debug.checkShaderErrors){const R=n.getProgramInfoLog(g)||"",L=n.getShaderInfoLog(A)||"",N=n.getShaderInfoLog(T)||"",G=R.trim(),z=L.trim(),ne=N.trim();let Y=!0,H=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,g,A,T);else{const W=Ic(n,A,"vertex"),I=Ic(n,T,"fragment");it("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+W+`
`+I)}else G!==""?qe("WebGLProgram: Program Info Log:",G):(z===""||ne==="")&&(H=!1);H&&(D.diagnostics={runnable:Y,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:ne,prefix:p}})}n.deleteShader(A),n.deleteShader(T),P=new Oa(n,g),S=Kx(n,g)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(g,zx)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}let og=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cg(e),t.set(e,i)),i}}class cg{constructor(e){this.id=og++,this.code=e,this.usedTimes=0}}function ug(a,e,t,i,n,r,s){const o=new gu,l=new lg,c=new Set,u=[],f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,D,R,L){const N=R.fog,G=L.geometry,z=S.isMeshStandardMaterial?R.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),Y=ne&&ne.mapping===qa?ne.image.height:null,H=x[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&qe("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const W=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,I=W!==void 0?W.length:0;let X=0;G.morphAttributes.position!==void 0&&(X=1),G.morphAttributes.normal!==void 0&&(X=2),G.morphAttributes.color!==void 0&&(X=3);let ee,ie,$,k;if(H){const Xe=Tn[H];ee=Xe.vertexShader,ie=Xe.fragmentShader}else ee=S.vertexShader,ie=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),k=l.getFragmentShaderID(S);const B=a.getRenderTarget(),Q=a.state.buffers.depth.getReversed(),pe=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,fe=!!S.map,de=!!S.matcap,De=!!ne,Fe=!!S.aoMap,U=!!S.lightMap,Ae=!!S.bumpMap,Ue=!!S.normalMap,_e=!!S.displacementMap,he=!!S.emissiveMap,we=!!S.metalnessMap,J=!!S.roughnessMap,be=S.anisotropy>0,E=S.clearcoat>0,_=S.dispersion>0,O=S.iridescence>0,se=S.sheen>0,te=S.transmission>0,q=be&&!!S.anisotropyMap,ye=E&&!!S.clearcoatMap,ge=E&&!!S.clearcoatNormalMap,Ce=E&&!!S.clearcoatRoughnessMap,Ee=O&&!!S.iridescenceMap,oe=O&&!!S.iridescenceThicknessMap,le=se&&!!S.sheenColorMap,ve=se&&!!S.sheenRoughnessMap,Re=!!S.specularMap,Me=!!S.specularColorMap,ze=!!S.specularIntensityMap,F=te&&!!S.transmissionMap,ce=te&&!!S.thicknessMap,xe=!!S.gradientMap,Te=!!S.alphaMap,ue=S.alphaTest>0,re=!!S.alphaHash,Pe=!!S.extensions;let Ne=Jn;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ne=a.toneMapping);const Be={shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:ie,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:me,batchingColor:me&&L._colorsTexture!==null,instancing:pe,instancingColor:pe&&L.instanceColor!==null,instancingMorph:pe&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:B===null?a.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$i,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:de,envMap:De,envMapMode:De&&ne.mapping,envMapCubeUVHeight:Y,aoMap:Fe,lightMap:U,bumpMap:Ae,normalMap:Ue,displacementMap:h&&_e,emissiveMap:he,normalMapObjectSpace:Ue&&S.normalMapType===qf,normalMapTangentSpace:Ue&&S.normalMapType===ja,metalnessMap:we,roughnessMap:J,anisotropy:be,anisotropyMap:q,clearcoat:E,clearcoatMap:ye,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:O,iridescenceMap:Ee,iridescenceThicknessMap:oe,sheen:se,sheenColorMap:le,sheenRoughnessMap:ve,specularMap:Re,specularColorMap:Me,specularIntensityMap:ze,transmission:te,transmissionMap:F,thicknessMap:ce,gradientMap:xe,opaque:S.transparent===!1&&S.blending===ji&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:ue,alphaHash:re,combine:S.combine,mapUv:fe&&g(S.map.channel),aoMapUv:Fe&&g(S.aoMap.channel),lightMapUv:U&&g(S.lightMap.channel),bumpMapUv:Ae&&g(S.bumpMap.channel),normalMapUv:Ue&&g(S.normalMap.channel),displacementMapUv:_e&&g(S.displacementMap.channel),emissiveMapUv:he&&g(S.emissiveMap.channel),metalnessMapUv:we&&g(S.metalnessMap.channel),roughnessMapUv:J&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:ye&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(S.sheenRoughnessMap.channel),specularMapUv:Re&&g(S.specularMap.channel),specularColorMapUv:Me&&g(S.specularColorMap.channel),specularIntensityMapUv:ze&&g(S.specularIntensityMap.channel),transmissionMapUv:F&&g(S.transmissionMap.channel),thicknessMapUv:ce&&g(S.thicknessMap.channel),alphaMapUv:Te&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ue||be),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(fe||Te),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Q,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:X,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ne,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(y,S),v(y,S),y.push(a.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const y=x[S.type];let D;if(y){const R=Tn[y];D=bu.clone(R.uniforms)}else D=S.uniforms;return D}function A(S,y){let D;for(let R=0,L=u.length;R<L;R++){const N=u[R];if(N.cacheKey===y){D=N,++D.usedTimes;break}}return D===void 0&&(D=new sg(a,y,S,r),u.push(D)),D}function T(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:P}}function fg(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function i(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function hg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function kc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function zc(){const a=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function s(f,h,d,x,g,m){let p=a[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},a[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function o(f,h,d,x,g,m){const p=s(f,h,d,x,g,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(f,h,d,x,g,m){const p=s(f,h,d,x,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||hg),i.length>1&&i.sort(h||kc),n.length>1&&n.sort(h||kc)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function dg(){let a=new WeakMap;function e(i,n){const r=a.get(i);let s;return r===void 0?(s=new zc,a.set(i,[s])):n>=r.length?(s=new zc,r.push(s)):s=r[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function pg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new je};break;case"SpotLight":t={position:new K,direction:new K,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new K,halfWidth:new K,halfHeight:new K};break}return a[e.id]=t,t}}}function mg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let xg=0;function gg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function vg(a){const e=new pg,t=mg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const n=new K,r=new He,s=new He;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,x=0,g=0,m=0,p=0,b=0,v=0,M=0,A=0,T=0,w=0;c.sort(gg);for(let S=0,y=c.length;S<y;S++){const D=c[S],R=D.color,L=D.intensity,N=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=R.r*L,f+=R.g*L,h+=R.b*L;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],L);w++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,Y=t.get(D);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=D.shadow.matrix,b++}i.directional[d]=z,d++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(R).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[g]=z;const ne=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,ne.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[g]=ne.matrix,D.castShadow){const Y=t.get(D);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,i.spotShadow[g]=Y,i.spotShadowMap[g]=G,M++}g++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(R).multiplyScalar(L),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const ne=D.shadow,Y=t.get(D);Y.shadowIntensity=ne.intensity,Y.shadowBias=ne.bias,Y.shadowNormalBias=ne.normalBias,Y.shadowRadius=ne.radius,Y.shadowMapSize=ne.mapSize,Y.shadowCameraNear=ne.camera.near,Y.shadowCameraFar=ne.camera.far,i.pointShadow[x]=Y,i.pointShadowMap[x]=G,i.pointShadowMatrix[x]=D.shadow.matrix,v++}i.point[x]=z,x++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(L),z.groundColor.copy(D.groundColor).multiplyScalar(L),i.hemi[p]=z,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==v||P.numSpotShadows!==M||P.numSpotMaps!==A||P.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,P.directionalLength=d,P.pointLength=x,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=A,P.numLightProbes=w,i.version=xg++)}function l(c,u){let f=0,h=0,d=0,x=0,g=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const v=c[p];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(v.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),s.identity(),r.copy(v.matrixWorld),r.premultiply(m),s.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Vc(a){const e=new vg(a),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function _g(a){let e=new WeakMap;function t(n,r=0){const s=e.get(n);let o;return s===void 0?(o=new Vc(a),e.set(n,[o])):r>=s.length?(o=new Vc(a),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`;function Mg(a,e,t){let i=new ol;const n=new $e,r=new $e,s=new nt,o=new Uu({depthPacking:du}),l=new Lu,c={},u=t.maxTextureSize,f={[Qn]:Kt,[Kt]:Qn,[En]:En},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:yg,fragmentShader:bg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const x=new en;x.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let p=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=a.getRenderTarget(),y=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),R=a.state;R.setBlending(On),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=p!==Nn&&this.type===Nn,N=p===Nn&&this.type!==Nn;for(let G=0,z=T.length;G<z;G++){const ne=T[G],Y=ne.shadow;if(Y===void 0){qe("WebGLShadowMap:",ne,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const H=Y.getFrameExtents();if(n.multiply(H),r.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/H.x),n.x=r.x*H.x,Y.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/H.y),n.y=r.y*H.y,Y.mapSize.y=r.y)),Y.map===null||L===!0||N===!0){const I=this.type!==Nn?{minFilter:$t,magFilter:$t}:{};Y.map!==null&&Y.map.dispose(),Y.map=new vi(n.x,n.y,I),Y.map.texture.name=ne.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const W=Y.getViewportCount();for(let I=0;I<W;I++){const X=Y.getViewport(I);s.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),R.viewport(s),Y.updateMatrices(ne,I),i=Y.getFrustum(),M(w,P,Y.camera,ne,this.type)}Y.isPointLightShadow!==!0&&this.type===Nn&&b(Y,P),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(S,y,D)};function b(T,w){const P=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vi(n.x,n.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(w,null,P,h,g,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(w,null,P,d,g,null)}function v(T,w,P,S){let y=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=P.isPointLight===!0?l:o,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const R=y.uuid,L=w.uuid;let N=c[R];N===void 0&&(N={},c[R]=N);let G=N[L];G===void 0&&(G=y.clone(),N[L]=G,w.addEventListener("dispose",A)),y=G}if(y.visible=w.visible,y.wireframe=w.wireframe,S===Nn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=a.properties.get(y);R.light=P}return y}function M(T,w,P,S,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Nn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const L=e.update(T),N=T.material;if(Array.isArray(N)){const G=L.groups;for(let z=0,ne=G.length;z<ne;z++){const Y=G[z],H=N[Y.materialIndex];if(H&&H.visible){const W=v(T,H,S,y);T.onBeforeShadow(a,T,w,P,L,W,Y),a.renderBufferDirect(P,null,L,W,T,Y),T.onAfterShadow(a,T,w,P,L,W,Y)}}}else if(N.visible){const G=v(T,N,S,y);T.onBeforeShadow(a,T,w,P,L,G,null),a.renderBufferDirect(P,null,L,G,T,null),T.onAfterShadow(a,T,w,P,L,G,null)}}const R=T.children;for(let L=0,N=R.length;L<N;L++)M(R[L],w,P,S,y)}function A(T){T.target.removeEventListener("dispose",A);for(const P in c){const S=c[P],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Sg={[$s]:eo,[to]:ro,[no]:ao,[Zi]:io,[eo]:$s,[ro]:to,[ao]:no,[io]:Zi};function Tg(a,e){function t(){let F=!1;const ce=new nt;let xe=null;const Te=new nt(0,0,0,0);return{setMask:function(ue){xe!==ue&&!F&&(a.colorMask(ue,ue,ue,ue),xe=ue)},setLocked:function(ue){F=ue},setClear:function(ue,re,Pe,Ne,Be){Be===!0&&(ue*=Ne,re*=Ne,Pe*=Ne),ce.set(ue,re,Pe,Ne),Te.equals(ce)===!1&&(a.clearColor(ue,re,Pe,Ne),Te.copy(ce))},reset:function(){F=!1,xe=null,Te.set(-1,0,0,0)}}}function i(){let F=!1,ce=!1,xe=null,Te=null,ue=null;return{setReversed:function(re){if(ce!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=re;const Ne=ue;ue=null,this.setClear(Ne)}},getReversed:function(){return ce},setTest:function(re){re?B(a.DEPTH_TEST):Q(a.DEPTH_TEST)},setMask:function(re){xe!==re&&!F&&(a.depthMask(re),xe=re)},setFunc:function(re){if(ce&&(re=Sg[re]),Te!==re){switch(re){case $s:a.depthFunc(a.NEVER);break;case eo:a.depthFunc(a.ALWAYS);break;case to:a.depthFunc(a.LESS);break;case Zi:a.depthFunc(a.LEQUAL);break;case no:a.depthFunc(a.EQUAL);break;case io:a.depthFunc(a.GEQUAL);break;case ro:a.depthFunc(a.GREATER);break;case ao:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Te=re}},setLocked:function(re){F=re},setClear:function(re){ue!==re&&(ce&&(re=1-re),a.clearDepth(re),ue=re)},reset:function(){F=!1,xe=null,Te=null,ue=null,ce=!1}}}function n(){let F=!1,ce=null,xe=null,Te=null,ue=null,re=null,Pe=null,Ne=null,Be=null;return{setTest:function(Xe){F||(Xe?B(a.STENCIL_TEST):Q(a.STENCIL_TEST))},setMask:function(Xe){ce!==Xe&&!F&&(a.stencilMask(Xe),ce=Xe)},setFunc:function(Xe,ht,ct){(xe!==Xe||Te!==ht||ue!==ct)&&(a.stencilFunc(Xe,ht,ct),xe=Xe,Te=ht,ue=ct)},setOp:function(Xe,ht,ct){(re!==Xe||Pe!==ht||Ne!==ct)&&(a.stencilOp(Xe,ht,ct),re=Xe,Pe=ht,Ne=ct)},setLocked:function(Xe){F=Xe},setClear:function(Xe){Be!==Xe&&(a.clearStencil(Xe),Be=Xe)},reset:function(){F=!1,ce=null,xe=null,Te=null,ue=null,re=null,Pe=null,Ne=null,Be=null}}}const r=new t,s=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],x=null,g=!1,m=null,p=null,b=null,v=null,M=null,A=null,T=null,w=new je(0,0,0),P=0,S=!1,y=null,D=null,R=null,L=null,N=null;const G=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=ne>=2);let H=null,W={};const I=a.getParameter(a.SCISSOR_BOX),X=a.getParameter(a.VIEWPORT),ee=new nt().fromArray(I),ie=new nt().fromArray(X);function $(F,ce,xe,Te){const ue=new Uint8Array(4),re=a.createTexture();a.bindTexture(F,re),a.texParameteri(F,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(F,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<xe;Pe++)F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY?a.texImage3D(ce,0,a.RGBA,1,1,Te,0,a.RGBA,a.UNSIGNED_BYTE,ue):a.texImage2D(ce+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ue);return re}const k={};k[a.TEXTURE_2D]=$(a.TEXTURE_2D,a.TEXTURE_2D,1),k[a.TEXTURE_CUBE_MAP]=$(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[a.TEXTURE_2D_ARRAY]=$(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),k[a.TEXTURE_3D]=$(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),B(a.DEPTH_TEST),s.setFunc(Zi),Ae(!1),Ue(Al),B(a.CULL_FACE),Fe(On);function B(F){u[F]!==!0&&(a.enable(F),u[F]=!0)}function Q(F){u[F]!==!1&&(a.disable(F),u[F]=!1)}function pe(F,ce){return f[F]!==ce?(a.bindFramebuffer(F,ce),f[F]=ce,F===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=ce),F===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=ce),!0):!1}function me(F,ce){let xe=d,Te=!1;if(F){xe=h.get(ce),xe===void 0&&(xe=[],h.set(ce,xe));const ue=F.textures;if(xe.length!==ue.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let re=0,Pe=ue.length;re<Pe;re++)xe[re]=a.COLOR_ATTACHMENT0+re;xe.length=ue.length,Te=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Te=!0);Te&&a.drawBuffers(xe)}function fe(F){return x!==F?(a.useProgram(F),x=F,!0):!1}const de={[di]:a.FUNC_ADD,[gf]:a.FUNC_SUBTRACT,[vf]:a.FUNC_REVERSE_SUBTRACT};de[_f]=a.MIN,de[yf]=a.MAX;const De={[bf]:a.ZERO,[Mf]:a.ONE,[Sf]:a.SRC_COLOR,[Js]:a.SRC_ALPHA,[Rf]:a.SRC_ALPHA_SATURATE,[wf]:a.DST_COLOR,[Ef]:a.DST_ALPHA,[Tf]:a.ONE_MINUS_SRC_COLOR,[Qs]:a.ONE_MINUS_SRC_ALPHA,[Cf]:a.ONE_MINUS_DST_COLOR,[Af]:a.ONE_MINUS_DST_ALPHA,[Pf]:a.CONSTANT_COLOR,[Df]:a.ONE_MINUS_CONSTANT_COLOR,[Uf]:a.CONSTANT_ALPHA,[Lf]:a.ONE_MINUS_CONSTANT_ALPHA};function Fe(F,ce,xe,Te,ue,re,Pe,Ne,Be,Xe){if(F===On){g===!0&&(Q(a.BLEND),g=!1);return}if(g===!1&&(B(a.BLEND),g=!0),F!==xf){if(F!==m||Xe!==S){if((p!==di||M!==di)&&(a.blendEquation(a.FUNC_ADD),p=di,M=di),Xe)switch(F){case ji:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case wl:a.blendFunc(a.ONE,a.ONE);break;case Cl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Rl:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case ji:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case wl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Cl:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}b=null,v=null,A=null,T=null,w.set(0,0,0),P=0,m=F,S=Xe}return}ue=ue||ce,re=re||xe,Pe=Pe||Te,(ce!==p||ue!==M)&&(a.blendEquationSeparate(de[ce],de[ue]),p=ce,M=ue),(xe!==b||Te!==v||re!==A||Pe!==T)&&(a.blendFuncSeparate(De[xe],De[Te],De[re],De[Pe]),b=xe,v=Te,A=re,T=Pe),(Ne.equals(w)===!1||Be!==P)&&(a.blendColor(Ne.r,Ne.g,Ne.b,Be),w.copy(Ne),P=Be),m=F,S=!1}function U(F,ce){F.side===En?Q(a.CULL_FACE):B(a.CULL_FACE);let xe=F.side===Kt;ce&&(xe=!xe),Ae(xe),F.blending===ji&&F.transparent===!1?Fe(On):Fe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const Te=F.stencilWrite;o.setTest(Te),Te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),he(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?B(a.SAMPLE_ALPHA_TO_COVERAGE):Q(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){y!==F&&(F?a.frontFace(a.CW):a.frontFace(a.CCW),y=F)}function Ue(F){F!==df?(B(a.CULL_FACE),F!==D&&(F===Al?a.cullFace(a.BACK):F===pf?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Q(a.CULL_FACE),D=F}function _e(F){F!==R&&(z&&a.lineWidth(F),R=F)}function he(F,ce,xe){F?(B(a.POLYGON_OFFSET_FILL),(L!==ce||N!==xe)&&(a.polygonOffset(ce,xe),L=ce,N=xe)):Q(a.POLYGON_OFFSET_FILL)}function we(F){F?B(a.SCISSOR_TEST):Q(a.SCISSOR_TEST)}function J(F){F===void 0&&(F=a.TEXTURE0+G-1),H!==F&&(a.activeTexture(F),H=F)}function be(F,ce,xe){xe===void 0&&(H===null?xe=a.TEXTURE0+G-1:xe=H);let Te=W[xe];Te===void 0&&(Te={type:void 0,texture:void 0},W[xe]=Te),(Te.type!==F||Te.texture!==ce)&&(H!==xe&&(a.activeTexture(xe),H=xe),a.bindTexture(F,ce||k[F]),Te.type=F,Te.texture=ce)}function E(){const F=W[H];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _(){try{a.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function O(){try{a.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function se(){try{a.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function te(){try{a.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ye(){try{a.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ge(){try{a.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Ce(){try{a.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Ee(){try{a.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function oe(){try{a.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function le(F){ee.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),ee.copy(F))}function ve(F){ie.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function Re(F,ce){let xe=c.get(ce);xe===void 0&&(xe=new WeakMap,c.set(ce,xe));let Te=xe.get(F);Te===void 0&&(Te=a.getUniformBlockIndex(ce,F.name),xe.set(F,Te))}function Me(F,ce){const Te=c.get(ce).get(F);l.get(ce)!==Te&&(a.uniformBlockBinding(ce,Te,F.__bindingPointIndex),l.set(ce,Te))}function ze(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},H=null,W={},f={},h=new WeakMap,d=[],x=null,g=!1,m=null,p=null,b=null,v=null,M=null,A=null,T=null,w=new je(0,0,0),P=0,S=!1,y=null,D=null,R=null,L=null,N=null,ee.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:B,disable:Q,bindFramebuffer:pe,drawBuffers:me,useProgram:fe,setBlending:Fe,setMaterial:U,setFlipSided:Ae,setCullFace:Ue,setLineWidth:_e,setPolygonOffset:he,setScissorTest:we,activeTexture:J,bindTexture:be,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Ee,texImage3D:oe,updateUBOMapping:Re,uniformBlockBinding:Me,texStorage2D:ge,texStorage3D:Ce,texSubImage2D:se,texSubImage3D:te,compressedTexSubImage2D:q,compressedTexSubImage3D:ye,scissor:le,viewport:ve,reset:ze}}function Eg(a,e,t,i,n,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return d?new OffscreenCanvas(E,_):zr("canvas")}function g(E,_,O){let se=1;const te=be(E);if((te.width>O||te.height>O)&&(se=O/Math.max(te.width,te.height)),se<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(se*te.width),ye=Math.floor(se*te.height);f===void 0&&(f=x(q,ye));const ge=_?x(q,ye):f;return ge.width=q,ge.height=ye,ge.getContext("2d").drawImage(E,0,0,q,ye),qe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+ye+")."),ge}else return"data"in E&&qe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){a.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?a.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(E,_,O,se,te=!1){if(E!==null){if(a[E]!==void 0)return a[E];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===a.RED&&(O===a.FLOAT&&(q=a.R32F),O===a.HALF_FLOAT&&(q=a.R16F),O===a.UNSIGNED_BYTE&&(q=a.R8)),_===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.R8UI),O===a.UNSIGNED_SHORT&&(q=a.R16UI),O===a.UNSIGNED_INT&&(q=a.R32UI),O===a.BYTE&&(q=a.R8I),O===a.SHORT&&(q=a.R16I),O===a.INT&&(q=a.R32I)),_===a.RG&&(O===a.FLOAT&&(q=a.RG32F),O===a.HALF_FLOAT&&(q=a.RG16F),O===a.UNSIGNED_BYTE&&(q=a.RG8)),_===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RG8UI),O===a.UNSIGNED_SHORT&&(q=a.RG16UI),O===a.UNSIGNED_INT&&(q=a.RG32UI),O===a.BYTE&&(q=a.RG8I),O===a.SHORT&&(q=a.RG16I),O===a.INT&&(q=a.RG32I)),_===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RGB8UI),O===a.UNSIGNED_SHORT&&(q=a.RGB16UI),O===a.UNSIGNED_INT&&(q=a.RGB32UI),O===a.BYTE&&(q=a.RGB8I),O===a.SHORT&&(q=a.RGB16I),O===a.INT&&(q=a.RGB32I)),_===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),O===a.UNSIGNED_INT&&(q=a.RGBA32UI),O===a.BYTE&&(q=a.RGBA8I),O===a.SHORT&&(q=a.RGBA16I),O===a.INT&&(q=a.RGBA32I)),_===a.RGB&&(O===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),O===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),_===a.RGBA){const ye=te?Ga:Qe.getTransfer(se);O===a.FLOAT&&(q=a.RGBA32F),O===a.HALF_FLOAT&&(q=a.RGBA16F),O===a.UNSIGNED_BYTE&&(q=ye===ft?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(E,_){let O;return E?_===null||_===gi||_===Or?O=a.DEPTH24_STENCIL8:_===An?O=a.DEPTH32F_STENCIL8:_===Nr&&(O=a.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===Or?O=a.DEPTH_COMPONENT24:_===An?O=a.DEPTH_COMPONENT32F:_===Nr&&(O=a.DEPTH_COMPONENT16),O}function A(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==$t&&E.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){const _=E.target;_.removeEventListener("dispose",T),P(_),_.isVideoTexture&&u.delete(_)}function w(E){const _=E.target;_.removeEventListener("dispose",w),y(_)}function P(E){const _=i.get(E);if(_.__webglInit===void 0)return;const O=E.source,se=h.get(O);if(se){const te=se[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(E),Object.keys(se).length===0&&h.delete(O)}i.remove(E)}function S(E){const _=i.get(E);a.deleteTexture(_.__webglTexture);const O=E.source,se=h.get(O);delete se[_.__cacheKey],s.memory.textures--}function y(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(_.__webglFramebuffer[se]))for(let te=0;te<_.__webglFramebuffer[se].length;te++)a.deleteFramebuffer(_.__webglFramebuffer[se][te]);else a.deleteFramebuffer(_.__webglFramebuffer[se]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[se])}else{if(Array.isArray(_.__webglFramebuffer))for(let se=0;se<_.__webglFramebuffer.length;se++)a.deleteFramebuffer(_.__webglFramebuffer[se]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let se=0;se<_.__webglColorRenderbuffer.length;se++)_.__webglColorRenderbuffer[se]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[se]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=E.textures;for(let se=0,te=O.length;se<te;se++){const q=i.get(O[se]);q.__webglTexture&&(a.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(O[se])}i.remove(E)}let D=0;function R(){D=0}function L(){const E=D;return E>=n.maxTextures&&qe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),D+=1,E}function N(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function G(E,_){const O=i.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const se=E.image;if(se===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{k(O,E,_);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+_)}function z(E,_){const O=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){k(O,E,_);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+_)}function ne(E,_){const O=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){k(O,E,_);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+_)}function Y(E,_){const O=i.get(E);if(E.version>0&&O.__version!==E.version){B(O,E,_);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+_)}const H={[Fr]:a.REPEAT,[gn]:a.CLAMP_TO_EDGE,[oo]:a.MIRRORED_REPEAT},W={[$t]:a.NEAREST,[Wf]:a.NEAREST_MIPMAP_NEAREST,[ia]:a.NEAREST_MIPMAP_LINEAR,[jt]:a.LINEAR,[us]:a.LINEAR_MIPMAP_NEAREST,[mi]:a.LINEAR_MIPMAP_LINEAR},I={[jf]:a.NEVER,[eh]:a.ALWAYS,[Kf]:a.LESS,[pu]:a.LEQUAL,[Zf]:a.EQUAL,[$f]:a.GEQUAL,[Jf]:a.GREATER,[Qf]:a.NOTEQUAL};function X(E,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===us||_.magFilter===ia||_.magFilter===mi||_.minFilter===jt||_.minFilter===us||_.minFilter===ia||_.minFilter===mi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(E,a.TEXTURE_WRAP_S,H[_.wrapS]),a.texParameteri(E,a.TEXTURE_WRAP_T,H[_.wrapT]),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,H[_.wrapR]),a.texParameteri(E,a.TEXTURE_MAG_FILTER,W[_.magFilter]),a.texParameteri(E,a.TEXTURE_MIN_FILTER,W[_.minFilter]),_.compareFunction&&(a.texParameteri(E,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(E,a.TEXTURE_COMPARE_FUNC,I[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==ia&&_.minFilter!==mi||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ee(E,_){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));const se=_.source;let te=h.get(se);te===void 0&&(te={},h.set(se,te));const q=N(_);if(q!==E.__cacheKey){te[q]===void 0&&(te[q]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),te[q].usedTimes++;const ye=te[E.__cacheKey];ye!==void 0&&(te[E.__cacheKey].usedTimes--,ye.usedTimes===0&&S(_)),E.__cacheKey=q,E.__webglTexture=te[q].texture}return O}function ie(E,_,O){return Math.floor(Math.floor(E/O)/_)}function $(E,_,O,se){const q=E.updateRanges;if(q.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,O,se,_.data);else{q.sort((oe,le)=>oe.start-le.start);let ye=0;for(let oe=1;oe<q.length;oe++){const le=q[ye],ve=q[oe],Re=le.start+le.count,Me=ie(ve.start,_.width,4),ze=ie(le.start,_.width,4);ve.start<=Re+1&&Me===ze&&ie(ve.start+ve.count-1,_.width,4)===Me?le.count=Math.max(le.count,ve.start+ve.count-le.start):(++ye,q[ye]=ve)}q.length=ye+1;const ge=a.getParameter(a.UNPACK_ROW_LENGTH),Ce=a.getParameter(a.UNPACK_SKIP_PIXELS),Ee=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let oe=0,le=q.length;oe<le;oe++){const ve=q[oe],Re=Math.floor(ve.start/4),Me=Math.ceil(ve.count/4),ze=Re%_.width,F=Math.floor(Re/_.width),ce=Me,xe=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ze),a.pixelStorei(a.UNPACK_SKIP_ROWS,F),t.texSubImage2D(a.TEXTURE_2D,0,ze,F,ce,xe,O,se,_.data)}E.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,ge),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ce),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ee)}}function k(E,_,O){let se=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(se=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(se=a.TEXTURE_3D);const te=ee(E,_),q=_.source;t.bindTexture(se,E.__webglTexture,a.TEXTURE0+O);const ye=i.get(q);if(q.version!==ye.__version||te===!0){t.activeTexture(a.TEXTURE0+O);const ge=Qe.getPrimaries(Qe.workingColorSpace),Ce=_.colorSpace===Kn?null:Qe.getPrimaries(_.colorSpace),Ee=_.colorSpace===Kn||ge===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let oe=g(_.image,!1,n.maxTextureSize);oe=J(_,oe);const le=r.convert(_.format,_.colorSpace),ve=r.convert(_.type);let Re=v(_.internalFormat,le,ve,_.colorSpace,_.isVideoTexture);X(se,_);let Me;const ze=_.mipmaps,F=_.isVideoTexture!==!0,ce=ye.__version===void 0||te===!0,xe=q.dataReady,Te=A(_,oe);if(_.isDepthTexture)Re=M(_.format===kr,_.type),ce&&(F?t.texStorage2D(a.TEXTURE_2D,1,Re,oe.width,oe.height):t.texImage2D(a.TEXTURE_2D,0,Re,oe.width,oe.height,0,le,ve,null));else if(_.isDataTexture)if(ze.length>0){F&&ce&&t.texStorage2D(a.TEXTURE_2D,Te,Re,ze[0].width,ze[0].height);for(let ue=0,re=ze.length;ue<re;ue++)Me=ze[ue],F?xe&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,Me.width,Me.height,le,ve,Me.data):t.texImage2D(a.TEXTURE_2D,ue,Re,Me.width,Me.height,0,le,ve,Me.data);_.generateMipmaps=!1}else F?(ce&&t.texStorage2D(a.TEXTURE_2D,Te,Re,oe.width,oe.height),xe&&$(_,oe,le,ve)):t.texImage2D(a.TEXTURE_2D,0,Re,oe.width,oe.height,0,le,ve,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){F&&ce&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Re,ze[0].width,ze[0].height,oe.depth);for(let ue=0,re=ze.length;ue<re;ue++)if(Me=ze[ue],_.format!==on)if(le!==null)if(F){if(xe)if(_.layerUpdates.size>0){const Pe=vc(Me.width,Me.height,_.format,_.type);for(const Ne of _.layerUpdates){const Be=Me.data.subarray(Ne*Pe/Me.data.BYTES_PER_ELEMENT,(Ne+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,Ne,Me.width,Me.height,1,le,Be)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,oe.depth,le,Me.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ue,Re,Me.width,Me.height,oe.depth,0,Me.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?xe&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,oe.depth,le,ve,Me.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ue,Re,Me.width,Me.height,oe.depth,0,le,ve,Me.data)}else{F&&ce&&t.texStorage2D(a.TEXTURE_2D,Te,Re,ze[0].width,ze[0].height);for(let ue=0,re=ze.length;ue<re;ue++)Me=ze[ue],_.format!==on?le!==null?F?xe&&t.compressedTexSubImage2D(a.TEXTURE_2D,ue,0,0,Me.width,Me.height,le,Me.data):t.compressedTexImage2D(a.TEXTURE_2D,ue,Re,Me.width,Me.height,0,Me.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?xe&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,Me.width,Me.height,le,ve,Me.data):t.texImage2D(a.TEXTURE_2D,ue,Re,Me.width,Me.height,0,le,ve,Me.data)}else if(_.isDataArrayTexture)if(F){if(ce&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Re,oe.width,oe.height,oe.depth),xe)if(_.layerUpdates.size>0){const ue=vc(oe.width,oe.height,_.format,_.type);for(const re of _.layerUpdates){const Pe=oe.data.subarray(re*ue/oe.data.BYTES_PER_ELEMENT,(re+1)*ue/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,le,ve,Pe)}_.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,le,ve,oe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Re,oe.width,oe.height,oe.depth,0,le,ve,oe.data);else if(_.isData3DTexture)F?(ce&&t.texStorage3D(a.TEXTURE_3D,Te,Re,oe.width,oe.height,oe.depth),xe&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,le,ve,oe.data)):t.texImage3D(a.TEXTURE_3D,0,Re,oe.width,oe.height,oe.depth,0,le,ve,oe.data);else if(_.isFramebufferTexture){if(ce)if(F)t.texStorage2D(a.TEXTURE_2D,Te,Re,oe.width,oe.height);else{let ue=oe.width,re=oe.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(a.TEXTURE_2D,Pe,Re,ue,re,0,le,ve,null),ue>>=1,re>>=1}}else if(ze.length>0){if(F&&ce){const ue=be(ze[0]);t.texStorage2D(a.TEXTURE_2D,Te,Re,ue.width,ue.height)}for(let ue=0,re=ze.length;ue<re;ue++)Me=ze[ue],F?xe&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,le,ve,Me):t.texImage2D(a.TEXTURE_2D,ue,Re,le,ve,Me);_.generateMipmaps=!1}else if(F){if(ce){const ue=be(oe);t.texStorage2D(a.TEXTURE_2D,Te,Re,ue.width,ue.height)}xe&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,le,ve,oe)}else t.texImage2D(a.TEXTURE_2D,0,Re,le,ve,oe);m(_)&&p(se),ye.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function B(E,_,O){if(_.image.length!==6)return;const se=ee(E,_),te=_.source;t.bindTexture(a.TEXTURE_CUBE_MAP,E.__webglTexture,a.TEXTURE0+O);const q=i.get(te);if(te.version!==q.__version||se===!0){t.activeTexture(a.TEXTURE0+O);const ye=Qe.getPrimaries(Qe.workingColorSpace),ge=_.colorSpace===Kn?null:Qe.getPrimaries(_.colorSpace),Ce=_.colorSpace===Kn||ye===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,le=[];for(let re=0;re<6;re++)!Ee&&!oe?le[re]=g(_.image[re],!0,n.maxCubemapSize):le[re]=oe?_.image[re].image:_.image[re],le[re]=J(_,le[re]);const ve=le[0],Re=r.convert(_.format,_.colorSpace),Me=r.convert(_.type),ze=v(_.internalFormat,Re,Me,_.colorSpace),F=_.isVideoTexture!==!0,ce=q.__version===void 0||se===!0,xe=te.dataReady;let Te=A(_,ve);X(a.TEXTURE_CUBE_MAP,_);let ue;if(Ee){F&&ce&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Te,ze,ve.width,ve.height);for(let re=0;re<6;re++){ue=le[re].mipmaps;for(let Pe=0;Pe<ue.length;Pe++){const Ne=ue[Pe];_.format!==on?Re!==null?F?xe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ne.width,Ne.height,Re,Ne.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,ze,Ne.width,Ne.height,0,Ne.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ne.width,Ne.height,Re,Me,Ne.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,ze,Ne.width,Ne.height,0,Re,Me,Ne.data)}}}else{if(ue=_.mipmaps,F&&ce){ue.length>0&&Te++;const re=be(le[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Te,ze,re.width,re.height)}for(let re=0;re<6;re++)if(oe){F?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,le[re].width,le[re].height,Re,Me,le[re].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,le[re].width,le[re].height,0,Re,Me,le[re].data);for(let Pe=0;Pe<ue.length;Pe++){const Be=ue[Pe].image[re].image;F?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Be.width,Be.height,Re,Me,Be.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,ze,Be.width,Be.height,0,Re,Me,Be.data)}}else{F?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,Me,le[re]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,Re,Me,le[re]);for(let Pe=0;Pe<ue.length;Pe++){const Ne=ue[Pe];F?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Re,Me,Ne.image[re]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,ze,Re,Me,Ne.image[re])}}}m(_)&&p(a.TEXTURE_CUBE_MAP),q.__version=te.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Q(E,_,O,se,te,q){const ye=r.convert(O.format,O.colorSpace),ge=r.convert(O.type),Ce=v(O.internalFormat,ye,ge,O.colorSpace),Ee=i.get(_),oe=i.get(O);if(oe.__renderTarget=_,!Ee.__hasExternalTextures){const le=Math.max(1,_.width>>q),ve=Math.max(1,_.height>>q);te===a.TEXTURE_3D||te===a.TEXTURE_2D_ARRAY?t.texImage3D(te,q,Ce,le,ve,_.depth,0,ye,ge,null):t.texImage2D(te,q,Ce,le,ve,0,ye,ge,null)}t.bindFramebuffer(a.FRAMEBUFFER,E),he(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,te,oe.__webglTexture,0,_e(_)):(te===a.TEXTURE_2D||te>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,se,te,oe.__webglTexture,q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function pe(E,_,O){if(a.bindRenderbuffer(a.RENDERBUFFER,E),_.depthBuffer){const se=_.depthTexture,te=se&&se.isDepthTexture?se.type:null,q=M(_.stencilBuffer,te),ye=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=_e(_);he(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ge,q,_.width,_.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,ge,q,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,q,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,E)}else{const se=_.textures;for(let te=0;te<se.length;te++){const q=se[te],ye=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),Ce=v(q.internalFormat,ye,ge,q.colorSpace),Ee=_e(_);O&&he(_)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ee,Ce,_.width,_.height):he(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ee,Ce,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function me(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(_.depthTexture);se.__renderTarget=_,(!se.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);const te=se.__webglTexture,q=_e(_);if(_.depthTexture.format===Br)he(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,te,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,te,0);else if(_.depthTexture.format===kr)he(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,te,0,q):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function fe(E){const _=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const se=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),se){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,se.removeEventListener("dispose",te)};se.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=se}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const se=E.texture.mipmaps;se&&se.length>0?me(_.__webglFramebuffer[0],E):me(_.__webglFramebuffer,E)}else if(O){_.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[se]),_.__webglDepthbuffer[se]===void 0)_.__webglDepthbuffer[se]=a.createRenderbuffer(),pe(_.__webglDepthbuffer[se],E,!1);else{const te=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[se];a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,te,a.RENDERBUFFER,q)}}else{const se=E.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),pe(_.__webglDepthbuffer,E,!1);else{const te=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,te,a.RENDERBUFFER,q)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function de(E,_,O){const se=i.get(E);_!==void 0&&Q(se.__webglFramebuffer,E,E.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&fe(E)}function De(E){const _=E.texture,O=i.get(E),se=i.get(_);E.addEventListener("dispose",w);const te=E.textures,q=E.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(se.__webglTexture===void 0&&(se.__webglTexture=a.createTexture()),se.__version=_.version,s.memory.textures++),q){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)O.__webglFramebuffer[ge][Ce]=a.createFramebuffer()}else O.__webglFramebuffer[ge]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<_.mipmaps.length;ge++)O.__webglFramebuffer[ge]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(ye)for(let ge=0,Ce=te.length;ge<Ce;ge++){const Ee=i.get(te[ge]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=a.createTexture(),s.memory.textures++)}if(E.samples>0&&he(E)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<te.length;ge++){const Ce=te[ge];O.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);const Ee=r.convert(Ce.format,Ce.colorSpace),oe=r.convert(Ce.type),le=v(Ce.internalFormat,Ee,oe,Ce.colorSpace,E.isXRRenderTarget===!0),ve=_e(E);a.renderbufferStorageMultisample(a.RENDERBUFFER,ve,le,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(a.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(q){t.bindTexture(a.TEXTURE_CUBE_MAP,se.__webglTexture),X(a.TEXTURE_CUBE_MAP,_);for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)Q(O.__webglFramebuffer[ge][Ce],E,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce);else Q(O.__webglFramebuffer[ge],E,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(_)&&p(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ge=0,Ce=te.length;ge<Ce;ge++){const Ee=te[ge],oe=i.get(Ee);let le=a.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(le,oe.__webglTexture),X(le,Ee),Q(O.__webglFramebuffer,E,Ee,a.COLOR_ATTACHMENT0+ge,le,0),m(Ee)&&p(le)}t.unbindTexture()}else{let ge=a.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),X(ge,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)Q(O.__webglFramebuffer[Ce],E,_,a.COLOR_ATTACHMENT0,ge,Ce);else Q(O.__webglFramebuffer,E,_,a.COLOR_ATTACHMENT0,ge,0);m(_)&&p(ge),t.unbindTexture()}E.depthBuffer&&fe(E)}function Fe(E){const _=E.textures;for(let O=0,se=_.length;O<se;O++){const te=_[O];if(m(te)){const q=b(E),ye=i.get(te).__webglTexture;t.bindTexture(q,ye),p(q),t.unbindTexture()}}}const U=[],Ae=[];function Ue(E){if(E.samples>0){if(he(E)===!1){const _=E.textures,O=E.width,se=E.height;let te=a.COLOR_BUFFER_BIT;const q=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ye=i.get(E),ge=_.length>1;if(ge)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(a.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ye.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ce=E.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=a.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=a.STENCIL_BUFFER_BIT)),ge){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);const oe=i.get(_[Ee]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,oe,0)}a.blitFramebuffer(0,0,O,se,0,0,O,se,te,a.NEAREST),l===!0&&(U.length=0,Ae.length=0,U.push(a.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(U.push(q),Ae.push(q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Ae)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ge)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(a.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);const oe=i.get(_[Ee]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ye.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,oe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function _e(E){return Math.min(n.maxSamples,E.samples)}function he(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function we(E){const _=s.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function J(E,_){const O=E.colorSpace,se=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==$i&&O!==Kn&&(Qe.getTransfer(O)===ft?(se!==on||te!==Cn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",O)),_}function be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=ne,this.setTextureCube=Y,this.rebindTextures=de,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=he}function Ag(a,e){function t(i,n=Kn){let r;const s=Qe.getTransfer(n);if(i===Cn)return a.UNSIGNED_BYTE;if(i===Ko)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return a.UNSIGNED_SHORT_5_5_5_1;if(i===lu)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===cu)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===su)return a.BYTE;if(i===ou)return a.SHORT;if(i===Nr)return a.UNSIGNED_SHORT;if(i===jo)return a.INT;if(i===gi)return a.UNSIGNED_INT;if(i===An)return a.FLOAT;if(i===rr)return a.HALF_FLOAT;if(i===uu)return a.ALPHA;if(i===fu)return a.RGB;if(i===on)return a.RGBA;if(i===Br)return a.DEPTH_COMPONENT;if(i===kr)return a.DEPTH_STENCIL;if(i===hu)return a.RED;if(i===Jo)return a.RED_INTEGER;if(i===Qo)return a.RG;if(i===$o)return a.RG_INTEGER;if(i===el)return a.RGBA_INTEGER;if(i===La||i===Ia||i===Fa||i===Na)if(s===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lo||i===co||i===uo||i===fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ho||i===po||i===mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ho||i===po)return s===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xo||i===go||i===vo||i===_o||i===yo||i===bo||i===Mo||i===So||i===To||i===Eo||i===Ao||i===wo||i===Co||i===Ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===go)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===So)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===To)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ao)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Co)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ro)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===Do||i===Uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Po)return s===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lo||i===Io||i===Fo||i===No)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new kn({vertexShader:wg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new Mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends ar{constructor(e,t){super();const i=this;let n=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,x=null;const g=typeof XRWebGLBinding<"u",m=new Rg,p={},b=t.getContextAttributes();let v=null,M=null;const A=[],T=[],w=new $e;let P=null;const S=new Gt;S.viewport=new nt;const y=new Gt;y.viewport=new nt;const D=[S,y],R=new zd;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let B=A[k];return B===void 0&&(B=new Us,A[k]=B),B.getTargetRaySpace()},this.getControllerGrip=function(k){let B=A[k];return B===void 0&&(B=new Us,A[k]=B),B.getGripSpace()},this.getHand=function(k){let B=A[k];return B===void 0&&(B=new Us,A[k]=B),B.getHandSpace()};function G(k){const B=T.indexOf(k.inputSource);if(B===-1)return;const Q=A[B];Q!==void 0&&(Q.update(k.inputSource,k.frame,c||s),Q.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",ne);for(let k=0;k<A.length;k++){const B=T[k];B!==null&&(T[k]=null,A[k].disconnect(B))}L=null,N=null,m.reset();for(const k in p)delete p[k];e.setRenderTarget(v),d=null,h=null,f=null,n=null,M=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(n,t)),f},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",z),n.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,pe=null,me=null;b.depth&&(me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=b.stencil?kr:Br,pe=b.stencil?Or:gi);const fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(fe),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new vi(h.textureWidth,h.textureHeight,{format:on,type:Cn,depthTexture:new Au(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Q={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,Q),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new vi(d.framebufferWidth,d.framebufferHeight,{format:on,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),$.setContext(n),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(k){for(let B=0;B<k.removed.length;B++){const Q=k.removed[B],pe=T.indexOf(Q);pe>=0&&(T[pe]=null,A[pe].disconnect(Q))}for(let B=0;B<k.added.length;B++){const Q=k.added[B];let pe=T.indexOf(Q);if(pe===-1){for(let fe=0;fe<A.length;fe++)if(fe>=T.length){T.push(Q),pe=fe;break}else if(T[fe]===null){T[fe]=Q,pe=fe;break}if(pe===-1)break}const me=A[pe];me&&me.connect(Q)}}const Y=new K,H=new K;function W(k,B,Q){Y.setFromMatrixPosition(B.matrixWorld),H.setFromMatrixPosition(Q.matrixWorld);const pe=Y.distanceTo(H),me=B.projectionMatrix.elements,fe=Q.projectionMatrix.elements,de=me[14]/(me[10]-1),De=me[14]/(me[10]+1),Fe=(me[9]+1)/me[5],U=(me[9]-1)/me[5],Ae=(me[8]-1)/me[0],Ue=(fe[8]+1)/fe[0],_e=de*Ae,he=de*Ue,we=pe/(-Ae+Ue),J=we*-Ae;if(B.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(J),k.translateZ(we),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),me[10]===-1)k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const be=de+we,E=De+we,_=_e-J,O=he+(pe-J),se=Fe*De/E*be,te=U*De/E*be;k.projectionMatrix.makePerspective(_,O,se,te,be,E),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function I(k,B){B===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(B.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;let B=k.near,Q=k.far;m.texture!==null&&(m.depthNear>0&&(B=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),R.near=y.near=S.near=B,R.far=y.far=S.far=Q,(L!==R.near||N!==R.far)&&(n.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,N=R.far),R.layers.mask=k.layers.mask|6,S.layers.mask=R.layers.mask&3,y.layers.mask=R.layers.mask&5;const pe=k.parent,me=R.cameras;I(R,pe);for(let fe=0;fe<me.length;fe++)I(me[fe],pe);me.length===2?W(R,S,y):R.projectionMatrix.copy(S.projectionMatrix),X(k,R,pe)};function X(k,B,Q){Q===null?k.matrix.copy(B.matrixWorld):(k.matrix.copy(Q.matrixWorld),k.matrix.invert(),k.matrix.multiply(B.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=er*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(k){return p[k]};let ee=null;function ie(k,B){if(u=B.getViewerPose(c||s),x=B,u!==null){const Q=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let pe=!1;Q.length!==R.cameras.length&&(R.cameras.length=0,pe=!0);for(let De=0;De<Q.length;De++){const Fe=Q[De];let U=null;if(d!==null)U=d.getViewport(Fe);else{const Ue=f.getViewSubImage(h,Fe);U=Ue.viewport,De===0&&(e.setRenderTargetTextures(M,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(M))}let Ae=D[De];Ae===void 0&&(Ae=new Gt,Ae.layers.enable(De),Ae.viewport=new nt,D[De]=Ae),Ae.matrix.fromArray(Fe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Fe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(U.x,U.y,U.width,U.height),De===0&&(R.matrix.copy(Ae.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),pe===!0&&R.cameras.push(Ae)}const me=n.enabledFeatures;if(me&&me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){f=i.getBinding();const De=f.getDepthInformation(Q[0]);De&&De.isValid&&De.texture&&m.init(De,n.renderState)}if(me&&me.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let De=0;De<Q.length;De++){const Fe=Q[De].camera;if(Fe){let U=p[Fe];U||(U=new wu,p[Fe]=U);const Ae=f.getCameraImage(Fe);U.sourceTexture=Ae}}}}for(let Q=0;Q<A.length;Q++){const pe=T[Q],me=A[Q];pe!==null&&me!==void 0&&me.update(pe,B,c||s)}ee&&ee(k,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),x=null}const $=new Bu;$.setAnimationLoop(ie),this.setAnimationLoop=function(k){ee=k},this.dispose=function(){}}}const ui=new wt,Dg=new He;function Ug(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,yu(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,b,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),v=b.envMap,M=b.envMapRotation;v&&(m.envMap.value=v,ui.copy(M),ui.x*=-1,ui.y*=-1,ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(ui)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Lg(a,e,t,i){let n={},r={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const M=v.program;i.uniformBlockBinding(b,M)}function c(b,v){let M=n[b.id];M===void 0&&(x(b),M=u(b),n[b.id]=M,b.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(b,A);const T=e.render.frame;r[b.id]!==T&&(h(b),r[b.id]=T)}function u(b){const v=f();b.__bindingPointIndex=v;const M=a.createBuffer(),A=b.__size,T=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,A,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,M),M}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=n[b.id],M=b.uniforms,A=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let T=0,w=M.length;T<w;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,y=P.length;S<y;S++){const D=P[S];if(d(D,T,S,A)===!0){const R=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let G=0;G<L.length;G++){const z=L[G],ne=g(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,R+N,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,N),N+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,R,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(b,v,M,A){const T=b.value,w=v+"_"+M;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{const P=A[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return A[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(b){const v=b.uniforms;let M=0;const A=16;for(let w=0,P=v.length;w<P;w++){const S=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,D=S.length;y<D;y++){const R=S[y],L=Array.isArray(R.value)?R.value:[R.value];for(let N=0,G=L.length;N<G;N++){const z=L[N],ne=g(z),Y=M%A,H=Y%ne.boundary,W=Y+H;M+=H,W!==0&&A-W<ne.storage&&(M+=A-W),R.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=ne.storage}}}const T=M%A;return T>0&&(M+=A-T),b.__size=M,b.__cache={},this}function g(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const M=s.indexOf(v.__bindingPointIndex);s.splice(M,1),a.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(const b in n)a.deleteBuffer(n[b]);s=[],n={},r={}}return{bind:l,update:c,dispose:p}}const Ig=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Fn=null;function Fg(){return Fn===null&&(Fn=new Tu(Ig,32,32,Qo,rr),Fn.minFilter=jt,Fn.magFilter=jt,Fn.wrapS=gn,Fn.wrapT=gn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class Ng{constructor(e={}){const{canvas:t=th(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const x=new Set([el,$o,Jo]),g=new Set([Cn,gi,Nr,Or,Ko,Zo]),m=new Uint32Array(4),p=new Int32Array(4);let b=null,v=null;const M=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=mt;let P=0,S=0,y=null,D=-1,R=null;const L=new nt,N=new nt;let G=null;const z=new je(0);let ne=0,Y=t.width,H=t.height,W=1,I=null,X=null;const ee=new nt(0,0,Y,H),ie=new nt(0,0,Y,H);let $=!1;const k=new ol;let B=!1,Q=!1;const pe=new He,me=new K,fe=new nt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Fe(){return y===null?W:1}let U=i;function Ae(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qo}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),U===null){const j="webgl2";if(U=Ae(j,C),U===null)throw Ae(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let Ue,_e,he,we,J,be,E,_,O,se,te,q,ye,ge,Ce,Ee,oe,le,ve,Re,Me,ze,F,ce;function xe(){Ue=new Wm(U),Ue.init(),ze=new Ag(U,Ue),_e=new Fm(U,Ue,e,ze),he=new Tg(U,Ue),_e.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),we=new qm(U),J=new fg,be=new Eg(U,Ue,he,J,_e,ze,we),E=new Om(T),_=new Hm(T),O=new Jd(U),F=new Lm(U,O),se=new Xm(U,O,we,F),te=new Km(U,se,O,we),ve=new jm(U,_e,be),Ee=new Nm(J),q=new ug(T,E,_,Ue,_e,F,Ee),ye=new Ug(T,J),ge=new dg,Ce=new _g(Ue),le=new Um(T,E,_,he,te,d,l),oe=new Mg(T,te,_e),ce=new Lg(U,we,_e,he),Re=new Im(U,Ue,we),Me=new Ym(U,Ue,we),we.programs=q.programs,T.capabilities=_e,T.extensions=Ue,T.properties=J,T.renderLists=ge,T.shadowMap=oe,T.state=he,T.info=we}xe();const Te=new Pg(T,U);this.xr=Te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(Y,H,!1))},this.getSize=function(C){return C.set(Y,H)},this.setSize=function(C,j,V=!0){if(Te.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=C,H=j,t.width=Math.floor(C*W),t.height=Math.floor(j*W),V===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(Y*W,H*W).floor()},this.setDrawingBufferSize=function(C,j,V){Y=C,H=j,W=V,t.width=Math.floor(C*V),t.height=Math.floor(j*V),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,j,V,ae){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,j,V,ae),he.viewport(L.copy(ee).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,j,V,ae){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,j,V,ae),he.scissor(N.copy(ie).multiplyScalar(W).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){he.setScissorTest($=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,V=!0){let ae=0;if(C){let Z=!1;if(y!==null){const Se=y.texture.format;Z=x.has(Se)}if(Z){const Se=y.texture.type,Le=g.has(Se),ke=le.getClearColor(),Oe=le.getClearAlpha(),We=ke.r,Ye=ke.g,Ve=ke.b;Le?(m[0]=We,m[1]=Ye,m[2]=Ve,m[3]=Oe,U.clearBufferuiv(U.COLOR,0,m)):(p[0]=We,p[1]=Ye,p[2]=Ve,p[3]=Oe,U.clearBufferiv(U.COLOR,0,p))}else ae|=U.COLOR_BUFFER_BIT}j&&(ae|=U.DEPTH_BUFFER_BIT),V&&(ae|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),le.dispose(),ge.dispose(),Ce.dispose(),J.dispose(),E.dispose(),_.dispose(),te.dispose(),F.dispose(),ce.dispose(),q.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ht),Te.removeEventListener("sessionend",ln),Ut.stop()};function ue(C){C.preventDefault(),Bl("WebGLRenderer: Context Lost."),w=!0}function re(){Bl("WebGLRenderer: Context Restored."),w=!1;const C=we.autoReset,j=oe.enabled,V=oe.autoUpdate,ae=oe.needsUpdate,Z=oe.type;xe(),we.autoReset=C,oe.enabled=j,oe.autoUpdate=V,oe.needsUpdate=ae,oe.type=Z}function Pe(C){it("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ne(C){const j=C.target;j.removeEventListener("dispose",Ne),Be(j)}function Be(C){Xe(C),J.remove(C)}function Xe(C){const j=J.get(C).programs;j!==void 0&&(j.forEach(function(V){q.releaseProgram(V)}),C.isShaderMaterial&&q.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,V,ae,Z,Se){j===null&&(j=de);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,ke=Jr(C,j,V,ae,Z);he.setMaterial(ae,Le);let Oe=V.index,We=1;if(ae.wireframe===!0){if(Oe=se.getWireframeAttribute(V),Oe===void 0)return;We=2}const Ye=V.drawRange,Ve=V.attributes.position;let Ze=Ye.start*We,ot=(Ye.start+Ye.count)*We;Se!==null&&(Ze=Math.max(Ze,Se.start*We),ot=Math.min(ot,(Se.start+Se.count)*We)),Oe!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,Oe.count)):Ve!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,Ve.count));const dt=ot-Ze;if(dt<0||dt===1/0)return;F.setup(Z,ae,ke,V,Oe);let pt,at=Re;if(Oe!==null&&(pt=O.get(Oe),at=Me,at.setIndex(pt)),Z.isMesh)ae.wireframe===!0?(he.setLineWidth(ae.wireframeLinewidth*Fe()),at.setMode(U.LINES)):at.setMode(U.TRIANGLES);else if(Z.isLine){let Ge=ae.linewidth;Ge===void 0&&(Ge=1),he.setLineWidth(Ge*Fe()),Z.isLineSegments?at.setMode(U.LINES):Z.isLineLoop?at.setMode(U.LINE_LOOP):at.setMode(U.LINE_STRIP)}else Z.isPoints?at.setMode(U.POINTS):Z.isSprite&&at.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Vr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))at.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ge=Z._multiDrawStarts,lt=Z._multiDrawCounts,rt=Z._multiDrawCount,Lt=Oe?O.get(Oe).bytesPerElement:1,Mn=J.get(ae).currentProgram.getUniforms();for(let gt=0;gt<rt;gt++)Mn.setValue(U,"_gl_DrawID",gt),at.render(Ge[gt]/Lt,lt[gt])}else if(Z.isInstancedMesh)at.renderInstances(Ze,dt,Z.count);else if(V.isInstancedBufferGeometry){const Ge=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,lt=Math.min(V.instanceCount,Ge);at.renderInstances(Ze,dt,lt)}else at.render(Ze,dt)};function ht(C,j,V){C.transparent===!0&&C.side===En&&C.forceSinglePass===!1?(C.side=Kt,C.needsUpdate=!0,ni(C,j,V),C.side=Qn,C.needsUpdate=!0,ni(C,j,V),C.side=En):ni(C,j,V)}this.compile=function(C,j,V=null){V===null&&(V=C),v=Ce.get(V),v.init(j),A.push(v),V.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),C!==V&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const ae=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Se=Z.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const ke=Se[Le];ht(ke,V,Z),ae.add(ke)}else ht(Se,V,Z),ae.add(Se)}),v=A.pop(),ae},this.compileAsync=function(C,j,V=null){const ae=this.compile(C,j,V);return new Promise(Z=>{function Se(){if(ae.forEach(function(Le){J.get(Le).currentProgram.isReady()&&ae.delete(Le)}),ae.size===0){Z(C);return}setTimeout(Se,10)}Ue.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ct=null;function yt(C){ct&&ct(C)}function Ht(){Ut.stop()}function ln(){Ut.start()}const Ut=new Bu;Ut.setAnimationLoop(yt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(C){ct=C,Te.setAnimationLoop(C),C===null?Ut.stop():Ut.start()},Te.addEventListener("sessionstart",Ht),Te.addEventListener("sessionend",ln),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(j),j=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,j,y),v=Ce.get(C,A.length),v.init(j),A.push(v),pe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),k.setFromProjectionMatrix(pe,wn,j.reversedDepth),Q=this.localClippingEnabled,B=Ee.init(this.clippingPlanes,Q),b=ge.get(C,M.length),b.init(),M.push(b),Te.enabled===!0&&Te.isPresenting===!0){const Se=T.xr.getDepthSensingMesh();Se!==null&&nn(Se,j,-1/0,T.sortObjects)}nn(C,j,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(I,X),De=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,De&&le.addToRenderList(b,C),this.info.render.frame++,B===!0&&Ee.beginShadows();const V=v.state.shadowsArray;oe.render(V,C,j),B===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=b.opaque,Z=b.transmissive;if(v.setupLights(),j.isArrayCamera){const Se=j.cameras;if(Z.length>0)for(let Le=0,ke=Se.length;Le<ke;Le++){const Oe=Se[Le];rn(ae,Z,C,Oe)}De&&le.render(C);for(let Le=0,ke=Se.length;Le<ke;Le++){const Oe=Se[Le];yn(b,C,Oe,Oe.viewport)}}else Z.length>0&&rn(ae,Z,C,j),De&&le.render(C),yn(b,C,j);y!==null&&S===0&&(be.updateMultisampleRenderTarget(y),be.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(T,C,j),F.resetDefaultState(),D=-1,R=null,A.pop(),A.length>0?(v=A[A.length-1],B===!0&&Ee.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,M.pop(),M.length>0?b=M[M.length-1]:b=null};function nn(C,j,V,ae){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||k.intersectsSprite(C)){ae&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);const Le=te.update(C),ke=C.material;ke.visible&&b.push(C,Le,ke,V,fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||k.intersectsObject(C))){const Le=te.update(C),ke=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),fe.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),fe.copy(Le.boundingSphere.center)),fe.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(ke)){const Oe=Le.groups;for(let We=0,Ye=Oe.length;We<Ye;We++){const Ve=Oe[We],Ze=ke[Ve.materialIndex];Ze&&Ze.visible&&b.push(C,Le,Ze,V,fe.z,Ve)}}else ke.visible&&b.push(C,Le,ke,V,fe.z,null)}}const Se=C.children;for(let Le=0,ke=Se.length;Le<ke;Le++)nn(Se[Le],j,V,ae)}function yn(C,j,V,ae){const{opaque:Z,transmissive:Se,transparent:Le}=C;v.setupLightsView(V),B===!0&&Ee.setGlobalState(T.clippingPlanes,V),ae&&he.viewport(L.copy(ae)),Z.length>0&&Mt(Z,j,V),Se.length>0&&Mt(Se,j,V),Le.length>0&&Mt(Le,j,V),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function rn(C,j,V,ae){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ae.id]===void 0&&(v.state.transmissionRenderTarget[ae.id]=new vi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?rr:Cn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const Se=v.state.transmissionRenderTarget[ae.id],Le=ae.viewport||L;Se.setSize(Le.z*T.transmissionResolutionScale,Le.w*T.transmissionResolutionScale);const ke=T.getRenderTarget(),Oe=T.getActiveCubeFace(),We=T.getActiveMipmapLevel();T.setRenderTarget(Se),T.getClearColor(z),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),De&&le.render(V);const Ye=T.toneMapping;T.toneMapping=Jn;const Ve=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),v.setupLightsView(ae),B===!0&&Ee.setGlobalState(T.clippingPlanes,ae),Mt(C,V,ae),be.updateMultisampleRenderTarget(Se),be.updateRenderTargetMipmap(Se),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ot=0,dt=j.length;ot<dt;ot++){const pt=j[ot],{object:at,geometry:Ge,material:lt,group:rt}=pt;if(lt.side===En&&at.layers.test(ae.layers)){const Lt=lt.side;lt.side=Kt,lt.needsUpdate=!0,bn(at,V,ae,Ge,lt,rt),lt.side=Lt,lt.needsUpdate=!0,Ze=!0}}Ze===!0&&(be.updateMultisampleRenderTarget(Se),be.updateRenderTargetMipmap(Se))}T.setRenderTarget(ke,Oe,We),T.setClearColor(z,ne),Ve!==void 0&&(ae.viewport=Ve),T.toneMapping=Ye}function Mt(C,j,V){const ae=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Se=C.length;Z<Se;Z++){const Le=C[Z],{object:ke,geometry:Oe,group:We}=Le;let Ye=Le.material;Ye.allowOverride===!0&&ae!==null&&(Ye=ae),ke.layers.test(V.layers)&&bn(ke,j,V,Oe,Ye,We)}}function bn(C,j,V,ae,Z,Se){C.onBeforeRender(T,j,V,ae,Z,Se),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(T,j,V,ae,C,Se),Z.transparent===!0&&Z.side===En&&Z.forceSinglePass===!1?(Z.side=Kt,Z.needsUpdate=!0,T.renderBufferDirect(V,j,ae,Z,C,Se),Z.side=Qn,Z.needsUpdate=!0,T.renderBufferDirect(V,j,ae,Z,C,Se),Z.side=En):T.renderBufferDirect(V,j,ae,Z,C,Se),C.onAfterRender(T,j,V,ae,Z,Se)}function ni(C,j,V){j.isScene!==!0&&(j=de);const ae=J.get(C),Z=v.state.lights,Se=v.state.shadowsArray,Le=Z.state.version,ke=q.getParameters(C,Z.state,Se,j,V),Oe=q.getProgramCacheKey(ke);let We=ae.programs;ae.environment=C.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(C.isMeshStandardMaterial?_:E).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",Ne),We=new Map,ae.programs=We);let Ye=We.get(Oe);if(Ye!==void 0){if(ae.currentProgram===Ye&&ae.lightsStateVersion===Le)return Zr(C,ke),Ye}else ke.uniforms=q.getUniforms(C),C.onBeforeCompile(ke,T),Ye=q.acquireProgram(ke,Oe),We.set(Oe,Ye),ae.uniforms=ke.uniforms;const Ve=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),Zr(C,ke),ae.needsLights=ur(C),ae.lightsStateVersion=Le,ae.needsLights&&(Ve.ambientLightColor.value=Z.state.ambient,Ve.lightProbe.value=Z.state.probe,Ve.directionalLights.value=Z.state.directional,Ve.directionalLightShadows.value=Z.state.directionalShadow,Ve.spotLights.value=Z.state.spot,Ve.spotLightShadows.value=Z.state.spotShadow,Ve.rectAreaLights.value=Z.state.rectArea,Ve.ltc_1.value=Z.state.rectAreaLTC1,Ve.ltc_2.value=Z.state.rectAreaLTC2,Ve.pointLights.value=Z.state.point,Ve.pointLightShadows.value=Z.state.pointShadow,Ve.hemisphereLights.value=Z.state.hemi,Ve.directionalShadowMap.value=Z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ve.spotShadowMap.value=Z.state.spotShadowMap,Ve.spotLightMatrix.value=Z.state.spotLightMatrix,Ve.spotLightMap.value=Z.state.spotLightMap,Ve.pointShadowMap.value=Z.state.pointShadowMap,Ve.pointShadowMatrix.value=Z.state.pointShadowMatrix),ae.currentProgram=Ye,ae.uniformsList=null,Ye}function Si(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Oa.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Zr(C,j){const V=J.get(C);V.outputColorSpace=j.outputColorSpace,V.batching=j.batching,V.batchingColor=j.batchingColor,V.instancing=j.instancing,V.instancingColor=j.instancingColor,V.instancingMorph=j.instancingMorph,V.skinning=j.skinning,V.morphTargets=j.morphTargets,V.morphNormals=j.morphNormals,V.morphColors=j.morphColors,V.morphTargetsCount=j.morphTargetsCount,V.numClippingPlanes=j.numClippingPlanes,V.numIntersection=j.numClipIntersection,V.vertexAlphas=j.vertexAlphas,V.vertexTangents=j.vertexTangents,V.toneMapping=j.toneMapping}function Jr(C,j,V,ae,Z){j.isScene!==!0&&(j=de),be.resetTextureUnits();const Se=j.fog,Le=ae.isMeshStandardMaterial?j.environment:null,ke=y===null?T.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:$i,Oe=(ae.isMeshStandardMaterial?_:E).get(ae.envMap||Le),We=ae.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ye=!!V.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ve=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,ot=!!V.morphAttributes.color;let dt=Jn;ae.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(dt=T.toneMapping);const pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=pt!==void 0?pt.length:0,Ge=J.get(ae),lt=v.state.lights;if(B===!0&&(Q===!0||C!==R)){const Tt=C===R&&ae.id===D;Ee.setState(ae,C,Tt)}let rt=!1;ae.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==lt.state.version||Ge.outputColorSpace!==ke||Z.isBatchedMesh&&Ge.batching===!1||!Z.isBatchedMesh&&Ge.batching===!0||Z.isBatchedMesh&&Ge.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ge.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Z.isInstancedMesh&&Ge.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ge.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ge.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ge.instancingMorph===!1&&Z.morphTexture!==null||Ge.envMap!==Oe||ae.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ee.numPlanes||Ge.numIntersection!==Ee.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Ye||Ge.morphTargets!==Ve||Ge.morphNormals!==Ze||Ge.morphColors!==ot||Ge.toneMapping!==dt||Ge.morphTargetsCount!==at)&&(rt=!0):(rt=!0,Ge.__version=ae.version);let Lt=Ge.currentProgram;rt===!0&&(Lt=ni(ae,j,Z));let Mn=!1,gt=!1,ii=!1;const ut=Lt.getUniforms(),St=Ge.uniforms;if(he.useProgram(Lt.program)&&(Mn=!0,gt=!0,ii=!0),ae.id!==D&&(D=ae.id,gt=!0),Mn||R!==C){he.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",C.projectionMatrix),ut.setValue(U,"viewMatrix",C.matrixWorldInverse);const At=ut.map.cameraPosition;At!==void 0&&At.setValue(U,me.setFromMatrixPosition(C.matrixWorld)),_e.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&ut.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,gt=!0,ii=!0)}if(Z.isSkinnedMesh){ut.setOptional(U,Z,"bindMatrix"),ut.setOptional(U,Z,"bindMatrixInverse");const Tt=Z.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),ut.setValue(U,"boneTexture",Tt.boneTexture,be))}Z.isBatchedMesh&&(ut.setOptional(U,Z,"batchingTexture"),ut.setValue(U,"batchingTexture",Z._matricesTexture,be),ut.setOptional(U,Z,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",Z._indirectTexture,be),ut.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",Z._colorsTexture,be));const Ot=V.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&ve.update(Z,V,Lt),(gt||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,ut.setValue(U,"receiveShadow",Z.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(St.envMap.value=Oe,St.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(St.envMapIntensity.value=j.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Fg()),gt&&(ut.setValue(U,"toneMappingExposure",T.toneMappingExposure),Ge.needsLights&&Ti(St,ii),Se&&ae.fog===!0&&ye.refreshFogUniforms(St,Se),ye.refreshMaterialUniforms(St,ae,W,H,v.state.transmissionRenderTarget[C.id]),Oa.upload(U,Si(Ge),St,be)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Oa.upload(U,Si(Ge),St,be),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&ut.setValue(U,"center",Z.center),ut.setValue(U,"modelViewMatrix",Z.modelViewMatrix),ut.setValue(U,"normalMatrix",Z.normalMatrix),ut.setValue(U,"modelMatrix",Z.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Tt=ae.uniformsGroups;for(let At=0,ri=Tt.length;At<ri;At++){const Sn=Tt[At];ce.update(Sn,Lt),ce.bind(Sn,Lt)}}return Lt}function Ti(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function ur(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,j,V){const ae=J.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),J.get(C.texture).__webglTexture=j,J.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:V,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const V=J.get(C);V.__webglFramebuffer=j,V.__useDefaultFramebuffer=j===void 0};const es=U.createFramebuffer();this.setRenderTarget=function(C,j=0,V=0){y=C,P=j,S=V;let ae=!0,Z=null,Se=!1,Le=!1;if(C){const Oe=J.get(C);if(Oe.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(U.FRAMEBUFFER,null),ae=!1;else if(Oe.__webglFramebuffer===void 0)be.setupRenderTarget(C);else if(Oe.__hasExternalTextures)be.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ve=C.depthTexture;if(Oe.__boundDepthTexture!==Ve){if(Ve!==null&&J.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Le=!0);const Ye=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[j])?Z=Ye[j][V]:Z=Ye[j],Se=!0):C.samples>0&&be.useMultisampledRTT(C)===!1?Z=J.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?Z=Ye[V]:Z=Ye,L.copy(C.viewport),N.copy(C.scissor),G=C.scissorTest}else L.copy(ee).multiplyScalar(W).floor(),N.copy(ie).multiplyScalar(W).floor(),G=$;if(V!==0&&(Z=es),he.bindFramebuffer(U.FRAMEBUFFER,Z)&&ae&&he.drawBuffers(C,Z),he.viewport(L),he.scissor(N),he.setScissorTest(G),Se){const Oe=J.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,V)}else if(Le){const Oe=j;for(let We=0;We<C.textures.length;We++){const Ye=J.get(C.textures[We]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+We,Ye.__webglTexture,V,Oe)}}else if(C!==null&&V!==0){const Oe=J.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Oe.__webglTexture,V)}D=-1},this.readRenderTargetPixels=function(C,j,V,ae,Z,Se,Le,ke=0){if(!(C&&C.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){he.bindFramebuffer(U.FRAMEBUFFER,Oe);try{const We=C.textures[ke],Ye=We.format,Ve=We.type;if(!_e.textureFormatReadable(Ye)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ve)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ae&&V>=0&&V<=C.height-Z&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ke),U.readPixels(j,V,ae,Z,ze.convert(Ye),ze.convert(Ve),Se))}finally{const We=y!==null?J.get(y).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,j,V,ae,Z,Se,Le,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(j>=0&&j<=C.width-ae&&V>=0&&V<=C.height-Z){he.bindFramebuffer(U.FRAMEBUFFER,Oe);const We=C.textures[ke],Ye=We.format,Ve=We.type;if(!_e.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ke),U.readPixels(j,V,ae,Z,ze.convert(Ye),ze.convert(Ve),0);const ot=y!==null?J.get(y).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,ot);const dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nh(U,dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.deleteBuffer(Ze),U.deleteSync(dt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,V=0){const ae=Math.pow(2,-V),Z=Math.floor(C.image.width*ae),Se=Math.floor(C.image.height*ae),Le=j!==null?j.x:0,ke=j!==null?j.y:0;be.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Le,ke,Z,Se),he.unbindTexture()};const Qr=U.createFramebuffer(),Ei=U.createFramebuffer();this.copyTextureToTexture=function(C,j,V=null,ae=null,Z=0,Se=null){Se===null&&(Z!==0?(Vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Z,Z=0):Se=0);let Le,ke,Oe,We,Ye,Ve,Ze,ot,dt;const pt=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(V!==null)Le=V.max.x-V.min.x,ke=V.max.y-V.min.y,Oe=V.isBox3?V.max.z-V.min.z:1,We=V.min.x,Ye=V.min.y,Ve=V.isBox3?V.min.z:0;else{const Ot=Math.pow(2,-Z);Le=Math.floor(pt.width*Ot),ke=Math.floor(pt.height*Ot),C.isDataArrayTexture?Oe=pt.depth:C.isData3DTexture?Oe=Math.floor(pt.depth*Ot):Oe=1,We=0,Ye=0,Ve=0}ae!==null?(Ze=ae.x,ot=ae.y,dt=ae.z):(Ze=0,ot=0,dt=0);const at=ze.convert(j.format),Ge=ze.convert(j.type);let lt;j.isData3DTexture?(be.setTexture3D(j,0),lt=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(be.setTexture2DArray(j,0),lt=U.TEXTURE_2D_ARRAY):(be.setTexture2D(j,0),lt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const rt=U.getParameter(U.UNPACK_ROW_LENGTH),Lt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mn=U.getParameter(U.UNPACK_SKIP_PIXELS),gt=U.getParameter(U.UNPACK_SKIP_ROWS),ii=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const ut=C.isDataArrayTexture||C.isData3DTexture,St=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Ot=J.get(C),Tt=J.get(j),At=J.get(Ot.__renderTarget),ri=J.get(Tt.__renderTarget);he.bindFramebuffer(U.READ_FRAMEBUFFER,At.__webglFramebuffer),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Sn=0;Sn<Oe;Sn++)ut&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(C).__webglTexture,Z,Ve+Sn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(j).__webglTexture,Se,dt+Sn)),U.blitFramebuffer(We,Ye,Le,ke,Ze,ot,Le,ke,U.DEPTH_BUFFER_BIT,U.NEAREST);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||J.has(C)){const Ot=J.get(C),Tt=J.get(j);he.bindFramebuffer(U.READ_FRAMEBUFFER,Qr),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ei);for(let At=0;At<Oe;At++)ut?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,Z,Ve+At):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ot.__webglTexture,Z),St?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,Se,dt+At):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Tt.__webglTexture,Se),Z!==0?U.blitFramebuffer(We,Ye,Le,ke,Ze,ot,Le,ke,U.COLOR_BUFFER_BIT,U.NEAREST):St?U.copyTexSubImage3D(lt,Se,Ze,ot,dt+At,We,Ye,Le,ke):U.copyTexSubImage2D(lt,Se,Ze,ot,We,Ye,Le,ke);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else St?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(lt,Se,Ze,ot,dt,Le,ke,Oe,at,Ge,pt.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(lt,Se,Ze,ot,dt,Le,ke,Oe,at,pt.data):U.texSubImage3D(lt,Se,Ze,ot,dt,Le,ke,Oe,at,Ge,pt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Ze,ot,Le,ke,at,Ge,pt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Ze,ot,pt.width,pt.height,at,pt.data):U.texSubImage2D(U.TEXTURE_2D,Se,Ze,ot,Le,ke,at,Ge,pt);U.pixelStorei(U.UNPACK_ROW_LENGTH,rt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ii),Se===0&&j.generateMipmaps&&U.generateMipmap(lt),he.unbindTexture()},this.initRenderTarget=function(C){J.get(C).__webglFramebuffer===void 0&&be.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?be.setTextureCube(C,0):C.isData3DTexture?be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?be.setTexture2DArray(C,0):be.setTexture2D(C,0),he.unbindTexture()},this.resetState=function(){P=0,S=0,y=null,he.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Og(){var a=Object.create(null);function e(n,r){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function t(n,r){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=a[o].getTransferables&&a[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(d){console.error(d),r(d)}}}function i(n,r){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var r=n.data,s=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function Bg(a){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,i=a.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var Hu=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Hu=function(){return a},a},kg=0,zg=0,Ws=!1,Ur=Object.create(null),Lr=Object.create(null),Go=Object.create(null);function cr(a){if((!a||typeof a.init!="function")&&!Ws)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,i=a.getTransferables,n=a.workerId,r=Bg(a);n==null&&(n="#default");var s="workerModule"+ ++kg,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Ws=!0,u=cr({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Ba(u)+`
)}`}),Ws=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!Hu())return r.apply(void 0,u);if(!l){l=Gc(n,"registerModule",c.workerModuleData);var h=function(){l=null,Lr[n].delete(h)};(Lr[n]||(Lr[n]=new Set)).add(h)}return l.then(function(d){var x=d.isCallable;if(x)return Gc(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:Ba(t),getTransferables:i&&Ba(i)},c.onMainThread=r,c}function Vg(a){Lr[a]&&Lr[a].forEach(function(e){e()}),Ur[a]&&(Ur[a].terminate(),delete Ur[a])}function Ba(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Gg(a){var e=Ur[a];if(!e){var t=Ba(Og);e=Ur[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,s=Go[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete Go[r],s(n)}}return e}function Gc(a,e,t){return new Promise(function(i,n){var r=++zg;Go[r]=function(s){s.success?i(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},Gg(a).postMessage({messageId:r,action:e,data:t})})}function Wu(){var a=(function(e){function t(H,W,I,X,ee,ie,$,k){var B=1-$;k.x=B*B*H+2*B*$*I+$*$*ee,k.y=B*B*W+2*B*$*X+$*$*ie}function i(H,W,I,X,ee,ie,$,k,B,Q){var pe=1-B;Q.x=pe*pe*pe*H+3*pe*pe*B*I+3*pe*B*B*ee+B*B*B*$,Q.y=pe*pe*pe*W+3*pe*pe*B*X+3*pe*B*B*ie+B*B*B*k}function n(H,W){for(var I=/([MLQCZ])([^MLQCZ]*)/g,X,ee,ie,$,k;X=I.exec(H);){var B=X[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(Q){return parseFloat(Q)});switch(X[1]){case"M":$=ee=B[0],k=ie=B[1];break;case"L":(B[0]!==$||B[1]!==k)&&W("L",$,k,$=B[0],k=B[1]);break;case"Q":{W("Q",$,k,$=B[2],k=B[3],B[0],B[1]);break}case"C":{W("C",$,k,$=B[4],k=B[5],B[0],B[1],B[2],B[3]);break}case"Z":($!==ee||k!==ie)&&W("L",$,k,ee,ie);break}}}function r(H,W,I){I===void 0&&(I=16);var X={x:0,y:0};n(H,function(ee,ie,$,k,B,Q,pe,me,fe){switch(ee){case"L":W(ie,$,k,B);break;case"Q":{for(var de=ie,De=$,Fe=1;Fe<I;Fe++)t(ie,$,Q,pe,k,B,Fe/(I-1),X),W(de,De,X.x,X.y),de=X.x,De=X.y;break}case"C":{for(var U=ie,Ae=$,Ue=1;Ue<I;Ue++)i(ie,$,Q,pe,me,fe,k,B,Ue/(I-1),X),W(U,Ae,X.x,X.y),U=X.x,Ae=X.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(H,W){var I=H.getContext?H.getContext("webgl",c):H,X=l.get(I);if(!X){let U=function(J){var be=ie[J];if(!be&&(be=ie[J]=I.getExtension(J),!be))throw new Error(J+" not supported");return be},Ae=function(J,be){var E=I.createShader(be);return I.shaderSource(E,J),I.compileShader(E),E},Ue=function(J,be,E,_){if(!$[J]){var O={},se={},te=I.createProgram();I.attachShader(te,Ae(be,I.VERTEX_SHADER)),I.attachShader(te,Ae(E,I.FRAGMENT_SHADER)),I.linkProgram(te),$[J]={program:te,transaction:function(ye){I.useProgram(te),ye({setUniform:function(Ce,Ee){for(var oe=[],le=arguments.length-2;le-- >0;)oe[le]=arguments[le+2];var ve=se[Ee]||(se[Ee]=I.getUniformLocation(te,Ee));I["uniform"+Ce].apply(I,[ve].concat(oe))},setAttribute:function(Ce,Ee,oe,le,ve){var Re=O[Ce];Re||(Re=O[Ce]={buf:I.createBuffer(),loc:I.getAttribLocation(te,Ce),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Re.buf),I.vertexAttribPointer(Re.loc,Ee,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Re.loc),ee?I.vertexAttribDivisor(Re.loc,le):U("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Re.loc,le),ve!==Re.data&&(I.bufferData(I.ARRAY_BUFFER,ve,oe),Re.data=ve)}})}}}$[J].transaction(_)},_e=function(J,be){B++;try{I.activeTexture(I.TEXTURE0+B);var E=k[J];E||(E=k[J]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,E),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,E),be(E,B)}finally{B--}},he=function(J,be,E){var _=I.createFramebuffer();Q.push(_),I.bindFramebuffer(I.FRAMEBUFFER,_),I.activeTexture(I.TEXTURE0+be),I.bindTexture(I.TEXTURE_2D,J),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,J,0);try{E(_)}finally{I.deleteFramebuffer(_),I.bindFramebuffer(I.FRAMEBUFFER,Q[--Q.length-1]||null)}},we=function(){ie={},$={},k={},B=-1,Q.length=0};var pe=U,me=Ae,fe=Ue,de=_e,De=he,Fe=we,ee=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,ie={},$={},k={},B=-1,Q=[];I.canvas.addEventListener("webglcontextlost",function(J){we(),J.preventDefault()},!1),l.set(I,X={gl:I,isWebGL2:ee,getExtension:U,withProgram:Ue,withTexture:_e,withTextureFramebuffer:he,handleContextLoss:we})}W(X)}function f(H,W,I,X,ee,ie,$,k){$===void 0&&($=15),k===void 0&&(k=null),u(H,function(B){var Q=B.gl,pe=B.withProgram,me=B.withTexture;me("copy",function(fe,de){Q.texImage2D(Q.TEXTURE_2D,0,Q.RGBA,ee,ie,0,Q.RGBA,Q.UNSIGNED_BYTE,W),pe("copy",s,o,function(De){var Fe=De.setUniform,U=De.setAttribute;U("aUV",2,Q.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Fe("1i","image",de),Q.bindFramebuffer(Q.FRAMEBUFFER,k||null),Q.disable(Q.BLEND),Q.colorMask($&8,$&4,$&2,$&1),Q.viewport(I,X,ee,ie),Q.scissor(I,X,ee,ie),Q.drawArrays(Q.TRIANGLES,0,3)})})})}function h(H,W,I){var X=H.width,ee=H.height;u(H,function(ie){var $=ie.gl,k=new Uint8Array(X*ee*4);$.readPixels(0,0,X,ee,$.RGBA,$.UNSIGNED_BYTE,k),H.width=W,H.height=I,f($,k,0,0,X,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function x(H,W,I,X,ee,ie){ie===void 0&&(ie=1);var $=new Uint8Array(H*W),k=X[2]-X[0],B=X[3]-X[1],Q=[];r(I,function(U,Ae,Ue,_e){Q.push({x1:U,y1:Ae,x2:Ue,y2:_e,minX:Math.min(U,Ue),minY:Math.min(Ae,_e),maxX:Math.max(U,Ue),maxY:Math.max(Ae,_e)})}),Q.sort(function(U,Ae){return U.maxX-Ae.maxX});for(var pe=0;pe<H;pe++)for(var me=0;me<W;me++){var fe=De(X[0]+k*(pe+.5)/H,X[1]+B*(me+.5)/W),de=Math.pow(1-Math.abs(fe)/ee,ie)/2;fe<0&&(de=1-de),de=Math.max(0,Math.min(255,Math.round(de*255))),$[me*H+pe]=de}return $;function De(U,Ae){for(var Ue=1/0,_e=1/0,he=Q.length;he--;){var we=Q[he];if(we.maxX+_e<=U)break;if(U+_e>we.minX&&Ae-_e<we.maxY&&Ae+_e>we.minY){var J=p(U,Ae,we.x1,we.y1,we.x2,we.y2);J<Ue&&(Ue=J,_e=Math.sqrt(Ue))}}return Fe(U,Ae)&&(_e=-_e),_e}function Fe(U,Ae){for(var Ue=0,_e=Q.length;_e--;){var he=Q[_e];if(he.maxX<=U)break;var we=he.y1>Ae!=he.y2>Ae&&U<(he.x2-he.x1)*(Ae-he.y1)/(he.y2-he.y1)+he.x1;we&&(Ue+=he.y1<he.y2?1:-1)}return Ue!==0}}function g(H,W,I,X,ee,ie,$,k,B,Q){ie===void 0&&(ie=1),k===void 0&&(k=0),B===void 0&&(B=0),Q===void 0&&(Q=0),m(H,W,I,X,ee,ie,$,null,k,B,Q)}function m(H,W,I,X,ee,ie,$,k,B,Q,pe){ie===void 0&&(ie=1),B===void 0&&(B=0),Q===void 0&&(Q=0),pe===void 0&&(pe=0);for(var me=x(H,W,I,X,ee,ie),fe=new Uint8Array(me.length*4),de=0;de<me.length;de++)fe[de*4+pe]=me[de];f($,fe,B,Q,H,W,1<<3-pe,k)}function p(H,W,I,X,ee,ie){var $=ee-I,k=ie-X,B=$*$+k*k,Q=B?Math.max(0,Math.min(1,((H-I)*$+(W-X)*k)/B)):0,pe=H-(I+Q*$),me=W-(X+Q*k);return pe*pe+me*me}var b=Object.freeze({__proto__:null,generate:x,generateIntoCanvas:g,generateIntoFramebuffer:m}),v="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",M="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",A="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",T=new Float32Array([0,0,2,0,0,2]),w=null,P=!1,S={},y=new WeakMap;function D(H){if(!P&&!G(H))throw new Error("WebGL generation not supported")}function R(H,W,I,X,ee,ie,$){if(ie===void 0&&(ie=1),$===void 0&&($=null),!$&&($=w,!$)){var k=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!k)throw new Error("OffscreenCanvas or DOM canvas not supported");$=w=k.getContext("webgl",{depth:!1})}D($);var B=new Uint8Array(H*W*4);u($,function(fe){var de=fe.gl,De=fe.withTexture,Fe=fe.withTextureFramebuffer;De("readable",function(U,Ae){de.texImage2D(de.TEXTURE_2D,0,de.RGBA,H,W,0,de.RGBA,de.UNSIGNED_BYTE,null),Fe(U,Ae,function(Ue){N(H,W,I,X,ee,ie,de,Ue,0,0,0),de.readPixels(0,0,H,W,de.RGBA,de.UNSIGNED_BYTE,B)})})});for(var Q=new Uint8Array(H*W),pe=0,me=0;pe<B.length;pe+=4)Q[me++]=B[pe];return Q}function L(H,W,I,X,ee,ie,$,k,B,Q){ie===void 0&&(ie=1),k===void 0&&(k=0),B===void 0&&(B=0),Q===void 0&&(Q=0),N(H,W,I,X,ee,ie,$,null,k,B,Q)}function N(H,W,I,X,ee,ie,$,k,B,Q,pe){ie===void 0&&(ie=1),B===void 0&&(B=0),Q===void 0&&(Q=0),pe===void 0&&(pe=0),D($);var me=[];r(I,function(fe,de,De,Fe){me.push(fe,de,De,Fe)}),me=new Float32Array(me),u($,function(fe){var de=fe.gl,De=fe.isWebGL2,Fe=fe.getExtension,U=fe.withProgram,Ae=fe.withTexture,Ue=fe.withTextureFramebuffer,_e=fe.handleContextLoss;if(Ae("rawDistances",function(he,we){(H!==he._lastWidth||W!==he._lastHeight)&&de.texImage2D(de.TEXTURE_2D,0,de.RGBA,he._lastWidth=H,he._lastHeight=W,0,de.RGBA,de.UNSIGNED_BYTE,null),U("main",v,M,function(J){var be=J.setAttribute,E=J.setUniform,_=!De&&Fe("ANGLE_instanced_arrays"),O=!De&&Fe("EXT_blend_minmax");be("aUV",2,de.STATIC_DRAW,0,T),be("aLineSegment",4,de.DYNAMIC_DRAW,1,me),E.apply(void 0,["4f","uGlyphBounds"].concat(X)),E("1f","uMaxDistance",ee),E("1f","uExponent",ie),Ue(he,we,function(se){de.enable(de.BLEND),de.colorMask(!0,!0,!0,!0),de.viewport(0,0,H,W),de.scissor(0,0,H,W),de.blendFunc(de.ONE,de.ONE),de.blendEquationSeparate(de.FUNC_ADD,De?de.MAX:O.MAX_EXT),de.clear(de.COLOR_BUFFER_BIT),De?de.drawArraysInstanced(de.TRIANGLES,0,3,me.length/4):_.drawArraysInstancedANGLE(de.TRIANGLES,0,3,me.length/4)})}),U("post",s,A,function(J){J.setAttribute("aUV",2,de.STATIC_DRAW,0,T),J.setUniform("1i","tex",we),de.bindFramebuffer(de.FRAMEBUFFER,k),de.disable(de.BLEND),de.colorMask(pe===0,pe===1,pe===2,pe===3),de.viewport(B,Q,H,W),de.scissor(B,Q,H,W),de.drawArrays(de.TRIANGLES,0,3)})}),de.isContextLost())throw _e(),new Error("webgl context lost")})}function G(H){var W=!H||H===w?S:H.canvas||H,I=y.get(W);if(I===void 0){P=!0;var X=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],ie=R(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,H);I=ie&&ee.length===ie.length&&ie.every(function($,k){return $===ee[k]}),I||(X="bad trial run results",console.info(ee,ie))}catch($){I=!1,X=$.message}X&&console.warn("WebGL SDF generation not supported:",X),P=!1,y.set(W,I)}return I}var z=Object.freeze({__proto__:null,generate:R,generateIntoCanvas:L,generateIntoFramebuffer:N,isSupported:G});function ne(H,W,I,X,ee,ie){ee===void 0&&(ee=Math.max(X[2]-X[0],X[3]-X[1])/2),ie===void 0&&(ie=1);try{return R.apply(z,arguments)}catch($){return console.info("WebGL SDF generation failed, falling back to JS",$),x.apply(b,arguments)}}function Y(H,W,I,X,ee,ie,$,k,B,Q){ee===void 0&&(ee=Math.max(X[2]-X[0],X[3]-X[1])/2),ie===void 0&&(ie=1),k===void 0&&(k=0),B===void 0&&(B=0),Q===void 0&&(Q=0);try{return L.apply(z,arguments)}catch(pe){return console.info("WebGL SDF generation failed, falling back to JS",pe),g.apply(b,arguments)}}return e.forEachPathCommand=n,e.generate=ne,e.generateIntoCanvas=Y,e.javascript=b,e.pathToLineSegments=r,e.webgl=z,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}function Hg(){var a=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(_e,he){i[_e]=1<<he+1,n[i[_e]]=_e}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,s=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function f(){if(!u){u=new Map;var _e=function(we){if(t.hasOwnProperty(we)){var J=0;t[we].split(",").forEach(function(be){var E=be.split("+"),_=E[0],O=E[1];_=parseInt(_,36),O=O?parseInt(O,36):0,u.set(J+=_,i[we]);for(var se=0;se<O;se++)u.set(++J,i[we])})}};for(var he in t)_e(he)}}function h(_e){return f(),u.get(_e.codePointAt(0))||i.L}function d(_e){return n[h(_e)]}var x={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(_e,he){var we=36,J=0,be=new Map,E=he&&new Map,_;return _e.split(",").forEach(function O(se){if(se.indexOf("+")!==-1)for(var te=+se;te--;)O(_);else{_=se;var q=se.split(">"),ye=q[0],ge=q[1];ye=String.fromCodePoint(J+=parseInt(ye,we)),ge=String.fromCodePoint(J+=parseInt(ge,we)),be.set(ye,ge),he&&E.set(ge,ye)}}),{map:be,reverseMap:E}}var m,p,b;function v(){if(!m){var _e=g(x.pairs,!0),he=_e.map,we=_e.reverseMap;m=he,p=we,b=g(x.canonical,!1).map}}function M(_e){return v(),m.get(_e)||null}function A(_e){return v(),p.get(_e)||null}function T(_e){return v(),b.get(_e)||null}var w=i.L,P=i.R,S=i.EN,y=i.ES,D=i.ET,R=i.AN,L=i.CS,N=i.B,G=i.S,z=i.ON,ne=i.BN,Y=i.NSM,H=i.AL,W=i.LRO,I=i.RLO,X=i.LRE,ee=i.RLE,ie=i.PDF,$=i.LRI,k=i.RLI,B=i.FSI,Q=i.PDI;function pe(_e,he){for(var we=125,J=new Uint32Array(_e.length),be=0;be<_e.length;be++)J[be]=h(_e[be]);var E=new Map;function _(Wt,un){var Xt=J[Wt];J[Wt]=un,E.set(Xt,E.get(Xt)-1),Xt&o&&E.set(o,E.get(o)-1),E.set(un,(E.get(un)||0)+1),un&o&&E.set(o,(E.get(o)||0)+1)}for(var O=new Uint8Array(_e.length),se=new Map,te=[],q=null,ye=0;ye<_e.length;ye++)q||te.push(q={start:ye,end:_e.length-1,level:he==="rtl"?1:he==="ltr"?0:Tl(ye,!1)}),J[ye]&N&&(q.end=ye,q=null);for(var ge=ee|X|I|W|r|Q|ie|N,Ce=function(Wt){return Wt+(Wt&1?1:2)},Ee=function(Wt){return Wt+(Wt&1?2:1)},oe=0;oe<te.length;oe++){q=te[oe];var le=[{_level:q.level,_override:0,_isolate:0}],ve=void 0,Re=0,Me=0,ze=0;E.clear();for(var F=q.start;F<=q.end;F++){var ce=J[F];if(ve=le[le.length-1],E.set(ce,(E.get(ce)||0)+1),ce&o&&E.set(o,(E.get(o)||0)+1),ce&ge)if(ce&(ee|X)){O[F]=ve._level;var xe=(ce===ee?Ee:Ce)(ve._level);xe<=we&&!Re&&!Me?le.push({_level:xe,_override:0,_isolate:0}):Re||Me++}else if(ce&(I|W)){O[F]=ve._level;var Te=(ce===I?Ee:Ce)(ve._level);Te<=we&&!Re&&!Me?le.push({_level:Te,_override:ce&I?P:w,_isolate:0}):Re||Me++}else if(ce&r){ce&B&&(ce=Tl(F+1,!0)===1?k:$),O[F]=ve._level,ve._override&&_(F,ve._override);var ue=(ce===k?Ee:Ce)(ve._level);ue<=we&&Re===0&&Me===0?(ze++,le.push({_level:ue,_override:0,_isolate:1,_isolInitIndex:F})):Re++}else if(ce&Q){if(Re>0)Re--;else if(ze>0){for(Me=0;!le[le.length-1]._isolate;)le.pop();var re=le[le.length-1]._isolInitIndex;re!=null&&(se.set(re,F),se.set(F,re)),le.pop(),ze--}ve=le[le.length-1],O[F]=ve._level,ve._override&&_(F,ve._override)}else ce&ie?(Re===0&&(Me>0?Me--:!ve._isolate&&le.length>1&&(le.pop(),ve=le[le.length-1])),O[F]=ve._level):ce&N&&(O[F]=q.level);else O[F]=ve._level,ve._override&&ce!==ne&&_(F,ve._override)}for(var Pe=[],Ne=null,Be=q.start;Be<=q.end;Be++){var Xe=J[Be];if(!(Xe&l)){var ht=O[Be],ct=Xe&r,yt=Xe===Q;Ne&&ht===Ne._level?(Ne._end=Be,Ne._endsWithIsolInit=ct):Pe.push(Ne={_start:Be,_end:Be,_level:ht,_startsWithPDI:yt,_endsWithIsolInit:ct})}}for(var Ht=[],ln=0;ln<Pe.length;ln++){var Ut=Pe[ln];if(!Ut._startsWithPDI||Ut._startsWithPDI&&!se.has(Ut._start)){for(var nn=[Ne=Ut],yn=void 0;Ne&&Ne._endsWithIsolInit&&(yn=se.get(Ne._end))!=null;)for(var rn=ln+1;rn<Pe.length;rn++)if(Pe[rn]._start===yn){nn.push(Ne=Pe[rn]);break}for(var Mt=[],bn=0;bn<nn.length;bn++)for(var ni=nn[bn],Si=ni._start;Si<=ni._end;Si++)Mt.push(Si);for(var Zr=O[Mt[0]],Jr=q.level,Ti=Mt[0]-1;Ti>=0;Ti--)if(!(J[Ti]&l)){Jr=O[Ti];break}var ur=Mt[Mt.length-1],es=O[ur],Qr=q.level;if(!(J[ur]&r)){for(var Ei=ur+1;Ei<=q.end;Ei++)if(!(J[Ei]&l)){Qr=O[Ei];break}}Ht.push({_seqIndices:Mt,_sosType:Math.max(Jr,Zr)%2?P:w,_eosType:Math.max(Qr,es)%2?P:w})}}for(var C=0;C<Ht.length;C++){var j=Ht[C],V=j._seqIndices,ae=j._sosType,Z=j._eosType,Se=O[V[0]]&1?P:w;if(E.get(Y))for(var Le=0;Le<V.length;Le++){var ke=V[Le];if(J[ke]&Y){for(var Oe=ae,We=Le-1;We>=0;We--)if(!(J[V[We]]&l)){Oe=J[V[We]];break}_(ke,Oe&(r|Q)?z:Oe)}}if(E.get(S))for(var Ye=0;Ye<V.length;Ye++){var Ve=V[Ye];if(J[Ve]&S)for(var Ze=Ye-1;Ze>=-1;Ze--){var ot=Ze===-1?ae:J[V[Ze]];if(ot&s){ot===H&&_(Ve,R);break}}}if(E.get(H))for(var dt=0;dt<V.length;dt++){var pt=V[dt];J[pt]&H&&_(pt,P)}if(E.get(y)||E.get(L))for(var at=1;at<V.length-1;at++){var Ge=V[at];if(J[Ge]&(y|L)){for(var lt=0,rt=0,Lt=at-1;Lt>=0&&(lt=J[V[Lt]],!!(lt&l));Lt--);for(var Mn=at+1;Mn<V.length&&(rt=J[V[Mn]],!!(rt&l));Mn++);lt===rt&&(J[Ge]===y?lt===S:lt&(S|R))&&_(Ge,lt)}}if(E.get(S))for(var gt=0;gt<V.length;gt++){var ii=V[gt];if(J[ii]&S){for(var ut=gt-1;ut>=0&&J[V[ut]]&(D|l);ut--)_(V[ut],S);for(gt++;gt<V.length&&J[V[gt]]&(D|l|S);gt++)J[V[gt]]!==S&&_(V[gt],S)}}if(E.get(D)||E.get(y)||E.get(L))for(var St=0;St<V.length;St++){var Ot=V[St];if(J[Ot]&(D|y|L)){_(Ot,z);for(var Tt=St-1;Tt>=0&&J[V[Tt]]&l;Tt--)_(V[Tt],z);for(var At=St+1;At<V.length&&J[V[At]]&l;At++)_(V[At],z)}}if(E.get(S))for(var ri=0,Sn=ae;ri<V.length;ri++){var dl=V[ri],ts=J[dl];ts&S?Sn===w&&_(dl,w):ts&s&&(Sn=ts)}if(E.get(o)){var fr=P|S|R,pl=fr|w,$r=[];{for(var Ai=[],wi=0;wi<V.length;wi++)if(J[V[wi]]&o){var hr=_e[V[wi]],ml=void 0;if(M(hr)!==null)if(Ai.length<63)Ai.push({char:hr,seqIndex:wi});else break;else if((ml=A(hr))!==null)for(var dr=Ai.length-1;dr>=0;dr--){var ns=Ai[dr].char;if(ns===ml||ns===A(T(hr))||M(T(ns))===hr){$r.push([Ai[dr].seqIndex,wi]),Ai.length=dr;break}}}$r.sort(function(Wt,un){return Wt[0]-un[0]})}for(var is=0;is<$r.length;is++){for(var xl=$r[is],ea=xl[0],rs=xl[1],gl=!1,cn=0,as=ea+1;as<rs;as++){var vl=V[as];if(J[vl]&pl){gl=!0;var _l=J[vl]&fr?P:w;if(_l===Se){cn=_l;break}}}if(gl&&!cn){cn=ae;for(var ss=ea-1;ss>=0;ss--){var yl=V[ss];if(J[yl]&pl){var bl=J[yl]&fr?P:w;bl!==Se?cn=bl:cn=Se;break}}}if(cn){if(J[V[ea]]=J[V[rs]]=cn,cn!==Se){for(var pr=ea+1;pr<V.length;pr++)if(!(J[V[pr]]&l)){h(_e[V[pr]])&Y&&(J[V[pr]]=cn);break}}if(cn!==Se){for(var mr=rs+1;mr<V.length;mr++)if(!(J[V[mr]]&l)){h(_e[V[mr]])&Y&&(J[V[mr]]=cn);break}}}}for(var zn=0;zn<V.length;zn++)if(J[V[zn]]&o){for(var Ml=zn,os=zn,ls=ae,xr=zn-1;xr>=0;xr--)if(J[V[xr]]&l)Ml=xr;else{ls=J[V[xr]]&fr?P:w;break}for(var Sl=Z,gr=zn+1;gr<V.length;gr++)if(J[V[gr]]&(o|l))os=gr;else{Sl=J[V[gr]]&fr?P:w;break}for(var cs=Ml;cs<=os;cs++)J[V[cs]]=ls===Sl?ls:Se;zn=os}}}for(var Zt=q.start;Zt<=q.end;Zt++){var ff=O[Zt],ta=J[Zt];if(ff&1?ta&(w|S|R)&&O[Zt]++:ta&P?O[Zt]++:ta&(R|S)&&(O[Zt]+=2),ta&l&&(O[Zt]=Zt===0?q.level:O[Zt-1]),Zt===q.end||h(_e[Zt])&(G|N))for(var na=Zt;na>=0&&h(_e[na])&c;na--)O[na]=q.level}}return{levels:O,paragraphs:te};function Tl(Wt,un){for(var Xt=Wt;Xt<_e.length;Xt++){var Vn=J[Xt];if(Vn&(P|H))return 1;if(Vn&(N|w)||un&&Vn===Q)return 0;if(Vn&r){var El=hf(Xt);Xt=El===-1?_e.length:El}}return 0}function hf(Wt){for(var un=1,Xt=Wt+1;Xt<_e.length;Xt++){var Vn=J[Xt];if(Vn&N)break;if(Vn&Q){if(--un===0)return Xt}else Vn&r&&un++}return-1}}var me="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",fe;function de(){if(!fe){var _e=g(me,!0),he=_e.map,we=_e.reverseMap;we.forEach(function(J,be){he.set(be,J)}),fe=he}}function De(_e){return de(),fe.get(_e)||null}function Fe(_e,he,we,J){var be=_e.length;we=Math.max(0,we==null?0:+we),J=Math.min(be-1,J==null?be-1:+J);for(var E=new Map,_=we;_<=J;_++)if(he[_]&1){var O=De(_e[_]);O!==null&&E.set(_,O)}return E}function U(_e,he,we,J){var be=_e.length;we=Math.max(0,we==null?0:+we),J=Math.min(be-1,J==null?be-1:+J);var E=[];return he.paragraphs.forEach(function(_){var O=Math.max(we,_.start),se=Math.min(J,_.end);if(O<se){for(var te=he.levels.slice(O,se+1),q=se;q>=O&&h(_e[q])&c;q--)te[q]=_.level;for(var ye=_.level,ge=1/0,Ce=0;Ce<te.length;Ce++){var Ee=te[Ce];Ee>ye&&(ye=Ee),Ee<ge&&(ge=Ee|1)}for(var oe=ye;oe>=ge;oe--)for(var le=0;le<te.length;le++)if(te[le]>=oe){for(var ve=le;le+1<te.length&&te[le+1]>=oe;)le++;le>ve&&E.push([ve+O,le+O])}}}),E}function Ae(_e,he,we,J){var be=Ue(_e,he,we,J),E=[].concat(_e);return be.forEach(function(_,O){E[O]=(he.levels[_]&1?De(_e[_]):null)||_e[_]}),E.join("")}function Ue(_e,he,we,J){for(var be=U(_e,he,we,J),E=[],_=0;_<_e.length;_++)E[_]=_;return be.forEach(function(O){for(var se=O[0],te=O[1],q=E.slice(se,te+1),ye=q.length;ye--;)E[te-ye]=q[ye]}),E}return e.closingToOpeningBracket=A,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=T,e.getEmbeddingLevels=pe,e.getMirroredCharacter=De,e.getMirroredCharactersMap=Fe,e.getReorderSegments=U,e.getReorderedIndices=Ue,e.getReorderedString=Ae,e.openingToClosingBracket=M,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}const Xu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ho(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Je[n];return r?Ho(r):i}return a.replace(e,t)}const It=[];for(let a=0;a<256;a++)It[a]=(a<16?"0":"")+a.toString(16);function Wg(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[a&255]+It[a>>8&255]+It[a>>16&255]+It[a>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toUpperCase()}const fi=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(a[n]=i[n])}return a},Xg=Date.now(),Hc=new WeakMap,Wc=new Map;let Yg=1e10;function Wo(a,e){const t=Zg(e);let i=Hc.get(a);if(i||Hc.set(a,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=Wc[f];if(!h){const d=qg(this,c,e,t);h=Wc[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,fi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Xg}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:Yg++}),u.uuid=Wg(),u.uniforms=fi({},c.uniforms,e.uniforms),u.defines=fi({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=fi({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(fi(this.extensions,c.extensions),fi(this.defines,c.defines),fi(this.uniforms,bu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Wo(a.isDerivedMaterial?a.getDepthMaterial():new Uu({depthPacking:du}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Wo(a.isDerivedMaterial?a.getDistanceMaterial():new Lu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return i[t]=s,new s}function qg(a,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:x}=i;if(r=r||"",s=s||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=Ho(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ho(t)),d){let g=d({vertexShader:e,fragmentShader:t});e=g.vertexShader,t=g.fragmentShader}if(h){let g=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(g.push(m),"")),f=`${h}
${g.join(`
`)}
${f}`}if(x){const g=`
uniform float ${x};
`;r=g+r,c=g+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(g,m,p,b)=>/\battribute\s+vec[23]\s+$/.test(b.substr(0,p))?m:`troika_${m}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Xc(e,n,r,s,o),t=Xc(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function Xc(a,e,t,i,n){return(i||n||t)&&(a=a.replace(Xu,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),a}function jg(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Kg=0;const Yc=new Map;function Zg(a){const e=JSON.stringify(a,jg);let t=Yc.get(e);return t==null&&Yc.set(e,t=++Kg),t}function Jg(){return typeof window>"u"&&(self.window=self),(function(a){var e={parse:function(n){var r=e._bin,s=new Uint8Array(n);if(r.readASCII(s,0,4)=="ttcf"){var o=4;r.readUshort(s,o),o+=2,r.readUshort(s,o),o+=2;var l=r.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(s,o);o+=4,c.push(e._readFont(s,f))}return c}return[e._readFont(s,0)]},_readFont:function(n,r){var s=e._bin,o=r;s.readFixed(n,r),r+=4;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},f={},h=0;h<l;h++){var d=s.readASCII(n,r,4);r+=4,s.readUint(n,r),r+=4;var x=s.readUint(n,r);r+=4;var g=s.readUint(n,r);r+=4,f[d]={offset:x,length:g}}for(h=0;h<c.length;h++){var m=c[h];f[m]&&(u[m.trim()]=e[m.trim()].parse(n,f[m].offset,f[m].length,u))}return u},_tabOffset:function(n,r,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var f=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,f==r)return h}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,s){for(var o="",l=0;l<s;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,s){var o=e._bin._tdec;return o&&r==0&&s==n.length?o.decode(n):e._bin.readASCII(n,r,s)},readBytes:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,s,o,l){var c=e._bin,u={},f=r;c.readFixed(n,r),r+=4;var h=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var x=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+x,l),u},e._lctf.readLookupList=function(n,r,s){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+h,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,s){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var d=o.readUshort(n,r);r+=2;var x=s(n,f,l+d,c);c.tabs.push(x)}return c},e._lctf.numOfOnes=function(n){for(var r=0,s=0;s<32;s++)(n>>>s&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var s=e._bin,o=[],l=s.readUshort(n,r);if(r+=2,l==1){var c=s.readUshort(n,r);r+=2;var u=s.readUshort(n,r);r+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(s.readUshort(n,r)),r+=2}if(l==2){var h=s.readUshort(n,r);for(r+=2,f=0;f<h;f++)o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(n,r){var s=e._bin,o={};o.fmt=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=s.readUshorts(n,r,l)),o.fmt==2&&(o.tab=s.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var s=n.tab;if(n.fmt==1)return s.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(s,r);if(o!=-1)return s[o+2]+(r-s[o])}return-1},e._lctf.readFeatureList=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,r,4);r+=4;var h=s.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(s.readUshort(n,r+2*f));return l},e._lctf.readScriptList=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,r,4);r+=4;var h=s.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=s.readASCII(n,r,4);r+=4;var d=s.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var s=e._bin,o={};s.readUshort(n,r),r+=2,o.reqFeature=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.features=s.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,s){var o=e._bin;(n=new Uint8Array(n.buffer,r,s))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(n,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,r+f[u],r+f[u+1]));r+=f[f.length-1];var d=h[0],x=[];r=e.CFF.readIndex(n,r,x);var g=[];for(u=0;u<x.length-1;u++)g.push(o.readASCII(n,r+x[u],x[u+1]-x[u]));if(r+=x[x.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,x=[],r=e.CFF.readIndex(n,r,x);var m=[];for(u=0;u<x.length-1;u++)m.push(o.readBytes(n,r+x[u],x[u+1]-x[u]));d.CharStrings=m}if(d.ROS){r=d.FDArray;var p=[];for(r=e.CFF.readIndex(n,r,p),d.FDArray=[],u=0;u<p.length-1;u++){var b=e.CFF.readDict(n,r+p[u],r+p[u+1]);e.CFF._readFDict(n,b,g),d.FDArray.push(b)}r+=p[p.length-1],r=d.FDSelect,d.FDSelect=[];var v=n[r];if(r++,v!=3)throw v;var M=o.readUshort(n,r);for(r+=2,u=0;u<M+1;u++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,g),d},e.CFF._readFDict=function(n,r,s){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(n,r,s){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var f=0;f<l.length-1;f++)s.Subrs.push(o.readBytes(n,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,s){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,s){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<s;u++){var f=o.readUshort(n,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){f=o.readUshort(n,r),r+=2;var h=0;for(c==1?(h=n[r],r++):(h=o.readUshort(n,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,r,s){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)s.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,s){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,r+1)/65535,u=5),s.val=h??"o"+f,s.size=u},e.CFF.readCharString=function(n,r,s){for(var o=r+s,l=e._bin,c=[];r<o;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,d=null,x=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(x=l.readShort(n,r+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(x=u-139,h=1),247<=u&&u<=250&&(x=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(x=256*-(u-251)-f-108,h=2),u==255&&(x=l.readInt(n,r+1)/65535,h=5),c.push(x??"o"+d),r+=h}return c},e.CFF.readDict=function(n,r,s){for(var o=e._bin,l={},c=[];r<s;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,d=null,x=null;if(u==28&&(x=o.readShort(n,r+1),h=3),u==29&&(x=o.readInt(n,r+1),h=5),32<=u&&u<=246&&(x=u-139,h=1),247<=u&&u<=250&&(x=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(x=256*-(u-251)-f-108,h=2),u==255)throw x=o.readInt(n,r+1)/65535,h=5,"unknown number";if(u==30){var g=[];for(h=1;;){var m=n[r+h];h++;var p=m>>4,b=15&m;if(p!=15&&g.push(p),b!=15&&g.push(b),b==15)break}for(var v="",M=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],A=0;A<g.length;A++)v+=M[g[A]];x=parseFloat(v)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(x),r+=h}return l},e.cmap={},e.cmap.parse=function(n,r,s){n=new Uint8Array(n.buffer,r,s),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var x=o.readUint(n,r);r+=4;var g="p"+h+"e"+d,m=u.indexOf(x);if(m==-1){var p;m=l.tables.length,u.push(x);var b=o.readUshort(n,x);b==0?p=e.cmap.parse0(n,x):b==4?p=e.cmap.parse4(n,x):b==6?p=e.cmap.parse6(n,x):b==12?p=e.cmap.parse12(n,x):console.debug("unknown format: "+b,h,d,x),l.tables.push(p)}if(l[g]!=null)throw"multiple tables for one platform+encoding";l[g]=m}return l},e.cmap.parse0=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var s=e._bin,o=r,l={};l.format=s.readUshort(n,r),r+=2;var c=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2;var u=s.readUshort(n,r);r+=2;var f=u/2;l.searchRange=s.readUshort(n,r),r+=2,l.entrySelector=s.readUshort(n,r),r+=2,l.rangeShift=s.readUshort(n,r),r+=2,l.endCount=s.readUshorts(n,r,f),r+=2*f,r+=2,l.startCount=s.readUshorts(n,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(s.readShort(n,r)),r+=2;for(l.idRangeOffset=s.readUshorts(n,r,f),r+=2*f,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(s.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,o.firstCode=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,r+=2,s.readUint(n,r),r+=4,s.readUint(n,r),r+=4;var l=s.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=s.readUint(n,u+0),h=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(n,r,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var f=s.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=s.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var x=o[l];l++;for(var g=0;g<x;g++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var b=0,v=0;for(u=0;u<h;u++)b+=c.xs[u],v+=c.ys[u],c.xs[u]=b,c.ys[u]=v}else{var M;c.parts=[];do{M=s.readUshort(o,l),l+=2;var A={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(A),A.glyphIndex=s.readUshort(o,l),l+=2,1&M){var T=s.readShort(o,l);l+=2;var w=s.readShort(o,l);l+=2}else T=s.readInt8(o,l),l++,w=s.readInt8(o,l),l++;2&M?(A.m.tx=T,A.m.ty=w):(A.p1=T,A.p2=w),8&M?(A.m.a=A.m.d=s.readF2dot14(o,l),l+=2):64&M?(A.m.a=s.readF2dot14(o,l),l+=2,A.m.d=s.readF2dot14(o,l),l+=2):128&M&&(A.m.a=s.readF2dot14(o,l),l+=2,A.m.b=s.readF2dot14(o,l),l+=2,A.m.c=s.readF2dot14(o,l),l+=2,A.m.d=s.readF2dot14(o,l),l+=2)}while(32&M);if(256&M){var P=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<P;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,s,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(n,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var x=e._lctf.numOfOnes(h),g=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,s);s+=2;for(var p=0;p<m;p++){var b=c+l.readUshort(n,s);s+=2;var v=l.readUshort(n,b);b+=2;for(var M=[],A=0;A<v;A++){var T=l.readUshort(n,b);b+=2,h!=0&&(R=e.GPOS.readValueRecord(n,b,h),b+=2*x),d!=0&&(L=e.GPOS.readValueRecord(n,b,d),b+=2*g),M.push({gid2:T,val1:R,val2:L})}u.pairsets.push(M)}}if(u.fmt==2){var w=l.readUshort(n,s);s+=2;var P=l.readUshort(n,s);s+=2;var S=l.readUshort(n,s);s+=2;var y=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+w),u.classDef2=e._lctf.readClassDef(n,c+P),u.matrix=[],p=0;p<S;p++){var D=[];for(A=0;A<y;A++){var R=null,L=null;h!=0&&(R=e.GPOS.readValueRecord(n,s,h),s+=2*x),d!=0&&(L=e.GPOS.readValueRecord(n,s,d),s+=2*g),D.push({val1:R,val2:L})}u.matrix.push(D)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var N=l.readUshort(n,s);s+=2;var G=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,r):0),r+=1&s?2:0,l.push(2&s?o.readShort(n,r):0),r+=2&s?2:0,l.push(4&s?o.readShort(n,r):0),r+=4&s?2:0,l.push(8&s?o.readShort(n,r):0),r+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,r,s){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<s;d++)h.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,r){var s=e._bin,o=[],l=r,c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,s.readUshort(n,r+2)+l);f.markClass=s.readUshort(n,r),o.push(f),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var s=e._bin,o={};return o.fmt=s.readUshort(n,r),o.x=s.readShort(n,r+2),o.y=s.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var h=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,h),s+=2*u.newg.length}}else if(r==2&&u.fmt==1){h=l.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<h;d++){var x=l.readUshort(n,s)+c;s+=2;var g=l.readUshort(n,x);u.seqs.push(l.readUshorts(n,x+2,g))}}else if(r==4)for(u.vals=[],h=l.readUshort(n,s),s+=2,d=0;d<h;d++){var m=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(r==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var b=l.readUshort(n,s);for(s+=2,d=0;d<b;d++){var v=l.readUshort(n,s);s+=2,u.scset.push(v==0?null:e.GSUB.readSubClassSet(n,c+v))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(n,s),s+=2;for(var M=[],A=0;A<h;A++)M.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*A)));s+=2*h,d==0&&(u.backCvg=M),d==1&&(u.inptCvg=M),d==2&&(u.ahedCvg=M)}h=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(r==7&&u.fmt==1){var T=l.readUshort(n,s);s+=2;var w=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=T;else if(o.ltype!=T)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+w)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var s=e._bin.readUshort,o=r,l=[],c=s(n,r);r+=2;for(var u=0;u<c;u++){var f=s(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+f))}return l},e.GSUB.readSubClassRule=function(n,r){var s=e._bin.readUshort,o={},l=s(n,r),c=s(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+f))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=s.readUshort(n,r),r+=2,o.subst=s.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+f))}return l},e.GSUB.readLigature=function(n,r){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,f=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,r,s,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,s,o);var u=l.readUshort(n,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,s=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var x=d>>>8;if((x&=15)!=0)throw"unknown kern table format: "+x;r=e.kern.readFormat0(n,r,f)}return f},e.kern.parseV1=function(n,r,s,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,r),r+=4;var h=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,s){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,r);r+=2;var h=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,f!=l&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var x=s.rval[s.rval.length-1];x.glyph2.push(h),x.vals.push(d),l=f}return r},e.loca={},e.loca.parse=function(n,r,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,r+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,s){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,s){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,d=0;d<c;d++){var x=o.readUshort(n,r);r+=2;var g=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var b=o.readUshort(n,r);r+=2;var v=o.readUshort(n,r);r+=2;var M,A=f[p],T=h+12*c+v;if(x==0)M=o.readUnicode(n,T,b/2);else if(x==3&&g==0)M=o.readUnicode(n,T,b/2);else if(g==0)M=o.readASCII(n,T,b);else if(g==1)M=o.readUnicode(n,T,b/2);else if(g==3)M=o.readUnicode(n,T,b/2);else{if(x!=1)throw"unknown encoding "+g+", platformID: "+x;M=o.readASCII(n,T,b),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var w="p"+x+","+m.toString(16);l[w]==null&&(l[w]={}),l[w][A!==void 0?A:p]=M,l[w]._lang=m}for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==1033)return l[P];for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==0)return l[P];for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==3084)return l[P];for(var P in l)if(l[P].postScriptName!=null)return l[P];for(var P in l){u=P;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,s){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,r),r+=2,s.usWeightClass=o.readUshort(n,r),r+=2,s.usWidthClass=o.readUshort(n,r),r+=2,s.fsType=o.readUshort(n,r),r+=2,s.ySubscriptXSize=o.readShort(n,r),r+=2,s.ySubscriptYSize=o.readShort(n,r),r+=2,s.ySubscriptXOffset=o.readShort(n,r),r+=2,s.ySubscriptYOffset=o.readShort(n,r),r+=2,s.ySuperscriptXSize=o.readShort(n,r),r+=2,s.ySuperscriptYSize=o.readShort(n,r),r+=2,s.ySuperscriptXOffset=o.readShort(n,r),r+=2,s.ySuperscriptYOffset=o.readShort(n,r),r+=2,s.yStrikeoutSize=o.readShort(n,r),r+=2,s.yStrikeoutPosition=o.readShort(n,r),r+=2,s.sFamilyClass=o.readShort(n,r),r+=2,s.panose=o.readBytes(n,r,10),r+=10,s.ulUnicodeRange1=o.readUint(n,r),r+=4,s.ulUnicodeRange2=o.readUint(n,r),r+=4,s.ulUnicodeRange3=o.readUint(n,r),r+=4,s.ulUnicodeRange4=o.readUint(n,r),r+=4,s.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,s.fsSelection=o.readUshort(n,r),r+=2,s.usFirstCharIndex=o.readUshort(n,r),r+=2,s.usLastCharIndex=o.readUshort(n,r),r+=2,s.sTypoAscender=o.readShort(n,r),r+=2,s.sTypoDescender=o.readShort(n,r),r+=2,s.sTypoLineGap=o.readShort(n,r),r+=2,s.usWinAscent=o.readUshort(n,r),r+=2,s.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,s){var o=e._bin;return r=e["OS/2"].version0(n,r,s),s.ulCodePageRange1=o.readUint(n,r),r+=4,s.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,s){var o=e._bin;return r=e["OS/2"].version1(n,r,s),s.sxHeight=o.readShort(n,r),r+=2,s.sCapHeight=o.readShort(n,r),r+=2,s.usDefault=o.readUshort(n,r),r+=2,s.usBreak=o.readUshort(n,r),r+=2,s.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,s){var o=e._bin;return r=e["OS/2"].version2(n,r,s),s.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,s.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,s){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,s)}else n.glyf&&e.U._drawGlyf(r,n,s);return s},e.U._drawGlyf=function(n,r,s){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,r,s))},e.U._simpleGlyph=function(n,r){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&n.flags[c],d=1&n.flags[u],x=1&n.flags[f],g=n.xs[c],m=n.ys[c];if(c==o)if(h){if(!d){e.U.P.moveTo(r,g,m);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+g)/2,(n.ys[u]+m)/2);h?d&&e.U.P.lineTo(r,g,m):x?e.U.P.qcurveTo(r,g,m,n.xs[f],n.ys[f]):e.U.P.qcurveTo(r,g,m,(g+n.xs[f])/2,(m+n.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];s.crds.push(h*u.a+d*u.b+u.tx),s.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)s.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,r){var s=e._lctf.getInterval(r,n);return s==-1?0:r[s+2]},e.U._applySubs=function(n,r,s,o){for(var l=n.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,f=s.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[r]))!=-1){if(s.ltype==1)n[r],f.fmt==1?n[r]=n[r]+f.delta:n[r]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var x=h[d],g=x.chain.length;if(!(g>l)){for(var m=!0,p=0,b=0;b<g;b++){for(;n[r+p+(1+b)]==-1;)p++;x.chain[b]!=n[r+p+(1+b)]&&(m=!1)}if(m){for(n[r]=x.nglyph,b=0;b<g+p;b++)n[r+b+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var v=e._lctf.getInterval(f.cDef,n[r]),M=f.cDef[v+2],A=f.scset[M],T=0;T<A.length;T++){var w=A[T],P=w.input;if(!(P.length>l)){for(m=!0,b=0;b<P.length;b++){var S=e._lctf.getInterval(f.cDef,n[r+1+b]);if(v==-1&&f.cDef[S+2]!=P[b]){m=!1;break}}if(m){var y=w.substLookupRecords;for(d=0;d<y.length;d+=2)y[d],y[d+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,r)||!e.U._glsCovered(n,f.ahedCvg,r+f.inptCvg.length))continue;var D=f.lookupRec;for(T=0;T<D.length;T+=2){v=D[T];var R=o[D[T+1]];e.U._applySubs(n,r+v,R,o)}}}}},e.U._glsCovered=function(n,r,s){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+l),o.crds.push(h.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,s){n.cmds.push("M"),n.crds.push(r,s)},e.U.P.lineTo=function(n,r,s){n.cmds.push("L"),n.crds.push(r,s)},e.U.P.curveTo=function(n,r,s,o,l,c,u){n.cmds.push("C"),n.crds.push(r,s,o,l,c,u)},e.U.P.qcurveTo=function(n,r,s,o,l){n.cmds.push("Q"),n.crds.push(r,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,s,o,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open,x=0,g=r.x,m=r.y,p=0,b=0,v=0,M=0,A=0,T=0,w=0,P=0,S=0,y=0,D={val:0,size:0};x<n.length;){e.CFF.getCharString(n,x,D);var R=D.val;if(x+=D.size,R=="o1"||R=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(R=="o3"||R=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(R=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,g,m),d=!0;else if(R=="o5")for(;c.length>0;)g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m);else if(R=="o6"||R=="o7")for(var L=c.length,N=R=="o6",G=0;G<L;G++){var z=c.shift();N?g+=z:m+=z,N=!N,e.U.P.lineTo(l,g,m)}else if(R=="o8"||R=="o24"){L=c.length;for(var ne=0;ne+6<=L;)p=g+c.shift(),b=m+c.shift(),v=p+c.shift(),M=b+c.shift(),g=v+c.shift(),m=M+c.shift(),e.U.P.curveTo(l,p,b,v,M,g,m),ne+=6;R=="o24"&&(g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m))}else{if(R=="o11")break;if(R=="o1234"||R=="o1235"||R=="o1236"||R=="o1237")R=="o1234"&&(b=m,v=(p=g+c.shift())+c.shift(),y=M=b+c.shift(),T=M,P=m,g=(w=(A=(S=v+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,b,v,M,S,y),e.U.P.curveTo(l,A,T,w,P,g,m)),R=="o1235"&&(p=g+c.shift(),b=m+c.shift(),v=p+c.shift(),M=b+c.shift(),S=v+c.shift(),y=M+c.shift(),A=S+c.shift(),T=y+c.shift(),w=A+c.shift(),P=T+c.shift(),g=w+c.shift(),m=P+c.shift(),c.shift(),e.U.P.curveTo(l,p,b,v,M,S,y),e.U.P.curveTo(l,A,T,w,P,g,m)),R=="o1236"&&(p=g+c.shift(),b=m+c.shift(),v=p+c.shift(),y=M=b+c.shift(),T=M,w=(A=(S=v+c.shift())+c.shift())+c.shift(),P=T+c.shift(),g=w+c.shift(),e.U.P.curveTo(l,p,b,v,M,S,y),e.U.P.curveTo(l,A,T,w,P,g,m)),R=="o1237"&&(p=g+c.shift(),b=m+c.shift(),v=p+c.shift(),M=b+c.shift(),S=v+c.shift(),y=M+c.shift(),A=S+c.shift(),T=y+c.shift(),w=A+c.shift(),P=T+c.shift(),Math.abs(w-g)>Math.abs(P-m)?g=w+c.shift():m=P+c.shift(),e.U.P.curveTo(l,p,b,v,M,S,y),e.U.P.curveTo(l,A,T,w,P,g,m));else if(R=="o14"){if(c.length>0&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),c.length==4){var Y=c.shift(),H=c.shift(),W=c.shift(),I=c.shift(),X=e.CFF.glyphBySE(s,W),ee=e.CFF.glyphBySE(s,I);e.U._drawCFF(s.CharStrings[X],r,s,o,l),r.x=Y,r.y=H,e.U._drawCFF(s.CharStrings[ee],r,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(R=="o19"||R=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,x+=u+7>>3;else if(R=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),m+=c.pop(),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,m),d=!0;else if(R=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,m),d=!0;else if(R=="o25"){for(;c.length>6;)g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m);p=g+c.shift(),b=m+c.shift(),v=p+c.shift(),M=b+c.shift(),g=v+c.shift(),m=M+c.shift(),e.U.P.curveTo(l,p,b,v,M,g,m)}else if(R=="o26")for(c.length%2&&(g+=c.shift());c.length>0;)p=g,b=m+c.shift(),g=v=p+c.shift(),m=(M=b+c.shift())+c.shift(),e.U.P.curveTo(l,p,b,v,M,g,m);else if(R=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)b=m,v=(p=g+c.shift())+c.shift(),M=b+c.shift(),g=v+c.shift(),m=M,e.U.P.curveTo(l,p,b,v,M,g,m);else if(R=="o10"||R=="o29"){var ie=R=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var $=c.pop(),k=ie.Subrs[$+ie.Bias];r.x=g,r.y=m,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d,e.U._drawCFF(k,r,s,o,l),g=r.x,m=r.y,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open}}else if(R=="o30"||R=="o31"){var B=c.length,Q=(ne=0,R=="o31");for(ne+=B-(L=-3&B);ne<L;)Q?(b=m,v=(p=g+c.shift())+c.shift(),m=(M=b+c.shift())+c.shift(),L-ne==5?(g=v+c.shift(),ne++):g=v,Q=!1):(p=g,b=m+c.shift(),v=p+c.shift(),M=b+c.shift(),g=v+c.shift(),L-ne==5?(m=M+c.shift(),ne++):m=M,Q=!0),e.U.P.curveTo(l,p,b,v,M,g,m),ne+=4}else{if((R+"").charAt(0)=="o")throw console.debug("Unknown operation: "+R,n),R;c.push(R)}}}r.x=g,r.y=m,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d};var t=e,i={Typr:t};return a.Typr=t,a.default=i,Object.defineProperty(a,"__esModule",{value:!0}),a})({}).Typr}function Qg(){return(function(a){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(R,L){for(var N=new t(31),G=0;G<31;++G)N[G]=L+=1<<R[G-1];var z=new i(N[30]);for(G=1;G<30;++G)for(var ne=N[G];ne<N[G+1];++ne)z[ne]=ne-N[G]<<5|G;return[N,z]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(r,0)[0],h=new t(32768),d=0;d<32768;++d){var x=(43690&d)>>>1|(21845&d)<<1;x=(61680&(x=(52428&x)>>>2|(13107&x)<<2))>>>4|(3855&x)<<4,h[d]=((65280&x)>>>8|(255&x)<<8)>>>1}var g=function(R,L,N){for(var G=R.length,z=0,ne=new t(L);z<G;++z)++ne[R[z]-1];var Y,H=new t(L);for(z=0;z<L;++z)H[z]=H[z-1]+ne[z-1]<<1;{Y=new t(1<<L);var W=15-L;for(z=0;z<G;++z)if(R[z])for(var I=z<<4|R[z],X=L-R[z],ee=H[R[z]-1]++<<X,ie=ee|(1<<X)-1;ee<=ie;++ee)Y[h[ee]>>>W]=I}return Y},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var b=g(m,9),v=g(p,5),M=function(R){for(var L=R[0],N=1;N<R.length;++N)R[N]>L&&(L=R[N]);return L},A=function(R,L,N){var G=L/8|0;return(R[G]|R[G+1]<<8)>>(7&L)&N},T=function(R,L){var N=L/8|0;return(R[N]|R[N+1]<<8|R[N+2]<<16)>>(7&L)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],P=function(R,L,N){var G=new Error(L||w[R]);if(G.code=R,Error.captureStackTrace&&Error.captureStackTrace(G,P),!N)throw G;return G},S=function(R,L,N){var G=R.length;if(!G||N&&!N.l&&G<5)return L||new e(0);var z=!L||N,ne=!N||N.i;N||(N={}),L||(L=new e(3*G));var Y,H=function(ve){var Re=L.length;if(ve>Re){var Me=new e(Math.max(2*Re,ve));Me.set(L),L=Me}},W=N.f||0,I=N.p||0,X=N.b||0,ee=N.l,ie=N.d,$=N.m,k=N.n,B=8*G;do{if(!ee){N.f=W=A(R,I,1);var Q=A(R,I+1,3);if(I+=3,!Q){var pe=R[(we=((Y=I)/8|0)+(7&Y&&1)+4)-4]|R[we-3]<<8,me=we+pe;if(me>G){ne&&P(0);break}z&&H(X+pe),L.set(R.subarray(we,me),X),N.b=X+=pe,N.p=I=8*me;continue}if(Q==1)ee=b,ie=v,$=9,k=5;else if(Q==2){var fe=A(R,I,31)+257,de=A(R,I+10,15)+4,De=fe+A(R,I+5,31)+1;I+=14;for(var Fe=new e(De),U=new e(19),Ae=0;Ae<de;++Ae)U[s[Ae]]=A(R,I+3*Ae,7);I+=3*de;var Ue=M(U),_e=(1<<Ue)-1,he=g(U,Ue);for(Ae=0;Ae<De;){var we,J=he[A(R,I,_e)];if(I+=15&J,(we=J>>>4)<16)Fe[Ae++]=we;else{var be=0,E=0;for(we==16?(E=3+A(R,I,3),I+=2,be=Fe[Ae-1]):we==17?(E=3+A(R,I,7),I+=3):we==18&&(E=11+A(R,I,127),I+=7);E--;)Fe[Ae++]=be}}var _=Fe.subarray(0,fe),O=Fe.subarray(fe);$=M(_),k=M(O),ee=g(_,$),ie=g(O,k)}else P(1);if(I>B){ne&&P(0);break}}z&&H(X+131072);for(var se=(1<<$)-1,te=(1<<k)-1,q=I;;q=I){var ye=(be=ee[T(R,I)&se])>>>4;if((I+=15&be)>B){ne&&P(0);break}if(be||P(2),ye<256)L[X++]=ye;else{if(ye==256){q=I,ee=null;break}var ge=ye-254;if(ye>264){var Ce=n[Ae=ye-257];ge=A(R,I,(1<<Ce)-1)+c[Ae],I+=Ce}var Ee=ie[T(R,I)&te],oe=Ee>>>4;if(Ee||P(3),I+=15&Ee,O=f[oe],oe>3&&(Ce=r[oe],O+=T(R,I)&(1<<Ce)-1,I+=Ce),I>B){ne&&P(0);break}z&&H(X+131072);for(var le=X+ge;X<le;X+=4)L[X]=L[X-O],L[X+1]=L[X+1-O],L[X+2]=L[X+2-O],L[X+3]=L[X+3-O];X=le}}N.l=ee,N.p=q,N.b=X,ee&&(W=1,N.m=$,N.d=ie,N.n=k)}while(!W);return X==L.length?L:(function(ve,Re,Me){(Me==null||Me>ve.length)&&(Me=ve.length);var ze=new(ve instanceof t?t:ve instanceof i?i:e)(Me-Re);return ze.set(ve.subarray(Re,Me)),ze})(L,0,X)},y=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(y,{stream:!0})}catch{}return a.convert_streams=function(R){var L=new DataView(R),N=0;function G(){var fe=L.getUint16(N);return N+=2,fe}function z(){var fe=L.getUint32(N);return N+=4,fe}function ne(fe){pe.setUint16(me,fe),me+=2}function Y(fe){pe.setUint32(me,fe),me+=4}for(var H={signature:z(),flavor:z(),length:z(),numTables:G(),reserved:G(),totalSfntSize:z(),majorVersion:G(),minorVersion:G(),metaOffset:z(),metaLength:z(),metaOrigLength:z(),privOffset:z(),privLength:z()},W=0;Math.pow(2,W)<=H.numTables;)W++;W--;for(var I=16*Math.pow(2,W),X=16*H.numTables-I,ee=12,ie=[],$=0;$<H.numTables;$++)ie.push({tag:z(),offset:z(),compLength:z(),origLength:z(),origChecksum:z()}),ee+=16;var k,B=new Uint8Array(12+16*ie.length+ie.reduce((function(fe,de){return fe+de.origLength+4}),0)),Q=B.buffer,pe=new DataView(Q),me=0;return Y(H.flavor),ne(H.numTables),ne(I),ne(W),ne(X),ie.forEach((function(fe){Y(fe.tag),Y(fe.origChecksum),Y(ee),Y(fe.origLength),fe.outOffset=ee,(ee+=fe.origLength)%4!=0&&(ee+=4-ee%4)})),ie.forEach((function(fe){var de,De=R.slice(fe.offset,fe.offset+fe.compLength);if(fe.compLength!=fe.origLength){var Fe=new Uint8Array(fe.origLength);de=new Uint8Array(De,2),S(de,Fe)}else Fe=new Uint8Array(De);B.set(Fe,fe.outOffset);var U=0;(ee=fe.outOffset+fe.origLength)%4!=0&&(U=4-ee%4),B.set(new Uint8Array(U).buffer,fe.outOffset+fe.origLength),k=ee+U})),Q.slice(0,k)},Object.defineProperty(a,"__esModule",{value:!0}),a})({}).convert_streams}function $g(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,s=4,o=8,l=16,c=32;let u;function f(w){if(!u){const P={R:r,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let S in i){let y=0;i[S].split(",").forEach(D=>{let[R,L]=D.split("+");R=parseInt(R,36),L=L?parseInt(L,36):0,u.set(y+=R,P[S]);for(let N=L;N--;)u.set(++y,P[S])})}}return u.get(w)||c}const h=1,d=2,x=3,g=4,m=[null,"isol","init","fina","medi"];function p(w){const P=new Uint8Array(w.length);let S=c,y=h,D=-1;for(let R=0;R<w.length;R++){const L=w.codePointAt(R);let N=f(L)|0,G=h;N&o||(S&(n|s|l)?N&(r|s|l)?(G=x,(y===h||y===x)&&P[D]++):N&(n|c)&&(y===d||y===g)&&P[D]--:S&(r|c)&&(y===d||y===g)&&P[D]--,y=P[R]=G,S=N,D=R,L>65535&&R++)}return P}function b(w,P){const S=[];for(let D=0;D<P.length;D++){const R=P.codePointAt(D);R>65535&&D++,S.push(a.U.codeToGlyph(w,R))}const y=w.GSUB;if(y){const{lookupList:D,featureList:R}=y;let L;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];R.forEach(z=>{if(N.test(z.tag))for(let ne=0;ne<z.tab.length;ne++){if(G[z.tab[ne]])continue;G[z.tab[ne]]=!0;const Y=D[z.tab[ne]],H=/^(isol|init|fina|medi)$/.test(z.tag);H&&!L&&(L=p(P));for(let W=0;W<S.length;W++)(!L||!H||m[L[W]]===z.tag)&&a.U._applySubs(S,W,Y,D)}})}return S}function v(w,P){const S=new Int16Array(P.length*3);let y=0;for(;y<P.length;y++){const N=P[y];if(N===-1)continue;S[y*3+2]=w.hmtx.aWidth[N];const G=w.GPOS;if(G){const z=G.lookupList;for(let ne=0;ne<z.length;ne++){const Y=z[ne];for(let H=0;H<Y.tabs.length;H++){const W=Y.tabs[H];if(Y.ltype===1){if(a._lctf.coverageIndex(W.coverage,N)!==-1&&W.pos){L(W.pos,y);break}}else if(Y.ltype===2){let I=null,X=D();if(X!==-1){const ee=a._lctf.coverageIndex(W.coverage,P[X]);if(ee!==-1){if(W.fmt===1){const ie=W.pairsets[ee];for(let $=0;$<ie.length;$++)ie[$].gid2===N&&(I=ie[$])}else if(W.fmt===2){const ie=a.U._getGlyphClass(P[X],W.classDef1),$=a.U._getGlyphClass(N,W.classDef2);I=W.matrix[ie][$]}if(I){I.val1&&L(I.val1,X),I.val2&&L(I.val2,y);break}}}}else if(Y.ltype===4){const I=a._lctf.coverageIndex(W.markCoverage,N);if(I!==-1){const X=D(R),ee=X===-1?-1:a._lctf.coverageIndex(W.baseCoverage,P[X]);if(ee!==-1){const ie=W.markArray[I],$=W.baseArray[ee][ie.markClass];S[y*3]=$.x-ie.x+S[X*3]-S[X*3+2],S[y*3+1]=$.y-ie.y+S[X*3+1];break}}}else if(Y.ltype===6){const I=a._lctf.coverageIndex(W.mark1Coverage,N);if(I!==-1){const X=D();if(X!==-1){const ee=P[X];if(M(w,ee)===3){const ie=a._lctf.coverageIndex(W.mark2Coverage,ee);if(ie!==-1){const $=W.mark1Array[I],k=W.mark2Array[ie][$.markClass];S[y*3]=k.x-$.x+S[X*3]-S[X*3+2],S[y*3+1]=k.y-$.y+S[X*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const z=D();if(z!==-1){const ne=w.kern.glyph1.indexOf(P[z]);if(ne!==-1){const Y=w.kern.rval[ne].glyph2.indexOf(N);Y!==-1&&(S[z*3+2]+=w.kern.rval[ne].vals[Y])}}}}return S;function D(N){for(let G=y-1;G>=0;G--)if(P[G]!==-1&&(!N||N(P[G])))return G;return-1}function R(N){return M(w,N)===1}function L(N,G){for(let z=0;z<3;z++)S[G*3+z]+=N[z]||0}}function M(w,P){const S=w.GDEF&&w.GDEF.glyphClassDef;return S?a.U._getGlyphClass(P,S):0}function A(...w){for(let P=0;P<w.length;P++)if(typeof w[P]=="number")return w[P]}function T(w){const P=Object.create(null),S=w["OS/2"],y=w.hhea,D=w.head.unitsPerEm,R=A(S&&S.sTypoAscender,y&&y.ascender,D),L={unitsPerEm:D,ascender:R,descender:A(S&&S.sTypoDescender,y&&y.descender,0),capHeight:A(S&&S.sCapHeight,R),xHeight:A(S&&S.sxHeight,R),lineGap:A(S&&S.sTypoLineGap,y&&y.lineGap),supportsCodePoint(N){return a.U.codeToGlyph(w,N)>0},forEachGlyph(N,G,z,ne){let Y=0;const H=1/L.unitsPerEm*G,W=b(w,N);let I=0;const X=v(w,W);return W.forEach((ee,ie)=>{if(ee!==-1){let $=P[ee];if(!$){const{cmds:k,crds:B}=a.U.glyphToPath(w,ee);let Q="",pe=0;for(let Fe=0,U=k.length;Fe<U;Fe++){const Ae=t[k[Fe]];Q+=k[Fe];for(let Ue=1;Ue<=Ae;Ue++)Q+=(Ue>1?",":"")+B[pe++]}let me,fe,de,De;if(B.length){me=fe=1/0,de=De=-1/0;for(let Fe=0,U=B.length;Fe<U;Fe+=2){let Ae=B[Fe],Ue=B[Fe+1];Ae<me&&(me=Ae),Ue<fe&&(fe=Ue),Ae>de&&(de=Ae),Ue>De&&(De=Ue)}}else me=de=fe=De=0;$=P[ee]={index:ee,advanceWidth:w.hmtx.aWidth[ee],xMin:me,yMin:fe,xMax:de,yMax:De,path:Q}}ne.call(null,$,Y+X[ie*3]*H,X[ie*3+1]*H,I),Y+=X[ie*3+2]*H,z&&(Y+=z*G)}I+=N.codePointAt(I)>65535?2:1}),Y}};return L}return function(P){const S=new Uint8Array(P,0,4),y=a._bin.readASCII(S,0,4);if(y==="wOFF")P=e(P);else if(y==="wOF2")throw new Error("woff2 fonts not supported");return T(a.parse(P)[0])}}const ev=cr({name:"Typr Font Parser",dependencies:[Jg,Qg,$g],init(a,e,t){const i=a(),n=e();return t(i,n)}});function tv(){return(function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(v){var M=v>>5;this.buckets.set(M,(this.buckets.get(M)||0)|1<<(31&v))},e.prototype.has=function(v){var M=this.buckets.get(v>>5);return M!==void 0&&(M&1<<(31&v))!=0},e.prototype.serialize=function(){var v=[];return this.buckets.forEach((function(M,A){v.push((+A).toString(36)+":"+M.toString(36))})),v.join(",")},e.prototype.deserialize=function(v){var M=this;this.buckets.clear(),v.split(",").forEach((function(A){var T=A.split(":");M.buckets.set(parseInt(T[0],36),parseInt(T[1],36))}))};var t=Math.pow(2,8),i=t-1,n=~i;function r(v){var M=(function(T){return T&n})(v).toString(16),A=(function(T){return(T&n)+t-1})(v).toString(16);return"codepoint-index/plane"+(v>>16)+"/"+M+"-"+A+".json"}function s(v,M){var A=v&i,T=M.codePointAt(A/6|0);return((T=(T||48)-48)&1<<A%6)!=0}function o(v,M){var A;(A=v,A.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(T){return T.split("-").map((function(w){return parseInt(w.trim(),16)}))}))).forEach((function(T){var w=T[0],P=T[1];P===void 0&&(P=w),M(w,P)}))}function l(v,M){o(v,(function(A,T){for(var w=A;w<=T;w++)M(w)}))}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(v){var M=f.get(v);return M||(M=new e,l(v.ranges,(function(A){return M.add(A)})),f.set(v,M)),M}var x,g=new Map;function m(v,M,A){return v[M]?M:v[A]?A:(function(T){for(var w in T)return w})(v)}function p(v,M){var A=M;if(!v.includes(A)){A=1/0;for(var T=0;T<v.length;T++)Math.abs(v[T]-M)<Math.abs(A-M)&&(A=v[T])}return A}function b(v){return x||(x=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(M){x.add(M)}))),x.has(v)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(v,M){M===void 0&&(M={});var A,T=M.lang;T===void 0&&(T=new RegExp("\\p{Script=Hangul}","u").test(A=v)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(A)?"ja":"en");var w=M.category;w===void 0&&(w="sans-serif");var P=M.style;P===void 0&&(P="normal");var S=M.weight;S===void 0&&(S=400);var y=(M.dataUrl||h).replace(/\/$/g,""),D=new Map,R=new Uint8Array(v.length),L={},N={},G=new Array(v.length),z=new Map,ne=!1;function Y(I){var X=g.get(I);return X||(X=fetch(y+"/"+I).then((function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then((function(ie){if(!Array.isArray(ie)||ie[0]!==1)throw new Error("Incorrect schema version; need 1, got "+ie[0]);return ie[1]}))})).catch((function(ee){if(y!==h)return ne||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+y+'", trying default CDN. '+ee.message),ne=!0),y=h,g.delete(I),Y(I);throw ee})),g.set(I,X)),X}for(var H=function(I){var X=v.codePointAt(I),ee=r(X);G[I]=ee,c[ee]||z.has(ee)||z.set(ee,Y(ee).then((function(ie){c[ee]=ie}))),X>65535&&(I++,W=I)},W=0;W<v.length;W++)H(W);return Promise.all(z.values()).then((function(){z.clear();for(var I=function(ee){var ie=v.codePointAt(ee),$=null,k=c[G[ee]],B=void 0;for(var Q in k){var pe=N[Q];if(pe===void 0&&(pe=N[Q]=new RegExp(Q).test(T||"en")),pe){for(var me in B=Q,k[Q])if(s(ie,k[Q][me])){$=me;break}break}}if(!$){e:for(var fe in k)if(fe!==B){for(var de in k[fe])if(s(ie,k[fe][de])){$=de;break e}}}$||(console.debug("No font coverage for U+"+ie.toString(16)),$="latin"),G[ee]=$,u[$]||z.has($)||z.set($,Y("font-meta/"+$+".json").then((function(De){u[$]=De}))),ie>65535&&(ee++,X=ee)},X=0;X<v.length;X++)I(X);return Promise.all(z.values())})).then((function(){for(var I,X=null,ee=0;ee<v.length;ee++){var ie=v.codePointAt(ee);if(X&&(b(ie)||d(X).has(ie)))R[ee]=R[ee-1];else{X=u[G[ee]];var $=L[X.id];if(!$){var k=X.typeforms,B=m(k,w,"sans-serif"),Q=m(k[B],P,"normal"),pe=p((I=k[B])===null||I===void 0?void 0:I[Q],S);$=L[X.id]=y+"/font-files/"+X.id+"/"+B+"."+Q+"."+pe+".woff"}var me=D.get($);me==null&&(me=D.size,D.set($,me)),R[ee]=me}ie>65535&&(ee++,R[ee]=R[ee-1])}return{fontUrls:Array.from(D.keys()),chars:R}}))},Object.defineProperty(a,"__esModule",{value:!0}),a})({})}function nv(a,e){const t=Object.create(null),i=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(s,o){let l=t[s];l?o(l):i[s]?i[s].push(o):(i[s]=[o],n(s,c=>{c.src=s,t[s]=c,i[s].forEach(u=>u(c)),delete i[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(s.length),x=[];s.length||b();const g=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(M=>!M.lang||M.lang.test(l)).reverse(),c.length){let w=0;(function P(S=0){for(let y=S,D=s.length;y<D;y++){const R=s.codePointAt(y);if(w===1&&x[d[y-1]].supportsCodePoint(R)||y>0&&/\s/.test(s[y]))d[y]=d[y-1],w===2&&(m[m.length-1][1]=y);else for(let L=d[y],N=c.length;L<=N;L++)if(L===N){const G=w===2?m[m.length-1]:m[m.length]=[y,y];G[1]=y,w=2}else{d[y]=L;const{src:G,unicodeRange:z}=c[L];if(!z||v(R,z)){const ne=t[G];if(!ne){r(G,()=>{P(y)});return}if(ne.supportsCodePoint(R)){let Y=g.get(ne);typeof Y!="number"&&(Y=x.length,x.push(ne),g.set(ne,Y)),d[y]=Y,w=1;break}}}R>65535&&y+1<D&&(d[y+1]=d[y],y++,w===2&&(m[m.length-1][1]=y))}p()})()}else m.push([0,s.length-1]),p();function p(){if(m.length){const M=m.map(A=>s.substring(A[0],A[1]+1)).join(`
`);e.getFontsForString(M,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:A,chars:T})=>{const w=x.length;let P=0;m.forEach(y=>{for(let D=0,R=y[1]-y[0];D<=R;D++)d[y[0]+D]=T[P++]+w;P++});let S=0;A.forEach((y,D)=>{r(y,R=>{x[D+w]=R,++S===A.length&&b()})})})}else b()}function b(){o({chars:d,fonts:x})}function v(M,A){for(let T=0;T<A.length;T++){const[w,P=w]=A[T];if(w<=M&&M<=P)return!0}return!1}}}const iv=cr({name:"FontResolver",dependencies:[nv,ev,tv],init(a,e,t){return a(e,t())}});function rv(a,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:x,lang:g,fonts:m,style:p,weight:b,preResolvedFonts:v,unicodeFontsURL:M},A){const T=({chars:w,fonts:P})=>{let S,y;const D=[];for(let R=0;R<w.length;R++)w[R]!==y?(y=w[R],D.push(S={start:R,end:R,fontObj:P[w[R]]})):S.end=R;A(D)};v?T(v):a(x,T,{lang:g,fonts:m,style:p,weight:b,unicodeFontsURL:M})}function o({text:x="",font:g,lang:m,sdfGlyphSize:p=64,fontSize:b=400,fontWeight:v=1,fontStyle:M="normal",letterSpacing:A=0,lineHeight:T="normal",maxWidth:w=1/0,direction:P,textAlign:S="left",textIndent:y=0,whiteSpace:D="normal",overflowWrap:R="normal",anchorX:L=0,anchorY:N=0,metricsOnly:G=!1,unicodeFontsURL:z,preResolvedFonts:ne=null,includeCaretPositions:Y=!1,chunkedBoundsSize:H=8192,colorRanges:W=null},I){const X=f(),ee={fontLoad:0,typesetting:0};x.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),x=x.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),b=+b,A=+A,w=+w,T=T||"normal",y=+y,s({text:x,lang:m,style:M,weight:v,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:z,preResolvedFonts:ne},ie=>{ee.fontLoad=f()-X;const $=isFinite(w);let k=null,B=null,Q=null,pe=null,me=null,fe=null,de=null,De=null,Fe=0,U=0,Ae=D!=="nowrap";const Ue=new Map,_e=f();let he=y,we=0,J=new h;const be=[J];ie.forEach(te=>{const{fontObj:q}=te,{ascender:ye,descender:ge,unitsPerEm:Ce,lineGap:Ee,capHeight:oe,xHeight:le}=q;let ve=Ue.get(q);if(!ve){const ce=b/Ce,xe=T==="normal"?(ye-ge+Ee)*ce:T*b,Te=(xe-(ye-ge)*ce)/2,ue=Math.min(xe,(ye-ge)*ce),re=(ye+ge)/2*ce+ue/2;ve={index:Ue.size,src:q.src,fontObj:q,fontSizeMult:ce,unitsPerEm:Ce,ascender:ye*ce,descender:ge*ce,capHeight:oe*ce,xHeight:le*ce,lineHeight:xe,baseline:-Te-ye*ce,caretTop:re,caretBottom:re-ue},Ue.set(q,ve)}const{fontSizeMult:Re}=ve,Me=x.slice(te.start,te.end+1);let ze,F;q.forEachGlyph(Me,b,A,(ce,xe,Te,ue)=>{xe+=we,ue+=te.start,ze=xe,F=ce;const re=x.charAt(ue),Pe=ce.advanceWidth*Re,Ne=J.count;let Be;if("isEmpty"in ce||(ce.isWhitespace=!!re&&new RegExp(n).test(re),ce.canBreakAfter=!!re&&r.test(re),ce.isEmpty=ce.xMin===ce.xMax||ce.yMin===ce.yMax||i.test(re)),!ce.isWhitespace&&!ce.isEmpty&&U++,Ae&&$&&!ce.isWhitespace&&xe+Pe+he>w&&Ne){if(J.glyphAt(Ne-1).glyphObj.canBreakAfter)Be=new h,he=-xe;else for(let ht=Ne;ht--;)if(ht===0&&R==="break-word"){Be=new h,he=-xe;break}else if(J.glyphAt(ht).glyphObj.canBreakAfter){Be=J.splitAt(ht+1);const ct=Be.glyphAt(0).x;he-=ct;for(let yt=Be.count;yt--;)Be.glyphAt(yt).x-=ct;break}Be&&(J.isSoftWrapped=!0,J=Be,be.push(J),Fe=w)}let Xe=J.glyphAt(J.count);Xe.glyphObj=ce,Xe.x=xe+he,Xe.y=Te,Xe.width=Pe,Xe.charIndex=ue,Xe.fontData=ve,re===`
`&&(J=new h,be.push(J),he=-(xe+Pe+A*b)+y)}),we=ze+F.advanceWidth*Re+A*b});let E=0;be.forEach(te=>{let q=!0;for(let ye=te.count;ye--;){const ge=te.glyphAt(ye);q&&!ge.glyphObj.isWhitespace&&(te.width=ge.x+ge.width,te.width>Fe&&(Fe=te.width),q=!1);let{lineHeight:Ce,capHeight:Ee,xHeight:oe,baseline:le}=ge.fontData;Ce>te.lineHeight&&(te.lineHeight=Ce);const ve=le-te.baseline;ve<0&&(te.baseline+=ve,te.cap+=ve,te.ex+=ve),te.cap=Math.max(te.cap,te.baseline+Ee),te.ex=Math.max(te.ex,te.baseline+oe)}te.baseline-=E,te.cap-=E,te.ex-=E,E+=te.lineHeight});let _=0,O=0;if(L&&(typeof L=="number"?_=-L:typeof L=="string"&&(_=-Fe*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),N&&(typeof N=="number"?O=-N:typeof N=="string"&&(O=N==="top"?0:N==="top-baseline"?-be[0].baseline:N==="top-cap"?-be[0].cap:N==="top-ex"?-be[0].ex:N==="middle"?E/2:N==="bottom"?E:N==="bottom-baseline"?-be[be.length-1].baseline:c(N)*E)),!G){const te=e.getEmbeddingLevels(x,P);k=new Uint16Array(U),B=new Uint8Array(U),Q=new Float32Array(U*2),pe={},de=[1/0,1/0,-1/0,-1/0],De=[],Y&&(fe=new Float32Array(x.length*4)),W&&(me=new Uint8Array(U*3));let q=0,ye=-1,ge=-1,Ce,Ee;if(be.forEach((oe,le)=>{let{count:ve,width:Re}=oe;if(ve>0){let Me=0;for(let ue=ve;ue--&&oe.glyphAt(ue).glyphObj.isWhitespace;)Me++;let ze=0,F=0;if(S==="center")ze=(Fe-Re)/2;else if(S==="right")ze=Fe-Re;else if(S==="justify"&&oe.isSoftWrapped){let ue=0;for(let re=ve-Me;re--;)oe.glyphAt(re).glyphObj.isWhitespace&&ue++;F=(Fe-Re)/ue}if(F||ze){let ue=0;for(let re=0;re<ve;re++){let Pe=oe.glyphAt(re);const Ne=Pe.glyphObj;Pe.x+=ze+ue,F!==0&&Ne.isWhitespace&&re<ve-Me&&(ue+=F,Pe.width+=F)}}const ce=e.getReorderSegments(x,te,oe.glyphAt(0).charIndex,oe.glyphAt(oe.count-1).charIndex);for(let ue=0;ue<ce.length;ue++){const[re,Pe]=ce[ue];let Ne=1/0,Be=-1/0;for(let Xe=0;Xe<ve;Xe++)if(oe.glyphAt(Xe).charIndex>=re){let ht=Xe,ct=Xe;for(;ct<ve;ct++){let yt=oe.glyphAt(ct);if(yt.charIndex>Pe)break;ct<ve-Me&&(Ne=Math.min(Ne,yt.x),Be=Math.max(Be,yt.x+yt.width))}for(let yt=ht;yt<ct;yt++){const Ht=oe.glyphAt(yt);Ht.x=Be-(Ht.x+Ht.width-Ne)}break}}let xe;const Te=ue=>xe=ue;for(let ue=0;ue<ve;ue++){const re=oe.glyphAt(ue);xe=re.glyphObj;const Pe=xe.index,Ne=te.levels[re.charIndex]&1;if(Ne){const Be=e.getMirroredCharacter(x[re.charIndex]);Be&&re.fontData.fontObj.forEachGlyph(Be,0,0,Te)}if(Y){const{charIndex:Be,fontData:Xe}=re,ht=re.x+_,ct=re.x+re.width+_;fe[Be*4]=Ne?ct:ht,fe[Be*4+1]=Ne?ht:ct,fe[Be*4+2]=oe.baseline+Xe.caretBottom+O,fe[Be*4+3]=oe.baseline+Xe.caretTop+O;const yt=Be-ye;yt>1&&u(fe,ye,yt),ye=Be}if(W){const{charIndex:Be}=re;for(;Be>ge;)ge++,W.hasOwnProperty(ge)&&(Ee=W[ge])}if(!xe.isWhitespace&&!xe.isEmpty){const Be=q++,{fontSizeMult:Xe,src:ht,index:ct}=re.fontData,yt=pe[ht]||(pe[ht]={});yt[Pe]||(yt[Pe]={path:xe.path,pathBounds:[xe.xMin,xe.yMin,xe.xMax,xe.yMax]});const Ht=re.x+_,ln=re.y+oe.baseline+O;Q[Be*2]=Ht,Q[Be*2+1]=ln;const Ut=Ht+xe.xMin*Xe,nn=ln+xe.yMin*Xe,yn=Ht+xe.xMax*Xe,rn=ln+xe.yMax*Xe;Ut<de[0]&&(de[0]=Ut),nn<de[1]&&(de[1]=nn),yn>de[2]&&(de[2]=yn),rn>de[3]&&(de[3]=rn),Be%H===0&&(Ce={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},De.push(Ce)),Ce.end++;const Mt=Ce.rect;if(Ut<Mt[0]&&(Mt[0]=Ut),nn<Mt[1]&&(Mt[1]=nn),yn>Mt[2]&&(Mt[2]=yn),rn>Mt[3]&&(Mt[3]=rn),k[Be]=Pe,B[Be]=ct,W){const bn=Be*3;me[bn]=Ee>>16&255,me[bn+1]=Ee>>8&255,me[bn+2]=Ee&255}}}}}),fe){const oe=x.length-ye;oe>1&&u(fe,ye,oe)}}const se=[];Ue.forEach(({index:te,src:q,unitsPerEm:ye,ascender:ge,descender:Ce,lineHeight:Ee,capHeight:oe,xHeight:le})=>{se[te]={src:q,unitsPerEm:ye,ascender:ge,descender:Ce,lineHeight:Ee,capHeight:oe,xHeight:le}}),ee.typesetting=f()-_e,I({glyphIds:k,glyphFontIndices:B,glyphPositions:Q,glyphData:pe,fontData:se,caretPositions:fe,glyphColors:me,chunkedBounds:De,fontSize:b,topBaseline:O+be[0].baseline,blockBounds:[_,O-E,_+Fe,O],visibleBounds:de,timings:ee})})}function l(x,g){o({...x,metricsOnly:!0},m=>{const[p,b,v,M]=m.blockBounds;g({width:v-p,height:M-b})})}function c(x){let g=x.match(/^([\d.]+)%$/),m=g?parseFloat(g[1]):NaN;return isNaN(m)?0:m/100}function u(x,g,m){const p=x[g*4],b=x[g*4+1],v=x[g*4+2],M=x[g*4+3],A=(b-p)/m;for(let T=0;T<m;T++){const w=(g+T)*4;x[w]=p+A*T,x[w+1]=p+A*(T+1),x[w+2]=v,x[w+3]=M}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(x){let g=h.flyweight;return g.data=this.data,g.index=x,g},splitAt(x){let g=new h;return g.data=this.data.splice(x*d.length),g}},h.flyweight=d.reduce((x,g,m,p)=>(Object.defineProperty(x,g,{get(){return this.data[this.index*d.length+m]},set(b){this.data[this.index*d.length+m]=b}}),x),{data:null,index:0}),{typeset:o,measure:l}}const xi=()=>(self.performance||Date).now(),$a=Wu();let qc;function av(a,e,t,i,n,r,s,o,l,c,u=!0){return u?ov(a,e,t,i,n,r,s,o,l,c).then(null,f=>(qc||(console.warn("WebGL SDF generation failed, falling back to JS",f),qc=!0),Kc(a,e,t,i,n,r,s,o,l,c))):Kc(a,e,t,i,n,r,s,o,l,c)}const ka=[],sv=5;let Xo=0;function Yu(){const a=xi();for(;ka.length&&xi()-a<sv;)ka.shift()();Xo=ka.length?setTimeout(Yu,0):0}const ov=(...a)=>new Promise((e,t)=>{ka.push(()=>{const i=xi();try{$a.webgl.generateIntoCanvas(...a),e({timing:xi()-i})}catch(n){t(n)}}),Xo||(Xo=setTimeout(Yu,0))}),lv=4,cv=2e3,jc={};let uv=0;function Kc(a,e,t,i,n,r,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+uv++%lv;let f=jc[u];return f||(f=jc[u]={workerModule:cr({name:u,workerId:u,dependencies:[Wu,xi],init(h,d){const x=h().javascript.generate;return function(...g){const m=d();return{textureData:x(...g),timing:d()-m}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,i,n,r).then(({textureData:h,timing:d})=>{const x=xi(),g=new Uint8Array(h.length*4);for(let m=0;m<h.length;m++)g[m*4+c]=h[m];return $a.webglUtils.renderImageData(s,g,o,l,a,e,1<<3-c),d+=xi()-x,--f.requests===0&&(f.idleTimer=setTimeout(()=>{Vg(u)},cv)),{timing:d}})}function fv(a){a._warm||($a.webgl.isSupported(a),a._warm=!0)}const hv=$a.webglUtils.resizeWebGLCanvasWithoutClearing,Cr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},dv=new je;function Hi(){return(self.performance||Date).now()}const Zc=Object.create(null);function pv(a,e){a=xv({},a);const t=Hi(),i=[];if(a.font&&i.push({label:"user",src:gv(a.font)}),a.font=i,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Cr.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||Cr.unicodeFontsURL,a.colorRanges!=null){let h={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let x=a.colorRanges[d];typeof x!="number"&&(x=dv.set(x).getHex()),h[d]=x}a.colorRanges=h}Object.freeze(a);const{textureWidth:n,sdfExponent:r}=Cr,{sdfGlyphSize:s}=a,o=n/s*4;let l=Zc[s];if(!l){const h=document.createElement("canvas");h.width=n,h.height=s*256/o,l=Zc[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:h,sdfTexture:new Dt(h,void 0,void 0,void 0,jt,jt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,mv(l)}const{sdfTexture:c,sdfCanvas:u}=l;Ku(a).then(h=>{const{glyphIds:d,glyphFontIndices:x,fontData:g,glyphPositions:m,fontSize:p,timings:b}=h,v=[],M=new Float32Array(d.length*4);let A=0,T=0;const w=Hi(),P=g.map(L=>{let N=l.glyphsByFont.get(L.src);return N||l.glyphsByFont.set(L.src,N=new Map),N});d.forEach((L,N)=>{const G=x[N],{src:z,unitsPerEm:ne}=g[G];let Y=P[G].get(L);if(!Y){const{path:ee,pathBounds:ie}=h.glyphData[z][L],$=Math.max(ie[2]-ie[0],ie[3]-ie[1])/s*(Cr.sdfMargin*s+.5),k=l.glyphCount++,B=[ie[0]-$,ie[1]-$,ie[2]+$,ie[3]+$];P[G].set(L,Y={path:ee,atlasIndex:k,sdfViewBox:B}),v.push(Y)}const{sdfViewBox:H}=Y,W=m[T++],I=m[T++],X=p/ne;M[A++]=W+H[0]*X,M[A++]=I+H[1]*X,M[A++]=W+H[2]*X,M[A++]=I+H[3]*X,d[N]=Y.atlasIndex}),b.quads=(b.quads||0)+(Hi()-w);const S=Hi();b.sdf={};const y=u.height,D=Math.ceil(l.glyphCount/o),R=Math.pow(2,Math.ceil(Math.log2(D*s)));R>y&&(console.info(`Increasing SDF texture size ${y}->${R}`),hv(u,n,R),c.dispose()),Promise.all(v.map(L=>qu(L,l,a.gpuAccelerateSDF).then(({timing:N})=>{b.sdf[L.atlasIndex]=N}))).then(()=>{v.length&&!l.contextLost&&(ju(l),c.needsUpdate=!0),b.sdfTotal=Hi()-S,b.total=Hi()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:r,glyphBounds:M,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||fv(u)})}function qu({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Cr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/i)*i,h=Math.floor(u/(o/i))*i,d=e%4;return av(i,i,a,t,c,l,n,f,h,d,s)}function mv(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const i=[];a.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(qu(r,a,!0))})}),Promise.all(i).then(()=>{ju(a),a.sdfTexture.needsUpdate=!0})})}function xv(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Pa;function gv(a){return Pa||(Pa=typeof document>"u"?{}:document.createElement("a")),Pa.href=a,Pa.href}function ju(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:i,height:n}=e,r=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==i*n*4)&&(s=new Uint8Array(i*n*4),t.image={width:i,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,s)}}const vv=cr({name:"Typesetter",dependencies:[rv,iv,Hg],init(a,e,t){return a(e,t())}}),Ku=cr({name:"Typesetter",dependencies:[vv],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});Ku.onMainThread;const Jc={};function _v(a){let e=Jc[a];return e||(e=Jc[a]=new Mi(1,1,a,a).translate(.5,.5,0)),e}const yv="aTroikaGlyphBounds",Qc="aTroikaGlyphIndex",bv="aTroikaGlyphColor";class Mv extends kd{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new bi,this.boundingBox=new ei}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=_v(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(yv,e,4),this.updateAttributeData(Qc,t,1),this.updateAttributeData(bv,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:s,max:o,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,x=e[2]/h,g=r((d+u)/f)!==r((x+u)/f)?-h:s(l(d)*h,l(x)*h),m=r((d-u)/f)!==r((x-u)/f)?h:o(l(d)*h,l(x)*h),p=r((d+n)/f)!==r((x+n)/f)?h*2:o(h-c(d)*h,h-c(x)*h);i.min.set(g,e[1],t<0?-p:0),i.max.set(m,e[3],t<0?0:p)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Qc).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Yh(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const Sv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Tv=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Ev=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Av=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function wv(a){const e=Wo(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new $e},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new nt(0,0,0,0)},uTroikaClipRect:{value:new nt(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new $e},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Sv,vertexTransform:Tv,fragmentDefs:Ev,fragmentColorTransform:Av,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Xu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const hl=new rl({color:16777215,side:En,transparent:!0}),$c=8421504,eu=new He,Da=new K,Xs=new K,Er=[],Cv=new K,Ys="+x+y";function tu(a){return Array.isArray(a)?a[0]:a}let Zu=()=>{const a=new tn(new Mi(1,1),hl);return Zu=()=>a,a},Ju=()=>{const a=new tn(new Mi(1,1,32,1),hl);return Ju=()=>a,a};const Rv={type:"syncstart"},Pv={type:"synccomplete"},Qu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Dv=Qu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class $u extends tn{constructor(){const e=new Mv;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=$c,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ys,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Rv),pv({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(Pv),e&&e()})))}onBeforeRender(e,t,i,n,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return wv(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=hl.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return tu(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return tu(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,d,x,g=0,m=0;if(t){let{outlineWidth:b,outlineOffsetX:v,outlineOffsetY:M,outlineBlur:A,outlineOpacity:T}=this;c=this._parsePercent(b)||0,u=Math.max(0,this._parsePercent(A)||0),h=T,g=this._parsePercent(v)||0,m=this._parsePercent(M)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(x=this.strokeColor,i.uTroikaStrokeColor.value.set(x??$c),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(g,m),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=f,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=h??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)i.uTroikaClipRect.value.fromArray(p);else{const b=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-b,l[1]-b,l[2]+b,l[3]+b)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new je;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let s=this.orientation||Ys;if(s!==e._orientation){let o=i.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==Ys&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;Da.set(0,0,0)[u]=c==="-"?1:-1,Xs.set(0,0,0)[h]=f==="-"?-1:1,eu.lookAt(Cv,Da.cross(Xs),Xs),o.setFromMatrix4(eu)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new $e){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new $e){return Da.copy(e),this.localPositionToTextCoords(this.worldToLocal(Da),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,s=n?Ju():Zu(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=r[0]+c.getX(u)*(r[2]-r[0]);const h=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Er.length=0,s.raycast(e,Er);for(let u=0;u<Er.length;u++)Er[u].object=this,t.push(Er[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Dv.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}Qu.forEach(a=>{const e="_private_"+a;Object.defineProperty($u.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new ei;new je;var sn=Uint8Array,qi=Uint16Array,Uv=Int32Array,ef=new sn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tf=new sn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Lv=new sn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),nf=function(a,e){for(var t=new qi(31),i=0;i<31;++i)t[i]=e+=1<<a[i-1];for(var n=new Uv(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)n[r]=r-t[i]<<5|i;return{b:t,r:n}},rf=nf(ef,2),af=rf.b,Iv=rf.r;af[28]=258,Iv[258]=28;var Fv=nf(tf,0),Nv=Fv.b,Yo=new qi(32768);for(var xt=0;xt<32768;++xt){var jn=(xt&43690)>>1|(xt&21845)<<1;jn=(jn&52428)>>2|(jn&13107)<<2,jn=(jn&61680)>>4|(jn&3855)<<4,Yo[xt]=((jn&65280)>>8|(jn&255)<<8)>>1}var Ir=(function(a,e,t){for(var i=a.length,n=0,r=new qi(e);n<i;++n)a[n]&&++r[a[n]-1];var s=new qi(e);for(n=1;n<e;++n)s[n]=s[n-1]+r[n-1]<<1;var o;if(t){o=new qi(1<<e);var l=15-e;for(n=0;n<i;++n)if(a[n])for(var c=n<<4|a[n],u=e-a[n],f=s[a[n]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)o[Yo[f]>>l]=c}else for(o=new qi(i),n=0;n<i;++n)a[n]&&(o[n]=Yo[s[a[n]-1]++]>>15-a[n]);return o}),Kr=new sn(288);for(var xt=0;xt<144;++xt)Kr[xt]=8;for(var xt=144;xt<256;++xt)Kr[xt]=9;for(var xt=256;xt<280;++xt)Kr[xt]=7;for(var xt=280;xt<288;++xt)Kr[xt]=8;var sf=new sn(32);for(var xt=0;xt<32;++xt)sf[xt]=5;var Ov=Ir(Kr,9,1),Bv=Ir(sf,5,1),qs=function(a){for(var e=a[0],t=1;t<a.length;++t)a[t]>e&&(e=a[t]);return e},pn=function(a,e,t){var i=e/8|0;return(a[i]|a[i+1]<<8)>>(e&7)&t},js=function(a,e){var t=e/8|0;return(a[t]|a[t+1]<<8|a[t+2]<<16)>>(e&7)},kv=function(a){return(a+7)/8|0},zv=function(a,e,t){return(t==null||t>a.length)&&(t=a.length),new sn(a.subarray(e,t))},Vv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],mn=function(a,e,t){var i=new Error(e||Vv[a]);if(i.code=a,Error.captureStackTrace&&Error.captureStackTrace(i,mn),!t)throw i;return i},Gv=function(a,e,t,i){var n=a.length,r=0;if(!n||e.f&&!e.l)return t||new sn(0);var s=!t,o=s||e.i!=2,l=e.i;s&&(t=new sn(n*3));var c=function(fe){var de=t.length;if(fe>de){var De=new sn(Math.max(de*2,fe));De.set(t),t=De}},u=e.f||0,f=e.p||0,h=e.b||0,d=e.l,x=e.d,g=e.m,m=e.n,p=n*8;do{if(!d){u=pn(a,f,1);var b=pn(a,f+1,3);if(f+=3,b)if(b==1)d=Ov,x=Bv,g=9,m=5;else if(b==2){var T=pn(a,f,31)+257,w=pn(a,f+10,15)+4,P=T+pn(a,f+5,31)+1;f+=14;for(var S=new sn(P),y=new sn(19),D=0;D<w;++D)y[Lv[D]]=pn(a,f+D*3,7);f+=w*3;for(var R=qs(y),L=(1<<R)-1,N=Ir(y,R,1),D=0;D<P;){var G=N[pn(a,f,L)];f+=G&15;var v=G>>4;if(v<16)S[D++]=v;else{var z=0,ne=0;for(v==16?(ne=3+pn(a,f,3),f+=2,z=S[D-1]):v==17?(ne=3+pn(a,f,7),f+=3):v==18&&(ne=11+pn(a,f,127),f+=7);ne--;)S[D++]=z}}var Y=S.subarray(0,T),H=S.subarray(T);g=qs(Y),m=qs(H),d=Ir(Y,g,1),x=Ir(H,m,1)}else mn(1);else{var v=kv(f)+4,M=a[v-4]|a[v-3]<<8,A=v+M;if(A>n){l&&mn(0);break}o&&c(h+M),t.set(a.subarray(v,A),h),e.b=h+=M,e.p=f=A*8,e.f=u;continue}if(f>p){l&&mn(0);break}}o&&c(h+131072);for(var W=(1<<g)-1,I=(1<<m)-1,X=f;;X=f){var z=d[js(a,f)&W],ee=z>>4;if(f+=z&15,f>p){l&&mn(0);break}if(z||mn(2),ee<256)t[h++]=ee;else if(ee==256){X=f,d=null;break}else{var ie=ee-254;if(ee>264){var D=ee-257,$=ef[D];ie=pn(a,f,(1<<$)-1)+af[D],f+=$}var k=x[js(a,f)&I],B=k>>4;k||mn(3),f+=k&15;var H=Nv[B];if(B>3){var $=tf[B];H+=js(a,f)&(1<<$)-1,f+=$}if(f>p){l&&mn(0);break}o&&c(h+131072);var Q=h+ie;if(h<H){var pe=r-H,me=Math.min(H,Q);for(pe+h<0&&mn(3);h<me;++h)t[h]=i[pe+h]}for(;h<Q;++h)t[h]=t[h-H]}}e.l=d,e.p=X,e.b=h,e.f=u,d&&(u=1,e.m=g,e.d=x,e.n=m)}while(!u);return h!=t.length&&s?zv(t,0,h):t.subarray(0,h)},Hv=new sn(0),Wv=function(a,e){return((a[0]&15)!=8||a[0]>>4>7||(a[0]<<8|a[1])%31)&&mn(6,"invalid zlib data"),(a[1]>>5&1)==1&&mn(6,"invalid zlib data: "+(a[1]&32?"need":"unexpected")+" dictionary"),(a[1]>>3&4)+2};function Xv(a,e){return Gv(a.subarray(Wv(a),-4),{i:2},e,e)}var Yv=typeof TextDecoder<"u"&&new TextDecoder,qv=0;try{Yv.decode(Hv,{stream:!0}),qv=1}catch{}function of(a,e,t){const i=t.length-a-1;if(e>=t[i])return i-1;if(e<=t[a])return a;let n=a,r=i,s=Math.floor((n+r)/2);for(;e<t[s]||e>=t[s+1];)e<t[s]?r=s:n=s,s=Math.floor((n+r)/2);return s}function jv(a,e,t,i){const n=[],r=[],s=[];n[0]=1;for(let o=1;o<=t;++o){r[o]=e-i[a+1-o],s[o]=i[a+o]-e;let l=0;for(let c=0;c<o;++c){const u=s[c+1],f=r[o-c],h=n[c]/(u+f);n[c]=l+u*h,l=f*h}n[o]=l}return n}function Kv(a,e,t,i){const n=of(a,i,e),r=jv(n,i,a,e),s=new nt(0,0,0,0);for(let o=0;o<=a;++o){const l=t[n-a+o],c=r[o],u=l.w*c;s.x+=l.x*u,s.y+=l.y*u,s.z+=l.z*u,s.w+=l.w*c}return s}function Zv(a,e,t,i,n){const r=[];for(let f=0;f<=t;++f)r[f]=0;const s=[];for(let f=0;f<=i;++f)s[f]=r.slice(0);const o=[];for(let f=0;f<=t;++f)o[f]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let f=1;f<=t;++f){l[f]=e-n[a+1-f],c[f]=n[a+f]-e;let h=0;for(let d=0;d<f;++d){const x=c[d+1],g=l[f-d];o[f][d]=x+g;const m=o[d][f-1]/o[f][d];o[d][f]=h+x*m,h=g*m}o[f][f]=h}for(let f=0;f<=t;++f)s[0][f]=o[f][t];for(let f=0;f<=t;++f){let h=0,d=1;const x=[];for(let g=0;g<=t;++g)x[g]=r.slice(0);x[0][0]=1;for(let g=1;g<=i;++g){let m=0;const p=f-g,b=t-g;f>=g&&(x[d][0]=x[h][0]/o[b+1][p],m=x[d][0]*o[p][b]);const v=p>=-1?1:-p,M=f-1<=b?g-1:t-f;for(let T=v;T<=M;++T)x[d][T]=(x[h][T]-x[h][T-1])/o[b+1][p+T],m+=x[d][T]*o[p+T][b];f<=b&&(x[d][g]=-x[h][g-1]/o[b+1][f],m+=x[d][g]*o[f][b]),s[g][f]=m;const A=h;h=d,d=A}}let u=t;for(let f=1;f<=i;++f){for(let h=0;h<=t;++h)s[f][h]*=u;u*=t-f}return s}function Jv(a,e,t,i,n){const r=n<a?n:a,s=[],o=of(a,i,e),l=Zv(o,i,a,r,e),c=[];for(let u=0;u<t.length;++u){const f=t[u].clone(),h=f.w;f.x*=h,f.y*=h,f.z*=h,c[u]=f}for(let u=0;u<=r;++u){const f=c[o-a].clone().multiplyScalar(l[u][0]);for(let h=1;h<=a;++h)f.add(c[o-a+h].clone().multiplyScalar(l[u][h]));s[u]=f}for(let u=r+1;u<=n+1;++u)s[u]=new nt(0,0,0);return s}function Qv(a,e){let t=1;for(let n=2;n<=a;++n)t*=n;let i=1;for(let n=2;n<=e;++n)i*=n;for(let n=2;n<=a-e;++n)i*=n;return t/i}function $v(a){const e=a.length,t=[],i=[];for(let r=0;r<e;++r){const s=a[r];t[r]=new K(s.x,s.y,s.z),i[r]=s.w}const n=[];for(let r=0;r<e;++r){const s=t[r].clone();for(let o=1;o<=r;++o)s.sub(n[r-o].clone().multiplyScalar(Qv(r,o)*i[o]));n[r]=s.divideScalar(i[0])}return n}function e_(a,e,t,i,n){const r=Jv(a,e,t,i,n);return $v(r)}class t_ extends Jh{constructor(e,t,i,n,r){super();const s=t?t.length-1:0,o=i?i.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=n||0,this.endKnot=r||s;for(let l=0;l<o;++l){const c=i[l];this.controlPoints[l]=new nt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new K){const i=t,n=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Kv(this.degree,this.knots,this.controlPoints,n);return r.w!==1&&r.divideScalar(r.w),i.set(r.x,r.y,r.z)}getTangent(e,t=new K){const i=t,n=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=e_(this.degree,this.knots,this.controlPoints,n,1);return i.copy(r[1]).normalize(),i}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new nt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let et,bt,zt;class n_ extends yi{constructor(e){super(e)}load(e,t,i,n){const r=this,s=r.path===""?Bd.extractUrlBase(e):r.path,o=new Pd(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,s))}catch(c){n?n(c):console.error(c),r.manager.itemError(e)}},i,n)}parse(e,t){if(l_(e))et=new o_().parse(e);else{const n=uf(e);if(!c_(n))throw new Error("THREE.FBXLoader: Unknown format.");if(iu(n)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+iu(n));et=new s_().parse(n)}const i=new Ud(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new i_(i,this.manager).parse(et)}}class i_{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){bt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),n=this.parseDeformers(),r=new r_().parse(n);return this.parseScene(n,r,i),zt}parseConnections(){const e=new Map;return"Connections"in et&&et.Connections.connections.forEach(function(i){const n=i[0],r=i[1],s=i[2];e.has(n)||e.set(n,{parents:[],children:[]});const o={ID:r,relationship:s};e.get(n).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:n,relationship:s};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in et.Objects){const i=et.Objects.Video;for(const n in i){const r=i[n],s=parseInt(n);if(e[s]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(i[n]);t[r.RelativeFilename||r.Filename]=c}}}}for(const i in e){const n=e[i];t[n]!==void 0?e[i]=t[n]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,n=i.slice(i.lastIndexOf(".")+1).toLowerCase();let r;switch(n){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+n+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const s=new Uint8Array(t);return window.URL.createObjectURL(new Blob([s],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in et.Objects){const i=et.Objects.Texture;for(const n in i){const r=this.parseTexture(i[n],e);t.set(parseInt(n),r)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const n=e.WrapModeU,r=e.WrapModeV,s=n!==void 0?n.value:0,o=r!==void 0?r.value:0;if(i.wrapS=s===0?Fr:gn,i.wrapT=o===0?Fr:gn,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){const i=e.FileName.split(".").pop().toLowerCase();let n=this.manager.getHandler(`.${i}`);n===null&&(n=this.textureLoader);const r=n.path;r||n.setPath(this.textureLoader.path);const s=bt.get(e.id).children;let o;if(s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(o=t[s[0].ID],(o.indexOf("blob:")===0||o.indexOf("data:")===0)&&n.setPath(void 0)),o===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Dt;const l=n.load(o);return n.setPath(r),l}parseMaterials(e){const t=new Map;if("Material"in et.Objects){const i=et.Objects.Material;for(const n in i){const r=this.parseMaterial(i[n],e);r!==null&&t.set(parseInt(n),r)}}return t}parseMaterial(e,t){const i=e.id,n=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!bt.has(i))return null;const s=this.parseParameters(e,t,i);let o;switch(r.toLowerCase()){case"phong":o=new Aa;break;case"lambert":o=new gd;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new Aa;break}return o.setValues(s),o.name=n,o}parseParameters(e,t,i){const n={};e.BumpFactor&&(n.bumpScale=e.BumpFactor.value),e.Diffuse?n.color=Qe.colorSpaceToWorking(new je().fromArray(e.Diffuse.value),mt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(n.color=Qe.colorSpaceToWorking(new je().fromArray(e.DiffuseColor.value),mt)),e.DisplacementFactor&&(n.displacementScale=e.DisplacementFactor.value),e.Emissive?n.emissive=Qe.colorSpaceToWorking(new je().fromArray(e.Emissive.value),mt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(n.emissive=Qe.colorSpaceToWorking(new je().fromArray(e.EmissiveColor.value),mt)),e.EmissiveFactor&&(n.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),n.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(n.opacity===1||n.opacity===0)&&(n.opacity=e.Opacity?parseFloat(e.Opacity.value):null,n.opacity===null&&(n.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),n.opacity<1&&(n.transparent=!0),e.ReflectionFactor&&(n.reflectivity=e.ReflectionFactor.value),e.Shininess&&(n.shininess=e.Shininess.value),e.Specular?n.specular=Qe.colorSpaceToWorking(new je().fromArray(e.Specular.value),mt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(n.specular=Qe.colorSpaceToWorking(new je().fromArray(e.SpecularColor.value),mt));const r=this;return bt.get(i).children.forEach(function(s){const o=s.relationship;switch(o){case"Bump":n.bumpMap=r.getTexture(t,s.ID);break;case"Maya|TEX_ao_map":n.aoMap=r.getTexture(t,s.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":n.map=r.getTexture(t,s.ID),n.map!==void 0&&(n.map.colorSpace=mt);break;case"DisplacementColor":n.displacementMap=r.getTexture(t,s.ID);break;case"EmissiveColor":n.emissiveMap=r.getTexture(t,s.ID),n.emissiveMap!==void 0&&(n.emissiveMap.colorSpace=mt);break;case"NormalMap":case"Maya|TEX_normal_map":n.normalMap=r.getTexture(t,s.ID);break;case"ReflectionColor":n.envMap=r.getTexture(t,s.ID),n.envMap!==void 0&&(n.envMap.mapping=za,n.envMap.colorSpace=mt);break;case"SpecularColor":n.specularMap=r.getTexture(t,s.ID),n.specularMap!==void 0&&(n.specularMap.colorSpace=mt);break;case"TransparentColor":case"TransparencyFactor":n.alphaMap=r.getTexture(t,s.ID),n.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),n}getTexture(e,t){return"LayeredTexture"in et.Objects&&t in et.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=bt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in et.Objects){const i=et.Objects.Deformer;for(const n in i){const r=i[n],s=bt.get(parseInt(n));if(r.attrType==="Skin"){const o=this.parseSkeleton(s,i);o.ID=n,s.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=s.parents[0].ID,e[n]=o}else if(r.attrType==="BlendShape"){const o={id:n};o.rawTargets=this.parseMorphTargets(s,i),o.id=n,s.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[n]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(n){const r=t[n.ID];if(r.attrType!=="Cluster")return;const s={ID:n.ID,indices:[],weights:[],transformLink:new He().fromArray(r.TransformLink.a)};"Indexes"in r&&(s.indices=r.Indexes.a,s.weights=r.Weights.a),i.push(s)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let n=0;n<e.children.length;n++){const r=e.children[n],s=t[r.ID],o={name:s.attrName,initialWeight:s.DeformPercent,id:s.id,fullWeights:s.FullWeights.a};if(s.attrType!=="BlendShapeChannel")return;o.geoID=bt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(o)}return i}parseScene(e,t,i){zt=new Yi;const n=this.parseModels(e.skeletons,t,i),r=et.Objects.Model,s=this;n.forEach(function(l){const c=r[l.ID];s.setLookAtProperties(l,c),bt.get(l.ID).parents.forEach(function(f){const h=n.get(f.ID);h!==void 0&&h.add(l)}),l.parent===null&&zt.add(l)}),this.bindSkeleton(e.skeletons,t,n),this.addGlobalSceneSettings(),zt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=cf(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new a_().parse();zt.children.length===1&&zt.children[0].isGroup&&(zt.children[0].animations=o,zt=zt.children[0]),zt.animations=o}parseModels(e,t,i){const n=new Map,r=et.Objects.Model;for(const s in r){const o=parseInt(s),l=r[s],c=bt.get(o);let u=this.buildSkeleton(c,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,i);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Bo;break;case"Null":default:u=new Yi;break}u.name=l.attrName?st.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=o}this.getTransformData(u,l),n.set(o,u)}return n}buildSkeleton(e,t,i,n){let r=null;return e.parents.forEach(function(s){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,u){if(c.ID===s.ID){const f=r;r=new Bo,r.matrixWorld.copy(c.transformLink),r.name=n?st.sanitizeNodeName(n):"",r.userData.originalName=n,r.ID=i,l.bones[u]=r,f!==null&&r.add(f)}})}}),r}createCamera(e){let t,i;if(e.children.forEach(function(n){const r=et.Objects.NodeAttribute[n.ID];r!==void 0&&(i=r)}),i===void 0)t=new vt;else{let n=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(n=1);let r=1;i.NearPlane!==void 0&&(r=i.NearPlane.value/1e3);let s=1e3;i.FarPlane!==void 0&&(s=i.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(o=i.AspectWidth.value,l=i.AspectHeight.value);const c=o/l;let u=45;i.FieldOfView!==void 0&&(u=i.FieldOfView.value);const f=i.FocalLength?i.FocalLength.value:null;switch(n){case 0:t=new Gt(u,c,r,s),f!==null&&t.setFocalLength(f);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new vt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+n+"."),t=new vt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(n){const r=et.Objects.NodeAttribute[n.ID];r!==void 0&&(i=r)}),i===void 0)t=new vt;else{let n;i.LightType===void 0?n=0:n=i.LightType.value;let r=16777215;i.Color!==void 0&&(r=Qe.colorSpaceToWorking(new je().fromArray(i.Color.value),mt));let s=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(s=0);let o=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?o=0:o=i.FarAttenuationEnd.value);const l=1;switch(n){case 0:t=new gc(r,s,o,l);break;case 1:t=new Ou(r,s);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=Vt.degToRad(i.InnerAngle.value));let u=0;i.OuterAngle!==void 0&&(u=Vt.degToRad(i.OuterAngle.value),u=Math.max(u,1)),t=new Id(r,s,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new gc(r,s);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let n,r=null,s=null;const o=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),i.has(l.ID)&&o.push(i.get(l.ID))}),o.length>1?s=o:o.length>0?s=o[0]:(s=new Aa({name:yi.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(s)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,u=r.groups.length;c<u;c++){const f=r.groups[c];(f.materialIndex<0||f.materialIndex>=o.length)&&(f.materialIndex=o.length,l=!0)}if(l){const c=new Aa;o.push(c)}}return r.FBX_Deformer?(n=new Wh(r,s),n.normalizeSkinWeights()):n=new tn(r,s),n}createCurve(e,t){const i=e.children.reduce(function(r,s){return t.has(s.ID)&&(r=t.get(s.ID)),r},null),n=new Eu({name:yi.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Zh(i,n)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=qr(t.RotationOrder.value):i.eulerOrder=qr(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&bt.get(e.ID).children.forEach(function(n){if(n.relationship==="LookAtProperty"){const r=et.Objects.Model[n.ID];if("Lcl_Translation"in r){const s=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(s),zt.add(e.target)):e.lookAt(new K().fromArray(s))}}})}bindSkeleton(e,t,i){const n=this.parsePoseNodes();for(const r in e){const s=e[r];bt.get(parseInt(s.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;bt.get(c).parents.forEach(function(f){i.has(f.ID)&&i.get(f.ID).bind(new sl(s.bones),n[f.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in et.Objects){const t=et.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const n=t[i].PoseNode;Array.isArray(n)?n.forEach(function(r){e[r.Node]=new He().fromArray(r.Matrix.a)}):e[n.Node]=new He().fromArray(n.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in et){if("AmbientColor"in et.GlobalSettings){const e=et.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],n=e[2];if(t!==0||i!==0||n!==0){const r=new je().setRGB(t,i,n,mt);zt.add(new Od(r,1))}}"UnitScaleFactor"in et.GlobalSettings&&(zt.userData.unitScaleFactor=et.GlobalSettings.UnitScaleFactor.value)}}}class r_{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in et.Objects){const i=et.Objects.Geometry;for(const n in i){const r=bt.get(parseInt(n)),s=this.parseGeometry(r,i[n],e);t.set(parseInt(n),s)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const n=i.skeletons,r=[],s=e.parents.map(function(f){return et.Objects.Model[f.ID]});if(s.length===0)return;const o=e.children.reduce(function(f,h){return n[h.ID]!==void 0&&(f=n[h.ID]),f},null);e.children.forEach(function(f){i.morphTargets[f.ID]!==void 0&&r.push(i.morphTargets[f.ID])});const l=s[0],c={};"RotationOrder"in l&&(c.eulerOrder=qr(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=cf(c);return this.genGeometry(t,o,r,u)}genGeometry(e,t,i,n){const r=new en;e.attrName&&(r.name=e.attrName);const s=this.parseGeoNode(e,t),o=this.genBuffers(s),l=new qt(o.vertex,3);if(l.applyMatrix4(n),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new qt(o.colors,3)),t&&(r.setAttribute("skinIndex",new al(o.weightsIndices,4)),r.setAttribute("skinWeight",new qt(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const c=new Ke().getNormalMatrix(n),u=new qt(o.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){const f=u===0?"uv":`uv${u}`;r.setAttribute(f,new qt(o.uvs[u],2))}),s.material&&s.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(f,h){f!==c&&(r.addGroup(u,h-u,c),c=f,u=h)}),r.groups.length>0){const f=r.groups[r.groups.length-1],h=f.start+f.count;h!==o.materialIndex.length&&r.addGroup(h,o.materialIndex.length-h,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,i,n),r}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let n=0;for(;e.LayerElementUV[n];)e.LayerElementUV[n].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[n])),n++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(n,r){n.indices.forEach(function(s,o){i.weightTable[s]===void 0&&(i.weightTable[s]=[]),i.weightTable[s].push({id:r,weight:n.weights[o]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,n=0,r=!1,s=[],o=[],l=[],c=[],u=[],f=[];const h=this;return e.vertexIndices.forEach(function(d,x){let g,m=!1;d<0&&(d=d^-1,m=!0);let p=[],b=[];if(s.push(d*3,d*3+1,d*3+2),e.color){const v=Ua(x,i,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){b.push(v.weight),p.push(v.id)}),b.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const v=[0,0,0,0],M=[0,0,0,0];b.forEach(function(A,T){let w=A,P=p[T];M.forEach(function(S,y,D){if(w>S){D[y]=w,w=S;const R=v[y];v[y]=P,P=R}})}),p=v,b=M}for(;b.length<4;)b.push(0),p.push(0);for(let v=0;v<4;++v)u.push(b[v]),f.push(p[v])}if(e.normal){const v=Ua(x,i,d,e.normal);o.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(g=Ua(x,i,d,e.material)[0],g<0&&(h.negativeMaterialIndices=!0,g=0)),e.uv&&e.uv.forEach(function(v,M){const A=Ua(x,i,d,v);c[M]===void 0&&(c[M]=[]),c[M].push(A[0]),c[M].push(A[1])}),n++,m&&(h.genFace(t,e,s,g,o,l,c,u,f,n),i++,n=0,s=[],o=[],l=[],c=[],u=[],f=[])}),t}getNormalNewell(e){const t=new K(0,0,0);for(let i=0;i<e.length;i++){const n=e[i],r=e[(i+1)%e.length];t.x+=(n.y-r.y)*(n.z+r.z),t.y+=(n.z-r.z)*(n.x+r.x),t.z+=(n.x-r.x)*(n.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),n=(Math.abs(t.z)>.5?new K(0,1,0):new K(0,0,1)).cross(t).normalize(),r=t.clone().cross(n).normalize();return{normal:t,tangent:n,bitangent:r}}flattenVertex(e,t,i){return new $e(e.dot(t),e.dot(i))}genFace(e,t,i,n,r,s,o,l,c,u){let f;if(u>3){const h=[],d=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<i.length;p+=3)h.push(new K(d[i[p]],d[i[p+1]],d[i[p+2]]));const{tangent:x,bitangent:g}=this.getNormalTangentAndBitangent(h),m=[];for(const p of h)m.push(this.flattenVertex(p,x,g));f=ll.triangulateShape(m,[])}else f=[[0,1,2]];for(const[h,d,x]of f)e.vertex.push(t.vertexPositions[i[h*3]]),e.vertex.push(t.vertexPositions[i[h*3+1]]),e.vertex.push(t.vertexPositions[i[h*3+2]]),e.vertex.push(t.vertexPositions[i[d*3]]),e.vertex.push(t.vertexPositions[i[d*3+1]]),e.vertex.push(t.vertexPositions[i[d*3+2]]),e.vertex.push(t.vertexPositions[i[x*3]]),e.vertex.push(t.vertexPositions[i[x*3+1]]),e.vertex.push(t.vertexPositions[i[x*3+2]]),t.skeleton&&(e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[x*4]),e.vertexWeights.push(l[x*4+1]),e.vertexWeights.push(l[x*4+2]),e.vertexWeights.push(l[x*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[x*4]),e.weightsIndices.push(c[x*4+1]),e.weightsIndices.push(c[x*4+2]),e.weightsIndices.push(c[x*4+3])),t.color&&(e.colors.push(s[h*3]),e.colors.push(s[h*3+1]),e.colors.push(s[h*3+2]),e.colors.push(s[d*3]),e.colors.push(s[d*3+1]),e.colors.push(s[d*3+2]),e.colors.push(s[x*3]),e.colors.push(s[x*3+1]),e.colors.push(s[x*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(n),e.materialIndex.push(n),e.materialIndex.push(n)),t.normal&&(e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[x*3]),e.normal.push(r[x*3+1]),e.normal.push(r[x*3+2])),t.uv&&t.uv.forEach(function(g,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(o[m][h*2]),e.uvs[m].push(o[m][h*2+1]),e.uvs[m].push(o[m][d*2]),e.uvs[m].push(o[m][d*2+1]),e.uvs[m].push(o[m][x*2]),e.uvs[m].push(o[m][x*2+1])})}addMorphTargets(e,t,i,n){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;i.forEach(function(s){s.rawTargets.forEach(function(o){const l=et.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,n,o.name)})})}genMorphGeometry(e,t,i,n,r){const s=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],u=e.attributes.position.count*3,f=new Float32Array(u);for(let g=0;g<c.length;g++){const m=c[g]*3;f[m]=l[g*3],f[m+1]=l[g*3+1],f[m+2]=l[g*3+2]}const h={vertexIndices:o,vertexPositions:f,baseVertexPositions:s},d=this.genBuffers(h),x=new qt(d.vertex,3);x.name=r||i.attrName,x.applyMatrix4(n),e.morphAttributes.position.push(x)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.Normals.a;let r=[];return i==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:n,indices:r,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.UV.a;let r=[];return i==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:n,indices:r,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.Colors.a;let r=[];i==="IndexToDirect"&&(r=e.ColorIndex.a);for(let s=0,o=new je;s<n.length;s+=4)o.fromArray(n,s),Qe.colorSpaceToWorking(o,mt),o.toArray(n,s);return{dataSize:4,buffer:n,indices:r,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const n=e.Materials.a,r=[];for(let s=0;s<n.length;++s)r.push(s);return{dataSize:1,buffer:n,indices:r,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new en;const i=t-1,n=e.KnotVector.a,r=[],s=e.Points.a;for(let f=0,h=s.length;f<h;f+=4)r.push(new nt().fromArray(s,f));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=i,l=n.length-1-o;for(let f=0;f<i;++f)r.push(r[f])}const u=new t_(i,n,r,o,l).getPoints(r.length*12);return new en().setFromPoints(u)}}class a_{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const n=t[i],r=this.addClip(n);e.push(r)}return e}parseClips(){if(et.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=et.Objects.AnimationCurveNode,t=new Map;for(const i in e){const n=e[i];if(n.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:n.id,attr:n.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=et.Objects.AnimationCurve;for(const i in t){const n={id:t[i].id,times:t[i].KeyTime.a.map(u_),values:t[i].KeyValueFloat.a},r=bt.get(n.id);if(r!==void 0){const s=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(s).curves.x=n:o.match(/Y/)?e.get(s).curves.y=n:o.match(/Z/)?e.get(s).curves.z=n:o.match(/DeformPercent/)&&e.has(s)&&(e.get(s).curves.morph=n)}}}parseAnimationLayers(e){const t=et.Objects.AnimationLayer,i=new Map;for(const n in t){const r=[],s=bt.get(parseInt(n));s!==void 0&&(s.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const f=bt.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(f!==void 0){const h=et.Objects.Model[f.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:h.attrName?st.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};zt.traverse(function(x){x.ID===h.id&&(d.transform=x.matrix,x.userData.transformData&&(d.eulerOrder=x.userData.transformData.eulerOrder))}),d.transform||(d.transform=new He),"PreRotation"in h&&(d.preRotation=h.PreRotation.value),"PostRotation"in h&&(d.postRotation=h.PostRotation.value),r[c]=d}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const f=bt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,h=bt.get(f).parents[0].ID,d=bt.get(h).parents[0].ID,x=bt.get(d).parents[0].ID,g=et.Objects.Model[x],m={modelName:g.attrName?st.sanitizeNodeName(g.attrName):"",morphName:et.Objects.Deformer[f].attrName};r[c]=m}r[c][u.attr]=u}}}),i.set(parseInt(n),r))}return i}parseAnimStacks(e){const t=et.Objects.AnimationStack,i={};for(const n in t){const r=bt.get(parseInt(n)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const s=e.get(r[0].ID);i[n]={name:t[n].attrName,layer:s}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(n){t=t.concat(i.generateTracks(n))}),new Td(e.name,-1,t)}generateTracks(e){const t=[];let i=new K,n=new K;if(e.transform&&e.transform.decompose(i,new Yt,n),i=i.toArray(),n=n.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,n,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,i,n){const r=this.getTimesForAllAxes(t),s=this.getKeyframeTrackValues(r,t,i);return new Yr(e+"."+n,r,s)}generateRotationTrack(e,t,i,n,r){let s,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,r);s=h[0],o=h[1]}const l=qr(0);i!==void 0&&(i=i.map(Vt.degToRad),i.push(l),i=new wt().fromArray(i),i=new Yt().setFromEuler(i)),n!==void 0&&(n=n.map(Vt.degToRad),n.push(l),n=new wt().fromArray(n),n=new Yt().setFromEuler(n).invert());const c=new Yt,u=new wt,f=[];if(!o||!s)return new ir(e+".quaternion",[0],[0]);for(let h=0;h<o.length;h+=3)u.set(o[h],o[h+1],o[h+2],r),c.setFromEuler(u),i!==void 0&&c.premultiply(i),n!==void 0&&c.multiply(n),h>2&&new Yt().fromArray(f,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(f,h/3*4);return new ir(e+".quaternion",s,f)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(r){return r/100}),n=zt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Xr(e.modelName+".morphTargetInfluences["+n+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,n){return i-n}),t.length>1){let i=1,n=t[0];for(let r=1;r<t.length;r++){const s=t[r];s!==n&&(t[i]=s,n=s,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const n=i,r=[];let s=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(s=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),s!==-1){const u=t.x.values[s];r.push(u),n[0]=u}else r.push(n[0]);if(o!==-1){const u=t.y.values[o];r.push(u),n[1]=u}else r.push(n[1]);if(l!==-1){const u=t.z.values[l];r.push(u),n[2]=u}else r.push(n[2])}),r}interpolateRotations(e,t,i,n){const r=[],s=[];r.push(e.times[0]),s.push(Vt.degToRad(e.values[0])),s.push(Vt.degToRad(t.values[0])),s.push(Vt.degToRad(i.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],i.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Vt.degToRad),u=[e.values[o],t.values[o],i.values[o]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const f=u.map(Vt.degToRad),h=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],d=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const g=Math.max(...d)/180,m=new wt(...c,n),p=new wt(...f,n),b=new Yt().setFromEuler(m),v=new Yt().setFromEuler(p);b.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const M=e.times[o-1],A=e.times[o]-M,T=new Yt,w=new wt;for(let P=0;P<1;P+=1/g)T.copy(b.clone().slerp(v.clone(),P)),r.push(M+P*A),w.setFromQuaternion(T,n),s.push(w.x),s.push(w.y),s.push(w.z)}else r.push(e.times[o]),s.push(Vt.degToRad(e.values[o])),s.push(Vt.degToRad(t.values[o])),s.push(Vt.degToRad(i.values[o]))}return[r,s]}}class s_{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new lf,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(n,r){const s=n.match(/^[\s\t]*;/),o=n.match(/^[\s\t]*$/);if(s||o)return;const l=n.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=n.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=n.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(n,l):c?t.parseNodeProperty(n,c,i[++r]):u?t.popStack():n.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(n)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),n=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:i},s=this.parseNodeAttr(n),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,r):i in o?(i==="PoseNode"?o.PoseNode.push(r):o[i].id!==void 0&&(o[i]={},o[i][o[i].id]=o[i]),s.id!==""&&(o[i][s.id]=r)):typeof s.id=="number"?(o[i]={},o[i][s.id]=r):i!=="Properties70"&&(i==="PoseNode"?o[i]=[r]:o[i]=r),typeof s.id=="number"&&(r.id=s.id),s.name!==""&&(r.attrName=s.name),s.type!==""&&(r.attrType=s.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",n="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),n=e[2]),{id:t,name:i,type:n}}parseNodeProperty(e,t,i){let n=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();n==="Content"&&r===","&&(r=i.replace(/"/g,"").replace(/,$/,"").trim());const s=this.getCurrentNode();if(s.name==="Properties70"){this.parseNodeSpecialProperty(e,n,r);return}if(n==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let f=r.split(",").slice(3);f=f.map(function(h){return h.trim().replace(/^"/,"")}),n="connections",r=[c,u],h_(r,f),s[n]===void 0&&(s[n]=[])}n==="Node"&&(s.id=r),n in s&&Array.isArray(s[n])?s[n].push(r):n!=="a"?s[n]=r:s.a=r,this.setCurrentProp(s,n),n==="a"&&r.slice(-1)!==","&&(s.a=Zs(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Zs(t.a))}parseNodeSpecialProperty(e,t,i){const n=i.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=n[0],s=n[1],o=n[2],l=n[3];let c=n[4];switch(s){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Zs(c);break}this.getPrevNode()[r]={type:s,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class o_{parse(e){const t=new nu(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const n=new lf;for(;!this.endOfContent(t);){const r=this.parseNode(t,i);r!==null&&n.add(r.name,r)}return n}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},n=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const s=e.getUint8(),o=e.getString(s);if(n===0)return null;const l=[];for(let h=0;h<r;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",f=l.length>2?l[2]:"";for(i.singleProperty=r===1&&e.getOffset()===n;n>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(o,i,h)}return i.propertyList=l,typeof c=="number"&&(i.id=c),u!==""&&(i.attrName=u),f!==""&&(i.attrType=f),o!==""&&(i.name=o),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const n=i.propertyList[0];Array.isArray(n)?(t[i.name]=i,i.a=n):t[i.name]=n}else if(e==="Connections"&&i.name==="C"){const n=[];i.propertyList.forEach(function(r,s){s!==0&&n.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(n)}else if(i.name==="Properties70")Object.keys(i).forEach(function(r){t[r]=i[r]});else if(e==="Properties70"&&i.name==="P"){let n=i.propertyList[0],r=i.propertyList[1];const s=i.propertyList[2],o=i.propertyList[3];let l;n.indexOf("Lcl ")===0&&(n=n.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[n]={type:r,type2:s,flag:o,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const n=e.getUint32(),r=e.getUint32(),s=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(n);case"d":return e.getFloat64Array(n);case"f":return e.getFloat32Array(n);case"i":return e.getInt32Array(n);case"l":return e.getInt64Array(n)}const o=Xv(new Uint8Array(e.getArrayBuffer(s))),l=new nu(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(n);case"d":return l.getFloat64Array(n);case"f":return l.getFloat32Array(n);case"i":return l.getInt32Array(n);case"l":return l.getInt64Array(n)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class nu{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const n=i.indexOf(0);return n>=0&&(i=new Uint8Array(this.dv.buffer,t,n)),this._textDecoder.decode(i)}}class lf{add(e,t){this[e]=t}}function l_(a){const e="Kaydara FBX Binary  \0";return a.byteLength>=e.length&&e===uf(a,0,e.length)}function c_(a){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(n){const r=a[n-1];return a=a.slice(t+n),t++,r}for(let n=0;n<e.length;++n)if(i(1)===e[n])return!1;return!0}function iu(a){const e=/FBXVersion: (\d+)/,t=a.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function u_(a){return a/46186158e3}const f_=[];function Ua(a,e,t,i){let n;switch(i.mappingType){case"ByPolygonVertex":n=a;break;case"ByPolygon":n=e;break;case"ByVertice":n=t;break;case"AllSame":n=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(n=i.indices[n]);const r=n*i.dataSize,s=r+i.dataSize;return d_(f_,i.buffer,r,s)}const Ks=new wt,Wi=new K;function cf(a){const e=new He,t=new He,i=new He,n=new He,r=new He,s=new He,o=new He,l=new He,c=new He,u=new He,f=new He,h=new He,d=a.inheritType?a.inheritType:0;a.translation&&e.setPosition(Wi.fromArray(a.translation));const x=qr(0);if(a.preRotation){const D=a.preRotation.map(Vt.degToRad);D.push(x),t.makeRotationFromEuler(Ks.fromArray(D))}if(a.rotation){const D=a.rotation.map(Vt.degToRad);D.push(a.eulerOrder||x),i.makeRotationFromEuler(Ks.fromArray(D))}if(a.postRotation){const D=a.postRotation.map(Vt.degToRad);D.push(x),n.makeRotationFromEuler(Ks.fromArray(D)),n.invert()}a.scale&&r.scale(Wi.fromArray(a.scale)),a.scalingOffset&&o.setPosition(Wi.fromArray(a.scalingOffset)),a.scalingPivot&&s.setPosition(Wi.fromArray(a.scalingPivot)),a.rotationOffset&&l.setPosition(Wi.fromArray(a.rotationOffset)),a.rotationPivot&&c.setPosition(Wi.fromArray(a.rotationPivot)),a.parentMatrixWorld&&(f.copy(a.parentMatrix),u.copy(a.parentMatrixWorld));const g=t.clone().multiply(i).multiply(n),m=new He;m.extractRotation(u);const p=new He;p.copyPosition(u);const b=p.clone().invert().multiply(u),v=m.clone().invert().multiply(b),M=r,A=new He;if(d===0)A.copy(m).multiply(g).multiply(v).multiply(M);else if(d===1)A.copy(m).multiply(v).multiply(g).multiply(M);else{const R=new He().scale(new K().setFromMatrixScale(f)).clone().invert(),L=v.clone().multiply(R);A.copy(m).multiply(g).multiply(L).multiply(M)}const T=c.clone().invert(),w=s.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(n).multiply(T).multiply(o).multiply(s).multiply(r).multiply(w);const S=new He().copyPosition(P),y=u.clone().multiply(S);return h.copyPosition(y),P=h.clone().multiply(A),P.premultiply(u.invert()),P}function qr(a){a=a||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return a===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[a]}function Zs(a){return a.split(",").map(function(t){return parseFloat(t)})}function uf(a,e,t){return e===void 0&&(e=0),t===void 0&&(t=a.byteLength),new TextDecoder().decode(new Uint8Array(a,e,t))}function h_(a,e){for(let t=0,i=a.length,n=e.length;t<n;t++,i++)a[i]=e[t]}function d_(a,e,t,i){for(let n=t,r=0;n<i;n++,r++)a[r]=e[n];return a}function p_(a,e){const t=new Ng({antialias:!0,canvas:document.querySelector("#app")}),i=document.querySelector("#app"),n=i.clientWidth,r=i.clientHeight;t.setClearColor(16777215);const s=new Gh,o=new Gt(45,n/r,1,1e4);o.position.set(0,0,1e3);function l(){const p=i.clientWidth,b=Math.max(i.clientHeight,1),v=Math.min(window.devicePixelRatio||1,2);t.setPixelRatio(v),t.setSize(p,b,!1),o.aspect=p/b,o.updateProjectionMatrix()}l(),window.addEventListener("resize",l);const c=new Ou(16777215);c.position.set(1,1,1),s.add(c);const u=new n_;let f;u.load(a,p=>{p.scale.set(1.5,1.5,1.5),p.traverse(b=>{b.isMesh&&(b.material=new xd({color:65280,metalness:.5,roughness:.5,emissive:35071,emissiveIntensity:.3}))}),f=p,s.add(p)});const h=[],d=180;let x=[];function g(){const p=new $u,b=x.length>0?x[Math.floor(Math.random()*x.length)]:{text:"Hello World",fontSize:48,fontUrl:"https://fonts.gstatic.com/s/roboto/v49/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYaammT.ttf"};return p.text=b.text,p.fontSize=b.fontSize+Math.random()*24,p.font=b.fontUrl,p.color="#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),p.anchorX="center",p.anchorY="middle",p.position.set((Math.random()-.5)*1800,(Math.random()-.5)*1200,(Math.random()-.5)*800),s.add(p),p.sync(),p}fetch(e).then(p=>p.json()).then(p=>{x=p.languages;for(let b=0;b<d;b++)h.push(g());m()}).catch(p=>{console.error("Error loading languages.json:",p);for(let b=0;b<d;b++)h.push(g());m()});function m(){requestAnimationFrame(m),f&&(f.rotation.x+=.005,f.rotation.y+=.01,f.rotation.z+=.003);for(let p=h.length-1;p>=0;p--){const b=h[p],v=b.position.clone().normalize();b.position.addScaledVector(v,.5);const M=o.position.distanceTo(b.position),A=Math.max(0,1-M/1e3);b.material.opacity=A,b.material.transparent=!0,A===0&&(s.remove(b),b.dispose(),h.splice(p,1),h.push(g()))}t.render(s,o)}}window.init=p_;
