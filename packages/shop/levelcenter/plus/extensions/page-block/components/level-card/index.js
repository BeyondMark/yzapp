"use strict";
var r = require("~/r");
r(
  "NThF",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      NThF: function (e, t, r) {
        r.r(t);
        var i = r("rqVN"),
          a = r("/fWJ"),
          l = r("9zTU"),
          s = r("zMoS"),
          n = r("v6dD");
        Object(i.b)({
          properties: {
            height: Number,
            card: Object,
            disabled: Boolean,
            redirect: String,
            userLevel: { type: Object, value: {} },
            benefitsList: {
              type: Array,
              observer(e, t) {
                if (e.length !== t.length) {
                  var r = this.getReceiveBenefit();
                  this.setYZData({ receiveBenefit: r });
                }
              },
            },
            bestPirce: String,
            bestType: String,
            hasAuthorized: { type: Boolean },
            memberCenterLogoUrl: String,
          },
          data: {
            levelStatus: "",
            bgStyle: "",
            maskStyle: "",
            receiveBenefit: "",
            vaildTime: "",
          },
          methods: {
            getNeedMoreValue() {
              var { nowLevel: e, card: t } = this.properties;
              return e.levelValue < t.levelValue;
            },
            getLevelStatus() {
              var { userLevel: e, card: t } = this.properties,
                r = Object(s.a)(e, "level.levelAlias", "") === t.alias,
                i = Object(s.a)(e, "isExperienceLevel", !1);
              return Object(s.a)(e, "isExpired", !1) && r
                ? "expired"
                : i && r
                ? "trial"
                : r
                ? "member"
                : "none";
            },
            getLevelStyle() {
              var { height: e } = this.properties,
                t =
                  "height: " +
                  e +
                  "px; background-size: cover; background-position: center;",
                { card: r } = this.properties,
                i = Object(a.c)({
                  colorCode: r.color,
                  cover: r.image,
                  levelType: l.g.PAY,
                });
              return {
                bgStyle: t + "background:" + i.backgroundStyle,
                maskStyle: "background: " + i.maskBgStyle,
              };
            },
            getReceiveBenefit() {
              var { benefitsList: e = [] } = this.properties,
                t = e.length;
              return {
                trial: "一个用户仅拥有一次付费会员体验资格",
                member: "",
                expired: t > 0 ? "开通立享 " + t + " 项特权" : "",
                none: t > 0 ? "开通立享 " + t + " 项特权" : "",
              };
            },
            getVaildTime() {
              var { userLevel: e } = this.properties,
                t = Object(s.a)(e, "termEndAt", ""),
                r = Object(n.b)(t, "YYYY-MM-DD");
              return {
                trial: "将于" + r + "到期",
                member: "有效期至" + r,
                expired: "已过期",
                none: "",
              };
            },
            updateLevelData() {
              var e = this.getLevelStatus(),
                t = this.getLevelStyle(),
                { bgStyle: r } = t,
                { maskStyle: i } = t,
                a = this.getReceiveBenefit(),
                l = this.getVaildTime();
              this.setYZData({
                levelStatus: e,
                bgStyle: r,
                maskStyle: i,
                receiveBenefit: a,
                vaildTime: l,
              });
            },
          },
          attached() {
            this.updateLevelData();
          },
        });
      },
    }
  )
);
