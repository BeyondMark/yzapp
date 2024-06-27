"use strict";
var r = require("~/r");
r(
  "k83E",
  Object.assign({}, require("~/v.js").modules, {
    k83E: function (e, t, a) {
      a.r(t);
      var l = a("py6f"),
        i = a("ECkf");
      Object(l.a)({
        field: !0,
        classes: ["field-class", "input-class", "cancel-class"],
        props: {
          value: { type: String, value: "" },
          label: String,
          focus: Boolean,
          error: Boolean,
          disabled: Boolean,
          readonly: Boolean,
          inputAlign: String,
          showAction: Boolean,
          useActionSlot: Boolean,
          useLeftIconSlot: Boolean,
          useRightIconSlot: Boolean,
          leftIcon: { type: String, value: "search" },
          rightIcon: String,
          placeholder: String,
          placeholderStyle: String,
          actionText: { type: String, value: "取消" },
          background: { type: String, value: "#ffffff" },
          maxlength: { type: Number, value: -1 },
          shape: { type: String, value: "square" },
          clearable: { type: Boolean, value: !0 },
          clearTrigger: { type: String, value: "focus" },
          clearIcon: { type: String, value: "clear" },
          cursorSpacing: { type: Number, value: 0 },
        },
        methods: {
          onChange(e) {
            Object(i.d)() && this.setData({ value: e.detail }),
              this.$emit("change", e.detail);
          },
          onCancel() {
            setTimeout(() => {
              Object(i.d)() && this.setData({ value: "" }),
                this.$emit("cancel"),
                this.$emit("change", "");
            }, 200);
          },
          onSearch(e) {
            this.$emit("search", e.detail);
          },
          onFocus(e) {
            this.$emit("focus", e.detail);
          },
          onBlur(e) {
            this.$emit("blur", e.detail);
          },
          onClear(e) {
            this.$emit("clear", e.detail);
          },
          onClickInput(e) {
            this.$emit("click-input", e.detail);
          },
        },
      });
    },
  })
);
