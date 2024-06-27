"use strict";
var r = require("~/r");
r(
  "0tRK",
  Object.assign({}, require("~/v.js").modules, {
    "0tRK": function (e, i, r) {
      r.r(i);
      var t = {
          props: {
            showLocalDeliveryTime: Boolean,
            deliveryTime: String,
            isLink: Boolean,
          },
          data: () => ({}),
          methods: {
            onClick() {
              this.$emit("onDeliveryTimeClick");
            },
          },
          ud: !0,
        },
        o = r("9ZMt");
      i.default = o.default.component(t);
    },
  })
);
