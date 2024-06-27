"use strict";
var r = require("~/r");
r(
  "0nSr",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "0nSr": function (e, t, a) {
        a.r(t);
        var s = a("Fcif"),
          i = a("rqVN"),
          o = a("6i0Q"),
          n = a("jA1y"),
          r = a("taYb"),
          h = a("kv38"),
          d = a("dWkE"),
          p = a("Eagg"),
          c = a("WOkX"),
          g = a("BoIy"),
          l = a("a1Mm"),
          m = a("0lqJ"),
          u = a("cqgp"),
          v = a("IORD"),
          b = a("ROCX"),
          f = a("AIOl"),
          y = a("Ze2h"),
          w = a("Xm5j"),
          O = a("ycnm"),
          P = a("8GJ+"),
          S = a("tTfU"),
          I = a("5kn2"),
          C = a("gZDa"),
          D = a("JhDH"),
          T = a("xRet"),
          j = a("2wjL"),
          x = getApp(),
          k = new I.c({
            kdtId: x.getKdtId,
            buyerId: x.getBuyerId,
            buildEnv: "weapp",
            runEnv: "weapp",
            shareInfo: {},
            goodsInfo: {},
            shareData: {},
            rightsInfo: {},
            nativeAjax: n.c,
            nativeAjaxUseCdn: x.requestUseCdn,
            nativeMonitor: f.a,
            nativeNavigate: b.m.navigate,
            nativeLogger: function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              return x.logger.log(t);
            },
            nativeYunExtension: C.d,
            path: Object(b.g)().route,
            query: Object(b.g)().options || {},
          });
        Object(i.b)({
          options: { multipleSlots: !0 },
          behaviors: [h.a],
          properties: {
            pageQuery: Object,
            customIcon: { type: Boolean, value: !1 },
            usePagePoster: { type: Boolean, value: !1 },
            hideGoodsPoster: { type: Boolean, value: !0 },
            customData: { type: Object, value: null },
            cube: { type: Array, value: [] },
            special: { type: Boolean, value: !1 },
            needUpdatePath: { type: Boolean, value: !1 },
            useExternalProfit: { type: Boolean, value: !1 },
            getShareOpportunity: { type: String, value: "created" },
            goodsInfo: {
              type: Object,
              value: {},
              observer(e, t) {
                var a = e.id || e.goodsId,
                  s = e.goodsSkuData || {};
                k.update("goodsInfo", e);
                var { getShareOpportunity: i } = this.properties;
                "created" === i &&
                  (a && this.updateCommissionDataById(a, s.list),
                  !e.id || t.id || Object(p.b)() || this.getShareData());
              },
            },
            scenes: { type: String, value: "default" },
            grayName: { type: String, value: "" },
            needBindRelation: { type: Boolean, value: !0 },
          },
          data: {
            cubeVisible: !1,
            shareData: {},
            iconUrl: "",
            showPopup: !1,
            rightsInfo: {},
            commission: 0,
            commissionRange: [],
            hasCommissionRange: !1,
            commissionRangeTextInfo: {},
            iconList: [],
            weappCode: "",
            showWeappCode: !1,
            poster: "",
            featurePosterData: "",
            showFeaturePoster: !1,
            showPoster: !1,
            showPopupOverlay: !0,
            popupBottom: 0,
            showTaxSign: !1,
            showSaveTip: !1,
            signText: "",
            active: 0,
            popupHeight: 0,
            themeMainBgColor: "",
            showGuide: !1,
            guideConfig: [],
            showAssistant: !1,
            isChannels: Object(p.b)(),
            smartTextData: void 0,
            hasBind: !1,
            hasOpenPopup: !1,
            shortLinkPromoteUrl: "",
            personalSpaceAbility: !1,
            isShowGif: !1,
            isWxShareImg: !1,
            hasWxshareRes: !1,
            goodsPosterInfo: void 0,
          },
          attached() {
            if (!Object(p.b)()) {
              k.batchUpdate({
                path: Object(b.g)().route,
                query: Object(b.g)().options,
              });
              var { getShareOpportunity: e, scenes: t } = this.properties;
              this.data.hideGoodsPoster &&
                "created" === e &&
                this.getShareData(),
                1154 !== wx.getLaunchOptionsSync().scene &&
                  t !== O.a &&
                  this.checkShopRights();
            }
          },
          pageLifetimes: {
            show() {
              this.bindRelation();
            },
          },
          ready() {
            this.bindRelation(),
              this.getPopHeight(),
              o.a.getThemeColor("main-bg").then((e) => {
                this.setYZData({ themeMainBgColor: e });
              });
          },
          methods: {
            getPopHeight() {
              var e = this;
              wx.getSystemInfo({
                success(t) {
                  e.setYZData({ popupHeight: 0.9 * t.windowHeight });
                },
              });
            },
            observerShareData(e) {
              var { iconUrl: t } = e;
              this.setYZData({ iconUrl: Object(l.a)(t, "!100x100.jpg") }),
                this.data.shareData.share &&
                  (this.data.hasWxshareRes ||
                    Object(v.a)({ kdtId: x.getKdtId() }).then((e) => {
                      this.setYZData({ isWxShareImg: e, hasWxshareRes: !0 });
                    }),
                  this.data.goodsPosterInfo || this.getGoodsPosterInfo());
            },
            initConfig(e) {
              void 0 === e && (e = {});
              var t = x.getKdtId();
              return k
                .getShopAbility(t, O.c)
                .then((e) => {
                  this.setYZData({ personalSpaceAbility: e });
                })
                .finally(() => {
                  var a = this.formatCubeConfig(e, this.data.cube),
                    s = Object(O.f)({ shareData: e, kdtId: t }),
                    i = this.getIconOptions(a, s);
                  this.setYZData({ iconList: i });
                });
            },
            getIconOptions(e, t) {
              return e.map((e) =>
                Array.isArray(e) ? this.getIconOptions(e, t) : t[e]
              );
            },
            formatCubeConfig(e, t) {
              var a = t.length > 0 ? t : this.getCubeConfigByScenes(),
                {
                  allowMoments: s,
                  allowGoodsRecommend: i,
                  isShoppingGuide: o,
                } = e;
              return (
                o || s || (a = a.filter((e) => !(O.e.indexOf(e) > 0))),
                i || (a = a.filter((e) => !(O.j.indexOf(e) > 0))),
                o && (a = Object(b.k)(a)),
                this.data.personalSpaceAbility || (a = Object(b.d)(a)),
                a
              );
            },
            getCubeConfigByScenes() {
              var { scenes: e, shareData: t } = this.data,
                a = t.isShoppingGuide
                  ? O.g[e] || O.g.default
                  : O.d[e] || O.d.default,
                { weapp: s } = a;
              return s;
            },
            setIcon(e) {
              var t;
              (e.share || e.freedomShare) &&
                (this.iconController =
                  null == (t = new g.a())
                    ? void 0
                    : t.setIcon(this, {
                        priority: 90,
                        height: 48,
                        cb: [
                          (e) => {
                            this.setYZData({ bottom: e + "px" });
                          },
                          (e) => {
                            this.setYZData({ goaway: e });
                          },
                        ],
                      }));
            },
            getShareData() {
              var { goodsInfo: e, grayName: t } = this.data,
                a = { type: "NORMAL", grayName: t };
              e.id && (a.goodsId = e.id);
              var { route: s } = Object(b.g)();
              return (
                Object(f.a)({
                  extra: { path: s, url: "/wscump/salesman/share.json" },
                }),
                Object(n.c)({
                  path: "/wscump/salesman/share.json",
                  query: a,
                  config: { cache: !0, expire: 10 },
                }).then((e) => {
                  var t = r.a.toCamelCase(e);
                  (t.isShoppingGuide = 1 === t.salesmanType),
                    !1 !== e.is_need_share_more &&
                      this.triggerEvent("set-share", { shareData: t }),
                    k.update("shareData", t);
                  var a = t.share || t.freedomShare;
                  return (
                    this.setData({ shareData: t, cubeVisible: a }),
                    this.handleLogViewLog(t),
                    this.observerShareData(t),
                    this.setIcon(t),
                    this.initConfig(t)
                  );
                })
              );
            },
            bindCustomer(e, t) {
              var { route: a, options: s } = Object(b.g)(),
                i = j.a.add(a, s),
                o = Object(b.h)(this.data.scenes);
              return (
                Object(f.a)({
                  extra: {
                    url: "/wscsalesman/bind-customer.json",
                    path: i,
                    sellerFrom: e,
                    guideBindSourceType: o,
                    fromParams: t,
                  },
                }),
                Object(n.c)({
                  path: "/wscsalesman/bind-customer.json",
                  method: "POST",
                  data: {
                    sellerFrom: e,
                    guideBindSourceType: o,
                    fromParams: t,
                    sourceUrl: i,
                  },
                })
              );
            },
            bindRelation() {
              if (!this.data.hasBind) {
                var { options: e } = Object(b.g)(),
                  { sl: t, sls: a, from_params: s } = e,
                  i = t || a;
                i &&
                  this.data.needBindRelation &&
                  (this.changeBindStatus(),
                  this.bindCustomer(i, s).catch(() => {
                    this.bindCustomer(i, s);
                  }));
              }
            },
            changeBindStatus() {
              this.setYZData({ hasBind: !0 });
            },
            checkShopRights() {
              Object(n.c)({
                path: "/wscump/salesman/shop/checkShopRights.json",
              }).then((e) => {
                this.setYZData({ rightsInfo: e }), e.allowMoments;
              });
            },
            checkIcon(e) {
              var t,
                { iconList: a } = this.data;
              return null == a || null == (t = a.flat())
                ? void 0
                : t.some((t) => t.alias === e);
            },
            handlers() {
              var { shareData: e } = this.data,
                t = this.checkIcon("weappLink"),
                a = this.checkIcon("weappHomeLink"),
                s = this.checkIcon("weappFeatureLink"),
                i = (e) => {
                  wx.hideLoading(), e();
                },
                o = [
                  P.b.bind(this),
                  e.isShoppingGuide ? i : P.a.bind(this),
                  t ? this.getWeappLink.bind(this) : i,
                  a ? this.getWeappHomeLink.bind(this) : i,
                  s ? this.getWeappFeatureLink.bind(this) : i,
                  this.getSmartTextData.bind(this),
                  this.getCommissionData.bind(this),
                  this.handleTogglePanel.bind(this),
                  this.checkBeginBoarding.bind(this),
                ];
              return Object(b.b)(o);
            },
            getCommissionData(e) {
              var t = this.data.goodsInfo || {},
                a = t.goodsSkuData || {},
                s = t.id || t.goodsId;
              this.properties.useExternalProfit
                ? (this.setYZData({ commission: t.profit / 100 }), e())
                : s
                ? this.updateCommissionDataById(s, a.list)
                    .then(() => e())
                    .catch(() => e())
                : e();
            },
            updateCommissionDataById(e, t) {
              var a = this.data.goodsInfo || {},
                s = this.data.shareData || {},
                { goodsPrice: i = {} } = a,
                { minPrice: o = 0 } = i;
              return s.isShoppingGuide
                ? k.getShareMoney(e, t, { minPrice: o }).then((e) => {
                    this.setYZData({ commission: e.value / 100 });
                  })
                : k.getShareMoneyRange(e, t).then((e) => {
                    var { maxCommissionStr: t, compatibleCommission: a } =
                        Object(u.a)(e),
                      { profitRange: s } = e;
                    this.setYZData({
                      commissionRange: s,
                      hasCommissionRange:
                        !s.every((e) => 0 == +e) && s.length && t,
                      commissionRangeTextInfo:
                        2 === s.length
                          ? { text: "分享后预计可赚 ", commission: a }
                          : { text: "分享后预计最高赚 ", commission: t },
                    });
                  });
            },
            checkBeginBoarding() {
              Object(n.c)({
                path: "/wscump/salesman/guide/is-success-guide.json",
                data: { type: 14 },
              }).then((e) => {
                e.value ||
                  this.setYZData({
                    guideConfig: Object(S.a)({
                      iconList: this.data.iconList,
                      special: this.data.special,
                    }),
                    showGuide: !0,
                  });
              });
            },
            getShortLink(e) {
              var { next: t, pageUrlParams: a = {}, reqParams: s = {} } = e;
              k.getShortLink(a, s)
                .then((e) => {
                  this.setYZData({ shortLinkPromoteUrl: e.miniProgramUrl }),
                    t();
                })
                .catch(t);
            },
            getWeappLink(e) {
              var { goodsInfo: t } = this.properties,
                { activityType: a, goodsAlias: i, activityAlias: o } = t || {},
                n = { alias: i };
              6 === a &&
                (n = Object(s.a)({}, n, {
                  umpType: "seckill",
                  activityType: "seckill",
                  umpAlias: o,
                })),
                k.update("path", "pages/goods/detail/index"),
                this.getShortLink({ next: e, pageUrlParams: n });
            },
            getWeappFeatureLink(e) {
              this.getShortLink({
                next: e,
                reqParams: { pageTitle: "微页面" },
              });
            },
            getWeappHomeLink(e) {
              this.getShortLink({
                next: e,
                reqParams: { pageTitle: "小程序主页" },
              });
            },
            getSmartTextData(e) {
              var { goodsInfo: t, isShoppingGuide: a } = this.data,
                s = t ? t.id || t.goodsId : "";
              s && !a
                ? k
                    .getSmartText({ goodsId: s })
                    .then((t) => {
                      this.setYZData({ smartTextData: t || {} }), e();
                    })
                    .catch(e)
                : e();
            },
            handleIconTap() {
              if (
                (y.a.reset(D.f.SHOW_PANEL),
                y.a.reset(D.f.DRAW_POSTER),
                "show" === this.properties.getShareOpportunity)
              )
                return (
                  y.a.startRecord(D.f.SHOW_PANEL),
                  wx.showLoading(),
                  this.setYZData({ hasOpenPopup: !0 }),
                  void this.getShareData().then(() => {
                    this.handlers()();
                  })
                );
              this.data.shareData.freedomShare
                ? wx.navigateTo({ url: "/packages/salesman/tutorial/index" })
                : (wx.showLoading(),
                  this.setYZData({ hasOpenPopup: !0 }),
                  this.handlers()());
            },
            handleCert() {
              var { route: e, options: t } = Object(b.g)(),
                a = "/" + e;
              t &&
                ((a += "?"),
                Object.keys(t).forEach((e, s) => {
                  a += s > 0 ? "&" + e + "=" + t[e] : e + "=" + t[e];
                })),
                Object(d.a)("/wscassets/cert/tax/contract", {
                  title: "身份证认证",
                  query: { fromId: 12, returnUrl: decodeURIComponent(a) },
                });
            },
            handleClose() {
              this.setYZData({ showTaxSign: !1 }, () => {
                this.handleTogglePanel();
              });
            },
            handleTogglePanel(e) {
              var t = !this.data.showPopup;
              t &&
                (this.handleLog(O.b.clickShare),
                this.showPopupLog(O.b.showPanel)),
                this.setYZData({
                  showPopup: t,
                  showPopupOverlay: t || this.data.showPopupOverlay,
                }),
                "function" == typeof e && e();
            },
            handleLog(e) {
              var { scenes: t, shareData: a } = this.data,
                { seller: s } = a;
              Object(f.b)(e, {
                sl: s,
                scenes: t,
                salesman_type: a.salesmanType,
              });
            },
            showPopupLog(e) {
              var { shareData: t } = this.data;
              y.a.endRecordAndReportLog(D.f.SHOW_PANEL, {
                logData: e,
                params: { salesman_type: t.salesmanType },
              });
            },
            handleLogViewLog(e) {
              void 0 === e && (e = {});
              var { share: t } = e;
              t && this.handleLog(O.b.salesMoneyView);
            },
            handleCopyWeappLink() {
              var { weappUrl: e } = this.data.goodsInfo,
                { seller: t, salesmanType: a } = this.data.shareData;
              Object(f.b)(O.b.copyWeappLink, {
                sl: t,
                salesman_type: a,
                weappUrl: e,
                shortLinkPromoteUrl: this.data.shortLinkPromoteUrl,
              }),
                this.data.shortLinkPromoteUrl
                  ? wx.setClipboardData({
                      data: this.data.shortLinkPromoteUrl,
                      success() {
                        wx.showToast({ title: "复制成功", icon: "none" });
                      },
                    })
                  : wx.showToast({ title: "复制失败", icon: "none" });
            },
            handleClickIcon(e) {
              var { alias: t, config: a } = e.currentTarget.dataset,
                { seller: s, salesmanType: i } = this.data.shareData;
              if (
                (this.handleTogglePanel(),
                ["weappLink", "weappHomeLink", "weappFeatureLink"].includes(t))
              )
                this.handleCopyWeappLink();
              else if ("goodsPoster" === t || "tuwenPoster" === t)
                this.genPoster();
              else if ("link" === a.type) {
                var o,
                  n,
                  { goodsActivityInfo: r } = this.data.goodsInfo;
                Object(f.b)(O.b.clickLinkIcon, {
                  sl: s,
                  salesman_type: i,
                  title: a.title,
                });
                var h =
                  "promote" === a.alias
                    ? "/packages/shop/salesman/promote/index?alias=" +
                      (null == (o = this.data.goodsInfo) ? void 0 : o.alias) +
                      "&itemId=" +
                      (null == (n = this.data.goodsInfo) ? void 0 : n.id) +
                      "&activityAlias=" +
                      (r.activityAlias || "") +
                      "&activityType=" +
                      (r.activityType || "") +
                      "&activityId=" +
                      (r.activityId || "") +
                      "&umpType=" +
                      (r.activityType || "")
                    : a.weappUrl;
                wx.navigateTo({ url: h });
              } else this[t] && this[t]();
            },
            handleClickMoments() {
              b.m.navigate({ url: "/packages/salesman/zone/home/index" });
            },
            handleLinkCenter() {
              b.m.navigate({
                url:
                  "/packages/salesman/salesman-center/index?dsKdtId=" +
                  this.data.shareData.dsKdtId,
              });
            },
            genPageCode(e) {
              var {
                weappCode: t,
                customData: a,
                goodsInfo: i = {},
              } = this.data;
              return new Promise((o) => {
                if (t) return o(t);
                var { route: n, options: r } = Object(b.g)();
                this.data.pageQuery && Object.assign(r, this.data.pageQuery),
                  a &&
                    (a.path && ((n = a.path), delete a.path),
                    (r = Object(s.a)({}, r, a))),
                  e && (r.share_cmpt = e),
                  i.path && (n = i.path.split("?")[0]),
                  o(b.f.call(this, n, r));
              });
            },
            code() {
              var { seller: e, salesmanType: t } = this.data.shareData;
              if (
                (Object(f.b)(O.b.miniprogram, { sl: e, salesman_type: t }),
                wx.showToast({ title: "获取小程序码中", icon: "loading" }),
                this.data.weappCode)
              )
                return wx.hideToast(), void this.handleToggleWeappCode();
              this.genPageCode("miniprogram").then((e) => {
                this.setYZData({ weappCode: Object(l.a)(e) }),
                  this.handleToggleWeappCode();
              });
            },
            getFeatureAlias() {
              return new Promise((e) => {
                var t = Object(b.g)().route,
                  { list: a = [] } = x.getNavConfig();
                a.length
                  ? e(this.getAliasFromNav(a, t))
                  : x
                      .getNavConfigSync()
                      .then((a) => {
                        var { list: s = [] } = a || {};
                        e(this.getAliasFromNav(s, t));
                      })
                      .catch((t) => e(""));
              });
            },
            getAliasFromNav(e, t) {
              void 0 === t && (t = "");
              var { alias: a } = Object(b.g)().options || {},
                s = a,
                i = Object(m.a)();
              return (
                e.some((e, a) => {
                  var { page_path: o, alias: n } = e;
                  return (
                    (t === o ||
                      t === o.replace(/^pages(-|\/)/, "packages/") ||
                      i === a) &&
                    ((this.tabbarIndex = a), n && (s = n), !0)
                  );
                }),
                s
              );
            },
            getPageType() {
              var e,
                t = D.c.Home,
                a = Object(b.g)().route;
              T.d.test(a) &&
                (a = null == (e = Object(b.g)().attachedPage) ? void 0 : e.is);
              return (
                Object.keys(D.g).some((e) =>
                  D.g[e].some((s) => !!s.test(a) && ((t = e), !0))
                ),
                D.e[t]
              );
            },
            getFeatureParams(e) {
              var t = { pageType: this.getPageType(), alias: e || "" };
              return (
                t.pageType !== D.e[D.c.Other] ||
                  e ||
                  (t = { pageType: D.e[D.c.Home], alias: "" }),
                t
              );
            },
            featurePoster() {
              var { shareData: e } = this.data,
                { seller: t, salesmanType: a } = e;
              Object(f.b)(O.b.poster, {
                sl: t,
                posterType: "featurePoster",
                salesman_type: a,
              }),
                this.data.featurePosterData
                  ? this.setYZData({
                      featurePosterData: this.data.featurePosterData,
                      showFeaturePoster: !0,
                    })
                  : (wx.showLoading(),
                    this.getFeatureAlias().then((e) => {
                      var t = this.getFeatureParams(e),
                        a = { alias: t.alias, page: Object(b.g)().route };
                      if (T.d.test(a.page)) {
                        var s = (getApp().globalData.tabbarOriginList || [])[
                            Object(m.a)()
                          ],
                          { pagePath: i } = s || {};
                        a.page = i || a.page;
                      }
                      k.getFeaturePoster(t, a)
                        .then((e) => {
                          var { value: t } = e;
                          wx.hideLoading(),
                            this.setYZData({
                              featurePosterData: t,
                              showFeaturePoster: !0,
                            });
                        })
                        .catch(() => {
                          wx.hideLoading(),
                            wx.showToast({
                              title: "生成海报失败",
                              icon: "error",
                            });
                        });
                    }));
            },
            handleToggleWeappCode() {
              var e = !this.data.showWeappCode;
              if (
                (this.setYZData({ showWeappCode: e }), !this.data.showWeappCode)
              )
                return this.tryOpenAssistantPop();
            },
            handleToggleSaveTip() {
              if (
                (this.setYZData({ showSaveTip: !this.data.showSaveTip }),
                !this.data.showSaveTip)
              )
                return this.tryOpenAssistantPop();
            },
            handleCompleteGuide() {
              this.setYZData({ showGuide: !1 }),
                Object(n.c)({
                  path: "/wscump/salesman/guide/add-success-guide.json",
                  method: "POST",
                  data: { type: 14 },
                });
            },
            genPoster() {
              wx.showToast({ title: "正在生成", icon: "loading" });
              var { usePagePoster: e, shareData: t } = this.data,
                { seller: a, salesmanType: s } = t;
              e
                ? (Object(f.b)(O.b.poster, {
                    sl: a,
                    posterType: "goodsPoster",
                    salesman_type: s,
                  }),
                  this.triggerEvent("share-card"))
                : (Object(f.b)(O.b.poster, {
                    sl: a,
                    posterType: "salesmanPost",
                    salesman_type: s,
                  }),
                  this.showPoster());
            },
            showPoster() {
              if (this.tuwenPoster)
                return (
                  this.setYZData({ poster: this.tuwenPoster }, () =>
                    wx.hideToast()
                  ),
                  void this.handleTogglePoster()
                );
              this.genPageCode("poster").then((e) => {
                w.b
                  .call(this, e)
                  .then(w.a.bind(this))
                  .then((e) => {
                    this.setYZData({ poster: e }, () => wx.hideToast()),
                      this.handleTogglePoster(),
                      (this.tuwenPoster = e);
                  });
              });
            },
            handleTogglePoster() {
              var e = !this.data.showPoster;
              this.setYZData({ showPoster: e });
            },
            zonePoster() {
              if (
                (wx.showToast({ title: "正在生成", icon: "loading" }),
                this.zonePosterUrl)
              )
                return (
                  this.setYZData({ poster: this.zonePosterUrl }, () =>
                    wx.hideToast()
                  ),
                  void this.handleTogglePoster()
                );
              var e = x.getKdtId(),
                {
                  sl: t,
                  salesmanAvatar: a,
                  nickname: i,
                  backgroundUrl: o,
                } = this.data.rightsInfo;
              Object(b.c)({
                type: "moment",
                page: "pages/common/blank-page/index",
                scene: JSON.stringify(
                  Object(s.a)(
                    {
                      kdtId: e,
                      page: "packages/salesman/zone/home/index",
                      guestKdtId: e,
                    },
                    Object(c.c)({ sls: t })
                  )
                ),
                avatar: a,
                nickname: i,
                backgroundImg: o,
                width: 292,
                height: 422,
              }).then((e) => {
                Object(b.l)(e.value)
                  .then((e) => {
                    this.setYZData({ poster: e }, () => wx.hideToast()),
                      this.handleTogglePoster(),
                      (this.zonePosterUrl = e);
                  })
                  .catch((e) => {
                    wx.showToast({
                      title: e || "保存失败，请检查保存到相册的权限",
                      icon: "error",
                    });
                  });
              });
            },
            handleCloseFeaturePoster() {
              this.setYZData({ showFeaturePoster: !1 });
            },
            share() {
              var { seller: e, salesmanType: t } = this.data.shareData;
              Object(f.b)(O.b.nativeCustom, { sl: e, salesman_type: t }),
                this.setYZData(
                  { showPopup: !1, showPopupOverlay: !1 },
                  { immediate: !0 }
                );
            },
            publishSuccess(e) {
              var t = Object(b.j)(e.detail);
              this.share(), this.setYZData({ showSaveTip: !0, status: t });
            },
            tryOpenAssistantPop() {
              return Object(n.c)({
                path: "/wscsalesman/operation/salesman-aide/isNeedGuide.json",
                data: { isForCenter: !1 },
                method: "POST",
              }).then((e) => {
                var { needGuide: t } = e;
                t && this.setYZData({ showAssistant: !0 });
              });
            },
            closeAssistantPop() {
              this.setYZData({ showAssistant: !1 });
            },
            changeTab(e) {
              var { detail: t = {} } = e;
              1 === t.index &&
                "生成海报" === t.title &&
                y.a.startRecord(D.f.DRAW_POSTER);
            },
            getGoodsPosterInfo() {
              C.c
                .bind(this)()
                .then((e) => {
                  this.setYZData({ goodsPosterInfo: e });
                });
            },
          },
        });
      },
      "3mrM": function (e, t, a) {
        t.a = class {
          constructor(e) {
            (this.timeCache = {}), (this.logFn = e);
          }
          startRecord(e) {
            void 0 === e && (e = "default"),
              this.timeCache[e] || (this.timeCache[e] = {}),
              (this.timeCache[e].startTime = Date.now());
          }
          endRecordAndReportLog(e, t) {
            this.endRecord(e), this.reportLog(e, t);
          }
          endRecord(e) {
            void 0 === e && (e = "default"),
              this.timeCache[e] && this.timeCache[e].startTime
                ? (this.timeCache[e].timeDifference =
                    Date.now() - this.timeCache[e].startTime)
                : (this.timeCache[e] = {});
          }
          reportLog(e, t) {
            void 0 === e && (e = "default"),
              this.timeCache[e] || (this.timeCache[e] = {}),
              this.logFn(this.timeCache[e].timeDifference || 0, t),
              this.reset(e);
          }
          reset(e) {
            this.timeCache[e] = {};
          }
        };
      },
      "5tio": function (e, t, a) {
        a.d(t, "a", function () {
          return o;
        });
        var s = a("8B9M"),
          i = Object(s.a)(),
          o = (e) => {
            var t = (i.logger.getGlobal() || {}).user || {},
              a = { is_share: 1, share_cmpt: e };
            return t.uuid && (a.from_uuid = t.uuid || ""), a;
          };
      },
      IORD: function (e, t, a) {
        var s = a("9ZMt"),
          i = a("HbRL"),
          o = a("MLLI"),
          n = a("0hwI");
        t.a = () =>
          new Promise((e, t) => {
            try {
              !(function () {
                var { SDKVersion: e } = Object(o.b)();
                return (
                  Object(i.a)(e, "3.2.5") >= 0 &&
                  !!s.default.$native.showShareImageMenu
                );
              })()
                ? e(!1)
                : n.a
                    .get({
                      url: "/wscshop/showcase/share/useWxImageShare.json",
                      data: a,
                    })
                    .then((t) => {
                      e(t);
                    })
                    .catch(() => {
                      e(!1);
                    });
            } catch (e) {
              t(e);
            }
            var a;
          });
      },
      VQj9: function (e, t, a) {
        t.a = (e) =>
          new Promise((t, a) => {
            wx.getSetting({
              success: (s) => {
                s.authSetting[e]
                  ? t()
                  : wx.authorize({ scope: e, success: t, fail: a });
              },
              fail: a,
            });
          });
      },
      WmJz: function (e, t, a) {
        a.d(t, "a", function () {
          return d;
        }),
          a.d(t, "b", function () {
            return p;
          });
        a("Fcif");
        var s = a("Sd3C"),
          i = a("Yt9W"),
          o = (a("2wjL"), a("8B9M")),
          n = a("5tio"),
          r = Object(n.a)("poster");
        function h(e, t, a) {
          var s = Object(o.a)(),
            i = s.logger;
          s.carmen({
            api: "youzan.shop.weapp.codeimage/1.0.0/convert",
            method: "POST",
            data: { mimeType: "image/png", base64Str: "base64," + e },
            success: (e) => {
              var a = e.attachment_url || "";
              "string" == typeof a && (a = a.replace(/^http:/, "https:")), t(a);
            },
            fail: (t) => {
              i.requestError({
                alert: "warn",
                message: "小程序码转换失败",
                response: "err: " + JSON.stringify(t),
                request: { options: { base64Str: e } },
              }),
                a("小程序码地址获取失败");
            },
          });
        }
        function d(e, t, a) {
          void 0 === t && (t = {});
          var n = Object(o.a)(),
            r = i.b.getDCPS(),
            h = n.getOfflineId(),
            { chainStoreInfo: d = {} } = n.getShopInfoSync(),
            { isMultiOnlineShop: p } = d,
            g = p ? n.getHQKdtId() : n.getKdtId(),
            l = {
              kdtId: (a = a || (n.getAppKdtId && n.getAppKdtId()) || g),
              page: e,
              guestKdtId: n.getKdtId(),
            };
          return (
            Object.assign(l, t),
            t.nostoreid || Object.assign(l, { dcPs: r, offlineId: h }),
            (t = {
              scene: encodeURIComponent(JSON.stringify(l)),
              page: "pages/common/blank-page/index",
              kdtId: a,
              sid: n.getSessionId(),
              isWeapp: 1,
              hyaLine: t.hyaLine ? 1 : 0,
            }),
            Object(s.a)({
              origin: "h5",
              query: t,
              pathname: "/v3/weapp/ultra-code.png",
            }).then((e) => c(e))
          );
        }
        function p(e, t, a) {
          void 0 === t && (t = {});
          var s = Object(o.a)(),
            n = s.logger,
            { isYouzanApp: d } = s.globalData,
            p = i.b.getDCPS(),
            c = s.getOfflineId(),
            { chainStoreInfo: g = {} } = s.getShopInfoSync(),
            { isMultiOnlineShop: l } = g,
            m = l ? s.getHQKdtId() : s.getKdtId(),
            u = {
              kdtId: (a =
                a || (s.getAppKdtId && s.getAppKdtId()) || (d ? 40419900 : m)),
              page: e,
              guestKdtId: t.dsKdtId || s.getKdtId(),
            };
          return (
            Object.assign(u, t, r),
            t.nostoreid || Object.assign(u, { dcPs: p, offlineId: c }),
            new Promise((e, i) => {
              s.request({
                data: {
                  kdtId: a,
                  page: "pages/common/blank-page/index",
                  query: JSON.stringify(u),
                },
                method: "POST",
                path: "/v3/weapp/ultra-code.json",
              })
                .then((a) => {
                  if (!a.image_base64)
                    return (
                      n.requestError({
                        alert: "warn",
                        message: "获取小程序码失败",
                        response: "res: " + JSON.stringify(a),
                        request: { options: t },
                      }),
                      i("获取小程序码失败")
                    );
                  h(a.image_base64 || "", e, i);
                })
                .catch((e) => {
                  n.requestError({
                    alert: "warn",
                    message: "获取小程序码失败",
                    response: "err: " + JSON.stringify(e),
                    request: { options: t },
                  }),
                    i("获取小程序码失败");
                });
            })
          );
        }
        function c(e) {
          var t = Object(o.a)();
          return new Promise((a, s) => {
            t.downloadFile({
              url: e,
              success(e) {
                var { tempFilePath: t, header: i } = e;
                if (
                  i &&
                  !/image/.test(
                    i["content-type"] || i["Content-Type"] || i.contentType
                  )
                )
                  return s("获取图片失败");
                a(t);
              },
              fail: s,
            });
          });
        }
      },
      cqgp: function (e, t, a) {
        var s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, a = 1, s = arguments.length; a < s; a++)
                for (var i in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
        t.a = function (e) {
          var t = e.profitRange,
            a = void 0 === t ? [] : t,
            i = e.commissionSendType,
            o = void 0 === i ? 0 : i,
            n = e.customPointsName,
            r = void 0 === n ? "积分" : n,
            h = e.commissionConfigDTO,
            d = a[0],
            p = a[1],
            c = (function (e) {
              var t = e.sendType,
                a = e.pointsName,
                s = e.config,
                i = e.maxCommission,
                o = e.minCommission,
                n = !!t;
              if (n && s) {
                var r = s.everyMoneyFen,
                  h = void 0 === r ? 0 : r,
                  d = s.points,
                  p = void 0 === d ? 0 : d;
                (i = parseInt(String(Math.floor(i / h) * p), 10)),
                  (o = parseInt(String(Math.floor(o / h) * p), 10));
              } else (i /= 100), (o /= 100);
              return {
                maxCommissionStr: n ? "" + i + a : "¥" + i,
                minCommissionStr: n ? "" + o + a : "¥" + o,
                maxCommissionAmount: i,
                minCommissionAmount: o,
              };
            })({
              sendType: o,
              pointsName: r,
              config: h,
              maxCommission: (p = p || d),
              minCommission: d,
            }),
            g = c.maxCommissionStr,
            l = c.minCommissionStr,
            m = c.maxCommissionAmount,
            u = m !== c.minCommissionAmount,
            v = {
              commissionText: "分享后最高赚" + g,
              commissionRangeText: "分享后预计可赚 " + l + " - " + g,
              commissionRange: a,
              maxCommission: m,
              unit: r,
              maxCommissionStr: m > 0 ? g : "",
              isMultiCommission: u,
            };
          return s(s({}, v), {
            compatibleCommissionText: u
              ? v.commissionRangeText
              : v.commissionText,
            compatibleCommission: u ? l + " - " + g : g,
          });
        };
      },
      kv38: function (e, t, a) {
        var s = a("8B9M"),
          i = Object(s.a)();
        t.a = Behavior({
          data: {
            popupBottom: 0,
            noSafeBottom: 0,
            authorizePopupCustomStyle: "",
            safeBottom: "iPhone-X" === i.deviceType,
          },
          attached() {
            i.isSwitchTab("", !0).then((e) => {
              e &&
                this.setData({
                  popupBottom: 49,
                  authorizePopupCustomStyle: "",
                  noSafeBottom: this.data.safeBottom ? 83 : 49,
                });
            });
          },
        });
      },
      sTle: function (e, t, a) {
        var s = a("WmJz");
        a.d(t, "a", function () {
          return s.a;
        }),
          a.d(t, "b", function () {
            return s.b;
          });
      },
    }
  )
);
