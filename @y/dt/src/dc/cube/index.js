"use strict";
var r = require("~/r");
r(
  "r5LL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    r5LL: function (e, t, i) {
      i.r(t);
      var a = i("Fcif"),
        r = i("9ZMt"),
        g = i("mztD"),
        u = i("EqB2"),
        s = i("2Dtx"),
        n = i("/XVY"),
        o = Object(n.a)({
          row: { default: 1 },
          col: { default: 2 },
          imgs: { default: () => [] },
          pageMargin: { default: 0 },
          imgMargin: { default: 0 },
          isCustom: { default: !1 },
          extra: { default: () => ({}) },
        }),
        m = i("K3Aj"),
        { useTpx: h } = r.default.style,
        c = {
          mixins: [Object(u.a)({ optDesc: o })],
          props: {
            needSubscribeMessage: { type: Boolean, default: !1 },
            extra: { type: Object, default: () => ({}) },
          },
          logicData: () => ({ blockWidth: 0, cubeHeight: 0 }),
          computed: {
            cubeStyle() {
              var { imgMargin: e, pageMargin: t } = this.opt,
                i = Object(m.a)() + e - 2 * t,
                a = this.getCubeHeight();
              return Object(s.a)({
                margin: "-" + h(this.opt.imgMargin / 2),
                width: "" + h(i),
                height: "" + h(a),
              });
            },
            cubeImgs() {
              var { opt: e } = this,
                { imgs: t, isCustom: i, imgMargin: r, pageMargin: u } = e,
                n = this.getCubeWidth(),
                o = this.getCubeHeight();
              return t.map((e) => {
                var t = n * e.x + u,
                  m = n * e.y,
                  c = i ? o - r : n * e.height - r,
                  d = n * e.width - r,
                  { imageUrl: l } = e;
                l && (l = Object(g.a)(e.imageUrl, "!730x0.jpg"));
                var p = Object(s.a)({
                  left: h(t),
                  top: h(m),
                  height: h(c),
                  width: h(d),
                  margin: h(r / 2),
                });
                return Object(a.a)({}, e, { imageUrl: l, style: p });
              });
            },
          },
          mounted() {},
          methods: {
            handleClick(e) {
              var { linkType: t } = e;
              if (
                this.needSubscribeMessage &&
                ("platform_coupon" === t || "coupon" === t)
              )
                return this.$emit("handleCouponClick", {
                  windowType: "micro_dc_link_coupon",
                  subscribeType: "优惠券跳链",
                  next: () => {
                    this.$emit("jumpToLink", e);
                  },
                });
              this.$emit("jumpToLink", e);
            },
            getCubeWidth() {
              var { imgMargin: e, col: t, pageMargin: i } = this.opt;
              return (Object(m.a)() + e - 2 * i) / t;
            },
            getCubeHeight() {
              var { imgMargin: e, isCustom: t, row: i, imgs: a } = this.opt,
                r = a[0] || {},
                g = this.getCubeWidth();
              return t && r.imageWidth && r.imageHeight
                ? (r.imageHeight / r.imageWidth) * (g - e) + e
                : g * i;
            },
          },
          ud: !0,
        };
      t.default = r.default.component(c);
    },
  })
);
