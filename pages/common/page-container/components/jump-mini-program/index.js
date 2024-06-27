"use strict";
var r = require("~/r");
r(
  "oxmn",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    oxmn: function (e, a, t) {
      t.r(a);
      var i = t("rqVN"),
        r = getApp(),
        s = { afterPay: ["packages/order/paid/index"] };
      Object(i.b)({
        data: { jumpConfig: { isActive: !1 } },
        attached() {
          var e = getCurrentPages(),
            a = e[e.length - 1].route,
            t = r.globalData.navigateMiniProgramConfig;
          if (t)
            if (0 !== Object.keys(t).length) {
              var i = t.theme || {},
                n = {};
              Object.keys(i).forEach((e) => {
                var t = i[e] || {};
                t.isActive
                  ? (n = Object.assign(n, t))
                  : (s[e] || []).indexOf(a) > -1 &&
                    ((t.isActive = !0), (n = Object.assign(n, t)));
              });
              var g = t.page || {};
              g[a] && (n = Object.assign(n, g[a])),
                this.setYZData({ jumpConfig: n });
              var c = ((r.getNavConfig() || {}).list || []).filter(
                (e) => e.page_path === a
              );
              this.setYZData({ "jumpConfig.inNavPage": c.length > 0 });
            } else
              this.setYZData({
                jumpConfig: { isActive: !0, showReturnBtn: !0 },
              });
        },
        methods: {
          handleBack() {
            wx.navigateBackMiniProgram();
          },
        },
      });
    },
  })
);
