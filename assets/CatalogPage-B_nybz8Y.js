import{u as t,t as n,j as e,s as u,r as b,C as g,S as m}from"./index-2cRyHzjK.js";const f=t.form`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 360px;
`,j=t.section`
    width: 888px;
`,y=t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,h=t.h3`
    width: 360px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: ${n.color.dark};
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: ${n.border.lightGrey};
`,C=t.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${n.color.grey};
    margin-bottom: 14px;
`,k=t.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${n.color.grey};
`,p=t.fieldset`
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
`,w=t.input`
    width: 360px;
    border-radius: 10px;
    border: none;
    background: ${n.color.beige};
    padding: 18px;
`,$=t.div`
    display: flex;
    flex-direction: column;
    height: 95px;
    width: 112px;
    align-items: center;
    justify-content:center;
    gap: 8px;
    border-radius: 10px;
    cursor: pointer;
`,S=t.input`
    opacity: 0;
    position: absolute;
`,v=t.p`
    color: ${n.color.dark};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
`,L=({label:c,name:r,icon:l,onChange:a,checked:s})=>{const o={border:s?`${n.border.orange}`:`${n.border.inputGrey}`};return e.jsxs($,{style:o,onClick:()=>a(r),children:[e.jsx(S,{type:"checkbox",checked:s,readOnly:!0}),e.jsx("svg",{width:"32",height:"32",stroke:"#101828",fill:"transparent",children:e.jsx("use",{href:`${u}#${l}`,alt:r})}),e.jsx(v,{children:c})]})},z=()=>{const[c,r]=b.useState([]),l=[{name:"airConditioner",label:"AC",icon:"clima"},{name:"transmission",label:"Automatic",icon:"automatic"},{name:"kitchen",label:"Kitchen",icon:"kitchen"},{name:"TV",label:"TV",icon:"tv"},{name:"bathroom",label:"Shower/WC",icon:"shower"}],a=o=>{r(i=>i.includes(o)?i.filter(d=>d!==o):[...i,o])},s=o=>c.includes(o);return e.jsxs(g,{children:[e.jsxs(f,{type:"submit",children:[e.jsxs(y,{children:[e.jsx(k,{for:"location",children:"Location"}),e.jsx(w,{type:"name",id:"location",placeholder:"Please enter location"})]}),e.jsxs("div",{children:[e.jsx(C,{children:"Filters"}),e.jsx(h,{children:"Vehicle equipment"}),e.jsx(p,{children:l.map(o=>{const{name:i,label:d,icon:x}=o;return e.jsx(L,{label:d,name:i,icon:x,onChange:a,checked:s(i)},i)})})]}),e.jsxs("div",{children:[e.jsx(h,{children:"Vehicle type"}),e.jsxs(p,{children:[e.jsx("input",{type:"radio",name:"type"}),e.jsx("input",{type:"radio",name:"type"}),e.jsx("input",{type:"radio",name:"type"})]})]}),e.jsx(m,{children:"Search"})]}),e.jsx(j,{children:"Right Section"})]})};function V(){return e.jsx(z,{})}export{V as default};
