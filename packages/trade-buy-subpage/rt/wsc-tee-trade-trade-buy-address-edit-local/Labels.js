"use strict";
var r = require("~/r");
r(
  "P/rv",
  Object.assign({}, require("~/v.js").modules, {
    "P/rv": function (e, t, r) {
      r.r(t);
      var a = {
          props: {
            value: { type: String, default: "" },
            themeCss: { type: String, default: "" },
          },
          data: () => ({ labels: ["家", "公司", "学校"] }),
          methods: {
            onSelectLabel(e) {
              this.$emit("changeLabel", { label: e });
            },
          },
          ud: !0,
        },
        l = r("9ZMt");
      t.default = l.default.component(a);
    },
  })
);
