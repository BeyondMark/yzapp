"use strict";
var r = require("~/r");
r(
  "L+88",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "L+88": function (e, t, i) {
      i.r(t);
      var r = i("eijD"),
        a = i("Fcif"),
        s = i("u8kV"),
        o = i("svh/");
      Object(s.b)({
        data: { tradeRecords: [], topBarHeight: 0 },
        computed: Object(a.a)({}, Object(o.h)(["activityUser"])),
        watch: {
          activityUser(e) {
            this.startAnimation(e);
          },
        },
        methods: {
          startAnimation(e) {
            var t = this;
            return Object(r.a)(function* () {
              void 0 === e && (e = []);
              var { length: i } = e;
              if (i) {
                var r = (i, a, s) => {
                  var o = i === a - 1 ? 0 : i + 1,
                    n = e.map(
                      (e) => ((e.showEnter = !1), (e.showLeave = !1), e)
                    );
                  t.setData({ __isAnimation: !0, tradeRecords: n }, () => {
                    t.move(n, i, s, () => {
                      r(o, a);
                    });
                  });
                };
                r(0, i, !0);
              }
            })();
          },
          move(e, t, i, a) {
            var s = this;
            return Object(r.a)(function* () {
              var r = i ? 1e3 : 2e3;
              yield s.timeoutPromise(
                s.moveIn.bind(s, { tradeRecords: e, index: t }),
                r
              ),
                yield s.timeoutPromise(
                  s.moveOut.bind(s, { tradeRecords: e, index: t }),
                  2e3
                ),
                yield s.timeoutPromise(a, 300);
            })();
          },
          timeoutPromise: (e, t) =>
            new Promise((i) => {
              setTimeout(() => {
                e(), i();
              }, t);
            }),
          moveIn(e) {
            var { tradeRecords: t, index: i } = e,
              r = t[i];
            (r.showEnter = !0),
              (r.showLeave = !1),
              this.setData({
                __isAnimation: !0,
                ["tradeRecords[" + i + "]"]: r,
              });
          },
          moveOut(e) {
            var { tradeRecords: t, index: i } = e,
              r = t[i];
            (r.showEnter = !1),
              (r.showLeave = !0),
              this.setData({
                __isAnimation: !0,
                ["tradeRecords[" + i + "]"]: r,
              });
          },
        },
      });
    },
  })
);
