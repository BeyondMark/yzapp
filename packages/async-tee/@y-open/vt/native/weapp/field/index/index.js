"use strict";
var r = require("~/r");
r(
  "nf4C",
  Object.assign({}, require("~/v.js").modules, {
    nf4C: function (e, t, n) {
      n.r(t);
      var i = n("9ZMt"),
        o = n("Fcif");
      var a = n("m6kV"),
        r = n("BZkp"),
        l = {
          value: String,
          placeholder: String,
          placeholderStyle: String,
          disabled: Boolean,
          maxlength: { type: Number, default: 140 },
          cursorSpacing: { type: Number, default: 50 },
          autoFocus: Boolean,
          focus: Boolean,
          cursor: { type: Number, default: -1 },
          selectionStart: { type: Number, default: -1 },
          selectionEnd: { type: Number, default: -1 },
          adjustPosition: { type: Boolean, default: !0 },
          holdKeyboard: Boolean,
          enableNative: Boolean,
        },
        s = {
          type: { type: String, default: "text" },
          password: Boolean,
          confirmType: String,
          confirmHold: Boolean,
          alwaysEmbed: Boolean,
        },
        u = {
          autoHeight: Boolean,
          fixed: Boolean,
          showConfirmBar: { type: Boolean, default: !0 },
          disableDefaultPadding: { type: Boolean, default: !0 },
        },
        c = n("Zqpg"),
        h = n("1pB4"),
        f = Object(a.a)("t-field");
      i.default.component({
        name: "t-field",
        mixins: [
          Object(c.a)({
            externalClasses: ["input-class", "right-icon-class", "label-class"],
          }),
        ],
        props: Object(o.a)({}, l, s, u, {
          size: String,
          icon: String,
          label: String,
          error: Boolean,
          center: Boolean,
          isLink: Boolean,
          leftIcon: String,
          rightIcon: String,
          autosize: [Boolean, Object],
          readonly: { type: Boolean },
          required: Boolean,
          iconClass: String,
          clearable: { type: Boolean },
          clickable: Boolean,
          inputAlign: String,
          customStyle: String,
          errorMessage: String,
          arrowDirection: String,
          showWordLimit: Boolean,
          errorMessageAlign: String,
          border: { type: Boolean, default: !0 },
          titleWidth: { type: String, default: "90px" },
          formatter: Function,
          clearTrigger: { type: String, default: "focus" },
        }),
        data: function () {
          return {
            innerValue: "",
            inputStyle: {},
            showClear: !1,
            isLockTextarea: !1,
          };
        },
        logicData: function () {
          return { focused: !1 };
        },
        computed: {
          classes: function () {
            return {
              body: f("body", [this.type]),
              input:
                this.inputClass +
                " " +
                f("input", [
                  this.inputAlign,
                  this.type,
                  { disabled: this.disabled, error: this.error },
                ]),
              placeholder: f("placeholder", { error: this.error }),
              wordNum: f("word-num", {
                full: this.value && this.value.length >= this.maxlength,
              }),
              errorMessage: f("error-message", [
                this.errorMessageAlign,
                { disabled: this.disabled, error: this.error },
              ]),
            };
          },
          realPlaceholderStyle: function () {
            return this.error
              ? this.placeholderStyle + "; color: #ee0a24;"
              : "color: #c8c9cc; " + this.placeholderStyle;
          },
        },
        watch: {
          value: function (e) {
            var t = this;
            e !== this.innerValue &&
              this.updateInnerValue(e).then(function () {
                t.nextTickAutoSize(), t.calcInputStyle();
              });
          },
          readonly: function () {
            this.setShowClear();
          },
          clearable: function () {
            this.setShowClear();
          },
        },
        created: function () {
          var e = this;
          this.updateInnerValue(this.value).then(function () {
            e.nextTickAutoSize();
          });
        },
        mounted: function () {
          this.nextTickAutoSize(), this.calcInputStyle();
        },
        autoSizeTimer: null,
        methods: {
          startComposing: function (e) {
            e.target.composing = !0;
          },
          endComposing: function (e) {
            var { target: t } = e;
            t.composing &&
              ((t.composing = !1),
              (function (e, t) {
                var n = window.document.createEvent("HTMLEvents");
                n.initEvent(t, !0, !0), e.dispatchEvent(n);
              })(t, "input"));
          },
          nextTickAutoSize: function () {},
          calcInputStyle: function () {
            var e = this.autosize;
            if ("" === e || e) {
              var t = {};
              if ("object" == typeof e)
                e.minHeight && (t["min-height"] = Object(r.b)(e.minHeight)),
                  e.maxHeight && (t["max-height"] = Object(r.b)(e.maxHeight));
              else if (this.innerValue) {
                var n = this.$refs.textareaRef;
                if (!n) return;
                t.height = Object(r.b)(n.scrollHeight);
              }
              this.inputStyle = t;
            }
          },
          onTextareaInput: function (e) {
            var t;
            if (null == (t = e.target) || !t.composing) {
              var n,
                i = null == (n = e.detail) ? void 0 : n.value;
              this.onInput({ value: i });
            }
          },
          updateInnerValue: function (e) {
            var t = this;
            return new Promise(function (n) {
              (t.innerValue = e),
                Object(h.c)(t.formatter)
                  ? setTimeout(function () {
                      "string" != typeof (e = t.formatter.call(null, e)) &&
                        (e = ""),
                        (t.innerValue = e),
                        n();
                    })
                  : n();
            });
          },
          onInput: function (e) {
            var t = this,
              n = (e || {}).value,
              i = void 0 === n ? "" : n;
            this.updateInnerValue(i).then(function () {
              t.nextTickAutoSize(),
                t.setShowClear(),
                t.calcInputStyle(),
                t.emitChange();
            });
          },
          onFocus: function (e) {
            (this.focused = !0), this.setShowClear(), this.$emit("focus", e);
          },
          onBlur: function (e) {
            var t = this;
            (this.focused = !1),
              this.$emit("blur", e),
              setTimeout(function () {
                t.setShowClear();
              }, 500);
          },
          onClickIcon: function () {
            this.$emit("click-icon");
          },
          onClickInput: function (e) {
            this.$emit("click-input", e);
          },
          onClear: function () {
            (this.innerValue = ""),
              this.nextTickAutoSize(),
              this.setShowClear(),
              this.$emit("clear", "");
          },
          onConfirm: function (e) {
            var t = (e || {}).value,
              n = void 0 === t ? "" : t;
            this.setShowClear(), this.$emit("confirm", n);
          },
          onLineChange: function (e) {
            this.$emit("linechange", e);
          },
          onKeyboardHeightChange: function (e) {
            this.$emit("keyboardheightchange", e);
          },
          emitChange: function () {
            this.$emit("input", { value: this.innerValue }),
              this.$emit("change", { value: this.innerValue });
          },
          setShowClear: function () {
            var e = this.focused,
              t = this.innerValue,
              n = this.clearable,
              i = this.readonly,
              o = this.clearTrigger,
              a = !1;
            n && !i && (a = !!t && ("always" === o || ("focus" === o && !!e)));
            this.showClear = a;
          },
          noop: function () {},
        },
        ud: !0,
      });
    },
  })
);
