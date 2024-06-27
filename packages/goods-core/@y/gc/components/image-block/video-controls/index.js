"use strict";
var r = require("~/r");
r(
  "khkT",
  Object.assign({}, require("~/v.js").modules, {
    khkT: function (e, t, r) {
      r.r(t);
      var o = {
          name: "VideoControls",
          externalClasses: ["slider-btn-class"],
          props: {
            duration: { type: Number, default: 0 },
            currentTime: { type: Number, default: 0 },
            muted: Boolean,
            isFullscreen: Boolean,
            isPlaying: Boolean,
            isShowPlayToggle: { type: Boolean, default: !1 },
            isShowFullToggle: { type: Boolean, default: !0 },
            showTime: { type: Boolean, default: !0 },
            isShowToggle: { type: Boolean, default: !0 },
            controlsStyle: { type: String, default: "" },
            sliderBtnStyle: { type: String, default: "" },
          },
          computed: {
            currentTimeText() {
              return this.formatTime(this.currentTime);
            },
            durationText() {
              return this.formatTime(this.duration);
            },
            percentage() {
              if (!(this.duration <= 0))
                return (
                  Math.min((this.currentTime / this.duration) * 100, 100) || 0
                );
            },
          },
          methods: {
            padLeft: (e) => (e < 10 ? "0" + e : "" + e),
            formatTime(e) {
              var t = parseInt(e / 60, 10),
                r = Math.round(e % 60);
              return this.padLeft(t) + ":" + this.padLeft(r);
            },
            onProgressChange(e) {
              this.$emit("progress-change", e);
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(o);
    },
  })
);
