"use strict";
var r = require("~/r");
r(
  "15cZ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "15cZ": function (r, e, t) {
      t.r(e);
      var i = t("rqVN");
      Object(i.b)({
        properties: {
          btnTxt: String,
          goods: { type: Array, default: () => [] },
        },
        methods: {
          handleClick() {
            this.triggerEvent("prompt-click");
          },
        },
      });
    },
  })
);
