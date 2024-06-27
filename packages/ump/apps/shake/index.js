"use strict";
var r = require("~/r");
r(
  "YimH",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    YimH: function (a, e, t) {
      t.r(e);
      var s = t("Fcif"),
        i = t("qJXH"),
        r = t("2wjL"),
        l = t("8B9M"),
        c = t("lRMv"),
        d = Object(l.a)();
      Object(i.b)({
        data: { src: "", alias: "", title: "", imageUrl: "" },
        onLoad(a) {
          var { alias: e = "" } = a,
            t = r.a.add("/" + this.__route__, a);
          Object(c.g)(
            Object(s.a)({}, a, {
              umpAlias: e,
              umpType: "shake",
              redirectUrl: t,
            })
          ).then(() => {
            this.setYZData({
              src: r.a.add("https://h5.youzan.com/wscump/apps/shake", {
                kdtId: d.getKdtId(),
                alias: e,
              }),
            }),
              (this.alias = e);
          });
        },
        onShareAppMessage() {
          var { alias: a, imageUrl: e, title: t } = this;
          return {
            path: "/packages/ump/apps/shake/index?alias=" + a,
            title: t,
            imageUrl: e,
          };
        },
        onPostMessage(a) {
          var e = (a.detail || {}).data || [];
          e.length &&
            e.forEach((a) => {
              var { config: e = {} } = a,
                { title: t = "" } = e;
              this.title = t;
            });
        },
      });
    },
  })
);
