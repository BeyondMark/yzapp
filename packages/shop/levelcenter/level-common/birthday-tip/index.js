"use strict";
var r = require("~/r");
r(
  "cl3k",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      cl3k: function (e, t, i) {
        i.r(t);
        var a = i("rqVN"),
          r = i("O3Bn"),
          s = i("zMoS"),
          l = i("2wjL"),
          n = getApp();
        Object(a.b)({
          properties: { userLevel: Object, birthdayPosIndex: Number },
          data: {
            nickName: "",
            showTip: !1,
            kdtId: n.getKdtId(),
            useNewVer: !1,
          },
          methods: {
            toBenefitLink() {
              var e,
                { userLevel: t, birthdayPosIndex: i } = this.properties,
                a = null == t || null == (e = t.level) ? void 0 : e.levelAlias,
                r = l.a.add("/packages/levelcenter/benefit/index", {
                  kdt_id: this.data.kdtId,
                  alias: a,
                  benefit: i,
                  benefit_format: this.data.useNewVer ? "1" : "",
                });
              wx.navigateTo({ url: r });
            },
            checkBirthdayStatus() {
              var e,
                { userLevel: t } = this.properties,
                i = null == t || null == (e = t.level) ? void 0 : e.levelType;
              Object(r.a)({ levelType: i }).then((e) => {
                this.setYZData({
                  showTip: (null == e ? void 0 : e.inRange) || !1,
                });
              });
            },
            getBenefitFormatSwitch() {
              Object(r.e)().then((e) => {
                this.setYZData({
                  useNewVer: (null == e ? void 0 : e.value) || !1,
                });
              });
            },
          },
          attached() {
            n.getUserInfo((e) => {
              var t = Object(s.a)(e, "userInfo.nickName");
              this.setYZData({ nickName: t });
            }),
              this.checkBirthdayStatus(),
              this.getBenefitFormatSwitch();
          },
        });
      },
    }
  )
);
