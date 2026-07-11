var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function ee(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ne(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ee(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ee(a,u),c+=ne(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ee(a,u++),c+=ne(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ne(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ee(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ee(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function ee(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ee(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),ee=Symbol.iterator;function te(e){return typeof e!=`object`||!e?null:(e=ee&&e[ee]||e[`@@iterator`],typeof e==`function`?e:null)}var ne=Symbol.for(`react.client.reference`);function j(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?j(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return null}var re=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],oe=-1;function se(e){return{current:e}}function ce(e){0>oe||(e.current=ae[oe],ae[oe]=null,oe--)}function P(e,t){oe++,ae[oe]=e.current,e.current=t}var le=se(null),ue=se(null),de=se(null),fe=se(null);function pe(e,t){switch(P(de,t),P(ue,e),P(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ce(le),P(le,e)}function me(){ce(le),ce(ue),ce(de)}function he(e){e.memoizedState!==null&&P(fe,e);var t=le.current,n=Ud(t,e.type);t!==n&&(P(ue,e),P(le,n))}function ge(e){ue.current===e&&(ce(le),ce(ue)),fe.current===e&&(ce(fe),$f._currentValue=ie)}var _e,ve;function ye(e){if(_e===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);_e=t&&t[1]||``,ve=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+_e+e+ve}var be=!1;function xe(e,t){if(!e||be)return``;be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ye(n):``}function Se(e,t){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye(`Lazy`);case 13:return e.child!==t&&t!==null?ye(`Suspense Fallback`):ye(`Suspense`);case 19:return ye(`SuspenseList`);case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return ye(`Activity`);default:return``}}function Ce(e){try{var t=``,n=null;do t+=Se(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var we=Object.prototype.hasOwnProperty,Te=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,De=t.unstable_shouldYield,Oe=t.unstable_requestPaint,ke=t.unstable_now,Ae=t.unstable_getCurrentPriorityLevel,je=t.unstable_ImmediatePriority,Me=t.unstable_UserBlockingPriority,F=t.unstable_NormalPriority,Ne=t.unstable_LowPriority,Pe=t.unstable_IdlePriority,Fe=t.log,Ie=t.unstable_setDisableYieldValue,Le=null,I=null;function Re(e){if(typeof Fe==`function`&&Ie(e),I&&typeof I.setStrictMode==`function`)try{I.setStrictMode(Le,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Je(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ye(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Ze(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ot(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var L=Math.random().toString(36).slice(2),st=`__reactFiber$`+L,ct=`__reactProps$`+L,lt=`__reactContainer$`+L,ut=`__reactEvents$`+L,dt=`__reactListeners$`+L,ft=`__reactHandles$`+L,pt=`__reactResources$`+L,mt=`__reactMarker$`+L;function ht(e){delete e[st],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function gt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[st])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function _t(e){if(e=e[st]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function yt(e){var t=e[pt];return t||=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function bt(e){e[mt]=!0}var xt=new Set,St={};function Ct(e,t){wt(e,t),wt(e+`Capture`,t)}function wt(e,t){for(St[e]=t,e=0;e<t.length;e++)xt.add(t[e])}var Tt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Et={},Dt={};function Ot(e){return we.call(Dt,e)?!0:we.call(Et,e)?!1:Tt.test(e)?Dt[e]=!0:(Et[e]=!0,!1)}function kt(e,t,n){if(Ot(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function At(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function R(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(re(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=_t(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ct]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(xu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=f({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=f({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(f({},Dn,{dataTransfer:0})),An=yn(f({},Sn,{relatedTarget:0})),jn=yn(f({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(f({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(f({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(f({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(f({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(f({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(f({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(f({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(f({},bn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=ln&&`CompositionEvent`in window,qn=null;ln&&`documentMode`in document&&(qn=document.documentMode);var Jn=ln&&`TextEvent`in window&&!qn,Yn=ln&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Kn&&Qn(e,t)?(e=hn(),mn=pn=fn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Dd(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){bd(e,0)}function lr(e){if(Ft(vt(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(ln){var fr;if(ln){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,tn(e)),sn(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!we.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var kr=ln&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==It(r)||(r=Ar,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Cr(Mr,r)||(Mr=r,r=Dd(jr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionrun:Fr(`Transition`,`TransitionRun`),transitionstart:Fr(`Transition`,`TransitionStart`),transitioncancel:Fr(`Transition`,`TransitionCancel`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};ln&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionrun`),Wr=zr(`transitionstart`),Gr=zr(`transitioncancel`),Kr=zr(`transitionend`),qr=new Map,Jr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Jr.push(`scrollEnd`);function Yr(e,t){qr.set(e,t),Ct(t,[e])}var Xr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Zr=[],Qr=0,$r=0;function ei(){for(var e=Qr,t=$r=Qr=0;t<e;){var n=Zr[t];Zr[t++]=null;var r=Zr[t];Zr[t++]=null;var i=Zr[t];Zr[t++]=null;var a=Zr[t];if(Zr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ii(n,i,a)}}function ti(e,t,n,r){Zr[Qr++]=e,Zr[Qr++]=t,Zr[Qr++]=n,Zr[Qr++]=r,$r|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ni(e,t,n,r){return ti(e,t,n,r),ai(e)}function ri(e,t){return ti(e,null,null,t),ai(e)}function ii(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ai(e){if(50<pu)throw pu=0,mu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function si(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,t,n,r){return new si(e,t,n,r)}function li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ui(e,t){var n=e.alternate;return n===null?(n=ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function di(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)li(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,le.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=ci(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return pi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ci(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ci(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ci(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ci(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=ci(7,e,r,t),e.lanes=n,e}function mi(e,t,n){return e=ci(6,e,null,t),e.lanes=n,e}function hi(e){var t=ci(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=ci(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function vi(e,t){if(typeof e==`object`&&e){var n=_i.get(e);return n===void 0?(t={value:e,source:t,stack:Ce(t)},_i.set(e,t),t):n}return{value:e,source:t,stack:Ce(t)}}var yi=[],bi=0,xi=null,Si=0,Ci=[],wi=0,Ti=null,Ei=1,Di=``;function Oi(e,t){yi[bi++]=Si,yi[bi++]=xi,xi=e,Si=t}function ki(e,t,n){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ti=e;var r=Ei;e=Di;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ei=1<<32-ze(t)+i|n<<i|r,Di=a+e}else Ei=1<<a|n<<i|r,Di=e}function Ai(e){e.return!==null&&(Oi(e,1),ki(e,1,0))}function ji(e){for(;e===xi;)xi=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null;for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Di=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null}function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ei=t.id,Di=t.overflow,Ti=e}var Ni=null,z=null,B=!1,Pi=null,Fi=!1,Ii=Error(i(519));function Li(e){throw Ui(vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ii}function Ri(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ct]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Li(e,!0)}function zi(e){for(Ni=e.return;Ni;)switch(Ni.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Ni=Ni.return}}function Bi(e){if(e!==Ni)return!1;if(!B)return zi(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&z&&Li(e),zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=df(e)}else t===27?(t=z,Qd(e.type)?(e=uf,uf=null,z=e):z=t):z=Ni?lf(e.stateNode.nextSibling):null;return!0}function Vi(){z=Ni=null,B=!1}function Hi(){var e=Pi;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),Pi=null),e}function Ui(e){Pi===null?Pi=[e]:Pi.push(e)}var Wi=se(null),Gi=null,Ki=null;function qi(e,t,n){P(Wi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Wi.current,ce(Wi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Sr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===fe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){Gi=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(Gi,e)}function ta(e,t){return Gi===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,oa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ra,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=fd(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(ma,ma),t}function ma(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ga=M.S;M.S=function(e,t){nu=ke(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ga!==null&&ga(e,t)};var _a=se(null);function va(){var e=_a.current;return e===null?G.pooledCache:e}function ya(e,t){t===null?P(_a,_a.current):P(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:oa._currentValue,pool:e}}var xa=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,xa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,xa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===xa||e===Ca)throw Error(i(483))}var ja=null,Ma=0;function Na(e){var t=Ma;return Ma+=1,ja===null&&(ja=[]),Ea(ja,e,t)}function Pa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Fa(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ui(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Da(i)===t.type)?(t=a(t,n.props),Pa(t,n),t.return=e,t):(t=fi(n.type,n.key,n.props,null,e.mode,r),Pa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=fi(t.type,t.key,t.props,null,e.mode,n),Pa(n,t),n.return=e,n;case v:return t=gi(t,e.mode,n),t.return=e,t;case O:return t=Da(t),f(e,t,n)}if(re(t)||te(t))return t=pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Na(t),n);if(t.$$typeof===C)return f(e,ta(e,t),n);Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Da(n),p(e,t,n,r)}if(re(n)||te(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Na(n),r);if(n.$$typeof===C)return p(e,t,ta(e,n),r);Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Da(r),m(e,t,n,r,i)}if(re(r)||te(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Na(r),i);if(r.$$typeof===C)return m(e,t,n,ta(t,r),i);Fa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&Oi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&Oi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&Oi(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&Oi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&Oi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&Oi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Pa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=pi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=fi(o.type,o.key,o.props,null,e.mode,c),Pa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=gi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Da(o),b(e,r,o,c)}if(re(o))return h(e,r,o,c);if(te(o)){if(l=te(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Na(o),c);if(o.$$typeof===C)return b(e,r,ta(e,o),c);Fa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ma=0;var i=b(e,t,n,r);return ja=null,i}catch(t){if(t===xa||t===Ca)throw t;var a=ci(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var La=Ia(!0),Ra=Ia(!1),za=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Va(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ai(e),ii(e,null,n),t}return ti(e,r,t,n),ai(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ka=!1;function qa(){if(Ka){var e=fa;if(e!==null)throw e}}function Ja(e,t,n,r){Ka=!1;var i=e.updateQueue;za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(q&p)===p:(r&p)===p){p!==0&&p===da&&(Ka=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:za=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Xa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ya(n[e],t)}var Za=se(null),Qa=se(0);function $a(e,t){e=Gl,P(Qa,e),P(Za,t),Gl=e|t.baseLanes}function eo(){P(Qa,Gl),P(Za,Za.current)}function to(){Gl=Qa.current,ce(Za),ce(Qa)}var no=se(null),ro=null;function io(e){var t=e.alternate;P(lo,lo.current&1),P(no,e),ro===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(ro=e)}function ao(e){P(lo,lo.current),P(no,e),ro===null&&(ro=e)}function oo(e){e.tag===22?(P(lo,lo.current),P(no,e),ro===null&&(ro=e)):so(e)}function so(){P(lo,lo.current),P(no,no.current)}function co(e){ce(no),ro===e&&(ro=null),ce(lo)}var lo=se(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=0,V=null,H=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return fo=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Bs:Vs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){M.H=zs;var t=H!==null&&H.next!==null;if(fo=0,po=H=V=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&Qi(e)&&(ic=!0))}function To(e,t,n,r){V=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=Hs,o=t(n,r)}while(ho);return o}function Eo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}fo=0,po=H=V=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?V.memoizedState=po=e:po=po.next=e,po}function jo(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=po===null?V.memoizedState:po.next;if(t!==null)po=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},po===null?V.memoizedState=po=e:po=po.next=e}return po}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Ea(yo,e,t),t=V,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ea(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),H,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(fo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((fo&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,ql|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Sr(o,e.memoizedState)&&(ic=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=V,a=jo(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Sr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||fo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=Mo(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Go(e){var t=ri(e,2);t!==null&&Y(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,H,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(B){var n=G.formState;if(n!==null){a:{var r=V;if(B){if(z){b:{for(var i=z,a=Fi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){z=lf(i.nextSibling),r=i.data===`F!`;break a}}Li(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,V,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,V,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),H,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===xa?Ca:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=H;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=Mo(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();V.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&So(r,H.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(V.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=Mo(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||fo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=gu(),V.lanes|=e,ql|=e,n)}function Ss(e,t,n,r){return Sr(n,t)?n:Za.current===null?!(fo&42)||fo&1073741824&&!(q&261930)?(ic=!0,e.memoizedState=n):(e=gu(),V.lanes|=e,ql|=e,t):(e=xs(e,n,r),Sr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Fs(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ha(c,r),hu(e)):Ps(e,t,r,hu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},hu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ie,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},hu())}function Os(){return ea($f)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=hu();e=Ha(n);var r=Ua(t,e,n);r!==null&&(Y(r,t,n),Wa(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=hu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ni(e,t,n,r),n!==null&&(Y(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,hu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ti(e,t,i,0),G===null&&ei(),!1}catch{}if(n=ni(e,t,i,r),n!==null)return Y(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ni(e,n,r,2),t!==null&&Y(t,e,2)}function Is(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ls(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}var zs={readContext:ea,use:Po,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};zs.useEffectEvent=xo;var Bs={readContext:ea,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,V,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=Ao();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=G.identifierPrefix;if(B){var n=Di,r=Ei;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,V)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ea,use:Po,useCallback:ys,useContext:ea,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),H.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),H,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ea,use:Po,useCallback:ys,useContext:ea,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return H===null?xs(n,e,t):Ss(n,H.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return H===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,H,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hu(),i=Ha(r);i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(Y(t,e,r),Wa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hu(),i=Ha(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(Y(t,e,r),Wa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hu(),r=Ha(n);r.tag=2,t!=null&&(r.callback=t),t=Ua(e,r,n),t!==null&&(Y(t,e,n),Wa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Xr(e)}function Ys(e){console.error(e)}function Xs(e){Xr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ha(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(au===null?au=new Set([this]):au.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=no.current,n!==null){switch(n.tag){case 31:case 13:return ro===null?Ou():n.alternate===null&&Kl===0&&(Kl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),Ou(),!1}if(B)return t=no.current,t===null?(r!==Ii&&(t=Error(i(423),{cause:r}),Ui(vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=vi(r,n),a=$s(e.stateNode,r,a),Ga(e,a),Kl!==4&&(Kl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ii&&(e=Error(i(422),{cause:r}),Ui(vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=vi(o,n),Ql===null?Ql=[o]:Ql.push(o),Kl!==4&&(Kl=2),t===null)return!0;r=vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ga(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(au===null||!au.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ga(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ra(t,null,n,r):La(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),kc(e,t,i)):(B&&s&&Ai(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!li(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=ui(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,kc(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?eo():$a(t,a),oo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),eo(),so(t)):(ya(t,a.cachePool),$a(t,a),so(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=va();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),eo(),oo(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return La(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(ao(t),(e=z)?(e=af(e,Fi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,z=null)):e=null,e===null)throw Li(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ao(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=G,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ri(e,s),Y(r,e,s),rc;Ou(),t=pc(e,t,n)}else e=o.treeContext,z=lf(s.nextSibling),Ni=t,B=!0,Pi=null,Fi=!1,e!==null&&Mi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=ui(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return $i(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),kc(e,t,i)):(B&&r&&Ai(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),kc(e,t,a)):(B&&r&&Ai(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if($i(t),t.stateNode===null){var a=oi,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ba(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):oi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ja(t,r,a,i),qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=oi,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),za=!1;var f=t.memoizedState;a.state=f,Ja(t,r,a,i),qa(),l=t.memoizedState,s||f!==l||za?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=za||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Va(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=oi,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),za=!1,f=t.memoizedState,a.state=f,Ja(t,r,a,i),qa();var p=t.memoizedState;o!==d||f!==p||za||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=za||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function yc(e,t,n,r){return Vi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:ba()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(lo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(B){if(a?io(t):so(t),(e=z)?(e=af(e,Fi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,z=null)):e=null,e===null)throw Li(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(so(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=pi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(io(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(io(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(so(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=pi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,La(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(so(t),t.child=e.child,t.flags|=128,t=null);else if(io(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ui({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=G,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ri(e,r),Y(s,e,r),rc;of(c)||Ou(),t=Ec(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,z=lf(c.nextSibling),Ni=t,B=!0,Pi=null,Fi=!1,e!==null&&Mi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(so(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ui(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=pi(c,a,n,null),c.flags|=2):c=ui(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=ba():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(io(t),n=e.child,e=n.sibling,n=ui(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=ci(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return La(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function U(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=lo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,P(lo,o),ac(e,t,r,n),r=B?Si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),qi(t,oa,e.memoizedState.cache),Vi();break;case 27:case 5:he(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(io(t),e=kc(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(io(t),t.flags|=128,null);io(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return U(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(lo,lo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:qi(t,oa,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!Ac(e,n)&&!(t.flags&128))return ic=!1,jc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,B&&t.flags&1048576&&ki(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)li(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=j(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Va(e,t),Ja(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,oa,r),r!==o.cache&&Xi(t,[oa],n,!0),qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=vi(Error(i(424)),t),Ui(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(z=lf(e.firstChild),Ni=t,B=!0,Pi=null,Fi=!0,n=Ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===a){t=kc(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(n=t.type,e=t.pendingProps,r=Vd(de.current).createElement(n),r[st]=t,r[ct]=e,Fd(r,n,e),bt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),e===null&&B&&(r=t.stateNode=pf(t.type,t.pendingProps,de.current),Ni=t,Fi=!0,a=z,Qd(t.type)?(uf=a,z=lf(r.firstChild)):z=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=z)&&(r=nf(r,t.type,t.pendingProps,Fi),r===null?a=!1:(t.stateNode=r,Ni=t,z=lf(r.firstChild),Fi=!1,a=!0)),a||Li(t)),he(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),$f._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=z)&&(n=rf(n,t.pendingProps,Fi),n===null?e=!1:(t.stateNode=n,Ni=t,z=null,e=!0)),e||Li(t)),null;case 13:return Cc(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=La(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return U(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(oa),e===null?(a=va(),a===null&&(a=G,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ba(t),qi(t,oa,a)):((e.lanes&n)!==0&&(Va(e,t),Ja(t,null,null,n),qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,oa,r),r!==a.cache&&Xi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,oa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw Oa=wa,Sa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Tu())e.flags|=8192;else throw Oa=wa,Sa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Xe(),e.lanes|=t,Zl|=t)}function Lc(e,t){if(!B)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Rc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rc(t),null;case 1:return Rc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(oa),me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hi())),Rc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(Rc(t),Pc(t,a,null,r,n)):(Rc(t),Fc(t,o))):o?o===e.memoizedState?(Rc(t),t.flags&=-16777217):(Nc(t),Rc(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),Rc(t),Pc(t,a,e,r,n)),null;case 27:if(ge(t),n=de.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Rc(t),null}e=le.current,Bi(t)?Ri(t,e):(e=pf(a,r,n),t.stateNode=e,Nc(t))}return Rc(t),null;case 5:if(ge(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Rc(t),null}if(o=le.current,Bi(t))Ri(t,o);else{var s=Vd(de.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[st]=t,o[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return Rc(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=de.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ni,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||Li(t,!0)}else e=Vd(e).createTextNode(r),e[st]=t,t.stateNode=e}return Rc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Bi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[st]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rc(t),e=!1}else n=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if(t.flags&128)throw Error(i(558))}return Rc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[st]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rc(t),a=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(co(t),t):(co(t),null)}return co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),Rc(t),null);case 4:return me(),e===null&&Cd(t.stateNode.containerInfo),Rc(t),null;case 10:return Ji(t.type),Rc(t),null;case 19:if(ce(lo),r=t.memoizedState,r===null)return Rc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Kl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)di(n,e),n=n.sibling;return P(lo,lo.current&1|2),B&&Oi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ke()>ru&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!B)return Rc(t),null}else 2*ke()-r.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Rc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,n=lo.current,P(lo,a?n&1|2:n&1),B&&Oi(t,r.treeForkCount),e);case 22:case 23:return co(t),to(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Rc(t),t.subtreeFlags&6&&(t.flags|=8192)):Rc(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ce(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(oa),Rc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(oa),me(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ge(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(lo),null;case 4:return me(),null;case 10:return Ji(t.type),null;case 22:case 23:return co(t),to(),e!==null&&ce(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(oa),null;case 25:return null;default:return null}}function Vc(e,t){switch(ji(t),t.tag){case 3:Ji(oa),me();break;case 26:case 27:case 5:ge(t);break;case 4:me();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:ce(lo);break;case 10:Ji(t.type);break;case 22:case 23:co(t),to(),e!==null&&ce(_a);break;case 24:Ji(oa)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xa(t,n)}catch(t){X(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[ct]=t}catch(t){X(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[st]=e,t[ct]=n}catch(t){X(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,zd=sp,e=Dr(e),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Hc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xa(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),tl=i,nl=a}break;case 30:break;default:Sl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ll=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(I&&typeof I.onCommitFiberUnmount==`function`)try{I.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=ll,i=ul;Qd(n.type)&&(ll=n.stateNode,ul=!1),dl(e,t,n),mf(n.stateNode),ll=r,ul=i;break;case 5:nl||qc(n,t);case 6:if(r=ll,i=ul,ll=null,dl(e,t,n),ll=r,ul=i,ll!==null)if(ul)try{(ll.nodeType===9?ll.body:ll.nodeName===`HTML`?ll.ownerDocument.body:ll).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{ll.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:ll!==null&&(ul?(e=ll,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):$d(ll,n.stateNode));break;case 4:r=ll,i=ul,ll=n.stateNode.containerInfo,ul=!0,dl(e,t,n),ll=r,ul=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),dl(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,dl(e,t,n),nl=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){X(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){X(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){ll=c.stateNode,ul=!1;break a}break;case 5:ll=c.stateNode,ul=!1;break a;case 3:case 4:ll=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(ll===null)throw Error(i(160));fl(o,s,a),ll=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[mt]||o[st]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[st]=e,bt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[st]=e,bt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Vf=null,a=vl,vl=_f(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){X(e,e.return,t)}rl&&(rl=!1,xl(e));break;case 4:r=vl,vl=_f(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(tu=ke()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,_l(t,e),nl=d,tl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Cl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Cl(t);break;case 27:mf(t.stateNode);case 26:case 5:qc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Hc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ya(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Kc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Hc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Kf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=_f(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var zl={getCacheForType:function(e){var t=ea(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(oa).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,tu=0,nu=0,ru=1/0,iu=null,au=null,ou=0,su=null,cu=null,lu=0,uu=0,du=null,fu=null,pu=0,mu=null;function hu(){return W&2&&q!==0?q&-q:M.T===null?at():fd()}function gu(){if(Xl===0)if(!(q&536870912)||B){var e=We;We<<=1,!(We&3932160)&&(We=262144),Xl=e}else Xl=536870912;return e=no.current,e!==null&&(e.flags|=32),Xl}function Y(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,q,Xl,!1)),Qe(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(Jl|=n),Kl===4&&bu(e,q,Xl,!1)),id(e))}function _u(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Je(e,t),a=r?ju(e,t):ku(e,t,!0),o=r;do{if(a===0){Ul&&!r&&bu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!yu(n)){a=ku(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,s).flags|=256),s=ku(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,Jl|=o,a=4;break a}o=$l,$l=a,o!==null&&($l===null?$l=o:$l.push.apply($l,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Xl,!Hl);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=tu+300-ke(),10<a)){if(bu(r,t,Xl,!Hl),qe(r,0,!0)!==0)break a;lu=t,r.timeoutHandle=qd(vu.bind(null,r,n,$l,iu,eu,t,Xl,Jl,Zl,Hl,o,`Throttled`,-0,0),a);break a}vu(r,n,$l,iu,eu,t,Xl,Jl,Zl,Hl,o,null,-0,0)}}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Nl(t,a,d);var m=(a&62914560)===a?tu-ke():(a&4194048)===a?nu-ke():0;if(m=Jf(d,m),m!==null){lu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&et(e,n,t)}function xu(){return W&6?!0:(ad(0,!1),!1)}function Su(){if(K!==null){if(J===0)var e=K.return;else e=K,Ki=Gi=null,ko(e),ja=null,Ma=0,e=K;for(;e!==null;)Vc(e.alternate,e),e=e.return;K=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),lu=0,Su(),G=e,K=n=ui(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=Je(e,t),Wl=!1,Zl=Xl=Yl=Jl=ql=Kl=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ei(),n}function wu(e,t){V=null,M.H=zs,t===xa||t===Ca?(t=ka(),J=3):t===Sa?(t=ka(),J=4):J=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Kl=1,Zs(e,vi(t,e.current)))}function Tu(){var e=no.current;return e===null?!0:(q&4194048)===q?ro===null:(q&62914560)===q||q&536870912?e===ro:!1}function Eu(){var e=M.H;return M.H=zs,e===null?zs:e}function Du(){var e=M.A;return M.A=zl,e}function Ou(){Kl=4,Hl||(q&4194048)!==q&&no.current!==null||(Ul=!0),!(ql&134217727)&&!(Jl&134217727)||G===null||bu(G,q,Xl,!1)}function ku(e,t,n){var r=W;W|=2;var i=Eu(),a=Du();(G!==e||q!==t)&&(iu=null,Cu(e,t)),t=!1;var o=Kl;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:no.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Fu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Fu(e,s,c,l)}}Au(),o=Kl;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=Gi=null,W=r,M.H=i,M.A=a,K===null&&(G=null,q=0,ei()),o}function Au(){for(;K!==null;)Nu(K)}function ju(e,t){var n=W;W|=2;var r=Eu(),a=Du();G!==e||q!==t?(iu=null,ru=ke()+500,Cu(e,t)):Ul=Je(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Fu(e,t,o,1);break;case 2:case 9:if(Ta(o)){J=0,Vl=null,Pu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),id(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ta(o)?(J=0,Vl=null,Pu(t)):(J=0,Vl=null,Fu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Gf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Iu(u))}break b}}J=0,Vl=null,Fu(e,t,o,5);break;case 6:J=0,Vl=null,Fu(e,t,o,6);break;case 8:Su(),Kl=6;break a;default:throw Error(i(462))}}Mu();break}catch(t){wu(e,t)}while(1);return Ki=Gi=null,M.H=r,M.A=a,W=n,K===null?(G=null,q=0,ei(),Kl):0}function Mu(){for(;K!==null&&!De();)Nu(K)}function Nu(e){var t=Mc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Iu(e):K=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:ko(t);default:Vc(n,t),t=K=di(t,Gl),t=Mc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):K=t}function Fu(e,t,n,r){Ki=Gi=null,ko(t),ja=null,Ma=0;var i=t.return;try{if(nc(e,i,t,n,q)){Kl=1,Zs(e,vi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Kl=1,Zs(e,vi(n,e.current)),K=null;return}t.flags&32768?(B||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=no.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Hl);return}e=t.return;var n=zc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Kl===0&&(Kl=5)}function Lu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Kl=6,K=null}function Ru(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Uu();while(ou!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=$r,$e(e,n,o,s,c,l),e===G&&(K=G=null,q=0),cu=t,su=e,lu=n,uu=o,du=a,fu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(F,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=W,W|=4;try{ol(e,t,n)}finally{W=s,N.p=a,M.T=r}}ou=1,zu(),Bu(),Vu()}}function zu(){if(ou===1){ou=0;var e=su,t=cu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=W;W|=4;try{yl(t,e);var a=Bd,o=Dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Er(s.ownerDocument.documentElement,s)){if(c!==null&&Or(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Tr(s,h),v=Tr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!zd,Bd=zd=null}finally{W=i,N.p=r,M.T=n}}e.current=t,ou=2}}function Bu(){if(ou===2){ou=0;var e=su,t=cu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=W;W|=4;try{sl(e,t.alternate,t)}finally{W=i,N.p=r,M.T=n}}ou=3}}function Vu(){if(ou===4||ou===3){ou=0,Oe();var e=su,t=cu,n=lu,r=fu;t.subtreeFlags&10256||t.flags&10256?ou=5:(ou=0,cu=su=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(au=null),it(n),t=t.stateNode,I&&typeof I.onCommitFiberRoot==`function`)try{I.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}lu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===mu?pu++:(pu=0,mu=e):pu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(ou!==5)return!1;var e=su,t=uu;uu=0;var n=it(lu),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=du,du=null;var o=su,s=lu;if(ou=0,cu=su=null,lu=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,ad(0,!1),I&&typeof I.onPostCommitFiberRoot==`function`)try{I.onPostCommitFiberRoot(Le,o)}catch{}return!0}finally{N.p=a,M.T=r,Hu(e,t)}}function Gu(e,t,n){t=vi(n,t),t=$s(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(Qe(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(au===null||!au.has(r))){e=vi(n,e),n=ec(2),r=Ua(t,n,2),r!==null&&(tc(n,r,t,e),Qe(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Kl===4||Kl===3&&(q&62914560)===q&&300>ke()-tu?!(W&2)&&Cu(e,0):Yl|=n,Zl===q&&(Zl=0)),id(e)}function Ju(e,t){t===0&&(t=Xe()),e=ri(e,t),e!==null&&(Qe(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Te(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=q,a=qe(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Je(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Kd()&&(e=rd);for(var t=ke(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}ou!==0&&ou!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ye(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Je(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ee(r),it(n)){case 2:case 8:n=Me;break;case 32:n=F;break;case 268435456:n=Pe;break;default:n=F}return r=ld.bind(null,e),n=Te(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(ou!==0&&ou!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=q;return r=qe(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,ke()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Xd(function(){W&6?Te(je,od):sd()})}function fd(){if(rd===0){var e=da;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<Jr.length;gd++){var _d=Jr[gd];Yr(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}Yr(Br,`onAnimationEnd`),Yr(Vr,`onAnimationIteration`),Yr(Hr,`onAnimationStart`),Yr(`dblclick`,`onDoubleClick`),Yr(`focusin`,`onFocus`),Yr(`focusout`,`onBlur`),Yr(Ur,`onTransitionRun`),Yr(Wr,`onTransitionStart`),Yr(Gr,`onTransitionCancel`),Yr(Kr,`onTransitionEnd`),wt(`onMouseEnter`,[`mouseout`,`mouseover`]),wt(`onMouseLeave`,[`mouseout`,`mouseover`]),wt(`onPointerEnter`,[`pointerout`,`pointerover`]),wt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ct(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ct(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ct(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ct(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,xt.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=gt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=qr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case Br:case Vr:case Hr:l=jn;break;case Kr:l=Hn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(gt(u)||u[lt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?gt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:vt(l),h=u==null?c:vt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,gt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Od,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&kd(s,c,l,d,!1),u!==null&&f!==null&&kd(s,f,u,d,!0)}}a:{if(c=r?vt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ur;else if(ir(c))if(dr)v=br;else{v=vr;var y=_r}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=ur):v=yr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?vt(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(Ar=y,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(s,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else er?Qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(er||x!==`onCompositionStart`?x===`onCompositionEnd`&&er&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,er=!0)),y=Dd(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=$n(n),b!==null&&(x.data=b)))),(b=Jn?tr(e,n):nr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),hd(s,e,r,n,i)}bd(s,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=cn(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:At(e,`class`,r);break;case`tabIndex`:At(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:At(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){At(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,a.name,a,null),Q(e,t,`formEncType`,a.formEncType,a,null),Q(e,t,`formMethod`,a.formMethod,a,null),Q(e,t,`formTarget`,a.formTarget,a,null)):(Q(e,t,`encType`,a.encType,a,null),Q(e,t,`method`,a.method,a,null),Q(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),kt(e,`popover`,r);break;case`xlinkActuate`:R(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:R(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:R(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:R(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:R(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:R(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:R(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:R(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:R(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:kt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,kt(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ct]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):kt(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,o,s,n,null)}}a&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Q(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Q(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Q(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Q(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Q(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Q(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Q(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Np(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),ht(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=N.d;N.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=xu();return e||t}function bf(e){var t=_t(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),bt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=yt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);bt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=yt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),bt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=yt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),bt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=de.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=yt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=yt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=yt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Rt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),bt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Rt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,bt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),bt(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,bt(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),bt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,bt(a),a):(r=n,(a=hf.get(o))&&(r=f({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),bt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[mt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,bt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function $(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ci(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ba(a),e}function tp(e){return e?(e=oi,e):oi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ha(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ua(e,r,t),n!==null&&(Y(n,e,t),Wa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ri(e,67108864);t!==null&&Y(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=hu();t=rt(t);var n=ri(e,t);n!==null&&Y(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Td(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=_t(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}id(a),!(W&6)&&(ru=ke()+500,ad(0,!1))}}break;case 31:case 13:s=ri(a,2),s!==null&&Y(s,a,2),xu(),ip(a,2)}if(a=dp(r),a===null&&Td(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=gt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ae()){case je:return 2;case Me:return 8;case F:case Ne:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=_t(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=gt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=_t(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=_t(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,hu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),xu(),t[lt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Le=zp.inject(Rp),I=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[lt]=t.current,Cd(e),new Fp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),x=s(((e,t)=>{t.exports=b()})),S=u(p(),1),C=(0,S.createContext)({});function w(e){let t=(0,S.useRef)(null);return t.current===null&&(t.current=e()),t.current}var T=typeof window<`u`?S.useLayoutEffect:S.useEffect,E=(0,S.createContext)(null);function D(e,t){e.indexOf(t)===-1&&e.push(t)}function O(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var k=(e,t,n)=>n>t?t:n<e?e:n,A={},ee=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),te=e=>typeof e==`object`&&!!e,ne=e=>/^0[^.\s]+$/u.test(e);function j(e){let t;return()=>(t===void 0&&(t=e()),t)}var re=e=>e,M=(...e)=>e.reduce((e,t)=>n=>t(e(n))),N=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},ie=class{constructor(){this.subscriptions=[]}add(e){return D(this.subscriptions,e),()=>O(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},ae=e=>e*1e3,oe=e=>e/1e3,se=(e,t)=>t?1e3/t*e:0,ce=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,P=1e-7,le=12;function ue(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=ce(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>P&&++s<le);return o}function de(e,t,n,r){if(e===t&&n===r)return re;let i=t=>ue(t,0,1,e,n);return e=>e===0||e===1?e:ce(i(e),t,r)}var fe=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,pe=e=>t=>1-e(1-t),me=de(.33,1.53,.69,.99),he=pe(me),ge=fe(he),_e=e=>e>=1?1:(e*=2)<1?.5*he(e):.5*(2-2**(-10*(e-1))),ve=e=>1-Math.sin(Math.acos(e)),ye=pe(ve),be=fe(ve),xe=de(.42,0,1,1),Se=de(0,0,.58,1),Ce=de(.42,0,.58,1),we=e=>Array.isArray(e)&&typeof e[0]!=`number`,Te=e=>Array.isArray(e)&&typeof e[0]==`number`,Ee={linear:re,easeIn:xe,easeInOut:Ce,easeOut:Se,circIn:ve,circInOut:be,circOut:ye,backIn:he,backInOut:ge,backOut:me,anticipate:_e},De=e=>typeof e==`string`,Oe=e=>{if(Te(e)){e.length;let[t,n,r,i]=e;return de(t,n,r,i)}else if(De(e))return Ee[e],`${e}`,Ee[e];return e},ke=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Ae(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var je=40;function Me(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ke.reduce((e,t)=>(e[t]=Ae(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=A.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,je),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:ke.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<ke.length;t++)o[ke[t]].cancel(e)},state:i,steps:o}}var{schedule:F,cancel:Ne,state:Pe,steps:Fe}=Me(typeof requestAnimationFrame<`u`?requestAnimationFrame:re,!0),Ie;function Le(){Ie=void 0}var I={now:()=>(Ie===void 0&&I.set(Pe.isProcessing||A.useManualTiming?Pe.timestamp:performance.now()),Ie),set:e=>{Ie=e,queueMicrotask(Le)}},Re=e=>t=>typeof t==`string`&&t.startsWith(e),ze=Re(`--`),Be=Re(`var(--`),Ve=e=>Be(e)?He.test(e.split(`/*`)[0].trim()):!1,He=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ue(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var We={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Ge={...We,transform:e=>k(0,1,e)},Ke={...We,default:1},qe=e=>Math.round(e*1e5)/1e5,Je=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ye(e){return e==null}var Xe=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ze=(e,t)=>n=>!!(typeof n==`string`&&Xe.test(n)&&n.startsWith(e)||t&&!Ye(n)&&Object.prototype.hasOwnProperty.call(n,t)),Qe=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Je);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},$e=e=>k(0,255,e),et={...We,transform:e=>Math.round($e(e))},tt={test:Ze(`rgb`,`red`),parse:Qe(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+et.transform(e)+`, `+et.transform(t)+`, `+et.transform(n)+`, `+qe(Ge.transform(r))+`)`};function nt(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var rt={test:Ze(`#`),parse:nt,transform:tt.transform},it=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),at=it(`deg`),ot=it(`%`),L=it(`px`),st=it(`vh`),ct=it(`vw`),lt={...ot,parse:e=>ot.parse(e)/100,transform:e=>ot.transform(e*100)},ut={test:Ze(`hsl`,`hue`),parse:Qe(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+ot.transform(qe(t))+`, `+ot.transform(qe(n))+`, `+qe(Ge.transform(r))+`)`},dt={test:e=>tt.test(e)||rt.test(e)||ut.test(e),parse:e=>tt.test(e)?tt.parse(e):ut.test(e)?ut.parse(e):rt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?tt.transform(e):ut.transform(e),getAnimatableNone:e=>{let t=dt.parse(e);return t.alpha=0,dt.transform(t)}},ft=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pt(e){return isNaN(e)&&typeof e==`string`&&(e.match(Je)?.length||0)+(e.match(ft)?.length||0)>0}var mt=`number`,ht=`color`,gt=`var`,_t=`var(`,vt="${}",yt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bt(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(yt,e=>(dt.test(e)?(r.color.push(a),i.push(ht),n.push(dt.parse(e))):e.startsWith(_t)?(r.var.push(a),i.push(gt),n.push(e)):(r.number.push(a),i.push(mt),n.push(parseFloat(e))),++a,vt)).split(vt),indexes:r,types:i}}function xt(e){return bt(e).values}function St({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===mt?i+=qe(r[a]):e===ht?i+=dt.transform(r[a]):i+=r[a]}return i}}function Ct(e){return St(bt(e))}var wt=e=>typeof e==`number`?0:dt.test(e)?dt.getAnimatableNone(e):e,Tt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:wt(e);function Et(e){let t=bt(e);return St(t)(t.values.map((e,n)=>Tt(e,t.split[n])))}var Dt={test:pt,parse:xt,createTransformer:Ct,getAnimatableNone:Et};function Ot(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function kt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Ot(s,r,e+1/3),a=Ot(s,r,e),o=Ot(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function At(e,t){return n=>n>0?t:e}var R=(e,t,n)=>e+(t-e)*n,jt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Mt=[rt,tt,ut],Nt=e=>Mt.find(t=>t.test(e));function Pt(e){let t=Nt(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===ut&&(n=kt(n)),n}var Ft=(e,t)=>{let n=Pt(e),r=Pt(t);if(!n||!r)return At(e,t);let i={...n};return e=>(i.red=jt(n.red,r.red,e),i.green=jt(n.green,r.green,e),i.blue=jt(n.blue,r.blue,e),i.alpha=R(n.alpha,r.alpha,e),tt.transform(i))},It=new Set([`none`,`hidden`]);function Lt(e,t){return It.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Rt(e,t){return n=>R(e,t,n)}function zt(e){return typeof e==`number`?Rt:typeof e==`string`?Ve(e)?At:dt.test(e)?Ft:Ut:Array.isArray(e)?Bt:typeof e==`object`?dt.test(e)?Ft:Vt:At}function Bt(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>zt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Vt(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=zt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ht(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Ut=(e,t)=>{let n=Dt.createTransformer(t),r=bt(e),i=bt(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?It.has(e)&&!i.values.length||It.has(t)&&!r.values.length?Lt(e,t):M(Bt(Ht(r,i),i.values),n):(`${e}${t}`,At(e,t))};function Wt(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?R(e,t,n):zt(e)(e,t)}var Gt=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>F.update(t,e),stop:()=>Ne(t),now:()=>Pe.isProcessing?Pe.timestamp:I.now()}},Kt=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},qt=2e4;function Jt(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Yt(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Jt(r),qt);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:oe(i)}}var Xt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Zt(e,t){return e*Math.sqrt(1-t*t)}var Qt=12;function $t(e,t,n){let r=n;for(let n=1;n<Qt;n++)r-=e(r)/t(r);return r}var en=.001;function tn({duration:e=Xt.duration,bounce:t=Xt.bounce,velocity:n=Xt.velocity,mass:r=Xt.mass}){let i,a;Xt.maxDuration;let o=1-t;o=k(Xt.minDamping,Xt.maxDamping,o),e=k(Xt.minDuration,Xt.maxDuration,oe(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Zt(t,o),c=Math.exp(-i);return en-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Zt(t**2,o);return(-i(t)+en>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=$t(i,a,s);if(e=ae(e),isNaN(c))return{stiffness:Xt.stiffness,damping:Xt.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var nn=[`duration`,`bounce`],rn=[`stiffness`,`damping`,`mass`];function an(e,t){return t.some(t=>e[t]!==void 0)}function on(e){let t={velocity:Xt.velocity,stiffness:Xt.stiffness,damping:Xt.damping,mass:Xt.mass,isResolvedFromDuration:!1,...e};if(!an(e,rn)&&an(e,nn))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*k(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Xt.mass,stiffness:i,damping:a}}else{let n=tn({...e,velocity:0});t={...t,...n,mass:Xt.mass},t.isResolvedFromDuration=!0}return t}function sn(e=Xt.visualDuration,t=Xt.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=on({...n,velocity:-oe(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=oe(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?Xt.restSpeed.granular:Xt.restSpeed.default,i||=v?Xt.restDelta.granular:Xt.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Zt(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>ae(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=ae(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=ae(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Jt(T),qt),t=Kt(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}sn.applyToOptions=e=>{let t=Yt(e,100,sn);return e.ease=t.ease,e.duration=ae(t.duration),e.type=`keyframes`,e};var cn=5;function ln(e,t,n){let r=Math.max(t-cn,0);return se(n-e(r),t-r)}function un({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=sn({keyframes:[f.value,m(f.value)],velocity:ln(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function dn(e,t,n){let r=[],i=n||A.mix||Wt,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=M(Array.isArray(t)?t[n]||re:t,a)),r.push(a)}return r}function fn(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=dn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=N(e[r],e[r+1],n);return s[r](i)};return n?t=>l(k(e[0],e[a-1],t)):l}function pn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=N(0,t,r);e.push(R(n,1,i))}}function mn(e){let t=[0];return pn(t,e.length-1),t}function hn(e,t){return e.map(e=>e*t)}function gn(e,t){return e.map(()=>t||Ce).splice(0,e.length-1)}function _n({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=we(r)?r.map(Oe):Oe(r),a={done:!1,value:t[0]},o=fn(hn(n&&n.length===t.length?n:mn(t),e),t,{ease:Array.isArray(i)?i:gn(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var vn=e=>e!==null;function yn(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(vn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var bn={decay:un,inertia:un,tween:_n,keyframes:_n,spring:sn};function xn(e){typeof e.type==`string`&&(e.type=bn[e.type])}var Sn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Cn=e=>e/100,wn=class extends Sn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==I.now()&&this.tick(I.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;xn(e);let{type:t=_n,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||_n;s!==_n&&typeof o[0]!=`number`&&(this.mixKeyframes=M(Cn,Wt(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Jt(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=k(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==un&&(b.value=yn(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return oe(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+oe(e)}get time(){return oe(this.currentTime)}set time(e){e=ae(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return ln(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(I.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=oe(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Gt,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(I.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Tn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var En=e=>e*180/Math.PI,Dn=e=>kn(En(Math.atan2(e[1],e[0]))),On={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Dn,rotateZ:Dn,skewX:e=>En(Math.atan(e[1])),skewY:e=>En(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},kn=e=>(e%=360,e<0&&(e+=360),e),An=Dn,jn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Mn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Nn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:jn,scaleY:Mn,scale:e=>(jn(e)+Mn(e))/2,rotateX:e=>kn(En(Math.atan2(e[6],e[5]))),rotateY:e=>kn(En(Math.atan2(-e[2],e[0]))),rotateZ:An,rotate:An,skewX:e=>En(Math.atan(e[4])),skewY:e=>En(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Pn(e){return+!!e.includes(`scale`)}function Fn(e,t){if(!e||e===`none`)return Pn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Nn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=On,i=t}if(!i)return Pn(t);let a=r[t],o=i[1].split(`,`).map(Ln);return typeof a==`function`?a(o):o[a]}var In=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Fn(n,t)};function Ln(e){return parseFloat(e.trim())}var Rn=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],zn=new Set([...Rn,`pathRotation`]),Bn=e=>e===We||e===L,Vn=new Set([`x`,`y`,`z`]),Hn=Rn.filter(e=>!Vn.has(e));function Un(e){let t=[];return Hn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Wn={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Fn(t,`x`),y:(e,{transform:t})=>Fn(t,`y`)};Wn.translateX=Wn.x,Wn.translateY=Wn.y;var Gn=new Set,Kn=!1,qn=!1,Jn=!1;function Yn(){if(qn){let e=Array.from(Gn).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Un(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}qn=!1,Kn=!1,Gn.forEach(e=>e.complete(Jn)),Gn.clear()}function Xn(){Gn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(qn=!0)})}function Zn(){Jn=!0,Xn(),Yn(),Jn=!1}var Qn=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Gn.add(this),Kn||(Kn=!0,F.read(Xn),F.resolveKeyframes(Yn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Tn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Gn.delete(this)}cancel(){this.state===`scheduled`&&(Gn.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},$n=e=>e.startsWith(`--`);function er(e,t,n){$n(t)?e.style.setProperty(t,n):e.style[t]=n}var tr={};function nr(e,t){let n=j(e);return()=>tr[t]??n()}var rr=nr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),ir=nr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ar=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,or={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ar([0,.65,.55,1]),circOut:ar([.55,0,1,.45]),backIn:ar([.31,.01,.66,-.59]),backOut:ar([.33,1.53,.69,.99])};function sr(e,t){if(e)return typeof e==`function`?ir()?Kt(e,t):`ease-out`:Te(e)?ar(e):Array.isArray(e)?e.map(e=>sr(e,t)||or.easeOut):or[e]}function cr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=sr(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function lr(e){return typeof e==`function`&&`applyToOptions`in e}function ur({type:e,...t}){return lr(e)&&ir()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var dr=class extends Sn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=ur(e);this.animation=cr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=yn(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),er(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return oe(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+oe(e)}get time(){return oe(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ae(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&rr()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),re):r(this)}},fr={anticipate:_e,backInOut:ge,circInOut:be};function pr(e){return e in fr}function mr(e){typeof e.ease==`string`&&pr(e.ease)&&(e.ease=fr[e.ease])}var hr=10,gr=class extends dr{constructor(e){mr(e),xn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new wn({...a,autoplay:!1}),s=Math.max(hr,I.now()-this.startTime),c=k(0,hr,s-hr),l=o.sample(s).value,{name:u}=this.options;i&&u&&er(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},_r=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Dt.test(e)||e===`0`)&&!e.startsWith(`url(`));function vr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function yr(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=_r(i,t),s=_r(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:vr(e)||(n===`spring`||lr(n))&&r}function br(e){e.duration=0,e.type=`keyframes`}var xr=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Sr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Cr(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Sr.test(e[t]))return!0;return!1}var wr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Tr=j(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Er(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Tr()&&n&&(xr.has(n)||wr.has(n)&&Cr(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Dr=40,Or=class extends Sn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=I.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Qn;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=I.now();let u=!0;yr(e,i,a,o)||(u=!1,(A.instantAnimations||!s)&&l?.(yn(e,n,t)),e[0]=e[e.length-1],br(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Dr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Er(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new gr({...d,element:p})}catch{m=new wn(d)}else m=new wn(d);m.finished.then(()=>{this.notifyFinished()}).catch(re),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Zn()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function kr(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ar=30,jr=e=>!isNaN(parseFloat(e)),Mr={current:void 0},Nr=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=I.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=I.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=jr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new ie);let n=this.events[e].add(t);return e===`change`?()=>{n(),F.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Mr.current&&Mr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=I.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ar)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ar);return se(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Pr(e,t){return new Nr(e,t)}function Fr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Ir(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Fr(n,e)}var Lr={type:`spring`,stiffness:500,damping:25,restSpeed:10},Rr=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),zr={type:`keyframes`,duration:.8},Br={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Vr=(e,{keyframes:t})=>t.length>2?zr:zn.has(e)?e.startsWith(`scale`)?Rr(t[1]):Lr:Br,Hr=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Ur(e){for(let t in e)if(!Hr.has(t))return!0;return!1}var Wr=(e,t,n,r={},i,a)=>o=>{let s=Ir(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=ae(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Ur(s)||Object.assign(u,Vr(e,u)),u.duration&&=ae(u.duration),u.repeatDelay&&=ae(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(br(u),u.delay===0&&(d=!0)),(A.instantAnimations||A.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,br(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=yn(u.keyframes,s);if(e!==void 0){F.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new wn(u):new Or(u)},Gr=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Kr(e){let t=Gr.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function qr(e,t,n=1){`${e}`;let[r,i]=Kr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return ee(e)?parseFloat(e):e}return Ve(i)?qr(i,t,n+1):i}function Jr(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Yr(e,t,n,r){if(typeof t==`function`){let[i,a]=Jr(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Jr(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Xr(e,t,n){let r=e.getProps();return Yr(r,t,n===void 0?r.custom:n,e)}var Zr=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Rn]),Qr=e=>Array.isArray(e);function $r(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Pr(n))}function ei(e){return Qr(e)?e[e.length-1]||0:e}function ti(e,t){let{transitionEnd:n={},transition:r={},...i}=Xr(e,t)||{};i={...i,...n};for(let t in i)$r(e,t,ei(i[t]))}var ni=e=>!!(e&&e.getVelocity);function ri(e){return!!(ni(e)&&e.add)}function ii(e,t){let n=e.getValue(`willChange`);if(ri(n))return n.add(t);if(!n&&A.WillChange){let n=new A.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function ai(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var oi=`data-`+ai(`framerAppearId`);function si(e){return e.props[oi]}function ci({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function li(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Fr(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&ci(f,t))continue;let o={delay:n,...Ir(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){F.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=si(e);if(n){let e=window.MotionHandoffAnimation(n,t,F);e!==null&&(o.startTime=e,p=!0)}}ii(e,t);let m=l??e.shouldReduceMotion;r.start(Wr(t,r,i,m&&Zr.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>F.update(()=>{o&&ti(e,o)});d.length?Promise.all(d).then(t):t()}return d}function ui(e,t,n={}){let r=Xr(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(li(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return di(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function di(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(ui(c,t,{...o,delay:n+(typeof r==`function`?0:r)+kr(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function fi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>ui(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=ui(e,t,n);else{let i=typeof t==`function`?Xr(e,t,n.custom):t;r=Promise.all(li(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var pi={test:e=>e===`auto`,parse:e=>e},mi=e=>t=>t.test(e),hi=[We,L,ot,at,ct,st,pi],gi=e=>hi.find(mi(e));function _i(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||ne(e)}var vi=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function yi(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Je)||[];if(!r)return e;let i=n.replace(r,``),a=+!!vi.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var bi=/\b([a-z-]*)\(.*?\)/gu,xi={...Dt,getAnimatableNone:e=>{let t=e.match(bi);return t?t.map(yi).join(` `):e}},Si={...Dt,getAnimatableNone:e=>{let t=Dt.parse(e);return Dt.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Ci={...We,transform:Math.round},wi={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,inset:L,insetBlock:L,insetBlockStart:L,insetBlockEnd:L,insetInline:L,insetInlineStart:L,insetInlineEnd:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,paddingBlock:L,paddingBlockStart:L,paddingBlockEnd:L,paddingInline:L,paddingInlineStart:L,paddingInlineEnd:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,marginBlock:L,marginBlockStart:L,marginBlockEnd:L,marginInline:L,marginInlineStart:L,marginInlineEnd:L,fontSize:L,backgroundPositionX:L,backgroundPositionY:L,rotate:at,pathRotation:at,rotateX:at,rotateY:at,rotateZ:at,scale:Ke,scaleX:Ke,scaleY:Ke,scaleZ:Ke,skew:at,skewX:at,skewY:at,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Ge,originX:lt,originY:lt,originZ:L,zIndex:Ci,fillOpacity:Ge,strokeOpacity:Ge,numOctaves:Ci},Ti={...wi,color:dt,backgroundColor:dt,outlineColor:dt,fill:dt,stroke:dt,borderColor:dt,borderTopColor:dt,borderRightColor:dt,borderBottomColor:dt,borderLeftColor:dt,filter:xi,WebkitFilter:xi,mask:Si,WebkitMask:Si},Ei=e=>Ti[e],Di=new Set([xi,Si]);function Oi(e,t){let n=Ei(e);return Di.has(n)||(n=Dt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var ki=new Set([`auto`,`none`,`0`]);function Ai(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!ki.has(t)&&bt(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Oi(n,i)}var ji=class extends Qn{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ve(r))){let i=qr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Zr.has(n)||e.length!==2)return;let[r,i]=e,a=gi(r),o=gi(i);if(Ue(r)!==Ue(i)&&Wn[n]){this.needsMeasurement=!0;return}if(a!==o)if(Bn(a)&&Bn(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Wn[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||_i(e[t]))&&n.push(t);n.length&&Ai(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wn[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Wn[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Mi=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function Ni(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var z=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function B(e){return te(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Pi,cancel:Fi}=Me(queueMicrotask,!1),Ii={x:!1,y:!1};function Li(){return Ii.x||Ii.y}function Ri(e){return e===`x`||e===`y`?Ii[e]?null:(Ii[e]=!0,()=>{Ii[e]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}function zi(e,t){let n=Ni(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Bi(e){return!(e.pointerType===`touch`||Li())}function Vi(e,t,n={}){let[r,i,a]=zi(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Bi(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Hi=(e,t)=>t?e===t?!0:Hi(e,t.parentElement):!1,Ui=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Wi=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Gi(e){return Wi.has(e.tagName)||e.isContentEditable===!0}var Ki=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function qi(e){return Ki.has(e.tagName)||e.isContentEditable===!0}var Ji=new WeakSet;function Yi(e){return t=>{t.key===`Enter`&&e(t)}}function Xi(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Zi=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Yi(()=>{if(Ji.has(n))return;Xi(n,`down`);let e=Yi(()=>{Xi(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Xi(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Qi(e){return Ui(e)&&!Li()}var $i=new WeakSet;function ea(e,t,n={}){let[r,i,a]=zi(e,n),o=e=>{let r=e.currentTarget;if(!Qi(e)||$i.has(e))return;Ji.add(r),n.stopPropagation&&$i.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Ji.has(r)&&Ji.delete(r),Qi(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Hi(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),B(e)&&(e.addEventListener(`focus`,e=>Zi(e,i)),!Gi(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function ta(e){return te(e)&&`ownerSVGElement`in e}var na=new WeakMap,ra,ia=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:ta(r)&&`getBBox`in r?r.getBBox()[t]:r[n],aa=ia(`inline`,`width`,`offsetWidth`),oa=ia(`block`,`height`,`offsetHeight`);function sa({target:e,borderBoxSize:t}){na.get(e)?.forEach(n=>{n(e,{get width(){return aa(e,t)},get height(){return oa(e,t)}})})}function ca(e){e.forEach(sa)}function la(){typeof ResizeObserver>`u`||(ra=new ResizeObserver(ca))}function ua(e,t){ra||la();let n=Ni(e);return n.forEach(e=>{let n=na.get(e);n||(n=new Set,na.set(e,n)),n.add(t),ra?.observe(e)}),()=>{n.forEach(e=>{let n=na.get(e);n?.delete(t),n?.size||ra?.unobserve(e)})}}var da=new Set,fa;function pa(){fa=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};da.forEach(t=>t(e))},window.addEventListener(`resize`,fa)}function ma(e){return da.add(e),fa||pa(),()=>{da.delete(e),!da.size&&typeof fa==`function`&&(window.removeEventListener(`resize`,fa),fa=void 0)}}function ha(e,t){return typeof e==`function`?ma(e):ua(e,t)}var ga={value:null,addProjectionMetrics:null};function _a(e){return ta(e)&&e.tagName===`svg`}function va(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=fn(i,a,o);return t?s(r):s}function ya(e,t,n={}){let r=e.get(),i=null,a=r,o,s=typeof r==`string`?r.replace(/[\d.-]/g,``):void 0,c=()=>{i&&=(i.stop(),null),e.animation=void 0},l=()=>{let t=xa(e.get()),r=xa(a);if(t===r){c();return}let s=i?i.getGeneratorVelocity():e.getVelocity();c(),i=new wn({keyframes:[t,r],velocity:s,type:`spring`,restDelta:.001,restSpeed:.01,...n,onUpdate:o})},u=()=>{l(),e.animation=i??void 0,e.events.animationStart?.notify(),i?.then(()=>{e.animation=void 0,e.events.animationComplete?.notify()})};if(e.attach((e,t)=>{a=e,o=e=>t(ba(e,s)),F.postRender(u)},c),ni(t)){let r=n.skipInitialAnimation===!0,i=t.on(`change`,t=>{r?(r=!1,e.jump(ba(t,s),!1)):e.set(ba(t,s))}),a=e.on(`destroy`,i);return()=>{i(),a()}}return c}function ba(e,t){return t?e+t:e}function xa(e){return typeof e==`number`?e:parseFloat(e)}var Sa=[...hi,dt,Dt],Ca=e=>Sa.find(mi(e)),wa=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ta=()=>({x:wa(),y:wa()}),Ea=()=>({min:0,max:0}),Da=()=>({x:Ea(),y:Ea()}),Oa=new WeakMap;function ka(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Aa(e){return typeof e==`string`||Array.isArray(e)}var ja=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ma=[`initial`,...ja];function Na(e){return ka(e.animate)||Ma.some(t=>Aa(e[t]))}function Pa(e){return!!(Na(e)||e.variants)}function Fa(e,t,n){for(let r in t){let i=t[r],a=n[r];if(ni(i))e.addValue(r,i);else if(ni(a))e.addValue(r,Pr(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Pr(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ia={current:null},La={current:!1},Ra=typeof window<`u`;function za(){if(La.current=!0,Ra)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ia.current=e.matches;e.addEventListener(`change`,t),t()}else Ia.current=!1}var Ba=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Va={};function Ha(e){Va=e}function Ua(){return Va}var Wa=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Qn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=I.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,F.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Na(t),this.isVariantNode=Pa(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&ni(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Oa.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(La.current||za(),this.shouldReduceMotion=Ia.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ne(this.notifyUpdate),Ne(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&xr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new dr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:ae(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=zn.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&F.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Va){let t=Va[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Da()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ba.length;t++){let n=Ba[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Fa(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Pr(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(ee(n)||ne(n))?n=parseFloat(n):!Ca(n)&&Dt.test(t)&&(n=Oi(e,t)),this.setBaseTarget(e,ni(n)?n.get():n)),ni(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Yr(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!ni(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ie),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Pi.render(this.render)}},Ga=class extends Wa{constructor(){super(...arguments),this.KeyframeResolver=ji}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;ni(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Ka=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function qa({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ja({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Ya(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Xa(e){return e===void 0||e===1}function Za({scale:e,scaleX:t,scaleY:n}){return!Xa(e)||!Xa(t)||!Xa(n)}function Qa(e){return Za(e)||$a(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function $a(e){return eo(e.x)||eo(e.y)}function eo(e){return e&&e!==`0%`}function to(e,t,n){return n+t*(e-n)}function no(e,t,n,r,i){return i!==void 0&&(e=to(e,i,r)),to(e,n,r)+t}function ro(e,t=0,n=1,r,i){e.min=no(e.min,t,n,r,i),e.max=no(e.max,t,n,r,i)}function io(e,{x:t,y:n}){ro(e.x,t.translate,t.scale,t.originPoint),ro(e.y,n.translate,n.scale,n.originPoint)}var ao=.999999999999,oo=1.0000000000001;function so(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(co(e.x,-a.scroll.offset.x),co(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,io(e,o)),r&&Qa(a.latestValues)&&fo(e,a.latestValues,a.layout?.layoutBox))}t.x<oo&&t.x>ao&&(t.x=1),t.y<oo&&t.y>ao&&(t.y=1)}function co(e,t){e.min+=t,e.max+=t}function lo(e,t,n,r,i=.5){ro(e,t,n,R(e.min,e.max,i),r)}function uo(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function fo(e,t,n){let r=n??e;lo(e.x,uo(t.x,r.x),t.scaleX,t.scale,t.originX),lo(e.y,uo(t.y,r.y),t.scaleY,t.scale,t.originY)}function V(e,t){return qa(Ya(e.getBoundingClientRect(),t))}function H(e,t,n){let r=V(e,n),{scroll:i}=t;return i&&(co(r.x,i.offset.x),co(r.y,i.offset.y)),r}var po={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},mo=Rn.length;function ho(e,t,n){let r=``,i=!0;for(let a=0;a<mo;a++){let o=Rn[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=z(s,wi[o]);if(!c){i=!1;let t=po[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${z(a,wi.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function go(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(zn.has(e)){o=!0;continue}else if(ze(e)){i[e]=n;continue}else{let t=z(n,wi[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=ho(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function _o(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function vo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var yo={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(L.test(e))e=parseFloat(e);else return e;return`${vo(e,t.target.x)}% ${vo(e,t.target.y)}%`}},bo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Dt.parse(e);if(i.length>5)return r;let a=Dt.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=R(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},xo={borderRadius:{...yo,applyTo:[...Mi]},borderTopLeftRadius:yo,borderTopRightRadius:yo,borderBottomLeftRadius:yo,borderBottomRightRadius:yo,boxShadow:bo};function So(e,{layout:t,layoutId:n}){return zn.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!xo[e]||e===`opacity`)}function Co(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(ni(r[t])||i&&ni(i[t])||So(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function wo(e){return window.getComputedStyle(e)}var To=class extends Ga{constructor(){super(...arguments),this.type=`html`,this.renderInstance=_o}readValueFromInstance(e,t){if(zn.has(t))return this.projection?.isProjecting?Pn(t):In(e,t);{let n=wo(e),r=(ze(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return V(e,t)}build(e,t,n){go(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Co(e,t,n)}},Eo={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Do={offset:`strokeDashoffset`,array:`strokeDasharray`};function Oo(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Eo:Do;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var ko=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Ao(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(go(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of ko)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Oo(d,i,a,o,!1)}var jo=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Mo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function No(e,t,n,r){_o(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(jo.has(n)?n:ai(n),t.attrs[n])}function Po(e,t,n){let r=Co(e,t,n);for(let n in e)if(ni(e[n])||ni(t[n])){let t=Rn.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Fo=class extends Ga{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Da}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zn.has(t)){let e=Ei(t);return e&&e.default||0}return t=jo.has(t)?t:ai(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Po(e,t,n)}build(e,t,n){Ao(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){No(e,t,n,r)}mount(e){this.isSVGTag=Mo(e.tagName),super.mount(e)}},Io=Ma.length;function Lo(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Lo(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Io;n++){let r=Ma[n],i=e.props[r];(Aa(i)||i===!1)&&(t[r]=i)}return t}function Ro(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var zo=[...ja].reverse(),Bo=ja.length;function Vo(e){return t=>Promise.all(t.map(({animation:t,options:n})=>fi(e,t,n)))}function Ho(e){let t=Vo(e),n=Go(),r=!0,i=!1,a=t=>(n,r)=>{let i=Xr(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Lo(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Bo;t++){let p=zo[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Aa(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||ka(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Uo(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Qr(t)&&Qr(n)?!Ro(t,n)||y:t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Xr(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=kr(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Xr(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Go(),i=!0}}}function Uo(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Ro(t,e):!1}function Wo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Go(){return{animate:Wo(!0),whileInView:Wo(),whileHover:Wo(),whileTap:Wo(),whileDrag:Wo(),whileFocus:Wo(),exit:Wo()}}function Ko(e,t){e.min=t.min,e.max=t.max}function qo(e,t){Ko(e.x,t.x),Ko(e.y,t.y)}function Jo(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Yo=.9999,Xo=1.0001,Zo=-.01,Qo=.01;function $o(e){return e.max-e.min}function es(e,t,n){return Math.abs(e-t)<=n}function ts(e,t,n,r=.5){e.origin=r,e.originPoint=R(t.min,t.max,e.origin),e.scale=$o(n)/$o(t),e.translate=R(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Yo&&e.scale<=Xo||isNaN(e.scale))&&(e.scale=1),(e.translate>=Zo&&e.translate<=Qo||isNaN(e.translate))&&(e.translate=0)}function ns(e,t,n,r){ts(e.x,t.x,n.x,r?r.originX:void 0),ts(e.y,t.y,n.y,r?r.originY:void 0)}function rs(e,t,n,r=0){e.min=(r?R(n.min,n.max,r):n.min)+t.min,e.max=e.min+$o(t)}function is(e,t,n,r){rs(e.x,t.x,n.x,r?.x),rs(e.y,t.y,n.y,r?.y)}function as(e,t,n,r=0){let i=r?R(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+$o(t)}function os(e,t,n,r){as(e.x,t.x,n.x,r?.x),as(e.y,t.y,n.y,r?.y)}function ss(e,t,n,r,i){return e-=t,e=to(e,1/n,r),i!==void 0&&(e=to(e,1/i,r)),e}function cs(e,t=0,n=1,r=.5,i,a=e,o=e){if(ot.test(t)&&(t=parseFloat(t),t=R(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=R(a.min,a.max,r);e===a&&(s-=t),e.min=ss(e.min,t,n,s,i),e.max=ss(e.max,t,n,s,i)}function ls(e,t,[n,r,i],a,o){cs(e,t[n],t[r],t[i],t.scale,a,o)}var us=[`x`,`scaleX`,`originX`],ds=[`y`,`scaleY`,`originY`];function fs(e,t,n,r){ls(e.x,t,us,n?n.x:void 0,r?r.x:void 0),ls(e.y,t,ds,n?n.y:void 0,r?r.y:void 0)}function ps(e){return e.translate===0&&e.scale===1}function ms(e){return ps(e.x)&&ps(e.y)}function hs(e,t){return e.min===t.min&&e.max===t.max}function gs(e,t){return hs(e.x,t.x)&&hs(e.y,t.y)}function _s(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function vs(e,t){return _s(e.x,t.x)&&_s(e.y,t.y)}function ys(e){return $o(e.x)/$o(e.y)}function bs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function xs(e){return[e(`x`),e(`y`)]}function Ss(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Cs=Mi.length,ws=e=>typeof e==`string`?parseFloat(e):e,Ts=e=>typeof e==`number`||L.test(e);function Es(e,t,n,r,i,a){i?(e.opacity=R(0,n.opacity??1,Os(r)),e.opacityExit=R(t.opacity??1,0,ks(r))):a&&(e.opacity=R(t.opacity??1,n.opacity??1,r));for(let i=0;i<Cs;i++){let a=Mi[i],o=Ds(t,a),s=Ds(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Ts(o)===Ts(s)?(e[a]=Math.max(R(ws(o),ws(s),r),0),(ot.test(s)||ot.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=R(t.rotate||0,n.rotate||0,r))}function Ds(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Os=As(0,.5,ye),ks=As(.5,.95,re);function As(e,t,n){return r=>r<e?0:r>t?1:n(N(e,t,r))}function js(e,t,n){let r=ni(e)?e:Pr(e);return r.start(Wr(``,r,t,n)),r.animation}function Ms(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var Ns=(e,t)=>e.depth-t.depth,Ps=class{constructor(){this.children=[],this.isDirty=!1}add(e){D(this.children,e),this.isDirty=!0}remove(e){O(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Ns),this.isDirty=!1,this.children.forEach(e)}};function Fs(e,t){let n=I.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Ne(r),e(a-t))};return F.setup(r,!0),()=>Ne(r)}function Is(e){return ni(e)?e.get():e}var Ls=class{constructor(){this.members=[]}add(e){D(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(O(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(O(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Rs={hasAnimatedSinceResize:!0,hasEverUpdated:!1},zs={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Bs=[``,`X`,`Y`,`Z`],Vs=1e3,Hs=0;function Us(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Ws(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=si(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,F,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Ws(r)}function Gs({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Hs++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ga.value&&(zs.nodes=zs.calculatedTargetDeltas=zs.calculatedProjections=0),this.nodes.forEach(Js),this.nodes.forEach(rc),this.nodes.forEach(ic),this.nodes.forEach(Ys),ga.addProjectionMetrics&&ga.addProjectionMetrics(zs)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ps)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ie),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=ta(t)&&!_a(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;F.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Fs(i,250),Rs.hasAnimatedSinceResize&&(Rs.hasAnimatedSinceResize=!1,this.nodes.forEach(nc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||dc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!vs(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ir(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||nc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ne(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ac),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ws(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Qs),this.nodes.forEach(Zs);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach($s);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(ec),this.nodes.forEach(tc),this.nodes.forEach(Ks),this.nodes.forEach(qs)):this.nodes.forEach($s),this.clearAllSnapshots();let e=I.now();Pe.delta=k(0,1e3/60,e-Pe.timestamp),Pe.timestamp=e,Pe.isProcessing=!0,Fe.update.process(Pe),Fe.preRender.process(Pe),Fe.render.process(Pe),Pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Xs),this.sharedNodes.forEach(oc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,F.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){F.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!$o(this.snapshot.measuredBox.x)&&!$o(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Da(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!ms(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Qa(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),hc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Da();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(_c))){let{scroll:e}=this.root;e&&(co(t.x,e.offset.x),co(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Da();if(qo(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&qo(t,e),co(t.x,i.offset.x),co(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Da();qo(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(co(r.x,-n.scroll.offset.x),co(r.y,-n.scroll.offset.y)),Qa(n.latestValues)&&fo(r,n.latestValues,n.layout?.layoutBox)}return Qa(this.latestValues)&&fo(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Da();qo(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Qa(n.latestValues))continue;let r;n.instance&&(Za(n.latestValues)&&n.updateSnapshot(),r=Da(),qo(r,n.measurePageBox())),fs(t,n.latestValues,n.snapshot?.layoutBox,r)}return Qa(this.latestValues)&&fs(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Pe.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Da(),this.targetWithTransforms=Da()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),is(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qo(this.target,this.layout.layoutBox),io(this.target,this.targetDelta)):qo(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),ga.value&&zs.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Za(this.parent.latestValues)||$a(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Da(),this.relativeTargetOrigin=Da(),os(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),qo(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Pe.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;qo(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;so(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Da());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Jo(this.prevProjectionDelta.x,this.projectionDelta.x),Jo(this.prevProjectionDelta.y,this.projectionDelta.y)),ns(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!bs(this.projectionDelta.x,this.prevProjectionDelta.x)||!bs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),ga.value&&zs.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ta(),this.projectionDelta=Ta(),this.projectionDeltaWithTransform=Ta()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=Ta();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Da(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(uc));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=R(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=R(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(sc(o.x,e.x,n),sc(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(os(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),lc(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&gs(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=Da(),qo(f,this.relativeTarget)),c&&(this.animationValues=a,Es(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Ne(this.pendingAnimation),void 0),this.pendingAnimation=F.update(()=>{Rs.hasAnimatedSinceResize=!0,this.motionValue||=Pr(0),this.motionValue.jump(0,!1),this.currentAnimation=js(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Vs),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&gc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Da();let t=$o(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=$o(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}qo(t,n),fo(t,i),ns(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Ls),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Us(`z`,e,r,this.animationValues);for(let t=0;t<Bs.length;t++)Us(`rotate${Bs[t]}`,e,r,this.animationValues),Us(`skew${Bs[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Is(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Is(t?.pointerEvents)||``),this.hasProjected&&!Qa(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Ss(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in xo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=xo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Is(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Zs),this.root.sharedNodes.clear()}}}function Ks(e){e.updateLayout()}function qs(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)xs(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=$o(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Ko(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else gc(i,t.layoutBox,n)&&xs(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=$o(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Ta();ns(o,n,t.layoutBox);let s=Ta();a?ns(s,e.applyTransform(r,!0),t.measuredBox):ns(s,n,t.layoutBox);let c=!ms(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Da();os(s,t.layoutBox,i.layoutBox,o);let c=Da();os(c,n,a.layoutBox,o),vs(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Js(e){ga.value&&zs.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Ys(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Xs(e){e.clearSnapshot()}function Zs(e){e.clearMeasurements()}function Qs(e){e.isLayoutDirty=!0,e.updateLayout()}function $s(e){e.isLayoutDirty=!1}function ec(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function tc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function nc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function rc(e){e.resolveTargetDelta()}function ic(e){e.calcProjection()}function ac(e){e.resetSkewAndRotation()}function oc(e){e.removeLeadSnapshot()}function sc(e,t,n){e.translate=R(t.translate,0,n),e.scale=R(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function cc(e,t,n,r){e.min=R(t.min,n.min,r),e.max=R(t.max,n.max,r)}function lc(e,t,n,r){cc(e.x,t.x,n.x,r),cc(e.y,t.y,n.y,r)}function uc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var dc={duration:.45,ease:[.4,0,.1,1]},fc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),pc=fc(`applewebkit/`)&&!fc(`chrome/`)?Math.round:re;function mc(e){e.min=pc(e.min),e.max=pc(e.max)}function hc(e){mc(e.x),mc(e.y)}function gc(e,t,n){return e===`position`||e===`preserve-aspect`&&!es(ys(t),ys(n),.2)}function _c(e){return e!==e.root&&e.scroll?.wasRoot}var vc=Gs({attachResizeListener:(e,t)=>Ms(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),yc={current:void 0},bc=Gs({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!yc.current){let e=new vc({});e.mount(window),e.setOptions({layoutScroll:!0}),yc.current=e}return yc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),xc=(0,S.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Sc(e=!0){let t=(0,S.useContext)(E);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,S.useId)();(0,S.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,S.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Cc=(0,S.createContext)({strict:!1}),wc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Tc=!1;function Ec(){if(Tc)return;let e={};for(let t in wc)e[t]={isEnabled:e=>wc[t].some(t=>!!e[t])};Ha(e),Tc=!0}function Dc(){return Ec(),Ua()}function Oc(e){let t=Dc();for(let n in e)t[n]={...t[n],...e[n]};Ha(t)}var U=x();function kc({children:e,features:t,strict:n=!1}){let[,r]=(0,S.useState)(!Ac(t)),i=(0,S.useRef)(void 0);if(!Ac(t)){let{renderer:e,...n}=t;i.current=e,Oc(n)}return(0,S.useEffect)(()=>{Ac(t)&&t().then(({renderer:e,...t})=>{Oc(t),i.current=e,r(!0)})},[]),(0,U.jsx)(Cc.Provider,{value:{renderer:i.current,strict:n},children:e})}function Ac(e){return typeof e==`function`}var jc=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Mc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||jc.has(e)}var Nc=c({default:()=>Pc}),Pc,Fc=o((()=>{throw Pc={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Ic=e=>!Mc(e);function Lc(e){typeof e==`function`&&(Ic=t=>t.startsWith(`on`)?!Mc(t):e(t))}try{Lc((Fc(),d(Nc)).default)}catch{}function Rc(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||ni(e[i])||(Ic(i)||n===!0&&Mc(i)||!t&&!Mc(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}function zc({children:e,isValidProp:t,...n}){t&&Lc(t);let r=(0,S.useContext)(xc);n={...r,...n},n.transition=Fr(n.transition,r.transition),n.isStatic=w(()=>n.isStatic);let i=(0,S.useMemo)(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion,n.skipAnimations]);return(0,U.jsx)(xc.Provider,{value:i,children:e})}var Bc=(0,S.createContext)({});function Vc(e,t){if(Na(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Aa(t)?t:void 0,animate:Aa(n)?n:void 0}}return e.inherit===!1?{}:t}function Hc(e){let{initial:t,animate:n}=Vc(e,(0,S.useContext)(Bc));return(0,S.useMemo)(()=>({initial:t,animate:n}),[Uc(t),Uc(n)])}function Uc(e){return Array.isArray(e)?e.join(` `):e}var Wc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Gc(e,t,n){for(let r in t)!ni(t[r])&&!So(r,n)&&(e[r]=t[r])}function Kc({transformTemplate:e},t){return(0,S.useMemo)(()=>{let n=Wc();return go(n,t,e),Object.assign({},n.vars,n.style)},[t])}function qc(e,t){let n=e.style||{},r={};return Gc(r,n,e),Object.assign(r,Kc(e,t)),r}function Jc(e,t){let n={},r=qc(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Yc=()=>({...Wc(),attrs:{}});function Xc(e,t,n,r){let i=(0,S.useMemo)(()=>{let n=Yc();return Ao(n,t,Mo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Gc(t,e.style,e),i.style={...t,...i.style}}return i}var Zc=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Qc(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Zc.indexOf(e)>-1||/[A-Z]/u.test(e))}function $c(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Qc(e)?Xc:Jc)(t,r,i,e),c=Rc(t,typeof e==`string`,a),l=e===S.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,S.useMemo)(()=>ni(u)?u.get():u,[u]);return(0,S.createElement)(e,{...l,children:d})}function el({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:tl(n,r,i,e),renderState:t()}}function tl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Is(a[e]);let{initial:o,animate:s}=e,c=Na(e),l=Pa(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!ka(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Yr(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var nl=e=>(t,n)=>{let r=(0,S.useContext)(Bc),i=(0,S.useContext)(E),a=()=>el(e,t,r,i);return n?a():w(a)},rl=nl({scrapeMotionValuesFromProps:Co,createRenderState:Wc}),il=nl({scrapeMotionValuesFromProps:Po,createRenderState:Yc}),al=Symbol.for(`motionComponentSymbol`);function ol(e,t,n){let r=(0,S.useRef)(n);(0,S.useInsertionEffect)(()=>{r.current=n});let i=(0,S.useRef)(null);return(0,S.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var sl=(0,S.createContext)({});function cl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function ll(e,t,n,r,i,a){let{visualElement:o}=(0,S.useContext)(Bc),s=(0,S.useContext)(Cc),c=(0,S.useContext)(E),l=(0,S.useContext)(xc),u=l.reducedMotion,d=l.skipAnimations,f=(0,S.useRef)(null),p=(0,S.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,S.useContext)(sl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&ul(f.current,n,i,h);let g=(0,S.useRef)(!1);(0,S.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[oi],v=(0,S.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return T(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,S.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function ul(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:dl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&cl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function dl(e){if(e)return e.options.allowProjection===!1?dl(e.parent):e.projection}function fl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Oc(r);let a=n?n===`svg`:Qc(e),o=a?il:rl;function s(n,s){let c,l={...(0,S.useContext)(xc),...n,layoutId:pl(n)},{isStatic:u}=l,d=Hc(n),f=o(n,u);if(!u&&typeof window<`u`){ml(l,r);let t=hl(l);c=t.MeasureLayout,d.visualElement=ll(e,f,l,i,t.ProjectionNode,a)}return(0,U.jsxs)(Bc.Provider,{value:d,children:[c&&d.visualElement?(0,U.jsx)(c,{visualElement:d.visualElement,...l}):null,$c(e,n,ol(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,S.forwardRef)(s);return c[al]=e,c}function pl({layoutId:e}){let t=(0,S.useContext)(C).id;return t&&e!==void 0?t+`-`+e:e}function ml(e,t){(0,S.useContext)(Cc).strict}function hl(e){let{drag:t,layout:n}=Dc();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function gl(e,t){if(typeof Proxy>`u`)return fl;let n=new Map,r=(n,r)=>fl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,fl(a,void 0,e,t)),n.get(a))})}var _l=gl(),vl=(e,t)=>t.isSVG??Qc(e)?new Fo(t):new To(t,{allowProjection:e!==S.Fragment}),yl=class extends Ka{constructor(e){super(e),e.animationState||=Ho(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ka(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},bl=0,xl={animation:{Feature:yl},exit:{Feature:class extends Ka{constructor(){super(...arguments),this.id=bl++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Xr(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Sl(e){return{point:{x:e.pageX,y:e.pageY}}}var Cl=e=>t=>Ui(t)&&e(t,Sl(t));function wl(e,t,n,r){return Ms(e,t,Cl(n),r)}var Tl=({current:e})=>e?e.ownerDocument.defaultView:null,El=(e,t)=>Math.abs(e-t);function Dl(e,t){let n=El(e.x,t.x),r=El(e.y,t.y);return Math.sqrt(n**2+r**2)}var Ol=new Set([`auto`,`scroll`]),kl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Al(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Ml(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Dl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Pe;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Al(t,this.transformPagePoint),F.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Ml(e.type===`pointercancel`?this.lastMoveEventInfo:Al(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ui(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Al(Sl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Pe;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Ml(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=M(wl(this.contextWindow,`pointermove`,this.handlePointerMove,d),wl(this.contextWindow,`pointerup`,this.handlePointerUp,d),wl(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Ol.has(e.overflowX)||Ol.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),F.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ne(this.updatePoint)}};function Al(e,t){return t?{point:t(e.point)}:e}function jl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ml({point:e},t){return{point:e,delta:jl(e,Pl(t)),offset:jl(e,Nl(t)),velocity:Fl(t,.1)}}function Nl(e){return e[0]}function Pl(e){return e[e.length-1]}function Fl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Pl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ae(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>ae(t)*2&&(r=e[1]);let a=oe(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Il(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?R(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?R(n,e,r.max):Math.min(e,n)),e}function Ll(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Rl(e,{top:t,left:n,bottom:r,right:i}){return{x:Ll(e.x,n,i),y:Ll(e.y,t,r)}}function zl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Bl(e,t){return{x:zl(e.x,t.x),y:zl(e.y,t.y)}}function W(e,t){let n=.5,r=$o(e),i=$o(t);return i>r?n=N(t.min,t.max-r,e.min):r>i&&(n=N(e.min,e.max-i,t.min)),k(0,1,n)}function G(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var K=.35;function q(e=K){return e===!1?e=0:e===!0&&(e=K),{x:J(e,`left`,`right`),y:J(e,`top`,`bottom`)}}function J(e,t,n){return{min:Vl(e,t),max:Vl(e,n)}}function Vl(e,t){return typeof e==`number`?e:e[t]||0}var Hl=new WeakMap,Ul=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Da(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Sl(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ri(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),xs(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ot.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=$o(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&F.update(()=>i(e,t),!1,!0),ii(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=ql(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&F.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new kl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Tl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&F.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Kl(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Il(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&cl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=Rl(n.layoutBox,e):this.constraints=!1,this.elastic=q(t),r!==this.constraints&&!cl(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&xs(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=G(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!cl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=H(n,r.root,this.visualElement.getTransformPagePoint()),a=Bl(r.layout.layoutBox,i);if(t){let e=t(Ja(a));this.hasMutatedConstraints=!!e,e&&(a=qa(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=xs(o=>{if(!Kl(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ii(this.visualElement,e),n.start(Wr(e,n,0,t,this.visualElement,!1))}stopAnimation(){xs(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){xs(t=>{let{drag:n}=this.getProps();if(!Kl(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-R(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!cl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};xs(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=W({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),xs(t=>{if(!Kl(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(R(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Hl.set(this.visualElement,this);let e=this.visualElement.current,t=wl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&qi(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();cl(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Gl(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),F.read(r);let o=Ms(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(xs(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=K,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Wl(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Gl(e,t,n){let r=ha(e,Wl(n)),i=ha(t,Wl(n));return()=>{r(),i()}}function Kl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function ql(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Jl=class extends Ka{constructor(e){super(e),this.removeGroupControls=re,this.removeListeners=re,this.controls=new Ul(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||re}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Yl=e=>(t,n)=>{e&&F.update(()=>e(t,n),!1,!0)},Xl=class extends Ka{constructor(){super(...arguments),this.removePointerDownListener=re}onPointerDown(e){this.session=new kl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Tl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Yl(e),onStart:Yl(t),onMove:Yl(n),onEnd:(e,t)=>{delete this.session,r&&F.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=wl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Zl=!1,Ql=class extends S.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Zl&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Rs.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Zl=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||F.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Pi.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Zl=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function $l(e){let[t,n]=Sc(),r=(0,S.useContext)(C);return(0,U.jsx)(Ql,{...e,layoutGroup:r,switchLayoutGroup:(0,S.useContext)(sl),isPresent:t,safeToRemove:n})}var eu={pan:{Feature:Xl},drag:{Feature:Jl,ProjectionNode:bc,MeasureLayout:$l}};function tu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&F.postRender(()=>i(t,Sl(t)))}var nu=class extends Ka{mount(){let{current:e}=this.node;e&&(this.unmount=Vi(e,(e,t)=>(tu(this.node,t,`Start`),e=>tu(this.node,e,`End`))))}unmount(){}},ru=class extends Ka{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=M(Ms(this.node.current,`focus`,()=>this.onFocus()),Ms(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function iu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&F.postRender(()=>i(t,Sl(t)))}var au=class extends Ka{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=ea(e,(e,t)=>(iu(this.node,t,`Start`),(e,{success:t})=>iu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},ou=new WeakMap,su=new WeakMap,cu=e=>{let t=ou.get(e.target);t&&t(e)},lu=e=>{e.forEach(cu)};function uu({root:e,...t}){let n=e||document;su.has(n)||su.set(n,{});let r=su.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(lu,{root:e,...t})),r[i]}function du(e,t,n){let r=uu(t);return ou.set(e,n),r.observe(e),()=>{ou.delete(e),r.unobserve(e)}}var fu={some:0,all:1},pu=class extends Ka{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:fu[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=du(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(mu(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function mu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var hu={inView:{Feature:pu},tap:{Feature:au},focus:{Feature:ru},hover:{Feature:nu}},gu={layout:{ProjectionNode:bc,MeasureLayout:$l}},Y=gl({...xl,...hu,...eu,...gu},vl),_u={renderer:vl,...xl,...hu};function vu(e){let t=w(()=>Pr(e)),{isStatic:n}=(0,S.useContext)(xc);if(n){let[,n]=(0,S.useState)(e);(0,S.useEffect)(()=>t.on(`change`,n),[])}return t}function yu(e,t){let n=vu(t()),r=()=>n.set(t());return r(),T(()=>{let t=()=>F.preRender(r,!1,!0),n=e.map(e=>e.on(`change`,t));return()=>{n.forEach(e=>e()),Ne(r)}}),n}function bu(e){Mr.current=[],e();let t=yu(Mr.current,e);return Mr.current=void 0,t}function xu(e,t,n,r){if(typeof e==`function`)return bu(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!=`function`)return Cu(e,t,n,r);let i=typeof t==`function`?t:va(t,n,r),a=Array.isArray(e)?Su(e,i):Su([e],([e])=>i(e)),o=Array.isArray(e)?void 0:e.accelerate;return o&&!o.isTransformed&&typeof t!=`function`&&Array.isArray(n)&&r?.clamp!==!1&&(a.accelerate={...o,times:t,keyframes:n,isTransformed:!0,...r?.ease?{ease:r.ease}:{}}),a}function Su(e,t){let n=w(()=>[]);return yu(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}function Cu(e,t,n,r){let i=w(()=>Object.keys(n)),a=w(()=>({}));for(let o of i)a[o]=xu(e,t,n[o],r);return a}function wu(e,t={}){let{isStatic:n}=(0,S.useContext)(xc),r=()=>ni(e)?e.get():e;if(n)return xu(r);let i=vu(r());return(0,S.useInsertionEffect)(()=>ya(i,e,t),[i,JSON.stringify(t)]),i}function Tu(e,t={}){return wu(e,{type:`spring`,...t})}function Eu(){!La.current&&za();let[e]=(0,S.useState)(Ia.current);return e}var Du=u(y(),1);function Ou(e){let t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function ku(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Au(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function ju(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function Mu(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function Nu(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function Pu(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function Fu(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function Iu(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}function Lu(e,t){let n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i}function Ru(e){let t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function zu(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function Bu(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function Vu(e,t){let n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function Hu(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Uu(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function Wu(e,t,n,r){let i=t[0],a=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}function Gu(e,t,n,r,i){let a=Math.exp(-r*i),o=t[0],s=t[1],c=t[2];return e[0]=n[0]+(o-n[0])*a,e[1]=n[1]+(s-n[1])*a,e[2]=n[2]+(c-n[2])*a,e}function X(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o||=1,e[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,e[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,e[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,e}function Ku(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o||=1,e[0]=(n[0]*r+n[4]*i+n[8]*a)/o,e[1]=(n[1]*r+n[5]*i+n[9]*a)/o,e[2]=(n[2]*r+n[6]*i+n[10]*a)/o,e}function qu(e,t,n){let r=t[0],i=t[1],a=t[2];return e[0]=r*n[0]+i*n[3]+a*n[6],e[1]=r*n[1]+i*n[4]+a*n[7],e[2]=r*n[2]+i*n[5]+a*n[8],e}function Ju(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2],l=n[3],u=s*a-c*i,d=c*r-o*a,f=o*i-s*r,p=s*f-c*d,m=c*u-o*f,h=o*d-s*u,g=l*2;return u*=g,d*=g,f*=g,p*=2,m*=2,h*=2,e[0]=r+u+p,e[1]=i+d+m,e[2]=a+f+h,e}var Yu=(function(){let e=[0,0,0],t=[0,0,0];return function(n,r){ku(e,n),ku(t,r),Vu(e,e),Vu(t,t);let i=Hu(e,t);return i>1?0:i<-1?Math.PI:Math.acos(i)}})();function Xu(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}var Zu=class e extends Array{constructor(e=0,t=e,n=e){return super(e,t,n),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,n=e){return e.length?this.copy(e):(Au(this,e,t,n),this)}copy(e){return ku(this,e),this}add(e,t){return t?ju(this,e,t):ju(this,this,e),this}sub(e,t){return t?Mu(this,e,t):Mu(this,this,e),this}multiply(e){return e.length?Nu(this,this,e):Fu(this,this,e),this}divide(e){return e.length?Pu(this,this,e):Fu(this,this,1/e),this}inverse(e=this){return Bu(this,e),this}len(){return Ou(this)}distance(e){return e?Iu(this,e):Ou(this)}squaredLen(){return Ru(this)}squaredDistance(e){return e?Lu(this,e):Ru(this)}negate(e=this){return zu(this,e),this}cross(e,t){return t?Uu(this,e,t):Uu(this,this,e),this}scale(e){return Fu(this,this,e),this}normalize(){return Vu(this,this),this}dot(e){return Hu(this,e)}equals(e){return Xu(this,e)}applyMatrix3(e){return qu(this,this,e),this}applyMatrix4(e){return X(this,this,e),this}scaleRotateMatrix4(e){return Ku(this,this,e),this}applyQuaternion(e){return Ju(this,this,e),this}angle(e){return Yu(this,e)}lerp(e,t){return Wu(this,this,e,t),this}smoothLerp(e,t,n){return Gu(this,this,e,t,n),this}clone(){return new e(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){let t=this[0],n=this[1],r=this[2];return this[0]=e[0]*t+e[4]*n+e[8]*r,this[1]=e[1]*t+e[5]*n+e[9]*r,this[2]=e[2]*t+e[6]*n+e[10]*r,this.normalize()}},Qu=new Zu,$u=1,ed=1,td=!1,nd=class{constructor(e,t={}){e.canvas||console.error(`gl not passed as first argument to Geometry`),this.gl=e,this.attributes=t,this.id=$u++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let e in t)this.addAttribute(e,t[e])}addAttribute(e,t){if(this.attributes[e]=t,t.id=ed++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e===`index`?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn(`geometry has multiple instanced buffers of different length`),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e===`index`?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){let t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute(`index`,e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((e,{name:t,type:n})=>{if(!this.attributes[t]){console.warn(`active attribute ${t} not being supplied`);return}let r=this.attributes[t];this.gl.bindBuffer(r.target,r.buffer),this.glState.boundBuffer=r.buffer;let i=1;n===35674&&(i=2),n===35675&&(i=3),n===35676&&(i=4);let a=r.size/i,o=i===1?0:i*i*4,s=i===1?0:i*4;for(let t=0;t<i;t++)this.gl.vertexAttribPointer(e+t,a,r.type,r.normalized,r.stride+o,r.offset+t*s),this.gl.enableVertexAttribArray(e+t),this.gl.renderer.vertexAttribDivisor(e+t,r.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((e,{name:t})=>{let n=this.attributes[t];n.needsUpdate&&this.updateAttribute(n)});let n=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(n=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*n):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){let e=this.attributes.position;if(e.data)return e;if(!td)return console.warn(`No position buffer data found to compute bounds`),td=!0}computeBoundingBox(e){e||=this.getPosition();let t=e.data,n=e.size;this.bounds||={min:new Zu,max:new Zu,center:new Zu,scale:new Zu,radius:1/0};let r=this.bounds.min,i=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;r.set(1/0),i.set(-1/0);for(let e=0,a=t.length;e<a;e+=n){let n=t[e],a=t[e+1],o=t[e+2];r.x=Math.min(n,r.x),r.y=Math.min(a,r.y),r.z=Math.min(o,r.z),i.x=Math.max(n,i.x),i.y=Math.max(a,i.y),i.z=Math.max(o,i.z)}o.sub(i,r),a.add(r,i).divide(2)}computeBoundingSphere(e){e||=this.getPosition();let t=e.data,n=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let e=0,i=t.length;e<i;e+=n)Qu.fromArray(t,e),r=Math.max(r,this.bounds.center.squaredDistance(Qu));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}},rd=1,id={},ad=class{constructor(e,{vertex:t,fragment:n,uniforms:r={},transparent:i=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:s=!0,depthWrite:c=!0,depthFunc:l=e.LEQUAL}={}){e.canvas||console.error(`gl not passed as first argument to Program`),this.gl=e,this.uniforms=r,this.id=rd++,t||console.warn(`vertex shader not supplied`),n||console.warn(`fragment shader not supplied`),this.transparent=i,this.cullFace=a,this.frontFace=o,this.depthTest=s,this.depthWrite=c,this.depthFunc=l,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:n})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==``&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}\nVertex Shader\n${sd(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==``&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}\nFragment Shader\n${sd(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let e=0;e<n;e++){let t=this.gl.getActiveUniform(this.program,e);this.uniformLocations.set(t,this.gl.getUniformLocation(this.program,t.name));let n=t.name.match(/(\w+)/g);t.uniformName=n[0],t.nameComponents=n.slice(1)}this.attributeLocations=new Map;let r=[],i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let e=0;e<i;e++){let t=this.gl.getActiveAttrib(this.program,e),n=this.gl.getAttribLocation(this.program,t.name);n!==-1&&(r[n]=t.name,this.attributeLocations.set(t,n))}this.attributeOrder=r.join(``)}setBlendFunc(e,t,n,r){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=n,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,n){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=n}setStencilOp(e,t,n){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=n}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram!==this.id&&(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((e,n)=>{let r=this.uniforms[n.uniformName];for(let e of n.nameComponents){if(!r)break;if(e in r)r=r[e];else if(Array.isArray(r.value))break;else{r=void 0;break}}if(!r)return fd(`Active uniform ${n.name} has not been supplied`);if(r&&r.value===void 0)return fd(`${n.name} uniform is missing a value parameter`);if(r.value.texture)return t+=1,r.value.update(t),od(this.gl,n.type,e,t);if(r.value.length&&r.value[0].texture){let i=[];return r.value.forEach(e=>{t+=1,e.update(t),i.push(t)}),od(this.gl,n.type,e,i)}od(this.gl,n.type,e,r.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}};function od(e,t,n,r){r=r.length?cd(r):r;let i=e.renderer.state.uniformLocations.get(n);if(r.length)if(i===void 0||i.length!==r.length)e.renderer.state.uniformLocations.set(n,r.slice(0));else{if(ld(i,r))return;i.set?i.set(r):ud(i,r),e.renderer.state.uniformLocations.set(n,i)}else{if(i===r)return;e.renderer.state.uniformLocations.set(n,r)}switch(t){case 5126:return r.length?e.uniform1fv(n,r):e.uniform1f(n,r);case 35664:return e.uniform2fv(n,r);case 35665:return e.uniform3fv(n,r);case 35666:return e.uniform4fv(n,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?e.uniform1iv(n,r):e.uniform1i(n,r);case 35671:case 35667:return e.uniform2iv(n,r);case 35672:case 35668:return e.uniform3iv(n,r);case 35673:case 35669:return e.uniform4iv(n,r);case 35674:return e.uniformMatrix2fv(n,!1,r);case 35675:return e.uniformMatrix3fv(n,!1,r);case 35676:return e.uniformMatrix4fv(n,!1,r)}}function sd(e){let t=e.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+`: `+t[e];return t.join(`
`)}function cd(e){let t=e.length,n=e[0].length;if(n===void 0)return e;let r=t*n,i=id[r];i||(id[r]=i=new Float32Array(r));for(let r=0;r<t;r++)i.set(e[r],r*n);return i}function ld(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ud(e,t){for(let n=0,r=e.length;n<r;n++)e[n]=t[n]}var dd=0;function fd(e){dd>100||(console.warn(e),dd++,dd>100&&console.warn(`More than 100 program warnings - stopping logs.`))}var pd=new Zu,md=1,hd=class{constructor({canvas:e=document.createElement(`canvas`),width:t=300,height:n=150,dpr:r=1,alpha:i=!1,depth:a=!0,stencil:o=!1,antialias:s=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,autoClear:d=!0,webgl:f=2}={}){let p={alpha:i,depth:a,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u};this.dpr=r,this.alpha=i,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=d,this.id=md++,f===2&&(this.gl=e.getContext(`webgl2`,p)),this.isWebgl2=!!this.gl,this.gl||=e.getContext(`webgl`,p),this.gl||console.error(`unable to create webgl context`),this.gl.renderer=this,this.setSize(t,n),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension(`EXT_color_buffer_float`),this.getExtension(`OES_texture_float_linear`)):(this.getExtension(`OES_texture_float`),this.getExtension(`OES_texture_float_linear`),this.getExtension(`OES_texture_half_float`),this.getExtension(`OES_texture_half_float_linear`),this.getExtension(`OES_element_index_uint`),this.getExtension(`OES_standard_derivatives`),this.getExtension(`EXT_sRGB`),this.getExtension(`WEBGL_depth_texture`),this.getExtension(`WEBGL_draw_buffers`)),this.getExtension(`WEBGL_compressed_texture_astc`),this.getExtension(`EXT_texture_compression_bptc`),this.getExtension(`WEBGL_compressed_texture_s3tc`),this.getExtension(`WEBGL_compressed_texture_etc1`),this.getExtension(`WEBGL_compressed_texture_pvrtc`),this.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`),this.vertexAttribDivisor=this.getExtension(`ANGLE_instanced_arrays`,`vertexAttribDivisor`,`vertexAttribDivisorANGLE`),this.drawArraysInstanced=this.getExtension(`ANGLE_instanced_arrays`,`drawArraysInstanced`,`drawArraysInstancedANGLE`),this.drawElementsInstanced=this.getExtension(`ANGLE_instanced_arrays`,`drawElementsInstanced`,`drawElementsInstancedANGLE`),this.createVertexArray=this.getExtension(`OES_vertex_array_object`,`createVertexArray`,`createVertexArrayOES`),this.bindVertexArray=this.getExtension(`OES_vertex_array_object`,`bindVertexArray`,`bindVertexArrayOES`),this.deleteVertexArray=this.getExtension(`OES_vertex_array_object`,`deleteVertexArray`,`deleteVertexArrayOES`),this.drawBuffers=this.getExtension(`WEBGL_draw_buffers`,`drawBuffers`,`drawBuffersWEBGL`),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension(`EXT_texture_filter_anisotropic`)?this.gl.getParameter(this.getExtension(`EXT_texture_filter_anisotropic`).MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+`px`,height:t+`px`})}setViewport(e,t,n=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=n,this.state.viewport.y=r,this.gl.viewport(n,r,e,t))}setScissor(e,t,n=0,r=0){this.gl.scissor(n,r,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,n,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===n&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=n,this.state.blendFunc.dstAlpha=r,n===void 0?this.gl.blendFunc(e,t):this.gl.blendFuncSeparate(e,t,n,r))}setBlendEquation(e,t){e||=this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t===void 0?this.gl.blendEquation(e):this.gl.blendEquationSeparate(e,t))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,n){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===n||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=n||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,n||0))}setStencilOp(e,t,n){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===n||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=n,this.gl.stencilOp(e,t,n))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,n){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][n].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder===t.renderOrder?e.program.id===t.program.id?e.zDepth===t.zDepth?t.id-e.id:e.zDepth-t.zDepth:e.program.id-t.program.id:e.renderOrder-t.renderOrder}sortTransparent(e,t){return e.renderOrder===t.renderOrder?e.zDepth===t.zDepth?t.id-e.id:t.zDepth-e.zDepth:e.renderOrder-t.renderOrder}sortUI(e,t){return e.renderOrder===t.renderOrder?e.program.id===t.program.id?t.id-e.id:e.program.id-t.program.id:e.renderOrder-t.renderOrder}getRenderList({scene:e,camera:t,frustumCull:n,sort:r}){let i=[];if(t&&n&&t.updateFrustum(),e.traverse(e=>{if(!e.visible)return!0;e.draw&&(n&&e.frustumCulled&&t&&!t.frustumIntersectsMesh(e)||i.push(e))}),r){let e=[],n=[],r=[];i.forEach(i=>{i.program.transparent?i.program.depthTest?n.push(i):r.push(i):e.push(i),i.zDepth=0,!(i.renderOrder!==0||!i.program.depthTest||!t)&&(i.worldMatrix.getTranslation(pd),pd.applyMatrix4(t.projectionViewMatrix),i.zDepth=pd.z)}),e.sort(this.sortOpaque),n.sort(this.sortTransparent),r.sort(this.sortUI),i=e.concat(n,r)}return i}render({scene:e,camera:t,target:n=null,update:r=!0,sort:i=!0,frustumCull:a=!0,clear:o}){n===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(n),this.setViewport(n.width,n.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!n||n.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!n||n.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:a,sort:i}).forEach(e=>{e.draw({camera:t})})}};function gd(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function _d(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function vd(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=a*o,e}function yd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function bd(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Z(e,t,n){n*=.5;let r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function xd(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=r*u+o*s+i*l-a*c,e[1]=i*u+o*c+a*s-r*l,e[2]=a*u+o*l+r*c-i*s,e[3]=o*u-r*s-i*c-a*l,e}function Sd(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+o*s,e[1]=i*c+a*s,e[2]=a*c-i*s,e[3]=o*c-r*s,e}function Cd(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c-a*s,e[1]=i*c+o*s,e[2]=a*c+r*s,e[3]=o*c-i*s,e}function wd(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+i*s,e[1]=i*c-r*s,e[2]=a*c+o*s,e[3]=o*c-a*s,e}function Td(e,t,n,r){let i=t[0],a=t[1],o=t[2],s=t[3],c=n[0],l=n[1],u=n[2],d=n[3],f,p,m,h,g;return p=i*c+a*l+o*u+s*d,p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(f=Math.acos(p),m=Math.sin(f),h=Math.sin((1-r)*f)/m,g=Math.sin(r*f)/m):(h=1-r,g=r),e[0]=h*i+g*c,e[1]=h*a+g*l,e[2]=h*o+g*u,e[3]=h*s+g*d,e}function Ed(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a,s=o?1/o:0;return e[0]=-n*s,e[1]=-r*s,e[2]=-i*s,e[3]=a*s,e}function Dd(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Od(e,t){let n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);let i=(n+1)%3,a=(n+2)%3;r=Math.sqrt(t[n*3+n]-t[i*3+i]-t[a*3+a]+1),e[n]=.5*r,r=.5/r,e[3]=(t[i*3+a]-t[a*3+i])*r,e[i]=(t[i*3+n]+t[n*3+i])*r,e[a]=(t[a*3+n]+t[n*3+a])*r}return e}function kd(e,t,n=`YXZ`){let r=Math.sin(t[0]*.5),i=Math.cos(t[0]*.5),a=Math.sin(t[1]*.5),o=Math.cos(t[1]*.5),s=Math.sin(t[2]*.5),c=Math.cos(t[2]*.5);return n===`XYZ`?(e[0]=r*o*c+i*a*s,e[1]=i*a*c-r*o*s,e[2]=i*o*s+r*a*c,e[3]=i*o*c-r*a*s):n===`YXZ`?(e[0]=r*o*c+i*a*s,e[1]=i*a*c-r*o*s,e[2]=i*o*s-r*a*c,e[3]=i*o*c+r*a*s):n===`ZXY`?(e[0]=r*o*c-i*a*s,e[1]=i*a*c+r*o*s,e[2]=i*o*s+r*a*c,e[3]=i*o*c-r*a*s):n===`ZYX`?(e[0]=r*o*c-i*a*s,e[1]=i*a*c+r*o*s,e[2]=i*o*s-r*a*c,e[3]=i*o*c+r*a*s):n===`YZX`?(e[0]=r*o*c+i*a*s,e[1]=i*a*c+r*o*s,e[2]=i*o*s-r*a*c,e[3]=i*o*c-r*a*s):n===`XZY`&&(e[0]=r*o*c-i*a*s,e[1]=i*a*c-r*o*s,e[2]=i*o*s+r*a*c,e[3]=i*o*c+r*a*s),e}var Ad=gd,jd=_d,Md=yd,Nd=vd,Q=class extends Array{constructor(e=0,t=0,n=0,r=1){super(e,t,n,r),this.onChange=()=>{},this._target=this;let i=[`0`,`1`,`2`,`3`];return new Proxy(this,{set(e,t){let n=Reflect.set(...arguments);return n&&i.includes(t)&&e.onChange(),n}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return bd(this._target),this.onChange(),this}set(e,t,n,r){return e.length?this.copy(e):(jd(this._target,e,t,n,r),this.onChange(),this)}rotateX(e){return Sd(this._target,this._target,e),this.onChange(),this}rotateY(e){return Cd(this._target,this._target,e),this.onChange(),this}rotateZ(e){return wd(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Ed(this._target,e),this.onChange(),this}conjugate(e=this._target){return Dd(this._target,e),this.onChange(),this}copy(e){return Ad(this._target,e),this.onChange(),this}normalize(e=this._target){return Nd(this._target,e),this.onChange(),this}multiply(e,t){return t?xd(this._target,e,t):xd(this._target,this._target,e),this.onChange(),this}dot(e){return Md(this._target,e)}fromMatrix3(e){return Od(this._target,e),this.onChange(),this}fromEuler(e,t){return kd(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return Z(this._target,e,t),this.onChange(),this}slerp(e,t){return Td(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}},Pd=1e-6;function Fd(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=o,e[6]=s,e[7]=c,e[8]=l,e[9]=u,e[10]=d,e[11]=f,e[12]=p,e[13]=m,e[14]=h,e[15]=g,e}function Ld(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Rd(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e):null}function zd(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m;return _*(d*g-f*h)-v*D+y*E+b*T-x*w+S*C}function Bd(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function Vd(e,t,n){let r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function Hd(e,t,n){let r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Ud(e,t,n,r){let i=r[0],a=r[1],o=r[2],s=Math.hypot(i,a,o),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee;return Math.abs(s)<Pd?null:(s=1/s,i*=s,a*=s,o*=s,c=Math.sin(n),l=Math.cos(n),u=1-l,d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8],b=t[9],x=t[10],S=t[11],C=i*i*u+l,w=a*i*u+o*c,T=o*i*u-a*c,E=i*a*u-o*c,D=a*a*u+l,O=o*a*u+i*c,k=i*o*u+a*c,A=a*o*u-i*c,ee=o*o*u+l,e[0]=d*C+h*w+y*T,e[1]=f*C+g*w+b*T,e[2]=p*C+_*w+x*T,e[3]=m*C+v*w+S*T,e[4]=d*E+h*D+y*O,e[5]=f*E+g*D+b*O,e[6]=p*E+_*D+x*O,e[7]=m*E+v*D+S*O,e[8]=d*k+h*A+y*ee,e[9]=f*k+g*A+b*ee,e[10]=p*k+_*A+x*ee,e[11]=m*k+v*A+S*ee,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function Wd(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function Gd(e,t){let n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],s=t[6],c=t[8],l=t[9],u=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(a,o,s),e[2]=Math.hypot(c,l,u),e}function Kd(e){let t=e[0],n=e[1],r=e[2],i=e[4],a=e[5],o=e[6],s=e[8],c=e[9],l=e[10],u=t*t+n*n+r*r,d=i*i+a*a+o*o,f=s*s+c*c+l*l;return Math.sqrt(Math.max(u,d,f))}var qd=(function(){let e=[1,1,1];return function(t,n){let r=e;Gd(r,n);let i=1/r[0],a=1/r[1],o=1/r[2],s=n[0]*i,c=n[1]*a,l=n[2]*o,u=n[4]*i,d=n[5]*a,f=n[6]*o,p=n[8]*i,m=n[9]*a,h=n[10]*o,g=s+d+h,_=0;return g>0?(_=Math.sqrt(g+1)*2,t[3]=.25*_,t[0]=(f-m)/_,t[1]=(p-l)/_,t[2]=(c-u)/_):s>d&&s>h?(_=Math.sqrt(1+s-d-h)*2,t[3]=(f-m)/_,t[0]=.25*_,t[1]=(c+u)/_,t[2]=(p+l)/_):d>h?(_=Math.sqrt(1+d-s-h)*2,t[3]=(p-l)/_,t[0]=(c+u)/_,t[1]=.25*_,t[2]=(f+m)/_):(_=Math.sqrt(1+h-s-d)*2,t[3]=(c-u)/_,t[0]=(p+l)/_,t[1]=(f+m)/_,t[2]=.25*_),t}})();function Jd(e,t,n,r){let i=Ou([e[0],e[1],e[2]]),a=Ou([e[4],e[5],e[6]]),o=Ou([e[8],e[9],e[10]]);zd(e)<0&&(i=-i),n[0]=e[12],n[1]=e[13],n[2]=e[14];let s=e.slice(),c=1/i,l=1/a,u=1/o;s[0]*=c,s[1]*=c,s[2]*=c,s[4]*=l,s[5]*=l,s[6]*=l,s[8]*=u,s[9]*=u,s[10]*=u,qd(t,s),r[0]=i,r[1]=a,r[2]=o}function Yd(e,t,n,r){let i=e,a=t[0],o=t[1],s=t[2],c=t[3],l=a+a,u=o+o,d=s+s,f=a*l,p=a*u,m=a*d,h=o*u,g=o*d,_=s*d,v=c*l,y=c*u,b=c*d,x=r[0],S=r[1],C=r[2];return i[0]=(1-(h+_))*x,i[1]=(p+b)*x,i[2]=(m-y)*x,i[3]=0,i[4]=(p-b)*S,i[5]=(1-(f+_))*S,i[6]=(g+v)*S,i[7]=0,i[8]=(m+y)*C,i[9]=(g-v)*C,i[10]=(1-(f+h))*C,i[11]=0,i[12]=n[0],i[13]=n[1],i[14]=n[2],i[15]=1,i}function Xd(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[1]=u+_,e[2]=f-g,e[3]=0,e[4]=u-_,e[5]=1-l-m,e[6]=p+h,e[7]=0,e[8]=f+g,e[9]=p-h,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Zd(e,t,n,r,i){let a=1/Math.tan(t/2),o=1/(r-i);return e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*o,e[15]=0,e}function Qd(e,t,n,r,i,a,o){let s=1/(t-n),c=1/(r-i),l=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+n)*s,e[13]=(i+r)*c,e[14]=(o+a)*l,e[15]=1,e}function $d(e,t,n,r){let i=t[0],a=t[1],o=t[2],s=r[0],c=r[1],l=r[2],u=i-n[0],d=a-n[1],f=o-n[2],p=u*u+d*d+f*f;p===0?f=1:(p=1/Math.sqrt(p),u*=p,d*=p,f*=p);let m=c*f-l*d,h=l*u-s*f,g=s*d-c*u;return p=m*m+h*h+g*g,p===0&&(l?s+=1e-6:c?l+=1e-6:c+=1e-6,m=c*f-l*d,h=l*u-s*f,g=s*d-c*u,p=m*m+h*h+g*g),p=1/Math.sqrt(p),m*=p,h*=p,g*=p,e[0]=m,e[1]=h,e[2]=g,e[3]=0,e[4]=d*g-f*h,e[5]=f*m-u*g,e[6]=u*h-d*m,e[7]=0,e[8]=u,e[9]=d,e[10]=f,e[11]=0,e[12]=i,e[13]=a,e[14]=o,e[15]=1,e}function ef(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function tf(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function nf(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}var rf=class extends Array{constructor(e=1,t=0,n=0,r=0,i=0,a=1,o=0,s=0,c=0,l=0,u=1,d=0,f=0,p=0,m=0,h=1){return super(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return e.length?this.copy(e):(Id(this,e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h),this)}translate(e,t=this){return Vd(this,t,e),this}rotate(e,t,n=this){return Ud(this,n,e,t),this}scale(e,t=this){return Hd(this,t,typeof e==`number`?[e,e,e]:e),this}add(e,t){return t?ef(this,e,t):ef(this,this,e),this}sub(e,t){return t?tf(this,e,t):tf(this,this,e),this}multiply(e,t){return e.length?t?Bd(this,e,t):Bd(this,this,e):nf(this,this,e),this}identity(){return Ld(this),this}copy(e){return Fd(this,e),this}fromPerspective({fov:e,aspect:t,near:n,far:r}={}){return Zd(this,e,t,n,r),this}fromOrthogonal({left:e,right:t,bottom:n,top:r,near:i,far:a}){return Qd(this,e,t,n,r,i,a),this}fromQuaternion(e){return Xd(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return Rd(this,e),this}compose(e,t,n){return Yd(this,e,t,n),this}decompose(e,t,n){return Jd(this,e,t,n),this}getRotation(e){return qd(e,this),this}getTranslation(e){return Wd(e,this),this}getScaling(e){return Gd(e,this),this}getMaxScaleOnAxis(){return Kd(this)}lookAt(e,t,n){return $d(this,e,t,n),this}determinant(){return zd(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}};function af(e,t,n=`YXZ`){return n===`XYZ`?(e[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(e[0]=Math.atan2(-t[9],t[10]),e[2]=Math.atan2(-t[4],t[0])):(e[0]=Math.atan2(t[6],t[5]),e[2]=0)):n===`YXZ`?(e[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(e[1]=Math.atan2(t[8],t[10]),e[2]=Math.atan2(t[1],t[5])):(e[1]=Math.atan2(-t[2],t[0]),e[2]=0)):n===`ZXY`?(e[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(e[1]=Math.atan2(-t[2],t[10]),e[2]=Math.atan2(-t[4],t[5])):(e[1]=0,e[2]=Math.atan2(t[1],t[0]))):n===`ZYX`?(e[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(e[0]=Math.atan2(t[6],t[10]),e[2]=Math.atan2(t[1],t[0])):(e[0]=0,e[2]=Math.atan2(-t[4],t[5]))):n===`YZX`?(e[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(e[0]=Math.atan2(-t[9],t[5]),e[1]=Math.atan2(-t[2],t[0])):(e[0]=0,e[1]=Math.atan2(t[8],t[10]))):n===`XZY`&&(e[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(e[0]=Math.atan2(t[6],t[5]),e[1]=Math.atan2(t[8],t[0])):(e[0]=Math.atan2(-t[9],t[10]),e[1]=0)),e}var of=new rf,sf=class extends Array{constructor(e=0,t=e,n=e,r=`YXZ`){super(e,t,n),this.order=r,this.onChange=()=>{},this._target=this;let i=[`0`,`1`,`2`];return new Proxy(this,{set(e,t){let n=Reflect.set(...arguments);return n&&i.includes(t)&&e.onChange(),n}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,n=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=n,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return af(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,n){return of.fromQuaternion(e),this._target.fromRotationMatrix(of,t),n||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}},cf=class{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new rf,this.worldMatrix=new rf,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Zu,this.quaternion=new Q,this.scale=new Zu(1),this.rotation=new sf,this.up=new Zu(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,n=this.children.length;t<n;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,n=this.children.length;t<n;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}};function lf(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function uf(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[3]=u-_,e[6]=f+g,e[1]=u+_,e[4]=1-l-m,e[7]=p-h,e[2]=f-g,e[5]=p+h,e[8]=1-l-d,e}function df(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function ff(e,t,n,r,i,a,o,s,c,l){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=o,e[6]=s,e[7]=c,e[8]=l,e}function pf(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function mf(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=u*o-s*l,f=-u*a+s*c,p=l*a-o*c,m=n*d+r*f+i*p;return m?(m=1/m,e[0]=d*m,e[1]=(-u*r+i*l)*m,e[2]=(s*r-i*o)*m,e[3]=f*m,e[4]=(u*n-i*c)*m,e[5]=(-s*n+i*a)*m,e[6]=p*m,e[7]=(-l*n+r*c)*m,e[8]=(o*n-r*a)*m,e):null}function hf(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=n[0],p=n[1],m=n[2],h=n[3],g=n[4],_=n[5],v=n[6],y=n[7],b=n[8];return e[0]=f*r+p*o+m*l,e[1]=f*i+p*s+m*u,e[2]=f*a+p*c+m*d,e[3]=h*r+g*o+_*l,e[4]=h*i+g*s+_*u,e[5]=h*a+g*c+_*d,e[6]=v*r+y*o+b*l,e[7]=v*i+y*s+b*u,e[8]=v*a+y*c+b*d,e}function gf(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=n[0],p=n[1];return e[0]=r,e[1]=i,e[2]=a,e[3]=o,e[4]=s,e[5]=c,e[6]=f*r+p*o+l,e[7]=f*i+p*s+u,e[8]=f*a+p*c+d,e}function _f(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=Math.sin(n),p=Math.cos(n);return e[0]=p*r+f*o,e[1]=p*i+f*s,e[2]=p*a+f*c,e[3]=p*o-f*r,e[4]=p*s-f*i,e[5]=p*c-f*a,e[6]=l,e[7]=u,e[8]=d,e}function vf(e,t,n){let r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function yf(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(c*E-o*k-l*T)*A,e[2]=(o*O-s*E+l*w)*A,e[3]=(i*O-r*k-a*D)*A,e[4]=(n*k-i*E+a*T)*A,e[5]=(r*E-n*O-a*w)*A,e[6]=(h*C-g*S+_*x)*A,e[7]=(g*b-m*C-_*y)*A,e[8]=(m*S-h*b+_*v)*A,e):null}var bf=class extends Array{constructor(e=1,t=0,n=0,r=0,i=1,a=0,o=0,s=0,c=1){return super(e,t,n,r,i,a,o,s,c),this}set(e,t,n,r,i,a,o,s,c){return e.length?this.copy(e):(ff(this,e,t,n,r,i,a,o,s,c),this)}translate(e,t=this){return gf(this,t,e),this}rotate(e,t=this){return _f(this,t,e),this}scale(e,t=this){return vf(this,t,e),this}multiply(e,t){return t?hf(this,e,t):hf(this,this,e),this}identity(){return pf(this),this}copy(e){return df(this,e),this}fromMatrix4(e){return lf(this,e),this}fromQuaternion(e){return uf(this,e),this}fromBasis(e,t,n){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this}inverse(e=this){return mf(this,e),this}getNormalMatrix(e){return yf(this,e),this}},xf=0,Sf=class extends cf{constructor(e,{geometry:t,program:n,mode:r=e.TRIANGLES,frustumCulled:i=!0,renderOrder:a=0}={}){super(),e.canvas||console.error(`gl not passed as first argument to Mesh`),this.gl=e,this.id=xf++,this.geometry=t,this.program=n,this.mode=r,this.frustumCulled=i,this.renderOrder=a,this.modelViewMatrix=new rf,this.normalMatrix=new bf,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(t=>t&&t({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(t=>t&&t({mesh:this,camera:e}))}},Cf=class extends nd{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}},wf=Math.PI*2,Tf=`#0C0C0D`,Ef=`#C98A2B`,Df={"pose-1":0,pose1:0,state1:0,hero:0,lightfall:0,fibers:0,"pose-2":1,pose2:1,state2:1,portal:1,"black-hole":1,"pose-3":2,pose3:2,state3:2,betelgeuse:2,starfield:2,"pose-4":3,pose4:3,state4:3,constellation:3,vortex:4,horizon:4},Of={scrollStart:.08,scrollEnd:.92,stageResponse:1.8};function kf(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function Af(e,t,n){return e+(t-e)*n}function jf(e){let t=kf(e);return t*t*t*(t*(t*6-15)+10)}function Mf(e,t=Of.scrollStart,n=Of.scrollEnd){return jf((e-t)/Math.max(.001,n-t))}function Nf(e,t){return 1-Math.exp(-e*t)}function Pf(e){let t=String(e||``).replace(`#`,``).trim(),n=t.length===3?t.split(``).map(e=>e+e).join(``):t.padEnd(6,`0`).slice(0,6),r=Number.parseInt(n.slice(0,2),16),i=Number.parseInt(n.slice(2,4),16),a=Number.parseInt(n.slice(4,6),16);return[Number.isFinite(r)?r/255:0,Number.isFinite(i)?i/255:0,Number.isFinite(a)?a/255:0]}function Ff(e,t,n){return[10*(t-e),e*(28-n)-t,e*t-8/3*n]}function If(e,t){let[n,r,i]=e,a=Ff(n,r,i),o=Ff(n+a[0]*t*.5,r+a[1]*t*.5,i+a[2]*t*.5),s=Ff(n+o[0]*t*.5,r+o[1]*t*.5,i+o[2]*t*.5),c=Ff(n+s[0]*t,r+s[1]*t,i+s[2]*t);return[n+(a[0]+2*o[0]+2*s[0]+c[0])*t/6,r+(a[1]+2*o[1]+2*s[1]+c[1])*t/6,i+(a[2]+2*o[2]+2*s[2]+c[2])*t/6]}function Lf(e){let t=.0049,n=new Float64Array(e*3),r=new Float32Array(e*3),i=new Float32Array(e*3),a=new Float32Array(e),o=new Float32Array(e),s=new Float64Array(e),c=[.12,.07,.03],l=1/0,u=1/0,d=1/0,f=-1/0,p=-1/0,m=-1/0;for(let e=0;e<2200;e+=1)c=If(c,t);for(let r=0;r<e;r+=1){c=If(c,t);let e=r*3;n[e]=c[0],n[e+1]=c[2],n[e+2]=c[1],l=Math.min(l,n[e]),u=Math.min(u,n[e+1]),d=Math.min(d,n[e+2]),f=Math.max(f,n[e]),p=Math.max(p,n[e+1]),m=Math.max(m,n[e+2])}let h=(l+f)*.5,g=(u+p)*.5,_=(d+m)*.5,v=Math.max(.001,(f-l)*.5),y=Math.max(.001,(p-u)*.5),b=Math.max(.001,(m-d)*.5),x=0;for(let t=0;t<e;t+=1){let o=t*3,c=(n[o]-h)/v,l=(n[o+1]-g)/y,u=(n[o+2]-_)/b;r[o]=c,r[o+1]=l,r[o+2]=u;let d=t/Math.max(1,e-1);a[t]=d;let f=Af(-1.18,1.18,d),p=.095+.35*Math.sin(d*Math.PI)**.72,m=d*wf*46+Math.sin(d*wf*3)*.42;if(i[o]=Math.cos(m)*p,i[o+1]=f,i[o+2]=Math.sin(m)*p,t>0){let e=o-3,n=r[o]-r[e],i=r[o+1]-r[e+1],a=r[o+2]-r[e+2],c=Math.hypot(n,i,a);s[t]=c,x=Math.max(x,c)}}for(let t=0;t<e;t+=1)o[t]=.34+(s[t]/Math.max(1e-5,x))**.45*.66;return{position:r,vortexPosition:i,progress:a,energy:o}}function Rf(e){let t=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4,n=navigator.deviceMemory&&navigator.deviceMemory<=4,r=!!(t||n||navigator.connection?.saveData);return e<=640?{fps:r?20:26,pointCount:r?8500:11e3,dprCap:1,maxPixels:105e4,mouse:!1}:e<=1080?{fps:r?24:32,pointCount:r?11e3:14500,dprCap:r?1:1.15,maxPixels:r?14e5:19e5,mouse:!r}:{fps:r?28:40,pointCount:r?14500:19e3,dprCap:r?1:1.35,maxPixels:r?2e6:3e6,mouse:!0}}function zf(e,t,n,r){let i=n??window.devicePixelRatio??1,a=Math.min(i,r.dprCap),o=Math.sqrt(r.maxPixels/Math.max(1,e*t));return Math.max(.75,Math.min(a,o))}var Bf=`
attribute vec2 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Vf=`
precision highp float;

#define PI 3.141592653589793
#define TAU 6.283185307179586

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float uStage;
uniform vec3 uBackgroundColor;
uniform vec3 uGoldColor;
uniform float uGlowStrength;
uniform float uMouseEnabled;

varying vec2 vUv;

float saturate(float value) {
  return clamp(value, 0.0, 1.0);
}

float ease(float value) {
  float t = saturate(value);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float hash21(vec2 point) {
  return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
}

vec3 renderGoldVortex(vec2 point) {
  float verticalFade = 1.0 - smoothstep(0.76, 1.35, abs(point.y));
  float bodyWidth =
    0.085 + 0.265 * (1.0 - smoothstep(0.0, 1.2, abs(point.y)));
  vec3 result = vec3(0.0);

  for (int ribbonIndex = 0; ribbonIndex < 6; ribbonIndex++) {
    float ribbon = float(ribbonIndex);
    float phase = ribbon * TAU / 6.0;
    float spin = point.y * (8.0 + ribbon * 0.2)
      - iTime * (2.0 + ribbon * 0.075);
    float depth = 0.5 + 0.5 * cos(spin + phase);
    float path = sin(spin + phase)
      * bodyWidth
      * (0.55 + 0.45 * depth);
    float distanceToRibbon = abs(point.x - path);
    float core = exp(-distanceToRibbon * (88.0 + depth * 62.0));
    float bloom = exp(-distanceToRibbon * 18.0);

    result += uGoldColor * core * verticalFade * (0.85 + depth * 1.45);
    result += uGoldColor * bloom * verticalFade * 0.075;
  }

  float column = exp(-abs(point.x) * 13.0) * verticalFade;
  float columnCore = exp(-abs(point.x) * 78.0) * verticalFade;
  float ringCoordinate = fract(point.y * 4.75 - iTime * 0.86);
  float movingRings = exp(-abs(ringCoordinate - 0.5) * 25.0);
  movingRings *= exp(-abs(point.x) / max(bodyWidth, 0.02));

  result += uGoldColor * column * 0.12;
  result += mix(uGoldColor, vec3(1.0, 0.86, 0.36), 0.32)
    * columnCore
    * 0.24;
  result += uGoldColor * movingRings * 0.28;

  float heart = exp(
    -(point.x * point.x * 34.0 + point.y * point.y * 4.5)
  );
  result += mix(uGoldColor, vec3(1.0, 0.9, 0.46), 0.28)
    * heart
    * 0.28;

  return result * uGlowStrength;
}

void main() {
  vec2 resolution = iResolution.xy;
  vec2 point = (vUv * resolution * 2.0 - resolution) / resolution.y;
  vec2 normalizedMouse = (iMouse * 2.0 - resolution) / resolution.y;
  float toVortex = ease(uStage - 3.0);

  vec3 color = uBackgroundColor;

  // The reference is almost perfectly flat black, with only a restrained warm
  // haze behind the mathematical field.
  float centralHaze = exp(-dot(point, point) * 0.72);
  color += uGoldColor * centralHaze * 0.008;

  if (toVortex > 0.001) {
    vec2 vortexPoint = point - normalizedMouse * (0.018 * uMouseEnabled);
    color += renderGoldVortex(vortexPoint) * toVortex;
  }

  float grain = hash21(gl_FragCoord.xy + floor(iTime * 3.0));
  color += (grain - 0.5) * 0.0045;

  gl_FragColor = vec4(max(color, 0.0), 1.0);
}
`,Hf=`
precision highp float;

attribute vec3 position;
attribute vec3 aVortexPosition;
attribute float aProgress;
attribute float aEnergy;

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float uStage;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uPassScale;
uniform vec2 uPassOffset;

varying float vDepth;
varying float vEnergy;
varying float vProgress;
varying float vVortex;

float saturate(float value) {
  return clamp(value, 0.0, 1.0);
}

float ease(float value) {
  float t = saturate(value);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

mat3 rotateX(float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat3(
    1.0, 0.0, 0.0,
    0.0, cosine, -sine,
    0.0, sine, cosine
  );
}

mat3 rotateY(float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat3(
    cosine, 0.0, sine,
    0.0, 1.0, 0.0,
    -sine, 0.0, cosine
  );
}

mat3 rotateZ(float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat3(
    cosine, -sine, 0.0,
    sine, cosine, 0.0,
    0.0, 0.0, 1.0
  );
}

void main() {
  float transitionOne = ease(uStage);
  float transitionTwo = ease(uStage - 1.0);
  float transitionThree = ease(uStage - 2.0);
  float toVortex = ease(uStage - 3.0);

  // Four camera poses. Only the camera angles, framing and placement change;
  // every point remains part of the exact same Lorenz trajectory.
  vec3 angles = mix(
    vec3(-0.055, 0.0, -0.055),
    vec3(0.38, 0.68, -0.26),
    transitionOne
  );
  angles = mix(angles, vec3(-0.58, -0.56, 0.52), transitionTwo);
  angles = mix(angles, vec3(0.12, 1.14, 1.36), transitionThree);

  float framing = mix(1.0, 0.92, transitionOne);
  framing = mix(framing, 0.96, transitionTwo);
  framing = mix(framing, 0.87, transitionThree);

  vec2 placement = mix(vec2(0.0), vec2(0.075, -0.025), transitionOne);
  placement = mix(placement, vec2(-0.07, 0.035), transitionTwo);
  placement = mix(placement, vec2(0.045, 0.0), transitionThree);

  vec2 normalizedMouse = (iMouse * 2.0 - iResolution.xy) / iResolution.y;
  angles.x += normalizedMouse.y * uMouseStrength * 0.055 * uMouseEnabled;
  angles.y += normalizedMouse.x * uMouseStrength * 0.075 * uMouseEnabled;

  vec3 lorenz = rotateZ(angles.z)
    * rotateY(angles.y)
    * rotateX(angles.x)
    * position;

  float vortexRotation = iTime * 0.62;
  vec3 vortex = rotateY(vortexRotation) * aVortexPosition;

  float aspect = iResolution.x / max(1.0, iResolution.y);
  float portraitFit = min(1.0, aspect / 1.45);

  vec2 lorenzClip = vec2(
    lorenz.x * 1.47 / aspect,
    lorenz.y * 1.03
  ) * framing;
  lorenzClip += placement;

  vec2 vortexClip = vec2(
    vortex.x * 1.42 / aspect,
    vortex.y * 0.82
  );

  vec2 clipPosition = mix(lorenzClip, vortexClip, toVortex);
  clipPosition *= portraitFit * uPassScale;
  clipPosition += (uPassOffset * 2.0) / iResolution.xy;

  gl_Position = vec4(clipPosition, 0.0, 1.0);

  float lorenzDepth = 0.5 + 0.5 * lorenz.z;
  float vortexDepth = 0.5 + 0.5 * vortex.z / 0.45;
  vDepth = mix(lorenzDepth, vortexDepth, toVortex);
  vEnergy = aEnergy;
  vProgress = aProgress;
  vVortex = toVortex;
}
`,Uf=`
precision highp float;

uniform vec3 uGoldColor;
uniform float uLineOpacity;
uniform float uPassAlpha;
uniform float iTime;

varying float vDepth;
varying float vEnergy;
varying float vProgress;
varying float vVortex;

void main() {
  float depthLight = mix(0.46, 1.0, clamp(vDepth, 0.0, 1.0));
  float energyLight = mix(0.72, 1.0, vEnergy);

  // A very faint continuous guide keeps the Lorenz silhouette readable.
  float basePath = 0.055;

  // Several long light streams move along the exact trajectory and visually
  // construct the shape instead of making the whole object pulse.
  float direction = mix(1.0, 1.35, vVortex);
  float streamA = fract(vProgress * 34.0 - iTime * 0.72 * direction);
  float streamB = fract(vProgress * 34.0 - iTime * 0.72 * direction + 0.33);
  float streamC = fract(vProgress * 34.0 - iTime * 0.72 * direction + 0.66);

  float bandA = smoothstep(0.00, 0.10, streamA)
    * (1.0 - smoothstep(0.42, 0.72, streamA));
  float bandB = smoothstep(0.00, 0.10, streamB)
    * (1.0 - smoothstep(0.42, 0.72, streamB));
  float bandC = smoothstep(0.00, 0.10, streamC)
    * (1.0 - smoothstep(0.42, 0.72, streamC));

  float movingStreams = max(bandA, max(bandB, bandC));
  float leadingEdge = pow(movingStreams, 0.55);
  float combinedEnergy = basePath + movingStreams * 1.55 + leadingEdge * 0.55;

  float alpha = uLineOpacity
    * uPassAlpha
    * depthLight
    * energyLight
    * combinedEnergy;

  vec3 color = uGoldColor * mix(
    0.50,
    1.55,
    clamp(depthLight * energyLight * combinedEnergy, 0.0, 1.0)
  );
  gl_FragColor = vec4(color, alpha);
}
`;function Wf({className:e=``,dpr:t,paused:n=!1,goldColor:r=Ef,backgroundColor:i=Tf,lineOpacity:a=.64,glowStrength:o=.72,mouseInteraction:s=!0,mouseStrength:c=.52,mouseDampening:l=.16,mixBlendMode:u}){let d=(0,S.useRef)(null);return(0,S.useEffect)(()=>{let e=d.current;if(!e)return;let u=window.matchMedia(`(prefers-reduced-motion: reduce)`),f=u.matches,p=!1,m=null,h=null,g=null,_=null,v=null,y=0,b=Rf(window.innerWidth),x;try{x=new hd({dpr:zf(window.innerWidth,window.innerHeight,t,b),alpha:!1,antialias:!0,powerPreference:`high-performance`})}catch(e){console.error(`GlobalFiberBackground: WebGL is unavailable.`,e);return}let S=x.gl,C=S.canvas,w=new cf;C.setAttribute(`aria-hidden`,`true`),C.style.width=`100%`,C.style.height=`100%`,C.style.display=`block`,C.style.pointerEvents=`none`,e.appendChild(C);let T={iResolution:{value:[1,1,1]},iMouse:{value:[0,0]},iTime:{value:0},uStage:{value:0},uBackgroundColor:{value:Pf(i)},uGoldColor:{value:Pf(r)},uGlowStrength:{value:Math.max(0,o)},uLineOpacity:{value:kf(a)},uMouseEnabled:{value:+!!s},uMouseStrength:{value:Math.max(0,c)}},E=new ad(S,{vertex:Bf,fragment:Vf,uniforms:T,depthTest:!1,depthWrite:!1,cullFace:null}),D=new Cf(S),O=new Sf(S,{geometry:D,program:E,frustumCulled:!1,renderOrder:0});O.setParent(w);let k=Lf(b.pointCount),A=new nd(S,{position:{size:3,data:k.position},aVortexPosition:{size:3,data:k.vortexPosition},aProgress:{size:1,data:k.progress},aEnergy:{size:1,data:k.energy}}),ee=[{offset:[-.85,0],scale:1.0015,alpha:.045},{offset:[.85,0],scale:.9985,alpha:.045},{offset:[0,-.85],scale:1.0008,alpha:.04},{offset:[0,.85],scale:.9992,alpha:.04},{offset:[0,0],scale:1,alpha:.84}],te=[],ne=[];for(let e=0;e<ee.length;e+=1){let t=ee[e],n=new ad(S,{vertex:Hf,fragment:Uf,uniforms:{...T,uPassScale:{value:t.scale},uPassOffset:{value:t.offset},uPassAlpha:{value:t.alpha}},transparent:!0,depthTest:!1,depthWrite:!1,cullFace:null});n.setBlendFunc(S.SRC_ALPHA,S.ONE);let r=new Sf(S,{mode:S.LINE_STRIP,geometry:A,program:n,frustumCulled:!1,renderOrder:e+1});r.setParent(w),te.push(n),ne.push(r)}let j={width:window.innerWidth,height:window.innerHeight,quality:b,stage:0,targetStage:0,time:0,rafId:null,sceneStops:[],mouseX:.5,mouseY:.5,targetMouseX:.5,targetMouseY:.5};function re(){T.iResolution.value=[S.drawingBufferWidth,S.drawingBufferHeight,1],T.iMouse.value=[j.mouseX*S.drawingBufferWidth,(1-j.mouseY)*S.drawingBufferHeight]}function M(){j.width=window.innerWidth,j.height=window.innerHeight,j.quality=Rf(j.width),x.dpr=zf(j.width,j.height,t,j.quality),x.setSize(j.width,j.height),re()}function N(e){let t=j.sceneStops;if(!t.length)return 0;if(e<=t[0].center)return t[0].sceneIndex;let n=t[t.length-1];if(e>=n.center)return n.sceneIndex;for(let n=0;n<t.length-1;n+=1){let r=t[n],i=t[n+1];if(e>=r.center&&e<=i.center){let t=Math.max(1,i.center-r.center),n=(e-r.center)/t;return Af(r.sceneIndex,i.sceneIndex,Mf(n))}}return n.sceneIndex}function ie(){j.targetStage=N(window.scrollY+window.innerHeight*.5),(f||n)&&(j.stage=j.targetStage,T.uStage.value=j.stage)}function ae(){if(p)return;let e=Array.from(document.querySelectorAll(`[data-cosmic-scene]`)),t=[];for(let n=0;n<e.length;n+=1){let r=e[n],i=Df[r.getAttribute(`data-cosmic-scene`)];if(i===void 0)continue;let a=r.getBoundingClientRect();t.push({sceneIndex:i,center:window.scrollY+a.top+a.height*.5})}if(t.length)j.sceneStops=t.sort((e,t)=>e.center-t.center);else{let e=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);j.sceneStops=[0,1,2,3,4].map(t=>({sceneIndex:t,center:e*t/4+window.innerHeight*.5}))}ie()}function oe(){T.iTime.value=j.time,T.uStage.value=j.stage,re(),x.render({scene:w})}function se(e){if(document.visibilityState===`hidden`||p){j.rafId=null;return}let t=1e3/j.quality.fps;if(y&&e-y<t){j.rafId=window.requestAnimationFrame(se);return}let n=y?Math.min((e-y)/1e3,.1):1/j.quality.fps;y=e,j.time+=n,j.stage+=(j.targetStage-j.stage)*Nf(Of.stageResponse,n);let r=Nf(l>0?1/l:1e3,n);j.mouseX+=(j.targetMouseX-j.mouseX)*r,j.mouseY+=(j.targetMouseY-j.mouseY)*r,Math.abs(j.targetStage-j.stage)<1e-4&&(j.stage=j.targetStage),oe(),j.rafId=window.requestAnimationFrame(se)}function ce(){n||f||j.rafId||document.visibilityState===`hidden`||(y=0,j.rafId=window.requestAnimationFrame(se))}function P(){j.rafId&&=(window.cancelAnimationFrame(j.rafId),null)}function le(){g||=window.requestAnimationFrame(()=>{g=null,!p&&(ie(),(f||n)&&oe())})}function ue(e){if(!s||!j.quality.mouse||_)return;let t=e.clientX,n=e.clientY;_=window.requestAnimationFrame(()=>{_=null,!p&&(j.targetMouseX=t/Math.max(1,j.width),j.targetMouseY=n/Math.max(1,j.height))})}function de(){window.clearTimeout(h),h=window.setTimeout(ae,140)}function fe(){window.clearTimeout(m),m=window.setTimeout(()=>{p||(M(),ae(),(f||n)&&oe())},150)}function pe(){document.visibilityState===`visible`?f||n?oe():ce():P()}function me(e){f=e.matches,f?(P(),j.stage=j.targetStage,oe()):ce()}return M(),ae(),j.stage=j.targetStage,oe(),ce(),window.addEventListener(`resize`,fe,{passive:!0}),window.addEventListener(`scroll`,le,{passive:!0}),window.addEventListener(`pointermove`,ue,{passive:!0}),window.addEventListener(`load`,de,{passive:!0}),document.addEventListener(`visibilitychange`,pe),u.addEventListener(`change`,me),`ResizeObserver`in window&&document.body&&(v=new ResizeObserver(de),v.observe(document.body)),document.fonts?.ready&&document.fonts.ready.then(de).catch(()=>{}),()=>{p=!0,P(),window.clearTimeout(m),window.clearTimeout(h),g&&window.cancelAnimationFrame(g),_&&window.cancelAnimationFrame(_),v?.disconnect(),window.removeEventListener(`resize`,fe),window.removeEventListener(`scroll`,le),window.removeEventListener(`pointermove`,ue),window.removeEventListener(`load`,de),document.removeEventListener(`visibilitychange`,pe),u.removeEventListener(`change`,me),O.setParent(null);for(let e=0;e<ne.length;e+=1)ne[e].setParent(null);E.remove?.();for(let e=0;e<te.length;e+=1)te[e].remove?.();D.remove?.(),A.remove?.(),C.parentElement===e&&e.removeChild(C)}},[i,t,o,r,a,l,s,c,n]),(0,U.jsx)(`div`,{ref:d,className:e,"aria-hidden":`true`,style:{position:`fixed`,inset:0,zIndex:0,width:`100%`,height:`100%`,overflow:`hidden`,pointerEvents:`none`,contain:`strict`,transform:`translateZ(0)`,background:i,...u?{mixBlendMode:u}:{}}})}var Gf=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Kf=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),qf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Jf=e=>{let t=qf(e);return t.charAt(0).toUpperCase()+t.slice(1)},Yf={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Xf=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Zf=(0,S.createContext)({}),Qf=()=>(0,S.useContext)(Zf),$f=(0,S.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=Qf()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,S.createElement)(`svg`,{ref:c,...Yf,width:t??l??Yf.width,height:t??l??Yf.height,stroke:e??f,strokeWidth:m,className:Gf(`lucide`,p,i),...!a&&!Xf(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,S.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),$=(e,t)=>{let n=(0,S.forwardRef)(({className:n,...r},i)=>(0,S.createElement)($f,{ref:i,iconNode:t,className:Gf(`lucide-${Kf(Jf(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Jf(e),n},ep=$(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),tp=$(`arrow-left-right`,[[`path`,{d:`M8 3 4 7l4 4`,key:`9rb6wj`}],[`path`,{d:`M4 7h16`,key:`6tx8e3`}],[`path`,{d:`m16 21 4-4-4-4`,key:`siv7j2`}],[`path`,{d:`M20 17H4`,key:`h6l3hr`}]]),np=$(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),rp=$(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),ip=$(`brain`,[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`,key:`1e3is1`}],[`path`,{d:`M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`,key:`1gqd8o`}],[`path`,{d:`M17.997 5.125a4 4 0 0 1 2.526 5.77`,key:`iwvgf7`}],[`path`,{d:`M18 18a4 4 0 0 0 2-7.464`,key:`efp6ie`}],[`path`,{d:`M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`,key:`1gq6am`}],[`path`,{d:`M6 18a4 4 0 0 1-2-7.464`,key:`k1g0md`}],[`path`,{d:`M6.003 5.125a4 4 0 0 0-2.526 5.77`,key:`q97ue3`}]]),ap=$(`briefcase`,[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,key:`jecpp`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),op=$(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),sp=$(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),cp=$(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),lp=$(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),up=$(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),dp=$(`compass`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]),fp=$(`container`,[[`path`,{d:`M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z`,key:`1t2lqe`}],[`path`,{d:`M10 21.9V14L2.1 9.1`,key:`o7czzq`}],[`path`,{d:`m10 14 11.9-6.9`,key:`zm5e20`}],[`path`,{d:`M14 19.8v-8.1`,key:`159ecu`}],[`path`,{d:`M18 17.5V9.4`,key:`11uown`}]]),pp=$(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),mp=$(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),hp=$(`folder-kanban`,[[`path`,{d:`M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z`,key:`1fr9dc`}],[`path`,{d:`M8 10v4`,key:`tgpxqk`}],[`path`,{d:`M12 10v2`,key:`hh53o1`}],[`path`,{d:`M16 10v6`,key:`1d6xys`}]]),gp=$(`handshake`,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`,key:`efffak`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`,key:`9pr0kb`}],[`path`,{d:`m21 3 1 11h-2`,key:`1tisrp`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`,key:`1uvwmv`}],[`path`,{d:`M3 4h8`,key:`1ep09j`}]]),_p=$(`heart-pulse`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}],[`path`,{d:`M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`,key:`auskq0`}]]),vp=$(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),yp=$(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),bp=$(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),xp=$(`monitor`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`line`,{x1:`8`,x2:`16`,y1:`21`,y2:`21`,key:`1svkeh`}],[`line`,{x1:`12`,x2:`12`,y1:`17`,y2:`21`,key:`vw1qmm`}]]),Sp=$(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),Cp=$(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),wp=$(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Tp=$(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),Ep=$(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Dp=$(`stethoscope`,[[`path`,{d:`M11 2v2`,key:`1539x4`}],[`path`,{d:`M5 2v2`,key:`1yf1q8`}],[`path`,{d:`M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1`,key:`rb5t3r`}],[`path`,{d:`M8 15a6 6 0 0 0 12 0v-3`,key:`x18d4x`}],[`circle`,{cx:`20`,cy:`10`,r:`2`,key:`ts1r5v`}]]),Op=$(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),kp=$(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),Ap=$(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),jp=$(`waypoints`,[[`path`,{d:`m10.586 5.414-5.172 5.172`,key:`4mc350`}],[`path`,{d:`m18.586 13.414-5.172 5.172`,key:`8c96vv`}],[`path`,{d:`M6 12h12`,key:`8npq4p`}],[`circle`,{cx:`12`,cy:`20`,r:`2`,key:`144qzu`}],[`circle`,{cx:`12`,cy:`4`,r:`2`,key:`muu5ef`}],[`circle`,{cx:`20`,cy:`12`,r:`2`,key:`1xzzfp`}],[`circle`,{cx:`4`,cy:`12`,r:`2`,key:`1hvhnz`}]]),Mp={Home:vp,User:Ap,FolderKanban:hp,Cpu:pp,Briefcase:ap,Send:Sp},Np=[{label:`Home`,href:`#hero`,icon:`Home`},{label:`About`,href:`#about`,icon:`User`},{label:`Work`,href:`#work`,icon:`FolderKanban`},{label:`Skills`,href:`#stack`,icon:`Cpu`},{label:`Experience`,href:`#experience`,icon:`Briefcase`},{label:`Contact`,href:`#contact`,icon:`Send`}];function Pp(e){if(!e?.startsWith(`#`))return;let t=document.querySelector(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}function Fp(){let[e,t]=(0,S.useState)(`#hero`),n=Eu();(0,S.useEffect)(()=>{let e=Np.map(e=>document.querySelector(e.href)).filter(Boolean);if(!e.length)return;let n=new IntersectionObserver(e=>{let n=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];n&&t(`#${n.target.id}`)},{root:null,rootMargin:`-25% 0px -55% 0px`,threshold:[.1,.25,.5]});return e.forEach(e=>n.observe(e)),()=>n.disconnect()},[]);let r=e=>{t(e),Pp(e)};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Y.nav,{className:`floating-top-nav`,initial:{y:-100,x:`-50%`,opacity:0},animate:{y:0,x:`-50%`,opacity:1},transition:{delay:.15,duration:.65,ease:[.16,1,.3,1]},"aria-label":`Floating Top Navigation Console`,children:(0,U.jsx)(`div`,{className:`nav-inner`,children:Np.map(t=>{let i=Mp[t.icon],a=e===t.href;return(0,U.jsxs)(`button`,{type:`button`,className:`nav-item ${a?`active`:``}`,onClick:()=>r(t.href),"aria-label":`Scroll to ${t.label}`,"aria-current":a?`page`:void 0,children:[a&&(0,U.jsx)(Y.span,{className:`active-tab-capsule`,layoutId:`activeTopTab`,transition:n?{duration:0}:{type:`spring`,stiffness:380,damping:28}}),(0,U.jsx)(`span`,{className:`nav-item-icon-wrapper`,children:(0,U.jsx)(i,{size:19,strokeWidth:a?2.35:1.9})}),(0,U.jsx)(`span`,{className:`nav-item-label`,children:t.label})]},t.href)})})}),(0,U.jsx)(`style`,{children:`
        /* ═══════════════════════════════════════════
           FLOATING TOP GLASS NAVIGATION BAR
           ─────────────────────────────────────────── */
        .floating-top-nav {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          z-index: 995;
          width: calc(100% - 2.5rem);
          max-width: 480px;
          background: rgba(6, 6, 9, 0.75);
          border: 1px solid rgba(200, 154, 24, 0.13);
          border-radius: 30px;
          box-shadow:
            0 16px 45px rgba(0, 0, 0, 0.65),
            0 0 20px rgba(200, 154, 24, 0.04),
            inset 0 0 0 1px rgba(255, 255, 255, 0.02);
          padding: 0.45rem;
          box-sizing: border-box;
          overflow: visible;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: relative;
          overflow: visible;
        }

        .nav-item {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          height: 3.1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          outline: none;
          transition: color 240ms var(--ease-out);
          -webkit-tap-highlight-color: transparent;
        }

        .nav-item:hover {
          color: var(--text-primary);
        }

        .nav-item.active {
          color: #C89A18;
        }

        .nav-item-icon-wrapper {
          position: relative;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 260ms var(--ease-spring);
        }

        .nav-item:hover .nav-item-icon-wrapper {
          transform: scale(1.12);
        }

        .nav-item.active .nav-item-icon-wrapper {
          transform: translateY(-1px);
        }

        .nav-item-label {
          position: relative;
          z-index: 3;
          font-family: var(--font-mono);
          font-size: 0.54rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        /* sliding background capsule */
        .active-tab-capsule {
          position: absolute;
          inset: 0.15rem 0.25rem;
          z-index: 1;
          border-radius: 18px;
          background: rgba(200, 154, 24, 0.06);
          border: 1px solid rgba(200, 154, 24, 0.16);
          box-shadow: 0 0 15px rgba(200, 154, 24, 0.06);
          pointer-events: none;
        }

        @media (max-width: 480px) {
          .floating-top-nav {
            top: 1rem;
            width: calc(100% - 1.5rem);
            border-radius: 24px;
          }

          .nav-item {
            height: 2.85rem;
            gap: 0.15rem;
          }

          .nav-item-label {
            font-size: 0.48rem;
          }

          .active-tab-capsule {
            border-radius: 14px;
            inset: 0.12rem 0.16rem;
          }
        }
      `})]})}var Ip=`modulepreload`,Lp=function(e){return`/`+e},Rp={},zp=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=Lp(t,n),t=s(t),t in Rp)return;Rp[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ip,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Bp=(0,S.lazy)(()=>zp(()=>import(`./Lightfall-C2av1amB.js`),[])),Vp=[{icon:Cp,label:`Backend Architect`},{icon:mp,label:`Database Modeler`},{icon:lp,label:`VPS Deployer`},{icon:up,label:`Spring / .NET`},{icon:op,label:`Octagram Founder`}],Hp=[[`01`,`Think in systems`],[`02`,`Build under pressure`],[`03`,`Ship with discipline`]];function Up(){let e=Eu()===!0,[t,n]=(0,S.useState)(!1);(0,S.useEffect)(()=>{if(e||typeof window>`u`)return;let t=window.matchMedia(`(max-width: 760px)`).matches,r=!!(navigator.connection||navigator.mozConnection||navigator.webkitConnection)?.saveData,i=typeof navigator.hardwareConcurrency==`number`&&navigator.hardwareConcurrency<=4,a=typeof navigator.deviceMemory==`number`&&navigator.deviceMemory<=4;if(t||r||i||a){n(!1);return}let o=!1,s=null,c=null,l=()=>{o||n(!0)};return`requestIdleCallback`in window?s=window.requestIdleCallback(l,{timeout:900}):c=window.setTimeout(l,700),()=>{o=!0,s&&`cancelIdleCallback`in window&&window.cancelIdleCallback(s),c&&window.clearTimeout(c)}},[e]);let r=(0,S.useMemo)(()=>({hidden:{opacity:+!!e},show:{opacity:1,transition:{staggerChildren:e?0:.08,delayChildren:e?0:.12}}}),[e]),i=(0,S.useMemo)(()=>({hidden:{opacity:+!!e,y:e?0:18},show:{opacity:1,y:0,transition:{duration:e?0:.65,ease:[.16,1,.3,1]}}}),[e]);return(0,U.jsx)(kc,{features:_u,children:(0,U.jsx)(`section`,{id:`hero`,className:`cosmic-hero`,"aria-label":`Tareq Orabi Introduction`,children:(0,U.jsxs)(`div`,{className:`cosmic-hero-frame`,children:[t?(0,U.jsx)(S.Suspense,{fallback:(0,U.jsx)(`div`,{className:`cosmic-bg-static`,"aria-hidden":`true`}),children:(0,U.jsx)(Bp,{className:`cosmic-bg-video`,colors:[`#C89A18`,`#A07812`,`#E8B830`],backgroundColor:`#0C0C0D`,backgroundGlow:.3,glow:1.1,speed:.5,density:.6,streakCount:2,twinkle:.8})}):(0,U.jsx)(`div`,{className:`cosmic-bg-static`,"aria-hidden":`true`}),(0,U.jsx)(`div`,{className:`cosmic-color-grade`,"aria-hidden":`true`}),(0,U.jsx)(`div`,{className:`cosmic-depth-mask`,"aria-hidden":`true`}),(0,U.jsx)(`div`,{className:`cosmic-vignette`,"aria-hidden":`true`}),!e&&(0,U.jsxs)(`svg`,{className:`cosmic-architecture`,viewBox:`0 0 1200 700`,"aria-hidden":`true`,children:[(0,U.jsx)(`path`,{className:`arch-path path-a`,d:`M80 420 C260 210, 470 620, 680 330 S1010 170, 1130 390`}),(0,U.jsx)(`path`,{className:`arch-path path-b`,d:`M120 250 C340 390, 455 130, 655 260 S900 520, 1090 220`}),(0,U.jsx)(`path`,{className:`arch-path path-c`,d:`M240 610 C420 450, 680 520, 840 330 S980 180, 1160 120`}),(0,U.jsx)(`circle`,{className:`arch-node node-a`,cx:`220`,cy:`310`,r:`4`}),(0,U.jsx)(`circle`,{className:`arch-node node-b`,cx:`510`,cy:`488`,r:`4`}),(0,U.jsx)(`circle`,{className:`arch-node node-c`,cx:`728`,cy:`286`,r:`4`}),(0,U.jsx)(`circle`,{className:`arch-node node-d`,cx:`984`,cy:`244`,r:`4`})]}),(0,U.jsxs)(`div`,{className:`cosmic-content`,children:[(0,U.jsx)(`main`,{className:`cosmic-stage`,children:(0,U.jsxs)(_l.div,{className:`cosmic-thesis`,variants:r,initial:`hidden`,animate:`show`,children:[(0,U.jsxs)(_l.div,{className:`cosmic-overline`,variants:i,children:[(0,U.jsx)(Ep,{size:14}),(0,U.jsx)(`span`,{children:`Building systems with depth, not noise.`})]}),(0,U.jsx)(_l.p,{className:`cosmic-kicker`,variants:i,children:`SOFTWARE ENGINEER · FOUNDER · SYSTEMS BUILDER`}),(0,U.jsxs)(`h1`,{className:`cosmic-title`,children:[(0,U.jsx)(`span`,{className:`title-word title-first`,children:`Tareq`}),(0,U.jsx)(`span`,{className:`title-word title-last`,children:`Orabi`})]}),(0,U.jsxs)(_l.h2,{className:`cosmic-role`,variants:i,children:[`Software Engineer `,(0,U.jsx)(`span`,{children:`&`}),` Founder of Octagram`]}),(0,U.jsx)(_l.p,{className:`cosmic-description`,variants:i,children:`I work on turning ideas into working systems — through backend development, product thinking, deployment, and real client projects. This portfolio is not a sales page; it is a record of what I’ve built, what I’m building, and how I approach technical work.`}),(0,U.jsx)(_l.div,{className:`cosmic-focus-inline`,"aria-label":`Technical focus areas`,variants:i,children:Vp.map(({icon:e,label:t})=>(0,U.jsxs)(`div`,{className:`cosmic-focus-chip`,children:[(0,U.jsx)(e,{size:15}),(0,U.jsx)(`span`,{children:t})]},t))})]})}),(0,U.jsxs)(_l.footer,{className:`cosmic-bottom`,initial:{opacity:+!!e},animate:{opacity:1},transition:{duration:e?0:.65,delay:e?0:.55,ease:[.22,1,.36,1]},children:[(0,U.jsx)(`div`,{className:`cosmic-principles`,children:Hp.map(([e,t])=>(0,U.jsxs)(`div`,{className:`cosmic-principle`,children:[(0,U.jsx)(`span`,{children:e}),(0,U.jsx)(`strong`,{children:t})]},e))}),(0,U.jsxs)(`div`,{className:`cosmic-footer-meta`,children:[(0,U.jsxs)(`div`,{className:`cosmic-brand`,children:[(0,U.jsx)(`span`,{className:`cosmic-brand-dot`}),(0,U.jsx)(`span`,{children:`TAREQ ORABI`})]}),(0,U.jsxs)(`div`,{className:`cosmic-top-meta`,children:[(0,U.jsx)(`span`,{children:`Software Engineer`}),(0,U.jsx)(`span`,{children:`Founder of Octagram`}),(0,U.jsx)(`span`,{children:`Amman · Jordan`})]})]}),(0,U.jsx)(`p`,{className:`cosmic-bottom-note`,children:`Open to serious technical collaboration, software projects, and engineering roles.`})]})]})]})})})}var Wp={hero:{eyebrow:`Software Engineer Portfolio`,name:`Tareq Orabi`,title:`Software Engineer`,headline:`Backend architecture, databases, and deployment.`,subheadline:`I’m Tareq Orabi, a software engineer from Amman. I work mainly on backend systems, databases, APIs, deployment, and product execution. This portfolio is a record of the systems I worked on and the technical decisions behind them.`,primaryCta:{label:`View My Work`,href:`#work`,icon:`ArrowRight`},secondaryCta:{label:`Get in Touch`,href:`#contact`,icon:`Send`},highlights:[{label:`Backend Systems`,icon:`Server`},{label:`Databases`,icon:`Database`},{label:`API Development`,icon:`Waypoints`},{label:`Deployment`,icon:`Rocket`}]},heroVideo:{enabled:!0,src:`/videos/hero-surreal.mp4`,poster:`/videos/hero-poster.jpg`,label:`Surreal product motion`,cards:[{title:`OctaClinic`,meta:`Production system`,icon:`HeartPulse`,accent:`#6ED6FF`},{title:`Octagram`,meta:`Software company`,icon:`Building2`,accent:`#B8A7FF`},{title:`Think`,meta:`Product in development`,icon:`Brain`,accent:`#E8C98F`},{title:`Medical Club`,meta:`Platform in development`,icon:`Stethoscope`,accent:`#7DDCC3`}]},navLinks:[{label:`Work`,href:`#work`},{label:`Octagram`,href:`#octagram`},{label:`Skills`,href:`#stack`},{label:`Pipeline`,href:`#pipeline`},{label:`Experience`,href:`#experience`},{label:`Contact`,href:`#contact`}],proofBar:[{value:`Octagram`,label:`Founder`},{value:`1`,label:`Production System`},{value:`3`,label:`Active Product Initiatives`},{value:`Backend`,label:`Primary Engineering Focus`}],skills:[{category:`Backend Engineering`,icon:`Server`,accent:`#2A8FBF`,items:[`Java`,`Spring Boot`,`C#`,`ASP.NET Core`,`REST APIs`,`JWT Authentication`,`Role-Based Access Control`]},{category:`Databases`,icon:`Database`,accent:`#6ED6FF`,items:[`PostgreSQL`,`MySQL`,`Firebase / NoSQL`,`Database Modeling`,`Migrations`,`Backup Planning`,`Data Structure Planning`]},{category:`DevOps & Deployment`,icon:`Cloud`,accent:`#B8A7FF`,items:[`Docker`,`Linux VPS`,`Nginx`,`SSL / TLS`,`Reverse Proxy`,`Production Deployment`,`Server Configuration`,`Basic Bash`]},{category:`AI & Automation`,icon:`Cpu`,accent:`#7DDCC3`,items:[`Semantic Kernel`,`OpenAI API`,`Automation Workflows`,`AI Orchestration`,`Prompt Engineering`]},{category:`Product & Founder Skills`,icon:`Compass`,accent:`#B8A7FF`,items:[`Product Thinking`,`Client Communication`,`Requirements Analysis`,`Technical Proposals`,`SaaS Planning`,`Delivery Management`,`Team Direction`]}],experience:[{role:`Founder / Software Engineer`,company:`Octagram`,period:`2026 — Present`,type:`founding`,icon:`Building2`,accent:`#B8A7FF`,points:[{label:`Company Building`,text:`Founded Octagram to build software products and client systems.`},{label:`Product Direction`,text:`Lead product strategy, feature planning, and technical roadmaps across multiple active initiatives.`},{label:`Backend & Architecture`,text:`Design backend systems, database models, and API structures for client-facing products.`},{label:`Client Delivery`,text:`Handle client communication, requirements analysis, proposal writing, and delivery planning.`},{label:`Team & Operations`,text:`Direct technical planning, coordinate contributors, and maintain quality standards across projects.`}]},{role:`Platform Developer / Technical Partner`,company:`Medical Club Platform — via Octagram`,period:`2026 — Present`,type:`product`,icon:`Stethoscope`,accent:`#7DDCC3`,points:[{label:`Contracted Project`,text:`Engaged to build a platform for medical student communities, starting with university-level educational content and events.`},{label:`Platform Design`,text:`Defining the technical architecture, data structure, and feature set for the first platform version.`},{label:`Technical Planning`,text:`Working on content management, student dashboards, and scalable foundational infrastructure.`}]},{role:`Product Lead / Backend Developer`,company:`Think — Educational Platform`,period:`2025 — Present`,type:`product`,icon:`Brain`,accent:`#E8C98F`,points:[{label:`Product Concept`,text:`Designing Think as an educational platform to help students build stronger software engineering foundations through structured learning paths.`},{label:`MVP Architecture`,text:`Planning backend architecture with ASP.NET Core and PostgreSQL, with flexible content structures for learning paths and technical tasks.`},{label:`Product Direction`,text:`Leading feature definition, learning path structure, and technical planning for the MVP.`},{label:`AI Direction`,text:`Exploring future AI-assisted learning features using tools such as Semantic Kernel and OpenAI.`}]},{role:`Backend Developer`,company:`OctaClinic Management System — via Octagram`,period:`2026`,type:`product`,icon:`HeartPulse`,accent:`#6ED6FF`,points:[{label:`Production System`,text:`Built and deployed a clinic management system for a real clinic client in Jordan.`},{label:`Backend Architecture`,text:`Designed and implemented backend features with Spring Boot and Java, covering patients, bookings, payments, packages, roles, and invoices.`},{label:`Database Design`,text:`Structured and maintained PostgreSQL models, relations, migrations, and operational data flows.`},{label:`Security`,text:`Implemented JWT-based authentication and role-based access control for Admin, Nurse, Accountant, and Patient roles.`},{label:`Deployment & Operations`,text:`Deployed on a Linux VPS using Docker and Nginx, configured SSL, supported production issues, and maintained backup awareness.`}]},{role:`Software Engineer — Development Department`,company:`SMT Center / Security Management Technology`,period:`Jul 2025 — Jan 2026`,type:`engineering`,icon:`Shield`,accent:`#172033`,points:[{label:`IAM Contribution`,text:`Contributed to Identity and Access Management related work using Java, with focus on authentication and authorization flows.`},{label:`Backend Support`,text:`Debugged and maintained ASP.NET Core backend services within the development team.`},{label:`Code Quality`,text:`Participated in code cleanup, refactoring, and technical analysis to improve maintainability.`},{label:`Team Collaboration`,text:`Worked within a structured development environment and followed team processes and technical standards.`}]}],projects:[{title:`OctaClinic Management System`,badge:`live`,badgeLabel:`Production`,role:`Backend Developer`,accent:`#6ED6FF`,accentSecondary:`#B8A7FF`,featured:!0,icon:`HeartPulse`,link:`https://sixsenses.clinic`,image:`/images/octaclinic.png`,tagline:`A clinic management system built through Octagram.`,story:`I built the backend and deployment infrastructure for a clinic management system using Spring Boot and PostgreSQL. It handles authentication, roles, bookings, patients, payments, and invoices. It was deployed on a Linux VPS using Docker and Nginx with SSL.`,problem:`A clinic needed an operational system for their daily workflows.`,myRole:`Backend architecture, database design, API development, and deployment.`,result:`A functional clinic management system currently used internally.`,engineeringValue:`Configured containerized deployment and automated access validation.`,built:[`Backend architecture with Spring Boot and Java`,`PostgreSQL database design and modeling`,`JWT authentication and role-based access control`,`REST APIs for clinic operations`,`Linux VPS deployment with Docker and Nginx`,`SSL configuration and production support`],tech:[`Spring Boot`,`Java`,`PostgreSQL`,`Docker`,`Nginx`,`JWT`,`RBAC`,`Linux VPS`,`SSL`],metrics:[{value:`Live`,label:`Status`},{value:`Jordan`,label:`Client Location`},{value:`VPS`,label:`Deployment`}]},{title:`Octagram`,badge:`live`,badgeLabel:`Company`,role:`Founder`,accent:`#B8A7FF`,accentSecondary:`#6ED6FF`,featured:!1,icon:`Building2`,tagline:`My company for building software products and client systems.`,story:`Octagram is the company I started to build software products and client systems. It is still early, but it represents the direction I want to grow in: product thinking, backend systems, client delivery, and technical ownership.`,problem:`I wanted a structured entity to take on client work and develop proprietary products.`,myRole:`Founder and Lead Engineer, handling backend development, architecture, and client communication.`,result:`The foundation for my ongoing and future engineering work.`,engineeringValue:`Gaining practical experience in full-cycle product delivery, from requirements to deployment.`,built:[`Company positioning and service direction`,`Client communication and proposal writing`,`Product planning and delivery management`,`Backend architecture for active projects`],tech:[`Software Company`,`Product Leadership`,`Backend Systems`,`Client Delivery`,`SaaS Planning`],metrics:[{value:`2026`,label:`Founded`},{value:`3`,label:`Active Initiatives`},{value:`1`,label:`Production System`}]},{title:`Think — Educational Platform`,badge:`building`,badgeLabel:`In Development`,role:`Product Lead / Backend Developer`,accent:`#E8C98F`,accentSecondary:`#B8A7FF`,featured:!1,icon:`Brain`,tagline:`An educational platform for software engineering foundations.`,story:`An educational platform in development focused on helping students understand software engineering foundations, backend concepts, and structured learning.`,problem:`Students often struggle to transition from simple coding exercises to understanding structured production environments, systems, and APIs.`,myRole:`Product Lead and Backend Architect, designing learning paths, PostgreSQL relational schemas, and container layout.`,result:`Interactive platform MVP currently in database and backend development stage.`,engineeringValue:`Structured a scalable content-schema to isolate tasks and paths, easing educational database queries.`,built:[`Product concept and MVP definition`,`Learning path structure`,`Backend architecture planning`,`Future AI-assisted learning direction`],tech:[`ASP.NET Core`,`C#`,`PostgreSQL`,`Learning Paths`,`EdTech`]},{title:`Medical Club Platform`,badge:`building`,badgeLabel:`In Development`,role:`Platform Developer / Technical Partner`,accent:`#7DDCC3`,accentSecondary:`#6ED6FF`,featured:!1,icon:`Stethoscope`,tagline:`A platform for medical student communities.`,story:`A contracted platform in development for medical student communities, with focus on content, events, dashboards, and student resources.`,problem:`Medical student organizations need a centralized hub to coordinate dashboard tools, lecture folders, calendar events, and member directories.`,myRole:`Platform Architect and Technical Partner, designing content workflows and NoSQL model structure.`,result:`Platform logic designed and contracted for development under Octagram.`,engineeringValue:`Modeled optimized document hierarchies in Firebase to minimize reads/writes and improve frontend sync latency.`,built:[`Platform scope planning`,`Dashboard and content structure`,`Student community feature planning`,`Technical foundation for future expansion`],tech:[`.NET`,`Firebase`,`NoSQL`,`Dashboard`,`Content Management`]}],octagram:{eyebrow:`Company`,title:`Octagram`,description:`Octagram is the company I started to build software products and client systems. It is still early, but it represents the direction I want to grow in: product thinking, backend systems, client delivery, and technical ownership.`,statement:`My goal is to continue growing my technical foundation while taking ownership of the full product lifecycle.`,values:[{title:`Real Products`,description:`Focusing on software that solves operational problems and serves actual users.`,icon:`Layers`},{title:`Strong Execution`,description:`Handling requirements, architecture, delivery, deployment, and support.`,icon:`Rocket`},{title:`Usability`,description:`Software should feel clear, usable, and simple to understand.`,icon:`Sparkles`}]},octagramServices:[{name:`Web Development`,icon:`Globe`},{name:`Mobile Apps`,icon:`Smartphone`},{name:`AI & Automation`,icon:`Cpu`},{name:`UI/UX Design`,icon:`Palette`},{name:`System Dashboards`,icon:`LayoutDashboard`},{name:`Backend Systems`,icon:`Server`},{name:`SaaS Platforms`,icon:`Layers`},{name:`Digital Products`,icon:`Zap`}],octagramProducts:[{name:`OctaClinic`,description:`A clinic management system deployed on a Linux VPS via Docker and Nginx.`,stage:`Production`,color:`#6ED6FF`,icon:`HeartPulse`},{name:`Think`,description:`Structured EdTech platform designed for learning software engineering foundations.`,stage:`In Development`,color:`#E8C98F`,icon:`Brain`},{name:`Medical Club`,description:`Centralized resource dashboard contracted for medical student communities.`,stage:`In Development`,color:`#7DDCC3`,icon:`Stethoscope`}],pipeline:{eyebrow:`Deployment Experience`,title:`From local code to a deployed system`,description:`This section shows my experience with Docker, Linux VPS, Nginx, PostgreSQL, SSL, and health checks.`},pipelineSteps:[{label:`Code`,icon:`Code2`,desc:`Spring Boot / .NET backend`,color:`#2A8FBF`},{label:`API`,icon:`Waypoints`,desc:`REST endpoints`,color:`#6ED6FF`},{label:`Docker`,icon:`Container`,desc:`Containerized runtime`,color:`#B8A7FF`},{label:`VPS`,icon:`Server`,desc:`Linux server`,color:`#172033`},{label:`Nginx`,icon:`ArrowLeftRight`,desc:`Reverse proxy`,color:`#7DDCC3`},{label:`PostgreSQL`,icon:`Database`,desc:`Relational database`,color:`#E8C98F`},{label:`SSL`,icon:`ShieldCheck`,desc:`HTTPS secured`,color:`#B8A7FF`},{label:`Production`,icon:`CheckCircle`,desc:`Live system`,color:`#6ED6FF`}],systemStatus:[{label:`Backend Healthy`,status:`online`},{label:`Database Connected`,status:`online`},{label:`API Deployed`,status:`online`},{label:`Client System Active`,status:`online`},{label:`Production Environment`,status:`online`}],deployLogs:[{time:`step 01`,level:`INFO`,msg:`Pulling latest source changes`},{time:`step 02`,level:`INFO`,msg:`Building backend service`},{time:`step 03`,level:`SUCCESS`,msg:`Application image prepared`},{time:`step 04`,level:`INFO`,msg:`Restarting Docker containers`},{time:`step 05`,level:`SUCCESS`,msg:`Container runtime active`},{time:`step 06`,level:`INFO`,msg:`Reloading Nginx reverse proxy`},{time:`step 07`,level:`SUCCESS`,msg:`SSL and routing verified`},{time:`step 08`,level:`SUCCESS`,msg:`API health check passed`}],about:{eyebrow:`About Me`,title:`Building systems connected to actual business needs.`,paragraphs:[`I’m still early in my career, but I’ve already worked on real client systems, backend architecture, deployment, and product planning.`,`I’m interested in building systems that are useful, maintainable, and connected to actual business needs.`],principles:[{title:`Build for real use`,description:`The goal is a system that handles actual workflows, users, constraints, and business needs.`,icon:`Target`},{title:`Think like a product owner`,description:`Engineering decisions should connect to the problem, the user, the client, and the long-term direction of the product.`,icon:`Compass`},{title:`Own delivery`,description:`Good software work includes planning, architecture, implementation, deployment, and support after launch.`,icon:`CheckCircle2`}]},contact:{eyebrow:`Contact`,title:`Get in touch`,description:`Reach out if you want to discuss software work, a project, a technical collaboration, or my experience.`,email:`tareqorabi66@gmail.com`,github:`https://github.com/Tareq-Orabi`,linkedin:`https://linkedin.com/in/tareq-orabi`,openTo:[{label:`Software Projects`,icon:`Code2`},{label:`SaaS Development`,icon:`Layers`},{label:`Backend Systems`,icon:`Server`},{label:`AI & Automation`,icon:`Cpu`},{label:`Technical Partnerships`,icon:`Handshake`},{label:`Product Collaborations`,icon:`Compass`}]}},Gp={"Founder & CEO":op,"Production SaaS System":cp,"Active Product Initiatives":yp,"Primary Engineering Focus":Cp,"Primary Focus":Cp},Kp={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:[.16,1,.3,1],staggerChildren:.08,delayChildren:.1}}},qp={hidden:{opacity:0,y:16,scale:.96},show:{opacity:1,y:0,scale:1,transition:{duration:.48,ease:[.16,1,.3,1]}}},Jp=(0,S.memo)(function({value:e,label:t,index:n}){let r=Gp[t]||cp;return(0,U.jsxs)(Y.div,{className:`proof-item`,variants:qp,whileHover:{y:-5,scale:1.015},transition:{duration:.24,ease:[.16,1,.3,1]},style:{"--proof-delay":`${n*.08}s`},children:[(0,U.jsx)(`span`,{className:`proof-icon`,children:(0,U.jsx)(r,{size:17,strokeWidth:2.35})}),(0,U.jsxs)(`span`,{className:`proof-copy`,children:[(0,U.jsx)(`strong`,{children:e}),(0,U.jsx)(`small`,{children:t})]})]})});function Yp(){return(0,U.jsxs)(`section`,{className:`proofbar-section`,"aria-label":`Professional highlights`,children:[(0,U.jsxs)(Y.div,{className:`proofbar-inner`,variants:Kp,initial:`hidden`,whileInView:`show`,viewport:{once:!0,amount:.35},children:[(0,U.jsxs)(`div`,{className:`proofbar-label`,children:[(0,U.jsx)(`span`,{className:`proofbar-kicker`,children:`At a glance`}),(0,U.jsx)(`span`,{className:`proofbar-line`,"aria-hidden":`true`})]}),(0,U.jsx)(`div`,{className:`proofbar-grid`,children:Wp.proofBar.map((e,t)=>(0,U.jsx)(Jp,{value:e.value,label:e.label,index:t},`${e.value}-${e.label}`))})]}),(0,U.jsx)(`style`,{children:`
        .proofbar-section {
          position: relative;
          z-index: 10;
          padding: 4rem var(--section-px);
          isolation: isolate;
        }

        .proofbar-section::before {
          content: '';
          position: absolute;
          inset: 50% 0 auto;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(200, 154, 24, 0.20),
            rgba(200, 154, 24, 0.15),
            rgba(200, 154, 24, 0.10),
            transparent
          );
          z-index: -1;
        }

        .proofbar-inner {
          position: relative;
          width: min(100%, var(--container));
          margin: 0 auto;
          display: flex;
          align-items: stretch;
          background: rgba(7, 7, 11, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transform: translateZ(0);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 1.25rem;
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .proofbar-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(200, 154, 24, 0.03), transparent 40%);
        }

        .proofbar-inner::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--gold);
        }

        .proofbar-label {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          padding: 1.5rem 2.25rem;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.015);
        }

        .proofbar-kicker {
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 750;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .proofbar-line {
          display: none;
        }

        .proofbar-grid {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 1.5rem;
          padding: 1.25rem 2rem;
        }

        .proof-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.1rem;
          min-width: 0;
          padding: 0.5rem;
          border-radius: 0.85rem;
          cursor: default;
        }

        .proof-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.6rem;
          height: 2.6rem;
          flex: 0 0 auto;
          color: var(--gold);
          background: rgba(200, 154, 24, 0.06);
          border: 1px solid rgba(200, 154, 24, 0.15);
          border-radius: 0.65rem;
          box-shadow: 0 0 12px rgba(200, 154, 24, 0.08);
          transition: transform 250ms var(--ease-out), box-shadow 250ms var(--ease-out);
        }

        .proof-item:hover .proof-icon {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(200, 154, 24, 0.2);
          border-color: rgba(200, 154, 24, 0.3);
        }

        .proof-copy {
          display: grid;
          gap: 0.2rem;
          min-width: 0;
        }

        .proof-copy strong {
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .proof-copy small {
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 600;
          line-height: 1.2;
        }

        @media (max-width: 1100px) {
          .proofbar-inner {
            flex-direction: column;
            align-items: stretch;
          }

          .proofbar-label {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            justify-content: center;
            padding: 1.25rem;
          }

          .proofbar-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 1.75rem;
          }
        }

        @media (max-width: 600px) {
          .proofbar-section {
            padding: 3rem 1rem;
          }
          .proofbar-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding: 1.25rem;
          }
          .proof-copy strong {
            font-size: 1rem;
          }
        }
      `})]})}var Xp={blue:``,lavender:`overline-lavender`,sand:`overline-sand`,mint:`section-header-overline-mint`};function Zp({overline:e,title:t,subtitle:n,align:r=`left`,variant:i=`blue`}){let a=r===`center`,o=Xp[i]||``;return(0,U.jsxs)(Y.div,{className:`section-header-block ${a?`center`:``}`,initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.35},transition:{duration:.58,ease:[.16,1,.3,1]},children:[e&&(0,U.jsx)(`span`,{className:`overline ${o}`.trim(),children:e}),(0,U.jsxs)(`div`,{className:`section-header-title-wrap`,children:[(0,U.jsx)(`h2`,{className:`heading-xl`,children:t}),(0,U.jsx)(`span`,{className:`section-header-line ${i}`,"aria-hidden":`true`})]}),n&&(0,U.jsx)(`p`,{className:`body-lg`,children:n}),(0,U.jsx)(`style`,{children:`
        .section-header-block {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          max-width: 850px;
          margin-bottom: 4rem;
          text-align: left;
        }

        .section-header-block.center {
          align-items: center;
          margin-inline: auto;
          text-align: center;
        }

        .section-header-title-wrap {
          display: grid;
          gap: 1rem;
          width: 100%;
        }

        .section-header-block h2 {
          max-width: 13.5ch;
          color: var(--text-primary);
          line-height: 1.02;
        }

        .section-header-block.center h2 {
          margin-inline: auto;
        }

        .section-header-block p {
          max-width: 64ch;
          color: var(--text-muted);
          line-height: 1.78;
        }

        .section-header-block.center p {
          margin-inline: auto;
        }

        .section-header-line {
          display: block;
          width: 5.2rem;
          height: 2px;
          border-radius: var(--radius-pill);
          background:
            linear-gradient(
              90deg,
              var(--blue),
              rgba(110, 214, 255, 0)
            );
          box-shadow: 0 0 20px rgba(110, 214, 255, 0.22);
        }

        .section-header-block.center .section-header-line {
          margin-inline: auto;
        }

        .section-header-line.lavender {
          background:
            linear-gradient(
              90deg,
              var(--lavender),
              rgba(184, 167, 255, 0)
            );
          box-shadow: 0 0 20px rgba(184, 167, 255, 0.22);
        }

        .section-header-line.sand {
          background:
            linear-gradient(
              90deg,
              var(--sand),
              rgba(232, 201, 143, 0)
            );
          box-shadow: 0 0 20px rgba(232, 201, 143, 0.22);
        }

        .section-header-line.mint {
          background:
            linear-gradient(
              90deg,
              var(--mint),
              rgba(125, 220, 195, 0)
            );
          box-shadow: 0 0 20px rgba(125, 220, 195, 0.2);
        }

        .section-header-overline-mint {
          color: var(--mint-strong);
          background: var(--mint-soft);
          border-color: rgba(125, 220, 195, 0.34);
        }

        .section-header-overline-mint::before {
          box-shadow: 0 0 0 5px rgba(125, 220, 195, 0.15);
        }

        @media (max-width: 768px) {
          .section-header-block {
            margin-bottom: 2.75rem;
          }

          .section-header-block h2 {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .section-header-block {
            gap: 0.85rem;
            margin-bottom: 2.25rem;
          }

          .section-header-title-wrap {
            gap: 0.85rem;
          }

          .section-header-line {
            width: 4rem;
          }
        }
      `})]})}var Qp={Server:Cp,Database:mp,ShieldCheck:wp,Layers:yp,Code2:up,Cloud:lp,HeartPulse:_p,Brain:ip,Stethoscope:Dp,Building2:op,CheckCircle2:cp,Sparkles:Ep,Terminal:kp,Activity:ep};function $p(){let e=Eu(),t=vu(0),n=vu(0),r=(0,S.useRef)(null);return{rotateX:xu(n,[-.5,.5],[5.5,-5.5]),rotateY:xu(t,[-.5,.5],[-5.5,5.5]),handlers:e?{}:{onMouseEnter(e){r.current=e.currentTarget.getBoundingClientRect()},onMouseMove(e){if(!r.current)return;let i=r.current;t.set((e.clientX-i.left)/i.width-.5),n.set((e.clientY-i.top)/i.height-.5)},onMouseLeave(){t.set(0),n.set(0),r.current=null}}}}var em={hidden:{},show:{transition:{staggerChildren:.12}}},tm={hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.65,ease:[.16,1,.3,1]}}};function nm({project:e,featured:t}){let n=Qp[e.icon]||yp,r=e.badge===`live`;return(0,U.jsxs)(`div`,{className:t?`project-visual featured`:`project-visual`,children:[e.image?(0,U.jsx)(`img`,{src:e.image,alt:e.title,className:`project-visual-image`}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:`project-visual-orb`,"aria-hidden":`true`}),(0,U.jsxs)(`div`,{className:`project-visual-main`,children:[(0,U.jsx)(`span`,{className:`project-visual-icon`,children:(0,U.jsx)(n,{size:t?30:24,strokeWidth:2.1})}),(0,U.jsxs)(`div`,{className:`project-visual-copy`,children:[(0,U.jsx)(`strong`,{children:e.title}),(0,U.jsx)(`small`,{children:e.role})]})]}),(0,U.jsxs)(`div`,{className:`project-visual-grid`,"aria-hidden":`true`,children:[(0,U.jsx)(`span`,{}),(0,U.jsx)(`span`,{}),(0,U.jsx)(`span`,{}),(0,U.jsx)(`span`,{})]})]}),(0,U.jsxs)(`div`,{className:`project-visual-status`,children:[(0,U.jsxs)(`span`,{className:`badge ${r?`badge-live`:`badge-building`}`,children:[r&&(0,U.jsx)(`span`,{className:`badge-dot`}),e.badgeLabel]}),(0,U.jsx)(`span`,{className:`project-visual-arrow`,children:(0,U.jsx)(rp,{size:15,strokeWidth:2.35})})]})]})}var rm=(0,S.memo)(function({tech:e=[],limit:t}){let n=t?e.slice(0,t):e,r=t&&e.length>t?e.length-t:0;return(0,U.jsxs)(`div`,{className:`project-tech-list`,children:[n.map(e=>(0,U.jsx)(`span`,{className:`tech-tag`,children:e},e)),r>0&&(0,U.jsxs)(`span`,{className:`tech-tag project-tech-more`,children:[`+`,r,` more`]})]})}),im=(0,S.memo)(function({project:e}){let t=$p(),n=Qp[e.icon]||yp;return(0,U.jsxs)(e.link?Y.a:Y.article,{href:e.link,target:e.link?`_blank`:void 0,rel:e.link?`noopener noreferrer`:void 0,className:`project-card project-card-featured inner-glow-container ${e.link?`cursor-pointer`:``}`,variants:tm,style:{rotateX:t.rotateX,rotateY:t.rotateY,"--project-accent":e.accent,"--project-accent-secondary":e.accentSecondary||e.accent},...t.handlers,children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`hud-grid`}),(0,U.jsx)(`div`,{className:`project-card-shine`,"aria-hidden":`true`}),(0,U.jsxs)(`div`,{className:`project-featured-content`,children:[(0,U.jsxs)(`div`,{className:`project-featured-main`,children:[(0,U.jsxs)(`div`,{className:`project-card-top`,children:[(0,U.jsxs)(`span`,{className:`badge ${e.badge===`live`?`badge-live`:`badge-building`}`,children:[e.badge===`live`&&(0,U.jsx)(`span`,{className:`badge-dot`}),e.badgeLabel]}),(0,U.jsx)(`span`,{className:`hud-label ml-3 hidden sm:inline-block`,children:`SYS.ACTIVE`}),(0,U.jsxs)(`span`,{className:`project-card-role`,children:[(0,U.jsx)(n,{size:15,strokeWidth:2.25,className:`text-blue`}),e.role]})]}),(0,U.jsxs)(`div`,{className:`project-title-block`,children:[(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsx)(`p`,{className:`project-tagline`,children:e.tagline})]}),(0,U.jsx)(`div`,{className:`project-story-panel`,children:(0,U.jsx)(`p`,{children:e.story})}),e.built?.length>0&&(0,U.jsxs)(`div`,{className:`project-built`,children:[(0,U.jsx)(`p`,{className:`project-mini-heading`,children:`Implementation Scope`}),(0,U.jsx)(`div`,{className:`project-built-grid`,children:e.built.map(e=>(0,U.jsxs)(`div`,{className:`project-built-item`,children:[(0,U.jsx)(cp,{size:15,strokeWidth:2.25}),(0,U.jsx)(`span`,{children:e})]},e))})]}),(0,U.jsx)(rm,{tech:e.tech}),e.metrics?.length>0&&(0,U.jsx)(`div`,{className:`project-metrics`,children:e.metrics.map(({value:e,label:t})=>(0,U.jsxs)(`div`,{className:`project-metric`,children:[(0,U.jsx)(`strong`,{children:e}),(0,U.jsx)(`span`,{children:t})]},t))})]}),(0,U.jsx)(nm,{project:e,featured:!0})]})]})}),am=(0,S.memo)(function({project:e}){let t=$p(),n=Qp[e.icon]||yp,r=e.badge===`live`;return(0,U.jsxs)(e.link?Y.a:Y.article,{href:e.link,target:e.link?`_blank`:void 0,rel:e.link?`noopener noreferrer`:void 0,className:`project-card project-card-compact inner-glow-container ${e.link?`cursor-pointer`:``}`,variants:tm,style:{rotateX:t.rotateX,rotateY:t.rotateY,"--project-accent":e.accent,"--project-accent-secondary":e.accentSecondary||e.accent},...t.handlers,whileHover:{y:-8},transition:{duration:.28,ease:[.16,1,.3,1]},children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`hud-grid`}),(0,U.jsx)(`div`,{className:`project-card-shine`,"aria-hidden":`true`}),(0,U.jsxs)(`div`,{className:`project-card-header`,children:[(0,U.jsx)(`span`,{className:`project-icon`,children:(0,U.jsx)(n,{size:21,strokeWidth:2.15})}),(0,U.jsxs)(`span`,{className:`badge ${r?`badge-live`:`badge-building`}`,children:[r&&(0,U.jsx)(`span`,{className:`badge-dot`}),e.badgeLabel]})]}),(0,U.jsxs)(`div`,{className:`project-card-body`,children:[(0,U.jsx)(`p`,{className:`project-card-role`,children:e.role}),(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsx)(`p`,{className:`project-card-tagline`,children:e.tagline})]}),(0,U.jsx)(`div`,{className:`project-tech-tags-wrapper`,children:(0,U.jsx)(rm,{tech:e.tech,limit:4})}),(0,U.jsxs)(`div`,{className:`project-card-footer`,children:[(0,U.jsx)(`span`,{children:`Case study summary`}),(0,U.jsx)(rp,{size:16,strokeWidth:2.35})]})]})});function om(){let e=Wp.projects.find(e=>e.featured),t=Wp.projects.filter(e=>!e.featured);return(0,U.jsxs)(`section`,{className:`section readability-mask projects-section`,"data-cosmic-scene":`black-hole`,children:[(0,U.jsxs)(`div`,{className:`section-inner`,children:[(0,U.jsx)(Y.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.65,ease:[.16,1,.3,1]},children:(0,U.jsx)(Zp,{overline:`My Work`,title:`Projects and engineering execution.`,subtitle:`A record of the systems I worked on, my role, and the technical decisions behind them.`})}),(0,U.jsxs)(Y.div,{className:`projects-layout`,variants:em,initial:`hidden`,whileInView:`show`,viewport:{once:!0,margin:`-80px`},children:[e&&(0,U.jsx)(im,{project:e}),(0,U.jsx)(`div`,{className:`projects-grid`,children:t.map(e=>(0,U.jsx)(am,{project:e},e.title))})]})]}),(0,U.jsx)(`style`,{children:`
        .projects-section {
          overflow: hidden;
        }

        .proj-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .proj-blob-blue-wrapper {
          width: 7.5rem;
          height: 7.5rem;
          top: 1.5rem;
          right: -2.25rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .proj-blob-lavender-wrapper {
          width: 6rem;
          height: 6rem;
          left: -2rem;
          bottom: 1.5rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .proj-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0.72;
          transform: translateZ(0);
        }

        .proj-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.08), transparent 68%);
        }

        .proj-blob-lavender {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.07), transparent 68%);
        }

        .projects-layout {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 1.5rem;
        }

        .project-card {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
          background: rgba(7, 7, 11, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          will-change: transform;
          overflow: hidden;
          transition:
            border-color 260ms var(--ease-out),
            box-shadow 260ms var(--ease-out);
        }

        .project-card:hover {
          border-color: color-mix(in srgb, var(--project-accent) 48%, transparent);
          box-shadow:
            0 30px 86px rgba(0, 0, 0, 0.5),
            0 0 30px color-mix(in srgb, var(--project-accent) 15%, transparent);
        }

        .project-card-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 12% 8%, color-mix(in srgb, var(--project-accent) 10%, transparent), transparent 28%),
            radial-gradient(circle at 88% 16%, color-mix(in srgb, var(--project-accent-secondary) 8%, transparent), transparent 32%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 36%);
          opacity: 0.86;
        }

        .project-card-featured {
          border-radius: var(--radius-2xl);
          padding: clamp(1.5rem, 4vw, 2.7rem);
        }

        .project-featured-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: stretch;
        }

        .project-featured-main {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }

        .project-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .project-card-role {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 750;
        }

        .project-card-role svg {
          color: var(--project-accent);
        }

        .project-title-block {
          display: grid;
          gap: 0.5rem;
        }

        .project-title-block h3,
        .project-card-body h3 {
          color: var(--text-primary);
          font-family: var(--font-display);
          letter-spacing: -0.045em;
        }

        .project-title-block h3 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          line-height: 1.05;
        }

        .project-tagline {
          color: var(--text-secondary);
          font-size: 1.05rem;
          font-weight: 550;
        }

        .project-story-panel {
          padding: 1.25rem;
          background: rgba(7, 7, 11, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 1.15rem;
        }

        .project-story-panel p {
          font-size: 0.94rem;
          line-height: 1.62;
          color: var(--text-secondary);
          margin: 0;
        }

        .project-built {
          display: grid;
          gap: 0.85rem;
        }

        .project-mini-heading {
          color: var(--text-secondary);
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.13em;
          line-height: 1;
          text-transform: uppercase;
        }

        .project-built-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.62rem;
        }

        .project-built-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          min-width: 0;
          padding: 0.72rem 0.78rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 0.95rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          font-size: 0.82rem;
          font-weight: 620;
          line-height: 1.45;
        }

        .project-built-item svg {
          flex: 0 0 auto;
          margin-top: 0.08rem;
          color: var(--project-accent);
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .project-tech-more {
          color: var(--project-accent);
          background: color-mix(in srgb, var(--project-accent) 12%, transparent);
          border-color: color-mix(in srgb, var(--project-accent) 26%, transparent);
        }

        .project-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          padding-top: 1.1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .project-metric {
          display: grid;
          gap: 0.15rem;
        }

        .project-metric strong {
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 1.28rem;
          line-height: 1;
          letter-spacing: -0.035em;
        }

        .project-metric span {
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 650;
        }

        .project-visual {
          position: relative;
          min-height: 100%;
          padding: 1.2rem;
          border-radius: 2rem;
          background:
            radial-gradient(circle at 18% 14%, color-mix(in srgb, var(--project-accent) 10%, transparent), transparent 34%),
            radial-gradient(circle at 88% 84%, color-mix(in srgb, var(--project-accent-secondary) 8%, transparent), transparent 36%),
            rgba(3, 3, 5, 0.58);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.05),
            0 18px 54px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          isolation: isolate;
        }

        .project-visual.featured {
          min-height: 28rem;
        }

        .project-visual-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
          transition: opacity 0.4s ease, transform 0.6s ease;
        }

        .project-card:hover .project-visual-image {
          opacity: 1;
          transform: scale(1.03);
        }

        .project-visual-orb {
          position: absolute;
          width: 16rem;
          height: 16rem;
          top: 50%;
          left: 50%;
          border-radius: var(--radius-blob);
          background:
            radial-gradient(circle at 30% 24%, rgba(7, 7, 11, 0.1), transparent 28%),
            linear-gradient(135deg, color-mix(in srgb, var(--project-accent) 15%, transparent), color-mix(in srgb, var(--project-accent-secondary) 10%, transparent));
          box-shadow:
            inset 0 0 38px rgba(255, 255, 255, 0.05),
            0 24px 70px color-mix(in srgb, var(--project-accent) 15%, transparent);
          transform: translate(-50%, -50%);
          animation: morph-blob 12s ease-in-out infinite, float-y 6s ease-in-out infinite;
          z-index: 1;
        }

        .project-visual-main {
          position: absolute;
          z-index: 3;
          left: 1.2rem;
          right: 1.2rem;
          top: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.95rem;
          background: rgba(7, 7, 11, 0.72);
          border: 1px solid rgba(7, 7, 11, 0.1);
          border-radius: 1.15rem;
          box-shadow: var(--shadow-sm);
          will-change: transform;
        }

        .project-visual-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          flex: 0 0 auto;
          color: var(--project-accent);
          background: color-mix(in srgb, var(--project-accent) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--project-accent) 28%, transparent);
          border-radius: 1rem;
        }

        .project-visual-copy {
          display: grid;
          gap: 0.15rem;
          min-width: 0;
        }

        .project-visual-copy strong {
          color: var(--text-primary);
          font-size: 0.88rem;
          line-height: 1.2;
        }

        .project-visual-copy small {
          color: var(--text-muted);
          font-size: 0.72rem;
          font-weight: 650;
          line-height: 1.25;
        }

        .project-visual-grid {
          position: absolute;
          z-index: 2;
          left: 1.2rem;
          right: 1.2rem;
          bottom: 5.3rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
        }

        .project-visual-grid span {
          height: 4.8rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: var(--shadow-xs);
          will-change: transform;
        }

        .project-visual-grid span:nth-child(2) {
          transform: translateY(1.2rem);
        }

        .project-visual-grid span:nth-child(3) {
          transform: translateY(-0.8rem);
        }

        .project-visual-status {
          position: absolute;
          z-index: 4;
          left: 1.2rem;
          right: 1.2rem;
          bottom: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.85rem;
          background: rgba(7, 7, 11, 0.76);
          border: 1px solid rgba(7, 7, 11, 0.1);
          border-radius: 1.15rem;
          box-shadow: var(--shadow-sm);
          will-change: transform;
        }

        .project-visual-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          color: var(--project-accent);
          background: color-mix(in srgb, var(--project-accent) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--project-accent) 25%, transparent);
          border-radius: 0.8rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .project-card-compact {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          padding: 1.5rem;
          border-radius: 1.7rem;
        }

        .project-card-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .project-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          color: var(--project-accent);
          background: color-mix(in srgb, var(--project-accent) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--project-accent) 28%, transparent);
          border-radius: 1rem;
          box-shadow: 0 12px 28px color-mix(in srgb, var(--project-accent) 14%, transparent);
        }

        .project-card-body {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex-grow: 1;
        }

        .project-card-body h3 {
          font-size: clamp(1.35rem, 2.1vw, 1.78rem);
          line-height: 1.08;
        }

        .project-card-role {
          font-size: 0.74rem;
          font-weight: 750;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-card-tagline {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }



        .project-tech-tags-wrapper {
          position: relative;
          z-index: 2;
          margin-top: auto;
        }

        .project-card-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-weight: 800;
        }

        .project-card-footer svg {
          color: var(--project-accent);
          transition: transform 240ms var(--ease-spring);
        }

        .project-card-compact:hover .project-card-footer svg {
          transform: translate(3px, -3px);
        }

        @media (max-width: 1100px) {
          .project-featured-content {
            grid-template-columns: 1fr;
          }

          .project-visual.featured {
            min-height: 24rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .project-card-featured {
            border-radius: 1.8rem;
            padding: 1.2rem;
          }

          .project-built-grid {
            grid-template-columns: 1fr;
          }

          .project-metrics {
            grid-template-columns: 1fr;
          }

          .project-visual.featured {
            min-height: 21rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-visual-grid {
            display: none;
          }
        }

        @media (max-width: 520px) {
          .project-card-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .project-visual-main,
          .project-visual-status {
            left: 0.8rem;
            right: 0.8rem;
          }

          .project-visual-main {
            top: 0.8rem;
          }

          .project-visual-status {
            bottom: 0.8rem;
            align-items: flex-start;
            flex-direction: column;
          }

          .project-card-compact {
            padding: 1.1rem;
          }
        }
      `})]})}var sm={Server:Cp,Database:mp,Cloud:lp,Monitor:xp,Compass:dp,Layers:yp,Cpu:pp},cm={hidden:{},show:{transition:{staggerChildren:.08}}},lm={hidden:{opacity:0,y:18,scale:.96},show:{opacity:1,y:0,scale:1,transition:{duration:.48,ease:[.16,1,.3,1]}}},um=(0,S.memo)(function({skill:e,index:t,isActive:n,setSelectedIndex:r}){let i=sm[e.icon]||Cp;return(0,U.jsxs)(Y.button,{type:`button`,className:`stack-category-card ${n?`active`:``}`,onClick:()=>r(t),variants:lm,style:{"--stack-accent":e.accent,"--stack-index":t},children:[(0,U.jsx)(`span`,{className:`stack-category-icon`,children:(0,U.jsx)(i,{size:20,strokeWidth:2.2})}),(0,U.jsxs)(`span`,{className:`stack-category-copy`,children:[(0,U.jsx)(`strong`,{children:e.category}),(0,U.jsxs)(`small`,{children:[e.items.length,` focused skills`]})]}),(0,U.jsx)(`span`,{className:`stack-category-arrow`,children:(0,U.jsx)(np,{size:15,strokeWidth:2.4})})]})}),dm=(0,S.memo)(function({skill:e}){let t=sm[e.icon]||Cp;return(0,U.jsxs)(Y.article,{className:`stack-detail-panel`,initial:{opacity:0,x:16},animate:{opacity:1,x:0},transition:{duration:.32,ease:[.16,1,.3,1]},style:{"--stack-accent":e.accent},children:[(0,U.jsx)(`div`,{className:`stack-detail-bg`,"aria-hidden":`true`}),(0,U.jsxs)(`div`,{className:`stack-detail-header`,children:[(0,U.jsx)(`span`,{className:`stack-detail-icon`,children:(0,U.jsx)(t,{size:28,strokeWidth:2.1})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`label text-muted`,children:`Selected Stack`}),(0,U.jsx)(`h3`,{children:e.category})]})]}),(0,U.jsx)(`div`,{className:`stack-detail-description`,children:(0,U.jsx)(`p`,{children:`This category represents the practical tools and concepts I use to build, structure, deploy, and manage real software products.`})}),(0,U.jsx)(`div`,{className:`stack-skill-grid`,children:e.items.map(e=>(0,U.jsxs)(`span`,{className:`stack-skill-pill`,children:[(0,U.jsx)(cp,{size:14,strokeWidth:2.35}),e]},e))}),(0,U.jsxs)(`div`,{className:`stack-detail-footer`,children:[(0,U.jsxs)(`span`,{className:`code-block`,children:[`focus::`,e.category.toLowerCase().replaceAll(` `,`_`)]}),(0,U.jsx)(`span`,{className:`stack-detail-line`})]})]},e.category)}),fm=(0,S.memo)(function({selectedSkill:e}){let t=sm[e.icon]||Cp;return(0,U.jsxs)(`div`,{className:`stack-orbit`,style:{"--stack-accent":e.accent},"aria-hidden":`true`,children:[(0,U.jsx)(`div`,{className:`stack-orbit-ring stack-orbit-ring-one`}),(0,U.jsx)(`div`,{className:`stack-orbit-ring stack-orbit-ring-two`}),(0,U.jsx)(`div`,{className:`stack-orbit-core`,children:(0,U.jsx)(t,{size:34,strokeWidth:2})}),(0,U.jsx)(`span`,{className:`stack-orbit-node node-one`}),(0,U.jsx)(`span`,{className:`stack-orbit-node node-two`}),(0,U.jsx)(`span`,{className:`stack-orbit-node node-three`}),(0,U.jsx)(`span`,{className:`stack-orbit-node node-four`})]})});function pm(){let[e,t]=(0,S.useState)(0),n=(0,S.useDeferredValue)(e),r=Wp.skills[n]||Wp.skills[0];return(0,U.jsxs)(`section`,{className:`section readability-mask skills-section`,"data-cosmic-scene":`starfield`,children:[(0,U.jsxs)(`div`,{className:`section-inner skills-inner`,children:[(0,U.jsx)(Y.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.65,ease:[.16,1,.3,1]},children:(0,U.jsx)(Zp,{overline:`Skills`,title:`Technologies I use across my work`,subtitle:`A practical stack I use for backend development, databases, deployment, and product-oriented engineering.`})}),(0,U.jsxs)(`div`,{className:`skills-layout`,children:[(0,U.jsx)(Y.div,{className:`stack-categories`,variants:cm,initial:`hidden`,whileInView:`show`,viewport:{once:!0,amount:.25},children:Wp.skills.map((n,r)=>(0,U.jsx)(um,{skill:n,index:r,isActive:e===r,setSelectedIndex:t},n.category))}),(0,U.jsxs)(`div`,{className:`stack-showcase`,children:[(0,U.jsx)(fm,{selectedSkill:r}),(0,U.jsx)(dm,{skill:r})]})]})]}),(0,U.jsx)(`style`,{children:`
        .skills-section {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .skills-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .skills-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 7, 11, 1) 80%);
        }

        .skills-inner {
          position: relative;
          z-index: 2;
        }

        .skills-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .skills-blob-blue-wrapper {
          width: 7.5rem;
          height: 7.5rem;
          top: 1.75rem;
          left: -2.75rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .skills-blob-lavender-wrapper {
          width: 7rem;
          height: 7rem;
          right: -2.5rem;
          bottom: 0.75rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .skills-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(17.5px);
          opacity: 0.6;
          animation: blob-float 15s ease-in-out infinite;
          transform: translateZ(0);
        }

        .skills-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.15), transparent 68%);
        }

        .skills-blob-lavender {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.12), transparent 68%);
          animation-delay: -5s;
        }

        .skills-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(rgba(200, 154, 24, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 154, 24, 0.08) 1px, transparent 1px);
          background-size: 4.25rem 4.25rem;
        }

        .skills-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: stretch;
        }

        .stack-categories {
          display: grid;
          gap: 0.85rem;
          align-content: start;
        }

        .stack-category-card {
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
          min-height: 5.2rem;
          padding: 0.95rem 1rem;
          text-align: left;
          color: var(--text-primary);
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.25rem;
          box-shadow:
            0 12px 38px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
          cursor: pointer;
          transition:
            border-color 200ms ease-out,
            box-shadow 200ms ease-out,
            transform 200ms ease-out;
          will-change: transform;
        }

        .stack-category-card:hover {
          transform: translateY(-4px);
        }

        .stack-category-card:active {
          transform: translateY(-1px);
        }

        .stack-category-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 8% 12%,
              color-mix(in srgb, var(--stack-accent) 15%, transparent),
              transparent 34%
            );
          opacity: 0;
          transition: opacity 240ms var(--ease-out);
          pointer-events: none;
        }

        .stack-category-card::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0.85rem;
          bottom: 0.85rem;
          width: 3px;
          border-radius: var(--radius-pill);
          background: var(--stack-accent);
          opacity: 0;
          transition: opacity 240ms var(--ease-out);
        }

        .stack-category-card:hover,
        .stack-category-card.active {
          border-color: color-mix(in srgb, var(--stack-accent) 44%, transparent);
          box-shadow:
            0 20px 58px rgba(0, 0, 0, 0.4),
            0 14px 44px color-mix(in srgb, var(--stack-accent) 15%, transparent);
        }

        .stack-category-card:hover::before,
        .stack-category-card.active::before,
        .stack-category-card.active::after {
          opacity: 1;
        }

        .stack-category-icon {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.85rem;
          height: 2.85rem;
          flex: 0 0 auto;
          color: var(--stack-accent);
          background: color-mix(in srgb, var(--stack-accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 26%, transparent);
          border-radius: 1rem;
          box-shadow: 0 10px 28px color-mix(in srgb, var(--stack-accent) 12%, transparent);
        }

        .stack-category-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.18rem;
          min-width: 0;
        }

        .stack-category-copy strong {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.2;
        }

        .stack-category-copy small {
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 650;
          line-height: 1.25;
        }

        .stack-category-arrow {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          color: var(--stack-accent);
          background: color-mix(in srgb, var(--stack-accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 22%, transparent);
          border-radius: 0.8rem;
          opacity: 0.75;
          transition:
            transform 240ms var(--ease-spring),
            opacity 240ms var(--ease-out);
        }

        .stack-category-card:hover .stack-category-arrow,
        .stack-category-card.active .stack-category-arrow {
          transform: translateX(4px);
          opacity: 1;
        }

        .stack-showcase {
          position: relative;
          display: grid;
          min-height: 35rem;
          align-items: stretch;
        }

        .stack-detail-panel {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
          min-height: 35rem;
          padding: clamp(1.3rem, 3vw, 2rem);
          background: rgba(7, 7, 11, 0.85);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 28%, transparent);
          border-radius: var(--radius-2xl);
          box-shadow:
            0 26px 78px rgba(0, 0, 0, 0.5),
            0 18px 60px color-mix(in srgb, var(--stack-accent) 14%, transparent),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          overflow: hidden;
        }

        .stack-detail-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 18% 12%,
              color-mix(in srgb, var(--stack-accent) 15%, transparent),
              transparent 34%
            ),
            radial-gradient(
              circle at 92% 72%,
              color-mix(in srgb, var(--stack-accent) 10%, transparent),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.03),
              transparent 38%
            );
          opacity: 0.88;
        }

        .stack-detail-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stack-detail-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 4.25rem;
          height: 4.25rem;
          flex: 0 0 auto;
          color: var(--stack-accent);
          background: color-mix(in srgb, var(--stack-accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 28%, transparent);
          border-radius: 1.35rem;
          box-shadow: 0 16px 42px color-mix(in srgb, var(--stack-accent) 16%, transparent);
        }

        .stack-detail-header h3 {
          margin-top: 0.35rem;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.15rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .stack-detail-description {
          position: relative;
          z-index: 2;
          max-width: 38rem;
        }

        .stack-detail-description p {
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 540;
          line-height: 1.78;
        }

        .stack-skill-grid {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 0.58rem;
          margin-top: 0.2rem;
        }

        .stack-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 0.78rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-pill);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          font-size: 0.8rem;
          font-weight: 750;
          cursor: default;
        }

        .stack-skill-pill svg {
          color: var(--stack-accent);
          flex: 0 0 auto;
        }

        .stack-detail-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1.1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stack-detail-line {
          flex: 1;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              color-mix(in srgb, var(--stack-accent) 45%, transparent),
              transparent
            );
        }

        .stack-orbit {
          position: absolute;
          z-index: 1;
          right: 1.5rem;
          bottom: 1.5rem;
          width: 17rem;
          height: 17rem;
          opacity: 0.78;
          pointer-events: none;
        }

        .stack-orbit-ring {
          position: absolute;
          inset: 0;
          border: 1px solid color-mix(in srgb, var(--stack-accent) 38%, transparent);
          border-radius: 50%;
          animation: spin-slow 18s linear infinite;
        }

        .stack-orbit-ring-two {
          inset: 2.4rem;
          border-style: dashed;
          animation-duration: 26s;
          animation-direction: reverse;
        }

        .stack-orbit-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 5.3rem;
          height: 5.3rem;
          color: var(--stack-accent);
          background:
            radial-gradient(circle at 28% 22%, rgba(7, 7, 11, 0.1), transparent 32%),
            color-mix(in srgb, var(--stack-accent) 16%, transparent);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 34%, transparent);
          border-radius: var(--radius-blob);
          box-shadow:
            inset 0 0 24px rgba(255, 255, 255, 0.05),
            0 22px 64px color-mix(in srgb, var(--stack-accent) 22%, transparent);
          transform: translate(-50%, -50%);
          animation: morph-blob 10s ease-in-out infinite, float-y 5.5s ease-in-out infinite;
        }

        .stack-orbit-node {
          position: absolute;
          width: 0.78rem;
          height: 0.78rem;
          border-radius: 50%;
          background: var(--stack-accent);
          box-shadow: 0 0 0 6px color-mix(in srgb, var(--stack-accent) 16%, transparent);
        }

        .node-one {
          top: 0.7rem;
          left: 50%;
        }

        .node-two {
          right: 1rem;
          top: 48%;
        }

        .node-three {
          bottom: 1rem;
          left: 38%;
        }

        .node-four {
          left: 1.1rem;
          top: 34%;
        }

        @media (max-width: 980px) {
          .skills-layout {
            grid-template-columns: 1fr;
          }

          .stack-showcase,
          .stack-detail-panel {
            min-height: auto;
          }

          .stack-orbit {
            width: 13rem;
            height: 13rem;
            opacity: 0.55;
          }
        }

        @media (max-width: 620px) {
          .stack-category-card {
            grid-template-columns: auto minmax(0, 1fr);
          }

          .stack-category-arrow {
            display: none;
          }

          .stack-detail-panel {
            border-radius: 1.65rem;
            padding: 1.1rem;
          }

          .stack-detail-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .stack-detail-icon {
            width: 3.7rem;
            height: 3.7rem;
          }

          .stack-orbit {
            display: none;
          }

          .stack-detail-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .stack-detail-line {
            width: 100%;
            flex: none;
          }
        }
      `})]})}var mm={Code2:up,Waypoints:jp,Container:fp,Server:Cp,ArrowLeftRight:tp,Database:mp,ShieldCheck:wp,CheckCircle:sp,Terminal:kp,Activity:ep,Sparkles:Ep},hm={INFO:`var(--text-muted)`,SUCCESS:`var(--mint-strong)`,WARN:`var(--sand-strong)`,ERROR:`#B42318`},gm={hidden:{},show:{transition:{staggerChildren:.08}}},_m={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.58,ease:[.16,1,.3,1]}}},vm=e=>e?{hidden:{},show:{}}:gm,ym=e=>e?{hidden:{opacity:1,y:0},show:{opacity:1,y:0,transition:{duration:0}}}:_m,bm={once:!0,amount:.22,margin:`0px 0px -80px 0px`},xm=(0,S.memo)(function({step:e,index:t,isLast:n,variants:r}){let i=mm[e.icon]||up;return(0,U.jsxs)(`div`,{className:`pipeline-step-wrap`,children:[(0,U.jsxs)(Y.div,{className:`pipeline-step`,variants:r,style:{"--step-color":e.color},children:[(0,U.jsx)(`span`,{className:`pipeline-step-number`,children:String(t+1).padStart(2,`0`)}),(0,U.jsx)(`span`,{className:`pipeline-step-icon`,children:(0,U.jsx)(i,{size:21,strokeWidth:2.15})}),(0,U.jsxs)(`span`,{className:`pipeline-step-copy`,children:[(0,U.jsx)(`strong`,{children:e.label}),(0,U.jsx)(`small`,{children:e.desc})]})]}),!n&&(0,U.jsx)(`span`,{className:`pipeline-connector`,style:{"--connector-delay":`${t*60+150}ms`},"aria-hidden":`true`})]})}),Sm=(0,S.memo)(function({reducedMotion:e}){return(0,U.jsxs)(Y.article,{className:`deploy-panel`,initial:e?!1:{opacity:0,y:28,scale:.98},whileInView:e?void 0:{opacity:1,y:0,scale:1},viewport:bm,transition:{duration:.58,delay:.08,ease:[.16,1,.3,1]},children:[(0,U.jsx)(`div`,{className:`deploy-panel-glow`,"aria-hidden":`true`}),(0,U.jsxs)(`div`,{className:`deploy-panel-header`,children:[(0,U.jsxs)(`div`,{className:`deploy-window-dots`,"aria-hidden":`true`,children:[(0,U.jsx)(`span`,{}),(0,U.jsx)(`span`,{}),(0,U.jsx)(`span`,{})]}),(0,U.jsxs)(`div`,{className:`deploy-title`,children:[(0,U.jsx)(kp,{size:15,strokeWidth:2.25}),(0,U.jsx)(`span`,{children:`deploy.sh — production`})]}),(0,U.jsxs)(`span`,{className:`deploy-badge`,children:[(0,U.jsx)(`span`,{className:`badge-dot`}),`verified`]})]}),(0,U.jsx)(`div`,{className:`deploy-log-lines`,children:Wp.deployLogs.map(({time:e,level:t,msg:n})=>(0,U.jsxs)(`div`,{className:`deploy-log-line`,children:[(0,U.jsx)(`span`,{className:`deploy-time`,children:e}),(0,U.jsxs)(`span`,{className:`deploy-level`,style:{"--log-color":hm[t]||`var(--text-muted)`},children:[`[`,t,`]`]}),(0,U.jsx)(`span`,{className:`deploy-message`,children:n})]},`${e}-${n}`))})]})}),Cm=(0,S.memo)(function({containerMotionVariants:e}){return(0,U.jsx)(Y.div,{className:`system-status-list`,variants:e,initial:`hidden`,whileInView:`show`,viewport:bm,children:Wp.systemStatus.map(({label:e})=>(0,U.jsxs)(`span`,{className:`system-status-pill`,children:[(0,U.jsx)(`span`,{className:`system-status-dot`}),e]},e))})}),wm=(0,S.memo)(function(){return(0,U.jsxs)(`div`,{className:`pipeline-visual`,"aria-hidden":`true`,children:[(0,U.jsx)(`div`,{className:`pipeline-visual-ring ring-one`}),(0,U.jsx)(`div`,{className:`pipeline-visual-ring ring-two`}),(0,U.jsx)(`div`,{className:`pipeline-visual-core`,children:(0,U.jsx)(ep,{size:32,strokeWidth:2.1})}),(0,U.jsx)(`span`,{className:`pipeline-node node-one`}),(0,U.jsx)(`span`,{className:`pipeline-node node-two`}),(0,U.jsx)(`span`,{className:`pipeline-node node-three`}),(0,U.jsx)(`span`,{className:`pipeline-node node-four`})]})});function Tm(){let e=Wp.pipeline||{eyebrow:`Production Experience`,title:`From backend code to a live client system.`,description:`My production experience focuses on practical deployment: backend APIs, Docker, Linux VPS environments, Nginx reverse proxy, PostgreSQL, SSL, health checks, and operational troubleshooting.`},t=Eu(),n=(0,S.useMemo)(()=>vm(t),[t]),r=(0,S.useMemo)(()=>ym(t),[t]);return(0,U.jsxs)(`section`,{className:`section readability-mask pipeline-section`,"data-cosmic-scene":`black-hole`,children:[(0,U.jsxs)(`div`,{className:`section-inner pipeline-inner`,children:[(0,U.jsx)(Y.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.65,ease:[.16,1,.3,1]},children:(0,U.jsx)(Zp,{overline:e.eyebrow,title:e.title,subtitle:e.description,variant:`sand`})}),(0,U.jsxs)(`div`,{className:`pipeline-content`,children:[(0,U.jsx)(Y.div,{className:`pipeline-track`,variants:n,initial:`hidden`,whileInView:`show`,viewport:{once:!0,amount:.2},children:Wp.pipelineSteps.map((e,t)=>(0,U.jsx)(xm,{step:e,index:t,isLast:t===Wp.pipelineSteps.length-1,variants:r},e.label))}),(0,U.jsxs)(`div`,{className:`pipeline-bottom-layout`,children:[(0,U.jsx)(Sm,{reducedMotion:t}),(0,U.jsxs)(Y.aside,{className:`pipeline-summary-card`,initial:{opacity:0,x:28},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.25},transition:{duration:.68,delay:.2,ease:[.16,1,.3,1]},children:[(0,U.jsx)(wm,{}),(0,U.jsxs)(`div`,{className:`pipeline-summary-copy`,children:[(0,U.jsx)(`span`,{className:`overline overline-sand`,children:`Practical deployment`}),(0,U.jsx)(`h3`,{children:`Production-minded, not overclaimed.`}),(0,U.jsx)(`p`,{children:`This section focuses on the deployment workflow I have actually worked with: backend APIs, containers, Linux servers, reverse proxy setup, database operation, SSL, and real client support.`})]}),(0,U.jsx)(Cm,{containerMotionVariants:n})]})]})]})]}),(0,U.jsx)(`style`,{children:`
        .pipeline-section {
          position: relative;
          overflow: hidden;
          contain: layout paint style;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: transparent;
          isolation: isolate;
        }

        .pipeline-bg {
          position: absolute;
          contain: paint;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .pipeline-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 7, 11, 1) 80%);
        }

        .pipeline-inner {
          position: relative;
          z-index: 2;
        }

        .pipeline-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .pipeline-blob-blue-wrapper {
          width: 8rem;
          height: 8rem;
          top: 2rem;
          right: -3rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .pipeline-blob-sand-wrapper {
          width: 7.5rem;
          height: 7.5rem;
          left: -3rem;
          bottom: 0.75rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .pipeline-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(16px);
          opacity: 0.62;
          animation: blob-float 24s ease-in-out infinite;
          transform: translateZ(0);
        }

        .pipeline-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.15), transparent 68%);
        }

        .pipeline-blob-sand {
          background: radial-gradient(circle, rgba(232, 201, 143, 0.15), transparent 68%);
          animation-delay: -5s;
        }

        .pipeline-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-image:
            linear-gradient(rgba(232, 201, 143, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 201, 143, 0.1) 1px, transparent 1px);
          background-size: 4.25rem 4.25rem;
        }

        .pipeline-orb {
          position: absolute;
          z-index: 1;
          border-radius: var(--radius-blob);
          background:
            radial-gradient(circle at 30% 24%, rgba(7, 7, 11, 0.1), transparent 26%),
            linear-gradient(135deg, rgba(200, 154, 24, 0.05), rgba(200, 154, 24, 0.04));
          box-shadow:
            inset 0 0 34px rgba(255, 255, 255, 0.05),
            0 30px 80px rgba(232, 201, 143, 0.05);
          opacity: 0.55;
          animation: morph-blob 24s ease-in-out infinite, float-y 12s ease-in-out infinite;
        }

        .pipeline-orb-one {
          width: 9rem;
          height: 9rem;
          right: 11%;
          top: 17%;
        }

        .pipeline-orb-two {
          width: 6.5rem;
          height: 6.5rem;
          left: 10%;
          bottom: 14%;
          animation-delay: -3s;
        }

        .pipeline-content {
          display: grid;
          gap: 2.25rem;
        }

        .pipeline-track {
          position: relative;
          display: flex;
          align-items: stretch;
          gap: 0;
          width: 100%;
          padding: 0.65rem 0.3rem 0.9rem;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x proximity;
          scrollbar-width: thin;
        }

        .pipeline-track::-webkit-scrollbar {
          height: 7px;
        }

        .pipeline-track::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: var(--radius-pill);
        }

        .pipeline-step-wrap {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          scroll-snap-align: start;
        }

        .pipeline-step {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 0.62rem;
          width: 8.15rem;
          min-height: 9.7rem;
          padding: 1.25rem 0.85rem 1rem;
          text-align: center;
          color: var(--text-primary);
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.25rem;
          box-shadow:
            0 15px 44px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
          cursor: default;
          contain: layout paint style;
          transition:
            transform 220ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 220ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 220ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pipeline-step:hover {
          transform: translateY(-4px) scale(1.01);
        }

        .pipeline-step::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 18% 12%,
              color-mix(in srgb, var(--step-color) 15%, transparent),
              transparent 34%
            ),
            linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 38%);
          opacity: 0;
          transition: opacity 240ms var(--ease-out);
          pointer-events: none;
        }

        .pipeline-step:hover::before {
          opacity: 1;
        }

        .pipeline-step-number {
          position: absolute;
          top: 0.62rem;
          right: 0.68rem;
          z-index: 2;
          color: color-mix(in srgb, var(--step-color) 72%, var(--text-primary));
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 800;
          opacity: 0.78;
        }

        .pipeline-step-icon {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.25rem;
          height: 3.25rem;
          color: var(--step-color);
          background: color-mix(in srgb, var(--step-color) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--step-color) 28%, transparent);
          border-radius: 1rem;
          box-shadow: 0 12px 32px color-mix(in srgb, var(--step-color) 14%, transparent);
        }

        .pipeline-step-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.2rem;
        }

        .pipeline-step-copy strong {
          color: var(--text-primary);
          font-size: 0.84rem;
          line-height: 1.15;
        }

        .pipeline-step-copy small {
          color: var(--text-muted);
          font-size: 0.68rem;
          font-weight: 650;
          line-height: 1.3;
        }

        .pipeline-connector {
          position: relative;
          display: block;
          width: 2.15rem;
          height: 2px;
          flex: 0 0 auto;
          background:
            linear-gradient(
              90deg,
              rgba(200, 154, 24, 0.35),
              rgba(200, 154, 24, 0.30)
            );
          transform-origin: left;
        }

        .pipeline-connector::after {
          content: '';
          position: absolute;
          right: -1px;
          top: 50%;
          width: 7px;
          height: 7px;
          border-top: 2px solid rgba(232, 201, 143, 0.45);
          border-right: 2px solid rgba(232, 201, 143, 0.45);
          transform: translateY(-50%) rotate(45deg);
        }

        .pipeline-bottom-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 1.25rem;
          align-items: stretch;
        }

        .deploy-panel,
        .pipeline-summary-card {
          position: relative;
          overflow: hidden;
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-2xl);
          contain: layout paint style;
          box-shadow:
            0 20px 58px rgba(0, 0, 0, 0.36),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
        }

        .deploy-panel-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 8% 10%, rgba(200, 154, 24, 0.08), transparent 34%),
            radial-gradient(circle at 92% 76%, rgba(232, 201, 143, 0.1), transparent 34%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 42%);
        }

        .deploy-panel-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.95rem 1.15rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
        }

        .deploy-window-dots {
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          flex: 0 0 auto;
        }

        .deploy-window-dots span {
          width: 0.62rem;
          height: 0.62rem;
          border-radius: 50%;
        }

        .deploy-window-dots span:nth-child(1) {
          background: #f87171;
        }

        .deploy-window-dots span:nth-child(2) {
          background: #fbbf24;
        }

        .deploy-window-dots span:nth-child(3) {
          background: #34d399;
        }

        .deploy-title {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          min-width: 0;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 650;
        }

        .deploy-title svg {
          color: var(--sand-strong);
        }

        .deploy-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-left: auto;
          padding: 0.3rem 0.68rem;
          color: var(--mint-strong);
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: var(--radius-pill);
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
        }

        .deploy-log-lines {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.42rem;
          padding: 1.15rem;
        }

        .deploy-log-line {
          display: grid;
          grid-template-columns: 5.2rem 5.3rem minmax(0, 1fr);
          align-items: baseline;
          gap: 0.72rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.76rem;
          line-height: 1.55;
        }

        .deploy-time {
          color: var(--text-faint);
          white-space: nowrap;
        }

        .deploy-level {
          color: var(--log-color);
          font-weight: 800;
          white-space: nowrap;
        }

        .deploy-message {
          color: var(--text-primary);
          min-width: 0;
        }

        .pipeline-summary-card {
          display: grid;
          align-content: space-between;
          gap: 1.35rem;
          min-height: 100%;
          padding: clamp(1.25rem, 2.5vw, 1.7rem);
        }

        .pipeline-summary-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 18% 12%, rgba(232, 201, 143, 0.08), transparent 36%),
            radial-gradient(circle at 88% 80%, rgba(200, 154, 24, 0.06), transparent 38%);
        }

        .pipeline-summary-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 1rem;
        }

        .pipeline-summary-copy h3 {
          max-width: 11ch;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.4vw, 3.1rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .pipeline-summary-copy p {
          max-width: 36rem;
          color: var(--text-secondary);
          font-size: 0.96rem;
          font-weight: 540;
          line-height: 1.78;
        }

        .system-status-list {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .system-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.42rem;
          padding: 0.42rem 0.72rem;
          color: var(--mint-strong);
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: var(--radius-pill);
          box-shadow: 0 8px 22px rgba(52, 211, 153, 0.05);
          font-size: 0.72rem;
          font-weight: 800;
          cursor: default;
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .system-status-pill:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .system-status-dot {
          width: 0.42rem;
          height: 0.42rem;
          flex: 0 0 auto;
          border-radius: 50%;
          background: currentColor;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .pipeline-visual {
          position: absolute;
          z-index: 1;
          right: 1.2rem;
          bottom: 1.2rem;
          width: 13rem;
          height: 13rem;
          opacity: 0.48;
          pointer-events: none;
        }

        .pipeline-visual-ring {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(232, 201, 143, 0.2);
          border-radius: 50%;
          animation: spin-slow 34s linear infinite;
        }

        .pipeline-visual-ring.ring-two {
          inset: 2.1rem;
          border-color: rgba(200, 154, 24, 0.20);
          animation-duration: 44s;
          animation-direction: reverse;
        }

        .pipeline-visual-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 4.6rem;
          height: 4.6rem;
          color: var(--sand-strong);
          background:
            radial-gradient(circle at 28% 22%, rgba(7, 7, 11, 0.15), transparent 32%),
            rgba(232, 201, 143, 0.1);
          border: 1px solid rgba(232, 201, 143, 0.25);
          border-radius: var(--radius-blob);
          transform: translate(-50%, -50%);
          box-shadow:
            inset 0 0 24px rgba(255, 255, 255, 0.05),
            0 20px 58px rgba(232, 201, 143, 0.1);
          animation: morph-blob 20s ease-in-out infinite, float-y 11s ease-in-out infinite;
        }

        .pipeline-node {
          position: absolute;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background: var(--sand);
          box-shadow: 0 0 0 6px rgba(232, 201, 143, 0.1);
        }

        .pipeline-node.node-one {
          top: 0.7rem;
          left: 50%;
        }

        .pipeline-node.node-two {
          right: 1rem;
          top: 46%;
          background: var(--gold);
          box-shadow: 0 0 0 6px rgba(200, 154, 24, 0.10);
        }

        .pipeline-node.node-three {
          bottom: 1rem;
          left: 36%;
        }

        .pipeline-node.node-four {
          left: 1rem;
          top: 34%;
          background: var(--gold);
          box-shadow: 0 0 0 6px rgba(200, 154, 24, 0.10);
        }

        .pipeline-connector {
          transform: scaleX(1);
          opacity: 1;
          animation: pipelineConnectorReveal 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: var(--connector-delay, 150ms);
        }

        @keyframes pipelineConnectorReveal {
          from {
            opacity: 0;
            transform: scaleX(0);
          }

          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @media (hover: none) {
          .pipeline-step:hover,
          .system-status-pill:hover {
            transform: none;
          }

          .pipeline-step:hover::before {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pipeline-blob,
          .pipeline-orb,
          .pipeline-connector,
          .system-status-dot,
          .pipeline-visual-ring,
          .pipeline-visual-core {
            animation: none !important;
          }

          .pipeline-step,
          .system-status-pill {
            transition: none !important;
          }
        }

        @media (max-width: 1050px) {
          .pipeline-bottom-layout {
            grid-template-columns: 1fr;
          }

          .pipeline-summary-copy h3 {
            max-width: 100%;
          }
        }

        @media (max-width: 720px) {
          .pipeline-track {
            margin-inline: calc(var(--section-px) * -1);
            padding-inline: var(--section-px);
          }

          .pipeline-step {
            width: 7.6rem;
            min-height: 9.3rem;
          }

          .pipeline-connector {
            width: 1.35rem;
          }

          .deploy-panel,
          .pipeline-summary-card {
            border-radius: 1.65rem;
          }

          .deploy-panel-header {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .deploy-badge {
            margin-left: 0;
          }

          .deploy-log-line {
            grid-template-columns: 1fr;
            gap: 0.12rem;
            padding-bottom: 0.42rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .deploy-log-line:last-child {
            border-bottom: 0;
            padding-bottom: 0;
          }

          .pipeline-visual {
            display: none;
          }

          .pipeline-blob,
          .pipeline-orb,
          .system-status-dot {
            animation: none !important;
          }

          .pipeline-blob {
            filter: blur(14px);
            opacity: 0.42;
          }

          .pipeline-orb {
            opacity: 0.36;
          }
        }

        @media (max-width: 480px) {
          .pipeline-step {
            width: 7.1rem;
          }

          .pipeline-summary-card,
          .deploy-log-lines {
            padding: 1rem;
          }
        }
      `})]})}var Em={Building2:op,HeartPulse:_p,Shield:Tp,Brain:ip,Stethoscope:Dp};function Dm(){return(0,U.jsxs)(`section`,{className:`section experience-section readability-mask`,style:{position:`relative`,overflow:`hidden`},"data-cosmic-scene":`constellation`,children:[(0,U.jsxs)(`div`,{className:`section-inner`,children:[(0,U.jsx)(Y.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:(0,U.jsx)(Zp,{overline:`Experience`,title:`My engineering timeline`})}),(0,U.jsxs)(`div`,{className:`timeline-container`,children:[(0,U.jsx)(`div`,{className:`timeline-track`,"aria-hidden":`true`}),(0,U.jsx)(`div`,{className:`timeline-items`,children:Wp.experience.map((e,t)=>{let n=Em[e.icon]||op;return(0,U.jsxs)(Y.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:`-10% 0px`},transition:{duration:.6,delay:t*.15,ease:[.16,1,.3,1]},className:`timeline-item`,children:[(0,U.jsx)(`div`,{className:`timeline-marker`,style:{"--marker-accent":e.accent,"--node-index":t},children:(0,U.jsx)(`div`,{className:`marker-core`,children:(0,U.jsx)(n,{size:16,strokeWidth:2.5})})}),(0,U.jsxs)(`div`,{className:`timeline-content`,children:[(0,U.jsxs)(`div`,{className:`timeline-header`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{className:`timeline-role`,children:e.role}),(0,U.jsx)(`p`,{className:`timeline-company`,children:e.company})]}),(0,U.jsx)(`div`,{className:`timeline-period`,children:e.period})]}),(0,U.jsx)(`ul`,{className:`timeline-points`,children:e.points.map((t,n)=>(0,U.jsxs)(`li`,{children:[(0,U.jsxs)(`strong`,{children:[t.label,`:`]}),` `,t.text]},`${e.company}-${n}`))})]})]},e.company)})})]})]}),(0,U.jsx)(`style`,{children:`
        .timeline-container {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding-top: 1rem;
        }

        .timeline-track {
          position: absolute;
          top: 1rem;
          bottom: 2rem;
          left: 23px;
          width: 2px;
          background: linear-gradient(to bottom, rgba(200, 154, 24, 0.30), rgba(200, 154, 24, 0.12), transparent);
          z-index: 0;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .timeline-item {
          position: relative;
          display: flex;
          gap: 2rem;
          z-index: 1;
        }

        .timeline-marker {
          position: relative;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(3, 3, 5, 0.95);
          border: 1px solid rgba(7, 7, 11, 0.1);
          display: grid;
          place-items: center;
          color: var(--marker-accent);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .timeline-marker::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: var(--marker-accent);
          opacity: 0.15;
          filter: blur(8px);
        }

        .marker-core {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
          border: 1px solid rgba(7, 7, 11, 0.1);
        }

        .timeline-content {
          flex-grow: 1;
          padding-top: 0.5rem;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .timeline-role {
          margin: 0 0 0.25rem 0;
          font-family: var(--font-display, inherit);
          font-size: clamp(1.15rem, 1.8vw, 1.35rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .timeline-company {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--blue-strong);
        }

        .timeline-period {
          flex-shrink: 0;
          font-size: 0.75rem;
          font-weight: 750;
          color: var(--text-muted);
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(7, 7, 11, 0.1);
          letter-spacing: 0.02em;
        }

        .timeline-points {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .timeline-points li {
          position: relative;
          padding-left: 1.25rem;
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .timeline-points li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--blue-strong);
          opacity: 0.5;
        }

        .timeline-points li strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .timeline-track {
            left: 20px;
          }

          .timeline-item {
            gap: 1.25rem;
          }

          .timeline-marker {
            width: 42px;
            height: 42px;
          }
          
          .marker-core {
            width: 30px;
            height: 30px;
          }
          
          .marker-core svg {
            width: 14px;
            height: 14px;
          }

          .timeline-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .timeline-period {
            align-self: flex-start;
          }
        }
      `})]})}var Om=`/assets/profile-DC4c3YqK.jpg`,km={Target:Op,Compass:dp,CheckCircle2:cp,Server:Cp,Database:mp,Container:fp,Building2:op,Sparkles:Ep,Cpu:pp,ShieldCheck:wp,Terminal:kp,Activity:ep,Briefcase:ap},Am=[{label:`Spring Boot`,icon:Cp,position:`tag-one`,accent:`var(--blue)`,delay:0},{label:`PostgreSQL`,icon:mp,position:`tag-two`,accent:`var(--sand)`,delay:.35},{label:`Docker`,icon:fp,position:`tag-three`,accent:`var(--lavender)`,delay:.7},{label:`Octagram`,icon:op,position:`tag-four`,accent:`var(--lavender)`,delay:1.05}],jm={hidden:{},show:{transition:{staggerChildren:.1}}},Mm={hidden:{opacity:0,y:22},show:{opacity:1,y:0,transition:{duration:.58,ease:[.16,1,.3,1]}}},Nm=(0,S.memo)(function({tag:e}){let t=Eu(),n=e.icon;return(0,U.jsx)(`div`,{className:`about-profile-tag-wrapper ${e.position}`,children:(0,U.jsx)(Y.div,{className:`about-profile-tag-inner`,initial:{opacity:0,y:12,scale:.94},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0},transition:{opacity:{duration:.45,delay:e.delay},scale:{duration:.45,delay:e.delay},y:{duration:.45,delay:e.delay}},children:(0,U.jsxs)(Y.div,{className:`about-profile-tag`,animate:t?void 0:{y:[0,-7,0]},transition:t?void 0:{duration:3.2,repeat:1/0,ease:`easeInOut`,delay:e.delay},style:{"--tag-accent":e.accent},children:[(0,U.jsx)(n,{size:14,strokeWidth:2.35}),e.label]})})})}),Pm=(0,S.memo)(function({principle:e,index:t}){let n=km[e.icon]||cp;return(0,U.jsxs)(Y.article,{className:`about-principle-card`,variants:Mm,whileHover:{y:-5,scale:1.012},transition:{type:`spring`,stiffness:300,damping:24},style:{"--principle-index":t},children:[(0,U.jsx)(`span`,{className:`about-principle-icon`,children:(0,U.jsx)(n,{size:18,strokeWidth:2.25})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h3`,{children:e.title}),(0,U.jsx)(`p`,{children:e.description})]})]})});function Fm(){let{about:e}=Wp;return(0,U.jsxs)(`section`,{className:`section readability-mask about-section`,"data-cosmic-scene":`fibers`,children:[(0,U.jsxs)(`div`,{className:`section-inner about-inner`,children:[(0,U.jsx)(Y.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.65,ease:[.16,1,.3,1]},children:(0,U.jsx)(Zp,{overline:e.eyebrow,title:e.title,subtitle:`How I blend technical execution with founder mindset to ship resilient systems.`,variant:`lavender`})}),(0,U.jsxs)(`div`,{className:`about-layout`,children:[(0,U.jsxs)(Y.div,{className:`about-profile-column`,initial:{opacity:0,scale:.94,x:-24},whileInView:{opacity:1,scale:1,x:0},viewport:{once:!0,amount:.25},transition:{duration:.72,ease:[.16,1,.3,1]},children:[(0,U.jsxs)(`div`,{className:`about-profile-shell`,children:[(0,U.jsx)(`div`,{className:`about-profile-ring`,"aria-hidden":`true`}),(0,U.jsx)(`div`,{className:`about-glow-wrapper`,"aria-hidden":`true`,children:(0,U.jsx)(`div`,{className:`about-profile-glow`})}),(0,U.jsx)(`div`,{className:`about-profile-frame`,children:(0,U.jsx)(`img`,{src:Om,alt:`Tareq Orabi`})}),Am.map(e=>(0,U.jsx)(Nm,{tag:e},e.label))]}),(0,U.jsxs)(`div`,{className:`about-mini-card`,children:[(0,U.jsx)(`span`,{className:`about-mini-icon`,children:(0,U.jsx)(Ep,{size:17,strokeWidth:2.25})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`strong`,{children:`Founder Engineer`}),(0,U.jsx)(`p`,{children:`Translating business concepts into reliable, production-ready system architecture.`})]})]})]}),(0,U.jsxs)(Y.div,{className:`about-pillars-column`,initial:{opacity:0,x:28},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.25},transition:{duration:.72,delay:.08,ease:[.16,1,.3,1]},children:[(0,U.jsxs)(`div`,{className:`about-pillars-grid`,children:[(0,U.jsxs)(`div`,{className:`about-pillar-card engineer-pillar`,children:[(0,U.jsxs)(`div`,{className:`pillar-header`,children:[(0,U.jsx)(`span`,{className:`pillar-icon`,children:(0,U.jsx)(kp,{size:18})}),(0,U.jsx)(`h4`,{children:`The Systems Engineer`})]}),(0,U.jsx)(`h5`,{children:`Architecture, constraints, and runtime.`}),(0,U.jsx)(`p`,{children:`I focus on writing backend logic that survives outside local tests. Whether modeling relations in PostgreSQL, building secure JWT schemes in Spring Boot / .NET, or staging Docker containers behind an Nginx proxy, I focus on the hard limits of networks and databases.`}),(0,U.jsxs)(`div`,{className:`pillar-footer`,children:[(0,U.jsx)(`span`,{className:`badge badge-blue`,children:`Spring Boot`}),(0,U.jsx)(`span`,{className:`badge badge-blue`,children:`PostgreSQL`}),(0,U.jsx)(`span`,{className:`badge badge-blue`,children:`Docker`})]})]}),(0,U.jsxs)(`div`,{className:`about-pillar-card founder-pillar`,children:[(0,U.jsxs)(`div`,{className:`pillar-header`,children:[(0,U.jsx)(`span`,{className:`pillar-icon`,children:(0,U.jsx)(ap,{size:18})}),(0,U.jsx)(`h4`,{children:`The Founder`})]}),(0,U.jsx)(`h5`,{children:`Scope, validation, and delivery.`}),(0,U.jsx)(`p`,{children:`As the founder of Octagram, I translate client needs into strict technical requirements. I write proposals, set realistic delivery boundaries, coordinate development tasks, and maintain a high standard of taste. I build platforms that solve business problems.`}),(0,U.jsxs)(`div`,{className:`pillar-footer`,children:[(0,U.jsx)(`span`,{className:`badge badge-lavender`,children:`Strategy`}),(0,U.jsx)(`span`,{className:`badge badge-lavender`,children:`Client Work`}),(0,U.jsx)(`span`,{className:`badge badge-lavender`,children:`SaaS Planning`})]})]})]}),(0,U.jsxs)(`article`,{className:`about-story-summary`,children:[(0,U.jsx)(`div`,{className:`about-story-shine`,"aria-hidden":`true`}),(0,U.jsxs)(`div`,{className:`about-story-content`,children:[(0,U.jsx)(ep,{size:18,className:`text-blue`}),(0,U.jsxs)(`p`,{children:[`My engineering strategy is direct: `,(0,U.jsx)(`strong`,{children:`own the entire lifecycle`}),`. I handle everything from database schema migrations to reverse proxies, container structures, and production-level VPS deployment.`]})]})]})]})]}),(0,U.jsxs)(`div`,{className:`about-philosophy-section`,children:[(0,U.jsxs)(`div`,{className:`about-philosophy-header`,children:[(0,U.jsx)(`span`,{className:`overline overline-lavender`,children:`My Philosophy`}),(0,U.jsx)(`h3`,{children:`How I think about software building`})]}),(0,U.jsx)(Y.div,{className:`about-principles-grid`,variants:jm,initial:`hidden`,whileInView:`show`,viewport:{once:!0,amount:.25},children:e.principles.map((e,t)=>(0,U.jsx)(Pm,{principle:e,index:t},e.title))})]})]}),(0,U.jsx)(`style`,{children:`
        .about-section {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: transparent;
          isolation: isolate;
        }

        .about-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .about-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 7, 11, 1) 80%);
        }

        .about-inner {
          position: relative;
          z-index: 2;
        }

        .about-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .blue-blob-wrapper {
          width: 8rem;
          height: 8rem;
          left: -3rem;
          top: 5rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .lavender-blob-wrapper {
          width: 7.25rem;
          height: 7.25rem;
          right: -3rem;
          bottom: 4rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .about-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(18px);
          opacity: 0.64;
          animation: blob-float 15s ease-in-out infinite;
          transform: translateZ(0);
        }

        .about-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.15), transparent 68%);
        }

        .about-blob-lavender {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.12), transparent 68%);
          animation-delay: -5s;
        }

        .about-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-image:
            linear-gradient(rgba(200, 154, 24, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 154, 24, 0.05) 1px, transparent 1px);
          background-size: 4.25rem 4.25rem;
        }

        .about-orb {
          position: absolute;
          z-index: 1;
          border-radius: var(--radius-blob);
          background:
            radial-gradient(circle at 30% 24%, rgba(7, 7, 11, 0.1), transparent 26%),
            linear-gradient(135deg, rgba(200, 154, 24, 0.05), rgba(200, 154, 24, 0.04), rgba(200, 154, 24, 0.03));
          box-shadow:
            0 30px 80px rgba(200, 154, 24, 0.05);
          opacity: 0.52;
          animation: morph-blob 13s ease-in-out infinite, float-y 6s ease-in-out infinite;
        }

        .about-orb-one {
          width: 8.5rem;
          height: 8.5rem;
          right: 12%;
          top: 18%;
        }

        .about-orb-two {
          width: 6.5rem;
          height: 6.5rem;
          left: 8%;
          bottom: 14%;
          animation-delay: -3s;
        }

        .about-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: clamp(2rem, 6vw, 4.5rem);
          align-items: start;
        }

        .about-profile-column {
          position: sticky;
          top: calc(var(--nav-height) + 2rem);
          display: grid;
          gap: 1.2rem;
          align-self: start;
        }

        .about-profile-shell {
          position: relative;
          width: min(100%, 20rem);
          margin-inline: auto;
          aspect-ratio: 1 / 1;
        }

        .about-profile-ring {
          position: absolute;
          inset: -0.9rem;
          border-radius: 50%;
          background:
            conic-gradient(
              from 0deg,
              rgba(200, 154, 24, 0.85),
              rgba(200, 154, 24, 0.8),
              rgba(200, 154, 24, 0.75),
              rgba(200, 154, 24, 0.95)
            );
          opacity: 0.42;
          filter: blur(0.2px);
          animation: spin-slow 12s linear infinite;
        }

        .about-glow-wrapper {
          position: absolute;
          inset: -0.5rem;
          border-radius: 50%;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: scale(1) translate3d(0,0,0);
        }

        .about-profile-glow {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 50%, rgba(200, 154, 24, 0.20), transparent 62%),
            radial-gradient(circle at 70% 20%, rgba(200, 154, 24, 0.22), transparent 46%);
          filter: blur(6px);
          animation: blob-float 9s ease-in-out infinite;
          opacity: 0.72;
        }

        .about-profile-frame {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border: 5px solid rgba(7, 7, 11, 0.95);
          border-radius: var(--radius-blob);
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(7, 7, 11, 0.1) inset;
          animation: morph-blob 14s ease-in-out infinite;
          isolation: isolate;
        }

        .about-profile-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 12%, rgba(7, 7, 11, 0.1), transparent 34%),
            linear-gradient(135deg, rgba(200, 154, 24, 0.05), rgba(200, 154, 24, 0.04));
          pointer-events: none;
        }

        .about-profile-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.03);
          filter: brightness(0.9) contrast(1.1);
        }

        .about-profile-tag-wrapper {
          position: absolute;
          z-index: 4;
        }

        .about-profile-tag-wrapper.tag-one {
          top: 4%;
          right: -9%;
        }

        .about-profile-tag-wrapper.tag-two {
          right: -13%;
          bottom: 22%;
        }

        .about-profile-tag-wrapper.tag-three {
          left: -8%;
          bottom: 7%;
        }

        .about-profile-tag-wrapper.tag-four {
          left: -13%;
          top: 14%;
        }

        .about-profile-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.42rem;
          padding: 0.44rem 0.78rem;
          color: var(--tag-accent);
          background: rgba(7, 7, 11, 0.75);
          border: 1px solid color-mix(in srgb, var(--tag-accent) 28%, transparent);
          border-radius: var(--radius-pill);
          box-shadow:
            0 14px 38px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          font-size: 0.74rem;
          font-weight: 850;
          line-height: 1;
          white-space: nowrap;
          will-change: transform;
        }

        .about-mini-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem;
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.35rem;
          box-shadow:
            0 18px 54px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
        }

        .about-mini-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 12%, rgba(200, 154, 24, 0.1), transparent 38%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 44%);
          pointer-events: none;
        }

        .about-mini-icon {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          flex: 0 0 auto;
          color: var(--blue-strong);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
          border-radius: 0.9rem;
        }

        .about-mini-card div {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.22rem;
        }

        .about-mini-card strong {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.2;
        }

        .about-mini-card p {
          color: var(--text-muted);
          font-size: 0.8rem;
          line-height: 1.55;
        }

        .about-pillars-column {
          display: grid;
          gap: 1.5rem;
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .about-pillar-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.5rem;
          background: rgba(7, 7, 11, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          transition:
            transform 220ms var(--ease-out),
            box-shadow 220ms var(--ease-out),
            border-color 220ms var(--ease-out),
            background 220ms var(--ease-out);
        }

        .about-pillar-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 45%);
        }

        .engineer-pillar:hover {
          border-color: rgba(200, 154, 24, 0.30);
          box-shadow: 0 25px 60px rgba(200, 154, 24, 0.08);
        }

        .founder-pillar:hover {
          border-color: rgba(200, 154, 24, 0.3);
          box-shadow: 0 25px 60px rgba(200, 154, 24, 0.08);
        }

        .pillar-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .pillar-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 0.75rem;
        }

        .engineer-pillar .pillar-icon {
          color: var(--blue-strong);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
        }

        .founder-pillar .pillar-icon {
          color: var(--lavender-strong);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
        }

        .pillar-header h4 {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        .about-pillar-card h5 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .about-pillar-card p {
          font-size: 0.88rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .pillar-footer {
          margin-top: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .about-story-summary {
          position: relative;
          padding: 1.25rem 1.5rem;
          background: rgba(7, 7, 11, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 1.25rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        .about-story-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(125deg, rgba(255, 255, 255, 0.01), transparent 50%, rgba(200, 154, 24, 0.02));
        }

        .about-story-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .about-story-content svg {
          flex-shrink: 0;
          margin-top: 0.22rem;
        }

        .about-story-content p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .about-philosophy-section {
          margin-top: 4.5rem;
          display: grid;
          gap: 2rem;
        }

        .about-philosophy-header {
          display: grid;
          gap: 0.6rem;
        }

        .about-philosophy-header h3 {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .about-principles-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .about-principle-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.5rem;
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.35rem;
          cursor: default;
          overflow: hidden;
          transition:
            transform 220ms var(--ease-out),
            box-shadow 220ms var(--ease-out),
            border-color 220ms var(--ease-out),
            background 220ms var(--ease-out);
        }

        .about-principle-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 12% 12%, rgba(200, 154, 24, 0.08), transparent 40%);
          opacity: 0;
          transition: opacity 240ms var(--ease-out);
        }

        .about-principle-card:hover {
          border-color: rgba(200, 154, 24, 0.30);
          box-shadow:
            0 20px 58px rgba(0, 0, 0, 0.4),
            0 14px 44px rgba(200, 154, 24, 0.08);
        }

        .about-principle-card:hover::before {
          opacity: 1;
        }

        .about-principle-icon {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          color: var(--blue-strong);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
          border-radius: 0.9rem;
        }

        .about-principle-card div {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.35rem;
        }

        .about-principle-card h3 {
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.96rem;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .about-principle-card p {
          color: var(--text-muted);
          font-size: 0.82rem;
          line-height: 1.62;
        }

        @media (max-width: 1020px) {
          .about-layout {
            grid-template-columns: 1fr;
          }

          .about-profile-column {
            position: relative;
            top: auto;
            width: min(100%, 26rem);
            margin-inline: auto;
          }
        }

        @media (max-width: 768px) {
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }

          .about-principles-grid {
            grid-template-columns: 1fr;
          }

          .about-profile-shell {
            width: min(100%, 19rem);
          }

          .about-profile-tag-wrapper.tag-one {
            right: -4%;
          }

          .about-profile-tag-wrapper.tag-two {
            right: -7%;
          }

          .about-profile-tag-wrapper.tag-three {
            left: -3%;
          }

          .about-profile-tag-wrapper.tag-four {
            left: -7%;
          }
        }

        @media (max-width: 480px) {
          .about-profile-shell {
            width: min(100%, 16.5rem);
          }

          .about-profile-tag {
            font-size: 0.68rem;
            padding: 0.38rem 0.64rem;
          }

          .about-profile-tag-wrapper.tag-one {
            top: 0;
            right: -1%;
          }

          .about-profile-tag-wrapper.tag-two {
            right: -2%;
            bottom: 17%;
          }

          .about-profile-tag-wrapper.tag-three {
            left: -1%;
            bottom: 4%;
          }

          .about-profile-tag-wrapper.tag-four {
            left: -2%;
            top: 16%;
          }
        }
      `})]})}var Im={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lm=S.createContext&&S.createContext(Im),Rm=[`attr`,`size`,`title`];function zm(e,t){if(e==null)return{};var n,r,i=Bm(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Bm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Vm(){return Vm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vm.apply(null,arguments)}function Hm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Um(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Hm(Object(n),!0).forEach(function(t){Wm(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hm(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Wm(e,t,n){return(t=Gm(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gm(e){var t=Km(e,`string`);return typeof t==`symbol`?t:t+``}function Km(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function qm(e){return e&&e.map((e,t)=>S.createElement(e.tag,Um({key:t},e.attr),qm(e.child)))}function Jm(e){return t=>S.createElement(Ym,Vm({attr:Um({},e.attr)},t),qm(e.child))}function Ym(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=zm(e,Rm),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),S.createElement(`svg`,Vm({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Um(Um({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&S.createElement(`title`,null,i),e.children)};return Lm===void 0?t(Im):S.createElement(Lm.Consumer,null,e=>t(e))}function Xm(e){return Jm({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`},child:[]},{tag:`rect`,attr:{x:`2`,y:`9`,width:`4`,height:`12`},child:[]},{tag:`circle`,attr:{cx:`4`,cy:`4`,r:`2`},child:[]}]})(e)}function Zm(e){return Jm({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`},child:[]}]})(e)}var Qm={Code2:up,Layers:yp,Server:Cp,Cpu:pp,Handshake:gp,Compass:dp};function $m(e=.28){let t=Eu(),n=vu(0),r=vu(0);return{x:Tu(n,{stiffness:260,damping:22,mass:.4}),y:Tu(r,{stiffness:260,damping:22,mass:.4}),handlers:t?{}:{onMouseMove(t){let i=t.currentTarget.getBoundingClientRect(),a=i.left+i.width/2,o=i.top+i.height/2;n.set((t.clientX-a)*e),r.set((t.clientY-o)*e)},onMouseLeave(){n.set(0),r.set(0)}}}}var eh={hidden:{},show:{transition:{staggerChildren:.08}}},th={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.55,ease:[.16,1,.3,1]}}},nh=(0,S.memo)(function({label:e,href:t,Icon:n}){return(0,U.jsxs)(Y.a,{className:`contact-social-link`,href:t,target:`_blank`,rel:`noopener noreferrer`,whileHover:{y:-5,scale:1.015},whileTap:{scale:.98},transition:{type:`spring`,stiffness:300,damping:24},children:[(0,U.jsx)(`span`,{className:`contact-social-icon`,children:(0,U.jsx)(n,{size:18,strokeWidth:1.9})}),(0,U.jsx)(`span`,{children:e}),(0,U.jsx)(rp,{size:14,strokeWidth:2.45})]})}),rh=(0,S.memo)(function({item:e}){let t=Qm[e.icon]||up;return(0,U.jsxs)(Y.span,{className:`contact-open-pill`,variants:th,whileHover:{y:-3,scale:1.025},transition:{type:`spring`,stiffness:320,damping:24},children:[(0,U.jsx)(t,{size:14,strokeWidth:2.25}),e.label]})});function ih(){let{contact:e}=Wp,t=$m(.24);return(0,U.jsxs)(`section`,{className:`section readability-mask contact-section`,"data-cosmic-scene":`horizon`,children:[(0,U.jsx)(`div`,{className:`section-inner contact-inner`,children:(0,U.jsxs)(Y.div,{className:`contact-card`,initial:{opacity:0,y:32,scale:.98},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.25},transition:{duration:.72,ease:[.16,1,.3,1]},children:[(0,U.jsx)(`div`,{className:`contact-card-shine`,"aria-hidden":`true`}),(0,U.jsxs)(`div`,{className:`contact-layout`,children:[(0,U.jsxs)(`div`,{className:`contact-main`,children:[(0,U.jsxs)(Y.div,{className:`contact-heading`,variants:eh,initial:`hidden`,whileInView:`show`,viewport:{once:!0,amount:.3},children:[(0,U.jsx)(Y.span,{className:`overline`,variants:th,children:e.eyebrow||`Contact`}),(0,U.jsx)(Y.h2,{className:`display-lg`,variants:th,children:e.title||`Get in touch.`}),(0,U.jsx)(Y.p,{className:`body-lg`,variants:th,children:e.description})]}),(0,U.jsxs)(Y.div,{className:`contact-status-card`,variants:th,initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[(0,U.jsx)(`span`,{className:`status-glow-dot`}),(0,U.jsxs)(`p`,{children:[(0,U.jsx)(`strong`,{children:`Current Availability:`}),` Software work, projects, and technical collaborations.`]})]}),(0,U.jsxs)(Y.div,{className:`contact-actions`,initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55,delay:.14,ease:[.16,1,.3,1]},children:[(0,U.jsxs)(Y.a,{className:`contact-email-btn`,href:`mailto:${e.email}`,style:{x:t.x,y:t.y},...t.handlers,children:[(0,U.jsx)(bp,{size:19,strokeWidth:2.25}),(0,U.jsx)(`span`,{children:e.email}),(0,U.jsx)(Sp,{size:17,strokeWidth:2.35})]}),(0,U.jsxs)(`div`,{className:`contact-socials`,children:[(0,U.jsx)(nh,{label:`GitHub`,href:e.github,Icon:Zm}),(0,U.jsx)(nh,{label:`LinkedIn`,href:e.linkedin,Icon:Xm})]})]})]}),(0,U.jsxs)(Y.aside,{className:`contact-side-panel`,initial:{opacity:0,x:28},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.25},transition:{duration:.68,delay:.12,ease:[.16,1,.3,1]},children:[(0,U.jsxs)(`div`,{className:`contact-side-visual`,"aria-hidden":`true`,children:[(0,U.jsx)(`div`,{className:`contact-side-ring ring-one`}),(0,U.jsx)(`div`,{className:`contact-side-ring ring-two`}),(0,U.jsx)(`div`,{className:`contact-side-core`,children:(0,U.jsx)(op,{size:30,strokeWidth:2.1})}),(0,U.jsx)(`span`,{className:`contact-side-node node-one`}),(0,U.jsx)(`span`,{className:`contact-side-node node-two`}),(0,U.jsx)(`span`,{className:`contact-side-node node-three`})]}),(0,U.jsxs)(`div`,{className:`contact-side-copy`,children:[(0,U.jsxs)(`span`,{className:`contact-side-kicker`,children:[(0,U.jsx)(Ep,{size:15,strokeWidth:2.35}),`Open to collaboration`]}),(0,U.jsx)(`h3`,{children:`Looking for engineering work.`}),(0,U.jsx)(`p`,{children:`Best fit: backend systems, APIs, database modeling, product execution, and technical partnerships.`})]}),(0,U.jsxs)(`div`,{className:`contact-checks`,children:[(0,U.jsxs)(`span`,{children:[(0,U.jsx)(cp,{size:15,strokeWidth:2.35}),`Client-facing systems`]}),(0,U.jsxs)(`span`,{children:[(0,U.jsx)(cp,{size:15,strokeWidth:2.35}),`Product thinking`]}),(0,U.jsxs)(`span`,{children:[(0,U.jsx)(cp,{size:15,strokeWidth:2.35}),`Delivery ownership`]})]})]})]}),(0,U.jsxs)(Y.div,{className:`contact-open-section`,variants:eh,initial:`hidden`,whileInView:`show`,viewport:{once:!0,amount:.25},children:[(0,U.jsxs)(`div`,{className:`contact-open-heading`,children:[(0,U.jsx)(`p`,{className:`label text-muted`,children:`Open to`}),(0,U.jsx)(`span`,{})]}),(0,U.jsx)(`div`,{className:`contact-open-list`,children:e.openTo.map(e=>(0,U.jsx)(rh,{item:e},e.label))})]})]})}),(0,U.jsx)(`style`,{children:`
        .contact-section {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          isolation: isolate;
        }

        .contact-status-card {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.68rem 1.1rem;
          background: rgba(200, 154, 24, 0.04);
          border: 1px solid rgba(200, 154, 24, 0.15);
          border-radius: var(--radius-lg);
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          max-width: 100%;
        }

        .status-glow-dot {
          width: 8px;
          height: 8px;
          background-color: var(--mint-strong);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--mint-strong), 0 0 20px rgba(45, 212, 191, 0.4);
          animation: statusPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 0.7; box-shadow: 0 0 8px var(--mint-strong); }
          50% { opacity: 1; box-shadow: 0 0 14px var(--mint-strong); }
        }

        .contact-status-card p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .contact-status-card strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        .contact-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .contact-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 7, 11, 1) 80%);
        }

        .contact-inner {
          position: relative;
          z-index: 2;
        }

        .contact-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .blue-blob-wrapper {
          width: 8.5rem;
          height: 8.5rem;
          top: -2rem;
          right: -2.5rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .lavender-blob-wrapper {
          width: 7.5rem;
          height: 7.5rem;
          left: -2.5rem;
          bottom: -1.75rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .contact-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(18.5px);
          opacity: 0.66;
          animation: blob-float 15s ease-in-out infinite;
          transform: translateZ(0);
        }

        .contact-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.18), transparent 68%);
        }

        .contact-blob-lavender {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.12), transparent 68%);
          animation-delay: -5s;
        }

        .contact-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-image:
            linear-gradient(rgba(200, 154, 24, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 154, 24, 0.05) 1px, transparent 1px);
          background-size: 4.25rem 4.25rem;
        }

        .contact-orb {
          position: absolute;
          z-index: 1;
          border-radius: var(--radius-blob);
          background:
            radial-gradient(circle at 30% 24%, rgba(7, 7, 11, 0.1), transparent 26%),
            linear-gradient(135deg, rgba(200, 154, 24, 0.05), rgba(200, 154, 24, 0.04), rgba(200, 154, 24, 0.03));
          box-shadow:
            0 30px 80px rgba(200, 154, 24, 0.05);
          opacity: 0.5;
          animation: morph-blob 13s ease-in-out infinite, float-y 6s ease-in-out infinite;
        }

        .contact-orb-one {
          width: 8.5rem;
          height: 8.5rem;
          right: 16%;
          top: 18%;
        }

        .contact-orb-two {
          width: 6.5rem;
          height: 6.5rem;
          left: 8%;
          bottom: 14%;
          animation-delay: -3s;
        }

        .contact-card {
          position: relative;
          overflow: hidden;
          padding: clamp(1.2rem, 3vw, 2rem);
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-2xl);
          box-shadow:
            0 28px 90px rgba(0, 0, 0, 0.5),
            0 18px 70px rgba(200, 154, 24, 0.05),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 12% 10%, rgba(200, 154, 24, 0.08), transparent 34%),
            radial-gradient(circle at 90% 82%, rgba(200, 154, 24, 0.06), transparent 36%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 42%);
        }

        .contact-card-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              115deg,
              transparent 0%,
              rgba(255, 255, 255, 0.03) 34%,
              transparent 55%
            );
          opacity: 0.6;
        }

        .contact-layout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: stretch;
        }

        .contact-main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          min-height: 28rem;
        }

        .contact-heading {
          display: grid;
          justify-items: start;
          gap: 1.15rem;
          text-align: left;
        }

        .contact-heading h2 {
          max-width: 10ch;
        }

        .contact-heading p {
          max-width: 48rem;
          color: var(--text-secondary);
          font-weight: 540;
          line-height: 1.78;
        }

        .contact-actions {
          display: grid;
          gap: 1rem;
          justify-items: start;
        }

        .contact-email-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          max-width: 100%;
          padding: 1rem 1.35rem;
          color: var(--text-inverse);
          background:
            radial-gradient(circle at 18% 12%, rgba(7, 7, 11, 0.1), transparent 35%),
            linear-gradient(135deg, var(--text-primary), rgba(7, 7, 11, 0.8));
          border-radius: var(--radius-pill);
          box-shadow:
            0 18px 46px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(7, 7, 11, 0.1) inset;
          font-size: 0.96rem;
          font-weight: 850;
          letter-spacing: -0.015em;
          white-space: nowrap;
          transition:
            box-shadow 240ms var(--ease-out),
            transform 240ms var(--ease-spring);
        }

        .contact-email-btn:hover {
          box-shadow:
            0 26px 62px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(7, 7, 11, 0.15) inset;
        }

        .contact-email-btn svg:last-child {
          transition: transform 240ms var(--ease-spring);
        }

        .contact-email-btn:hover svg:last-child {
          transform: translate(3px, -2px);
        }

        .contact-email-btn span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .contact-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .contact-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.72rem 1rem;
          color: var(--text-primary);
          background: rgba(7, 7, 11, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-pill);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          font-size: 0.86rem;
          font-weight: 800;
          transition:
            border-color 240ms var(--ease-out),
            box-shadow 240ms var(--ease-out);
        }

        .contact-social-link:hover {
          border-color: rgba(200, 154, 24, 0.30);
          box-shadow:
            0 18px 46px rgba(0, 0, 0, 0.4),
            0 12px 38px rgba(200, 154, 24, 0.08);
        }

        .contact-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          color: var(--gold);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
          border-radius: 0.78rem;
        }

        .contact-social-link > svg:last-child {
          color: var(--text-muted);
          transition: transform 240ms var(--ease-spring);
        }

        .contact-social-link:hover > svg:last-child {
          color: var(--gold);
          transform: translate(3px, -3px);
        }

        .contact-side-panel {
          position: relative;
          display: grid;
          align-content: space-between;
          gap: 1.35rem;
          min-height: 100%;
          padding: clamp(1.15rem, 2.5vw, 1.55rem);
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-xl);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
        }

        .contact-side-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 12%, rgba(200, 154, 24, 0.06), transparent 36%),
            radial-gradient(circle at 86% 80%, rgba(200, 154, 24, 0.06), transparent 38%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 44%);
        }

        .contact-side-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.9rem;
        }

        .contact-side-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          width: fit-content;
          color: var(--lavender-strong);
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.09em;
          line-height: 1;
          text-transform: uppercase;
        }

        .contact-side-copy h3 {
          max-width: 9.5ch;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.6vw, 3rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .contact-side-copy p {
          color: var(--text-secondary);
          font-size: 0.94rem;
          font-weight: 540;
          line-height: 1.75;
        }

        .contact-checks {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.55rem;
        }

        .contact-checks span {
          display: inline-flex;
          align-items: center;
          gap: 0.48rem;
          width: fit-content;
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 750;
        }

        .contact-checks svg {
          color: var(--gold);
        }

        .contact-side-visual {
          position: absolute;
          z-index: 1;
          right: 1rem;
          bottom: 1rem;
          width: 13rem;
          height: 13rem;
          opacity: 0.46;
          pointer-events: none;
        }

        .contact-side-ring {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(200, 154, 24, 0.20);
          border-radius: 50%;
          animation: spin-slow 20s linear infinite;
        }

        .contact-side-ring.ring-two {
          inset: 2.1rem;
          border-color: rgba(200, 154, 24, 0.20);
          animation-duration: 28s;
          animation-direction: reverse;
        }

        .contact-side-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 4.6rem;
          height: 4.6rem;
          color: var(--lavender-strong);
          background:
            radial-gradient(circle at 28% 22%, rgba(7, 7, 11, 0.1), transparent 32%),
            rgba(200, 154, 24, 0.10);
          border: 1px solid rgba(200, 154, 24, 0.20);
          border-radius: var(--radius-blob);
          transform: translate(-50%, -50%);
          box-shadow:
            inset 0 0 24px rgba(255, 255, 255, 0.05),
            0 20px 58px rgba(200, 154, 24, 0.10);
          animation: morph-blob 10s ease-in-out infinite, float-y 5.5s ease-in-out infinite;
        }

        .contact-side-node {
          position: absolute;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background: var(--lavender);
          box-shadow: 0 0 0 6px rgba(200, 154, 24, 0.10);
        }

        .contact-side-node.node-one {
          top: 0.7rem;
          left: 50%;
        }

        .contact-side-node.node-two {
          right: 1rem;
          top: 46%;
          background: var(--gold);
          box-shadow: 0 0 0 6px rgba(200, 154, 24, 0.10);
        }

        .contact-side-node.node-three {
          bottom: 1rem;
          left: 36%;
        }

        .contact-open-section {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.85rem;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-open-heading {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-open-heading span {
          flex: 1;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              rgba(200, 154, 24, 0.15),
              rgba(200, 154, 24, 0.08),
              transparent
            );
        }

        .contact-open-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.58rem;
        }

        .contact-open-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.52rem 0.78rem;
          color: var(--text-secondary);
          background: rgba(7, 7, 11, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-pill);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          font-size: 0.8rem;
          font-weight: 750;
          cursor: default;
        }

        .contact-open-pill svg {
          color: var(--blue-strong);
        }

        @media (max-width: 980px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }

          .contact-main {
            min-height: auto;
          }

          .contact-side-copy h3 {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .contact-card {
            border-radius: 1.65rem;
            padding: 1.1rem;
          }

          .contact-heading h2 {
            max-width: 100%;
          }

          .contact-email-btn {
            width: 100%;
            padding-inline: 1rem;
          }

          .contact-socials {
            width: 100%;
          }

          .contact-social-link {
            flex: 1 1 100%;
            justify-content: center;
          }

          .contact-side-panel {
            border-radius: 1.35rem;
          }

          .contact-side-visual {
            display: none;
          }

          .contact-open-list {
            display: grid;
            grid-template-columns: 1fr;
          }

          .contact-open-pill {
            justify-content: center;
          }
        }
      `})]})}function ah(){return(0,U.jsx)(zc,{reducedMotion:`user`,transition:{duration:.4,ease:[.16,1,.3,1]},children:(0,U.jsxs)(`div`,{className:`app-shell`,children:[(0,U.jsx)(`a`,{href:`#app-main`,className:`skip-to-content`,children:`Skip to Content`}),(0,U.jsx)(Wf,{}),(0,U.jsx)(Fp,{}),(0,U.jsxs)(`main`,{id:`app-main`,className:`app-main`,children:[(0,U.jsx)(Up,{}),(0,U.jsx)(Yp,{}),(0,U.jsxs)(`section`,{id:`about`,className:`hud-container`,children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`scanline-overlay`}),(0,U.jsx)(`div`,{className:`cinematic-viewport`,children:(0,U.jsx)(Fm,{})})]}),(0,U.jsxs)(`section`,{id:`work`,className:`hud-container`,children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`scanline-overlay`}),(0,U.jsx)(`div`,{className:`cinematic-viewport`,children:(0,U.jsx)(om,{})})]}),(0,U.jsxs)(`section`,{id:`octagram`,className:`hud-container`,children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`scanline-overlay`}),(0,U.jsx)(`div`,{className:`cinematic-viewport`})]}),(0,U.jsxs)(`section`,{id:`stack`,className:`hud-container`,children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`scanline-overlay`}),(0,U.jsx)(`div`,{className:`cinematic-viewport`,children:(0,U.jsx)(pm,{})})]}),(0,U.jsxs)(`section`,{id:`pipeline`,className:`hud-container`,children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`scanline-overlay`}),(0,U.jsx)(`div`,{className:`cinematic-viewport`,children:(0,U.jsx)(Tm,{})})]}),(0,U.jsxs)(`section`,{id:`experience`,className:`hud-container`,children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`scanline-overlay`}),(0,U.jsx)(`div`,{className:`cinematic-viewport`,children:(0,U.jsx)(Dm,{})})]}),(0,U.jsxs)(`section`,{id:`contact`,className:`hud-container`,children:[(0,U.jsx)(`div`,{className:`hud-corners`}),(0,U.jsx)(`div`,{className:`scanline-overlay`}),(0,U.jsx)(`div`,{className:`cinematic-viewport`,children:(0,U.jsx)(ih,{})})]})]})]})})}Du.createRoot(document.getElementById(`root`)).render((0,U.jsx)(S.StrictMode,{children:(0,U.jsx)(ah,{})}));export{x as a,ad as i,Sf as n,p as o,hd as r,u as s,Cf as t};