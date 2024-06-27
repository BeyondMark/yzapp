"use strict";
var r = require("~/r");
r(
  "by+7",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "by+7": function (e, r, a) {
      a.r(r);
      var s = a("qJXH"),
        u = a("hHpg"),
        i = a("2wjL"),
        d = a("GFa9"),
        n = getApp();
      Object(s.b)({
        onLoad(e) {
          var { sponsorId: r } = e;
          if (!r || "undefined" === r)
            return (
              Object(u.a)("错误的参数"),
              void n.logger.appError({ message: "错误的参数：" + r })
            );
          var a = i.a.add("/packages/ump/helpcut/index", e);
          d.a.navigate({ url: a });
        },
      });
    },
  })
);
