"use strict";
var r = require("~/r");
r(
  "TCnT",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    TCnT: function (t, e, i) {
      i.r(e);
      var s = i("Fcif"),
        a = i("7/pW"),
        o = i("VmHG");
      Object(a.a)({
        data: { show: !1 },
        attached() {
          Object(o.d)(this, ["goodsDetail", "queryOptions"]),
            Object(o.b)(this, ["ENTER_GOODS_DETAIL"]);
        },
        methods: {
          gotoGoodsDetail() {
            this.ENTER_GOODS_DETAIL(
              Object(s.a)({}, this.data.goodsDetail, {
                umpActivityId: this.data.queryOptions.umpActivityId,
              })
            );
          },
        },
      });
    },
  })
);
