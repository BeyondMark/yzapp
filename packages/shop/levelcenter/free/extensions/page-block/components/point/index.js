"use strict";
var r = require("~/r");
r(
  "xBXL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    xBXL: function (t, e, s) {
      s.r(e);
      var a = s("rqVN"),
        i = getApp();
      Object(a.b)({
        properties: { point: { type: Object } },
        data: { pointsName: "积分", smallSize: !1, statusStr: "" },
        attached() {
          this.initPointsName();
        },
        methods: {
          initPointsName() {
            i.getPointsName().then((t) => {
              var { pointsName: e = "积分" } = t;
              this.setYZData({ pointsName: e });
            });
          },
          getStatusStr: (t) => (2 === t ? "已领" : t ? "未领" : ""),
        },
        observers: {
          point(t) {
            var { smallSize: e, status: s } = t,
              a = this.getStatusStr(s);
            this.setYZData({ smallSize: e, statusStr: a });
          },
        },
      });
    },
  })
);
