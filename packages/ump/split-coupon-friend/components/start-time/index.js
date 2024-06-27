"use strict";
var r = require("~/r");
r(
  "+Q+I",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+Q+I": function (e, s, r) {
        r.r(s);
        var t = r("Fcif"),
          i = r("u8kV"),
          u = r("QBT5"),
          a = r("NDSq"),
          n = r("svh/");
        Object(i.b)({
          properties: {
            time: { type: Number, value: 0 },
            friend: { type: Boolean },
          },
          mapData: Object(t.a)({}, Object(n.f)(["needFriend"])),
          data: { timeData: {}, ONE_DAY: u.b },
          methods: {
            onChange(e) {
              var s = e.detail;
              s &&
                ((s.hours = s.hours < 10 ? "0" + s.hours : s.hours),
                (s.minutes = s.minutes < 10 ? "0" + s.minutes : s.minutes),
                (s.seconds = s.seconds < 10 ? "0" + s.seconds : s.seconds)),
                this.setYZData({ timeData: s });
            },
            onCountDownFinish() {
              var e = Object(a.d)();
              wx.redirectTo({ url: "/" + e });
            },
          },
        });
      },
    }
  )
);
