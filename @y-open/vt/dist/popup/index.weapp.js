"use strict";
var r = require("~/r");
r(
  "VYyW",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    VYyW: function (t, e, i) {
      i.r(e);
      var s = i("Wnk8"),
        n = i("Zqpg"),
        o = i("1pB4"),
        a = {
          name: "t-popup",
          mixins: [
            Object(s.a)(!0, "transitionName"),
            Object(n.a)({
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
          data: () => ({ inited: !1 }),
          logicData() {
            return { transitionName: this._getTransitionName(), display: !1 };
          },
          computed: {
            styles() {
              var { duration: t } = this,
                e = Object(o.f)(t)
                  ? "enter" === this.status
                    ? t.enter
                    : t.leave
                  : t;
              return (
                "\n          z-index: " +
                this.zIndex +
                ";\n          -webkit-transition-duration: " +
                e +
                "ms;\n          transition-duration: " +
                e +
                "ms;\n          " +
                (this.display ? "" : "display: none;") +
                "\n          " +
                this.customStyle +
                "\n        "
              );
            },
          },
          watch: {
            transition() {
              this.observeClass();
            },
            position() {
              this.observeClass();
            },
          },
          mounted() {
            this.observeClass();
          },
          methods: {
            _getTransitionName() {
              return this.transition || this.position;
            },
            observeClass() {
              var { transition: t, duration: e } = this;
              (this.transitionName = this._getTransitionName()),
                "none" === t
                  ? ((this.duration = 0), (this.originDuration = e))
                  : null != this.originDuration &&
                    (this.duration = this.originDuration);
            },
            onClickCloseIcon() {
              this.$emit("close");
            },
            onClickOverlay() {
              this.$emit("click-overlay"),
                this.closeOnClickOverlay && this.$emit("close");
            },
          },
          ud: !0,
        },
        r = i("9ZMt");
      e.default = r.default.component(a);
    },
  })
);
