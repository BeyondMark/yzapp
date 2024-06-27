"use strict";
var r = require("~/r");
r(
  "fS7Q",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      fS7Q: function (e, r, t) {
        t.r(r);
        var d = t("YeA1"),
          s = t("bdYe"),
          h = t.n(s),
          u = t("5ENr"),
          l = {
            [u.c.Growth]: "MemberCenter",
            [u.c.Consume]: "MemberCenter",
            [u.c.Prepaid]: "RechargeList",
          },
          o = {
            props: {
              thresholdType: { type: Number, value: null },
              thresholdValue: { type: Number, value: null },
              kdtId: Number,
            },
            data: () => ({ ThresholdType: u.c }),
            computed: {
              formattedThresholdValue() {
                return this.thresholdType === u.c.Consume ||
                  this.thresholdType === u.c.Prepaid
                  ? h()(this.thresholdValue, 100)
                  : this.thresholdValue;
              },
            },
            methods: {
              handleAction() {
                var e;
                Object(d.a)().dmc.navigate(
                  null != (e = l[this.thresholdType]) ? e : l[u.c.Growth],
                  { kdt_id: this.kdtId, fromScene: "Home" }
                );
              },
            },
            ud: !0,
          },
          a = t("9ZMt");
        r.default = a.default.component(o);
      },
    }
  )
);
