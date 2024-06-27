"use strict";
var r = require("~/r");
r(
  "my82",
  Object.assign({}, require("~/v.js").modules, {
    my82: function (e, t, r) {
      r.r(t);
      var i = {
          name: "GoodsPrice",
          props: {
            price: { type: String, default: "" },
            prefix: { type: String, default: "" },
            customStyle: { type: String, default: "" },
            isSkyline: { type: Boolean, default: !1 },
          },
          computed: {
            integer() {
              var e, t;
              return null !=
                (e = null == (t = this.price.split(".")) ? void 0 : t[0])
                ? e
                : "";
            },
            decimal() {
              var e, t;
              return null !=
                (e = null == (t = this.price.split(".")) ? void 0 : t[1])
                ? e
                : "";
            },
          },
          ud: !0,
        },
        l = r("9ZMt");
      t.default = l.default.component(i);
    },
  })
);
