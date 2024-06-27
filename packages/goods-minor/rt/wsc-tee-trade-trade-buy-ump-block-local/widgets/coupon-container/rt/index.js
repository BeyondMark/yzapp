"use strict";
var r = require("~/r");
r(
  "P5Ga",
  Object.assign({}, require("~/v.js").modules, {
    P5Ga: function (e, t, o) {
      o.r(t);
      var n = o("KrsW"),
        s = o("mztD"),
        i = {
          mixins: [n.b.externalClassesMixin(["custom-class", "list-class"])],
          props: {
            closeButtonText: String,
            showCouponListGroupType: Number,
            inputPlaceholder: { type: String, default: "请输入优惠码" },
            enabledTitle: { type: String, default: "可用" },
            disabledTitle: { type: String, default: "不可用" },
            exchangeButtonText: { type: String, default: "兑换" },
            exchangeMinLength: { type: Number, default: 1 },
            chosenCoupons: { type: Array, default: () => [] },
            canCouponOverlying: { type: Boolean, default: !1 },
            isRecommendedCoupons: { type: String, default: "recommend" },
            coupons: { type: Array, default: () => [] },
            disabledCoupons: { type: Array, default: () => [] },
            showExchangeBar: { type: Boolean, default: !0 },
            showCloseButton: { type: Boolean, default: !0 },
            showCount: { type: Boolean, default: !0 },
            currency: { type: String, default: "¥" },
            emptyImage: {
              type: String,
              default: Object(s.a)("vant/coupon-empty.png"),
            },
            themeColor: String,
            themeColors: { type: Object, default: () => ({}) },
            isInCouponOverWhitelist: Boolean,
          },
          data: () => ({
            currentCode: "",
            exchangeButtonDisabled: !1,
            isValid: !1,
            btnCustomStyle:
              "color: var(--main-text, #fff); background: var(--main-bg, #323233); border: 1px solid var(--main-bg, #323233)",
          }),
          computed: {
            showExtraDelivery() {
              return 16 === this.showCouponListGroupType;
            },
            totalDiscount() {
              return (
                this.chosenCoupons.reduce((e, t) => e + t.value, 0) / 100
              ).toFixed(2);
            },
            enabledTitleStr() {
              var e = this.showCount ? "(" + this.coupons.length + ")" : "";
              return this.enabledTitle + e;
            },
            tabListCls() {
              var e = [this.listClass, "t-coupon-list__list"];
              return (
                this.showCloseButton &&
                  e.push("t-coupon-list__list--with-bottom"),
                e
              );
            },
            isExchangeButtonDisabled() {
              return this.exchangeButtonLoading || !this.isValid;
            },
            chosenCouponsTips() {
              var { length: e } = this.chosenCoupons;
              return "recommend" === this.isRecommendedCoupons
                ? "已选中最佳优惠券" + e + "张"
                : "你已选中" + e + "张";
            },
          },
          watch: {
            code(e) {
              (this.currentCode = e), this.setIsValid();
            },
          },
          methods: {
            inInputCode(e) {
              void 0 === e && (e = {}),
                (this.currentCode = e.value),
                this.setIsValid();
            },
            setIsValid() {
              var { currentCode: e } = this;
              this.isValid = !!e && e.length >= this.exchangeMinLength;
            },
            onClickExchangeButton() {
              this.isExchangeButtonDisabled ||
                (this.$emit("exchange", this.currentCode),
                this.code || (this.currentCode = ""));
            },
            onClickCloseBtn() {
              this.onChangeCoupon(-1);
            },
            onChangeCoupon(e) {
              this.$emit("change", e);
            },
            onInputClear() {
              (this.code = ""), (this.currentCode = ""), this.setIsValid();
            },
            onTabResize() {
              this.$refs.tabs && this.$refs.tabs.resize();
            },
            onClickRecommend() {
              this.onChangeCoupon();
            },
          },
          ud: !0,
        },
        a = o("9ZMt");
      t.default = a.default.component(i);
    },
  })
);
