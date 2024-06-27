"use strict";
var r = require("~/r");
r(
  "QfhI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    QfhI: function (e, t, i) {
      i.r(t);
      var a = i("m6kV"),
        s = i("wB7X"),
        o = Object(a.a)("t-switch"),
        c = {
          name: "t-switch",
          props: {
            checked: { type: null },
            loading: Boolean,
            disabled: Boolean,
            activeColor: String,
            inactiveColor: String,
            size: { type: String, default: "30px" },
            activeValue: { type: null, default: !0 },
            inactiveValue: { type: null, default: !1 },
          },
          computed: {
            loadingColor() {
              return this.checked
                ? this.activeColor || s.a
                : this.inactiveColor || s.c;
            },
            switchClass() {
              return {
                root: o({
                  disabled: this.disabled,
                  on: this.checked === this.activeValue,
                }),
              };
            },
            switchStyle() {
              var e = "font-size: " + this.size + ";";
              return (
                this.checked &&
                  this.activeColor &&
                  (e += "background-color: " + this.activeColor + ";"),
                !this.checked &&
                  this.inactiveColor &&
                  (e += "background-color: " + this.inactiveColor + ";"),
                e
              );
            },
            loadingSize() {
              return parseInt(this.size, 10) / 2;
            },
          },
          methods: {
            onClick() {
              if (!this.disabled && !this.loading) {
                var e =
                  this.checked === this.activeValue
                    ? this.inactiveValue
                    : this.activeValue;
                this.$emit("input", e), this.$emit("change", e);
              }
            },
          },
          ud: !0,
        },
        l = i("9ZMt");
      t.default = l.default.component(c);
    },
  })
);
