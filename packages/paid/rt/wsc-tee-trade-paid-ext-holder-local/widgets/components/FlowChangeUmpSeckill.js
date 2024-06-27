"use strict";
var r = require("~/r");
r(
  "wnHL",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      wnHL: function (e, t, i) {
        i.r(t);
        var s = i("KozD"),
          n = {
            name: "flow-change-ump-seckill",
            props: { originData: { type: Object, default: () => ({}) } },
            data: () => ({
              timeData: { minutes: 0, seconds: 0, milliseconds: 0 },
              baseTimestamp: 3e5,
            }),
            computed: {
              countdownMinute() {
                return this.handleLeftPad(this.timeData.minutes);
              },
              countdownSecond() {
                return this.handleLeftPad(this.timeData.seconds);
              },
              countdownMillisecond() {
                return parseInt(this.timeData.milliseconds / 10, 10);
              },
            },
            created() {
              this.logger("view");
            },
            methods: {
              handleTimeChange(e) {
                this.timeData = e;
                var { minutes: t, seconds: i, milliseconds: s } = e;
                0 === t && 0 === i && 0 === s && this.$refs.countDown.reset();
              },
              handleLeftPad(e) {
                var t = +e;
                return isNaN(t) ? e : t > 9 ? t : "0" + t;
              },
              logger(e) {
                this.$emit("onLogger", {
                  data: this.originData,
                  type: s.a.seckill,
                  eventType: e,
                });
              },
              handleClick() {
                this.logger("click");
              },
            },
            ud: !0,
          },
          a = i("9ZMt");
        t.default = a.default.component(n);
      },
    }
  )
);
