"use strict";
var r = require("~/r");
r(
  "mB+1",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "mB+1": function (e, s, t) {
        t.r(s);
        var r = t("rqVN"),
          a = t("yNXm");
        Object(r.b)({
          properties: {
            title: { type: String, value: "中奖名单" },
            winners: Array,
            themeColor: { type: String, value: a.g },
          },
          attached() {
            this.setYZData({ isCollapse: !0 });
          },
          data: () => ({ isCollapse: !0 }),
          methods: {
            toggleCollapseWinner() {
              this.setYZData({ isCollapse: !this.data.isCollapse });
            },
          },
        });
      },
    }
  )
);
