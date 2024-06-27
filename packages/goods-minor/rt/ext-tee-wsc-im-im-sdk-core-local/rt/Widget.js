"use strict";
var r = require("~/r");
r(
  "UvQu",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      UvQu: function (e, t, r) {
        r.r(t);
        var s = r("b+JF"),
          u = r("YeA1"),
          o = "wss://im-mercury-ws.youzan.com/dkf",
          a = {
            created() {
              var e = this;
              Object(u.e)(this, {
                getImSocketIns: function (t) {
                  return (
                    void 0 === t &&
                      (t = {
                        url: o,
                        maxRetryAttempts: 3,
                        timeout: 5e3,
                        proto: [],
                        mapRequestId: (e) => e.reqId,
                        mapResult: (e) => 0 === e.status,
                        socketProvider: s.b.WEAPP,
                      }),
                    (e.ws = new s.a(t)),
                    { ws: e.ws }
                  );
                },
              });
            },
            ud: !0,
          },
          i = r("9ZMt");
        t.default = i.default.component(a);
      },
    }
  )
);
