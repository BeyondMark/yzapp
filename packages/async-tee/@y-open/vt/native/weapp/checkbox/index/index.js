"use strict";
var r = require("~/r");
r(
  "vmAI",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    vmAI: function (e, i, t) {
      t.r(i);
      var s = t("9ZMt"),
        a = t("m6kV"),
        l = t("BZkp"),
        n = t("wSeO"),
        o = t("Zqpg"),
        c = Object(a.a)("t-checkbox");
      function r(e, i) {
        e.$emit("input", i), e.$emit("change", i);
      }
      s.default.component({
        name: "t-checkbox",
        mixins: [
          Object(o.a)({
            externalClasses: [
              "custom-class",
              "icon-class",
              "label-class",
              "icon-shadow-class",
            ],
            relation: Object(n.b)("checkbox"),
          }),
        ],
        props: {
          name: String,
          value: Boolean,
          disabled: Boolean,
          useIconSlot: Boolean,
          checkedColor: String,
          labelPosition: String,
          labelDisabled: Boolean,
          shape: { type: String, default: "round" },
          iconSize: { type: String, default: "20" },
        },
        logicData: function () {
          return { parentDisabled: !1 };
        },
        computed: {
          classes: function () {
            return {
              icon:
                this.iconClass +
                " " +
                c("icon", [
                  this.shape,
                  {
                    disabled: this.disabled || this.parentDisabled,
                    checked: this.value,
                  },
                ]),
              label:
                c("label", [
                  this.labelPosition,
                  { disabled: this.disabled || this.parentDisabled },
                ]) +
                " " +
                this.labelClass,
            };
          },
          iconStyle: function () {
            var e = { display: "flex" },
              i = this.checkedColor,
              t = this.value,
              s = this.disabled,
              a = this.parentDisabled;
            return (
              i &&
                t &&
                !s &&
                !a &&
                Object.assign(e, {
                  "border-color": i,
                  "background-color": i,
                  "border-radius": "50%",
                }),
              Object(l.k)(e)
            );
          },
          wrapStyle: function () {
            return "font-size: " + Object(l.b)(this.iconSize);
          },
        },
        methods: {
          emitChange: function (e) {
            this.parent ? this.setParentValue(this.parent, e) : r(this, e);
          },
          toggle: function (e) {
            var i = this.parentDisabled,
              t = this.disabled,
              s = this.value;
            t || i || this.emitChange(!s), this.$emit("click", e);
          },
          onClickLabel: function () {
            var e = this.labelDisabled,
              i = this.parentDisabled,
              t = this.disabled,
              s = this.value;
            t || e || i || this.emitChange(!s);
          },
          setParentValue: function (e, i) {
            var t = e.value.slice(),
              s = this.name,
              a = e.max;
            if (i) {
              if (a && t.length >= a) return;
              -1 === t.indexOf(s) && (t.push(s), r(e, t));
            } else {
              var l = t.indexOf(s);
              -1 !== l && (t.splice(l, 1), r(e, t));
            }
          },
        },
        ud: !0,
      });
    },
  })
);
