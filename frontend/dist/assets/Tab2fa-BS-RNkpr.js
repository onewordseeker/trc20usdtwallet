import{r as s,a7 as Q,j as e,M as R,G as r,B as i,a2 as k,J as x,S as h,X as E,d as F,aP as p}from"./index-BE75cmpZ.js";import{Q as U}from"./index-CH9N1YFA.js";import{e as T,t as B}from"./Users-4Bn6yUGa.js";function L(){const[d,g]=s.useState(""),{updateProfile:m,user:t}=Q(),[n,u]=s.useState(t==null?void 0:t.twofa),[f,j]=s.useState(""),[C,w]=s.useState(""),[o,S]=s.useState(!1),[b,y]=s.useState(!0),[l,v]=s.useState(!1);s.useEffect(()=>{console.log(t),t!=null&&t.twofa?u(1):A()},[]),s.useEffect(()=>{y(!b)},[o]);const A=async()=>{const a=await T();w(a.secret),j(a.qrCodeUrl)},I=async()=>{if((await B({token:d,secret:C,enable:n})).isValid){let c=t;c.twofa=n?1:0,console.log(c),m(c),v(!0),setTimeout(()=>{window.location.reload()},500),p({open:!0,message:"2FA is "+n?"enabled":"disabled",variant:"alert",alert:{color:"success"}})}else p({open:!0,message:"Invalid or expired code",variant:"alert",alert:{color:"error"}})};return e.jsx(R,{title:"Change Password",children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,container:!0,spacing:3,xs:12,sm:12,children:e.jsxs(r,{item:!0,xs:12,children:[e.jsxs(i,{sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"},xs:12,children:[e.jsx(k,{onChange:a=>{S(!o),u(a.target.checked?1:0)},value:n,defaultChecked:n}),e.jsxs(x,{children:[n?"Enable":"Disable"," Two Factor Authentication"]})]}),!(t!=null&&t.twofa)&&o?e.jsx(i,{sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:3},children:e.jsx(i,{sx:{borderRadius:1,display:"flex",alignItems:"center",justifyContent:"center",width:"fit-content"},children:!l&&!(t!=null&&t.twofa)&&f&&e.jsx(U,{level:"L",fgColor:"#3b82f6",bgColor:"#fff",size:256,value:f})})}):null,!l&&o?e.jsxs(h,{spacing:1,children:[e.jsx(x,{htmlFor:"code",children:"Two Factor Authenticator Code"}),e.jsx(E,{placeholder:"Authenticator Code",id:"code",type:"text",value:d,name:"code",onChange:a=>g(a.target.value),autoComplete:"code"})]}):null]})}),e.jsx(r,{item:!0,xs:12,children:!l&&o?e.jsx(h,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,children:e.jsx(F,{disabled:!o,onClick:I,type:"submit",variant:"contained",children:"Save"})}):null})]})})}export{L as default};
