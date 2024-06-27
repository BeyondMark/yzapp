"use strict";
var r = require("~/r");
r(
  "uZWk",
  Object.assign({}, require("~/v.js").modules, {
    uZWk: function (e, t, r) {
      r.r(t);
      var i = {
          props: { description: String },
          data: () => ({ valueStyle: "" }),
          mounted() {
            var e = 20 - this.description.length;
            e > 12 && (e = 12), (this.valueStyle = "font-size: " + e + "px");
          },
          ud: !0,
        },
        u = r("9ZMt");
      t.default = u.default.component(i);
    },
  })
);
