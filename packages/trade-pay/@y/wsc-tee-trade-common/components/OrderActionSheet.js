"use strict";
var r = require("~/r");
r(
  "lwRR",
  Object.assign({}, require("~/v.js").modules, {
    lwRR: function (t, e, o) {
      o.r(e);
      o("YeA1");
      var l = {
          name: "order-action-sheet",
          props: {
            show: Boolean,
            title: String,
            showClose: { type: Boolean, default: () => !0 },
            buttonText: String,
            buttonPlain: Boolean,
            bodyBackgroundColor: { type: String, value: "#f7f8fa" },
            popupClass: String,
            bodyStyle: String,
            scroll: { type: Boolean, value: !0 },
            closeOnConfirm: { type: Boolean, default: () => !0 },
            useBottomSlot: Boolean,
            useCloseIconSlot: Boolean,
            color: { type: String, value: "" },
            btnTextColor: { type: String, default: "" },
            disablePadding: { type: Boolean, value: !1 },
            themeColors: { type: Object, default: () => ({}) },
            customStyle: String,
            overlayStyle: String,
            zIndex: { type: Number, default: 100 },
          },
          data: () => ({ initialShow: !1 }),
          computed: {
            IBodyStyle() {
              return (
                "background-color: " +
                this.bodyBackgroundColor +
                "; " +
                this.bodyStyle
              );
            },
            btnTextStyle() {
              return "color: " + (this.btnTextColor || "#fff");
            },
          },
          watch: {
            show: {
              handler(t) {
                t
                  ? (!this.initialShow && (this.initialShow = !0),
                    this.displayTimer && clearTimeout(this.displayTimer))
                  : (this.displayTimer = setTimeout(() => {
                      this.initialShow = !1;
                    }, 600));
              },
              immediate: !0,
            },
          },
          methods: {
            onConfirm() {
              this.$emit("confirm"), this.closeOnConfirm && this.onClose();
            },
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        i = o("9ZMt");
      e.default = i.default.component(l);
    },
  })
);
