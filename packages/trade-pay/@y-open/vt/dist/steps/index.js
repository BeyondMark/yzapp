"use strict";
var r = require("~/r");
r(
  "mOqQ",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    mOqQ: function (t, e, i) {
      i.r(e);
      var s = i("Fcif"),
        c = i("wB7X"),
        r = i("m6kV"),
        a = i("Zqpg"),
        n = {
          mixins: [
            Object(a.a)({ externalClasses: ["desc-class", "custom-class"] }),
          ],
          props: {
            icon: String,
            steps: Array,
            active: Number,
            direction: { type: String, default: "horizontal" },
            activeColor: { type: String, default: c.e },
            inactiveColor: { type: String, default: c.d },
            inactiveTextColor: { type: String, default: c.c },
            activeIcon: { type: String, default: "checked" },
            inactiveIcon: String,
          },
          computed: {
            innerSteps() {
              return this.steps.map((t, e) =>
                Object(s.a)({}, t, {
                  status: this.getStatus(e, this.active),
                  class: Object(r.a)("t-step")([
                    this.direction,
                    this.getStatus(e, this.active),
                  ]),
                  style:
                    "background-color: " +
                    (e < this.active ? this.activeColor : this.inactiveColor),
                })
              );
            },
          },
          methods: {
            onClick(t) {
              this.$emit("click-step", t);
            },
            getStatus: (t, e) =>
              t < e ? "finish" : t === e ? "process" : "inactive",
          },
          ud: !0,
        },
        o = i("9ZMt");
      e.default = o.default.component(n);
    },
  })
);
