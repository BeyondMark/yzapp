"use strict";
var r = require("~/r");
r(
  "OIGh",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    OIGh: function (t, e, a) {
      a.r(e);
      var r = a("Fcif"),
        i = a("DXKY"),
        s = a("lZq6"),
        o = a("GXW/"),
        n = a("jA1y");
      Component({
        behaviors: [s.a, o.a],
        data: { paid: !1, src: "", poster: "", countUrl: "" },
        attached() {
          var { componentData: t } = this.data;
          this.initVideo(t), this.initEvents();
        },
        methods: {
          initVideo(t) {
            var e,
              {
                video: a = {},
                sourceFrom: r = 1,
                customUrl: i = "",
                surfacePlot: s = 1,
                surfacePlotImage: o = "",
              } = t,
              { cover_url: d = "", video_id: h = 0 } = a;
            1 === r
              ? ((e = {
                  videoId: h,
                  kdt_id: this.data.hqKdtId || this.data.kdtId,
                }),
                Object(n.c)({
                  path: "/wscshop/video/playinfo.json",
                  data: e,
                })).then((t) => {
                  if (t) {
                    var { video_url: e = "", count_played_url: a = "" } = t;
                    this.triggerEvent("get-src", { id: h, src: e }),
                      this.setData({
                        src: e,
                        countUrl: a,
                        poster: 2 === s ? o : d,
                      });
                  }
                })
              : this.setData({ src: i, poster: o });
          },
          initEvents() {
            i.a.on("pauseOtherVideo", (t) => {
              this !== t && this.selectComponent(".capVideo").pause();
            });
          },
          handlePlay() {
            var t;
            this.sendStartLogger(),
              i.a.trigger("pauseOtherVideo", this),
              !this.data.paid &&
                this.data.countUrl &&
                ((this.data.paid = !0),
                (t = this.data.countUrl || ""),
                Object(n.c)({ path: t }));
          },
          sendStartLogger() {
            this.startLogger ||
              ((this.startLogger = !0),
              this.ensureAppLogger("logger", {
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
              this.ensureAppLogger("logger", {
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
              }));
          },
          handleUpdateTime(t) {
            var {
              detail: { currentTime: e = 0 },
            } = t;
            this.currentTime = e;
          },
        },
      });
    },
  })
);
