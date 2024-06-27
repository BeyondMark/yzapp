"use strict";
var r = require("~/r");
r(
  "qMYm",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    qMYm: function (e, t, a) {
      a.r(t);
      var s = a("u8kV"),
        i = a("hHpg"),
        d = getApp(),
        r = d.getHQKdtId() || d.getKdtId(),
        o = d.getKdtId();
      Object(s.c)({
        properties: {
          isYzEdu: { type: Boolean, value: !1 },
          appointments: { type: Array, value: [] },
          noViewNum: {
            type: Number,
            value: 0,
            observer(e) {
              this._setNoViewNum(e);
            },
          },
          isReadWorkset: {
            type: Boolean,
            value: !1,
            observer(e) {
              this._setIsReadWorkset(e);
            },
          },
          waitRewardCount: {
            type: Number,
            value: 0,
            observer(e) {
              this._setWaitRewardCount(e);
            },
          },
          canShowMomentsFlag: {
            type: Boolean,
            value: !1,
            observer(e) {
              this._setCanShowMomentsFlag(e);
            },
          },
          reviewToReadNum: {
            type: Number,
            value: 0,
            observer(e) {
              this._setReviewToReadNum(e);
            },
          },
          services: { type: Array, value: [] },
          mode: { type: Number, default: 2 },
          iconMode: { type: Number, default: 1 },
          momentsName: { type: String, value: "家校圈" },
        },
        data: {
          links: {
            "student-card":
              "https://h5.youzan.com/wscvis/edu/student/stu-list?kdt_id=" + r,
            moments:
              "https://h5.youzan.com/wscvis/edu/moments/feeds?kdt_id=" + r,
            "appointment-records":
              "https://h5.youzan.com/wscvis/edu/appointment/records?kdt_id=" +
              r,
            "study-records":
              "https://h5.youzan.com/wscvis/edu/study-records?kdt_id=" + r,
            schedule:
              "https://h5.youzan.com/wscvis/edu/course-schedule?kdt_id=" + r,
            certificate:
              "https://h5.youzan.com/wscvis/edu/certificate/cert-list?kdt_id=" +
              r,
            "family-account":
              "https://h5.youzan.com/wscvis/edu/family-account/detail?kdt_id=" +
              r,
            "recommend-gift":
              "https://h5.youzan.com/wscvis/ump/referral-invite?fromPage=user-center&kdt_id=" +
              r,
            introduction:
              "https://h5.youzan.com/wscvis/ump/introduction/old-student?kdt_id=" +
              r +
              "&from=usercenter_fixed_entry",
            exam:
              "https://h5.youzan.com/wscvis/supv/examination/list?kdt_id=" + r,
            "activity-entry":
              "https://h5.youzan.com/wscvis/ump/activity-entry?kdt_id=" + r,
            homework:
              "https://h5.youzan.com/wscvis/supv/homework/list?kdt_id=" + r,
            workset:
              "https://h5.youzan.com/wscvis/supv/workset/myWorkset?kdt_id=" + r,
            review: "https://h5.youzan.com/wscvis/supv/review/list?kdt_id=" + r,
            leave: "https://h5.youzan.com/wscvis/edu/leave/list?kdt_id=" + o,
          },
          badges: {
            appointment: { value: !1 },
            studentCard: { value: !1 },
            moments: { value: !1 },
            "appointment-records": { value: !1 },
            "study-records": { value: !1 },
            schedule: { value: !1 },
            owned: { value: !1 },
            certificate: { value: !1, type: "number", num: 0 },
            reward: { value: !1 },
            "family-account": { value: !1 },
            "recommend-gift": { value: !1 },
            introduction: { value: !0, type: "reward" },
            exam: { value: !1 },
            "activity-entry": { value: !0, type: "reward" },
            homework: { value: !1 },
            workset: { value: !1 },
            review: { value: !1, type: "number", num: 0 },
            leave: { value: !1 },
          },
        },
        methods: {
          handleWidgetClicked(e) {
            var t = e.detail;
            switch (t) {
              case "appointment":
                this.handleAppointmentClicked();
                break;
              case "owned":
                this.handleOwnedClicked();
                break;
              case "reward":
                this.handleRewardClicked();
                break;
              default:
                wx.navigateTo({
                  url:
                    "/packages/edu/webview/index?targetUrl=" +
                    encodeURIComponent(this.properties.links[t]),
                });
            }
          },
          handleRewardClicked() {
            d.logger &&
              d.logger.log({
                et: "click",
                ei: "weapp_uc_reward_click",
                en: "小程序个人中心奖励模块点击",
                pt: "uc",
                params: { kdt_id: d.getKdtId() },
              }),
              wx.navigateTo({
                url:
                  "/packages/edu/webview/index?targetUrl=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscvis/edu/reward/list/preview?kdt_id=" +
                      r
                  ),
              });
          },
          handleAppointmentClicked() {
            1 !== this.data.appointments.length ||
            this.data.appointments[0].validity
              ? wx.navigateTo({
                  url:
                    "/packages/edu/webview/index?targetUrl=" +
                    encodeURIComponent(
                      "https://h5.youzan.com/wscvis/edu/appointment/list?kdt_id=" +
                        r
                    ),
                })
              : Object(i.a)("你的课程尚未生效，暂时无法预约");
          },
          handleOwnedClicked() {
            wx.navigateTo({ url: "/packages/paidcontent/list/index" });
          },
          _setNoViewNum(e) {
            (this.data.badges.certificate.value = e > 0),
              (this.data.badges.certificate.num = e),
              this.setYZData({ badges: this.data.badges });
          },
          _setIsReadWorkset(e) {
            (this.data.badges.workset.value = e),
              this.setYZData({ badges: this.data.badges });
          },
          _setWaitRewardCount(e) {
            (this.data.badges.reward.value = e > 0),
              (this.data.badges.reward.num = e),
              this.setYZData({ badges: this.data.badges });
          },
          _setCanShowMomentsFlag(e) {
            (this.data.badges.moments.value = e),
              this.setYZData({ badges: this.data.badges });
          },
          _setReviewToReadNum(e) {
            (this.data.badges.review.value = e > 0),
              (this.data.badges.review.num = e),
              this.setYZData({ badges: this.data.badges });
          },
        },
        attached() {
          var e = this.properties.services.find((e) => "奖励" === e.title);
          e &&
            e.selected &&
            ((this._observer = wx.createIntersectionObserver(this, {
              thresholds: [1],
            })),
            this._observer.relativeToViewport().observe(".edu-service", (e) => {
              this._reported ||
                1 !== e.intersectionRatio ||
                (d.logger &&
                  d.logger.log({
                    et: "view",
                    ei: "weapp_uc_reward_display",
                    en: "小程序个人中心教育卡片奖励模块曝光",
                    pt: "uc",
                    params: { kdt_id: d.getKdtId() },
                  }),
                (this._reported = !0));
            }));
        },
        detached() {
          this._observer && this._observer.disconnect();
        },
      });
    },
  })
);
