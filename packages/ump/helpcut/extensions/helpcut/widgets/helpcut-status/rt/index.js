"use strict";
var r = require("~/r");
r(
  "WzsJ",
  Object.assign(
    {},
    require("~/packages/ump/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "53ek": function (e, t, i) {
        var n = (e, t, i) => {
          return ((a = e), Object.keys(a).map((e) => [e, a[e]]))
            .map((e) => {
              var [t, a] = e;
              return [t, "object" == typeof a ? n(a, [], i) : a(i)];
            })
            .concat(t.map((e) => [e, i[e]]))
            .reduce((e, t) => {
              var [i, n] = t;
              return (e[i] = n), e;
            }, {});
          var a;
        };
        t.a = n;
      },
      Om1d: function (e, t, i) {
        var n = i("B9LC");
        t.a = n.a;
      },
      WzsJ: function (e, t, i) {
        i.r(t);
        var n = i("7/pW"),
          a = i("VmHG"),
          s = i("Om1d"),
          r = i("1RJ/"),
          c = i("81F4"),
          o = i("jah2"),
          h = i("8P+v");
        Object(n.a)({
          data: { bargainProgressWidth: 0 },
          attached() {
            Object(a.d)(this, [
              "bargainDetail",
              "goodsDetail",
              "finishBook",
              "recommendGoodsThree",
              "queryOptions",
              "currentStock",
            ]),
              Object(a.d)(this, [
                "isShowAction",
                "bargainProgress",
                "newActionTip",
                "newActionBtn",
                "newActionExtra",
                "expireTime",
                "activityStatus",
              ]),
              Object(a.b)(this, ["SET_SHOW_ACTION_SHEET", "SET_FINISH_BOOK"]),
              Object(a.b)(this, [
                "HANDLE_PURCHASE",
                "HANDLE_HELP_CUT",
                "RESTART_BARGAIN",
                "FETCH_CURRENT_STOCK",
              ]);
          },
          observers: {
            expireTime(e) {
              e && e - Date.now().valueOf() > 0 && this.setCountDown(e);
            },
          },
          ready() {
            var { expireTime: e, newActionBtn: t = {} } = this.data;
            e &&
              e - Date.now().valueOf() > 0 &&
              this.data.expireTime - Date.now().valueOf() > 0 &&
              this.setCountDown(this.data.expireTime),
              setTimeout(() => {
                this.setYZData({
                  bargainProgressWidth: this.data.bargainProgress,
                });
              }, 1e3);
            var { event: i } = t;
            if (i) {
              var n = {};
              switch (i) {
                case "restart":
                  n = { et: "view", ei: "view_cut", en: "发起砍价按钮曝光" };
                  break;
                case "reserve":
                  n = { et: "view", ei: "view_order", en: "立即预约按钮曝光" };
                  break;
                case "invite":
                  n = { et: "view", ei: "view_join", en: "邀请好友按钮曝光" };
                  break;
                case "buy":
                  n = {
                    et: "view",
                    ei: "view_purchase",
                    en: "购买下单按钮曝光",
                  };
              }
              Object(h.d)(n);
            }
          },
          methods: {
            setCountDown(e) {
              var { newActionExtra: t = {} } = this.data,
                i = new s.a(e - Date.now().valueOf(), {
                  onChange: (e) => {
                    var {
                        day: i,
                        hour: n,
                        minute: a,
                        second: s,
                        hundredMilliseconds: r,
                      } = e,
                      o = {};
                    (o =
                      (null == this ? void 0 : this.activityStatus) ===
                      c.a.creatorReserve
                        ? {
                            before: (i ? i + "天" : "") + n + ":" + a + ":",
                            second: s,
                            after: t.cutDownText,
                          }
                        : {
                            before: "帮砍" + (n + 24 * i) + ":" + a + ":",
                            second: s + "." + r,
                            after: t.cutDownText,
                            hasMilliseconds: !0,
                          }),
                      this.setYZData({ remainTime: o });
                  },
                  onEnd: () => {
                    var { sponsorId: e } = this.queryOptions || {};
                    this.RESTART_BARGAIN(e);
                  },
                  timeout: 100,
                });
              this.countdownInstance = i;
            },
            handleBtnFn() {
              var e,
                t,
                i = {
                  reserve: () => {
                    Object(h.d)({
                      et: "click",
                      ei: "click_order",
                      en: "点击立即预约按钮",
                    }),
                      this.bookHelpcut();
                  },
                  invite: () => {
                    Object(h.d)({
                      et: "click",
                      ei: "click_join",
                      en: "点击邀请好友按钮",
                    }),
                      this.SET_SHOW_ACTION_SHEET(!0);
                  },
                  buy: () => {
                    Object(h.d)({
                      et: "click",
                      ei: "click_purchase",
                      en: "点击购买下单按钮",
                    }),
                      this.HANDLE_PURCHASE();
                  },
                  restart: () => {
                    Object(h.d)({
                      et: "click",
                      ei: "click_cut",
                      en: "点击发起砍价按钮",
                    }),
                      this.RESTART_BARGAIN();
                  },
                };
              null ==
                (t =
                  i[null == (e = this.data.newActionBtn) ? void 0 : e.event]) ||
                t.call(i);
            },
            handleClickBtn() {
              this.FETCH_CURRENT_STOCK()
                .then(() => {
                  var { currentStock: e } = this;
                  if (0 === e)
                    return wx.showToast({
                      title: "亲，活动太火爆，库存已耗完，请联系商家补库存",
                      icon: "none",
                    });
                  this.handleBtnFn();
                })
                .catch(() => {
                  this.handleBtnFn();
                });
            },
            handleRestartBargain() {
              this.RESTART_BARGAIN();
            },
            handleCurrentBuy() {
              this.HANDLE_PURCHASE();
            },
            bookHelpcut() {
              var e = this;
              Object(r.a)({
                scene: "umpHelpCutRemind",
                successCallBack: () => {
                  var t,
                    i = {
                      activityId:
                        null == (t = this.data.bargainDetail)
                          ? void 0
                          : t.activityId,
                      bizId: 6,
                      subBizId: 0,
                      isOpen: 1,
                    };
                  Object(o.m)(i)
                    .then(function (t) {
                      var { value: i = !1 } = void 0 === t ? {} : t;
                      i
                        ? (wx.showToast({
                            title: "订阅消息授权成功",
                            icon: "none",
                          }),
                          e.SET_FINISH_BOOK())
                        : wx.showToast({
                            title: "订阅消息授权失败，请重试",
                            icon: "none",
                          });
                    })
                    .catch(() => {
                      wx.showToast({
                        title: "订阅消息授权失败，请重试",
                        icon: "none",
                      });
                    });
                },
                failCallBack: () => {
                  wx.showToast({
                    title: "订阅消息授权失败，请重试",
                    icon: "none",
                  });
                },
              });
            },
          },
          detached() {
            this.countdownInstance && this.countdownInstance.stop();
          },
        });
      },
    }
  )
);
