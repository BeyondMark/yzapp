"use strict";
var r = require("~/r");
r(
  "FbZj",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      FbZj: function (t, e, o) {
        o.r(e);
        var i = o("Xq7Z"),
          r = o("RC6s"),
          s = o("RLHe");
        Component({
          behaviors: [s.a, r.a],
          properties: {
            goodsInfo: {
              type: Object,
              value: {},
              observer() {
                this.data.infoData &&
                  (this.initPriceInfo(), this.computePaidContent());
              },
            },
            showcaseClass: String,
            showOriginPriceByGoodsInfo: { type: Boolean, value: !1 },
          },
          data: {
            containerClass: "",
            buttonSize: "",
            goodsPrice: null,
            priceInfoStyle: "",
            priceNumStyle: "",
            hasUnit: !1,
            isPromotion: !1,
            isPointsGoods: !1,
            buyButtonType: 1,
            showSoldNum: !1,
            showItemBuyButton: !1,
          },
          externalClasses: ["custom-class"],
          options: { styleIsolation: "shared", multipleSlots: !0 },
          ready() {
            this.setPriceInfoStyle();
          },
          methods: {
            btnLoad() {
              setTimeout(() => {
                this.setPriceInfoStyle();
              });
            },
            setPriceInfoStyle() {
              var t,
                {
                  textStyleType: e = 1,
                  textAlignType: o = "left",
                  showOriginPrice: r,
                  showPrice: s,
                  priceInfoStyle: a = "",
                } = this.data.infoData || {},
                n = this.computeIsPromotion(),
                u = 2 == +e ? "font-weight: bold;" : "",
                c = this.selectComponent("#buy-button"),
                { layout: l, goodsInfo: { price: p } = {} } = this.data || {},
                d = this.isOriginPriceStyle(),
                h = i.f.SWIPE === l ? 4 : 5,
                y = !(
                  !d && (null == (t = this.goodsPrice) ? void 0 : t.length) > h
                );
              c
                ? c
                    .createSelectorQuery()
                    .select(".goods__btn-wrap")
                    .boundingClientRect((t) => {
                      var { width: e = 50 } = t || {},
                        i =
                          "center" === o
                            ? "padding-right: 0;"
                            : "padding-right: " + (n ? e - 2 : e + 2) + "px;",
                        c = "";
                      "center" !== o || s || r || (c = "height: 0;"),
                        this.setData({
                          priceInfoStyle: u + i + c + a,
                          priceNumStyle:
                            "center" === o || y || d ? "" : "font-size: 13px;",
                          hasUnit: !d && +(p || 0) >= 1e4,
                        });
                    })
                    .exec()
                : this.setData({
                    priceInfoStyle: u + a,
                    hasUnit: !d && +(p || 0) >= 1e4,
                  });
            },
            initPriceInfo() {
              this.setData({
                containerClass: this.computeContainerClass(),
                goodsPrice: this.computeSalePrice(),
                isPromotion: this.computeIsPromotion(),
                isPointsGoods: this.computeIsPointsGoods(),
                buyButtonType: this.computeBuyButtonType(),
                showSoldNum: this.computeShowSoldNum(),
                showItemBuyButton: this.computeShowBuyButton(),
              });
            },
            computeShowSoldNum() {
              var { showSoldNum: t = !1 } = this.data.infoData || {},
                { totalSoldNum: e = -1 } = this.data.goodsInfo || {};
              return t && Number(e) > -1;
            },
            computeIsPointsGoods() {
              var { sizeType: t } = this.data || {};
              return t === i.j.POINTS;
            },
            computeBuyButtonType() {
              var { buyButtonType: t = 1 } = this.data.infoData || {};
              return this.computeIsPromotion() ? 9 : t;
            },
          },
        });
      },
      Qwxn: function (t, e, o) {
        e.a = Behavior({
          properties: {
            appId: String,
            goodsInfo: { type: Object, value: {} },
            infoData: { type: Object, value: {} },
            goodsIndex: Number,
            layout: { type: Number, value: 0 },
            sizeType: { type: Number, value: 0 },
            redirectType: { type: Number, value: 1 },
            extraData: { type: Object, value: {} },
            textStyleType: { type: Number, value: 1 },
            textAlignType: { type: String, value: "left" },
          },
        });
      },
      RLHe: function (t, e, o) {
        var i = o("Fcif"),
          r = o("x5Yp"),
          s = o("GrZP"),
          a = o("Qwxn"),
          n = o("Xq7Z"),
          u = getApp();
        e.a = Behavior({
          behaviors: [a.a, s.a],
          properties: {
            goodsInfo: {
              type: Object,
              value: {},
              observer() {
                this.initPriceInfo();
              },
            },
          },
          data: { buttonSize: "" },
          attached() {
            this.initPriceInfo(),
              this.setData({ buttonSize: this.computeBuyButtonSize() });
          },
          methods: {
            formatPrice(t) {
              var { oldPrice: e, priceIsOriginStyle: o } =
                void 0 === t ? {} : t;
              return o || +e < 1e4
                ? e
                : ("" + Math.round(+e / 100) / 100)
                    .replace(/(\d+)\.0+$/, "$1")
                    .replace(/(\d+\.\d)0+$/, "$1");
            },
            computeShowBuyButton() {
              var {
                infoData: { showBuyButton: t = !1 } = {},
                isPaidContent: e = !1,
              } = this.data;
              return t && !e;
            },
            isOriginPriceStyle() {
              var {
                layout: t = n.f.BIG,
                goodsIndex: e,
                goodsInfo: o = {},
              } = this.data;
              if (!o.price) return !0;
              var i = "" + o.price,
                { infoData: r = {} } = this.data,
                s = this.computeShowBuyButton(),
                a = [1, 2, 5, 6].indexOf(r.buyButtonType) > -1,
                u = i
                  .replace(/(\d+)\.0+$/, "$1")
                  .replace(/(\d+\.\d)0+$/, "$1").length,
                c = (!s || a) && u < 10;
              return (
                -1 !== [n.f.BIG, n.f.LIST].indexOf(t) ||
                (n.f.HYBRID === t && e % 3 == 0) ||
                (n.f.HYBRID === t && -1 !== [1, 2].indexOf(e % 3) && c) ||
                (n.f.SMALL === t && c)
              );
            },
            computeSalePrice() {
              var { goodsInfo: t = {} } = this.data;
              if (!t.price) return 0;
              var e = this.isOriginPriceStyle(),
                o = ("" + t.price)
                  .replace(/(\d+)\.0+$/, "$1")
                  .replace(/(\d+\.\d)0+$/, "$1");
              return this.formatPrice({ oldPrice: o, priceIsOriginStyle: e });
            },
            computeContainerClass() {
              var t = this.computeBuyButtonSize(),
                { layout: e, infoData: o = {} } = this.data,
                { showPrice: i, showBuyButton: r, textAlignType: s } = o,
                a = [
                  "has-price-" + +i,
                  "has-btn-" + +r,
                  "size--" + t,
                  "" + n.g[e],
                ];
              return e !== n.f.LIST && a.push(s), a;
            },
            computeBuyButtonSize() {
              var { layout: t } = this.data;
              return t === n.f.THREE || t === n.f.SWIPE ? n.a.SMALL : n.a.BIG;
            },
            computeIsPromotion() {
              var { layout: t, sizeType: e } = this.data;
              return t === n.f.SMALL && e === n.j.PROMOTION;
            },
            handleGoodsBuyClick() {
              var t,
                e,
                o,
                { goodsInfo: s } = this.data,
                { loggerParams: a = {}, extraInfo: n = {} } = s,
                c =
                  (null == (t = u.logger) ||
                  null == (e = t.options) ||
                  null == (o = e.user)
                    ? void 0
                    : o.uuid) || "";
              if (!Object(r.a)(a)) {
                var l = n.slg || "0";
                this.ensureAppLogger(
                  "click_buy",
                  Object(i.a)({}, a, { slg: l, uuid: c })
                );
              }
              this.triggerEvent("buy", s);
            },
          },
        });
      },
    }
  )
);
