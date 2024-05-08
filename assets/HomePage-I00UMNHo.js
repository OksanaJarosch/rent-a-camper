import{u as t,t as i,L as n,j as e,S as o}from"./index-qx-mB2qL.js";const a=t.div`
    display: flex;
    justify-content: center;
    gap: 64px;
    padding: 20vh 64px 100px 64px;
`,r=t.div`
    max-width: 1100px;
    padding: 36px;
    background-color: ${i.color.transparentGrey};
    box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    font-size: 36px;
`,p=t.h1`
    position: relative;
    z-index: 10;
    display: inline;
    margin-bottom: 12px;
    font-size: 48px;
    letter-spacing: -1px;
    font-weight: 600;
    text-transform: uppercase;
    
    @media (min-width: ${i.breakpoint.md}) and (max-width: 909px) {
        font-size: 56px;
    }

    @media (min-width: 910px) {
        font-size: 72px;
    }
`,s=t.h2`
    display: inline;
    margin-bottom: 24px;
    margin-left: -4px;
    font-size: 42px;
    letter-spacing: -1px;
    font-weight: 200;

    @media (min-width: ${i.breakpoint.md}) and (max-width: 909px) {
        font-size: 56px;
    }

    @media (min-width: 910px) {
        font-size: 68px;
    }
`,x=t.h2`
    margin-bottom: 36px;
    font-size: 24px;
    letter-spacing: -1px;
    font-weight: 500;
`,d=t.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 44px;
`,c=t(n)`
    color: inherit;
    font-size: 24px;
`,m=()=>e.jsxs(r,{children:[e.jsx(s,{children:"Welcome to "}),e.jsx(p,{children:"Campers"}),e.jsx(x,{children:"your premier gateway to the perfect camper for your next adventure!"}),e.jsx(d,{children:" Dreaming of a nature escape, a road trip through breathtaking landscapes, or a cozy weekend by the lake? At Campers, you'll find a diverse selection of campers that cater to every adventure. It’s time to hit the road – your camper is waiting!"}),e.jsx(o,{children:e.jsx(c,{to:"/catalog",children:"Find your camper"})})]}),l="/rent-a-camper/assets/camper_optimized-aREPop1J.webp",h=t.div`
min-height: 100vh;
background-image: url(${l});
    background-size: 45%;
    background-position: 130% calc(100% + 200px);
    background-repeat: no-repeat;
`;function f(){return e.jsx(h,{children:e.jsx(a,{children:e.jsx(m,{})})})}export{f as default};
