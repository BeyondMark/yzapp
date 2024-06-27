"use strict";
var r = require("~/r");
r(
  "fuSa",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    fuSa: function (e, i, s) {
      s.r(i);
      var n = s("rqVN"),
        t = s("bsB/"),
        c = s("eCH0"),
        a = getApp();
      Object(n.b)({
        properties: {
          themeColor: { type: String },
          canReminderOpen: { type: Boolean },
        },
        data: { showReminder: !1, isReminderOpen: !1, showSubscirbeFail: !1 },
        observers: {
          canReminderOpen(e) {
            e && !this.data.isReminderOpen && this.switchCheckinRemind(!0);
          },
        },
        ready() {
          this.getCheckinRemindTabShow();
        },
        methods: {
          getCheckinRemindTabShow() {
            a.request({
              path: "/wscump/checkin/checkin-remind-tab-show.json",
              query: { reference: 3 },
            })
              .then((e) => {
                this.setYZData({
                  showReminder: e.isShopCheckinRemindOpen,
                  isReminderOpen: e.isUserCheckinRemindOpen,
                });
              })
              .catch((e) => {
                e && wx.showToast({ title: e, icon: "none" });
              });
          },
          onChangeReminderOpen(e) {
            e.detail ? this.openReminder() : this.closeReminder();
          },
          openReminder() {
            var e = this;
            Object(t.e)({
              scene: c.a.SIGN,
              pageId: 3,
              needAlwaysToast: !0,
              successCallBack: () => {
                e.switchCheckinRemind(!0);
              },
              failCallBack: () => {
                e.setYZData({ showSubscirbeFail: !0 });
              },
              showCallBack: () => {
                e.triggerEvent("toggle-subscribe-mask", !0);
              },
              closeCallBack: () => {
                e.triggerEvent("toggle-subscribe-mask", !1);
              },
              logParam: {
                subscribe_page: "签到页",
                subscribe_type: "签到提醒",
              },
            });
          },
          closeReminder() {
            var e = this;
            wx.showModal({
              title: "关闭提醒",
              content:
                "关闭提醒，可能会漏签而无法获得连签奖励。你可以随时开启提醒",
              confirmText: "保持开启",
              cancelText: "关闭",
              success(i) {
                i.cancel && e.switchCheckinRemind(!1);
              },
            });
          },
          closeSubscribeFailPopup() {
            this.setYZData({ showSubscirbeFail: !1 });
          },
          switchCheckinRemind(e) {
            var i = (e ? "开启" : "关闭") + "签到提醒失败，请重试";
            a.request({
              path: "wscump/checkin/open-checkin-remind.json",
              query: { isOpen: e, reference: 3 },
            })
              .then((s) => {
                s
                  ? (this.setYZData({ isReminderOpen: e }),
                    e && wx.showToast({ title: "已开启提醒", icon: "none" }))
                  : wx.showToast({ title: i, icon: "none" });
              })
              .catch(() => {
                wx.showToast({ title: i, icon: "none" });
              });
          },
        },
      });
    },
  })
);
