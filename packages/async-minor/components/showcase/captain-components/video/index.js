"use strict";
var r = require("~/r");
r(
  "xdVS",
  Object.assign({}, require("~/c.js").modules, {
    xdVS: function (e, t, i) {
      i.r(t);
      var d = i("9KEa");
      Component({
        type: "video",
        properties: {
          src: String,
          poster: String,
          objectFit: { type: String, value: "contain" },
        },
        data: { height: 0, hidePoster: !1, showVideo: !1 },
        ready() {
          this.init();
        },
        methods: {
          init() {
            this.setData({
              height: (9 * Object(d.b)().windowWidth) / 16,
              id: Math.random().toString(36).substr(2, 9),
            }),
              (this.videoContext = wx.createVideoContext("video-id", this));
          },
          handlePosterClick() {
            this.setData({ showVideo: !0 }, () => {
              setTimeout(() => {
                this.setData({ hidePoster: !0, showVideo: !0 }, () => {
                  this.videoContext.play();
                });
              }, 200);
            });
          },
          handleVideoPlay(e) {
            this.triggerEvent("play", e.detail);
          },
          handleVideoPause(e) {
            this.triggerEvent("pause", e.detail);
          },
          handleVideoEnded(e) {
            this.triggerEvent("ended", e.detail);
          },
          handleUpdateTime(e) {
            this.triggerEvent("timeupdate", e.detail);
          },
          pause() {
            this.videoContext.pause();
          },
          play() {
            this.videoContext.play();
          },
        },
      });
    },
  })
);
