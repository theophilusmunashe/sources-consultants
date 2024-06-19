import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { onUnmounted, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { a as _imports_0 } from './virtual_public-BFwKEG61.mjs';

const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["borderBottom"],
  setup(__props) {
    const handleScroll = () => {
      const menu = (void 0).querySelector(".topnav");
      if ((void 0).scrollY > 100) {
        menu.classList.add("nav-scroll");
      } else {
        menu.classList.remove("nav-scroll");
      }
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "navi",
        class: ["topnav blur", { "bord-thin-bottom": __props.borderBottom }]
      }, _attrs))}><div class="container"><div class="${ssrRenderClass(`logo icon-img-${__props.borderBottom ? "100" : "90"}`)}">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="menu-icon cursor-pointer"><span class="text"><span class="word">Menu</span></span><span class="icon"><i></i><i></i></span></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hamenu valign" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8"><div class="menu-links"><ul class="main-menu rest"><li><div class="o-hidden"><span class="link dmenu"><span class="nm">01.</span>Home </span></div><div class="sub-menu"><ul class="rest"><li><div class="o-hidden"><span class="sub-link back"><i class="pe-7s-angle-left"></i> Go Back</span></div></li></ul><ul class="rest"><li><div class="o-hidden"><a href="/creative-agency" class="sub-link animsition-link">Creative Agency</a></div></li><li><div class="o-hidden"><a href="/creative-portfolio" class="sub-link animsition-link">Creative Portfolio</a></div></li><li><div class="o-hidden"><a href="/landing" class="sub-link animsition-link">Home Landing</a></div></li></ul></div></li><li><div class="o-hidden"><a href="/about" class="link animsition-link"><span class="nm">02.</span>About</a></div></li><li><div class="o-hidden"><span class="link dmenu"><span class="nm">03.</span>Portfolio </span></div><div class="sub-menu"><ul class="rest"><li><div class="o-hidden"><span class="sub-link back"><i class="pe-7s-angle-left"></i> Go Back</span></div></li></ul><div class="row"><div class="col-md-6"><ul class="rest"><li><div class="o-hidden"><a href="/fullscreen" class="sub-link animsition-link">Fullscreen Slider</a></div></li><li><div class="o-hidden"><a href="/carousel-slider" class="sub-link animsition-link">Carousel Slider</a></div></li><li><div class="o-hidden"><a href="/half-slider" class="sub-link animsition-link">Creative Slider</a></div></li><li><div class="o-hidden"><a href="/interactive-full" class="sub-link animsition-link">Interactive Full</a></div></li><li><div class="o-hidden"><a href="/interactive-center" class="sub-link animsition-link">Interactive Center</a></div></li></ul></div><div class="col-md-6"><ul class="rest"><li><div class="o-hidden"><a href="/interactive-inline" class="sub-link animsition-link">Interactive Inline</a></div></li><li><div class="o-hidden"><a href="/interactive-vertical" class="sub-link animsition-link">Interactive Vertical</a></div></li><li><div class="o-hidden"><a href="/portfolio-fixed-text" class="sub-link animsition-link">Creative Portfolio</a></div></li><li><div class="o-hidden"><a href="/portfolio-grid" class="sub-link animsition-link">Portfolio Grid</a></div></li><li><div class="o-hidden"><a href="/portfolio-grid-classic" class="sub-link animsition-link">Portfolio Classic</a></div></li></ul></div></div></div></li><li><div class="o-hidden"><a href="/blog" class="link animsition-link"><span class="nm">04.</span>Stories</a></div></li><li><div class="o-hidden"><a href="/contact" class="link animsition-link"><span class="nm">05.</span>Contact</a></div></li></ul></div></div><div class="col-lg-4 valign"><div class="cont-info"><div class="item mb-50"><h6 class="text-u fw-600 mb-20">Base</h6><p class="fw-400 fz-18">Bes\xF2s 1, 08174 Sant Cugat del Vall\xE8s, Barcelona</p></div><div class="item mb-50"><h6 class="text-u fw-600 mb-20">How to Connect</h6><p class="fw-400 fz-18">+2 456 34324 45</p><p class="fw-400 fz-18">hello@Bayone.com</p></div><div class="bottom"><h6 class="text-u fw-600 mb-20">Follow Us</h6><ul class="rest social-text d-flex fz-13"><li class="mr-20"><a href="/#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mr-20"><a href="/#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mr-20"><a href="/#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="/#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Menu-D6Dz6q5o.mjs.map