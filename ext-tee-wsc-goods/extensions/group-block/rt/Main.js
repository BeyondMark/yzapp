"use strict";
var r = require("~/r");
r(
  "1Wce",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "1Wce": function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        a = s("YeA1"),
        r = s("VmHG"),
        o = s("Shdd"),
        c = s("VfJb"),
        d = {
          getters: {
            goodsServiceOpt() {
              var e = {
                  shopConfig: this.shopConfig,
                  env: this.env,
                  payWays: this.payWays,
                  goodsMetaInfo: this.goodsMetaInfo,
                  goodsBaseInfo: this.goodsBaseInfo,
                  goodsActivity: this.goodsActivity,
                  supplier: this.supplier,
                  distribution: this.distribution,
                  staticConfig: this.staticConfig,
                  themeCSS: this.themeCSS,
                },
                t = Object(c.a)(e),
                s = t.slice(0, 3) || [];
              return Object(i.a)({}, e, {
                serviceDescList: t,
                serviceBarList: s,
                serviceBarTitle: s.map((e) => e.tag).join(" · "),
              });
            },
          },
        },
        u = s("uzJ0"),
        n = s.n(u),
        h = s("KEq0"),
        l = s.n(h),
        g = s("q29p"),
        v = s.n(g),
        p = s("NHEX"),
        S = s.n(p),
        k = s("US/N"),
        f = {
          state: {
            selectedSku: {},
            selectedProp: {},
            priceBarList: [],
            activeDateSkuId: 0,
          },
          getters: {
            showSkuBar() {
              var { virtualTicket: e, periodbuy: t } = this.goodsActivity,
                { hideGoodsBottom: s } = this.env;
              if (t) return !this.pageFeature.showForbidBuyBtn;
              if (s) return !1;
              var { itemSalePropList: i = [] } = this.goodsBaseInfo,
                { tree: a = [] } = this.goodsSkuData.goods || {};
              return (
                a.length + i.length > 0 ||
                (null == e ? void 0 : e.isPriceCalendar)
              );
            },
            isSkuBarDisabled() {
              return !!this.shopConfig.isCloseBusiness;
            },
            skuBarDesc() {
              var { skuExtraData: e = {} } = this;
              return (
                "共" + e.barPictureCount + "种" + e.barPictureName + "可选"
              );
            },
            skuExtraData() {
              if (!this.showSkuBar) return {};
              var { selectedSku: e, selectedProp: t } = this,
                { tree: s = [] } = this.goodsSkuData.goods || {},
                { itemSalePropList: a = [], pictures: r } = this.goodsBaseInfo,
                o = r || [],
                c = [],
                d = "",
                u = s[0] || {},
                n = 0;
              S()(u, "v.0.imgUrl", "") &&
                ((c = (u.v || [])
                  .filter((e) => (n++, !e.defaultSkuImg))
                  .map((e) => l()(e.imgUrl || o, "small"))),
                (d = u.k));
              var h = s.reduce((e, t) => Object(i.a)({}, e, { [t.kS]: t }), {}),
                g = [],
                v = Object.keys(e);
              v.forEach((t) => {
                var s = h[t] || null;
                if (e[t] && s) {
                  for (var i = e[t], a = null, r = 0; r < s.v.length; r++)
                    if (s.v[r].id === +i) {
                      a = s.v[r];
                      break;
                    }
                  g.push({ id: s.kId, name: s.k, value: a });
                }
              }),
                (e && 0 !== v.length) ||
                  (g = s.map((e) => ({ id: e.kId, name: e.k, value: null })));
              var p = [];
              return (
                a.forEach((e) => {
                  var s = [];
                  t[e.kId] &&
                    t[e.kId].length > 0 &&
                    (s = (e.v || []).filter(
                      (s) => t[e.kId].indexOf(s.id) > -1
                    )),
                    p.push({ id: e.kId, name: e.k, value: s });
                }),
                {
                  barPictures: c.slice(0, 5),
                  barPictureName: d,
                  barPictureCount: n,
                  selectedSkuTree: g,
                  selectedPropList: p,
                }
              );
            },
            skuBarInfo() {
              if (!this.showSkuBar) return {};
              var { selectedSkuTree: e = [], selectedPropList: t = [] } =
                  this.skuExtraData,
                { tree: s = [] } = this.goodsSkuData.goods || {},
                i = [],
                a = [],
                r = !0,
                o = !1;
              (e.length ? e : s.map((e) => ({ name: e.k }))).forEach((e) => {
                e.value
                  ? (i.push(e.value.name), (o = !0))
                  : (a.push(e.name), (r = !1));
              }),
                t.forEach((e) => {
                  e.value && e.value.length > 0
                    ? (i.push(...e.value.map((e) => e.name)), (o = !0))
                    : (a.push(e.name), (r = !1));
                });
              var c = "";
              return (
                (c = o ? i.join("；") : a.join("；")),
                { isAnySelected: o, isAllSelected: r, showText: c }
              );
            },
            SelectSkuOpt() {
              var { isPriceCalendar: e = !1 } =
                  this.goodsActivity.virtualTicket || {},
                { showForbidBuyBtn: t } = this.pageFeature,
                s = !t && e && this.priceBarList.length;
              return {
                show: this.showSkuBar,
                showPriceCalendarBar: s,
                isSkuBarDisabled: this.isSkuBarDisabled,
                priceBarList: this.priceBarList,
                skuExtraData: this.skuExtraData,
                skuBarDesc: this.skuBarDesc,
                skuBarInfo: this.skuBarInfo,
              };
            },
          },
          getActions: () => ({
            formatDateList(e) {
              return (e || [])
                .map((e) => {
                  var t = new Date(e.stockDate),
                    s = t.getMonth() + 1,
                    a = s > 9 ? s : "0" + s,
                    r = t.getDate(),
                    o =
                      void 0 === e.activityPrice
                        ? e.originPrice
                        : e.activityPrice;
                  return Object(i.a)({}, e, {
                    day: a + "-" + (r > 9 ? r : "0" + r),
                    price: "¥" + n()(o),
                    selected: e.dateSkuId === this.activeDateSkuId,
                    currentPrice: o,
                  });
                })
                .filter((e) => e.currentPrice);
            },
            updateCalendar(e) {
              var { dateSkuId: t, nearDateList: s } = e;
              (this.activeDateSkuId = t),
                (this.priceBarList = this.formatDateList(s));
            },
            onSkuSelected(e) {
              var { selectedSkuComb: t, pluginsResult: s = {} } = e;
              (this.selectedSku = t || {}),
                s.ecard && this.updateCalendar(s.ecard),
                s.goodsAttributes && (this.selectedProp = s.goodsAttributes);
            },
            fetchNearDateList(e) {
              var t, s;
              if (
                null == e || null == (t = e.virtualTicket)
                  ? void 0
                  : t.isPriceCalendar
              ) {
                var i = new Date();
                i.setMonth(i.getMonth() + 4), i.setDate(0);
                var { alias: a, id: r } = this.goodsBaseInfo,
                  o = {
                    alias: a,
                    activityType: 0,
                    activityAlias: "",
                    itemId: r,
                    kdtId: this.kdtId,
                    beginDate: v()(new Date(), "YYYY-MM-DD"),
                    endDate: v()(i, "YYYY-MM-DD"),
                    itemPreOrderTime:
                      null == e || null == (s = e.virtualTicket)
                        ? void 0
                        : s.itemPreOrderTime,
                  };
                Object(k.default)({
                  path: "/wscgoods/getNearDateList.json",
                  data: o,
                }).then((e) => {
                  this.priceBarList = this.formatDateList(
                    e.nearlyFourDayMarketableDate
                  );
                });
              }
            },
          }),
        },
        D = {
          getters: {
            ServiceCategoryOpt() {
              return {
                goodsBaseInfo: this.goodsBaseInfo,
                shopConfig: this.shopConfig,
                themeVars: this.themeCSS + this.pageStyleCSS,
              };
            },
          },
        },
        m = s("9ZMt");
      var b = [d, f, D].reduce((e, t) => Object(o.c)(e, t), {});
      function B(e) {
        return Object(r.a)({
          state: () =>
            Object(i.a)(
              {},
              (function () {
                var {
                  shopConfig: e = {},
                  payWays: t = {},
                  goodsMetaInfo: s = {},
                  goodsBaseInfo: i = {},
                  goodsActivity: a = {},
                  supplier: r = {},
                  distribution: o = {},
                  staticConfig: c = {},
                  goodsSkuData: d = {},
                  pageFeature: u = {},
                  env: n = {},
                  kdtId: h = 0,
                } = m.default.getGlobal("GOODS_DATA") || {};
                return {
                  shopConfig: e,
                  env: n,
                  payWays: t,
                  goodsMetaInfo: s,
                  goodsBaseInfo: i,
                  goodsActivity: a,
                  supplier: r,
                  distribution: o,
                  staticConfig: c,
                  goodsSkuData: d,
                  pageFeature: u,
                  kdtId: h,
                  pageStyleCSS: "",
                  themeCSS: "",
                };
              })(),
              b.state
            ),
          getters: Object(i.a)({}, b.getters),
          actions: Object(i.a)({}, b.getActions(e)),
        });
      }
      var I = {
        data() {
          return (
            (this.store = B(this.ctx)),
            Object(r.c)(this, [
              "shopConfig",
              "env",
              "payWays",
              "goodsMetaInfo",
              "goodsBaseInfo",
              "goodsActivity",
              "distribution",
              "staticConfig",
              "goodsSkuData",
              "pageFeature",
              "kdtId",
            ]),
            Object(i.a)(
              {},
              Object(r.d)(this, [
                "goodsServiceOpt",
                "SelectSkuOpt",
                "ServiceCategoryOpt",
                "kdtId",
              ]),
              { skuSelected: {}, showServiceBar: !0, goodsServiceOpts: {} }
            )
          );
        },
        watch: {
          goodsServiceOpt: {
            handler(e) {
              e &&
                ((this.goodsServiceOpts = e),
                (this.ctx.data.serviceDescList = e.serviceDescList));
            },
            immediate: !0,
          },
        },
        created() {
          Object(a.d)(this, {
            "sku:selected": (e) => {
              this.store.onSkuSelected(e);
            },
          }),
            Object(a.b)(this, {
              goodsActivity: (e) => this.store.fetchNearDateList(e),
            }),
            Object(a.e)(this, {
              setShowServiceBar: (e) => {
                this.showServiceBar = !!e;
              },
              setServiceDescList: (e) => {
                (this.ctx.data.serviceDescList = e),
                  e.length > 0 && (this.goodsServiceOpts.serviceDescList = e);
              },
            });
        },
        methods: {
          onSkuShow() {
            this.ctx.event.emit("sku:show");
          },
        },
      };
      t.default = m.default.component(I);
    },
  })
);
