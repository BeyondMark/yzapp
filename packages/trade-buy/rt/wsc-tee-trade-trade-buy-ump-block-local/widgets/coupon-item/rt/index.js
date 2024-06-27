"use strict";
var r = require("~/r");
r(
  "zMnP",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      zMnP: function (o, e, n) {
        n.r(e);
        var r = n("87Y/"),
          t = n.n(r),
          s = n("snsr"),
          i = {
            props: {
              coupon: Object,
              chosenCoupons: Array,
              disabled: Boolean,
              currency: { type: String, default: "¥" },
              color: String,
              priceColor: String,
              canCheck: { type: Boolean, default: !0 },
              needNum: { type: Boolean, default: !1 },
              noClick: { type: Boolean, default: !1 },
            },
            computed: {
              chosen() {
                var o;
                return !(
                  null == (o = this.chosenCoupons) ||
                  !o.find((o) => o.id === this.coupon.id)
                );
              },
              canChosenCouponsOverlying() {
                return this.chosenCoupons.some((o) => o.canOverlying);
              },
              getChosenStatus() {
                var o;
                return !(
                  null == (o = this.chosenCoupons) ||
                  !o.find((o) => o.id === this.coupon.id)
                );
              },
              cornerTag() {
                var { length: o } = this.chosenCoupons;
                return this.canChosenCouponsOverlying &&
                  o < 3 &&
                  this.coupon.canOverlying &&
                  !this.chosen
                  ? "可叠加"
                  : "";
              },
              extraDescription() {
                return !this.canChosenCouponsOverlying ||
                  this.coupon.canOverlying ||
                  this.chosen
                  ? ""
                  : "此券暂不可和已勾选的券叠加";
              },
              validPeriod() {
                var o,
                  { coupon: e } = this;
                return e
                  ? (null == (o = e.extraInfo)
                      ? void 0
                      : o.validPeriodCopywriting) ||
                      Object(s.b)(e.startAt) + " - " + Object(s.b)(e.endAt)
                  : "";
              },
              couponLabel() {
                var { extraInfo: o = {} } = this.coupon || {},
                  { externalPlatformType: e = "" } = o,
                  n = s.a[e];
                return { hasLabel: e && n, label: n };
              },
              overlayingTagStyle() {
                return "color: " + this.color + "; border-color: " + this.color;
              },
              isYuanUnit() {
                return "元" === this.coupon.unitDesc;
              },
              showDecimal() {
                return (
                  this.coupon.valueDesc.includes(".") &&
                  +this.coupon.valueDesc.split(".")[0]
                );
              },
              couponPriceDecimal() {
                return this.coupon.valueDesc.split(".");
              },
              couponLabelStyle() {
                return (
                  "color: " +
                  this.priceColor +
                  "; background-color: " +
                  this.priceColor +
                  "38"
                );
              },
              vts() {
                return (
                  "color: " +
                  this.color +
                  "; background-color: " +
                  t()(this.color, 0.1)
                );
              },
            },
            methods: {
              onClick() {
                this.$emit("onChange", this.coupon.id);
              },
            },
            ud: !0,
          },
          c = n("9ZMt");
        e.default = c.default.component(i);
      },
    }
  )
);
