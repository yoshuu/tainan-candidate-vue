import{_ as i}from"./white-arrow.7de7e777.js";import{_ as p,r as o,o as c,c as r,a as e,n as d,b as l,p as m,d as u}from"./index.90abe7e7.js";const t=s=>(m("data-v-856e6c41"),s=s(),u(),s),h={class:"street-map-page"},f={class:"map-page"},v=t(()=>e("div",{class:"district-text-container"},[e("p",null,"\u9EDE\u64CA\u8DEF\u7DDA\u67E5\u770B\u6383\u8857\u7D00\u9304")],-1)),S=t(()=>e("div",{class:"white-arrow-container"},[e("img",{src:i,alt:""})],-1)),g=[v,S],w=t(()=>e("iframe",{class:"street-map-iframe",src:"https://tainan.olc.tw/lines.html",frameborder:"0",seamless:"seamless"},null,-1)),x=[w],y={__name:"RecordOfStreetMap",setup(s){const n=o(!0),a=o(!0),_=()=>{setTimeout(()=>{a.value=!1},5e3)};return(I,M)=>(c(),r("main",h,[e("div",f,[a.value?(c(),r("div",{key:0,class:d([{"play-animation":n.value},"street-instruct-sign"])},g,2)):l("",!0),e("div",{class:"street-map-container",onMouseenter:_},x,32)])]))}},O=p(y,[["__scopeId","data-v-856e6c41"]]);export{O as default};