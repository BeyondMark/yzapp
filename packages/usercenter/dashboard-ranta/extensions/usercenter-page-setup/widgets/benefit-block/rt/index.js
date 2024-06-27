"use strict";
var r = require("~/r");
r(
  "kHrX",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    kHrX: function (e, r, t) {
      t.r(r);
      var a = t("7/pW"),
        i = t("RY8z"),
        s = getApp();
      Object(a.a)({
        properties: {
          benefitReminds: {
            type: Array,
            value: [],
            observer: "changeBenefitReminds",
          },
        },
        data: { memberVoucher: { text: "", id: "" } },
        attached() {
          s.logger &&
            s.logger.log({
              et: "view",
              ei: "membcp_ucads",
              en: "会员专享券个人中心引导曝光",
            });
        },
        methods: {
          goto() {
            s.logger &&
              s.logger.log({
                et: "click",
                ei: "membcp_ucads_click",
                en: "会员专享券个人中心引导点击",
              }),
              s.request({
                method: "post",
                path: "/wscuser/level/api/cleanPlanRemind.json",
                data: { planId: this.data.memberVoucher.id },
              }),
              i.a.navigate({ url: "/packages/levelcenter/free/index" });
          },
          changeBenefitReminds(e) {
            if (null != e && e.length) {
              var r = e[0];
              this.setYZData({ memberVoucher: r });
            }
          },
        },
      });
    },
  })
);
