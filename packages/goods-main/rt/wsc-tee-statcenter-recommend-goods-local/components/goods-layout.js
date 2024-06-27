"use strict";
var r = require("~/r");
r(
  "XmqT",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      XmqT: function (t, i, e) {
        e.r(i);
        var s = e("Fcif"),
          a = e("nqrh"),
          o = e("9ZMt"),
          r = e("DXKY"),
          h = e("YeA1"),
          n = e("7dhF"),
          d = e("poDo");
        var l = {
          name: "CommonGoodsLayout",
          mixins: [a.a],
          props: { logger: Object },
          mounted() {
            this.observeGoodsView(), this.calculateCouponHeight();
          },
          destroyed() {
            this.stopViewObserver();
          },
          data() {
            return {
              couponStyle: "",
              isSwipeLoading: !1,
              isSwipeLoadFinished: !1,
              swipeLoadTimes: 0,
              isSupportViewObserver: Object(d.d)(this.logger),
            };
          },
          computed: {
            isWaterfall() {
              var { layout: t, sizeType: i } = this;
              return +t === n.d.SMALL && +i === n.h.WATERFALL;
            },
            waterfallListParts() {
              var { list: t, isWaterfall: i } = this;
              return i
                ? (function (t, i) {
                    for (var e = [], s = 0; s < t.length; s += i)
                      for (var a = 0; a < i; a++)
                        e[a] || (e[a] = []), t[s + a] && e[a].push(t[s + a]);
                    return e;
                  })(t, 2)
                : t;
            },
            isSwipeLayout() {
              return +this.layout === n.d.SWIPE;
            },
            pageMarginStyle() {
              var { pageMargin: t, goodsMargin: i } = this,
                e = "-" + i / 2 + "px";
              return (
                "padding-left: " +
                t +
                "px; padding-right: " +
                t +
                "px; margin-left: " +
                e +
                "; margin-right: " +
                e +
                "; overflow: hidden;"
              );
            },
            goodsMarginStyle() {
              var { goodsMargin: t } = this,
                i = t / 2 + "px",
                e = "margin: " + i + "; ";
              return (
                this.isSkyline &&
                  (e = "margin: " + t + "px " + i + ";height: 100%"),
                e
              );
            },
            layoutClass() {
              var { layout: t = 0 } = this;
              return n.e[t];
            },
            sizeTypeClass() {
              var { sizeType: t = 0 } = this;
              return n.i[t];
            },
            radiusTypeClass() {
              var { borderRadiusType: t = 1 } = this;
              return n.f[t];
            },
            containerClass() {
              return [
                this.layoutClass,
                this.widthClass,
                this.sizeTypeClass,
              ].join(" ");
            },
          },
          methods: {
            isShopRanking() {
              var { list: t } = this;
              return t.some((t) => t.show_ranking_info);
            },
            observeGoodsView() {
              this.isSupportViewObserver &&
                (this.viewObserver = this.logger.viewObserver(
                  this,
                  ".cap-goods-layout__item"
                ));
            },
            stopViewObserver() {
              var t;
              this.isSupportViewObserver &&
                (null == (t = this.viewObserver) || t.disconnect());
            },
            calculateCouponHeight() {
              var t =
                "web" === o.default.getEnv()
                  ? ".cap-goods-layout__container .cap-goods-layout__item"
                  : ".cap-goods-layout__container >>> .cap-goods-layout__item";
              this.$nextTick(() => {
                this.createSelectorQuery()
                  .select(t)
                  .boundingClientRect((t) => {
                    t &&
                      t.height > 0 &&
                      (this.couponStyle =
                        "height: " + o.default.style.useTpx(t.height) + ";");
                  })
                  .exec();
              });
            },
            handleBuyBtnClick(t, i) {
              this.logger.log(Object(d.c)("click_buy", t)),
                this.$emit("handle-buy", t, i);
            },
            handleClickNavigate(t) {
              var {
                  url: i,
                  item_type: e,
                  alias: a,
                  image_url: o,
                  title: r,
                  width: n,
                  height: l,
                  banner_id: u,
                  alg: g,
                  extended_data: c,
                  menber_price: p,
                } = t,
                { rank_no: v, rank_type: m } = c || {},
                w = {};
              v && m && (w = { rank_no: v, rank_type: m }),
                Object.assign(t, { goods_name: r || "", menberPrice: p || 0 });
              var { dmc: f } = Object(h.a)();
              this.logger.log(Object(d.c)("open_goods", t)),
                "goods" === e
                  ? f.navigate(
                      "GoodsDetail",
                      Object(s.a)({ alias: a, banner_id: u, alg: g }, w),
                      {
                        bizParams: {
                          pageType: "GoodsDetail",
                          alias: a,
                          image: { url: o, width: n, height: l },
                          title: r,
                        },
                      }
                    )
                  : f.navigate(i);
            },
            setSwipeLoadingStatus(t) {
              var { isSwipeLoading: i, isSwipeLoadFinished: e } = t,
                { swipeLoadMaxTimes: s, swipeLoadTimes: a } = this;
              (this.isSwipeLoading = i),
                (this.isSwipeLoadFinished = a >= s || e);
            },
            lower() {
              this.triggerMove = !0;
            },
            onTouchStart(t) {
              if (this.isSwipeLayout) {
                var {
                    isSwipeLoading: i = !1,
                    isSwipeLoadFinished: e = !1,
                    swipeLoadTimes: s,
                  } = this,
                  a = this.swipeLoadMaxTimes || this.swipeLoadMaxTimes;
                i || e || s >= a
                  ? (this.isTouchStart = !1)
                  : ((this.isTouchStart = !0), this.touchStart(t));
              }
            },
            onTouchMove(t) {
              this.isSwipeLayout && this.isTouchStart && this.touchMove(t);
            },
            onTouchEnd() {
              if (this.isSwipeLayout) {
                if (this.isTouchStart) {
                  this.deltaX > 0 && (this.triggerMove = !1),
                    "horizontal" === this.direction &&
                      -this.deltaX >= 60 &&
                      ((this.isSwipeLoading = !0),
                      (this.swipeLoadTimes = ++this.swipeLoadTimes),
                      r.a.trigger("load-more-" + this.uniqueKey));
                }
                this.isTouchStart = !1;
              }
            },
            touchStart(t) {
              (this.direction = ""),
                (this.deltaX = 0),
                (this.deltaY = 0),
                (this.offsetX = 0),
                (this.offsetY = 0),
                (this.startX = t.touches[0].clientX),
                (this.startY = t.touches[0].clientY);
            },
            touchMove(t) {
              var i = t.touches[0];
              (this.deltaX = i.clientX - this.startX),
                (this.deltaY = i.clientY - this.startY),
                (this.offsetX = Math.abs(this.deltaX)),
                (this.offsetY = Math.abs(this.deltaY)),
                (this.direction =
                  this.offsetX > this.offsetY
                    ? "horizontal"
                    : this.offsetX < this.offsetY
                    ? "vertical"
                    : "");
            },
            onCountdownChange(t) {
              this.$emit("tag-info-change", {
                status: t.status,
                itemIndex: t.itemIndex,
              });
            },
          },
        };
        i.default = o.default.component(l);
      },
    }
  )
);
