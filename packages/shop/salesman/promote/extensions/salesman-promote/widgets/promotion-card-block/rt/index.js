"use strict";
var r = require("~/r");
r(
  "7Cxt",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "7Cxt": function (t, e, i) {
        i.r(e);
        var r = i("7/pW"),
          o = i("VmHG"),
          s = i("gcCW"),
          a = i("kHfR");
        Object(r.a)({
          name: "PromotionCard",
          state: ["accountInfo"],
          behaviors: [a.a],
          properties: {
            alias: String,
            unit: String,
            condition: String,
            title: String,
            timeLimit: String,
            discountInfo: String,
            availableNum: { type: Number, value: 0 },
          },
          attached() {
            Object(o.b)(this, ["goCouponFetch", "setTrackLooger"]);
          },
          methods: {
            handleGetCoupon() {
              this.setTrackLooger(s.b.issueCoupon),
                this.goCouponFetch(this.properties.alias);
            },
          },
        });
      },
    }
  )
);
