"use strict";
var r = require("~/r");
r(
  "vbx1",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vbx1: function (e, r, t) {
      t.r(r);
      var s = t("Fcif"),
        a = t("u8kV"),
        u = t("svh/");
      Object(a.b)({
        mapData: Object(s.a)({}, Object(u.f)(["avatarList"])),
        properties: {
          goods: { type: Object, value: {} },
          goodsIndex: { type: Number, value: 0 },
        },
      });
    },
  })
);
