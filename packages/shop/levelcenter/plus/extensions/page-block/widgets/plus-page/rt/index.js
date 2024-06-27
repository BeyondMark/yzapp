"use strict";
var r = require("~/r");
r(
  "JSfl",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      JSfl: function (e, t, a) {
        a.r(t);
        var r = a("Fcif"),
          n = a("dWkE"),
          i = a("xyw3"),
          c = a("x5Yp"),
          o = a("Zu4f"),
          s = a("UyoQ"),
          l = a("9hl2"),
          d = a("n3cD"),
          u = a("9zTU"),
          p = a("O3Bn"),
          h = a("/fWJ"),
          b = a("7sy2"),
          f = a("mKDx"),
          g = a("Mcke"),
          m = a("0Ip2"),
          v = a("qlF2"),
          y = a("AQkN"),
          O = a("vgcL"),
          C = a("gc3r"),
          j = a("2wjL"),
          x = a("3tyi"),
          w = a("zMoS"),
          T = a("YeA1"),
          D = a("7/pW"),
          _ = getApp();
        Object(D.a)({
          data: {
            kdtId: _.getKdtId(),
            loading: !1,
            width: null,
            height: null,
            current: 0,
            userLevel: {},
            hasAuthorized: !1,
            hasMobile: !1,
            cards: [],
            indexMap: {},
            nowBenefitList: [],
            nowLevelAlias: "",
            url: "",
            bestPrice: "",
            monthPirce: "",
            bestType: "",
            originType: "",
            hasLevel: !1,
            hasAlias: !1,
            isContinous: !1,
            hasAgreement: !1,
            experienceMap: {},
            bindDialogShow: !1,
            nowExperienceSku: {},
            nowAlias: "",
            nowName: "",
            btnText: "",
            renewLink: "/wscuser/pluscenter/renew",
            freeCenterLink: "/packages/levelcenter/free/index",
            isSupportGoodsRecommend: !1,
            goodsRecommendTitleConfig: u.n,
            birthdayPosIndex: 0,
            bizDataMap: {},
            currentCycleSku: {},
            memberCenterLogoUrl: "",
          },
          ready() {},
          attached() {
            var e = this;
            Object(T.b)(this, {
              shopConfigs: (e) => {
                this.setYZData({
                  memberCenterLogoUrl:
                    (null == e ? void 0 : e.member_center_logo_url) || "",
                });
              },
            });
            var { query: t } = this.ctx.data;
            (this.alias = t.alias || ""), (this.query = t);
            var a = !1,
              n = Object(b.a)(t);
            this.setYZData({ bizDataMap: Object(r.a)({}, n) }),
              _.getShopInfo().then((e) => {
                var { chainStoreInfo: r = {}, shopMetaInfo: n = {} } = e || {},
                  { isRootShop: i = !1 } = r;
                a = !Object(o.b)(n) || Object(s.a)(n);
                var c = Object(l.b)(n);
                i || c
                  ? _.once("app:chainstore:kdtid:update", (e) => {
                      var { kdtId: r } = e;
                      r !== this.data.kdtId && this.setYZData({ kdtId: r }),
                        this.fetchData(t, a);
                    })
                  : (this.fetchData(t, a),
                    this.setYZData({ kdtId: _.getKdtId() }));
              }),
              Object(p.c)({ type: 2 }).then(function (t) {
                void 0 === t && (t = {}),
                  e.setYZData({ isSupportGoodsRecommend: t.value });
              }),
              Object(h.h)(this.query);
            var i = j.a.add("packages/shop/levelcenter/plus/index", t);
            Object(O.f)({ url: i, request: C.b });
            try {
              var c = Object(x.a)(t, "sl");
              c.sl &&
                Object(p.j)(c.sl).then((e) => {
                  e.salesman && 2 === e.salesmanType && Object(O.a)({ st: 14 });
                });
            } catch (e) {}
          },
          methods: {
            initFeatureMemberCenterData(e) {
              var t = _.globalData.brandFeaturePromise;
              t
                ? t
                    .then((t) => {
                      var { payMemberCenter: a } = t;
                      !a
                        ? this.fetchComponentsOfType(e)
                        : ((a.components = Object(f.b)(
                            a.components,
                            f.a.CUSTOM_COMPONENT,
                            "member_pay"
                          )),
                          this.setBrandFeatureData(a));
                    })
                    .catch(() => {
                      this.SET_IS_FEATURE_MEMBER_CENTER({
                        isFeatureMemberCenter: !1,
                      }),
                        this.fetchComponentsOfType(e);
                    })
                : this.fetchComponentsOfType(e);
            },
            fetchComponentsOfType(e) {
              e &&
                Object(p.d)("member_pay").then((e) => {
                  var t = Object(f.b)(e, f.a.CUSTOM_COMPONENT, "member_pay");
                  (this.ctx.data.featureComponents = t),
                    (this.ctx.data.navigationBarConfigData = {
                      style_color_type: "global",
                      navigationbar_config_type: "global",
                      special_nav_bg_color: "#252525",
                      special_nav_color: "#fff",
                    });
                });
            },
            setBrandFeatureData(e) {
              var { components: t = [] } = e,
                a = t.find((e) => "config" === e.type),
                r = t.find((e) => "navigationbar_config" === e.type);
              a && (this.ctx.data.pageTitle = a.title || "PLUS会员中心"),
                (this.ctx.data.featureComponents = t),
                r && (this.ctx.data.navigationBarConfigData = r);
            },
            fetchData(e, t) {
              this.checkBindPhone();
              var a = [
                this.fetchUserLevel(),
                this.fetchExperienceList(),
                this.initFeatureMemberCenterData(t),
              ];
              Promise.all(a);
            },
            fetchUserLevel() {
              m.g({ type: u.g.PAY }).then((e) => {
                var t = wx.getSystemInfoSync().windowWidth - 41,
                  a = Number((t / (343 / 180)).toFixed(1));
                e.level && this.fetchgAgreement(),
                  this.setYZData({ userLevel: e, width: t, height: a }),
                  this.fetchLevelList(e);
              });
            },
            fetchLevelList(e) {
              m.f({ type: u.g.PAY })
                .then((t) => {
                  t.levels = e;
                  var a = Object(d.c)(t, void 0, e),
                    { nowAlias: r } = this.data,
                    n = Object(d.b)(e, a.cards),
                    i = a.indexMap[r] || a.indexMap[this.alias] || 0;
                  this.setYZData({
                    cards: a.cards,
                    indexMap: a.indexMap,
                    loading: !1,
                    current: i,
                    birthdayPosIndex: n,
                  }),
                    this.changeNowLevelBenefit(a.cards[i]),
                    this.changeInitData(i),
                    this.setHasAlias() || this.handleGuideJump();
                  var c = (a.cards || []).every((e) => !e.isDisplay),
                    o = Object(w.a)(e, "level.levelValue", ""),
                    s = Object(w.a)(e, "isExpired", !0);
                  c &&
                    (!o || (o && !s)) &&
                    wx.showToast({
                      title: "会员等级已停用",
                      icon: "error",
                      duration: 1e3,
                    });
                })
                .catch(() => {
                  wx.showToast({
                    title: "加载会员等级失败，请重试",
                    icon: "error",
                    duration: 1e3,
                  });
                });
            },
            fetchgAgreement() {
              m.a()
                .then((e) => {
                  var t = !Object(c.a)(e) && e.userAgId;
                  this.setYZData({ hasAgreement: t });
                })
                .catch((e) => {
                  wx.showToast({ title: e, icon: "error" });
                });
            },
            fetchExperienceList() {
              m.c()
                .then((e) => {
                  if (e.length) {
                    var t = this.handleExperienceList(e);
                    (this.isFirstEnter = !1),
                      this.setYZData({ experienceMap: t });
                  }
                })
                .catch((e) => {
                  wx.showToast({ title: e, icon: "error" });
                });
            },
            fetchNowExperienceInfo(e) {
              m.e({ alias: e })
                .then((e) => {
                  var t = {},
                    a = !1;
                  "promot" === e.type &&
                    e.data.goodsId &&
                    ((t = this.handleExperienceInfo(e.data)), (a = !0)),
                    "highest" === e.type &&
                      e.data.levelExperience &&
                      ((t = this.handleExperienceInfo(e.data.levelExperience)),
                      (a = !0)),
                    this.setYZData(Object(r.a)({ bindDialogShow: a }, t));
                })
                .catch((e) => {
                  wx.showToast({ title: e, icon: "error" });
                });
            },
            handleExperienceInfo(e) {
              var t = e;
              return (
                (t.goodsId = e.goodsId),
                (t.skuId = e.goodsSkuId),
                (t.price = e.experiencePrice),
                (t.showPrice = Object(i.a)(e.experiencePrice).toYuan()),
                (t.isContinousOrder = !1),
                (t.experienceTime = e.experienceTime),
                {
                  nowExperienceSku: t,
                  nowAlias: e.levelAlias,
                  levelExperience: e,
                }
              );
            },
            fetchHighestLevel() {
              m.b()
                .then((e) => {
                  if (e.levelExperience) {
                    var { levelExperience: t = {} } = e,
                      a = this.handleExperienceInfo(t);
                    this.setYZData({
                      bindDialogShow: !0,
                      nowExperienceSku: a,
                      nowAlias: t.levelAlias,
                      levelExperience: t,
                    });
                  }
                })
                .catch((e) => {
                  wx.showToast({ title: e, icon: "error" });
                });
            },
            fetchLevelGoods(e) {
              var [t, a] = Object(v.b)([], e);
              t
                ? this.formatLevelGoodsDisplayInfo(t)
                : a
                    .then((e) => {
                      this.formatLevelGoodsDisplayInfo(e);
                    })
                    .catch((e) => {
                      wx.showToast({ title: e, icon: "error" });
                    });
            },
            formatLevelGoodsDisplayInfo(e) {
              var t = Object(v.c)(e.skuList);
              this.setYZData({
                bestPrice: t.bestPrice,
                bestType: t.bestType,
                monthPirce: t.monthPirce,
                originType: t.originType,
                experienceRenew: t.ExperienceRenew,
                isStartCheapest: t.isStartCheapest,
              });
            },
            handleExperienceList(e) {
              var t = {};
              return (
                e.forEach((e) => {
                  t[e.levelAlias] = Object(r.a)({}, e, {
                    skuId: e.goodsSkuId,
                    price: e.experiencePrice,
                  });
                }),
                t
              );
            },
            showInfotmationDialog(e, t) {
              var a = Object(w.a)(e, "level.levelAlias", null);
              return !t && a;
            },
            handleSwipeChange(e) {
              if ("change" === e.type) {
                var { current: t } = e.detail,
                  a = Object(w.a)(this.data.cards, "" + t, {});
                this.changeNowLevelBenefit(a), this.changeInitData(t);
              }
            },
            changeNowLevelBenefit(e) {
              this.setYZData({
                nowBenefitList: e.benefitList,
                nowLevelAlias: e.card.alias,
              });
            },
            changeInitData(e) {
              var t = this.setHasAlias(),
                a = this.setHasLevel(e),
                r = this.setIsContinous(e),
                n = Object(w.a)(this.data.cards, "" + e, {}),
                i = Object(w.a)(n, "card.name", ""),
                c = Object(w.a)(n, "card.alias", "");
              this.setYZData({
                hasLevel: a,
                hasAlias: t,
                isContinous: r,
                bestPrice: "",
                bestType: "",
                originType: "",
                current: e,
                nowAlias: c,
                nowName: i,
              }),
                this.fetchLevelGoods(n.card.alias);
              var { isFirstEnter: o, experienceMap: s } = this.data;
              if (!o) {
                var l = s[c];
                this.setNowExperienceSku(l);
              }
            },
            setHasAlias() {
              var { userLevel: e } = this.data;
              return !!Object(w.a)(e, "level.levelAlias", null);
            },
            setHasLevel(e) {
              var { userLevel: t, cards: a } = this.data;
              return (
                Object(w.a)(a, "[" + e + "].card.alias", "") ===
                Object(w.a)(t, "level.levelAlias", null)
              );
            },
            setIsContinous(e) {
              var { cards: t, userLevel: a, hasAgreement: r } = this.data;
              return (
                !(
                  Object(w.a)(t, "[" + e + "]", {}).isDisplay &&
                  (!r || a.isExpired)
                ) &&
                Object(w.a)(t, "[" + e + "].card.alias", "") ===
                  Object(w.a)(a, "level.levelAlias", null)
              );
            },
            setNowExperienceSku(e) {
              var t = e || {};
              e &&
                ((t.goodsId = e.goodsId),
                (t.skuId = e.goodsSkuId),
                (t.price = e.experiencePrice),
                (t.showPrice = Object(i.a)(e.experiencePrice).toYuan()),
                (t.isContinousOrder = !1)),
                this.setYZData({ nowExperienceSku: t });
            },
            getBtnText(e) {
              var { current: t, sku: a } = e,
                { userLevel: r, nowLevelAlias: n, cards: i } = this.data,
                c = Object(w.a)(r, "isExperienceLevel", null),
                o = Object(w.a)(r, "isExpired", !1),
                s = Object(w.a)(r, "level.levelAlias", null),
                l = Object(w.a)(a, "handlePrice.price", null);
              return s !== n || o
                ? a.goodsSkuType === y.a.Renewal
                  ? "复制订购链接"
                  : s === n && c
                  ? "正式开通会员"
                  : l
                  ? "立即支付" + l + "元"
                  : "立即开通" +
                    (Object(w.a)(i, "[" + t + "].card.name", "") || "")
                : "立即续费";
            },
            callStartPay(e) {
              var { type: t } = e,
                a = Object(h.e)(this.query);
              this.selectComponent("#payViewRef").toCreateOrder(t, a);
            },
            toRenewH5Html() {
              var { nowAlias: e, kdtId: t } = this.data,
                a = Object(h.e)(this.query);
              Object(n.a)("https://cashier.youzan.com/pay/wscuser_paylevel", {
                query: Object(r.a)({}, a, { kdt_id: t, alias: e }),
              });
            },
            checkBindPhone() {
              var e = !1;
              _.getBuyerId() ||
                ((e = !0),
                this.on("app:token:success", () => {
                  _.getBuyerId() && this.setYZData({ hasMobile: !0 });
                })),
                this.setYZData({ hasMobile: !e });
            },
            handleAllTriggerEvent(e) {
              var { type: t, detail: a } = e;
              switch (t) {
                case "hasAuth":
                  this.setYZData({ hasAuthorized: a });
                  break;
                case "bindMobile":
                  Object(h.h)(this.query), this.setYZData({ hasMobile: !0 });
                  break;
                case "closeCodeDialog":
                  this.setYZData({ isShow: !1 });
                  break;
                case "pay":
                  this.data.hasMobile && this.callStartPay({ type: "cycle" });
                  break;
                case "experience":
                  this.data.hasMobile &&
                    this.callStartPay({ type: "experience" });
                  break;
                case "renew":
                  this.toRenewH5Html();
                  break;
                case "copy":
                  var { nowAlias: n, kdtId: i } = this.data,
                    c = Object(h.e)(this.query),
                    o = j.a.add(
                      "https://cashier.youzan.com/pay/wscuser_paylevel",
                      Object(r.a)({}, c, { kdt_id: i, alias: n })
                    );
                  wx.setClipboardData({ data: o, success() {} });
                  break;
                default:
                  return null;
              }
            },
            finish() {
              this.handleGuideJump();
            },
            handleGuideJump() {
              Object(g.e)(g.a.payLevelcenter, g.b, this.query, () => {
                this.fetchNowExperienceInfo(this.query.alias);
              });
            },
            handleSkuChange(e) {
              var t = e.detail || {},
                a = this.getBtnText({ current: this.data.current, sku: t });
              this.setData({ currentCycleSku: e.detail || {}, btnText: a });
            },
          },
        });
      },
      Mcke: function (e, t, a) {
        a.d(t, "d", function () {
          return C;
        }),
          a.d(t, "e", function () {
            return _;
          }),
          a.d(t, "h", function () {
            return j;
          }),
          a.d(t, "b", function () {
            return m;
          }),
          a.d(t, "a", function () {
            return u;
          }),
          a.d(t, "g", function () {
            return T;
          }),
          a.d(t, "f", function () {
            return w;
          }),
          a.d(t, "c", function () {
            return x;
          }),
          a.d(t, "i", function () {
            return I;
          });
        var r = a("Fcif"),
          n = a("w2Y9"),
          i = a.n(n),
          c = a("NERQ"),
          o = a("GFa9"),
          s = a("8B9M"),
          l = a("Y28S"),
          d = Object(s.a)(),
          u = {
            freeLevelcenter: "FreeLevelcenter",
            payLevelcenter: "PayLevelcenter",
            equityCard: "EquityCard",
          },
          p = "coupon",
          h = "goods",
          b = "casino",
          f = {
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
          g = {
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
              guideType: h,
              content: "领卡成功，返回商品",
              confirmButtonText: "去购买",
              cancelButtonText: "取消",
            },
            {
              sign: "GUIDE_CASINO_SIGN",
              guideType: b,
              content: "领卡成功，前去抽奖",
              confirmButtonText: "去抽奖",
              cancelButtonText: "取消",
            },
          ],
          y = { [p]: "couponposter", [b]: "lottery", [h]: "goods" };
        function O(e) {
          try {
            d.logger && d.logger.log(Object(r.a)({}, e));
          } catch (e) {}
        }
        function C(e) {
          var { guideType: t, redirectUrl: a, guideDialogType: r } = e,
            n =
              a && t
                ? (function (e) {
                    return v.findIndex((t) => t.guideType === e);
                  })(t)
                : -1,
            i = n > -1;
          return {
            guideType: t,
            redirectUrl: a,
            guideDialogType: r,
            config: i ? v[n] : {},
            isGuideType: !(!i || !a),
          };
        }
        function j(e) {
          wx.setStorageSync("GUIDE_DIALOG_SEARCH", {
            guideType: e.guideType,
            redirectUrl: e.redirectUrl,
          });
        }
        function x(e, t) {
          var { guideType: a, redirectUrl: r, isGuideType: n } = C(t),
            c = e;
          return (
            n &&
              (c = i.a.add(c, {
                guideType: a,
                redirectUrl: decodeURIComponent(r),
              })),
            c
          );
        }
        function w(e, t) {
          var a = g[e];
          O(
            Object(r.a)({}, a, {
              ei: a.ei + "_" + y[t.guideType],
              params: { source_type: t.guideType },
            })
          );
          var n = decodeURIComponent(t.redirectUrl),
            c = /^\/?packages|pages/.test(n),
            s = /^\/packages|pages/.test(n);
          o.a.navigate({
            url: c
              ? (s ? "" : "/") + n
              : i.a.add("/pages/common/webview-page/index", { src: n }),
          });
        }
        function T(e, t) {
          var a = f[e];
          O(
            Object(r.a)({}, a, {
              ei: a.ei + "_" + y[t.guideType],
              params: { source_type: t.guideType },
            })
          );
        }
        function D(e, t, a) {
          var n = f[e];
          O(
            Object(r.a)({}, n, {
              ei: n.ei + "_" + y[t.guideType],
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
                w(e, t);
              })
              .catch(() => {
                a && a();
              });
        }
        function _(e, t, a, r) {
          var n = C(a);
          if (n.guideDialogType === m) {
            var i = C(wx.getStorageSync("GUIDE_DIALOG_SEARCH"));
            i.isGuideType
              ? (wx.removeStorageSync("GUIDE_DIALOG_SEARCH"), D(e, i, r))
              : r && r();
          } else t === m && n.isGuideType ? D(e, n, r) : r && r();
        }
        var I = (e) => {
          if (e.IS_SALES && e.NEW_SALES_ID)
            return "!sales_ch~online!sales_id~" + e.NEW_SALES_ID;
          var t = Object(l.d)(e.from_params) || {};
          return t.sl ? "!sl~" + t.sl : "";
        };
      },
      NERQ: function (e, t, a) {
        var r = [],
          n = {
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
          i = Object.assign({}, n);
        var c = (e) => (
          (e = Object.assign(Object.assign({}, i), e)),
          new Promise((t, a) => {
            var n,
              i = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (n = getCurrentPages())[n.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              i &&
                (i.setData(
                  Object.assign(
                    {
                      callback: (e, r) => {
                        "confirm" === e ? t(r) : a(r);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  i.setData({ show: !0 });
                }),
                r.push(i));
          })
        );
        (c.alert = (e) => c(e)),
          (c.confirm = (e) => c(Object.assign({ showCancelButton: !0 }, e))),
          (c.close = () => {
            r.forEach((e) => {
              e.close();
            }),
              (r = []);
          }),
          (c.stopLoading = () => {
            r.forEach((e) => {
              e.stopLoading();
            });
          }),
          (c.currentOptions = i),
          (c.defaultOptions = n),
          (c.setDefaultOptions = (e) => {
            (i = Object.assign(Object.assign({}, i), e)),
              (c.currentOptions = i);
          }),
          (c.resetDefaultOptions = () => {
            (i = Object.assign({}, n)), (c.currentOptions = i);
          }),
          c.resetDefaultOptions(),
          (t.a = c);
      },
      Qu2e: function (e, t, a) {
        a.d(t, "j", function () {
          return r;
        }),
          a.d(t, "l", function () {
            return n;
          }),
          a.d(t, "k", function () {
            return i;
          }),
          a.d(t, "h", function () {
            return c;
          }),
          a.d(t, "b", function () {
            return o;
          }),
          a.d(t, "d", function () {
            return s;
          }),
          a.d(t, "e", function () {
            return l;
          }),
          a.d(t, "i", function () {
            return d;
          }),
          a.d(t, "g", function () {
            return u;
          }),
          a.d(t, "a", function () {
            return p;
          }),
          a.d(t, "f", function () {
            return h;
          }),
          a.d(t, "c", function () {
            return b;
          }),
          a.d(t, "n", function () {
            return f;
          }),
          a.d(t, "m", function () {
            return g;
          });
        var r = 3,
          n = 6,
          i = 8,
          c = "init",
          o = { NO_RULE: r, RULE: n, PAY: i, ERROR_CARD_TYPE: -1 },
          s = 1,
          l = 0,
          d = {
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
          u = 1,
          p = 2,
          h = 3,
          b = {
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
          f =
            "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
          g = {
            appName: "更多权益",
            icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
            benefitTplId: 0,
          };
      },
      Sei9: function (e, t, a) {
        a.d(t, "f", function () {
          return d;
        }),
          a.d(t, "b", function () {
            return u;
          }),
          a.d(t, "c", function () {
            return h;
          }),
          a.d(t, "e", function () {
            return b;
          }),
          a.d(t, "g", function () {
            return f;
          }),
          a.d(t, "d", function () {
            return m;
          }),
          a.d(t, "h", function () {
            return v;
          }),
          a.d(t, "a", function () {
            return y;
          });
        var r = a("Fcif"),
          n = a("zMoS"),
          i = a("v6dD"),
          c = a("3tyi"),
          o = a("rDSc"),
          s = a("a1Mm"),
          l = a("Qu2e"),
          d = (e) => null == e;
        var u = (e, t, a, i) => {
            var {
              diyTemplateList: d = [],
              experienceCard: u,
              diyBenefitList: h,
            } = e;
            e = Object(o.a)(e, [
              "diyTemplateList",
              "experienceCard",
              "diyBenefitList",
            ]);
            var b = [],
              f = Object.keys(
                Object(c.a)(e, [
                  "postage",
                  "discount",
                  "memberPrice",
                  "pointsFeedBack",
                  "paidContent",
                ])
              ),
              g = Object.keys(
                Object(c.a)(e, ["points", "growth", "coupon", "present"])
              ),
              m = [];
            m =
              a && h
                ? h.map((e) => {
                    var t = Object.assign(
                      e.diyTemplate.benefitTemplateExternal,
                      Object(o.a)(e.diyTemplate, "benefitTemplateExternal")
                    );
                    return Object(r.a)({}, t, {
                      benefitId: e.benefitId,
                      termCycle: e.termCycle,
                      resetNum: e.stockNum,
                    });
                  })
                : d.map((e) => {
                    var t = Object.assign(
                      Object(n.a)(e, "benefitTemplateExternal", {}),
                      Object(o.a)(e, "benefitTemplateExternal")
                    );
                    return Object(r.a)({}, t);
                  });
            var v = f
                .map((t) => {
                  if (e[t]) {
                    var r = e[t];
                    return (
                      a
                        ? (((r =
                            "paidContent" === t
                              ? Object.assign(e[t][t + a], i[t])
                              : e[t][t + a]).resetNum = e[t].stockNum),
                          (r.termCycle = e[t].termCycle))
                        : (r.benefitId = e[t].benefitId),
                      (r.key = t),
                      delete e[t],
                      r
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              y = g
                .map((t) => {
                  if (e[t]) {
                    var r = e[t];
                    return (
                      a
                        ? (((r =
                            "present" === t
                              ? Object.assign(e[t][t + a], i[t])
                              : e[t][t + a]).resetNum = e[t].stockNum),
                          (r.termCycle = e[t].termCycle))
                        : (r.benefitId = e[t].benefitId),
                      (r.key = t),
                      "coupon" === t &&
                        (r.total = r.couponList.reduce(
                          (e, t) => e + t.number,
                          0
                        )),
                      delete e[t],
                      r
                    );
                  }
                  return null;
                })
                .filter((e) => !!e),
              O = u;
            return (
              u &&
                a &&
                (O = Object.assign(
                  u.experienceCardTpl,
                  Object(o.a)(u, "experienceCardTpl")
                )),
              u &&
                t !== l.d &&
                b.unshift(Object(r.a)({}, O, { key: "experienceCard" })),
              ((e) =>
                e.map((e) =>
                  Object(r.a)({}, e, {
                    appName: Object(n.a)(e, "benefitPluginInfo.showName", ""),
                    label: p(e),
                    icon: Object(s.a)(
                      Object(n.a)(e, "benefitPluginInfo.icon", "")
                    ),
                  })
                ))((b = b.concat(v).concat(m).concat(y)))
            );
          },
          p = (e) => {
            var t = Object(n.a)(e, "key", ""),
              a = Object(n.a)(e, "benefitPluginInfo.description", "");
            switch (t) {
              case "discount":
                return "" + a + Object(n.a)(e, "discount", 100) / 10 + "折";
              case "experienceCard":
                return "" + a + Object(n.a)(e, "stockNum", 0) + "张";
              case "points":
                return "" + a + Object(n.a)(e, "points", 0) + "个";
              case "pointsFeedBack":
                return "" + a + Object(n.a)(e, "rate", 0) / 10 + "倍";
              case "growth":
                return "" + a + Object(n.a)(e, "growthValue", 0) + "个";
              default:
                return Object(n.a)(e, "benefitPluginInfo.description", "");
            }
          },
          h = function (e, t) {
            return void 0 === t && (t = "YYYY-MM-DD"), Object(i.b)(e, t);
          },
          b = (e) => {
            var t,
              a = {};
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
              a[t] = Object(n.a)(e, t, "");
            });
            var i = getApp().logger.getLogParams(),
              c =
                a.from_params ||
                (i &&
                  (null == i || null == (t = i.context)
                    ? void 0
                    : t.from_params));
            return (
              c &&
                (a = Object(r.a)({}, a, {
                  biz_trace_point_ext: Object(r.a)(
                    {},
                    a.biz_trace_point_ext || {},
                    { from_params: c }
                  ),
                })),
              a
            );
          },
          f = (e, t) => {
            var { grantCycle: a = !1, stockNum: r, resetNum: i } = e,
              c = Object(n.a)(
                e,
                "benefitPluginInfo.showName",
                Object(n.a)(e, "appName", "")
              );
            return a
              ? "权益卡有效期内，每" +
                  { 1: "日", 7: "周", 30: "月", 90: "季度", 365: "年" }[
                    a.termDays
                  ] +
                  "可使用" +
                  e.stockNum +
                  "次" +
                  c +
                  "权益"
              : (!d(r) && !d(i)) || (!d(r) && !t)
              ? "权益卡有效期内，可使用" + r + "次" + c + "权益"
              : "权益卡有效期内，可使用" + c + "权益";
          },
          g = (e) => Object(i.b)(e, "YYYY-MM-DD"),
          m = (e) => Object(i.b)(e, "YYYY-MM-DD HH:mm:ss"),
          v = (e) => {
            switch (e.termType) {
              case 1:
                return "永久有效";
              case 2:
                return g(e.termBeginAt) + " - " + g(e.termEndAt);
              case 4:
                return "领卡后" + e.termDays + "内有效";
              default:
                return "";
            }
          };
        function y(e) {
          return (
            void 0 === e && (e = ""),
            /iphone-x|iPhone11|iPhone13|iPhone14|iPhone12(?!,8>)/i.test(
              e.replace(/\s/g, "-") || ""
            ) || /iPhone14/i.test(e.replace(/\s/g, "") || "")
          );
        }
      },
      gc3r: function (e, t, a) {
        a.d(t, "b", function () {
          return u;
        }),
          a.d(t, "a", function () {
            return p;
          });
        var r = a("Fcif"),
          n = a("jA1y"),
          i = a("vgcL"),
          c = a("2wjL"),
          o = a("u8kV"),
          s = a("rDSc"),
          l = a("8B9M"),
          d = function (e, t) {
            e || (!1 !== t.isNeedShareMore && this.setYZData({ salesman: t }));
          },
          u = (e) => {
            var t = Object(s.a)(Object(r.a)({}, e, { path: e.url }), "url");
            return Object(n.c)(t);
          },
          p = function (e) {
            var {
                scene: t,
                sst: a,
                gst: n,
                getSalesmanData: s = d,
                query: p,
              } = e,
              h = Object(l.a)() || {},
              b = h.getToken() || {},
              { route: f = "", options: g = {} } = Object(o.d)(),
              m = p || g,
              v = c.a.add(f, m),
              y = { gst: (n = n || Object(i.e)(t)), sst: a, sourceUrl: v },
              { yzUserId: O } = b;
            Object(i.f)({
              url: v,
              logParams: h.logger.getLogParams && h.logger.getLogParams(),
              userId: O,
              request: u,
            }),
              Object(i.a)(Object(r.a)({}, y)),
              Object(i.b)({}, s.bind(this));
          };
      },
    }
  )
);
