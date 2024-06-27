"use strict";
var r = require("~/r");
r(
  "hzsA",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    hzsA: function (s, e, t) {
      t.r(e);
      var a = t("Fcif"),
        r = t("u8kV"),
        c = t("svh/"),
        o = t("RY8z");
      Object(r.b)({
        mapData: Object(a.a)(
          {},
          Object(c.h)(["showBuy", "taskGoodsList", "currentTask"])
        ),
        methods: Object(a.a)(
          {},
          Object(c.g)(["TOGGLE_SHEET_SHOW", "TOGGLE_TASK_POPUP"]),
          {
            toCart() {
              o.a.switchTab({ url: "/packages/goods/cart/index" });
            },
            onClose() {
              this.TOGGLE_TASK_POPUP({ name: "showBuy", value: !1 });
            },
          }
        ),
      });
    },
  })
);
