"use strict";
var r = require("~/r");
r(
  "PmE5",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    PmE5: function (e, s, t) {
      t.r(s);
      var r = t("7/pW"),
        o = t("VmHG");
      Object(r.a)({
        options: { styleIsolation: "shared" },
        data: {},
        properties: {},
        observers: {},
        attached() {
          Object(o.d)(this, ["isEmpty", "isShowProducts", "goodsOpt"]),
            Object(o.b)(this, ["handleRootTap"]);
        },
        methods: {},
      });
    },
  })
);
