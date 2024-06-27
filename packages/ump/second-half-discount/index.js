"use strict";
var r = require("~/r");
r(
  "lOHy",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      lOHy: function (a, e, s) {
        s.r(e);
        var t = s("Fcif"),
          i = s("qJXH"),
          r = s("2wjL"),
          l = s("8B9M"),
          c = s("lRMv"),
          d = s("WOkX"),
          o = s("CKyg"),
          u = Object(l.a)();
        Object(i.b)({
          data: { src: "", alias: "", title: "", imageUrl: "", sl: "" },
          onLoad(a) {
            var { alias: e = "", sl: s } = a;
            this.alias = e;
            var i = r.a.add("/" + this.__route__, a);
            Object(c.g)(
              Object(t.a)({}, a, {
                umpAlias: e,
                umpType: "secondHalfDiscount",
                redirectUrl: i,
              })
            ).then(() => {
              this.setYZData({
                src: Object(d.a)({
                  url: r.a.add(
                    "https://h5.youzan.com/wscump/second-half-discount/recommend",
                    {
                      kdt_id: u.getKdtId(),
                      store_id: u.getOfflineId() || 0,
                      alias: e,
                      queryCombo: !0,
                    }
                  ),
                  sl: s,
                }),
              });
            });
          },
          onShareAppMessage() {
            var { alias: a, title: e, imageUrl: s, sl: t } = this,
              i = "/packages/ump/second-half-discount/index?alias=" + a;
            return (
              t && (i = Object(d.a)({ url: i, sl: t })),
              { path: i, title: e, imageUrl: s }
            );
          },
          onPostMessage(a) {
            var e = (a.detail || {}).data || [];
            (this.sl = Object(o.a)(e)),
              e.length &&
                e.forEach((a) => {
                  var { type: e, config: s = {} } = a;
                  if ("SECOND_HALF_DISCOUNT.share" === e) {
                    var { alias: t = "", imageUrl: i = "", title: r = "" } = s;
                    (this.alias = t), (this.imageUrl = i), (this.title = r);
                  }
                });
          },
        });
      },
    }
  )
);
