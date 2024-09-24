import{r as x,j as e,M as w,d2 as V,B as u,d,T as h,P as m,bK as W,bL as I,aO as L,ca as K,bf as y,bO as z,be as F,cn as Y,bU as O,bV as $,x as E,aC as J,G as T,S as A}from"./index-BE75cmpZ.js";import{C as X,a as Z,b as ee}from"./ComponentSkeleton-DMhpF42u.js";import{S as R,a as P,b as D,c as U,d as H}from"./StepLabel-DEhFOPvX.js";import{S as te}from"./index-BvlZ5F8S.js";import{A as ie}from"./ArrowLeft2-nt2dqkby.js";import"./Skeleton-CpgMpkyu.js";const B=["Select campaign settings","Create an ad group","Create an ad"];function k({children:t,value:i,index:s,...n}){return e.jsx("div",{role:"tabpanel",hidden:i!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...n,children:i===s&&e.jsx(u,{sx:{p:3},children:t})})}function se(){const[t,i]=x.useState(0),[s,n]=x.useState(new Set),r=a=>a===1,g=a=>s.has(a),l=()=>{let a=s;g(t)&&(a=new Set(a.values()),a.delete(t)),i(p=>p+1),n(a)},c=()=>{i(a=>a-1)},v=()=>{if(!r(t))throw new Error("You can't skip a step that isn't optional.");i(a=>a+1),n(a=>{const p=new Set(a.values());return p.add(t),p})},b=()=>{i(0)};return e.jsx(w,{title:"Basic - Linear",codeString:` // HorizontalLinearStepper.tsx
<Stepper activeStep={activeStep}>
  {steps.map((label, index) => {
    const stepProps: { completed?: boolean } = {};
    const labelProps: {
      optional?: ReactNode;
    } = {};
    if (isStepOptional(index)) {
      labelProps.optional = <Typography variant="caption">Optional</Typography>;
    }
    if (isStepSkipped(index)) {
      stepProps.completed = false;
    }
    return (
      <Step key={label} {...stepProps}>
        <StepLabel {...labelProps}>{label}</StepLabel>
      </Step>
    );
  })}
</Stepper>
{activeStep === steps.length ? (
  <>
    <Alert sx={{ my: 3 }}>All steps completed - you&apos;re finished</Alert>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ flex: '1 1 auto' }} />
      <Button onClick={handleReset} color="error" variant="contained">
        Reset
      </Button>
    </Box>
  </>
) : (
  <>
    <StepWrapper value={activeStep} index={0}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in
        laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat
        tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu.
      </Typography>
    </StepWrapper>
    <StepWrapper value={activeStep} index={1}>
      <Typography>
        Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim
        vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci
        id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor,
        enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu,
        eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet
        feugiat ac quis est.
      </Typography>
    </StepWrapper>
    <StepWrapper value={activeStep} index={2}>
      <Typography>
        Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis
        sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin.
        Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis.
        Nullam id scelerisque nunc, in ultricies orci.
      </Typography>
    </StepWrapper>
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      {isStepOptional(activeStep) && (
        <Button color="error" onClick={handleSkip} sx={{ mr: 1 }}>
          Skip
        </Button>
      )}
      <Button onClick={handleNext} variant="contained" color={activeStep === steps.length - 1 ? 'success' : 'primary'}>
        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </Box>
  </>
)}`,children:e.jsxs(e.Fragment,{children:[e.jsx(R,{activeStep:t,children:B.map((a,p)=>{const S={},o={};return r(p)&&(o.optional=e.jsx(h,{variant:"caption",children:"Optional"})),g(p)&&(S.completed=!1),e.jsx(P,{...S,children:e.jsx(D,{...o,children:a})},a)})}),t===B.length?e.jsxs(e.Fragment,{children:[e.jsx(V,{sx:{my:3},children:"All steps completed - you're finished"}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row"},children:[e.jsx(u,{sx:{flex:"1 1 auto"}}),e.jsx(d,{onClick:b,color:"error",variant:"contained",children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{value:t,index:0,children:e.jsx(h,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu."})}),e.jsx(k,{value:t,index:1,children:e.jsx(h,{children:"Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor, enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu, eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet feugiat ac quis est."})}),e.jsx(k,{value:t,index:2,children:e.jsx(h,{children:"Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin. Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis. Nullam id scelerisque nunc, in ultricies orci."})}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(d,{variant:"outlined",disabled:t===0,onClick:c,sx:{mr:1},children:"Back"}),e.jsx(u,{sx:{flex:"1 1 auto"}}),r(t)&&e.jsx(d,{color:"error",onClick:v,sx:{mr:1},children:"Skip"}),e.jsx(d,{onClick:l,variant:"contained",color:t===B.length-1?"success":"primary",children:t===B.length-1?"Finish":"Next"})]})]})]})})}k.propTypes={children:m.node,value:m.number,index:m.number,other:m.any};function ne(t){return I("MuiStepButton",t)}const M=W("MuiStepButton",["root","horizontal","vertical","touchRipple"]),ae=["children","className","icon","optional"],oe=t=>{const{classes:i,orientation:s}=t;return $({root:["root",s],touchRipple:["touchRipple"]},ne,i)},re=L(K,{name:"MuiStepButton",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:s}=t;return[{[`& .${M.touchRipple}`]:i.touchRipple},i.root,i[s.orientation]]}})(({ownerState:t})=>y({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box"},t.orientation==="vertical"&&{justifyContent:"flex-start",padding:"8px",margin:"-8px"},{[`& .${M.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"}})),le=x.forwardRef(function(i,s){const n=z({props:i,name:"MuiStepButton"}),{children:r,className:g,icon:l,optional:c}=n,v=F(n,ae),{disabled:b,active:C}=x.useContext(U),{orientation:a}=x.useContext(H),p=y({},n,{orientation:a}),S=oe(p),o={icon:l,optional:c},f=Y(r,["StepLabel"])?x.cloneElement(r,o):e.jsx(D,y({},o,{children:r}));return e.jsx(re,y({focusRipple:!0,disabled:b,TouchRippleProps:{className:S.touchRipple},className:O(S.root,g),ref:s,ownerState:p,"aria-current":C?"step":void 0},v,{children:f}))}),j=["Select campaign settings","Create an ad group","Create an ad"];function q({children:t,value:i,index:s,...n}){return e.jsx("div",{role:"tabpanel",hidden:i!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...n,children:i===s&&e.jsx(u,{sx:{p:3},children:t})})}function ue(){const[t,i]=x.useState(0),[s,n]=x.useState({}),r=()=>j.length,g=()=>Object.keys(s).length,l=()=>t===r()-1,c=()=>g()===r(),v=()=>{const o=l()&&!c()?j.findIndex((f,G)=>!(G in s)):t+1;i(o)},b=()=>{i(o=>o-1)},C=o=>()=>{i(o)},a=()=>{const o=s;o[t]=!0,n(o),v()},p=()=>{i(0),n({})};return e.jsxs(w,{title:"Non - Linear",codeString:`// HorizontalNonLinearStepper.tsx
<Stepper nonLinear activeStep={activeStep}>
  {steps.map((label, index) => (
    <Step key={label} completed={completed[index]}>
      <StepButton color="inherit" onClick={handleStep(index)}>
        {label}
      </StepButton>
    </Step>
  ))}
</Stepper>
<div>
  {allStepsCompleted() ? (
    <>
      <Alert sx={{ my: 3 }}>All steps completed - you&apos;re finished</Alert>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleReset} color="error" variant="contained">
          Reset
        </Button>
      </Box>
    </>
  ) : (
    <>
      <StepWrapper value={activeStep} index={0}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in
          laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat
          tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu.
        </Typography>
      </StepWrapper>
      <StepWrapper value={activeStep} index={1}>
        <Typography>
          Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim
          vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci
          id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor,
          enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu,
          eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet
          feugiat ac quis est.
        </Typography>
      </StepWrapper>
      <StepWrapper value={activeStep} index={2}>
        <Typography>
          Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis
          sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin.
          Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis.
          Nullam id scelerisque nunc, in ultricies orci.
        </Typography>
      </StepWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {activeStep !== steps.length &&
          (completed[activeStep] ? (
            <Button color="success">Step {activeStep + 1} already completed</Button>
          ) : (
            <Button onClick={handleComplete} color="success" variant={activeStep === totalSteps() - 1 ? 'contained' : 'outlined'}>
              {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
            </Button>
          ))}
        <Button disabled={activeStep === steps.length - 1} onClick={handleNext} sx={{ ml: 1 }} variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </>
  )}
</div>`,children:[e.jsx(R,{nonLinear:!0,activeStep:t,children:j.map((o,f)=>e.jsx(P,{completed:s[f],children:e.jsx(le,{color:"inherit",onClick:C(f),children:o})},o))}),e.jsx("div",{children:c()?e.jsxs(e.Fragment,{children:[e.jsx(V,{sx:{my:3},children:"All steps completed - you're finished"}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row"},children:[e.jsx(u,{sx:{flex:"1 1 auto"}}),e.jsx(d,{onClick:p,color:"error",variant:"contained",children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(q,{value:t,index:0,children:e.jsx(h,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu."})}),e.jsx(q,{value:t,index:1,children:e.jsx(h,{children:"Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor, enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu, eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet feugiat ac quis est."})}),e.jsx(q,{value:t,index:2,children:e.jsx(h,{children:"Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin. Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis. Nullam id scelerisque nunc, in ultricies orci."})}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(d,{variant:"outlined",disabled:t===0,onClick:b,sx:{mr:1},children:"Back"}),e.jsx(u,{sx:{flex:"1 1 auto"}}),t!==j.length&&(s[t]?e.jsxs(d,{color:"success",children:["Step ",t+1," already completed"]}):e.jsx(d,{onClick:a,color:"success",variant:t===r()-1?"contained":"outlined",children:g()===r()-1?"Finish":"Complete Step"})),e.jsx(d,{disabled:t===j.length-1,onClick:v,sx:{ml:1},variant:"contained",color:"primary",children:"Next"})]})]})})]})}q.propTypes={children:m.node,value:m.number,index:m.number,other:m.any};function ce(t){return I("MuiStepContent",t)}W("MuiStepContent",["root","last","transition"]);const pe=["children","className","TransitionComponent","transitionDuration","TransitionProps"],de=t=>{const{classes:i,last:s}=t;return $({root:["root",s&&"last"],transition:["transition"]},ce,i)},me=L("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:s}=t;return[i.root,s.last&&i.last]}})(({ownerState:t,theme:i})=>y({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:i.vars?`1px solid ${i.vars.palette.StepContent.border}`:`1px solid ${i.palette.mode==="light"?i.palette.grey[400]:i.palette.grey[600]}`},t.last&&{borderLeft:"none"})),xe=L(E,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,i)=>i.transition})({}),he=x.forwardRef(function(i,s){const n=z({props:i,name:"MuiStepContent"}),{children:r,className:g,TransitionComponent:l=E,transitionDuration:c="auto",TransitionProps:v}=n,b=F(n,pe);x.useContext(H);const{active:C,last:a,expanded:p}=x.useContext(U),S=y({},n,{last:a}),o=de(S);let f=c;return c==="auto"&&!l.muiSupportAuto&&(f=void 0),e.jsx(me,y({className:O(o.root,g),ref:s,ownerState:S},b,{children:e.jsx(xe,y({as:l,in:C||p,className:o.transition,ownerState:S,timeout:f,unmountOnExit:!0},v,{children:r}))}))}),N=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function ge(){const[t,i]=x.useState(0),s=()=>i(l=>l+1),n=()=>i(l=>l-1),r=()=>i(0);return e.jsxs(w,{title:"Vertical",codeString:`// VerticalLinearStepper.tsx
<Stepper activeStep={activeStep} orientation="vertical">
  {steps.map((step, index) => (
    <Step key={step.label}>
      <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
      <StepContent>
        <Typography>{step.description}</Typography>
        <Box sx={{ mb: 2 }}>
          <div>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
              color={index === steps.length - 1 ? 'success' : 'primary'}
            >
              {index === steps.length - 1 ? 'Finish' : 'Continue'}
            </Button>
            <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
              Back
            </Button>
          </div>
        </Box>
      </StepContent>
    </Step>
  ))}
</Stepper>
{activeStep === steps.length && (
  <Box sx={{ pt: 2 }}>
    <Typography sx={{ color: 'success.main' }}>All steps completed - you&apos;re finished</Typography>
    <Button size="small" variant="contained" color="error" onClick={handleReset} sx={{ mt: 2, mr: 1 }}>
      Reset
    </Button>
  </Box>
)}`,children:[e.jsx(R,{activeStep:t,orientation:"vertical",children:N.map((l,c)=>e.jsxs(P,{children:[e.jsx(D,{optional:c===2?e.jsx(h,{variant:"caption",children:"Last step"}):null,children:l.label}),e.jsxs(he,{children:[e.jsx(h,{children:l.description}),e.jsx(u,{sx:{mb:2},children:e.jsxs("div",{children:[e.jsx(d,{variant:"contained",onClick:s,sx:{mt:1,mr:1},color:c===N.length-1?"success":"primary",children:c===N.length-1?"Finish":"Continue"}),e.jsx(d,{disabled:c===0,onClick:n,sx:{mt:1,mr:1},children:"Back"})]})})]})]},l.label))}),t===N.length&&e.jsxs(u,{sx:{pt:2},children:[e.jsx(h,{sx:{color:"success.main"},children:"All steps completed - you're finished"}),e.jsx(d,{size:"small",variant:"contained",color:"error",onClick:r,sx:{mt:2,mr:1},children:"Reset"})]})]})}function Q(t){const{className:i,style:s,onClick:n}=t;return e.jsx("div",{className:i,style:{...s,display:"block",top:"87%",right:64},children:e.jsx(d,{onClick:n,endIcon:e.jsx(J,{size:14}),sx:{my:2,mx:1},size:"small",children:"Next"})})}function _(t){const{className:i,style:s,onClick:n}=t;return e.jsx("div",{className:i,style:{...s,display:"block",top:"87%",left:0},children:e.jsx(d,{onClick:n,startIcon:e.jsx(ie,{size:14}),sx:{my:2,mx:1},size:"small",children:"Back"})})}function Se(){const t=[{label:"San Francisco",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"},{label:"Goč, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}],i={dots:!0,autoplay:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,nextArrow:e.jsx(Q,{}),prevArrow:e.jsx(_,{})};return e.jsx(w,{content:!1,sx:{"& .slick-dots":{position:"static",pt:1,pb:1.5},"& .slick-prev:before":{display:"none"},"& .slick-next:before":{display:"none"}},children:e.jsx(te,{...i,children:t.map((s,n)=>e.jsxs(u,{children:[e.jsx(u,{sx:{p:1.75},children:e.jsx(h,{children:s.label})}),e.jsx(u,{component:"img",sx:{height:255,display:"block",overflow:"hidden",width:"100%"},src:s.imgPath,alt:s.label})]},n))})})}Q.propTypes={className:m.any,style:m.any,onClick:m.any};_.propTypes={className:m.any,style:m.any,onClick:m.any};function Be(){return e.jsxs(X,{children:[e.jsx(Z,{title:"Stepper",caption:"Steppers convey progress through numbered steps. It provides a wizard-like workflow.",directory:"src/pages/components-overview/stepper",link:"https://mui.com/material-ui/react-stepper/"}),e.jsx(ee,{children:e.jsxs(T,{container:!0,spacing:3,children:[e.jsx(T,{item:!0,xs:12,lg:8,children:e.jsxs(A,{spacing:3,children:[e.jsx(se,{}),e.jsx(ue,{})]})}),e.jsx(T,{item:!0,xs:12,lg:4,children:e.jsxs(A,{spacing:3,children:[e.jsx(ge,{}),e.jsx(Se,{})]})})]})})]})}export{Be as default};
