"use strict";
var r = require("~/r");
r(
  "3Wh9",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "3Wh9": function (e, t, i) {
      i.r(t);
      var n = i("qJXH"),
        a = i("RY8z"),
        r = i("taYb"),
        o = i("B9LC"),
        s = i("hHpg"),
        c = i("CgAV"),
        d = getApp(),
        h = "packages";
      Object(n.b)({
        data: {
          giftId: "",
          isPresenter: !0,
          isFetching: !0,
          presenterInfo: {},
          presenterHaveTaken: !1,
          gameType: 1,
          gameEndTime: 0,
          countdown: "",
          lotteryEnd: !1,
          hasBindPhone: !1,
        },
        onLoad(e) {
          if (!e.gift_id)
            return wx.showModal(
              { content: "缺少必要参数", showCancel: !1, confirmText: "返回" },
              () => wx.navigateBack()
            );
          var t = e.gift_id;
          wx.showLoading({ title: "加载中" }),
            this.fetchGiftBoxInfo(t)
              .then((e) => {
                wx.hideLoading();
                var {
                  isPresenter: i,
                  alreadyTaken: n,
                  presenterInfo: r,
                  gameType: o,
                  gameEndTime: s,
                } = e;
                if (this.checkJumpCondition(e))
                  return a.a.redirect({
                    url: "/" + h + "/ump/gift/share/index?gift_id=" + t,
                  });
                var c = !1;
                i && n && (c = !0),
                  this.setYZData({
                    giftId: t,
                    presenterInfo: r,
                    isPresenter: i,
                    presenterHaveTaken: c,
                    gameType: o,
                    gameEndTime: s || 0,
                    isFetching: !1,
                  }),
                  2 === o && this.initCountdown(s - Date.now());
              })
              .catch(() => {
                wx.hideLoading(),
                  wx.showModal({
                    content: "礼盒信息获取失败,返回礼物记录",
                    showCancel: !1,
                    confirmText: "确定",
                    success() {
                      a.a.redirect({
                        url: "/" + h + "/ump/gift/gift-list/index",
                      });
                    },
                  });
              });
        },
        onReady() {
          var e = d.getMobile();
          this.setYZData({ hasBindPhone: !!e });
        },
        handleViewDetail() {
          a.a.navigate({
            url:
              "/" +
              h +
              "/ump/gift/share/index?presenter_view=1&gift_id=" +
              this.data.giftId,
          });
        },
        initCountdown(e) {
          var { giftId: t, isPresenter: i } = this.data;
          e > 0
            ? new o.a(e, {
                onChange: (e, t) => {
                  this.setYZData({ countdown: t });
                },
                onEnd() {
                  i ||
                    (wx.showToast({
                      title: "开奖时间已到，跳转详情页面",
                      icon: "none",
                    }),
                    a.a.redirect({
                      url: "/" + h + "/ump/gift/share/index?giftid=" + t,
                    }));
                },
              })
            : this.setYZData({ lotteryEnd: !0 });
        },
        handleViewMyPresent() {
          this.data.isPresenter && !this.data.presenterHaveTaken
            ? this.handleViewDetail()
            : a.a.redirect({
                url:
                  "/" + h + "/ump/gift/share/index?gift_id=" + this.data.giftId,
              });
        },
        handleTakeGiftClick() {
          var { giftId: e } = this.data;
          (2 === this.data.gameType ? this.engageLottery(e) : this.takeGift(e))
            .then(this.commonGiftSuccessHandler)
            .catch(this.commonGiftFailHandler);
        },
        commonGiftSuccessHandler(e) {
          e.orderNo &&
            (wx.showToast({ title: "领取成功", icon: "none" }),
            a.a.redirect({
              url:
                "/" + h + "/ump/gift/share/index?gift_id=" + this.data.giftId,
            }));
        },
        commonGiftFailHandler(e) {
          101504001 === e.code || 101504010 === e.code || 101504024 === e.code
            ? this.onTakeGiftError(e.code)
            : wx.showToast({
                title: e.msg || "领取礼物失败，请重试",
                icon: "none",
              });
        },
        onTakeGiftError(e) {
          wx.showToast({
            title: {
              101504001: "来晚啦，礼物已被抢光",
              101504010: "来晚啦，礼物已经过期了",
              101504024: "来晚啦，礼盒已经开奖了",
            }[e],
            icon: "none",
          }),
            a.a.redirect({
              url:
                "/" + h + "/ump/gift/share/index?gift_id=" + this.data.giftId,
            });
        },
        fetchGiftBoxInfo(e) {
          return this.fetch("wscump/gift/giftbox.json", { giftId: e });
        },
        takeGift(e) {
          return this.fetch("wscump/gift/takegift.json", { giftId: e });
        },
        engageLottery(e) {
          return this.fetch("wscump/gift/engagelottery.json", { giftId: e });
        },
        fetch: (e, t) =>
          new Promise((i, n) => {
            d.request({
              path: e,
              data: t,
              success(e) {
                (e = r.a.toCamelCase(e)), i(e);
              },
              fail(e) {
                n(e);
              },
            }).catch((e) => {
              n(e);
            });
          }),
        checkJumpCondition(e) {
          var {
            isPresenter: t,
            effectiveTime: i,
            gameType: n,
            lotteryEnd: a,
            alreadyTaken: r,
            useUp: o,
          } = e;
          if (t) return !1;
          var s = Date.now() > i && i > -1;
          return !!(r || o || (2 === n && a) || s) || void 0;
        },
        loginBywxAuthorize(e) {
          var t = {
            event: e,
            redirectUrl: !1,
            success: () => {
              this.handleTakeGiftClick();
            },
            fail(e) {
              Object(s.a)(e || "手机号绑定失败，无法进行签到");
            },
          };
          return Object(c.a)(t);
        },
      });
    },
    CgAV: function (e, t, i) {
      var n = i("WRHT");
      t.a = n.a;
    },
    WRHT: function (e, t, i) {
      i.d(t, "b", function () {
        return a;
      });
      var n = i("z24M");
      var a = () => {
        var e = getApp().getSystemInfoSync();
        return (
          !Object(n.a)("transactionWeappFlag") &&
          (!e.environment || "wxwork" !== e.environment || "ios" !== e.platform)
        );
      };
      t.a = function (e) {
        void 0 === e && (e = {});
        var t = getCurrentPages();
        e = Object.assign(
          {
            selector: "#account-wx-login",
            context: t.length ? t[t.length - 1] : null,
          },
          e
        );
        var { context: i } = e;
        if (!i || !i.selectComponent) throw new Error("context is required");
        var n = i.selectComponent(e.selector);
        if (!n) throw new Error("Can not find the selector " + e.selector);
        (e.selectComponent = n), n.wxLogin && n.wxLogin(e);
      };
    },
  })
);
