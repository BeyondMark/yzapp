"use strict";
var r = require("~/r");
r(
  "jUNf",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    jUNf: function (e, t, s) {
      s.r(t);
      var a = s("Fcif"),
        o = s("B9LC"),
        n = "day",
        r = "hour",
        i = "min",
        d = [
          { type: n, value: "", text: "天", width: "0" },
          { type: r, value: "", text: "时", width: "0" },
          { type: i, value: "", text: "分", width: "0" },
          { type: "sec", value: "", text: "秒", width: "0" },
        ],
        u = {
          name: "sale-countdown",
          props: { startSoldTime: Number },
          data: () => ({ descArray: [] }),
          mounted() {
            this.saleCountDown();
          },
          destroyed() {
            this.stopCountDown();
          },
          methods: {
            stopCountDown() {
              this.sendedCountDown && this.sendedCountDown.stop();
            },
            saleCountDown() {
              var e = new Date().getTime() / 1e3,
                t = this.startSoldTime,
                s = t > e ? t - e : 0;
              this.sendedCountDown = new o.a(1e3 * s, {
                onChange: (e, t) => {
                  var { day: s, hour: o, minute: u, second: c } = t,
                    l = d.map((e) => {
                      var t = "";
                      switch (e.type) {
                        case n:
                          t = s;
                          break;
                        case r:
                          t = o;
                          break;
                        case i:
                          t = u;
                          break;
                        default:
                          t = c;
                      }
                      return Object(a.a)({}, e, { value: t });
                    }),
                    h = [];
                  if (s > 0) h = l.slice(0);
                  else if (
                    (0 !== o && "0" !== o) ||
                    (0 !== u && "0" !== u) ||
                    (0 !== c && "0" !== c)
                  ) {
                    for (var w = [o, u, c], m = 0; m < 3; m++)
                      if (0 !== w[m] && "0" !== w[m]) {
                        h = l.slice(m + 1);
                        break;
                      }
                  } else this.$emit("hide-countdown");
                  this.descArray = h;
                },
              });
            },
          },
          ud: !0,
        },
        c = s("9ZMt");
      t.default = c.default.component(u);
    },
  })
);
