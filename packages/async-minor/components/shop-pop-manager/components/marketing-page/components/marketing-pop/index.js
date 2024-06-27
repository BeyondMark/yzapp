"use strict";
var r = require("~/r");
r(
  "aMQZ",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      aMQZ: function (e, t, a) {
        a.r(t);
        var i = a("rqVN"),
          r = a("KEq0"),
          s = a.n(r),
          g = a("Jcqw");
        Object(i.b)({
          properties: {
            show: { type: Boolean, value: !1 },
            detail: { type: Object, value: {} },
            activeUmpId: { type: Number, value: 0 },
          },
          data: {
            imageUrl: s()(
              "https://img01.yzcdn.cn/upload_files/2021/10/28/FtkIMD0ItzOrw7mSEI5yXbXQOzmZ.png",
              "large"
            ),
            btnImageUrl: s()(
              "https://img01.yzcdn.cn/upload_files/2021/10/28/FtgjCymAGEs-YxHzRMobwaPPMgVx.png",
              "large"
            ),
          },
          attached() {
            this.getMarketingTitleData();
          },
          methods: {
            onClose() {
              this.triggerEvent("close", { isClickClose: !0 });
            },
            onGoMarketingPage() {
              this.triggerEvent("gomarketing"), this.triggerEvent("close");
            },
            getMarketingTitleData() {
              Object(g.b)({ id: this.data.activeUmpId })
                .then((e) => {
                  this.setYZData({
                    detail: this.getMarketingPagePopData(
                      null == e ? void 0 : e.components
                    ),
                  });
                })
                .catch(() => {
                  this.setYZData({ detail: this.getMarketingPagePopData() });
                });
            },
            getMarketingPagePopData(e) {
              var t = { title: "活动会场", subTitle: "全场优惠抢不停" };
              return (
                Array.isArray(e) &&
                  e.forEach((e) => {
                    "venue_banner" === e.type &&
                      ((t.title = e.title || ""),
                      (t.subTitle = e.subTitle || ""));
                  }),
                t
              );
            },
          },
        });
      },
    }
  )
);
