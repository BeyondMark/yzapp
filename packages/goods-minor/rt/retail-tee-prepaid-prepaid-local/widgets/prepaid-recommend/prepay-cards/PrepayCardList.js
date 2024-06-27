"use strict";
var r = require("~/r");
r(
  "LOmW",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      LOmW: function (e, r, a) {
        a.r(r);
        var t = a("z9IR"),
          s = a("m72t"),
          d = {
            props: {
              show: Boolean,
              cardType: String,
              disabled: Boolean,
              valueCard: Object,
              hasExclusionCard: Boolean,
              that: Object,
              themeColors: { type: Object, default: () => ({}) },
            },
            computed: {
              formatValueCard() {
                var { valueCard: e, cardType: r, disabled: a } = this,
                  t = JSON.parse(JSON.stringify(e));
                return s.a(t, r, a);
              },
              showList() {
                var { cardType: e, disabled: r } = this;
                return s.e({ valueCard: this.formatValueCard }, e, r);
              },
              title() {
                var { cardType: e } = this;
                return s.f(e);
              },
              cardList() {
                var { cardType: e, disabled: r } = this,
                  a = s.c({ valueCard: this.formatValueCard }, e, r);
                return (
                  a.forEach((a) => {
                    var t = s.b({ valueCard: this.formatValueCard }, a, e, r);
                    a.__isChecked = t;
                  }),
                  a
                );
              },
              showLimit() {
                var { cardType: e, disabled: r } = this;
                return s.d({ valueCard: this.formatValueCard }, e, r);
              },
            },
            methods: {
              ensure(e) {
                var { cardType: r, that: a } = this,
                  { checked: s = [] } = this[r] || {};
                if (e.isExclusion) {
                  var d =
                    "若使用该类卡，将不能享受店铺活动、优惠券、积分、储值专享折扣等优惠。是否继续使用该卡？";
                  return (
                    s.indexOf(e.summaryCardNo) > -1
                      ? (d = "若取消使用该类卡，系统将重新计算所有优惠活动价格")
                      : "overlay_carriageDiscount_customerPostageFree_deliveryCard_postFree" ===
                          e.overlayExclusionCode &&
                        (d =
                          "使用该类卡后将无法享受店铺活动、积分等优惠，但仍可享受包邮，确认是否继续使用？"),
                    t.a.confirm({ message: d, context: a })
                  );
                }
                return Promise.resolve();
              },
              onCheck(e) {
                var { disabled: r, cardType: a } = this;
                r ||
                  this.ensure(e)
                    .then(() => {
                      this.$emit("onCheck", { card: e, cardType: a });
                    })
                    .catch(() => {});
              },
            },
            ud: !0,
          },
          i = a("9ZMt");
        r.default = i.default.component(d);
      },
    }
  )
);
