"use strict";
var r = require("~/r");
r(
  "sfc9",
  Object.assign({}, require("~/v.js").modules, {
    sfc9: function (e, t, a) {
      a.r(t);
      var d = {
          props: {
            order: { type: Object, default: () => ({ buyerMsg: "" }) },
            goods: { type: Object, default: () => ({ list: [] }) },
            buyerMsgTips: Object,
            customStyle: {
              type: String,
              default:
                "padding: var(--theme-page-cell-padding-top, 10px) var(--theme-page-cell-padding-right, 12px) var(--theme-page-cell-padding-bottom, 10px) var(--theme-page-cell-padding-left, 12px)",
            },
          },
          methods: {
            handleChange(e) {
              this.$emit("change", e.value);
            },
            handleFocus() {
              this.$emit("focus");
            },
          },
          ud: !0,
        },
        r = a("9ZMt");
      t.default = r.default.component(d);
    },
  })
);
