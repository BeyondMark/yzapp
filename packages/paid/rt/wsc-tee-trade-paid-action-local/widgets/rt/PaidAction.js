"use strict";
var r = require("~/r");
r(
  "ygBl",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      ygBl: function (e, t, s) {
        s.r(t);
        var i = s("Fcif"),
          o = s("Sipi"),
          a = s("YeA1"),
          r = (s("2bgu"), s("x52n")),
          p = s("VmHG"),
          h = s("cWxX"),
          n = s.n(h),
          u = s("p00h"),
          l =
            (s("T9qh"),
            { autoPopupVirtualTicketDialog: !0, autoPopupSelfFetchDialog: !0 }),
          d = {
            data() {
              (this.payResultLoaded = !1),
                (this.newAwardInfoLoaded = !1),
                (this.waitLength = 0),
                (this.hasWxSubscribePopped = !1);
              var e;
              return (
                (e = getApp().globalData.isRetailApp),
                Object(i.a)(
                  {
                    themeColors: {},
                    BTNS_MAP: u.b,
                    show: !1,
                    popupOrder: [],
                    currentPopupIndex: -1,
                    canUseTradeUmpV1: !0,
                    showAwardV2Block: !0,
                    newAwardInfo: {},
                    showWishMsg: !1,
                    mpData: {},
                    themeCSS: "",
                    isRetailApp: e,
                    isSkyline: !1,
                  },
                  Object(p.d)(this, [
                    "kdtId",
                    "hasPaid",
                    "orderNo",
                    "isHideYouzanFollow",
                    "hidePickUpCodeBtn",
                    "mpData",
                    "payResult",
                    "btnList",
                  ])
                )
              );
            },
            watch: {
              currentPopupIndex(e) {
                var { popupOrder: t, payResult: s = {} } = this,
                  i = [...t];
                this.currentPopType = i[e];
                var o = this.handlePopupOrder();
                o[this.currentPopType] &&
                  this.ctx.cloud
                    .invoke("beforeAutoPopupDisplay", {
                      popupType: n()(this.currentPopType),
                    })
                    .then(() => {
                      o[this.currentPopType]();
                    })
                    .catch((e) => {
                      this.handleNextPopup();
                    });
              },
            },
            created() {
              var e,
                t = this;
              (this.currentShopAdIndex = 0),
                Object(a.b)(this, [
                  "showAwardV2Block",
                  "themeCSS",
                  "themeColors",
                  "isSkyline",
                ]),
                Object(a.b)(this, {
                  payResult: (e) => {
                    var t;
                    (this.payResult = e),
                      (this.mpData = null != (t = e.mpData) ? t : {}),
                      (this.show = !e.showError),
                      this.orderNo &&
                        !this.payResultLoaded &&
                        ((this.payResultLoaded = !0),
                        (this.waitLength += 1),
                        this.tryStartPop());
                  },
                  newAwardInfo: (e) => {
                    (this.newAwardInfo = e),
                      this.newAwardInfoLoaded ||
                        ((this.newAwardInfoLoaded = !0),
                        (this.waitLength += 1),
                        this.tryStartPop());
                  },
                  canUseTradeUmpV1: (e) => {
                    (this.canUseTradeUmpV1 = e),
                      this.canUseTradeUmpV1
                        ? (this.waitLength += 1)
                        : (this.waitLength += 2),
                      this.tryStartPop();
                  },
                  changeSubscribe: (e) => {
                    var t;
                    this.hasWxSubscribePopped = null != (t = !!e) && t;
                  },
                }),
                Object(a.d)(this, {
                  hidePickUpCodeBtn: function (e) {
                    void 0 === e && (e = !1), (t.hidePickUpCodeBtn = e);
                  },
                  handleOpenShare: () => this.handleOpenShare(),
                  closeAutoOpenPopup: function (e) {
                    var { isRealClose: s = !1 } = void 0 === e ? {} : e;
                    s &&
                      t.isPageShopAdNeedsMaxNumbers &&
                      t.pageMaxNumbers &&
                      -1 !== u.f.indexOf(t.currentPopType) &&
                      t.currentShopAdIndex++,
                      (t.pageMaxNumbers &&
                        t.currentShopAdIndex === t.pageMaxNumbers) ||
                        t.handleNextPopup();
                  },
                }),
                Object(p.b)(this, ["processPaidAction"]),
                null == (e = this.ctx.hummer.mark) ||
                  null == e.log ||
                  e.log({
                    tag: "pay-result",
                    scene: ["route"],
                    extra: { isSkyline: this.ctx.data.isSkyline },
                  });
            },
            methods: {
              handleOpenShare() {
                var e;
                null != (e = this.payResult.orderTags) && e.SOLITAIRE_BUY
                  ? this.ctx.event.emit("openSolitaireDialog")
                  : this.payResult.isGroupBuy
                  ? this.ctx.event.emit("openGroupbuyShareDialog")
                  : this.ctx.event.emit("showTradeShareDialog");
              },
              formateBtnStyle: (e) =>
                "display: " + (e.block ? "block" : "inline-block"),
              tryStartPop() {
                this.hasPaid &&
                  this.waitLength >= 3 &&
                  (this.getPagePopNumbers().then(this.getPopupOrder.bind(this)),
                  this.reportWuliuLogger());
              },
              getPopupOrder() {
                var e = this,
                  t = [
                    "takeGoods",
                    "selfFetch",
                    "voucherCard",
                    "solitaire",
                    "groupbuyShare",
                    u.g.prior_use,
                  ],
                  s = [
                    u.g.logistics_subscribe,
                    u.g.pop_ad,
                    u.g.fission_coupons,
                    u.g.auto_issue_coupon,
                    u.g.card_grant,
                  ];
                Object(r.b)({ keys: s, popPosition: 5 })
                  .then(function (s) {
                    if ((void 0 === s && (s = []), 0 === s.length))
                      return Promise.reject();
                    var i = [];
                    s
                      .filter((e) => 1 === e.status)
                      .sort((e, t) => e.sort - t.sort)
                      .forEach((e, t) => {
                        i[t] = u.g[e.popType];
                      }),
                      (e.popupOrder = t.concat(i)),
                      e.handleNextPopup();
                  })
                  .catch(() => {
                    (this.popupOrder = [].concat(t, s)), this.handleNextPopup();
                  });
              },
              handleNextPopup() {
                this.currentPopupIndex++;
              },
              handlePopupOrder() {
                var e,
                  t = Object(o.b)(
                    "pay_success_express_dialog_click_" + this.kdtId
                  ),
                  s = null == (e = this.btnList[0]) ? void 0 : e.type,
                  i =
                    (this.mpData.mpId || this.mpData.followWeChatMp,
                    (e, t) => {
                      var s = e;
                      "string" == typeof e &&
                        (s = () => {
                          this.ctx.event.emit("" + e, t);
                        }),
                        setTimeout(s, 200);
                    }),
                  a = (e, t) => {
                    var s, o;
                    (this.designConfig = this.ctx.data.yunDesignConfig || l),
                      ("showSelfFetchDialog" !== e ||
                        (null != (s = this.designConfig) &&
                          s.autoPopupSelfFetchDialog)) &&
                        ("showVoucherCardDialog" !== e ||
                          (null != (o = this.designConfig) &&
                            o.autoPopupVirtualTicketDialog)) &&
                        i(e, t);
                  };
                return {
                  solitaire: () => {
                    var e;
                    null != (e = this.payResult.orderTags) && e.SOLITAIRE_BUY
                      ? i("openSolitaireDialog")
                      : this.handleNextPopup();
                  },
                  groupbuyShare: () => {
                    this.payResult.isGroupBuy
                      ? i("openGroupbuyShareDialog")
                      : this.handleNextPopup();
                  },
                  selfFetch: () => {
                    this.isRetailApp ||
                    this.payResult.isGroupBuy ||
                    "PICK_UP_CODE" !== s
                      ? this.handleNextPopup()
                      : a("showSelfFetchDialog");
                  },
                  voucherCard: () => {
                    "CARD_VOUCHER" === s
                      ? a("showVoucherCardDialog")
                      : this.handleNextPopup();
                  },
                  [u.g.logistics_subscribe]: () => {
                    "SUBSCRIPTION" !== s || t || this.hasWxSubscribePopped
                      ? this.handleNextPopup()
                      : a("showSubscriptionDialog", !0);
                  },
                  [u.g.fission_coupons]: () => {
                    var e,
                      t,
                      s =
                        Object.keys(
                          null !=
                            (e =
                              null == (t = this.newAwardInfo)
                                ? void 0
                                : t.fissionCoupon)
                            ? e
                            : {}
                        ).length > 0;
                    this.canUseTradeUmpV1 && s
                      ? i("openFissionPopup")
                      : this.handleNextPopup();
                  },
                  [u.g.auto_issue_coupon]: () => {
                    var e,
                      t,
                      s =
                        Object.keys(
                          null !=
                            (e =
                              null == (t = this.newAwardInfo)
                                ? void 0
                                : t.recommendCoupon)
                            ? e
                            : {}
                        ).length > 0;
                    this.canUseTradeUmpV1 && s && !this.payResult.isGroupBuy
                      ? i("openAutoSendCouponPopup")
                      : this.handleNextPopup();
                  },
                  [u.g.pop_ad]: () => {
                    i("showShopAdDialog", 5);
                  },
                  subsidy: () => {},
                  wishMsg: () => {},
                  [u.g.prior_use]: () => {
                    var e, t;
                    this.canUseTradeUmpV1 &&
                    null != (e = this.newAwardInfo) &&
                    null != (t = e.creditPay) &&
                    t.alert
                      ? i("showPriorUseDialog")
                      : this.handleNextPopup();
                  },
                  [u.g.card_grant]: () => {
                    var e, t;
                    Object.keys(
                      null !=
                        (e =
                          null == (t = this.newAwardInfo)
                            ? void 0
                            : t.formatedMemberCard)
                        ? e
                        : {}
                    ).length
                      ? i("showActivateBenefitcardDialog")
                      : this.handleNextPopup();
                  },
                  takeGoods: () => {
                    this.isRetailApp ||
                    this.payResult.isGroupBuy ||
                    s !== u.b.TAKE_GOODS_CODE
                      ? this.handleNextPopup()
                      : i("showTakeGoodsDialog");
                  },
                };
              },
              reportWuliuLogger() {
                this.btnList.some((e) => e.type === u.b.SUBSCRIPTION) &&
                  this.ctx.logger.log({
                    et: "view",
                    ei: "show_button_wuliu",
                    en: "“订阅物流”按钮曝光",
                    si: this.kdtId,
                  });
              },
              getPagePopNumbers() {
                var e = this;
                return new Promise((t) => {
                  getApp()
                    .getShopConfigData()
                    .then(function (s) {
                      void 0 === s && (s = {});
                      var { shop_ad_numbers_for_pages: i = "{}" } = s;
                      try {
                        e.pageMaxNumbers = (JSON.parse(i) || {}).paidSuccess;
                      } catch (e) {}
                      (e.isPageShopAdNeedsMaxNumbers = !0), t();
                    })
                    .catch(t);
                });
              },
            },
          },
          c = s("9ZMt");
        t.default = c.default.component(d);
      },
    }
  )
);
