"use strict";
var r = require("~/r");
r(
  "leOp",
  Object.assign({}, require("~/v.js").modules, {
    leOp: function (t, e, s) {
      s.r(e);
      var i = s("Fcif"),
        a = s("AGZf"),
        o = s("tS13"),
        r = s("YeA1"),
        l = {
          props: {
            goodsData: Object,
            selectedInfo: Object,
            orderSkus: Object,
            timelyLimit: Object,
          },
          data() {
            return {
              loading: !1,
              sku: null,
              originSku: null,
              showPrice: this.getShowPrice(),
            };
          },
          computed: {
            flattenSaleProps() {
              if (!this.sku) return {};
              var { itemSalePropList: t } = this.sku;
              if (!t) return {};
              var e = {};
              return (
                t.forEach((t) => {
                  t.v.forEach((t) => {
                    e[t.id] = t;
                  });
                }),
                e
              );
            },
            specification() {
              if (!this.selectedInfo) return null;
              var { selectedSkuInfo: t, propertyIds: e } = this.selectedInfo,
                s = e ? e.map((t) => this.flattenSaleProps[t].name) : [],
                i =
                  t && t.sku
                    ? JSON.parse(t.sku).map((t) => {
                        var { v: e } = t;
                        return "" + e;
                      })
                    : [];
              return i.length > 0 || s.length > 0
                ? i.concat(s).join("；")
                : null;
            },
            goodsTags() {
              var { goodsTags: t = [] } = this.goodsData;
              return !!t.length && t[0].tagName;
            },
            priceLabel() {
              var t,
                { showOriginPrice: e } = this.goodsData;
              return (
                !e &&
                { 11: "限时价", 10: "会员价" }[
                  null == (t = this.goodsData) ? void 0 : t.appType
                ]
              );
            },
            startSaleNum() {
              var t,
                { sku: e } = this;
              return (
                (e && (null == (t = e.limit) ? void 0 : t.startSaleNum)) || 1
              );
            },
            stock() {
              var t;
              return this.sku
                ? null != (t = this.selectedInfo) && t.selectedSkuInfo
                  ? this.selectedInfo.selectedSkuInfo.stockNum
                  : this.sku.stockNum
                : 0;
            },
            maxSaleNum() {
              if (!this.sku) return 0;
              var { quota: t, quotaUsed: e } = this.sku.limit || {};
              return t > 0 && (this.stock || 0 === this.stock)
                ? Math.min(this.stock, t - e)
                : t > 0
                ? t - e
                : this.stock;
            },
          },
          watch: {
            orderSkus() {
              this.originSku && (this.sku = this.mergeSku(this.originSku));
            },
            timelyLimit() {
              this.originSku && (this.sku = this.mergeSku(this.originSku));
            },
            goodsData() {
              this.showPrice = this.getShowPrice();
            },
          },
          created() {
            Object(r.b)(this, ["order"]),
              Object(r.d)(this, {
                "postagetool:unavailableItem": (t) =>
                  this.handleUnavailableItem(t),
              });
          },
          methods: {
            getShowPrice() {
              var {
                price: t,
                discountPrice: e,
                showOriginPrice: s,
              } = this.goodsData;
              return s || !e ? t : e;
            },
            mergeSkuStock(t) {
              var e,
                { orderSkus: s, goodsData: a } = this,
                o = a.quota || 0,
                r = this.timelyLimit || {},
                l = !t.list.length,
                u = null == (e = Object.values(r)) ? void 0 : e[0],
                n = l && (null == u ? void 0 : u.stockNum),
                h = null == u ? void 0 : u.quota,
                d = null == u ? void 0 : u.quotaUsed,
                c = Object.values(s || {}).reduce((t, e) => t + e, 0),
                m = Object(i.a)({}, t, {
                  quotaUsed: (d || t.quotaUsed) + c,
                  quota: h || t.quota,
                  stockNum: (n || t.stockNum) - c,
                  list: t.list.map((t) => {
                    var e;
                    return s[t.id]
                      ? Object(i.a)({}, t, {
                          stockNum:
                            ((null == (e = r[t.id]) ? void 0 : e.stockNum) ||
                              t.stockNum) - s[t.id],
                        })
                      : t;
                  }),
                  price: "string" == typeof t.price ? 100 * +t.price : t.price,
                });
              return (
                ((m.quota > 0 && o > 0 && o < m.quota) ||
                  (0 === m.quota && o > 0)) &&
                  (m.quota = o),
                (m = Object(i.a)({}, m, {
                  limit: {
                    quota: m.quota,
                    quotaUsed: m.quotaUsed || 0,
                    startSaleNum: t.itemDataModel.startSaleNum || 1,
                  },
                }))
              );
            },
            mergeSku(t) {
              var e = Object(i.a)({}, t);
              return (
                Array.isArray(t.itemActivitySpuModels) &&
                  t.itemActivitySpuModels.length > 0 &&
                  (e = Object(i.a)({}, t, t.itemActivitySpuModels[0] || {}))
                    .list.length > 0 &&
                  (e.list = e.list.map((e) => {
                    var { id: s } = e,
                      a = t.list.find((t) => t.id === s);
                    return a ? Object(i.a)({}, a, e) : e;
                  })),
                (e = this.mergeSkuStock(e))
              );
            },
            showSku() {
              var { sku: t, goodsData: e } = this,
                { title: s, id: a, alias: r, imageUrl: l } = e,
                {
                  selectedSkuInfo: u = {},
                  num: n,
                  propertyIds: h,
                  itemMessage: d,
                } = this.selectedInfo || {},
                c = {};
              (c.sku = t),
                (c.goodsAttributes = t.itemSalePropList),
                (c.goods = { title: s, id: a, alias: r, picture: l }),
                (c.skuConfig = { buytext: "确定", skuSence: o.c.BUY });
              var m = {
                event: {
                  skuScene: o.c.BUY,
                  module: "postageTool",
                  skuOptions: { resetSku: !0 },
                },
                initialSku: {},
              };
              n
                ? ((m.initialSku = Object(i.a)({}, u, {
                    selectedNum: n,
                    selectedProp: h,
                  })),
                  (c.messageConfig = {
                    initialMessages: u.cartMessages || JSON.parse(d || "{}"),
                    placeholderMap: {},
                  }))
                : (c.messageConfig = {
                    initialMessages: {},
                    placeholderMap: {},
                  }),
                this.ctx.process.invoke(
                  "setSkuInfo",
                  Object(i.a)({}, m, c, { goodsAttributes: { reset: !0 } })
                );
            },
            getSku() {
              (this.loading = !0), a.a.loading({ message: "" });
              var { goodsData: t, sku: e } = this;
              return (
                e
                  ? Promise.resolve(e)
                  : this.ctx.process.invoke("fetchSkuData", {
                      alias: t.alias,
                      offlineId: this.ctx.data.offlineId,
                    })[0]
              )
                .then((t) => {
                  (this.loading = !1), a.a.clear();
                  var e = this.sku;
                  return (
                    this.sku ||
                      ((this.originSku = t),
                      (e = this.mergeSku(t)),
                      (this.sku = e)),
                    e
                  );
                })
                .catch((t) => {
                  throw (
                    ((this.loading = !1),
                    a.a.clear(),
                    a.a.fail("商品信息获取失败"),
                    t)
                  );
                });
            },
            getItemData() {
              var { goodsData: t = {}, order: e = {} } = this,
                { seller: s } = e;
              return {
                goodsId: t.id,
                kdtId: s.kdtId,
                storeId: s.storeId,
                itemId: t.id,
              };
            },
            handleStepChange(t) {
              var { value: e } = t;
              this.selectedInfo.num < this.startSaleNum &&
                (e = this.startSaleNum),
                this.$emit(
                  "onChange",
                  Object(i.a)({}, this.selectedInfo, { num: +e })
                );
            },
            handleStepPlus() {
              this.$emit(
                "onChange",
                Object(i.a)({}, this.selectedInfo, {
                  num: this.selectedInfo.num + 1,
                })
              );
            },
            handleStepMinus() {
              this.selectedInfo.num === this.startSaleNum
                ? this.$emit(
                    "onChange",
                    Object(i.a)({}, this.selectedInfo, { num: 0 })
                  )
                : this.$emit(
                    "onChange",
                    Object(i.a)({}, this.selectedInfo, {
                      num: this.selectedInfo.num - 1,
                    })
                  );
            },
            handleOverLimit() {
              Object(a.a)("已经达到限购数量");
            },
            handleUnavailableItem(t) {
              if (t.length && this.selectedInfo) {
                var e = t.find(
                  (t) => "" + t.skuId == "" + this.selectedInfo.skuId
                );
                e &&
                  (e.unavailableDesc && a.a.fail(e.unavailableDesc),
                  this.handleStepChange({
                    value:
                      this.timelyLimit && this.timelyLimit[e.skuId]
                        ? this.timelyLimit[e.skuId].postageToolNum
                        : 0,
                  }));
              }
            },
            onClickCard() {
              var { id: t, bannerId: e } = this.goodsData;
              this.loading ||
                (this.getSku().then((t) => {
                  if (
                    !t.noneSku ||
                    (Array.isArray(t.messages) && t.messages.length) ||
                    (Array.isArray(t.itemSalePropList) &&
                      t.itemSalePropList.length)
                  )
                    this.showSku();
                  else {
                    var e = Object(i.a)(
                      {
                        num: this.startSaleNum,
                        skuId: t.collectionId,
                        price: t.collectionPrice,
                      },
                      this.getItemData()
                    );
                    if (this.startSaleNum > this.maxSaleNum)
                      return void this.handleOverLimit();
                    this.$emit("onChange", e);
                  }
                }),
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "click",
                    ei: "add_cart",
                    en: "添加购物车",
                    params: {
                      banner_id: e,
                      goods_id: t,
                      component: "free_shipping_list",
                    },
                  }));
            },
          },
        },
        u = s("9ZMt");
      e.default = u.default.component(l);
    },
  })
);
