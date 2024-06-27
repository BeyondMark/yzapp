"use strict";
var r = require("~/r");
r(
  "shet",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      shet: function (e, t, a) {
        a.r(t);
        var r = a("Fcif"),
          s = a("qJXH"),
          i = a("2wjL"),
          l = a("lRMv"),
          h = a("WOkX"),
          u = a("CKyg"),
          d = getApp();
        Object(s.b)({
          data: { pageUrl: "", sl: "" },
          onLoad(e) {
            void 0 === e && (e = {});
            var t = e.alias,
              a = i.a.add("/" + this.__route__, e);
            (this.path = a),
              Object(l.g)(
                Object(r.a)({}, e, {
                  umpAlias: t,
                  umpType: "plusBuy",
                  redirectUrl: a,
                })
              ).then(() => {
                var t = i.a.add(
                  "/wscump/plusbuy/detail",
                  Object(r.a)({}, e, { kdt_id: d.getKdtId(), queryCombo: !0 })
                );
                this.setYZData({ pageUrl: t });
              });
          },
          onMessage(e) {
            var t = (e.detail || {}).data || [];
            (this.sl = Object(u.a)(t)),
              t.length &&
                t.forEach((e) => {
                  var { type: t, config: a = {} } = e;
                  if ("PLUS_BUY.share" === t) {
                    var { imageUrl: r = "", title: s = "" } = a;
                    this.shareConfig = { title: s, imageUrl: r };
                  }
                });
          },
          onShareAppMessage() {
            var { title: e, imageUrl: t } = this.shareConfig,
              { path: a } = this;
            return (
              this.sl && (a = Object(h.a)({ url: this.path, sl: this.sl })),
              { title: e, imageUrl: t, path: a }
            );
          },
        });
      },
    }
  )
);
