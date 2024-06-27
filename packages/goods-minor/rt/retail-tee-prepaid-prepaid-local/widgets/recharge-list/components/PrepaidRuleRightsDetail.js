"use strict";
var r = require("~/r");
r(
  "VFKK",
  Object.assign({}, require("~/v.js").modules, {
    VFKK: function (t, i, e) {
      e.r(i);
      var r = e("Fcif"),
        s = {
          formatPrice: (t) =>
            t % 100 == 0 ? Math.round(t / 100) : (t / 100).toFixed(2),
          getInvalidClass: (t) => (t ? "item__disabled" : ""),
          getInvalidText: (t) => t + "，充值后无法获赠",
        },
        a = {
          props: { giftPack: { type: Object, default: () => {} } },
          data: () => ({}),
          computed: {
            ruleRights() {
              return this.giftPack ? this.giftPack.ruleRights : {};
            },
            bonusAmountRights() {
              var t = this.ruleRights.bonusAmountRights || {};
              return (
                (t.bonusAmount_FormatePrice = s.formatPrice(t.bonusAmount)),
                (t.suffix = this.getDividePeriodSuffix(
                  t.bonusAmount / 100,
                  "元"
                )),
                t
              );
            },
            couponRights() {
              var t = this.ruleRights.couponRights || [];
              return (
                t.forEach((t) => {
                  (t.invalidText_FormatClass = s.getInvalidClass(
                    !!t.invalidText
                  )),
                    (t.invalidText_FormatText = s.getInvalidText(
                      t.invalidText
                    )),
                    (t.suffix = this.getDividePeriodSuffix(t.count, "张"));
                }),
                t
              );
            },
            growthPointRights() {
              var { growthPointRights: t = {} } = this.ruleRights;
              return Object(r.a)({}, t, {
                suffix: this.getDividePeriodSuffix(t.growthPoint, "成长值"),
              });
            },
            memberCardRights() {
              var t,
                { giftPack: i } = this,
                e =
                  (null == i || null == (t = i.ruleRights)
                    ? void 0
                    : t.memberCardRights) || [];
              return (
                e.forEach((t) => {
                  (t.invalidText_FormatClass = s.getInvalidClass(
                    !!t.invalidText
                  )),
                    (t.invalidText_FormatText = s.getInvalidText(
                      t.invalidText
                    ));
                }),
                e
              );
            },
            pointRights() {
              var { pointRights: t = {} } = this.ruleRights;
              return Object(r.a)({}, t, {
                suffix: this.getDividePeriodSuffix(
                  t.point,
                  t.customPointName || "积分"
                ),
              });
            },
            presentRights() {
              var t,
                { giftPack: i } = this,
                e =
                  (null == i || null == (t = i.ruleRights)
                    ? void 0
                    : t.presentRights) || {};
              return (
                (e.invalidText_FormatText = s.getInvalidText(e.invalidText)),
                (e.invalidText_FormatClass = s.getInvalidClass(
                  !!e.invalidText
                )),
                e
              );
            },
          },
          methods: {
            getDividePeriodSuffix(t, i) {
              var { ruleCondition: e = {} } = this.giftPack,
                { stages: r, monNum: s } = e;
              if (!r) return "";
              var a = r ? "分" + r + "个月，每月" + s + "号到账" : "";
              return a ? "" + a + t / r + i : "";
            },
          },
          ud: !0,
        },
        n = e("9ZMt");
      i.default = n.default.component(a);
    },
  })
);
