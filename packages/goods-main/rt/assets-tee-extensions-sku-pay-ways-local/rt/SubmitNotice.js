"use strict";
var r = require("~/r");
r(
  "aJvw",
  Object.assign({}, require("~/v.js").modules, {
    aJvw: function (a, e, t) {
      t.r(e);
      var s = t("YeA1"),
        r = {
          name: "SubmitNotice",
          data: () => ({ payWaysData: {} }),
          logicData: () => ({
            supportSkuDirectOrder: !1,
            showCouponTips: !1,
            payChannels: [],
          }),
          computed: {
            showPriorUseTips() {
              return (
                !this.supportSkuDirectOrder &&
                !this.showCouponTips &&
                "PRIOR_USE" === this.payWaysData.payWay
              );
            },
            priorUse() {
              return (
                this.payChannels &&
                this.payChannels.find((a) => "PRIOR_USE" === a.payChannel)
              );
            },
          },
          created() {
            Object(s.b)(this, [
              "payWaysData",
              "supportSkuDirectOrder",
              "showCouponTips",
              "payChannels",
            ]);
          },
          methods: {
            handlePriorUseTipsClick() {
              this.ctx.event.emit("sku:hide"),
                this.ctx.event.emit("payWaysData:update", { show: !0 });
            },
          },
          ud: !0,
        },
        i = t("9ZMt");
      e.default = i.default.component(r);
    },
  })
);
