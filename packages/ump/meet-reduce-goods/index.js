"use strict";
var r = require("~/r");
r(
  "0ft9",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "0ft9": function (e, a, t) {
        t.r(a);
        var s = t("Fcif"),
          r = t("qJXH"),
          i = t("2wjL"),
          l = t("8B9M"),
          c = t("lRMv"),
          d = t("WOkX"),
          u = t("CKyg"),
          m = Object(l.a)();
        Object(r.b)({
          data: {
            src: "",
            alias: "",
            title: "限时促销，精挑细选，就等你来",
            imageUrl: "",
            sl: "",
          },
          onLoad(e) {
            var { alias: a = "", sl: t } = e;
            this.alias = a;
            var r = i.a.add("/" + this.__route__, e);
            Object(c.g)(
              Object(s.a)({}, e, {
                umpAlias: a,
                umpType: "meetReduce",
                redirectUrl: r,
              })
            ).then(() => {
              this.setYZData({
                src: Object(d.a)({
                  url: i.a.add(
                    "https://h5.youzan.com/wscump/meetreduce/recommend",
                    { kdt_id: m.getKdtId(), alias: a, queryCombo: !0 }
                  ),
                  sl: t,
                }),
              });
            });
          },
          onShareAppMessage() {
            var { alias: e, title: a, imageUrl: t, sl: s } = this,
              r = "/packages/ump/meet-reduce-goods/index?alias=" + e;
            return (
              this.sl && (r = Object(d.a)({ url: r, sl: s })),
              { path: r, title: a, imageUrl: t }
            );
          },
          onPostMessage(e) {
            var a = (e.detail || {}).data || [];
            (this.sl = Object(u.a)(a)),
              a.length &&
                a.forEach((e) => {
                  var { type: a, config: t = {} } = e;
                  if ("MEET_REDUCE.share" === a) {
                    var { alias: s = "", imageUrl: r = "", title: i = "" } = t;
                    (this.alias = s), (this.imageUrl = r), (this.title = i);
                  }
                });
          },
        });
      },
    }
  )
);
