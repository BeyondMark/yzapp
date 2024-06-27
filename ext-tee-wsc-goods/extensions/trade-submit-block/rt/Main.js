"use strict";
var r = require("~/r");
r(
  "HOEn",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    HOEn: function (t, e, s) {
      s.r(e);
      var i = s("Fcif"),
        a = s("VmHG"),
        r = s("YeA1"),
        o = s("Shdd"),
        n = s("NHEX"),
        u = s.n(n),
        c = s("tS13"),
        d = s("3t/z"),
        h = s("US/N"),
        l = s("AGZf"),
        p = s("ONqW"),
        m = Object(p.a)();
      var g = s("zjWU"),
        k = s("KhBQ"),
        v = s("Tewj"),
        b = s("5Xe+"),
        S = s.n(b);
      function f(t) {
        var { cartText: e } = t,
          s = e ? "加入" + e : "";
        return {
          skuConfig: Object(i.a)({}, this.ctx.data.skuConfig, {
            addCartText: s,
          }),
        };
      }
      function O(t) {
        var { periodbuy: e, virtualTicket: s } = t,
          i = { periodBuy: e };
        return (
          (i.ecard = s
            ? {
                instructions: s.ecardInstructions,
                isPriceCalendar: 3 === s.validityType,
                itemPreOrderTimeStr: s.itemPreOrderTxt,
                itemPreOrderModel: s.itemPreOrderModel,
              }
            : null),
          i
        );
      }
      function y(t) {
        var { isFreeInterest: e, isInstallment: s } = t;
        if (s) return { installment: { isInstallment: s, isFreeInterest: e } };
      }
      function I(t) {
        var { subType: e, ladderList: s } = t || {},
          i = "ladderGroupOn" === e;
        return {
          ladderGroupOn: i ? { isLadderGroupon: i, ladderList: s } : null,
        };
      }
      function D(t) {
        var { coupon: e = {} } = t;
        return { couponTips: e };
      }
      var C = {
          state: {
            showEvent: null,
            hasSkuDirectOrderDone: !0,
            activityName: "",
            supportSkuDirectOrder: !1,
            goodsBaseInfo: {},
            buyConfig: {},
            goodsPriceInfo: {},
            goodsSkuData: {},
            goodsMetaInfo: {},
            shopBaseInfo: {},
            showSku: !1,
            showSelfSelectedCombo: !1,
            skuData: {},
            skuConfig: {},
            featureSwitch: {},
            shopMetaInfo: {},
            goodsActivity: {},
            pointsConfig: {},
            multiSkuDecision: {},
            themeVars: "",
            selectedSkuComb: null,
            kdtId: 0,
            explainVideoFullScreen: !1,
            hasOpenExplainVideo: !1,
            themeTag: {},
            themeType: 0,
            pageVars: "",
            skuBtnClickStartTime: 0,
          },
          getters: {
            skuGoods() {
              var t,
                e,
                { goods: s } =
                  ((t = this.goodsBaseInfo),
                  (e = u()(t, "pictures[0].url")),
                  { goods: Object(i.a)({}, t, { picture: e }) });
              return Object(i.a)(
                {},
                S()(s, [
                  "isHaitao",
                  "picture",
                  "priceTags",
                  "id",
                  "alias",
                  "title",
                  "soldNum",
                ]),
                S()(this.goodsMetaInfo, [
                  "showStockLackReminder",
                  "stockRemindStatus",
                ])
              );
            },
          },
          getActions: function (t) {
            return {
              beforeShowSku(t) {
                var { event: e, sku: s } = t,
                  { directAddCart: a, directOrder: r, submitAction: o } = e,
                  {
                    limit: n,
                    collectionId: d,
                    price: h,
                    stockNum: l,
                    pointsPrice: p,
                  } = s || {},
                  m = u()(n, "startSaleNum", 1),
                  g = Object(i.a)({}, e, {
                    skuData: {
                      messages: {},
                      cartMessages: {},
                      selectedNum: m,
                      goodsId: this.goodsBaseInfo.id,
                      selectedSkuComb: {
                        id: d,
                        price: h,
                        stockNum: l,
                        pointsPrice: p,
                      },
                    },
                  });
                return a
                  ? (this.doSkuSubmit(g), !1)
                  : !(r && !this.supportSkuDirectOrder) ||
                      (this.doSkuSubmit(
                        Object(i.a)({}, g, {
                          submitAction: o || c.d.TRADE_SUBMIT,
                        })
                      ),
                      !1);
              },
              saveBigButtons(t) {
                var e = t
                  .filter(
                    (t) =>
                      t.primary &&
                      (t.btnActive === c.a.OPEN_SKU ||
                        ("groupOn" === t.activityName &&
                          t.btnActive === c.a.WX_SUBSCRIBE))
                  )
                  .pop();
                (this.primaryBtn = e),
                  !e && t.length > 0 && (this.defaultPreviewBtn = [...t].pop());
              },
              showBizSku(e) {
                if (((this.hasSkuDirectOrderDone = !0), e)) {
                  var { activityName: s } = e,
                    a = this.goodsSkuData[s],
                    r = s !== this.activityName;
                  if (this.beforeShowSku({ event: e, sku: a })) {
                    if (
                      (this.customLogger(
                        "addCart" === e.skuScene ? g.b.add_cart : g.b.buy_now,
                        "sku弹出成功"
                      ),
                      (this.skuData = a),
                      (t.data.skuData = a),
                      (this.activityName = s),
                      (this.showEvent = Object(i.a)({}, this.showEvent, e, {
                        skuOptions: { resetStepperOnHide: !1, resetSku: r },
                      })),
                      !this.supportSkuDirectOrder)
                    ) {
                      this.showSku = !0;
                      var { comboType: o, isCombo: n } =
                        this.goodsBaseInfo.comboMark || {};
                      return (
                        (this.showSelfSelectedCombo = n && 1 === o),
                        void g.a.start({ name: g.b.sku_popup_open })
                      );
                    }
                    var { estimatedPriceCoupon: u = {} } =
                        this.estimatePriceData,
                      { alias: c } = u;
                    c
                      ? Object(d.a)({
                          alias: c,
                          kdtId: this.kdtId,
                          source: "goods_details_auto_take",
                        }).finally(() => {
                          t.event.emit("skuOrder:show", this.showEvent);
                        })
                      : t.event.emit("skuOrder:show", this.showEvent);
                  }
                }
              },
              doSkuSubmit(t) {
                var { showStockLackReminder: e, stockRemindStatus: s } =
                    this.goodsMetaInfo,
                  { isHqShopPreview: a = !1 } = this.shopBaseInfo,
                  {
                    activityName: r,
                    skuData: { selectedSkuComb: o },
                    extraParams: n = {},
                  } = t,
                  { supportSkuDirectOrder: u } = n,
                  d = this.goodsSkuData[r] || {},
                  h = Object(i.a)({}, t, {
                    activityInfo: d.activityInfo || {},
                  }),
                  { stockNum: p, skuId: m } = o || {},
                  k = !0;
                if (e && 0 === p) {
                  var b = s[m];
                  (h.subscribeSceneV2 = c.e.STOCK_REMINDER),
                    (h.subscribeStatus = b),
                    (k = !b);
                }
                var S = "addCart" === t.skuScene,
                  f = S ? g.b.add_cart : g.b.buy_now;
                if (
                  (this.showSku &&
                    ((f = S ? g.b.sku_cart : g.b.sku_buy),
                    g.a.start({ name: f }),
                    this.skuBtnClickStartTime ||
                      (this.skuBtnClickStartTime = Date.now())),
                  a)
                ) {
                  return (
                    this.customLogger(f, "总店预览商品不支持下单购买"),
                    (this.skuBtnClickStartTime = 0),
                    l.a.loading({
                      message: "总店预览商品不支持下单购买",
                      duration: 2e3,
                      position: "bottom",
                    })
                  );
                }
                this.submitAction(h),
                  k && !u && "buy" !== h.skuScene && this.onHideSku(),
                  S &&
                    v.default.trigger(
                      "addCartSuccess",
                      "addCartSku",
                      t.skuData
                    );
              },
              resolveProcess(e) {
                var s = this;
                void 0 === e && (e = {});
                var { goods: a } = this.goodsSkuData,
                  r = (e.selectedSkuComb || {}).price || (a || {}).price || 0,
                  o = Object(i.a)({}, this.showEvent || {}, e, {
                    priceBlock: { price: r },
                  }),
                  n = JSON.stringify(e.pluginsResult || {});
                t.process.invokePipe("skuUpdate", o).then(function (t) {
                  void 0 === t && (t = {});
                  var e = JSON.stringify(t.pluginsResult || {});
                  n !== e &&
                    s.onPluginsChange({
                      name: "skuPayWays",
                      priority: 60,
                      pluginsResult: t.pluginsResult,
                    });
                });
              },
              skuSelected(t) {
                this.onSkuSelected(
                  Object(i.a)({}, t, { origin: "sku", changeType: "sku" })
                );
              },
              onSkuSelected(e) {
                (this.selectedSkuComb = e.selectedSkuComb),
                  t.event.emit("sku:selected", e),
                  "sku" === e.origin && this.onEstimateUpdate(e, this.skuNum),
                  this.resolveProcess(e),
                  this.emitTradePrefetch();
              },
              getUserStateSkuDirectOrder(e) {
                var { isSkuDirectOrder: s = !1 } = e;
                (this.showEvent = e),
                  this.hasSkuDirectOrderDone &&
                    (s
                      ? t.data.skuDirectVersion > 0
                        ? this.handleSkuOrderAction(e, {
                            supportSkuDirectOrder: !0,
                          })
                        : ((this.hasSkuDirectOrderDone = !1),
                          this.handleSkuOrderEvent(this.showEvent),
                          this.customLogger(
                            "addCart" === e.skuScene
                              ? g.b.add_cart
                              : g.b.buy_now,
                            "sku直接下单"
                          ))
                      : this.handleSkuOrderAction(e, {
                          supportSkuDirectOrder: !1,
                        }));
              },
              setSupportSkuDirectOrder(e) {
                (this.supportSkuDirectOrder = e),
                  (t.data.supportSkuDirectOrder = e);
              },
              handleSkuOrderAction(e, s) {
                var i =
                  (null == s ? void 0 : s.supportSkuDirectOrder) &&
                  !Object(k.c)();
                if ((this.setSupportSkuDirectOrder(i), i)) {
                  t.data.ecard = null;
                  var { id: a, title: r } = this.goodsBaseInfo;
                  !(function (t, e) {
                    m.log({
                      et: "view",
                      ei: "sku_creat_order_component_view",
                      en: "商详sku下单组件曝光",
                      params: {
                        goods_id: t,
                        goods_name: e,
                        component: "sku_creat_order_component",
                      },
                    });
                  })(a, r);
                }
                this.showBizSku(e);
              },
              handleSkuOrderEvent(t) {
                var { alias: e } = this.goodsBaseInfo;
                Object(h.default)({
                  path: "/wscgoods/tee-app/sku-direct-order.json",
                  data: { alias: e, useNewSkuOrder: !0 },
                  withCredentials: !0,
                })
                  .then((e) => {
                    this.handleSkuOrderAction(t, {
                      supportSkuDirectOrder: e.userStateSupportSkuDirectOrder,
                    });
                  })
                  .catch(() => {
                    this.setSupportSkuDirectOrder(!1), this.showBizSku(t);
                  });
              },
              showNearSku() {
                var { activityName: e, bigButtons: s } = t.data,
                  a = this.showEvent || this.primaryBtn;
                if ((e && (a = { activityName: e }), !a)) {
                  a = Object(i.a)({}, this.defaultPreviewBtn || {}, {
                    name: "preview-buy",
                    activityName: "goods",
                    btnActive: c.a.OPEN_SKU,
                    skuScene: c.c.PREVIEW_SKU,
                  });
                  var r = "";
                  Array.isArray(a.main) &&
                    a.main.length > 0 &&
                    (r = a.main[0].text || ""),
                    (t.data.skuConfig = Object(i.a)({}, t.data.skuConfig, {
                      previewText: r,
                    }));
                }
                s[0].skuScene === c.c.ADD_CART &&
                  (s[1] || {}).skuScene === c.c.BUY &&
                  (a.skuScene = c.c.SEL_SKU),
                  this.showBizSku(a);
              },
              onHideSku() {
                this.showSku = !1;
              },
              onNumChange(e) {
                t.event.emit("sku:num-change", e),
                  (this.skuNum = e),
                  this.emitTradePrefetch(),
                  this.onSkuSelected({
                    selectedSkuComb: this.selectedSkuComb,
                    origin: "sku",
                    changeType: "num",
                  }),
                  m.log({
                    et: "click",
                    ei: "click_sku_number",
                    en: "点击sku弹层数量控件",
                  });
              },
              onPreview(e) {
                m.log({
                  et: "click",
                  ei: "click_sku_pic",
                  en: "点击sku弹层中图片",
                }),
                  t.event.emit(
                    "sku:preview-click",
                    Object(i.a)({}, e, { uiType: "SKU" })
                  );
              },
              onSkuOpened() {
                this.customLogger(g.b.sku_popup_open, "sku弹出成功");
                try {
                  t.hummer.mark.end("goods-detail-sku-popup");
                } catch (t) {}
              },
              customLogger(t, e, s) {
                void 0 === s && (s = "finish"),
                  g.a.end({
                    name: t,
                    type: s,
                    level: "finish" === s ? "info" : "error",
                    extra: { message: e },
                  });
              },
            };
          },
        },
        P = {
          getActions: function (t) {
            return {
              submitAction(e) {
                var { link: s, submitAction: i, subscribeSceneV2: a } = e,
                  {
                    pageName: o,
                    query: n = {},
                    type: u = "navigate",
                  } = s || {};
                switch (i) {
                  case c.d.JUMP_LINK:
                    Object(r.a)().dmc[u](o, n);
                    break;
                  case c.d.SUBSCRIBE:
                    a && t.event.emit("subscribe:show", e);
                    break;
                  case c.d.TRADE_SUBMIT:
                    if (a) {
                      t.event.emit("subscribe:show", e),
                        (this.skuBtnClickStartTime = 0);
                      break;
                    }
                    this.startTradeSubmit(e);
                    break;
                  case c.d.SHARE:
                  case c.d.BREAK:
                    break;
                  default:
                    this.resolveUmpCustomEvent({ type: i, data: e }),
                      t.event.emit("custom:event", { type: i, data: e });
                }
              },
            };
          },
        },
        w = s("9ZMt"),
        T = s("sXPE"),
        B = s("nTO+");
      var _ = s("pn6R"),
        E = s.n(_),
        j = s("lgMb"),
        N = s("WQRT");
      function A(t) {
        return Object(h.requestV2)({
          method: "POST",
          path: "/wsctrade/order/goodsBook.json",
          data: Object(N.b)(t),
        }).catch(function (t) {
          void 0 === t && (t = {}),
            Object(j.b)(t, { message: "下单失败，请稍后重试" });
        });
      }
      var x = s("f6Yk"),
        R = s("+I+c"),
        U = s("aOlM"),
        G = ["skuData"],
        K = Object(U.a)((t) => {
          t.tradePrefetchHandler();
        }, 200),
        M = "pedding",
        V = "fulfilled",
        F = "rejected";
      var L = w.default.getApp(),
        H = {
          state: {
            skuScene: "",
            bookKey: 0,
            postData: {},
            skuDirectOrderScene: "",
            guarantee: {},
            isLoading: !1,
            goodsCombineInfo: {},
            tradePrefetchCahceData: {},
          },
          getActions: function (t) {
            return Object(i.a)(
              {},
              (function (t) {
                return {
                  setTradePrefetchRef(t) {
                    this.prefetchRef = t;
                  },
                  emitTradePrefetch() {
                    var e;
                    1 ==
                      +(null == (e = t.data.pageSwitch)
                        ? void 0
                        : e.prefetch_bookKey_switch) &&
                      (this.skuDirectOrderScene ||
                        t.data.supportSkuDirectOrder ||
                        (this.resetTradePrefetchData(),
                        K(this),
                        clearTimeout(this.tradePrefetchTimer),
                        (this.tradePrefetchTimer = setTimeout(() => {
                          this.resetTradePrefetchData();
                        }, 18e3))));
                  },
                  tradePrefetchHandler() {
                    this.prefetchRef &&
                      this.prefetchRef
                        .validate({ noToast: !0 })
                        .then((t) => {
                          var { skuData: e } = t,
                            s = Object(R.a)(t, G),
                            a = this.goodsSkuData[this.activityName] || {},
                            { activityInfo: r = {} } = a;
                          this.startTradeSubmit(
                            Object(i.a)({ skuData: e }, s, {
                              activityInfo: r,
                              skuScene: c.c.BUY,
                            }),
                            !0
                          );
                        })
                        .catch(() => {});
                  },
                  resetTradePrefetchData() {
                    this.tradePrefetchCahceData = {};
                  },
                };
              })(t),
              {
                setOrderKeepData(e) {
                  var { displayData: s = {}, orderData: i = {} } = e || {},
                    { bookKey: a } = i;
                  a === this.bookKey &&
                    ((t.data.displayData = s),
                    (t.data.orderData = i),
                    t.event.emit("ORDER_KEEP:open"));
                },
                bindOrderKeepHandler() {
                  L.on("order:leave:stop", this.setOrderKeepData);
                },
                offOrderKeepHandler() {
                  L.off("order:leave:stop", this.setOrderKeepData);
                },
                setPostDataProcess: (e) =>
                  t.process.invokePipe("setTradePostData", e),
                startTradeSubmit(e, s) {
                  var a = this,
                    {
                      skuScene: r,
                      skuData: n,
                      pluginsResult: d,
                      activityInfo: h,
                      extraParams: l = {},
                      activityName: p = "goods",
                    } = e;
                  (this.currentActivityName = p), (this.isPrefetchProcess = s);
                  var { skuDirectOrderScene: k, skuNameForLog: v } = l;
                  this.skuDirectOrderScene = k;
                  var b = t.logger.getLogParams(),
                    f = (x.a && Object(x.a)()) || {},
                    { fromSource: O } = t.env.getQuery(),
                    y = t.data.explainVideoFullScreen || !1,
                    I = (!y && t.data.hasOpenExplainVideo) || !1;
                  this.skuScene = r;
                  var D,
                    {
                      isCombo: C = !1,
                      comboGroupModels: P = [],
                      comboType: _ = 0,
                    } = this.goodsCombineInfo || {};
                  (this.isBuyScene = r === c.c.BUY),
                    (this.loggerKeyName = this.isBuyScene
                      ? g.b.buy_now
                      : g.b.add_cart),
                    this.showSku &&
                      (this.loggerKeyName = this.isBuyScene
                        ? g.b.sku_buy
                        : g.b.sku_cart);
                  try {
                    this.postData = ((t) => {
                      var {
                          skuData: e,
                          goods: s,
                          shop: a,
                          activityInfo: r,
                          pluginsResult: o = {},
                          goodsGrowthParams: n,
                          logParams: c,
                          pageQuery: d,
                          platform: h,
                          bosWorkFlow: l,
                          isFromItemDetail: p,
                          fromSource: m,
                          combineGoodsData: g,
                          isFromExplainVideo: k,
                          hasOpenExplainVideo: v,
                        } = t,
                        b = u()(c, "context.dc_ps", ""),
                        S = u()(c, "context.click_id", ""),
                        f = Object(i.a)(
                          {},
                          c.context,
                          c.plat,
                          {
                            uuid: c.user.uuid || "",
                            userId: c.user.li || "",
                            platform: h,
                          },
                          d
                        ),
                        { scene: O } = w.default.getAppOptions();
                      O && (f.scene = O);
                      var y = {
                          dcPs: b,
                          biz_trace_point_ext: JSON.stringify(
                            Object(i.a)({}, n, f)
                          ),
                        },
                        I = {
                          bosWorkFlow: l,
                          isFromItemDetail: p,
                          source: "goods_detail",
                        };
                      S && (y.gdtClickId = S), m && (y.from_source = m);
                      var { activityType: D } = r || {},
                        { selectedSkuComb: C = {} } = e || {};
                      return (
                        D === T.b.POINTS &&
                          ((I.isPoints = 1), (y.points_price = C.pointsPrice)),
                        (k || v) &&
                          (y.extra = Object(i.a)({}, y.extra || {}, {
                            IS_FROM_EXPLAIN_VIDEO: k,
                            HAS_OPEN_EXPLAIN_VIDEO: v,
                          })),
                        Object(B.a)({
                          skuData: e,
                          goods: s,
                          shop: a,
                          pluginsResult: o,
                          activityInfo: r,
                          commonExtra: I,
                          goodsExtra: y,
                          combineGoodsData: g,
                        })
                      );
                    })(
                      Object(i.a)(
                        { skuData: E()(n), pluginsResult: d, activityInfo: h },
                        ((D = t.data),
                        {
                          goods: Object(i.a)(
                            {},
                            S()(D.goodsBaseInfo, [
                              "id",
                              "supportUnconditionalReturn",
                            ]),
                            { postage: D.distribution.postage }
                          ),
                          shop: {
                            multistore: D.multistore,
                            kdtId: D.shopBaseInfo.kdtId,
                          },
                        }),
                        {
                          goodsGrowthParams: f,
                          logParams: b,
                          pageQuery: t.env.getQuery(),
                          platform: w.default.getEnv(),
                          bosWorkFlow: this.buyConfig.bosWorkFlow,
                          isFromItemDetail: !1,
                          fromSource: O,
                          combineGoodsData: {
                            flag: r,
                            isCombo: C,
                            comboType: _,
                            comboGroupModels: e.isCombo ? e.groupList : P,
                          },
                          isFromExplainVideo: y,
                          hasOpenExplainVideo: I,
                        }
                      )
                    );
                  } catch (t) {
                    this.handleCommonError(
                      t,
                      "[商详页下单-startTradeSubmit.formatGoodsPostData]"
                    );
                  }
                  Object(o.a)(
                    this,
                    [this.setUmpTradeData, this.setPostDataProcess],
                    this.postData
                  )
                    .then((t) => {
                      t && ((this.postData = t), this.doCheckBeforeSubmit());
                    })
                    .catch(function (t) {
                      void 0 === t && (t = {}),
                        a.submitlogger(
                          t.message || "商品数据处理错误",
                          "error"
                        );
                    }),
                    this.isPrefetchProcess ||
                      (function (t, e) {
                        var s = {
                          [c.c.BUY]: { type: "buy", name: "立即购买" },
                          [c.c.ADD_CART]: {
                            type: "add_cart",
                            name: "添加购物车",
                          },
                        }[t];
                        if (s) {
                          var {
                              goods: i,
                              guarantee: a,
                              skuInfo: r,
                              shopConfig: o,
                            } = e,
                            n = {
                              et: "click",
                              ei: s.type,
                              en: s.name,
                              params: {
                                sku_id: r.id,
                                sku_name: r.name,
                                num: r.num,
                                goods_alias: i.alias,
                                goods_id: i.id,
                                goods_name: i.title,
                                group_ids: [],
                                picture_url: i.picture,
                                price: i.minPrice / 100,
                                show_price: i.price,
                                guarantee_on: a.yzGuarantee,
                                beauty_rights: a.hasBeautyRights,
                                eat_rights: a.hasEatRights,
                                freight_insurance:
                                  1 === Number(o.supportFreightInsurance),
                                freight_insurance_pro:
                                  2 === Number(o.supportFreightInsurance),
                              },
                            };
                          m.log(n);
                        }
                      })(r, {
                        goods: Object(i.a)(
                          {},
                          this.goodsBaseInfo,
                          this.goodsPriceInfo
                        ),
                        skuInfo: {
                          id: this.postData.skuId,
                          name: v || [],
                          num: this.postData.num,
                        },
                        guarantee: this.guarantee,
                        shopConfig: t.data.shopConfig,
                      });
                },
                saveGuaranteeData(t) {
                  this.guarantee = t;
                },
                doCheckBeforeSubmit() {
                  !this.isLoading || this.isPrefetchProcess
                    ? this.isBuyScene && 1 === this.buyConfig.buyLimitType
                      ? this.isPrefetchProcess ||
                        (this.submitlogger("需要先关注店铺公众号"),
                        (this.skuBtnClickStartTime = 0),
                        t.event.emit("follow:show", {
                          extraData: {
                            bizCode: 7,
                            activityKey: this.goodsBaseInfo.alias,
                          },
                        }))
                      : this.submitData()
                    : this.supportSkuDirectOrder ||
                      Object(l.a)("正在前往下单，请稍候");
                },
                submitData() {
                  if (
                    (this.isPrefetchProcess || (this.isLoading = !0),
                    this.isBuyScene)
                  ) {
                    var {
                        cartMessages: e,
                        num: s,
                        skuId: i,
                      } = this.postData || {},
                      a = {
                        messages: e,
                        num: s,
                        skuId: i,
                        goodsAlias: this.goodsBaseInfo.alias,
                        activityName: this.currentActivityName,
                      };
                    t.process
                      .invokePipe("beforeBuy", a)
                      .then((e) =>
                        t.cloud
                          .invoke(
                            "beforeBuy",
                            S()(a, ["skuId", "num", "messages"])
                          )
                          .then(() => {
                            var { umpExt: t } = e || {};
                            t && (this.postData.cloudExtension = { umpExt: t }),
                              this.buy();
                          }, this.handleBeforeBuyError)
                      )
                      .catch(this.handleBeforeBuyError);
                  } else this.addCart();
                },
                buyHandlerCache(t) {
                  var e,
                    s,
                    { doPromise: i, response: a } =
                      this.tradePrefetchCahceData || {};
                  return i
                    ? ((e = i),
                      (s = {}),
                      Promise.race([e, s])
                        .then((t) => (t === s ? M : V))
                        .catch(() => F))
                        .then((t) => (t === V ? a : i))
                        .catch(() => A(t))
                    : A(t);
                },
                prefetchBookKey() {
                  var { postData: t } = this,
                    e = A(t);
                  (this.tradePrefetchCahceData.doPromise = e),
                    e.then((t) => {
                      this.tradePrefetchCahceData.response = t;
                    });
                },
                buy() {
                  if (this.isPrefetchProcess) this.prefetchBookKey();
                  else {
                    var { postData: e } = this;
                    t.data.distribution &&
                      t.data.distribution.supportSelfFetch &&
                      s
                        .e("packages/async-main/chunk")
                        .then(s.bind(null, "7y9c"))
                        .then((t) => {
                          var {
                            fetchDefaultSelffetchPoint: s,
                            formatGoodsParams: a,
                          } = t;
                          s(Object(i.a)({}, a(e), { firstOneFill: !0 }));
                        }),
                      this.buyHandlerCache(e)
                        .then((s) => {
                          if (!s) throw new Error("获取bookkey接口失败");
                          this.afterSubmitData({ res: s }),
                            (this.bookKey = s.bookKey);
                          var a = u()(e, "common.orderFrom"),
                            r = (function (t) {
                              var e = t.buyUrl;
                              return (
                                "weapp" === w.default.getEnv() &&
                                  ((e =
                                    "/packages/order/index?bookKey=" +
                                    t.bookKey),
                                  t.orderFrom &&
                                    (e += "&orderFrom=" + t.orderFrom)),
                                e
                              );
                            })(
                              Object(i.a)({}, s, {
                                kdtId: e.kdtId,
                                orderFrom: a,
                              })
                            ),
                            o = {
                              bookKey: s.bookKey,
                              buyUrl: r,
                              goodsAlias: this.goodsBaseInfo.alias,
                              messages: e.cartMessages,
                              num: e.num,
                              skuId: e.skuId,
                              activityName: this.currentActivityName,
                            };
                          t.process
                            .invokePipe("afterBuy", o)
                            .then((e) => {
                              t.cloud
                                .invoke("afterBuy", o)
                                .then(() => {
                                  var { extOrderQuery: r } = e || {},
                                    o = r
                                      ? { ext_query: JSON.stringify(r) }
                                      : {};
                                  this.supportSkuDirectOrder
                                    ? t.event.emit("skuBookkey:finish", {
                                        bookKey: s.bookKey,
                                        skuDirectOrderScene:
                                          this.skuDirectOrderScene,
                                      })
                                    : (t.process.invoke("navigateToTradeBuy", {
                                        navigateParams: Object(i.a)({}, o, {
                                          bookKey: s.bookKey,
                                          orderFrom: a,
                                          yzGuarantee: t.data.yzGuarantee,
                                          freightInsurance:
                                            t.data.shopConfig
                                              .supportFreightInsurance,
                                          pageSource: t.data.pageKey || "",
                                        }),
                                      }),
                                      this.resetTradePrefetchData(),
                                      this.submitHummerLogger("goods-buy-now"),
                                      this.submitlogger("跳转下单页成功"));
                                })
                                .catch(this.handleBuyError);
                            })
                            .catch(this.handleBuyError);
                        })
                        .catch(this.handleBuyError);
                  }
                },
                addCart() {
                  var { num: e, skuId: s, cartMessages: a } = this.postData,
                    r = { messages: a, num: e, skuId: s };
                  t.process
                    .invokePipe(
                      "beforeCartSubmit",
                      Object(i.a)({}, r, {
                        goodsAlias: this.goodsBaseInfo.alias,
                      })
                    )
                    .then((e) => {
                      t.cloud
                        .invoke("beforeCartAdd", r)
                        .then(() => {
                          var t;
                          e &&
                            Object.assign(
                              this.postData.commonExtra,
                              Object(i.a)({}, [e])
                            ),
                            ((t = this.postData),
                            Object(h.requestV2)({
                              path: "/wscshop/trade/cart/goods.json",
                              method: "POST",
                              header: {
                                "content-type":
                                  "application/x-www-form-urlencoded",
                              },
                              data: Object(N.a)(t),
                            })
                              .then(
                                () => (
                                  Object(l.a)("已成功添加到购物车"),
                                  { success: !0 }
                                )
                              )
                              .catch(function (t) {
                                return (
                                  void 0 === t && (t = {}),
                                  Object(j.b)(t, {
                                    message: "添加购物车失败，请稍后重试",
                                  }),
                                  { success: !1, err: t }
                                );
                              }))
                              .then((t) => {
                                this.afterSubmitData({
                                  res: t,
                                  options: { skuId: s },
                                }),
                                  getApp().trigger("component:sku:cart");
                                var e = {
                                  type: "finish",
                                  message: "加入购物车成功",
                                };
                                if (!t.success) {
                                  var { err: i = {} } = t;
                                  (i.code || (i.data && i.data.code)) &&
                                    (e.type = "error"),
                                    (e.message =
                                      "加入购物车失败 " + JSON.stringify(i)),
                                    (this.skuBtnClickStartTime = 0);
                                }
                                this.submitHummerLogger("goods-add-cart"),
                                  this.submitlogger(e.message, e.type);
                              })
                              .catch((t) => this.handleCartError(t, "addCard"));
                        })
                        .catch((t) => this.handleCartError(t, "addCard"));
                    })
                    .catch((t) => this.handleCartError(t, "beforeCartSubmit"));
                },
                afterSubmitData(e) {
                  var { res: s, options: a } = e;
                  this.isLoading = !1;
                  var { skuScene: r } = this;
                  t.event.emit(
                    "trade:finish",
                    Object(i.a)({}, s, { skuScene: r }, a)
                  ),
                    this.umpTradeFinish();
                },
                handleBeforeBuyError(t) {
                  this.handleCommonError(t, "[商详页下单-beforeBuy]");
                },
                handleCartError(t, e) {
                  this.handleCommonError(t, "[商详页加购-" + e + "]");
                },
                handleBuyError(e) {
                  this.handleCommonError(e, "[商详页下单-buy]"),
                    this.supportSkuDirectOrder &&
                      t.event.emit("skuBookkey:finish", null);
                },
                handleCommonError(e, s) {
                  void 0 === e && (e = {}),
                    s && (e.message = s + " " + e.message),
                    (this.isLoading = !1),
                    t.hummer && t.hummer.capture(e),
                    this.submitlogger(e.message, "error");
                },
                submitlogger(t, e) {
                  void 0 === e && (e = "finish"),
                    "error" === e && (this.skuBtnClickStartTime = 0),
                    this.customLogger(this.loggerKeyName, t, e);
                },
                submitHummerLogger(e) {
                  try {
                    this.skuBtnClickStartTime &&
                      (t.hummer.mark.start(e, this.skuBtnClickStartTime),
                      t.hummer.mark.end(e),
                      (this.skuBtnClickStartTime = 0));
                  } catch (t) {}
                },
              }
            );
          },
        },
        q = s("YehF"),
        W = s("+66q"),
        Q = new (s("Hpq+").a)(),
        z = {
          state: {
            extraData: {},
            skuNum: 1,
            periodBuy: null,
            couponTips: {},
            ladderGroupOn: null,
            ecard: null,
            showVirtualTicketIntro: !0,
            pluginNames: [],
            pluginsGoods: "",
          },
          getters: {
            selectedId() {
              var { skuId: t, id: e } = this.selectedSkuComb || {};
              return e || t || (this.goodsSkuData.goods || {}).skuId || 0;
            },
            goodsAttributesOpt() {
              var t = (this.goodsMetaInfo || {}).supportItemProps || !0,
                { itemSalePropList: e, id: s } = this.goodsBaseInfo,
                i = t ? e : null;
              return {
                show: !!(i || []).length,
                kdtId: this.shopBaseInfo.kdtId,
                goodsId: s,
                goodsAttributes: i,
                skuId: this.selectedId,
                price: (this.selectedSkuComb || {}).price || 0,
                activityName: (this.showEvent || {}).activityName,
                activityInfo: (this.skuData || {}).activityInfo,
              };
            },
            periodBuyOpt() {
              var t,
                { skuId: e, id: s } = this.selectedSkuComb || {};
              return {
                show: !!this.periodBuy,
                skuNum: this.skuNum,
                periodBuy: this.periodBuy,
                selectedId: e || s || 0,
                tags: null == (t = this.skuData) ? void 0 : t.tags,
              };
            },
            ecardOpt() {
              var { id: t, alias: e } = this.goodsBaseInfo,
                {
                  noneSku: s,
                  activityInfo: i,
                  price: a,
                  oldPrice: r,
                } = this.skuData || {},
                { price: o = a, oldPrice: n = r } = this.selectedSkuComb || {};
              return {
                show: !!this.ecard,
                ecard: this.ecard,
                goodsId: t,
                alias: e,
                activityInfo: i,
                noneSku: s,
                skuId: this.selectedId,
                kdtId: this.shopBaseInfo.kdtId,
                price: o,
                oldPrice: n,
                selectedSkuComb: this.selectedSkuComb,
                showInstructions: this.showVirtualTicketIntro,
              };
            },
            ladderGrouponOpt() {
              var { activityName: t } = this.showEvent || {},
                { noneSku: e } = this.skuData || {};
              return {
                show: !!this.ladderGroupOn,
                activityName: t,
                ladderGroupOn: this.ladderGroupOn,
                noneSku: e,
                skuId: this.selectedId,
                selectedSkuComb: this.selectedSkuComb,
              };
            },
            sellingPointOpt() {
              var t =
                Object(q.f)(this.shopMetaInfo) ||
                Object(q.g)(this.shopMetaInfo);
              return {
                show: this.featureSwitch.showGoodsSellingPoint && !t,
                alias: this.goodsBaseInfo.alias,
              };
            },
            couponTipsOpt() {
              var {
                  type: t,
                  skuPrices: e,
                  havingInSourcingCouponNum: s,
                } = this.currentActivity,
                i = t === W.j.INSOURCING_FISSION,
                { couponSkuPrices: a } = this.couponTips || {};
              return {
                show: (a || "").length || i,
                couponTips: this.couponTips,
                noneSku: (this.goodsSkuData.goods || {}).noneSku,
                skuId: (this.selectedSkuComb || {}).skuId || 0,
                skuNum: this.skuNum,
                currentActivity: {
                  type: t,
                  skuPrices: e,
                  havingInSourcingCouponNum: s,
                },
              };
            },
          },
          getActions: (t) => ({
            onCouponVisible(e) {
              t.data.showCouponTips = e;
            },
            onPluginsChange(t) {
              this.extraData = Q.update(t);
            },
            hideVirtualTicketIntro() {
              this.showVirtualTicketIntro = !1;
            },
            resetPlugins(t) {
              this.pluginsGoods !== t && Q.reset(), (this.pluginsGoods = t);
            },
          }),
        },
        J = s("xers"),
        X = s.n(J),
        Y = s("BmOr"),
        $ = {
          estimatePriceOpt() {
            var {
              num: t,
              estimatedPrice: e,
              showQi: s,
            } = this.estimatePriceData;
            return { show: t > 1, num: t, estimatedPrice: e, showQi: s };
          },
        },
        Z = Object(i.a)({}, W.l, {
          [W.a.TIMELIMITED_DISCOUNT]: "限时折扣",
          [W.a.CUSTOMER_DISCOUNT]: "会员价",
          [W.a.DISCOUNT_INVITE]: "会员价",
        }),
        tt = {
          state: {
            showQi: !1,
            isEqualPriceSku: !1,
            estimatePriceData: {},
            skuBannerData: {},
            userGoodsStateParams: {},
            marketing: {},
            isCoupon: !1,
          },
          getters: $,
          getActions: (t) => ({
            updateEstimateTags() {
              var { tag: t, promotionDetailList: e = [] } =
                  this.estimatePriceData,
                { priceTags: s = [] } = this.goodsSkuData.goods || {},
                i = null != t && t.text ? [t] : [];
              e.length &&
                (i = i.concat(
                  e.map(function (t) {
                    return void 0 === t && (t = {}), t.priceTitle || Z[t.type];
                  })
                )),
                (i = [...new Set(i)].filter((t) => t)),
                (i = [...s, ...i]),
                this.onPluginsChange({
                  name: "estimatePrice",
                  priority: 10,
                  view: { tags: i.length ? i : null },
                });
            },
            onEstimateUpdate(t, e) {
              var { selectedSkuComb: s = null, changeType: i } = t,
                a = {};
              if (s) {
                var { skuId: r, oldPrice: o, price: n, id: u, noneSku: c } = s;
                (a.estimatedPriceSkuId = r || u),
                  c || (a.priceWithProperties = o || n),
                  this.getEstimateData(a, e, i, n);
              }
            },
            getEstimateData(e, s, a, r) {
              Object(Y.a)(
                Object(i.a)({}, this.userGoodsStateParams, e, {
                  purchaseNum: s,
                  platformPage: "init" === a ? 1 : 2,
                }),
                r
              )
                .then((e) => {
                  var s = Object(i.a)({}, e, { changeType: a });
                  (t.data.estimatePriceData = s),
                    (this.estimatePriceData = s),
                    this.updateEstimateTags();
                })
                .catch(() => {
                  (t.data.estimatePriceData = {}),
                    (this.estimatePriceData = {});
                });
            },
            onBtnClick(e) {
              var s,
                { estimatePriceData: i } = t.data,
                { isCoupon: a } = this;
              if (!X()(i)) {
                var r = 1 === (null == (s = e.main) ? void 0 : s.length),
                  { umpTag: o = "" } = i.buttonUmpText || {},
                  n = r ? 2 : a ? 1 : 0,
                  u = o.indexOf("起") > -1;
                Object(p.a)().log({
                  et: "click",
                  ei: "click_buy",
                  en: "点击立即购买",
                  params: {
                    isshow_price: n,
                    isshow_qi: u ? 0 : 1,
                    component: "estimated_price",
                  },
                });
              }
            },
          }),
        },
        et = {
          getters: {
            couponIntroOpt() {
              var t = u()(
                  this.goodsActivity,
                  "virtualCoupon.skuExtraModels",
                  []
                ),
                e = !!t.length,
                s = null;
              return (
                e && (s = t.find((t) => t.skuId === this.selectedId)),
                { show: e && !!s, detail: s }
              );
            },
          },
        },
        st = s("w2Y9"),
        it = s.n(st);
      var at = 1,
        rt = 2,
        ot = (t, e) => Object(r.a)().dmc.navigate(t, e),
        nt = (t) => {
          var {
              data: { currentActivity: e, kdtId: s },
              customOptions: i,
            } = t,
            { ctx: a } = i,
            { activityId: r } = e;
          return r
            ? nt.isAjaxing
              ? Object(l.a)("正在砍价中")
              : ((nt.isAjaxing = !0),
                l.a.loading({ message: "正在砍价...", forbidClick: !0 }),
                void Object(h.default)({
                  method: "POST",
                  path: it.a.add("/wscump/bargain-purchase/create.json", {
                    kdtId: s,
                    activityId: r,
                  }),
                  data: { kdtId: s, activityId: r },
                  withCredentials: !0,
                })
                  .then((t) => {
                    l.a.clear(),
                      (nt.isAjaxing = !1),
                      ot("BargainPurchase", {
                        sponsorId: t.sponsorId,
                        umpActivityId: r,
                        kdtId: s,
                        isFirstCut: 1,
                      });
                  })
                  .catch((t) => {
                    if (((nt.isAjaxing = !1), 160540352 === t.code))
                      return (
                        a.event.emit("follow:show", {
                          extraData: {
                            bizCode: 1,
                            bizSubCode: 0,
                            activityKey: r,
                          },
                        }),
                        void l.a.clear()
                      );
                    a.event.emit("helpcutErr:show", {
                      errMsg: t.msg || "发起砍价失败，请重试",
                    });
                  }))
            : Object(l.a)("无法砍价，请联系商家处理");
        },
        ut = {
          [W.i.UMP_GO_2_DETAIL]: (t) => {
            var { data: e } = t,
              { alias: s } = e;
            ot("GoodsDetail", { alias: s });
          },
          [W.i.UMP_SHOW_QUESTION]: (t) => {
            var { customOptions: e, data: s } = t,
              { questionId: i } = s;
            e.ctx.event.emit("question:show", { questionId: i });
          },
          [W.i.ORDER_SECKILL]: (t) => {
            var { customOptions: e } = t,
              { currentActivity: s, kdtId: a, alias: r, query: o, ctx: n } = e,
              {
                useFollow: u = !1,
                useQuestion: c = !1,
                useDirect: d = !1,
                questionId: l = "",
                activityId: p = 0,
                followWays: m = [],
              } = s,
              g = "weapp" === w.default.getEnv(),
              k = () => {
                var t;
                ((t = { kdtId: a, seckillId: p, pushWay: g ? 2 : 1 }),
                Object(h.requestV2)({
                  path: "wscgoods/seckill-api/seckill-question-remind.json",
                  data: t,
                  method: "POST",
                  withCredentials: !0,
                }))
                  .then(() => {
                    ot("GoodsDetail", Object(i.a)({ alias: r }, o));
                  })
                  .catch((t) =>
                    Object(j.b)(t, { message: "秒杀预约失败，请稍后重试" })
                  );
              };
            d || (u && g && !m.includes(rt)) || (u && !g && !m.includes(at))
              ? k()
              : c
              ? n.event.emit("question:show", { questionId: l })
              : u && k();
          },
          [W.i.UMP_GO_2_WEBVIEW]: (t) => {
            var { data: e } = t,
              { url: s, link: i } = e;
            if (i) {
              var { pageName: a, query: r } = i;
              ot(a, r);
            } else ot(s);
          },
          [W.i.START_CUT]: nt,
          [W.i.UMP_SHOW_SHARE]: (t) => {
            var { customOptions: e } = t;
            e.ctx.event.emit("share:show");
          },
          [W.i.SHOW_IN_SOURCING_FISSION_COUPON]: (t) => {
            var { customOptions: e } = t;
            e.ctx.event.emit("inSourcingFissionCoupon:show");
          },
          [W.i.PRODUCT_LAUNCH_RESERVATION]: (t) => {
            var { customOptions: e, data: s } = t,
              { ctx: a, goodsId: r } = e;
            a.event.emit(
              "subscribe:show",
              Object(i.a)({}, s, {
                btnActive: c.a.WX_SUBSCRIBE,
                subscribeSceneV2: c.e.SALE_REMINDER,
                itemId: r,
              })
            );
          },
        };
      var ct = s("X9+V"),
        dt = [
          C,
          P,
          H,
          {
            state: { currentActivity: {}, umpActivity: {}, query: {} },
            getActions: function (t) {
              return {
                resolveUmpCustomEvent(e) {
                  !(function (t) {
                    var { type: e, data: s, customOptions: i } = t,
                      a = ut[e];
                    a && a({ type: e, data: s, customOptions: i });
                  })(
                    Object(i.a)({}, e, {
                      customOptions: {
                        ctx: t,
                        alias: this.goodsBaseInfo.alias,
                        currentActivity: this.currentActivity,
                        query: this.query,
                        kdtId: this.shopBaseInfo.kdtId,
                        goodsId: this.goodsBaseInfo.id,
                      },
                    })
                  );
                },
                umpTradeFinish() {
                  var { type: e } = this.query;
                  "gift" === e && t.dmc.navigate("GiftWeapp");
                },
                setUmpTradeData(e) {
                  try {
                    var { activityType: s = 0 } = e,
                      i = 99999 === s;
                    return Object(d.b)(e, {
                      isCoupon: Object(ct.b)({ umpActivity: this.umpActivity }),
                      umpActivity: this.umpActivity,
                      skuShowData: { skuScene: this.skuScene },
                      isGroupOn: this.currentActivity.type === W.a.GROUP_ON,
                      query: this.query,
                      isGift: i,
                      goodsEstimatePriceData: this.goodsEstimatePriceData || {},
                    });
                  } catch (e) {
                    throw (
                      ((e.message = ((t, e, s) =>
                        "goods-detail_ump_trade-submit: " +
                        t +
                        ", " +
                        e +
                        ", " +
                        s.toString())(
                        "处理跳转下单页数据异常",
                        "tradePostData",
                        e.message
                      )),
                      t.hummer && t.hummer.capture(e),
                      e)
                    );
                  }
                },
                updateQuery(t) {
                  this.query = t;
                },
              };
            },
          },
          z,
          tt,
          et,
        ].reduce((t, e) => Object(o.c)(t, e), {});
      var ht = {
        data() {
          var t;
          this.store =
            ((t = this.ctx),
            Object(a.a)({
              state: () => Object(i.a)({}, dt.state),
              getters: Object(i.a)({}, dt.getters),
              actions: Object(i.a)({}, dt.getActions(t)),
            }));
          var e = [
            "goodsBaseInfo",
            "kdtId",
            "themeVars",
            "multiSkuDecision",
            "pointsConfig",
            "skuConfig",
            "explainVideoFullScreen",
            "hasOpenExplainVideo",
            "themeTag",
            "pageVars",
            "themeType",
          ];
          return (
            Object(a.c)(this, [
              "shopBaseInfo",
              "buyConfig",
              "goodsPriceInfo",
              "goodsSkuData",
              "goodsMetaInfo",
              "goodsCombineInfo",
              "currentActivity",
              "umpActivity",
              "featureSwitch",
              "shopMetaInfo",
              "goodsActivity",
              "periodBuy",
              "couponTips",
              "ladderGroupOn",
              "ecard",
              "userGoodsStateParams",
              "marketing",
              "isCoupon",
              ...e,
            ]),
            Object(i.a)(
              { needIsSleep: !1, themeColors: {} },
              Object(a.d)(this, [
                "showSelfSelectedCombo",
                "showSku",
                "skuGoods",
                "skuData",
                "showEvent",
                "goodsAttributesOpt",
                "periodBuyOpt",
                "ecardOpt",
                "ladderGrouponOpt",
                "sellingPointOpt",
                "couponTipsOpt",
                "estimatePriceOpt",
                "couponIntroOpt",
                "extraData",
                ...e,
              ]),
              { initialSku: {} }
            )
          );
        },
        computed: {
          showSkuHeader() {
            var { replacedSlots: t } = this.ctx.data.cloudDesignConfig || {};
            return !!(t || []).includes("goods-detail-sku-header");
          },
          zIndex() {
            return this.explainVideoFullScreen ? 10004 : 100;
          },
          popCustomStyle() {
            return this.themeVars + this.pageVars || "";
          },
        },
        watch: {
          sellingPointOpt: {
            handler(t) {
              this.ctx.data.sellingPointOpt = t;
            },
            immediate: !0,
          },
          skuData: {
            handler(t) {
              var { initSkuId: e } = this.ctx.env.getQuery();
              if (e && t) {
                var s = t.list;
                if (s && s.length) {
                  var a = (s || []).find((t) => t.skuId === +e);
                  a &&
                    (this.initialSku = Object(i.a)({}, a, { selectedNum: 1 }));
                }
              }
            },
          },
          skuGoods: {
            handler(t) {
              (this.ctx.data.goods = t),
                this.store.resetPlugins(null == t ? void 0 : t.alias);
            },
            immediate: !0,
          },
        },
        created() {
          Object(a.b)(this, [
            "onHideSku",
            "onSkuSubmit",
            "onSkuOpened",
            "onPreview",
            "onSkuSelected",
            "skuSelected",
            "showNearSku",
            "doSkuSubmit",
            "onPluginsChange",
            "onNumChange",
            "onCouponVisible",
            "customLogger",
          ]),
            this.store.updateQuery(this.$getPageQuery()),
            this.init();
        },
        mounted() {
          this.$nextTick(() => {
            this.store.setTradePrefetchRef(this.$refs.goodsSku);
          });
        },
        destroyed() {
          var { store: t } = this;
          t && (clearTimeout(t.tradePrefetchTimer), t.offOrderKeepHandler());
        },
        methods: {
          assignCtxData(t) {
            return (e) => {
              var s = t.call(this, e);
              s && Object.assign(this.ctx.data, s);
            };
          },
          init() {
            var {
              saveBigButtons: t,
              getUserStateSkuDirectOrder: e,
              submitAction: s,
              saveGuaranteeData: i,
              onBtnClick: a,
              hideVirtualTicketIntro: o,
              getEstimateData: n,
              startTradeSubmit: u,
              bindOrderKeepHandler: d,
            } = this.store;
            Object(r.b)(this, {
              shopConfig: this.assignCtxData(f),
              goodsActivity: this.assignCtxData(O),
              payWays: this.assignCtxData(y),
              currentActivity: this.assignCtxData(I),
              umpActivity: this.assignCtxData(D),
              bigButtons: t,
              themeColors: (t) => {
                (this.themeColors = t), t && Object.assign(this.ctx.data, t);
              },
            }),
              Object(r.d)(this, {
                "skuOrder:selected": this.onSkuSelected,
                "sku:preview-click": this.onPreview,
                showNearSku: this.showNearSku,
                "sku:show": e,
                "submit:act": s,
                "skuSubmit:act": this.doSkuSubmit,
                guaranteeSetupReady: i,
                "big-btn:click": a,
                "sku:hide": this.onHideSku,
                hideVirtualTicketIntro: o,
              }),
              Object(r.c)(
                this,
                ["userGoodsStateParams", "marketing", "isCoupon"],
                {
                  callback: () => {
                    n({}, null, "init", this.store.goodsPriceInfo.minPrice);
                  },
                }
              ),
              Object(r.e)(this, {
                addCart: (t) => {
                  u({
                    skuScene: c.c.ADD_CART,
                    skuData: t,
                    pluginsResult: {},
                    activityInfo: {},
                    extraParams: {},
                  });
                },
              }),
              (this.ctx.data.displayData = {}),
              (this.ctx.data.orderData = {}),
              d();
          },
        },
      };
      e.default = w.default.component(ht);
    },
    "Hpq+": function (t, e, s) {
      var i = s("Fcif"),
        a = s("xers"),
        r = s.n(a);
      e.a = class {
        constructor() {
          (this.plugins = {}), (this.priority = 0);
        }
        get sortedPlugins() {
          return Object.values(this.plugins).sort(
            (t, e) => t.priority - e.priority
          );
        }
        reset() {
          this.plugins = {};
        }
        update(t) {
          var { name: e, pluginsResult: s = {} } = t,
            a = this.plugins[e],
            o =
              JSON.stringify(s) ===
              JSON.stringify((null == a ? void 0 : a.pluginsResult) || {}),
            n = !r()(t.pluginsResult || {}) && !o,
            u =
              !r()((null == a ? void 0 : a.view) || {}) ||
              !r()((null == t ? void 0 : t.view) || {});
          return (
            (this.plugins[e] = t),
            Object(i.a)({}, this.getData(), {
              pluginsResultUpdate: n,
              viewUpdate: u,
            })
          );
        }
        getData() {
          return this.sortedPlugins.reduce(
            (t, e) => {
              var {
                view: s = {},
                pluginsResult: a = {},
                invalidMessage: r = {},
              } = e;
              return {
                view: Object(i.a)({}, t.view, s),
                pluginsResult: Object(i.a)({}, t.pluginsResult, a),
                invalidMessage: Object(i.a)({}, t.invalidMessage, r),
              };
            },
            { view: {}, pluginsResult: {}, invalidMessage: {} }
          );
        }
      };
    },
  })
);
