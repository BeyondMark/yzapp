"use strict";
var r = require("~/r");
r(
  "PXai",
  Object.assign({}, require("~/v.js").modules, {
    PXai: function (e, t, a) {
      a.r(t);
      var l = {
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
        s = a("9ZMt");
      t.default = s.default.component(l);
    },
  })
);
