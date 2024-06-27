"use strict";
var r = require("~/r");
r(
  "bpIS",
  Object.assign({}, require("~/v.js").modules, {
    bpIS: function (o, e, t) {
      t.r(e);
      var n = t("qYBx"),
        i = {
          props: {
            coupon: { type: Object, default: () => ({}) },
            kdtId: [Number, String],
            themeColors: { type: Object, default: () => ({}) },
            themeStyle: Object,
          },
          computed: {
            wrapperStyle() {
              return this.coupon.ableUse
                ? "background: var(--ump-coupon-bg, #f2f2ff);--theme-color: var(--ump-icon, #323233);"
                : "color: #C8C9CC; background: none; border: 1px solid #C8C9CC";
            },
            dynamicValFontSize() {
              var o, e;
              return this.exchangeGoodsCoupon
                ? "font-size: 20px"
                : (null == (o = this.coupon) || null == (e = o.valueCopywriting)
                    ? void 0
                    : e.length) > 4
                ? "font-size: 26px"
                : "";
            },
            isYuanUnit() {
              return "元" === this.coupon.unitCopywriting;
            },
            showDecimal() {
              return this.coupon.valueCopywriting.includes(".");
            },
            couponPriceDecimal() {
              return this.coupon.valueCopywriting.split(".");
            },
            exchangeCouponText() {
              return (
                "门槛" +
                (this.coupon.excludeExchangeGoods ? "不包含" : "包含") +
                "可兑换商品金额"
              );
            },
            addOnCopywritingFormats() {
              var { addOnCopywriting: o = "" } = this.coupon,
                e = null == o.match ? void 0 : o.match(/(.*)\[(.*)\](.*)/);
              return e
                ? [
                    { text: e[1] },
                    { highlight: !0, text: e[2] || "233" },
                    { text: e[3] || "233" },
                  ]
                : [{ text: o }];
            },
            exchangeGoodsStyle() {
              if (this.exchangeGoodsCoupon) return "justify-content: center";
            },
            exchangeGoodsCoupon() {
              return 3 === this.coupon.preferentialMode;
            },
          },
          methods: {
            sendCoupon(o) {
              void 0 === o && (o = {}), this.$emit("sendCoupon", o);
            },
            handleAuthorizeFail() {},
            clickItem(o) {
              this.$emit("clickItem", { item: o, coupon: this.coupon });
            },
            goToAddOnPage(o) {
              this.$emit("goToAddOnPage", o);
              var { applicableOnlineGoodsRangeType: e } = o;
              0 === e || 1 === e
                ? this.goToShopIndex()
                : (2 !== e && 3 !== e) || this.goToCouponAddOn(o);
            },
            goToShopIndex() {
              this.$emit("to-navigate", {
                link: "packages/home/dashboard/index",
              });
            },
            goToCouponAddOn(o) {
              var { couponId: e, alias: t } = o,
                i = n.f.args.add("packages/user/coupon/goods-list/index", {
                  kdtId: this.kdtId,
                  alias: t,
                  id: e,
                });
              this.$emit("to-navigate", { link: i });
            },
          },
          ud: !0,
        },
        r = t("9ZMt");
      e.default = r.default.component(i);
    },
  })
);
