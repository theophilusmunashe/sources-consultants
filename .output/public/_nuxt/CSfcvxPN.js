import{_ as M}from"./Cyrwt6k1.js";import{_ as E,a as N}from"./BakT6q3E.js";import{i as L,$ as T,S as P,a as j}from"./CtK9maNO.js";import{K as G}from"./BQu_uEht.js";import{M as B}from"./DaF3RmwJ.js";import{N as R}from"./DZUg29AX.js";import{P as z}from"./bQ7CWoXC.js";import{l as K}from"./8zUmHKob.js";import{l as A,h as H,n as U,o as _,c as C,a as m,b as w,w as k,F as y,r as V,u as g,j as $,m as O,t as q,g as X}from"./BrTEBIdT.js";import{u as J}from"./BrV4IMCT.js";import"./D0Ig4Vrv.js";function F({swiper:e,extendParams:c,on:r}){c({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let b=!1,v=!1;e.thumbs={swiper:null};function u(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const s=t.clickedIndex,n=t.clickedSlide;if(n&&T(n).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let a;if(t.params.loop?a=parseInt(T(t.clickedSlide).attr("data-swiper-slide-index"),10):a=s,e.params.loop){let d=e.activeIndex;e.slides.eq(d).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,d=e.activeIndex);const p=e.slides.eq(d).prevAll(`[data-swiper-slide-index="${a}"]`).eq(0).index(),h=e.slides.eq(d).nextAll(`[data-swiper-slide-index="${a}"]`).eq(0).index();typeof p>"u"?a=h:typeof h>"u"?a=p:h-d<d-p?a=h:a=p}e.slideTo(a)}function f(){const{thumbs:t}=e.params;if(b)return!1;b=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(L(t.swiper)){const n=Object.assign({},t.swiper);Object.assign(n,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(n),v=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",u),!0}function o(t){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const n=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let a=1;const d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(a=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(a=1),a=Math.floor(a),s.slides.removeClass(d),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let i=0;i<a;i+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+i}"]`).addClass(d);else for(let i=0;i<a;i+=1)s.slides.eq(e.realIndex+i).addClass(d);const p=e.params.thumbs.autoScrollOffset,h=p&&!s.params.loop;if(e.realIndex!==s.realIndex||h){let i=s.activeIndex,l,I;if(s.params.loop){s.slides.eq(i).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,i=s.activeIndex);const S=s.slides.eq(i).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),x=s.slides.eq(i).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof S>"u"?l=x:typeof x>"u"?l=S:x-i===i-S?l=s.params.slidesPerGroup>1?x:i:x-i<i-S?l=x:l=S,I=e.activeIndex>e.previousIndex?"next":"prev"}else l=e.realIndex,I=l>e.previousIndex?"next":"prev";h&&(l+=I==="next"?p:-1*p),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(l)<0&&(s.params.centeredSlides?l>i?l=l-Math.floor(n/2)+1:l=l+Math.floor(n/2)-1:l>i&&s.params.slidesPerGroup,s.slideTo(l,t?0:void 0))}}r("beforeInit",()=>{const{thumbs:t}=e.params;!t||!t.swiper||(f(),o(!0))}),r("slideChange update resize observerUpdate",()=>{o()}),r("setTransition",(t,s)=>{const n=e.thumbs.swiper;!n||n.destroyed||n.setTransition(s)}),r("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||v&&t.destroy()}),Object.assign(e.thumbs,{init:f,update:o})}const D=[{id:1,background:"/assets/imgs/works/full/1.jpg",link:"/project1",text:{subtitle:"Digital Design",title:"Retouch Photo"}},{id:2,background:"/assets/imgs/works/full/2.jpg",link:"/project2",text:{subtitle:"Branding",title:"Earthmade Aroma"}},{id:3,background:"/assets/imgs/works/full/3.jpg",link:"/project3",text:{subtitle:"Branding",title:"Bank Rebranding"}},{id:4,background:"/assets/imgs/works/full/4.jpg",link:"/project4",text:{subtitle:"Product Design",title:"The joy of music"}},{id:5,background:"/assets/imgs/works/full/5.jpg",link:"/project1",text:{subtitle:"Digital Art",title:"Blue Adobe MAX"}}],Q={class:"half-slider"},W={class:"gallery-img"},Y=["data-background"],Z=["href"],ee={class:"gallery-text"},se={class:"text"},te={class:"f-bold"},ie=X('<div class="swiper-controls"><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div></div><div class="swiper-pagination"></div>',2),ae={__name:"CreativeSlider",setup(e){const c=A(null),r=A(null),b={modules:[B,F],onSwiper(u){r.value=u},spaceBetween:100,centeredSlides:!0,slidesPerView:2,touchRatio:.2,slideToClickedSlide:!0,loopedSlides:4,mousewheel:!0,speed:1500,breakpoints:{0:{spaceBetween:10,slidesPerView:1,centeredSlides:!1},640:{spaceBetween:30,slidesPerView:1,centeredSlides:!1},768:{spaceBetween:50,slidesPerView:1,centeredSlides:!1},1024:{spaceBetween:100,slidesPerView:2,centeredSlides:!0}}},v={modules:[R,G,B,z,F],onSwiper(u){c.value=u},spaceBetween:0,centeredSlides:!0,loopedSlides:4,mousewheel:!0,speed:1500,navigation:{nextEl:".half-slider .swiper-controls .swiper-button-next",prevEl:".half-slider .swiper-controls .swiper-button-prev"},pagination:{el:".half-slider .swiper-pagination",clickable:!0,renderBullet:function(u,f){return'<span class="'+f+'"><svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16"><circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"stroke-opacity="1" stroke-width="1px"></circle><circle cx="8" cy="8" r="3" fill="#FFF"></circle></svg></span>'}},keyboard:{enabled:!0},thumbs:{swiper:r.value}};return H(()=>{K()}),U([c,r],()=>{c.value&&r.value&&(c.value.on("slideChangeTransitionStart",function(){r.value.slideTo(c.value.activeIndex)}),r.value.on("transitionStart",function(){c.value.slideTo(r.value.activeIndex)}))}),(u,f)=>(_(),C("header",Q,[m("div",W,[w(g(j),O(v,{class:"swiper-container"}),{default:k(()=>[(_(!0),C(y,null,V(g(D),o=>(_(),$(g(P),{key:o.id},{default:k(()=>[m("div",{class:"bg-img","data-background":o.background,"data-overlay-dark":"3"},[m("a",{href:o.link,class:"animsition-link"},null,8,Z)],8,Y)]),_:2},1024))),128))]),_:1},16)]),m("div",ee,[w(g(j),O(b,{class:"swiper-container"}),{default:k(()=>[(_(!0),C(y,null,V(g(D),o=>(_(),$(g(P),{key:o.id},{default:k(()=>[m("div",se,[m("h6",null,[m("span",te,q(o.text.subtitle),1)]),m("h4",null,q(o.text.title),1)])]),_:2},1024))),128))]),_:1},16)]),ie]))}},be={__name:"half-slider",setup(e){return J({titleTemplate:"%s - Portfolio Creative Slider",bodyAttrs:{class:"main-bg"}}),(c,r)=>{const b=M,v=E,u=N,f=ae;return _(),C(y,null,[w(b),w(v),w(u),w(f)],64)}}};export{be as default};
