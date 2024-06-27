"use strict";
var r = require("~/r");
r(
  "Oh8P",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Oh8P: function (e, r, t) {
      t.r(r);
      var s = t("rqVN"),
        a = t("6i0Q");
      Object(s.b)({
        properties: {
          list: {
            type: Array,
            observer(e) {
              this.setYZData({ highList: e });
            },
          },
        },
        data: {
          highList: [],
          themeColor: "#f44",
          themeBgColor: "rgba(255,64,64,0.1)",
        },
        attached() {
          a.a.getThemeColor("general").then((e) => {
            this.setYZData({
              themeColor: e,
              themeBgColor: "rgba(" + a.a.switchHexToRgb(e).join(",") + ",0.1)",
            });
          });
        },
      });
    },
  })
);
