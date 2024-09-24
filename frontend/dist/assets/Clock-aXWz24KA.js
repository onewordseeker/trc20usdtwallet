import{r as u,a4 as d,a5 as e,a6 as m,P as o}from"./index-BE75cmpZ.js";var k=["variant","color","size"],v=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{d:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.35 13.57a.746.746 0 0 1-1.03.26l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03Z",fill:r}))},p=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{d:"m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},E=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{opacity:".4",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",fill:r}),e.createElement("path",{d:"M15.71 15.932a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",fill:r}))},l=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{d:"M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},h=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{d:"M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",fill:r}),e.createElement("path",{d:"M15.71 15.932a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",fill:r}))},f=function(t){var r=t.color;return e.createElement(e.Fragment,null,e.createElement("path",{d:"M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{opacity:".4",d:"m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",stroke:r,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},L=function(t,r){switch(t){case"Bold":return e.createElement(v,{color:r});case"Broken":return e.createElement(p,{color:r});case"Bulk":return e.createElement(E,{color:r});case"Linear":return e.createElement(l,{color:r});case"Outline":return e.createElement(h,{color:r});case"TwoTone":return e.createElement(f,{color:r});default:return e.createElement(l,{color:r})}},a=u.forwardRef(function(n,t){var r=n.variant,i=n.color,c=n.size,s=d(n,k);return e.createElement("svg",m({},s,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:c,height:c,viewBox:"0 0 24 24",fill:"none"}),L(r,i))});a.propTypes={variant:o.oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:o.string,size:o.oneOfType([o.string,o.number])};a.defaultProps={variant:"Linear",color:"currentColor",size:"24"};a.displayName="Clock";export{a as C};
