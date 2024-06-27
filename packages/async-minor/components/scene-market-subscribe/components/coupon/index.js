"use strict";
var r = require("~/r");
r(
  "ubgL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ubgL: function (e, t, a) {
      a.r(t);
      var r = a("rqVN"),
        o = a("WNIS"),
        i = a("bdYe"),
        s = a.n(i);
      Object(r.b)({
        properties: { coupon: { type: Object } },
        data: { couponData: {}, valueStyle: "", maxWidthStyle: "" },
        methods: {
          getCouponWidth(e) {
            var t = e ? "max-width-samll" : "max-width-normal";
            this.setYZData({ maxWidthStyle: t });
          },
          computeFontSize(e, t) {
            var a,
              { length: r } = "" + e;
            return (
              (a = r >= 10 ? 12 : r >= 8 ? 16 : r >= 6 ? 20 : r >= 4 ? 24 : 30),
              t ? a - 4 : a
            );
          },
        },
        observers: {
          coupon(e) {
            var t,
              a,
              r,
              {
                title: i,
                value: u,
                thresholdCopywriting: l,
                preferentialMode: n,
                voucherValueGenerateType: c,
                status: h,
                smallSize: p,
              } = e;
            switch (Number(n)) {
              case o.j.NUM:
                c === o.a.RANDOM
                  ? (r = "随机金额")
                  : (t = u ? s()(u, 100) : ""),
                  (a = "元");
                break;
              case o.j.DISCOUNT:
                (t = u ? s()(u, 10) : ""), (a = "折");
                break;
              case o.j.EXCHANGE:
                r = "兑换商品";
            }
            var m = "font-size: " + this.computeFontSize(t, p) + "px",
              d = {
                value: t,
                unit: a,
                title: i,
                couponName: r,
                useCondition: l,
              },
              v = 0 === h ? "已抢完" : h ? "已发放" : "";
            this.getCouponWidth(v),
              this.setYZData({ couponData: d, valueStyle: m, smallSize: p });
          },
        },
      });
    },
  })
);
