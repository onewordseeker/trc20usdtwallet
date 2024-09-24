import{bp as x,a7 as p,j as e,bq as f,aW as j,aX as b,aP as g,G as t,S as v,J as k,X as y,b4 as o,T as A,A as P,d as w}from"./index-BE75cmpZ.js";import{u as E}from"./useScriptRef-IHXzUKmT.js";function B(){const c=E(),m=x(),{isLoggedIn:u,resetPassword:d}=p();return e.jsx(e.Fragment,{children:e.jsx(f,{initialValues:{email:"",submit:null},validationSchema:j().shape({email:b().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:async(a,{setErrors:l,setStatus:i,setSubmitting:r})=>{try{await d(a.email).then(()=>{i({success:!0}),r(!1),g({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"}}),setTimeout(()=>{m(u?"/auth/check-mail":"/check-mail",{replace:!0})},1500)},s=>{i({success:!1}),l({submit:s.message}),r(!1)})}catch(s){console.error(s),c.current&&(i({success:!1}),l({submit:s.message}),r(!1))}},children:({errors:a,handleBlur:l,handleChange:i,handleSubmit:r,isSubmitting:s,touched:n,values:h})=>e.jsx("form",{noValidate:!0,onSubmit:r,children:e.jsxs(t,{container:!0,spacing:3,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsxs(v,{spacing:1,children:[e.jsx(k,{htmlFor:"email-forgot",children:"Email Address"}),e.jsx(y,{fullWidth:!0,error:!!(n.email&&a.email),id:"email-forgot",type:"email",value:h.email,name:"email",onBlur:l,onChange:i,placeholder:"Enter email address",inputProps:{}})]}),n.email&&a.email&&e.jsx(o,{error:!0,id:"helper-text-email-forgot",children:a.email})]}),a.submit&&e.jsx(t,{item:!0,xs:12,children:e.jsx(o,{error:!0,children:a.submit})}),e.jsx(t,{item:!0,xs:12,sx:{mb:-2},children:e.jsx(A,{variant:"caption",children:"Do not forgot to check SPAM box."})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(P,{children:e.jsx(w,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Send Password Reset Email"})})})]})})})})}export{B as A};
