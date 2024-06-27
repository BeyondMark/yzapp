"use strict";
var r = require("~/r");
r(
  "aj7G",
  Object.assign({}, require("~/v.js").modules, {
    aj7G: function (e, a, t) {
      t.r(a);
      var s = t("Fcif"),
        r = t("YeA1"),
        o = t("z9IR"),
        i = t("ONqW"),
        c = t("VmHG");
      var l = {
          data() {
            return (
              (this.store = this.ctx.store),
              Object(s.a)(
                {
                  showTips: !1,
                  valueCard: { list: [], disabled: [], checked: [] },
                  display: {},
                  pay: {
                    prepay: !1,
                    prepaySuccess: !1,
                    multiPhase: !1,
                    payParams: {},
                    prePayParams: {},
                    phasePayment: {},
                    promotions: [],
                    realPay: 0,
                    itemPay: 0,
                    postage: 0,
                  },
                  tradeTag: {},
                  orderFinalPrice: 0,
                  prepayCardDecrease: 0,
                  prepayCardAvailable: 0,
                  prepayCardAvailableExclusion: 0,
                  themeColors: {},
                  kdtId: "",
                  payAssetActivityTagDesc: "",
                  shopStoredDiscountInfo: {},
                  useStoredCustomerDiscount: !1,
                  goods: {},
                  recommendDetaid: JSON.stringify({
                    desc: "",
                    productInfos: [],
                    templateNo: "",
                  }),
                  shop: {},
                  useStoredMemberCustomerDiscount: !1,
                  useStoreBalancePayInFull: !1,
                },
                Object(c.d)(this, [
                  "toRecharge",
                  "isSelectRc",
                  "hasExclusionCard",
                ])
              )
            );
          },
          computed: {
            amountColor() {
              var {
                isSelectedPrepayCards: e,
                usableAmount: a,
                themeGeneralColor: t,
              } = this;
              return e ? "#323233" : +a ? t : "#999";
            },
            newRecommend() {
              return !!this.display && this.display.newRecommend;
            },
            showPrepayCardCell() {
              var e,
                a,
                { hidePrePayCard: t = !1 } =
                  this.ctx.data.yunDesignConfig || {},
                s = null == (e = this.valueCard) ? void 0 : e.showValueCard,
                r = null == (a = this.display) ? void 0 : a.showPrePayCards;
              return s && !t && r;
            },
            hasGoods() {
              var { list: e } = this.goods || {};
              return !(null == e || !e.length);
            },
            value() {
              var e, a, t, s;
              return this.hasGoods &&
                null != (e = this.tradeTag) &&
                e.hasDepositPreSaleGoods
                ? {
                    text: "暂无可用",
                    class: "prepay-card__cell__disabled__value",
                    disabled: !0,
                  }
                : this.prepayCardDecrease
                ? {
                    text:
                      "-￥" +
                      ((t = this.prepayCardDecrease),
                      void 0 === s && (s = 2),
                      (Math.abs(t) / 100).toFixed(s)),
                    class: "prepay-card__cell__value prepay-theme-color",
                  }
                : this.prepayCardAvailable
                ? {
                    text: "-￥0",
                    class: "prepay-card__cell__value prepay-theme-color",
                  }
                : (null == (a = this.valueCard)
                    ? void 0
                    : a.giveRechargeAmount) > 0
                ? {
                    text: "立即开通",
                    class: "prepay-card__cell__value",
                    noSign: !0,
                  }
                : {
                    text: "暂无可用",
                    class: "prepay-card__cell__disabled__value",
                    disabled: !0,
                  };
            },
            isSelectedPrepayCards() {
              var e;
              return (
                (null == (e = this.valueCard.checked) ? void 0 : e.length) > 0
              );
            },
            usableAmount() {
              if (this.prepayCardAvailable)
                return Math.abs(this.prepayCardAvailable) / 100;
              var { giveRechargeAmount: e } = this.valueCard || {};
              return e > 0 ? (e / 100).toFixed(2) : "0.00";
            },
            themeGeneralColor() {
              return this.themeColors.general;
            },
            realPay() {
              return this.pay.realPay;
            },
            originPay() {
              return this.pay.originItemPrice;
            },
            tagDesc() {
              return this.payAssetActivityTagDesc;
            },
            openStoredDiscount() {
              return !!this.shopStoredDiscountInfo.openStoredDiscount;
            },
            hasDiscount() {
              return !!this.shopStoredDiscountInfo.discount;
            },
            discount() {
              return this.openStoredDiscount &&
                this.hasDiscount &&
                this.useStoredCustomerDiscount
                ? { text: this.shopStoredDiscountInfo.discount / 10 + "折" }
                : {
                    text: "仅限储值全额支付生效",
                    class: "discount_unavailable",
                  };
            },
            rechargeDiscountInfo() {
              return {
                open: this.useStoredCustomerDiscount,
                discount: this.shopStoredDiscountInfo.discount,
              };
            },
            showDiscountTip() {
              var e = {
                value: !1,
                classBg: "discount-cell-bg",
                classWrap: "discount-cell-wrap",
              };
              return (
                this.openStoredDiscount &&
                  this.useStoredCustomerDiscount &&
                  +this.orderFinalPrice &&
                  ((e = {
                    value: !0,
                    text: "可用金额不足，充值后可享此优惠。",
                    classBg: "discount-cell-bg-tip",
                    classWrap: "discount-cell-wrap-tip",
                  }),
                  this.prepayCardAvailableExclusion >= this.pay.realPay &&
                    (e.text = "选择足额的余额/卡后可享此优惠")),
                e
              );
            },
            showRechargeEntry() {
              return (
                this.payAssetActivityTagDesc &&
                this.prepayCardAvailableExclusion < this.pay.realPay
              );
            },
            styleVar() {
              var e = "";
              try {
                var a = this.themeColors["main-bg"],
                  t = this.ctx.lambdas.hexToRgb(a);
                e =
                  "--invoice-tag-active-background-color-alpha-10: rgba(" +
                  t[0] +
                  ", " +
                  t[1] +
                  ", " +
                  t[2] +
                  ", .1); --invoice-tag-active-color: " +
                  a;
              } catch (e) {}
              return e;
            },
            tagStyle() {
              return (
                "background: " +
                (this.themeColors["ump-tag-bg"] || "#f2f2ff") +
                ";color: " +
                (this.themeColors["ump-tag-text"] || "#323233")
              );
            },
          },
          mounted() {
            var { ctx: e } = this;
            !this.showPrepayCardCell &&
              this.useStoredCustomerDiscount &&
              (e.process.invoke("setDisableStoredDiscount", !0),
              e.process.invoke("confirmOrder"));
          },
          created() {
            Object(r.b)(this, [
              "valueCard",
              "display",
              "pay",
              "tradeTag",
              "orderFinalPrice",
              "prepayCardDecrease",
              "prepayCardAvailable",
              "prepayCardAvailableExclusion",
              "themeColors",
              "payAssetActivityTagDesc",
              "shopStoredDiscountInfo",
              "useStoredCustomerDiscount",
              "goods",
              "recommendDetaid",
              "shop",
              "useStoredMemberCustomerDiscount",
              "useStoreBalancePayInFull",
            ]),
              Object(c.b)(this, [
                "onPrepayCardConfirm",
                "toggleShowRecommend",
                "toggleToRecharge",
                "toggleIsSelectRc",
                "toggleStoredDiscountTips",
              ]);
          },
          methods: {
            handleRecommendSelect(e) {
              var { valueCard: a, isSelect: t } = e;
              this.toggleIsSelectRc(t),
                this.ctx.process.invoke("setPrepayCardCheckStatus", {
                  valueCard: a,
                });
            },
            onRefreshData() {
              this.ctx.process.invoke("confirmOrder");
            },
            onCellClick() {
              this.ctx.process.invoke("openValueCard");
            },
            onRecommendClose() {
              this.ctx.process.invoke("closeValueCard");
            },
            handleClickPrepaidRecommend() {
              Object(i.a)().log({
                et: "click",
                ei: "click_recommend_tag_entry",
                en: "点击充值推荐标签入口",
                params: { component: "prepaid_recommend" },
              }),
                this.onCellClick();
            },
            onShowTip() {
              this.toggleStoredDiscountTips(!0);
            },
            goRecharge() {
              this.toggleToRecharge(!0), this.toggleShowRecommend(!0);
            },
            goRecommendRecharge() {
              this.ctx.process.invoke("showPrePayCardRecharge");
            },
            handleSelectAllPrepayCards() {
              if (
                (Object(i.a)().log({
                  et: "click",
                  ei: "select_all_prepay_card",
                  en: "点击全选储值卡",
                  params: {
                    component: "prepayCardCell",
                    isSelectAll: !this.isSelectedPrepayCards,
                  },
                }),
                !this.value.disabled && !this.isSelectRc)
              ) {
                var {
                    valueCard: e,
                    rechargeDiscountInfo: a,
                    realPay: t,
                  } = this,
                  r = a && a.open;
                if (this.isSelectedPrepayCards) {
                  var c = () =>
                    this.onPrepayCardConfirm({
                      valueCard: Object(s.a)({}, e, { checked: [] }),
                      keepSelect: !0,
                      exclusionCard: this.hasExclusionCard,
                      isCustomerDiscountNotFullPay: r,
                      isCustomerSelect: !0,
                    });
                  return this.openStoredDiscount &&
                    this.hasDiscount &&
                    this.useStoredCustomerDiscount
                    ? void o.a
                        .confirm({
                          message:
                            "订单使用了“储值专享折扣（" +
                            a.discount / 10 +
                            "折）“，修改选卡金额将导致优惠不可用，确定操作吗",
                        })
                        .then(() => {
                          c();
                        })
                        .catch(() => {})
                    : this.hasExclusionCard
                    ? void o.a
                        .confirm({
                          message: "若取消使用，系统将重新计算所有优惠活动价格",
                        })
                        .then(() => {
                          c();
                        })
                        .catch(() => {})
                    : void c();
                }
                var l = e && e.list,
                  n = r && l.reduce((e, a) => e.balance + a.balance, 0) < t,
                  d = l.filter(
                    (e) =>
                      102 !== e.cardType ||
                      1001 !== e.cardSubType ||
                      (e.balance > 0 && e.summaryCardNo)
                  ),
                  u = d.filter((e) => !e.isExclusion),
                  h =
                    u.reduce((e, a) => e + a.balance, 0) >= this.realPay
                      ? u
                      : d,
                  p = h.map((e) => {
                    var { summaryCardNo: a } = e;
                    return a;
                  });
                h.some((e) => e.isExclusion)
                  ? o.a
                      .confirm({
                        message:
                          "存在不可叠加优惠的余额/卡，仅限原价购买商品，是否继续使用？",
                      })
                      .then(() => {
                        this.onPrepayCardConfirm({
                          valueCard: Object(s.a)({}, e, { checked: p }),
                          keepSelect: !1,
                          exclusionCard: !0,
                          isCustomerDiscountNotFullPay: n,
                        });
                      })
                      .catch(() => {})
                  : this.onPrepayCardConfirm({
                      valueCard: Object(s.a)({}, e, { checked: p }),
                      keepSelect: !1,
                      exclusionCard: !1,
                      isCustomerDiscountNotFullPay: n,
                    });
              }
            },
            handleNoSignClick() {
              this.value.noSign && this.onCellClick();
            },
          },
        },
        n = t("9ZMt");
      a.default = n.default.component(l);
    },
  })
);
