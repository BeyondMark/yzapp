"use strict";
var r = require("~/r");
r(
  "EYHV",
  Object.assign({}, require("~/v.js").modules, {
    EYHV: function (r, e, t) {
      t.r(e);
      var u = {
          props: { price: { type: Number, default: 0 } },
          computed: {
            priceToNum() {
              return +this.price;
            },
            formatPrice() {
              var r = (this.priceToNum / 100).toString().split(".");
              return 1 === r.length
                ? [...r, "00"]
                : r.length > 1 && r[1] < 10 && r[1].length < 2
                ? [r[0], r[1] + "0"]
                : r;
            },
          },
          ud: !0,
        },
        i = t("9ZMt");
      e.default = i.default.component(u);
    },
  })
);
