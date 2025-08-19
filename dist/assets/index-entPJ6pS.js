function K0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Q0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cg={exports:{}},Cl={},kg={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),Y0=Symbol.for("react.portal"),X0=Symbol.for("react.fragment"),J0=Symbol.for("react.strict_mode"),Z0=Symbol.for("react.profiler"),eE=Symbol.for("react.provider"),tE=Symbol.for("react.context"),nE=Symbol.for("react.forward_ref"),rE=Symbol.for("react.suspense"),iE=Symbol.for("react.memo"),sE=Symbol.for("react.lazy"),Df=Symbol.iterator;function oE(t){return t===null||typeof t!="object"?null:(t=Df&&t[Df]||t["@@iterator"],typeof t=="function"?t:null)}var Tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ig=Object.assign,bg={};function Hi(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Tg}Hi.prototype.isReactComponent={};Hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ng(){}Ng.prototype=Hi.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Tg}var bd=Id.prototype=new Ng;bd.constructor=Id;Ig(bd,Hi.prototype);bd.isPureReactComponent=!0;var Mf=Array.isArray,Rg=Object.prototype.hasOwnProperty,Nd={current:null},Pg={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rg.call(e,r)&&!Pg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:go,type:t,key:s,ref:o,props:i,_owner:Nd.current}}function aE(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function lE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jf=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lE(""+t.key):e.toString(36)}function la(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case Y0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_u(o,0):r,Mf(i)?(n="",t!=null&&(n=t.replace(jf,"$&/")+"/"),la(i,e,n,"",function(u){return u})):i!=null&&(Rd(i)&&(i=aE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_u(s,a);o+=la(s,e,n,l,i)}else if(l=oE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_u(s,a++),o+=la(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(t,e,n){if(t==null)return t;var r=[],i=0;return la(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},ua={transition:null},cE={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:ua,ReactCurrentOwner:Nd};function Og(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!Rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Hi;te.Fragment=X0;te.Profiler=Z0;te.PureComponent=Id;te.StrictMode=J0;te.Suspense=rE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;te.act=Og;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ig({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rg.call(e,l)&&!Pg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:go,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:tE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eE,_context:t},t.Consumer=t};te.createElement=Ag;te.createFactory=function(t){var e=Ag.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:nE,render:t}};te.isValidElement=Rd;te.lazy=function(t){return{$$typeof:sE,_payload:{_status:-1,_result:t},_init:uE}};te.memo=function(t,e){return{$$typeof:iE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=ua.transition;ua.transition={};try{t()}finally{ua.transition=e}};te.unstable_act=Og;te.useCallback=function(t,e){return lt.current.useCallback(t,e)};te.useContext=function(t){return lt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};te.useEffect=function(t,e){return lt.current.useEffect(t,e)};te.useId=function(){return lt.current.useId()};te.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return lt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};te.useRef=function(t){return lt.current.useRef(t)};te.useState=function(t){return lt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return lt.current.useTransition()};te.version="18.3.1";kg.exports=te;var w=kg.exports;const Lg=Q0(w),dE=K0({__proto__:null,default:Lg},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hE=w,fE=Symbol.for("react.element"),pE=Symbol.for("react.fragment"),mE=Object.prototype.hasOwnProperty,gE=hE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_E={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mE.call(e,r)&&!_E.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fE,type:t,key:s,ref:o,props:i,_owner:gE.current}}Cl.Fragment=pE;Cl.jsx=Dg;Cl.jsxs=Dg;Cg.exports=Cl;var c=Cg.exports,lc={},Mg={exports:{}},kt={},jg={exports:{}},Ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,x){var R=N.length;N.push(x);e:for(;0<R;){var A=R-1>>>1,B=N[A];if(0<i(B,x))N[A]=x,N[R]=B,R=A;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var x=N[0],R=N.pop();if(R!==x){N[0]=R;e:for(var A=0,B=N.length,ue=B>>>1;A<ue;){var Y=2*(A+1)-1,Ne=N[Y],ce=Y+1,je=N[ce];if(0>i(Ne,R))ce<B&&0>i(je,Ne)?(N[A]=je,N[ce]=R,A=ce):(N[A]=Ne,N[Y]=R,A=Y);else if(ce<B&&0>i(je,R))N[A]=je,N[ce]=R,A=ce;else break e}}return x}function i(N,x){var R=N.sortIndex-x.sortIndex;return R!==0?R:N.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,f=3,g=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=N)r(u),x.sortIndex=x.expirationTime,e(l,x);else break;x=n(u)}}function S(N){if(y=!1,_(N),!v)if(n(l)!==null)v=!0,H(C);else{var x=n(u);x!==null&&ee(S,x.startTime-N)}}function C(N,x){v=!1,y&&(y=!1,m(k),k=-1),g=!0;var R=f;try{for(_(x),d=n(l);d!==null&&(!(d.expirationTime>x)||N&&!ne());){var A=d.callback;if(typeof A=="function"){d.callback=null,f=d.priorityLevel;var B=A(d.expirationTime<=x);x=t.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&r(l),_(x)}else r(l);d=n(l)}if(d!==null)var ue=!0;else{var Y=n(u);Y!==null&&ee(S,Y.startTime-x),ue=!1}return ue}finally{d=null,f=R,g=!1}}var b=!1,P=null,k=-1,O=5,M=-1;function ne(){return!(t.unstable_now()-M<O)}function j(){if(P!==null){var N=t.unstable_now();M=N;var x=!0;try{x=P(!0,N)}finally{x?q():(b=!1,P=null)}}else b=!1}var q;if(typeof p=="function")q=function(){p(j)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,se=K.port2;K.port1.onmessage=j,q=function(){se.postMessage(null)}}else q=function(){E(j,0)};function H(N){P=N,b||(b=!0,q())}function ee(N,x){k=E(function(){N(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,H(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var x=3;break;default:x=f}var R=f;f=x;try{return N()}finally{f=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,x){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=f;f=N;try{return x()}finally{f=R}},t.unstable_scheduleCallback=function(N,x,R){var A=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?A+R:A):R=A,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=R+B,N={id:h++,callback:x,priorityLevel:N,startTime:R,expirationTime:B,sortIndex:-1},R>A?(N.sortIndex=R,e(u,N),n(l)===null&&N===n(u)&&(y?(m(k),k=-1):y=!0,ee(S,R-A))):(N.sortIndex=B,e(l,N),v||g||(v=!0,H(C))),N},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(N){var x=f;return function(){var R=f;f=x;try{return N.apply(this,arguments)}finally{f=R}}}})(Ug);jg.exports=Ug;var vE=jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=w,xt=vE;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fg=new Set,Fs={};function Xr(t,e){Ai(t,e),Ai(t+"Capture",e)}function Ai(t,e){for(Fs[t]=e,t=0;t<e.length;t++)Fg.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=Object.prototype.hasOwnProperty,wE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uf={},Ff={};function EE(t){return uc.call(Ff,t)?!0:uc.call(Uf,t)?!1:wE.test(t)?Ff[t]=!0:(Uf[t]=!0,!1)}function SE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xE(t,e,n,r){if(e===null||typeof e>"u"||SE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function Ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pd,Ad);Qe[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pd,Ad);Qe[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pd,Ad);Qe[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xE(e,n,i,r)&&(n=null),r||i===null?EE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),li=Symbol.for("react.portal"),ui=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),Bf=Symbol.iterator;function is(t){return t===null||typeof t!="object"?null:(t=Bf&&t[Bf]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,vu;function _s(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var yu=!1;function wu(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_s(t):""}function CE(t){switch(t.tag){case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ui:return"Fragment";case li:return"Portal";case cc:return"Profiler";case Ld:return"StrictMode";case dc:return"Suspense";case hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case Dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:fc(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return fc(t(e))}catch{}}return null}function kE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===Ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TE(t){var e=Wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zo(t){t._valueTracker||(t._valueTracker=TE(t))}function Vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pc(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $f(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hg(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function mc(t,e){Hg(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&gc(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gc(t,e,n){(e!=="number"||ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vs=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(vs(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function Gg(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(t){IE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xs[e]=xs[t]})});function Qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xs.hasOwnProperty(t)&&xs[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bE=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(t,e){if(e){if(bE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sc=null,xi=null,Ci=null;function Hf(t){if(t=yo(t)){if(typeof Sc!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Nl(e),Sc(t.stateNode,t.type,e))}}function Xg(t){xi?Ci?Ci.push(t):Ci=[t]:xi=t}function Jg(){if(xi){var t=xi,e=Ci;if(Ci=xi=null,Hf(t),e)for(t=0;t<e.length;t++)Hf(e[t])}}function Zg(t,e){return t(e)}function e_(){}var Eu=!1;function t_(t,e,n){if(Eu)return t(e,n);Eu=!0;try{return Zg(t,e,n)}finally{Eu=!1,(xi!==null||Ci!==null)&&(e_(),Jg())}}function $s(t,e){var n=t.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var xc=!1;if(Cn)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){xc=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{xc=!1}function NE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Cs=!1,Ta=null,Ia=!1,Cc=null,RE={onError:function(t){Cs=!0,Ta=t}};function PE(t,e,n,r,i,s,o,a,l){Cs=!1,Ta=null,NE.apply(RE,arguments)}function AE(t,e,n,r,i,s,o,a,l){if(PE.apply(this,arguments),Cs){if(Cs){var u=Ta;Cs=!1,Ta=null}else throw Error(T(198));Ia||(Ia=!0,Cc=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gf(t){if(Jr(t)!==t)throw Error(T(188))}function OE(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gf(i),t;if(s===r)return Gf(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function r_(t){return t=OE(t),t!==null?i_(t):null}function i_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i_(t);if(e!==null)return e;t=t.sibling}return null}var s_=xt.unstable_scheduleCallback,qf=xt.unstable_cancelCallback,LE=xt.unstable_shouldYield,DE=xt.unstable_requestPaint,Ae=xt.unstable_now,ME=xt.unstable_getCurrentPriorityLevel,Ud=xt.unstable_ImmediatePriority,o_=xt.unstable_UserBlockingPriority,ba=xt.unstable_NormalPriority,jE=xt.unstable_LowPriority,a_=xt.unstable_IdlePriority,kl=null,tn=null;function UE(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:$E,FE=Math.log,BE=Math.LN2;function $E(t){return t>>>=0,t===0?32:31-(FE(t)/BE|0)|0}var Vo=64,Ho=4194304;function ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Na(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ys(a):(s&=o,s!==0&&(r=ys(s)))}else o=n&~i,o!==0?r=ys(o):s!==0&&(r=ys(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vt(e),i=1<<n,r|=t[n],e&=~i;return r}function zE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l_(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function Su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vt(e),t[e]=n}function VE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function u_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c_,Bd,d_,h_,f_,Tc=!1,Go=[],Xn=null,Jn=null,Zn=null,zs=new Map,Ws=new Map,$n=[],HE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(e.pointerId)}}function os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yo(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function GE(t,e,n,r,i){switch(e){case"focusin":return Xn=os(Xn,t,e,n,r,i),!0;case"dragenter":return Jn=os(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=os(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zs.set(s,os(zs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ws.set(s,os(Ws.get(s)||null,t,e,n,r,i)),!0}return!1}function p_(t){var e=Nr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=n_(n),e!==null){t.blockedOn=e,f_(t.priority,function(){d_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ec=r,n.target.dispatchEvent(r),Ec=null}else return e=yo(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function Qf(t,e,n){ca(t)&&n.delete(e)}function qE(){Tc=!1,Xn!==null&&ca(Xn)&&(Xn=null),Jn!==null&&ca(Jn)&&(Jn=null),Zn!==null&&ca(Zn)&&(Zn=null),zs.forEach(Qf),Ws.forEach(Qf)}function as(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,qE)))}function Vs(t){function e(i){return as(i,t)}if(0<Go.length){as(Go[0],t);for(var n=1;n<Go.length;n++){var r=Go[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&as(Xn,t),Jn!==null&&as(Jn,t),Zn!==null&&as(Zn,t),zs.forEach(e),Ws.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)p_(n),n.blockedOn===null&&$n.shift()}var ki=Pn.ReactCurrentBatchConfig,Ra=!0;function KE(t,e,n,r){var i=oe,s=ki.transition;ki.transition=null;try{oe=1,$d(t,e,n,r)}finally{oe=i,ki.transition=s}}function QE(t,e,n,r){var i=oe,s=ki.transition;ki.transition=null;try{oe=4,$d(t,e,n,r)}finally{oe=i,ki.transition=s}}function $d(t,e,n,r){if(Ra){var i=Ic(t,e,n,r);if(i===null)Au(t,e,r,Pa,n),Kf(t,r);else if(GE(i,t,e,n,r))r.stopPropagation();else if(Kf(t,r),e&4&&-1<HE.indexOf(t)){for(;i!==null;){var s=yo(i);if(s!==null&&c_(s),s=Ic(t,e,n,r),s===null&&Au(t,e,r,Pa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Au(t,e,r,null,n)}}var Pa=null;function Ic(t,e,n,r){if(Pa=null,t=jd(r),t=Nr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pa=t,null}function m_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ME()){case Ud:return 1;case o_:return 4;case ba:case jE:return 16;case a_:return 536870912;default:return 16}default:return 16}}var qn=null,zd=null,da=null;function g_(){if(da)return da;var t,e=zd,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return da=i.slice(t,1<r?1-r:void 0)}function ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Yf(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qo:Yf,this.isPropagationStopped=Yf,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),e}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Tt(Gi),vo=Te({},Gi,{view:0,detail:0}),YE=Tt(vo),xu,Cu,ls,Tl=Te({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ls&&(ls&&t.type==="mousemove"?(xu=t.screenX-ls.screenX,Cu=t.screenY-ls.screenY):Cu=xu=0,ls=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Xf=Tt(Tl),XE=Te({},Tl,{dataTransfer:0}),JE=Tt(XE),ZE=Te({},vo,{relatedTarget:0}),ku=Tt(ZE),eS=Te({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=Tt(eS),nS=Te({},Gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=Tt(nS),iS=Te({},Gi,{data:0}),Jf=Tt(iS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aS[t])?!!e[t]:!1}function Vd(){return lS}var uS=Te({},vo,{key:function(t){if(t.key){var e=sS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cS=Tt(uS),dS=Te({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Tt(dS),hS=Te({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),fS=Tt(hS),pS=Te({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Tt(pS),gS=Te({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_S=Tt(gS),vS=[9,13,27,32],Hd=Cn&&"CompositionEvent"in window,ks=null;Cn&&"documentMode"in document&&(ks=document.documentMode);var yS=Cn&&"TextEvent"in window&&!ks,__=Cn&&(!Hd||ks&&8<ks&&11>=ks),ep=" ",tp=!1;function v_(t,e){switch(t){case"keyup":return vS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ci=!1;function wS(t,e){switch(t){case"compositionend":return y_(e);case"keypress":return e.which!==32?null:(tp=!0,ep);case"textInput":return t=e.data,t===ep&&tp?null:t;default:return null}}function ES(t,e){if(ci)return t==="compositionend"||!Hd&&v_(t,e)?(t=g_(),da=zd=qn=null,ci=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return __&&e.locale!=="ko"?null:e.data;default:return null}}var SS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SS[t.type]:e==="textarea"}function w_(t,e,n,r){Xg(r),e=Aa(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ts=null,Hs=null;function xS(t){P_(t,0)}function Il(t){var e=fi(t);if(Vg(e))return t}function CS(t,e){if(t==="change")return e}var E_=!1;if(Cn){var Tu;if(Cn){var Iu="oninput"in document;if(!Iu){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Iu=typeof rp.oninput=="function"}Tu=Iu}else Tu=!1;E_=Tu&&(!document.documentMode||9<document.documentMode)}function ip(){Ts&&(Ts.detachEvent("onpropertychange",S_),Hs=Ts=null)}function S_(t){if(t.propertyName==="value"&&Il(Hs)){var e=[];w_(e,Hs,t,jd(t)),t_(xS,e)}}function kS(t,e,n){t==="focusin"?(ip(),Ts=e,Hs=n,Ts.attachEvent("onpropertychange",S_)):t==="focusout"&&ip()}function TS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(Hs)}function IS(t,e){if(t==="click")return Il(e)}function bS(t,e){if(t==="input"||t==="change")return Il(e)}function NS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:NS;function Gs(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uc.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,e){var n=sp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sp(n)}}function x_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?x_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C_(){for(var t=window,e=ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ka(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RS(t){var e=C_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&x_(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=op(n,s);var o=op(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PS=Cn&&"documentMode"in document&&11>=document.documentMode,di=null,bc=null,Is=null,Nc=!1;function ap(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nc||di==null||di!==ka(r)||(r=di,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Is&&Gs(Is,r)||(Is=r,r=Aa(bc,"onSelect"),0<r.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function Ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hi={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},bu={},k_={};Cn&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function bl(t){if(bu[t])return bu[t];if(!hi[t])return t;var e=hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return bu[t]=e[n];return t}var T_=bl("animationend"),I_=bl("animationiteration"),b_=bl("animationstart"),N_=bl("transitionend"),R_=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){R_.set(t,e),Xr(e,[t])}for(var Nu=0;Nu<lp.length;Nu++){var Ru=lp[Nu],AS=Ru.toLowerCase(),OS=Ru[0].toUpperCase()+Ru.slice(1);vr(AS,"on"+OS)}vr(T_,"onAnimationEnd");vr(I_,"onAnimationIteration");vr(b_,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(N_,"onTransitionEnd");Ai("onMouseEnter",["mouseout","mouseover"]);Ai("onMouseLeave",["mouseout","mouseover"]);Ai("onPointerEnter",["pointerout","pointerover"]);Ai("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function up(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,AE(r,e,void 0,t),t.currentTarget=null}function P_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;up(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;up(i,a,u),s=l}}}if(Ia)throw t=Cc,Ia=!1,Cc=null,t}function me(t,e){var n=e[Lc];n===void 0&&(n=e[Lc]=new Set);var r=t+"__bubble";n.has(r)||(A_(e,t,2,!1),n.add(r))}function Pu(t,e,n){var r=0;e&&(r|=4),A_(n,t,r,e)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function qs(t){if(!t[Qo]){t[Qo]=!0,Fg.forEach(function(n){n!=="selectionchange"&&(LS.has(n)||Pu(n,!1,t),Pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qo]||(e[Qo]=!0,Pu("selectionchange",!1,e))}}function A_(t,e,n,r){switch(m_(e)){case 1:var i=KE;break;case 4:i=QE;break;default:i=$d}n=i.bind(null,e,n,t),i=void 0,!xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Au(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}t_(function(){var u=s,h=jd(n),d=[];e:{var f=R_.get(t);if(f!==void 0){var g=Wd,v=t;switch(t){case"keypress":if(ha(n)===0)break e;case"keydown":case"keyup":g=cS;break;case"focusin":v="focus",g=ku;break;case"focusout":v="blur",g=ku;break;case"beforeblur":case"afterblur":g=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=JE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fS;break;case T_:case I_:case b_:g=tS;break;case N_:g=mS;break;case"scroll":g=YE;break;case"wheel":g=_S;break;case"copy":case"cut":case"paste":g=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Zf}var y=(e&4)!==0,E=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,_;p!==null;){_=p;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,m!==null&&(S=$s(p,m),S!=null&&y.push(Ks(p,S,_)))),E)break;p=p.return}0<y.length&&(f=new g(f,v,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Ec&&(v=n.relatedTarget||n.fromElement)&&(Nr(v)||v[kn]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Nr(v):null,v!==null&&(E=Jr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Xf,S="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zf,S="onPointerLeave",m="onPointerEnter",p="pointer"),E=g==null?f:fi(g),_=v==null?f:fi(v),f=new y(S,p+"leave",g,n,h),f.target=E,f.relatedTarget=_,S=null,Nr(h)===u&&(y=new y(m,p+"enter",v,n,h),y.target=_,y.relatedTarget=E,S=y),E=S,g&&v)t:{for(y=g,m=v,p=0,_=y;_;_=ii(_))p++;for(_=0,S=m;S;S=ii(S))_++;for(;0<p-_;)y=ii(y),p--;for(;0<_-p;)m=ii(m),_--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=ii(y),m=ii(m)}y=null}else y=null;g!==null&&cp(d,f,g,y,!1),v!==null&&E!==null&&cp(d,E,v,y,!0)}}e:{if(f=u?fi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=CS;else if(np(f))if(E_)C=bS;else{C=TS;var b=kS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=IS);if(C&&(C=C(t,u))){w_(d,C,n,h);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&gc(f,"number",f.value)}switch(b=u?fi(u):window,t){case"focusin":(np(b)||b.contentEditable==="true")&&(di=b,bc=u,Is=null);break;case"focusout":Is=bc=di=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,ap(d,n,h);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":ap(d,n,h)}var P;if(Hd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ci?v_(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(__&&n.locale!=="ko"&&(ci||k!=="onCompositionStart"?k==="onCompositionEnd"&&ci&&(P=g_()):(qn=h,zd="value"in qn?qn.value:qn.textContent,ci=!0)),b=Aa(u,k),0<b.length&&(k=new Jf(k,t,null,n,h),d.push({event:k,listeners:b}),P?k.data=P:(P=y_(n),P!==null&&(k.data=P)))),(P=yS?wS(t,n):ES(t,n))&&(u=Aa(u,"onBeforeInput"),0<u.length&&(h=new Jf("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=P))}P_(d,e)})}function Ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$s(t,n),s!=null&&r.unshift(Ks(t,s,i)),s=$s(t,e),s!=null&&r.push(Ks(t,s,i))),t=t.return}return r}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=$s(n,s),l!=null&&o.unshift(Ks(n,l,a))):i||(l=$s(n,s),l!=null&&o.push(Ks(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(DS,`
`).replace(MS,"")}function Yo(t,e,n){if(e=dp(e),dp(t)!==e&&n)throw Error(T(425))}function Oa(){}var Rc=null,Pc=null;function Ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,jS=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(FS)}:Oc;function FS(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vs(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Zt="__reactFiber$"+qi,Qs="__reactProps$"+qi,kn="__reactContainer$"+qi,Lc="__reactEvents$"+qi,BS="__reactListeners$"+qi,$S="__reactHandles$"+qi;function Nr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[Zt])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Zt]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Nl(t){return t[Qs]||null}var Dc=[],pi=-1;function yr(t){return{current:t}}function ge(t){0>pi||(t.current=Dc[pi],Dc[pi]=null,pi--)}function fe(t,e){pi++,Dc[pi]=t.current,t.current=e}var hr={},et=yr(hr),gt=yr(!1),Mr=hr;function Oi(t,e){var n=t.type.contextTypes;if(!n)return hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function La(){ge(gt),ge(et)}function pp(t,e,n){if(et.current!==hr)throw Error(T(168));fe(et,e),fe(gt,n)}function O_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,kE(t)||"Unknown",i));return Te({},n,r)}function Da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Mr=et.current,fe(et,t),fe(gt,gt.current),!0}function mp(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=O_(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,ge(gt),ge(et),fe(et,t)):ge(gt),fe(gt,n)}var dn=null,Rl=!1,Lu=!1;function L_(t){dn===null?dn=[t]:dn.push(t)}function zS(t){Rl=!0,L_(t)}function wr(){if(!Lu&&dn!==null){Lu=!0;var t=0,e=oe;try{var n=dn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,Rl=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),s_(Ud,wr),i}finally{oe=e,Lu=!1}}return null}var mi=[],gi=0,Ma=null,ja=0,It=[],bt=0,jr=null,fn=1,pn="";function kr(t,e){mi[gi++]=ja,mi[gi++]=Ma,Ma=t,ja=e}function D_(t,e,n){It[bt++]=fn,It[bt++]=pn,It[bt++]=jr,jr=t;var r=fn;t=pn;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var s=32-Vt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Vt(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function qd(t){t.return!==null&&(kr(t,1),D_(t,1,0))}function Kd(t){for(;t===Ma;)Ma=mi[--gi],mi[gi]=null,ja=mi[--gi],mi[gi]=null;for(;t===jr;)jr=It[--bt],It[bt]=null,pn=It[--bt],It[bt]=null,fn=It[--bt],It[bt]=null}var St=null,wt=null,we=!1,Bt=null;function M_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,wt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,wt=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jc(t){if(we){var e=wt;if(e){var n=e;if(!gp(t,e)){if(Mc(t))throw Error(T(418));e=er(n.nextSibling);var r=St;e&&gp(t,e)?M_(r,n):(t.flags=t.flags&-4097|2,we=!1,St=t)}}else{if(Mc(t))throw Error(T(418));t.flags=t.flags&-4097|2,we=!1,St=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Xo(t){if(t!==St)return!1;if(!we)return _p(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ac(t.type,t.memoizedProps)),e&&(e=wt)){if(Mc(t))throw j_(),Error(T(418));for(;e;)M_(t,e),e=er(e.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=St?er(t.stateNode.nextSibling):null;return!0}function j_(){for(var t=wt;t;)t=er(t.nextSibling)}function Li(){wt=St=null,we=!1}function Qd(t){Bt===null?Bt=[t]:Bt.push(t)}var WS=Pn.ReactCurrentBatchConfig;function us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Jo(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function U_(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=ir(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,_,S){return p===null||p.tag!==6?(p=$u(_,m.mode,S),p.return=m,p):(p=i(p,_),p.return=m,p)}function l(m,p,_,S){var C=_.type;return C===ui?h(m,p,_.props.children,S,_.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fn&&vp(C)===p.type)?(S=i(p,_.props),S.ref=us(m,p,_),S.return=m,S):(S=ya(_.type,_.key,_.props,null,m.mode,S),S.ref=us(m,p,_),S.return=m,S)}function u(m,p,_,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=zu(_,m.mode,S),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function h(m,p,_,S,C){return p===null||p.tag!==7?(p=Lr(_,m.mode,S,C),p.return=m,p):(p=i(p,_),p.return=m,p)}function d(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$u(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $o:return _=ya(p.type,p.key,p.props,null,m.mode,_),_.ref=us(m,null,p),_.return=m,_;case li:return p=zu(p,m.mode,_),p.return=m,p;case Fn:var S=p._init;return d(m,S(p._payload),_)}if(vs(p)||is(p))return p=Lr(p,m.mode,_,null),p.return=m,p;Jo(m,p)}return null}function f(m,p,_,S){var C=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(m,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $o:return _.key===C?l(m,p,_,S):null;case li:return _.key===C?u(m,p,_,S):null;case Fn:return C=_._init,f(m,p,C(_._payload),S)}if(vs(_)||is(_))return C!==null?null:h(m,p,_,S,null);Jo(m,_)}return null}function g(m,p,_,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(_)||null,a(p,m,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $o:return m=m.get(S.key===null?_:S.key)||null,l(p,m,S,C);case li:return m=m.get(S.key===null?_:S.key)||null,u(p,m,S,C);case Fn:var b=S._init;return g(m,p,_,b(S._payload),C)}if(vs(S)||is(S))return m=m.get(_)||null,h(p,m,S,C,null);Jo(p,S)}return null}function v(m,p,_,S){for(var C=null,b=null,P=p,k=p=0,O=null;P!==null&&k<_.length;k++){P.index>k?(O=P,P=null):O=P.sibling;var M=f(m,P,_[k],S);if(M===null){P===null&&(P=O);break}t&&P&&M.alternate===null&&e(m,P),p=s(M,p,k),b===null?C=M:b.sibling=M,b=M,P=O}if(k===_.length)return n(m,P),we&&kr(m,k),C;if(P===null){for(;k<_.length;k++)P=d(m,_[k],S),P!==null&&(p=s(P,p,k),b===null?C=P:b.sibling=P,b=P);return we&&kr(m,k),C}for(P=r(m,P);k<_.length;k++)O=g(P,m,k,_[k],S),O!==null&&(t&&O.alternate!==null&&P.delete(O.key===null?k:O.key),p=s(O,p,k),b===null?C=O:b.sibling=O,b=O);return t&&P.forEach(function(ne){return e(m,ne)}),we&&kr(m,k),C}function y(m,p,_,S){var C=is(_);if(typeof C!="function")throw Error(T(150));if(_=C.call(_),_==null)throw Error(T(151));for(var b=C=null,P=p,k=p=0,O=null,M=_.next();P!==null&&!M.done;k++,M=_.next()){P.index>k?(O=P,P=null):O=P.sibling;var ne=f(m,P,M.value,S);if(ne===null){P===null&&(P=O);break}t&&P&&ne.alternate===null&&e(m,P),p=s(ne,p,k),b===null?C=ne:b.sibling=ne,b=ne,P=O}if(M.done)return n(m,P),we&&kr(m,k),C;if(P===null){for(;!M.done;k++,M=_.next())M=d(m,M.value,S),M!==null&&(p=s(M,p,k),b===null?C=M:b.sibling=M,b=M);return we&&kr(m,k),C}for(P=r(m,P);!M.done;k++,M=_.next())M=g(P,m,k,M.value,S),M!==null&&(t&&M.alternate!==null&&P.delete(M.key===null?k:M.key),p=s(M,p,k),b===null?C=M:b.sibling=M,b=M);return t&&P.forEach(function(j){return e(m,j)}),we&&kr(m,k),C}function E(m,p,_,S){if(typeof _=="object"&&_!==null&&_.type===ui&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case $o:e:{for(var C=_.key,b=p;b!==null;){if(b.key===C){if(C=_.type,C===ui){if(b.tag===7){n(m,b.sibling),p=i(b,_.props.children),p.return=m,m=p;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fn&&vp(C)===b.type){n(m,b.sibling),p=i(b,_.props),p.ref=us(m,b,_),p.return=m,m=p;break e}n(m,b);break}else e(m,b);b=b.sibling}_.type===ui?(p=Lr(_.props.children,m.mode,S,_.key),p.return=m,m=p):(S=ya(_.type,_.key,_.props,null,m.mode,S),S.ref=us(m,p,_),S.return=m,m=S)}return o(m);case li:e:{for(b=_.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=zu(_,m.mode,S),p.return=m,m=p}return o(m);case Fn:return b=_._init,E(m,p,b(_._payload),S)}if(vs(_))return v(m,p,_,S);if(is(_))return y(m,p,_,S);Jo(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=$u(_,m.mode,S),p.return=m,m=p),o(m)):n(m,p)}return E}var Di=U_(!0),F_=U_(!1),Ua=yr(null),Fa=null,_i=null,Yd=null;function Xd(){Yd=_i=Fa=null}function Jd(t){var e=Ua.current;ge(Ua),t._currentValue=e}function Uc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){Fa=t,Yd=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function At(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(Fa===null)throw Error(T(308));_i=t,Fa.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var Rr=null;function Zd(t){Rr===null?Rr=[t]:Rr.push(t)}function B_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tn(t,n)}function fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}function yp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ba(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=Te({},d,f);break e;case 2:Bn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=d):h=h.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=d}}function wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var wo={},nn=yr(wo),Ys=yr(wo),Xs=yr(wo);function Pr(t){if(t===wo)throw Error(T(174));return t}function th(t,e){switch(fe(Xs,e),fe(Ys,t),fe(nn,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vc(e,t)}ge(nn),fe(nn,e)}function Mi(){ge(nn),ge(Ys),ge(Xs)}function z_(t){Pr(Xs.current);var e=Pr(nn.current),n=vc(e,t.type);e!==n&&(fe(Ys,t),fe(nn,n))}function nh(t){Ys.current===t&&(ge(nn),ge(Ys))}var Ce=yr(0);function $a(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function rh(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var pa=Pn.ReactCurrentDispatcher,Mu=Pn.ReactCurrentBatchConfig,Ur=0,ke=null,Ue=null,ze=null,za=!1,bs=!1,Js=0,VS=0;function Xe(){throw Error(T(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function sh(t,e,n,r,i,s){if(Ur=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=t===null||t.memoizedState===null?KS:QS,t=n(r,i),bs){s=0;do{if(bs=!1,Js=0,25<=s)throw Error(T(301));s+=1,ze=Ue=null,e.updateQueue=null,pa.current=YS,t=n(r,i)}while(bs)}if(pa.current=Wa,e=Ue!==null&&Ue.next!==null,Ur=0,ze=Ue=ke=null,za=!1,e)throw Error(T(300));return t}function oh(){var t=Js!==0;return Js=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ke.memoizedState=ze=t:ze=ze.next=t,ze}function Ot(){if(Ue===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=ze===null?ke.memoizedState:ze.next;if(e!==null)ze=e,Ue=t;else{if(t===null)throw Error(T(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},ze===null?ke.memoizedState=ze=t:ze=ze.next=t}return ze}function Zs(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=Ot(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Ur&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ke.lanes|=h,Fr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,qt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,Fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=Ot(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function W_(){}function V_(t,e){var n=ke,r=Ot(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,ah(q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,eo(9,G_.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(T(349));Ur&30||H_(n,e,i)}return i}function H_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G_(t,e,n,r){e.value=n,e.getSnapshot=r,K_(e)&&Q_(t)}function q_(t,e,n){return n(function(){K_(e)&&Q_(t)})}function K_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Q_(t){var e=Tn(t,1);e!==null&&Ht(e,t,1,-1)}function Ep(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zs,lastRenderedState:t},e.queue=t,t=t.dispatch=qS.bind(null,ke,t),[e.memoizedState,t]}function eo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Y_(){return Ot().memoizedState}function ma(t,e,n,r){var i=Jt();ke.flags|=t,i.memoizedState=eo(1|e,n,void 0,r===void 0?null:r)}function Pl(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&ih(r,o.deps)){i.memoizedState=eo(e,n,s,r);return}}ke.flags|=t,i.memoizedState=eo(1|e,n,s,r)}function Sp(t,e){return ma(8390656,8,t,e)}function ah(t,e){return Pl(2048,8,t,e)}function X_(t,e){return Pl(4,2,t,e)}function J_(t,e){return Pl(4,4,t,e)}function Z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ev(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,Z_.bind(null,e,t),n)}function lh(){}function tv(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ih(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nv(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ih(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rv(t,e,n){return Ur&21?(qt(n,e)||(n=l_(),ke.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function HS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Mu.transition;Mu.transition={};try{t(!1),e()}finally{oe=n,Mu.transition=r}}function iv(){return Ot().memoizedState}function GS(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sv(t))ov(e,n);else if(n=B_(t,e,n,r),n!==null){var i=st();Ht(n,t,r,i),av(n,e,r)}}function qS(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sv(t))ov(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,qt(a,o)){var l=e.interleaved;l===null?(i.next=i,Zd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=B_(t,e,i,r),n!==null&&(i=st(),Ht(n,t,r,i),av(n,e,r))}}function sv(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function ov(t,e){bs=za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function av(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}var Wa={readContext:At,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},KS={readContext:At,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:At,useEffect:Sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ma(4194308,4,Z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return ma(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GS.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:lh,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=HS.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=Jt();if(we){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Ve===null)throw Error(T(349));Ur&30||H_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sp(q_.bind(null,r,s,t),[t]),r.flags|=2048,eo(9,G_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=Ve.identifierPrefix;if(we){var n=pn,r=fn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Js++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QS={readContext:At,useCallback:tv,useContext:At,useEffect:ah,useImperativeHandle:ev,useInsertionEffect:X_,useLayoutEffect:J_,useMemo:nv,useReducer:ju,useRef:Y_,useState:function(){return ju(Zs)},useDebugValue:lh,useDeferredValue:function(t){var e=Ot();return rv(e,Ue.memoizedState,t)},useTransition:function(){var t=ju(Zs)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:V_,useId:iv,unstable_isNewReconciler:!1},YS={readContext:At,useCallback:tv,useContext:At,useEffect:ah,useImperativeHandle:ev,useInsertionEffect:X_,useLayoutEffect:J_,useMemo:nv,useReducer:Uu,useRef:Y_,useState:function(){return Uu(Zs)},useDebugValue:lh,useDeferredValue:function(t){var e=Ot();return Ue===null?e.memoizedState=t:rv(e,Ue.memoizedState,t)},useTransition:function(){var t=Uu(Zs)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:V_,useId:iv,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=rr(t),s=yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Ht(e,t,i,r),fa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=rr(t),s=yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Ht(e,t,i,r),fa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=rr(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(Ht(e,t,r,n),fa(e,t,r))}};function xp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gs(n,r)||!Gs(i,s):!0}function lv(t,e,n){var r=!1,i=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=At(s):(i=_t(e)?Mr:et.current,r=e.contextTypes,s=(r=r!=null)?Oi(t,i):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function Bc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},eh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=At(s):(s=_t(e)?Mr:et.current,i.context=Oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Al.enqueueReplaceState(i,i.state,null),Ba(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=CE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $c(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function uv(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ha||(Ha=!0,Xc=r),$c(t,e)},n}function cv(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$c(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$c(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dx.bind(null,t,e,n),e.then(t,t))}function Tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ip(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var JS=Pn.ReactCurrentOwner,ht=!1;function nt(t,e,n,r){e.child=t===null?F_(e,null,n,r):Di(e,t.child,n,r)}function bp(t,e,n,r,i){n=n.render;var s=e.ref;return Ti(e,i),r=sh(t,e,n,r,s,i),n=oh(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(we&&n&&qd(e),e.flags|=1,nt(t,e,r,i),e.child)}function Np(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dv(t,e,s,r,i)):(t=ya(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function dv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gs(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,In(t,e,i)}return zc(t,e,n,r,i)}function hv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(yi,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(yi,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(yi,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(yi,yt),yt|=r;return nt(t,e,i,n),e.child}function fv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zc(t,e,n,r,i){var s=_t(n)?Mr:et.current;return s=Oi(e,s),Ti(e,i),n=sh(t,e,n,r,s,i),r=oh(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(we&&r&&qd(e),e.flags|=1,nt(t,e,n,i),e.child)}function Rp(t,e,n,r,i){if(_t(n)){var s=!0;Da(e)}else s=!1;if(Ti(e,i),e.stateNode===null)ga(t,e),lv(e,n,r),Bc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=_t(n)?Mr:et.current,u=Oi(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Cp(e,o,r,u),Bn=!1;var f=e.memoizedState;o.state=f,Ba(e,r,o,i),l=e.memoizedState,a!==r||f!==l||gt.current||Bn?(typeof h=="function"&&(Fc(e,n,h,r),l=e.memoizedState),(a=Bn||xp(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ut(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=At(l):(l=_t(n)?Mr:et.current,l=Oi(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Cp(e,o,r,l),Bn=!1,f=e.memoizedState,o.state=f,Ba(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||gt.current||Bn?(typeof g=="function"&&(Fc(e,n,g,r),v=e.memoizedState),(u=Bn||xp(e,n,u,r,f,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Wc(t,e,n,r,s,i)}function Wc(t,e,n,r,i,s){fv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mp(e,n,!1),In(t,e,s);r=e.stateNode,JS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Di(e,t.child,null,s),e.child=Di(e,null,a,s)):nt(t,e,a,s),e.memoizedState=r.state,i&&mp(e,n,!0),e.child}function pv(t){var e=t.stateNode;e.pendingContext?pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pp(t,e.context,!1),th(t,e.containerInfo)}function Pp(t,e,n,r,i){return Li(),Qd(i),e.flags|=256,nt(t,e,n,r),e.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function mv(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Ce,i&1),t===null)return jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hc(n),e.memoizedState=Vc,t):uh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ZS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ir(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vc,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uh(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,r){return r!==null&&Qd(r),Di(e,t.child,null,n),t=uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fu(Error(T(422))),Zo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dl({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Di(e,t.child,null,o),e.child.memoizedState=Hc(o),e.memoizedState=Vc,s);if(!(e.mode&1))return Zo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Fu(s,r,void 0),Zo(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tn(t,i),Ht(r,t,i,-1))}return mh(),r=Fu(Error(T(421))),Zo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=er(i.nextSibling),St=e,we=!0,Bt=null,t!==null&&(It[bt++]=fn,It[bt++]=pn,It[bt++]=jr,fn=t.id,pn=t.overflow,jr=e),e=uh(e,r.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uc(t.return,e,n)}function Bu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$a(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$a(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bu(e,!0,n,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ex(t,e,n){switch(e.tag){case 3:pv(e),Li();break;case 5:z_(e);break;case 1:_t(e.type)&&Da(e);break;case 4:th(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(Ua,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?mv(t,e,n):(fe(Ce,Ce.current&1),t=In(t,e,n),t!==null?t.sibling:null);fe(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return In(t,e,n)}var _v,Gc,vv,yv;_v=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gc=function(){};vv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(nn.current);var s=null;switch(n){case"input":i=pc(t,i),r=pc(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=_c(t,i),r=_c(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oa)}yc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yv=function(t,e,n,r){n!==r&&(e.flags|=4)};function cs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tx(t,e,n){var r=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return _t(e.type)&&La(),Je(e),null;case 3:return r=e.stateNode,Mi(),ge(gt),ge(et),rh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(ed(Bt),Bt=null))),Gc(t,e),Je(e),null;case 5:nh(e);var i=Pr(Xs.current);if(n=e.type,t!==null&&e.stateNode!=null)vv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Je(e),null}if(t=Pr(nn.current),Xo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[Qs]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<ws.length;i++)me(ws[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":$f(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Wf(r,s),me("invalid",r)}yc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yo(r.textContent,a,t),i=["children",""+a]):Fs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":zo(r),zf(r,s,!0);break;case"textarea":zo(r),Vf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[Qs]=r,_v(t,e,!1,!1),e.stateNode=t;e:{switch(o=wc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<ws.length;i++)me(ws[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":$f(t,r),i=pc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":Wf(t,r),i=_c(t,r),me("invalid",t);break;default:i=r}yc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bs(t,l):typeof l=="number"&&Bs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&me("scroll",t):l!=null&&Od(t,s,l,o))}switch(n){case"input":zo(t),zf(t,r,!1);break;case"textarea":zo(t),Vf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Si(t,!!r.multiple,s,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Pr(Xs.current),Pr(nn.current),Xo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Yo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return Je(e),null;case 13:if(ge(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&wt!==null&&e.mode&1&&!(e.flags&128))j_(),Li(),e.flags|=98560,s=!1;else if(s=Xo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Zt]=e}else Li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Bt!==null&&(ed(Bt),Bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Be===0&&(Be=3):mh())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return Mi(),Gc(t,e),t===null&&qs(e.stateNode.containerInfo),Je(e),null;case 10:return Jd(e.type._context),Je(e),null;case 17:return _t(e.type)&&La(),Je(e),null;case 19:if(ge(Ce),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)cs(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$a(t),o!==null){for(e.flags|=128,cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Ui&&(e.flags|=128,r=!0,cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=$a(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return Je(e),null}else 2*Ae()-s.renderingStartTime>Ui&&n!==1073741824&&(e.flags|=128,r=!0,cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=Ce.current,fe(Ce,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return ph(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function nx(t,e){switch(Kd(e),e.tag){case 1:return _t(e.type)&&La(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mi(),ge(gt),ge(et),rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nh(e),null;case 13:if(ge(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Ce),null;case 4:return Mi(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return ph(),null;case 24:return null;default:return null}}var ea=!1,Ze=!1,rx=typeof WeakSet=="function"?WeakSet:Set,D=null;function vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function qc(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Op=!1;function ix(t,e){if(Rc=Ra,t=C_(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++h===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:t,selectionRange:n},Ra=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ut(e.type,y),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){Ie(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=Op,Op=!1,v}function Ns(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qc(e,n,s)}i=i.next}while(i!==r)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wv(t){var e=t.alternate;e!==null&&(t.alternate=null,wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[Qs],delete e[Lc],delete e[BS],delete e[$S])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function Lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oa));else if(r!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}var He=null,Ft=!1;function jn(t,e,n){for(n=n.child;n!==null;)Sv(t,e,n),n=n.sibling}function Sv(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Ze||vi(n,e);case 6:var r=He,i=Ft;He=null,jn(t,e,n),He=r,Ft=i,He!==null&&(Ft?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ft?(t=He,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),Vs(t)):Ou(He,n.stateNode));break;case 4:r=He,i=Ft,He=n.stateNode.containerInfo,Ft=!0,jn(t,e,n),He=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qc(n,e,o),i=i.next}while(i!==r)}jn(t,e,n);break;case 1:if(!Ze&&(vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,e,a)}jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,jn(t,e,n),Ze=r):jn(t,e,n);break;default:jn(t,e,n)}}function Dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rx),e.forEach(function(r){var i=fx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Ft=!1;break e;case 3:He=a.stateNode.containerInfo,Ft=!0;break e;case 4:He=a.stateNode.containerInfo,Ft=!0;break e}a=a.return}if(He===null)throw Error(T(160));Sv(s,o,i),He=null,Ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xv(e,t),e=e.sibling}function xv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Xt(t),r&4){try{Ns(3,t,t.return),Ol(3,t)}catch(y){Ie(t,t.return,y)}try{Ns(5,t,t.return)}catch(y){Ie(t,t.return,y)}}break;case 1:Mt(e,t),Xt(t),r&512&&n!==null&&vi(n,n.return);break;case 5:if(Mt(e,t),Xt(t),r&512&&n!==null&&vi(n,n.return),t.flags&32){var i=t.stateNode;try{Bs(i,"")}catch(y){Ie(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hg(i,s),wc(a,o);var u=wc(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Yg(i,d):h==="dangerouslySetInnerHTML"?Kg(i,d):h==="children"?Bs(i,d):Od(i,h,d,u)}switch(a){case"input":mc(i,s);break;case"textarea":Gg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Si(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Si(i,!!s.multiple,s.defaultValue,!0):Si(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qs]=s}catch(y){Ie(t,t.return,y)}}break;case 6:if(Mt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Ie(t,t.return,y)}}break;case 3:if(Mt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vs(e.containerInfo)}catch(y){Ie(t,t.return,y)}break;case 4:Mt(e,t),Xt(t);break;case 13:Mt(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hh=Ae())),r&4&&Dp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(u=Ze)||h,Mt(e,t),Ze=u):Mt(e,t),Xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(D=t,h=t.child;h!==null;){for(d=D=h;D!==null;){switch(f=D,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ns(4,f,f.return);break;case 1:vi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Ie(r,n,y)}}break;case 5:vi(f,f.return);break;case 22:if(f.memoizedState!==null){jp(d);continue}}g!==null?(g.return=f,D=g):jp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qg("display",o))}catch(y){Ie(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Ie(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mt(e,t),Xt(t),r&4&&Dp(t);break;case 21:break;default:Mt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bs(i,""),r.flags&=-33);var s=Lp(t);Yc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lp(t);Qc(t,a,o);break;default:throw Error(T(161))}}catch(l){Ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sx(t,e,n){D=t,Cv(t)}function Cv(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ea;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=ea;var u=Ze;if(ea=o,(Ze=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Up(i):l!==null?(l.return=o,D=l):Up(i);for(;s!==null;)D=s,Cv(s),s=s.sibling;D=i,ea=a,Ze=u}Mp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Mp(t)}}function Mp(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Vs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ze||e.flags&512&&Kc(e)}catch(f){Ie(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function jp(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Up(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(l){Ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ie(e,i,l)}}var s=e.return;try{Kc(e)}catch(l){Ie(e,s,l)}break;case 5:var o=e.return;try{Kc(e)}catch(l){Ie(e,o,l)}}}catch(l){Ie(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var ox=Math.ceil,Va=Pn.ReactCurrentDispatcher,ch=Pn.ReactCurrentOwner,Pt=Pn.ReactCurrentBatchConfig,re=0,Ve=null,Me=null,Ke=0,yt=0,yi=yr(0),Be=0,to=null,Fr=0,Ll=0,dh=0,Rs=null,dt=null,hh=0,Ui=1/0,cn=null,Ha=!1,Xc=null,nr=null,ta=!1,Kn=null,Ga=0,Ps=0,Jc=null,_a=-1,va=0;function st(){return re&6?Ae():_a!==-1?_a:_a=Ae()}function rr(t){return t.mode&1?re&2&&Ke!==0?Ke&-Ke:WS.transition!==null?(va===0&&(va=l_()),va):(t=oe,t!==0||(t=window.event,t=t===void 0?16:m_(t.type)),t):1}function Ht(t,e,n,r){if(50<Ps)throw Ps=0,Jc=null,Error(T(185));_o(t,n,r),(!(re&2)||t!==Ve)&&(t===Ve&&(!(re&2)&&(Ll|=n),Be===4&&zn(t,Ke)),vt(t,r),n===1&&re===0&&!(e.mode&1)&&(Ui=Ae()+500,Rl&&wr()))}function vt(t,e){var n=t.callbackNode;WE(t,e);var r=Na(t,t===Ve?Ke:0);if(r===0)n!==null&&qf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qf(n),e===1)t.tag===0?zS(Fp.bind(null,t)):L_(Fp.bind(null,t)),US(function(){!(re&6)&&wr()}),n=null;else{switch(u_(r)){case 1:n=Ud;break;case 4:n=o_;break;case 16:n=ba;break;case 536870912:n=a_;break;default:n=ba}n=Av(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(_a=-1,va=0,re&6)throw Error(T(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=Na(t,t===Ve?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qa(t,r);else{e=r;var i=re;re|=2;var s=Iv();(Ve!==t||Ke!==e)&&(cn=null,Ui=Ae()+500,Or(t,e));do try{ux();break}catch(a){Tv(t,a)}while(!0);Xd(),Va.current=s,re=i,Me!==null?e=0:(Ve=null,Ke=0,e=Be)}if(e!==0){if(e===2&&(i=kc(t),i!==0&&(r=i,e=Zc(t,i))),e===1)throw n=to,Or(t,0),zn(t,r),vt(t,Ae()),n;if(e===6)zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!ax(i)&&(e=qa(t,r),e===2&&(s=kc(t),s!==0&&(r=s,e=Zc(t,s))),e===1))throw n=to,Or(t,0),zn(t,r),vt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Tr(t,dt,cn);break;case 3:if(zn(t,r),(r&130023424)===r&&(e=hh+500-Ae(),10<e)){if(Na(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oc(Tr.bind(null,t,dt,cn),e);break}Tr(t,dt,cn);break;case 4:if(zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Vt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ox(r/1960))-r,10<r){t.timeoutHandle=Oc(Tr.bind(null,t,dt,cn),r);break}Tr(t,dt,cn);break;case 5:Tr(t,dt,cn);break;default:throw Error(T(329))}}}return vt(t,Ae()),t.callbackNode===n?kv.bind(null,t):null}function Zc(t,e){var n=Rs;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=qa(t,e),t!==2&&(e=dt,dt=n,e!==null&&ed(e)),t}function ed(t){dt===null?dt=t:dt.push.apply(dt,t)}function ax(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zn(t,e){for(e&=~dh,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vt(e),r=1<<n;t[n]=-1,e&=~r}}function Fp(t){if(re&6)throw Error(T(327));Ii();var e=Na(t,0);if(!(e&1))return vt(t,Ae()),null;var n=qa(t,e);if(t.tag!==0&&n===2){var r=kc(t);r!==0&&(e=r,n=Zc(t,r))}if(n===1)throw n=to,Or(t,0),zn(t,e),vt(t,Ae()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,dt,cn),vt(t,Ae()),null}function fh(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ui=Ae()+500,Rl&&wr())}}function Br(t){Kn!==null&&Kn.tag===0&&!(re&6)&&Ii();var e=re;re|=1;var n=Pt.transition,r=oe;try{if(Pt.transition=null,oe=1,t)return t()}finally{oe=r,Pt.transition=n,re=e,!(re&6)&&wr()}}function ph(){yt=yi.current,ge(yi)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jS(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&La();break;case 3:Mi(),ge(gt),ge(et),rh();break;case 5:nh(r);break;case 4:Mi();break;case 13:ge(Ce);break;case 19:ge(Ce);break;case 10:Jd(r.type._context);break;case 22:case 23:ph()}n=n.return}if(Ve=t,Me=t=ir(t.current,null),Ke=yt=e,Be=0,to=null,dh=Ll=Fr=0,dt=Rs=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rr=null}return t}function Tv(t,e){do{var n=Me;try{if(Xd(),pa.current=Wa,za){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}za=!1}if(Ur=0,ze=Ue=ke=null,bs=!1,Js=0,ch.current=null,n===null||n.return===null){Be=1,to=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Tp(o);if(g!==null){g.flags&=-257,Ip(g,o,a,s,e),g.mode&1&&kp(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){kp(s,u,e),mh();break e}l=Error(T(426))}}else if(we&&a.mode&1){var E=Tp(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ip(E,o,a,s,e),Qd(ji(l,a));break e}}s=l=ji(l,a),Be!==4&&(Be=2),Rs===null?Rs=[s]:Rs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=uv(s,l,e);yp(s,m);break e;case 1:a=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(nr===null||!nr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=cv(s,a,e);yp(s,S);break e}}s=s.return}while(s!==null)}Nv(n)}catch(C){e=C,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function Iv(){var t=Va.current;return Va.current=Wa,t===null?Wa:t}function mh(){(Be===0||Be===3||Be===2)&&(Be=4),Ve===null||!(Fr&268435455)&&!(Ll&268435455)||zn(Ve,Ke)}function qa(t,e){var n=re;re|=2;var r=Iv();(Ve!==t||Ke!==e)&&(cn=null,Or(t,e));do try{lx();break}catch(i){Tv(t,i)}while(!0);if(Xd(),re=n,Va.current=r,Me!==null)throw Error(T(261));return Ve=null,Ke=0,Be}function lx(){for(;Me!==null;)bv(Me)}function ux(){for(;Me!==null&&!LE();)bv(Me)}function bv(t){var e=Pv(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?Nv(t):Me=e,ch.current=null}function Nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nx(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Me=null;return}}else if(n=tx(n,e,yt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Be===0&&(Be=5)}function Tr(t,e,n){var r=oe,i=Pt.transition;try{Pt.transition=null,oe=1,cx(t,e,n,r)}finally{Pt.transition=i,oe=r}return null}function cx(t,e,n,r){do Ii();while(Kn!==null);if(re&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VE(t,s),t===Ve&&(Me=Ve=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ta||(ta=!0,Av(ba,function(){return Ii(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=oe;oe=1;var a=re;re|=4,ch.current=null,ix(t,n),xv(n,t),RS(Pc),Ra=!!Rc,Pc=Rc=null,t.current=n,sx(n),DE(),re=a,oe=o,Pt.transition=s}else t.current=n;if(ta&&(ta=!1,Kn=t,Ga=i),s=t.pendingLanes,s===0&&(nr=null),UE(n.stateNode),vt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ha)throw Ha=!1,t=Xc,Xc=null,t;return Ga&1&&t.tag!==0&&Ii(),s=t.pendingLanes,s&1?t===Jc?Ps++:(Ps=0,Jc=t):Ps=0,wr(),null}function Ii(){if(Kn!==null){var t=u_(Ga),e=Pt.transition,n=oe;try{if(Pt.transition=null,oe=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,Ga=0,re&6)throw Error(T(331));var i=re;for(re|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var h=D;switch(h.tag){case 0:case 11:case 15:Ns(8,h,s)}var d=h.child;if(d!==null)d.return=h,D=d;else for(;D!==null;){h=D;var f=h.sibling,g=h.return;if(wv(h),h===u){D=null;break}if(f!==null){f.return=g,D=f;break}D=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ns(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,D=_;else e:for(o=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(C){Ie(a,a.return,C)}if(a===o){D=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,D=S;break e}D=a.return}}if(re=i,wr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(kl,t)}catch{}r=!0}return r}finally{oe=n,Pt.transition=e}}return!1}function Bp(t,e,n){e=ji(n,e),e=uv(t,e,1),t=tr(t,e,1),e=st(),t!==null&&(_o(t,1,e),vt(t,e))}function Ie(t,e,n){if(t.tag===3)Bp(t,t,n);else for(;e!==null;){if(e.tag===3){Bp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=ji(n,t),t=cv(e,t,1),e=tr(e,t,1),t=st(),e!==null&&(_o(e,1,t),vt(e,t));break}}e=e.return}}function dx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Ke&n)===n&&(Be===4||Be===3&&(Ke&130023424)===Ke&&500>Ae()-hh?Or(t,0):dh|=n),vt(t,e)}function Rv(t,e){e===0&&(t.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var n=st();t=Tn(t,e),t!==null&&(_o(t,e,n),vt(t,n))}function hx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function fx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Rv(t,n)}var Pv;Pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,ex(t,e,n);ht=!!(t.flags&131072)}else ht=!1,we&&e.flags&1048576&&D_(e,ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ga(t,e),t=e.pendingProps;var i=Oi(e,et.current);Ti(e,n),i=sh(null,e,r,t,i,n);var s=oh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,Da(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eh(e),i.updater=Al,e.stateNode=i,i._reactInternals=e,Bc(e,r,t,n),e=Wc(null,e,r,!0,s,n)):(e.tag=0,we&&s&&qd(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ga(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mx(r),t=Ut(r,t),i){case 0:e=zc(null,e,r,t,n);break e;case 1:e=Rp(null,e,r,t,n);break e;case 11:e=bp(null,e,r,t,n);break e;case 14:e=Np(null,e,r,Ut(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),zc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Rp(t,e,r,i,n);case 3:e:{if(pv(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$_(t,e),Ba(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(T(423)),e),e=Pp(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(T(424)),e),e=Pp(t,e,r,n,i);break e}else for(wt=er(e.stateNode.containerInfo.firstChild),St=e,we=!0,Bt=null,n=F_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){e=In(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return z_(e),t===null&&jc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ac(r,i)?o=null:s!==null&&Ac(r,s)&&(e.flags|=32),fv(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&jc(e),null;case 13:return mv(t,e,n);case 4:return th(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Di(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),bp(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(Ua,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!gt.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Uc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ti(e,n),i=At(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),Np(t,e,r,i,n);case 15:return dv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),ga(t,e),e.tag=1,_t(r)?(t=!0,Da(e)):t=!1,Ti(e,n),lv(e,r,i),Bc(e,r,i,n),Wc(null,e,r,!0,t,n);case 19:return gv(t,e,n);case 22:return hv(t,e,n)}throw Error(T(156,e.tag))};function Av(t,e){return s_(t,e)}function px(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new px(t,e,n,r)}function gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mx(t){if(typeof t=="function")return gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dd)return 11;if(t===Md)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ya(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ui:return Lr(n.children,i,s,e);case Ld:o=8,i|=8;break;case cc:return t=Nt(12,n,e,i|2),t.elementType=cc,t.lanes=s,t;case dc:return t=Nt(13,n,e,i),t.elementType=dc,t.lanes=s,t;case hc:return t=Nt(19,n,e,i),t.elementType=hc,t.lanes=s,t;case zg:return Dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:o=10;break e;case $g:o=9;break e;case Dd:o=11;break e;case Md:o=14;break e;case Fn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Dl(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=zg,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function zu(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _h(t,e,n,r,i,s,o,a,l){return t=new gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(s),t}function _x(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ov(t){if(!t)return hr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(_t(n))return O_(t,n,e)}return e}function Lv(t,e,n,r,i,s,o,a,l){return t=_h(n,r,!0,t,i,s,o,a,l),t.context=Ov(null),n=t.current,r=st(),i=rr(n),s=yn(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,_o(t,i,r),vt(t,r),t}function Ml(t,e,n,r){var i=e.current,s=st(),o=rr(i);return n=Ov(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(Ht(t,i,o,s),fa(t,i,o)),o}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $p(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vh(t,e){$p(t,e),(t=t.alternate)&&$p(t,e)}function vx(){return null}var Dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function yh(t){this._internalRoot=t}jl.prototype.render=yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Ml(t,e,null,null)};jl.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Ml(null,t,null,null)}),e[kn]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&p_(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function yx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ka(o);s.call(u)}}var o=Lv(e,r,t,0,null,!1,!1,"",zp);return t._reactRootContainer=o,t[kn]=o.current,qs(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ka(l);a.call(u)}}var l=_h(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=l,t[kn]=l.current,qs(t.nodeType===8?t.parentNode:t),Br(function(){Ml(e,l,n,r)}),l}function Fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ka(o);a.call(l)}}Ml(e,o,t,i)}else o=yx(n,e,t,i,r);return Ka(o)}c_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ys(e.pendingLanes);n!==0&&(Fd(e,n|1),vt(e,Ae()),!(re&6)&&(Ui=Ae()+500,wr()))}break;case 13:Br(function(){var r=Tn(t,1);if(r!==null){var i=st();Ht(r,t,1,i)}}),vh(t,1)}};Bd=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=st();Ht(e,t,134217728,n)}vh(t,134217728)}};d_=function(t){if(t.tag===13){var e=rr(t),n=Tn(t,e);if(n!==null){var r=st();Ht(n,t,e,r)}vh(t,e)}};h_=function(){return oe};f_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Sc=function(t,e,n){switch(e){case"input":if(mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nl(r);if(!i)throw Error(T(90));Vg(r),mc(r,i)}}}break;case"textarea":Gg(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};Zg=fh;e_=Br;var wx={usingClientEntryPoint:!1,Events:[yo,fi,Nl,Xg,Jg,fh]},ds={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ex={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r_(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||vx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{kl=na.inject(Ex),tn=na}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wx;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error(T(200));return _x(t,e,null,n)};kt.createRoot=function(t,e){if(!wh(t))throw Error(T(299));var n=!1,r="",i=Dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_h(t,1,!1,null,null,n,!1,r,i),t[kn]=e.current,qs(t.nodeType===8?t.parentNode:t),new yh(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=r_(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return Br(t)};kt.hydrate=function(t,e,n){if(!Ul(e))throw Error(T(200));return Fl(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!wh(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lv(e,null,t,1,n??null,i,!1,s,o),t[kn]=e.current,qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};kt.render=function(t,e,n){if(!Ul(e))throw Error(T(200));return Fl(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(T(40));return t._reactRootContainer?(Br(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};kt.unstable_batchedUpdates=fh;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ul(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Fl(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function Mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mv)}catch(t){console.error(t)}}Mv(),Mg.exports=kt;var Sx=Mg.exports,Wp=Sx;lc.createRoot=Wp.createRoot,lc.hydrateRoot=Wp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},no.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Vp="popstate";function xx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return td("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qa(i)}return kx(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Cx(){return Math.random().toString(36).substr(2,8)}function Hp(t,e){return{usr:t.state,key:t.key,idx:e}}function td(t,e,n,r){return n===void 0&&(n=null),no({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ki(e):e,{state:n,key:e&&e.key||r||Cx()})}function Qa(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ki(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function kx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qn.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(no({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Qn.Pop;let E=h(),m=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:m})}function f(E,m){a=Qn.Push;let p=td(y.location,E,m);u=h()+1;let _=Hp(p,u),S=y.createHref(p);try{o.pushState(_,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function g(E,m){a=Qn.Replace;let p=td(y.location,E,m);u=h();let _=Hp(p,u),S=y.createHref(p);o.replaceState(_,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function v(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:Qa(E);return p=p.replace(/ $/,"%20"),Oe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Vp,d),l=E,()=>{i.removeEventListener(Vp,d),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(E){return o.go(E)}};return y}var Gp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gp||(Gp={}));function Tx(t,e,n){return n===void 0&&(n="/"),Ix(t,e,n)}function Ix(t,e,n,r){let i=typeof e=="string"?Ki(e):e,s=Eh(i.pathname||"/",n);if(s==null)return null;let o=Uv(t);bx(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=Bx(s);a=jx(o[l],u)}return a}function Uv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Uv(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Dx(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Fv(s.path))i(s,o,l)}),e}function Fv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function bx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Mx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Nx=/^:[\w-]+$/,Rx=3,Px=2,Ax=1,Ox=10,Lx=-2,qp=t=>t==="*";function Dx(t,e){let n=t.split("/"),r=n.length;return n.some(qp)&&(r+=Lx),e&&(r+=Px),n.filter(i=>!qp(i)).reduce((i,s)=>i+(Nx.test(s)?Rx:s===""?Ax:Ox),r)}function Mx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=Ux({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),f=l.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:sr([s,d.pathname]),pathnameBase:Vx(sr([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=sr([s,d.pathnameBase]))}return o}function Ux(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Fx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:f,isOptional:g}=h;if(f==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Fx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Bx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Eh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function $x(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ki(t):t;return{pathname:n?n.startsWith("/")?n:zx(n,e):e,search:Hx(r),hash:Gx(i)}}function zx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sh(t,e){let n=Wx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ki(t):(i=no({},t),Oe(!i.pathname||!i.pathname.includes("?"),Wu("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Wu("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Wu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=$x(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const sr=t=>t.join("/").replace(/\/\/+/g,"/"),Vx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Hx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Gx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Bv=["post","put","patch","delete"];new Set(Bv);const Kx=["get",...Bv];new Set(Kx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ro.apply(this,arguments)}const Ch=w.createContext(null),Qx=w.createContext(null),Er=w.createContext(null),Bl=w.createContext(null),An=w.createContext({outlet:null,matches:[],isDataRoute:!1}),$v=w.createContext(null);function Yx(t,e){let{relative:n}=e===void 0?{}:e;Qi()||Oe(!1);let{basename:r,navigator:i}=w.useContext(Er),{hash:s,pathname:o,search:a}=Wv(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Qi(){return w.useContext(Bl)!=null}function Eo(){return Qi()||Oe(!1),w.useContext(Bl).location}function zv(t){w.useContext(Er).static||w.useLayoutEffect(t)}function Lt(){let{isDataRoute:t}=w.useContext(An);return t?cC():Xx()}function Xx(){Qi()||Oe(!1);let t=w.useContext(Ch),{basename:e,future:n,navigator:r}=w.useContext(Er),{matches:i}=w.useContext(An),{pathname:s}=Eo(),o=JSON.stringify(Sh(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return zv(()=>{a.current=!0}),w.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=xh(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:sr([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}function Jx(){let{matches:t}=w.useContext(An),e=t[t.length-1];return e?e.params:{}}function Wv(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(Er),{matches:i}=w.useContext(An),{pathname:s}=Eo(),o=JSON.stringify(Sh(i,r.v7_relativeSplatPath));return w.useMemo(()=>xh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Zx(t,e){return eC(t,e)}function eC(t,e,n,r){Qi()||Oe(!1);let{navigator:i}=w.useContext(Er),{matches:s}=w.useContext(An),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Eo(),h;if(e){var d;let E=typeof e=="string"?Ki(e):e;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||Oe(!1),h=E}else h=u;let f=h.pathname||"/",g=f;if(l!=="/"){let E=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=Tx(t,{pathname:g}),y=sC(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:sr([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:sr([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?w.createElement(Bl.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Qn.Pop}},y):y}function tC(){let t=uC(),e=qx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const nC=w.createElement(tC,null);class rC extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(An.Provider,{value:this.props.routeContext},w.createElement($v.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iC(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(Ch);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(An.Provider,{value:e},r)}function sC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Oe(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:f,errors:g}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,d,f)=>{let g,v=!1,y=null,E=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||nC,l&&(u<0&&f===0?(dC("route-fallback"),v=!0,E=null):u===f&&(v=!0,E=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let _;return g?_=y:v?_=E:d.route.Component?_=w.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=h,w.createElement(iC,{match:d,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(rC,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Vv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Vv||{}),Hv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hv||{});function oC(t){let e=w.useContext(Ch);return e||Oe(!1),e}function aC(t){let e=w.useContext(Qx);return e||Oe(!1),e}function lC(t){let e=w.useContext(An);return e||Oe(!1),e}function Gv(t){let e=lC(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function uC(){var t;let e=w.useContext($v),n=aC(),r=Gv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function cC(){let{router:t}=oC(Vv.UseNavigateStable),e=Gv(Hv.UseNavigateStable),n=w.useRef(!1);return zv(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ro({fromRouteId:e},s)))},[t,e])}const Kp={};function dC(t,e,n){Kp[t]||(Kp[t]=!0)}function hC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function fC(t){let{to:e,replace:n,state:r,relative:i}=t;Qi()||Oe(!1);let{future:s,static:o}=w.useContext(Er),{matches:a}=w.useContext(An),{pathname:l}=Eo(),u=Lt(),h=xh(e,Sh(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(h);return w.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function jt(t){Oe(!1)}function pC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1,future:a}=t;Qi()&&Oe(!1);let l=e.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:s,static:o,future:ro({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ki(r));let{pathname:h="/",search:d="",hash:f="",state:g=null,key:v="default"}=r,y=w.useMemo(()=>{let E=Eh(h,l);return E==null?null:{location:{pathname:E,search:d,hash:f,state:g,key:v},navigationType:i}},[l,h,d,f,g,v,i]);return y==null?null:w.createElement(Er.Provider,{value:u},w.createElement(Bl.Provider,{children:n,value:y}))}function mC(t){let{children:e,location:n}=t;return Zx(nd(e),n)}new Promise(()=>{});function nd(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,nd(r.props.children,s));return}r.type!==jt&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rd(){return rd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rd.apply(this,arguments)}function gC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _C(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vC(t,e){return t.button===0&&(!e||e==="_self")&&!_C(t)}const yC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wC="6";try{window.__reactRouterVersion=wC}catch{}const EC="startTransition",Qp=dE[EC];function SC(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=xx({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=w.useCallback(d=>{u&&Qp?Qp(()=>l(d)):l(d)},[l,u]);return w.useLayoutEffect(()=>o.listen(h),[o,h]),w.useEffect(()=>hC(r),[r]),w.createElement(pC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const xC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yp=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d}=e,f=gC(e,yC),{basename:g}=w.useContext(Er),v,y=!1;if(typeof u=="string"&&CC.test(u)&&(v=u,xC))try{let _=new URL(window.location.href),S=u.startsWith("//")?new URL(_.protocol+u):new URL(u),C=Eh(S.pathname,g);S.origin===_.origin&&C!=null?u=C+S.search+S.hash:y=!0}catch{}let E=Yx(u,{relative:i}),m=kC(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function p(_){r&&r(_),_.defaultPrevented||m(_)}return w.createElement("a",rd({},f,{href:v||E,onClick:y||s?r:p,ref:n,target:l}))});var Xp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xp||(Xp={}));var Jp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Jp||(Jp={}));function kC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Lt(),u=Eo(),h=Wv(t,{relative:o});return w.useCallback(d=>{if(vC(d,n)){d.preventDefault();let f=r!==void 0?r:Qa(u)===Qa(h);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,h,r,i,n,t,s,o,a])}function TC(){return c.jsxs("main",{className:"landing",children:[c.jsx("div",{className:"stars","aria-hidden":!0}),c.jsx("div",{className:"aura aura-1","aria-hidden":!0}),c.jsx("div",{className:"aura aura-2","aria-hidden":!0}),c.jsxs("section",{className:"hero",children:[c.jsx("h1",{className:"title",children:c.jsx("span",{className:"title-fill",children:"#Humanity"})}),c.jsx("p",{className:"tagline",children:"Human-verified social. No bots. No ads. No extra shit."}),c.jsxs("div",{className:"pills",role:"list",children:[c.jsxs("span",{className:"pill",role:"listitem",children:[c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"true",children:c.jsx("path",{fill:"currentColor",d:"M9.5 16.2 5.8 12.5l1.4-1.4 2.3 2.3 5.3-5.3 1.4 1.4z"})}),"Human-verified"]}),c.jsxs("span",{className:"pill",role:"listitem",children:[c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"true",children:c.jsx("path",{fill:"currentColor",d:"M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm0 18c-3.3-1.2-6-4.7-6-9V6.3l6-2.2 6 2.2V11c0 4.3-2.7 7.8-6 9z"})}),"Proof-of-personhood"]}),c.jsxs("span",{className:"pill",role:"listitem",children:[c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24","aria-hidden":"true",children:c.jsx("path",{fill:"currentColor",d:"M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h12v2H3v-2z"})}),"No ads / No bots"]})]}),c.jsxs("div",{className:"globe-wrap",children:[c.jsxs("picture",{"aria-hidden":"true",children:[c.jsx("source",{srcSet:"/humanity-globe-2560.webp",media:"(min-width:2000px)",type:"image/webp"}),c.jsx("source",{srcSet:"/humanity-globe-1920.webp",media:"(min-width:1280px)",type:"image/webp"}),c.jsx("img",{className:"globe",src:"/humanity-globe-1280.webp",alt:"",role:"presentation","aria-hidden":"true"})]}),c.jsx("svg",{className:"orbits",viewBox:"0 0 100 100","aria-hidden":"true",children:c.jsxs("g",{fill:"none",stroke:"currentColor",opacity:"0.35",strokeWidth:"0.3",children:[c.jsx("ellipse",{cx:"50",cy:"50",rx:"44",ry:"22",className:"orbit"}),c.jsx("ellipse",{cx:"50",cy:"50",rx:"36",ry:"18",className:"orbit",transform:"rotate(20 50 50)"}),c.jsx("ellipse",{cx:"50",cy:"50",rx:"30",ry:"14",className:"orbit",transform:"rotate(-18 50 50)"})]})}),c.jsx("div",{className:"vignette","aria-hidden":!0})]}),c.jsxs("div",{className:"cta",children:[c.jsx(Yp,{to:"/login",className:"btn btn-dark glow",children:"Log In"}),c.jsx(Yp,{to:"/register",className:"btn btn-primary glow",children:"Register"})]}),c.jsx("div",{className:"scroll-cue","aria-hidden":!0,children:c.jsx("span",{className:"chev"})}),c.jsxs("footer",{className:"foot",children:[c.jsx("div",{className:"foot-title",children:"Human Proof of Identity"}),c.jsxs("nav",{className:"foot-links",children:[c.jsx("a",{href:"#about",children:"About"}),c.jsx("a",{href:"#privacy",children:"Privacy"}),c.jsx("a",{href:"#terms",children:"Terms"})]})]})]}),c.jsx("style",{children:`
        :root{
          --bg:#05070c;
          --ink:#eaf0f8;
          --muted:#a4b0c7;
          --blue:#2e73ff;
          --btn-glow: rgba(46,115,255,.55);
        }
        *{box-sizing:border-box}
        html, body, #root { height:100% }
        body { margin:0; background:var(--bg); color:var(--ink); font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial }
        .landing{ position:relative; min-height:100vh; display:grid; place-items:center; overflow:hidden }

        /* Stars: two layers drifting + twinkling + occasional shooting star */
        .stars{ position:absolute; inset:0; pointer-events:none; background: var(--bg) }
        .stars::before, .stars::after{
          content:""; position:absolute; inset:-10%;
          background-image:
            radial-gradient(1.5px 1.5px at 7% 12%, rgba(255,255,255,.95) 60%, transparent 61%),
            radial-gradient(1px 1px at 18% 40%, rgba(255,255,255,.7) 60%, transparent 61%),
            radial-gradient(1.2px 1.2px at 33% 20%, rgba(255,255,255,.8) 60%, transparent 61%),
            radial-gradient(1px 1px at 42% 72%, rgba(255,255,255,.6) 60%, transparent 61%),
            radial-gradient(1.4px 1.4px at 60% 55%, rgba(255,255,255,.8) 60%, transparent 61%),
            radial-gradient(1px 1px at 76% 18%, rgba(255,255,255,.7) 60%, transparent 61%),
            radial-gradient(1.5px 1.5px at 88% 66%, rgba(255,255,255,.9) 60%, transparent 61%),
            radial-gradient(1px 1px at 95% 82%, rgba(255,255,255,.6) 60%, transparent 61%);
          animation: drift 140s linear infinite, twinkle 6s ease-in-out infinite alternate;
          opacity:.9;
        }
        .stars::after{
          filter: blur(.6px);
          opacity:.55;
          animation-duration: 200s, 8s;
        }
        /* shooting star */
        .stars::marker { content:"" } /* keep validators calm */
        .stars span { display:none }   /* not used; placeholder */
        .stars::before {
          mask:
            linear-gradient(90deg, transparent 0 70%, #000 70% 100%);
        }
        .stars::after{
          --shoot-x: 110%;
          --shoot-y: -10%;
        }
        .stars::after:where(:not(:empty)){} /* no-op for specificity */

        /* subtle aurora glows */
        .aura{ position:absolute; inset:auto; width:140vmax; height:140vmax; border-radius:50%; filter:blur(120px); opacity:.18; pointer-events:none; }
        .aura-1{ top:-70vmax; left:50%; transform:translateX(-50%); background:radial-gradient(circle at 50% 50%, rgba(46,115,255,.6), transparent 60%) }
        .aura-2{ bottom:-80vmax; left:-40vmax; background:radial-gradient(circle at 40% 60%, rgba(0,180,255,.45), transparent 60%) }

        /* header */
        .hero{ position:relative; z-index:1; width:100%; max-width:1100px; padding:6rem 1rem 3rem; display:flex; flex-direction:column; align-items:center; text-align:center; gap:1rem }
        .title{ margin:0; line-height:.98 }
        .title-fill{
          font-weight:900; letter-spacing:.01em; display:inline-block;
          font-size: clamp(52px, 9vw, 98px);
          background: linear-gradient(92deg, #fff, #9ec1ff, #7ab0ff, #fff);
          background-size: 200% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          text-shadow: 0 8px 40px rgba(46,115,255,.35), 0 2px 0 rgba(0,0,0,.3);
          animation: sheen 8s ease-in-out infinite;
        }
        @keyframes sheen { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

        .tagline{ margin:0; font-size: clamp(16px, 2.2vw, 22px); color:var(--muted); text-shadow: 0 2px 14px rgba(0,0,0,.5) }

        /* pills */
        .pills{ display:flex; gap:.6rem; flex-wrap:wrap; justify-content:center; margin-top:.25rem }
        .pill{
          display:inline-flex; align-items:center; gap:.45rem;
          padding:.5rem .8rem; border-radius:999px;
          background: rgba(14,18,28,.55); border:1px solid rgba(255,255,255,.12);
          color: #cfe1ff; font-weight:700; font-size:.92rem; letter-spacing:.01em;
          box-shadow: inset 0 0 0 1px rgba(46,115,255,.12), 0 6px 20px rgba(0,0,0,.25);
          backdrop-filter: blur(6px);
        }
        .pill svg{ opacity:.9 }

        /* globe + orbits */
        .globe-wrap{ position:relative; width:min(92vw, 900px); margin-top:.35rem }
        .globe{
          width:100%; height:auto; display:block; user-select:none;
          filter: drop-shadow(0 28px 68px rgba(14, 34, 66, .55))
                  drop-shadow(0 18px 40px rgba(46,115,255,.28));
          animation: float 14s ease-in-out infinite;
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

        .orbits{
          position:absolute; inset:0; width:100%; height:100%; color:#7fb2ff;
          mix-blend-mode:screen; pointer-events:none;
        }
        .orbit{
          stroke-dasharray: 3 2;
          animation: dash 9s linear infinite;
        }
        .orbit:nth-child(2){ animation-duration: 11s; opacity:.4 }
        .orbit:nth-child(3){ animation-duration: 13s; opacity:.35 }
        @keyframes dash { to { stroke-dashoffset: -50 } }

        .vignette{
          position:absolute; inset:0; pointer-events:none;
          background: radial-gradient(ellipse at 50% 55%, rgba(0,0,0,0) 40%, rgba(0,0,0,.22) 72%, rgba(0,0,0,.36) 100%);
          mix-blend-mode:multiply;
        }

        /* buttons */
        .cta{ display:flex; gap:1rem; flex-wrap:wrap; justify-content:center; margin-top:.65rem }
        .btn{
          padding: .95rem 1.5rem; border-radius:14px; font-weight:800; letter-spacing:.02em;
          text-decoration:none; border:1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(6px);
          transition: transform .12s ease, box-shadow .25s ease, background .2s ease, border-color .2s ease, filter .25s ease;
          will-change: transform, box-shadow, filter;
          outline: none;
        }
        .btn:focus-visible{ box-shadow: 0 0 0 4px rgba(46,115,255,.35) }
        .btn:active{ transform: translateY(1px) }

        .glow{
          box-shadow:
            0 0 0 0 var(--btn-glow),
            0 10px 30px rgba(0,0,0,.35);
          filter: drop-shadow(0 6px 16px rgba(46,115,255,.25));
        }
        .glow:hover{
          box-shadow:
            0 0 18px 6px var(--btn-glow),
            0 16px 34px rgba(0,0,0,.45);
          filter: drop-shadow(0 10px 28px rgba(46,115,255,.35));
        }

        .btn-dark{ background: rgba(12,16,26,.65); color: rgba(234,240,248, .92) }
        .btn-dark:hover{ background: rgba(22,28,42,.78); border-color: rgba(255,255,255,.18) }
        .btn-primary{ background: var(--blue); color:#fff; border-color: rgba(255,255,255,.18); text-shadow: 0 1px 0 rgba(0,0,0,.25) }
        .btn-primary:hover{ background: #3a7dff }

        /* scroll cue */
        .scroll-cue{ margin-top:.1rem; height:28px; display:grid; place-items:center; opacity:.75 }
        .chev{
          width: 10px; height: 10px; border-bottom:2px solid #7fb2ff; border-right:2px solid #7fb2ff;
          transform: rotate(45deg); display:block;
          animation: bob 2.6s ease-in-out infinite;
        }
        @keyframes bob { 0%,100%{transform: translateY(0) rotate(45deg)} 50%{transform: translateY(6px) rotate(45deg)} }

        /* footer */
        .foot{ margin-top:1.2rem; display:flex; flex-direction:column; align-items:center; gap:.45rem; opacity:.95 }
        .foot-title{ color:var(--muted); font-size:14px; letter-spacing:.02em }
        .foot-links{ display:flex; gap:1rem }
        .foot-links a{ color:var(--muted); text-decoration:none; font-size:14px }
        .foot-links a:hover{ color:var(--ink) }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce){
          .title-fill, .stars::before, .stars::after, .globe, .orbit, .chev { animation: none !important }
        }
      `})]})}var Zp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Yi(e)},Yi=function(t){return new Error("Firebase Database ("+qv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[h],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new bC;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qv=function(t){const e=Kv(t);return kh.encodeByteArray(e,!0)},Ya=function(t){return Qv(t).replace(/\./g,"")},Xa=function(t){try{return kh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t){return Yv(void 0,t)}function Yv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!RC(n)||(t[n]=Yv(t[n],e[n]));return t}function RC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=()=>PC().__FIREBASE_DEFAULTS__,OC=()=>{if(typeof process>"u"||typeof Zp>"u")return;const t=Zp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xa(t[1]);return e&&JSON.parse(e)},Th=()=>{try{return AC()||OC()||LC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xv=t=>{var e,n;return(n=(e=Th())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jv=t=>{const e=Xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zv=()=>{var t;return(t=Th())===null||t===void 0?void 0:t.config},ey=t=>{var e;return(e=Th())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ih(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function DC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ny(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jC(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UC(){return qv.NODE_ADMIN===!0}function FC(){try{return typeof indexedDB=="object"}catch{return!1}}function BC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function VA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$C,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,So.prototype.create)}}class So{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new On(i,a,r)}}function zC(t,e){return t.replace(WC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){return JSON.parse(t)}function Fe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=io(Xa(s[0])||""),n=io(Xa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},VC=function(t){const e=ry(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},HC=function(t){const e=ry(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ja(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(em(s)&&em(o)){if(!Za(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function em(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Es(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),h=1518500249):(u=s^o^a,h=1859775393):d<60?(u=s&o|a&(s|o),h=2400959708):(u=s^o^a,h=3395469782);const f=(i<<5|i>>>27)+u+l+h+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function qC(t,e){const n=new KC(t,e);return n.subscribe.bind(n)}class KC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vu),i.error===void 0&&(i.error=Vu),i.complete===void 0&&(i.complete=Vu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vu(){}function $l(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=1e3,JC=2,ZC=4*60*60*1e3,ek=.5;function HA(t,e=XC,n=JC){const r=e*Math.pow(n,t),i=Math.round(ek*r*(Math.random()-.5)*2);return Math.min(ZC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rk(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nk(t){return t===Ir?void 0:t}function rk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const sk={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},ok=le.INFO,ak={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},lk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ak[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bh{constructor(e){this.name=e,this._logLevel=ok,this._logHandler=lk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const uk=(t,e)=>e.some(n=>t instanceof n);let tm,nm;function ck(){return tm||(tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dk(){return nm||(nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iy=new WeakMap,sd=new WeakMap,sy=new WeakMap,Hu=new WeakMap,Nh=new WeakMap;function hk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iy.set(n,t)}).catch(()=>{}),Nh.set(e,t),e}function fk(t){if(sd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sd.set(t,e)}let od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pk(t){od=t(od)}function mk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gu(this),e,...n);return sy.set(r,e.sort?e.sort():[e]),or(r)}:dk().includes(t)?function(...e){return t.apply(Gu(this),e),or(iy.get(this))}:function(...e){return or(t.apply(Gu(this),e))}}function gk(t){return typeof t=="function"?mk(t):(t instanceof IDBTransaction&&fk(t),uk(t,ck())?new Proxy(t,od):t)}function or(t){if(t instanceof IDBRequest)return hk(t);if(Hu.has(t))return Hu.get(t);const e=gk(t);return e!==t&&(Hu.set(t,e),Nh.set(e,t)),e}const Gu=t=>Nh.get(t);function _k(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const vk=["get","getKey","getAll","getAllKeys","count"],yk=["put","add","delete","clear"],qu=new Map;function rm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qu.get(e))return qu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qu.set(e,s),s}pk(t=>({...t,get:(e,n,r)=>rm(e,n)||t.get(e,n,r),has:(e,n)=>!!rm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ek(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ek(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ad="@firebase/app",im="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new bh("@firebase/app"),Sk="@firebase/app-compat",xk="@firebase/analytics-compat",Ck="@firebase/analytics",kk="@firebase/app-check-compat",Tk="@firebase/app-check",Ik="@firebase/auth",bk="@firebase/auth-compat",Nk="@firebase/database",Rk="@firebase/data-connect",Pk="@firebase/database-compat",Ak="@firebase/functions",Ok="@firebase/functions-compat",Lk="@firebase/installations",Dk="@firebase/installations-compat",Mk="@firebase/messaging",jk="@firebase/messaging-compat",Uk="@firebase/performance",Fk="@firebase/performance-compat",Bk="@firebase/remote-config",$k="@firebase/remote-config-compat",zk="@firebase/storage",Wk="@firebase/storage-compat",Vk="@firebase/firestore",Hk="@firebase/vertexai-preview",Gk="@firebase/firestore-compat",qk="firebase",Kk="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="[DEFAULT]",Qk={[ad]:"fire-core",[Sk]:"fire-core-compat",[Ck]:"fire-analytics",[xk]:"fire-analytics-compat",[Tk]:"fire-app-check",[kk]:"fire-app-check-compat",[Ik]:"fire-auth",[bk]:"fire-auth-compat",[Nk]:"fire-rtdb",[Rk]:"fire-data-connect",[Pk]:"fire-rtdb-compat",[Ak]:"fire-fn",[Ok]:"fire-fn-compat",[Lk]:"fire-iid",[Dk]:"fire-iid-compat",[Mk]:"fire-fcm",[jk]:"fire-fcm-compat",[Uk]:"fire-perf",[Fk]:"fire-perf-compat",[Bk]:"fire-rc",[$k]:"fire-rc-compat",[zk]:"fire-gcs",[Wk]:"fire-gcs-compat",[Vk]:"fire-fst",[Gk]:"fire-fst-compat",[Hk]:"fire-vertex","fire-js":"fire-js",[qk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map,Yk=new Map,ud=new Map;function sm(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zr(t){const e=t.name;if(ud.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;ud.set(e,t);for(const n of so.values())sm(n,t);for(const n of Yk.values())sm(n,t);return!0}function Wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new So("app","Firebase",Xk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=Kk;function oy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=Zv()),!n)throw ar.create("no-options");const s=so.get(i);if(s){if(Za(n,s.options)&&Za(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new ik(i);for(const l of ud.values())o.addComponent(l);const a=new Jk(n,r,o);return so.set(i,a),a}function Vl(t=ld){const e=so.get(t);if(!e&&t===ld&&Zv())return oy();if(!e)throw ar.create("no-app",{appName:t});return e}function Zk(){return Array.from(so.values())}function rn(t,e,n){var r;let i=(r=Qk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(a.join(" "));return}zr(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="firebase-heartbeat-database",tT=1,oo="firebase-heartbeat-store";let Ku=null;function ay(){return Ku||(Ku=_k(eT,tT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Ku}async function nT(t){try{const n=(await ay()).transaction(oo),r=await n.objectStore(oo).get(ly(t));return await n.done,r}catch(e){if(e instanceof On)bn.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function om(t,e){try{const r=(await ay()).transaction(oo,"readwrite");await r.objectStore(oo).put(e,ly(t)),await r.done}catch(n){if(n instanceof On)bn.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function ly(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=1024,iT=30*24*60*60*1e3;class sT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=am();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=iT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=am(),{heartbeatsToSend:r,unsentEntries:i}=oT(this._heartbeatsCache.heartbeats),s=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return bn.warn(n),""}}}function am(){return new Date().toISOString().substring(0,10)}function oT(t,e=rT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FC()?BC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return om(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return om(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lm(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){zr(new fr("platform-logger",e=>new wk(e),"PRIVATE")),zr(new fr("heartbeat",e=>new sT(e),"PRIVATE")),rn(ad,im,t),rn(ad,im,"esm2017"),rn("fire-js","")}lT("");function Rh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uT=uy,cy=new So("auth","Firebase",uy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new bh("@firebase/auth");function cT(t,...e){el.logLevel<=le.WARN&&el.warn(`Auth (${Zr}): ${t}`,...e)}function wa(t,...e){el.logLevel<=le.ERROR&&el.error(`Auth (${Zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw Ph(t,...e)}function sn(t,...e){return Ph(t,...e)}function dy(t,e,n){const r=Object.assign(Object.assign({},uT()),{[e]:n});return new So("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return dy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cy.create(t,...e)}function G(t,e,...n){if(!t)throw Ph(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wa(e),new Error(e)}function Nn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dT(){return um()==="http:"||um()==="https:"}function um(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dT()||MC()||"connection"in navigator)?navigator.onLine:!0}function fT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ih()||ny()}get(){return hT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new xo(3e4,6e4);function Ln(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function an(t,e,n,r,i={}){return fy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ji(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},s);return DC()||(u.referrerPolicy="no-referrer"),hy.fetch()(py(t,t.config.apiHost,n,a),u)})}async function fy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pT),e);try{const i=new _T(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ra(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ra(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dy(t,h,u);Kt(t,h)}}catch(i){if(i instanceof On)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function Co(t,e,n,r,i={}){const s=await an(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function py(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ah(t.config,i):`${t.config.apiScheme}://${i}`}function gT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _T{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),mT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function cm(t){return t!==void 0&&t.enterprise!==void 0}class vT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yT(t,e){return an(t,"GET","/v2/recaptchaConfig",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(t,e){return an(t,"POST","/v1/accounts:delete",e)}async function my(t,e){return an(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ET(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=Oh(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:As(Qu(i.auth_time)),issuedAtTime:As(Qu(i.iat)),expirationTime:As(Qu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qu(t){return Number(t)*1e3}function Oh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xa(n);return i?JSON.parse(i):(wa("Failed to decode base64 JWT payload"),null)}catch(i){return wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dm(t){const e=Oh(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&ST(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ST({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fi(t,my(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gy(s.providerUserInfo):[],a=kT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function CT(t){const e=ve(t);await tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gy(t){return t.map(e=>{var{providerId:n}=e,r=Rh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(t,e){const n=await fy(t,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=py(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IT(t,e){return an(t,"POST","/v2/accounts:revokeToken",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=dm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ET(this,e)}reload(){return CT(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Fi(this,wT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:S,isAnonymous:C,providerData:b,stsTokenManager:P}=n;G(_&&P,e,"internal-error");const k=bi.fromJSON(this.name,P);G(typeof _=="string",e,"internal-error"),Un(d,e.name),Un(f,e.name),G(typeof S=="boolean",e,"internal-error"),G(typeof C=="boolean",e,"internal-error"),Un(g,e.name),Un(v,e.name),Un(y,e.name),Un(E,e.name),Un(m,e.name),Un(p,e.name);const O=new gn({uid:_,auth:e,email:f,emailVerified:S,displayName:d,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:k,createdAt:m,lastLoginAt:p});return b&&Array.isArray(b)&&(O.providerData=b.map(M=>Object.assign({},M))),E&&(O._redirectEventId=E),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new bi;i.updateFromServerResponse(n);const s=new gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new bi;a.updateFromIdToken(r);const l=new gn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=new Map;function _n(t){Nn(t instanceof Function,"Expected a class definition");let e=hm.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_y.type="NONE";const fm=_y;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ea(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ea("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(_n(fm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_n(fm);const o=Ea(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=gn._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ni(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xy(e))return"Blackberry";if(Cy(e))return"Webos";if(yy(e))return"Safari";if((e.includes("chrome/")||wy(e))&&!e.includes("edge/"))return"Chrome";if(Sy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vy(t=at()){return/firefox\//i.test(t)}function yy(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wy(t=at()){return/crios\//i.test(t)}function Ey(t=at()){return/iemobile/i.test(t)}function Sy(t=at()){return/android/i.test(t)}function xy(t=at()){return/blackberry/i.test(t)}function Cy(t=at()){return/webos/i.test(t)}function Lh(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bT(t=at()){var e;return Lh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NT(){return jC()&&document.documentMode===10}function ky(t=at()){return Lh(t)||Sy(t)||Cy(t)||xy(t)||/windows phone/i.test(t)||Ey(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e=[]){let n;switch(t){case"Browser":n=pm(at());break;case"Worker":n=`${pm(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e={}){return an(t,"GET","/v2/passwordPolicy",Ln(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=6;class OT{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mm(this),this.idTokenSubscription=new mm(this),this.beforeStateQueue=new RT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await my(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(wn(this));const n=e?ve(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PT(this),n=new OT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new So("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ty(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sr(t){return ve(t)}class mm{constructor(e){this.auth=e,this.observer=null,this.addObserver=qC(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DT(t){Hl=t}function Iy(t){return Hl.loadJS(t)}function MT(){return Hl.recaptchaEnterpriseScript}function jT(){return Hl.gapiScript}function UT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FT="recaptcha-enterprise",BT="NO_RECAPTCHA";class $T{constructor(e){this.type=FT,this.auth=Sr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(BT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=MT();l.length!==0&&(l+=a),Iy(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function gm(t,e,n,r=!1){const i=new $T(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await gm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t,e){const n=Wl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Za(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function WT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VT(t,e,n){const r=Sr(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=by(e),{host:o,port:a}=HT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),GT()}function by(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HT(t){const e=by(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_m(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_m(o)}}}function _m(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function qT(t,e){return an(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(t,e){return Co(t,"POST","/v1/accounts:signInWithPassword",Ln(t,e))}async function QT(t,e){return an(t,"POST","/v1/accounts:sendOobCode",Ln(t,e))}async function YT(t,e){return QT(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}async function JT(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Dh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nl(e,n,"signInWithPassword",KT);case"emailLink":return XT(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nl(e,r,"signUpPassword",qT);case"emailLink":return JT(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e){return Co(t,"POST","/v1/accounts:signInWithIdp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="http://localhost";class Wr extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Wr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:ZT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tI(t){const e=Es(Ss(t)).link,n=e?Es(Ss(e)).deep_link_id:null,r=Es(Ss(t)).deep_link_id;return(r?Es(Ss(r)).link:null)||r||n||e||t}class Mh{constructor(e){var n,r,i,s,o,a;const l=Es(Ss(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=eI((i=l.mode)!==null&&i!==void 0?i:null);G(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tI(e);try{return new Mh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,n){return ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mh.parseLink(n);return G(r,"argument-error"),ao._fromEmailAndCode(e,r.code,r.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ko{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ko{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ko{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return Co(t,"POST","/v1/accounts:signUp",Ln(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gn._fromIdTokenResponse(e,r,i),o=vm(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vm(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends On{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rl(e,n,r,i)}}function Ry(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rl._fromErrorAndOperation(t,s,e,r):s})}async function rI(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await Fi(t,Ry(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Oh(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py(t,e,n=!1){if(en(t.app))return Promise.reject(wn(t));const r="signIn",i=await Ry(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sI(t,e){return Py(Sr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(t){const e=Sr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Oy(t,e,n){const r=Sr(t);await nl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",YT)}async function oI(t,e,n){if(en(t.app))return Promise.reject(wn(t));const r=Sr(t),o=await nl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ay(t),l}),a=await Vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function aI(t,e,n){return en(t.app)?Promise.reject(wn(t)):sI(ve(t),Zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ay(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return an(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fi(r,lI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t,e){return ve(t).setPersistence(e)}function uI(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function cI(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function xr(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}function Gl(t){return ve(t).signOut()}async function dI(t){return ve(t).delete()}const il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(il,"1"),this.storage.removeItem(il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=1e3,fI=10;class jy extends My{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ky(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jy.type="LOCAL";const jh=jy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends My{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uy.type="SESSION";const Fy=Uy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await pI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Uh("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function gI(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function _I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yI(){return By()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="firebaseLocalStorageDb",wI=1,sl="firebaseLocalStorage",zy="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kl(t,e){return t.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function EI(){const t=indexedDB.deleteDatabase($y);return new To(t).toPromise()}function hd(){const t=indexedDB.open($y,wI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sl,{keyPath:zy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sl)?e(r):(r.close(),await EI(),e(await hd()))})})}async function ym(t,e,n){const r=Kl(t,!0).put({[zy]:e,value:n});return new To(r).toPromise()}async function SI(t,e){const n=Kl(t,!1).get(e),r=await new To(n).toPromise();return r===void 0?null:r.value}function wm(t,e){const n=Kl(t,!0).delete(e);return new To(n).toPromise()}const xI=800,CI=3;class Wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(yI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _I(),!this.activeServiceWorker)return;this.sender=new mI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hd();return await ym(e,il,"1"),await wm(e,il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ym(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kl(i,!1).getAll();return new To(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wy.type="LOCAL";const kI=Wy;new xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t,e){return e?_n(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function II(t){return Py(t.auth,new Fh(t),t.bypassAuthState)}function bI(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),iI(n,new Fh(t),t.bypassAuthState)}async function NI(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),rI(n,new Fh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return II;case"linkViaPopup":case"linkViaRedirect":return NI;case"reauthViaPopup":case"reauthViaRedirect":return bI;default:Kt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new xo(2e3,1e4);class wi extends Vy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RI.get())};e()}}wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="pendingRedirect",Sa=new Map;class AI extends Vy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sa.get(this.auth._key());if(!e){try{const r=await OI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sa.set(this.auth._key(),e)}return this.bypassAuthState||Sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OI(t,e){const n=MI(e),r=DI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LI(t,e){Sa.set(t._key(),e)}function DI(t){return _n(t._redirectPersistence)}function MI(t){return Ea(PI,t.config.apiKey,t.name)}async function jI(t,e,n=!1){if(en(t.app))return Promise.reject(wn(t));const r=Sr(t),i=TI(r,e),o=await new AI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=10*60*1e3;class FI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Em(e))}saveEventToCache(e){this.cachedEventUids.add(Em(e)),this.lastProcessedEventTime=Date.now()}}function Em(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e={}){return an(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WI=/^https?/;async function VI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $I(t);for(const n of e)try{if(HI(n))return}catch{}Kt(t,"unauthorized-domain")}function HI(t){const e=cd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WI.test(n))return!1;if(zI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new xo(3e4,6e4);function Sm(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qI(t){return new Promise((e,n)=>{var r,i,s;function o(){Sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sm(),n(sn(t,"network-request-failed"))},timeout:GI.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const a=UT("iframefcb");return on()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},Iy(`${jT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xa=null,e})}let xa=null;function KI(t){return xa=xa||qI(t),xa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new xo(5e3,15e3),YI="__/auth/iframe",XI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e1(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ah(e,XI):`https://${t.config.authDomain}/${YI}`,r={apiKey:e.apiKey,appName:t.name,v:Zr},i=ZI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ji(r).slice(1)}`}async function t1(t){const e=await KI(t),n=on().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:e1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=on().setTimeout(()=>{s(o)},QI.get());function l(){on().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r1=500,i1=600,s1="_blank",o1="http://localhost";class xm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a1(t,e,n,r=r1,i=i1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},n1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=at().toLowerCase();n&&(a=wy(u)?s1:n),vy(u)&&(e=e||o1,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(bT(u)&&a!=="_self")return l1(e||"",a),new xm(null);const d=window.open(e||"",a,h);G(d,t,"popup-blocked");try{d.focus()}catch{}return new xm(d)}function l1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="__/auth/handler",c1="emulator/auth/handler",d1=encodeURIComponent("fac");async function Cm(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zr,eventId:i};if(e instanceof Ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ko){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${d1}=${encodeURIComponent(l)}`:"";return`${h1(t)}?${Ji(a).slice(1)}${u}`}function h1({config:t}){return t.emulator?Ah(t,c1):`https://${t.authDomain}/${u1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="webStorageSupport";class f1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fy,this._completeRedirectFn=jI,this._overrideRedirectResult=LI}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cm(e,n,r,cd(),i);return a1(e,o,Uh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cm(e,n,r,cd(),i);return gI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await t1(e),r=new FI(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yu,{type:Yu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yu];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ky()||yy()||Lh()}}const p1=f1;var km="@firebase/auth",Tm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _1(t){zr(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ty(t)},u=new LT(r,i,s,l);return WT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new fr("auth-internal",e=>{const n=Sr(e.getProvider("auth").getImmediate());return(r=>new m1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(km,Tm,g1(t)),rn(km,Tm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=5*60,y1=ey("authIdTokenMaxAge")||v1;let Im=null;const w1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>y1)return;const i=n==null?void 0:n.token;Im!==i&&(Im=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function E1(t=Vl()){const e=Wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zT(t,{popupRedirectResolver:p1,persistence:[kI,jh,Fy]}),r=ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=w1(s.toString());cI(n,o,()=>o(n.currentUser)),uI(n,a=>o(a))}}const i=Xv("auth");return i&&VT(n,`http://${i}`),n}function S1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}DT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",S1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_1("Browser");const x1="modulepreload",C1=function(t){return"/"+t},bm={},Gy=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=C1(l),l in bm)return;bm[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":x1,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var k1="firebase",T1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(k1,T1,"app");var Nm={};const Rm="@firebase/database",Pm="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qy="";function I1(t){qy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:io(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b1(e)}}catch{}return new N1},Ar=Ky("localStorage"),R1=Ky("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new bh("@firebase/database"),Qy=function(){let t=1;return function(){return t++}}(),Yy=function(t){const e=YC(t),n=new GC;n.update(e);const r=n.digest();return kh.encodeByteArray(r)},Io=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Io.apply(null,r):typeof r=="object"?e+=Fe(r):e+=r,e+=" "}return e};let Os=null,Am=!0;const P1=function(t,e){I(!0,"Can't turn on custom loggers persistently."),Pi.logLevel=le.VERBOSE,Os=Pi.log.bind(Pi)},Ge=function(...t){if(Am===!0&&(Am=!1,Os===null&&R1.get("logging_enabled")===!0&&P1()),Os){const e=Io.apply(null,t);Os(e)}},bo=function(t){return function(...e){Ge(t,...e)}},fd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Io(...t);Pi.error(e)},Rn=function(...t){const e=`FIREBASE FATAL ERROR: ${Io(...t)}`;throw Pi.error(e),new Error(e)},ot=function(...t){const e="FIREBASE WARNING: "+Io(...t);Pi.warn(e)},A1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},O1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",pr="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===Hr||e===pr)return-1;if(e===Hr||t===pr)return 1;{const n=Om(t),r=Om(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},L1=function(t,e){return t===e?0:t<e?-1:1},hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Fe(e))},$h=function(t){if(typeof t!="object"||t===null)return Fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Fe(e[r]),n+=":",n+=$h(t[e[r]]);return n+="}",n},Xy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Jy=function(t){I(!Bh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},D1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},M1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function j1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const U1=new RegExp("^-?(0*)\\d{1,10}$"),F1=-2147483648,B1=2147483647,Om=function(t){if(U1.test(t)){const e=Number(t);if(e>=F1&&e<=B1)return e}return null},es=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},$1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ls=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class Ca{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ca.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="5",Zy="v",ew="s",tw="r",nw="f",rw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iw="ls",sw="p",pd="ac",ow="websocket",aw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ar.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ar.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function V1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function uw(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===ow)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===aw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);V1(t)&&(n.ns=t.namespace);const i=[];return Ye(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return NC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={},Ju={};function Wh(t){const e=t.toString();return Xu[e]||(Xu[e]=new H1),Xu[e]}function G1(t,e){const n=t.toString();return Ju[n]||(Ju[n]=e()),Ju[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&es(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="start",K1="close",Q1="pLPCommand",Y1="pRTLPCB",cw="id",dw="pw",hw="ser",X1="cb",J1="seg",Z1="ts",eb="d",tb="dframe",fw=1870,pw=30,nb=fw-pw,rb=25e3,ib=3e4;class Ei{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bo(e),this.stats_=Wh(n),this.urlFn=l=>(this.appCheckToken&&(l[pd]=this.appCheckToken),uw(n,aw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new q1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ib)),O1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vh((...s)=>{const[o,a,l,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lm)this.id=a,this.password=l;else if(o===K1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lm]="t",r[hw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[X1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Zy]=zh,this.transportSessionId&&(r[ew]=this.transportSessionId),this.lastSessionId&&(r[iw]=this.lastSessionId),this.applicationId&&(r[sw]=this.applicationId),this.appCheckToken&&(r[pd]=this.appCheckToken),typeof location<"u"&&location.hostname&&rw.test(location.hostname)&&(r[tw]=nw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ei.forceAllow_=!0}static forceDisallow(){Ei.forceDisallow_=!0}static isAvailable(){return Ei.forceAllow_?!0:!Ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!D1()&&!M1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qv(n),i=Xy(r,nb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[tb]="t",r[cw]=e,r[dw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qy(),window[Q1+this.uniqueCallbackIdentifier]=e,window[Y1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cw]=this.myID,e[dw]=this.myPW,e[hw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pw+r.length<=fw;){const o=this.pendingSegs.shift();r=r+"&"+J1+i+"="+o.seg+"&"+Z1+i+"="+o.ts+"&"+eb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(rb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=16384,ob=45e3;let ol=null;typeof MozWebSocket<"u"?ol=MozWebSocket:typeof WebSocket<"u"&&(ol=WebSocket);class $t{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bo(this.connId),this.stats_=Wh(n),this.connURL=$t.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Zy]=zh,typeof location<"u"&&location.hostname&&rw.test(location.hostname)&&(o[tw]=nw),n&&(o[ew]=n),r&&(o[iw]=r),i&&(o[pd]=i),s&&(o[sw]=s),uw(e,ow,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ar.set("previous_websocket_failure",!0);try{let r;UC(),this.mySock=new ol(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ol!==null&&!$t.forceDisallow_}static previouslyFailed(){return Ar.isInMemoryStorage||Ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ar.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=io(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Xy(n,sb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ob))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ei,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$t&&$t.isAvailable();let r=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$t];else{const i=this.transports_=[];for(const s of lo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);lo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=6e4,lb=5e3,ub=10*1024,cb=100*1024,Zu="t",Dm="d",db="s",Mm="r",hb="e",jm="o",Um="a",Fm="n",Bm="p",fb="h";class pb{constructor(e,n,r,i,s,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bo("c:"+this.id+":"),this.transportManager_=new lo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ls(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ub?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zu in e){const n=e[Zu];n===Um?this.upgradeIfSecondaryHealthy_():n===Mm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hs("t",e),r=hs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hs("t",e),r=hs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hs(Zu,e);if(Dm in e){const r=e[Dm];if(n===fb){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===db?this.onConnectionShutdown_(r):n===Mm?this.onReset_(r):n===hb?fd("Server Error: "+r):n===jm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zh!==r&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ls(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ab))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ls(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends gw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ih()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new al}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=32,zm=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new ae("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mr(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function Hh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function uo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _w(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function it(t,e){const n=X(t),r=X(e);if(n===null)return e;if(n===r)return it(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gb(t,e){const n=uo(t,0),r=uo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ei(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Gh(t,e){if(mr(t)!==mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(mr(t)>mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _b{constructor(e,n){this.errorPrefix_=n,this.parts_=uo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=zl(this.parts_[r]);vw(this)}}function vb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zl(e),vw(t)}function yb(t){const e=t.parts_.pop();t.byteLength_-=zl(e),t.parts_.length>0&&(t.byteLength_-=1)}function vw(t){if(t.byteLength_>zm)throw new Error(t.errorPrefix_+"has a key path longer than "+zm+" bytes ("+t.byteLength_+").");if(t.parts_.length>$m)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$m+") or object contains a cycle "+br(t))}function br(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends gw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qh}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=1e3,wb=60*5*1e3,Wm=30*1e3,Eb=1.3,Sb=3e4,xb="server_kill",Vm=3;class En extends mw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=En.nextPersistentConnectionId_++,this.log_=bo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=wb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&al.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Fe(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;En.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const r=$r(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||HC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=VC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fd("Unrecognized action received from server: "+Fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Sb&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Eb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+En.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new pb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ot(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(xb)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ot(d),l())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],id(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$h(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vm&&(this.reconnectDelay_=Wm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qy.replace(/\./g,"-")]=1,Ih()?e["framework.cordova"]=1:ny()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=al.getInstance().currentlyOnline();return id(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0;En.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Z(Hr,e),i=new Z(Hr,n);return this.compare(r,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia;class yw extends Ql{static get __EMPTY_NODE(){return ia}static set __EMPTY_NODE(e){ia=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw Yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(pr,ia)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,ia)}toString(){return".key"}}const lr=new yw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??ft.EMPTY_NODE,this.right=s??ft.EMPTY_NODE}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ft.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class Cb{copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ft{constructor(e,n=ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new sa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new sa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new sa(this.root_,null,this.comparator_,!0,e)}}ft.EMPTY_NODE=new Cb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t,e){return ei(t.name,e.name)}function Kh(t,e){return ei(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md;function Tb(t){md=t}const ww=function(t){return typeof t=="number"?"number:"+Jy(t):"string:"+t},Ew=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else I(t===md||t.isEmpty(),"priority of unexpected type.");I(t===md||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm;class $e{constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ew(this.priorityNode_)}static set __childrenNodeConstructor(e){Hm=e}static get __childrenNodeConstructor(){return Hm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:X(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=X(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ww(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Jy(this.value_):e+=this.value_,this.lazyHash_=Yy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(n),s=$e.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sw,xw;function Ib(t){Sw=t}function bb(t){xw=t}class Nb extends Ql{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(pr,new $e("[PRIORITY-POST]",xw))}makePost(e,n){const r=Sw(e);return new Z(n,new $e("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new Nb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=Math.log(2);class Pb{constructor(e){const n=s=>parseInt(Math.log(s)/Rb,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ll=function(t,e,n,r){t.sort(e);const i=function(l,u){const h=u-l;let d,f;if(h===0)return null;if(h===1)return d=t[l],f=n?n(d):d,new We(f,d.node,We.BLACK,null,null);{const g=parseInt(h/2,10)+l,v=i(l,g),y=i(g+1,u);return d=t[g],f=n?n(d):d,new We(f,d.node,We.BLACK,v,y)}},s=function(l){let u=null,h=null,d=t.length;const f=function(v,y){const E=d-v,m=d;d-=v;const p=i(E+1,m),_=t[E],S=n?n(_):_;g(new We(S,_.node,y,null,p))},g=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));y?f(E,We.BLACK):(f(E,We.BLACK),f(E,We.RED))}return h},o=new Pb(t.length),a=s(o);return new ft(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;const si={};class vn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(si&&Ee,"ChildrenNode.ts has not been loaded"),ec=ec||new vn({".priority":si},{".priority":Ee}),ec}get(e){const n=$r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ft?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ll(r,e.getCompare()):a=si;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new vn(h,u)}addToIndexes(e,n){const r=Ja(this.indexes_,(i,s)=>{const o=$r(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===si)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ll(a,o.getCompare())}else return si;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new vn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ja(this.indexes_,i=>{if(i===si)return i;{const s=n.get(e.name);return s?i.remove(new Z(e.name,s)):i}});return new vn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ew(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ps||(ps=new W(new ft(Kh),null,vn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ps}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ps:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ps:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=X(e);if(r===null)return n;{I(X(e)!==".priority"||mr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(he(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ww(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Yy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===No?-1:0}withIndex(e){if(e===lr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===lr?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ab extends W{constructor(){super(new ft(Kh),W.EMPTY_NODE,vn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const No=new Ab;Object.defineProperties(Z,{MIN:{value:new Z(Hr,W.EMPTY_NODE)},MAX:{value:new Z(pr,No)}});yw.__EMPTY_NODE=W.EMPTY_NODE;$e.__childrenNodeConstructor=W;Tb(No);bb(No);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=!0;function De(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new $e(n,De(e))}if(!(t instanceof Array)&&Ob){const n=[];let r=!1;if(Ye(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=De(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return W.EMPTY_NODE;const s=ll(n,kb,o=>o.name,Kh);if(r){const o=ll(n,Ee.getCompare());return new W(s,De(e),new vn({".priority":o},{".priority":Ee}))}else return new W(s,De(e),vn.Default)}else{let n=W.EMPTY_NODE;return Ye(t,(r,i)=>{if(Qt(t,r)&&r.substring(0,1)!=="."){const s=De(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(De(e))}}Ib(De);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends Ql{constructor(e){super(),this.indexPath_=e,I(!J(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}makePost(e,n){const r=De(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,No);return new Z(pr,e)}toString(){return uo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb extends Ql{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const r=De(e);return new Z(n,r)}toString(){return".value"}}const Yh=new Lb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){return{type:"value",snapshotNode:t}}function Bi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function co(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ho(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Db(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(co(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bi(n,r)):o.trackChildChange(ho(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(co(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ho(i,s,o))}else r.trackChildChange(Bi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.indexedFilter_=new Xh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fo.getStartPost_(e),this.endPost_=fo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Z(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,a)=>{s.matches(new Z(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new fo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Z(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new Z(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(h&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ho(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(co(n,d));const y=a.updateImmediateChild(n,W.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Bi(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:h&&o(u,l)>=0?(s!=null&&(s.trackChildChange(co(u.name,u.node)),s.trackChildChange(Bi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Jh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jb(t){return t.loadsAllData()?new Xh(t.getIndex()):t.hasLimit()?new Mb(t):new fo(t)}function Ub(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Fb(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Bb(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function $b(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Zh(t,e){const n=t.copy();return n.index_=e,n}function Gm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===Yh?n="$value":t.index_===lr?n="$key":(I(t.index_ instanceof Qh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Fe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Fe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Fe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Fe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends mw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ul.getListenId_(e,r),a={};this.listens_[o]=a;const l=Gm(e._queryParams);this.restRequest_(s+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),$r(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=ul.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Gm(e._queryParams),r=e._path.toString(),i=new Xi;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ji(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=io(a.responseText)}catch{ot("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ot("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){return{value:null,children:new Map}}function kw(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=X(e);t.children.has(r)||t.children.set(r,cl());const i=t.children.get(r);e=he(e),kw(i,e,n)}}function gd(t,e,n){t.value!==null?n(e,t.value):Wb(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);gd(i,s,n)})}function Wb(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=10*1e3,Hb=30*1e3,Gb=5*60*1e3;class qb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Vb(e);const r=Km+(Hb-Km)*Math.random();Ls(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ye(e,(i,s)=>{s>0&&Qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ls(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zt||(zt={}));function ef(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=zt.ACK_USER_WRITE,this.source=ef()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new dl(ie(),n,this.revert)}}else return I(X(this.path)===e,"operationForChild called for unrelated child."),new dl(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.source=e,this.path=n,this.type=zt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new po(this.source,ie()):new po(this.source,he(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=zt.OVERWRITE}operationForChild(e){return J(this.path)?new Gr(this.source,ie(),this.snap.getImmediateChild(e)):new Gr(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=zt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Gr(this.source,ie(),n.value):new $i(this.source,ie(),n)}else return I(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $i(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Qb(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Db(o.childName,o.snapshotNode))}),ms(t,i,"child_removed",e,r,n),ms(t,i,"child_added",e,r,n),ms(t,i,"child_moved",s,r,n),ms(t,i,"child_changed",e,r,n),ms(t,i,"value",e,r,n),i}function ms(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Xb(t,a,l)),o.forEach(a=>{const l=Yb(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Yb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Xb(t,e,n){if(e.childName==null||n.childName==null)throw Yi("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t,e){return{eventCache:t,serverCache:e}}function Ds(t,e,n,r){return Yl(new gr(e,n,r),t.serverCache)}function Tw(t,e,n,r){return Yl(t.eventCache,new gr(e,n,r))}function hl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;const Jb=()=>(tc||(tc=new ft(L1)),tc);class de{constructor(e,n=Jb()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return Ye(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(J(e))return null;{const r=X(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(he(e),n);return s!=null?{path:be(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=X(e),r=this.children.get(n);return r!==null?r.subtree(he(e)):new de(null)}}set(e,n){if(J(e))return new de(n,this.children);{const r=X(e),s=(this.children.get(r)||new de(null)).set(he(e),n),o=this.children.insert(r,s);return new de(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=X(e),r=this.children.get(n);if(r){const i=r.remove(he(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new de(null):new de(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=X(e),r=this.children.get(n);return r?r.get(he(e)):null}}setTree(e,n){if(J(e))return n;{const r=X(e),s=(this.children.get(r)||new de(null)).setTree(he(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new de(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=X(e),o=this.children.get(s);return o?o.findOnPath_(he(e),be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=X(e),s=this.children.get(i);return s?s.foreachOnPath_(he(e),be(n,i),r):new de(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new de(null))}}function Ms(t,e,n){if(J(e))return new Gt(new de(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=it(i,e);return s=s.updateChild(o,n),new Gt(t.writeTree_.set(i,s))}else{const i=new de(n),s=t.writeTree_.setTree(e,i);return new Gt(s)}}}function _d(t,e,n){let r=t;return Ye(n,(i,s)=>{r=Ms(r,be(e,i),s)}),r}function Qm(t,e){if(J(e))return Gt.empty();{const n=t.writeTree_.setTree(e,new de(null));return new Gt(n)}}function vd(t,e){return ti(t,e)!=null}function ti(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(it(n.path,e)):null}function Ym(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new Z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Z(r,i.value))}),e}function ur(t,e){if(J(e))return t;{const n=ti(t,e);return n!=null?new Gt(new de(n)):new Gt(t.writeTree_.subtree(e))}}function yd(t){return t.writeTree_.isEmpty()}function zi(t,e){return Iw(ie(),t.writeTree_,e)}function Iw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Iw(be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e){return Pw(e,t)}function Zb(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ms(t.visibleWrites,e,n)),t.lastWriteId=r}function eN(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=_d(t.visibleWrites,e,n),t.lastWriteId=r}function tN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rN(a,r.path)?i=!1:Rt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return iN(t),!0;if(r.snap)t.visibleWrites=Qm(t.visibleWrites,r.path);else{const a=r.children;Ye(a,l=>{t.visibleWrites=Qm(t.visibleWrites,be(r.path,l))})}return!0}else return!1}function rN(t,e){if(t.snap)return Rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rt(be(t.path,n),e))return!0;return!1}function iN(t){t.visibleWrites=bw(t.allWrites,sN,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sN(t){return t.visible}function bw(t,e,n){let r=Gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Rt(n,o)?(a=it(n,o),r=Ms(r,a,s.snap)):Rt(o,n)&&(a=it(o,n),r=Ms(r,ie(),s.snap.getChild(a)));else if(s.children){if(Rt(n,o))a=it(n,o),r=_d(r,a,s.children);else if(Rt(o,n))if(a=it(o,n),J(a))r=_d(r,ie(),s.children);else{const l=$r(s.children,X(a));if(l){const u=l.getChild(he(a));r=Ms(r,ie(),u)}}}else throw Yi("WriteRecord should have .snap or .children")}}return r}function Nw(t,e,n,r,i){if(!r&&!i){const s=ti(t.visibleWrites,e);if(s!=null)return s;{const o=ur(t.visibleWrites,e);if(yd(o))return n;if(n==null&&!vd(o,ie()))return null;{const a=n||W.EMPTY_NODE;return zi(o,a)}}}else{const s=ur(t.visibleWrites,e);if(!i&&yd(s))return n;if(!i&&n==null&&!vd(s,ie()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Rt(u.path,e)||Rt(e,u.path))},a=bw(t.allWrites,o,e),l=n||W.EMPTY_NODE;return zi(a,l)}}}function oN(t,e,n){let r=W.EMPTY_NODE;const i=ti(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ur(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=zi(ur(s,new ae(o)),a);r=r.updateImmediateChild(o,l)}),Ym(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ur(t.visibleWrites,e);return Ym(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function aN(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=be(e,n);if(vd(t.visibleWrites,s))return null;{const o=ur(t.visibleWrites,s);return yd(o)?i.getChild(n):zi(o,i.getChild(n))}}function lN(t,e,n,r){const i=be(e,n),s=ti(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ur(t.visibleWrites,i);return zi(o,r.getNode().getImmediateChild(n))}else return null}function uN(t,e){return ti(t.visibleWrites,e)}function cN(t,e,n,r,i,s,o){let a;const l=ur(t.visibleWrites,e),u=ti(l,ie());if(u!=null)a=u;else if(n!=null)a=zi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&h.length<i;)d(g,r)!==0&&h.push(g),g=f.getNext();return h}else return[]}function dN(){return{visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1}}function fl(t,e,n,r){return Nw(t.writeTree,t.treePath,e,n,r)}function rf(t,e){return oN(t.writeTree,t.treePath,e)}function Xm(t,e,n,r){return aN(t.writeTree,t.treePath,e,n,r)}function pl(t,e){return uN(t.writeTree,be(t.treePath,e))}function hN(t,e,n,r,i,s){return cN(t.writeTree,t.treePath,e,n,r,i,s)}function sf(t,e,n){return lN(t.writeTree,t.treePath,e,n)}function Rw(t,e){return Pw(be(t.treePath,e),t.writeTree)}function Pw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ho(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,co(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Bi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ho(r,e.snapshotNode,i.oldSnap));else throw Yi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Aw=new pN;class of{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new gr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qr(this.viewCache_),s=hN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){return{filter:t}}function gN(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _N(t,e,n,r,i){const s=new fN;let o,a;if(n.type===zt.OVERWRITE){const u=n;u.source.fromUser?o=wd(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!J(u.path),o=ml(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===zt.MERGE){const u=n;u.source.fromUser?o=yN(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ed(t,e,u.path,u.children,r,i,a,s))}else if(n.type===zt.ACK_USER_WRITE){const u=n;u.revert?o=SN(t,e,u.path,r,i,s):o=wN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===zt.LISTEN_COMPLETE)o=EN(t,e,n.path,r,s);else throw Yi("Unknown operation type: "+n.type);const l=s.getChanges();return vN(e,o,l),{viewCache:o,changes:l}}function vN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=hl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Cw(hl(e)))}}function Ow(t,e,n,r,i,s){const o=e.eventCache;if(pl(r,n)!=null)return e;{let a,l;if(J(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=qr(e),h=u instanceof W?u:W.EMPTY_NODE,d=rf(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=fl(r,qr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=X(n);if(u===".priority"){I(mr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=Xm(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=he(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Xm(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=sf(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,i,s):a=o.getNode()}}return Ds(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function ml(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(J(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),g,null)}else{const g=X(n);if(!l.isCompleteForPath(n)&&mr(n)>1)return e;const v=he(n),E=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=h.updatePriority(l.getNode(),E):u=h.updateChild(l.getNode(),g,E,v,Aw,null)}const d=Tw(e,u,l.isFullyInitialized()||J(n),h.filtersNodes()),f=new of(i,d,s);return Ow(t,d,n,i,f,a)}function wd(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const h=new of(i,e,s);if(J(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ds(e,u,!0,t.filter.filtersNodes());else{const d=X(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ds(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=he(n),g=a.getNode().getImmediateChild(d);let v;if(J(f))v=r;else{const y=h.getCompleteChild(d);y!=null?Hh(f)===".priority"&&y.getChild(_w(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=W.EMPTY_NODE}if(g.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),d,v,f,h,o);l=Ds(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Jm(t,e){return t.eventCache.isCompleteForChild(e)}function yN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const h=be(n,l);Jm(e,X(h))&&(a=wd(t,a,h,u,i,s,o))}),r.foreach((l,u)=>{const h=be(n,l);Jm(e,X(h))||(a=wd(t,a,h,u,i,s,o))}),a}function Zm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ed(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;J(n)?u=r:u=new de(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=Zm(t,g,f);l=ml(t,l,new ae(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),y=Zm(t,v,f);l=ml(t,l,new ae(d),y,i,s,o,a)}}),l}function wN(t,e,n,r,i,s,o){if(pl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ml(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let u=new de(null);return l.getNode().forEachChild(lr,(h,d)=>{u=u.set(new ae(h),d)}),Ed(t,e,n,u,i,s,a,o)}else return e}else{let u=new de(null);return r.foreach((h,d)=>{const f=be(n,h);l.isCompleteForPath(f)&&(u=u.set(h,l.getNode().getChild(f)))}),Ed(t,e,n,u,i,s,a,o)}}function EN(t,e,n,r,i){const s=e.serverCache,o=Tw(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return Ow(t,o,n,r,Aw,i)}function SN(t,e,n,r,i,s){let o;if(pl(r,n)!=null)return e;{const a=new of(r,e,i),l=e.eventCache.getNode();let u;if(J(n)||X(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=fl(r,qr(e));else{const d=e.serverCache.getNode();I(d instanceof W,"serverChildren would be complete if leaf node"),h=rf(r,d)}h=h,u=t.filter.updateFullNode(l,h,s)}else{const h=X(n);let d=sf(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=t.filter.updateChild(l,h,d,he(n),a,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,W.EMPTY_NODE,he(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fl(r,qr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||pl(r,ie())!=null,Ds(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xh(r.getIndex()),s=jb(r);this.processor_=mN(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(W.EMPTY_NODE,a.getNode(),null),h=new gr(l,o.isFullyInitialized(),i.filtersNodes()),d=new gr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Yl(d,h),this.eventGenerator_=new Kb(this.query_)}get query(){return this.query_}}function CN(t){return t.viewCache_.serverCache.getNode()}function kN(t){return hl(t.viewCache_)}function TN(t,e){const n=qr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function eg(t){return t.eventRegistrations_.length===0}function IN(t,e){t.eventRegistrations_.push(e)}function tg(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ng(t,e,n,r){e.type===zt.MERGE&&e.source.queryId!==null&&(I(qr(t.viewCache_),"We should always have a full cache before handling merges"),I(hl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=_N(t.processor_,i,e,n,r);return gN(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Lw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function bN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(Bi(s,o))}),n.isFullyInitialized()&&r.push(Cw(n.getNode())),Lw(t,r,n.getNode(),e)}function Lw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Qb(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;class Dw{constructor(){this.views=new Map}}function NN(t){I(!gl,"__referenceConstructor has already been defined"),gl=t}function RN(){return I(gl,"Reference.ts has not been loaded"),gl}function PN(t){return t.views.size===0}function af(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),ng(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ng(o,e,n,r));return s}}function Mw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=fl(n,i?r:null),l=!1;a?l=!0:r instanceof W?(a=rf(n,r),l=!1):(a=W.EMPTY_NODE,l=!1);const u=Yl(new gr(a,l,!1),new gr(r,i,!1));return new xN(e,u)}return o}function AN(t,e,n,r,i,s){const o=Mw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),IN(o,n),bN(o,n)}function ON(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=_r(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(tg(u,n,r)),eg(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(tg(l,n,r)),eg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!_r(t)&&s.push(new(RN())(e._repo,e._path)),{removed:s,events:o}}function jw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function cr(t,e){let n=null;for(const r of t.views.values())n=n||TN(r,e);return n}function Uw(t,e){if(e._queryParams.loadsAllData())return Jl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Fw(t,e){return Uw(t,e)!=null}function _r(t){return Jl(t)!=null}function Jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;function LN(t){I(!_l,"__referenceConstructor has already been defined"),_l=t}function DN(){return I(_l,"Reference.ts has not been loaded"),_l}let MN=1;class rg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=dN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lf(t,e,n,r,i){return Zb(t.pendingWriteTree_,e,n,r,i),i?ts(t,new Gr(ef(),e,n)):[]}function jN(t,e,n,r){eN(t.pendingWriteTree_,e,n,r);const i=de.fromObject(n);return ts(t,new $i(ef(),e,i))}function Yn(t,e,n=!1){const r=tN(t.pendingWriteTree_,e);if(nN(t.pendingWriteTree_,e)){let s=new de(null);return r.snap!=null?s=s.set(ie(),!0):Ye(r.children,o=>{s=s.set(new ae(o),!0)}),ts(t,new dl(r.path,s,n))}else return[]}function Ro(t,e,n){return ts(t,new Gr(tf(),e,n))}function UN(t,e,n){const r=de.fromObject(n);return ts(t,new $i(tf(),e,r))}function FN(t,e){return ts(t,new po(tf(),e))}function BN(t,e,n){const r=uf(t,n);if(r){const i=cf(r),s=i.path,o=i.queryId,a=it(s,e),l=new po(nf(o),a);return df(t,s,l)}else return[]}function vl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Fw(o,e))){const l=ON(o,e,n,r);PN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>_r(g));if(h&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=WN(f);for(let v=0;v<g.length;++v){const y=g[v],E=y.query,m=Ww(t,y);t.listenProvider_.startListening(js(E),mo(t,E),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(js(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(eu(f));t.listenProvider_.stopListening(js(f),g)}))}VN(t,u)}return a}function Bw(t,e,n,r){const i=uf(t,r);if(i!=null){const s=cf(i),o=s.path,a=s.queryId,l=it(o,e),u=new Gr(nf(a),l,n);return df(t,o,u)}else return[]}function $N(t,e,n,r){const i=uf(t,r);if(i){const s=cf(i),o=s.path,a=s.queryId,l=it(o,e),u=de.fromObject(n),h=new $i(nf(a),l,u);return df(t,o,h)}else return[]}function Sd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=it(f,i);s=s||cr(g,v),o=o||_r(g)});let a=t.syncPointTree_.get(i);a?(o=o||_r(a),s=s||cr(a,ie())):(a=new Dw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const y=cr(v,ie());y&&(s=s.updateImmediateChild(g,y))}));const u=Fw(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=eu(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=HN();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=Xl(t.pendingWriteTree_,i);let d=AN(a,e,n,h,s,l);if(!u&&!o&&!r){const f=Uw(a,e);d=d.concat(GN(t,e,f))}return d}function Zl(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),u=cr(a,l);if(u)return u});return Nw(i,e,s,n,!0)}function zN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const d=it(u,n);r=r||cr(h,d)});let i=t.syncPointTree_.get(n);i?r=r||cr(i,ie()):(i=new Dw,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new gr(r,!0,!1):null,a=Xl(t.pendingWriteTree_,e._path),l=Mw(i,e,a,s?o.getNode():W.EMPTY_NODE,s);return kN(l)}function ts(t,e){return $w(e,t.syncPointTree_,null,Xl(t.pendingWriteTree_,ie()))}function $w(t,e,n,r){if(J(t.path))return zw(t,e,n,r);{const i=e.get(ie());n==null&&i!=null&&(n=cr(i,ie()));let s=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=Rw(r,o);s=s.concat($w(a,l,u,h))}return i&&(s=s.concat(af(i,t,r,n))),s}}function zw(t,e,n,r){const i=e.get(ie());n==null&&i!=null&&(n=cr(i,ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Rw(r,o),h=t.operationForChild(o);h&&(s=s.concat(zw(h,a,l,u)))}),i&&(s=s.concat(af(i,t,r,n))),s}function Ww(t,e){const n=e.query,r=mo(t,n);return{hashFn:()=>(CN(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?BN(t,n._path,r):FN(t,n._path);{const s=j1(i,n);return vl(t,n,null,s)}}}}function mo(t,e){const n=eu(e);return t.queryToTagMap.get(n)}function eu(t){return t._path.toString()+"$"+t._queryIdentifier}function uf(t,e){return t.tagToQueryMap.get(e)}function cf(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function df(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Xl(t.pendingWriteTree_,e);return af(r,n,i,null)}function WN(t){return t.fold((e,n,r)=>{if(n&&_r(n))return[Jl(n)];{let i=[];return n&&(i=jw(n)),Ye(r,(s,o)=>{i=i.concat(o)}),i}})}function js(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(DN())(t._repo,t._path):t}function VN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=eu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function HN(){return MN++}function GN(t,e,n){const r=e._path,i=mo(t,e),s=Ww(t,n),o=t.listenProvider_.startListening(js(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!_r(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,d)=>{if(!J(u)&&h&&_r(h))return[Jl(h).query];{let f=[];return h&&(f=f.concat(jw(h).map(g=>g.query))),Ye(d,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const h=l[u];t.listenProvider_.stopListening(js(h),mo(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hf(n)}node(){return this.node_}}class ff{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new ff(this.syncTree_,n)}node(){return Zl(this.syncTree_,this.path_)}}const qN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ig=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return KN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QN(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},KN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},QN=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Vw=function(t,e,n,r){return mf(e,new ff(n,t),r)},pf=function(t,e,n){return mf(t,new hf(e),n)};function mf(t,e,n){const r=t.getPriority().val(),i=ig(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ig(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new $e(a,De(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new $e(i))),o.forEachChild(Ee,(a,l)=>{const u=mf(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function tu(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=X(n);for(;i!==null;){const s=$r(r.node.children,i)||{children:{},childCount:0};r=new gf(i,r,s),n=he(n),i=X(n)}return r}function ni(t){return t.node.value}function _f(t,e){t.node.value=e,xd(t)}function Hw(t){return t.node.childCount>0}function YN(t){return ni(t)===void 0&&!Hw(t)}function nu(t,e){Ye(t.node.children,(n,r)=>{e(new gf(n,t,r))})}function Gw(t,e,n,r){n&&e(t),nu(t,i=>{Gw(i,e,!0)})}function XN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Po(t){return new ae(t.parent===null?t.name:Po(t.parent)+"/"+t.name)}function xd(t){t.parent!==null&&JN(t.parent,t.name,t)}function JN(t,e,n){const r=YN(n),i=Qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=/[\[\].#$\/\u0000-\u001F\u007F]/,eR=/[\[\].#$\u0000-\u001F\u007F]/,nc=10*1024*1024,vf=function(t){return typeof t=="string"&&t.length!==0&&!ZN.test(t)},qw=function(t){return typeof t=="string"&&t.length!==0&&!eR.test(t)},tR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qw(t)},yl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bh(t)||t&&typeof t=="object"&&Qt(t,".sv")},Ao=function(t,e,n,r){r&&e===void 0||Oo($l(t,"value"),e,n)},Oo=function(t,e,n){const r=n instanceof ae?new _b(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+br(r));if(typeof e=="function")throw new Error(t+"contains a function "+br(r)+" with contents = "+e.toString());if(Bh(e))throw new Error(t+"contains "+e.toString()+" "+br(r));if(typeof e=="string"&&e.length>nc/3&&zl(e)>nc)throw new Error(t+"contains a string greater than "+nc+" utf8 bytes "+br(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ye(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!vf(o)))throw new Error(t+" contains an invalid key ("+o+") "+br(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vb(r,o),Oo(t,a,r),yb(r)}),i&&s)throw new Error(t+' contains ".value" child '+br(r)+" in addition to actual children.")}},nR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=uo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!vf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Rt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},rR=function(t,e,n,r){const i=$l(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ye(e,(o,a)=>{const l=new ae(o);if(Oo(i,a,be(n,l)),Hh(l)===".priority"&&!yl(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),nR(i,s)},yf=function(t,e,n,r){if(!qw(n))throw new Error($l(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yf(t,e,n)},ru=function(t,e){if(X(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},sR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tR(n))throw new Error($l(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Gh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Kw(t,e,n){iu(t,n),Qw(t,r=>Gh(r,e))}function Ct(t,e,n){iu(t,n),Qw(t,r=>Rt(r,e)||Rt(e,r))}function Qw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(aR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Os&&Ge("event: "+n.toString()),es(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="repo_interrupt",uR=25;class cR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cl(),this.transactionQueueTree_=new gf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dR(t,e,n){if(t.stats_=Wh(t.repoInfo_),t.forceRestClient_||$1())t.server_=new ul(t.repoInfo_,(r,i,s,o)=>{sg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>og(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new En(t.repoInfo_,e,(r,i,s,o)=>{sg(t,r,i,s,o)},r=>{og(t,r)},r=>{hR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=G1(t.repoInfo_,()=>new qb(t.stats_,t.server_)),t.infoData_=new zb,t.infoSyncTree_=new rg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ro(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wf(t,"connected",!1),t.serverSyncTree_=new rg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Ct(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Yw(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Lo(t){return qN({timestamp:Yw(t)})}function sg(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ja(n,u=>De(u));o=$N(t.serverSyncTree_,s,l,i)}else{const l=De(n);o=Bw(t.serverSyncTree_,s,l,i)}else if(r){const l=Ja(n,u=>De(u));o=UN(t.serverSyncTree_,s,l)}else{const l=De(n);o=Ro(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Wi(t,s)),Ct(t.eventQueue_,a,o)}function og(t,e){wf(t,"connected",e),e===!1&&gR(t)}function hR(t,e){Ye(e,(n,r)=>{wf(t,n,r)})}function wf(t,e,n){const r=new ae("/.info/"+e),i=De(n);t.infoData_.updateSnapshot(r,i);const s=Ro(t.infoSyncTree_,r,i);Ct(t.eventQueue_,r,s)}function su(t){return t.nextWriteId_++}function fR(t,e,n){const r=zN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=De(i).withIndex(e._queryParams.getIndex());Sd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ro(t.serverSyncTree_,e._path,s);else{const a=mo(t.serverSyncTree_,e);o=Bw(t.serverSyncTree_,e._path,s,a)}return Ct(t.eventQueue_,e._path,o),vl(t.serverSyncTree_,e,n,null,!0),s},i=>(ns(t,"get for query "+Fe(e)+" failed: "+i),Promise.reject(new Error(i))))}function pR(t,e,n,r,i){ns(t,"set",{path:e.toString(),value:n,priority:r});const s=Lo(t),o=De(n,r),a=Zl(t.serverSyncTree_,e),l=pf(o,a,s),u=su(t),h=lf(t.serverSyncTree_,e,l,u,!0);iu(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||ot("set at "+e+" failed: "+f);const y=Yn(t.serverSyncTree_,u,!v);Ct(t.eventQueue_,e,y),kd(t,i,f,g)});const d=Sf(t,e);Wi(t,d),Ct(t.eventQueue_,d,[])}function mR(t,e,n,r){ns(t,"update",{path:e.toString(),value:n});let i=!0;const s=Lo(t),o={};if(Ye(n,(a,l)=>{i=!1,o[a]=Vw(be(e,a),De(l),t.serverSyncTree_,s)}),i)Ge("update() called with empty data.  Don't do anything."),kd(t,r,"ok",void 0);else{const a=su(t),l=jN(t.serverSyncTree_,e,o,a);iu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||ot("update at "+e+" failed: "+u);const f=Yn(t.serverSyncTree_,a,!d),g=f.length>0?Wi(t,e):e;Ct(t.eventQueue_,g,f),kd(t,r,u,h)}),Ye(n,u=>{const h=Sf(t,be(e,u));Wi(t,h)}),Ct(t.eventQueue_,e,[])}}function gR(t){ns(t,"onDisconnectEvents");const e=Lo(t),n=cl();gd(t.onDisconnect_,ie(),(i,s)=>{const o=Vw(i,s,t.serverSyncTree_,e);kw(n,i,o)});let r=[];gd(n,ie(),(i,s)=>{r=r.concat(Ro(t.serverSyncTree_,i,s));const o=Sf(t,i);Wi(t,o)}),t.onDisconnect_=cl(),Ct(t.eventQueue_,ie(),r)}function _R(t,e,n){let r;X(e._path)===".info"?r=Sd(t.infoSyncTree_,e,n):r=Sd(t.serverSyncTree_,e,n),Kw(t.eventQueue_,e._path,r)}function Cd(t,e,n){let r;X(e._path)===".info"?r=vl(t.infoSyncTree_,e,n):r=vl(t.serverSyncTree_,e,n),Kw(t.eventQueue_,e._path,r)}function vR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lR)}function ns(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ge(n,...e)}function kd(t,e,n,r){e&&es(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function yR(t,e,n,r,i,s){ns(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Qy(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ef(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Oo("transaction failed: Data returned ",l,o.path),o.status=0;const u=tu(t.transactionQueueTree_,e),h=ni(u)||[];h.push(o),_f(u,h);let d;typeof l=="object"&&l!==null&&Qt(l,".priority")?(d=$r(l,".priority"),I(yl(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Zl(t.serverSyncTree_,e)||W.EMPTY_NODE).getPriority().val();const f=Lo(t),g=De(l,d),v=pf(g,a,f);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=v,o.currentWriteId=su(t);const y=lf(t.serverSyncTree_,e,v,o.currentWriteId,o.applyLocally);Ct(t.eventQueue_,e,y),ou(t,t.transactionQueueTree_)}}function Ef(t,e,n){return Zl(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function ou(t,e=t.transactionQueueTree_){if(e||au(t,e),ni(e)){const n=Jw(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&wR(t,Po(e),n)}else Hw(e)&&nu(e,n=>{ou(t,n)})}function wR(t,e,n){const r=n.map(u=>u.currentWriteId),i=Ef(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];I(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=it(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ns(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Yn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();au(t,tu(t.transactionQueueTree_,e)),ou(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)es(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ot("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Wi(t,e)}},o)}function Wi(t,e){const n=Xw(t,e),r=Po(n),i=Jw(t,n);return ER(t,i,r),r}function ER(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=it(n,l.path);let h=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(Yn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=uR)h=!0,d="maxretry",i=i.concat(Yn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Ef(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Oo("transaction failed: Data returned ",g,l.path);let v=De(g);typeof g=="object"&&g!=null&&Qt(g,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,m=Lo(t),p=pf(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=su(t),o.splice(o.indexOf(E),1),i=i.concat(lf(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Yn(t.serverSyncTree_,E,!0))}else h=!0,d="nodata",i=i.concat(Yn(t.serverSyncTree_,l.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}au(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)es(r[a]);ou(t,t.transactionQueueTree_)}function Xw(t,e){let n,r=t.transactionQueueTree_;for(n=X(e);n!==null&&ni(r)===void 0;)r=tu(r,n),e=he(e),n=X(e);return r}function Jw(t,e){const n=[];return Zw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Zw(t,e,n){const r=ni(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);nu(e,i=>{Zw(t,i,n)})}function au(t,e){const n=ni(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,_f(e,n.length>0?n:void 0)}nu(e,r=>{au(t,r)})}function Sf(t,e){const n=Po(Xw(t,e)),r=tu(t.transactionQueueTree_,e);return XN(r,i=>{rc(t,i)}),rc(t,r),Gw(r,i=>{rc(t,i)}),n}function rc(t,e){const n=ni(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?_f(e,void 0):n.length=s+1,Ct(t.eventQueue_,Po(e),i);for(let o=0;o<r.length;o++)es(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const ag=function(t,e){const n=CR(t),r=n.namespace;n.domain==="firebase.com"&&Rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},CR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=SR(t.substring(h,d)));const f=xR(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=lg.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=lg.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Fe(this.snapshot.exportVal())}}class t0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:Hh(this._path)}get ref(){return new Yt(this._repo,this._path)}get _queryIdentifier(){const e=qm(this._queryParams),n=$h(e);return n==="{}"?"default":n}get _queryObject(){return qm(this._queryParams)}isEqual(e){if(e=ve(e),!(e instanceof ln))return!1;const n=this._repo===e._repo,r=Gh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mb(this._path)}}function Cf(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Do(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===lr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Hr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==pr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Ee){if(e!=null&&!yl(e)||n!=null&&!yl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof Qh||t.getIndex()===Yh,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function n0(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Yt extends ln{constructor(e,n){super(e,n,new Jh,!1)}get parent(){const e=_w(this._path);return e===null?null:new Yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=Vi(this.ref,e);return new Kr(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Kr(i,Vi(this.ref,r),Ee)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function U(t,e){return t=ve(t),t._checkNotDeleted("ref"),e!==void 0?Vi(t._root,e):t._root}function Vi(t,e){return t=ve(t),X(t._path)===null?iR("child","path",e):yf("child","path",e),new Yt(t._repo,be(t._path,e))}function kf(t,e){t=ve(t),ru("push",t._path),Ao("push",e,t._path,!0);const n=Yw(t._repo),r=kR(n),i=Vi(t,r),s=Vi(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function un(t){return ru("remove",t._path),lu(t,null)}function lu(t,e){t=ve(t),ru("set",t._path),Ao("set",e,t._path,!1);const n=new Xi;return pR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function pt(t,e){rR("update",e,t._path);const n=new Xi;return mR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Le(t){t=ve(t);const e=new xf(()=>{}),n=new Mo(e);return fR(t._repo,t,n).then(r=>new Kr(r,new Yt(t._repo,t._path),t._queryParams.getIndex()))}class Mo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new e0("value",this,new Kr(e.snapshotNode,new Yt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new t0(this,e,n):null}matches(e){return e instanceof Mo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Tf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new t0(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=Vi(new Yt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new e0(e.type,this,new Kr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Tf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function TR(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(h,d)=>{Cd(t._repo,t,a),l(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new xf(n,s||void 0),a=new Mo(o);return _R(t._repo,t,a),()=>Cd(t._repo,t,a)}function qe(t,e,n,r){return TR(t,"value",e,n,r)}function Et(t,e,n){let r=null;const i=n?new xf(n):null;e==="value"?r=new Mo(i):e&&(r=new Tf(e,i)),Cd(t._repo,t,r)}class Cr{}class IR extends Cr{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Ao("endAt",this._value,e._path,!0);const n=$b(e._queryParams,this._value,this._key);if(n0(n),Do(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ln(e._repo,e._path,n,e._orderByCalled)}}class bR extends Cr{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Ao("startAt",this._value,e._path,!0);const n=Bb(e._queryParams,this._value,this._key);if(n0(n),Do(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ln(e._repo,e._path,n,e._orderByCalled)}}class NR extends Cr{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ln(e._repo,e._path,Ub(e._queryParams,this._limit),e._orderByCalled)}}function r0(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new NR(t)}class RR extends Cr{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ln(e._repo,e._path,Fb(e._queryParams,this._limit),e._orderByCalled)}}function wl(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new RR(t)}class PR extends Cr{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Cf(e,"orderByChild");const n=new ae(this._path);if(J(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Qh(n),i=Zh(e._queryParams,r);return Do(i),new ln(e._repo,e._path,i,!0)}}function uu(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return yf("orderByChild","path",t),new PR(t)}class AR extends Cr{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Cf(e,"orderByKey");const n=Zh(e._queryParams,lr);return Do(n),new ln(e._repo,e._path,n,!0)}}function i0(){return new AR}class OR extends Cr{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Cf(e,"orderByValue");const n=Zh(e._queryParams,Yh);return Do(n),new ln(e._repo,e._path,n,!0)}}function LR(){return new OR}class DR extends Cr{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Ao("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new IR(this._value,this._key)._apply(new bR(this._value,this._key)._apply(e))}}function MR(t,e){return new DR(t,e)}function Qr(t,...e){let n=ve(t);for(const r of e)n=r._apply(n);return n}NN(Yt);LN(Yt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="FIREBASE_DATABASE_EMULATOR_HOST",Td={};let UR=!1;function FR(t,e,n,r){t.repoInfo_=new lw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function BR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ag(s,i),a=o.repoInfo,l;typeof process<"u"&&Nm&&(l=Nm[jR]),l?(s=`http://${l}?ns=${a.namespace}`,o=ag(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new W1(t.name,t.options,e);sR("Invalid Firebase Database URL",o),J(o.path)||Rn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zR(a,t,u,new z1(t.name,n));return new WR(h,t)}function $R(t,e){const n=Td[e];(!n||n[t.key]!==t)&&Rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vR(t),delete n[t.key]}function zR(t,e,n,r){let i=Td[e.name];i||(i={},Td[e.name]=i);let s=i[t.toURLString()];return s&&Rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new cR(t,UR,n,r),i[t.toURLString()]=s,s}class WR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yt(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&($R(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rn("Cannot call "+e+" on a deleted database.")}}function VR(t=Vl(),e){const n=Wl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Jv("database");r&&HR(n,...r)}return n}function HR(t,e,n,r={}){t=ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Rn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Rn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ca(Ca.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ty(r.mockUserToken,t.app.options.projectId);s=new Ca(o)}FR(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){I1(Zr),zr(new fr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return BR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),rn(Rm,Pm,t),rn(Rm,Pm,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function s0(t,e,n){var r;if(t=ve(t),ru("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=void 0)!==null&&r!==void 0?r:!0,s=new Xi,o=(l,u,h)=>{let d=null;l?s.reject(l):(d=new Kr(h,new Yt(t._repo,t._path),Ee),s.resolve(new qR(u,d)))},a=qe(t,()=>{});return yR(t._repo,t._path,e,o,a,i),s.promise}En.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};En.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};GR();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebasestorage.googleapis.com",a0="storageBucket",KR=2*60*1e3,QR=10*60*1e3,YR=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends On{constructor(e,n,r=0){super(ic(e),`Firebase Storage: ${n} (${ic(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ic(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function ic(t){return"storage/"+t}function If(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(pe.UNKNOWN,t)}function XR(t){return new Se(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function JR(t){return new Se(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ZR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(pe.UNAUTHENTICATED,t)}function eP(){return new Se(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tP(t){return new Se(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function l0(){return new Se(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function u0(){return new Se(pe.CANCELED,"User canceled the upload/download.")}function nP(t){return new Se(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function rP(t){return new Se(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iP(){return new Se(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a0+"' property when initializing the app?")}function c0(){return new Se(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sP(){return new Se(pe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function oP(){return new Se(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function aP(t){return new Se(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function El(t){return new Se(pe.INVALID_ARGUMENT,t)}function d0(){return new Se(pe.APP_DELETED,"The Firebase app was deleted.")}function h0(t){return new Se(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Us(t,e){return new Se(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function gs(t){throw new Se(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mt.makeFromUrl(e,n)}catch{return new mt(e,"")}if(r.path==="")return r;throw rP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},y=n===o0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${E}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:g,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<_.length;S++){const C=_[S],b=C.regex.exec(e);if(b){const P=b[C.indices.bucket];let k=b[C.indices.path];k||(k=""),r=new mt(P,k),C.postModify(r);break}}if(r==null)throw nP(e);return r}}class lP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...E){u||(u=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,t(g,l())},E)}function f(){s&&clearTimeout(s)}function g(E,...m){if(u){f();return}if(E){f(),h.call(null,E,...m);return}if(l()||o){f(),h.call(null,E,...m);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,d(_)}let v=!1;function y(E){v||(v=!0,f(),!u&&(i!==null?(E||(a=2),clearTimeout(i),d(0)):E||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function cP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){return t!==void 0}function hP(t){return typeof t=="function"}function fP(t){return typeof t=="object"&&!Array.isArray(t)}function cu(t){return typeof t=="string"||t instanceof String}function ug(t){return bf()&&t instanceof Blob}function bf(){return typeof Blob<"u"}function cg(t,e,n,r){if(r<e)throw El(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw El(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function f0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Dr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dr||(Dr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,i,s,o,a,l,u,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new oa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Dr.NO_ERROR,l=s.getStatus();if(!a||p0(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Dr.ABORT;r(!1,new oa(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new oa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());dP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=If();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?d0():u0();o(l)}else{const l=l0();o(l)}};this.canceled_?n(!1,new oa(!1,null,!0)):this.backoffId_=uP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _P(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yP(t,e,n,r,i,s,o=!0){const a=f0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return _P(u,e),mP(u,n),gP(u,s),vP(u,r),new pP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function EP(...t){const e=wP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(bf())return new Blob(t);throw new Se(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){if(typeof atob>"u")throw aP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sc{constructor(e,n){this.data=e,this.contentType=n||null}}function m0(t,e){switch(t){case Wt.RAW:return new sc(g0(e));case Wt.BASE64:case Wt.BASE64URL:return new sc(_0(t,e));case Wt.DATA_URL:return new sc(kP(e),TP(e))}throw If()}function g0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function CP(t){let e;try{e=decodeURIComponent(t)}catch{throw Us(Wt.DATA_URL,"Malformed data URL.")}return g0(e)}function _0(t,e){switch(t){case Wt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Us(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Wt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Us(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=xP(e)}catch(i){throw i.message.includes("polyfill")?i:Us(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class v0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Us(Wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=IP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function kP(t){const e=new v0(t);return e.base64?_0(Wt.BASE64,e.rest):CP(e.rest)}function TP(t){return new v0(t).contentType}function IP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){let r=0,i="";ug(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ug(this.data_)){const r=this.data_,i=SP(r,e,n);return i===null?null:new hn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new hn(r,!0)}}static getBlob(...e){if(bf()){const n=e.map(r=>r instanceof hn?r.data_:r);return new hn(EP.apply(null,n))}else{const n=e.map(o=>cu(o)?m0(Wt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new hn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){let e;try{e=JSON.parse(t)}catch{return null}return fP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function w0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t,e){return e}class tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||RP}}let aa=null;function PP(t){return!cu(t)||t.length<2?t:w0(t)}function E0(){if(aa)return aa;const t=[];t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0));function e(s,o){return PP(o)}const n=new tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new tt("size");return i.xform=r,t.push(i),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),aa=t,aa}function AP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new mt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function OP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return AP(r,t),r}function S0(t,e,n){const r=y0(e);return r===null?null:OP(t,r,n)}function LP(t,e,n,r){const i=y0(e);if(i===null||!cu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),g=jo(f,n,r),v=f0({alt:"media",token:u});return g+v})[0]}function x0(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class rs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t){if(!t)throw If()}function Nf(t,e){function n(r,i){const s=S0(t,i,e);return Sn(s!==null),s}return n}function DP(t,e){function n(r,i){const s=S0(t,i,e);return Sn(s!==null),LP(s,i,t.host,t._protocol)}return n}function Uo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=eP():i=ZR():n.getStatus()===402?i=JR(t.bucket):n.getStatus()===403?i=tP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function C0(t){const e=Uo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=XR(t.path)),s.serverResponse=i.serverResponse,s}return n}function MP(t,e,n){const r=e.fullServerUrl(),i=jo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new rs(i,s,Nf(t,n),o);return a.errorHandler=C0(e),a}function jP(t,e,n){const r=e.fullServerUrl(),i=jo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new rs(i,s,DP(t,n),o);return a.errorHandler=C0(e),a}function UP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function k0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UP(null,e)),r}function FP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let S=0;S<2;S++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=k0(e,r,i),h=x0(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=hn.getBlob(d,r,f);if(g===null)throw c0();const v={name:u.fullPath},y=jo(s,t.host,t._protocol),E="POST",m=t.maxUploadRetryTime,p=new rs(y,E,Nf(t,n),m);return p.urlParams=v,p.headers=o,p.body=g.uploadData(),p.errorHandler=Uo(e),p}class Sl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Rf(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Sn(!1)}return Sn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function BP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=k0(e,r,i),a={name:o.fullPath},l=jo(s,t.host,t._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=x0(o,n),f=t.maxUploadRetryTime;function g(y){Rf(y);let E;try{E=y.getResponseHeader("X-Goog-Upload-URL")}catch{Sn(!1)}return Sn(cu(E)),E}const v=new rs(l,u,g,f);return v.urlParams=a,v.headers=h,v.body=d,v.errorHandler=Uo(e),v}function $P(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const h=Rf(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Sn(!1)}d||Sn(!1);const f=Number(d);return Sn(!isNaN(f)),new Sl(f,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new rs(n,o,s,a);return l.headers=i,l.errorHandler=Uo(e),l}const dg=256*1024;function zP(t,e,n,r,i,s,o,a){const l=new Sl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw sP();const u=l.total-l.current;let h=u;i>0&&(h=Math.min(h,i));const d=l.current,f=d+h;let g="";h===0?g="finalize":u===h?g="upload, finalize":g="upload";const v={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},y=r.slice(d,f);if(y===null)throw c0();function E(S,C){const b=Rf(S,["active","final"]),P=l.current+h,k=r.size();let O;return b==="final"?O=Nf(e,s)(S,C):O=null,new Sl(P,k,b==="final",O)}const m="POST",p=e.maxUploadRetryTime,_=new rs(n,m,E,p);return _.headers=v,_.body=y.uploadData(),_.progressCallback=a||null,_.errorHandler=Uo(t),_}const rt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function oc(t){switch(t){case"running":case"pausing":case"canceling":return rt.RUNNING;case"paused":return rt.PAUSED;case"success":return rt.SUCCESS;case"canceled":return rt.CANCELED;case"error":return rt.ERROR;default:return rt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r){if(hP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class VP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class HP extends VP{initXhr(){this.xhr_.responseType="text"}}function ai(){return new HP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=E0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(pe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(p0(i.status,[]))if(s)i=l0();else{this.sleepTime=Math.max(this.sleepTime*2,YR),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(pe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=BP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ai,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=$P(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ai,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=dg*this._chunkMultiplier,n=new Sl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=zP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ai,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){dg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=MP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ai,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=FP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ai,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=u0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=oc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new WP(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(oc(this._state)){case rt.SUCCESS:oi(this._resolve.bind(null,this.snapshot))();break;case rt.CANCELED:case rt.ERROR:const n=this._reject;oi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(oc(this._state)){case rt.RUNNING:case rt.PAUSED:e.next&&oi(e.next.bind(e,this.snapshot))();break;case rt.SUCCESS:e.complete&&oi(e.complete.bind(e))();break;case rt.CANCELED:case rt.ERROR:e.error&&oi(e.error.bind(e,this._error))();break;default:e.error&&oi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this._service=e,n instanceof mt?this._location=n:this._location=mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yr(e,n)}get root(){const e=new mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return w0(this._location.path)}get storage(){return this._service}get parent(){const e=bP(this._location.path);if(e===null)return null;const n=new mt(this._location.bucket,e);return new Yr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw h0(e)}}function GP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new T0(t,new hn(e),n)}function qP(t){t._throwIfRoot("getDownloadURL");const e=jP(t.storage,t._location,E0());return t.storage.makeRequestWithTokens(e,ai).then(n=>{if(n===null)throw oP();return n})}function KP(t,e){const n=NP(t._location.path,e),r=new mt(t._location.bucket,n);return new Yr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){return/^[A-Za-z]+:\/\//.test(t)}function YP(t,e){return new Yr(t,e)}function I0(t,e){if(t instanceof Pf){const n=t;if(n._bucket==null)throw iP();const r=new Yr(n,n._bucket);return e!=null?I0(r,e):r}else return e!==void 0?KP(t,e):t}function XP(t,e){if(e&&QP(e)){if(t instanceof Pf)return YP(t,e);throw El("To use ref(service, url), the first argument must be a Storage instance.")}else return I0(t,e)}function hg(t,e){const n=e==null?void 0:e[a0];return n==null?null:mt.makeFromBucketSpec(n,t)}function JP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ty(i,t.app.options.projectId))}class Pf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=o0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KR,this._maxUploadRetryTime=QR,this._requests=new Set,i!=null?this._bucket=mt.makeFromBucketSpec(i,this._host):this._bucket=hg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mt.makeFromBucketSpec(this._url,e):this._bucket=hg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new lP(d0());{const o=yP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const fg="@firebase/storage",pg="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="storage";function du(t,e,n){return t=ve(t),GP(t,e,n)}function hu(t){return t=ve(t),qP(t)}function fu(t,e){return t=ve(t),XP(t,e)}function N0(t=Vl(),e){t=ve(t);const r=Wl(t,b0).getImmediate({identifier:e}),i=Jv("storage");return i&&R0(r,...i),r}function R0(t,e,n,r={}){JP(t,e,n,r)}function ZP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Pf(n,r,i,e,Zr)}function eA(){zr(new fr(b0,ZP,"PUBLIC").setMultipleInstances(!0)),rn(fg,pg,""),rn(fg,pg,"esm2017")}eA();const tA=Object.freeze(Object.defineProperty({__proto__:null,StorageError:Se,get StorageErrorCode(){return pe},StringFormat:Wt,_FbsBlob:hn,_Location:mt,_TaskState:rt,_UploadTask:T0,_dataFromString:m0,_invalidArgument:El,_invalidRootOperation:h0,connectStorageEmulator:R0,getDownloadURL:hu,getStorage:N0,ref:fu,uploadBytesResumable:du},Symbol.toStringTag,{value:"Module"})),nA={apiKey:"AIzaSyBT7P7DAfV-I9ESe6f9Jdp5ioCyGIK0d9A",authDomain:"hashhumanity-58b9a.firebaseapp.com",databaseURL:"https://hashhumanity-58b9a-default-rtdb.firebaseio.com",projectId:"hashhumanity-58b9a",storageBucket:"hashhumanity-58b9a.firebasestorage.app",messagingSenderId:"886745899016",appId:"1:886745899016:web:2b0f7e043c2434379d71bd",measurementId:"G-3ZTCXL4374"},pu=Zk().length?Vl():oy(nA),_e=E1(pu),F=VR(pu),mu=N0(pu,"gs://hashhumanity-58b9a.firebasestorage.app");let rA=null;typeof window<"u"&&Gy(()=>import("./index.esm-B4lgOKsi.js"),[]).then(async({getAnalytics:t,isSupported:e})=>{try{await e()&&(rA=t(pu))}catch{}});var Sg,xg;(xg=(Sg=import.meta)==null?void 0:Sg.env)!=null&&xg.DEV&&Gy(async()=>{const{ref:t}=await Promise.resolve().then(()=>tA);return{ref:t}},void 0).then(({ref:t})=>{console.log("Storage root =",t(mu).toString())});function iA(){const t=Lt(),e=w.useRef(null),[n,r]=w.useState(""),[i,s]=w.useState(""),[o,a]=w.useState(!1),[l,u]=w.useState(""),[h,d]=w.useState(""),f=w.useMemo(()=>{const y="0123456789ABCDEF";return(m=>Array.from({length:m},()=>Array.from({length:48},()=>y[Math.floor(Math.random()*16)]).join("")))(24)},[]);w.useEffect(()=>{function y(E){var m;E.key==="Enter"&&!o&&((m=e.current)==null||m.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0})))}return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[o]);async function g(y){if(y.preventDefault(),u(""),d(""),!n.trim()||!i){u("Email and password are required.");return}a(!0);try{await Dy(_e,jh);const E=await aI(_e,n.trim(),i);await E.user.getIdToken(!0);const m=await E.user.getIdToken();t("/universe",{replace:!0})}catch(E){const m=(E==null?void 0:E.code)||"unknown";u({"auth/invalid-email":"That email looks invalid.","auth/user-disabled":"This account is disabled.","auth/user-not-found":"No account found with that email.","auth/wrong-password":"Wrong password.","auth/too-many-requests":"Too many attempts. Try later."}[m]||`Login failed: ${m}`)}finally{a(!1)}}async function v(){if(u(""),d(""),!n.trim()){u("Type your email first, then hit ‘Forgot password’.");return}try{await Oy(_e,n.trim()),d("Reset link sent. Check your inbox (and spam).")}catch(y){const E=(y==null?void 0:y.code)||"unknown";u({"auth/invalid-email":"That email looks invalid.","auth/user-not-found":"No account found with that email."}[E]||`Couldn’t send reset email: ${E}`)}}return c.jsxs("main",{className:"login-wrap",children:[c.jsx("div",{className:"grid-bg","aria-hidden":!0}),c.jsxs("svg",{className:"geo",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":!0,children:[c.jsxs("g",{stroke:"rgba(120,170,255,.35)",strokeWidth:"0.6",fill:"none",strokeLinecap:"square",strokeLinejoin:"miter",children:[c.jsx("path",{className:"dash",d:"M10 18H30V38H50V58H70V78H90"}),c.jsx("path",{className:"dash",d:"M18 90V70H38V50H58V30H78V10"}),c.jsx("rect",{x:"12",y:"12",width:"14",height:"14"}),c.jsx("rect",{x:"32",y:"32",width:"14",height:"14"}),c.jsx("rect",{x:"52",y:"52",width:"14",height:"14"}),c.jsx("rect",{x:"72",y:"72",width:"14",height:"14"}),c.jsx("rect",{x:"72",y:"12",width:"14",height:"14"}),c.jsx("rect",{x:"12",y:"72",width:"14",height:"14"})]}),c.jsxs("g",{stroke:"rgba(60,200,255,.7)",strokeWidth:"0.4",fill:"none",children:[c.jsx("rect",{className:"pulse",x:"44",y:"20",width:"8",height:"8"}),c.jsx("rect",{className:"pulse",x:"20",y:"44",width:"8",height:"8"}),c.jsx("rect",{className:"pulse",x:"68",y:"44",width:"8",height:"8"})]})]}),c.jsx("div",{className:"cipher","aria-hidden":!0,children:f.map((y,E)=>c.jsx("div",{className:"row",children:y},E))}),c.jsxs("form",{className:"card",ref:e,onSubmit:g,noValidate:!0,children:[c.jsxs("header",{className:"header",children:[c.jsx("div",{className:"logo",children:"#Humanity"}),c.jsx("div",{className:"ver",children:"v0.1"})]}),c.jsx("h2",{className:"title",children:"Log in"}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Email"}),c.jsx("input",{type:"email",autoComplete:"email",value:n,onChange:y=>r(y.target.value),required:!0,inputMode:"email"})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Password"}),c.jsx("input",{type:"password",autoComplete:"current-password",value:i,onChange:y=>s(y.target.value),required:!0})]}),c.jsx("div",{className:"row-actions",children:c.jsx("button",{type:"button",className:"link",onClick:v,children:"Forgot password?"})}),l?c.jsx("div",{className:"alert error",children:l}):null,h?c.jsx("div",{className:"alert ok",children:h}):null,c.jsx("div",{className:"actions",children:c.jsx("button",{className:"btn primary glow",type:"submit",disabled:o,children:o?"Signing in…":"Log In"})})]}),c.jsx("style",{children:`
        :root{
          --bg:#06080E;
          --ink:#EAF0F8;
          --muted:#A7B3C6;
          --line:#1C2738;
          --grid:#0E1624;
          --accent:#2E73FF;
          --accent-2:#28D7FF;
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Menlo,monospace}

        .login-wrap{
          position:relative; min-height:100vh; overflow:hidden;
          display:grid; place-items:center; padding: clamp(2rem, 4vw, 4rem) 1rem;
          background: var(--bg);
        }

        /* Layer 1: square grid (no rounded corners, pure right angles) */
        .grid-bg{
          position:absolute; inset:-2px; z-index:0; pointer-events:none;
          background:
            repeating-linear-gradient(to right, var(--grid) 0 1px, transparent 1px 40px),
            repeating-linear-gradient(to bottom, var(--grid) 0 1px, transparent 1px 40px),
            linear-gradient(#05070C, #05070C);
        }
        /* faint scanline sweep for a “lab display” feel */
        .grid-bg::after{
          content:""; position:absolute; inset:0; pointer-events:none;
          background: linear-gradient(90deg, transparent 0%, rgba(40,215,255,.065) 48%, transparent 100%);
          mix-blend-mode: screen;
          animation: sweep 8s linear infinite;
        }
        @keyframes sweep { from { transform: translateX(-100%) } to { transform: translateX(100%) } }

        /* Layer 2: geometry SVG (squares + connectors) */
        .geo{
          position:absolute; inset:0; z-index:0; pointer-events:none;
          opacity:.55;
        }
        .dash{ stroke-dasharray: 2 2; animation: dash 16s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -200 } }
        .pulse{ animation: pulse 3.6s ease-in-out infinite }
        @keyframes pulse {
          0%,100% { opacity:.25 }
          50% { opacity:.85 }
        }

        /* Layer 3: cipher wall (hard-edged monospace hex, square layout) */
        .cipher{
          position:absolute; inset:0; z-index:0; pointer-events:none;
          display:grid; grid-template-rows: repeat(24, 1fr); padding: 2vh 5vw;
          opacity:.12; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: clamp(10px, 1.6vw, 14px);
          line-height: 1.2;
          color: #7FB2FF;
        }
        .cipher .row{
          white-space: nowrap; overflow: hidden; text-overflow: clip;
        }

        /* CARD — all sharp edges (no border-radius) */
        .card{
          position:relative; z-index:1; width:min(92vw, 480px);
          padding: 1.6rem; border:1px solid #1E2A41; background:
            linear-gradient(180deg, rgba(10,14,22,.92), rgba(7,10,17,.85));
          box-shadow:
            0 0 0 1px rgba(46,115,255,.10) inset,
            0 30px 80px rgba(0,0,0,.55);
          backdrop-filter: blur(10px) saturate(120%);
        }
        .card, .btn, .field input, .link, .actions, .row-actions { border-radius: 0 !important; } /* enforce sharp edges */

        .header{
          display:flex; justify-content:space-between; align-items:center; margin-bottom:.25rem;
          border-bottom: 1px solid #1E2A41; padding-bottom:.6rem;
        }
        .logo{
          font-weight:900; letter-spacing:.02em; text-transform:none;
          color:#EAF0F8;
        }
        .ver{
          font-family: ui-monospace, Menlo, Consolas, monospace;
          font-size:.85rem; color:#7FB2FF;
          padding:.2rem .3rem; border:1px solid #1E2A41;
          background: rgba(12,18,28,.7);
        }
        .title{
          margin:.9rem 0 1rem; font-size:1.05rem; color:var(--muted); letter-spacing:.03em; text-transform:uppercase;
          border-left: 3px solid var(--accent); padding-left:.6rem;
        }

        .field{ display:flex; flex-direction:column; gap:.35rem; margin:.8rem 0 }
        .field span{ font-size:.82rem; color:#9db6da; letter-spacing:.02em; text-transform:uppercase }
        .field input{
          width:100%; padding:.85rem 1rem; color:var(--ink);
          background: #0B1220; border:1px solid #233049; outline:none;
          box-shadow: 0 0 0 0 rgba(46,115,255,0);
          transition: border-color .15s ease, box-shadow .2s ease, background .2s ease;
        }
        .field input:focus{
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(46,115,255,.18);
          background: #0E1626;
        }

        .row-actions{ display:flex; justify-content:flex-end; margin-top:.2rem }
        .link{
          background:none; border:1px solid #233049; color:#9ec1ff; padding:.5rem .7rem; font-weight:700;
          text-decoration:none; cursor:pointer; user-select:none;
          transition: border-color .15s ease, color .15s ease, background .15s ease, box-shadow .2s ease;
        }
        .link:hover{ border-color:#2A3A58; color:#cfe1ff; background:#0E1626 }

        .alert{
          margin-top:.8rem; padding:.75rem 1rem; border:1px solid; text-align:center; font-weight:700;
        }
        .alert.error{ border-color: rgba(255,82,82,.45); color:#ffdada; background: rgba(255,82,82,.08) }
        .alert.ok{ border-color: rgba(46,255,180,.38); color:#c8ffe7; background: rgba(46,255,180,.06) }

        .actions{ display:flex; justify-content:flex-end; gap:.6rem; margin-top:1rem }
        .btn{
          padding:.95rem 1.25rem; border:1px solid #233049; color:#EAF0F8; background:#0C1422; font-weight:900; letter-spacing:.02em;
          cursor:pointer; outline:none;
          transition: transform .08s ease, box-shadow .22s ease, border-color .15s ease, background .15s ease, filter .22s ease;
          position:relative;
        }
        .btn:active{ transform: translateY(1px) }
        .btn.primary{
          border-color:#2A3A58; background:#122036;
        }
        .glow{
          box-shadow:
            0 0 0 0 rgba(46,115,255,.0),
            0 10px 28px rgba(0,0,0,.45);
        }
        .glow:hover{
          box-shadow:
            0 0 0 2px rgba(46,115,255,.45),
            0 18px 40px rgba(0,0,0,.55);
          filter: drop-shadow(0 0 12px rgba(40,215,255,.12));
          background:#142844;
          border-color:#33507A;
        }

        /* Motion safety */
        @media (prefers-reduced-motion: reduce){
          .grid-bg::after, .dash, .pulse { animation:none !important }
        }
      `})]})}const mg=t=>String(t||"").trim().toLowerCase(),sA=t=>/^[a-z0-9_]{3,20}$/.test(t),oA=(t="")=>{var n;const e=(n=t.split(".").pop())==null?void 0:n.toLowerCase();return e&&e.length<=5?e:"webp"};function aA(){const t=Lt(),[e,n]=w.useState(""),[r,i]=w.useState(""),[s,o]=w.useState(""),[a,l]=w.useState(""),[u,h]=w.useState(""),[d,f]=w.useState(null),[g,v]=w.useState(""),[y,E]=w.useState(!1),[m,p]=w.useState(0),_=w.useMemo(()=>`${e} ${r}`.trim()||mg(a),[e,r,a]);async function S(k,O){const M=U(F,`usernames/${k}`),ne=await s0(M,j=>j===null?O:j);if(!ne.committed&&ne.snapshot.val()!==O)throw new Error("Username already taken.")}async function C(k){if(!d)return null;const O=oA(d.name),M=`avatars/${k}/avatar_${Date.now()}.${O}`,ne=fu(mu,M),j=du(ne,d);return await new Promise((q,K)=>{j.on("state_changed",se=>{se.total&&p(Math.round(se.bytesTransferred/se.total*100))},K,q)}),await hu(j.snapshot.ref)}async function b(k,O){await pt(U(F),{[`users/${k}`]:O})}const P=async k=>{k.preventDefault(),v(""),E(!0),p(0);try{await Dy(_e,jh);const O=await oI(_e,s.trim(),u),M=O.user.uid;if(_&&await Ly(O.user,{displayName:_}),(await Le(U(F,`users/${M}`))).exists()){t("/universe");return}const j=mg(a);if(!sA(j))throw new Error("Username must be 3–20 chars: a–z, 0–9, underscore.");await S(j,M);const q=await C(M);await b(M,{uid:M,username:j,displayName:_,avatarUrl:q||null,createdAt:Date.now()}),t("/universe")}catch(O){console.error(O),v((O==null?void 0:O.message)||String(O))}finally{E(!1)}};return c.jsxs("div",{className:"hx-auth-wrap",children:[c.jsxs("div",{className:"hx-auth-card",children:[c.jsxs("header",{className:"hx-auth-header",children:[c.jsx("div",{className:"hx-logo",children:"#HUMANITY"}),c.jsx("h1",{children:"Create your account"}),c.jsx("p",{children:"Pick a unique username. Add an avatar now or later."})]}),c.jsxs("form",{onSubmit:P,className:"hx-form",children:[c.jsxs("div",{className:"hx-row-2",children:[c.jsxs("div",{className:"hx-field",children:[c.jsx("label",{children:"First name"}),c.jsx("input",{className:"hx-input",placeholder:"Phoenix",value:e,onChange:k=>n(k.target.value)})]}),c.jsxs("div",{className:"hx-field",children:[c.jsx("label",{children:"Last name"}),c.jsx("input",{className:"hx-input",placeholder:"Doe",value:r,onChange:k=>i(k.target.value)})]})]}),c.jsxs("div",{className:"hx-field",children:[c.jsx("label",{children:"Username"}),c.jsx("input",{className:"hx-input",placeholder:"3–20, a–z 0–9 _",value:a,onChange:k=>l(k.target.value),required:!0})]}),c.jsxs("div",{className:"hx-field",children:[c.jsx("label",{children:"Email"}),c.jsx("input",{className:"hx-input",type:"email",placeholder:"you@domain.com",value:s,autoComplete:"email",onChange:k=>o(k.target.value),required:!0})]}),c.jsxs("div",{className:"hx-field",children:[c.jsx("label",{children:"Password"}),c.jsx("input",{className:"hx-input",type:"password",placeholder:"••••••••",value:u,autoComplete:"new-password",onChange:k=>h(k.target.value),required:!0})]}),c.jsxs("div",{className:"hx-field",children:[c.jsx("label",{children:"Avatar (optional)"}),c.jsxs("div",{className:"hx-file-line",children:[c.jsx("input",{className:"hx-file",type:"file",accept:"image/*",onChange:k=>{var O;return f(((O=k.target.files)==null?void 0:O[0])||null)}}),d&&c.jsxs("span",{className:"hx-file-name",children:[d.name,m>0&&c.jsxs("em",{children:[" • ",m,"%"]})]})]})]}),g&&c.jsx("div",{className:"hx-error",children:g}),c.jsx("button",{type:"submit",className:"hx-btn",disabled:y,children:y?"Creating…":"Create account"}),c.jsx("div",{className:"hx-foot-note",children:"By creating an account you agree to our community rules."})]})]}),c.jsx("div",{className:"hx-grid-bg","aria-hidden":!0})]})}const lA=t=>/^[a-z0-9_]{3,20}$/.test(t||""),uA=5*1024*1024-1024,$={page:{minHeight:"100vh",background:"linear-gradient(180deg, rgba(2,8,23,.70), rgba(2,8,23,.70)), url('/humanity-globe-2560 (1).webp') center/cover fixed",color:"#e9eef8"},topbar:{position:"sticky",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 24px",background:"rgba(2,8,23,.55)",borderBottom:"1px solid rgba(255,255,255,.08)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",zIndex:5},brand:{fontWeight:700,letterSpacing:.5,textShadow:"0 0 8px rgba(0,212,255,.35)"},main:{maxWidth:920,margin:"42px auto",padding:"0 20px"},card:{background:"rgba(255,255,255,.14)",border:"1px solid rgba(255,255,255,.28)",backdropFilter:"blur(12px) saturate(160%)",WebkitBackdropFilter:"blur(12px) saturate(160%)",borderRadius:18,boxShadow:"0 10px 40px rgba(0,0,0,.45), 0 0 30px rgba(255,255,255,.16) inset, 0 0 24px rgba(255,255,255,.10)",padding:"28px 22px"},center:{textAlign:"center"},avatar:{width:140,height:140,borderRadius:"50%",objectFit:"cover",border:"3px solid #ffffffcc",boxShadow:"0 4px 18px rgba(0,0,0,.35), 0 0 12px rgba(255,255,255,.25)",background:"rgba(255,255,255,.05)",display:"block",margin:"0 auto 12px"},username:{fontSize:22,fontWeight:800,marginTop:6,textShadow:"0 0 6px rgba(255,255,255,.22)"},handle:{fontSize:13,color:"#c7d2fe",marginTop:2,opacity:.92},bio:{marginTop:12,color:"#dbeafe",opacity:.95,lineHeight:1.55,fontSize:14},links:{marginTop:12},link:{display:"inline-block",margin:"3px 8px",color:"#7dd3fc",textDecoration:"none",wordBreak:"break-word"},row:{display:"flex",justifyContent:"center",gap:12,marginTop:12,flexWrap:"wrap"},btn:{border:"1px solid rgba(255,255,255,.28)",background:"rgba(255,255,255,.08)",color:"#eaf2ff",padding:"9px 14px",textTransform:"uppercase",fontSize:12,borderRadius:8,cursor:"pointer",transition:"box-shadow .15s ease, transform .05s ease, background .15s ease, border-color .15s ease"},btnPrimary:{border:"1px solid rgba(255,255,255,.55)",background:"radial-gradient(45% 140% at 30% 20%, rgba(255,255,255,.28), rgba(0,212,255,.18))",boxShadow:"0 0 14px rgba(0,212,255,.25)"},btnViolet:{border:"1px solid rgba(138,92,255,.55)",background:"radial-gradient(45% 140% at 30% 20%, rgba(255,255,255,.18), rgba(138,92,255,.14))",boxShadow:"0 0 14px rgba(138,92,255,.25)"},counts:{display:"flex",justifyContent:"center",gap:22,marginTop:8,color:"#e5e7eb",fontSize:12},editor:{marginTop:16,paddingTop:14,borderTop:"1px dashed rgba(255,255,255,.35)"},grid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:10},fld:{display:"flex",flexDirection:"column",gap:6},input:{background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.28)",color:"#f8fbff",padding:"9px 10px",borderRadius:8,outline:"none"},hint:{fontSize:11,color:"#e5e7eb"},linkRow:{display:"flex",gap:8,marginBottom:8},galleryTitle:{fontWeight:700,letterSpacing:.4,marginBottom:12},gridPhotos:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px,1fr))",gap:12},photo:{width:"100%",height:146,objectFit:"cover",borderRadius:10,border:"1px solid rgba(255,255,255,.28)",background:"rgba(255,255,255,.08)"},ok:{fontSize:12,color:"#86efac"},err:{background:"rgba(255,54,94,.18)",border:"1px solid rgba(255,54,94,.45)",color:"#fff5f7",padding:10,borderRadius:8,marginBottom:12},progress:{height:6,width:"100%",background:"rgba(255,255,255,.2)",borderRadius:4,overflow:"hidden",marginTop:6},bar:{height:"100%",background:"linear-gradient(90deg,#a7f3d0,#67e8f9)"}};function cA(){const t=Lt(),{uid:e}=Jx(),[n,r]=w.useState(null),[i,s]=w.useState(null),[o,a]=w.useState(!0),[l,u]=w.useState(!1),[h,d]=w.useState(""),[f,g]=w.useState(""),[v,y]=w.useState(0),[E,m]=w.useState(""),[p,_]=w.useState(""),[S,C]=w.useState(""),[b,P]=w.useState(""),[k,O]=w.useState([]),[M,ne]=w.useState(0),[j,q]=w.useState(0),[K,se]=w.useState([]),[H,ee]=w.useState(!1),[N,x]=w.useState(!1),[R,A]=w.useState(""),[B,ue]=w.useState(""),[Y,Ne]=w.useState(""),[ce,je]=w.useState([""]),[Re,Dn]=w.useState(null),[ct,ri]=w.useState(""),Fo=w.useMemo(()=>Re?URL.createObjectURL(Re):null,[Re]);w.useEffect(()=>()=>Fo&&URL.revokeObjectURL(Fo),[Fo]);const j0=Fo||b||"/avatar-fallback.png";w.useEffect(()=>{const L=xr(_e,async z=>{if(!z){t("/login");return}r(z);const V=e||z.uid;s(V),await U0(V);const Q=F0(V),Pe=B0(z.uid,V);return a(!1),()=>{Q&&Q(),Pe&&Pe.forEach(xe=>xe&&xe())}});return()=>L()},[e,t]);async function U0(L){try{const z=await Le(U(F,`users/${L}`)),V=z.exists()?z.val():{};m(V.displayName||""),_(V.username||""),ri(V.username||""),C(V.bio||""),P(V.avatarUrl||V.photoURL||V.imageUrl||""),O(Array.isArray(V.links)?V.links.filter(Boolean):[]),A(V.displayName||""),ue(V.username||""),Ne(V.bio||""),je(Array.isArray(V.links)&&V.links.length?V.links:[""])}catch(z){d(z.message||String(z))}}function F0(L){const z=Qr(U(F,"posts"),uu("authorUid"),MR(L));return qe(z,V=>{const Q=[];V.forEach(Pe=>{const xe=Pe.val();xe!=null&&xe.imageUrl&&Q.push({id:Pe.key,url:xe.imageUrl,createdAt:xe.createdAt||0})}),Q.sort((Pe,xe)=>xe.createdAt-Pe.createdAt),se(Q.slice(0,36))}),()=>Et(z)}function B0(L,z){const V=[],Q=U(F,`following/${L}/${z}`);qe(Q,Dt=>ee(!!Dt.val())),V.push(()=>Et(Q));const Pe=U(F,`followers/${z}`);qe(Pe,Dt=>ne(Dt.exists()?Dt.numChildren():0)),V.push(()=>Et(Pe));const xe=U(F,`following/${z}`);return qe(xe,Dt=>q(Dt.exists()?Dt.numChildren():0)),V.push(()=>Et(xe)),V}async function $0(L,z){if(!L)throw new Error("Not signed in.");if(L===z)throw new Error("You can’t follow yourself.");const V={};V[`following/${L}/${z}`]=!0,V[`followers/${z}/${L}`]=!0,await pt(U(F),V)}async function z0(L,z){if(!L)throw new Error("Not signed in.");if(L===z)throw new Error("You can’t unfollow yourself.");const V={};V[`following/${L}/${z}`]=null,V[`followers/${z}/${L}`]=null,await pt(U(F),V)}async function W0(){try{if(!(n!=null&&n.uid)||!i)throw new Error("Sign in to follow.");if(n.uid===i)return;H?await z0(n.uid,i):await $0(n.uid,i)}catch(L){console.error(L),alert((L==null?void 0:L.message)||"Follow action failed.")}}async function V0(L,z){if(!L||L===ct)return!0;const V=U(F,`usernames/${L}`);return(await s0(V,xe=>xe===null?z:xe)).snapshot.val()!==z?!1:(ct&&ct!==L&&await pt(U(F),{[`usernames/${ct}`]:null}).catch(()=>{}),!0)}async function H0(L,z){if(L.size>uA)throw new Error("Avatar exceeds 5MB rule. Choose a smaller image.");const V=(L.name.split(".").pop()||"jpg").toLowerCase(),Q=`avatars/${z}/avatar_${Date.now()}.${V}`,Pe=fu(mu,Q),xe={contentType:L.type||"image/jpeg",cacheControl:"public,max-age=31536000"};return await new Promise((Dt,gu)=>{y(0);const Of=du(Pe,L,xe),Lf=setTimeout(()=>gu(new Error("Upload timed out (check CORS for localhost).")),12e4);Of.on("state_changed",Mn=>{const q0=Math.round(Mn.bytesTransferred/Mn.totalBytes*100);y(q0)},Mn=>{clearTimeout(Lf),gu(Mn)},async()=>{clearTimeout(Lf);try{const Mn=await hu(Of.snapshot.ref);Dt(Mn)}catch(Mn){gu(Mn)}})})}async function G0(){if(!(!n||!i||n.uid!==i)){d(""),g(""),u(!0);try{let L=b||"";Re&&(L=await H0(Re,i));const z=(B||"").trim().toLowerCase();if(z&&!lA(z))throw new Error("Username must be 3–20: a–z 0–9 _");if(z&&z!==(ct||"")&&!await V0(z,i))throw new Error("That username is already taken.");const V=(ce||[]).map(xe=>String(xe||"").trim()).filter(Boolean).slice(0,5),Q={updatedAt:Date.now()},Pe=(R||"").trim();if(Pe&&Pe!==(E||"")&&(Q.displayName=Pe),z&&z!==(p||"")&&(Q.username=z),Y!==(S||"")&&(Q.bio=Y),JSON.stringify(V)!==JSON.stringify(k)&&(Q.links=V),L&&L!==(b||"")&&(Q.avatarUrl=L,Q.imageUrl=L),Object.keys(Q).length===1&&!Q.avatarUrl){d("No changes to save.");return}await pt(U(F,`users/${i}`),Q),_e.currentUser&&(Q.displayName||Q.avatarUrl)&&await Ly(_e.currentUser,{displayName:Q.displayName||void 0,photoURL:Q.avatarUrl||void 0}).catch(()=>{}),Q.displayName!==void 0&&m(Q.displayName),Q.username!==void 0&&(_(Q.username),ri(Q.username)),Q.bio!==void 0&&C(Q.bio),Q.links!==void 0&&O(Q.links),Q.avatarUrl!==void 0&&P(Q.avatarUrl),Dn(null),g("Saved!"),x(!1),y(0)}catch(L){const z=(L==null?void 0:L.message)||(L==null?void 0:L.code)||String(L);d(z),console.error("saveEdits error:",L)}finally{u(!1)}}}const Af=n&&i&&n.uid===i;return o?c.jsxs("div",{style:$.page,children:[c.jsx("header",{style:$.topbar,children:c.jsx("div",{style:$.brand,children:"#HUMANITY"})}),c.jsx("main",{style:$.main,children:c.jsx("section",{style:{...$.card,...$.center},children:"Loading…"})})]}):c.jsxs("div",{style:$.page,children:[c.jsxs("header",{style:$.topbar,children:[c.jsx("div",{style:$.brand,children:"#HUMANITY"}),c.jsxs("div",{style:{display:"flex",gap:10},children:[c.jsx("button",{style:$.btn,onClick:()=>t("/universe"),children:"Universe"}),c.jsx("button",{style:{...$.btn,borderColor:"rgba(255,54,94,.6)"},onClick:async()=>{await Gl(_e),t("/login")},children:"Log out"})]})]}),c.jsxs("main",{style:$.main,children:[c.jsxs("section",{style:{...$.card,...$.center},children:[c.jsx("img",{src:j0,alt:"Profile avatar",style:$.avatar,onError:L=>{L.currentTarget.src="/avatar-fallback.png"}}),c.jsx("div",{style:$.username,children:E||p||"Anonymous"}),p&&c.jsxs("div",{style:$.handle,children:["@",p]}),!!S&&c.jsx("div",{style:$.bio,children:S}),!!(k!=null&&k.length)&&c.jsx("div",{style:$.links,children:k.map((L,z)=>c.jsx("a",{href:L,target:"_blank",rel:"noreferrer noopener",style:$.link,children:L},z))}),c.jsxs("div",{style:$.counts,children:[c.jsxs("span",{children:[c.jsx("strong",{children:M||0})," Followers"]}),c.jsxs("span",{children:[c.jsx("strong",{children:j||0})," Following"]})]}),Af?!N&&c.jsx("div",{style:$.row,children:c.jsx("button",{style:{...$.btn,...$.btnPrimary},onClick:()=>x(!0),children:"Edit Profile"})}):c.jsx("div",{style:$.row,children:c.jsx("button",{onClick:W0,style:{...$.btn,...H?$.btnViolet:$.btnPrimary,minWidth:160},children:H?"Unfollow":"Follow"})}),Af&&N&&c.jsxs("div",{style:$.editor,children:[h&&c.jsx("div",{style:$.err,children:h}),c.jsxs("div",{className:"vp-lbl",style:$.fld,children:[c.jsx("span",{children:"Profile Photo"}),c.jsx("input",{type:"file",accept:"image/*",onChange:L=>{var V;const z=(V=L.target.files)==null?void 0:V[0];z&&Dn(z)}}),v>0&&v<100&&c.jsx("div",{style:$.progress,children:c.jsx("div",{style:{...$.bar,width:`${v}%`}})})]}),c.jsxs("div",{style:$.grid,children:[c.jsxs("label",{style:$.fld,children:[c.jsx("span",{children:"Display Name"}),c.jsx("input",{style:$.input,value:R,onChange:L=>A(L.target.value),maxLength:60})]}),c.jsxs("label",{style:$.fld,children:[c.jsx("span",{children:"Username"}),c.jsx("input",{style:$.input,value:B,onChange:L=>ue(L.target.value.toLowerCase()),maxLength:20}),c.jsx("small",{style:$.hint,children:"3–20: a–z 0–9 _"})]})]}),c.jsxs("label",{style:$.fld,children:[c.jsx("span",{children:"Bio"}),c.jsx("textarea",{style:{...$.input,resize:"vertical"},rows:4,maxLength:280,value:Y,onChange:L=>Ne(L.target.value)}),c.jsxs("small",{style:$.hint,children:[Y.length,"/280"]})]}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[c.jsx("span",{children:"Links"}),c.jsx("button",{style:$.btn,type:"button",onClick:()=>je(L=>L.length<5?[...L,""]:L),children:"Add link"})]}),ce.map((L,z)=>c.jsxs("div",{style:$.linkRow,children:[c.jsx("input",{style:$.input,placeholder:"https://your-link",value:L,onChange:V=>{const Q=V.target.value;je(Pe=>Pe.map((xe,Dt)=>Dt===z?Q:xe))}}),c.jsx("button",{style:{...$.btn,borderColor:"rgba(255,54,94,.6)"},type:"button",onClick:()=>je(V=>V.filter((Q,Pe)=>Pe!==z)),children:"Remove"})]},z))]}),c.jsxs("div",{style:{...$.row,justifyContent:"flex-end"},children:[f&&c.jsx("span",{style:$.ok,children:f}),c.jsx("button",{style:{...$.btn,...$.btnPrimary},disabled:l,onClick:G0,children:l?"Saving…":"Save"})]})]})]}),c.jsxs("section",{style:{...$.card,marginTop:16},children:[c.jsx("div",{style:$.galleryTitle,children:"Photos"}),K.length===0?c.jsx("div",{style:{opacity:.85},children:"No photos yet."}):c.jsx("div",{style:$.gridPhotos,children:K.map(L=>c.jsx("img",{src:L.url,alt:"post",style:$.photo},L.id))})]})]})]})}const xl=t=>{var n,r;if(!t)return"?";const e=String(t).trim().split(/\s+/);return((((n=e[0])==null?void 0:n[0])||"")+(((r=e[1])==null?void 0:r[0])||"")).toUpperCase()||"?"},P0=t=>{const e=typeof t=="number"?t:Number(t)||Date.now(),n=Date.now()-e,r=Math.floor(n/6e4);if(r<1)return"just now";if(r<60)return`${r}m`;const i=Math.floor(r/60);return i<24?`${i}h`:`${Math.floor(i/24)}d`};async function dA(t){const e=String(t||"").trim().toLowerCase();if(!e)return null;const n=await Le(U(F,`usernames/${e}`));return n.exists()?n.val():null}async function hA(t){const e=await Le(U(F,`users/${t}`)),n=e.exists()?e.val():{},r=n.username||(n.displayName?n.displayName.toLowerCase().replace(/[^a-z0-9_]/g,""):"");return{uid:t,username:r,displayName:n.displayName||(r?`@${r}`:""),avatarUrl:n.avatarUrl||n.photoURL||""}}const A0=t=>Array.from(new Map(t.map(e=>[e.uid,e])).values());function O0(){const[t,e]=w.useState(null),[n,r]=w.useState(null);return w.useEffect(()=>{const i=xr(_e,async s=>{if(e(s||null),!s)return r(null);try{const o=await Le(U(F,`users/${s.uid}`)),a=o.exists()?o.val():{};r({uid:s.uid,displayName:a.displayName||a.username||(s.email?s.email.split("@")[0]:""),username:a.username||(s.email?s.email.split("@")[0]:""),avatarUrl:a.avatarUrl||a.photoURL||s.photoURL||""})}catch{r({uid:s.uid,displayName:s.email?s.email.split("@")[0]:"",username:s.email?s.email.split("@")[0]:"",avatarUrl:s.photoURL||""})}});return()=>i()},[]),{authUser:t,me:n}}function fA(){const[t,e]=w.useState([]),n=w.useCallback(r=>{const i=Math.random().toString(36).slice(2);e(s=>[...s,{id:i,msg:r}]),setTimeout(()=>e(s=>s.filter(o=>o.id!==i)),5200)},[]);return[t,{pushToast:n}]}const pA=({list:t})=>c.jsx("div",{className:"toastWrap",children:t.map(e=>c.jsx("div",{className:"toast",children:e.msg},e.id))});function mA({size:t=22}){return c.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none","aria-hidden":!0,children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"g",x1:"0",y1:"0",x2:"48",y2:"48",children:[c.jsx("stop",{offset:"0%",stopColor:"#60a5fa"}),c.jsx("stop",{offset:"100%",stopColor:"#8b5cf6"})]})}),c.jsx("circle",{cx:"24",cy:"24",r:"21",stroke:"url(#g)",strokeWidth:"3",fill:"none"}),c.jsx("path",{d:"M14 31V17h4v5h12v-5h4v14h-4v-5H18v5h-4z",fill:"url(#g)"})]})}const gA=t=>!t||/^user$/i.test(String(t).trim());function xn(t){if(!t)return"";const e=String(t).trim();return gA(e)?"":e}function _A(t,e){var o,a,l,u;const n=xn(t==null?void 0:t.authorDisplayName),r=t!=null&&t.ownerUid?xn((o=e[t.ownerUid])==null?void 0:o.displayName):"",i=t!=null&&t.authorUid?xn((a=e[t.authorUid])==null?void 0:a.displayName):"",s=(t==null?void 0:t.authorUsername)||(t==null?void 0:t.ownerUid)&&((l=e[t.ownerUid])==null?void 0:l.username)||(t==null?void 0:t.authorUid)&&((u=e[t.authorUid])==null?void 0:u.username)||"";return n||r||i||(s?`@${s}`:"@someone")}function vA(t,e){var n,r;return(t==null?void 0:t.authorUsername)||(t==null?void 0:t.ownerUid)&&((n=e[t.ownerUid])==null?void 0:n.username)||(t==null?void 0:t.authorUid)&&((r=e[t.authorUid])==null?void 0:r.username)||"someone"}function yA(){const[t,e]=w.useState(null),[n,r]=w.useState(0),[i,s]=w.useState(0),[o,a]=w.useState(0),[l,u]=w.useState(0);w.useEffect(()=>{const f=xr(_e,async g=>{if(e((g==null?void 0:g.uid)||null),!g)return;const v=await Le(U(F,`userState/${g.uid}`)).then(y=>y.exists()?y.val():{});a(Number((v==null?void 0:v.lastSeenFollowers)||0)),u(Number((v==null?void 0:v.lastSeenMessages)||0))});return()=>f()},[]),w.useEffect(()=>{if(!t)return;const f=U(F,`followers/${t}`),g=v=>{let y=0;v.exists()&&v.forEach(E=>{(typeof E.val()=="number"?E.val():0)>o&&y++}),r(y)};return qe(f,g),()=>Et(f,"value",g)},[t,o]),w.useEffect(()=>{if(!t)return;const f=U(F,`inbox/${t}`);let g=[];const v=y=>{if(g.forEach(m=>m&&m()),g=[],!y.exists()){s(0);return}const E=new Map;y.forEach(m=>{var b;const p=m.key,_=Number(((b=m.val())==null?void 0:b.lastSeenAt)||l||0),S=U(F,`messages/${p}`),C=P=>{let k=0;P.forEach(M=>{const ne=M.val();(ne==null?void 0:ne.fromUid)!==t&&Number((ne==null?void 0:ne.createdAt)||0)>_&&k++}),E.set(p,k);let O=0;for(const M of E.values())O+=M;s(O)};qe(S,C),g.push(()=>Et(S,"value",C))})};return qe(f,v),()=>{Et(f,"value",v),g.forEach(y=>y&&y())}},[t,l]);const h=w.useCallback(async()=>{if(!t)return;const f=Date.now();await pt(U(F),{[`userState/${t}/lastSeenFollowers`]:f}),a(f)},[t]),d=w.useCallback(async()=>{if(!t)return;const f=Date.now();await pt(U(F),{[`userState/${t}/lastSeenMessages`]:f}),u(f)},[t]);return{followUnread:n,messageUnread:i,markFollowersSeen:h,markMessagesSeen:d}}function wA(){const{authUser:t,me:e}=O0(),n=Lt(),[r,i]=fA(),{followUnread:s,messageUnread:o,markFollowersSeen:a,markMessagesSeen:l}=yA(),[u,h]=w.useState([]),[d,f]=w.useState("");w.useEffect(()=>{let x=null;const R=xr(_e,A=>{if(x&&(x(),x=null),f(""),h([]),!A){f("Sign in to see the feed.");return}const B=Qr(U(F,"posts"),uu("createdAt"),wl(100));x=qe(B,ce=>{const je=ce.val()||{},Re=Object.entries(je).map(([Dn,ct])=>{const ri=typeof ct.createdAt=="number"?ct.createdAt:Number(ct.createdAt)||0;return{id:Dn,...ct,createdAt:ri}});Re.sort((Dn,ct)=>(ct.createdAt||0)-(Dn.createdAt||0)),h(Re)},ce=>{x&&(x(),x=null),(ce==null?void 0:ce.code)==="PERMISSION_DENIED"?f("No permission to read /posts (auth or rules)."):f((ce==null?void 0:ce.message)||"Feed error.")})});return()=>{x&&x(),R()}},[]);const[g,v]=w.useState({});w.useEffect(()=>{const x=new Set;u.forEach(A=>{A!=null&&A.ownerUid&&x.add(A.ownerUid),A!=null&&A.authorUid&&x.add(A.authorUid)});const R=[...x].filter(A=>!g[A]);R.length&&(async()=>{const A={};await Promise.all(R.map(async B=>{try{const ue=await Le(U(F,`users/${B}`)),Y=ue.exists()?ue.val():{},Ne=Y.displayName||Y.username||(Y.email?Y.email.split("@")[0]:"");A[B]={avatarUrl:Y.avatarUrl||Y.photoURL||"",username:Y.username||(Y.email?Y.email.split("@")[0]:""),displayName:xn(Ne)||(Y.username?`@${Y.username}`:"")}}catch{}})),v(B=>({...B,...A}))})()},[u]);const[y,E]=w.useState({});w.useEffect(()=>{const x=[];return u.forEach(R=>{const A=U(F,`likes/${R.id}`),B=ue=>{const Y=ue.val()||{};E(Ne=>({...Ne,[R.id]:{count:Object.keys(Y).length,you:t?!!Y[t.uid]:!1}}))};qe(A,B),x.push({lRef:A,cb:B})}),()=>x.forEach(({lRef:R,cb:A})=>Et(R,"value",A))},[u,t]);const m=async(x,R)=>{var ue;if(R)return i.pushToast("Demo post — like disabled.");if(!(t!=null&&t.uid))return i.pushToast("Sign in to like posts.");const A=U(F,`likes/${x}/${t.uid}`),B=(ue=y[x])==null?void 0:ue.you;try{B?await un(A):await lu(A,!0)}catch(Y){i.pushToast(`Like failed: ${(Y==null?void 0:Y.message)||Y}`)}},[p,_]=w.useState(""),[S,C]=w.useState(null),[b,P]=w.useState(!1),k=!!(t!=null&&t.uid&&e),O=x=>{var A;const R=(A=x.target.files)==null?void 0:A[0];if(R){if(R.size>10*1024*1024){i.pushToast("Image must be ≤ 10MB"),x.target.value="";return}C(R)}},M=w.useCallback(async()=>{var R;if(!(t!=null&&t.uid)||!e)return i.pushToast("Sign in first.");const x=(p||"").trim();if(!x&&!S)return i.pushToast("Write something or add an image.");P(!0);try{const A=kf(U(F,"posts")).key;if(!A)throw new Error("Failed to allocate id");let B;if(S){const ce=(((R=S.name)==null?void 0:R.split(".").pop())||"jpg").toLowerCase(),je=`posts/${t.uid}/${A}.${ce}`,Re=fu(mu,je),Dn=du(Re,S,{contentType:S.type||"image/jpeg"});await new Promise((ct,ri)=>Dn.on("state_changed",null,ri,ct)),B=await hu(Re)}const ue=(e.username||(t.email?t.email.split("@")[0]:"")||"").toLowerCase(),Y=xn(e.displayName)||(ue?`@${ue}`:""),Ne={ownerUid:t.uid,authorUid:t.uid,authorUsername:ue,authorDisplayName:Y,authorAvatarUrl:e.avatarUrl||t.photoURL||"",text:x,createdAt:Date.now(),...B?{imageUrl:B}:{}};await pt(U(F),{[`posts/${A}`]:Ne,[`userPosts/${t.uid}/${A}`]:!0}),_(""),C(null)}catch(A){console.error("createPost failed:",A),i.pushToast(`Post failed: ${(A==null?void 0:A.code)||(A==null?void 0:A.message)||A}`)}finally{P(!1)}},[t,e,p,S,i]),[ne,j]=w.useState([]);w.useEffect(()=>{const x=Qr(U(F,"usernames"),i0(),r0(32)),R=async A=>{const B=A.val()||{},ue=await Promise.all(Object.entries(B).map(async([Ne,ce])=>{const je=await Le(U(F,`users/${ce}`)),Re=je.exists()?je.val():{};return{uid:ce,username:Re.username||Ne,displayName:xn(Re.displayName)||(Re.username?`@${Re.username}`:`@${Ne}`),avatarUrl:Re.avatarUrl||Re.photoURL||""}})),Y=A0(ue).filter(Ne=>Ne.uid!==(e==null?void 0:e.uid));j(Y)};return qe(x,R),()=>Et(x,"value",R)},[e==null?void 0:e.uid]);const q={width:42,height:42,borderRadius:"50%",objectFit:"cover",objectPosition:"center 20%",border:"1px solid var(--line)",boxShadow:"var(--glowSoft)"},K={width:34,height:34,borderRadius:"50%",objectFit:"cover",objectPosition:"center 20%",border:"1px solid var(--line)",boxShadow:"var(--glowSoft)"},se={width:28,height:28,borderRadius:"50%",objectFit:"cover",objectPosition:"center 20%",border:"1px solid var(--line)"},H=async x=>{if(!x.isMock){if(x.ownerUid)return n(`/profile/${x.ownerUid}`);if(x.authorUid)return n(`/profile/${x.authorUid}`);if(x.authorUsername)try{const R=await dA(x.authorUsername);if(R)return n(`/profile/${R}`)}catch{}}},ee="/humanity-globe-2560%20(1).webp",N=({count:x})=>x>0?c.jsx("span",{style:{marginLeft:8,background:"var(--brand)",color:"#0b1220",borderRadius:999,padding:"2px 8px",fontSize:12,fontWeight:800,boxShadow:"0 0 14px rgba(96,165,250,.45)"},children:x}):null;return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"bg-globe","aria-hidden":!0,children:[c.jsx("img",{src:ee,alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),c.jsx("div",{className:"bg-stars"}),c.jsx("div",{className:"bg-vignette"})]}),c.jsx(EA,{onAbout:()=>i.pushToast("Humanity — Proof of Human")}),c.jsx("div",{className:"heroSpacer"}),c.jsx(pA,{list:r}),c.jsx("div",{className:"shell",children:c.jsxs("div",{className:"grid",children:[c.jsxs("aside",{className:"panel nav",children:[c.jsx("div",{className:"item",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Universe"}),c.jsx("div",{className:"item",onClick:()=>e&&n(`/profile/${e.uid}`),children:"Profile"}),c.jsxs("div",{className:"item",onClick:()=>{l(),n("/messages")},children:["Messages ",c.jsx(N,{count:o})]}),c.jsxs("div",{className:"item",onClick:()=>{a(),n("/notifications")},children:["Notifications ",c.jsx(N,{count:s})]}),c.jsx("div",{className:"item",onClick:()=>n("/verify"),children:"Verify"}),c.jsx("div",{className:"item",onClick:()=>n("/settings"),children:"Settings"})]}),c.jsxs("main",{className:"feedCol",children:[c.jsxs("section",{className:"card",children:[c.jsxs("div",{className:"composerTop",children:[e!=null&&e.avatarUrl?c.jsx("img",{src:e.avatarUrl,alt:"",style:q}):c.jsx("div",{className:"avatarFallback",style:{...q,display:"grid",placeItems:"center"},children:"👤"}),c.jsx("textarea",{className:"textarea",rows:3,placeholder:"Share something…",value:p,onChange:x=>_(x.target.value)})]}),c.jsxs("div",{className:"compRow",children:[c.jsxs("label",{className:"btn",children:[c.jsx("input",{type:"file",accept:"image/*",onChange:O,style:{display:"none"}}),"Add Image"]}),c.jsx("button",{className:"btn btnPrimary",disabled:!k||b,onClick:M,children:b?"Posting…":"Post"})]}),S&&c.jsxs("div",{className:"preview",children:[c.jsx("img",{src:URL.createObjectURL(S),alt:"preview"}),c.jsx("button",{className:"btn",onClick:()=>C(null),children:"Remove"})]})]}),d&&c.jsx("section",{className:"card",style:{border:"1px solid #f87171",background:"rgba(248,113,113,.12)",padding:12,marginBottom:12},children:d}),u.map(x=>{var Ne,ce,je,Re;const R=((Ne=y[x.id])==null?void 0:Ne.count)||0,A=((ce=y[x.id])==null?void 0:ce.you)||!1,B=x.authorAvatarUrl||x.ownerUid&&((je=g[x.ownerUid])==null?void 0:je.avatarUrl)||x.authorUid&&((Re=g[x.authorUid])==null?void 0:Re.avatarUrl)||"",ue=vA(x,g),Y=_A(x,g);return c.jsxs("article",{className:"card",children:[c.jsx("div",{className:"postHead",children:c.jsxs("button",{className:"userBtn",onClick:()=>H(x),children:[B?c.jsx("img",{src:B,alt:"",style:q}):c.jsx("div",{className:"avatarFallback",style:{...q,display:"grid",placeItems:"center"},children:xl(ue)}),c.jsxs("div",{className:"userNames",children:[c.jsx("div",{className:"display",children:Y}),c.jsxs("div",{className:"user",children:["@",ue," · ",P0(x.createdAt)]})]})]})}),x.text&&c.jsx("div",{className:"postBody",children:x.text}),x.imageUrl&&c.jsx("img",{className:"postImage",src:x.imageUrl,alt:"post media"}),c.jsxs("div",{className:"actions",children:[c.jsxs("button",{className:`pill ${A?"on":""}`,onClick:()=>m(x.id,x.isMock),children:["♥ ",R]}),c.jsx("button",{className:"pill",onClick:()=>i.pushToast("Share coming soon"),children:"↗ Share"})]}),c.jsx(xA,{postId:x.id,avatarStyle:se}),c.jsx(CA,{postId:x.id,me:e,authUser:t,toastApi:i})]},`post-${x.id}`)})]}),c.jsxs("aside",{className:"panel",style:{padding:12,display:"grid",gap:14},children:[c.jsxs("div",{children:[c.jsx("div",{className:"rightTitle",children:"Who to follow"}),c.jsxs("div",{className:"sugg",children:[ne.map(x=>c.jsxs("div",{className:"suggItem",children:[x.avatarUrl?c.jsx("img",{src:x.avatarUrl,alt:"",style:K}):c.jsx("div",{className:"avatarFallback",style:{...K,display:"grid",placeItems:"center"},children:xl(x.username)}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:900},children:x.displayName}),c.jsxs("div",{style:{opacity:.72,fontSize:12},children:["@",x.username]})]}),c.jsx("button",{className:"suggBtn",onClick:()=>n(`/profile/${x.uid}`),children:"Follow"})]},`sugg-${x.uid}`)),!ne.length&&c.jsx("div",{className:"card",children:"No suggestions yet."})]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"rightTitle",children:"Trending"}),c.jsxs("div",{style:{display:"grid",gap:8},children:[c.jsx("div",{children:"#HUMANITY"}),c.jsx("div",{children:"#AllBots"}),c.jsx("div",{children:"#TrendingNow"})]})]})]})]})})]})}function EA({onAbout:t}){const e=Lt(),{authUser:n,me:r}=O0(),i=async()=>{try{await Gl(_e),e("/")}catch(o){console.error("Sign out failed:",o),alert("Log out failed. Check console for details.")}},s={width:34,height:34,borderRadius:"50%",objectFit:"cover",objectPosition:"center 20%",border:"1px solid var(--line)",boxShadow:"var(--glowSoft)",cursor:"pointer"};return c.jsx("header",{className:"header",children:c.jsxs("div",{className:"headerWrap",children:[c.jsxs("button",{className:"brand",onClick:t,title:"About #HUMANITY",children:[c.jsx("span",{className:"brandIcon",children:c.jsx(mA,{})}),c.jsx("span",{className:"brandText",children:"HUMANITY"})]}),c.jsx(SA,{}),n&&c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[r!=null&&r.avatarUrl?c.jsx("img",{src:r.avatarUrl,alt:"",style:s,onClick:()=>r&&e(`/profile/${r.uid}`),title:"Open your profile"}):c.jsx("div",{className:"avatarFallback",style:{...s,display:"grid",placeItems:"center"},onClick:()=>r&&e(`/profile/${r.uid}`),title:"Open your profile",children:"👤"}),c.jsx("button",{className:"btn",onClick:i,children:"Log out"})]})]})})}function SA(){const t=Lt(),[e,n]=w.useState(""),[r,i]=w.useState(!1),[s,o]=w.useState([]),a=w.useRef(null);w.useEffect(()=>{const u=e.trim().toLowerCase();if(!u){o([]);return}const h=Qr(U(F,"usernames"),i0(),r0(10)),d=async f=>{const g=f.val()||{},v=await Promise.all(Object.entries(g).filter(([E])=>E.startsWith(u)).slice(0,10).map(async([E,m])=>{const p=await Le(U(F,`users/${m}`)),_=p.exists()?p.val():{},S=xn(_.displayName)||(_.username?`@${_.username}`:`@${E}`);return{uid:m,username:_.username||E,displayName:S,avatarUrl:_.avatarUrl||_.photoURL||""}})),y=A0(v);o(y)};return qe(h,d),()=>Et(h,"value",d)},[e]),w.useEffect(()=>{const u=h=>{a.current&&(a.current.contains(h.target)||i(!1))};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]);const l=()=>{s.length&&(t(`/profile/${s[0].uid}`),i(!1))};return c.jsxs("div",{className:"searchBox",ref:a,children:[c.jsx("input",{className:"searchInput",placeholder:"Search users",value:e,onChange:u=>{n(u.target.value),i(!0)},onFocus:()=>i(!0),onKeyDown:u=>{u.key==="Enter"&&l()}}),c.jsx("button",{className:"searchBtn",onClick:l,children:"Search"}),r&&s.length>0&&c.jsx("div",{className:"searchList",children:s.map(u=>c.jsxs("div",{className:"searchItem",onClick:()=>{t(`/profile/${u.uid}`),i(!1)},children:[u.avatarUrl?c.jsx("img",{src:u.avatarUrl,className:"searchAv",alt:"",style:{width:28,height:28,borderRadius:"50%",objectFit:"cover",objectPosition:"center 20%"}}):c.jsx("div",{className:"searchFallback",children:xl(u.username)}),c.jsx("div",{style:{fontWeight:900},children:u.displayName}),c.jsxs("div",{style:{opacity:.72,marginLeft:6},children:["@",u.username]})]},`sr-${u.uid}`))})]})}function xA({postId:t,avatarStyle:e}){const[n,r]=w.useState([]);return w.useEffect(()=>{const i=U(F,`comments/${t}`),s=o=>{const a=o.val()||{},l=Object.entries(a).map(([u,h])=>({id:u,...h}));l.sort((u,h)=>(u.createdAt||0)-(h.createdAt||0)),r(l)};return qe(i,s),()=>Et(i,"value",s)},[t]),n.length?c.jsx("ul",{className:"comments",children:n.map(i=>c.jsxs("li",{className:"comment",children:[i.authorAvatarUrl?c.jsx("img",{src:i.authorAvatarUrl,className:"cAv",alt:"",style:e}):c.jsx("div",{className:"fallback",style:{...e,display:"grid",placeItems:"center"},children:xl(i.authorUsername)}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8},children:[c.jsx("strong",{children:xn(i.authorDisplayName)||(i.authorUsername?`@${i.authorUsername}`:"@someone")}),c.jsx("span",{style:{opacity:.65,fontSize:12},children:P0(i.createdAt)})]}),c.jsx("div",{children:i.text})]})]},`c-${i.id}`))}):null}function CA({postId:t,me:e,authUser:n,toastApi:r}){const[i,s]=w.useState(""),o=async()=>{const a=i.trim();if(!(n!=null&&n.uid)||!e)return r.pushToast("Sign in first.");if(a)try{const l=kf(U(F,`comments/${t}`)),u=await hA(n.uid),h=u.username||e.username||"",d=xn(u.displayName)||(h?`@${h}`:"");await lu(l,{ownerUid:n.uid,authorUsername:h,authorDisplayName:d,authorAvatarUrl:u.avatarUrl||e.avatarUrl||"",text:a,createdAt:Date.now()}),s("")}catch(l){r.pushToast(`Comment failed: ${(l==null?void 0:l.code)||(l==null?void 0:l.message)||l}`)}};return c.jsxs("div",{className:"commentRow",children:[c.jsx("input",{className:"commentInput",placeholder:"Write a comment…",value:i,onChange:a=>s(a.target.value),onKeyDown:a=>{a.key==="Enter"&&o()}}),c.jsx("button",{className:"btn",onClick:o,children:"Reply"})]})}const gg=t=>{const e=(t||"").toString().trim();return!e||/^user$/i.test(e)?"":e},L0=t=>String(t||"").trim().replace(/^@+/,"").toLowerCase(),_g=t=>{const e=typeof t=="number"?t:Number(t)||Date.now(),n=Date.now()-e,r=Math.floor(n/6e4);if(r<1)return"just now";if(r<60)return`${r}m`;const i=Math.floor(r/60);return i<24?`${i}h`:`${Math.floor(i/24)}d`},kA=t=>/^[A-Za-z0-9_-]{20,}$/.test(String(t||"")),TA=(t,e)=>{const[n,r]=[String(t),String(e)].sort();return`${n}_${r}`};async function IA(t){const e=L0(t);if(!e)return null;const n=await Le(U(F,`usernames/${e}`));return n.exists()?n.val():null}async function ac(t){if(!t)return{uid:"",username:"",displayName:"",avatarUrl:""};const e=await Le(U(F,`users/${t}`)),n=e.exists()?e.val():{};return{uid:t,username:n.username||"",displayName:n.displayName||"",avatarUrl:n.avatarUrl||""}}function D0(){const[t,e]=w.useState(null),[n,r]=w.useState(null);return w.useEffect(()=>{const i=xr(_e,async s=>{var o,a;if(e(s||null),!s)return r(null);try{const l=await Le(U(F,`users/${s.uid}`)),u=l.exists()?l.val():{};r({uid:s.uid,displayName:u.displayName||u.username||(s.email?s.email.split("@")[0]:""),username:u.username||(s.email?s.email.split("@")[0]:""),avatarUrl:u.avatarUrl||s.photoURL||"",email:s.email||""})}catch{r({uid:s.uid,displayName:((o=s.email)==null?void 0:o.split("@")[0])||"you",username:((a=s.email)==null?void 0:a.split("@")[0])||"you",avatarUrl:s.photoURL||"",email:s.email||""})}});return()=>i()},[]),{authUser:t,me:n}}function bA(){const[t,e]=w.useState([]),n=w.useCallback(r=>{const i=Math.random().toString(36).slice(2);e(s=>[...s,{id:i,msg:r}]),setTimeout(()=>e(s=>s.filter(o=>o.id!==i)),4200)},[]);return{toasts:t,pushToast:n}}const NA=({list:t})=>c.jsx("div",{className:"toastWrap",children:t.map(e=>c.jsx("div",{className:"toast",children:e.msg},e.id))});function RA({size:t=22}){return c.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none","aria-hidden":!0,children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"g",x1:"0",y1:"0",x2:"48",y2:"48",children:[c.jsx("stop",{offset:"0%",stopColor:"#60a5fa"}),c.jsx("stop",{offset:"100%",stopColor:"#8b5cf6"})]})}),c.jsx("circle",{cx:"24",cy:"24",r:"21",stroke:"url(#g)",strokeWidth:"3",fill:"none"}),c.jsx("path",{d:"M14 31V17h4v5h12v-5h4v14h-4v-5H18v5h-4z",fill:"url(#g)"})]})}function PA(){const t=Lt(),{authUser:e,me:n}=D0(),r={width:34,height:34,borderRadius:"50%",objectFit:"cover",border:"1px solid var(--line)",boxShadow:"var(--glowSoft)",cursor:"pointer"};return c.jsx("header",{className:"header",children:c.jsxs("div",{className:"headerWrap",children:[c.jsxs("button",{className:"brand",onClick:()=>t("/universe"),title:"Back to Universe",children:[c.jsx("span",{className:"brandIcon",children:c.jsx(RA,{})}),c.jsx("span",{className:"brandText",children:"HUMANITY"})]}),c.jsx("div",{style:{flex:1}}),e&&c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[c.jsx("button",{className:"btn",onClick:()=>t("/universe"),children:"Universe"}),n!=null&&n.avatarUrl?c.jsx("img",{src:n.avatarUrl,alt:"",style:r,onClick:()=>t(`/profile/${n.uid}`)}):c.jsx("div",{className:"avatarFallback",style:{...r,display:"grid",placeItems:"center"},onClick:()=>t(`/profile/${n.uid}`),children:"👤"})]})]})})}function AA(){var ne;D0();const{toasts:t,pushToast:e}=bA(),[n,r]=w.useState(""),[i,s]=w.useState([]),[o,a]=w.useState({}),[l,u]=w.useState(""),[h,d]=w.useState(""),[f,g]=w.useState(null),[v,y]=w.useState(""),[E,m]=w.useState(!1),p=w.useRef(null);w.useEffect(()=>{const j=xr(_e,q=>{if(p.current&&(p.current(),p.current=null),r(""),!q){s([]);return}const K=U(F,`inbox/${q.uid}`),H=qe(K,async ee=>{try{const N=ee.val()||{},x=Object.entries(N),R=await Promise.all(x.map(async([A,B])=>{const ue=B!=null&&B.otherUid?await ac(B.otherUid):null;return{threadId:A,otherUid:(B==null?void 0:B.otherUid)||"",lastMessageAt:Number((B==null?void 0:B.lastMessageAt)||0),lastText:(B==null?void 0:B.lastText)||"",otherProfile:ue}}));R.sort((A,B)=>(B.lastMessageAt||0)-(A.lastMessageAt||0)),s(R)}catch(N){console.error(N),r((N==null?void 0:N.message)||"Failed to load inbox")}},ee=>r((ee==null?void 0:ee.message)||"Inbox error"));p.current=H});return()=>{p.current&&p.current(),j()}},[]),w.useEffect(()=>{let j=[];return(async()=>{var q;if(!(!((q=_e.currentUser)!=null&&q.uid)||i.length===0)){j.forEach(K=>K&&K()),j=[];for(const K of i){const se=Qr(U(F,`messages/${K.threadId}`),uu("createdAt"),wl(1)),H=qe(se,ee=>{let N="";ee.forEach(x=>{var R;N=((R=x.val())==null?void 0:R.fromUid)||""}),a(x=>({...x,[K.threadId]:N}))},()=>a(ee=>({...ee,[K.threadId]:""})));j.push(H)}}})(),()=>{j.forEach(q=>q&&q())}},[i]);const _=((ne=_e.currentUser)==null?void 0:ne.uid)||null,S=w.useMemo(()=>i.filter(j=>o[j.threadId]&&o[j.threadId]!==_),[i,o,_]),C=w.useMemo(()=>i.filter(j=>o[j.threadId]&&o[j.threadId]===_),[i,o,_]);w.useEffect(()=>{const j=setTimeout(async()=>{try{const q=l.trim();if(!q){d(""),g(null);return}if(kA(q)){d(q);const H=await ac(q).catch(()=>null);g(H);return}const K=L0(q),se=await IA(K);if(se){d(se);const H=await ac(se).catch(()=>null);g(H)}else d(""),g(null)}catch(q){console.error(q)}},250);return()=>clearTimeout(j)},[l]);const b=async()=>{const j=_e.currentUser;if(!j)return e("Sign in first.");const q=(v||"").trim();if(!q)return e("Write a message.");if(!h)return e("Recipient not found.");if(h===j.uid)return e("You can’t message yourself.");m(!0);try{const K=TA(j.uid,h),se=Date.now(),H=kf(U(F,`messages/${K}`));await lu(H,{fromUid:j.uid,text:q,createdAt:se}),await pt(U(F,`inbox/${j.uid}`),{[K]:{otherUid:h,lastMessageAt:se,lastText:q}}),await pt(U(F,`inbox/${h}`),{[K]:{otherUid:j.uid,lastMessageAt:se,lastText:q}}),y(""),u(""),d(""),g(null),e("Message sent.")}catch(K){console.error("sendNew error:",K),e((K==null?void 0:K.message)||"Could not send message")}finally{m(!1)}},P="/humanity-globe-2560%20(1).webp",k={padding:18,borderRadius:10,border:"1px solid var(--line)",background:"rgba(255,255,255,.08)"},O={fontWeight:900,letterSpacing:.4,marginBottom:10},M={padding:"10px 12px",borderRadius:10,border:"1px solid var(--line)",background:"rgba(255,255,255,.06)"};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"bg-globe","aria-hidden":!0,children:[c.jsx("img",{src:P,alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),c.jsx("div",{className:"bg-stars"}),c.jsx("div",{className:"bg-vignette"})]}),c.jsx(PA,{}),c.jsx("div",{className:"heroSpacer"}),c.jsx(NA,{list:t}),n?c.jsx("div",{className:"shell",children:c.jsx("div",{className:"grid",style:{gridTemplateColumns:"1fr",gap:16},children:c.jsxs("section",{className:"card",style:{...k,border:"1px solid #f87171",background:"rgba(248,113,113,.12)"},children:[c.jsx("div",{style:{fontWeight:900,marginBottom:6},children:"Messages error"}),c.jsx("div",{style:{opacity:.9},children:n})]})})}):c.jsx("div",{className:"shell",children:c.jsxs("div",{className:"grid",style:{gridTemplateColumns:"1fr 1fr 1fr",gap:16},children:[c.jsxs("section",{className:"card",style:k,children:[c.jsx("div",{style:O,children:"Inbox"}),c.jsxs("div",{style:{display:"grid",gap:10},children:[S.length===0&&c.jsx("div",{style:{opacity:.8},children:"Nothing in your inbox."}),S.map(j=>{var K,se;const q=gg((K=j.otherProfile)==null?void 0:K.displayName)||((se=j.otherProfile)!=null&&se.username?`@${j.otherProfile.username}`:j.otherUid);return c.jsxs("div",{style:M,children:[c.jsx("div",{style:{fontWeight:900},children:q}),c.jsx("div",{style:{opacity:.75,fontSize:12},children:j.lastText||"—"}),c.jsx("div",{style:{opacity:.55,fontSize:11,marginTop:2},children:_g(j.lastMessageAt)})]},`in-${j.threadId}`)})]})]}),c.jsxs("section",{className:"card",style:k,children:[c.jsx("div",{style:O,children:"Outbox"}),c.jsxs("div",{style:{display:"grid",gap:10},children:[C.length===0&&c.jsx("div",{style:{opacity:.8},children:"No sent conversations yet."}),C.map(j=>{var K,se;const q=gg((K=j.otherProfile)==null?void 0:K.displayName)||((se=j.otherProfile)!=null&&se.username?`@${j.otherProfile.username}`:j.otherUid);return c.jsxs("div",{style:M,children:[c.jsx("div",{style:{fontWeight:900},children:q}),c.jsx("div",{style:{opacity:.75,fontSize:12},children:j.lastText||"—"}),c.jsx("div",{style:{opacity:.55,fontSize:11,marginTop:2},children:_g(j.lastMessageAt)})]},`out-${j.threadId}`)})]})]}),c.jsxs("section",{className:"card",style:k,children:[c.jsx("div",{style:O,children:"Compose"}),c.jsxs("div",{style:{display:"grid",gap:10},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:700,fontSize:13,marginBottom:6,opacity:.9},children:"To (username or UID)"}),c.jsx("input",{className:"commentInput",value:l,onChange:j=>u(j.target.value),placeholder:"@username or UID",style:{width:"100%"}}),c.jsx("div",{style:{opacity:.7,fontSize:12,marginTop:6},children:h?c.jsxs(c.Fragment,{children:["Found: ",c.jsx("strong",{children:(f==null?void 0:f.displayName)||(f!=null&&f.username?`@${f.username}`:h)})]}):l.trim()?"No match yet…":"Type @username or paste a UID"})]}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:700,fontSize:13,marginBottom:6,opacity:.9},children:"Message"}),c.jsx("textarea",{className:"textarea",rows:6,value:v,onChange:j=>y(j.target.value),placeholder:"Write your message…",style:{width:"100%",resize:"vertical"}})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:10},children:[c.jsx("button",{className:"btn",onClick:()=>{u(""),y(""),d(""),g(null)},children:"Clear"}),c.jsx("button",{className:"btn btnPrimary",disabled:E||!h||!v.trim(),onClick:b,children:E?"Sending…":"Send"})]})]})]})]})})]})}const ye={page:{minHeight:"100vh",background:"linear-gradient(180deg, rgba(2,8,23,.70), rgba(2,8,23,.70)), url('/humanity-globe-2560 (1).webp') center/cover fixed",color:"#e9eef8"},topbar:{position:"sticky",top:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 24px",background:"rgba(2,8,23,.55)",borderBottom:"1px solid rgba(255,255,255,.08)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",zIndex:5},brand:{fontWeight:900,letterSpacing:.5,textShadow:"0 0 8px rgba(0,212,255,.35)"},main:{maxWidth:980,margin:"42px auto",padding:"0 20px",display:"grid",gap:16},card:{background:"rgba(255,255,255,.14)",border:"1px solid rgba(255,255,255,.28)",backdropFilter:"blur(12px) saturate(160%)",WebkitBackdropFilter:"blur(12px) saturate(160%)",borderRadius:18,boxShadow:"0 10px 40px rgba(0,0,0,.45), 0 0 30px rgba(255,255,255,.16) inset, 0 0 24px rgba(255,255,255,.10)",padding:"18px 16px"},row:{display:"grid",gridTemplateColumns:"42px 1fr auto",gap:12,alignItems:"center",padding:"10px 6px",borderBottom:"1px solid rgba(255,255,255,.10)"},avatar:{width:42,height:42,borderRadius:"50%",objectFit:"cover",objectPosition:"center 20%",border:"1px solid rgba(255,255,255,.28)",boxShadow:"0 0 12px rgba(0,0,0,.35)"},btn:{border:"1px solid rgba(255,255,255,.28)",background:"rgba(255,255,255,.08)",color:"#eaf2ff",padding:"8px 12px",fontSize:12,borderRadius:8,cursor:"pointer"},btnGhost:{border:"1px solid rgba(255,255,255,.18)",background:"rgba(255,255,255,.04)"},sectionTitle:{fontWeight:900,letterSpacing:.5,marginBottom:8},subtle:{opacity:.72,fontSize:12}},vg=t=>{var n,r;if(!t)return"?";const e=String(t).trim().split(/\s+/);return((((n=e[0])==null?void 0:n[0])||"")+(((r=e[1])==null?void 0:r[0])||"")).toUpperCase()||"?"},yg=t=>{const e=typeof t=="number"?t:Number(t)||Date.now(),n=Date.now()-e,r=Math.floor(n/6e4);if(r<1)return"just now";if(r<60)return`${r}m`;const i=Math.floor(r/60);return i<24?`${i}h`:`${Math.floor(i/24)}d`},OA=t=>!t||/^user$/i.test(String(t).trim()),wg=t=>{if(!t)return"";const e=String(t).trim();return OA(e)?"":e};function LA(){const[t,e]=w.useState(null),[n,r]=w.useState(null);return w.useEffect(()=>{const i=xr(_e,async s=>{if(e(s||null),!s)return r(null);try{const o=await Le(U(F,`users/${s.uid}`)),a=o.exists()?o.val():{};r({uid:s.uid,displayName:a.displayName||a.username||(s.email?s.email.split("@")[0]:""),username:a.username||(s.email?s.email.split("@")[0]:""),avatarUrl:a.avatarUrl||a.photoURL||s.photoURL||""})}catch{r({uid:s.uid,displayName:s.email?s.email.split("@")[0]:"",username:s.email?s.email.split("@")[0]:"",avatarUrl:s.photoURL||""})}});return()=>i()},[]),{authUser:t,me:n}}async function Eg(t){const e=await Le(U(F,`users/${t}`)),n=e.exists()?e.val():{},r=n.username||(n.displayName?n.displayName.toLowerCase().replace(/[^a-z0-9_]/g,""):"");return{uid:t,username:r,displayName:n.displayName||(r?`@${r}`:""),avatarUrl:n.avatarUrl||n.photoURL||""}}function DA(){const{authUser:t,me:e}=LA(),n=Lt(),[r,i]=w.useState([]),[s,o]=w.useState([]);w.useEffect(()=>{if(!(t!=null&&t.uid))return;const l=Qr(U(F,`followers/${t.uid}`),LR(),wl(200)),u=async h=>{const d=[];if(h.exists()){const f=[];h.forEach(g=>{const v=g.key,y=g.val(),E=typeof y=="number"?y:Date.now();f.push(Eg(v).then(m=>d.push({uid:v,ts:E,profile:m})))}),await Promise.all(f),d.sort((g,v)=>(v.ts||0)-(g.ts||0))}i(d)};return qe(l,u),()=>Et(l,"value",u)},[t==null?void 0:t.uid]),w.useEffect(()=>{if(!(t!=null&&t.uid))return;const l=U(F,`inbox/${t.uid}`),u=async h=>{const d=[],f=await Le(U(F,`userState/${t.uid}/lastSeenMessages`)).then(v=>v.exists()?Number(v.val()):0).catch(()=>0),g=[];h.exists()&&h.forEach(v=>{const y=v.key,E=v.val()||{},m=E.otherUid,p=Number(E.lastSeenAt||f||0);m&&g.push((async()=>{const[_,S]=await Promise.all([Eg(m),Le(Qr(U(F,`messages/${y}`),uu("createdAt"),wl(1)))]);let C=null,b=0,P=0;S.exists()&&S.forEach(O=>{const M=O.val();C={id:O.key,...M},b=Number((M==null?void 0:M.createdAt)||0)});const k=await Le(U(F,`messages/${y}`)).then(O=>O.val()||{});Object.values(k).forEach(O=>{(O==null?void 0:O.fromUid)!==t.uid&&Number((O==null?void 0:O.createdAt)||0)>p&&P++}),d.push({threadId:y,other:_,lastMsg:C,lastAt:b,unreadCount:P})})())}),await Promise.all(g),d.sort((v,y)=>(y.lastAt||0)-(v.lastAt||0)),o(d)};return qe(l,u),()=>Et(l,"value",u)},[t==null?void 0:t.uid]),w.useEffect(()=>{if(!(t!=null&&t.uid))return;const l=Date.now();pt(U(F),{[`userState/${t.uid}/lastSeenFollowers`]:l,[`userState/${t.uid}/lastSeenMessages`]:l}).catch(()=>{})},[t==null?void 0:t.uid]);const a=async()=>{try{await Gl(_e),n("/login")}catch(l){console.error("Sign out failed:",l),alert("Log out failed. Check console.")}};return c.jsxs("div",{style:ye.page,children:[c.jsxs("header",{style:ye.topbar,children:[c.jsx("div",{style:ye.brand,children:"#HUMANITY"}),c.jsxs("div",{style:{display:"flex",gap:10},children:[c.jsx("button",{style:ye.btn,onClick:()=>n("/universe"),children:"Universe"}),e?c.jsx("button",{style:ye.btn,onClick:()=>n(`/profile/${e.uid}`),children:"Profile"}):null,c.jsx("button",{style:{...ye.btn,...ye.btnGhost},onClick:a,children:"Log out"})]})]}),c.jsxs("main",{style:ye.main,children:[c.jsxs("section",{style:ye.card,children:[c.jsx("div",{style:ye.sectionTitle,children:"New Followers"}),r.length===0?c.jsx("div",{style:ye.subtle,children:"No new followers."}):r.map(l=>c.jsxs("div",{style:ye.row,children:[l.profile.avatarUrl?c.jsx("img",{src:l.profile.avatarUrl,alt:"",style:ye.avatar}):c.jsx("div",{style:{...ye.avatar,display:"grid",placeItems:"center",background:"rgba(255,255,255,.06)"},children:vg(l.profile.username)}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:900},children:wg(l.profile.displayName)||(l.profile.username?`@${l.profile.username}`:"Someone")}),c.jsxs("div",{style:ye.subtle,children:["followed you · ",yg(l.ts)]})]}),c.jsx("div",{children:c.jsx("button",{style:ye.btn,onClick:()=>n(`/profile/${l.uid}`),children:"View"})})]},`f-${l.uid}-${l.ts}`))]}),c.jsxs("section",{style:ye.card,children:[c.jsx("div",{style:ye.sectionTitle,children:"Messages"}),s.length===0?c.jsx("div",{style:ye.subtle,children:"No conversations yet."}):s.map(l=>{var u;return c.jsxs("div",{style:ye.row,children:[l.other.avatarUrl?c.jsx("img",{src:l.other.avatarUrl,alt:"",style:ye.avatar}):c.jsx("div",{style:{...ye.avatar,display:"grid",placeItems:"center",background:"rgba(255,255,255,.06)"},children:vg(l.other.username)}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8},children:[c.jsx("strong",{children:wg(l.other.displayName)||(l.other.username?`@${l.other.username}`:"Someone")}),c.jsx("span",{style:ye.subtle,children:yg(l.lastAt)})]}),c.jsx("div",{style:{opacity:.9},children:(u=l.lastMsg)!=null&&u.text?l.lastMsg.text.length>120?`${l.lastMsg.text.slice(0,120)}…`:l.lastMsg.text:"New conversation"})]}),c.jsxs("div",{children:[l.unreadCount>0&&c.jsx("span",{style:{marginRight:10,padding:"2px 8px",borderRadius:999,background:"var(--brand)",color:"#0b1220",fontWeight:800,fontSize:12,boxShadow:"0 0 12px rgba(96,165,250,.45)"},title:`${l.unreadCount} unread`,children:l.unreadCount}),c.jsx("button",{style:ye.btn,onClick:()=>n(`/messages?thread=${encodeURIComponent(l.threadId)}`),children:"Open"})]})]},`t-${l.threadId}`)})]})]})]})}function MA(){return c.jsx("div",{className:"verify-container",children:c.jsxs("div",{className:"verify-card",children:[c.jsx("h1",{className:"verify-title",children:"Proof of Person"}),c.jsx("p",{className:"verify-text",children:"In the age of Artificial Intelligence, it’s more important than ever to know who is human. Bots, fake accounts, and duplicate identities threaten the integrity of online communities."}),c.jsxs("p",{className:"verify-text",children:[c.jsx("strong",{children:"World ID"})," is a system designed to keep out bots and ensure every user is a unique human being. By verifying your humanity, you help build a trusted space where real people can connect, communicate, and share freely."]}),c.jsx("p",{className:"verify-highlight",children:"#HUMANITY was built with this principle in mind — protecting our platform from automation abuse, preserving authenticity, and ensuring a human experience."}),c.jsx("div",{className:"verify-footer",children:"Together, we keep the internet human."})]})})}const jA=t=>{const e=(t||"").toString().trim();return!e||/^user$/i.test(e)?"":e};function M0(){const[t,e]=w.useState(null),[n,r]=w.useState(null);return w.useEffect(()=>{const i=xr(_e,async s=>{if(e(s||null),!s)return r(null);try{const o=await Le(U(F,`users/${s.uid}`)),a=o.exists()?o.val():{};r({uid:s.uid,displayName:a.displayName||a.username||(s.email?s.email.split("@")[0]:""),username:a.username||(s.email?s.email.split("@")[0]:""),avatarUrl:a.avatarUrl||a.photoURL||s.photoURL||"",email:s.email||""})}catch{r({uid:s.uid,displayName:s.email?s.email.split("@")[0]:"",username:s.email?s.email.split("@")[0]:"",avatarUrl:s.photoURL||"",email:s.email||""})}});return()=>i()},[]),{authUser:t,me:n}}function UA(){const[t,e]=w.useState([]),n=w.useCallback(r=>{const i=Math.random().toString(36).slice(2);e(s=>[...s,{id:i,msg:r}]),setTimeout(()=>e(s=>s.filter(o=>o.id!==i)),4200)},[]);return{toasts:t,push:n}}const FA=({list:t})=>c.jsx("div",{className:"toastWrap",children:t.map(e=>c.jsx("div",{className:"toast",children:e.msg},e.id))});function BA({size:t=22}){return c.jsxs("svg",{width:t,height:t,viewBox:"0 0 48 48",fill:"none","aria-hidden":!0,children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"g",x1:"0",y1:"0",x2:"48",y2:"48",children:[c.jsx("stop",{offset:"0%",stopColor:"#60a5fa"}),c.jsx("stop",{offset:"100%",stopColor:"#8b5cf6"})]})}),c.jsx("circle",{cx:"24",cy:"24",r:"21",stroke:"url(#g)",strokeWidth:"3",fill:"none"}),c.jsx("path",{d:"M14 31V17h4v5h12v-5h4v14h-4v-5H18v5h-4z",fill:"url(#g)"})]})}function $A(){const t=Lt(),{authUser:e,me:n}=M0(),r={width:34,height:34,borderRadius:"50%",objectFit:"cover",objectPosition:"center 20%",border:"1px solid var(--line)",boxShadow:"var(--glowSoft)",cursor:"pointer"};return c.jsx("header",{className:"header",children:c.jsxs("div",{className:"headerWrap",children:[c.jsxs("button",{className:"brand",onClick:()=>t("/universe"),title:"Back to Universe",children:[c.jsx("span",{className:"brandIcon",children:c.jsx(BA,{})}),c.jsx("span",{className:"brandText",children:"HUMANITY"})]}),c.jsx("div",{style:{flex:1}}),e&&c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[n!=null&&n.avatarUrl?c.jsx("img",{src:n.avatarUrl,alt:"",style:r,onClick:()=>n&&t(`/profile/${n.uid}`)}):c.jsx("div",{className:"avatarFallback",style:{...r,display:"grid",placeItems:"center"},onClick:()=>n&&t(`/profile/${n.uid}`),children:"👤"}),c.jsx("button",{className:"btn",onClick:async()=>{await Gl(_e),t("/login")},children:"Log out"})]})]})})}function zA(){const t=Lt(),{authUser:e,me:n}=M0(),{toasts:r,push:i}=UA(),[s,o]=w.useState(!0),[a,l]=w.useState(!1),[u,h]=w.useState(""),[d,f]=w.useState(""),[g,v]=w.useState(""),[y,E]=w.useState(!0),[m,p]=w.useState(!0),[_,S]=w.useState(!0),[C,b]=w.useState(!1);w.useEffect(()=>{n!=null&&n.uid&&(h(n.email||""),f(jA(n.displayName)||n.username||""),v(n.username||""),(async()=>{try{const H=await Le(U(F,`userState/${n.uid}/prefs`)),ee=H.exists()?H.val():{};E(ee.pushNewFollowers??!0),p(ee.pushNewMessages??!0),S(ee.dmFromEveryone??!0),b(ee.emailUpdates??!1)}catch{}finally{o(!1)}})())},[n==null?void 0:n.uid,n==null?void 0:n.email,n==null?void 0:n.displayName,n==null?void 0:n.username]);const P=async()=>{if(!(e!=null&&e.uid)||!(n!=null&&n.uid)){i("Sign in first.");return}l(!0);try{await pt(U(F,`userState/${n.uid}/prefs`),{pushNewFollowers:!!y,pushNewMessages:!!m,dmFromEveryone:!!_,emailUpdates:!!C}),await pt(U(F,`userState/${n.uid}`),{updatedAt:Date.now()}),i("Settings saved")}catch(H){console.error("save prefs error",H),i((H==null?void 0:H.message)||"Save failed (check rules for userState)")}finally{l(!1)}},k=async()=>{if(n!=null&&n.uid)try{const H=Date.now();await pt(U(F,`userState/${n.uid}`),{lastSeenFollowers:H,lastSeenMessages:H}),i("Badges cleared")}catch(H){console.error("clear badges error",H),i((H==null?void 0:H.message)||"Could not clear badges")}},O=async()=>{try{if(!u)return i("No email on file.");await Oy(_e,u),i("Password reset email sent")}catch(H){i((H==null?void 0:H.message)||"Reset failed")}},M=async()=>{if(!_e.currentUser||!(n!=null&&n.uid)){i("No user signed in.");return}if(window.confirm("⚠️ This will permanently delete your profile, preferences, posts, and your following list. Continue?"))try{const ee=n.uid;await Promise.all([un(U(F,`users/${ee}`)),un(U(F,`userState/${ee}`))]);const N=await Le(U(F,`following/${ee}`));if(N.exists()){const R=[];N.forEach(A=>{const B=A.key;R.push(un(U(F,`following/${ee}/${B}`))),R.push(un(U(F,`followers/${B}/${ee}`)))}),await Promise.all(R)}await un(U(F,`followers/${ee}`)).catch(()=>{});const x=await Le(U(F,`userPosts/${ee}`));if(x.exists()){const R=[];x.forEach(A=>{const B=A.key;R.push(un(U(F,`posts/${B}`))),R.push(un(U(F,`userPosts/${ee}/${B}`)))}),await Promise.all(R)}await un(U(F,`userPosts/${ee}`)).catch(()=>{}),await dI(_e.currentUser),i("Account deleted"),t("/register")}catch(ee){console.error("deleteAccount error",ee),i((ee==null?void 0:ee.message)||"Failed to delete account (you may need to re-authenticate).")}},ne="/humanity-globe-2560%20(1).webp",j={display:"grid",gap:6},q={background:"var(--panel)",border:"1px solid var(--line)",color:"#eaf2ff",padding:"10px 12px",borderRadius:10,outline:"none"},K={fontWeight:900,letterSpacing:.4,marginBottom:10},se={display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"10px 0"};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"bg-globe","aria-hidden":!0,children:[c.jsx("img",{src:ne,alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),c.jsx("div",{className:"bg-stars"}),c.jsx("div",{className:"bg-vignette"})]}),c.jsx($A,{}),c.jsx("div",{className:"heroSpacer"}),c.jsx(FA,{list:r}),c.jsx("div",{className:"shell",children:c.jsxs("div",{className:"grid",children:[c.jsxs("aside",{className:"panel nav",children:[c.jsx("div",{className:"item",onClick:()=>t("/universe"),children:"Universe"}),c.jsx("div",{className:"item",onClick:()=>n&&t(`/profile/${n.uid}`),children:"Profile"}),c.jsx("div",{className:"item",onClick:()=>t("/messages"),children:"Messages"}),c.jsx("div",{className:"item",onClick:()=>t("/notifications"),children:"Notifications"}),c.jsx("div",{className:"item",onClick:()=>t("/verify"),children:"Verify"}),c.jsx("div",{className:"item",children:"Settings"})]}),c.jsxs("main",{className:"feedCol",children:[c.jsxs("section",{className:"card",style:{padding:18},children:[c.jsx("h2",{style:{margin:0},children:"Settings"}),s&&c.jsx("div",{style:{opacity:.8,marginTop:8},children:"Loading…"})]}),c.jsxs("section",{className:"card",style:{padding:18},children:[c.jsx("div",{style:K,children:"Account"}),c.jsxs("div",{style:{display:"grid",gap:12},children:[c.jsxs("label",{style:j,children:[c.jsx("span",{children:"Email"}),c.jsx("input",{style:q,value:u,disabled:!0})]}),c.jsxs("label",{style:j,children:[c.jsx("span",{children:"Display name"}),c.jsx("input",{style:q,value:d,disabled:!0,title:"Edit on your Profile page"})]}),c.jsxs("label",{style:j,children:[c.jsx("span",{children:"Username"}),c.jsx("input",{style:q,value:g,disabled:!0,title:"Edit on your Profile page"})]}),c.jsxs("div",{style:{display:"flex",gap:10,marginTop:6,flexWrap:"wrap"},children:[c.jsx("button",{className:"btn",onClick:()=>n&&t(`/profile/${n.uid}`),children:"Edit Profile"}),c.jsx("button",{className:"btn",onClick:O,children:"Send password reset"})]})]})]}),c.jsxs("section",{className:"card",style:{padding:18},children:[c.jsx("div",{style:K,children:"Notifications"}),c.jsxs("div",{style:{...se,borderTop:"1px dashed var(--line)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800},children:"New followers"}),c.jsx("div",{style:{opacity:.75,fontSize:13},children:"Show alerts/badges when someone follows you."})]}),c.jsxs("label",{className:"switch",children:[c.jsx("input",{type:"checkbox",checked:y,onChange:H=>E(H.target.checked)}),c.jsx("span",{className:"slider"})]})]}),c.jsxs("div",{style:{...se,borderTop:"1px dashed var(--line)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800},children:"New messages"}),c.jsx("div",{style:{opacity:.75,fontSize:13},children:"Badges for unread direct messages."})]}),c.jsxs("label",{className:"switch",children:[c.jsx("input",{type:"checkbox",checked:m,onChange:H=>p(H.target.checked)}),c.jsx("span",{className:"slider"})]})]}),c.jsxs("div",{style:{...se,borderTop:"1px dashed var(--line)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800},children:"Direct messages"}),c.jsx("div",{style:{opacity:.75,fontSize:13},children:"Allow DMs from everyone (off = followers only)."})]}),c.jsxs("label",{className:"switch",children:[c.jsx("input",{type:"checkbox",checked:_,onChange:H=>S(H.target.checked)}),c.jsx("span",{className:"slider"})]})]}),c.jsxs("div",{style:{...se,borderTop:"1px dashed var(--line)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800},children:"Email updates"}),c.jsx("div",{style:{opacity:.75,fontSize:13},children:"Occasional summary emails. (No emails are sent unless this is on.)"})]}),c.jsxs("label",{className:"switch",children:[c.jsx("input",{type:"checkbox",checked:C,onChange:H=>b(H.target.checked)}),c.jsx("span",{className:"slider"})]})]}),c.jsxs("div",{style:{display:"flex",gap:10,marginTop:16},children:[c.jsx("button",{className:"btn btnPrimary",disabled:a,onClick:P,children:a?"Saving…":"Save settings"}),c.jsx("button",{className:"btn",onClick:k,children:"Clear badges"})]})]}),c.jsxs("section",{className:"card",style:{padding:18},children:[c.jsx("div",{style:K,children:"Danger zone"}),c.jsx("div",{style:{fontSize:13,opacity:.8,marginBottom:10},children:"This will permanently delete your account and profile data. You cannot undo this action."}),c.jsx("button",{className:"btn",onClick:M,style:{border:"1px solid rgba(255,54,94,.7)",background:"rgba(255,54,94,.15)",color:"#ffdfe6"},children:"Delete Account"})]})]}),c.jsxs("aside",{className:"panel",style:{padding:12},children:[c.jsx("div",{className:"rightTitle",children:"Tips"}),c.jsxs("div",{style:{opacity:.85,fontSize:14,lineHeight:1.5},children:["Settings live at ",c.jsx("code",{children:"userState/{uid}/prefs"}),".",c.jsx("br",{}),"Badges clear when you open Messages/Notifications or hit “Clear badges”."]})]})]})})]})}function WA(){return c.jsxs(mC,{children:[c.jsx(jt,{path:"/",element:c.jsx(TC,{})}),c.jsx(jt,{path:"/login",element:c.jsx(iA,{})}),c.jsx(jt,{path:"/register",element:c.jsx(aA,{})}),c.jsx(jt,{path:"/profile/:uid",element:c.jsx(cA,{})}),c.jsx(jt,{path:"/universe",element:c.jsx(wA,{})}),c.jsx(jt,{path:"/messages",element:c.jsx(AA,{})}),c.jsx(jt,{path:"/notifications",element:c.jsx(DA,{})}),c.jsx(jt,{path:"/verify",element:c.jsx(MA,{})}),c.jsx(jt,{path:"/settings",element:c.jsx(zA,{})}),c.jsx(jt,{path:"*",element:c.jsx(fC,{to:"/",replace:!0})})]})}lc.createRoot(document.getElementById("root")).render(c.jsx(Lg.StrictMode,{children:c.jsx(SC,{children:c.jsx(WA,{})})}));export{fr as C,So as E,On as F,bh as L,zr as _,Wl as a,ve as b,VA as c,Za as d,FC as e,HA as f,Vl as g,MC as i,_k as o,rn as r,BC as v};
//# sourceMappingURL=index-entPJ6pS.js.map
