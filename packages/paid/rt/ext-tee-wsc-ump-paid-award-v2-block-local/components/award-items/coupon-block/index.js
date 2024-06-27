"use strict";
var r = require("~/r");
r(
  "Jig4",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Jig4: function (i, e, t) {
        t.r(e);
        var o = t("YAk7"),
          n = {
            name: "AwardCoupon",
            props: {
              info: { type: Object, default: () => ({}) },
              orderNo: String,
              themeColor: String,
              kdtId: String,
              navigateTo: Function,
              isWxReceipt: { type: Boolean, default: () => !1 },
              isSkyline: Boolean,
            },
            computed: {
              isCoupon() {
                return this.info.type === o.f.Tradeincard;
              },
            },
            created() {
              var i;
              this.info.isRecommend
                ? this.$emit("log-attach", {
                    et: "view",
                    ei: "view_rcmd_coupon_banner",
                    en: "自动推券banner曝光",
                    params: { order_no: this.orderNo },
                  })
                : this.$emit("log-attach", {
                    et: "view",
                    ei: "view_marketing_paidpro_coupon",
                    en: "支付有礼送券/码曝光",
                    params: {
                      is_custom: 0,
                      activity_id: this.isCoupon
                        ? null == (i = this.info.coupon)
                          ? void 0
                          : i.couponId
                        : null,
                      activity_type: "paidUmpAward",
                    },
                  });
            },
            methods: {
              pureLog(i) {
                this.$emit("log-attach", i);
              },
              couponLogAttach(i) {
                var e;
                this.info.isRecommend
                  ? this.$emit("log-attach", {
                      et: "click",
                      ei: i ? "click_receive" : "click_use",
                      en: i ? "立即领取按钮点击" : "立即使用按钮点击",
                      params: { order_no: this.orderNo },
                    })
                  : this.$emit("log-attach", {
                      et: "click",
                      ei: "click_marketing_paidpro_coupon",
                      en: "支付有礼送券/码点击",
                      pt: "receipt",
                      params: {
                        is_custom: 0,
                        click_type: i ? "立即领取" : "立即使用",
                        activity_id: this.isCoupon
                          ? null == (e = this.info.coupon)
                            ? void 0
                            : e.couponId
                          : null,
                        activity_type: "paidUmpAward",
                      },
                    });
              },
            },
            ud: !0,
          },
          r = t("9ZMt");
        e.default = r.default.component(n);
      },
    }
  )
);
