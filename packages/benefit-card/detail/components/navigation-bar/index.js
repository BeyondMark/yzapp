"use strict";
var r = require("~/r");
r(
  "9UXq",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "9UXq": function (e, r, t) {
      t.r(r);
      var a = t("rqVN"),
        s = t("GFa9"),
        i = t("QLod"),
        { APP_HOMEPAGE_ROUTE: u } = i.b;
      Object(a.b)({
        properties: {
          opacityVal: Number,
          statusH: Number,
          text: { type: String, value: "" },
          alias: String,
        },
        methods: {
          onHomeTap() {
            s.a.switchTab({ url: "/" + u });
          },
          onBackTap() {
            1 === getCurrentPages().length
              ? this.onHomeTap()
              : wx.navigateBack();
          },
        },
      });
    },
  })
);
