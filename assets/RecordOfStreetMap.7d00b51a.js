import{_ as v}from"./white-arrow.7de7e777.js";import{u as w}from"./index.38dc759f.js";import{_ as S,r as o,o as i,c as g,w as W,a as d,b as c,d as e,n as b,e as y,u as z,p as I,f as M}from"./index.5d378a41.js";const l=t=>(I("data-v-e8d3da3b"),t=t(),M(),t),k={class:"street-map-page"},x={class:"map-page"},B=l(()=>e("div",{class:"district-text-container"},[e("p",null,"\u9EDE\u64CA\u8DEF\u7DDA\u67E5\u770B\u6383\u8857\u7D00\u9304")],-1)),C=l(()=>e("div",{class:"white-arrow-container"},[e("img",{src:v,alt:""})],-1)),O=[B,C],R=["src"],N={__name:"RecordOfStreetMap",setup(t){const p=o(!0),r=o(!0);i(()=>{setTimeout(()=>{r.value=!1},5e3)}),i(()=>{u()});const{width:_,height:V}=w(),m=o(window.innerWidth),u=()=>{m.value<=576?s.value=13:s.value=14},s=o(""),h=g(()=>`https://tainan.olc.tw/lines.html#/zoom/${s.value}`);return W(_,(a,n)=>{a<=576?s.value=13:s.value=14}),(a,n)=>(d(),c("main",k,[e("div",x,[r.value?(d(),c("div",{key:0,class:b([{"play-animation":p.value},"street-instruct-sign"])},O,2)):y("",!0),e("div",{class:"street-map-container",onMouseenter:n[0]||(n[0]=(...f)=>a.disappeared&&a.disappeared(...f))},[e("iframe",{class:"street-map-iframe",src:z(h),frameborder:"0",seamless:"seamless"},null,8,R)],32)])]))}},$=S(N,[["__scopeId","data-v-e8d3da3b"]]);export{$ as default};