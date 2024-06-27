"use strict";
var r = require("~/r");
r(
  "Amma",
  Object.assign({}, require("~/v.js").modules, {
    Amma: function (o, t, e) {
      e.r(t);
      var l = {
          props: {
            show: Boolean,
            title: String,
            showClose: Boolean,
            buttonText: String,
            popupClass: String,
            bodyStyle: { type: String, value: "" },
            scroll: { type: Boolean, default: !0 },
            closeOnConfirm: { type: Boolean, default: !0 },
            useBottomSlot: Boolean,
            themeColors: { type: Object, default: () => {} },
            closeable: { type: Boolean, default: !0 },
          },
          data: () => ({ initialShow: !1 }),
          computed: {
            themeStyle() {
              var o, t;
              return (
                "background: " +
                ((null == (o = this.themeColors) ? void 0 : o["main-bg"]) ||
                  "#f44") +
                "; color: " +
                ((null == (t = this.themeColors) ? void 0 : t["main-text"]) ||
                  "#fff")
              );
            },
          },
          watch: {
            show(o) {
              o && !this.initialShow && (this.initialShow = !0);
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
            onConfirm() {
              this.$emit("confirm"), this.closeOnConfirm && this.onClose();
            },
          },
          ud: !0,
        },
        i = e("9ZMt");
      t.default = i.default.component(l);
    },
  })
);
