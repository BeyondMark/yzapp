"use strict";
var r = require("~/r");
r(
  "u1mO",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    u1mO: function (e, t, s) {
      s.r(t);
      var a = s("2wjL"),
        i = s("42EB"),
        o = s("GFyo"),
        r = s("Yt9W"),
        d = s("z24M");
      Page({
        onLoad(e) {
          if (
            (void 0 === e && (e = {}),
            e.title &&
              wx.setNavigationBarTitle({ title: decodeURIComponent(e.title) }),
            (e.src = e.src || e.url),
            e.src)
          ) {
            var t = decodeURIComponent(e.src);
            if ("tableBooking" === e.type) {
              var { latitude: s = "", longitude: i = "" } = e,
                o = "MINAPP-FREE-" + Object(d.a)("userVersion");
              t = a.a.add(t, { latitude: s, longitude: i, retailSource: o });
            }
            this.setData({ viewSrc: t });
          }
          this.setWebviewLog(),
            (this.__webviewMsg = {}),
            (this._isNeedLog = !1);
        },
        onShow() {
          this._isNeedLog && this.enterPageLog();
        },
        setWebviewLog() {
          getApp()
            .request({
              path: "/wscgoods/weapp/get-page-gray-release.json",
              query: { pageKey: "weapp-log-shop" },
            })
            .then((e) => {
              (this._isNeedLog = e), e && this.enterPageLog();
            });
        },
        enterPageLog() {
          Object(r.d)(
            "pages/common/webview-page/index",
            "",
            {},
            "weappWebview"
          );
        },
        handlePostMessage(e) {
          i.a.call(this, e.detail.data || []),
            e.detail.data.forEach((e) => {
              "chosenAppointment" === e.type
                ? Object(o.g)("chosenAppointment", e)
                : e.checkedStudent &&
                  Object(o.g)("recentSelectedStudent", e.checkedStudent);
            });
        },
        onShareAppMessage() {
          var { src: e, url: t } = this.options || {},
            s = e || t,
            i = s
              ? a.a.add("/" + this.route, { src: s })
              : "/packages/home/dashboard/index";
          return this.__webviewMsg["ZNB.share"] || { path: i };
        },
      });
    },
  })
);
