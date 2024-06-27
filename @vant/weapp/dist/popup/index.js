"use strict";
var r = require("~/r");
r(
  "6DLr",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "6DLr": function (e, o, a) {
      a.r(o);
      var s = a("py6f"),
        t = a("MJHg");
      Object(s.a)({
        classes: [
          "enter-class",
          "enter-active-class",
          "enter-to-class",
          "leave-class",
          "leave-active-class",
          "leave-to-class",
          "close-icon-class",
        ],
        mixins: [Object(t.a)(!1)],
        props: {
          round: Boolean,
          closeable: Boolean,
          customStyle: String,
          overlayStyle: String,
          transition: { type: String, observer: "observeClass" },
          zIndex: { type: Number, value: 100 },
          overlay: { type: Boolean, value: !0 },
          closeIcon: { type: String, value: "cross" },
          closeIconPosition: { type: String, value: "top-right" },
          closeOnClickOverlay: { type: Boolean, value: !0 },
          position: { type: String, value: "center", observer: "observeClass" },
          safeAreaInsetBottom: { type: Boolean, value: !0 },
          safeAreaInsetTop: { type: Boolean, value: !1 },
          safeAreaTabBar: { type: Boolean, value: !1 },
          lockScroll: { type: Boolean, value: !0 },
          rootPortal: { type: Boolean, value: !1 },
        },
        created() {
          this.observeClass();
        },
        methods: {
          onClickCloseIcon() {
            this.$emit("close");
          },
          onClickOverlay() {
            this.$emit("click-overlay"),
              this.data.closeOnClickOverlay && this.$emit("close");
          },
          observeClass() {
            var { transition: e, position: o, duration: a } = this.data,
              s = { name: e || o };
            "none" === e
              ? ((s.duration = 0), (this.originDuration = a))
              : null != this.originDuration &&
                (s.duration = this.originDuration),
              this.setData(s);
          },
        },
      });
    },
  })
);
