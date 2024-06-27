"use strict";
var r = require("~/r");
r(
  "GMzK",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    GMzK: function (e, r, t) {
      t.r(r);
      var a = t("rqVN"),
        i = t("zMoS");
      Object(a.b)({
        properties: {
          benefit: { type: Object, value: {} },
          experienceLog: { type: Array, value: [] },
          needActivate: { type: Boolean, value: !1 },
          hasActivated: { type: Boolean, value: !1 },
          hasCard: { type: Boolean, value: !1 },
        },
        data: { rewardTip: "", disabled: !0, openType: "" },
        methods: {
          getRewardTips() {
            var e = Object(i.a)(
              this.properties.benefit,
              "extInfo.scrm_bn_biz_extends_info",
              null
            );
            if (e)
              try {
                var r = JSON.parse(e),
                  t = Object(i.a)(r, "[0].rewardValue", "");
                return t ? "+" + t : "";
              } catch (e) {
                return "";
              }
            return "";
          },
        },
        attached() {
          var {
              hasCard: e,
              needActivate: r,
              hasActivated: t,
            } = this.properties,
            a = (e && r && !t) || !e;
          this.setYZData({
            rewardTip: this.getRewardTips(),
            disabled: a,
            openType: a ? "" : "share",
          });
        },
      });
    },
  })
);
