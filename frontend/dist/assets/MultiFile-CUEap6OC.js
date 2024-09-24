import{cN as L,cO as M,cP as Ne,cQ as We,P as c,r as f,a5 as Or,j as l,a1 as Er,h as Fr,B as be,T as ee,bb as E,S as W,g as Cr,aH as Tr,af as _r,I as He,bt as Ue,Z as Rr,d as ye,aO as Sr}from"./index-BE75cmpZ.js";import{L as Ye}from"./ListItem-eemVPKEi.js";import{D as Ge}from"./Document-B8_fGyzr.js";var Pr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function U(e,r){var t=Ir(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Ir(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),o=Pr.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var kr=[".DS_Store","Thumbs.db"];function zr(e){return L(this,void 0,void 0,function(){return M(this,function(r){return re(e)&&Lr(e.dataTransfer)?[2,Kr(e.dataTransfer,e.type)]:Mr(e)?[2,$r(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Br(e)]:[2,[]]})})}function Lr(e){return re(e)}function Mr(e){return re(e)&&re(e.target)}function re(e){return typeof e=="object"&&e!==null}function $r(e){return De(e.target.files).map(function(r){return U(r)})}function Br(e){return L(this,void 0,void 0,function(){var r;return M(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return U(n)})]}})})}function Kr(e,r){return L(this,void 0,void 0,function(){var t,n;return M(this,function(o){switch(o.label){case 0:return e.items?(t=De(e.items).filter(function(a){return a.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Nr))]):[3,2];case 1:return n=o.sent(),[2,qe(or(n))];case 2:return[2,qe(De(e.files).map(function(a){return U(a)}))]}})})}function qe(e){return e.filter(function(r){return kr.indexOf(r.name)===-1})}function De(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Nr(e){if(typeof e.webkitGetAsEntry!="function")return Je(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?ir(r):Je(e)}function or(e){return e.reduce(function(r,t){return Ne(Ne([],We(r),!1),We(Array.isArray(t)?or(t):[t]),!1)},[])}function Je(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=U(r);return Promise.resolve(t)}function Wr(e){return L(this,void 0,void 0,function(){return M(this,function(r){return[2,e.isDirectory?ir(e):Hr(e)]})})}function ir(e){var r=e.createReader();return new Promise(function(t,n){var o=[];function a(){var u=this;r.readEntries(function(p){return L(u,void 0,void 0,function(){var g,w,j;return M(this,function(v){switch(v.label){case 0:if(p.length)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=v.sent(),t(g),[3,4];case 3:return w=v.sent(),n(w),[3,4];case 4:return[3,6];case 5:j=Promise.all(p.map(Wr)),o.push(j),a(),v.label=6;case 6:return[2]}})})},function(p){n(p)})}a()})}function Hr(e){return L(this,void 0,void 0,function(){return M(this,function(r){return[2,new Promise(function(t,n){e.file(function(o){var a=U(o,e.fullPath);t(a)},function(o){n(o)})})]})})}var Ur=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),a=o.replace(/\/.*$/,"");return t.some(function(u){var p=u.trim().toLowerCase();return p.charAt(0)==="."?n.toLowerCase().endsWith(p):p.endsWith("/*")?a===p.replace(/\/.*$/,""):o===p})}return!0};function Qe(e){return qr(e)||Gr(e)||sr(e)||Yr()}function Yr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qr(e){if(Array.isArray(e))return xe(e)}function Xe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function Ze(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Xe(Object(t),!0).forEach(function(n){ar(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ar(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e,r){return Xr(e)||Qr(e,r)||sr(e,r)||Jr()}function Jr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sr(e,r){if(e){if(typeof e=="string")return xe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xe(e,r)}}function xe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Qr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,u,p;try{for(t=t.call(e);!(o=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));o=!0);}catch(g){a=!0,p=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw p}}return n}}function Xr(e){if(Array.isArray(e))return e}var Zr="file-invalid-type",Vr="file-too-large",et="file-too-small",rt="too-many-files",tt=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Zr,message:"File type must be ".concat(t)}},Ve=function(r){return{code:Vr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},er=function(r){return{code:et,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},nt={code:rt,message:"Too many files"};function cr(e,r){var t=e.type==="application/x-moz-file"||Ur(e,r);return[t,t?null:tt(r)]}function ur(e,r,t){if(S(e.size))if(S(r)&&S(t)){if(e.size>t)return[!1,Ve(t)];if(e.size<r)return[!1,er(r)]}else{if(S(r)&&e.size<r)return[!1,er(r)];if(S(t)&&e.size>t)return[!1,Ve(t)]}return[!0,null]}function S(e){return e!=null}function ot(e){var r=e.files,t=e.accept,n=e.minSize,o=e.maxSize,a=e.multiple,u=e.maxFiles,p=e.validator;return!a&&r.length>1||a&&u>=1&&r.length>u?!1:r.every(function(g){var w=cr(g,t),j=H(w,1),v=j[0],h=ur(g,n,o),T=H(h,1),F=T[0],D=p?p(g):null;return v&&F&&!D})}function te(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function V(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function rr(e){e.preventDefault()}function it(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function at(e){return e.indexOf("Edge/")!==-1}function st(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return it(e)||at(e)}function C(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return r.some(function(p){return!te(n)&&p&&p.apply(void 0,[n].concat(a)),te(n)})}}function ct(){return"showOpenFilePicker"in window}function ut(e){if(S(e)){var r=Object.entries(e).filter(function(t){var n=H(t,2),o=n[0],a=n[1],u=!0;return lr(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),u=!1),(!Array.isArray(a)||!a.every(pr))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),u=!1),u}).reduce(function(t,n){var o=H(n,2),a=o[0],u=o[1];return Ze(Ze({},t),{},ar({},a,u))},{});return[{description:"Files",accept:r}]}return e}function lt(e){if(S(e))return Object.entries(e).reduce(function(r,t){var n=H(t,2),o=n[0],a=n[1];return[].concat(Qe(r),[o],Qe(a))},[]).filter(function(r){return lr(r)||pr(r)}).join(",")}function pt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function ft(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function lr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function pr(e){return/^.*\.[\w]+$/.test(e)}var dt=["children"],gt=["open"],mt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],vt=["refKey","onChange","onClick"];function yt(e){return Dt(e)||bt(e)||fr(e)||ht()}function ht(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dt(e){if(Array.isArray(e))return Ae(e)}function he(e,r){return wt(e)||At(e,r)||fr(e,r)||xt()}function xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fr(e,r){if(e){if(typeof e=="string")return Ae(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ae(e,r)}}function Ae(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function At(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,u,p;try{for(t=t.call(e);!(o=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));o=!0);}catch(g){a=!0,p=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw p}}return n}}function wt(e){if(Array.isArray(e))return e}function tr(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?tr(Object(t),!0).forEach(function(n){we(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tr(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function we(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ne(e,r){if(e==null)return{};var t=jt(e,r),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function jt(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Oe=f.forwardRef(function(e,r){var t=e.children,n=ne(e,dt),o=gr(n),a=o.open,u=ne(o,gt);return f.useImperativeHandle(r,function(){return{open:a}},[a]),Or.createElement(f.Fragment,null,t(d(d({},u),{},{open:a})))});Oe.displayName="Dropzone";var dr={disabled:!1,getFilesFromEvent:zr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Oe.defaultProps=dr;Oe.propTypes={children:c.func,accept:c.objectOf(c.arrayOf(c.string)),multiple:c.bool,preventDropOnDocument:c.bool,noClick:c.bool,noKeyboard:c.bool,noDrag:c.bool,noDragEventsBubbling:c.bool,minSize:c.number,maxSize:c.number,maxFiles:c.number,disabled:c.bool,getFilesFromEvent:c.func,onFileDialogCancel:c.func,onFileDialogOpen:c.func,useFsAccessApi:c.bool,autoFocus:c.bool,onDragEnter:c.func,onDragLeave:c.func,onDragOver:c.func,onDrop:c.func,onDropAccepted:c.func,onDropRejected:c.func,onError:c.func,validator:c.func};var je={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function gr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=d(d({},dr),e),t=r.accept,n=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,u=r.minSize,p=r.multiple,g=r.maxFiles,w=r.onDragEnter,j=r.onDragLeave,v=r.onDragOver,h=r.onDrop,T=r.onDropAccepted,F=r.onDropRejected,D=r.onFileDialogCancel,$=r.onFileDialogOpen,Ee=r.useFsAccessApi,Fe=r.autoFocus,oe=r.preventDropOnDocument,Ce=r.noClick,ie=r.noKeyboard,Te=r.noDrag,_=r.noDragEventsBubbling,ae=r.onError,B=r.validator,K=f.useMemo(function(){return lt(t)},[t]),_e=f.useMemo(function(){return ut(t)},[t]),se=f.useMemo(function(){return typeof $=="function"?$:nr},[$]),Y=f.useMemo(function(){return typeof D=="function"?D:nr},[D]),b=f.useRef(null),O=f.useRef(null),br=f.useReducer(Ot,je),Re=he(br,2),ce=Re[0],x=Re[1],Dr=ce.isFocused,Se=ce.isFileDialogActive,G=f.useRef(typeof window<"u"&&window.isSecureContext&&Ee&&ct()),Pe=function(){!G.current&&Se&&setTimeout(function(){if(O.current){var s=O.current.files;s.length||(x({type:"closeDialog"}),Y())}},300)};f.useEffect(function(){return window.addEventListener("focus",Pe,!1),function(){window.removeEventListener("focus",Pe,!1)}},[O,Se,Y,G]);var P=f.useRef([]),Ie=function(s){b.current&&b.current.contains(s.target)||(s.preventDefault(),P.current=[])};f.useEffect(function(){return oe&&(document.addEventListener("dragover",rr,!1),document.addEventListener("drop",Ie,!1)),function(){oe&&(document.removeEventListener("dragover",rr),document.removeEventListener("drop",Ie))}},[b,oe]),f.useEffect(function(){return!n&&Fe&&b.current&&b.current.focus(),function(){}},[b,Fe,n]);var R=f.useCallback(function(i){ae?ae(i):console.error(i)},[ae]),ke=f.useCallback(function(i){i.preventDefault(),i.persist(),X(i),P.current=[].concat(yt(P.current),[i.target]),V(i)&&Promise.resolve(o(i)).then(function(s){if(!(te(i)&&!_)){var m=s.length,y=m>0&&ot({files:s,accept:K,minSize:u,maxSize:a,multiple:p,maxFiles:g,validator:B}),A=m>0&&!y;x({isDragAccept:y,isDragReject:A,isDragActive:!0,type:"setDraggedFiles"}),w&&w(i)}}).catch(function(s){return R(s)})},[o,w,R,_,K,u,a,p,g,B]),ze=f.useCallback(function(i){i.preventDefault(),i.persist(),X(i);var s=V(i);if(s&&i.dataTransfer)try{i.dataTransfer.dropEffect="copy"}catch{}return s&&v&&v(i),!1},[v,_]),Le=f.useCallback(function(i){i.preventDefault(),i.persist(),X(i);var s=P.current.filter(function(y){return b.current&&b.current.contains(y)}),m=s.indexOf(i.target);m!==-1&&s.splice(m,1),P.current=s,!(s.length>0)&&(x({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),V(i)&&j&&j(i))},[b,j,_]),q=f.useCallback(function(i,s){var m=[],y=[];i.forEach(function(A){var N=cr(A,K),z=he(N,2),le=z[0],pe=z[1],fe=ur(A,u,a),Z=he(fe,2),de=Z[0],ge=Z[1],me=B?B(A):null;if(le&&de&&!me)m.push(A);else{var ve=[pe,ge];me&&(ve=ve.concat(me)),y.push({file:A,errors:ve.filter(function(jr){return jr})})}}),(!p&&m.length>1||p&&g>=1&&m.length>g)&&(m.forEach(function(A){y.push({file:A,errors:[nt]})}),m.splice(0)),x({acceptedFiles:m,fileRejections:y,type:"setFiles"}),h&&h(m,y,s),y.length>0&&F&&F(y,s),m.length>0&&T&&T(m,s)},[x,p,K,u,a,g,h,T,F,B]),J=f.useCallback(function(i){i.preventDefault(),i.persist(),X(i),P.current=[],V(i)&&Promise.resolve(o(i)).then(function(s){te(i)&&!_||q(s,i)}).catch(function(s){return R(s)}),x({type:"reset"})},[o,q,R,_]),I=f.useCallback(function(){if(G.current){x({type:"openDialog"}),se();var i={multiple:p,types:_e};window.showOpenFilePicker(i).then(function(s){return o(s)}).then(function(s){q(s,null),x({type:"closeDialog"})}).catch(function(s){pt(s)?(Y(s),x({type:"closeDialog"})):ft(s)?(G.current=!1,O.current?(O.current.value=null,O.current.click()):R(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):R(s)});return}O.current&&(x({type:"openDialog"}),se(),O.current.value=null,O.current.click())},[x,se,Y,Ee,q,R,_e,p]),Me=f.useCallback(function(i){!b.current||!b.current.isEqualNode(i.target)||(i.key===" "||i.key==="Enter"||i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),I())},[b,I]),$e=f.useCallback(function(){x({type:"focus"})},[]),Be=f.useCallback(function(){x({type:"blur"})},[]),Ke=f.useCallback(function(){Ce||(st()?setTimeout(I,0):I())},[Ce,I]),k=function(s){return n?null:s},ue=function(s){return ie?null:k(s)},Q=function(s){return Te?null:k(s)},X=function(s){_&&s.stopPropagation()},xr=f.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.refKey,m=s===void 0?"ref":s,y=i.role,A=i.onKeyDown,N=i.onFocus,z=i.onBlur,le=i.onClick,pe=i.onDragEnter,fe=i.onDragOver,Z=i.onDragLeave,de=i.onDrop,ge=ne(i,mt);return d(d(we({onKeyDown:ue(C(A,Me)),onFocus:ue(C(N,$e)),onBlur:ue(C(z,Be)),onClick:k(C(le,Ke)),onDragEnter:Q(C(pe,ke)),onDragOver:Q(C(fe,ze)),onDragLeave:Q(C(Z,Le)),onDrop:Q(C(de,J)),role:typeof y=="string"&&y!==""?y:"presentation"},m,b),!n&&!ie?{tabIndex:0}:{}),ge)}},[b,Me,$e,Be,Ke,ke,ze,Le,J,ie,Te,n]),Ar=f.useCallback(function(i){i.stopPropagation()},[]),wr=f.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.refKey,m=s===void 0?"ref":s,y=i.onChange,A=i.onClick,N=ne(i,vt),z=we({accept:K,multiple:p,type:"file",style:{display:"none"},onChange:k(C(y,J)),onClick:k(C(A,Ar)),tabIndex:-1},m,O);return d(d({},z),N)}},[O,t,p,J,n]);return d(d({},ce),{},{isFocused:Dr&&!n,getRootProps:xr,getInputProps:wr,rootRef:b,inputRef:O,open:k(I)})}function Ot(e,r){switch(r.type){case"focus":return d(d({},e),{},{isFocused:!0});case"blur":return d(d({},e),{},{isFocused:!1});case"openDialog":return d(d({},je),{},{isFileDialogActive:!0});case"closeDialog":return d(d({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return d(d({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return d(d({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return d({},je);default:return e}}function nr(){}function mr(e,r){return typeof e=="string"?{key:r?`${e}-${r}`:e,preview:e}:{key:r?`${e.name}-${r}`:e.name,name:e.name,size:e.size,path:e.path,type:e.type,preview:e.preview,lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate}}function vr({fileRejections:e}){return l.jsx(Er,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:r=>Fr(r.palette.error.main,.08)},children:e.map(({file:r,errors:t})=>{const{path:n,size:o}=mr(r);return l.jsxs(be,{sx:{my:1},children:[l.jsxs(ee,{variant:"subtitle2",noWrap:!0,children:[n," - ",o||""]}),t.map(a=>l.jsx(be,{component:"li",sx:{typography:"caption"},children:a.message},a.code))]},n)})})}vr.propTypes={fileRejections:c.array};const Et="/assets/upload-DIXWsuDa.svg";function yr({type:e}){return l.jsxs(l.Fragment,{children:[e!==E.STANDARD&&l.jsxs(W,{spacing:2,alignItems:"center",justifyContent:"center",direction:{xs:"column",md:"row"},sx:{width:1,textAlign:{xs:"center",md:"left"}},children:[l.jsx(Cr,{component:"img",image:Et,sx:{width:150}}),l.jsxs(W,{sx:{p:3},spacing:1,children:[l.jsx(ee,{variant:"h5",children:"Drag & Drop or Select file"}),l.jsxs(ee,{color:"secondary",children:["Drop files here or click ",l.jsx(ee,{component:"span",color:"primary",sx:{textDecoration:"underline"},children:"browse"})," thorough your machine"]})]})]}),e===E.STANDARD&&l.jsx(W,{alignItems:"center",justifyContent:"center",sx:{height:1},children:l.jsx(Tr,{style:{fontSize:"32px"}})})]})}yr.propTypes={type:c.any};function hr({showList:e=!1,files:r,onRemove:t,type:n}){const o=r.length>0,a=n;return l.jsx(_r,{disablePadding:!0,sx:{...o&&n!==E.STANDARD&&{my:3},...n===E.STANDARD&&{width:"calc(100% - 84px)"}},children:r.map((u,p)=>{const{key:g,name:w,size:j,preview:v,type:h}=mr(u,p);return e?l.jsxs(Ye,{sx:{p:0,m:.5,width:a===E.STANDARD?64:80,height:a===E.STANDARD?64:80,borderRadius:1.25,position:"relative",display:"inline-flex",verticalAlign:"text-top",border:"1px solid",borderColor:"divider",overflow:"hidden"},children:[(h==null?void 0:h.includes("image"))&&l.jsx("img",{alt:"preview",src:v,style:{width:"100%"}}),!(h!=null&&h.includes("image"))&&l.jsx(Ge,{variant:"Bold",style:{width:"100%",fontSize:"1.5rem"}}),t&&l.jsx(He,{size:"small",color:"error",shape:"rounded",onClick:()=>t(u),sx:{fontSize:"0.875rem",bgcolor:"background.paper",p:0,width:"auto",height:"auto",top:2,right:2,position:"absolute"},children:l.jsx(Ue,{variant:"Bold"})})]},g):l.jsxs(Ye,{sx:{my:1,px:2,py:.75,borderRadius:.75,border:" 1px solid",borderColor:"divider"},children:[l.jsx(Ge,{variant:"Bold",style:{width:"30px",height:"30px",fontSize:"1.15rem",marginRight:4}}),l.jsx(Rr,{primary:typeof u=="string"?u:w,secondary:typeof u=="string"?"":j,primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),t&&l.jsx(He,{edge:"end",size:"small",onClick:()=>t(u),children:l.jsx(Ue,{variant:"Bold",style:{fontSize:"1.15rem"}})})]},g)})})}hr.propTypes={showList:c.bool,files:c.any,onRemove:c.any,type:c.any};const Ft=Sr("div")(({theme:e})=>({outline:"none",padding:e.spacing(5,1),borderRadius:e.shape.borderRadius,backgroundColor:e.palette.background.paper,border:"1px dashed ",borderColor:e.palette.secondary.main,"&:hover":{opacity:.72,cursor:"pointer"}}));function Ct({error:e,showList:r=!1,files:t,type:n,setFieldValue:o,sx:a,onUpload:u}){const{getRootProps:p,getInputProps:g,isDragActive:w,isDragReject:j,fileRejections:v}=gr({multiple:!0,onDrop:F=>{t?o("files",[...t,...F.map(D=>Object.assign(D,{preview:URL.createObjectURL(D)}))]):o("files",F.map(D=>Object.assign(D,{preview:URL.createObjectURL(D)})))}}),h=()=>{o("files",null)},T=F=>{const D=t&&t.filter($=>$!==F);o("files",D)};return l.jsxs(l.Fragment,{children:[l.jsxs(be,{sx:{width:"100%",...n===E.STANDARD&&{width:"auto",display:"flex"},...a},children:[l.jsxs(W,{...n===E.STANDARD&&{alignItems:"center"},children:[l.jsxs(Ft,{...p(),sx:{...n===E.STANDARD&&{p:0,m:1,width:64,height:64},...w&&{opacity:.72},...(j||e)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}},children:[l.jsx("input",{...g()}),l.jsx(yr,{type:n})]}),n===E.STANDARD&&t&&t.length>1&&l.jsx(ye,{variant:"contained",color:"error",size:"extraSmall",onClick:h,children:"Remove all"})]}),v.length>0&&l.jsx(vr,{fileRejections:v}),t&&t.length>0&&l.jsx(hr,{files:t,showList:r,onRemove:T,type:n})]}),n!==E.STANDARD&&t&&t.length>0&&l.jsxs(W,{direction:"row",justifyContent:"flex-end",spacing:1.5,sx:{mt:1.5},children:[l.jsx(ye,{color:"inherit",size:"small",onClick:h,children:"Remove all"}),l.jsx(ye,{size:"small",variant:"contained",onClick:u,children:"Upload files"})]})]})}Ct.propTypes={error:c.any,showList:c.bool,files:c.any,type:c.any,setFieldValue:c.any,sx:c.any,onUpload:c.any};export{Ct as M,yr as P,vr as R,gr as u};
