"use strict";
var r = require("~/r");
r(
  "xTxK",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    xTxK: function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        a = s("Zqpg"),
        n = s("m6kV"),
        l = s("pOq+"),
        u = s("BZkp"),
        r = s("1pB4"),
        h = Object(n.a)("t-stepper"),
        o = {
          name: "t-stepper",
          mixins: [
            Object(a.a)({
              externalClasses: [
                "custom-class",
                "input-class",
                "plus-class",
                "minus-class",
              ],
            }),
          ],
          props: {
            value: null,
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
          data: () => ({ currentValue: "" }),
          computed: {
            styles() {
              var {
                  buttonSize: e,
                  inputWidth: t,
                  minusStyle: s,
                  plusStyle: i,
                } = this,
                a = { width: "" + Object(u.b)(e), height: "" + Object(u.b)(e) };
              return {
                inputSize:
                  "width: " + Object(u.b)(t) + "; height: " + Object(u.b)(e),
                minus: Object(l.a)([a, s]),
                plus: Object(l.a)([a, i]),
              };
            },
            classes() {
              var {
                disabled: e,
                disableMinus: t,
                disablePlus: s,
                currentValue: i,
                min: a,
                max: n,
              } = this;
              return {
                root: h([this.theme]) + " " + this.customClass,
                minus:
                  h("minus", { disabled: e || t || i <= a }) +
                  " " +
                  this.minusClass,
                input: h("input", { disabled: e }) + " " + this.inputClass,
                plus:
                  h("plus", { disabled: e || s || i >= n }) +
                  " " +
                  this.plusClass,
              };
            },
          },
          watch: {
            value(e) {
              Object(u.c)(e, this.currentValue) ||
                (this.currentValue = this.format(e));
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
              Object(u.c)(e, this.currentValue) || (this.currentValue = e);
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
                  this.$emit("blur", Object(i.a)({}, e, { value: t }));
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
                Object(r.b)(this.decimalLength) &&
                  (e = e.toFixed(this.decimalLength)),
                String(e)
              );
            },
            onInput(e) {
              var { value: t = "" } = e || {};
              if ("" !== t) {
                var s = this.filter(t);
                if (Object(r.b)(this.decimalLength) && -1 !== s.indexOf(".")) {
                  var i = s.split(".");
                  s = i[0] + "." + i[1].slice(0, this.decimalLength);
                }
                this.emitChange(s);
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
                var t = "minus" === e ? -this.step : +this.step,
                  s = this.format(Object(u.a)(+this.currentValue, t));
                this.emitChange(s), this.$emit(e);
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
          ud: !0,
        },
        c = s("9ZMt");
      t.default = c.default.component(o);
    },
  })
);
