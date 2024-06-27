"use strict";
var r = require("~/r");
r(
  "+2Za",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "+2Za": function (e, t, a) {
        a.r(t);
        var o = a("KozD"),
          i = {
            name: "flow-change-ump-coupon",
            props: { originData: { type: Object, default: () => ({}) } },
            data: () => ({}),
            computed: {
              couponStyle() {
                return (
                  "height: " +
                  (this.availableGoods.length > 1 ? 140 : 160) +
                  "px"
                );
              },
              availableGoods() {
                var e;
                return (
                  (null == (e = this.originData) ? void 0 : e.availableGoods) ||
                  []
                );
              },
            },
            created() {
              this.logger("view");
            },
            mounted() {},
            methods: {
              logger(e) {
                this.$emit("onLogger", {
                  data: this.originData,
                  type: o.a.coupon,
                  eventType: e,
                });
              },
              handleClick() {
                this.logger("click");
              },
            },
            ud: !0,
          },
          r = a("9ZMt");
        t.default = r.default.component(i);
      },
    }
  )
);
