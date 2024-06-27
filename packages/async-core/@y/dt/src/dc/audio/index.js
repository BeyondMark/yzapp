"use strict";
var r = require("~/r");
r(
  "/LTJ",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "/LTJ": function (t, e, a) {
        a.r(e);
        var i = a("EqB2"),
          r = a("BBhQ"),
          s = a("Tewj"),
          n = a("/z8M"),
          d = a("MLLI"),
          h = a("mztD"),
          o = {
            mixins: [Object(i.a)({ optDesc: r.a })],
            props: { index: null, shopInfo: Object },
            data: () => ({
              playerImg: "",
              isLoaded: !1,
              percentage: 0,
              formatedCurrentTime: "00:00",
              formatedDuration: "00:00",
            }),
            computed: {
              logo() {
                return Object(h.a)(
                  this.opt.avatar || this.shopInfo.shopLogo,
                  "!80x80.jpg"
                );
              },
              spBtnStyle() {
                return (
                  "background-image: url(" +
                  (1 === this.opt.status
                    ? "https://img01.yzcdn.cn/weapp/wsc/6t3mqd.png"
                    : "https://img01.yzcdn.cn/weapp/wsc/l3JqDRF.png") +
                  ")"
                );
              },
              statusIcon() {
                return 1 === this.opt.status
                  ? this.opt.reload
                    ? "stop"
                    : "pause"
                  : "play";
              },
            },
            mounted() {
              var { src: t, bubble: e, style: a } = this.opt,
                i = "left" === e ? "player" : "green_player";
              this.playerImg =
                "https://b.yzcdn.cn/v2/image/wap/audio/" + i + ".gif";
              var r = Object(h.a)(t.split("?")[0], "", !1) + "@64k.mp3";
              this.$emit("src-change", { index: this.index, src: r }),
                2 === a &&
                  this.$nextTick(() => {
                    this.createSelectorQuery()
                      .select("#capAudioCanvasArcCir-" + this.index)
                      .fields({ node: !0, size: !0 })
                      .exec((t) => {
                        var e = t[0].node,
                          a = e.getContext("2d"),
                          i = Object(d.b)().pixelRatio;
                        (e.width = t[0].width * i),
                          (e.height = t[0].height * i),
                          a.scale(i, i),
                          (a.lineWidth = 2.5),
                          (a.strokeStyle = "#3387fd"),
                          (a.lineCap = "round"),
                          (this.canvasCtx = a);
                      });
                  }),
                s.default.on("timeupdate", this.handleTimeUpdate, this),
                s.default.on("reset", this.handleReset, this);
            },
            methods: {
              trigger(t, e) {
                var a = Math.ceil((this.percentage * t.duration) / 100);
                this.$emit("btn-click", {
                  src: t.src,
                  index: e,
                  reload: t.reload,
                  time: a,
                });
              },
              handleReset(t) {
                var e = t,
                  { index: a } = this;
                e === a &&
                  ((this.formatedCurrentTime = "00:00"),
                  (this.percentage = 0),
                  2 === this.opt.style && this.drawArc(a, 0));
              },
              handleTimeUpdate(t) {
                var { index: e, opt: a } = this,
                  { duration: i } = a,
                  { audioIndex: r, currentTime: s } = t;
                if (e === r) {
                  (this.isLoaded = !0),
                    (this.formatedCurrentTime = Object(n.a)(s)),
                    (this.formatedDuration = Object(n.a)(i));
                  var d = i ? (s / i) * 100 : 0;
                  (this.percentage = d),
                    2 === this.opt.style && this.drawArc(e, d);
                }
              },
              updateProgress(t) {
                this.$emit("slider-drag", { index: this.index, percentage: t });
              },
              drawArc(t, e) {
                var a = 1.5 * Math.PI;
                if (e <= 100) {
                  var i = (2 * e * Math.PI) / 100 + a;
                  this.drawCanvasArc(this.canvasCtx, a, i);
                }
              },
              drawCanvasArc(t, e, a) {
                t.beginPath(), t.arc(12.5, 12.5, 11.5, e, a), t.stroke();
              },
            },
            ud: !0,
          },
          c = a("9ZMt");
        e.default = c.default.component(o);
      },
    }
  )
);
