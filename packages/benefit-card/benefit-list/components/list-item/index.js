"use strict";
var r = require("~/r");
r(
  "ZPOg",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ZPOg: function (e, t, i) {
      i.r(t);
      var n = i("rqVN"),
        a = i("zMoS");
      Object(n.b)({
        properties: {
          benefit: { type: Object, value: {} },
          hasCard: { type: Boolean, value: !1 },
        },
        data: { benefitLink: "", isLink: !1 },
        methods: {
          getBenefitLink() {
            var { benefit: e } = this.properties,
              t = Object(a.a)(e, "benefitPluginInfo.payContentAlias", ""),
              i = {
                present: "/packages/ump/presents/index",
                paidContent: t
                  ? "/packages/paidcontent/rights/index?alias=" + t
                  : "",
              };
            if (e && ["present", "paidContent"].indexOf(e.key) > -1)
              return i[e.key];
          },
          getIsLink() {
            var { benefit: e, hasCard: t } = this.properties,
              i = Object(a.a)(e, "benefitPluginInfo.payContentAlias", ""),
              n = Object(a.a)(e, "benefitPluginInfo.presentRecordAlias", "");
            return "paidContent" === e.key
              ? !!i
              : "present" === e.key && t && !!n;
          },
          handleOnClick() {
            this.data.isLink && wx.navigateTo({ url: this.data.benefitLink });
          },
        },
        attached() {
          var e = this.getIsLink(),
            t = this.getBenefitLink();
          this.setYZData({ isLink: e, benefitLink: t });
        },
      });
    },
  })
);
