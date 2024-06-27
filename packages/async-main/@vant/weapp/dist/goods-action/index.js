"use strict";
var r = require("~/r");
r(
  "uhn3",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    uhn3: function (e, r, t) {
      t.r(r);
      var o = t("py6f"),
        a = t("NeL/");
      Object(o.a)({
        relation: Object(a.a)("goods-action-button", function () {
          this.children.forEach((e) => {
            e.updateStyle();
          });
        }),
        props: { safeAreaInsetBottom: { type: Boolean, value: !0 } },
      });
    },
  })
);
