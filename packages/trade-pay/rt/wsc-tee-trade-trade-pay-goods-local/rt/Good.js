"use strict";
var r = require("~/r");
r(
  "YZeQ",
  Object.assign({}, require("~/v.js").modules, {
    "5Mqe": function (e, r, t) {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = function (e) {
          if (!(0, u.default)(e)) return [];
          return e.reduce(function (e, r) {
            return (e = [].concat(e, r));
          }, []);
        });
      var o,
        u = (o = t("ajWA")) && o.__esModule ? o : { default: o };
      e.exports = r.default;
    },
    YZeQ: function (e, r, t) {
      t.r(r);
      var o = t("YeA1"),
        u = t("5Mqe"),
        l = t.n(u);
      function a(e) {
        if (!e) return "";
        var r = (e) => "¥" + (Math.abs(e) / 100).toFixed(2);
        return e > 0 ? "" + r(e) : "-" + r(e);
      }
      var n = {
          props: { good: { type: Object, default: () => ({}) } },
          data: () => ({ themeColors: {} }),
          computed: {
            themeStyle() {
              var { themeColors: e } = this,
                r = [
                  "--card-price-color:#969799",
                  "--card-origin-price-color:#969799",
                ];
              return (
                r.push("--card-price-color: var(--icon, #323233)"),
                r.push("--tag-danger-color:" + e.general),
                r.join(";")
              );
            },
            text() {
              var e, r, t;
              return (
                (null == (e = this.good) ||
                null == (r = e.combo) ||
                null == (t = r.subComboList)
                  ? void 0
                  : t
                      .map((e) => {
                        var r,
                          t,
                          {
                            num: o,
                            title: u,
                            sku: n,
                            properties: i,
                            addPrice: s,
                          } = e;
                        if (
                          (i &&
                            ((t =
                              null == i
                                ? void 0
                                : i.map((e) => {
                                    var r;
                                    return null == e ||
                                      null == (r = e.propValueList)
                                      ? void 0
                                      : r.map(
                                          (e) =>
                                            "" +
                                            (null == e
                                              ? void 0
                                              : e.propValueName) +
                                            a(null == e ? void 0 : e.price)
                                        );
                                  })),
                            (t = l()(t)
                              .filter((e) => e)
                              .join(";"))),
                          n || (null != (r = t) && r.length))
                        ) {
                          var d, c, p;
                          if (n && null != (d = t) && d.length)
                            return u + "（" + n + a(s) + ";" + t + "）x" + o;
                          if (n && (null == (c = t) || !c.length))
                            return u + "（" + n + a(s) + "）x" + o;
                          if (!n && null != (p = t) && p.length)
                            return u + "（" + t + "）x" + o;
                        }
                        return u + " x" + o;
                      })
                      .filter((e) => e)) || []
              );
            },
            taxTips() {
              var {
                  goodsTax: e = 0,
                  postageTax: r = 0,
                  showTax: t,
                  num: o,
                  haitao: u = 0,
                } = this.good,
                l = "";
              if (1 != +u) l = "";
              else if (t) {
                l = "进口税(含运费税款)：¥ " + ((e * o + r) / 100).toFixed(2);
              } else l = "进口税(含运费税款)：商品已含税";
              return l;
            },
            tagStyle() {
              var { themeColors: e } = this;
              return {
                backgroundColor: e["ump-tag-bg"],
                color: e["ump-tag-text"],
              };
            },
            goodsTips() {
              var e = [];
              return this.good.expressPayMode && e.push("运费到付"), e;
            },
          },
          created() {
            Object(o.b)(this, ["themeColors"]);
          },
          methods: {
            showGoodsMessage() {
              this.$emit("message");
            },
          },
          ud: !0,
        },
        i = t("9ZMt");
      r.default = i.default.component(n);
    },
  })
);
