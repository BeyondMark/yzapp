"use strict";
var r = require("~/r");
r(
  "Cff7",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    {
      Cff7: function (e, t, a) {
        a.r(t);
        var r = a("Fcif"),
          o = a("2wjL"),
          s = a("LuQ5"),
          c = getApp(),
          {
            safeArea: { top: i },
            brand: n,
          } = wx.getSystemInfoSync(),
          d = (e) => {
            var { activityInfo: t, queryInfo: a = {} } = e,
              r = "";
            return Object(s.b)(t)
              .then(
                (e) => (
                  1 === e.completePageType &&
                    (r =
                      "/pages/common/webview-page/index?src=" +
                      encodeURIComponent(
                        o.a.add("/wscuser/scrm/member-code", a)
                      )),
                  2 === e.completePageType &&
                    (r = /(^pages)|(^packages)/.test(e.completeJumpUrl)
                      ? "/" + e.completeJumpUrl
                      : e.completeJumpUrl || ""),
                  r
                )
              )
              .catch((e) => {});
          };
        Component({
          properties: { query: Object, kdtId: String },
          data: { isIphoneX: i >= 44 && ("iPhone" === n || "devtools" === n) },
          methods: {
            nextStep() {
              wx.showLoading();
              var { activityInfo: e } = this.data.query,
                t = o.a.add(
                  "/packages/weass/qrcode-process/index",
                  Object(r.a)({}, this.data.query, {
                    bridgeType: "qrcodeProcess",
                    fromMemberCenter: !0,
                  })
                );
              Promise.all([
                Object(s.a)(e, this.data.kdtId),
                d({ activityInfo: e, queryInfo: { kdtId: this.data.kdtId } }),
              ])
                .then((e) => {
                  var [a, r] = e;
                  c.isSwitchTab(r).then((e) => {
                    (e ? wx.switchTab : wx.navigateTo)({
                      url: r || t,
                      success: () => {
                        wx.hideLoading();
                      },
                      fail: () => {
                        wx.reLaunch({ url: r || t });
                      },
                    });
                  });
                })
                .catch(() => {
                  wx.navigateTo({ url: t }).finally(() => wx.hideLoading());
                });
            },
          },
        });
      },
    }
  )
);
