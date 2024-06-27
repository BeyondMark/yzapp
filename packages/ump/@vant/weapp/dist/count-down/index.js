"use strict";
var r = require("~/r");
r(
  "hLom",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    hLom: function (t, i, e) {
      e.r(i);
      var s = e("py6f"),
        a = e("tkH8");
      function r(t) {
        return setTimeout(t, 30);
      }
      Object(s.a)({
        props: {
          useSlot: Boolean,
          millisecond: Boolean,
          time: { type: Number, observer: "reset" },
          format: { type: String, value: "HH:mm:ss" },
          autoStart: { type: Boolean, value: !0 },
        },
        data: { timeData: Object(a.c)(0), formattedTime: "0" },
        destroyed() {
          clearTimeout(this.tid), (this.tid = null);
        },
        methods: {
          start() {
            this.counting ||
              ((this.counting = !0),
              (this.endTime = Date.now() + this.remain),
              this.tick());
          },
          pause() {
            (this.counting = !1), clearTimeout(this.tid);
          },
          reset() {
            this.pause(),
              (this.remain = this.data.time),
              this.setRemain(this.remain),
              this.data.autoStart && this.start();
          },
          tick() {
            this.data.millisecond ? this.microTick() : this.macroTick();
          },
          microTick() {
            this.tid = r(() => {
              this.setRemain(this.getRemain()),
                0 !== this.remain && this.microTick();
            });
          },
          macroTick() {
            this.tid = r(() => {
              var t = this.getRemain();
              (Object(a.a)(t, this.remain) && 0 !== t) || this.setRemain(t),
                0 !== this.remain && this.macroTick();
            });
          },
          getRemain() {
            return Math.max(this.endTime - Date.now(), 0);
          },
          setRemain(t) {
            this.remain = t;
            var i = Object(a.c)(t);
            this.data.useSlot && this.$emit("change", i),
              this.setData({ formattedTime: Object(a.b)(this.data.format, i) }),
              0 === t && (this.pause(), this.$emit("finish"));
          },
        },
      });
    },
  })
);
