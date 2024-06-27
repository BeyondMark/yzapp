"use strict";
var r = require("~/r");
r(
  "ufLQ",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      ufLQ: function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          o = a("9KEa"),
          s = a("QY3K"),
          r = a("x5Yp"),
          l = a("GrZP"),
          n = a("u55p"),
          u = a("Xq7Z"),
          p = a("gUUB"),
          d = a("flXC"),
          h = getApp();
        Component({
          options: { addGlobalClass: !0, multipleSlots: !0 },
          behaviors: [p.a, d.a, l.a, n.a],
          properties: {
            componentIndex: Number,
            appId: String,
            list: {
              type: Array,
              value: [],
              observer(e) {
                this.setData({
                  waterfallGoodsList: this.computeWaterfallGoods(e),
                });
              },
            },
            showcaseClass: String,
            layout: { type: Number, value: 0 },
            sizeType: { type: Number, value: 0 },
            imageFillStyle: { type: Number, value: 2 },
            imageRatio: { type: Number, value: 1 },
            showCornerMark: Boolean,
            cornerMarkType: { type: Number, value: 0 },
            cornerMarkImage: String,
            isShowMore: Boolean,
            moreUrl: String,
            moreButtonType: { type: Number, value: 1 },
            extraData: { type: Object, value: {} },
            redirectType: { type: Number, value: 3 },
            infoData: { type: Object, value: {} },
            pageMargin: { type: Number, value: 15 },
            goodsMargin: { type: Number, value: 10 },
            textStyleType: { type: Number, value: 1 },
            textAlignType: { type: String, value: "left" },
            borderRadiusType: { type: Number, value: 2 },
            openSwipePagination: Boolean,
            swipeLoadMaxTimes: { type: Number, value: 2 },
            showPriceLabel: Boolean,
            heightStyle: String,
            skeletonNumber: { type: Number, value: 0 },
            showUmpTags: Boolean,
            umpTagsMaxCount: Number,
            showLastSelfDefineItem: Boolean,
            showLabel: Boolean,
            exhibitionTag: Boolean,
            showOriginPriceByGoodsInfo: { type: Boolean, value: !1 },
          },
          data: {
            isSwipeLoadFinished: !1,
            isSwipeLoading: !1,
            swipeLoadTimes: 0,
            isWaterfall: !1,
            layoutName: "",
            sizeName: "",
            containerClass: "",
            waterfallGoodsList: [],
            pageMarginStyle: "",
            goodsMarginStyle: "",
            borderRadiusTypeClass: "",
            skeletonGoodsConfig: { goodsInfo: { skeleton: !0 }, goodsIndex: 0 },
            soldOutFlag: "",
          },
          attached() {
            this.getShopConfigData(),
              this.setData({
                isWaterfall: this.computeIsWaterfall(),
                isSwipeLayout: this.computeIsSwipeLayout(),
                layoutName: this.computeLayoutName(),
                sizeName: this.computeSizeName(),
                containerClass: this.computeContainerClass(),
                waterfallGoodsList: this.computeWaterfallGoods(this.data.list),
                pageMarginStyle: this.computePageMarginStyle(),
                goodsMarginStyle: this.computeGoodsMarginStyle(),
                borderRadiusTypeClass: this.computeBorderRadiusTypeClass(),
              });
          },
          methods: {
            getShopConfigData() {
              var e = this;
              h.getShopConfigData().then(function (t) {
                void 0 === t && (t = {});
                var { sold_out_goods_flag: a } = t;
                e.setData({ soldOutFlag: a });
              });
            },
            computePageMarginStyle() {
              var { pageMargin: e, goodsMargin: t } = this.data,
                a = "-" + t / 2 + "px",
                i =
                  "padding-left: " +
                  e +
                  "px; padding-right: " +
                  e +
                  "px; margin-left: " +
                  a +
                  ";";
              return (
                this.computeIsSwipeLayout() || (i += "margin-right: " + a), i
              );
            },
            computeGoodsMarginStyle() {
              var { goodsMargin: e } = this.data;
              return "margin: " + (e / 2 + "px");
            },
            computeIsWaterfall() {
              var { sizeType: e } = this.data;
              return u.j.WATERFALL === +e;
            },
            computeIsSwipeLayout() {
              var { layout: e } = this.data;
              return u.f.SWIPE === +e;
            },
            computeLayoutName() {
              var { layout: e } = this.data;
              return u.g[e];
            },
            computeSizeName() {
              var { sizeType: e } = this.data;
              return u.k[e];
            },
            computeWaterfallGoods(e) {
              var t = [];
              return (
                e &&
                  this.computeIsWaterfall() &&
                  (t = (function (e, t) {
                    var a = [];
                    t = t || 2;
                    for (var i = 0; i < e.length; i += t)
                      for (var o = 0; o < t; o++)
                        a[o] || (a[o] = []), e[i + o] && a[o].push(e[i + o]);
                    return a;
                  })(e, 2)),
                t
              );
            },
            computeContainerClass() {
              return [
                "layout-container--" + this.computeLayoutName(),
                this.computeSizeName(),
              ].join(" ");
            },
            computeBorderRadiusTypeClass() {
              var { borderRadiusType: e = 1 } = this.data;
              return u.i[e];
            },
            handleGoodsItemClick(e) {
              var t,
                a,
                o,
                s,
                l,
                { index: n } = e.currentTarget.dataset,
                { isWaterfall: u, waterfallGoodsList: p, list: d } = this.data;
              if (u) {
                var [g, m] = n.split("-");
                l = p[+g][+m];
              } else l = d[+n];
              if (null == (t = l) || !t.skeleton) {
                var { loggerParams: c = {}, extraInfo: y = {} } = l,
                  w = y.slg || "0",
                  S =
                    (null == (a = h.logger) ||
                    null == (o = a.options) ||
                    null == (s = o.user)
                      ? void 0
                      : s.uuid) || "";
                h.logger.setContext(
                  { slg: y.slg || "", alg_id: y.alg || "" },
                  30
                ),
                  Object(r.a)(c) ||
                    this.ensureAppLogger(
                      "open_goods",
                      Object(i.a)({}, c, { slg: w, uuid: S })
                    ),
                  this.setLsForGoodsDetail(l),
                  this.triggerEvent("item-click", l);
              }
            },
            setLsForGoodsDetail(e) {
              var {
                  picture: t = [],
                  title: a = "",
                  price: i = "0.00",
                  alias: o = "",
                  imageUrl: r = "",
                  width: l,
                  height: n,
                } = e,
                u = {};
              t.length
                ? (u = t[0])
                : r && (u = { url: r, width: l, height: n }),
                u &&
                  o &&
                  Object(s.a)({ image: u, alias: o, title: a, price: i });
            },
            handleBuyClick(e) {
              this.triggerEvent("buy", e.detail);
            },
            tagInfoChange(e) {
              this.triggerEvent("tag-info-change", e.detail);
            },
            checkSwipeable() {
              var e = this,
                t = this.computeIsSwipeLayout(),
                {
                  openSwipePagination: a,
                  swipeLoadTimes: i,
                  isSwipeLoading: s,
                  list: r,
                  isSwipeLoadFinished: l,
                  swipeLoadMaxTimes: n,
                } = this.data;
              return new Promise((u) => {
                this.createSelectorQuery()
                  .select(".goods-wrap--" + (r.length - 1))
                  .boundingClientRect(function (r) {
                    if ((void 0 === r && (r = {}), !e.windowWidth)) {
                      var p = Object(o.b)(),
                        { windowWidth: d = 375 } = p;
                      e.windowWidth = d;
                    }
                    r.left >= 0 &&
                      r.right < e.windowWidth &&
                      t &&
                      a &&
                      i < n &&
                      !s &&
                      !l &&
                      u();
                  })
                  .exec();
              });
            },
            onTouchStart(e) {
              this.data.isSwipeLayout &&
                this.checkSwipeable()
                  .then(() => {
                    this.touchStart(e), (this.isTouchStart = !0);
                  })
                  .catch(() => {});
            },
            onTouchMove(e) {
              this.data.isSwipeLayout && this.isTouchStart && this.touchMove(e);
            },
            onTouchEnd() {
              if (this.data.isSwipeLayout && this.isTouchStart) {
                var { direction: e, deltaX: t } = this;
                "horizontal" === e &&
                  -t >= 60 &&
                  this.setData(
                    {
                      isSwipeLoading: !0,
                      swipeLoadTimes: ++this.data.swipeLoadTimes,
                    },
                    () => {
                      this.triggerEvent("load-more");
                    }
                  ),
                  (this.isTouchStart = !1);
              }
            },
            setSwipeStatus(e) {
              void 0 === e && (e = {});
              var { loading: t, swipeFinished: a, isPullDownRefresh: i } = e,
                o = i ? 0 : this.data.swipeLoadTimes;
              this.setData({
                isSwipeLoading: t,
                isSwipeLoadFinished: o >= this.data.swipeLoadMaxTimes || a,
                swipeLoadTimes: o,
              });
            },
          },
        });
      },
    }
  )
);
