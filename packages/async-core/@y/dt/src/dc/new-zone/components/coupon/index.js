"use strict";
var r = require("~/r");
r(
  "aNmy",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      aNmy: function (e, r, t) {
        t.r(r);
        var s = t("KKh1"),
          u = t("R7Zb"),
          a = {
            mixins: [Object(u.a)({ optDesc: s.a })],
            props: {
              kdtId: Number,
              coupons: { type: Array, default: () => [] },
            },
            methods: {
              handleClickCoupon(e) {
                this.$emit("click", e);
              },
            },
            ud: !0,
          },
          i = t("9ZMt");
        r.default = i.default.component(a);
      },
    }
  )
);
