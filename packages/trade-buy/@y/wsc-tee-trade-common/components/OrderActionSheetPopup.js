"use strict";
var r = require("~/r");
r(
  "j6qw",
  Object.assign({}, require("~/v.js").modules, {
    j6qw: function (t, e, o) {
      o.r(e);
      var i = {
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
            height: { type: String, default: "75vh" },
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
            fillCustomStyle() {
              return this.customStyle + "; height: " + this.height + ";";
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
        l = o("9ZMt");
      e.default = l.default.component(i);
    },
  })
);
