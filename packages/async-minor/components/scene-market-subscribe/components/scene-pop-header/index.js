"use strict";
var r = require("~/r");
r(
  "dSXo",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    dSXo: function (e, t, r) {
      r.r(t);
      var i = r("rqVN"),
        a = r("WNIS"),
        n = getApp();
      Object(i.b)({
        properties: {
          planType: Number,
          planEffectiveTime: String,
          userMatchBenefitLevel: String,
        },
        data: { nickName: "", PlanTypeEnum: a.i, isFromComplete: !1 },
        attached() {
          this.getNickName();
        },
        methods: {
          getNickName() {
            var e = n.getUserInfoSync() || {};
            this.setYZData({ nickName: e.nickname });
          },
        },
      });
    },
  })
);
