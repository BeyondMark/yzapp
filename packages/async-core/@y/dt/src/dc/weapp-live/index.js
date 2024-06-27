"use strict";
var r = require("~/r");
r(
  "Wxrl",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Wxrl: function (e, t, a) {
        a.r(t);
        var r = a("Fcif"),
          s = a("9ZMt"),
          i = a("mztD"),
          u = a("EqB2"),
          o = a("tDDQ"),
          m = ["未开播", "进入直播"],
          c = ["", "start"],
          l = {
            name: "DcWeappLive",
            mixins: [Object(u.a)({ optDesc: o.a })],
            computed: {
              rooms() {
                var e = Date.now();
                return this.opt.rooms.map((t) => {
                  var {
                      startTime: a,
                      endTime: s,
                      shareImg: u,
                      coverImg: o,
                    } = t,
                    l = e < new Date(a.replace(/-/g, "/")) ? 0 : 1;
                  return Object(r.a)({}, t, {
                    status: l,
                    shareImg: Object(i.a)(u || o, "!400x400.jpg"),
                    interval: a.slice(5) + " ~ " + s.slice(5),
                    statusClass: [
                      "room-status",
                      c[l] && "room-status--" + c[l],
                    ],
                    statusText: m[l],
                  });
                });
              },
            },
            methods: {
              handleNavigate(e) {
                s.default.navigate({
                  url:
                    "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=" +
                    e,
                });
              },
            },
            ud: !0,
          };
        t.default = s.default.component(l);
      },
    }
  )
);
