"use strict";
var r = require("~/r");
r(
  "/NRQ",
  Object.assign({}, require("~/v.js").modules, {
    "/NRQ": function (t, e, r) {
      r.r(e);
      var o = {
          props: { protocol: Object },
          methods: {
            navigate(t) {
              var e = "https://cashier.youzan.com/assets/protocol/" + t.no;
              this.$emit("navigate", e);
            },
          },
          ud: !0,
        },
        s = r("9ZMt");
      e.default = s.default.component(o);
    },
  })
);
