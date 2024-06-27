"use strict";
var r = require("~/r");
r(
  "WYPK",
  Object.assign({}, require("~/v.js").modules, {
    WYPK: function (e, t, r) {
      r.r(t);
      var i = {
          props: { price: { type: String, default: "0.00" } },
          data: () => ({ priceContent: "0.00" }),
          watch: {
            price: {
              immediate: !0,
              handler(e) {
                this.priceContent = e || "0.00";
              },
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(i);
    },
  })
);
