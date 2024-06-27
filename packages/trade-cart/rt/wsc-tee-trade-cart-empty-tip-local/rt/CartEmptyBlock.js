"use strict";
var r = require("~/r");
r(
  "eafM",
  Object.assign({}, require("~/v.js").modules, {
    eafM: function (t, e, o) {
      o.r(e);
      var r = o("YeA1"),
        s = {
          data: () => ({
            showEmptyCart: !1,
            isAuthProtocol: !1,
            themeStyle: "",
          }),
          created() {
            Object(r.b)(this, [
              "isAuthProtocol",
              "showEmptyCart",
              "themeStyle",
            ]);
          },
          methods: {
            toAuth() {
              this.ctx.process.invoke("authProtocol");
            },
          },
          ud: !0,
        },
        a = o("9ZMt");
      e.default = a.default.component(s);
    },
  })
);
