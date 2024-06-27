"use strict";
var r = require("~/r");
r(
  "5LHg",
  Object.assign({}, require("~/v.js").modules, {
    "5LHg": function (t, e, i) {
      i.r(e);
      var n = i("Fcif"),
        r = 1,
        o = 2,
        s = 3,
        a = 5,
        u = {
          props: {
            giftPacks: { default: () => [], type: Array },
            show: Boolean,
            generalThemeColor: String,
            isRecharging: Boolean,
            amount: Number,
            kdtId: Number,
            selectedIndex: Number,
            rechargeAndPay: Boolean,
          },
          computed: {
            btnText() {
              return this.rechargeAndPay ? "充值并支付" : "立即充值";
            },
            selectedGiftPack() {
              return 0 === this.giftPacks.length
                ? null
                : 1 === this.giftPacks.length
                ? this.giftPacks[0]
                : this.giftPacks[this.selectedIndex];
            },
            singleRights() {
              if (0 === this.giftPacks.length || this.giftPacks.length > 1)
                return {};
              var t = [],
                { ruleRights: e = {}, ruleCondition: i = {} } =
                  this.giftPacks[0],
                {
                  stages: n,
                  monNum: u,
                  giveGiftType: h,
                  delayGiveHours: m,
                } = i,
                g = "";
              1 === h && (g = m <= 23 ? m + "小时后到账" : m / 24 + "天后到账");
              var l = n ? "分" + n + "个月，每月" + u + "号到账" : "",
                c = (t, e) => (l ? "" + l + t / n + e : ""),
                {
                  bonusAmountRights: f,
                  growthPointRights: d,
                  pointRights: p,
                  memberCardRights: v,
                  presentRights: y,
                  couponRights: k,
                } = e;
              if (f && f.bonusAmount) {
                var A = "";
                (A =
                  1 === f.bonusValidType
                    ? "到账后" + f.bonusValidPeriod + "个月内有效"
                    : c(this.formatAmount(f.bonusAmount), "元")),
                  t.push({
                    key: "赠送金",
                    value: "¥" + this.formatAmount(f.bonusAmount),
                    suffix: A,
                  });
              }
              if (Array.isArray(k)) {
                var P = k.map((t) => {
                    var {
                        condition: e,
                        couponName: i,
                        preferentialCopywriting: n,
                        preferentialType: u,
                        denominations: h,
                        discount: m,
                        validTimeCopywriting: g,
                        count: l,
                      } = t,
                      c = this.formatAmount(e),
                      f = n.split("，")[1],
                      d = "";
                    u === r && ((f = this.formatAmount(h)), (d = "元")),
                      u === o && ((f = m / 10), (d = "折")),
                      u === s && (f = "兑换商品");
                    var p = ((t, e) => {
                      if (e === s || e === a) return 16;
                      if (e === r) {
                        var i = String(t).length;
                        return i >= 7
                          ? 14
                          : i >= 6
                          ? 17
                          : i >= 5
                          ? 20
                          : i >= 4
                          ? 24
                          : 30;
                      }
                      return e === o ? 30 : void 0;
                    })(f, u);
                    return {
                      value: f,
                      condition: c ? "满" + c + "元使用" : "无门槛",
                      name: i,
                      unit: d,
                      validTimeCopywriting: g,
                      count: l,
                      fontSize: p ? p + "px" : (d ? 30 : 16) + "px",
                    };
                  }),
                  b = k.reduce((t, e) => t + e.count, 0);
                t.push({
                  key: "优惠券",
                  value: b + "张",
                  list: P,
                  isCoupon: !0,
                  suffix: c(b, "张券"),
                });
              }
              if (p && p.point) {
                var x = p.customPointName || "积分";
                t.push({ key: x, value: "x" + p.point, suffix: c(p.point, x) });
              }
              return (
                Array.isArray(v) &&
                  t.push({ key: v[0].cardName, value: v.length + "张" }),
                y &&
                  y.presentName &&
                  t.push({ key: y.presentName, value: "x1" }),
                d &&
                  d.growthPoint &&
                  t.push({
                    key: "成长值",
                    value: "x" + d.growthPoint,
                    suffix: c(d.growthPoint, "成长值"),
                  }),
                { list: t, periodText: g }
              );
            },
            giftPack2Render() {
              return this.giftPacks.map((t) =>
                Object(n.a)({}, t, { showAmount: this.formatAmount(t.amount) })
              );
            },
            amount2Render() {
              return this.formatAmount(this.amount);
            },
          },
          methods: {
            formatAmount: (t) => t / 100,
            onRechargeClick() {
              var { isRecharging: t } = this;
              t || this.$emit("recharge");
            },
            onClose() {
              this.$emit("close");
            },
            handleSelect(t) {
              this.$emit("select", t);
            },
          },
          ud: !0,
        },
        h = i("9ZMt");
      e.default = h.default.component(u);
    },
  })
);
