"use strict";
var r = require("~/r");
r(
  "y+ri",
  Object.assign({}, require("~/v.js").modules, {
    "y+ri": function (t, o, e) {
      e.r(o);
      var l = {
          props: {
            show: Boolean,
            title: String,
            showClose: Boolean,
            buttonText: String,
            popupClass: String,
            customStyle: String,
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
              var t, o;
              return (
                "background: " +
                ((null == (t = this.themeColors) ? void 0 : t["main-bg"]) ||
                  "#f44") +
                "; color: " +
                ((null == (o = this.themeColors) ? void 0 : o["main-text"]) ||
                  "#fff")
              );
            },
          },
          watch: {
            show(t) {
              t && !this.initialShow && (this.initialShow = !0);
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
      o.default = i.default.component(l);
    },
  })
);
