"use strict";
var r = require("~/r");
r(
  "NdVT",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      NdVT: function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("u8kV"),
          o = a("svh/"),
          c = a("A2ad"),
          l = a("dUha"),
          n = getApp();
        Object(i.b)({
          properties: { disabled: Boolean },
          data: { show: !0 },
          mapData: Object(s.a)(
            {},
            Object(o.h)([
              "activityInfo",
              "voucherAlias",
              "friendShow",
              "helpResult",
            ]),
            Object(o.f)(["statusInfo", "helpResultStatus", "coupon"])
          ),
          methods: Object(s.a)(
            {},
            Object(o.g)(["SET_HELP_RESULT", "SET_FERIEND_SHOW"]),
            {
              handleClickCoupon() {
                var e,
                  t,
                  a,
                  s =
                    null !=
                    (e =
                      null == (t = this.data.helpResult) ||
                      null == (a = t.winCoupon)
                        ? void 0
                        : a.fetchId)
                      ? e
                      : 0;
                Object(c.a)(s);
              },
              handleHelp() {
                n.yzlogInstance &&
                  n.yzlogInstance.log({
                    et: "click",
                    ei: "click_help",
                    en: "点击助力",
                  }),
                  Object(l.g)({
                    voucherAlias: this.data.voucherAlias,
                    alias: this.data.activityInfo.alias,
                  })
                    .then((e) => {
                      this.SET_HELP_RESULT(e);
                    })
                    .catch((e) => {
                      wx.showToast({
                        icon: "none",
                        title: e || "助力失败，稍后重试",
                      });
                    });
              },
              goHome() {
                wx.reLaunch({ url: "/packages/home/dashboard/index" });
              },
              closePop() {
                this.SET_FERIEND_SHOW(!1);
              },
              hendleBtnClick(e) {
                var t = e.currentTarget.dataset.button,
                  { type: a } = t;
                switch (a) {
                  case "goHome":
                    this.goHome();
                    break;
                  case "startNew":
                    this.startNew();
                }
              },
              handleSubButtonClick(e) {
                var t = e.currentTarget.dataset.button,
                  { type: a } = t;
                switch (a) {
                  case "GO_HOME":
                    this.goHome();
                }
              },
              startNew() {
                wx.navigateTo({
                  url:
                    "/packages/ump/split-coupon-friend/index?alias=" +
                    this.data.activityInfo.alias,
                });
              },
            }
          ),
        });
      },
    }
  )
);
