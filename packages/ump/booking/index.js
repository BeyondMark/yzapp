"use strict";
var r = require("~/r");
r(
  "RBIG",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    RBIG: function (e, r, s) {
      s.r(r);
      var t = s("Fcif"),
        a = s("qJXH"),
        i = getApp();
      Object(a.b)({
        data: { src: "" },
        onShareAppMessage(e) {
          return this.shareConfig;
        },
        handleMessage(e) {
          var { detail: r } = e,
            { data: s } = r,
            t = s.filter((e) => "ZNB.share" === e.type),
            { config: a } = t[t.length - 1];
          this.shareConfig = a;
        },
        makeQuerys: (e) =>
          Object.entries(e)
            .map((e) => {
              var [r, s] = e;
              return r + "=" + s;
            })
            .join("&"),
        onLoad(e) {
          var r = i.getKdtId(),
            { from: s, shopId: a } = e,
            n = "https://h5.youzan.com/wscshop/booking";
          if ("usercenter" === s) n += "/list?kdt_id=" + r;
          else {
            var o = "invite" === s,
              c = this.makeQuerys(Object(t.a)({}, e, { kdt_id: o ? a : r }));
            n += o ? "/share?" + c : "/confirm?" + c;
          }
          this.setYZData({ src: n });
        },
      });
    },
  })
);
