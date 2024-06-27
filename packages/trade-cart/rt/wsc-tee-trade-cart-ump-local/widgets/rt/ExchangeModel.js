"use strict";
var r = require("~/r");
r(
  "nEbv",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      VNnE: function (t, e, s) {
        var o = getApp();
        e.a = {
          data: function () {
            return {
              popupBottom: 0,
              noSafeBottom: 0,
              safeBottom: "iPhone-X" === o.deviceType,
            };
          },
          beforeMount: function () {
            var t = this;
            o.isSwitchTab().then(function (e) {
              e &&
                ((t.popupBottom = 49),
                (t.noSafeBottom = t.safeBottom ? 83 : 49));
            });
          },
        };
      },
      nEbv: function (t, e, s) {
        s.r(e);
        var o = s("Fcif"),
          r = s("eijD"),
          i = s("AGZf"),
          d = s("lgMb"),
          a = s("2Z9d"),
          n = s("zIH3"),
          c = s("taYb"),
          u = s("VNnE"),
          h = s("YeA1"),
          g = {
            name: "exchange-model",
            mixins: [u.a],
            props: {
              activityId: Number,
              activityType: Number,
              isShow: Boolean,
              kdtId: Number,
              activityDesc: String,
              plusBuyGoods: Array,
              themeCss: String,
              themeGeneralColor: String,
              offlineId: Number,
            },
            data() {
              return {
                show: this.isShow,
                supportMulti: !1,
                goodsList: [],
                TotalNum: 0,
                btnLoading: !1,
                fetchExchangeListIng: !1,
                currentSelectedSku: {},
                plusBuyGoodsCase: [],
              };
            },
            computed: {
              getListError() {
                return !this.fetchExchangeListIng && !this.goodsList.length;
              },
              totalNum() {
                return this.goodsList.filter((t) => !!t.selected).length;
              },
              customStyle() {
                return (
                  "background: #f6f7f9;" +
                  ("bottom: " +
                    this.popupBottom +
                    "px; " +
                    (this.safeBottom ? "padding-bottom: 34px;" : ""))
                );
              },
            },
            watch: {
              isShow: {
                immediate: !0,
                handler(t) {
                  (this.show = t),
                    t
                      ? this.getExchangeGoods()
                      : setTimeout(() => {
                          (this.supportMulti = !1),
                            (this.fetchExchangeListIng = !1),
                            (this.selectedGoods = []),
                            (this.goodsList = []);
                        }, 300);
                },
              },
              plusBuyGoods(t) {
                this.plusBuyGoodsCase = c.a.toCamelCase(t);
              },
            },
            created() {
              var t = this;
              return Object(r.a)(function* () {
                Object(h.d)(t, {
                  "exchangeGoodsSku:submit": t.onConfirmSku,
                  "exchangeGoodsSku:hide": () => {
                    t.currentSelectedSku = null;
                  },
                });
              })();
            },
            methods: {
              onConfirmSku(t) {
                this.currentSelectedSku = t;
              },
              closeSku() {
                this.ctx.event.emit("exchangeGoodsSku:afterSubmit");
              },
              getExchangeGoods() {
                var t = this,
                  { kdtId: e, activityId: s, offlineId: r } = this;
                (this.fetchExchangeListIng = !0),
                  Object(n.c)({ kdtId: e, activityId: s, offlineId: r })
                    .then(function (e) {
                      var s;
                      void 0 === e && (e = []),
                        e.length &&
                          ((t.goodsList =
                            null == (s = e.slice(0))
                              ? void 0
                              : s.map(function (t) {
                                  return (
                                    void 0 === t && (t = {}),
                                    Object(o.a)({}, t, {
                                      reserveExchangePrice: t.exchangePrice,
                                      reserveOriginalPrice: t.originalPrice,
                                    })
                                  );
                                })),
                          (t.supportMulti = !!e[0] && e[0].supportMulti),
                          t.searchCartGoods(),
                          (t.fetchExchangeListIng = !1));
                    })
                    .catch((t) => {
                      (this.goodsList = []), (this.fetchExchangeListIng = !1);
                    });
              },
              searchCartGoods() {
                this.plusBuyGoodsCase.forEach((t) => {
                  var {
                      goodsId: e,
                      sku: s,
                      skuData: r,
                      skuId: i,
                      payPrice: d,
                      originPrice: a,
                      attachmentUrl: n,
                      messages: c = "",
                      properties: u = [],
                      propertyIds: h = [],
                    } = t,
                    g = this.goodsList.findIndex((t) => t.goodsId === e);
                  g > -1 &&
                    this.goodsList.splice(
                      g,
                      1,
                      Object(o.a)({}, this.goodsList[g], {
                        selected: !0,
                        skuStr: s,
                        properties: u,
                        skuData: r,
                        skuId: i,
                        messages: c,
                        exchangePrice: d,
                        originalPrice: a,
                        picture: n,
                        propertyIds: h,
                      })
                    );
                });
              },
              onAddToCart() {
                var t = this;
                return Object(r.a)(function* () {
                  if (!t.btnLoading)
                    if (t.getListError) t.closeExchangePop();
                    else {
                      t.btnLoading = !0;
                      var e = !0,
                        s = t.goodsList.filter((t) => !!t.selected),
                        o = t.getShouldDeleteGoods(s),
                        i = t.getShouldAddGoods(s);
                      if (
                        (o.length ||
                          i.length ||
                          ((e = !1), (t.btnLoading = !1)),
                        !o.length)
                      )
                        return yield t.addCart(i, e), void (t.btnLoading = !1);
                      var a = t.parseDeleteGoods(o);
                      Object(n.b)(a)
                        .then(
                          (function () {
                            var s = Object(r.a)(function* (s) {
                              if (!s) throw new Error();
                              yield t.addCart(i, e), (t.btnLoading = !1);
                            });
                            return function (t) {
                              return s.apply(this, arguments);
                            };
                          })()
                        )
                        .catch((e) => {
                          (t.btnLoading = !1),
                            Object(d.b)(e, {
                              message: "删除商品失败，请稍后重试",
                            });
                        });
                    }
                })();
              },
              addCart(t, e) {
                if ((void 0 === e && (e = !0), !t.length))
                  return (
                    this.$emit("close"),
                    e && this.$emit("add-cart"),
                    Promise.resolve()
                  );
                var s = this.parseAddGoods(t);
                return Object(n.a)(s)
                  .then(() => {
                    Object(i.a)("已成功添加到购物车"),
                      this.$emit("close"),
                      this.$emit("add-cart");
                  })
                  .catch((t) => {
                    Object(d.b)(t, { message: "添加购物车失败，请稍后重试" });
                  });
              },
              parseDeleteGoods(t) {
                var { kdtId: e, activityId: s } = this;
                return t.map((t) => ({
                  skuId: t.skuId,
                  goodsId: t.goodsId,
                  kdtId: e,
                  activityId: s,
                }));
              },
              parseAddGoods(t) {
                var { kdtId: e, activityId: s, activityType: o } = this;
                return t.map((t) => {
                  var r = Object(a.a)(t.properties);
                  return {
                    skuId: t.skuId || t.thinSkus[0].id,
                    goodsId: t.goodsId,
                    payPrice: 100 * +t.exchangePrice,
                    messages: t.messages || "",
                    kdtId: e,
                    activityId: s,
                    propertyIds:
                      (null == r ? void 0 : r.length) > 0 ? r : t.propertyIds,
                    activityType: o.toString(),
                    num: 1,
                  };
                });
              },
              getShouldAddGoods(t) {
                var e = [];
                return (
                  t.forEach((t) => {
                    var s = this.plusBuyGoodsCase.find(
                      (e) => e.goodsId === t.goodsId
                    );
                    (s && this.compareGoodsIsSame(t, s)) || e.push(t);
                  }),
                  e
                );
              },
              getShouldDeleteGoods(t) {
                var e = [];
                return (
                  this.plusBuyGoodsCase.forEach((s) => {
                    var o = t.find((t) => t.goodsId === s.goodsId);
                    (o && this.compareGoodsIsSame(s, o)) || e.push(s);
                  }),
                  e
                );
              },
              updateGoodsListData(t) {
                this.goodsList = this.goodsList.map((e) =>
                  e.goodsId === t.goodsId ? t : e
                );
              },
              compareGoodsIsSame(t, e) {
                var s = !0;
                return (
                  ["goodsId", "skuId"].forEach((o) => {
                    s = s && t[o] === e[o];
                  }),
                  (t.properties = t.properties || []),
                  (e.properties = e.properties || []),
                  (s =
                    s &&
                    JSON.stringify(t.properties) ===
                      JSON.stringify(e.properties)),
                  (t.propertyIds = t.propertyIds || []),
                  (e.propertyIds = e.propertyIds || []),
                  (s =
                    (s =
                      s &&
                      JSON.stringify(t.propertyIds) ===
                        JSON.stringify(e.propertyIds)) &&
                    this.parseMessageToArrString(t.messages) ===
                      this.parseMessageToArrString(e.messages))
                );
              },
              parseMessageToArrString(t) {
                var e = [];
                try {
                  e = JSON.parse(t);
                } catch (t) {
                  e = [];
                }
                return (
                  "[object Object]" === Object.prototype.toString.call(e) &&
                    (e = Object.keys(e).map((t) => e[t])),
                  JSON.stringify(e)
                );
              },
              closeExchangePop() {
                this.$emit("close");
              },
              toGoodsDetail(t) {
                this.ctx.process.invoke("navigateFromCart", t);
              },
              changeSkuShow(t) {
                this.ctx.process.invoke("setSkuInfo", t);
              },
            },
          },
          p = s("9ZMt");
        e.default = p.default.component(g);
      },
    }
  )
);
