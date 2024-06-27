"use strict";
var r = require("~/r");
r(
  "rOyZ",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      rOyZ: function (e, t, s) {
        s.r(t);
        var r = s("VmHG"),
          i = s("7/pW"),
          o = s("QLod"),
          a = s("kHfR"),
          d = Object(o.e)() || 0;
        Object(i.a)({
          behaviors: [a.b],
          attached() {
            Object(r.d)(this, ["showBuyRecordFloatStyle", "tradeRecordsV2"]),
              Object(r.b)(this, ["getTradeRecordsV2"]);
          },
          data: { tradeRecords: [], topBarHeight: 0, topOffset: 34 },
          observers: {
            tradeRecordsV2(e) {
              this.startAnimation(e);
            },
          },
          ready() {
            this.getTradeRecordsV2 && this.getTradeRecordsV2(),
              this.setData({ topBarHeight: d + this.data.topOffset });
          },
          detached() {
            clearTimeout(this.tid);
          },
          methods: {
            startAnimation(e) {
              void 0 === e && (e = []);
              var { length: t } = e;
              if (t) {
                var s = (t, r, i) => {
                  var o = t === r - 1 ? 0 : t + 1,
                    a = e.map(
                      (e) => ((e.showEnter = !1), (e.showLeave = !1), e)
                    );
                  this.setData({ __isAnimation: !0, tradeRecords: a }, () => {
                    this.move(a, t, i, () => {
                      s(o, r);
                    });
                  });
                };
                s(0, t, !0);
              }
            },
            move(e, t, s, r) {
              var i = s ? 1e3 : 2e3;
              this.timeoutPromise(
                this.moveIn.bind(this, { tradeRecords: e, index: t }),
                i
              )
                .then(() =>
                  this.timeoutPromise(
                    this.moveOut.bind(this, { tradeRecords: e, index: t }),
                    2e3
                  )
                )
                .then(() => {
                  this.timeoutPromise(r, 300);
                });
            },
            timeoutPromise(e, t) {
              return new Promise((s) => {
                this.tid = setTimeout(() => {
                  e(), s();
                }, t);
              });
            },
            moveIn(e) {
              var { tradeRecords: t, index: s } = e,
                r = t[s];
              (r.showEnter = !0),
                (r.showLeave = !1),
                this.setData({
                  __isAnimation: !0,
                  ["tradeRecords[" + s + "]"]: r,
                });
            },
            moveOut(e) {
              var { tradeRecords: t, index: s } = e,
                r = t[s];
              (r.showEnter = !1),
                (r.showLeave = !0),
                this.setData({
                  __isAnimation: !0,
                  ["tradeRecords[" + s + "]"]: r,
                });
            },
          },
        });
      },
    }
  )
);
