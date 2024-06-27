"use strict";
var r = require("~/r");
r(
  "K3C4",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      K3C4: function (e, t, s) {
        s.r(t);
        var o = s("eijD"),
          i = s("Fcif"),
          a = s("9ZMt"),
          c = s("z9IR"),
          r = s("YeA1"),
          h = s("AGZf"),
          n = s("w2Y9"),
          d = s.n(n),
          l = s("mQXz"),
          u = s.n(l),
          p = s("lgMb"),
          g = s("usDI"),
          f = s("Hbp8"),
          y = s("aOlM"),
          m = s("haJi"),
          S = s("UlHH"),
          b = s("/je5"),
          v = s("xers"),
          k = s.n(v),
          I = {
            props: {
              initData: Object,
              isHideInStock: { type: Boolean, default: !1 },
            },
            data: () => ({
              showInStock: !0,
              showInStockBtn: !1,
              inSearch: !1,
              keyword: "",
              loading: !0,
              showList: !1,
              showLoading: !0,
              selfFetchList: [],
              location: { cityName: "", cityCode: "", lat: "", lng: "" },
              selfFetch: { cityName: "", cityCode: "", shop: {} },
              shop: { kdtId: "" },
              goods: { list: [], unavailable: [] },
              shopStock: {},
              themeColors: {},
              themeCSS: "",
              isRetailOrderScene: !1,
              params: {},
              finished: !1,
            }),
            computed: {
              currentShopId() {
                var { shop: e } = this.selfFetch || {},
                  { id: t } = e || {};
                return t;
              },
            },
            watch: {
              initData: {
                handler(e) {
                  (this.selfFetch = e.selfFetch || {}),
                    (this.shop = e.shop),
                    (this.goods = e.goods),
                    (this.crossStoreFetch = !!e.crossStoreFetch),
                    this.crossStoreFetch && (this.showInStock = !1),
                    (this.bookKey = e.bookKey),
                    (this.buyerMsg = e.buyerMsg),
                    (this.contact = e.contact),
                    (this.prevPageRoute = e.route),
                    (this.prevPageQuery = e.query);
                },
                immediate: !0,
              },
            },
            mounted() {
              var { dbid: e = "", isRetailOrderScene: t = 0 } =
                this.$getPageQuery();
              if (
                ((this.isRetailOrderScene = Boolean(+t)), e || this.initData)
              ) {
                var s = this.ctx.lambdas.getDb(e) || this.initData || {};
                this.init(s);
              }
            },
            created() {
              Object(r.b)(this, [
                "themeColors",
                "themeCSS",
                "isDirectPushRoute",
              ]);
            },
            methods: {
              init(e) {
                var t;
                (this.selfFetch = e.selfFetch || {}),
                  (this.shop = e.shop),
                  (this.goods = e.goods),
                  (this.crossStoreFetch = !!e.crossStoreFetch),
                  this.crossStoreFetch && (this.showInStock = !1),
                  (this.bookKey = e.bookKey),
                  (this.buyerMsg = e.buyerMsg),
                  (this.contact = e.contact),
                  (this.prevPageRoute = e.route),
                  (this.prevPageQuery = e.query);
                var s = (null == (t = this.selfFetch) ? void 0 : t.shop) || {},
                  [o] = this.ctx.process.invoke("getLocation");
                o
                  .then((e) => {
                    (this.location = e),
                      s.id ||
                        (this.selfFetch = Object(i.a)({}, this.selfFetch, {
                          cityCode: e.cityCode,
                          cityName: e.cityName,
                        })),
                      this.getShopList();
                  })
                  .catch((e) => {
                    this.getShopList();
                  }),
                  (this.shopStock = m.a);
                var a = Object(g.a)();
                Object(g.b)(a)
                  .then((e) => {
                    var { shopType: t, shopRole: s } = e;
                    this.showInStockBtn = !(7 === t && 0 === s);
                  })
                  .catch(() => {
                    this.showInStockBtn = !0;
                  });
              },
              onSearch() {
                this.getShopList(!0);
              },
              onChange(e) {
                this.keyword = e.value || "";
              },
              onCancel() {
                (this.inSearch = !1), (this.keyword = ""), this.getShopList(!0);
              },
              selectCity() {
                if (!this.showLoading) {
                  var { location: e } = this;
                  a.default.navigate({
                    url:
                      "/packages/trade-buy-subpage/order/self-fetch-address-city/index?cityName=" +
                      e.cityName +
                      "&cityCode=" +
                      e.cityCode,
                    type: "navigateTo",
                  }),
                    this.ctx.lambdas.onEventOnce(S.a.selfFetchCity, (e) => {
                      (this.selfFetch = {
                        cityName: e.cityName,
                        cityCode: e.cityCode,
                        shop: {},
                      }),
                        this.getShopList(!0);
                    });
                }
              },
              switchShowInStock() {
                if (
                  !this.showLoading &&
                  ((this.showInStock = !this.showInStock),
                  !this.crossStoreFetch)
                ) {
                  var { finished: e } = this.selfFetch;
                  e || this.getShopList(!0);
                }
              },
              startSearch() {
                this.inSearch = !0;
              },
              handleSelect(e) {
                var t = this;
                return Object(o.a)(function* () {
                  var { shopStock: s } = t,
                    o = e.orderSoldStatus,
                    r = "";
                  o === s.part
                    ? (r =
                        "订单部分商品在当前提货点缺货，此部分商品将不会购买下单")
                    : o === s.none &&
                      (r = "订单所有商品在当前提货点缺货，请重新选择商品下单");
                  var n = function (s) {
                      var { otherParams: o, skipBack: i = !1 } =
                        void 0 === s ? {} : s;
                      t.ctx.lambdas.triggerEvent(
                        "select-self-fetch-address",
                        e,
                        o
                      ),
                        k()(t.initData) && (i || a.default.navigateBack());
                    },
                    d = e.saleShopKdtId;
                  if (t.crossStoreFetch) {
                    if (t.shop.kdtId !== d) {
                      h.a.loading("跳转中···");
                      try {
                        var l = {
                          bookKey: t.bookKey,
                          targetKdtId: d,
                          buyerMsg: t.buyerMsg,
                          changeItems: t.goods.list.filter(
                            (e) => !e.fromTmpAdded && !e.present
                          ),
                        };
                        t.isRetailOrderScene &&
                          (l.delivery = {
                            selfFetch: Object(i.a)({}, e, {
                              lat: "" + e.lat,
                              lng: "" + e.lng,
                            }),
                          });
                        var { bookKey: u } = yield Object(b.a)(l),
                          g = t.getRedirectUrl(d, u);
                        yield t.autoEnterShop(d, g),
                          f.b.setItem(
                            f.a,
                            JSON.stringify({
                              [u]: {
                                selfFetch: Object(i.a)({}, t.selfFetch, {
                                  shop: e,
                                  cityCode: e.countyId,
                                  cityName: e.city,
                                  time: "",
                                  selfFetchStartTime: "",
                                  selfFetchEndTime: "",
                                }),
                                contact: t.contact,
                                activeTab: 1,
                              },
                            })
                          ),
                          n({
                            otherParams: { redirectUrl: g, bookKey: u },
                            skipBack: !0,
                          }),
                          h.a.clear();
                      } catch (e) {
                        h.a.clear(), Object(p.b)(e);
                      }
                    } else n();
                  } else
                    r
                      ? c.a
                          .confirm({
                            message: r,
                            confirmButtonText: "知道了",
                            showCancelButton: !1,
                            ref: t.$refs.selfFetchAddressDialog,
                          })
                          .then(() => {
                            n();
                          })
                          .catch((e) => {})
                      : n();
                })();
              },
              getRedirectUrl(e, t) {
                var s = d.a.add(
                  this.prevPageRoute,
                  Object(i.a)({}, u()(this.prevPageQuery, "prefetchKey"), {
                    kdt_id: e,
                    bookKey: t,
                    book_key: t,
                  })
                );
                return (
                  "/pages/common/blank-page/index?weappSharePath=" +
                  encodeURIComponent(s)
                );
              },
              autoEnterShop(e, t) {
                var s = this;
                return Object(o.a)(function* () {
                  var [o] = s.ctx.process.invoke("setApplicationScene", {
                      sceneId: 9008,
                      sceneSource: "CUSTOM",
                    }),
                    [i] = s.ctx.process.invoke(
                      "autoEnterShop",
                      { kdtId: e },
                      { redirectUrl: t }
                    );
                  return yield o, i;
                })();
              },
              getState() {
                var e = this;
                return Object(o.a)(function* () {
                  return new Promise((t) => {
                    e.ctx.lambdas.triggerEvent("get-state", (e) => {
                      t(e);
                    });
                  });
                })();
              },
              getShopList(e) {
                var t = this;
                return Object(o.a)(function* () {
                  void 0 === e && (e = !1);
                  try {
                    var s;
                    (t.loading = !0), (t.showList = !0);
                    var { goods: o } = t;
                    (t.items = t.items || [].concat(o.list, o.unavailable)),
                      (t.subComboList =
                        t.subComboList ||
                        (null == (s = t.items)
                          ? void 0
                          : s.reduce((e, t) => {
                              var s;
                              return e.concat(
                                null == (s = t.combo)
                                  ? void 0
                                  : s.subComboList.map((e) => {
                                      var {
                                        goodsId: t,
                                        groupId: s,
                                        skuId: o,
                                        num: i,
                                      } = e;
                                      return {
                                        goodsId: t,
                                        groupId: s,
                                        skuId: o,
                                        num: i,
                                      };
                                    })
                              );
                            }, [])));
                    var i = {
                        kdtId: t.shop.kdtId,
                        items: t.items.map((e) => {
                          var s;
                          return {
                            goodsId: e.goodsId,
                            skuId: e.skuId,
                            num: e.num,
                            combo: (null == e ? void 0 : e.combo) && {
                              comboType:
                                null == (s = e.combo) ? void 0 : s.comboType,
                              subComboList: t.subComboList,
                            },
                          };
                        }),
                        keyword: t.keyword,
                        pageSize: 20,
                      },
                      { cityCode: a } = t.selfFetch;
                    a && ((a = a.slice(0, -2) + "00"), (i.cityCode = a));
                    var { lat: c, lng: r } = t.location;
                    c && r && ((i.lat = c), (i.lng = r)),
                      t.crossStoreFetch &&
                        ((i.crossQuery = !0),
                        (i.pageSize = 20),
                        (i.fillInSoldStatusCnt = 20)),
                      (i.page = 1),
                      (t.selfFetchList = []),
                      (t.getShopListFetchIndex =
                        (t.getShopListFetchIndex || 0) + 1),
                      (t.params = i),
                      e && t.loadList(i);
                  } catch (e) {
                    ((e) => {
                      var s;
                      (t.loading = !1),
                        (t.showLoading = !1),
                        null == (s = t.ctx.hummer) ||
                          s.capture(
                            "自提点列表getShopList加载错误:[kdtId: " +
                              t.shop.kdtId +
                              "]:" +
                              e
                          );
                    })(e);
                  }
                })();
              },
              loadList: Object(y.a)(
                (function () {
                  var e = Object(o.a)(function* (e) {
                    void 0 === e && (e = this.params);
                    var { selfFetchList: t, page: s } = yield Object(b.b)(e),
                      o = yield this.getState(),
                      i =
                        (yield this.ctx.process.invokePipe(
                          "hook:mutateListAfterFetch",
                          t,
                          o
                        )) || t;
                    (this.selfFetchList = (this.selfFetchList || []).concat(i)),
                      (this.finished = i.length < e.pageSize),
                      (this.loading = !1),
                      (this.params.page = s),
                      (this.showLoading = !1);
                  });
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                100
              ),
            },
            ud: !0,
          };
        t.default = a.default.component(I);
      },
      UlHH: function (e, t, s) {
        t.a = {
          selfFetchCity: "self-fetch-city-change",
          addressSelect: "address-select",
          addressDelete: "address-delete",
          addressSave: "address-save",
          couponChange: "order-coupon-change",
          showExpressWay: "show-express-way",
          addressCity: "address-city-change",
          addressMap: "address-map-change",
          showContact: "show-contact",
          showSelfFetchShop: "show-self-fetch-shop",
          showSelfFetchTime: "show-self-fetch-time",
          showTradeRecharge: "show-trade-recharge",
          contactError: "contact-error",
          idcardError: "idcard-error",
          presaleDisagreeToast: "presale-disagree-toast",
          showIdcardPopup: "show-idcard-popup",
        };
      },
      haJi: function (e, t, s) {
        t.a = { default: 0, full: 1, none: 2, part: 3 };
      },
      usDI: function (e, t, s) {
        s.d(t, "a", function () {
          return c;
        }),
          s.d(t, "b", function () {
            return r;
          });
        s("+I+c"), s("Fcif"), s("9ZMt");
        var o = s("U0uK"),
          i = s("US/N");
        s("w2Y9");
        var a = Object(o.a)().kdtId,
          c = function () {
            return a;
          },
          r = function (e) {
            return Object(i.default)({
              path: "/wscshop/shop/shop-meta-info.json",
              method: "GET",
              query: { kdt_id: e },
            });
          };
      },
    }
  )
);
