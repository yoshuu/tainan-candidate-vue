import{_ as v}from"./white-arrow.7de7e777.js";import{u as w}from"./index.ba348973.js";import{_ as b,r as o,o as i,c as S,w as g,a as c,b as d,d as e,n as W,e as y,u as z,p as I,f as M}from"./index.3ad74424.js";const l=t=>(I("data-v-b590fcb5"),t=t(),M(),t),k={class:"street-map-page"},x={class:"map-page"},B=l(()=>e("div",{class:"district-text-container"},[e("p",null,"\u9EDE\u64CA\u8DEF\u7DDA\u67E5\u770B\u6383\u8857\u7D00\u9304")],-1)),C=l(()=>e("div",{class:"white-arrow-container"},[e("img",{src:v,alt:""})],-1)),O=[B,C],R=["src"],N={__name:"RecordOfStreetMap",setup(t){const p=o(!0),r=o(!0);i(()=>{setTimeout(()=>{r.value=!1},5e3)}),i(()=>{u()});const{width:_,height:V}=w(),m=o(window.innerWidth),u=()=>{m.value<=576?s.value=13:s.value=14},s=o(""),f=S(()=>`https://tainan.olc.tw/lines.html#/zoom/${s.value}`);return g(_,(a,n)=>{a<=576?s.value=13:s.value=14}),(a,n)=>(c(),d("main",k,[e("div",x,[r.value?(c(),d("div",{key:0,class:W([{"play-animation":p.value},"street-instruct-sign"])},O,2)):y("",!0),e("div",{class:"street-map-container",onMouseenter:n[0]||(n[0]=(...h)=>a.disappeared&&a.disappeared(...h))},[e("iframe",{class:"street-map-iframe",src:z(f),frameborder:"0",seamless:"seamless"},null,8,R)],32)])]))}},$=b(N,[["__scopeId","data-v-b590fcb5"]]);export{$ as default};
