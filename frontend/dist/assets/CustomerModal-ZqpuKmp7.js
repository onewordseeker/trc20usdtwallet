import{bk as c,r as i,j as e,bn as d,o as m,M as x,al as u,B as p,S as h,aJ as j,P as s}from"./index-BE75cmpZ.js";function b({open:a,modalToggler:l,customer:r}){const{customersLoading:o}=c(),t=()=>l(!1),n=i.useMemo(()=>!o&&e.jsx(d,{customer:r||null,closeModal:t}),[r,o]);return e.jsx(e.Fragment,{children:a&&e.jsx(m,{open:a,onClose:t,"aria-labelledby":"modal-customer-add-label","aria-describedby":"modal-customer-add-description",sx:{"& .MuiPaper-root:focus":{outline:"none"}},children:e.jsx(x,{sx:{width:"calc(100% - 48px)",minWidth:340,maxWidth:880,height:"auto",maxHeight:"calc(100vh - 48px)"},modal:!0,content:!1,children:e.jsx(u,{sx:{maxHeight:"calc(100vh - 48px)","& .simplebar-content":{display:"flex",flexDirection:"column"}},children:o?e.jsx(p,{sx:{p:5},children:e.jsx(h,{direction:"row",justifyContent:"center",children:e.jsx(j,{})})}):n})})})})}b.propTypes={open:s.bool,modalToggler:s.func,customer:s.any};export{b as C};
