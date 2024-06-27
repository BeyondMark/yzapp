"use strict";
var r = require("~/r");
r(
  "SNRT",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    SNRT: function (a, t, e) {
      e.r(t);
      var s = e("qJXH"),
        i = e("2wjL");
      Object(s.b)({
        data: { src: "", alias: "", title: "", imageUrl: "" },
        onLoad(a) {
          var { alias: t = "", kdtId: e, questionId: s } = a;
          this.setYZData({
            src: i.a.add("https://h5.youzan.com/wscump/apps/crazy/help", {
              kdtId: e,
              alias: t,
              questionId: s,
            }),
          }),
            (this.alias = t),
            (this.kdtId = e),
            (this.questionId = s);
        },
        onShareAppMessage() {
          var {
            alias: a,
            imageUrl: t,
            title: e,
            kdtId: s,
            questionId: i,
          } = this;
          return {
            path:
              "/packages/ump/apps/crazy/help/index?alias=" +
              a +
              "&kdtId=" +
              s +
              "&questionId=" +
              i,
            title: e,
            imageUrl: t,
          };
        },
        onPostMessage(a) {
          var t = (a.detail || {}).data || [];
          t.length &&
            t.forEach((a) => {
              var { config: t = {}, type: e } = a;
              if ("CRAZY.help" === e || "CRAZY.share" === e) {
                var { title: s = "", imgUrl: i = "" } = t;
                (this.title = s), (this.imageUrl = i);
              }
            });
        },
      });
    },
  })
);
