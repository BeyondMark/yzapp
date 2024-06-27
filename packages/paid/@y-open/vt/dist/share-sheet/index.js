"use strict";
var r = require("~/r");
r(
  "OPny",
  Object.assign({}, require("~/v.js").modules, {
    OPny: function (e, t, s) {
      s.r(t);
      var l = s("m6kV"),
        a = s("Zqpg"),
        i = Object(l.a)("t-share-sheet"),
        o = {
          name: "t-share-sheet",
          options: { multipleSlots: !0 },
          mixins: [
            Object(a.a)({
              externalClasses: ["title-class", "options-class", "popup-class"],
            }),
          ],
          props: {
            show: Boolean,
            overlayStyle: Object,
            overlayClass: String,
            zIndex: { type: Number, default: 100 },
            title: String,
            cancelText: { type: String, default: "取消" },
            description: String,
            options: { type: Array, default: () => [] },
            overlay: { type: Boolean, default: !0 },
            safeAreaInsetBottom: { type: Boolean, default: !0 },
            closeOnClickOverlay: { type: Boolean, default: !0 },
            duration: { type: null, default: 300 },
            optionsAlign: { type: String, default: "" },
          },
          computed: {
            classes() {
              return {
                root: i(),
                header: i("header"),
                title: i("title") + " " + this.titleClass,
                description: i("description"),
                cancel: i("cancel"),
              };
            },
            isMulti() {
              return (
                Array.isArray(this.options) && Array.isArray(this.options[0])
              );
            },
          },
          methods: {
            onClickOverlay() {
              this.$emit("click-overlay");
            },
            onCancel() {
              this.onClose(), this.$emit("cancel");
            },
            onSelect(e) {
              this.$emit("select", e);
            },
            onClose() {
              this.$emit("close");
            },
          },
          ud: !0,
        },
        r = s("9ZMt");
      t.default = r.default.component(o);
    },
  })
);
