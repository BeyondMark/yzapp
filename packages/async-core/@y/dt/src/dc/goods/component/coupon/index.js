"use strict";
var r = require("~/r");
r(
  "A/cc",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "A/cc": function (t, e, o) {
        o.r(e);
        var i = o("Y8Qh"),
          r = o("DxHQ"),
          p = o("EqB2"),
          s = 1,
          u = 2,
          c = 3,
          a = "1-1",
          l = "3-4",
          n = {
            mixins: [Object(p.a)({ optDesc: r.a })],
            computed: {
              verticalClass() {
                return this.layout === c ? "vertical-long" : "";
              },
              isHorizontalLayout() {
                return this.layout === s;
              },
              layout() {
                var { type: t } = this.opt;
                if ("waterfall" === t) return u;
                var e = !!this.opt.priceOpt || !!this.opt.btnOpt,
                  { ratio: o } = this.opt.imgOpt,
                  i = !!this.opt.titleOpt,
                  r = !!this.opt.subTitleOpt;
                return o === l
                  ? c
                  : o === a
                  ? r + i + e > 1
                    ? c
                    : u
                  : r + i + e > 1
                  ? u
                  : s;
              },
              threshold() {
                var { threshold: t } = this.opt.couponOpt,
                  e = Number(t);
                return 0 === e ? "满任意金额可用" : "满" + e + "元使用";
              },
              couponValidDesc() {
                return Object(i.a)(this.opt.couponOpt);
              },
            },
            methods: {
              handleClick() {
                var { couponOpt: { id: t, type: e } = {} } = this.opt;
                this.$emit("item-click", {
                  type: "coupon",
                  link_id: t,
                  coupon_type: e,
                });
              },
            },
            ud: !0,
          },
          h = o("9ZMt");
        e.default = h.default.component(n);
      },
    }
  )
);
