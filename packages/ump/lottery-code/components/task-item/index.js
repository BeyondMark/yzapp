"use strict";
var r = require("~/r");
r(
  "2hVT",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "2hVT": function (e, t, r) {
      r.r(t);
      var i = r("u8kV");
      Object(i.b)({
        properties: {
          icon: String,
          title: String,
          preDesc: String,
          nextDesc: String,
          btnText: String,
          num: Number,
          disabled: { type: Boolean, value: !1 },
          bottomLine: { type: Boolean, value: !0 },
        },
        methods: {
          handleClick() {
            this.data.disabled || this.triggerEvent("click");
          },
        },
      });
    },
  })
);
