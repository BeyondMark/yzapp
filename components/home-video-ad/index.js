"use strict";
var r = require("~/r");
r(
  "HiYn",
  Object.assign({}, require("~/v.js").modules, {
    HiYn: function (e, i, t) {
      t.r(i);
      var a = t("Fcif"),
        o = t("a1Mm"),
        d = 3,
        r = getApp(),
        { isRetailApp: n = !1 } = r.globalData || {};
      Component({
        properties: {
          pageHide: { type: Boolean, default: !1 },
          isEnterShop: { type: Boolean, default: !1 },
        },
        observers: {
          pageHide(e) {
            e &&
              this.data.timeNum > 0 &&
              r.logger &&
              r.logger.log({
                et: "view",
                ei: "cover_ad_hide_weapp",
                en: "启动页-展示时关闭小程序",
                pt: "retailhome",
              });
          },
          "isEnterShop, timeNum": function (e, i) {
            e &&
              0 === i &&
              (this.triggerEvent("coverAdHide"), this.handEnded());
          },
        },
        data: {
          videoMute: !0,
          videoSrc: "",
          timeNum: d,
          videoSource: null,
          videoChannelId: "",
          videoId: "",
          imageUrl: "",
          linkType: 0,
          linkConfig: {},
        },
        ready() {
          var { videoAdPromise: e } = r.globalData;
          e
            ? (e.then((e) => {
                this.triggerEvent("coverAdShow");
                var {
                  playUrl: i,
                  maxWaitTime: t = d,
                  videoSource: a,
                  videoChannelId: o,
                  videoId: n,
                  imageUrl: l,
                  linkType: s,
                  linkConfig: h,
                } = e || {};
                this.setData({
                  videoSrc: i,
                  timeNum: t,
                  videoSource: a,
                  videoChannelId: o,
                  videoId: n,
                  imageUrl: this.formatImg(l),
                  linkType: s,
                  linkConfig: h,
                }),
                  (r.globalData.videoAdPromise = null),
                  this.handleLogger("view", "home_ad_show", "启动页-展示", {
                    video_source: a,
                  });
              }),
              setTimeout(() => {
                var e = setInterval(() => {
                  this.setData({ timeNum: this.data.timeNum - 1 }),
                    0 === this.data.timeNum &&
                      (clearInterval(e), this.handEnded());
                }, 1e3);
              }, 1e3))
            : (this.triggerEvent("coverAdShow"),
              this.triggerEvent("coverAdHide"));
        },
        methods: {
          formatImg(e) {
            if (e) {
              var i = e.split("?")[0],
                t = i.split(".").reverse()[0];
              return Object(o.a)(i, (n ? "!1125x0." : "!750x0.") + t);
            }
          },
          onMutedClick() {
            this.setData({ videoMute: !this.data.videoMute });
          },
          handEnded() {
            if (!n || this.data.isEnterShop) {
              var e = wx
                .createAnimation({ duration: 150, timingFunction: "linear" })
                .opacity(0)
                .step();
              this.setData({ animationData: e.export() }),
                setTimeout(() => {
                  this.setData({ videoSrc: "" });
                }, 200);
            }
          },
          animationend() {
            this.setData({ videoSource: null, videoSrc: "" });
          },
          handleImageClick() {
            this.handleLogger("click", "home_ad_click_img", "点击图片");
          },
          handleSkipClick() {
            this.handleLogger(
              "click",
              "home_ad_click_skip",
              "开屏广告点击跳过",
              { video_source: this.data.videoSource }
            ),
              this.handEnded();
          },
          handleLogger(e, i, t, o) {
            void 0 === o && (o = {}),
              r.logger &&
                r.logger.log({
                  et: e,
                  ei: i,
                  en: t,
                  params: Object(a.a)({ component: "home_video_ad" }, o),
                });
          },
        },
      });
    },
  })
);
