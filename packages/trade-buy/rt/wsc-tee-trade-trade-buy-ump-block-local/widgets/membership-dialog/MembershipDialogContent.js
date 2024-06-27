"use strict";
var r = require("~/r");
r(
  "ZQHH",
  Object.assign({}, require("~/v.js").modules, {
    ZQHH: function (e, t, l) {
      l.r(t);
      var s = {
          props: {
            show: Boolean,
            themeColors: Object,
            themeTag: { type: Object, default: () => ({ plain: !1 }) },
            customerCards: {
              type: Object,
              default: () => ({ list: [], id: null }),
            },
            display: { type: Object, default: () => ({ openDisplayCard: !1 }) },
            unavailableCustomerCards: {
              type: Object,
              default: () => ({ list: [] }),
            },
          },
          methods: {
            onSelect(e) {
              this.$emit("onSelect", e);
            },
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        a = l("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
