"use strict";
var r = require("~/r");
r(
  "GION",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    GION: function (t, e, i) {
      i.r(e);
      var r = i("Fcif"),
        a = i("9ZMt"),
        o = i("KrsW"),
        l = i("mztD"),
        n = i("/XVY"),
        p = {
          ONE: "one",
          TWO: "two",
          THREE: "three",
          SWIPE: "swipe",
          HYBRID: "hybrid",
          LIST: "list",
        },
        s = { DIAGRAM: "0", BEFORE_THE_TITLE: "1", HIDE: "2" },
        c = i("/3Ts"),
        u = Object(n.a)({
          type: { default: "border" },
          layout: { default: "vertical" },
          align: { default: "left" },
          isHighQualityImage: { default: !1 },
          imageQuality: { default: "" },
          cardStyle: { type: String, default: "" },
          corner: { default: "rect" },
          imgHeight: {},
          layoutType: { default: "one" },
          itemIndex: { default: 0 },
          isTagsShow: { default: !1 },
          useTagsSlot: { default: !1 },
          textClass: { type: String, default: "" },
          operaVend: { type: Boolean, default: !1 },
          compType: { default: "" },
          theme: { default: "" },
          hybridSmall: { default: !1 },
          skeleton: { type: Boolean, default: !1 },
          queryExtra: { type: Object, default: () => {} },
          usePriceSlot: { type: Boolean, default: !1 },
        }),
        d = i("2Dtx"),
        m = i("yDO/"),
        { useTpx: g } = a.default.style,
        O = {
          data: () => ({ itemImageLoad: !1 }),
          computed: {
            itemImageShowPre() {
              var t;
              return !(
                null == this ||
                null == (t = this.imgOpt) ||
                !t.needPreload ||
                this.itemImageLoad
              );
            },
            itemImageUrl() {
              var {
                src: t,
                useCdn: e,
                useGoodsCoverImage: i,
                componentsPictureOpt: r,
              } = this.imgOpt;
              return i && r && r.src
                ? Object(l.a)(r.src, "!750x0.jpg")
                : void 0 === t
                ? ""
                : e
                ? Object(l.a)(t, "!400x0.jpg")
                : t;
            },
            itemImageClass() {
              return "circle" === this.opt.corner &&
                "circle" === this.imgOpt.corner
                ? "circle"
                : "rect";
            },
            itemImageSkeletonShow() {
              return this.imgOpt.useSkeleton ? "photo-skeleton-bg" : "";
            },
            itemImageMode() {
              var { fill: t, useGoodsCoverImage: e } = this.imgOpt;
              return "width" === t || e
                ? "widthFix"
                : "cover" === t
                ? "aspectFill"
                : "aspectFit";
            },
            itemImageStyle() {
              var { layoutType: t, layout: e, imgHeight: i } = this.opt,
                {
                  ratio: r,
                  fill: a,
                  useGoodsCoverImage: o,
                  componentsPictureOpt: l,
                } = this.imgOpt;
              if ("width" === a && !o) return "";
              var n = r;
              o &&
                l &&
                (l.src && l.customImageMode
                  ? (n = l.customImageMode)
                  : l.mainImageMode && (n = l.mainImageMode));
              var [p, s] = n.split("-"),
                c = {};
              return (
                (t === m.f.ONE && "horizontal" === e) ||
                  (c["padding-top"] = (s / p) * 100 + "%"),
                "number" == typeof i && ((c.height = g(i)), (c.width = g(i))),
                Object(d.a)(c)
              );
            },
            itemImageMaskStyle() {
              var t = "",
                { mask: e, soldOutGoodsImg: i, maskIconSize: r } = this.imgOpt;
              return (
                "soldout" === e && i && (t = i),
                Object(d.a)({
                  "background-size": g(100 * r) + " " + g(100 * r),
                  "background-color": t || "rgba(0, 0, 0, 0.3)",
                  "background-image": t
                    ? "url('" + t + "')"
                    : "https://img01.yzcdn.cn/v2/image/wsc-wap/showcase/soldout.png",
                })
              );
            },
            itemImageCornerMarkIsIcon() {
              var { cornerMark: t } = this.imgOpt;
              return (
                -1 !== ["new-arrival", "hot-sale", "new", "hot"].indexOf(t)
              );
            },
            itemImageCornerMarkStyle() {
              return Object(d.a)(
                Object(r.a)(
                  { "background-image": "url(" + this.imgOpt.cornerMark + ")" },
                  this.imgOpt.customCornerMaskStyle
                )
              );
            },
            couponData() {
              var { imgOpt: t } = this;
              return Object(r.a)({}, t.imageSlotOpt, { ratio: t.ratio });
            },
          },
          methods: {
            itemImageLoadSuccess() {
              this.itemImageLoad = !0;
            },
          },
        },
        h = {
          src: null,
          ratio: "1-1",
          fill: "cover",
          radius: 0,
          mask: !1,
          maskIconSize: 1,
          cornerMark: !1,
          cornerMarkSize: 38,
          customCornerMaskStyle: {},
          corner: "rect",
          useCdn: !0,
          showKeyLabel: !1,
          keyLabel: "",
          useSkeleton: !1,
          needPreload: "",
          preImg: "",
          useImgSlot: !1,
          imageSlotOpt: {},
          useGoodsCoverImage: !1,
          componentsPictureOpt: null,
        },
        v = i("Pz1p"),
        { useTpx: y } = a.default.style;
      function b(t) {
        if (t) {
          var {
              textAlign: e = "left",
              bgColor: i = "#fff",
              hMargin: r = 16,
              pageMargin: a = 0,
              radius: o,
              titleLineHeight: l,
              marginTop: n,
            } = t,
            p = {
              "background-color": i,
              "text-align": e,
              padding: "0 " + y(r),
              margin: "0 " + y(a),
              "border-radius": o,
            };
          return (
            l && (p["line-height"] = y(l)),
            n && (p["margin-top"] = y(n)),
            {
              class: "\n      cap-title\n      cap-title--" + e + "\n    ",
              style: Object(d.a)(p),
            }
          );
        }
      }
      function S(t) {
        if (t) {
          var { vMargin: e = 16 } = t;
          return Object(d.a)({ padding: y(e) + " 0" });
        }
      }
      function f(t, e) {
        if ((void 0 === e && (e = {}), t)) {
          var {
            titleFontSize: i = 16,
            titleFontWeight: a = 500,
            titleColor: o = "#323233",
            titleExtraStyle: l,
            titleLines: n = 2,
          } = Object(r.a)({}, t, e);
          return (function (t, e, i, a, o) {
            void 0 === o && (o = {});
            var l = o;
            return (
              l.height &&
                "number" == typeof l.height &&
                (l = Object(r.a)({}, l, { height: y(l.height) })),
              Object(d.a)(
                Object(r.a)(
                  {
                    "font-size": y(t),
                    "font-weight": e,
                    "-webkit-line-clamp": i,
                    color: a,
                  },
                  l
                )
              )
            );
          })(i, a, n, o, l);
        }
      }
      var I = {
          computed: {
            titleWrapCls() {
              var t;
              return b(null == (t = this.opt) ? void 0 : t.titleOpt);
            },
            titleWrapStyle() {
              var t;
              return S(null == (t = this.opt) ? void 0 : t.titleOpt);
            },
            titleTags() {
              var t;
              return (function (t) {
                if (t) {
                  var { titleTags: e } = t;
                  return e && 0 !== e.length
                    ? e.map(
                        (t) => (
                          "text" === t.type &&
                            ((t.colorStyle = Object(d.a)({ color: t.color })),
                            (t.bgStyle = t.bgColor
                              ? Object(d.a)({ "background-color": t.bgColor })
                              : "")),
                          t
                        )
                      )
                    : [];
                }
              })(null == (t = this.opt) ? void 0 : t.titleOpt);
            },
            titleStyle() {
              var t, e, i, r;
              return null != (t = this.opt) &&
                null != (e = t.imgOpt) &&
                e.useGoodsCoverImage
                ? f(null == (r = this.opt) ? void 0 : r.titleOpt, {
                    titleLines: 2,
                    titleExtraStyle: { "line-height": " 22px" },
                  })
                : f(null == (i = this.opt) ? void 0 : i.titleOpt);
            },
            titleEllipsis() {
              var t;
              if (null != (t = this.opt) && t.titleOpt) {
                var { titleLineHeight: e, titleTags: i = [] } =
                    this.opt.titleOpt,
                  r = 0,
                  a = !1,
                  o = "";
                return (
                  Object(v.a)() &&
                    i.length &&
                    ((o = "-webkit-line-clamp: unset;"), (r = 2 * e), (a = !0)),
                  { maxHeight: r, needCustom: a, style: o }
                );
              }
            },
          },
        },
        T = {
          computed: {
            subTitleWrapCls() {
              var t;
              return b(null == (t = this.opt) ? void 0 : t.subTitleOpt);
            },
            subTitleWrapStyle() {
              var t;
              return S(null == (t = this.opt) ? void 0 : t.subTitleOpt);
            },
            subTitleStyle() {
              var t;
              return f(null == (t = this.opt) ? void 0 : t.subTitleOpt);
            },
          },
        },
        P = {
          computed: {
            tagsStyle() {
              var t;
              if (null != (t = this.opt) && t.tagsOpt) {
                var {
                  textAlign: e = "left",
                  marginBottom: i = "",
                  marginTop: r = "4px",
                  height: a = "16px",
                } = this.opt.tagsOpt;
                return Object(d.a)({
                  "justify-content": e,
                  "margin-bottom": i,
                  "margin-top": r,
                  height: a,
                });
              }
            },
          },
        },
        { useTpx: x } = a.default.style;
      function j(t) {
        var [e = "", i = ""] = t.split("."),
          r = i.replace(/0+$/, "").slice(0, 2),
          a = r ? "." + r : "";
        return { price: e + a, decimal: a };
      }
      function N(t, e, i) {
        var r;
        void 0 === e && (e = !0), void 0 === i && (i = !0);
        var [a = "", o = ""] = t.split("."),
          l = o.replace(/0+$/, "").slice(0, 2);
        i || 0 == +(null == (r = l) ? void 0 : r[0]) || (l = +l);
        var n = l ? "." + l : "";
        return (
          n && 2 === n.length && i && (n += "0"),
          { price: e ? a + n : a, decimal: n }
        );
      }
      function k(t) {
        var { layoutOpt: e, btnOpt: i, itemIndex: r, price: a } = t,
          { type: o = m.f.ONE } = e || {},
          { type: l } = i || {};
        if (!a) return !0;
        var n = !!i,
          p = "icon" === l,
          s = a
            .replace(/(\d+)\.0+$/, "$1")
            .replace(/(\d+\.\d)0+$/, "$1").length,
          c = (!n || p) && s < 10;
        return (
          -1 !== [m.f.ONE].indexOf(o) ||
          (m.f.HYBRID === o && r % 3 == 0) ||
          (m.f.HYBRID === o && -1 !== [1, 2].indexOf(r % 3) && c) ||
          (m.f.TWO === o && c)
        );
      }
      function w(t, e) {
        if (null != t && t.price) {
          var { compType: i } = e;
          return (
            !i ||
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
            ].includes(i)
          );
        }
      }
      function z(t, e) {
        if (null != t && t.price) {
          if (null === e.price) return "-";
          if (isNaN(Math.floor(e.price))) return e.price;
          var { price: i } = e,
            r = k(e),
            a = i.replace(/(\d+)\.0+$/, "$1").replace(/(\d+\.\d)0+$/, "$1");
          return (i = (function (t) {
            var { oldPrice: e, priceIsOriginStyle: i } = void 0 === t ? {} : t;
            return i || +e < 1e4
              ? N(e, !1).price
              : ("" + Math.round(+e / 100) / 100)
                  .replace(/(\d+)\.0+$/, "$1")
                  .replace(/(\d+\.\d)0+$/, "$1");
          })({ oldPrice: a, priceIsOriginStyle: r }));
        }
      }
      function C(t, e) {
        if (null != t && t.price) {
          if (null === e.price) return "-";
          var i = Math.floor(e.price);
          if (isNaN(i)) return e.price;
          if (i > 1e4) i = j((i /= 1e4) + "").price;
          return i;
        }
      }
      function _(t, e) {
        if (null != t && t.price) {
          var { price: i } = e;
          if (null === i) return "";
          if (isNaN(Math.floor(e.price))) return "";
          if (!k(e) && i >= 1e4) return "万";
          var { decimal: r } = N(i, !0, !1);
          return r || "";
        }
      }
      function E(t, e) {
        if (null != t && t.price) {
          var { price: i } = e;
          if (null === i) return "";
          if (i > 1e4) return "万";
          var { decimal: r } = j(i);
          return r || "";
        }
      }
      function G(t, e) {
        if (null != t && t.price) {
          var { style: i } = e;
          return e.delLine
            ? Object(d.a)({
                color: e.color,
                "font-size": e.fontSize,
                "line-height": x(+e.fontSize),
              }) + i
            : i;
        }
      }
      function H(t, e) {
        if (null != t && t.price)
          return Object(d.a)({
            "font-size": x(e.tagSize || e.fontSize),
            "margin-right": x(e.tagGap),
          });
      }
      function M(t, e) {
        if (null != t && t.price) {
          var i = e.intSize || e.fontSize;
          return Object(d.a)({
            "font-size": x(i),
            "line-height": x(i),
            "font-weight": e.fontWeight,
          });
        }
      }
      function D(t, e) {
        if (null != t && t.price)
          return Object(d.a)({
            "font-size": x(e.decimalSize),
            "font-weight": e.decimalFontWeight || e.fontWeight,
          });
      }
      var W = {
          computed: {
            useNewPriceRule() {
              var t;
              return w(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
            priceNewInt() {
              var t;
              return z(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
            priceInt() {
              var t;
              return C(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
            priceNewDecimal() {
              var t;
              return _(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
            priceDecimal() {
              var t;
              return E(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
            priceStyle() {
              var t;
              return G(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
            priceTagStyle() {
              var t;
              return H(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
            priceIntStyle() {
              var t;
              return M(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
            priceDecimalStyle() {
              var t;
              return D(
                null == (t = this.opt) ? void 0 : t.priceOpt,
                this.capPriceOpt
              );
            },
          },
        },
        B = {
          computed: {
            useNewOPriceRule() {
              var t;
              return w(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
            oPriceNewInt() {
              var t;
              return z(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
            oPriceInt() {
              var t;
              return C(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
            oPriceNewDecimal() {
              var t;
              return _(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
            oPriceDecimal() {
              var t;
              return E(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
            oPriceStyle() {
              var t;
              return G(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
            oPriceTagStyle() {
              var t;
              return H(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
            oPriceIntStyle() {
              var t;
              return M(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
            oPriceDecimalStyle() {
              var t;
              return D(
                null == (t = this.opt) ? void 0 : t.oPriceOpt,
                this.capOPriceOpt
              );
            },
          },
        },
        L = {
          computed: {
            buyButtonText() {
              var t;
              if (null != (t = this.opt) && t.btnOpt) {
                var { theme: e, name: i = "", aliasName: r } = this.opt.btnOpt;
                return (
                  r || ("primary" !== e || i ? (e || i ? i : "购买") : "马上抢")
                );
              }
            },
          },
        },
        R = {
          computed: {
            extraInfoList() {
              var t, e;
              return null != (t = this.opt) && null != (e = t.extOpt) && e.list
                ? this.opt.extOpt.list
                    .filter((t) => !(" " === t.title && !t.label) && !!t.title)
                    .map((t) => {
                      var e = Object(r.a)({}, t, {
                        titleLineHeight: 16,
                        titleExtraStyle: {},
                        marginTop: 4,
                        vMargin: 0,
                      });
                      return {
                        title: t.title,
                        wrapCls: b(
                          Object(r.a)({}, e, { bgColor: "transparent" })
                        ),
                        wrapStyle: S(e),
                        titleStyle: f(e),
                      };
                    })
                : [];
            },
          },
        },
        $ = {
          computed: {
            expandTitleWrapCls() {
              var t;
              return b(null == (t = this.opt) ? void 0 : t.expandOpt);
            },
            expandTitleWrapStyle() {
              var t;
              return S(null == (t = this.opt) ? void 0 : t.expandOpt);
            },
            expandTitleStyle() {
              var t;
              return f(null == (t = this.opt) ? void 0 : t.expandOpt);
            },
          },
        },
        A = i("VdoR"),
        F = i("Tewj"),
        Y = a.default.getApp(),
        U = a.default.getGlobal("logger"),
        q = {
          mixins: [
            (function (t) {
              var { optDesc: e } = void 0 === t ? {} : t;
              return {
                props: {
                  _opt: Object,
                  mode: { type: String },
                  isSkyline: { type: Boolean, default: !1 },
                  type: { type: String },
                  isShowGoodsAddNumber: { type: Boolean, default: !1 },
                },
                computed: {
                  opt() {
                    var t,
                      i = Object(n.b)(this._opt, e || {}),
                      {
                        layoutType: a,
                        layout: o,
                        type: l,
                        hybridSmall: s,
                        btnOpt: u,
                      } = i,
                      d = {},
                      m = {
                        titleOpt: {
                          height: "auto",
                          titleFontSize: 14,
                          titleLineHeight: 20,
                          _assign: !0,
                        },
                        subTitleOpt: {
                          height: "auto",
                          titleFontSize: 12,
                          titleLineHeight: 17,
                          marginTop: 4,
                          titleFontWeight: 400,
                          _assign: !0,
                        },
                        btnOpt: { size: 20, _assign: !0 },
                        priceOpt: { tagSize: 12, intSize: 18, decimalSize: 14 },
                        oPriceOpt: {
                          tagSize: 12,
                          intSize: 12,
                          decimalSize: 12,
                        },
                        operaOpt: { marginTop: 12, _assign: !0 },
                        btnGoodsNumberStyleOpt: {
                          badgeClass: "card-badge-normal",
                          _assign: !0,
                        },
                      };
                    ((a === p.ONE || (a === p.HYBRID && !s)) &&
                      ((d = {
                        btnOpt: {
                          size: "horizontal" === o ? 20 : 24,
                          _assign: !0,
                        },
                        btnGoodsNumberStyleOpt: {
                          badgeClass:
                            "horizontal" === o
                              ? "card-badge-normal"
                              : "card-badge-big",
                          _assign: !0,
                        },
                      }),
                      "vertical" === o &&
                        (d = Object(r.a)({}, d, {
                          priceOpt: {
                            tagSize: 16,
                            intSize: 22,
                            decimalSize: 16,
                            _assign: !0,
                          },
                        })),
                      (m = Object(c.a)(m, d))),
                    ((a === p.ONE && "horizontal" === o) || "simple" === l) &&
                      ((d = { imgOpt: { corner: "circle", _assign: !0 } }),
                      (m = Object(c.a)(m, d))),
                    (a === p.TWO ||
                      a === p.THREE ||
                      a === p.SWIPE ||
                      (a === p.HYBRID && s)) &&
                      ((d = {
                        titleOpt: {
                          titleFontSize: 12,
                          titleLineHeight: 16,
                          _assign: !0,
                        },
                        subTitleOpt: { titleLineHeight: 16, _assign: !0 },
                        operaOpt: { marginTop: 8, _assign: !0 },
                      }),
                      (m = Object(c.a)(m, d))),
                    (a !== p.THREE && a !== p.SWIPE) ||
                      ((d = {
                        btnOpt: { size: 18, _assign: !0 },
                        btnGoodsNumberStyleOpt: {
                          badgeClass: "card-badge-small",
                          _assign: !0,
                        },
                        priceOpt: {
                          tagSize: 12,
                          intSize: 16,
                          decimalSize: 12,
                          _assign: !0,
                        },
                      }),
                      (m = Object(c.a)(m, d))),
                    "auto" === this.mode) &&
                      "shopping-cart-o" ===
                        (null == (t = i = Object(c.a)(i, m))
                          ? void 0
                          : t.btnOpt.name) &&
                      (i.btnOpt.name = "cart-o");
                    return "tag_slide" === this.type ||
                      "screen-slide" === this.type
                      ? Object(r.a)({}, i, {
                          btnGoodsNumberStyleOpt: m.btnGoodsNumberStyleOpt,
                        })
                      : i;
                  },
                },
              };
            })({ optDesc: u }),
            o.b.externalClassesMixin(["text-class"]),
            O,
            I,
            T,
            P,
            W,
            B,
            L,
            R,
            $,
          ],
          data: () => ({ goodsNumber: 0 }),
          computed: {
            operaStyle() {
              var { opt: t } = this,
                { operaOpt: e, priceOpt: i } = t,
                { height: a } = i || {},
                o = {};
              return (
                a && (o.height = a),
                Object(d.a)(
                  Object(r.a)({}, o, {
                    "margin-top":
                      ((null == e ? void 0 : e.marginTop) || 12) + "px",
                  })
                )
              );
            },
            capSoldNumOpt() {
              var t,
                { opt: e } = this;
              return (
                e || (e = { soldNumOpt: {} }),
                Object(r.a)(
                  {
                    showSoldNum:
                      (null == (t = e.soldNumOpt) ? void 0 : t.totalSoldNum) >
                      -1,
                  },
                  e.soldNumOpt || {}
                )
              );
            },
            isShowBadge() {
              var t, e;
              return (
                ["cart-circle-o", "cart-o", "shopping-cart-o"].includes(
                  null == (t = this.opt) || null == (e = t.btnOpt)
                    ? void 0
                    : e.name
                ) &&
                this.goodsNumber &&
                this.isShowGoodsAddNumber
              );
            },
            badgeStyle() {
              return this.goodsNumber > 99
                ? "position:absolute; left: -5px"
                : "";
            },
            useCustomImageAndTitleAndSku() {
              var t, e;
              return null == (t = this.opt) || null == (e = t.imgOpt)
                ? void 0
                : e.useGoodsCoverImage;
            },
            capPriceOpt() {
              var { opt: t } = this;
              return (
                t || (t = {}),
                Object(r.a)({}, t.priceOpt || {}, {
                  compType: t.compType,
                  itemIndex: t.itemIndex,
                  layoutOpt: t.layoutOpt,
                  btnOpt: t.btnOpt,
                })
              );
            },
            capOPriceOpt() {
              var { opt: t } = this;
              return (
                t || (t = {}),
                Object(r.a)({}, t.oPriceOpt || {}, {
                  compType: t.compType,
                  itemIndex: t.itemIndex,
                  layoutOpt: t.layoutOpt,
                  btnOpt: t.btnOpt,
                })
              );
            },
            imgOpt() {
              var {
                imgOpt: t,
                layoutType: e,
                layout: i,
                itemIndex: a,
                isHighQualityImage: o,
                imageQuality: n = "",
              } = this.opt;
              if (!t) return t;
              var s = "!" + (o ? 480 : 400) + "x0" + n + ".jpg";
              (e === p.BIG ||
                (e === p.ONE && "vertical" === i) ||
                e === p.HYBRID) &&
                (s = "!" + (o ? 876 : 730) + "x0" + n + ".jpg");
              var c = 1;
              t.maskIconSize
                ? (c = t.maskIconSize)
                : ((e !== p.TWO && e !== p.LIST) || (c = 0.8),
                  (e === p.THREE ||
                    e === p.SWIPE ||
                    (e === p.ONE && "horizontal" === i) ||
                    (e === p.HYBRID && a % 3 != 0)) &&
                    (c = 0.6));
              var u = Object(l.a)(t.src, s),
                d = "";
              return (
                t.needPreload &&
                  (d = Object(l.a)(t.src, t.needPreload.preSize)),
                Object(r.a)({}, h, t, {
                  maskIconSize: c,
                  preImg: d,
                  src: u,
                  useCdn: !1,
                })
              );
            },
            activityBgStyle() {
              var { bgStyle: t } = this.opt.activityOpt || {};
              return t
                ? Object(d.a)({ background: t.background, opacity: t.opacity })
                : "";
            },
            activityTestStyle() {
              var { testStyle: t } = this.opt.activityOpt || {};
              return t
                ? Object(d.a)({
                    "line-height": t.lineHeight,
                    "font-size": t.fontSize,
                  })
                : "";
            },
            isTextShow() {
              var {
                titleOpt: t,
                subTitleOpt: e,
                expandOpt: i,
                progressOpt: r,
                tagsOpt: a,
                priceOpt: o,
                btnOpt: l,
                extOpt: n,
                skeleton: p,
              } = this.opt;
              return t || e || i || r || a || o || l || n || p;
            },
            skeletonClass() {
              var t, e;
              if (null == (t = this.opt) || !t.layoutOpt) return "";
              var { type: i } = null == (e = this.opt) ? void 0 : e.layoutOpt;
              return (i === p.SWIPE || i === p.THREE) && this.opt.skeleton
                ? "height-118"
                : "";
            },
            preSaleGoodsMap: () => s,
          },
          watch: {
            _opt: {
              handler(t) {
                null != t &&
                  t.btnGoodsNumberOpt &&
                  (this.goodsNumber = t.btnGoodsNumberOpt.num);
              },
              immediate: !0,
            },
          },
          created() {
            var {
              opt: {
                type: t,
                corner: e,
                layout: i,
                layoutType: r,
                cardStyle: a,
                align: o,
                titleOpt: l,
                textAreaOpt: n,
                tagsOpt: p,
                isTagsShow: s,
                priceOpt: c,
                btnOpt: u,
              },
              itemImageClass: d,
              itemImageSkeletonShow: m,
              itemImageStyle: g,
              imgOpt: O,
              itemImageUrl: h,
              itemImageMode: v,
              isTextShow: y,
              titleWrapCls: b,
              titleWrapStyle: S,
              titleStyle: f,
              capPriceOpt: I,
              priceStyle: T,
              priceTagStyle: P,
              priceIntStyle: x,
              priceDecimalStyle: j,
              useNewPriceRule: N,
              priceNewInt: k,
              priceNewDecimal: w,
            } = this;
            this.setData(
              {
                opt: {
                  type: t,
                  corner: e,
                  layout: i,
                  layoutType: r,
                  cardStyle: a,
                  align: o,
                  titleOpt: l,
                  textAreaOpt: n,
                  tagsOpt: p,
                  isTagsShow: s,
                  priceOpt: c,
                  btnOpt: u,
                },
                itemImageClass: d,
                itemImageSkeletonShow: m,
                itemImageStyle: g,
                imgOpt: O,
                itemImageUrl: h,
                itemImageMode: v,
                isTextShow: y,
                titleWrapCls: b,
                titleWrapStyle: S,
                titleStyle: f,
                capPriceOpt: I,
                priceStyle: T,
                priceTagStyle: P,
                priceIntStyle: x,
                priceDecimalStyle: j,
                useNewPriceRule: N,
                priceNewInt: k,
                priceNewDecimal: w,
              },
              { immediate: !0 }
            );
          },
          mounted() {
            A.a.end({ type: "finish", name: "商品组件渲染" }),
              F.default.on("addCartSuccess", this.handleGoodsNumber);
          },
          destroyed() {
            F.default.off("addCartSuccess", this.handleGoodsNumber);
          },
          methods: {
            onLoad() {
              this.itemImageLoadSuccess(), this.$emit("item-image-loaded");
            },
            getActivityTypes(t) {
              void 0 === t && (t = {});
              var { list: e = [] } = t.tagsOpt || {};
              return e.length
                ? e.map((t) => t.labelType || t.type).filter(Boolean)
                : null;
            },
            handleBuyButtonClick() {
              var t,
                { preventBuyClickItem: e, actionOpt: i } = this._opt,
                { isOptionalCombo: a } = i;
              if (e || a)
                return (
                  a &&
                    U &&
                    U.log({
                      et: "click",
                      ei: "optional_combo_goods",
                      en: "点击套餐商品",
                      params: { goodsId: "str" },
                    }),
                  this.handleItemClick()
                );
              var o = this.getActivityTypes(this.opt);
              this.$emit(
                "button-click",
                Object(r.a)(
                  { imageUrl: null == (t = this.opt.imgOpt) ? void 0 : t.src },
                  i,
                  {
                    activityTypes: o,
                    timingSaleHideBuyBtnInSku:
                      this.useCustomImageAndTitleAndSku,
                  }
                )
              );
            },
            handleItemClick() {
              var t, e;
              this.$emit(
                "item-click",
                Object(r.a)(
                  {
                    imageUrl: null == (t = this.opt.imgOpt) ? void 0 : t.src,
                    goodsPreloadOpt: this.opt.goodsPreloadOpt,
                    title: null == (e = this.opt.titleOpt) ? void 0 : e.title,
                  },
                  this.opt.actionOpt || {}
                )
              );
            },
            handleGoodsNumber(t, e) {
              var i;
              if (
                +Y.globalData.mall_shop_config_data
                  .shop_page_cart_display_switch
              )
                if (
                  "addCartSku" === t &&
                  (null == (i = this._opt.actionOpt) ? void 0 : i.id) ===
                    e.goodsId
                ) {
                  var r = e.num || e.selectedNum;
                  this.goodsNumber += r;
                } else if ("addCartList" === t) {
                  var a = e.newGoodsResult.findIndex(
                    (t) => t.goodsId === this._opt.actionOpt.id
                  );
                  this.goodsNumber = -1 !== a ? e.newGoodsResult[a].num : 0;
                }
            },
          },
          ud: !0,
        };
      e.default = a.default.component(q);
    },
  })
);
