import{_ as T}from"./Cyrwt6k1.js";import{_ as j,a as P}from"./BakT6q3E.js";import{$ as b,S as F,a as A}from"./CtK9maNO.js";import{M}from"./DaF3RmwJ.js";import{N}from"./DZUg29AX.js";import{P as C}from"./bQ7CWoXC.js";import{A as V}from"./B2NdJyb9.js";import{l as I}from"./8zUmHKob.js";import{h as z,o as u,c as h,a as i,b as m,w as y,F as B,r as E,u as k,j as O,q as R,d as $,t as S,k as q,s as D,v as G,g as H}from"./BrTEBIdT.js";import{u as L}from"./BrV4IMCT.js";import"./D0Ig4Vrv.js";function W({swiper:t,extendParams:f,on:s}){f({parallax:{enabled:!1}});const n=(p,o)=>{const{rtl:d}=t,l=b(p),c=d?-1:1,_=l.attr("data-swiper-parallax")||"0";let a=l.attr("data-swiper-parallax-x"),e=l.attr("data-swiper-parallax-y");const x=l.attr("data-swiper-parallax-scale"),g=l.attr("data-swiper-parallax-opacity");if(a||e?(a=a||"0",e=e||"0"):t.isHorizontal()?(a=_,e="0"):(e=_,a="0"),a.indexOf("%")>=0?a=`${parseInt(a,10)*o*c}%`:a=`${a*o*c}px`,e.indexOf("%")>=0?e=`${parseInt(e,10)*o}%`:e=`${e*o}px`,typeof g<"u"&&g!==null){const w=g-(g-1)*(1-Math.abs(o));l[0].style.opacity=w}if(typeof x>"u"||x===null)l.transform(`translate3d(${a}, ${e}, 0px)`);else{const w=x-(x-1)*(1-Math.abs(o));l.transform(`translate3d(${a}, ${e}, 0px) scale(${w})`)}},r=()=>{const{$el:p,slides:o,progress:d,snapGrid:l}=t;p.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(c=>{n(c,d)}),o.each((c,_)=>{let a=c.progress;t.params.slidesPerGroup>1&&t.params.slidesPerView!=="auto"&&(a+=Math.ceil(_/2)-d*(l.length-1)),a=Math.min(Math.max(a,-1),1),b(c).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e=>{n(e,a)})})},v=(p=t.params.speed)=>{const{$el:o}=t;o.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(d=>{const l=b(d);let c=parseInt(l.attr("data-swiper-parallax-duration"),10)||p;p===0&&(c=0),l.transition(c)})};s("beforeInit",()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)}),s("init",()=>{t.params.parallax.enabled&&r()}),s("setTranslate",()=>{t.params.parallax.enabled&&r()}),s("setTransition",(p,o)=>{t.params.parallax.enabled&&v(o)})}const X=[{id:1,background:"/assets/imgs/works/full/1.jpg",caption:{subTitle:"Branding",title:"Retouch Photo",link:"/project1"}},{id:2,background:"/assets/imgs/works/full/2.jpg",caption:{subTitle:"Branding",title:"Earthmade Aroma box",link:"/project2"}},{id:3,background:"/assets/imgs/works/full/3.jpg",caption:{subTitle:"Branding",title:"Access Bank Rebranding",link:"/project3"}},{id:4,background:"/assets/imgs/works/full/4.jpg",caption:{subTitle:"Branding",title:"The joy of music",link:"/project4"}},{id:5,background:"/assets/imgs/works/full/5.jpg",caption:{subTitle:"Branding",title:"Blue Adobe MAX",link:"/project1"}},{id:6,background:"/assets/imgs/works/full/6.jpg",caption:{subTitle:"Branding",title:"Carved Wood",link:"/project2"}},{id:7,background:"/assets/imgs/works/full/vid.png",caption:{subTitle:"Branding",title:"Abstract Animation Video",link:"/project3"},videoSource:"/assets/imgs/works/full/vid.mp4"}],J={class:"full-showcase"},K={class:"swiper-container parallax-slider"},Q=["data-background"],U={class:"row"},Y={class:"col-lg-11 offset-lg-1"},Z={class:"caption"},aa={class:"sub-title mb-30","data-swiper-parallax":-1e3},ta=i("br",null,null,-1),ea=["href"],sa={"data-swiper-parallax":-2e3},ra={key:0,class:"video-container"},la={autoplay:"",loop:"",muted:""},ia=["src"],oa=H('<div class="swiper-controls"><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div></div><div class="swiper-pagination"></div>',2),na={__name:"Fullscreen",setup(t){const f={modules:[N,V,W,C,M],speed:1500,autoplay:{delay:5e3},mousewheel:!0,parallax:!0,loop:!0,onSwiper(s){for(let n=0;n<s.slides.length;n++)s.slides[n].querySelector(".bg-img").setAttribute("data-swiper-parallax",.75*s.width)},onResize(s){s.update()},pagination:{el:".full-showcase .parallax-slider .swiper-pagination",clickable:!0,renderBullet(s,n){return'<span class="'+n+'"><svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16"><circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"stroke-opacity="1" stroke-width="1px"></circle><circle cx="8" cy="8" r="3" fill="#FFF"></circle></svg></span>'}},navigation:{nextEl:".full-showcase .parallax-slider .swiper-button-next",prevEl:".full-showcase .parallax-slider .swiper-button-prev"}};return z(()=>{I()}),(s,n)=>(u(),h("header",J,[i("div",K,[m(k(A),D(G(f)),{default:y(()=>[(u(!0),h(B,null,E(k(X),r=>(u(),O(k(F),{key:r.id},{default:y(()=>[i("div",{class:"bg-img valign","data-background":r.background,"data-overlay-dark":"3"},[i("div",{class:R(`container ${r.videoSource?"ontop":""}`)},[i("div",U,[i("div",Y,[i("div",Z,[i("h6",aa,[$("© 2024 "),ta,$(" "+S(r.caption.subTitle),1)]),i("h1",null,[i("a",{href:r.caption.link,class:"animsition-link"},[i("span",sa,S(r.caption.title),1)],8,ea)])])])])],2),r.videoSource?(u(),h("div",ra,[i("video",la,[i("source",{src:r.videoSource,type:"video/mp4"},null,8,ia)])])):q("",!0)],8,Q)]),_:2},1024))),128))]),_:1},16),oa])]))}},wa={__name:"fullscreen",setup(t){return L({titleTemplate:"%s - Portfolio Fullscreen",bodyAttrs:{class:"main-bg"}}),(f,s)=>{const n=T,r=j,v=P,p=na;return u(),h(B,null,[m(n),m(r),m(v),m(p)],64)}}};export{wa as default};
