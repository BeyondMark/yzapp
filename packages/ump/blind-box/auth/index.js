"use strict";
var r = require("~/r");
r(
  "g5o7",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    g5o7: function (e, t, a) {
      a.r(t);
      var s = a("Fcif"),
        r = a("2wjL"),
        i = a("qJXH"),
        d = a("42EB"),
        o = a("lRMv"),
        c = getApp();
      Object(i.b)({
        data: { viewSrc: "" },
        onLoad(e) {
          var { umpType: t = "", umpAlias: a = "", src: i, title: d } = e;
          if (
            (d && wx.setNavigationBarTitle({ title: decodeURIComponent(d) }),
            (this.__webviewMsg = {}),
            a && t)
          ) {
            var n = r.a.add("/" + this.route, e);
            Object(o.g)(
              Object(s.a)({}, e, { umpAlias: a, umpType: t, redirectUrl: n })
            ).then(() => {
              var e = r.a.add(decodeURIComponent(i), { kdt_id: c.getKdtId() });
              this.setData({ viewSrc: e });
            });
          } else i && this.setData({ viewSrc: decodeURIComponent(i) });
        },
        handlePostMessage(e) {
          d.a.call(this, e.detail.data || []);
        },
        onShareAppMessage() {
          var { src: e } = this.options || {},
            t = e
              ? r.a.add("/" + this.route, { src: e })
              : "/packages/home/dashboard/index";
          return this.__webviewMsg["ZNB.share"] || { path: t };
        },
      });
    },
  })
);
