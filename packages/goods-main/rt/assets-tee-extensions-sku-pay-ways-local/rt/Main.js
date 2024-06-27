"use strict";
var r = require("~/r");
r(
  "cDqh",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      cDqh: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("VmHG"),
          r = a("YeA1"),
          n = a("pvGL"),
          h = {
            name: "Payways",
            data() {
              return (
                (this.store = Object(n.a)(this.ctx)),
                Object(i.c)(this, [
                  "payChannels",
                  "payWaysData",
                  "kdtId",
                  "sku",
                  "supportSkuDirectOrder",
                  "showCouponTips",
                ]),
                Object(s.a)(
                  {},
                  Object(i.d)(this, [
                    "supportSkuDirectOrder",
                    "priorUse",
                    "showInstallment",
                    "payWaysData",
                    "canPriorUse",
                    "installment",
                    "installmentList",
                    "isGrey",
                    "skuUnselected",
                  ])
                )
              );
            },
            watch: {
              "payWaysData.payWay": function (e) {
                this.handlePayWayChange(e);
              },
              canPriorUse() {
                this.updateCommit();
              },
            },
            created() {
              Object(i.b)(this, [
                "handlePayWayChange",
                "updateCommit",
                "selectType",
                "onSelected",
              ]),
                this.init();
            },
            methods: {
              init() {
                Object(r.b)(this, {
                  payChannels: this.store.setPriorUseExtra,
                  goods: this.store.setGoogds,
                }),
                  Object(r.d)(this, {
                    "cashier:change": this.store.handleCachierChange,
                    "sku:num-change": this.store.handleSkuNumChange,
                    "sku:selected": this.store.handleSkuSelected,
                  }),
                  Object(r.e)(this, {
                    setPayWayData: this.store.setPayWayData,
                    "installment:update": this.store.updatePayWays,
                    "installment:validate": this.store.validatePayWays,
                  });
              },
            },
          },
          c = a("9ZMt");
        t.default = c.default.component(h);
      },
    }
  )
);
