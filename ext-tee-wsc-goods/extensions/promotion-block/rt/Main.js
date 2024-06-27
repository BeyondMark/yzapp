"use strict";
var r = require("~/r");
r(
  "u8yC",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    u8yC: function (o, t, e) {
      e.r(t);
      var s = e("Fcif"),
        i = e("VmHG"),
        r = e("YeA1"),
        c = e("Shdd"),
        u = function (o) {
          return o >= 1e4 ? (o / 1e4).toFixed(1) + "万" : o;
        },
        a = {
          getters: {
            goodsStockOpt() {
              var o,
                {
                  goodsBaseInfo: t,
                  goodsPriceInfo: e,
                  multistore: s,
                  shopConfig: i = {},
                  distribution: { postage: r },
                } = this,
                { isOutlink: c, isHotel: a } = t,
                { soldNum: n, stockNum: d, hideStock: g } = e,
                { showBuyRecord: l, goodsDetailSales: h } = i,
                f = s.id || 0,
                m = (function (o) {
                  var { goodsBaseInfo: t, goodsPriceInfo: e, storeId: s } = o,
                    { isHotel: i } = t,
                    { stockNum: r, hideStock: c } = e;
                  return r > 0 && !c && !i && !(s > 0 && 0 === r);
                })({ goodsBaseInfo: t, goodsPriceInfo: e, storeId: f }),
                p = (function (o) {
                  var { shopConfig: t, goodsPriceInfo: e } = o,
                    { showBuyRecord: s, goodsDetailSales: i } = t,
                    { soldNum: r } = e,
                    c = s ? { show: 1, limit: !1 } : { show: 0, limit: !1 };
                  if (i)
                    try {
                      c = JSON.parse(i) || c;
                    } catch (o) {}
                  if (!c) return r > 0;
                  var { show: u = 0, limit: a = !1, limit_num: n = 0 } = c;
                  return 0 != +u && (a ? r >= n : r > 0);
                })({ shopConfig: i, goodsPriceInfo: e });
              return {
                postage: r,
                storeId: f,
                soldNum: n,
                stockNum: d,
                hideStock: g,
                isOutlink: c,
                isHotel: a,
                showBuyRecord: l,
                goodsDetailSales: h,
                showStockNum: m,
                showSoldNum: p,
                showBlock: !(c || !(r || m || p)),
                soldNumText: ((o = n), o > 99999 ? "10万+" : o),
                stockNumText: u(d),
              };
            },
          },
        },
        n = {
          getters: {
            packageBuy() {
              var { orderPromotion: o = [] } = this.promotionActivity,
                t = o.filter((o) => "packageBuy" === o.key);
              if (t.length) {
                var e = { url: "", goodsList: [] };
                return (
                  t.forEach((o) => {
                    (e.url = o.url), e.goodsList.push(o.goodsModel);
                  }),
                  e
                );
              }
              return null;
            },
            goodsPackageBuyOpt() {
              return { show: !!this.packageBuy, packageBuy: this.packageBuy };
            },
          },
        },
        d = e("9ZMt");
      var g = [a, n].reduce((o, t) => Object(c.c)(o, t), {});
      function l(o) {
        return Object(i.a)({
          state: () =>
            Object(s.a)(
              {},
              (function () {
                var {
                  distribution: o = {},
                  goodsBaseInfo: t = {},
                  goodsPriceInfo: e = {},
                  shopConfig: s = {},
                  multistore: i = {},
                  umpActivityData: { promotionActivity: r = {} } = {},
                } = d.default.getGlobal("GOODS_DATA") || {};
                return {
                  goodsBaseInfo: t,
                  distribution: o,
                  shopConfig: s,
                  multistore: i,
                  goodsPriceInfo: e,
                  promotionActivity: r,
                  themeCSS: "",
                  pageStyleCSS: "",
                };
              })(),
              g.state
            ),
          getters: Object(s.a)({}, g.getters),
          actions: Object(s.a)({}, g.getActions(o)),
        });
      }
      var h = {
        data() {
          return (
            (this.store = l(this.ctx)),
            Object(i.e)(this, ["goodsStockOpt"]),
            Object(i.c)(this, [
              "goodsBaseInfo",
              "distribution",
              "shopConfig",
              "multistore",
              "goodsPriceInfo",
              "promotionActivity",
              "marketing",
            ]),
            Object(s.a)(
              {},
              Object(i.d)(this, ["goodsStockOpt", "goodsPackageBuyOpt"]),
              { showPackageBuy: !0 }
            )
          );
        },
        created() {
          Object(r.e)(this, {
            showPackageBuy: (o) => {
              this.showPackageBuy = o;
            },
          });
        },
      };
      t.default = d.default.component(h);
    },
  })
);
