"use strict";
var r = require("~/r");
r(
  "WT0k",
  Object.assign({}, require("~/v.js").modules, {
    WT0k: function (e, t, l) {
      l.r(t);
      var o = l("py6f");
      Object(o.a)({
        props: {
          show: Boolean,
          overlayStyle: String,
          zIndex: { type: Number, value: 100 },
          title: String,
          cancelText: { type: String, value: "取消" },
          description: String,
          options: { type: Array, value: [] },
          overlay: { type: Boolean, value: !0 },
          safeAreaInsetBottom: { type: Boolean, value: !0 },
          closeOnClickOverlay: { type: Boolean, value: !0 },
          duration: { type: null, value: 300 },
          rootPortal: { type: Boolean, value: !1 },
        },
        methods: {
          onClickOverlay() {
            this.$emit("click-overlay");
          },
          onCancel() {
            this.onClose(), this.$emit("cancel");
          },
          onSelect(e) {
            this.$emit("select", e.detail);
          },
          onClose() {
            this.$emit("close");
          },
        },
      });
    },
  })
);
