"use strict";
var r = require("~/r");
r(
  "4WDS",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "4WDS": function (t, a, i) {
        i.r(a);
        var e = i("rqVN"),
          s = i("9Bnu"),
          r = i("RY8z"),
          h = i("LzxJ"),
          c = i("2wjL"),
          g = getApp();
        Object(e.b)({
          properties: { featureAlias: { type: String } },
          data: { activityInfo: {}, hasShareActivity: !1, hasLogin: !1 },
          attached() {
            Object(h.b)().then((t) => {
              t &&
                t.activityAlias &&
                this.setData(
                  { activityInfo: t, hasShareActivity: !0 },
                  this.getShareTag
                );
            });
          },
          methods: {
            onLoginClick() {
              var { activityAlias: t } = this.data.activityInfo;
              this.setData({ hasLogin: !0 }),
                Object(h.c)({ activityAlias: t }).then((t) => {
                  var { alias: a } = t;
                  this.triggerEvent("update-share-tag", { shareTag: a });
                });
            },
            getShareTag() {
              this.triggerEvent("update-share-status", {
                hasShareActivity: !!this.data.activityInfo.activityAlias,
              }),
                Object(s.a)().then((t) => {
                  var a = !!t.mobile;
                  a && this.onLoginClick(), this.setData({ hasLogin: a });
                });
            },
            goDetailPage() {
              var { activityId: t } = this.data.activityInfo,
                a = getCurrentPages(),
                i = a[a.length - 1].route,
                e = { activityId: t, kdt_id: g.getKdtId() },
                s = +/(packages|pages)\/home\/dashboard/.test(i);
              s ? (e.isHome = s) : (e.alias = this.data.featureAlias);
              var h = c.a.add("/packages/ump/share-benefit/index", e);
              r.a.navigate({ url: h });
            },
          },
        });
      },
    }
  )
);
