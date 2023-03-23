/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jimp/browser/lib/jimp.js":
/*!***********************************************!*\
  !*** ./node_modules/jimp/browser/lib/jimp.js ***!
  \***********************************************/
/***/ (() => {

/*! For license information please see jimp.js.LICENSE.txt */
(()=>{var __webpack_modules__={236:(t,e,r)=>{var i=r(4618);function n(t,e){var r=new i(t,e);return function(t){return r.convert(t)}}n.BIN="01",n.OCT="01234567",n.DEC="0123456789",n.HEX="0123456789abcdef",t.exports=n},4618:t=>{"use strict";function e(t,e){if(!(t&&e&&t.length&&e.length))throw new Error("Bad alphabet");this.srcAlphabet=t,this.dstAlphabet=e}e.prototype.convert=function(t){var e,r,i,n={},a=this.srcAlphabet.length,o=this.dstAlphabet.length,s=t.length,h="string"==typeof t?"":[];if(!this.isValid(t))throw new Error('Number "'+t+'" contains of non-alphabetic digits ('+this.srcAlphabet+")");if(this.srcAlphabet===this.dstAlphabet)return t;for(e=0;e<s;e++)n[e]=this.srcAlphabet.indexOf(t[e]);do{for(r=0,i=0,e=0;e<s;e++)(r=r*a+n[e])>=o?(n[i++]=parseInt(r/o,10),r%=o):i>0&&(n[i++]=0);s=i,h=this.dstAlphabet.slice(r,r+1).concat(h)}while(0!==i);return h},e.prototype.isValid=function(t){for(var e=0;e<t.length;++e)if(-1===this.srcAlphabet.indexOf(t[e]))return!1;return!0},t.exports=e},5766:(t,e)=>{"use strict";e.byteLength=function(t){var e=h(t),r=e[0],i=e[1];return 3*(r+i)/4-i},e.toByteArray=function(t){var e,r,a=h(t),o=a[0],s=a[1],f=new n(function(t,e,r){return 3*(e+r)/4-r}(0,o,s)),u=0,l=s>0?o-4:o;for(r=0;r<l;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],f[u++]=e>>16&255,f[u++]=e>>8&255,f[u++]=255&e;return 2===s&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,f[u++]=255&e),1===s&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,f[u++]=e>>8&255,f[u++]=255&e),f},e.fromByteArray=function(t){for(var e,i=t.length,n=i%3,a=[],o=16383,s=0,h=i-n;s<h;s+=o)a.push(f(t,s,s+o>h?h:s+o));return 1===n?(e=t[i-1],a.push(r[e>>2]+r[e<<4&63]+"==")):2===n&&(e=(t[i-2]<<8)+t[i-1],a.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),a.join("")};for(var r=[],i=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,s=a.length;o<s;++o)r[o]=a[o],i[a.charCodeAt(o)]=o;function h(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function f(t,e,i){for(var n,a,o=[],s=e;s<i;s+=3)n=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),o.push(r[(a=n)>>18&63]+r[a>>12&63]+r[a>>6&63]+r[63&a]);return o.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},486:(t,e,r)=>{var i=r(5433),n=r(1651);t.exports={encode:i,decode:n}},1651:(t,e,r)=>{var i=r(8834).lW;function n(t,e){if(this.pos=0,this.buffer=t,this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=this.buffer.toString("utf-8",0,this.pos+=2),"BM"!=this.flag)throw new Error("Invalid BMP File");this.parseHeader(),this.parseRGBA()}n.prototype.parseHeader=function(){if(this.fileSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.reserved=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.offset=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.headerSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.width=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.height=this.buffer.readInt32LE(this.pos),this.pos+=4,this.planes=this.buffer.readUInt16LE(this.pos),this.pos+=2,this.bitPP=this.buffer.readUInt16LE(this.pos),this.pos+=2,this.compress=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.rawSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.hr=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.vr=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.colors=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.importantColors=this.buffer.readUInt32LE(this.pos),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var r=this.buffer.readUInt8(this.pos++),i=this.buffer.readUInt8(this.pos++),n=this.buffer.readUInt8(this.pos++),a=this.buffer.readUInt8(this.pos++);this.palette[e]={red:n,green:i,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},n.prototype.parseRGBA=function(){var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new i(e),this[t]()},n.prototype.bit1=function(){var t=Math.ceil(this.width/8),e=t%4,r=this.height>=0?this.height-1:-this.height;for(r=this.height-1;r>=0;r--){for(var i=this.bottom_up?r:this.height-1-r,n=0;n<t;n++)for(var a=this.buffer.readUInt8(this.pos++),o=i*this.width*4+8*n*4,s=0;s<8&&8*n+s<this.width;s++){var h=this.palette[a>>7-s&1];this.data[o+4*s]=0,this.data[o+4*s+1]=h.blue,this.data[o+4*s+2]=h.green,this.data[o+4*s+3]=h.red}0!=e&&(this.pos+=4-e)}},n.prototype.bit4=function(){if(2==this.compress){this.data.fill(255);for(var t=0,e=this.bottom_up?this.height-1:0,r=!1;t<this.data.length;){var i=this.buffer.readUInt8(this.pos++),n=this.buffer.readUInt8(this.pos++);if(0==i){if(0==n){this.bottom_up?e--:e++,t=e*this.width*4,r=!1;continue}if(1==n)break;if(2==n){var a=this.buffer.readUInt8(this.pos++),o=this.buffer.readUInt8(this.pos++);this.bottom_up?e-=o:e+=o,t+=o*this.width*4+4*a}else{for(var s=this.buffer.readUInt8(this.pos++),h=0;h<n;h++)r?f.call(this,15&s):f.call(this,(240&s)>>4),1&h&&h+1<n&&(s=this.buffer.readUInt8(this.pos++)),r=!r;1==(n+1>>1&1)&&this.pos++}}else for(h=0;h<i;h++)r?f.call(this,15&n):f.call(this,(240&n)>>4),r=!r}function f(e){var r=this.palette[e];this.data[t]=0,this.data[t+1]=r.blue,this.data[t+2]=r.green,this.data[t+3]=r.red,t+=4}}else{var u=Math.ceil(this.width/2),l=u%4;for(o=this.height-1;o>=0;o--){var c=this.bottom_up?o:this.height-1-o;for(a=0;a<u;a++){n=this.buffer.readUInt8(this.pos++),t=c*this.width*4+2*a*4;var d=n>>4,p=15&n,m=this.palette[d];if(this.data[t]=0,this.data[t+1]=m.blue,this.data[t+2]=m.green,this.data[t+3]=m.red,2*a+1>=this.width)break;m=this.palette[p],this.data[t+4]=0,this.data[t+4+1]=m.blue,this.data[t+4+2]=m.green,this.data[t+4+3]=m.red}0!=l&&(this.pos+=4-l)}}},n.prototype.bit8=function(){if(1==this.compress){this.data.fill(255);for(var t=0,e=this.bottom_up?this.height-1:0;t<this.data.length;){var r=this.buffer.readUInt8(this.pos++),i=this.buffer.readUInt8(this.pos++);if(0==r){if(0==i){this.bottom_up?e--:e++,t=e*this.width*4;continue}if(1==i)break;if(2==i){var n=this.buffer.readUInt8(this.pos++),a=this.buffer.readUInt8(this.pos++);this.bottom_up?e-=a:e+=a,t+=a*this.width*4+4*n}else{for(var o=0;o<i;o++){var s=this.buffer.readUInt8(this.pos++);h.call(this,s)}!0&i&&this.pos++}}else for(o=0;o<r;o++)h.call(this,i)}function h(e){var r=this.palette[e];this.data[t]=0,this.data[t+1]=r.blue,this.data[t+2]=r.green,this.data[t+3]=r.red,t+=4}}else{var f=this.width%4;for(a=this.height-1;a>=0;a--){var u=this.bottom_up?a:this.height-1-a;for(n=0;n<this.width;n++)if(i=this.buffer.readUInt8(this.pos++),t=u*this.width*4+4*n,i<this.palette.length){var l=this.palette[i];this.data[t]=0,this.data[t+1]=l.blue,this.data[t+2]=l.green,this.data[t+3]=l.red}else this.data[t]=0,this.data[t+1]=255,this.data[t+2]=255,this.data[t+3]=255;0!=f&&(this.pos+=4-f)}}},n.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var i=this.bottom_up?r:this.height-1-r,n=0;n<this.width;n++){var a=this.buffer.readUInt16LE(this.pos);this.pos+=2;var o=(a&e)/e*255|0,s=(a>>5&e)/e*255|0,h=(a>>10&e)/e*255|0,f=a>>15?255:0,u=i*this.width*4+4*n;this.data[u]=f,this.data[u+1]=o,this.data[u+2]=s,this.data[u+3]=h}this.pos+=t}},n.prototype.bit16=function(){var t=this.width%2*2;this.maskRed=31744,this.maskGreen=992,this.maskBlue=31,this.mask0=0,3==this.compress&&(this.maskRed=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.maskGreen=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.maskBlue=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.mask0=this.buffer.readUInt32LE(this.pos),this.pos+=4);for(var e=[0,0,0],r=0;r<16;r++)this.maskRed>>r&1&&e[0]++,this.maskGreen>>r&1&&e[1]++,this.maskBlue>>r&1&&e[2]++;e[1]+=e[0],e[2]+=e[1],e[0]=8-e[0],e[1]-=8,e[2]-=8;for(var i=this.height-1;i>=0;i--){for(var n=this.bottom_up?i:this.height-1-i,a=0;a<this.width;a++){var o=this.buffer.readUInt16LE(this.pos);this.pos+=2;var s=(o&this.maskBlue)<<e[0],h=(o&this.maskGreen)>>e[1],f=(o&this.maskRed)>>e[2],u=n*this.width*4+4*a;this.data[u]=0,this.data[u+1]=s,this.data[u+2]=h,this.data[u+3]=f}this.pos+=t}},n.prototype.bit24=function(){for(var t=this.height-1;t>=0;t--){for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var i=this.buffer.readUInt8(this.pos++),n=this.buffer.readUInt8(this.pos++),a=this.buffer.readUInt8(this.pos++),o=e*this.width*4+4*r;this.data[o]=0,this.data[o+1]=i,this.data[o+2]=n,this.data[o+3]=a}this.pos+=this.width%4}},n.prototype.bit32=function(){if(3==this.compress){this.maskRed=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.maskGreen=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.maskBlue=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.mask0=this.buffer.readUInt32LE(this.pos),this.pos+=4;for(var t=this.height-1;t>=0;t--)for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var i=this.buffer.readUInt8(this.pos++),n=this.buffer.readUInt8(this.pos++),a=this.buffer.readUInt8(this.pos++),o=this.buffer.readUInt8(this.pos++),s=e*this.width*4+4*r;this.data[s]=i,this.data[s+1]=n,this.data[s+2]=a,this.data[s+3]=o}}else for(t=this.height-1;t>=0;t--)for(e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++)n=this.buffer.readUInt8(this.pos++),a=this.buffer.readUInt8(this.pos++),o=this.buffer.readUInt8(this.pos++),i=this.buffer.readUInt8(this.pos++),s=e*this.width*4+4*r,this.data[s]=i,this.data[s+1]=n,this.data[s+2]=a,this.data[s+3]=o},n.prototype.getData=function(){return this.data},t.exports=function(t){return new n(t)}},5433:(t,e,r)=>{var i=r(8834).lW;function n(t){this.buffer=t.data,this.width=t.width,this.height=t.height,this.extraBytes=this.width%4,this.rgbSize=this.height*(3*this.width+this.extraBytes),this.headerInfoSize=40,this.data=[],this.flag="BM",this.reserved=0,this.offset=54,this.fileSize=this.rgbSize+this.offset,this.planes=1,this.bitPP=24,this.compress=0,this.hr=0,this.vr=0,this.colors=0,this.importantColors=0}n.prototype.encode=function(){var t=new i(this.offset+this.rgbSize);this.pos=0,t.write(this.flag,this.pos,2),this.pos+=2,t.writeUInt32LE(this.fileSize,this.pos),this.pos+=4,t.writeUInt32LE(this.reserved,this.pos),this.pos+=4,t.writeUInt32LE(this.offset,this.pos),this.pos+=4,t.writeUInt32LE(this.headerInfoSize,this.pos),this.pos+=4,t.writeUInt32LE(this.width,this.pos),this.pos+=4,t.writeInt32LE(-this.height,this.pos),this.pos+=4,t.writeUInt16LE(this.planes,this.pos),this.pos+=2,t.writeUInt16LE(this.bitPP,this.pos),this.pos+=2,t.writeUInt32LE(this.compress,this.pos),this.pos+=4,t.writeUInt32LE(this.rgbSize,this.pos),this.pos+=4,t.writeUInt32LE(this.hr,this.pos),this.pos+=4,t.writeUInt32LE(this.vr,this.pos),this.pos+=4,t.writeUInt32LE(this.colors,this.pos),this.pos+=4,t.writeUInt32LE(this.importantColors,this.pos),this.pos+=4;for(var e=0,r=3*this.width+this.extraBytes,n=0;n<this.height;n++){for(var a=0;a<this.width;a++){var o=this.pos+n*r+3*a;e++,t[o]=this.buffer[e++],t[o+1]=this.buffer[e++],t[o+2]=this.buffer[e++]}if(this.extraBytes>0){var s=this.pos+n*r+3*this.width;t.fill(0,s,s+this.extraBytes)}}return t},t.exports=function(t,e){return void 0===e&&(e=100),{data:new n(t).encode(),width:t.width,height:t.height}}},5137:(t,e,r)=>{var i=r(8834).lW;t.exports=function(t,e){if(i.isBuffer(t)&&i.isBuffer(e)){if("function"==typeof t.equals)return t.equals(e);if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}}},8834:(t,e,r)=>{"use strict";var i=r(5766),n=r(4181);e.lW=s,e.h2=50;var a=2147483647;function o(t){if(t>a)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return e.__proto__=s.prototype,e}function s(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return u(t)}return h(t,e,r)}function h(t,e,r){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!s.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|d(t,e),i=o(r),n=i.write(t,e);return n!==r&&(i=i.slice(0,n)),i}(t,e);if(ArrayBuffer.isView(t))return l(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(F(t,ArrayBuffer)||t&&F(t.buffer,ArrayBuffer))return function(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var i;return(i=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r)).__proto__=s.prototype,i}(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return s.from(i,e,r);var n=function(t){if(s.isBuffer(t)){var e=0|c(t.length),r=o(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||j(t.length)?o(0):l(t):"Buffer"===t.type&&Array.isArray(t.data)?l(t.data):void 0}(t);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return s.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function u(t){return f(t),o(t<0?0:0|c(t))}function l(t){for(var e=t.length<0?0:0|c(t.length),r=o(e),i=0;i<e;i+=1)r[i]=255&t[i];return r}function c(t){if(t>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|t}function d(t,e){if(s.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||F(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return z(t).length;default:if(n)return i?-1:D(t).length;e=(""+e).toLowerCase(),n=!0}}function p(t,e,r){var i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,r);case"utf8":case"utf-8":return S(this,e,r);case"ascii":return A(this,e,r);case"latin1":case"binary":return I(this,e,r);case"base64":return k(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,r);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function m(t,e,r){var i=t[e];t[e]=t[r],t[r]=i}function g(t,e,r,i,n){if(0===t.length)return-1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),j(r=+r)&&(r=n?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(n)return-1;r=t.length-1}else if(r<0){if(!n)return-1;r=0}if("string"==typeof e&&(e=s.from(e,i)),s.isBuffer(e))return 0===e.length?-1:b(t,e,r,i,n);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,i,n);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,i,n){var a,o=1,s=t.length,h=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,s/=2,h/=2,r/=2}function f(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(n){var u=-1;for(a=r;a<s;a++)if(f(t,a)===f(e,-1===u?0:a-u)){if(-1===u&&(u=a),a-u+1===h)return u*o}else-1!==u&&(a-=a-u),u=-1}else for(r+h>s&&(r=s-h),a=r;a>=0;a--){for(var l=!0,c=0;c<h;c++)if(f(t,a+c)!==f(e,c)){l=!1;break}if(l)return a}return-1}function _(t,e,r,i){r=Number(r)||0;var n=t.length-r;i?(i=Number(i))>n&&(i=n):i=n;var a=e.length;i>a/2&&(i=a/2);for(var o=0;o<i;++o){var s=parseInt(e.substr(2*o,2),16);if(j(s))return o;t[r+o]=s}return o}function y(t,e,r,i){return N(D(e,t.length-r),t,r,i)}function w(t,e,r,i){return N(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,i)}function v(t,e,r,i){return w(t,e,r,i)}function x(t,e,r,i){return N(z(e),t,r,i)}function E(t,e,r,i){return N(function(t,e){for(var r,i,n,a=[],o=0;o<t.length&&!((e-=2)<0);++o)i=(r=t.charCodeAt(o))>>8,n=r%256,a.push(n),a.push(i);return a}(e,t.length-r),t,r,i)}function k(t,e,r){return 0===e&&r===t.length?i.fromByteArray(t):i.fromByteArray(t.slice(e,r))}function S(t,e,r){r=Math.min(t.length,r);for(var i=[],n=e;n<r;){var a,o,s,h,f=t[n],u=null,l=f>239?4:f>223?3:f>191?2:1;if(n+l<=r)switch(l){case 1:f<128&&(u=f);break;case 2:128==(192&(a=t[n+1]))&&(h=(31&f)<<6|63&a)>127&&(u=h);break;case 3:a=t[n+1],o=t[n+2],128==(192&a)&&128==(192&o)&&(h=(15&f)<<12|(63&a)<<6|63&o)>2047&&(h<55296||h>57343)&&(u=h);break;case 4:a=t[n+1],o=t[n+2],s=t[n+3],128==(192&a)&&128==(192&o)&&128==(192&s)&&(h=(15&f)<<18|(63&a)<<12|(63&o)<<6|63&s)>65535&&h<1114112&&(u=h)}null===u?(u=65533,l=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|1023&u),i.push(u),n+=l}return function(t){var e=t.length;if(e<=M)return String.fromCharCode.apply(String,t);for(var r="",i=0;i<e;)r+=String.fromCharCode.apply(String,t.slice(i,i+=M));return r}(i)}s.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),s.poolSize=8192,s.from=function(t,e,r){return h(t,e,r)},s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,s.alloc=function(t,e,r){return function(t,e,r){return f(t),t<=0?o(t):void 0!==e?"string"==typeof r?o(t).fill(e,r):o(t).fill(e):o(t)}(t,e,r)},s.allocUnsafe=function(t){return u(t)},s.allocUnsafeSlow=function(t){return u(t)},s.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==s.prototype},s.compare=function(t,e){if(F(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),F(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,i=e.length,n=0,a=Math.min(r,i);n<a;++n)if(t[n]!==e[n]){r=t[n],i=e[n];break}return r<i?-1:i<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var i=s.allocUnsafe(e),n=0;for(r=0;r<t.length;++r){var a=t[r];if(F(a,Uint8Array)&&(a=s.from(a)),!s.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(i,n),n+=a.length}return i},s.byteLength=d,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},s.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?S(this,0,t):p.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.h2;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},s.prototype.compare=function(t,e,r,i,n){if(F(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),e<0||r>t.length||i<0||n>this.length)throw new RangeError("out of range index");if(i>=n&&e>=r)return 0;if(i>=n)return-1;if(e>=r)return 1;if(this===t)return 0;for(var a=(n>>>=0)-(i>>>=0),o=(r>>>=0)-(e>>>=0),h=Math.min(a,o),f=this.slice(i,n),u=t.slice(e,r),l=0;l<h;++l)if(f[l]!==u[l]){a=f[l],o=u[l];break}return a<o?-1:o<a?1:0},s.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},s.prototype.indexOf=function(t,e,r){return g(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return g(this,t,e,r,!1)},s.prototype.write=function(t,e,r,i){if(void 0===e)i="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)i=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0)}var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var a=!1;;)switch(i){case"hex":return _(this,t,e,r);case"utf8":case"utf-8":return y(this,t,e,r);case"ascii":return w(this,t,e,r);case"latin1":case"binary":return v(this,t,e,r);case"base64":return x(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,r);default:if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var M=4096;function A(t,e,r){var i="";r=Math.min(t.length,r);for(var n=e;n<r;++n)i+=String.fromCharCode(127&t[n]);return i}function I(t,e,r){var i="";r=Math.min(t.length,r);for(var n=e;n<r;++n)i+=String.fromCharCode(t[n]);return i}function T(t,e,r){var i,n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var a="",o=e;o<r;++o)a+=(i=t[o])<16?"0"+i.toString(16):i.toString(16);return a}function B(t,e,r){for(var i=t.slice(e,r),n="",a=0;a<i.length;a+=2)n+=String.fromCharCode(i[a]+256*i[a+1]);return n}function R(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function P(t,e,r,i,n,a){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(r+i>t.length)throw new RangeError("Index out of range")}function O(t,e,r,i,n,a){if(r+i>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function L(t,e,r,i,a){return e=+e,r>>>=0,a||O(t,0,r,4),n.write(t,e,r,i,23,4),r+4}function C(t,e,r,i,a){return e=+e,r>>>=0,a||O(t,0,r,8),n.write(t,e,r,i,52,8),r+8}s.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var i=this.subarray(t,e);return i.__proto__=s.prototype,i},s.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var i=this[t],n=1,a=0;++a<e&&(n*=256);)i+=this[t+a]*n;return i},s.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var i=this[t+--e],n=1;e>0&&(n*=256);)i+=this[t+--e]*n;return i},s.prototype.readUInt8=function(t,e){return t>>>=0,e||R(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return t>>>=0,e||R(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return t>>>=0,e||R(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return t>>>=0,e||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return t>>>=0,e||R(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var i=this[t],n=1,a=0;++a<e&&(n*=256);)i+=this[t+a]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*e)),i},s.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||R(t,e,this.length);for(var i=e,n=1,a=this[t+--i];i>0&&(n*=256);)a+=this[t+--i]*n;return a>=(n*=128)&&(a-=Math.pow(2,8*e)),a},s.prototype.readInt8=function(t,e){return t>>>=0,e||R(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){t>>>=0,e||R(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){t>>>=0,e||R(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return t>>>=0,e||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return t>>>=0,e||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return t>>>=0,e||R(t,4,this.length),n.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return t>>>=0,e||R(t,4,this.length),n.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return t>>>=0,e||R(t,8,this.length),n.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return t>>>=0,e||R(t,8,this.length),n.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,i){t=+t,e>>>=0,r>>>=0,i||P(this,t,e,r,Math.pow(2,8*r)-1,0);var n=1,a=0;for(this[e]=255&t;++a<r&&(n*=256);)this[e+a]=t/n&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,i){t=+t,e>>>=0,r>>>=0,i||P(this,t,e,r,Math.pow(2,8*r)-1,0);var n=r-1,a=1;for(this[e+n]=255&t;--n>=0&&(a*=256);)this[e+n]=t/a&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,1,255,0),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeIntLE=function(t,e,r,i){if(t=+t,e>>>=0,!i){var n=Math.pow(2,8*r-1);P(this,t,e,r,n-1,-n)}var a=0,o=1,s=0;for(this[e]=255&t;++a<r&&(o*=256);)t<0&&0===s&&0!==this[e+a-1]&&(s=1),this[e+a]=(t/o>>0)-s&255;return e+r},s.prototype.writeIntBE=function(t,e,r,i){if(t=+t,e>>>=0,!i){var n=Math.pow(2,8*r-1);P(this,t,e,r,n-1,-n)}var a=r-1,o=1,s=0;for(this[e+a]=255&t;--a>=0&&(o*=256);)t<0&&0===s&&0!==this[e+a+1]&&(s=1),this[e+a]=(t/o>>0)-s&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||P(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeFloatLE=function(t,e,r){return L(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return L(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return C(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return C(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,i){if(!s.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<r&&(i=r),i===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-r&&(i=t.length-e+r);var n=i-r;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,i);else if(this===t&&r<e&&e<i)for(var a=n-1;a>=0;--a)t[a+e]=this[a+r];else Uint8Array.prototype.set.call(t,this.subarray(r,i),e);return n},s.prototype.fill=function(t,e,r,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){var n=t.charCodeAt(0);("utf8"===i&&n<128||"latin1"===i)&&(t=n)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var a;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(a=e;a<r;++a)this[a]=t;else{var o=s.isBuffer(t)?t:s.from(t,i),h=o.length;if(0===h)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(a=0;a<r-e;++a)this[a+e]=o[a%h]}return this};var U=/[^+/0-9A-Za-z-_]/g;function D(t,e){var r;e=e||1/0;for(var i=t.length,n=null,a=[],o=0;o<i;++o){if((r=t.charCodeAt(o))>55295&&r<57344){if(!n){if(r>56319){(e-=3)>-1&&a.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=r;continue}if(r<56320){(e-=3)>-1&&a.push(239,191,189),n=r;continue}r=65536+(n-55296<<10|r-56320)}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,r<128){if((e-=1)<0)break;a.push(r)}else if(r<2048){if((e-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function z(t){return i.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(U,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function N(t,e,r,i){for(var n=0;n<i&&!(n+r>=e.length||n>=t.length);++n)e[n+r]=t[n];return n}function F(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function j(t){return t!=t}},4181:(t,e)=>{e.read=function(t,e,r,i,n){var a,o,s=8*n-i-1,h=(1<<s)-1,f=h>>1,u=-7,l=r?n-1:0,c=r?-1:1,d=t[e+l];for(l+=c,a=d&(1<<-u)-1,d>>=-u,u+=s;u>0;a=256*a+t[e+l],l+=c,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=i;u>0;o=256*o+t[e+l],l+=c,u-=8);if(0===a)a=1-f;else{if(a===h)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,i),a-=f}return(d?-1:1)*o*Math.pow(2,a-i)},e.write=function(t,e,r,i,n,a){var o,s,h,f=8*a-n-1,u=(1<<f)-1,l=u>>1,c=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,d=i?0:a-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-o))<1&&(o--,h*=2),(e+=o+l>=1?c/h:c*Math.pow(2,1-l))*h>=2&&(o++,h/=2),o+l>=u?(s=0,o=u):o+l>=1?(s=(e*h-1)*Math.pow(2,n),o+=l):(s=e*Math.pow(2,l-1)*Math.pow(2,n),o=0));n>=8;t[r+d]=255&s,d+=p,s/=256,n-=8);for(o=o<<n|s,f+=n;f>0;t[r+d]=255&o,d+=p,o/=256,f-=8);t[r+d-p]|=128*m}},869:t=>{t.exports=null},2699:t=>{"use strict";var e,r="object"==typeof Reflect?Reflect:null,i=r&&"function"==typeof r.apply?r.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};e=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var n=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,t.exports.once=function(t,e){return new Promise((function(r,i){function n(r){t.removeListener(e,a),i(r)}function a(){"function"==typeof t.removeListener&&t.removeListener("error",n),r([].slice.call(arguments))}m(t,e,a,{once:!0}),"error"!==e&&function(t,e,r){"function"==typeof t.on&&m(t,"error",e,{once:!0})}(t,n)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var o=10;function s(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function h(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function f(t,e,r,i){var n,a,o,f;if(s(r),void 0===(a=t._events)?(a=t._events=Object.create(null),t._eventsCount=0):(void 0!==a.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),o=a[e]),void 0===o)o=a[e]=r,++t._eventsCount;else if("function"==typeof o?o=a[e]=i?[r,o]:[o,r]:i?o.unshift(r):o.push(r),(n=h(t))>0&&o.length>n&&!o.warned){o.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=o.length,f=u,console&&console.warn&&console.warn(f)}return t}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(t,e,r){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},n=u.bind(i);return n.listener=r,i.wrapFn=n,n}function c(t,e,r){var i=t._events;if(void 0===i)return[];var n=i[e];return void 0===n?[]:"function"==typeof n?r?[n.listener||n]:[n]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(n):p(n,n.length)}function d(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function p(t,e){for(var r=new Array(e),i=0;i<e;++i)r[i]=t[i];return r}function m(t,e,r,i){if("function"==typeof t.on)i.once?t.once(e,r):t.on(e,r);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function n(a){i.once&&t.removeEventListener(e,n),r(a)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(t){if("number"!=typeof t||t<0||n(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");o=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||n(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return h(this)},a.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var n="error"===t,a=this._events;if(void 0!==a)n=n&&void 0===a.error;else if(!n)return!1;if(n){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var h=a[t];if(void 0===h)return!1;if("function"==typeof h)i(h,this,e);else{var f=h.length,u=p(h,f);for(r=0;r<f;++r)i(u[r],this,e)}return!0},a.prototype.addListener=function(t,e){return f(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return f(this,t,e,!0)},a.prototype.once=function(t,e){return s(e),this.on(t,l(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){return s(e),this.prependListener(t,l(this,t,e)),this},a.prototype.removeListener=function(t,e){var r,i,n,a,o;if(s(e),void 0===(i=this._events))return this;if(void 0===(r=i[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(n=-1,a=r.length-1;a>=0;a--)if(r[a]===e||r[a].listener===e){o=r[a].listener,n=a;break}if(n<0)return this;0===n?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,n),1===r.length&&(i[t]=r[0]),void 0!==i.removeListener&&this.emit("removeListener",t,o||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,r,i;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var n,a=Object.keys(r);for(i=0;i<a.length;++i)"removeListener"!==(n=a[i])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this},a.prototype.listeners=function(t){return c(this,t,!0)},a.prototype.rawListeners=function(t){return c(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):d.call(t,e)},a.prototype.listenerCount=d,a.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}},6551:(t,e,r)=>{var i=r(453);t.exports={create:function(t,e){if(t instanceof(e=e||(0,eval)("this")).ArrayBuffer){var n=r(909);return new i(new n(t,0,t.byteLength,!0,e))}var a=r(3684);return new i(new a(t,0,t.length,!0))}}},3684:t=>{function e(t,e,r,i){this.buffer=t,this.offset=e||0,r="number"==typeof r?r:t.length,this.endPosition=this.offset+r,this.setBigEndian(i)}e.prototype={setBigEndian:function(t){this.bigEndian=!!t},nextUInt8:function(){var t=this.buffer.readUInt8(this.offset);return this.offset+=1,t},nextInt8:function(){var t=this.buffer.readInt8(this.offset);return this.offset+=1,t},nextUInt16:function(){var t=this.bigEndian?this.buffer.readUInt16BE(this.offset):this.buffer.readUInt16LE(this.offset);return this.offset+=2,t},nextUInt32:function(){var t=this.bigEndian?this.buffer.readUInt32BE(this.offset):this.buffer.readUInt32LE(this.offset);return this.offset+=4,t},nextInt16:function(){var t=this.bigEndian?this.buffer.readInt16BE(this.offset):this.buffer.readInt16LE(this.offset);return this.offset+=2,t},nextInt32:function(){var t=this.bigEndian?this.buffer.readInt32BE(this.offset):this.buffer.readInt32LE(this.offset);return this.offset+=4,t},nextFloat:function(){var t=this.bigEndian?this.buffer.readFloatBE(this.offset):this.buffer.readFloatLE(this.offset);return this.offset+=4,t},nextDouble:function(){var t=this.bigEndian?this.buffer.readDoubleBE(this.offset):this.buffer.readDoubleLE(this.offset);return this.offset+=8,t},nextBuffer:function(t){var e=this.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e},remainingLength:function(){return this.endPosition-this.offset},nextString:function(t){var e=this.buffer.toString("utf8",this.offset,this.offset+t);return this.offset+=t,e},mark:function(){var t=this;return{openWithOffset:function(r){return r=(r||0)+this.offset,new e(t.buffer,r,t.endPosition-r,t.bigEndian)},offset:this.offset}},offsetFrom:function(t){return this.offset-t.offset},skip:function(t){this.offset+=t},branch:function(t,r){return r="number"==typeof r?r:this.endPosition-(this.offset+t),new e(this.buffer,this.offset+t,r,this.bigEndian)}},t.exports=e},565:t=>{function e(t){return parseInt(t,10)}var r=3600,i=60;function n(t,r){t=t.map(e),r=r.map(e);var i=t[0],n=t[1]-1,a=t[2],o=r[0],s=r[1],h=r[2];return Date.UTC(i,n,a,o,s,h,0)/1e3}function a(t){var a=t.substr(0,10).split("-"),o=t.substr(11,8).split(":"),s=t.substr(19,6).split(":").map(e),h=s[0]*r+s[1]*i,f=n(a,o);if("number"==typeof(f-=h)&&!isNaN(f))return f}function o(t){var e=t.split(" "),r=n(e[0].split(":"),e[1].split(":"));if("number"==typeof r&&!isNaN(r))return r}t.exports={parseDateWithSpecFormat:o,parseDateWithTimezoneFormat:a,parseExifDate:function(t){var e=19===t.length&&":"===t.charAt(4);return 25===t.length&&"T"===t.charAt(10)?a(t):e?o(t):void 0}}},909:t=>{function e(t,e,r,i,n,a){this.global=n,e=e||0,r=r||t.byteLength-e,this.arrayBuffer=t.slice(e,e+r),this.view=new n.DataView(this.arrayBuffer,0,this.arrayBuffer.byteLength),this.setBigEndian(i),this.offset=0,this.parentOffset=(a||0)+e}e.prototype={setBigEndian:function(t){this.littleEndian=!t},nextUInt8:function(){var t=this.view.getUint8(this.offset);return this.offset+=1,t},nextInt8:function(){var t=this.view.getInt8(this.offset);return this.offset+=1,t},nextUInt16:function(){var t=this.view.getUint16(this.offset,this.littleEndian);return this.offset+=2,t},nextUInt32:function(){var t=this.view.getUint32(this.offset,this.littleEndian);return this.offset+=4,t},nextInt16:function(){var t=this.view.getInt16(this.offset,this.littleEndian);return this.offset+=2,t},nextInt32:function(){var t=this.view.getInt32(this.offset,this.littleEndian);return this.offset+=4,t},nextFloat:function(){var t=this.view.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t},nextDouble:function(){var t=this.view.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t},nextBuffer:function(t){var e=this.arrayBuffer.slice(this.offset,this.offset+t);return this.offset+=t,e},remainingLength:function(){return this.arrayBuffer.byteLength-this.offset},nextString:function(t){var e=this.arrayBuffer.slice(this.offset,this.offset+t);return e=String.fromCharCode.apply(null,new this.global.Uint8Array(e)),this.offset+=t,e},mark:function(){var t=this;return{openWithOffset:function(r){return r=(r||0)+this.offset,new e(t.arrayBuffer,r,t.arrayBuffer.byteLength-r,!t.littleEndian,t.global,t.parentOffset)},offset:this.offset,getParentOffset:function(){return t.parentOffset}}},offsetFrom:function(t){return this.parentOffset+this.offset-(t.offset+t.getParentOffset())},skip:function(t){this.offset+=t},branch:function(t,r){return r="number"==typeof r?r:this.arrayBuffer.byteLength-(this.offset+t),new e(this.arrayBuffer,this.offset+t,r,!this.littleEndian,this.global,this.parentOffset)}},t.exports=e},3332:t=>{t.exports={exif:{1:"InteropIndex",2:"InteropVersion",11:"ProcessingSoftware",254:"SubfileType",255:"OldSubfileType",256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",263:"Thresholding",264:"CellWidth",265:"CellLength",266:"FillOrder",269:"DocumentName",270:"ImageDescription",271:"Make",272:"Model",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",280:"MinSampleValue",281:"MaxSampleValue",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",285:"PageName",286:"XPosition",287:"YPosition",288:"FreeOffsets",289:"FreeByteCounts",290:"GrayResponseUnit",291:"GrayResponseCurve",292:"T4Options",293:"T6Options",296:"ResolutionUnit",297:"PageNumber",300:"ColorResponseUnit",301:"TransferFunction",305:"Software",306:"ModifyDate",315:"Artist",316:"HostComputer",317:"Predictor",318:"WhitePoint",319:"PrimaryChromaticities",320:"ColorMap",321:"HalftoneHints",322:"TileWidth",323:"TileLength",324:"TileOffsets",325:"TileByteCounts",326:"BadFaxLines",327:"CleanFaxData",328:"ConsecutiveBadFaxLines",330:"SubIFD",332:"InkSet",333:"InkNames",334:"NumberofInks",336:"DotRange",337:"TargetPrinter",338:"ExtraSamples",339:"SampleFormat",340:"SMinSampleValue",341:"SMaxSampleValue",342:"TransferRange",343:"ClipPath",344:"XClipPathUnits",345:"YClipPathUnits",346:"Indexed",347:"JPEGTables",351:"OPIProxy",400:"GlobalParametersIFD",401:"ProfileType",402:"FaxProfile",403:"CodingMethods",404:"VersionYear",405:"ModeNumber",433:"Decode",434:"DefaultImageColor",435:"T82Options",437:"JPEGTables",512:"JPEGProc",513:"ThumbnailOffset",514:"ThumbnailLength",515:"JPEGRestartInterval",517:"JPEGLosslessPredictors",518:"JPEGPointTransforms",519:"JPEGQTables",520:"JPEGDCTables",521:"JPEGACTables",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite",559:"StripRowCounts",700:"ApplicationNotes",999:"USPTOMiscellaneous",4096:"RelatedImageFileFormat",4097:"RelatedImageWidth",4098:"RelatedImageHeight",18246:"Rating",18247:"XP_DIP_XML",18248:"StitchInfo",18249:"RatingPercent",32781:"ImageID",32931:"WangTag1",32932:"WangAnnotation",32933:"WangTag3",32934:"WangTag4",32995:"Matteing",32996:"DataType",32997:"ImageDepth",32998:"TileDepth",33405:"Model2",33421:"CFARepeatPatternDim",33422:"CFAPattern2",33423:"BatteryLevel",33424:"KodakIFD",33432:"Copyright",33434:"ExposureTime",33437:"FNumber",33445:"MDFileTag",33446:"MDScalePixel",33447:"MDColorTable",33448:"MDLabName",33449:"MDSampleInfo",33450:"MDPrepDate",33451:"MDPrepTime",33452:"MDFileUnits",33550:"PixelScale",33589:"AdventScale",33590:"AdventRevision",33628:"UIC1Tag",33629:"UIC2Tag",33630:"UIC3Tag",33631:"UIC4Tag",33723:"IPTC-NAA",33918:"IntergraphPacketData",33919:"IntergraphFlagRegisters",33920:"IntergraphMatrix",33921:"INGRReserved",33922:"ModelTiePoint",34016:"Site",34017:"ColorSequence",34018:"IT8Header",34019:"RasterPadding",34020:"BitsPerRunLength",34021:"BitsPerExtendedRunLength",34022:"ColorTable",34023:"ImageColorIndicator",34024:"BackgroundColorIndicator",34025:"ImageColorValue",34026:"BackgroundColorValue",34027:"PixelIntensityRange",34028:"TransparencyIndicator",34029:"ColorCharacterization",34030:"HCUsage",34031:"TrapIndicator",34032:"CMYKEquivalent",34118:"SEMInfo",34152:"AFCP_IPTC",34232:"PixelMagicJBIGOptions",34264:"ModelTransform",34306:"WB_GRGBLevels",34310:"LeafData",34377:"PhotoshopSettings",34665:"ExifOffset",34675:"ICC_Profile",34687:"TIFF_FXExtensions",34688:"MultiProfiles",34689:"SharedData",34690:"T88Options",34732:"ImageLayer",34735:"GeoTiffDirectory",34736:"GeoTiffDoubleParams",34737:"GeoTiffAsciiParams",34850:"ExposureProgram",34852:"SpectralSensitivity",34853:"GPSInfo",34855:"ISO",34856:"Opto-ElectricConvFactor",34857:"Interlace",34858:"TimeZoneOffset",34859:"SelfTimerMode",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",34908:"FaxRecvParams",34909:"FaxSubAddress",34910:"FaxRecvTime",34954:"LeafSubIFD",36864:"ExifVersion",36867:"DateTimeOriginal",36868:"CreateDate",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureCompensation",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",37387:"FlashEnergy",37388:"SpatialFrequencyResponse",37389:"Noise",37390:"FocalPlaneXResolution",37391:"FocalPlaneYResolution",37392:"FocalPlaneResolutionUnit",37393:"ImageNumber",37394:"SecurityClassification",37395:"ImageHistory",37396:"SubjectArea",37397:"ExposureIndex",37398:"TIFF-EPStandardID",37399:"SensingMethod",37434:"CIP3DataFile",37435:"CIP3Sheet",37436:"CIP3Side",37439:"StoNits",37500:"MakerNote",37510:"UserComment",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",37679:"MSDocumentText",37680:"MSPropertySetStorage",37681:"MSDocumentTextPosition",37724:"ImageSourceData",40091:"XPTitle",40092:"XPComment",40093:"XPAuthor",40094:"XPKeywords",40095:"XPSubject",40960:"FlashpixVersion",40961:"ColorSpace",40962:"ExifImageWidth",40963:"ExifImageHeight",40964:"RelatedSoundFile",40965:"InteropOffset",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41485:"Noise",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41489:"ImageNumber",41490:"SecurityClassification",41491:"ImageHistory",41492:"SubjectLocation",41493:"ExposureIndex",41494:"TIFF-EPStandardID",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFormat",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"OwnerName",42033:"SerialNumber",42034:"LensInfo",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",42112:"GDALMetadata",42113:"GDALNoData",42240:"Gamma",44992:"ExpandSoftware",44993:"ExpandLens",44994:"ExpandFilm",44995:"ExpandFilterLens",44996:"ExpandScanner",44997:"ExpandFlashLamp",48129:"PixelFormat",48130:"Transformation",48131:"Uncompressed",48132:"ImageType",48256:"ImageWidth",48257:"ImageHeight",48258:"WidthResolution",48259:"HeightResolution",48320:"ImageOffset",48321:"ImageByteCount",48322:"AlphaOffset",48323:"AlphaByteCount",48324:"ImageDataDiscard",48325:"AlphaDataDiscard",50215:"OceScanjobDesc",50216:"OceApplicationSelector",50217:"OceIDNumber",50218:"OceImageLogic",50255:"Annotations",50341:"PrintIM",50560:"USPTOOriginalContentType",50706:"DNGVersion",50707:"DNGBackwardVersion",50708:"UniqueCameraModel",50709:"LocalizedCameraModel",50710:"CFAPlaneColor",50711:"CFALayout",50712:"LinearizationTable",50713:"BlackLevelRepeatDim",50714:"BlackLevel",50715:"BlackLevelDeltaH",50716:"BlackLevelDeltaV",50717:"WhiteLevel",50718:"DefaultScale",50719:"DefaultCropOrigin",50720:"DefaultCropSize",50721:"ColorMatrix1",50722:"ColorMatrix2",50723:"CameraCalibration1",50724:"CameraCalibration2",50725:"ReductionMatrix1",50726:"ReductionMatrix2",50727:"AnalogBalance",50728:"AsShotNeutral",50729:"AsShotWhiteXY",50730:"BaselineExposure",50731:"BaselineNoise",50732:"BaselineSharpness",50733:"BayerGreenSplit",50734:"LinearResponseLimit",50735:"CameraSerialNumber",50736:"DNGLensInfo",50737:"ChromaBlurRadius",50738:"AntiAliasStrength",50739:"ShadowScale",50740:"DNGPrivateData",50741:"MakerNoteSafety",50752:"RawImageSegmentation",50778:"CalibrationIlluminant1",50779:"CalibrationIlluminant2",50780:"BestQualityScale",50781:"RawDataUniqueID",50784:"AliasLayerMetadata",50827:"OriginalRawFileName",50828:"OriginalRawFileData",50829:"ActiveArea",50830:"MaskedAreas",50831:"AsShotICCProfile",50832:"AsShotPreProfileMatrix",50833:"CurrentICCProfile",50834:"CurrentPreProfileMatrix",50879:"ColorimetricReference",50898:"PanasonicTitle",50899:"PanasonicTitle2",50931:"CameraCalibrationSig",50932:"ProfileCalibrationSig",50933:"ProfileIFD",50934:"AsShotProfileName",50935:"NoiseReductionApplied",50936:"ProfileName",50937:"ProfileHueSatMapDims",50938:"ProfileHueSatMapData1",50939:"ProfileHueSatMapData2",50940:"ProfileToneCurve",50941:"ProfileEmbedPolicy",50942:"ProfileCopyright",50964:"ForwardMatrix1",50965:"ForwardMatrix2",50966:"PreviewApplicationName",50967:"PreviewApplicationVersion",50968:"PreviewSettingsName",50969:"PreviewSettingsDigest",50970:"PreviewColorSpace",50971:"PreviewDateTime",50972:"RawImageDigest",50973:"OriginalRawFileDigest",50974:"SubTileBlockSize",50975:"RowInterleaveFactor",50981:"ProfileLookTableDims",50982:"ProfileLookTableData",51008:"OpcodeList1",51009:"OpcodeList2",51022:"OpcodeList3",51041:"NoiseProfile",51043:"TimeCodes",51044:"FrameRate",51058:"TStop",51081:"ReelName",51089:"OriginalDefaultFinalSize",51090:"OriginalBestQualitySize",51091:"OriginalDefaultCropSize",51105:"CameraLabel",51107:"ProfileHueSatMapEncoding",51108:"ProfileLookTableEncoding",51109:"BaselineExposureOffset",51110:"DefaultBlackRender",51111:"NewRawImageDigest",51112:"RawToPreviewGain",51125:"DefaultUserCrop",59932:"Padding",59933:"OffsetSchema",65e3:"OwnerName",65001:"SerialNumber",65002:"Lens",65024:"KDC_IFD",65100:"RawFile",65101:"Converter",65102:"WhiteBalance",65105:"Exposure",65106:"Shadows",65107:"Brightness",65108:"Contrast",65109:"Saturation",65110:"Sharpness",65111:"Smoothness",65112:"MoireFilter"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"}}},592:t=>{function e(t,e){switch(t){case 1:return e.nextUInt8();case 3:case 8:return e.nextUInt16();case 4:case 9:return e.nextUInt32();case 5:return[e.nextUInt32(),e.nextUInt32()];case 6:return e.nextInt8();case 10:return[e.nextInt32(),e.nextInt32()];case 11:return e.nextFloat();case 12:return e.nextDouble();default:throw new Error("Invalid format while decoding: "+t)}}function r(t,r){var i,n,a=r.nextUInt16(),o=r.nextUInt16(),s=function(t){switch(t){case 1:case 2:case 6:case 7:return 1;case 3:case 8:return 2;case 4:case 9:case 11:return 4;case 5:case 10:case 12:return 8;default:return 0}}(o),h=r.nextUInt32(),f=s*h;if(f>4&&(r=t.openWithOffset(r.nextUInt32())),2===o){var u=(i=r.nextString(h)).indexOf("\0");-1!==u&&(i=i.substr(0,u))}else if(7===o)i=r.nextBuffer(h);else if(0!==o)for(i=[],n=0;n<h;++n)i.push(e(o,r));return f<4&&r.skip(4-f),[a,i,o]}function i(t,e,i){var n,a,o=e.nextUInt16();for(a=0;a<o;++a)i((n=r(t,e))[0],n[1],n[2])}t.exports={IFD0:1,IFD1:2,GPSIFD:3,SubIFD:4,InteropIFD:5,parseTags:function(t,e){var r,n,a,o;try{r=function(t){if("Exif\0\0"!==t.nextString(6))throw new Error("Invalid EXIF header");var e=t.mark(),r=t.nextUInt16();if(18761===r)t.setBigEndian(!1);else{if(19789!==r)throw new Error("Invalid TIFF header");t.setBigEndian(!0)}if(42!==t.nextUInt16())throw new Error("Invalid TIFF data");return e}(t)}catch(t){return!1}var s=r.openWithOffset(t.nextUInt32()),h=this.IFD0;i(r,s,(function(t,r,i){switch(t){case 34853:a=r[0];break;case 34665:n=r[0];break;default:e(h,t,r,i)}}));var f=s.nextUInt32();if(0!==f){var u=r.openWithOffset(f);i(r,u,e.bind(null,this.IFD1))}if(a){var l=r.openWithOffset(a);i(r,l,e.bind(null,this.GPSIFD))}if(n){var c=r.openWithOffset(n),d=this.InteropIFD;i(r,c,(function(t,r,i){40965===t?o=r[0]:e(d,t,r,i)}))}if(o){var p=r.openWithOffset(o);i(r,p,e.bind(null,this.InteropIFD))}return!0}}},656:t=>{t.exports={parseSections:function(t,e){var r,i;for(t.setBigEndian(!0);t.remainingLength()>0&&218!==i;){if(255!==t.nextUInt8())throw new Error("Invalid JPEG section offset");r=(i=t.nextUInt8())>=208&&i<=217||218===i?0:t.nextUInt16()-2,e(i,t.branch(0,r)),t.skip(r)}},getSizeFromSOFSection:function(t){return t.skip(1),{height:t.nextUInt16(),width:t.nextUInt16()}},getSectionName:function(t){var e,r;switch(t){case 216:e="SOI";break;case 196:e="DHT";break;case 219:e="DQT";break;case 221:e="DRI";break;case 218:e="SOS";break;case 254:e="COM";break;case 217:e="EOI";break;default:t>=224&&t<=239?(e="APP",r=t-224):t>=192&&t<=207&&196!==t&&200!==t&&204!==t?(e="SOF",r=t-192):t>=208&&t<=215&&(e="RST",r=t-208)}var i={name:e};return"number"==typeof r&&(i.index=r),i}}},453:(t,e,r)=>{var i=r(656),n=r(592),a=r(3814);function o(t,e,r,i,n,a,o){this.startMarker=t,this.tags=e,this.imageSize=r,this.thumbnailOffset=i,this.thumbnailLength=n,this.thumbnailType=a,this.app1Offset=o}function s(t){this.stream=t,this.flags={readBinaryTags:!1,resolveTagNames:!0,simplifyValues:!0,imageSize:!0,hidePointers:!0,returnTags:!0}}o.prototype={hasThumbnail:function(t){return!(!this.thumbnailOffset||!this.thumbnailLength||"string"==typeof t&&("image/jpeg"===t.toLowerCase().trim()?6!==this.thumbnailType:"image/tiff"!==t.toLowerCase().trim()||1!==this.thumbnailType))},getThumbnailOffset:function(){return this.app1Offset+6+this.thumbnailOffset},getThumbnailLength:function(){return this.thumbnailLength},getThumbnailBuffer:function(){return this._getThumbnailStream().nextBuffer(this.thumbnailLength)},_getThumbnailStream:function(){return this.startMarker.openWithOffset(this.getThumbnailOffset())},getImageSize:function(){return this.imageSize},getThumbnailSize:function(){var t,e=this._getThumbnailStream();return i.parseSections(e,(function(e,r){"SOF"===i.getSectionName(e).name&&(t=i.getSizeFromSOFSection(r))})),t}},s.prototype={enableBinaryFields:function(t){return this.flags.readBinaryTags=!!t,this},enablePointers:function(t){return this.flags.hidePointers=!t,this},enableTagNames:function(t){return this.flags.resolveTagNames=!!t,this},enableImageSize:function(t){return this.flags.imageSize=!!t,this},enableReturnTags:function(t){return this.flags.returnTags=!!t,this},enableSimpleValues:function(t){return this.flags.simplifyValues=!!t,this},parse:function(){var t,e,s,h,f,u,l,c,d,p=this.stream.mark(),m=p.openWithOffset(0),g=this.flags;return g.resolveTagNames&&(l=r(3332)),g.resolveTagNames?(t={},c=function(e){return t[e.name]},d=function(e,r){t[e.name]=r}):(t=[],c=function(e){var r;for(r=0;r<t.length;++r)if(t[r].type===e.type&&t[r].section===e.section)return t.value},d=function(e,r){var i;for(i=0;i<t.length;++i)if(t[i].type===e.type&&t[i].section===e.section)return void(t.value=r)}),i.parseSections(m,(function(r,o){var c=o.offsetFrom(p);225===r?n.parseTags(o,(function(e,r,i,o){if(g.readBinaryTags||7!==o){if(513===r){if(s=i[0],g.hidePointers)return}else if(514===r){if(h=i[0],g.hidePointers)return}else if(259===r&&(f=i[0],g.hidePointers))return;if(g.returnTags)if(g.simplifyValues&&(i=a.simplifyValue(i,o)),g.resolveTagNames){var u=(e===n.GPSIFD?l.gps:l.exif)[r];u||(u=l.exif[r]),t.hasOwnProperty(u)||(t[u]=i)}else t.push({section:e,type:r,value:i})}}))&&(u=c):g.imageSize&&"SOF"===i.getSectionName(r).name&&(e=i.getSizeFromSOFSection(o))})),g.simplifyValues&&(a.castDegreeValues(c,d),a.castDateValues(c,d)),new o(p,t,e,s,h,f,u)}},t.exports=s},3814:(t,e,r)=>{var i=r(592),n=r(565),a=[{section:i.GPSIFD,type:2,name:"GPSLatitude",refType:1,refName:"GPSLatitudeRef",posVal:"N"},{section:i.GPSIFD,type:4,name:"GPSLongitude",refType:3,refName:"GPSLongitudeRef",posVal:"E"}],o=[{section:i.SubIFD,type:306,name:"ModifyDate"},{section:i.SubIFD,type:36867,name:"DateTimeOriginal"},{section:i.SubIFD,type:36868,name:"CreateDate"},{section:i.SubIFD,type:306,name:"ModifyDate"}];t.exports={castDegreeValues:function(t,e){a.forEach((function(r){var i=t(r);if(i){var n=t({section:r.section,type:r.refType,name:r.refName})===r.posVal?1:-1,a=(i[0]+i[1]/60+i[2]/3600)*n;e(r,a)}}))},castDateValues:function(t,e){o.forEach((function(r){var i=t(r);if(i){var a=n.parseExifDate(i);void 0!==a&&e(r,a)}}))},simplifyValue:function(t,e){return Array.isArray(t)&&1===(t=t.map((function(t){return 10===e||5===e?t[0]/t[1]:t}))).length&&(t=t[0]),t}}},8789:(module,__unused_webpack_exports,__nested_webpack_require_59625__)=>{"use strict";var Buffer=__nested_webpack_require_59625__(8834).lW;const Token=__nested_webpack_require_59625__(5010),strtok3=__nested_webpack_require_59625__(7378),{stringToBytes,tarHeaderChecksumMatches,uint32SyncSafeToken}=__nested_webpack_require_59625__(7044),supported=__nested_webpack_require_59625__(4078),minimumBytes=4100;async function fromStream(t){const e=await strtok3.fromStream(t);try{return await fromTokenizer(e)}finally{await e.close()}}async function fromBuffer(t){if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||Buffer.isBuffer(t)))throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof t}\``);const e=t instanceof Buffer?t:Buffer.from(t);if(e&&e.length>1)return fromTokenizer(strtok3.fromBuffer(e))}function _check(t,e,r){r={offset:0,...r};for(const[i,n]of e.entries())if(r.mask){if(n!==(r.mask[i]&t[i+r.offset]))return!1}else if(n!==t[i+r.offset])return!1;return!0}async function fromTokenizer(t){try{return _fromTokenizer(t)}catch(t){if(!(t instanceof strtok3.EndOfStreamError))throw t}}async function _fromTokenizer(t){let e=Buffer.alloc(minimumBytes);const r=(t,r)=>_check(e,t,r),i=(t,e)=>r(stringToBytes(t),e);if(t.fileInfo.size||(t.fileInfo.size=Number.MAX_SAFE_INTEGER),await t.peekBuffer(e,{length:12,mayBeLess:!0}),r([66,77]))return{ext:"bmp",mime:"image/bmp"};if(r([11,119]))return{ext:"ac3",mime:"audio/vnd.dolby.dd-raw"};if(r([120,1]))return{ext:"dmg",mime:"application/x-apple-diskimage"};if(r([77,90]))return{ext:"exe",mime:"application/x-msdownload"};if(r([37,33]))return await t.peekBuffer(e,{length:24,mayBeLess:!0}),i("PS-Adobe-",{offset:2})&&i(" EPSF-",{offset:14})?{ext:"eps",mime:"application/eps"}:{ext:"ps",mime:"application/postscript"};if(r([31,160])||r([31,157]))return{ext:"Z",mime:"application/x-compress"};if(r([255,216,255]))return{ext:"jpg",mime:"image/jpeg"};if(r([73,73,188]))return{ext:"jxr",mime:"image/vnd.ms-photo"};if(r([31,139,8]))return{ext:"gz",mime:"application/gzip"};if(r([66,90,104]))return{ext:"bz2",mime:"application/x-bzip2"};if(i("ID3")){await t.ignore(6);const n=await t.readToken(uint32SyncSafeToken);return t.position+n>t.fileInfo.size?{ext:"mp3",mime:"audio/mpeg"}:(await t.ignore(n),fromTokenizer(t))}if(i("MP+"))return{ext:"mpc",mime:"audio/x-musepack"};if((67===e[0]||70===e[0])&&r([87,83],{offset:1}))return{ext:"swf",mime:"application/x-shockwave-flash"};if(r([71,73,70]))return{ext:"gif",mime:"image/gif"};if(i("FLIF"))return{ext:"flif",mime:"image/flif"};if(i("8BPS"))return{ext:"psd",mime:"image/vnd.adobe.photoshop"};if(i("WEBP",{offset:8}))return{ext:"webp",mime:"image/webp"};if(i("MPCK"))return{ext:"mpc",mime:"audio/x-musepack"};if(i("FORM"))return{ext:"aif",mime:"audio/aiff"};if(i("icns",{offset:0}))return{ext:"icns",mime:"image/icns"};if(r([80,75,3,4])){try{for(;t.position+30<t.fileInfo.size;){await t.readBuffer(e,{length:30});const a={compressedSize:e.readUInt32LE(18),uncompressedSize:e.readUInt32LE(22),filenameLength:e.readUInt16LE(26),extraFieldLength:e.readUInt16LE(28)};if(a.filename=await t.readToken(new Token.StringType(a.filenameLength,"utf-8")),await t.ignore(a.extraFieldLength),"META-INF/mozilla.rsa"===a.filename)return{ext:"xpi",mime:"application/x-xpinstall"};if(a.filename.endsWith(".rels")||a.filename.endsWith(".xml"))switch(a.filename.split("/")[0]){case"_rels":default:break;case"word":return{ext:"docx",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};case"ppt":return{ext:"pptx",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation"};case"xl":return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}}if(a.filename.startsWith("xl/"))return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};if(a.filename.startsWith("3D/")&&a.filename.endsWith(".model"))return{ext:"3mf",mime:"model/3mf"};if("mimetype"===a.filename&&a.compressedSize===a.uncompressedSize)switch(await t.readToken(new Token.StringType(a.compressedSize,"utf-8"))){case"application/epub+zip":return{ext:"epub",mime:"application/epub+zip"};case"application/vnd.oasis.opendocument.text":return{ext:"odt",mime:"application/vnd.oasis.opendocument.text"};case"application/vnd.oasis.opendocument.spreadsheet":return{ext:"ods",mime:"application/vnd.oasis.opendocument.spreadsheet"};case"application/vnd.oasis.opendocument.presentation":return{ext:"odp",mime:"application/vnd.oasis.opendocument.presentation"}}if(0===a.compressedSize){let o=-1;for(;o<0&&t.position<t.fileInfo.size;)await t.peekBuffer(e,{mayBeLess:!0}),o=e.indexOf("504B0304",0,"hex"),await t.ignore(o>=0?o:e.length)}else await t.ignore(a.compressedSize)}}catch(s){if(!(s instanceof strtok3.EndOfStreamError))throw s}return{ext:"zip",mime:"application/zip"}}if(i("OggS")){await t.ignore(28);const h=Buffer.alloc(8);return await t.readBuffer(h),_check(h,[79,112,117,115,72,101,97,100])?{ext:"opus",mime:"audio/opus"}:_check(h,[128,116,104,101,111,114,97])?{ext:"ogv",mime:"video/ogg"}:_check(h,[1,118,105,100,101,111,0])?{ext:"ogm",mime:"video/ogg"}:_check(h,[127,70,76,65,67])?{ext:"oga",mime:"audio/ogg"}:_check(h,[83,112,101,101,120,32,32])?{ext:"spx",mime:"audio/ogg"}:_check(h,[1,118,111,114,98,105,115])?{ext:"ogg",mime:"audio/ogg"}:{ext:"ogx",mime:"application/ogg"}}if(r([80,75])&&(3===e[2]||5===e[2]||7===e[2])&&(4===e[3]||6===e[3]||8===e[3]))return{ext:"zip",mime:"application/zip"};if(i("ftyp",{offset:4})&&0!=(96&e[8])){const f=e.toString("binary",8,12).replace("\0"," ").trim();switch(f){case"avif":return{ext:"avif",mime:"image/avif"};case"mif1":return{ext:"heic",mime:"image/heif"};case"msf1":return{ext:"heic",mime:"image/heif-sequence"};case"heic":case"heix":return{ext:"heic",mime:"image/heic"};case"hevc":case"hevx":return{ext:"heic",mime:"image/heic-sequence"};case"qt":return{ext:"mov",mime:"video/quicktime"};case"M4V":case"M4VH":case"M4VP":return{ext:"m4v",mime:"video/x-m4v"};case"M4P":return{ext:"m4p",mime:"video/mp4"};case"M4B":return{ext:"m4b",mime:"audio/mp4"};case"M4A":return{ext:"m4a",mime:"audio/x-m4a"};case"F4V":return{ext:"f4v",mime:"video/mp4"};case"F4P":return{ext:"f4p",mime:"video/mp4"};case"F4A":return{ext:"f4a",mime:"audio/mp4"};case"F4B":return{ext:"f4b",mime:"audio/mp4"};case"crx":return{ext:"cr3",mime:"image/x-canon-cr3"};default:return f.startsWith("3g")?f.startsWith("3g2")?{ext:"3g2",mime:"video/3gpp2"}:{ext:"3gp",mime:"video/3gpp"}:{ext:"mp4",mime:"video/mp4"}}}if(i("MThd"))return{ext:"mid",mime:"audio/midi"};if(i("wOFF")&&(r([0,1,0,0],{offset:4})||i("OTTO",{offset:4})))return{ext:"woff",mime:"font/woff"};if(i("wOF2")&&(r([0,1,0,0],{offset:4})||i("OTTO",{offset:4})))return{ext:"woff2",mime:"font/woff2"};if(r([212,195,178,161])||r([161,178,195,212]))return{ext:"pcap",mime:"application/vnd.tcpdump.pcap"};if(i("DSD "))return{ext:"dsf",mime:"audio/x-dsf"};if(i("LZIP"))return{ext:"lz",mime:"application/x-lzip"};if(i("fLaC"))return{ext:"flac",mime:"audio/x-flac"};if(r([66,80,71,251]))return{ext:"bpg",mime:"image/bpg"};if(i("wvpk"))return{ext:"wv",mime:"audio/wavpack"};if(i("%PDF")){await t.ignore(1350);const u=10485760,l=Buffer.alloc(Math.min(u,t.fileInfo.size));return await t.readBuffer(l,{mayBeLess:!0}),l.includes(Buffer.from("AIPrivateData"))?{ext:"ai",mime:"application/postscript"}:{ext:"pdf",mime:"application/pdf"}}if(r([0,97,115,109]))return{ext:"wasm",mime:"application/wasm"};if(r([73,73,42,0]))return i("CR",{offset:8})?{ext:"cr2",mime:"image/x-canon-cr2"}:r([28,0,254,0],{offset:8})||r([31,0,11,0],{offset:8})?{ext:"nef",mime:"image/x-nikon-nef"}:r([8,0,0,0],{offset:4})&&(r([45,0,254,0],{offset:8})||r([39,0,254,0],{offset:8}))?{ext:"dng",mime:"image/x-adobe-dng"}:(e=Buffer.alloc(24),await t.peekBuffer(e),(r([16,251,134,1],{offset:4})||r([8,0,0,0],{offset:4}))&&r([0,254,0,4,0,1,0,0,0,1,0,0,0,3,1],{offset:9})?{ext:"arw",mime:"image/x-sony-arw"}:{ext:"tif",mime:"image/tiff"});if(r([77,77,0,42]))return{ext:"tif",mime:"image/tiff"};if(i("MAC "))return{ext:"ape",mime:"audio/ape"};if(r([26,69,223,163])){async function c(){const e=await t.peekNumber(Token.UINT8);let r=128,i=0;for(;0==(e&r)&&0!==r;)++i,r>>=1;const n=Buffer.alloc(i+1);return await t.readBuffer(n),n}async function d(){const t=await c(),e=await c();e[0]^=128>>e.length-1;const r=Math.min(6,e.length);return{id:t.readUIntBE(0,t.length),len:e.readUIntBE(e.length-r,r)}}async function p(e,r){for(;r>0;){const e=await d();if(17026===e.id)return t.readToken(new Token.StringType(e.len,"utf-8"));await t.ignore(e.len),--r}}const m=await d();switch(await p(0,m.len)){case"webm":return{ext:"webm",mime:"video/webm"};case"matroska":return{ext:"mkv",mime:"video/x-matroska"};default:return}}if(r([82,73,70,70])){if(r([65,86,73],{offset:8}))return{ext:"avi",mime:"video/vnd.avi"};if(r([87,65,86,69],{offset:8}))return{ext:"wav",mime:"audio/vnd.wave"};if(r([81,76,67,77],{offset:8}))return{ext:"qcp",mime:"audio/qcelp"}}if(i("SQLi"))return{ext:"sqlite",mime:"application/x-sqlite3"};if(r([78,69,83,26]))return{ext:"nes",mime:"application/x-nintendo-nes-rom"};if(i("Cr24"))return{ext:"crx",mime:"application/x-google-chrome-extension"};if(i("MSCF")||i("ISc("))return{ext:"cab",mime:"application/vnd.ms-cab-compressed"};if(r([237,171,238,219]))return{ext:"rpm",mime:"application/x-rpm"};if(r([197,208,211,198]))return{ext:"eps",mime:"application/eps"};if(r([40,181,47,253]))return{ext:"zst",mime:"application/zstd"};if(r([79,84,84,79,0]))return{ext:"otf",mime:"font/otf"};if(i("#!AMR"))return{ext:"amr",mime:"audio/amr"};if(i("{\\rtf"))return{ext:"rtf",mime:"application/rtf"};if(r([70,76,86,1]))return{ext:"flv",mime:"video/x-flv"};if(i("IMPM"))return{ext:"it",mime:"audio/x-it"};if(i("-lh0-",{offset:2})||i("-lh1-",{offset:2})||i("-lh2-",{offset:2})||i("-lh3-",{offset:2})||i("-lh4-",{offset:2})||i("-lh5-",{offset:2})||i("-lh6-",{offset:2})||i("-lh7-",{offset:2})||i("-lzs-",{offset:2})||i("-lz4-",{offset:2})||i("-lz5-",{offset:2})||i("-lhd-",{offset:2}))return{ext:"lzh",mime:"application/x-lzh-compressed"};if(r([0,0,1,186])){if(r([33],{offset:4,mask:[241]}))return{ext:"mpg",mime:"video/MP1S"};if(r([68],{offset:4,mask:[196]}))return{ext:"mpg",mime:"video/MP2P"}}if(i("ITSF"))return{ext:"chm",mime:"application/vnd.ms-htmlhelp"};if(r([253,55,122,88,90,0]))return{ext:"xz",mime:"application/x-xz"};if(i("<?xml "))return{ext:"xml",mime:"application/xml"};if(r([55,122,188,175,39,28]))return{ext:"7z",mime:"application/x-7z-compressed"};if(r([82,97,114,33,26,7])&&(0===e[6]||1===e[6]))return{ext:"rar",mime:"application/x-rar-compressed"};if(i("solid "))return{ext:"stl",mime:"model/stl"};if(i("BLENDER"))return{ext:"blend",mime:"application/x-blender"};if(i("!<arch>"))return await t.ignore(8),"debian-binary"===await t.readToken(new Token.StringType(13,"ascii"))?{ext:"deb",mime:"application/x-deb"}:{ext:"ar",mime:"application/x-unix-archive"};if(r([137,80,78,71,13,10,26,10])){async function g(){return{length:await t.readToken(Token.INT32_BE),type:await t.readToken(new Token.StringType(4,"binary"))}}await t.ignore(8);do{const b=await g();if(b.length<0)return;switch(b.type){case"IDAT":return{ext:"png",mime:"image/png"};case"acTL":return{ext:"apng",mime:"image/apng"};default:await t.ignore(b.length+4)}}while(t.position+8<t.fileInfo.size);return{ext:"png",mime:"image/png"}}if(r([65,82,82,79,87,49,0,0]))return{ext:"arrow",mime:"application/x-apache-arrow"};if(r([103,108,84,70,2,0,0,0]))return{ext:"glb",mime:"model/gltf-binary"};if(r([102,114,101,101],{offset:4})||r([109,100,97,116],{offset:4})||r([109,111,111,118],{offset:4})||r([119,105,100,101],{offset:4}))return{ext:"mov",mime:"video/quicktime"};if(r([73,73,82,79,8,0,0,0,24]))return{ext:"orf",mime:"image/x-olympus-orf"};if(i("gimp xcf "))return{ext:"xcf",mime:"image/x-xcf"};if(r([73,73,85,0,24,0,0,0,136,231,116,216]))return{ext:"rw2",mime:"image/x-panasonic-rw2"};if(r([48,38,178,117,142,102,207,17,166,217])){async function _(){const e=Buffer.alloc(16);return await t.readBuffer(e),{id:e,size:Number(await t.readToken(Token.UINT64_LE))}}for(await t.ignore(30);t.position+24<t.fileInfo.size;){const y=await _();let w=y.size-24;if(_check(y.id,[145,7,220,183,183,169,207,17,142,230,0,192,12,32,83,101])){const v=Buffer.alloc(16);if(w-=await t.readBuffer(v),_check(v,[64,158,105,248,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"audio/x-ms-asf"};if(_check(v,[192,239,25,188,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"video/x-ms-asf"};break}await t.ignore(w)}return{ext:"asf",mime:"application/vnd.ms-asf"}}if(r([171,75,84,88,32,49,49,187,13,10,26,10]))return{ext:"ktx",mime:"image/ktx"};if((r([126,16,4])||r([126,24,4]))&&r([48,77,73,69],{offset:4}))return{ext:"mie",mime:"application/x-mie"};if(r([39,10,0,0,0,0,0,0,0,0,0,0],{offset:2}))return{ext:"shp",mime:"application/x-esri-shape"};if(r([0,0,0,12,106,80,32,32,13,10,135,10]))switch(await t.ignore(20),await t.readToken(new Token.StringType(4,"ascii"))){case"jp2 ":return{ext:"jp2",mime:"image/jp2"};case"jpx ":return{ext:"jpx",mime:"image/jpx"};case"jpm ":return{ext:"jpm",mime:"image/jpm"};case"mjp2":return{ext:"mj2",mime:"image/mj2"};default:return}if(r([255,10])||r([0,0,0,12,74,88,76,32,13,10,135,10]))return{ext:"jxl",mime:"image/jxl"};if(r([0,0,1,186])||r([0,0,1,179]))return{ext:"mpg",mime:"video/mpeg"};if(r([0,1,0,0,0]))return{ext:"ttf",mime:"font/ttf"};if(r([0,0,1,0]))return{ext:"ico",mime:"image/x-icon"};if(r([0,0,2,0]))return{ext:"cur",mime:"image/x-icon"};if(r([208,207,17,224,161,177,26,225]))return{ext:"cfb",mime:"application/x-cfb"};if(await t.peekBuffer(e,{length:Math.min(256,t.fileInfo.size),mayBeLess:!0}),i("BEGIN:")){if(i("VCARD",{offset:6}))return{ext:"vcf",mime:"text/vcard"};if(i("VCALENDAR",{offset:6}))return{ext:"ics",mime:"text/calendar"}}if(i("FUJIFILMCCD-RAW"))return{ext:"raf",mime:"image/x-fujifilm-raf"};if(i("Extended Module:"))return{ext:"xm",mime:"audio/x-xm"};if(i("Creative Voice File"))return{ext:"voc",mime:"audio/x-voc"};if(r([4,0,0,0])&&e.length>=16){const x=e.readUInt32LE(12);if(x>12&&e.length>=x+16)try{const E=e.slice(16,x+16).toString();if(JSON.parse(E).files)return{ext:"asar",mime:"application/x-asar"}}catch(k){}}if(r([6,14,43,52,2,5,1,1,13,1,2,1,1,2]))return{ext:"mxf",mime:"application/mxf"};if(i("SCRM",{offset:44}))return{ext:"s3m",mime:"audio/x-s3m"};if(r([71],{offset:4})&&(r([71],{offset:192})||r([71],{offset:196})))return{ext:"mts",mime:"video/mp2t"};if(r([66,79,79,75,77,79,66,73],{offset:60}))return{ext:"mobi",mime:"application/x-mobipocket-ebook"};if(r([68,73,67,77],{offset:128}))return{ext:"dcm",mime:"application/dicom"};if(r([76,0,0,0,1,20,2,0,0,0,0,0,192,0,0,0,0,0,0,70]))return{ext:"lnk",mime:"application/x.ms.shortcut"};if(r([98,111,111,107,0,0,0,0,109,97,114,107,0,0,0,0]))return{ext:"alias",mime:"application/x.apple.alias"};if(r([76,80],{offset:34})&&(r([0,0,1],{offset:8})||r([1,0,2],{offset:8})||r([2,0,2],{offset:8})))return{ext:"eot",mime:"application/vnd.ms-fontobject"};if(r([6,6,237,245,216,29,70,229,189,49,239,231,254,116,183,29]))return{ext:"indd",mime:"application/x-indesign"};if(await t.peekBuffer(e,{length:Math.min(512,t.fileInfo.size),mayBeLess:!0}),tarHeaderChecksumMatches(e))return{ext:"tar",mime:"application/x-tar"};if(r([255,254,255,14,83,0,107,0,101,0,116,0,99,0,104,0,85,0,112,0,32,0,77,0,111,0,100,0,101,0,108,0]))return{ext:"skp",mime:"application/vnd.sketchup.skp"};if(i("-----BEGIN PGP MESSAGE-----"))return{ext:"pgp",mime:"application/pgp-encrypted"};if(e.length>=2&&r([255,224],{offset:0,mask:[255,224]})){if(r([16],{offset:1,mask:[22]}))return r([8],{offset:1,mask:[8]}),{ext:"aac",mime:"audio/aac"};if(r([2],{offset:1,mask:[6]}))return{ext:"mp3",mime:"audio/mpeg"};if(r([4],{offset:1,mask:[6]}))return{ext:"mp2",mime:"audio/mpeg"};if(r([6],{offset:1,mask:[6]}))return{ext:"mp1",mime:"audio/mpeg"}}}const stream=readableStream=>new Promise(((resolve,reject)=>{const stream=eval("require")("stream");readableStream.on("error",reject),readableStream.once("readable",(async()=>{const t=new stream.PassThrough;let e;e=stream.pipeline?stream.pipeline(readableStream,t,(()=>{})):readableStream.pipe(t);const r=readableStream.read(minimumBytes)||readableStream.read()||Buffer.alloc(0);try{const e=await fromBuffer(r);t.fileType=e}catch(t){reject(t)}resolve(e)}))})),fileType={fromStream,fromTokenizer,fromBuffer,stream};Object.defineProperty(fileType,"extensions",{get:()=>new Set(supported.extensions)}),Object.defineProperty(fileType,"mimeTypes",{get:()=>new Set(supported.mimeTypes)}),module.exports=fileType},5025:(t,e,r)=>{"use strict";const i=r(3569),n=r(8789),a={fromFile:async function(t){const e=await i.fromFile(t);try{return await n.fromTokenizer(e)}finally{await e.close()}}};Object.assign(a,n),Object.defineProperty(a,"extensions",{get:()=>n.extensions}),Object.defineProperty(a,"mimeTypes",{get:()=>n.mimeTypes}),t.exports=a},4078:t=>{"use strict";t.exports={extensions:["jpg","png","apng","gif","webp","flif","xcf","cr2","cr3","orf","arw","dng","nef","rw2","raf","tif","bmp","icns","jxr","psd","indd","zip","tar","rar","gz","bz2","7z","dmg","mp4","mid","mkv","webm","mov","avi","mpg","mp2","mp3","m4a","oga","ogg","ogv","opus","flac","wav","spx","amr","pdf","epub","exe","swf","rtf","wasm","woff","woff2","eot","ttf","otf","ico","flv","ps","xz","sqlite","nes","crx","xpi","cab","deb","ar","rpm","Z","lz","cfb","mxf","mts","blend","bpg","docx","pptx","xlsx","3gp","3g2","jp2","jpm","jpx","mj2","aif","qcp","odt","ods","odp","xml","mobi","heic","cur","ktx","ape","wv","dcm","ics","glb","pcap","dsf","lnk","alias","voc","ac3","m4v","m4p","m4b","f4v","f4p","f4b","f4a","mie","asf","ogm","ogx","mpc","arrow","shp","aac","mp1","it","s3m","xm","ai","skp","avif","eps","lzh","pgp","asar","stl","chm","3mf","zst","jxl","vcf"],mimeTypes:["image/jpeg","image/png","image/gif","image/webp","image/flif","image/x-xcf","image/x-canon-cr2","image/x-canon-cr3","image/tiff","image/bmp","image/vnd.ms-photo","image/vnd.adobe.photoshop","application/x-indesign","application/epub+zip","application/x-xpinstall","application/vnd.oasis.opendocument.text","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.presentation","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/zip","application/x-tar","application/x-rar-compressed","application/gzip","application/x-bzip2","application/x-7z-compressed","application/x-apple-diskimage","application/x-apache-arrow","video/mp4","audio/midi","video/x-matroska","video/webm","video/quicktime","video/vnd.avi","audio/vnd.wave","audio/qcelp","audio/x-ms-asf","video/x-ms-asf","application/vnd.ms-asf","video/mpeg","video/3gpp","audio/mpeg","audio/mp4","audio/opus","video/ogg","audio/ogg","application/ogg","audio/x-flac","audio/ape","audio/wavpack","audio/amr","application/pdf","application/x-msdownload","application/x-shockwave-flash","application/rtf","application/wasm","font/woff","font/woff2","application/vnd.ms-fontobject","font/ttf","font/otf","image/x-icon","video/x-flv","application/postscript","application/eps","application/x-xz","application/x-sqlite3","application/x-nintendo-nes-rom","application/x-google-chrome-extension","application/vnd.ms-cab-compressed","application/x-deb","application/x-unix-archive","application/x-rpm","application/x-compress","application/x-lzip","application/x-cfb","application/x-mie","application/mxf","video/mp2t","application/x-blender","image/bpg","image/jp2","image/jpx","image/jpm","image/mj2","audio/aiff","application/xml","application/x-mobipocket-ebook","image/heif","image/heif-sequence","image/heic","image/heic-sequence","image/icns","image/ktx","application/dicom","audio/x-musepack","text/calendar","text/vcard","model/gltf-binary","application/vnd.tcpdump.pcap","audio/x-dsf","application/x.ms.shortcut","application/x.apple.alias","audio/x-voc","audio/vnd.dolby.dd-raw","audio/x-m4a","image/apng","image/x-olympus-orf","image/x-sony-arw","image/x-adobe-dng","image/x-nikon-nef","image/x-panasonic-rw2","image/x-fujifilm-raf","video/x-m4v","video/3gpp2","application/x-esri-shape","audio/aac","audio/x-it","audio/x-s3m","audio/x-xm","video/MP1S","video/MP2P","application/vnd.sketchup.skp","image/avif","application/x-lzh-compressed","application/pgp-encrypted","application/x-asar","model/stl","application/vnd.ms-htmlhelp","model/3mf","image/jxl","application/zstd"]}},7044:(t,e)=>{"use strict";e.stringToBytes=t=>[...t].map((t=>t.charCodeAt(0))),e.tarHeaderChecksumMatches=(t,e=0)=>{const r=parseInt(t.toString("utf8",148,154).replace(/\0.*$/,"").trim(),8);if(isNaN(r))return!1;let i=256;for(let r=e;r<e+148;r++)i+=t[r];for(let r=e+156;r<e+512;r++)i+=t[r];return r===i},e.uint32SyncSafeToken={get:(t,e)=>127&t[e+3]|t[e+2]<<7|t[e+1]<<14|t[e]<<21,len:4}},3243:(t,e,r)=>{"use strict";var i=r(9680),n=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o=function(t,e,r){for(var i=0,n=t.length;i<n;i++)a.call(t,i)&&(null==r?e(t[i],i,t):e.call(r,t[i],i,t))},s=function(t,e,r){for(var i=0,n=t.length;i<n;i++)null==r?e(t.charAt(i),i,t):e.call(r,t.charAt(i),i,t)},h=function(t,e,r){for(var i in t)a.call(t,i)&&(null==r?e(t[i],i,t):e.call(r,t[i],i,t))};t.exports=function(t,e,r){if(!i(e))throw new TypeError("iterator must be a function");var a;arguments.length>=3&&(a=r),"[object Array]"===n.call(t)?o(t,e,a):"string"==typeof t?s(t,e,a):h(t,e,a)}},2855:(t,e)=>{"use strict";function r(t,e,r,i){for(var n=t[e++],a=1<<n,o=a+1,s=o+1,h=n+1,f=(1<<h)-1,u=0,l=0,c=0,d=t[e++],p=new Int32Array(4096),m=null;;){for(;u<16&&0!==d;)l|=t[e++]<<u,u+=8,1===d?d=t[e++]:--d;if(u<h)break;var g=l&f;if(l>>=h,u-=h,g!==a){if(g===o)break;for(var b=g<s?g:m,_=0,y=b;y>a;)y=p[y]>>8,++_;var w=y;if(c+_+(b!==g?1:0)>i)return void console.log("Warning, gif stream longer than expected.");r[c++]=w;var v=c+=_;for(b!==g&&(r[c++]=w),y=b;_--;)y=p[y],r[--v]=255&y,y>>=8;null!==m&&s<4096&&(p[s++]=m<<8|w,s>=f+1&&h<12&&(++h,f=f<<1|1)),m=g}else s=o+1,f=(1<<(h=n+1))-1,m=null}return c!==i&&console.log("Warning, gif stream shorter than expected."),r}try{e.GifWriter=function(t,e,r,i){var n=0,a=void 0===(i=void 0===i?{}:i).loop?null:i.loop,o=void 0===i.palette?null:i.palette;if(e<=0||r<=0||e>65535||r>65535)throw new Error("Width/Height invalid.");function s(t){var e=t.length;if(e<2||e>256||e&e-1)throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");return e}t[n++]=71,t[n++]=73,t[n++]=70,t[n++]=56,t[n++]=57,t[n++]=97;var h=0,f=0;if(null!==o){for(var u=s(o);u>>=1;)++h;if(u=1<<h,--h,void 0!==i.background){if((f=i.background)>=u)throw new Error("Background index out of range.");if(0===f)throw new Error("Background index explicitly passed as 0.")}}if(t[n++]=255&e,t[n++]=e>>8&255,t[n++]=255&r,t[n++]=r>>8&255,t[n++]=(null!==o?128:0)|h,t[n++]=f,t[n++]=0,null!==o)for(var l=0,c=o.length;l<c;++l){var d=o[l];t[n++]=d>>16&255,t[n++]=d>>8&255,t[n++]=255&d}if(null!==a){if(a<0||a>65535)throw new Error("Loop count invalid.");t[n++]=33,t[n++]=255,t[n++]=11,t[n++]=78,t[n++]=69,t[n++]=84,t[n++]=83,t[n++]=67,t[n++]=65,t[n++]=80,t[n++]=69,t[n++]=50,t[n++]=46,t[n++]=48,t[n++]=3,t[n++]=1,t[n++]=255&a,t[n++]=a>>8&255,t[n++]=0}var p=!1;this.addFrame=function(e,r,i,a,h,f){if(!0===p&&(--n,p=!1),f=void 0===f?{}:f,e<0||r<0||e>65535||r>65535)throw new Error("x/y invalid.");if(i<=0||a<=0||i>65535||a>65535)throw new Error("Width/Height invalid.");if(h.length<i*a)throw new Error("Not enough pixels for the frame size.");var u=!0,l=f.palette;if(null==l&&(u=!1,l=o),null==l)throw new Error("Must supply either a local or global palette.");for(var c=s(l),d=0;c>>=1;)++d;c=1<<d;var m=void 0===f.delay?0:f.delay,g=void 0===f.disposal?0:f.disposal;if(g<0||g>3)throw new Error("Disposal out of range.");var b=!1,_=0;if(void 0!==f.transparent&&null!==f.transparent&&(b=!0,(_=f.transparent)<0||_>=c))throw new Error("Transparent color index.");if((0!==g||b||0!==m)&&(t[n++]=33,t[n++]=249,t[n++]=4,t[n++]=g<<2|(!0===b?1:0),t[n++]=255&m,t[n++]=m>>8&255,t[n++]=_,t[n++]=0),t[n++]=44,t[n++]=255&e,t[n++]=e>>8&255,t[n++]=255&r,t[n++]=r>>8&255,t[n++]=255&i,t[n++]=i>>8&255,t[n++]=255&a,t[n++]=a>>8&255,t[n++]=!0===u?128|d-1:0,!0===u)for(var y=0,w=l.length;y<w;++y){var v=l[y];t[n++]=v>>16&255,t[n++]=v>>8&255,t[n++]=255&v}return n=function(t,e,r,i){t[e++]=r;var n=e++,a=1<<r,o=a-1,s=a+1,h=s+1,f=r+1,u=0,l=0;function c(r){for(;u>=r;)t[e++]=255&l,l>>=8,u-=8,e===n+256&&(t[n]=255,n=e++)}function d(t){l|=t<<u,u+=f,c(8)}var p=i[0]&o,m={};d(a);for(var g=1,b=i.length;g<b;++g){var _=i[g]&o,y=p<<8|_,w=m[y];if(void 0===w){for(l|=p<<u,u+=f;u>=8;)t[e++]=255&l,l>>=8,u-=8,e===n+256&&(t[n]=255,n=e++);4096===h?(d(a),h=s+1,f=r+1,m={}):(h>=1<<f&&++f,m[y]=h++),p=_}else p=w}return d(p),d(s),c(1),n+1===e?t[n]=0:(t[n]=e-n-1,t[e++]=0),e}(t,n,d<2?2:d,h),n},this.end=function(){return!1===p&&(t[n++]=59,p=!0),n},this.getOutputBuffer=function(){return t},this.setOutputBuffer=function(e){t=e},this.getOutputBufferPosition=function(){return n},this.setOutputBufferPosition=function(t){n=t}},e.GifReader=function(t){var e=0;if(71!==t[e++]||73!==t[e++]||70!==t[e++]||56!==t[e++]||56!=(t[e++]+1&253)||97!==t[e++])throw new Error("Invalid GIF 87a/89a header.");var i=t[e++]|t[e++]<<8,n=t[e++]|t[e++]<<8,a=t[e++],o=a>>7,s=1<<1+(7&a);t[e++],t[e++];var h=null,f=null;o&&(h=e,f=s,e+=3*s);var u=!0,l=[],c=0,d=null,p=0,m=null;for(this.width=i,this.height=n;u&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(11!==t[e]||78==t[e+1]&&69==t[e+2]&&84==t[e+3]&&83==t[e+4]&&67==t[e+5]&&65==t[e+6]&&80==t[e+7]&&69==t[e+8]&&50==t[e+9]&&46==t[e+10]&&48==t[e+11]&&3==t[e+12]&&1==t[e+13]&&0==t[e+16])e+=14,m=t[e++]|t[e++]<<8,e++;else for(e+=12;;){if(!((I=t[e++])>=0))throw Error("Invalid block size");if(0===I)break;e+=I}break;case 249:if(4!==t[e++]||0!==t[e+4])throw new Error("Invalid graphics extension block.");var g=t[e++];c=t[e++]|t[e++]<<8,d=t[e++],0==(1&g)&&(d=null),p=g>>2&7,e++;break;case 254:for(;;){if(!((I=t[e++])>=0))throw Error("Invalid block size");if(0===I)break;e+=I}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var b=t[e++]|t[e++]<<8,_=t[e++]|t[e++]<<8,y=t[e++]|t[e++]<<8,w=t[e++]|t[e++]<<8,v=t[e++],x=v>>6&1,E=1<<1+(7&v),k=h,S=f,M=!1;v>>7&&(M=!0,k=e,S=E,e+=3*E);var A=e;for(e++;;){var I;if(!((I=t[e++])>=0))throw Error("Invalid block size");if(0===I)break;e+=I}l.push({x:b,y:_,width:y,height:w,has_local_palette:M,palette_offset:k,palette_size:S,data_offset:A,data_length:e-A,transparent_index:d,interlaced:!!x,delay:c,disposal:p});break;case 59:u=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return l.length},this.loopCount=function(){return m},this.frameInfo=function(t){if(t<0||t>=l.length)throw new Error("Frame index out of range.");return l[t]},this.decodeAndBlitFrameBGRA=function(e,n){var a=this.frameInfo(e),o=a.width*a.height,s=new Uint8Array(o);r(t,a.data_offset,s,o);var h=a.palette_offset,f=a.transparent_index;null===f&&(f=256);var u=a.width,l=i-u,c=u,d=4*(a.y*i+a.x),p=4*((a.y+a.height)*i+a.x),m=d,g=4*l;!0===a.interlaced&&(g+=4*i*7);for(var b=8,_=0,y=s.length;_<y;++_){var w=s[_];if(0===c&&(c=u,(m+=g)>=p&&(g=4*l+4*i*(b-1),m=d+(u+l)*(b<<1),b>>=1)),w===f)m+=4;else{var v=t[h+3*w],x=t[h+3*w+1],E=t[h+3*w+2];n[m++]=E,n[m++]=x,n[m++]=v,n[m++]=255}--c}},this.decodeAndBlitFrameRGBA=function(e,n){var a=this.frameInfo(e),o=a.width*a.height,s=new Uint8Array(o);r(t,a.data_offset,s,o);var h=a.palette_offset,f=a.transparent_index;null===f&&(f=256);var u=a.width,l=i-u,c=u,d=4*(a.y*i+a.x),p=4*((a.y+a.height)*i+a.x),m=d,g=4*l;!0===a.interlaced&&(g+=4*i*7);for(var b=8,_=0,y=s.length;_<y;++_){var w=s[_];if(0===c&&(c=u,(m+=g)>=p&&(g=4*l+4*i*(b-1),m=d+(u+l)*(b<<1),b>>=1)),w===f)m+=4;else{var v=t[h+3*w],x=t[h+3*w+1],E=t[h+3*w+2];n[m++]=v,n[m++]=x,n[m++]=E,n[m++]=255}--c}}}}catch(t){}},7604:(t,e,r)=>{"use strict";var i=r(8834).lW;class n{constructor(...t){if(0===t.length)throw new Error("constructor requires parameters");const e=t[0];if(null!==e&&"object"==typeof e)if(e instanceof n){const t=e.bitmap;this.bitmap={width:t.width,height:t.height,data:new i(t.width*t.height*4)},t.data.copy(this.bitmap.data)}else{if(!(e.width&&e.height&&e.data))throw new Error("unrecognized constructor parameters");this.bitmap=e}else{if("number"!=typeof e||"number"!=typeof t[1])throw new Error("unrecognized constructor parameters");{const r=e,n=t[1],a=t[2];this.bitmap={width:r,height:n},i.isBuffer(a)?this.bitmap.data=a:(this.bitmap.data=new i(r*n*4),"number"==typeof a&&this.fillRGBA(a))}}}blit(t,e,r,i,n,a,o){if(i+a>this.bitmap.width)throw new Error("copy exceeds width of source bitmap");if(e+a>t.bitmap.width)throw new Error("copy exceeds width of target bitmap");if(n+o>this.bitmap.height)throw new Error("copy exceeds height of source bitmap");if(r+o>t.bitmap.height)throw new Erro("copy exceeds height of target bitmap");const s=this.bitmap.data,h=t.bitmap.data,f=4*this.bitmap.width,u=4*t.bitmap.width,l=4*a;let c=n*f+4*i,d=r*u+4*e;for(;--o>=0;)s.copy(h,d,c,c+l),c+=f,d+=u;return this}fillRGBA(t){const e=this.bitmap.data,r=4*this.bitmap.height;let i=0;for(;i<r;)e.writeUInt32BE(t,i),i+=4;for(;i<e.length;)e.copy(e,i,0,r),i+=r;return this}getRGBA(t,e){const r=4*(e*this.bitmap.width+t);return this.bitmap.data.readUInt32BE(r)}getRGBASet(){const t=new Set,e=this.bitmap.data;for(let r=0;r<e.length;r+=4)t.add(e.readUInt32BE(r,!0));return t}greyscale(){const t=this.bitmap.data;return this.scan(0,0,this.bitmap.width,this.bitmap.height,((e,r,i)=>{const n=Math.round(.299*t[i]+.587*t[i+1]+.114*t[i+2]);t[i]=n,t[i+1]=n,t[i+2]=n})),this}reframe(t,e,r,i,a){const o=t<0?0:t,s=e<0?0:e,h=r+o>this.bitmap.width?this.bitmap.width-o:r,f=i+s>this.bitmap.height?this.bitmap.height-s:i,u=t<0?-t:0,l=e<0?-e:0;let c;if(void 0===a){if(o!==t||s!=e||h!==r||f!==i)throw new GifError("fillRGBA required for this reframing");c=new n(r,i)}else c=new n(r,i,a);return this.blit(c,u,l,o,s,h,f),this.bitmap=c.bitmap,this}scale(t){if(1===t)return;if(!Number.isInteger(t)||t<1)throw new Error("the scale must be an integer >= 1");const e=this.bitmap.width,r=this.bitmap.height,n=e*t*4,a=this.bitmap.data,o=new i(r*n*t);let s,h=0,f=0;for(let i=0;i<r;++i){s=f;for(let r=0;r<e;++r){const e=a.readUInt32BE(h,!0);for(let r=0;r<t;++r)o.writeUInt32BE(e,f),f+=4;h+=4}for(let e=1;e<t;++e)o.copy(o,f,s,f),f+=n,s+=n}return this.bitmap={width:e*t,height:r*t,data:o},this}scanAllCoords(t){const e=this.bitmap.width,r=this.bitmap.data.length;let i=0,n=0;for(let a=0;a<r;a+=4)t(i,n,a),++i===e&&(i=0,++n)}scanAllIndexes(t){const e=this.bitmap.data.length;for(let r=0;r<e;r+=4)t(r)}}t.exports=n},4364:(t,e)=>{"use strict";class r{constructor(t,e,r){this.width=r.width,this.height=r.height,this.loops=r.loops,this.usesTransparency=r.usesTransparency,this.colorScope=r.colorScope,this.frames=e,this.buffer=t}}r.GlobalColorsPreferred=0,r.GlobalColorsOnly=1,r.LocalColorsOnly=2;class i extends Error{constructor(t){super(t),t instanceof Error&&(this.stack="Gif"+t.stack)}}e.Gif=r,e.GifError=i},6512:(t,e,r)=>{"use strict";var i=r(4406),n=r(8834).lW;const a=r(2855),{Gif:o,GifError:s}=r(4364);let h;i.nextTick((()=>{h=r(4602)}));const{GifFrame:f}=r(5585),u=100;function l(t,e){const r=t.indexOf(e);return-1===r?null:r}function c(t,e){for(var r,i=0,n=t.length-1;i<=n;)if(t[r=Math.floor((i+n)/2)]>e)n=r-1;else{if(!(t[r]<e))return r;i=r+1}return null}function d(t){const e=t.colors;t.usesTransparency&&e.push(0);const r=e.length;let i=2;for(;r>i;)i<<=1;e.length=i,e.fill(0,r)}function p(t,e){let r=t.bitmap.width*t.bitmap.height;return r=Math.ceil(r*e/8),r+=Math.ceil(r/255),u+r+768}function m(t){let e=t.indexCount,r=0;for(--e;e;)++r,e>>=1;return r>0?r:1}function g(t,e,r,i,a){if(r.interlaced)throw new s("writing interlaced GIFs is not supported");const o=function(t,e,r){const i=r.colors,a=i.length<=8?l:c,o=e.bitmap.data,h=new n(o.length/4);let f=i.length,u=0,d=0;for(;u<o.length;){if(0!==o[u+3]){const t=o.readUInt32BE(u,!0)>>8&16777215;h[d]=a(i,t)}else h[d]=f;u+=4,++d}if(r.usesTransparency){if(256===f)throw new s(`Frame ${t} already has 256 colorsand so can't use transparency`)}else f=null;return{buffer:h,transparentIndex:f}}(e,r,i),h={delay:r.delayCentisecs,disposal:r.disposalMethod,transparent:o.transparentIndex};a&&(d(i),h.palette=i.colors);try{let e,i=t.getOutputBuffer(),a=t.getOutputBufferPosition(),s=!0;for(;s;)if(e=t.addFrame(r.xOffset,r.yOffset,r.bitmap.width,r.bitmap.height,o.buffer,h),s=!1,e>=i.length-1){const e=new n(1.5*i.length);i.copy(e),t.setOutputBuffer(e),t.setOutputBufferPosition(a),i=e,s=!0}return i}catch(t){throw new s(t)}}e.GifCodec=class{constructor(t={}){this._transparentRGB=null,"number"==typeof t.transparentRGB&&0!==t.transparentRGB&&(this._transparentRGBA=256*t.transparentRGB),this._testInitialBufferSize=0}decodeGif(t){try{let e;try{e=new a.GifReader(t)}catch(t){throw new s(t)}const r=e.numFrames(),i=[],n={width:e.width,height:e.height,loops:e.loopCount(),usesTransparency:!1};for(let t=0;t<r;++t){const r=this._decodeFrame(e,t,n.usesTransparency);i.push(r.frame),r.usesTransparency&&(n.usesTransparency=!0)}return Promise.resolve(new o(t,i,n))}catch(t){return Promise.reject(t)}}encodeGif(t,e={}){try{if(null===t||0===t.length)throw new s("there are no frames");const r=h.getMaxDimensions(t);return(e=Object.assign({},e)).width=r.maxWidth,e.height=r.maxHeight,e.loops=e.loops||0,e.colorScope=e.colorScope||o.GlobalColorsPreferred,Promise.resolve(this._encodeGif(t,e))}catch(t){return Promise.reject(t)}}_decodeFrame(t,e,r){let i,a;try{if(i=t.frameInfo(e),a=new n(t.width*t.height*4),t.decodeAndBlitFrameRGBA(e,a),i.width!==t.width||i.height!==t.height){if(i.y&&(a=a.slice(i.y*t.width*4)),t.width>i.width)for(let e=0;e<i.height;++e)a.copy(a,e*i.width*4,4*(i.x+e*t.width),4*(i.x+e*t.width)+4*i.width);a=a.slice(0,i.width*i.height*4)}}catch(t){throw new s(t)}let o=!1;if(null===this._transparentRGBA){if(!r)for(let t=3;t<a.length;t+=4)0===a[t]&&(o=!0,t=a.length)}else for(let t=3;t<a.length;t+=4)0===a[t]&&(a.writeUInt32BE(this._transparentRGBA,t-3),o=!0);return{frame:new f(i.width,i.height,a,{xOffset:i.x,yOffset:i.y,disposalMethod:i.disposal,interlaced:i.interlaced,delayCentisecs:i.delay}),usesTransparency:o}}_encodeGif(t,e){let r;if(e.colorScope===o.LocalColorsOnly)r=h.getColorInfo(t,0);else if(r=h.getColorInfo(t,256),!r.colors){if(e.colorScope===o.GlobalColorsOnly)throw new s("Too many color indexes for global color table");e.colorScope=o.LocalColorsOnly}e.usesTransparency=r.usesTransparency;const i=r.palettes;return e.colorScope===o.LocalColorsOnly?function(t,e,r,i){const h={loop:e.loops};let f,u=new n(2e3);try{f=new a.GifWriter(u,e.width,e.height,h)}catch(t){throw new s(t)}for(let e=0;e<t.length;++e)u=g(f,e,t[e],i[e],!0);return new o(u.slice(0,f.end()),t,e)}(t,e,0,i):function(t,e,r,i){const h={colors:i.colors.slice(),usesTransparency:i.usesTransparency};d(h);const f={palette:h.colors,loop:e.loops};let u,l=new n(2e3);try{u=new a.GifWriter(l,e.width,e.height,f)}catch(t){throw new s(t)}for(let e=0;e<t.length;++e)l=g(u,e,t[e],i,!1);return new o(l.slice(0,u.end()),t,e)}(t,e,0,r)}_getSizeEstimateGlobal(t,e){if(this._testInitialBufferSize>0)return this._testInitialBufferSize;let r=968;const i=m(t);return e.forEach((t=>{r+=p(t,i)})),r}_getSizeEstimateLocal(t,e){if(this._testInitialBufferSize>0)return this._testInitialBufferSize;let r=200;for(let i=0;i<e.length;++i){const n=m(t[i]);r+=p(e[i],n)}return r}}},5585:(t,e,r)=>{"use strict";const i=r(7604),{GifError:n}=r(4364);class a extends i{constructor(...t){if(super(...t),t[0]instanceof a){const e=t[0];this.xOffset=e.xOffset,this.yOffset=e.yOffset,this.disposalMethod=e.disposalMethod,this.delayCentisecs=e.delayCentisecs,this.interlaced=e.interlaced}else{const e=t[t.length-1];let r={};"object"!=typeof e||e instanceof i||(r=e),this.xOffset=r.xOffset||0,this.yOffset=r.yOffset||0,this.disposalMethod=void 0!==r.disposalMethod?r.disposalMethod:a.DisposeToBackgroundColor,this.delayCentisecs=r.delayCentisecs||8,this.interlaced=r.interlaced||!1}}getPalette(){const t=new Set,e=this.bitmap.data;let r=0,i=!1;for(;r<e.length;){if(0===e[r+3])i=!0;else{const i=e.readUInt32BE(r,!0)>>8&16777215;t.add(i)}r+=4}const n=new Array(t.size),a=t.values();for(r=0;r<n.length;++r)n[r]=a.next().value;n.sort(((t,e)=>t-e));let o=n.length;return i&&++o,{colors:n,usesTransparency:i,indexCount:o}}}a.DisposeToAnything=0,a.DisposeNothing=1,a.DisposeToBackgroundColor=2,a.DisposeToPrevious=3,e.GifFrame=a},4602:(t,e,r)=>{"use strict";var i=r(8834).lW;const n=r(8522),a=r(443),o=r(7604),{GifFrame:s}=r(5585),{GifError:h}=r(4364),{GifCodec:f}=r(6512),u=[".jpg",".jpeg",".png",".bmp"],l=new f;function c(t,e,r,i,n){const o=Array.isArray(t)?t:[t];if(n){if(["FloydSteinberg","FalseFloydSteinberg","Stucki","Atkinson","Jarvis","Burkes","Sierra","TwoSierra","SierraLite"].indexOf(n.ditherAlgorithm)<0)throw new Error(`Invalid ditherAlgorithm '${n.ditherAlgorithm}'`);void 0===n.serpentine&&(n.serpentine=!0),void 0===n.minimumColorDistanceToDither&&(n.minimumColorDistanceToDither=0),void 0===n.calculateErrorLikeGIMP&&(n.calculateErrorLikeGIMP=!1)}const s=new a.distance.Euclidean,h=new a.palette[e](s,r,i);let f;f=n?new a.image.ErrorDiffusionArray(s,a.image.ErrorDiffusionArrayKernel[n.ditherAlgorithm],n.serpentine,n.minimumColorDistanceToDither,n.calculateErrorLikeGIMP):new a.image.NearestColor(s);const u=[];o.forEach((t=>{const e=t.bitmap.data,r=new ArrayBuffer(e.length),i=new Uint32Array(r);for(let t=0,r=0;t<e.length;t+=4,++r)i[r]=e.readUInt32LE(t,!0);const n=a.utils.PointContainer.fromUint32Array(i,t.bitmap.width,t.bitmap.height);h.sample(n),u.push(n)}));const l=h.quantize();for(let t=0;t<o.length;++t){const e=o[t].bitmap.data,r=f.quantize(u[t],l).toUint32Array();for(let t=0,i=0;t<e.length;t+=4,++i)e.writeUInt32LE(r[i],t)}}e.cloneFrames=function(t){let e=[];return t.forEach((t=>{e.push(new s(t))})),e},e.getColorInfo=function(t,e){let r=!1;const i=[];for(let e=0;e<t.length;++e){let n=t[e].getPalette();if(n.usesTransparency&&(r=!0),n.indexCount>256)throw new h(`Frame ${e} uses more than 256 color indexes`);i.push(n)}if(0===e)return{usesTransparency:r,palettes:i};const n=new Set;i.forEach((t=>{t.colors.forEach((t=>{n.add(t)}))}));let a=n.size;if(r&&++a,e&&a>e)return{usesTransparency:r,palettes:i};const o=new Array(n.size),s=n.values();for(let t=0;t<o.length;++t)o[t]=s.next().value;return o.sort(((t,e)=>t-e)),{colors:o,indexCount:a,usesTransparency:r,palettes:i}},e.copyAsJimp=function(t,r){return e.shareAsJimp(t,new o(r))},e.getMaxDimensions=function(t){let e=0,r=0;return t.forEach((t=>{const i=t.xOffset+t.bitmap.width;i>e&&(e=i);const n=t.yOffset+t.bitmap.height;n>r&&(r=n)})),{maxWidth:e,maxHeight:r}},e.quantizeDekker=function(t,e,r){c(t,"NeuQuantFloat",e=e||256,0,r)},e.quantizeSorokin=function(t,e,r,i){let n;switch(e=e||256,r=r||"min-pop"){case"min-pop":n=2;break;case"top-pop":n=1;break;default:throw new Error(`Invalid quantizeSorokin histogram '${r}'`)}c(t,"RGBQuant",e,n,i)},e.quantizeWu=function(t,e,r,i){if(e=e||256,(r=r||5)<1||r>8)throw new Error("Invalid quantization quality");c(t,"WuQuant",e,r,i)},e.read=function(t,e){return e=e||l,i.isBuffer(t)?e.decodeGif(t):(r=t,new Promise(((t,e)=>{n.readFile(r,((r,i)=>r?e(r):t(i)))}))).then((t=>e.decodeGif(t)));var r},e.shareAsJimp=function(t,e){const r=new t(e.bitmap.width,e.bitmap.height,0);return r.bitmap.data=e.bitmap.data,r},e.write=function(t,e,r,i){i=i||l;const a=t.match(/\.[a-zA-Z]+$/);if(null!==a&&u.includes(a[0].toLowerCase()))throw new Error(`GIF '${t}' has an unexpected suffix`);return i.encodeGif(e,r).then((e=>function(t,e){return new Promise(((r,i)=>{n.writeFile(t,e,(t=>t?i(t):r()))}))}(t,e.buffer).then((()=>e))))}},9455:(t,e,r)=>{"use strict";const i=r(7604),{Gif:n,GifError:a}=r(4364),{GifCodec:o}=r(6512),{GifFrame:s}=r(5585),h=r(4602);t.exports={BitmapImage:i,Gif:n,GifCodec:o,GifFrame:s,GifUtil:h,GifError:a}},5048:(t,e,r)=>{var i;i="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},t.exports=i},2333:(t,e)=>{e.read=function(t,e,r,i,n){var a,o,s=8*n-i-1,h=(1<<s)-1,f=h>>1,u=-7,l=r?n-1:0,c=r?-1:1,d=t[e+l];for(l+=c,a=d&(1<<-u)-1,d>>=-u,u+=s;u>0;a=256*a+t[e+l],l+=c,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=i;u>0;o=256*o+t[e+l],l+=c,u-=8);if(0===a)a=1-f;else{if(a===h)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,i),a-=f}return(d?-1:1)*o*Math.pow(2,a-i)},e.write=function(t,e,r,i,n,a){var o,s,h,f=8*a-n-1,u=(1<<f)-1,l=u>>1,c=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,d=i?0:a-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-o))<1&&(o--,h*=2),(e+=o+l>=1?c/h:c*Math.pow(2,1-l))*h>=2&&(o++,h/=2),o+l>=u?(s=0,o=u):o+l>=1?(s=(e*h-1)*Math.pow(2,n),o+=l):(s=e*Math.pow(2,l-1)*Math.pow(2,n),o=0));n>=8;t[r+d]=255&s,d+=p,s/=256,n-=8);for(o=o<<n|s,f+=n;f>0;t[r+d]=255&o,d+=p,o/=256,f-=8);t[r+d-p]|=128*m}},443:function(t){var e;e=function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){"use strict";var i=r(1);e.constants=i;var n=r(3);e.conversion=n;var a=r(12);e.distance=a;var o=r(20);e.palette=o;var s=r(30);e.image=s;var h=r(35);e.quality=h;var f=r(37);e.utils=f},function(t,e,r){"use strict";var i=r(2);e.bt709=i},function(t,e){"use strict";var r,i,n;!function(t){t[t.RED=.2126]="RED",t[t.GREEN=.7152]="GREEN",t[t.BLUE=.0722]="BLUE",t[t.WHITE=1]="WHITE"}(r||(r={})),e.Y=r,function(t){t[t.RED=.64]="RED",t[t.GREEN=.3]="GREEN",t[t.BLUE=.15]="BLUE",t[t.WHITE=.3127]="WHITE"}(i||(i={})),e.x=i,function(t){t[t.RED=.33]="RED",t[t.GREEN=.6]="GREEN",t[t.BLUE=.06]="BLUE",t[t.WHITE=.329]="WHITE"}(n||(n={})),e.y=n},function(t,e,r){"use strict";var i=r(4);e.rgb2xyz=i.rgb2xyz;var n=r(5);e.rgb2hsl=n.rgb2hsl;var a=r(7);e.rgb2lab=a.rgb2lab;var o=r(9);e.lab2xyz=o.lab2xyz;var s=r(10);e.lab2rgb=s.lab2rgb;var h=r(8);e.xyz2lab=h.xyz2lab;var f=r(11);e.xyz2rgb=f.xyz2rgb},function(t,e){"use strict";function r(t){return t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92}e.rgb2xyz=function(t,e,i){return{x:.4124*(t=r(t/255))+.3576*(e=r(e/255))+.1805*(i=r(i/255)),y:.2126*t+.7152*e+.0722*i,z:.0193*t+.1192*e+.9505*i}}},function(t,e,r){"use strict";var i=r(6);e.rgb2hsl=function(t,e,r){var n=i.min3(t,e,r),a=i.max3(t,e,r),o=a-n,s=(n+a)/510,h=0;s>0&&s<1&&(h=o/(s<.5?a+n:510-a-n));var f=0;return o>0&&(f=a===t?(e-r)/o:a===e?2+(r-t)/o:4+(t-e)/o,(f*=60)<0&&(f+=360)),{h:f,s:h,l:s}}},function(t,e){"use strict";e.degrees2radians=function(t){return t*(Math.PI/180)},e.max3=function(t,e,r){var i=t;return i<e&&(i=e),i<r&&(i=r),i},e.min3=function(t,e,r){var i=t;return i>e&&(i=e),i>r&&(i=r),i},e.intInRange=function(t,e,r){return t>r&&(t=r),t<e&&(t=e),0|t},e.inRange0to255Rounded=function(t){return(t=Math.round(t))>255?t=255:t<0&&(t=0),t},e.inRange0to255=function(t){return t>255?t=255:t<0&&(t=0),t},e.stableSort=function(t,e){var r,i=typeof t[0];if("number"===i||"string"===i){for(var n=Object.create(null),a=0,o=t.length;a<o;a++){var s=t[a];n[s]||0===n[s]||(n[s]=a)}r=t.sort((function(t,r){return e(t,r)||n[t]-n[r]}))}else{var h=t.slice(0);r=t.sort((function(t,r){return e(t,r)||h.indexOf(t)-h.indexOf(r)}))}return r}},function(t,e,r){"use strict";var i=r(4),n=r(8);e.rgb2lab=function(t,e,r){var a=i.rgb2xyz(t,e,r);return n.xyz2lab(a.x,a.y,a.z)}},function(t,e){"use strict";function r(t){return t>.008856?Math.pow(t,1/3):7.787*t+16/116}e.xyz2lab=function(t,e,i){if(t=r(t/.95047),e=r(e/1),i=r(i/1.08883),116*e-16<0)throw new Error("xxx");return{L:Math.max(0,116*e-16),a:500*(t-e),b:200*(e-i)}}},function(t,e){"use strict";function r(t){return t>.206893034?Math.pow(t,3):(t-16/116)/7.787}e.lab2xyz=function(t,e,i){var n=(t+16)/116,a=n-i/200;return{x:.95047*r(e/500+n),y:1*r(n),z:1.08883*r(a)}}},function(t,e,r){"use strict";var i=r(9),n=r(11);e.lab2rgb=function(t,e,r){var a=i.lab2xyz(t,e,r);return n.xyz2rgb(a.x,a.y,a.z)}},function(t,e,r){"use strict";var i=r(6);function n(t){return t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t}e.xyz2rgb=function(t,e,r){var a=n(3.2406*t+-1.5372*e+-.4986*r),o=n(-.9689*t+1.8758*e+.0415*r),s=n(.0557*t+-.204*e+1.057*r);return{r:i.inRange0to255Rounded(255*a),g:i.inRange0to255Rounded(255*o),b:i.inRange0to255Rounded(255*s)}}},function(t,e,r){"use strict";var i=r(13);e.AbstractDistanceCalculator=i.AbstractDistanceCalculator;var n=r(14);e.CIE94Textiles=n.CIE94Textiles,e.CIE94GraphicArts=n.CIE94GraphicArts;var a=r(15);e.CIEDE2000=a.CIEDE2000;var o=r(16);e.CMETRIC=o.CMETRIC;var s=r(17);e.AbstractEuclidean=s.AbstractEuclidean,e.Euclidean=s.Euclidean,e.EuclideanRgbQuantWOAlpha=s.EuclideanRgbQuantWOAlpha,e.EuclideanRgbQuantWithAlpha=s.EuclideanRgbQuantWithAlpha;var h=r(18);e.AbstractManhattan=h.AbstractManhattan,e.Manhattan=h.Manhattan,e.ManhattanSRGB=h.ManhattanSRGB,e.ManhattanNommyde=h.ManhattanNommyde;var f=r(19);e.PNGQUANT=f.PNGQUANT},function(t,e){"use strict";var r=function(){function t(){this._setDefaults(),this.setWhitePoint(255,255,255,255)}return t.prototype.setWhitePoint=function(t,e,r,i){this._whitePoint={r:t>0?255/t:0,g:e>0?255/e:0,b:r>0?255/r:0,a:i>0?255/i:0},this._maxDistance=this.calculateRaw(t,e,r,i,0,0,0,0)},t.prototype.calculateNormalized=function(t,e){return this.calculateRaw(t.r,t.g,t.b,t.a,e.r,e.g,e.b,e.a)/this._maxDistance},t.prototype._setDefaults=function(){},t}();e.AbstractDistanceCalculator=r},function(t,e,r){"use strict";var i=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=r(13),a=r(7),o=r(6),s=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.calculateRaw=function(t,e,r,i,n,s,h,f){var u=a.rgb2lab(o.inRange0to255(t*this._whitePoint.r),o.inRange0to255(e*this._whitePoint.g),o.inRange0to255(r*this._whitePoint.b)),l=a.rgb2lab(o.inRange0to255(n*this._whitePoint.r),o.inRange0to255(s*this._whitePoint.g),o.inRange0to255(h*this._whitePoint.b)),c=u.L-l.L,d=u.a-l.a,p=u.b-l.b,m=Math.sqrt(u.a*u.a+u.b*u.b),g=m-Math.sqrt(l.a*l.a+l.b*l.b),b=d*d+p*p-g*g;b=b<0?0:Math.sqrt(b);var _=(f-i)*this._whitePoint.a*this._kA;return Math.sqrt(Math.pow(c/this._Kl,2)+Math.pow(g/(1+this._K1*m),2)+Math.pow(b/(1+this._K2*m),2)+Math.pow(_,2))},e}(n.AbstractDistanceCalculator);e.AbstractCIE94=s;var h=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype._setDefaults=function(){this._Kl=2,this._K1=.048,this._K2=.014,this._kA=12.5/255},e}(s);e.CIE94Textiles=h;var f=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype._setDefaults=function(){this._Kl=1,this._K1=.045,this._K2=.015,this._kA=25/255},e}(s);e.CIE94GraphicArts=f},function(t,e,r){"use strict";var i=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=r(13),a=r(7),o=r(6),s=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.calculateRaw=function(t,r,i,n,s,h,f,u){var l=a.rgb2lab(o.inRange0to255(t*this._whitePoint.r),o.inRange0to255(r*this._whitePoint.g),o.inRange0to255(i*this._whitePoint.b)),c=a.rgb2lab(o.inRange0to255(s*this._whitePoint.r),o.inRange0to255(h*this._whitePoint.g),o.inRange0to255(f*this._whitePoint.b)),d=(u-n)*this._whitePoint.a*e._kA,p=this.calculateRawInLab(l,c);return Math.sqrt(p+d*d)},e.prototype.calculateRawInLab=function(t,r){var i=t.L,n=t.a,a=t.b,o=r.L,s=r.a,h=r.b,f=Math.sqrt(n*n+a*a),u=Math.sqrt(s*s+h*h),l=Math.pow((f+u)/2,7),c=.5*(1-Math.sqrt(l/(l+e._pow25to7))),d=(1+c)*n,p=(1+c)*s,m=Math.sqrt(d*d+a*a),g=Math.sqrt(p*p+h*h),b=m*g,_=e._calculatehp(a,d),y=e._calculatehp(h,p),w=Math.abs(_-y),v=o-i,x=g-m,E=e._calculate_dHp(b,w,y,_),k=e._calculate_ahp(b,w,_,y),S=e._calculateT(k),M=(m+g)/2,A=Math.pow((i+o)/2-50,2),I=1+.015*A/Math.sqrt(20+A),T=1+.045*M,B=1+.015*S*M,R=e._calculateRT(k,M),P=v/I,O=x/T,L=E/B;return Math.pow(P,2)+Math.pow(O,2)+Math.pow(L,2)+R*O*L},e._calculatehp=function(t,r){var i=Math.atan2(t,r);return i>=0?i:i+e._deg360InRad},e._calculateRT=function(t,r){var i=Math.pow(r,7),n=2*Math.sqrt(i/(i+e._pow25to7)),a=e._deg30InRad*Math.exp(-Math.pow((t-e._deg275InRad)/e._deg25InRad,2));return-Math.sin(2*a)*n},e._calculateT=function(t){return 1-.17*Math.cos(t-e._deg30InRad)+.24*Math.cos(2*t)+.32*Math.cos(3*t+e._deg6InRad)-.2*Math.cos(4*t-e._deg63InRad)},e._calculate_ahp=function(t,r,i,n){var a=i+n;return 0==t?a:r<=e._deg180InRad?a/2:a<e._deg360InRad?(a+e._deg360InRad)/2:(a-e._deg360InRad)/2},e._calculate_dHp=function(t,r,i,n){var a;return a=0==t?0:r<=e._deg180InRad?i-n:i<=n?i-n+e._deg360InRad:i-n-e._deg360InRad,2*Math.sqrt(t)*Math.sin(a/2)},e._kA=25/255,e._pow25to7=Math.pow(25,7),e._deg360InRad=o.degrees2radians(360),e._deg180InRad=o.degrees2radians(180),e._deg30InRad=o.degrees2radians(30),e._deg6InRad=o.degrees2radians(6),e._deg63InRad=o.degrees2radians(63),e._deg275InRad=o.degrees2radians(275),e._deg25InRad=o.degrees2radians(25),e}(n.AbstractDistanceCalculator);e.CIEDE2000=s},function(t,e,r){"use strict";var i=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.calculateRaw=function(t,e,r,i,n,a,o,s){var h=(t+n)/2*this._whitePoint.r,f=(t-n)*this._whitePoint.r,u=(e-a)*this._whitePoint.g,l=(r-o)*this._whitePoint.b,c=((512+h)*f*f>>8)+4*u*u+((767-h)*l*l>>8),d=(s-i)*this._whitePoint.a;return Math.sqrt(c+d*d)},e}(r(13).AbstractDistanceCalculator);e.CMETRIC=n},function(t,e,r){"use strict";var i=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=r(13),a=r(2),o=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.calculateRaw=function(t,e,r,i,n,a,o,s){var h=n-t,f=a-e,u=o-r,l=s-i;return Math.sqrt(this._kR*h*h+this._kG*f*f+this._kB*u*u+this._kA*l*l)},e}(n.AbstractDistanceCalculator);e.AbstractEuclidean=o;var s=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype._setDefaults=function(){this._kR=1,this._kG=1,this._kB=1,this._kA=1},e}(o);e.Euclidean=s;var h=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype._setDefaults=function(){this._kR=a.Y.RED,this._kG=a.Y.GREEN,this._kB=a.Y.BLUE,this._kA=1},e}(o);e.EuclideanRgbQuantWithAlpha=h;var f=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype._setDefaults=function(){this._kR=a.Y.RED,this._kG=a.Y.GREEN,this._kB=a.Y.BLUE,this._kA=0},e}(o);e.EuclideanRgbQuantWOAlpha=f},function(t,e,r){"use strict";var i=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=r(13),a=r(2),o=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.calculateRaw=function(t,e,r,i,n,a,o,s){var h=n-t,f=a-e,u=o-r,l=s-i;return h<0&&(h=0-h),f<0&&(f=0-f),u<0&&(u=0-u),l<0&&(l=0-l),this._kR*h+this._kG*f+this._kB*u+this._kA*l},e}(n.AbstractDistanceCalculator);e.AbstractManhattan=o;var s=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype._setDefaults=function(){this._kR=1,this._kG=1,this._kB=1,this._kA=1},e}(o);e.Manhattan=s;var h=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype._setDefaults=function(){this._kR=.4984,this._kG=.8625,this._kB=.2979,this._kA=1},e}(o);e.ManhattanNommyde=h;var f=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype._setDefaults=function(){this._kR=a.Y.RED,this._kG=a.Y.GREEN,this._kB=a.Y.BLUE,this._kA=1},e}(o);e.ManhattanSRGB=f},function(t,e,r){"use strict";var i=this&&this.__extends||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=function(t){function e(){t.apply(this,arguments)}return i(e,t),e.prototype.calculateRaw=function(t,e,r,i,n,a,o,s){var h=(s-i)*this._whitePoint.a;return this._colordifference_ch(t*this._whitePoint.r,n*this._whitePoint.r,h)+this._colordifference_ch(e*this._whitePoint.g,a*this._whitePoint.g,h)+this._colordifference_ch(r*this._whitePoint.b,o*this._whitePoint.b,h)},e.prototype._colordifference_ch=function(t,e,r){var i=t-e,n=i+r;return i*i+n*n},e}(r(13).AbstractDistanceCalculator);e.PNGQUANT=n},function(t,e,r){"use strict";var i=r(21);e.NeuQuant=i.NeuQuant;var n=r(25);e.NeuQuantFloat=n.NeuQuantFloat;var a=r(26);e.RGBQuant=a.RGBQuant;var o=r(27);e.ColorHistogram=o.ColorHistogram;var s=r(29);e.WuQuant=s.WuQuant,e.WuColorCube=s.WuColorCube},function(t,e,r){"use strict";var i=r(22),n=r(24),a=3,o=function(){function t(t){this.r=this.g=this.b=this.a=t}return t.prototype.toPoint=function(){return n.Point.createByRGBA(this.r>>a,this.g>>a,this.b>>a,this.a>>a)},t.prototype.subtract=function(t,e,r,i){this.r-=0|t,this.g-=0|e,this.b-=0|r,this.a-=0|i},t}(),s=function(){function t(t,e){void 0===e&&(e=256),this._distance=t,this._pointArray=[],this._sampleFactor=1,this._networkSize=e,this._distance.setWhitePoint(255<<a,255<<a,255<<a,255<<a)}return t.prototype.sample=function(t){this._pointArray=this._pointArray.concat(t.getPointArray())},t.prototype.quantize=function(){return this._init(),this._learn(),this._buildPalette()},t.prototype._init=function(){this._freq=[],this._bias=[],this._radPower=[],this._network=[];for(var e=0;e<this._networkSize;e++)this._network[e]=new o((e<<a+8)/this._networkSize|0),this._freq[e]=t._initialBias/this._networkSize|0,this._bias[e]=0},t.prototype._learn=function(){var e=this._sampleFactor,r=this._pointArray.length;r<t._minpicturebytes&&(e=1);var i,n=30+(e-1)/3|0,o=r/e|0,s=o/t._nCycles|0,h=t._initAlpha,f=(this._networkSize>>3)*t._radiusBias,u=f>>t._radiusBiasShift;u<=1&&(u=0);for(var l=0;l<u;l++)this._radPower[l]=h*((u*u-l*l)*t._radBias/(u*u))>>>0;i=r<t._minpicturebytes?1:r%t._prime1!=0?t._prime1:r%t._prime2!=0?t._prime2:r%t._prime3!=0?t._prime3:t._prime4,l=0;for(var c=0;l<o;){var d=this._pointArray[c],p=d.b<<a,m=d.g<<a,g=d.r<<a,b=d.a<<a,_=this._contest(p,m,g,b);if(this._alterSingle(h,_,p,m,g,b),0!==u&&this._alterNeighbour(u,_,p,m,g,b),(c+=i)>=r&&(c-=r),0===s&&(s=1),++l%s==0){h-=h/n|0,(u=(f-=f/t._radiusDecrease|0)>>t._radiusBiasShift)<=1&&(u=0);for(var y=0;y<u;y++)this._radPower[y]=h*((u*u-y*y)*t._radBias/(u*u))>>>0}}},t.prototype._buildPalette=function(){var t=new i.Palette;return this._network.forEach((function(e){t.add(e.toPoint())})),t.sort(),t},t.prototype._alterNeighbour=function(e,r,i,n,a,o){var s=r-e;s<-1&&(s=-1);var h=r+e;h>this._networkSize&&(h=this._networkSize);for(var f=r+1,u=r-1,l=1;f<h||u>s;){var c,d=this._radPower[l++]/t._alphaRadBias;f<h&&(c=this._network[f++]).subtract(d*(c.r-a),d*(c.g-n),d*(c.b-i),d*(c.a-o)),u>s&&(c=this._network[u--]).subtract(d*(c.r-a),d*(c.g-n),d*(c.b-i),d*(c.a-o))}},t.prototype._alterSingle=function(e,r,i,n,a,o){e/=t._initAlpha;var s=this._network[r];s.subtract(e*(s.r-a),e*(s.g-n),e*(s.b-i),e*(s.a-o))},t.prototype._contest=function(e,r,i,n){for(var o=1020<<a,s=~(1<<31),h=s,f=-1,u=f,l=0;l<this._networkSize;l++){var c=this._network[l],d=this._distance.calculateNormalized(c,{r:i,g:r,b:e,a:n})*o|0;d<s&&(s=d,f=l);var p=d-(this._bias[l]>>t._initialBiasShift-a);p<h&&(h=p,u=l);var m=this._freq[l]>>t._betaShift;this._freq[l]-=m,this._bias[l]+=m<<t._gammaShift}return this._freq[f]+=t._beta,this._bias[f]-=t._betaGamma,u},t._prime1=499,t._prime2=491,t._prime3=487,t._prime4=503,t._minpicturebytes=t._prime4,t._nCycles=100,t._initialBiasShift=16,t._initialBias=1<<t._initialBiasShift,t._gammaShift=10,t._betaShift=10,t._beta=t._initialBias>>t._betaShift,t._betaGamma=t._initialBias<<t._gammaShift-t._betaShift,t._radiusBiasShift=6,t._radiusBias=1<<t._radiusBiasShift,t._radiusDecrease=30,t._alphaBiasShift=10,t._initAlpha=1<<t._alphaBiasShift,t._radBiasShift=8,t._radBias=1<<t._radBiasShift,t._alphaRadBiasShift=t._alphaBiasShift+t._radBiasShift,t._alphaRadBias=1<<t._alphaRadBiasShift,t}();e.NeuQuant=s},function(t,e,r){"use strict";var i=r(23),n=r(5);function a(t,e){for(var r=360/e,i=1,n=r-r/2;i<e;i++,n+=r)if(t>=n&&t<n+r)return i;return 0}e.hueGroup=a;var o=function(){function t(){this._pointArray=[],this._i32idx={},this._pointContainer=new i.PointContainer,this._pointContainer.setHeight(1),this._pointArray=this._pointContainer.getPointArray()}return t.prototype.add=function(t){this._pointArray.push(t),this._pointContainer.setWidth(this._pointArray.length)},t.prototype.has=function(t){for(var e=this._pointArray.length-1;e>=0;e--)if(t.uint32===this._pointArray[e].uint32)return!0;return!1},t.prototype.getNearestColor=function(t,e){return this._pointArray[0|this.getNearestIndex(t,e)]},t.prototype.getPointContainer=function(){return this._pointContainer},t.prototype._nearestPointFromCache=function(t){return"number"==typeof this._i32idx[t]?this._i32idx[t]:-1},t.prototype.getNearestIndex=function(t,e){var r=this._nearestPointFromCache(""+e.uint32);if(r>=0)return r;var i=Number.MAX_VALUE;r=0;for(var n=0,a=this._pointArray.length;n<a;n++){var o=this._pointArray[n],s=t.calculateRaw(e.r,e.g,e.b,e.a,o.r,o.g,o.b,o.a);s<i&&(i=s,r=n)}return this._i32idx[e.uint32]=r,r},t.prototype.sort=function(){this._i32idx={},this._pointArray.sort((function(t,e){var r=n.rgb2hsl(t.r,t.g,t.b),i=n.rgb2hsl(e.r,e.g,e.b),o=t.r===t.g&&t.g===t.b?0:1+a(r.h,10),s=(e.r===e.g&&e.g===e.b?0:1+a(i.h,10))-o;if(s)return-s;var h=t.getLuminosity(!0),f=e.getLuminosity(!0);if(f-h!=0)return f-h;var u=(100*i.s|0)-(100*r.s|0);return u?-u:0}))},t}();e.Palette=o},function(t,e,r){"use strict";var i=r(24),n=function(){function t(){this._width=0,this._height=0,this._pointArray=[]}return t.prototype.getWidth=function(){return this._width},t.prototype.getHeight=function(){return this._height},t.prototype.setWidth=function(t){this._width=t},t.prototype.setHeight=function(t){this._height=t},t.prototype.getPointArray=function(){return this._pointArray},t.prototype.clone=function(){var e=new t;e._width=this._width,e._height=this._height;for(var r=0,n=this._pointArray.length;r<n;r++)e._pointArray[r]=i.Point.createByUint32(0|this._pointArray[r].uint32);return e},t.prototype.toUint32Array=function(){for(var t=this._pointArray.length,e=new Uint32Array(t),r=0;r<t;r++)e[r]=this._pointArray[r].uint32;return e},t.prototype.toUint8Array=function(){return new Uint8Array(this.toUint32Array().buffer)},t.fromHTMLImageElement=function(e){var r=e.naturalWidth,i=e.naturalHeight,n=document.createElement("canvas");return n.width=r,n.height=i,n.getContext("2d").drawImage(e,0,0,r,i,0,0,r,i),t.fromHTMLCanvasElement(n)},t.fromHTMLCanvasElement=function(e){var r=e.width,i=e.height,n=e.getContext("2d").getImageData(0,0,r,i);return t.fromImageData(n)},t.fromNodeCanvas=function(e){return t.fromHTMLCanvasElement(e)},t.fromImageData=function(e){var r=e.width,i=e.height;return t.fromCanvasPixelArray(e.data,r,i)},t.fromArray=function(e,r,i){var n=new Uint8Array(e);return t.fromUint8Array(n,r,i)},t.fromCanvasPixelArray=function(e,r,i){return t.fromArray(e,r,i)},t.fromUint8Array=function(e,r,i){return t.fromUint32Array(new Uint32Array(e.buffer),r,i)},t.fromUint32Array=function(e,r,n){var a=new t;a._width=r,a._height=n;for(var o=0,s=e.length;o<s;o++)a._pointArray[o]=i.Point.createByUint32(0|e[o]);return a},t}();e.PointContainer=n},function(t,e,r){"use strict";var i=r(2),n=function(){function t(){this.uint32=-1>>>0,this.r=this.g=this.b=this.a=0,this.rgba=new Array(4),this.rgba[0]=0,this.rgba[1]=0,this.rgba[2]=0,this.rgba[3]=0}return t.createByQuadruplet=function(e){var r=new t;return r.r=0|e[0],r.g=0|e[1],r.b=0|e[2],r.a=0|e[3],r._loadUINT32(),r._loadQuadruplet(),r},t.createByRGBA=function(e,r,i,n){var a=new t;return a.r=0|e,a.g=0|r,a.b=0|i,a.a=0|n,a._loadUINT32(),a._loadQuadruplet(),a},t.createByUint32=function(e){var r=new t;return r.uint32=e>>>0,r._loadRGBA(),r._loadQuadruplet(),r},t.prototype.from=function(t){this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this.uint32=t.uint32,this.rgba[0]=t.r,this.rgba[1]=t.g,this.rgba[2]=t.b,this.rgba[3]=t.a},t.prototype.getLuminosity=function(t){var e=this.r,r=this.g,n=this.b;return t&&(e=Math.min(255,255-this.a+this.a*e/255),r=Math.min(255,255-this.a+this.a*r/255),n=Math.min(255,255-this.a+this.a*n/255)),e*i.Y.RED+r*i.Y.GREEN+n*i.Y.BLUE},t.prototype._loadUINT32=function(){this.uint32=(this.a<<24|this.b<<16|this.g<<8|this.r)>>>0},t.prototype._loadRGBA=function(){this.r=255&this.uint32,this.g=this.uint32>>>8&255,this.b=this.uint32>>>16&255,this.a=this.uint32>>>24&255},t.prototype._loadQuadruplet=function(){this.rgba[0]=this.r,this.rgba[1]=this.g,this.rgba[2]=this.b,this.rgba[3]=this.a},t}();e.Point=n},function(t,e,r){"use strict";var i=r(22),n=r(24),a=3,o=function(){function t(t){this.r=this.g=this.b=this.a=t}return t.prototype.toPoint=function(){return n.Point.createByRGBA(this.r>>a,this.g>>a,this.b>>a,this.a>>a)},t.prototype.subtract=function(t,e,r,i){this.r-=t,this.g-=e,this.b-=r,this.a-=i},t}(),s=function(){function t(t,e){void 0===e&&(e=256),this._distance=t,this._pointArray=[],this._sampleFactor=1,this._networkSize=e,this._distance.setWhitePoint(255<<a,255<<a,255<<a,255<<a)}return t.prototype.sample=function(t){this._pointArray=this._pointArray.concat(t.getPointArray())},t.prototype.quantize=function(){return this._init(),this._learn(),this._buildPalette()},t.prototype._init=function(){this._freq=[],this._bias=[],this._radPower=[],this._network=[];for(var e=0;e<this._networkSize;e++)this._network[e]=new o((e<<a+8)/this._networkSize),this._freq[e]=t._initialBias/this._networkSize,this._bias[e]=0},t.prototype._learn=function(){var e=this._sampleFactor,r=this._pointArray.length;r<t._minpicturebytes&&(e=1);var i,n=30+(e-1)/3,o=r/e,s=o/t._nCycles|0,h=t._initAlpha,f=(this._networkSize>>3)*t._radiusBias,u=f>>t._radiusBiasShift;u<=1&&(u=0);for(var l=0;l<u;l++)this._radPower[l]=h*((u*u-l*l)*t._radBias/(u*u));i=r<t._minpicturebytes?1:r%t._prime1!=0?t._prime1:r%t._prime2!=0?t._prime2:r%t._prime3!=0?t._prime3:t._prime4,l=0;for(var c=0;l<o;){var d=this._pointArray[c],p=d.b<<a,m=d.g<<a,g=d.r<<a,b=d.a<<a,_=this._contest(p,m,g,b);if(this._alterSingle(h,_,p,m,g,b),0!=u&&this._alterNeighbour(u,_,p,m,g,b),(c+=i)>=r&&(c-=r),0==s&&(s=1),++l%s==0){h-=h/n,(u=(f-=f/t._radiusDecrease)>>t._radiusBiasShift)<=1&&(u=0);for(var y=0;y<u;y++)this._radPower[y]=h*((u*u-y*y)*t._radBias/(u*u))}}},t.prototype._buildPalette=function(){var t=new i.Palette;return this._network.forEach((function(e){t.add(e.toPoint())})),t.sort(),t},t.prototype._alterNeighbour=function(e,r,i,n,a,o){var s=r-e;s<-1&&(s=-1);var h=r+e;h>this._networkSize&&(h=this._networkSize);for(var f=r+1,u=r-1,l=1;f<h||u>s;){var c,d=this._radPower[l++]/t._alphaRadBias;f<h&&(c=this._network[f++]).subtract(d*(c.r-a),d*(c.g-n),d*(c.b-i),d*(c.a-o)),u>s&&(c=this._network[u--]).subtract(d*(c.r-a),d*(c.g-n),d*(c.b-i),d*(c.a-o))}},t.prototype._alterSingle=function(e,r,i,n,a,o){e/=t._initAlpha;var s=this._network[r];s.subtract(e*(s.r-a),e*(s.g-n),e*(s.b-i),e*(s.a-o))},t.prototype._contest=function(e,r,i,n){for(var o=1020<<a,s=~(1<<31),h=s,f=-1,u=f,l=0;l<this._networkSize;l++){var c=this._network[l],d=this._distance.calculateNormalized(c,{r:i,g:r,b:e,a:n})*o;d<s&&(s=d,f=l);var p=d-(this._bias[l]>>t._initialBiasShift-a);p<h&&(h=p,u=l);var m=this._freq[l]>>t._betaShift;this._freq[l]-=m,this._bias[l]+=m<<t._gammaShift}return this._freq[f]+=t._beta,this._bias[f]-=t._betaGamma,u},t._prime1=499,t._prime2=491,t._prime3=487,t._prime4=503,t._minpicturebytes=t._prime4,t._nCycles=100,t._initialBiasShift=16,t._initialBias=1<<t._initialBiasShift,t._gammaShift=10,t._betaShift=10,t._beta=t._initialBias>>t._betaShift,t._betaGamma=t._initialBias<<t._gammaShift-t._betaShift,t._radiusBiasShift=6,t._radiusBias=1<<t._radiusBiasShift,t._radiusDecrease=30,t._alphaBiasShift=10,t._initAlpha=1<<t._alphaBiasShift,t._radBiasShift=8,t._radBias=1<<t._radBiasShift,t._alphaRadBiasShift=t._alphaBiasShift+t._radBiasShift,t._alphaRadBias=1<<t._alphaRadBiasShift,t}();e.NeuQuantFloat=s},function(t,e,r){"use strict";var i=r(22),n=r(24),a=r(27),o=r(6),s=function(t,e,r){this.index=t,this.color=e,this.distance=r},h=function(){function t(t,e,r){void 0===e&&(e=256),void 0===r&&(r=2),this._distance=t,this._colors=e,this._histogram=new a.ColorHistogram(r,e),this._initialDistance=.01,this._distanceIncrement=.005}return t.prototype.sample=function(t){this._histogram.sample(t)},t.prototype.quantize=function(){var t=this._histogram.getImportanceSortedColorsIDXI32();if(0===t.length)throw new Error("No colors in image");var e=this._buildPalette(t);return e.sort(),e},t.prototype._buildPalette=function(t){for(var e=new i.Palette,r=e.getPointContainer().getPointArray(),a=new Array(t.length),h=0;h<t.length;h++)r.push(n.Point.createByUint32(t[h])),a[h]=1;for(var f=r.length,u=[],l=f,c=this._initialDistance;l>this._colors;){for(u.length=0,h=0;h<f;h++)if(0!==a[h])for(var d=r[h],p=h+1;p<f;p++)if(0!==a[p]){var m=r[p],g=this._distance.calculateNormalized(d,m);g<c&&(u.push(new s(p,m,g)),a[p]=0,l--)}c+=l>3*this._colors?this._initialDistance:this._distanceIncrement}if(l<this._colors){o.stableSort(u,(function(t,e){return e.distance-t.distance}));for(var b=0;l<this._colors&&b<u.length;)a[u[b].index]=1,l++,b++}for(var _=r.length,y=_-1;y>=0;y--)0===a[y]&&(y!==_-1&&(r[y]=r[_-1]),--_);return r.length=_,e},t}();e.RGBQuant=h},function(t,e,r){"use strict";var i=r(28),n=r(6),a=function(){function t(e,r){this._method=e,this._minHueCols=r<<2,this._initColors=r<<2,this._hueStats=new i.HueStatistics(t._hueGroups,this._minHueCols),this._histogram=Object.create(null)}return t.prototype.sample=function(t){switch(this._method){case 1:this._colorStats1D(t);break;case 2:this._colorStats2D(t)}},t.prototype.getImportanceSortedColorsIDXI32=function(){var t,e=this,r=n.stableSort(Object.keys(this._histogram),(function(t,r){return e._histogram[r]-e._histogram[t]}));if(0===r.length)return[];switch(this._method){case 1:var i=Math.min(r.length,this._initColors),a=r[i-1],o=this._histogram[a];t=r.slice(0,i);for(var s=i,h=r.length;s<h&&this._histogram[r[s]]==o;)t.push(r[s++]);this._hueStats.injectIntoArray(t);break;case 2:t=r;break;default:throw new Error("Incorrect method")}return t.map((function(t){return+t}))},t.prototype._colorStats1D=function(t){for(var e=this._histogram,r=t.getPointArray(),i=r.length,n=0;n<i;n++){var a=r[n].uint32;this._hueStats.check(a),a in e?e[a]++:e[a]=1}},t.prototype._colorStats2D=function(e){var r=this,i=e.getWidth(),n=e.getHeight(),a=e.getPointArray(),o=t._boxSize[0],s=t._boxSize[1],h=o*s,f=this._makeBoxes(i,n,o,s),u=this._histogram;f.forEach((function(e){var n=Math.round(e.w*e.h/h)*t._boxPixels;n<2&&(n=2);var o={};r._iterateBox(e,i,(function(t){var e=a[t].uint32;r._hueStats.check(e),e in u?u[e]++:e in o?++o[e]>=n&&(u[e]=o[e]):o[e]=1}))})),this._hueStats.injectIntoDictionary(u)},t.prototype._iterateBox=function(t,e,r){var i=t,n=i.y*e+i.x,a=(i.y+i.h-1)*e+(i.x+i.w-1),o=e-i.w+1,s=0,h=n;do{r.call(this,h),h+=++s%i.w==0?o:1}while(h<=a)},t.prototype._makeBoxes=function(t,e,r,i){for(var n=t%r,a=e%i,o=t-n,s=e-a,h=[],f=0;f<e;f+=i)for(var u=0;u<t;u+=r)h.push({x:u,y:f,w:u==o?n:r,h:f==s?a:i});return h},t._boxSize=[64,64],t._boxPixels=2,t._hueGroups=10,t}();e.ColorHistogram=a},function(t,e,r){"use strict";var i=r(5),n=r(22),a=function(){this.num=0,this.cols=[]},o=function(){function t(t,e){this._numGroups=t,this._minCols=e,this._stats=[];for(var r=0;r<=t;r++)this._stats[r]=new a;this._groupsFull=0}return t.prototype.check=function(t){this._groupsFull==this._numGroups+1&&(this.check=function(){});var e=255&t,r=t>>>8&255,a=t>>>16&255,o=e==r&&r==a?0:1+n.hueGroup(i.rgb2hsl(e,r,a).h,this._numGroups),s=this._stats[o],h=this._minCols;s.num++,s.num>h||(s.num==h&&this._groupsFull++,s.num<=h&&this._stats[o].cols.push(t))},t.prototype.injectIntoDictionary=function(t){for(var e=0;e<=this._numGroups;e++)this._stats[e].num<=this._minCols&&this._stats[e].cols.forEach((function(e){t[e]?t[e]++:t[e]=1}))},t.prototype.injectIntoArray=function(t){for(var e=0;e<=this._numGroups;e++)this._stats[e].num<=this._minCols&&this._stats[e].cols.forEach((function(e){-1==t.indexOf(e)&&t.push(e)}))},t}();e.HueStatistics=o},function(t,e,r){"use strict";var i=r(22),n=r(24);function a(t){for(var e=[],r=0;r<t;r++)e[r]=0;return e}function o(t,e,r,i){for(var n=new Array(t),a=0;a<t;a++){n[a]=new Array(e);for(var o=0;o<e;o++){n[a][o]=new Array(r);for(var s=0;s<r;s++){n[a][o][s]=new Array(i);for(var h=0;h<i;h++)n[a][o][s][h]=0}}}return n}function s(t,e,r){for(var i=new Array(t),n=0;n<t;n++){i[n]=new Array(e);for(var a=0;a<e;a++){i[n][a]=new Array(r);for(var o=0;o<r;o++)i[n][a][o]=0}}return i}function h(t,e,r,i,n){for(var a=0;a<e;a++){t[a]=[];for(var o=0;o<r;o++){t[a][o]=[];for(var s=0;s<i;s++)t[a][o][s]=n}}}function f(t,e,r){for(var i=0;i<e;i++)t[i]=r}var u=function(){};e.WuColorCube=u;var l=function(){function t(t,e,r){void 0===e&&(e=256),void 0===r&&(r=5),this._distance=t,this._setQuality(r),this._initialize(e)}return t.prototype.sample=function(t){for(var e=t.getPointArray(),r=0,i=e.length;r<i;r++)this._addColor(e[r]);this._pixels=this._pixels.concat(e)},t.prototype.quantize=function(){this._preparePalette();for(var t=new i.Palette,e=0;e<this._colors;e++)if(this._sums[e]>0){var r=this._sums[e],a=this._reds[e]/r,o=this._greens[e]/r,s=this._blues[e]/r,h=this._alphas[e]/r,f=n.Point.createByRGBA(0|a,0|o,0|s,0|h);t.add(f)}return t.sort(),t},t.prototype._preparePalette=function(){this._calculateMoments();for(var e=0,r=a(this._colors),i=1;i<this._colors;++i){this._cut(this._cubes[e],this._cubes[i])?(r[e]=this._cubes[e].volume>1?this._calculateVariance(this._cubes[e]):0,r[i]=this._cubes[i].volume>1?this._calculateVariance(this._cubes[i]):0):(r[e]=0,i--),e=0;for(var n=r[0],o=1;o<=i;++o)r[o]>n&&(n=r[o],e=o);if(n<=0){this._colors=i+1;break}}for(var s=[],h=[],f=[],u=[],l=0;l<this._colors;++l){var c=t._volume(this._cubes[l],this._weights);c>0?(s[l]=t._volume(this._cubes[l],this._momentsRed)/c|0,h[l]=t._volume(this._cubes[l],this._momentsGreen)/c|0,f[l]=t._volume(this._cubes[l],this._momentsBlue)/c|0,u[l]=t._volume(this._cubes[l],this._momentsAlpha)/c|0):(s[l]=0,h[l]=0,f[l]=0,u[l]=0)}this._reds=a(this._colors+1),this._greens=a(this._colors+1),this._blues=a(this._colors+1),this._alphas=a(this._colors+1),this._sums=a(this._colors+1),o=0;for(var d=this._pixels.length;o<d;o++){for(var p=this._pixels[o],m=-1,g=Number.MAX_VALUE,b=0;b<this._colors;b++){var _=s[b],y=h[b],w=f[b],v=u[b],x=this._distance.calculateRaw(_,y,w,v,p.r,p.g,p.b,p.a);x<g&&(g=x,m=b)}this._reds[m]+=p.r,this._greens[m]+=p.g,this._blues[m]+=p.b,this._alphas[m]+=p.a,this._sums[m]++}},t.prototype._addColor=function(t){var e=8-this._significantBitsPerChannel,r=1+(t.r>>e),i=1+(t.g>>e),n=1+(t.b>>e),a=1+(t.a>>e);this._weights[a][r][i][n]++,this._momentsRed[a][r][i][n]+=t.r,this._momentsGreen[a][r][i][n]+=t.g,this._momentsBlue[a][r][i][n]+=t.b,this._momentsAlpha[a][r][i][n]+=t.a,this._moments[a][r][i][n]+=this._table[t.r]+this._table[t.g]+this._table[t.b]+this._table[t.a]},t.prototype._calculateMoments=function(){for(var t=[],e=[],r=[],i=[],n=[],a=[],o=s(this._sideSize,this._sideSize,this._sideSize),u=s(this._sideSize,this._sideSize,this._sideSize),l=s(this._sideSize,this._sideSize,this._sideSize),c=s(this._sideSize,this._sideSize,this._sideSize),d=s(this._sideSize,this._sideSize,this._sideSize),p=s(this._sideSize,this._sideSize,this._sideSize),m=1;m<=this._alphaMaxSideIndex;++m){h(o,this._sideSize,this._sideSize,this._sideSize,0),h(u,this._sideSize,this._sideSize,this._sideSize,0),h(l,this._sideSize,this._sideSize,this._sideSize,0),h(c,this._sideSize,this._sideSize,this._sideSize,0),h(d,this._sideSize,this._sideSize,this._sideSize,0),h(p,this._sideSize,this._sideSize,this._sideSize,0);for(var g=1;g<=this._maxSideIndex;++g){f(t,this._sideSize,0),f(e,this._sideSize,0),f(r,this._sideSize,0),f(i,this._sideSize,0),f(n,this._sideSize,0),f(a,this._sideSize,0);for(var b=1;b<=this._maxSideIndex;++b)for(var _=0,y=0,w=0,v=0,x=0,E=0,k=1;k<=this._maxSideIndex;++k)_+=this._weights[m][g][b][k],y+=this._momentsRed[m][g][b][k],w+=this._momentsGreen[m][g][b][k],v+=this._momentsBlue[m][g][b][k],x+=this._momentsAlpha[m][g][b][k],E+=this._moments[m][g][b][k],t[k]+=_,e[k]+=y,r[k]+=w,i[k]+=v,n[k]+=x,a[k]+=E,o[g][b][k]=o[g-1][b][k]+t[k],u[g][b][k]=u[g-1][b][k]+e[k],l[g][b][k]=l[g-1][b][k]+r[k],c[g][b][k]=c[g-1][b][k]+i[k],d[g][b][k]=d[g-1][b][k]+n[k],p[g][b][k]=p[g-1][b][k]+a[k],this._weights[m][g][b][k]=this._weights[m-1][g][b][k]+o[g][b][k],this._momentsRed[m][g][b][k]=this._momentsRed[m-1][g][b][k]+u[g][b][k],this._momentsGreen[m][g][b][k]=this._momentsGreen[m-1][g][b][k]+l[g][b][k],this._momentsBlue[m][g][b][k]=this._momentsBlue[m-1][g][b][k]+c[g][b][k],this._momentsAlpha[m][g][b][k]=this._momentsAlpha[m-1][g][b][k]+d[g][b][k],this._moments[m][g][b][k]=this._moments[m-1][g][b][k]+p[g][b][k]}}},t._volumeFloat=function(t,e){return e[t.alphaMaximum][t.redMaximum][t.greenMaximum][t.blueMaximum]-e[t.alphaMaximum][t.redMaximum][t.greenMinimum][t.blueMaximum]-e[t.alphaMaximum][t.redMinimum][t.greenMaximum][t.blueMaximum]+e[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMaximum]-e[t.alphaMinimum][t.redMaximum][t.greenMaximum][t.blueMaximum]+e[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMaximum]+e[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMaximum]-e[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMaximum]-(e[t.alphaMaximum][t.redMaximum][t.greenMaximum][t.blueMinimum]-e[t.alphaMinimum][t.redMaximum][t.greenMaximum][t.blueMinimum]-e[t.alphaMaximum][t.redMaximum][t.greenMinimum][t.blueMinimum]+e[t.alphaMinimum][t.redMaximum][t.greenMinimum][t.blueMinimum]-e[t.alphaMaximum][t.redMinimum][t.greenMaximum][t.blueMinimum]+e[t.alphaMinimum][t.redMinimum][t.greenMaximum][t.blueMinimum]+e[t.alphaMaximum][t.redMinimum][t.greenMinimum][t.blueMinimum]-e[t.alphaMinimum][t.redMinimum][t.greenMinimum][t.blueMinimum])},t._volume=function(e,r){return 0|t._volumeFloat(e,r)},t._top=function(e,r,i,n){var a;switch(r){case t.alpha:a=n[i][e.redMaximum][e.greenMaximum][e.blueMaximum]-n[i][e.redMaximum][e.greenMinimum][e.blueMaximum]-n[i][e.redMinimum][e.greenMaximum][e.blueMaximum]+n[i][e.redMinimum][e.greenMinimum][e.blueMaximum]-(n[i][e.redMaximum][e.greenMaximum][e.blueMinimum]-n[i][e.redMaximum][e.greenMinimum][e.blueMinimum]-n[i][e.redMinimum][e.greenMaximum][e.blueMinimum]+n[i][e.redMinimum][e.greenMinimum][e.blueMinimum]);break;case t.red:a=n[e.alphaMaximum][i][e.greenMaximum][e.blueMaximum]-n[e.alphaMaximum][i][e.greenMinimum][e.blueMaximum]-n[e.alphaMinimum][i][e.greenMaximum][e.blueMaximum]+n[e.alphaMinimum][i][e.greenMinimum][e.blueMaximum]-(n[e.alphaMaximum][i][e.greenMaximum][e.blueMinimum]-n[e.alphaMaximum][i][e.greenMinimum][e.blueMinimum]-n[e.alphaMinimum][i][e.greenMaximum][e.blueMinimum]+n[e.alphaMinimum][i][e.greenMinimum][e.blueMinimum]);break;case t.green:a=n[e.alphaMaximum][e.redMaximum][i][e.blueMaximum]-n[e.alphaMaximum][e.redMinimum][i][e.blueMaximum]-n[e.alphaMinimum][e.redMaximum][i][e.blueMaximum]+n[e.alphaMinimum][e.redMinimum][i][e.blueMaximum]-(n[e.alphaMaximum][e.redMaximum][i][e.blueMinimum]-n[e.alphaMaximum][e.redMinimum][i][e.blueMinimum]-n[e.alphaMinimum][e.redMaximum][i][e.blueMinimum]+n[e.alphaMinimum][e.redMinimum][i][e.blueMinimum]);break;case t.blue:a=n[e.alphaMaximum][e.redMaximum][e.greenMaximum][i]-n[e.alphaMaximum][e.redMaximum][e.greenMinimum][i]-n[e.alphaMaximum][e.redMinimum][e.greenMaximum][i]+n[e.alphaMaximum][e.redMinimum][e.greenMinimum][i]-(n[e.alphaMinimum][e.redMaximum][e.greenMaximum][i]-n[e.alphaMinimum][e.redMaximum][e.greenMinimum][i]-n[e.alphaMinimum][e.redMinimum][e.greenMaximum][i]+n[e.alphaMinimum][e.redMinimum][e.greenMinimum][i]);break;default:throw new Error("impossible")}return 0|a},t._bottom=function(e,r,i){switch(r){case t.alpha:return-i[e.alphaMinimum][e.redMaximum][e.greenMaximum][e.blueMaximum]+i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMaximum]+i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMaximum]-i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMaximum]-(-i[e.alphaMinimum][e.redMaximum][e.greenMaximum][e.blueMinimum]+i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMinimum]+i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMinimum]-i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);case t.red:return-i[e.alphaMaximum][e.redMinimum][e.greenMaximum][e.blueMaximum]+i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMaximum]+i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMaximum]-i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMaximum]-(-i[e.alphaMaximum][e.redMinimum][e.greenMaximum][e.blueMinimum]+i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMinimum]+i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMinimum]-i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);case t.green:return-i[e.alphaMaximum][e.redMaximum][e.greenMinimum][e.blueMaximum]+i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMaximum]+i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMaximum]-i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMaximum]-(-i[e.alphaMaximum][e.redMaximum][e.greenMinimum][e.blueMinimum]+i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMinimum]+i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMinimum]-i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);case t.blue:return-i[e.alphaMaximum][e.redMaximum][e.greenMaximum][e.blueMinimum]+i[e.alphaMaximum][e.redMaximum][e.greenMinimum][e.blueMinimum]+i[e.alphaMaximum][e.redMinimum][e.greenMaximum][e.blueMinimum]-i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMinimum]-(-i[e.alphaMinimum][e.redMaximum][e.greenMaximum][e.blueMinimum]+i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMinimum]+i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMinimum]-i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);default:return 0}},t.prototype._calculateVariance=function(e){var r=t._volume(e,this._momentsRed),i=t._volume(e,this._momentsGreen),n=t._volume(e,this._momentsBlue),a=t._volume(e,this._momentsAlpha);return t._volumeFloat(e,this._moments)-(r*r+i*i+n*n+a*a)/t._volume(e,this._weights)},t.prototype._maximize=function(e,r,i,n,a,o,s,h,f){for(var u=0|t._bottom(e,r,this._momentsRed),l=0|t._bottom(e,r,this._momentsGreen),c=0|t._bottom(e,r,this._momentsBlue),d=0|t._bottom(e,r,this._momentsAlpha),p=0|t._bottom(e,r,this._weights),m=0,g=-1,b=i;b<n;++b){var _=u+t._top(e,r,b,this._momentsRed),y=l+t._top(e,r,b,this._momentsGreen),w=c+t._top(e,r,b,this._momentsBlue),v=d+t._top(e,r,b,this._momentsAlpha),x=p+t._top(e,r,b,this._weights);if(0!=x){var E=_*_+y*y+w*w+v*v,k=E/x;_=a-_,y=o-y,w=s-w,v=h-v,0!=(x=f-x)&&(k+=(E=_*_+y*y+w*w+v*v)/x)>m&&(m=k,g=b)}}return{max:m,position:g}},t.prototype._cut=function(e,r){var i,n=t._volume(e,this._momentsRed),a=t._volume(e,this._momentsGreen),o=t._volume(e,this._momentsBlue),s=t._volume(e,this._momentsAlpha),h=t._volume(e,this._weights),f=this._maximize(e,t.red,e.redMinimum+1,e.redMaximum,n,a,o,s,h),u=this._maximize(e,t.green,e.greenMinimum+1,e.greenMaximum,n,a,o,s,h),l=this._maximize(e,t.blue,e.blueMinimum+1,e.blueMaximum,n,a,o,s,h),c=this._maximize(e,t.alpha,e.alphaMinimum+1,e.alphaMaximum,n,a,o,s,h);if(c.max>=f.max&&c.max>=u.max&&c.max>=l.max){if(i=t.alpha,c.position<0)return!1}else i=f.max>=c.max&&f.max>=u.max&&f.max>=l.max?t.red:u.max>=c.max&&u.max>=f.max&&u.max>=l.max?t.green:t.blue;switch(r.redMaximum=e.redMaximum,r.greenMaximum=e.greenMaximum,r.blueMaximum=e.blueMaximum,r.alphaMaximum=e.alphaMaximum,i){case t.red:r.redMinimum=e.redMaximum=f.position,r.greenMinimum=e.greenMinimum,r.blueMinimum=e.blueMinimum,r.alphaMinimum=e.alphaMinimum;break;case t.green:r.greenMinimum=e.greenMaximum=u.position,r.redMinimum=e.redMinimum,r.blueMinimum=e.blueMinimum,r.alphaMinimum=e.alphaMinimum;break;case t.blue:r.blueMinimum=e.blueMaximum=l.position,r.redMinimum=e.redMinimum,r.greenMinimum=e.greenMinimum,r.alphaMinimum=e.alphaMinimum;break;case t.alpha:r.alphaMinimum=e.alphaMaximum=c.position,r.blueMinimum=e.blueMinimum,r.redMinimum=e.redMinimum,r.greenMinimum=e.greenMinimum}return e.volume=(e.redMaximum-e.redMinimum)*(e.greenMaximum-e.greenMinimum)*(e.blueMaximum-e.blueMinimum)*(e.alphaMaximum-e.alphaMinimum),r.volume=(r.redMaximum-r.redMinimum)*(r.greenMaximum-r.greenMinimum)*(r.blueMaximum-r.blueMinimum)*(r.alphaMaximum-r.alphaMinimum),!0},t.prototype._initialize=function(t){this._colors=t,this._cubes=[];for(var e=0;e<t;e++)this._cubes[e]=new u;this._cubes[0].redMinimum=0,this._cubes[0].greenMinimum=0,this._cubes[0].blueMinimum=0,this._cubes[0].alphaMinimum=0,this._cubes[0].redMaximum=this._maxSideIndex,this._cubes[0].greenMaximum=this._maxSideIndex,this._cubes[0].blueMaximum=this._maxSideIndex,this._cubes[0].alphaMaximum=this._alphaMaxSideIndex,this._weights=o(this._alphaSideSize,this._sideSize,this._sideSize,this._sideSize),this._momentsRed=o(this._alphaSideSize,this._sideSize,this._sideSize,this._sideSize),this._momentsGreen=o(this._alphaSideSize,this._sideSize,this._sideSize,this._sideSize),this._momentsBlue=o(this._alphaSideSize,this._sideSize,this._sideSize,this._sideSize),this._momentsAlpha=o(this._alphaSideSize,this._sideSize,this._sideSize,this._sideSize),this._moments=o(this._alphaSideSize,this._sideSize,this._sideSize,this._sideSize),this._table=[];for(var r=0;r<256;++r)this._table[r]=r*r;this._pixels=[]},t.prototype._setQuality=function(t){void 0===t&&(t=5),this._significantBitsPerChannel=t,this._maxSideIndex=1<<this._significantBitsPerChannel,this._alphaMaxSideIndex=this._maxSideIndex,this._sideSize=this._maxSideIndex+1,this._alphaSideSize=this._alphaMaxSideIndex+1},t.alpha=3,t.red=2,t.green=1,t.blue=0,t}();e.WuQuant=l},function(t,e,r){"use strict";var i=r(31);e.NearestColor=i.NearestColor;var n=r(32);e.ErrorDiffusionArray=n.ErrorDiffusionArray,e.ErrorDiffusionArrayKernel=n.ErrorDiffusionArrayKernel;var a=r(33);e.ErrorDiffusionRiemersma=a.ErrorDiffusionRiemersma},function(t,e){"use strict";var r=function(){function t(t){this._distance=t}return t.prototype.quantize=function(t,e){for(var r=t.getPointArray(),i=t.getWidth(),n=t.getHeight(),a=0;a<n;a++)for(var o=0,s=a*i;o<i;o++,s++){var h=r[s];h.from(e.getNearestColor(this._distance,h))}return t},t}();e.NearestColor=r},function(t,e,r){"use strict";var i=r(24),n=r(6);!function(t){t[t.FloydSteinberg=0]="FloydSteinberg",t[t.FalseFloydSteinberg=1]="FalseFloydSteinberg",t[t.Stucki=2]="Stucki",t[t.Atkinson=3]="Atkinson",t[t.Jarvis=4]="Jarvis",t[t.Burkes=5]="Burkes",t[t.Sierra=6]="Sierra",t[t.TwoSierra=7]="TwoSierra",t[t.SierraLite=8]="SierraLite"}(e.ErrorDiffusionArrayKernel||(e.ErrorDiffusionArrayKernel={}));var a=e.ErrorDiffusionArrayKernel,o=function(){function t(t,e,r,i,n){void 0===r&&(r=!0),void 0===i&&(i=0),void 0===n&&(n=!1),this._setKernel(e),this._distance=t,this._minColorDistance=i,this._serpentine=r,this._calculateErrorLikeGIMP=n}return t.prototype.quantize=function(t,e){for(var r=t.getPointArray(),a=new i.Point,o=t.getWidth(),s=t.getHeight(),h=[],f=1,u=1,l=0;l<this._kernel.length;l++){var c=this._kernel[l][2]+1;u<c&&(u=c)}for(l=0;l<u;l++)this._fillErrorLine(h[l]=[],o);for(var d=0;d<s;d++){this._serpentine&&(f*=-1);var p=d*o,m=1==f?0:o-1,g=1==f?o:-1;this._fillErrorLine(h[0],o),h.push(h.shift());for(var b=h[0],_=m,y=p+m;_!==g;_+=f,y+=f){var w=r[y],v=b[_];a.from(w);var x=i.Point.createByRGBA(n.inRange0to255Rounded(w.r+v[0]),n.inRange0to255Rounded(w.g+v[1]),n.inRange0to255Rounded(w.b+v[2]),n.inRange0to255Rounded(w.a+v[3])),E=e.getNearestColor(this._distance,x);if(w.from(E),!(this._minColorDistance&&this._distance.calculateNormalized(w,E)<this._minColorDistance)){var k=void 0,S=void 0,M=void 0,A=void 0;this._calculateErrorLikeGIMP?(k=x.r-E.r,S=x.g-E.g,M=x.b-E.b,A=x.a-E.a):(k=a.r-E.r,S=a.g-E.g,M=a.b-E.b,A=a.a-E.a);var I=1==f?0:this._kernel.length-1,T=1==f?this._kernel.length:-1;for(l=I;l!==T;l+=f){var B=this._kernel[l][1]*f,R=this._kernel[l][2];if(B+_>=0&&B+_<o&&R+d>=0&&R+d<s){var P=this._kernel[l][0],O=h[R][B+_];O[0]=O[0]+k*P,O[1]=O[1]+S*P,O[2]=O[2]+M*P,O[3]=O[3]+A*P}}}}}return t},t.prototype._fillErrorLine=function(t,e){t.length>e&&(t.length=e);for(var r=t.length,i=0;i<r;i++){var n=t[i];n[0]=n[1]=n[2]=n[3]=0}for(i=r;i<e;i++)t[i]=[0,0,0,0]},t.prototype._setKernel=function(t){switch(t){case a.FloydSteinberg:this._kernel=[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]];break;case a.FalseFloydSteinberg:this._kernel=[[3/8,1,0],[3/8,0,1],[2/8,1,1]];break;case a.Stucki:this._kernel=[[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]];break;case a.Atkinson:this._kernel=[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]];break;case a.Jarvis:this._kernel=[[7/48,1,0],[5/48,2,0],[3/48,-2,1],[5/48,-1,1],[7/48,0,1],[5/48,1,1],[3/48,2,1],[1/48,-2,2],[3/48,-1,2],[5/48,0,2],[3/48,1,2],[1/48,2,2]];break;case a.Burkes:this._kernel=[[.25,1,0],[4/32,2,0],[2/32,-2,1],[4/32,-1,1],[.25,0,1],[4/32,1,1],[2/32,2,1]];break;case a.Sierra:this._kernel=[[5/32,1,0],[3/32,2,0],[2/32,-2,1],[4/32,-1,1],[5/32,0,1],[4/32,1,1],[2/32,2,1],[2/32,-1,2],[3/32,0,2],[2/32,1,2]];break;case a.TwoSierra:this._kernel=[[.25,1,0],[3/16,2,0],[1/16,-2,1],[2/16,-1,1],[3/16,0,1],[2/16,1,1],[1/16,2,1]];break;case a.SierraLite:this._kernel=[[.5,1,0],[1/4,-1,1],[1/4,0,1]];break;default:throw new Error("ErrorDiffusionArray: unknown kernel = "+t)}},t}();e.ErrorDiffusionArray=o},function(t,e,r){"use strict";var i=r(34),n=r(24),a=r(6),o=function(){function t(t,e,r){void 0===e&&(e=16),void 0===r&&(r=1),this._distance=t,this._errorPropagation=r,this._errorQueueSize=e,this._max=this._errorQueueSize,this._createWeights()}return t.prototype.quantize=function(t,e){for(var r=this,o=new i.HilbertCurveBase,s=t.getPointArray(),h=t.getWidth(),f=t.getHeight(),u=[],l=0,c=0;c<this._errorQueueSize;c++)u[c]={r:0,g:0,b:0,a:0};return o.walk(h,f,(function(t,i){for(var o=s[t+i*h],f=o.r,c=o.g,d=o.b,p=o.a,m=0;m<r._errorQueueSize;m++){var g=r._weights[m],b=u[(m+l)%r._errorQueueSize];f+=b.r*g,c+=b.g*g,d+=b.b*g,p+=b.a*g}var _=n.Point.createByRGBA(a.inRange0to255Rounded(f),a.inRange0to255Rounded(c),a.inRange0to255Rounded(d),a.inRange0to255Rounded(p)),y=e.getNearestColor(r._distance,_),w=((l=(l+1)%r._errorQueueSize)+r._errorQueueSize-1)%r._errorQueueSize;u[w].r=o.r-y.r,u[w].g=o.g-y.g,u[w].b=o.b-y.b,u[w].a=o.a-y.a,o.from(y)})),t},t.prototype._createWeights=function(){this._weights=[];for(var t=Math.exp(Math.log(this._max)/(this._errorQueueSize-1)),e=0,r=1;e<this._errorQueueSize;e++)this._weights[e]=(r+.5|0)/this._max*this._errorPropagation,r*=t},t}();e.ErrorDiffusionRiemersma=o},function(t,e){"use strict";var r;!function(t){t[t.NONE=0]="NONE",t[t.UP=1]="UP",t[t.LEFT=2]="LEFT",t[t.RIGHT=3]="RIGHT",t[t.DOWN=4]="DOWN"}(r||(r={}));var i=function(){function t(){}return t.prototype.walk=function(t,e,i){this._x=0,this._y=0,this._d=0,this._width=t,this._height=e,this._callback=i;var n=Math.max(t,e);this._level=Math.log(n)/Math.log(2)+1|0,this._walkHilbert(r.UP),this._visit(r.NONE)},t.prototype._walkHilbert=function(t){if(!(this._level<1)){switch(this._level--,t){case r.LEFT:this._walkHilbert(r.UP),this._visit(r.RIGHT),this._walkHilbert(r.LEFT),this._visit(r.DOWN),this._walkHilbert(r.LEFT),this._visit(r.LEFT),this._walkHilbert(r.DOWN);break;case r.RIGHT:this._walkHilbert(r.DOWN),this._visit(r.LEFT),this._walkHilbert(r.RIGHT),this._visit(r.UP),this._walkHilbert(r.RIGHT),this._visit(r.RIGHT),this._walkHilbert(r.UP);break;case r.UP:this._walkHilbert(r.LEFT),this._visit(r.DOWN),this._walkHilbert(r.UP),this._visit(r.RIGHT),this._walkHilbert(r.UP),this._visit(r.UP),this._walkHilbert(r.RIGHT);break;case r.DOWN:this._walkHilbert(r.RIGHT),this._visit(r.UP),this._walkHilbert(r.DOWN),this._visit(r.LEFT),this._walkHilbert(r.DOWN),this._visit(r.DOWN),this._walkHilbert(r.LEFT)}this._level++}},t.prototype._visit=function(t){switch(this._x>=0&&this._x<this._width&&this._y>=0&&this._y<this._height&&(this._callback(this._x,this._y,this._d),this._d++),t){case r.LEFT:this._x--;break;case r.RIGHT:this._x++;break;case r.UP:this._y--;break;case r.DOWN:this._y++}},t}();e.HilbertCurveBase=i},function(t,e,r){"use strict";var i=r(36);e.SSIM=i.SSIM},function(t,e,r){"use strict";var i=r(2),n=function(){function t(){}return t.prototype.compare=function(t,e){if(t.getHeight()!==e.getHeight()||t.getWidth()!==e.getWidth())throw new Error("Images have different sizes!");var r=Math.pow(.01*255,2),i=Math.pow(.03*255,2),n=0,a=0;return this._iterate(t,e,(function(t,e,o,s){for(var h=0,f=0,u=0,l=0;l<t.length;l++)f+=Math.pow(t[l]-o,2),u+=Math.pow(e[l]-s,2),h+=(t[l]-o)*(e[l]-s);var c=t.length-1;f/=c,u/=c;var d=(2*o*s+r)*(2*(h/=c)+i),p=(Math.pow(o,2)+Math.pow(s,2)+r)*(f+u+i);a+=d/p,n++})),a/n},t.prototype._iterate=function(t,e,r){for(var i=t.getWidth(),n=t.getHeight(),a=0;a<n;a+=8)for(var o=0;o<i;o+=8){var s=Math.min(8,i-o),h=Math.min(8,n-a),f=this._calculateLumaValuesForWindow(t,o,a,s,h),u=this._calculateLumaValuesForWindow(e,o,a,s,h);r(f,u,this._calculateAverageLuma(f),this._calculateAverageLuma(u))}},t.prototype._calculateLumaValuesForWindow=function(t,e,r,n,a){for(var o=t.getPointArray(),s=[],h=0,f=r;f<r+a;f++)for(var u=f*t.getWidth(),l=e;l<e+n;l++){var c=o[u+l];s[h]=c.r*i.Y.RED+c.g*i.Y.GREEN+c.b*i.Y.BLUE,h++}return s},t.prototype._calculateAverageLuma=function(t){for(var e=0,r=0;r<t.length;r++)e+=t[r];return e/t.length},t}();e.SSIM=n},function(t,e,r){"use strict";var i=r(6);e.arithmetic=i;var n=r(28);e.HueStatistics=n.HueStatistics;var a=r(22);e.Palette=a.Palette;var o=r(24);e.Point=o.Point;var s=r(23);e.PointContainer=s.PointContainer}])},t.exports=e()},9680:t=>{"use strict";var e=Function.prototype.toString,r=/^\s*class\b/,i=function(t){try{var i=e.call(t);return r.test(i)}catch(t){return!1}},n=Object.prototype.toString,a="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if("function"==typeof t&&!t.prototype)return!0;if(a)return function(t){try{return!i(t)&&(e.call(t),!0)}catch(t){return!1}}(t);if(i(t))return!1;var r=n.call(t);return"[object Function]"===r||"[object GeneratorFunction]"===r}},9748:t=>{t.exports=function(t){var r=e.call(t);return"[object Function]"===r||"function"==typeof t&&"[object RegExp]"!==r||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)};var e=Object.prototype.toString},9307:(t,e,r)=>{r(6168),t.exports=self.fetch.bind(self)},2691:(t,e,r)=>{var i=r(706),n=r(770);t.exports={encode:i,decode:n}},770:(t,e,r)=>{var i=r(8834).lW,n=function(){"use strict";var t=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),e=4017,r=799,i=3406,n=2276,a=1567,o=3784,s=5793,h=2896;function f(){}function u(t,e){for(var r,i,n=0,a=[],o=16;o>0&&!t[o-1];)o--;a.push({children:[],index:0});var s,h=a[0];for(r=0;r<o;r++){for(i=0;i<t[r];i++){for((h=a.pop()).children[h.index]=e[n];h.index>0;){if(0===a.length)throw new Error("Could not recreate Huffman Table");h=a.pop()}for(h.index++,a.push(h);a.length<=r;)a.push(s={children:[],index:0}),h.children[h.index]=s.children,h=s;n++}r+1<o&&(a.push(s={children:[],index:0}),h.children[h.index]=s.children,h=s)}return a[0].children}function l(e,r,i,n,a,o,s,h,f,u){i.precision,i.samplesPerLine,i.scanLines;var l=i.mcusPerLine,c=i.progressive,d=(i.maxH,i.maxV,r),p=0,m=0;function g(){if(m>0)return m--,p>>m&1;if(255==(p=e[r++])){var t=e[r++];if(t)throw new Error("unexpected marker: "+(p<<8|t).toString(16))}return m=7,p>>>7}function b(t){for(var e,r=t;null!==(e=g());){if("number"==typeof(r=r[e]))return r;if("object"!=typeof r)throw new Error("invalid huffman sequence")}return null}function _(t){for(var e=0;t>0;){var r=g();if(null===r)return;e=e<<1|r,t--}return e}function y(t){var e=_(t);return e>=1<<t-1?e:e+(-1<<t)+1}var w,v=0,x=0;function E(t,e,r,i,n){var a=r%l,o=(r/l|0)*t.v+i,s=a*t.h+n;void 0===t.blocks[o]&&u.tolerantDecoding||e(t,t.blocks[o][s])}function k(t,e,r){var i=r/t.blocksPerLine|0,n=r%t.blocksPerLine;void 0===t.blocks[i]&&u.tolerantDecoding||e(t,t.blocks[i][n])}var S,M,A,I,T,B,R=n.length;B=c?0===o?0===h?function(t,e){var r=b(t.huffmanTableDC),i=0===r?0:y(r)<<f;e[0]=t.pred+=i}:function(t,e){e[0]|=g()<<f}:0===h?function(e,r){if(v>0)v--;else for(var i=o,n=s;i<=n;){var a=b(e.huffmanTableAC),h=15&a,u=a>>4;if(0!==h)r[t[i+=u]]=y(h)*(1<<f),i++;else{if(u<15){v=_(u)+(1<<u)-1;break}i+=16}}}:function(e,r){for(var i=o,n=s,a=0;i<=n;){var h=t[i],u=r[h]<0?-1:1;switch(x){case 0:var l=b(e.huffmanTableAC),c=15&l;if(a=l>>4,0===c)a<15?(v=_(a)+(1<<a),x=4):(a=16,x=1);else{if(1!==c)throw new Error("invalid ACn encoding");w=y(c),x=a?2:3}continue;case 1:case 2:r[h]?r[h]+=(g()<<f)*u:0==--a&&(x=2==x?3:0);break;case 3:r[h]?r[h]+=(g()<<f)*u:(r[h]=w<<f,x=0);break;case 4:r[h]&&(r[h]+=(g()<<f)*u)}i++}4===x&&0==--v&&(x=0)}:function(e,r){var i=b(e.huffmanTableDC),n=0===i?0:y(i);r[0]=e.pred+=n;for(var a=1;a<64;){var o=b(e.huffmanTableAC),s=15&o,h=o>>4;if(0!==s)r[t[a+=h]]=y(s),a++;else{if(h<15)break;a+=16}}};var P,O,L,C,U=0;for(O=1==R?n[0].blocksPerLine*n[0].blocksPerColumn:l*i.mcusPerColumn,a||(a=O);U<O;){for(M=0;M<R;M++)n[M].pred=0;if(v=0,1==R)for(S=n[0],T=0;T<a;T++)k(S,B,U),U++;else for(T=0;T<a;T++){for(M=0;M<R;M++)for(L=(S=n[M]).h,C=S.v,A=0;A<C;A++)for(I=0;I<L;I++)E(S,B,U,A,I);if(++U===O)break}if(U===O)do{if(255===e[r]&&0!==e[r+1])break;r+=1}while(r<e.length-2);if(m=0,(P=e[r]<<8|e[r+1])<65280)throw new Error("marker was not found");if(!(P>=65488&&P<=65495))break;r+=2}return r-d}function c(t,f){var u,l,c=[],d=f.blocksPerLine,p=f.blocksPerColumn,m=d<<3,b=new Int32Array(64),_=new Uint8Array(64);function y(t,u,l){var c,d,p,m,g,b,_,y,w,v,x=f.quantizationTable,E=l;for(v=0;v<64;v++)E[v]=t[v]*x[v];for(v=0;v<8;++v){var k=8*v;0!=E[1+k]||0!=E[2+k]||0!=E[3+k]||0!=E[4+k]||0!=E[5+k]||0!=E[6+k]||0!=E[7+k]?(c=s*E[0+k]+128>>8,d=s*E[4+k]+128>>8,p=E[2+k],m=E[6+k],g=h*(E[1+k]-E[7+k])+128>>8,y=h*(E[1+k]+E[7+k])+128>>8,b=E[3+k]<<4,_=E[5+k]<<4,w=c-d+1>>1,c=c+d+1>>1,d=w,w=p*o+m*a+128>>8,p=p*a-m*o+128>>8,m=w,w=g-_+1>>1,g=g+_+1>>1,_=w,w=y+b+1>>1,b=y-b+1>>1,y=w,w=c-m+1>>1,c=c+m+1>>1,m=w,w=d-p+1>>1,d=d+p+1>>1,p=w,w=g*n+y*i+2048>>12,g=g*i-y*n+2048>>12,y=w,w=b*r+_*e+2048>>12,b=b*e-_*r+2048>>12,_=w,E[0+k]=c+y,E[7+k]=c-y,E[1+k]=d+_,E[6+k]=d-_,E[2+k]=p+b,E[5+k]=p-b,E[3+k]=m+g,E[4+k]=m-g):(w=s*E[0+k]+512>>10,E[0+k]=w,E[1+k]=w,E[2+k]=w,E[3+k]=w,E[4+k]=w,E[5+k]=w,E[6+k]=w,E[7+k]=w)}for(v=0;v<8;++v){var S=v;0!=E[8+S]||0!=E[16+S]||0!=E[24+S]||0!=E[32+S]||0!=E[40+S]||0!=E[48+S]||0!=E[56+S]?(c=s*E[0+S]+2048>>12,d=s*E[32+S]+2048>>12,p=E[16+S],m=E[48+S],g=h*(E[8+S]-E[56+S])+2048>>12,y=h*(E[8+S]+E[56+S])+2048>>12,b=E[24+S],_=E[40+S],w=c-d+1>>1,c=c+d+1>>1,d=w,w=p*o+m*a+2048>>12,p=p*a-m*o+2048>>12,m=w,w=g-_+1>>1,g=g+_+1>>1,_=w,w=y+b+1>>1,b=y-b+1>>1,y=w,w=c-m+1>>1,c=c+m+1>>1,m=w,w=d-p+1>>1,d=d+p+1>>1,p=w,w=g*n+y*i+2048>>12,g=g*i-y*n+2048>>12,y=w,w=b*r+_*e+2048>>12,b=b*e-_*r+2048>>12,_=w,E[0+S]=c+y,E[56+S]=c-y,E[8+S]=d+_,E[48+S]=d-_,E[16+S]=p+b,E[40+S]=p-b,E[24+S]=m+g,E[32+S]=m-g):(w=s*l[v+0]+8192>>14,E[0+S]=w,E[8+S]=w,E[16+S]=w,E[24+S]=w,E[32+S]=w,E[40+S]=w,E[48+S]=w,E[56+S]=w)}for(v=0;v<64;++v){var M=128+(E[v]+8>>4);u[v]=M<0?0:M>255?255:M}}g(m*p*8);for(var w=0;w<p;w++){var v=w<<3;for(u=0;u<8;u++)c.push(new Uint8Array(m));for(var x=0;x<d;x++){y(f.blocks[w][x],_,b);var E=0,k=x<<3;for(l=0;l<8;l++){var S=c[v+l];for(u=0;u<8;u++)S[k+u]=_[E++]}}}return c}function d(t){return t<0?0:t>255?255:t}f.prototype={load:function(t){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=function(){var t=new Uint8Array(e.response||e.mozResponseArrayBuffer);this.parse(t),this.onload&&this.onload()}.bind(this),e.send(null)},parse:function(e){var r=1e3*this.opts.maxResolutionInMP*1e3,i=0;function n(){var t=e[i]<<8|e[i+1];return i+=2,t}function a(t){var e,r,i=1,n=1;for(r in t.components)t.components.hasOwnProperty(r)&&(i<(e=t.components[r]).h&&(i=e.h),n<e.v&&(n=e.v));var a=Math.ceil(t.samplesPerLine/8/i),o=Math.ceil(t.scanLines/8/n);for(r in t.components)if(t.components.hasOwnProperty(r)){e=t.components[r];var s=Math.ceil(Math.ceil(t.samplesPerLine/8)*e.h/i),h=Math.ceil(Math.ceil(t.scanLines/8)*e.v/n),f=a*e.h,u=o*e.v,l=[];g(u*f*256);for(var c=0;c<u;c++){for(var d=[],p=0;p<f;p++)d.push(new Int32Array(64));l.push(d)}e.blocksPerLine=s,e.blocksPerColumn=h,e.blocks=l}t.maxH=i,t.maxV=n,t.mcusPerLine=a,t.mcusPerColumn=o}e.length;var o,s,h,f,d=null,p=null,m=[],b=[],_=[],y=[],w=n(),v=-1;if(this.comments=[],65496!=w)throw new Error("SOI not found");for(w=n();65497!=w;){switch(w){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var x=(h=void 0,f=void 0,h=n(),f=e.subarray(i,i+h-2),i+=f.length,f);if(65534===w){var E=String.fromCharCode.apply(null,x);this.comments.push(E)}65504===w&&74===x[0]&&70===x[1]&&73===x[2]&&70===x[3]&&0===x[4]&&(d={version:{major:x[5],minor:x[6]},densityUnits:x[7],xDensity:x[8]<<8|x[9],yDensity:x[10]<<8|x[11],thumbWidth:x[12],thumbHeight:x[13],thumbData:x.subarray(14,14+3*x[12]*x[13])}),65505===w&&69===x[0]&&120===x[1]&&105===x[2]&&102===x[3]&&0===x[4]&&(this.exifBuffer=x.subarray(5,x.length)),65518===w&&65===x[0]&&100===x[1]&&111===x[2]&&98===x[3]&&101===x[4]&&0===x[5]&&(p={version:x[6],flags0:x[7]<<8|x[8],flags1:x[9]<<8|x[10],transformCode:x[11]});break;case 65499:for(var k=n()+i-2;i<k;){var S=e[i++];g(256);var M=new Int32Array(64);if(S>>4==0)for(V=0;V<64;V++)M[t[V]]=e[i++];else{if(S>>4!=1)throw new Error("DQT: invalid table spec");for(V=0;V<64;V++)M[t[V]]=n()}m[15&S]=M}break;case 65472:case 65473:case 65474:n(),(o={}).extended=65473===w,o.progressive=65474===w,o.precision=e[i++],o.scanLines=n(),o.samplesPerLine=n(),o.components={},o.componentsOrder=[];var A=o.scanLines*o.samplesPerLine;if(A>r){var I=Math.ceil((A-r)/1e6);throw new Error(`maxResolutionInMP limit exceeded by ${I}MP`)}var T,B=e[i++];for(Z=0;Z<B;Z++){T=e[i];var R=e[i+1]>>4,P=15&e[i+1],O=e[i+2];if(R<=0||P<=0)throw new Error("Invalid sampling factor, expected values above 0");o.componentsOrder.push(T),o.components[T]={h:R,v:P,quantizationIdx:O},i+=3}a(o),b.push(o);break;case 65476:var L=n();for(Z=2;Z<L;){var C=e[i++],U=new Uint8Array(16),D=0;for(V=0;V<16;V++,i++)D+=U[V]=e[i];g(16+D);var z=new Uint8Array(D);for(V=0;V<D;V++,i++)z[V]=e[i];Z+=17+D,(C>>4==0?y:_)[15&C]=u(U,z)}break;case 65501:n(),s=n();break;case 65500:n(),n();break;case 65498:n();var N=e[i++],F=[];for(Z=0;Z<N;Z++){X=o.components[e[i++]];var j=e[i++];X.huffmanTableDC=y[j>>4],X.huffmanTableAC=_[15&j],F.push(X)}var G=e[i++],H=e[i++],W=e[i++],q=l(e,i,o,F,s,G,H,W>>4,15&W,this.opts);i+=q;break;case 65535:255!==e[i]&&i--;break;default:if(255==e[i-3]&&e[i-2]>=192&&e[i-2]<=254){i-=3;break}if(224===w||225==w){if(-1!==v)throw new Error(`first unknown JPEG marker at offset ${v.toString(16)}, second unknown JPEG marker ${w.toString(16)} at offset ${(i-1).toString(16)}`);v=i-1;const t=n();if(255===e[i+t-2]){i+=t-2;break}}throw new Error("unknown JPEG marker "+w.toString(16))}w=n()}if(1!=b.length)throw new Error("only single frame JPEGs supported");for(var Z=0;Z<b.length;Z++){var Y=b[Z].components;for(var V in Y)Y[V].quantizationTable=m[Y[V].quantizationIdx],delete Y[V].quantizationIdx}for(this.width=o.samplesPerLine,this.height=o.scanLines,this.jfif=d,this.adobe=p,this.components=[],Z=0;Z<o.componentsOrder.length;Z++){var X=o.components[o.componentsOrder[Z]];this.components.push({lines:c(0,X),scaleX:X.h/o.maxH,scaleY:X.v/o.maxV})}},getData:function(t,e){var r,i,n,a,o,s,h,f,u,l,c,p,m,b,_,y,w,v,x,E,k,S=this.width/t,M=this.height/e,A=0,I=t*e*this.components.length;g(I);var T=new Uint8Array(I);switch(this.components.length){case 1:for(r=this.components[0],l=0;l<e;l++)for(o=r.lines[0|l*r.scaleY*M],u=0;u<t;u++)c=o[0|u*r.scaleX*S],T[A++]=c;break;case 2:for(r=this.components[0],i=this.components[1],l=0;l<e;l++)for(o=r.lines[0|l*r.scaleY*M],s=i.lines[0|l*i.scaleY*M],u=0;u<t;u++)c=o[0|u*r.scaleX*S],T[A++]=c,c=s[0|u*i.scaleX*S],T[A++]=c;break;case 3:for(k=!0,this.adobe&&this.adobe.transformCode?k=!0:void 0!==this.opts.colorTransform&&(k=!!this.opts.colorTransform),r=this.components[0],i=this.components[1],n=this.components[2],l=0;l<e;l++)for(o=r.lines[0|l*r.scaleY*M],s=i.lines[0|l*i.scaleY*M],h=n.lines[0|l*n.scaleY*M],u=0;u<t;u++)k?(c=o[0|u*r.scaleX*S],p=s[0|u*i.scaleX*S],v=d(c+1.402*((m=h[0|u*n.scaleX*S])-128)),x=d(c-.3441363*(p-128)-.71413636*(m-128)),E=d(c+1.772*(p-128))):(v=o[0|u*r.scaleX*S],x=s[0|u*i.scaleX*S],E=h[0|u*n.scaleX*S]),T[A++]=v,T[A++]=x,T[A++]=E;break;case 4:if(!this.adobe)throw new Error("Unsupported color mode (4 components)");for(k=!1,this.adobe&&this.adobe.transformCode?k=!0:void 0!==this.opts.colorTransform&&(k=!!this.opts.colorTransform),r=this.components[0],i=this.components[1],n=this.components[2],a=this.components[3],l=0;l<e;l++)for(o=r.lines[0|l*r.scaleY*M],s=i.lines[0|l*i.scaleY*M],h=n.lines[0|l*n.scaleY*M],f=a.lines[0|l*a.scaleY*M],u=0;u<t;u++)k?(c=o[0|u*r.scaleX*S],p=s[0|u*i.scaleX*S],m=h[0|u*n.scaleX*S],b=f[0|u*a.scaleX*S],_=255-d(c+1.402*(m-128)),y=255-d(c-.3441363*(p-128)-.71413636*(m-128)),w=255-d(c+1.772*(p-128))):(_=o[0|u*r.scaleX*S],y=s[0|u*i.scaleX*S],w=h[0|u*n.scaleX*S],b=f[0|u*a.scaleX*S]),T[A++]=255-_,T[A++]=255-y,T[A++]=255-w,T[A++]=255-b;break;default:throw new Error("Unsupported color mode")}return T},copyToImageData:function(t,e){var r,i,n,a,o,s,h,f,u,l=t.width,c=t.height,p=t.data,m=this.getData(l,c),g=0,b=0;switch(this.components.length){case 1:for(i=0;i<c;i++)for(r=0;r<l;r++)n=m[g++],p[b++]=n,p[b++]=n,p[b++]=n,e&&(p[b++]=255);break;case 3:for(i=0;i<c;i++)for(r=0;r<l;r++)h=m[g++],f=m[g++],u=m[g++],p[b++]=h,p[b++]=f,p[b++]=u,e&&(p[b++]=255);break;case 4:for(i=0;i<c;i++)for(r=0;r<l;r++)o=m[g++],s=m[g++],n=m[g++],h=255-d(o*(1-(a=m[g++])/255)+a),f=255-d(s*(1-a/255)+a),u=255-d(n*(1-a/255)+a),p[b++]=h,p[b++]=f,p[b++]=u,e&&(p[b++]=255);break;default:throw new Error("Unsupported color mode")}}};var p=0,m=0;function g(t=0){var e=p+t;if(e>m){var r=Math.ceil((e-m)/1024/1024);throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${r}MB`)}p=e}return f.resetMaxMemoryUsage=function(t){p=0,m=t},f.getBytesAllocated=function(){return p},f.requestMemoryAllocation=g,f}();t.exports=function(t,e={}){var r={colorTransform:void 0,useTArray:!1,formatAsRGBA:!0,tolerantDecoding:!0,maxResolutionInMP:100,maxMemoryUsageInMB:512,...e},a=new Uint8Array(t),o=new n;o.opts=r,n.resetMaxMemoryUsage(1024*r.maxMemoryUsageInMB*1024),o.parse(a);var s=r.formatAsRGBA?4:3,h=o.width*o.height*s;try{n.requestMemoryAllocation(h);var f={width:o.width,height:o.height,exifBuffer:o.exifBuffer,data:r.useTArray?new Uint8Array(h):i.alloc(h)};o.comments.length>0&&(f.comments=o.comments)}catch(t){if(t instanceof RangeError)throw new Error("Could not allocate enough memory for the image. Required: "+h);if(t instanceof ReferenceError&&"Buffer is not defined"===t.message)throw new Error("Buffer is not globally defined in this environment. Consider setting useTArray to true");throw t}return o.copyToImageData(f,r.formatAsRGBA),f}},706:(t,e,r)=>{var i=r(8834).lW;function n(t){Math.round;var e,r,n,a,o,s=Math.floor,h=new Array(64),f=new Array(64),u=new Array(64),l=new Array(64),c=new Array(65535),d=new Array(65535),p=new Array(64),m=new Array(64),g=[],b=0,_=7,y=new Array(64),w=new Array(64),v=new Array(64),x=new Array(256),E=new Array(2048),k=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],S=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],M=[0,1,2,3,4,5,6,7,8,9,10,11],A=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],I=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],T=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],B=[0,1,2,3,4,5,6,7,8,9,10,11],R=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],P=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function O(t,e){for(var r=0,i=0,n=new Array,a=1;a<=16;a++){for(var o=1;o<=t[a];o++)n[e[i]]=[],n[e[i]][0]=r,n[e[i]][1]=a,i++,r++;r*=2}return n}function L(t){for(var e=t[0],r=t[1]-1;r>=0;)e&1<<r&&(b|=1<<_),r--,--_<0&&(255==b?(C(255),C(0)):C(b),_=7,b=0)}function C(t){g.push(t)}function U(t){C(t>>8&255),C(255&t)}function D(t,e,r,i,n){for(var a,o=n[0],s=n[240],h=function(t,e){var r,i,n,a,o,s,h,f,u,l,c=0;for(u=0;u<8;++u){r=t[c],i=t[c+1],n=t[c+2],a=t[c+3],o=t[c+4],s=t[c+5],h=t[c+6];var d=r+(f=t[c+7]),m=r-f,g=i+h,b=i-h,_=n+s,y=n-s,w=a+o,v=a-o,x=d+w,E=d-w,k=g+_,S=g-_;t[c]=x+k,t[c+4]=x-k;var M=.707106781*(S+E);t[c+2]=E+M,t[c+6]=E-M;var A=.382683433*((x=v+y)-(S=b+m)),I=.5411961*x+A,T=1.306562965*S+A,B=.707106781*(k=y+b),R=m+B,P=m-B;t[c+5]=P+I,t[c+3]=P-I,t[c+1]=R+T,t[c+7]=R-T,c+=8}for(c=0,u=0;u<8;++u){r=t[c],i=t[c+8],n=t[c+16],a=t[c+24],o=t[c+32],s=t[c+40],h=t[c+48];var O=r+(f=t[c+56]),L=r-f,C=i+h,U=i-h,D=n+s,z=n-s,N=a+o,F=a-o,j=O+N,G=O-N,H=C+D,W=C-D;t[c]=j+H,t[c+32]=j-H;var q=.707106781*(W+G);t[c+16]=G+q,t[c+48]=G-q;var Z=.382683433*((j=F+z)-(W=U+L)),Y=.5411961*j+Z,V=1.306562965*W+Z,X=.707106781*(H=z+U),Q=L+X,J=L-X;t[c+40]=J+Y,t[c+24]=J-Y,t[c+8]=Q+V,t[c+56]=Q-V,c++}for(u=0;u<64;++u)l=t[u]*e[u],p[u]=l>0?l+.5|0:l-.5|0;return p}(t,e),f=0;f<64;++f)m[k[f]]=h[f];var u=m[0]-r;r=m[0],0==u?L(i[0]):(L(i[d[a=32767+u]]),L(c[a]));for(var l=63;l>0&&0==m[l];l--);if(0==l)return L(o),r;for(var g,b=1;b<=l;){for(var _=b;0==m[b]&&b<=l;++b);var y=b-_;if(y>=16){g=y>>4;for(var w=1;w<=g;++w)L(s);y&=15}a=32767+m[b],L(n[(y<<4)+d[a]]),L(c[a]),b++}return 63!=l&&L(o),r}function z(t){t<=0&&(t=1),t>100&&(t=100),o!=t&&(function(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],r=0;r<64;r++){var i=s((e[r]*t+50)/100);i<1?i=1:i>255&&(i=255),h[k[r]]=i}for(var n=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],a=0;a<64;a++){var o=s((n[a]*t+50)/100);o<1?o=1:o>255&&(o=255),f[k[a]]=o}for(var c=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],d=0,p=0;p<8;p++)for(var m=0;m<8;m++)u[d]=1/(h[k[d]]*c[p]*c[m]*8),l[d]=1/(f[k[d]]*c[p]*c[m]*8),d++}(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),o=t)}this.encode=function(t,o){var s;(new Date).getTime(),o&&z(o),g=new Array,b=0,_=7,U(65496),U(65504),U(16),C(74),C(70),C(73),C(70),C(0),C(1),C(1),C(0),U(1),U(1),C(0),C(0),void 0!==(s=t.comments)&&s.constructor===Array&&s.forEach((t=>{if("string"==typeof t){U(65534);var e,r=t.length;for(U(r+2),e=0;e<r;e++)C(t.charCodeAt(e))}})),function(t){if(t){U(65505),69===t[0]&&120===t[1]&&105===t[2]&&102===t[3]?U(t.length+2):(U(t.length+5+2),C(69),C(120),C(105),C(102),C(0));for(var e=0;e<t.length;e++)C(t[e])}}(t.exifBuffer),function(){U(65499),U(132),C(0);for(var t=0;t<64;t++)C(h[t]);C(1);for(var e=0;e<64;e++)C(f[e])}(),function(t,e){U(65472),U(17),C(8),U(e),U(t),C(3),C(1),C(17),C(0),C(2),C(17),C(1),C(3),C(17),C(1)}(t.width,t.height),function(){U(65476),U(418),C(0);for(var t=0;t<16;t++)C(S[t+1]);for(var e=0;e<=11;e++)C(M[e]);C(16);for(var r=0;r<16;r++)C(A[r+1]);for(var i=0;i<=161;i++)C(I[i]);C(1);for(var n=0;n<16;n++)C(T[n+1]);for(var a=0;a<=11;a++)C(B[a]);C(17);for(var o=0;o<16;o++)C(R[o+1]);for(var s=0;s<=161;s++)C(P[s])}(),U(65498),U(12),C(3),C(1),C(0),C(2),C(17),C(3),C(17),C(0),C(63),C(0);var c=0,d=0,p=0;b=0,_=7,this.encode.displayName="_encode_";for(var m,x,k,O,N,F,j,G,H,W=t.data,q=t.width,Z=t.height,Y=4*q,V=0;V<Z;){for(m=0;m<Y;){for(F=N=Y*V+m,j=-1,G=0,H=0;H<64;H++)F=N+(G=H>>3)*Y+(j=4*(7&H)),V+G>=Z&&(F-=Y*(V+1+G-Z)),m+j>=Y&&(F-=m+j-Y+4),x=W[F++],k=W[F++],O=W[F++],y[H]=(E[x]+E[k+256>>0]+E[O+512>>0]>>16)-128,w[H]=(E[x+768>>0]+E[k+1024>>0]+E[O+1280>>0]>>16)-128,v[H]=(E[x+1280>>0]+E[k+1536>>0]+E[O+1792>>0]>>16)-128;c=D(y,u,c,e,n),d=D(w,l,d,r,a),p=D(v,l,p,r,a),m+=32}V+=8}if(_>=0){var X=[];X[1]=_+1,X[0]=(1<<_+1)-1,L(X)}return U(65497),i.from(g)},(new Date).getTime(),t||(t=50),function(){for(var t=String.fromCharCode,e=0;e<256;e++)x[e]=t(e)}(),e=O(S,M),r=O(T,B),n=O(A,I),a=O(R,P),function(){for(var t=1,e=2,r=1;r<=15;r++){for(var i=t;i<e;i++)d[32767+i]=r,c[32767+i]=[],c[32767+i][1]=r,c[32767+i][0]=i;for(var n=-(e-1);n<=-t;n++)d[32767+n]=r,c[32767+n]=[],c[32767+n][1]=r,c[32767+n][0]=e-1+n;t<<=1,e<<=1}}(),function(){for(var t=0;t<256;t++)E[t]=19595*t,E[t+256>>0]=38470*t,E[t+512>>0]=7471*t+32768,E[t+768>>0]=-11059*t,E[t+1024>>0]=-21709*t,E[t+1280>>0]=32768*t+8421375,E[t+1536>>0]=-27439*t,E[t+1792>>0]=-5329*t}(),z(t),(new Date).getTime()}t.exports=function(t,e){return void 0===e&&(e=50),{data:new n(e).encode(t,e),width:t.width,height:t.height}}},8058:(t,e,r)=>{var i=r(8834).lW,n=r(6290),a=function(){},o=r(4398),s=r(5947),h=r(8438),f=r(5565),u=r(1960),l=self.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest;t.exports=function(t,e){e="function"==typeof e?e:a,"string"==typeof t?t={uri:t}:t||(t={}),t.binary&&(t=function(t){if(l)return u(t,{responseType:"arraybuffer"});if(void 0===self.XMLHttpRequest)throw new Error("your browser does not support XHR loading");var e=new self.XMLHttpRequest;return e.overrideMimeType("text/plain; charset=x-user-defined"),u({xhr:e},t)}(t)),n(t,(function(r,n,u){if(r)return e(r);if(!/^2/.test(n.statusCode))return e(new Error("http status code: "+n.statusCode));if(!u)return e(new Error("no body result"));var l,c,d=!1;if(l=u,"[object ArrayBuffer]"===Object.prototype.toString.call(l)){var p=new Uint8Array(u);u=i.from(p,"binary")}f(u)&&(d=!0,"string"==typeof u&&(u=i.from(u,"binary"))),d||(i.isBuffer(u)&&(u=u.toString(t.encoding)),u=u.trim());try{var m=n.headers["content-type"];c=d?h(u):/json/.test(m)||"{"===u.charAt(0)?JSON.parse(u):/xml/.test(m)||"<"===u.charAt(0)?s(u):o(u)}catch(t){e(new Error("error parsing font "+t.message)),e=a}e(null,c)}))}},5565:(t,e,r)=>{var i=r(8834).lW,n=r(5137),a=i.from([66,77,70,3]);t.exports=function(t){return"string"==typeof t?"BMF"===t.substring(0,3):t.length>4&&n(t.slice(0,4),a)}},63:(t,e)=>{"use strict";function r(t,e,r,i){for(var n=t[e++],a=1<<n,o=a+1,s=o+1,h=n+1,f=(1<<h)-1,u=0,l=0,c=0,d=t[e++],p=new Int32Array(4096),m=null;;){for(;u<16&&0!==d;)l|=t[e++]<<u,u+=8,1===d?d=t[e++]:--d;if(u<h)break;var g=l&f;if(l>>=h,u-=h,g!==a){if(g===o)break;for(var b=g<s?g:m,_=0,y=b;y>a;)y=p[y]>>8,++_;var w=y;if(c+_+(b!==g?1:0)>i)return void console.log("Warning, gif stream longer than expected.");r[c++]=w;var v=c+=_;for(b!==g&&(r[c++]=w),y=b;_--;)y=p[y],r[--v]=255&y,y>>=8;null!==m&&s<4096&&(p[s++]=m<<8|w,s>=f+1&&h<12&&(++h,f=f<<1|1)),m=g}else s=o+1,f=(1<<(h=n+1))-1,m=null}return c!==i&&console.log("Warning, gif stream shorter than expected."),r}try{e.N=function(t){var e=0;if(71!==t[e++]||73!==t[e++]||70!==t[e++]||56!==t[e++]||56!=(t[e++]+1&253)||97!==t[e++])throw new Error("Invalid GIF 87a/89a header.");var i=t[e++]|t[e++]<<8,n=t[e++]|t[e++]<<8,a=t[e++],o=a>>7,s=1<<1+(7&a);t[e++],t[e++];var h=null,f=null;o&&(h=e,f=s,e+=3*s);var u=!0,l=[],c=0,d=null,p=0,m=null;for(this.width=i,this.height=n;u&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(11!==t[e]||78==t[e+1]&&69==t[e+2]&&84==t[e+3]&&83==t[e+4]&&67==t[e+5]&&65==t[e+6]&&80==t[e+7]&&69==t[e+8]&&50==t[e+9]&&46==t[e+10]&&48==t[e+11]&&3==t[e+12]&&1==t[e+13]&&0==t[e+16])e+=14,m=t[e++]|t[e++]<<8,e++;else for(e+=12;;){if(!((I=t[e++])>=0))throw Error("Invalid block size");if(0===I)break;e+=I}break;case 249:if(4!==t[e++]||0!==t[e+4])throw new Error("Invalid graphics extension block.");var g=t[e++];c=t[e++]|t[e++]<<8,d=t[e++],0==(1&g)&&(d=null),p=g>>2&7,e++;break;case 254:for(;;){if(!((I=t[e++])>=0))throw Error("Invalid block size");if(0===I)break;e+=I}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var b=t[e++]|t[e++]<<8,_=t[e++]|t[e++]<<8,y=t[e++]|t[e++]<<8,w=t[e++]|t[e++]<<8,v=t[e++],x=v>>6&1,E=1<<1+(7&v),k=h,S=f,M=!1;v>>7&&(M=!0,k=e,S=E,e+=3*E);var A=e;for(e++;;){var I;if(!((I=t[e++])>=0))throw Error("Invalid block size");if(0===I)break;e+=I}l.push({x:b,y:_,width:y,height:w,has_local_palette:M,palette_offset:k,palette_size:S,data_offset:A,data_length:e-A,transparent_index:d,interlaced:!!x,delay:c,disposal:p});break;case 59:u=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return l.length},this.loopCount=function(){return m},this.frameInfo=function(t){if(t<0||t>=l.length)throw new Error("Frame index out of range.");return l[t]},this.decodeAndBlitFrameBGRA=function(e,n){var a=this.frameInfo(e),o=a.width*a.height,s=new Uint8Array(o);r(t,a.data_offset,s,o);var h=a.palette_offset,f=a.transparent_index;null===f&&(f=256);var u=a.width,l=i-u,c=u,d=4*(a.y*i+a.x),p=4*((a.y+a.height)*i+a.x),m=d,g=4*l;!0===a.interlaced&&(g+=4*i*7);for(var b=8,_=0,y=s.length;_<y;++_){var w=s[_];if(0===c&&(c=u,(m+=g)>=p&&(g=4*l+4*i*(b-1),m=d+(u+l)*(b<<1),b>>=1)),w===f)m+=4;else{var v=t[h+3*w],x=t[h+3*w+1],E=t[h+3*w+2];n[m++]=E,n[m++]=x,n[m++]=v,n[m++]=255}--c}},this.decodeAndBlitFrameRGBA=function(e,n){var a=this.frameInfo(e),o=a.width*a.height,s=new Uint8Array(o);r(t,a.data_offset,s,o);var h=a.palette_offset,f=a.transparent_index;null===f&&(f=256);var u=a.width,l=i-u,c=u,d=4*(a.y*i+a.x),p=4*((a.y+a.height)*i+a.x),m=d,g=4*l;!0===a.interlaced&&(g+=4*i*7);for(var b=8,_=0,y=s.length;_<y;++_){var w=s[_];if(0===c&&(c=u,(m+=g)>=p&&(g=4*l+4*i*(b-1),m=d+(u+l)*(b<<1),b>>=1)),w===f)m+=4;else{var v=t[h+3*w],x=t[h+3*w+1],E=t[h+3*w+2];n[m++]=v,n[m++]=x,n[m++]=E,n[m++]=255}--c}}}}catch(t){}},2845:(t,e,r)=>{"use strict";var i={};(0,r(9761).assign)(i,r(9880),r(1380),r(1271)),t.exports=i},9880:(t,e,r)=>{"use strict";var i=r(5789),n=r(9761),a=r(7944),o=r(2950),s=r(744),h=Object.prototype.toString,f=0,u=-1,l=0,c=8;function d(t){if(!(this instanceof d))return new d(t);this.options=n.assign({level:u,method:c,chunkSize:16384,windowBits:15,memLevel:8,strategy:l,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=i.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(r!==f)throw new Error(o[r]);if(e.header&&i.deflateSetHeader(this.strm,e.header),e.dictionary){var p;if(p="string"==typeof e.dictionary?a.string2buf(e.dictionary):"[object ArrayBuffer]"===h.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(r=i.deflateSetDictionary(this.strm,p))!==f)throw new Error(o[r]);this._dict_set=!0}}function p(t,e){var r=new d(e);if(r.push(t,!0),r.err)throw r.msg||o[r.err];return r.result}d.prototype.push=function(t,e){var r,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=e===~~e?e:!0===e?4:0,"string"==typeof t?s.input=a.string2buf(t):"[object ArrayBuffer]"===h.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new n.Buf8(u),s.next_out=0,s.avail_out=u),1!==(r=i.deflate(s,o))&&r!==f)return this.onEnd(r),this.ended=!0,!1;0!==s.avail_out&&(0!==s.avail_in||4!==o&&2!==o)||("string"===this.options.to?this.onData(a.buf2binstring(n.shrinkBuf(s.output,s.next_out))):this.onData(n.shrinkBuf(s.output,s.next_out)))}while((s.avail_in>0||0===s.avail_out)&&1!==r);return 4===o?(r=i.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===f):2!==o||(this.onEnd(f),s.avail_out=0,!0)},d.prototype.onData=function(t){this.chunks.push(t)},d.prototype.onEnd=function(t){t===f&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},e.Deflate=d,e.deflate=p,e.deflateRaw=function(t,e){return(e=e||{}).raw=!0,p(t,e)},e.gzip=function(t,e){return(e=e||{}).gzip=!0,p(t,e)}},1380:(t,e,r)=>{"use strict";var i=r(5020),n=r(9761),a=r(7944),o=r(1271),s=r(2950),h=r(744),f=r(7357),u=Object.prototype.toString;function l(t){if(!(this instanceof l))return new l(t);this.options=n.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var r=i.inflateInit2(this.strm,e.windowBits);if(r!==o.Z_OK)throw new Error(s[r]);if(this.header=new f,i.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=a.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(r=i.inflateSetDictionary(this.strm,e.dictionary))!==o.Z_OK))throw new Error(s[r])}function c(t,e){var r=new l(e);if(r.push(t,!0),r.err)throw r.msg||s[r.err];return r.result}l.prototype.push=function(t,e){var r,s,h,f,l,c=this.strm,d=this.options.chunkSize,p=this.options.dictionary,m=!1;if(this.ended)return!1;s=e===~~e?e:!0===e?o.Z_FINISH:o.Z_NO_FLUSH,"string"==typeof t?c.input=a.binstring2buf(t):"[object ArrayBuffer]"===u.call(t)?c.input=new Uint8Array(t):c.input=t,c.next_in=0,c.avail_in=c.input.length;do{if(0===c.avail_out&&(c.output=new n.Buf8(d),c.next_out=0,c.avail_out=d),(r=i.inflate(c,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&p&&(r=i.inflateSetDictionary(this.strm,p)),r===o.Z_BUF_ERROR&&!0===m&&(r=o.Z_OK,m=!1),r!==o.Z_STREAM_END&&r!==o.Z_OK)return this.onEnd(r),this.ended=!0,!1;c.next_out&&(0!==c.avail_out&&r!==o.Z_STREAM_END&&(0!==c.avail_in||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||("string"===this.options.to?(h=a.utf8border(c.output,c.next_out),f=c.next_out-h,l=a.buf2string(c.output,h),c.next_out=f,c.avail_out=d-f,f&&n.arraySet(c.output,c.output,h,f,0),this.onData(l)):this.onData(n.shrinkBuf(c.output,c.next_out)))),0===c.avail_in&&0===c.avail_out&&(m=!0)}while((c.avail_in>0||0===c.avail_out)&&r!==o.Z_STREAM_END);return r===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(r=i.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),c.avail_out=0,!0)},l.prototype.onData=function(t){this.chunks.push(t)},l.prototype.onEnd=function(t){t===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},e.Inflate=l,e.inflate=c,e.inflateRaw=function(t,e){return(e=e||{}).raw=!0,c(t,e)},e.ungzip=c},9761:(t,e)=>{"use strict";var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)i(r,n)&&(t[n]=r[n])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,r,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+i),n);else for(var a=0;a<i;a++)t[n+a]=e[r+a]},flattenChunks:function(t){var e,r,i,n,a,o;for(i=0,e=0,r=t.length;e<r;e++)i+=t[e].length;for(o=new Uint8Array(i),n=0,e=0,r=t.length;e<r;e++)a=t[e],o.set(a,n),n+=a.length;return o}},a={arraySet:function(t,e,r,i,n){for(var a=0;a<i;a++)t[n+a]=e[r+a]},flattenChunks:function(t){return[].concat.apply([],t)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,n)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,a))},e.setTyped(r)},7944:(t,e,r)=>{"use strict";var i=r(9761),n=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch(t){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){a=!1}for(var o=new i.Buf8(256),s=0;s<256;s++)o[s]=s>=252?6:s>=248?5:s>=240?4:s>=224?3:s>=192?2:1;function h(t,e){if(e<65534&&(t.subarray&&a||!t.subarray&&n))return String.fromCharCode.apply(null,i.shrinkBuf(t,e));for(var r="",o=0;o<e;o++)r+=String.fromCharCode(t[o]);return r}o[254]=o[254]=1,e.string2buf=function(t){var e,r,n,a,o,s=t.length,h=0;for(a=0;a<s;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<s&&56320==(64512&(n=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),h+=r<128?1:r<2048?2:r<65536?3:4;for(e=new i.Buf8(h),o=0,a=0;o<h;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<s&&56320==(64512&(n=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),r<128?e[o++]=r:r<2048?(e[o++]=192|r>>>6,e[o++]=128|63&r):r<65536?(e[o++]=224|r>>>12,e[o++]=128|r>>>6&63,e[o++]=128|63&r):(e[o++]=240|r>>>18,e[o++]=128|r>>>12&63,e[o++]=128|r>>>6&63,e[o++]=128|63&r);return e},e.buf2binstring=function(t){return h(t,t.length)},e.binstring2buf=function(t){for(var e=new i.Buf8(t.length),r=0,n=e.length;r<n;r++)e[r]=t.charCodeAt(r);return e},e.buf2string=function(t,e){var r,i,n,a,s=e||t.length,f=new Array(2*s);for(i=0,r=0;r<s;)if((n=t[r++])<128)f[i++]=n;else if((a=o[n])>4)f[i++]=65533,r+=a-1;else{for(n&=2===a?31:3===a?15:7;a>1&&r<s;)n=n<<6|63&t[r++],a--;a>1?f[i++]=65533:n<65536?f[i++]=n:(n-=65536,f[i++]=55296|n>>10&1023,f[i++]=56320|1023&n)}return h(f,i)},e.utf8border=function(t,e){var r;for((e=e||t.length)>t.length&&(e=t.length),r=e-1;r>=0&&128==(192&t[r]);)r--;return r<0||0===r?e:r+o[t[r]]>e?r:e}},5562:t=>{"use strict";t.exports=function(t,e,r,i){for(var n=65535&t|0,a=t>>>16&65535|0,o=0;0!==r;){r-=o=r>2e3?2e3:r;do{a=a+(n=n+e[i++]|0)|0}while(--o);n%=65521,a%=65521}return n|a<<16|0}},1271:t=>{"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},4299:t=>{"use strict";var e=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();t.exports=function(t,r,i,n){var a=e,o=n+i;t^=-1;for(var s=n;s<o;s++)t=t>>>8^a[255&(t^r[s])];return-1^t}},5789:(t,e,r)=>{"use strict";var i,n=r(9761),a=r(9564),o=r(5562),s=r(4299),h=r(2950),f=0,u=4,l=0,c=-2,d=-1,p=1,m=4,g=2,b=8,_=9,y=286,w=30,v=19,x=2*y+1,E=15,k=3,S=258,M=S+k+1,A=42,I=103,T=113,B=666,R=1,P=2,O=3,L=4;function C(t,e){return t.msg=h[e],e}function U(t){return(t<<1)-(t>4?9:0)}function D(t){for(var e=t.length;--e>=0;)t[e]=0}function z(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(n.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function N(t,e){a._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,z(t.strm)}function F(t,e){t.pending_buf[t.pending++]=e}function j(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function G(t,e){var r,i,n=t.max_chain_length,a=t.strstart,o=t.prev_length,s=t.nice_match,h=t.strstart>t.w_size-M?t.strstart-(t.w_size-M):0,f=t.window,u=t.w_mask,l=t.prev,c=t.strstart+S,d=f[a+o-1],p=f[a+o];t.prev_length>=t.good_match&&(n>>=2),s>t.lookahead&&(s=t.lookahead);do{if(f[(r=e)+o]===p&&f[r+o-1]===d&&f[r]===f[a]&&f[++r]===f[a+1]){a+=2,r++;do{}while(f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&a<c);if(i=S-(c-a),a=c-S,i>o){if(t.match_start=e,o=i,i>=s)break;d=f[a+o-1],p=f[a+o]}}}while((e=l[e&u])>h&&0!=--n);return o<=t.lookahead?o:t.lookahead}function H(t){var e,r,i,a,h,f,u,l,c,d,p=t.w_size;do{if(a=t.window_size-t.lookahead-t.strstart,t.strstart>=p+(p-M)){n.arraySet(t.window,t.window,p,p,0),t.match_start-=p,t.strstart-=p,t.block_start-=p,e=r=t.hash_size;do{i=t.head[--e],t.head[e]=i>=p?i-p:0}while(--r);e=r=p;do{i=t.prev[--e],t.prev[e]=i>=p?i-p:0}while(--r);a+=p}if(0===t.strm.avail_in)break;if(f=t.strm,u=t.window,l=t.strstart+t.lookahead,c=a,d=void 0,(d=f.avail_in)>c&&(d=c),r=0===d?0:(f.avail_in-=d,n.arraySet(u,f.input,f.next_in,d,l),1===f.state.wrap?f.adler=o(f.adler,u,d,l):2===f.state.wrap&&(f.adler=s(f.adler,u,d,l)),f.next_in+=d,f.total_in+=d,d),t.lookahead+=r,t.lookahead+t.insert>=k)for(h=t.strstart-t.insert,t.ins_h=t.window[h],t.ins_h=(t.ins_h<<t.hash_shift^t.window[h+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[h+k-1])&t.hash_mask,t.prev[h&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=h,h++,t.insert--,!(t.lookahead+t.insert<k)););}while(t.lookahead<M&&0!==t.strm.avail_in)}function W(t,e){for(var r,i;;){if(t.lookahead<M){if(H(t),t.lookahead<M&&e===f)return R;if(0===t.lookahead)break}if(r=0,t.lookahead>=k&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+k-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-M&&(t.match_length=G(t,r)),t.match_length>=k)if(i=a._tr_tally(t,t.strstart-t.match_start,t.match_length-k),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=k){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+k-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(N(t,!1),0===t.strm.avail_out))return R}return t.insert=t.strstart<k-1?t.strstart:k-1,e===u?(N(t,!0),0===t.strm.avail_out?O:L):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?R:P}function q(t,e){for(var r,i,n;;){if(t.lookahead<M){if(H(t),t.lookahead<M&&e===f)return R;if(0===t.lookahead)break}if(r=0,t.lookahead>=k&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+k-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=k-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-M&&(t.match_length=G(t,r),t.match_length<=5&&(t.strategy===p||t.match_length===k&&t.strstart-t.match_start>4096)&&(t.match_length=k-1)),t.prev_length>=k&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-k,i=a._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-k),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+k-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=k-1,t.strstart++,i&&(N(t,!1),0===t.strm.avail_out))return R}else if(t.match_available){if((i=a._tr_tally(t,0,t.window[t.strstart-1]))&&N(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return R}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=a._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<k-1?t.strstart:k-1,e===u?(N(t,!0),0===t.strm.avail_out?O:L):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?R:P}function Z(t,e,r,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=i,this.func=n}function Y(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*x),this.dyn_dtree=new n.Buf16(2*(2*w+1)),this.bl_tree=new n.Buf16(2*(2*v+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(E+1),this.heap=new n.Buf16(2*y+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*y+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function V(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=g,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?A:T,t.adler=2===e.wrap?0:1,e.last_flush=f,a._tr_init(e),l):C(t,c)}function X(t){var e,r=V(t);return r===l&&((e=t.state).window_size=2*e.w_size,D(e.head),e.max_lazy_match=i[e.level].max_lazy,e.good_match=i[e.level].good_length,e.nice_match=i[e.level].nice_length,e.max_chain_length=i[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=k-1,e.match_available=0,e.ins_h=0),r}function Q(t,e,r,i,a,o){if(!t)return c;var s=1;if(e===d&&(e=6),i<0?(s=0,i=-i):i>15&&(s=2,i-=16),a<1||a>_||r!==b||i<8||i>15||e<0||e>9||o<0||o>m)return C(t,c);8===i&&(i=9);var h=new Y;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=i,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=a+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+k-1)/k),h.window=new n.Buf8(2*h.w_size),h.head=new n.Buf16(h.hash_size),h.prev=new n.Buf16(h.w_size),h.lit_bufsize=1<<a+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new n.Buf8(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=o,h.method=r,X(t)}i=[new Z(0,0,0,0,(function(t,e){var r=65535;for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(H(t),0===t.lookahead&&e===f)return R;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+r;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,N(t,!1),0===t.strm.avail_out))return R;if(t.strstart-t.block_start>=t.w_size-M&&(N(t,!1),0===t.strm.avail_out))return R}return t.insert=0,e===u?(N(t,!0),0===t.strm.avail_out?O:L):(t.strstart>t.block_start&&(N(t,!1),t.strm.avail_out),R)})),new Z(4,4,8,4,W),new Z(4,5,16,8,W),new Z(4,6,32,32,W),new Z(4,4,16,16,q),new Z(8,16,32,32,q),new Z(8,16,128,128,q),new Z(8,32,128,256,q),new Z(32,128,258,1024,q),new Z(32,258,258,4096,q)],e.deflateInit=function(t,e){return Q(t,e,b,15,8,0)},e.deflateInit2=Q,e.deflateReset=X,e.deflateResetKeep=V,e.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?c:(t.state.gzhead=e,l):c},e.deflate=function(t,e){var r,n,o,h;if(!t||!t.state||e>5||e<0)return t?C(t,c):c;if(n=t.state,!t.output||!t.input&&0!==t.avail_in||n.status===B&&e!==u)return C(t,0===t.avail_out?-5:c);if(n.strm=t,r=n.last_flush,n.last_flush=e,n.status===A)if(2===n.wrap)t.adler=0,F(n,31),F(n,139),F(n,8),n.gzhead?(F(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),F(n,255&n.gzhead.time),F(n,n.gzhead.time>>8&255),F(n,n.gzhead.time>>16&255),F(n,n.gzhead.time>>24&255),F(n,9===n.level?2:n.strategy>=2||n.level<2?4:0),F(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(F(n,255&n.gzhead.extra.length),F(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=s(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(F(n,0),F(n,0),F(n,0),F(n,0),F(n,0),F(n,9===n.level?2:n.strategy>=2||n.level<2?4:0),F(n,3),n.status=T);else{var d=b+(n.w_bits-8<<4)<<8;d|=(n.strategy>=2||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(d|=32),d+=31-d%31,n.status=T,j(n,d),0!==n.strstart&&(j(n,t.adler>>>16),j(n,65535&t.adler)),t.adler=1}if(69===n.status)if(n.gzhead.extra){for(o=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),z(t),o=n.pending,n.pending!==n.pending_buf_size));)F(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){o=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),z(t),o=n.pending,n.pending===n.pending_buf_size)){h=1;break}h=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,F(n,h)}while(0!==h);n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),0===h&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){o=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),z(t),o=n.pending,n.pending===n.pending_buf_size)){h=1;break}h=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,F(n,h)}while(0!==h);n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),0===h&&(n.status=I)}else n.status=I;if(n.status===I&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&z(t),n.pending+2<=n.pending_buf_size&&(F(n,255&t.adler),F(n,t.adler>>8&255),t.adler=0,n.status=T)):n.status=T),0!==n.pending){if(z(t),0===t.avail_out)return n.last_flush=-1,l}else if(0===t.avail_in&&U(e)<=U(r)&&e!==u)return C(t,-5);if(n.status===B&&0!==t.avail_in)return C(t,-5);if(0!==t.avail_in||0!==n.lookahead||e!==f&&n.status!==B){var p=2===n.strategy?function(t,e){for(var r;;){if(0===t.lookahead&&(H(t),0===t.lookahead)){if(e===f)return R;break}if(t.match_length=0,r=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(N(t,!1),0===t.strm.avail_out))return R}return t.insert=0,e===u?(N(t,!0),0===t.strm.avail_out?O:L):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?R:P}(n,e):3===n.strategy?function(t,e){for(var r,i,n,o,s=t.window;;){if(t.lookahead<=S){if(H(t),t.lookahead<=S&&e===f)return R;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=k&&t.strstart>0&&(i=s[n=t.strstart-1])===s[++n]&&i===s[++n]&&i===s[++n]){o=t.strstart+S;do{}while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<o);t.match_length=S-(o-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=k?(r=a._tr_tally(t,1,t.match_length-k),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(N(t,!1),0===t.strm.avail_out))return R}return t.insert=0,e===u?(N(t,!0),0===t.strm.avail_out?O:L):t.last_lit&&(N(t,!1),0===t.strm.avail_out)?R:P}(n,e):i[n.level].func(n,e);if(p!==O&&p!==L||(n.status=B),p===R||p===O)return 0===t.avail_out&&(n.last_flush=-1),l;if(p===P&&(1===e?a._tr_align(n):5!==e&&(a._tr_stored_block(n,0,0,!1),3===e&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),z(t),0===t.avail_out))return n.last_flush=-1,l}return e!==u?l:n.wrap<=0?1:(2===n.wrap?(F(n,255&t.adler),F(n,t.adler>>8&255),F(n,t.adler>>16&255),F(n,t.adler>>24&255),F(n,255&t.total_in),F(n,t.total_in>>8&255),F(n,t.total_in>>16&255),F(n,t.total_in>>24&255)):(j(n,t.adler>>>16),j(n,65535&t.adler)),z(t),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?l:1)},e.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==A&&69!==e&&73!==e&&91!==e&&e!==I&&e!==T&&e!==B?C(t,c):(t.state=null,e===T?C(t,-3):l):c},e.deflateSetDictionary=function(t,e){var r,i,a,s,h,f,u,d,p=e.length;if(!t||!t.state)return c;if(2===(s=(r=t.state).wrap)||1===s&&r.status!==A||r.lookahead)return c;for(1===s&&(t.adler=o(t.adler,e,p,0)),r.wrap=0,p>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),d=new n.Buf8(r.w_size),n.arraySet(d,e,p-r.w_size,r.w_size,0),e=d,p=r.w_size),h=t.avail_in,f=t.next_in,u=t.input,t.avail_in=p,t.next_in=0,t.input=e,H(r);r.lookahead>=k;){i=r.strstart,a=r.lookahead-(k-1);do{r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+k-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++}while(--a);r.strstart=i,r.lookahead=k-1,H(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=k-1,r.match_available=0,t.next_in=f,t.input=u,t.avail_in=h,r.wrap=s,l},e.deflateInfo="pako deflate (from Nodeca project)"},7357:t=>{"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},4980:t=>{"use strict";t.exports=function(t,e){var r,i,n,a,o,s,h,f,u,l,c,d,p,m,g,b,_,y,w,v,x,E,k,S,M;r=t.state,i=t.next_in,S=t.input,n=i+(t.avail_in-5),a=t.next_out,M=t.output,o=a-(e-t.avail_out),s=a+(t.avail_out-257),h=r.dmax,f=r.wsize,u=r.whave,l=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,g=r.distcode,b=(1<<r.lenbits)-1,_=(1<<r.distbits)-1;t:do{p<15&&(d+=S[i++]<<p,p+=8,d+=S[i++]<<p,p+=8),y=m[d&b];e:for(;;){if(d>>>=w=y>>>24,p-=w,0==(w=y>>>16&255))M[a++]=65535&y;else{if(!(16&w)){if(0==(64&w)){y=m[(65535&y)+(d&(1<<w)-1)];continue e}if(32&w){r.mode=12;break t}t.msg="invalid literal/length code",r.mode=30;break t}v=65535&y,(w&=15)&&(p<w&&(d+=S[i++]<<p,p+=8),v+=d&(1<<w)-1,d>>>=w,p-=w),p<15&&(d+=S[i++]<<p,p+=8,d+=S[i++]<<p,p+=8),y=g[d&_];r:for(;;){if(d>>>=w=y>>>24,p-=w,!(16&(w=y>>>16&255))){if(0==(64&w)){y=g[(65535&y)+(d&(1<<w)-1)];continue r}t.msg="invalid distance code",r.mode=30;break t}if(x=65535&y,p<(w&=15)&&(d+=S[i++]<<p,(p+=8)<w&&(d+=S[i++]<<p,p+=8)),(x+=d&(1<<w)-1)>h){t.msg="invalid distance too far back",r.mode=30;break t}if(d>>>=w,p-=w,x>(w=a-o)){if((w=x-w)>u&&r.sane){t.msg="invalid distance too far back",r.mode=30;break t}if(E=0,k=c,0===l){if(E+=f-w,w<v){v-=w;do{M[a++]=c[E++]}while(--w);E=a-x,k=M}}else if(l<w){if(E+=f+l-w,(w-=l)<v){v-=w;do{M[a++]=c[E++]}while(--w);if(E=0,l<v){v-=w=l;do{M[a++]=c[E++]}while(--w);E=a-x,k=M}}}else if(E+=l-w,w<v){v-=w;do{M[a++]=c[E++]}while(--w);E=a-x,k=M}for(;v>2;)M[a++]=k[E++],M[a++]=k[E++],M[a++]=k[E++],v-=3;v&&(M[a++]=k[E++],v>1&&(M[a++]=k[E++]))}else{E=a-x;do{M[a++]=M[E++],M[a++]=M[E++],M[a++]=M[E++],v-=3}while(v>2);v&&(M[a++]=M[E++],v>1&&(M[a++]=M[E++]))}break}}break}}while(i<n&&a<s);i-=v=p>>3,d&=(1<<(p-=v<<3))-1,t.next_in=i,t.next_out=a,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=a<s?s-a+257:257-(a-s),r.hold=d,r.bits=p}},5020:(t,e,r)=>{"use strict";var i=r(9761),n=r(5562),a=r(4299),o=r(4980),s=r(881),h=1,f=2,u=0,l=-2,c=1,d=12,p=30,m=852,g=592;function b(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function _(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=c,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new i.Buf32(m),e.distcode=e.distdyn=new i.Buf32(g),e.sane=1,e.back=-1,u):l}function w(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,y(t)):l}function v(t,e){var r,i;return t&&t.state?(i=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?l:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=r,i.wbits=e,w(t))):l}function x(t,e){var r,i;return t?(i=new _,t.state=i,i.window=null,(r=v(t,e))!==u&&(t.state=null),r):l}var E,k,S=!0;function M(t){if(S){var e;for(E=new i.Buf32(512),k=new i.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(s(h,t.lens,0,288,E,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;s(f,t.lens,0,32,k,0,t.work,{bits:5}),S=!1}t.lencode=E,t.lenbits=9,t.distcode=k,t.distbits=5}function A(t,e,r,n){var a,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new i.Buf8(o.wsize)),n>=o.wsize?(i.arraySet(o.window,e,r-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((a=o.wsize-o.wnext)>n&&(a=n),i.arraySet(o.window,e,r-n,a,o.wnext),(n-=a)?(i.arraySet(o.window,e,r-n,n,0),o.wnext=n,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}e.inflateReset=w,e.inflateReset2=v,e.inflateResetKeep=y,e.inflateInit=function(t){return x(t,15)},e.inflateInit2=x,e.inflate=function(t,e){var r,m,g,_,y,w,v,x,E,k,S,I,T,B,R,P,O,L,C,U,D,z,N,F,j=0,G=new i.Buf8(4),H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return l;(r=t.state).mode===d&&(r.mode=13),y=t.next_out,g=t.output,v=t.avail_out,_=t.next_in,m=t.input,w=t.avail_in,x=r.hold,E=r.bits,k=w,S=v,z=u;t:for(;;)switch(r.mode){case c:if(0===r.wrap){r.mode=13;break}for(;E<16;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(2&r.wrap&&35615===x){r.check=0,G[0]=255&x,G[1]=x>>>8&255,r.check=a(r.check,G,2,0),x=0,E=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&x)<<8)+(x>>8))%31){t.msg="incorrect header check",r.mode=p;break}if(8!=(15&x)){t.msg="unknown compression method",r.mode=p;break}if(E-=4,D=8+(15&(x>>>=4)),0===r.wbits)r.wbits=D;else if(D>r.wbits){t.msg="invalid window size",r.mode=p;break}r.dmax=1<<D,t.adler=r.check=1,r.mode=512&x?10:d,x=0,E=0;break;case 2:for(;E<16;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(r.flags=x,8!=(255&r.flags)){t.msg="unknown compression method",r.mode=p;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=p;break}r.head&&(r.head.text=x>>8&1),512&r.flags&&(G[0]=255&x,G[1]=x>>>8&255,r.check=a(r.check,G,2,0)),x=0,E=0,r.mode=3;case 3:for(;E<32;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}r.head&&(r.head.time=x),512&r.flags&&(G[0]=255&x,G[1]=x>>>8&255,G[2]=x>>>16&255,G[3]=x>>>24&255,r.check=a(r.check,G,4,0)),x=0,E=0,r.mode=4;case 4:for(;E<16;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}r.head&&(r.head.xflags=255&x,r.head.os=x>>8),512&r.flags&&(G[0]=255&x,G[1]=x>>>8&255,r.check=a(r.check,G,2,0)),x=0,E=0,r.mode=5;case 5:if(1024&r.flags){for(;E<16;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}r.length=x,r.head&&(r.head.extra_len=x),512&r.flags&&(G[0]=255&x,G[1]=x>>>8&255,r.check=a(r.check,G,2,0)),x=0,E=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&((I=r.length)>w&&(I=w),I&&(r.head&&(D=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),i.arraySet(r.head.extra,m,_,I,D)),512&r.flags&&(r.check=a(r.check,m,I,_)),w-=I,_+=I,r.length-=I),r.length))break t;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===w)break t;I=0;do{D=m[_+I++],r.head&&D&&r.length<65536&&(r.head.name+=String.fromCharCode(D))}while(D&&I<w);if(512&r.flags&&(r.check=a(r.check,m,I,_)),w-=I,_+=I,D)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===w)break t;I=0;do{D=m[_+I++],r.head&&D&&r.length<65536&&(r.head.comment+=String.fromCharCode(D))}while(D&&I<w);if(512&r.flags&&(r.check=a(r.check,m,I,_)),w-=I,_+=I,D)break t}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;E<16;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(x!==(65535&r.check)){t.msg="header crc mismatch",r.mode=p;break}x=0,E=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=d;break;case 10:for(;E<32;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}t.adler=r.check=b(x),x=0,E=0,r.mode=11;case 11:if(0===r.havedict)return t.next_out=y,t.avail_out=v,t.next_in=_,t.avail_in=w,r.hold=x,r.bits=E,2;t.adler=r.check=1,r.mode=d;case d:if(5===e||6===e)break t;case 13:if(r.last){x>>>=7&E,E-=7&E,r.mode=27;break}for(;E<3;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}switch(r.last=1&x,E-=1,3&(x>>>=1)){case 0:r.mode=14;break;case 1:if(M(r),r.mode=20,6===e){x>>>=2,E-=2;break t}break;case 2:r.mode=17;break;case 3:t.msg="invalid block type",r.mode=p}x>>>=2,E-=2;break;case 14:for(x>>>=7&E,E-=7&E;E<32;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if((65535&x)!=(x>>>16^65535)){t.msg="invalid stored block lengths",r.mode=p;break}if(r.length=65535&x,x=0,E=0,r.mode=15,6===e)break t;case 15:r.mode=16;case 16:if(I=r.length){if(I>w&&(I=w),I>v&&(I=v),0===I)break t;i.arraySet(g,m,_,I,y),w-=I,_+=I,v-=I,y+=I,r.length-=I;break}r.mode=d;break;case 17:for(;E<14;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(r.nlen=257+(31&x),x>>>=5,E-=5,r.ndist=1+(31&x),x>>>=5,E-=5,r.ncode=4+(15&x),x>>>=4,E-=4,r.nlen>286||r.ndist>30){t.msg="too many length or distance symbols",r.mode=p;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;E<3;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}r.lens[H[r.have++]]=7&x,x>>>=3,E-=3}for(;r.have<19;)r.lens[H[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,N={bits:r.lenbits},z=s(0,r.lens,0,19,r.lencode,0,r.work,N),r.lenbits=N.bits,z){t.msg="invalid code lengths set",r.mode=p;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;P=(j=r.lencode[x&(1<<r.lenbits)-1])>>>16&255,O=65535&j,!((R=j>>>24)<=E);){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(O<16)x>>>=R,E-=R,r.lens[r.have++]=O;else{if(16===O){for(F=R+2;E<F;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(x>>>=R,E-=R,0===r.have){t.msg="invalid bit length repeat",r.mode=p;break}D=r.lens[r.have-1],I=3+(3&x),x>>>=2,E-=2}else if(17===O){for(F=R+3;E<F;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}E-=R,D=0,I=3+(7&(x>>>=R)),x>>>=3,E-=3}else{for(F=R+7;E<F;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}E-=R,D=0,I=11+(127&(x>>>=R)),x>>>=7,E-=7}if(r.have+I>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=p;break}for(;I--;)r.lens[r.have++]=D}}if(r.mode===p)break;if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=p;break}if(r.lenbits=9,N={bits:r.lenbits},z=s(h,r.lens,0,r.nlen,r.lencode,0,r.work,N),r.lenbits=N.bits,z){t.msg="invalid literal/lengths set",r.mode=p;break}if(r.distbits=6,r.distcode=r.distdyn,N={bits:r.distbits},z=s(f,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,N),r.distbits=N.bits,z){t.msg="invalid distances set",r.mode=p;break}if(r.mode=20,6===e)break t;case 20:r.mode=21;case 21:if(w>=6&&v>=258){t.next_out=y,t.avail_out=v,t.next_in=_,t.avail_in=w,r.hold=x,r.bits=E,o(t,S),y=t.next_out,g=t.output,v=t.avail_out,_=t.next_in,m=t.input,w=t.avail_in,x=r.hold,E=r.bits,r.mode===d&&(r.back=-1);break}for(r.back=0;P=(j=r.lencode[x&(1<<r.lenbits)-1])>>>16&255,O=65535&j,!((R=j>>>24)<=E);){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(P&&0==(240&P)){for(L=R,C=P,U=O;P=(j=r.lencode[U+((x&(1<<L+C)-1)>>L)])>>>16&255,O=65535&j,!(L+(R=j>>>24)<=E);){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}x>>>=L,E-=L,r.back+=L}if(x>>>=R,E-=R,r.back+=R,r.length=O,0===P){r.mode=26;break}if(32&P){r.back=-1,r.mode=d;break}if(64&P){t.msg="invalid literal/length code",r.mode=p;break}r.extra=15&P,r.mode=22;case 22:if(r.extra){for(F=r.extra;E<F;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}r.length+=x&(1<<r.extra)-1,x>>>=r.extra,E-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;P=(j=r.distcode[x&(1<<r.distbits)-1])>>>16&255,O=65535&j,!((R=j>>>24)<=E);){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(0==(240&P)){for(L=R,C=P,U=O;P=(j=r.distcode[U+((x&(1<<L+C)-1)>>L)])>>>16&255,O=65535&j,!(L+(R=j>>>24)<=E);){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}x>>>=L,E-=L,r.back+=L}if(x>>>=R,E-=R,r.back+=R,64&P){t.msg="invalid distance code",r.mode=p;break}r.offset=O,r.extra=15&P,r.mode=24;case 24:if(r.extra){for(F=r.extra;E<F;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}r.offset+=x&(1<<r.extra)-1,x>>>=r.extra,E-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=p;break}r.mode=25;case 25:if(0===v)break t;if(I=S-v,r.offset>I){if((I=r.offset-I)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=p;break}I>r.wnext?(I-=r.wnext,T=r.wsize-I):T=r.wnext-I,I>r.length&&(I=r.length),B=r.window}else B=g,T=y-r.offset,I=r.length;I>v&&(I=v),v-=I,r.length-=I;do{g[y++]=B[T++]}while(--I);0===r.length&&(r.mode=21);break;case 26:if(0===v)break t;g[y++]=r.length,v--,r.mode=21;break;case 27:if(r.wrap){for(;E<32;){if(0===w)break t;w--,x|=m[_++]<<E,E+=8}if(S-=v,t.total_out+=S,r.total+=S,S&&(t.adler=r.check=r.flags?a(r.check,g,S,y-S):n(r.check,g,S,y-S)),S=v,(r.flags?x:b(x))!==r.check){t.msg="incorrect data check",r.mode=p;break}x=0,E=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;E<32;){if(0===w)break t;w--,x+=m[_++]<<E,E+=8}if(x!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=p;break}x=0,E=0}r.mode=29;case 29:z=1;break t;case p:z=-3;break t;case 31:return-4;default:return l}return t.next_out=y,t.avail_out=v,t.next_in=_,t.avail_in=w,r.hold=x,r.bits=E,(r.wsize||S!==t.avail_out&&r.mode<p&&(r.mode<27||4!==e))&&A(t,t.output,t.next_out,S-t.avail_out)?(r.mode=31,-4):(k-=t.avail_in,S-=t.avail_out,t.total_in+=k,t.total_out+=S,r.total+=S,r.wrap&&S&&(t.adler=r.check=r.flags?a(r.check,g,S,t.next_out-S):n(r.check,g,S,t.next_out-S)),t.data_type=r.bits+(r.last?64:0)+(r.mode===d?128:0)+(20===r.mode||15===r.mode?256:0),(0===k&&0===S||4===e)&&z===u&&(z=-5),z)},e.inflateEnd=function(t){if(!t||!t.state)return l;var e=t.state;return e.window&&(e.window=null),t.state=null,u},e.inflateGetHeader=function(t,e){var r;return t&&t.state?0==(2&(r=t.state).wrap)?l:(r.head=e,e.done=!1,u):l},e.inflateSetDictionary=function(t,e){var r,i=e.length;return t&&t.state?0!==(r=t.state).wrap&&11!==r.mode?l:11===r.mode&&n(1,e,i,0)!==r.check?-3:A(t,e,i,i)?(r.mode=31,-4):(r.havedict=1,u):l},e.inflateInfo="pako inflate (from Nodeca project)"},881:(t,e,r)=>{"use strict";var i=r(9761),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(t,e,r,h,f,u,l,c){var d,p,m,g,b,_,y,w,v,x=c.bits,E=0,k=0,S=0,M=0,A=0,I=0,T=0,B=0,R=0,P=0,O=null,L=0,C=new i.Buf16(16),U=new i.Buf16(16),D=null,z=0;for(E=0;E<=15;E++)C[E]=0;for(k=0;k<h;k++)C[e[r+k]]++;for(A=x,M=15;M>=1&&0===C[M];M--);if(A>M&&(A=M),0===M)return f[u++]=20971520,f[u++]=20971520,c.bits=1,0;for(S=1;S<M&&0===C[S];S++);for(A<S&&(A=S),B=1,E=1;E<=15;E++)if(B<<=1,(B-=C[E])<0)return-1;if(B>0&&(0===t||1!==M))return-1;for(U[1]=0,E=1;E<15;E++)U[E+1]=U[E]+C[E];for(k=0;k<h;k++)0!==e[r+k]&&(l[U[e[r+k]]++]=k);if(0===t?(O=D=l,_=19):1===t?(O=n,L-=257,D=a,z-=257,_=256):(O=o,D=s,_=-1),P=0,k=0,E=S,b=u,I=A,T=0,m=-1,g=(R=1<<A)-1,1===t&&R>852||2===t&&R>592)return 1;for(;;){y=E-T,l[k]<_?(w=0,v=l[k]):l[k]>_?(w=D[z+l[k]],v=O[L+l[k]]):(w=96,v=0),d=1<<E-T,S=p=1<<I;do{f[b+(P>>T)+(p-=d)]=y<<24|w<<16|v|0}while(0!==p);for(d=1<<E-1;P&d;)d>>=1;if(0!==d?(P&=d-1,P+=d):P=0,k++,0==--C[E]){if(E===M)break;E=e[r+l[k]]}if(E>A&&(P&g)!==m){for(0===T&&(T=A),b+=S,B=1<<(I=E-T);I+T<M&&!((B-=C[I+T])<=0);)I++,B<<=1;if(R+=1<<I,1===t&&R>852||2===t&&R>592)return 1;f[m=P&g]=A<<24|I<<16|b-u|0}}return 0!==P&&(f[b+P]=E-T<<24|64<<16|0),c.bits=A,0}},2950:t=>{"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},9564:(t,e,r)=>{"use strict";var i=r(9761);function n(t){for(var e=t.length;--e>=0;)t[e]=0}var a=0,o=256,s=o+1+29,h=30,f=19,u=2*s+1,l=15,c=16,d=256,p=16,m=17,g=18,b=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],_=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],v=new Array(2*(s+2));n(v);var x=new Array(2*h);n(x);var E=new Array(512);n(E);var k=new Array(256);n(k);var S=new Array(29);n(S);var M,A,I,T=new Array(h);function B(t,e,r,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function R(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function P(t){return t<256?E[t]:E[256+(t>>>7)]}function O(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function L(t,e,r){t.bi_valid>c-r?(t.bi_buf|=e<<t.bi_valid&65535,O(t,t.bi_buf),t.bi_buf=e>>c-t.bi_valid,t.bi_valid+=r-c):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function C(t,e,r){L(t,r[2*e],r[2*e+1])}function U(t,e){var r=0;do{r|=1&t,t>>>=1,r<<=1}while(--e>0);return r>>>1}function D(t,e,r){var i,n,a=new Array(l+1),o=0;for(i=1;i<=l;i++)a[i]=o=o+r[i-1]<<1;for(n=0;n<=e;n++){var s=t[2*n+1];0!==s&&(t[2*n]=U(a[s]++,s))}}function z(t){var e;for(e=0;e<s;e++)t.dyn_ltree[2*e]=0;for(e=0;e<h;e++)t.dyn_dtree[2*e]=0;for(e=0;e<f;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*d]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function N(t){t.bi_valid>8?O(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function F(t,e,r,i){var n=2*e,a=2*r;return t[n]<t[a]||t[n]===t[a]&&i[e]<=i[r]}function j(t,e,r){for(var i=t.heap[r],n=r<<1;n<=t.heap_len&&(n<t.heap_len&&F(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!F(e,i,t.heap[n],t.depth));)t.heap[r]=t.heap[n],r=n,n<<=1;t.heap[r]=i}function G(t,e,r){var i,n,a,s,h=0;if(0!==t.last_lit)do{i=t.pending_buf[t.d_buf+2*h]<<8|t.pending_buf[t.d_buf+2*h+1],n=t.pending_buf[t.l_buf+h],h++,0===i?C(t,n,e):(C(t,(a=k[n])+o+1,e),0!==(s=b[a])&&L(t,n-=S[a],s),C(t,a=P(--i),r),0!==(s=_[a])&&L(t,i-=T[a],s))}while(h<t.last_lit);C(t,d,e)}function H(t,e){var r,i,n,a=e.dyn_tree,o=e.stat_desc.static_tree,s=e.stat_desc.has_stree,h=e.stat_desc.elems,f=-1;for(t.heap_len=0,t.heap_max=u,r=0;r<h;r++)0!==a[2*r]?(t.heap[++t.heap_len]=f=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)a[2*(n=t.heap[++t.heap_len]=f<2?++f:0)]=1,t.depth[n]=0,t.opt_len--,s&&(t.static_len-=o[2*n+1]);for(e.max_code=f,r=t.heap_len>>1;r>=1;r--)j(t,a,r);n=h;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],j(t,a,1),i=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=i,a[2*n]=a[2*r]+a[2*i],t.depth[n]=(t.depth[r]>=t.depth[i]?t.depth[r]:t.depth[i])+1,a[2*r+1]=a[2*i+1]=n,t.heap[1]=n++,j(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,i,n,a,o,s,h=e.dyn_tree,f=e.max_code,c=e.stat_desc.static_tree,d=e.stat_desc.has_stree,p=e.stat_desc.extra_bits,m=e.stat_desc.extra_base,g=e.stat_desc.max_length,b=0;for(a=0;a<=l;a++)t.bl_count[a]=0;for(h[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<u;r++)(a=h[2*h[2*(i=t.heap[r])+1]+1]+1)>g&&(a=g,b++),h[2*i+1]=a,i>f||(t.bl_count[a]++,o=0,i>=m&&(o=p[i-m]),s=h[2*i],t.opt_len+=s*(a+o),d&&(t.static_len+=s*(c[2*i+1]+o)));if(0!==b){do{for(a=g-1;0===t.bl_count[a];)a--;t.bl_count[a]--,t.bl_count[a+1]+=2,t.bl_count[g]--,b-=2}while(b>0);for(a=g;0!==a;a--)for(i=t.bl_count[a];0!==i;)(n=t.heap[--r])>f||(h[2*n+1]!==a&&(t.opt_len+=(a-h[2*n+1])*h[2*n],h[2*n+1]=a),i--)}}(t,e),D(a,f,t.bl_count)}function W(t,e,r){var i,n,a=-1,o=e[1],s=0,h=7,f=4;for(0===o&&(h=138,f=3),e[2*(r+1)+1]=65535,i=0;i<=r;i++)n=o,o=e[2*(i+1)+1],++s<h&&n===o||(s<f?t.bl_tree[2*n]+=s:0!==n?(n!==a&&t.bl_tree[2*n]++,t.bl_tree[2*p]++):s<=10?t.bl_tree[2*m]++:t.bl_tree[2*g]++,s=0,a=n,0===o?(h=138,f=3):n===o?(h=6,f=3):(h=7,f=4))}function q(t,e,r){var i,n,a=-1,o=e[1],s=0,h=7,f=4;for(0===o&&(h=138,f=3),i=0;i<=r;i++)if(n=o,o=e[2*(i+1)+1],!(++s<h&&n===o)){if(s<f)do{C(t,n,t.bl_tree)}while(0!=--s);else 0!==n?(n!==a&&(C(t,n,t.bl_tree),s--),C(t,p,t.bl_tree),L(t,s-3,2)):s<=10?(C(t,m,t.bl_tree),L(t,s-3,3)):(C(t,g,t.bl_tree),L(t,s-11,7));s=0,a=n,0===o?(h=138,f=3):n===o?(h=6,f=3):(h=7,f=4)}}n(T);var Z=!1;function Y(t,e,r,n){L(t,(a<<1)+(n?1:0),3),function(t,e,r,n){N(t),O(t,r),O(t,~r),i.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}(t,e,r)}e._tr_init=function(t){Z||(function(){var t,e,r,i,n,a=new Array(l+1);for(r=0,i=0;i<28;i++)for(S[i]=r,t=0;t<1<<b[i];t++)k[r++]=i;for(k[r-1]=i,n=0,i=0;i<16;i++)for(T[i]=n,t=0;t<1<<_[i];t++)E[n++]=i;for(n>>=7;i<h;i++)for(T[i]=n<<7,t=0;t<1<<_[i]-7;t++)E[256+n++]=i;for(e=0;e<=l;e++)a[e]=0;for(t=0;t<=143;)v[2*t+1]=8,t++,a[8]++;for(;t<=255;)v[2*t+1]=9,t++,a[9]++;for(;t<=279;)v[2*t+1]=7,t++,a[7]++;for(;t<=287;)v[2*t+1]=8,t++,a[8]++;for(D(v,s+1,a),t=0;t<h;t++)x[2*t+1]=5,x[2*t]=U(t,5);M=new B(v,b,o+1,s,l),A=new B(x,_,0,h,l),I=new B(new Array(0),y,0,f,7)}(),Z=!0),t.l_desc=new R(t.dyn_ltree,M),t.d_desc=new R(t.dyn_dtree,A),t.bl_desc=new R(t.bl_tree,I),t.bi_buf=0,t.bi_valid=0,z(t)},e._tr_stored_block=Y,e._tr_flush_block=function(t,e,r,i){var n,a,s=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,r=4093624447;for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<o;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),H(t,t.l_desc),H(t,t.d_desc),s=function(t){var e;for(W(t,t.dyn_ltree,t.l_desc.max_code),W(t,t.dyn_dtree,t.d_desc.max_code),H(t,t.bl_desc),e=f-1;e>=3&&0===t.bl_tree[2*w[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7>>>3,(a=t.static_len+3+7>>>3)<=n&&(n=a)):n=a=r+5,r+4<=n&&-1!==e?Y(t,e,r,i):4===t.strategy||a===n?(L(t,2+(i?1:0),3),G(t,v,x)):(L(t,4+(i?1:0),3),function(t,e,r,i){var n;for(L(t,e-257,5),L(t,r-1,5),L(t,i-4,4),n=0;n<i;n++)L(t,t.bl_tree[2*w[n]+1],3);q(t,t.dyn_ltree,e-1),q(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),G(t,t.dyn_ltree,t.dyn_dtree)),z(t),i&&N(t)},e._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(k[r]+o+1)]++,t.dyn_dtree[2*P(e)]++),t.last_lit===t.lit_bufsize-1},e._tr_align=function(t){L(t,2,3),C(t,d,v),function(t){16===t.bi_valid?(O(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},744:t=>{"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},4398:t=>{function e(t,e){if(!(t=t.replace(/\t+/g," ").trim()))return null;var i=t.indexOf(" ");if(-1===i)throw new Error("no named row at line "+e);var n=t.substring(0,i);t=(t=(t=(t=t.substring(i+1)).replace(/letter=[\'\"]\S+[\'\"]/gi,"")).split("=")).map((function(t){return t.trim().match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)}));for(var a=[],o=0;o<t.length;o++){var s=t[o];0===o?a.push({key:s[0],data:""}):o===t.length-1?a[a.length-1].data=r(s[0]):(a[a.length-1].data=r(s[0]),a.push({key:s[1],data:""}))}var h={key:n,data:{}};return a.forEach((function(t){h.data[t.key]=t.data})),h}function r(t){return t&&0!==t.length?0===t.indexOf('"')||0===t.indexOf("'")?t.substring(1,t.length-1):-1!==t.indexOf(",")?function(t){return t.split(",").map((function(t){return parseInt(t,10)}))}(t):parseInt(t,10):""}t.exports=function(t){if(!t)throw new Error("no data provided");var r={pages:[],chars:[],kernings:[]},i=(t=t.toString().trim()).split(/\r\n?|\n/g);if(0===i.length)throw new Error("no data in BMFont file");for(var n=0;n<i.length;n++){var a=e(i[n],n);if(a)if("page"===a.key){if("number"!=typeof a.data.id)throw new Error("malformed file at line "+n+" -- needs page id=N");if("string"!=typeof a.data.file)throw new Error("malformed file at line "+n+' -- needs page file="path"');r.pages[a.data.id]=a.data.file}else"chars"===a.key||"kernings"===a.key||("char"===a.key?r.chars.push(a.data):"kerning"===a.key?r.kernings.push(a.data):r[a.key]=a.data)}return r}},8438:t=>{var e=[66,77,70];function r(t,e,r){if(r>e.length-1)return 0;var n=e.readUInt8(r++),a=e.readInt32LE(r);switch(r+=4,n){case 1:t.info=function(t,e){var r={};r.size=t.readInt16LE(e);var n=t.readUInt8(e+2);return r.smooth=n>>7&1,r.unicode=n>>6&1,r.italic=n>>5&1,r.bold=n>>4&1,n>>3&1&&(r.fixedHeight=1),r.charset=t.readUInt8(e+3)||"",r.stretchH=t.readUInt16LE(e+4),r.aa=t.readUInt8(e+6),r.padding=[t.readInt8(e+7),t.readInt8(e+8),t.readInt8(e+9),t.readInt8(e+10)],r.spacing=[t.readInt8(e+11),t.readInt8(e+12)],r.outline=t.readUInt8(e+13),r.face=function(t,e){return i(t,e).toString("utf8")}(t,e+14),r}(e,r);break;case 2:t.common=function(t,e){var r={};return r.lineHeight=t.readUInt16LE(e),r.base=t.readUInt16LE(e+2),r.scaleW=t.readUInt16LE(e+4),r.scaleH=t.readUInt16LE(e+6),r.pages=t.readUInt16LE(e+8),t.readUInt8(e+10),r.packed=0,r.alphaChnl=t.readUInt8(e+11),r.redChnl=t.readUInt8(e+12),r.greenChnl=t.readUInt8(e+13),r.blueChnl=t.readUInt8(e+14),r}(e,r);break;case 3:t.pages=function(t,e,r){for(var n=[],a=i(t,e),o=a.length+1,s=r/o,h=0;h<s;h++)n[h]=t.slice(e,e+a.length).toString("utf8"),e+=o;return n}(e,r,a);break;case 4:t.chars=function(t,e,r){for(var i=[],n=r/20,a=0;a<n;a++){var o={},s=20*a;o.id=t.readUInt32LE(e+0+s),o.x=t.readUInt16LE(e+4+s),o.y=t.readUInt16LE(e+6+s),o.width=t.readUInt16LE(e+8+s),o.height=t.readUInt16LE(e+10+s),o.xoffset=t.readInt16LE(e+12+s),o.yoffset=t.readInt16LE(e+14+s),o.xadvance=t.readInt16LE(e+16+s),o.page=t.readUInt8(e+18+s),o.chnl=t.readUInt8(e+19+s),i[a]=o}return i}(e,r,a);break;case 5:t.kernings=function(t,e,r){for(var i=[],n=r/10,a=0;a<n;a++){var o={},s=10*a;o.first=t.readUInt32LE(e+0+s),o.second=t.readUInt32LE(e+4+s),o.amount=t.readInt16LE(e+8+s),i[a]=o}return i}(e,r,a)}return 5+a}function i(t,e){for(var r=e;r<t.length&&0!==t[r];r++);return t.slice(e,r)}t.exports=function(t){if(t.length<6)throw new Error("invalid buffer length for BMFont");var i=e.every((function(e,r){return t.readUInt8(r)===e}));if(!i)throw new Error("BMFont missing BMF byte header");var n=3;if(t.readUInt8(n++)>3)throw new Error("Only supports BMFont Binary v3 (BMFont App v1.10)");for(var a={kernings:[],chars:[]},o=0;o<5;o++)n+=r(a,t,n);return a}},5947:(t,e,r)=>{var i=r(403),n=r(1596),a={scaleh:"scaleH",scalew:"scaleW",stretchh:"stretchH",lineheight:"lineHeight",alphachnl:"alphaChnl",redchnl:"redChnl",greenchnl:"greenChnl",bluechnl:"blueChnl"};function o(t){var e=function(t){for(var e=[],r=0;r<t.attributes.length;r++)e.push(t.attributes[r]);return e}(t);return e.reduce((function(t,e){var r;return t[(r=e.nodeName,a[r.toLowerCase()]||r)]=e.nodeValue,t}),{})}t.exports=function(t){t=t.toString();var e=n(t),r={pages:[],chars:[],kernings:[]};["info","common"].forEach((function(t){var n=e.getElementsByTagName(t)[0];n&&(r[t]=i(o(n)))}));var a=e.getElementsByTagName("pages")[0];if(!a)throw new Error("malformed file -- no <pages> element");for(var s=a.getElementsByTagName("page"),h=0;h<s.length;h++){var f=s[h],u=parseInt(f.getAttribute("id"),10),l=f.getAttribute("file");if(isNaN(u))throw new Error('malformed file -- page "id" attribute is NaN');if(!l)throw new Error('malformed file -- needs page "file" attribute');r.pages[parseInt(u,10)]=l}return["chars","kernings"].forEach((function(t){var n=e.getElementsByTagName(t)[0];if(n)for(var a=t.substring(0,t.length-1),s=n.getElementsByTagName(a),h=0;h<s.length;h++){var f=s[h];r[t].push(i(o(f)))}})),r}},403:t=>{var e="chasrset";t.exports=function(t){for(var r in e in t&&(t.charset=t[e],delete t[e]),t)"face"!==r&&"charset"!==r&&(t[r]="padding"===r||"spacing"===r?t[r].split(",").map((function(t){return parseInt(t,10)})):parseInt(t[r],10));return t}},4655:(t,e,r)=>{var i=r(311),n=r(3243);t.exports=function(t){if(!t)return{};var e={};return n(i(t).split("\n"),(function(t){var r,n=t.indexOf(":"),a=i(t.slice(0,n)).toLowerCase(),o=i(t.slice(n+1));void 0===e[a]?e[a]=o:(r=e[a],"[object Array]"===Object.prototype.toString.call(r)?e[a].push(o):e[a]=[e[a],o])})),e}},1023:(t,e,r)=>{"use strict";var i=r(4406);function n(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function a(t,e){for(var r,i="",n=0,a=-1,o=0,s=0;s<=t.length;++s){if(s<t.length)r=t.charCodeAt(s);else{if(47===r)break;r=47}if(47===r){if(a===s-1||1===o);else if(a!==s-1&&2===o){if(i.length<2||2!==n||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2))if(i.length>2){var h=i.lastIndexOf("/");if(h!==i.length-1){-1===h?(i="",n=0):n=(i=i.slice(0,h)).length-1-i.lastIndexOf("/"),a=s,o=0;continue}}else if(2===i.length||1===i.length){i="",n=0,a=s,o=0;continue}e&&(i.length>0?i+="/..":i="..",n=2)}else i.length>0?i+="/"+t.slice(a+1,s):i=t.slice(a+1,s),n=s-a-1;a=s,o=0}else 46===r&&-1!==o?++o:o=-1}return i}var o={resolve:function(){for(var t,e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s;o>=0?s=arguments[o]:(void 0===t&&(t=i.cwd()),s=t),n(s),0!==s.length&&(e=s+"/"+e,r=47===s.charCodeAt(0))}return e=a(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(t){if(n(t),0===t.length)return".";var e=47===t.charCodeAt(0),r=47===t.charCodeAt(t.length-1);return 0!==(t=a(t,!e)).length||e||(t="."),t.length>0&&r&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return n(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,e=0;e<arguments.length;++e){var r=arguments[e];n(r),r.length>0&&(void 0===t?t=r:t+="/"+r)}return void 0===t?".":o.normalize(t)},relative:function(t,e){if(n(t),n(e),t===e)return"";if((t=o.resolve(t))===(e=o.resolve(e)))return"";for(var r=1;r<t.length&&47===t.charCodeAt(r);++r);for(var i=t.length,a=i-r,s=1;s<e.length&&47===e.charCodeAt(s);++s);for(var h=e.length-s,f=a<h?a:h,u=-1,l=0;l<=f;++l){if(l===f){if(h>f){if(47===e.charCodeAt(s+l))return e.slice(s+l+1);if(0===l)return e.slice(s+l)}else a>f&&(47===t.charCodeAt(r+l)?u=l:0===l&&(u=0));break}var c=t.charCodeAt(r+l);if(c!==e.charCodeAt(s+l))break;47===c&&(u=l)}var d="";for(l=r+u+1;l<=i;++l)l!==i&&47!==t.charCodeAt(l)||(0===d.length?d+="..":d+="/..");return d.length>0?d+e.slice(s+u):(s+=u,47===e.charCodeAt(s)&&++s,e.slice(s))},_makeLong:function(t){return t},dirname:function(t){if(n(t),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,i=-1,a=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!a){i=o;break}}else a=!1;return-1===i?r?"/":".":r&&1===i?"//":t.slice(0,i)},basename:function(t,e){if(void 0!==e&&"string"!=typeof e)throw new TypeError('"ext" argument must be a string');n(t);var r,i=0,a=-1,o=!0;if(void 0!==e&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var s=e.length-1,h=-1;for(r=t.length-1;r>=0;--r){var f=t.charCodeAt(r);if(47===f){if(!o){i=r+1;break}}else-1===h&&(o=!1,h=r+1),s>=0&&(f===e.charCodeAt(s)?-1==--s&&(a=r):(s=-1,a=h))}return i===a?a=h:-1===a&&(a=t.length),t.slice(i,a)}for(r=t.length-1;r>=0;--r)if(47===t.charCodeAt(r)){if(!o){i=r+1;break}}else-1===a&&(o=!1,a=r+1);return-1===a?"":t.slice(i,a)},extname:function(t){n(t);for(var e=-1,r=0,i=-1,a=!0,o=0,s=t.length-1;s>=0;--s){var h=t.charCodeAt(s);if(47!==h)-1===i&&(a=!1,i=s+1),46===h?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!a){r=s+1;break}}return-1===e||-1===i||0===o||1===o&&e===i-1&&e===r+1?"":t.slice(e,i)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var r=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+i:r+"/"+i:i}(0,t)},parse:function(t){n(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return e;var r,i=t.charCodeAt(0),a=47===i;a?(e.root="/",r=1):r=0;for(var o=-1,s=0,h=-1,f=!0,u=t.length-1,l=0;u>=r;--u)if(47!==(i=t.charCodeAt(u)))-1===h&&(f=!1,h=u+1),46===i?-1===o?o=u:1!==l&&(l=1):-1!==o&&(l=-1);else if(!f){s=u+1;break}return-1===o||-1===h||0===l||1===l&&o===h-1&&o===s+1?-1!==h&&(e.base=e.name=0===s&&a?t.slice(1,h):t.slice(s,h)):(0===s&&a?(e.name=t.slice(1,o),e.base=t.slice(1,h)):(e.name=t.slice(s,o),e.base=t.slice(s,h)),e.ext=t.slice(o,h)),s>0?e.dir=t.slice(0,s-1):a&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,t.exports=o},482:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Deferred=void 0,e.Deferred=class{constructor(){this.resolve=()=>null,this.reject=()=>null,this.promise=new Promise(((t,e)=>{this.reject=e,this.resolve=t}))}}},5567:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EndOfStreamError=e.defaultMessages=void 0,e.defaultMessages="End-Of-Stream";class r extends Error{constructor(){super(e.defaultMessages)}}e.EndOfStreamError=r},4514:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StreamReader=e.EndOfStreamError=void 0;const i=r(5567),n=r(482);var a=r(5567);Object.defineProperty(e,"EndOfStreamError",{enumerable:!0,get:function(){return a.EndOfStreamError}}),e.StreamReader=class{constructor(t){if(this.s=t,this.deferred=null,this.endOfStream=!1,this.peekQueue=[],!t.read||!t.once)throw new Error("Expected an instance of stream.Readable");this.s.once("end",(()=>this.reject(new i.EndOfStreamError))),this.s.once("error",(t=>this.reject(t))),this.s.once("close",(()=>this.reject(new Error("Stream closed"))))}async peek(t,e,r){const i=await this.read(t,e,r);return this.peekQueue.push(t.subarray(e,e+i)),i}async read(t,e,r){if(0===r)return 0;if(0===this.peekQueue.length&&this.endOfStream)throw new i.EndOfStreamError;let n=r,a=0;for(;this.peekQueue.length>0&&n>0;){const r=this.peekQueue.pop();if(!r)throw new Error("peekData should be defined");const i=Math.min(r.length,n);t.set(r.subarray(0,i),e+a),a+=i,n-=i,i<r.length&&this.peekQueue.push(r.subarray(i))}for(;n>0&&!this.endOfStream;){const r=Math.min(n,1048576),i=await this.readFromStream(t,e+a,r);if(a+=i,i<r)break;n-=i}return a}async readFromStream(t,e,r){const i=this.s.read(r);if(i)return t.set(i,e),i.length;{const i={buffer:t,offset:e,length:r,deferred:new n.Deferred};return this.deferred=i.deferred,this.s.once("readable",(()=>{this.readDeferred(i)})),i.deferred.promise}}readDeferred(t){const e=this.s.read(t.length);e?(t.buffer.set(e,t.offset),t.deferred.resolve(e.length),this.deferred=null):this.s.once("readable",(()=>{this.readDeferred(t)}))}reject(t){this.endOfStream=!0,this.deferred&&(this.deferred.reject(t),this.deferred=null)}}},4644:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StreamReader=e.EndOfStreamError=void 0;var i=r(5567);Object.defineProperty(e,"EndOfStreamError",{enumerable:!0,get:function(){return i.EndOfStreamError}});var n=r(4514);Object.defineProperty(e,"StreamReader",{enumerable:!0,get:function(){return n.StreamReader}})},1294:t=>{"use strict";function e(t,i,n,a,o,s){for(var h,f,u,l,c=Math.max(i-1,0),d=Math.max(n-1,0),p=Math.min(i+1,a-1),m=Math.min(n+1,o-1),g=4*(n*a+i),b=0,_=0,y=0,w=0,v=0,x=c;x<=p;x++)for(var E=d;E<=m;E++)if(x!==i||E!==n){var k=r(t,t,g,4*(E*a+x),!0);if(0===k?b++:k<0?y++:k>0&&_++,b>2)return!1;s&&(k<w&&(w=k,h=x,f=E),k>v&&(v=k,u=x,l=E))}return!s||0!==y&&0!==_&&(!e(t,h,f,a,o)&&!e(s,h,f,a,o)||!e(t,u,l,a,o)&&!e(s,u,l,a,o))}function r(t,e,r,s,h){var f=t[r+3]/255,u=e[s+3]/255,l=o(t[r+0],f),c=o(t[r+1],f),d=o(t[r+2],f),p=o(e[s+0],u),m=o(e[s+1],u),g=o(e[s+2],u),b=i(l,c,d)-i(p,m,g);if(h)return b;var _=n(l,c,d)-n(p,m,g),y=a(l,c,d)-a(p,m,g);return.5053*b*b+.299*_*_+.1957*y*y}function i(t,e,r){return.29889531*t+.58662247*e+.11448223*r}function n(t,e,r){return.59597799*t-.2741761*e-.32180189*r}function a(t,e,r){return.21147017*t-.52261711*e+.31114694*r}function o(t,e){return 255+(t-255)*e}function s(t,e,r,i,n){t[e+0]=r,t[e+1]=i,t[e+2]=n,t[e+3]=255}t.exports=function(t,n,a,h,f,u){u||(u={});for(var l=void 0===u.threshold?.1:u.threshold,c=35215*l*l,d=0,p=0;p<f;p++)for(var m=0;m<h;m++){var g=4*(p*h+m);if(r(t,n,g,g)>c)u.includeAA||!e(t,m,p,h,f,n)&&!e(n,m,p,h,f,t)?(a&&s(a,g,255,0,0),d++):a&&s(a,g,255,255,0);else if(a){var b=o((void 0,void 0,void 0,void 0,w=(_=t)[(y=g)+3]/255,i(o(_[y+0],w),o(_[y+1],w),o(_[y+2],w))),.1);s(a,g,b,b,b)}}var _,y,w;return d}},9902:(t,e,r)=>{t.exports=function t(e,r,i){function n(o,s){if(!r[o]){if(!e[o]){if(a)return a(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var f=r[o]={exports:{}};e[o][0].call(f.exports,(function(t){return n(e[o][1][t]||t)}),f,f.exports,t,e,r,i)}return r[o].exports}for(var a=void 0,o=0;o<i.length;o++)n(i[o]);return n}({1:[function(t,e,r){(function(e){(function(){"use strict";let i=t("./interlace"),n=[function(){},function(t,e,r,i){if(i===e.length)throw new Error("Ran out of data");let n=e[i];t[r]=n,t[r+1]=n,t[r+2]=n,t[r+3]=255},function(t,e,r,i){if(i+1>=e.length)throw new Error("Ran out of data");let n=e[i];t[r]=n,t[r+1]=n,t[r+2]=n,t[r+3]=e[i+1]},function(t,e,r,i){if(i+2>=e.length)throw new Error("Ran out of data");t[r]=e[i],t[r+1]=e[i+1],t[r+2]=e[i+2],t[r+3]=255},function(t,e,r,i){if(i+3>=e.length)throw new Error("Ran out of data");t[r]=e[i],t[r+1]=e[i+1],t[r+2]=e[i+2],t[r+3]=e[i+3]}],a=[function(){},function(t,e,r,i){let n=e[0];t[r]=n,t[r+1]=n,t[r+2]=n,t[r+3]=i},function(t,e,r){let i=e[0];t[r]=i,t[r+1]=i,t[r+2]=i,t[r+3]=e[1]},function(t,e,r,i){t[r]=e[0],t[r+1]=e[1],t[r+2]=e[2],t[r+3]=i},function(t,e,r){t[r]=e[0],t[r+1]=e[1],t[r+2]=e[2],t[r+3]=e[3]}];function o(t,e,r,i,a,o){let s=t.width,h=t.height,f=t.index;for(let t=0;t<h;t++)for(let h=0;h<s;h++){let s=r(h,t,f);n[i](e,a,s,o),o+=i}return o}function s(t,e,r,i,n,o){let s=t.width,h=t.height,f=t.index;for(let t=0;t<h;t++){for(let h=0;h<s;h++){let s=n.get(i),u=r(h,t,f);a[i](e,s,u,o)}n.resetAfterLine()}}r.dataToBitMap=function(t,r){let n,a,h=r.width,f=r.height,u=r.depth,l=r.bpp,c=r.interlace;8!==u&&(n=function(t,e){let r=[],i=0;function n(){if(i===t.length)throw new Error("Ran out of data");let n,a,o,s,h,f,u,l,c=t[i];switch(i++,e){default:throw new Error("unrecognised depth");case 16:u=t[i],i++,r.push((c<<8)+u);break;case 4:u=15&c,l=c>>4,r.push(l,u);break;case 2:h=3&c,f=c>>2&3,u=c>>4&3,l=c>>6&3,r.push(l,u,f,h);break;case 1:n=1&c,a=c>>1&1,o=c>>2&1,s=c>>3&1,h=c>>4&1,f=c>>5&1,u=c>>6&1,l=c>>7&1,r.push(l,u,f,h,s,o,a,n)}}return{get:function(t){for(;r.length<t;)n();let e=r.slice(0,t);return r=r.slice(t),e},resetAfterLine:function(){r.length=0},end:function(){if(i!==t.length)throw new Error("extra data found")}}}(t,u)),a=u<=8?e.alloc(h*f*4):new Uint16Array(h*f*4);let d,p,m=Math.pow(2,u)-1,g=0;if(c)d=i.getImagePasses(h,f),p=i.getInterlaceIterator(h,f);else{let t=0;p=function(){let e=t;return t+=4,e},d=[{width:h,height:f}]}for(let e=0;e<d.length;e++)8===u?g=o(d[e],a,p,l,t,g):s(d[e],a,p,l,n,m);if(8===u){if(g!==t.length)throw new Error("extra data found")}else n.end();return a}}).call(this)}).call(this,t("buffer").Buffer)},{"./interlace":11,buffer:33}],2:[function(t,e,r){(function(r){(function(){"use strict";let i=t("./constants");e.exports=function(t,e,n,a){let o=-1!==[i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(a.colorType);if(a.colorType===a.inputColorType){let e=function(){let t=new ArrayBuffer(2);return new DataView(t).setInt16(0,256,!0),256!==new Int16Array(t)[0]}();if(8===a.bitDepth||16===a.bitDepth&&e)return t}let s=16!==a.bitDepth?t:new Uint16Array(t.buffer),h=255,f=i.COLORTYPE_TO_BPP_MAP[a.inputColorType];4!==f||a.inputHasAlpha||(f=3);let u=i.COLORTYPE_TO_BPP_MAP[a.colorType];16===a.bitDepth&&(h=65535,u*=2);let l=r.alloc(e*n*u),c=0,d=0,p=a.bgColor||{};function m(){let t,e,r,n=h;switch(a.inputColorType){case i.COLORTYPE_COLOR_ALPHA:n=s[c+3],t=s[c],e=s[c+1],r=s[c+2];break;case i.COLORTYPE_COLOR:t=s[c],e=s[c+1],r=s[c+2];break;case i.COLORTYPE_ALPHA:n=s[c+1],t=s[c],e=t,r=t;break;case i.COLORTYPE_GRAYSCALE:t=s[c],e=t,r=t;break;default:throw new Error("input color type:"+a.inputColorType+" is not supported at present")}return a.inputHasAlpha&&(o||(n/=h,t=Math.min(Math.max(Math.round((1-n)*p.red+n*t),0),h),e=Math.min(Math.max(Math.round((1-n)*p.green+n*e),0),h),r=Math.min(Math.max(Math.round((1-n)*p.blue+n*r),0),h))),{red:t,green:e,blue:r,alpha:n}}void 0===p.red&&(p.red=h),void 0===p.green&&(p.green=h),void 0===p.blue&&(p.blue=h);for(let t=0;t<n;t++)for(let t=0;t<e;t++){let t=m();switch(a.colorType){case i.COLORTYPE_COLOR_ALPHA:case i.COLORTYPE_COLOR:8===a.bitDepth?(l[d]=t.red,l[d+1]=t.green,l[d+2]=t.blue,o&&(l[d+3]=t.alpha)):(l.writeUInt16BE(t.red,d),l.writeUInt16BE(t.green,d+2),l.writeUInt16BE(t.blue,d+4),o&&l.writeUInt16BE(t.alpha,d+6));break;case i.COLORTYPE_ALPHA:case i.COLORTYPE_GRAYSCALE:{let e=(t.red+t.green+t.blue)/3;8===a.bitDepth?(l[d]=e,o&&(l[d+1]=t.alpha)):(l.writeUInt16BE(e,d),o&&l.writeUInt16BE(t.alpha,d+2));break}default:throw new Error("unrecognised color Type "+a.colorType)}c+=f,d+=u}return l}}).call(this)}).call(this,t("buffer").Buffer)},{"./constants":4,buffer:33}],3:[function(t,e,r){(function(r,i){(function(){"use strict";let n=t("util"),a=t("stream"),o=e.exports=function(){a.call(this),this._buffers=[],this._buffered=0,this._reads=[],this._paused=!1,this._encoding="utf8",this.writable=!0};n.inherits(o,a),o.prototype.read=function(t,e){this._reads.push({length:Math.abs(t),allowLess:t<0,func:e}),r.nextTick(function(){this._process(),this._paused&&this._reads&&this._reads.length>0&&(this._paused=!1,this.emit("drain"))}.bind(this))},o.prototype.write=function(t,e){if(!this.writable)return this.emit("error",new Error("Stream not writable")),!1;let r;return r=i.isBuffer(t)?t:i.from(t,e||this._encoding),this._buffers.push(r),this._buffered+=r.length,this._process(),this._reads&&0===this._reads.length&&(this._paused=!0),this.writable&&!this._paused},o.prototype.end=function(t,e){t&&this.write(t,e),this.writable=!1,this._buffers&&(0===this._buffers.length?this._end():(this._buffers.push(null),this._process()))},o.prototype.destroySoon=o.prototype.end,o.prototype._end=function(){this._reads.length>0&&this.emit("error",new Error("Unexpected end of input")),this.destroy()},o.prototype.destroy=function(){this._buffers&&(this.writable=!1,this._reads=null,this._buffers=null,this.emit("close"))},o.prototype._processReadAllowingLess=function(t){this._reads.shift();let e=this._buffers[0];e.length>t.length?(this._buffered-=t.length,this._buffers[0]=e.slice(t.length),t.func.call(this,e.slice(0,t.length))):(this._buffered-=e.length,this._buffers.shift(),t.func.call(this,e))},o.prototype._processRead=function(t){this._reads.shift();let e=0,r=0,n=i.alloc(t.length);for(;e<t.length;){let i=this._buffers[r++],a=Math.min(i.length,t.length-e);i.copy(n,e,0,a),e+=a,a!==i.length&&(this._buffers[--r]=i.slice(a))}r>0&&this._buffers.splice(0,r),this._buffered-=t.length,t.func.call(this,n)},o.prototype._process=function(){try{for(;this._buffered>0&&this._reads&&this._reads.length>0;){let t=this._reads[0];if(t.allowLess)this._processReadAllowingLess(t);else{if(!(this._buffered>=t.length))break;this._processRead(t)}}this._buffers&&!this.writable&&this._end()}catch(t){this.emit("error",t)}}}).call(this)}).call(this,t("_process"),t("buffer").Buffer)},{_process:60,buffer:33,stream:61,util:81}],4:[function(t,e,r){"use strict";e.exports={PNG_SIGNATURE:[137,80,78,71,13,10,26,10],TYPE_IHDR:1229472850,TYPE_IEND:1229278788,TYPE_IDAT:1229209940,TYPE_PLTE:1347179589,TYPE_tRNS:1951551059,TYPE_gAMA:1732332865,COLORTYPE_GRAYSCALE:0,COLORTYPE_PALETTE:1,COLORTYPE_COLOR:2,COLORTYPE_ALPHA:4,COLORTYPE_PALETTE_COLOR:3,COLORTYPE_COLOR_ALPHA:6,COLORTYPE_TO_BPP_MAP:{0:1,2:3,3:1,4:2,6:4},GAMMA_DIVISION:1e5}},{}],5:[function(t,e,r){"use strict";let i=[];!function(){for(let t=0;t<256;t++){let e=t;for(let t=0;t<8;t++)1&e?e=3988292384^e>>>1:e>>>=1;i[t]=e}}();let n=e.exports=function(){this._crc=-1};n.prototype.write=function(t){for(let e=0;e<t.length;e++)this._crc=i[255&(this._crc^t[e])]^this._crc>>>8;return!0},n.prototype.crc32=function(){return-1^this._crc},n.crc32=function(t){let e=-1;for(let r=0;r<t.length;r++)e=i[255&(e^t[r])]^e>>>8;return-1^e}},{}],6:[function(t,e,r){(function(r){(function(){"use strict";let i=t("./paeth-predictor");let n={0:function(t,e,r,i,n){for(let a=0;a<r;a++)i[n+a]=t[e+a]},1:function(t,e,r,i,n,a){for(let o=0;o<r;o++){let r=o>=a?t[e+o-a]:0,s=t[e+o]-r;i[n+o]=s}},2:function(t,e,r,i,n){for(let a=0;a<r;a++){let o=e>0?t[e+a-r]:0,s=t[e+a]-o;i[n+a]=s}},3:function(t,e,r,i,n,a){for(let o=0;o<r;o++){let s=o>=a?t[e+o-a]:0,h=e>0?t[e+o-r]:0,f=t[e+o]-(s+h>>1);i[n+o]=f}},4:function(t,e,r,n,a,o){for(let s=0;s<r;s++){let h=s>=o?t[e+s-o]:0,f=e>0?t[e+s-r]:0,u=e>0&&s>=o?t[e+s-(r+o)]:0,l=t[e+s]-i(h,f,u);n[a+s]=l}}},a={0:function(t,e,r){let i=0,n=e+r;for(let r=e;r<n;r++)i+=Math.abs(t[r]);return i},1:function(t,e,r,i){let n=0;for(let a=0;a<r;a++){let r=a>=i?t[e+a-i]:0,o=t[e+a]-r;n+=Math.abs(o)}return n},2:function(t,e,r){let i=0,n=e+r;for(let a=e;a<n;a++){let n=e>0?t[a-r]:0,o=t[a]-n;i+=Math.abs(o)}return i},3:function(t,e,r,i){let n=0;for(let a=0;a<r;a++){let o=a>=i?t[e+a-i]:0,s=e>0?t[e+a-r]:0,h=t[e+a]-(o+s>>1);n+=Math.abs(h)}return n},4:function(t,e,r,n){let a=0;for(let o=0;o<r;o++){let s=o>=n?t[e+o-n]:0,h=e>0?t[e+o-r]:0,f=e>0&&o>=n?t[e+o-(r+n)]:0,u=t[e+o]-i(s,h,f);a+=Math.abs(u)}return a}};e.exports=function(t,e,i,o,s){let h;if("filterType"in o&&-1!==o.filterType){if("number"!=typeof o.filterType)throw new Error("unrecognised filter types");h=[o.filterType]}else h=[0,1,2,3,4];16===o.bitDepth&&(s*=2);let f=e*s,u=0,l=0,c=r.alloc((f+1)*i),d=h[0];for(let e=0;e<i;e++){if(h.length>1){let e=1/0;for(let r=0;r<h.length;r++){let i=a[h[r]](t,l,f,s);i<e&&(d=h[r],e=i)}}c[u]=d,u++,n[d](t,l,f,c,u,s),u+=f,l+=f}return c}}).call(this)}).call(this,t("buffer").Buffer)},{"./paeth-predictor":15,buffer:33}],7:[function(t,e,r){(function(r){(function(){"use strict";let i=t("util"),n=t("./chunkstream"),a=t("./filter-parse"),o=e.exports=function(t){n.call(this);let e=[],i=this;this._filter=new a(t,{read:this.read.bind(this),write:function(t){e.push(t)},complete:function(){i.emit("complete",r.concat(e))}}),this._filter.start()};i.inherits(o,n)}).call(this)}).call(this,t("buffer").Buffer)},{"./chunkstream":3,"./filter-parse":9,buffer:33,util:81}],8:[function(t,e,r){(function(e){(function(){"use strict";let i=t("./sync-reader"),n=t("./filter-parse");r.process=function(t,r){let a=[],o=new i(t);return new n(r,{read:o.read.bind(o),write:function(t){a.push(t)},complete:function(){}}).start(),o.process(),e.concat(a)}}).call(this)}).call(this,t("buffer").Buffer)},{"./filter-parse":9,"./sync-reader":22,buffer:33}],9:[function(t,e,r){(function(r){(function(){"use strict";let i=t("./interlace"),n=t("./paeth-predictor");function a(t,e,r){let i=t*e;return 8!==r&&(i=Math.ceil(i/(8/r))),i}let o=e.exports=function(t,e){let r=t.width,n=t.height,o=t.interlace,s=t.bpp,h=t.depth;if(this.read=e.read,this.write=e.write,this.complete=e.complete,this._imageIndex=0,this._images=[],o){let t=i.getImagePasses(r,n);for(let e=0;e<t.length;e++)this._images.push({byteWidth:a(t[e].width,s,h),height:t[e].height,lineIndex:0})}else this._images.push({byteWidth:a(r,s,h),height:n,lineIndex:0});this._xComparison=8===h?s:16===h?2*s:1};o.prototype.start=function(){this.read(this._images[this._imageIndex].byteWidth+1,this._reverseFilterLine.bind(this))},o.prototype._unFilterType1=function(t,e,r){let i=this._xComparison,n=i-1;for(let a=0;a<r;a++){let r=t[1+a],o=a>n?e[a-i]:0;e[a]=r+o}},o.prototype._unFilterType2=function(t,e,r){let i=this._lastLine;for(let n=0;n<r;n++){let r=t[1+n],a=i?i[n]:0;e[n]=r+a}},o.prototype._unFilterType3=function(t,e,r){let i=this._xComparison,n=i-1,a=this._lastLine;for(let o=0;o<r;o++){let r=t[1+o],s=a?a[o]:0,h=o>n?e[o-i]:0,f=Math.floor((h+s)/2);e[o]=r+f}},o.prototype._unFilterType4=function(t,e,r){let i=this._xComparison,a=i-1,o=this._lastLine;for(let s=0;s<r;s++){let r=t[1+s],h=o?o[s]:0,f=s>a?e[s-i]:0,u=s>a&&o?o[s-i]:0,l=n(f,h,u);e[s]=r+l}},o.prototype._reverseFilterLine=function(t){let e,i=t[0],n=this._images[this._imageIndex],a=n.byteWidth;if(0===i)e=t.slice(1,a+1);else switch(e=r.alloc(a),i){case 1:this._unFilterType1(t,e,a);break;case 2:this._unFilterType2(t,e,a);break;case 3:this._unFilterType3(t,e,a);break;case 4:this._unFilterType4(t,e,a);break;default:throw new Error("Unrecognised filter type - "+i)}this.write(e),n.lineIndex++,n.lineIndex>=n.height?(this._lastLine=null,this._imageIndex++,n=this._images[this._imageIndex]):this._lastLine=e,n?this.read(n.byteWidth+1,this._reverseFilterLine.bind(this)):(this._lastLine=null,this.complete())}}).call(this)}).call(this,t("buffer").Buffer)},{"./interlace":11,"./paeth-predictor":15,buffer:33}],10:[function(t,e,r){(function(t){(function(){"use strict";e.exports=function(e,r,i=!1){let n=r.depth,a=r.width,o=r.height,s=r.colorType,h=r.transColor,f=r.palette,u=e;return 3===s?function(t,e,r,i,n){let a=0;for(let o=0;o<i;o++)for(let i=0;i<r;i++){let r=n[t[a]];if(!r)throw new Error("index "+t[a]+" not in palette");for(let t=0;t<4;t++)e[a+t]=r[t];a+=4}}(e,u,a,o,f):(h&&function(t,e,r,i,n){let a=0;for(let o=0;o<i;o++)for(let i=0;i<r;i++){let r=!1;if(1===n.length?n[0]===t[a]&&(r=!0):n[0]===t[a]&&n[1]===t[a+1]&&n[2]===t[a+2]&&(r=!0),r)for(let t=0;t<4;t++)e[a+t]=0;a+=4}}(e,u,a,o,h),8===n||i||(16===n&&(u=t.alloc(a*o*4)),function(t,e,r,i,n){let a=Math.pow(2,n)-1,o=0;for(let n=0;n<i;n++)for(let i=0;i<r;i++){for(let r=0;r<4;r++)e[o+r]=Math.floor(255*t[o+r]/a+.5);o+=4}}(e,u,a,o,n))),u}}).call(this)}).call(this,t("buffer").Buffer)},{buffer:33}],11:[function(t,e,r){"use strict";let i=[{x:[0],y:[0]},{x:[4],y:[0]},{x:[0,4],y:[4]},{x:[2,6],y:[0,4]},{x:[0,2,4,6],y:[2,6]},{x:[1,3,5,7],y:[0,2,4,6]},{x:[0,1,2,3,4,5,6,7],y:[1,3,5,7]}];r.getImagePasses=function(t,e){let r=[],n=t%8,a=e%8,o=(t-n)/8,s=(e-a)/8;for(let t=0;t<i.length;t++){let e=i[t],h=o*e.x.length,f=s*e.y.length;for(let t=0;t<e.x.length&&e.x[t]<n;t++)h++;for(let t=0;t<e.y.length&&e.y[t]<a;t++)f++;h>0&&f>0&&r.push({width:h,height:f,index:t})}return r},r.getInterlaceIterator=function(t){return function(e,r,n){let a=e%i[n].x.length,o=(e-a)/i[n].x.length*8+i[n].x[a],s=r%i[n].y.length;return 4*o+((r-s)/i[n].y.length*8+i[n].y[s])*t*4}}},{}],12:[function(t,e,r){(function(r){(function(){"use strict";let i=t("util"),n=t("stream"),a=t("./constants"),o=t("./packer"),s=e.exports=function(t){n.call(this);let e=t||{};this._packer=new o(e),this._deflate=this._packer.createDeflate(),this.readable=!0};i.inherits(s,n),s.prototype.pack=function(t,e,i,n){this.emit("data",r.from(a.PNG_SIGNATURE)),this.emit("data",this._packer.packIHDR(e,i)),n&&this.emit("data",this._packer.packGAMA(n));let o=this._packer.filterData(t,e,i);this._deflate.on("error",this.emit.bind(this,"error")),this._deflate.on("data",function(t){this.emit("data",this._packer.packIDAT(t))}.bind(this)),this._deflate.on("end",function(){this.emit("data",this._packer.packIEND()),this.emit("end")}.bind(this)),this._deflate.end(o)}}).call(this)}).call(this,t("buffer").Buffer)},{"./constants":4,"./packer":14,buffer:33,stream:61,util:81}],13:[function(t,e,r){(function(r){(function(){"use strict";let i=!0,n=t("zlib");n.deflateSync||(i=!1);let a=t("./constants"),o=t("./packer");e.exports=function(t,e){if(!i)throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");let s=new o(e||{}),h=[];h.push(r.from(a.PNG_SIGNATURE)),h.push(s.packIHDR(t.width,t.height)),t.gamma&&h.push(s.packGAMA(t.gamma));let f=s.filterData(t.data,t.width,t.height),u=n.deflateSync(f,s.getDeflateOptions());if(f=null,!u||!u.length)throw new Error("bad png - invalid compressed data response");return h.push(s.packIDAT(u)),h.push(s.packIEND()),r.concat(h)}}).call(this)}).call(this,t("buffer").Buffer)},{"./constants":4,"./packer":14,buffer:33,zlib:32}],14:[function(t,e,r){(function(r){(function(){"use strict";let i=t("./constants"),n=t("./crc"),a=t("./bitpacker"),o=t("./filter-pack"),s=t("zlib"),h=e.exports=function(t){if(this._options=t,t.deflateChunkSize=t.deflateChunkSize||32768,t.deflateLevel=null!=t.deflateLevel?t.deflateLevel:9,t.deflateStrategy=null!=t.deflateStrategy?t.deflateStrategy:3,t.inputHasAlpha=null==t.inputHasAlpha||t.inputHasAlpha,t.deflateFactory=t.deflateFactory||s.createDeflate,t.bitDepth=t.bitDepth||8,t.colorType="number"==typeof t.colorType?t.colorType:i.COLORTYPE_COLOR_ALPHA,t.inputColorType="number"==typeof t.inputColorType?t.inputColorType:i.COLORTYPE_COLOR_ALPHA,-1===[i.COLORTYPE_GRAYSCALE,i.COLORTYPE_COLOR,i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(t.colorType))throw new Error("option color type:"+t.colorType+" is not supported at present");if(-1===[i.COLORTYPE_GRAYSCALE,i.COLORTYPE_COLOR,i.COLORTYPE_COLOR_ALPHA,i.COLORTYPE_ALPHA].indexOf(t.inputColorType))throw new Error("option input color type:"+t.inputColorType+" is not supported at present");if(8!==t.bitDepth&&16!==t.bitDepth)throw new Error("option bit depth:"+t.bitDepth+" is not supported at present")};h.prototype.getDeflateOptions=function(){return{chunkSize:this._options.deflateChunkSize,level:this._options.deflateLevel,strategy:this._options.deflateStrategy}},h.prototype.createDeflate=function(){return this._options.deflateFactory(this.getDeflateOptions())},h.prototype.filterData=function(t,e,r){let n=a(t,e,r,this._options),s=i.COLORTYPE_TO_BPP_MAP[this._options.colorType];return o(n,e,r,this._options,s)},h.prototype._packChunk=function(t,e){let i=e?e.length:0,a=r.alloc(i+12);return a.writeUInt32BE(i,0),a.writeUInt32BE(t,4),e&&e.copy(a,8),a.writeInt32BE(n.crc32(a.slice(4,a.length-4)),a.length-4),a},h.prototype.packGAMA=function(t){let e=r.alloc(4);return e.writeUInt32BE(Math.floor(t*i.GAMMA_DIVISION),0),this._packChunk(i.TYPE_gAMA,e)},h.prototype.packIHDR=function(t,e){let n=r.alloc(13);return n.writeUInt32BE(t,0),n.writeUInt32BE(e,4),n[8]=this._options.bitDepth,n[9]=this._options.colorType,n[10]=0,n[11]=0,n[12]=0,this._packChunk(i.TYPE_IHDR,n)},h.prototype.packIDAT=function(t){return this._packChunk(i.TYPE_IDAT,t)},h.prototype.packIEND=function(){return this._packChunk(i.TYPE_IEND,null)}}).call(this)}).call(this,t("buffer").Buffer)},{"./bitpacker":2,"./constants":4,"./crc":5,"./filter-pack":6,buffer:33,zlib:32}],15:[function(t,e,r){"use strict";e.exports=function(t,e,r){let i=t+e-r,n=Math.abs(i-t),a=Math.abs(i-e),o=Math.abs(i-r);return n<=a&&n<=o?t:a<=o?e:r}},{}],16:[function(t,e,r){"use strict";let i=t("util"),n=t("zlib"),a=t("./chunkstream"),o=t("./filter-parse-async"),s=t("./parser"),h=t("./bitmapper"),f=t("./format-normaliser"),u=e.exports=function(t){a.call(this),this._parser=new s(t,{read:this.read.bind(this),error:this._handleError.bind(this),metadata:this._handleMetaData.bind(this),gamma:this.emit.bind(this,"gamma"),palette:this._handlePalette.bind(this),transColor:this._handleTransColor.bind(this),finished:this._finished.bind(this),inflateData:this._inflateData.bind(this),simpleTransparency:this._simpleTransparency.bind(this),headersFinished:this._headersFinished.bind(this)}),this._options=t,this.writable=!0,this._parser.start()};i.inherits(u,a),u.prototype._handleError=function(t){this.emit("error",t),this.writable=!1,this.destroy(),this._inflate&&this._inflate.destroy&&this._inflate.destroy(),this._filter&&(this._filter.destroy(),this._filter.on("error",(function(){}))),this.errord=!0},u.prototype._inflateData=function(t){if(!this._inflate)if(this._bitmapInfo.interlace)this._inflate=n.createInflate(),this._inflate.on("error",this.emit.bind(this,"error")),this._filter.on("complete",this._complete.bind(this)),this._inflate.pipe(this._filter);else{let t=(1+(this._bitmapInfo.width*this._bitmapInfo.bpp*this._bitmapInfo.depth+7>>3))*this._bitmapInfo.height,e=Math.max(t,n.Z_MIN_CHUNK);this._inflate=n.createInflate({chunkSize:e});let r=t,i=this.emit.bind(this,"error");this._inflate.on("error",(function(t){r&&i(t)})),this._filter.on("complete",this._complete.bind(this));let a=this._filter.write.bind(this._filter);this._inflate.on("data",(function(t){r&&(t.length>r&&(t=t.slice(0,r)),r-=t.length,a(t))})),this._inflate.on("end",this._filter.end.bind(this._filter))}this._inflate.write(t)},u.prototype._handleMetaData=function(t){this._metaData=t,this._bitmapInfo=Object.create(t),this._filter=new o(this._bitmapInfo)},u.prototype._handleTransColor=function(t){this._bitmapInfo.transColor=t},u.prototype._handlePalette=function(t){this._bitmapInfo.palette=t},u.prototype._simpleTransparency=function(){this._metaData.alpha=!0},u.prototype._headersFinished=function(){this.emit("metadata",this._metaData)},u.prototype._finished=function(){this.errord||(this._inflate?this._inflate.end():this.emit("error","No Inflate block"))},u.prototype._complete=function(t){if(this.errord)return;let e;try{let r=h.dataToBitMap(t,this._bitmapInfo);e=f(r,this._bitmapInfo,this._options.skipRescale),r=null}catch(t){return void this._handleError(t)}this.emit("parsed",e)}},{"./bitmapper":1,"./chunkstream":3,"./filter-parse-async":7,"./format-normaliser":10,"./parser":18,util:81,zlib:32}],17:[function(t,e,r){(function(r){(function(){"use strict";let i=!0,n=t("zlib"),a=t("./sync-inflate");n.deflateSync||(i=!1);let o=t("./sync-reader"),s=t("./filter-parse-sync"),h=t("./parser"),f=t("./bitmapper"),u=t("./format-normaliser");e.exports=function(t,e){if(!i)throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");let l,c,d;let p=[];let m=new o(t);if(new h(e,{read:m.read.bind(m),error:function(t){l=t},metadata:function(t){c=t},gamma:function(t){d=t},palette:function(t){c.palette=t},transColor:function(t){c.transColor=t},inflateData:function(t){p.push(t)},simpleTransparency:function(){c.alpha=!0}}).start(),m.process(),l)throw l;let g,b=r.concat(p);if(p.length=0,c.interlace)g=n.inflateSync(b);else{let t=(1+(c.width*c.bpp*c.depth+7>>3))*c.height;g=a(b,{chunkSize:t,maxLength:t})}if(b=null,!g||!g.length)throw new Error("bad png - invalid inflate data response");let _=s.process(g,c);b=null;let y=f.dataToBitMap(_,c);_=null;let w=u(y,c,e.skipRescale);return c.data=w,c.gamma=d||0,c}}).call(this)}).call(this,t("buffer").Buffer)},{"./bitmapper":1,"./filter-parse-sync":8,"./format-normaliser":10,"./parser":18,"./sync-inflate":21,"./sync-reader":22,buffer:33,zlib:32}],18:[function(t,e,r){(function(r){(function(){"use strict";let i=t("./constants"),n=t("./crc"),a=e.exports=function(t,e){this._options=t,t.checkCRC=!1!==t.checkCRC,this._hasIHDR=!1,this._hasIEND=!1,this._emittedHeadersFinished=!1,this._palette=[],this._colorType=0,this._chunks={},this._chunks[i.TYPE_IHDR]=this._handleIHDR.bind(this),this._chunks[i.TYPE_IEND]=this._handleIEND.bind(this),this._chunks[i.TYPE_IDAT]=this._handleIDAT.bind(this),this._chunks[i.TYPE_PLTE]=this._handlePLTE.bind(this),this._chunks[i.TYPE_tRNS]=this._handleTRNS.bind(this),this._chunks[i.TYPE_gAMA]=this._handleGAMA.bind(this),this.read=e.read,this.error=e.error,this.metadata=e.metadata,this.gamma=e.gamma,this.transColor=e.transColor,this.palette=e.palette,this.parsed=e.parsed,this.inflateData=e.inflateData,this.finished=e.finished,this.simpleTransparency=e.simpleTransparency,this.headersFinished=e.headersFinished||function(){}};a.prototype.start=function(){this.read(i.PNG_SIGNATURE.length,this._parseSignature.bind(this))},a.prototype._parseSignature=function(t){let e=i.PNG_SIGNATURE;for(let r=0;r<e.length;r++)if(t[r]!==e[r])return void this.error(new Error("Invalid file signature"));this.read(8,this._parseChunkBegin.bind(this))},a.prototype._parseChunkBegin=function(t){let e=t.readUInt32BE(0),a=t.readUInt32BE(4),o="";for(let e=4;e<8;e++)o+=String.fromCharCode(t[e]);let s=Boolean(32&t[4]);if(this._hasIHDR||a===i.TYPE_IHDR){if(this._crc=new n,this._crc.write(r.from(o)),this._chunks[a])return this._chunks[a](e);s?this.read(e+4,this._skipChunk.bind(this)):this.error(new Error("Unsupported critical chunk type "+o))}else this.error(new Error("Expected IHDR on beggining"))},a.prototype._skipChunk=function(){this.read(8,this._parseChunkBegin.bind(this))},a.prototype._handleChunkEnd=function(){this.read(4,this._parseChunkEnd.bind(this))},a.prototype._parseChunkEnd=function(t){let e=t.readInt32BE(0),r=this._crc.crc32();this._options.checkCRC&&r!==e?this.error(new Error("Crc error - "+e+" - "+r)):this._hasIEND||this.read(8,this._parseChunkBegin.bind(this))},a.prototype._handleIHDR=function(t){this.read(t,this._parseIHDR.bind(this))},a.prototype._parseIHDR=function(t){this._crc.write(t);let e=t.readUInt32BE(0),r=t.readUInt32BE(4),n=t[8],a=t[9],o=t[10],s=t[11],h=t[12];if(8!==n&&4!==n&&2!==n&&1!==n&&16!==n)return void this.error(new Error("Unsupported bit depth "+n));if(!(a in i.COLORTYPE_TO_BPP_MAP))return void this.error(new Error("Unsupported color type"));if(0!==o)return void this.error(new Error("Unsupported compression method"));if(0!==s)return void this.error(new Error("Unsupported filter method"));if(0!==h&&1!==h)return void this.error(new Error("Unsupported interlace method"));this._colorType=a;let f=i.COLORTYPE_TO_BPP_MAP[this._colorType];this._hasIHDR=!0,this.metadata({width:e,height:r,depth:n,interlace:Boolean(h),palette:Boolean(a&i.COLORTYPE_PALETTE),color:Boolean(a&i.COLORTYPE_COLOR),alpha:Boolean(a&i.COLORTYPE_ALPHA),bpp:f,colorType:a}),this._handleChunkEnd()},a.prototype._handlePLTE=function(t){this.read(t,this._parsePLTE.bind(this))},a.prototype._parsePLTE=function(t){this._crc.write(t);let e=Math.floor(t.length/3);for(let r=0;r<e;r++)this._palette.push([t[3*r],t[3*r+1],t[3*r+2],255]);this.palette(this._palette),this._handleChunkEnd()},a.prototype._handleTRNS=function(t){this.simpleTransparency(),this.read(t,this._parseTRNS.bind(this))},a.prototype._parseTRNS=function(t){if(this._crc.write(t),this._colorType===i.COLORTYPE_PALETTE_COLOR){if(0===this._palette.length)return void this.error(new Error("Transparency chunk must be after palette"));if(t.length>this._palette.length)return void this.error(new Error("More transparent colors than palette size"));for(let e=0;e<t.length;e++)this._palette[e][3]=t[e];this.palette(this._palette)}this._colorType===i.COLORTYPE_GRAYSCALE&&this.transColor([t.readUInt16BE(0)]),this._colorType===i.COLORTYPE_COLOR&&this.transColor([t.readUInt16BE(0),t.readUInt16BE(2),t.readUInt16BE(4)]),this._handleChunkEnd()},a.prototype._handleGAMA=function(t){this.read(t,this._parseGAMA.bind(this))},a.prototype._parseGAMA=function(t){this._crc.write(t),this.gamma(t.readUInt32BE(0)/i.GAMMA_DIVISION),this._handleChunkEnd()},a.prototype._handleIDAT=function(t){this._emittedHeadersFinished||(this._emittedHeadersFinished=!0,this.headersFinished()),this.read(-t,this._parseIDAT.bind(this,t))},a.prototype._parseIDAT=function(t,e){if(this._crc.write(e),this._colorType===i.COLORTYPE_PALETTE_COLOR&&0===this._palette.length)throw new Error("Expected palette not found");this.inflateData(e);let r=t-e.length;r>0?this._handleIDAT(r):this._handleChunkEnd()},a.prototype._handleIEND=function(t){this.read(t,this._parseIEND.bind(this))},a.prototype._parseIEND=function(t){this._crc.write(t),this._hasIEND=!0,this._handleChunkEnd(),this.finished&&this.finished()}}).call(this)}).call(this,t("buffer").Buffer)},{"./constants":4,"./crc":5,buffer:33}],19:[function(t,e,r){"use strict";let i=t("./parser-sync"),n=t("./packer-sync");r.read=function(t,e){return i(t,e||{})},r.write=function(t,e){return n(t,e)}},{"./packer-sync":13,"./parser-sync":17}],20:[function(t,e,r){(function(e,i){(function(){"use strict";let n=t("util"),a=t("stream"),o=t("./parser-async"),s=t("./packer-async"),h=t("./png-sync"),f=r.PNG=function(t){a.call(this),t=t||{},this.width=0|t.width,this.height=0|t.height,this.data=this.width>0&&this.height>0?i.alloc(4*this.width*this.height):null,t.fill&&this.data&&this.data.fill(0),this.gamma=0,this.readable=this.writable=!0,this._parser=new o(t),this._parser.on("error",this.emit.bind(this,"error")),this._parser.on("close",this._handleClose.bind(this)),this._parser.on("metadata",this._metadata.bind(this)),this._parser.on("gamma",this._gamma.bind(this)),this._parser.on("parsed",function(t){this.data=t,this.emit("parsed",t)}.bind(this)),this._packer=new s(t),this._packer.on("data",this.emit.bind(this,"data")),this._packer.on("end",this.emit.bind(this,"end")),this._parser.on("close",this._handleClose.bind(this)),this._packer.on("error",this.emit.bind(this,"error"))};n.inherits(f,a),f.sync=h,f.prototype.pack=function(){return this.data&&this.data.length?(e.nextTick(function(){this._packer.pack(this.data,this.width,this.height,this.gamma)}.bind(this)),this):(this.emit("error","No data provided"),this)},f.prototype.parse=function(t,e){if(e){let t,r;t=function(t){this.removeListener("error",r),this.data=t,e(null,this)}.bind(this),r=function(r){this.removeListener("parsed",t),e(r,null)}.bind(this),this.once("parsed",t),this.once("error",r)}return this.end(t),this},f.prototype.write=function(t){return this._parser.write(t),!0},f.prototype.end=function(t){this._parser.end(t)},f.prototype._metadata=function(t){this.width=t.width,this.height=t.height,this.emit("metadata",t)},f.prototype._gamma=function(t){this.gamma=t},f.prototype._handleClose=function(){this._parser.writable||this._packer.readable||this.emit("close")},f.bitblt=function(t,e,r,i,n,a,o,s){if(i|=0,n|=0,a|=0,o|=0,s|=0,(r|=0)>t.width||i>t.height||r+n>t.width||i+a>t.height)throw new Error("bitblt reading outside image");if(o>e.width||s>e.height||o+n>e.width||s+a>e.height)throw new Error("bitblt writing outside image");for(let h=0;h<a;h++)t.data.copy(e.data,(s+h)*e.width+o<<2,(i+h)*t.width+r<<2,(i+h)*t.width+r+n<<2)},f.prototype.bitblt=function(t,e,r,i,n,a,o){return f.bitblt(this,t,e,r,i,n,a,o),this},f.adjustGamma=function(t){if(t.gamma){for(let e=0;e<t.height;e++)for(let r=0;r<t.width;r++){let i=t.width*e+r<<2;for(let e=0;e<3;e++){let r=t.data[i+e]/255;r=Math.pow(r,1/2.2/t.gamma),t.data[i+e]=Math.round(255*r)}}t.gamma=0}},f.prototype.adjustGamma=function(){f.adjustGamma(this)}}).call(this)}).call(this,t("_process"),t("buffer").Buffer)},{"./packer-async":12,"./parser-async":16,"./png-sync":19,_process:60,buffer:33,stream:61,util:81}],21:[function(t,e,r){(function(i,n){(function(){"use strict";let a=t("assert").ok,o=t("zlib"),s=t("util"),h=t("buffer").kMaxLength;function f(t){if(!(this instanceof f))return new f(t);t&&t.chunkSize<o.Z_MIN_CHUNK&&(t.chunkSize=o.Z_MIN_CHUNK),o.Inflate.call(this,t),this._offset=void 0===this._offset?this._outOffset:this._offset,this._buffer=this._buffer||this._outBuffer,t&&null!=t.maxLength&&(this._maxLength=t.maxLength)}function u(t,e){e&&i.nextTick(e),t._handle&&(t._handle.close(),t._handle=null)}function l(t,e){return function(t,e){if("string"==typeof e&&(e=n.from(e)),!(e instanceof n))throw new TypeError("Not a string or buffer");let r=t._finishFlushFlag;return null==r&&(r=o.Z_FINISH),t._processChunk(e,r)}(new f(e),t)}f.prototype._processChunk=function(t,e,r){if("function"==typeof r)return o.Inflate._processChunk.call(this,t,e,r);let i,s,f=this,l=t&&t.length,c=this._chunkSize-this._offset,d=this._maxLength,p=0,m=[],g=0;function b(t,e){if(f._hadError)return;let r=c-e;if(a(r>=0,"have should not go down"),r>0){let t=f._buffer.slice(f._offset,f._offset+r);if(f._offset+=r,t.length>d&&(t=t.slice(0,d)),m.push(t),g+=t.length,d-=t.length,0===d)return!1}return(0===e||f._offset>=f._chunkSize)&&(c=f._chunkSize,f._offset=0,f._buffer=n.allocUnsafe(f._chunkSize)),0===e&&(p+=l-t,l=t,!0)}this.on("error",(function(t){i=t})),a(this._handle,"zlib binding closed");do{s=this._handle.writeSync(e,t,p,l,this._buffer,this._offset,c),s=s||this._writeState}while(!this._hadError&&b(s[0],s[1]));if(this._hadError)throw i;if(g>=h)throw u(this),new RangeError("Cannot create final Buffer. It would be larger than 0x"+h.toString(16)+" bytes");let _=n.concat(m,g);return u(this),_},s.inherits(f,o.Inflate),e.exports=r=l,r.Inflate=f,r.createInflate=function(t){return new f(t)},r.inflateSync=l}).call(this)}).call(this,t("_process"),t("buffer").Buffer)},{_process:60,assert:23,buffer:33,util:81,zlib:32}],22:[function(t,e,r){"use strict";let i=e.exports=function(t){this._buffer=t,this._reads=[]};i.prototype.read=function(t,e){this._reads.push({length:Math.abs(t),allowLess:t<0,func:e})},i.prototype.process=function(){for(;this._reads.length>0&&this._buffer.length;){let t=this._reads[0];if(!this._buffer.length||!(this._buffer.length>=t.length||t.allowLess))break;{this._reads.shift();let e=this._buffer;this._buffer=e.slice(t.length),t.func.call(this,e.slice(0,t.length))}}if(this._reads.length>0)throw new Error("There are some read requests waitng on finished stream");if(this._buffer.length>0)throw new Error("unrecognised content at end of stream")}},{}],23:[function(t,e,i){(function(r){(function(){"use strict";function i(t,e){if(t===e)return 0;for(var r=t.length,i=e.length,n=0,a=Math.min(r,i);n<a;++n)if(t[n]!==e[n]){r=t[n],i=e[n];break}return r<i?-1:i<r?1:0}function n(t){return r.Buffer&&"function"==typeof r.Buffer.isBuffer?r.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var a=t("util/"),o=Object.prototype.hasOwnProperty,s=Array.prototype.slice,h="foo"===function(){}.name;function f(t){return Object.prototype.toString.call(t)}function u(t){return!n(t)&&"function"==typeof r.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer)))}var l=e.exports=b,c=/\s*function\s+([^\(\s]*)\s*/;function d(t){if(a.isFunction(t)){if(h)return t.name;var e=t.toString().match(c);return e&&e[1]}}function p(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function m(t){if(h||!a.isFunction(t))return a.inspect(t);var e=d(t);return"[Function"+(e?": "+e:"")+"]"}function g(t,e,r,i,n){throw new l.AssertionError({message:r,actual:t,expected:e,operator:i,stackStartFunction:n})}function b(t,e){t||g(t,!0,e,"==",l.ok)}function _(t,e,r,o){if(t===e)return!0;if(n(t)&&n(e))return 0===i(t,e);if(a.isDate(t)&&a.isDate(e))return t.getTime()===e.getTime();if(a.isRegExp(t)&&a.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(u(t)&&u(e)&&f(t)===f(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===i(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(n(t)!==n(e))return!1;var h=(o=o||{actual:[],expected:[]}).actual.indexOf(t);return-1!==h&&h===o.expected.indexOf(e)||(o.actual.push(t),o.expected.push(e),function(t,e,r,i){if(null==t||null==e)return!1;if(a.isPrimitive(t)||a.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var n=y(t),o=y(e);if(n&&!o||!n&&o)return!1;if(n)return _(t=s.call(t),e=s.call(e),r);var h,f,u=x(t),l=x(e);if(u.length!==l.length)return!1;for(u.sort(),l.sort(),f=u.length-1;f>=0;f--)if(u[f]!==l[f])return!1;for(f=u.length-1;f>=0;f--)if(!_(t[h=u[f]],e[h],r,i))return!1;return!0}(t,e,r,o))}return r?t===e:t==e}function y(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function w(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function v(t,e,r,i){var n;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(i=r,r=null),n=function(t){var e;try{t()}catch(t){e=t}return e}(e),i=(r&&r.name?" ("+r.name+").":".")+(i?" "+i:"."),t&&!n&&g(n,r,"Missing expected exception"+i);var o="string"==typeof i,s=!t&&n&&!r;if((!t&&a.isError(n)&&o&&w(n,r)||s)&&g(n,r,"Got unwanted exception"+i),t&&n&&r&&!w(n,r)||!t&&n)throw n}l.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return p(m(t.actual),128)+" "+t.operator+" "+p(m(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var i=r.stack,n=d(e),a=i.indexOf("\n"+n);if(a>=0){var o=i.indexOf("\n",a+1);i=i.substring(o+1)}this.stack=i}}},a.inherits(l.AssertionError,Error),l.fail=g,l.ok=b,l.equal=function(t,e,r){t!=e&&g(t,e,r,"==",l.equal)},l.notEqual=function(t,e,r){t==e&&g(t,e,r,"!=",l.notEqual)},l.deepEqual=function(t,e,r){_(t,e,!1)||g(t,e,r,"deepEqual",l.deepEqual)},l.deepStrictEqual=function(t,e,r){_(t,e,!0)||g(t,e,r,"deepStrictEqual",l.deepStrictEqual)},l.notDeepEqual=function(t,e,r){_(t,e,!1)&&g(t,e,r,"notDeepEqual",l.notDeepEqual)},l.notDeepStrictEqual=function t(e,r,i){_(e,r,!0)&&g(e,r,i,"notDeepStrictEqual",t)},l.strictEqual=function(t,e,r){t!==e&&g(t,e,r,"===",l.strictEqual)},l.notStrictEqual=function(t,e,r){t===e&&g(t,e,r,"!==",l.notStrictEqual)},l.throws=function(t,e,r){v(!0,t,e,r)},l.doesNotThrow=function(t,e,r){v(!1,t,e,r)},l.ifError=function(t){if(t)throw t};var x=Object.keys||function(t){var e=[];for(var r in t)o.call(t,r)&&e.push(r);return e}}).call(this)}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"util/":26}],24:[function(t,e,r){"function"==typeof Object.create?e.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},{}],25:[function(t,e,r){e.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},{}],26:[function(t,e,i){(function(e,r){(function(){var n=/%[sdj%]/g;i.format=function(t){if(!b(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(s(arguments[r]));return e.join(" ")}r=1;for(var i=arguments,a=i.length,o=String(t).replace(n,(function(t){if("%%"===t)return"%";if(r>=a)return t;switch(t){case"%s":return String(i[r++]);case"%d":return Number(i[r++]);case"%j":try{return JSON.stringify(i[r++])}catch(t){return"[Circular]"}default:return t}})),h=i[r];r<a;h=i[++r])m(h)||!w(h)?o+=" "+h:o+=" "+s(h);return o},i.deprecate=function(t,n){if(_(r.process))return function(){return i.deprecate(t,n).apply(this,arguments)};if(!0===e.noDeprecation)return t;var a=!1;return function(){if(!a){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),a=!0}return t.apply(this,arguments)}};var a,o={};function s(t,e){var r={seen:[],stylize:f};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),p(e)?r.showHidden=e:e&&i._extend(r,e),_(r.showHidden)&&(r.showHidden=!1),_(r.depth)&&(r.depth=2),_(r.colors)&&(r.colors=!1),_(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=h),u(r,t,r.depth)}function h(t,e){var r=s.styles[e];return r?"["+s.colors[r][0]+"m"+t+"["+s.colors[r][1]+"m":t}function f(t,e){return t}function u(t,e,r){if(t.customInspect&&e&&E(e.inspect)&&e.inspect!==i.inspect&&(!e.constructor||e.constructor.prototype!==e)){var n=e.inspect(r,t);return b(n)||(n=u(t,n,r)),n}var a=function(t,e){if(_(e))return t.stylize("undefined","undefined");if(b(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return g(e)?t.stylize(""+e,"number"):p(e)?t.stylize(""+e,"boolean"):m(e)?t.stylize("null","null"):void 0}(t,e);if(a)return a;var o=Object.keys(e),s=function(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}(o);if(t.showHidden&&(o=Object.getOwnPropertyNames(e)),x(e)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return l(e);if(0===o.length){if(E(e)){var h=e.name?": "+e.name:"";return t.stylize("[Function"+h+"]","special")}if(y(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(v(e))return t.stylize(Date.prototype.toString.call(e),"date");if(x(e))return l(e)}var f,w="",k=!1,S=["{","}"];return d(e)&&(k=!0,S=["[","]"]),E(e)&&(w=" [Function"+(e.name?": "+e.name:"")+"]"),y(e)&&(w=" "+RegExp.prototype.toString.call(e)),v(e)&&(w=" "+Date.prototype.toUTCString.call(e)),x(e)&&(w=" "+l(e)),0!==o.length||k&&0!=e.length?r<0?y(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special"):(t.seen.push(e),f=k?function(t,e,r,i,n){for(var a=[],o=0,s=e.length;o<s;++o)A(e,String(o))?a.push(c(t,e,r,i,String(o),!0)):a.push("");return n.forEach((function(n){n.match(/^\d+$/)||a.push(c(t,e,r,i,n,!0))})),a}(t,e,r,s,o):o.map((function(i){return c(t,e,r,s,i,k)})),t.seen.pop(),function(t,e,r){return t.reduce((function(t,e){return e.indexOf("\n"),t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}(f,w,S)):S[0]+w+S[1]}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function c(t,e,r,i,n,a){var o,s,h;if((h=Object.getOwnPropertyDescriptor(e,n)||{value:e[n]}).get?s=h.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):h.set&&(s=t.stylize("[Setter]","special")),A(i,n)||(o="["+n+"]"),s||(t.seen.indexOf(h.value)<0?(s=m(r)?u(t,h.value,null):u(t,h.value,r-1)).indexOf("\n")>-1&&(s=a?s.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+s.split("\n").map((function(t){return"   "+t})).join("\n")):s=t.stylize("[Circular]","special")),_(o)){if(a&&n.match(/^\d+$/))return s;(o=JSON.stringify(""+n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=t.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=t.stylize(o,"string"))}return o+": "+s}function d(t){return Array.isArray(t)}function p(t){return"boolean"==typeof t}function m(t){return null===t}function g(t){return"number"==typeof t}function b(t){return"string"==typeof t}function _(t){return void 0===t}function y(t){return w(t)&&"[object RegExp]"===k(t)}function w(t){return"object"==typeof t&&null!==t}function v(t){return w(t)&&"[object Date]"===k(t)}function x(t){return w(t)&&("[object Error]"===k(t)||t instanceof Error)}function E(t){return"function"==typeof t}function k(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}i.debuglog=function(t){if(_(a)&&(a=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!o[t])if(new RegExp("\\b"+t+"\\b","i").test(a)){var r=e.pid;o[t]=function(){var e=i.format.apply(i,arguments);console.error("%s %d: %s",t,r,e)}}else o[t]=function(){};return o[t]},i.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},i.isArray=d,i.isBoolean=p,i.isNull=m,i.isNullOrUndefined=function(t){return null==t},i.isNumber=g,i.isString=b,i.isSymbol=function(t){return"symbol"==typeof t},i.isUndefined=_,i.isRegExp=y,i.isObject=w,i.isDate=v,i.isError=x,i.isFunction=E,i.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},i.isBuffer=t("./support/isBuffer");var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i.log=function(){var t,e;console.log("%s - %s",(t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":"),[t.getDate(),M[t.getMonth()],e].join(" ")),i.format.apply(i,arguments))},i.inherits=t("inherits"),i._extend=function(t,e){if(!e||!w(e))return t;for(var r=Object.keys(e),i=r.length;i--;)t[r[i]]=e[r[i]];return t}}).call(this)}).call(this,t("_process"),void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":25,_process:60,inherits:24}],27:[function(t,e,i){(function(r){(function(){"use strict";var i=t("array-filter");e.exports=function(){return i(["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],(function(t){return"function"==typeof r[t]}))}}).call(this)}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"array-filter":28}],28:[function(t,e,r){e.exports=function(t,e,r){if(t.filter)return t.filter(e,r);if(null==t)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var n=[],a=0;a<t.length;a++)if(i.call(t,a)){var o=t[a];e.call(r,o,a,t)&&n.push(o)}return n};var i=Object.prototype.hasOwnProperty},{}],29:[function(t,e,r){"use strict";r.byteLength=function(t){var e=f(t),r=e[0],i=e[1];return 3*(r+i)/4-i},r.toByteArray=function(t){var e,r,i=f(t),o=i[0],s=i[1],h=new a(function(t,e,r){return 3*(e+r)/4-r}(0,o,s)),u=0,l=s>0?o-4:o;for(r=0;r<l;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[u++]=e>>16&255,h[u++]=e>>8&255,h[u++]=255&e;return 2===s&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[u++]=255&e),1===s&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[u++]=e>>8&255,h[u++]=255&e),h},r.fromByteArray=function(t){for(var e,r=t.length,n=r%3,a=[],o=16383,s=0,h=r-n;s<h;s+=o)a.push(u(t,s,s+o>h?h:s+o));return 1===n?(e=t[r-1],a.push(i[e>>2]+i[e<<4&63]+"==")):2===n&&(e=(t[r-2]<<8)+t[r-1],a.push(i[e>>10]+i[e>>4&63]+i[e<<2&63]+"=")),a.join("")};for(var i=[],n=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,h=o.length;s<h;++s)i[s]=o[s],n[o.charCodeAt(s)]=s;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function u(t,e,r){for(var n,a=[],o=e;o<r;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),a.push(i[(s=n)>>18&63]+i[s>>12&63]+i[s>>6&63]+i[63&s]);var s;return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},{}],30:[function(t,e,r){},{}],31:[function(t,e,r){(function(e,i){(function(){"use strict";var n=t("assert"),a=t("pako/lib/zlib/zstream"),o=t("pako/lib/zlib/deflate.js"),s=t("pako/lib/zlib/inflate.js"),h=t("pako/lib/zlib/constants");for(var f in h)r[f]=h[f];r.NONE=0,r.DEFLATE=1,r.INFLATE=2,r.GZIP=3,r.GUNZIP=4,r.DEFLATERAW=5,r.INFLATERAW=6,r.UNZIP=7;function u(t){if("number"!=typeof t||t<r.DEFLATE||t>r.UNZIP)throw new TypeError("Bad argument");this.dictionary=null,this.err=0,this.flush=0,this.init_done=!1,this.level=0,this.memLevel=0,this.mode=t,this.strategy=0,this.windowBits=0,this.write_in_progress=!1,this.pending_close=!1,this.gzip_id_bytes_read=0}u.prototype.close=function(){this.write_in_progress?this.pending_close=!0:(this.pending_close=!1,n(this.init_done,"close before init"),n(this.mode<=r.UNZIP),this.mode===r.DEFLATE||this.mode===r.GZIP||this.mode===r.DEFLATERAW?o.deflateEnd(this.strm):this.mode!==r.INFLATE&&this.mode!==r.GUNZIP&&this.mode!==r.INFLATERAW&&this.mode!==r.UNZIP||s.inflateEnd(this.strm),this.mode=r.NONE,this.dictionary=null)},u.prototype.write=function(t,e,r,i,n,a,o){return this._write(!0,t,e,r,i,n,a,o)},u.prototype.writeSync=function(t,e,r,i,n,a,o){return this._write(!1,t,e,r,i,n,a,o)},u.prototype._write=function(t,a,o,s,h,f,u,l){if(n.equal(arguments.length,8),n(this.init_done,"write before init"),n(this.mode!==r.NONE,"already finalized"),n.equal(!1,this.write_in_progress,"write already in progress"),n.equal(!1,this.pending_close,"close is pending"),this.write_in_progress=!0,n.equal(!1,void 0===a,"must provide flush value"),this.write_in_progress=!0,a!==r.Z_NO_FLUSH&&a!==r.Z_PARTIAL_FLUSH&&a!==r.Z_SYNC_FLUSH&&a!==r.Z_FULL_FLUSH&&a!==r.Z_FINISH&&a!==r.Z_BLOCK)throw new Error("Invalid flush value");if(null==o&&(o=i.alloc(0),h=0,s=0),this.strm.avail_in=h,this.strm.input=o,this.strm.next_in=s,this.strm.avail_out=l,this.strm.output=f,this.strm.next_out=u,this.flush=a,!t)return this._process(),this._checkError()?this._afterSync():void 0;var c=this;return e.nextTick((function(){c._process(),c._after()})),this},u.prototype._afterSync=function(){var t=this.strm.avail_out,e=this.strm.avail_in;return this.write_in_progress=!1,[e,t]},u.prototype._process=function(){var t=null;switch(this.mode){case r.DEFLATE:case r.GZIP:case r.DEFLATERAW:this.err=o.deflate(this.strm,this.flush);break;case r.UNZIP:switch(this.strm.avail_in>0&&(t=this.strm.next_in),this.gzip_id_bytes_read){case 0:if(null===t)break;if(31!==this.strm.input[t]){this.mode=r.INFLATE;break}if(this.gzip_id_bytes_read=1,t++,1===this.strm.avail_in)break;case 1:if(null===t)break;139===this.strm.input[t]?(this.gzip_id_bytes_read=2,this.mode=r.GUNZIP):this.mode=r.INFLATE;break;default:throw new Error("invalid number of gzip magic number bytes read")}case r.INFLATE:case r.GUNZIP:case r.INFLATERAW:for(this.err=s.inflate(this.strm,this.flush),this.err===r.Z_NEED_DICT&&this.dictionary&&(this.err=s.inflateSetDictionary(this.strm,this.dictionary),this.err===r.Z_OK?this.err=s.inflate(this.strm,this.flush):this.err===r.Z_DATA_ERROR&&(this.err=r.Z_NEED_DICT));this.strm.avail_in>0&&this.mode===r.GUNZIP&&this.err===r.Z_STREAM_END&&0!==this.strm.next_in[0];)this.reset(),this.err=s.inflate(this.strm,this.flush);break;default:throw new Error("Unknown mode "+this.mode)}},u.prototype._checkError=function(){switch(this.err){case r.Z_OK:case r.Z_BUF_ERROR:if(0!==this.strm.avail_out&&this.flush===r.Z_FINISH)return this._error("unexpected end of file"),!1;break;case r.Z_STREAM_END:break;case r.Z_NEED_DICT:return null==this.dictionary?this._error("Missing dictionary"):this._error("Bad dictionary"),!1;default:return this._error("Zlib error"),!1}return!0},u.prototype._after=function(){if(this._checkError()){var t=this.strm.avail_out,e=this.strm.avail_in;this.write_in_progress=!1,this.callback(e,t),this.pending_close&&this.close()}},u.prototype._error=function(t){this.strm.msg&&(t=this.strm.msg),this.onerror(t,this.err),this.write_in_progress=!1,this.pending_close&&this.close()},u.prototype.init=function(t,e,i,a,o){n(4===arguments.length||5===arguments.length,"init(windowBits, level, memLevel, strategy, [dictionary])"),n(t>=8&&t<=15,"invalid windowBits"),n(e>=-1&&e<=9,"invalid compression level"),n(i>=1&&i<=9,"invalid memlevel"),n(a===r.Z_FILTERED||a===r.Z_HUFFMAN_ONLY||a===r.Z_RLE||a===r.Z_FIXED||a===r.Z_DEFAULT_STRATEGY,"invalid strategy"),this._init(e,t,i,a,o),this._setDictionary()},u.prototype.params=function(){throw new Error("deflateParams Not supported")},u.prototype.reset=function(){this._reset(),this._setDictionary()},u.prototype._init=function(t,e,i,n,h){switch(this.level=t,this.windowBits=e,this.memLevel=i,this.strategy=n,this.flush=r.Z_NO_FLUSH,this.err=r.Z_OK,this.mode!==r.GZIP&&this.mode!==r.GUNZIP||(this.windowBits+=16),this.mode===r.UNZIP&&(this.windowBits+=32),this.mode!==r.DEFLATERAW&&this.mode!==r.INFLATERAW||(this.windowBits=-1*this.windowBits),this.strm=new a,this.mode){case r.DEFLATE:case r.GZIP:case r.DEFLATERAW:this.err=o.deflateInit2(this.strm,this.level,r.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case r.INFLATE:case r.GUNZIP:case r.INFLATERAW:case r.UNZIP:this.err=s.inflateInit2(this.strm,this.windowBits);break;default:throw new Error("Unknown mode "+this.mode)}this.err!==r.Z_OK&&this._error("Init error"),this.dictionary=h,this.write_in_progress=!1,this.init_done=!0},u.prototype._setDictionary=function(){if(null!=this.dictionary){switch(this.err=r.Z_OK,this.mode){case r.DEFLATE:case r.DEFLATERAW:this.err=o.deflateSetDictionary(this.strm,this.dictionary)}this.err!==r.Z_OK&&this._error("Failed to set dictionary")}},u.prototype._reset=function(){switch(this.err=r.Z_OK,this.mode){case r.DEFLATE:case r.DEFLATERAW:case r.GZIP:this.err=o.deflateReset(this.strm);break;case r.INFLATE:case r.INFLATERAW:case r.GUNZIP:this.err=s.inflateReset(this.strm)}this.err!==r.Z_OK&&this._error("Failed to reset stream")},r.Zlib=u}).call(this)}).call(this,t("_process"),t("buffer").Buffer)},{_process:60,assert:23,buffer:33,"pako/lib/zlib/constants":51,"pako/lib/zlib/deflate.js":53,"pako/lib/zlib/inflate.js":55,"pako/lib/zlib/zstream":59}],32:[function(t,e,r){(function(e){(function(){"use strict";var i=t("buffer").Buffer,n=t("stream").Transform,a=t("./binding"),o=t("util"),s=t("assert").ok,h=t("buffer").kMaxLength,f="Cannot create final Buffer. It would be larger than 0x"+h.toString(16)+" bytes";a.Z_MIN_WINDOWBITS=8,a.Z_MAX_WINDOWBITS=15,a.Z_DEFAULT_WINDOWBITS=15,a.Z_MIN_CHUNK=64,a.Z_MAX_CHUNK=1/0,a.Z_DEFAULT_CHUNK=16384,a.Z_MIN_MEMLEVEL=1,a.Z_MAX_MEMLEVEL=9,a.Z_DEFAULT_MEMLEVEL=8,a.Z_MIN_LEVEL=-1,a.Z_MAX_LEVEL=9,a.Z_DEFAULT_LEVEL=a.Z_DEFAULT_COMPRESSION;for(var u=Object.keys(a),l=0;l<u.length;l++){var c=u[l];c.match(/^Z/)&&Object.defineProperty(r,c,{enumerable:!0,value:a[c],writable:!1})}for(var d={Z_OK:a.Z_OK,Z_STREAM_END:a.Z_STREAM_END,Z_NEED_DICT:a.Z_NEED_DICT,Z_ERRNO:a.Z_ERRNO,Z_STREAM_ERROR:a.Z_STREAM_ERROR,Z_DATA_ERROR:a.Z_DATA_ERROR,Z_MEM_ERROR:a.Z_MEM_ERROR,Z_BUF_ERROR:a.Z_BUF_ERROR,Z_VERSION_ERROR:a.Z_VERSION_ERROR},p=Object.keys(d),m=0;m<p.length;m++){var g=p[m];d[d[g]]=g}function b(t,e,r){var n=[],a=0;function o(){for(var e;null!==(e=t.read());)n.push(e),a+=e.length;t.once("readable",o)}function s(){var e,o=null;a>=h?o=new RangeError(f):e=i.concat(n,a),n=[],t.close(),r(o,e)}t.on("error",(function(e){t.removeListener("end",s),t.removeListener("readable",o),r(e)})),t.on("end",s),t.end(e),o()}function _(t,e){if("string"==typeof e&&(e=i.from(e)),!i.isBuffer(e))throw new TypeError("Not a string or buffer");var r=t._finishFlushFlag;return t._processChunk(e,r)}function y(t){if(!(this instanceof y))return new y(t);A.call(this,t,a.DEFLATE)}function w(t){if(!(this instanceof w))return new w(t);A.call(this,t,a.INFLATE)}function v(t){if(!(this instanceof v))return new v(t);A.call(this,t,a.GZIP)}function x(t){if(!(this instanceof x))return new x(t);A.call(this,t,a.GUNZIP)}function E(t){if(!(this instanceof E))return new E(t);A.call(this,t,a.DEFLATERAW)}function k(t){if(!(this instanceof k))return new k(t);A.call(this,t,a.INFLATERAW)}function S(t){if(!(this instanceof S))return new S(t);A.call(this,t,a.UNZIP)}function M(t){return t===a.Z_NO_FLUSH||t===a.Z_PARTIAL_FLUSH||t===a.Z_SYNC_FLUSH||t===a.Z_FULL_FLUSH||t===a.Z_FINISH||t===a.Z_BLOCK}function A(t,e){var o=this;if(this._opts=t=t||{},this._chunkSize=t.chunkSize||r.Z_DEFAULT_CHUNK,n.call(this,t),t.flush&&!M(t.flush))throw new Error("Invalid flush flag: "+t.flush);if(t.finishFlush&&!M(t.finishFlush))throw new Error("Invalid flush flag: "+t.finishFlush);if(this._flushFlag=t.flush||a.Z_NO_FLUSH,this._finishFlushFlag=void 0!==t.finishFlush?t.finishFlush:a.Z_FINISH,t.chunkSize&&(t.chunkSize<r.Z_MIN_CHUNK||t.chunkSize>r.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+t.chunkSize);if(t.windowBits&&(t.windowBits<r.Z_MIN_WINDOWBITS||t.windowBits>r.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+t.windowBits);if(t.level&&(t.level<r.Z_MIN_LEVEL||t.level>r.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+t.level);if(t.memLevel&&(t.memLevel<r.Z_MIN_MEMLEVEL||t.memLevel>r.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+t.memLevel);if(t.strategy&&t.strategy!=r.Z_FILTERED&&t.strategy!=r.Z_HUFFMAN_ONLY&&t.strategy!=r.Z_RLE&&t.strategy!=r.Z_FIXED&&t.strategy!=r.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+t.strategy);if(t.dictionary&&!i.isBuffer(t.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance");this._handle=new a.Zlib(e);var s=this;this._hadError=!1,this._handle.onerror=function(t,e){I(s),s._hadError=!0;var i=new Error(t);i.errno=e,i.code=r.codes[e],s.emit("error",i)};var h=r.Z_DEFAULT_COMPRESSION;"number"==typeof t.level&&(h=t.level);var f=r.Z_DEFAULT_STRATEGY;"number"==typeof t.strategy&&(f=t.strategy),this._handle.init(t.windowBits||r.Z_DEFAULT_WINDOWBITS,h,t.memLevel||r.Z_DEFAULT_MEMLEVEL,f,t.dictionary),this._buffer=i.allocUnsafe(this._chunkSize),this._offset=0,this._level=h,this._strategy=f,this.once("end",this.close),Object.defineProperty(this,"_closed",{get:function(){return!o._handle},configurable:!0,enumerable:!0})}function I(t,r){r&&e.nextTick(r),t._handle&&(t._handle.close(),t._handle=null)}function T(t){t.emit("close")}Object.defineProperty(r,"codes",{enumerable:!0,value:Object.freeze(d),writable:!1}),r.Deflate=y,r.Inflate=w,r.Gzip=v,r.Gunzip=x,r.DeflateRaw=E,r.InflateRaw=k,r.Unzip=S,r.createDeflate=function(t){return new y(t)},r.createInflate=function(t){return new w(t)},r.createDeflateRaw=function(t){return new E(t)},r.createInflateRaw=function(t){return new k(t)},r.createGzip=function(t){return new v(t)},r.createGunzip=function(t){return new x(t)},r.createUnzip=function(t){return new S(t)},r.deflate=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new y(e),t,r)},r.deflateSync=function(t,e){return _(new y(e),t)},r.gzip=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new v(e),t,r)},r.gzipSync=function(t,e){return _(new v(e),t)},r.deflateRaw=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new E(e),t,r)},r.deflateRawSync=function(t,e){return _(new E(e),t)},r.unzip=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new S(e),t,r)},r.unzipSync=function(t,e){return _(new S(e),t)},r.inflate=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new w(e),t,r)},r.inflateSync=function(t,e){return _(new w(e),t)},r.gunzip=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new x(e),t,r)},r.gunzipSync=function(t,e){return _(new x(e),t)},r.inflateRaw=function(t,e,r){return"function"==typeof e&&(r=e,e={}),b(new k(e),t,r)},r.inflateRawSync=function(t,e){return _(new k(e),t)},o.inherits(A,n),A.prototype.params=function(t,i,n){if(t<r.Z_MIN_LEVEL||t>r.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+t);if(i!=r.Z_FILTERED&&i!=r.Z_HUFFMAN_ONLY&&i!=r.Z_RLE&&i!=r.Z_FIXED&&i!=r.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+i);if(this._level!==t||this._strategy!==i){var o=this;this.flush(a.Z_SYNC_FLUSH,(function(){s(o._handle,"zlib binding closed"),o._handle.params(t,i),o._hadError||(o._level=t,o._strategy=i,n&&n())}))}else e.nextTick(n)},A.prototype.reset=function(){return s(this._handle,"zlib binding closed"),this._handle.reset()},A.prototype._flush=function(t){this._transform(i.alloc(0),"",t)},A.prototype.flush=function(t,r){var n=this,o=this._writableState;("function"==typeof t||void 0===t&&!r)&&(r=t,t=a.Z_FULL_FLUSH),o.ended?r&&e.nextTick(r):o.ending?r&&this.once("end",r):o.needDrain?r&&this.once("drain",(function(){return n.flush(t,r)})):(this._flushFlag=t,this.write(i.alloc(0),"",r))},A.prototype.close=function(t){I(this,t),e.nextTick(T,this)},A.prototype._transform=function(t,e,r){var n,o=this._writableState,s=(o.ending||o.ended)&&(!t||o.length===t.length);return null===t||i.isBuffer(t)?this._handle?(s?n=this._finishFlushFlag:(n=this._flushFlag,t.length>=o.length&&(this._flushFlag=this._opts.flush||a.Z_NO_FLUSH)),void this._processChunk(t,n,r)):r(new Error("zlib binding closed")):r(new Error("invalid input"))},A.prototype._processChunk=function(t,e,r){var n=t&&t.length,a=this._chunkSize-this._offset,o=0,u=this,l="function"==typeof r;if(!l){var c,d=[],p=0;this.on("error",(function(t){c=t})),s(this._handle,"zlib binding closed");do{var m=this._handle.writeSync(e,t,o,n,this._buffer,this._offset,a)}while(!this._hadError&&_(m[0],m[1]));if(this._hadError)throw c;if(p>=h)throw I(this),new RangeError(f);var g=i.concat(d,p);return I(this),g}s(this._handle,"zlib binding closed");var b=this._handle.write(e,t,o,n,this._buffer,this._offset,a);function _(h,f){if(this&&(this.buffer=null,this.callback=null),!u._hadError){var c=a-f;if(s(c>=0,"have should not go down"),c>0){var m=u._buffer.slice(u._offset,u._offset+c);u._offset+=c,l?u.push(m):(d.push(m),p+=m.length)}if((0===f||u._offset>=u._chunkSize)&&(a=u._chunkSize,u._offset=0,u._buffer=i.allocUnsafe(u._chunkSize)),0===f){if(o+=n-h,n=h,!l)return!0;var g=u._handle.write(e,t,o,n,u._buffer,u._offset,u._chunkSize);return g.callback=_,void(g.buffer=t)}if(!l)return!1;r()}}b.buffer=t,b.callback=_},o.inherits(y,A),o.inherits(w,A),o.inherits(v,A),o.inherits(x,A),o.inherits(E,A),o.inherits(k,A),o.inherits(S,A)}).call(this)}).call(this,t("_process"))},{"./binding":31,_process:60,assert:23,buffer:33,stream:61,util:81}],33:[function(t,e,r){(function(e){(function(){"use strict";var e=t("base64-js"),i=t("ieee754");r.Buffer=o,r.SlowBuffer=function(t){return+t!=t&&(t=0),o.alloc(+t)},r.INSPECT_MAX_BYTES=50;var n=2147483647;function a(t){if(t>n)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return e.__proto__=o.prototype,e}function o(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return f(t)}return s(t,e,r)}function s(t,e,r){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!o.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|c(t,e),i=a(r),n=i.write(t,e);return n!==r&&(i=i.slice(0,n)),i}(t,e);if(ArrayBuffer.isView(t))return u(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(N(t,ArrayBuffer)||t&&N(t.buffer,ArrayBuffer))return function(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var i;return(i=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r)).__proto__=o.prototype,i}(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return o.from(i,e,r);var n=function(t){if(o.isBuffer(t)){var e=0|l(t.length),r=a(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||F(t.length)?a(0):u(t):"Buffer"===t.type&&Array.isArray(t.data)?u(t.data):void 0}(t);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return o.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function f(t){return h(t),a(t<0?0:0|l(t))}function u(t){for(var e=t.length<0?0:0|l(t.length),r=a(e),i=0;i<e;i+=1)r[i]=255&t[i];return r}function l(t){if(t>=n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n.toString(16)+" bytes");return 0|t}function c(t,e){if(o.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||N(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return D(t).length;default:if(n)return i?-1:U(t).length;e=(""+e).toLowerCase(),n=!0}}function d(t,e,r){var i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,e,r);case"utf8":case"utf-8":return k(this,e,r);case"ascii":return M(this,e,r);case"latin1":case"binary":return A(this,e,r);case"base64":return E(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,r);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function p(t,e,r){var i=t[e];t[e]=t[r],t[r]=i}function m(t,e,r,i,n){if(0===t.length)return-1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),F(r=+r)&&(r=n?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(n)return-1;r=t.length-1}else if(r<0){if(!n)return-1;r=0}if("string"==typeof e&&(e=o.from(e,i)),o.isBuffer(e))return 0===e.length?-1:g(t,e,r,i,n);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):g(t,[e],r,i,n);throw new TypeError("val must be string, number or Buffer")}function g(t,e,r,i,n){var a,o=1,s=t.length,h=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,s/=2,h/=2,r/=2}function f(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(n){var u=-1;for(a=r;a<s;a++)if(f(t,a)===f(e,-1===u?0:a-u)){if(-1===u&&(u=a),a-u+1===h)return u*o}else-1!==u&&(a-=a-u),u=-1}else for(r+h>s&&(r=s-h),a=r;a>=0;a--){for(var l=!0,c=0;c<h;c++)if(f(t,a+c)!==f(e,c)){l=!1;break}if(l)return a}return-1}function b(t,e,r,i){r=Number(r)||0;var n=t.length-r;i?(i=Number(i))>n&&(i=n):i=n;var a=e.length;i>a/2&&(i=a/2);for(var o=0;o<i;++o){var s=parseInt(e.substr(2*o,2),16);if(F(s))return o;t[r+o]=s}return o}function _(t,e,r,i){return z(U(e,t.length-r),t,r,i)}function y(t,e,r,i){return z(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,i)}function w(t,e,r,i){return y(t,e,r,i)}function v(t,e,r,i){return z(D(e),t,r,i)}function x(t,e,r,i){return z(function(t,e){for(var r,i,n,a=[],o=0;o<t.length&&!((e-=2)<0);++o)i=(r=t.charCodeAt(o))>>8,n=r%256,a.push(n),a.push(i);return a}(e,t.length-r),t,r,i)}function E(t,r,i){return 0===r&&i===t.length?e.fromByteArray(t):e.fromByteArray(t.slice(r,i))}function k(t,e,r){r=Math.min(t.length,r);for(var i=[],n=e;n<r;){var a,o,s,h,f=t[n],u=null,l=f>239?4:f>223?3:f>191?2:1;if(n+l<=r)switch(l){case 1:f<128&&(u=f);break;case 2:128==(192&(a=t[n+1]))&&(h=(31&f)<<6|63&a)>127&&(u=h);break;case 3:a=t[n+1],o=t[n+2],128==(192&a)&&128==(192&o)&&(h=(15&f)<<12|(63&a)<<6|63&o)>2047&&(h<55296||h>57343)&&(u=h);break;case 4:a=t[n+1],o=t[n+2],s=t[n+3],128==(192&a)&&128==(192&o)&&128==(192&s)&&(h=(15&f)<<18|(63&a)<<12|(63&o)<<6|63&s)>65535&&h<1114112&&(u=h)}null===u?(u=65533,l=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|1023&u),i.push(u),n+=l}return function(t){var e=t.length;if(e<=S)return String.fromCharCode.apply(String,t);for(var r="",i=0;i<e;)r+=String.fromCharCode.apply(String,t.slice(i,i+=S));return r}(i)}r.kMaxLength=n,o.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}(),o.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),o.poolSize=8192,o.from=function(t,e,r){return s(t,e,r)},o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,o.alloc=function(t,e,r){return function(t,e,r){return h(t),t<=0?a(t):void 0!==e?"string"==typeof r?a(t).fill(e,r):a(t).fill(e):a(t)}(t,e,r)},o.allocUnsafe=function(t){return f(t)},o.allocUnsafeSlow=function(t){return f(t)},o.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==o.prototype},o.compare=function(t,e){if(N(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),N(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,i=e.length,n=0,a=Math.min(r,i);n<a;++n)if(t[n]!==e[n]){r=t[n],i=e[n];break}return r<i?-1:i<r?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return o.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var i=o.allocUnsafe(e),n=0;for(r=0;r<t.length;++r){var a=t[r];if(N(a,Uint8Array)&&(a=o.from(a)),!o.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(i,n),n+=a.length}return i},o.byteLength=c,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)p(this,e,e+1);return this},o.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)p(this,e,e+3),p(this,e+1,e+2);return this},o.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)p(this,e,e+7),p(this,e+1,e+6),p(this,e+2,e+5),p(this,e+3,e+4);return this},o.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?k(this,0,t):d.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},o.prototype.compare=function(t,e,r,i,n){if(N(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),e<0||r>t.length||i<0||n>this.length)throw new RangeError("out of range index");if(i>=n&&e>=r)return 0;if(i>=n)return-1;if(e>=r)return 1;if(this===t)return 0;for(var a=(n>>>=0)-(i>>>=0),s=(r>>>=0)-(e>>>=0),h=Math.min(a,s),f=this.slice(i,n),u=t.slice(e,r),l=0;l<h;++l)if(f[l]!==u[l]){a=f[l],s=u[l];break}return a<s?-1:s<a?1:0},o.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},o.prototype.indexOf=function(t,e,r){return m(this,t,e,r,!0)},o.prototype.lastIndexOf=function(t,e,r){return m(this,t,e,r,!1)},o.prototype.write=function(t,e,r,i){if(void 0===e)i="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)i=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0)}var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var a=!1;;)switch(i){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return _(this,t,e,r);case"ascii":return y(this,t,e,r);case"latin1":case"binary":return w(this,t,e,r);case"base64":return v(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,t,e,r);default:if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var S=4096;function M(t,e,r){var i="";r=Math.min(t.length,r);for(var n=e;n<r;++n)i+=String.fromCharCode(127&t[n]);return i}function A(t,e,r){var i="";r=Math.min(t.length,r);for(var n=e;n<r;++n)i+=String.fromCharCode(t[n]);return i}function I(t,e,r){var i,n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var a="",o=e;o<r;++o)a+=(i=t[o])<16?"0"+i.toString(16):i.toString(16);return a}function T(t,e,r){for(var i=t.slice(e,r),n="",a=0;a<i.length;a+=2)n+=String.fromCharCode(i[a]+256*i[a+1]);return n}function B(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,r,i,n,a){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(r+i>t.length)throw new RangeError("Index out of range")}function P(t,e,r,i,n,a){if(r+i>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function O(t,e,r,n,a){return e=+e,r>>>=0,a||P(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function L(t,e,r,n,a){return e=+e,r>>>=0,a||P(t,0,r,8),i.write(t,e,r,n,52,8),r+8}o.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var i=this.subarray(t,e);return i.__proto__=o.prototype,i},o.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||B(t,e,this.length);for(var i=this[t],n=1,a=0;++a<e&&(n*=256);)i+=this[t+a]*n;return i},o.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||B(t,e,this.length);for(var i=this[t+--e],n=1;e>0&&(n*=256);)i+=this[t+--e]*n;return i},o.prototype.readUInt8=function(t,e){return t>>>=0,e||B(t,1,this.length),this[t]},o.prototype.readUInt16LE=function(t,e){return t>>>=0,e||B(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUInt16BE=function(t,e){return t>>>=0,e||B(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUInt32LE=function(t,e){return t>>>=0,e||B(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},o.prototype.readUInt32BE=function(t,e){return t>>>=0,e||B(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||B(t,e,this.length);for(var i=this[t],n=1,a=0;++a<e&&(n*=256);)i+=this[t+a]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*e)),i},o.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||B(t,e,this.length);for(var i=e,n=1,a=this[t+--i];i>0&&(n*=256);)a+=this[t+--i]*n;return a>=(n*=128)&&(a-=Math.pow(2,8*e)),a},o.prototype.readInt8=function(t,e){return t>>>=0,e||B(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},o.prototype.readInt16LE=function(t,e){t>>>=0,e||B(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(t,e){t>>>=0,e||B(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(t,e){return t>>>=0,e||B(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return t>>>=0,e||B(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readFloatLE=function(t,e){return t>>>=0,e||B(t,4,this.length),i.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return t>>>=0,e||B(t,4,this.length),i.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return t>>>=0,e||B(t,8,this.length),i.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return t>>>=0,e||B(t,8,this.length),i.read(this,t,!1,52,8)},o.prototype.writeUIntLE=function(t,e,r,i){t=+t,e>>>=0,r>>>=0,i||R(this,t,e,r,Math.pow(2,8*r)-1,0);var n=1,a=0;for(this[e]=255&t;++a<r&&(n*=256);)this[e+a]=t/n&255;return e+r},o.prototype.writeUIntBE=function(t,e,r,i){t=+t,e>>>=0,r>>>=0,i||R(this,t,e,r,Math.pow(2,8*r)-1,0);var n=r-1,a=1;for(this[e+n]=255&t;--n>=0&&(a*=256);)this[e+n]=t/a&255;return e+r},o.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,255,0),this[e]=255&t,e+1},o.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},o.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},o.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},o.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},o.prototype.writeIntLE=function(t,e,r,i){if(t=+t,e>>>=0,!i){var n=Math.pow(2,8*r-1);R(this,t,e,r,n-1,-n)}var a=0,o=1,s=0;for(this[e]=255&t;++a<r&&(o*=256);)t<0&&0===s&&0!==this[e+a-1]&&(s=1),this[e+a]=(t/o>>0)-s&255;return e+r},o.prototype.writeIntBE=function(t,e,r,i){if(t=+t,e>>>=0,!i){var n=Math.pow(2,8*r-1);R(this,t,e,r,n-1,-n)}var a=r-1,o=1,s=0;for(this[e+a]=255&t;--a>=0&&(o*=256);)t<0&&0===s&&0!==this[e+a+1]&&(s=1),this[e+a]=(t/o>>0)-s&255;return e+r},o.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},o.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},o.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},o.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},o.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},o.prototype.writeFloatLE=function(t,e,r){return O(this,t,e,!0,r)},o.prototype.writeFloatBE=function(t,e,r){return O(this,t,e,!1,r)},o.prototype.writeDoubleLE=function(t,e,r){return L(this,t,e,!0,r)},o.prototype.writeDoubleBE=function(t,e,r){return L(this,t,e,!1,r)},o.prototype.copy=function(t,e,r,i){if(!o.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<r&&(i=r),i===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-r&&(i=t.length-e+r);var n=i-r;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,i);else if(this===t&&r<e&&e<i)for(var a=n-1;a>=0;--a)t[a+e]=this[a+r];else Uint8Array.prototype.set.call(t,this.subarray(r,i),e);return n},o.prototype.fill=function(t,e,r,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!o.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){var n=t.charCodeAt(0);("utf8"===i&&n<128||"latin1"===i)&&(t=n)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var a;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(a=e;a<r;++a)this[a]=t;else{var s=o.isBuffer(t)?t:o.from(t,i),h=s.length;if(0===h)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(a=0;a<r-e;++a)this[a+e]=s[a%h]}return this};var C=/[^+/0-9A-Za-z-_]/g;function U(t,e){var r;e=e||1/0;for(var i=t.length,n=null,a=[],o=0;o<i;++o){if((r=t.charCodeAt(o))>55295&&r<57344){if(!n){if(r>56319){(e-=3)>-1&&a.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=r;continue}if(r<56320){(e-=3)>-1&&a.push(239,191,189),n=r;continue}r=65536+(n-55296<<10|r-56320)}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,r<128){if((e-=1)<0)break;a.push(r)}else if(r<2048){if((e-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function D(t){return e.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(C,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function z(t,e,r,i){for(var n=0;n<i&&!(n+r>=e.length||n>=t.length);++n)e[n+r]=t[n];return n}function N(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function F(t){return t!=t}}).call(this)}).call(this,t("buffer").Buffer)},{"base64-js":29,buffer:33,ieee754:44}],34:[function(t,e,r){"use strict";var i,n=TypeError,a=Object.getOwnPropertyDescriptor;if(a)try{a({},"")}catch(t){a=null}var o=function(){throw new n},s=a?function(){try{return o}catch(t){try{return a(arguments,"callee").get}catch(t){return o}}}():o,h=t("has-symbols")(),f=Object.getPrototypeOf||function(t){return t.__proto__},u=i,l=i,c=i,d=i,p="undefined"==typeof Uint8Array?i:f(Uint8Array),m={"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?i:ArrayBuffer,"%ArrayBufferPrototype%":"undefined"==typeof ArrayBuffer?i:ArrayBuffer.prototype,"%ArrayIteratorPrototype%":h?f([][Symbol.iterator]()):i,"%ArrayPrototype%":Array.prototype,"%ArrayProto_entries%":Array.prototype.entries,"%ArrayProto_forEach%":Array.prototype.forEach,"%ArrayProto_keys%":Array.prototype.keys,"%ArrayProto_values%":Array.prototype.values,"%AsyncFromSyncIteratorPrototype%":i,"%AsyncFunction%":l,"%AsyncFunctionPrototype%":i,"%AsyncGenerator%":i,"%AsyncGeneratorFunction%":c,"%AsyncGeneratorPrototype%":i,"%AsyncIteratorPrototype%":d&&h&&Symbol.asyncIterator?d[Symbol.asyncIterator]():i,"%Atomics%":"undefined"==typeof Atomics?i:Atomics,"%Boolean%":Boolean,"%BooleanPrototype%":Boolean.prototype,"%DataView%":"undefined"==typeof DataView?i:DataView,"%DataViewPrototype%":"undefined"==typeof DataView?i:DataView.prototype,"%Date%":Date,"%DatePrototype%":Date.prototype,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%ErrorPrototype%":Error.prototype,"%eval%":eval,"%EvalError%":EvalError,"%EvalErrorPrototype%":EvalError.prototype,"%Float32Array%":"undefined"==typeof Float32Array?i:Float32Array,"%Float32ArrayPrototype%":"undefined"==typeof Float32Array?i:Float32Array.prototype,"%Float64Array%":"undefined"==typeof Float64Array?i:Float64Array,"%Float64ArrayPrototype%":"undefined"==typeof Float64Array?i:Float64Array.prototype,"%Function%":Function,"%FunctionPrototype%":Function.prototype,"%Generator%":i,"%GeneratorFunction%":u,"%GeneratorPrototype%":i,"%Int8Array%":"undefined"==typeof Int8Array?i:Int8Array,"%Int8ArrayPrototype%":"undefined"==typeof Int8Array?i:Int8Array.prototype,"%Int16Array%":"undefined"==typeof Int16Array?i:Int16Array,"%Int16ArrayPrototype%":"undefined"==typeof Int16Array?i:Int8Array.prototype,"%Int32Array%":"undefined"==typeof Int32Array?i:Int32Array,"%Int32ArrayPrototype%":"undefined"==typeof Int32Array?i:Int32Array.prototype,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":h?f(f([][Symbol.iterator]())):i,"%JSON%":"object"==typeof JSON?JSON:i,"%JSONParse%":"object"==typeof JSON?JSON.parse:i,"%Map%":"undefined"==typeof Map?i:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&h?f((new Map)[Symbol.iterator]()):i,"%MapPrototype%":"undefined"==typeof Map?i:Map.prototype,"%Math%":Math,"%Number%":Number,"%NumberPrototype%":Number.prototype,"%Object%":Object,"%ObjectPrototype%":Object.prototype,"%ObjProto_toString%":Object.prototype.toString,"%ObjProto_valueOf%":Object.prototype.valueOf,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?i:Promise,"%PromisePrototype%":"undefined"==typeof Promise?i:Promise.prototype,"%PromiseProto_then%":"undefined"==typeof Promise?i:Promise.prototype.then,"%Promise_all%":"undefined"==typeof Promise?i:Promise.all,"%Promise_reject%":"undefined"==typeof Promise?i:Promise.reject,"%Promise_resolve%":"undefined"==typeof Promise?i:Promise.resolve,"%Proxy%":"undefined"==typeof Proxy?i:Proxy,"%RangeError%":RangeError,"%RangeErrorPrototype%":RangeError.prototype,"%ReferenceError%":ReferenceError,"%ReferenceErrorPrototype%":ReferenceError.prototype,"%Reflect%":"undefined"==typeof Reflect?i:Reflect,"%RegExp%":RegExp,"%RegExpPrototype%":RegExp.prototype,"%Set%":"undefined"==typeof Set?i:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&h?f((new Set)[Symbol.iterator]()):i,"%SetPrototype%":"undefined"==typeof Set?i:Set.prototype,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?i:SharedArrayBuffer,"%SharedArrayBufferPrototype%":"undefined"==typeof SharedArrayBuffer?i:SharedArrayBuffer.prototype,"%String%":String,"%StringIteratorPrototype%":h?f(""[Symbol.iterator]()):i,"%StringPrototype%":String.prototype,"%Symbol%":h?Symbol:i,"%SymbolPrototype%":h?Symbol.prototype:i,"%SyntaxError%":SyntaxError,"%SyntaxErrorPrototype%":SyntaxError.prototype,"%ThrowTypeError%":s,"%TypedArray%":p,"%TypedArrayPrototype%":p?p.prototype:i,"%TypeError%":n,"%TypeErrorPrototype%":n.prototype,"%Uint8Array%":"undefined"==typeof Uint8Array?i:Uint8Array,"%Uint8ArrayPrototype%":"undefined"==typeof Uint8Array?i:Uint8Array.prototype,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?i:Uint8ClampedArray,"%Uint8ClampedArrayPrototype%":"undefined"==typeof Uint8ClampedArray?i:Uint8ClampedArray.prototype,"%Uint16Array%":"undefined"==typeof Uint16Array?i:Uint16Array,"%Uint16ArrayPrototype%":"undefined"==typeof Uint16Array?i:Uint16Array.prototype,"%Uint32Array%":"undefined"==typeof Uint32Array?i:Uint32Array,"%Uint32ArrayPrototype%":"undefined"==typeof Uint32Array?i:Uint32Array.prototype,"%URIError%":URIError,"%URIErrorPrototype%":URIError.prototype,"%WeakMap%":"undefined"==typeof WeakMap?i:WeakMap,"%WeakMapPrototype%":"undefined"==typeof WeakMap?i:WeakMap.prototype,"%WeakSet%":"undefined"==typeof WeakSet?i:WeakSet,"%WeakSetPrototype%":"undefined"==typeof WeakSet?i:WeakSet.prototype},g=t("function-bind").call(Function.call,String.prototype.replace),b=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,_=/\\(\\)?/g,y=function(t){var e=[];return g(t,b,(function(t,r,i,n){e[e.length]=i?g(n,_,"$1"):r||t})),e},w=function(t,e){if(!(t in m))throw new SyntaxError("intrinsic "+t+" does not exist!");if(void 0===m[t]&&!e)throw new n("intrinsic "+t+" exists, but is not available. Please file an issue!");return m[t]};e.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new TypeError("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new TypeError('"allowMissing" argument must be a boolean');for(var r=y(t),i=w("%"+(r.length>0?r[0]:"")+"%",e),o=1;o<r.length;o+=1)if(null!=i)if(a&&o+1>=r.length){var s=a(i,r[o]);if(!e&&!(r[o]in i))throw new n("base intrinsic for "+t+" exists, but the property is not available.");i=s?s.get||s.value:i[r[o]]}else i=i[r[o]];return i}},{"function-bind":41,"has-symbols":42}],35:[function(t,e,r){"use strict";var i=t("function-bind"),n=t("../GetIntrinsic")("%Function%"),a=n.apply,o=n.call;e.exports=function(){return i.apply(o,arguments)},e.exports.apply=function(){return i.apply(a,arguments)}},{"../GetIntrinsic":34,"function-bind":41}],36:[function(t,e,r){"use strict";var i=t("../GetIntrinsic"),n=t("./callBind"),a=n(i("String.prototype.indexOf"));e.exports=function(t,e){var r=i(t,!!e);return"function"==typeof r&&a(t,".prototype.")?n(r):r}},{"../GetIntrinsic":34,"./callBind":35}],37:[function(t,e,r){"use strict";var i=t("../GetIntrinsic")("%Object.getOwnPropertyDescriptor%");if(i)try{i([],"length")}catch(t){i=null}e.exports=i},{"../GetIntrinsic":34}],38:[function(t,e,r){"use strict";var i,n="object"==typeof Reflect?Reflect:null,a=n&&"function"==typeof n.apply?n.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};i=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var o=Number.isNaN||function(t){return t!=t};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(t,e){return new Promise((function(r,i){function n(){void 0!==a&&t.removeListener("error",a),r([].slice.call(arguments))}var a;"error"!==e&&(a=function(r){t.removeListener(e,n),i(r)},t.once("error",a)),t.once(e,n)}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var h=10;function f(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?s.defaultMaxListeners:t._maxListeners}function l(t,e,r,i){var n,a,o,s;if(f(r),void 0===(a=t._events)?(a=t._events=Object.create(null),t._eventsCount=0):(void 0!==a.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),o=a[e]),void 0===o)o=a[e]=r,++t._eventsCount;else if("function"==typeof o?o=a[e]=i?[r,o]:[o,r]:i?o.unshift(r):o.push(r),(n=u(t))>0&&o.length>n&&!o.warned){o.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=t,h.type=e,h.count=o.length,s=h,console&&console.warn&&console.warn(s)}return t}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(t,e,r){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},n=c.bind(i);return n.listener=r,i.wrapFn=n,n}function p(t,e,r){var i=t._events;if(void 0===i)return[];var n=i[e];return void 0===n?[]:"function"==typeof n?r?[n.listener||n]:[n]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(n):g(n,n.length)}function m(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function g(t,e){for(var r=new Array(e),i=0;i<e;++i)r[i]=t[i];return r}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return h},set:function(t){if("number"!=typeof t||t<0||o(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");h=t}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||o(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var i="error"===t,n=this._events;if(void 0!==n)i=i&&void 0===n.error;else if(!i)return!1;if(i){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var h=n[t];if(void 0===h)return!1;if("function"==typeof h)a(h,this,e);else{var f=h.length,u=g(h,f);for(r=0;r<f;++r)a(u[r],this,e)}return!0},s.prototype.addListener=function(t,e){return l(this,t,e,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(t,e){return l(this,t,e,!0)},s.prototype.once=function(t,e){return f(e),this.on(t,d(this,t,e)),this},s.prototype.prependOnceListener=function(t,e){return f(e),this.prependListener(t,d(this,t,e)),this},s.prototype.removeListener=function(t,e){var r,i,n,a,o;if(f(e),void 0===(i=this._events))return this;if(void 0===(r=i[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(n=-1,a=r.length-1;a>=0;a--)if(r[a]===e||r[a].listener===e){o=r[a].listener,n=a;break}if(n<0)return this;0===n?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,n),1===r.length&&(i[t]=r[0]),void 0!==i.removeListener&&this.emit("removeListener",t,o||e)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(t){var e,r,i;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var n,a=Object.keys(r);for(i=0;i<a.length;++i)"removeListener"!==(n=a[i])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this},s.prototype.listeners=function(t){return p(this,t,!0)},s.prototype.rawListeners=function(t){return p(this,t,!1)},s.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):m.call(t,e)},s.prototype.listenerCount=m,s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},{}],39:[function(t,e,r){var i=Object.prototype.hasOwnProperty,n=Object.prototype.toString;e.exports=function(t,e,r){if("[object Function]"!==n.call(e))throw new TypeError("iterator must be a function");var a=t.length;if(a===+a)for(var o=0;o<a;o++)e.call(r,t[o],o,t);else for(var s in t)i.call(t,s)&&e.call(r,t[s],s,t)}},{}],40:[function(t,e,r){"use strict";var i="Function.prototype.bind called on incompatible ",n=Array.prototype.slice,a=Object.prototype.toString,o="[object Function]";e.exports=function(t){var e=this;if("function"!=typeof e||a.call(e)!==o)throw new TypeError(i+e);for(var r,s=n.call(arguments,1),h=Math.max(0,e.length-s.length),f=[],u=0;u<h;u++)f.push("$"+u);if(r=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof r){var i=e.apply(this,s.concat(n.call(arguments)));return Object(i)===i?i:this}return e.apply(t,s.concat(n.call(arguments)))})),e.prototype){var l=function(){};l.prototype=e.prototype,r.prototype=new l,l.prototype=null}return r}},{}],41:[function(t,e,r){"use strict";var i=t("./implementation");e.exports=Function.prototype.bind||i},{"./implementation":40}],42:[function(t,e,i){(function(r){(function(){"use strict";var i=r.Symbol,n=t("./shams");e.exports=function(){return"function"==typeof i&&"function"==typeof Symbol&&"symbol"==typeof i("foo")&&"symbol"==typeof Symbol("bar")&&n()}}).call(this)}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./shams":43}],43:[function(t,e,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var i=Object.getOwnPropertySymbols(t);if(1!==i.length||i[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},{}],44:[function(t,e,r){r.read=function(t,e,r,i,n){var a,o,s=8*n-i-1,h=(1<<s)-1,f=h>>1,u=-7,l=r?n-1:0,c=r?-1:1,d=t[e+l];for(l+=c,a=d&(1<<-u)-1,d>>=-u,u+=s;u>0;a=256*a+t[e+l],l+=c,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=i;u>0;o=256*o+t[e+l],l+=c,u-=8);if(0===a)a=1-f;else{if(a===h)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,i),a-=f}return(d?-1:1)*o*Math.pow(2,a-i)},r.write=function(t,e,r,i,n,a){var o,s,h,f=8*a-n-1,u=(1<<f)-1,l=u>>1,c=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,d=i?0:a-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-o))<1&&(o--,h*=2),(e+=o+l>=1?c/h:c*Math.pow(2,1-l))*h>=2&&(o++,h/=2),o+l>=u?(s=0,o=u):o+l>=1?(s=(e*h-1)*Math.pow(2,n),o+=l):(s=e*Math.pow(2,l-1)*Math.pow(2,n),o=0));n>=8;t[r+d]=255&s,d+=p,s/=256,n-=8);for(o=o<<n|s,f+=n;f>0;t[r+d]=255&o,d+=p,o/=256,f-=8);t[r+d-p]|=128*m}},{}],45:[function(t,e,r){"function"==typeof Object.create?e.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},{}],46:[function(t,e,r){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,n=Object.prototype.toString,a=function(t){return!(i&&t&&"object"==typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===n.call(t)},o=function(t){return!!a(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==n.call(t)&&"[object Function]"===n.call(t.callee)},s=function(){return a(arguments)}();a.isLegacyArguments=o,e.exports=s?a:o},{}],47:[function(t,e,r){"use strict";var i=Object.prototype.toString,n=Function.prototype.toString,a=/^\s*(?:function)?\*/,o="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,s=Object.getPrototypeOf,h=function(){if(!o)return!1;try{return Function("return function*() {}")()}catch(t){}}(),f=h?s(h):{};e.exports=function(t){return"function"==typeof t&&(!!a.test(n.call(t))||(o?s(t)===f:"[object GeneratorFunction]"===i.call(t)))}},{}],48:[function(t,e,i){(function(r){(function(){"use strict";var i=t("foreach"),n=t("available-typed-arrays"),a=t("es-abstract/helpers/callBound"),o=a("Object.prototype.toString"),s=t("has-symbols")()&&"symbol"==typeof Symbol.toStringTag,h=n(),f=a("Array.prototype.indexOf",!0)||function(t,e){for(var r=0;r<t.length;r+=1)if(t[r]===e)return r;return-1},u=a("String.prototype.slice"),l={},c=t("es-abstract/helpers/getOwnPropertyDescriptor"),d=Object.getPrototypeOf;s&&c&&d&&i(h,(function(t){var e=new r[t];if(!(Symbol.toStringTag in e))throw new EvalError("this engine has support for Symbol.toStringTag, but "+t+" does not have the property! Please report this.");var i=d(e),n=c(i,Symbol.toStringTag);if(!n){var a=d(i);n=c(a,Symbol.toStringTag)}l[t]=n.get}));e.exports=function(t){if(!t||"object"!=typeof t)return!1;if(!s){var e=u(o(t),8,-1);return f(h,e)>-1}return!!c&&function(t){var e=!1;return i(l,(function(r,i){if(!e)try{e=r.call(t)===i}catch(t){}})),e}(t)}}).call(this)}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"available-typed-arrays":27,"es-abstract/helpers/callBound":36,"es-abstract/helpers/getOwnPropertyDescriptor":37,foreach:39,"has-symbols":42}],49:[function(t,e,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)n(r,i)&&(t[i]=r[i])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var a={arraySet:function(t,e,r,i,n){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+i),n);else for(var a=0;a<i;a++)t[n+a]=e[r+a]},flattenChunks:function(t){var e,r,i,n,a,o;for(i=0,e=0,r=t.length;e<r;e++)i+=t[e].length;for(o=new Uint8Array(i),n=0,e=0,r=t.length;e<r;e++)a=t[e],o.set(a,n),n+=a.length;return o}},o={arraySet:function(t,e,r,i,n){for(var a=0;a<i;a++)t[n+a]=e[r+a]},flattenChunks:function(t){return[].concat.apply([],t)}};r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(i)},{}],50:[function(t,e,r){"use strict";e.exports=function(t,e,r,i){for(var n=65535&t|0,a=t>>>16&65535|0,o=0;0!==r;){r-=o=r>2e3?2e3:r;do{a=a+(n=n+e[i++]|0)|0}while(--o);n%=65521,a%=65521}return n|a<<16|0}},{}],51:[function(t,e,r){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],52:[function(t,e,r){"use strict";var i=function(){for(var t,e=[],r=0;r<256;r++){t=r;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[r]=t}return e}();e.exports=function(t,e,r,n){var a=i,o=n+r;t^=-1;for(var s=n;s<o;s++)t=t>>>8^a[255&(t^e[s])];return-1^t}},{}],53:[function(t,e,r){"use strict";var i,n=t("../utils/common"),a=t("./trees"),o=t("./adler32"),s=t("./crc32"),h=t("./messages"),f=0,u=1,l=3,c=4,d=5,p=0,m=1,g=-2,b=-3,_=-5,y=-1,w=1,v=2,x=3,E=4,k=0,S=2,M=8,A=9,I=15,T=8,B=286,R=30,P=19,O=2*B+1,L=15,C=3,U=258,D=U+C+1,z=32,N=42,F=69,j=73,G=91,H=103,W=113,q=666,Z=1,Y=2,V=3,X=4,Q=3;function J(t,e){return t.msg=h[e],e}function K(t){return(t<<1)-(t>4?9:0)}function $(t){for(var e=t.length;--e>=0;)t[e]=0}function tt(t){var e=t.state,r=e.pending;r>t.avail_out&&(r=t.avail_out),0!==r&&(n.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function et(t,e){a._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,tt(t.strm)}function rt(t,e){t.pending_buf[t.pending++]=e}function it(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function nt(t,e){var r,i,n=t.max_chain_length,a=t.strstart,o=t.prev_length,s=t.nice_match,h=t.strstart>t.w_size-D?t.strstart-(t.w_size-D):0,f=t.window,u=t.w_mask,l=t.prev,c=t.strstart+U,d=f[a+o-1],p=f[a+o];t.prev_length>=t.good_match&&(n>>=2),s>t.lookahead&&(s=t.lookahead);do{if(f[(r=e)+o]===p&&f[r+o-1]===d&&f[r]===f[a]&&f[++r]===f[a+1]){a+=2,r++;do{}while(f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&a<c);if(i=U-(c-a),a=c-U,i>o){if(t.match_start=e,o=i,i>=s)break;d=f[a+o-1],p=f[a+o]}}}while((e=l[e&u])>h&&0!=--n);return o<=t.lookahead?o:t.lookahead}function at(t){var e,r,i,a,h,f,u,l,c,d,p=t.w_size;do{if(a=t.window_size-t.lookahead-t.strstart,t.strstart>=p+(p-D)){n.arraySet(t.window,t.window,p,p,0),t.match_start-=p,t.strstart-=p,t.block_start-=p,e=r=t.hash_size;do{i=t.head[--e],t.head[e]=i>=p?i-p:0}while(--r);e=r=p;do{i=t.prev[--e],t.prev[e]=i>=p?i-p:0}while(--r);a+=p}if(0===t.strm.avail_in)break;if(f=t.strm,u=t.window,l=t.strstart+t.lookahead,c=a,d=void 0,(d=f.avail_in)>c&&(d=c),r=0===d?0:(f.avail_in-=d,n.arraySet(u,f.input,f.next_in,d,l),1===f.state.wrap?f.adler=o(f.adler,u,d,l):2===f.state.wrap&&(f.adler=s(f.adler,u,d,l)),f.next_in+=d,f.total_in+=d,d),t.lookahead+=r,t.lookahead+t.insert>=C)for(h=t.strstart-t.insert,t.ins_h=t.window[h],t.ins_h=(t.ins_h<<t.hash_shift^t.window[h+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[h+C-1])&t.hash_mask,t.prev[h&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=h,h++,t.insert--,!(t.lookahead+t.insert<C)););}while(t.lookahead<D&&0!==t.strm.avail_in)}function ot(t,e){for(var r,i;;){if(t.lookahead<D){if(at(t),t.lookahead<D&&e===f)return Z;if(0===t.lookahead)break}if(r=0,t.lookahead>=C&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+C-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-D&&(t.match_length=nt(t,r)),t.match_length>=C)if(i=a._tr_tally(t,t.strstart-t.match_start,t.match_length-C),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=C){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+C-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(et(t,!1),0===t.strm.avail_out))return Z}return t.insert=t.strstart<C-1?t.strstart:C-1,e===c?(et(t,!0),0===t.strm.avail_out?V:X):t.last_lit&&(et(t,!1),0===t.strm.avail_out)?Z:Y}function st(t,e){for(var r,i,n;;){if(t.lookahead<D){if(at(t),t.lookahead<D&&e===f)return Z;if(0===t.lookahead)break}if(r=0,t.lookahead>=C&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+C-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=C-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-D&&(t.match_length=nt(t,r),t.match_length<=5&&(t.strategy===w||t.match_length===C&&t.strstart-t.match_start>4096)&&(t.match_length=C-1)),t.prev_length>=C&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-C,i=a._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-C),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+C-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=C-1,t.strstart++,i&&(et(t,!1),0===t.strm.avail_out))return Z}else if(t.match_available){if((i=a._tr_tally(t,0,t.window[t.strstart-1]))&&et(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return Z}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=a._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<C-1?t.strstart:C-1,e===c?(et(t,!0),0===t.strm.avail_out?V:X):t.last_lit&&(et(t,!1),0===t.strm.avail_out)?Z:Y}function ht(t,e,r,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=i,this.func=n}function ft(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*O),this.dyn_dtree=new n.Buf16(2*(2*R+1)),this.bl_tree=new n.Buf16(2*(2*P+1)),$(this.dyn_ltree),$(this.dyn_dtree),$(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(L+1),this.heap=new n.Buf16(2*B+1),$(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*B+1),$(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ut(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=S,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?N:W,t.adler=2===e.wrap?0:1,e.last_flush=f,a._tr_init(e),p):J(t,g)}function lt(t){var e,r=ut(t);return r===p&&((e=t.state).window_size=2*e.w_size,$(e.head),e.max_lazy_match=i[e.level].max_lazy,e.good_match=i[e.level].good_length,e.nice_match=i[e.level].nice_length,e.max_chain_length=i[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0),r}function ct(t,e,r,i,a,o){if(!t)return g;var s=1;if(e===y&&(e=6),i<0?(s=0,i=-i):i>15&&(s=2,i-=16),a<1||a>A||r!==M||i<8||i>15||e<0||e>9||o<0||o>E)return J(t,g);8===i&&(i=9);var h=new ft;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=i,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=a+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+C-1)/C),h.window=new n.Buf8(2*h.w_size),h.head=new n.Buf16(h.hash_size),h.prev=new n.Buf16(h.w_size),h.lit_bufsize=1<<a+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new n.Buf8(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=o,h.method=r,lt(t)}i=[new ht(0,0,0,0,(function(t,e){var r=65535;for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(at(t),0===t.lookahead&&e===f)return Z;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+r;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,et(t,!1),0===t.strm.avail_out))return Z;if(t.strstart-t.block_start>=t.w_size-D&&(et(t,!1),0===t.strm.avail_out))return Z}return t.insert=0,e===c?(et(t,!0),0===t.strm.avail_out?V:X):(t.strstart>t.block_start&&(et(t,!1),t.strm.avail_out),Z)})),new ht(4,4,8,4,ot),new ht(4,5,16,8,ot),new ht(4,6,32,32,ot),new ht(4,4,16,16,st),new ht(8,16,32,32,st),new ht(8,16,128,128,st),new ht(8,32,128,256,st),new ht(32,128,258,1024,st),new ht(32,258,258,4096,st)],r.deflateInit=function(t,e){return ct(t,e,M,I,T,k)},r.deflateInit2=ct,r.deflateReset=lt,r.deflateResetKeep=ut,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?g:(t.state.gzhead=e,p):g},r.deflate=function(t,e){var r,n,o,h;if(!t||!t.state||e>d||e<0)return t?J(t,g):g;if(n=t.state,!t.output||!t.input&&0!==t.avail_in||n.status===q&&e!==c)return J(t,0===t.avail_out?_:g);if(n.strm=t,r=n.last_flush,n.last_flush=e,n.status===N)if(2===n.wrap)t.adler=0,rt(n,31),rt(n,139),rt(n,8),n.gzhead?(rt(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),rt(n,255&n.gzhead.time),rt(n,n.gzhead.time>>8&255),rt(n,n.gzhead.time>>16&255),rt(n,n.gzhead.time>>24&255),rt(n,9===n.level?2:n.strategy>=v||n.level<2?4:0),rt(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(rt(n,255&n.gzhead.extra.length),rt(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=s(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=F):(rt(n,0),rt(n,0),rt(n,0),rt(n,0),rt(n,0),rt(n,9===n.level?2:n.strategy>=v||n.level<2?4:0),rt(n,Q),n.status=W);else{var b=M+(n.w_bits-8<<4)<<8;b|=(n.strategy>=v||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(b|=z),b+=31-b%31,n.status=W,it(n,b),0!==n.strstart&&(it(n,t.adler>>>16),it(n,65535&t.adler)),t.adler=1}if(n.status===F)if(n.gzhead.extra){for(o=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),tt(t),o=n.pending,n.pending!==n.pending_buf_size));)rt(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=j)}else n.status=j;if(n.status===j)if(n.gzhead.name){o=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),tt(t),o=n.pending,n.pending===n.pending_buf_size)){h=1;break}h=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,rt(n,h)}while(0!==h);n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),0===h&&(n.gzindex=0,n.status=G)}else n.status=G;if(n.status===G)if(n.gzhead.comment){o=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),tt(t),o=n.pending,n.pending===n.pending_buf_size)){h=1;break}h=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,rt(n,h)}while(0!==h);n.gzhead.hcrc&&n.pending>o&&(t.adler=s(t.adler,n.pending_buf,n.pending-o,o)),0===h&&(n.status=H)}else n.status=H;if(n.status===H&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&tt(t),n.pending+2<=n.pending_buf_size&&(rt(n,255&t.adler),rt(n,t.adler>>8&255),t.adler=0,n.status=W)):n.status=W),0!==n.pending){if(tt(t),0===t.avail_out)return n.last_flush=-1,p}else if(0===t.avail_in&&K(e)<=K(r)&&e!==c)return J(t,_);if(n.status===q&&0!==t.avail_in)return J(t,_);if(0!==t.avail_in||0!==n.lookahead||e!==f&&n.status!==q){var y=n.strategy===v?function(t,e){for(var r;;){if(0===t.lookahead&&(at(t),0===t.lookahead)){if(e===f)return Z;break}if(t.match_length=0,r=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(et(t,!1),0===t.strm.avail_out))return Z}return t.insert=0,e===c?(et(t,!0),0===t.strm.avail_out?V:X):t.last_lit&&(et(t,!1),0===t.strm.avail_out)?Z:Y}(n,e):n.strategy===x?function(t,e){for(var r,i,n,o,s=t.window;;){if(t.lookahead<=U){if(at(t),t.lookahead<=U&&e===f)return Z;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=C&&t.strstart>0&&(i=s[n=t.strstart-1])===s[++n]&&i===s[++n]&&i===s[++n]){o=t.strstart+U;do{}while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<o);t.match_length=U-(o-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=C?(r=a._tr_tally(t,1,t.match_length-C),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(et(t,!1),0===t.strm.avail_out))return Z}return t.insert=0,e===c?(et(t,!0),0===t.strm.avail_out?V:X):t.last_lit&&(et(t,!1),0===t.strm.avail_out)?Z:Y}(n,e):i[n.level].func(n,e);if(y!==V&&y!==X||(n.status=q),y===Z||y===V)return 0===t.avail_out&&(n.last_flush=-1),p;if(y===Y&&(e===u?a._tr_align(n):e!==d&&(a._tr_stored_block(n,0,0,!1),e===l&&($(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),tt(t),0===t.avail_out))return n.last_flush=-1,p}return e!==c?p:n.wrap<=0?m:(2===n.wrap?(rt(n,255&t.adler),rt(n,t.adler>>8&255),rt(n,t.adler>>16&255),rt(n,t.adler>>24&255),rt(n,255&t.total_in),rt(n,t.total_in>>8&255),rt(n,t.total_in>>16&255),rt(n,t.total_in>>24&255)):(it(n,t.adler>>>16),it(n,65535&t.adler)),tt(t),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?p:m)},r.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==N&&e!==F&&e!==j&&e!==G&&e!==H&&e!==W&&e!==q?J(t,g):(t.state=null,e===W?J(t,b):p):g},r.deflateSetDictionary=function(t,e){var r,i,a,s,h,f,u,l,c=e.length;if(!t||!t.state)return g;if(2===(s=(r=t.state).wrap)||1===s&&r.status!==N||r.lookahead)return g;for(1===s&&(t.adler=o(t.adler,e,c,0)),r.wrap=0,c>=r.w_size&&(0===s&&($(r.head),r.strstart=0,r.block_start=0,r.insert=0),l=new n.Buf8(r.w_size),n.arraySet(l,e,c-r.w_size,r.w_size,0),e=l,c=r.w_size),h=t.avail_in,f=t.next_in,u=t.input,t.avail_in=c,t.next_in=0,t.input=e,at(r);r.lookahead>=C;){i=r.strstart,a=r.lookahead-(C-1);do{r.ins_h=(r.ins_h<<r.hash_shift^r.window[i+C-1])&r.hash_mask,r.prev[i&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=i,i++}while(--a);r.strstart=i,r.lookahead=C-1,at(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=C-1,r.match_available=0,t.next_in=f,t.input=u,t.avail_in=h,r.wrap=s,p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":49,"./adler32":50,"./crc32":52,"./messages":57,"./trees":58}],54:[function(t,e,r){"use strict";e.exports=function(t,e){var r,i,n,a,o,s,h,f,u,l,c,d,p,m,g,b,_,y,w,v,x,E,k,S,M;r=t.state,i=t.next_in,S=t.input,n=i+(t.avail_in-5),a=t.next_out,M=t.output,o=a-(e-t.avail_out),s=a+(t.avail_out-257),h=r.dmax,f=r.wsize,u=r.whave,l=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,g=r.distcode,b=(1<<r.lenbits)-1,_=(1<<r.distbits)-1;t:do{p<15&&(d+=S[i++]<<p,p+=8,d+=S[i++]<<p,p+=8),y=m[d&b];e:for(;;){if(d>>>=w=y>>>24,p-=w,0==(w=y>>>16&255))M[a++]=65535&y;else{if(!(16&w)){if(0==(64&w)){y=m[(65535&y)+(d&(1<<w)-1)];continue e}if(32&w){r.mode=12;break t}t.msg="invalid literal/length code",r.mode=30;break t}v=65535&y,(w&=15)&&(p<w&&(d+=S[i++]<<p,p+=8),v+=d&(1<<w)-1,d>>>=w,p-=w),p<15&&(d+=S[i++]<<p,p+=8,d+=S[i++]<<p,p+=8),y=g[d&_];r:for(;;){if(d>>>=w=y>>>24,p-=w,!(16&(w=y>>>16&255))){if(0==(64&w)){y=g[(65535&y)+(d&(1<<w)-1)];continue r}t.msg="invalid distance code",r.mode=30;break t}if(x=65535&y,p<(w&=15)&&(d+=S[i++]<<p,(p+=8)<w&&(d+=S[i++]<<p,p+=8)),(x+=d&(1<<w)-1)>h){t.msg="invalid distance too far back",r.mode=30;break t}if(d>>>=w,p-=w,x>(w=a-o)){if((w=x-w)>u&&r.sane){t.msg="invalid distance too far back",r.mode=30;break t}if(E=0,k=c,0===l){if(E+=f-w,w<v){v-=w;do{M[a++]=c[E++]}while(--w);E=a-x,k=M}}else if(l<w){if(E+=f+l-w,(w-=l)<v){v-=w;do{M[a++]=c[E++]}while(--w);if(E=0,l<v){v-=w=l;do{M[a++]=c[E++]}while(--w);E=a-x,k=M}}}else if(E+=l-w,w<v){v-=w;do{M[a++]=c[E++]}while(--w);E=a-x,k=M}for(;v>2;)M[a++]=k[E++],M[a++]=k[E++],M[a++]=k[E++],v-=3;v&&(M[a++]=k[E++],v>1&&(M[a++]=k[E++]))}else{E=a-x;do{M[a++]=M[E++],M[a++]=M[E++],M[a++]=M[E++],v-=3}while(v>2);v&&(M[a++]=M[E++],v>1&&(M[a++]=M[E++]))}break}}break}}while(i<n&&a<s);i-=v=p>>3,d&=(1<<(p-=v<<3))-1,t.next_in=i,t.next_out=a,t.avail_in=i<n?n-i+5:5-(i-n),t.avail_out=a<s?s-a+257:257-(a-s),r.hold=d,r.bits=p}},{}],55:[function(t,e,r){"use strict";var i=t("../utils/common"),n=t("./adler32"),a=t("./crc32"),o=t("./inffast"),s=t("./inftrees"),h=0,f=1,u=2,l=4,c=5,d=6,p=0,m=1,g=2,b=-2,_=-3,y=-4,w=-5,v=8,x=1,E=2,k=3,S=4,M=5,A=6,I=7,T=8,B=9,R=10,P=11,O=12,L=13,C=14,U=15,D=16,z=17,N=18,F=19,j=20,G=21,H=22,W=23,q=24,Z=25,Y=26,V=27,X=28,Q=29,J=30,K=31,$=852,tt=592,et=15;function rt(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function it(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function nt(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=x,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new i.Buf32($),e.distcode=e.distdyn=new i.Buf32(tt),e.sane=1,e.back=-1,p):b}function at(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,nt(t)):b}function ot(t,e){var r,i;return t&&t.state?(i=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?b:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=r,i.wbits=e,at(t))):b}function st(t,e){var r,i;return t?(i=new it,t.state=i,i.window=null,(r=ot(t,e))!==p&&(t.state=null),r):b}var ht,ft,ut=!0;function lt(t){if(ut){var e;for(ht=new i.Buf32(512),ft=new i.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(s(f,t.lens,0,288,ht,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;s(u,t.lens,0,32,ft,0,t.work,{bits:5}),ut=!1}t.lencode=ht,t.lenbits=9,t.distcode=ft,t.distbits=5}function ct(t,e,r,n){var a,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new i.Buf8(o.wsize)),n>=o.wsize?(i.arraySet(o.window,e,r-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((a=o.wsize-o.wnext)>n&&(a=n),i.arraySet(o.window,e,r-n,a,o.wnext),(n-=a)?(i.arraySet(o.window,e,r-n,n,0),o.wnext=n,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}r.inflateReset=at,r.inflateReset2=ot,r.inflateResetKeep=nt,r.inflateInit=function(t){return st(t,et)},r.inflateInit2=st,r.inflate=function(t,e){var r,$,tt,et,it,nt,at,ot,st,ht,ft,ut,dt,pt,mt,gt,bt,_t,yt,wt,vt,xt,Et,kt,St=0,Mt=new i.Buf8(4),At=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return b;(r=t.state).mode===O&&(r.mode=L),it=t.next_out,tt=t.output,at=t.avail_out,et=t.next_in,$=t.input,nt=t.avail_in,ot=r.hold,st=r.bits,ht=nt,ft=at,xt=p;t:for(;;)switch(r.mode){case x:if(0===r.wrap){r.mode=L;break}for(;st<16;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(2&r.wrap&&35615===ot){r.check=0,Mt[0]=255&ot,Mt[1]=ot>>>8&255,r.check=a(r.check,Mt,2,0),ot=0,st=0,r.mode=E;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&ot)<<8)+(ot>>8))%31){t.msg="incorrect header check",r.mode=J;break}if((15&ot)!==v){t.msg="unknown compression method",r.mode=J;break}if(st-=4,vt=8+(15&(ot>>>=4)),0===r.wbits)r.wbits=vt;else if(vt>r.wbits){t.msg="invalid window size",r.mode=J;break}r.dmax=1<<vt,t.adler=r.check=1,r.mode=512&ot?R:O,ot=0,st=0;break;case E:for(;st<16;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(r.flags=ot,(255&r.flags)!==v){t.msg="unknown compression method",r.mode=J;break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=J;break}r.head&&(r.head.text=ot>>8&1),512&r.flags&&(Mt[0]=255&ot,Mt[1]=ot>>>8&255,r.check=a(r.check,Mt,2,0)),ot=0,st=0,r.mode=k;case k:for(;st<32;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}r.head&&(r.head.time=ot),512&r.flags&&(Mt[0]=255&ot,Mt[1]=ot>>>8&255,Mt[2]=ot>>>16&255,Mt[3]=ot>>>24&255,r.check=a(r.check,Mt,4,0)),ot=0,st=0,r.mode=S;case S:for(;st<16;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}r.head&&(r.head.xflags=255&ot,r.head.os=ot>>8),512&r.flags&&(Mt[0]=255&ot,Mt[1]=ot>>>8&255,r.check=a(r.check,Mt,2,0)),ot=0,st=0,r.mode=M;case M:if(1024&r.flags){for(;st<16;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}r.length=ot,r.head&&(r.head.extra_len=ot),512&r.flags&&(Mt[0]=255&ot,Mt[1]=ot>>>8&255,r.check=a(r.check,Mt,2,0)),ot=0,st=0}else r.head&&(r.head.extra=null);r.mode=A;case A:if(1024&r.flags&&((ut=r.length)>nt&&(ut=nt),ut&&(r.head&&(vt=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),i.arraySet(r.head.extra,$,et,ut,vt)),512&r.flags&&(r.check=a(r.check,$,ut,et)),nt-=ut,et+=ut,r.length-=ut),r.length))break t;r.length=0,r.mode=I;case I:if(2048&r.flags){if(0===nt)break t;ut=0;do{vt=$[et+ut++],r.head&&vt&&r.length<65536&&(r.head.name+=String.fromCharCode(vt))}while(vt&&ut<nt);if(512&r.flags&&(r.check=a(r.check,$,ut,et)),nt-=ut,et+=ut,vt)break t}else r.head&&(r.head.name=null);r.length=0,r.mode=T;case T:if(4096&r.flags){if(0===nt)break t;ut=0;do{vt=$[et+ut++],r.head&&vt&&r.length<65536&&(r.head.comment+=String.fromCharCode(vt))}while(vt&&ut<nt);if(512&r.flags&&(r.check=a(r.check,$,ut,et)),nt-=ut,et+=ut,vt)break t}else r.head&&(r.head.comment=null);r.mode=B;case B:if(512&r.flags){for(;st<16;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(ot!==(65535&r.check)){t.msg="header crc mismatch",r.mode=J;break}ot=0,st=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=O;break;case R:for(;st<32;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}t.adler=r.check=rt(ot),ot=0,st=0,r.mode=P;case P:if(0===r.havedict)return t.next_out=it,t.avail_out=at,t.next_in=et,t.avail_in=nt,r.hold=ot,r.bits=st,g;t.adler=r.check=1,r.mode=O;case O:if(e===c||e===d)break t;case L:if(r.last){ot>>>=7&st,st-=7&st,r.mode=V;break}for(;st<3;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}switch(r.last=1&ot,st-=1,3&(ot>>>=1)){case 0:r.mode=C;break;case 1:if(lt(r),r.mode=j,e===d){ot>>>=2,st-=2;break t}break;case 2:r.mode=z;break;case 3:t.msg="invalid block type",r.mode=J}ot>>>=2,st-=2;break;case C:for(ot>>>=7&st,st-=7&st;st<32;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if((65535&ot)!=(ot>>>16^65535)){t.msg="invalid stored block lengths",r.mode=J;break}if(r.length=65535&ot,ot=0,st=0,r.mode=U,e===d)break t;case U:r.mode=D;case D:if(ut=r.length){if(ut>nt&&(ut=nt),ut>at&&(ut=at),0===ut)break t;i.arraySet(tt,$,et,ut,it),nt-=ut,et+=ut,at-=ut,it+=ut,r.length-=ut;break}r.mode=O;break;case z:for(;st<14;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(r.nlen=257+(31&ot),ot>>>=5,st-=5,r.ndist=1+(31&ot),ot>>>=5,st-=5,r.ncode=4+(15&ot),ot>>>=4,st-=4,r.nlen>286||r.ndist>30){t.msg="too many length or distance symbols",r.mode=J;break}r.have=0,r.mode=N;case N:for(;r.have<r.ncode;){for(;st<3;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}r.lens[At[r.have++]]=7&ot,ot>>>=3,st-=3}for(;r.have<19;)r.lens[At[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,Et={bits:r.lenbits},xt=s(h,r.lens,0,19,r.lencode,0,r.work,Et),r.lenbits=Et.bits,xt){t.msg="invalid code lengths set",r.mode=J;break}r.have=0,r.mode=F;case F:for(;r.have<r.nlen+r.ndist;){for(;gt=(St=r.lencode[ot&(1<<r.lenbits)-1])>>>16&255,bt=65535&St,!((mt=St>>>24)<=st);){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(bt<16)ot>>>=mt,st-=mt,r.lens[r.have++]=bt;else{if(16===bt){for(kt=mt+2;st<kt;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(ot>>>=mt,st-=mt,0===r.have){t.msg="invalid bit length repeat",r.mode=J;break}vt=r.lens[r.have-1],ut=3+(3&ot),ot>>>=2,st-=2}else if(17===bt){for(kt=mt+3;st<kt;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}st-=mt,vt=0,ut=3+(7&(ot>>>=mt)),ot>>>=3,st-=3}else{for(kt=mt+7;st<kt;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}st-=mt,vt=0,ut=11+(127&(ot>>>=mt)),ot>>>=7,st-=7}if(r.have+ut>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=J;break}for(;ut--;)r.lens[r.have++]=vt}}if(r.mode===J)break;if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=J;break}if(r.lenbits=9,Et={bits:r.lenbits},xt=s(f,r.lens,0,r.nlen,r.lencode,0,r.work,Et),r.lenbits=Et.bits,xt){t.msg="invalid literal/lengths set",r.mode=J;break}if(r.distbits=6,r.distcode=r.distdyn,Et={bits:r.distbits},xt=s(u,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,Et),r.distbits=Et.bits,xt){t.msg="invalid distances set",r.mode=J;break}if(r.mode=j,e===d)break t;case j:r.mode=G;case G:if(nt>=6&&at>=258){t.next_out=it,t.avail_out=at,t.next_in=et,t.avail_in=nt,r.hold=ot,r.bits=st,o(t,ft),it=t.next_out,tt=t.output,at=t.avail_out,et=t.next_in,$=t.input,nt=t.avail_in,ot=r.hold,st=r.bits,r.mode===O&&(r.back=-1);break}for(r.back=0;gt=(St=r.lencode[ot&(1<<r.lenbits)-1])>>>16&255,bt=65535&St,!((mt=St>>>24)<=st);){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(gt&&0==(240&gt)){for(_t=mt,yt=gt,wt=bt;gt=(St=r.lencode[wt+((ot&(1<<_t+yt)-1)>>_t)])>>>16&255,bt=65535&St,!(_t+(mt=St>>>24)<=st);){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}ot>>>=_t,st-=_t,r.back+=_t}if(ot>>>=mt,st-=mt,r.back+=mt,r.length=bt,0===gt){r.mode=Y;break}if(32&gt){r.back=-1,r.mode=O;break}if(64&gt){t.msg="invalid literal/length code",r.mode=J;break}r.extra=15&gt,r.mode=H;case H:if(r.extra){for(kt=r.extra;st<kt;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}r.length+=ot&(1<<r.extra)-1,ot>>>=r.extra,st-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=W;case W:for(;gt=(St=r.distcode[ot&(1<<r.distbits)-1])>>>16&255,bt=65535&St,!((mt=St>>>24)<=st);){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(0==(240&gt)){for(_t=mt,yt=gt,wt=bt;gt=(St=r.distcode[wt+((ot&(1<<_t+yt)-1)>>_t)])>>>16&255,bt=65535&St,!(_t+(mt=St>>>24)<=st);){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}ot>>>=_t,st-=_t,r.back+=_t}if(ot>>>=mt,st-=mt,r.back+=mt,64&gt){t.msg="invalid distance code",r.mode=J;break}r.offset=bt,r.extra=15&gt,r.mode=q;case q:if(r.extra){for(kt=r.extra;st<kt;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}r.offset+=ot&(1<<r.extra)-1,ot>>>=r.extra,st-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=J;break}r.mode=Z;case Z:if(0===at)break t;if(ut=ft-at,r.offset>ut){if((ut=r.offset-ut)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=J;break}ut>r.wnext?(ut-=r.wnext,dt=r.wsize-ut):dt=r.wnext-ut,ut>r.length&&(ut=r.length),pt=r.window}else pt=tt,dt=it-r.offset,ut=r.length;ut>at&&(ut=at),at-=ut,r.length-=ut;do{tt[it++]=pt[dt++]}while(--ut);0===r.length&&(r.mode=G);break;case Y:if(0===at)break t;tt[it++]=r.length,at--,r.mode=G;break;case V:if(r.wrap){for(;st<32;){if(0===nt)break t;nt--,ot|=$[et++]<<st,st+=8}if(ft-=at,t.total_out+=ft,r.total+=ft,ft&&(t.adler=r.check=r.flags?a(r.check,tt,ft,it-ft):n(r.check,tt,ft,it-ft)),ft=at,(r.flags?ot:rt(ot))!==r.check){t.msg="incorrect data check",r.mode=J;break}ot=0,st=0}r.mode=X;case X:if(r.wrap&&r.flags){for(;st<32;){if(0===nt)break t;nt--,ot+=$[et++]<<st,st+=8}if(ot!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=J;break}ot=0,st=0}r.mode=Q;case Q:xt=m;break t;case J:xt=_;break t;case K:return y;default:return b}return t.next_out=it,t.avail_out=at,t.next_in=et,t.avail_in=nt,r.hold=ot,r.bits=st,(r.wsize||ft!==t.avail_out&&r.mode<J&&(r.mode<V||e!==l))&&ct(t,t.output,t.next_out,ft-t.avail_out)?(r.mode=K,y):(ht-=t.avail_in,ft-=t.avail_out,t.total_in+=ht,t.total_out+=ft,r.total+=ft,r.wrap&&ft&&(t.adler=r.check=r.flags?a(r.check,tt,ft,t.next_out-ft):n(r.check,tt,ft,t.next_out-ft)),t.data_type=r.bits+(r.last?64:0)+(r.mode===O?128:0)+(r.mode===j||r.mode===U?256:0),(0===ht&&0===ft||e===l)&&xt===p&&(xt=w),xt)},r.inflateEnd=function(t){if(!t||!t.state)return b;var e=t.state;return e.window&&(e.window=null),t.state=null,p},r.inflateGetHeader=function(t,e){var r;return t&&t.state?0==(2&(r=t.state).wrap)?b:(r.head=e,e.done=!1,p):b},r.inflateSetDictionary=function(t,e){var r,i=e.length;return t&&t.state?0!==(r=t.state).wrap&&r.mode!==P?b:r.mode===P&&n(1,e,i,0)!==r.check?_:ct(t,e,i,i)?(r.mode=K,y):(r.havedict=1,p):b},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":49,"./adler32":50,"./crc32":52,"./inffast":54,"./inftrees":56}],56:[function(t,e,r){"use strict";var i=t("../utils/common"),n=15,a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,r,f,u,l,c,d){var p,m,g,b,_,y,w,v,x,E=d.bits,k=0,S=0,M=0,A=0,I=0,T=0,B=0,R=0,P=0,O=0,L=null,C=0,U=new i.Buf16(16),D=new i.Buf16(16),z=null,N=0;for(k=0;k<=n;k++)U[k]=0;for(S=0;S<f;S++)U[e[r+S]]++;for(I=E,A=n;A>=1&&0===U[A];A--);if(I>A&&(I=A),0===A)return u[l++]=20971520,u[l++]=20971520,d.bits=1,0;for(M=1;M<A&&0===U[M];M++);for(I<M&&(I=M),R=1,k=1;k<=n;k++)if(R<<=1,(R-=U[k])<0)return-1;if(R>0&&(0===t||1!==A))return-1;for(D[1]=0,k=1;k<n;k++)D[k+1]=D[k]+U[k];for(S=0;S<f;S++)0!==e[r+S]&&(c[D[e[r+S]]++]=S);if(0===t?(L=z=c,y=19):1===t?(L=a,C-=257,z=o,N-=257,y=256):(L=s,z=h,y=-1),O=0,S=0,k=M,_=l,T=I,B=0,g=-1,b=(P=1<<I)-1,1===t&&P>852||2===t&&P>592)return 1;for(;;){w=k-B,c[S]<y?(v=0,x=c[S]):c[S]>y?(v=z[N+c[S]],x=L[C+c[S]]):(v=96,x=0),p=1<<k-B,M=m=1<<T;do{u[_+(O>>B)+(m-=p)]=w<<24|v<<16|x|0}while(0!==m);for(p=1<<k-1;O&p;)p>>=1;if(0!==p?(O&=p-1,O+=p):O=0,S++,0==--U[k]){if(k===A)break;k=e[r+c[S]]}if(k>I&&(O&b)!==g){for(0===B&&(B=I),_+=M,R=1<<(T=k-B);T+B<A&&!((R-=U[T+B])<=0);)T++,R<<=1;if(P+=1<<T,1===t&&P>852||2===t&&P>592)return 1;u[g=O&b]=I<<24|T<<16|_-l|0}}return 0!==O&&(u[_+O]=k-B<<24|64<<16|0),d.bits=I,0}},{"../utils/common":49}],57:[function(t,e,r){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],58:[function(t,e,r){"use strict";var i=t("../utils/common"),n=4,a=0,o=1,s=2;function h(t){for(var e=t.length;--e>=0;)t[e]=0}var f=0,u=1,l=2,c=29,d=256,p=d+1+c,m=30,g=19,b=2*p+1,_=15,y=16,w=7,v=256,x=16,E=17,k=18,S=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=new Array(2*(p+2));h(T);var B=new Array(2*m);h(B);var R=new Array(512);h(R);var P=new Array(256);h(P);var O=new Array(c);h(O);var L,C,U,D=new Array(m);function z(t,e,r,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function N(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function F(t){return t<256?R[t]:R[256+(t>>>7)]}function j(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function G(t,e,r){t.bi_valid>y-r?(t.bi_buf|=e<<t.bi_valid&65535,j(t,t.bi_buf),t.bi_buf=e>>y-t.bi_valid,t.bi_valid+=r-y):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function H(t,e,r){G(t,r[2*e],r[2*e+1])}function W(t,e){var r=0;do{r|=1&t,t>>>=1,r<<=1}while(--e>0);return r>>>1}function q(t,e,r){var i,n,a=new Array(_+1),o=0;for(i=1;i<=_;i++)a[i]=o=o+r[i-1]<<1;for(n=0;n<=e;n++){var s=t[2*n+1];0!==s&&(t[2*n]=W(a[s]++,s))}}function Z(t){var e;for(e=0;e<p;e++)t.dyn_ltree[2*e]=0;for(e=0;e<m;e++)t.dyn_dtree[2*e]=0;for(e=0;e<g;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*v]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function Y(t){t.bi_valid>8?j(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function V(t,e,r,i){var n=2*e,a=2*r;return t[n]<t[a]||t[n]===t[a]&&i[e]<=i[r]}function X(t,e,r){for(var i=t.heap[r],n=r<<1;n<=t.heap_len&&(n<t.heap_len&&V(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!V(e,i,t.heap[n],t.depth));)t.heap[r]=t.heap[n],r=n,n<<=1;t.heap[r]=i}function Q(t,e,r){var i,n,a,o,s=0;if(0!==t.last_lit)do{i=t.pending_buf[t.d_buf+2*s]<<8|t.pending_buf[t.d_buf+2*s+1],n=t.pending_buf[t.l_buf+s],s++,0===i?H(t,n,e):(H(t,(a=P[n])+d+1,e),0!==(o=S[a])&&G(t,n-=O[a],o),H(t,a=F(--i),r),0!==(o=M[a])&&G(t,i-=D[a],o))}while(s<t.last_lit);H(t,v,e)}function J(t,e){var r,i,n,a=e.dyn_tree,o=e.stat_desc.static_tree,s=e.stat_desc.has_stree,h=e.stat_desc.elems,f=-1;for(t.heap_len=0,t.heap_max=b,r=0;r<h;r++)0!==a[2*r]?(t.heap[++t.heap_len]=f=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)a[2*(n=t.heap[++t.heap_len]=f<2?++f:0)]=1,t.depth[n]=0,t.opt_len--,s&&(t.static_len-=o[2*n+1]);for(e.max_code=f,r=t.heap_len>>1;r>=1;r--)X(t,a,r);n=h;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],X(t,a,1),i=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=i,a[2*n]=a[2*r]+a[2*i],t.depth[n]=(t.depth[r]>=t.depth[i]?t.depth[r]:t.depth[i])+1,a[2*r+1]=a[2*i+1]=n,t.heap[1]=n++,X(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,i,n,a,o,s,h=e.dyn_tree,f=e.max_code,u=e.stat_desc.static_tree,l=e.stat_desc.has_stree,c=e.stat_desc.extra_bits,d=e.stat_desc.extra_base,p=e.stat_desc.max_length,m=0;for(a=0;a<=_;a++)t.bl_count[a]=0;for(h[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<b;r++)(a=h[2*h[2*(i=t.heap[r])+1]+1]+1)>p&&(a=p,m++),h[2*i+1]=a,i>f||(t.bl_count[a]++,o=0,i>=d&&(o=c[i-d]),s=h[2*i],t.opt_len+=s*(a+o),l&&(t.static_len+=s*(u[2*i+1]+o)));if(0!==m){do{for(a=p-1;0===t.bl_count[a];)a--;t.bl_count[a]--,t.bl_count[a+1]+=2,t.bl_count[p]--,m-=2}while(m>0);for(a=p;0!==a;a--)for(i=t.bl_count[a];0!==i;)(n=t.heap[--r])>f||(h[2*n+1]!==a&&(t.opt_len+=(a-h[2*n+1])*h[2*n],h[2*n+1]=a),i--)}}(t,e),q(a,f,t.bl_count)}function K(t,e,r){var i,n,a=-1,o=e[1],s=0,h=7,f=4;for(0===o&&(h=138,f=3),e[2*(r+1)+1]=65535,i=0;i<=r;i++)n=o,o=e[2*(i+1)+1],++s<h&&n===o||(s<f?t.bl_tree[2*n]+=s:0!==n?(n!==a&&t.bl_tree[2*n]++,t.bl_tree[2*x]++):s<=10?t.bl_tree[2*E]++:t.bl_tree[2*k]++,s=0,a=n,0===o?(h=138,f=3):n===o?(h=6,f=3):(h=7,f=4))}function $(t,e,r){var i,n,a=-1,o=e[1],s=0,h=7,f=4;for(0===o&&(h=138,f=3),i=0;i<=r;i++)if(n=o,o=e[2*(i+1)+1],!(++s<h&&n===o)){if(s<f)do{H(t,n,t.bl_tree)}while(0!=--s);else 0!==n?(n!==a&&(H(t,n,t.bl_tree),s--),H(t,x,t.bl_tree),G(t,s-3,2)):s<=10?(H(t,E,t.bl_tree),G(t,s-3,3)):(H(t,k,t.bl_tree),G(t,s-11,7));s=0,a=n,0===o?(h=138,f=3):n===o?(h=6,f=3):(h=7,f=4)}}h(D);var tt=!1;function et(t,e,r,n){G(t,(f<<1)+(n?1:0),3),function(t,e,r,n){Y(t),n&&(j(t,r),j(t,~r)),i.arraySet(t.pending_buf,t.window,e,r,t.pending),t.pending+=r}(t,e,r,!0)}r._tr_init=function(t){tt||(function(){var t,e,r,i,n,a=new Array(_+1);for(r=0,i=0;i<c-1;i++)for(O[i]=r,t=0;t<1<<S[i];t++)P[r++]=i;for(P[r-1]=i,n=0,i=0;i<16;i++)for(D[i]=n,t=0;t<1<<M[i];t++)R[n++]=i;for(n>>=7;i<m;i++)for(D[i]=n<<7,t=0;t<1<<M[i]-7;t++)R[256+n++]=i;for(e=0;e<=_;e++)a[e]=0;for(t=0;t<=143;)T[2*t+1]=8,t++,a[8]++;for(;t<=255;)T[2*t+1]=9,t++,a[9]++;for(;t<=279;)T[2*t+1]=7,t++,a[7]++;for(;t<=287;)T[2*t+1]=8,t++,a[8]++;for(q(T,p+1,a),t=0;t<m;t++)B[2*t+1]=5,B[2*t]=W(t,5);L=new z(T,S,d+1,p,_),C=new z(B,M,0,m,_),U=new z(new Array(0),A,0,g,w)}(),tt=!0),t.l_desc=new N(t.dyn_ltree,L),t.d_desc=new N(t.dyn_dtree,C),t.bl_desc=new N(t.bl_tree,U),t.bi_buf=0,t.bi_valid=0,Z(t)},r._tr_stored_block=et,r._tr_flush_block=function(t,e,r,i){var h,f,c=0;t.level>0?(t.strm.data_type===s&&(t.strm.data_type=function(t){var e,r=4093624447;for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return a;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return o;for(e=32;e<d;e++)if(0!==t.dyn_ltree[2*e])return o;return a}(t)),J(t,t.l_desc),J(t,t.d_desc),c=function(t){var e;for(K(t,t.dyn_ltree,t.l_desc.max_code),K(t,t.dyn_dtree,t.d_desc.max_code),J(t,t.bl_desc),e=g-1;e>=3&&0===t.bl_tree[2*I[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),h=t.opt_len+3+7>>>3,(f=t.static_len+3+7>>>3)<=h&&(h=f)):h=f=r+5,r+4<=h&&-1!==e?et(t,e,r,i):t.strategy===n||f===h?(G(t,(u<<1)+(i?1:0),3),Q(t,T,B)):(G(t,(l<<1)+(i?1:0),3),function(t,e,r,i){var n;for(G(t,e-257,5),G(t,r-1,5),G(t,i-4,4),n=0;n<i;n++)G(t,t.bl_tree[2*I[n]+1],3);$(t,t.dyn_ltree,e-1),$(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,c+1),Q(t,t.dyn_ltree,t.dyn_dtree)),Z(t),i&&Y(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(P[r]+d+1)]++,t.dyn_dtree[2*F(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){G(t,u<<1,3),H(t,v,T),function(t){16===t.bi_valid?(j(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},{"../utils/common":49}],59:[function(t,e,r){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],60:[function(t,e,r){var i,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function h(t){if(i===setTimeout)return setTimeout(t,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(t){i=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var f,u=[],l=!1,c=-1;function d(){l&&f&&(l=!1,f.length?u=f.concat(u):c=-1,u.length&&p())}function p(){if(!l){var t=h(d);l=!0;for(var e=u.length;e;){for(f=u,u=[];++c<e;)f&&f[c].run();c=-1,e=u.length}f=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function g(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new m(t,e)),1!==u.length||l||h(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},{}],61:[function(t,e,r){e.exports=n;var i=t("events").EventEmitter;function n(){i.call(this)}t("inherits")(n,i),n.Readable=t("readable-stream/lib/_stream_readable.js"),n.Writable=t("readable-stream/lib/_stream_writable.js"),n.Duplex=t("readable-stream/lib/_stream_duplex.js"),n.Transform=t("readable-stream/lib/_stream_transform.js"),n.PassThrough=t("readable-stream/lib/_stream_passthrough.js"),n.finished=t("readable-stream/lib/internal/streams/end-of-stream.js"),n.pipeline=t("readable-stream/lib/internal/streams/pipeline.js"),n.Stream=n,n.prototype.pipe=function(t,e){var r=this;function n(e){t.writable&&!1===t.write(e)&&r.pause&&r.pause()}function a(){r.readable&&r.resume&&r.resume()}r.on("data",n),t.on("drain",a),t._isStdio||e&&!1===e.end||(r.on("end",s),r.on("close",h));var o=!1;function s(){o||(o=!0,t.end())}function h(){o||(o=!0,"function"==typeof t.destroy&&t.destroy())}function f(t){if(u(),0===i.listenerCount(this,"error"))throw t}function u(){r.removeListener("data",n),t.removeListener("drain",a),r.removeListener("end",s),r.removeListener("close",h),r.removeListener("error",f),t.removeListener("error",f),r.removeListener("end",u),r.removeListener("close",u),t.removeListener("close",u)}return r.on("error",f),t.on("error",f),r.on("end",u),r.on("close",u),t.on("close",u),t.emit("pipe",r),t}},{events:38,inherits:45,"readable-stream/lib/_stream_duplex.js":63,"readable-stream/lib/_stream_passthrough.js":64,"readable-stream/lib/_stream_readable.js":65,"readable-stream/lib/_stream_transform.js":66,"readable-stream/lib/_stream_writable.js":67,"readable-stream/lib/internal/streams/end-of-stream.js":71,"readable-stream/lib/internal/streams/pipeline.js":73}],62:[function(t,e,r){"use strict";var i={};function n(t,e,r){r||(r=Error);var n=function(t){function r(r,i,n){return t.call(this,function(t,r,i){return"string"==typeof e?e:e(t,r,i)}(r,i,n))||this}return n=t,(i=r).prototype=Object.create(n.prototype),i.prototype.constructor=i,i.__proto__=n,r;var i,n}(r);n.prototype.name=r.name,n.prototype.code=t,i[t]=n}function a(t,e){if(Array.isArray(t)){var r=t.length;return t=t.map((function(t){return String(t)})),r>2?"one of ".concat(e," ").concat(t.slice(0,r-1).join(", "),", or ")+t[r-1]:2===r?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}return"of ".concat(e," ").concat(String(t))}n("ERR_INVALID_OPT_VALUE",(function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'}),TypeError),n("ERR_INVALID_ARG_TYPE",(function(t,e,r){var i,n,o,s;if("string"==typeof e&&(o="not ",e.substr(!s||s<0?0:+s,o.length)===o)?(i="must not be",e=e.replace(/^not /,"")):i="must be",function(t,e,r){return(void 0===r||r>t.length)&&(r=t.length),t.substring(r-e.length,r)===e}(t," argument"))n="The ".concat(t," ").concat(i," ").concat(a(e,"type"));else{var h=function(t,e,r){return"number"!=typeof r&&(r=0),!(r+e.length>t.length)&&-1!==t.indexOf(e,r)}(t,".")?"property":"argument";n='The "'.concat(t,'" ').concat(h," ").concat(i," ").concat(a(e,"type"))}return n+". Received type ".concat(typeof r)}),TypeError),n("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),n("ERR_METHOD_NOT_IMPLEMENTED",(function(t){return"The "+t+" method is not implemented"})),n("ERR_STREAM_PREMATURE_CLOSE","Premature close"),n("ERR_STREAM_DESTROYED",(function(t){return"Cannot call "+t+" after a stream was destroyed"})),n("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),n("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),n("ERR_STREAM_WRITE_AFTER_END","write after end"),n("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),n("ERR_UNKNOWN_ENCODING",(function(t){return"Unknown encoding: "+t}),TypeError),n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),e.exports.codes=i},{}],63:[function(t,e,r){(function(r){(function(){"use strict";var i=Object.keys||function(t){var e=[];for(var r in t)e.push(r);return e};e.exports=f;var n=t("./_stream_readable"),a=t("./_stream_writable");t("inherits")(f,n);for(var o=i(a.prototype),s=0;s<o.length;s++){var h=o[s];f.prototype[h]||(f.prototype[h]=a.prototype[h])}function f(t){if(!(this instanceof f))return new f(t);n.call(this,t),a.call(this,t),this.allowHalfOpen=!0,t&&(!1===t.readable&&(this.readable=!1),!1===t.writable&&(this.writable=!1),!1===t.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",u)))}function u(){this._writableState.ended||r.nextTick(l,this)}function l(t){t.end()}Object.defineProperty(f.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(f.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(f.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(f.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}})}).call(this)}).call(this,t("_process"))},{"./_stream_readable":65,"./_stream_writable":67,_process:60,inherits:45}],64:[function(t,e,r){"use strict";e.exports=n;var i=t("./_stream_transform");function n(t){if(!(this instanceof n))return new n(t);i.call(this,t)}t("inherits")(n,i),n.prototype._transform=function(t,e,r){r(null,t)}},{"./_stream_transform":66,inherits:45}],65:[function(t,e,i){(function(r,i){(function(){"use strict";var n;e.exports=S,S.ReadableState=k,t("events").EventEmitter;var a=function(t,e){return t.listeners(e).length},o=t("./internal/streams/stream"),s=t("buffer").Buffer,h=i.Uint8Array||function(){};var f,u=t("util");f=u&&u.debuglog?u.debuglog("stream"):function(){};var l,c,d,p=t("./internal/streams/buffer_list"),m=t("./internal/streams/destroy"),g=t("./internal/streams/state").getHighWaterMark,b=t("../errors").codes,_=b.ERR_INVALID_ARG_TYPE,y=b.ERR_STREAM_PUSH_AFTER_EOF,w=b.ERR_METHOD_NOT_IMPLEMENTED,v=b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;t("inherits")(S,o);var x=m.errorOrDestroy,E=["error","close","destroy","pause","resume"];function k(e,r,i){n=n||t("./_stream_duplex"),e=e||{},"boolean"!=typeof i&&(i=r instanceof n),this.objectMode=!!e.objectMode,i&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=g(this,e,"readableHighWaterMark",i),this.buffer=new p,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(l||(l=t("string_decoder/").StringDecoder),this.decoder=new l(e.encoding),this.encoding=e.encoding)}function S(e){if(n=n||t("./_stream_duplex"),!(this instanceof S))return new S(e);var r=this instanceof n;this._readableState=new k(e,this,r),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),o.call(this)}function M(t,e,r,i,n){f("readableAddChunk",e);var a,o=t._readableState;if(null===e)o.reading=!1,function(t,e){if(f("onEofChunk"),!e.ended){if(e.decoder){var r=e.decoder.end();r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,e.sync?B(t):(e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,R(t)))}}(t,o);else if(n||(a=function(t,e){var r;return i=e,s.isBuffer(i)||i instanceof h||"string"==typeof e||void 0===e||t.objectMode||(r=new _("chunk",["string","Buffer","Uint8Array"],e)),r;var i}(o,e)),a)x(t,a);else if(o.objectMode||e&&e.length>0)if("string"==typeof e||o.objectMode||Object.getPrototypeOf(e)===s.prototype||(e=function(t){return s.from(t)}(e)),i)o.endEmitted?x(t,new v):A(t,o,e,!0);else if(o.ended)x(t,new y);else{if(o.destroyed)return!1;o.reading=!1,o.decoder&&!r?(e=o.decoder.write(e),o.objectMode||0!==e.length?A(t,o,e,!1):P(t,o)):A(t,o,e,!1)}else i||(o.reading=!1,P(t,o));return!o.ended&&(o.length<o.highWaterMark||0===o.length)}function A(t,e,r,i){e.flowing&&0===e.length&&!e.sync?(e.awaitDrain=0,t.emit("data",r)):(e.length+=e.objectMode?1:r.length,i?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&B(t)),P(t,e)}Object.defineProperty(S.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),S.prototype.destroy=m.destroy,S.prototype._undestroy=m.undestroy,S.prototype._destroy=function(t,e){e(t)},S.prototype.push=function(t,e){var r,i=this._readableState;return i.objectMode?r=!0:"string"==typeof t&&((e=e||i.defaultEncoding)!==i.encoding&&(t=s.from(t,e),e=""),r=!0),M(this,t,e,!1,r)},S.prototype.unshift=function(t){return M(this,t,null,!0,!1)},S.prototype.isPaused=function(){return!1===this._readableState.flowing},S.prototype.setEncoding=function(e){l||(l=t("string_decoder/").StringDecoder);var r=new l(e);this._readableState.decoder=r,this._readableState.encoding=this._readableState.decoder.encoding;for(var i=this._readableState.buffer.head,n="";null!==i;)n+=r.write(i.data),i=i.next;return this._readableState.buffer.clear(),""!==n&&this._readableState.buffer.push(n),this._readableState.length=n.length,this};var I=1073741824;function T(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=I?t=I:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function B(t){var e=t._readableState;f("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(f("emitReadable",e.flowing),e.emittedReadable=!0,r.nextTick(R,t))}function R(t){var e=t._readableState;f("emitReadable_",e.destroyed,e.length,e.ended),e.destroyed||!e.length&&!e.ended||(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,D(t)}function P(t,e){e.readingMore||(e.readingMore=!0,r.nextTick(O,t,e))}function O(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&0===e.length);){var r=e.length;if(f("maybeReadMore read 0"),t.read(0),r===e.length)break}e.readingMore=!1}function L(t){var e=t._readableState;e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?e.flowing=!0:t.listenerCount("data")>0&&t.resume()}function C(t){f("readable nexttick read 0"),t.read(0)}function U(t,e){f("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),D(t),e.flowing&&!e.reading&&t.read(0)}function D(t){var e=t._readableState;for(f("flow",e.flowing);e.flowing&&null!==t.read(););}function z(t,e){return 0===e.length?null:(e.objectMode?r=e.buffer.shift():!t||t>=e.length?(r=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.first():e.buffer.concat(e.length),e.buffer.clear()):r=e.buffer.consume(t,e.decoder),r);var r}function N(t){var e=t._readableState;f("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,r.nextTick(F,e,t))}function F(t,e){if(f("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&0===t.length&&(t.endEmitted=!0,e.readable=!1,e.emit("end"),t.autoDestroy)){var r=e._writableState;(!r||r.autoDestroy&&r.finished)&&e.destroy()}}function j(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1}S.prototype.read=function(t){f("read",t),t=parseInt(t,10);var e=this._readableState,r=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&((0!==e.highWaterMark?e.length>=e.highWaterMark:e.length>0)||e.ended))return f("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?N(this):B(this),null;if(0===(t=T(t,e))&&e.ended)return 0===e.length&&N(this),null;var i,n=e.needReadable;return f("need readable",n),(0===e.length||e.length-t<e.highWaterMark)&&f("length less than watermark",n=!0),e.ended||e.reading?f("reading or ended",n=!1):n&&(f("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=T(r,e))),null===(i=t>0?z(t,e):null)?(e.needReadable=e.length<=e.highWaterMark,t=0):(e.length-=t,e.awaitDrain=0),0===e.length&&(e.ended||(e.needReadable=!0),r!==t&&e.ended&&N(this)),null!==i&&this.emit("data",i),i},S.prototype._read=function(t){x(this,new w("_read()"))},S.prototype.pipe=function(t,e){var i=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=t;break;case 1:n.pipes=[n.pipes,t];break;default:n.pipes.push(t)}n.pipesCount+=1,f("pipe count=%d opts=%j",n.pipesCount,e);var o=e&&!1===e.end||t===r.stdout||t===r.stderr?g:h;function s(e,r){f("onunpipe"),e===i&&r&&!1===r.hasUnpiped&&(r.hasUnpiped=!0,f("cleanup"),t.removeListener("close",p),t.removeListener("finish",m),t.removeListener("drain",u),t.removeListener("error",d),t.removeListener("unpipe",s),i.removeListener("end",h),i.removeListener("end",g),i.removeListener("data",c),l=!0,!n.awaitDrain||t._writableState&&!t._writableState.needDrain||u())}function h(){f("onend"),t.end()}n.endEmitted?r.nextTick(o):i.once("end",o),t.on("unpipe",s);var u=function(t){return function(){var e=t._readableState;f("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&a(t,"data")&&(e.flowing=!0,D(t))}}(i);t.on("drain",u);var l=!1;function c(e){f("ondata");var r=t.write(e);f("dest.write",r),!1===r&&((1===n.pipesCount&&n.pipes===t||n.pipesCount>1&&-1!==j(n.pipes,t))&&!l&&(f("false write response, pause",n.awaitDrain),n.awaitDrain++),i.pause())}function d(e){f("onerror",e),g(),t.removeListener("error",d),0===a(t,"error")&&x(t,e)}function p(){t.removeListener("finish",m),g()}function m(){f("onfinish"),t.removeListener("close",p),g()}function g(){f("unpipe"),i.unpipe(t)}return i.on("data",c),function(t,e,r){if("function"==typeof t.prependListener)return t.prependListener(e,r);t._events&&t._events[e]?Array.isArray(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]:t.on(e,r)}(t,"error",d),t.once("close",p),t.once("finish",m),t.emit("pipe",i),n.flowing||(f("pipe resume"),i.resume()),t},S.prototype.unpipe=function(t){var e=this._readableState,r={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,r)),this;if(!t){var i=e.pipes,n=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var a=0;a<n;a++)i[a].emit("unpipe",this,{hasUnpiped:!1});return this}var o=j(e.pipes,t);return-1===o||(e.pipes.splice(o,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,r)),this},S.prototype.on=function(t,e){var i=o.prototype.on.call(this,t,e),n=this._readableState;return"data"===t?(n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"===t&&(n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,f("on readable",n.length,n.reading),n.length?B(this):n.reading||r.nextTick(C,this))),i},S.prototype.addListener=S.prototype.on,S.prototype.removeListener=function(t,e){var i=o.prototype.removeListener.call(this,t,e);return"readable"===t&&r.nextTick(L,this),i},S.prototype.removeAllListeners=function(t){var e=o.prototype.removeAllListeners.apply(this,arguments);return"readable"!==t&&void 0!==t||r.nextTick(L,this),e},S.prototype.resume=function(){var t=this._readableState;return t.flowing||(f("resume"),t.flowing=!t.readableListening,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,r.nextTick(U,t,e))}(this,t)),t.paused=!1,this},S.prototype.pause=function(){return f("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(f("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},S.prototype.wrap=function(t){var e=this,r=this._readableState,i=!1;for(var n in t.on("end",(function(){if(f("wrapped end"),r.decoder&&!r.ended){var t=r.decoder.end();t&&t.length&&e.push(t)}e.push(null)})),t.on("data",(function(n){f("wrapped data"),r.decoder&&(n=r.decoder.write(n)),r.objectMode&&null==n||(r.objectMode||n&&n.length)&&(e.push(n)||(i=!0,t.pause()))})),t)void 0===this[n]&&"function"==typeof t[n]&&(this[n]=function(e){return function(){return t[e].apply(t,arguments)}}(n));for(var a=0;a<E.length;a++)t.on(E[a],this.emit.bind(this,E[a]));return this._read=function(e){f("wrapped _read",e),i&&(i=!1,t.resume())},this},"function"==typeof Symbol&&(S.prototype[Symbol.asyncIterator]=function(){return void 0===c&&(c=t("./internal/streams/async_iterator")),c(this)}),Object.defineProperty(S.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(S.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(S.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),S._fromList=z,Object.defineProperty(S.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(S.from=function(e,r){return void 0===d&&(d=t("./internal/streams/from")),d(S,e,r)})}).call(this)}).call(this,t("_process"),void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../errors":62,"./_stream_duplex":63,"./internal/streams/async_iterator":68,"./internal/streams/buffer_list":69,"./internal/streams/destroy":70,"./internal/streams/from":72,"./internal/streams/state":74,"./internal/streams/stream":75,_process:60,buffer:33,events:38,inherits:45,"string_decoder/":76,util:30}],66:[function(t,e,r){"use strict";e.exports=u;var i=t("../errors").codes,n=i.ERR_METHOD_NOT_IMPLEMENTED,a=i.ERR_MULTIPLE_CALLBACK,o=i.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=i.ERR_TRANSFORM_WITH_LENGTH_0,h=t("./_stream_duplex");function f(t,e){var r=this._transformState;r.transforming=!1;var i=r.writecb;if(null===i)return this.emit("error",new a);r.writechunk=null,r.writecb=null,null!=e&&this.push(e),i(t);var n=this._readableState;n.reading=!1,(n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}function u(t){if(!(this instanceof u))return new u(t);h.call(this,t),this._transformState={afterTransform:f.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",l)}function l(){var t=this;"function"!=typeof this._flush||this._readableState.destroyed?c(this,null,null):this._flush((function(e,r){c(t,e,r)}))}function c(t,e,r){if(e)return t.emit("error",e);if(null!=r&&t.push(r),t._writableState.length)throw new s;if(t._transformState.transforming)throw new o;return t.push(null)}t("inherits")(u,h),u.prototype.push=function(t,e){return this._transformState.needTransform=!1,h.prototype.push.call(this,t,e)},u.prototype._transform=function(t,e,r){r(new n("_transform()"))},u.prototype._write=function(t,e,r){var i=this._transformState;if(i.writecb=r,i.writechunk=t,i.writeencoding=e,!i.transforming){var n=this._readableState;(i.needTransform||n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}},u.prototype._read=function(t){var e=this._transformState;null===e.writechunk||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))},u.prototype._destroy=function(t,e){h.prototype._destroy.call(this,t,(function(t){e(t)}))}},{"../errors":62,"./_stream_duplex":63,inherits:45}],67:[function(t,e,i){(function(r,i){(function(){"use strict";function n(t){var e=this;this.next=null,this.entry=null,this.finish=function(){!function(t,e,r){var i=t.entry;for(t.entry=null;i;){var n=i.callback;e.pendingcb--,n(r),i=i.next}e.corkedRequestsFree.next=t}(e,t)}}var a;e.exports=S,S.WritableState=k;var o={deprecate:t("util-deprecate")},s=t("./internal/streams/stream"),h=t("buffer").Buffer,f=i.Uint8Array||function(){};var u,l=t("./internal/streams/destroy"),c=t("./internal/streams/state").getHighWaterMark,d=t("../errors").codes,p=d.ERR_INVALID_ARG_TYPE,m=d.ERR_METHOD_NOT_IMPLEMENTED,g=d.ERR_MULTIPLE_CALLBACK,b=d.ERR_STREAM_CANNOT_PIPE,_=d.ERR_STREAM_DESTROYED,y=d.ERR_STREAM_NULL_VALUES,w=d.ERR_STREAM_WRITE_AFTER_END,v=d.ERR_UNKNOWN_ENCODING,x=l.errorOrDestroy;function E(){}function k(e,i,o){a=a||t("./_stream_duplex"),e=e||{},"boolean"!=typeof o&&(o=i instanceof a),this.objectMode=!!e.objectMode,o&&(this.objectMode=this.objectMode||!!e.writableObjectMode),this.highWaterMark=c(this,e,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var s=!1===e.decodeStrings;this.decodeStrings=!s,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var i=t._writableState,n=i.sync,a=i.writecb;if("function"!=typeof a)throw new g;if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(i),e)!function(t,e,i,n,a){--e.pendingcb,i?(r.nextTick(a,n),r.nextTick(P,t,e),t._writableState.errorEmitted=!0,x(t,n)):(a(n),t._writableState.errorEmitted=!0,x(t,n),P(t,e))}(t,i,n,e,a);else{var o=B(i)||t.destroyed;o||i.corked||i.bufferProcessing||!i.bufferedRequest||T(t,i),n?r.nextTick(I,t,i,o,a):I(t,i,o,a)}}(i,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}function S(e){var r=this instanceof(a=a||t("./_stream_duplex"));if(!r&&!u.call(S,this))return new S(e);this._writableState=new k(e,this,r),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),s.call(this)}function M(t,e,r,i,n,a){if(!r){var o=function(t,e,r){return t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=h.from(e,r)),e}(e,i,n);i!==o&&(r=!0,n="buffer",i=o)}var s=e.objectMode?1:i.length;e.length+=s;var f=e.length<e.highWaterMark;if(f||(e.needDrain=!0),e.writing||e.corked){var u=e.lastBufferedRequest;e.lastBufferedRequest={chunk:i,encoding:n,isBuf:r,callback:a,next:null},u?u.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else A(t,e,!1,s,i,n,a);return f}function A(t,e,r,i,n,a,o){e.writelen=i,e.writecb=o,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new _("write")):r?t._writev(n,e.onwrite):t._write(n,a,e.onwrite),e.sync=!1}function I(t,e,r,i){r||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,i(),P(t,e)}function T(t,e){e.bufferProcessing=!0;var r=e.bufferedRequest;if(t._writev&&r&&r.next){var i=e.bufferedRequestCount,a=new Array(i),o=e.corkedRequestsFree;o.entry=r;for(var s=0,h=!0;r;)a[s]=r,r.isBuf||(h=!1),r=r.next,s+=1;a.allBuffers=h,A(t,e,!0,e.length,a,"",o.finish),e.pendingcb++,e.lastBufferedRequest=null,o.next?(e.corkedRequestsFree=o.next,o.next=null):e.corkedRequestsFree=new n(e),e.bufferedRequestCount=0}else{for(;r;){var f=r.chunk,u=r.encoding,l=r.callback;if(A(t,e,!1,e.objectMode?1:f.length,f,u,l),r=r.next,e.bufferedRequestCount--,e.writing)break}null===r&&(e.lastBufferedRequest=null)}e.bufferedRequest=r,e.bufferProcessing=!1}function B(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function R(t,e){t._final((function(r){e.pendingcb--,r&&x(t,r),e.prefinished=!0,t.emit("prefinish"),P(t,e)}))}function P(t,e){var i=B(e);if(i&&(function(t,e){e.prefinished||e.finalCalled||("function"!=typeof t._final||e.destroyed?(e.prefinished=!0,t.emit("prefinish")):(e.pendingcb++,e.finalCalled=!0,r.nextTick(R,t,e)))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){var n=t._readableState;(!n||n.autoDestroy&&n.endEmitted)&&t.destroy()}return i}t("inherits")(S,s),k.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(k.prototype,"buffer",{get:o.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(u=Function.prototype[Symbol.hasInstance],Object.defineProperty(S,Symbol.hasInstance,{value:function(t){return!!u.call(this,t)||this===S&&t&&t._writableState instanceof k}})):u=function(t){return t instanceof this},S.prototype.pipe=function(){x(this,new b)},S.prototype.write=function(t,e,i){var n,a=this._writableState,o=!1,s=!a.objectMode&&(n=t,h.isBuffer(n)||n instanceof f);return s&&!h.isBuffer(t)&&(t=function(t){return h.from(t)}(t)),"function"==typeof e&&(i=e,e=null),s?e="buffer":e||(e=a.defaultEncoding),"function"!=typeof i&&(i=E),a.ending?function(t,e){var i=new w;x(t,i),r.nextTick(e,i)}(this,i):(s||function(t,e,i,n){var a;return null===i?a=new y:"string"==typeof i||e.objectMode||(a=new p("chunk",["string","Buffer"],i)),!a||(x(t,a),r.nextTick(n,a),!1)}(this,a,t,i))&&(a.pendingcb++,o=M(this,a,s,t,e,i)),o},S.prototype.cork=function(){this._writableState.corked++},S.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.bufferProcessing||!t.bufferedRequest||T(this,t))},S.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new v(t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(S.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(S.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),S.prototype._write=function(t,e,r){r(new m("_write()"))},S.prototype._writev=null,S.prototype.end=function(t,e,i){var n=this._writableState;return"function"==typeof t?(i=t,t=null,e=null):"function"==typeof e&&(i=e,e=null),null!=t&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||function(t,e,i){e.ending=!0,P(t,e),i&&(e.finished?r.nextTick(i):t.once("finish",i)),e.ended=!0,t.writable=!1}(this,n,i),this},Object.defineProperty(S.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(S.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),S.prototype.destroy=l.destroy,S.prototype._undestroy=l.undestroy,S.prototype._destroy=function(t,e){e(t)}}).call(this)}).call(this,t("_process"),void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../errors":62,"./_stream_duplex":63,"./internal/streams/destroy":70,"./internal/streams/state":74,"./internal/streams/stream":75,_process:60,buffer:33,inherits:45,"util-deprecate":78}],68:[function(t,e,r){(function(r){(function(){"use strict";var i;function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=t("./end-of-stream"),o=Symbol("lastResolve"),s=Symbol("lastReject"),h=Symbol("error"),f=Symbol("ended"),u=Symbol("lastPromise"),l=Symbol("handlePromise"),c=Symbol("stream");function d(t,e){return{value:t,done:e}}function p(t){var e=t[o];if(null!==e){var r=t[c].read();null!==r&&(t[u]=null,t[o]=null,t[s]=null,e(d(r,!1)))}}function m(t){r.nextTick(p,t)}var g=Object.getPrototypeOf((function(){})),b=Object.setPrototypeOf((n(i={get stream(){return this[c]},next:function(){var t=this,e=this[h];if(null!==e)return Promise.reject(e);if(this[f])return Promise.resolve(d(void 0,!0));if(this[c].destroyed)return new Promise((function(e,i){r.nextTick((function(){t[h]?i(t[h]):e(d(void 0,!0))}))}));var i,n=this[u];if(n)i=new Promise(function(t,e){return function(r,i){t.then((function(){e[f]?r(d(void 0,!0)):e[l](r,i)}),i)}}(n,this));else{var a=this[c].read();if(null!==a)return Promise.resolve(d(a,!1));i=new Promise(this[l])}return this[u]=i,i}},Symbol.asyncIterator,(function(){return this})),n(i,"return",(function(){var t=this;return new Promise((function(e,r){t[c].destroy(null,(function(t){t?r(t):e(d(void 0,!0))}))}))})),i),g);e.exports=function(t){var e,r=Object.create(b,(n(e={},c,{value:t,writable:!0}),n(e,o,{value:null,writable:!0}),n(e,s,{value:null,writable:!0}),n(e,h,{value:null,writable:!0}),n(e,f,{value:t._readableState.endEmitted,writable:!0}),n(e,l,{value:function(t,e){var i=r[c].read();i?(r[u]=null,r[o]=null,r[s]=null,t(d(i,!1))):(r[o]=t,r[s]=e)},writable:!0}),e));return r[u]=null,a(t,(function(t){if(t&&"ERR_STREAM_PREMATURE_CLOSE"!==t.code){var e=r[s];return null!==e&&(r[u]=null,r[o]=null,r[s]=null,e(t)),void(r[h]=t)}var i=r[o];null!==i&&(r[u]=null,r[o]=null,r[s]=null,i(d(void 0,!0))),r[f]=!0})),t.on("readable",m.bind(null,r)),r}}).call(this)}).call(this,t("_process"))},{"./end-of-stream":71,_process:60}],69:[function(t,e,r){"use strict";function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=t("buffer").Buffer,s=t("util").inspect,h=s&&s.custom||"inspect";e.exports=function(){function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.head=null,this.tail=null,this.length=0}return e=t,r=[{key:"push",value:function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return"";for(var e=this.head,r=""+e.data;e=e.next;)r+=t+e.data;return r}},{key:"concat",value:function(t){if(0===this.length)return o.alloc(0);for(var e=o.allocUnsafe(t>>>0),r=this.head,i=0;r;)n=r.data,a=e,s=i,o.prototype.copy.call(n,a,s),i+=r.data.length,r=r.next;var n,a,s;return e}},{key:"consume",value:function(t,e){var r;return t<this.head.data.length?(r=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):r=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),r}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(t){var e=this.head,r=1,i=e.data;for(t-=i.length;e=e.next;){var n=e.data,a=t>n.length?n.length:t;if(a===n.length?i+=n:i+=n.slice(0,t),0==(t-=a)){a===n.length?(++r,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=n.slice(a));break}++r}return this.length-=r,i}},{key:"_getBuffer",value:function(t){var e=o.allocUnsafe(t),r=this.head,i=1;for(r.data.copy(e),t-=r.data.length;r=r.next;){var n=r.data,a=t>n.length?n.length:t;if(n.copy(e,e.length-t,0,a),0==(t-=a)){a===n.length?(++i,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=n.slice(a));break}++i}return this.length-=i,e}},{key:h,value:function(t,e){return s(this,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e,{depth:0,customInspect:!1}))}}],r&&a(e.prototype,r),f&&a(e,f),t;var e,r,f}()},{buffer:33,util:30}],70:[function(t,e,r){(function(t){(function(){"use strict";function r(t,e){n(t,e),i(t)}function i(t){t._writableState&&!t._writableState.emitClose||t._readableState&&!t._readableState.emitClose||t.emit("close")}function n(t,e){t.emit("error",e)}e.exports={destroy:function(e,a){var o=this,s=this._readableState&&this._readableState.destroyed,h=this._writableState&&this._writableState.destroyed;return s||h?(a?a(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,t.nextTick(n,this,e)):t.nextTick(n,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,(function(e){!a&&e?o._writableState?o._writableState.errorEmitted?t.nextTick(i,o):(o._writableState.errorEmitted=!0,t.nextTick(r,o,e)):t.nextTick(r,o,e):a?(t.nextTick(i,o),a(e)):t.nextTick(i,o)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(t,e){var r=t._readableState,i=t._writableState;r&&r.autoDestroy||i&&i.autoDestroy?t.destroy(e):t.emit("error",e)}}}).call(this)}).call(this,t("_process"))},{_process:60}],71:[function(t,e,r){"use strict";var i=t("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;function n(){}e.exports=function t(e,r,a){if("function"==typeof r)return t(e,null,r);r||(r={}),a=function(t){var e=!1;return function(){if(!e){e=!0;for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];t.apply(this,i)}}}(a||n);var o=r.readable||!1!==r.readable&&e.readable,s=r.writable||!1!==r.writable&&e.writable,h=function(){e.writable||u()},f=e._writableState&&e._writableState.finished,u=function(){s=!1,f=!0,o||a.call(e)},l=e._readableState&&e._readableState.endEmitted,c=function(){o=!1,l=!0,s||a.call(e)},d=function(t){a.call(e,t)},p=function(){var t;return o&&!l?(e._readableState&&e._readableState.ended||(t=new i),a.call(e,t)):s&&!f?(e._writableState&&e._writableState.ended||(t=new i),a.call(e,t)):void 0},m=function(){e.req.on("finish",u)};return function(t){return t.setHeader&&"function"==typeof t.abort}(e)?(e.on("complete",u),e.on("abort",p),e.req?m():e.on("request",m)):s&&!e._writableState&&(e.on("end",h),e.on("close",h)),e.on("end",c),e.on("finish",u),!1!==r.error&&e.on("error",d),e.on("close",p),function(){e.removeListener("complete",u),e.removeListener("abort",p),e.removeListener("request",m),e.req&&e.req.removeListener("finish",u),e.removeListener("end",h),e.removeListener("close",h),e.removeListener("finish",u),e.removeListener("end",c),e.removeListener("error",d),e.removeListener("close",p)}}},{"../../../errors":62}],72:[function(t,e,r){e.exports=function(){throw new Error("Readable.from is not available in the browser")}},{}],73:[function(t,e,r){"use strict";var i;var n=t("../../../errors").codes,a=n.ERR_MISSING_ARGS,o=n.ERR_STREAM_DESTROYED;function s(t){if(t)throw t}function h(t){t()}function f(t,e){return t.pipe(e)}e.exports=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var u,l=function(t){return t.length?"function"!=typeof t[t.length-1]?s:t.pop():s}(r);if(Array.isArray(r[0])&&(r=r[0]),r.length<2)throw new a("streams");var c=r.map((function(e,n){var a=n<r.length-1;return function(e,r,n,a){a=function(t){var e=!1;return function(){e||(e=!0,t.apply(void 0,arguments))}}(a);var s=!1;e.on("close",(function(){s=!0})),void 0===i&&(i=t("./end-of-stream")),i(e,{readable:r,writable:n},(function(t){if(t)return a(t);s=!0,a()}));var h=!1;return function(t){if(!s&&!h)return h=!0,function(t){return t.setHeader&&"function"==typeof t.abort}(e)?e.abort():"function"==typeof e.destroy?e.destroy():void a(t||new o("pipe"))}}(e,a,n>0,(function(t){u||(u=t),t&&c.forEach(h),a||(c.forEach(h),l(u))}))}));return r.reduce(f)}},{"../../../errors":62,"./end-of-stream":71}],74:[function(t,e,r){"use strict";var i=t("../../../errors").codes.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(t,e,r,n){var a=function(t,e,r){return null!=t.highWaterMark?t.highWaterMark:e?t[r]:null}(e,n,r);if(null!=a){if(!isFinite(a)||Math.floor(a)!==a||a<0)throw new i(n?r:"highWaterMark",a);return Math.floor(a)}return t.objectMode?16:16384}}},{"../../../errors":62}],75:[function(t,e,r){e.exports=t("events").EventEmitter},{events:38}],76:[function(t,e,r){"use strict";var i=t("safe-buffer").Buffer,n=i.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function a(t){var e;switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(i.isEncoding===n||!n(t)))throw new Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=h,this.end=f,e=4;break;case"utf8":this.fillLast=s,e=4;break;case"base64":this.text=u,this.end=l,e=3;break;default:return this.write=c,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(e)}function o(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function s(t){var e=this.lastTotal-this.lastNeed,r=function(t,e,r){if(128!=(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t);return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function h(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e);if(r){var i=r.charCodeAt(r.length-1);if(i>=55296&&i<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function f(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function u(t,e){var r=(t.length-e)%3;return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function l(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function c(t){return t.toString(this.encoding)}function d(t){return t&&t.length?this.write(t):""}r.StringDecoder=a,a.prototype.write=function(t){if(0===t.length)return"";var e,r;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},a.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},a.prototype.text=function(t,e){var r=function(t,e,r){var i=e.length-1;if(i<r)return 0;var n=o(e[i]);return n>=0?(n>0&&(t.lastNeed=n-1),n):--i<r||-2===n?0:(n=o(e[i]))>=0?(n>0&&(t.lastNeed=n-2),n):--i<r||-2===n?0:(n=o(e[i]))>=0?(n>0&&(2===n?n=0:t.lastNeed=n-3),n):0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var i=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,i),t.toString("utf8",e,i)},a.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},{"safe-buffer":77}],77:[function(t,e,r){var i=t("buffer"),n=i.Buffer;function a(t,e){for(var r in t)e[r]=t[r]}function o(t,e,r){return n(t,e,r)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=i:(a(i,r),r.Buffer=o),o.prototype=Object.create(n.prototype),a(n,o),o.from=function(t,e,r){if("number"==typeof t)throw new TypeError("Argument must not be a number");return n(t,e,r)},o.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError("Argument must be a number");var i=n(t);return void 0!==e?"string"==typeof r?i.fill(e,r):i.fill(e):i.fill(0),i},o.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n(t)},o.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return i.SlowBuffer(t)}},{buffer:33}],78:[function(t,e,i){(function(t){(function(){function r(e){try{if(!t.localStorage)return!1}catch(t){return!1}var r=t.localStorage[e];return null!=r&&"true"===String(r).toLowerCase()}e.exports=function(t,e){if(r("noDeprecation"))return t;var i=!1;return function(){if(!i){if(r("throwDeprecation"))throw new Error(e);r("traceDeprecation")?console.trace(e):console.warn(e),i=!0}return t.apply(this,arguments)}}}).call(this)}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],79:[function(t,e,r){arguments[4][25][0].apply(r,arguments)},{dup:25}],80:[function(t,e,r){"use strict";var i=t("is-arguments"),n=t("is-generator-function"),a=t("which-typed-array"),o=t("is-typed-array");function s(t){return t.call.bind(t)}var h="undefined"!=typeof BigInt,f="undefined"!=typeof Symbol,u=s(Object.prototype.toString),l=s(Number.prototype.valueOf),c=s(String.prototype.valueOf),d=s(Boolean.prototype.valueOf);if(h)var p=s(BigInt.prototype.valueOf);if(f)var m=s(Symbol.prototype.valueOf);function g(t,e){if("object"!=typeof t)return!1;try{return e(t),!0}catch(t){return!1}}function b(t){return"[object Map]"===u(t)}function _(t){return"[object Set]"===u(t)}function y(t){return"[object WeakMap]"===u(t)}function w(t){return"[object WeakSet]"===u(t)}function v(t){return"[object ArrayBuffer]"===u(t)}function x(t){return"undefined"!=typeof ArrayBuffer&&(v.working?v(t):t instanceof ArrayBuffer)}function E(t){return"[object DataView]"===u(t)}function k(t){return"undefined"!=typeof DataView&&(E.working?E(t):t instanceof DataView)}function S(t){return"[object SharedArrayBuffer]"===u(t)}function M(t){return"undefined"!=typeof SharedArrayBuffer&&(S.working?S(t):t instanceof SharedArrayBuffer)}function A(t){return g(t,l)}function I(t){return g(t,c)}function T(t){return g(t,d)}function B(t){return h&&g(t,p)}function R(t){return f&&g(t,m)}r.isArgumentsObject=i,r.isGeneratorFunction=n,r.isTypedArray=o,r.isPromise=function(t){return"undefined"!=typeof Promise&&t instanceof Promise||null!==t&&"object"==typeof t&&"function"==typeof t.then&&"function"==typeof t.catch},r.isArrayBufferView=function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):o(t)||k(t)},r.isUint8Array=function(t){return"Uint8Array"===a(t)},r.isUint8ClampedArray=function(t){return"Uint8ClampedArray"===a(t)},r.isUint16Array=function(t){return"Uint16Array"===a(t)},r.isUint32Array=function(t){return"Uint32Array"===a(t)},r.isInt8Array=function(t){return"Int8Array"===a(t)},r.isInt16Array=function(t){return"Int16Array"===a(t)},r.isInt32Array=function(t){return"Int32Array"===a(t)},r.isFloat32Array=function(t){return"Float32Array"===a(t)},r.isFloat64Array=function(t){return"Float64Array"===a(t)},r.isBigInt64Array=function(t){return"BigInt64Array"===a(t)},r.isBigUint64Array=function(t){return"BigUint64Array"===a(t)},b.working="undefined"!=typeof Map&&b(new Map),r.isMap=function(t){return"undefined"!=typeof Map&&(b.working?b(t):t instanceof Map)},_.working="undefined"!=typeof Set&&_(new Set),r.isSet=function(t){return"undefined"!=typeof Set&&(_.working?_(t):t instanceof Set)},y.working="undefined"!=typeof WeakMap&&y(new WeakMap),r.isWeakMap=function(t){return"undefined"!=typeof WeakMap&&(y.working?y(t):t instanceof WeakMap)},w.working="undefined"!=typeof WeakSet&&w(new WeakSet),r.isWeakSet=function(t){return w(t)},v.working="undefined"!=typeof ArrayBuffer&&v(new ArrayBuffer),r.isArrayBuffer=x,E.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&E(new DataView(new ArrayBuffer(1),0,1)),r.isDataView=k,S.working="undefined"!=typeof SharedArrayBuffer&&S(new SharedArrayBuffer),r.isSharedArrayBuffer=M,r.isAsyncFunction=function(t){return"[object AsyncFunction]"===u(t)},r.isMapIterator=function(t){return"[object Map Iterator]"===u(t)},r.isSetIterator=function(t){return"[object Set Iterator]"===u(t)},r.isGeneratorObject=function(t){return"[object Generator]"===u(t)},r.isWebAssemblyCompiledModule=function(t){return"[object WebAssembly.Module]"===u(t)},r.isNumberObject=A,r.isStringObject=I,r.isBooleanObject=T,r.isBigIntObject=B,r.isSymbolObject=R,r.isBoxedPrimitive=function(t){return A(t)||I(t)||T(t)||B(t)||R(t)},r.isAnyArrayBuffer=function(t){return"undefined"!=typeof Uint8Array&&(x(t)||M(t))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(t){Object.defineProperty(r,t,{enumerable:!1,value:function(){throw new Error(t+" is not supported in userland")}})}))},{"is-arguments":46,"is-generator-function":47,"is-typed-array":48,"which-typed-array":82}],81:[function(t,e,r){(function(e){(function(){var i=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},i=0;i<e.length;i++)r[e[i]]=Object.getOwnPropertyDescriptor(t,e[i]);return r},n=/%[sdj%]/g;r.format=function(t){if(!_(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(h(arguments[r]));return e.join(" ")}r=1;for(var i=arguments,a=i.length,o=String(t).replace(n,(function(t){if("%%"===t)return"%";if(r>=a)return t;switch(t){case"%s":return String(i[r++]);case"%d":return Number(i[r++]);case"%j":try{return JSON.stringify(i[r++])}catch(t){return"[Circular]"}default:return t}})),s=i[r];r<a;s=i[++r])g(s)||!v(s)?o+=" "+s:o+=" "+h(s);return o},r.deprecate=function(t,i){if(void 0!==e&&!0===e.noDeprecation)return t;if(void 0===e)return function(){return r.deprecate(t,i).apply(this,arguments)};var n=!1;return function(){if(!n){if(e.throwDeprecation)throw new Error(i);e.traceDeprecation?console.trace(i):console.error(i),n=!0}return t.apply(this,arguments)}};var a={},o=/^$/;if(e.env.NODE_DEBUG){var s=e.env.NODE_DEBUG;s=s.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),o=new RegExp("^"+s+"$","i")}function h(t,e){var i={seen:[],stylize:u};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),m(e)?i.showHidden=e:e&&r._extend(i,e),y(i.showHidden)&&(i.showHidden=!1),y(i.depth)&&(i.depth=2),y(i.colors)&&(i.colors=!1),y(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=f),l(i,t,i.depth)}function f(t,e){var r=h.styles[e];return r?"["+h.colors[r][0]+"m"+t+"["+h.colors[r][1]+"m":t}function u(t,e){return t}function l(t,e,i){if(t.customInspect&&e&&k(e.inspect)&&e.inspect!==r.inspect&&(!e.constructor||e.constructor.prototype!==e)){var n=e.inspect(i,t);return _(n)||(n=l(t,n,i)),n}var a=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(_(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return b(e)?t.stylize(""+e,"number"):m(e)?t.stylize(""+e,"boolean"):g(e)?t.stylize("null","null"):void 0}(t,e);if(a)return a;var o=Object.keys(e),s=function(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}(o);if(t.showHidden&&(o=Object.getOwnPropertyNames(e)),E(e)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return c(e);if(0===o.length){if(k(e)){var h=e.name?": "+e.name:"";return t.stylize("[Function"+h+"]","special")}if(w(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(x(e))return t.stylize(Date.prototype.toString.call(e),"date");if(E(e))return c(e)}var f,u="",v=!1,S=["{","}"];return p(e)&&(v=!0,S=["[","]"]),k(e)&&(u=" [Function"+(e.name?": "+e.name:"")+"]"),w(e)&&(u=" "+RegExp.prototype.toString.call(e)),x(e)&&(u=" "+Date.prototype.toUTCString.call(e)),E(e)&&(u=" "+c(e)),0!==o.length||v&&0!=e.length?i<0?w(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special"):(t.seen.push(e),f=v?function(t,e,r,i,n){for(var a=[],o=0,s=e.length;o<s;++o)I(e,String(o))?a.push(d(t,e,r,i,String(o),!0)):a.push("");return n.forEach((function(n){n.match(/^\d+$/)||a.push(d(t,e,r,i,n,!0))})),a}(t,e,i,s,o):o.map((function(r){return d(t,e,i,s,r,v)})),t.seen.pop(),function(t,e,r){return t.reduce((function(t,e){return e.indexOf("\n"),t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}(f,u,S)):S[0]+u+S[1]}function c(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,r,i,n,a){var o,s,h;if((h=Object.getOwnPropertyDescriptor(e,n)||{value:e[n]}).get?s=h.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):h.set&&(s=t.stylize("[Setter]","special")),I(i,n)||(o="["+n+"]"),s||(t.seen.indexOf(h.value)<0?(s=g(r)?l(t,h.value,null):l(t,h.value,r-1)).indexOf("\n")>-1&&(s=a?s.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+s.split("\n").map((function(t){return"   "+t})).join("\n")):s=t.stylize("[Circular]","special")),y(o)){if(a&&n.match(/^\d+$/))return s;(o=JSON.stringify(""+n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=t.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=t.stylize(o,"string"))}return o+": "+s}function p(t){return Array.isArray(t)}function m(t){return"boolean"==typeof t}function g(t){return null===t}function b(t){return"number"==typeof t}function _(t){return"string"==typeof t}function y(t){return void 0===t}function w(t){return v(t)&&"[object RegExp]"===S(t)}function v(t){return"object"==typeof t&&null!==t}function x(t){return v(t)&&"[object Date]"===S(t)}function E(t){return v(t)&&("[object Error]"===S(t)||t instanceof Error)}function k(t){return"function"==typeof t}function S(t){return Object.prototype.toString.call(t)}function M(t){return t<10?"0"+t.toString(10):t.toString(10)}r.debuglog=function(t){if(t=t.toUpperCase(),!a[t])if(o.test(t)){var i=e.pid;a[t]=function(){var e=r.format.apply(r,arguments);console.error("%s %d: %s",t,i,e)}}else a[t]=function(){};return a[t]},r.inspect=h,h.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},h.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},r.types=t("./support/types"),r.isArray=p,r.isBoolean=m,r.isNull=g,r.isNullOrUndefined=function(t){return null==t},r.isNumber=b,r.isString=_,r.isSymbol=function(t){return"symbol"==typeof t},r.isUndefined=y,r.isRegExp=w,r.types.isRegExp=w,r.isObject=v,r.isDate=x,r.types.isDate=x,r.isError=E,r.types.isNativeError=E,r.isFunction=k,r.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},r.isBuffer=t("./support/isBuffer");var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function I(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r.log=function(){var t,e;console.log("%s - %s",(t=new Date,e=[M(t.getHours()),M(t.getMinutes()),M(t.getSeconds())].join(":"),[t.getDate(),A[t.getMonth()],e].join(" ")),r.format.apply(r,arguments))},r.inherits=t("inherits"),r._extend=function(t,e){if(!e||!v(e))return t;for(var r=Object.keys(e),i=r.length;i--;)t[r[i]]=e[r[i]];return t};var T="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function B(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}r.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(T&&t[T]){var e;if("function"!=typeof(e=t[T]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,i=new Promise((function(t,i){e=t,r=i})),n=[],a=0;a<arguments.length;a++)n.push(arguments[a]);n.push((function(t,i){t?r(t):e(i)}));try{t.apply(this,n)}catch(t){r(t)}return i}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),T&&Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,i(t))},r.promisify.custom=T,r.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],i=0;i<arguments.length;i++)r.push(arguments[i]);var n=r.pop();if("function"!=typeof n)throw new TypeError("The last argument must be of type Function");var a=this,o=function(){return n.apply(a,arguments)};t.apply(this,r).then((function(t){e.nextTick(o.bind(null,null,t))}),(function(t){e.nextTick(B.bind(null,t,o))}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,i(t)),r}}).call(this)}).call(this,t("_process"))},{"./support/isBuffer":79,"./support/types":80,_process:60,inherits:45}],82:[function(t,e,i){(function(r){(function(){"use strict";var i=t("foreach"),n=t("available-typed-arrays"),a=t("es-abstract/helpers/callBound"),o=a("Object.prototype.toString"),s=t("has-symbols")()&&"symbol"==typeof Symbol.toStringTag,h=n(),f=a("String.prototype.slice"),u={},l=t("es-abstract/helpers/getOwnPropertyDescriptor"),c=Object.getPrototypeOf;s&&l&&c&&i(h,(function(t){if("function"==typeof r[t]){var e=new r[t];if(!(Symbol.toStringTag in e))throw new EvalError("this engine has support for Symbol.toStringTag, but "+t+" does not have the property! Please report this.");var i=c(e),n=l(i,Symbol.toStringTag);if(!n){var a=c(i);n=l(a,Symbol.toStringTag)}u[t]=n.get}}));var d=t("is-typed-array");e.exports=function(t){return!!d(t)&&(s?function(t){var e=!1;return i(u,(function(r,i){if(!e)try{var n=r.call(t);n===i&&(e=n)}catch(t){}})),e}(t):f(o(t),8,-1))}}).call(this)}).call(this,void 0!==r.g?r.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"available-typed-arrays":27,"es-abstract/helpers/callBound":36,"es-abstract/helpers/getOwnPropertyDescriptor":37,foreach:39,"has-symbols":42,"is-typed-array":48}]},{},[20])(20)},4406:t=>{var e=t.exports={};e.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var r=[];return window.addEventListener("message",(function(t){var e=t.source;e!==window&&null!==e||"process-tick"!==t.data||(t.stopPropagation(),r.length>0&&r.shift()())}),!0),function(t){r.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(t){throw new Error("process.chdir is not supported")}},6197:(t,e,r)=>{"use strict";var i=r(8834).lW;Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractTokenizer=void 0;const n=r(4644);e.AbstractTokenizer=class{constructor(t){this.position=0,this.numBuffer=new Uint8Array(8),this.fileInfo=t||{}}async readToken(t,e=this.position){const r=i.alloc(t.len);if(await this.readBuffer(r,{position:e})<t.len)throw new n.EndOfStreamError;return t.get(r,0)}async peekToken(t,e=this.position){const r=i.alloc(t.len);if(await this.peekBuffer(r,{position:e})<t.len)throw new n.EndOfStreamError;return t.get(r,0)}async readNumber(t){if(await this.readBuffer(this.numBuffer,{length:t.len})<t.len)throw new n.EndOfStreamError;return t.get(this.numBuffer,0)}async peekNumber(t){if(await this.peekBuffer(this.numBuffer,{length:t.len})<t.len)throw new n.EndOfStreamError;return t.get(this.numBuffer,0)}async ignore(t){if(void 0!==this.fileInfo.size){const e=this.fileInfo.size-this.position;if(t>e)return this.position+=e,e}return this.position+=t,t}async close(){}normalizeOptions(t,e){if(e&&void 0!==e.position&&e.position<this.position)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");return e?{mayBeLess:!0===e.mayBeLess,offset:e.offset?e.offset:0,length:e.length?e.length:t.length-(e.offset?e.offset:0),position:e.position?e.position:this.position}:{mayBeLess:!1,offset:0,length:t.length,position:this.position}}}},932:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BufferTokenizer=void 0;const i=r(4644),n=r(6197);class a extends n.AbstractTokenizer{constructor(t,e){super(e),this.uint8Array=t,this.fileInfo.size=this.fileInfo.size?this.fileInfo.size:t.length}async readBuffer(t,e){if(e&&e.position){if(e.position<this.position)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");this.position=e.position}const r=await this.peekBuffer(t,e);return this.position+=r,r}async peekBuffer(t,e){const r=this.normalizeOptions(t,e),n=Math.min(this.uint8Array.length-r.position,r.length);if(!r.mayBeLess&&n<r.length)throw new i.EndOfStreamError;return t.set(this.uint8Array.subarray(r.position,r.position+n),r.offset),n}async close(){}}e.BufferTokenizer=a},9425:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fromFile=e.FileTokenizer=void 0;const i=r(6197),n=r(4644),a=r(5187);class o extends i.AbstractTokenizer{constructor(t,e){super(e),this.fd=t}async readBuffer(t,e){const r=this.normalizeOptions(t,e);this.position=r.position;const i=await a.read(this.fd,t,r.offset,r.length,r.position);if(this.position+=i.bytesRead,i.bytesRead<r.length&&(!e||!e.mayBeLess))throw new n.EndOfStreamError;return i.bytesRead}async peekBuffer(t,e){const r=this.normalizeOptions(t,e),i=await a.read(this.fd,t,r.offset,r.length,r.position);if(!r.mayBeLess&&i.bytesRead<r.length)throw new n.EndOfStreamError;return i.bytesRead}async close(){return a.close(this.fd)}}e.FileTokenizer=o,e.fromFile=async function(t){const e=await a.stat(t);if(!e.isFile)throw new Error(`File not a file: ${t}`);const r=await a.open(t,"r");return new o(r,{path:t,size:e.size})}},5187:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.readFile=e.writeFileSync=e.writeFile=e.read=e.open=e.close=e.stat=e.createReadStream=e.pathExists=void 0;const i=r(6777);e.pathExists=i.existsSync,e.createReadStream=i.createReadStream,e.stat=async function(t){return new Promise(((e,r)=>{i.stat(t,((t,i)=>{t?r(t):e(i)}))}))},e.close=async function(t){return new Promise(((e,r)=>{i.close(t,(t=>{t?r(t):e()}))}))},e.open=async function(t,e){return new Promise(((r,n)=>{i.open(t,e,((t,e)=>{t?n(t):r(e)}))}))},e.read=async function(t,e,r,n,a){return new Promise(((o,s)=>{i.read(t,e,r,n,a,((t,e,r)=>{t?s(t):o({bytesRead:e,buffer:r})}))}))},e.writeFile=async function(t,e){return new Promise(((r,n)=>{i.writeFile(t,e,(t=>{t?n(t):r()}))}))},e.writeFileSync=function(t,e){i.writeFileSync(t,e)},e.readFile=async function(t){return new Promise(((e,r)=>{i.readFile(t,((t,i)=>{t?r(t):e(i)}))}))}},8286:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ReadStreamTokenizer=void 0;const i=r(6197),n=r(4644);class a extends i.AbstractTokenizer{constructor(t,e){super(e),this.streamReader=new n.StreamReader(t)}async getFileInfo(){return this.fileInfo}async readBuffer(t,e){const r=this.normalizeOptions(t,e),i=r.position-this.position;if(i>0)return await this.ignore(i),this.readBuffer(t,e);if(i<0)throw new Error("`options.position` must be equal or greater than `tokenizer.position`");if(0===r.length)return 0;const a=await this.streamReader.read(t,r.offset,r.length);if(this.position+=a,(!e||!e.mayBeLess)&&a<r.length)throw new n.EndOfStreamError;return a}async peekBuffer(t,e){const r=this.normalizeOptions(t,e);let i=0;if(r.position){const e=r.position-this.position;if(e>0){const n=new Uint8Array(r.length+e);return i=await this.peekBuffer(n,{mayBeLess:r.mayBeLess}),t.set(n.subarray(e),r.offset),i-e}if(e<0)throw new Error("Cannot peek from a negative offset in a stream")}if(r.length>0){try{i=await this.streamReader.peek(t,r.offset,r.length)}catch(t){if(e&&e.mayBeLess&&t instanceof n.EndOfStreamError)return 0;throw t}if(!r.mayBeLess&&i<r.length)throw new n.EndOfStreamError}return i}async ignore(t){const e=Math.min(256e3,t),r=new Uint8Array(e);let i=0;for(;i<t;){const n=t-i,a=await this.readBuffer(r,{length:Math.min(e,n)});if(a<0)return a;i+=a}return i}}e.ReadStreamTokenizer=a},7378:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fromBuffer=e.fromStream=e.EndOfStreamError=void 0;const i=r(8286),n=r(932);var a=r(4644);Object.defineProperty(e,"EndOfStreamError",{enumerable:!0,get:function(){return a.EndOfStreamError}}),e.fromStream=function(t,e){return e=e||{},new i.ReadStreamTokenizer(t,e)},e.fromBuffer=function(t,e){return new n.BufferTokenizer(t,e)}},3569:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fromStream=e.fromBuffer=e.EndOfStreamError=e.fromFile=void 0;const i=r(5187),n=r(7378);var a=r(9425);Object.defineProperty(e,"fromFile",{enumerable:!0,get:function(){return a.fromFile}});var o=r(7378);Object.defineProperty(e,"EndOfStreamError",{enumerable:!0,get:function(){return o.EndOfStreamError}}),Object.defineProperty(e,"fromBuffer",{enumerable:!0,get:function(){return o.fromBuffer}}),e.fromStream=async function(t,e){if(e=e||{},t.path){const r=await i.stat(t.path);e.path=t.path,e.size=r.size}return n.fromStream(t,e)}},643:(t,e)=>{"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.Ee=function(t,e,r,i,n,a){for(var o=arguments.length,h=Array(o>6?o-6:0),f=6;f<o;f++)h[f-6]=arguments[f];return h.length?s.call.apply(s,[null,!1,!0,t,e,r,i,n,a].concat(h)):s(!1,!0,t,e,r,i,n,a)};var i="INVALID_ARGS";function n(t){throw new Error(t)}function a(t){var e=Object.keys(t);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e}function o(t){if(Array.isArray(t))return t.slice();for(var e=a(t),r={},i=0;i<e.length;i++){var n=e[i];r[n]=t[n]}return r}function s(t,e,r){var f=r;null==f&&n(i);for(var u=!1,l=arguments.length,c=Array(l>3?l-3:0),d=3;d<l;d++)c[d-3]=arguments[d];for(var p=0;p<c.length;p++){var m=c[p];if(null!=m){var g=a(m);if(g.length)for(var b=0;b<=g.length;b++){var _=g[b];if(!t||void 0===f[_]){var y=m[_];e&&h(f[_])&&h(y)&&(y=s(t,e,f[_],y)),void 0!==y&&y!==f[_]&&(u||(u=!0,f=o(f)),f[_]=y)}}}}return f}function h(t){var e=void 0===t?"undefined":r(t);return null!=t&&"object"===e}},5010:(t,e,r)=>{"use strict";var i=r(8834).lW;Object.defineProperty(e,"__esModule",{value:!0}),e.AnsiStringType=e.StringType=e.BufferType=e.Uint8ArrayType=e.IgnoreType=e.Float80_LE=e.Float80_BE=e.Float64_LE=e.Float64_BE=e.Float32_LE=e.Float32_BE=e.Float16_LE=e.Float16_BE=e.INT64_BE=e.UINT64_BE=e.INT64_LE=e.UINT64_LE=e.INT32_LE=e.INT32_BE=e.INT24_BE=e.INT24_LE=e.INT16_LE=e.INT16_BE=e.INT8=e.UINT32_BE=e.UINT32_LE=e.UINT24_BE=e.UINT24_LE=e.UINT16_BE=e.UINT16_LE=e.UINT8=void 0;const n=r(2333);function a(t){return new DataView(t.buffer,t.byteOffset)}e.UINT8={len:1,get:(t,e)=>a(t).getUint8(e),put:(t,e,r)=>(a(t).setUint8(e,r),e+1)},e.UINT16_LE={len:2,get:(t,e)=>a(t).getUint16(e,!0),put:(t,e,r)=>(a(t).setUint16(e,r,!0),e+2)},e.UINT16_BE={len:2,get:(t,e)=>a(t).getUint16(e),put:(t,e,r)=>(a(t).setUint16(e,r),e+2)},e.UINT24_LE={len:3,get(t,e){const r=a(t);return r.getUint8(e)+(r.getUint16(e+1,!0)<<8)},put(t,e,r){const i=a(t);return i.setUint8(e,255&r),i.setUint16(e+1,r>>8,!0),e+3}},e.UINT24_BE={len:3,get(t,e){const r=a(t);return(r.getUint16(e)<<8)+r.getUint8(e+2)},put(t,e,r){const i=a(t);return i.setUint16(e,r>>8),i.setUint8(e+2,255&r),e+3}},e.UINT32_LE={len:4,get:(t,e)=>a(t).getUint32(e,!0),put:(t,e,r)=>(a(t).setUint32(e,r,!0),e+4)},e.UINT32_BE={len:4,get:(t,e)=>a(t).getUint32(e),put:(t,e,r)=>(a(t).setUint32(e,r),e+4)},e.INT8={len:1,get:(t,e)=>a(t).getInt8(e),put:(t,e,r)=>(a(t).setInt8(e,r),e+1)},e.INT16_BE={len:2,get:(t,e)=>a(t).getInt16(e),put:(t,e,r)=>(a(t).setInt16(e,r),e+2)},e.INT16_LE={len:2,get:(t,e)=>a(t).getInt16(e,!0),put:(t,e,r)=>(a(t).setInt16(e,r,!0),e+2)},e.INT24_LE={len:3,get(t,r){const i=e.UINT24_LE.get(t,r);return i>8388607?i-16777216:i},put(t,e,r){const i=a(t);return i.setUint8(e,255&r),i.setUint16(e+1,r>>8,!0),e+3}},e.INT24_BE={len:3,get(t,r){const i=e.UINT24_BE.get(t,r);return i>8388607?i-16777216:i},put(t,e,r){const i=a(t);return i.setUint16(e,r>>8),i.setUint8(e+2,255&r),e+3}},e.INT32_BE={len:4,get:(t,e)=>a(t).getInt32(e),put:(t,e,r)=>(a(t).setInt32(e,r),e+4)},e.INT32_LE={len:4,get:(t,e)=>a(t).getInt32(e,!0),put:(t,e,r)=>(a(t).setInt32(e,r,!0),e+4)},e.UINT64_LE={len:8,get:(t,e)=>a(t).getBigUint64(e,!0),put:(t,e,r)=>(a(t).setBigUint64(e,r,!0),e+8)},e.INT64_LE={len:8,get:(t,e)=>a(t).getBigInt64(e,!0),put:(t,e,r)=>(a(t).setBigInt64(e,r,!0),e+8)},e.UINT64_BE={len:8,get:(t,e)=>a(t).getBigUint64(e),put:(t,e,r)=>(a(t).setBigUint64(e,r),e+8)},e.INT64_BE={len:8,get:(t,e)=>a(t).getBigInt64(e),put:(t,e,r)=>(a(t).setBigInt64(e,r),e+8)},e.Float16_BE={len:2,get(t,e){return n.read(t,e,!1,10,this.len)},put(t,e,r){return n.write(t,r,e,!1,10,this.len),e+this.len}},e.Float16_LE={len:2,get(t,e){return n.read(t,e,!0,10,this.len)},put(t,e,r){return n.write(t,r,e,!0,10,this.len),e+this.len}},e.Float32_BE={len:4,get:(t,e)=>a(t).getFloat32(e),put:(t,e,r)=>(a(t).setFloat32(e,r),e+4)},e.Float32_LE={len:4,get:(t,e)=>a(t).getFloat32(e,!0),put:(t,e,r)=>(a(t).setFloat32(e,r,!0),e+4)},e.Float64_BE={len:8,get:(t,e)=>a(t).getFloat64(e),put:(t,e,r)=>(a(t).setFloat64(e,r),e+8)},e.Float64_LE={len:8,get:(t,e)=>a(t).getFloat64(e,!0),put:(t,e,r)=>(a(t).setFloat64(e,r,!0),e+8)},e.Float80_BE={len:10,get(t,e){return n.read(t,e,!1,63,this.len)},put(t,e,r){return n.write(t,r,e,!1,63,this.len),e+this.len}},e.Float80_LE={len:10,get(t,e){return n.read(t,e,!0,63,this.len)},put(t,e,r){return n.write(t,r,e,!0,63,this.len),e+this.len}},e.IgnoreType=class{constructor(t){this.len=t}get(t,e){}},e.Uint8ArrayType=class{constructor(t){this.len=t}get(t,e){return t.subarray(e,e+this.len)}},e.BufferType=class{constructor(t){this.len=t}get(t,e){return i.from(t.subarray(e,e+this.len))}},e.StringType=class{constructor(t,e){this.len=t,this.encoding=e}get(t,e){return i.from(t).toString(this.encoding,e,e+this.len)}};class o{constructor(t){this.len=t}static decode(t,e,r){let i="";for(let n=e;n<r;++n)i+=o.codePointToString(o.singleByteDecoder(t[n]));return i}static inRange(t,e,r){return e<=t&&t<=r}static codePointToString(t){return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t)))}static singleByteDecoder(t){if(o.inRange(t,0,127))return t;const e=o.windows1252[t-128];if(null===e)throw Error("invaliding encoding");return e}get(t,e=0){return o.decode(t,e,e+this.len)}}e.AnsiStringType=o,o.windows1252=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]},311:(t,e)=>{(e=t.exports=function(t){return t.replace(/^\s*|\s*$/g,"")}).left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}},9299:(t,e,r)=>{var i=r(4406);!function(){var e={};function n(){void 0===i&&console.log.apply(console,arguments)}t.exports=e,function(t,e){var r,i,a,o,s,h,f,u,l,c,d,p,m,g,b;!function(){"use strict";var e=function(){function t(t){this.message="JPEG error: "+t}return t.prototype=new Error,t.prototype.name="JpegError",t.constructor=t,t}(),r=function(){var t=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),r=4017,n=799,a=3406,o=2276,s=1567,h=3784,f=5793,u=2896;function l(t){null==t&&(t={}),null==t.w&&(t.w=-1),this.V=t.n,this.N=t.w}function c(t,e){for(var r,i,n,a=0,o=[],s=16;s>0&&!t[s-1];)s--;o.push({children:[],index:0});var h=o[0];for(r=0;r<s;r++){for(i=0;i<t[r];i++){for((h=o.pop()).children[h.index]=e[a];h.index>0;)h=o.pop();for(h.index++,o.push(h);o.length<=r;)o.push(n={children:[],index:0}),h.children[h.index]=n.children,h=n;a++}r+1<s&&(o.push(n={children:[],index:0}),h.children[h.index]=n.children,h=n)}return o[0].children}function d(t,e,r){return 64*((t.P+1)*e+r)}function p(r,n,a,o,s,h,f,u,l,c){null==c&&(c=!1);var p,m,g,_,y,w,v,x,E,k,S,M=a.m,A=a.Z,I=n,T=0,B=0,R=0,P=0,O=0,L=0;function C(){if(B>0)return B--,T>>B&1;if(255===(T=r[n++])){var t=r[n++];if(t){if(220===t&&c){var o=i(r,n+=2);if(n+=2,o>0&&o!==a.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",o)}else if(217===t){if(c){var s=8*O;if(s>0&&s<a.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",s)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new e("unexpected marker")}}return B=7,T>>>7}function U(t){for(var r=t;;){switch(typeof(r=r[C()])){case"number":return r;case"object":continue}throw new e("invalid huffman sequence")}}function D(t){for(var e=0;t>0;)e=e<<1|C(),t--;return e}function z(t){if(1===t)return 1===C()?1:-1;var e=D(t);return e>=1<<t-1?e:e+(-1<<t)+1}function N(t,e,r,i,n){var a=r%M;O=(r/M|0)*t.A+i;var o=a*t.h+n;e(t,d(t,O,o))}function F(t,e,r){O=r/t.P|0;var i=r%t.P;e(t,d(t,O,i))}var j=o.length;for(v=A?0===h?0===u?function(t,e){var r=U(t.J),i=0===r?0:z(r)<<l;t.D[e]=t.Q+=i}:function(t,e){t.D[e]|=C()<<l}:0===u?function(e,r){if(R>0)R--;else for(var i=h,n=f;i<=n;){var a=U(e.i),o=15&a,s=a>>4;if(0!==o){var u=t[i+=s];e.D[r+u]=z(o)*(1<<l),i++}else{if(s<15){R=D(s)+(1<<s)-1;break}i+=16}}}:function(r,i){for(var n,a,o=h,s=f,u=0;o<=s;){var c=i+t[o],d=r.D[c]<0?-1:1;switch(P){case 0:if(u=(a=U(r.i))>>4,0==(n=15&a))u<15?(R=D(u)+(1<<u),P=4):(u=16,P=1);else{if(1!==n)throw new e("invalid ACn encoding");p=z(n),P=u?2:3}continue;case 1:case 2:r.D[c]?r.D[c]+=d*(C()<<l):0==--u&&(P=2===P?3:0);break;case 3:r.D[c]?r.D[c]+=d*(C()<<l):(r.D[c]=p<<l,P=0);break;case 4:r.D[c]&&(r.D[c]+=d*(C()<<l))}o++}4===P&&0==--R&&(P=0)}:function(e,r){var i=U(e.J),n=0===i?0:z(i),a=1;for(e.D[r]=e.Q+=n;a<64;){var o=U(e.i),s=15&o,h=o>>4;if(0!==s){var f=t[a+=h];e.D[r+f]=z(s),a++}else{if(h<15)break;a+=16}}},E=1===j?o[0].P*o[0].c:M*a.R;L<=E;){var G=s?Math.min(E-L,s):E;if(G>0){for(g=0;g<j;g++)o[g].Q=0;if(R=0,1===j)for(m=o[0],w=0;w<G;w++)F(m,v,L),L++;else for(w=0;w<G;w++){for(g=0;g<j;g++)for(k=(m=o[g]).h,S=m.A,_=0;_<S;_++)for(y=0;y<k;y++)N(m,v,L,_,y);L++}}if(B=0,!(x=b(r,n)))break;if(x.u&&(n=x.offset),!(x.M>=65488&&x.M<=65495))break;n+=2}return n-I}function m(t,i,l){var c,d,p,m,g,b,_,y,w,v,x,E,k,S,M,A,I,T=t.$,B=t.D;if(!T)throw new e("missing required Quantization Table.");for(var R=0;R<64;R+=8)w=B[i+R],v=B[i+R+1],x=B[i+R+2],E=B[i+R+3],k=B[i+R+4],S=B[i+R+5],M=B[i+R+6],A=B[i+R+7],w*=T[R],0!=(v|x|E|k|S|M|A)?(v*=T[R+1],x*=T[R+2],E*=T[R+3],k*=T[R+4],S*=T[R+5],M*=T[R+6],A*=T[R+7],d=(c=(c=f*w+128>>8)+(d=f*k+128>>8)+1>>1)-d,I=(p=x)*h+(m=M)*s+128>>8,p=p*s-m*h+128>>8,_=(g=(g=u*(v-A)+128>>8)+(_=S<<4)+1>>1)-_,b=(y=(y=u*(v+A)+128>>8)+(b=E<<4)+1>>1)-b,m=(c=c+(m=I)+1>>1)-m,p=(d=d+p+1>>1)-p,I=g*o+y*a+2048>>12,g=g*a-y*o+2048>>12,y=I,I=b*n+_*r+2048>>12,b=b*r-_*n+2048>>12,_=I,l[R]=c+y,l[R+7]=c-y,l[R+1]=d+_,l[R+6]=d-_,l[R+2]=p+b,l[R+5]=p-b,l[R+3]=m+g,l[R+4]=m-g):(I=f*w+512>>10,l[R]=I,l[R+1]=I,l[R+2]=I,l[R+3]=I,l[R+4]=I,l[R+5]=I,l[R+6]=I,l[R+7]=I);for(var P=0;P<8;++P)w=l[P],0!=((v=l[P+8])|(x=l[P+16])|(E=l[P+24])|(k=l[P+32])|(S=l[P+40])|(M=l[P+48])|(A=l[P+56]))?(d=(c=4112+((c=f*w+2048>>12)+(d=f*k+2048>>12)+1>>1))-d,I=(p=x)*h+(m=M)*s+2048>>12,p=p*s-m*h+2048>>12,m=I,_=(g=(g=u*(v-A)+2048>>12)+(_=S)+1>>1)-_,b=(y=(y=u*(v+A)+2048>>12)+(b=E)+1>>1)-b,I=g*o+y*a+2048>>12,g=g*a-y*o+2048>>12,y=I,I=b*n+_*r+2048>>12,b=b*r-_*n+2048>>12,(w=(c=c+m+1>>1)+y)<16?w=0:w>=4080?w=255:w>>=4,(v=(d=d+p+1>>1)+(_=I))<16?v=0:v>=4080?v=255:v>>=4,(x=(p=d-p)+b)<16?x=0:x>=4080?x=255:x>>=4,(E=(m=c-m)+g)<16?E=0:E>=4080?E=255:E>>=4,(k=m-g)<16?k=0:k>=4080?k=255:k>>=4,(S=p-b)<16?S=0:S>=4080?S=255:S>>=4,(M=d-_)<16?M=0:M>=4080?M=255:M>>=4,(A=c-y)<16?A=0:A>=4080?A=255:A>>=4,B[i+P]=w,B[i+P+8]=v,B[i+P+16]=x,B[i+P+24]=E,B[i+P+32]=k,B[i+P+40]=S,B[i+P+48]=M,B[i+P+56]=A):(I=(I=f*w+8192>>14)<-2040?0:I>=2024?255:I+2056>>4,B[i+P]=I,B[i+P+8]=I,B[i+P+16]=I,B[i+P+24]=I,B[i+P+32]=I,B[i+P+40]=I,B[i+P+48]=I,B[i+P+56]=I)}function g(t,e){for(var r=e.P,i=e.c,n=new Int16Array(64),a=0;a<i;a++)for(var o=0;o<r;o++)m(e,d(e,a,o),n);return e.D}function b(t,e,r){null==r&&(r=e);var n=t.length-1,a=r<e?r:e;if(e>=n)return null;var o=i(t,e);if(o>=65472&&o<=65534)return{u:null,M:o,offset:e};for(var s=i(t,a);!(s>=65472&&s<=65534);){if(++a>=n)return null;s=i(t,a)}return{u:o.toString(16),M:s,offset:a}}return l.prototype={parse(r,n){null==n&&(n={});var a,o,s=n.F,h=0,f=null,u=null,l=0;function d(){var t=i(r,h),e=(h+=2)+t-2,n=b(r,e,h);n&&n.u&&(e=n.offset);var a=r.subarray(h,e);return h+=a.length,a}function m(t){for(var e=Math.ceil(t.o/8/t.X),r=Math.ceil(t.s/8/t.B),i=0;i<t.W.length;i++){G=t.W[i];var n=Math.ceil(Math.ceil(t.o/8)*G.h/t.X),a=Math.ceil(Math.ceil(t.s/8)*G.A/t.B),o=e*G.h,s=r*G.A*64*(o+1);G.D=new Int16Array(s),G.P=n,G.c=a}t.m=e,t.R=r}var _=[],y=[],w=[],v=i(r,h);if(h+=2,65496!==v)throw new e("SOI not found");v=i(r,h),h+=2;t:for(;65497!==v;){var x,E,k;switch(v){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var S=d();65504===v&&74===S[0]&&70===S[1]&&73===S[2]&&70===S[3]&&0===S[4]&&(f={version:{d:S[5],T:S[6]},K:S[7],j:S[8]<<8|S[9],H:S[10]<<8|S[11],S:S[12],I:S[13],C:S.subarray(14,14+3*S[12]*S[13])}),65518===v&&65===S[0]&&100===S[1]&&111===S[2]&&98===S[3]&&101===S[4]&&(u={version:S[5]<<8|S[6],k:S[7]<<8|S[8],q:S[9]<<8|S[10],a:S[11]});break;case 65499:for(var M=i(r,h)+(h+=2)-2;h<M;){var A=r[h++],I=new Uint16Array(64);if(A>>4==0)for(E=0;E<64;E++)I[t[E]]=r[h++];else{if(A>>4!=1)throw new e("DQT - invalid table spec");for(E=0;E<64;E++)I[t[E]]=i(r,h),h+=2}_[15&A]=I}break;case 65472:case 65473:case 65474:if(a)throw new e("Only single frame JPEGs supported");h+=2,(a={}).G=65473===v,a.Z=65474===v,a.precision=r[h++];var T,B=i(r,h),R=0,P=0;h+=2,a.s=s||B,a.o=i(r,h),h+=2,a.W=[],a._={};var O=r[h++];for(x=0;x<O;x++){T=r[h];var L=r[h+1]>>4,C=15&r[h+1];R<L&&(R=L),P<C&&(P=C);var U=r[h+2];k=a.W.push({h:L,A:C,L:U,$:null}),a._[T]=k-1,h+=3}a.X=R,a.B=P,m(a);break;case 65476:var D=i(r,h);for(h+=2,x=2;x<D;){var z=r[h++],N=new Uint8Array(16),F=0;for(E=0;E<16;E++,h++)F+=N[E]=r[h];var j=new Uint8Array(F);for(E=0;E<F;E++,h++)j[E]=r[h];x+=17+F,(z>>4==0?w:y)[15&z]=c(N,j)}break;case 65501:o=i(r,h+=2),h+=2;break;case 65498:var G,H=1==++l&&!s;h+=2;var W=r[h++],q=[];for(x=0;x<W;x++){var Z=r[h++],Y=a._[Z];(G=a.W[Y]).index=Z;var V=r[h++];G.J=w[V>>4],G.i=y[15&V],q.push(G)}var X=r[h++],Q=r[h++],J=r[h++];try{var K=p(r,h,a,q,o,X,Q,J>>4,15&J,H);h+=K}catch(t){if(t instanceof DNLMarkerError)return this.parse(r,{F:t.s});if(t instanceof EOIMarkerError)break t;throw t}break;case 65500:h+=4;break;case 65535:255!==r[h]&&h--;break;default:var $=b(r,h-2,h-3);if($&&$.u){h=$.offset;break}if(h>=r.length-1)break t;throw new e("JpegImage.parse - unknown marker: "+v.toString(16))}v=i(r,h),h+=2}for(this.width=a.o,this.height=a.s,this.g=f,this.b=u,this.W=[],x=0;x<a.W.length;x++){var tt=_[(G=a.W[x]).L];tt&&(G.$=tt),this.W.push({index:G.index,e:g(0,G),l:G.h/a.X,t:G.A/a.B,P:G.P,c:G.c})}this.p=this.W.length},Y(t,e,r){null==r&&(r=!1);var i,n,a,o,s,h,f,u,l,c,d,p,m=this.width/t,g=this.height/e,b=0,_=this.W.length,y=t*e*_,w=new Uint8ClampedArray(y),v=new Uint32Array(t),x=4294967288;for(f=0;f<_;f++){if(n=(i=this.W[f]).l*m,a=i.t*g,b=f,d=i.e,o=i.P+1<<3,n!==p){for(s=0;s<t;s++)u=0|s*n,v[s]=(u&x)<<3|7&u;p=n}for(h=0;h<e;h++)for(c=o*((u=0|h*a)&x)|(7&u)<<3,s=0;s<t;s++)w[b]=d[c+v[s]],b+=_}var E=this.V;if(r||4!==_||E||(E=new Int32Array([-256,255,-256,255,-256,255,-256,255])),E)for(f=0;f<y;)for(u=0,l=0;u<_;u++,f++,l+=2)w[f]=(w[f]*E[l]>>8)+E[l+1];return w},get f(){return this.b?!!this.b.a:3===this.p?0!==this.N&&(82!==this.W[0].index||71!==this.W[1].index||66!==this.W[2].index):1===this.N},z:function(t){for(var e,r,i,n=0,a=t.length;n<a;n+=3)e=t[n],r=t[n+1],i=t[n+2],t[n]=e-179.456+1.402*i,t[n+1]=e+135.459-.344*r-.714*i,t[n+2]=e-226.816+1.772*r;return t},O:function(t){for(var e,r,i,n,a=0,o=0,s=t.length;o<s;o+=4)e=t[o],r=t[o+1],i=t[o+2],n=t[o+3],t[a++]=r*(-660635669420364e-19*r+.000437130475926232*i-54080610064599e-18*e+.00048449797120281*n-.154362151871126)-122.67195406894+i*(-.000957964378445773*i+.000817076911346625*e-.00477271405408747*n+1.53380253221734)+e*(.000961250184130688*e-.00266257332283933*n+.48357088451265)+n*(-.000336197177618394*n+.484791561490776),t[a++]=107.268039397724+r*(219927104525741e-19*r-.000640992018297945*i+.000659397001245577*e+.000426105652938837*n-.176491792462875)+i*(-.000778269941513683*i+.00130872261408275*e+.000770482631801132*n-.151051492775562)+e*(.00126935368114843*e-.00265090189010898*n+.25802910206845)+n*(-.000318913117588328*n-.213742400323665),t[a++]=r*(-.000570115196973677*r-263409051004589e-19*i+.0020741088115012*e-.00288260236853442*n+.814272968359295)-20.810012546947+i*(-153496057440975e-19*i-.000132689043961446*e+.000560833691242812*n-.195152027534049)+e*(.00174418132927582*e-.00255243321439347*n+.116935020465145)+n*(-.000343531996510555*n+.24165260232407);return t.subarray(0,a)},r:function(t){for(var e,r,i,n=0,a=t.length;n<a;n+=4)e=t[n],r=t[n+1],i=t[n+2],t[n]=434.456-e-1.402*i,t[n+1]=119.541-e+.344*r+.714*i,t[n+2]=481.816-e-1.772*r;return t},U:function(t){for(var e,r,i,n,a=0,o=0,s=t.length;o<s;o+=4)e=t[o],r=t[o+1],i=t[o+2],n=t[o+3],t[a++]=255+e*(-6747147073602441e-20*e+.0008379262121013727*r+.0002894718188643294*i+.003264231057537806*n-1.1185611867203937)+r*(26374107616089405e-21*r-8626949158638572e-20*i-.0002748769067499491*n-.02155688794978967)+i*(-3878099212869363e-20*i-.0003267808279485286*n+.0686742238595345)-n*(.0003361971776183937*n+.7430659151342254),t[a++]=255+e*(.00013596372813588848*e+.000924537132573585*r+.00010567359618683593*i+.0004791864687436512*n-.3109689587515875)+r*(-.00023545346108370344*r+.0002702845253534714*i+.0020200308977307156*n-.7488052167015494)+i*(6834815998235662e-20*i+.00015168452363460973*n-.09751927774728933)-n*(.0003189131175883281*n+.7364883807733168),t[a++]=255+e*(13598650411385307e-21*e+.00012423956175490851*r+.0004751985097583589*i-36729317476630422e-22*n-.05562186980264034)+r*(.00016141380598724676*r+.0009692239130725186*i+.0007782692450036253*n-.44015232367526463)+i*(5.068882914068769e-7*i+.0017778369011375071*n-.7591454649749609)-n*(.0003435319965105553*n+.7063770186160144);return t.subarray(0,a)},getData:function(t){var r=t.width,i=t.height,n=t.forceRGB,a=t.isSourcePDF;if(this.p>4)throw new e("Unsupported color mode");var o=this.Y(r,i,a);if(1===this.p&&n){for(var s=o.length,h=new Uint8ClampedArray(3*s),f=0,u=0;u<s;u++){var l=o[u];h[f++]=l,h[f++]=l,h[f++]=l}return h}if(3===this.p&&this.f)return this.z(o);if(4===this.p){if(this.f)return n?this.O(o):this.r(o);if(n)return this.U(o)}return o}},l}();function i(t,e){return t[e]<<8|t[e+1]}t.JpegDecoder=r}(),t.encodeImage=function(e,r,i,n){var a={t256:[r],t257:[i],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[i],t279:[r*i*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var o in n)a[o]=n[o];var s=new Uint8Array(t.encode([a])),h=new Uint8Array(e),f=new Uint8Array(1e3+r*i*4);for(o=0;o<s.length;o++)f[o]=s[o];for(o=0;o<h.length;o++)f[1e3+o]=h[o];return f.buffer},t.encode=function(e){var r=new Uint8Array(2e4),i=4,n=t._binBE;r[0]=r[1]=77,n.writeUshort(r,2,42);var a=8;n.writeUint(r,i,a),i+=4;for(var o=0;o<e.length;o++){var s=t._writeIFD(n,t._types.basic,r,a,e[o]);a=s[1],o<e.length-1&&(0!=(3&a)&&(a+=4-(3&a)),n.writeUint(r,s[0],a))}return r.slice(0,a).buffer},t.decode=function(e,r){null==r&&(r={parseMN:!0,debug:!1});var i=new Uint8Array(e),a=0,o=t._binBE.readASCII(i,a,2);a+=2;var s="II"==o?t._binLE:t._binBE;s.readUshort(i,a),a+=2;var h=s.readUint(i,a);a+=4;for(var f=[];;){var u=s.readUshort(i,h),l=s.readUshort(i,h+4);if(0!=u&&(l<1||13<l)){n("error in TIFF");break}if(t._readIFD(s,i,h,f,0,r),0==(h=s.readUint(i,h+2+12*u)))break}return f},t.decodeImage=function(e,r,i){if(!r.data){var a=new Uint8Array(e),o=t._binBE.readASCII(a,0,2);if(null!=r.t256){r.isLE="II"==o,r.width=r.t256[0],r.height=r.t257[0];var s,h=r.t259?r.t259[0]:1,f=r.t266?r.t266[0]:1;r.t284&&2==r.t284[0]&&n("PlanarConfiguration 2 should not be used!"),7==h&&r.t258&&r.t258.length>3&&(r.t258=r.t258.slice(0,3)),s=r.t258?Math.min(32,r.t258[0])*r.t258.length:r.t277?r.t277[0]:1,1==h&&null!=r.t279&&r.t278&&32803==r.t262[0]&&(s=Math.round(8*r.t279[0]/(r.width*r.t278[0]))),r.t50885&&4==r.t50885[0]&&(s=3*r.t258[0]);var u=8*Math.ceil(r.width*s/8),l=r.t273;(null==l||r.t322)&&(l=r.t324);var c=r.t279;1==h&&1==l.length&&(c=[r.height*(u>>>3)]),(null==c||r.t322)&&(c=r.t325);var d=new Uint8Array(r.height*(u>>>3)),p=0;if(null!=r.t322){var m=r.t322[0],g=r.t323[0],b=Math.floor((r.width+m-1)/m),_=Math.floor((r.height+g-1)/g),y=new Uint8Array(0|Math.ceil(m*g*s/8));console.log("====",b,_);for(var w=0;w<_;w++)for(var v=0;v<b;v++){var x=w*b+v;y.fill(0),t.decode._decompress(r,i,a,l[x],c[x],h,y,0,f),6==h?d=y:t._copyTile(y,0|Math.ceil(m*s/8),g,d,0|Math.ceil(r.width*s/8),r.height,0|Math.ceil(v*m*s/8),w*g)}p=8*d.length}else{var E=r.t278?r.t278[0]:r.height;for(E=Math.min(E,r.height),console.log("====",r.width,E),x=0;x<l.length;x++)t.decode._decompress(r,i,a,l[x],c[x],h,d,0|Math.ceil(p/8),f),p+=u*E;p=Math.min(p,8*d.length)}r.data=new Uint8Array(d.buffer,0,0|Math.ceil(p/8))}}},t.decode._decompress=function(r,i,a,o,s,h,f,u,l){if(1==h)for(var c=0;c<s;c++)f[u+c]=a[o+c];else if(2==h)t.decode._decodeG2(a,o,s,f,u,r.width,l);else if(3==h)t.decode._decodeG3(a,o,s,f,u,r.width,l,!!r.t292&&1==(1&r.t292[0]));else if(4==h)t.decode._decodeG4(a,o,s,f,u,r.width,l);else if(5==h)t.decode._decodeLZW(a,o,s,f,u,8);else if(6==h)t.decode._decodeOldJPEG(r,a,o,s,f,u);else if(7==h||34892==h)t.decode._decodeNewJPEG(r,a,o,s,f,u);else if(8==h||32946==h)for(var d=new Uint8Array(a.buffer,o,s),p=e.inflate(d),m=0;m<p.length;m++)f[u+m]=p[m];else 9==h?t.decode._decodeVC5(a,o,s,f,u):32767==h?t.decode._decodeARW(r,a,o,s,f,u):32773==h?t.decode._decodePackBits(a,o,s,f,u):32809==h?t.decode._decodeThunder(a,o,s,f,u):34713==h?t.decode._decodeNikon(r,i,a,o,s,f,u):34676==h?t.decode._decodeLogLuv32(r,a,o,s,f,u):n("Unknown compression",h);var g=r.t258?Math.min(32,r.t258[0]):1,b=r.t277?r.t277[0]:1,_=g*b>>>3,y=r.t278?r.t278[0]:r.height,w=Math.ceil(g*b*r.width/8);if(16==g&&!r.isLE&&null==r.t33422)for(var v=0;v<y;v++)for(var x=u+v*w,E=1;E<w;E+=2){var k=f[x+E];f[x+E]=f[x+E-1],f[x+E-1]=k}if(r.t317&&2==r.t317[0])for(v=0;v<y;v++){var S=u+v*w;if(16==g)for(c=_;c<w;c+=2){var M=(f[S+c+1]<<8|f[S+c])+(f[S+c-_+1]<<8|f[S+c-_]);f[S+c]=255&M,f[S+c+1]=M>>>8&255}else if(3==b)for(c=3;c<w;c+=3)f[S+c]=f[S+c]+f[S+c-3]&255,f[S+c+1]=f[S+c+1]+f[S+c-2]&255,f[S+c+2]=f[S+c+2]+f[S+c-1]&255;else for(c=_;c<w;c++)f[S+c]=f[S+c]+f[S+c-_]&255}},t.decode._decodeVC5=t.decode._decodeVC5=function(){var e,r,i,n=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],a=[3,3,3,3,2,2,2,1,1,1];function o(t){var e=t[1],r=t[0][e>>>3]>>>7-(7&e)&1;return t[1]++,r}function s(t,r){if(null==e){e={};for(var i=0;i<n.length;i+=4)e[n[i+1]]=n.slice(i,i+4)}for(var a=o(t),s=e[a];null==s;)a=a<<1|o(t),s=e[a];var h=s[3];0!=h&&(h=0==o(t)?h:-h),r[0]=s[2],r[1]=h}function h(t,e){for(var r=0;r<e;r++)1==(1&t)&&t++,t>>>=1;return t}function f(t,e){return t>>e}function u(t,e,r,i,n,a){e[r]=f(f(11*t[n]-4*t[n+a]+t[n+a+a]+4,3)+t[i],1),e[r+a]=f(f(5*t[n]+4*t[n+a]-t[n+a+a]+4,3)-t[i],1)}function l(t,e,r,i,n,a){var o=t[n-a]-t[n+a],s=t[n],h=t[i];e[r]=f(f(o+4,3)+s+h,1),e[r+a]=f(f(4-o,3)+s-h,1)}function c(t,e,r,i,n,a){e[r]=f(f(5*t[n]+4*t[n-a]-t[n-a-a]+4,3)+t[i],1),e[r+a]=f(f(11*t[n]-4*t[n-a]+t[n-a-a]+4,3)-t[i],1)}function d(t){return i[t=t<0?0:t>4095?4095:t]>>>2}return function(e,n,o,f,p){f=new Uint16Array(f.buffer);var m,g,b,_,y,w,v,x,E=Date.now(),k=t._binBE,S=n+o;for(n+=4;n<S;){var M=k.readShort(e,n),A=k.readUshort(e,n+2);if(n+=4,12==M)L=A;else if(20==M)m=A;else if(21==M)g=A;else if(48==M)b=A;else if(53==M)_=A;else if(35==M);else if(62==M)y=A;else if(101==M);else if(109==M)w=A;else if(84==M);else if(106==M);else if(107==M);else if(108==M);else if(102==M);else if(104==M)tt=A;else if(105==M);else{var I=M<0?-M:M,T=65280&I,B=0;if(24576&I&&(8192&I?(B=65535&A,B+=(255&I)<<16):B=65535&A),24576==(24576&I)){if(null==v){v=[];for(var R=0;R<4;R++)v[R]=new Int16Array((m>>>1)*(g>>>1));for(x=new Int16Array((m>>>1)*(g>>>1)),r=new Int16Array(1024),R=0;R<1024;R++){var P=R-512,O=Math.abs(P),L=Math.floor(768*O*O*O/16581375)+O;r[R]=Math.sign(P)*L}for(i=new Uint16Array(4096),R=0;R<4096;R++){var C=R,U=65535*(Math.pow(113,C/4095)-1)/112;i[R]=Math.min(U,65535)}}var D=v[y],z=h(m,1+a[b]),N=h(g,1+a[b]);if(0==b)for(var F=0;F<N;F++)for(var j=0;j<z;j++){var G=n+2*(F*z+j);D[F*(m>>>1)+j]=e[G]<<8|e[G+1]}else{var H=[e,8*n],W=[],q=0,Z=z*N,Y=[0,0],V=0;for(A=0;q<Z;)for(s(H,Y),V=Y[0],A=Y[1];V>0;)W[q++]=A,V--;var X=(b-1)%3,Q=1!=X?z:0,J=0!=X?N:0;for(F=0;F<N;F++){var K=(F+J)*(m>>>1)+Q,$=F*z;for(j=0;j<z;j++)D[K+j]=r[W[$+j]+512]*_}if(2==X){var tt=m>>>1,et=2*z,rt=2*N;for(F=0;F<N;F++)for(j=0;j<et;j++){R=2*F*tt+j;var it=N*tt+(at=F*tt+j);0==F?u(D,x,R,it,at,tt):F==N-1?c(D,x,R,it,at,tt):l(D,x,R,it,at,tt)}var nt=D;for(D=x,x=nt,F=0;F<rt;F++)for(j=0;j<z;j++){var at;R=F*tt+2*j,it=z+(at=F*tt+j),0==j?u(D,x,R,it,at,1):j==z-1?c(D,x,R,it,at,1):l(D,x,R,it,at,1)}nt=D,D=x,x=nt;for(var ot=[],st=2-~~((b-1)/3),ht=0;ht<3;ht++)ot[ht]=w>>14-2*ht&3;var ft=ot[st];if(0!=ft)for(F=0;F<rt;F++)for(j=0;j<et;j++)D[R=F*tt+j]=D[R]<<ft}}if(9==b&&3==y){var ut=v[0],lt=v[1],ct=v[2],dt=v[3];for(F=0;F<g;F+=2)for(j=0;j<m;j+=2){var pt=F*m+j,mt=ut[G=(F>>>1)*(m>>>1)+(j>>>1)],gt=lt[G]-2048,bt=ct[G]-2048,_t=dt[G]-2048,yt=(gt<<1)+mt,wt=(bt<<1)+mt,vt=mt+_t,xt=mt-_t;f[pt]=d(yt),f[pt+1]=d(vt),f[pt+m]=d(xt),f[pt+m+1]=d(wt)}}n+=4*B}else if(16388==I)n+=4*B;else if(8192!=T&&8448!=T&&9216!=T)throw I.toString(16)}}console.log(Date.now()-E)}}(),t.decode._decodeLogLuv32=function(t,e,r,i,n,a){for(var o=t.width,s=4*o,h=0,f=new Uint8Array(s);h<i;){for(var u=0;u<s;){var l=e[r+h];if(h++,l<128){for(var c=0;c<l;c++)f[u+c]=e[r+h+c];u+=l,h+=l}else{for(l-=126,c=0;c<l;c++)f[u+c]=e[r+h];u+=l,h++}}for(var d=0;d<o;d++)n[a+0]=f[d],n[a+1]=f[d+o],n[a+2]=f[d+2*o],n[a+4]=f[d+3*o],a+=6}},t.decode._ljpeg_diff=function(e,r,i){var n,a,o=t.decode._getbithuff;return n=o(e,r,i[0],i),0==((a=o(e,r,n,0))&1<<n-1)&&(a-=(1<<n)-1),a},t.decode._decodeARW=function(e,r,i,n,a,o){var s=e.t256[0],h=e.t257[0],f=e.t258[0],u=e.isLE?t._binLE:t._binBE;if(s*h==n||s*h*1.5==n)if(s*h*1.5!=n){var l,c,d,p,m,g,b,_,y=new Uint16Array(16),w=new Uint8Array(s+1);for(I=0;I<h;I++){for(var v=0;v<s;v++)w[v]=r[i++];for(_=0,A=0;A<s-30;_+=16){for(c=2047&(l=u.readUint(w,_)),d=2047&l>>>11,p=15&l>>>22,m=15&l>>>26,g=0;g<4&&128<<g<=c-d;g++);for(b=30,x=0;x<16;x++)x==p?y[x]=c:x==m?y[x]=d:(y[x]=((u.readUshort(w,_+(b>>3))>>>(7&b)&127)<<g)+d,y[x]>2047&&(y[x]=2047),b+=7);for(x=0;x<16;x++,A+=2)U=y[x]<<1,t.decode._putsF(a,(I*s+A)*f,U<<16-f);A-=1&A?1:31}}}else for(var x=0;x<n;x+=3){var E=r[i+x+0],k=r[i+x+1],S=r[i+x+2];a[o+x]=k<<4|E>>>4,a[o+x+1]=E<<4|S>>>4,a[o+x+2]=S<<4|k>>>4}else{h+=8;var M,A,I,T=[i,0,0,0],B=new Uint16Array(32770),R=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],P=0,O=t.decode._ljpeg_diff;for(B[0]=15,M=x=0;x<18;x++)for(var L=32768>>>(R[x]>>>8),C=0;C<L;C++)B[++M]=R[x];for(A=s;A--;)for(I=0;I<h+1;I+=2)if(I==h&&(I=1),P+=O(r,T,B),I<h){var U=4095&P;t.decode._putsF(a,(I*s+A)*f,U<<16-f)}}},t.decode._decodeNikon=function(e,r,i,n,a,o,s){var h=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],f=e.t256[0],u=e.t257[0],l=e.t258[0],c=0,d=0,p=t.decode._make_decoder,m=t.decode._getbithuff,g=r[0].exifIFD.makerNote,b=g.t150?g.t150:g.t140,_=0,y=b[_++],w=b[_++];73!=y&&88!=w||(_+=2110),70==y&&(c=2),14==l&&(c+=3);for(var v=[[0,0],[0,0]],x=e.isLE?t._binLE:t._binBE,E=0;E<2;E++)for(var k=0;k<2;k++)v[E][k]=x.readShort(b,_),_+=2;var S,M,A,I,T,B=1<<l&32767,R=0,P=x.readShort(b,_);_+=2,P>1&&(R=Math.floor(B/(P-1))),68==y&&32==w&&R>0&&(d=x.readShort(b,562));var O=[0,0],L=p(h[c]),C=[n,0,0,0];for(S=0;S<u;S++)for(d&&S==d&&(L=p(h[c+1])),M=0;M<f;M++){E=m(i,C,L[0],L),0==((T=1+(m(i,C,(A=15&E)-(I=E>>>4),0)<<1)<<I>>>1)&1<<A-1)&&(T-=(1<<A)-(0==I?1:0)),M<2?O[M]=v[1&S][M]+=T:O[1&M]+=T;var U=Math.min(Math.max(O[1&M],0),(1<<l)-1),D=(S*f+M)*l;t.decode._putsF(o,D,U<<16-l)}},t.decode._putsF=function(t,e,r){r<<=8-(7&e);var i=e>>>3;t[i]|=r>>>16,t[i+1]|=r>>>8,t[i+2]|=r},t.decode._getbithuff=function(e,r,i,n){t.decode._get_byte;var a,o=r[0],s=r[1],h=r[2],f=r[3];if(0==i||h<0)return 0;for(;!f&&h<i&&-1!=(a=e[o++])&&!(f=0);)s=(s<<8)+a,h+=8;if(a=s<<32-h>>>32-i,n?(h-=n[a+1]>>>8,a=255&n[a+1]):h-=i,h<0)throw"e";return r[0]=o,r[1]=s,r[2]=h,r[3]=f,a},t.decode._make_decoder=function(t){var e,r,i,n,a,o=[];for(e=16;0!=e&&!t[e];e--);var s=17;for(o[0]=e,i=r=1;r<=e;r++)for(n=0;n<t[r];n++,++s)for(a=0;a<1<<e-r;a++)i<=1<<e&&(o[i++]=r<<8|t[s]);return o},t.decode._decodeNewJPEG=function(e,r,i,n,a,o){n=Math.min(n,r.length-i);var s=e.t347,h=s?s.length:0,f=new Uint8Array(h+n);if(s){for(var u=0,l=0;l<h-1&&(255!=s[l]||217!=s[l+1]);l++)f[u++]=s[l];var c=r[i],d=r[i+1];for(255==c&&216==d||(f[u++]=c,f[u++]=d),l=2;l<n;l++)f[u++]=r[i+l]}else for(l=0;l<n;l++)f[l]=r[i+l];if(32803==e.t262[0]||7==e.t259[0]&&34892==e.t262[0]){var p=e.t258[0],m=t.LosslessJpegDecode(f),g=m.length;if(16==p)if(e.isLE)for(l=0;l<g;l++)a[o+(l<<1)]=255&m[l],a[o+(l<<1)+1]=m[l]>>>8;else for(l=0;l<g;l++)a[o+(l<<1)]=m[l]>>>8,a[o+(l<<1)+1]=255&m[l];else if(14==p||12==p){var b=16-p;for(l=0;l<g;l++)t.decode._putsF(a,l*p,m[l]<<b)}else{if(8!=p)throw new Error("unsupported bit depth "+p);for(l=0;l<g;l++)a[o+l]=m[l]}}else{var _=new t.JpegDecoder;_.parse(f);var y=_.getData({width:_.width,height:_.height,forceRGB:!0,isSourcePDF:!1});for(l=0;l<y.length;l++)a[o+l]=y[l]}6==e.t262[0]&&(e.t262[0]=2)},t.decode._decodeOldJPEGInit=function(t,e,r,i){var a,o,s,h,f,u=216,l=0,c=0,d=!1,p=t.t513,m=p?p[0]:0,g=t.t514,b=g?g[0]:0,_=t.t324||t.t273||p,y=t.t530,w=0,v=0,x=t.t277?t.t277[0]:1,E=t.t515;if(_&&(c=_[0],d=_.length>1),!d){if(255==e[r]&&e[r+1]==u)return{jpegOffset:r};if(null!=p&&(255==e[r+m]&&e[r+m+1]==u?l=r+m:n("JPEGInterchangeFormat does not point to SOI"),null==g?n("JPEGInterchangeFormatLength field is missing"):(m>=c||m+b<=c)&&n("JPEGInterchangeFormatLength field value is invalid"),null!=l))return{jpegOffset:l}}if(null!=y&&(w=y[0],v=y[1]),null!=p&&null!=g)if(b>=2&&m+b<=c){for(a=255==e[r+m+b-2]&&e[r+m+b-1]==u?new Uint8Array(b-2):new Uint8Array(b),s=0;s<a.length;s++)a[s]=e[r+m+s];n("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else n("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(null==a){var k=0,S=[];S[k++]=255,S[k++]=u;var M=t.t519;if(null==M)throw new Error("JPEGQTables tag is missing");for(s=0;s<M.length;s++)for(S[k++]=255,S[k++]=219,S[k++]=0,S[k++]=67,S[k++]=s,h=0;h<64;h++)S[k++]=e[r+M[s]+h];for(f=0;f<2;f++){var A=t[0==f?"t520":"t521"];if(null==A)throw new Error((0==f?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(s=0;s<A.length;s++){S[k++]=255,S[k++]=196;var I=19;for(h=0;h<16;h++)I+=e[r+A[s]+h];for(S[k++]=I>>>8,S[k++]=255&I,S[k++]=s|f<<4,h=0;h<16;h++)S[k++]=e[r+A[s]+h];for(h=0;h<I;h++)S[k++]=e[r+A[s]+16+h]}}if(S[k++]=255,S[k++]=192,S[k++]=0,S[k++]=8+3*x,S[k++]=8,S[k++]=t.height>>>8&255,S[k++]=255&t.height,S[k++]=t.width>>>8&255,S[k++]=255&t.width,S[k++]=x,1==x)S[k++]=1,S[k++]=17,S[k++]=0;else for(s=0;s<3;s++)S[k++]=s+1,S[k++]=0!=s?17:(15&w)<<4|15&v,S[k++]=s;null!=E&&0!=E[0]&&(S[k++]=255,S[k++]=221,S[k++]=0,S[k++]=4,S[k++]=E[0]>>>8&255,S[k++]=255&E[0]),a=new Uint8Array(S)}var T=-1;for(s=0;s<a.length-1;){if(255==a[s]&&192==a[s+1]){T=s;break}s++}if(-1==T){var B=new Uint8Array(a.length+10+3*x);B.set(a);var R=a.length;if(T=a.length,(a=B)[R++]=255,a[R++]=192,a[R++]=0,a[R++]=8+3*x,a[R++]=8,a[R++]=t.height>>>8&255,a[R++]=255&t.height,a[R++]=t.width>>>8&255,a[R++]=255&t.width,a[R++]=x,1==x)a[R++]=1,a[R++]=17,a[R++]=0;else for(s=0;s<3;s++)a[R++]=s+1,a[R++]=0!=s?17:(15&w)<<4|15&v,a[R++]=s}if(255==e[c]&&218==e[c+1]){var P=e[c+2]<<8|e[c+3];for((o=new Uint8Array(P+2))[0]=e[c],o[1]=e[c+1],o[2]=e[c+2],o[3]=e[c+3],s=0;s<P-2;s++)o[s+4]=e[c+s+4]}else{var O=0;if((o=new Uint8Array(8+2*x))[O++]=255,o[O++]=218,o[O++]=0,o[O++]=6+2*x,o[O++]=x,1==x)o[O++]=1,o[O++]=0;else for(s=0;s<3;s++)o[O++]=s+1,o[O++]=s<<4|s;o[O++]=0,o[O++]=63,o[O++]=0}return{jpegOffset:r,tables:a,sosMarker:o,sofPosition:T}},t.decode._decodeOldJPEG=function(e,r,i,n,a,o){var s,h,f,u,l=t.decode._decodeOldJPEGInit(e,r,i,n);if(null!=l.jpegOffset)for(s=i+n-l.jpegOffset,f=new Uint8Array(s),p=0;p<s;p++)f[p]=r[l.jpegOffset+p];else{for(h=l.tables.length,(f=new Uint8Array(h+l.sosMarker.length+n+2)).set(l.tables),u=h,f[l.sofPosition+5]=e.height>>>8&255,f[l.sofPosition+6]=255&e.height,f[l.sofPosition+7]=e.width>>>8&255,f[l.sofPosition+8]=255&e.width,255==r[i]&&r[i+1]==SOS||(f.set(l.sosMarker,u),u+=sosMarker.length),p=0;p<n;p++)f[u++]=r[i+p];f[u++]=255,f[u++]=EOI}var c=new t.JpegDecoder;c.parse(f);for(var d=c.getData({width:c.width,height:c.height,forceRGB:!0,isSourcePDF:!1}),p=0;p<d.length;p++)a[o+p]=d[p];e.t262&&6==e.t262[0]&&(e.t262[0]=2)},t.decode._decodePackBits=function(t,e,r,i,n){for(var a=new Int8Array(t.buffer),o=new Int8Array(i.buffer),s=e+r;e<s;){var h=a[e];if(e++,h>=0&&h<128)for(var f=0;f<h+1;f++)o[n]=a[e],n++,e++;if(h>=-127&&h<0){for(f=0;f<1-h;f++)o[n]=a[e],n++;e++}}return n},t.decode._decodeThunder=function(t,e,r,i,n){for(var a=[0,1,0,-1],o=[0,1,2,3,0,-3,-2,-1],s=e+r,h=2*n,f=0;e<s;){var u=t[e],l=u>>>6,c=63&u;if(e++,3==l&&(f=15&c,i[h>>>1]|=f<<4*(1-h&1),h++),0==l)for(var d=0;d<c;d++)i[h>>>1]|=f<<4*(1-h&1),h++;if(2==l)for(d=0;d<2;d++)4!=(p=c>>>3*(1-d)&7)&&(f+=o[p],i[h>>>1]|=f<<4*(1-h&1),h++);if(1==l)for(d=0;d<3;d++){var p;2!=(p=c>>>2*(2-d)&3)&&(f+=a[p],i[h>>>1]|=f<<4*(1-h&1),h++)}}},t.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3},t.decode._lens=function(){var t=function(t,e,r,i){for(var n=0;n<e.length;n++)t[e[n]]=r+n*i},e="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",r="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",i="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",n="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",a="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";e=e.split(","),r=r.split(","),i=i.split(","),n=n.split(","),a=a.split(",");var o={},s={};return t(o,e,0,1),t(o,i,64,64),t(o,a,1792,64),t(s,r,0,1),t(s,n,64,64),t(s,a,1792,64),[o,s]}(),t.decode._decodeG4=function(e,r,i,n,a,o,s){for(var h=t.decode,f=r<<3,u=0,l="",c=[],d=[],p=0;p<o;p++)d.push(0);d=h._makeDiff(d);for(var m=0,g=0,b=0,_=0,y=0,w=0,v="",x=0,E=8*Math.ceil(o/8);f>>>3<r+i;){b=h._findDiff(d,m+(0==m?0:1),1-y),_=h._findDiff(d,b,y);var k=0;if(1==s&&(k=e[f>>>3]>>>7-(7&f)&1),2==s&&(k=e[f>>>3]>>>(7&f)&1),f++,l+=k,"H"==v){if(null!=h._lens[y][l]){var S=h._lens[y][l];l="",u+=S,S<64&&(h._addNtimes(c,u,y),m+=u,y=1-y,u=0,0==--x&&(v=""))}}else"0001"==l&&(l="",h._addNtimes(c,_-m,y),m=_),"001"==l&&(l="",v="H",x=2),null!=h._dmap[l]&&(g=b+h._dmap[l],h._addNtimes(c,g-m,y),m=g,l="",y=1-y);c.length==o&&""==v&&(h._writeBits(c,n,8*a+w*E),y=0,w++,m=0,d=h._makeDiff(c),c=[])}},t.decode._findDiff=function(t,e,r){for(var i=0;i<t.length;i+=2)if(t[i]>=e&&t[i+1]==r)return t[i]},t.decode._makeDiff=function(t){var e=[];1==t[0]&&e.push(0,1);for(var r=1;r<t.length;r++)t[r-1]!=t[r]&&e.push(r,t[r]);return e.push(t.length,0,t.length,1),e},t.decode._decodeG2=function(e,r,i,n,a,o,s){for(var h=t.decode,f=r<<3,u=0,l="",c=[],d=0,p=0,m=8*Math.ceil(o/8);f>>>3<r+i;){var g=0;1==s&&(g=e[f>>>3]>>>7-(7&f)&1),2==s&&(g=e[f>>>3]>>>(7&f)&1),f++,l+=g,null!=(u=h._lens[d][l])&&(h._addNtimes(c,u,d),l="",u<64&&(d=1-d),c.length==o&&(h._writeBits(c,n,8*a+p*m),c=[],p++,d=0,0!=(7&f)&&(f+=8-(7&f)),u>=64&&(f+=8)))}},t.decode._decodeG3=function(e,r,i,n,a,o,s,h){for(var f=t.decode,u=r<<3,l=0,c="",d=[],p=[],m=0;m<o;m++)d.push(0);for(var g=0,b=0,_=0,y=0,w=0,v=-1,x="",E=0,k=!0,S=8*Math.ceil(o/8);u>>>3<r+i;){_=f._findDiff(p,g+(0==g?0:1),1-w),y=f._findDiff(p,_,w);var M=0;if(1==s&&(M=e[u>>>3]>>>7-(7&u)&1),2==s&&(M=e[u>>>3]>>>(7&u)&1),u++,c+=M,k){if(null!=f._lens[w][c]){var A=f._lens[w][c];c="",l+=A,A<64&&(f._addNtimes(d,l,w),w=1-w,l=0)}}else"H"==x?null!=f._lens[w][c]&&(A=f._lens[w][c],c="",l+=A,A<64&&(f._addNtimes(d,l,w),g+=l,w=1-w,l=0,0==--E&&(x=""))):("0001"==c&&(c="",f._addNtimes(d,y-g,w),g=y),"001"==c&&(c="",x="H",E=2),null!=f._dmap[c]&&(b=_+f._dmap[c],f._addNtimes(d,b-g,w),g=b,c="",w=1-w));c.endsWith("000000000001")&&(v>=0&&f._writeBits(d,n,8*a+v*S),h&&(1==s&&(k=1==(e[u>>>3]>>>7-(7&u)&1)),2==s&&(k=1==(e[u>>>3]>>>(7&u)&1)),u++),c="",w=0,v++,g=0,p=f._makeDiff(d),d=[])}d.length==o&&f._writeBits(d,n,8*a+v*S)},t.decode._addNtimes=function(t,e,r){for(var i=0;i<e;i++)t.push(r)},t.decode._writeBits=function(t,e,r){for(var i=0;i<t.length;i++)e[r+i>>>3]|=t[i]<<7-(r+i&7)},t.decode._decodeLZW=t.decode._decodeLZW=(s=0,h=0,f=0,u=0,l=function(){var t=r>>>3,e=(i[t]<<16|i[t+1]<<8|i[t+2])>>>24-(7&r)-h&(1<<h)-1;return r+=h,e},c=new Uint32Array(16384),d=0,p=function(t){h=t+1,s=u+1},m=function(t){for(var e=t<<2,r=c[e+2],i=o+r-1;65535!=e;)a[i--]=c[e],e=c[e+1];o+=r},g=function(t,e){var r=s<<2,i=t<<2;c[r]=c[3+(e<<2)],c[r+1]=i,c[r+2]=c[i+2]+1,c[r+3]=c[i+3],1+ ++s==1<<h&&12!=h&&h++},function(t,e,n,h,b,_){r=e<<3,i=t,a=h,o=b;var y=e+n<<3,w=0,v=0;for(function(t){if(t!=d){d=t,u=1+(f=1<<t);for(var e=0;e<u+1;e++)c[4*e]=c[4*e+3]=e,c[4*e+1]=65535,c[4*e+2]=1}}(_),p(_);r<y&&(w=l())!=u;){if(w==f){if(p(_),(w=l())==u)break;m(w)}else w<s?(m(w),g(v,w)):(g(v,v),m(s-1));v=w}return o}),t.tags={},t._types=((b=new Array(250)).fill(0),{basic:{main:b=b.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),rest:{33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7}},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}),t._readIFD=function(e,r,i,a,o,s){var h=e.readUshort(r,i);i+=2;var f={};s.debug&&n("   ".repeat(o),a.length-1,">>>----------------");for(var u=0;u<h;u++){var l=e.readUshort(r,i);i+=2;var c=e.readUshort(r,i);i+=2;var d=e.readUint(r,i);i+=4;var p=e.readUint(r,i);i+=4;var m=[];if(1!=c&&7!=c||(m=new Uint8Array(r.buffer,d<5?i-4:p,d)),2==c){var g=d<5?i-4:p,b=r[g],_=Math.max(0,Math.min(d-1,r.length-g));b<128||0==_?m.push(e.readASCII(r,g,_)):m=new Uint8Array(r.buffer,g,_)}if(3==c)for(var y=0;y<d;y++)m.push(e.readUshort(r,(d<3?i-4:p)+2*y));if(4==c||13==c)for(y=0;y<d;y++)m.push(e.readUint(r,(d<2?i-4:p)+4*y));if(5==c||10==c){var w=5==c?e.readUint:e.readInt;for(y=0;y<d;y++)m.push([w(r,p+8*y),w(r,p+8*y+4)])}if(8==c)for(y=0;y<d;y++)m.push(e.readShort(r,(d<3?i-4:p)+2*y));if(9==c)for(y=0;y<d;y++)m.push(e.readInt(r,(d<2?i-4:p)+4*y));if(11==c)for(y=0;y<d;y++)m.push(e.readFloat(r,p+4*y));if(12==c)for(y=0;y<d;y++)m.push(e.readDouble(r,p+8*y));if(0==d||0!=m.length){if(s.debug&&n("   ".repeat(o),l,c,t.tags[l],m),f["t"+l]=m,330==l&&f.t272&&"DSLR-A100"==f.t272[0]);else if(330==l||34665==l||34853==l||50740==l&&e.readUshort(r,e.readUint(m,0))<300||61440==l){var v=50740==l?[e.readUint(m,0)]:m,x=[];for(y=0;y<v.length;y++)t._readIFD(e,r,v[y],x,o+1,s);330==l&&(f.subIFD=x),34665==l&&(f.exifIFD=x[0]),34853==l&&(f.gpsiIFD=x[0]),50740==l&&(f.dngPrvt=x[0]),61440==l&&(f.fujiIFD=x[0])}if(37500==l&&s.parseMN){var E=m;if("Nikon"==e.readASCII(E,0,5))f.makerNote=t.decode(E.slice(10).buffer)[0];else if(e.readUshort(r,p)<300&&e.readUshort(r,p+4)<=12){var k=[];t._readIFD(e,r,p,k,o+1,s),f.makerNote=k[0]}}}else if(n(l,"unknown TIFF tag type: ",c,"num:",d),0==u)return}return a.push(f),s.debug&&n("   ".repeat(o),"<<<---------------"),i},t._writeIFD=function(e,r,i,n,a){var o=Object.keys(a),s=o.length;a.exifIFD&&s--,a.gpsiIFD&&s--,e.writeUshort(i,n,s);for(var h=(n+=2)+12*s+4,f=0;f<o.length;f++){var u=o[f];if("t34665"!=u&&"t34853"!=u){"exifIFD"==u&&(u="t34665"),"gpsiIFD"==u&&(u="t34853");var l=parseInt(u.slice(1)),c=r.main[l];if(null==c&&(c=r.rest[l]),null==c||0==c)throw new Error("unknown type of tag: "+l);var d=a[u];34665==l&&(d=[h],h=t._writeIFD(e,r,i,h,a.exifIFD)[1]),34853==l&&(d=[h],h=t._writeIFD(e,t._types.gps,i,h,a.gpsiIFD)[1]),2==c&&(d=d[0]+"\0");var p=d.length;e.writeUshort(i,n,l),n+=2,e.writeUshort(i,n,c),n+=2,e.writeUint(i,n,p);var m=[-1,1,1,2,4,8,0,1,0,4,8,0,8][c]*p,g=n+=4;if(m>4&&(e.writeUint(i,n,h),g=h),1==c||7==c)for(var b=0;b<p;b++)i[g+b]=d[b];else if(2==c)e.writeASCII(i,g,d);else if(3==c)for(b=0;b<p;b++)e.writeUshort(i,g+2*b,d[b]);else if(4==c)for(b=0;b<p;b++)e.writeUint(i,g+4*b,d[b]);else if(5==c||10==c){var _=5==c?e.writeUint:e.writeInt;for(b=0;b<p;b++){var y=d[b],w=y[0],v=y[1];if(null==w)throw"e";_(i,g+8*b,w),_(i,g+8*b+4,v)}}else if(9==c)for(b=0;b<p;b++)e.writeInt(i,g+4*b,d[b]);else{if(12!=c)throw c;for(b=0;b<p;b++)e.writeDouble(i,g+8*b,d[b])}m>4&&(h+=m+=1&m),n+=4}}return[n,h]},t.toRGBA8=function(t,e){var r=t.width,i=t.height,a=r*i,o=4*a,s=t.data,h=new Uint8Array(4*a),f=t.t262?t.t262[0]:2,u=t.t258?Math.min(32,t.t258[0]):1;if(null==t.t262&&1==u&&(f=0),0==f)for(var l=Math.ceil(u*r/8),c=0;c<i;c++){var d=c*l,p=c*r;if(1==u)for(var m=0;m<r;m++){var g=p+m<<2,b=s[d+(m>>3)]>>7-(7&m)&1;h[g]=h[g+1]=h[g+2]=255*(1-b),h[g+3]=255}if(4==u)for(m=0;m<r;m++)g=p+m<<2,b=s[d+(m>>1)]>>4-4*(1&m)&15,h[g]=h[g+1]=h[g+2]=17*(15-b),h[g+3]=255;if(8==u)for(m=0;m<r;m++)g=p+m<<2,b=s[d+m],h[g]=h[g+1]=h[g+2]=255-b,h[g+3]=255}else if(1==f){var _=t.t258?t.t258.length:1;for(l=Math.ceil(_*u*r/8),null==e&&(e=1/256),c=0;c<i;c++){if(d=c*l,p=c*r,1==u)for(m=0;m<r;m++)g=p+m<<2,b=s[d+(m>>3)]>>7-(7&m)&1,h[g]=h[g+1]=h[g+2]=255*b,h[g+3]=255;if(2==u)for(m=0;m<r;m++)g=p+m<<2,b=s[d+(m>>2)]>>6-2*(3&m)&3,h[g]=h[g+1]=h[g+2]=85*b,h[g+3]=255;if(8==u)for(m=0;m<r;m++)g=p+m<<2,b=s[d+m*_],h[g]=h[g+1]=h[g+2]=b,h[g+3]=255;if(16==u)for(m=0;m<r;m++){g=p+m<<2;var y=d+2*m;b=s[y+1]<<8|s[y],h[g]=h[g+1]=h[g+2]=Math.min(255,~~(b*e)),h[g+3]=255}}}else if(2==f)if(_=t.t258?t.t258.length:3,8==u){if(4==_)for(m=0;m<o;m++)h[m]=s[m];if(3==_)for(m=0;m<a;m++){var w=3*m;h[g=m<<2]=s[w],h[g+1]=s[w+1],h[g+2]=s[w+2],h[g+3]=255}}else if(16==u){if(4==_)for(m=0;m<a;m++)w=8*m+1,h[g=m<<2]=s[w],h[g+1]=s[w+2],h[g+2]=s[w+4],h[g+3]=s[w+6];if(3==_)for(m=0;m<a;m++)w=6*m+1,h[g=m<<2]=s[w],h[g+1]=s[w+2],h[g+2]=s[w+4],h[g+3]=255}else{if(32!=u)throw u;if(!h.isLE)for(m=0;m<s.length;m+=4){var v=s[m];s[m]=s[m+3],s[m+3]=v,v=s[m+1],s[m+1]=s[m+2],s[m+2]=v}var x=new Float32Array(s.buffer);if(3!=_)throw _;for(m=0;m<a;m++)w=3*m,h[g=m<<2]=~~(.5+255*x[w]),h[g+1]=~~(.5+255*x[w+1]),h[g+2]=~~(.5+255*x[w+2]),h[g+3]=255}else if(3==f){var E=t.t320,k=(_=t.t258?t.t258.length:1,l=Math.ceil(_*u*r/8),1<<u);for(c=0;c<i;c++)for(var S=0;S<r;S++){g=(m=c*r+S)<<2;var M=0,A=c*l;if(1==u)M=s[A+(S>>>3)]>>>7-(7&S)&1;else if(2==u)M=s[A+(S>>>2)]>>>6-2*(3&S)&3;else if(4==u)M=s[A+(S>>>1)]>>>4-4*(1&S)&15;else{if(8!=u)throw u;M=s[A+S*_]}h[g]=E[M]>>8,h[g+1]=E[k+M]>>8,h[g+2]=E[k+k+M]>>8,h[g+3]=255}}else if(5==f){var I=(_=t.t258?t.t258.length:4)>4?1:0;for(m=0;m<a;m++){g=m<<2;var T=m*_;if(UDOC){var B=s[T],R=s[T+1],P=s[T+2],O=s[T+3],L=UDOC.C.cmykToRgb([B*(1/255),R*(1/255),P*(1/255),O*(1/255)]);h[g]=~~(.5+255*L[0]),h[g+1]=~~(.5+255*L[1]),h[g+2]=~~(.5+255*L[2])}else B=255-s[T],R=255-s[T+1],P=255-s[T+2],O=(255-s[T+3])*(1/255),h[g]=~~(B*O+.5),h[g+1]=~~(R*O+.5),h[g+2]=~~(P*O+.5);h[g+3]=255*(1-I)+s[T+4]*I}}else if(6==f&&t.t278){var C=t.t278[0];for(c=0;c<i;c+=C){m=c*r;for(var U=C*r,D=0;D<U;D++){g=4*(m+D),P=s[(T=3*m+4*(D>>>1))+(1&D)];var z=s[T+2]-128,N=s[T+3]-128,F=P+((N>>2)+(N>>3)+(N>>5)),j=P-((z>>2)+(z>>4)+(z>>5))-((N>>1)+(N>>3)+(N>>4)+(N>>5)),G=P+(z+(z>>1)+(z>>2)+(z>>6));h[g]=Math.max(0,Math.min(255,F)),h[g+1]=Math.max(0,Math.min(255,j)),h[g+2]=Math.max(0,Math.min(255,G)),h[g+3]=255}}}else if(32845==f){function H(t){return t<.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}for(c=0;c<i;c++)for(S=0;S<r;S++){g=4*(c*r+S);var W=s[1+(T=6*(c*r+S))]<<8|s[T],q=(W=Math.pow(2,(W+.5)/256-64),(s[T+3]+.5)/410),Z=(s[T+5]+.5)/410,Y=9*q/(6*q-16*Z+12),V=4*Z/(6*q-16*Z+12),X=Y*W/V,Q=(1-Y-V)*W/V;F=2.69*X-1.276*(P=W)-.414*Q,j=-1.022*X+1.978*P+.044*Q,G=.061*X-.224*P+1.163*Q,h[g]=255*H(Math.min(F,1)),h[g+1]=255*H(Math.min(j,1)),h[g+2]=255*H(Math.min(G,1)),h[g+3]=255}}else n("Unknown Photometric interpretation: "+f);return h},t.replaceIMG=function(e){null==e&&(e=document.getElementsByTagName("img"));for(var r=["tif","tiff","dng","cr2","nef"],i=0;i<e.length;i++){var n=e[i],a=n.getAttribute("src");if(null!=a){var o=a.split(".").pop().toLowerCase();if(-1!=r.indexOf(o)){var s=new XMLHttpRequest;t._xhrs.push(s),t._imgs.push(n),s.open("GET",a),s.responseType="arraybuffer",s.onload=t._imgLoaded,s.send()}}}},t._xhrs=[],t._imgs=[],t._imgLoaded=function(e){var r=t._xhrs.indexOf(e.target),i=t._imgs[r];t._xhrs.splice(r,1),t._imgs.splice(r,1),i.setAttribute("src",t.bufferToURI(e.target.response))},t.bufferToURI=function(e){var r=t.decode(e),i=r,n=0,a=i[0];r[0].subIFD&&(i=i.concat(r[0].subIFD));for(var o=0;o<i.length;o++){var s=i[o];if(!(null==s.t258||s.t258.length<3)){var h=s.t256*s.t257;h>n&&(n=h,a=s)}}t.decodeImage(e,a,r);var f=t.toRGBA8(a),u=a.width,l=a.height,c=document.createElement("canvas");c.width=u,c.height=l;var d=c.getContext("2d"),p=new ImageData(new Uint8ClampedArray(f.buffer),u,l);return d.putImageData(p,0,0),c.toDataURL()},t._binBE={nextZero:function(t,e){for(;0!=t[e];)e++;return e},readUshort:function(t,e){return t[e]<<8|t[e+1]},readShort:function(e,r){var i=t._binBE.ui8;return i[0]=e[r+1],i[1]=e[r+0],t._binBE.i16[0]},readInt:function(e,r){var i=t._binBE.ui8;return i[0]=e[r+3],i[1]=e[r+2],i[2]=e[r+1],i[3]=e[r+0],t._binBE.i32[0]},readUint:function(e,r){var i=t._binBE.ui8;return i[0]=e[r+3],i[1]=e[r+2],i[2]=e[r+1],i[3]=e[r+0],t._binBE.ui32[0]},readASCII:function(t,e,r){for(var i="",n=0;n<r;n++)i+=String.fromCharCode(t[e+n]);return i},readFloat:function(e,r){for(var i=t._binBE.ui8,n=0;n<4;n++)i[n]=e[r+3-n];return t._binBE.fl32[0]},readDouble:function(e,r){for(var i=t._binBE.ui8,n=0;n<8;n++)i[n]=e[r+7-n];return t._binBE.fl64[0]},writeUshort:function(t,e,r){t[e]=r>>8&255,t[e+1]=255&r},writeInt:function(e,r,i){var n=t._binBE.ui8;t._binBE.i32[0]=i,e[r+3]=n[0],e[r+2]=n[1],e[r+1]=n[2],e[r+0]=n[3]},writeUint:function(t,e,r){t[e]=r>>24&255,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=r>>0&255},writeASCII:function(t,e,r){for(var i=0;i<r.length;i++)t[e+i]=r.charCodeAt(i)},writeDouble:function(e,r,i){t._binBE.fl64[0]=i;for(var n=0;n<8;n++)e[r+n]=t._binBE.ui8[7-n]}},t._binBE.ui8=new Uint8Array(8),t._binBE.i16=new Int16Array(t._binBE.ui8.buffer),t._binBE.i32=new Int32Array(t._binBE.ui8.buffer),t._binBE.ui32=new Uint32Array(t._binBE.ui8.buffer),t._binBE.fl32=new Float32Array(t._binBE.ui8.buffer),t._binBE.fl64=new Float64Array(t._binBE.ui8.buffer),t._binLE={nextZero:t._binBE.nextZero,readUshort:function(t,e){return t[e+1]<<8|t[e]},readShort:function(e,r){var i=t._binBE.ui8;return i[0]=e[r+0],i[1]=e[r+1],t._binBE.i16[0]},readInt:function(e,r){var i=t._binBE.ui8;return i[0]=e[r+0],i[1]=e[r+1],i[2]=e[r+2],i[3]=e[r+3],t._binBE.i32[0]},readUint:function(e,r){var i=t._binBE.ui8;return i[0]=e[r+0],i[1]=e[r+1],i[2]=e[r+2],i[3]=e[r+3],t._binBE.ui32[0]},readASCII:t._binBE.readASCII,readFloat:function(e,r){for(var i=t._binBE.ui8,n=0;n<4;n++)i[n]=e[r+n];return t._binBE.fl32[0]},readDouble:function(e,r){for(var i=t._binBE.ui8,n=0;n<8;n++)i[n]=e[r+n];return t._binBE.fl64[0]},writeUshort:function(t,e,r){t[e]=255&r,t[e+1]=r>>8&255},writeInt:function(e,r,i){var n=t._binBE.ui8;t._binBE.i32[0]=i,e[r+0]=n[0],e[r+1]=n[1],e[r+2]=n[2],e[r+3]=n[3]},writeUint:function(t,e,r){t[e]=r>>>0&255,t[e+1]=r>>>8&255,t[e+2]=r>>>16&255,t[e+3]=r>>>24&255},writeASCII:t._binBE.writeASCII},t._copyTile=function(t,e,r,i,n,a,o,s){for(var h=Math.min(e,n-o),f=Math.min(r,a-s),u=0;u<f;u++)for(var l=(s+u)*n+o,c=u*e,d=0;d<h;d++)i[l+d]=t[c+d]},t.LosslessJpegDecode=function(){var t,e;function r(){return t[e++]}function i(){return t[e++]<<8|t[e++]}function n(t){for(var e=r(),i=[0,0,0,255],n=[],o=0;o<16;o++)n[o]=r();for(o=0;o<16;o++)for(var s=0;s<n[o];s++)i[a(i,0,o+1,1)+3]=r();var h=new Uint8Array(256);for(t[e]=[new Uint8Array(i),h],o=0;o<256;o++){for(var f=8,u=o,l=0;255==i[l+3]&&0!=f;)l=i[l+(u>>--f&1)];h[o]=l}}function a(t,e,r,i){if(255!=t[e+3])return 0;if(0==r)return e;for(var n=0;n<2;n++){0==t[e+n]&&(t[e+n]=t.length,t.push(0,0,i,255));var o=a(t,t[e+n],r-1,i+1);if(0!=o)return o}return 0}function o(t){for(var e=t.b,r=t.a;e<25&&t.e<t.d;){var i=t.data[t.e++];t.c||(t.e+=i+1>>>8),r=r<<8|i,e+=8}if(e<0)throw"e";t.b=e,t.a=r}function s(t,e){return e.b<t&&o(e),e.a>>(e.b-=t)&65535>>16-t}function h(t,e){var r=t[0],i=0,n=255;e.b<16&&o(e);var a=e.a>>e.b-8&255;for(n=r[(i=t[1][a])+3],e.b-=r[i+2];255==n;)n=r[(i=r[i+(e.a>>--e.b&1)])+3];return n}function f(t,e){return t<32768>>16-e&&(t+=1-(1<<e)),t}function u(t,e){var r=h(t,e);return 0==r?0:16==r?-32768:f(s(r,e),r)}function l(t,e,r,i,n,a){for(var o=0;o<a;o++)for(var s=o*e,h=0;h<e;h+=n)for(var f=0;f<n;f++)t[s+h+f]=u(i[f],r)}function c(t,e){return f(s(t,e),t)}function d(t,e,r,i,n,a,o,s){for(var h=r*o,f=n;f<a;f++)t[f]+=1<<s-1;for(var u=o;u<h;u+=o)for(f=n;f<a;f++)t[u+f]+=t[u+f-o];for(var l=1;l<i;l++){var c=l*h;for(f=n;f<a;f++)t[c+f]+=t[c+f-h];for(u=o;u<h;u+=o)for(f=n;f<a;f++){var d=c+u+f,p=d-h,m=t[d-o],g=0;if(0==e)g=0;else if(1==e)g=m;else if(2==e)g=t[p];else if(3==e)g=t[p-o];else if(4==e)g=m+(t[p]-t[p-o]);else if(5==e)g=m+(t[p]-t[p-o]>>>1);else if(6==e)g=t[p]+(m-t[p-o]>>>1);else{if(7!=e)throw e;g=m+t[p]>>>1}t[d]+=g}}}return function(a){if(t=a,e=0,65496!=i())throw"e";for(var o=[],s=0,f=0,u=[],p=[],m=[],g=0,b=0,_=0;;){var y=i();if(65535!=y){var w=i();if(65475==y){f=r(),b=i(),_=i(),g=r();for(var v=0;v<g;v++){var x=r(),E=r();if(0!=r())throw"e";o[x]=[v,E>>4,15&E]}}else if(65476==y)for(var k=e+w-2;e<k;)n(p);else{if(65498==y){for(e++,v=0;v<g;v++){var S=o[r()];m[S[0]]=p[r()>>>4],u[S[0]]=S.slice(1)}s=r(),e+=2;break}e+=w-2}}else e--}var M=new(f>8?Uint16Array:Uint8Array)(b*_*g),A={b:0,a:0,c:8==s,e,data:t,d:t.length};if(A.c)!function(r,i,n,a,o){for(var s=t.length-e,f=0;f<s;f+=4){var u=t[e+f];t[e+f]=t[e+f+3],t[e+f+3]=u,u=t[e+f+1],t[e+f+1]=t[e+f+2],t[e+f+2]=u}for(var l=0;l<o;l++)for(var d=32768,p=32768,m=0;m<i;m+=2){var g=h(a,n),b=h(a,n);0!=g&&(d+=c(g,n)),0!=b&&(p+=c(b,n)),r[l*i+m]=65535&d,r[l*i+m+1]=65535&p}}(M,_*g,A,m[0],b);else{var I=[],T=0,B=0;for(v=0;v<g;v++){var R=u[v];(N=R[0])>T&&(T=N),(z=R[1])>B&&(B=z),I.push(N*z)}if(1!=T||1!=B){var P=[],O=0;for(v=0;v<g;v++){for(var L=0;L<I[v];L++)P.push(m[v]);O+=I[v]}var C=_/T,U=b/B;l(M,C*O,A,P,O,U),d(M,s,C,U,O-2,O,O,f);for(var D=M.slice(0),z=0;z<b;z++)for(var N=0;N<_;N++){var F=(z*_+N)*g,j=~~(z/B)*C+~~(N/T),G=0;for(v=0;v<g;v++){var H=1&N,W=j*O+G+(0==v?1==B?H:2*H+(1&z):0);M[F+v]=D[W],G+=I[v]}}d(M,s,_,b,0,1,g,f)}else l(M,_*g,A,m,g,b),d(M,s,_,b,0,g,g,f)}return M}}(),function(){var e=2,r=3,i=4,n=5,a=6,o=7,s=8,h=9,f=10,u=11,l=12,c=13,d=14,p=15,m=16,g=17;function b(t){for(var e=[[],[],[]],r=Math.max(2,t.w+32>>>6),i=0;i<3;i++)for(var n=0;n<41;n++)e[i][n]=[r,1];return e}function _(t,e){var r=0,i=8-t.a;if(t.j,t.a,e){if(e>=i)do{r<<=i,e-=i,r|=t[t.j]&(1<<i)-1,t.j++,i=8}while(e>=8);e&&(r<<=e,i-=e,r|=t[t.j]>>>i&(1<<e)-1),t.a=8-i}return r}function y(t,e,r,i,n,a,o,s){null==s&&(s=0);var h,f,u,l,c,d,p=a+1,m=p%2,g=0,b=i[n],y=i[n-1],w=i[n-2][p],v=y[p-1],x=y[p],E=y[p+1],k=b[p-1],S=b[p+1],M=Math.abs;if(m&&(u=M(E-x),l=M(w-x),c=M(v-x)),m){if(d=(d=u>c&&l<u?w+v:u<c&&l<c?w+E:E+v)+2*x>>>2,s)return void(b[p]=d);h=e.t*e.c[t.g+x-w]+e.c[t.g+v-x]}else d=x>v&&x>E||x<v&&x<E?S+k+2*x>>>2:k+S>>>1,h=e.t*e.c[t.g+x-v]+e.c[t.g+v-k];f=M(h);var A=function(t){for(var e=-1,r=0;!r;e++)r=t[t.j]>>>7-t.a&1,t.a++,t.a&=7,t.a||t.j++;return e}(r);if(A<t.n-e.v-1){var I=function(t,e){var r=0;if(e<t)for(;r<=14&&e<<++r<t;);return r}(o[f][0],o[f][1]);g=_(r,I)+(A<<I)}else g=_(r,e.v)+1;g=1&g?-1-(g>>>1):g>>>1,o[f][0]+=M(g),o[f][1]==t.f&&(o[f][0]>>>=1,o[f][1]>>>=1),o[f][1]++,d=h<0?d-g:d+g,t.i&&(d<0?d+=e.w:d>t.g&&(d-=e.w)),b[p]=d>=0?Math.min(d,t.g):0}function w(t,e,r){for(var i=t[0].length,n=e;n<=r;n++)t[n][0]=t[n-1][1],t[n][i-1]=t[n-1][i-2]}function v(t){w(t,o,l),w(t,e,i),w(t,p,g)}function x(t,e,r,n,a,o,s,h,f,u,l,d,p){for(var m=0,g=1,b=a<c&&a>i;g<t.m;)m<t.m&&(y(t,e,r,n,a,m,s[f],t.h&&(b&&u||!b&&(l||(m&d)==p))),y(t,e,r,n,o,m,s[f],t.h&&(!b&&u||b&&(l||(m&d)==p))),m+=2),m>8&&(y(t,e,r,n,a,g,h[f]),y(t,e,r,n,o,g,h[f]),g+=2);v(n)}function E(t,n,a,c,d,b){x(t,n,a,c,e,o,d,b,0,0,1,0,8),x(t,n,a,c,s,p,d,b,1,0,1,0,8),x(t,n,a,c,r,h,d,b,2,1,0,3,0),x(t,n,a,c,f,m,d,b,0,0,0,3,2),x(t,n,a,c,i,u,d,b,1,0,0,3,2),x(t,n,a,c,l,g,d,b,2,1,0,3,0)}function k(t,r,i,n,a,s){var h=s.length,f=t.l;a+1==t.s&&(f=t.e-a*t.l);for(var u=6*t.e*n+a*t.l,l=0;l<6;l++){for(var c=0;c<f;c++){var d,m=s[l%h][c%h];d=0==m?e+(l>>>1):2==m?p+(l>>>1):o+l;var g=t.h?(2*c/3&2147483646|c%3&1)+(c%3>>>1):c>>>1;r[u+c]=i[d][g+1]}u+=t.e}}t._decompressRAF=function(o,s){var h=function(e){var r=t._binBE.readUshort,i={b:r(e,0),i:e[2],C:e[3],u:e[4],q:r(e,5),k:r(e,7),e:r(e,9),l:r(e,11),s:e[13],d:r(e,14)};if(18771!=i.b||i.i>1||i.q<6||i.q%6||i.e<768||i.e%24||768!=i.l||i.k<i.l||i.k%i.l||i.k-i.e>=i.l||i.s>16||i.s!=i.k/i.l||i.s!=Math.ceil(i.e/i.l)||i.d!=i.q/6||12!=i.u&&14!=i.u&&16!=i.u||16!=i.C&&0!=i.C)throw"Invalid data";if(0==i.i)throw"Not implemented. We need this file!";return i.h=16==i.C,i.m=0|(i.h?2*i.l/3:i.l>>>1),i.A=i.m+2,i.f=64,i.g=(1<<i.u)-1,i.n=4*i.u,i}(o),f=function(e,r){var i=new Array(r.s),n=4*r.s,a=16+n;12&n&&(a+=16-(12&n));for(var o=0,s=16;o<r.s;s+=4){var h=t._binBE.readUint(e,s);i[o]=e.slice(a,a+h),i[o].j=0,i[o].a=0,a+=h,o++}if(a!=e.length)throw"Invalid data";return i}(o,h),p=function(t){var e={c:new Int8Array(2<<t.u)};return function(t,e,r){var i=[0,18,67,276,r];t.o=0,t.w=(i[4]+0)/1+1|0,t.v=Math.ceil(Math.log2(t.w)),t.t=9,function(t,e){for(var r=-e[4],i=0;r<=e[4];i++,r++)t[i]=r<=-e[3]?-4:r<=-e[2]?-3:r<=-e[1]?-2:r<-e[0]?-1:r<=e[0]?0:r<e[1]?1:r<e[2]?2:r<e[3]?3:4}(t.c,i)}(e,0,t.g),e}(h),_=new Int16Array(h.e*h.q);null==s&&(s=h.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var y=[[0,r],[1,i],[n,u],[a,l],[c,m],[d,g]],w=[],x=0;x<18;x++)w[x]=new Uint16Array(h.A);for(var S=0;S<h.s;S++){var M=b(p),A=b(p);for(x=0;x<18;x++)for(var I=0;I<h.A;I++)w[x][I]=0;for(var T=0;T<h.d;T++){for(E(h,p,f[S],w,M,A),x=0;x<6;x++)for(I=0;I<h.A;I++)w[y[x][0]][I]=w[y[x][1]][I];for(k(h,_,w,T,S,s),x=e;x<18;x++)if(-1==[n,a,c,d].indexOf(x))for(I=0;I<h.A;I++)w[x][I]=0;v(w)}}return _}}()}(e,r(2845))}()},6168:(t,e,r)=>{"use strict";r.r(e),r.d(e,{DOMException:()=>v,Headers:()=>u,Request:()=>b,Response:()=>y,fetch:()=>x});var i="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==i&&i,n={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};if(n.arrayBuffer)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function u(t){this.map={},t instanceof u?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function c(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function d(t){var e=new FileReader,r=c(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(d)}),this.text=function(){var t,e,r,i=l(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,r=c(e=new FileReader),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),i=0;i<e.length;i++)r[i]=String.fromCharCode(e[i]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=s(t),e=h(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},u.prototype.delete=function(t){delete this.map[s(t)]},u.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},u.prototype.set=function(t,e){this.map[s(t)]=h(e)},u.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},u.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},u.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},u.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},n.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){if(!(this instanceof b))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,i,n=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=(i=(r=e.method||this.method||"GET").toUpperCase(),g.indexOf(i)>-1?i:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var a=/([?&])_=[^&]*/;a.test(this.url)?this.url=this.url.replace(a,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function _(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),i=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(i),decodeURIComponent(n))}})),e}function y(t,e){if(!(this instanceof y))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},m.call(b.prototype),m.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];y.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new y(null,{status:e,headers:{location:t}})};var v=i.DOMException;try{new v}catch(t){(v=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),v.prototype.constructor=v}function x(t,e){return new Promise((function(r,a){var o=new b(t,e);if(o.signal&&o.signal.aborted)return a(new v("Aborted","AbortError"));var s=new XMLHttpRequest;function f(){s.abort()}s.onload=function(){var t,e,i={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),i=r.shift().trim();if(i){var n=r.join(":").trim();e.append(i,n)}})),e)};i.url="responseURL"in s?s.responseURL:i.headers.get("X-Request-URL");var n="response"in s?s.response:s.responseText;setTimeout((function(){r(new y(n,i))}),0)},s.onerror=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},s.ontimeout=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},s.onabort=function(){setTimeout((function(){a(new v("Aborted","AbortError"))}),0)},s.open(o.method,function(t){try{return""===t&&i.location.href?i.location.href:t}catch(e){return t}}(o.url),!0),"include"===o.credentials?s.withCredentials=!0:"omit"===o.credentials&&(s.withCredentials=!1),"responseType"in s&&(n.blob?s.responseType="blob":n.arrayBuffer&&o.headers.get("Content-Type")&&-1!==o.headers.get("Content-Type").indexOf("application/octet-stream")&&(s.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof u?o.headers.forEach((function(t,e){s.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){s.setRequestHeader(t,h(e.headers[t]))})),o.signal&&(o.signal.addEventListener("abort",f),s.onreadystatechange=function(){4===s.readyState&&o.signal.removeEventListener("abort",f)}),s.send(void 0===o._bodyInit?null:o._bodyInit)}))}x.polyfill=!0,i.fetch||(i.fetch=x,i.Headers=u,i.Request=b,i.Response=y)},6290:(t,e,r)=>{"use strict";var i=r(5048),n=r(9748),a=r(4655),o=r(1960);function s(t,e,r){var i=t;return n(e)?(r=e,"string"==typeof t&&(i={uri:t})):i=o(e,{uri:t}),i.callback=r,i}function h(t,e,r){return f(e=s(t,e,r))}function f(t){if(void 0===t.callback)throw new Error("callback argument missing");var e=!1,r=function(r,i,n){e||(e=!0,t.callback(r,i,n))};function i(){var t=void 0;if(t=u.response?u.response:u.responseText||function(t){try{if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;if(""===t.responseType&&!e)return t.responseXML}catch(t){}return null}(u),b)try{t=JSON.parse(t)}catch(t){}return t}function n(t){return clearTimeout(l),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,r(t,_)}function o(){if(!f){var e;clearTimeout(l),e=t.useXDR&&void 0===u.status?200:1223===u.status?204:u.status;var n=_,o=null;return 0!==e?(n={body:i(),statusCode:e,method:d,headers:{},url:c,rawRequest:u},u.getAllResponseHeaders&&(n.headers=a(u.getAllResponseHeaders()))):o=new Error("Internal XMLHttpRequest Error"),r(o,n,n.body)}}var s,f,u=t.xhr||null;u||(u=t.cors||t.useXDR?new h.XDomainRequest:new h.XMLHttpRequest);var l,c=u.url=t.uri||t.url,d=u.method=t.method||"GET",p=t.body||t.data,m=u.headers=t.headers||{},g=!!t.sync,b=!1,_={body:void 0,headers:{},statusCode:0,method:d,url:c,rawRequest:u};if("json"in t&&!1!==t.json&&(b=!0,m.accept||m.Accept||(m.Accept="application/json"),"GET"!==d&&"HEAD"!==d&&(m["content-type"]||m["Content-Type"]||(m["Content-Type"]="application/json"),p=JSON.stringify(!0===t.json?p:t.json))),u.onreadystatechange=function(){4===u.readyState&&setTimeout(o,0)},u.onload=o,u.onerror=n,u.onprogress=function(){},u.onabort=function(){f=!0},u.ontimeout=n,u.open(d,c,!g,t.username,t.password),g||(u.withCredentials=!!t.withCredentials),!g&&t.timeout>0&&(l=setTimeout((function(){if(!f){f=!0,u.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",n(t)}}),t.timeout)),u.setRequestHeader)for(s in m)m.hasOwnProperty(s)&&u.setRequestHeader(s,m[s]);else if(t.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(t.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in t&&(u.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(u),u.send(p||null),u}t.exports=h,t.exports.default=h,h.XMLHttpRequest=i.XMLHttpRequest||function(){},h.XDomainRequest="withCredentials"in new h.XMLHttpRequest?h.XMLHttpRequest:i.XDomainRequest,function(t,e){for(var r=0;r<t.length;r++)e(t[r])}(["get","put","post","patch","head","delete"],(function(t){h["delete"===t?"del":t]=function(e,r,i){return(r=s(e,r,i)).method=t.toUpperCase(),f(r)}}))},1596:t=>{t.exports=void 0!==self.DOMParser?function(t){return(new self.DOMParser).parseFromString(t,"application/xml")}:void 0!==self.ActiveXObject&&new self.ActiveXObject("Microsoft.XMLDOM")?function(t){var e=new self.ActiveXObject("Microsoft.XMLDOM");return e.async="false",e.loadXML(t),e}:function(t){var e=document.createElement("div");return e.innerHTML=t,e}},1960:t=>{t.exports=function(){for(var t={},r=0;r<arguments.length;r++){var i=arguments[r];for(var n in i)e.call(i,n)&&(t[n]=i[n])}return t};var e=Object.prototype.hasOwnProperty},8522:()=>{},6777:()=>{},5546:()=>{}},__webpack_module_cache__={};function __nested_webpack_require_507823__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t].call(r.exports,r,r.exports,__nested_webpack_require_507823__),r.exports}__nested_webpack_require_507823__.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return __nested_webpack_require_507823__.d(e,{a:e}),e},__nested_webpack_require_507823__.d=(t,e)=>{for(var r in e)__nested_webpack_require_507823__.o(e,r)&&!__nested_webpack_require_507823__.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},__nested_webpack_require_507823__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),__nested_webpack_require_507823__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),__nested_webpack_require_507823__.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var __webpack_exports__={};(()=>{"use strict";var t={};__nested_webpack_require_507823__.r(t),__nested_webpack_require_507823__.d(t,{AUTO:()=>it,BLEND_ADD:()=>dt,BLEND_DARKEN:()=>gt,BLEND_DESTINATION_OVER:()=>lt,BLEND_DIFFERENCE:()=>yt,BLEND_EXCLUSION:()=>wt,BLEND_HARDLIGHT:()=>_t,BLEND_LIGHTEN:()=>bt,BLEND_MULTIPLY:()=>ct,BLEND_OVERLAY:()=>mt,BLEND_SCREEN:()=>pt,BLEND_SOURCE_OVER:()=>ut,EDGE_CROP:()=>Et,EDGE_EXTEND:()=>vt,EDGE_WRAP:()=>xt,HORIZONTAL_ALIGN_CENTER:()=>at,HORIZONTAL_ALIGN_LEFT:()=>nt,HORIZONTAL_ALIGN_RIGHT:()=>ot,VERTICAL_ALIGN_BOTTOM:()=>ft,VERTICAL_ALIGN_MIDDLE:()=>ht,VERTICAL_ALIGN_TOP:()=>st});var e={};__nested_webpack_require_507823__.r(e),__nested_webpack_require_507823__.d(e,{add:()=>At,darken:()=>Bt,difference:()=>Ot,dstOver:()=>St,exclusion:()=>Lt,hardLight:()=>Pt,lighten:()=>Rt,multiply:()=>Mt,overlay:()=>Tt,screen:()=>It,srcOver:()=>kt});var r=__nested_webpack_require_507823__(5546),i=__nested_webpack_require_507823__.n(r),n=__nested_webpack_require_507823__(1023),a=__nested_webpack_require_507823__.n(n),o=__nested_webpack_require_507823__(2699),s=__nested_webpack_require_507823__.n(o);function h(t){if(void 0===t)return!1;if("function"!=typeof t)throw new TypeError("Callback must be a function");return!0}function f(t,e){if("string"==typeof t&&(t=new Error(t)),"function"==typeof e)return e.call(this,t);throw t}function u(t,e,r,i,n,a){e=Math.round(e),r=Math.round(r),i=Math.round(i),n=Math.round(n);for(let o=r;o<r+n;o++)for(let r=e;r<e+i;r++){const e=t.bitmap.width*o+r<<2;a.call(t,r,o,e)}return t}var l=__nested_webpack_require_507823__(236),c=__nested_webpack_require_507823__.n(l),d=__nested_webpack_require_507823__(869),p=__nested_webpack_require_507823__.n(d),m=__nested_webpack_require_507823__(1294),g=__nested_webpack_require_507823__.n(m);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}var _=/^\s+/,y=/\s+$/;function w(t,e){if(e=e||{},(t=t||"")instanceof w)return t;if(!(this instanceof w))return new w(t,e);var r=function(t){var e,r,i,n={r:0,g:0,b:0},a=1,o=null,s=null,h=null,f=!1,u=!1;return"string"==typeof t&&(t=function(t){t=t.replace(_,"").replace(y,"").toLowerCase();var e,r=!1;if(D[t])t=D[t],r=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=Q.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=Q.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=Q.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=Q.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=Q.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=Q.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=Q.hex8.exec(t))?{r:G(e[1]),g:G(e[2]),b:G(e[3]),a:Z(e[4]),format:r?"name":"hex8"}:(e=Q.hex6.exec(t))?{r:G(e[1]),g:G(e[2]),b:G(e[3]),format:r?"name":"hex"}:(e=Q.hex4.exec(t))?{r:G(e[1]+""+e[1]),g:G(e[2]+""+e[2]),b:G(e[3]+""+e[3]),a:Z(e[4]+""+e[4]),format:r?"name":"hex8"}:!!(e=Q.hex3.exec(t))&&{r:G(e[1]+""+e[1]),g:G(e[2]+""+e[2]),b:G(e[3]+""+e[3]),format:r?"name":"hex"}}(t)),"object"==b(t)&&(J(t.r)&&J(t.g)&&J(t.b)?(e=t.r,r=t.g,i=t.b,n={r:255*F(e,255),g:255*F(r,255),b:255*F(i,255)},f=!0,u="%"===String(t.r).substr(-1)?"prgb":"rgb"):J(t.h)&&J(t.s)&&J(t.v)?(o=W(t.s),s=W(t.v),n=function(t,e,r){t=6*F(t,360),e=F(e,100),r=F(r,100);var i=Math.floor(t),n=t-i,a=r*(1-e),o=r*(1-n*e),s=r*(1-(1-n)*e),h=i%6;return{r:255*[r,o,a,a,s,r][h],g:255*[s,r,r,o,a,a][h],b:255*[a,a,s,r,r,o][h]}}(t.h,o,s),f=!0,u="hsv"):J(t.h)&&J(t.s)&&J(t.l)&&(o=W(t.s),h=W(t.l),n=function(t,e,r){var i,n,a;function o(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=F(t,360),e=F(e,100),r=F(r,100),0===e)i=n=a=r;else{var s=r<.5?r*(1+e):r+e-r*e,h=2*r-s;i=o(h,s,t+1/3),n=o(h,s,t),a=o(h,s,t-1/3)}return{r:255*i,g:255*n,b:255*a}}(t.h,o,h),f=!0,u="hsl"),t.hasOwnProperty("a")&&(a=t.a)),a=N(a),{ok:f,format:t.format||u,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a}}(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function v(t,e,r){t=F(t,255),e=F(e,255),r=F(r,255);var i,n,a=Math.max(t,e,r),o=Math.min(t,e,r),s=(a+o)/2;if(a==o)i=n=0;else{var h=a-o;switch(n=s>.5?h/(2-a-o):h/(a+o),a){case t:i=(e-r)/h+(e<r?6:0);break;case e:i=(r-t)/h+2;break;case r:i=(t-e)/h+4}i/=6}return{h:i,s:n,l:s}}function x(t,e,r){t=F(t,255),e=F(e,255),r=F(r,255);var i,n,a=Math.max(t,e,r),o=Math.min(t,e,r),s=a,h=a-o;if(n=0===a?0:h/a,a==o)i=0;else{switch(a){case t:i=(e-r)/h+(e<r?6:0);break;case e:i=(r-t)/h+2;break;case r:i=(t-e)/h+4}i/=6}return{h:i,s:n,v:s}}function E(t,e,r,i){var n=[H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(r).toString(16))];return i&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function k(t,e,r,i){return[H(q(i)),H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(r).toString(16))].join("")}function S(t,e){e=0===e?0:e||10;var r=w(t).toHsl();return r.s-=e/100,r.s=j(r.s),w(r)}function M(t,e){e=0===e?0:e||10;var r=w(t).toHsl();return r.s+=e/100,r.s=j(r.s),w(r)}function A(t){return w(t).desaturate(100)}function I(t,e){e=0===e?0:e||10;var r=w(t).toHsl();return r.l+=e/100,r.l=j(r.l),w(r)}function T(t,e){e=0===e?0:e||10;var r=w(t).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),w(r)}function B(t,e){e=0===e?0:e||10;var r=w(t).toHsl();return r.l-=e/100,r.l=j(r.l),w(r)}function R(t,e){var r=w(t).toHsl(),i=(r.h+e)%360;return r.h=i<0?360+i:i,w(r)}function P(t){var e=w(t).toHsl();return e.h=(e.h+180)%360,w(e)}function O(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var r=w(t).toHsl(),i=[w(t)],n=360/e,a=1;a<e;a++)i.push(w({h:(r.h+a*n)%360,s:r.s,l:r.l}));return i}function L(t){var e=w(t).toHsl(),r=e.h;return[w(t),w({h:(r+72)%360,s:e.s,l:e.l}),w({h:(r+216)%360,s:e.s,l:e.l})]}function C(t,e,r){e=e||6,r=r||30;var i=w(t).toHsl(),n=360/r,a=[w(t)];for(i.h=(i.h-(n*e>>1)+720)%360;--e;)i.h=(i.h+n)%360,a.push(w(i));return a}function U(t,e){e=e||6;for(var r=w(t).toHsv(),i=r.h,n=r.s,a=r.v,o=[],s=1/e;e--;)o.push(w({h:i,s:n,v:a})),a=(a+s)%1;return o}w.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,r,i=this.toRgb();return t=i.r/255,e=i.g/255,r=i.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(t){return this._a=N(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=x(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=x(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),i=Math.round(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+i+"%)":"hsva("+e+", "+r+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var t=v(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=v(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),i=Math.round(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+i+"%)":"hsla("+e+", "+r+"%, "+i+"%, "+this._roundA+")"},toHex:function(t){return E(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,i,n){var a=[H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(r).toString(16)),H(q(i))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*F(this._r,255))+"%",g:Math.round(100*F(this._g,255))+"%",b:Math.round(100*F(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*F(this._r,255))+"%, "+Math.round(100*F(this._g,255))+"%, "+Math.round(100*F(this._b,255))+"%)":"rgba("+Math.round(100*F(this._r,255))+"%, "+Math.round(100*F(this._g,255))+"%, "+Math.round(100*F(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(z[E(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+k(this._r,this._g,this._b,this._a),r=e,i=this._gradientType?"GradientType = 1, ":"";if(t){var n=w(t);r="#"+k(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,i=this._a<1&&this._a>=0;return e||!i||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return w(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(I,arguments)},brighten:function(){return this._applyModification(T,arguments)},darken:function(){return this._applyModification(B,arguments)},desaturate:function(){return this._applyModification(S,arguments)},saturate:function(){return this._applyModification(M,arguments)},greyscale:function(){return this._applyModification(A,arguments)},spin:function(){return this._applyModification(R,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(C,arguments)},complement:function(){return this._applyCombination(P,arguments)},monochromatic:function(){return this._applyCombination(U,arguments)},splitcomplement:function(){return this._applyCombination(L,arguments)},triad:function(){return this._applyCombination(O,[3])},tetrad:function(){return this._applyCombination(O,[4])}},w.fromRatio=function(t,e){if("object"==b(t)){var r={};for(var i in t)t.hasOwnProperty(i)&&(r[i]="a"===i?t[i]:W(t[i]));t=r}return w(t,e)},w.equals=function(t,e){return!(!t||!e)&&w(t).toRgbString()==w(e).toRgbString()},w.random=function(){return w.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},w.mix=function(t,e,r){r=0===r?0:r||50;var i=w(t).toRgb(),n=w(e).toRgb(),a=r/100;return w({r:(n.r-i.r)*a+i.r,g:(n.g-i.g)*a+i.g,b:(n.b-i.b)*a+i.b,a:(n.a-i.a)*a+i.a})},w.readability=function(t,e){var r=w(t),i=w(e);return(Math.max(r.getLuminance(),i.getLuminance())+.05)/(Math.min(r.getLuminance(),i.getLuminance())+.05)},w.isReadable=function(t,e,r){var i,n,a,o,s,h=w.readability(t,e);switch(n=!1,(a=r,"AA"!==(o=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==o&&(o="AA"),"small"!==(s=(a.size||"small").toLowerCase())&&"large"!==s&&(s="small"),i={level:o,size:s}).level+i.size){case"AAsmall":case"AAAlarge":n=h>=4.5;break;case"AAlarge":n=h>=3;break;case"AAAsmall":n=h>=7}return n},w.mostReadable=function(t,e,r){var i,n,a,o,s=null,h=0;n=(r=r||{}).includeFallbackColors,a=r.level,o=r.size;for(var f=0;f<e.length;f++)(i=w.readability(t,e[f]))>h&&(h=i,s=w(e[f]));return w.isReadable(t,s,{level:a,size:o})||!n?s:(r.includeFallbackColors=!1,w.mostReadable(t,["#fff","#000"],r))};var D=w.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},z=w.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(D);function N(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function F(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function j(t){return Math.min(1,Math.max(0,t))}function G(t){return parseInt(t,16)}function H(t){return 1==t.length?"0"+t:""+t}function W(t){return t<=1&&(t=100*t+"%"),t}function q(t){return Math.round(255*parseFloat(t)).toString(16)}function Z(t){return G(t)/255}var Y,V,X,Q=(V="[\\s|\\(]+("+(Y="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Y+")[,|\\s]+("+Y+")\\s*\\)?",X="[\\s|\\(]+("+Y+")[,|\\s]+("+Y+")[,|\\s]+("+Y+")[,|\\s]+("+Y+")\\s*\\)?",{CSS_UNIT:new RegExp(Y),rgb:new RegExp("rgb"+V),rgba:new RegExp("rgba"+X),hsl:new RegExp("hsl"+V),hsla:new RegExp("hsla"+X),hsv:new RegExp("hsv"+V),hsva:new RegExp("hsva"+X),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function J(t){return!!Q.CSS_UNIT.exec(t)}function K(t,e){this.size=this.size||t,this.smallerSize=this.smallerSize||e,function(t){for(let e=1;e<t;e++)tt[e]=1;tt[0]=1/Math.sqrt(2)}(this.size)}function $(t){const e={};return e.r=Math.floor(t/Math.pow(256,3)),e.g=Math.floor((t-e.r*Math.pow(256,3))/Math.pow(256,2)),e.b=Math.floor((t-e.r*Math.pow(256,3)-e.g*Math.pow(256,2))/Math.pow(256,1)),e.a=Math.floor((t-e.r*Math.pow(256,3)-e.g*Math.pow(256,2)-e.b*Math.pow(256,1))/Math.pow(256,0)),e}K.prototype.size=32,K.prototype.smallerSize=8,K.prototype.distance=function(t,e){let r=0;for(let i=0;i<t.length;i++)t[i]!==e[i]&&r++;return r/t.length},K.prototype.getHash=function(t){(t=t.clone().resize(this.size,this.size)).grayscale();const e=[];for(let r=0;r<t.bitmap.width;r++){e[r]=[];for(let i=0;i<t.bitmap.height;i++)e[r][i]=$(t.getPixelColor(r,i)).b}const r=function(t,e){const r=e,i=[];for(let e=0;e<r;e++){i[e]=[];for(let n=0;n<r;n++){let a=0;for(let i=0;i<r;i++)for(let o=0;o<r;o++)a+=Math.cos((2*i+1)/(2*r)*e*Math.PI)*Math.cos((2*o+1)/(2*r)*n*Math.PI)*t[i][o];a*=tt[e]*tt[n]/4,i[e][n]=a}}return i}(e,this.size);let i=0;for(let t=0;t<this.smallerSize;t++)for(let e=0;e<this.smallerSize;e++)i+=r[t][e];const n=i/(this.smallerSize*this.smallerSize);let a="";for(let t=0;t<this.smallerSize;t++)for(let e=0;e<this.smallerSize;e++)a+=r[t][e]>n?"1":"0";return a};const tt=[],et=K;__nested_webpack_require_507823__(9307);const rt=(t,e)=>{let{url:r,...i}=t;fetch(r,i).then((t=>{if(t.ok)return t.arrayBuffer().catch((t=>{throw new Error(`Response is not a buffer for url ${r}. Error: ${t.message}`)}));throw new Error(`HTTP Status ${t.status} for url ${r}`)})).then((t=>e(null,t))).catch((t=>e(t)))},it=-1,nt=1,at=2,ot=4,st=8,ht=16,ft=32,ut="srcOver",lt="dstOver",ct="multiply",dt="add",pt="screen",mt="overlay",gt="darken",bt="lighten",_t="hardLight",yt="difference",wt="exclusion",vt=1,xt=2,Et=3;function kt(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a;return{r:(t.r*t.a+e.r*e.a*(1-t.a))/i,g:(t.g*t.a+e.g*e.a*(1-t.a))/i,b:(t.b*t.a+e.b*e.a*(1-t.a))/i,a:i}}function St(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a;return{r:(e.r*e.a+t.r*t.a*(1-e.a))/i,g:(e.g*e.a+t.g*t.a*(1-e.a))/i,b:(e.b*e.a+t.b*t.a*(1-e.a))/i,a:i}}function Mt(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a,s=e.r*e.a,h=e.g*e.a,f=e.b*e.a;return{r:(n*s+n*(1-e.a)+s*(1-t.a))/i,g:(a*h+a*(1-e.a)+h*(1-t.a))/i,b:(o*f+o*(1-e.a)+f*(1-t.a))/i,a:i}}function At(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a;return{r:(n+e.r*e.a)/i,g:(a+e.g*e.a)/i,b:(o+e.b*e.a)/i,a:i}}function It(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a,s=e.r*e.a,h=e.g*e.a,f=e.b*e.a;return{r:(n*e.a+s*t.a-n*s+n*(1-e.a)+s*(1-t.a))/i,g:(a*e.a+h*t.a-a*h+a*(1-e.a)+h*(1-t.a))/i,b:(o*e.a+f*t.a-o*f+o*(1-e.a)+f*(1-t.a))/i,a:i}}function Tt(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a,s=e.r*e.a,h=e.g*e.a,f=e.b*e.a;return{r:(2*s<=e.a?2*n*s+n*(1-e.a)+s*(1-t.a):n*(1+e.a)+s*(1+t.a)-2*s*n-e.a*t.a)/i,g:(2*h<=e.a?2*a*h+a*(1-e.a)+h*(1-t.a):a*(1+e.a)+h*(1+t.a)-2*h*a-e.a*t.a)/i,b:(2*f<=e.a?2*o*f+o*(1-e.a)+f*(1-t.a):o*(1+e.a)+f*(1+t.a)-2*f*o-e.a*t.a)/i,a:i}}function Bt(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a,s=e.r*e.a,h=e.g*e.a,f=e.b*e.a;return{r:(Math.min(n*e.a,s*t.a)+n*(1-e.a)+s*(1-t.a))/i,g:(Math.min(a*e.a,h*t.a)+a*(1-e.a)+h*(1-t.a))/i,b:(Math.min(o*e.a,f*t.a)+o*(1-e.a)+f*(1-t.a))/i,a:i}}function Rt(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a,s=e.r*e.a,h=e.g*e.a,f=e.b*e.a;return{r:(Math.max(n*e.a,s*t.a)+n*(1-e.a)+s*(1-t.a))/i,g:(Math.max(a*e.a,h*t.a)+a*(1-e.a)+h*(1-t.a))/i,b:(Math.max(o*e.a,f*t.a)+o*(1-e.a)+f*(1-t.a))/i,a:i}}function Pt(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a,s=e.r*e.a,h=e.g*e.a,f=e.b*e.a;return{r:(2*n<=t.a?2*n*s+n*(1-e.a)+s*(1-t.a):n*(1+e.a)+s*(1+t.a)-2*s*n-e.a*t.a)/i,g:(2*a<=t.a?2*a*h+a*(1-e.a)+h*(1-t.a):a*(1+e.a)+h*(1+t.a)-2*h*a-e.a*t.a)/i,b:(2*o<=t.a?2*o*f+o*(1-e.a)+f*(1-t.a):o*(1+e.a)+f*(1+t.a)-2*f*o-e.a*t.a)/i,a:i}}function Ot(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a,s=e.r*e.a,h=e.g*e.a,f=e.b*e.a;return{r:(n+s-2*Math.min(n*e.a,s*t.a))/i,g:(a+h-2*Math.min(a*e.a,h*t.a))/i,b:(o+f-2*Math.min(o*e.a,f*t.a))/i,a:i}}function Lt(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t.a*=r;const i=e.a+t.a-e.a*t.a,n=t.r*t.a,a=t.g*t.a,o=t.b*t.a,s=e.r*e.a,h=e.g*e.a,f=e.b*e.a;return{r:(n*e.a+s*t.a-2*n*s+n*(1-e.a)+s*(1-t.a))/i,g:(a*e.a+h*t.a-2*a*h+a*(1-e.a)+h*(1-t.a))/i,b:(o*e.a+f*t.a-2*o*f+o*(1-e.a)+f*(1-t.a))/i,a:i}}const Ct=function(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];return new Promise(((r,n)=>{i.push(((t,e)=>{t&&n(t),r(e)})),t.bind(e)(...i)}))},Ut={},Dt=(t,e)=>{Ut[t]=e},zt=t=>{const e=t.split("/").slice(-1);var r;return(r=e[e.length-1].split(".").pop(),Object.entries(Ut).find((t=>t[1].includes(r)))||[])[0]};var Nt=__nested_webpack_require_507823__(5025),Ft=__nested_webpack_require_507823__.n(Nt),jt=__nested_webpack_require_507823__(6551),Gt=__nested_webpack_require_507823__.n(jt),Ht=__nested_webpack_require_507823__(8834).lW;function Wt(t){return t._exif&&t._exif.tags&&t._exif.tags.Orientation||1}async function qt(t,e,r){const i=await async function(t,e){const r=await Ft().fromBuffer(t);return r?r.mime:e?zt(e):null}(t,e);if("string"!=typeof i)return r(new Error("Could not find MIME for Buffer <"+e+">"));this._originalMime=i.toLowerCase();try{const e=this.getMIME();if(!this.constructor.decoders[e])return f.call(this,"Unsupported MIME type: "+e,r);this.bitmap=this.constructor.decoders[e](t)}catch(t){return r.call(this,t,this)}try{this._exif=Gt().create(t).parse(),function(t){if(Wt(t)<2)return;const e=function(t){const e=t.getWidth(),r=t.getHeight();switch(Wt(t)){case 1:default:return null;case 2:return function(t,r){return[e-t-1,r]};case 3:return function(t,i){return[e-t-1,r-i-1]};case 4:return function(t,e){return[t,r-e-1]};case 5:return function(t,e){return[e,t]};case 6:return function(t,e){return[e,r-t-1]};case 7:return function(t,i){return[e-i-1,r-t-1]};case 8:return function(t,r){return[e-r-1,t]}}}(t),r=Wt(t)>4;!function(t,e,r,i){const n=t.bitmap.data,a=t.bitmap.width,o=Ht.alloc(n.length);for(let t=0;t<e;t++)for(let s=0;s<r;s++){const[r,h]=i(t,s),f=e*s+t<<2,u=a*h+r<<2,l=n.readUInt32BE(u);o.writeUInt32BE(l,f)}t.bitmap.data=o,t.bitmap.width=e,t.bitmap.height=r}(t,r?t.bitmap.height:t.bitmap.width,r?t.bitmap.width:t.bitmap.height,e)}(this)}catch(t){}return r.call(this,null,this),this}function Zt(t,e){if(t===it&&(t=this.getMIME()),"string"!=typeof t)return f.call(this,"mime must be a string",e);if("function"!=typeof e)return f.call(this,"cb must be a function",e);if(t=t.toLowerCase(),this._rgba&&this.constructor.hasAlpha[t]?this.bitmap.data=Ht.from(this.bitmap.data):this.bitmap.data=function(t,e){return new t(e.bitmap.width,e.bitmap.height,e._background).composite(e,0,0).bitmap}(this.constructor,this).data,!this.constructor.encoders[t])return f.call(this,"Unsupported MIME type: "+t,e);{const r=this.constructor.encoders[t](this);e.call(this,null,r)}return this}function Yt(t){return Ct(Zt,this,t)}var Vt=__nested_webpack_require_507823__(8834).lW;function Xt(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const Qt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",Jt=[NaN,NaN];for(let t=2;t<65;t++){const e=c()(c().BIN,Qt.slice(0,t))(new Array(65).join("1"));Jt.push(e.length)}function Kt(){}function $t(t){return Object.prototype.toString.call(t).toLowerCase().indexOf("arraybuffer")>-1}function te(t){const e=Vt.alloc(t.byteLength),r=new Uint8Array(t);for(let t=0;t<e.length;++t)e[t]=r[t];return e}function ee(t,e){rt(t,((r,i)=>r?e(r):"object"==typeof i&&Vt.isBuffer(i)?e(null,i):"object"==typeof i&&$t(i)?e(null,te(i)):new Error(`Could not load Buffer from <${t.url}>`)))}const re={data:null,width:null,height:null};class ie extends(s()){constructor(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];super(),Xt(this,"bitmap",re),Xt(this,"_background",0),Xt(this,"_originalMime",ie.MIME_PNG),Xt(this,"_exif",null),Xt(this,"_rgba",!0),Xt(this,"writeAsync",(t=>Ct(this.write,this,t))),Xt(this,"getBase64Async",(t=>Ct(this.getBase64,this,t))),Xt(this,"getBuffer",Zt),Xt(this,"getBufferAsync",Yt),Xt(this,"getPixelColour",this.getPixelColor),Xt(this,"setPixelColour",this.setPixelColor);const n=this;let a=Kt;function o(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];const[i]=e;(i||{}).methodName="constructor",setTimeout((()=>{i&&a===Kt?n.emitError("constructor",i):i||n.emitMulti("constructor","initialized"),a.call(n,...e)}),1)}if($t(e[0])&&(e[0]=te(e[0])),"number"==typeof e[0]&&"number"==typeof e[1]||parseInt(e[0],10)&&parseInt(e[1],10)){const t=parseInt(e[0],10),r=parseInt(e[1],10);if(a=e[2],"number"==typeof e[2]&&(this._background=e[2],a=e[3]),"string"==typeof e[2]&&(this._background=ie.cssColorToHex(e[2]),a=e[3]),void 0===a&&(a=Kt),"function"!=typeof a)return f.call(this,"cb must be a function",o);this.bitmap={data:Vt.alloc(t*r*4),width:t,height:r};for(let t=0;t<this.bitmap.data.length;t+=4)this.bitmap.data.writeUInt32BE(this._background,t);o(null,this)}else if("object"==typeof e[0]&&e[0].url){if(a=e[1]||Kt,"function"!=typeof a)return f.call(this,"cb must be a function",o);ee(e[0],((t,r)=>{if(t)return f.call(this,t,o);this.parseBitmap(r,e[0].url,o)}))}else if(e[0]instanceof ie){const[t]=e;if(a=e[1],void 0===a&&(a=Kt),"function"!=typeof a)return f.call(this,"cb must be a function",o);this.bitmap={data:Vt.from(t.bitmap.data),width:t.bitmap.width,height:t.bitmap.height},this._quality=t._quality,this._deflateLevel=t._deflateLevel,this._deflateStrategy=t._deflateStrategy,this._filterType=t._filterType,this._rgba=t._rgba,this._background=t._background,this._originalMime=t._originalMime,o(null,this)}else if((s=e[0])&&"object"==typeof s&&"number"==typeof s.width&&"number"==typeof s.height&&(Vt.isBuffer(s.data)||s.data instanceof Uint8Array||"function"==typeof Uint8ClampedArray&&s.data instanceof Uint8ClampedArray)&&(s.data.length===s.width*s.height*4||s.data.length===s.width*s.height*3)){const[t]=e;a=e[1]||Kt;const r=t.width*t.height*4===t.data.length?Vt.from(t.data):function(t){if(t.length%3!=0)throw new Error("Buffer length is incorrect");const e=Vt.allocUnsafe(t.length/3*4);let r=0;for(let i=0;i<t.length;i++)e[r]=t[i],(i+1)%3==0&&(e[++r]=255),r++;return e}(t.data);this.bitmap={data:r,width:t.width,height:t.height},o(null,this)}else if("string"==typeof e[0]){const t=e[0];if(a=e[1],void 0===a&&(a=Kt),"function"!=typeof a)return f.call(this,"cb must be a function",o);!function(t,e){i()&&"function"==typeof i().readFile&&!t.match(/^(http|ftp)s?:\/\/./)?i().readFile(t,e):ee({url:t},e)}(t,((e,r)=>{if(e)return f.call(this,e,o);this.parseBitmap(r,t,o)}))}else if("object"==typeof e[0]&&Vt.isBuffer(e[0])){const t=e[0];if(a=e[1],"function"!=typeof a)return f.call(this,"cb must be a function",o);this.parseBitmap(t,null,o)}else{a=e[e.length-1],"function"!=typeof a&&(a=e[e.length-2],"function"!=typeof a&&(a=Kt));const t=ie.__extraConstructors.find((t=>t.test(...e)));if(!t)return f.call(this,"No matching constructor overloading was found. Please see the docs for how to call the Jimp constructor.",o);new Promise(((r,i)=>{t.run.call(this,r,i,...e)})).then((()=>o(null,this))).catch(o)}var s}parseBitmap(t,e,r){qt.call(this,t,null,r)}rgba(t,e){return"boolean"!=typeof t?f.call(this,"bool must be a boolean, true for RGBA or false for RGB",e):(this._rgba=t,h(e)&&e.call(this,null,this),this)}emitMulti(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r=Object.assign(r,{methodName:t,eventName:e}),this.emit("any",r),t&&this.emit(t,r),this.emit(e,r)}emitError(t,e){this.emitMulti(t,"error",e)}getHeight(){return this.bitmap.height}getWidth(){return this.bitmap.width}inspect(){return"<Jimp "+(this.bitmap===re?"pending...":this.bitmap.width+"x"+this.bitmap.height)+">"}toString(){return"[object Jimp]"}getMIME(){return this._originalMime||ie.MIME_PNG}getExtension(){const t=this.getMIME();return(Ut[t.toLowerCase()]||[])[0]}write(t,e){if(!i()||!i().createWriteStream)throw new Error("Cant access the filesystem. You can use the getBase64 method.");if("string"!=typeof t)return f.call(this,"path must be a string",e);if(void 0===e&&(e=Kt),"function"!=typeof e)return f.call(this,"cb must be a function",e);const r=zt(t)||this.getMIME(),n=a().parse(t);return n.dir&&p().sync(n.dir),this.getBuffer(r,((r,n)=>{if(r)return f.call(this,r,e);const a=i().createWriteStream(t);a.on("open",(()=>{a.write(n),a.end()})).on("error",(t=>f.call(this,t,e))),a.on("finish",(()=>{e.call(this,null,this)}))})),this}getBase64(t,e){return t===ie.AUTO&&(t=this.getMIME()),"string"!=typeof t?f.call(this,"mime must be a string",e):"function"!=typeof e?f.call(this,"cb must be a function",e):(this.getBuffer(t,(function(r,i){if(r)return f.call(this,r,e);const n="data:"+t+";base64,"+i.toString("base64");e.call(this,null,n)})),this)}hash(t,e){if("function"==typeof(t=t||64)&&(e=t,t=64),"number"!=typeof t)return f.call(this,"base must be a number",e);if(t<2||t>64)return f.call(this,"base must be a number between 2 and 64",e);let r=this.pHash();for(r=c()(c().BIN,Qt.slice(0,t))(r);r.length<Jt[t];)r="0"+r;return h(e)&&e.call(this,null,r),r}pHash(){return(new et).getHash(this)}distanceFromHash(t){const e=new et,r=e.getHash(this);return e.distance(r,t)}getPixelIndex(t,e,r,i){let n,a;if("function"==typeof r&&void 0===i&&(i=r,r=null),r||(r=ie.EDGE_EXTEND),"number"!=typeof t||"number"!=typeof e)return f.call(this,"x and y must be numbers",i);n=t=Math.round(t),a=e=Math.round(e),r===ie.EDGE_EXTEND&&(t<0&&(n=0),t>=this.bitmap.width&&(n=this.bitmap.width-1),e<0&&(a=0),e>=this.bitmap.height&&(a=this.bitmap.height-1)),r===ie.EDGE_WRAP&&(t<0&&(n=this.bitmap.width+t),t>=this.bitmap.width&&(n=t%this.bitmap.width),e<0&&(a=this.bitmap.height+e),e>=this.bitmap.height&&(a=e%this.bitmap.height));let o=this.bitmap.width*a+n<<2;return(n<0||n>=this.bitmap.width)&&(o=-1),(a<0||a>=this.bitmap.height)&&(o=-1),h(i)&&i.call(this,null,o),o}getPixelColor(t,e,r){if("number"!=typeof t||"number"!=typeof e)return f.call(this,"x and y must be numbers",r);t=Math.round(t),e=Math.round(e);const i=this.getPixelIndex(t,e),n=this.bitmap.data.readUInt32BE(i);return h(r)&&r.call(this,null,n),n}setPixelColor(t,e,r,i){if("number"!=typeof t||"number"!=typeof e||"number"!=typeof r)return f.call(this,"hex, x and y must be numbers",i);e=Math.round(e),r=Math.round(r);const n=this.getPixelIndex(e,r);return this.bitmap.data.writeUInt32BE(t,n),h(i)&&i.call(this,null,this),this}hasAlpha(){for(let t=0;t<this.bitmap.height;t++)for(let e=0;e<this.bitmap.width;e++){const r=this.bitmap.width*t+e<<2;if(255!==this.bitmap.data[r+3])return!0}return!1}scanIterator(t,e,r,i){return"number"!=typeof t||"number"!=typeof e?f.call(this,"x and y must be numbers"):"number"!=typeof r||"number"!=typeof i?f.call(this,"w and h must be numbers"):function*(t,e,r,i,n){e=Math.round(e),r=Math.round(r),i=Math.round(i),n=Math.round(n);for(let a=r;a<r+n;a++)for(let r=e;r<e+i;r++){const e=t.bitmap.width*a+r<<2;yield{x:r,y:a,idx:e,image:t}}}(this,t,e,r,i)}}function ne(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ie;Object.entries(t).forEach((t=>{let[r,i]=t;e[r]=i}))}function ae(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ie;Object.entries(t).forEach((t=>{let[r,i]=t;e.prototype[r]=i}))}function oe(t,e,r){const i="before-"+e,n=e.replace(/e$/,"")+"ed";ie.prototype[t]=function(){let e;for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];const h=o[r.length-1],f=this;let u;"function"==typeof h?(e=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];const[a,o]=r;a?f.emitError(t,a):f.emitMulti(t,n,{[t]:o}),h.apply(this,r)},o[o.length-1]=e):e=!1,this.emitMulti(t,i);try{u=r.apply(this,o),e||this.emitMulti(t,n,{[t]:u})}catch(e){e.methodName=t,this.emitError(t,e)}return u},ie.prototype[t+"Quiet"]=r}function se(t,e){oe(t,"change",e)}ne(t),ae({composite:function(t,r,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4?arguments[4]:void 0;if("function"==typeof n&&(a=n,n={}),!(t instanceof this.constructor))return f.call(this,"The source must be a Jimp image",a);if("number"!=typeof r||"number"!=typeof i)return f.call(this,"x and y must be numbers",a);let{mode:o,opacitySource:s,opacityDest:u}=n;o||(o=ut),("number"!=typeof s||s<0||s>1)&&(s=1),("number"!=typeof u||u<0||u>1)&&(u=1);const l=e[o];r=Math.round(r),i=Math.round(i);const c=this;return 1!==u&&c.opacity(u),t.scanQuiet(0,0,t.bitmap.width,t.bitmap.height,(function(t,e,n){const a=c.getPixelIndex(r+t,i+e,Et),o=l({r:this.bitmap.data[n+0]/255,g:this.bitmap.data[n+1]/255,b:this.bitmap.data[n+2]/255,a:this.bitmap.data[n+3]/255},{r:c.bitmap.data[a+0]/255,g:c.bitmap.data[a+1]/255,b:c.bitmap.data[a+2]/255,a:c.bitmap.data[a+3]/255},s);c.bitmap.data[a+0]=this.constructor.limit255(255*o.r),c.bitmap.data[a+1]=this.constructor.limit255(255*o.g),c.bitmap.data[a+2]=this.constructor.limit255(255*o.b),c.bitmap.data[a+3]=this.constructor.limit255(255*o.a)})),h(a)&&a.call(this,null,this),this}}),ie.__extraConstructors=[],ie.appendConstructorOption=function(t,e,r){ie.__extraConstructors.push({name:t,test:e,run:r})},ie.read=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return new Promise(((t,r)=>{new ie(...e,((e,i)=>{e?r(e):t(i)}))}))},ie.create=ie.read,ie.rgbaToInt=function(t,e,r,i,n){if("number"!=typeof t||"number"!=typeof e||"number"!=typeof r||"number"!=typeof i)return f.call(this,"r, g, b and a must be numbers",n);if(t<0||t>255)return f.call(this,"r must be between 0 and 255",n);if((e<0||e>255)&&f.call(this,"g must be between 0 and 255",n),r<0||r>255)return f.call(this,"b must be between 0 and 255",n);if(i<0||i>255)return f.call(this,"a must be between 0 and 255",n);t=Math.round(t),r=Math.round(r),e=Math.round(e),i=Math.round(i);const a=t*Math.pow(256,3)+e*Math.pow(256,2)+r*Math.pow(256,1)+i*Math.pow(256,0);return h(n)&&n.call(this,null,a),a},ie.intToRGBA=function(t,e){if("number"!=typeof t)return f.call(this,"i must be a number",e);const r={};return r.r=Math.floor(t/Math.pow(256,3)),r.g=Math.floor((t-r.r*Math.pow(256,3))/Math.pow(256,2)),r.b=Math.floor((t-r.r*Math.pow(256,3)-r.g*Math.pow(256,2))/Math.pow(256,1)),r.a=Math.floor((t-r.r*Math.pow(256,3)-r.g*Math.pow(256,2)-r.b*Math.pow(256,1))/Math.pow(256,0)),h(e)&&e.call(this,null,r),r},ie.cssColorToHex=function(t){return"number"==typeof(t=t||0)?Number(t):parseInt(w(t).toHex8(),16)},ie.limit255=function(t){return t=Math.max(t,0),Math.min(t,255)},ie.diff=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1;if(!(t instanceof ie&&e instanceof ie))return f.call(this,"img1 and img2 must be an Jimp images");const i=t.bitmap,n=e.bitmap;if(i.width===n.width&&i.height===n.height||(i.width*i.height>n.width*n.height?t=t.cloneQuiet().resize(n.width,n.height):e=e.cloneQuiet().resize(i.width,i.height)),"number"!=typeof r||r<0||r>1)return f.call(this,"threshold must be a number between 0 and 1");const a=new ie(i.width,i.height,4294967295);return{percent:g()(i.data,n.data,a.bitmap.data,a.bitmap.width,a.bitmap.height,{threshold:r})/(a.bitmap.width*a.bitmap.height),image:a}},ie.distance=function(t,e){const r=new et,i=r.getHash(t),n=r.getHash(e);return r.distance(i,n)},ie.compareHashes=function(t,e){return(new et).distance(t,e)},ie.colorDiff=function(t,e){const r=t=>Math.pow(t,2),{max:i}=Math;return 0===t.a||t.a||(t.a=255),0===e.a||e.a||(e.a=255),(i(r(t.r-e.r),r(t.r-e.r-t.a+e.a))+i(r(t.g-e.g),r(t.g-e.g-t.a+e.a))+i(r(t.b-e.b),r(t.b-e.b-t.a+e.a)))/195075},oe("clone","clone",(function(t){const e=new ie(this);return h(t)&&t.call(e,null,e),e})),se("background",(function(t,e){return"number"!=typeof t?f.call(this,"hex must be a hexadecimal rgba value",e):(this._background=t,h(e)&&e.call(this,null,this),this)})),se("scan",(function(t,e,r,i,n,a){if("number"!=typeof t||"number"!=typeof e)return f.call(this,"x and y must be numbers",a);if("number"!=typeof r||"number"!=typeof i)return f.call(this,"w and h must be numbers",a);if("function"!=typeof n)return f.call(this,"f must be a function",a);const o=u(this,t,e,r,i,n);return h(a)&&a.call(this,null,o),o}));{let t;"undefined"!=typeof window&&"object"==typeof window&&(t=window),"undefined"!=typeof self&&"object"==typeof self&&(t=self),t.Jimp=ie,t.Buffer=Vt}const he=ie;var fe=__nested_webpack_require_507823__(643),ue=__nested_webpack_require_507823__(2691),le=__nested_webpack_require_507823__.n(ue);const ce="image/jpeg",de=()=>({mime:{[ce]:["jpeg","jpg","jpe"]},constants:{MIME_JPEG:ce},decoders:{[ce]:le().decode},encoders:{[ce]:t=>le().encode(t.bitmap,t._quality).data},class:{_quality:100,quality(t,e){return"number"!=typeof t?f.call(this,"n must be a number",e):t<0||t>100?f.call(this,"n must be a number 0 - 100",e):(this._quality=Math.round(t),h(e)&&e.call(this,null,this),this)}}});var pe=__nested_webpack_require_507823__(9902);const me="image/png",ge=()=>({mime:{[me]:["png"]},constants:{MIME_PNG:me,PNG_FILTER_AUTO:-1,PNG_FILTER_NONE:0,PNG_FILTER_SUB:1,PNG_FILTER_UP:2,PNG_FILTER_AVERAGE:3,PNG_FILTER_PATH:4},hasAlpha:{[me]:!0},decoders:{[me]:pe.PNG.sync.read},encoders:{[me](t){const e=new pe.PNG({width:t.bitmap.width,height:t.bitmap.height});return e.data=t.bitmap.data,pe.PNG.sync.write(e,{deflateLevel:t._deflateLevel,deflateStrategy:t._deflateStrategy,filterType:t._filterType,colorType:"number"==typeof t._colorType?t._colorType:t._rgba?6:2,inputHasAlpha:t._rgba})}},class:{_deflateLevel:9,_deflateStrategy:3,_filterType:-1,_colorType:null,deflateLevel(t,e){return"number"!=typeof t?f.call(this,"l must be a number",e):t<0||t>9?f.call(this,"l must be a number 0 - 9",e):(this._deflateLevel=Math.round(t),h(e)&&e.call(this,null,this),this)},deflateStrategy(t,e){return"number"!=typeof t?f.call(this,"s must be a number",e):t<0||t>3?f.call(this,"s must be a number 0 - 3",e):(this._deflateStrategy=Math.round(t),h(e)&&e.call(this,null,this),this)},filterType(t,e){return"number"!=typeof t?f.call(this,"n must be a number",e):t<-1||t>4?f.call(this,"n must be -1 (auto) or a number 0 - 4",e):(this._filterType=Math.round(t),h(e)&&e.call(this,null,this),this)},colorType(t,e){return"number"!=typeof t?f.call(this,"s must be a number",e):0!==t&&2!==t&&4!==t&&6!==t?f.call(this,"s must be a number 0, 2, 4, 6.",e):(this._colorType=Math.round(t),h(e)&&e.call(this,null,this),this)}}});var be=__nested_webpack_require_507823__(486),_e=__nested_webpack_require_507823__.n(be);const ye="image/bmp",we="image/x-ms-bmp",ve=t=>{return u({bitmap:e=_e().decode(t)},0,0,e.width,e.height,(function(t,r,i){const n=this.bitmap.data[i+0],a=this.bitmap.data[i+1],o=this.bitmap.data[i+2],s=this.bitmap.data[i+3];this.bitmap.data[i+0]=s,this.bitmap.data[i+1]=o,this.bitmap.data[i+2]=a,this.bitmap.data[i+3]=e.is_with_alpha?n:255})).bitmap;var e},xe=t=>_e().encode(function(t){return u(t,0,0,t.bitmap.width,t.bitmap.height,(function(t,e,r){const i=this.bitmap.data[r+0],n=this.bitmap.data[r+1],a=this.bitmap.data[r+2],o=this.bitmap.data[r+3];this.bitmap.data[r+0]=o,this.bitmap.data[r+1]=a,this.bitmap.data[r+2]=n,this.bitmap.data[r+3]=i})).bitmap}(t)).data;var Ee=__nested_webpack_require_507823__(9299),ke=__nested_webpack_require_507823__.n(Ee),Se=__nested_webpack_require_507823__(8834).lW;const Me="image/tiff";var Ae=__nested_webpack_require_507823__(63),Ie=__nested_webpack_require_507823__(9455),Te=__nested_webpack_require_507823__(8834).lW;const Be="image/gif",Re=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],Pe=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];var Oe=__nested_webpack_require_507823__(8834).lW;function Le(t,e,r,i){const n=[0,0,0],a=(e.length-1)/2;for(let o=0;o<e.length;o+=1)for(let s=0;s<e[o].length;s+=1){const h=t.getPixelIndex(r+o-a,i+s-a);n[0]+=t.bitmap.data[h]*e[o][s],n[1]+=t.bitmap.data[h+1]*e[o][s],n[2]+=t.bitmap.data[h+2]*e[o][s]}return n}const Ce=t=>null!=t;function Ue(t){return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,r){const i=parseInt(.2126*this.bitmap.data[r]+.7152*this.bitmap.data[r+1]+.0722*this.bitmap.data[r+2],10);this.bitmap.data[r]=i,this.bitmap.data[r+1]=i,this.bitmap.data[r+2]=i})),h(t)&&t.call(this,null,this),this}function De(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50;return{r:(e.r-t.r)*(r/100)+t.r,g:(e.g-t.g)*(r/100)+t.g,b:(e.b-t.b)*(r/100)+t.b}}function ze(t,e){return t&&Array.isArray(t)?(t=t.map((t=>("xor"!==t.apply&&"mix"!==t.apply||(t.params[0]=w(t.params[0]).toRgb()),t))),this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,((r,i,n)=>{let a={r:this.bitmap.data[n],g:this.bitmap.data[n+1],b:this.bitmap.data[n+2]};const o=(t,e)=>this.constructor.limit255(a[t]+e);t.forEach((t=>{if("mix"===t.apply)a=De(a,t.params[0],t.params[1]);else if("tint"===t.apply)a=De(a,{r:255,g:255,b:255},t.params[0]);else if("shade"===t.apply)a=De(a,{r:0,g:0,b:0},t.params[0]);else if("xor"===t.apply)a={r:a.r^t.params[0].r,g:a.g^t.params[0].g,b:a.b^t.params[0].b};else if("red"===t.apply)a.r=o("r",t.params[0]);else if("green"===t.apply)a.g=o("g",t.params[0]);else if("blue"===t.apply)a.b=o("b",t.params[0]);else{if("hue"===t.apply&&(t.apply="spin"),a=w(a),!a[t.apply])return f.call(this,"action "+t.apply+" not supported",e);a=a[t.apply](...t.params).toRgb()}})),this.bitmap.data[n]=a.r,this.bitmap.data[n+1]=a.g,this.bitmap.data[n+2]=a.b})),h(e)&&e.call(this,null,this),this):f.call(this,"actions must be an array",e)}Object.freeze({LIGHTEN:"lighten",BRIGHTEN:"brighten",DARKEN:"darken",DESATURATE:"desaturate",SATURATE:"saturate",GREYSCALE:"greyscale",SPIN:"spin",HUE:"hue",MIX:"mix",TINT:"tint",SHADE:"shade",XOR:"xor",RED:"red",GREEN:"green",BLUE:"blue"});var Ne=__nested_webpack_require_507823__(8834).lW;function Fe(t){const e=[1,9,3,11,13,5,15,7,4,12,2,10,16,8,14,6];return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,r,i){const n=e[((3&r)<<2)+t%4];this.bitmap.data[i]=Math.min(this.bitmap.data[i]+n,255),this.bitmap.data[i+1]=Math.min(this.bitmap.data[i+1]+n,255),this.bitmap.data[i+2]=Math.min(this.bitmap.data[i+2]+n,255)})),h(t)&&t.call(this,null,this),this}var je=__nested_webpack_require_507823__(8834).lW;function Ge(t,e,r){if("boolean"!=typeof t||"boolean"!=typeof e)return f.call(this,"horizontal and vertical must be Booleans",r);const i=je.alloc(this.bitmap.data.length);return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(r,n,a){const o=t?this.bitmap.width-1-r:r,s=e?this.bitmap.height-1-n:n,h=this.bitmap.width*s+o<<2,f=this.bitmap.data.readUInt32BE(a);i.writeUInt32BE(f,h)})),this.bitmap.data=je.from(i),h(r)&&r.call(this,null,this),this}function He(){const t={r:new Array(256).fill(0),g:new Array(256).fill(0),b:new Array(256).fill(0)};return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(e,r,i){t.r[this.bitmap.data[i+0]]++,t.g[this.bitmap.data[i+1]]++,t.b[this.bitmap.data[i+2]]++})),t}const We=function(t,e,r){return 255*(t-e)/(r-e)},qe=function(t){return[t.findIndex((t=>t>0)),255-t.slice().reverse().findIndex((t=>t>0))]};var Ze=__nested_webpack_require_507823__(8058),Ye=__nested_webpack_require_507823__.n(Ze);function Ve(t,e){let r=0;for(let i=0;i<e.length;i++)if(t.chars[e[i]]){const n=t.kernings[e[i]]&&t.kernings[e[i]][e[i+1]]?t.kernings[e[i]][e[i+1]]:0;r+=(t.chars[e[i]].xadvance||0)+n}return r}function Xe(t,e,r){const i=e.split(" "),n=[];let a=[],o=0;return i.forEach((e=>{const i=[...a,e].join(" "),s=Ve(t,i);s<=r?(s>o&&(o=s),a.push(e)):(n.push(a),a=[e])})),n.push(a),{lines:n,longestLine:o}}function Qe(t,e,r){const{lines:i}=Xe(t,e,r);return i.length*t.common.lineHeight}function Je(t,e,r,i,n){if(n.width>0&&n.height>0){const a=e.pages[n.page];t.blit(a,r+n.xoffset,i+n.yoffset,n.x,n.y,n.width,n.height)}return t}function Ke(t,e,r,i,n){for(let a=0;a<i.length;a++){let o;o=t.chars[i[a]]?i[a]:/\s/.test(i[a])?"":"?";const s=t.chars[o]||{},h=t.kernings[o];Je(this,t,e,r,s||{}),e+=(h&&h[i[a+1]]?h[i[a+1]]:0)+(s.xadvance||n)}}const $e="//../";function tr(t,e,r,i,n,a,o){this.widthOriginal=Math.abs(Math.floor(t)||0),this.heightOriginal=Math.abs(Math.floor(e)||0),this.targetWidth=Math.abs(Math.floor(r)||0),this.targetHeight=Math.abs(Math.floor(i)||0),this.colorChannels=n?4:3,this.interpolationPass=Boolean(a),this.resizeCallback="function"==typeof o?o:function(){},this.targetWidthMultipliedByChannels=this.targetWidth*this.colorChannels,this.originalWidthMultipliedByChannels=this.widthOriginal*this.colorChannels,this.originalHeightMultipliedByChannels=this.heightOriginal*this.colorChannels,this.widthPassResultSize=this.targetWidthMultipliedByChannels*this.heightOriginal,this.finalResultSize=this.targetWidthMultipliedByChannels*this.targetHeight,this.initialize()}tr.prototype.initialize=function(){if(!(this.widthOriginal>0&&this.heightOriginal>0&&this.targetWidth>0&&this.targetHeight>0))throw new Error("Invalid settings specified for the resizer.");this.configurePasses()},tr.prototype.configurePasses=function(){this.widthOriginal===this.targetWidth?this.resizeWidth=this.bypassResizer:(this.ratioWeightWidthPass=this.widthOriginal/this.targetWidth,this.ratioWeightWidthPass<1&&this.interpolationPass?(this.initializeFirstPassBuffers(!0),this.resizeWidth=4===this.colorChannels?this.resizeWidthInterpolatedRGBA:this.resizeWidthInterpolatedRGB):(this.initializeFirstPassBuffers(!1),this.resizeWidth=4===this.colorChannels?this.resizeWidthRGBA:this.resizeWidthRGB)),this.heightOriginal===this.targetHeight?this.resizeHeight=this.bypassResizer:(this.ratioWeightHeightPass=this.heightOriginal/this.targetHeight,this.ratioWeightHeightPass<1&&this.interpolationPass?(this.initializeSecondPassBuffers(!0),this.resizeHeight=this.resizeHeightInterpolated):(this.initializeSecondPassBuffers(!1),this.resizeHeight=4===this.colorChannels?this.resizeHeightRGBA:this.resizeHeightRGB))},tr.prototype._resizeWidthInterpolatedRGBChannels=function(t,e){const r=e?4:3,i=this.ratioWeightWidthPass,n=this.widthBuffer;let a,o,s=0,h=0,f=0,u=0,l=0;for(a=0;s<1/3;a+=r,s+=i)for(h=a,f=0;h<this.widthPassResultSize;f+=this.originalWidthMultipliedByChannels,h+=this.targetWidthMultipliedByChannels)n[h]=t[f],n[h+1]=t[f+1],n[h+2]=t[f+2],e&&(n[h+3]=t[f+3]);for(s-=1/3,o=this.widthOriginal-1;s<o;a+=r,s+=i)for(l=s%1,u=1-l,h=a,f=Math.floor(s)*r;h<this.widthPassResultSize;f+=this.originalWidthMultipliedByChannels,h+=this.targetWidthMultipliedByChannels)n[h+0]=t[f+0]*u+t[f+r+0]*l,n[h+1]=t[f+1]*u+t[f+r+1]*l,n[h+2]=t[f+2]*u+t[f+r+2]*l,e&&(n[h+3]=t[f+3]*u+t[f+r+3]*l);for(o=this.originalWidthMultipliedByChannels-r;a<this.targetWidthMultipliedByChannels;a+=r)for(h=a,f=o;h<this.widthPassResultSize;f+=this.originalWidthMultipliedByChannels,h+=this.targetWidthMultipliedByChannels)n[h]=t[f],n[h+1]=t[f+1],n[h+2]=t[f+2],e&&(n[h+3]=t[f+3]);return n},tr.prototype._resizeWidthRGBChannels=function(t,e){const r=e?4:3,i=this.ratioWeightWidthPass,n=1/i,a=this.originalWidthMultipliedByChannels-r+1,o=this.targetWidthMultipliedByChannels-r+1,s=this.outputWidthWorkBench,h=this.widthBuffer,f=this.outputWidthWorkBenchOpaquePixelsCount;let u=0,l=0,c=0,d=0,p=0,m=0,g=0,b=1,_=0,y=0,w=0,v=0;do{for(p=0;p<this.originalHeightMultipliedByChannels;)s[p++]=0,s[p++]=0,s[p++]=0,e&&(s[p++]=0,f[p/r-1]=0);u=i;do{for(l=1+c-d,b=Math.min(u,l),p=0,m=c;p<this.originalHeightMultipliedByChannels;m+=a)_=t[m],y=t[++m],w=t[++m],v=e?t[++m]:255,s[p++]+=(v?_:0)*b,s[p++]+=(v?y:0)*b,s[p++]+=(v?w:0)*b,e&&(s[p++]+=v*b,f[p/r-1]+=v?b:0);if(!(u>=l)){d+=u;break}c+=r,d=c,u-=l}while(u>0&&c<this.originalWidthMultipliedByChannels);for(p=0,m=g;p<this.originalHeightMultipliedByChannels;m+=o)u=e?f[p/r]:1,b=e?u?1/u:0:n,h[m]=s[p++]*b,h[++m]=s[p++]*b,h[++m]=s[p++]*b,e&&(h[++m]=s[p++]*n);g+=r}while(g<this.targetWidthMultipliedByChannels);return h},tr.prototype._resizeHeightRGBChannels=function(t,e){const r=this.ratioWeightHeightPass,i=1/r,n=this.outputHeightWorkBench,a=this.heightBuffer,o=this.outputHeightWorkBenchOpaquePixelsCount;let s=0,h=0,f=0,u=0,l=0,c=0,d=0,p=1,m=0,g=0,b=0,_=0;do{for(l=0;l<this.targetWidthMultipliedByChannels;)n[l++]=0,n[l++]=0,n[l++]=0,e&&(n[l++]=0,o[l/4-1]=0);s=r;do{for(h=1+f-u,p=Math.min(s,h),d=f,l=0;l<this.targetWidthMultipliedByChannels;)m=t[d++],g=t[d++],b=t[d++],_=e?t[d++]:255,n[l++]+=(_?m:0)*p,n[l++]+=(_?g:0)*p,n[l++]+=(_?b:0)*p,e&&(n[l++]+=_*p,o[l/4-1]+=_?p:0);if(!(s>=h)){u+=s;break}f=d,u=f,s-=h}while(s>0&&f<this.widthPassResultSize);for(l=0;l<this.targetWidthMultipliedByChannels;)s=e?o[l/4]:1,p=e?s?1/s:0:i,a[c++]=Math.round(n[l++]*p),a[c++]=Math.round(n[l++]*p),a[c++]=Math.round(n[l++]*p),e&&(a[c++]=Math.round(n[l++]*i))}while(c<this.finalResultSize);return a},tr.prototype.resizeWidthInterpolatedRGB=function(t){return this._resizeWidthInterpolatedRGBChannels(t,!1)},tr.prototype.resizeWidthInterpolatedRGBA=function(t){return this._resizeWidthInterpolatedRGBChannels(t,!0)},tr.prototype.resizeWidthRGB=function(t){return this._resizeWidthRGBChannels(t,!1)},tr.prototype.resizeWidthRGBA=function(t){return this._resizeWidthRGBChannels(t,!0)},tr.prototype.resizeHeightInterpolated=function(t){const e=this.ratioWeightHeightPass,r=this.heightBuffer;let i,n=0,a=0,o=0,s=0,h=0,f=0,u=0;for(;n<1/3;n+=e)for(o=0;o<this.targetWidthMultipliedByChannels;)r[a++]=Math.round(t[o++]);for(n-=1/3,i=this.heightOriginal-1;n<i;n+=e)for(u=n%1,f=1-u,s=Math.floor(n)*this.targetWidthMultipliedByChannels,h=s+this.targetWidthMultipliedByChannels,o=0;o<this.targetWidthMultipliedByChannels;++o)r[a++]=Math.round(t[s++]*f+t[h++]*u);for(;a<this.finalResultSize;)for(o=0,s=i*this.targetWidthMultipliedByChannels;o<this.targetWidthMultipliedByChannels;++o)r[a++]=Math.round(t[s++]);return r},tr.prototype.resizeHeightRGB=function(t){return this._resizeHeightRGBChannels(t,!1)},tr.prototype.resizeHeightRGBA=function(t){return this._resizeHeightRGBChannels(t,!0)},tr.prototype.resize=function(t){this.resizeCallback(this.resizeHeight(this.resizeWidth(t)))},tr.prototype.bypassResizer=function(t){return t},tr.prototype.initializeFirstPassBuffers=function(t){this.widthBuffer=this.generateFloatBuffer(this.widthPassResultSize),t||(this.outputWidthWorkBench=this.generateFloatBuffer(this.originalHeightMultipliedByChannels),this.colorChannels>3&&(this.outputWidthWorkBenchOpaquePixelsCount=this.generateFloat64Buffer(this.heightOriginal)))},tr.prototype.initializeSecondPassBuffers=function(t){this.heightBuffer=this.generateUint8Buffer(this.finalResultSize),t||(this.outputHeightWorkBench=this.generateFloatBuffer(this.targetWidthMultipliedByChannels),this.colorChannels>3&&(this.outputHeightWorkBenchOpaquePixelsCount=this.generateFloat64Buffer(this.targetWidth)))},tr.prototype.generateFloatBuffer=function(t){try{return new Float32Array(t)}catch(t){return[]}},tr.prototype.generateFloat64Buffer=function(t){try{return new Float64Array(t)}catch(t){return[]}},tr.prototype.generateUint8Buffer=function(t){try{return new Uint8Array(t)}catch(t){return[]}};const er=tr;var rr=__nested_webpack_require_507823__(8834).lW;const ir={nearestNeighbor(t,e){const r=t.width,i=t.height,n=e.width,a=e.height,o=t.data,s=e.data;for(let t=0;t<a;t++)for(let e=0;e<n;e++){let h=4*(t*n+e),f=4*(Math.floor(t*i/a)*r+Math.floor(e*r/n));s[h++]=o[f++],s[h++]=o[f++],s[h++]=o[f++],s[h++]=o[f++]}},bilinearInterpolation(t,e){const r=t.width,i=t.height,n=e.width,a=e.height,o=t.data,s=e.data,h=function(t,e,r,i,n){return e===i?r:Math.round((t-e)*n+(i-t)*r)},f=function(t,e,i,n,a,f,u,l){let c=4*(u*r+n)+e,d=4*(u*r+a)+e;const p=h(i,n,o[c],a,o[d]);if(l===u)s[t+e]=p;else{c=4*(l*r+n)+e,d=4*(l*r+a)+e;const m=h(i,n,o[c],a,o[d]);s[t+e]=h(f,u,p,l,m)}};for(let t=0;t<a;t++)for(let e=0;e<n;e++){const o=4*(t*n+e),s=e*r/n,h=Math.floor(s),u=Math.min(Math.ceil(s),r-1),l=t*i/a,c=Math.floor(l),d=Math.min(Math.ceil(l),i-1);f(o,0,s,h,u,l,c,d),f(o,1,s,h,u,l,c,d),f(o,2,s,h,u,l,c,d),f(o,3,s,h,u,l,c,d)}},_interpolate2D(t,e,r,i){const n=t.data,a=e.data,o=t.width,s=t.height,h=e.width,f=e.height,u=Math.max(1,Math.floor(o/h)),l=h*u,c=Math.max(1,Math.floor(s/f)),d=f*c,p=rr.alloc(l*s*4);for(let t=0;t<s;t++)for(let e=0;e<l;e++){const r=e*(o-1)/l,a=Math.floor(r),s=r-a,h=4*(t*o+a),f=4*(t*l+e);for(let t=0;t<4;t++){const e=h+t,r=a>0?n[e-4]:2*n[e]-n[e+4],u=n[e],l=n[e+4],c=a<o-2?n[e+8]:2*n[e+4]-n[e];p[f+t]=i(r,u,l,c,s)}}const m=rr.alloc(l*d*4);for(let t=0;t<d;t++)for(let e=0;e<l;e++){const r=t*(s-1)/d,n=Math.floor(r),a=r-n,o=4*(n*l+e),h=4*(t*l+e);for(let t=0;t<4;t++){const e=o+t,r=n>0?p[e-4*l]:2*p[e]-p[e+4*l],f=p[e],u=p[e+4*l],c=n<s-2?p[e+8*l]:2*p[e+4*l]-p[e];m[h+t]=i(r,f,u,c,a)}}const g=u*c;if(g>1)for(let t=0;t<f;t++)for(let e=0;e<h;e++){let r=0,i=0,n=0,o=0,s=0;for(let a=0;a<c;a++){const h=t*c+a;for(let t=0;t<u;t++){const a=4*(h*l+(e*u+t)),f=m[a+3];f&&(r+=m[a],i+=m[a+1],n+=m[a+2],s++),o+=f}}const f=4*(t*h+e);a[f]=s?Math.round(r/s):0,a[f+1]=s?Math.round(i/s):0,a[f+2]=s?Math.round(n/s):0,a[f+3]=Math.round(o/g)}else e.data=m},bicubicInterpolation(t,e,r){return this._interpolate2D(t,e,r,(function(t,e,r,i,n){const a=i-r-t+e,o=t-e-a,s=r-t,h=e;return Math.max(0,Math.min(255,a*(n*n*n)+o*(n*n)+s*n+h))}))},hermiteInterpolation(t,e,r){return this._interpolate2D(t,e,r,(function(t,e,r,i,n){const a=e,o=.5*(r-t),s=t-2.5*e+2*r-.5*i,h=.5*(i-t)+1.5*(e-r);return Math.max(0,Math.min(255,Math.round(((h*n+s)*n+o)*n+a)))}))},bezierInterpolation(t,e,r){return this._interpolate2D(t,e,r,(function(t,e,r,i,n){const a=1-n,o=e*a*a*a,s=3*(e+(r-t)/4)*a*a*n,h=3*(r-(i-e)/4)*a*n*n,f=r*n*n*n;return Math.max(0,Math.min(255,Math.round(o+s+h+f)))}))}},nr=ir;var ar=__nested_webpack_require_507823__(8834).lW,or=__nested_webpack_require_507823__(8834).lW;function sr(t){if(Math.abs(t)%90!=0)throw new Error("Unsupported matrix rotation degree");if(t%=360,0===Math.abs(t))return;const e=this.bitmap.width,r=this.bitmap.height;let i;switch(t){case 90:case-270:i=90;break;case 180:case-180:i=180;break;case 270:case-90:i=-90;break;default:throw new Error("Unsupported matrix rotation degree")}const n=180===i?e:r,a=180===i?r:e,o=or.alloc(this.bitmap.data.length);function s(t,e){return function(e,r){return r*t+e<<2}}const h=s(e),f=s(n);for(let t=0;t<e;t++)for(let n=0;n<r;n++){const a=h(t,n),s=this.bitmap.data.readUInt32BE(a);let u;switch(i){case 90:u=f(n,e-t-1);break;case-90:u=f(r-n-1,t);break;case 180:u=f(e-t-1,r-n-1);break;default:throw new Error("Unsupported matrix rotation angle")}o.writeUInt32BE(s,u)}this.bitmap.data=o,this.bitmap.width=n,this.bitmap.height=a}function hr(t,e){const r=(t%=360)*Math.PI/180,i=Math.cos(r),n=Math.sin(r);let a=this.bitmap.width,o=this.bitmap.height;if(!0===e||"string"==typeof e){a=Math.ceil(Math.abs(this.bitmap.width*i)+Math.abs(this.bitmap.height*n))+1,o=Math.ceil(Math.abs(this.bitmap.width*n)+Math.abs(this.bitmap.height*i))+1,a%2!=0&&a++,o%2!=0&&o++;const t=this.cloneQuiet();this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,r){this.bitmap.data.writeUInt32BE(this._background,r)}));const r=Math.max(a,o,this.bitmap.width,this.bitmap.height);this.resize(r,r,e),this.blit(t,this.bitmap.width/2-t.bitmap.width/2,this.bitmap.height/2-t.bitmap.height/2)}const s=this.bitmap.width,h=this.bitmap.height,f=or.alloc(this.bitmap.data.length);function u(t,e){return function(r,i){return{x:r+t,y:i+e}}}const l=u(-s/2,-h/2),c=u(s/2+.5,h/2+.5);for(let t=1;t<=h;t++)for(let e=1;e<=s;e++){const r=l(e,t),a=c(i*r.x-n*r.y,i*r.y+n*r.x),o=s*(t-1)+e-1<<2;if(a.x>=0&&a.x<s&&a.y>=0&&a.y<h){const t=(s*(0|a.y)+a.x|0)<<2,e=this.bitmap.data.readUInt32BE(t);f.writeUInt32BE(e,o)}else f.writeUInt32BE(this._background,o)}if(this.bitmap.data=f,!0===e||"string"==typeof e){const t=s/2-a/2,e=h/2-o/2;this.crop(t,e,a,o)}}const fr=[()=>({blit(t,e,r,i,n,a,o,s){if(!(t instanceof this.constructor))return f.call(this,"The source must be a Jimp image",s);if("number"!=typeof e||"number"!=typeof r)return f.call(this,"x and y must be numbers",s);if("function"==typeof i)s=i,i=0,n=0,a=t.bitmap.width,o=t.bitmap.height;else{if(typeof i!=typeof n||typeof n!=typeof a||typeof a!=typeof o)return f.call(this,"srcx, srcy, srcw, srch must be numbers",s);i=i||0,n=n||0,a=a||t.bitmap.width,o=o||t.bitmap.height}e=Math.round(e),r=Math.round(r),i=Math.round(i),n=Math.round(n),a=Math.round(a),o=Math.round(o);const u=this.bitmap.width,l=this.bitmap.height,c=this;return t.scanQuiet(i,n,a,o,(function(t,a,o){const s=e+t-i,h=r+a-n;if(s>=0&&h>=0&&u-s>0&&l-h>0){const t=c.getPixelIndex(s,h),e={r:this.bitmap.data[o],g:this.bitmap.data[o+1],b:this.bitmap.data[o+2],a:this.bitmap.data[o+3]},r={r:c.bitmap.data[t],g:c.bitmap.data[t+1],b:c.bitmap.data[t+2],a:c.bitmap.data[t+3]};c.bitmap.data[t]=(e.a*(e.r-r.r)-r.r+255>>8)+r.r,c.bitmap.data[t+1]=(e.a*(e.g-r.g)-r.g+255>>8)+r.g,c.bitmap.data[t+2]=(e.a*(e.b-r.b)-r.b+255>>8)+r.b,c.bitmap.data[t+3]=this.constructor.limit255(r.a+e.a)}})),h(s)&&s.call(this,null,this),this}}),()=>({blur(t,e){if("number"!=typeof t)return f.call(this,"r must be a number",e);if(t<1)return f.call(this,"r must be greater than 0",e);let r,i,n,a,o,s,u,l,c,d,p,m,g,b;const _=this.bitmap.width-1,y=this.bitmap.height-1,w=t+1,v=Re[t],x=Pe[t],E=[],k=[],S=[],M=[],A=[],I=[];let T=2;for(;T-- >0;){for(m=0,g=0,s=0;s<this.bitmap.height;s++){for(r=this.bitmap.data[g]*w,i=this.bitmap.data[g+1]*w,n=this.bitmap.data[g+2]*w,a=this.bitmap.data[g+3]*w,u=1;u<=t;u++)l=g+((u>_?_:u)<<2),r+=this.bitmap.data[l++],i+=this.bitmap.data[l++],n+=this.bitmap.data[l++],a+=this.bitmap.data[l];for(o=0;o<this.bitmap.width;o++)E[m]=r,k[m]=i,S[m]=n,M[m]=a,0===s&&(A[o]=((l=o+w)<_?l:_)<<2,I[o]=(l=o-t)>0?l<<2:0),c=g+A[o],d=g+I[o],r+=this.bitmap.data[c++]-this.bitmap.data[d++],i+=this.bitmap.data[c++]-this.bitmap.data[d++],n+=this.bitmap.data[c++]-this.bitmap.data[d++],a+=this.bitmap.data[c]-this.bitmap.data[d],m++;g+=this.bitmap.width<<2}for(o=0;o<this.bitmap.width;o++){for(p=o,r=E[p]*w,i=k[p]*w,n=S[p]*w,a=M[p]*w,u=1;u<=t;u++)p+=u>y?0:this.bitmap.width,r+=E[p],i+=k[p],n+=S[p],a+=M[p];for(m=o<<2,s=0;s<this.bitmap.height;s++)b=a*v>>>x,this.bitmap.data[m+3]=b,b>255&&(this.bitmap.data[m+3]=255),b>0?(b=255/b,this.bitmap.data[m]=(r*v>>>x)*b,this.bitmap.data[m+1]=(i*v>>>x)*b,this.bitmap.data[m+2]=(n*v>>>x)*b):(this.bitmap.data[m+2]=0,this.bitmap.data[m+1]=0,this.bitmap.data[m]=0),0===o&&(A[s]=((l=s+w)<y?l:y)*this.bitmap.width,I[s]=(l=s-t)>0?l*this.bitmap.width:0),c=o+A[s],d=o+I[s],r+=E[c]-E[d],i+=k[c]-k[d],n+=S[c]-S[d],a+=M[c]-M[d],m+=this.bitmap.width<<2}}return h(e)&&e.call(this,null,this),this}}),()=>({circle(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;"function"==typeof t&&(e=t,t={});const r=t.radius||(this.bitmap.width>this.bitmap.height?this.bitmap.height:this.bitmap.width)/2,i="number"==typeof t.x?t.x:this.bitmap.width/2,n="number"==typeof t.y?t.y:this.bitmap.height/2;return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,a){const o=Math.sqrt(Math.pow(t-i,2)+Math.pow(e-n,2));r-o<=0?this.bitmap.data[a+3]=0:r-o<1&&(this.bitmap.data[a+3]=255*(r-o))})),h(e)&&e.call(this,null,this),this}}),()=>({brightness(t,e){return"number"!=typeof t?f.call(this,"val must be numbers",e):t<-1||t>1?f.call(this,"val must be a number between -1 and +1",e):(this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(e,r,i){t<0?(this.bitmap.data[i]*=1+t,this.bitmap.data[i+1]*=1+t,this.bitmap.data[i+2]*=1+t):(this.bitmap.data[i]+=(255-this.bitmap.data[i])*t,this.bitmap.data[i+1]+=(255-this.bitmap.data[i+1])*t,this.bitmap.data[i+2]+=(255-this.bitmap.data[i+2])*t)})),h(e)&&e.call(this,null,this),this)},contrast(t,e){if("number"!=typeof t)return f.call(this,"val must be numbers",e);if(t<-1||t>1)return f.call(this,"val must be a number between -1 and +1",e);const r=(t+1)/(1-t);function i(t){return(t=Math.floor(r*(t-127)+127))<0?0:t>255?255:t}return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,r){this.bitmap.data[r]=i(this.bitmap.data[r]),this.bitmap.data[r+1]=i(this.bitmap.data[r+1]),this.bitmap.data[r+2]=i(this.bitmap.data[r+2])})),h(e)&&e.call(this,null,this),this},posterize(t,e){return"number"!=typeof t?f.call(this,"n must be numbers",e):(t<2&&(t=2),this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(e,r,i){this.bitmap.data[i]=Math.floor(this.bitmap.data[i]/255*(t-1))/(t-1)*255,this.bitmap.data[i+1]=Math.floor(this.bitmap.data[i+1]/255*(t-1))/(t-1)*255,this.bitmap.data[i+2]=Math.floor(this.bitmap.data[i+2]/255*(t-1))/(t-1)*255})),h(e)&&e.call(this,null,this),this)},greyscale:Ue,grayscale:Ue,opacity(t,e){return"number"!=typeof t?f.call(this,"f must be a number",e):t<0||t>1?f.call(this,"f must be a number from 0 to 1",e):(this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(e,r,i){const n=this.bitmap.data[i+3]*t;this.bitmap.data[i+3]=n})),h(e)&&e.call(this,null,this),this)},sepia(t){return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,r){let i=this.bitmap.data[r],n=this.bitmap.data[r+1],a=this.bitmap.data[r+2];i=.393*i+.769*n+.189*a,n=.349*i+.686*n+.168*a,a=.272*i+.534*n+.131*a,this.bitmap.data[r]=i<255?i:255,this.bitmap.data[r+1]=n<255?n:255,this.bitmap.data[r+2]=a<255?a:255})),h(t)&&t.call(this,null,this),this},fade(t,e){return"number"!=typeof t?f.call(this,"f must be a number",e):t<0||t>1?f.call(this,"f must be a number from 0 to 1",e):(this.opacity(1-t),h(e)&&e.call(this,null,this),this)},convolution(t,e,r){"function"==typeof e&&void 0===r&&(r=e,e=null),e||(e=this.constructor.EDGE_EXTEND);const i=Oe.from(this.bitmap.data),n=t.length,a=t[0].length,o=Math.floor(n/2),s=Math.floor(a/2),f=-o,u=-s;let l,c,d,p,m,g,b,_,y,w;return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(r,n,a){p=0,d=0,c=0;for(let i=f;i<=o;i++)for(let a=u;a<=s;a++)_=r+a,y=n+i,l=t[i+o][a+s],w=this.getPixelIndex(_,y,e),-1===w?(b=0,g=0,m=0):(m=this.bitmap.data[w+0],g=this.bitmap.data[w+1],b=this.bitmap.data[w+2]),c+=l*m,d+=l*g,p+=l*b;c<0&&(c=0),d<0&&(d=0),p<0&&(p=0),c>255&&(c=255),d>255&&(d=255),p>255&&(p=255),i[a+0]=c,i[a+1]=d,i[a+2]=p})),this.bitmap.data=i,h(r)&&r.call(this,null,this),this},opaque(t){return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,r){this.bitmap.data[r+3]=255})),h(t)&&t.call(this,null,this),this},pixelate(t,e,r,i,n,a){if("function"==typeof e)a=e,n=null,i=null,r=null,e=null;else{if("number"!=typeof t)return f.call(this,"size must be a number",a);if(Ce(e)&&"number"!=typeof e)return f.call(this,"x must be a number",a);if(Ce(r)&&"number"!=typeof r)return f.call(this,"y must be a number",a);if(Ce(i)&&"number"!=typeof i)return f.call(this,"w must be a number",a);if(Ce(n)&&"number"!=typeof n)return f.call(this,"h must be a number",a)}const o=[[1/16,2/16,1/16],[2/16,.25,2/16],[1/16,2/16,1/16]];e=e||0,r=r||0,i=Ce(i)?i:this.bitmap.width-e,n=Ce(n)?n:this.bitmap.height-r;const s=this.cloneQuiet();return this.scanQuiet(e,r,i,n,(function(e,r,i){e=t*Math.floor(e/t),r=t*Math.floor(r/t);const n=Le(s,o,e,r);this.bitmap.data[i]=n[0],this.bitmap.data[i+1]=n[1],this.bitmap.data[i+2]=n[2]})),h(a)&&a.call(this,null,this),this},convolute(t,e,r,i,n,a){if(!Array.isArray(t))return f.call(this,"the kernel must be an array",a);if("function"==typeof e)a=e,e=null,r=null,i=null,n=null;else{if(Ce(e)&&"number"!=typeof e)return f.call(this,"x must be a number",a);if(Ce(r)&&"number"!=typeof r)return f.call(this,"y must be a number",a);if(Ce(i)&&"number"!=typeof i)return f.call(this,"w must be a number",a);if(Ce(n)&&"number"!=typeof n)return f.call(this,"h must be a number",a)}const o=(t.length-1)/2;e=Ce(e)?e:o,r=Ce(r)?r:o,i=Ce(i)?i:this.bitmap.width-e,n=Ce(n)?n:this.bitmap.height-r;const s=this.cloneQuiet();return this.scanQuiet(e,r,i,n,(function(e,r,i){const n=Le(s,t,e,r);this.bitmap.data[i]=this.constructor.limit255(n[0]),this.bitmap.data[i+1]=this.constructor.limit255(n[1]),this.bitmap.data[i+2]=this.constructor.limit255(n[2])})),h(a)&&a.call(this,null,this),this},color:ze,colour:ze}),()=>({contain(t,e,r,i,n){if("number"!=typeof t||"number"!=typeof e)return f.call(this,"w and h must be numbers",n);"string"==typeof r&&("function"==typeof i&&void 0===n&&(n=i),i=r,r=null),"function"==typeof r&&(void 0===n&&(n=r),i=null,r=null),"function"==typeof i&&void 0===n&&(n=i,i=null);const a=7&(r=r||this.constructor.HORIZONTAL_ALIGN_CENTER|this.constructor.VERTICAL_ALIGN_MIDDLE),o=r>>3;if((0===a||a&a-1)&&(0===o||o&o-1))return f.call(this,"only use one flag per alignment direction",n);const s=a>>1,u=o>>1,l=t/e>this.bitmap.width/this.bitmap.height?e/this.bitmap.height:t/this.bitmap.width,c=this.cloneQuiet().scale(l,i);return this.resize(t,e,i),this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,r){this.bitmap.data.writeUInt32BE(this._background,r)})),this.blit(c,(this.bitmap.width-c.bitmap.width)/2*s,(this.bitmap.height-c.bitmap.height)/2*u),h(n)&&n.call(this,null,this),this}}),()=>({cover(t,e,r,i,n){if("number"!=typeof t||"number"!=typeof e)return f.call(this,"w and h must be numbers",n);r&&"function"==typeof r&&void 0===n?(n=r,r=null,i=null):"function"==typeof i&&void 0===n&&(n=i,i=null);const a=7&(r=r||this.constructor.HORIZONTAL_ALIGN_CENTER|this.constructor.VERTICAL_ALIGN_MIDDLE),o=r>>3;if((0===a||a&a-1)&&(0===o||o&o-1))return f.call(this,"only use one flag per alignment direction",n);const s=a>>1,u=o>>1,l=t/e>this.bitmap.width/this.bitmap.height?t/this.bitmap.width:e/this.bitmap.height;return this.scale(l,i),this.crop((this.bitmap.width-t)/2*s,(this.bitmap.height-e)/2*u,t,e),h(n)&&n.call(this,null,this),this}}),function(t){return t("crop",(function(t,e,r,i,n){if("number"!=typeof t||"number"!=typeof e)return f.call(this,"x and y must be numbers",n);if("number"!=typeof r||"number"!=typeof i)return f.call(this,"w and h must be numbers",n);if(t=Math.round(t),e=Math.round(e),r=Math.round(r),i=Math.round(i),0===t&&r===this.bitmap.width){const n=r*e+t<<2,a=n+(i*r<<2);this.bitmap.data=this.bitmap.data.slice(n,a)}else{const n=Ne.allocUnsafe(r*i*4);let a=0;this.scanQuiet(t,e,r,i,(function(t,e,r){const i=this.bitmap.data.readUInt32BE(r,!0);n.writeUInt32BE(i,a,!0),a+=4})),this.bitmap.data=n}return this.bitmap.width=r,this.bitmap.height=i,h(n)&&n.call(this,null,this),this})),{class:{autocrop(){const t=this.bitmap.width,e=this.bitmap.height;let r,i=0,n=2e-4,a=!0,o=!1,s={north:!1,south:!1,east:!1,west:!1};for(var f=arguments.length,u=new Array(f),l=0;l<f;l++)u[l]=arguments[l];for(let t=0,e=u.length;t<e;t++)if("number"==typeof u[t]&&(n=u[t]),"boolean"==typeof u[t]&&(a=u[t]),"function"==typeof u[t]&&(r=u[t]),"object"==typeof u[t]){const e=u[t];void 0!==e.tolerance&&({tolerance:n}=e),void 0!==e.cropOnlyFrames&&({cropOnlyFrames:a}=e),void 0!==e.cropSymmetric&&({cropSymmetric:o}=e),void 0!==e.leaveBorder&&({leaveBorder:i}=e),void 0!==e.ignoreSides&&({ignoreSides:s}=e)}let c=this.getPixelColor(0,0);const d=this.constructor.intToRGBA(c);let p=0,m=0,g=0,b=0;if(c=this.getPixelColor(0,0),!s.north)t:for(let r=0;r<e-1;r++){for(let e=0;e<t;e++){const t=this.getPixelColor(e,r),i=this.constructor.intToRGBA(t);if(this.constructor.colorDiff(d,i)>n)break t}p++}if(c=this.getPixelColor(t,0),!s.east)t:for(let r=0;r<t-1;r++){for(let t=0+p;t<e;t++){const e=this.getPixelColor(r,t),i=this.constructor.intToRGBA(e);if(this.constructor.colorDiff(d,i)>n)break t}m++}if(c=this.getPixelColor(0,e),!s.south)t:for(let r=e-1;r>=p+1;r--){for(let e=t-m-1;e>=0;e--){const t=this.getPixelColor(e,r),i=this.constructor.intToRGBA(t);if(this.constructor.colorDiff(d,i)>n)break t}g++}if(c=this.getPixelColor(t,e),!s.west)t:for(let r=t-1;r>=0+m+1;r--){for(let t=e-1;t>=0+p;t--){const e=this.getPixelColor(r,t),i=this.constructor.intToRGBA(e);if(this.constructor.colorDiff(d,i)>n)break t}b++}let _=!1;if(b-=i,m-=i,p-=i,g-=i,o){const t=Math.min(m,b),e=Math.min(p,g);b=t,m=t,p=e,g=e}b=b>=0?b:0,m=m>=0?m:0,p=p>=0?p:0,g=g>=0?g:0;const y=t-(b+m),w=e-(g+p);return _=a?0!==m&&0!==p&&0!==b&&0!==g:0!==m||0!==p||0!==b||0!==g,_&&this.crop(m,p,y,w),h(r)&&r.call(this,null,this),this}}}},()=>({displace(t,e,r){if("object"!=typeof t||t.constructor!==this.constructor)return f.call(this,"The source must be a Jimp image",r);if("number"!=typeof e)return f.call(this,"factor must be a number",r);const i=this.cloneQuiet();return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(r,n,a){let o=t.bitmap.data[a]/256*e;o=Math.round(o);const s=this.getPixelIndex(r+o,n);this.bitmap.data[s]=i.bitmap.data[a],this.bitmap.data[s+1]=i.bitmap.data[a+1],this.bitmap.data[s+2]=i.bitmap.data[a+2]})),h(r)&&r.call(this,null,this),this}}),()=>({dither565:Fe,dither16:Fe}),()=>({fisheye(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{r:2.5},e=arguments.length>1?arguments[1]:void 0;"function"==typeof t&&(e=t,t={r:2.5});const r=this.cloneQuiet(),{width:i,height:n}=r.bitmap;return r.scanQuiet(0,0,i,n,((e,a)=>{const o=e/i,s=a/n,h=Math.sqrt(Math.pow(o-.5,2)+Math.pow(s-.5,2)),f=2*Math.pow(h,t.r),u=(o-.5)/h,l=(s-.5)/h,c=Math.round((f*u+.5)*i),d=Math.round((f*l+.5)*n),p=r.getPixelColor(c,d);this.setPixelColor(p,e,a)})),this.setPixelColor(r.getPixelColor(i/2,n/2),i/2,n/2),h(e)&&e.call(this,null,this),this}}),()=>({flip:Ge,mirror:Ge}),()=>({gaussian(t,e){if("number"!=typeof t)return f.call(this,"r must be a number",e);if(t<1)return f.call(this,"r must be greater than 0",e);const r=Math.ceil(2.57*t),i=2*r+1,n=t*t*2,a=n*Math.PI,o=[];for(let t=0;t<i;t++){o[t]=[];for(let e=0;e<i;e++){const i=(e-r)**2+(t-r)**2;o[t][e]=Math.exp(-i/n)/a}}for(let t=0;t<this.bitmap.height;t++)for(let e=0;e<this.bitmap.width;e++){let n=0,a=0,s=0,h=0,f=0;for(let u=0;u<i;u++){for(let l=0;l<i;l++){const i=Math.min(this.bitmap.width-1,Math.max(0,l+e-r)),c=Math.min(this.bitmap.height-1,Math.max(0,u+t-r)),d=o[u][l],p=c*this.bitmap.width+i<<2;n+=this.bitmap.data[p]*d,a+=this.bitmap.data[p+1]*d,s+=this.bitmap.data[p+2]*d,h+=this.bitmap.data[p+3]*d,f+=d}const l=t*this.bitmap.width+e<<2;this.bitmap.data[l]=Math.round(n/f),this.bitmap.data[l+1]=Math.round(a/f),this.bitmap.data[l+2]=Math.round(s/f),this.bitmap.data[l+3]=Math.round(h/f)}}return h(e)&&e.call(this,null,this),this}}),()=>({invert(t){return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,r){this.bitmap.data[r]=255-this.bitmap.data[r],this.bitmap.data[r+1]=255-this.bitmap.data[r+1],this.bitmap.data[r+2]=255-this.bitmap.data[r+2]})),h(t)&&t.call(this,null,this),this}}),()=>({mask(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3?arguments[3]:void 0;if(!(t instanceof this.constructor))return f.call(this,"The source must be a Jimp image",i);if("number"!=typeof e||"number"!=typeof r)return f.call(this,"x and y must be numbers",i);e=Math.round(e),r=Math.round(r);const n=this.bitmap.width,a=this.bitmap.height,o=this;return t.scanQuiet(0,0,t.bitmap.width,t.bitmap.height,(function(t,i,s){const h=e+t,f=r+i;if(h>=0&&f>=0&&h<n&&f<a){const t=o.getPixelIndex(h,f),{data:e}=this.bitmap,r=(e[s+0]+e[s+1]+e[s+2])/3;o.bitmap.data[t+3]*=r/255}})),h(i)&&i.call(this,null,this),this}}),()=>({normalize(t){const e=He.call(this),r={r:qe(e.r),g:qe(e.g),b:qe(e.b)};return this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,(function(t,e,i){const n=this.bitmap.data[i+0],a=this.bitmap.data[i+1],o=this.bitmap.data[i+2];this.bitmap.data[i+0]=We(n,r.r[0],r.r[1]),this.bitmap.data[i+1]=We(a,r.g[0],r.g[1]),this.bitmap.data[i+2]=We(o,r.b[0],r.b[1])})),h(t)&&t.call(this,null,this),this}}),()=>({constants:{measureText:Ve,measureTextHeight:Qe,FONT_SANS_8_BLACK:a().join($e,"fonts/open-sans/open-sans-8-black/open-sans-8-black.fnt"),FONT_SANS_10_BLACK:a().join($e,"fonts/open-sans/open-sans-10-black/open-sans-10-black.fnt"),FONT_SANS_12_BLACK:a().join($e,"fonts/open-sans/open-sans-12-black/open-sans-12-black.fnt"),FONT_SANS_14_BLACK:a().join($e,"fonts/open-sans/open-sans-14-black/open-sans-14-black.fnt"),FONT_SANS_16_BLACK:a().join($e,"fonts/open-sans/open-sans-16-black/open-sans-16-black.fnt"),FONT_SANS_32_BLACK:a().join($e,"fonts/open-sans/open-sans-32-black/open-sans-32-black.fnt"),FONT_SANS_64_BLACK:a().join($e,"fonts/open-sans/open-sans-64-black/open-sans-64-black.fnt"),FONT_SANS_128_BLACK:a().join($e,"fonts/open-sans/open-sans-128-black/open-sans-128-black.fnt"),FONT_SANS_8_WHITE:a().join($e,"fonts/open-sans/open-sans-8-white/open-sans-8-white.fnt"),FONT_SANS_16_WHITE:a().join($e,"fonts/open-sans/open-sans-16-white/open-sans-16-white.fnt"),FONT_SANS_32_WHITE:a().join($e,"fonts/open-sans/open-sans-32-white/open-sans-32-white.fnt"),FONT_SANS_64_WHITE:a().join($e,"fonts/open-sans/open-sans-64-white/open-sans-64-white.fnt"),FONT_SANS_128_WHITE:a().join($e,"fonts/open-sans/open-sans-128-white/open-sans-128-white.fnt"),loadFont(t,e){return"string"!=typeof t?f.call(this,"file must be a string",e):new Promise(((r,i)=>{e=e||function(t,e){t?i(t):r(e)},Ye()(t,((r,i)=>{const n={},o={};if(r)return f.call(this,r,e);for(let t=0;t<i.chars.length;t++)n[String.fromCharCode(i.chars[t].id)]=i.chars[t];for(let t=0;t<i.kernings.length;t++){const e=String.fromCharCode(i.kernings[t].first);o[e]=o[e]||{},o[e][String.fromCharCode(i.kernings[t].second)]=i.kernings[t].amount}(function(t,e,r){const i=r.map((r=>t.read(e+"/"+r)));return Promise.all(i)})(this,a().dirname(t),i.pages).then((t=>{e(null,{chars:n,kernings:o,pages:t,common:i.common,info:i.info})}))}))}))}},class:{print(t,e,r,i,n,a,o){if("function"==typeof n&&void 0===o&&(o=n,n=1/0),void 0===n&&(n=1/0),"function"==typeof a&&void 0===o&&(o=a,a=1/0),void 0===a&&(a=1/0),"object"!=typeof t)return f.call(this,"font must be a Jimp loadFont",o);if("number"!=typeof e||"number"!=typeof r||"number"!=typeof n)return f.call(this,"x, y and maxWidth must be numbers",o);if("number"!=typeof n)return f.call(this,"maxWidth must be a number",o);if("number"!=typeof a)return f.call(this,"maxHeight must be a number",o);let s,u;"object"==typeof i&&null!==i.text&&void 0!==i.text?(s=i.alignmentX||this.constructor.HORIZONTAL_ALIGN_LEFT,u=i.alignmentY||this.constructor.VERTICAL_ALIGN_TOP,({text:i}=i)):(s=this.constructor.HORIZONTAL_ALIGN_LEFT,u=this.constructor.VERTICAL_ALIGN_TOP,i=i.toString()),a!==1/0&&u===this.constructor.VERTICAL_ALIGN_BOTTOM?r+=a-Qe(t,i,n):a!==1/0&&u===this.constructor.VERTICAL_ALIGN_MIDDLE&&(r+=a/2-Qe(t,i,n)/2);const l=Object.entries(t.chars)[0][1].xadvance,{lines:c,longestLine:d}=Xe(t,i,n);return c.forEach((i=>{const a=i.join(" "),o=function(t,e,r,i,n){return n===t.HORIZONTAL_ALIGN_LEFT?0:n===t.HORIZONTAL_ALIGN_CENTER?(i-Ve(e,r))/2:i-Ve(e,r)}(this.constructor,t,a,n,s);Ke.call(this,t,e+o,r,a,l),r+=t.common.lineHeight})),h(o)&&o.call(this,null,this,{x:e+d,y:r}),this}}}),()=>({constants:{RESIZE_NEAREST_NEIGHBOR:"nearestNeighbor",RESIZE_BILINEAR:"bilinearInterpolation",RESIZE_BICUBIC:"bicubicInterpolation",RESIZE_HERMITE:"hermiteInterpolation",RESIZE_BEZIER:"bezierInterpolation"},class:{resize(t,e,r,i){if("number"!=typeof t||"number"!=typeof e)return f.call(this,"w and h must be numbers",i);if("function"==typeof r&&void 0===i&&(i=r,r=null),t===this.constructor.AUTO&&e===this.constructor.AUTO)return f.call(this,"w and h cannot both be set to auto",i);if(t===this.constructor.AUTO&&(t=this.bitmap.width*(e/this.bitmap.height)),e===this.constructor.AUTO&&(e=this.bitmap.height*(t/this.bitmap.width)),t<0||e<0)return f.call(this,"w and h must be positive numbers",i);if(t=Math.round(t)||1,e=Math.round(e)||1,"function"==typeof nr[r]){const i={data:ar.alloc(t*e*4),width:t,height:e};nr[r](this.bitmap,i),this.bitmap=i}else{const r=this;new er(this.bitmap.width,this.bitmap.height,t,e,!0,!0,(i=>{r.bitmap.data=ar.from(i),r.bitmap.width=t,r.bitmap.height=e})).resize(this.bitmap.data)}return h(i)&&i.call(this,null,this),this}}}),()=>({rotate(t,e,r){return null==e&&(e=!0),"function"==typeof e&&void 0===r&&(r=e,e=!0),"number"!=typeof t?f.call(this,"deg must be a number",r):"boolean"!=typeof e&&"string"!=typeof e?f.call(this,"mode must be a boolean or a string",r):(0===Math.abs(t%90)?sr.call(this,t):hr.call(this,t,e,r),h(r)&&r.call(this,null,this),this)}}),()=>({scale(t,e,r){if("number"!=typeof t)return f.call(this,"f must be a number",r);if(t<0)return f.call(this,"f must be a positive number",r);"function"==typeof e&&void 0===r&&(r=e,e=null);const i=this.bitmap.width*t,n=this.bitmap.height*t;return this.resize(i,n,e),h(r)&&r.call(this,null,this),this},scaleToFit(t,e,r,i){if("number"!=typeof t||"number"!=typeof e)return f.call(this,"w and h must be numbers",i);"function"==typeof r&&void 0===i&&(i=r,r=null);const n=t/e>this.bitmap.width/this.bitmap.height?e/this.bitmap.height:t/this.bitmap.width;return this.scale(n,r),h(i)&&i.call(this,null,this),this}}),()=>({shadow(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;"function"==typeof t&&(e=t,t={});const{opacity:r=.7,size:i=1.1,x:n=-25,y:a=25,blur:o=5}=t,s=this.clone(),f=this.clone();return f.scan(0,0,f.bitmap.width,f.bitmap.height,((t,e,i)=>{f.bitmap.data[i]=0,f.bitmap.data[i+1]=0,f.bitmap.data[i+2]=0,f.bitmap.data[i+3]=f.constructor.limit255(f.bitmap.data[i+3]*r),this.bitmap.data[i]=0,this.bitmap.data[i+1]=0,this.bitmap.data[i+2]=0,this.bitmap.data[i+3]=0})),f.resize(f.bitmap.width*i,f.bitmap.height*i).blur(o),this.composite(f,n,a),this.composite(s,0,0),h(e)&&e.call(this,null,this),this}}),()=>({threshold(t,e){let{max:r,replace:i=255,autoGreyscale:n=!0}=t;return"number"!=typeof r?f.call(this,"max must be a number",e):"number"!=typeof i?f.call(this,"replace must be a number",e):"boolean"!=typeof n?f.call(this,"autoGreyscale must be a boolean",e):(r=this.constructor.limit255(r),i=this.constructor.limit255(i),n&&this.greyscale(),this.scanQuiet(0,0,this.bitmap.width,this.bitmap.height,((t,e,n)=>{const a=this.bitmap.data[n]<r?this.bitmap.data[n]:i;this.bitmap.data[n]=a,this.bitmap.data[n+1]=a,this.bitmap.data[n+2]=a})),h(e)&&e.call(this,null,this),this)}})];!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he;const r={hasAlpha:{},encoders:{},decoders:{},class:{},constants:{}};function i(t){Object.entries(t).forEach((t=>{let[e,i]=t;r[e]={...r[e],...i}}))}t.types&&(t.types.forEach((function(t){const e=t();Array.isArray(e.mime)?Dt(...e.mime):Object.entries(e.mime).forEach((t=>Dt(...t))),delete e.mime,i(e)})),e.decoders={...e.decoders,...r.decoders},e.encoders={...e.encoders,...r.encoders},e.hasAlpha={...e.hasAlpha,...r.hasAlpha}),t.plugins&&t.plugins.forEach((function(t){const e=t(se)||{};e.class||e.constants?i(e):i({class:e})})),ae(r.class,e),ne(r.constants,e)}({types:[()=>(0,fe.Ee)(de(),ge(),{mime:{[ye]:["bmp"]},constants:{MIME_BMP:ye,MIME_X_MS_BMP:we},decoders:{[ye]:ve,[we]:ve},encoders:{[ye]:xe,[we]:xe}},{mime:{[Me]:["tiff","tif"]},constants:{MIME_TIFF:Me},decoders:{[Me]:t=>{const e=ke().decode(t),r=e[0];e.forEach((e=>{ke().decodeImage(t,e)}));const i=ke().toRGBA8(r);return{data:Se.from(i),width:r.t256[0],height:r.t257[0]}}},encoders:{[Me]:t=>{const e=ke().encodeImage(t.bitmap.data,t.bitmap.width,t.bitmap.height);return Se.from(e)}}},{mime:{[Be]:["gif"]},constants:{MIME_GIF:Be},decoders:{[Be]:t=>{const e=new Ae.N(t),r=Te.alloc(e.width*e.height*4);return e.decodeAndBlitFrameRGBA(0,r),{data:r,width:e.width,height:e.height}}},encoders:{[Be]:t=>{const e=new Ie.BitmapImage(t.bitmap);Ie.GifUtil.quantizeDekker(e,256);const r=new Ie.GifFrame(e);return(new Ie.GifCodec).encodeGif([r],{}).then((t=>t.buffer))}}})],plugins:[t=>{const e=fr.map((e=>{let r=e(t)||{};return r.class||r.constants||(r={class:r}),r}));return(0,fe.Ee)(...e)}]})})()})();
//# sourceMappingURL=jimp.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/backend-impl.js":
/*!******************************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/backend-impl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerBackend": () => (/* binding */ registerBackend),
/* harmony export */   "resolveBackend": () => (/* binding */ resolveBackend)
/* harmony export */ });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const backends = {};
const backendsSortedByPriority = [];
/**
 * Register a backend.
 *
 * @param name - the name as a key to lookup as an execution provider.
 * @param backend - the backend object.
 * @param priority - an integer indicating the priority of the backend. Higher number means higher priority. if priority
 * < 0, it will be considered as a 'beta' version and will not be used as a fallback backend by default.
 *
 * @internal
 */
const registerBackend = (name, backend, priority) => {
    if (backend && typeof backend.init === 'function' && typeof backend.createSessionHandler === 'function') {
        const currentBackend = backends[name];
        if (currentBackend === undefined) {
            backends[name] = { backend, priority };
        }
        else if (currentBackend.priority > priority) {
            // same name is already registered with a higher priority. skip registeration.
            return;
        }
        else if (currentBackend.priority === priority) {
            if (currentBackend.backend !== backend) {
                throw new Error(`cannot register backend "${name}" using priority ${priority}`);
            }
        }
        if (priority >= 0) {
            const i = backendsSortedByPriority.indexOf(name);
            if (i !== -1) {
                backendsSortedByPriority.splice(i, 1);
            }
            for (let i = 0; i < backendsSortedByPriority.length; i++) {
                if (backends[backendsSortedByPriority[i]].priority <= priority) {
                    backendsSortedByPriority.splice(i, 0, name);
                    return;
                }
            }
            backendsSortedByPriority.push(name);
        }
        return;
    }
    throw new TypeError('not a valid backend');
};
/**
 * Resolve backend by specified hints.
 *
 * @param backendHints - a list of execution provider names to lookup. If omitted use registered backends as list.
 * @returns a promise that resolves to the backend.
 *
 * @internal
 */
const resolveBackend = async (backendHints) => {
    const backendNames = backendHints.length === 0 ? backendsSortedByPriority : backendHints;
    const errors = [];
    for (const backendName of backendNames) {
        const backendInfo = backends[backendName];
        if (backendInfo) {
            if (backendInfo.initialized) {
                return backendInfo.backend;
            }
            else if (backendInfo.aborted) {
                continue; // current backend is unavailable; try next
            }
            const isInitializing = !!backendInfo.initPromise;
            try {
                if (!isInitializing) {
                    backendInfo.initPromise = backendInfo.backend.init();
                }
                await backendInfo.initPromise;
                backendInfo.initialized = true;
                return backendInfo.backend;
            }
            catch (e) {
                if (!isInitializing) {
                    errors.push({ name: backendName, err: e });
                }
                backendInfo.aborted = true;
            }
            finally {
                delete backendInfo.initPromise;
            }
        }
    }
    throw new Error(`no available backend found. ERR: ${errors.map(e => `[${e.name}] ${e.err}`).join(', ')}`);
};
//# sourceMappingURL=backend-impl.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/backend.js":
/*!*************************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/backend.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerBackend": () => (/* reexport safe */ _backend_impl__WEBPACK_IMPORTED_MODULE_0__.registerBackend)
/* harmony export */ });
/* harmony import */ var _backend_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend-impl */ "./node_modules/onnxruntime-common/dist/lib/backend-impl.js");
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

//# sourceMappingURL=backend.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/env-impl.js":
/*!**************************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/env-impl.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvImpl": () => (/* binding */ EnvImpl)
/* harmony export */ });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
class EnvImpl {
    constructor() {
        this.wasm = {};
        this.webgl = {};
        this.logLevelInternal = 'warning';
    }
    // TODO standadize the getter and setter convention in env for other fields.
    set logLevel(value) {
        if (value === undefined) {
            return;
        }
        if (typeof value !== 'string' || ['verbose', 'info', 'warning', 'error', 'fatal'].indexOf(value) === -1) {
            throw new Error(`Unsupported logging level: ${value}`);
        }
        this.logLevelInternal = value;
    }
    get logLevel() {
        return this.logLevelInternal;
    }
}
//# sourceMappingURL=env-impl.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/env.js":
/*!*********************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/env.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "env": () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var _env_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env-impl */ "./node_modules/onnxruntime-common/dist/lib/env-impl.js");
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Represent a set of flags as a global singleton.
 */
const env = new _env_impl__WEBPACK_IMPORTED_MODULE_0__.EnvImpl();
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InferenceSession": () => (/* reexport safe */ _inference_session__WEBPACK_IMPORTED_MODULE_2__.InferenceSession),
/* harmony export */   "Tensor": () => (/* reexport safe */ _tensor__WEBPACK_IMPORTED_MODULE_3__.Tensor),
/* harmony export */   "env": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_1__.env),
/* harmony export */   "registerBackend": () => (/* reexport safe */ _backend__WEBPACK_IMPORTED_MODULE_0__.registerBackend)
/* harmony export */ });
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend */ "./node_modules/onnxruntime-common/dist/lib/backend.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/onnxruntime-common/dist/lib/env.js");
/* harmony import */ var _inference_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inference-session */ "./node_modules/onnxruntime-common/dist/lib/inference-session.js");
/* harmony import */ var _tensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tensor */ "./node_modules/onnxruntime-common/dist/lib/tensor.js");
/* harmony import */ var _onnx_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onnx-value */ "./node_modules/onnxruntime-common/dist/lib/onnx-value.js");
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * # ONNX Runtime JavaScript API
 *
 * ONNX Runtime JavaScript API is a unified API for all JavaScript usages, including the following NPM packages:
 *
 * - [onnxruntime-node](https://www.npmjs.com/package/onnxruntime-node)
 * - [onnxruntime-web](https://www.npmjs.com/package/onnxruntime-web)
 * - [onnxruntime-react-native](https://www.npmjs.com/package/onnxruntime-react-native)
 *
 * See also:
 * - [Get Started](https://onnxruntime.ai/docs/get-started/with-javascript.html)
 * - [Inference examples](https://github.com/microsoft/onnxruntime-inference-examples/tree/main/js)
 *
 * @packageDocumentation
 */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/inference-session-impl.js":
/*!****************************************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/inference-session-impl.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InferenceSession": () => (/* binding */ InferenceSession)
/* harmony export */ });
/* harmony import */ var _backend_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend-impl */ "./node_modules/onnxruntime-common/dist/lib/backend-impl.js");
/* harmony import */ var _tensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tensor */ "./node_modules/onnxruntime-common/dist/lib/tensor.js");
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


class InferenceSession {
    constructor(handler) {
        this.handler = handler;
    }
    async run(feeds, arg1, arg2) {
        const fetches = {};
        let options = {};
        // check inputs
        if (typeof feeds !== 'object' || feeds === null || feeds instanceof _tensor__WEBPACK_IMPORTED_MODULE_1__.Tensor || Array.isArray(feeds)) {
            throw new TypeError('\'feeds\' must be an object that use input names as keys and OnnxValue as corresponding values.');
        }
        let isFetchesEmpty = true;
        // determine which override is being used
        if (typeof arg1 === 'object') {
            if (arg1 === null) {
                throw new TypeError('Unexpected argument[1]: cannot be null.');
            }
            if (arg1 instanceof _tensor__WEBPACK_IMPORTED_MODULE_1__.Tensor) {
                throw new TypeError('\'fetches\' cannot be a Tensor');
            }
            if (Array.isArray(arg1)) {
                if (arg1.length === 0) {
                    throw new TypeError('\'fetches\' cannot be an empty array.');
                }
                isFetchesEmpty = false;
                // output names
                for (const name of arg1) {
                    if (typeof name !== 'string') {
                        throw new TypeError('\'fetches\' must be a string array or an object.');
                    }
                    if (this.outputNames.indexOf(name) === -1) {
                        throw new RangeError(`'fetches' contains invalid output name: ${name}.`);
                    }
                    fetches[name] = null;
                }
                if (typeof arg2 === 'object' && arg2 !== null) {
                    options = arg2;
                }
                else if (typeof arg2 !== 'undefined') {
                    throw new TypeError('\'options\' must be an object.');
                }
            }
            else {
                // decide whether arg1 is fetches or options
                // if any output name is present and its value is valid OnnxValue, we consider it fetches
                let isFetches = false;
                const arg1Keys = Object.getOwnPropertyNames(arg1);
                for (const name of this.outputNames) {
                    if (arg1Keys.indexOf(name) !== -1) {
                        const v = arg1[name];
                        if (v === null || v instanceof _tensor__WEBPACK_IMPORTED_MODULE_1__.Tensor) {
                            isFetches = true;
                            isFetchesEmpty = false;
                            fetches[name] = v;
                        }
                    }
                }
                if (isFetches) {
                    if (typeof arg2 === 'object' && arg2 !== null) {
                        options = arg2;
                    }
                    else if (typeof arg2 !== 'undefined') {
                        throw new TypeError('\'options\' must be an object.');
                    }
                }
                else {
                    options = arg1;
                }
            }
        }
        else if (typeof arg1 !== 'undefined') {
            throw new TypeError('Unexpected argument[1]: must be \'fetches\' or \'options\'.');
        }
        // check if all inputs are in feed
        for (const name of this.inputNames) {
            if (typeof feeds[name] === 'undefined') {
                throw new Error(`input '${name}' is missing in 'feeds'.`);
            }
        }
        // if no fetches is specified, we use the full output names list
        if (isFetchesEmpty) {
            for (const name of this.outputNames) {
                fetches[name] = null;
            }
        }
        // feeds, fetches and options are prepared
        const results = await this.handler.run(feeds, fetches, options);
        const returnValue = {};
        for (const key in results) {
            if (Object.hasOwnProperty.call(results, key)) {
                returnValue[key] = new _tensor__WEBPACK_IMPORTED_MODULE_1__.Tensor(results[key].type, results[key].data, results[key].dims);
            }
        }
        return returnValue;
    }
    static async create(arg0, arg1, arg2, arg3) {
        // either load from a file or buffer
        let filePathOrUint8Array;
        let options = {};
        if (typeof arg0 === 'string') {
            filePathOrUint8Array = arg0;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError('\'options\' must be an object.');
            }
        }
        else if (arg0 instanceof Uint8Array) {
            filePathOrUint8Array = arg0;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError('\'options\' must be an object.');
            }
        }
        else if (arg0 instanceof ArrayBuffer ||
            (typeof SharedArrayBuffer !== 'undefined' && arg0 instanceof SharedArrayBuffer)) {
            const buffer = arg0;
            let byteOffset = 0;
            let byteLength = arg0.byteLength;
            if (typeof arg1 === 'object' && arg1 !== null) {
                options = arg1;
            }
            else if (typeof arg1 === 'number') {
                byteOffset = arg1;
                if (!Number.isSafeInteger(byteOffset)) {
                    throw new RangeError('\'byteOffset\' must be an integer.');
                }
                if (byteOffset < 0 || byteOffset >= buffer.byteLength) {
                    throw new RangeError(`'byteOffset' is out of range [0, ${buffer.byteLength}).`);
                }
                byteLength = arg0.byteLength - byteOffset;
                if (typeof arg2 === 'number') {
                    byteLength = arg2;
                    if (!Number.isSafeInteger(byteLength)) {
                        throw new RangeError('\'byteLength\' must be an integer.');
                    }
                    if (byteLength <= 0 || byteOffset + byteLength > buffer.byteLength) {
                        throw new RangeError(`'byteLength' is out of range (0, ${buffer.byteLength - byteOffset}].`);
                    }
                    if (typeof arg3 === 'object' && arg3 !== null) {
                        options = arg3;
                    }
                    else if (typeof arg3 !== 'undefined') {
                        throw new TypeError('\'options\' must be an object.');
                    }
                }
                else if (typeof arg2 !== 'undefined') {
                    throw new TypeError('\'byteLength\' must be a number.');
                }
            }
            else if (typeof arg1 !== 'undefined') {
                throw new TypeError('\'options\' must be an object.');
            }
            filePathOrUint8Array = new Uint8Array(buffer, byteOffset, byteLength);
        }
        else {
            throw new TypeError('Unexpected argument[0]: must be \'path\' or \'buffer\'.');
        }
        // get backend hints
        const eps = options.executionProviders || [];
        const backendHints = eps.map(i => typeof i === 'string' ? i : i.name);
        const backend = await (0,_backend_impl__WEBPACK_IMPORTED_MODULE_0__.resolveBackend)(backendHints);
        const handler = await backend.createSessionHandler(filePathOrUint8Array, options);
        return new InferenceSession(handler);
    }
    startProfiling() {
        this.handler.startProfiling();
    }
    endProfiling() {
        this.handler.endProfiling();
    }
    get inputNames() {
        return this.handler.inputNames;
    }
    get outputNames() {
        return this.handler.outputNames;
    }
}
//# sourceMappingURL=inference-session-impl.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/inference-session.js":
/*!***********************************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/inference-session.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InferenceSession": () => (/* binding */ InferenceSession)
/* harmony export */ });
/* harmony import */ var _inference_session_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inference-session-impl */ "./node_modules/onnxruntime-common/dist/lib/inference-session-impl.js");
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// eslint-disable-next-line @typescript-eslint/naming-convention
const InferenceSession = _inference_session_impl__WEBPACK_IMPORTED_MODULE_0__.InferenceSession;
//# sourceMappingURL=inference-session.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/onnx-value.js":
/*!****************************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/onnx-value.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

//# sourceMappingURL=onnx-value.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/tensor-impl.js":
/*!*****************************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/tensor-impl.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tensor": () => (/* binding */ Tensor)
/* harmony export */ });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const isBigInt64ArrayAvailable = typeof BigInt64Array !== 'undefined' && typeof BigInt64Array.from === 'function';
const isBigUint64ArrayAvailable = typeof BigUint64Array !== 'undefined' && typeof BigUint64Array.from === 'function';
// a runtime map that maps type string to TypedArray constructor. Should match Tensor.DataTypeMap.
const NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP = new Map([
    ['float32', Float32Array],
    ['uint8', Uint8Array],
    ['int8', Int8Array],
    ['uint16', Uint16Array],
    ['int16', Int16Array],
    ['int32', Int32Array],
    ['bool', Uint8Array],
    ['float64', Float64Array],
    ['uint32', Uint32Array],
]);
// a runtime map that maps type string to TypedArray constructor. Should match Tensor.DataTypeMap.
const NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP = new Map([
    [Float32Array, 'float32'],
    [Uint8Array, 'uint8'],
    [Int8Array, 'int8'],
    [Uint16Array, 'uint16'],
    [Int16Array, 'int16'],
    [Int32Array, 'int32'],
    [Float64Array, 'float64'],
    [Uint32Array, 'uint32'],
]);
if (isBigInt64ArrayAvailable) {
    NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set('int64', BigInt64Array);
    NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(BigInt64Array, 'int64');
}
if (isBigUint64ArrayAvailable) {
    NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.set('uint64', BigUint64Array);
    NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.set(BigUint64Array, 'uint64');
}
/**
 * calculate size from dims.
 *
 * @param dims the dims array. May be an illegal input.
 */
const calculateSize = (dims) => {
    let size = 1;
    for (let i = 0; i < dims.length; i++) {
        const dim = dims[i];
        if (typeof dim !== 'number' || !Number.isSafeInteger(dim)) {
            throw new TypeError(`dims[${i}] must be an integer, got: ${dim}`);
        }
        if (dim < 0) {
            throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${dim}`);
        }
        size *= dim;
    }
    return size;
};
class Tensor {
    constructor(arg0, arg1, arg2) {
        let type;
        let data;
        let dims;
        // check whether arg0 is type or data
        if (typeof arg0 === 'string') {
            //
            // Override: constructor(type, data, ...)
            //
            type = arg0;
            dims = arg2;
            if (arg0 === 'string') {
                // string tensor
                if (!Array.isArray(arg1)) {
                    throw new TypeError('A string tensor\'s data must be a string array.');
                }
                // we don't check whether every element in the array is string; this is too slow. we assume it's correct and
                // error will be populated at inference
                data = arg1;
            }
            else {
                // numeric tensor
                const typedArrayConstructor = NUMERIC_TENSOR_TYPE_TO_TYPEDARRAY_MAP.get(arg0);
                if (typedArrayConstructor === undefined) {
                    throw new TypeError(`Unsupported tensor type: ${arg0}.`);
                }
                if (Array.isArray(arg1)) {
                    // use 'as any' here because TypeScript's check on type of 'SupportedTypedArrayConstructors.from()' produces
                    // incorrect results.
                    // 'typedArrayConstructor' should be one of the typed array prototype objects.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data = typedArrayConstructor.from(arg1);
                }
                else if (arg1 instanceof typedArrayConstructor) {
                    data = arg1;
                }
                else {
                    throw new TypeError(`A ${type} tensor's data must be type of ${typedArrayConstructor}`);
                }
            }
        }
        else {
            //
            // Override: constructor(data, ...)
            //
            dims = arg1;
            if (Array.isArray(arg0)) {
                // only boolean[] and string[] is supported
                if (arg0.length === 0) {
                    throw new TypeError('Tensor type cannot be inferred from an empty array.');
                }
                const firstElementType = typeof arg0[0];
                if (firstElementType === 'string') {
                    type = 'string';
                    data = arg0;
                }
                else if (firstElementType === 'boolean') {
                    type = 'bool';
                    // 'arg0' is of type 'boolean[]'. Uint8Array.from(boolean[]) actually works, but typescript thinks this is
                    // wrong type. We use 'as any' to make it happy.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data = Uint8Array.from(arg0);
                }
                else {
                    throw new TypeError(`Invalid element type of data array: ${firstElementType}.`);
                }
            }
            else {
                // get tensor type from TypedArray
                const mappedType = NUMERIC_TENSOR_TYPEDARRAY_TO_TYPE_MAP.get(arg0.constructor);
                if (mappedType === undefined) {
                    throw new TypeError(`Unsupported type for tensor data: ${arg0.constructor}.`);
                }
                type = mappedType;
                data = arg0;
            }
        }
        // type and data is processed, now processing dims
        if (dims === undefined) {
            // assume 1-D tensor if dims omitted
            dims = [data.length];
        }
        else if (!Array.isArray(dims)) {
            throw new TypeError('A tensor\'s dims must be a number array');
        }
        // perform check
        const size = calculateSize(dims);
        if (size !== data.length) {
            throw new Error(`Tensor's size(${size}) does not match data length(${data.length}).`);
        }
        this.dims = dims;
        this.type = type;
        this.data = data;
        this.size = size;
    }
    // #endregion
    /**
     * Create a new tensor object from image object
     *
     * @param buffer - Extracted image buffer data - assuming RGBA format
     * @param imageFormat - input image configuration - required configurations height, width, format
     * @param tensorFormat - output tensor configuration - Default is RGB format
     */
    static bufferToTensor(buffer, options) {
        if (buffer === undefined) {
            throw new Error('Image buffer must be defined');
        }
        if (options.height === undefined || options.width === undefined) {
            throw new Error('Image height and width must be defined');
        }
        const { height, width } = options;
        const norm = options.norm;
        let normMean;
        let normBias;
        if (norm === undefined || norm.mean === undefined) {
            normMean = 255;
        }
        else {
            normMean = norm.mean;
        }
        if (norm === undefined || norm.bias === undefined) {
            normBias = 0;
        }
        else {
            normBias = norm.bias;
        }
        const inputformat = options.bitmapFormat !== undefined ? options.bitmapFormat : 'RGBA';
        // default value is RGBA since imagedata and HTMLImageElement uses it
        const outputformat = options.tensorFormat !== undefined ?
            (options.tensorFormat !== undefined ? options.tensorFormat : 'RGB') :
            'RGB';
        const offset = height * width;
        const float32Data = outputformat === 'RGBA' ? new Float32Array(offset * 4) : new Float32Array(offset * 3);
        // Default pointer assignments
        let step = 4, rImagePointer = 0, gImagePointer = 1, bImagePointer = 2, aImagePointer = 3;
        let rTensorPointer = 0, gTensorPointer = offset, bTensorPointer = offset * 2, aTensorPointer = -1;
        // Updating the pointer assignments based on the input image format
        if (inputformat === 'RGB') {
            step = 3;
            rImagePointer = 0;
            gImagePointer = 1;
            bImagePointer = 2;
            aImagePointer = -1;
        }
        // Updating the pointer assignments based on the output tensor format
        if (outputformat === 'RGBA') {
            aTensorPointer = offset * 3;
        }
        else if (outputformat === 'RBG') {
            rTensorPointer = 0;
            bTensorPointer = offset;
            gTensorPointer = offset * 2;
        }
        else if (outputformat === 'BGR') {
            bTensorPointer = 0;
            gTensorPointer = offset;
            rTensorPointer = offset * 2;
        }
        for (let i = 0; i < offset; i++, rImagePointer += step, bImagePointer += step, gImagePointer += step, aImagePointer += step) {
            float32Data[rTensorPointer++] = (buffer[rImagePointer] + normBias) / normMean;
            float32Data[gTensorPointer++] = (buffer[gImagePointer] + normBias) / normMean;
            float32Data[bTensorPointer++] = (buffer[bImagePointer] + normBias) / normMean;
            if (aTensorPointer !== -1 && aImagePointer !== -1) {
                float32Data[aTensorPointer++] = (buffer[aImagePointer] + normBias) / normMean;
            }
        }
        // Float32Array -> ort.Tensor
        const outputTensor = outputformat === 'RGBA' ? new Tensor('float32', float32Data, [1, 4, height, width]) :
            new Tensor('float32', float32Data, [1, 3, height, width]);
        return outputTensor;
    }
    static async fromImage(image, options) {
        // checking the type of image object
        const isHTMLImageEle = typeof (HTMLImageElement) !== 'undefined' && image instanceof HTMLImageElement;
        const isImageDataEle = typeof (ImageData) !== 'undefined' && image instanceof ImageData;
        const isImageBitmap = typeof (ImageBitmap) !== 'undefined' && image instanceof ImageBitmap;
        const isURL = typeof (String) !== 'undefined' && (image instanceof String || typeof image === 'string');
        let data;
        let tensorConfig = {};
        // filling and checking image configuration options
        if (isHTMLImageEle) {
            // HTMLImageElement - image object - format is RGBA by default
            const canvas = document.createElement('canvas');
            const pixels2DContext = canvas.getContext('2d');
            if (pixels2DContext != null) {
                let height = image.naturalHeight;
                let width = image.naturalWidth;
                if (options !== undefined && options.resizedHeight !== undefined && options.resizedWidth !== undefined) {
                    height = options.resizedHeight;
                    width = options.resizedWidth;
                }
                if (options !== undefined) {
                    tensorConfig = options;
                    if (options.tensorFormat !== undefined) {
                        throw new Error('Image input config format must be RGBA for HTMLImageElement');
                    }
                    else {
                        tensorConfig.tensorFormat = 'RGBA';
                    }
                    if (options.height !== undefined && options.height !== height) {
                        throw new Error('Image input config height doesn\'t match HTMLImageElement height');
                    }
                    else {
                        tensorConfig.height = height;
                    }
                    if (options.width !== undefined && options.width !== width) {
                        throw new Error('Image input config width doesn\'t match HTMLImageElement width');
                    }
                    else {
                        tensorConfig.width = width;
                    }
                }
                else {
                    tensorConfig.tensorFormat = 'RGBA';
                    tensorConfig.height = height;
                    tensorConfig.width = width;
                }
                canvas.width = width;
                canvas.height = height;
                pixels2DContext.drawImage(image, 0, 0, width, height);
                data = pixels2DContext.getImageData(0, 0, width, height).data;
            }
            else {
                throw new Error('Can not access image data');
            }
        }
        else if (isImageDataEle) {
            // ImageData - image object - format is RGBA by default
            const format = 'RGBA';
            let height;
            let width;
            if (options !== undefined && options.resizedWidth !== undefined && options.resizedHeight !== undefined) {
                height = options.resizedHeight;
                width = options.resizedWidth;
            }
            else {
                height = image.height;
                width = image.width;
            }
            if (options !== undefined) {
                tensorConfig = options;
                if (options.bitmapFormat !== undefined && options.bitmapFormat !== format) {
                    throw new Error('Image input config format must be RGBA for ImageData');
                }
                else {
                    tensorConfig.bitmapFormat = 'RGBA';
                }
            }
            else {
                tensorConfig.bitmapFormat = 'RGBA';
            }
            tensorConfig.height = height;
            tensorConfig.width = width;
            if (options !== undefined) {
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = width;
                tempCanvas.height = height;
                const pixels2DContext = tempCanvas.getContext('2d');
                if (pixels2DContext != null) {
                    pixels2DContext.putImageData(image, 0, 0);
                    data = pixels2DContext.getImageData(0, 0, width, height).data;
                }
                else {
                    throw new Error('Can not access image data');
                }
            }
            else {
                data = image.data;
            }
        }
        else if (isImageBitmap) {
            // ImageBitmap - image object - format must be provided by user
            if (options === undefined) {
                throw new Error('Please provide image config with format for Imagebitmap');
            }
            if (options.bitmapFormat !== undefined) {
                throw new Error('Image input config format must be defined for ImageBitmap');
            }
            const pixels2DContext = document.createElement('canvas').getContext('2d');
            if (pixels2DContext != null) {
                const height = image.height;
                const width = image.width;
                pixels2DContext.drawImage(image, 0, 0, width, height);
                data = pixels2DContext.getImageData(0, 0, width, height).data;
                if (options !== undefined) {
                    // using square brackets to avoid TS error - type 'never'
                    if (options.height !== undefined && options.height !== height) {
                        throw new Error('Image input config height doesn\'t match ImageBitmap height');
                    }
                    else {
                        tensorConfig.height = height;
                    }
                    // using square brackets to avoid TS error - type 'never'
                    if (options.width !== undefined && options.width !== width) {
                        throw new Error('Image input config width doesn\'t match ImageBitmap width');
                    }
                    else {
                        tensorConfig.width = width;
                    }
                }
                else {
                    tensorConfig.height = height;
                    tensorConfig.width = width;
                }
                return Tensor.bufferToTensor(data, tensorConfig);
            }
            else {
                throw new Error('Can not access image data');
            }
        }
        else if (isURL) {
            return new Promise((resolve, reject) => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!image || !context) {
                    return reject();
                }
                const newImage = new Image();
                newImage.crossOrigin = 'Anonymous';
                newImage.src = image;
                newImage.onload = () => {
                    canvas.width = newImage.width;
                    canvas.height = newImage.height;
                    context.drawImage(newImage, 0, 0, canvas.width, canvas.height);
                    const img = context.getImageData(0, 0, canvas.width, canvas.height);
                    if (options !== undefined) {
                        // using square brackets to avoid TS error - type 'never'
                        if (options.height !== undefined && options.height !== canvas.height) {
                            throw new Error('Image input config height doesn\'t match ImageBitmap height');
                        }
                        else {
                            tensorConfig.height = canvas.height;
                        }
                        // using square brackets to avoid TS error - type 'never'
                        if (options.width !== undefined && options.width !== canvas.width) {
                            throw new Error('Image input config width doesn\'t match ImageBitmap width');
                        }
                        else {
                            tensorConfig.width = canvas.width;
                        }
                    }
                    else {
                        tensorConfig.height = canvas.height;
                        tensorConfig.width = canvas.width;
                    }
                    resolve(Tensor.bufferToTensor(img.data, tensorConfig));
                };
            });
        }
        else {
            throw new Error('Input data provided is not supported - aborted tensor creation');
        }
        if (data !== undefined) {
            return Tensor.bufferToTensor(data, tensorConfig);
        }
        else {
            throw new Error('Input data provided is not supported - aborted tensor creation');
        }
    }
    toImageData(options) {
        var _a, _b;
        const pixels2DContext = document.createElement('canvas').getContext('2d');
        let image;
        if (pixels2DContext != null) {
            // Default values for height and width & format
            const width = this.dims[3];
            const height = this.dims[2];
            const channels = this.dims[1];
            const inputformat = options !== undefined ? (options.format !== undefined ? options.format : 'RGB') : 'RGB';
            const normMean = options !== undefined ? (((_a = options.norm) === null || _a === void 0 ? void 0 : _a.mean) !== undefined ? options.norm.mean : 255) : 255;
            const normBias = options !== undefined ? (((_b = options.norm) === null || _b === void 0 ? void 0 : _b.bias) !== undefined ? options.norm.bias : 0) : 0;
            const offset = height * width;
            if (options !== undefined) {
                if (options.height !== undefined && options.height !== height) {
                    throw new Error('Image output config height doesn\'t match tensor height');
                }
                if (options.width !== undefined && options.width !== width) {
                    throw new Error('Image output config width doesn\'t match tensor width');
                }
                if (options.format !== undefined && (channels === 4 && options.format !== 'RGBA') ||
                    (channels === 3 && (options.format !== 'RGB' && options.format !== 'BGR'))) {
                    throw new Error('Tensor format doesn\'t match input tensor dims');
                }
            }
            // Default pointer assignments
            const step = 4;
            let rImagePointer = 0, gImagePointer = 1, bImagePointer = 2, aImagePointer = 3;
            let rTensorPointer = 0, gTensorPointer = offset, bTensorPointer = offset * 2, aTensorPointer = -1;
            // Updating the pointer assignments based on the input image format
            if (inputformat === 'RGBA') {
                rTensorPointer = 0;
                gTensorPointer = offset;
                bTensorPointer = offset * 2;
                aTensorPointer = offset * 3;
            }
            else if (inputformat === 'RGB') {
                rTensorPointer = 0;
                gTensorPointer = offset;
                bTensorPointer = offset * 2;
            }
            else if (inputformat === 'RBG') {
                rTensorPointer = 0;
                bTensorPointer = offset;
                gTensorPointer = offset * 2;
            }
            image = pixels2DContext.createImageData(width, height);
            for (let i = 0; i < height * width; rImagePointer += step, gImagePointer += step, bImagePointer += step, aImagePointer += step, i++) {
                image.data[rImagePointer] = (this.data[rTensorPointer++] - normBias) * normMean; // R value
                image.data[gImagePointer] = (this.data[gTensorPointer++] - normBias) * normMean; // G value
                image.data[bImagePointer] = (this.data[bTensorPointer++] - normBias) * normMean; // B value
                image.data[aImagePointer] =
                    aTensorPointer === -1 ? 255 : (this.data[aTensorPointer++] - normBias) * normMean; // A value
            }
        }
        else {
            throw new Error('Can not access image data');
        }
        return image;
    }
    // #endregion
    // #region tensor utilities
    reshape(dims) {
        return new Tensor(this.type, this.data, dims);
    }
}
//# sourceMappingURL=tensor-impl.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-common/dist/lib/tensor.js":
/*!************************************************************!*\
  !*** ./node_modules/onnxruntime-common/dist/lib/tensor.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tensor": () => (/* binding */ Tensor)
/* harmony export */ });
/* harmony import */ var _tensor_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tensor-impl */ "./node_modules/onnxruntime-common/dist/lib/tensor-impl.js");
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// eslint-disable-next-line @typescript-eslint/naming-convention
const Tensor = _tensor_impl__WEBPACK_IMPORTED_MODULE_0__.Tensor;
//# sourceMappingURL=tensor.js.map

/***/ }),

/***/ "./node_modules/onnxruntime-web/dist/ort-web.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/onnxruntime-web/dist/ort-web.min.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
* ONNX Runtime Web v1.14.0
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/
//# sourceMappingURL=ort-web.min.js.map

/***/ }),

/***/ "./src/backends/onnx.js":
/*!******************************!*\
  !*** ./src/backends/onnx.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let ONNX;

// TODO support 
const executionProviders = ['wasm'];

if (typeof process !== 'undefined') {
    // Running in a node-like environment.
    // Try to import onnxruntime-node, using onnxruntime-web as a fallback
    try {
        ONNX = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'onnxruntime-node'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } catch (err) {
        console.warn(
            "Node.js environment detected, but `onnxruntime-node` was not found. " +
            "Using `onnxruntime-web` as a fallback. We recommend installing `onnxruntime-node` " +
            "as it generally improves performance (up to 5X)."
        )

        // Fix "ReferenceError: self is not defined" bug when running directly with node
        // https://github.com/microsoft/onnxruntime/issues/13072
        __webpack_require__.g.self = __webpack_require__.g;

        ONNX = __webpack_require__(/*! onnxruntime-web */ "./node_modules/onnxruntime-web/dist/ort-web.min.js");

        // Disable spawning worker threads for testing.
        // This is done by setting numThreads to 1
        // https://github.com/microsoft/onnxruntime/issues/10311
        ONNX.env.wasm.numThreads = 1;
    }

    // Add `cpu` execution provider, with higher precedence that `wasm`.
    executionProviders.unshift('cpu');

} else {
    // Running in a browser-environment, so we just import `onnxruntime-web`
    ONNX = __webpack_require__(/*! onnxruntime-web */ "./node_modules/onnxruntime-web/dist/ort-web.min.js");
}

module.exports = {
    ONNX,
    executionProviders,
}


/***/ }),

/***/ "./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
const fs = __webpack_require__(/*! fs */ "?569f");
const path = __webpack_require__(/*! path */ "?3f59");

const { env: onnx_env } = (__webpack_require__(/*! ./backends/onnx.js */ "./src/backends/onnx.js").ONNX);

// check if various APIs are available (depends on environment)
const CACHE_AVAILABLE = typeof self !== 'undefined' && 'caches' in self;
const FS_AVAILABLE = !isEmpty(fs); // check if file system is available
const PATH_AVAILABLE = !isEmpty(path); // check if path is available

const RUNNING_LOCALLY = FS_AVAILABLE && PATH_AVAILABLE;

// set local model path, based on available APIs
const DEFAULT_LOCAL_PATH = '/models/onnx/quantized/';
const localURL = RUNNING_LOCALLY
    ? path.join(path.dirname(__dirname), DEFAULT_LOCAL_PATH)
    : DEFAULT_LOCAL_PATH;

// First, set path to wasm files. This is needed when running in a web worker.
// https://onnxruntime.ai/docs/api/js/interfaces/Env.WebAssemblyFlags.html#wasmPaths
// We use remote wasm files by default to make it easier for newer users.
// In practice, user's should probably self-host the necessary .wasm files.
onnx_env.wasm.wasmPaths = RUNNING_LOCALLY
    ? path.join(path.dirname(__dirname), '/dist/')
    : 'https://cdn.jsdelivr.net/npm/@xenova/transformers/dist/';


// Global variable used to control exection, with suitable defaults
const env = {
    // access onnxruntime-web's environment variables
    onnx: onnx_env,

    // whether to support loading models from the HuggingFace hub
    remoteModels: true,

    // URL to load models from
    remoteURL: 'https://huggingface.co/Xenova/transformers.js/resolve/main/quantized/',

    // Local URL to load models from.
    localURL: localURL,

    // Whether to use Cache API to cache models. By default, it is true if available.
    useCache: CACHE_AVAILABLE,

    // Whether to use the file system to load files. By default, it is true available.
    useFS: FS_AVAILABLE,
}


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

module.exports = {
    env
}


/***/ }),

/***/ "./src/fft.js":
/*!********************!*\
  !*** ./src/fft.js ***!
  \********************/
/***/ ((module) => {

// Code adapted from https://www.npmjs.com/package/fft.js

class FFT {

    constructor(size) {
        this.size = size | 0; // convert to a 32-bit signed integer
        if (this.size <= 1 || (this.size & (this.size - 1)) !== 0)
            throw new Error('FFT size must be a power of two and bigger than 1');

        this._csize = size << 1;

        this.table = new Float64Array(this.size * 2);
        for (let i = 0; i < this.table.length; i += 2) {
            const angle = Math.PI * i / this.size;
            this.table[i] = Math.cos(angle);
            this.table[i + 1] = -Math.sin(angle);
        }

        // Find size's power of two
        let power = 0;
        for (let t = 1; this.size > t; t <<= 1)
            ++power;

        // Calculate initial step's width:
        //   * If we are full radix-4 - it is 2x smaller to give inital len=8
        //   * Otherwise it is the same as `power` to give len=4
        this._width = power % 2 === 0 ? power - 1 : power;

        // Pre-compute bit-reversal patterns
        this._bitrev = new Int32Array(1 << this._width);
        for (let j = 0; j < this._bitrev.length; ++j) {
            this._bitrev[j] = 0;
            for (let shift = 0; shift < this._width; shift += 2) {
                const revShift = this._width - shift - 2;
                this._bitrev[j] |= ((j >>> shift) & 3) << revShift;
            }
        }
    }

    createComplexArray() {
        return new Float64Array(this._csize);
    }
    fromComplexArray(complex, storage) {
        const res = storage || new Array(complex.length >>> 1);
        for (let i = 0; i < complex.length; i += 2)
            res[i >>> 1] = complex[i];
        return res;
    }

    toComplexArray(input, storage) {
        const res = storage || this.createComplexArray();
        for (let i = 0; i < res.length; i += 2) {
            res[i] = input[i >>> 1];
            res[i + 1] = 0;
        }
        return res;
    }

    completeSpectrum(spectrum) {
        const size = this._csize;
        const half = size >>> 1;
        for (let i = 2; i < half; i += 2) {
            spectrum[size - i] = spectrum[i];
            spectrum[size - i + 1] = -spectrum[i + 1];
        }
    }

    transform(out, data) {
        if (out === data)
            throw new Error('Input and output buffers must be different');

        this._transform4(out, data, 1 /* DONE */);
    }

    realTransform(out, data) {
        if (out === data)
            throw new Error('Input and output buffers must be different');

        this._realTransform4(out, data, 1/* DONE */);
    }

    inverseTransform(out, data) {
        if (out === data)
            throw new Error('Input and output buffers must be different');

        this._transform4(out, data, -1 /* DONE */);
        for (let i = 0; i < out.length; ++i)
            out[i] /= this.size;
    }
    _transform4(out, data, inv) {
        // radix-4 implementation

        const size = this._csize;

        // Initial step (permute and transform)
        const width = this._width;
        let step = 1 << width;
        let len = (size / step) << 1;

        let outOff;
        let t;
        let bitrev = this._bitrev;
        if (len === 4) {
            for (outOff = 0, t = 0; outOff < size; outOff += len, ++t) {
                const off = bitrev[t];
                this._singleTransform2(data, out, outOff, off, step);
            }
        } else {
            // len === 8
            for (outOff = 0, t = 0; outOff < size; outOff += len, ++t) {
                const off = bitrev[t];
                this._singleTransform4(data, out, outOff, off, step, inv);
            }
        }

        // Loop through steps in decreasing order
        for (step >>= 2; step >= 2; step >>= 2) {
            len = (size / step) << 1;
            let quarterLen = len >>> 2;

            // Loop through offsets in the data
            for (outOff = 0; outOff < size; outOff += len) {
                // Full case
                let limit = outOff + quarterLen;
                for (let i = outOff, k = 0; i < limit; i += 2, k += step) {
                    const A = i;
                    const B = A + quarterLen;
                    const C = B + quarterLen;
                    const D = C + quarterLen;

                    // Original values
                    const Ar = out[A];
                    const Ai = out[A + 1];
                    const Br = out[B];
                    const Bi = out[B + 1];
                    const Cr = out[C];
                    const Ci = out[C + 1];
                    const Dr = out[D];
                    const Di = out[D + 1];

                    const tableBr = this.table[k];
                    const tableBi = inv * this.table[k + 1];
                    const MBr = Br * tableBr - Bi * tableBi;
                    const MBi = Br * tableBi + Bi * tableBr;

                    const tableCr = this.table[2 * k];
                    const tableCi = inv * this.table[2 * k + 1];
                    const MCr = Cr * tableCr - Ci * tableCi;
                    const MCi = Cr * tableCi + Ci * tableCr;

                    const tableDr = this.table[3 * k];
                    const tableDi = inv * this.table[3 * k + 1];
                    const MDr = Dr * tableDr - Di * tableDi;
                    const MDi = Dr * tableDi + Di * tableDr;

                    // Pre-Final values
                    const T0r = Ar + MCr;
                    const T0i = Ai + MCi;
                    const T1r = Ar - MCr;
                    const T1i = Ai - MCi;
                    const T2r = MBr + MDr;
                    const T2i = MBi + MDi;
                    const T3r = inv * (MBr - MDr);
                    const T3i = inv * (MBi - MDi);

                    // Final values
                    out[A] = T0r + T2r;
                    out[A + 1] = T0i + T2i;
                    out[B] = T1r + T3i;
                    out[B + 1] = T1i - T3r;
                    out[C] = T0r - T2r;
                    out[C + 1] = T0i - T2i;
                    out[D] = T1r - T3i;
                    out[D + 1] = T1i + T3r;
                }
            }
        }
    }

    _singleTransform2(data, out, outOff, off, step) {
        // radix-2 implementation
        // NOTE: Only called for len=4

        const evenR = data[off];
        const evenI = data[off + 1];
        const oddR = data[off + step];
        const oddI = data[off + step + 1];

        out[outOff] = evenR + oddR;
        out[outOff + 1] = evenI + oddI;
        out[outOff + 2] = evenR - oddR;
        out[outOff + 3] = evenI - oddI;
    }

    _singleTransform4(data, out, outOff, off, step, inv) {
        // radix-4
        // NOTE: Only called for len=8
        const step2 = step * 2;
        const step3 = step * 3;

        // Original values
        const Ar = data[off];
        const Ai = data[off + 1];
        const Br = data[off + step];
        const Bi = data[off + step + 1];
        const Cr = data[off + step2];
        const Ci = data[off + step2 + 1];
        const Dr = data[off + step3];
        const Di = data[off + step3 + 1];

        // Pre-Final values
        const T0r = Ar + Cr;
        const T0i = Ai + Ci;
        const T1r = Ar - Cr;
        const T1i = Ai - Ci;
        const T2r = Br + Dr;
        const T2i = Bi + Di;
        const T3r = inv * (Br - Dr);
        const T3i = inv * (Bi - Di);

        // Final values
        out[outOff] = T0r + T2r;
        out[outOff + 1] = T0i + T2i;
        out[outOff + 2] = T1r + T3i;
        out[outOff + 3] = T1i - T3r;
        out[outOff + 4] = T0r - T2r;
        out[outOff + 5] = T0i - T2i;
        out[outOff + 6] = T1r - T3i;
        out[outOff + 7] = T1i + T3r;
    }

    _realTransform4(out, data, inv) {
        // Real input radix-4 implementation
        const size = this._csize;

        // Initial step (permute and transform)
        const width = this._width;
        let step = 1 << width;
        let len = (size / step) << 1;

        var outOff;
        var t;
        var bitrev = this._bitrev;
        if (len === 4) {
            for (outOff = 0, t = 0; outOff < size; outOff += len, ++t) {
                const off = bitrev[t];
                this._singleRealTransform2(data, out, outOff, off >>> 1, step >>> 1);
            }
        } else {
            // len === 8
            for (outOff = 0, t = 0; outOff < size; outOff += len, ++t) {
                const off = bitrev[t];
                this._singleRealTransform4(data, out, outOff, off >>> 1, step >>> 1, inv);
            }
        }

        // Loop through steps in decreasing order
        for (step >>= 2; step >= 2; step >>= 2) {
            len = (size / step) << 1;
            const halfLen = len >>> 1;
            const quarterLen = halfLen >>> 1;
            const hquarterLen = quarterLen >>> 1;

            // Loop through offsets in the data
            for (outOff = 0; outOff < size; outOff += len) {
                for (let i = 0, k = 0; i <= hquarterLen; i += 2, k += step) {
                    const A = outOff + i;
                    const B = A + quarterLen;
                    const C = B + quarterLen;
                    const D = C + quarterLen;

                    // Original values
                    const Ar = out[A];
                    const Ai = out[A + 1];
                    const Br = out[B];
                    const Bi = out[B + 1];
                    const Cr = out[C];
                    const Ci = out[C + 1];
                    const Dr = out[D];
                    const Di = out[D + 1];

                    const tableBr = this.table[k];
                    const tableBi = inv * this.table[k + 1];
                    const MBr = Br * tableBr - Bi * tableBi;
                    const MBi = Br * tableBi + Bi * tableBr;

                    const tableCr = this.table[2 * k];
                    const tableCi = inv * this.table[2 * k + 1];
                    const MCr = Cr * tableCr - Ci * tableCi;
                    const MCi = Cr * tableCi + Ci * tableCr;

                    const tableDr = this.table[3 * k];
                    const tableDi = inv * this.table[3 * k + 1];
                    const MDr = Dr * tableDr - Di * tableDi;
                    const MDi = Dr * tableDi + Di * tableDr;

                    // Pre-Final values
                    const T0r = Ar + MCr;
                    const T0i = Ai + MCi;
                    const T1r = Ar - MCr;
                    const T1i = Ai - MCi;
                    const T2r = MBr + MDr;
                    const T2i = MBi + MDi;
                    const T3r = inv * (MBr - MDr);
                    const T3i = inv * (MBi - MDi);

                    // Final values
                    out[A] = T0r + T2r;
                    out[A + 1] = T0i + T2i;
                    out[B] = T1r + T3i;
                    out[B + 1] = T1i - T3r;

                    // Output final middle point
                    if (i === 0) {
                        out[C] = T0r - T2r;
                        out[C + 1] = T0i - T2i;
                        continue;
                    }

                    // Do not overwrite ourselves
                    if (i === hquarterLen)
                        continue;

                    const SA = outOff + quarterLen - i;
                    const SB = outOff + halfLen - i;

                    out[SA] = T1r + -inv * T3i;
                    out[SA + 1] = -T1i - inv * T3r;
                    out[SB] = T0r + -inv * T2r;
                    out[SB + 1] = -T0i + inv * T2i;
                }
            }
        }
    }

    _singleRealTransform2(data, out, outOff, off, step) {
        // radix-2 implementation
        // NOTE: Only called for len=4

        const evenR = data[off];
        const oddR = data[off + step];

        out[outOff] = evenR + oddR;
        out[outOff + 1] = 0;
        out[outOff + 2] = evenR - oddR;
        out[outOff + 3] = 0;
    }

    _singleRealTransform4(data, out, outOff, off, step, inv) {
        // radix-4
        // NOTE: Only called for len=8
        const step2 = step * 2;
        const step3 = step * 3;

        // Original values
        const Ar = data[off];
        const Br = data[off + step];
        const Cr = data[off + step2];
        const Dr = data[off + step3];

        // Pre-Final values
        const T0r = Ar + Cr;
        const T1r = Ar - Cr;
        const T2r = Br + Dr;
        const T3r = inv * (Br - Dr);

        // Final values
        out[outOff] = T0r + T2r;
        out[outOff + 1] = 0;
        out[outOff + 2] = T1r;
        out[outOff + 3] = -T3r;
        out[outOff + 4] = T0r - T2r;
        out[outOff + 5] = 0;
        out[outOff + 6] = T1r;
        out[outOff + 7] = T3r;
    }
}

module.exports = FFT


/***/ }),

/***/ "./src/generation.js":
/*!***************************!*\
  !*** ./src/generation.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
    Callable,
    exists,
    log_softmax
} = __webpack_require__(/*! ./utils.js */ "./src/utils.js");


class LogitsProcessorList extends Callable {

    constructor() {
        super();
        this.processors = [];
    }

    push(item) {
        this.processors.push(item);
    }

    extend(items) {
        this.processors.push(...items);
    }

    _call(input_ids, batchedLogits) {
        // Apply logits processor to each item in the batch:
        for (let logits of batchedLogits) {
            // Modifies logits inplace
            this.processors.forEach(
                func => func(input_ids, logits)
            )
        }
    }

    [Symbol.iterator]() {
        return this.processors.values();
    }
}

class LogitsProcessor extends Callable {
    _call(input_ids, logits) {
        throw Error("`_call` should be implemented in a subclass")
    }
}

class ForceTokensLogitsProcessor extends LogitsProcessor {
    constructor(forced_decoder_ids) {
        super();
        this.force_token_map = Object.fromEntries(forced_decoder_ids ?? []);
    }

    _call(input_ids, logits) {
        let map = this.force_token_map[input_ids.length];
        if (exists(map)) { // There exists a mapping
            logits.data.fill(-Infinity)
            logits.data[map] = 0;
        }
        return logits;
    }
}
class ForcedBOSTokenLogitsProcessor extends LogitsProcessor {
    constructor(bos_token_id) {
        super();
        this.bos_token_id = bos_token_id;
    }

    _call(input_ids, logits) {
        if (input_ids.length === 1) {
            logits.data.fill(-Infinity)
            logits.data[this.bos_token_id] = 0;
        }
    }
}

class ForcedEOSTokenLogitsProcessor extends LogitsProcessor {
    _call(input_ids, logits) {
        // console.log('call ForcedEOSTokenLogitsProcessor')
        // TODO
    }
}

class WhisperTimeStampLogitsProcessor extends LogitsProcessor {
    constructor(generate_config) {
        super();
        this.eos_token_id = generate_config.eos_token_id;
        this.no_timestamps_token_id = generate_config.no_timestamps_token_id;
        this.timestamp_begin = this.no_timestamps_token_id + 1;

        this.begin_index = (generate_config.forced_decoder_ids || []).length + 2;
        if (generate_config.forced_decoder_ids.slice(-1)[0][1] === this.no_timestamps_token_id) {
            this.begin_index -= 1;
        }
        this.max_initial_timestamp_index = generate_config.max_initial_timestamp_index;

    }

    _call(input_ids, logits) {
        // suppress <|notimestamps|> which is handled by without_timestamps
        logits.data[this.no_timestamps_token_id] = -Infinity;

        if (input_ids.length === this.begin_index - 1) {
            logits.data.fill(-Infinity);
            logits.data[this.timestamp_begin] = 0;
            return logits;
        }

        // TODO support batched inputs

        // timestamps have to appear in pairs, except directly before eos_token; mask logits accordingly
        const seq = input_ids.slice(this.begin_index);
        const last_was_timestamp = seq.length >= 1 && seq[seq.length - 1] >= this.timestamp_begin;
        const penultimate_was_timestamp = seq.length < 2 || seq[seq.length - 2] >= this.timestamp_begin;

        if (last_was_timestamp) {
            if (penultimate_was_timestamp) { // has to be non-timestamp
                logits.data.subarray(this.timestamp_begin).fill(-Infinity);
            } else { // cannot be normal text tokens
                logits.data.subarray(0, this.eos_token_id).fill(-Infinity);
            }
        }

        // apply the `max_initial_timestamp` option
        if (input_ids.length === this.begin_index && this.max_initial_timestamp_index !== null) {
            const last_allowed = this.timestamp_begin + this.max_initial_timestamp_index;
            logits.data.subarray(last_allowed + 1).fill(-Infinity);
        }

        // if sum of probability over timestamps is above any other token, sample timestamp
        const logprobs = log_softmax(logits.data);
        const timestamp_logprob = Math.log(logprobs.subarray(this.timestamp_begin).map(Math.exp).reduce((a, b) => a + b));
        const max_text_token_logprob = Math.max(...logprobs.subarray(0, this.timestamp_begin));
        if (timestamp_logprob > max_text_token_logprob) {
            logits.data.subarray(0, this.timestamp_begin).fill(-Infinity);
        }

        return logits;
    }
}

class GenerationConfig {
    constructor(kwargs = {}) {
        // Parameters that control the length of the output
        this.max_length = kwargs.max_length ?? 20;
        this.max_new_tokens = kwargs.max_new_tokens ?? null;
        this.min_length = kwargs.min_length ?? 0;
        this.min_new_tokens = kwargs.min_new_tokens ?? null;
        this.early_stopping = kwargs.early_stopping ?? false;
        this.max_time = kwargs.max_time ?? null;

        // Parameters that control the generation strategy used
        this.do_sample = kwargs.do_sample ?? false;
        this.num_beams = kwargs.num_beams ?? 1;
        this.num_beam_groups = kwargs.num_beam_groups ?? 1;
        this.penalty_alpha = kwargs.penalty_alpha ?? null;
        this.use_cache = kwargs.use_cache ?? true;

        // Parameters for manipulation of the model output logits
        this.temperature = kwargs.temperature ?? 1.0;
        this.top_k = kwargs.top_k ?? 50;
        this.top_p = kwargs.top_p ?? 1.0;
        this.typical_p = kwargs.typical_p ?? 1.0;
        this.epsilon_cutoff = kwargs.epsilon_cutoff ?? 0.0;
        this.eta_cutoff = kwargs.eta_cutoff ?? 0.0;
        this.diversity_penalty = kwargs.diversity_penalty ?? 0.0;
        this.repetition_penalty = kwargs.repetition_penalty ?? 1.0;
        this.encoder_repetition_penalty = kwargs.encoder_repetition_penalty ?? 1.0;
        this.length_penalty = kwargs.length_penalty ?? 1.0;
        this.no_repeat_ngram_size = kwargs.no_repeat_ngram_size ?? 0;
        this.bad_words_ids = kwargs.bad_words_ids ?? null;
        this.force_words_ids = kwargs.force_words_ids ?? null;
        this.renormalize_logits = kwargs.renormalize_logits ?? false;
        this.constraints = kwargs.constraints ?? null;
        this.forced_bos_token_id = kwargs.forced_bos_token_id ?? null;
        this.forced_eos_token_id = kwargs.forced_eos_token_id ?? null;
        this.remove_invalid_values = kwargs.remove_invalid_values ?? false;
        this.exponential_decay_length_penalty = kwargs.exponential_decay_length_penalty ?? null;
        this.suppress_tokens = kwargs.suppress_tokens ?? null;
        this.begin_suppress_tokens = kwargs.begin_suppress_tokens ?? null;
        this.forced_decoder_ids = kwargs.forced_decoder_ids ?? null;

        // Parameters that define the output variables of `generate`
        this.num_return_sequences = kwargs.num_return_sequences ?? 1;
        this.output_attentions = kwargs.output_attentions ?? false;
        this.output_hidden_states = kwargs.output_hidden_states ?? false;
        this.output_scores = kwargs.output_scores ?? false;
        this.return_dict_in_generate = kwargs.return_dict_in_generate ?? false;

        // Special tokens that can be used at generation time
        this.pad_token_id = kwargs.pad_token_id ?? null;
        this.bos_token_id = kwargs.bos_token_id ?? null;
        this.eos_token_id = kwargs.eos_token_id ?? null;

        // Generation parameters exclusive to encoder-decoder models
        this.encoder_no_repeat_ngram_size = kwargs.encoder_no_repeat_ngram_size ?? 0;
        this.decoder_start_token_id = kwargs.decoder_start_token_id ?? null;

        // Wild card
        this.generation_kwargs = kwargs.generation_kwargs ?? {};
    }
}

module.exports = {
    LogitsProcessor,
    LogitsProcessorList,
    GenerationConfig,
    ForcedBOSTokenLogitsProcessor,
    ForcedEOSTokenLogitsProcessor,
    WhisperTimeStampLogitsProcessor,
    ForceTokensLogitsProcessor,
};


/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
    Callable,
    getModelFile,
    fetchJSON,
    dispatchCallback,
    isIntegralNumber,
    exists,
} = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

const {
    Sampler,
} = __webpack_require__(/*! ./samplers.js */ "./src/samplers.js");


const {
    LogitsProcessorList,
    GenerationConfig,
    ForceTokensLogitsProcessor,
    ForcedBOSTokenLogitsProcessor,
    ForcedEOSTokenLogitsProcessor,
    WhisperTimeStampLogitsProcessor
} = __webpack_require__(/*! ./generation.js */ "./src/generation.js");

const { executionProviders, ONNX } = __webpack_require__(/*! ./backends/onnx.js */ "./src/backends/onnx.js");
const { Tensor } = __webpack_require__(/*! ./tensor_utils */ "./src/tensor_utils.js");
const { InferenceSession, Tensor: ONNXTensor } = ONNX;

//////////////////////////////////////////////////
// Helper functions

async function constructSession(modelPath, fileName, progressCallback = null) {
    let buffer = await getModelFile(modelPath, fileName, progressCallback);

    // TODO add option for user to force specify their desired execution provider
    try {
        return await InferenceSession.create(buffer, {
            executionProviders,
        });
    } catch (err) {
        console.warn(err);
        console.warn(
            'Something went wrong during model construction (most likely a missing operation). ' +
            'Using `wasm` as a fallback. '
        )
        return await InferenceSession.create(buffer, {
            executionProviders: ['wasm']
        });
    }
}

async function sessionRun(session, inputs) {
    let output = await session.run(inputs);
    output = replaceTensors(output);
    return output;
}

function replaceTensors(obj) {
    // Convert ONNX Tensors with our custom Tensor class
    // to support additional functions
    for (let prop in obj) {
        if (obj[prop] instanceof ONNXTensor) {
            obj[prop] = new Tensor(obj[prop]);
        }
    }
    return obj;
}

function _prepare_attention_mask(self, tokens) {

    // Prepare attention mask
    let pad_token_id = self.config.pad_token_id ?? null;
    let eos_token_id = self.config.eos_token_id ?? null;
    if (isIntegralNumber(eos_token_id)) {
        eos_token_id = [eos_token_id];
    }

    let is_pad_token_in_inputs = tokens.indexOf(pad_token_id) !== -1;
    let is_pad_token_not_equal_to_eos_token_id = (eos_token_id === null) || !eos_token_id.includes(pad_token_id)

    if (is_pad_token_in_inputs && is_pad_token_not_equal_to_eos_token_id) {
        let data = BigInt64Array.from(
            // Note: != so that int matches bigint
            tokens.data.map(x => x != pad_token_id)
        )
        return new Tensor('int64', data, tokens.dims)
    } else {
        return new Tensor(
            'int64',
            new BigInt64Array(tokens.data.length).fill(1n),
            tokens.dims
        )
    }
}

function boolTensor(value) {
    // Create boolean tensor
    return new Tensor('bool', [value], [1]);
}

// JS doesn't support mixings, so we define some reused functions here, and allow "this" to be passed in

async function seq2seqLoadModel(modelPath, progressCallback) {
    let info = await Promise.all([
        fetchJSON(modelPath, 'config.json', progressCallback),
        constructSession(modelPath, 'encoder_model.onnx', progressCallback),
        constructSession(modelPath, 'decoder_model_merged.onnx', progressCallback),
        fetchJSON(modelPath, 'generation_config.json', progressCallback, false),
    ])

    // Called when all parts are loaded
    dispatchCallback(progressCallback, {
        status: 'loaded',
        name: modelPath
    });

    return info;
}
async function seq2seq_forward(self, model_inputs, {
    encoder_input_name = 'input_ids',
    add_decoder_pkv = true
} = {}) {
    let encoderOutputs = model_inputs.encoder_outputs;
    let pastKeyValues = model_inputs.past_key_values;

    if (encoderOutputs === null) {
        const encoderFeeds = {
            [encoder_input_name]: model_inputs[encoder_input_name],
        }

        if (self.session.inputNames.includes('attention_mask')) {
            encoderFeeds.attention_mask = model_inputs.attention_mask
        }
        const encoderResults = await sessionRun(self.session, encoderFeeds);
        encoderOutputs = encoderResults.last_hidden_state;
    }
    let decoderFeeds = {
        input_ids: model_inputs.decoder_input_ids,
        encoder_hidden_states: encoderOutputs,
        use_cache_branch: boolTensor(pastKeyValues !== null)
    };

    if (self.decoder_merged_session.inputNames.includes('encoder_attention_mask')) {
        decoderFeeds.encoder_attention_mask = model_inputs.attention_mask
    }
    self.addPastKeyValues(decoderFeeds, pastKeyValues, add_decoder_pkv);

    const decoderResults = await sessionRun(self.decoder_merged_session, decoderFeeds);
    let logits = decoderResults.logits;
    pastKeyValues = self.getPastKeyValues(decoderResults);

    return new Seq2SeqLMOutput(logits, pastKeyValues, encoderOutputs);
}

function seq2seqStartBeams(self, inputTokenIds, numOutputTokens, requires_attention_mask = true) {
    let beams = [];
    let beamId = 0;
    for (let tokens of inputTokenIds) {
        // TODO: Improve
        // Currently, just add back batch dimension.
        // In future, allow for true parallel execution
        tokens.dims = [1, ...tokens.dims]

        // Create beam
        let start = {
            inputs: tokens,
            encoder_outputs: null,
            past_key_values: null,

            // decoder_input_ids == output_token_ids
            output_token_ids: [self.config.decoder_start_token_id],
            done: false,
            score: 0,
            id: beamId++ // assign unique id to beams
        }

        if (requires_attention_mask) {
            start.attention_mask = _prepare_attention_mask(self, tokens);
        }

        beams.push(start);
    }

    return beams;
}

async function seq2seqRunBeam(self, beam, {
    input_name = 'input_ids',
} = {}
) {
    // 1. Prepare
    let model_inputs = {
        [input_name]: beam.inputs,
        decoder_input_ids: self.toI64Tensor(beam.output_token_ids.slice(-1)),
        encoder_outputs: beam.encoder_outputs,
        past_key_values: beam.past_key_values,
    }
    if (beam.attention_mask) {
        model_inputs.attention_mask = beam.attention_mask
    }

    // 2. Run
    let output = await self.forward(model_inputs);

    // 3. Update
    beam.past_key_values = output.past_key_values;
    beam.encoder_outputs = output.encoder_outputs;

    return output;
}

async function textgen_forward(self, model_inputs) {
    let past_key_values = model_inputs.past_key_values;
    let decoderFeeds = {
        input_ids: model_inputs.input_ids,
        attention_mask: model_inputs.attention_mask,
        use_cache_branch: boolTensor(past_key_values !== null)
    }
    self.addPastKeyValues(decoderFeeds, past_key_values)

    let decoderResults = await sessionRun(self.session, decoderFeeds);
    let logits = decoderResults.logits;

    past_key_values = self.getPastKeyValues(decoderResults);
    return { logits, past_key_values };
}

function textgenStartBeams(self, inputTokenIds, numOutputTokens, inputs_attention_mask) {
    let beams = [];

    let beamId = 0;
    for (let tokens of inputTokenIds) {
        // TODO: Improve
        // Currently, just add back batch dimension.
        // In future, allow for true parallel execution
        tokens.dims = [1, ...tokens.dims]

        let attn_mask;
        if (inputs_attention_mask) {
            attn_mask = inputs_attention_mask.get(beamId)
            attn_mask.dims = [1, ...attn_mask.dims]

        } else {
            attn_mask = _prepare_attention_mask(self, tokens)
        }

        let start = {
            input: tokens,
            model_input_ids: tokens,
            attention_mask: attn_mask,
            past_key_values: null,

            output_token_ids: [],
            num_output_tokens: numOutputTokens,

            done: false,
            score: 0,
            id: beamId++ // assign unique id to beams
        }

        beams.push(start);
    }
    return beams;
}

async function textgenRunBeam(self, beam) {
    let attnMaskData = new BigInt64Array(beam.input.data.length + beam.output_token_ids.length).fill(1n)

    // 1. Prepare
    let model_inputs = {
        input_ids: beam.model_input_ids,
        attention_mask: new Tensor(
            'int64',
            attnMaskData,
            [1, attnMaskData.length]
        ),
        past_key_values: beam.past_key_values,
    }

    // 2. Run
    let output = await self.forward(model_inputs);

    // 3. Update
    beam.past_key_values = output.past_key_values;

    return output;
}

function textgenUpdatebeam(beam, newTokenId) {
    beam.output_token_ids = [...beam.output_token_ids, newTokenId];
    beam.model_input_ids = new Tensor('int64', [BigInt(newTokenId)], [1, 1]);
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Base class
class PreTrainedModel extends Callable {
    constructor(config, session) {
        super();

        this.config = config;
        this.session = session;

    }

    async dispose() {
        // Dispose of all ONNX sessions sessions
        // TODO use: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry

        let promises = [];
        for (let key of Object.keys(this)) {
            let item = this[key];
            if (item instanceof InferenceSession) {
                promises.push(item.handler.dispose())
            }
        }
        return await Promise.all(promises);
    }

    static async from_pretrained(modelPath, progressCallback = null) {

        let config = await fetchJSON(modelPath, 'config.json', progressCallback);
        let modelName = config.is_encoder_decoder ? 'encoder_model.onnx' : 'model.onnx';

        // Load model
        let session = await constructSession(modelPath, modelName, progressCallback);

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        return new this(config, session);
    }

    toI64Tensor(items) {
        if (items instanceof Tensor) {
            return items;
        }
        // items is an array
        if (items.length === 0) {
            throw Error("items must be non-empty");
        }

        if (Array.isArray(items[0])) {
            // batched
            if (items.some(x => x.length !== items[0].length)) {
                throw Error("Unable to create tensor, you should probably activate truncation and/or padding with 'padding=True' and/or 'truncation=True' to have batched tensors with the same length.")
            }

            return new Tensor('int64',
                BigInt64Array.from(items.flat().map(x => BigInt(x))),
                [items.length, items[0].length]
            );
        } else {
            //flat
            return new Tensor('int64',
                BigInt64Array.from(items.map(x => BigInt(x))),
                [1, items.length]
            );
        }
    }

    async _call(model_inputs) {
        return await sessionRun(this.session, model_inputs);
    }

    async forward(model_inputs) {
        throw Error("forward should be implemented in subclasses.")
    }

    /**
     * @param {GenerationConfig} generation_config 
     * @param {number} input_ids_seq_length 
     * @returns {LogitsProcessorList}
     */
    _get_logits_processor(
        generation_config,
        input_ids_seq_length,
        // encoder_input_ids, TODO
        // prefix_allowed_tokens_fn, TODO
        logits_processor = null
    ) {
        const processors = new LogitsProcessorList();

        // if (generation_config.diversity_penalty !== null && generation_config.diversity_penalty > 0.0) {
        //     processors.push(new HammingDiversityLogitsProcessor(
        //         generation_config.diversity_penalty,
        //         generation_config.num_beams,
        //         generation_config.num_beam_groups
        //     ));
        // }

        // if (generation_config.encoder_repetition_penalty !== null && generation_config.encoder_repetition_penalty !== 1.0) {
        //     processors.push(new EncoderRepetitionPenaltyLogitsProcessor(
        //         generation_config.encoder_repetition_penalty,
        //         encoder_input_ids
        //     ));
        // }

        // if (generation_config.repetition_penalty !== null && generation_config.repetition_penalty !== 1.0) {
        //     processors.push(new RepetitionPenaltyLogitsProcessor(generation_config.repetition_penalty));
        // }

        // if (generation_config.no_repeat_ngram_size !== null && generation_config.no_repeat_ngram_size > 0) {
        //     processors.push(new NoRepeatNGramLogitsProcessor(generation_config.no_repeat_ngram_size));
        // }

        // if (generation_config.encoder_no_repeat_ngram_size !== null && generation_config.encoder_no_repeat_ngram_size > 0) {
        //     if (this.config.is_encoder_decoder) {
        //         processors.push(new EncoderNoRepeatNGramLogitsProcessor(
        //             generation_config.encoder_no_repeat_ngram_size,
        //             encoder_input_ids
        //         ));
        //     } else {
        //         throw new Error("It's impossible to use `encoder_no_repeat_ngram_size` with decoder-only architecture");
        //     }
        // }

        // if (generation_config.bad_words_ids !== null) {
        //     processors.push(new NoBadWordsLogitsProcessor(generation_config.bad_words_ids, generation_config.eos_token_id));
        // }

        // if (generation_config.min_length !== null && generation_config.eos_token_id !== null && generation_config.min_length > 0) {
        //     processors.push(new MinLengthLogitsProcessor(generation_config.min_length, generation_config.eos_token_id));
        // }

        // if (generation_config.min_new_tokens !== null && generation_config.eos_token_id !== null && generation_config.min_new_tokens > 0) {
        //     processors.push(new MinNewTokensLengthLogitsProcessor(
        //         input_ids_seq_length,
        //         generation_config.min_new_tokens,
        //         generation_config.eos_token_id
        //     ));
        // }

        // if (prefix_allowed_tokens_fn !== null) {
        //     processors.push(new PrefixConstrainedLogitsProcessor(
        //         prefix_allowed_tokens_fn,
        //         generation_config.num_beams / generation_config.num_beam_groups
        //     ));
        // }


        if (generation_config.forced_bos_token_id !== null) {
            processors.push(new ForcedBOSTokenLogitsProcessor(generation_config.forced_bos_token_id));
        }

        if (generation_config.forced_eos_token_id !== null) {
            processors.push(new ForcedEOSTokenLogitsProcessor(
                generation_config.max_length,
                generation_config.forced_eos_token_id
            ));
        }

        // if (generation_config.remove_invalid_values === true) {
        //     processors.push(new InfNanRemoveLogitsProcessor());
        // }

        // if (generation_config.exponential_decay_length_penalty !== null) {
        //     processors.push(new ExponentialDecayLengthPenalty(
        //         generation_config.exponential_decay_length_penalty,
        //         generation_config.eos_token_id,
        //         input_ids_seq_length
        //     ));
        // }

        // if (generation_config.suppress_tokens !== null) {
        //     processors.push(new SuppressTokensLogitsProcessor(generation_config.suppress_tokens));
        // }

        // if (generation_config.begin_suppress_tokens !== null) {
        //     let begin_index = input_ids_seq_length;
        //     begin_index = (input_ids_seq_length > 1 || generation_config.forced_bos_token_id === null) ? begin_index : begin_index + 1;
        //     if (generation_config.forced_decoder_ids !== null) {
        //         begin_index += generation_config.forced_decoder_ids[generation_config.forced_decoder_ids.length - 1][0];
        //     }
        //     processors.push(new SuppressTokensAtBeginLogitsProcessor(generation_config.begin_suppress_tokens, begin_index));
        // }

        if (generation_config.forced_decoder_ids !== null) {
            processors.push(new ForceTokensLogitsProcessor(generation_config.forced_decoder_ids));
        }

        if (logits_processor !== null) {
            processors.extend(logits_processor)
        }

        // `LogitNormalization` should always be the last logit processor, when present
        // if (generation_config.renormalize_logits === true) {
        //     processors.push(new LogitNormalization());
        // }

        return processors;
    }

    _get_generation_config(generation_config) {
        // Create empty generation config (contains defaults)
        let gen_config = new GenerationConfig();

        // Apply model's generation config
        Object.assign(gen_config, this.generation_config);

        // Finally, use any generation config specified by the user
        // when calling `generate`
        if (generation_config !== null) {
            Object.assign(gen_config, generation_config);
        }
        return gen_config;
    }
    async generate(
        inputs,
        generation_config = null,
        logits_processor = null,
        {
            inputs_attention_mask = null
        } = {},
    ) {

        if (inputs.length === 0) {
            throw Error("Must supply a non-empty array of input token ids.")
        }

        // Update generation config with defaults
        generation_config = this._get_generation_config(generation_config);

        logits_processor = logits_processor ?? new LogitsProcessorList()

        // TODO Update generation config
        // this.generation_config

        // Update logits processor
        logits_processor = this._get_logits_processor(
            generation_config,
            inputs.length,
            logits_processor
        )

        // TODO implement early_stopping
        // https://huggingface.co/blog/how-to-generate

        let numOutputTokens = 1;
        const maxOutputTokens = numOutputTokens + (generation_config.max_new_tokens ?? Infinity);

        let sampler = Sampler.getSampler(generation_config);

        let beams = this.getStartBeams(inputs, numOutputTokens, inputs_attention_mask);

        while (beams.some(x => !x.done) && numOutputTokens < maxOutputTokens) {
            let newest_beams = [];
            for (let beam of beams) {
                if (beam.done) {
                    // TODO add length penalty (for ending early)
                    // Add this beam back into the pool
                    newest_beams.push(beam);
                    continue
                }

                let output = await this.runBeam(beam);
                logits_processor(beam.output_token_ids, output.logits)

                let sampledTokens = sampler(output.logits);

                for (let [newTokenId, logProb] of sampledTokens) {
                    // use previous beam as a starting point
                    let newBeam = { ...beam };

                    // update new beam
                    this.updateBeam(newBeam, newTokenId);

                    newBeam.score += logProb;

                    if (newTokenId === this.config.eos_token_id) {
                        newBeam.done = true;
                    }
                    newest_beams.push(newBeam);
                }
            }
            ++numOutputTokens;

            // Next, we get the best beams, per ID
            newest_beams = this.groupBeams(newest_beams).map(
                group => group
                    .sort((a, b) => b.score - a.score)  // sort based on score
                    .slice(0, generation_config.num_beams)        // remove outside beam width
            );

            // Flatten beams
            beams = newest_beams.flat();

            // Run callback
            if (generation_config.callback_function) {
                generation_config.callback_function(beams);
            }
        }

        return this.groupBeams(beams).map(
            batch => {
                if (generation_config.num_return_sequences > 1) {
                    return batch.slice(0, generation_config.num_return_sequences).map(x => x.output_token_ids);
                } else {
                    return [batch[0].output_token_ids];
                }
            }
        )
    }
    groupBeams(beams) {
        // Group beams by their ids
        const groups = {};
        for (const obj of beams) {
            if (groups[obj.id] === undefined) {
                groups[obj.id] = [obj];
            } else {
                groups[obj.id].push(obj);
            }
        }

        return Object.values(groups);
    }
    getPastKeyValues(decoderResults) {
        const pkvs = {};

        for (const name in decoderResults) {
            if (name.startsWith('present')) {
                pkvs[name.replace('present', 'past_key_values')] = decoderResults[name]
            }
        }
        return pkvs;
    }
    addPastKeyValues(decoderFeeds, pastKeyValues, hasDecoder = false) {
        if (pastKeyValues === null) {
            // TODO support batches (i.e., batch_size > 1)
            if (hasDecoder) {
                let encoder_dims = [1, this.num_encoder_heads, 0, this.encoder_dim_kv];
                for (let i = 0; i < this.num_encoder_layers; ++i) {
                    decoderFeeds[`past_key_values.${i}.encoder.key`] = new Tensor('float32', [], encoder_dims)
                    decoderFeeds[`past_key_values.${i}.encoder.value`] = new Tensor('float32', [], encoder_dims)
                }

                let decoder_dims = [1, this.num_decoder_heads, 0, this.decoder_dim_kv];
                for (let i = 0; i < this.num_decoder_layers; ++i) {
                    decoderFeeds[`past_key_values.${i}.decoder.key`] = new Tensor('float32', [], decoder_dims)
                    decoderFeeds[`past_key_values.${i}.decoder.value`] = new Tensor('float32', [], decoder_dims)
                }

            } else {
                let dims = [1, this.num_heads, 0, this.dim_kv]
                for (let i = 0; i < this.num_layers; ++i) {
                    decoderFeeds[`past_key_values.${i}.key`] = new Tensor('float32', [], dims)
                    decoderFeeds[`past_key_values.${i}.value`] = new Tensor('float32', [], dims)
                }
            }

        } else {
            Object.assign(decoderFeeds, pastKeyValues)
        }
    }
}
//////////////////////////////////////////////////

// Bert models
class BertPreTrainedModel extends PreTrainedModel { }
class BertModel extends BertPreTrainedModel { }
class BertForMaskedLM extends BertPreTrainedModel {
    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new MaskedLMOutput(logits)
    }
}
class BertForSequenceClassification extends BertPreTrainedModel {
    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new SequenceClassifierOutput(logits)
    }
}
class BertForQuestionAnswering extends BertPreTrainedModel {
    async _call(model_inputs) {
        let outputs = await super._call(model_inputs);
        return new QuestionAnsweringModelOutput(outputs.start_logits, outputs.end_logits);
    }
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// DistilBert models
class DistilBertPreTrainedModel extends PreTrainedModel { }
class DistilBertModel extends DistilBertPreTrainedModel { }
class DistilBertForSequenceClassification extends DistilBertPreTrainedModel {
    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new SequenceClassifierOutput(logits)
    }
}
class DistilBertForQuestionAnswering extends DistilBertPreTrainedModel {
    async _call(model_inputs) {
        let outputs = await super._call(model_inputs);
        return new QuestionAnsweringModelOutput(outputs.start_logits, outputs.end_logits);
    }
}
class DistilBertForMaskedLM extends DistilBertPreTrainedModel {
    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new MaskedLMOutput(logits)
    }
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// DistilBert models
class AlbertPreTrainedModel extends PreTrainedModel { }
class AlbertModel extends AlbertPreTrainedModel { }
class AlbertForSequenceClassification extends AlbertPreTrainedModel {
    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new SequenceClassifierOutput(logits)
    }
}
class AlbertForQuestionAnswering extends AlbertPreTrainedModel {
    async _call(model_inputs) {
        let outputs = await super._call(model_inputs);
        return new QuestionAnsweringModelOutput(outputs.start_logits, outputs.end_logits);
    }
}
class AlbertForMaskedLM extends AlbertPreTrainedModel {
    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new MaskedLMOutput(logits)
    }
}
//////////////////////////////////////////////////


//////////////////////////////////////////////////
// T5 models
class T5PreTrainedModel extends PreTrainedModel { };

class T5Model extends T5PreTrainedModel {
    async generate(...args) {
        throw Error(
            "The current model class (T5Model) is not compatible with `.generate()`, as it doesn't have a language model head. Please use one of the following classes instead: {'T5ForConditionalGeneration'}"
        )
    }
}

class T5ForConditionalGeneration extends T5PreTrainedModel {
    constructor(config, session, decoder_merged_session, generation_config) {
        super(config, session);
        this.decoder_merged_session = decoder_merged_session;
        this.generation_config = generation_config;

        this.num_decoder_layers = this.config.num_decoder_layers;
        this.num_decoder_heads = this.config.num_heads;
        this.decoder_dim_kv = this.config.d_kv;

        this.num_encoder_layers = this.config.num_layers;
        this.num_encoder_heads = this.config.num_heads;
        this.encoder_dim_kv = this.config.d_kv;
    }

    static async from_pretrained(modelPath, progressCallback = null) {
        let info = await seq2seqLoadModel(modelPath, progressCallback);
        return new this(...info);
    }

    getStartBeams(inputs, numOutputTokens, ...args) {
        return seq2seqStartBeams(this, inputs, numOutputTokens);
    }

    async runBeam(beam) {
        return await seq2seqRunBeam(this, beam);
    }
    updateBeam(beam, newTokenId) {
        beam.output_token_ids = [...beam.output_token_ids, newTokenId];
    }

    async forward(model_inputs) {
        return await seq2seq_forward(this, model_inputs);
    }
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Bart models
class BartPretrainedModel extends PreTrainedModel { };

class BartModel extends BartPretrainedModel {
    async generate(...args) {
        throw Error(
            "The current model class (BartModel) is not compatible with `.generate()`, as it doesn't have a language model head. Please use one of the following classes instead: {'BartForConditionalGeneration'}"
        )
    }
}

class BartForConditionalGeneration extends BartPretrainedModel {
    constructor(config, session, decoder_merged_session, generation_config) {
        super(config, session);
        this.decoder_merged_session = decoder_merged_session;
        this.generation_config = generation_config;

        this.num_decoder_layers = this.config.decoder_layers;
        this.num_decoder_heads = this.config.decoder_attention_heads;
        this.decoder_dim_kv = this.config.d_model / this.num_decoder_heads;

        this.num_encoder_layers = this.config.encoder_layers;
        this.num_encoder_heads = this.config.encoder_attention_heads;
        this.encoder_dim_kv = this.config.d_model / this.num_encoder_heads;
    }

    static async from_pretrained(modelPath, progressCallback = null) {
        let info = await seq2seqLoadModel(modelPath, progressCallback);
        return new this(...info);
    }

    getStartBeams(inputs, numOutputTokens, ...args) {
        return seq2seqStartBeams(this, inputs, numOutputTokens);
    }

    async runBeam(beam) {
        return await seq2seqRunBeam(this, beam);
    }
    updateBeam(beam, newTokenId) {
        beam.output_token_ids = [...beam.output_token_ids, newTokenId];
    }

    async forward(model_inputs) {
        return await seq2seq_forward(this, model_inputs);
    }
}

//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Roberta models
class RobertaPreTrainedModel extends PreTrainedModel { }
class RobertaModel extends RobertaPreTrainedModel { }
class RobertaForMaskedLM extends RobertaPreTrainedModel {
    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new MaskedLMOutput(logits)
    }
}
class RobertaForSequenceClassification extends RobertaPreTrainedModel {
    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new SequenceClassifierOutput(logits)
    }
}
class RobertaForQuestionAnswering extends RobertaPreTrainedModel {
    async _call(model_inputs) {
        let outputs = await super._call(model_inputs);
        return new QuestionAnsweringModelOutput(outputs.start_logits, outputs.end_logits);
    }
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// T5 models
class WhisperPreTrainedModel extends PreTrainedModel { };

class WhisperModel extends WhisperPreTrainedModel {
    async generate(...args) {
        throw Error(
            "The current model class (WhisperModel) is not compatible with `.generate()`, as it doesn't have a language model head. Please use one of the following classes instead: {'WhisperForConditionalGeneration'}"
        )
    }
}

class WhisperForConditionalGeneration extends WhisperPreTrainedModel {
    constructor(config, session, decoder_merged_session, generation_config) {
        super(config, session);
        this.decoder_merged_session = decoder_merged_session;
        this.generation_config = generation_config;

        this.num_decoder_layers = this.config.decoder_layers;
        this.num_decoder_heads = this.config.decoder_attention_heads;
        this.decoder_dim_kv = this.config.d_model / this.num_decoder_heads;

        this.num_encoder_layers = this.config.encoder_layers;
        this.num_encoder_heads = this.config.encoder_attention_heads;
        this.encoder_dim_kv = this.config.d_model / this.num_encoder_heads;


    }

    async generate(
        inputs,
        generation_config = null,
        logits_processor = null,
    ) {
        // Create generation config object
        generation_config = this._get_generation_config(generation_config);


        // Whisper has additional options for returning timestamps
        generation_config.return_timestamps ??= false;

        // TODO add language and task

        if (generation_config.return_timestamps) {
            logits_processor = [new WhisperTimeStampLogitsProcessor(generation_config)]
        }



        // Modify forced_decoder_ids_mapping. This is the way HF also does it,
        // but it would probably be best to not modify the class' mapping, and
        // rather create a copy?


        return super.generate(inputs, generation_config, logits_processor)
    }

    static async from_pretrained(modelPath, progressCallback = null) {
        let info = await seq2seqLoadModel(modelPath, progressCallback);
        return new this(...info);
    }

    getStartBeams(inputTokenIds, numOutputTokens, ...args) {
        // arguments ignored in this case
        return seq2seqStartBeams(this, inputTokenIds, numOutputTokens, false);
    }

    async runBeam(beam) {
        return await seq2seqRunBeam(this, beam, {
            input_name: 'input_features',
        });
    }
    updateBeam(beam, newTokenId) {
        beam.output_token_ids = [...beam.output_token_ids, newTokenId];
    }

    async forward(model_inputs) {
        return await seq2seq_forward(this, model_inputs, {
            encoder_input_name: 'input_features',
        });
    }
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
class VisionEncoderDecoderModel extends PreTrainedModel {
    constructor(config, session, decoder_merged_session) {
        super(config, session);
        this.decoder_merged_session = decoder_merged_session;

        this.num_layers = this.config.decoder.n_layer;
        this.num_heads = this.config.decoder.n_head;
        this.dim_kv = this.config.decoder.n_embd / this.num_heads;
    }

    static async from_pretrained(modelPath, progressCallback = null) {

        let [config, session, decoder_merged_session] = await Promise.all([
            fetchJSON(modelPath, 'config.json', progressCallback),
            constructSession(modelPath, 'encoder_model.onnx', progressCallback),
            constructSession(modelPath, 'decoder_merged_session.onnx', progressCallback),
        ])

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        return new this(config, session, decoder_merged_session);
    }

    getStartBeams(inputs, numOutputTokens, ...args) {
        return seq2seqStartBeams(this, inputs, numOutputTokens);
    }
    async runBeam(beam) {
        return seq2seqRunBeam(this, beam, {
            input_name: 'pixel_values',
        });
    }

    updateBeam(beam, newTokenId) {
        beam.output_token_ids = [...beam.output_token_ids, newTokenId];
    }

    async forward(model_inputs) {
        return await seq2seq_forward(this, model_inputs, {
            encoder_input_name: 'pixel_values',
            add_decoder_pkv: false
        })
    }
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// CLIP models
class CLIPPreTrainedModel extends PreTrainedModel { }
class CLIPModel extends CLIPPreTrainedModel {

}

//////////////////////////////////////////////////

//////////////////////////////////////////////////
// GPT2 models
class GPT2PreTrainedModel extends PreTrainedModel { }
class GPT2Model extends GPT2PreTrainedModel {
    async generate(...args) {
        throw Error(
            "The current model class (GPT2Model) is not compatible with `.generate()`, as it doesn't have a language model head. Please use one of the following classes instead: {'GPT2LMHeadModel'}"
        )
    }
}

class GPT2LMHeadModel extends GPT2PreTrainedModel {
    constructor(config, session) {
        super(config, session);

        // config doesn't contain pad_token_id, so we assume it is the eos_token_id
        this.config.pad_token_id = this.config.eos_token_id

        this.num_heads = this.config.n_head
        this.num_layers = this.config.n_layer
        this.dim_kv = this.config.n_embd / this.num_heads;
    }

    getStartBeams(inputTokenIds, numOutputTokens, inputs_attention_mask) {
        return textgenStartBeams(this, inputTokenIds, numOutputTokens, inputs_attention_mask)
    }


    async runBeam(beam) {
        return await textgenRunBeam(this, beam);
    }

    updateBeam(beam, newTokenId) {
        return textgenUpdatebeam(beam, newTokenId);
    }

    async forward(model_inputs) {
        return await textgen_forward(this, model_inputs)
    }

}
// class GPT2ForSequenceClassification extends GPT2PreTrainedModel {
// TODO
// }
//////////////////////////////////////////////////


//////////////////////////////////////////////////
// CodeGen models
class CodeGenPreTrainedModel extends PreTrainedModel { }
class CodeGenModel extends CodeGenPreTrainedModel {
    async generate(...args) {
        throw Error(
            "The current model class (CodeGenModel) is not compatible with `.generate()`, as it doesn't have a language model head. Please use one of the following classes instead: {'CodeGenForCausalLM'}"
        )
    }
}

class CodeGenForCausalLM extends CodeGenPreTrainedModel {
    constructor(config, session) {
        super(config, session);

        // config doesn't contain pad_token_id, so we assume it is the eos_token_id
        this.config.pad_token_id = this.config.eos_token_id

        this.num_heads = this.config.n_head
        this.num_layers = this.config.n_layer
        this.dim_kv = this.config.n_embd / this.num_heads;
    }

    getStartBeams(inputTokenIds, numOutputTokens, inputs_attention_mask) {
        return textgenStartBeams(this, inputTokenIds, numOutputTokens, inputs_attention_mask)
    }

    async runBeam(beam) {
        return await textgenRunBeam(this, beam);
    }

    updateBeam(beam, newTokenId) {
        return textgenUpdatebeam(beam, newTokenId);
    }

    async forward(model_inputs) {
        return await textgen_forward(this, model_inputs)
    }

}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
class ViTForImageClassification extends PreTrainedModel {

    async _call(model_inputs) {
        let logits = (await super._call(model_inputs)).logits;
        return new SequenceClassifierOutput(logits)
    }
}

//////////////////////////////////////////////////


//////////////////////////////////////////////////
// AutoModels, used to simplify construction of PreTrainedModels
// (uses config to instantiate correct class)
class AutoModel {
    // Helper class to determine model type from config

    static async from_pretrained(modelPath, progressCallback = null) {

        let config = await fetchJSON(modelPath, 'config.json', progressCallback);
        let modelName = config.is_encoder_decoder ? 'encoder_model.onnx' : 'model.onnx';

        let session = await constructSession(modelPath, modelName, progressCallback);

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        switch (config.model_type) {
            case 'bert':
                return new BertModel(config, session);
            case 'albert':
                return new AlbertModel(config, session);
            case 'distilbert':
                return new DistilBertModel(config, session);
            case 't5':
                return new T5Model(config, session);
            case 'gpt2':
                return new GPT2Model(config, session);
            case 'codegen':
                return new CodeGenModel(config, session);
            case 'bart':
                return new BartModel(config, session);
            case 'roberta':
                return new RobertaModel(config, session);
            case 'whisper':
                return new WhisperModel(config, session);
            case 'clip':
                return new CLIPModel(config, session);

            default:
                console.warn(`Unknown model class "${config.model_type}", attempting to construct from base class.`);
                return new PreTrainedModel(config, session);
        }
    }
}

class AutoModelForSequenceClassification {

    static async from_pretrained(modelPath, progressCallback = null) {

        let [config, session] = await Promise.all([
            fetchJSON(modelPath, 'config.json', progressCallback),
            constructSession(modelPath, 'model.onnx', progressCallback)
        ]);

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        switch (config.model_type) {
            case 'bert':
                return new BertForSequenceClassification(config, session);
            case 'albert':
                return new AlbertForSequenceClassification(config, session);
            case 'distilbert':
                return new DistilBertForSequenceClassification(config, session);
            case 'roberta':
                return new RobertaForSequenceClassification(config, session);

            default:
                throw Error(`Unsupported model type: ${config.model_type}`)
        }
    }
}

class AutoModelForSeq2SeqLM {
    static modelClassMapping = {
        't5': T5ForConditionalGeneration,
        'bart': BartForConditionalGeneration,
        'whisper': WhisperForConditionalGeneration,
    }
    static async from_pretrained(modelPath, progressCallback = null) {
        let info = await seq2seqLoadModel(modelPath, progressCallback);
        let config = info[0];
        let cls = this.modelClassMapping[config.model_type];
        if (!cls) {
            throw Error(`Unsupported model type: ${config.model_type}`)
        }
        return new cls(...info)
    }
}

class AutoModelForCausalLM {
    static async from_pretrained(modelPath, progressCallback = null) {

        let [config, session] = await Promise.all([
            fetchJSON(modelPath, 'config.json', progressCallback),
            constructSession(modelPath, 'decoder_model_merged.onnx', progressCallback)
        ])

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        switch (config.model_type) {
            case 'gpt2':
                return new GPT2LMHeadModel(
                    config,
                    session
                );

            case 'codegen':
                return new CodeGenForCausalLM(
                    config,
                    session
                )

            default:
                throw Error(`Unsupported model type: ${config.model_type}`)
        }
    }
}

class AutoModelForMaskedLM {

    static async from_pretrained(modelPath, progressCallback = null) {

        let config = await fetchJSON(modelPath, 'config.json', progressCallback);
        let modelName = config.is_encoder_decoder ? 'encoder_model.onnx' : 'model.onnx';

        let session = await constructSession(modelPath, modelName, progressCallback);

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        switch (config.model_type) {
            case 'bert':
                return new BertForMaskedLM(config, session);
            case 'albert':
                return new AlbertForMaskedLM(config, session);
            case 'distilbert':
                return new DistilBertForMaskedLM(config, session);
            case 'roberta':
                return new RobertaForMaskedLM(config, session);

            default:
                console.warn(`Unknown model class "${config.model_type}", attempting to construct from base class.`);
                return new PreTrainedModel(config, session);
        }
    }
}

class AutoModelForQuestionAnswering {

    static async from_pretrained(modelPath, progressCallback = null) {

        let [config, session] = await Promise.all([
            fetchJSON(modelPath, 'config.json', progressCallback),
            constructSession(modelPath, 'model.onnx', progressCallback)
        ]);

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        switch (config.model_type) {
            case 'bert':
                return new BertForQuestionAnswering(config, session);
            case 'albert':
                return new AlbertForQuestionAnswering(config, session);
            case 'distilbert':
                return new DistilBertForQuestionAnswering(config, session);
            case 'roberta':
                return new RobertaForQuestionAnswering(config, session);

            default:
                throw Error(`Unsupported model type: ${config.model_type}`)
        }
    }
}

class AutoModelForVision2Seq {
    static async from_pretrained(modelPath, progressCallback = null) {

        let [config, session, decoder_merged_session] = await Promise.all([
            fetchJSON(modelPath, 'config.json', progressCallback),
            constructSession(modelPath, 'encoder_model.onnx', progressCallback),
            constructSession(modelPath, 'decoder_model_merged.onnx', progressCallback)
        ])

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        switch (config.model_type) {
            case 'vision-encoder-decoder':
                return new VisionEncoderDecoderModel(
                    config,
                    session,
                    decoder_merged_session
                );
            default:
                throw Error(`Unsupported model type: ${config.model_type}`)
        }
    }
}

class AutoModelForImageClassification {
    static async from_pretrained(modelPath, progressCallback = null) {

        let [config, session] = await Promise.all([
            fetchJSON(modelPath, 'config.json', progressCallback),
            constructSession(modelPath, 'model.onnx', progressCallback),
        ])

        // Called when all parts are loaded
        dispatchCallback(progressCallback, {
            status: 'loaded',
            name: modelPath
        });

        switch (config.model_type) {
            case 'vit':
                return new ViTForImageClassification(
                    config,
                    session,
                );
            default:
                throw Error(`Unsupported model type: ${config.model_type}`)
        }
    }

}
//////////////////////////////////////////////////

//////////////////////////////////////////////////
class Seq2SeqLMOutput {
    constructor(logits, past_key_values, encoder_outputs) {
        this.logits = logits;
        this.past_key_values = past_key_values;
        this.encoder_outputs = encoder_outputs;
    }
}

class SequenceClassifierOutput {
    constructor(logits) {
        this.logits = logits;
    }
}

class MaskedLMOutput {
    constructor(logits) {
        this.logits = logits;
    }
}

class QuestionAnsweringModelOutput {
    constructor(start_logits, end_logits) {
        this.start_logits = start_logits;
        this.end_logits = end_logits;
    }
}

module.exports = {
    AutoModel,
    AutoModelForSeq2SeqLM,
    AutoModelForSequenceClassification,
    AutoModelForCausalLM,
    AutoModelForMaskedLM,
    AutoModelForQuestionAnswering,
    AutoModelForVision2Seq,
    AutoModelForImageClassification,
    T5ForConditionalGeneration
};


/***/ }),

/***/ "./src/pipelines.js":
/*!**************************!*\
  !*** ./src/pipelines.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
    Callable,
    softmax,
    getTopItems,
    cos_sim,
    pathJoin,
    isString,
    getFile
} = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

const {
    AutoTokenizer
} = __webpack_require__(/*! ./tokenizers.js */ "./src/tokenizers.js");
const {
    AutoModel,
    AutoModelForSequenceClassification,
    AutoModelForQuestionAnswering,
    AutoModelForMaskedLM,
    AutoModelForSeq2SeqLM,
    AutoModelForCausalLM,
    AutoModelForVision2Seq,
    AutoModelForImageClassification,
} = __webpack_require__(/*! ./models.js */ "./src/models.js");
const {
    AutoProcessor
} = __webpack_require__(/*! ./processors.js */ "./src/processors.js");


const {
    env
} = __webpack_require__(/*! ./env.js */ "./src/env.js");

const { Tensor } = __webpack_require__(/*! ./tensor_utils.js */ "./src/tensor_utils.js");


class Pipeline extends Callable {
    constructor(task, tokenizer, model) {
        super();
        this.task = task;
        this.tokenizer = tokenizer;
        this.model = model;
    }

    async dispose() {
        return await this.model.dispose();
    }

    async _call(texts) {
        // Run tokenization
        let inputs = this.tokenizer(texts, {
            padding: true,
            truncation: true
        });

        // Run model
        let outputs = await this.model(inputs)

        return [inputs, outputs];
    }
}

class TextClassificationPipeline extends Pipeline {
    async _call(texts, {
        topk = 1
    } = {}) {

        let [inputs, outputs] = await super._call(texts);

        let id2label = this.model.config.id2label;
        let toReturn = [];
        for (let batch of outputs.logits) {
            let scores = getTopItems(softmax(batch.data), topk);

            let vals = scores.map(function (x) {
                return {
                    label: id2label[x[0]],
                    score: x[1],
                }
            });
            if (topk === 1) {
                toReturn.push(...vals);
            } else {
                toReturn.push(vals);
            }
        }

        return Array.isArray(texts) || topk === 1 ? toReturn : toReturn[0];
    }
}

class QuestionAnsweringPipeline extends Pipeline {
    async _call(question, context,
        {
            topk = 1
        } = {}
    ) {

        let inputs = this.tokenizer(question, {
            text_pair: context
        })

        let output = await this.model(inputs);

        let toReturn = [];
        for (let j = 0; j < output.start_logits.dims[0]; ++j) {
            let ids = inputs.input_ids.get(j);
            let sepIndex = ids.indexOf(this.tokenizer.sep_token_id);

            let s1 = Array.from(softmax(output.start_logits.get(j).data))
                .map((x, i) => [x, i])
                .filter(x => x[1] > sepIndex);
            let e1 = Array.from(softmax(output.end_logits.get(j).data))
                .map((x, i) => [x, i])
                .filter(x => x[1] > sepIndex);

            let options = product(s1, e1)
                .filter(x => x[0][1] <= x[1][1])
                .map(x => [x[0][1], x[1][1], x[0][0] * x[1][0]])
                .sort((a, b) => b[2] - a[2]);

            for (let k = 0; k < Math.min(options.length, topk); ++k) {
                let [start, end, score] = options[k];

                let answer_tokens = [...ids].slice(start, end + 1)

                let answer = this.tokenizer.decode(answer_tokens, {
                    skip_special_tokens: true,
                });

                // TODO add start and end?
                // NOTE: HF returns character index
                toReturn.push({
                    answer, score
                });
            }
        }

        // Mimic HF's return type based on topk
        return (topk === 1) ? toReturn[0] : toReturn;

    }
}

class FillMaskPipeline extends Pipeline {
    async _call(texts, {
        topk = 5
    } = {}) {
        // Fill the masked token in the text(s) given as inputs.

        // Run tokenization
        let [inputs, outputs] = await super._call(texts);

        // Determine indices of mask tokens
        // let mask_token_indices = inputs.input_ids.data.map(x => )

        // let logits = reshape(outputs.logits.data, outputs.logits.dims);

        let tokenizer = this.tokenizer;

        let toReturn = [];

        for (let i = 0; i < inputs.input_ids.dims[0]; ++i) {
            let ids = inputs.input_ids.get(i);
            let mask_token_index = ids.indexOf(this.tokenizer.mask_token_id)

            if (mask_token_index === -1) {
                throw Error(`Mask token (${tokenizer.mask_token}) not found in text.`)
            }
            let logits = outputs.logits.get(i);
            let itemLogits = logits.get(mask_token_index);

            let scores = getTopItems(softmax(itemLogits.data), topk);

            toReturn.push(scores.map(x => {
                let sequence = [...ids];
                sequence[mask_token_index] = x[0];

                return {
                    score: x[1],
                    token: x[0],
                    token_str: tokenizer.model.vocab[x[0]],
                    sequence: tokenizer.decode(sequence, { skip_special_tokens: true }),
                }
            }));
        }
        return Array.isArray(texts) ? toReturn : toReturn[0];
    }
}

class Text2TextGenerationPipeline extends Pipeline {
    _key = null;

    async _call(texts, generate_kwargs = {}) {
        if (!Array.isArray(texts)) {
            texts = [texts];
        }

        // Add global prefix, if present
        if (this.model.config.prefix) {
            texts = texts.map(x => this.model.config.prefix + x)
        }

        // Handle task specific params:
        let task_specific_params = this.model.config.task_specific_params
        if (task_specific_params && task_specific_params[this.task]) {
            // Add prefixes, if present
            if (task_specific_params[this.task].prefix) {
                texts = texts.map(x => task_specific_params[this.task].prefix + x)
            }

            // TODO update generation config
        }

        let input_ids = this.tokenizer(texts, {
            padding: true,
            truncation: true
        }).input_ids

        let outputTokenIds = (await this.model.generate(input_ids, generate_kwargs)).flat();

        let toReturn = this.tokenizer.batch_decode(outputTokenIds, {
            skip_special_tokens: true,
        });
        if (this._key !== null) {
            toReturn = toReturn.map(text => {
                return (this._key === null) ? text : { [this._key]: text }
            })
        }
        return toReturn
    }
}

class SummarizationPipeline extends Text2TextGenerationPipeline {
    _key = 'summary_text';
}

class TranslationPipeline extends Text2TextGenerationPipeline {
    _key = 'translation_text';
}

class TextGenerationPipeline extends Pipeline {
    async _call(texts, generate_kwargs = {}) {
        let stringInput = typeof texts === 'string' || texts instanceof String;
        if (stringInput) {
            texts = [texts];
        }

        this.tokenizer.padding_side = 'left';
        let inputs = this.tokenizer(texts, {
            padding: true,
            truncation: true,
        });

        let input_ids = inputs.input_ids;
        let attention_mask = inputs.attention_mask;

        let outputTokenIds = await this.model.generate(input_ids, generate_kwargs, null, {
            inputs_attention_mask: attention_mask
        });

        let toReturn = outputTokenIds.map((outTokens, i) => {
            let startText = texts[i].trim();
            let decoded = this.tokenizer.batch_decode(outTokens, {
                skip_special_tokens: true,
            }).map(x => {
                return {
                    generated_text: startText + x
                }
            });

            return decoded
        });

        return (stringInput && toReturn.length === 1) ? toReturn[0] : toReturn;
    }
}


class EmbeddingsPipeline extends Pipeline {
    // Should only be used with sentence-transformers
    // If you want to get the raw outputs from the model,
    // use `AutoModel.from_pretrained(...)`

    _mean_pooling(last_hidden_state, attention_mask) {
        // last_hidden_state: [batchSize, seqLength, embedDim]
        // attention_mask:    [batchSize, seqLength]

        let shape = [last_hidden_state.dims[0], last_hidden_state.dims[2]];
        let returnedData = new last_hidden_state.data.constructor(shape[0] * shape[1])
        let [batchSize, seqLength, embedDim] = last_hidden_state.dims;

        let outIndex = 0;
        for (let i = 0; i < batchSize; ++i) {
            let offset = i * embedDim * seqLength;

            for (let k = 0; k < embedDim; ++k) {
                let sum = 0;
                let count = 0;

                let attnMaskOffset = i * seqLength;
                let offset2 = offset + k;
                // Pool over all words in sequence
                for (let j = 0; j < seqLength; ++j) {
                    // index into attention mask
                    let attn = Number(attention_mask.data[attnMaskOffset + j]);

                    count += attn;
                    sum += last_hidden_state.data[offset2 + j * embedDim] * attn;
                }

                let avg = sum / count;
                returnedData[outIndex++] = avg;
            }
        }

        return new Tensor(
            last_hidden_state.type,
            returnedData,
            shape
        )
    }

    _normalize(tensor) {
        // Normalise tensors along dim=1
        // NOTE: only works for tensors of shape [batchSize, embedDim]
        // Operates in-place
        for (let batch of tensor) {
            let norm = Math.sqrt(batch.data.reduce((a, b) => a + b * b))

            for (let i = 0; i < batch.data.length; ++i) {
                batch.data[i] /= norm;
            }
        }
        return tensor;
    }

    async _call(texts) {
        let [inputs, outputs] = await super._call(texts);

        // Perform mean pooling, followed by a normalization step
        return this._normalize(this._mean_pooling(outputs.last_hidden_state, inputs.attention_mask));
    }

    cos_sim(arr1, arr2) {
        // Compute cosine similarity
        return cos_sim(arr1, arr2)
    }
}

class AutomaticSpeechRecognitionPipeline extends Pipeline {

    constructor(task, tokenizer, model, processor) {
        super(task, tokenizer, model);
        this.processor = processor;
    }

    async _preprocess(audio, sampling_rate) {
        if (isString(audio)) {
            // Attempting to load from path

            if (typeof AudioContext === 'undefined') {
                // Running in node or an environment without AudioContext
                throw Error(
                    "Unable to load audio from path/URL since `AudioContext` is not available in your environment. " +
                    "As a result, audio data must be passed directly to the processor. " +
                    "If you are running in node.js, you can use an external library (e.g., https://github.com/audiojs/web-audio-api) to do this."
                )
            }
            const response = await (await getFile(audio)).arrayBuffer();
            const audioCTX = new AudioContext({ sampleRate: sampling_rate });
            const decoded = await audioCTX.decodeAudioData(response);

            // We now replicate HuggingFace's `ffmpeg_read` method:
            // 
            // When downmixing a stereo audio file to mono using the -ac 1 option in FFmpeg,
            // the audio signal is summed across both channels to create a single mono channel.
            // However, if the audio is at full scale (i.e. the highest possible volume level),
            // the summing of the two channels can cause the audio signal to clip or distort.

            // To prevent this clipping, FFmpeg applies a scaling factor of 1/sqrt(2) (~ 0.707)
            // to the audio signal before summing the two channels. This scaling factor ensures
            // that the combined audio signal will not exceed the maximum possible level, even
            // if both channels are at full scale.

            // After applying this scaling factor, the audio signal from both channels is summed
            // to create a single mono channel. It's worth noting that this scaling factor is
            // only applied when downmixing stereo audio to mono using the -ac 1 option in FFmpeg.
            // If you're using a different downmixing method, or if you're not downmixing the
            // audio at all, this scaling factor may not be needed.
            const SCALING_FACTOR = Math.sqrt(2);

            let left = decoded.getChannelData(0);
            let right = decoded.getChannelData(1);

            audio = new Float32Array(left.length);
            for (let i = 0; i < decoded.length; i++) {
                audio[i] = SCALING_FACTOR * (left[i] + right[i]) / 2;
            }
        }

        return audio;
    }

    async _call(audio, kwargs = {}) {
        let return_timestamps = kwargs.return_timestamps ?? false;
        let chunk_length_s = kwargs.chunk_length_s ?? 0;
        let stride_length_s = kwargs.stride_length_s ?? null;
        let chunk_callback = kwargs.chunk_callback ?? null;
        let force_full_sequences = kwargs.force_full_sequences ?? false;

        // TODO
        // task = 'transcribe',
        // language = 'en',

        let single = !Array.isArray(audio)
        if (single) {
            audio = [audio]
        }

        const sampling_rate = this.processor.feature_extractor.config.sampling_rate;
        const time_precision = this.processor.feature_extractor.config.chunk_length / this.model.config.max_source_positions;

        let toReturn = [];
        for (let aud of audio) {
            aud = await this._preprocess(aud, sampling_rate)

            let chunks = [];
            if (chunk_length_s > 0) {
                if (stride_length_s === null) {
                    stride_length_s = chunk_length_s / 6;
                } else if (chunk_length_s <= stride_length_s) {
                    throw Error("`chunk_length_s` must be larger than `stride_length_s`.")
                }

                // TODO support different stride_length_s (for left and right)

                const window = sampling_rate * chunk_length_s;
                const stride = sampling_rate * stride_length_s;
                const jump = window - 2 * stride;
                let offset = 0;

                // Create subarrays of audio with overlaps

                while (offset < aud.length) {
                    let subarr = aud.subarray(offset, offset + window);
                    let feature = await this.processor(subarr);

                    let isFirst = offset === 0;
                    let isLast = offset + jump >= aud.length;
                    chunks.push({
                        stride: [
                            subarr.length,
                            isFirst ? 0 : stride,
                            isLast ? 0 : stride
                        ],
                        input_features: feature.input_features,
                        is_last: isLast
                    })
                    offset += jump;
                }

            } else {
                chunks = [{
                    stride: [aud.length, 0, 0],
                    input_features: (await this.processor(aud)).input_features,
                    is_last: true
                }]
            }



            // Generate for each set of input features
            for (let chunk of chunks) {
                // NOTE: doing sequentially for now
                let data = await this.model.generate(chunk.input_features, kwargs);


                // Get top beam
                chunk.tokens = data[0].flat()

                // convert stride to seconds
                chunk.stride = chunk.stride.map(x => x / sampling_rate);

                if (chunk_callback !== null) {
                    chunk_callback(chunk)
                }
            }

            // Merge text chunks
            let [full_text, optional] = this.tokenizer._decode_asr(chunks, {
                time_precision: time_precision,
                return_timestamps: return_timestamps,
                force_full_sequences: force_full_sequences
            });

            toReturn.push({ text: full_text, ...optional })
        }
        return single ? toReturn[0] : toReturn;
    }
}


class ImageToTextPipeline extends Pipeline {
    constructor(task, tokenizer, model, processor) {
        super(task, tokenizer, model);
        this.processor = processor;
    }

    async _call(images, generate_kwargs = {}) {
        let pixel_values = (await this.processor(images)).pixel_values;

        let toReturn = [];
        for (let batch of pixel_values) {
            batch.dims = [1, ...batch.dims]
            let output = (await this.model.generate(batch, generate_kwargs)).flat();
            let decoded = this.tokenizer.batch_decode(output, {
                skip_special_tokens: true,
            }).map(x => {
                return { generated_text: x.trim() }
            })
            toReturn.push(decoded);
        }

        return Array.isArray(images) ? toReturn : toReturn[0];
    }
}

class ImageClassificationPipeline extends Pipeline {
    constructor(task, model, processor) {
        super(task, null, model); // TODO tokenizer
        this.processor = processor;
    }

    async _call(images, {
        topk = 1
    } = {}) {

        let inputs = await this.processor(images);
        let output = await this.model(inputs);

        let id2label = this.model.config.id2label;
        let toReturn = [];
        for (let batch of output.logits) {
            let scores = getTopItems(softmax(batch.data), topk);

            let vals = scores.map(function (x) {
                return {
                    label: id2label[x[0]],
                    score: x[1],
                }
            });
            if (topk === 1) {
                toReturn.push(...vals);
            } else {
                toReturn.push(vals);
            }
        }

        return Array.isArray(images) || topk === 1 ? toReturn : toReturn[0];
    }

}

class ZeroShotImageClassificationPipeline extends Pipeline {

    constructor(task, tokenizer, model, processor) {
        super(task, tokenizer, model);
        this.processor = processor;
    }
    async _call(images, candidate_labels, {
        hypothesis_template = "This is a photo of {}"
    } = {}) {

        // Insert label into hypothesis template 
        let texts = candidate_labels.map(
            x => hypothesis_template.replace('{}', x)
        );

        // Run tokenization
        let text_inputs = this.tokenizer(texts, {
            padding: true,
            truncation: true
        });

        // Compare each image with each candidate label
        let image_inputs = await this.processor(images);
        let output = await this.model({ ...text_inputs, ...image_inputs });

        let toReturn = [];
        for (let batch of output.logits_per_image) {
            // Compute softmax per image
            let probs = softmax(batch.data);

            toReturn.push([...probs].map((x, i) => {
                return {
                    score: x,
                    label: candidate_labels[i]
                }
            }));
        }

        return Array.isArray(images) ? toReturn : toReturn[0];
    }
}

const SUPPORTED_TASKS = {
    "text-classification": {
        "tokenizer": AutoTokenizer,
        "pipeline": TextClassificationPipeline,
        "model": AutoModelForSequenceClassification,
        "default": {
            "model": "distilbert-base-uncased-finetuned-sst-2-english",
        },
        "type": "text",
    },

    "question-answering": {
        "tokenizer": AutoTokenizer,
        "pipeline": QuestionAnsweringPipeline,
        "model": AutoModelForQuestionAnswering,
        "default": {
            "model": "distilbert-base-cased-distilled-squad"
        },
        "type": "text",
    },

    "fill-mask": {
        "tokenizer": AutoTokenizer,
        "pipeline": FillMaskPipeline,
        "model": AutoModelForMaskedLM,
        "default": {
            "model": "bert-base-uncased"
        },
        "type": "text",
    },
    "summarization": {
        "tokenizer": AutoTokenizer,
        "pipeline": SummarizationPipeline,
        "model": AutoModelForSeq2SeqLM,
        "default": {
            "model": "sshleifer/distilbart-cnn-6-6"
        },
        "type": "text",
    },
    "translation": {
        "tokenizer": AutoTokenizer,
        "pipeline": TranslationPipeline,
        "model": AutoModelForSeq2SeqLM,
        "default": {
            "model": "t5-small"
        },
        "type": "text",
    },
    "text2text-generation": {
        "tokenizer": AutoTokenizer,
        "pipeline": Text2TextGenerationPipeline,
        "model": AutoModelForSeq2SeqLM,
        "default": {
            "model": "google/flan-t5-small"
        },
        "type": "text",
    },
    "text-generation": {
        "tokenizer": AutoTokenizer,
        "pipeline": TextGenerationPipeline,
        "model": AutoModelForCausalLM,
        "default": {
            "model": "gpt2"
        },
        "type": "text",
    },

    "automatic-speech-recognition": {
        "tokenizer": AutoTokenizer,
        "pipeline": AutomaticSpeechRecognitionPipeline,
        "model": AutoModelForSeq2SeqLM,
        "processor": AutoProcessor,
        "default": {
            "model": "openai/whisper-tiny.en"
        },
        "type": "multimodal",
    },

    "image-to-text": {
        "tokenizer": AutoTokenizer,
        "pipeline": ImageToTextPipeline,
        "model": AutoModelForVision2Seq,
        "processor": AutoProcessor,
        "default": {
            "model": "nlpconnect/vit-gpt2-image-captioning"
        },
        "type": "multimodal",
    },

    "image-classification": {
        // no tokenizer
        "pipeline": ImageClassificationPipeline,
        "model": AutoModelForImageClassification,
        "processor": AutoProcessor,
        "default": {
            "model": "google/vit-base-patch16-224"
        },
        "type": "multimodal",
    },

    "zero-shot-image-classification": {
        // no tokenizer
        "tokenizer": AutoTokenizer,
        "pipeline": ZeroShotImageClassificationPipeline,
        "model": AutoModel,
        "processor": AutoProcessor,
        "default": {
            "model": "openai/clip-vit-base-patch32"
        },
        "type": "multimodal",
    },

    // This task is not supported in HuggingFace transformers, but serves as a useful interface
    // for dealing with sentence-transformers (https://huggingface.co/sentence-transformers)
    "embeddings": {
        "tokenizer": AutoTokenizer,
        "pipeline": EmbeddingsPipeline,
        "model": AutoModel,
        "default": {
            "model": "sentence-transformers/all-MiniLM-L6-v2"
        },
        "type": "text",
    },
}

const TASK_NAME_MAPPING = {
    // Fix mismatch between pipeline's task name and exports (folder name)
    'text-classification': 'sequence-classification',
    'embeddings': 'default',
    'fill-mask': 'masked-lm',

    'text2text-generation': 'seq2seq-lm-with-past',
    'summarization': 'seq2seq-lm-with-past',
    'text-generation': 'causal-lm-with-past',

    'automatic-speech-recognition': 'speech2seq-lm-with-past',
    'image-to-text': 'vision2seq-lm-with-past',

    'zero-shot-image-classification': 'default',
}

const TASK_PREFIX_MAPPING = {
    // if task starts with one of these, set the corresponding folder name
    'translation': 'seq2seq-lm-with-past',
}


const TASK_ALIASES = {
    "sentiment-analysis": "text-classification",
    "ner": "token-classification",
    "vqa": "visual-question-answering",
}


async function pipeline(
    task,
    model = null,
    {
        progress_callback = null
    } = {}
) {
    // Helper method to construct pipeline

    // Apply aliases
    task = TASK_ALIASES[task] ?? task;

    // Get pipeline info
    let pipelineInfo = SUPPORTED_TASKS[task.split('_', 1)[0]];
    if (!pipelineInfo) {
        throw Error(`Unsupported pipeline: ${task}. Must be one of [${Object.keys(SUPPORTED_TASKS)}]`)
    }


    // Use model if specified, otherwise, use default
    if (!model) {
        model = pipelineInfo.default.model
        console.log(`No model specified. Using default model: "${model}".`);
    }

    // determine suffix
    let suffix = TASK_NAME_MAPPING[task];
    if (!suffix) {
        // try get from suffix
        for (const [prefix, mapping] of Object.entries(TASK_PREFIX_MAPPING)) {
            if (task.startsWith(prefix)) {
                suffix = mapping;
                break;
            }
        }
    }

    if (!suffix) {
        // Still not set... so, we default to the name given
        suffix = task;
    }

    // Construct model path
    model = pathJoin(
        (env.remoteModels) ? env.remoteURL : env.localURL, // host prefix
        model, // model name
        suffix, // task suffix
    )

    let tokenizerClass = pipelineInfo.tokenizer;
    let modelClass = pipelineInfo.model;
    let pipelineClass = pipelineInfo.pipeline;
    let processorClass = pipelineInfo.processor;

    let promises = [];

    if (tokenizerClass) {
        promises.push(
            AutoTokenizer.from_pretrained(model, progress_callback),
        )
    }
    if (modelClass) {
        promises.push(
            modelClass.from_pretrained(model, progress_callback)
        )
    }

    if (processorClass) {
        promises.push(
            processorClass.from_pretrained(model, progress_callback)
        )
    }

    // Load tokenizer and model
    let items = await Promise.all(promises)
    return new pipelineClass(task, ...items);

}


function product(...a) {
    // Cartesian product of items
    // Adapted from https://stackoverflow.com/a/43053803
    return a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e])));
}

module.exports = {
    pipeline
};


/***/ }),

/***/ "./src/processors.js":
/*!***************************!*\
  !*** ./src/processors.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const {
    Callable,
    fetchJSON,
} = __webpack_require__(/*! ./utils.js */ "./src/utils.js");


const FFT = __webpack_require__(/*! ./fft.js */ "./src/fft.js");
const { Tensor, transpose, cat } = __webpack_require__(/*! ./tensor_utils.js */ "./src/tensor_utils.js");

// For some reason, Jimp attaches to self, even in Node.
// https://github.com/jimp-dev/jimp/issues/466
const _Jimp = __webpack_require__(/*! jimp */ "./node_modules/jimp/browser/lib/jimp.js");
const Jimp = (typeof self !== 'undefined') ? (self.Jimp || _Jimp) : _Jimp;

const B64_STRING = /^data:image\/\w+;base64,/;

class AutoProcessor {
    // Helper class to determine model type from config

    static async from_pretrained(modelPath, progressCallback = null) {

        let preprocessorConfig = await fetchJSON(modelPath, 'preprocessor_config.json', progressCallback)

        let processor_class;
        let feature_extractor;

        switch (preprocessorConfig.feature_extractor_type) {
            case 'WhisperFeatureExtractor':
                feature_extractor = new WhisperFeatureExtractor(preprocessorConfig)
                break;
            case 'ViTFeatureExtractor':
                feature_extractor = new ViTFeatureExtractor(preprocessorConfig)
                break;

            default:
                if (preprocessorConfig.size !== undefined) {
                    // Assume VitFeatureExtractor
                    feature_extractor = new ViTFeatureExtractor(preprocessorConfig)

                } else {
                    throw new Error(`Unknown Feature Extractor type: ${preprocessorConfig.feature_extractor_type}`);

                }
        }

        switch (preprocessorConfig.processor_class) {
            case 'WhisperProcessor':
                processor_class = WhisperProcessor;
                break;
            default:
                // No associated processor class, use default
                processor_class = Processor;
        }

        return new processor_class(feature_extractor);
    }
}

class FeatureExtractor extends Callable {
    constructor(config) {
        super();
        this.config = config
    }
}
class ViTFeatureExtractor extends FeatureExtractor {

    constructor(config) {
        super(config);

        this.image_mean = this.config.image_mean;
        if (!Array.isArray(this.image_mean)) {
            this.image_mean = new Array(3).fill(this.image_mean);
        }

        this.image_std = this.config.image_std;
        if (!Array.isArray(this.image_std)) {
            this.image_std = new Array(3).fill(this.image_std);
        }

        this.do_rescale = this.config.do_rescale ?? true;
        this.do_normalize = this.config.do_normalize;

        this.do_resize = this.config.do_resize;
        this.size = this.config.size;
    }


    async preprocess(url) {

        let imgToLoad = url;
        if (B64_STRING.test(url)) {
            imgToLoad = imgToLoad.replace(B64_STRING, '');
            if (typeof Buffer !== 'undefined') {
                imgToLoad = Buffer.from(imgToLoad, 'base64');

            } else {
                let bytes = atob(imgToLoad);
                // create new ArrayBuffer from binary string
                imgToLoad = new Uint8Array(new ArrayBuffer(bytes.length));
                for (let i = 0; i < bytes.length; i++) {
                    imgToLoad[i] = bytes.charCodeAt(i);
                }
            }
        }

        let image = await Jimp.read(imgToLoad);

        // resize all images
        if (this.do_resize) {
            image = image.resize(this.size, this.size);
        }

        const data = image.bitmap.data;

        // Do not include alpha channel
        let convData = new Float32Array(data.length * 3 / 4);

        let outIndex = 0;
        for (let i = 0; i < data.length; i += 4) {
            for (let j = 0; j < 3; ++j) {
                convData[outIndex++] = data[i + j];
            }
        }

        if (this.do_rescale) {
            for (let i = 0; i < convData.length; ++i) {
                convData[i] = convData[i] / 255;
            }
        }

        if (this.do_normalize) {
            for (let i = 0; i < convData.length; i += 3) {
                for (let j = 0; j < 3; ++j) {
                    convData[i + j] = (convData[i + j] - this.image_mean[j]) / this.image_std[j];
                }
            }
        }

        let img = new Tensor('float32', convData, [this.size, this.size, 3]);
        let transposed = transpose(img, [2, 0, 1]);

        return transposed;
    }

    async _call(urls) {
        if (!Array.isArray(urls)) {
            urls = [urls];
        }

        // Convert any non-images to images
        let images = await Promise.all(urls.map(x => this.preprocess(x)));

        images.forEach(x => x.dims = [1, ...x.dims]) // add batch dimension

        images = cat(images);
        // TODO concatenate on dim=0
        return {
            pixel_values: images
        }
    }

}
class WhisperFeatureExtractor extends FeatureExtractor {

    calcOffset(i, w) {
        return Math.abs((i + w) % (2 * w) - w);
    }

    padReflect(array, left, right) {
        const padded = new Float32Array(array.length + left + right);
        const w = array.length - 1;

        for (let i = 0; i < array.length; ++i) {
            padded[left + i] = array[i];
        }

        for (let i = 1; i <= left; ++i) {
            padded[left - i] = array[this.calcOffset(i, w)];
        }

        for (let i = 1; i <= right; ++i) {
            padded[w + left + i] = array[this.calcOffset(w - i, w)];
        }

        return padded;
    }

    stft(frames, window) {
        // Calculates the complex Short-Time Fourier Transform (STFT) of the given framed signal.
        // 
        // NOTE: Since the window width is not a power of 2, we must 
        // perform Fast Fourier Transform with chirp-z transform:
        // https://math.stackexchange.com/questions/77118/non-power-of-2-ffts/77156#77156

        // Helper variables
        const fft_size = this.config.n_fft;
        const a = 2 * (fft_size - 1);
        const b = 2 * (2 * fft_size - 1);
        const nextP2 = 2 ** (Math.ceil(Math.log2(b)))
        const num_fft_bins = fft_size + 2;

        // Preallocate array to store output
        // double since we store complex numbers
        const data = new Float32Array(num_fft_bins * frames.length);

        // Define buffers
        // Compute chirp for transform
        const chirp = new Float32Array(b);
        const ichirp = new Float32Array(nextP2);
        const buffer1 = new Float32Array(nextP2);
        const buffer2 = new Float32Array(nextP2);
        const outBuffer = new Float32Array(nextP2);
        const outBuffer2 = new Float32Array(nextP2);
        const outBuffer3 = new Float32Array(nextP2);

        // Compute complex exponentiation
        const theta = -2 * Math.PI / fft_size;
        const baseR = Math.cos(theta);
        const baseI = Math.sin(theta);

        // Precompute helper for chirp-z transform
        for (let i = 0; i < b >> 1; ++i) {
            // Compute complex power:
            const e = (i + 1 - fft_size) ** 2 / 2.0;

            // Compute the modulus and argument of the result
            const result_mod = Math.sqrt(baseR ** 2 + baseI ** 2) ** e;
            const result_arg = e * Math.atan2(baseI, baseR);

            // Convert the result back to rectangular form
            // and assign to chirp and ichirp
            let i2 = 2 * i;
            chirp[i2] = result_mod * Math.cos(result_arg);
            chirp[i2 + 1] = result_mod * Math.sin(result_arg);

            // conjugate
            ichirp[i2] = chirp[i2];
            ichirp[i2 + 1] = - chirp[i2 + 1];
        }
        const slicedChirp = chirp.subarray(a, b);

        // create object to perform Fast Fourier Transforms
        // with `nextP2` complex numbers
        const f = new FFT(nextP2 >> 1);
        f.transform(outBuffer, ichirp);

        for (let i in frames) {
            const frame = frames[i];

            for (let j = 0; j < slicedChirp.length; j += 2) {
                const j2 = j + 1
                const j3 = j >> 1;

                const a_real = frame[j3] * window[j3];
                buffer1[j] = a_real * slicedChirp[j];
                buffer1[j2] = a_real * slicedChirp[j2];
            }
            f.transform(outBuffer2, buffer1);

            for (let j = 0; j < outBuffer.length; j += 2) {
                const j2 = j + 1;

                buffer2[j] = outBuffer2[j] * outBuffer[j] - outBuffer2[j2] * outBuffer[j2]
                buffer2[j2] = outBuffer2[j] * outBuffer[j2] + outBuffer2[j2] * outBuffer[j]
            }
            f.inverseTransform(outBuffer3, buffer2)

            const offset = i * num_fft_bins;
            for (let j = 0; j < num_fft_bins; j += 2) {
                const a_real = outBuffer3[j + a];
                const a_imag = outBuffer3[j + a + 1];
                const b_real = slicedChirp[j];
                const b_imag = slicedChirp[j + 1];

                // TODO write as transpose
                const o1 = offset + j;
                data[o1] = a_real * b_real - a_imag * b_imag
                data[o1 + 1] = a_real * b_imag + a_imag * b_real
            }
        }

        return {
            data: data,
            dims: [frames.length, num_fft_bins] // [3001, 402]
        };
    }
    fram_wave(waveform, center = true) {
        const frames = [];
        const half_window = Math.floor((this.config.n_fft - 1) / 2) + 1;
        const waveformLength = waveform.length;

        for (let i = 0; i < waveformLength + 1; i += this.config.hop_length) {

            let frame;
            if (center) {

                let frameStart = i > half_window ? i - half_window : 0;
                let frameEnd =
                    i < waveformLength - half_window
                        ? i + half_window
                        : waveformLength;

                frame = waveform.subarray(frameStart, frameEnd)

                if (frameStart === 0) {
                    frame = this.padReflect(
                        frame,
                        -i + half_window,
                        0
                    )

                } else if (frameEnd === waveformLength) {
                    frame = this.padReflect(
                        frame,
                        0,
                        i - waveformLength + half_window
                    )
                }

            } else {
                frame = new Float32Array(this.config.n_fft);
                const frameArray = waveform.subarray(i, i + this.config.n_fft);

                if (frameWidth < this.config.n_fft) {
                    frame.set(frameArray);
                    frame.fill(0, frameWidth, this.config.n_fft)
                } else {
                    frame = frameArray;
                }

            }
            frames.push(frame);
        }

        return frames;
    }

    hanning(M) {
        if (M < 1) {
            return [];
        }
        if (M === 1) {
            return [1];
        }
        const denom = M - 1;
        const cos_vals = new Float32Array(denom);
        for (let i = 0; i < denom; ++i) {
            const n = 2 * i - M + 1;
            cos_vals[i] = 0.5 + 0.5 * Math.cos(Math.PI * n / denom);
        }
        return cos_vals;
    }
    _extract_fbank_features(waveform) {
        // Compute the log-Mel spectrogram of the provided audio

        const buffer = new Float32Array(this.config.n_samples);
        buffer.set(waveform)

        const window = this.hanning(this.config.n_fft + 1)
        const frames = this.fram_wave(buffer)

        const stft = this.stft(frames, window)

        const stftData = stft.data;
        const d1 = stft.dims[0] - 1; // Ignore last row
        const d2 = stft.dims[1] >> 1; // Only need to store real numbers now

        // compute magnitudes
        // NOTE: Unlinke the original implementation, we do not
        // transpose since we perform matrix multiplication later
        const magnitudes = new Float32Array(d1 * d2);
        for (let i = 0; i < d1; ++i) {
            for (let j = 0; j < d2; ++j) {
                // let outOffset = (j * d1 + i); // transpose
                let outOffset = i * d2 + j;
                let inOffset = outOffset << 1; // * 2 since complex
                let magnitude = stftData[inOffset] ** 2 + stftData[inOffset + 1] ** 2
                magnitudes[outOffset] = magnitude;
            }
        }

        const mel_filters = this.config.mel_filters
        const num_mel_filters = mel_filters.length;

        const mel_spec = new Float32Array(num_mel_filters * d1);
        let mIndex = 0;

        // Perform matrix muliplication:
        // mel_spec = filters @ magnitudes
        //  - filters.shape=(80, 201)
        //  - magnitudes.shape=(201, 3000)
        //  - mel_spec.shape=(80, 3000)
        for (let i = 0; i < num_mel_filters; ++i) {
            const mel_filter = mel_filters[i];

            for (let j = 0; j < d1; ++j) {
                let sum = 0;

                // perform dot product
                for (let k = 0; k < d2; ++k) {
                    sum += mel_filter[k] * magnitudes[j * d2 + k];
                }

                mel_spec[mIndex++] = sum;
            }
        }

        const a_min = 1e-10;
        const log_spec = new Float32Array(mel_spec.length);

        let maxLogSpec = 0;
        for (let i = 0; i < mel_spec.length; i++) {
            const clipped = Math.max(a_min, mel_spec[i]);
            const log10 = Math.log10(clipped);
            log_spec[i] = log10;
            maxLogSpec = Math.max(log10, maxLogSpec)
        }

        for (let i = 0; i < log_spec.length; i++) {
            log_spec[i] = Math.max(log_spec[i], maxLogSpec - 8);
            log_spec[i] = (log_spec[i] + 4) / 4;
        }

        return {
            data: log_spec,
            dims: [num_mel_filters, d1]
        };
    }

    async _call(audio) {
        // audio is a float32array

        if (audio.length > this.config.n_samples) {
            console.warn(
                "Attempting to extract features for audio longer than 30 seconds. " +
                "If using a pipeline to extract transcript from a long audio clip, " +
                "remember to specify `chunk_length_s` and/or `stride_length_s`."
            );
        }
        let waveform = audio.slice(0, this.config.n_samples)

        let features = this._extract_fbank_features(waveform);

        return {
            input_features: new Tensor('float32',
                features.data,
                [1, ...features.dims]
            )
        };
    }
}

class Processor extends Callable {
    constructor(feature_extractor) {
        super();
        this.feature_extractor = feature_extractor;
        // TODO use tokenizer here?
    }
    async _call(input) {
        return await this.feature_extractor(input);
    }
}


class WhisperProcessor extends Processor {
    async _call(audio) {
        return await this.feature_extractor(audio)
    }
}


module.exports = {
    AutoProcessor
}


/***/ }),

/***/ "./src/samplers.js":
/*!*************************!*\
  !*** ./src/samplers.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
    Callable,
    indexOfMax,
    softmax,
    log_softmax,
    getTopItems
} = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

class Sampler extends Callable {
    constructor(temperature) {
        super();
        this.temperature = temperature;
    }

    _call(logits, index=-1) {
        // Sample from logits, of dims [batch, sequence_length, vocab_size].
        // If index is specified, sample from [batch, index, vocab_size].
        return this.sample(logits, index);
    }
    sample(logits, index) {
        throw Error("sample should be implemented in subclasses.")
    }
    getLogits(logits, index) {
        let vocabSize = logits.dims[2];

        let logs = logits.data;

        if (index === -1) {
            logs = logs.slice(-vocabSize);
        } else {
            let startIndex = index * vocabSize;
            logs = logs.slice(startIndex, startIndex + vocabSize);
        }

        // add temperature
        if (this.temperature > 0) {
            logs = logs.map(x => x / this.temperature)
        }
        return logs;
    }

    randomSelect(probabilities) {
        // Return index of chosen item
        let sumProbabilities = probabilities.reduce((acc, curr) => acc + curr, 0);

        let r = Math.random() * sumProbabilities;
        for (let i = 0; i < probabilities.length; ++i) {
            r -= probabilities[i];
            if (r <= 0) {
                return i;
            }
        }
        return 0; // return first (most probable) as a fallback
    }

    static getSampler(options) {
        // TODO add beam
        if (options.num_beams > 1) {
            return new BeamSearchSampler(
                options.temperature,
                options.num_beams,
                options.do_sample,
                options.top_k,
            )

        } else if (options.top_k > 0 || options.do_sample) {
            return new TopKSampler(
                options.temperature,
                options.top_k,
            )
        } else {
            return new GreedySampler(options.temperature)
        }
    }
}

class GreedySampler extends Sampler {
    sample(logits, index = -1) {
        // NOTE: no need to do log_softmax here since we only take the maximum
        let logs = this.getLogits(logits, index);
        let argmax = indexOfMax(logs);

        // Note: score is meaningless in this context, since we are performing
        // greedy search (p = 1 => log(p) = 0)
        return [
            [argmax, 0]
        ];
    }
}

class TopKSampler extends Sampler {
    constructor(temperature, k) {
        super(temperature);
        this.k = k;
    }

    sample(logits, index = -1) {
        let [batchSize, seqLength, vocabSize] = logits.dims;
        let k = vocabSize;
        if (this.k > 0) {
            k = Math.min(this.k, k);
        }

        let logs = this.getLogits(logits, index);

        // Get top k tokens
        let topLogits = getTopItems(logs, k);

        // Compute softmax over logits
        let probabilities = softmax(topLogits.map(x => x[1]));

        let sampledIndex = this.randomSelect(probabilities);

        let tokenId = topLogits[sampledIndex][0];
        let score = Math.log(probabilities[sampledIndex]);
        return [
            [tokenId, score]
        ];
    }
}

class BeamSearchSampler extends Sampler {
    constructor(temperature, num_beams, do_sample, top_k) {
        super(temperature);
        this.num_beams = num_beams; // maximum number of beams
        this.do_sample = do_sample; // if true, perform multinomial sampling

        this.top_k = top_k; // if do_sample, sample from top k items
    }

    sample(logits, index = -1) {

        let logs = this.getLogits(logits, index);

        if (this.do_sample || this.top_k > 0) {
            const [batchSize, seqLength, vocabSize] = logits.dims;

            let k = vocabSize;
            if (this.top_k > 0) {
                k = Math.min(this.top_k, k);
            }
            const topLogits = getTopItems(logs, k);

            // Compute softmax over top k logits
            const probabilities = softmax(topLogits.map(x => x[1]));

            return Array.from({ length: this.num_beams }, () => {
                const sampledIndex = this.randomSelect(probabilities);
                const tokenId = topLogits[sampledIndex][0];
                return [tokenId, Math.log(probabilities[sampledIndex])];
            });

        } else {
            // first perform log softmax to get scores over whole distribution
            const logProbabilities = log_softmax(logs);
            const topLogits = getTopItems(logProbabilities, this.num_beams);
            return topLogits;
        }
    }
}

module.exports = {
    Sampler,
    GreedySampler,
    TopKSampler,
    BeamSearchSampler
}


/***/ }),

/***/ "./src/tensor_utils.js":
/*!*****************************!*\
  !*** ./src/tensor_utils.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { ONNX } = __webpack_require__(/*! ./backends/onnx.js */ "./src/backends/onnx.js");

class Tensor extends ONNX.Tensor {
    constructor(...args) {
        if (args[0] instanceof ONNX.Tensor) {
            // Create shallow copy
            super(args[0].type, args[0].data, args[0].dims);

        } else {
            // Create new
            super(...args)
        }
    }

    *[Symbol.iterator]() {
        const [iterLength, ...iterDims] = this.dims;

        if (iterDims.length > 0) {
            const iterSize = iterDims.reduce((a, b) => a * b);
            for (let i = 0; i < iterLength; ++i) {
                yield this._subarray(i, iterSize, iterDims);
            }
        } else {
            yield* this.data
        }

    }

    get(index) {
        const iterDims = this.dims.slice(1);
        if (iterDims.length > 0) {
            const iterSize = iterDims.reduce((a, b) => a * b);
            return this._subarray(index, iterSize, iterDims);
        } else {
            return this.data[index];
        }
    }

    indexOf(item) {
        for (let index = 0; index < this.data.length; ++index) {
            // Note: == instead of === so we can match Ints with BigInts
            if (this.data[index] == item) {
                return index;
            }
        }
        return -1;
    }

    _subarray(index, iterSize, iterDims) {
        let data = this.data.subarray(index * iterSize, (index + 1) * iterSize);
        return new Tensor(this.type, data, iterDims);
    }

    tolist() {
        // Convert tensor data to a n-dimensional JS list
        return reshape(this.data, this.dims)
    }

    // TODO add .slice()
}


function reshape(data, dimensions) {

    const totalElements = data.length;
    const dimensionSize = dimensions.reduce((a, b) => a * b);

    if (totalElements !== dimensionSize) {
        throw Error(`cannot reshape array of size ${totalElements} into shape (${dimensions})`);
    }

    let reshapedArray = data;

    for (let i = dimensions.length - 1; i >= 0; i--) {
        reshapedArray = reshapedArray.reduce((acc, val) => {
            let lastArray = acc[acc.length - 1];

            if (lastArray.length < dimensions[i]) {
                lastArray.push(val);
            } else {
                acc.push([val]);
            }

            return acc;
        }, [[]]);
    }

    return reshapedArray[0];
}

function transpose(tensor, axes) {
    // Calculate the new shape of the transposed array
    // and the stride of the original array
    const shape = new Array(axes.length);
    const stride = new Array(axes.length);

    for (let i = axes.length - 1, s = 1; i >= 0; --i) {
        stride[i] = s;
        shape[i] = tensor.dims[axes[i]];
        s *= shape[i];
    }

    // Precompute inverse mapping of stride
    const invStride = axes.map((_, i) => stride[axes.indexOf(i)]);

    // Create the transposed array with the new shape
    const transposedData = new tensor.data.constructor(tensor.data.length);

    // Transpose the original array to the new array
    for (let i = 0; i < tensor.data.length; ++i) {
        let newIndex = 0;
        for (let j = tensor.dims.length - 1, k = i; j >= 0; --j) {
            newIndex += (k % tensor.dims[j]) * invStride[j];
            k = Math.floor(k / tensor.dims[j]);
        }
        transposedData[newIndex] = tensor.data[i];
    }
    return new Tensor(tensor.type, transposedData, shape);
}

function cat(tensors) {
    if (tensors.length === 0) {
        return tensors[0];
    }
    // NOTE: tensors must be batched
    // NOTE: currently only supports dim=0
    // TODO: add support for dim != 0


    let tensorType = tensors[0].type;
    let tensorShape = [...tensors[0].dims];
    tensorShape[0] = tensors.length;

    // Calculate total size to allocate
    let total = 0;
    for (let t of tensors) {
        total += t.data.length;
    }

    // Create output tensor of same type as first
    let data = new tensors[0].data.constructor(total);

    let offset = 0;
    for (let t of tensors) {
        data.set(t.data, offset);
        offset += t.data.length;
    }

    return new Tensor(tensorType, data, tensorShape)
}



module.exports = {
    Tensor,
    transpose,
    cat
}


/***/ }),

/***/ "./src/tokenizers.js":
/*!***************************!*\
  !*** ./src/tokenizers.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
    Callable,
    fetchJSON,
    reverseDictionary,
    escapeRegExp,
    isIntegralNumber
} = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

const { Tensor } = __webpack_require__(/*! ./tensor_utils.js */ "./src/tensor_utils.js")


class TokenizerModel extends Callable {

    constructor(config) {
        super();
        this.config = config;
    }
    static fromConfig(config, ...args) {
        switch (config.type) {
            case 'WordPiece':
                return new WordPieceTokenizer(config);
            case 'Unigram':
                return new Unigram(config, ...args);

            case 'BPE':
                return new BPE(config, ...args);
            default:
                throw new Error(`Unknown TokenizerModel type: ${config.type}`);
        }
    }
    _call(tokens) {
        return this.encode(tokens);
    }
    encode(tokens) {
        throw Error("encode should be implemented in subclass.")
    }
    convert_tokens_to_ids(tokens) {
        return tokens.map(t => this.tokens_to_ids[t] ?? this.unk_token_id);
    }

    convert_ids_to_tokens(ids) {
        return ids.map(i => this.vocab[i] ?? this.unk_token);
    }
}

class WordPieceTokenizer extends TokenizerModel {
    constructor(config) {
        super(config);

        this.tokens_to_ids = config.vocab;

        this.unk_token_id = this.tokens_to_ids[config.unk_token];
        this.unk_token = config.unk_token;

        let e = Object.entries(this.tokens_to_ids);
        this.vocab = Array(e.length);

        for (const [key, value] of e) {
            this.vocab[value] = key;
        }
    }

    encode(tokens) {
        let outputTokens = [];
        for (let token of tokens) {
            let chars = [...token];
            // TODO add
            // if len(chars) > self.max_input_chars_per_word:
            //     output_tokens.append(self.unk_token)
            //     continue

            let isUnknown = false;
            let start = 0;
            let subTokens = [];

            while (start < chars.length) {
                let end = chars.length;
                let currentSubstring = null;
                while (start < end) {
                    let substr = chars.slice(start, end).join('');

                    if (start > 0) {
                        substr = this.config.continuing_subword_prefix + substr;
                    }
                    if (this.vocab.includes(substr)) {
                        currentSubstring = substr;
                        break;
                    }

                    --end;
                }
                if (currentSubstring == null) {
                    isUnknown = true;
                    break;
                }
                subTokens.push(currentSubstring);
                start = end;
            }
            if (isUnknown) {
                outputTokens.push(this.unknownToken);
            } else {
                outputTokens.push(...subTokens);
            }
        }

        return outputTokens;
    }

}

class Unigram extends TokenizerModel {
    constructor(config, moreConfig) {
        super(config);

        this.vocab = config.vocab.map(x => x[0]);
        this.scores = config.vocab.map(x => x[1]);

        this.unk_token_id = config.unk_id;
        this.unk_token = this.vocab[config.unk_id];

        this.tokens_to_ids = Object.fromEntries(this.vocab.map((x, i) => [x, i]));
        this.bosToken = ' '; // beginning of a sentence token

        this.bosTokenId = this.tokens_to_ids[this.bosToken];
        this.eosToken = moreConfig.eos_token;

        this.eosTokenId = this.tokens_to_ids[this.eosToken];
        this.unkToken = this.vocab[this.unk_token_id];

        this.minScore = Math.min(...this.scores);

        this.unkScore = this.minScore - 10.0;
        this.scores[this.unk_token_id] = this.unkScore;

        this.trie = new CharTrie();
        this.trie.push(...this.vocab)
    }


    populateNodes(lattice) {
        const sentence = lattice.sentence;
        const len = sentence.length;
        let beginPos = 0;
        while (beginPos < len) {
            const mblen = 1;
            let hasSingleNode = false;
            const tokens = [];
            for (let token of this.trie.commonPrefixSearch(sentence.slice(beginPos))) {
                tokens.push(token);
                const tokenId = this.tokens_to_ids[token];
                const tokenScore = this.scores[tokenId];
                const n = token.length;
                lattice.insert(beginPos, n, tokenScore, tokenId);
                if (!hasSingleNode && n == mblen) {
                    hasSingleNode = true;
                }
            }
            if (!hasSingleNode) {
                lattice.insert(beginPos, mblen, this.unkScore, this.unk_token_id);
            }
            beginPos += mblen;
        }
    }
    tokenize(normalized) {
        const lattice = new TokenLattice(normalized, this.bosTokenId, this.eosTokenId);
        this.populateNodes(lattice);
        return lattice.tokens();
    }
    encode(tokens) {
        let toReturn = [];
        for (let token of tokens) {
            const tokenized = this.tokenize(token);
            toReturn.push(...tokenized);
        }
        return toReturn;
    }

}

const BYTES_TO_UNICODE = (() => {
    // Returns list of utf-8 byte and a mapping to unicode strings.
    // We specifically avoids mapping to whitespace/control characters
    // the bpe code barfs on.

    const bs = [
        ...Array.from({ length: "~".charCodeAt(0) - "!".charCodeAt(0) + 1 }, (_, i) => i + "!".charCodeAt(0)),
        ...Array.from({ length: "¬".charCodeAt(0) - "¡".charCodeAt(0) + 1 }, (_, i) => i + "¡".charCodeAt(0)),
        ...Array.from({ length: "ÿ".charCodeAt(0) - "®".charCodeAt(0) + 1 }, (_, i) => i + "®".charCodeAt(0)),
    ];
    let cs = bs.slice();
    let n = 0;
    for (let b = 0; b < 256; b++) {
        if (!bs.includes(b)) {
            bs.push(b);
            cs.push(256 + n);
            n += 1;
        }
    }
    cs = cs.map(n => String.fromCharCode(n));
    return Object.fromEntries(bs.map((b, i) => [b, cs[i]]));
})();

const UNICODE_TO_BYTES = reverseDictionary(BYTES_TO_UNICODE);

class BPE extends TokenizerModel {
    constructor(config) {
        super(config);

        this.tokens_to_ids = config.vocab;

        this.unk_token_id = this.tokens_to_ids[config.unk_token];
        this.unk_token = config.unk_token;

        let e = Object.entries(this.tokens_to_ids);
        this.vocab = Array(e.length);

        for (const [key, value] of e) {
            this.vocab[value] = key;
        }

        this.bpe_ranks = Object.fromEntries(config.merges.map((x, i) => [x, i]));
        this.merges = config.merges.map(x => x.split(/\s+/))

        this.byte_encoder = BYTES_TO_UNICODE;
        this.text_encoder = new TextEncoder();

        this.cache = {}
    }

    get_pairs(word) {
        let pairs = new Set();
        let prev_char = word[0];
        for (let i = 1; i < word.length; i++) {
            let char = word[i];
            pairs.add(`${prev_char} ${char}`);
            prev_char = char;
        }
        return [...pairs];
    }

    bpe(token) {
        if (token in this.cache) {
            return this.cache[token];
        }
        let word = Array.from(token);
        let pairs = this.get_pairs(word);

        if (!pairs.length) {
            return token;
        }

        while (true) {
            let bigram = pairs.reduce((a, b) => {
                let c = this.bpe_ranks[a] ?? Infinity
                let d = this.bpe_ranks[b] ?? Infinity
                return c <= d ? a : b;
            });
            if (!(bigram in this.bpe_ranks)) {
                break;
            }
            let [first, second] = bigram.split(/\s+/g)
            let new_word = [];
            let i = 0;
            let j = -1;

            while (i < word.length) {
                try {
                    j = word.indexOf(first, i);
                    if (j === -1) throw "Error";
                } catch (e) {
                    new_word.push(...word.slice(i));
                    break;
                }
                new_word.push(...word.slice(i, j));
                i = j;

                if (word[i] === first && i < word.length - 1 && word[i + 1] === second) {
                    new_word.push(first + second);
                    i += 2;
                } else {
                    new_word.push(word[i]);
                    i += 1;
                }
            }
            word = new_word
            if (word.length === 1) {
                break;
            } else {
                pairs = this.get_pairs(word);
            }
        }
        let final_word = word.join(" ");
        this.cache[token] = final_word;
        return final_word;
    }
    encode(tokens) {
        let outputTokens = [];

        for (let token of tokens) {
            token = Array.from(this.text_encoder.encode(token), byte => this.byte_encoder[byte]).join('');
            let bpe_token_list = this.bpe(token).split(' ');
            outputTokens.push(...bpe_token_list);
        }

        return outputTokens;
    }

}

class Normalizer extends Callable {

    constructor(config) {
        super();
        this.config = config;
    }

    static fromConfig(config) {
        if (config === null) return null;
        switch (config.type) {
            case 'BertNormalizer':
                return new BertNormalizer(config);
            case 'Precompiled':
                return new Precompiled(config);
            case 'Sequence':
                return new NormalizerSequence(config);
            case 'Replace':
                return new Replace(config);
            case 'NFC':
                return new NFC(config);
            case 'NFKD':
                return new NFKD(config);
            case 'StripAccents':
                return new StripAccents(config);
            case 'Lowercase':
                return new Lowercase(config);
            default:
                throw new Error(`Unknown Normalizer type: ${config.type}`);
        }
    }

    normalize(text) {
        throw Error("normalize should be implemented in subclass.")
    }

    _call(text) {
        return this.normalize(text);
    }

}

class Replace extends Normalizer {
    normalize(text) {
        // TODO: this.config.pattern might not be Regex.
        if (this.config.pattern.Regex) {
            text = text.replace(new RegExp(this.config.pattern.Regex, 'g'), this.config.content)

        } else if (this.config.pattern.String) {
            text = text.replace(this.config.pattern.String, this.config.content)

        } else {
            console.warn('Unknown pattern type:', this.config.pattern)
        }

        return text;
    }
}

class NFC extends Normalizer {
    normalize(text) {
        text = text.normalize('NFC')
        return text;
    }
}
class NFKD extends Normalizer {
    normalize(text) {
        text = text.normalize('NFKD')
        return text;
    }
}
class StripAccents extends Normalizer {
    normalize(text) {
        text = text.replace(/[\u0300-\u036f]/g, '');
        return text;
    }
}
class Lowercase extends Normalizer {
    normalize(text) {
        text = text.toLowerCase();
        return text;
    }
}
class NormalizerSequence extends Normalizer {
    constructor(config) {
        super(config);
        this.normalizers = config.normalizers.map(x => Normalizer.fromConfig(x));
    }
    normalize(text) {
        // TODO use reduce?
        for (let normalizer of this.normalizers) {
            text = normalizer.normalize(text);
        }
        return text;
    }
}
class BertNormalizer extends Normalizer {

    _tokenize_chinese_chars(text) {
        /* Adds whitespace around any CJK character. */
        let output = [];
        for (let i = 0; i < text.length; ++i) {
            let char = text[i];
            let cp = char.charCodeAt(0);
            if (this._is_chinese_char(cp)) {
                output.push(" ");
                output.push(char);
                output.push(" ");
            } else {
                output.push(char);
            }
        }
        return output.join("");
    }

    _is_chinese_char(cp) {
        // Checks whether CP is the codepoint of a CJK character.
        //
        // This defines a "chinese character" as anything in the CJK Unicode block:
        //   https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_(Unicode_block)
        //
        // Note that the CJK Unicode block is NOT all Japanese and Korean characters,
        // despite its name. The modern Korean Hangul alphabet is a different block,
        // as is Japanese Hiragana and Katakana. Those alphabets are used to write
        // space-separated words, so they are not treated specially and handled
        // like the all of the other languages.
        return (
            (cp >= 0x4E00 && cp <= 0x9FFF)
            || (cp >= 0x3400 && cp <= 0x4DBF)
            || (cp >= 0x20000 && cp <= 0x2A6DF)
            || (cp >= 0x2A700 && cp <= 0x2B73F)
            || (cp >= 0x2B740 && cp <= 0x2B81F)
            || (cp >= 0x2B820 && cp <= 0x2CEAF)
            || (cp >= 0xF900 && cp <= 0xFAFF)
            || (cp >= 0x2F800 && cp <= 0x2FA1F)
        )
    }
    stripAccents(text) {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    normalize(text) {
        // TODO use rest of config
        // config.clean_text,
        // config.handle_chinese_chars,
        // config.strip_accents,
        // config.lowercase,

        if (this.config.handle_chinese_chars) {
            text = this._tokenize_chinese_chars(text);
        }

        if (this.config.lowercase) {
            text = text.toLowerCase();

            if (this.config.strip_accents !== false) {
                text = this.stripAccents(text);
            }
        } else if (this.config.strip_accents) {
            text = this.stripAccents(text);
        }

        return text;
    }
}


class PreTokenizer extends Callable {
    static fromConfig(config) {
        switch (config.type) {
            case 'BertPreTokenizer':
                return new BertPreTokenizer(config);
            case 'Sequence':
                return new PreTokenizerSequence(config);
            case 'WhitespaceSplit':
                return new WhitespaceSplit(config);
            case 'Metaspace':
                return new MetaspacePreTokenizer(config);

            case 'ByteLevel':
                return new ByteLevelPreTokenizer(config);
            case 'Split':
                return new SplitPreTokenizer(config);

            default:
                throw new Error(`Unknown PreTokenizer type: ${config.type}`);
        }
    }

    pre_tokenize_text(text) {
        throw Error("pre_tokenize_text should be implemented in subclass.")
    }

    pre_tokenize(text) {
        let result = [];
        if (Array.isArray(text)) {
            result = text.map(x => this.pre_tokenize_text(x))
        } else {
            result = this.pre_tokenize_text(text);
        }
        return result.flat();
    }

    _call(text) {
        return this.pre_tokenize(text);
    }
}

class BertPreTokenizer extends PreTokenizer {
    constructor(config) {
        super();
        // TODO use config
        this.pattern = /\b\w+\b|[^\s\w]+/g
    }
    pre_tokenize_text(text) {
        // Split on whitespace and punctuation
        return text.trim().match(this.pattern) || [];
    }
}
class ByteLevelPreTokenizer extends PreTokenizer {
    constructor(config) {
        super();
        // TODO use config
        this.pattern = /'s|'t|'re|'ve|'m|'ll|'d| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+/gu;
    }

    pre_tokenize_text(text) {
        // Split on whitespace and punctuation
        return text.match(this.pattern) || [];
    }
}

class SplitPreTokenizer extends PreTokenizer {
    constructor(config) {
        super();
        this.config = config;
    }

    pre_tokenize_text(text) {
        if (this.config.pattern.Regex) {
            return text.match(new RegExp(this.config.pattern.Regex, 'gu')) || [];

        } else if (this.config.pattern.String) {
            return text.match(this.config.pattern.String) || [];

        } else {
            console.warn('Unknown pattern type:', this.config.pattern)
        }

        return [];
    }

}

class PostProcessor extends Callable {

    static fromConfig(config) {
        switch (config.type) {
            case 'TemplateProcessing':
                return new TemplateProcessing(config);

            case 'ByteLevel':
                return new ByteLevelPostProcessor(config);

            case 'RobertaProcessing':
                return new RobertaProcessing(config);

            default:
                throw new Error(`Unknown PostProcessor type: ${config.type}`);
        }
    }
    post_process(tokens, ...args) {
        throw Error("post_process should be implemented in subclass.")
    }

    _call(tokens, ...args) {
        return this.post_process(tokens, ...args);
    }
}

class RobertaProcessing extends PostProcessor {
    constructor(config) {
        super();
        this.config = config;

        // TODO use all of config:
        // add_prefix_space, cls, sep, trim_offsets

    }

    post_process(tokens, tokens_pair = null) {
        tokens = [this.config.cls[0], ...tokens, this.config.sep[0]]

        // NOTE: It is intended to add 2 EOS tokens after the first set of tokens
        // https://github.com/huggingface/tokenizers/issues/983
        if (tokens_pair !== null) {
            tokens = [...tokens, this.config.sep[0], ...tokens_pair, this.config.sep[0]]
        }
        return tokens;
    }
}

class TemplateProcessing extends PostProcessor {
    constructor(config) {
        super();
        this.config = config;
    }
    post_process(tokens, tokens_pair = null) {
        let type = tokens_pair === null ? this.config.single : this.config.pair

        let toReturn = [];
        for (let item of type) {
            if ('SpecialToken' in item) {
                toReturn.push(item.SpecialToken.id);

            } else if ('Sequence' in item) {
                if (item.Sequence.id === 'A') {
                    toReturn.push(...tokens);

                } else if (item.Sequence.id === 'B') {
                    toReturn.push(...tokens_pair);
                }
            }
        }
        return toReturn;
    }
}
class ByteLevelPostProcessor extends PostProcessor {
    constructor(config) {
        super();
        this.config = config;
    }
    post_process(tokens) {
        return tokens;
    }
}

class Decoder extends Callable {

    constructor(config) {
        super();
        this.config = config;
    }

    static fromConfig(config) {
        switch (config.type) {
            case 'WordPiece':
                return new WordPieceDecoder(config);
            case 'Metaspace':
                return new MetaspaceDecoder(config);
            case 'ByteLevel':
                return new ByteLevelDecoder(config);
            default:
                throw new Error(`Unknown Decoder type: ${config.type}`);
        }
    }

    convert_tokens_to_string(tokens) {
        return tokens.join('').trim();
    }

    _call(tokens) {
        return this.decode(tokens);
    }

    decode(tokens) {
        throw Error("decode should be implemented in subclass.")
    }


}

class WordPieceDecoder extends Decoder {

    constructor(config) {
        super(config);
        this.convertRegex = new RegExp(` ${config.prefix}`, 'g');
    }


    convert_tokens_to_string(tokens) {
        return tokens.join(' ').replace(this.convertRegex, '').trim();
    }

    decode(tokens) {
        return this.convert_tokens_to_string(tokens);
    }
}

class ByteLevelDecoder extends Decoder {
    constructor(config) {
        super(config);

        this.byte_decoder = UNICODE_TO_BYTES;
        this.text_decoder = new TextDecoder("utf-8", {
            fatal: false,
            ignoreBOM: true,
            ignoreEncoding: false
        });
    }

    convert_tokens_to_string(tokens) {
        let text = tokens.join('');

        if (this.config.trim_offsets) {
            text = text.trim();
        } else if (this.config.add_prefix_space) {
            text = ' ' + text;
        }

        let byteArray = new Uint8Array([...text].map(c => this.byte_decoder[c]));
        let decoded_text = this.text_decoder.decode(byteArray);
        return decoded_text;
    }

    decode(tokens) {
        // TODO move to base class (like HF)
        // tokens === filtered_tokens

        // To avoid mixing byte-level and unicode for byte-level BPT
        // we need to build string separately for added tokens and byte-level tokens
        // cf. https://github.com/huggingface/transformers/issues/1133
        let sub_texts = [];
        let current_sub_text = [];
        for (let token of tokens) {
            // tokens sent here are already filtered, so we don't need to do this
            // if (skip_special_tokens && this.all_special_ids.includes(token)) {
            //     continue;
            // }

            if (this.added_tokens.includes(token)) {
                if (current_sub_text.length > 0) {
                    sub_texts.push(this.convert_tokens_to_string(current_sub_text));
                    current_sub_text = [];
                }
                sub_texts.push(token);
            } else {
                current_sub_text.push(token);
            }
        }
        if (current_sub_text.length > 0) {
            sub_texts.push(this.convert_tokens_to_string(current_sub_text));
        }

        // TODO add spaces_between_special_tokens and clean_up_tokenization_spaces options
        let text = sub_texts.join('');

        return text;
    }
}

class MetaspacePreTokenizer extends PreTokenizer {
    constructor(config) {
        super();

        this.addPrefixSpace = config.add_prefix_space;
        this.replacement = config.replacement;
        this.strRep = config.str_rep || this.replacement;
    }
    pre_tokenize(normalizedTokens) {
        if (typeof normalizedTokens === 'string' || normalizedTokens instanceof String) {
            // Metaspace acts on a list of tokens. If passing in a string, first split on whitespace
            normalizedTokens = normalizedTokens.split(/\s+/);
        }

        const result = [];
        for (let token of normalizedTokens) {
            let normalized = token.replace(' ', this.strRep);
            if (this.addPrefixSpace && !normalized.startsWith(this.replacement)) {
                normalized = this.strRep + normalized;
            }
            result.push(normalized);
        }
        return result;
    }
}

class MetaspaceDecoder extends Decoder {
    constructor(config) {
        super(config);

        this.addPrefixSpace = config.add_prefix_space;
        this.replacement = config.replacement;
    }

    decode(tokens) {
        let result = [];
        let i = 0;
        for (let token of tokens) {
            let normalized = token.replace(this.replacement, ' ');
            if (this.addPrefixSpace && i == 0 && normalized.startsWith(' ')) {
                normalized = normalized.substring(1);
            }
            result.push(normalized);
            ++i;
        }

        return this.convert_tokens_to_string(result);
    }
}

class Precompiled extends Normalizer {
    constructor(config) {
        super(config);
        this.charsmap = config.precompiled_charsmap;
    }
    normalize(text) {
        return text;
    }
}

class PreTokenizerSequence extends PreTokenizer {
    constructor(config) {
        super();
        this.tokenizers = config.pretokenizers.map(x => PreTokenizer.fromConfig(x));
    }
    pre_tokenize_text(text) {
        // TODO use reduce?
        for (let tokenizer of this.tokenizers) {
            text = tokenizer.pre_tokenize(text);
        }
        return text;
    }
}
class WhitespaceSplit extends PreTokenizer {
    constructor(config) {
        super();
    }
    pre_tokenize_text(text) {
        return text.split(/\s+/);
    }
}

class AutoTokenizer {
    // Helper class to determine tokenizer type from tokenizer.json

    static async from_pretrained(modelPath, progressCallback = null) {

        let [tokenizerJSON, tokenizerConfig] = await Promise.all([
            fetchJSON(modelPath, 'tokenizer.json', progressCallback),
            fetchJSON(modelPath, 'tokenizer_config.json', progressCallback),
        ])

        switch (tokenizerConfig.tokenizer_class) {
            case 'T5Tokenizer':
                return new T5Tokenizer(tokenizerJSON, tokenizerConfig);

            case 'DistilBertTokenizer':
                return new DistilBertTokenizer(tokenizerJSON, tokenizerConfig);

            case 'BertTokenizer':
                return new BertTokenizer(tokenizerJSON, tokenizerConfig);

            case 'AlbertTokenizer':
                return new AlbertTokenizer(tokenizerJSON, tokenizerConfig);

            case 'GPT2Tokenizer':
                return new GPT2Tokenizer(tokenizerJSON, tokenizerConfig);

            case 'BartTokenizer':
                return new BartTokenizer(tokenizerJSON, tokenizerConfig);

            case 'RobertaTokenizer':
                return new RobertaTokenizer(tokenizerJSON, tokenizerConfig);

            case 'WhisperTokenizer':
                return new WhisperTokenizer(tokenizerJSON, tokenizerConfig);

            case 'CodeGenTokenizer':
                return new CodeGenTokenizer(tokenizerJSON, tokenizerConfig);

            case 'CLIPTokenizer':
                return new CLIPTokenizer(tokenizerJSON, tokenizerConfig);
            default:
                console.warn(`Unknown tokenizer class "${tokenizerConfig.tokenizer_class}", attempting to construct from base class.`);
                return new PreTrainedTokenizer(tokenizerJSON, tokenizerConfig);
        }
    }
}
class PreTrainedTokenizer extends Callable {
    constructor(tokenizerJSON, tokenizerConfig) {
        super();

        this.tokenizerJSON = tokenizerJSON;
        this.tokenizerConfig = tokenizerConfig;

        this.normalizer = Normalizer.fromConfig(tokenizerJSON.normalizer);
        this.pre_tokenizer = PreTokenizer.fromConfig(tokenizerJSON.pre_tokenizer);
        this.model = TokenizerModel.fromConfig(tokenizerJSON.model, tokenizerConfig);
        this.post_processor = PostProcessor.fromConfig(tokenizerJSON.post_processor);

        // TODO - maybe, allow this to be null; in which case, we use model as decoder too?
        this.decoder = Decoder.fromConfig(tokenizerJSON.decoder);

        // Slight hack, but it prevents code duplication:
        // Add added_tokens to this.decoder
        this.decoder.added_tokens = [];

        // Add added_tokens to model
        this.special_tokens = [];
        this.all_special_ids = [];
        for (let addedToken of tokenizerJSON.added_tokens) {
            let id = addedToken.id;
            let content = addedToken.content;
            this.decoder.added_tokens.push(content);

            this.model.tokens_to_ids[content] = id;
            this.model.vocab[id] = content;

            if (addedToken.special) {
                this.special_tokens.push(content);
                this.all_special_ids.push(id);
            }
        }
        this.special_tokens_regex = new RegExp(
            '(' + this.special_tokens.map(escapeRegExp).join('|') + ')'
        );


        // Set mask token if present (otherwise will be undefined, which is fine)
        this.mask_token = this.getToken('mask_token');
        this.mask_token_id = this.model.tokens_to_ids[this.mask_token];

        this.pad_token = this.getToken('pad_token', 'eos_token');
        this.pad_token_id = this.model.tokens_to_ids[this.pad_token];

        this.sep_token = this.getToken('sep_token');
        this.sep_token_id = this.model.tokens_to_ids[this.sep_token];

        this.model_max_length = this.tokenizerConfig.model_max_length;

        this.remove_space = this.tokenizerConfig.remove_space;

        // TODO allow user to change this
        this.padding_side = 'right';
    }

    getToken(...keys) {
        for (let key of keys) {
            let item = this.tokenizerConfig[key];

            if (!item) continue;

            if (typeof item === 'object') {
                if (item.__type === 'AddedToken') {
                    return item.content;
                } else {
                    throw Error(`Unknown token: ${item}`);
                }
            } else {
                return item;
            }
        }
        return null;
    }

    static async from_pretrained(modelPath, progressCallback = null) {
        // TODO get files in parallel

        let [tokenizerJSON, tokenizerConfig] = await Promise.all([
            fetchJSON(modelPath, 'tokenizer.json', progressCallback),
            fetchJSON(modelPath, 'tokenizer_config.json', progressCallback),
        ])

        return new this(tokenizerJSON, tokenizerConfig);
    }

    prepare_model_inputs(inputs) {
        return inputs;
    }

    _call(
        // Required positional arguments
        text,

        // Optional keyword arguments
        {
            text_pair = null,
            // add_special_tokens = true, // TODO
            padding = false,
            truncation = null,
            max_length = null,
            return_tensor = true, // Different to HF
        } = {},
    ) {
        let tokens;

        if (Array.isArray(text)) {
            if (text.length === 0) {
                throw Error('text array must be non-empty')
            }

            if (text_pair !== null) {
                if (!Array.isArray(text_pair)) {
                    throw Error('text_pair must also be an array')

                } else if (text.length !== text_pair.length) {
                    throw Error('text and text_pair must have the same length')
                }

                tokens = text.map(
                    (text, i) => this.encode(text, text_pair[i])
                )

            } else {
                tokens = text.map(x => this.encode(x));
            }

        } else {
            if (text === null) {
                throw Error('text may not be null')
            }
            tokens = [this.encode(text, text_pair)];
        }
        // At this point, tokens is batched: [batch_size, tokens]
        // However, array may be jagged. So, we pad to max_length

        let maxLengthOfBatch = Math.max(...tokens.map(x => x.length));

        // If null, we calculate max length from sequences
        if (max_length === null) {
            max_length = maxLengthOfBatch;
        }

        // Ensure it is less than model max length
        max_length = Math.min(max_length, this.model_max_length)

        // TODO convert to tensor here?
        let attention_mask = [];
        if (padding || truncation) {
            // Perform padding and/or truncation
            for (let i = 0; i < tokens.length; ++i) {
                if (tokens[i].length === max_length) {
                    attention_mask.push(new Array(tokens[i].length).fill(1))
                    continue;

                } else if (tokens[i].length > max_length) {
                    // possibly truncate
                    if (truncation) {
                        tokens[i] = tokens[i].slice(0, max_length);
                    }
                    attention_mask.push(new Array(tokens[i].length).fill(1))

                } else { // t.length < max_length
                    if (padding) {
                        let diff = max_length - tokens[i].length;

                        if (this.padding_side === 'right') {
                            attention_mask.push(
                                (new Array(tokens[i].length).fill(1)).concat(new Array(diff).fill(0))
                            )
                            tokens[i].push(...new Array(diff).fill(this.pad_token_id))
                        } else { // left
                            attention_mask.push(
                                (new Array(diff).fill(0)).concat(new Array(tokens[i].length).fill(1))
                            )
                            tokens[i].unshift(...new Array(diff).fill(this.pad_token_id))
                        }

                    } else {
                        attention_mask.push(new Array(tokens[i].length).fill(1))
                    }
                }
            }
        } else {
            attention_mask = tokens.map(x => new Array(x.length).fill(1))
        }

        if (return_tensor) {
            if (!(padding && truncation)) {
                // Not, guaranteed that all items have same length, so
                // we perform additional check

                if (tokens.some(x => x.length !== tokens[0].length)) {
                    throw Error(
                        "Unable to create tensor, you should probably activate truncation and/or padding " +
                        "with 'padding=true' and 'truncation=true' to have batched tensors with the same length."
                    )
                }
            }

            // Now we actually convert to tensor
            let dims = [tokens.length, tokens[0].length];

            tokens = new Tensor('int64',
                BigInt64Array.from(tokens.flat().map(BigInt)),
                dims
            );

            attention_mask = new Tensor(
                'int64',
                BigInt64Array.from(attention_mask.flat().map(BigInt)),
                dims
            )
        }


        // Finally, add attention mask, and possibly model-specific parameters
        let modelInputs = {
            input_ids: tokens,
            attention_mask: attention_mask
        }

        // Optional post-processing
        modelInputs = this.prepare_model_inputs(modelInputs);

        return modelInputs
    }

    _encode_text(text) {
        if (text === null) return null;

        // Actual function which does encoding, for a single text
        // First, we take care of special tokens. Needed to avoid issues arising from
        // normalization and/or pretokenization (which may not preserve special tokens)
        const sections = text.split(this.special_tokens_regex).filter(x => x);

        let tokens = sections.map(x => {
            if (this.special_tokens.includes(x)) {
                // Ignore special tokens
                return x
            } else {
                if (this.remove_space === true) {
                    // remove_space
                    x = x.trim().split(/\s+/).join(' ')
                }
                // Actually perform encoding
                if (this.normalizer !== null) {
                    x = this.normalizer(x);
                }
                let sectionTokens = this.pre_tokenizer(x);
                return this.model(sectionTokens);
            }
        }).flat();

        return tokens;
    }

    encode(text, text_pair = null) {
        // Function called by users to encode possibly multiple texts
        let tokens = this._encode_text(text);
        let tokens2 = this._encode_text(text_pair);

        let combinedTokens = this.post_processor(tokens, tokens2);
        let ids = this.model.convert_tokens_to_ids(combinedTokens);

        return ids
    }

    clean_up_tokenization(text) {
        // Clean up a list of simple English tokenization artifacts
        // like spaces before punctuations and abbreviated forms
        return text.replace(/ \./g, '.')
            .replace(/ \?/g, '?')
            .replace(/ \!/g, '!')
            .replace(/ ,/g, ',')
            .replace(/ \' /g, "'")
            .replace(/ n\'t/g, "n't")
            .replace(/ \'m/g, "'m")
            .replace(/ \'s/g, "'s")
            .replace(/ \'ve/g, "'ve")
            .replace(/ \'re/g, "'re");
    }

    batch_decode(batch, decode_args = {}) {
        return batch.map(x => this.decode(x, decode_args));
    }
    decode(
        token_ids,
        decode_args = {},
    ) {
        if (!Array.isArray(token_ids) || token_ids.length === 0 || !isIntegralNumber(token_ids[0])) {
            throw Error("token_ids must be a non-empty array of integers.");
        }

        return this.decode_single(
            token_ids, decode_args
        )
    }

    decode_single(
        token_ids,
        {
            skip_special_tokens = false,
            clean_up_tokenization_spaces = true,
        }
    ) {
        let tokens = this.model.convert_ids_to_tokens(token_ids);
        if (skip_special_tokens) {
            tokens = tokens.filter(x => !this.special_tokens.includes(x));
        }

        let decoded = this.decoder(tokens); // tokens === filtered_tokens

        if (this.decoder.cleanup !== undefined && this.decoder.cleanup !== clean_up_tokenization_spaces) {
            console.warn(`clean_up_tokenization_spaces disagrees with decoder's cleanup setting. Overriding to use decoder's cleanup setting (${this.decoder.cleanup})`)
            clean_up_tokenization_spaces = this.decoder.cleanup;
        }

        if (clean_up_tokenization_spaces) {
            decoded = this.clean_up_tokenization(decoded);
        }

        return decoded;
    }

}

class BertTokenizer extends PreTrainedTokenizer {
    prepare_model_inputs(inputs) {
        inputs.token_type_ids = new Tensor(
            'int64',
            new BigInt64Array(inputs.input_ids.data.length),
            inputs.input_ids.dims
        )
        return inputs;
    }
}
class AlbertTokenizer extends PreTrainedTokenizer {
    prepare_model_inputs(inputs) {
        inputs.token_type_ids = new Tensor(
            'int64',
            new BigInt64Array(inputs.input_ids.data.length),
            inputs.input_ids.dims
        )
        return inputs;
    }
}
class DistilBertTokenizer extends PreTrainedTokenizer { }
class T5Tokenizer extends PreTrainedTokenizer { }
class GPT2Tokenizer extends PreTrainedTokenizer { }
class BartTokenizer extends PreTrainedTokenizer { }
class RobertaTokenizer extends PreTrainedTokenizer { }



class WhisperTokenizer extends PreTrainedTokenizer {
    static LANGUAGES = {
        "en": "english",
        "zh": "chinese",
        "de": "german",
        "es": "spanish",
        "ru": "russian",
        "ko": "korean",
        "fr": "french",
        "ja": "japanese",
        "pt": "portuguese",
        "tr": "turkish",
        "pl": "polish",
        "ca": "catalan",
        "nl": "dutch",
        "ar": "arabic",
        "sv": "swedish",
        "it": "italian",
        "id": "indonesian",
        "hi": "hindi",
        "fi": "finnish",
        "vi": "vietnamese",
        "he": "hebrew",
        "uk": "ukrainian",
        "el": "greek",
        "ms": "malay",
        "cs": "czech",
        "ro": "romanian",
        "da": "danish",
        "hu": "hungarian",
        "ta": "tamil",
        "no": "norwegian",
        "th": "thai",
        "ur": "urdu",
        "hr": "croatian",
        "bg": "bulgarian",
        "lt": "lithuanian",
        "la": "latin",
        "mi": "maori",
        "ml": "malayalam",
        "cy": "welsh",
        "sk": "slovak",
        "te": "telugu",
        "fa": "persian",
        "lv": "latvian",
        "bn": "bengali",
        "sr": "serbian",
        "az": "azerbaijani",
        "sl": "slovenian",
        "kn": "kannada",
        "et": "estonian",
        "mk": "macedonian",
        "br": "breton",
        "eu": "basque",
        "is": "icelandic",
        "hy": "armenian",
        "ne": "nepali",
        "mn": "mongolian",
        "bs": "bosnian",
        "kk": "kazakh",
        "sq": "albanian",
        "sw": "swahili",
        "gl": "galician",
        "mr": "marathi",
        "pa": "punjabi",
        "si": "sinhala",
        "km": "khmer",
        "sn": "shona",
        "yo": "yoruba",
        "so": "somali",
        "af": "afrikaans",
        "oc": "occitan",
        "ka": "georgian",
        "be": "belarusian",
        "tg": "tajik",
        "sd": "sindhi",
        "gu": "gujarati",
        "am": "amharic",
        "yi": "yiddish",
        "lo": "lao",
        "uz": "uzbek",
        "fo": "faroese",
        "ht": "haitian creole",
        "ps": "pashto",
        "tk": "turkmen",
        "nn": "nynorsk",
        "mt": "maltese",
        "sa": "sanskrit",
        "lb": "luxembourgish",
        "my": "myanmar",
        "bo": "tibetan",
        "tl": "tagalog",
        "mg": "malagasy",
        "as": "assamese",
        "tt": "tatar",
        "haw": "hawaiian",
        "ln": "lingala",
        "ha": "hausa",
        "ba": "bashkir",
        "jw": "javanese",
        "su": "sundanese",
    }
    _decode_asr(sequences, {
        return_timestamps = false,
        return_language = false,
        time_precision = null,
        force_full_sequences = true
    } = {}) {
        // Set force_full_sequences=false if you want streaming
        // TODO add support for `return_language`

        // Internal method meant to only be used by asr pipeline.
        // Handles all the little quirks specific to whisper to handle
        // the various options not allowed in other seq2seq models

        // =========== Overview ============
        // - iterate over all outputs
        // - all tokens within output
        // - Each token can be
        //   - language token
        //   - special token
        //   - timestamp token
        //   - text token
        // - We accumulate the text tokens.
        // - We split on end timestamps
        // - Lots of complexity comes from stride and timestamps

        if (time_precision === null) {
            throw Error("Must specify time_precision")
        }
        let last_language = null;

        function new_chunk() {
            return { "language": last_language, "timestamp": [null, null], "text": "" };
        }

        // Welcome to the state machine!
        const chunks = [];
        let chunk = new_chunk();
        let time_offset = 0.0;
        const timestamp_begin = this.model.convert_tokens_to_ids(["<|notimestamps|>"])[0] + 1;

        let previous_tokens = [];
        let skip = false;
        let right_stride_start = null;


        const all_special_ids = new Set(this.all_special_ids);

        for (let output of sequences) {
            // NOTE: python version has batches, so it uses [0]
            const token_ids = output.tokens;

            // These keep track of timestamps within strides, which need
            // to be skipped and resolve all tokens in a single chunk.
            let last_timestamp = null;
            let first_timestamp = timestamp_begin;

            if ("stride" in output) {
                const [chunk_len, stride_left, stride_right] = output.stride;

                // Offset the timings to account for the other `model_outputs`.
                time_offset -= stride_left;
                right_stride_start = chunk_len - stride_right;

                // Keeping track of timestamps within strides
                // We're going to NOT split on those, and delay until we're
                // out of BOTH stride. Otherwise lots of issues occur and
                // corner cases
                if (stride_left) {
                    first_timestamp = stride_left / time_precision + timestamp_begin;
                }

                if (stride_right) {
                    for (let i = token_ids.length - 1; i >= 0; --i) {
                        const token = token_ids[i];
                        if (token >= timestamp_begin) {
                            // There can be several token in the right stride
                            // But the last one is ALWAYS going to be skipped
                            if (last_timestamp !== null && (token - timestamp_begin) * time_precision < right_stride_start) {
                                break;
                            }
                            last_timestamp = token;
                        }
                    }
                }
            }

            let current_tokens = [];

            // - all tokens within output
            for (const token of token_ids) {
                // 4 possible states for each token
                // - 1/ Language code
                // - 2/ all other special tokens (which we ignore)
                // - 3/ Timestamp
                // - 4/ Regular text

                if (all_special_ids.has(token)) {
                    const text = this.decode([token]);
                    if (text[0] === "[" && text[text.length - 1] === "]") {
                        const language = this.LANGUAGES[text.slice(1, -1)];

                        if (language !== undefined) {
                            // 1/ Indeed some language
                            // TODO Handle when language is different from the previous
                            // one, and we cannot use timestamped tokens to create chunks
                            if (last_language !== null && language !== last_language && !return_timestamps) {
                                previous_tokens.push(current_tokens);
                                const resolved_tokens = this.findLongestCommonSequence(previous_tokens);
                                const resolved_text = this.decode(resolved_tokens);
                                chunk.text = resolved_text;
                                chunks.push(chunk);

                                // Flush all our temporary context
                                previous_tokens = [];
                                current_tokens = [];
                                chunk = new_chunk();
                            }

                            last_language = chunk.language = language;
                        } else {
                            // 2/ This is a regular special token, ignoring it
                        }
                    }
                } else if (token >= timestamp_begin) {
                    // 3/ Timestamp token
                    const time = (token - timestamp_begin) * time_precision + time_offset;
                    const rounded_time = Math.round(time * 100) / 100;

                    if (last_timestamp !== null && token >= last_timestamp) {
                        // Whisper outputted a timestamp token, but it falls within
                        // our stride, so we're going to skip it for the time being
                        // and resolve this later
                        // Skip is necessary because timestamp tokens always come
                        // by pair, so we need to skip the next one too (which would mark the start of another chunk).
                        skip = true;
                    } else if (skip || (previous_tokens.length > 0 && token < first_timestamp)) {
                        skip = false;
                    } else if (chunk.timestamp[0] === null) {
                        chunk.timestamp[0] = rounded_time;
                    } else {
                        // This is the end of the timestamp chunk
                        if (rounded_time === chunk.timestamp[0]) {
                            // This is a bug in timestamp token output
                            // where we're taking the duplicate token
                            // as a stop where it should be a start.
                            // This is an issue in the underlying model output
                            // Let's just skip it so it becomes
                        } else {
                            chunk.timestamp[1] = time;

                            // Handling merges
                            previous_tokens.push(current_tokens)
                            const resolved_tokens = this.findLongestCommonSequence(previous_tokens)
                            const resolved_text = this.decode(resolved_tokens)
                            chunk.text = resolved_text
                            chunks.push(chunk)

                            // Flush all our temporary context
                            previous_tokens = []
                            current_tokens = []
                            chunk = new_chunk()
                        }
                    }

                } else {
                    // 4/ Regular token
                    // We just append to the list of all tokens so we can handle
                    // merges later and decode into text.
                    current_tokens.push(token)

                }
            }

            if ('stride' in output) {
                const [chunk_len, stride_left, stride_right] = output.stride;
                time_offset += chunk_len - stride_right
            }

            // Leftover tokens
            if (current_tokens.length > 0) {
                previous_tokens.push(current_tokens)
            } else if (previous_tokens.every(p => p.length === 0)) {
                // Flushing previous tokens (END)"
                chunk = new_chunk()
                previous_tokens = []
                current_tokens = []
            }

        }

        if (previous_tokens.length > 0) {
            if (force_full_sequences && return_timestamps) {
                // Last token should always be timestamps, so there shouldn't be
                // leftover
                throw new Error("There was an error while processing timestamps, we haven't found a timestamp as last token.");
            }

            // Happens when we don't use timestamps
            const resolved_tokens = this.findLongestCommonSequence(previous_tokens);

            // Flushing previous tokens (FINAL)
            const resolved_text = this.decode(resolved_tokens);
            chunk.text = resolved_text;
            chunks.push(chunk);
        }

        let optional = {};

        // Preparing and cleaning up the pipeline output
        const full_text = chunks.map(chunk => chunk.text).join('');
        if (return_timestamps || return_language) {
            for (let i = 0; i < chunks.length; i++) {
                const chunk = chunks[i];
                if (!return_timestamps) {
                    delete chunk["timestamp"];
                }

                if (!return_language) {
                    delete chunk["language"];
                }
            }
            optional = { "chunks": chunks };
        }
        return [full_text, optional];

    }

    findLongestCommonSequence(sequences) {
        // It would be much harder to do O(n) because of fault tolerance.
        // We actually have a really good property which is that the total sequence
        // MUST be those subsequences in order.
        let leftSequence = sequences[0];
        let leftLength = leftSequence.length;
        let totalSequence = [];
        for (let i = 1; i < sequences.length; i++) {
            const rightSequence = sequences[i];
            let max = 0.0;
            let maxIndices = [leftLength, leftLength, 0, 0];
            // Here we're sliding matches
            // [a, b, c, d]
            //          [c, d, f]
            // =        [c] == [d]

            // [a, b, c, d]
            //       [c, d, f]
            // =     [c, d] == [c, d]


            // [a, b, c, d]
            //    [c, d, f]

            // =  [b, c, d] == [c, d, f]

            // [a, b, c, d]
            // [c, d, f]

            // [a, b, c] == [c, d, f]

            // [a, b, c, d]
            // [d, f]

            // [a, b] == [d, f]

            // [a, b, c, d]
            // [f]

            // [a] == [f]

            const rightLength = rightSequence.length;
            for (let j = 1; j < leftLength + rightLength; j++) {
                const eps = j / 10000.0;
                const leftStart = Math.max(0, leftLength - j);
                const leftStop = Math.min(leftLength, leftLength + rightLength - j);
                const left = leftSequence.slice(leftStart, leftStop);
                const rightStart = Math.max(0, j - leftLength);
                const rightStop = Math.min(rightLength, j);
                const right = rightSequence.slice(rightStart, rightStop);
                if (left.length !== right.length) {
                    throw new Error("There is a bug within whisper `decode_asr` function, please report it. Dropping to prevent bad inference.");
                }
                const matches = left.filter((elem, idx) => elem === right[idx]).length;
                const matching = matches / j + eps;
                if (matches > 1 && matching > max) {
                    max = matching;
                    maxIndices = [leftStart, leftStop, rightStart, rightStop];
                }
            }
            const [leftStart, leftStop, rightStart, rightStop] = maxIndices;
            const leftMid = Math.floor((leftStop + leftStart) / 2);
            const rightMid = Math.floor((rightStop + rightStart) / 2);
            totalSequence.push(...leftSequence.slice(0, leftMid));
            leftSequence = rightSequence.slice(rightMid);
            leftLength = leftSequence.length;
        }
        totalSequence.push(...leftSequence);
        return totalSequence;
    }
}
class CodeGenTokenizer extends PreTrainedTokenizer { }
class CLIPTokenizer extends PreTrainedTokenizer { }


class CharTrie {
    constructor() {
        this.root = CharTrieNode.default();
    }
    push(...texts) {
        for (let text of texts) {
            let node = this.root;
            for (let ch of text) {
                let child = node.children.get(ch);
                if (child === undefined) {
                    child = CharTrieNode.default();
                    node.children.set(ch, child);
                }
                node = child;
            }
            node.isLeaf = true;
        }

    }
    *commonPrefixSearch(text) {
        let node = this.root;
        let prefix = "";
        for (let i = 0; i < text.length && node !== undefined; i++) {
            const ch = text[i];
            prefix += ch;
            node = node.children.get(ch);
            if (node !== undefined && node.isLeaf) {
                yield prefix;
            }
        }
    }
}
class CharTrieNode {
    constructor(isLeaf, children) {
        this.isLeaf = isLeaf;
        this.children = children;
    }
    static default() {
        return new CharTrieNode(false, new Map());
    }
}


class TokenLattice {
    constructor(sentence, bosTokenId, eosTokenId) {
        this.sentence = sentence;
        this.len = sentence.length;
        this.bosTokenId = bosTokenId;
        this.eosTokenId = eosTokenId;
        this.nodes = [];
        this.beginNodes = new Array(this.len + 1);
        this.endNodes = new Array(this.len + 1);
        for (let i = 0; i < this.len + 1; i++) {
            this.beginNodes[i] = [];
            this.endNodes[i] = [];
        }
        const bos = new TokenLatticeNode(this.bosTokenId, 0, 0, 0, 0.0);
        const eos = new TokenLatticeNode(this.eosTokenId, 1, this.len, 0, 0.0);
        this.nodes.push(bos.clone());
        this.nodes.push(eos.clone());
        this.beginNodes[this.len].push(eos);
        this.endNodes[0].push(bos);
    }
    insert(pos, length, score, tokenId) {
        const nodeId = this.nodes.length;
        const node = new TokenLatticeNode(tokenId, nodeId, pos, length, score);
        this.beginNodes[pos].push(node);
        this.endNodes[pos + length].push(node);
        this.nodes.push(node);
    }
    viterbi() {
        const len = this.len;
        let pos = 0;
        while (pos <= len) {
            if (this.beginNodes[pos].length == 0) {
                return [];
            }
            for (let rnode of this.beginNodes[pos]) {
                rnode.prev = null;
                let bestScore = 0.0;
                let bestNode = null;
                for (let lnode of this.endNodes[pos]) {
                    const score = lnode.backtraceScore + rnode.score;
                    if (bestNode === null || score > bestScore) {
                        bestNode = lnode.clone();
                        bestScore = score;
                    }
                }
                if (bestNode !== null) {
                    rnode.prev = bestNode;
                    rnode.backtraceScore = bestScore;
                }
                else {
                    return [];
                }
            }
            pos++;
        }
        const results = [];
        const root = this.beginNodes[len][0];
        const prev = root.prev;
        if (prev === null) {
            return [];
        }
        let node = prev.clone();
        while (node.prev !== null) {
            results.push(node.clone());
            const n = node.clone();
            node = n.prev.clone();
        }
        results.reverse();
        return results;
    }
    piece(node) {
        return this.sentence.slice(node.pos, node.pos + node.length);
    }
    tokens() {
        const nodes = this.viterbi();
        return nodes.map(x => this.piece(x));
    }
    tokenIds() {
        const nodes = this.viterbi();
        return nodes.map(x => x.tokenId);
    }
}
class TokenLatticeNode {
    constructor(tokenId, nodeId, pos, length, score) {
        this.tokenId = tokenId;
        this.nodeId = nodeId;
        this.pos = pos;
        this.length = length;
        this.score = score;
        this.prev = null;
        this.backtraceScore = 0.0;
    }
    clone() {
        const n = new TokenLatticeNode(this.tokenId, this.nodeId, this.pos, this.length, this.score);
        n.prev = this.prev;
        n.backtraceScore = this.backtraceScore;
        return n;
    }
}


module.exports = {
    AutoTokenizer,
    BertTokenizer,
    DistilBertTokenizer,
    T5Tokenizer,
    GPT2Tokenizer
};

/***/ }),

/***/ "./src/transformers.js":
/*!*****************************!*\
  !*** ./src/transformers.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const {
    AutoTokenizer,
    BertTokenizer,
    DistilBertTokenizer,
    T5Tokenizer,
    GPT2Tokenizer
} = __webpack_require__(/*! ./tokenizers.js */ "./src/tokenizers.js");
const {
    AutoModel,
    AutoModelForSequenceClassification,
    AutoModelForSeq2SeqLM,
    AutoModelForCausalLM,
    AutoModelForMaskedLM,
    AutoModelForQuestionAnswering,
    AutoModelForVision2Seq,
    AutoModelForImageClassification,
    T5ForConditionalGeneration
} = __webpack_require__(/*! ./models.js */ "./src/models.js");

const {
    AutoProcessor
} = __webpack_require__(/*! ./processors.js */ "./src/processors.js");
const {
    pipeline
} = __webpack_require__(/*! ./pipelines.js */ "./src/pipelines.js");
const { env } = __webpack_require__(/*! ./env.js */ "./src/env.js");


const moduleExports = {
    // Tokenizers
    AutoTokenizer,
    BertTokenizer,
    DistilBertTokenizer,
    T5Tokenizer,
    GPT2Tokenizer,

    // Models
    AutoModel,
    AutoModelForSeq2SeqLM,
    AutoModelForSequenceClassification,
    AutoModelForCausalLM,
    AutoModelForMaskedLM,
    AutoModelForQuestionAnswering,
    AutoModelForVision2Seq,
    AutoModelForImageClassification,

    T5ForConditionalGeneration,

    // Processors
    AutoProcessor,

    // other
    pipeline,

    // environment variables
    env
};

// Allow global access to these variables
if (typeof self !== 'undefined') {
    // Used by web workers
    Object.assign(self, moduleExports);
}

// Used by other modules
module.exports = moduleExports

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const fs = __webpack_require__(/*! fs */ "?569f");

const { env } = __webpack_require__(/*! ./env.js */ "./src/env.js");

class FileResponse {
    constructor(filePath) {
        this.filePath = filePath;
        this.headers = {};
        this.headers.get = (x) => this.headers[x]

        this.exists = fs.existsSync(filePath);
        if (this.exists) {
            this.status = 200;
            this.statusText = 'OK';


            let stats = fs.statSync(filePath);
            this.headers['content-length'] = stats.size;

            this.updateContentType();

            let self = this;
            this.body = new ReadableStream({
                start(controller) {
                    self.arrayBuffer().then(buffer => {
                        controller.enqueue(new Uint8Array(buffer));
                        controller.close();
                    })
                }
            });
        } else {
            this.status = 404;
            this.statusText = 'Not Found';
            this.body = null;
        }
    }

    updateContentType() {
        // Set content-type header based on file extension
        const extension = this.filePath.split('.').pop().toLowerCase();
        switch (extension) {
            case 'txt':
                this.headers['content-type'] = 'text/plain';
                break;
            case 'html':
                this.headers['content-type'] = 'text/html';
                break;
            case 'css':
                this.headers['content-type'] = 'text/css';
                break;
            case 'js':
                this.headers['content-type'] = 'text/javascript';
                break;
            case 'json':
                this.headers['content-type'] = 'application/json';
                break;
            case 'png':
                this.headers['content-type'] = 'image/png';
                break;
            case 'jpg':
            case 'jpeg':
                this.headers['content-type'] = 'image/jpeg';
                break;
            case 'gif':
                this.headers['content-type'] = 'image/gif';
                break;
            default:
                this.headers['content-type'] = 'application/octet-stream';
                break;
        }
    }

    clone() {
        return new FileResponse(this.filePath, {
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
        });
    }

    async arrayBuffer() {
        const data = await fs.promises.readFile(this.filePath);
        return data.buffer;
    }

    async blob() {
        const data = await fs.promises.readFile(this.filePath);
        return new Blob([data], { type: this.headers['content-type'] });
    }

    async text() {
        const data = await fs.promises.readFile(this.filePath, 'utf8');
        return data;
    }

    async json() {
        return JSON.parse(await this.text());
    }
}

function isValidHttpUrl(string) {
    // https://stackoverflow.com/a/43467144
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

async function getFile(url) {
    // Helper function to get a file, using either the Fetch API or FileSystem API

    if (env.useFS && !isValidHttpUrl(url)) {
        return new FileResponse(url)

    } else {
        return fetch(url)
    }
}

function dispatchCallback(progressCallback, data) {
    if (progressCallback !== null) progressCallback(data);
}

async function getModelFile(modelPath, fileName, progressCallback = null, fatal = true) {

    // Initiate session
    dispatchCallback(progressCallback, {
        status: 'initiate',
        name: modelPath,
        file: fileName
    })

    let cache;
    if (env.useCache) {
        cache = await caches.open('transformers-cache');
    }

    const request = pathJoin(modelPath, fileName);

    let response;
    let responseToCache;

    if (!env.useCache || (response = await cache.match(request)) === undefined) {
        // Caching not available, or model is not cached, so we perform the request
        response = await getFile(request);

        if (response.status === 404) {
            if (fatal) {
                throw Error(`File not found. Could not locate "${request}".`)
            } else {
                // File not found, but this file is optional.
                // TODO in future, cache the response
                return null;
            }
        }

        if (env.useCache) {
            // only clone if cache available
            responseToCache = response.clone();
        }
    }

    // Start downloading
    dispatchCallback(progressCallback, {
        status: 'download',
        name: modelPath,
        file: fileName
    })

    const buffer = await readResponse(response, data => {
        dispatchCallback(progressCallback, {
            status: 'progress',
            ...data,
            name: modelPath,
            file: fileName
        })
    })

    // Check again whether request is in cache. If not, we add the response to the cache
    if (responseToCache !== undefined && await cache.match(request) === undefined) {
        cache.put(request, responseToCache);
    }

    dispatchCallback(progressCallback, {
        status: 'done',
        name: modelPath,
        file: fileName
    });

    return buffer;
}

async function fetchJSON(modelPath, fileName, progressCallback = null, fatal = true) {
    let buffer = await getModelFile(modelPath, fileName, progressCallback, fatal);
    if (buffer === null) {
        // Return empty object
        return {}
    }

    let decoder = new TextDecoder('utf-8');
    let jsonData = decoder.decode(buffer);

    return JSON.parse(jsonData);
}


async function readResponse(response, progressCallback) {
    // Read and track progress when reading a Response object

    const contentLength = response.headers.get('Content-Length');
    if (contentLength === null) {
        console.warn('Unable to determine content-length from response headers. Will expand buffer when needed.')
    }
    let total = parseInt(contentLength ?? '0');
    let buffer = new Uint8Array(total);
    let loaded = 0;

    const reader = response.body.getReader();
    async function read() {
        const { done, value } = await reader.read();
        if (done) return;

        let newLoaded = loaded + value.length;
        if (newLoaded > total) {
            total = newLoaded;

            // Adding the new data will overflow buffer.
            // In this case, we extend the buffer
            let newBuffer = new Uint8Array(total);

            // copy contents
            newBuffer.set(buffer);

            buffer = newBuffer;
        }
        buffer.set(value, loaded)
        loaded = newLoaded;

        const progress = (loaded / total) * 100;

        // Call your function here
        progressCallback({
            progress: progress,
            loaded: loaded,
            total: total,
        })

        return read();
    }

    // Actually read
    await read();

    return buffer;
}

function pathJoin(...parts) {
    // https://stackoverflow.com/a/55142565
    parts = parts.map((part, index) => {
        if (index) {
            part = part.replace(new RegExp('^/'), '');
        }
        if (index !== parts.length - 1) {
            part = part.replace(new RegExp('/$'), '');
        }
        return part;
    })
    return parts.join('/');
}

function reverseDictionary(data) {
    // https://ultimatecourses.com/blog/reverse-object-keys-and-values-in-javascript
    return Object.fromEntries(Object.entries(data).map(([key, value]) => [value, key]));
}

function indexOfMax(arr) {
    // https://stackoverflow.com/a/11301464

    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}


function softmax(arr) {
    // Compute the maximum value in the array
    const max = Math.max(...arr);

    // Compute the exponentials of the array values
    const exps = arr.map(x => Math.exp(x - max));

    // Compute the sum of the exponentials
    const sumExps = exps.reduce((acc, val) => acc + val, 0);

    // Compute the softmax values
    const softmaxArr = exps.map(x => x / sumExps);

    return softmaxArr;
}

function log_softmax(arr) {
    // Compute the softmax values
    const softmaxArr = softmax(arr);

    // Apply log formula to each element
    const logSoftmaxArr = softmaxArr.map(x => Math.log(x));

    return logSoftmaxArr;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function getTopItems(items, top_k = 0) {
    // if top == 0, return all

    items = Array.from(items)
        .map((x, i) => [i, x])            // Get indices ([index, score])
        .sort((a, b) => b[1] - a[1])      // Sort by log probabilities

    if (top_k > 0) {
        items = items.slice(0, top_k);    // Get top k items
    }

    return items
}

function dot(arr1, arr2) {
    return arr1.reduce((acc, val, i) => acc + val * arr2[i], 0);
}

function cos_sim(arr1, arr2) {
    // Calculate dot product of the two arrays
    const dotProduct = dot(arr1, arr2);

    // Calculate the magnitude of the first array
    const magnitudeA = magnitude(arr1);

    // Calculate the magnitude of the second array
    const magnitudeB = magnitude(arr2);

    // Calculate the cosine similarity
    const cosineSimilarity = dotProduct / (magnitudeA * magnitudeB);

    return cosineSimilarity;
}

function magnitude(arr) {
    return Math.sqrt(arr.reduce((acc, val) => acc + val * val, 0));
}


class Callable extends Function {
    constructor() {
        let closure = function (...args) { return closure._call(...args) }
        return Object.setPrototypeOf(closure, new.target.prototype)
    }

    _call(...args) {
        throw Error('Must implement _call method in subclass')
    }
}


function isString(text) {
    return typeof text === 'string' || text instanceof String
}


function isIntegralNumber(x) {
    return Number.isInteger(x) || typeof x === 'bigint'
}

function exists(x) {
    return x !== undefined && x !== null;
}

module.exports = {
    Callable,
    getModelFile,
    dispatchCallback,
    fetchJSON,
    pathJoin,
    reverseDictionary,
    indexOfMax,
    softmax,
    log_softmax,
    escapeRegExp,
    getTopItems,
    dot,
    cos_sim,
    magnitude,
    getFile,
    isIntegralNumber,
    isString,
    exists
};


/***/ }),

/***/ "?569f":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3f59":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/transformers.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=transformers.js.map