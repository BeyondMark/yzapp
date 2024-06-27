"use strict";
var r = require("~/r");
r(
  "oDak",
  Object.assign({}, require("~/v.js").modules, {
    oDak: function (e, t, i) {
      i.r(t);
      var l = i("9ZMt"),
        a = i("R7Zb"),
        n = i("/XVY"),
        o = Object(n.a)({
          template: { default: "normal" },
          title: { default: "" },
          titleFontSize: { default: 16 },
          titleFontWeight: { default: 500 },
          titleColor: { default: "#323233" },
          desc: { type: [String, Object], default: "" },
          descFontSize: { default: 12 },
          descFontWeight: { default: 400 },
          descColor: { default: "#969799" },
          bgColor: { default: "#fff" },
          textAlign: { default: "left" },
          showDivider: { default: !1 },
          showLink: { default: !1 },
          link: { default: () => ({}) },
          linkType: { default: 1 },
          linkText: { default: "查看更多" },
          linkVerticalAlign: { default: "top" },
          wxLinkType: { default: "follow" },
          pageMargin: { default: 0 },
          linkColor: {},
          linkExtraStyle: {},
          linkFontSize: {},
          titleLines: {},
          descLines: {},
          descLineHeight: {},
        }),
        { useTpx: u } = l.default.style,
        d = {
          mixins: [Object(a.a)({ optDesc: o })],
          props: { needSubscribeMessage: { type: Boolean, default: !1 } },
          computed: {
            wrapStyle() {
              if (this.opt.pageMargin)
                return { margin: "0 " + u(this.pageMargin) };
            },
          },
          methods: {
            handleClick() {
              var { link: e, template: t, wxLinkType: i } = this.opt,
                { linkType: l } = e || {};
              if (e && ("wx" !== t || "follow" !== i))
                return !this.needSubscribeMessage ||
                  ("platform_coupon" !== l && "coupon" !== l)
                  ? void this.$emit("jumpToLink", e)
                  : this.$emit("handleCouponClick", {
                      windowType: "micro_dc_link_coupon",
                      subscribeType: "优惠券跳链",
                      next: () => {
                        this.$emit("jumpToLink", e);
                      },
                    });
            },
          },
          ud: !0,
        };
      t.default = l.default.component(d);
    },
  })
);
