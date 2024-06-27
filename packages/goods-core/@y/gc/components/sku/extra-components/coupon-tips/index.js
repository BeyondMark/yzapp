"use strict";
var r = require("~/r");
r(
  "rGq+",
  Object.assign({}, require("~/v.js").modules, {
    "rGq+": function (o, t, i) {
      i.r(t);
      var s = i("+66q"),
        u = {
          props: { opt: Object },
          computed: {
            hasCouponTips() {
              var { couponSkuPrices: o = [] } = this.opt.couponTips;
              return o.length > 0;
            },
            showCoupon() {
              var o = !this.opt.skuId && !this.opt.noneSku;
              return this.hasCouponTips && !o;
            },
            showNotEnoughCouponTip() {
              if (!(!this.opt.skuId && !this.opt.noneSku)) {
                var { type: o } = this.opt.currentActivity || {};
                if (o !== s.j.INSOURCING_FISSION) return !1;
                var { skuPrices: t, havingInSourcingCouponNum: i } =
                    this.opt.currentActivity,
                  u = t.find((o) => o.skuId === this.opt.skuId);
                if (u) {
                  var { needInSourcingCouponNum: n } = u;
                  if (i < n * this.opt.skuNum) return n * this.opt.skuNum;
                }
              }
              return !1;
            },
            text() {
              if (this.hasCouponTips) {
                var { skuId: o } = this.opt,
                  { couponSkuPrices: t = [] } = this.opt.couponTips;
                if (this.opt.noneSku) {
                  var i = t[0].unitCopywriting.replace("折", "");
                  return (
                    t.length &&
                    " " + t[0].useThresholdAndValueCopywriting + i + " "
                  );
                }
                if (o) {
                  var s,
                    u = t.find((t) => t.skuId === o),
                    n =
                      null == u || null == (s = u.unitCopywriting)
                        ? void 0
                        : s.replace("折", "");
                  return (
                    u && " " + u.useThresholdAndValueCopywriting + n + "  "
                  );
                }
                return "";
              }
            },
            show() {
              return this.showCoupon || this.showNotEnoughCouponTip;
            },
          },
          watch: {
            showNotEnoughCouponTip() {
              this.setValidateMessage();
            },
            show(o) {
              this.$emit("visible", o);
            },
          },
          methods: {
            setValidateMessage() {
              this.showNotEnoughCouponTip &&
                this.$emit("change", {
                  name: "couponTips",
                  priority: 70,
                  invalidMessage: {
                    couponTips: "内购券不足，请分享活动或商品获取更多内购劵",
                  },
                });
            },
          },
          ud: !0,
        },
        n = i("9ZMt");
      t.default = n.default.component(u);
    },
  })
);
