"use strict";
var r = require("~/r");
r(
  "/1AN",
  Object.assign({}, require("~/v.js").modules, {
    "/1AN": function (t, e, s) {
      s.r(e);
      var r = s("YeA1"),
        o = {
          data: () => ({ tradeTag: {}, goods: { list: [] } }),
          computed: {
            showPrice() {
              var { hasDepositPreSaleGoods: t } = this.tradeTag || {},
                e = this.goods && this.goods.list && this.goods.list.length;
              return t && e > 0;
            },
          },
          created() {
            Object(r.b)(this, ["tradeTag", "goods"]);
          },
          ud: !0,
        },
        a = s("9ZMt");
      e.default = a.default.component(o);
    },
  })
);
