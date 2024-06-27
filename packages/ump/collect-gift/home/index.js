"use strict";
var r = require("~/r");
r(
  "KPNz",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      KPNz: function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("qJXH"),
          l = a("AqvM"),
          c = a("GFa9"),
          u = a("hHpg"),
          o = a("xyw3"),
          r = a("FkHu"),
          n = a("a1Mm"),
          d = a("2wjL"),
          p = a("bsB/"),
          h = a("lRMv"),
          b = a("CKzp"),
          g = a("5C+H"),
          m = getApp(),
          D = { cash: "元", discount: "折" };
        Object(s.b)({
          data: {
            pageController: { status: { isInitializing: !0 } },
            weappAccountDetail: { nickName: "    " },
            guideImages: {
              step1: [g.a.asserts.guideImages.step1],
              step2Top: [g.a.asserts.guideImages.step2_top],
              step2Bom: [g.a.asserts.guideImages.step2_bom],
            },
            collectGiftDetail: { isOpen: !0, couponDetail: null, points: null },
            collectGiftRewardText: "",
            collectGiftJoinDetail: {
              status: {
                isUnSubmittedAudit: !0,
                isWaitForAudit: !1,
                isAuditSuccess: !1,
                isAuditFault: !1,
              },
              points: null,
              couponDetail: null,
            },
            upLoaderController: { upLoadedImgUrl: null },
            backImage: "",
            isRandomCoupon: !1,
            rewardData: [],
            isMultiOnlineShop: !1,
            templateIds: [],
            hasSubscribeAbility: !1,
            isAuthPush: !1,
            showSubscirbeFail: !1,
          },
          onLoad(t) {
            u.a.loading("页面加载中");
            var e = d.a.add("/" + this.route, t);
            Object(h.g)(
              Object(i.a)({}, t, {
                umpAlias: "",
                umpType: "collectgift",
                redirectUrl: e,
              })
            ).then(() => {
              this.initData();
            });
          },
          initData() {
            Object(b.a)().then(
              (t) => {
                var { nickname: e } = t;
                return this.setYZData({ "weappAccountDetail.nickName": e });
              },
              () => this.setYZData({ "weappAccountDetail.nickName": "当前" })
            ),
              this.setIsMultiOnlineShop();
            var t = this.getCdnImageUrl(g.a.asserts.guideImages.bg);
            this.setYZData({ backImage: t }),
              Promise.all([
                Object(b.b)(),
                Object(b.c)(),
                this.fetchSubscribeStatus(),
              ])
                .then((t) => {
                  var [e, a, i] = t,
                    { couponDetail: s, points: l, presentDetail: c } = e || {},
                    { hasSubscribeAbility: u = !1, isAuthPush: n = !1 } =
                      i || {},
                    d = s && s.valueRandomTo,
                    p = [];
                  if (s) {
                    var { value: h, type: b } = s,
                      g = +Object(o.a)(d).toYuan() || +h;
                    p.push("" + g + D[b] + "优惠券");
                  }
                  l && p.push(l + "积分"), c && p.push("礼品：" + c.title);
                  var S = p.join("，");
                  if (
                    (this.setYZData({
                      collectGiftDetail: e,
                      collectGiftRewardText: S,
                      isRandomCoupon: !!d,
                    }),
                    null === a.auditStatus)
                  )
                    this.setYZData({
                      "collectGiftJoinDetail.status.isUnSubmittedAudit": !0,
                    });
                  else {
                    var { auditStatus: A, points: v, couponDetail: O } = a;
                    this.parseRewardData(a),
                      2 === A &&
                        Object(r.a)({
                          message: "你的截图未通过审核，请按照截图范例正确上传",
                          duration: 999999,
                        }),
                      this.setYZData({
                        collectGiftJoinDetail: {
                          status: {
                            isWaitForAudit: 0 === A,
                            isAuditSuccess: 1 === A,
                            isAuditFault: 2 === A,
                            isUnSubmittedAudit: !1,
                          },
                          points: v,
                          couponDetail: O,
                          presentDetail: c,
                        },
                        hasSubscribeAbility: u,
                        isAuthPush: n,
                      });
                  }
                  this.setYZData({
                    "pageController.status.isInitializing": !1,
                  }),
                    m.trigger("umpActivity:loaded", e.activityId, {
                      act_type: "10009",
                      act_id: e.activityId,
                    });
                })
                .then(...Object(l.a)(() => u.a.clear()))
                .catch(() => Object(u.a)("获取活动信息失败"));
          },
          submitHandler() {
            if (
              (m.logger.log({
                et: "click",
                ei: "click_submit_audit",
                en: "点击提交审核",
              }),
              null === this.data.upLoaderController.upLoadedImgUrl)
            )
              return (
                wx
                  .createSelectorQuery()
                  .select("#main")
                  .boundingClientRect((t) => {
                    var { bottom: e } = t;
                    return wx.pageScrollTo({ scrollTop: e, duration: 300 });
                  })
                  .exec(),
                void setTimeout(() => Object(u.a)("请先上传截图"), 300)
              );
            u.a.loading("提交审核中"),
              Object(b.d)(this.data.upLoaderController.upLoadedImgUrl)
                .then(...Object(l.a)(() => u.a.clear()))
                .then(
                  (t) => {
                    var { value: e } = t;
                    return !0 === e
                      ? (this.setYZData({
                          "collectGiftJoinDetail.status": {
                            isUnSubmittedAudit: !1,
                            isWaitForAudit: !0,
                            isAuditSuccess: !1,
                            isAuditFault: !1,
                          },
                        }),
                        Object(u.a)("提交审核成功,请耐心等待"))
                      : Object(u.a)("提交审核失败");
                  },
                  (t) => {
                    var { msg: e } = t;
                    return Object(u.a)(e);
                  }
                );
          },
          uploadFileSuccessHandler(t) {
            var {
              detail: { attachmentPath: e },
            } = t;
            Object(u.a)("上传图片成功,你可以提交审核啦"),
              this.setYZData({ "upLoaderController.upLoadedImgUrl": e });
          },
          uploadFileFailureHandler(t) {
            var {
              detail: { msg: e },
            } = t;
            "chooseImage:fail cancel" !== e && Object(u.a)("上传图片失败");
          },
          onShareAppMessage: () => ({
            title: "收藏店铺赢好礼！小程序用户专享奖励等你来拿",
            imageUrl: g.a.asserts.collectGiftShareCover,
            path: g.a.url.activityHomePage,
          }),
          getCdnImageUrl: (t) => Object(n.a)(t, "!750x750.jpg"),
          navigateToHomePage: () =>
            c.a.switchTab({ url: "/packages/home/dashboard/index" }),
          parseRewardData(t) {
            var { points: e, couponDetail: a, presentDetail: i } = t,
              s = [];
            if (
              (e &&
                s.push({
                  type: "point",
                  descKey: "积分",
                  descValue: t.points,
                  actionDesc: "查看",
                  customClass: "action-btn-highlight",
                }),
              a)
            ) {
              var { couponId: l } = t,
                { type: c, value: u } = a;
              s.push({
                type: "coupon",
                descKey: "优惠券",
                descValue: "" + u + D[c],
                actionDesc: "去使用",
                customClass: "",
                couponId: l,
              });
            }
            i &&
              s.push({
                type: "present",
                descKey: "礼品",
                descValue: i.title,
                actionDesc: "去领取",
                customClass: "",
              }),
              this.setYZData({ rewardData: s });
          },
          setIsMultiOnlineShop() {
            m.globalData.isRetailApp
              ? m.getShopInfo().then((t) => {
                  var { chainStoreInfo: e } = t,
                    a = e && e.isMultiOnlineShop;
                  this.setYZData({ isMultiOnlineShop: a });
                })
              : this.setYZData({ isMultiOnlineShop: !1 });
          },
          goToHomePage() {
            c.a.switchTab({ url: "/packages/home/dashboard/index" });
          },
          fetchSubscribeStatus: () =>
            new Promise((t) => {
              Object(p.d)()
                .then((e) => {
                  e
                    ? Object(p.c)({ scene: "SCYL" })
                        .then((a) => {
                          t({ hasSubscribeAbility: e, isAuthPush: a });
                        })
                        .catch(() => Object(u.a)("授权状态获取失败"))
                    : t({ hasSubscribeAbility: e });
                })
                .catch(() => Object(u.a)("授权能力获取失败"));
            }),
          onSubscribeMessage() {
            var t = this;
            this.data.isAuthPush ||
              Object(p.e)({
                scene: "SCYL",
                successCallBack: () => {
                  t.setYZData({ isAuthPush: !0 });
                },
                failCallBack: () => {
                  t.setYZData({ showSubscirbeFail: !0 });
                },
              });
          },
          closeSubscribeFailPopup() {
            this.setYZData({ showSubscirbeFail: !1 });
          },
        });
      },
    }
  )
);
