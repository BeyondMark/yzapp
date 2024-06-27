"use strict";
var r = require("~/r");
r(
  "RbGa",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      RbGa: function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          c = a("u8kV"),
          n = a("svh/"),
          r = a("UT5u"),
          o = a("B9LC"),
          s = getApp();
        Object(c.b)({
          options: { multipleSlots: !0 },
          data: {
            failIcon:
              "https://img01.yzcdn.cn/public_files/2018/04/03/023c9dda27509f01cb20d3af89a41f25.png",
            countDown: "",
          },
          mapData: Object(i.a)(
            {},
            Object(n.h)(["activity", "currentUserMoney", "queryOptions"]),
            Object(n.f)(["avatarList", "remainNum", "activityCardInfo"])
          ),
          computed: Object(i.a)(
            {},
            Object(n.h)(["activity"]),
            Object(n.f)(["activityCardInfo"])
          ),
          watch: {
            activity(e) {
              var { remainTime: t, hordeId: a, isOpened: i } = e;
              a && !i && t > 0 && this.initCountDown(t);
            },
          },
          methods: Object(i.a)(
            {},
            Object(n.e)(["FETCH_PACKAGE"]),
            Object(n.g)(["SET_SHARE_VISIBLE", "SET_NICK_NAME"]),
            {
              handleBtnClick(e) {
                var { type: t } = e.target.dataset.item,
                  a = {
                    FETCH_NEW: "fetchNewPackage",
                    FETCH_OLD: "joinOldPackage",
                    USE: "useCoupon",
                  }[t];
                a && this[a](), this.logger(e.target.dataset.item);
              },
              logger(e) {
                var { type: t = "", text: a = "" } = e,
                  { activityId: c } = this.data.activity;
                s.logger &&
                  s.logger.log(
                    Object(i.a)(
                      {
                        et: "click",
                        en: "点击" + a + "按钮",
                        params: { act_id: c, act_type: "1006" },
                      },
                      {
                        FETCH_NEW: { ei: "click_carveup", en: "参与点击" },
                        FETCH_OLD: { ei: "click_help", en: "立即瓜分点击" },
                        SHARE: { ei: "click_invite", en: "邀请好友点击" },
                      }[t]
                    )
                  );
              },
              updateUser(e) {
                var { userInfo: t = {} } = e;
                this.SET_NICK_NAME(t.nickName);
              },
              fetchNewPackage() {
                this.FETCH_PACKAGE(1);
              },
              joinOldPackage() {
                this.FETCH_PACKAGE(0);
              },
              useCoupon() {
                var { activity: e = {}, queryOptions: t = {} } = this.data;
                Object(r.e)(e, t);
              },
              initCountDown(e) {
                new o.a(e, {
                  onChange: (e, t) => {
                    var { day: a, hour: i, minute: c, second: n } = t,
                      r = +a ? a + "天 " : "",
                      o = +i > 10 ? Number(i) : "0" + Number(i);
                    this.setYZData({
                      countDown: "" + r + o + ":" + c + ":" + n,
                    });
                  },
                  onEnd: () => {
                    setTimeout(() => {
                      wx.startPullDownRefresh();
                    }, 1e3);
                  },
                });
              },
            }
          ),
        });
      },
    }
  )
);
