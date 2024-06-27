"use strict";
var r = require("~/r");
r(
  "TnN5",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      TnN5: function (e, t, i) {
        i.r(t);
        var n = i("eijD"),
          s = i("R7Zb"),
          l = i("wNgt"),
          o = i("2rGh"),
          r = i("z4mI"),
          a = i("7751"),
          h = i("jmjq"),
          u = i.n(h),
          v = i("9ZMt"),
          d = v.default.getApp(),
          { useTpx: p } = v.default.style,
          c = {
            mixins: [Object(s.a)({ optDesc: o.a })],
            props: { kdtId: Number },
            data: () => ({
              show: !1,
              title: "",
              subtitle: {},
              layoutConfig: {
                showSubtitle: !0,
                showIcon: !0,
                showBenefitInfo: !0,
              },
              cardTheme: "gloden-theme",
              backgroundImage: "",
              couponStyleType: "",
              isOneLine: !1,
              benefitList: [],
              presentInfo: {},
              pointsInfo: {},
              coupons: [],
              twoLineCouponStyle: "",
            }),
            logicData: () => ({
              memberCenterUrl: "",
              freeLevelList: [],
              payLevelList: [],
              userLevelInfo: {},
              nowLevelBenefit: {},
              sceneMarketBenefit: [],
              benefitCount: [],
              isRetailShop: !1,
              hasCondition: !1,
              needFillInfo: !1,
            }),
            computed: {
              showAuth() {
                return (
                  this.isRetailShop && !this.hasCondition && !this.needFillInfo
                );
              },
              isFreeLevelType() {
                return "0" === this.opt.levelType;
              },
            },
            mounted() {
              Promise.all([
                this.getLevelListByLevelType(),
                this.getUserLevelInfo(),
              ])
                .then((e) => e[0] && e[1] && this.getLevelBenefitWorth())
                .then(
                  (e) =>
                    !!e &&
                    (this.setBenefitList(),
                    (this.title = this.opt.title),
                    (this.isOneLine = "0" === this.opt.arrangementStyle),
                    (this.cardTheme = this.getCardTheme()),
                    (this.backgroundImage = this.getBackgroundImage()),
                    (this.memberCenterUrl = this.getMemberCenterUrl()),
                    (this.layoutConfig = this.getLayoutConfig()),
                    !0)
                )
                .then((e) => {
                  (this.show = e),
                    (this.couponStyleType = this.getCouponStyleType()),
                    (this.twoLineCouponStyle = this.getTwoLineCouponStyle()),
                    this.sendComponentLogger("logger", {
                      et: "view",
                      ei: "view_membercard",
                      en: "办会员组件曝光",
                    }),
                    e &&
                      Promise.all([d.getShopInfo(), a.c()]).then((e) => {
                        var [t, { hasCondition: i, needFillInfo: n }] = e;
                        (this.isRetailShop = t.shopType.isRetailShop),
                          (this.hasCondition = i),
                          (this.needFillInfo = n);
                      });
                });
            },
            methods: {
              getFreeLevelList() {
                return a.b({ type: r.b.FREE }).then((e) => {
                  if (0 === e.levelList.length) return !1;
                  var { levelV2List: t } = e.levelList[0];
                  return (this.freeLevelList = t), e.isLevelGroupEnabled;
                });
              },
              getPayLevelList() {
                return a.b({ type: r.b.PAY }).then((e) => {
                  if (0 === e.levelList.length) return !1;
                  var { levelV2List: t } = e.levelList[0];
                  return (this.payLevelList = t), e.isLevelGroupEnabled;
                });
              },
              getLevelListByLevelType() {
                return this.isFreeLevelType
                  ? this.getFreeLevelList()
                  : this.getPayLevelList();
              },
              getUserLevelInfo() {
                return this.isFreeLevelType
                  ? a
                      .d({ type: r.b.FREE })
                      .then(
                        (e) => (
                          (this.userLevelInfo = e),
                          !e.level || 0 === e.level.levelValue
                        )
                      )
                  : a
                      .d({ type: r.b.PAY })
                      .then(
                        (e) => (
                          (this.userLevelInfo = e),
                          !e.level || e.level.levelValue < this.opt.level + 1
                        )
                      );
              },
              getShowLevelInfo() {
                var e,
                  t,
                  i,
                  { level: n } = this.opt;
                if (this.isFreeLevelType) {
                  var s = this.findFreeLevel() || this.freeLevelList[0];
                  return {
                    isEnabled: null == s ? void 0 : s.isEnabled,
                    nowLevelBenefit: null == s ? void 0 : s.levelBenefit,
                    levelId: null == s ? void 0 : s.levelId,
                  };
                }
                return {
                  isEnabled:
                    null == (e = this.payLevelList[n]) ? void 0 : e.isDisplay,
                  nowLevelBenefit:
                    null == (t = this.payLevelList[n])
                      ? void 0
                      : t.levelBenefit,
                  levelId:
                    null == (i = this.payLevelList[n]) ? void 0 : i.levelId,
                };
              },
              findFreeLevel() {
                var {
                  customerConsumeInfo: e = {
                    currentTotalTradeAmount: 0,
                    currentTotalTradeCount: 0,
                  },
                } = this.userLevelInfo;
                return this.userLevelInfo.mode === r.a.GROWTH
                  ? [...this.freeLevelList]
                      .reverse()
                      .find(
                        (e) =>
                          e.levelGrantConditionList.find(
                            (e) => e.conditionType === r.c.GROWTH
                          ).minGrowth <= this.userLevelInfo.growth
                      )
                  : this.userLevelInfo.mode === r.a.CONSUME
                  ? [...this.freeLevelList].reverse().find((t) => {
                      var i = t.levelGrantConditionList.find(
                          (e) => e.conditionType === r.c.CONSUME
                        ),
                        { behaviorCondition: n } = i;
                      return (
                        n.minTotalTradeAmount <= e.currentTotalTradeAmount ||
                        n.minTotalTradeCount <= e.currentTotalTradeCount ||
                        n.minTradeAmount <= e.currentMaxTradeAmount
                      );
                    })
                  : void 0;
              },
              getLevelBenefitWorth() {
                var {
                  isEnabled: e,
                  nowLevelBenefit: t,
                  levelId: i,
                } = this.getShowLevelInfo();
                return e
                  ? ((this.nowLevelBenefit = t),
                    a
                      .a({ levelId: i })
                      .then(
                        (e) => (
                          (this.subtitle = this.getSubtitle(e.totalPrice)),
                          (this.coupons = this.getCouponList(
                            e.couponAdapterList
                          )),
                          (this.presentInfo = this.presentFilter(
                            e.presentInfo
                          )),
                          (this.pointsInfo = e.pointsInfo),
                          (this.sceneMarketBenefit = e.sceneMarketBenefit),
                          !0
                        )
                      ))
                  : null;
              },
              presentFilter(e) {
                var { hideEmptyCoupon: t } = this.opt;
                return "0" !== t ||
                  (e.status !== r.d.OVERDUED && e.status !== r.d.DELETED)
                  ? e
                  : {};
              },
              getSubtitle(e) {
                var {
                    descriptionType: t,
                    descriptionContent: i,
                    level: n,
                  } = this.opt,
                  s = (+u()(e, !0, !1)).toFixed(0);
                switch (t) {
                  case "0":
                    if (this.isFreeLevelType) {
                      var l = p(this.calculateFontSize(s.length + 1));
                      return +s > 0
                        ? {
                            text: "成为免费会员，一年预计省",
                            value: s,
                            valueFontSize: l,
                          }
                        : { text: "成为免费会员，享会员专属权益" };
                    }
                    var o = this.payLevelList[n].levelGoods.skuList[0].price;
                    if (
                      (this.payLevelList[n].levelGoods.skuList.forEach((e) => {
                        e.price < o && 1 === e.goodsSkuType && (o = e.price);
                      }),
                      e <= o)
                    )
                      return this.benefitCount > 1
                        ? {
                            text:
                              "开通会员，享会员" +
                              this.benefitCount +
                              "大专属权益",
                          }
                        : { text: "开通会员，享会员专属权益" };
                    var r = u()(o, !0, !1);
                    return {
                      text: "￥" + r + "开通会员，一年预计省",
                      value: s,
                      valueFontSize: p(
                        this.calculateFontSize(r.length + s.length - 1)
                      ),
                    };
                  case "1":
                    return { text: i };
                  case "2":
                    return null;
                }
              },
              getCardTheme() {
                var {
                  backgroundType: e,
                  backgroundTheme: t,
                  fontStyle: i,
                } = this.opt;
                switch (e) {
                  case "0":
                    return r.f[t];
                  case "1":
                    return "main-theme";
                  case "2":
                    return r.e[i];
                  default:
                    return null;
                }
              },
              getBackgroundImage() {
                var { backgroundImage: e, backgroundType: t } = this.opt;
                return e && "2" === t
                  ? "\n        background-image: url(" +
                      e +
                      ");\n        background-size: cover;\n        background-position: 50% 0;\n      "
                  : null;
              },
              getMemberCenterUrl() {
                var { payLevelAlias: e } = this.opt;
                return this.isFreeLevelType
                  ? "/packages/levelcenter/free/index"
                  : "/packages/levelcenter/plus/index?alias=" + e;
              },
              setBenefitList() {
                var e = [],
                  { nowLevelBenefit: t, sceneMarketBenefit: i } = this;
                for (var n in (e.push(...i), t))
                  n &&
                    ("diyTemplateList" === n
                      ? t[n].forEach((t) => {
                          e.length < 3 && e.push(t.benefitPluginInfo);
                        })
                      : e.push(t[n].benefitPluginInfo));
                (this.benefitCount = e.length),
                  this.benefitCount > 3 &&
                    (e = e.slice(0, 3)).push({
                      icon: "//b.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
                      showName: "更多权益",
                    }),
                  (this.benefitList = e);
              },
              getCouponStyleType() {
                var {
                  coupons: e,
                  isOneLine: t,
                  presentInfo: i,
                  pointsInfo: n,
                } = this;
                return e.length >= 2 || (t && (i.title || n.points))
                  ? "short"
                  : "";
              },
              getLayoutConfig() {
                var {
                  descriptionType: e,
                  showIcon: t,
                  showBenefitInfo: i,
                } = this.opt;
                return {
                  showSubtitle: "2" !== e,
                  showIcon: "1" === t,
                  showBenefitInfo: "1" === i,
                };
              },
              getCouponList(e) {
                var { hideEmptyCoupon: t } = this.opt;
                return "0" === t ? e : e.filter((e) => 0 === e.status);
              },
              calculateFontSize: (e) =>
                e <= 10 && e >= 8 ? -2 * e + 32 : e > 10 ? 12 : 16,
              getTwoLineCouponStyle() {
                var {
                    isOneLine: e,
                    presentInfo: t,
                    pointsInfo: i,
                    coupons: n,
                  } = this,
                  s = 0;
                return (
                  e && (t.title && s++, i.points && s++),
                  n && (s += n.length),
                  s <= 2 ? "twoLine-coupon" : ""
                );
              },
              handleScroll(e) {
                0 === e.detail.scrollLeft
                  ? (this.maskClass = "ticket-mask-right")
                  : (this.maskClass = "ticket-mask-right ticket-mask-left");
              },
              handleScrollRight() {
                this.maskClass = "ticket-mask-left";
              },
              handleClick() {
                var { freeLevelGroupAlias: e, payLevelAlias: t } = this.opt;
                if (this.isFreeLevelType) {
                  if (this.isRetailShop && this.hasCondition)
                    return void v.default.navigate({
                      url: this.memberCenterUrl,
                    });
                  var i =
                      "https://h5.youzan.com/wscuser/levelcenter/fill?kdt_id=" +
                      this.kdtId +
                      "&alias=" +
                      e,
                    n =
                      "/pages/common/webview-page/index?src=" +
                      encodeURIComponent(i);
                  v.default.navigate({ url: n });
                } else
                  v.default.navigate({
                    url: "/packages/shop/levelcenter/plus/index?alias=" + t,
                  });
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "click_membercardbutton",
                  en: "办会员组件点击按钮",
                });
              },
              handleBenefitClick() {
                v.default.navigate({ url: this.memberCenterUrl }),
                  this.sendComponentLogger("logger", {
                    et: "click",
                    ei: "click_membercard",
                    en: "办会员组件点击组件",
                  });
              },
              handleLogin() {
                var e = this;
                return Object(n.a)(function* () {
                  e.sendComponentLogger("logger", {
                    et: "click",
                    ei: "auth_success_sca",
                    en: "办会员组件允许授权",
                  }),
                    Object(l.d)(
                      () => {
                        (e.show = !1),
                          e.sendComponentLogger("logger", {
                            et: "click",
                            ei: "login_member",
                            en: "注册会员",
                          });
                      },
                      {
                        kdtId: e.kdtId,
                        member_src_way: 800,
                        member_src_channel: 1e3,
                        need_be_member: !0,
                      },
                      "授权中",
                      { checkManuallyQuitMember: !0 }
                    );
                })();
              },
              handleAuthFail() {
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "auth_fail_sca",
                  en: "办会员组件拒绝授权",
                });
              },
            },
            ud: !0,
          };
        t.default = v.default.component(c);
      },
    }
  )
);
