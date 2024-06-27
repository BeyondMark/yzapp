"use strict";
var r = require("~/r");
r(
  "t68S",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      t68S: function (e, t, o) {
        o.r(t);
        var s = o("Fcif"),
          u = o("ddKh"),
          a = {
            name: u.d,
            props: {
              show: { type: Boolean, value: !1 },
              detail: { type: Object, value: Object(s.a)({}, u.a) },
              time: { type: Number, value: 0 },
              formattedTime: { type: String, value: "" },
            },
            data: () => ({ showComp: !1 }),
            watch: {
              show(e) {
                e && (this.showComp = !0);
              },
            },
            methods: {
              closePopup() {
                this.$emit("closePopup");
              },
              onCountDownChange(e) {
                this.$emit("countDownChange", { countDownTime: e });
              },
              showSku() {
                this.$emit("showSku");
              },
            },
            ud: !0,
          },
          i = o("9ZMt");
        t.default = i.default.component(a);
      },
    }
  )
);
