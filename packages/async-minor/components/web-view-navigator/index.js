"use strict";
var r = require("~/r");
r(
  "XIZK",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    XIZK: function (e, t, a) {
      a.r(t);
      var r = a("RY8z"),
        i = a("2wjL"),
        s = ["navigate", "redirect"];
      Component({
        properties: { url: String, type: { type: String, value: "navigate" } },
        externalClasses: ["custom-class"],
        attached() {
          this.data.path, s.indexOf(this.data.type);
        },
        methods: {
          navigateTo() {
            var e = r.a[this.data.type];
            if (!e)
              return this.triggerEvent("fail", {
                message: "type 仅支持 navigate, redirect",
              });
            e({
              url: i.a.add("/packages/zan-web-view/index", {
                url: encodeURIComponent(this.data.url),
              }),
              fail: (e) => {
                this.triggerEvent("fail", e);
              },
              success: (e) => {
                this.triggerEvent("success", e);
              },
            });
          },
        },
      });
    },
  })
);
