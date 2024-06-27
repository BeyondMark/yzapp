"use strict";
var r = require("~/r");
r(
  "tLdH",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    tLdH: function (e, t, r) {
      r.r(t);
      var i = r("eijD"),
        s = r("7/pW"),
        a = r("VmHG");
      Object(s.a)({
        data: { helpcutRecords: [], topBarHeight: 0 },
        attached() {
          Object(a.d)(this, ["bargainUser"]);
        },
        ready() {
          this.startAnimation(this.data.bargainUser);
        },
        methods: {
          startAnimation(e) {
            var t = this;
            return Object(i.a)(function* () {
              void 0 === e && (e = []);
              var r = e.length;
              if (r) {
                var i = (r, s, a) => {
                  var o = r === s - 1 ? 0 : r + 1,
                    d = e.map(
                      (e) => ((e.showEnter = !1), (e.showLeave = !1), e)
                    );
                  t.setYZData({ helpcutRecords: d }),
                    t.move(d, r, a, () => {
                      i(o, s);
                    });
                };
                i(0, r, !0);
              }
            })();
          },
          move(e, t, r, s) {
            var a = this;
            return Object(i.a)(function* () {
              var i = r ? 1e3 : 2e3;
              yield a.timeoutPromise(
                a.moveIn.bind(a, { helpcutRecords: e, index: t }),
                i
              ),
                yield a.timeoutPromise(
                  a.moveOut.bind(a, { helpcutRecords: e, index: t }),
                  2e3
                ),
                yield a.timeoutPromise(s, 300);
            })();
          },
          timeoutPromise: (e, t) =>
            new Promise((r) => {
              setTimeout(() => {
                e(), r();
              }, t);
            }),
          moveIn(e) {
            var { helpcutRecords: t, index: r } = e,
              i = t[r];
            (i.showEnter = !0),
              (i.showLeave = !1),
              this.setYZData({ ["helpcutRecords[" + r + "]"]: i });
          },
          moveOut(e) {
            var { helpcutRecords: t, index: r } = e,
              i = t[r];
            (i.showEnter = !1),
              (i.showLeave = !0),
              this.setYZData({ ["helpcutRecords[" + r + "]"]: i });
          },
        },
      });
    },
  })
);
