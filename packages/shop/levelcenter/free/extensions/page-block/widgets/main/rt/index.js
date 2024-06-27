"use strict";
var r = require("~/r");
r(
  "bahb",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      bahb: function (e, t, i) {
        i.r(t);
        var r = i("Fcif"),
          o = i("zMoS"),
          a = i("VmHG"),
          s = i("YeA1"),
          n = i("RY8z"),
          l = i("b4fN"),
          d = i("7/pW"),
          h = i("QLod"),
          c = i("dWkE"),
          b = i("7sy2"),
          m = i("9zTU"),
          u = i("/fWJ"),
          C = i("of9M");
        Object(d.a)({
          options: { multipleSlots: !0 },
          data: {
            topBarHeight: Object(h.e)() || 0,
            memberLevelBenefit: !0,
            customNameColor: "color: #ffe8ce",
            customBg: "background-color: transparent",
            hasContent: !1,
            globalCustomLoading: !0,
            loading: !0,
            memberCenterLogoUrl: "",
          },
          ready() {
            Object(s.e)(this, {
              showMemberLevelBenefits: (e) => this.showMemberLevelBenefits(e),
            });
          },
          attached() {
            Object(a.d)(this, [
              "deviceType",
              "identityNo",
              "hasMobile",
              "redirectUrl",
              "kdtId",
              "toMissionCenter",
              "current",
              "isWeixinCardEnabled",
              "userLevel",
              "userInfo",
              "cards",
              "nowLevel",
              "nextCard",
              "groupAlias",
              "hasCompleted",
              "nowBenefitList",
              "nowLevelAlias",
              "showInfo",
              "showMission",
              "isShow",
              "barCode",
              "qrCode",
              "guideScene",
              "requireMobile",
              "mobileAuthorized",
              "qrCodeExpired",
              "encodeCode",
              "fetchMissionFinished",
              "isSupportGoodsRecommend",
              "goodsRecommendTitleConfig",
              "recruitParams",
              "pageQuery",
              "isConsume",
              "mode",
              "hasLevel",
              "isFullLevel",
              "isThirdPartyCenter",
              "benefitGift",
              "isRemoved",
              "showNewMemberGift",
              "isUnionCode",
              "showTabBar",
              "bizDataMap",
              "needSubscribe",
              "showSubscribeFail",
              "crmFromScenePlanId",
              "showBenefitsAlert",
              "showRegisterCompleteBar",
              "neededMoreStoreBalance",
              "showRegisterBtn",
              "pointsInfo",
              "joinGapInfo",
              "isReady",
              "memberCodeRefreshInterval",
              "isFeatureMemberCenter",
              "branchStoreOpenOnline",
              "globalCustomLoading",
              "loading",
            ]),
              Object(a.b)(this, [
                "fetchData",
                "SET_CARDS_EMPTY_ARRAY",
                "SET_USER_INFO",
                "SET_IS_SHOW",
                "SET_BIND_MOBILE",
                "SET_CARD_NAME",
                "SET_MEMBER_CODE_INFO",
                "SET_QR_CODE_EXPIRED",
                "handleSubscribe",
                "handleSubscribeCallback",
                "closeSubscribeFailPopup",
                "handleSwipeChange",
                "missionsNumber",
                "jumpToMissionCenter",
                "handleAfterFetchMission",
                "hideMemberGift",
                "goToCompleteInfo",
                "handleProtocol",
                "reloadData",
              ]),
              Object(s.b)(this, {
                shopConfigs: (e) => {
                  this.setYZData({
                    memberCenterLogoUrl:
                      (null == e ? void 0 : e.member_center_logo_url) || "",
                  });
                },
              });
          },
          methods: {
            reloadDataWithCtx(e) {
              this.reloadData({ isRejoinMember: e, ctx: this.ctx });
            },
            handleRejoin() {
              var e = this.data,
                t = Object(r.a)({}, e, { actionType: m.i.REENTER });
              C.m(t)
                .then(() => {
                  wx.showToast({
                    title: "重新入会成功",
                    icon: "none",
                    duration: 1e3,
                  }),
                    this.reloadDataWithCtx(!0);
                })
                .catch((e) => {
                  wx.showToast({ title: e.msg, icon: "none", duration: 1e3 });
                });
            },
            handleAfterAuthorized(e) {
              var { detail: t } = e,
                { branchStoreOpenOnline: i } = this.data;
              this.fetchData({ branchStoreOpenOnline: i }),
                this.handleAllTriggerEvent({ type: "bindMobile", detail: t });
            },
            handleAllTriggerEvent(e) {
              var { type: t, detail: i } = e,
                {
                  redirectUrl: o,
                  kdtId: a,
                  groupAlias: s,
                  neededMoreStoreBalance: d,
                  isWeixinCardEnabled: h,
                  pageQuery: m,
                } = this.data;
              if ("hasAuth" === t) this.SET_USER_INFO({ userInfo: i });
              else if ("closeCodeDialog" === t)
                this.SET_IS_SHOW(),
                  this.timer &&
                    (clearInterval(this.timer), (this.timer = null));
              else {
                if ("bindMobile" !== t) return null;
                this.SET_BIND_MOBILE({ hasMobile: !0, mobileAuthorized: !0 });
                var C = Object(r.a)({}, Object(b.a)(m), {
                  kdtId: a,
                  alias: s,
                  fromScene: "complete",
                });
                Object(u.h)(m).then(() => {
                  if (d)
                    n.a.redirect({
                      url:
                        "/packages/pre-card/recharge/index?entry=1&kdtId=" +
                        a +
                        "&fromScene=MemberCenter",
                    });
                  else {
                    if (h) {
                      var { from_params: e, bizType: t } = m;
                      return void Object(l.a)(
                        { from_params: e, bizType: t },
                        () => this.reloadDataWithCtx(!0)
                      );
                    }
                    Object(c.a)(
                      o,
                      Object(r.a)({}, C, { fromBiz: "levelcenter" })
                    );
                  }
                });
              }
            },
            handleQRClick(e) {
              var { detail: t } = e;
              this.SET_CARD_NAME({ cardName: t }),
                this.timer && (clearInterval(this.timer), (this.timer = null)),
                this.getMemberCodeInfo();
            },
            getMemberCodeInfo() {
              var { identityNo: e, qrCodeExpired: t } = this.data,
                i = { code: e };
              C.i(i)
                .then((e) => {
                  this.SET_MEMBER_CODE_INFO({
                    isShow: !0,
                    barCode: "background-image: url(data:" + e.barCode + ");",
                    encodeCode: e.encodeCode,
                    qrCode: "background-image: url(data:" + e.qrCode + ");",
                    qrCodeExpired: !t && t,
                  }),
                    this.timer ||
                      (this.timer = setInterval(() => {
                        this.getMemberCodeInfo(i);
                      }, 3e4));
                })
                .catch((e) => {
                  clearInterval(this.timer),
                    (this.timer = null),
                    this.SET_QR_CODE_EXPIRED({ qrCodeExpired: !0 }),
                    wx.showToast({
                      title: e || "加载会员码失败！",
                      icon: "error",
                    });
                });
            },
            removeLevel() {
              return this.ctx.process
                .invokePipe("beforeOutMemberLevel")
                .then(() => {
                  var { userLevel: e, mode: t } = this.data,
                    i = Object(o.a)(e, "level.levelAlias", null),
                    r =
                      t === m.f.STORE
                        ? "退出后，你将不再继续享有会员权益。用户需重新充值才可享有会员身份。"
                        : "退出后，你将不再享受相应的等级权益。确定要退出吗？";
                  wx.showModal({
                    title: "退出当前等级",
                    content: r,
                    success: (e) => {
                      if (e.confirm)
                        wx.showLoading({ title: "请求中" }),
                          C.n({
                            operatorType: "INITIATIVE_QUIT",
                            levelAlias: i,
                          })
                            .then(() => {
                              wx.hideLoading(),
                                wx.showToast({
                                  title: "成功退出当前等级",
                                  icon: "none",
                                  duration: 1e3,
                                }),
                                this.reloadDataWithCtx();
                            })
                            .catch((e) => {
                              wx.hideLoading(),
                                wx.showToast({
                                  title: e.msg,
                                  icon: "none",
                                  duration: 1e3,
                                });
                            });
                      else if (e.cancel) return !0;
                    },
                  });
                });
            },
            showMemberLevelBenefits(e) {
              void 0 === e && (e = !0), this.setData({ memberLevelBenefit: e });
            },
            linkToRule() {
              Object(c.a)("/wscuser/levelcenter/rule", {
                query: { kdt_id: this.data.kdtId },
              });
            },
            handleHeightCalculate() {
              this.setYZData({ hasContent: !0 });
            },
          },
        });
      },
    }
  )
);
