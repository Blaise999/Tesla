/* @license MIT https://raw.githubusercontent.com/jquery/jquery/3.7.1/LICENSE.txt */
{
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

}
/* @license GPL-2.0-or-later https://git.drupalcode.org/project/once/-/raw/v1.0.1/LICENSE.md */
{
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

}
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
{
/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {
  // Use direct child elements to harden against XSS exploits when CSP is on.
  const settingsElement = document.querySelector(
    'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]',
  );

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();

}
{
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = { behaviors: {}, locale: {} };

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (
  Drupal,
  drupalSettings,
  drupalTranslations,
  console,
  Proxy,
  Reflect,
) {
  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(() => {
      throw error;
    }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {Document|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {Document|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} [detach]
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * once('behavior-name', selector, context);` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {Document|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `once.filter()` and `once.remove()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `once.remove('behaviorName', selector, context)`,
   * to ensure the behavior is detached only from previously processed elements.
   *
   * @param {Document|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    const processedArgs = {};
    // Transform arguments before inserting them.
    Object.keys(args || {}).forEach((key) => {
      switch (key.charAt(0)) {
        // Escaped only.
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        // Pass-through.
        case '!':
          processedArgs[key] = args[key];
          break;

        // Escaped and placeholder.
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      // Order the keys by the character length. The shortest one is the first.
      keys.sort((a, b) => a.length - b.length);
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    const key = keys.pop();
    const fragments = str.split(key);

    if (keys.length) {
      for (let i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.strings &&
      drupalTranslations.strings[options.context] &&
      drupalTranslations.strings[options.context][str]
    ) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    const urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    } catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {boolean}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    let absoluteUrl = Drupal.url.toAbsolute(url);
    let { protocol } = window.location;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.startsWith('https:')) {
      protocol = 'https:';
    }
    let baseUrl = `${protocol}//${
      window.location.host
    }${drupalSettings.path.baseUrl.slice(0, -1)}`;

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.startsWith(`${baseUrl}/`);
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Make sure it is clear this is singular,
   *   to ease translation (e.g. use "1 new comment" instead of "1 new"). Do not
   *   use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Make sure it is clear this is plural, to
   *   ease translation. Use @count in place of the item count, as in "@count
   *   new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    const pluralDelimiter = drupalSettings.pluralDelimiter;
    const translations = Drupal.t(
      singular + pluralDelimiter + plural,
      args,
      options,
    ).split(pluralDelimiter);
    let index = 0;

    // Determine the index of the plural form.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.pluralFormula
    ) {
      index =
        count in drupalTranslations.pluralFormula
          ? drupalTranslations.pluralFormula[count]
          : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Triggers deprecation error.
   *
   * Deprecation errors are only triggered if deprecation errors haven't
   * been suppressed.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {string} deprecation.message
   *   The deprecation message.
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecationError = ({ message }) => {
    if (
      drupalSettings.suppressDeprecationErrors === false &&
      typeof console !== 'undefined' &&
      console.warn
    ) {
      console.warn(`[Deprecation] ${message}`);
    }
  };

  /**
   * Triggers deprecation error when object property is being used.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {Object} deprecation.target
   *   The targeted object.
   * @param {string} deprecation.deprecatedProperty
   *   A key of the deprecated property.
   * @param {string} deprecation.message
   *   The deprecation message.
   * @returns {Object}
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecatedProperty = ({ target, deprecatedProperty, message }) => {
    // Proxy and Reflect are not supported by all browsers. Unsupported browsers
    // are ignored since this is a development feature.
    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: (target, key, ...rest) => {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message });
        }
        return Reflect.get(target, key, ...rest);
      },
    });
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func, ...args) {
    if (func in Drupal.theme) {
      return Drupal.theme[func](...args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
  };

  /**
   * Determine if an element is visible.
   *
   * @param {HTMLElement} elem
   *   The element to check.
   *
   * @return {boolean}
   *  True if the element is visible.
   */
  Drupal.elementIsVisible = function (elem) {
    return !!(
      elem.offsetWidth ||
      elem.offsetHeight ||
      elem.getClientRects().length
    );
  };

  /**
   * Determine if an element is hidden.
   *
   * @param {HTMLElement} elem
   *   The element to check.
   *
   * @return {boolean}
   *  True if the element is hidden.
   */
  Drupal.elementIsHidden = function (elem) {
    return !Drupal.elementIsVisible(elem);
  };
})(
  Drupal,
  window.drupalSettings,
  window.drupalTranslations,
  window.console,
  window.Proxy,
  window.Reflect,
);

}
{
// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// Class indicating that JS is enabled; used for styling purpose.
document.documentElement.className += ' js';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (Drupal, drupalSettings) {
  /**
   * Calls callback when document ready.
   *
   * @param {function} callback
   *   The function to be called on document ready.
   */
  const domReady = (callback) => {
    const listener = () => {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  // Attach all behaviors.
  domReady(() => {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);

}
{
(function (onReady) {
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', onReady, { once: true });
    } else {
        onReady();
    }
})(() => {
  var chatLinks = document.querySelectorAll('a[href="#avaya-chat-modal"],button[href="#avaya-chat-modal"]');
  Array.from(chatLinks).forEach((link) => {
    if (link) {
    	link.addEventListener('click', () => {
        var chatTrigger = document.querySelector('button[data-tds-open-modal="avaya-chat-modal"]');
  			if (chatTrigger) {
          chatTrigger.click();
  			}
    	});
    }
  });
});
}
{
/**
 * @file
 * Drupal's states library.
 */

(function ($, Drupal) {
  /**
   * The base States namespace.
   *
   * Having the local states variable allows us to use the States namespace
   * without having to always declare "Drupal.states".
   *
   * @namespace Drupal.states
   */
  const states = {
    /**
     * An array of functions that should be postponed.
     */
    postponed: [],
  };

  Drupal.states = states;

  /**
   * Inverts a (if it's not undefined) when invertState is true.
   *
   * @function Drupal.states~invert
   *
   * @param {*} a
   *   The value to maybe invert.
   * @param {boolean} invertState
   *   Whether to invert state or not.
   *
   * @return {boolean}
   *   The result.
   */
  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }

  /**
   * Compares two values while ignoring undefined values.
   *
   * @function Drupal.states~compare
   *
   * @param {*} a
   *   Value a.
   * @param {*} b
   *   Value b.
   *
   * @return {boolean}
   *   The comparison result.
   */
  function compare(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }

    return typeof a === 'undefined' || typeof b === 'undefined';
  }

  /**
   * Bitwise AND with a third undefined state.
   *
   * @function Drupal.states~ternary
   *
   * @param {*} a
   *   Value a.
   * @param {*} b
   *   Value b
   *
   * @return {boolean}
   *   The result.
   */
  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    }
    if (typeof b === 'undefined') {
      return a;
    }

    return a && b;
  }

  /**
   * Attaches the states.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches states behaviors.
   */
  Drupal.behaviors.states = {
    attach(context, settings) {
      // Uses once to avoid duplicates if attach is called multiple times.
      const elements = once('states', '[data-drupal-states]', context);
      const il = elements.length;
      for (let i = 0; i < il; i++) {
        const config = JSON.parse(
          elements[i].getAttribute('data-drupal-states'),
        );
        Object.keys(config || {}).forEach((state) => {
          new states.Dependent({
            element: $(elements[i]),
            state: states.State.sanitize(state),
            constraints: config[state],
          });
        });
      }

      // Execute all postponed functions now.
      while (states.postponed.length) {
        states.postponed.shift()();
      }
    },
  };

  /**
   * Object representing an element that depends on other elements.
   *
   * @constructor Drupal.states.Dependent
   *
   * @param {object} args
   *   Object with the following keys (all of which are required)
   * @param {jQuery} args.element
   *   A jQuery object of the dependent element
   * @param {Drupal.states.State} args.state
   *   A State object describing the state that is dependent
   * @param {object} args.constraints
   *   An object with dependency specifications. Lists all elements that this
   *   element depends on. It can be nested and can contain
   *   arbitrary AND and OR clauses.
   */
  states.Dependent = function (args) {
    $.extend(this, { values: {}, oldValue: null }, args);

    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach((selector) => {
      this.initializeDependee(selector, this.dependees[selector]);
    });
  };

  /**
   * Comparison functions for comparing the value of an element with the
   * specification from the dependency settings. If the object type can't be
   * found in this list, the === operator is used by default.
   *
   * @name Drupal.states.Dependent.comparisons
   *
   * @prop {function} RegExp
   * @prop {function} Function
   * @prop {function} Array
   * @prop {function} Number
   */
  states.Dependent.comparisons = {
    RegExp(reference, value) {
      return reference.test(value);
    },
    Function(reference, value) {
      // The "reference" variable is a comparison function.
      return reference(value);
    },
    Array(reference, value) {
      // Make sure value is an array.
      if (!Array.isArray(value)) {
        return false;
      }

      // The arrays values should match.
      return JSON.stringify(reference.sort()) === JSON.stringify(value.sort());
    },
    Number(reference, value) {
      // If "reference" is a number and "value" is a string, then cast
      // reference as a string before applying the strict comparison in
      // compare().
      // Otherwise numeric keys in the form's #states array fail to match
      // string values returned from jQuery's val().
      return typeof value === 'string'
        ? compare(reference.toString(), value)
        : compare(reference, value);
    },
  };

  states.Dependent.prototype = {
    /**
     * Initializes one of the elements this dependent depends on.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {string} selector
     *   The CSS selector describing the dependee.
     * @param {object} dependeeStates
     *   The list of states that have to be monitored for tracking the
     *   dependee's compliance status.
     */
    initializeDependee(selector, dependeeStates) {
      // Cache for the states of this dependee.
      this.values[selector] = {};

      Object.keys(dependeeStates).forEach((i) => {
        let state = dependeeStates[i];
        // Make sure we're not initializing this selector/state combination
        // twice.
        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }

        state = states.State.sanitize(state);

        // Initialize the value of this state.
        this.values[selector][state.name] = null;

        // Monitor state changes of the specified state for this dependee.
        $(selector).on(`state:${state}`, { selector, state }, (e) => {
          this.update(e.data.selector, e.data.state, e.value);
        });

        // Make sure the event we just bound ourselves to is actually fired.
        new states.Trigger({ selector, state });
      });
    },

    /**
     * Compares a value with a reference value.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {object} reference
     *   The value used for reference.
     * @param {string} selector
     *   CSS selector describing the dependee.
     * @param {Drupal.states.State} state
     *   A State object describing the dependee's updated state.
     *
     * @return {boolean}
     *   true or false.
     */
    compare(reference, selector, state) {
      const value = this.values[selector][state.name];
      if (reference.constructor.name in states.Dependent.comparisons) {
        // Use a custom compare function for certain reference value types.
        return states.Dependent.comparisons[reference.constructor.name](
          reference,
          value,
        );
      }

      // Do a plain comparison otherwise.
      return compare(reference, value);
    },

    /**
     * Update the value of a dependee's state.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {string} selector
     *   CSS selector describing the dependee.
     * @param {Drupal.states.state} state
     *   A State object describing the dependee's updated state.
     * @param {string} value
     *   The new value for the dependee's updated state.
     */
    update(selector, state, value) {
      // Only act when the 'new' value is actually new.
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },

    /**
     * Triggers change events in case a state changed.
     *
     * @memberof Drupal.states.Dependent#
     */
    reevaluate() {
      // Check whether any constraint for this dependent state is satisfied.
      let value = this.verifyConstraints(this.constraints);

      // Only invoke a state change event when the value actually changed.
      if (value !== this.oldValue) {
        // Store the new value so that we can compare later whether the value
        // actually changed.
        this.oldValue = value;

        // Normalize the value to match the normalized state name.
        value = invert(value, this.state.invert);

        // By adding "trigger: true", we ensure that state changes don't go into
        // infinite loops.
        this.element.trigger({
          type: `state:${this.state}`,
          value,
          trigger: true,
        });
      }
    },

    /**
     * Evaluates child constraints to determine if a constraint is satisfied.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {object|Array} constraints
     *   A constraint object or an array of constraints.
     * @param {string} selector
     *   The selector for these constraints. If undefined, there isn't yet a
     *   selector that these constraints apply to. In that case, the keys of the
     *   object are interpreted as the selector if encountered.
     *
     * @return {boolean}
     *   true or false, depending on whether these constraints are satisfied.
     */
    verifyConstraints(constraints, selector) {
      let result;
      if (Array.isArray(constraints)) {
        // This constraint is an array (OR or XOR).
        const hasXor = $.inArray('xor', constraints) === -1;
        const len = constraints.length;
        for (let i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            const constraint = this.checkConstraints(
              constraints[i],
              selector,
              i,
            );
            // Return if this is OR and we have a satisfied constraint or if
            // this is XOR and we have a second satisfied constraint.
            if (constraint && (hasXor || result)) {
              return hasXor;
            }
            result = result || constraint;
          }
        }
      }
      // Make sure we don't try to iterate over things other than objects. This
      // shouldn't normally occur, but in case the condition definition is
      // bogus, we don't want to end up with an infinite loop.
      else if ($.isPlainObject(constraints)) {
        // This constraint is an object (AND).
        // eslint-disable-next-line no-restricted-syntax
        for (const n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(
              result,
              this.checkConstraints(constraints[n], selector, n),
            );
            // False and anything else will evaluate to false, so return when
            // any false condition is found.
            if (result === false) {
              return false;
            }
          }
        }
      }
      return result;
    },

    /**
     * Checks whether the value matches the requirements for this constraint.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @param {string|Array|object} value
     *   Either the value of a state or an array/object of constraints. In the
     *   latter case, resolving the constraint continues.
     * @param {string} [selector]
     *   The selector for this constraint. If undefined, there isn't yet a
     *   selector that this constraint applies to. In that case, the state key
     *   is propagates to a selector and resolving continues.
     * @param {Drupal.states.State} [state]
     *   The state to check for this constraint. If undefined, resolving
     *   continues. If both selector and state aren't undefined and valid
     *   non-numeric strings, a lookup for the actual value of that selector's
     *   state is performed. This parameter is not a State object but a pristine
     *   state string.
     *
     * @return {boolean}
     *   true or false, depending on whether this constraint is satisfied.
     */
    checkConstraints(value, selector, state) {
      // Normalize the last parameter. If it's non-numeric, we treat it either
      // as a selector (in case there isn't one yet) or as a trigger/state.
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        // Propagate the state to the selector when there isn't one yet.
        selector = state;
        state = null;
      }

      if (state !== null) {
        // Constraints is the actual constraints of an element to check for.
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }

      // Resolve this constraint as an AND/OR operator.
      return this.verifyConstraints(value, selector);
    },

    /**
     * Gathers information about all required triggers.
     *
     * @memberof Drupal.states.Dependent#
     *
     * @return {object}
     *   An object describing the required triggers.
     */
    getDependees() {
      const cache = {};
      // Swivel the lookup function so that we can record all available
      // selector- state combinations for initialization.
      const _compare = this.compare;
      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
        // Return nothing (=== undefined) so that the constraint loops are not
        // broken.
      };

      // This call doesn't actually verify anything but uses the resolving
      // mechanism to go through the constraints array, trying to look up each
      // value. Since we swivelled the compare function, this comparison returns
      // undefined and lookup continues until the very end. Instead of lookup up
      // the value, we record that combination of selector and state so that we
      // can initialize all triggers.
      this.verifyConstraints(this.constraints);
      // Restore the original function.
      this.compare = _compare;

      return cache;
    },
  };

  /**
   * @constructor Drupal.states.Trigger
   *
   * @param {object} args
   *   Trigger arguments.
   */
  states.Trigger = function (args) {
    $.extend(this, args);

    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);

      // Only call the trigger initializer when it wasn't yet attached to this
      // element. Otherwise we'd end up with duplicate events.
      if (!this.element.data(`trigger:${this.state}`)) {
        this.initialize();
      }
    }
  };

  states.Trigger.prototype = {
    /**
     * @memberof Drupal.states.Trigger#
     */
    initialize() {
      const trigger = states.Trigger.states[this.state];

      if (typeof trigger === 'function') {
        // We have a custom trigger initialization function.
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach((event) => {
          this.defaultTrigger(event, trigger[event]);
        });
      }

      // Mark this trigger as initialized for this element.
      this.element.data(`trigger:${this.state}`, true);
    },

    /**
     * @memberof Drupal.states.Trigger#
     *
     * @param {jQuery.Event} event
     *   The event triggered.
     * @param {function} valueFn
     *   The function to call.
     */
    defaultTrigger(event, valueFn) {
      let oldValue = valueFn.call(this.element);

      // Attach the event callback.
      this.element.on(
        event,
        function (e) {
          const value = valueFn.call(this.element, e);
          // Only trigger the event if the value has actually changed.
          if (oldValue !== value) {
            this.element.trigger({
              type: `state:${this.state}`,
              value,
              oldValue,
            });
            oldValue = value;
          }
        }.bind(this),
      );

      states.postponed.push(
        function () {
          // Trigger the event once for initialization purposes.
          this.element.trigger({
            type: `state:${this.state}`,
            value: oldValue,
            oldValue: null,
          });
        }.bind(this),
      );
    },
  };

  /**
   * This list of states contains functions that are used to monitor the state
   * of an element. Whenever an element depends on the state of another element,
   * one of these trigger functions is added to the dependee so that the
   * dependent element can be updated.
   *
   * @name Drupal.states.Trigger.states
   *
   * @prop empty
   * @prop checked
   * @prop value
   * @prop collapsed
   */
  states.Trigger.states = {
    // 'empty' describes the state to be monitored.
    empty: {
      // 'keyup' is the (native DOM) event that we watch for.
      keyup() {
        // The function associated with that trigger returns the new value for
        // the state.
        return this.val() === '';
      },
      // Listen to 'change' for number native "spinner" widgets.
      change() {
        return this.val() === '';
      },
    },

    checked: {
      change() {
        // prop() and attr() only takes the first element into account. To
        // support selectors matching multiple checkboxes, iterate over all and
        // return whether any is checked.
        let checked = false;
        this.each(function () {
          // Use prop() here as we want a boolean of the checkbox state.
          // @see http://api.jquery.com/prop/
          checked = $(this).prop('checked');
          // Break the each() loop if this is checked.
          return !checked;
        });
        return checked;
      },
    },

    // For radio buttons, only return the value if the radio button is selected.
    value: {
      keyup() {
        // Radio buttons share the same :input[name="key"] selector.
        if (this.length > 1) {
          // Initial checked value of radios is undefined, so we return false.
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
      change() {
        // Radio buttons share the same :input[name="key"] selector.
        if (this.length > 1) {
          // Initial checked value of radios is undefined, so we return false.
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
    },

    collapsed: {
      collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e
          ? e.value
          : !this[0].hasAttribute('open');
      },
    },
  };

  /**
   * A state object is used for describing the state and performing aliasing.
   *
   * @constructor Drupal.states.State
   *
   * @param {string} state
   *   The name of the state.
   */
  states.State = function (state) {
    /**
     * Original unresolved name.
     */
    this.pristine = state;
    this.name = state;

    // Normalize the state name.
    let process = true;
    do {
      // Iteratively remove exclamation marks and invert the value.
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }

      // Replace the state with its normalized name.
      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };

  /**
   * Creates a new State object by sanitizing the passed value.
   *
   * @name Drupal.states.State.sanitize
   *
   * @param {string|Drupal.states.State} state
   *   A state object or the name of a state.
   *
   * @return {Drupal.states.state}
   *   A state object.
   */
  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }

    return new states.State(state);
  };

  /**
   * This list of aliases is used to normalize states and associates negated
   * names with their respective inverse state.
   *
   * @name Drupal.states.State.aliases
   */
  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly',
  };

  states.State.prototype = {
    /**
     * @memberof Drupal.states.State#
     */
    invert: false,

    /**
     * Ensures that just using the state object returns the name.
     *
     * @memberof Drupal.states.State#
     *
     * @return {string}
     *   The name of the state.
     */
    toString() {
      return this.name;
    },
  };

  /**
   * Global state change handlers. These are bound to "document" to cover all
   * elements whose state changes. Events sent to elements within the page
   * bubble up to these handlers. We use this system so that themes and modules
   * can override these state change handlers for particular parts of a page.
   */

  const $document = $(document);
  $document.on('state:disabled', (e) => {
    // Only act when this change was triggered by a dependency and not by the
    // element monitoring itself.
    const tagsSupportDisable =
      'button, fieldset, optgroup, option, select, textarea, input';
    if (e.trigger) {
      $(e.target)
        .closest('.js-form-item, .js-form-submit, .js-form-wrapper')
        .toggleClass('form-disabled', e.value)
        .find(tagsSupportDisable)
        .addBack(tagsSupportDisable)
        .prop('disabled', e.value);
    }
  });

  $document.on('state:readonly', (e) => {
    if (e.trigger) {
      $(e.target)
        .closest('.js-form-item, .js-form-submit, .js-form-wrapper')
        .toggleClass('form-readonly', e.value)
        .find('input, textarea')
        .prop('readonly', e.value);
    }
  });

  $document.on('state:required', (e) => {
    if (e.trigger) {
      if (e.value) {
        const label = `label${e.target.id ? `[for=${e.target.id}]` : ''}`;
        const $label = $(e.target)
          .attr({ required: 'required', 'aria-required': 'true' })
          .closest('.js-form-item, .js-form-wrapper')
          .find(label);
        // Avoids duplicate required markers on initialization.
        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target)
          .removeAttr('required aria-required')
          .closest('.js-form-item, .js-form-wrapper')
          .find('label.js-form-required')
          .removeClass('js-form-required form-required');
      }
    }
  });

  $document.on('state:visible', (e) => {
    if (e.trigger) {
      let $element = $(e.target).closest(
        '.js-form-item, .js-form-submit, .js-form-wrapper',
      );
      // For links, update the state of itself instead of the wrapper.
      if (e.target.tagName === 'A') {
        $element = $(e.target);
      }
      $element.toggle(e.value);
    }
  });

  $document.on('state:checked', (e) => {
    if (e.trigger) {
      $(e.target)
        .closest('.js-form-item, .js-form-wrapper')
        .find('input')
        .prop('checked', e.value)
        .trigger('change');
    }
  });

  $document.on('state:collapsed', (e) => {
    if (e.trigger) {
      if (e.target.hasAttribute('open') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });
})(jQuery, Drupal);

}
{
/*! For license information please see tds.js.LICENSE.txt */
(()=>{"use strict";var t=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),e="undefined"==typeof Element,n=e?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,o=!e&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return null==t?void 0:t.ownerDocument},r=function t(e,n){var o;void 0===n&&(n=!0);var r=null==e||null===(o=e.getAttribute)||void 0===o?void 0:o.call(e,"inert");return""===r||"true"===r||n&&e&&t(e.parentNode)},i=function e(o,i,a){for(var l=[],s=Array.from(o);s.length;){var d=s.shift();if(!r(d,!1))if("SLOT"===d.tagName){var c=d.assignedElements(),u=e(c.length?c:d.children,!0,a);a.flatten?l.push.apply(l,u):l.push({scopeParent:d,candidates:u})}else{n.call(d,t)&&a.filter(d)&&(i||!o.includes(d))&&l.push(d);var p=d.shadowRoot||"function"==typeof a.getShadowRoot&&a.getShadowRoot(d),f=!r(p,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(d));if(p&&f){var v=e(!0===p?d.children:p.children,!0,a);a.flatten?l.push.apply(l,v):l.push({scopeParent:d,candidates:v})}else s.unshift.apply(s,d.children)}}return l},a=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},l=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var e,n=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n}(t))&&!a(t)?0:t.tabIndex},s=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},d=function(t){return"INPUT"===t.tagName},c=function(t){var e=t.getBoundingClientRect(),n=e.width,o=e.height;return 0===n&&0===o},u=function(t,e){return!(e.disabled||r(e)||function(t){return d(t)&&"hidden"===t.type}(e)||function(t,e){var r=e.displayCheck,i=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var a=n.call(t,"details>summary:first-of-type")?t.parentElement:t;if(n.call(a,"details:not([open]) *"))return!0;if(r&&"full"!==r&&"legacy-full"!==r){if("non-zero-area"===r)return c(t)}else{if("function"==typeof i){for(var l=t;t;){var s=t.parentElement,d=o(t);if(s&&!s.shadowRoot&&!0===i(s))return c(t);t=t.assignedSlot?t.assignedSlot:s||d===t.ownerDocument?s:d.host}t=l}if(function(t){var e,n,r,i,a=t&&o(t),l=null===(e=a)||void 0===e?void 0:e.host,s=!1;if(a&&a!==t)for(s=!!(null!==(n=l)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(l)||null!=t&&null!==(i=t.ownerDocument)&&void 0!==i&&i.contains(t));!s&&l;){var d,c,u;s=!(null===(c=l=null===(d=a=o(l))||void 0===d?void 0:d.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(l))}return s}(t))return!t.getClientRects().length;if("legacy-full"!==r)return!0}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(t){return"SUMMARY"===t.tagName})}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var o=0;o<e.children.length;o++){var r=e.children.item(o);if("LEGEND"===r.tagName)return!!n.call(e,"fieldset[disabled] *")||!r.contains(t)}return!0}e=e.parentElement}return!1}(e))},p=function(t,e){return!(function(t){return function(t){return d(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||o(t),r=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=r(window.CSS.escape(t.name));else try{e=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var i=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!i||i===t}(t)}(e)||l(e)<0||!u(t,e))},f=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},v=function t(e){var n=[],o=[];return e.forEach(function(e,r){var i=!!e.scopeParent,s=i?e.scopeParent:e,d=function(t,e){var n=l(t);return n<0&&e&&!a(t)?0:n}(s,i),c=i?t(e.candidates):s;0===d?i?n.push.apply(n,c):n.push(s):o.push({documentOrder:r,tabIndex:d,item:e,isScope:i,content:c})}),o.sort(s).reduce(function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t},[]).concat(n)};function m(e){return o=>{if("Tab"===o.key&&!e.contains(o.target)){var a=(l=e,d=(s=s||{}).getShadowRoot?i([l],s.includeContainer,{filter:p.bind(null,s),flatten:!1,getShadowRoot:s.getShadowRoot,shadowRootFilter:f}):function(e,o,i){if(r(e))return[];var a=Array.prototype.slice.apply(e.querySelectorAll(t));return o&&n.call(e,t)&&a.unshift(e),a.filter(i)}(l,s.includeContainer,p.bind(null,s)),v(d)||[]);a.length&&(o.shiftKey?a[a.length-1].focus():a[0].focus())}var l,s,d}}function y(t){return e=>{"Tab"===e.key&&e.repeat&&m(t)(e)}}var h=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{onCloseFinish:o,onCloseStart:r}=n;t.removeAttribute("open"),t.removeAttribute("aria-hidden"),e=t,document.removeEventListener("keyup",m(e)),document.removeEventListener("keydown",y(e)),document.body.classList.remove("tds-modal--is-open"),t.classList.remove("tds-modal--scrolling"),r&&r(),o&&setTimeout(o,500)},g=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{onOpen:o}=n;t.setAttribute("open",""),t.setAttribute("aria-hidden","false"),t.nextElementSibling&&t.nextElementSibling.classList.contains("tds-modal-backdrop")&&document.body.classList.add("tds-modal--is-open"),e=t,document.addEventListener("keyup",m(e)),document.addEventListener("keydown",y(e)),window.addEventListener("keyup",e=>{switch(e.key){case"Esc":case"Escape":h(t,n)}}),t&&(t.scrollTop=0,t.addEventListener("scroll",()=>{void 0!==t.getAttribute("open")&&t.scrollTop>0?t.classList.add("tds-modal--scrolling"):t.classList.remove("tds-modal--scrolling")})),o&&o()},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{parent:n=document}=e,o=t.getAttribute("data-tds-open-modal")||"",r=n.querySelector("#".concat(o))||document.getElementById(o);r?t.addEventListener("click",()=>g(r,e)):console.warn("TDS Modal does not have the proper vanilla html structure. See the docs for example usage")},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{parent:n=document}=e,o=t.getAttribute("data-tds-close-modal")||"",r=n.querySelector("#".concat(o))||document.getElementById(o);r?t.addEventListener("click",()=>{h(r,e)}):console.warn("TDS Modal does not have the proper vanilla html structure. See the docs for example usage")},E=t=>{var{enableTransitions:e,onChange:n,tabList:o,target:r}=t,i=Array.from(null==o?void 0:o.querySelectorAll(".tds-tab")).find(t=>"true"===t.getAttribute("aria-selected")||t.classList.contains("tds-tab--active"));return i&&(i.setAttribute("aria-selected","false"),i.classList.remove("tds-tab--active"),i.setAttribute("tabindex","-1")),r.classList.add("tds-tab--active"),r.setAttribute("aria-selected","true"),r.setAttribute("tabindex","0"),((t,e,n)=>{var o=n?".5s cubic-bezier(.75,0,0,1)":"opacity .5s ease, visibility 0s 0s";if(t.style.setProperty("--tds-animate-backdrop-transition",o),t.style.setProperty("--tds-animate-backdrop-opacity","1"),t.style.setProperty("--tds-animate-backdrop-visibility","inherit"),e){var{offsetHeight:r,offsetLeft:i,offsetTop:a,offsetWidth:l}=e;t.style.setProperty("--tds-animate-backdrop-top","".concat(a,"px")),t.style.setProperty("--tds-animate-backdrop-left","".concat(i,"px")),t.style.setProperty("--tds-animate-backdrop-height","".concat(r,"px")),t.style.setProperty("--tds-animate-backdrop-width","".concat(l,"px"))}})(o,r,e),n&&n(r),r},L=(t,e)=>{var n=t[e];n&&n.focus()},S=t=>{var{key:e,target:n}=t,o=n?getComputedStyle(n).direction:"ltr";("rtl"===o&&"ArrowLeft"===e||"ltr"===o&&"ArrowRight"===e||"ArrowDown"===e)&&(t.preventDefault(),L(n,"nextElementSibling")),("rtl"===o&&"ArrowRight"===e||"ltr"===o&&"ArrowLeft"===e||"ArrowUp"===e)&&(t.preventDefault(),L(n,"previousElementSibling"))},A=t=>{var e,{target:n}=t,o=document.getElementById(n.getAttribute("aria-controls")||"");o&&(Array.from((null==o||null===(e=o.parentElement)||void 0===e?void 0:e.querySelectorAll(".tds-tab-panel"))||[]).forEach(t=>{t.classList.remove("tds-tab-panel--active"),t.removeAttribute("tabindex")}),o.classList.add("tds-tab-panel--active"),o.setAttribute("tabindex","0"))},k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{onTabChange:n}=e,o=Array.from(null==t?void 0:t.querySelectorAll(".tds-tab")),r=o.find(t=>"true"===t.getAttribute("aria-selected")||t.classList.contains("tds-tab--active"))||o[0];window.requestAnimationFrame(()=>{r=E({enableTransitions:!1,onChange:n,tabList:t,target:r})}),window.addEventListener("resize",()=>{r=E({enableTransitions:!0,onChange:n,tabList:t,target:r})}),o.forEach(e=>{var o=e=>{var o=e.target,i="button"===(null==o?void 0:o.localName)?o:null==o?void 0:o.closest("button.tds-tab");r=E({enableTransitions:!0,onChange:n,tabList:t,target:i||o}),A({target:r})};e.addEventListener("click",o),e.addEventListener("focus",o),e.addEventListener("keydown",S)})},x=t=>{var e=t?getComputedStyle(t):null,n=e&&"fixed"===e.getPropertyValue("position"),o=e&&["auto","scroll"].includes(e.getPropertyValue("overflow"));return n&&o?t:t&&x(t.parentElement)};window.TDSModals={closeModal:h,initModals:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{parent:e=document}=t,n=Array.from(e.querySelectorAll("[data-tds-open-modal]")),o=Array.from(e.querySelectorAll("[data-tds-close-modal]")),r=Array.from(e.querySelectorAll("[data-tds-toggle-modal]"));n.forEach(e=>{b(e,t)}),o.forEach(e=>{w(e,t)}),r.forEach(e=>{!function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{parent:n=document}=e,o=t.getAttribute("data-tds-toggle-modal")||"",r=n.querySelector("#".concat(o))||document.getElementById(o);r?t.addEventListener("click",()=>{r.hasAttribute("open")?h(r,e):g(r,e)}):console.warn("TDS Modal does not have the proper vanilla html structure. See the docs for example usage")}(e,t)})},initModalOpener:b,initModalCloser:w,openModal:g},window.TDSTabs={initTabLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{parent:e=document}=t;Array.from(e.querySelectorAll(".tds-tab-list")).forEach(e=>{k(e,t)})},initTabList:k,selectPanel:A,selectTab:E},window.TDSTooltips=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{parent:e=document}=t;Array.from(e.querySelectorAll(".tds-tooltip")).forEach(e=>{!function(t){var e,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{closeOnBlur:r,isClickToOpen:i,onClose:a,onOpen:l}=o,{align:s,fullWidth:d,orientation:c,overlay:u}=function(t){var e=t.classList.contains("tds-tooltip--overlay"),n=t.classList.contains("tds-tooltip--width-full"),o=null,r=null;return t.classList.contains("tds-tooltip--align-start")&&(o="start"),t.classList.contains("tds-tooltip--align-end")&&(o="end"),t.classList.contains("tds-tooltip--orientation-down")&&(r="down"),{align:o,fullWidth:n,orientation:r,overlay:e}}(t),p=null===(e=t.parentElement)||void 0===e?void 0:e.querySelector("[data-tds-tooltip-trigger]"),f=()=>{u?((t,e,n,o)=>{if("undefined"!=typeof window&&null!=t&&t.parentNode){var r,i,a=null===(r=t.parentElement)||void 0===r?void 0:r.getBoundingClientRect();if(!a)return;var l=t.getBoundingClientRect(),s=null===(i=x(t.parentElement))||void 0===i?void 0:i.getBoundingClientRect();((t,e,n,o,r,i)=>{if("undefined"!=typeof window){var a=i?o.x-i.x:o.x;if(n)t.style.left="".concat(a,"px"),t.style.inlineSize="".concat(o.width,"px"),t.style.maxInlineSize="".concat(o.width,"px");else{var l=parseInt(getComputedStyle(t).getPropertyValue("--tds-tooltip--offset-padding")),s=parseInt(getComputedStyle(t).getPropertyValue("--tds-tooltip--offset-align")),d=-r.width/2+o.width/2+s/2;"end"===e&&(d=-r.width+s+o.width),"start"===e&&(d=-s);var c=-(a+d-l),u=window.innerWidth-(a+d)-r.width-l,p=a+d+Math.min(0,u)+Math.max(0,c);t.style.left="".concat(p,"px")}}})(t,e,Boolean(o),a,l,s),((t,e,n,o,r)=>{if("undefined"!=typeof window){var i=r?n.y-r.y:n.y,a=parseInt(getComputedStyle(t).getPropertyValue("--tds-tooltip--offset-align")),l=-(i-o.height-a),s=window.innerHeight-(i+n.height)-o.height+a,d=i-o.height-a,c=i+n.height+a,u="down"===e?s<0?d:c:l>0?c:d;t.style.top="".concat(u,"px")}})(t,n,a,l,s)}})(t,s,c,d):(t=>{if("undefined"!=typeof window&&null!=t&&t.offsetParent){var e=t.getBoundingClientRect(),n=t.offsetParent.getBoundingClientRect();((t,e,n)=>{if("undefined"!=typeof window){var{innerWidth:o}=window,r=parseInt(getComputedStyle(t).getPropertyValue("--tds-tooltip--offset-padding")),i=-(n.left+n.width/2-e.width/2-r),a=-(n.left+n.width/2+e.width/2+r-o);i>0&&t.style.setProperty("--tds-tooltip--x-offset","".concat(i,"px")),a<0&&t.style.setProperty("--tds-tooltip--x-offset","".concat(a,"px"))}})(t,e,n),((t,e,n)=>{if("undefined"!=typeof window){var{innerHeight:o}=window,r=getComputedStyle(t).getPropertyValue("--tds-tooltip--safe-space"),i=parseInt(getComputedStyle(t).getPropertyValue("--tds-tooltip--offset-padding"));t.style.removeProperty("top"),t.style.removeProperty("bottom"),n.bottom+e.height+i>o&&(t.style.setProperty("top","auto"),t.style.setProperty("bottom","calc(100% + ".concat(r,")"))),n.top-e.height-i<0&&(t.style.setProperty("top","calc(100% + ".concat(r,")")),t.style.setProperty("bottom","auto"))}})(t,e,n)}})(t)};t.classList.contains("tds-tooltip--open")&&f();var v,m,y=e=>{var n;null!==(n=t.parentElement)&&void 0!==n&&n.contains(e.target)||w(e)},h=t=>{"Escape"!==t.key&&"Esc"!==t.key||w(t)},g=e=>{var n=e.relatedTarget;n&&n!==p&&!t.contains(n)&&w()},b=e=>{t.classList.add("tds-tooltip--open"),t.classList.remove("tds-tooltip--closed"),f(),n&&clearTimeout(n),u&&document.addEventListener("scroll",f),document.addEventListener("resize",f),document.addEventListener("keydown",h),document.addEventListener("click",y),null==p||p.removeEventListener("click",b),null==p||p.addEventListener("click",w),r&&(null==t||t.addEventListener("focusout",g)),l&&l(e)},w=e=>{t.classList.remove("tds-tooltip--open"),t.classList.add("tds-tooltip--closed"),u&&(n=setTimeout(()=>document.removeEventListener("scroll",f),500)),document.removeEventListener("resize",f),document.removeEventListener("keydown",h),document.removeEventListener("click",y),null==t||t.removeEventListener("focusout",g),null==p||p.removeEventListener("click",w),null==p||p.addEventListener("click",b),a&&a(e)};i?null==p||p.addEventListener("keydown",t=>{var{key:e}=t;" "!==e&&"Enter"!==e&&"ArrowDown"!==e||(t.preventDefault(),b(t))}):(null==p||p.addEventListener("mouseenter",b),null===(v=t.parentElement)||void 0===v||v.addEventListener("mouseleave",w),null===(m=t.parentElement)||void 0===m||m.addEventListener("focusin",b)),null==p||p.addEventListener("click",b),null==p||p.addEventListener("blur",y),new MutationObserver(e=>{for(var n of e)"class"===n.attributeName&&(t.classList.contains("tds-tooltip--open")?(null==p||p.addEventListener("click",w),null==p||p.removeEventListener("click",b)):t.classList.contains("tds-tooltip--closed")&&(null==p||p.addEventListener("click",b),null==p||p.removeEventListener("click",w)))}).observe(t,{attributes:!0})}(e,t)})}})();
}
{
/*! For license information please see base.js.LICENSE.txt */
(()=>{var e={92:(e,t,i)=>{var r=i(7580)["__core-js_shared__"];e.exports=r},159:e=>{e.exports=function(){this.__data__=[],this.size=0}},662:(e,t,i)=>{var r=i(7400);e.exports=function(e,t){var i=this.__data__,a=r(i,e);return a<0?(++this.size,i.push([e,t])):i[a][1]=t,this}},843:e=>{var t=Array.isArray;e.exports=t},1056:(e,t,i)=>{var r=i(2813)(i(7580),"Map");e.exports=r},1119:function(e){e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var i=t.querySelector("img"),r=!1;null===i&&(i=document.createElement("img"),r=!0),e&&t.getAttribute("data-iesrc")&&(i.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(i.alt=t.getAttribute("data-alt")),r&&t.append(i)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,n=0;n<=a.length-1;n++)(o=a[n].getAttribute("data-src"))&&(a[n].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var s=",";if(t.getAttribute("data-background-delimiter")&&(s=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(s).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var l=t.getAttribute("data-background-image-set").split(s),d=l[0].substr(0,l[0].indexOf(" "))||l[0];d=-1===d.indexOf("url(")?"url("+d+")":d,1===l.length?t.style.backgroundImage=d:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+d+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function i(e){e.setAttribute("data-loaded",!0)}var r=function(e){return"true"===e.getAttribute("data-loaded")},a=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,o,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,s),d=l.root,c=l.rootMargin,u=l.threshold,b=l.load,p=l.loaded,w=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(w=new IntersectionObserver((e=b,o=p,function(t,a){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(a.unobserve(t.target),r(t.target)||(e(t.target),i(t.target),o(t.target)))})}),{root:d,rootMargin:c,threshold:u}));for(var m,v=a(n,d),h=0;h<v.length;h++)(m=v[h]).getAttribute("data-placeholder-background")&&(m.style.background=m.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=a(n,d),t=0;t<e.length;t++)r(e[t])||(w?w.observe(e[t]):(b(e[t]),i(e[t]),p(e[t])))},triggerLoad:function(e){r(e)||(b(e),i(e),p(e))},observer:w}}}()},1129:e=>{e.exports=function(e,t){for(var i=-1,r=null==e?0:e.length,a=Array(r);++i<r;)a[i]=t(e[i],i,e);return a}},1137:(e,t,i)=>{var r=i(4713);e.exports=function(e){return null==e?"":r(e)}},1192:(e,t,i)=>{var r=i(7580).Symbol;e.exports=r},1242:(e,t,i)=>{var r=i(9053);e.exports=function(e,t){var i=e.__data__;return r(t)?i["string"==typeof t?"string":"hash"]:i.map}},1264:(e,t,i)=>{var r=i(5139),a=i(9191),o=i(6886),n=i(5842),s=i(9674);function l(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=n,l.prototype.set=s,e.exports=l},1389:(e,t,i)=>{var r=i(1192),a=i(3468),o=i(6859),n=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":n&&n in Object(e)?a(e):o(e)}},1853:(e,t,i)=>{var r=i(3224),a=i(7358);e.exports=function(e,t){for(var i=0,o=(t=r(t,e)).length;null!=e&&i<o;)e=e[a(t[i++])];return i&&i==o?e:void 0}},1929:(e,t,i)=>{var r=i(1389),a=i(4866);e.exports=function(e){if(!a(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},2571:(e,t,i)=>{var r=i(2813)(Object,"create");e.exports=r},2686:(e,t,i)=>{var r=i(7400);e.exports=function(e){return r(this.__data__,e)>-1}},2795:(e,t,i)=>{var r=i(7400),a=Array.prototype.splice;e.exports=function(e){var t=this.__data__,i=r(t,e);return!(i<0||(i==t.length-1?t.pop():a.call(t,i,1),--this.size,0))}},2813:(e,t,i)=>{var r=i(5902),a=i(3765);e.exports=function(e,t){var i=a(e,t);return r(i)?i:void 0}},2956:(e,t,i)=>{var r=i(4727),a=i(6995),o=i(8994),n=i(5942),s=i(5118);function l(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=n,l.prototype.set=s,e.exports=l},3224:(e,t,i)=>{var r=i(843),a=i(8689),o=i(7947),n=i(1137);e.exports=function(e,t){return r(e)?e:a(e,t)?[e]:o(n(e))}},3468:(e,t,i)=>{var r=i(1192),a=Object.prototype,o=a.hasOwnProperty,n=a.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),i=e[s];try{e[s]=void 0;var r=!0}catch(e){}var a=n.call(e);return r&&(t?e[s]=i:delete e[s]),a}},3765:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},3877:(e,t,i)=>{var r="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;e.exports=r},4277:(e,t,i)=>{var r=i(1853);e.exports=function(e,t,i){var a=null==e?void 0:r(e,t);return void 0===a?i:a}},4356:(e,t,i)=>{var r=i(159),a=i(2795),o=i(5930),n=i(2686),s=i(662);function l(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=n,l.prototype.set=s,e.exports=l},4469:(e,t,i)=>{var r=i(1389),a=i(8013);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},4713:(e,t,i)=>{var r=i(1192),a=i(1129),o=i(843),n=i(4469),s=r?r.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(n(t))return l?l.call(t):"";var i=t+"";return"0"==i&&1/t==-1/0?"-0":i}},4727:(e,t,i)=>{var r=i(1264),a=i(4356),o=i(1056);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||a),string:new r}}},4866:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5118:(e,t,i)=>{var r=i(1242);e.exports=function(e,t){var i=r(this,e),a=i.size;return i.set(e,t),this.size+=i.size==a?0:1,this}},5139:(e,t,i)=>{var r=i(2571);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},5157:(e,t,i)=>{var r,a=i(92),o=(r=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!o&&o in e}},5842:(e,t,i)=>{var r=i(2571),a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:a.call(t,e)}},5902:(e,t,i)=>{var r=i(1929),a=i(5157),o=i(4866),n=i(7656),s=/^\[object .+?Constructor\]$/,l=Function.prototype,d=Object.prototype,c=l.toString,u=d.hasOwnProperty,b=RegExp("^"+c.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||a(e))&&(r(e)?b:s).test(n(e))}},5930:(e,t,i)=>{var r=i(7400);e.exports=function(e){var t=this.__data__,i=r(t,e);return i<0?void 0:t[i][1]}},5942:(e,t,i)=>{var r=i(1242);e.exports=function(e){return r(this,e).has(e)}},6859:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},6886:(e,t,i)=>{var r=i(2571),a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var i=t[e];return"__lodash_hash_undefined__"===i?void 0:i}return a.call(t,e)?t[e]:void 0}},6995:(e,t,i)=>{var r=i(1242);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},7217:(e,t,i)=>{var r=i(2956);function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var i=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=i.cache;if(o.has(a))return o.get(a);var n=e.apply(this,r);return i.cache=o.set(a,n)||o,n};return i.cache=new(a.Cache||r),i}a.Cache=r,e.exports=a},7343:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},7358:(e,t,i)=>{var r=i(4469);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},7400:(e,t,i)=>{var r=i(7343);e.exports=function(e,t){for(var i=e.length;i--;)if(r(e[i][0],t))return i;return-1}},7580:(e,t,i)=>{var r=i(3877),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},7656:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},7837:function(e){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function i(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e};t.detectIe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={isDetected:!1},i=void 0;if((e=r({},{useUserAgent:!1},e)).useUserAgent){var o=window.navigator.userAgent,n=o.indexOf("Edge/"),s=o.indexOf("Trident/"),l=o.indexOf("rv:"),d=o.indexOf("MSIE "),c=s>0,u=d>0;n>0?i=parseInt(o.substring(n+5,o.indexOf(".",n)),10):c?i=parseInt(o.substring(l+3,o.indexOf(".",l)),10):u&&(i=parseInt(o.substring(d+5,o.indexOf(".",d)),10))}else{var b=document.documentElement.style;("msScrollLimit"in b||"behavior"in b)&&(i="msTextSizeAdjust"in b&&!("msFlex"in b)?">= 12":"msImeAlign"in b?11:"msUserSelect"in b?10:"fill"in b?9:"widows"in b?8:a)}if(i){var p=[7,8,9,10,11].reduce(function(e,t){return e["isIe"+t]=t===i,e},{});return r({},t,{isDetected:!0,isEdge:">= 12"===i||i>=12,isBelowEdge:i<12,isIe7orLower:i===a||7===i},p,{version:i})}return t};var a="<= 7"}])},7947:(e,t,i)=>{var r=i(9759),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,n=r(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a,function(e,i,r,a){t.push(r?a.replace(o,"$1"):i||e)}),t});e.exports=n},8013:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},8229:function(e,t,i){var r;!function(a,o){"use strict";var n="function",s="undefined",l="object",d="string",c="major",u="model",b="name",p="type",w="vendor",m="version",v="architecture",h="console",f="mobile",g="tablet",y="smarttv",x="wearable",A="embedded",_="Amazon",k="Apple",S="ASUS",E="BlackBerry",C="Browser",O="Chrome",L="Firefox",q="Google",z="Huawei",T="LG",j="Microsoft",P="Motorola",N="Opera",M="Samsung",R="Sharp",I="Sony",D="Xiaomi",B="Zebra",F="Facebook",U="Chromium OS",H="Mac OS",$=" Browser",V=function(e){for(var t={},i=0;i<e.length;i++)t[e[i].toUpperCase()]=e[i];return t},G=function(e,t){return typeof e===d&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},Z=function(e,t){if(typeof e===d)return e=e.replace(/^\s\s*/,""),typeof t===s?e:e.substring(0,500)},Q=function(e,t){for(var i,r,a,s,d,c,u=0;u<t.length&&!d;){var b=t[u],p=t[u+1];for(i=r=0;i<b.length&&!d&&b[i];)if(d=b[i++].exec(e))for(a=0;a<p.length;a++)c=d[++r],typeof(s=p[a])===l&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):o:this[s[0]]=c?s[1].call(this,c,s[2]):o:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):o):this[s]=c||o;u+=2}},X=function(e,t){for(var i in t)if(typeof t[i]===l&&t[i].length>0){for(var r=0;r<t[i].length;r++)if(G(t[i][r],e))return"?"===i?o:i}else if(G(t[i],e))return"?"===i?o:i;return t.hasOwnProperty("*")?t["*"]:e},J={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,m],[/opios[\/ ]+([\w\.]+)/i],[m,[b,N+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[m,[b,N+" GX"]],[/\bopr\/([\w\.]+)/i],[m,[b,N]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[m,[b,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[m,[b,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[b,m],[/quark(?:pc)?\/([-\w\.]+)/i],[m,[b,"Quark"]],[/\bddg\/([\w\.]+)/i],[m,[b,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[b,"UC"+C]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[m,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[b,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[b,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[m,[b,"Smart Lenovo "+C]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure "+C],m],[/\bfocus\/([\w\.]+)/i],[m,[b,L+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[b,N+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[b,N+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[b,"MIUI"+$]],[/fxios\/([\w\.-]+)/i],[m,[b,L]],[/\bqihoobrowser\/?([\w\.]*)/i],[m,[b,"360"]],[/\b(qq)\/([\w\.]+)/i],[[b,/(.+)/,"$1Browser"],m],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1"+$],m],[/samsungbrowser\/([\w\.]+)/i],[m,[b,M+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[m,[b,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[b,"Sogou Mobile"],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[b,m],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[b],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[m,b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,F],m],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[b,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[b,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[b,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[b,O+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,O+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[b,"Android "+C]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[b,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[m,X,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],m],[/(wolvic|librewolf)\/([\w\.]+)/i],[b,m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[b,L+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[b,[m,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[b,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,W]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[v,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[v,"armhf"]],[/windows (ce|mobile); ppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[v,/ower/,"",W]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[v,W]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[w,M],[p,g]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[u,[w,M],[p,f]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[u,[w,k],[p,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[w,k],[p,g]],[/(macintosh);/i],[u,[w,k]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[w,R],[p,f]],[/(?:honor)([-\w ]+)[;\)]/i],[u,[w,"Honor"],[p,f]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[w,z],[p,g]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[w,z],[p,f]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[u,/_/g," "],[w,D],[p,f]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[u,/_/g," "],[w,D],[p,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[w,"OPPO"],[p,f]],[/\b(opd2\d{3}a?) bui/i],[u,[w,"OPPO"],[p,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[w,"Vivo"],[p,f]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[u,[w,"Realme"],[p,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[w,P],[p,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[w,P],[p,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[w,T],[p,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[w,T],[p,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[w,"Lenovo"],[p,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[w,"Nokia"],[p,f]],[/(pixel c)\b/i],[u,[w,q],[p,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[u,[w,q],[p,f]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[w,I],[p,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[w,I],[p,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[w,"OnePlus"],[p,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[u,[w,_],[p,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[u,/(.+)/g,"Fire Phone $1"],[w,_],[p,f]],[/(playbook);[-\w\),; ]+(rim)/i],[u,w,[p,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[u,[w,E],[p,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[w,S],[p,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[w,S],[p,f]],[/(nexus 9)/i],[u,[w,"HTC"],[p,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[w,[u,/_/g," "],[p,f]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[u,[w,"TCL"],[p,g]],[/(itel) ((\w+))/i],[[w,W],u,[p,X,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[w,"Acer"],[p,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[w,"Meizu"],[p,f]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[u,[w,"Ulefone"],[p,f]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[u,[w,"Energizer"],[p,f]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[u,[w,"Cat"],[p,f]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[u,[w,"Smartfren"],[p,f]],[/droid.+; (a(?:015|06[35]|142p?))/i],[u,[w,"Nothing"],[p,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[w,u,[p,f]],[/(imo) (tab \w+)/i,/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[w,u,[p,g]],[/(surface duo)/i],[u,[w,j],[p,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[u,[w,"Fairphone"],[p,f]],[/(u304aa)/i],[u,[w,"AT&T"],[p,f]],[/\bsie-(\w*)/i],[u,[w,"Siemens"],[p,f]],[/\b(rct\w+) b/i],[u,[w,"RCA"],[p,g]],[/\b(venue[\d ]{2,7}) b/i],[u,[w,"Dell"],[p,g]],[/\b(q(?:mv|ta)\w+) b/i],[u,[w,"Verizon"],[p,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[u,[w,"Barnes & Noble"],[p,g]],[/\b(tm\d{3}\w+) b/i],[u,[w,"NuVision"],[p,g]],[/\b(k88) b/i],[u,[w,"ZTE"],[p,g]],[/\b(nx\d{3}j) b/i],[u,[w,"ZTE"],[p,f]],[/\b(gen\d{3}) b.+49h/i],[u,[w,"Swiss"],[p,f]],[/\b(zur\d{3}) b/i],[u,[w,"Swiss"],[p,g]],[/\b((zeki)?tb.*\b) b/i],[u,[w,"Zeki"],[p,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[w,"Dragon Touch"],u,[p,g]],[/\b(ns-?\w{0,9}) b/i],[u,[w,"Insignia"],[p,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[u,[w,"NextBook"],[p,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[w,"Voice"],u,[p,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[w,"LvTel"],u,[p,f]],[/\b(ph-1) /i],[u,[w,"Essential"],[p,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[u,[w,"Envizen"],[p,g]],[/\b(trio[-\w\. ]+) b/i],[u,[w,"MachSpeed"],[p,g]],[/\btu_(1491) b/i],[u,[w,"Rotor"],[p,g]],[/(shield[\w ]+) b/i],[u,[w,"Nvidia"],[p,g]],[/(sprint) (\w+)/i],[w,u,[p,f]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[w,j],[p,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[w,B],[p,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[w,B],[p,f]],[/smart-tv.+(samsung)/i],[w,[p,y]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[w,M],[p,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[w,T],[p,y]],[/(apple) ?tv/i],[w,[u,k+" TV"],[p,y]],[/crkey/i],[[u,O+"cast"],[w,q],[p,y]],[/droid.+aft(\w+)( bui|\))/i],[u,[w,_],[p,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[u,[w,R],[p,y]],[/(bravia[\w ]+)( bui|\))/i],[u,[w,I],[p,y]],[/(mitv-\w{5}) bui/i],[u,[w,D],[p,y]],[/Hbbtv.*(technisat) (.*);/i],[w,u,[p,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[w,Z],[u,Z],[p,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[w,u,[p,h]],[/droid.+; (shield) bui/i],[u,[w,"Nvidia"],[p,h]],[/(playstation [345portablevi]+)/i],[u,[w,I],[p,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[u,[w,j],[p,h]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[u,[w,M],[p,x]],[/((pebble))app/i],[w,u,[p,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[u,[w,k],[p,x]],[/droid.+; (glass) \d/i],[u,[w,q],[p,x]],[/droid.+; (wt63?0{2,3})\)/i],[u,[w,B],[p,x]],[/droid.+; (glass) \d/i],[u,[w,q],[p,x]],[/(pico) (4|neo3(?: link|pro)?)/i],[w,u,[p,x]],[/; (quest( \d| pro)?)/i],[u,[w,F],[p,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[w,[p,A]],[/(aeobc)\b/i],[u,[w,_],[p,A]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[u,[p,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[u,[p,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[p,f]],[/(android[-\w\. ]{0,9});.+buil/i],[u,[w,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[b,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[b,m],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[b,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,m],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[b,[m,X,J]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,X,J],[b,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,H],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,m],[/\(bb(10);/i],[m,[b,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[b,L+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[b,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[b,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[b,O+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[b,U],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,m],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[b,m]]},Y=function(e,t){if(typeof e===l&&(t=e,e=o),!(this instanceof Y))return new Y(e,t).getResult();var i=typeof a!==s&&a.navigator?a.navigator:o,r=e||(i&&i.userAgent?i.userAgent:""),h=i&&i.userAgentData?i.userAgentData:o,y=t?function(e,t){var i={};for(var r in e)t[r]&&t[r].length%2==0?i[r]=t[r].concat(e[r]):i[r]=e[r];return i}(K,t):K,x=i&&i.userAgent==r;return this.getBrowser=function(){var e,t={};return t[b]=o,t[m]=o,Q.call(t,r,y.browser),t[c]=typeof(e=t[m])===d?e.replace(/[^\d\.]/g,"").split(".")[0]:o,x&&i&&i.brave&&typeof i.brave.isBrave==n&&(t[b]="Brave"),t},this.getCPU=function(){var e={};return e[v]=o,Q.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[w]=o,e[u]=o,e[p]=o,Q.call(e,r,y.device),x&&!e[p]&&h&&h.mobile&&(e[p]=f),x&&"Macintosh"==e[u]&&i&&typeof i.standalone!==s&&i.maxTouchPoints&&i.maxTouchPoints>2&&(e[u]="iPad",e[p]=g),e},this.getEngine=function(){var e={};return e[b]=o,e[m]=o,Q.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[b]=o,e[m]=o,Q.call(e,r,y.os),x&&!e[b]&&h&&h.platform&&"Unknown"!=h.platform&&(e[b]=h.platform.replace(/chrome os/i,U).replace(/macos/i,H)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===d&&e.length>500?Z(e,500):e,this},this.setUA(r),this};Y.VERSION="1.0.40",Y.BROWSER=V([b,m,c]),Y.CPU=V([v]),Y.DEVICE=V([u,w,p,h,f,y,g,x,A]),Y.ENGINE=Y.OS=V([b,m]),typeof t!==s?(e.exports&&(t=e.exports=Y),t.UAParser=Y):i.amdO?(r=function(){return Y}.call(t,i,t,e))===o||(e.exports=r):typeof a!==s&&(a.UAParser=Y);var ee=typeof a!==s&&(a.jQuery||a.Zepto);if(ee&&!ee.ua){var te=new Y;ee.ua=te.getResult(),ee.ua.get=function(){return te.getUA()},ee.ua.set=function(e){te.setUA(e);var t=te.getResult();for(var i in t)ee.ua[i]=t[i]}}}("object"==typeof window?window:this)},8689:(e,t,i)=>{var r=i(843),a=i(4469),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var i=typeof e;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=e&&!a(e))||n.test(e)||!o.test(e)||null!=t&&e in Object(t)}},8994:(e,t,i)=>{var r=i(1242);e.exports=function(e){return r(this,e).get(e)}},9053:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},9191:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},9674:(e,t,i)=>{var r=i(2571);e.exports=function(e,t){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},9759:(e,t,i)=>{var r=i(7217);e.exports=function(e){var t=r(e,function(e){return 500===i.size&&i.clear(),e}),i=t.cache;return t}}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,i),o.exports}i.amdO={},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";var e,t;(t=(e=new URLSearchParams(window.location.search)).has("applitools")||e.has("regressionTest"))?localStorage.setItem("isApplitoolsEnabled",!0):localStorage.removeItem("isApplitoolsEnabled"),window.applitools=t;var r=()=>{document.body.classList.remove("tcl-page--with-scroll-snapping"),document.body.classList.remove("animate-onscroll"),document.body.classList.add("no-animation-onscroll");var e=document.querySelectorAll(".tcl-carousel__inner, .tcl-carousel-v2");Array.from(e).forEach(e=>{e&&e.removeAttribute("data-auto-transition")});var t=document.querySelectorAll(".tcl-carousel--range");Array.from(t).forEach(e=>{e&&e.setAttribute("data-do-not-animate-path","true")});var i=document.querySelectorAll(".tcl-video, .tcl-video__asset, .tcl-react-media__asset");Array.from(i).forEach(e=>{e&&(e.setAttribute("data-autoplay-desktop",!1),e.setAttribute("data-autoplay-portrait",!1),e.setAttribute("data-autoplay-mobile",!1),e.removeAttribute("playsinline"),e.removeAttribute("autoplay"),e.removeAttribute("controls"))});var r=document.querySelectorAll(".tcl-drawer");Array.from(r).forEach(e=>{e.style.display="block"}),document.querySelectorAll(".dx-gallery-zoom__container").forEach(e=>{e.classList.add("dx-gallery-zoom--no-animation")})};document.addEventListener("DOMContentLoaded",()=>{(window.applitools||JSON.parse(localStorage.getItem("isApplitoolsEnabled")))&&(document.body.classList.add("applitools-activate"),document.body.classList.add("regression-test-mode"),r())});var{TDSTooltips:a}=window,o=a;const n={registerComponent:function(e,t,i){var{includeTootips:a,isClientRendering:n}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{includeTootips:!0,isClientRendering:!1},s=e=>{var t=document.querySelectorAll(e);Array.from(t).forEach(e=>{(e=>"initialized"===e.getAttribute("data-component-status"))(e)||(e=>{if(e.setAttribute("data-component-status","initialized"),!0===window.applitools&&r(),new i(e).init(),a&&o({parent:e}),n){var t=new CustomEvent("tcl-react-component-initialized",{detail:{element:e}});document.dispatchEvent(t)}})(e)})};"undefined"!=typeof Drupal&&void 0!==Drupal.behaviors?Drupal.behaviors[t]={attach:()=>{s(e)}}:document.addEventListener("DOMContentLoaded",()=>{s(e)}),document.addEventListener("tcl-react-component-mounted",()=>{document.querySelectorAll(".tcl-react-glue-container--full-block-size").forEach(e=>{e.style.setProperty("min-block-size","unset")})})},Component:class{constructor(e){this.element=e}init(){console.warn("One component doesn't get initialized because it's missing the init method. If a custom constructor instead of the init method must be used, don't inherit from \"TCL.Component\".",this.element)}}};var s=i(1119);window.lozad=s;var l=()=>{window.lozad(".lozad",{threshold:.1,load:e=>{if("picture"===e.nodeName.toLowerCase()){var t,i=document.createElement("img");if("undefined"!=typeof document&&document.documentMode&&e.getAttribute("data-iesrc")&&(i.src=e.getAttribute("data-iesrc")),i.alt=null!==(t=e.getAttribute("data-alt"))&&void 0!==t?t:"",e.getAttribute("data-class")){var r=e.getAttribute("data-class").replace(/\s+/g," ").trim().split(" ");i.classList.add(...r)}e.appendChild(i)}e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&(e.srcset=e.getAttribute("data-srcset")),e.getAttribute("data-background-image")&&(e.style.backgroundImage="url('".concat(e.getAttribute("data-background-image"),"')")),e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))}}).observe()},d=()=>{var e=document.querySelectorAll(".lozad, .lazyload");Array.from(e).forEach(e=>{if(e.classList.remove("lozad"),e.classList.remove("lazyload"),"PICTURE"===e.tagName){var t=e.querySelector("noscript");if(null!==t){var i=t.parentNode,r=t.firstChild.textContent,a=document.createRange().createContextualFragment(r);if(e.getAttribute("data-class")){var o=e.getAttribute("data-class").split(" "),n=a.querySelector("img");null!==n&&n.classList.add(...o)}i.insertBefore(a,t),i.removeChild(t)}}else if("IMG"===e.tagName){var s=e.parentNode.querySelector("noscript");if(null===s)e.hasAttribute("data-src")&&!e.hasAttribute("src")&&e.setAttribute("src",e.getAttribute("data-src"));else{var l=s.parentNode,d=s.firstChild.textContent,c=document.createRange().createContextualFragment(d);l.insertBefore(c,s),l.removeChild(s),l.removeChild(e)}}else"VIDEO"===e.tagName&&(e.parentNode.querySelector("noscript"),e.hasAttribute("data-src")&&!e.hasAttribute("src")&&e.setAttribute("src",e.getAttribute("data-src")),e.querySelectorAll("source").forEach(e=>{e.hasAttribute("data-src")&&!e.hasAttribute("src")&&e.setAttribute("src",e.getAttribute("data-src"))}))})},c=i(7837),u=i(8229),b=i(4277);const p=JSON.parse('{"DH":"(max-width: 599px)"}');function w(e,t,i,r,a,o,n){try{var s=e[o](n),l=s.value}catch(e){return void i(e)}s.done?t(l):Promise.resolve(l).then(r,a)}var m={parentElement:document.body.classList.contains("animate-onscroll")?document:null,scrollRevealSelectors:[{revealClass:".tds-animate_large--to_reveal",revealedClass:"tds-animate_large--revealed",queryParent:!1},{revealClass:".tds-animate_small--to_reveal",revealedClass:"tds-animate_small--reveal",queryParent:!0},{revealClass:".tcl-animate--to-reveal",revealedClass:"tcl-animate--revealed",queryParent:!1},{revealClass:"body:not(.template-landing-page) .tcl-animate--homepage-hero-to-reveal, .display-mode--layout .tcl-animate--homepage-hero-to-reveal",revealedClass:"tcl-animate--homepage-hero-revealed",queryParent:!1}],imageFadeSelectors:[".tds-animate--fade_out"],mobileMediaQuery:window.matchMedia("".concat(p.DH)),componentAnimations:{},addClassOnScrollStep(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=window.innerWidth/1280;i>1&&(i=1);var r=e;if(null===e&&(r=this.parentElement),null!==r){var a=r.querySelector(".tcl-drawer");this.scrollRevealSelectors.forEach(e=>{var o=r.querySelectorAll(e.revealClass),n=a?a.querySelectorAll(e.revealClass):null;Array.from(o).forEach(r=>{var a=r,o=0,s=!1;if(!a.classList.contains(e.revealedClass)){e.queryParent&&(a=r.parentNode),a.dataset&&a.dataset.offset&&(o=parseFloat(a.dataset.offset)*i),n&&[...n].includes(a)||(s=!0);var l=a.getBoundingClientRect().top+o<window.innerHeight;a.getBoundingClientRect().top<0&&(l=!1),(t&&l||s)&&a.classList.add(e.revealedClass)}})}),this.imageFadeSelectors.forEach(e=>{var t=r.querySelectorAll(e);Array.from(t).forEach(e=>{e.classList.add("tds-animate--fade_in")})})}},getYAxisFromTimeIncrement(e){return this.mobileMediaQuery.matches?-22.85*e:-27.8*e},removeClassOnScrollStep(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e;null===e&&(t=this.parentElement),null!==t&&(this.scrollRevealSelectors.forEach(e=>{var i=t.querySelectorAll(e.revealClass);Array.from(i).forEach(t=>{var i=t;e.queryParent&&(i=t.parentNode),i.classList.remove(e.revealedClass)})}),this.imageFadeSelectors.forEach(e=>{var i=t.querySelectorAll(e);Array.from(i).forEach(e=>{e.classList.remove("tds-animate--fade_in")})}))},resetChildrenVideos(e){var t=this;if(void 0!==e){var i=e.querySelectorAll("video");Array.from(i).forEach(function(){var e,i=(e=function*(e){"true"===e.dataset.loaded&&(e.currentTime=0,e.autoplay&&(e.currentTime=0,yield t.video.play()))},function(){var t=this,i=arguments;return new Promise(function(r,a){var o=e.apply(t,i);function n(e){w(o,r,a,n,s,"next",e)}function s(e){w(o,r,a,n,s,"throw",e)}n(void 0)})});return function(e){return i.apply(this,arguments)}}())}},toggleAnimationClassOnScroll(){this.toggleAnimationWithinElement(this.parentElement)},toggleAnimationWithinElement(e){var t=window.innerWidth/1280;t>1&&(t=1),null!==e&&(this.scrollRevealSelectors.forEach(i=>{var r=e.querySelectorAll(i.revealClass);Array.from(r).forEach(e=>{var r=e;i.queryParent&&(r=e.parentNode);var a=r.getBoundingClientRect().top;if(r.classList.contains(i.revealedClass))a>=window.innerHeight&&r.classList.remove(i.revealedClass);else{var o=0;r.dataset&&r.dataset.offset&&(o=parseFloat(r.dataset.offset)*t),a+o<window.innerHeight&&(r.classList.add(i.revealedClass),Object.keys(this.componentAnimations).forEach(e=>{Array.from(r.classList).includes(e)&&this.componentAnimations[e](r)}))}})}),this.imageFadeSelectors.forEach(t=>{var i=e.querySelectorAll(t);Array.from(i).forEach(e=>{e.getBoundingClientRect().top+e.getBoundingClientRect().height/2<window.innerHeight/2&&!e.classList.contains("tds-animate--fade_in")&&e.classList.add("tds-animate--fade_in"),e.getBoundingClientRect().top+e.getBoundingClientRect().height/2>=window.innerHeight/2&&e.classList.contains("tds-animate--fade_in")&&e.classList.remove("tds-animate--fade_in")})}))},toggleAnimationClass(){null!==this.parentElement&&(this.scrollRevealSelectors.forEach(e=>{var t=this.parentElement.querySelectorAll(e.revealClass);Array.from(t).forEach(t=>{var i=t;e.queryParent&&(i=t.parentNode),i.classList.remove(e.revealedClass),i.classList.add(e.revealedClass)})}),this.imageFadeSelectors.forEach(e=>{var t=document.body.querySelectorAll(e);Array.from(t).forEach(e=>{e.classList.remove("tds-animate--fade_in"),e.classList.add("tds-animate--fade_in")})}))}};window.TCL=n,window.animation=Object.create(m),window.isOnScreen=function(e){var t=e.getBoundingClientRect(),i=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<0||t.top-i>=0)},window.isPlaying=function(e){return!!(e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2)},"undefined"!=typeof Drupal&&void 0!==Drupal.behaviors?Drupal.behaviors.lozadBehavior={attach:()=>{document.body.classList.contains("tcl-no-lazyload")||window.applitools?d():"complete"===document.readyState?l():window.addEventListener("DOMContentLoaded",()=>{l()})}}:document.body.classList.contains("tcl-no-lazyload")||window.applitools?d():"complete"===document.readyState?l():window.addEventListener("DOMContentLoaded",()=>{l()}),window.addEventListener("DOMContentLoaded",()=>{var e,t,i,r,a,o,n,s,l,d,p,w,m,v;i=(new u.UAParser).getResult(),r=[],a=window.matchMedia("(max-height: 624px)"),o=window.matchMedia("(min-device-width: 810px) and (max-device-width: 1080px), (min-device-width: 834px) and (max-device-width: 1194px), (min-device-width: 834px) and (max-device-width: 1112px), min-device-width: 1024px) and (max-device-width: 1366px)"),n=b(i,"os.name",null),s=b(i,"os.version",0),l=b(i,"device.model",null),d=b(i,"device.type",null),p=b(i,"device.vendor",null),w=b(i,"browser.version",0),m=b(i,"browser.name",null),v=(0,c.detectIe)(),"tablet"===d&&"Samsung"===p&&r.push("is-Galaxy-Tab"),"iOS"===n&&("Chrome"===m&&parseFloat(s.toString())>=12?r.push("is-Chrome-iOS"):r.push("is-iOS"),a.matches&&r.push("is-Small-iOS")),"Android"===n&&r.push("is-Android"),"Samsung Browser"===m&&r.push("is-Samsung"),"Mozilla"===m&&r.push("is-Firefox"),"Safari"===m&&("Mac OS"===n&&r.push("is-Safari"),parseFloat(w.toString())<13.1&&!o.matches&&r.push("is-Older-Safari")),(o.matches||"iPad"===l)&&(r.push("is-iPad"),"Safari"===m&&r.push("is-iOS")),"Chrome"===m&&r.push("is-Chrome"),v.isDetected&&v.isBelowEdge&&r.push("is-IE"),r.forEach(e=>{document.body.classList.add(e)}),e=window.matchMedia("(orientation: portrait)"),(t=e=>{if(e.matches){var t=new CustomEvent("tcl-orientation-change",{detail:"portrait"});window.dispatchEvent(t)}else{var i=new CustomEvent("tcl-orientation-change",{detail:"landscape"});window.dispatchEvent(i)}})(e),e.onchange=()=>{t(e)},(()=>{if(window.location.hash.length>0&&!window.location.hash.includes("&"))try{var e=document.querySelector(window.location.hash);if(null!==e){setTimeout(()=>{e.scrollIntoView()},200);var t=e.closest("section[data-component-status]");if(t){var i=new CustomEvent("tclOnHashChange",{detail:{targetId:e.id},bubbles:!0,cancelable:!0});t.dispatchEvent(i)}}}catch(e){if(12!==e.code)throw e}window.addEventListener("click",e=>{if(e.target.hash){var t=decodeURIComponent(e.target.hash),i=document.querySelector(t),r=new CustomEvent("tclOnHashedLinkClick",{detail:{hash:e.target.hash,triggeringElement:e.target},bubbles:!0,cancelable:!0});i&&!i.dispatchEvent(r)&&e.preventDefault()}})})(),window.animation.toggleAnimationClassOnScroll()});var v=()=>{window.innerHeight};v(),window.addEventListener("resize",()=>{v(),window.animation.toggleAnimationClassOnScroll()}),window.addEventListener("scroll",()=>{window.animation.toggleAnimationClassOnScroll()},!1),window.addEventListener("tcl-orientation-change",()=>{window.animation.toggleAnimationClass()},!1),window.addEventListener("orientationchange",()=>{window.dispatchEvent(new Event("resize"))},!1)})()})();
}
{
(()=>{var t={92:(t,e,r)=>{var n=r(7580)["__core-js_shared__"];t.exports=n},159:t=>{t.exports=function(){this.__data__=[],this.size=0}},662:(t,e,r)=>{var n=r(7400);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},843:t=>{var e=Array.isArray;t.exports=e},1056:(t,e,r)=>{var n=r(2813)(r(7580),"Map");t.exports=n},1129:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},1137:(t,e,r)=>{var n=r(4713);t.exports=function(t){return null==t?"":n(t)}},1192:(t,e,r)=>{var n=r(7580).Symbol;t.exports=n},1242:(t,e,r)=>{var n=r(9053);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},1264:(t,e,r)=>{var n=r(5139),o=r(9191),a=r(6886),s=r(5842),i=r(9674);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=s,c.prototype.set=i,t.exports=c},1389:(t,e,r)=>{var n=r(1192),o=r(3468),a=r(6859),s=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?o(t):a(t)}},1853:(t,e,r)=>{var n=r(3224),o=r(7358);t.exports=function(t,e){for(var r=0,a=(e=n(e,t)).length;null!=t&&r<a;)t=t[o(e[r++])];return r&&r==a?t:void 0}},1929:(t,e,r)=>{var n=r(1389),o=r(4866);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},2571:(t,e,r)=>{var n=r(2813)(Object,"create");t.exports=n},2686:(t,e,r)=>{var n=r(7400);t.exports=function(t){return n(this.__data__,t)>-1}},2795:(t,e,r)=>{var n=r(7400),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},2813:(t,e,r)=>{var n=r(5902),o=r(3765);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},2956:(t,e,r)=>{var n=r(4727),o=r(6995),a=r(8994),s=r(5942),i=r(5118);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=s,c.prototype.set=i,t.exports=c},3224:(t,e,r)=>{var n=r(843),o=r(8689),a=r(7947),s=r(1137);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:a(s(t))}},3468:(t,e,r)=>{var n=r(1192),o=Object.prototype,a=o.hasOwnProperty,s=o.toString,i=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,i),r=t[i];try{t[i]=void 0;var n=!0}catch(t){}var o=s.call(t);return n&&(e?t[i]=r:delete t[i]),o}},3765:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},3877:(t,e,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},4277:(t,e,r)=>{var n=r(1853);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},4356:(t,e,r)=>{var n=r(159),o=r(2795),a=r(5930),s=r(2686),i=r(662);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=s,c.prototype.set=i,t.exports=c},4469:(t,e,r)=>{var n=r(1389),o=r(8013);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},4713:(t,e,r)=>{var n=r(1192),o=r(1129),a=r(843),s=r(4469),i=n?n.prototype:void 0,c=i?i.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(s(e))return c?c.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},4727:(t,e,r)=>{var n=r(1264),o=r(4356),a=r(1056);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},4866:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},5118:(t,e,r)=>{var n=r(1242);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},5139:(t,e,r)=>{var n=r(2571);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},5157:(t,e,r)=>{var n,o=r(92),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},5842:(t,e,r)=>{var n=r(2571),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},5902:(t,e,r)=>{var n=r(1929),o=r(5157),a=r(4866),s=r(7656),i=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,p=l.hasOwnProperty,d=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?d:i).test(s(t))}},5930:(t,e,r)=>{var n=r(7400);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},5942:(t,e,r)=>{var n=r(1242);t.exports=function(t){return n(this,t).has(t)}},6859:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},6886:(t,e,r)=>{var n=r(2571),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},6995:(t,e,r)=>{var n=r(1242);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},7217:(t,e,r)=>{var n=r(2956);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var s=t.apply(this,n);return r.cache=a.set(o,s)||a,s};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},7343:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},7358:(t,e,r)=>{var n=r(4469);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},7400:(t,e,r)=>{var n=r(7343);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},7580:(t,e,r)=>{var n=r(3877),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},7656:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7947:(t,e,r)=>{var n=r(9759),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,s=n(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,r,n,o){e.push(n?o.replace(a,"$1"):r||t)}),e});t.exports=s},8013:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},8689:(t,e,r)=>{var n=r(843),o=r(4469),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||s.test(t)||!a.test(t)||null!=e&&t in Object(e)}},8994:(t,e,r)=>{var n=r(1242);t.exports=function(t){return n(this,t).get(t)}},9053:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},9191:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},9674:(t,e,r)=>{var n=r(2571);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},9759:(t,e,r)=>{var n=r(7217);t.exports=function(t){var e=n(t,function(t){return 500===r.size&&r.clear(),t}),r=e.cache;return e}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";var t=r(4277),{TCL:e}=window;class n extends e.Component{init(){this.setHeaderContent()}setHeaderContent(){var{DesignSystemReact:e,React:r,ReactDOM:n}=window;if(void 0!==e){var{GlobalMenu:o}=e,a=t(window,"i18n.locale","en_us").toLowerCase(),s=t(window,"i18n.region","US").toLowerCase(),{siteLocationSlug:i}=this.element.dataset,c="/api/tesla/header/v1_1";"en_us"!==a&&"cn"!==s&&(c="/".concat(a).concat(c)),i&&(c="".concat(c,"/").concat(i)),n.render(r.createElement(o,{endpoint:c,customComponents:{customSearchWidget:r.createElement("div",{className:"tcl-header__search-bar"}),customMobileSearchWidget:r.createElement("section",{className:"tcl-mobile-navigation-search-bar"},r.createElement("h2",{className:"tcl-mobile-navigation-search-bar__heading"},"Support"),r.createElement("form",{className:"tcl-mobile-navigation-search-bar__form",autoComplete:"off",action:"/support/results",role:"search"},r.createElement("div",{className:"form-item"},r.createElement("div",{className:"tds-form-input tds-form-input--default"},r.createElement("div",{className:"tds-form-input-leading"},r.createElement("button",{className:"tds-icon-btn tds-icon-btn--medium",type:"submit"},r.createElement("svg",{"aria-hidden":"true",className:"tds-icon tds-icon--search"},r.createElement("use",{href:"#tds-icon-search"})),r.createElement("span",{className:"tds--is_visually_hidden"},"search"))),r.createElement("input",{className:"tds-form-input-text tcl-mobile-navigation-search-bar__search-field",inputMode:"search",placeholder:"Support Search",type:"text",name:"search"}),r.createElement("div",{className:"tds-form-input-trailing"},r.createElement("button",{className:"tds-icon-btn tds-icon-btn--medium",type:"reset"},r.createElement("svg",{"aria-hidden":"true",className:"tds-icon tds-icon-close"},r.createElement("use",{href:"#tds-icon-close"}))))))))},locale:a,overrideLocaleDelimiter:"_",onMount:()=>{var t=new CustomEvent("header-mount-event");window.dispatchEvent(t)}}),this.element)}}}var{TCL:o}=window;class a extends o.Component{init(){var t=!1;document.body.classList.contains("tds-menu-header-transparent--light")&&(t=!0),document.body.classList.contains("tds-menu-header-transparent--dark")&&document.body.classList.remove("tds-menu-header-transparent--dark"),window.addEventListener("scroll",()=>{var e=(window.scrollY/100).toFixed(2);e<.7?(this.element.classList.remove("tds-scrim--white"),t&&document.body.classList.add("tds-menu-header-transparent--light"),this.element.style.setProperty("--tcl-header-background-color","rgba(255, 255, 255, ".concat(e,")"))):(this.element.style.setProperty("--tcl-header-background-color","var(--tds-theme-background)"),t&&document.body.classList.remove("tds-menu-header-transparent--light"),this.element.classList.add("tds-scrim--white"))})}}var{TCL:s}=window;class i extends s.Component{init(){window.addEventListener("header-mount-event",()=>{this.addMutationObserver()})}addFragmentOnClick(){[...this.element.querySelectorAll(".tds-site-nav-item")].forEach(t=>{if(t.hasAttribute("href"))try{var e=t.getAttribute("href"),r=new URL(e,window.location),{pathname:n,hash:o}=r;n===window.location.pathname&&o.length>0&&t.addEventListener("click",t=>{t.preventDefault(),window.location.hash=o.substring(1,o.length),window.location.reload()},!0)}catch(t){console.error(t)}})}addMutationObserver(){var t=document.querySelector(".tds-site-header-wrapper .tds-modal-content");t&&new MutationObserver(t=>{t.forEach(t=>{"childList"===t.type&&this.addFragmentOnClick()})}).observe(t,{characterData:!1,attributes:!1,childList:!0,subtree:!1})}}var{TCL:c}=window;c.registerComponent(".is-Pattern-Lab .tcl-header","pattern-lab-header",n),c.registerComponent(".tcl-header--sticky:not(.tcl-header--support)","sticky-header",a),c.registerComponent(".tcl-header","header",i)})()})();
}
{
(()=>{"use strict";var{TCL:e,TDSModals:t}=window;class i extends e.Component{init(){this.PAGE_HAS_OPEN_MASK_CLASS="page_has--open_mask",this.modalId=this.element.getAttribute("id"),this.bindOpenModalClick=this.bindOpenModalClick.bind(this),this.bindCloseModalClick=this.bindCloseModalClick.bind(this),this.openModal=this.openModal.bind(this),this.closeModal=this.closeModal.bind(this),"locale-modal"!==this.modalId&&(this.triggerOpen=this.getTriggers("data-tds-open-modal"),this.triggerClose=this.getTriggers("data-tds-close-modal"),this.waitForRenderThenAddListeners())}waitForRenderThenAddListeners(){if(this.triggerOpen.length>0||this.triggerClose.length>0)this.addEventListeners();else{var e=0,t=()=>{if(this.element.isConnected){e++,this.triggerOpen=this.getTriggers("data-tds-open-modal"),this.triggerClose=this.getTriggers("data-tds-close-modal");var i=[...this.triggerOpen,...this.triggerClose];e>=30||0!==i.length?this.addEventListeners():requestAnimationFrame(t)}};requestAnimationFrame(t)}}getTriggers(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body).querySelectorAll("[".concat(e,'="').concat(this.modalId,'"]'))||[];return Array.from(t)}bindOpenModalClick(e){e.addEventListener("click",this.openModal)}bindCloseModalClick(e){e.addEventListener("click",this.closeModal)}addKeyUpListener(){this.element.addEventListener("keyup",e=>{switch(e.key){case"Esc":case"Escape":this.closeModal();break;case"Tab":this.element.focus()}})}addComponentStateListener(){var e=e=>{var t=this.getTriggers("data-tds-open-modal",e),i=this.getTriggers("data-tds-close-modal",e);t&&t.forEach(e=>{var t;null!==(t=this.triggerOpen)&&void 0!==t&&t.includes(e)||(this.triggerOpen=(this.triggerOpen||[]).concat(e),this.bindOpenModalClick(e))}),i&&i.forEach(e=>{var t;null!==(t=this.triggerClose)&&void 0!==t&&t.includes(e)||(this.triggerClose=(this.triggerClose||[]).concat(e),this.bindCloseModalClick(e))})};document.addEventListener("tcl-react-component-initialized",t=>{var{detail:{element:i}}=t;e(i)}),document.addEventListener("tcl-react-component-mounted",t=>{var{detail:{element:i}}=t;e(i)})}addEventListeners(){this.addComponentStateListener(),this.addKeyUpListener(),this.triggerOpen.forEach(this.bindOpenModalClick),this.triggerClose.forEach(this.bindCloseModalClick)}openModal(){window.oldScrollY=window.pageYOffset,document.body.style.top="-".concat(window.oldScrollY,"px"),document.body.classList.add("tds-prevent-scroll"),document.body.classList.add("tcl-page__with-open-modal"),t.openModal(this.element)}closeModal(){document.body.classList.contains("tds-prevent-scroll")&&!document.body.classList.contains(this.PAGE_HAS_OPEN_MASK_CLASS)&&document.body.classList.remove("tds-prevent-scroll"),document.body.style.removeProperty("top"),document.body.classList.remove("tcl-page__with-open-modal"),window.scrollTo(0,window.oldScrollY),t.closeModal(this.element)}}e.registerComponent(".tcl-modal","modal",i)})();
}
{
(()=>{var e={92:(e,t,r)=>{var n=r(7580)["__core-js_shared__"];e.exports=n},159:e=>{e.exports=function(){this.__data__=[],this.size=0}},662:(e,t,r)=>{var n=r(7400);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},843:e=>{var t=Array.isArray;e.exports=t},1056:(e,t,r)=>{var n=r(2813)(r(7580),"Map");e.exports=n},1129:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},1137:(e,t,r)=>{var n=r(4713);e.exports=function(e){return null==e?"":n(e)}},1192:(e,t,r)=>{var n=r(7580).Symbol;e.exports=n},1242:(e,t,r)=>{var n=r(9053);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},1264:(e,t,r)=>{var n=r(5139),o=r(9191),i=r(6886),a=r(5842),s=r(9674);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},1389:(e,t,r)=>{var n=r(1192),o=r(3468),i=r(6859),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},1853:(e,t,r)=>{var n=r(3224),o=r(7358);e.exports=function(e,t){for(var r=0,i=(t=n(t,e)).length;null!=e&&r<i;)e=e[o(t[r++])];return r&&r==i?e:void 0}},1929:(e,t,r)=>{var n=r(1389),o=r(4866);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},2571:(e,t,r)=>{var n=r(2813)(Object,"create");e.exports=n},2686:(e,t,r)=>{var n=r(7400);e.exports=function(e){return n(this.__data__,e)>-1}},2795:(e,t,r)=>{var n=r(7400),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():o.call(t,r,1),--this.size,0))}},2813:(e,t,r)=>{var n=r(5902),o=r(3765);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},2956:(e,t,r)=>{var n=r(4727),o=r(6995),i=r(8994),a=r(5942),s=r(5118);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},3224:(e,t,r)=>{var n=r(843),o=r(8689),i=r(7947),a=r(1137);e.exports=function(e,t){return n(e)?e:o(e,t)?[e]:i(a(e))}},3468:(e,t,r)=>{var n=r(1192),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[s]=r:delete e[s]),o}},3765:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},3877:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},4277:(e,t,r)=>{var n=r(1853);e.exports=function(e,t,r){var o=null==e?void 0:n(e,t);return void 0===o?r:o}},4356:(e,t,r)=>{var n=r(159),o=r(2795),i=r(5930),a=r(2686),s=r(662);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,e.exports=u},4469:(e,t,r)=>{var n=r(1389),o=r(8013);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},4713:(e,t,r)=>{var n=r(1192),o=r(1129),i=r(843),a=r(4469),s=n?n.prototype:void 0,u=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return u?u.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},4727:(e,t,r)=>{var n=r(1264),o=r(4356),i=r(1056);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},4866:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5118:(e,t,r)=>{var n=r(1242);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},5139:(e,t,r)=>{var n=r(2571);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},5157:(e,t,r)=>{var n,o=r(92),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!i&&i in e}},5842:(e,t,r)=>{var n=r(2571),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},5902:(e,t,r)=>{var n=r(1929),o=r(5157),i=r(4866),a=r(7656),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,l=u.toString,f=c.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||o(e))&&(n(e)?p:s).test(a(e))}},5930:(e,t,r)=>{var n=r(7400);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},5942:(e,t,r)=>{var n=r(1242);e.exports=function(e){return n(this,e).has(e)}},6859:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},6886:(e,t,r)=>{var n=r(2571),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},6995:(e,t,r)=>{var n=r(1242);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},7217:(e,t,r)=>{var n=r(2956);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(o.Cache||n),r}o.Cache=n,e.exports=o},7343:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},7358:(e,t,r)=>{var n=r(4469);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},7400:(e,t,r)=>{var n=r(7343);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},7580:(e,t,r)=>{var n=r(3877),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},7656:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},7947:(e,t,r)=>{var n=r(9759),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=n(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,function(e,r,n,o){t.push(n?o.replace(i,"$1"):r||e)}),t});e.exports=a},8013:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},8689:(e,t,r)=>{var n=r(843),o=r(4469),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!o(e))||a.test(e)||!i.test(e)||null!=t&&e in Object(t)}},8994:(e,t,r)=>{var n=r(1242);e.exports=function(e){return n(this,e).get(e)}},9053:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},9191:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},9674:(e,t,r)=>{var n=r(2571);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},9759:(e,t,r)=>{var n=r(7217);e.exports=function(e){var t=n(e,function(e){return 500===r.size&&r.clear(),e}),r=t.cache;return t}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};r.r(e),r.d(e,{hasBrowserEnv:()=>fe,hasStandardBrowserEnv:()=>de,hasStandardBrowserWebWorkerEnv:()=>he,navigator:()=>pe,origin:()=>ve});var t=r(4277);function n(e,t){return function(){return e.apply(t,arguments)}}var o,{toString:i}=Object.prototype,{getPrototypeOf:a}=Object,{iterator:s,toStringTag:u}=Symbol,c=(o=Object.create(null),e=>{var t=i.call(e);return o[t]||(o[t]=t.slice(8,-1).toLowerCase())}),l=e=>(e=e.toLowerCase(),t=>c(t)===e),f=e=>t=>typeof t===e,{isArray:p}=Array,d=f("undefined"),h=l("ArrayBuffer"),v=f("string"),y=f("function"),m=f("number"),b=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==c(e))return!1;var t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||u in e||s in e)},w=l("Date"),O=l("File"),E=l("Blob"),S=l("FileList"),j=l("URLSearchParams"),[x,R,_,T]=["ReadableStream","Request","Response","Headers"].map(l);function P(e,t){var r,n,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!=e)if("object"!=typeof e&&(e=[e]),p(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{var i,a=o?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;for(r=0;r<s;r++)i=a[r],t.call(null,e[i],i,e)}}function A(e,t){t=t.toLowerCase();for(var r,n=Object.keys(e),o=n.length;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}var C,N,L,F,k,U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,D=e=>!d(e)&&e!==U,B=(C="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>C&&e instanceof C),q=l("HTMLFormElement"),z=(e=>{var{hasOwnProperty:t}=e;return(e,r)=>t.call(e,r)})(Object.prototype),I=l("RegExp"),M=(e,t)=>{var r=Object.getOwnPropertyDescriptors(e),n={};P(r,(r,o)=>{var i;!1!==(i=t(r,o,e))&&(n[o]=i||r)}),Object.defineProperties(e,n)},H=l("AsyncFunction"),J=(N="function"==typeof setImmediate,L=y(U.postMessage),N?setImmediate:L?(F="axios@".concat(Math.random()),k=[],U.addEventListener("message",e=>{var{source:t,data:r}=e;t===U&&r===F&&k.length&&k.shift()()},!1),e=>{k.push(e),U.postMessage(F,"*")}):e=>setTimeout(e)),W="undefined"!=typeof queueMicrotask?queueMicrotask.bind(U):"undefined"!=typeof process&&process.nextTick||J;const K={isArray:p,isArrayBuffer:h,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{var t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=c(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer)},isString:v,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:b,isPlainObject:g,isReadableStream:x,isRequest:R,isResponse:_,isHeaders:T,isUndefined:d,isDate:w,isFile:O,isBlob:E,isRegExp:I,isFunction:y,isStream:e=>b(e)&&y(e.pipe),isURLSearchParams:j,isTypedArray:B,isFileList:S,forEach:P,merge:function e(){for(var{caseless:t}=D(this)&&this||{},r={},n=(n,o)=>{var i=t&&A(r,o)||o;g(r[i])&&g(n)?r[i]=e(r[i],n):g(n)?r[i]=e({},n):p(n)?r[i]=n.slice():r[i]=n},o=0,i=arguments.length;o<i;o++)arguments[o]&&P(arguments[o],n);return r},extend:function(e,t,r){var{allOwnKeys:o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return P(t,(t,o)=>{r&&y(t)?e[o]=n(t,r):e[o]=t},{allOwnKeys:o}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{var o,i,s,u={};if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)s=o[i],n&&!n(s,e,t)||u[s]||(t[s]=e[s],u[s]=!0);e=!1!==r&&a(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:c,kindOfTest:l,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(p(e))return e;var t=e.length;if(!m(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{for(var r,n=(e&&e[s]).call(e);(r=n.next())&&!r.done;){var o=r.value;t.call(e,o[0],o[1])}},matchAll:(e,t)=>{for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:q,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:M,freezeMethods:e=>{M(e,(t,r)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;var n=e[r];y(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{var r={},n=e=>{e.forEach(e=>{r[e]=!0})};return p(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:A,global:U,isContextDefined:D,isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[u]&&e[s])},toJSONObject:e=>{var t=new Array(10),r=(e,n)=>{if(b(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;var o=p(e)?[]:{};return P(e,(e,t)=>{var i=r(e,n+1);!d(i)&&(o[t]=i)}),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:H,isThenable:e=>e&&(b(e)||y(e))&&y(e.then)&&y(e.catch),setImmediate:J,asap:W,isIterable:e=>null!=e&&y(e[s])};function V(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}K.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.status}}});var $=V.prototype,X={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{X[e]={value:e}}),Object.defineProperties(V,X),Object.defineProperty($,"isAxiosError",{value:!0}),V.from=(e,t,r,n,o,i)=>{var a=Object.create($);return K.toFlatObject(e,a,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),V.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const G=V;function Q(e){return K.isPlainObject(e)||K.isArray(e)}function Y(e){return K.endsWith(e,"[]")?e.slice(0,-2):e}function Z(e,t,r){return e?e.concat(t).map(function(e,t){return e=Y(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}var ee=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});const te=function(e,t,r){if(!K.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;var n=(r=K.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!K.isUndefined(t[e])})).metaTokens,o=r.visitor||c,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!=typeof Blob&&Blob)&&K.isSpecCompliantForm(t);if(!K.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(K.isDate(e))return e.toISOString();if(K.isBoolean(e))return e.toString();if(!s&&K.isBlob(e))throw new G("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(e)||K.isTypedArray(e)?s&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,o){var s=e;if(e&&!o&&"object"==typeof e)if(K.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(K.isArray(e)&&function(e){return K.isArray(e)&&!e.some(Q)}(e)||(K.isFileList(e)||K.endsWith(r,"[]"))&&(s=K.toArray(e)))return r=Y(r),s.forEach(function(e,n){!K.isUndefined(e)&&null!==e&&t.append(!0===a?Z([r],n,i):null===a?r:r+"[]",u(e))}),!1;return!!Q(e)||(t.append(Z(o,r,i),u(e)),!1)}var l=[],f=Object.assign(ee,{defaultVisitor:c,convertValue:u,isVisitable:Q});if(!K.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!K.isUndefined(r)){if(-1!==l.indexOf(r))throw Error("Circular reference detected in "+n.join("."));l.push(r),K.forEach(r,function(r,i){!0===(!(K.isUndefined(r)||null===r)&&o.call(t,r,K.isString(i)?i.trim():i,n,f))&&e(r,n?n.concat(i):[i])}),l.pop()}}(e),t};function re(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function ne(e,t){this._pairs=[],e&&te(e,this,t)}var oe=ne.prototype;oe.append=function(e,t){this._pairs.push([e,t])},oe.toString=function(e){var t=e?function(t){return e.call(this,t,re)}:re;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const ie=ne;function ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function se(e,t,r){if(!t)return e;var n=r&&r.encode||ae;K.isFunction(r)&&(r={serialize:r});var o,i=r&&r.serialize;if(o=i?i(t,r):K.isURLSearchParams(t)?t.toString():new ie(t,r).toString(n)){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const ue=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,function(t){null!==t&&e(t)})}},ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},le={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ie,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};var fe="undefined"!=typeof window&&"undefined"!=typeof document,pe="object"==typeof navigator&&navigator||void 0,de=fe&&(!pe||["ReactNative","NativeScript","NS"].indexOf(pe.product)<0),he="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ve=fe&&window.location.href||"http://localhost";function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach(function(t){be(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function be(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ge=me(me({},e),le),we=function(e){function t(e,r,n,o){var i=e[o++];if("__proto__"===i)return!0;var a=Number.isFinite(+i),s=o>=e.length;return i=!i&&K.isArray(n)?n.length:i,s?(K.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a):(n[i]&&K.isObject(n[i])||(n[i]=[]),t(e,r,n[i],o)&&K.isArray(n[i])&&(n[i]=function(e){var t,r,n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(n[i])),!a)}if(K.isFormData(e)&&K.isFunction(e.entries)){var r={};return K.forEachEntry(e,(e,n)=>{t(function(e){return K.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),n,r,0)}),r}return null};var Oe={transitional:ce,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){var r,n=t.getContentType()||"",o=n.indexOf("application/json")>-1,i=K.isObject(e);if(i&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return o?JSON.stringify(we(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e)||K.isReadableStream(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return te(e,new ge.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return ge.isNode&&K.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((r=K.isFileList(e))||n.indexOf("multipart/form-data")>-1){var a=this.env&&this.env.FormData;return te(r?{"files[]":e}:e,a&&new a,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),function(e){if(K.isString(e))try{return(0,JSON.parse)(e),K.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||Oe.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(K.isResponse(e)||K.isReadableStream(e))return e;if(e&&K.isString(e)&&(r&&!this.responseType||n)){var o=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw G.from(e,G.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],e=>{Oe.headers[e]={}});const Ee=Oe;var Se=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),je=Symbol("internals");function xe(e){return e&&String(e).trim().toLowerCase()}function Re(e){return!1===e||null==e?e:K.isArray(e)?e.map(Re):String(e)}function _e(e,t,r,n,o){return K.isFunction(n)?n.call(this,t,r):(o&&(t=r),K.isString(t)?K.isString(n)?-1!==t.indexOf(n):K.isRegExp(n)?n.test(t):void 0:void 0)}class Te{constructor(e){e&&this.set(e)}set(e,t,r){var n=this;function o(e,t,r){var o=xe(t);if(!o)throw new Error("header name must be a non-empty string");var i=K.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=Re(e))}var i=(e,t)=>K.forEach(e,(e,r)=>o(e,r,t));if(K.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(K.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{var t,r,n,o={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||o[t]&&Se[t]||("set-cookie"===t?o[t]?o[t].push(r):o[t]=[r]:o[t]=o[t]?o[t]+", "+r:r)}),o})(e),t);else if(K.isObject(e)&&K.isIterable(e)){var a,s,u={};for(var c of e){if(!K.isArray(c))throw TypeError("Object iterator must return a key-value pair");u[s=c[0]]=(a=u[s])?K.isArray(a)?[...a,c[1]]:[a,c[1]]:c[1]}i(u,t)}else null!=e&&o(t,e,r);return this}get(e,t){if(e=xe(e)){var r=K.findKey(this,e);if(r){var n=this[r];if(!t)return n;if(!0===t)return function(e){for(var t,r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=n.exec(e);)r[t[1]]=t[2];return r}(n);if(K.isFunction(t))return t.call(this,n,r);if(K.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xe(e)){var r=K.findKey(this,e);return!(!r||void 0===this[r]||t&&!_e(0,this[r],r,t))}return!1}delete(e,t){var r=this,n=!1;function o(e){if(e=xe(e)){var o=K.findKey(r,e);!o||t&&!_e(0,r[o],o,t)||(delete r[o],n=!0)}}return K.isArray(e)?e.forEach(o):o(e),n}clear(e){for(var t=Object.keys(this),r=t.length,n=!1;r--;){var o=t[r];e&&!_e(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){var t=this,r={};return K.forEach(this,(n,o)=>{var i=K.findKey(r,o);if(i)return t[i]=Re(n),void delete t[o];var a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(o):String(o).trim();a!==o&&delete t[o],t[a]=Re(n),r[a]=!0}),this}concat(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.constructor.concat(this,...t)}toJSON(e){var t=Object.create(null);return K.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&K.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(e=>{var[t,r]=e;return t+": "+r}).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){for(var t=new this(e),r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.forEach(e=>t.set(e)),t}static accessor(e){var t=(this[je]=this[je]={accessors:{}}).accessors,r=this.prototype;function n(e){var n=xe(e);t[n]||(function(e,t){var r=K.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})})}(r,e),t[n]=!0)}return K.isArray(e)?e.forEach(n):n(e),this}}Te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),K.reduceDescriptors(Te.prototype,(e,t)=>{var{value:r}=e,n=t[0].toUpperCase()+t.slice(1);return{get:()=>r,set(e){this[n]=e}}}),K.freezeMethods(Te);const Pe=Te;function Ae(e,t){var r=this||Ee,n=t||r,o=Pe.from(n.headers),i=n.data;return K.forEach(e,function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Ce(e){return!(!e||!e.__CANCEL__)}function Ne(e,t,r){G.call(this,null==e?"canceled":e,G.ERR_CANCELED,t,r),this.name="CanceledError"}K.inherits(Ne,G,{__CANCEL__:!0});const Le=Ne;function Fe(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new G("Request failed with status code "+r.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}var ke=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=0,o=function(e,t){e=e||10;var r,n=new Array(e),o=new Array(e),i=0,a=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),c=o[a];r||(r=u),n[i]=s,o[i]=u;for(var l=a,f=0;l!==i;)f+=n[l++],l%=e;if((i=(i+1)%e)===a&&(a=(a+1)%e),!(u-r<t)){var p=c&&u-c;return p?Math.round(1e3*f/p):void 0}}}(50,250);return function(e,t){var r,n,o=0,i=1e3/t,a=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[function(){for(var e=Date.now(),t=e-o,s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];t>=i?a(u,e):(r=u,n||(n=setTimeout(()=>{n=null,a(r)},i-t)))},()=>r&&a(r)]}(r=>{var i=r.loaded,a=r.lengthComputable?r.total:void 0,s=i-n,u=o(s);n=i,e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&i<=a?(a-i)/u:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})},r)},Ue=(e,t)=>{var r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},De=e=>function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return K.asap(()=>e(...r))};const Be=ge.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,ge.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(ge.origin),ge.navigator&&/(msie|trident)/i.test(ge.navigator.userAgent)):()=>!0,qe=ge.hasStandardBrowserEnv?{write(e,t,r,n,o,i){var a=[e+"="+encodeURIComponent(t)];K.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),K.isString(n)&&a.push("path="+n),K.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function ze(e,t,r){var n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}function Ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Me(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var He=e=>e instanceof Pe?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(r),!0).forEach(function(t){Me(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ie(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e):e;function Je(e,t){t=t||{};var r={};function n(e,t,r,n){return K.isPlainObject(e)&&K.isPlainObject(t)?K.merge.call({caseless:n},e,t):K.isPlainObject(t)?K.merge({},t):K.isArray(t)?t.slice():t}function o(e,t,r,o){return K.isUndefined(t)?K.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function i(e,t){if(!K.isUndefined(t))return n(void 0,t)}function a(e,t){return K.isUndefined(t)?K.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}var u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,r)=>o(He(e),He(t),0,!0)};return K.forEach(Object.keys(Object.assign({},e,t)),function(n){var i=u[n]||o,a=i(e[n],t[n],n);K.isUndefined(a)&&i!==s||(r[n]=a)}),r}const We=e=>{var t,r=Je({},e),{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:u}=r;if(r.headers=s=Pe.from(s),r.url=se(ze(r.baseURL,r.url,r.allowAbsoluteUrls),e.params,e.paramsSerializer),u&&s.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),K.isFormData(n))if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(t=s.getContentType())){var[c,...l]=t?t.split(";").map(e=>e.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...l].join("; "))}if(ge.hasStandardBrowserEnv&&(o&&K.isFunction(o)&&(o=o(r)),o||!1!==o&&Be(r.url))){var f=i&&a&&qe.read(a);f&&s.set(i,f)}return r},Ke="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){var n,o,i,a,s,u=We(e),c=u.data,l=Pe.from(u.headers).normalize(),{responseType:f,onUploadProgress:p,onDownloadProgress:d}=u;function h(){a&&a(),s&&s(),u.cancelToken&&u.cancelToken.unsubscribe(n),u.signal&&u.signal.removeEventListener("abort",n)}var v=new XMLHttpRequest;function y(){if(v){var n=Pe.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders());Fe(function(e){t(e),h()},function(e){r(e),h()},{data:f&&"text"!==f&&"json"!==f?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:n,config:e,request:v}),v=null}}v.open(u.method.toUpperCase(),u.url,!0),v.timeout=u.timeout,"onloadend"in v?v.onloadend=y:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(y)},v.onabort=function(){v&&(r(new G("Request aborted",G.ECONNABORTED,e,v)),v=null)},v.onerror=function(){r(new G("Network Error",G.ERR_NETWORK,e,v)),v=null},v.ontimeout=function(){var t=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",n=u.transitional||ce;u.timeoutErrorMessage&&(t=u.timeoutErrorMessage),r(new G(t,n.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,v)),v=null},void 0===c&&l.setContentType(null),"setRequestHeader"in v&&K.forEach(l.toJSON(),function(e,t){v.setRequestHeader(t,e)}),K.isUndefined(u.withCredentials)||(v.withCredentials=!!u.withCredentials),f&&"json"!==f&&(v.responseType=u.responseType),d&&([i,s]=ke(d,!0),v.addEventListener("progress",i)),p&&v.upload&&([o,a]=ke(p),v.upload.addEventListener("progress",o),v.upload.addEventListener("loadend",a)),(u.cancelToken||u.signal)&&(n=t=>{v&&(r(!t||t.type?new Le(null,e,v):t),v.abort(),v=null)},u.cancelToken&&u.cancelToken.subscribe(n),u.signal&&(u.signal.aborted?n():u.signal.addEventListener("abort",n)));var m,b,g=(m=u.url,(b=/^([-+\w]{1,25})(:?\/\/|:)/.exec(m))&&b[1]||"");g&&-1===ge.protocols.indexOf(g)?r(new G("Unsupported protocol "+g+":",G.ERR_BAD_REQUEST,e)):v.send(c||null)})},Ve=(e,t)=>{var{length:r}=e=e?e.filter(Boolean):[];if(t||r){var n,o=new AbortController,i=function(e){if(!n){n=!0,s();var t=e instanceof Error?e:this.reason;o.abort(t instanceof G?t:new Le(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new G("timeout ".concat(t," of ms exceeded"),G.ETIMEDOUT))},t),s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)}),e=null)};e.forEach(e=>e.addEventListener("abort",i));var{signal:u}=o;return u.unsubscribe=()=>K.asap(s),u}};function $e(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function Xe(e){return function(){return new Ge(e.apply(this,arguments))}}function Ge(e){var t,r;function n(t,r){try{var i=e[t](r),a=i.value,s=a instanceof Ze;Promise.resolve(s?a.v:a).then(function(r){if(s){var u="return"===t?"return":"next";if(!a.k||r.done)return n(u,r);r=e[u](r).value}o(i.done?"return":"normal",r)},function(e){n("throw",e)})}catch(e){o("throw",e)}}function o(e,o){switch(e){case"return":t.resolve({value:o,done:!0});break;case"throw":t.reject(o);break;default:t.resolve({value:o,done:!1})}(t=t.next)?n(t.key,t.arg):r=null}this._invoke=function(e,o){return new Promise(function(i,a){var s={key:e,arg:o,resolve:i,reject:a,next:null};r?r=r.next=s:(t=r=s,n(e,o))})},"function"!=typeof e.return&&(this.return=void 0)}function Qe(e){return new Ze(e,0)}function Ye(e){var t={},r=!1;function n(t,n){return r=!0,n=new Promise(function(r){r(e[t](n))}),{done:!1,value:new Ze(n,1)}}return t["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},t.next=function(e){return r?(r=!1,e):n("next",e)},"function"==typeof e.throw&&(t.throw=function(e){if(r)throw r=!1,e;return n("throw",e)}),"function"==typeof e.return&&(t.return=function(e){return r?(r=!1,e):n("return",e)}),t}function Ze(e,t){this.v=e,this.k=t}function et(e){var t,r,n,o=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,n=Symbol.iterator);o--;){if(r&&null!=(t=e[r]))return t.call(e);if(n&&null!=(t=e[n]))return new tt(t.call(e));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function tt(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return tt=function(e){this.s=e,this.n=e.next},tt.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var r=this.s.return;return void 0===r?Promise.resolve({value:e,done:!0}):t(r.apply(this.s,arguments))},throw:function(e){var r=this.s.return;return void 0===r?Promise.reject(e):t(r.apply(this.s,arguments))}},new tt(e)}Ge.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},Ge.prototype.next=function(e){return this._invoke("next",e)},Ge.prototype.throw=function(e){return this._invoke("throw",e)},Ge.prototype.return=function(e){return this._invoke("return",e)};var rt=function*(e,t){var r=e.byteLength;if(!t||r<t)yield e;else for(var n,o=0;o<r;)n=o+t,yield e.slice(o,n),o=n},nt=function(){var e=Xe(function*(e,t){var r,n=!1,o=!1;try{for(var i,a=et(ot(e));n=!(i=yield Qe(a.next())).done;n=!1){var s=i.value;yield*Ye(et(rt(s,t)))}}catch(e){o=!0,r=e}finally{try{n&&null!=a.return&&(yield Qe(a.return()))}finally{if(o)throw r}}});return function(t,r){return e.apply(this,arguments)}}(),ot=function(){var e=Xe(function*(e){if(e[Symbol.asyncIterator])yield*Ye(et(e));else{var t=e.getReader();try{for(;;){var{done:r,value:n}=yield Qe(t.read());if(r)break;yield n}}finally{yield Qe(t.cancel())}}});return function(t){return e.apply(this,arguments)}}(),it=(e,t,r,n)=>{var o,i=nt(e,t),a=0,s=e=>{o||(o=!0,n&&n(e))};return new ReadableStream({pull(e){return(t=function*(){try{var{done:t,value:n}=yield i.next();if(t)return s(),void e.close();var o=n.byteLength;if(r){var u=a+=o;r(u)}e.enqueue(new Uint8Array(n))}catch(e){throw s(e),e}},function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(e){$e(i,n,o,a,s,"next",e)}function s(e){$e(i,n,o,a,s,"throw",e)}a(void 0)})})();var t},cancel:e=>(s(e),i.return())},{highWaterMark:2})};function at(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function st(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?at(Object(r),!0).forEach(function(t){ut(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ut(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ct(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function lt(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){ct(i,n,o,a,s,"next",e)}function s(e){ct(i,n,o,a,s,"throw",e)}a(void 0)})}}var ft,pt,dt="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,ht=dt&&"function"==typeof ReadableStream,vt=dt&&("function"==typeof TextEncoder?(ft=new TextEncoder,e=>ft.encode(e)):function(){var e=lt(function*(e){return new Uint8Array(yield new Response(e).arrayBuffer())});return function(t){return e.apply(this,arguments)}}()),yt=function(e){try{for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return!!e(...r)}catch(e){return!1}},mt=ht&&yt(()=>{var e=!1,t=new Request(ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),bt=ht&&yt(()=>K.isReadableStream(new Response("").body)),gt={stream:bt&&(e=>e.body)};dt&&(pt=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!gt[e]&&(gt[e]=K.isFunction(pt[e])?t=>t[e]():(t,r)=>{throw new G("Response type '".concat(e,"' is not supported"),G.ERR_NOT_SUPPORT,r)})}));var wt=function(){var e=lt(function*(e){if(null==e)return 0;if(K.isBlob(e))return e.size;if(K.isSpecCompliantForm(e)){var t=new Request(ge.origin,{method:"POST",body:e});return(yield t.arrayBuffer()).byteLength}return K.isArrayBufferView(e)||K.isArrayBuffer(e)?e.byteLength:(K.isURLSearchParams(e)&&(e+=""),K.isString(e)?(yield vt(e)).byteLength:void 0)});return function(t){return e.apply(this,arguments)}}(),Ot=function(){var e=lt(function*(e,t){var r=K.toFiniteNumber(e.getContentLength());return null==r?wt(t):r});return function(t,r){return e.apply(this,arguments)}}(),Et={http:null,xhr:Ke,fetch:dt&&function(){var e=lt(function*(e){var{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:u,responseType:c,headers:l,withCredentials:f="same-origin",fetchOptions:p}=We(e);c=c?(c+"").toLowerCase():"text";var d,h,v=Ve([o,i&&i.toAbortSignal()],a),y=v&&v.unsubscribe&&(()=>{v.unsubscribe()});try{if(u&&mt&&"get"!==r&&"head"!==r&&0!==(h=yield Ot(l,n))){var m,b=new Request(t,{method:"POST",body:n,duplex:"half"});if(K.isFormData(n)&&(m=b.headers.get("content-type"))&&l.setContentType(m),b.body){var[g,w]=Ue(h,ke(De(u)));n=it(b.body,65536,g,w)}}K.isString(f)||(f=f?"include":"omit");var O="credentials"in Request.prototype;d=new Request(t,st(st({},p),{},{signal:v,method:r.toUpperCase(),headers:l.normalize().toJSON(),body:n,duplex:"half",credentials:O?f:void 0}));var E=yield fetch(d,p),S=bt&&("stream"===c||"response"===c);if(bt&&(s||S&&y)){var j={};["status","statusText","headers"].forEach(e=>{j[e]=E[e]});var x=K.toFiniteNumber(E.headers.get("content-length")),[R,_]=s&&Ue(x,ke(De(s),!0))||[];E=new Response(it(E.body,65536,R,()=>{_&&_(),y&&y()}),j)}c=c||"text";var T=yield gt[K.findKey(gt,c)||"text"](E,e);return!S&&y&&y(),yield new Promise((t,r)=>{Fe(t,r,{data:T,headers:Pe.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:d})})}catch(t){if(y&&y(),t&&"TypeError"===t.name&&/Load failed|fetch/i.test(t.message))throw Object.assign(new G("Network Error",G.ERR_NETWORK,e,d),{cause:t.cause||t});throw G.from(t,t&&t.code,e,d)}});return function(t){return e.apply(this,arguments)}}()};K.forEach(Et,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});var St=e=>"- ".concat(e),jt=e=>K.isFunction(e)||null===e||!1===e;const xt=e=>{e=K.isArray(e)?e:[e];for(var t,r,{length:n}=e,o={},i=0;i<n;i++){var a=void 0;if(r=t=e[i],!jt(t)&&void 0===(r=Et[(a=String(t)).toLowerCase()]))throw new G("Unknown adapter '".concat(a,"'"));if(r)break;o[a||"#"+i]=r}if(!r){var s=Object.entries(o).map(e=>{var[t,r]=e;return"adapter ".concat(t," ")+(!1===r?"is not supported by the environment":"is not available in the build")}),u=n?s.length>1?"since :\n"+s.map(St).join("\n"):" "+St(s[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return r};function Rt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Le(null,e)}function _t(e){return Rt(e),e.headers=Pe.from(e.headers),e.data=Ae.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),xt(e.adapter||Ee.adapter)(e).then(function(t){return Rt(e),t.data=Ae.call(e,e.transformResponse,t),t.headers=Pe.from(t.headers),t},function(t){return Ce(t)||(Rt(e),t&&t.response&&(t.response.data=Ae.call(e,e.transformResponse,t.response),t.response.headers=Pe.from(t.response.headers))),Promise.reject(t)})}var Tt="1.10.0",Pt={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Pt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var At={};Pt.transitional=function(e,t,r){function n(e,t){return"[Axios v"+Tt+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new G(n(o," has been removed"+(t?" in "+t:"")),G.ERR_DEPRECATED);return t&&!At[o]&&(At[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}},Pt.spelling=function(e){return(t,r)=>(console.warn("".concat(r," is likely a misspelling of ").concat(e)),!0)};const Ct={assertOptions:function(e,t,r){if("object"!=typeof e)throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],u=void 0===s||a(s,i,e);if(!0!==u)throw new G("option "+i+" must be "+u,G.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}},validators:Pt};function Nt(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}var Lt=Ct.validators;class Ft{constructor(e){this.defaults=e||{},this.interceptors={request:new ue,response:new ue}}request(e,t){var r,n=this;return(r=function*(){try{return yield n._request(e,t)}catch(e){if(e instanceof Error){var r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;var o=r.stack?r.stack.replace(/^.+\n/,""):"";try{e.stack?o&&!String(e.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+o):e.stack=o}catch(e){}}throw e}},function(){var e=this,t=arguments;return new Promise(function(n,o){var i=r.apply(e,t);function a(e){Nt(i,n,o,a,s,"next",e)}function s(e){Nt(i,n,o,a,s,"throw",e)}a(void 0)})})()}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Je(this.defaults,t);var{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&Ct.assertOptions(r,{silentJSONParsing:Lt.transitional(Lt.boolean),forcedJSONParsing:Lt.transitional(Lt.boolean),clarifyTimeoutError:Lt.transitional(Lt.boolean)},!1),null!=n&&(K.isFunction(n)?t.paramsSerializer={serialize:n}:Ct.assertOptions(n,{encode:Lt.function,serialize:Lt.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ct.assertOptions(t,{baseUrl:Lt.spelling("baseURL"),withXsrfToken:Lt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();var i=o&&K.merge(o.common,o[t.method]);o&&K.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=Pe.concat(i,o);var a=[],s=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))});var u,c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});var l,f=0;if(!s){var p=[_t.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,c),l=p.length,u=Promise.resolve(t);f<l;)u=u.then(p[f++],p[f++]);return u}l=a.length;var d=t;for(f=0;f<l;){var h=a[f++],v=a[f++];try{d=h(d)}catch(e){v.call(this,e);break}}try{u=_t.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return se(ze((e=Je(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}K.forEach(["delete","get","head","options"],function(e){Ft.prototype[e]=function(t,r){return this.request(Je(r||{},{method:e,url:t,data:(r||{}).data}))}}),K.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,o){return this.request(Je(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Ft.prototype[e]=t(),Ft.prototype[e+"Form"]=t(!0)});const kt=Ft;class Ut{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;this.promise.then(e=>{if(r._listeners){for(var t=r._listeners.length;t-- >0;)r._listeners[t](e);r._listeners=null}}),this.promise.then=e=>{var t,n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,o){r.reason||(r.reason=new Le(e,n,o),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}toAbortSignal(){var e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){var e;return{token:new Ut(function(t){e=t}),cancel:e}}}const Dt=Ut;var Bt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Bt).forEach(e=>{var[t,r]=e;Bt[r]=t});const qt=Bt;var zt=function e(t){var r=new kt(t),o=n(kt.prototype.request,r);return K.extend(o,kt.prototype,r,{allOwnKeys:!0}),K.extend(o,r,null,{allOwnKeys:!0}),o.create=function(r){return e(Je(t,r))},o}(Ee);zt.Axios=kt,zt.CanceledError=Le,zt.CancelToken=Dt,zt.isCancel=Ce,zt.VERSION=Tt,zt.toFormData=te,zt.AxiosError=G,zt.Cancel=zt.CanceledError,zt.all=function(e){return Promise.all(e)},zt.spread=function(e){return function(t){return e.apply(null,t)}},zt.isAxiosError=function(e){return K.isObject(e)&&!0===e.isAxiosError},zt.mergeConfig=Je,zt.AxiosHeaders=Pe,zt.formToJSON=e=>we(K.isHTMLForm(e)?new FormData(e):e),zt.getAdapter=xt,zt.HttpStatusCode=qt,zt.default=zt;const It=zt.create({baseURL:window.location.origin});var{TCL:Mt}=window;class Ht extends Mt.Component{init(){this.setFooterScrim(),this.setFooterContent()}setFooterContent(){var e=t(window,"i18n.locale","en_us").toLowerCase(),r=t(window,"i18n.region","US").toLowerCase(),n="/api/tesla/footer/html/v1";"en_us"!==e&&"cn"!==r&&(n="/".concat(e).concat(n)),It.get(n).then(e=>{this.element.innerHTML=e.data;var t=this.element.querySelector(".menu-year");t&&(t.textContent=(new Date).getFullYear())})}setFooterScrim(){var e="tds-scrim--white",t=document.querySelectorAll(".tcl-showcase");if(document.body.classList.contains("template-product-page")&&t&&t.length>0){var r=Array.from(t).slice(-1)[0];if(r.classList.contains("tcl-showcase--with-drawer")){var n=r.querySelector(".tcl-drawer");if(n)for(var o=0,i=n.classList.length;o<i;++o)if(/tds-scrim--.*/.test(n.classList[o])){e=n.classList[o];break}}else{var a=r.querySelector(".tcl-order, .tcl-specifications");if(null!==a)for(var s=0,u=a.classList.length;s<u;++s)if(/tds-scrim--.*/.test(a.classList[s])){e=a.classList[s];break}}}this.element.classList.contains("tds-scrim--white")||this.element.classList.contains("tds-scrim--black")||this.element.classList.add(e)}}Mt.registerComponent(".tcl-footer","footer",Ht)})()})();
}
{
(()=>{"use strict";var{TCL:e}=window;class t extends e.Component{init(){var{innerText:e}=this.element;if("iconName"in this.element.dataset&&"null"!==this.element.dataset.iconName){var{iconName:t}=this.element.dataset;this.element.innerHTML="",this.element.classList.add("tds-link","tds-link--icon-leading");var n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"svg");i.classList.add("tds-icon","tds-icon-".concat(t),"tcl-link__icon"),i.setAttribute("aria-hidden","true");var s=document.createElementNS(n,"use");s.setAttributeNS("http://www.w3.org/1999/xlink","href","#tds-icon-".concat(t)),i.append(s);var a=document.createElement("span");a.innerText=e,this.element.append(i),this.element.append(a)}else this.element.classList.remove("tcl-link--with-icon","tds-link--icon-leading")}}e.registerComponent(".tcl-link--with-icon","link-with-icon",t)})();
}
{
/**
 * @file
 * Override Drupal JS theme functions with TDS-styled equivalents.
 */
(function (Drupal) {

  // TDS loader markup — spinner ring SVG + Tesla T logo SVG.
  var teslaLoaderSvg = '<svg class="tds-icon tds-icon-loader" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M24 1a2.347 2.347 0 1 1 0 4.694 18.306 18.306 0 1 0 13.359 5.792 2.347 2.347 0 1 1 3.426-3.21A23 23 0 1 1 24 1"></path></svg>' +
    '<svg class="tds-icon tds-icon-logo" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m80 129.8 14-78.7c13.3 0 17.5 1.5 18.1 7.4 0 0 8.9-3.3 13.5-10.1-17.6-8.1-35.3-8.5-35.3-8.5L80 52.5 69.7 39.9s-17.7.4-35.3 8.5c4.5 6.8 13.5 10.1 13.5 10.1.6-6 4.8-7.4 18.1-7.4z"></path><path d="M80 36.3c14.2-.1 30.5 2.2 47.2 9.5 2.2-4 2.8-5.8 2.8-5.8-18.2-7.3-35.3-9.7-50-9.8-14.7.1-31.8 2.5-50 9.8 0 0 .8 2.2 2.8 5.8 16.7-7.3 33-9.6 47.2-9.5"></path></g></svg>';

  /**
   * Fullscreen progress indicator with Tesla logo.
   *
   * @return {string}
   *   The HTML markup for the fullscreen throbber.
   */
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div aria-busy="true" aria-hidden="false" aria-label="Loading" aria-live="polite" class="tds-loader tds-loader--fullscreen tds-loader--show" role="progressbar">' + teslaLoaderSvg + '</div>';
  };

  /**
   * Inline progress throbber with Tesla logo.
   *
   * @param {string} message
   *   The message shown on the UI.
   * @return {string}
   *   The HTML markup for the inline throbber.
   */
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? '<div class="ajax-progress-message">' + Drupal.t(message) + '</div>' : '';
    return '<div class="ajax-progress ajax-progress-throbber tds-loader-inline">' + teslaLoaderSvg + messageMarkup + '</div>';
  };
  /**
   * Theme function for a message using TDS styling.
   *
   * @param {object} message
   *   The message object.
   * @param {string} message.text
   *   The message text.
   * @param {object} options
   *   The message context.
   * @param {string} options.type
   *   The message type.
   * @param {string} options.id
   *   ID of the message, for reference.
   *
   * @return {HTMLElement}
   *   A DOM Node.
   */
  Drupal.theme.message = function ({ text }, { type, id }) {
    var variation = 'success';
    if (type === 'error') {
      variation = 'error';
    } else if (type === 'warning') {
      variation = 'warning';
    }

    var messageWrapper = document.createElement('div');
    messageWrapper.setAttribute('class', 'tcl-status tds-status_msg tds-card tds-card--dense');
    messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);

    var messagesTypes = Drupal.Message.getMessageTypeLabels();
    messageWrapper.setAttribute('aria-label', messagesTypes[type]);

    messageWrapper.innerHTML =
      '<svg class="tds-icon tds-icon-status-' + variation + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<use xlink:href="#tds-icon-status-' + variation + '"></use>' +
      '</svg>' +
      '<div class="tcl-status__body tds-card-body">' +
        '<ul><li>' + text + '</li></ul>' +
      '</div>';

    return messageWrapper;
  };
})(Drupal);

}
