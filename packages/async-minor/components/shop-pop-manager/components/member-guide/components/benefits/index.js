"use strict";
var r = require("~/r");
r(
  "ym8X",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ym8X: function (e, t, n) {
      n.r(t);
      var s = n("rqVN"),
        o = function (e) {
          void 0 === e &&
            (e = { thresholdAmount: -1, thresholdCopywriting: "" });
          var { thresholdAmount: t, thresholdCopywriting: n } = e,
            s = Number(t);
          return s <= -1 || Number.isNaN(s)
            ? ""
            : 0 === s
            ? "满任意金额可用"
            : n;
        },
        r = getApp();
      Object(s.b)({
        options: { multipleSlots: !0 },
        properties: { benefits: { type: Object } },
        data: {
          benefitNum: 0,
          coupons: [],
          couponsNum: 0,
          points: {},
          presents: [],
          tickets: [],
        },
        observers: {
          benefits(e) {
            var {
                presentList: t,
                couponList: n,
                points: s,
              } = null != e ? e : {},
              i = Math.min(
                [t.length, n.length, s.points ? 1 : 0].reduce(
                  (e, t) => e + (null != t ? t : 0),
                  0
                ),
                3
              );
            r.getPointsName().then((e) => {
              var r,
                u,
                { pointsName: p = "积分" } = e,
                l = [];
              (t.forEach((e) => {
                l.push({ icon: "present", label: e.presentName, desc: "" });
              }),
              n.forEach((e) => {
                l.push({
                  icon: "coupon",
                  label:
                    (e.number > 1 ? e.number + "张" : "") +
                    e.couponCopyWritingStr,
                  desc: o(e),
                });
              }),
              s.points > 0) &&
                l.push({
                  icon: "points",
                  label: (null != (u = s.points) ? u : 0) + " " + p,
                  desc: "",
                });
              this.setYZData({
                benefitNum: i,
                coupons: null != n ? n : [],
                couponsNum: n.reduce((e, t) => e + (t.number || 0), 0),
                points: {
                  value: null != (r = null == s ? void 0 : s.points) ? r : 0,
                  unit: p,
                },
                presents: t,
                tickets: l.slice(0, 2),
              });
            });
          },
        },
      });
    },
  })
);
