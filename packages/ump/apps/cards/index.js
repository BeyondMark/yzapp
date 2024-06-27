"use strict";
var r = require("~/r");
r(
  "1jaa",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "1jaa": function (a, t, e) {
      e.r(t);
      var s = e("Fcif"),
        r = e("qJXH"),
        i = e("2wjL"),
        l = e("8B9M"),
        c = e("lRMv"),
        d = Object(l.a)();
      Object(r.b)({
        data: { src: "", alias: "", title: "", imageUrl: "" },
        onLoad(a) {
          var { alias: t = "" } = a,
            e = i.a.add("/" + this.__route__, a);
          Object(c.g)(
            Object(s.a)({}, a, {
              umpAlias: t,
              umpType: "cards",
              redirectUrl: e,
            })
          ).then(() => {
            this.setYZData({
              src: i.a.add("https://h5.youzan.com/wscump/apps/cards", {
                kdtId: d.getKdtId(),
                alias: t,
              }),
            }),
              (this.alias = t);
          });
        },
        onShareAppMessage() {
          var { alias: a, imageUrl: t, title: e } = this;
          return {
            path: "/packages/ump/apps/cards/index?alias=" + a,
            title: e,
            imageUrl: t,
          };
        },
        onPostMessage(a) {
          var t = (a.detail || {}).data || [];
          t.length &&
            t.forEach((a) => {
              var { config: t = {} } = a,
                { title: e = "" } = t;
              this.title = e;
            });
        },
      });
    },
  })
);
