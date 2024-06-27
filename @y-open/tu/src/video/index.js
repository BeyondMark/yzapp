"use strict";
var r = require("~/r");
r(
  "9wM9",
  Object.assign({}, require("~/v.js").modules, {
    "9wM9": function (e, t, o) {
      o.r(t);
      var i = {
          name: "tee-video",
          props: {
            id: String,
            src: String,
            style: String,
            poster: String,
            customStyle: String,
            autoplay: Boolean,
            objectFit: String,
            showCenterPlayBtn: { type: Boolean, default: !1 },
            controls: { type: Boolean, default: !0 },
            muted: { type: Boolean, default: !1 },
            showMuteBtn: { type: Boolean, default: !1 },
            enableProgressGesture: { type: Boolean, default: !0 },
            loop: { type: Boolean, default: !1 },
          },
          created() {
            (this.videoContext = {}), (this.callBackQueue = []);
            var e = this;
            [
              "play",
              "pause",
              "stop",
              "hideStatusBar",
              "requestFullScreen",
              "seek",
              "exitFullScreen",
            ].forEach((t) => {
              this.videoContext[t] = function () {
                for (
                  var o = arguments.length, i = new Array(o), s = 0;
                  s < o;
                  s++
                )
                  i[s] = arguments[s];
                e.callBackQueue.push({ func: t, args: i });
              };
            });
          },
          mounted() {
            this.initVideoContext();
          },
          computed: {
            videoStyle() {
              return this.style || this.customStyle;
            },
          },
          methods: {
            initVideoContext() {
              this.createSelectorQuery()
                .select(".tee-video")
                .context((e) => {
                  (this.videoContext = e.context),
                    this.callBackQueue.forEach((e) => {
                      this.videoContext[e.func].apply(
                        this.videoContext,
                        e.args
                      );
                    });
                })
                .exec();
            },
            play() {
              this.videoContext.play();
            },
            pause() {
              this.videoContext.pause();
            },
            stop() {
              this.videoContext.stop();
            },
            hideStatusBar() {
              this.videoContext.hideStatusBar();
            },
            showStatusBar() {
              this.videoContext.showStatusBar();
            },
            requestFullScreen(e) {
              this.videoContext.requestFullScreen(e || {});
            },
            seek(e) {
              this.videoContext.seek(e);
            },
            exitFullScreen() {
              this.videoContext.exitFullScreen();
            },
            onPlay(e) {
              this.$emit("play", e);
            },
            onPause(e) {
              this.$emit("pause", e);
            },
            onError(e) {
              this.$emit("error", e);
            },
            onEnded(e) {
              this.$emit("ended", e);
            },
            onTimeUpdate(e) {
              this.$emit("timeUpdate", e);
            },
            onFullScreenChange(e) {
              this.$emit("fullScreenChange", e);
            },
          },
          ud: !0,
        },
        s = o("9ZMt");
      t.default = s.default.component(i);
    },
  })
);
