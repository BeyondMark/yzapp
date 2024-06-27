"use strict";
var r = require("~/r");
r(
  "FRB7",
  Object.assign({}, require("~/v.js").modules, {
    FRB7: function (e, t, s) {
      s.r(t);
      var d = s("YeA1"),
        o = {
          data: () => ({ showExtHolder: !1, widgetCpsRecommendGoodsInit: !1 }),
          created() {
            Object(d.b)(this, ["showExtHolder"]),
              (this.widgetCpsRecommendGoodsInit =
                !!this.ctx.widgets.CpsRecommendGoods);
          },
          ud: !0,
        },
        r = s("9ZMt");
      t.default = r.default.component(o);
    },
  })
);
