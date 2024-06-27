"use strict";
var r = require("~/r");
r(
  "HLyy",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      HLyy: function (e, t, a) {
        a.r(t);
        var i = a("Fcif"),
          s = a("rqVN"),
          n = a("hHpg"),
          r = a("9/mx"),
          l = a("XdBP"),
          c = a("WNIS"),
          o = a("MQib"),
          u = a("zMoS"),
          h = a("ZjUY"),
          p = a("zeDP"),
          b = a("dWkE"),
          d = a("2wjL"),
          g = a("bBDD"),
          v = a("bsB/");
        Object(s.b)({
          properties: Object(i.a)({}, l.a, {
            bizDataMap: Object,
            specificPlanId: Number,
            planId: { type: String, observer: "initialize" },
            fromPage: String,
          }),
          data: {
            coupons: [],
            visible: !1,
            planType: c.i.Birthday,
            couponCount: 0,
            benefitCount: 0,
            benefitList: [],
            popBackgroundSrc: "",
            popBackgroundTranslate: "0px",
            needSubscribe: !1,
            showSubscribeFail: !1,
            showCloseBtn: !1,
            isHasLevel: !0,
            planState: c.h.InProgress,
            PlanStateEnum: c.h,
            isLevelMatchingBenefit: !1,
            userMatchBenefitLevel: "",
            templateIdList: [],
          },
          attached() {
            this.properties.planId || this.next();
          },
          methods: {
            initialize(e) {
              e && this.start(e);
            },
            getUserLevel() {
              r.b(o.a.FREE)
                .then((e) => {
                  Object(u.a)(e, "level.levelAlias", null) ||
                    this.setYZData({ isHasLevel: !1 }),
                    this.showPopup();
                })
                .catch(() => {
                  Object(n.a)("获取计划等级信息失败"), this.next();
                });
            },
            start(e) {
              var t,
                { scene: a } =
                  null == (t = wx) || null == t.getLaunchOptionsSync
                    ? void 0
                    : t.getLaunchOptionsSync(),
                { path: i, query: s } = Object(g.a)(),
                l = this.properties.fromPage === c.d.memberCenterClick;
              if (!l) {
                var o = getCurrentPages();
                if (![1014, 1017, 1107].includes(a) || o.length >= 2)
                  return void this.next();
              }
              r
                .a(e)
                .then((e) => {
                  if (!e.planType)
                    return (
                      Object(n.a)("你所在的会员等级暂无可享受的活动权益"),
                      this.next(),
                      !1
                    );
                  if (!l) {
                    var { jumpPath: t = "" } = e,
                      a = Object(h.b)(i, s);
                    if (!t.includes(a)) return this.next(), !1;
                  }
                  var r = Object(h.c)(e),
                    {
                      planType: c,
                      coupons: o,
                      benefitList: u,
                      planEffectiveTime: p,
                      state: b,
                      userMatchBenefitLevel: d,
                      userCurrentLevel: g,
                    } = r,
                    {
                      popBackgroundSrc: v,
                      popBackgroundTranslate: f,
                      popBackgroundHeight: m,
                      popVipMaskTop: j,
                    } = Object(h.a)(c);
                  return (
                    this.setYZData({
                      planType: c,
                      coupons: o,
                      benefitList: u,
                      couponCount: o.length,
                      benefitCount: u.length,
                      planEffectiveTime: p,
                      popBackgroundSrc: v,
                      popBackgroundTranslate: f,
                      popBackgroundHeight: m,
                      popVipMaskTop: j,
                      planState: b,
                      userMatchBenefitLevel: d,
                      isLevelMatchingBenefit: d === g,
                    }),
                    !0
                  );
                })
                .then((e) => {
                  e && this.getUserLevel();
                })
                .catch((t) => {
                  var a = t.msg || t.message || JSON.stringify(t);
                  Object(n.a)("获取计划" + e + "详情失败，" + a), this.next();
                }),
                this.properties.fromPage === c.d.homeOrFeature &&
                  this.getIsNeedSubscribe();
            },
            next(e) {
              void 0 === e && (e = !1),
                setTimeout(() => {
                  this.triggerEvent("close"), this.triggerEvent("next", e);
                }, 500);
            },
            handleClose(e) {
              void 0 === e && (e = !1),
                this.next(e),
                this.setYZData({ visible: !1 });
            },
            handleButtonConfirm() {
              if (this.properties.fromPage === c.d.homeOrFeature)
                return this.jumpToComplete(), void this.next();
              this.triggerEvent("bindMobile"), this.handleClose(!0);
            },
            handleClick() {
              this.data.needSubscribe
                ? this.handleFeatureSubscribe()
                : this.handleClose();
            },
            handleFeatureSubscribe() {
              var e = this;
              Object(p.b)({
                templateIdList: this.data.templateIdList,
                onSuccess: () => {
                  e.handleClose();
                },
                onReject: () => {
                  e.handleClose();
                },
                onFail: () => {
                  e.setYZData({ showSubscribeFail: !0, showCloseBtn: !0 });
                },
              });
            },
            closeSubscribeFailPopup() {
              this.setYZData({ showSubscribeFail: !1 });
            },
            showPopup() {
              this.setYZData({ visible: !0 });
            },
            jumpToComplete() {
              Object(b.a)(
                d.a.add("/wscuser/levelcenter/fill", {
                  kdt_id: getApp().getKdtId(),
                  levelType: o.a.FREE,
                  fromScene: "complete",
                }),
                { title: "完善信息" }
              );
            },
            getIsNeedSubscribe() {
              Object(p.a)()
                .then((e) =>
                  Object(v.a)({ scene: c.k }).then((t) => {
                    this.setYZData({
                      needSubscribe: e && t.length > 0,
                      templateIdList: t,
                    });
                  })
                )
                .catch((e) => {
                  Object(n.a)(e);
                });
            },
          },
        });
      },
      zeDP: function (e, t, a) {
        a.d(t, "a", function () {
          return l;
        }),
          a.d(t, "b", function () {
            return c;
          });
        var i = a("eijD"),
          s = a("hHpg"),
          n = a("bsB/"),
          r = a("WNIS"),
          l = () =>
            new Promise((e, t) => {
              Object(n.d)()
                .then((t) => {
                  t
                    ? wx
                        .getStorage({ key: r.l })
                        .then((t) => {
                          t.data !== new Date().toLocaleDateString() && e(!0);
                        })
                        .catch(() => {
                          e(!0);
                        })
                    : e(!1);
                })
                .catch(() => t("授权能力获取失败"));
            });
        function c(e) {
          return o.apply(this, arguments);
        }
        function o() {
          return (o = Object(i.a)(function* (e) {
            var {
              templateIdList: t = [],
              onSuccess: a = null,
              onReject: i = null,
              onFail: l = null,
              onClose: c = null,
            } = e;
            Object(n.b)({
              scene: r.k,
              needAlwaysToast: !1,
              templateIdList: t,
              successCallBack: () => {
                wx.setStorage({
                  key: r.l,
                  data: new Date().toLocaleDateString(),
                })
                  .then(() => {
                    a && a();
                  })
                  .catch(() => {
                    Object(s.a)("订阅状态缓存设置失败");
                  });
              },
              rejectCallBack: () => {
                i && i();
              },
              closeCallBack: () => {
                c && c();
              },
              failCallBack: () => {
                l && l();
              },
            });
          })).apply(this, arguments);
        }
      },
    }
  )
);
