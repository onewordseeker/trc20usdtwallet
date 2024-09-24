import{r as x,j as n,d as m,c as pe,aM as O,G as f,b2 as P,I as ae,K as Z,af as me,ab as F,am as oe,ah as Qe,ai as Ze,Z as R,P as M,bL as Je,bK as et,aO as ke,T as U,cc as tt,bO as nt,be as ot,bf as Be,bU as it,bV as at,B as Y,b3 as L,b6 as N,n as Oe,aN as rt,df as st,cj as lt,F as ct,bm as dt,U as ut,V as gt,Y as V,a2 as ht,aj as Me,bD as pt,c0 as Pe,aQ as Ie,bv as mt,a1 as ft,b5 as xt,aq as Ct,aU as vt,M as k}from"./index-BE75cmpZ.js";import{C as Dt,a as yt,b as bt}from"./ComponentSkeleton-DMhpF42u.js";import{L as ie}from"./ListItemAvatar-hprJeugB.js";import{a as St}from"./avatar-1-B3Wuv9V1.js";import{a as jt}from"./avatar-2-BAbqTplY.js";import"./Skeleton-CpgMpkyu.js";const Ae=["username@gmail.com","user02@gmail.com"];function Ee({onClose:e,selectedValue:t,open:o}){const i=pe(),a=()=>{e(t)},r=s=>{e(s)};return n.jsxs(O,{onClose:a,open:o,children:[n.jsxs(f,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",sx:{borderBottom:`1px solid ${i.palette.divider}`},children:[n.jsx(f,{item:!0,children:n.jsx(P,{children:"Set backup account"})}),n.jsx(f,{item:!0,sx:{mr:1.5},children:n.jsx(ae,{color:"secondary",onClick:a,children:n.jsx(Z,{style:{transform:"rotate(45deg)"}})})})]}),n.jsxs(me,{sx:{p:2.5},children:[Ae.map((s,l)=>n.jsxs(F,{onClick:()=>r(s),selected:t===s,sx:{p:1.25},children:[n.jsx(ie,{children:n.jsx(oe,{src:Qe(`avatar-${l+1}.png`,Ze.USERS)})}),n.jsx(R,{primary:s})]},s)),n.jsxs(F,{autoFocus:!0,onClick:()=>r("addAccount"),sx:{p:1.25},children:[n.jsx(ie,{children:n.jsx(oe,{sx:{bgcolor:"primary.lighter",color:"primary.main",width:32,height:32},children:n.jsx(Z,{style:{fontSize:"0.625rem"}})})}),n.jsx(R,{primary:"Add Account"})]})]})]})}function Tt(){const[e,t]=x.useState(!1),[o,i]=x.useState(Ae[1]),a=()=>{t(!0)},r=s=>{t(!1),i(s)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:a,children:"Open simple dialog"}),n.jsx(Ee,{selectedValue:o,open:e,onClose:r})]})}Ee.propTypes={onClose:M.func,selectedValue:M.string,open:M.bool};function wt(e){return Je("MuiDialogContentText",e)}et("MuiDialogContentText",["root"]);const kt=["children","className"],Bt=e=>{const{classes:t}=e,i=at({root:["root"]},wt,t);return Be({},t,i)},Ot=ke(U,{shouldForwardProp:e=>tt(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),H=x.forwardRef(function(t,o){const i=nt({props:t,name:"MuiDialogContentText"}),{className:a}=i,r=ot(i,kt),s=Bt(r);return n.jsx(Ot,Be({component:"p",variant:"body1",color:"text.secondary",ref:o,ownerState:r,className:it(s.root,a)},i,{classes:s}))});function Mt(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open alert dialog"}),n.jsx(O,{open:e,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(P,{id:"alert-dialog-title",children:"Use Google's location service?"}),n.jsx(L,{children:n.jsx(H,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:i,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:i,children:"Agree"})]})]})})]})}function Pt(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open form dialog"}),n.jsx(O,{open:e,onClose:i,children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(P,{children:"Subscribe"}),n.jsxs(L,{children:[n.jsx(H,{sx:{mb:2},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),n.jsx(Oe,{id:"name",placeholder:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})]}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:i,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:i,children:"Subscribe"})]})]})})]})}function It(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Slide in dialog"}),n.jsx(O,{open:e,TransitionComponent:rt,keepMounted:!0,onClose:i,"aria-describedby":"alert-dialog-slide-description",children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(P,{children:"Use Google'ss location service?"}),n.jsx(L,{children:n.jsx(H,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:i,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:i,children:"Agree"})]})]})})]})}const At=ke(O)(({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(3)},"& .MuiDialogActions-root":{padding:e.spacing(1.25),paddingRight:e.spacing(2)}})),Le=({children:e,onClose:t,...o})=>n.jsxs(P,{sx:{m:0,p:2},...o,children:[e,t?n.jsx(ae,{"aria-label":"close",onClick:t,color:"secondary",sx:{position:"absolute",right:10,top:10},children:n.jsx(Z,{style:{transform:"rotate(45deg)"}})}):null]});function Et(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open dialog"}),n.jsxs(At,{onClose:i,"aria-labelledby":"customized-dialog-title",open:e,children:[n.jsx(Le,{id:"customized-dialog-title",onClose:i,children:"Modal Title"}),n.jsxs(L,{dividers:!0,sx:{p:3},children:[n.jsx(U,{variant:"h6",gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),n.jsx(U,{variant:"h6",gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),n.jsx(N,{children:n.jsx(m,{variant:"contained",onClick:i,children:"Save changes"})})]})]})}Le.propTypes={children:M.node,onClose:M.func,other:M.any};const Lt=x.forwardRef((e,t)=>n.jsx(dt,{direction:"up",ref:t,...e}));function Nt(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open full-screen dialog"}),n.jsxs(O,{fullScreen:!0,open:e,onClose:i,TransitionComponent:Lt,children:[n.jsx(st,{sx:{position:"relative",boxShadow:"none"},children:n.jsxs(lt,{children:[n.jsx(ae,{edge:"start",color:"inherit",onClick:i,"aria-label":"close",children:n.jsx(Z,{style:{transform:"rotate(45deg)"}})}),n.jsx(U,{sx:{ml:2,flex:1},variant:"h6",children:"Set Backup Account"}),n.jsx(m,{color:"primary",variant:"contained",onClick:i,children:"save"})]})}),n.jsxs(me,{sx:{p:3},children:[n.jsxs(F,{children:[n.jsx(ie,{children:n.jsx(oe,{src:St})}),n.jsx(R,{primary:"Phone ringtone",secondary:"Default"})]}),n.jsx(ct,{}),n.jsxs(F,{children:[n.jsx(ie,{children:n.jsx(oe,{src:jt})}),n.jsx(R,{primary:"Default notification ringtone",secondary:"Tethys"})]})]})]})]})}function _t(){const[e,t]=x.useState(!0),[o,i]=x.useState("sm"),[a,r]=x.useState(!1),s=()=>{r(!0)},l=()=>{r(!1)},h=y=>{i(y.target.value)},v=y=>{t(y.target.checked)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:s,children:"Open max-width dialog"}),n.jsx(O,{fullWidth:e,maxWidth:o,open:a,onClose:l,children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(P,{children:"Optional sizes"}),n.jsxs(L,{children:[n.jsx(H,{children:"You can set my maximum width and whether to adapt or not."}),n.jsxs(f,{container:!0,spacing:1.5,alignItems:"center",sx:{mt:1},children:[n.jsx(f,{item:!0,children:n.jsx(U,{variant:"h6",children:"Max Width :"})}),n.jsx(f,{item:!0,children:n.jsx(ut,{sx:{minWidth:120},children:n.jsxs(gt,{autoFocus:!0,value:o,onChange:h,inputProps:{name:"max-width",id:"max-width"},children:[n.jsx(V,{value:!1,children:"false"}),n.jsx(V,{value:"xs",children:"xs"}),n.jsx(V,{value:"sm",children:"sm"}),n.jsx(V,{value:"md",children:"md"}),n.jsx(V,{value:"lg",children:"lg"}),n.jsx(V,{value:"xl",children:"xl"})]})})})]}),n.jsxs(f,{container:!0,spacing:1.5,alignItems:"center",sx:{mt:.25},children:[n.jsx(f,{item:!0,children:n.jsx(U,{variant:"h6",children:"Full Width:"})}),n.jsx(f,{item:!0,children:n.jsx(ht,{checked:e,onChange:v})})]})]}),n.jsx(N,{children:n.jsx(m,{variant:"outlined",color:"error",onClick:l,children:"Close"})})]})})]})}function Gt(){const e=pe(),t=Me(e.breakpoints.down("md")),[o,i]=x.useState(!1),a=()=>{i(!0)},r=()=>{i(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:a,children:"Open responsive dialog"}),n.jsx(O,{fullScreen:t,open:o,onClose:r,"aria-labelledby":"responsive-dialog-title",children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(P,{id:"responsive-dialog-title",children:"Use Google's location service?"}),n.jsx(L,{children:n.jsx(H,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:r,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:r,children:"Agree"})]})]})})]})}var re={exports:{}},Ne={};function _e(e){var t,o,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=_e(e[t]))&&(i&&(i+=" "),i+=o);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function Te(){for(var e,t,o=0,i="";o<arguments.length;)(e=arguments[o++])&&(t=_e(e))&&(i&&(i+=" "),i+=t);return i}const Wt=Object.freeze(Object.defineProperty({__proto__:null,clsx:Te,default:Te},Symbol.toStringTag,{value:"Module"})),Ft=pt(Wt);var C={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.dontSetMe=$t;I.findInArray=Rt;I.int=Xt;I.isFunction=Ut;I.isNum=Yt;function Rt(e,t){for(let o=0,i=e.length;o<i;o++)if(t.apply(t,[e[o],o,e]))return e[o]}function Ut(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Yt(e){return typeof e=="number"&&!isNaN(e)}function Xt(e){return parseInt(e,10)}function $t(e,t,o){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(o," - do not set this, set it on the child."))}var X={};Object.defineProperty(X,"__esModule",{value:!0});X.browserPrefixToKey=We;X.browserPrefixToStyle=qt;X.default=void 0;X.getPrefix=Ge;const ue=["Moz","Webkit","O","ms"];function Ge(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const o=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!o||t in o)return"";for(let i=0;i<ue.length;i++)if(We(t,ue[i])in o)return ue[i];return""}function We(e,t){return t?"".concat(t).concat(Vt(e)):e}function qt(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function Vt(e){let t="",o=!0;for(let i=0;i<e.length;i++)o?(t+=e[i].toUpperCase(),o=!1):e[i]==="-"?o=!0:t+=e[i];return t}X.default=Ge();Object.defineProperty(C,"__esModule",{value:!0});C.addClassName=Ue;C.addEvent=Kt;C.addUserSelectStyles=ln;C.createCSSTransform=on;C.createSVGTransform=an;C.getTouch=rn;C.getTouchIdentifier=sn;C.getTranslation=fe;C.innerHeight=en;C.innerWidth=tn;C.matchesSelector=Re;C.matchesSelectorAndParentsTo=Ht;C.offsetXYFromParent=nn;C.outerHeight=Zt;C.outerWidth=Jt;C.removeClassName=Ye;C.removeEvent=Qt;C.removeUserSelectStyles=cn;var w=I,we=zt(X);function Fe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Fe=function(i){return i?o:t})(e)}function zt(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Fe(t);if(o&&o.has(e))return o.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]}return i.default=e,o&&o.set(e,i),i}let ne="";function Re(e,t){return ne||(ne=(0,w.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(o){return(0,w.isFunction)(e[o])})),(0,w.isFunction)(e[ne])?e[ne](t):!1}function Ht(e,t,o){let i=e;do{if(Re(i,t))return!0;if(i===o)return!1;i=i.parentNode}while(i);return!1}function Kt(e,t,o,i){if(!e)return;const a={capture:!0,...i};e.addEventListener?e.addEventListener(t,o,a):e.attachEvent?e.attachEvent("on"+t,o):e["on"+t]=o}function Qt(e,t,o,i){if(!e)return;const a={capture:!0,...i};e.removeEventListener?e.removeEventListener(t,o,a):e.detachEvent?e.detachEvent("on"+t,o):e["on"+t]=null}function Zt(e){let t=e.clientHeight;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,w.int)(o.borderTopWidth),t+=(0,w.int)(o.borderBottomWidth),t}function Jt(e){let t=e.clientWidth;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,w.int)(o.borderLeftWidth),t+=(0,w.int)(o.borderRightWidth),t}function en(e){let t=e.clientHeight;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,w.int)(o.paddingTop),t-=(0,w.int)(o.paddingBottom),t}function tn(e){let t=e.clientWidth;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,w.int)(o.paddingLeft),t-=(0,w.int)(o.paddingRight),t}function nn(e,t,o){const a=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),r=(e.clientX+t.scrollLeft-a.left)/o,s=(e.clientY+t.scrollTop-a.top)/o;return{x:r,y:s}}function on(e,t){const o=fe(e,t,"px");return{[(0,we.browserPrefixToKey)("transform",we.default)]:o}}function an(e,t){return fe(e,t,"")}function fe(e,t,o){let{x:i,y:a}=e,r="translate(".concat(i).concat(o,",").concat(a).concat(o,")");if(t){const s="".concat(typeof t.x=="string"?t.x:t.x+o),l="".concat(typeof t.y=="string"?t.y:t.y+o);r="translate(".concat(s,", ").concat(l,")")+r}return r}function rn(e,t){return e.targetTouches&&(0,w.findInArray)(e.targetTouches,o=>t===o.identifier)||e.changedTouches&&(0,w.findInArray)(e.changedTouches,o=>t===o.identifier)}function sn(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function ln(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&Ue(e.body,"react-draggable-transparent-selection")}function cn(e){if(e)try{if(e.body&&Ye(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function Ue(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function Ye(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var A={};Object.defineProperty(A,"__esModule",{value:!0});A.canDragX=gn;A.canDragY=hn;A.createCoreData=mn;A.createDraggableData=fn;A.getBoundPosition=dn;A.getControlPosition=pn;A.snapToGrid=un;var T=I,z=C;function dn(e,t,o){if(!e.props.bounds)return[t,o];let{bounds:i}=e.props;i=typeof i=="string"?i:xn(i);const a=xe(e);if(typeof i=="string"){const{ownerDocument:r}=a,s=r.defaultView;let l;if(i==="parent"?l=a.parentNode:l=r.querySelector(i),!(l instanceof s.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const h=l,v=s.getComputedStyle(a),y=s.getComputedStyle(h);i={left:-a.offsetLeft+(0,T.int)(y.paddingLeft)+(0,T.int)(v.marginLeft),top:-a.offsetTop+(0,T.int)(y.paddingTop)+(0,T.int)(v.marginTop),right:(0,z.innerWidth)(h)-(0,z.outerWidth)(a)-a.offsetLeft+(0,T.int)(y.paddingRight)-(0,T.int)(v.marginRight),bottom:(0,z.innerHeight)(h)-(0,z.outerHeight)(a)-a.offsetTop+(0,T.int)(y.paddingBottom)-(0,T.int)(v.marginBottom)}}return(0,T.isNum)(i.right)&&(t=Math.min(t,i.right)),(0,T.isNum)(i.bottom)&&(o=Math.min(o,i.bottom)),(0,T.isNum)(i.left)&&(t=Math.max(t,i.left)),(0,T.isNum)(i.top)&&(o=Math.max(o,i.top)),[t,o]}function un(e,t,o){const i=Math.round(t/e[0])*e[0],a=Math.round(o/e[1])*e[1];return[i,a]}function gn(e){return e.props.axis==="both"||e.props.axis==="x"}function hn(e){return e.props.axis==="both"||e.props.axis==="y"}function pn(e,t,o){const i=typeof t=="number"?(0,z.getTouch)(e,t):null;if(typeof t=="number"&&!i)return null;const a=xe(o),r=o.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,z.offsetXYFromParent)(i||e,r,o.props.scale)}function mn(e,t,o){const i=!(0,T.isNum)(e.lastX),a=xe(e);return i?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:o,x:t,y:o}:{node:a,deltaX:t-e.lastX,deltaY:o-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:o}}function fn(e,t){const o=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/o,y:e.state.y+t.deltaY/o,deltaX:t.deltaX/o,deltaY:t.deltaY/o,lastX:e.state.x,lastY:e.state.y}}function xn(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function xe(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var se={},le={};Object.defineProperty(le,"__esModule",{value:!0});le.default=Cn;function Cn(){}Object.defineProperty(se,"__esModule",{value:!0});se.default=void 0;var ge=Dn(x),j=Ce(Pe),vn=Ce(Ie),b=C,G=A,he=I,Q=Ce(le);function Ce(e){return e&&e.__esModule?e:{default:e}}function Xe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Xe=function(i){return i?o:t})(e)}function Dn(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Xe(t);if(o&&o.has(e))return o.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]}return i.default=e,o&&o.set(e,i),i}function S(e,t,o){return t=yn(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function yn(e){var t=bn(e,"string");return typeof t=="symbol"?t:String(t)}function bn(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const B={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let W=B.mouse,ce=class extends ge.Component{constructor(){super(...arguments),S(this,"dragging",!1),S(this,"lastX",NaN),S(this,"lastY",NaN),S(this,"touchIdentifier",null),S(this,"mounted",!1),S(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const o=this.findDOMNode();if(!o||!o.ownerDocument||!o.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:i}=o;if(this.props.disabled||!(t.target instanceof i.defaultView.Node)||this.props.handle&&!(0,b.matchesSelectorAndParentsTo)(t.target,this.props.handle,o)||this.props.cancel&&(0,b.matchesSelectorAndParentsTo)(t.target,this.props.cancel,o))return;t.type==="touchstart"&&t.preventDefault();const a=(0,b.getTouchIdentifier)(t);this.touchIdentifier=a;const r=(0,G.getControlPosition)(t,a,this);if(r==null)return;const{x:s,y:l}=r,h=(0,G.createCoreData)(this,s,l);(0,Q.default)("DraggableCore: handleDragStart: %j",h),(0,Q.default)("calling",this.props.onStart),!(this.props.onStart(t,h)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,b.addUserSelectStyles)(i),this.dragging=!0,this.lastX=s,this.lastY=l,(0,b.addEvent)(i,W.move,this.handleDrag),(0,b.addEvent)(i,W.stop,this.handleDragStop))}),S(this,"handleDrag",t=>{const o=(0,G.getControlPosition)(t,this.touchIdentifier,this);if(o==null)return;let{x:i,y:a}=o;if(Array.isArray(this.props.grid)){let l=i-this.lastX,h=a-this.lastY;if([l,h]=(0,G.snapToGrid)(this.props.grid,l,h),!l&&!h)return;i=this.lastX+l,a=this.lastY+h}const r=(0,G.createCoreData)(this,i,a);if((0,Q.default)("DraggableCore: handleDrag: %j",r),this.props.onDrag(t,r)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const h=document.createEvent("MouseEvents");h.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(h)}return}this.lastX=i,this.lastY=a}),S(this,"handleDragStop",t=>{if(!this.dragging)return;const o=(0,G.getControlPosition)(t,this.touchIdentifier,this);if(o==null)return;let{x:i,y:a}=o;if(Array.isArray(this.props.grid)){let h=i-this.lastX||0,v=a-this.lastY||0;[h,v]=(0,G.snapToGrid)(this.props.grid,h,v),i=this.lastX+h,a=this.lastY+v}const r=(0,G.createCoreData)(this,i,a);if(this.props.onStop(t,r)===!1||this.mounted===!1)return!1;const l=this.findDOMNode();l&&this.props.enableUserSelectHack&&(0,b.removeUserSelectStyles)(l.ownerDocument),(0,Q.default)("DraggableCore: handleDragStop: %j",r),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,l&&((0,Q.default)("DraggableCore: Removing handlers"),(0,b.removeEvent)(l.ownerDocument,W.move,this.handleDrag),(0,b.removeEvent)(l.ownerDocument,W.stop,this.handleDragStop))}),S(this,"onMouseDown",t=>(W=B.mouse,this.handleDragStart(t))),S(this,"onMouseUp",t=>(W=B.mouse,this.handleDragStop(t))),S(this,"onTouchStart",t=>(W=B.touch,this.handleDragStart(t))),S(this,"onTouchEnd",t=>(W=B.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,b.addEvent)(t,B.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:o}=t;(0,b.removeEvent)(o,B.mouse.move,this.handleDrag),(0,b.removeEvent)(o,B.touch.move,this.handleDrag),(0,b.removeEvent)(o,B.mouse.stop,this.handleDragStop),(0,b.removeEvent)(o,B.touch.stop,this.handleDragStop),(0,b.removeEvent)(t,B.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,b.removeUserSelectStyles)(o)}}findDOMNode(){var t,o;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(o=this.props)===null||o===void 0||(o=o.nodeRef)===null||o===void 0?void 0:o.current:vn.default.findDOMNode(this)}render(){return ge.cloneElement(ge.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};se.default=ce;S(ce,"displayName","DraggableCore");S(ce,"propTypes",{allowAnyClick:j.default.bool,children:j.default.node.isRequired,disabled:j.default.bool,enableUserSelectHack:j.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:j.default.arrayOf(j.default.number),handle:j.default.string,cancel:j.default.string,nodeRef:j.default.object,onStart:j.default.func,onDrag:j.default.func,onStop:j.default.func,onMouseDown:j.default.func,scale:j.default.number,className:he.dontSetMe,style:he.dontSetMe,transform:he.dontSetMe});S(ce,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return h.default}}),e.default=void 0;var t=de(x),o=y(Pe),i=y(Ie),a=y(Ft),r=C,s=A,l=I,h=y(se),v=y(le);function y(c){return c&&c.__esModule?c:{default:c}}function J(c){if(typeof WeakMap!="function")return null;var d=new WeakMap,g=new WeakMap;return(J=function(u){return u?g:d})(c)}function de(c,d){if(c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var g=J(d);if(g&&g.has(c))return g.get(c);var u={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in c)if(p!=="default"&&Object.prototype.hasOwnProperty.call(c,p)){var _=D?Object.getOwnPropertyDescriptor(c,p):null;_&&(_.get||_.set)?Object.defineProperty(u,p,_):u[p]=c[p]}return u.default=c,g&&g.set(c,u),u}function E(){return E=Object.assign?Object.assign.bind():function(c){for(var d=1;d<arguments.length;d++){var g=arguments[d];for(var u in g)Object.prototype.hasOwnProperty.call(g,u)&&(c[u]=g[u])}return c},E.apply(this,arguments)}function $(c,d,g){return d=Ve(d),d in c?Object.defineProperty(c,d,{value:g,enumerable:!0,configurable:!0,writable:!0}):c[d]=g,c}function Ve(c){var d=ze(c,"string");return typeof d=="symbol"?d:String(d)}function ze(c,d){if(typeof c!="object"||c===null)return c;var g=c[Symbol.toPrimitive];if(g!==void 0){var u=g.call(c,d||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(c)}class ee extends t.Component{static getDerivedStateFromProps(d,g){let{position:u}=d,{prevPropsPosition:D}=g;return u&&(!D||u.x!==D.x||u.y!==D.y)?((0,v.default)("Draggable: getDerivedStateFromProps %j",{position:u,prevPropsPosition:D}),{x:u.x,y:u.y,prevPropsPosition:{...u}}):null}constructor(d){super(d),$(this,"onDragStart",(g,u)=>{if((0,v.default)("Draggable: onDragStart: %j",u),this.props.onStart(g,(0,s.createDraggableData)(this,u))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),$(this,"onDrag",(g,u)=>{if(!this.state.dragging)return!1;(0,v.default)("Draggable: onDrag: %j",u);const D=(0,s.createDraggableData)(this,u),p={x:D.x,y:D.y,slackX:0,slackY:0};if(this.props.bounds){const{x:K,y:q}=p;p.x+=this.state.slackX,p.y+=this.state.slackY;const[te,ve]=(0,s.getBoundPosition)(this,p.x,p.y);p.x=te,p.y=ve,p.slackX=this.state.slackX+(K-p.x),p.slackY=this.state.slackY+(q-p.y),D.x=p.x,D.y=p.y,D.deltaX=p.x-this.state.x,D.deltaY=p.y-this.state.y}if(this.props.onDrag(g,D)===!1)return!1;this.setState(p)}),$(this,"onDragStop",(g,u)=>{if(!this.state.dragging||this.props.onStop(g,(0,s.createDraggableData)(this,u))===!1)return!1;(0,v.default)("Draggable: onDragStop: %j",u);const p={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:K,y:q}=this.props.position;p.x=K,p.y=q}this.setState(p)}),this.state={dragging:!1,dragged:!1,x:d.position?d.position.x:d.defaultPosition.x,y:d.position?d.position.y:d.defaultPosition.y,prevPropsPosition:{...d.position},slackX:0,slackY:0,isElementSVG:!1},d.position&&!(d.onDrag||d.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var d,g;return(d=(g=this.props)===null||g===void 0||(g=g.nodeRef)===null||g===void 0?void 0:g.current)!==null&&d!==void 0?d:i.default.findDOMNode(this)}render(){const{axis:d,bounds:g,children:u,defaultPosition:D,defaultClassName:p,defaultClassNameDragging:_,defaultClassNameDragged:K,position:q,positionOffset:te,scale:ve,...He}=this.props;let De={},ye=null;const be=!!!q||this.state.dragging,Se=q||D,je={x:(0,s.canDragX)(this)&&be?this.state.x:Se.x,y:(0,s.canDragY)(this)&&be?this.state.y:Se.y};this.state.isElementSVG?ye=(0,r.createSVGTransform)(je,te):De=(0,r.createCSSTransform)(je,te);const Ke=(0,a.default)(u.props.className||"",p,{[_]:this.state.dragging,[K]:this.state.dragged});return t.createElement(h.default,E({},He,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(u),{className:Ke,style:{...u.props.style,...De},transform:ye}))}}e.default=ee,$(ee,"displayName","Draggable"),$(ee,"propTypes",{...h.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),$(ee,"defaultProps",{...h.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Ne);const{default:$e,DraggableCore:Sn}=Ne;re.exports=$e;re.exports.default=$e;re.exports.DraggableCore=Sn;var jn=re.exports;const Tn=mt(jn),wn=x.forwardRef((e,t)=>n.jsx(Tn,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:n.jsx(ft,{ref:t,...e})}));function kn(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open draggable dialog"}),n.jsx(O,{open:e,onClose:i,PaperComponent:wn,"aria-labelledby":"draggable-dialog-title",children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(P,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Subscribe"}),n.jsxs(L,{children:[n.jsx(H,{sx:{mb:2},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),n.jsx(Oe,{id:"name",placeholder:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})]}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:i,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:i,children:"Subscribe"})]})]})})]})}function Bn(){const[e,t]=x.useState(!1),[o,i]=x.useState("paper"),a=l=>()=>{t(!0),i(l)},r=()=>{t(!1)},s=x.useRef(null);return x.useEffect(()=>{if(e){const{current:l}=s;l!==null&&l.focus()}},[e]),n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:a("paper"),sx:{mr:1,ml:1,mb:1,mt:1},children:"scroll=paper"}),n.jsx(m,{variant:"outlined",onClick:a("body"),sx:{mr:1,ml:1,mb:1,mt:1},children:"scroll=body"}),n.jsxs(O,{open:e,onClose:r,scroll:o,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[n.jsxs(f,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",children:[n.jsx(f,{item:!0,children:n.jsx(P,{children:"Subscribe"})}),n.jsx(f,{item:!0,sx:{mr:1.5},children:n.jsx(ae,{color:"secondary",onClick:r,children:n.jsx(Z,{style:{transform:"rotate(45deg)"}})})})]}),n.jsx(L,{dividers:!0,children:n.jsx(f,{container:!0,spacing:1.25,children:[...new Array(25)].map((l,h)=>n.jsx(f,{item:!0,children:n.jsx(U,{variant:"h6",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})},`${h}-${o}`))})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:r,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:r,sx:{mr:1},children:"Subscribe"})]})]})]})}const On=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis"];function qe({onClose:e,value:t,open:o,...i}){const a=pe(),r=Me(a.breakpoints.down("md")),[s,l]=x.useState(t),h=x.useRef(null);x.useEffect(()=>{o||l(t)},[t,o]);const v=()=>{h.current!=null&&h.current.focus()},y=()=>{e()},J=()=>{e(s)},de=E=>{l(E.target.value)};return n.jsxs(O,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:r?"sm":"lg",TransitionProps:{onEntering:v},open:o,...i,children:[n.jsx(P,{children:"Phone Ringtone"}),n.jsx(L,{dividers:!0,children:n.jsx(xt,{row:!r,ref:h,"aria-label":"ringtone",name:"ringtone",value:s,onChange:de,children:On.map(E=>n.jsx(Ct,{value:E,control:n.jsx(vt,{}),label:E},E))})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:y,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:J,sx:{mr:.5},children:"Done"})]})]})}function Mn(){const[e,t]=x.useState(!1),[o,i]=x.useState("Hangouts Call"),a=()=>{t(!0)},r=s=>{t(!1),s&&i(s)};return n.jsx(Y,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:n.jsxs(me,{role:"group",children:[n.jsx(F,{divider:!0,disabled:!0,children:n.jsx(R,{primary:"Interruptions"})}),n.jsx(F,{divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:a,children:n.jsx(R,{primary:"Phone Ringtone",secondary:o})}),n.jsx(F,{divider:!0,disabled:!0,children:n.jsx(R,{primary:"Default Notification Ringtone",secondary:"Tethys"})}),n.jsx(qe,{id:"ringtone-menu",keepMounted:!0,open:e,onClose:r,value:o})]})})}qe.propTypes={onClose:M.func,value:M.string,open:M.bool,other:M.any};function Wn(){return n.jsxs(Dt,{children:[n.jsx(yt,{title:"Dialog",caption:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",directory:"src/pages/components-overview/dialogs",link:"https://mui.com/material-ui/react-dialog/"}),n.jsx(bt,{sx:{"& .MuiCardContent-root":{textAlign:"center"}},children:n.jsxs(f,{container:!0,spacing:3,children:[n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Basic",codeString:`// SimpleDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open simple dialog
</Button>
<Dialog onClose={handleClose} open={open}>
  <Grid
    container
    spacing={2}
    justifyContent="space-between"
    alignItems="center"
    sx={{ borderBottom: '1px solid {theme.palette.divider}' }}
  >
    <Grid item>
      <DialogTitle>Set backup account</DialogTitle>
    </Grid>
    <Grid item sx={{ mr: 1.5 }}>
      <IconButton color="secondary" onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  </Grid>

  <List sx={{ p: 2.5 }}>
  {emails.map((email, index) => (
    <ListItemButton onClick={() => handleListItemClick(email)} key={email} selected={selectedValue === email} sx={{ p: 1.25 }}>
      <ListItemAvatar>
        <Avatar src={'/src/assets/images/users/avatar-{index + 1}.png'} />
      </ListItemAvatar>
      <ListItemText primary={email} />
    </ListItemButton>
  ))}
  <ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')} sx={{ p: 1.25 }}>
    <ListItemAvatar>
      <Avatar sx={{ bgcolor: 'primary.lighter', color: 'primary.main', width: 32, height: 32 }}>
        <Add style={{ fontSize: '0.625rem' }} />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Add Account" />
  </ListItemButton>
</List>
</Dialog>`,children:n.jsx(Tt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Alert",codeString:`// AlertDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open alert dialog
</Button>
<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
<Box sx={{ p: 1, py: 1.5 }}>
  <DialogTitle id="alert-dialog-title">Use Google&apos;s location service?</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button color="error" onClick={handleClose}>
      Disagree
    </Button>
    <Button variant="contained" onClick={handleClose} autoFocus>
      Agree
    </Button>
  </DialogActions>
</Box>
</Dialog>`,children:n.jsx(Mt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Form",codeString:`// FormDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open form dialog
</Button>
<Dialog open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(Pt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Transitions",codeString:` // TransitionsDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Slide in dialog
</Button>
<Dialog
  open={open}
  TransitionComponent={Transition}
  keepMounted
  onClose={handleClose}
  aria-describedby="alert-dialog-slide-description"
>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Use Google&apos;ss location service?</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Disagree
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Agree
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(It,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Customized",codeString:`// CustomizedDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open dialog
</Button>
<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
    Modal Title
  </BootstrapDialogTitle>
  <DialogContent dividers sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
      porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
      sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
      odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button variant="contained" autoFocus onClick={handleClose}>
      Save changes
    </Button>
  </DialogActions>
</BootstrapDialog>`,children:n.jsx(Et,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Full Screen",codeString:`// FullScreenDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open full-screen dialog
</Button>
<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
  <AppBar sx={{ position: 'relative' }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
        <CloseOutlined />
      </IconButton>
      <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
        Set Backup Account
      </Typography>
      <Button autoFocus color="inherit" onClick={handleClose}>
        save
      </Button>
    </Toolbar>
  </AppBar>
  <List sx={{ p: 3 }}>
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={avatarImage('./avatar-1.png')} />
      </ListItemAvatar>
      <ListItemText primary="Phone ringtone" secondary="Default" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={avatarImage('./avatar-2.png')} />
      </ListItemAvatar>
      <ListItemText primary="Default notification ringtone" secondary="Tethys" />
    </ListItem>
  </List>
</Dialog>`,children:n.jsx(Nt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Sizes",codeString:`// SizesDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open max-width dialog
</Button>
<Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Optional sizes</DialogTitle>
    <DialogContent>
      <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
      <Grid container spacing={1.5} alignItems="center" sx={{ mt: 1 }}>
        <Grid item>
          <Typography variant="h6">Max Width :</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              autoFocus
              value={maxWidth}
              onChange={handleMaxWidthChange}
              inputProps={{
                name: 'max-width',
                id: 'max-width'
              }}
            >
              <MenuItem value={false as any}>false</MenuItem>
              <MenuItem value="xs">xs</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={1.5} alignItems="center" sx={{ mt: 0.25 }}>
        <Grid item>
          <Typography variant="h6">Full Width:</Typography>
        </Grid>
        <Grid item>
          <Switch checked={fullWidth} onChange={handleFullWidthChange} />
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button variant="outlined" color="error" onClick={handleClose}>
        Close
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(_t,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Responsive",codeString:`// ResponsiveDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open responsive dialog
</Button>
<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle id="responsive-dialog-title">Use Google&apos;s location service?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Disagree
      </Button>
      <Button variant="contained" onClick={handleClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(Gt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Draggable",codeString:`// DraggableDialog
<Button variant="contained" onClick={handleClickOpen}>
  Open draggable dialog
</Button>
<Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title">
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
      Subscribe
    </DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(kn,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Scrolling",codeString:`// ScrollDialog.tsx
<Button variant="contained" onClick={handleClickOpen('paper')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
  scroll=paper
</Button>
<Button variant="outlined" onClick={handleClickOpen('body')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
  scroll=body
</Button>
<Dialog
  open={open}
  onClose={handleClose}
  scroll={scroll}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
>
  <Grid container spacing={2} justifyContent="space-between" alignItems="center">
    <Grid item>
      <DialogTitle>Subscribe</DialogTitle>
    </Grid>
    <Grid item sx={{ mr: 1.5 }}>
      <IconButton color="secondary" onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  </Grid>
  <DialogContent dividers>
    <Grid container spacing={1.25}>
      {[...new Array(25)].map((i, index) => (
        <Grid item key={'{index}-{scroll}'}>
          <Typography variant="h6">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </Typography>
        </Grid>
      ))}
    </Grid>
  </DialogContent>
  <DialogActions>
    <Button color="error" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
      Subscribe
    </Button>
  </DialogActions>
</Dialog>`,children:n.jsx(Bn,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(k,{title:"Confirmation",codeString:`// ConfirmationDialog.tsx
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <List role="group">
    <ListItem button divider disabled>
      <ListItemText primary="Interruptions" />
    </ListItem>
    <ListItem
      button
      divider
      aria-haspopup="true"
      aria-controls="ringtone-menu"
      aria-label="phone ringtone"
      onClick={handleClickListItem}
    >
      <ListItemText primary="Phone Ringtone" secondary={value} />
    </ListItem>
    <ListItem button divider disabled>
      <ListItemText primary="Default Notification Ringtone" secondary="Tethys" />
    </ListItem>
    <ConfirmationDialogRaw id="ringtone-menu" keepMounted open={open} onClose={handleClose} value={value} />
  </List>
</Box>
<Dialog
  sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
  maxWidth={matchDownMD ? 'sm' : 'lg'}
  TransitionProps={{ onEntering: handleEntering }}
  open={open}
  {...other}
>
  <DialogTitle>Phone Ringtone</DialogTitle>
  <DialogContent dividers>
    <RadioGroup row={!matchDownMD} ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
      {options.map((option) => (
        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  </DialogContent>
  <DialogActions>
    <Button color="error" autoFocus onClick={handleCancel}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleOk} sx={{ mr: 0.5 }}>
      Done
    </Button>
  </DialogActions>
</Dialog>`,children:n.jsx(Mn,{})})})]})})]})}export{Wn as default};
