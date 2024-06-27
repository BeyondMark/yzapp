"use strict";
var r = require("~/r");
r(
  "z02C",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      z02C: function (t, e, a) {
        a.r(e);
        var r = a("EqB2"),
          o = a("YRPs"),
          s = {
            mixins: [Object(r.a)({ optDesc: o.a })],
            data: () => ({ rate: 0.85 }),
            computed: {
              couponData() {
                return this.opt;
              },
              fontStyle() {
                return (
                  (this.couponData.bigNum ? "small-font" : "") +
                  " " +
                  (this.couponData.biggerNum ? "smaller-font" : "")
                );
              },
              containerStyle() {
                return "1-1" === this.couponData.ratio
                  ? "transform: scale(" + this.rate + ")"
                  : "";
              },
            },
            mounted() {
              this.calcRate();
            },
            methods: {
              calcRate() {
                this.createSelectorQuery()
                  .select("#points-coupon-box")
                  .boundingClientRect((t) => {
                    t && t.width && (this.rate = (0.9 * t.width) / 169);
                  })
                  .exec();
              },
            },
            ud: !0,
          },
          i = a("9ZMt");
        e.default = i.default.component(s);
      },
    }
  )
);
