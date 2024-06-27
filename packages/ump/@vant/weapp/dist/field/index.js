"use strict";
var r = require("~/r");
r(
  "KF13",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    KF13: function (e, a, t) {
      t.r(a);
      var i = t("6MKc"),
        l = t("py6f"),
        s = {
          value: {
            type: String,
            observer(e) {
              e !== this.value &&
                (this.setData({ innerValue: e }), (this.value = e));
            },
          },
          placeholder: String,
          placeholderStyle: String,
          placeholderClass: String,
          disabled: Boolean,
          maxlength: { type: Number, value: -1 },
          cursorSpacing: { type: Number, value: 50 },
          autoFocus: Boolean,
          focus: Boolean,
          cursor: { type: Number, value: -1 },
          selectionStart: { type: Number, value: -1 },
          selectionEnd: { type: Number, value: -1 },
          adjustPosition: { type: Boolean, value: !0 },
          holdKeyboard: Boolean,
        },
        r = {
          type: { type: String, value: "text" },
          password: Boolean,
          confirmType: String,
          confirmHold: Boolean,
          alwaysEmbed: Boolean,
        },
        o = {
          autoHeight: Boolean,
          fixed: Boolean,
          showConfirmBar: { type: Boolean, value: !0 },
          disableDefaultPadding: { type: Boolean, value: !0 },
        };
      Object(l.a)({
        field: !0,
        classes: ["input-class", "right-icon-class", "label-class"],
        props: Object.assign(
          Object.assign(Object.assign(Object.assign({}, s), r), o),
          {
            size: String,
            icon: String,
            label: String,
            error: Boolean,
            center: Boolean,
            isLink: Boolean,
            leftIcon: String,
            rightIcon: String,
            autosize: null,
            required: Boolean,
            iconClass: String,
            clickable: Boolean,
            inputAlign: String,
            customStyle: String,
            errorMessage: String,
            arrowDirection: String,
            showWordLimit: Boolean,
            errorMessageAlign: String,
            readonly: { type: Boolean, observer: "setShowClear" },
            clearable: { type: Boolean, observer: "setShowClear" },
            clearTrigger: { type: String, value: "focus" },
            border: { type: Boolean, value: !0 },
            titleWidth: { type: String, value: "6.2em" },
            clearIcon: { type: String, value: "clear" },
            extraEventParams: { type: Boolean, value: !1 },
          }
        ),
        data: { focused: !1, innerValue: "", showClear: !1 },
        created() {
          (this.value = this.data.value),
            this.setData({ innerValue: this.value });
        },
        methods: {
          formatValue(e) {
            var { maxlength: a } = this.data;
            return -1 !== a && e.length > a ? e.slice(0, a) : e;
          },
          onInput(e) {
            var { value: a = "" } = e.detail || {},
              t = this.formatValue(a);
            return (
              (this.value = t),
              this.setShowClear(),
              this.emitChange(
                Object.assign(Object.assign({}, e.detail), { value: t })
              )
            );
          },
          onFocus(e) {
            (this.focused = !0),
              this.setShowClear(),
              this.$emit("focus", e.detail);
          },
          onBlur(e) {
            (this.focused = !1),
              this.setShowClear(),
              this.$emit("blur", e.detail);
          },
          onClickIcon() {
            this.$emit("click-icon");
          },
          onClickInput(e) {
            this.$emit("click-input", e.detail);
          },
          onClear() {
            this.setData({ innerValue: "" }),
              (this.value = ""),
              this.setShowClear(),
              Object(i.j)(() => {
                this.emitChange({ value: "" }), this.$emit("clear", "");
              });
          },
          onConfirm(e) {
            var { value: a = "" } = e.detail || {};
            (this.value = a), this.setShowClear(), this.$emit("confirm", a);
          },
          setValue(e) {
            (this.value = e),
              this.setShowClear(),
              "" === e && this.setData({ innerValue: "" }),
              this.emitChange({ value: e });
          },
          onLineChange(e) {
            this.$emit("linechange", e.detail);
          },
          onKeyboardHeightChange(e) {
            this.$emit("keyboardheightchange", e.detail);
          },
          emitChange(e) {
            var a,
              { extraEventParams: t } = this.data;
            this.setData({ value: e.value });
            var i = t
              ? Object.assign(Object.assign({}, e), {
                  callback: (e) => {
                    a = e;
                  },
                })
              : e.value;
            return this.$emit("input", i), this.$emit("change", i), a;
          },
          setShowClear() {
            var { clearable: e, readonly: a, clearTrigger: t } = this.data,
              { focused: i, value: l } = this,
              s = !1;
            e && !a && (s = !!l && ("always" === t || ("focus" === t && i)));
            this.setData({ showClear: s });
          },
          noop() {},
        },
      });
    },
  })
);
