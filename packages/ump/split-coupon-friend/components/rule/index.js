"use strict";
var r = require("~/r");
r(
  "Fsap",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Fsap: function (e, s, t) {
      t.r(s);
      var a = t("Fcif"),
        i = t("u8kV"),
        r = t("svh/");
      Object(i.b)({
        mapData: Object(a.a)(
          {},
          Object(r.h)(["activityInfo", "shopName"]),
          Object(r.f)(["rules"])
        ),
        data: { rulesVisible: !1 },
        methods: {
          toggleRules() {
            this.setYZData({ rulesVisible: !this.data.rulesVisible });
          },
        },
      });
    },
  })
);
