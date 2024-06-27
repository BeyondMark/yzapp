"use strict";
var r = require("~/r");
r(
  "UlQR",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    UlQR: function (e, t, i) {
      i.r(t);
      var s = i("eijD"),
        a = i("Fcif"),
        r = i("u8kV"),
        o = i("svh/");
      Object(r.b)({
        data: { carouseList: [], topBarHeight: 0 },
        mapData: Object(a.a)({}, Object(o.h)(["sliderList"])),
        ready() {
          var { sliderList: e } = this.data;
          this.startAnimation(e);
        },
        methods: {
          startAnimation(e) {
            var t = this;
            return Object(s.a)(function* () {
              void 0 === e && (e = []);
              var { length: i } = e;
              if (i < 2) t.setYZData({ carouseList: e });
              else {
                var s = (i, a, r) => {
                  var o = i === a - 1 ? 0 : i + 1,
                    n = e.map(
                      (e) => ((e.showEnter = !1), (e.showLeave = !1), e)
                    );
                  t.setData({ __isAnimation: !0, carouseList: n }, () => {
                    t.move(n, i, r, () => {
                      s(o, a);
                    });
                  });
                };
                s(0, i, !0);
              }
            })();
          },
          move(e, t, i, a) {
            var r = this;
            return Object(s.a)(function* () {
              var s = i ? 1e3 : 2e3;
              yield r.timeoutPromise(
                r.moveIn.bind(r, { carouseList: e, index: t }),
                s
              ),
                yield r.timeoutPromise(
                  r.moveOut.bind(r, { carouseList: e, index: t }),
                  2e3
                ),
                yield r.timeoutPromise(a, 300);
            })();
          },
          timeoutPromise: (e, t) =>
            new Promise((i) => {
              setTimeout(() => {
                e(), i();
              }, t);
            }),
          moveIn(e) {
            var { carouseList: t, index: i } = e,
              s = t[i];
            (s.showEnter = !0),
              (s.showLeave = !1),
              this.setData({
                __isAnimation: !0,
                ["carouseList[" + i + "]"]: s,
              });
          },
          moveOut(e) {
            var { carouseList: t, index: i } = e,
              s = t[i];
            (s.showEnter = !1),
              (s.showLeave = !0),
              this.setData({
                __isAnimation: !0,
                ["carouseList[" + i + "]"]: s,
              });
          },
        },
      });
    },
  })
);
