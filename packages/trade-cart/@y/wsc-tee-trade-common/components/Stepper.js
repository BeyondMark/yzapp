"use strict";
var r = require("~/r");
r(
  "pe2q",
  Object.assign({}, require("~/v.js").modules, {
    pe2q: function (e, t, i) {
      i.r(t);
      var s = i("Fcif");
      function n(e, t) {
        return String(e) === String(t);
      }
      function a(e) {
        return null != e;
      }
      var r = {
          props: {
            value: [null, Number],
            integer: Boolean,
            disabled: Boolean,
            inputWidth: null,
            buttonSize: null,
            asyncChange: Boolean,
            disableInput: Boolean,
            decimalLength: { type: [Number, String], default: null },
            min: { type: null, default: 1 },
            max: { type: null, default: Number.MAX_SAFE_INTEGER },
            step: { type: null, default: 1 },
            showPlus: { type: Boolean, default: !0 },
            showMinus: { type: Boolean, default: !0 },
            disablePlus: Boolean,
            disableMinus: Boolean,
            longPress: { type: Boolean, default: !0 },
            theme: String,
            plusStyle: String,
            minusStyle: String,
          },
          data() {
            return { currentValue: this.value ? this.format(this.value) : "" };
          },
          watch: {
            value(e) {
              n(e, this.currentValue) || (this.currentValue = this.format(e));
            },
            max() {
              this.check();
            },
            integer() {
              this.check();
            },
            decimalLength() {
              this.check();
            },
            min() {
              this.check();
            },
          },
          created() {
            this.currentValue = this.format(this.value);
          },
          methods: {
            updateInnerValue(e) {
              return new Promise((t) => {
                (this.currentValue = e), setTimeout(t);
              });
            },
            check() {
              var e = this.format(this.currentValue);
              n(e, this.currentValue) || (this.currentValue = e);
            },
            isDisabled(e) {
              return "plus" === e
                ? this.disabled ||
                    this.disablePlus ||
                    this.currentValue >= this.max
                : this.disabled ||
                    this.disableMinus ||
                    this.currentValue <= this.min;
            },
            onFocus(e) {
              this.$emit("focus", e);
            },
            onBlur(e) {
              var { value: t } = e;
              this.updateInnerValue(t).then(() => {
                (t = this.format(t)),
                  this.emitChange(t),
                  this.$emit("blur", Object(s.a)({}, e, { value: t }));
              });
            },
            filter(e) {
              return (
                (e = String(e).replace(/[^0-9.-]/g, "")),
                this.integer && -1 !== e.indexOf(".") && (e = e.split(".")[0]),
                e
              );
            },
            format(e) {
              return (
                (e = "" === (e = this.filter(e)) ? 0 : +e),
                (e = Math.max(Math.min(this.max, e), this.min)),
                a(this.decimalLength) && (e = e.toFixed(this.decimalLength)),
                String(e)
              );
            },
            onInput(e) {
              var { value: t = "" } = e || {};
              if ("" !== t) {
                var i = this.filter(t);
                if (a(this.decimalLength) && -1 !== i.indexOf(".")) {
                  var s = i.split(".");
                  i = s[0] + "." + s[1].slice(0, this.decimalLength);
                }
                this.emitChange(i);
              }
            },
            emitChange(e) {
              this.asyncChange || (this.currentValue = e),
                this.$emit("change", e);
            },
            onChange() {
              var { type: e } = this;
              if (this.isDisabled(e)) this.$emit("overlimit", e);
              else {
                var t,
                  i,
                  s,
                  n = "minus" === e ? -this.step : +this.step,
                  a = this.format(
                    ((t = +this.currentValue),
                    (i = n),
                    (s = Math.pow(10, 10)),
                    Math.round((t + i) * s) / s)
                  );
                this.emitChange(a), this.$emit(e);
              }
            },
            longPressStep() {
              this.longPressTimer = setTimeout(() => {
                this.onChange(), this.longPressStep();
              }, 200);
            },
            onTap(e) {
              var { type: t } = e.target.dataset;
              (this.type = t), this.onChange();
            },
            onTouchStart(e) {
              if (this.longPress) {
                clearTimeout(this.longPressTimer);
                var { type: t } = e.target.dataset;
                (this.type = t),
                  (this.isLongPress = !1),
                  (this.longPressTimer = setTimeout(() => {
                    (this.isLongPress = !0),
                      this.onChange(),
                      this.longPressStep();
                  }, 600));
              }
            },
            onTouchEnd() {
              this.longPress && clearTimeout(this.longPressTimer);
            },
          },
        },
        h = i("9ZMt");
      t.default = h.default.component(r);
    },
  })
);
