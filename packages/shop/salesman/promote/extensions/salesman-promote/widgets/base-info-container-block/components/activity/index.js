"use strict";
var r = require("~/r");
r(
  "LH7a",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      LH7a: function (e, t, r) {
        r.r(t);
        var i = r("Bt9F");
        Object(i.a)({
          properties: {
            tag: String,
            activityPrice: Object,
            countdown: Object,
            activityNotStart: Boolean,
            commissionData: { type: Object },
          },
          methods: {
            handleCountEnded() {
              this.triggerEvent("count-end");
            },
          },
        });
      },
    }
  )
);
