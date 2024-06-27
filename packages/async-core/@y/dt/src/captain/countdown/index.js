"use strict";
var r = require("~/r");
r(
  "bSkk",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      bSkk: function (t, e, s) {
        s.r(e);
        var o = s("EqB2"),
          r = s("gDWu"),
          n = s("twfl"),
          i = {
            mixins: [Object(o.a)({ optDesc: n.a })],
            logicData: () => ({
              countdown: { day: 0, hour: 0, minute: 0, second: 0 },
              started: !1,
              ended: !1,
            }),
            computed: {
              statusText() {
                var t = r.b[this.status];
                return this.opt && this.opt.layout === r.a.BIG
                  ? t + ("ended" !== this.status ? "仅剩" : "")
                  : t;
              },
              status() {
                return this.started
                  ? this.ended
                    ? "ended"
                    : "running"
                  : "notBegin";
              },
              showTag() {
                return (
                  this.opt.layout === r.a.BIG || this.opt.layout === r.a.OUT
                );
              },
              showDay() {
                return !this.opt.hideZeroDay || this.hasDay;
              },
              timeRecord() {
                return this.opt.controlled
                  ? this.opt.current
                  : this.countdown || this.opt.defaultCountdown;
              },
              hasDay() {
                return 0 !== this.timeRecord.day;
              },
              day() {
                return this.timeRecord.day;
              },
              hour() {
                return Object(r.d)(this.timeRecord.hour);
              },
              minute() {
                return Object(r.d)(this.timeRecord.minute);
              },
              second() {
                return Object(r.d)(this.timeRecord.second);
              },
              dayUnit() {
                return this.opt.separator[0];
              },
              hourUnit() {
                return this.opt.separator[1];
              },
              minuteUnit() {
                return this.opt.separator[2];
              },
            },
            created() {
              this.opt.preventInit ||
                this.opt.controlled ||
                this.updateCountdown();
            },
            methods: {
              onCountdownStart() {
                this.$emit("started");
              },
              setCountdownOver() {
                this.$emit("ended");
              },
              updateCountdown() {
                var t = new Date().getTime(),
                  e = (this.opt && this.opt.start) || this.start,
                  s = (this.opt && this.opt.end) || this.end;
                t < e
                  ? ((this.countdown = Object(r.c)(t, e)),
                    setTimeout(this.updateCountdown, 1e3))
                  : t < s
                  ? (this.started ||
                      ((this.started = !0), this.onCountdownStart()),
                    (this.countdown = Object(r.c)(t, s)),
                    setTimeout(this.updateCountdown, 1e3))
                  : ((this.started = !0),
                    (this.ended = !0),
                    this.setCountdownOver());
              },
            },
            ud: !0,
          },
          d = s("9ZMt");
        e.default = d.default.component(i);
      },
    }
  )
);
