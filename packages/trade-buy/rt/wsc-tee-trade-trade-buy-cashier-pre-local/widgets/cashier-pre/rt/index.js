"use strict";
var r = require("~/r");
r(
  "PwSc",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      PwSc: function (t, i, e) {
        e.r(i);
        var s = e("Fcif"),
          r = e("YeA1"),
          o = e("VmHG"),
          a = e("qUtW"),
          n = e("BhWZ"),
          h = {
            props: { block: Boolean },
            data() {
              var t = this.block ? "block-container" : "";
              return Object(s.a)(
                {
                  blockClass: t,
                  isPreCashierInViewport: !1,
                  isFirstViewportEvent: !0,
                  isFloatingBtnShowed: n.a.get(),
                },
                Object(o.d)(this, ["isPreCashierPay"])
              );
            },
            computed: {
              showFloatingBtn() {
                return (
                  this.isPreCashierPay &&
                  !this.isFloatingBtnShowed &&
                  !this.isPreCashierInViewport
                );
              },
            },
            watch: {
              showFloatingBtn(t) {
                t && Object(a.c)();
              },
            },
            created() {
              Object(r.d)(this, {
                "cashier:viewport:in": () => this.onCashierViewport("in"),
                "cashier:viewport:out": () => this.onCashierViewport("out"),
              }),
                Object(a.a)(this.ctx);
            },
            methods: {
              onCashierViewport(t) {
                "in" !== t ||
                  this.isFloatingBtnShowed ||
                  (n.a.set(!0), (this.isFloatingBtnShowed = !0)),
                  this.isFirstViewportEvent &&
                    (Object(a.d)("in" === t), (this.isFirstViewportEvent = !1)),
                  (this.isPreCashierInViewport = "in" === t);
              },
              onBtnClick() {
                Object(a.b)(),
                  wx.pageScrollTo({ selector: ".page >>> #pre-cashier-block" });
              },
            },
          },
          c = e("9ZMt");
        i.default = c.default.component(h);
      },
    }
  )
);
