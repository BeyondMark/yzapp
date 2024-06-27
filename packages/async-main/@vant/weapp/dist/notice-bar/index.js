"use strict";
var r = require("~/r");
r(
  "vPqn",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vPqn: function (t, i, e) {
      e.r(i);
      var a = e("py6f"),
        r = e("6MKc");
      Object(a.a)({
        props: {
          text: { type: String, value: "", observer: "init" },
          mode: { type: String, value: "" },
          url: { type: String, value: "" },
          openType: { type: String, value: "navigate" },
          delay: { type: Number, value: 1 },
          speed: { type: Number, value: 60, observer: "init" },
          scrollable: null,
          leftIcon: { type: String, value: "" },
          color: String,
          backgroundColor: String,
          background: String,
          wrapable: Boolean,
        },
        data: { show: !0 },
        created() {
          this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: "linear",
          });
        },
        destroyed() {
          this.timer && clearTimeout(this.timer);
        },
        mounted() {
          this.init();
        },
        methods: {
          init() {
            Object(r.m)(() => {
              Promise.all([
                Object(r.d)(this, ".van-notice-bar__content"),
                Object(r.d)(this, ".van-notice-bar__wrap"),
              ]).then((t) => {
                var [i, e] = t,
                  { speed: a, scrollable: r, delay: n } = this.data;
                if (
                  null != i &&
                  null != e &&
                  i.width &&
                  e.width &&
                  !1 !== r &&
                  (r || e.width < i.width)
                ) {
                  var s = ((e.width + i.width) / a) * 1e3;
                  (this.wrapWidth = e.width),
                    (this.contentWidth = i.width),
                    (this.duration = s),
                    (this.animation = wx.createAnimation({
                      duration: s,
                      timingFunction: "linear",
                      delay: n,
                    })),
                    this.scroll(!0);
                }
              });
            });
          },
          scroll(t) {
            void 0 === t && (t = !1),
              this.timer && clearTimeout(this.timer),
              (this.timer = null),
              this.setData({
                animationData: this.resetAnimation
                  .translateX(t ? 0 : this.wrapWidth)
                  .step()
                  .export(),
              }),
              Object(r.m)(() => {
                this.setData({
                  animationData: this.animation
                    .translateX(-this.contentWidth)
                    .step()
                    .export(),
                });
              }),
              (this.timer = setTimeout(() => {
                this.scroll();
              }, this.duration + this.data.delay));
          },
          onClickIcon(t) {
            "closeable" === this.data.mode &&
              (this.timer && clearTimeout(this.timer),
              (this.timer = null),
              this.setData({ show: !1 }),
              this.$emit("close", t.detail));
          },
          onClick(t) {
            this.$emit("click", t);
          },
        },
      });
    },
  })
);
