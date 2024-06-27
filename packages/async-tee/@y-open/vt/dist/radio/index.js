"use strict";
var r = require("~/r");
r(
  "VSgn",
  Object.assign({}, require("~/v.js").modules, {
    VSgn: function (e, t, i) {
      i.r(t);
      var s = i("m6kV"),
        a = i("BZkp"),
        l = i("Zqpg"),
        o = Object(s.a)("t-radio__label"),
        n = Object(s.a)("t-radio__icon"),
        r = {
          name: "t-radio",
          options: { multipleSlots: !0 },
          mixins: [
            Object(l.a)({
              externalClasses: ["custom-class", "icon-class", "label-class"],
            }),
          ],
          props: {
            name: { type: [String, Number] },
            value: { type: [String, Number] },
            disabled: Boolean,
            useIconSlot: Boolean,
            checkedColor: String,
            labelPosition: { type: String, default: "right" },
            labelDisabled: Boolean,
            shape: { type: String, default: "round" },
            iconSize: { type: String, default: "20" },
          },
          computed: {
            classes() {
              return {
                radio: "t-radio " + this.customClass,
                labelClass:
                  this.labelClass +
                  " " +
                  o([this.labelPosition, { disabled: this.disabled }]),
                iconClass:
                  this.iconClass +
                  " " +
                  n([
                    this.shape,
                    {
                      disabled: this.disabled,
                      checked: this.value === this.name,
                    },
                  ]),
              };
            },
            iconWrapStyle() {
              return "font-size:" + Object(a.b)(this.iconSize) + ";";
            },
            iconStyle() {
              return (
                "font-size:" +
                Object(a.b)(this.iconSize) +
                "; " +
                (this.checkedColor && !this.disabled && this.value === this.name
                  ? "border-color:" +
                    this.checkedColor +
                    "; background-color:" +
                    this.checkedColor +
                    ";"
                  : "")
              );
            },
            iconCustomStyle() {
              return (
                "line-height:" +
                Object(a.b)(this.iconSize) +
                "; font-size: .8em;"
              );
            },
          },
          methods: {
            emitChange(e) {
              var t = this.parent || this;
              t.$emit("input", e), t.$emit("change", e);
            },
            onChange() {
              this.disabled || this.emitChange(this.name);
            },
            onClickLabel() {
              var { disabled: e, labelDisabled: t, name: i } = this;
              e || t || this.emitChange(i);
            },
          },
          ud: !0,
        },
        c = i("9ZMt");
      t.default = c.default.component(r);
    },
  })
);
