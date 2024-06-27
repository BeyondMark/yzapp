"use strict";
var r = require("~/r");
r(
  "ELZF",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      ELZF: function (e, t, n) {
        n.r(t);
        var i = n("Fcif"),
          r = n("zMoS"),
          o = n("AGZf"),
          c = n("WNIS"),
          a = n("RY8z"),
          s = n("rqVN"),
          l = n("Mcke"),
          u = n("zeDP"),
          d = n("bsB/"),
          p = n("n3cD"),
          f = n("9zTU"),
          g = n("yar/"),
          h = n("OMyM"),
          b = !1,
          m = getApp();
        Object(s.b)({
          properties: Object(i.a)({}, g.a, {
            nowLevel: Object,
            nowBenefitList: { type: Array, value: [] },
          }),
          data: {
            userLevel: null,
            levelInfo: null,
            levelPlanBenefit: null,
            levelList: [],
            coupons: [],
            presentList: null,
            allMissionCompleted: !0,
            visible: !1,
            actionType: "",
            actionText: "",
            hasLevel: !1,
            isConsume: !1,
            couponCount: 0,
            benefitCount: 0,
            levelBenefit: null,
            needGrowth: !1,
            displayBenefits: [],
            displayPlanBenefits: [],
            hasGift: !1,
            showPoint: !1,
            pointsData: {},
            growthLeft: 0,
            needSubscribe: !1,
            showCloseBtn: !1,
            showActionBtn: !0,
            showMissionList: !1,
            isLevelChange: !1,
            isBeMember: !1,
            giftTip: "",
            currentLevelName: "",
            scene: "",
            mode: f.f.GROWTH,
            templateIdList: [],
          },
          attached() {
            (this.actionProcessTimes = 0),
              this.preCheckShow().then((e) => {
                var { isPop: t, scene: n } = e,
                  i = n === f.c.BE_MEMBER,
                  o = n === f.c.LEVEL_CHANGE;
                if (
                  (this.setYZData({
                    scene: n,
                    isLevelChange: o,
                    isBeMember: i,
                    showCloseBtn: !0,
                    showActionBtn: !i,
                    giftTip: o
                      ? "等级礼包已发放至你的账户"
                      : "礼包仅在首次入会时发放到账户",
                  }),
                  !t)
                )
                  return this.next(0, !1);
                this.getUserLevel()
                  .then(
                    (e) => (
                      this.setYZData({
                        showMissionList:
                          !this.data.hasLevel && e.mode === f.f.GROWTH,
                      }),
                      Object(r.a)(e, "level.levelAlias")
                        ? e
                        : Promise.all([
                            this.getLevelInfo(),
                            this._fetchMissionList(),
                          ]).then(() => {
                            if (!b)
                              return this.showPopup(), new Promise(() => {});
                            this.next(0, !1);
                          })
                    )
                  )
                  .then((e) => this.getLevelInfo(e))
                  .then(() => this.getBenefitGift())
                  .then(() => {
                    this.showPopup();
                  })
                  .catch((e) => {
                    this.next(0, !1);
                  });
              });
          },
          methods: {
            next(e, t) {
              e
                ? setTimeout(() => {
                    this.triggerEvent("next", t);
                  }, e)
                : this.triggerEvent("next", t);
            },
            beforeHandleAction() {
              if (this.data.needSubscribe) {
                var e = this;
                Object(u.b)({
                  templateIdList: e.data.templateIdList,
                  onSuccess: () => {
                    this.triggerEvent("subscribeCallback", !0),
                      e.handleAction();
                  },
                  onReject: () => {
                    e.handleAction();
                  },
                  onFail: () => {
                    e.handleAction();
                  },
                  onClose: () => {
                    e.handleAction();
                  },
                });
              } else this.handleAction();
            },
            handleAction() {
              var {
                actionType: e,
                scene: t,
                isLevelChange: n,
                isBeMember: i,
              } = this.data;
              this.actionProcessTimes > 0 ||
                ((this.actionProcessTimes += 1),
                this.next(0, !0),
                this.addLog({
                  et: "click",
                  ei: "memb_success_click",
                  en: "会员中心入会成功弹窗按钮点击",
                }),
                "complete" === e
                  ? a.a.navigate({ url: "/packages/user/task-center/index" })
                  : "guide" === e &&
                    Object(l.f)(l.a.freeLevelcenter, this.properties.pageQuery),
                t &&
                  (i || n || t === f.c.COMPLETE) &&
                  this.setYZData({ visible: !1 }));
            },
            handleClose() {
              this.next(0, !0), this.setYZData({ visible: !1 });
            },
            preCheckShow() {
              return new Promise((e) => {
                "complete" !== this.properties.scene
                  ? h
                      .d()
                      .then((t) => {
                        e(t);
                      })
                      .catch(() => {
                        e(!1);
                      })
                  : e({ isPop: !0, scene: "complete" });
              });
            },
            showPopup() {
              var e = this;
              this.data.hasLevel
                ? Object(u.a)()
                    .then((t) =>
                      Object(d.a)({ scene: c.k }).then((n) => {
                        e.setYZData({
                          needSubscribe: t && n.length > 0,
                          templateIdList: n,
                        });
                      })
                    )
                    .catch((e) => {
                      Object(o.a)(e);
                    })
                : e.setYZData({ showActionBtn: !1 }),
                this.setActionTypeAndText(),
                "complete" === this.properties.scene &&
                  this.data.hasLevel &&
                  h.a(),
                this.addLog({
                  et: "view",
                  ei: "memb_success",
                  en: "会员中心入会成功弹窗",
                }),
                this.setYZData({ visible: !0 });
            },
            setActionTypeAndText() {
              var {
                  hasLevel: e,
                  allMissionCompleted: t,
                  needGrowth: n,
                } = this.data,
                { isGuideType: i, config: r } = Object(l.d)(
                  this.properties.pageQuery
                ),
                o = "default",
                c = "";
              i && e
                ? ((o = "guide"),
                  (c = r.confirmButtonText),
                  Object(l.g)(l.a.freeLevelcenter, r))
                : e || t || !n || (o = "complete");
              var a = this._getActionText(o, c);
              this.setYZData({ actionText: a, actionType: o });
            },
            getUserLevel() {
              return h
                .f({ withConsumerData: "1" })
                .then(
                  (e) => (
                    this.setYZData({
                      userLevel: e,
                      hasLevel: this._computeHasLevel({ userLevel: e }),
                      isConsume: e.mode === f.f.CONSUME,
                      mode: e.mode,
                      currentLevelName: this._computeCurrentLevelName({
                        userLevel: e,
                      }),
                    }),
                    e
                  )
                );
            },
            getLevelInfo(e) {
              return new Promise((t) => {
                this._getLevelList().then((n) => {
                  var { levelList: o = [], planBenefits: c = [] } = n,
                    a = this._computeNeedGrowth({ userLevel: e, levelList: o });
                  this.setYZData({
                    levelList: o,
                    needGrowth: a > 0,
                    growthLeft: a,
                  }),
                    (b = (o || []).every((e) => !e.isEnabled));
                  var s = Object(r.a)(e, "level.levelAlias", "");
                  if (s) {
                    var l = o.filter((e) => e.levelAlias === s)[0];
                    if (l) {
                      var u = c.filter((e) => e.levelAlias === s)[0],
                        d = this._computeLevelBenefit({ levelInfo: l }),
                        p = this._computeBenefits({
                          levelBenefit: d,
                          levelPlanBenefit: u,
                        }),
                        f = this._computeBenefitCount(p),
                        g = this._computeHasGift({ levelBenefit: d });
                      return (
                        f || this.setYZData({ giftTip: "" }),
                        this.setYZData(
                          Object(i.a)(
                            {
                              levelInfo: l,
                              levelBenefit: d,
                              levelPlanBenefit: u,
                              benefitCount: f,
                              hasGift: g,
                            },
                            p
                          )
                        ),
                        void t(l)
                      );
                    }
                    t(null);
                  } else t(null);
                });
              });
            },
            getBenefitGift() {
              return h.c().then((e) => {
                var t = ((null == e ? void 0 : e.couponList) || [])
                    .filter((e) => !!e.status)
                    .map((e) =>
                      Object(i.a)({}, e, { status: "", smallSize: !0 })
                    ),
                  n = ((null == e ? void 0 : e.presentList) || [])
                    .filter((e) => !!e.status)
                    .map((e) =>
                      Object(i.a)({}, e, { status: "", smallSize: !0 })
                    ),
                  o = Object(r.a)(e, "points.status", 3),
                  c = Object(r.a)(e, "points.points", 0);
                this.setYZData({
                  coupons: t,
                  couponCount: this._computeCouponCount({ coupons: t }),
                  presentList: n,
                  pointsData: { value: c, smallSize: !0 },
                  showPoint: c > 0 && 3 !== o,
                });
              });
            },
            _getLevelList: () => h.e(1),
            _fetchMissionList() {
              h.b()
                .then(
                  (e) => (
                    this.setYZData({
                      allMissionCompleted: !e.some((e) => !e.finished),
                    }),
                    e
                  )
                )
                .catch(() => []);
            },
            _getActionText(e, t) {
              if (t) return t;
              switch (e) {
                case "complete":
                  return "获取成长值";
                case "default":
                default:
                  return "我知道了";
              }
            },
            _getBenefitCount(e, t) {
              var n = 0;
              return (
                (n = Object.keys(e).length),
                e.diyTemplateList && (n--, (n += e.diyTemplateList.length)),
                n + t.length
              );
            },
            _computeHasLevel: (e) =>
              !!Object(r.a)(e, "userLevel.level.levelAlias"),
            _computeCurrentLevelName: (e) =>
              Object(r.a)(e, "userLevel.level.name"),
            _computeCouponCount: (e) =>
              (e.coupons || []).reduce((e, t) => e + t.number || 0, 0),
            _computeBenefitCount(e) {
              var { displayBenefits: t, displayPlanBenefits: n } = e;
              return t.length + n.length;
            },
            _computeLevelBenefit: (e) =>
              Object(r.a)(e, "levelInfo.levelBenefit", {}),
            _computeNeedGrowth(e) {
              var { nowLevel: t } = this.properties;
              return (
                Object(r.a)(
                  e,
                  "levelList[0].levelGrantConditionList[0].minGrowth",
                  0
                ) - t.currentGrowth
              );
            },
            _computeBenefits(e) {
              var t = Object(r.a)(e, "levelBenefit", {}),
                n = Object(r.a)(e, "levelPlanBenefit", {}),
                o = Object(p.d)(n);
              return (
                (o = o.map((e) => {
                  var t = this.properties.nowBenefitList.find(
                    (t) => t.key === e.name
                  );
                  return t ? Object(i.a)({}, e, { icon: t.icon }) : e;
                })),
                { displayBenefits: Object(p.a)(t), displayPlanBenefits: o }
              );
            },
            _computeHasGift(e) {
              var t = Object(r.a)(e, "levelBenefit", {}),
                { isLevelChange: n } = this.data;
              return ["coupon", "present", "points"].some((e) => !!t[e]) || n;
            },
            addLog(e) {
              var t;
              null == (t = m.logger) || t.log(e);
            },
          },
          observers: {
            visible(e) {
              if (e) this.actionProcessTimes = 0;
              else {
                var { scene: t } = this.data,
                  n =
                    t === f.c.COMPLETE
                      ? this.data.hasLevel
                        ? f.c.BE_MEMBER
                        : f.c.NOT_MEMBER
                      : t;
                h.g({ scene: n })
                  .then(() => {})
                  .catch((e) => {
                    o.a.fail(e);
                  });
              }
            },
          },
        });
      },
      Mcke: function (e, t, n) {
        n.d(t, "d", function () {
          return y;
        }),
          n.d(t, "e", function () {
            return w;
          }),
          n.d(t, "h", function () {
            return L;
          }),
          n.d(t, "b", function () {
            return m;
          }),
          n.d(t, "a", function () {
            return d;
          }),
          n.d(t, "g", function () {
            return B;
          }),
          n.d(t, "f", function () {
            return _;
          }),
          n.d(t, "c", function () {
            return j;
          }),
          n.d(t, "i", function () {
            return D;
          });
        var i = n("Fcif"),
          r = n("w2Y9"),
          o = n.n(r),
          c = n("NERQ"),
          a = n("GFa9"),
          s = n("8B9M"),
          l = n("Y28S"),
          u = Object(s.a)(),
          d = {
            freeLevelcenter: "FreeLevelcenter",
            payLevelcenter: "PayLevelcenter",
            equityCard: "EquityCard",
          },
          p = "coupon",
          f = "goods",
          g = "casino",
          h = {
            FreeLevelcenter: {
              et: "view",
              ei: "view_free",
              en: "免费会员-返回领券弹窗曝光",
              pt: "levelcenter",
            },
            PayLevelcenter: {
              et: "view",
              ei: "view_pay",
              en: "付费会员-返回领券弹窗曝光",
              pt: "levelcenter",
            },
            EquityCard: {
              et: "view",
              ei: "view_card",
              en: "权益卡-返回领取弹窗曝光",
              pt: "quanyika",
            },
          },
          b = {
            FreeLevelcenter: {
              et: "click",
              ei: "click_free",
              en: "免费会员-点击返回领券弹窗",
              pt: "levelcenter",
            },
            PayLevelcenter: {
              et: "click",
              ei: "click_pay",
              en: "付费会员-点击返回领券弹窗",
              pt: "levelcenter",
            },
            EquityCard: {
              et: "click",
              ei: "click_card",
              en: "权益卡-点击返回领取弹窗",
              pt: "quanyika",
            },
          },
          m = "success",
          v = [
            {
              sign: "GUIDE_COUPON_SIGN",
              guideType: p,
              content: "领卡成功，前往领券",
              confirmButtonText: "去领券",
              cancelButtonText: "取消",
            },
            {
              sign: "GUIDE_GOODS_SIGN",
              guideType: f,
              content: "领卡成功，返回商品",
              confirmButtonText: "去购买",
              cancelButtonText: "取消",
            },
            {
              sign: "GUIDE_CASINO_SIGN",
              guideType: g,
              content: "领卡成功，前去抽奖",
              confirmButtonText: "去抽奖",
              cancelButtonText: "取消",
            },
          ],
          C = { [p]: "couponposter", [g]: "lottery", [f]: "goods" };
        function O(e) {
          try {
            u.logger && u.logger.log(Object(i.a)({}, e));
          } catch (e) {}
        }
        function y(e) {
          var { guideType: t, redirectUrl: n, guideDialogType: i } = e,
            r =
              n && t
                ? (function (e) {
                    return v.findIndex((t) => t.guideType === e);
                  })(t)
                : -1,
            o = r > -1;
          return {
            guideType: t,
            redirectUrl: n,
            guideDialogType: i,
            config: o ? v[r] : {},
            isGuideType: !(!o || !n),
          };
        }
        function L(e) {
          wx.setStorageSync("GUIDE_DIALOG_SEARCH", {
            guideType: e.guideType,
            redirectUrl: e.redirectUrl,
          });
        }
        function j(e, t) {
          var { guideType: n, redirectUrl: i, isGuideType: r } = y(t),
            c = e;
          return (
            r &&
              (c = o.a.add(c, {
                guideType: n,
                redirectUrl: decodeURIComponent(i),
              })),
            c
          );
        }
        function _(e, t) {
          var n = b[e];
          O(
            Object(i.a)({}, n, {
              ei: n.ei + "_" + C[t.guideType],
              params: { source_type: t.guideType },
            })
          );
          var r = decodeURIComponent(t.redirectUrl),
            c = /^\/?packages|pages/.test(r),
            s = /^\/packages|pages/.test(r);
          a.a.navigate({
            url: c
              ? (s ? "" : "/") + r
              : o.a.add("/pages/common/webview-page/index", { src: r }),
          });
        }
        function B(e, t) {
          var n = h[e];
          O(
            Object(i.a)({}, n, {
              ei: n.ei + "_" + C[t.guideType],
              params: { source_type: t.guideType },
            })
          );
        }
        function T(e, t, n) {
          var r = h[e];
          O(
            Object(i.a)({}, r, {
              ei: r.ei + "_" + C[t.guideType],
              params: { source_type: t.guideType },
            })
          ),
            c.a
              .confirm({
                message: t.config.content,
                confirmButtonText: t.config.confirmButtonText,
                cancelButtonText: t.config.cancelButtonText,
              })
              .then(() => {
                _(e, t);
              })
              .catch(() => {
                n && n();
              });
        }
        function w(e, t, n, i) {
          var r = y(n);
          if (r.guideDialogType === m) {
            var o = y(wx.getStorageSync("GUIDE_DIALOG_SEARCH"));
            o.isGuideType
              ? (wx.removeStorageSync("GUIDE_DIALOG_SEARCH"), T(e, o, i))
              : i && i();
          } else t === m && r.isGuideType ? T(e, r, i) : i && i();
        }
        var D = (e) => {
          if (e.IS_SALES && e.NEW_SALES_ID)
            return "!sales_ch~online!sales_id~" + e.NEW_SALES_ID;
          var t = Object(l.d)(e.from_params) || {};
          return t.sl ? "!sl~" + t.sl : "";
        };
      },
      NERQ: function (e, t, n) {
        var i = [],
          r = {
            show: !1,
            title: "",
            width: null,
            theme: "default",
            message: "",
            zIndex: 100,
            overlay: !0,
            selector: "#van-dialog",
            className: "",
            asyncClose: !1,
            beforeClose: null,
            transition: "scale",
            customStyle: "",
            messageAlign: "",
            overlayStyle: "",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnClickOverlay: !1,
            confirmButtonOpenType: "",
          },
          o = Object.assign({}, r);
        var c = (e) => (
          (e = Object.assign(Object.assign({}, o), e)),
          new Promise((t, n) => {
            var r,
              o = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (r = getCurrentPages())[r.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              o &&
                (o.setData(
                  Object.assign(
                    {
                      callback: (e, i) => {
                        "confirm" === e ? t(i) : n(i);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  o.setData({ show: !0 });
                }),
                i.push(o));
          })
        );
        (c.alert = (e) => c(e)),
          (c.confirm = (e) => c(Object.assign({ showCancelButton: !0 }, e))),
          (c.close = () => {
            i.forEach((e) => {
              e.close();
            }),
              (i = []);
          }),
          (c.stopLoading = () => {
            i.forEach((e) => {
              e.stopLoading();
            });
          }),
          (c.currentOptions = o),
          (c.defaultOptions = r),
          (c.setDefaultOptions = (e) => {
            (o = Object.assign(Object.assign({}, o), e)),
              (c.currentOptions = o);
          }),
          (c.resetDefaultOptions = () => {
            (o = Object.assign({}, r)), (c.currentOptions = o);
          }),
          c.resetDefaultOptions(),
          (t.a = c);
      },
      Qu2e: function (e, t, n) {
        n.d(t, "j", function () {
          return i;
        }),
          n.d(t, "l", function () {
            return r;
          }),
          n.d(t, "k", function () {
            return o;
          }),
          n.d(t, "h", function () {
            return c;
          }),
          n.d(t, "b", function () {
            return a;
          }),
          n.d(t, "d", function () {
            return s;
          }),
          n.d(t, "e", function () {
            return l;
          }),
          n.d(t, "i", function () {
            return u;
          }),
          n.d(t, "g", function () {
            return d;
          }),
          n.d(t, "a", function () {
            return p;
          }),
          n.d(t, "f", function () {
            return f;
          }),
          n.d(t, "c", function () {
            return g;
          }),
          n.d(t, "n", function () {
            return h;
          }),
          n.d(t, "m", function () {
            return b;
          });
        var i = 3,
          r = 6,
          o = 8,
          c = "init",
          a = { NO_RULE: i, RULE: r, PAY: o, ERROR_CARD_TYPE: -1 },
          s = 1,
          l = 0,
          u = {
            Color200: {
              direction: "135deg",
              colors: ["#B7D0FF", "#4E67B7"],
              bgColor: "#526AB9",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/704e415d887541d2bf9ce945483af305.png",
            },
            Color201: {
              direction: "135deg",
              colors: ["#959595", "#20242A"],
              bgColor: "#444",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/fb7d33fa35a5c118ba0495c09cdd1b3e.png",
            },
            Color202: {
              direction: "135deg",
              colors: ["#8BECBD", "#319E69"],
              bgColor: "#2F835A",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/7ac9de05b089cb13d36323d6864b8d49.png",
            },
            Color203: {
              direction: "135deg",
              colors: ["#FF9E97", "#C44E46"],
              bgColor: "#8B3C36",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/17fbdf65817fef6f4bd7acdb8fa414ab.png",
            },
            Color204: {
              direction: "135deg",
              colors: ["#FFDAA6", "#CE9A51"],
              bgColor: "#8C714B",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/659d46363828ac8f571bd4a13ad89458.png",
            },
            Color205: {
              direction: "135deg",
              colors: ["#FFB5C1", "#D73B5B"],
              bgColor: "#9D4456",
              imageUrl:
                "//img01.yzcdn.cn/public_files/2019/03/11/7646eb0f59b1ce45d3cfbcb67686e93d.png",
            },
            Color206: {
              direction: "135deg",
              colors: ["#FCFCFC", "#A8A8A8"],
              bgColor: "#444444",
            },
          },
          d = 1,
          p = 2,
          f = 3,
          g = {
            Color030: "Color200",
            Color040: "Color200",
            Color050: "Color200",
            Color102: "Color201",
            Color010: "Color202",
            Color020: "Color202",
            Color082: "Color202",
            Color090: "Color203",
            Color100: "Color203",
            Color101: "Color203",
            Color060: "Color204",
            Color070: "Color204",
            Color080: "Color204",
            Color081: "Color204",
          },
          h =
            "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
          b = {
            appName: "更多权益",
            icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
            benefitTplId: 0,
          };
      },
      Sei9: function (e, t, n) {
        n.d(t, "f", function () {
          return u;
        }),
          n.d(t, "b", function () {
            return d;
          }),
          n.d(t, "c", function () {
            return f;
          }),
          n.d(t, "e", function () {
            return g;
          }),
          n.d(t, "g", function () {
            return h;
          }),
          n.d(t, "d", function () {
            return m;
          }),
          n.d(t, "h", function () {
            return v;
          }),
          n.d(t, "a", function () {
            return C;
          });
        var i = n("Fcif"),
          r = n("zMoS"),
          o = n("v6dD"),
          c = n("3tyi"),
          a = n("rDSc"),
          s = n("a1Mm"),
          l = n("Qu2e"),
          u = (e) => null == e;
        var d = (e, t, n, o) => {
            var {
              diyTemplateList: u = [],
              experienceCard: d,
              diyBenefitList: f,
            } = e;
            e = Object(a.a)(e, [
              "diyTemplateList",
              "experienceCard",
              "diyBenefitList",
            ]);
            var g = [],
              h = Object.keys(
                Object(c.a)(e, [
                  "postage",
                  "discount",
                  "memberPrice",
                  "pointsFeedBack",
                  "paidContent",
                ])
              ),
              b = Object.keys(
                Object(c.a)(e, ["points", "growth", "coupon", "present"])
              ),
              m = [];
            m =
              n && f
                ? f.map((e) => {
                    var t = Object.assign(
                      e.diyTemplate.benefitTemplateExternal,
                      Object(a.a)(e.diyTemplate, "benefitTemplateExternal")
                    );
                    return Object(i.a)({}, t, {
                      benefitId: e.benefitId,
                      termCycle: e.termCycle,
                      resetNum: e.stockNum,
                    });
                  })
                : u.map((e) => {
                    var t = Object.assign(
                      Object(r.a)(e, "benefitTemplateExternal", {}),
                      Object(a.a)(e, "benefitTemplateExternal")
                    );
                    return Object(i.a)({}, t);
                  });
            var v = h
                .map((t) => {
                  if (e[t]) {
                    var i = e[t];
                    return (
                      n
                        ? (((i =
                            "paidContent" === t
                              ? Object.assign(e[t][t + n], o[t])
                              : e[t][t + n]).resetNum = e[t].stockNum),
                          (i.termCycle = e[t].termCycle))
                        : (i.benefitId = e[t].benefitId),
                      (i.key = t),
                      delete e[t],
                      i
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              C = b
                .map((t) => {
                  if (e[t]) {
                    var i = e[t];
                    return (
                      n
                        ? (((i =
                            "present" === t
                              ? Object.assign(e[t][t + n], o[t])
                              : e[t][t + n]).resetNum = e[t].stockNum),
                          (i.termCycle = e[t].termCycle))
                        : (i.benefitId = e[t].benefitId),
                      (i.key = t),
                      "coupon" === t &&
                        (i.total = i.couponList.reduce(
                          (e, t) => e + t.number,
                          0
                        )),
                      delete e[t],
                      i
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              O = d;
            return (
              d &&
                n &&
                (O = Object.assign(
                  d.experienceCardTpl,
                  Object(a.a)(d, "experienceCardTpl")
                )),
              d &&
                t !== l.d &&
                g.unshift(Object(i.a)({}, O, { key: "experienceCard" })),
              ((e) =>
                e.map((e) =>
                  Object(i.a)({}, e, {
                    appName: Object(r.a)(e, "benefitPluginInfo.showName", ""),
                    label: p(e),
                    icon: Object(s.a)(
                      Object(r.a)(e, "benefitPluginInfo.icon", "")
                    ),
                  })
                ))((g = g.concat(v).concat(m).concat(C)))
            );
          },
          p = (e) => {
            var t = Object(r.a)(e, "key", ""),
              n = Object(r.a)(e, "benefitPluginInfo.description", "");
            switch (t) {
              case "discount":
                return "" + n + Object(r.a)(e, "discount", 100) / 10 + "折";
              case "experienceCard":
                return "" + n + Object(r.a)(e, "stockNum", 0) + "张";
              case "points":
                return "" + n + Object(r.a)(e, "points", 0) + "个";
              case "pointsFeedBack":
                return "" + n + Object(r.a)(e, "rate", 0) / 10 + "倍";
              case "growth":
                return "" + n + Object(r.a)(e, "growthValue", 0) + "个";
              default:
                return Object(r.a)(e, "benefitPluginInfo.description", "");
            }
          },
          f = function (e, t) {
            return void 0 === t && (t = "YYYY-MM-DD"), Object(o.b)(e, t);
          },
          g = (e) => {
            var t,
              n = {};
            [
              "is_share",
              "dc_ps",
              "from_source",
              "from_params",
              "qr",
              "atr_ps",
              "gdt_vid",
              "qz_gdt",
            ].forEach((t) => {
              n[t] = Object(r.a)(e, t, "");
            });
            var o = getApp().logger.getLogParams(),
              c =
                n.from_params ||
                (o &&
                  (null == o || null == (t = o.context)
                    ? void 0
                    : t.from_params));
            return (
              c &&
                (n = Object(i.a)({}, n, {
                  biz_trace_point_ext: Object(i.a)(
                    {},
                    n.biz_trace_point_ext || {},
                    { from_params: c }
                  ),
                })),
              n
            );
          },
          h = (e, t) => {
            var { grantCycle: n = !1, stockNum: i, resetNum: o } = e,
              c = Object(r.a)(
                e,
                "benefitPluginInfo.showName",
                Object(r.a)(e, "appName", "")
              );
            return n
              ? "权益卡有效期内，每" +
                  { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                    n.termDays
                  ] +
                  "可使用" +
                  e.stockNum +
                  "次" +
                  c +
                  "权益"
              : (!u(i) && !u(o)) || (!u(i) && !t)
              ? "权益卡有效期内，可使用" + i + "次" + c + "权益"
              : "权益卡有效期内，可使用" + c + "权益";
          },
          b = (e) => Object(o.b)(e, "YYYY-MM-DD"),
          m = (e) => Object(o.b)(e, "YYYY-MM-DD HH:mm:ss"),
          v = (e) => {
            switch (e.termType) {
              case 1:
                return "永久有效";
              case 2:
                return b(e.termBeginAt) + " - " + b(e.termEndAt);
              case 4:
                return "领卡后" + e.termDays + "内有效";
              default:
                return "";
            }
          };
        function C(e) {
          return (
            void 0 === e && (e = ""),
            /iphone-x|iPhone11|iPhone13|iPhone14|iPhone12(?!,8>)/i.test(
              e.replace(/\s/g, "-") || ""
            ) || /iPhone14/i.test(e.replace(/\s/g, "") || "")
          );
        }
      },
      zeDP: function (e, t, n) {
        n.d(t, "a", function () {
          return a;
        }),
          n.d(t, "b", function () {
            return s;
          });
        var i = n("eijD"),
          r = n("hHpg"),
          o = n("bsB/"),
          c = n("WNIS"),
          a = () =>
            new Promise((e, t) => {
              Object(o.d)()
                .then((t) => {
                  t
                    ? wx
                        .getStorage({ key: c.l })
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
        function s(e) {
          return l.apply(this, arguments);
        }
        function l() {
          return (l = Object(i.a)(function* (e) {
            var {
              templateIdList: t = [],
              onSuccess: n = null,
              onReject: i = null,
              onFail: a = null,
              onClose: s = null,
            } = e;
            Object(o.b)({
              scene: c.k,
              needAlwaysToast: !1,
              templateIdList: t,
              successCallBack: () => {
                wx.setStorage({
                  key: c.l,
                  data: new Date().toLocaleDateString(),
                })
                  .then(() => {
                    n && n();
                  })
                  .catch(() => {
                    Object(r.a)("订阅状态缓存设置失败");
                  });
              },
              rejectCallBack: () => {
                i && i();
              },
              closeCallBack: () => {
                s && s();
              },
              failCallBack: () => {
                a && a();
              },
            });
          })).apply(this, arguments);
        }
      },
    }
  )
);
