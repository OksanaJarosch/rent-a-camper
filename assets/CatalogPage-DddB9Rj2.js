import{u as t,t as i,j as e,C as p,S as s}from"./index-qPVVeVrg.js";const c=t.form`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 360px;
`,x=t.section`
    width: 888px;
`,a=t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,o=t.h3`
    width: 360px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: ${i.color.dark};
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: ${i.border.lightGrey};
`,l=t.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${i.color.grey};
    margin-bottom: 14px;
`,d=t.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${i.color.grey};
`,r=t.fieldset`
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
`,h=t.input`
    width: 360px;
    border-radius: 10px;
    border: none;
    background: ${i.color.beige};
    padding: 18px;
`,n=t.div`
    display: flex;
    flex-direction: column;
    height: 95px;
    padding: 17px 18px;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    border: ${i.border.inputGrey};
`,m=()=>e.jsxs(p,{children:[e.jsxs(c,{type:"submit",children:[e.jsxs(a,{children:[e.jsx(d,{for:"location",children:"Location"}),e.jsx(h,{type:"name",id:"location",placeholder:"Please enter location"})]}),e.jsxs("div",{children:[e.jsx(l,{children:"Filters"}),e.jsx(o,{children:"Vehicle equipment"}),e.jsxs(r,{children:[e.jsx(n,{type:"checkbox",name:"equipment"}),e.jsx(n,{type:"checkbox",name:"equipment"}),e.jsx(n,{type:"checkbox",name:"equipment"}),e.jsx(n,{type:"checkbox",name:"equipment"}),e.jsx(n,{type:"checkbox",name:"equipment"})]})]}),e.jsxs("div",{children:[e.jsx(o,{children:"Vehicle type"}),e.jsxs(r,{children:[e.jsx("input",{type:"radio",name:"type"}),e.jsx("input",{type:"radio",name:"type"}),e.jsx("input",{type:"radio",name:"type"})]})]}),e.jsx(s,{children:"Search"})]}),e.jsx(x,{children:"Right Section"})]});function j(){return e.jsx(m,{})}export{j as default};
