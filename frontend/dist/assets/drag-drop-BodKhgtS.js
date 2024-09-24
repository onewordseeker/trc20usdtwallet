import{r as d,j as e,d8 as j,M as b,y as m,P as u,a1 as E,G as f}from"./index-BE75cmpZ.js";import{D as y,T as C,H as D}from"./index-BAji7F66.js";import{u as T,f as g,g as R}from"./index-OdbGXu2K.js";import{S as N}from"./ScrollX-CyXoT44w.js";import{L as K}from"./LinearWithLabel-KVFg8Iwf.js";import{C as w,c as A,d as F}from"./Filter-y71UMtT7.js";import{m as v}from"./react-table-Lij528qs.js";import{T as S,a as M,b as P}from"./TableContainer-s0yUIJEg.js";import{T as V}from"./TableHead-DpC64hQ0.js";import{T as x}from"./TableRow-D1lYbwwu.js";import{T as p}from"./TableCell-BOHhKnuh.js";import"./redux-2smOZOIh.js";import"./DocumentDownload-DDJvvIVF.js";import"./Slider-BUeMRvnO.js";import"./visuallyHidden-Dan1xhjv.js";import"./Send-DGO5bAte.js";import"./Pagination-BWXH2B2W.js";import"./index-ZtNy4ppB.js";import"./Checkbox-DNUoWgPJ.js";import"./Minus-YvqWlFLu.js";import"./mock-data-CjOvdTvj.js";import"./index-cq_cuLYi.js";function H({defaultColumns:o,defaultData:l}){const[r]=d.useState(()=>[...o]),[c,h]=d.useState([...l]),n=(a,t)=>{c.splice(t,0,c.splice(a,1)[0]),h([...c])},i=T({data:c,columns:r,getCoreRowModel:R(),getRowId:a=>a.id.toString(),debugTable:!0,debugHeaders:!0,debugColumns:!0});let s=[];return i.getAllColumns().map(a=>s.push({label:typeof a.columnDef.header=="string"?a.columnDef.header:"#",key:a.columnDef.accessorKey})),e.jsx(b,{title:"Row Drag & Drop",content:!1,secondary:e.jsx(w,{data:i.getRowModel().flatRows.map(a=>a.original),headers:s,filename:"row-dragable.csv"}),children:e.jsx(N,{children:e.jsx(S,{children:e.jsxs(M,{children:[e.jsx(V,{children:i.getHeaderGroups().map(a=>e.jsxs(x,{sx:{"& > th:first-of-type":{width:"58px"}},children:[e.jsx(p,{}),a.headers.map(t=>e.jsx(p,{...t.column.columnDef.meta,children:t.isPlaceholder?null:g(t.column.columnDef.header,t.getContext())},t.id))]},a.id))}),e.jsx(P,{children:i.getRowModel().rows.map(a=>e.jsx(A,{row:a,reorderRow:n,children:e.jsx(e.Fragment,{children:a.getVisibleCells().map(t=>e.jsx(p,{...t.column.columnDef.meta,children:g(t.column.columnDef.cell,t.getContext())},t.id))})},a.id))})]})})})})}function k(){const o=d.useMemo(()=>v(10),[]),l=[{id:"id",header:"#",accessorKey:"id"},{id:"firstName",header:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",accessorKey:"lastName"},{id:"email",header:"Email",accessorKey:"email"},{id:"age",header:"Age",accessorKey:"age",meta:{className:"cell-right"}},{id:"visits",header:"Visits",accessorKey:"visits",meta:{className:"cell-right"}},{id:"status",header:"Status",accessorKey:"status",cell:r=>{switch(r.getValue()){case"Complicated":return e.jsx(m,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return e.jsx(m,{color:"success",label:"Relationship",size:"small",variant:"light"});case"Single":default:return e.jsx(m,{color:"info",label:"Single",size:"small",variant:"light"})}}},{id:"progress",header:"Profile Progress",accessorKey:"progress",cell:r=>e.jsx(K,{value:r.getValue(),sx:{minWidth:75}})}];return e.jsx(y,{backend:j?C:D,children:e.jsx(H,{defaultColumns:l,defaultData:o})})}k.propTypes={getValue:u.func};H.propTypes={defaultColumns:u.array,defaultData:u.array};function L({defaultColumns:o,data:l}){const[r]=d.useState(()=>[...o]),[c,h]=d.useState(r.map(s=>s.id)),n=T({data:l,columns:r,state:{columnOrder:c},onColumnOrderChange:h,getCoreRowModel:R(),debugTable:!0,debugHeaders:!0,debugColumns:!0});let i=[];return n.getAllColumns().map(s=>i.push({label:typeof s.columnDef.header=="string"?s.columnDef.header:"#",key:s.columnDef.accessorKey})),e.jsx(b,{title:"Column Drag & Drop (Ordering)",content:!1,secondary:e.jsx(w,{data:l,headers:i,filename:"column-dragable.csv"}),children:e.jsx(N,{children:e.jsx(S,{component:E,children:e.jsxs(M,{children:[e.jsx(V,{children:n.getHeaderGroups().map(s=>e.jsx(x,{children:s.headers.map(a=>e.jsx(F,{header:a,table:n,children:e.jsx(e.Fragment,{children:a.isPlaceholder?null:g(a.column.columnDef.header,a.getContext())})},a.id))},s.id))}),e.jsx(P,{children:n.getRowModel().rows.map(s=>e.jsx(x,{children:s.getVisibleCells().map(a=>e.jsx(p,{...a.column.columnDef.meta,children:g(a.column.columnDef.cell,a.getContext())},a.id))},s.id))})]})})})})}function z(){const o=d.useMemo(()=>v(9),[]),l=[{id:"firstName",header:"First Name",footer:"First Name",accessorKey:"firstName"},{id:"lastName",header:"Last Name",footer:"Last Name",accessorKey:"lastName"},{id:"email",header:"Email",footer:"Email",accessorKey:"email"},{id:"age",header:"Age",footer:"Age",accessorKey:"age",meta:{className:"cell-right"}},{id:"visits",header:"Visits",footer:"Visits",accessorKey:"visits",meta:{className:"cell-right"}},{id:"status",header:"Status",footer:"Status",accessorKey:"status",cell:r=>{switch(r.getValue()){case"Complicated":return e.jsx(m,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return e.jsx(m,{color:"success",label:"Relationship",size:"small",variant:"light"});case"Single":default:return e.jsx(m,{color:"info",label:"Single",size:"small",variant:"light"})}}},{id:"progress",header:"Profile Progress",footer:"Profile Progress",accessorKey:"progress",cell:r=>e.jsx(K,{value:r.getValue(),sx:{minWidth:75}})}];return e.jsx(y,{backend:j?C:D,children:e.jsx(L,{defaultColumns:l,data:o})})}z.propTypes={getValue:u.func};L.propTypes={defaultColumns:u.array,data:u.array};function ce(){return e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{item:!0,xs:12,children:e.jsx(k,{})}),e.jsx(f,{item:!0,xs:12,children:e.jsx(z,{})})]})}export{ce as default};
