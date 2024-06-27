"use strict";
var r = require("~/r");
r(
  "WxLD",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    WxLD: function (a, e, t) {
      t.r(e);
      var r = t("Fcif"),
        s = t("qJXH"),
        i = t("2wjL"),
        l = t("8B9M"),
        p = t("lRMv"),
        c = Object(l.a)();
      Object(s.b)({
        data: { src: "", alias: "", title: "", imageUrl: "", weappUrl: "" },
        onLoad(a) {
          var { alias: e = "" } = a,
            t = i.a.add("/" + this.__route__, a);
          Object(p.g)(
            Object(r.a)({}, a, {
              umpAlias: e,
              umpType: "crazyguess",
              redirectUrl: t,
            })
          ).then(() => {
            this.setYZData({
              src: i.a.add("https://h5.youzan.com/wscump/apps/crazy/game", {
                kdtId: c.getKdtId(),
                alias: e,
              }),
            }),
              (this.alias = e);
          });
        },
        onShareAppMessage() {
          var { alias: a, imageUrl: e, title: t, weappUrl: r } = this;
          return {
            path: r || "/packages/ump/apps/crazy/index?alias=" + a,
            title: t,
            imageUrl: e,
          };
        },
        onPostMessage(a) {
          var e = (a.detail || {}).data || [];
          e.length &&
            e.forEach((a) => {
              var { config: e = {}, type: t } = a;
              if ("CRAZY.help" === t || "CRAZY.share" === t) {
                var { title: r = "", imgUrl: s = "", weappUrl: i } = e;
                (this.title = r), (this.imageUrl = s), (this.weappUrl = i);
              }
            });
        },
      });
    },
  })
);
