"use strict";
var r = require("~/r");
r(
  "Ngxq",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Ngxq: function (e, r, s) {
      s.r(r);
      var t = s("7/pW");
      Object(t.a)({
        properties: {
          show: { type: Boolean, value: !1 },
          wecomCustomerQrCode: { type: String, value: "" },
        },
        methods: {
          close() {
            this.triggerEvent("close");
          },
        },
      });
    },
  })
);
