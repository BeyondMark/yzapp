"use strict";
var r = require("~/r");
r(
  "qRh8",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      qRh8: function (e, t, i) {
        i.r(t);
        var r = i("9ZMt"),
          n = i("EqB2"),
          o = i("lndF"),
          c = i("yDO/"),
          l = i("2Dtx"),
          { useTpx: s } = r.default.style,
          a = {
            mixins: [Object(n.a)({ optDesc: o.a })],
            computed: {
              useNewPriceRule() {
                var { compType: e } = this.opt;
                return (
                  !e ||
                  [
                    "goods",
                    "tag_list_top",
                    "groupon",
                    "ump_limitdiscount",
                    "bargain",
                    "ump_seckill",
                    "member_goods",
                    "period_buy",
                    "goods_recommend",
                    "recommend",
                  ].includes(e)
                );
              },
              newInt() {
                if (null === this.opt.price) return "-";
                if (isNaN(Math.floor(this.opt.price))) return this.opt.price;
                var { price: e } = this.opt,
                  t = this.isOriginPriceStyle(),
                  i = e
                    .replace(/(\d+)\.0+$/, "$1")
                    .replace(/(\d+\.\d)0+$/, "$1");
                return (e = this.formatPrice({
                  oldPrice: i,
                  priceIsOriginStyle: t,
                }));
              },
              int() {
                if (null === this.opt.price) return "-";
                var e = Math.floor(this.opt.price);
                if (isNaN(e)) return this.opt.price;
                e > 1e4 && ((e /= 1e4), (e = this.getDecimal(e + "").price));
                return e;
              },
              intSize() {
                return +this.opt.fontSize;
              },
              newDecimal() {
                var { price: e } = this.opt;
                if (null === e) return "";
                if (isNaN(Math.floor(this.opt.price))) return "";
                if (!this.isOriginPriceStyle() && e >= 1e4) return "万";
                var { decimal: t } = this.getNewDecimal(e);
                return t || "";
              },
              decimal() {
                var { price: e } = this.opt;
                if (null === e) return "";
                if (e > 1e4) return "万";
                var { decimal: t } = this.getDecimal(e);
                return t || "";
              },
              decimalSize() {
                var e = +this.opt.fontSize;
                return e >= 15 ? Math.ceil(0.7 * e) : e;
              },
              style() {
                var { style: e } = this.opt;
                return this.opt.delLine
                  ? Object(l.a)({
                      color: this.opt.color,
                      "font-size": this.opt.fontSize,
                      "line-height": s(+this.opt.fontSize),
                    }) + e
                  : e;
              },
              tagStyle() {
                return Object(l.a)({
                  "font-size": s(this.decimalSize),
                  "margin-right": s(this.opt.tagGap),
                });
              },
              intStyle() {
                return Object(l.a)({
                  "font-size": s(this.intSize),
                  "line-height": s(this.intSize),
                  "font-weight": this.opt.fontWeight,
                });
              },
              decimalStyle() {
                return Object(l.a)({
                  "font-size": s(this.decimalSize),
                  "font-weight": this.opt.decimalFontWeight,
                });
              },
            },
            methods: {
              getDecimal(e) {
                var [t = "", i = ""] = e.split("."),
                  r = i.replace(/0+$/, "").slice(0, 2),
                  n = r ? "." + r : "";
                return { price: t + n, decimal: n };
              },
              getNewDecimal(e, t) {
                void 0 === t && (t = !0);
                var [i = "", r = ""] = e.split("."),
                  n = r.replace(/0+$/, "").slice(0, 2),
                  o = n ? "." + n : "";
                return { price: t ? i + o : i, decimal: o };
              },
              isOriginPriceStyle() {
                var {
                    layoutOpt: e,
                    btnOpt: t,
                    itemIndex: i,
                    price: r,
                  } = this.opt,
                  { type: n = c.f.ONE } = e || {},
                  { type: o } = t || {};
                if (!r) return !0;
                var l = !!t,
                  s = "icon" === o,
                  a = r
                    .replace(/(\d+)\.0+$/, "$1")
                    .replace(/(\d+\.\d)0+$/, "$1").length,
                  p = (!l || s) && a < 10;
                return (
                  -1 !== [c.f.ONE].indexOf(n) ||
                  (c.f.HYBRID === n && i % 3 == 0) ||
                  (c.f.HYBRID === n && -1 !== [1, 2].indexOf(i % 3) && p) ||
                  (c.f.TWO === n && p)
                );
              },
              formatPrice(e) {
                var { oldPrice: t, priceIsOriginStyle: i } =
                  void 0 === e ? {} : e;
                return i || +t < 1e4
                  ? this.getNewDecimal(t, !1).price
                  : ("" + Math.round(+t / 100) / 100)
                      .replace(/(\d+)\.0+$/, "$1")
                      .replace(/(\d+\.\d)0+$/, "$1");
              },
            },
            ud: !0,
          };
        t.default = r.default.component(a);
      },
    }
  )
);
