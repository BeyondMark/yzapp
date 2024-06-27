"use strict";
var r = require("~/r");
r(
  "5zVK",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "5zVK": function (e, o, i) {
        i.r(o);
        var t = i("aury"),
          s = i("Wzyf"),
          u = {
            props: {
              coupon: { type: Object, default: () => ({}) },
              hasArrow: Boolean,
              index: Number,
              kdtId: Number,
              showRule: { type: Boolean, default: !1 },
            },
            computed: {
              blockHeight() {
                var { activityLeadInMembershipInfo: e = {} } = this.coupon,
                  { needGuide: o } = e,
                  i =
                    this.coupon.goodsList && this.coupon.goodsList.length > 0
                      ? 112
                      : 92;
                return (
                  o && (i = 132),
                  this.hasRule && this.showRule && (i += 30),
                  i + "px"
                );
              },
              isSuper() {
                var { matchIdentityType: e, identities: o = [] } = this.coupon;
                return o.length ? o.includes(1) : ![3, void 0].includes(e);
              },
              tagName() {
                return this.isSuper ? "会员专享" : "";
              },
              guideInfo() {
                var { activityLeadInMembershipInfo: e = {} } = this.coupon,
                  { needGuide: o, guideType: i, guideTargetAlias: s } = e;
                return {
                  needGuide: o,
                  guideTip: t.a[i],
                  guideType: i,
                  guideTargetAlias: s,
                };
              },
              isYuanUnit() {
                return "元" === this.coupon.unit;
              },
              showDecimal() {
                return this.coupon.headValue.includes(".");
              },
              couponPriceDecimal() {
                return this.coupon.headValue.split(".");
              },
              hasRule() {
                return !!this.coupon.overlayCopywriting;
              },
              promotionClass() {
                var e =
                  this.coupon.goodsList && this.coupon.goodsList.length > 0;
                return [
                  e ? "promotion--showcase" : "",
                  this.isSuper ? "promotion--vip" : "",
                  this.hasRule && this.showRule
                    ? e
                      ? "promotion--goodsrule"
                      : "promotion--rule"
                    : "",
                ].join(" ");
              },
            },
            methods: {
              handleAuthNext() {
                "open" !== this.$_from
                  ? this.$emit("click", this.index)
                  : Object(s.b)(this.guideInfo, this.kdtId);
              },
              handlePromotion() {
                this.$_from = "promotion";
              },
              handleOpen() {
                this.$_from = "open";
              },
            },
            ud: !0,
          },
          n = i("9ZMt");
        o.default = n.default.component(u);
      },
    }
  )
);
