"use strict";
var r = require("~/r");
r(
  "2cbo",
  Object.assign({}, require("~/v.js").modules, {
    "2cbo": function (o, t, s) {
      s.r(t);
      var r = {
          props: { shopName: String, goodsPriceIntro: Object },
          data: () => ({ show: !1 }),
          computed: {
            vanIconClass() {
              var o = ["icon"];
              return this.show && o.push("-rotate"), o.join("");
            },
          },
          methods: {
            toggle() {
              this.show = !this.show;
            },
          },
          ud: !0,
        },
        e = s("9ZMt");
      t.default = e.default.component(r);
    },
  })
);
