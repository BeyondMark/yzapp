"use strict";
(exports.ids = [29]),
  (exports.modules = {
    "0e1V": function (e, t) {
      e.exports = {
        d: "state;0;footerShowStoreInfo;0;rootStyle;0;dataLoaded;2;valueCardPayPrice;0;showPrePayCards;0;orderStatusTitle;2;userTel;2;currentAddress;2;hasAddress;2;addressShowLogistics;2;addressShowSelfFetch;2;fullAddress;2;selfFetchAddressDetail;2;selfFetchContact;2;selfFetchTime;2;orderNo;2;orderStatusIcon;2;orderStatusSteps;2;orderStatusDesc;2;orderStatusCountdownInterval;2;formattedGoods;2;hasGoods;2;hasHotelGoods;0;isGrouponGoods;0;hotelGoods;0;isHotelPreSale;0;shopName;2;guaranteeFreight;0;guaranteeIsChoosedCard;0;guaranteeIsOrderPage;0;guaranteeIsPrePayPage;0;guaranteePaddingConfig;0;guaranteeGuaranteeOrderInfo;0;tradeTag;2;payState;2;paySubmitDisplayData;2;shop;2;useBeforePay;2;showPriorUseSummary;2;display;2;priceTotalPriceList;2;finalPrice;2;deliveryShowDeliveryType;0;deliveryShowCheckDeliveryScope;0;deliveryShowDeliveryTime;0;deliveryService;0;deliveryInvoiceStatus;0;deliveryShowLookCoupon;0;depositOrder;2;depositPay;2;depositShow;2;prepayCardDecrease;2;couponDecreasedPhasePayment;2;orderTime;2;chosenCoupon;2;chosenCoupons;2;goodsTotalPrice;0;grouponModel;0;periodIsPeriodBuy;0;periodIsSelfFetch;0;periodIsMultiPeriodBuy;0;periodOrder;0;idcardGoods;0;idcardOrder;0;idcard;0;idcardHasHaitaoGoods;0;idcardShop;0;orderCreated;0;orderKeepShopConfig;0;orderKeepGoods;0;orderKeepPointDeduction;0;orderKeepCoupon;0;orderKeepShop;0;orderKeepOrder;0;orderKeepApply;0;orderKeepPay;0;orderKeepDisplay;0;orderKeepPageTitle;0;currentContact;0;prepare;0;privacyWaybill;2",
        e: "",
        el: "orderClose",
        w: "",
        wc: "",
        wd: "Skeleton",
        l: "getConfig",
        lc: "",
        p: "mutateData",
        pi: "mutateData",
        c: "",
        cc: "",
        li: "onPageShow",
      };
    },
    "2wLX": function (e, t, r) {
      var a = r("Fcif"),
        o = r("esrA"),
        s = "@wsc-tee-trade/trade-pay-page-setup",
        n = "@wsc-tee-trade/trade-pay-block-container",
        i = "@wsc-tee-trade/trade-pay-pre-pay-card-cell",
        d = "@wsc-tee-trade/trade-pay-delivery-address",
        c = "@assets-tee-extensions/guarantee-components",
        u = "@assets-tee-extensions/guarantee-freight-bar",
        l = "@assets-tee-extensions/guarantee-ensure",
        p = "@wsc-tee-trade/trade-buy-order-keep",
        h = "@assets-tee-extensions/cashier-pre",
        y = "@wsc-tee-trade/trade-buy-wxvideo-block",
        v = Object(o.a)({
          a: {
            p: [
              {
                r: ["/packages/trade-pay/pay/index"],
                c: [
                  { t: "c", c: [{ t: "m", c: ["b38-24", "b38-0"] }] },
                  {
                    t: "c",
                    c: [
                      { t: "m", c: ["b38-1", "b38-30"] },
                      { t: "m", c: ["b38-10", "b38-26", "b38-33"] },
                      { t: "m", c: ["b38-14", "b38-34", "b38-18"] },
                      { t: "m", c: ["b38-12", "b38-15", "b38-20", "b38-19"] },
                      { t: "m", c: ["b38-5"] },
                    ],
                  },
                  { t: "c", c: [{ t: "m", c: ["b38-27", "b38-7", "b38-6"] }] },
                ],
                m: [
                  "b38-2",
                  "b38-3",
                  "b38-4",
                  "b38-8",
                  "b38-9",
                  "b38-11",
                  "b38-13",
                  "b38-16",
                  "b38-17",
                  "b38-21",
                  "b38-22",
                  "b38-23",
                  "b38-25",
                  "b38-28",
                  "b38-29",
                  "b38-31",
                  "b38-32",
                  "b38-35",
                  "b38-36",
                ],
              },
            ],
          },
          m: [
            [
              "b38-0",
              s,
              { e: { orderClose: [["b38-2", "countdownOver"]] } },
              { stage: "pre", asyncInit: !0 },
            ],
            [
              "b38-1",
              n,
              {
                w: {
                  MainContent: [
                    ["b38-2", "OrderGuide"],
                    ["b38-2", "OrderStatusWrapper"],
                    ["b38-4", "Contact"],
                    ["b38-4", "LogisticsWrapper"],
                    ["b38-4", "SelfFetch"],
                    ["b38-22", "GrouponHeaderCell"],
                    ["b38-4", "StripeBorder"],
                  ],
                },
              },
              { stage: "pre" },
            ],
            [
              "b38-2",
              "@wsc-tee-trade/trade-order-status",
              {
                d: {
                  icon: ["b38-0", "orderStatusIcon"],
                  title: ["b38-0", "orderStatusTitle"],
                  desc: ["b38-0", "orderStatusDesc"],
                  countdownInterval: ["b38-0", "orderStatusCountdownInterval"],
                  steps: ["b38-0", "orderStatusSteps"],
                  isGroupon: ["b38-0", "isGrouponGoods"],
                },
                w: { OrderStatus: "b38-2" },
              },
              { stage: "pre" },
            ],
            ["b38-3", i, null, { stage: "pre" }],
            [
              "b38-4",
              d,
              {
                d: {
                  showLogistics: ["b38-0", "addressShowLogistics"],
                  showSelfFetch: ["b38-0", "addressShowSelfFetch"],
                  currentContact: "b38-0",
                },
                w: { Logistics: "b38-4" },
              },
              { stage: "pre" },
            ],
            [
              "b38-5",
              "@wsc-tee-trade/trade-pay-submit",
              {
                d: {
                  setupState: ["b38-0", "payState"],
                  displayData: ["b38-0", "paySubmitDisplayData"],
                  payState: "b38-5",
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
                e: {
                  "pay:success": [
                    ["b38-7", "cashier:pay:success"],
                    ["b38-31", "cashier:pay:success"],
                  ],
                  "pay:close": [
                    ["b38-7", "cashier:close"],
                    ["b38-31", "cashier:pay:fail"],
                  ],
                  "pay:fail": [["b38-7", "cashier:pay:fail"]],
                },
                p: { startPay: [["b38-6"]] },
              },
              { stage: "pre" },
            ],
            [
              "b38-6",
              "@wsc-tee-trade/trade-buy-pay-view",
              {
                d: {
                  state: ["b38-5", "payState"],
                  useBeforePayData: ["b38-0", "useBeforePay"],
                  orderFinalPrice: ["b38-0", "finalPrice"],
                  goods: ["b38-0", "formattedGoods"],
                  isPeriodBuy: ["b38-0", "periodIsPeriodBuy"],
                },
                e: {
                  "cashier:pay:success": [["b38-7"]],
                  "cashier:pay:fail": null,
                },
                l: { checkFromChannelsLive: null },
                p: {
                  startPay: [["b38-7"]],
                  queryPayChannels: [["b38-7"]],
                  doPay: [["b38-7"]],
                  startPay_preCashier: [["b38-31", "pay"]],
                },
              },
              { stage: "pre" },
            ],
            [
              "b38-7",
              "@assets-tee-extensions/cashier",
              {
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
                p: {
                  beforePay: [["b38-6", "handleBeforePay"]],
                  onPayItemClick: [["b38-6"]],
                },
              },
              { stage: "pre" },
            ],
            ["b38-8", c, null, { stage: "pre" }],
            [
              "b38-9",
              u,
              {
                d: {
                  isChoosedCard: ["b38-0", "guaranteeIsChoosedCard"],
                  isOrderPage: ["b38-0", "guaranteeIsOrderPage"],
                  isPrePayPage: ["b38-0", "guaranteeIsPrePayPage"],
                  guaranteeOrderInfo: ["b38-0", "guaranteeGuaranteeOrderInfo"],
                  freight: ["b38-0", "guaranteeFreight"],
                  paddingConfig: ["b38-0", "guaranteePaddingConfig"],
                },
              },
              { stage: "pre" },
            ],
            [
              "b38-10",
              n,
              {
                d: {
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
                w: {
                  MainContent: [
                    ["b38-11", "GoodsListWrapper"],
                    ["b38-11", "GuaranteeFreightBarWrapper"],
                  ],
                },
              },
              { stage: "pre" },
            ],
            [
              "b38-11",
              "@wsc-tee-trade/trade-pay-goods",
              {
                d: {
                  isPreSale: ["b38-0", "isHotelPreSale"],
                  hotel: ["b38-0", "hotelGoods"],
                  totalPrice: ["b38-0", "priceTotalPriceList"],
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
                w: { GoodsList: "b38-11", GuaranteeFreightBar: "b38-9" },
              },
              { stage: "pre" },
            ],
            [
              "b38-12",
              n,
              {
                d: {
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
                w: { MainContent: ["b38-13", "PricePanel"] },
              },
              { stage: "normal" },
            ],
            [
              "b38-13",
              "@wsc-tee-trade/trade-pay-price",
              {
                d: {
                  totalPriceList: ["b38-0", "priceTotalPriceList"],
                  useBeforePayData: ["b38-0", "useBeforePay"],
                  isPreCashierPay: null,
                  isPriorUseChosen: null,
                },
              },
              { stage: "normal" },
            ],
            [
              "b38-14",
              n,
              { w: { MainContent: ["b38-28", "Service"] } },
              { stage: "pre" },
            ],
            [
              "b38-15",
              n,
              {
                w: {
                  MainContent: [
                    ["b38-29", "PreSaleCellWrapper"],
                    ["b38-16", "Time"],
                  ],
                },
              },
            ],
            [
              "b38-16",
              "@wsc-tee-trade/detail-time",
              {
                d: {
                  time: ["b38-0", "orderTime"],
                  kdtId: null,
                  miniprogram: null,
                },
              },
              { properties: { cloudExcluded: !0 } },
            ],
            [
              "b38-17",
              "@wsc-tee-trade/detail-coupon",
              {
                d: {
                  coupons: ["b38-0", "chosenCoupons"],
                  coupon: ["b38-0", "chosenCoupon"],
                },
              },
              { properties: { cloudExcluded: !0 } },
            ],
            ["b38-18", n, { w: { MainContent: ["b38-17", "Coupon"] } }],
            [
              "b38-19",
              "@wsc-tee-shop/footer",
              {
                d: {
                  isShowStoreInfo: ["b38-0", "footerShowStoreInfo"],
                  buyerId: null,
                  miniprogram: null,
                },
              },
            ],
            ["b38-20", l, null, { properties: { yzGuaranteeEnsureMt: 16 } }],
            [
              "b38-21",
              "@wsc-tee-trade/detail-shop",
              {
                d: {
                  order: ["b38-0", "periodOrder"],
                  isSelfFetch: ["b38-0", "periodIsSelfFetch"],
                  isPeriodBuy: ["b38-0", "periodIsPeriodBuy"],
                  isMultiPeriodBuy: ["b38-0", "periodIsMultiPeriodBuy"],
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                  miniprogram: null,
                },
                p: { handleUrlWithShopAutoEnter: null },
              },
              {
                properties: { titleColor: "#969799", valueColor: "#323233" },
                stage: "normal",
              },
            ],
            [
              "b38-22",
              "@wsc-tee-trade/trade-pay-groupon",
              null,
              { stage: "pre" },
            ],
            [
              "b38-23",
              "@wsc-tee-trade/trade-pay-idcard",
              {
                d: {
                  order: ["b38-0", "idcardOrder"],
                  hasHaitaoGoods: ["b38-0", "idcardHasHaitaoGoods"],
                },
              },
              { stage: "pre" },
            ],
            [
              "b38-24",
              p,
              {
                d: {
                  orderFinalPrice: ["b38-0", "finalPrice"],
                  shopConfig: ["b38-0", "orderKeepShopConfig"],
                  goods: ["b38-0", "orderKeepGoods"],
                  pointDeduction: ["b38-0", "orderKeepPointDeduction"],
                  coupon: ["b38-0", "orderKeepCoupon"],
                  pay: ["b38-0", "orderKeepPay"],
                  order: ["b38-0", "orderKeepOrder"],
                  titleText: ["b38-0", "orderKeepPageTitle"],
                },
              },
              { stage: "pre" },
            ],
            ["b38-25", n, { w: { MainContent: ["b38-3", "PrePayCardCell"] } }],
            [
              "b38-26",
              n,
              { w: { MainContent: ["b38-21", "Period"] } },
              { stage: "normal" },
            ],
            ["b38-27", "@wsc-tee-shop/shop-rest", null, { stage: "pre" }],
            [
              "b38-28",
              "@wsc-tee-trade/trade-pay-service",
              {
                d: {
                  showDeliveryType: ["b38-0", "deliveryShowDeliveryType"],
                  showCheckDeliveryScope: [
                    "b38-0",
                    "deliveryShowCheckDeliveryScope",
                  ],
                  showDeliveryTime: ["b38-0", "deliveryShowDeliveryTime"],
                  service: ["b38-0", "deliveryService"],
                },
              },
              { stage: "pre" },
            ],
            [
              "b38-29",
              "@wsc-tee-trade/trade-pay-presale",
              {
                d: {
                  showDeposit: ["b38-0", "depositShow"],
                  order: ["b38-0", "depositOrder"],
                  pay: ["b38-0", "depositPay"],
                },
                w: { PreSaleCell: "b38-29" },
              },
            ],
            [
              "b38-30",
              n,
              { w: { MainContent: ["b38-23", "Main"] } },
              { stage: "normal" },
            ],
            [
              "b38-31",
              h,
              {
                d: {
                  amount: ["b38-6", "orderAmount"],
                  mobile: ["b38-6", "buyerPhone"],
                  traceId: ["b38-0", "orderNo"],
                  excludePayChannels: ["b38-6", "excludePayTools"],
                  viewportMargins: "b38-32",
                },
                p: { getIsSyncOrder: [["b38-35"]] },
              },
              { stage: "pre" },
            ],
            [
              "b38-32",
              "trade-buy-cashier-wrap",
              {
                d: { goods: ["b38-0", "formattedGoods"] },
                w: { Cashier: ["b38-31", "CellGroup"] },
              },
            ],
            ["b38-33", n, { w: { MainContent: ["b38-32", "Main"] } }],
            [
              "b38-34",
              "trade-buy-privacy-bill",
              null,
              { properties: { isPayPage: !0 } },
            ],
            ["b38-35", y, null],
            ["b38-36", "@ext-tee-wxvideo/wxvideo-utils", null],
          ],
          e: [
            [s, r("0e1V"), { asyncInit: !0 }],
            [n, r("EFTn")],
            ["@wsc-tee-trade/trade-order-status", r("x7gW")],
            [i, r("3wmw")],
            [d, r("HogY")],
            ["@wsc-tee-trade/trade-pay-submit", r("7c++")],
            ["@wsc-tee-trade/trade-buy-pay-view", r("MjBJ")],
            ["@assets-tee-extensions/cashier", r("9aHS")],
            [c, r("w8Br")],
            [u, r("bsi0")],
            ["@wsc-tee-trade/trade-pay-goods", r("YWbg")],
            ["@wsc-tee-trade/trade-pay-price", r("CWbA")],
            ["@wsc-tee-trade/detail-time", r("09Dq")],
            ["@wsc-tee-trade/detail-coupon", r("qRrS")],
            ["@wsc-tee-shop/footer", r("+zL3")],
            [l, r("KUiv")],
            ["@wsc-tee-trade/detail-shop", r("hcXH")],
            ["@wsc-tee-trade/trade-pay-groupon", r("NdDv")],
            ["@wsc-tee-trade/trade-pay-idcard", r("nnaz")],
            [p, r("8aMX")],
            ["@wsc-tee-shop/shop-rest", r("oDd3")],
            ["@wsc-tee-trade/trade-pay-service", r("fb1X")],
            ["@wsc-tee-trade/trade-pay-presale", r("BRPL")],
            [h, r("XNep")],
            ["trade-buy-cashier-wrap", r("8JL1")],
            ["trade-buy-privacy-bill", r("0E+e")],
            [y, r("Iybf")],
            ["@ext-tee-wxvideo/wxvideo-utils", r("Rl7e")],
          ],
        }),
        g = r("9ZMt"),
        f = r("eijD"),
        m = r("YeA1"),
        P = r("9DIb"),
        b = r.n(P),
        C = r("n3Lk"),
        w = r.n(C),
        O = r("5Xe+"),
        S = r.n(O);
      function x(e) {
        return !((t = e),
        (r = typeof t),
        null === t ||
          ("object" !== r && "function" !== r) ||
          Object.keys(e).length);
        var t, r;
      }
      function T(e, t, r) {
        void 0 === r && (r = "积分");
        var a = [];
        return (
          t && a.push(t + r),
          (!e && t) || a.push("¥" + (e / 100).toFixed(2)),
          a.join(" + ")
        );
      }
      r("qYBx");
      var I = r("yk8n"),
        E = {
          cacheKey: { addressDowngrade: "address_downgrade" },
          phaseStatus: {
            WAIT_PAY: "待付款",
            WAIT_PAY_START: "未开始",
            PAID: "已付",
            CLOSE: "已关闭",
            SUCCESS: "已完成",
          },
          umpBenefitChannelType: { subscription: 118, wechatWork: 119 },
          freightInsuranceTag: { NONE: "0", SELF: "1", FREE: "2" },
          groupon: { forbidReceive: 0, optionalReceive: 1, forceReceive: 2 },
          activityMap: {
            3: "降价拍",
            4: "拼团",
            6: "秒杀",
            8: "赠品",
            10: "会员折扣",
            11: "限时折扣",
            23: "抽奖团",
            24: "换购",
            26: "拼团",
          },
          shopStock: { default: 0, full: 1, none: 2, part: 3 },
          HOTEL_ORDER_TYPE: { calendar: 1, preOrder: 2, preSale: 3 },
        };
      function D(e) {
        var t = (null == e ? void 0 : e.tradeConfirmation) || {},
          r = (null == e ? void 0 : e.address) || {},
          o = e.displayConfig || {},
          s = t.delivery || {},
          { showExpressTab: n } = o,
          i = o.canSelfFetch || "selfFetch" in s,
          { activeTab: d } = r;
        return (
          n && !i ? (d = 0) : !n && i && (d = 1),
          Object(a.a)({}, r, {
            isSelfFetchDefault:
              (null == o ? void 0 : o.openSelfDefaultSwitch) || !1,
            activeTab: d,
          })
        );
      }
      function k(e) {
        var t = e.displayConfig || {},
          r = (null == e ? void 0 : e.tradeConfirmation) || {},
          o = r.delivery || {},
          s = r.postage || {},
          n = (null == e ? void 0 : e.shopDelivery) || {},
          i = (null == e ? void 0 : e.deliveryTimeBucket) || {},
          d = Object(a.a)({}, o, {
            text: o.text || s.deliveryTimeDisplay || "",
          });
        if ((x(n) || (d = Object(a.a)({}, d, n)), !x(i))) {
          var { instantTimePoint: c, timeBuckets: u, timeSpan: l } = i,
            { textWithWeekday: p, text: h } = d;
          c &&
            !t.showLocalDeliveryTime &&
            ((p = "尽快送达（预计 " + I.a.time(new Date(c)) + "）"),
            (h = I.a.dateTime(new Date(c)))),
            (d = Object(a.a)({}, d, {
              timeSpan: l,
              timeBucket: u,
              deliveryTimeBucket: i,
              textWithWeekday: p,
              text: h,
              instantTimePoint: c,
            }));
        }
        return d;
      }
      function N(e) {
        var t = (null == e ? void 0 : e.tradeConfirmation) || {},
          r = e.displayConfig || {},
          o = t.delivery || {},
          s = (null == e ? void 0 : e.deliveryTimeBucket) || {},
          n = {
            time: r.selfFetchTime || "",
            isAllow: r.canSelfFetch || "selfFetch" in o,
          };
        return x(s)
          ? n
          : Object(a.a)({}, n, {
              timeSpan: s.timeSpan,
              timeBucket: s.timeBuckets,
              deliveryTimeBucket: s,
            });
      }
      function _(e) {
        var t = (null == e ? void 0 : e.tradeConfirmation) || {},
          r = (null == e ? void 0 : e.contact) || {},
          o = e.displayConfig || {},
          s = t.orderItems || [],
          n = (null == r ? void 0 : r.id) || "",
          i =
            ((null == r ? void 0 : r.list) || []).find((e) => e.id === n) || {};
        return Object(a.a)({}, r, {
          required:
            !o.showAddressTab &&
            s.some((e) => {
              var { virtualType: t } = e;
              return 3 === t;
            }),
          userName: i.userName || r.userName,
          telephone: i.telephone || r.telephone,
        });
      }
      function A(e) {
        var t,
          r = (null == e ? void 0 : e.tradeConfirmation) || {};
        return {
          list: r.orderItems || [],
          unavailable: r.unavailableItems || [],
          prepareTime:
            (null == (t = r.deliveryCheck) ? void 0 : t.prepareTime) || 0,
        };
      }
      function j(e) {
        var t, r, o;
        return Object(a.a)(
          {
            activityId:
              null == e ||
              null == (t = e.tradeConfirmation) ||
              null == (r = t.orderItems)
                ? void 0
                : r[0].activityId,
            extensions: (null == e ? void 0 : e.extensions) || {},
            agreeDeposit: !1,
            couponDisplay: !0,
            showDepositAgreementVal: !0,
            orderNo: e.orderNo || "",
            orderNos: e.orderNos || [],
          },
          (null == e || null == (o = e.tradeConfirmation)
            ? void 0
            : o.orderConfig) || {}
        );
      }
      function R(e) {
        var t,
          r,
          o = (null == e ? void 0 : e.tradeConfirmation) || {},
          s = null == o ? void 0 : o.orderPayment,
          n = (null == e ? void 0 : e.prePaymentPreparation) || {},
          i = (null == o ? void 0 : o.assetPayInfos) || [],
          d = (null == o ? void 0 : o.tag) || {},
          c =
            (null == (t = window) || null == (r = t.navigator)
              ? void 0
              : r.userAgent) || "";
        return (
          d.continuousOrder
            ? (n.scene = "MEM_SUB")
            : /QQ_APP_Subscribe/gi.test(c)
            ? (n.scene = "QQ_SUBSCRIBE")
            : (n.scene = "VALUE_COMMON"),
          Object(a.a)({}, s, {
            prepayParams: n,
            extraFees: s.extraFees || [],
            payParams: null == e ? void 0 : e.paymentPreparation,
            phasePayment: null == o ? void 0 : o.phasePayment,
            multiPhase: null == o ? void 0 : o.multiPhasePayment,
            extPoint: n.extPointPayResultVO,
            assetPayInfos: i,
          })
        );
      }
      function F(e) {
        var { tradeConfirmation: t = {} } = e;
        return Object(a.a)({}, t.shop || {}, { activityType: t.activityType });
      }
      function G(e) {
        var t = e["@cashier/prior-use"] || {};
        return {
          show: (null == t ? void 0 : t.show) || !1,
          enable: (null == t ? void 0 : t.enable) || !0,
          confirm: (null == t ? void 0 : t.confirm) || "0",
          protocol: (null == t ? void 0 : t.protocol) || !1,
          range: (null == t ? void 0 : t.range) || [null, null],
          reason: (null == t ? void 0 : t.reason) || [null, null],
        };
      }
      function B(e) {
        var t = (null == e ? void 0 : e.tradeConfirmation) || {},
          r = ((null == t ? void 0 : t.orderItems) || [])[0] || {};
        return {
          show: !!r.issue,
          info: r.issue || "",
          planTime: r.planExpressTime || "",
          options: r.deliverOptions || [],
          chosenOption: r.deliverOption || "",
        };
      }
      function M(e) {
        var t = (null == e ? void 0 : e.tradeConfirmation) || {},
          r = (null == t ? void 0 : t.orderPayment) || {},
          a = {
            valueCard: {},
            list: (null == t ? void 0 : t.payValueCards) || [],
            disabled: (null == t ? void 0 : t.unavailablePayValueCards) || [],
            checked: (t.payValueCards || [])
              .filter((e) => e.selected)
              .map((e) => e.summaryCardNo),
          };
        return 0 === r.realPay && (a.valueCard.checked = []), a;
      }
      function U(e) {
        var t = (null == e ? void 0 : e.tradeConfirmation) || {},
          { group: r = {}, activityType: o } = t,
          s = {};
        return (
          x(r) ||
            (r.receiveState === E.groupon.forceReceive && (s.isChecked = !0),
            (s = Object(a.a)({}, s, {
              isGroupon: !0,
              isHeader: r.header,
              showAgencyReceive: r.displayAgencyReceive,
              receiveState: r.receiveState,
              headerName: r.headerUserName || "",
              activityType: o,
            })),
            r.headerUserName &&
              (s.headerAddress = {
                userName: r.headerUserName,
                tel: r.headerTel,
                province: r.headerProvince,
                city: r.headerCity,
                county: r.headerCounty,
                areaCode: r.headerAreaCode,
                addressDetail: r.headerAddressDetail,
                community: r.headerCommunity,
                idCardNumber: r.idCardNumber,
              })),
          s
        );
      }
      function L(e) {
        var { shopConfig: t = {} } = e;
        return Object(a.a)({ goodsTradeMarquee: null, abConfigInfo: {} }, t);
      }
      function W(e) {
        var t = (null == e ? void 0 : e.tradeConfirmation) || {},
          { pointDeduction: r = {} } = t;
        return Object(a.a)({}, r);
      }
      var z = function (e) {
          var t,
            { prepare: r = {} } = void 0 === e ? {} : e,
            o = (null == r ? void 0 : r.tradeConfirmation) || {},
            s = o.delivery || {},
            [n, i] = (function (e) {
              var t,
                r = (null == e ? void 0 : e.tradeConfirmation) || {},
                a = r.orderConfig || {},
                o = r.orderPayment || {},
                s =
                  (null == (t = e.orderCreation)
                    ? void 0
                    : t.newCouponProcess) || "",
                n = {
                  chosenId: 0,
                  chosenIds: [],
                  list: r.coupons || [],
                  disabledList: r.unavailableCoupons || [],
                };
              if (0 === o.realPay) {
                if (s || a.newCouponProcess) {
                  var i = n.list.find((e) => e.choose) || {};
                  n.chosenId = (null == i ? void 0 : i.id) || 0;
                } else n.chosenId = 0;
                return [n, !0];
              }
              if (s || a.newCouponProcess) {
                var d = n.list.find((e) => e.choose) || {};
                return (n.chosenId = d.id || 0), [n, !1];
              }
              var c = n.list[0] || {};
              return (
                null != c.value &&
                  void 0 !== c.value &&
                  ((n.chosenId = c.id || 0),
                  (n.chosenIds = n.list.map((e) => e.id))),
                [n, !1]
              );
            })(r),
            d = {
              env: { isPayPage: !0 },
              display: (function (e) {
                var t = e.displayConfig || {},
                  r = (null == e ? void 0 : e.tradeConfirmation) || {},
                  o = 60 * (new Date().getTimezoneOffset() + 480) * 1e3;
                return Object(a.a)({}, t, {
                  newRecommend: r.newRecommend,
                  serverTime: t.serverTime + o,
                  invoiceContent: +(
                    (null == t ? void 0 : t.invoiceContent) || 11
                  ),
                  payPrompt: (null == t ? void 0 : t.payPrompt) || "",
                  prompt: (null == t ? void 0 : t.prompt) || "",
                  selectedInstallmentPeriod:
                    (null == t ? void 0 : t.selectedInstallmentPeriod) || 0,
                  installmentRate:
                    (null == t ? void 0 : t.installmentRate) || 0,
                  showCouponBlock: !0,
                  showGoodsBlock: !0,
                  showBuyerMemoBlock: !0,
                });
              })(r),
              tradeTag:
                (null == r || null == (t = r.tradeConfirmation)
                  ? void 0
                  : t.tradeTag) || {},
              user: { delivery: s },
              pointsName:
                "string" == typeof r.pointsName ? r.pointsName : "积分",
              memberCard: o.memberCard || {},
              postage: o.postage || {},
              shop: F(r),
              pay: R(r),
              order: j(r),
              address: D(r),
              delivery: k(r),
              contact: _(r),
              selfFetch: N(r),
              goods: A(r),
              useBeforePay: G(r),
              displayCard: (null == o ? void 0 : o.displayCard) || {},
              points: r.pointsConfig || {},
              coupon: n,
              valueCard: M(r),
              periodBuy: B(r),
              fissionActivity: o.fissionActivity || {},
              groupon: U(r),
              shopConfig: L(r),
              pointDeduction: W(r),
              orderKeepApply: !!r.orderKeepApply,
              orderCreated: !0,
              extra: o.extra || {},
            };
          return (
            i && (d.valueCard.checked = []),
            Object.assign(
              d,
              Object(a.a)(
                {},
                (function (e) {
                  var t = !1,
                    r = (null == e ? void 0 : e.tradeConfirmation) || {},
                    { orderItems: a = [], phasePayment: o = {} } = r;
                  return (
                    a[0] &&
                      116 === a[0].activityType &&
                      o.currentPhase &&
                      1 === o.currentPhase &&
                      (t = !0),
                    { isHandselFirstPhase: t }
                  );
                })(r)
              )
            ),
            d
          );
        },
        H = r("mztD"),
        Y = r("JijB"),
        K = r.n(Y),
        V = r("sqpL");
      function q(e, t, r, a) {
        var o = [];
        return (
          r && o.push(r + a),
          (!t && r) || o.push(e + (t / 100).toFixed(2)),
          o.join(" + ")
        );
      }
      var J = {
        0: ["发货", "后发货", "开始发货"],
        1: ["可自提", "后可自提", "开始可自提"],
        2: ["配送", "后配送", "开始配送"],
      };
      function Q(e) {
        var { state: t, getters: r } = e,
          { goods: a, memberCard: o, shop: s, pointsName: n } = t;
        return a.list
          .filter((e) => !e.fromTmpAdded)
          .map((e) => {
            if (
              e.presale &&
              ("express" === r.expressType || 0 === e.presaleType)
            ) {
              var i = 1 === e.presaleType ? 0 : r.postage.currentExpressType;
              (e.showDeliveryTime = !0),
                (e.deliveryTime = (function (e, t, r) {
                  var a = e.presaleStartTime,
                    o = e.presaleEndTime,
                    [s, n, i] = J[r];
                  if (!e.presale) return "";
                  if (0 === e.presaleTimeType) {
                    var d = new Date(),
                      c = new Date(a),
                      u =
                        (d.getFullYear() === c.getFullYear() ? "" : "YYYY年") +
                        "MM月DD号";
                    return K()(c, u) + " " + i;
                  }
                  if (1 === e.presaleTimeType)
                    return (
                      (t.multiPhase ? "尾款支付" : "付款") +
                      " " +
                      e.presaleStartTimeAfterPay +
                      " 天" +
                      n
                    );
                  var l = K()(a, "MM月DD号"),
                    p = K()(o, "MM月DD号");
                  return a && o
                    ? "预计 " + (l === p ? l : l + " ~ " + p)
                    : a
                    ? l + i
                    : o
                    ? "最晚" + p + s
                    : "";
                })(e, t.pay, i));
            }
            if (
              (o.renewal &&
                o.memberCardStartTime &&
                o.memberCardEndTime &&
                ((e.memberCardEndTime = K()(o.memberCardEndTime, "YYYY.MM.DD")),
                (e.memberCardStartTime = K()(
                  o.memberCardStartTime,
                  "YYYY.MM.DD"
                ))),
              e.present
                ? (e.acvitityTag = "赠品")
                : 1 == +e.haitao
                ? (e.acvitityTag = "海淘")
                : e.isUseGoodsExchangeCoupon
                ? (e.acvitityTag = "兑换券")
                : "activityType" in e &&
                  (e.acvitityTag = E.activityMap[e.activityType]),
              (e.isECard = 3 === e.virtualType),
              e.isECard)
            ) {
              var { quotaNum: d, stockNum: c, buyedNum: u = 0 } = e;
              (e.canChangeNum =
                null != c &&
                "" !== c &&
                a.list.every((e) => !e.isUseGoodsExchangeCoupon)),
                e.canChangeNum
                  ? (e.maxNum = d > 0 ? Math.min(d - u, c) : c)
                  : (e.maxNum = 2147483647);
            }
            return (
              (e.tags = []),
              e.presale && e.tags.push("预售"),
              e.isFission && e.tags.push("内购价"),
              e.quickRefund && e.tags.push("自动退款"),
              r.isPeriodBuy && e.tags.push("周期购"),
              20 === s.activityType && e.tags.push("F码专享"),
              21 === s.activityType && e.tags.push("砍价"),
              (e.url = Object(H.a)(e.imgUrl, "!180x180.jpg")),
              (e.payPriceStr = q("", e.payPrice, e.pointsPrice, n)),
              (e.desc = Object(V.a)(e, t.memberCard)),
              e.price > e.payPrice &&
                e.payPrice &&
                (e.PriceStr = q("", e.price, null, n)),
              t.tradeTag.hasHotelGoods &&
                (e.goodsDate = I.a.monthDay(new Date(e.hotelSkuDate))),
              "{}" === JSON.stringify(e.message) && (e.message = null),
              e
            );
          });
      }
      var X = r("uzJ0"),
        Z = r.n(X);
      function $(e) {
        var t, r, a;
        return (
          void 0 === e && (e = {}),
          (null == (t = e.pay) ? void 0 : t.multiPhase) &&
            "DOWN_PAYMENT_PRE" ===
              (null == (r = e.pay) || null == (a = r.phasePayment)
                ? void 0
                : a.bizCode)
        );
      }
      function ee(e) {
        return e.pay.phasePayment && e.pay.phasePayment.phaseItems
          ? e.pay.phasePayment.phaseItems.reduce(
              (e, t) => e.payUmpDiscountMoney + t.payUmpDiscountMoney
            )
          : 0;
      }
      function te(e) {
        var { postage: t } = e,
          r = (null == t ? void 0 : t.postageItems) || [];
        return (
          (Array.isArray(r) &&
            r.filter((e) => e.expressType === t.currentExpressType)[0]) ||
          {}
        );
      }
      function re(e) {
        var {
          show: t = !1,
          enable: r = !1,
          confirm: a = "0",
        } = e.useBeforePay || {};
        return t && r && "1" === a;
      }
      var ae = function (e) {
        var { state: t = {} } = void 0 === e ? {} : e,
          r = (function (e) {
            return e.display.showExpressTab && e.selfFetch.isAllow
              ? 1 === e.address.activeTab
                ? "self-fetch"
                : "express"
              : e.selfFetch.isAllow
              ? "self-fetch"
              : "express";
          })(t),
          a = (function (e) {
            return e.periodBuy.info || e.periodBuy.planTime;
          })(t),
          o = (function (e) {
            return e.coupon.list
              .concat(e.coupon.externalList || [])
              .map(
                (e) => (
                  e.condition &&
                    (e.condition = e.condition.replace(/[,，]/gi, "\n")),
                  e
                )
              );
          })(t),
          s = (function (e, t) {
            return (
              void 0 === t && (t = {}),
              t.allCoupons.find((t) => t.id === e.coupon.chosenId) || {}
            );
          })(t, { allCoupons: o }),
          n = (function (e, t) {
            return (
              void 0 === t && (t = {}),
              e.coupon.chosenIds.length
                ? t.allCoupons.filter((t) =>
                    e.coupon.chosenIds.find((e) => e === t.id)
                  )
                : Object.keys(t.chosenCoupon).length
                ? [t.chosenCoupon]
                : []
            );
          })(t, { allCoupons: o, chosenCoupon: s }),
          { newCouponProcess: i } = t.order,
          d = (function (e, t) {
            return t.allCoupons.findIndex((t) => t.id === e.coupon.chosenId);
          })(t, { allCoupons: o }),
          c = { chosenCoupons: n }.chosenCoupons.reduce(
            (e, t) => e + (t.value || t.denominations || 0),
            0
          ),
          u = (function (e, t) {
            return t.newCouponProcess
              ? Math.max(0, e.pay.realPay)
              : Math.max(0, e.pay.realPay - t.couponDecrease);
          })(t, { newCouponProcess: i, couponDecrease: c }),
          l =
            ((function (e, t) {
              var { pay: r } = e;
              if (!r.multiPhase) return [];
              var a = r.phasePayment.phaseItems.map((e) => e.currentPrice),
                o = t.couponDecrease;
              t.newCouponProcess && (o = 0);
              var s = [];
              (s[1] = Math.max(e.pay.postage, 0, a[1] - o)),
                (o -= a[1] - s[1]),
                (s[0] = Math.max(0, a[0] - o));
            })(t, { couponDecrease: c }),
            (function (e) {
              e.valueCard.list
                .filter(
                  (t) => -1 !== e.valueCard.checked.indexOf(t.summaryCardNo)
                )
                .map((e) => e.balance)
                .reduce((e, t) => e + t, 0);
            })(t),
            (function (e) {
              var { pay: t } = e;
              return t.valueCardPayPrice || 0;
            })(t)),
          p = (function (e) {
            var { pay: t } = e;
            return t.multiPhase
              ? t.phasePayment.phaseItems
                  .map((e) => e.buyerRealPay)
                  .map((e) => Z()(e))
              : [];
          })(t),
          h = (function (e, t) {
            var { finalPhasePayment: r } = t,
              { pay: a } = e;
            return a.multiPhase
              ? r[a.phasePayment.currentPhase - 1]
              : Z()(a.realPay);
          })(t, { finalPhasePayment: p });
        return {
          isDepositPresale: $(t),
          currentPostage: te(t),
          showPriorUseSummary: re(t),
          expressType: r,
          isPeriodBuy: a,
          formattedGoods: Q({
            state: t,
            getters: { expressType: r, isPeriodBuy: a, postage: t.postage },
          }),
          hasDisplayCard: !x(t.displayCard) && t.display.openDisplayCard,
          chosenCoupon: s,
          chosenCoupons: n,
          chosenCouponIndex: d,
          couponDecrease: c,
          payUmpDiscountMoney: ee(t),
          couponDecreasedPrice: u,
          prepayCardDecrease: l,
          finalPhasePayment: p,
          finalNeedPayPrice: h,
          newCouponProcess: t.order.newCouponProcess,
          showGrouponCell:
            "express" === r &&
            t.groupon.showAgencyReceive &&
            !(!t.groupon.isHeader && !t.groupon.isChecked),
          isGrouponOptionalReceive:
            E.groupon.optionalReceive === t.groupon.receiveState,
        };
      };
      function oe(e) {
        var { state: t } = e,
          { multiPhase: r, phasePayment: a } = t.pay;
        return (
          (r &&
            2 === a.currentPhase &&
            a.phaseItems[1].payStartTime > Date.now()) ||
          !1
        );
      }
      function se(e) {
        var { state: t, getters: r } = e;
        return r.isDepositPresale
          ? 1 === t.pay.phasePayment.currentPhase
            ? "等待买家付定金"
            : r.waitPhaseTwoStart
            ? "等待尾款支付开始"
            : "等待买家付尾款"
          : "等待买家付款";
      }
      function ne(e) {
        var t,
          { prepare: r } = e;
        return (
          (null == r || null == (t = r.tradeConfirmation) ? void 0 : t.steps) ||
          []
        );
      }
      function ie(e) {
        var { state: t, getters: r } = e,
          { multiPhase: a, phasePayment: o = {} } = t.pay;
        if (r.waitPhaseTwoStart) {
          var { payStartTime: s, payEndTime: n } = o.phaseItems[1];
          (s = new Date(s)), (n = new Date(n));
          var i = (e) =>
            I.a.date(e, "yyyy.mm.dd") + " " + I.a.time(e, "hh.mm.ss");
          return "尾款：" + i(s) + " - " + i(n);
        }
        var d = "款";
        return (
          a && 2 === o.currentPhase && (d = "尾款"),
          "请于#{counterText}内付" + d + "，超时订单将自动关闭"
        );
      }
      var de = r("ADTe");
      function ce(e) {
        var { state: t } = e,
          { selfFetch: r } = t.user.delivery;
        if (r) return r.name + " " + Object(de.a)(r);
        var { shop: a } = t.selfFetch;
        if (!a) return "选择提货地址";
        var o,
          s =
            (o = a).distance < 0
              ? ""
              : o.distance > 1e3
              ? (o.distance / 1e3).toFixed(2) + "km"
              : o.distance + "m";
        return a.name + " " + Object(de.a)(a) + " " + (s ? "|" : "") + " " + s;
      }
      function ue(e) {
        var { state: t } = e,
          { selfFetch: r } = t.user.delivery;
        if (r) return r.appointmentPerson + " " + r.appointmentTel;
        var a = t.currentContact;
        return null != a && a.id
          ? a.userName + " " + a.telephone
          : "选择提货人";
      }
      function le(e) {
        var { state: t } = e,
          { selfFetch: r } = t.user.delivery;
        if (r) return r.appointmentTime;
        var { time: a, shop: o } = t.selfFetch;
        return a || (o ? "请按约定时间提货" : "选择提货时间");
      }
      function pe(e) {
        var { state: t } = e,
          r = {},
          { contacts: o } = t.user.delivery;
        o
          ? (r = { id: o.id, userName: o.recipients, tel: o.tel })
          : (r =
              (t.contact.list || []).filter((e) => e.id === t.contact.id)[0] ||
              {});
        return Object(a.a)({ required: t.contact.required }, r);
      }
      var he = function (e) {
        var { state: t } = e,
          r = t.delivery || {},
          a = (function (e) {
            var t,
              { state: r } = e,
              { address: a } = r.user.delivery,
              { groupon: o = {} } = r;
            return a
              ? ((a.userName = a.recipients), a)
              : o.isGroupon &&
                !o.isHeader &&
                (o.receiveState === E.groupon.forceReceive || o.isChecked)
              ? r.groupon.headerAddress
              : (null == (t = r.address.list)
                  ? void 0
                  : t.filter((e) => e.id === r.address.id)[0]) || {};
          })(e);
        return {
          userTel: (r.selfFetch || {}).tel,
          currentAddress: a,
          hasAddress: !x(a),
          addressShowSelfFetch: Boolean(
            !t.display.hideSelfFetch &&
              t.display.showAddressTab &&
              t.selfFetch.isAllow
          ),
          addressShowLogistics: Boolean(
            t.display.showAddressTab && t.display.showExpressTab
          ),
          currentContact: pe(e),
          fullAddress: Object(de.a)(a),
          selfFetchAddressDetail: ce(e),
          selfFetchContact: ue(e),
          selfFetchTime: le(e),
        };
      };
      function ye(e) {
        var t,
          { state: r = {} } = e;
        return Object(a.a)(
          {},
          S()(r, [
            "isYZRM",
            "isWeappMars",
            "isWeappGuang",
            "isFxZpp",
            "isHandselFirstPhase",
            "tradeTag",
          ]),
          {
            display: r.display,
            groupon: r.groupon,
            shop: Object(a.a)({}, S()(r.shop, ["kdtId", "activityType"])),
            order: Object(a.a)(
              {},
              S()(r.order, ["orderNo", "orderNos", "outBizNo", "activityId"]),
              {
                extentions: Object(a.a)(
                  {},
                  S()(null == (t = r.order) ? void 0 : t.extensions, [
                    "BIZ_ORDER_ATTRIBUTE",
                  ])
                ),
              }
            ),
            pay: Object(a.a)(
              {},
              S()(r.pay, [
                "prepayParams",
                "payParams",
                "extPoint",
                "phasePayment",
              ])
            ),
            goods: {
              list: r.goods.list.map((e) =>
                Object(a.a)({}, S()(e, ["goodsId", "goodsType"]))
              ),
            },
          }
        );
      }
      function ve(e) {
        var t,
          r,
          { state: a, getters: o } = e,
          { display: s } = a,
          {
            isDepositPresale: n,
            prepayCardDecrease: i,
            showPriorUseSummary: d,
          } = o,
          c = {
            label: "合计",
            price: "",
            finalNeedPayPrice: o.finalNeedPayPrice,
            desc: "",
            buttonText: "去支付",
            disabled: !1,
            tips: "",
          };
        ((c.disabled = s.forbidPay),
        (c.tips = s.prompt),
        d
          ? ((c.price = "0.00"), (c.buttonText = "提交订单"))
          : (c.price = o.finalNeedPayPrice),
        n) &&
          (c.label =
            1 ===
            (null == (t = a.pay) || null == (r = t.phasePayment)
              ? void 0
              : r.currentPhase)
              ? "定金"
              : "尾款");
        return (
          i &&
            (c.desc =
              "储值抵扣：¥ " +
              (function (e) {
                return void 0 === e && (e = 0), (e / 100).toFixed(2);
              })(i)),
          c
        );
      }
      function ge(e) {
        var { state: t } = e,
          r = "";
        try {
          var a,
            o = JSON.parse(
              (null == (a = t.pay.payParams) ? void 0 : a.bizExt) || "{}"
            );
          o.ORDER_CREATE_TIME && (r = Number(o.ORDER_CREATE_TIME));
        } catch (e) {
          r = 0;
        }
        return r;
      }
      function fe(e) {
        var { state: t } = e,
          { kdtId: r } = t.delivery,
          { list: a } = t.goods,
          {
            yzGuarantee: o,
            freightInsurance: s,
            freightInsuranceFree: n,
          } = t.display,
          { orderNos: i } = t.order;
        return {
          aliases: a.filter((e) => !e.present).map((e) => e.alias || ""),
          hasYzSecured: o,
          orderNo: i[0],
          orderStatus: 10,
          hasFreightInsurance: s,
          freightInsuranceFree: n,
          orderCreateTime: ge({ state: t }),
          kdtId: r,
        };
      }
      var me = r("kWwd"),
        Pe = r.n(me),
        be = r("81cE");
      function Ce(e) {
        return e.pay.phasePayment && e.pay.phasePayment.phaseItems
          ? e.pay.phasePayment.phaseItems.reduce(
              (e, t) => e + t.payUmpDiscountMoney,
              0
            )
          : 0;
      }
      function we(e, t, r, a) {
        var o = [];
        return (
          r && o.push(r + a),
          (!t && r) || o.push(e + (t / 100).toFixed(2)),
          o.join(" + ")
        );
      }
      function Oe(e) {
        var t,
          { state: r = {}, getters: a = {} } = e,
          { points: o, pay: s, pointsName: n, displayCard: i } = r,
          { hasDisplayCard: d, currentPostage: c, couponDecrease: u } = a,
          l = s.goodsTax + s.postageTax,
          p = [
            {
              label: "商品金额",
              value: we(
                "¥",
                d ? s.itemPay - i.price : s.itemPay,
                o.totalPoints,
                n
              ),
            },
          ];
        d && p.push({ label: i.name, value: "+ ¥" + Z()(i.price) }),
          c.available &&
            p.push({
              label: Object(be.b)(c.expressPayMode),
              value: Object(be.c)(c.expressPayMode, s.postage),
            }),
          l && p.push({ label: "进口税（含运费税款）", value: "+ ¥" + Z()(l) }),
          (s.extraFees || []).forEach((e) => {
            p.push({ label: e.desc, value: "+ ¥" + Z()(e.realPay) });
          }),
          (s.promotions || []).forEach((e) => {
            var { name: t } = e;
            256 === e.promotionTypeId && (t = e.name.replace("积分", n)),
              115 === e.promotionTypeId && (t = e.promotionTypeName),
              p.push({
                label: t,
                value:
                  (e.decrease >= 0 ? "-" : "+") +
                  " ¥" +
                  Z()(Math.abs(e.decrease)),
              });
          }),
          0 !== u && p.push({ label: "优惠", value: "- ¥" + Z()(u) });
        var h =
          (null == (t = r.fissionActivity) ? void 0 : t.fissionTicketNum) || 0;
        return (
          h && p.push({ label: "内购券", value: h + "张" }),
          0 !== Ce(r) &&
            p.push({ label: "支付优惠", value: "- ¥" + Z()(Ce(r)) }),
          0 !== a.prepayCardDecrease &&
            p.push({
              label: "储值卡/礼品卡",
              value: "- ¥" + Z()(a.prepayCardDecrease),
            }),
          s.assetPayInfos.forEach((e) => {
            e.realPrice > 0 &&
              p.push({ label: e.payWayStr, value: "- ￥" + Z()(e.realPrice) });
          }),
          p
        );
      }
      function Se(e) {
        var { state: t, getters: r } = e,
          { pay: a } = t;
        return a.multiPhase
          ? t.tradeTag.hasDepositPreSaleGoods
            ? r.finalPhasePayment.reduce((e, t) => Pe()(+e, +t)).toFixed(2)
            : Number(
                r.finalPhasePayment[a.phasePayment.currentPhase - 1]
              ).toFixed(2)
          : Z()(t.pay.realPay);
      }
      function xe(e) {
        var { state: t, getters: r } = e,
          { pay: a } = t;
        if (!a.multiPhase) return [];
        var o = a.phasePayment.phaseItems.map((e) => e.currentPrice),
          s = r.couponDecrease;
        r.newCouponProcess && (s = 0);
        var n = [];
        return (
          (n[1] = Math.max(t.pay.postage, 0, o[1] - s)),
          (s -= o[1] - n[1]),
          (n[0] = Math.max(0, o[0] - s)),
          n
        );
      }
      function Te(e) {
        var { state: t, getters: r } = e,
          { tradeTag: a } = t,
          { formattedGoods: o } = r,
          s = null == a ? void 0 : a.hasDepositPreSaleGoods,
          n = (null == o ? void 0 : o.length) || 0;
        return s && n > 0;
      }
      function Ie(e) {
        var { getters: t } = e;
        return t.chosenCoupons.map((e) =>
          Object(a.a)({}, S()(e, ["name", "condition"]), {
            decrease: e.value || 0,
          })
        );
      }
      var Ee = function (e) {
        var t,
          r,
          { state: o = {}, getters: s = {} } = e;
        return {
          priceTotalPriceList: Oe(e),
          finalPrice: Se(e),
          prepayCardDecrease: s.prepayCardDecrease,
          couponDecreasedPhasePayment: xe(e),
          depositShow: Te(e),
          depositOrder: S()(o.order, [
            "showDepositAgreementVal",
            "agreeDeposit",
          ]),
          depositPay: S()(o.pay, ["phasePayment", "multiPhase"]),
          chosenCoupon:
            null != (t = s.chosenCoupon) && t.value
              ? Object(a.a)({}, S()(s.chosenCoupon, ["name", "condition"]), {
                  decrease: null == (r = s.chosenCoupon) ? void 0 : r.value,
                })
              : {},
          chosenCoupons: Ie(e),
        };
      };
      function De(e) {
        var { list: t } = e.goods;
        return !!t.length;
      }
      function ke(e) {
        var { postage: t } = e,
          { postageItems: r = [] } = t;
        return (
          (Array.isArray(r) &&
            r.filter((e) => e.expressType === t.currentExpressType)[0]) ||
          {}
        );
      }
      function Ne(e) {
        return (
          De(e) &&
          (function (e) {
            var { postageItems: t = [] } = e.postage;
            return t.map((e) =>
              Object(a.a)({}, e, { postage: Object(be.a)(e.postage, e) })
            );
          })(e).length > 0
        );
      }
      function _e(e) {
        var { state: t } = e,
          { showLocalDeliveryTime: r } = t.display;
        return De(t) && r;
      }
      function Ae(e) {
        var { state: t } = e,
          { delivery: r } = t;
        return r.text;
      }
      function je(e) {
        var { state: t = {} } = e,
          r = "";
        try {
          var a,
            o,
            s = JSON.parse(
              (null == (a = t.pay) || null == (o = a.payParams)
                ? void 0
                : o.bizExt) || {}
            );
          s.ORDER_CREATE_TIME && (r = Number(s.ORDER_CREATE_TIME));
        } catch (e) {
          r = 0;
        }
        return r;
      }
      function Re(e) {
        var { chosenOption: t } = e.periodBuy,
          { currentExpressType: r } = e.postage;
        return t ? t + " 首次" + (1 === r ? "提货" : "送达") : "";
      }
      function Fe(e) {
        var { info: t, planTime: r } = e.periodBuy;
        return [
          { periodAlias: t, deliverTimeAlias: r, periodBuyTimeText: Re(e) },
        ];
      }
      function Ge(e) {
        var { prepare: t = {} } = void 0 === e ? {} : e,
          r = z({ prepare: t }),
          o = ae({ prepare: t, state: r });
        return Object(a.a)(
          {
            rootStyle: "margin-top: 0;",
            footerShowStoreInfo: !1,
            orderCreated: r.orderCreated,
          },
          (function (e) {
            var { prepare: t } = e,
              {
                usePreCashierPay: r,
                extensions: o,
                tradeConfirmation: s,
                orderCreation: n,
              } = t;
            return {
              prepare: {
                usePreCashierPay: Object(a.a)({}, r || {}),
                extensions: Object(a.a)({}, o || {}),
                tradeConfirmation: {
                  extra: (null == s ? void 0 : s.extra) || {},
                },
                orderCreation: { buyer: (null == n ? void 0 : n.buyer) || {} },
              },
            };
          })({ prepare: t }),
          S()(r, ["shop", "tradeTag", "useBeforePay", "display"]),
          S()(o, ["showPriorUseSummary"]),
          (function (e) {
            var t,
              { prepare: r, state: o, getters: s } = e,
              n = {
                prepare: r,
                state: o,
                getters: Object(a.a)(
                  { waitPhaseTwoStart: oe({ state: o }) },
                  s
                ),
              };
            return {
              orderStatusIcon: Object(H.a)(
                "public_files/2018/08/31/6eb5418154ef15f9454b0500c800cfcb.png"
              ),
              orderStatusTitle: se(n),
              orderStatusSteps: ne(n),
              orderStatusDesc: ie(n),
              orderStatusCountdownInterval:
                null == o || null == (t = o.order)
                  ? void 0
                  : t.countdownInterval,
            };
          })({ prepare: t, state: r, getters: o }),
          (function (e) {
            var { state: t } = e,
              { valueCardPayPrice: r } = t.pay,
              { showPrePayCards: a } = t.display;
            return { valueCardPayPrice: r, showPrePayCards: a };
          })({ prepare: t, state: r }),
          he({ prepare: t, state: r, getters: o }),
          (function (e) {
            var { state: t, getters: r } = e;
            return {
              payState: ye({ state: t }),
              paySubmitDisplayData: ve({ state: t, getters: r }),
            };
          })({ prepare: t, state: r, getters: o }),
          (function (e) {
            var { state: t, getters: r } = e,
              { extensions: a = {} } = t;
            return {
              goodsTotalPrice: T(
                t.pay.itemPay,
                t.points.totalPoints,
                t.pointsName
              ),
              formattedGoods: r.formattedGoods,
              hasGoods: !!t.goods.list.length,
              shopName: t.shop.shopName,
            };
          })({ prepare: t, state: r, getters: o }),
          (function (e) {
            var { state: t } = e,
              { showPrePayCards: r } = t.display,
              { valueCardPayPrice: a } = t.pay;
            return {
              guaranteeFreight: "",
              guaranteeIsChoosedCard: r && !!a,
              guaranteeIsOrderPage: !1,
              guaranteeIsPrePayPage: !0,
              guaranteePaddingConfig: { freight: null, guarantee: null },
              guaranteeGuaranteeOrderInfo: fe({ state: t }),
            };
          })({ prepare: t, state: r }),
          Ee({ prepare: t, state: r, getters: o }),
          (function (e) {
            var t,
              r,
              a,
              o,
              { state: s, getters: n } = e,
              { showLocalDeliveryScope: i } = s.display,
              d = i && De(s);
            return {
              deliveryShowDeliveryType: Ne(s),
              deliveryShowCheckDeliveryScope: d,
              deliveryShowDeliveryTime: _e({ state: s, getters: n }),
              deliveryService: {
                postage: null == (t = ke(s)) ? void 0 : t.postageTitle,
                expressType: Object(be.a)(
                  null == (r = ke(s)) ? void 0 : r.postage,
                  ke(s).expressPayMode
                ),
                deliveryTime: Ae({ state: s, getters: n }),
                localDeliveryDesc: null == (a = s.delivery) ? void 0 : a.desc,
                localDeliveryImg:
                  null == (o = s.delivery) ? void 0 : o.attachPic,
                buyerMemo: s.order.buyerMsg || "无",
              },
              deliveryInvoiceStatus: 0,
              deliveryShowLookCoupon: !1,
            };
          })({ prepare: t, state: r, getters: o }),
          (function (e) {
            var { state: t = {} } = e;
            return {
              orderTime: { createTime: je(e) },
              orderKeepShopConfig: S()(t.shopConfig, ["goodsTradeMarquee"]),
              orderKeepGoods: S()(t.goods, ["list"]),
              orderKeepPointDeduction: Object(a.a)({}, t.pointDeduction),
              orderKeepCoupon: S()(t.coupon, ["availableCoupons"]),
              orderKeepShop: S()(t.shop, ["activities"]),
              orderKeepOrder: S()(t.order, ["mergePrepayOrderNo", "orderNos"]),
              orderKeepApply: t.orderKeepApply,
              orderKeepPay: Object(a.a)({}, t.pay),
              orderKeepDisplay: S()(t.display, ["forbidPay"]),
              orderKeepPageTitle: "待付款的订单",
            };
          })({ prepare: t, state: r, getters: o }),
          (function (e) {
            var { state: t, getters: r } = e,
              { groupon: a = {} } = t;
            return {
              isGrouponGoods: a.isGroupon,
              grouponModel: {
                showGrouponHeader: r.showGrouponCell && a.isHeader,
                textConfig: r.isGrouponOptionalReceive
                  ? {
                      headerTitle:
                        "若团员选择团长代收，团员商品将一起发货给你哦",
                      popupContent:
                        "拼团商品可以在提交订单时选择团长代收，这样也可以免除团员的邮费哦\n团长收货后会分发给团员，团员也可以向团长领取哦",
                    }
                  : {
                      headerTitle: "所有团员购买的商品都由团长你代收哦",
                      popupContent:
                        "该拼团商品商家设置必须由团长代收，成团后商品统一发货给团长，这样也可以免除团员的邮费哦\n团长收货后会分发给团员，团员也可以向团长领取哦",
                    },
              },
            };
          })({ prepare: t, state: r, getters: o }),
          (function (e) {
            var { state: t } = e,
              { periodBuy: r, postage: a } = t;
            return {
              periodIsPeriodBuy: r.show,
              periodIsSelfFetch: !1,
              periodIsMultiPeriodBuy: !1,
              periodOrder: {
                expressType: a.currentExpressType,
                periodDetail: Fe(t),
              },
            };
          })({ prepare: t, state: r }),
          (function (e) {
            var { state: t } = e,
              { idCard: r = {}, needIdCardPhoto: a } = t.order,
              { list: o = [] } = t.goods,
              { shopName: s = "" } = t.shop,
              { tradeTag: n } = t,
              { hasOverseaGoods: i } = n;
            return {
              idcardGoods: { list: o },
              idcardOrder: { needIdCardPhoto: a },
              idcard: {
                name: r.idCardName || "",
                number: r.idCardNumber || "",
                binding: (r.idCardName && r.idCardNumber) || !1,
                frontPhoto: r.idCardFrontPhoto,
                backPhoto: r.idCardBackPhoto,
              },
              idcardHasHaitaoGoods: i,
              idcardShop: { shopName: s },
            };
          })({ prepare: t, state: r })
        );
      }
      var Be = r("US/N"),
        Me = getApp(),
        Ue = {
          fetchPageData(e) {
            var { orderNo: t } = e;
            return Object(Be.default)({
              origin: "cashier",
              withCredentials: !0,
              path: "/pay/wsctrade/order/buy/prepare.json",
              method: "POST",
              data: { order_no: t, useOrderKeep: !0 },
            })
              .then((e) =>
                this.handleInitRedirect(t, e.redirectConfig)
                  ? Promise.reject()
                  : Promise.resolve({ prepare: e })
              )
              .catch(function (e) {
                var { msg: r, code: a, stack: o } = void 0 === e ? {} : e;
                if ((g.default.$native.hideLoading(), 1e4 == +a))
                  g.default.$native.redirectTo({
                    url: "/packages/order-native/fastbuy/index?orderNo=" + t,
                  });
                else if (101305055 == +a)
                  g.default.$native.redirectTo({
                    url: "/packages/ump/handsel-expand/index?order_no=" + t,
                  });
                else {
                  var s = Me.db.set({ text: r, code: a, stack: o });
                  g.default.$native.redirectTo({
                    url: "/packages/common/error/index?dbid=" + s,
                  });
                }
                return Promise.reject();
              });
          },
          handleInitRedirect: (e, t) => (
            void 0 === t && (t = {}),
            [
              [
                "timeout",
                () => "/packages/trade/order/result/index?orderNo=" + e,
              ],
              ["orderPaid", () => "/packages/order/paid/index?order_no=" + e],
              [
                "orderCanceled",
                () => "/packages/trade/order/result/index?orderNo=" + e,
              ],
              [
                "peerpay",
                () =>
                  "/packages/common/error/index?dbid=" +
                  Me.db.set({ text: "小程序不支持找人代付" }),
              ],
            ].some((e) => {
              var [r, a] = e;
              return !!t[r] && (g.default.$native.redirectTo({ url: a() }), !0);
            })
          ),
          handleOrderCloseEvent() {
            g.default.redirectTo(
              "/packages/trade/order/result/index?orderNo=" +
                this.ctx.data.orderNo
            );
          },
        };
      class Le {
        constructor(e) {
          var t = this;
          (this.ctx = e.ctx),
            this.initBinding(),
            this.ctx.env.getQueryAsync().then(function (e) {
              void 0 === e && (e = {}), t.init(b()(e));
            }),
            this.ctx.process.define("mutateData", (e) => {
              var { data: t } = this.ctx;
              e(t), this.assignCtxData(t);
            }),
            this.initCloudData();
        }
        initBinding() {
          Object(m.d)(this, { orderClose: () => this.handleOrderCloseEvent() });
        }
        init(e) {
          var t = this;
          return Object(f.a)(function* () {
            var r,
              o,
              { orderNo: s } = e,
              n = null;
            try {
              n = yield t.fetchPageData(e);
            } catch (e) {
              return;
            }
            null != (r = n) && r.prepare && (n.prepare.orderNo = s),
              (t.ctx.data.state = (function (e) {
                void 0 === e && (e = {});
                var t = z({ prepare: e }),
                  r = ae({ prepare: e, state: t });
                return Object(a.a)(
                  {},
                  t,
                  r,
                  he({ prepare: e, state: t, getters: r }),
                  Ee({ prepare: e, state: t, getters: r })
                );
              })((null == (o = n) ? void 0 : o.prepare) || {}));
            var i = Object(a.a)({ dataLoaded: !0, orderNo: s }, Ge(n));
            Object.assign(t.ctx.data, i);
            try {
              t.ctx.cloud.invoke("onOrderLoaded");
            } catch (e) {}
          })();
        }
        assignCtxData(e) {
          (this.ctx.data.display = Object(a.a)(
            {},
            this.ctx.data.display || {},
            e.display || {}
          )),
            (this.ctx.data.deliveryService = e.deliveryService),
            (this.ctx.data.chosenCoupons = e.chosenCoupons),
            (this.ctx.data.chosenCoupon = e.chosenCoupon);
        }
        initCloudData() {}
      }
      (Le.widgets = { Skeleton: w.a }), Object.assign(Le.prototype, Ue);
      var We = r("cmGq"),
        ze = r.n(We);
      class He {}
      He.widgets = { Main: ze.a };
      var Ye = r("L9N0"),
        Ke = r.n(Ye),
        Ve = r("OBgK"),
        qe = r.n(Ve),
        Je = r("AMlB"),
        Qe = r.n(Je);
      class Xe {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Xe.widgets = {
        OrderStatus: Ke.a,
        OrderGuide: qe.a,
        OrderStatusWrapper: Qe.a,
      };
      var Ze = r("u206"),
        $e = r.n(Ze);
      class et {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      et.widgets = { PrePayCardCell: $e.a };
      var tt = r("rPrv"),
        rt = r.n(tt),
        at = r("bGlB"),
        ot = r.n(at),
        st = r("BtAp"),
        nt = r.n(st),
        it = r("JSrp"),
        dt = r.n(it),
        ct = r("A2ja"),
        ut = r.n(ct);
      class lt {}
      lt.widgets = {
        SelfFetch: ot.a,
        Logistics: rt.a,
        StripeBorder: nt.a,
        Contact: dt.a,
        LogisticsWrapper: ut.a,
      };
      var pt = r("pn6R"),
        ht = r.n(pt),
        yt = r("AGZf"),
        vt = r("NHEX"),
        gt = r.n(vt),
        ft = r("xyw3"),
        mt = r("2wjL"),
        Pt = getApp(),
        bt = {
          beforePrepay: () =>
            Object(f.a)(function* () {
              return Promise.resolve();
            })(),
          getPaySuccessUrl() {
            var e,
              { kdtId: t, finalPrice: r } = this,
              { payState: a } = this.ctx.data,
              {
                groupon: o,
                goods: s,
                isHandselFirstPhase: n,
                order: i,
                pay: d,
                tradeTag: c,
                shop: u,
              } = a;
            if (n)
              return (
                "/packages/ump/handsel-expand/index?order_no=" +
                i.orderNo +
                "&kdt_id=" +
                t
              );
            if (o.isGroupon) {
              var { goodsId: l, goodsType: p } = s.list[0] || {};
              return 31 == p
                ? "/packages/paidcontent/groupon/index?orderNo=" +
                    i.orderNo +
                    "&goodId=" +
                    l
                : "/packages/collage/groupon/detail/index?from=pay&orderNo=" +
                    i.orderNo +
                    "&type=" +
                    o.activityType;
            }
            if (23 === u.activityType)
              return (
                "/packages/collage/lottery/detail/index?order_no=" +
                i.orderNo +
                "&activity_id=" +
                (i.activityId || 0)
              );
            var h = {
              order_no: i.outBizNo || i.requestNo || i.orderNo || i.orderNos[0],
              isToOrderList: i.orderNos && i.orderNos.length > 1,
              pay_result: "success",
              pay_money: Object(ft.a)(r).toCent(),
            };
            null != d &&
              null != (e = d.phasePayment) &&
              e.currentPhase &&
              (h.phasePaymentStage = d.phasePayment.currentPhase),
              (h.depositPreSale = !(null == c || !c.hasDepositPreSaleGoods));
            var y = Pt.db.set(h);
            return mt.a.add("/packages/order/paid/index", { dbid: y });
          },
          handlePaySuccess() {
            (this.ctx.data.orderPaid = !0),
              g.default.navigate({
                type: "redirectTo",
                url: this.getPaySuccessUrl(),
              });
          },
          handlePayFail(e) {},
        },
        Ct = r("54Oe"),
        wt = r.n(Ct);
      class Ot {
        getPayParams() {
          var { state: e } = this.ctx.data,
            { pay: t, finalPrice: r } = e,
            { shop: a, order: o, display: s } = e,
            { payParams: n, prepayParams: i } = t || {},
            d = {
              kdtId: null == a ? void 0 : a.kdtId,
              orderNo: (null == n ? void 0 : n.outBizNo) || o.orderNo,
              account: gt()(window, "_global.buyer.phone", ""),
              partnerReturnUrl: null == n ? void 0 : n.partnerReturnUrl,
            };
          n.payAmount = r;
          var { selectedInstallmentPeriod: c } = s;
          return (
            c && Object.assign(d, { selectedInstallmentPeriod: c }),
            (i.cashierBizExt = {
              isGuarantee:
                e.display && e.display.isSecuredTransActions ? "1" : "0",
              yzGuarantee: gt()(e, "yzGuarantee", !1),
            }),
            { prepayParams: i, extraData: d, payParams: n }
          );
        }
        beforeStartPayForEcloud(e) {
          return Object(f.a)(function* () {
            var { isSupportedExtension: t = !0 } = void 0 === e ? {} : e;
          })();
        }
        constructor(e) {
          (this.ctx = e.ctx), this.init();
        }
        init() {
          Object(m.c)(this, ["setupState"], {
            callback(e) {
              var { setupState: t } = e;
              this.ctx.data.payState = ht()(t);
            },
            isOnce: !0,
          }),
            Object(m.b)(this, ["finalPrice", "kdtId"]),
            (this.ctx.data.showQueueUpTips = !1),
            (this.ctx.data.isPaying = !1),
            (this.ctx.data.orderPaid = !1),
            this.ctx.process.define(
              "onPaySuccess",
              this.handlePaySuccess.bind(this)
            ),
            this.ctx.process.define("onPayFail", this.handlePayFail.bind(this)),
            this.ctx.process.define(
              "startPayFromPay",
              this.handleStartPay.bind(this)
            ),
            this.bindPayEvent(),
            this.initPrepayQueueUpData();
        }
        bindPayEvent() {
          Object(m.d)(this, {
            payBtnClick: () => this.handleStartPay(),
            toggleQueueUptips: () => this.toggleQueueUptips(),
            "pay:success": (e) => {
              var { payChannel: t = "" } = e || {};
              Promise.all([
                this.ctx.cloud.invoke("afterOrderPaid", { payChannel: t }),
                this.ctx.cloud.invoke("afterOrderPay", {
                  payWay: { payChannel: t },
                }),
              ]).then(() => {
                (this.ctx.data.isPaying = !1), this.handlePaySuccess(e);
              });
            },
            "pay:close": (e) => {
              (this.ctx.data.isPaying = !1),
                this.handlePayFail(e || "pay:close");
            },
            "pay:fail": () => {
              this.ctx.data.isPaying = !1;
            },
          });
        }
        initPrepayQueueUpData() {
          this.queueUp = { maxRetryTimes: 2, retryDurantion: 0, retryCount: 0 };
        }
        toggleQueueUptips() {
          this.ctx.data.showQueueUpTips = !this.ctx.data.showQueueUpTips;
        }
        assignPayment(e, t) {
          var r,
            o,
            s = t.prePaymentPreparation || {},
            n = t.paymentPreparation || {};
          (s.bizExt = n.bizExt || "{}"),
            (s.scene =
              null == (r = e.pay) || null == (o = r.prepayParams)
                ? void 0
                : o.scene),
            (e.pay = Object(a.a)({}, e.pay, {
              prepayParams: s,
              prepay: s.prepay,
              prepaySuccess: s.prepaySuccess,
              payParams: t.paymentPreparation,
              showPayResult: t.showPayResult,
            }));
        }
        get payStartInfo() {
          var { pay: e = {}, order: t = {} } = this.ctx.data.payState,
            { prepayParams: r = {} } = e;
          return Object(a.a)({}, r, { orderNo: t.outBizNo || t.orderNos[0] });
        }
        get isNeedPrepay() {
          var { prepayParams: e } = this.ctx.data.payState.pay;
          return e.prepay && !e.prepaySuccess;
        }
        createPrepay() {
          var { payState: e } = this.ctx.data,
            { prepayParams: t } = e.pay,
            { queueUp: r } = this;
          return Object(Be.default)({
            origin: "cashier",
            withCredentials: !0,
            method: "POST",
            path: "/pay/wsctrade/order/buy/prepay.json",
            data: { orderNoList: e.order.orderNos },
          })
            .then((r) => {
              if (r.success || !t.prepaySuccess) throw r;
              return (
                yt.a.clear(),
                this.initPrepayQueueUpData(),
                this.assignPayment(e, r),
                r
              );
            })
            .catch((e) => {
              if (
                (yt.a.clear(),
                (r.retryCount += 1),
                r.retryCount <= r.maxRetryTimes)
              ) {
                var t =
                  ((r.retryDurantion = 1e3 + 2e3 * r.retryCount),
                  r.retryDurantion);
                return (
                  yt.a.loading({
                    message:
                      r.retryCount === r.maxRetryTimes
                        ? "抢购人数太多请稍等"
                        : "",
                    duration: t + 2e3,
                  }),
                  new Promise((e, r) => {
                    setTimeout(() => {
                      this.createPrepay().then(e).catch(r);
                    }, t);
                  })
                );
              }
              throw (
                (this.initPrepayQueueUpData(),
                this.toggleQueueUptips(),
                (e.prepay = !0),
                e)
              );
            });
        }
        beforeStartPay() {
          return this.ctx.cloud
            .invoke("beforePaySubmitAsync")
            .then(() => this.beforePrepay())
            .then(() => {
              if (this.isNeedPrepay) return this.createPrepay();
            })
            .then(() => Promise.resolve());
        }
        handleStartPay() {
          this.ctx.data.isPaying ||
            ((this.ctx.data.isPaying = !0),
            this.beforeStartPay()
              .then(() => {
                this.ctx.data.isPreCashierPay && (this.ctx.data.isPaying = !1);
                var [e] = this.ctx.process.invoke("startPay", {
                  startPayInfo: this.payStartInfo,
                });
                e.catch((e) => {
                  throw (
                    (Object(yt.a)("支付失败，请刷新后重试"),
                    (this.ctx.data.isPaying = !1),
                    new Error(e))
                  );
                });
              })
              .catch((e) => {
                this.ctx.data.isPaying = !1;
              }));
        }
      }
      (Ot.widgets = { Main: wt.a }), Object.assign(Ot.prototype, bt);
      var St = r("Tfzu"),
        xt = r("HAp+"),
        Tt = r("udMh"),
        It = r.n(Tt),
        Et = r("mYU+"),
        Dt = r.n(Et);
      class kt {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      (kt.components = { GuaranteePop: It.a }),
        (kt.widgets = { YzGuaranteeForSkuOrder: Dt.a });
      var Nt = {
          themeColors: {},
          isOrderPage: !1,
          isPrePayPage: !1,
          kdtId: "",
          guaranteeOrderInfo: {},
          freightUrl: "",
          isChoosedCard: !1,
          show: !1,
          lifeCycle: {},
          orderPageConfig: {
            isYzGuarantee: !1,
            IS_FREIGHT_INSURANCE: "0",
            FREIGHT_INSURANCE_FREE: "0",
            isChoosedCard: !1,
            freightInsurance: !1,
          },
          detailPageConfig: {},
          mainSupportContent: [],
          docs: {
            icon: {
              logo: {
                iconLongTextWhite:
                  "//b.yzcdn.cn/security/fangxin-long-text-white.png",
                iconShortTextGreen: "//b.yzcdn.cn/security/fangxin-green.svg",
                iconLongTextGreen:
                  "//b.yzcdn.cn/security/fangxin-long-text-green.png",
                copyright: "//b.yzcdn.cn/security/fangxin-green.svg",
              },
            },
          },
          paddingConfig: { freight: null, guarantee: null },
          isDocFetched: !1,
          hideYzGuarantee: !1,
          isDirty: !1,
          defaultYzGuarantee: !1,
          defaultFreightInsurance: !1,
          orderExtra: {},
        },
        _t = { NONE: "0", SELF: "1", FREE: "2" },
        At = {
          isDefaultVisivle() {
            return !this.isDirty && this.defaultYzGuarantee;
          },
          showYzGuaranteeFixed() {
            return (
              !(!this.isDefaultVisivle || this.isChoosedCard) ||
              (this.show && this.isOrderPage && !this.isChoosedCard)
            );
          },
          showYzGuarantee() {
            return this.show && !this.isOrderPage && !this.isChoosedCard;
          },
          showGuarantee() {
            return this.showYzGuaranteeFixed || this.showYzGuarantee;
          },
          freightInsurance() {
            var { expressType: e } = this.guaranteeOrderInfo,
              t =
                this.orderPageConfig &&
                "1" === this.orderPageConfig.IS_UPGRADE_FREIGHT_TAG
                  ? "商家为你购买的商品提供免费上门退服务，退换货选择上门取件，可自动抵扣邮费（含续重），最高可赔25元；若选择自寄，理赔金额参考两地之间快递首重邮费，具体以“订单详情-退货包运费”页面为准（仅限补贴普通快递运费，不含同城配送费）"
                  : "商家为你购买的商品提供退货包运费服务，退换货成功后可补贴运费，实际赠送情况以订单详情页为准。",
              r =
                (this.isOrderPage &&
                  "1" === this.orderPageConfig.IS_UPGRADE_FREIGHT_TAG) ||
                (!this.isOrderPage && this.detailPageConfig.isUpgrade)
                  ? "免费上门退"
                  : "退货包运费";
            if (this.defaultFreightInsurance && !this.isDirty && 0 == +e)
              return { name: r, title: "商家赠送", desc: t };
            if (!this.isOrderPage) {
              var { title: a, desc: o } = this.detailPageConfig;
              return { name: r, title: a, desc: o };
            }
            var s =
                this.orderPageConfig &&
                "1" === this.orderPageConfig.IS_FREIGHT_INSURANCE,
              {
                FREIGHT_INSURANCE_FREE: n = "",
                isYzGuarantee: i = !1,
                freightInsurance: d,
                freightInsuranceContent: c,
                freightInsuranceDesc: u,
              } = this.orderPageConfig,
              l = i && !this.isChoosedCard;
            return !1 === d
              ? { name: r, title: "", desc: "" }
              : d && c
              ? {
                  name: r,
                  title: this.orderPageConfig.hideYzGuarantee ? "商家赠送" : c,
                  desc: u,
                }
              : -1 !== [_t.SELF, _t.FREE].indexOf(n) && l
              ? {
                  name: r,
                  title: this.orderPageConfig.hideYzGuarantee
                    ? "商家赠送"
                    : "有赞放心购赠送",
                  desc: "有赞放心购订单赠送退货包运费，退换货成功可补贴运费，实际赠送情况以订单详情页为准。",
                }
              : (n === _t.NONE && s) || (n === _t.SELF && s && !l)
              ? { name: r, title: "商家赠送", desc: t }
              : { name: r, title: "", desc: "" };
          },
        };
      function jt(e, t, r) {
        var a, o;
        void 0 === r && (r = !1);
        return function () {
          var s = this,
            n = arguments;
          a && clearTimeout(a);
          var i = function () {
              (a = null), r || (o = e.apply(s, n));
            },
            d = r && !a;
          return (a = setTimeout(i, t)), d && (o = e.apply(this, n)), o;
        };
      }
      var Rt = "/wscassets/api/security/guarantee/",
        Ft = function (e) {
          return {
            fetchDocs() {
              this.isDocFetched ||
                Object(Be.default)({
                  path: Rt + "docs",
                  method: "GET",
                  data: { isFxg: !0 },
                  options: { useCdn: !0 },
                }).then((t) => {
                  (this.docs = t),
                    (this.isDocFetched = !0),
                    (e.data.yzGuaranteeDocs = t);
                });
            },
            getRequestParams() {
              var e = [
                  [
                    "aliases",
                    "bizCategory",
                    "activityType",
                    "orderType",
                    "orderMark",
                    "expressType",
                    "kdtId",
                    "selectCard",
                  ],
                  [
                    "aliases",
                    "hasYzSecured",
                    "orderNo",
                    "orderStatus",
                    "hasFreightInsurance",
                    "freightInsuranceFree",
                    "orderCreateTime",
                    "kdtId",
                  ],
                  [
                    "aliases",
                    "feedback",
                    "hasYzSecured",
                    "orderNo",
                    "orderSuccessTime",
                    "orderStatus",
                    "orderPayTime",
                    "payWay",
                  ],
                ],
                t = this.isOrderPage ? e[0] : this.isPrePayPage ? e[1] : e[2],
                r = { isFxg: !0 };
              return (
                t.forEach((e) => {
                  "kdtId" === e
                    ? (r.kdtId = this.kdtId)
                    : "selectCard" === e
                    ? (r.selectCard = this.isChoosedCard)
                    : (r[e] =
                        "orderCreateTime" === e
                          ? this.guaranteeOrderInfo[e] || 0
                          : this.guaranteeOrderInfo[e]);
                }),
                r
              );
            },
            fetchData: jt(function () {
              var t,
                r = this.getRequestParams();
              ((!this.isOrderPage && !this.isPrePayPage) || r.kdtId) &&
              r.aliases &&
              0 !== (null == (t = r.aliases) ? void 0 : t.length)
                ? Object(Be.default)({
                    path: this.isOrderPage
                      ? Rt + "queryFinComponentsConfirmSupport"
                      : Rt + "queryFinComponentsDetailSupport",
                    data: this.getRequestParams(),
                    method: this.isOrderPage ? "GET" : "POST",
                    options: { useCdn: !0 },
                  })
                    .then((t) => {
                      if (((this.isDirty = !0), this.isOrderPage)) {
                        var {
                            IS_YZ_SECURED: r,
                            IS_FREIGHT_INSURANCE: o,
                            FREIGHT_INSURANCE_FREE: s,
                            IS_UPGRADE_FREIGHT_TAG: n,
                          } = null == t ? void 0 : t.displayTag,
                          {
                            freightInsuranceDesc: i,
                            freightInsurance: d,
                            freightInsuranceContent: c,
                            hideYzGuarantee: u,
                          } = t;
                        (this.hideYzGuarantee = u),
                          (this.show = "1" === r),
                          (this.orderPageConfig = {
                            isYzGuarantee: this.show,
                            IS_FREIGHT_INSURANCE: o,
                            FREIGHT_INSURANCE_FREE: s,
                            IS_UPGRADE_FREIGHT_TAG: n,
                            isChoosedCard: this.isChoosedCard,
                            freightInsurance: d,
                            freightInsuranceDesc: i,
                            freightInsuranceContent: c,
                            hideYzGuarantee: u,
                          });
                      } else
                        (this.show = null == t ? void 0 : t.yzSecured),
                          (this.lifeCycle = null == t ? void 0 : t.lifeCycle),
                          (this.detailPageConfig = {
                            title:
                              null == t ? void 0 : t.freightInsuranceSimpleDesc,
                            desc:
                              null == t
                                ? void 0
                                : t.freightInsuranceComplexDesc,
                            url: this.freightUrl,
                            isUpgrade: null == t ? void 0 : t.isUpgrade,
                          });
                      (this.mainSupportContent =
                        null == t ? void 0 : t.mainSupportContent),
                        (e.data.yzGuaranteeInfo = Object(a.a)({}, t, {
                          page: this.isOrderPage ? "order" : "orderDetail",
                        }));
                    })
                    .catch(() => {
                      this.isDirty = !0;
                    })
                : (this.isDirty = !0);
            }, 500),
            updateFreightUrl(e) {
              this.freightUrl = (e && e.url) || "";
            },
            updateChoosedCardStatus(e) {
              this.orderPageConfig.isChoosedCard = e;
            },
          };
        },
        Gt = r("VmHG");
      var Bt = r("poeO"),
        Mt = r.n(Bt),
        Ut = r("qhi/"),
        Lt = r.n(Ut),
        Wt = r("ig9i"),
        zt = r.n(Wt),
        Ht = r("4e4k"),
        Yt = r.n(Ht);
      class Kt {
        constructor(e) {
          var t;
          (this.ctx = e.ctx),
            (this.store =
              ((t = this.ctx),
              Object(Gt.a)({
                state: () => Object(a.a)({}, Nt),
                getters: Object(a.a)({}, At),
                actions: Object(a.a)({}, Ft(t)),
              }))),
            Object(Gt.c)(this, [
              "themeColors",
              "isChoosedCard",
              "isOrderPage",
              "isPrePayPage",
              "kdtId",
              "guaranteeOrderInfo",
              "paddingConfig",
              "defaultYzGuarantee",
              "defaultFreightInsurance",
              "orderExtra",
            ]);
        }
      }
      Kt.widgets = {
        GuaranteeFreightBar: Mt.a,
        YzGuaranteeFixed: Lt.a,
        YzGuarantee: zt.a,
        FreightInsurance: Yt.a,
      };
      var Vt = r("jUBw"),
        qt = r.n(Vt),
        Jt = r("fN0Q"),
        Qt = r.n(Jt),
        Xt = r("k68E"),
        Zt = r.n(Xt),
        $t = r("t73Q"),
        er = r.n($t),
        tr = r("5WUI"),
        rr = r.n(tr),
        ar = r("5c+d"),
        or = r.n(ar),
        sr = r("nwFK"),
        nr = r.n(sr),
        ir = r("yfUU"),
        dr = r.n(ir);
      class cr {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      cr.widgets = {
        GoodsList: qt.a,
        GoodsListWrapper: Qt.a,
        GoodsMessage: rr.a,
        Good: Zt.a,
        VirtualGood: er.a,
        Hotel: or.a,
        GoodsPrice: nr.a,
        GuaranteeFreightBarWrapper: dr.a,
      };
      var ur = r("rNm7"),
        lr = r.n(ur);
      class pr {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      pr.widgets = { PricePanel: lr.a };
      var hr = r("bXuM"),
        yr = r.n(hr),
        vr = {
          getOrderTime(e) {
            var { time: t } = e,
              {
                createTime: r,
                payTitle: a,
                payTime: o,
                expressTime: s,
                successTime: n,
              } = t;
            return {
              createTime: r,
              payTitle: a,
              payTime: o,
              expressTime: s,
              successTime: n,
            };
          },
        };
      class gr {
        constructor(e) {
          (this.ctx = e.ctx),
            Object(m.b)(this, ["time"], {
              callback: () => {
                var { time: e } = this.ctx.data,
                  t = { orderTime: vr.getOrderTime({ time: e }) };
                Object.keys(t).forEach((e) => {
                  var r,
                    a,
                    o = t[e];
                  (r = o),
                    (a = this[e]),
                    JSON.stringify(r) !== JSON.stringify(a) && (this[e] = o);
                });
              },
            });
        }
      }
      gr.widgets = { Time: yr.a };
      var fr = r("WG2y"),
        mr = r.n(fr),
        Pr = r("jmjq"),
        br = r.n(Pr),
        Cr = (e) => ({
          name: e.name || "",
          condition: e.condition || "",
          decrease: e.decrease || "",
          desc: "省" + br()(e.decrease),
        }),
        wr = {
          state: {
            coupon: {},
            coupons: [],
            display: {},
            rootStyle: "",
            couponCode: {},
          },
          getters: {
            couponInfo() {
              var {
                  coupon: e = {},
                  couponCode: t = {},
                  coupons: r = [],
                  display: a = {},
                } = this,
                o = Object.keys(e).length > 0,
                s = Object.keys(t).length > 0,
                n = {
                  show: !!(o || s || r.length) && a.showCouponBlock,
                  list: [],
                };
              return (
                r.length
                  ? (n.list = r.map(Cr))
                  : o
                  ? (n.list = [Cr(e)])
                  : s && (n.list = [Cr(t)]),
                n
              );
            },
          },
          actions: () => ({}),
        };
      var Or = (e) => {
        var t,
          { couponInfo: r } = e;
        return {
          list:
            null == r || null == (t = r.list)
              ? void 0
              : t.map((e) => {
                  var { name: t, condition: r } = e;
                  return { name: t, condition: r };
                }),
        };
      };
      class Sr {
        constructor(e) {
          var t;
          (this.ctx = e.ctx),
            (this.store =
              ((t = this.ctx),
              Object(Gt.a)({
                state: () => Object(a.a)({}, null == wr ? void 0 : wr.state),
                getters: Object(a.a)({}, null == wr ? void 0 : wr.getters),
                actions: Object(a.a)({}, null == wr ? void 0 : wr.actions(t)),
              }))),
            Object(Gt.c)(this, [
              "coupon",
              "coupons",
              "couponCode",
              "display",
              "rootStyle",
            ]),
            Object(Gt.e)(this, ["couponInfo"]),
            Object(m.b)(this, ["couponInfo"], {
              isSetData: !1,
              callback: () => {
                var { couponInfo: e = {} } = this.ctx.data,
                  t = { couponInfo: Or({ couponInfo: e }) };
                Object.keys(t).forEach((e) => {
                  var r,
                    a,
                    o = t[e];
                  (r = o),
                    (a = this[e]),
                    JSON.stringify(r) !== JSON.stringify(a) && (this[e] = o);
                });
              },
            });
        }
      }
      Sr.widgets = { Coupon: mr.a };
      var xr = r("qnge"),
        Tr = r("ylg/"),
        Ir = r.n(Tr);
      class Er {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Er.widgets = { GuaranteeEnsure: Ir.a };
      var Dr = r("YcfX"),
        kr = r.n(Dr),
        Nr = r("KfZM"),
        _r = r.n(Nr);
      class Ar {
        constructor(e) {
          (this.ctx = e.ctx),
            Object(m.b)(this, ["shopInfo"], {
              callback: () => {
                var { shopInfo: e } = this.ctx.data,
                  { kdtId: t, shopName: r } = e;
                this.shopInfo = { kdtId: t, shopName: r };
              },
            });
        }
      }
      Ar.widgets = { Shop: kr.a, Period: _r.a };
      var jr = r("eKJZ"),
        Rr = r.n(jr);
      class Fr {}
      Fr.widgets = { GrouponHeaderCell: Rr.a };
      var Gr = r("bIXB"),
        Br = r.n(Gr),
        Mr = r("d9kJ"),
        Ur = r.n(Mr);
      class Lr {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Lr.widgets = { Main: Br.a, IdcardPopup: Ur.a };
      var Wr = r("NHAN"),
        zr = r.n(Wr),
        Hr = r("gmlf"),
        Yr = r.n(Hr);
      class Kr {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Kr.widgets = { OrderKeepNavigator: zr.a, OrderKeepDialog: Yr.a };
      var Vr = r("iIKO"),
        qr = r("zGO3"),
        Jr = r.n(qr);
      class Qr {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      Qr.widgets = { Service: Jr.a };
      var Xr = r("FA2j"),
        Zr = r.n(Xr),
        $r = r("GAuL"),
        ea = r.n($r);
      class ta {}
      ta.widgets = { PreSaleCell: Zr.a, PreSaleCellWrapper: ea.a };
      var ra = r("n05o"),
        aa = r.n(ra),
        oa = r("G4d/"),
        sa = r.n(oa),
        na = r("K9fl"),
        ia = r.n(na),
        da = r("ljis"),
        ca = r.n(da);
      class ua {
        constructor(e) {
          (this.ctx = e.ctx), (this.ctx.data.preferredPayChannel = "");
        }
      }
      ua.widgets = {
        SingleRow: aa.a,
        CellGroup: sa.a,
        SingleRowChannelListPopup: ia.a,
        SingleRowPayPasser: ca.a,
      };
      var la = r("Qujp"),
        pa = r.n(la);
      class ha {
        constructor(e) {
          (this.ctx = e.ctx),
            (this.ctx.data.viewportMargins = { bottom: -110 });
        }
      }
      ha.widgets = { Main: pa.a };
      var ya,
        va = r("vzTj"),
        ga = r("8mzt");
      function fa(e, t) {
        (t = t || {}),
          ga.a.log({
            appName: "wsc",
            logIndex: "new_wsc_weapp_log",
            level: "info",
            name: "[weapp]-wxvideo-" + e,
            message: JSON.stringify(t),
          });
      }
      var ma = {};
      null == (ya = g.default.$native) ||
        null == ya.onAppHide ||
        ya.onAppHide(() => {
          ma = {};
        });
      var Pa,
        ba = {};
      ba = getApp();
      var Ca = "",
        wa = () => {
          var e;
          (e = { orderNo: Ca }),
            Object(Be.default)({
              method: "POST",
              path: "/wscwxvideo/trade-module/updateOrderMultipleExt.json",
              data: e,
            });
        },
        Oa = {};
      null == (Pa = g.default.$native) ||
        null == Pa.onAppHide ||
        Pa.onAppHide(() => {
          Oa = {};
        });
      var Sa = (e) => {
          var t, r, a, o;
          return null != (t = Oa) &&
            t.checkOrderSyncWechatResult &&
            Object.prototype.hasOwnProperty.call(
              null == (r = Oa) ? void 0 : r.checkOrderSyncWechatResult,
              e
            )
            ? null == (a = Oa)
              ? void 0
              : a.checkOrderSyncWechatResult[e]
            : ((o = { orderNo: e }),
              Object(Be.default)({
                path: "/wscwxvideo/trade-module/checkOrderSyncWechat.json",
                data: o,
              }))
                .then((t) => {
                  var r;
                  return (
                    null != (r = Oa) && r.checkOrderSyncWechatResult
                      ? (Oa.checkOrderSyncWechatResult[e] = t)
                      : (Oa.checkOrderSyncWechatResult = { [e]: t }),
                    t
                  );
                })
                .catch(
                  (t) => (
                    fa("交易组件下单--待支付页查询订单是否同步微信失败", {
                      orderNo: e,
                      error: t,
                    }),
                    !1
                  )
                );
        },
        xa = function (e) {
          return {
            startWxVideoPay:
              ((t = Object(f.a)(function* (t, r) {
                if (
                  (void 0 === r && (r = !1),
                  g.default.$native.canIUse("requestOrderPayment"))
                ) {
                  var a,
                    { orderNo: o, wxOrderInfo: s } = t,
                    { payState: n, state: i } = e.data;
                  if (n && !i)
                    try {
                      if (!(yield Sa(o)))
                        return void Object(yt.a)("网络异常，请重新下单");
                    } catch (e) {
                      return (
                        (null == e ? void 0 : e.msg) && Object(yt.a)(e.msg),
                        void fa("交易组件3.0支付-待支付页支付验证报错", {
                          e: e,
                          orderNo: o,
                        })
                      );
                    }
                  try {
                    var { scene: d } =
                        wx && wx.getEnterOptionsSync
                          ? wx.getEnterOptionsSync() || {}
                          : wx.getLaunchOptionsSync() || {},
                      { openId: c } = ba.getToken() || {};
                    (Ca = o),
                      ((e) => {
                        e.event.remove("cashier:pay:success", wa),
                          e.event.once("cashier:pay:success", wa);
                      })(e);
                    var { traceId: u } = yield e.lambdas
                        .checkBeforeAddOrderPromise()
                        .catch(() => ({})),
                      { outOrderId: l } = yield ((a = {
                        orderNo: o,
                        openId: c,
                        scene: String(d),
                        traceId: u,
                      }),
                      Object(Be.default)({
                        method: "POST",
                        path: "/wscwxvideo/trade-module/createOrder.json",
                        data: a,
                      })),
                      p = ((e) => {
                        var { payParams: t, wxOrderInfo: r, orderNo: a } = e,
                          {
                            nonceStr: o,
                            prepayId: s,
                            signType: n,
                            timeStamp: i,
                            paySign: d,
                          } = t || {};
                        return {
                          nonceStr: o,
                          package: s,
                          signType: n,
                          timeStamp: i,
                          paySign: d,
                          orderNo: a,
                          orderInfo: r,
                        };
                      })({
                        payParams: yield ((e) =>
                          Object(Be.default)({
                            path: "/wscwxvideo/trade-module/getPaymentParams.json",
                            data: e,
                          }))({ orderNo: o, openId: c, outOrderId: String(l) }),
                        wxOrderInfo: s,
                        orderNo: o,
                      });
                    r
                      ? e.process.invoke("requestOrderPayment_preCashier", p)
                      : e.process.invoke("requestOrderPayment", p);
                  } catch (e) {
                    (null == e ? void 0 : e.msg) && Object(yt.a)(e.msg),
                      fa("交易组件3.0支付流程错误", { e: e, orderNo: o });
                  }
                } else Object(yt.a)("请升级微信版本至8.2");
              })),
              function (e, r) {
                return t.apply(this, arguments);
              }),
          };
          var t;
        },
        Ta = function (e) {
          var t = [
            ...Object.entries(
              (function (e) {
                var t = (function () {
                    var t = Object(f.a)(function* (t) {
                      return Object(Be.default)({
                        origin: "cashier",
                        withCredentials: !0,
                        path: "/pay/wsctrade/order/buy/wx-order-info",
                        data: { orderNo: t },
                      })
                        .then(
                          (t) => ((e.data.shoppingComponent.orderInfo = t), t)
                        )
                        .catch(
                          (e) => (
                            fa("交易组件下单--调用wx-order-info失败", e), null
                          )
                        );
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  r = (function () {
                    var t = Object(f.a)(function* () {
                      var t,
                        r,
                        o = {
                          sceneCheck: !1,
                          checkBeforeAddOrderResult: null,
                          isOpenWeappUnion: !1,
                        },
                        { scene: s } =
                          (null == g.default.$native.getEnterOptionsSync
                            ? void 0
                            : g.default.$native.getEnterOptionsSync()) ||
                          (null == g.default.$native.getLaunchOptionsSync
                            ? void 0
                            : g.default.$native.getLaunchOptionsSync()) ||
                          {};
                      return (
                        null != (t = ma) && t.sceneCheckResult
                          ? Promise.resolve(
                              null == (r = ma) ? void 0 : r.sceneCheckResult
                            )
                          : Object(Be.default)({
                              origin: "cashier",
                              withCredentials: !0,
                              path: "/pay/wsctrade/order/buy/scene/check-compatible",
                              data: { scene: s },
                            }).then((e) => ((ma.sceneCheckResult = e), e))
                      )
                        .then((t) =>
                          e.lambdas
                            .checkBeforeAddOrderPromise()
                            .then((r) => {
                              var a = {
                                checkBeforeAddOrderResult: r,
                                sceneCheck: null == t ? void 0 : t.sceneCheck,
                                isOpenWeappUnion:
                                  null == t ? void 0 : t.isOpenWeappUnion,
                              };
                              return (
                                (e.data.shoppingComponent.sceneCheckResult = a),
                                a
                              );
                            })
                            .catch(() => {
                              var r = Object(a.a)({}, o, {
                                sceneCheck: null == t ? void 0 : t.sceneCheck,
                                isOpenWeappUnion:
                                  null == t ? void 0 : t.isOpenWeappUnion,
                              });
                              return (
                                (e.data.shoppingComponent.sceneCheckResult = r),
                                r
                              );
                            })
                        )
                        .catch(
                          (t) => (
                            fa("交易组件下单--调用scene/check失败", t),
                            e.lambdas
                              .checkBeforeAddOrderPromise()
                              .then((t) => {
                                var r = {
                                  checkBeforeAddOrderResult: t,
                                  sceneCheck: !1,
                                  isOpenWeappUnion: !1,
                                };
                                return (
                                  (e.data.shoppingComponent.sceneCheckResult =
                                    r),
                                  r
                                );
                              })
                              .catch(() => o)
                          )
                        );
                    });
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                  o = (function () {
                    var t = Object(f.a)(function* () {
                      var t,
                        a,
                        o,
                        s,
                        n = {
                          shouldSyncOrder: !1,
                          shouldSyncOrderV2: !1,
                          shouldSyncOrderV3: !1,
                          shouldSyncOrderWithOpenFlowInTradeModuleV3: !1,
                        },
                        {
                          payState: i,
                          state: d,
                          shoppingComponent: c,
                        } = e.data,
                        u = i && !d,
                        l = d && !i,
                        p =
                          (null == i || null == (t = i.order)
                            ? void 0
                            : t.extentions) ||
                          (null == d || null == (a = d.order)
                            ? void 0
                            : a.extensions) ||
                          {},
                        h =
                          null != c && c.sceneCheckResult
                            ? null == c
                              ? void 0
                              : c.sceneCheckResult
                            : yield r(),
                        y = {};
                      try {
                        y = JSON.parse(
                          (null == p ? void 0 : p.BIZ_ORDER_ATTRIBUTE) || "{}"
                        );
                      } catch (e) {
                        return (
                          fa("交易组件下单--BIZ_ORDER_ATTRIBUTE解析失败", e), n
                        );
                      }
                      var v,
                        g,
                        f,
                        m = "TRUE" === y.TRADE_MODULE_ORDER,
                        P =
                          "TRUE" === y.TRADE_MODULE_ORDER &&
                          "3.0" === y.OPEN_TRADE_MODULE_VERSION,
                        b =
                          "TRADE_COMPONENT_3_0" ===
                          y.WX_CHANNELS_COMPONENT_CREATE,
                        C = u && b;
                      return u ||
                        m ||
                        1 !==
                          (null == h ||
                          null == (o = h.checkBeforeAddOrderResult)
                            ? void 0
                            : o.requireOrder) ||
                        2 ===
                          (null == h ||
                          null == (s = h.checkBeforeAddOrderResult)
                            ? void 0
                            : s.requiredFundType)
                        ? m ||
                          (null != h && h.sceneCheck) ||
                          (null != h && h.isOpenWeappUnion) ||
                          C
                          ? e.lambdas
                              .getTradeModuleStatus()
                              .then(function (e) {
                                void 0 === e && (e = {});
                                var t =
                                    h.sceneCheck &&
                                    e.WEAPP_TRADE_MODULE_IS_ENABLE,
                                  r =
                                    m &&
                                    e.WEAPP_TRADE_MODULE_IS_OPEN &&
                                    !e.WEAPP_TRADE_MODULE_IS_ENABLE,
                                  a =
                                    h.isOpenWeappUnion &&
                                    e.WEAPP_TRADE_MODULE_IS_ENABLE,
                                  o = t || r || a,
                                  s =
                                    l &&
                                    h.sceneCheck &&
                                    e.WEAPP_TRADE_MODULE_V3_IS_ENABLE,
                                  n =
                                    l &&
                                    P &&
                                    e.WEAPP_TRADE_MODULE_V3_IS_OPEN &&
                                    !e.WEAPP_TRADE_MODULE_V3_IS_ENABLE,
                                  i = s || n,
                                  d =
                                    u &&
                                    P &&
                                    e.WEAPP_TRADE_MODULE_V3_IS_OPEN &&
                                    !e.WEAPP_TRADE_MODULE_V3_IS_ENABLE,
                                  c =
                                    (C && e.WEAPP_TRADE_MODULE_V3_IS_ENABLE) ||
                                    (C && d),
                                  p = i || c;
                                return {
                                  shouldSyncOrder: o || p,
                                  shouldSyncOrderV2: o,
                                  shouldSyncOrderV3: p,
                                  shouldSyncOrderWithOpenFlowInTradeModuleV3: n,
                                };
                              })
                              .catch(
                                (e) => (
                                  fa(
                                    "交易组件下单--获取交易组件接入信息失败",
                                    e
                                  ),
                                  n
                                )
                              )
                          : n
                        : Promise.resolve({
                            shouldSyncOrder: !0,
                            shouldSyncOrderV2:
                              0 ===
                              (null == h ||
                              null == (v = h.checkBeforeAddOrderResult)
                                ? void 0
                                : v.requiredFundType),
                            shouldSyncOrderV3:
                              1 ===
                                (null == h ||
                                null == (g = h.checkBeforeAddOrderResult)
                                  ? void 0
                                  : g.requiredFundType) ||
                              2 ===
                                (null == h ||
                                null == (f = h.checkBeforeAddOrderResult)
                                  ? void 0
                                  : f.requiredFundType),
                            shouldSyncOrderWithOpenFlowInTradeModuleV3: !1,
                          });
                    });
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                  s = () =>
                    o()
                      .then((e) => (null == e ? void 0 : e.shouldSyncOrder))
                      .catch(() => !1),
                  n = () =>
                    o()
                      .then((t) => {
                        var { shoppingComponent: r } = e.data,
                          { shouldSyncOrderV3: a } = t;
                        return (
                          a && (r.useWxvideoPayFlow = !0), !!r.useWxvideoPayFlow
                        );
                      })
                      .catch(() => !1),
                  i = (function () {
                    var r = Object(f.a)(function* () {
                      return s()
                        .catch(() => !1)
                        .then((r) => {
                          if (r) {
                            var a,
                              o =
                                null == (a = e.data.payState.order)
                                  ? void 0
                                  : a.orderNo;
                            return n().then(() => t(o));
                          }
                          return Promise.resolve();
                        });
                    });
                    return function () {
                      return r.apply(this, arguments);
                    };
                  })(),
                  d = (function () {
                    var r = Object(f.a)(function* () {
                      return s()
                        .catch(() => !1)
                        .then((r) => {
                          if (r) {
                            var a,
                              o =
                                null == (a = e.data.state.order)
                                  ? void 0
                                  : a.orderNo;
                            return n().then(() => t(o));
                          }
                          return Promise.resolve();
                        });
                    });
                    return function () {
                      return r.apply(this, arguments);
                    };
                  })();
                return {
                  sceneCheck: r,
                  getIsSyncOrder: s,
                  getWxOrderInfoTradePay: i,
                  getWxOrderInfoTradeBuy: d,
                  genCreateOrderParams: (function () {
                    var t = Object(f.a)(function* (t) {
                      return Promise.resolve(t)
                        .then((e) =>
                          o()
                            .then((t) => {
                              var {
                                shouldSyncOrderWithOpenFlowInTradeModuleV3: r,
                              } = t;
                              if (r) {
                                if (null == e || !e.extensions) return e;
                                var a =
                                  e.extensions.BIZ_ORDER_ATTRIBUTE || "{}";
                                try {
                                  var o = JSON.parse(a);
                                  (o.WX_CHANNELS_COMPONENT_CREATE =
                                    "TRADE_COMPONENT_3_0"),
                                    (a = JSON.stringify(o));
                                } catch (e) {}
                                e.extensions.BIZ_ORDER_ATTRIBUTE = a;
                              }
                              return e;
                            })
                            .catch(() => e)
                        )
                        .then((t) =>
                          n()
                            .then(() => {
                              var { shoppingComponent: r } = e.data;
                              if (r.useWxvideoPayFlow) {
                                if (null == t || !t.source) return t;
                                var a = t.source.itemSources || [];
                                a.forEach((e) => {
                                  try {
                                    var t = JSON.parse(
                                      e.bizTracePointExt || "{}"
                                    );
                                    (t.trade_module_order_version = "3.0"),
                                      (e.bizTracePointExt = JSON.stringify(t));
                                  } catch (e) {}
                                }),
                                  (t.source.itemSources = a);
                              }
                              return t;
                            })
                            .catch(() => t)
                        );
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  handleMutateStateAfterFetchInWxvideo: (function () {
                    var t = Object(f.a)(function* (t) {
                      var { state: r, isAsync: s } = t;
                      return o()
                        .then((t) => {
                          var { shouldSyncOrderV3: o } = t;
                          return o
                            ? s
                              ? (e.process.invoke("mutateState", (e) => {
                                  (e.display = Object(a.a)({}, e.display, {
                                    showPrePayCards: !1,
                                  })),
                                    (e.valueCard = Object(a.a)(
                                      {},
                                      e.valueCard,
                                      { checked: [], list: [] }
                                    ));
                                }),
                                void (
                                  r.useStoredCustomerDiscount &&
                                  (e.process.invoke(
                                    "setDisableStoredDiscount",
                                    !0
                                  ),
                                  e.process.invoke("confirmOrder"))
                                ))
                              : Object(a.a)({}, r || {}, {
                                  display: Object(a.a)(
                                    {},
                                    (null == r ? void 0 : r.display) || {},
                                    { showPrePayCards: !1 }
                                  ),
                                  valueCard: Object(a.a)(
                                    {},
                                    (null == r ? void 0 : r.valueCard) || {},
                                    { checked: [], list: [] }
                                  ),
                                })
                            : r;
                        })
                        .catch(() => r);
                    });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                };
              })(e)
            ),
            ...Object.entries(
              (function (e) {
                return {
                  genCreateOrderParams:
                    ((t = Object(f.a)(function* (t) {
                      return e.lambdas.checkFromChannelsLive() &&
                        wx.getChannelsShareKey
                        ? yield new Promise((e) => {
                            wx.getChannelsShareKey({
                              success(r) {
                                var { sharerOpenId: a } = r || {};
                                if (null == t || !t.source) return e(t);
                                var o = t.source.itemSources || [];
                                return (
                                  o.forEach((e) => {
                                    try {
                                      var t = JSON.parse(
                                        e.bizTracePointExt || "{}"
                                      );
                                      (t.wxvideo_sharer_open_id = a),
                                        (e.bizTracePointExt =
                                          JSON.stringify(t));
                                    } catch (e) {}
                                  }),
                                  (t.source.itemSources = o),
                                  e(t)
                                );
                              },
                              fail(r) {
                                fa(
                                  "微信视频号分享员订单打标流程--调用wx.getChannelsShareKey失败",
                                  r
                                ),
                                  e(t);
                              },
                            });
                          })
                        : t;
                    })),
                    function (e) {
                      return t.apply(this, arguments);
                    }),
                };
                var t;
              })(e)
            ),
            ...Object.entries(xa(e)),
            ...Object.entries(
              (function (e) {
                return {
                  handleLiveCouponExt: (t) =>
                    Object(f.a)(function* () {
                      var t,
                        { state: r } = e.data,
                        { source: o } = r.order;
                      if (
                        (Array.isArray(o.itemSources) &&
                          (t = o.itemSources.find((e) => {
                            try {
                              var t = JSON.parse(e.bizTracePointExt),
                                { scene: r } = t;
                              return 1177 === r;
                            } catch (e) {
                              return !1;
                            }
                          })),
                        t)
                      ) {
                        var [s = []] = e.process.invoke("genGoodsParams", {
                            prevState: [],
                          }),
                          { bookKey: n } = e.env.getQuery() || {};
                        return Object(Be.default)({
                          origin: "cashier",
                          withCredentials: !0,
                          method: "POST",
                          path: "/pay/wsctrade/order/buy/getLiveActivity.json",
                          data: {
                            goodsIds: s.map((e) => {
                              var { goodsId: t } = e;
                              return t;
                            }),
                            bookKey: n,
                          },
                        })
                          .then(
                            (t) => (
                              e.process.invoke("mutateState", (e) => {
                                var r;
                                try {
                                  r = JSON.parse(t.BIZ_ORDER_ATTRIBUTE || "{}");
                                } catch (e) {
                                  return;
                                }
                                e.order.extensions.BIZ_ORDER_ATTRIBUTE =
                                  JSON.stringify(
                                    Object(a.a)({}, r, {
                                      WX_VIDEO_LIVE_ID: "" + t.id,
                                    })
                                  );
                              }),
                              Promise.resolve(!0)
                            )
                          )
                          .catch(() => Promise.resolve(!0));
                      }
                      return !0;
                    })(),
                  handleWxvideoAfterCreateOrder: (t) =>
                    e.process
                      .invoke("getWxOrderInfoTradeBuy", t)[0]
                      .then(() => t)
                      .catch(() => t),
                };
              })(e)
            ),
          ].reduce((e, t) => {
            if (e[t[0]]) {
              var r = e[t[0]];
              e[t[0]] = function () {
                return r(...arguments).then(t[1]);
              };
            } else e[t[0]] = t[1];
            return e;
          }, {});
          return (
            Object.keys(t).forEach((r) => e.process.define(r, t[r])),
            () => {
              Object.keys(t).forEach((r) => e.process.undef(r, t[r]));
            }
          );
        };
      var Ia = r("Zf9w");
      class Ea {
        constructor(e) {
          (this.ctx = e.ctx), this.initChannel();
        }
        initChannel() {
          Object(Ia.g)() &&
            this.ctx.process.define("setShareIcon", (e) =>
              Object(a.a)({}, e, { show: !1 })
            );
        }
      }
      Ea.lambdas = {
        getScene: Ia.m,
        checkIsHalfScreen: Ia.g,
        checkIsChannels: Ia.e,
        checkIsChannelsAsync: Ia.f,
        checkFromShowcase: Ia.d,
        checkFromFullScreenSceneAsync: () => {
          var e = Object(Ia.m)();
          return Promise.resolve(
            1175 === e || 1176 === e || 1195 === e || 1208 === e
          );
        },
        checkIsOpenByLiveBag: Ia.i,
        checkIsOpenByLiveGoodsShare: Ia.j,
        checkIsWxvideoLive: Ia.l,
        checkFromChannelsLive: Ia.b,
        checkFromChannelsOpenFlow: Ia.c,
        checkIsNeedSyncOrderScene: Ia.h,
        checkIsOpenedWxV3: Ia.k,
        getTradeModuleStatus: Ia.n,
        checkBeforeAddOrderPromise: Ia.a,
      };
      var Da = {
          config: v,
          builtinBundle: {
            "@wsc-tee-trade/trade-pay-page-setup": Le,
            "@wsc-tee-trade/trade-pay-block-container": He,
            "@wsc-tee-trade/trade-order-status": Xe,
            "@wsc-tee-trade/trade-pay-pre-pay-card-cell": et,
            "@wsc-tee-trade/trade-pay-delivery-address": lt,
            "@wsc-tee-trade/trade-pay-submit": Ot,
            "@wsc-tee-trade/trade-buy-pay-view": St.a,
            "@assets-tee-extensions/cashier": xt.a,
            "@assets-tee-extensions/guarantee-components": kt,
            "@assets-tee-extensions/guarantee-freight-bar": Kt,
            "@wsc-tee-trade/trade-pay-goods": cr,
            "@wsc-tee-trade/trade-pay-price": pr,
            "@wsc-tee-trade/detail-time": gr,
            "@wsc-tee-trade/detail-coupon": Sr,
            "@wsc-tee-shop/footer": xr.a,
            "@assets-tee-extensions/guarantee-ensure": Er,
            "@wsc-tee-trade/detail-shop": Ar,
            "@wsc-tee-trade/trade-pay-groupon": Fr,
            "@wsc-tee-trade/trade-pay-idcard": Lr,
            "@wsc-tee-trade/trade-buy-order-keep": Kr,
            "@wsc-tee-shop/shop-rest": Vr.a,
            "@wsc-tee-trade/trade-pay-service": Qr,
            "@wsc-tee-trade/trade-pay-presale": ta,
            "@assets-tee-extensions/cashier-pre": ua,
            "trade-buy-cashier-wrap": ha,
            "trade-buy-privacy-bill": va.a,
            "@wsc-tee-trade/trade-buy-wxvideo-block": class {
              constructor(e) {
                (this.ctx = e.ctx), this.init();
              }
              init() {
                (this.ctx.data.shoppingComponent = {
                  sceneCheckResult: null,
                  orderInfo: null,
                  useWxvideoPayFlow: !1,
                }),
                  Ta(this.ctx),
                  this.ctx.env.getQueryAsync().then((e) => {
                    var { dbid: t, bookKey: r, book_key: a } = e;
                    (t || r || a) && this.SCENE_CHECK();
                  });
              }
              SCENE_CHECK() {
                return this.ctx.process.invoke("sceneCheck");
              }
            },
            "@ext-tee-wxvideo/wxvideo-utils": Ea,
          },
        },
        ka = g.default.getGlobal("ranta-app-runtime"),
        Na = ka.getPageOptions({
          rantaOptions: Object(a.a)(
            { page: "/packages/trade-pay/pay/index" },
            Da
          ),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: ka,
          tee: g.default,
          usedLifecycles: ["onAppShow", "pageDestroyed", "onPageShow"],
        });
      g.default.page({ mixins: [Na] });
    },
    "3wmw": function (e, t) {
      e.exports = {
        d: "valueCardPayPrice;4;themeColors;4;showPrePayCards;4",
        e: "",
        el: "",
        w: "PrePayCardCell",
        wc: "",
        wd: "PrePayCardCell",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "4Jn+": function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var a = r("Fcif");
      function o() {
        var e = [];
        return (
          e.push(
            Object(a.a)(
              { payChannel: "WX_APPLET", payChannelName: "微信支付" },
              { available: !0 }
            )
          ),
          e
        );
      }
    },
    "6u0K": function (e, t, r) {
      r.d(t, "c", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return o;
        }),
        r.d(t, "b", function () {
          return s;
        });
      var a = {
          message: "",
          showCancelButton: !1,
          confirmButtonText: "我知道了",
          cancelButtonText: "取消",
        },
        o = "CASH_ON_DELIVERY",
        s = "您正在选择货到付款，下单后由商家发货，送货上门并收款。";
    },
    "7c++": function (e, t) {
      e.exports = {
        d: "payState;2;isPaying;0;showQueueUpTips;2;orderPaid;2;setupState;4;displayData;4;payState;6;state;6;themeColors;4;isPaying;4;showQueueUpTips;6;finalPrice;4;kdtId;4;themeVars;4;preCashierChannel;4;showPriorUseSummary;4;isPreCashierPay;4;isPriorUseChosen;4;shop;4;prepare;4",
        e: "payBtnClick;toggleQueueUptips",
        el: "payBtnClick;toggleQueueUptips;pay:success;pay:close;pay:fail",
        w: "",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "onPaySuccess;onPayFail;startPayFromPay",
        pi: "startPay;startPayFromPay;doPay;onPaySuccess;onPayFail;queryPayChannels;afterOrderPaid;extPay",
        c: "",
        cc: "",
      };
    },
    "8JL1": function (e, t) {
      e.exports = {
        d: "viewportMargins;0;isPreCashierPay;4;buyerId;4;goods;4;orderNo;4",
        e: "afterBlockToggle",
        el: "cashier:viewport:in;cashier:viewport:out",
        w: "Main",
        wc: "Cashier",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "8aMX": function (e, t) {
      e.exports = {
        d: "orderFinalPrice;4;shopConfig;4;goods;4;pointDeduction;4;coupon;4;shop;4;pay;4;order;4;orderKeepApply;4;display;4;orderPaid;4;titleText;4;themeColors;4",
        w: "OrderKeepDialog;OrderKeepNavigator",
        wc: "OrderKeepDialog",
        wd: "OrderKeepNavigator",
        lc: "hexToRgb",
        li: "pageDestroyed",
      };
    },
    BRPL: function (e, t) {
      e.exports = {
        d: "showDeposit;4;order;4;pay;4;themeColors;4",
        e: "",
        el: "",
        w: "PreSaleCell;PreSaleCellWrapper",
        wc: "PreSaleCell",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    Bt2T: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      }),
        r.d(t, "c", function () {
          return d;
        }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return u;
        });
      var a = r("Fcif"),
        o = r("+I+c"),
        s = ["params"],
        n = () => {},
        i = (e) => {
          var t,
            r,
            i,
            d,
            c,
            u,
            { buyerId: l = 0, goods: p = {}, orderNo: h = "" } = e.data,
            y =
              (null == p || null == (t = p.list) || null == (r = t[0])
                ? void 0
                : r.goodsId) ||
              (null == p || null == (i = p[0]) ? void 0 : i.goodsId) ||
              0,
            v =
              (null == p || null == (d = p.list) || null == (c = d[0])
                ? void 0
                : c.title) ||
              (null == p || null == (u = p[0]) ? void 0 : u.title) ||
              "";
          n = (t) => {
            var r,
              { params: n } = t,
              i = Object(o.a)(t, s),
              d = Object(a.a)({}, i, {
                params: Object(a.a)({}, n, {
                  buyer_id: l,
                  goods_id: y,
                  goods_name: v,
                  order_no: h,
                }),
              });
            null == e || null == (r = e.logger) || r.log(d);
          };
        },
        d = () =>
          n({
            et: "view",
            ei: "choose_pay_method_view",
            en: "下方选择支付方式提示曝光",
            pt: "trade",
          }),
        c = () =>
          n({
            et: "click",
            ei: "choose_pay_method_click",
            en: "下方选择支付方式提示点击",
            pt: "trade",
          }),
        u = (e) =>
          n({
            et: "view",
            ei: "first_screen_show_pay",
            en: "下单页首屏直接展示支付方式",
            pt: "trade",
            params: { first_screen_show_pay: e },
          });
    },
    CWbA: function (e, t) {
      e.exports = {
        d: "totalPriceList;4;useBeforePayData;4;showPriorUseSummary;4;finalPrice;4;themeColors;4;isPreCashierPay;4;isPriorUseChosen;4",
        e: "",
        el: "",
        w: "PricePanel",
        wc: "",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    Ckrg: function (e, t, r) {
      var a = r("Sipi"),
        o = "is-pre-cashier-floating-btn-showed";
      t.a = {
        get: () => Object(a.b)(o) || !1,
        set: (e) => {
          Object(a.d)(o, e);
        },
      };
    },
    EFTn: function (e, t) {
      e.exports = {
        d: "themeVars;4",
        e: "",
        el: "",
        wc: "MainContent",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    HogY: function (e, t) {
      e.exports = {
        d: "userTel;4;showLogistics;4;showSelfFetch;4;selfFetchContact;4;selfFetchAddressDetail;4;selfFetchTime;4;dataLoaded;4;hasAddress;4;currentAddress;4;fullAddress;4;currentContact;4",
        e: "",
        el: "",
        w: "Logistics;SelfFetch;StripeBorder;Contact;LogisticsWrapper",
        wc: "Logistics",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    IWwY: function (e, t, r) {
      r.d(t, "a", function () {
        return o;
      });
      var a = r("US/N");
      function o() {
        return Object(a.default)({
          origin: "cashier",
          withCredentials: !0,
          path: "/pay/wsctrade/order/buy/getReceiverIdentityList.json",
          method: "GET",
        });
      }
    },
    MO0l: function (e, t, r) {
      r.d(t, "a", function () {
        return u;
      });
      var a = r("eijD"),
        o = r("+I+c"),
        s = r("Fcif"),
        n = r("exEQ"),
        i = r("2bgu"),
        d = ["title", "url", "weappUrl"],
        c = ["showGuarantee"];
      function u(e) {
        return class extends e {
          constructor(e) {
            super(Object(s.a)({}, e, { type: "PRE", request: n.b })),
              (this.useTypeRouter = !1),
              (this.initialized = !1),
              (this.rantaCtx = e.rantaCtx);
            var {
              onPaySuccess: t,
              onCashierClose: r,
              onCashierFail: a,
              onNavigate: c,
            } = e;
            (this.skynet = n.c),
              t && this.EE.on("pay-success", t),
              r && (this.EE.on("close", r), this.EE.on("quick-close", r)),
              a && this.EE.on("cashier-fail", a),
              i.a.init(),
              this.EE.on("navigate", (e) => {
                var { title: t, url: r, weappUrl: a } = e,
                  u = Object(o.a)(e, d);
                c && c();
                var { orderNo: l } = e.postPayData || {};
                if (a)
                  return wx.redirectTo({
                    url: a,
                    fail: (t) => {
                      n.c.error("跳转失败", { orderNo: l, error: t, data: e });
                    },
                  });
                Object(i.b)({
                  url: decodeURIComponent(r),
                  web: {
                    type: "znb",
                    znb: Object(s.a)({}, u, {
                      weappUrl: a,
                      title: t,
                      url: decodeURIComponent(r),
                      skipSafeLink: !0,
                    }),
                    znbFailureCb: (t) => {
                      n.c.error("跳转失败", {
                        orderNo: l,
                        error: null == t ? void 0 : t.message,
                        data: e,
                      });
                    },
                  },
                });
              });
          }
          startPay(e) {
            if (this.initialized) {
              var t = e || {},
                { showGuarantee: r } = t,
                a = Object(o.a)(t, c);
              this.EE.emit("update-show-guarantee", r), super.startPay(a);
            } else this.EE.emit("close");
          }
          init(e) {
            var t = () => super.init,
              o = this;
            return Object(a.a)(function* () {
              (o.clear = e.clear), (o.toast = e.toast);
              var a = yield r
                .e("packages/async-main/chunk")
                .then(r.t.bind(null, "sbP3", 7));
              return t()
                .call(o, e, a)
                .then(
                  (e) => (
                    (o.initialized = !0),
                    o.rantaCtx.event.emit("cashier:ready"),
                    e
                  )
                )
                .catch((e) => {
                  throw (
                    ((o.initialized = !0),
                    o.rantaCtx.event.emit("cashier:ready"),
                    e)
                  );
                });
            })();
          }
        };
      }
    },
    NdDv: function (e, t) {
      e.exports = {
        d: "grouponModel;4;themeColors;4",
        e: "",
        el: "",
        w: "GrouponHeaderCell",
        wc: "",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    YWbg: function (e, t) {
      e.exports = {
        d: "dataLoaded;4;shopName;4;formattedGoods;4;hasGoods;4;hasHotelGoods;4;hotelGoods;4;isPreSale;4;hotel;4;totalPrice;4;themeColors;4;themeVars;4;display;4",
        e: "",
        el: "",
        w: "GoodsListWrapper;GoodsList;GoodsMessage;Good;VirtualGood;Hotel;GoodsPrice;GuaranteeFreightBarWrapper",
        wc: "GoodsList;GoodsMessage;Good;VirtualGood;Hotel;GoodsPrice;GuaranteeFreightBar",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    aqCO: function (e, t, r) {
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return n;
        });
      var a = r("5HXs"),
        o = r.n(a),
        s = o()({ block: "cashier-pre" }),
        n =
          (o()({ block: "cashier-pre-copy-link" }),
          function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return s("flex", t);
          });
    },
    fb1X: function (e, t) {
      e.exports = {
        d: "kdtId;4;orderNo;4;showDeliveryType;4;showCheckDeliveryScope;4;showDeliveryTime;4;service;4;display;4",
        e: "",
        el: "",
        w: "Service",
        wc: "",
        wd: "Service",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    fug4: function (e, t, r) {},
    nnaz: function (e, t) {
      e.exports = {
        d: "kdtId;4;order;4;idcard;4;tradeTag;4;hasGoods;4;ignoreIdBinding;4;hasHaitaoGoods;4;shopName;4;themeColors;4",
        w: "Main;IdcardPopup",
        wd: "Main",
      };
    },
    qBTW: function (e, t, r) {
      r.d(t, "a", function () {
        return i;
      });
      var a = r("aDHN"),
        o = r("exEQ"),
        s = r("xqQ2");
      class n extends a.a {
        constructor() {
          super(o.b, o.c),
            this.mergeParams({
              package_name: "@assets-tee-extensions/cashier-pre",
            }),
            (this.tracker = new s.a({
              beforeAppshow() {},
              beforeEnterpage() {},
              batch: !1,
              plat: { yai: "cashier" },
            })),
            this.tracker.appShow();
        }
      }
      function i() {
        return new n();
      }
    },
    x7gW: function (e, t) {
      e.exports = {
        d: "icon;4;title;4;desc;4;countdownInterval;4;steps;4;isGroupon;4;hasHotelGoods;4",
        e: "countdownOver",
        el: "",
        w: "OrderStatus;OrderGuide;OrderStatusWrapper",
        wc: "OrderStatus",
        wd: "OrderStatus",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    yk8n: function (e, t, r) {
      function a(e) {
        return (e < 10 ? "0" : "") + e;
      }
      r.d(t, "a", function () {
        return c;
      });
      var o = 60 * (new Date().getTimezoneOffset() + 480) * 1e3,
        s = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        n = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Date.now(),
            t = new Date(e);
          return new Date(t.getFullYear(), t.getMonth(), t.getDate());
        },
        i = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return e.setDate(e.getDate() + t), e;
        },
        d = {
          sameDay: function (e, t) {
            return ["getFullYear", "getMonth", "getDate"].every(function (r) {
              return e[r]() === t[r]();
            });
          },
          date: function (e, t) {
            return (e = +e) === (t = +t) ? 0 : e > t ? 1 : -1;
          },
          time: function (e, t) {
            return (e = +e.slice(0, 5).replace(":", "")) ===
              (t = +t.slice(0, 5).replace(":", ""))
              ? 0
              : e > t
              ? 1
              : -1;
          },
          month: function (e, t) {
            var r = e.getFullYear(),
              a = t.getFullYear(),
              o = e.getMonth(),
              s = t.getMonth();
            return r === a ? (o === s ? 0 : o > s ? 1 : -1) : r > a ? 1 : -1;
          },
          inBusiness: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              r = c.weekday(e);
            return t.some(function (e) {
              return -1 !== e.weekdays.indexOf(r);
            });
          },
          isToday: function (e) {
            return d.sameDay(n(), e);
          },
          isCurrentYear: function (e) {
            return n().getFullYear() === e.getFullYear();
          },
          maxDate: function (e, t) {
            return t > e ? t : e;
          },
          day: function (e, t) {
            return (
              (e = new Date(c.date(e))), (t = new Date(c.date(t))), d.date(e, t)
            );
          },
        },
        c = {
          padZero: a,
          timeSpanToDate: function (e) {
            return new Date(e + o);
          },
          date: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "yyyy-mm-dd";
            return t
              .replace("yyyy", e.getFullYear())
              .replace("mm", a(e.getMonth() + 1))
              .replace("dd", a(e.getDate()));
          },
          monthDay: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "yy月dd日";
            return t
              .replace("yy", a(e.getMonth() + 1))
              .replace("dd", a(e.getDate()));
          },
          yearMonth: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "yyyy年mm月";
            return t
              .replace("yyyy", e.getFullYear())
              .replace("mm", e.getMonth() + 1);
          },
          time: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "hh:mm";
            return t
              .replace("hh", a(e.getHours()))
              .replace("mm", a(e.getMinutes()))
              .replace("ss", a(e.getSeconds()));
          },
          weekday: function (e) {
            return s[e.getDay()];
          },
          advancedWeekday: function (e) {
            var t = n(),
              r = d.sameDay;
            return r(t, e)
              ? "今天"
              : r(i(t), e)
              ? "明天"
              : r(i(t), e)
              ? "后天"
              : c.weekday(e);
          },
        };
    },
  });
