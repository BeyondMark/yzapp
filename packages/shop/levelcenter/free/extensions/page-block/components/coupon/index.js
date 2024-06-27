"use strict";
var r = require("~/r");
r(
  "ij+B",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "ij+B": function (e, t, a) {
      a.r(t);
      var o = a("rqVN"),
        s = a("WNIS"),
        r = a("bdYe"),
        i = a.n(r),
        u = a("2wjL");
      Object(o.b)({
        properties: { coupon: { type: Object } },
        data: {
          couponData: {},
          time: 0,
          timeData: { hours: "", minutes: "", seconds: "", milliseconds: "" },
          shouldCount: !1,
          endCount: !1,
          couponStatus: "",
          originalStatus: 0,
          valueStyle: "",
        },
        methods: {
          handleChange(e) {
            var {
              hours: t,
              minutes: a,
              seconds: o,
              milliseconds: s,
            } = e.detail;
            if (t > 0 || a > 0 || o > 0 || s > 0) {
              var r = {
                hours: this.formatNum(t),
                minutes: this.formatNum(a),
                seconds: this.formatNum(o),
                milliseconds: Math.floor(s / 100),
              };
              this.setYZData({ timeData: r });
            } else
              this.setYZData({
                shouldCount: !1,
                endCount: !0,
                couponStatus: "已过期",
              });
          },
          countDowm(e) {
            var t = e - +new Date(),
              a = {
                hours: this.formatNum(Math.floor(t / 3600 / 1e3)),
                minutes: this.formatNum(Math.floor((t % 36e5) / 6e4)),
                seconds: this.formatNum(Math.floor((t % 6e4) / 1e3)),
              };
            this.setYZData({ shouldCount: !0, time: t, timeData: a });
          },
          formatNum: (e) => (e < 10 ? "0" + e : e),
          linkToCoupon() {
            var { couponType: e, couponId: t } = this.properties.coupon,
              a = 1 === e ? s.e.Code : 0 === e ? s.e.Card : s.e.Thirdparty;
            return wx.navigateTo({
              url: u.a.add("/packages/user/coupon/detail/index", {
                id: t,
                from: "levelcenter",
                type: a,
                couponType: e,
              }),
            });
          },
        },
        observers: {
          coupon(e) {
            var t,
              a,
              o,
              r,
              u,
              n,
              {
                title: c,
                value: l,
                thresholdCopywriting: m,
                number: d,
                preferentialMode: h,
                voucherValueGenerateType: p,
                validEndTime: v,
                status: D,
              } = e,
              f = v > +new Date() && v < +new Date() + 864e5,
              N = !1;
            switch (Number(h)) {
              case s.j.NUM:
                if (p === s.a.RANDOM) o = "随机金额";
                else {
                  N = (t = l ? i()(l, 100) : "") % 1 != 0;
                  var b = t.toString().split(".");
                  (n = b[0]), (u = b[1]);
                }
                r = "¥";
                break;
              case s.j.DISCOUNT:
                (t = l ? i()(l, 10) : ""), (a = "折");
                break;
              case s.j.EXCHANGE:
                o = "0元兑换";
                break;
              case s.j.BUY_PRESENT:
                o = "买赠券";
                break;
              case s.j.EXPRESS:
                o = "运费券";
            }
            f && this.countDowm(v);
            var j = {
                hasDecimal: N,
                integerPart: n,
                decimalPart: u,
                value: t,
                unit: a,
                preUnit: r,
                title: c,
                couponName: o,
                useCondition: m,
                number: d,
              },
              C = 0 === D ? "已抢完" : D ? "已发放" : "";
            this.setYZData({
              couponData: j,
              originalStatus: D,
              couponStatus: C,
            });
          },
        },
      });
    },
  })
);
