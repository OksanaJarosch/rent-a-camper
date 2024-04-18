import{u as e,t as i,S as u,r as f,b as L,a as T,j as t,s as o,d as I,c as A}from"./index-CeH8dnYf.js";const W=e.form`
    width: 360px;
`,X=e.section`
    max-width: 888px;
`,Y=e.section`
    margin-top: 32px;
`,Z=e.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,ee=e.h3`
    width: 360px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: ${i.color.dark};
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: ${i.border.lightGrey};
`,te=e.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${i.color.grey};
    margin-bottom: 14px;
`,ie=e.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${i.color.grey};
`,re=e.fieldset`
    border: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
`,oe=e.input`
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
`,se=e.input`
    opacity: 0;
    position: absolute;
    cursor: pointer;
`,ae=e.p`
    color: ${i.color.dark};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    text-align: center;
`,le=e(u)`
    margin-top: 64px;
`,B=e.li`
    display: flex;
    gap: 24px;
    width: 100%;
    height: 358px;
    padding: 24px;
    border-radius: 20px;
    border: ${i.border.inputGrey};
    margin-bottom: 32px;
`,G=e.div`
    max-width: 290px;
    height: 310px;
    border-radius: 10px;
    overflow: hidden;
`,P=e.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`,R=e.div`
    width: 526px;
`,H=e.div`
    display: flex;
    gap: 12px;
    align-items: center;
`,D=e.div`
    display: flex;
    justify-content:space-between;
    margin-bottom: 8px;
`,m=e.h2`
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
`,U=r=>r.favorites,ce=({camper:r})=>{const{gallery:b,name:c,location:v,price:$,description:j,adults:d,engine:p,details:n,transmission:w,rating:y,reviews:k}=r,[a,x]=f.useState(!1),h=L(),g=T(U);f.useEffect(()=>{g.includes(r)&&x(!0)},[r,g]);const S=[{name:`${d}`,label:`${d} adults`,icon:"people",reverseStyle:!0},{name:`${w.authomatic}`,label:"Automatic",icon:"automatic",reverseStyle:!1},{name:`${p}`,label:`${p}`,icon:"fuel",reverseStyle:!0},{name:`${n.airConditioner}`,label:"AC",icon:"clima",reverseStyle:!0},{name:`${n.kitchen}`,label:"Kitchen",icon:"kitchen",reverseStyle:!1},{name:`${n.beds}`,label:`${n.beds} beds`,icon:"bed",reverseStyle:!1}],C=s=>{h(a?I(s._id):A(s)),x(!a)};return t.jsxs(B,{children:[t.jsx(G,{children:t.jsx(P,{src:b[0],alt:c})}),t.jsxs(R,{children:[t.jsxs(D,{children:[t.jsx(m,{children:c}),t.jsxs(H,{children:[t.jsxs(m,{children:["€",$.toFixed(2)]}),t.jsx(Q,{onClick:()=>C(r),children:t.jsx("svg",{width:"24",height:"24",children:a?t.jsx("use",{fill:"transparent",stroke:`${i.color.dark}`,href:`${o}#fav`}):t.jsx("use",{fill:"transparent",stroke:`${i.color.dark}`,href:`${o}#nofav`})})})]})]}),t.jsxs(K,{children:[t.jsxs(M,{href:"",children:[t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${o}#star`})}),y,"(",k.length," Reviews)"]}),t.jsxs(N,{children:[t.jsx("svg",{width:"16",height:"16",fill:"transparent",stroke:`${i.color.dark}`,children:t.jsx("use",{href:`${o}#map-pin`})}),v]})]}),t.jsx(O,{children:j}),t.jsx(q,{children:S.map(s=>{const{name:l,label:F,icon:z,reverseStyle:E}=s;return l&&t.jsxs(_,{children:[t.jsx(J,{reverseStyle:E,children:t.jsx("use",{href:`${o}#${z}`,alt:l})}),t.jsx("span",{children:F})]},l)})}),t.jsx(u,{children:"Show more"})]})]})};export{ne as C,W as F,se as H,oe as I,Z as L,le as S,te as T,ae as a,ie as b,Y as c,ee as d,re as e,X as f,ce as g,U as s};
