import{b8 as x,r as k,j as a,b9 as g,B as h,G as o,N as j,Q as i,L as c,O as B,ba as b}from"./index-BE75cmpZ.js";function d(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function L(){const{pathname:e}=x();let s=0,t="",n="";switch(e){case"/apps/kanban/backlogs":t="Backlogs",n="Backlogs",s=1;break;case"/apps/kanban/board":default:t="Board",n="Taskboard",s=0}const[r,p]=k.useState(s),u=(f,m)=>{p(m)};let l=[{title:"Home",to:b},{title:"Kanban",to:"/apps/kanban/board"},{title:t}];return s===0&&(l=[{title:"Home",to:b},{title:"Kanban"}]),a.jsxs(a.Fragment,{children:[a.jsx(g,{custom:!0,heading:n,links:l}),a.jsx(h,{sx:{display:"flex"},children:a.jsxs(o,{container:!0,spacing:1,children:[a.jsx(o,{item:!0,xs:12,children:a.jsxs(j,{value:r,variant:"scrollable",onChange:u,children:[a.jsx(i,{component:c,to:"/apps/kanban/board",label:r===0?"Board":"View as Board",...d(0)}),a.jsx(i,{component:c,to:"/apps/kanban/backlogs",label:r===1?"Backlogs":"View as Backlog",...d(1)})]})}),a.jsx(o,{item:!0,xs:12,children:a.jsx(B,{})})]})})]})}export{L as default};
