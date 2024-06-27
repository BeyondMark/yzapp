"use strict";
var r = require("~/r");
r(
  "KXlQ",
  Object.assign({}, require("~/v.js").modules, {
    KXlQ: function (t, e, i) {
      i.r(e);
      var o = {
          props: {
            show: { type: Boolean, default: !1 },
            title: String,
            showClose: Boolean,
            scroll: { type: Boolean, default: !0 },
            closeOnConfirm: { type: Boolean, default: !0 },
            useBottomSlot: Boolean,
            buttonText: String,
            themeColors: Object,
            customStyle: String,
            overlayStyle: String,
          },
          data: () => ({ initialShow: !1, string: "" }),
          computed: {
            popupCustomStyle() {
              return (
                (this.customStyle || "") +
                "; border-radius: var(--theme-radius-dialog, 16px) var(--theme-radius-dialog, 16px) 0 0 !important;"
              );
            },
          },
          watch: {
            show(t) {
              t
                ? (!this.initialShow && (this.initialShow = !0),
                  this.displayTimer && clearTimeout(this.displayTimer))
                : (this.displayTimer = setTimeout(() => {
                    this.initialShow = !1;
                  }, 600));
            },
          },
          methods: {
            onClose() {
              this.$emit("close");
            },
            onConfirm() {
              this.$emit("confirm");
            },
          },
          ud: !0,
        },
        s = i("9ZMt");
      e.default = s.default.component(o);
    },
  })
);
