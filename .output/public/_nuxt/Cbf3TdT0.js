const i=e=>{let t=0,n=0;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:n}};class l{constructor(t){this.DOM={el:t},this.DOM.reveal=document.createElement("div"),this.DOM.reveal.className="hover-reveal",this.DOM.reveal.innerHTML=`<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`,this.DOM.el.appendChild(this.DOM.reveal),this.DOM.revealInner=this.DOM.reveal.querySelector(".hover-reveal__inner"),this.DOM.revealInner.style.overflow="hidden",this.DOM.revealImg=this.DOM.revealInner.querySelector(".hover-reveal__img"),this.initEvents()}initEvents(){this.positionElement=t=>{const n=i(t),s={left:document.body.scrollLeft+document.documentElement.scrollLeft,top:document.body.scrollTop+document.documentElement.scrollTop};this.DOM.reveal.style.top=`${n.y+20-s.top}px`,this.DOM.reveal.style.left=`${n.x+20-s.left}px`},this.mouseenterFn=t=>{this.positionElement(t),this.showImage()},this.mousemoveFn=t=>requestAnimationFrame(()=>{this.positionElement(t)}),this.mouseleaveFn=()=>{this.hideImage()},this.DOM.el.addEventListener("mouseenter",this.mouseenterFn),this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}showImage(){TweenMax.killTweensOf(this.DOM.revealInner),TweenMax.killTweensOf(this.DOM.revealImg),this.tl=new TimelineMax({onStart:()=>{this.DOM.reveal.style.opacity=1,TweenMax.set(this.DOM.el,{zIndex:1e3})}}).add("begin").add(new TweenMax(this.DOM.revealInner,.2,{ease:Sine.easeOut,startAt:{x:"-100%"},x:"0%"}),"begin").add(new TweenMax(this.DOM.revealImg,.2,{ease:Sine.easeOut,startAt:{x:"100%"},x:"0%"}),"begin")}hideImage(){TweenMax.killTweensOf(this.DOM.revealInner),TweenMax.killTweensOf(this.DOM.revealImg),this.tl=new TimelineMax({onStart:()=>{TweenMax.set(this.DOM.el,{zIndex:999})},onComplete:()=>{TweenMax.set(this.DOM.el,{zIndex:""}),TweenMax.set(this.DOM.reveal,{opacity:0})}}).add("begin").add(new TweenMax(this.DOM.revealInner,.2,{ease:Sine.easeOut,x:"100%"}),"begin").add(new TweenMax(this.DOM.revealImg,.2,{ease:Sine.easeOut,x:"-100%"}),"begin")}}export{l as H};
