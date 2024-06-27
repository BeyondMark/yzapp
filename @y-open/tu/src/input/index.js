"use strict";
var r = require("~/r");
r(
  "NJX9",
  Object.assign({}, require("~/v.js").modules, {
    NJX9: function (e, t, a) {
      a.r(t);
      var l = {
          name: "tee-input",
          options: { addGlobalClass: !0, styleIsolation: "shared" },
          props: {
            value: String,
            type: String,
            password: Boolean,
            placeholder: String,
            placeholderStyle: String,
            placeholderClass: String,
            disabled: Boolean,
            maxlength: { type: Number, default: 140 },
            focus: Boolean,
            confirmType: String,
            cursor: Number,
            cursorSpacing: [Number, String],
            adjustPosition: { type: Boolean, default: !0 },
            alwaysEmbed: Boolean,
          },
          methods: {
            onInput(e) {
              this.$emit("input", { value: e.detail.value });
            },
            onBlur(e) {
              this.$emit("blur", { value: e.detail.value });
            },
            onFocus(e) {
              this.$emit("focus", {
                value: e.detail.value,
                height: e.detail.height,
              });
            },
            onConfirm(e) {
              this.$emit("confirm", { value: e.detail.value });
            },
          },
          ud: !0,
        },
        o = a("9ZMt");
      t.default = o.default.component(l);
    },
  })
);
