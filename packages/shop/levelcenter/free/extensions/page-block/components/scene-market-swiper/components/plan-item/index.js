"use strict";
var r = require("~/r");
r(
  "Gz9j",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Gz9j: function (e, t, a) {
      a.r(t);
      var n = a("WNIS"),
        c = a("rqVN"),
        i = getApp();
      Object(c.b)({
        properties: { planDetail: { type: Object, value: {} } },
        data: { planIcon: "", nickName: "", PlanTypeEnum: n.i },
        attached() {
          this.getNickName(), this.getPlanIcon();
        },
        methods: {
          getNickName() {
            var e = i.getUserInfoSync() || {};
            this.setYZData({ nickName: e.nickname });
          },
          getPlanIcon() {
            var e = this._computedIcon();
            this.setYZData({ planIcon: e });
          },
          onViewPlan() {
            this.triggerEvent("open", this.properties.planDetail.planId);
          },
          _computedIcon() {
            switch (this.properties.planDetail.planType) {
              case n.i.Birthday:
                return "https://b.yzcdn.cn/public_files/c6a96d4fcc0c3633fe4c946aa77880a2.png";
              case n.i.Festival:
                return "https://b.yzcdn.cn/public_files/ae1186b9558570e9ea6aceb9960fe020.png";
              case n.i.MemberDay:
                return "https://b.yzcdn.cn/public_files/26829beabebd5775fdae64a0caff5e6f.png";
              default:
                return "";
            }
          },
        },
      });
    },
  })
);
