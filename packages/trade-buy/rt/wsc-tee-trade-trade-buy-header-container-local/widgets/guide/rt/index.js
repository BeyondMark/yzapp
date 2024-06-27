"use strict";
var r = require("~/r");
r(
  "So3r",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      So3r: function (e, t, o) {
        o.r(t);
        var r = o("4Ns+"),
          u = {
            props: {
              grouponModel: { type: Object, default: () => ({}) },
              tradeTag: { type: Object, default: () => ({}) },
              themeColors: { type: Object, default: () => ({}) },
            },
            computed: {
              type() {
                return this.grouponModel.isGroupon
                  ? "groupon"
                  : this.tradeTag.hasHotelGoods
                  ? "hotel"
                  : "";
              },
              steps() {
                return "groupon" === this.type
                  ? this.getGrouponActivityRule()
                  : r.a[this.type] || [];
              },
            },
            methods: {
              getGrouponActivityRule() {
                return this.grouponModel.isGroupon ? r.b : [];
              },
            },
            ud: !0,
          },
          s = o("9ZMt");
        t.default = s.default.component(u);
      },
    }
  )
);
