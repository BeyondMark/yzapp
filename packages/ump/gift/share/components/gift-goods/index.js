"use strict";
var r = require("~/r");
r(
  "WyWD",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    WyWD: function (e, r, s) {
      s.r(r);
      var t = s("rqVN");
      Object(t.b)({
        properties: { goodsInfo: Object },
        methods: {
          handleGoodsClick() {
            this.triggerEvent("jump");
          },
        },
      });
    },
  })
);
