"use strict";
var r = require("~/r");
r(
  "xHFi",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      xHFi: function (e, t, s) {
        s.r(t);
        var i = s("Fcif"),
          a = s("mztD"),
          o = s("lgMb"),
          r = s("taYb"),
          u = s("NHEX"),
          l = s.n(u),
          d = s("xyw3"),
          n = s("zIH3"),
          c = s("2Z9d"),
          p = {
            name: "exchange-list",
            props: {
              supportMulti: { type: Boolean },
              goodsList: { type: Array, default: () => [] },
              currentSelectedSku: Object,
              themeCss: String,
              themeGeneralColor: String,
            },
            data: () => ({
              themeClass: "",
              priceStyle: [],
              isShowSkuPopup: !1,
              skuData: {},
              initialSku: {},
              goodsProperties: [],
              skuDataGoods: {},
              exchangePrice: 0,
              skuMessageConfig: {},
              skuExtraData: { useCustomHeaderPrice: !0 },
            }),
            computed: {
              formatGoodsList() {
                return this.goodsList.map((e) =>
                  Object(i.a)({}, e, {
                    picture: Object(a.a)(e.picture, "!300x300.jpg"),
                    desc: e.skuStr,
                    checked: !!e.selected,
                  })
                );
              },
            },
            watch: {
              currentSelectedSku(e) {
                if (e) {
                  var t, s;
                  if (
                    "object" ==
                      typeof (null == (t = e.pluginsResult)
                        ? void 0
                        : t.goodsAttributes) &&
                    e.skuData
                  )
                    e.skuData.propertyIds =
                      null ==
                      (s = Object.values(e.pluginsResult.goodsAttributes))
                        ? void 0
                        : s.flat();
                  this.onConfirmSku(e.skuData || {});
                } else
                  (this.skuData = null),
                    (this.skuDataGoods = null),
                    (this.initialSku = null);
              },
            },
            methods: {
              onConfirmSku(e) {
                var { skuData: t, skuDataGoods: s } = this;
                if (t && s) {
                  var i,
                    a,
                    o,
                    r = Object(c.c)(t.tree, e.selectedSkuComb),
                    u = Object(c.d)(e.selectedSkuComb),
                    n = r.map((e) => e.name).join(";"),
                    p = [];
                  if (
                    (null == (i = t.itemSalePropList) ? void 0 : i.length) > 0
                  )
                    for (var h of t.itemSalePropList)
                      if (h && Array.isArray(h.v) && 0 !== h.v.length)
                        for (var g of h.v)
                          g &&
                            (e.propertyIds || []).includes(g.id) &&
                            g.name &&
                            p.push(g.name);
                  var k = l()(e.selectedSkuComb, "properties", []),
                    m = (r[0] && r[0].imgUrl) || s.picture,
                    { messages: S, selectedSkuComb: v, propertyIds: f } = e,
                    { id: b, price: j, noneSku: O } = v,
                    D = Object.keys(S).map((e) => S[e]),
                    y = O ? Object(d.a)(j).toCent() : j,
                    P = 0;
                  (null == f ? void 0 : f.length) > 0 &&
                    (P = Object(c.b)(
                      null == t ? void 0 : t.itemSalePropList,
                      f
                    ));
                  var C =
                    null == s ||
                    null == (a = s.thinSkus) ||
                    null ==
                      (o = a.find((t) => {
                        var s;
                        return (
                          t.id ===
                          (null == (s = e.selectedSkuComb) ? void 0 : s.id)
                        );
                      }))
                      ? void 0
                      : o.originalPrice;
                  this.updateGoodsListData(s, {
                    skuStr:
                      n +
                      ((null == p ? void 0 : p.length) > 0
                        ? "，" + p.join("，")
                        : ""),
                    properties: Object(c.f)(k),
                    propertyIds: null == e ? void 0 : e.propertyIds,
                    messages: D.length ? JSON.stringify(D) : "",
                    skuId: b,
                    skuData: u,
                    exchangePrice: parseInt(Math.round(y + P), 10),
                    originalPrice: C ? parseInt(Math.round(C + P), 10) : C,
                    selected: !0,
                    picture: m,
                  }),
                    this.$emit("close-sku"),
                    (this.skuDataGoods = null),
                    (this.skuData = null),
                    (this.initialSku = null);
                }
              },
              fetchGoodsSku(e) {
                var t = e.thinSkus.map((e) => e.id);
                Object(n.d)({ alias: e.alias })
                  .then((s) => {
                    var a, o;
                    s = r.a.toCamelCase(s);
                    var u = l()(s, "itemSalePropList", []),
                      n =
                        !s.noneSku ||
                        !(!s.messages || !s.messages.length) ||
                        !!u.length;
                    s.list = s.list.filter((e) => t.indexOf(e.id) > -1);
                    var p =
                      e.thinSkus.find((e) => e.id === s.collectionId) || {};
                    (s.price = p.exchangePrice
                      ? Object(d.a)(p.exchangePrice).toYuan()
                      : s.price),
                      s.list.forEach((t) => {
                        var s = e.thinSkus.find((e) => e.id === t.id) || {};
                        t.price = s.exchangePrice || t.price;
                      }),
                      n || this.updateGoodsListData(e, { selected: !0 }),
                      (this.skuDataGoods = e),
                      (this.skuData = s),
                      (this.goodsProperties = u);
                    var h = s.itemSalePropList || [],
                      g = Object(c.g)(e.properties),
                      k = e.propertyIds || [];
                    g.length > 0 && (k = g);
                    var m = JSON.parse(e.messages || "{}"),
                      S = {};
                    m instanceof Array
                      ? (s.messages || []).forEach((e, t) => {
                          S[e.name] = m[t];
                        })
                      : (S = m);
                    var v = {
                        sku: Object(i.a)({}, s, { limit: { quota: 1 } }),
                        goodsAttributes: h,
                        goods: Object(i.a)({}, e, {
                          propertyIds: k,
                          id: e.id || e.goodsId,
                        }),
                        messageConfig: { initialMessages: S },
                        skuConfig: { buyText: "确定", skuSence: "buy" },
                      },
                      f =
                        null !=
                        (a =
                          null == (o = s.list)
                            ? void 0
                            : o.find((t) => t.id === e.skuId))
                          ? a
                          : {};
                    this.$emit(
                      "change-sku-show",
                      Object(i.a)({}, v, {
                        initialSku: Object(i.a)({}, f, {
                          propertyIds: k,
                          properties: e.properties,
                          selectedNum: 1,
                        }),
                        event: {
                          skuScene: "buy",
                          skuOptions: { resetSku: !0 },
                        },
                        goodsAttributes: { reset: !0 },
                      })
                    );
                  })
                  .catch((e) => {
                    Object(o.b)(e, { message: "商品信息获取失败，请稍后重试" });
                  });
              },
              onChange(e, t) {
                var { detail: s } = t,
                  i = this.goodsList.find((t) => t.goodsId === e);
                s
                  ? (this.supportMulti ||
                      this.goodsList.forEach((e) => {
                        this.updateGoodsListData(e, { selected: !1 });
                      }),
                    i && this.fetchGoodsSku(i))
                  : i &&
                    this.updateGoodsListData(i, {
                      skuStr: "",
                      exchangePrice: i.reserveExchangePrice,
                      originalPrice: i.reserveOriginalPrice,
                      selected: !1,
                    });
              },
              updateGoodsListData(e, t) {
                void 0 === t && (t = {}),
                  this.$emit("updateGoodsListData", Object(i.a)({}, e, t));
              },
              handleClickSku(e) {
                e.thinSkus.length <= 1 || this.fetchGoodsSku(e);
              },
              goDetail(e) {
                void 0 === e && (e = "");
                var t = "/pages/goods/detail/index?alias=" + e;
                this.$emit("to-goods-detail", { link: t });
              },
            },
            ud: !0,
          },
          h = s("9ZMt");
        t.default = h.default.component(p);
      },
    }
  )
);
