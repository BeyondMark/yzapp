"use strict";
var r = require("~/r");
r(
  "3afE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "3afE": function (e, t, a) {
      a.r(t);
      var i = a("Fcif"),
        r = a("2wjL"),
        s = a("8B9M"),
        o = a("qJXH"),
        n = a("lRMv"),
        d = Object(s.a)();
      Object(o.b)({
        data: { src: "" },
        onLoad(e) {
          wx.showLoading({ title: "加载中..." });
          var t = r.a.add("/" + this.route, e);
          (this.$_pageLink = t),
            Object(n.g)(Object(i.a)({}, e, { redirectUrl: t }))
              .then(() => {
                var e = r.a.add("https://h5.youzan.com/wscump/welike", {
                  kdtId: d.getKdtId(),
                });
                this.setYZData({ src: e }), this.init(), wx.hideLoading();
              })
              .catch((e) => {
                wx.hideLoading(),
                  wx.showModal({
                    title: "访问异常",
                    content: "" + (e || "请稍后重试"),
                  });
              });
        },
        init() {
          var e;
          null == (e = d.logger) || e.setContext({ from_welike: 1 }, 1);
        },
        onMessage(e) {
          var t,
            a = (e.detail.data || []).filter((e) => "WELIKE.share" === e.type);
          this.$_shareConfig = null == (t = a.pop()) ? void 0 : t.config;
        },
        onShareAppMessage() {
          var { title: e, path: t, imageUrl: a } = this.$_shareConfig || {};
          return { path: t || this.$_pageLink, title: e, imageUrl: a };
        },
      });
    },
  })
);
