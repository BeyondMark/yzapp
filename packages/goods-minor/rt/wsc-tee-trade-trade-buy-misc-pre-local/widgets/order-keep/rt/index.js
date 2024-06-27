"use strict";
var r = require("~/r");
r(
  "afEr",
  Object.assign({}, require("~/v.js").modules, {
    afEr: function (e, r, o) {
      o.r(r);
      var s = o("YeA1"),
        a = o("PKOW"),
        d = {
          data: () => ({
            showOrderkeep: !1,
            displayData: {},
            orderData: {},
            themeColors: {},
          }),
          created() {
            Object(s.b)(this, ["displayData", "orderData", "themeColors"]),
              Object(s.d)(this, {
                openOrderKeep: () => {
                  this.showOrderkeep = !0;
                },
                closeOrderKeep: () => this.onClose,
              });
          },
          methods: {
            onClose() {
              this.showOrderkeep = !1;
            },
            onConfirm() {
              this.onClose();
              var e,
                {
                  bookKey: r,
                  addressId: o,
                  orderFrom: s,
                  orderNo: d,
                  bookKey: t,
                } = this.orderData || {};
              d
                ? ((e = {
                    addressId: o,
                    orderFrom: s,
                    orderNo: d,
                    prevBookKey: t,
                  }),
                  Object(a.f)({ pageType: a.b.PAY, query: e }))
                : ((e = { addressId: o, orderFrom: s, bookKey: r }),
                  this.ctx.process.invoke("navigateToTradeBuy", {
                    navigateParams: e,
                  }));
            },
          },
          ud: !0,
        },
        t = o("9ZMt");
      r.default = t.default.component(d);
    },
  })
);
