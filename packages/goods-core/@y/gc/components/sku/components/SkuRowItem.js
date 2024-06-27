"use strict";
var r = require("~/r");
r(
  "vl5V",
  Object.assign({}, require("~/v.js").modules, {
    TtQZ: function (e, t, u) {
      u.d(t, "g", function () {
        return l;
      }),
        u.d(t, "e", function () {
          return a;
        }),
        u.d(t, "d", function () {
          return n;
        }),
        u.d(t, "h", function () {
          return o;
        }),
        u.d(t, "b", function () {
          return h;
        }),
        u.d(t, "c", function () {
          return d;
        }),
        u.d(t, "f", function () {
          return k;
        }),
        u.d(t, "a", function () {
          return c;
        });
      var i = u("Fcif"),
        s = u("xers"),
        r = u.n(s);
      function l(e) {
        var t;
        return !(null == e || null == (t = e[0]) || !t.largeImageMode);
      }
      var a = (e, t) =>
          e.find((e) =>
            (function (e, t) {
              for (var { keys: u, values: i } = t, s = 0; s < u.length; s++) {
                if (+e[u[s]] != +i[s]) return !1;
              }
              return !0;
            })(e, t)
          ) || null,
        n = (e, t) => {
          var { keys: u, values: i } = t;
          return u.reduce((t, u, s) => {
            if ("" !== i[u]) {
              var r = e.find((e) => e.kS === u);
              if (r && r.v) {
                var l = r.v.find((e) => e.id === +i[s]);
                l && ((l.skuKeyStr = r.kS), t.push(l));
              }
            }
            return t;
          }, []);
        },
        o = (e, t, u) => {
          if (0 === e.length) return !1;
          var { key: s, valueId: r } = u,
            l = Object(i.a)({}, t, { [s]: r }),
            a = Object.keys(l).filter((e) => "" !== l[e]),
            n = e.filter((e) => a.every((t) => String(l[t]) === String(e[t]))),
            o = n.reduce((e, t) => (e += t.stockNum), 0),
            h = n.some((e) => !0 !== e.customDisableSell);
          return o > 0 && h;
        },
        h = (e, t) =>
          ((null == e ? void 0 : e.keys) || []).map((u, i) => {
            var s = t.find((e) => e.kS === u),
              r = s.v.find((t) => t.id === e.values[i]);
            return {
              k_s: u,
              k: s.k,
              k_id: s.kId,
              v: null == r ? void 0 : r.name,
              v_id: null == r ? void 0 : r.id,
            };
          });
      function d(e) {
        return { keys: Object.keys(e), values: Object.values(e) };
      }
      function k(e) {
        var { sku: t, selectedSkuEntries: u } = e,
          { noneSku: i, tree: s } = t;
        return !(
          !i &&
          !((e, t) => {
            var u = t.values.filter(Boolean);
            return e.length === u.length;
          })(s, u)
        );
      }
      function c(e, t, u) {
        if ((void 0 === t && (t = {}), u && !r()(u))) return u;
        var i = {};
        return (
          e.tree.forEach((u) => {
            for (var s = u.kS, r = 0, l = 0; l < u.v.length; l++) {
              var a = u.v[l].id;
              if (
                (o(e.list, i, { key: s, valueId: a }) && ((i[s] = a), (r += 1)),
                r > 1)
              ) {
                (i[s] = t[s] || ""), t[s] || delete i[s];
                break;
              }
            }
          }),
          i
        );
      }
    },
    vl5V: function (e, t, u) {
      u.r(t);
      var i = u("Fcif"),
        s = u("KEq0"),
        r = u.n(s),
        l = u("TtQZ"),
        a = u("lCVF"),
        n = u.n(a),
        o = u("9ZMt"),
        h = u("Nvad"),
        d = {
          props: {
            updateTime: Number,
            skuValue: { type: Object, default: () => ({}) },
            skuKeyStr: String,
            largeImageMode: Boolean,
            index: Number,
            topLength: Number,
            disableSoldoutSku: { type: Boolean, default: !0 },
            theme: Object,
            multiSkuDecision: { type: Object, default: () => ({}) },
            selectedSku: { type: Object, default: () => ({}) },
            price: { type: Number, default: 0 },
            labelData: { type: Object, default: () => ({}) },
          },
          logicData() {
            return { skuList: this.getSkuList() };
          },
          computed: {
            showSoldOutTag() {
              return (
                !(!this.skuList.length || !1 !== this.disableSoldoutSku) &&
                !Object(l.h)(this.skuList, this.selectedSku, {
                  key: this.skuKeyStr,
                  valueId: this.skuValue.id,
                })
              );
            },
            choosable() {
              return (
                !1 === this.disableSoldoutSku ||
                (0 !== this.skuList.length &&
                  Object(l.h)(this.skuList, this.selectedSku, {
                    key: this.skuKeyStr,
                    valueId: this.skuValue.id,
                  }))
              );
            },
            lastStyle() {
              return this.largeImageMode &&
                (this.index + 1) % this.topLength == 0
                ? "margin-right: 0px;"
                : "";
            },
            showImage() {
              return this.skuImage && !this.skuValue.defaultSkuImg;
            },
            skuImage() {
              return this.skuValue.imgUrl
                ? r()(this.skuValue.imgUrl, "small")
                : "";
            },
            choosed() {
              return this.skuValue.id === +this.selectedSku[this.skuKeyStr];
            },
            hotLabel() {
              var { hotSku: e } = this.multiSkuDecision,
                t = this.labelData.hotRow === this.skuKeyStr;
              return (
                this.choosable && t && this.skuValue.id === e[this.skuKeyStr]
              );
            },
            stockLabel() {
              var { showStockLabel: e, finalRow: t } = this.labelData,
                { stockHotSku: u } = this.multiSkuDecision,
                i = e && t === this.skuKeyStr;
              return (
                this.choosable && i && this.skuValue.id === u[this.skuKeyStr]
              );
            },
            itemPrice() {
              var { finalRow: e, showPriceLabel: t } = this.labelData;
              return e === this.skuKeyStr && t && this.choosable
                ? Object(h.b)(n()(this.price || 0))
                : "";
            },
          },
          watch: {
            updateTime() {
              this.skuList = this.getSkuList();
            },
          },
          methods: {
            onSelect() {
              if (this.choosable) {
                var e = Object(i.a)({}, this.skuValue, {
                  skuKeyStr: this.skuKeyStr,
                });
                this.$emit("select", e);
              }
            },
            onPreview() {
              this.$emit("preview", { type: "row-item", id: this.skuValue.id });
            },
            getSkuList: () => o.default.getGlobal("_goodsCommonSkuList") || [],
          },
          ud: !0,
        };
      t.default = o.default.component(d);
    },
  })
);
