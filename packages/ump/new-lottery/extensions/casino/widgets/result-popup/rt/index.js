"use strict";
var r = require("~/r");
r(
  "6hRS",
  Object.assign(
    {},
    require("~/packages/ump/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "6hRS": function (e, a, t) {
        t.r(a);
        var i = t("GFa9"),
          r = t("hHpg"),
          o = t("yNXm"),
          s = t("ZduY"),
          l = t("zMoS"),
          n = t("2wjL"),
          p = t("7/pW"),
          d = getApp();
        Object(p.a)({
          properties: {
            showResult: { type: Boolean, value: !1 },
            isWinning: { type: Boolean, value: !1 },
            award: { type: Object, value: {}, observer: "awardChange" },
            alias: String,
          },
          data: {
            hasLink: !1,
            isImLink: !1,
            im: { sourceParam: "", businessId: "" },
            title: "",
            desc: "",
          },
          attached() {
            this.setYZData({ backgroundPng: o.b, defaultImage: o.f }),
              this.data.isWinning ||
                d.logger.log({
                  et: "view",
                  ei: "view_pop",
                  en: "未中奖弹窗曝光",
                });
          },
          methods: {
            onContactBack: i.a.contactBack,
            awardChange(e) {
              if ((void 0 === e && (e = {}), e)) {
                var a = !!Object(l.a)(e, "jumpUrl.link_url", ""),
                  t = "chat" === Object(l.a)(e, "jumpUrl.link_type", "");
                t &&
                  d.getDefaultImData().then((e) => {
                    this.setYZData({ im: e });
                  }),
                  this.setYZData({
                    hasLink: a,
                    isImLink: t,
                    buttonText: this.computedButtonText(e),
                    title:
                      e.awardType === o.a.PRESENT ? e.awardName : e.prizeName,
                    desc: e.awardType === o.a.PRESENT ? "" : e.prizeDesc,
                  });
              }
            },
            computedButtonText(e) {
              var a = (null == e ? void 0 : e.awardType) || "";
              return d.globalData.isRetailApp ? o.p[a] : o.o[a];
            },
            hidePopup() {
              this.triggerEvent("close");
            },
            handleClickMyGift() {
              d.logger.log({
                et: "click",
                ei: "verb_index_prize",
                en: "点击我的奖品",
              });
              var e = o.n + "?alias=" + this.data.alias;
              wx.navigateTo({ url: e });
            },
            handleUse() {
              d.logger.log({
                et: "click",
                ei: "verb_windows_use",
                en: "中奖后点击使用",
              });
              var { award: e } = this.data,
                {
                  awardType: a,
                  goodsAlias: t,
                  fetchAlias: s,
                  goodsType: l,
                } = e,
                p = o.D[a];
              return (
                a === o.a.PRESENT &&
                  31 != +l &&
                  t &&
                  s &&
                  (p = n.a.add("/packages/goods/detail/index", {
                    alias: t,
                    type: "present",
                    activityId: s,
                  })),
                d.globalData.isRetailApp &&
                [o.a.CODE, o.a.COUPON, o.a.COUPON_PACKAGE, o.a.POINTS].includes(
                  a
                )
                  ? (this.hidePopup(), void this.handleClickMyGift())
                  : a === o.a.COUPON || a === o.a.CODE
                  ? (this.hidePopup(),
                    this.couponRedirectPath(e).then((e) => {
                      e.isSwitchTab
                        ? i.a.switchTab({ url: e.weappUrl })
                        : i.a.navigate({ url: e.weappUrl });
                    }))
                  : p
                  ? (this.hidePopup(),
                    void setTimeout(() => {
                      wx.navigateTo({ url: p });
                    }, 300))
                  : Object(r.a)({
                      message: "小程序暂不支持跳转到赠品页面",
                      context: this,
                    })
              );
            },
            couponRedirectPath(e) {
              if (!e.fetchId) {
                var a = {
                  weappUrl:
                    e.awardType === o.a.COUPON
                      ? "/packages/user/coupon/list/index?type=promocard&title=我的优惠券"
                      : "/packages/user/coupon/list/index?type=promocode&title=我的优惠码",
                };
                return Promise.resolve(a);
              }
              return Object(s.e)({
                couponId: e.fetchId,
                groupType: e.awardType === o.a.COUPON ? "card" : "code",
              });
            },
            wander() {
              d.logger.log({
                et: "click",
                ei: "verb_windows_look",
                en: "未中奖点击去看看",
              });
              var { jumpUrl: e } = this.data.award,
                { link_type: a, extra_data: t = {} } = e;
              if ("weapplink" === a && "2" === t.link_type) {
                var { other_weapp_appid: i = "", other_weapp_link: o = "" } = t;
                return wx.navigateToMiniProgram({
                  appId: i,
                  path: o,
                  fail(e) {
                    Object(r.a)(e.errMsg || "打开其他小程序失败");
                  },
                });
              }
              this.ctx.process.invoke("jumpToLink", { type: a, jumpUrl: e });
            },
            shareAfterWinning() {
              d.logger.log({
                et: "click",
                ei: "verb_windows_share",
                en: "中奖后点击分享",
              });
            },
            handleRoulette() {
              d.logger.log({
                et: "click",
                ei: "click_again",
                en: "再抽一次按钮点击",
              }),
                this.hidePopup(),
                this.triggerEvent("roulette");
            },
          },
        });
      },
    }
  )
);
