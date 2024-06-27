"use strict";
var r = require("~/r");
r(
  "SLNe",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    SLNe: function (e, s, r) {
      r.r(s);
      var a = r("Fcif"),
        t = r("u8kV"),
        c = r("svh/");
      Object(t.b)({
        mapData: Object(a.a)(
          {},
          Object(c.h)({
            showHandselPop: (e) => e.showHandselPop,
            voucherAlias: (e) => e.voucherAlias,
          })
        ),
        methods: Object(a.a)({}, Object(c.e)(["JOIN"]), {
          fetchCode() {
            this.JOIN({
              eventType: 2,
              shareVoucherAlias: this.data.voucherAlias,
            });
          },
        }),
      });
    },
  })
);
