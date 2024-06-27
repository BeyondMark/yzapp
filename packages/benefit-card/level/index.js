"use strict";
var r = require("~/r");
r(
  "u5J/",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "u5J/": function (e, r, s) {
      s.r(r);
      var a = s("qJXH"),
        t = getApp();
      Object(a.b)({
        data: { cardList: [] },
        onLoad(e) {
          var r;
          null == t ||
            null == (r = t.logger) ||
            null == r.appError ||
            r.appError({
              name: "WeappAccessLog",
              appName: "wsc-h5-user",
              logIndex: "wsc_user_log",
              message: "【WeappAccessLog】" + this.route,
              level: "warn",
              extra: e || {},
            }),
            wx.showLoading({ title: "努力加载中" }),
            t
              .request({ path: "/wscuser/scrm/api/benefitcard/levelinfo.json" })
              .then((e) => {
                wx.hideLoading(), this.setYZData({ cardList: e });
              })
              .catch((e) => {});
        },
      });
    },
  })
);
