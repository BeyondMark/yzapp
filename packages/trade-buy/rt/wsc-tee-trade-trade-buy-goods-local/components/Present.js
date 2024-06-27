"use strict";
var r = require("~/r");
r(
  "F15/",
  Object.assign({}, require("~/v.js").modules, {
    "F15/": function (r, e, t) {
      t.r(e);
      var s = {
          props: { present: { type: Object, default: () => ({}) } },
          computed: {
            getSkuStr() {
              var { sku: r } = this.present;
              return (r = Array.isArray(r)
                ? r
                : r && "string" == typeof r
                ? JSON.parse(r)
                : [])
                .map((r) => r.v)
                .join("; ");
            },
            getStock() {
              var { num: r = 1, reason: e, isAvailable: t } = this.present;
              return t ? "x" + r : e;
            },
          },
          ud: !0,
        },
        a = t("9ZMt");
      e.default = a.default.component(s);
    },
  })
);
