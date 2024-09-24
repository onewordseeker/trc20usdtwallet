import{r as u,a4 as v,a5 as e,a6 as m,P as o}from"./index-BE75cmpZ.js";var h=["variant","color","size"],d=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{fill:r,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.06 10.33c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.31l-7.72 7.72c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l7.72-7.72h-3.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.83c.41 0 .75.34.75.75v4.83z"}))},p=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M13 11l8.2-8.2M22 6.8V2h-4.8M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2M11 2H9C4 2 2 4 2 9"}))},E=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{fill:r,d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z",opacity:".4"}),e.createElement("path",{fill:r,d:"M16.747 7h-4.83c-.41 0-.75.34-.75.75s.34.75.75.75h3.02l-7.72 7.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l7.72-7.72v3.02c0 .41.34.75.75.75s.75-.34.75-.75V7.75c0-.41-.34-.75-.75-.75z"}))},l=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M13 11l8.2-8.2M22 6.8V2h-4.8M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"}))},k=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{fill:r,d:"M13 11.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l8.2-8.2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-8.2 8.2c-.15.15-.34.22-.53.22z"}),e.createElement("path",{fill:r,d:"M22 7.55c-.41 0-.75-.34-.75-.75V2.75H17.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22c.41 0 .75.34.75.75v4.8c0 .41-.34.75-.75.75zM15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 5.43-2.32 7.75-7.75 7.75z"}))},f=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("g",{opacity:".4"},e.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M13 11l8.2-8.2M22 6.8V2h-4.8"})),e.createElement("path",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"}))},M=function(t,r){switch(t){case"Bold":return e.createElement(d,{color:r});case"Broken":return e.createElement(p,{color:r});case"Bulk":return e.createElement(E,{color:r});case"Linear":return e.createElement(l,{color:r});case"Outline":return e.createElement(k,{color:r});case"TwoTone":return e.createElement(f,{color:r});default:return e.createElement(l,{color:r})}},a=u.forwardRef(function(n,t){var r=n.variant,i=n.color,c=n.size,s=v(n,h);return e.createElement("svg",m({},s,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:c,height:c,viewBox:"0 0 24 24",fill:"none"}),M(r,i))});a.propTypes={variant:o.oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:o.string,size:o.oneOfType([o.string,o.number])};a.defaultProps={variant:"Linear",color:"currentColor",size:"24"};a.displayName="ExportSquare";export{a as E};
