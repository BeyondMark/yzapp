"use strict";
var r = require("~/r");
r(
  "Gu+y",
  Object.assign({}, require("~/v.js").modules, {
    "Gu+y": function (t, e, i) {
      function s(t, e) {
        void 0 === e && (e = 2);
        for (var i = t + ""; i.length < e; ) i = "0" + i;
        return i;
      }
      i.r(e);
      function a(t) {
        return {
          days: Math.floor(t / 864e5),
          hours: Math.floor((t % 864e5) / 36e5),
          minutes: Math.floor((t % 36e5) / 6e4),
          seconds: Math.floor((t % 6e4) / 1e3),
          milliseconds: Math.floor(t % 1e3),
        };
      }
      function r(t) {
        return setTimeout(t, 30);
      }
      var o = {
          name: "t-count-down",
          props: {
            useSlot: Boolean,
            millisecond: Boolean,
            time: Number,
            format: { type: String, default: "HH:mm:ss" },
            autoStart: { type: Boolean, default: !0 },
          },
          data: () => ({ formattedTime: "0" }),
          logicData: () => ({ timeData: a(0) }),
          watch: {
            time() {
              this.reset();
            },
          },
          destroyed() {
            clearTimeout(this.tid), (this.tid = null);
          },
          mounted() {
            this.reset();
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
                (this.remain = this.time),
                this.setRemain(this.remain),
                this.autoStart && this.start();
            },
            tick() {
              this.millisecond ? this.microTick() : this.macroTick();
            },
            microTick() {
              this.tid = r(() => {
                this.setRemain(this.getRemain()),
                  0 !== this.remain && this.microTick();
              });
            },
            macroTick() {
              this.tid = r(() => {
                var t,
                  e,
                  i = this.getRemain();
                (t = i),
                  (e = this.remain),
                  (Math.floor(t / 1e3) !== Math.floor(e / 1e3) || 0 === i) &&
                    this.setRemain(i),
                  0 !== this.remain && this.macroTick();
              });
            },
            getRemain() {
              return Math.max(this.endTime - Date.now(), 0);
            },
            setRemain(t) {
              this.remain = t;
              var e = a(t);
              this.useSlot && this.$emit("change", e),
                (this.formattedTime = (function (t, e) {
                  var { days: i } = e,
                    { hours: a, minutes: r, seconds: o, milliseconds: n } = e;
                  return (
                    -1 === t.indexOf("DD")
                      ? (a += 24 * i)
                      : (t = t.replace("DD", s(i))),
                    -1 === t.indexOf("HH")
                      ? (r += 60 * a)
                      : (t = t.replace("HH", s(a))),
                    -1 === t.indexOf("mm")
                      ? (o += 60 * r)
                      : (t = t.replace("mm", s(r))),
                    -1 === t.indexOf("ss")
                      ? (n += 1e3 * o)
                      : (t = t.replace("ss", s(o))),
                    t.replace("SSS", s(n, 3))
                  );
                })(this.format, e)),
                0 === t && (this.pause(), this.$emit("finish"));
            },
          },
          ud: !0,
        },
        n = i("9ZMt");
      e.default = n.default.component(o);
    },
  })
);
