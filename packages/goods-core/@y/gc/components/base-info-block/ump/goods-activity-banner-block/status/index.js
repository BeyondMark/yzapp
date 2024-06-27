"use strict";
var r = require("~/r");
r(
  "c3UR",
  Object.assign({}, require("~/v.js").modules, {
    c3UR: function (t, i, e) {
      e.r(i);
      var n = e("Fcif"),
        a = e("DXqK"),
        s = e("+66q"),
        o = e("YeA1"),
        c = (t) => !!t && Object.keys(t).length > 0,
        r = {
          name: "ActivityCountDown",
          props: {
            goodsActivity: Object,
            umpPriceInfo: Object,
            activity: Object,
            sku: Object,
            alias: String,
            showCountDownTime: Boolean,
            showStockCountDown: Boolean,
          },
          data() {
            var { activity: t, goodsActivity: i, umpPriceInfo: e } = this,
              n = t.nextCountdownEndTime || 0,
              a = +t.current || +Date.now(),
              o = +Date.now(),
              c = this.getRemainObj({
                activity: t,
                goodsActivity: i,
                umpPriceInfo: e,
                currentTime: a,
                clientNowTime: o,
                nextCountdownEndTime: n,
              }),
              r = t.type === s.a.TIMELIMITED_DISCOUNT,
              d = t.priceTitle;
            return (
              r && !d && (d = "限时折扣"),
              {
                remainObj: c,
                nextCountdownEndTime: n,
                currentTime: a,
                clientNowTime: o,
                showMilliseconds: 0 == +c.hour && !c.day,
                isUmpBannerV2: r,
                activityTitle: d,
              }
            );
          },
          watch: {
            activity(t) {
              t &&
                c(this.activity) &&
                !this.activity.isEnd &&
                ((this.nextCountdownEndTime = t.nextCountdownEndTime || 0),
                this.timeRunner());
            },
            goodsActivity(t) {
              t &&
                c(this.activity) &&
                !this.activity.isEnd &&
                this.timeRunner();
            },
          },
          created() {
            this.init();
          },
          destroyed() {
            (this.hasDetached = !0), clearTimeout(this.tid), (this.tid = null);
          },
          methods: {
            init() {
              (this.tid = null),
                c(this.activity) &&
                  !this.activity.isEnd &&
                  ((this.nextCountdownEndTime =
                    this.activity.nextCountdownEndTime || 0),
                  (this.currentTime = +this.activity.current || +Date.now()),
                  (this.clientNowTime = +Date.now()),
                  this.timeRunner());
            },
            handleAuctionPriceUpdate() {
              this.$emit("auctioin-price-update", {
                umpPriceInfo: this.umpPriceInfo,
                activity: this.activity,
              });
            },
            getRemainObj(t) {
              var {
                  activity: i,
                  goodsActivity: e,
                  umpPriceInfo: o,
                  currentTime: c,
                  clientNowTime: r,
                  nextCountdownEndTime: d,
                } = t,
                { endTimeAt: u, type: h, countDownDesc: m = "" } = i,
                v = c - r,
                y = Date.now(),
                T = u - (y + v),
                l = "";
              if (h === s.a.HELP_DEPOSIT_EXPANSION) {
                var { joinActivityStatus: w } = i,
                  {
                    preSaleEnd: E,
                    preSaleStart: O,
                    balanceDueStart: p,
                  } = e.presale,
                  A = w === s.d.HELPING,
                  P = w === s.d.NOT_PARTICIPATE && E > y && O < y;
                (w === s.d.HELPING && p < y) || w === s.d.BALANCE_PAYMENT
                  ? (l = "距支付尾款结束还剩")
                  : A
                  ? (l = "距支付尾款开始还剩")
                  : P
                  ? ((l = "距定金支付截止还剩"), (T = E - y))
                  : (l = m);
              } else l = T > 864e5 ? m.replace("仅剩", "剩") : m;
              if (h === s.a.AUCTION) {
                var { endAt: D } = i;
                ((t, i) => {
                  var { endPrice: e } = t,
                    { minPrice: n } = i;
                  return n <= e;
                })(i, o)
                  ? ((l = "距结束还剩"), (T = D - y))
                  : ((l = "距下次降价"), (T = d - y));
              }
              h === s.a.PRODUCT_LAUNCH &&
                (l = e.waitToSold ? "距预约结束仅剩" : "火热开售中");
              var I = Object(a.c)(T).strData;
              return Object(n.a)({}, I, {
                remain: T,
                remainDesc: l,
                day: +I.day,
                milliseconds: "0" + I.hundredMilliseconds,
              });
            },
            timeRunner() {
              var { type: t } = this.activity;
              if (
                t !== s.a.HELP_DEPOSIT_EXPANSION ||
                this.goodsActivity.presale
              ) {
                clearTimeout(this.tid);
                var i = this.getRemainObj({
                  activity: this.activity,
                  goodsActivity: this.goodsActivity,
                  umpPriceInfo: this.umpPriceInfo,
                  currentTime: this.currentTime,
                  clientNowTime: this.clientNowTime,
                  nextCountdownEndTime: this.nextCountdownEndTime,
                });
                if (
                  ((this.remainObj = i),
                  (this.showMilliseconds = 0 == +i.hour && !i.day),
                  i.remain <= 0)
                ) {
                  (() => {
                    if (
                      (this.activity.isStarted && (this.activity.isEnd = !0),
                      t !== s.a.AUCTION || "SOLD_OUT" !== this.activity.status)
                    ) {
                      var i = this.$getPageQuery();
                      Object(o.a)().dmc.navigate(
                        "GoodsDetail",
                        Object(n.a)({ alias: this.alias }, i)
                      );
                    }
                  })();
                } else {
                  var e = i.day ? 500 : 50;
                  this.tid = setTimeout(this.timeRunner.bind(this), e);
                }
              }
            },
          },
        },
        d = e("9ZMt");
      i.default = d.default.component(r);
    },
  })
);
