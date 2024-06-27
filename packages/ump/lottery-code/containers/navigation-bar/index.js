"use strict";
var r = require("~/r");
r(
  "s4r7",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    s4r7: function (a, e, t) {
      t.r(e);
      var r = t("Fcif"),
        o = t("u8kV"),
        s = t("svh/");
      Object(o.b)({
        data: { showHomeIcon: !0 },
        mapData: Object(r.a)(
          {},
          Object(s.h)({
            name: (a) => a.activity.name,
            navigationInfo: (a) => a.navigationInfo,
          })
        ),
        attached() {
          var a = getCurrentPages().length <= 1;
          this.setYZData({ showHomeIcon: a });
        },
        methods: {
          toBack() {
            wx.navigateBack();
          },
          toHome() {
            wx.reLaunch({ url: "/packages/home/dashboard/index" });
          },
        },
      });
    },
  })
);
