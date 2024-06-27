"use strict";
var r = require("~/r");
r(
  "ldZ4",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      kv38: function (t, i, a) {
        var e = a("8B9M"),
          o = Object(e.a)();
        i.a = Behavior({
          data: {
            popupBottom: 0,
            noSafeBottom: 0,
            authorizePopupCustomStyle: "",
            safeBottom: "iPhone-X" === o.deviceType,
          },
          attached() {
            o.isSwitchTab("", !0).then((t) => {
              t &&
                this.setData({
                  popupBottom: 49,
                  authorizePopupCustomStyle: "",
                  noSafeBottom: this.data.safeBottom ? 83 : 49,
                });
            });
          },
        });
      },
      ldZ4: function (t, i, a) {
        a.r(i);
        var e = a("rqVN"),
          o = a("9Bnu"),
          s = a("LzxJ"),
          h = a("kv38"),
          r = !1,
          c = getApp();
        Object(e.b)({
          behaviors: [h.a],
          properties: {
            shareTag: {
              type: String,
              obsever(t) {
                t && this.initShareActivity();
              },
            },
          },
          data: {
            init: !1,
            showPop: !1,
            popHeight: "",
            activityAlias: "",
            activityId: "",
          },
          attached() {
            Object(s.b)().then((t) => {
              t &&
                this.setData(
                  { activityAlias: t.activityAlias, activityId: t.activityId },
                  this.initShareActivity
                );
            });
          },
          methods: {
            initShareActivity() {
              var { shareTag: t } = this.data;
              t &&
                Object(o.a)().then((t) => {
                  t.mobile
                    ? this.joinActivity()
                    : this.setData({ init: !0, showPop: !0 });
                });
            },
            joinActivity() {
              var { shareTag: t, activityAlias: i, activityId: a } = this.data;
              r ||
                (Object(s.e)({ activityAlias: i, shareTag: t })
                  .then(() => {
                    (r = !0),
                      wx.showToast({
                        title: "已帮好友获得奖励，分享即得好礼！",
                        duration: 5e3,
                      });
                  })
                  .catch(() => this.onClosePop),
                c.logger &&
                  a &&
                  c.logger.log({
                    et: "custom",
                    ei: "visit_share_activity_showcase",
                    en: "被分享人访问微页面",
                    params: { activityId: a, shareTag: t },
                  })),
                this.onClosePop && this.onClosePop();
            },
            onClosePop() {
              this.setData({ showPop: !1 });
            },
          },
        });
      },
    }
  )
);
