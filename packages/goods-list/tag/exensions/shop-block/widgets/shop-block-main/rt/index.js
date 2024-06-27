"use strict";
var r = require("~/r");
r(
  "/GgF",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "/GgF": function (e, s, t) {
      t.r(s);
      var r = t("7/pW"),
        o = t("9mFz"),
        i = getApp();
      Object(r.a)({
        data: { shop: i.$store.state.shop, shopBlockInfo: {}, stickyHeight: 0 },
        properties: {},
        observers: {},
        attached() {
          Object(o.b)(this, ["shopBlockInfo", "stickyHeight"]);
        },
        methods: {},
      });
    },
  })
);
