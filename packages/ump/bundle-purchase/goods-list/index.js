"use strict";
var r = require("~/r");
r(
  "Jead",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Jead: function (e, a, t) {
        t.r(a);
        var r = t("Fcif"),
          s = t("qJXH"),
          i = t("2wjL"),
          l = t("lRMv"),
          c = t("WOkX"),
          h = t("CKyg"),
          g = getApp();
        Object(s.b)({
          data: { pageUrl: "", sl: "" },
          onLoad(e) {
            var a = e.activityAlias || e.alias,
              { sl: t } = e,
              s = i.a.add("/" + this.__route__, e);
            (this.path = s),
              Object(l.g)(
                Object(r.a)({}, e, {
                  ump_alias: a,
                  ump_type: "bale",
                  redirectUrl: s,
                })
              ).then(() => {
                this.setYZData({
                  pageUrl: Object(c.a)({
                    url: i.a.add("/wscump/bale/recommend", { alias: a }),
                    sl: t,
                  }),
                });
              });
          },
          onShow() {
            g.trigger("component:sku:cart", { type: "add" });
          },
          onMessage(e) {
            var a = (e.detail || {}).data || [];
            (this.sl = Object(h.a)(a)),
              a.length &&
                a.forEach((e) => {
                  var { type: a, config: t = {} } = e;
                  if ("BALE.share" === a) {
                    var { imageUrl: r = "", title: s = "" } = t;
                    this.shareConfig = { title: s, imageUrl: r };
                  }
                });
          },
          onShareAppMessage() {
            var { title: e, imageUrl: a } = this.shareConfig,
              { path: t } = this;
            return (
              this.sl && (t = Object(c.a)({ url: t, sl: this.sl })),
              { title: e, imageUrl: a, path: t }
            );
          },
        });
      },
    }
  )
);
