"use strict";
var r = require("~/r");
r(
  "YWOc",
  Object.assign({}, require("~/v.js").modules, {
    YWOc: function (e, t, r) {
      r.r(t);
      var s = {
          name: "promotion-content",
          props: {
            list: { type: Array, default: () => [] },
            innerStyle: { type: String, default: "" },
            showEstimatePriceTip: { type: Boolean, default: !1 },
            themeTag: Object,
          },
          methods: {
            isVip(e) {
              var {
                matchIdentityType: t,
                activityLeadInMembershipInfo: r = {},
              } = e || {};
              return 1 === t || (0 === t && r.needGuide);
            },
          },
          externalClasses: ["custom-class", "list-class"],
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(s);
    },
  })
);
