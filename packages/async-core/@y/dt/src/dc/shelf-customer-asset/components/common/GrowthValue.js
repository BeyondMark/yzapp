"use strict";
var r = require("~/r");
r(
  "/rJi",
  Object.assign({}, require("~/v.js").modules, {
    "/rJi": function (e, t, r) {
      r.r(t);
      var o = {
          props: {
            strokeWidth: { type: String, default: "6" },
            fontSize: { type: Number, default: 12 },
            themeColor: String,
            haveValue: Boolean,
            growthValue: Number,
            progressMaxWidth: { type: String, default: "172px" },
            styleDirection: String,
            memberInfo: Object,
            showGap: Boolean,
          },
          data: () => ({}),
          computed: {
            growthNextText() {
              var { gapGrowthValue: e } = this,
                { vipLevel: t } = this.memberInfo || {};
              return e > 0
                ? "再获得 " +
                    e +
                    " 成长值" +
                    (e > 0 && t ? "成为 VIP" + (t + 1) : "升级")
                : "已是最高等级";
            },
            gapGrowthValue() {
              var { growthValue: e } = this,
                { nextGrowthValue: t } = this.memberInfo || {};
              return t - e;
            },
            growthPercentage() {
              var { freeConsumeNextProgress: e, nextGrowthValue: t } =
                  this.memberInfo || {},
                { growthValue: r } = this;
              return e > 0 ? e : (100 * r) / (t || r);
            },
          },
          ud: !0,
        },
        a = r("9ZMt");
      t.default = a.default.component(o);
    },
  })
);
