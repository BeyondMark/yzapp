"use strict";
var r = require("~/r");
r(
  "YLKv",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    YLKv: function (e, t, r) {
      r.r(t);
      var a = r("Fcif"),
        s = r("2wjL"),
        c = r("qJXH"),
        d = r("lRMv"),
        i = getApp();
      Object(c.b)({
        data: { src: "" },
        onLoad(e) {
          var { alias: t = "" } = e,
            r = s.a.add("/" + this.__route__, e);
          Object(d.g)(
            Object(a.a)({}, e, {
              umpAlias: t,
              umpType: "coupon",
              redirectUrl: r,
            })
          ).then(() => {
            this.setYZData({
              src: s.a.add(
                "/wscump/coupon/goodslist",
                Object(a.a)({}, e, { kdt_id: i.getKdtId() })
              ),
            });
          });
        },
      });
    },
  })
);
