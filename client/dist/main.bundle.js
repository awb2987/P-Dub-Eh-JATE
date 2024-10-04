/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var t={16:(t,n,e)=>{"use strict";e.d(n,{A:()=>c});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"/* app shell CSS */\n:root {\n    --primary: #31a9e1;\n    --gray: #ececec;\n    --whitesmoke: #f5f5f5;\n    --dark: #222;\n    --monokai: #272822;\n    --navbar-height: 50px;\n  }\n\n  body {\n    margin: 0;\n    background-color: var(--monokai);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  }\n\n  h1 {\n    font-size: 22px;\n  }\n\n  #navbar {\n    height: var(--navbar-height);\n    background-color: var(--primary);\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n    font-size: 22px;\n    font-weight: 550;\n    letter-spacing: 0.9px;\n  }\n\n  .navbar-brand img {\n    padding-top: 10px;\n  }\n\n  .loading-spinner {\n    animation-duration: 0.75s;\n    animation-iteration-count: infinite;\n    animation-name: rotate-forever;\n    animation-timing-function: linear;\n    height: 30px;\n    width: 30px;\n    border: 3px solid var(--primary);\n    border-right-color: transparent;\n    border-radius: 50%;\n  }\n\n  .loading-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - var(--navbar-height));\n  }\n\n  #buttonInstall.hidden {\n    display: none;\n  }\n\n  @keyframes rotate-forever {\n    0% { transform: rotate(0deg); }\n\n    100% { transform: rotate(360deg); }\n  }\n\n  .app-update {\n    display: none;\n    position: absolute;\n    right: 10px;\n  }\n\n  .app-update.show {\n    display: block;\n  }\n\n  .nav-btn {\n    margin: 25px;\n  }\n\n  .btn {\n    text-align: center;\n    display: inline-block;\n    padding: 0.5rem 1.2rem;\n    margin: 0;\n    text-decoration: none;\n    font-size: 1rem;\n    border-radius: 0.3rem;\n    border: 1px solid transparent;\n    outline: none;\n    color: #1a1a1a;\n    background-color: #aeaeae;\n    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n  }\n\n  .btn:hover {\n    background-color: #cecece;\n    cursor: pointer;\n  }\n\n  /* Additional button styles */\n  .btn.btn-squared { border-radius: 0; }\n\n  .btn.btn-sm { font-size: 0.85rem; padding: 0.3rem 0.9rem; }\n\n  .btn.btn-lg { font-size: 1.25rem; padding: 0.8rem 1.4rem; }\n\n  .btn.btn-block { width: 100%; display: block; text-align: center; }\n\n  .btn.btn-primary { background-color: #2d3e50; color: #d9e9e8; }\n\n  .btn.btn-primary:hover { background-color: #57779a; }\n\n  .btn.btn-danger { background-color: #e64c66; color: #ffffff; }\n\n  .btn.btn-danger:hover { background-color: #ee8294; }\n\n  .btn.btn-info { background-color: #1bbc9b; color: #ffffff; }\n\n  .btn.btn-info:hover { background-color: #31e1bd; }\n\n  .btn.btn-light { background-color: #d9e9e8; color: #1a1a1a; }\n\n  .btn.btn-light:hover { background-color: #84b8b4; }\n\n  .btn.btn-dark { background-color: #1a1a1a; color: #d9e9e8; }\n\n  .btn.btn-dark:hover { background-color: #5f5f5f; }\n\n  .btn.btn-white { background-color: #ffffff; color: #1a1a1a; }\n\n  .btn.btn-white:hover { background-color: #cccccc; }\n\n  .btn.btn-black { background-color: #000000; color: #ffffff; }\n\n  .btn.btn-black:hover { background-color: #666666; }\n\n  .btn.btn-link { background-color: #1b89bc; color: #ffffff; }\n  .btn.btn-link:hover { background-color: #31a9e1; }\n\n  /* Media query for responsiveness */\n  @media only screen and (max-width: 600px) {\n    .nav-btn, .navbar-brand { display: none; }\n\n    #navbar { justify-content: center; }\n\n    h1 { font-size: 18px; }\n  }\n",""]);const c=i},314:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var d=e(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var h=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var l=e(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},633:(t,n,e)=>{var r=e(738).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var n,e={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(t,n,e){t[n]=e.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function d(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{d({},"")}catch(n){d=function(t,n,e){return t[n]=e}}function p(t,n,e,r){var o=n&&n.prototype instanceof w?n:w,a=Object.create(o.prototype),i=new D(r||[]);return c(a,"_invoke",{value:P(t,e,i)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var v="suspendedStart",y="suspendedYield",g="executing",m="completed",b={};function w(){}function x(){}function _(){}var k={};d(k,u,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(A([])));S&&S!==a&&i.call(S,u)&&(k=S);var j=_.prototype=w.prototype=Object.create(k);function L(t){["next","throw","return"].forEach((function(n){d(t,n,(function(t){return this._invoke(n,t)}))}))}function I(t,n){function e(o,a,c,s){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,c,s)}),(function(t){e("throw",t,c,s)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(a,a):a()}})}function P(t,e,r){var o=v;return function(a,i){if(o===g)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=T(c,r);if(s){if(s===b)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var u=h(t,e,r);if("normal"===u.type){if(o=r.done?m:y,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function T(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var a=h(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,b;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,b):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function M(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function A(t){if(t||""===t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(r(t)+" is not iterable")}return x.prototype=_,c(j,"constructor",{value:_,configurable:!0}),c(_,"constructor",{value:x,configurable:!0}),x.displayName=d(_,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,d(t,f,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(I.prototype),d(I.prototype,l,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new I(p(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(j),d(j,f,"Generator"),d(j,u,(function(){return this})),d(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),b},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),b}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),b}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,n,e)=>{var r=e(633)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";try{self["workbox:window:6.5.4"]&&_()}catch(t){}function t(t,n){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(t){e(t.data)},t.postMessage(n,[r.port2])}))}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function r(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.4"]&&_()}catch(t){}var o=function(){var t=this;this.promise=new Promise((function(n,e){t.resolve=n,t.reject=e}))};function a(t,n){var e=location.href;return new URL(t,e).href===new URL(n,e).href}var i=function(t,n){this.type=t,Object.assign(this,n)};function c(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}function s(){}var u={type:"SKIP_WAITING"};function l(t,n){if(!n)return t&&t.then?t.then(s):Promise.resolve()}var f=function(n){var e,r;function s(t,e){var r,s;return void 0===e&&(e={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var t=r.fn,n=t.installing;r.tn>0||!a(n.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=n,t.removeEventListener("updatefound",r.cn)):(r.hn=n,r.an.add(n),r.rn.resolve(n)),++r.tn,n.addEventListener("statechange",r.ln)},r.ln=function(t){var n=r.fn,e=t.target,o=e.state,a=e===r.vn,c={sw:e,isExternal:a,originalEvent:t};!a&&r.mn&&(c.isUpdate=!0),r.dispatchEvent(new i(o,c)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&n.waiting===e&&r.dispatchEvent(new i("waiting",c))}),200):"activating"===o&&(clearTimeout(r.wn),a||r.en.resolve(e))},r.dn=function(t){var n=r.hn,e=n!==navigator.serviceWorker.controller;r.dispatchEvent(new i("controlling",{isExternal:e,originalEvent:t,sw:n,isUpdate:r.mn})),e||r.on.resolve(n)},r.gn=(s=function(t){var n=t.data,e=t.ports,o=t.source;return c(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new i("message",{data:n,originalEvent:t,ports:e,sw:o}))}))},function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(s.apply(this,t))}catch(t){return Promise.reject(t)}}),r.sn=t,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}r=n,(e=s).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var f,d=s.prototype;return d.register=function(t){var n=(void 0===t?{}:t).immediate,e=void 0!==n&&n;try{var r=this;return function(t,n){var e=t();return e&&e.then?e.then(n):n()}((function(){if(!e&&"complete"!==document.readyState)return l(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),c(r.bn(),(function(t){r.fn=t,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var n=r.fn.waiting;return n&&a(n.scriptURL,r.sn.toString())&&(r.hn=n,Promise.resolve().then((function(){r.dispatchEvent(new i("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(t){return Promise.reject(t)}},d.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(n){try{return c(this.getSW(),(function(e){return t(e,n)}))}catch(t){return Promise.reject(t)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&t(this.fn.waiting,u)},d.pn=function(){var t=navigator.serviceWorker.controller;return t&&a(t.scriptURL,this.sn.toString())?t:void 0},d.bn=function(){try{var t=this;return function(t,n){try{var e=t()}catch(t){return n(t)}return e&&e.then?e.then(void 0,n):e}((function(){return c(navigator.serviceWorker.register(t.sn,t.nn),(function(n){return t.un=performance.now(),n}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(s.prototype,f),s}(function(){function t(){this.Pn=new Map}var n=t.prototype;return n.addEventListener=function(t,n){this.Sn(t).add(n)},n.removeEventListener=function(t,n){this.Sn(t).delete(n)},n.dispatchEvent=function(t){t.target=this;for(var n,e=r(this.Sn(t.type));!(n=e()).done;)(0,n.value)(t)},n.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t){var n=function(t){if("object"!=d(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,"string");if("object"!=d(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(n)?n:n+""}function h(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function v(t,n,e){return n&&h(t.prototype,n),e&&h(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,n,e,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function g(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){y(a,r,o,i,c,"next",t)}function c(t){y(a,r,o,i,c,"throw",t)}i(void 0)}))}}var m=e(756),b=e.n(m);let w,x;const k=new WeakMap,E=new WeakMap,S=new WeakMap,j=new WeakMap,L=new WeakMap;let I={get(t,n,e){if(t instanceof IDBTransaction){if("done"===n)return E.get(t);if("objectStoreNames"===n)return t.objectStoreNames||S.get(t);if("store"===n)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return T(t[n])},set:(t,n,e)=>(t[n]=e,!0),has:(t,n)=>t instanceof IDBTransaction&&("done"===n||"store"===n)||n in t};function P(t){return"function"==typeof t?(n=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...t){return n.apply(M(this),t),T(k.get(this))}:function(...t){return T(n.apply(M(this),t))}:function(t,...e){const r=n.call(M(this),t,...e);return S.set(r,t.sort?t.sort():[t]),T(r)}:(t instanceof IDBTransaction&&function(t){if(E.has(t))return;const n=new Promise(((n,e)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{e(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)}));E.set(t,n)}(t),e=t,(w||(w=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,I):t);var n,e}function T(t){if(t instanceof IDBRequest)return function(t){const n=new Promise(((n,e)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(T(t.result)),r()},a=()=>{e(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)}));return n.then((n=>{n instanceof IDBCursor&&k.set(n,t)})).catch((()=>{})),L.set(n,t),n}(t);if(j.has(t))return j.get(t);const n=P(t);return n!==t&&(j.set(t,n),L.set(n,t)),n}const M=t=>L.get(t);function O(t,n,{blocked:e,upgrade:r,blocking:o,terminated:a}={}){const i=indexedDB.open(t,n),c=T(i);return r&&i.addEventListener("upgradeneeded",(t=>{r(T(i.result),t.oldVersion,t.newVersion,T(i.transaction))})),e&&i.addEventListener("blocked",(()=>e())),c.then((t=>{a&&t.addEventListener("close",(()=>a())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const D=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],B=new Map;function C(t,n){if(!(t instanceof IDBDatabase)||n in t||"string"!=typeof n)return;if(B.get(n))return B.get(n);const e=n.replace(/FromIndex$/,""),r=n!==e,o=A.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!D.includes(e))return;const a=async function(t,...n){const a=this.transaction(t,o?"readwrite":"readonly");let i=a.store;return r&&(i=i.index(n.shift())),(await Promise.all([i[e](...n),o&&a.done]))[0]};return B.set(n,a),a}var N;N=I,I={...N,get:(t,n,e)=>C(t,n)||N.get(t,n,e),has:(t,n)=>!!C(t,n)||N.has(t,n)};var W=function(){var t=g(b().mark((function t(){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=g(b().mark((function t(n){var e,r,o,a,i;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("PUT to the database"),t.next=3,O("jate",1);case 3:return e=t.sent,r=e.transaction("jate","readwrite"),o=r.objectStore("jate"),a=o.put({id:1,value:n}),t.next=9,a;case 9:i=t.sent,console.log("Data saved to the database",i.value);case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),R=function(){var t=g(b().mark((function t(){var n,e,r,o,a;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GET from the database"),t.next=3,O("jate",1);case 3:return n=t.sent,e=n.transaction("jate","readonly"),r=e.objectStore("jate"),o=r.get(1),t.next=9,o;case 9:return(a=t.sent)?console.log("Data retrieved from the database",a.value):console.log("Data not found in the database"),t.abrupt("return",null==a?void 0:a.value);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();W();var F=v((function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),R().then((function(t){console.info("Loaded data from IndexedDB, injecting into editor"),n.editor.setValue(t||e||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",n.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),U(localStorage.getItem("content"))}))})),G=e(72),z=e.n(G),q=e(825),H=e.n(q),K=e(659),V=e.n(K),Y=e(56),$=e.n(Y),J=e(540),Q=e.n(J),X=e(113),Z=e.n(X),tt=e(16),nt={};nt.styleTagTransform=Z(),nt.setAttributes=$(),nt.insert=V().bind(null,"head"),nt.domAPI=H(),nt.insertStyleElement=Q(),z()(tt.A,nt),tt.A&&tt.A.locals&&tt.A.locals;var et,rt=document.querySelector("#main");rt.innerHTML="",void 0===new F&&((et=document.createElement("div")).classList.add("spinner"),et.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',rt.appendChild(et)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();