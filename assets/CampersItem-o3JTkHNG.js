import{u as e,t as i,S as z,r as x,b as E,a as L,j as t,s as o,c as B,d as I,e as G}from"./index-Do-HSHb3.js";const X=e.form`
    width: 360px;
`,Y=e.section`
    max-width: 888px;
`,Z=e.section`
    margin-top: 32px;
`,ee=e.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,te=e.h3`
    width: 360px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: ${i.color.dark};
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: ${i.border.lightGrey};
`,ie=e.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${i.color.grey};
    margin-bottom: 14px;
`,re=e.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${i.color.grey};
`,oe=e.fieldset`
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
`,se=e.input`
    width: 360px;
    border-radius: 10px;
    border: none;
    background: ${i.color.beige};
    padding: 18px;
`,ne=e.div`
    display: flex;
    flex-direction: column;
    height: 95px;
    width: 112px;
    align-items: center;
    justify-content:center;
    gap: 8px;
    border-radius: 10px;
    cursor: pointer;
`,ae=e.input`
    opacity: 0;
    position: absolute;
    cursor: pointer;
`,le=e.p`
    color: ${i.color.dark};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    text-align: center;
`,ce=e(z)`
    margin-top: 64px;
`,P=e.li`
    display: flex;
    gap: 24px;
    width: 100%;
    height: 358px;
    padding: 24px;
    border-radius: 20px;
    border: ${i.border.inputGrey};
    margin-bottom: 32px;
`,R=e.div`
    max-width: 290px;
    height: 310px;
    border-radius: 10px;
    overflow: hidden;
`,A=e.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`,H=e.div`
    width: 526px;
`,V=e.div`
    display: flex;
    gap: 12px;
    align-items: center;
`,D=e.div`
    display: flex;
    justify-content:space-between;
    margin-bottom: 8px;
`,h=e.h2`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${i.color.dark};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
`,K=e.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
`,O=e.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #475467;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 24px; 
`,_=e.li`
    color: ${i.color.dark};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    display: flex;
    align-items: center;
    border-radius: 100px;
    background: ${i.color.lightGrey};
    padding: 12px 18px;
`,q=e.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`,J=e.svg`
    margin-right: 8px;
    width: 20px;
    height: 20px;;
    stroke: ${r=>r.reverseStyle?"transparent":i.color.dark};
    fill: ${r=>r.reverseStyle?i.color.dark:"transparent"};
`,M=e.a`
    display: flex;
    gap: 4px;
    align-items: center;
    color: ${i.color.dark};
    line-height: 1.5;
    text-decoration-line: underline;
    cursor: pointer;
`,N=e.div`
    display: flex;
    gap: 4px;
    align-items: center;
    color: ${i.color.dark};
    line-height: 1.5;
`,Q=e.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`,U=r=>r.favorites,de=({camper:r})=>{const{gallery:g,name:l,location:f,price:b,description:m,adults:u,engine:v,details:w,transmission:y,rating:j,reviews:$}=r,[a,c]=x.useState(!1),d=E(),p=L(U);x.useEffect(()=>{p.includes(r)&&c(!0)},[r,p]);const S=[{name:"adults",label:`${u} adults`,icon:"people",reverseStyle:!0},{name:"transmission",label:`${y}`,icon:"automatic",reverseStyle:!1},{name:"engine",label:`${v}`,icon:"fuel",reverseStyle:!0},{name:"airConditioner",label:"AC",icon:"clima",reverseStyle:!0},{name:"kitchen",label:"Kitchen",icon:"kitchen",reverseStyle:!1},{name:"beds",label:`${w.beds} beds`,icon:"bed",reverseStyle:!1},{name:"TV",label:"TV",icon:"tv",reverseStyle:!1},{name:"shower",label:"Shower",icon:"shower",reverseStyle:!1}],k=s=>{d(a?I(s._id):G(s)),c(!a)};return t.jsxs(P,{children:[t.jsx(R,{children:t.jsx(A,{src:g[0],alt:l})}),t.jsxs(H,{children:[t.jsxs(D,{children:[t.jsx(h,{children:l}),t.jsxs(V,{children:[t.jsxs(h,{children:["€",b.toFixed(2)]}),t.jsx(Q,{onClick:()=>k(r),children:t.jsx("svg",{width:"24",height:"24",children:a?t.jsx("use",{fill:"transparent",stroke:`${i.color.dark}`,href:`${o}#fav`}):t.jsx("use",{fill:"transparent",stroke:`${i.color.dark}`,href:`${o}#nofav`})})})]})]}),t.jsxs(K,{children:[t.jsxs(M,{href:"",children:[t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${o}#star`})}),j,"(",$.length," Reviews)"]}),t.jsxs(N,{children:[t.jsx("svg",{width:"16",height:"16",fill:"transparent",stroke:`${i.color.dark}`,children:t.jsx("use",{href:`${o}#map-pin`})}),f]})]}),t.jsx(O,{children:m}),t.jsx(q,{children:S.map(s=>{const{name:n,label:C,icon:F,reverseStyle:T}=s;return(+r.details[n]>=1||r[n])&&t.jsxs(_,{children:[t.jsx(J,{reverseStyle:T,children:t.jsx("use",{href:`${o}#${F}`,alt:n})}),t.jsx("span",{children:C})]},n)})}),t.jsx(B,{children:"Show more"})]})]})};export{ne as C,X as F,ae as H,se as I,ee as L,ce as S,ie as T,le as a,re as b,Z as c,te as d,oe as e,Y as f,de as g,U as s};
