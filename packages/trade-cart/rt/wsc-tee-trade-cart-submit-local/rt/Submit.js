"use strict";
var r = require("~/r");
r(
  "10pi",
  Object.assign({}, require("~/v.js").modules, {
    "10pi": function (t, e, i) {
      i.r(e);
      var o = i("Fcif"),
        s = i("VmHG"),
        a = {
          props: {
            cloudConfig: {
              type: Object,
              default: () => ({ submitBtnText: "" }),
            },
          },
          data() {
            return Object(o.a)(
              {
                isShowDiscountBar: !0,
                discountDetailVisible: !1,
                isReceiveBestCoupon: !0,
              },
              Object(s.d)(this, [
                "isEditMode",
                "loading",
                "showEmptyCart",
                "separateBuy",
                "themeCSS",
                "themeStyle",
                "isDrugShop",
                "iconName",
                "rootClass",
                "iconCustomClass",
                "submitBtnClass",
                "totalNum",
                "btnName",
                "cartBottomData",
                "dataLoaded",
                "isTabPage",
                "recommendPromotionInfoList",
                "customButtonText",
              ])
            );
          },
          computed: {
            wrapperStyle() {
              var { navHeight: t } = this.ctx.data;
              return (
                "bottom: " +
                (this.isTabPage ? (t > 0 ? t : 49) : 0) +
                "px; " +
                this.themeCSS
              );
            },
            arrowClassName() {
              return this.discountDetailVisible ? "arrow-down" : "arrow-up";
            },
            discountValue() {
              var t;
              return (
                ((null == (t = this.cartBottomData)
                  ? void 0
                  : t.totalDiscount) || 0) / 100
              ).toFixed(2);
            },
            buttonText() {
              return this.cloudConfig.submitBtnText
                ? this.cloudConfig.submitBtnText
                : this.isEditMode
                ? "删除"
                : !0 === this.isDrugShop
                ? "立即预约"
                : this.isReceiveBestCoupon
                ? this.customButtonText || "去结算"
                : "领券结算";
            },
          },
          externalClasses: ["custom-class"],
          watch: {
            isReceiveBestCoupon(t) {
              t &&
                this.ctx.logger &&
                this.ctx.logger.log({
                  et: "view",
                  ei: "get_coupons_button_view",
                  en: "领券结算按钮曝光次数",
                  params: {},
                });
            },
          },
          created() {
            this.initActions(), Object(s.d)(this, ["isReceiveBestCoupon"]);
          },
          methods: {
            clickDiscountDetail(t) {
              (this.discountDetailVisible = t),
                t &&
                  this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "click",
                    ei: "promotion_detail_button_click",
                    en: "优惠明细按钮点击次数",
                    params: {},
                  });
            },
            initActions() {
              Object(s.b)(this, [
                "handleCheckAllGoods",
                "handleBtnTap",
                "buyWithGoods",
                "handleCloseSeparateBuyPopup",
                "updatePopupBottom",
                "selectBestPrice",
                "showPromotionPopup",
              ]);
            },
          },
        },
        n = i("9ZMt");
      e.default = n.default.component(a);
    },
  })
);
