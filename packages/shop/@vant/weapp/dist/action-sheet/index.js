"use strict";
var r = require("~/r");
r(
  "42i3",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "42i3": function (e, t, o) {
      o.r(t);
      var s = o("py6f"),
        l = o("TzfB");
      Object(s.a)({
        classes: ["list-class"],
        mixins: [l.a],
        props: {
          show: Boolean,
          title: String,
          cancelText: String,
          description: String,
          round: { type: Boolean, value: !0 },
          zIndex: { type: Number, value: 100 },
          actions: { type: Array, value: [] },
          overlay: { type: Boolean, value: !0 },
          closeOnClickOverlay: { type: Boolean, value: !0 },
          closeOnClickAction: { type: Boolean, value: !0 },
          safeAreaInsetBottom: { type: Boolean, value: !0 },
          rootPortal: { type: Boolean, value: !1 },
        },
        methods: {
          onSelect(e) {
            var { index: t } = e.currentTarget.dataset,
              {
                actions: o,
                closeOnClickAction: s,
                canIUseGetUserProfile: l,
              } = this.data,
              i = o[t];
            i &&
              (this.$emit("select", i),
              s && this.onClose(),
              "getUserInfo" === i.openType &&
                l &&
                wx.getUserProfile({
                  desc: i.getUserProfileDesc || "  ",
                  complete: (e) => {
                    this.$emit("getuserinfo", e);
                  },
                }));
          },
          onCancel() {
            this.$emit("cancel");
          },
          onClose() {
            this.$emit("close");
          },
          onClickOverlay() {
            this.$emit("click-overlay"), this.onClose();
          },
        },
      });
    },
  })
);
