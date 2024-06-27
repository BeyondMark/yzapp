"use strict";
var r = require("~/r");
r(
  "11X0",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "11X0": function (a, t, e) {
      e.r(t);
      var i = e("Fcif"),
        s = e("qJXH"),
        r = e("2wjL"),
        l = e("8B9M"),
        c = e("lRMv"),
        d = Object(l.a)();
      Object(s.b)({
        data: { src: "", alias: "", title: "", imageUrl: "" },
        onLoad(a) {
          var { alias: t = "" } = a,
            e = r.a.add("/" + this.__route__, a);
          Object(c.g)(
            Object(i.a)({}, a, {
              umpAlias: t,
              umpType: "zodiac",
              redirectUrl: e,
            })
          ).then(() => {
            this.setYZData({
              src: r.a.add("https://h5.youzan.com/wscump/apps/zodiac", {
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
            path: "/packages/ump/apps/zodiac/index?alias=" + a,
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
