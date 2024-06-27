"use strict";
var r = require("~/r");
r(
  "KFw3",
  Object.assign({}, require("~/v.js").modules, {
    KFw3: function (t, e, s) {
      s.r(e);
      var o = s("9ZMt"),
        i = 0,
        l = 1,
        a = 2,
        n = {
          name: "goods-video",
          props: {
            height: String,
            width: String,
            cover: String,
            src: String,
            isFullscreen: Boolean,
            suspended: Boolean,
            playIconUrl: {
              type: String,
              default: "https://b.yzcdn.cn/icon/play-icon.png",
            },
            isShowControl: { type: Boolean, default: !1 },
            isSupportBgToggle: { type: Boolean, default: !0 },
            isShowPlayIcon: { type: Boolean, default: !0 },
            loop: { type: Boolean, default: !1 },
            isShowFullToggle: { type: Boolean, default: !0 },
            isShowPlayToggle: { type: Boolean, default: !1 },
            enableProgressGesture: { type: Boolean, default: !0 },
            controlsStyle: { type: String, default: "" },
            videoStyle: { type: String, default: "" },
            showTime: { type: Boolean, default: !0 },
            isShowToggle: { type: Boolean, default: !0 },
          },
          externalClasses: [
            "controls-class",
            "play-icon-class",
            "slider-btn-class",
            "video-class",
          ],
          data: () => ({
            status: i,
            lastStatus: i,
            showControls: !1,
            currentTime: 0,
            firstNoRealPlaying: !0,
            duration: 0,
            muted: !0,
          }),
          computed: {
            playIcon() {
              return "url(" + this.playIconUrl + ")";
            },
            isStop() {
              return this.status === i;
            },
            isPlaying() {
              return this.status === l;
            },
            isShowCover() {
              return (
                this.isStop ||
                (this.firstNoRealPlaying && 0 === this.currentTime)
              );
            },
          },
          watch: {
            status(t, e) {
              this.lastStatus = e;
            },
            suspended(t) {
              t ? this.pause() : this.resume();
            },
          },
          mounted() {
            this.$refs && (this.videoComponent = this.$refs.imgVideo),
              this.$emit("video-ready");
          },
          detached() {
            this.clearAutoHideControlsTimer();
          },
          methods: {
            play() {
              this.videoComponent && this.videoComponent.play();
            },
            pause() {
              this.videoComponent && this.videoComponent.pause(),
                (this.lastStatus = a);
            },
            seek(t) {
              this.videoComponent.seek && this.videoComponent.seek(t);
            },
            resume() {
              this.lastStatus === l && this.play();
            },
            togglePlay() {
              this.isPlaying ? this.pause() : this.play();
            },
            toggleMuted() {
              this.muted = !this.muted;
            },
            onPlay() {
              (this.status = l),
                this.toggleControls(!0),
                this.$emit("video-play");
            },
            onPause() {
              (this.status = a),
                this.toggleControls(!0, !1),
                this.$emit("video-pause");
            },
            onEnded() {
              this.loop ||
                ((this.status = i),
                this.toggleControls(!0, !1),
                this.$emit("video-end"));
            },
            onSeek(t) {
              var e = (this.duration * t) / 100;
              this.seek(e), this.$emit("video-seek", t);
            },
            onTimeUpdate(t) {
              var { currentTime: e = 0, duration: s = 0 } =
                t.detail || t.target || {};
              this.firstNoRealPlaying &&
                0 !== e &&
                (this.firstNoRealPlaying = !1),
                (this.currentTime = e),
                (this.duration = s),
                this.$emit("time-update", t);
            },
            toggleControls(t, e) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                (this.showControls = t),
                e
                  ? this.runAutoHideControlsTimer()
                  : this.clearAutoHideControlsTimer();
            },
            clearAutoHideControlsTimer() {
              clearTimeout(this.$_autoHideTimer);
            },
            runAutoHideControlsTimer() {
              this.isPlaying &&
                (this.clearAutoHideControlsTimer(),
                (this.$_autoHideTimer = setTimeout(() => {
                  this.showControls = !1;
                }, 2e3)));
            },
          },
          ud: !0,
        };
      e.default = o.default.component(n);
    },
  })
);
