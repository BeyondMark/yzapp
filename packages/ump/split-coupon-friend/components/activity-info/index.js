"use strict";
var r = require("~/r");
r(
  "EkWg",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      EkWg: function (t, e, a) {
        a.r(e);
        var i = a("eijD"),
          o = a("Fcif"),
          n = a("u8kV"),
          s = a("svh/"),
          c = a("A2ad"),
          r = a("dUha"),
          u = getApp();
        Object(n.b)({
          mapData: Object(o.a)(
            {},
            Object(s.h)([
              "activityInfo",
              "groupEndTime",
              "groupInfo",
              "voucherAlias",
              "hasResult",
            ]),
            Object(s.f)([
              "activityStatusType",
              "isFinishedBeforeJoin",
              "shareCopyText",
              "helpedNum",
              "activityStatus",
              "couponInfo",
              "helpGroupCouponInfo",
              "startDistanceTime",
              "helpDistanceTime",
            ])
          ),
          methods: Object(o.a)(
            {},
            Object(s.g)([
              "SET_GROUP_END_TIME",
              "SET_VOUCHER_ALIAS",
              "SET_SHEET_SHOW",
            ]),
            {
              goHome() {
                wx.reLaunch({ url: "/packages/home/dashboard/index" });
              },
              handleClickBtn(t) {
                var e = t.currentTarget.dataset.button,
                  { type: a } = e;
                switch (a) {
                  case "GO_HOME":
                    this.goHome();
                    break;
                  case "INVITE":
                    this.invite();
                    break;
                  case "USE_COUPON":
                    this.useCoupon();
                }
              },
              useCoupon() {
                var t,
                  e,
                  a,
                  i =
                    null !=
                    (t =
                      null == (e = this.data.groupInfo.groupVoucherDTO) ||
                      null == (a = e.userCouponDTO)
                        ? void 0
                        : a.fetchId)
                      ? t
                      : 0;
                Object(c.a)(i);
              },
              startNew() {
                wx.navigateTo({
                  url:
                    "/packages/ump/split-coupon-friend/index?alias=" +
                    this.data.activityInfo.alias,
                });
              },
              join() {
                var t = this;
                return Object(r.h)({ alias: this.data.activityInfo.alias })
                  .then(
                    (function () {
                      var e = Object(i.a)(function* (e) {
                        void 0 === e && (e = {}),
                          t.data.voucherAlias &&
                          t.data.voucherAlias !== e.voucherAlias
                            ? t.startNew()
                            : (t.SET_GROUP_END_TIME(e.groupEndTime),
                              t.SET_VOUCHER_ALIAS(e.voucherAlias),
                              t.invite());
                      });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                  .catch(function (e) {
                    void 0 === e && (e = {}),
                      100003029 !== e.code
                        ? 1000030404 !== e.code
                          ? wx.showToast({
                              title: e.msg || "发起失败",
                              icon: "none",
                            })
                          : t.startNew()
                        : wx.showToast({
                            title: "已经超过\n发起次数限制",
                            icon: "none",
                          });
                  });
              },
              handleClickAvatar() {
                var t,
                  e,
                  a =
                    null !=
                    (t =
                      null == (e = this.data.activityStatus.button)
                        ? void 0
                        : e.type)
                      ? t
                      : "";
                "INVITE" === a && this.invite(), "JOIN" === a && this.join();
              },
              invite() {
                u.yzlogInstance &&
                  u.yzlogInstance.log({
                    et: "click",
                    ei: "click_sharecoupon",
                    en: "点击邀请好友",
                  }),
                  this.SET_SHEET_SHOW(!0);
              },
            }
          ),
        });
      },
    }
  )
);
