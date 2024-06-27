"use strict";
var r = require("~/r");
r(
  "JICr",
  Object.assign({}, require("~/v.js").modules, {
    JICr: function (e, t, a) {
      a.r(t);
      var s = a("py6f"),
        i = a("6S0u");
      Object(s.a)({
        field: !0,
        classes: ["input-class", "plus-class", "minus-class"],
        props: {
          value: { type: null },
          integer: { type: Boolean, observer: "check" },
          disabled: Boolean,
          inputWidth: String,
          buttonSize: String,
          asyncChange: Boolean,
          disableInput: Boolean,
          decimalLength: { type: Number, value: null, observer: "check" },
          min: { type: null, value: 1, observer: "check" },
          max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER,
            observer: "check",
          },
          step: { type: null, value: 1 },
          showPlus: { type: Boolean, value: !0 },
          showMinus: { type: Boolean, value: !0 },
          disablePlus: Boolean,
          disableMinus: Boolean,
          longPress: { type: Boolean, value: !0 },
          theme: String,
          alwaysEmbed: Boolean,
        },
        data: { currentValue: "" },
        watch: {
          value() {
            this.observeValue();
          },
        },
        created() {
          this.setData({ currentValue: this.format(this.data.value) });
        },
        methods: {
          observeValue() {
            var { value: e } = this.data;
            this.setData({ currentValue: this.format(e) });
          },
          check() {
            var e,
              t,
              a = this.format(this.data.currentValue);
            (e = a),
              (t = this.data.currentValue),
              String(e) !== String(t) && this.setData({ currentValue: a });
          },
          isDisabled(e) {
            var {
              disabled: t,
              disablePlus: a,
              disableMinus: s,
              currentValue: i,
              max: r,
              min: n,
            } = this.data;
            return "plus" === e ? t || a || +i >= +r : t || s || +i <= +n;
          },
          onFocus(e) {
            this.$emit("focus", e.detail);
          },
          onBlur(e) {
            var t = this.format(e.detail.value);
            this.setData({ currentValue: t }),
              this.emitChange(t),
              this.$emit(
                "blur",
                Object.assign(Object.assign({}, e.detail), { value: t })
              );
          },
          filter(e) {
            return (
              (e = String(e).replace(/[^0-9.-]/g, "")),
              this.data.integer &&
                -1 !== e.indexOf(".") &&
                (e = e.split(".")[0]),
              e
            );
          },
          format(e) {
            return (
              (e = "" === (e = this.filter(e)) ? 0 : +e),
              (e = Math.max(Math.min(this.data.max, e), this.data.min)),
              Object(i.b)(this.data.decimalLength) &&
                (e = e.toFixed(this.data.decimalLength)),
              e
            );
          },
          onInput(e) {
            var { value: t = "" } = e.detail || {};
            if ("" !== t) {
              var a = this.filter(t);
              if (
                Object(i.b)(this.data.decimalLength) &&
                -1 !== a.indexOf(".")
              ) {
                var s = a.split(".");
                a = s[0] + "." + s[1].slice(0, this.data.decimalLength);
              }
              this.emitChange(a);
            }
          },
          emitChange(e) {
            this.data.asyncChange || this.setData({ currentValue: e }),
              this.$emit("change", e);
          },
          onChange() {
            var { type: e } = this;
            if (this.isDisabled(e)) this.$emit("overlimit", e);
            else {
              var t,
                a,
                s,
                i = "minus" === e ? -this.data.step : +this.data.step,
                r = this.format(
                  ((t = +this.data.currentValue),
                  (a = i),
                  (s = Math.pow(10, 10)),
                  Math.round((t + a) * s) / s)
                );
              this.emitChange(r), this.$emit(e);
            }
          },
          longPressStep() {
            this.longPressTimer = setTimeout(() => {
              this.onChange(), this.longPressStep();
            }, 200);
          },
          onTap(e) {
            var { type: t } = e.currentTarget.dataset;
            (this.type = t), this.onChange();
          },
          onTouchStart(e) {
            if (this.data.longPress) {
              clearTimeout(this.longPressTimer);
              var { type: t } = e.currentTarget.dataset;
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
            this.data.longPress && clearTimeout(this.longPressTimer);
          },
        },
      });
    },
  })
);
