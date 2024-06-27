"use strict";
var r = require("~/r");
r(
  "Q/Ny",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "Q/Ny": function (t, e, a) {
      a.r(e);
      var i = a("kZMD"),
        s = a("m6kV"),
        r = a("BZkp"),
        h = a("Zqpg"),
        u = Object(s.a)("t-slider"),
        l = {
          mixins: [i.a, Object(h.a)({ externalClasses: ["custom-class"] })],
          props: {
            disabled: Boolean,
            useButtonSlot: Boolean,
            activeColor: String,
            inactiveColor: String,
            max: { type: Number, default: 100 },
            min: { type: Number, default: 0 },
            step: { type: Number, default: 1 },
            value: { type: Number, default: 0 },
            barHeight: { type: null, default: 2 },
            vertical: Boolean,
          },
          logicData() {
            return { barStyle: "", currentValue: this.value };
          },
          computed: {
            classes() {
              return {
                root:
                  u({ disabled: this.disabled, vertical: this.vertical }) +
                  " " +
                  this.customClass,
              };
            },
            styles() {
              var {
                inactiveColor: t,
                activeColor: e,
                barHeight: a,
                barStyle: i,
                vertical: s,
              } = this;
              return {
                root: t ? "background:" + t : "",
                bar:
                  "\n          " +
                  (s ? "width" : "height") +
                  ": " +
                  Object(r.b)(a) +
                  ";\n          background: " +
                  e +
                  ";\n          " +
                  i +
                  "\n        ",
              };
            },
          },
          watch: {
            value(t, e) {
              t !== e && this.updateValue(t);
            },
          },
          mounted() {
            this.updateValue(this.currentValue);
          },
          methods: {
            onTouchStart(t) {
              this.disabled ||
                (this.touchStart(t),
                (this.startValue = this.format(this.currentValue)),
                (this.dragStatus = "start"));
            },
            onTouchMove(t) {
              this.disabled ||
                ("start" === this.dragStatus && this.$emit("drag-start"),
                this.touchMove(t),
                (this.dragStatus = "draging"),
                Object(r.f)(this, ".t-slider").then((t) => {
                  var { vertical: e } = this,
                    a =
                      ((e ? this.deltaY : this.deltaX) /
                        (e ? t.height : t.width)) *
                      this.getRange();
                  (this.newValue = this.startValue + a),
                    this.updateValue(this.newValue, !1, !0);
                }));
            },
            onTouchEnd() {
              this.disabled ||
                ("draging" === this.dragStatus &&
                  (this.updateValue(this.newValue, !0),
                  this.$emit("drag-end")));
            },
            onClick(t) {
              if (!this.disabled) {
                var { min: e } = this;
                Object(r.f)(this, ".t-slider").then((a) => {
                  var { vertical: i } = this,
                    s = t.touches[0],
                    r =
                      ((i ? s.clientY - a.top : s.clientX - a.left) /
                        (i ? a.height : a.width)) *
                        this.getRange() +
                      e;
                  this.updateValue(r, !0);
                });
              }
            },
            updateValue(t, e, a) {
              t = this.format(t);
              var { min: i, vertical: s } = this,
                r = s ? "height" : "width",
                h = (100 * (t - i)) / this.getRange() + "%";
              (this.currentValue = t),
                (this.barStyle =
                  "\n        " +
                  r +
                  ": " +
                  h +
                  ";\n        " +
                  (a ? "transition: none;" : "") +
                  "\n      "),
                a && this.$emit("drag", { value: t }),
                e && this.$emit("change", t);
            },
            getRange() {
              var { max: t, min: e } = this;
              return t - e;
            },
            format(t) {
              var { max: e, min: a, step: i } = this;
              return Math.round(Math.max(a, Math.min(t, e)) / i) * i;
            },
          },
          ud: !0,
        },
        n = a("9ZMt");
      e.default = n.default.component(l);
    },
  })
);
