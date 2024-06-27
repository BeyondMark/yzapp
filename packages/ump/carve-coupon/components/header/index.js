"use strict";
var r = require("~/r");
r(
  "xvUS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    xvUS: function (e, s, t) {
      t.r(s);
      var r = t("Fcif"),
        i = t("u8kV"),
        a = t("svh/");
      Object(i.b)({
        mapData: Object(r.a)(
          {},
          Object(a.h)(["rules"]),
          Object(a.f)(["shopConcat"])
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
