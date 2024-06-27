"use strict";
var r = require("~/r");
r(
  "sxD6",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      sxD6: function (i, t, e) {
        e.r(t);
        var o = e("YeA1"),
          s = e("9ZMt"),
          r = e("YAk7"),
          d = Object.keys(r.g),
          c = {
            data: () => ({
              orderNo: "",
              payResult: {},
              kdtId: 0,
              isWxReceipt: !1,
            }),
            computed: {
              paidPromotion() {
                return this.payResult.paidPromotion || {};
              },
              show() {
                var { promotionType: i } = this.paidPromotion;
                return -1 !== d.indexOf(i) || this.isActivityQrCode;
              },
              isActivityQrCode() {
                var { promotionType: i } = this.paidPromotion;
                return i === r.i.activitiesQrCode;
              },
            },
            created() {
              Object(o.b)(this, [
                "kdtId",
                "orderNo",
                "payResult",
                "isWxReceipt",
              ]);
            },
            methods: {
              onClick() {
                var i;
                this.isWxReceipt
                  ? this.ctx.process.invoke(
                      "logger",
                      "click",
                      "click_zhifuyouli",
                      "支付有礼点击",
                      { si: this.kdtId, kdt_id: this.kdtId }
                    )
                  : null == (i = this.ctx.logger) ||
                    i.log({
                      et: "click",
                      ei: "click_zhifuyouli",
                      en: "支付有礼点击",
                      si: this.kdtId,
                    });
              },
              navigateTo(i) {
                this.isWxReceipt
                  ? this.ctx.process.invoke("navigateTo", i)
                  : s.default.navigate({ url: i });
              },
            },
            ud: !0,
          };
        t.default = s.default.component(c);
      },
    }
  )
);
