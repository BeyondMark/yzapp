"use strict";
var r = require("~/r");
r(
  "CF91",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      CF91: function (e, t, i) {
        i.r(t);
        var s = i("NHEX"),
          r = i.n(s),
          u = i("eDYq"),
          o = {
            name: "PeriodBuyTips",
            props: { opt: Object },
            data: () => ({ tips: "" }),
            watch: {
              opt: {
                handler() {
                  this.setTips();
                },
                immediate: !0,
              },
            },
            methods: {
              getPeriodbuyNum() {
                var e = r()(this.opt, "periodBuy.periodSku", []);
                if (1 === e.length) return e[0].num;
                var t = "",
                  { selectedId: i = 0 } = this.opt;
                return (
                  !i ||
                    e.length < 1 ||
                    e.some((e) => e.skuId === i && ((t = e.num), !0)),
                  t
                );
              },
              setTips() {
                var { period: e } = this.opt.periodBuy || {},
                  t = this.getPeriodbuyNum();
                if (t) {
                  var i = this.opt.skuNum * t;
                  this.tips = u.b[e]
                    ? u.b[e] + "1期，共" + t + "期，共" + i + "件"
                    : "共" + t + "期，共" + i + "件";
                } else this.tips = "";
              },
            },
            ud: !0,
          },
          d = i("9ZMt");
        t.default = d.default.component(o);
      },
    }
  )
);
