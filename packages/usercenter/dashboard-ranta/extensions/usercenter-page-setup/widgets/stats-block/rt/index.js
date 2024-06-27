"use strict";
var r = require("~/r");
r(
  "2xrr",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "2xrr": function (e, t, s) {
        s.r(t);
        var a = s("eijD"),
          n = s("7/pW"),
          r = s("RY8z"),
          i = s("eCH0"),
          o = s("95W+"),
          c = s("NTBK"),
          u = getApp();
        Object(n.a)({
          properties: {
            statsNames: {
              type: Object,
              value: {
                balance: "余额",
                points: "积分",
                cards: "卡",
                coupons: "优惠券/码",
                change: "零钱",
              },
            },
            statsShowInfo: {
              type: Object,
              value: {
                showPoints: !1,
                showCoupon: !1,
                showBenefitcard: !1,
                showBalance: !1,
                showChange: !1,
              },
            },
            showCouponDot: { type: Boolean, value: !1 },
            showCardDot: { type: Boolean, value: !1 },
            balance: { type: String, value: "0.00" },
            points: { type: Number | String, value: 0 },
            cards: { type: Number, value: 0 },
            coupons: { type: Number, value: 0 },
            change: { type: String, value: "" },
            links: {
              type: Object,
              value: { balance: "0.00", points: 0, cards: 0, coupons: 0 },
            },
            userAgreePrivacy: { type: Boolean, default: !1 },
            isNotValid: Boolean,
            statsList: { type: Array, value: c.g },
          },
          observers: {
            statsList(e) {
              this.setYZData({
                showOneKey: e[0],
                showOneValue: this.data[e[0]],
              });
            },
          },
          data: {
            STATS_ICON_MAP: c.h,
            showSubscribeMask: !1,
            hasTapPointsNav: !1,
            usePointsExpireScene: !1,
            userAuth: !1,
            showOneKey: "",
            showOneValue: "",
          },
          attached() {
            this.getScenePointsExpire(), this.updateUserAuth();
          },
          methods: {
            subscribe(e, t) {
              var s = {
                scene: "coupon_notice_scene",
                windowType: "usercenter_stats",
                authorizationType: "coupon",
                subscribePage: "个人中心",
                subscribeType: "优惠券/码",
                options: {
                  next: e,
                  onShowTips: () => this.toggleSubscribeMask(!0),
                  onCloseTips: () => this.toggleSubscribeMask(!1),
                  onComplete: e,
                },
              };
              "balance" === t
                ? ((s.scene = "balance_notice_scene"),
                  (s.authorizationType = "balance"),
                  (s.subscribeType = "余额"))
                : "points" === t &&
                  ((s.scene = "point_center_and_point_exchange"),
                  (s.authorizationType = "points"),
                  (s.subscribeType = "积分")),
                Object(i.e)(s);
            },
            getScenePointsExpire() {
              Object(o.a)().then((e) => {
                this.setYZData({ usePointsExpireScene: e });
              });
            },
            toggleSubscribeMask(e) {
              this.setYZData({ showSubscribeMask: e });
            },
            updateUserAuth() {
              var e = this;
              return Object(a.a)(function* () {
                u.getUserInfo((t) => {
                  e.setYZData({ userAuth: !0 });
                });
              })();
            },
            goto(e) {
              var t = e.currentTarget.dataset.nav,
                s = this.properties.links[t],
                { coupons: a } = this.data;
              if (s) {
                if (
                  ("cards" === t && this.triggerEvent("statsItemClicked", t),
                  ("coupons" === t && a) || "balance" === t)
                ) {
                  return void this.subscribe(() => {
                    r.a.navigate({ url: s });
                  }, t);
                }
                if ("points" === t) {
                  return void this.subscribe(() => {
                    r.a.navigate({ url: s });
                  }, t);
                }
                r.a.navigate({ url: s });
              } else {
                if (("coupons" === t && a) || "balance" === t) {
                  return void this.subscribe(() => {
                    this.triggerEvent("statsItemClicked", t);
                  }, t);
                }
                this.triggerEvent("statsItemClicked", t);
              }
            },
            handleBindGetUserInfo(e) {
              this.triggerEvent("bindGetUserInfo", e.detail);
            },
          },
        });
      },
      "95W+": function (e, t, s) {
        s.d(t, "a", function () {
          return o;
        }),
          s.d(t, "b", function () {
            return c;
          });
        var a = s("eijD"),
          n = s("bsB/"),
          r = s("WNIS"),
          i = s("FDI5"),
          o = () =>
            new Promise((e) => {
              Object(i.a)().then((t) => {
                var { available: s } = t;
                s &&
                  Object(n.d)().then((t) => {
                    t &&
                      wx
                        .getStorage({ key: r.g })
                        .then((t) => {
                          t.data !== new Date().toLocaleDateString() && e(!0);
                        })
                        .catch(() => {
                          e(!0);
                        });
                  });
              });
            });
        function c(e) {
          return u.apply(this, arguments);
        }
        function u() {
          return (u = Object(a.a)(function* (e) {
            var { onClose: t = () => {} } = e;
            return Object(n.e)({
              scene: r.f,
              needAlwaysToast: !0,
              closeCallBack: () => {
                wx.setStorage({
                  key: r.g,
                  data: new Date().toLocaleDateString(),
                }),
                  t();
              },
            });
          })).apply(this, arguments);
        }
      },
      FDI5: function (e, t, s) {
        s.d(t, "a", function () {
          return n;
        });
        var a = getApp(),
          n = () => a.request({ path: "/wscuser/scrm/api/isCrmShop.json" });
      },
    }
  )
);
