"use strict";
var r = require("~/r");
r(
  "xRUu",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    xRUu: function (a, s, e) {
      e.r(s);
      var i = e("Fcif"),
        t = e("qJXH"),
        l = e("2wjL"),
        r = e("WOkX"),
        o = e("lRMv");
      Object(t.b)({
        data: { src: "", alias: "", evaluationAlias: "" },
        onLoad(a) {
          var { alias: s, evaluation_alias: e = "", sl: t = "" } = a,
            o = {};
          e && (o.evaluation_alias = e),
            t && (o = Object(i.a)({}, o, Object(r.c)({ sl: t })));
          var c = l.a.add(
            "https://h5.youzan.com/wscshop/buyers/show/list/" + s,
            o
          );
          this.setYZData({ src: c, alias: s, evaluationAlias: e });
        },
        onMessage(a) {
          var s = a.detail.data.filter((a) => "ZNB.share" === a.type);
          this.shareConfig = s.pop().config;
        },
        onShareAppMessage() {
          var {
              title: a = "买家秀",
              link: s = "",
              imageUrl: e,
            } = this.shareConfig,
            t = l.a.getAll(s) || {},
            c = t.sl || "",
            n = t.evaluation_alias || "",
            { alias: u } = this.data,
            h = {};
          return (
            c && (h = Object(i.a)({}, h, Object(r.c)({ sl: c }))),
            n && (h.evaluation_alias = n),
            {
              imageUrl: e,
              title: a,
              path: l.a.add(
                "/packages/shop/buyers-show/list/index",
                Object(i.a)({ alias: u }, o.i, h)
              ),
            }
          );
        },
      });
    },
  })
);
