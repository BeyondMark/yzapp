"use strict";
var r = require("~/r");
r(
  "7LXJ",
  Object.assign({}, require("~/v.js").modules, {
    "7LXJ": function (t, i, o) {
      o.r(i);
      var e = o("ONqW"),
        s = "ump",
        a = {
          props: {
            goodsSpe: Number,
            goodsEstimatePriceData: Object,
            estimateCouponShowList: Array,
            panelSource: Number,
            kdtId: Number,
          },
          data: () => ({ show: !1, promotionList: [] }),
          computed: {
            vanIconClass() {
              var t = ["estimate-price-intro__icon"];
              return this.show && t.push("-rotate"), t.join("");
            },
            isCustomerDiscount() {
              return (
                Object.keys(this.goodsEstimatePriceData).indexOf(
                  "customDiscountPromotion"
                ) > -1
              );
            },
            isTimelimitedDiscount() {
              return (
                Object.keys(this.goodsEstimatePriceData).indexOf(
                  "timeLimitDiscountPromotion"
                ) > -1
              );
            },
            totalPriceWords() {
              return this.isTimelimitedDiscount
                ? "限时活动价格共计"
                : this.isCustomerDiscount
                ? "会员价共计"
                : "商品价格共计";
            },
            isShowOptimalCoupon() {
              var { estimatedPriceCoupon: t = {} } =
                  this.goodsEstimatePriceData || {},
                { isHoldCoupon: i = !1 } = t;
              return (
                this.estimateCouponShowList &&
                this.estimateCouponShowList.length > 0 &&
                this.estimateCouponShowList[0].id &&
                !i
              );
            },
          },
          watch: {
            goodsEstimatePriceData: {
              handler(t) {
                var { num: i } = t;
                Object(e.a)().log({
                  et: "view",
                  ei: 1 === i ? "show_handprice" : "show_unit_price",
                  en: 1 === i ? "展示到手价" : "展示预估单价",
                  params: { num: i, component: "promotion_panel" },
                });
              },
              immediate: !0,
              deep: !0,
            },
          },
          created() {
            var { promotionDetailList: t = [] } =
              this.goodsEstimatePriceData || {};
            this.promotionList = t.filter(
              (t) =>
                "customerDiscount" !== t.type &&
                "timelimitedDiscount" !== t.type
            );
          },
          methods: {
            toggle() {
              var t;
              this.show = !this.show;
              var { num: i } = this.goodsEstimatePriceData,
                o =
                  (null == (t = this.promotionList)
                    ? void 0
                    : t
                        .map((t) => (null == t ? void 0 : t.activityNameTag))
                        .join()) || "";
              Object(e.a)().log({
                et: "click",
                ei: "click_price_detail",
                en: "点击优惠明细",
                params: { num: i, type: o, component: "promotion_panel" },
              });
            },
            handleUmpCouponClick() {
              var t = this.estimateCouponShowList[0],
                { id: i, alias: o } = t,
                a = s;
              Object(e.a)().log({
                et: "click",
                ei: "best_coupon_click",
                en: "最优券点击",
                params: {
                  coupon_conditions: t.condition,
                  coupon_name: t.title,
                  discounted_price: t.headValue,
                  index: 1,
                  source: this.panelSource,
                  component: "promotion_panel",
                },
              }),
                this.$emit("triggerCouponClick", { id: i, alias: o, type: a });
            },
          },
          ud: !0,
        },
        n = o("9ZMt");
      i.default = n.default.component(a);
    },
  })
);
