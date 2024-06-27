"use strict";
var r = require("~/r");
r(
  "JSiW",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    JSiW: function (e, r, s) {
      s.r(r);
      var t = s("rqVN");
      Object(t.b)({
        properties: {
          detail: { type: Object, value: {} },
          source: { type: Number, value: null },
        },
        methods: {
          onClose() {
            this.triggerEvent("close");
          },
          toggleSubscribeMask(e) {
            this.triggerEvent("toggle-subscribe-mask", e.detail);
          },
        },
      });
    },
  })
);
