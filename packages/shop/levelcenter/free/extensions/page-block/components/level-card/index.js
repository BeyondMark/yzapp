"use strict";
var r = require("~/r");
r(
  "tVym",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      tVym: function (e, t, r) {
        r.r(t);
        var a = r("Fcif"),
          l = r("2wjL"),
          i = r("jmjq"),
          o = r.n(i),
          s = r("q29p"),
          n = r.n(s),
          c = r("RY8z"),
          u = r("rqVN"),
          h = r("dWkE"),
          v = r("/fWJ"),
          p = r("R18q"),
          d = r("9zTU"),
          m = getApp(),
          g = m.getKdtId(),
          b = "去购买",
          S = "立即授权",
          L = "获得更多成长值",
          y = "完善信息",
          w = "重新入会";
        Object(u.b)({
          properties: {
            card: { type: Object, value: {} },
            nowLevel: Object,
            expiryDesc: String,
            nextCard: Object,
            disabled: Boolean,
            hasLevel: Boolean,
            btnShow: Boolean,
            redirect: String,
            alias: String,
            hasCompleted: Boolean,
            hasMobile: {
              type: Boolean,
              observer(e, t) {
                e !== t && this.updateLevelCardData();
              },
            },
            requireMobile: {
              type: Boolean,
              observer(e, t) {
                e !== t && this.updateLevelCardData();
              },
            },
            mobileAuthorized: {
              type: Boolean,
              value: !1,
              observer(e, t) {
                e !== t && this.updateLevelCardData();
              },
            },
            recruitParams: Object,
            isConsume: Boolean,
            mode: Number,
            isThirdPartyCenter: Boolean,
            isRemoved: {
              type: Boolean,
              value: !1,
              observer(e, t) {
                e !== t && this.updateLevelCardData();
              },
            },
            cardTextSource: Object,
            pointsInfo: { type: Object, value: {} },
            userLevel: {
              type: Object,
              value: {},
              observer(e) {
                this.updateExpiryDesc(e);
              },
            },
            memberCenterLogoUrl: String,
          },
          data: {
            btnText: "",
            levelStatus: "",
            bgStyle: "",
            receiveProcess: 0,
            consumeProcess: 0,
            isFullLevel: !1,
            bottomText: {},
            curLevelBottomLeft: {},
            needMoreValue: !1,
            showMobilePopup: !1,
            priorityDisplay: {},
            isSingleAmountPriority: !1,
            isTopLevel: !1,
            showCurrentValue: !1,
            showGoPrepaidBtn: !1,
            expiryDesc: null,
            hasCurrentLevel: !1,
            reflectiveStyle: "",
          },
          methods: {
            updateExpiryDesc(e) {
              var { isThirdPartyCenter: t } = this.properties,
                r = "";
              (r = t
                ? ""
                : e && e.level && e.level.levelAlias
                ? e && 0 === e.termEndAt
                  ? "永久有效"
                  : "当前等级有效期至 " + n()(e.termEndAt, "YYYY-MM-DD")
                : "未入会"),
                this.setYZData({ expiryDesc: r });
            },
            getNeedMoreValue() {
              var { nowLevel: e, card: t } = this.properties;
              return e.levelValue < t.levelValue;
            },
            getBtnText() {
              var {
                hasMobile: e,
                hasCompleted: t,
                nowLevel: r,
                requireMobile: a,
                mobileAuthorized: l,
                mode: i,
                isRemoved: o,
              } = this.properties;
              return !a || (e && l) || 0 !== r.levelValue
                ? o
                  ? w
                  : t || 0 !== r.levelValue
                  ? i === d.f.CONSUME
                    ? b
                    : L
                  : (this.viewLog(y), y)
                : (this.viewLog(S), S);
            },
            viewLog(e) {
              switch (e) {
                case y:
                case S:
                  m.logger &&
                    m.logger.log({
                      et: "view",
                      ei: "view_fill_button",
                      en: "入会按钮曝光",
                    });
              }
            },
            clickLog(e) {
              switch (e) {
                case y:
                case S:
                  m.logger &&
                    m.logger.log({
                      et: "click",
                      ei: "click_fill",
                      en: "入会按钮点击",
                    });
              }
            },
            getLevelStatus() {
              var {
                hasMobile: e,
                card: t,
                nowLevel: r,
                requireMobile: a,
                hasCompleted: l,
                mobileAuthorized: i,
              } = this.properties;
              return r.levelValue === t.levelValue
                ? "levelName"
                : !a || (e && i) || 0 !== r.levelValue
                ? l
                  ? 0 === r.levelValue
                    ? "needMore"
                    : "levelName"
                  : "needComplete"
                : "authorized";
            },
            getLevelStyle() {
              var { card: e } = this.properties,
                t = Object(v.c)({
                  colorCode: e.color,
                  cover: e.image,
                  levelType: d.g.FREE,
                });
              return {
                bgStyle:
                  "height: 100%; background-size: cover; background-position: center;background:" +
                  t.backgroundStyle,
                reflectiveStyle: t.reflectiveStyle,
              };
            },
            currentLevelBottomText() {
              var {
                nowLevel: e,
                cardTextSource: t,
                mode: r,
                pointsInfo: a,
              } = this.properties;
              return {
                [d.f.GROWTH]: { val: e.currentGrowth, suffix: "成长值" },
                [d.f.CONSUME]: {
                  val: a.currentPoints,
                  suffix: a.pointsName || "积分",
                },
                [d.f.STORE]: Number.isNaN(Number(t.currentStoreBalance))
                  ? null
                  : {
                      val: o()(t.currentStoreBalance, !0, !1),
                      suffix: "元店铺余额",
                    },
              }[r];
            },
            getBottomText() {
              var {
                nowLevel: e,
                card: t,
                isThirdPartyCenter: r,
                mode: a,
                cardTextSource: l,
              } = this.properties;
              if (r) return { desc: "" };
              if (a === d.f.STORE) {
                var {
                  isCurrentLevel: i,
                  currentStoreBalance: s,
                  neededStoreBalance: n,
                  hasEnterThreshold: c,
                } = l;
                return i
                  ? (this.setYZData({ showCurrentValue: !0 }),
                    {
                      showHtmlSnip: !0,
                      currentValHtmlSnip:
                        '<span class="bigger">' +
                        o()(s, !0, !1) +
                        " </span>元店铺余额",
                    })
                  : c
                  ? {
                      showHtmlSnip: !0,
                      htmlSnip:
                        '单笔充值 <span class="big">' +
                        o()(n, !0, !1) +
                        "</span> 元升级为该等级",
                    }
                  : { showHtmlSnip: !0, htmlSnip: "" };
              }
              return a === d.f.CONSUME
                ? "无门槛" === t.consumeNeed
                  ? { showHtmlSnip: !0, htmlSnip: "" }
                  : { showHtmlSnip: !0, htmlSnip: t.consumeNeed }
                : t.minGrowth <= e.currentGrowth
                ? (this.setYZData({ showCurrentValue: !0 }),
                  {
                    showHtmlSnip: !0,
                    htmlSnip:
                      '<span class="bigger">' +
                      e.currentGrowth +
                      "</span>成长值",
                  })
                : e.levelValue < t.levelValue &&
                  t.minGrowth - e.currentGrowth > 0
                ? {
                    showHtmlSnip: !0,
                    htmlSnip:
                      '再获得 <span class="big">' +
                      (t.minGrowth - e.currentGrowth) +
                      " </span>成长值升级为该等级",
                  }
                : "";
            },
            getReceiveProcess() {
              var { nowLevel: e, card: t } = this.properties;
              return e.currentGrowth >= t.minGrowth
                ? 100
                : Math.ceil((100 * e.currentGrowth) / t.minGrowth);
            },
            updateLevelCardData() {
              var e = this.getBtnText(),
                t = this.getLevelStatus();
              this.setYZData({ btnText: e, levelStatus: t });
            },
            updateLevelData() {
              var e = this.getBtnText(),
                t = this.getLevelStatus(),
                r = this.getLevelStyle(),
                { bgStyle: a, reflectiveStyle: l } = r,
                i = this.getReceiveProcess(),
                o = this.getBottomText(),
                s = this.currentLevelBottomText(),
                n = this.getNeedMoreValue();
              this.setYZData({
                btnText: e,
                levelStatus: t,
                bgStyle: a,
                receiveProcess: i,
                bottomText: o,
                curLevelBottomLeft: s,
                needMoreValue: n,
                reflectiveStyle: l,
              });
            },
            checkTopLevel() {
              var {
                nextCard: e,
                nowLevel: t,
                card: r,
                priorityDisplay: a,
                mode: l,
              } = this.properties;
              ((!e && t.levelValue >= r.levelValue && l !== d.f.CONSUME) ||
                (l === d.f.CONSUME && a.isFullLevel)) &&
                this.setYZData({ isTopLevel: !0, showCurrentValue: !1 });
            },
            handleQRClick() {
              this.triggerEvent("handleQRClick", this.properties.card.name);
            },
            bindGetPhoneNumber() {
              this.getBtnText() === S && this.clickLog(S),
                this.triggerEvent("bindMobile", this.properties.card.name);
            },
            handleClick() {
              var e = this.getBtnText();
              if (e !== b) {
                var t = getApp().getKdtId(),
                  { redirect: r, alias: l, hasCompleted: i } = this.properties;
                if (e === w && i) this.triggerEvent("handleRejoin");
                else {
                  e === y && this.clickLog(y);
                  var o = Object(a.a)(
                    { kdtId: t, fromScene: "complete" },
                    this.properties.recruitParams
                  );
                  l && (o.alias = l), Object(h.a)(r, { query: o });
                }
              } else this.goToBuy();
            },
            goToBuy() {
              this.navigateWithUrlParams({
                url: "/v2/home",
                weappUrl: "/pages/home/dashboard/index",
                type: "switchTab",
                aliappUrl: "/pages/home/dashboard/index",
                qqUrl: "/pages/home/dashboard/index",
              });
            },
            goToPointsStore() {
              var { mode: e } = this.properties;
              e === d.f.CONSUME &&
                this.navigateWithUrlParams({
                  url: "/wscump/pointstore/pointcenter",
                });
            },
            goToPrepaid() {
              c.a.redirect({
                url:
                  "/packages/pre-card/recharge/index?entry=1&kdtId=" +
                  g +
                  "&fromScene=MemberCenter",
              });
            },
            navigateWithUrlParams(e) {
              var { url: t, weappUrl: r, type: a } = e;
              r
                ? a && c.a[a]
                  ? c.a[a]({ url: r })
                  : c.a.navigate({ url: r })
                : Object(h.a)(l.a.add(t, { kdt_id: g }));
            },
          },
          attached() {
            this.updateLevelData(), this.checkTopLevel();
          },
          ready() {
            var e;
            null == (e = p.a.mark) ||
              null == e.log ||
              e.log({ tag: "user-center", scene: ["appLaunch", "route"] });
          },
          observers: {
            card(e) {
              var t = e.priorityUpgradeCondition || {};
              this.setYZData({ priorityDisplay: t });
              var { current: r, condition: a, need: l, isFullLevel: i } = t,
                o = 0;
              (o =
                !Object.keys(t).length || l <= 0 || i || r > a
                  ? 100
                  : Math.ceil((r / a) * 100)),
                this.setYZData({ consumeProcess: o, isFullLevel: i });
            },
            "isConsume, priorityDisplay": function (e, t) {
              this.setYZData({
                isSingleAmountPriority: e && t.type === d.b.SINGLE,
              });
            },
            "mode,card,nowLevel,hasLevel": function (e, t, r, a) {
              this.setYZData({
                showGoPrepaidBtn:
                  e === d.f.STORE && a && r.levelValue !== t.levelValue,
              });
            },
            "hasLevel,nowLevel,card": function (e, t, r) {
              this.setYZData({
                hasCurrentLevel: e && t.levelValue === r.levelValue,
              });
            },
          },
        });
      },
    }
  )
);
