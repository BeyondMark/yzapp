"use strict";
var r = require("~/r");
r(
  "IBjO",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    IBjO: function (t, n, i) {
      i.r(n);
      var e = i("9ZMt"),
        o = i("Wnk8"),
        s = i("Zqpg"),
        a = i("1pB4");
      e.default.component({
        name: "t-popup",
        mixins: [
          Object(o.a)(!0, "transitionName"),
          Object(s.a)({
            externalClasses: ["custom-class", "close-icon-class"],
          }),
        ],
        props: {
          round: Boolean,
          closeable: Boolean,
          overlayStyle: String,
          transition: String,
          zIndex: { type: Number, default: 100 },
          overlay: { type: Boolean, default: !0 },
          closeIcon: { type: String, default: "cross" },
          closeIconPosition: { type: String, default: "top-right" },
          closeOnClickOverlay: { type: Boolean, default: !0 },
          position: { type: String, default: "center" },
          safeAreaInsetBottom: { type: Boolean, default: !0 },
          safeAreaInsetTop: { type: Boolean, default: !1 },
        },
        data: function () {
          return { inited: !1 };
        },
        logicData: function () {
          return { transitionName: this._getTransitionName(), display: !1 };
        },
        computed: {
          styles: function () {
            var t = this.duration,
              n = Object(a.f)(t)
                ? "enter" === this.status
                  ? t.enter
                  : t.leave
                : t;
            return (
              "\n          z-index: " +
              this.zIndex +
              ";\n          -webkit-transition-duration: " +
              n +
              "ms;\n          transition-duration: " +
              n +
              "ms;\n          " +
              (this.display ? "" : "display: none;") +
              "\n          " +
              this.customStyle +
              "\n        "
            );
          },
        },
        watch: {
          transition: function () {
            this.observeClass();
          },
          position: function () {
            this.observeClass();
          },
        },
        mounted: function () {
          this.observeClass();
        },
        methods: {
          _getTransitionName: function () {
            return this.transition || this.position;
          },
          observeClass: function () {
            var t = this.transition,
              n = this.duration;
            (this.transitionName = this._getTransitionName()),
              "none" === t
                ? ((this.duration = 0), (this.originDuration = n))
                : null != this.originDuration &&
                  (this.duration = this.originDuration);
          },
          onClickCloseIcon: function () {
            this.$emit("close");
          },
          onClickOverlay: function () {
            this.$emit("click-overlay"),
              this.closeOnClickOverlay && this.$emit("close");
          },
        },
        ud: !0,
      });
    },
  })
);
