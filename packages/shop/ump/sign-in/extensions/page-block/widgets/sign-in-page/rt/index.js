"use strict";
var r = require("~/r");
r(
  "muHR",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "53ek": function (e, t, i) {
        var a = (e, t, i) => {
          return ((s = e), Object.keys(s).map((e) => [e, s[e]]))
            .map((e) => {
              var [t, s] = e;
              return [t, "object" == typeof s ? a(s, [], i) : s(i)];
            })
            .concat(t.map((e) => [e, i[e]]))
            .reduce((e, t) => {
              var [i, a] = t;
              return (e[i] = a), e;
            }, {});
          var s;
        };
        t.a = a;
      },
      muHR: function (e, t, i) {
        i.r(t);
        var a = i("eijD"),
          s = i("Fcif"),
          n = i("GFa9"),
          o = i("hHpg"),
          c = i("2wjL"),
          r = i("lRMv"),
          h = i("eCH0"),
          l = i("KDJo"),
          d = i("7/pW"),
          g = i("p/Bx"),
          u = getApp(),
          p = {
            credit: "/packages/user/integral/index",
            coupon:
              "/packages/user/coupon/list/index?type=promocard&title=我的优惠券",
            bonus: "/packages/ump/presents/index",
          };
        Object(d.a)({
          data: {
            continuesDay: 0,
            checkInTitle: "签到赢好礼",
            checkInTimeDesc: "",
            showSignBtn: !1,
            showResult: !1,
            showGift: !1,
            canReminderOpen: !1,
            canSign: !0,
            canJumpPrevious: !0,
            canJumpNext: !0,
            currentYear: new Date(Date.now()).getFullYear(),
            currentMonth: new Date(Date.now()).getMonth() + 1,
            checkInDates: [],
            dailyRewards: [],
            rewards: [],
            gifts: {},
            deservedRewards: {},
            shareTitle: "签到送好礼",
            bannerImageUrl: "https://img01.yzcdn.cn/wsc/sign/share@3x.png",
            themeClass: u.themeClass,
            pageBgColor: "#f9f9f9",
            showRules: !1,
            rules: [],
            rewardsAllWidth: 0,
            checkinFlag: !1,
            isCheckin: !1,
            showReminder: !1,
            isReminderOpen: !1,
            showSubscirbeFail: !1,
            canAutoSubscribe: !0,
            showSubscribeMask: !1,
            pageConfigs: {
              backgroundImage: g.c.backgroundImage,
              themeColor: g.c.themeColor,
              backgroundBtn: g.c.backgroundBtn,
              dialogBackgroundColor: g.c.dialogBackgroundColor,
            },
            awardType: g.a,
            checkinAwardType: g.b,
            couponType: g.d,
            openCycle: !0,
            preloading: !1,
          },
          attached() {
            (this.logicData = {}), (this.ctx.data.logicData = this.logicData);
            var { query: e = {} } = this.ctx.data,
              { dbid: t } = this.ctx.data.query,
              i = c.a.add("/" + this.ctx.data.route, e);
            (this.redirectUrl = i),
              t
                ? this.initBase(e)
                : Object(r.g)(
                    Object(s.a)({}, e, {
                      umpAlias: "",
                      umpType: "checkin",
                      redirectUrl: i,
                    })
                  )
                    .then(() => {
                      this.initBase(e);
                    })
                    .catch((e) => {});
          },
          methods: {
            initBase(e) {
              this.__initLogicData(e),
                this.initPageInfo(),
                this.queryShareSetting(),
                this.on("component:sku:cart", (e) => {
                  "add" === e.type && Object(o.a)("添加购物车成功");
                });
            },
            __initLogicData(e) {
              var { dbid: t } = e;
              this.logicData = {
                checkInId: "",
                activityOwnerKdtId: 0,
                isCheckin: !1,
                isOpen: !0,
                realYear: new Date().getFullYear(),
                realMonth: new Date().getMonth() + 1,
              };
              var i = u.db.get(t);
              u.getPointsName()
                .then((e) => {
                  var { pointsName: t = "积分" } = e;
                  (this.pointsName = t), i && this.hanldeResult(i.res);
                })
                .catch(() => {
                  (this.pointsName = "积分"), i && this.hanldeResult(i.res);
                });
            },
            getCheckinId() {
              return new Promise((e) => {
                var { checkInId: t } = this.logicData || {};
                t && e(),
                  u
                    .request({ path: "wscump/checkin/check-in-info.json" })
                    .then((t) => {
                      var { activityOwnerKdtId: i, checkInId: a } = t || {};
                      i &&
                        ((this.logicData.activityOwnerKdtId = i),
                        this.getPageComponent()),
                        a &&
                          ((this.logicData.checkInId = a),
                          (this.ctx.data.checkInId = a),
                          e());
                    })
                    .catch((e) => {});
              });
            },
            initPageInfo() {
              var e = u.getMobile();
              this.setYZData({ haveBind: e }),
                this.getCheckinId().then(() => {
                  this.getActivityInfo();
                });
            },
            showSignRules() {
              var { checkInId: e } = this.logicData;
              wx.showLoading({ title: "获取规则中" }),
                u
                  .request({
                    path: "wscump/checkin/get_rule.json",
                    query: { checkin_id: e },
                  })
                  .then((e) => {
                    wx.hideLoading(),
                      this.setYZData({
                        showRules: !0,
                        rules: e.value.split("\n"),
                      });
                  })
                  .catch((e) => {
                    wx.hideLoading(),
                      wx.showToast({
                        title: e.msg || "获取签到规则失败",
                        icon: "none",
                        duration: 1e3,
                      });
                  });
            },
            onAuthPopupShow() {
              this.setYZData({ canAutoSubscribe: !1 });
            },
            toggleSubscribeMask(e) {
              this.setYZData({ showSubscribeMask: e.detail });
            },
            signIn() {
              var e = this;
              return Object(a.a)(function* () {
                var t = e,
                  i = () => {
                    u.getPointsName()
                      .then((t) => {
                        var { pointsName: i = "积分" } = t;
                        (e.pointsName = i),
                          e.getActivityInfo(e.hasCheckin.bind(e));
                      })
                      .catch(() => {
                        (e.pointsName = "积分"),
                          e.getActivityInfo(e.hasCheckin.bind(e));
                      });
                  },
                  { shopMetaInfo: a = {} } = yield u.getShopInfo();
                e.data.canAutoSubscribe && Object(l.c)(a)
                  ? Object(h.e)({
                      scene: h.a.SIGN,
                      subscribePage: "签到页",
                      subscribeType: "签到提醒",
                      authorizationType: "sign",
                      windowType: "sign_message",
                      options: {
                        next: i,
                        onShowTips: () => {
                          t.toggleSubscribeMask({ detail: !0 });
                        },
                        onCloseTips: () => {
                          t.toggleSubscribeMask({ detail: !1 }), i();
                        },
                      },
                    })
                  : i();
              })();
            },
            hasCheckin(e) {
              var { isCheckin: t } = e,
                { checkInId: i } = this.logicData;
              this.setYZData({ isCheckin: t }),
                t
                  ? (this.handleActivityInfo(e),
                    wx.showToast({
                      title: "你今天已经签过了",
                      icon: "none",
                      duration: 1e3,
                    }))
                  : this.doCheckin(i);
            },
            resolveError(e) {
              if ((wx.hideLoading(), 160540418 !== e.code))
                wx.showToast({
                  title: e.msg || "签到失败",
                  icon: "none",
                  duration: 1e3,
                }),
                  this.setYZData({ canSign: !0 });
              else {
                var t = this.redirectUrl;
                wx.showModal({
                  title: "提示",
                  content: "签到失败，请刷新后重试",
                  showCancel: !1,
                  confirmText: "刷新页面",
                  confirmColor: "#ff9c15",
                  success(e) {
                    e.confirm && wx.reLaunch({ url: t });
                  },
                });
              }
            },
            doCheckin(e) {
              wx.showLoading({ title: "签到中" }),
                this.setYZData({ canSign: !1 }),
                u
                  .request({
                    path: "wscump/checkin/checkinV2.json",
                    query: { checkinId: e },
                  })
                  .then((e) => {
                    wx.hideLoading(), this.hanldeResult(e);
                  })
                  .catch((e) => {
                    this.resolveError(e);
                  }),
                u.logger &&
                  u.logger.log({
                    et: "click",
                    ei: "sign_in",
                    en: "立即签到",
                    pt: "signForGift",
                  });
            },
            afterHide() {
              this.setYZData({ checkinFlag: !1 });
            },
            hanldeResult(e) {
              var { success: t } = e;
              t
                ? (this.setYZData({ deservedRewards: e }),
                  this.refreshPageInfo(),
                  this.showSignResult())
                : this.setYZData({ canSign: !0 });
            },
            showSignResult() {
              var e,
                { deservedRewards: t } = this.data;
              t.list.length > 0
                ? (this.setYZData({ showResult: !0 }),
                  this.trackPrize(),
                  null == (e = u.logger) ||
                    e.log({
                      et: "view",
                      ei: "view_popup",
                      en: "弹窗曝光",
                      pt: "sign",
                    }))
                : wx.showToast({
                    title: "签到成功",
                    icon: "success",
                    duration: 1e3,
                  });
            },
            trackPrize() {
              var e,
                { awardType: t } = this.data,
                i =
                  (null == (e = this.data.deservedRewards) ? void 0 : e.list) ||
                  [],
                a = null;
              i.forEach((e) => {
                var i;
                switch (e.type) {
                  case t.coupon:
                    a = {
                      et: "view",
                      ei: "view_coupon",
                      en: "优惠券组件曝光",
                      pt: "sign",
                    };
                    break;
                  case t.credit:
                    a = {
                      et: "view",
                      ei: "view_jifen",
                      en: "积分组件曝光",
                      pt: "sign",
                    };
                    break;
                  case t.bonus:
                    a = {
                      et: "view",
                      ei: "view_gift",
                      en: "赠品组件曝光",
                      pt: "sign",
                    };
                }
                a && (null == (i = u.logger) || i.log(a));
              });
            },
            onTapHideResult() {
              var e,
                t = this,
                { awardType: i } = t.data,
                a = () => {
                  var e;
                  t.setYZData({ showResult: !1, canReminderOpen: !0 }),
                    null == (e = u.logger) ||
                      e.log({
                        et: "click",
                        ei: "click_close",
                        en: "关闭按钮点击",
                        pt: "sign",
                      });
                };
              (
                (null == (e = t.data.deservedRewards) ? void 0 : e.list) || []
              ).reduce((e, t) => t.type === i.coupon || e, !1)
                ? Object(h.e)({
                    scene: h.a.COUPON,
                    subscribePage: "签到页",
                    subscribeType: "发券",
                    authorizationType: "coupon",
                    windowType: "sign_gift",
                    options: {
                      next: a,
                      onShowTips: () => {
                        t.toggleSubscribeMask({ detail: !0 });
                      },
                      onCloseTips: () => {
                        t.toggleSubscribeMask({ detail: !1 }), a();
                      },
                    },
                  })
                : a();
            },
            onTapHideGift() {
              this.setYZData({ showGift: !1 });
            },
            onTapHideRules() {
              this.setYZData({ showRules: !1 });
            },
            getActivityInfo(e) {
              var { checkInId: t } = this.logicData;
              (e = e || this.handleActivityInfo.bind(this)),
                u
                  .request({
                    path: "wscump/checkin/get_activity_by_yzuid_v2.json",
                    query: { checkinId: t },
                  })
                  .then((t) => {
                    e(t);
                  })
                  .catch((e) => {
                    wx.showToast({
                      title: e.msg || "签到信息获取失败",
                      icon: "none",
                      duration: 1e3,
                    });
                  });
            },
            handleActivityInfo(e) {
              this.getSignInfo();
              var {
                  continuesDay: t,
                  rewards: i,
                  dailyRewards: a,
                  isCheckin: s,
                  isOpen: n,
                  cycleTimes: o = 0,
                  openCycle: c,
                } = e,
                r = "";
              r = n
                ? s
                  ? "今日已签到"
                  : a.length > 0
                  ? "每日签到" + a[0].desc
                  : "签到赢好礼"
                : "签到活动已结束";
              var h = n,
                l = i.filter((e) => +e.duration <= o),
                d =
                  130 * l.reduce((e, t) => e + t.prize.length, 0) +
                  30 * l.length;
              this.setYZData({
                continuesDay: t,
                rewards: l,
                rewardsAllWidth: d,
                dailyRewards: a,
                checkInTitle: r,
                showSignBtn: h,
                isCheckin: s,
                openCycle: c,
              }),
                (this.logicData.isCheckin = s),
                (this.logicData.isOpen = n);
            },
            getSignInfo() {
              var { currentYear: e, currentMonth: t } = this.data,
                { checkInId: i } = this.logicData;
              u.request({
                path: "wscump/checkin/find_checkin_info_by_month.json",
                query: { checkin_id: i, year: e, month: t },
              })
                .then((e) => {
                  this.processCheckinCycle(e);
                })
                .catch((e) => {
                  wx.showToast({
                    title: e.msg || "签到信息获取失败",
                    icon: "none",
                    duration: 1e3,
                  });
                });
            },
            processCheckinCycle(e) {
              var {
                  startTime: t,
                  endTime: i,
                  checkInDates: a,
                } = Object(g.f)(e),
                s = this.data.openCycle && t && i ? t + " - " + i + " " : "";
              this.setYZData({ checkInTimeDesc: s, checkInDates: a });
            },
            showAdjacentMonth(e) {
              var { currentYear: t, currentMonth: i } = this.data,
                { isOpen: a } = this.logicData,
                { realYear: s, realMonth: n } = this.logicData,
                { year: o, month: c } = Object(g.e)(t, i, e);
              o < 2010
                ? this.setYZData({ canJumpPrevious: !1 })
                : o > 2050
                ? this.setYZData({ canJumpNext: !1 })
                : this.setYZData(
                    {
                      currentYear: o,
                      currentMonth: c,
                      canJumpPrevious: !0,
                      canJumpNext: !0,
                      showSignBtn: a && o === s && c === n,
                    },
                    () => {
                      this.getSignInfo();
                    }
                  );
            },
            goToHome() {
              var e;
              n.a.switchTab({ url: "/packages/home/dashboard/index" }),
                null == (e = u.logger) ||
                  e.log({
                    et: "click",
                    ei: "click_popup",
                    en: "进店逛逛按钮点击",
                    pt: "sign",
                  });
            },
            closePopupAndRedirect(e, t) {
              this.setYZData({ showResult: !1 }),
                setTimeout(() => {
                  t ? n.a.switchTab({ url: e }) : n.a.navigate({ url: e });
                }, 100);
            },
            onTapNavigate(e) {
              var t = this,
                { awardType: i } = this.data,
                { type: a, infos: s } = e.currentTarget.dataset;
              if (a === i.coupon) {
                var n = () => {
                  var e;
                  u
                    .request({
                      path: "/wscump/coupon/coupon_use_redirect.json",
                      query: {
                        couponId: s.fetchId,
                        groupType: "card",
                        kdtId: u.getKdtId(),
                      },
                    })
                    .then((e) => {
                      t.closePopupAndRedirect(e.weappUrl, e.isSwitchTab);
                    })
                    .catch(() => {}),
                    null == (e = u.logger) ||
                      e.log({
                        et: "click",
                        ei: "click_coupon",
                        en: "优惠券组件点击",
                        pt: "sign",
                      });
                };
                Object(h.e)({
                  scene: h.a.COUPON,
                  subscribePage: "签到页",
                  subscribeType: "发券",
                  authorizationType: "coupon",
                  windowType: "sign_gift",
                  options: {
                    next: n,
                    onShowTips: () => {
                      t.toggleSubscribeMask({ detail: !0 });
                    },
                    onCloseTips: () => {
                      t.toggleSubscribeMask({ detail: !1 }), n();
                    },
                  },
                });
              } else if (a === i.bonus) {
                var o,
                  c = "";
                (c = s.isKnowledge
                  ? p[a]
                  : "/pages/goods/detail/index?alias=" +
                    s.goodsAlias +
                    "&present=" +
                    s.benefitAlias),
                  this.closePopupAndRedirect(c),
                  null == (o = u.logger) ||
                    o.log({
                      et: "click",
                      ei: "click_gift",
                      en: "赠品组件点击",
                      pt: "sign",
                    });
              } else if (a === i.credit) {
                var r,
                  l = p[a];
                this.closePopupAndRedirect(l),
                  null == (r = u.logger) ||
                    r.log({
                      et: "click",
                      ei: "click_jifen",
                      en: "积分组件点击",
                      pt: "sign",
                    });
              }
            },
            refreshPageInfo() {
              this.setYZData(
                {
                  currentYear: new Date(Date.now()).getFullYear(),
                  currentMonth: new Date(Date.now()).getMonth() + 1,
                },
                () => {
                  this.initPageInfo();
                }
              );
            },
            initPageTheme(e) {
              if (e && e.length) {
                var {
                  backgroundImage: t = this.data.pageConfigs.backgroundImage,
                  themeColor: i = this.data.pageConfigs.themeColor,
                } = e[0];
                this.setYZData({
                  pageConfigs: {
                    backgroundImage: t,
                    themeColor: i,
                    dialogBackgroundColor: i,
                    backgroundBtn: i,
                  },
                });
              }
            },
            getPageComponent() {
              var { activityOwnerKdtId: e } = this.logicData || {};
              u.request({
                path: "wscdeco/biz-component/list.json",
                query: {
                  bizName: "checkin",
                  queryValues: encodeURIComponent("" + e),
                  stage: 100,
                },
              })
                .then((e) => {
                  var { title: t, configContext: i } = e,
                    a = [],
                    s = [],
                    n = {};
                  try {
                    (a = e.components.filter((e) => "checkin" !== e.type)),
                      (s = e.components.filter((e) => "checkin" === e.type)),
                      (n = JSON.parse(i));
                  } catch (e) {}
                  var o = n.color;
                  this.setYZData({ pageBgColor: o }),
                    "签到送好礼" === this.data.shareTitle &&
                      t &&
                      (this.setYZData({ shareTitle: t }),
                      (this.ctx.data.shareTitle = t)),
                    this.initPageTheme(s),
                    (this.ctx.data.pageTitle = t),
                    this.setShowCase(a);
                })
                .catch((e) => {
                  wx.showToast({
                    title: e.msg || "微页面配置加载失败",
                    icon: "none",
                    duration: 1e3,
                  });
                })
                .finally(() => {
                  this.setYZData({ preloading: !0 });
                });
            },
            setShowCase(e) {
              Array.isArray(e) &&
                0 !== e.length &&
                setTimeout(() => {
                  this.ctx.data.featureComponents = e;
                }, 500);
            },
            queryShareSetting() {
              u.request({
                path: "wscump/checkin/query_share_setting.json",
              }).then((e) => {
                if (e) {
                  var { shareTitle: t, bannerImageUrl: i } = e;
                  t &&
                    (this.setYZData({ shareTitle: t }),
                    (this.ctx.data.shareTitle = t)),
                    i &&
                      (this.setYZData({ bannerImageUrl: i }),
                      (this.ctx.data.bannerImageUrl = i));
                }
              });
            },
            onTapPrizes(e) {
              var t = e.currentTarget.dataset.reward || {},
                { sendFailInfo: i = "" } = t;
              i && wx.showToast({ title: i, icon: "none", duration: 1e3 });
            },
          },
        });
      },
    }
  )
);
