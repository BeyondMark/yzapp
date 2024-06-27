"use strict";
var r = require("~/r");
r(
  "uKxB",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      "0lBy": function (e, o, t) {
        var s =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, o, t, s) {
                  void 0 === s && (s = t),
                    Object.defineProperty(e, s, {
                      enumerable: !0,
                      get: function () {
                        return o[t];
                      },
                    });
                }
              : function (e, o, t, s) {
                  void 0 === s && (s = t), (e[s] = o[t]);
                }),
          n =
            (this && this.__exportStar) ||
            function (e, o) {
              for (var t in e)
                "default" === t ||
                  Object.prototype.hasOwnProperty.call(o, t) ||
                  s(o, e, t);
            };
        (o.__esModule = !0), n(t("4wEQ"), o), n(t("m8h5"), o), n(t("2bBs"), o);
      },
      "2bBs": function (e, o, t) {
        o.__esModule = !0;
      },
      "4wEQ": function (e, o, t) {
        o.__esModule = !0;
      },
      C5Gi: function (e, o, t) {
        var s =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, o, t, s) {
                  void 0 === s && (s = t),
                    Object.defineProperty(e, s, {
                      enumerable: !0,
                      get: function () {
                        return o[t];
                      },
                    });
                }
              : function (e, o, t, s) {
                  void 0 === s && (s = t), (e[s] = o[t]);
                }),
          n =
            (this && this.__exportStar) ||
            function (e, o) {
              for (var t in e)
                "default" === t ||
                  Object.prototype.hasOwnProperty.call(o, t) ||
                  s(o, e, t);
            };
        (o.__esModule = !0), n(t("wH4f"), o), n(t("skK2"), o);
      },
      E2EE: function (e, o, t) {
        var s =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, o, t, s) {
                  void 0 === s && (s = t),
                    Object.defineProperty(e, s, {
                      enumerable: !0,
                      get: function () {
                        return o[t];
                      },
                    });
                }
              : function (e, o, t, s) {
                  void 0 === s && (s = t), (e[s] = o[t]);
                }),
          n =
            (this && this.__exportStar) ||
            function (e, o) {
              for (var t in e)
                "default" === t ||
                  Object.prototype.hasOwnProperty.call(o, t) ||
                  s(o, e, t);
            };
        (o.__esModule = !0), n(t("FdfI"), o), n(t("C5Gi"), o);
      },
      FdfI: function (e, o, t) {
        var s =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, o, t, s) {
                  void 0 === s && (s = t),
                    Object.defineProperty(e, s, {
                      enumerable: !0,
                      get: function () {
                        return o[t];
                      },
                    });
                }
              : function (e, o, t, s) {
                  void 0 === s && (s = t), (e[s] = o[t]);
                }),
          n =
            (this && this.__exportStar) ||
            function (e, o) {
              for (var t in e)
                "default" === t ||
                  Object.prototype.hasOwnProperty.call(o, t) ||
                  s(o, e, t);
            };
        (o.__esModule = !0), n(t("0lBy"), o), n(t("qt7L"), o), n(t("kUIa"), o);
      },
      kUIa: function (e, o, t) {
        o.__esModule = !0;
      },
      m8h5: function (e, o, t) {
        o.__esModule = !0;
      },
      qt7L: function (e, o, t) {
        o.__esModule = !0;
      },
      skK2: function (e, o, t) {
        (o.__esModule = !0),
          (o.CashBackTypeId = o.CashBackType = void 0),
          (function (e) {
            e[(e.Store = 2)] = "Store";
          })(o.CashBackType || (o.CashBackType = {})),
          (function (e) {
            (e[(e.Tuan = 2)] = "Tuan"), (e[(e.CashBack = 203)] = "CashBack");
          })(o.CashBackTypeId || (o.CashBackTypeId = {}));
      },
      uKxB: function (e, o, t) {
        t.r(o);
        var s = t("Fcif"),
          n = t("eijD"),
          i = t("ONqW"),
          a = t("DzvT"),
          c = t("E2EE"),
          r = t("6aEl"),
          d = t("3tyi"),
          l = t("ing0"),
          u = t("q+p/"),
          p = t("Ix7h"),
          h = t("AGZf"),
          v = t("lgMb"),
          C = t("GFyo"),
          y = t("Sipi");
        var m = { isInGray: !0, calcDowngrade: !1 },
          f = 24,
          g = {
            data: () => ({
              bookKey: "",
              calcByBackendThrottle: "",
              fetchPromotionJSON: "",
            }),
            created() {
              (this.ctx.data.couponModel = {
                chosenId: -1,
                chosenCoupon: {},
                availableCoupons: [],
                unavailableCoupons: [],
              }),
                (this.ctx.data.order = { newCouponProcess: !1, seller: {} }),
                (this.ctx.data.goods = { list: [] }),
                (this.ctx.data.display = { plusBuyComponent: {} }),
                (this.ctx.data.plusBuy = {
                  exchangeGoodsList: [],
                  selected: [],
                }),
                (this.ctx.data.postageModel = {
                  appType: 0,
                  lackValue: 0,
                  meet: !0,
                  meetType: 0,
                  orderItemIds: 0,
                  promotionId: 0,
                  meetText: "",
                  meetInfo: {},
                  originLackValue: 0,
                  config: null,
                }),
                (this.ctx.data.rewardModel = []),
                (this.ctx.data.grouponModel = l.a),
                (this.ctx.data.orderedChosenCoupons = []),
                (this.ctx.data.isInitCoupon = !0),
                (this.ctx.data.pay = {}),
                this.ctx.watch("prepareData", (e) => {
                  var o, t, s, n, i, a, c;
                  (this.bookKey =
                    null == e ||
                    null == (o = e.orderCreation) ||
                    null == (t = o.source)
                      ? void 0
                      : t.bookKey),
                    (this.ctx.data.isInitCoupon =
                      null == (s = null == e ? void 0 : e.isInitCoupon) || s),
                    (this.ctx.data.pay =
                      null == e || null == (n = e.tradeConfirmation)
                        ? void 0
                        : n.orderPayment),
                    (this.ctx.data.order = {
                      newCouponProcess:
                        null ==
                          (i =
                            null == e || null == (a = e.orderCreation)
                              ? void 0
                              : a.newCouponProcess) || i,
                      seller:
                        null == e || null == (c = e.orderCreation)
                          ? void 0
                          : c.seller,
                    }),
                    this.clearStorage(),
                    this.setCouponModel(e),
                    this.setRewardModel(e),
                    this.initPostageModel(e),
                    Object(l.c)(this.ctx, e);
                }),
                this.ctx.watch("confirmData", (e) => {
                  var o;
                  (this.ctx.data.isInitCoupon =
                    null == (o = e.isInitCoupon) || o),
                    (this.ctx.data.pay = e.tradeConfirmation.orderPayment),
                    this.setCouponModel(e),
                    this.setRewardModel(e),
                    this.initPostageModel(e),
                    Object(l.c)(this.ctx, e);
                }),
                this.ctx.watch("expressType", (e) => {
                  Object(l.b)(this.ctx, e);
                }),
                this.ctx.watch("state", (e) => {
                  var o, t, s, n, a, c, r, d;
                  (this.ctx.data.order = {
                    newCouponProcess:
                      null ==
                        (o =
                          null == e || null == (t = e.order)
                            ? void 0
                            : t.newCouponProcess) || o,
                    seller:
                      null == e || null == (s = e.order) ? void 0 : s.seller,
                  }),
                    (this.ctx.data.isInitCoupon =
                      null == (n = e.isInitCoupon) || n),
                    (this.ctx.data.pay = null == e ? void 0 : e.pay),
                    (this.ctx.data.plusBuy = null == e ? void 0 : e.plusBuy),
                    (this.ctx.data.goods = {
                      list:
                        (null == e || null == (a = e.goods)
                          ? void 0
                          : a.list) || [],
                    }),
                    (this.ctx.data.display = {
                      plusBuyComponent:
                        (null == e || null == (c = e.display)
                          ? void 0
                          : c.plusBuyComponent) || {},
                    });
                  var l = (
                      (null == e || null == (r = e.goods) ? void 0 : r.list) ||
                      []
                    ).map((e) => {
                      var {
                        activityId: o = 0,
                        activityAlias: t = "",
                        activityType: s = 0,
                      } = e;
                      return {
                        activity_id: o,
                        activity_alias: t,
                        activity_type: s,
                      };
                    }),
                    u = (
                      (null == e || null == (d = e.pay)
                        ? void 0
                        : d.orderPromotions) || []
                    ).map((e) => {
                      var {
                        decrease: o = 0,
                        promotionType: t = "",
                        promotionTypeName: s = "",
                      } = e;
                      return {
                        decrease: o,
                        promotion_type: t,
                        promotion_type_name: s,
                      };
                    });
                  Object(i.a)().log({
                    et: "view",
                    ei: "trade_buy_activity_view",
                    en: "下单商品活动曝光",
                    params: { ump_params: l, promotions: u },
                  }),
                    (this.ctx.data.isInCouponOverWhitelist =
                      e.isInCouponOverWhitelist);
                }),
                this.ctx.watch("couponModel", (e) => {
                  Object(i.a)().log({
                    et: "view",
                    ei: "trade_buy_coupon_view",
                    en: "下单优惠券曝光",
                    params: { coupon_id: e.chosenId },
                  });
                }),
                this.ctx.process.define(
                  "setCouponChosenIdProcess",
                  this.setCouponChosenIdProcess
                ),
                this.ctx.process.define(
                  "addCouponProcess",
                  this.addCouponProcess
                ),
                this.ctx.process.define(
                  "handleExternalCoupon",
                  this.handleExternalCoupon.bind(this)
                ),
                this.ctx.process.define(
                  "exchangeCouponPromise",
                  this.exchangeCouponPromise
                ),
                this.ctx.process.define(
                  "switchPlusBuyGoodsProcess",
                  this.switchPlusBuyGoodsProcess
                ),
                this.ctx.process.define("fetchSkuData", a.a.fetchSkuData),
                this.ctx.process.define("switchGoods", this.switchGoods),
                this.ctx.process.define("addAllGoods", this.addAllGoods),
                this.ctx.process.define(
                  "calcPostage",
                  this.calcPostageMeetInfo
                ),
                this.ctx.process.define(
                  "resetPostageTool",
                  this.resetPostageTool
                ),
                this.ctx.process.define(
                  "savePostageTool",
                  this.savePostageTool
                ),
                this.ctx.process.define(
                  "fetchUmpPlusBuyProcess",
                  this.fetchUmpPlusBuyProcess
                ),
                this.ctx.event.listen("setGrouponIsChecked", (e) => {
                  Object(l.d)(this.ctx, e);
                }),
                this.ctx.process.define(
                  "getAddsOnePageDetail",
                  a.a.getAddsOnePageDetail
                ),
                (this.calcByBackendThrottle = Object(p.a)(
                  this.calcByBackend,
                  1e3
                )),
                this.ctx.watch("dataLoaded", (e) => {
                  e && this.fetchUmpPlusBuyProcess();
                });
            },
            methods: {
              clearStorage() {
                Object(C.e)("CURRENT_CHOSEN_COUPON_FOR_OLD_COUPON_PROCESS");
              },
              switchPlusBuyGoodsProcess(e) {
                this.ctx.process.invoke("mutateState", (o) => {
                  var { selected: t = [] } = o.plusBuy,
                    { supportMulti: s } = o.plusBuy,
                    n = t.findIndex((o) => +e.goodsId == +o.goodsId);
                  n < 0 ? (s || (t = []), t.push(e)) : t.splice(n, 1),
                    (o.plusBuy.selected = t);
                });
              },
              switchPlusBuyAllGoods(e) {
                this.ctx.process.invoke("mutateState", (o) => {
                  var { selected: t = [] } = o.plusBuy;
                  (t = e), (o.plusBuy.selected = t);
                });
              },
              fetchUmpPlusBuyProcess() {
                var e = this;
                return Object(n.a)(function* () {
                  var o,
                    t,
                    { state: n, expressType: i } = e.ctx.data;
                  if (
                    null != n &&
                    null != (o = n.display) &&
                    null != (t = o.plusBuyComponent) &&
                    t.showPlusBuyComponent
                  ) {
                    var c = "self-fetch" === i;
                    a.a.fetchPlusBuy(n, c).then((o) => {
                      var t,
                        i = (o.exchangeGoodsList || []).filter((e) => {
                          var o, t;
                          return !(
                            null != n &&
                            null != (o = n.goods) &&
                            null != (t = o.unavailable) &&
                            t.some((o) => +o.goodsId == +e.goodsId)
                          );
                        }),
                        a = (
                          (null == n || null == (t = n.plusBuy)
                            ? void 0
                            : t.selected) || []
                        ).filter((e) =>
                          i.some(
                            (o) =>
                              o.goodsId === e.goodsId &&
                              (o.exchangeSkuList || []).some(
                                (o) => o.skuId === e.skuId
                              )
                          )
                        );
                      e.ctx.process.invoke("mutateState", (e) => {
                        e.plusBuy = Object(s.a)({}, o, {
                          exchangeGoodsList: i,
                          selected: a,
                        });
                      });
                    });
                  }
                })();
              },
              switchGoods(e) {
                this.switchPlusBuyGoodsProcess(e);
                var [o] = this.ctx.process.invoke("fetchShow");
                o.then(
                  this.ctx.process.invokePipe("fetchShow", { scene: "plusBuy" })
                ).catch(() => {
                  this.switchPlusBuyGoodsProcess(e);
                });
              },
              addAllGoods(e) {
                this.switchPlusBuyAllGoods(e);
                var [o] = this.ctx.process.invoke("fetchShow");
                return o
                  .then(
                    this.ctx.process.invokePipe("fetchShow", {
                      scene: "plusBuy",
                    })
                  )
                  .catch(() => (this.switchPlusBuyAllGoods([]), !1));
              },
              handleExternalCoupon() {
                var e,
                  o,
                  t,
                  n,
                  i,
                  a =
                    null == (e = this.ctx) || null == (o = e.data)
                      ? void 0
                      : o.points,
                  c =
                    null == (t = this.ctx) ||
                    null == (n = t.data) ||
                    null == (i = n.couponModel)
                      ? void 0
                      : i.chosenCoupon,
                  { bookKey: d } = this;
                return 1 === c.outer || (a.externalPoint && a.totalPoints)
                  ? Object(r.b)({ bookKey: d, chosenCoupon: c, points: a })
                      .then((e) => {
                        var { coupon: o, point: t } = e,
                          n = {
                            couponId:
                              (null == o ? void 0 : o.internalCouponId) || "",
                            pointId:
                              (null == t ? void 0 : t.externalPointId) || "",
                          };
                        this.ctx.data.couponModel = Object(s.a)(
                          {},
                          this.ctx.data.couponModel,
                          { externalId: n.couponId }
                        );
                      })
                      .catch(() => Promise.resolve())
                  : Promise.resolve(!0);
              },
              processPostageModel(e) {
                var {
                    lackValue: o = 0,
                    meetType: t,
                    meet: n,
                    originLackValue: i,
                  } = e,
                  a = Object(u.b)(o, t, i),
                  { value: c, label: r } = a;
                this.ctx.data.postageModel = Object(s.a)({}, e, {
                  meetInfo: a,
                  meetText: n ? "已包邮" : "再买" + c + r + "包邮",
                });
              },
              getPostageConfig(e) {
                var o = Object(s.a)({}, m, { fail: !0 }),
                  { displayConfig: t = {} } = e,
                  { postageModel: n } = this.ctx.data,
                  { config: i } = n,
                  { promotionThresholds: c } = t;
                return i && !i.fail
                  ? Promise.resolve(i)
                  : c
                  ? a.a.getPostageConfigList().catch(() => o)
                  : Promise.resolve(o);
              },
              initPostageModel(e) {
                var { displayConfig: o = {} } = e,
                  { promotionThresholds: t = [] } = o,
                  n = (null == t ? void 0 : t[0]) || {
                    lackValue: 0,
                    meet: !0,
                    meetType: 1,
                  };
                this.getPostageConfig(e).then((e) => {
                  this.processPostageModel(
                    Object(s.a)({ config: e }, n, {
                      originLackValue: n.lackValue,
                    })
                  );
                });
              },
              calcByFrontend(e) {
                var o = Object(u.a)(e, this.ctx.data.postageModel);
                this.processPostageModel(o),
                  this.ctx.process.invoke("mutateState", (o) => {
                    o.postageTool.selected = e;
                  });
              },
              resetPostageTool() {
                this.ctx.process.invoke("mutateState", (e) => {
                  e.postageTool.selected = {};
                });
              },
              savePostageTool(e) {
                this.ctx.process.invoke("mutateState", (o) => {
                  var { order: t, postageTool: s } = o,
                    n = t.items || [],
                    i = Object.keys(s.selected);
                  for (var c of n) {
                    var r = s.selected[c.skuId];
                    if (
                      r &&
                      JSON.stringify(r.propertyIds || []) ===
                        JSON.stringify(c.propertyIds || []) &&
                      !c.present &&
                      c.activityType !== f
                    ) {
                      (c.num += r.num),
                        r.itemMessage && (c.itemMessage = r.itemMessage);
                      var d = i.indexOf(c.skuId);
                      i.splice(d, 1);
                    }
                  }
                  i.length > 0
                    ? a.a
                        .queryOrderPreparation({ bookKey: this.bookKey })
                        .then((e) => e.cacheItems)
                        .catch(() => [])
                        .then((t) => {
                          i.forEach((e) => {
                            var o = s.selected[e],
                              i = t.find((o) => {
                                var { skuId: t } = o;
                                return Number(t) === Number(e);
                              });
                            i && (o.extensions = i.extensions), n.push(o);
                          }),
                            (o.postageTool.selected = {}),
                            e();
                        })
                    : ((o.postageTool.selected = {}), e());
                });
              },
              calcByBackend(e) {
                var [o] = this.ctx.process.invoke("fetchPromotion", {
                    skus: e,
                  }),
                  t = Object.keys(e);
                o.then((o) => {
                  if (this.fetchPromotionJSON === JSON.stringify(e)) {
                    var { displayConfig: n = {}, tradeConfirmation: i } = o,
                      { orderItems: a, unavailableItems: c } = i,
                      { promotionThresholds: r = [] } = n,
                      d = (null == r ? void 0 : r[0]) || {
                        lackValue: 0,
                        meet: !0,
                      },
                      l = a.map((o) => ({
                        quota: o.quotaNum,
                        price: o.payPrice,
                        quotaUsed: o.buyedNum,
                        stockNum: o.stockNum,
                        goodsId: o.goodsId,
                        skuId: o.skuId,
                        postageToolNum: e[o.skuId] ? e[o.skuId].num : 0,
                      }));
                    if (
                      (this.ctx.event.emit("postagetool:limitInfo", l),
                      c && c.length > 0)
                    ) {
                      var u = c.filter((e) => t.indexOf("" + e.skuId) > -1);
                      this.ctx.event.emit("postagetool:unavailableItem", u);
                    }
                    this.processPostageModel(
                      Object(s.a)({}, this.ctx.data.postageModel, d)
                    );
                  }
                }).catch((e) => {
                  Object(v.b)(e, {
                    message: e.msg || "订单信息更新失败，请刷新重试",
                  }),
                    this.ctx.event.emit(
                      "postagetool:unavailableItem",
                      t.map((e) => ({ skuId: e }))
                    );
                });
              },
              calcPostageMeetInfo(e) {
                var { skus: o, isBackend: t = !0 } = e;
                (this.fetchPromotionJSON = JSON.stringify(o)),
                  this.calcByFrontend(o),
                  t && this.calcByBackendThrottle(o);
              },
              setCouponModel(e) {
                var o = this;
                return Object(n.a)(function* () {
                  var t,
                    { tradeConfirmation: n } = e,
                    i = (null == n ? void 0 : n.coupons) || [],
                    a = (null == n ? void 0 : n.deliveryCoupons) || [],
                    c = (null == n ? void 0 : n.unavailableCoupons) || [],
                    d =
                      (null == n ? void 0 : n.unavailableDeliveryCoupons) || [],
                    l = (null == n ? void 0 : n.isCouponOverlyingOptimal) || !1,
                    { bookKey: u } = o,
                    p = [...i],
                    { recommendedCoupons: h, lastActivities: v } =
                      o.ctx.data.couponModel,
                    C = p.filter((e) => e.choose),
                    m = C[0] || {};
                  if (o.ctx.data.order.newCouponProcess)
                    t = null == m ? void 0 : m.id;
                  else {
                    t = o.getOldCouponChosenId(p);
                    var f =
                      Object(y.b)(
                        "CURRENT_CHOSEN_COUPON_FOR_OLD_COUPON_PROCESS"
                      ) || {};
                    t = (null == f ? void 0 : f.chosenId) || t;
                  }
                  if (
                    ((o.ctx.data.couponModel = {
                      chosenId: t || 0,
                      unavailableCoupons: c,
                      availableCoupons: p,
                      availableDeliveryCoupons: a,
                      unavailableDeliveryCoupons: d,
                      chosenCoupon: o.findCouponById(t, p),
                      lastActivities: v,
                    }),
                    e.displayConfig.useExternalAsset)
                  ) {
                    var g = yield Object(r.a)(u),
                      { coupon: x } = g,
                      O = [],
                      b = [];
                    x &&
                      x.length &&
                      x.forEach((e) => {
                        (e.outer = 1),
                          (e.startAt /= 1e3),
                          (e.endAt /= 1e3),
                          (e.available ? O : b).push(e);
                      }),
                      (o.ctx.data.couponModel = {
                        chosenId: t,
                        unavailableCoupons: [...c, ...b],
                        availableCoupons: [...p, ...O],
                        chosenCoupon: m,
                        lastActivities: v,
                      });
                  }
                  if (p.some((e) => e.canOverlying)) {
                    var P = C.map((e) => e.id),
                      I = h || [...C],
                      k = o.getCouponRecommendStatus({
                        isCouponOverlyingOptimal: l,
                        oldRecommendedCoupons: h,
                        recommendedCoupons: I,
                        chosenCoupons: C,
                      });
                    (o.ctx.data.couponModel = Object(s.a)(
                      {},
                      o.ctx.data.couponModel,
                      {
                        chosenCoupons: C,
                        chosenIds: P,
                        recommendedCoupons: I,
                        isRecommendedCoupons: k,
                      }
                    )),
                      o.initOrderedChosenCouponList(C);
                  }
                  o.separateChosedCoupon(), o.judgeCouponExclusion(e);
                })();
              },
              separateChosedCoupon() {
                var { availableDeliveryCoupons: e } = this.ctx.data.couponModel,
                  o = e.filter((e) => e.choose);
                this.ctx.data.couponModel = Object(s.a)(
                  {},
                  this.ctx.data.couponModel,
                  { chosenDeliveryCoupons: o, chosenDeliveryCoupon: o[0] || {} }
                );
              },
              setDeliveryCouponChosenIdProcess(e, o) {
                if (-1 === e) return (o.chosenDeliveryCoupons = []);
                var { availableDeliveryCoupons: t, chosenDeliveryCoupons: s } =
                    o,
                  n = this.findCouponById(e, t),
                  i = s.findIndex((o) => o.id === e);
                n && i > -1
                  ? (o.chosenDeliveryCoupons = [])
                  : ((o.chosenDeliveryCoupon = [n]),
                    (o.chosenDeliveryCoupons = [n]));
              },
              setCouponChosenIdProcess(e, o) {
                var t,
                  { couponModel: n, order: i } = this.ctx.data;
                if (
                  (e ||
                    ((t = () => Object(h.a)("已选择最佳优惠")),
                    (n.chosenCoupons = n.recommendedCoupons.filter((e) => {
                      var { groupType: o } = e;
                      return 16 !== o;
                    }))),
                  16 === o)
                )
                  return (
                    e
                      ? this.setDeliveryCouponChosenIdProcess(e, n)
                      : (n.chosenDeliveryCoupons = n.recommendedCoupons.filter(
                          (e) => {
                            var { groupType: o } = e;
                            return 16 === o;
                          }
                        )),
                    this.ctx.event.emit("onCouponChange", t)
                  );
                var a = this.findCouponById(e, n.availableCoupons),
                  c = Object(s.a)({}, n, { chosenId: e, chosenCoupon: a });
                if (!i.newCouponProcess)
                  return (
                    (this.ctx.data.isInitCoupon = !1),
                    (this.ctx.data.couponModel = c),
                    this.ctx.event.emit("onCouponChange"),
                    void Object(C.g)(
                      "CURRENT_CHOSEN_COUPON_FOR_OLD_COUPON_PROCESS",
                      c
                    )
                  );
                if (n.chosenCoupons) {
                  var r,
                    d,
                    l,
                    { chosenCoupons: u = [] } = n,
                    p = u.findIndex((o) => o.id === e);
                  if (e && p < 0) {
                    if (-1 === e)
                      (u = []), this.initOrderedChosenCouponList(u, !1);
                    else {
                      var v = u.some((e) => e.canOverlying),
                        y = a.canOverlying;
                      (u = v && y ? u.concat(a) : [a]),
                        this.updateOrderChosenCouponList(a, !v || !y);
                    }
                  } else
                    e
                      ? (u.splice(p, 1), this.removeOrderChosenCouponList(e))
                      : ((u = n.recommendedCoupons.filter((e) => {
                          var { groupType: o } = e;
                          return 16 !== o;
                        })),
                        this.initOrderedChosenCouponList(
                          n.recommendedCoupons,
                          !1
                        )),
                      (l = u[u.length - 1]),
                      Object.assign(c, {
                        chosenCoupon: l || {},
                        chosenId: null == (d = l) ? void 0 : d.id,
                      });
                  var m = null == (r = u) ? void 0 : r.map((e) => e.id);
                  Object.assign(c, { chosenCoupons: u, chosenIds: m });
                }
                (this.ctx.data.couponModel = c),
                  this.ctx.event.emit("onCouponChange", t);
              },
              addCouponProcess(e) {
                var { availableCoupons: o } = this.ctx.data.couponModel;
                o.push(e),
                  (this.ctx.data.couponModel = Object(s.a)(
                    {},
                    this.ctx.data.couponModel,
                    { availableCoupons: [...o] }
                  )),
                  this.ctx.event.emit("onCouponChange");
              },
              exchangeCouponPromise(e) {
                var o,
                  t,
                  { state: n } = this.ctx.data,
                  i = {
                    goods: n.goods.list.map((e, o) => {
                      var t,
                        i,
                        a,
                        c = Object(s.a)(
                          {},
                          Object(d.a)(e, [
                            "skuId",
                            "goodsId",
                            "goodsType",
                            "price",
                            "payPrice",
                            "num",
                            "groupIds",
                            "itemBizMarkCode",
                          ]),
                          Object(d.a)(
                            null !=
                              (t =
                                null == (i = n.order.ump) ||
                                null == (a = i.activities)
                                  ? void 0
                                  : a[o])
                              ? t
                              : {},
                            ["activityId", "activityType", "activityAlias"]
                          )
                        );
                      return (
                        Array.isArray(e.deliverOptions) &&
                          e.deliverOptions.length &&
                          ((c.deliverTime = e.deliverTimes),
                          (c.periodNum = e.deliverOptions.length)),
                        c
                      );
                    }),
                    seller: n.order.seller,
                    postage: n.pay.postage,
                    userCouponCode: e.replace(/\s/g, ""),
                    extendScene: {
                      LADDER_NUM: (null !=
                      (o = null == (t = n.order.config) ? void 0 : t.ladderNum)
                        ? o
                        : 0
                      ).toString(),
                    },
                  };
                return a.a.exchangeCoupon(i);
              },
              findCouponById: (e, o) =>
                (null == o ? void 0 : o.find((o) => o.id === e)) || {},
              setRewardModel(e) {
                var { tradeConfirmation: o } = e,
                  t = null == o ? void 0 : o.umpSendPromotionInfo,
                  {
                    coupons: n = [],
                    couponsCode: i = [],
                    score: a = 0,
                  } = t || {},
                  r = [];
                n.length &&
                  r.push({
                    title: "送优惠券",
                    desc: n.map(
                      (e) =>
                        e.couponText ||
                        "送" +
                          e.num +
                          "张" +
                          e.condition +
                          (e.discount > 0 ? "打" : "减") +
                          e.valueDesc +
                          e.unitDesc +
                          "优惠券"
                    ),
                  }),
                  a > 0 &&
                    r.push({ title: "送积分", desc: ["送" + a + "积分"] }),
                  i.length &&
                    r.push({
                      title: "送优惠码",
                      desc: i.map(
                        (e) =>
                          e.couponText ||
                          "送" +
                            e.num +
                            "个" +
                            e.condition +
                            (e.discount > 0 ? "打" : "减") +
                            e.valueDesc +
                            e.unitDesc +
                            "优惠码"
                      ),
                    });
                var d = (null == o ? void 0 : o.cashBackList) || [];
                if (d.length) {
                  var { typeId: l, value: u = 0, cashBackType: p } = d[0] || {},
                    h = l === c.CashBackTypeId.CashBack,
                    v = p === c.CashBackType.Store;
                  r.push({
                    title: this.getCashBackTitle(l, v),
                    desc: [
                      "该笔订单" +
                        (h ? "预计至多可返" : "每件预计可返现") +
                        (u / 100).toFixed(2) +
                        "元" +
                        (v ? "储值金" : ""),
                    ],
                  });
                }
                this.ctx.data.rewardModel = r.map((e) =>
                  Object(s.a)({}, e, {
                    desc: e.desc.join(","),
                    descList: e.desc,
                  })
                );
              },
              formatGoodsList: (e) => (
                void 0 === e && (e = []),
                e.map((e) => {
                  try {
                    var o = JSON.parse(e.sku)
                      .map((e) => e.v)
                      .join("，");
                    e.skuStr = o;
                  } catch (e) {}
                  return e;
                })
              ),
              getCashBackTitle: (e, o) =>
                ({
                  [c.CashBackTypeId.CashBack]: o ? "订单返储值金" : "订单返现",
                  [c.CashBackTypeId.Tuan]: "团购返储值金",
                }[e] || "返储值金"),
              initOrderedChosenCouponList(e, o) {
                var t = this.ctx.data.orderedChosenCoupons || [];
                this.ctx.data.orderedChosenCoupons =
                  t.length && o
                    ? t.filter((o) => e.find((e) => e.id === o))
                    : e.map((e) => e.id);
              },
              updateOrderChosenCouponList(e, o) {
                var t = this.ctx.data.orderedChosenCoupons || [];
                this.ctx.data.orderedChosenCoupons = o
                  ? [e.id]
                  : t.concat(e.id);
              },
              removeOrderChosenCouponList(e) {
                var o = this.ctx.data.orderedChosenCoupons || [];
                this.ctx.data.orderedChosenCoupons =
                  -1 === e ? [] : o.filter((o) => o !== e);
              },
              judgeCouponExclusion(e) {
                var o,
                  t,
                  { lastActivities: n } = this.ctx.data.couponModel,
                  i =
                    null !=
                    (o =
                      null == (t = e.tradeConfirmation) ? void 0 : t.activities)
                      ? o
                      : [];
                n || (n = i),
                  (this.ctx.data.couponModel = Object(s.a)(
                    {},
                    this.ctx.data.couponModel,
                    { lastActivities: i }
                  ));
              },
              getCouponRecommendStatus(e) {
                var o,
                  t,
                  s,
                  n,
                  {
                    isCouponOverlyingOptimal: i,
                    recommendedCoupons: a,
                    oldRecommendedCoupons: c,
                    chosenCoupons: r,
                  } = e;
                return i
                  ? c
                    ? 0 ===
                      (null ==
                      ((t = a),
                      (s = r),
                      (n = (e, o) => e.id === o.id),
                      (o = Array.isArray(t)
                        ? Array.isArray(s) && "function" == typeof n
                          ? t.filter((e) => !s.some((o) => n(e, o)))
                          : t
                        : []))
                        ? void 0
                        : o.length)
                      ? "recommend"
                      : "notRecommend"
                    : "recommend"
                  : "downgrade";
              },
              getOldCouponChosenId(e) {
                var o,
                  t,
                  {
                    isInitCoupon: s,
                    pay: { realPay: n },
                    couponModel: i,
                  } = this.ctx.data;
                return s
                  ? 0 === n
                    ? -1
                    : null != (o = e[0]) && o.value
                    ? null == (t = e[0])
                      ? void 0
                      : t.id
                    : -1
                  : i.chosenId;
              },
            },
            ud: !0,
          },
          x = t("9ZMt");
        o.default = x.default.component(g);
      },
      wH4f: function (e, o, t) {
        var s, n, i;
        (o.__esModule = !0),
          (o.initGrouponModel =
            o.ExpressType =
            o.grouponMemberReceiveConfig =
            o.grouponOptionalReceiveConfig =
            o.GrouponReceive =
            o.initGroupData =
              void 0),
          (o.initGroupData = {
            isGroupon: !1,
            isHeader: !1,
            isChecked: !1,
            receiveState: 1,
            groupHeader: {},
          }),
          (function (e) {
            (e[(e.ForbidReceive = 0)] = "ForbidReceive"),
              (e[(e.OptionalReceive = 1)] = "OptionalReceive"),
              (e[(e.ForceReceive = 2)] = "ForceReceive");
          })((i = o.GrouponReceive || (o.GrouponReceive = {}))),
          (o.grouponOptionalReceiveConfig =
            (((s = {})[i.OptionalReceive] = {
              headerTitle:
                "若团员选择团长代收，团员商品将发货给你（为确保及时收取包裹，团长的收货信息将会展示给团员）",
              popContent:
                "团员可选择包裹由团长代收，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团员可及时联系团长领取包裹，团长的手机号将会展示给团员。",
            }),
            (s[i.ForceReceive] = {
              headerTitle:
                "所有团员购买的商品都由团长代收（为确保及时收取包裹，团长的收货信息将会展示给团员）",
              popContent:
                "该团由团长代收包裹，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团员可及时联系团长领取包裹，团长的手机号将会展示给团员。",
            }),
            s)),
          (o.grouponMemberReceiveConfig =
            (((n = {})[i.OptionalReceive] = {
              headerTitle:
                "团长代收包裹（为确保团长及时分发包裹，手机号会展示给团长）",
              popContent:
                "团员可选择包裹由团长代收，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团长可及时联系团员分发包裹，团员的手机号将会展示给团长。",
            }),
            (n[i.ForceReceive] = {
              headerTitle:
                "该团由团长代收包裹（为确保团长及时分发包裹，手机号会展示给团长）",
              popContent:
                "该团由团长代收包裹，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团长可及时联系团员分发包裹，团员的手机号将会展示给团长。",
            }),
            n)),
          (function (e) {
            e.EXPRESS = "express";
          })(o.ExpressType || (o.ExpressType = {})),
          (o.initGrouponModel = {
            textConfig: { headerTitle: "", popContent: "" },
            isGroupon: !1,
            expressType: "",
            showGroupHeader: !1,
            showGrouponMember: !1,
            receiveByGroupHeader: !1,
            grouponOptionalReceive: !1,
            isChecked: !1,
            headerInfo: {},
            receiveState: i.ForbidReceive,
            isHeader: !1,
            originGrouponData: {},
          });
      },
    }
  )
);
