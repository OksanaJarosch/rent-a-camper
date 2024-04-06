import{u as o,t as i,j as e,s as C,r as b,C as y,S as w}from"./index-Bc_QwgBQ.js";const v=o.form`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 360px;
`,S=o.section`
    width: 888px;
`,$=o.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,g=o.h3`
    width: 360px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: ${i.color.dark};
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: ${i.border.lightGrey};
`,R=o.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${i.color.grey};
    margin-bottom: 14px;
`,L=o.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${i.color.grey};
`,m=o.fieldset`
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
`,T=o.input`
    width: 360px;
    border-radius: 10px;
    border: none;
    background: ${i.color.beige};
    padding: 18px;
`,V=o.div`
    display: flex;
    flex-direction: column;
    height: 95px;
    width: 112px;
    align-items: center;
    justify-content:center;
    gap: 8px;
    border-radius: 10px;
    cursor: pointer;
`,z=o.input`
    opacity: 0;
    position: absolute;
`,F=o.p`
    color: ${i.color.dark};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    text-align: center;
`,f=({label:a,name:l,icon:d,onChange:h,checked:s,type:r})=>{const x={border:s?`${i.border.orange}`:`${i.border.inputGrey}`},p={stroke:r==="checkbox"?`${i.color.dark}`:"transparent",fill:r==="checkbox"?"transparent":`${i.color.dark}`};return e.jsxs(V,{style:x,onClick:()=>h(l),children:[e.jsx(z,{type:r,checked:s,readOnly:!0}),e.jsx("svg",{width:"32",height:"32",style:p,children:e.jsx("use",{href:`${C}#${d}`,alt:l})}),e.jsx(F,{children:a})]})},A=()=>{const[a,l]=b.useState([]),[d,h]=b.useState(null),s=[{name:"airConditioner",label:"AC",icon:"clima"},{name:"transmission",label:"Automatic",icon:"automatic"},{name:"kitchen",label:"Kitchen",icon:"kitchen"},{name:"TV",label:"TV",icon:"tv"},{name:"bathroom",label:"Shower/WC",icon:"shower"}],r=[{name:"van",label:"Van",icon:"van"},{name:"integrated",label:"Fully Integrated",icon:"fully"},{name:"alcove",label:"Alcove",icon:"alcove"}],x=t=>{l(n=>n.includes(t)?n.filter(c=>c!==t):[...n,t])},p=t=>{h(n=>n===t?null:t)},j=t=>a.includes(t),k=t=>d===t;return e.jsxs(y,{children:[e.jsxs(v,{type:"submit",children:[e.jsxs($,{children:[e.jsx(L,{for:"location",children:"Location"}),e.jsx(T,{type:"name",id:"location",placeholder:"Please enter location"})]}),e.jsxs("div",{children:[e.jsx(R,{children:"Filters"}),e.jsx(g,{children:"Vehicle equipment"}),e.jsx(m,{children:s.map(t=>{const{name:n,label:c,icon:u}=t;return e.jsx(f,{label:c,name:n,icon:u,onChange:x,checked:j(n),type:"checkbox"},n)})})]}),e.jsxs("div",{children:[e.jsx(g,{children:"Vehicle type"}),e.jsx(m,{children:r.map(t=>{const{name:n,label:c,icon:u}=t;return e.jsx(f,{label:c,name:n,icon:u,onChange:p,checked:k(n),type:"radio"},n)})})]}),e.jsx(w,{children:"Search"})]}),e.jsx(S,{children:"Right Section"})]})};function q(){return e.jsx(A,{})}export{q as default};
