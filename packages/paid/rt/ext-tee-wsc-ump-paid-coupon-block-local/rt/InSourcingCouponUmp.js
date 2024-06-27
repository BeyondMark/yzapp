"use strict";
var r = require("~/r");
r(
  "2Usi",
  Object.assign({}, require("~/v.js").modules, {
    "2Usi": function (e, t, i) {
      i.r(t);
      var r = i("9ZMt"),
        p = i("YeA1"),
        c = {
          props: {
            weappImg: { type: String },
            webImg: { type: String },
            activityUrl: { type: String, default: "" },
          },
          data: () => ({ isWxReceipt: !1 }),
          computed: { img: () => (void 0).weappImg },
          created() {
            Object(p.b)(this, ["isWxReceipt"]);
          },
          methods: { clickInSourcingCoupon() {} },
          ud: !0,
        };
      t.default = r.default.component(c);
    },
  })
);
