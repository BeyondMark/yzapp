"use strict";
var r = require("~/r");
r(
  "rLsX",
  Object.assign({}, require("~/v.js").modules, {
    rLsX: function (o, e, s) {
      s.r(e);
      var t = s("AGZf"),
        n = s("YeA1"),
        i = s("taYb"),
        h = {
          props: {
            customStyle: String,
            buttonStyle: String,
            overlayStyle: String,
          },
          data: () => ({
            show: !1,
            couponModel: {},
            exchangeButtonText: "兑换",
            exchanging: !1,
            themeColors: {},
            lastCouponList: [],
            isInCouponOverWhitelist: !1,
            showCouponListGroupType: 0,
          }),
          computed: {
            chosenCoupon() {
              return 16 === this.showCouponListGroupType
                ? this.couponModel.chosenDeliveryCoupon || {}
                : this.couponModel.chosenCoupon || {};
            },
            chosenCoupons() {
              var { length: o } = Object.keys(this.chosenCoupon);
              return 16 === this.showCouponListGroupType
                ? this.couponModel.chosenDeliveryCoupons
                : this.couponModel.chosenCoupons ||
                    (o && [this.chosenCoupon]) ||
                    [];
            },
            isRecommendedCoupons() {
              var o;
              return null != (o = this.couponModel.isRecommendedCoupons)
                ? o
                : "recommend";
            },
            availableCoupons() {
              return 16 === this.showCouponListGroupType
                ? this.couponModel.availableDeliveryCoupons || []
                : this.couponModel.availableCoupons || [];
            },
            unavailableCoupons() {
              return 16 === this.showCouponListGroupType
                ? this.couponModel.unavailableDeliveryCoupons || []
                : this.couponModel.unavailableCoupons || [];
            },
            chosenCouponIndex() {
              return this.chosenCoupon.id || this.couponModel.chosenId;
            },
          },
          watch: {
            show() {
              this.tabResize();
            },
          },
          created() {
            Object(n.b)(this, [
              "couponModel",
              "themeColors",
              "isInCouponOverWhitelist",
            ]),
              Object(n.d)(this, {
                showCouponList: (o) => {
                  (this.showCouponListGroupType = o), (this.show = !0);
                },
              }),
              this.ctx.process.define(
                "toggleCouponListPopup",
                this.toggleCouponListPopup.bind(this)
              );
          },
          methods: {
            onClose() {
              (this.show = !1), this.handleMetuxToast(), this.$emit("close");
            },
            toggleCouponListPopup(o) {
              this.show = o;
            },
            onChange(o) {
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "custom",
                  ei: "trade_buy_set_coupon",
                  en: "切换优惠券",
                  pt: "trade",
                  params: { desc: JSON.stringify(o) },
                }),
                this.ctx.process.invoke(
                  "setCouponChosenIdProcess",
                  o,
                  this.showCouponListGroupType
                ),
                16 !== this.showCouponListGroupType
                  ? (this.lastCouponList =
                      this.couponModel.availableCoupons || [])
                  : (this.lastCouponList =
                      this.couponModel.availableDeliveryCoupons || []);
            },
            exchangeCoupon(o) {
              var [e] = this.ctx.process.invoke("exchangeCouponPromise", o);
              e.then((o) => {
                var e = i.a.toCamelCase(o);
                this.availableCoupons.some((o) => o.id === e.id)
                  ? Object(t.a)("该优惠码你已经拥有，已为你自动选中～")
                  : (this.ctx.process.invoke("addCouponProcess", e),
                    Object(t.a)("兑换成功")),
                  this.couponModel.chosenId !== e.id &&
                    ((this.lastCouponList =
                      this.couponModel.availableCoupons || []),
                    this.ctx.process.invoke("setCouponChosenIdProcess", e.id)),
                  this.finishExchange();
              }).catch((o) => {
                Object(t.a)(o.msg || "兑换失败"), this.finishExchange();
              });
            },
            onExchange(o) {
              this.exchanging ||
                ((this.exchanging = !0),
                (this.exchangeButtonText = "验证中..."),
                this.exchangeCoupon(o));
            },
            finishExchange() {
              (this.exchanging = !1),
                (this.exchangeButtonText = "兑换"),
                this.$refs.couponContainer.onInputClear();
            },
            onClear() {
              this.onChange(-1), this.onClose();
            },
            tabResize() {
              var o, e;
              null != (o = this.$refs) &&
                null != (e = o.couponContainer) &&
                e.onTabResize &&
                setTimeout(() => {
                  this.$refs.couponContainer.onTabResize();
                }, 100);
            },
            handleMetuxToast() {
              var o = this.lastCouponList.find(
                (o) => o.id === this.chosenCouponIndex
              );
              if (o) {
                var { metuxPromotions: e = [] } = o;
                e.length > 0 &&
                  (Object(t.a)("该优惠券与部分活动不可叠加使用"),
                  (o.metuxPromotions = []));
              }
            },
          },
          ud: !0,
        },
        u = s("9ZMt");
      e.default = u.default.component(h);
    },
  })
);
