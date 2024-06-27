"use strict";
var r = require("~/r");
r(
  "9hH9",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "9hH9": function (e, a, r) {
        r.r(a);
        var s = r("qJXH"),
          t = r("2wjL"),
          i = r("Kleg");
        Object(s.b)({
          data: { url: "" },
          onLoad(e) {
            var a = e.cardAlias,
              r = t.a.add("/" + this.__route__, e),
              s = e.ump_alias,
              u = e.activity_type || e.activityType || 4;
            Object(i.a)(
              { umpAlias: s, cardAlias: a, activityType: u, query: e },
              r
            ).then((e) => {
              e &&
                this.setYZData({
                  url:
                    "https://h5.youzan.com/wscuser/membercard/groupon?cardAlias=" +
                    a +
                    "&qr=customercard_" +
                    a +
                    "&ump_alias=" +
                    s +
                    "&ump_type=groupOn",
                });
            });
          },
          onMessage(e) {
            var a = e.detail.data.filter((e) => "ZNB.share" === e.type);
            this.shareConfig = a.pop().config;
          },
          onShareAppMessage() {
            return this.shareConfig || {};
          },
        });
      },
    }
  )
);
