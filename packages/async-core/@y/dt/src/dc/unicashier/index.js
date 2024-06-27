"use strict";
var r = require("~/r");
r(
  "e0kg",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      e0kg: function (e, r, a) {
        a.r(r);
        var t = a("9ZMt"),
          s = a("EqB2"),
          u = a("UaHX"),
          d = {
            mixins: [Object(s.a)({ optDesc: u.a })],
            props: { kdtId: Number },
            methods: {
              goBuy() {
                var e;
                (e =
                  "/packages/pay/unicashier/index?qrcode_id=" +
                  this.opt.qrcodeId),
                  t.default.navigate({ url: e });
              },
            },
            ud: !0,
          };
        r.default = t.default.component(d);
      },
    }
  )
);
