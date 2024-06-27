"use strict";
var r = require("~/r");
r(
  "xy0h",
  Object.assign({}, require("~/v.js").modules, {
    xy0h: function (e, t, d) {
      d.r(t);
      var o = d("YeA1"),
        s = {
          data: () => ({ showExtHolder: !1, widgetRecommendGoodsInit: !1 }),
          created() {
            Object(o.b)(this, ["showExtHolder"]),
              (this.widgetRecommendGoodsInit =
                !!this.ctx.widgets.RecommendGoods);
          },
          ud: !0,
        },
        r = d("9ZMt");
      t.default = r.default.component(s);
    },
  })
);
