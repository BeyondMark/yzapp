"use strict";
var r = require("~/r");
r(
  "HtCu",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    HtCu: function (e, r, t) {
      t.r(r);
      var a = t("Fcif"),
        i = t("YeA1"),
        o = t("VmHG"),
        c = t("kWwd"),
        s = t.n(c),
        u = {
          data() {
            return Object(a.a)(
              { orderFinalPrice: 0, payRechargeInfo: null, umpBlockBase: {} },
              Object(o.d)(this, [
                "showDiscountDetail",
                "prepareIsReady",
                "pointStr",
              ])
            );
          },
          computed: {
            arrowName() {
              return this.showDiscountDetail ? "arrow-down" : "arrow-up";
            },
            totalPrice() {
              var {
                goodsSumPrice: e = 0,
                postagePrice: r = 0,
                paidCardPrice: t = 0,
              } = this.umpBlockBase;
              return s()(s()(+e, +r), +t) || 0;
            },
            discountPrice() {
              return Math.max(s()(this.totalPrice, -this.orderFinalPrice), 0);
            },
          },
          created() {
            Object(i.b)(this, [
              "orderFinalPrice",
              "umpBlockBase",
              "payRechargeInfo",
            ]);
          },
          methods: {
            handleOpenDetail() {
              this.store.toggleDiscountDetail();
            },
          },
        },
        n = t("9ZMt");
      r.default = n.default.component(u);
    },
  })
);
