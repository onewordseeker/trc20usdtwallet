import{j as e,M as c,G as v,a0 as p,n as d,B as g,r as h,d4 as z,cT as V,db as B,aV as F,aO as f,P as w,bt as L,y as R,S as T,c as W,aL as E,ag as $,dc as j,aK as D,ad as G,ck as H,ca as q}from"./index-BE75cmpZ.js";import{C as K,a as N,b as U}from"./ComponentSkeleton-DMhpF42u.js";import{c as J}from"./countries-CK98J6et.js";import{C as X}from"./Checkbox-DNUoWgPJ.js";import{S as _}from"./Setting3-CNSEG1AL.js";import"./Skeleton-CpgMpkyu.js";const Q=[{label:"The Shawshank Redemption",year:1994},{label:"The Godfather",year:1972},{label:"The Godfather: Part II",year:1974},{label:"The Dark Knight",year:2008},{label:"12 Angry Men",year:1957},{label:"Schindler's List",year:1993},{label:"Pulp Fiction",year:1994},{label:"The Lord of the Rings: The Return of the King",year:2003},{label:"The Good, the Bad and the Ugly",year:1966},{label:"Fight Club",year:1999},{label:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{label:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{label:"Forrest Gump",year:1994},{label:"Inception",year:2010},{label:"The Lord of the Rings: The Two Towers",year:2002},{label:"One Flew Over the Cuckoo's Nest",year:1975},{label:"Goodfellas",year:1990},{label:"The Matrix",year:1999},{label:"Seven Samurai",year:1954},{label:"Star Wars: Episode IV - A New Hope",year:1977},{label:"City of God",year:2002},{label:"Se7en",year:1995},{label:"The Silence of the Lambs",year:1991},{label:"It's a Wonderful Life",year:1946},{label:"Life Is Beautiful",year:1997},{label:"The Usual Suspects",year:1995},{label:"Léon: The Professional",year:1994},{label:"Spirited Away",year:2001},{label:"Saving Private Ryan",year:1998},{label:"Once Upon a Time in the West",year:1968},{label:"American History X",year:1998},{label:"Interstellar",year:2014},{label:"Casablanca",year:1942},{label:"City Lights",year:1931},{label:"Psycho",year:1960},{label:"The Green Mile",year:1999},{label:"The Intouchables",year:2011},{label:"Modern Times",year:1936},{label:"Raiders of the Lost Ark",year:1981},{label:"Rear Window",year:1954},{label:"The Pianist",year:2002},{label:"The Departed",year:2006},{label:"Terminator 2: Judgment Day",year:1991},{label:"Back to the Future",year:1985},{label:"Whiplash",year:2014},{label:"Gladiator",year:2e3},{label:"Memento",year:2e3},{label:"The Prestige",year:2006},{label:"The Lion King",year:1994},{label:"Apocalypse Now",year:1979},{label:"Alien",year:1979},{label:"Sunset Boulevard",year:1950},{label:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{label:"The Great Dictator",year:1940},{label:"Cinema Paradiso",year:1988},{label:"The Lives of Others",year:2006},{label:"Grave of the Fireflies",year:1988},{label:"Paths of Glory",year:1957},{label:"Django Unchained",year:2012},{label:"The Shining",year:1980},{label:"WALL·E",year:2008},{label:"American Beauty",year:1999},{label:"The Dark Knight Rises",year:2012},{label:"Princess Mononoke",year:1997},{label:"Aliens",year:1986},{label:"Oldboy",year:2003},{label:"Once Upon a Time in America",year:1984},{label:"Witness for the Prosecution",year:1957},{label:"Das Boot",year:1981},{label:"Citizen Kane",year:1941},{label:"North by Northwest",year:1959},{label:"Vertigo",year:1958},{label:"Star Wars: Episode VI - Return of the Jedi",year:1983},{label:"Reservoir Dogs",year:1992},{label:"Braveheart",year:1995},{label:"M",year:1931},{label:"Requiem for a Dream",year:2e3},{label:"Amélie",year:2001},{label:"A Clockwork Orange",year:1971},{label:"Like Stars on Earth",year:2007},{label:"Taxi Driver",year:1976},{label:"Lawrence of Arabia",year:1962},{label:"Double Indemnity",year:1944},{label:"Eternal Sunshine of the Spotless Mind",year:2004},{label:"Amadeus",year:1984},{label:"To Kill a Mockingbird",year:1962},{label:"Toy Story 3",year:2010},{label:"Logan",year:2017},{label:"Full Metal Jacket",year:1987},{label:"Dangal",year:2016},{label:"The Sting",year:1973},{label:"2001: A Space Odyssey",year:1968},{label:"Singin' in the Rain",year:1952},{label:"Toy Story",year:1995},{label:"Bicycle Thieves",year:1948},{label:"The Kid",year:1921},{label:"Inglourious Basterds",year:2009},{label:"Snatch",year:2e3},{label:"3 Idiots",year:2009},{label:"Monty Python and the Holy Grail",year:1975}],l=Q;function Y(){return e.jsx(c,{title:"Basic",sx:{overflow:"visible"},codeHighlight:!0,codeString:`<Autocomplete
  fullWidth
  disablePortal
  id="basic-autocomplete-label"
  options={data}
  renderInput={(params) => <TextField {...params} label="Label" />}
/>
<Autocomplete
  fullWidth
  disablePortal
  id="basic-autocomplete"
  options={data}
  renderInput={(params) => <TextField {...params} placeholder="Placeholder" />}
/>`,children:e.jsxs(v,{container:!0,spacing:2,children:[e.jsx(v,{item:!0,xs:12,lg:6,children:e.jsx(p,{fullWidth:!0,disablePortal:!0,id:"basic-autocomplete-label",options:l,renderInput:t=>e.jsx(d,{...t,label:"Label"})})}),e.jsx(v,{item:!0,xs:12,lg:6,children:e.jsx(p,{fullWidth:!0,disablePortal:!0,id:"basic-autocomplete",options:l,renderInput:t=>e.jsx(d,{...t,placeholder:"Placeholder"})})})]})})}function Z(){return e.jsx(c,{title:"With Image",codeString:`<Autocomplete
  id="country-select-demo"
  fullWidth
  options={countries}
  autoHighlight
  getOptionLabel={(option) => option.label}
  renderOption={(props, option) => (
    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
      {option.code && (
        <img
          loading="lazy"
          width="20"
          src={https://flagcdn.com/w20/{option.code.toLowerCase()}.png}
          srcSet={https://flagcdn.com/w40/{option.code.toLowerCase()}.png 2x}
          alt=""
        />
      )}
      {option.label} ({option.code}) +{option.phone}
    </Box>
  )}
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Choose a country"
      inputProps={{
        ...params.inputProps,
        autoComplete: 'new-password' // disable autocomplete and autofill
      }}
    />
  )}
/>`,children:e.jsx(p,{id:"country-select-demo",fullWidth:!0,options:J,autoHighlight:!0,getOptionLabel:t=>t.label,renderOption:(t,r)=>e.jsxs(g,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...t,children:[r.code&&e.jsx("img",{loading:"lazy",width:"20",src:`https://flagcdn.com/w20/${r.code.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${r.code.toLowerCase()}.png 2x`,alt:""}),r.label," (",r.code,") +",r.phone]}),renderInput:t=>e.jsx(d,{...t,placeholder:"Choose a country",inputProps:{...t.inputProps,autoComplete:"new-password"}})})})}const ee=l,oe=z();function te(){const[o,t]=h.useState(null);return e.jsx(c,{title:"Creatable",codeString:`<Autocomplete
  fullWidth
  value={value}
  onChange={(event, newValue) => {
    if (typeof newValue === 'string') {
      setValue({
        label: newValue
      });
    } else if (newValue && newValue.inputValue) {
      setValue({
        label: newValue.inputValue
      });
    } else {
      setValue(newValue);
    }
  }}
  filterOptions={(options, params) => {
    const filtered = filter(options, params);

    const { inputValue } = params;

    const isExisting = options.some((option) => inputValue === option.label);
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        label: 'Add {inputValue}'
      });
    }

    return filtered;
  }}
  selectOnFocus
  clearOnBlur
  handleHomeEndKeys
  id="free-solo-with-text-demo"
  options={data}
  getOptionLabel={(option) => {
    // Value selected with enter, right from the input
    if (typeof option === 'string') {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue;
    }
    // Regular option
    return option.label;
  }}
  renderOption={(props, option) => <li {...props}>{option.label}</li>}
  freeSolo
  renderInput={(params) => <TextField {...params} placeholder="Free solo with text demo" />}
/>`,children:e.jsx(p,{fullWidth:!0,value:o,onChange:(a,i)=>{typeof i=="string"?t({label:i}):i&&i.inputValue?t({label:i.inputValue}):t(i)},filterOptions:(a,i)=>{const u=oe(a,i),{inputValue:n}=i,b=a.some(C=>n===C.label);return n!==""&&!b&&u.push({inputValue:n,label:`Add "${n}"`}),u},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:ee,getOptionLabel:a=>typeof a=="string"?a:a.inputValue?a.inputValue:a.label,renderOption:(a,i)=>e.jsx("li",{...a,children:i.label}),freeSolo:!0,renderInput:a=>e.jsx(d,{...a,placeholder:"Free solo with text demo"})})})}function re(){const o=l.map(r=>{const a=r.label[0].toUpperCase();return{firstLetter:/[0-9]/.test(a)?"0-9":a,...r}});return e.jsx(c,{title:"Grouped",codeString:`<Autocomplete
  id="grouped-demo"
  fullWidth
  options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
  groupBy={(option) => option.firstLetter}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => <TextField {...params} placeholder="With categories" />}
/>`,children:e.jsx(p,{id:"grouped-demo",fullWidth:!0,options:o.sort((r,a)=>-a.firstLetter.localeCompare(r.firstLetter)),groupBy:r=>r.firstLetter,getOptionLabel:r=>r.label,renderInput:r=>e.jsx(d,{...r,placeholder:"With categories"})})})}function le(){return e.jsx(c,{title:"Disabled Options",codeString:`<Autocomplete
  fullWidth
  id="disabled-options-demo"
  options={timeSlots}
  getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
  renderInput={(params) => <TextField {...params} placeholder="Disabled options" />}
/>`,children:e.jsx(p,{fullWidth:!0,id:"disabled-options-demo",options:k,getOptionDisabled:t=>t===k[0]||t===k[2],renderInput:t=>e.jsx(d,{...t,placeholder:"Disabled options"})})})}const k=Array.from(new Array(24*2)).map((o,t)=>`${t<20?"0":""}${Math.floor(t/2)}:${t%2===0?"00":"30"}`);function ie(){const[o,t]=h.useState(!1),[r,a]=h.useState([]),i=o&&r.length===0;return h.useEffect(()=>{if(i)return()=>{}},[i]),h.useEffect(()=>{o||a([])},[o]),e.jsx(c,{title:"Asynchronous",codeString:`<Autocomplete
  id="asynchronous-demo"
  sx={{ width: 300 }}
  open={open}
  onOpen={() => {
    setOpen(true);
  }}
  onClose={() => {
    setOpen(false);
  }}
  isOptionEqualToValue={(option, value) => option.title === value.title}
  getOptionLabel={(option) => option.title}
  options={options}
  loading={loading}
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Asynchronous"
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <>
            {loading ? <CircularProgress color="inherit" size={20} /> : null}
            {params.InputProps.endAdornment}
          </>
        )
      }}
    />
  )}
/>`,children:e.jsx(p,{id:"asynchronous-demo",sx:{width:300},open:o,onOpen:()=>{t(!0)},onClose:()=>{t(!1)},isOptionEqualToValue:(n,b)=>n.title===b.title,getOptionLabel:n=>n.title,options:r,loading:i,renderInput:n=>e.jsx(d,{...n,placeholder:"Asynchronous",InputProps:{...n.InputProps,endAdornment:e.jsxs(e.Fragment,{children:[i?e.jsx(V,{color:"inherit",size:20}):null,n.InputProps.endAdornment]})}})})})}const M=f("div")(({theme:o})=>`
color: ${o.palette.text.primary};
font-size: 14px;
`);M.displayName="Root";const ae=f("div")(({theme:o})=>`
width: 100%;
border: 1px solid ${o.palette.divider};
background-color: ${o.palette.background.default};
border-radius: 4px;
padding: 8px;
display: flex;
flex-wrap: wrap;

&:hover {
  border-color: ${o.palette.primary.main};
}

&.focused {
  border-color: ${o.palette.primary.main};
  box-shadow: ${o.customShadows.primary};
}

& input {
  background-color: transparent;
  height: 30px;
  box-sizing: border-box;
  padding: 4px 6px;
  width: 0;
  min-width: 30px;
  flex-grow: 1;
  border: 0;
  margin: 0;
  outline: 0;
}
`);function P({label:o,onDelete:t,...r}){return e.jsxs("div",{...r,children:[e.jsx("span",{children:o}),e.jsx(L,{onClick:t,variant:"Bold",size:18})]})}const ne=f(P)(({theme:o})=>`
display: flex;
align-items: center;
height: 24px;
margin: 4px;
line-height: 22px;
background-color: ${o.palette.secondary.lighter};
border: 1px solid ${o.palette.secondary.light};
border-radius: 2px;
box-sizing: content-box;
padding: 0 4px 0 10px;
outline: 0;
overflow: hidden;

& span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

& svg {
  font-size: 0.625rem;
  cursor: pointer;
  padding: 4px;
}
`),se=f("ul")(({theme:o})=>`
width: 300px;
margin: 2px 0 0;
padding: 0;
position: absolute;
list-style: none;
background-color: ${o.palette.background.paper};
overflow: auto;
max-height: 250px;
border-radius: 4px;
box-shadow: ${o.customShadows.z1};
z-index: 1;

& li {
  padding: 5px 12px;
  display: flex;

  & span {
    flex-grow: 1;
  }

  & svg {
    color: transparent;
  }
}

& li[aria-selected='true'] {
  background-color: ${o.palette.primary.lighter};
  font-weight: 600;

  & svg {
    color: ${o.palette.primary.main};
  }
}

& li[data-focus='true'] {
  background-color: ${o.palette.primary.lighter};
  cursor: pointer;

  & svg {
    color: currentColor;
  }
}
`);function pe(){const{getRootProps:o,getInputProps:t,getTagProps:r,getListboxProps:a,getOptionProps:i,groupedOptions:u,value:n,focused:b,setAnchorEl:C}=B({id:"customized-hook-demo",defaultValue:[l[1],l[3],l[8]],multiple:!0,options:l,getOptionLabel:x=>x.label});return e.jsx(c,{title:"Customized",sx:{overflow:"visible"},codeString:`// CustomizedAutocomplete.tsx
<Root>
  <div {...getRootProps()}>
    <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
      {value.map((option: FilmOptionType, index: number) => (
        <StyledTag label={option.label} {...getTagProps({ index })} />
      ))}
      <input {...getInputProps()} />
    </InputWrapper>
  </div>
  {groupedOptions.length > 0 ? (
    <Listbox {...getListboxProps()}>
      {(groupedOptions as typeof data).map((option, index) => (
        <li {...getOptionProps({ option, index })}>
          <span>{option.label}</span>
          <TickSquare variant="Bold" size={16} style={{ marginTop: 2 }} />
        </li>
      ))}
    </Listbox>
  ) : null}
</Root>`,children:e.jsxs(M,{children:[e.jsx("div",{...o(),children:e.jsxs(ae,{ref:C,className:b?"focused":"",children:[n.map((x,S)=>e.jsx(ne,{label:x.label,...r({index:S})},S)),e.jsx("input",{...t()})]})}),u.length>0?e.jsx(se,{...a(),children:u.map((x,S)=>h.createElement("li",{...i({option:x,index:S}),key:S},e.jsx("span",{children:x.label}),e.jsx(F,{variant:"Bold",size:16,style:{marginTop:2}})))}):null]})})}P.propTypes={label:w.string,onDelete:w.any,other:w.any};function de(){return e.jsx(c,{title:"Multiple Tags",codeString:`<Autocomplete
  multiple
  id="tags-outlined"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[7], data[13]]}
  filterSelectedOptions
  renderInput={(params) => <TextField {...params} placeholder="Favorites" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:e.jsx(p,{multiple:!0,id:"tags-outlined",options:l,getOptionLabel:t=>t.label,defaultValue:[l[7],l[13]],filterSelectedOptions:!0,renderInput:t=>e.jsx(d,{...t,placeholder:"Favorites"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function ue(){const o=[l[6]],[t,r]=h.useState([...o,l[13]]);return e.jsx(c,{title:"Fixed Options",codeString:`<Autocomplete
  multiple
  fullWidth
  id="fixed-tags-demo"
  value={value}
  onChange={(event, newValue) => {
    setValue([...fixedOptions, ...newValue.filter((option) => fixedOptions.indexOf(option) === -1)]);
  }}
  options={data}
  getOptionLabel={(option) => option.label}
  renderTags={(tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Chip label={option.label} {...getTagProps({ index })} disabled={fixedOptions.indexOf(option) !== -1} />
    ))
  }
  renderInput={(params) => <TextField {...params} placeholder="Fixed Tag" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:e.jsx(p,{multiple:!0,fullWidth:!0,id:"fixed-tags-demo",value:t,onChange:(i,u)=>{r([...o,...u.filter(n=>o.indexOf(n)===-1)])},options:l,getOptionLabel:i=>i.label,renderTags:(i,u)=>i.map((n,b)=>e.jsx(R,{label:n.label,...u({index:b}),disabled:o.indexOf(n)!==-1},b)),renderInput:i=>e.jsx(d,{...i,placeholder:"Fixed Tag"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function ce(){return e.jsx(c,{title:"Checkboxes",codeString:`<Autocomplete
  multiple
  id="checkboxes-tags-demo"
  options={data}
  disableCloseOnSelect
  getOptionLabel={(option) => option.label}
  renderOption={(props, option, { selected }) => (
    <li {...props}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.label}
    </li>
  )}
  renderInput={(params) => <TextField {...params} placeholder="Checkboxes" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:e.jsx(p,{multiple:!0,id:"checkboxes-tags-demo",options:l,disableCloseOnSelect:!0,getOptionLabel:t=>t.label,renderOption:(t,r,{selected:a})=>e.jsxs("li",{...t,children:[e.jsx(X,{style:{marginRight:8},checked:a}),r.label]}),renderInput:t=>e.jsx(d,{...t,placeholder:"Checkboxes"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function me(){return e.jsx(c,{title:"Limit Tags",codeString:`<Autocomplete
  multiple
  limitTags={2}
  id="multiple-limit-tags"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[12], data[11]]}
  renderInput={(params) => <TextField {...params} placeholder="Limit Tags" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderRadius: 1,
      height: 32,
      pl: 1.5,
      pr: 1.5,
      lineHeight: '32px',
      borderColor: 'primary.light',
      '& .MuiChip-label': {
        paddingLeft: 0,
        paddingRight: 0
      },
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        ml: 1,
        mr: -0.75,
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:e.jsx(p,{multiple:!0,limitTags:2,id:"multiple-limit-tags",options:l,getOptionLabel:t=>t.label,defaultValue:[l[13],l[12],l[11]],renderInput:t=>e.jsx(d,{...t,placeholder:"Limit Tags"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderRadius:1,height:32,pl:1.5,pr:1.5,lineHeight:"32px",borderColor:"primary.light","& .MuiChip-label":{paddingLeft:0,paddingRight:0},"& .MuiSvgIcon-root":{color:"primary.main",ml:1,mr:-.75,"&:hover":{color:"primary.dark"}}}}})})}function be(){return e.jsx(c,{title:"Sizes",codeString:`<Autocomplete
  id="size-small-outlined"
  size="small"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={data[13]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  id="size-small-outlined"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={data[13]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  id="size-small-outlined-multi"
  size="small"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  id="size-default-outlined-multi"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Medium" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  size="medium"
  id="size-large-outlined-multi"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Large" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:e.jsxs(T,{spacing:2,children:[e.jsx(p,{id:"size-small-outlined",size:"small",options:l,getOptionLabel:t=>t.label,defaultValue:l[13],renderInput:t=>e.jsx(d,{...t,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),e.jsx(p,{id:"size-small-outlined",options:l,getOptionLabel:t=>t.label,defaultValue:l[13],renderInput:t=>e.jsx(d,{...t,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),e.jsx(p,{multiple:!0,id:"size-small-outlined-multi",size:"small",options:l,getOptionLabel:t=>t.label,defaultValue:[l[13],l[3]],renderInput:t=>e.jsx(d,{...t,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),e.jsx(p,{multiple:!0,id:"size-default-outlined-multi",options:l,getOptionLabel:t=>t.label,defaultValue:[l[13],l[3]],renderInput:t=>e.jsx(d,{...t,placeholder:"Size Medium"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),e.jsx(p,{multiple:!0,size:"medium",id:"size-large-outlined-multi",options:l,getOptionLabel:t=>t.label,defaultValue:[l[13],l[3]],renderInput:t=>e.jsx(d,{...t,placeholder:"Size Large"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})]})})}const ge=f(g)(({theme:o})=>({[`& .${j.paper}`]:{boxShadow:"none",margin:0,color:"inherit",fontSize:13},[`& .${j.listbox}`]:{backgroundColor:o.palette.background.default,padding:0,[`& .${j.option}`]:{minHeight:"auto",alignItems:"flex-start",padding:8,borderBottom:`1px solid ${o.palette.divider}`,'&[aria-selected="true"]':{backgroundColor:"transparent"},'&[data-focus="true"], &[data-focus="true"][aria-selected="true"]':{backgroundColor:o.palette.action.hover}}},[`&.${j.popperDisablePortal}`]:{position:"relative"}}));function he({...o}){return e.jsx(ge,{...o})}const xe=f(D)(({theme:o})=>({border:"1px solid",borderColor:o.palette.divider,boxShadow:o.customShadows.z1,borderRadius:6,width:300,zIndex:o.zIndex.modal,fontSize:13,color:o.palette.mode===G.DARK?o.palette.secondary.light:o.palette.secondary.dark,backgroundColor:o.palette.background.default})),ye=f(H)(({theme:o})=>({padding:10,width:"100%",borderBottom:"1px solid ",borderColor:o.palette.divider,"& input":{borderRadius:4,backgroundColor:o.palette.background.paper,padding:8,transition:o.transitions.create(["border-color","box-shadow"]),border:"1px solid",borderColor:o.palette.primary.main,fontSize:14,"&:focus-visible":{boxShadow:o.customShadows.primary,borderColor:o.palette.primary.main}}})),fe=f(q)(({theme:o})=>({fontSize:13,width:"100%",textAlign:"left",marginBottom:8,color:o.palette.text.primary,fontWeight:600,"&:hover":{color:o.palette.primary.main},"&:focus-visible":{borderRadius:1,outline:`2px solid ${o.palette.secondary.dark}`,outlineOffset:2},"& span":{width:"100%"},"& svg":{width:16,height:16}}));function Se(){const[o,t]=h.useState(null),[r,a]=h.useState([A[1],A[11]]),[i,u]=h.useState([]),n=W(),b=s=>{u(r),t(s.currentTarget)},C=()=>{a(i),o&&o.focus(),t(null)},I=!!o,x=I?"github-label":void 0,S=`<StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
  <ClickAwayListener onClickAway={handleClose}>
    <Box sx={{ bgcolor: 'background.default' }}>
      <Box
        sx={{
          borderBottom: '1px solid ${n.palette.divider}',
          padding: '8px 10px',
          fontWeight: 600
        }}
      >
        Apply labels to this pull request
      </Box>
      <Autocomplete
        open
        multiple
        onClose={(event: ChangeEvent<{}>, reason: AutocompleteCloseReason) => {
          if (reason === 'escape') {
            handleClose();
          }
        }}
        value={pendingValue}
        onChange={(event, newValue, reason) => {
          if (event.type === 'keydown' && (event as KeyboardEvent).key === 'Backspace' && reason === 'removeOption') {
            return;
          }
          setPendingValue(newValue);
        }}
        disableCloseOnSelect
        PopperComponent={PopperComponent}
        renderTags={() => null}
        noOptionsText="No labels"
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Box
              component={TickCircle}
              sx={{ width: 17, height: 17, mr: '5px', ml: '-2px', mt: 0.25, color: 'success.main' }}
              style={{
                visibility: selected ? 'visible' : 'hidden'
              }}
            />
            <Box
              sx={{
                width: 14,
                height: 14,
                flexShrink: 0,
                borderRadius: '3px',
                mr: 1,
                mt: '2px'
              }}
              style={{ backgroundColor: option.color }}
            />
            <Box
              sx={{
                flexGrow: 1,
                '& span': {
                  color: theme.palette.text.primary
                }
              }}
            >
              {option.name}
              <br />
              <span>{option.description}</span>
            </Box>
            <Box
              component={CloseCircle}
              sx={{ opacity: 0.6, width: 18, height: 18, mt: 0.25, color: 'error.main' }}
              style={{
                visibility: selected ? 'visible' : 'hidden'
              }}
            />
          </li>
        )}
        options={[...labels].sort((a, b) => {
          // Display the selected labels first.
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
          return ai - bi;
        })}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <StyledInput ref={params.InputProps.ref} inputProps={params.inputProps} autoFocus placeholder="Filter labels" />
        )}
      />
    </Box>
  </ClickAwayListener>
</StyledPopper>`;return e.jsxs(c,{title:"GitHub's Picker",codeString:S,children:[e.jsxs(g,{sx:{width:221,fontSize:13},children:[e.jsxs(fe,{disableRipple:!0,"aria-describedby":x,onClick:b,sx:{justifyContent:"space-between","& span":{width:"auto"}},children:[e.jsx("span",{children:"Labels"}),e.jsx(_,{variant:"Bold"})]}),r.map((s,m)=>e.jsx(g,{sx:{mt:"3px",height:20,padding:".15em 4px",fontWeight:600,lineHeight:"15px",borderRadius:"2px"},style:{backgroundColor:s.color,color:n.palette.getContrastText(s.color)},children:s.name},m))]}),e.jsx(xe,{id:x,open:I,anchorEl:o,placement:"bottom-start",children:e.jsx(E,{onClickAway:C,children:e.jsxs(g,{sx:{bgcolor:"background.default"},children:[e.jsx(g,{sx:{borderBottom:`1px solid ${n.palette.divider}`,padding:"8px 10px",fontWeight:600},children:"Apply labels to this pull request"}),e.jsx(p,{open:!0,multiple:!0,onClose:(s,m)=>{m==="escape"&&C()},value:i,onChange:(s,m,y)=>{s.type==="keydown"&&s.key==="Backspace"&&y==="removeOption"||u(m)},disableCloseOnSelect:!0,PopperComponent:he,renderTags:()=>null,noOptionsText:"No labels",renderOption:(s,m,{selected:y})=>e.jsxs("li",{...s,children:[e.jsx(g,{component:$,sx:{width:17,height:17,mr:"5px",ml:"-2px",mt:.25,color:"success.main",visibility:y?"visible":"hidden"}}),e.jsx(g,{sx:{width:14,height:14,flexShrink:0,borderRadius:"3px",mr:1,mt:"2px",bgcolor:m.color}}),e.jsxs(g,{sx:{flexGrow:1,"& span":{color:n.palette.text.primary}},children:[m.name,e.jsx("br",{}),e.jsx("span",{children:m.description})]}),e.jsx(g,{component:L,sx:{opacity:.6,width:18,height:18,mt:.25,color:"error.main",visibility:y?"visible":"hidden"}})]}),options:[...A].sort((s,m)=>{let y=r.indexOf(s);y=y===-1?r.length+A.indexOf(s):y;let O=r.indexOf(m);return O=O===-1?r.length+A.indexOf(m):O,y-O}),getOptionLabel:s=>s.name,renderInput:s=>e.jsx(ye,{ref:s.InputProps.ref,inputProps:s.inputProps,autoFocus:!0,placeholder:"Filter labels"})})]})})})]})}const A=[{name:"good first issue",color:"#7057ff",description:"Good for newcomers"},{name:"help wanted",color:"#008672",description:"Extra attention is needed"},{name:"priority: critical",color:"#b60205",description:""},{name:"priority: high",color:"#d93f0b",description:""},{name:"priority: low",color:"#0e8a16",description:""},{name:"priority: medium",color:"#fbca04",description:""},{name:"status: can't reproduce",color:"#fec1c1",description:""},{name:"status: confirmed",color:"#215cea",description:""},{name:"status: duplicate",color:"#cfd3d7",description:"This issue or pull request already exists"},{name:"status: needs information",color:"#fef2c0",description:""},{name:"status: wont do/fix",color:"#eeeeee",description:"This will not be worked on"},{name:"type: bug",color:"#d73a4a",description:"Something isn't working"},{name:"type: discussion",color:"#d4c5f9",description:""},{name:"type: documentation",color:"#006b75",description:""},{name:"type: enhancement",color:"#84b6eb",description:""},{name:"type: epic",color:"#3e4b9e",description:"A theme of work that contain sub-tasks"},{name:"type: feature request",color:"#fbca04",description:"New feature or request"},{name:"type: question",color:"#d876e3",description:"Further information is requested"}];function we(){return e.jsxs(K,{children:[e.jsx(N,{title:"Autocomplete",caption:"The autocomplete is a normal text input enhanced by a panel of suggested options.",directory:"src/pages/components-overview/autocomplete",link:"https://mui.com/material-ui/react-autocomplete/"}),e.jsx(U,{children:e.jsxs(v,{container:!0,spacing:3,children:[e.jsx(v,{item:!0,xs:12,sm:6,children:e.jsxs(T,{spacing:3,children:[e.jsx(Y,{}),e.jsx(Z,{}),e.jsx(te,{}),e.jsx(re,{}),e.jsx(le,{}),e.jsx(ie,{}),e.jsx(pe,{})]})}),e.jsx(v,{item:!0,xs:12,sm:6,children:e.jsxs(T,{spacing:3,children:[e.jsx(de,{}),e.jsx(ue,{}),e.jsx(ce,{}),e.jsx(me,{}),e.jsx(be,{}),e.jsx(Se,{})]})})]})})]})}export{we as default};
