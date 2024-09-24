import{r as f,j as e,y as n,aj as S,M as j,S as u,a1 as C,B as b,P as i}from"./index-BE75cmpZ.js";import{u as y,f as p,g as T,h as R}from"./index-OdbGXu2K.js";import{m as w}from"./react-table-Lij528qs.js";import{S as D}from"./ScrollX-CyXoT44w.js";import{L as M}from"./LinearWithLabel-KVFg8Iwf.js";import{S as v,C as K,H as N}from"./Filter-y71UMtT7.js";import{T as P,a as V,b as k}from"./TableContainer-s0yUIJEg.js";import{T as H}from"./TableHead-DpC64hQ0.js";import{T as g}from"./TableRow-D1lYbwwu.js";import{T as d}from"./TableCell-BOHhKnuh.js";import"./mock-data-CjOvdTvj.js";import"./index-cq_cuLYi.js";import"./DocumentDownload-DDJvvIVF.js";import"./Slider-BUeMRvnO.js";import"./visuallyHidden-Dan1xhjv.js";import"./Send-DGO5bAte.js";import"./Pagination-BWXH2B2W.js";import"./index-ZtNy4ppB.js";import"./Checkbox-DNUoWgPJ.js";import"./Minus-YvqWlFLu.js";function x({columns:r,data:l}){const t=S(s=>s.breakpoints.down("sm")),[h,c]=f.useState([{id:"age",desc:!1}]),a=y({data:l,columns:r,state:{sorting:h},onSortingChange:c,getCoreRowModel:T(),getSortedRowModel:R()});let m=[];return a.getAllColumns().map(s=>m.push({label:typeof s.columnDef.header=="string"?s.columnDef.header:"#",key:s.columnDef.accessorKey})),e.jsx(j,{title:t?"Sorting":"Sorting Table",content:!1,secondary:e.jsxs(u,{direction:"row",alignItems:"center",spacing:{xs:1,sm:2},children:[e.jsx(v,{getState:a.getState,getAllColumns:a.getAllColumns,setSorting:c}),e.jsx(K,{data:a.getSortedRowModel().rows.map(s=>s.original),headers:m,filename:"sorting.csv"})]}),children:e.jsx(D,{children:e.jsx(P,{component:C,children:e.jsxs(V,{children:[e.jsx(H,{children:a.getHeaderGroups().map(s=>e.jsx(g,{children:s.headers.map(o=>(o.column.columnDef.meta!==void 0&&o.column.getCanSort()&&Object.assign(o.column.columnDef.meta,{className:o.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(d,{...o.column.columnDef.meta,onClick:o.column.getToggleSortingHandler(),...o.column.getCanSort()&&o.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:o.isPlaceholder?null:e.jsxs(u,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(b,{children:p(o.column.columnDef.header,o.getContext())}),o.column.getCanSort()&&e.jsx(N,{column:o.column})]})},o.id)))},s.id))}),e.jsx(k,{children:a.getRowModel().rows.map(s=>e.jsx(g,{children:s.getVisibleCells().map(o=>e.jsx(d,{...o.column.columnDef.meta,children:p(o.column.columnDef.cell,o.getContext())},o.id))},s.id))})]})})})})}function A(){const r=w(10),l=f.useMemo(()=>[{header:"First Name",accessorKey:"firstName"},{header:"Last Name",accessorKey:"lastName"},{header:"Email",accessorKey:"email"},{header:"Age",accessorKey:"age",meta:{className:"cell-right"}},{header:"Role",accessorKey:"role"},{header:"Visits",accessorKey:"visits",meta:{className:"cell-right"}},{header:"Status",accessorKey:"status",cell:t=>{switch(t.getValue()){case"Complicated":return e.jsx(n,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return e.jsx(n,{color:"success",label:"Relationship",size:"small",variant:"light"});case"Single":default:return e.jsx(n,{color:"info",label:"Single",size:"small",variant:"light"})}}},{header:"Profile Progress",accessorKey:"progress",cell:t=>e.jsx(M,{value:t.getValue(),sx:{minWidth:75}})}],[]);return e.jsx(x,{data:r,columns:l})}A.propTypes={getValue:i.func};x.propTypes={columns:i.array,data:i.array};export{A as default};
