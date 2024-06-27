"use strict";
var r = require("~/r");
r(
  "6fLh",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "6fLh": function (e, a, s) {
        s.r(a);
        var r = s("u55p"),
          t = s("Xq7Z");
        Component({
          options: { addGlobalClass: !0 },
          externalClasses: ["mark-type-class", "back-type-class"],
          behaviors: [r.a],
          properties: { type: { type: Number, value: 1 }, markImage: String },
          data: { iconName: "" },
          attached() {
            var { type: e } = this.data;
            4 != +e && this.setData({ iconName: t.c[e] });
          },
        });
      },
    }
  )
);
