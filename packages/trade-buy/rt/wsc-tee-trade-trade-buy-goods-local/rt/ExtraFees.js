"use strict";
var r = require("~/r");
r(
  "uEbj",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      uEbj: function (e, t, r) {
        r.r(t);
        var s = r("Fcif"),
          o = r("YeA1"),
          a = r("oULq"),
          p = {
            data: () => ({
              pay: { extraFees: [] },
              popupShow: {},
              themeColors: {},
            }),
            computed: {
              show() {
                var e, t;
                return (
                  (null == (e = this.pay) || null == (t = e.extraFees)
                    ? void 0
                    : t.length) || !0
                );
              },
              extraFees() {
                var { pay: e } = this,
                  { extraFees: t = [] } = e;
                return t.map((e) =>
                  Object(s.a)({}, e, {
                    formatPrice: this.formatPrice(e.realPay),
                    showTips: a.a.includes(e.name),
                  })
                );
              },
            },
            created() {
              Object(o.b)(this, ["pay", "themeColors"]);
            },
            methods: {
              formatPrice: (e) =>
                null === e ? "" : "￥" + (Math.abs(e) / 100).toFixed(2),
              popupToggle(e) {
                Object.hasOwnProperty.call(this.popupShow, e)
                  ? this.$set(this.popupShow, e, !this.popupShow[e])
                  : this.$set(this.popupShow, e, !1);
              },
            },
            ud: !0,
          },
          u = r("9ZMt");
        t.default = u.default.component(p);
      },
    }
  )
);
