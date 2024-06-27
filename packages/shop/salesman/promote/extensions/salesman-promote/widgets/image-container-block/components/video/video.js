"use strict";
var r = require("~/r");
r(
  "PAWc",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      PAWc: function (e, s, i) {
        i.r(s);
        var t = i("Bt9F");
        Object(t.a)({
          properties: { video: Object },
          ready() {
            (this.paused = !0), this.triggerEvent("video-ready", this);
          },
          methods: {
            getVideo() {
              return (
                this.video ||
                  (this.video = wx.createVideoContext("goods-video-id", this)),
                this.video
              );
            },
            setVideoPlay() {
              (this.playing = !0),
                (this.paused = !1),
                this.setData({ showCloseIcon: !1 });
            },
            setVideoPause(e) {
              this.isInvokePause || (this.paused = !0),
                e && e.detail && (this.isInvokePause = !1),
                (this.playing = !1),
                this.setData({ showCloseIcon: !0 });
            },
            onVideoEnded() {
              this.handleVideoClose();
            },
            recover() {
              this.paused || (this.playing ? this.pause() : this.play());
            },
            handleVideoClose() {
              this.triggerEvent("hide-video");
            },
            pause() {
              var e = this.getVideo();
              e && e.pause(), (this.isInvokePause = !0), this.setVideoPause();
            },
            play() {
              var e = this.getVideo();
              e &&
                (e.exitFullScreen(),
                e.play(),
                (this.isInvokePlay = !0),
                this.setVideoPlay());
            },
            handleFullscreenChange(e) {
              var { fullScreen: s } = e.detail;
              this.setData({ isVideoFullscreen: s, showCloseVideoBtn: s });
            },
          },
        });
      },
    }
  )
);
