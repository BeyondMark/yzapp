"use strict";
var r = require("~/r");
r(
  "E+ob",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "E+ob": function (e, t, r) {
        r.r(t);
        var s = r("rqVN"),
          a = r("dWkE"),
          i = r("zMoS"),
          l = r("v6dD"),
          n = r("9zTU"),
          u = getApp();
        Object(s.b)({
          properties: {
            userLevel: {
              type: Object,
              value: {},
              observer(e) {
                e.customerSource && this.setNowDesc(e);
              },
            },
            linkText: { type: String, value: "" },
            userLevelType: { type: Number, value: "" },
            link: { type: String, value: "" },
            linkQuery: { type: Object },
            descLink: { type: String, value: "" },
            isThirdPartyCenter: { type: Boolean, default: !1 },
            bizDataMap: { type: Object, value: {} },
          },
          data: {
            avatar: "",
            desc: "",
            levelName: "",
            userInfo: {
              avatarUrl:
                "https://img01.yzcdn.cn/public_files/aa912255b9328b35a53d548b0979086d.png",
            },
            hasAuth: !1,
          },
          methods: {
            linkTo() {
              var { link: e, linkQuery: t } = this.properties;
              Object(a.a)(e, { query: t });
            },
            setNowDesc(e) {
              this.setYZData(this.getNowDesc(e));
            },
            getNowDesc(e) {
              var { isThirdPartyCenter: t } = this.properties;
              if (t) return { desc: "" };
              var r = Object(i.a)(e, "level.levelType", 0),
                s = Object(i.a)(e, "level.levelValue", -1),
                a = r === n.g.FREE ? s : -1,
                u = r === n.g.PAY ? s : -1;
              return Object(i.a)(e, "level.levelAlias", null)
                ? 0 === e.termEndAt
                  ? {
                      desc: "永久有效",
                      currentFreeLevel: a,
                      currentPlusLevel: u,
                    }
                  : {
                      desc:
                        "当前等级有效期 " +
                        Object(l.b)(e.termEndAt, "YYYY-MM-DD"),
                      currentFreeLevel: a,
                      currentPlusLevel: u,
                    }
                : {
                    desc:
                      this.properties.userLevelType === n.g.FREE
                        ? "未入会"
                        : "当前未开启会员",
                    currentFreeLevel: a,
                    currentPlusLevel: u,
                  };
            },
            onGetUserInfo(e) {
              var t = Object(i.a)(e, "detail.userInfo", {});
              if (e && e.detail && e.detail.userInfo.nickName) {
                var r = getApp().getKdtId();
                this.getUserInfoOutOfSensitive(t).then((s) => {
                  this.setYZData({
                    userInfo: s,
                    kdtId: r,
                    hasAuth: e.detail.userInfo || e.detail.isNotValid,
                  }),
                    this.triggerEvent("hasAuth", t);
                });
              }
            },
            getUserInfoOutOfSensitive: (e) =>
              new Promise((t) => {
                wx.getStorage({
                  key: "app:token",
                  success: (r) => {
                    var s = r.data,
                      a = Object(i.a)(s, "mobile", ""),
                      l = Object(i.a)(e, "nickName", "");
                    l === a &&
                      11 === l.length &&
                      (e.nickName = l.substr(0, 3) + "****" + l.substr(7, 10)),
                      t(e);
                  },
                });
              }),
          },
          attached() {
            u.getUserInfo((e) => {
              this.getUserInfoOutOfSensitive(e.userInfo).then((e) => {
                this.setYZData({ userInfo: e, hasAuth: e || e.nickName }),
                  this.triggerEvent("hasAuth", e);
              });
            });
          },
        });
      },
    }
  )
);
