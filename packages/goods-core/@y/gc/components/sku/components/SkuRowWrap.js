"use strict";
var r = require("~/r");
r(
  "KhsG",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "6us3": function (e, t, i) {
        i.d(t, "a", function () {
          return r;
        }),
          i.d(t, "b", function () {
            return u;
          });
        var n = i("Fcif");
        function r(e) {
          return (e || []).map((e) => {
            var t,
              { v: i } = e;
            if (e.largeImageMode) {
              var r = [],
                u = [];
              e.v.forEach((e, t) => {
                (Math.floor(t / 3) % 2 == 0 ? r : u).push(e);
              }),
                (i = [...r, ...u]),
                (t = r.length);
            }
            return Object(n.a)({}, e, { v: i, topLength: t });
          });
        }
        function u(e, t) {
          var i = (function (e) {
            var t = [],
              i = function (e) {
                var { v: i, kS: r, kId: u } = e;
                i &&
                  i.forEach((e) => {
                    (e.previewImgUrl || e.imgUrl) &&
                      t.push(Object(n.a)({}, e, { ks: r, kId: u }));
                  });
              };
            for (var r of e) i(r);
            return t;
          })(e.tree);
          return {
            imageList: i,
            imageUrls: i.map((e) =>
              e.defaultSkuImg ? t.picture + "#" + e.id : e.imgUrl
            ),
          };
        }
      },
      KhsG: function (e, t, i) {
        i.r(t);
        var n = i("Fcif"),
          r = i("+I+c"),
          u = i("Tr24"),
          s = i("gLTC"),
          c = i("/ko+"),
          o = i("xers"),
          a = i.n(o),
          l = i("9ZMt"),
          d = ["noUpdate", "priceMap"],
          k = {
            props: { opt: Object, selected: Object },
            data: () => ({
              labelData: {
                finalRow: "",
                hotRow: "",
                showPriceLabel: !1,
                showStockLabel: !1,
              },
              priceMap: {},
              updateTime: Date.now(),
            }),
            watch: {
              selected() {
                this.resolveSkuLabel(!1);
              },
              "opt.skuList": {
                handler() {
                  this.updateTime = Date.now();
                },
                deep: !0,
              },
            },
            created() {
              this.resolveSkuLabel(!0);
            },
            methods: {
              isInitShowPrice() {
                var { tree: e, multiSkuDecision: t = {} } = this.opt;
                return (
                  (null == t ? void 0 : t.skuDifferentialPrice) &&
                  (null == e ? void 0 : e.length) < 3 &&
                  Object(u.b)(e, t)
                );
              },
              onSelect(e) {
                var t;
                (this.selectValue = e), this.$emit("select", e);
                var { tree: i } = this.opt;
                null != (t = i.find((t) => t.kS === e.skuKeyStr)) &&
                  t.isShowPrice &&
                  Object(s.c)({
                    is_default: this.isInitShowPrice() ? 0 : 1,
                    show_floor: e.skuKeyStr,
                    sku_type: this.opt.skuScene,
                  });
              },
              onPreview(e) {
                this.$emit("preview", e);
              },
              resolveSkuLabel(e) {
                var { multiSkuDecision: t } = this.opt;
                if (!a()(t)) {
                  var i = e ? c.a : c.b,
                    {
                      activityType: u,
                      tree: s,
                      skuList: o,
                      isShowOldPrice: l,
                      scene: k,
                      skuScene: v,
                    } = this.opt,
                    f = i({
                      activityType: u,
                      multiSkuDecision: t,
                      tree: s,
                      list: o,
                      isShowOldPrice: l,
                      selected: this.selected,
                      selectValue: this.selectValue,
                      lastData: this.labelData,
                      isInit: e,
                      skuScene: v,
                    }),
                    { noUpdate: m, priceMap: h } = f,
                    S = Object(r.a)(f, d);
                  m ||
                    ((this.labelData = Object(n.a)({}, this.labelData, S)),
                    (this.priceMap = h));
                }
              },
            },
            ud: !0,
          };
        t.default = l.default.component(k);
      },
      Tr24: function (e, t, i) {
        i.d(t, "b", function () {
          return r;
        }),
          i.d(t, "a", function () {
            return u;
          });
        i("Fcif"), i("gLTC"), i("lCVF");
        var n = i("6us3");
        var r = (e, t) => {
          var i = null == e ? void 0 : e.length,
            { s1NoAffectPrice: n, s2NoAffectPrice: r } = t;
          return 1 === i ? !n : 2 === i ? (n && !r) || (!n && r) : void 0;
        };
        function u(e) {
          var { tree: t = [], multiSkuDecision: i, skuScene: r } = e;
          return Object(n.a)(t);
        }
      },
      TtQZ: function (e, t, i) {
        i.d(t, "g", function () {
          return s;
        }),
          i.d(t, "e", function () {
            return c;
          }),
          i.d(t, "d", function () {
            return o;
          }),
          i.d(t, "h", function () {
            return a;
          }),
          i.d(t, "b", function () {
            return l;
          }),
          i.d(t, "c", function () {
            return d;
          }),
          i.d(t, "f", function () {
            return k;
          }),
          i.d(t, "a", function () {
            return v;
          });
        var n = i("Fcif"),
          r = i("xers"),
          u = i.n(r);
        function s(e) {
          var t;
          return !(null == e || null == (t = e[0]) || !t.largeImageMode);
        }
        var c = (e, t) =>
            e.find((e) =>
              (function (e, t) {
                for (var { keys: i, values: n } = t, r = 0; r < i.length; r++) {
                  if (+e[i[r]] != +n[r]) return !1;
                }
                return !0;
              })(e, t)
            ) || null,
          o = (e, t) => {
            var { keys: i, values: n } = t;
            return i.reduce((t, i, r) => {
              if ("" !== n[i]) {
                var u = e.find((e) => e.kS === i);
                if (u && u.v) {
                  var s = u.v.find((e) => e.id === +n[r]);
                  s && ((s.skuKeyStr = u.kS), t.push(s));
                }
              }
              return t;
            }, []);
          },
          a = (e, t, i) => {
            if (0 === e.length) return !1;
            var { key: r, valueId: u } = i,
              s = Object(n.a)({}, t, { [r]: u }),
              c = Object.keys(s).filter((e) => "" !== s[e]),
              o = e.filter((e) =>
                c.every((t) => String(s[t]) === String(e[t]))
              ),
              a = o.reduce((e, t) => (e += t.stockNum), 0),
              l = o.some((e) => !0 !== e.customDisableSell);
            return a > 0 && l;
          },
          l = (e, t) =>
            ((null == e ? void 0 : e.keys) || []).map((i, n) => {
              var r = t.find((e) => e.kS === i),
                u = r.v.find((t) => t.id === e.values[n]);
              return {
                k_s: i,
                k: r.k,
                k_id: r.kId,
                v: null == u ? void 0 : u.name,
                v_id: null == u ? void 0 : u.id,
              };
            });
        function d(e) {
          return { keys: Object.keys(e), values: Object.values(e) };
        }
        function k(e) {
          var { sku: t, selectedSkuEntries: i } = e,
            { noneSku: n, tree: r } = t;
          return !(
            !n &&
            !((e, t) => {
              var i = t.values.filter(Boolean);
              return e.length === i.length;
            })(r, i)
          );
        }
        function v(e, t, i) {
          if ((void 0 === t && (t = {}), i && !u()(i))) return i;
          var n = {};
          return (
            e.tree.forEach((i) => {
              for (var r = i.kS, u = 0, s = 0; s < i.v.length; s++) {
                var c = i.v[s].id;
                if (
                  (a(e.list, n, { key: r, valueId: c }) &&
                    ((n[r] = c), (u += 1)),
                  u > 1)
                ) {
                  (n[r] = t[r] || ""), t[r] || delete n[r];
                  break;
                }
              }
            }),
            n
          );
        }
      },
      gLTC: function (e, t, i) {
        i.d(t, "e", function () {
          return l;
        }),
          i.d(t, "c", function () {
            return d;
          }),
          i.d(t, "f", function () {
            return k;
          }),
          i.d(t, "d", function () {
            return v;
          }),
          i.d(t, "b", function () {
            return f;
          }),
          i.d(t, "a", function () {
            return m;
          });
        var n = i("Fcif"),
          r = i("ONqW"),
          u = i("tS13"),
          s = i("gBZH"),
          c = i("Tr24"),
          o = i("TtQZ"),
          a = Object(r.a)();
        function l(e) {
          a.log({
            et: "view",
            ei: "show_price",
            en: "价格标签曝光",
            params: Object(n.a)({}, e, { component: "sku" }),
          });
        }
        function d(e) {
          a.log({
            et: "click",
            ei: "click_price",
            en: "价格标签点击",
            params: Object(n.a)({}, e, { component: "sku" }),
          });
        }
        function k(e, t) {
          a.log({
            et: "view",
            ei: "show_low_stock",
            en: "库存紧张标签曝光",
            params: Object(n.a)({}, e, { sku_type: t, component: "sku" }),
          });
        }
        function v(e, t, i, r, u) {
          var s,
            { id: c, title: o } = i,
            { selectedSkuValues: l, skuTree: d } = u,
            k = {
              num: t,
              goods_id: c,
              goods_name: o,
              sku_id: r,
              sku_name: (l || []).map((e) => {
                var t = d.find((t) => t.v.some((t) => t.id === e.id));
                return {
                  k: t.k,
                  k_id: t.kId,
                  k_s: t.kS,
                  v: e.name,
                  v_id: e.id,
                };
              }),
            };
          e < t
            ? ((s = k),
              a.log({
                et: "click",
                ei: "goods_detail_increase_goods_num",
                en: "商详增加商品数量",
                params: Object(n.a)({}, s),
              }))
            : e > t &&
              (function (e) {
                a.log({
                  et: "click",
                  ei: "goods_detail_decrease_goods_num",
                  en: "商详减少商品数量",
                  params: Object(n.a)({}, e),
                });
              })(k);
        }
        function f(e, t) {
          var {
              sku: i,
              goods: r,
              multiSkuDecision: l,
              selectedSkuComb: d,
              skuTree: k,
              selectedNum: v,
              selectedSkuEntries: f,
              event: m,
            } = t,
            h = (function (e, t, i) {
              var {
                  multiSkuDecision: r,
                  selectedSkuComb: u,
                  skuTree: s,
                  selectedNum: a,
                  selectedSkuEntries: l,
                  event: d,
                } = i,
                k = {
                  goods_id: null == t ? void 0 : t.id,
                  goods_name: null == t ? void 0 : t.title,
                  goods_num: a,
                  sku_id:
                    (null == u ? void 0 : u.id) ||
                    (null == u ? void 0 : u.skuId) ||
                    "",
                  sku_name: [],
                  activity_name: d.activityName,
                };
              if (e.noneSku) return k;
              var { hotSku: v, stockHotSku: f, skuDifferentialPrice: m } = r,
                h = 2,
                S = 2,
                b = 2;
              if (v) h = +v.s1 == +(null == u ? void 0 : u.s1) ? 0 : 1;
              else if (f) {
                var p,
                  g = null == (p = s[s.length - 1]) ? void 0 : p.kS;
                S = +f[g] == +(null == u ? void 0 : u[g]) ? 0 : 1;
              }
              return (
                m &&
                  (Object(c.b)(s, r)
                    ? (b = 0)
                    : s.find((e) => e.isShowPrice) && (b = 1)),
                Object(n.a)({}, k, {
                  isshow_hot: h,
                  isshow_low: S,
                  is_show: b,
                  sku_name: Object(o.b)(l, s),
                })
              );
            })(i, r, {
              multiSkuDecision: l,
              selectedSkuComb: d,
              skuTree: k,
              selectedNum: v,
              selectedSkuEntries: f,
              event: m,
            }),
            { skuScene: S, auth: b } = e;
          if (S && h) {
            var p,
              g = {
                et: "click",
                params: Object(n.a)({}, h, { component: "sku" }),
              };
            S === u.c.BUY
              ? (g = Object(n.a)({}, g, {
                  ei: "click_order",
                  en: "点击确认下单",
                }))
              : S === u.c.ADD_CART &&
                (g = Object(n.a)({}, g, {
                  ei: "click_add",
                  en: "点击确认加购",
                })),
              a.log(g),
              b &&
                b.authScene === s.a.POINTS_BUY &&
                ((p = h),
                a.log({
                  et: "click",
                  ei: "exchange_goods_by_score",
                  en: "积分兑换商品",
                  params: Object(n.a)({}, p),
                }));
          }
        }
        function m(e) {
          a.log({
            et: "custom",
            ei: "birthday_relation_net_msg",
            en: "生日关系网祝福语",
            params: Object(n.a)({}, e),
          });
        }
      },
    }
  )
);
