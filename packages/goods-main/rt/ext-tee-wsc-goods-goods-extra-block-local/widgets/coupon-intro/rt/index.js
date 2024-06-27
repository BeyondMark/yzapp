"use strict";
var r = require("~/r");
r(
  "ZaGZ",
  Object.assign({}, require("~/v.js").modules, {
    ZaGZ: function (o, t, e) {
      e.r(t);
      var i = e("YeA1"),
        a = {
          props: {
            skuCouponIntroDetail: { type: Object, default: null },
            themeVars: { type: String, default: "" },
          },
          data: () => ({ showFoldBtn: !1, isFolded: !0 }),
          computed: {
            couponIntroDetail() {
              return this.skuCouponIntroDetail;
            },
            showCouponIntro() {
              return !!this.skuCouponIntroDetail;
            },
            isAllGoodsAvailable() {
              var { preferentialMode: o, applicableOnlineGoodsRangeType: t } =
                this.couponIntroDetail || {};
              return 3 !== o && t <= 1;
            },
            instruction() {
              var { description: o = "" } = this.couponIntroDetail || {};
              return o;
            },
          },
          methods: {
            toggleFold() {
              this.isFolded = !this.isFolded;
            },
            jumpAvailableGoods() {
              if (!this.isAllGoodsAvailable) {
                var { couponId: o, alias: t = "" } = this.couponIntroDetail;
                Object(i.a)().dmc.navigate("GoodsGroup", {
                  alias: t,
                  group_id: o,
                  pageType: "coupon",
                });
              }
            },
          },
          ud: !0,
        },
        r = e("9ZMt");
      t.default = r.default.component(a);
    },
  })
);
