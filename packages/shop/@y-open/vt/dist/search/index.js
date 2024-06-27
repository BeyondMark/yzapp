"use strict";
var r = require("~/r");
r(
  "3Wdz",
  Object.assign({}, require("~/v.js").modules, {
    "3Wdz": function (t, e, n) {
      n.r(e);
      var o = {
          name: "t-search",
          externalClasses: [
            "custom-class",
            "content-class",
            "field-class",
            "input-class",
            "cancel-class",
          ],
          options: { multipleSlots: !0 },
          props: {
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
            titleWidth: String,
            value: String,
            leftIcon: { type: String, default: "search" },
            rightIcon: String,
            placeholder: String,
            placeholderStyle: String,
            actionText: { type: String, default: "取消" },
            background: { type: String, default: "#ffffff" },
            maxlength: { type: Number, default: -1 },
            shape: { type: String, default: "square" },
            clearable: { type: Boolean, default: !0 },
            clearTrigger: { type: String, default: "focus" },
          },
          computed: {
            classes() {
              return {
                search:
                  "custom-class t-search " +
                  (this.showAction || this.useActionSlot
                    ? "t-search--withaction"
                    : ""),
                content:
                  "content-class t-search__content " +
                  ("round" === this.shape ? "t-search__content--round" : ""),
              };
            },
            useLeftIcon() {
              return this.useLeftIconSlot ? "" : this.leftIcon;
            },
            useRightIcon() {
              return this.useRightIconSlot ? "" : this.rightIcon;
            },
          },
          methods: {
            onChange(t) {
              this.$emit("change", t);
            },
            onCancel() {
              this.$emit("cancel"), this.$emit("change", "");
            },
            onSearch(t) {
              this.$emit("search", t);
            },
            onFocus(t) {
              this.$emit("focus", t);
            },
            onBlur(t) {
              this.$emit("blur", t);
            },
            onClickInput(t) {
              this.$emit("click-input", t);
            },
            onClear() {
              this.$emit("clear", "");
            },
          },
          ud: !0,
        },
        s = n("9ZMt");
      e.default = s.default.component(o);
    },
  })
);
