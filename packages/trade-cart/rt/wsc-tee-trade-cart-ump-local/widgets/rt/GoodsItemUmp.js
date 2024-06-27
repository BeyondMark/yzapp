"use strict";
var r = require("~/r");
r(
  "vaBs",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vaBs: function (t, e, i) {
      i.r(e);
      var o = i("Fcif"),
        s = i("B9LC"),
        a = "hour",
        n = "min",
        d = "sec",
        c = {
          name: "goods-item-ump",
          props: { goodsItem: { type: Object, default: () => ({}) } },
          data: () => ({
            countdownData: [
              { type: a, value: "", text: "时", width: "0" },
              { type: n, value: "", text: "分", width: "0" },
              { type: d, value: "", text: "秒", width: "0" },
            ],
            orderSuccessCounter: [],
            timelimitedDiscountLogged: !1,
          }),
          computed: {
            showGoodsActivity() {
              return (
                "timelimitedDiscount" === this.goodsItem.activityTypeStr &&
                this.orderSuccessCounter.length
              );
            },
          },
          watch: {
            showGoodsActivity(t) {
              var e, i, o;
              t &&
                !this.timelimitedDiscountLogged &&
                ((this.timelimitedDiscountLogged = !0),
                null == (e = this.ctx.logger) ||
                  e.log({
                    et: "view",
                    ei: "time_view",
                    en: "活动时间提示曝光",
                    params: {
                      component: "marketing_campaign_time",
                      activity_id:
                        null == (i = this.goodsItem) ? void 0 : i.activityId,
                      goods_id:
                        null == (o = this.goodsItem) ? void 0 : o.goodsId,
                    },
                  }));
            },
          },
          mounted() {
            var t = Date.now(),
              e = this.goodsItem.activityStartTime || 0,
              i = this.goodsItem.activityEndTime || 0,
              c = Math.floor((i - t) / 86400 / 1e3);
            e > t ||
              0 !== c ||
              (this.countDown = new s.a(i > t ? i - t : 0, {
                onChange: (t, e) => {
                  var { hour: i, minute: s, second: c } = e;
                  (this.countdownData = this.countdownData.map((t) => {
                    var e = "";
                    switch (t.type) {
                      case a:
                        e = i;
                        break;
                      case n:
                        e = s;
                        break;
                      case d:
                        e = c;
                    }
                    return Object(o.a)({}, t, {
                      width: 8 * e.length + "px",
                      value: e,
                    });
                  })),
                    (this.orderSuccessCounter =
                      "00" !== i
                        ? this.countdownData.slice(0, 2)
                        : "00" !== s
                        ? this.countdownData.slice(1, 2)
                        : "00" !== c
                        ? this.countdownData.slice(2)
                        : []);
                },
              }));
          },
          destroyed() {
            var t;
            (null == (t = this.countDown) ? void 0 : t.shop) &&
              this.countDown.stop();
          },
          ud: !0,
        },
        u = i("9ZMt");
      e.default = u.default.component(c);
    },
  })
);
