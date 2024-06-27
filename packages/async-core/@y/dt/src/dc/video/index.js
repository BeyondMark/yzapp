"use strict";
var r = require("~/r");
r(
  "3B5l",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "3B5l": function (e, t, a) {
        a.r(t);
        var r = a("Fcif"),
          o = a("R7Zb"),
          i = a("Gc+9"),
          s = a("mztD"),
          n = {
            mixins: [Object(o.a)({ optDesc: i.a })],
            props: {
              appId: String,
              kdtId: Number,
              multiSize: { type: Boolean, default: !1 },
              rootKdtId: { type: String, default: "" },
            },
            data: () => ({ updateState: !1 }),
            computed: {
              coverUrl() {
                var {
                    surfacePlot: e,
                    sourceFrom: t,
                    surfacePlotImage: a,
                    video: r = {},
                  } = this.opt,
                  o = "";
                return (
                  1 === e ? 1 === t && (o = r.cover_url) : (o = a),
                  Object(s.a)(o, "!730x0.jpg")
                );
              },
              compatibleOpt() {
                if (!this.multiSize)
                  return {
                    progressBar: 2,
                    autoPlay: 2,
                    videoChamfer: 1,
                    pagePadding: 0,
                  };
                var {
                  progressBar: e,
                  autoPlay: t,
                  videoChamfer: a,
                  pagePadding: r,
                  muted: o,
                } = this.opt;
                return {
                  progressBar: e,
                  autoPlay: t,
                  videoChamfer: a,
                  pagePadding: r,
                  muted: o,
                };
              },
            },
            watch: {
              opt: {
                handler() {
                  this.updateState = !this.updateState;
                },
                deep: !0,
              },
            },
            created() {
              this.sendViewLogger();
            },
            methods: {
              sendStartLogger() {
                2 === this.opt.autoPlay && this.sendVideoPlayLoggr(),
                  this.startLogger ||
                    ((this.startLogger = !0),
                    this.sendComponentLogger("logger", {
                      et: "click",
                      ei: "play",
                      en: "开始播放",
                      params: Object(r.a)(
                        { banner_id: this.getBannerId() },
                        this.getComponentLoggerExtraParams()
                      ),
                    }));
              },
              sendStopLogger() {
                this.hasSendStopLogger ||
                  ((this.hasSendStopLogger = !0),
                  this.sendComponentLogger("logger", {
                    et: "custom",
                    ei: "play_time",
                    en: "播放时长",
                    params: Object(r.a)(
                      {
                        time: Math.ceil(this.currentTime),
                        banner_id: this.getBannerId(),
                      },
                      this.getComponentLoggerExtraParams()
                    ),
                  }),
                  this.sendVideoPlayTimeLogger());
              },
              handlePlay(e) {
                var { detail: t } = e;
                this.sendStartLogger(), this.$emit("play", t);
              },
              handlePause(e) {
                var { detail: t } = e;
                this.sendStopLogger(), this.$emit("pause", t);
              },
              handleEnded(e) {
                var { detail: t } = e;
                this.sendStopLogger(), this.$emit("ended", t);
              },
              handleUpdateTime(e) {
                var { detail: t } = e,
                  {
                    detail: { currentTime: a = 0 },
                  } = t;
                this.currentTime = a;
              },
              handleVideoContext(e) {
                var { detail: t } = e;
                this.$emit("videoContext", t);
              },
              handleMuted(e) {
                var { detail: t } = e,
                  { mutedStatus: a = !0 } = t || {};
                a || this.sendVideoMutedLogger();
              },
              sendViewLogger() {
                var {
                  autoPlay: e,
                  progressBar: t,
                  sourceFrom: a,
                  surfacePlotImage: r,
                } = this.opt;
                this.sendComponentLogger("logger", {
                  et: "view",
                  ei: "component_view",
                  en: "视频b曝光",
                  params: {
                    component: "dc_video",
                    banner_id: this.getBannerId(),
                    auto_play: e,
                    progress_bar: t,
                    source_from: a,
                    surface_plot: r ? 1 : 2,
                  },
                });
              },
              sendVideoPlayTimeLogger() {
                this.sendComponentLogger("logger", {
                  et: "custom",
                  ei: "video_play_time",
                  en: "播放时长",
                  params: {
                    component: "dc_video",
                    time: Math.ceil(this.currentTime),
                    banner_id: this.getBannerId(),
                    auto_play: this.opt.autoPlay,
                  },
                });
              },
              sendVideoMutedLogger() {
                this.sendComponentLogger("logger", {
                  et: "custom",
                  ei: "speaker_click",
                  en: "扬声器打开",
                  params: {
                    component: "dc_video",
                    banner_id: this.getBannerId(),
                  },
                });
              },
              sendVideoPlayLoggr() {
                this.sendComponentLogger("logger", {
                  et: "custom",
                  ei: "video_play",
                  en: "开始播放",
                  params: {
                    component: "dc_video",
                    banner_id: this.getBannerId(),
                  },
                });
              },
            },
            ud: !0,
          },
          d = a("9ZMt");
        t.default = d.default.component(n);
      },
    }
  )
);
