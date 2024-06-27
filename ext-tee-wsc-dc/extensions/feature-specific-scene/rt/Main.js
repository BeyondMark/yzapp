"use strict";
var r = require("~/r");
r(
  "8Kao",
  Object.assign({}, require("~/v.js").modules, {
    "8Kao": function (e, i, o) {
      o.r(i);
      var r = o("YeA1"),
        s = {
          data: () => ({
            showCoverAd: !1,
            featurePageHide: !1,
            isEnterShop: !1,
            preLoadImages: [],
            homepageGray: !1,
            isHomePage: !1,
            isFromTimeline: !1,
            alias: "",
            kdtId: "",
            isWebviewFeature: !1,
            usePreloadWebviewTicket: !1,
            webviewFeatureUrl: "",
            timelineSnapshotInfo: {},
          }),
          created() {
            Object(r.b)(this, [
              "showCoverAd",
              "isEnterShop",
              "featurePageHide",
              "preLoadImages",
              "homepageGray",
              "isFromTimeline",
              "alias",
              "kdtId",
              "isHomePage",
              "usePreloadWebviewTicket",
              "webviewFeatureUrl",
              "isWebviewFeature",
              "timelineSnapshotInfo",
            ]);
          },
          methods: {
            coverAdHide() {
              this.ctx.process.invoke("coverAdHide");
            },
            coverAdShow() {
              this.ctx.process.invoke("coverAdShow");
            },
            onMessage(e) {
              this.ctx.process.invoke("onWebviewMessage", e);
            },
          },
          ud: !0,
        },
        a = o("9ZMt");
      i.default = a.default.component(s);
    },
  })
);
