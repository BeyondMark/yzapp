"use strict";
var r = require("~/r");
r(
  "vW3e",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      vW3e: function (t, e, i) {
        i.r(e);
        var s = i("YeA1"),
          r = i("Bt2T"),
          o = i("Ckrg"),
          a = {
            data: () => ({
              isPreCashierPay: !1,
              isPreCashierInViewport: !1,
              isFirstViewportEvent: !0,
              isFloatingBtnShowed: o.a.get(),
            }),
            computed: {
              showWrap() {
                return this.isPreCashierPay;
              },
              showFloatingBtn() {
                return (
                  this.showWrap &&
                  !this.isFloatingBtnShowed &&
                  !this.isPreCashierInViewport
                );
              },
            },
            watch: {
              showWrap() {
                this.ctx.event.emit("afterBlockToggle");
              },
              showFloatingBtn(t) {
                t && Object(r.c)();
              },
            },
            created() {
              Object(s.b)(this, ["isPreCashierPay"]),
                Object(s.d)(this, {
                  "cashier:viewport:in": () => this.onCashierViewport("in"),
                  "cashier:viewport:out": () => this.onCashierViewport("out"),
                }),
                Object(r.a)(this.ctx);
            },
            methods: {
              onCashierViewport(t) {
                "in" !== t ||
                  this.isFloatingBtnShowed ||
                  (o.a.set(!0), (this.isFloatingBtnShowed = !0)),
                  this.isFirstViewportEvent &&
                    (Object(r.d)("in" === t), (this.isFirstViewportEvent = !1)),
                  (this.isPreCashierInViewport = "in" === t);
              },
              onBtnClick() {
                Object(r.b)(),
                  wx.pageScrollTo({ selector: ".page >>> #pre-cashier-block" });
              },
            },
            ud: !0,
          },
          h = i("9ZMt");
        e.default = h.default.component(a);
      },
    }
  )
);
