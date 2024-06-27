"use strict";
var r = require("~/r");
r(
  "U2uY",
  Object.assign({}, require("~/v.js").modules, {
    U2uY: function (e, t, i) {
      i.r(t);
      var o = i("ONqW"),
        r = Object(o.a)(),
        s = {
          props: { promotionInfo: { type: Object, default: () => ({}) } },
          data: () => ({ promotionType: "" }),
          computed: {
            isBest() {
              return 101 === this.promotionInfo.includeActivityType;
            },
            isReward() {
              return !this.promotionInfo.includeActivityType;
            },
          },
          watch: {
            promotionInfo: {
              immediate: !0,
              handler() {
                if (this.isBest || this.isReward) {
                  var e = this.isBest ? "reward" : "best";
                  this.promotionType !== e &&
                    (null == r ||
                      r.log({
                        et: "view",
                        ei: "trade_ump_promotion_cell",
                        en: "下单页面营销模块推荐优惠曝光",
                        params: { type: e },
                      }),
                    (this.promotionType = e));
                }
              },
            },
          },
          methods: {
            showRewardPopup() {
              null == r ||
                r.log({
                  et: "click",
                  ei: "trade_ump_promotion_cell_click",
                  en: "下单页面营销模块推荐优惠点击",
                  params: { type: "reward" },
                }),
                this.$emit("showRewardPopup", { show: !0 });
            },
            confirmBestPrice() {
              null == r ||
                r.log({
                  et: "click",
                  ei: "trade_ump_promotion_cell_click",
                  en: "下单页面营销模块推荐优惠点击",
                  params: { type: "best" },
                }),
                this.$emit("confirmBestPrice");
            },
          },
          ud: !0,
        },
        p = i("9ZMt");
      t.default = p.default.component(s);
    },
  })
);
