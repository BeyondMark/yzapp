"use strict";
(exports.ids = [44]),
  (exports.modules = {
    "00nS": function (e, t) {
      e.exports = {
        d: "featurePageBgColor;4;isWebviewFeature;4;isFromTimeline;4;copyrightBgColor;4;themeCSS;4;isHomePage;4;buyButtonStyle;4",
        e: "share:show",
        el: "",
        w: "",
        wc: "NavigationBar;ShowcaseContainer;TopNav;Footer;ShopTopBar",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "6Nk6": function (e, t, a) {},
    "8FAH": function (e, t, a) {},
    Dzdx: function (e, t) {
      e.exports = {
        d: "showCoverAd;4;isEnterShop;4;preLoadImages;4;homepageGray;4;isHomePage;4;featurePageHide;4;alias;4;kdtId;4;isFromTimeline;4;isWebviewFeature;4;webviewFeatureUrl;4;timelineSnapshotInfo;4;usePreloadWebviewTicket;4",
        e: "",
        el: "",
        w: "",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "coverAdHide;coverAdShow;onWebviewMessage",
        c: "",
        cc: "",
      };
    },
    "FJ+d": function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("cuNv"),
        s = a.n(o);
      class i {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      i.widgets = { Main: s.a };
    },
    JAMj: function (e, t, a) {
      a.d(t, "a", function () {
        return re;
      });
      var o = a("eijD"),
        s = a("Fcif"),
        i = a("9ZMt"),
        r = a("JQZX"),
        n = a("2wjL"),
        c = a("rDSc"),
        l = a("DXKY"),
        d = a("Tewj"),
        h = a("zMoS"),
        g = a("Sipi"),
        p = a("TO+A"),
        u = a("0+Ak"),
        m = a("US/N");
      class b {
        ajax(e) {
          var { url: t, data: a = {}, errorMsg: o = "", query: i = {} } = e,
            { header: r = {} } = e;
          return (
            (r = Object(s.a)({ "content-type": "application/json" }, r)),
            new Promise((n, c) => {
              Object(m.default)(
                Object(s.a)({}, e, {
                  origin: "h5",
                  path: t,
                  header: r,
                  data: a,
                  query: i,
                  withCredentials: !0,
                })
              )
                .then((e) => n(e))
                .catch(function (e) {
                  return (
                    void 0 === e && (e = {}),
                    /request:/.test(e.msg || "") &&
                      (e = Object(s.a)({}, e, { msg: "网络错误" })),
                    302 === e.code
                      ? c(e)
                      : c(e.msg || "string" == typeof e ? e : o)
                  );
                });
            })
          );
        }
        jsonp(e) {
          return this.ajax(Object(s.a)({ dataType: "jsonp" }, e));
        }
      }
      ["get", "post"].forEach((e) => {
        b.prototype[e] = function (t) {
          return this.ajax(Object(s.a)({ method: e }, t));
        };
      });
      var f = new b(),
        v = a("Na6L"),
        w = getApp();
      var x = { weapp: 2, ant: 5, qq: 6 },
        S = { menu: "native_wechat", button: "native_custom" },
        y = "homepage",
        P = "micropage",
        I = [4, 5, 7, 8, 9, 14, 16, 17, 85, 91, 106],
        _ = 83,
        C = 1513,
        D = [17, 85, 91],
        T = ["goods", "tag_list_left", "tag_list_top"],
        k = a("SVbq"),
        O = a("lRMv"),
        F = a("kjqZ"),
        j = getApp(),
        A = (e) => {
          var t;
          return (null == (t = e.env.router) ? void 0 : t.route) || e.env.route;
        },
        L = (e) =>
          f.get({
            url: "/wscdeco/homepage-detail.json",
            query: e,
            config: { cache: !0 },
          }),
        H = (e) =>
          f.get({
            url: "/wscdeco/feature-detail.json",
            query: e,
            config: { cache: !0 },
          }),
        M = (e) => {
          var t;
          return {
            stage: 16,
            tee_route:
              (null == (t = e.env.router) ? void 0 : t.route) || e.env.route,
            check_multi_store: 1,
            close_chainstore_webview_limit: !0,
            check_old_home: 1,
          };
        },
        N = (e, t, a) => {
          var { scene: o } = i.default.$native.getLaunchOptionsSync();
          if (
            (j.trigger("home_dashboard_com_loaded", { f: "error_api" }),
            1154 !== o)
          )
            if ("multistore need user info" !== e.code) {
              if (
                !t.hasEnterShop ||
                ("chainstore need enter homepage" !== e.code &&
                  "chainstore check relation fail" !== e.code)
              ) {
                if (e && 302 === e.code) {
                  F.a.end({ name: "首页页面渲染", type: "finish" });
                  var { data: s = {} } = e,
                    { location: r = "" } = s;
                  r &&
                    /^(\/?)pages|packages/.test(r) &&
                    ("/" !== r.slice(0, 1) && (r = "/" + r),
                    t.env.getQueryAsync().then((e) => {
                      (r = n.a.add(r, e)),
                        i.default.navigate({
                          url: r,
                          type: r.startsWith("/pages/home/dashboard")
                            ? "reLaunch"
                            : "redirectTo",
                        });
                    }));
                } else
                  Object(k.k)("w", e),
                    t.logger.log({
                      name: "微页面请求失败",
                      alert: "warn",
                      detail: { global: j.globalData, res: e },
                    }),
                    i.default.$native.showModal({
                      title: "获取信息失败",
                      content: "是否重新加载页面",
                      success: (e) => {
                        var { route: a } = t.env;
                        (a && "/" === a[0]) || (a = "/" + a),
                          e.confirm &&
                            t.env.getQueryAsync().then((e) => {
                              var t = n.a.add(a, e);
                              i.default.$native.reLaunch({ url: t });
                            });
                      },
                    });
              } else {
                var c = getCurrentPages() || [],
                  {
                    route: l,
                    options: d = {},
                    __wxWebviewId__: h,
                  } = c[c.length - 1] || {},
                  g = n.a.add("/" + l, d),
                  p = {
                    src: n.a.add(
                      "https://h5.youzan.com/wscshop/common/error/not-exist",
                      {
                        kdt_id: j.getKdtId(),
                        type: "feature",
                        redirect_url: g,
                      },
                      !0
                    ),
                    title: "页面创建中/不存在",
                  };
                if (
                  j.isChainStoreSync() &&
                  j.getEnterCacheConfig("onAppRoutePadding")
                )
                  return;
                i.default.navigate({
                  type: "redirectTo",
                  url: n.a.add("/pages/common/webview-page/index", p, !0),
                });
              }
            } else i.default.$native.startPullDownRefresh();
        },
        B = (e, t, a, o, i) => {
          var r = M(e),
            c = a || !o,
            l = c
              ? Object(s.a)(
                  { platform: t, fetchSepHqStoreDetail: a ? 1 : 0 },
                  r,
                  {
                    version_control: JSON.stringify({
                      sync_goods: 1,
                      use_native_feature_page: 1,
                      feature_page_path: A(e),
                    }),
                  }
                )
              : Object(s.a)({ alias: o }, r, {
                  version_control: JSON.stringify({
                    use_native_feature_page: 1,
                    feature_page_path: A(e),
                  }),
                }),
            d = (t) => (c ? L : H)(t).catch((t) => N(t, e));
          return ((t) => (
            (e.hasEnterShop = !0),
            ((e, t, a, o) => {
              var i = Promise.resolve();
              if (
                !Object(k.z)() ||
                !e.isHomePage ||
                j.getEnterCacheConfig("hqHomeToOtherHome")
              ) {
                var [r] = e.process.invoke("autoEnterShop", t, {
                  redirectUrl: n.a.add(A(e), t),
                  chainBizType: e.isHomePage ? k.a.HOME : k.a.COMMON,
                  needAuthProtocol: !0,
                });
                i = r;
              }
              return i.then(
                (e) => (
                  Object(O.h)(), o(Object(s.a)({}, a, e ? { kdt_id: e } : {}))
                )
              );
            })(e, i, t, d)
          ))(l);
        },
        E = a("Y28S"),
        U = a("mztD"),
        W = a("Mqxx"),
        K = a("xRet"),
        q = a("0lqJ");
      function R() {
        getApp()
          .getShopConfigData()
          .then((e) => {
            e &&
              1 == +e.record_buyer_gps &&
              (wx.navigateTo({ url: "/packages/retail/gps-location/index" }),
              wx.stopPullDownRefresh());
          });
      }
      var z = a("8mzt"),
        V = getApp(),
        G = (e) => {
          try {
            var { level: t = "info", message: a, logKey: o, extra: i } = e,
              { needPointSwitch: r, wscHomeRequestId: n } = V.globalData;
            r &&
              z.a.log({
                appName: "wsc-h5-decorate",
                logIndex: o,
                level: t,
                message: n + " -- " + a,
                extra: Object(s.a)({}, i),
              });
          } catch (e) {}
        },
        J = getApp(),
        Q = a("GFyo"),
        $ = null;
      function Z() {
        var e = $;
        if (
          (e ||
            (e = (function () {
              var e = null;
              try {
                e = Object(g.b)("tee-feature-cache") || {};
              } catch (e) {}
              return e;
            })()),
          e && e.value)
        ) {
          var t = +new Date() / 1e3;
          if ($ && "number" == typeof $.expireTime && t < $.expireTime)
            return e.value;
          ($ = null), Object(Q.g)("tee-feature-cache", null);
        }
        return null;
      }
      var Y = a("/duV"),
        X = Object(u.b)({ type: u.a.DEFAULT }),
        ee = getApp(),
        te = /\/packages|pages\/(ext-)?home\/dashboard\/index/,
        ae = /\/packages|pages(\/home)?\/tab\/(one|two|three)/,
        { isRetailApp: oe } = ee.globalData,
        se = ee.isChainStoreSync(),
        ie = () => {
          if ("function" == typeof getCurrentPages) {
            var e = getCurrentPages();
            return e && e.length ? e[e.length - 1] || {} : null;
          }
        };
      class re {
        constructor(e) {
          var t = this;
          (this.toTimeline = () => {
            (this.ctx.data.isFromTimeline = !0),
              (this.ctx.data.featureComLoaded = !0),
              this.logWxMonitorEnd({ type: "finish" });
          }),
            (this.setShowLoading = () => {
              this.ctx.data.isShowLoading = Object(g.b)(
                "home_is_show_loading_first"
              );
            }),
            (this.handleDashboardComLoadedCb = (e) => {
              if (
                (this.ctx.data.featureComLoaded ||
                  (this.logWxMonitorEnd({ type: "finish" }),
                  this.closeFeatureLoading()),
                !this.hummerLog)
              ) {
                var t,
                  a,
                  o,
                  i,
                  r,
                  n,
                  c,
                  l = "home-dashboard";
                se &&
                  k.A.get("needLbsAuth") &&
                  (k.A.set("needLbsAuth", null),
                  (l = "home-dashboard-invalid"));
                var d = Object(s.a)(
                  {
                    start: this._h_l,
                    diff: Date.now() - this._h_l,
                    isPre: this._h_is_pre,
                    sholudPre: this._h_s_pre,
                    checkLog: this.checkHummerLog.bind(this),
                    quality:
                      null == (t = this.ctx) ||
                      null == (a = t.data) ||
                      null == (o = a.extraData)
                        ? void 0
                        : o.decorateImageQuality,
                  },
                  e
                );
                this._h_d && (d.dataDiff = Date.now() - (this._h_d || 0)),
                  (null == (i = this.ctx) ||
                    null == (r = i.data) ||
                    !r.isWebviewFeature) &&
                    (null == (n = this.ctx.hummer) ||
                      null == (c = n.mark) ||
                      null == c.log ||
                      c.log({
                        tag: l,
                        scene: ["appLaunch", "route"],
                        extra: d,
                      }));
              }
              this.hummerLog = !0;
            }),
            (this.handleChainStoreKdtIdChange = () => {
              if (
                (!ee.globalData.homeDetailPromise || !this.isHomePage) &&
                se
              ) {
                if (this.__pageKdtId === ee.getKdtId())
                  return void this.updateTitleAndNavConfig();
                var e = getCurrentPages() || [],
                  { route: t, __wxWebviewId__: a } = e[e.length - 1] || {};
                this.getRealRouter() === t && this.__wxWebviewId__ === a
                  ? this.fetchFeatureDetail()
                  : (this.__needUpdateHomepage = !0);
              }
            }),
            (this.getSalesmanParamsObject = (e) => {
              var { sl: t, sls: a, oldFromParamsData: o } = e,
                s = ee.getKdtId();
              return Object(E.c)({
                sl: t,
                sls: a,
                oldFromParamsData: o,
                kdtId: s,
              });
            }),
            (this._h_l = Date.now()),
            (this.ctx = e.ctx),
            (this.ctx.data.pageKey = e.pageKey);
          try {
            this.ctx.hummer.setExtra({ is_retail_kq: !1, is_chain: se });
          } catch (e) {}
          F.a.start({ name: "首页页面渲染", timeout: 10 }),
            (this.isHomePage = te.test(this.getRealRouter()));
          var a,
            o = ie();
          o && ae.test(o.route)
            ? (this.isTabPage = !0)
            : (this.isTabPage = ae.test(
                null == (a = this.ctx.env.router) ? void 0 : a.route
              ));
          this.ctx.isHomePage = this.isHomePage;
          var { scene: r } = i.default.$native.getLaunchOptionsSync();
          (this.ctx.data.isShowLoading = !0),
            d.default.once(k.d.lbs_gt, this.setShowLoading),
            (this.ctx.data.isShowStoreInfo = !0),
            (this.hummerLog = !1),
            this.initEvents(),
            this.isHomePage && this.initCoverAd(r),
            (this.ctx.data.tableBooking = !1);
          var n = ee.globalData.homeDetailPromise && this.isHomePage;
          (this.cacheInfo = {
            useCache: !1,
            cacheValueUdateTime: "",
            useApiData: !1,
          }),
            1154 !== r && this.initFeatureDataWithPreLoad(n),
            this.initProcess(),
            this.getQuery().then(function (e) {
              void 0 === e && (e = {}), (t.options = e);
              var { shareTag: a, crmFromScenePlanId: o, alias: i } = e;
              if (
                ((t.ctx.data.isTabPage = t.isTabPage),
                (t.ctx.data.isHomePage = t.isHomePage),
                (t.ctx.data.copyrightBgColor = "#f9f9f9"),
                (t.ctx.data.shareTag = a),
                1154 !== r)
              )
                o &&
                  ((t.ctx.data.showSceneMarketSubscribe = !0),
                  (t.ctx.data.crmFromScenePlanId = o)),
                  t.getFeatureAlias().then((e) => {
                    (t.ctx.data.kdtId = ee.getKdtId() || 0),
                      e && (t.ctx.data.alias = e),
                      n || t.fetchFeatureDetail(),
                      t.ctx.data.isHomePage &&
                        wx.getStorage({
                          key: "gps_location",
                          success: (e) => {
                            var { data: t } = e;
                            (!t || Date.now() + 18e5 > t.expire) && R();
                          },
                          fail: R,
                        });
                  });
              else {
                var { kdt_id: c, cacheKey: l, alias: d } = e || {};
                if (((t.ctx.data.kdtId = c), (t.ctx.data.alias = d), l)) {
                  var h = Object(s.a)({}, M(t.ctx), { kdtId: c, alias: d });
                  wx.request({
                    url: "https://h5.youzan.com/wscdeco/feature-detail.json",
                    data: Object(s.a)({}, h),
                    header: {
                      "Extra-Data": JSON.stringify({
                        is_weapp: 1,
                        client: "weapp",
                        bizEnv: "wsc",
                        skip_sid: "1",
                      }),
                    },
                    success: (e) => {
                      var a;
                      200 === (null == e ? void 0 : e.statusCode) &&
                        null != e &&
                        null != (a = e.data) &&
                        a.data &&
                        ((t.ctx.data.timelineSnapshotInfo =
                          t.getTimeLineSnapshotInfo(e.data.data)),
                        t.toTimeline());
                    },
                    fail: () => {
                      t.toTimeline();
                    },
                  }),
                    setTimeout(() => {
                      t.toTimeline();
                    }, 3e3);
                } else t.toTimeline();
              }
            }),
            Object(k.n)("homePerformance", { raw: !0 }).then((e) => {
              null != e && e.time && (this._performanceConfig = e);
            });
        }
        getTimeLineSnapshotInfo(e) {
          var { updateTime: t } = e,
            { kdt_id: a, alias: o } = this.options || {},
            { webviewUrl: s, cacheKey: i } = this.getWebviewUrl({
              kdtId: a,
              isTabPage: this.isTabPage || this.isHomePage,
              alias: this._afterEnterShopAlias || o,
              updateTime: t,
              isSnapshot: !0,
            });
          return { url: "https://h5.youzan.com" + s, cacheKey: i };
        }
        isSingleStore(e) {
          var { shopRole: t, shopTopic: a, shopType: o } = e;
          return 0 === t && 0 === a && 0 === o;
        }
        logWxMonitorEnd(e) {
          var { type: t, detail: a, extra: o } = e;
          F.a.end({ name: "首页页面渲染", type: t, detail: a, extra: o });
        }
        onPullDownRefresh() {
          this.fetchFeatureDetail();
        }
        onPageScroll(e) {
          l.a.trigger("onPageScroll" + Object(v.a)(), e),
            d.default.trigger("onPageScroll" + Object(v.a)(), e);
        }
        onPageShow() {
          var e, t, a, o;
          if (
            ((this.ctx.data.featurePageHide = !1),
            this.updateTitleAndNavConfig(),
            this.__needUpdateHomepage)
          ) {
            if (this.__pageKdtId !== ee.getKdtId()) {
              if (this.isHomePage && ee.notUpdateKdtIdInChain()) return;
              this.fetchFeatureDetail();
            }
            this.__needUpdateHomepage = !1;
          }
          !this.needLogHomeTime ||
            (null != (e = this.ctx) &&
              null != (t = e.data) &&
              t.isWebviewFeature) ||
            (null == (a = this.ctx.hummer) ||
              null == (o = a.mark) ||
              null == o.log ||
              o.log({
                tag: "home-dashboard",
                scene: ["appLaunch", "route"],
                extra: { checkLog: this.checkHummerLog.bind(this) },
              }),
            (this.needLogHomeTime = !1));
        }
        onPageHide() {
          (this.ctx.data.featurePageHide = !0),
            setTimeout(() => {
              var e;
              this.isHomePage &&
                "pages/home/dashboard/index" !==
                  (null == (e = ie()) ? void 0 : e.route) &&
                (this.needLogHomeTime = !0);
            }, 1e3);
        }
        getQuery() {
          return this.ctx.env.getQueryAsync().then(this.handleWeappSceneCode);
        }
        checkHummerLog(e) {
          try {
            var {
                time: t = 15e3,
                navigationType: a = ["switchTab", "reLaunch"],
              } = this._performanceConfig || {},
              { per: o } = e,
              s = o.rt || {};
            if (
              (Object(k.k)("home-t: " + o.df + " " + o.pn),
              "home-dashboard" !== o.pn)
            )
              return !1;
            if (o.df > t && a.includes(s.navigationType)) {
              var i = "首页渲染时间超" + t + "s, df:" + o.df;
              return Object(k.k)(i, s), Object(k.h)({ msg: i, rt: s }), !1;
            }
            if (o.df > 3e3) {
              var r = "首页渲染时间超3s, df:" + o.df;
              Object(k.k)(r, s), Object(k.h)({ msg: r, rt: s });
            }
            return !0;
          } catch (e) {
            return !0;
          }
        }
        handleWeappSceneCode(e) {
          void 0 === e && (e = {});
          var { scene: t, subKdtId: a } = e,
            o = Object(s.a)({}, e);
          return (
            delete o.scene,
            new Promise((e) => {
              if (a || !t) return a && ee.updateKdtId(a), e(o);
              e(
                ((e, t) =>
                  f
                    .get({
                      url: "/v3/weapp/scene-code-v2.json",
                      query: e,
                      config: { cache: !0, useCacheData: !0 },
                    })
                    .then((e) => {
                      var { pageData: a } = e,
                        { guestKdtId: o, shopAutoEnter: i, alias: r } = a || {},
                        n = o || j.getKdtId(),
                        c = Object(s.a)({}, t, { kdt_id: n });
                      return r && (c.alias = r), i && (c.shopAutoEnter = i), c;
                    }))({ key: t }, o).catch((t) => {
                  this.logWxMonitorEnd({
                    type: "error",
                    detail: { err: t },
                    extra: { bizScene: "hC" },
                  }),
                    e(o);
                })
              );
            })
          );
        }
        initFeatureDataWithPreLoad(e) {
          if (e)
            ee.globalData.homeDetailPromise
              .then((e) => {
                var t;
                (this._h_d = Date.now()),
                  (this._h_s_pre = ee.globalData.initIsHomePage),
                  (ee.globalData.initIsHomePage = void 0),
                  (this._h_is_pre = e.isPreload),
                  (ee.globalData.needPointSwitch = e.needPointSwitch),
                  (ee.globalData.wscHomeRequestId =
                    null == e ? void 0 : e.requestId),
                  G({
                    logKey: "preloadRequest",
                    message: "发起页面数据预加载请求",
                  }),
                  (t = wx.getPerformance().createObserver((e) => {
                    try {
                      var t = getCurrentPages();
                      t[t.length - 1].route.includes("pages/home") &&
                        G({
                          logKey: "wxResource",
                          message: "小程序资源加载",
                          extra: e.getEntries(),
                        });
                    } catch (e) {}
                  })),
                  J.globalData.needPointSwitch &&
                    t.observe({ entryTypes: ["resource"] });
                var { needEnterShop: a, status: o } = e || {};
                return "DELAY_ENTER_SHOP" === o
                  ? (this.setFeatureData(e, !0, {
                      needToUpdateGlobalKdtId: !1,
                    }),
                    this.handlePreLoadHomeDetailEnterShop({ scenes: o }))
                  : a
                  ? this.handlePreLoadHomeDetailEnterShop()
                  : (Object(O.h)(),
                    new Promise((t) => {
                      this.setFeatureData(e, !0, { resolve: t });
                    }));
              })
              .catch((e) => {
                (ee.globalData.homeDetailPromise = null),
                  "preError" === e ? this.fetchFeatureDetail() : N(e, this.ctx);
              })
              .finally(() => {
                ee.globalData.homeDetailPromise = null;
              });
          else if (this.isHomePage) {
            var t = Z();
            t && t.isSingleStore && this.setFeatureData(t, !0);
          }
        }
        handlePreLoadHomeDetailEnterShop(e, t) {
          var { scenes: a = "" } = void 0 === e ? {} : e;
          return (
            (ee.globalData.homeDetailPromise = null),
            this.fetchFeatureDetail(t, { scenes: a })
          );
        }
        handleCoverAdLoads() {
          this.ctx.data.coverAdLoaded = !0;
        }
        initCoverAd(e) {
          Object(W.b)()
            .then((t) => {
              if (1154 !== e) {
                var { imageUrl: a, onOrOff: o = !1, videoSource: s } = t,
                  i = o;
                2 === s && (i = !(!o || !a));
                var r = i,
                  n = r && !ee.globalData.showAd;
                (ee.globalData.showAd = r),
                  (this.ctx.data.showCoverAd = n),
                  n
                    ? this.handleDashboardComLoadedCb({ f: "ad" })
                    : this.handleCoverAdLoads();
              } else this.handleCoverAdLoads();
            })
            .catch(() => {
              this.handleCoverAdLoads();
            });
        }
        getRealRouter() {
          var e;
          return (
            (null == (e = this.ctx.env.router) ? void 0 : e.route) ||
            this.ctx.env.route
          );
        }
        getFeatureAlias() {
          var e = this;
          return Object(o.a)(function* () {
            var t = e.getRealRouter(),
              { alias: a, navIndex: o } = e.options,
              { path: s } = ee.getWxPage();
            if (((yield ee.isSwitchTab("/" + s)) || !a) && !e.isHomePage) {
              var { list: i = [] } = ee.getNavConfig();
              if (i.length) return e.getAliasFromNav(i, t);
              var r = yield ee.getNavConfigSync(),
                { list: n = [] } = r || {};
              return e.getAliasFromNav(n, t);
            }
            return (e.tabbarIndex = o || 0), a;
          })();
        }
        getAliasFromNav(e, t) {
          void 0 === t && (t = "");
          var a = "",
            o = Object(q.a)();
          return (
            e.some((e, s) => {
              var { page_path: i, alias: r } = e;
              return (
                (t.replace(/^\//, "") ===
                  i.replace(/^packages(-|\/)/, "pages/") ||
                  o === s ||
                  t === i) &&
                ((this.tabbarIndex = s), r && (a = r), !0)
              );
            }),
            a
          );
        }
        pageDestroyed() {
          ee.off("home_dashboard_com_loaded", this.handleDashboardComLoadedCb),
            ee.off("app:offlineId:change", this.handleOfflineIdChange),
            ee.off(
              "app:chainstore:change:update",
              this.handleChainStoreKdtIdChange
            ),
            this.ctx.event.remove("share:query", this.handleSalesmanChange),
            this.ctx.event.remove(
              "topNavTabFeatureComponents:change",
              this.handleTopNavTabFeatureComponentsChange
            ),
            d.default.off(k.d.lbs_gt, this.setShowLoading);
        }
        closeFeatureLoading() {
          var { isEnterShop: e } = this.ctx.data;
          oe && se && !e
            ? (this.needHideLoading = !0)
            : (Object(g.d)("home_is_show_loading_first", !0),
              (this.ctx.data.featureComLoaded = !0));
        }
        initProcess() {
          this.ctx.process.define("coverAdShow", () => {
            this.handleCoverAdLoads();
          }),
            this.ctx.process.define("coverAdHide", () => {
              (this._coverAdHide = !0),
                (this.ctx.data.webviewFeatureUrl =
                  this.webviewFeatureUrlStorage);
            }),
            this.ctx.process.define("onWebviewMessage", (e) => {
              var t = e.detail.data.filter((e) => "ZNB.share" === e.type);
              t.length && (this.webviewShareConfig = t.pop().config);
            }),
            this.ctx.process.define("handleCloseSceneMarketSubscribe", () => {
              this.ctx.data.showSceneMarketSubscribe = !1;
            }),
            this.ctx.process.define(
              "getFeatureAlias",
              () => this.ctx.data.alias
            ),
            this.ctx.process.define("getCurrentPageType", () => this.pageType),
            this.ctx.process.define("getSharePath", () =>
              this.getSharePagePath()
            );
        }
        initEvents() {
          setTimeout(() => {
            this.closeFeatureLoading(),
              (ee.globalData.homeDetailPromise = null);
          }, 5e3),
            ee.on("home_dashboard_com_loaded", this.handleDashboardComLoadedCb),
            (this.handleOfflineIdChange = (e) => {
              (this.hasOffLineChange = !0),
                this.fetchFeatureDetail("offline_data"),
                e && "function" == typeof e && e(!0);
            }),
            (this.handleTopNavTabFeatureComponentsChange = (e) => {
              this.ctx.data.featureComponents = e;
            }),
            (this.handleSalesmanChange = (e) => {
              this.salesman = { seller: e.sl, share: !!e.sl };
            }),
            ee.on("app:offlineId:change", this.handleOfflineIdChange);
          var { offlineId: e } = this.ctx.data;
          e &&
            ee.globalData.homeDetailPromise &&
            this.isHomePage &&
            this.handleOfflineIdChange(),
            se &&
              (ee.off(
                "app:chainstore:change:update",
                this.handleChainStoreKdtIdChange
              ),
              ee.on(
                "app:chainstore:change:update",
                this.handleChainStoreKdtIdChange
              )),
            this.ctx.event.listen(
              "topNavTabFeatureComponents:change",
              this.handleTopNavTabFeatureComponentsChange
            ),
            this.ctx.event.listen("share:query", this.handleSalesmanChange);
        }
        setFeatureData(e, t, a) {
          void 0 === t && (t = !1),
            void 0 === a && (a = {}),
            e && this.resolveFeatureData(e, t, a),
            i.default.$native.stopPullDownRefresh &&
              i.default.$native.stopPullDownRefresh();
        }
        fetchFeatureDetailAfterEcloudMode(e, t) {
          var { alias: a } = this.ctx.data;
          B(this.ctx, x[i.default.getEnv()], this.isHomePage, a, this.options)
            .then((a) => {
              if (a)
                return "hot_update" === e
                  ? ((this.ctx.data.featureHotUpdate = !0), void Object(p.a)())
                  : void this.setFeatureData(
                      a,
                      this.isHomePage,
                      Object(s.a)({}, t)
                    );
            })
            .catch((e) => {
              this.logWxMonitorEnd({
                type: "error",
                detail: { err: e },
                extra: { bizScene: "fD" },
              });
            });
        }
        fetchFeatureDetail(e, t) {
          this.isHomePage &&
          ee.globalData.homeDetailPromise &&
          "offline_data" !== e
            ? (ee.globalData.homeDetailPromise = null)
            : ee.ecloudMode && !this.___beforeFetchHomepageTiggered
            ? d.default.trigger("beforeFetchHomepage", {
                alias: this.ctx.data.alias,
                cb: (a) => {
                  (this.___beforeFetchHomepageTiggered = !0),
                    a && a[0] && a[0].stop
                      ? d.default.once("home:fetchedSpecAlias", (a) => {
                          var { alias: o } = a || {};
                          (this.ctx.data.alias = o),
                            this.fetchFeatureDetailAfterEcloudMode(e, t);
                        })
                      : this.fetchFeatureDetailAfterEcloudMode(e, t);
                },
              })
            : this.fetchFeatureDetailAfterEcloudMode(e, t);
        }
        handleFeatureComponents(e) {
          var t = (e || []).find((e) => "top_nav" === e.type);
          t = !!t;
          var a = e.map(
            (e) => (T.includes(e.type) && (e.isShowGoodsAddNumber = !0), e)
          );
          (this.ctx.data.topNavFeatureComponents = t ? e : []),
            (this.ctx.data.featureComponents = t ? [] : a),
            this.handleBuyButtonStyle(e);
        }
        handleBuyButtonStyle(e) {
          void 0 === e && (e = []);
          var t = "",
            a = e.find((e) => "buy_button" === e.type);
          if (a) {
            var { btnPdBottom: o, btnHeight: s, bgHeight: i } = a,
              r = a.bgEnable ? i : s + o;
            (t = "--buy-button-height:" + r + "px;"),
              (this.ctx.data.addBaseHeight = r);
          }
          var n = "iPhone-X" === ee.deviceType;
          if (this.isTabPage || this.isHomePage) {
            var c = 49;
            n && (c += 34), (t += "--bottom-nav-height:" + c + "px;");
          } else n && (t += "--buy-button-iphone-safe-area: 34px;");
          this.ctx.data.buyButtonStyle = t;
        }
        calcNeedHideShopTopBar() {
          this.ctx.data.needHideShopTopBar =
            this.isRetailShelfTemplate || this.isImmersion;
        }
        getWebviewUrl(e) {
          var {
              kdtId: t,
              isTabPage: a,
              currentIsHomePage: o,
              featureAlias: i,
              alias: r,
              needToUpdateGlobalKdtId: l,
              hummerStartTime: d,
              updateTime: h,
              isSnapshot: g,
            } = e,
            p = Object(c.a)(this.options || {}, "redirectUrl"),
            u = (o && i) || r,
            m = "/wscshop/feature/" + u,
            b = se
              ? Object(s.a)(
                  { alias: u },
                  l
                    ? {
                        shopAutoEnter:
                          +t === Object(Y.e)() && Object(k.z)() ? 5 : 2,
                      }
                    : {}
                )
              : {},
            f = Object(s.a)(
              {},
              p,
              b,
              { kdt_id: t, kdtId: t },
              oe ? { is_retail_app: 1 } : {},
              a
                ? {
                    has_weapp_tabbar: 1,
                    weapp_tabbar_index: this.tabbarIndex || 0,
                    use_native: 1,
                    is_ecloud: 0,
                  }
                : {},
              o ? { homepageWebview: 1 } : {},
              { oid: this.ctx.data.offlineId }
            );
          g && (f.only_feature_content = 1), delete f.page;
          try {
            Object.keys(f).forEach((e) => {
              "string" == typeof f[e] && f[e].indexOf("?") > -1 && delete f[e];
            });
          } catch (e) {}
          d && (f.hummerStartTime = d);
          var v = +new Date(h).getTime();
          if (h && "string" == typeof h && h.includes("CST")) {
            var w = h.replace("CST", "+0800");
            v = new Date(w).getTime();
          }
          return { webviewUrl: n.a.add(m, f), cacheKey: "" + t + (i || r) + v };
        }
        resolveFeatureData(e, t, a) {
          var o,
            r,
            c = this,
            {
              needToUpdateGlobalKdtId: l = !0,
              scene: d = "",
              resolve: g,
            } = a || {};
          if (e) {
            var {
                components: p,
                kdtId: u,
                needPointSwitch: m,
                requestId: b,
                id: f,
                templateId: v,
                featureAlias: w,
                alias: x,
                isWebviewFeature: S = !1,
                videoNumberId: _,
                shopConfig: T,
                isLock: k = 0,
                shopInfo: O,
                usePreloadWebviewTicket: F,
                fromCache: j = !1,
                preLoadImages: A = [],
                updateTime: L,
                shopMetaInfo: H,
              } = e || {},
              M = this.isSingleStore(H),
              { isMultiStore: N, offlineId: B } = this.ctx.data;
            A &&
              A.length &&
              ((this.ctx.data.preLoadImages = Array.from(
                new Set(A.map((e) => Object(U.a)(e.img, "!200x0q50.jpg")))
              )),
              setTimeout(() => {
                this.ctx.data.preLoadImages = [];
              }, 5e3));
            var E = !1;
            if (this.isHomePage && M)
              if (j)
                this.cacheInfo = Object(s.a)({}, this.cacheInfo, {
                  useCache: !0,
                  cacheValueUdateTime: L,
                  useApiData: !1,
                });
              else {
                var W;
                if (
                  ((function (e) {
                    var { data: t, expire: a = 3600 } = e;
                    ($ = { expireTime: +new Date() / 1e3 + a, value: t }),
                      Object(Q.g)("tee-feature-cache", $);
                  })({
                    data: Object(s.a)({}, e, {
                      fromCache: !0,
                      isSingleStore: M,
                    }),
                  }),
                  (null == (W = this.cacheInfo)
                    ? void 0
                    : W.cacheValueUdateTime) === L)
                )
                  return;
                E = !0;
              }
            if (
              ((ee.globalData.needPointSwitch = m),
              (ee.globalData.wscHomeRequestId = b),
              (this.ctx.data.homepageGray = !(null == T || !T.openHomeGray)),
              (this.ctx.data.isEnterShop = !0),
              (this.ctx.data.usePreloadWebviewTicket = F),
              (this.__pageKdtId = u),
              g && g(),
              this.isHomePage &&
                ee.globalData.homeDetailPromise &&
                (ee.globalData.homeDetailPromise = null),
              null != (o = e.components[0]) &&
                o.isGroupSquare &&
                this.ctx.logger.log({ et: "view", ei: "e_v_w", en: "群曝光" }),
              this.needHideLoading && this.closeFeatureLoading(),
              e && e.redirectInfo && e.redirectInfo.path)
            ) {
              var K = e.redirectInfo.path;
              if (
                ("/" !== K.slice(0, 1) && (K = "/" + K),
                !(K = n.a.add(K, this.options)).startsWith(
                  "/pages/home/dashboard"
                ))
              )
                return (
                  this.logWxMonitorEnd({ type: "finish" }),
                  i.default.navigate({
                    url: K,
                    type: K.startsWith("/pages/home/dashboard")
                      ? "reLaunch"
                      : "redirectTo",
                  })
                );
            }
            if (1 === k)
              return (
                this.logWxMonitorEnd({ type: "finish" }),
                i.default.navigate({
                  url: "/packages/common/lock/index",
                  type: "redirectTo",
                })
              );
            var q = t || this.isHomePage;
            (this.isRetailShelfTemplate = v === C),
              this.calcNeedHideShopTopBar();
            var R = Object(h.a)(e || {}, "components.0.title", "");
            (this.ctx.data.kdtId = u || ee.getKdtId()),
              N &&
                ee.getShopInfo().then((e) => {
                  var { store: t = {} } = e;
                  this.ctx.data.multistore = { id: B, name: t.name };
                }),
              (this._afterEnterShopAlias = w);
            var z,
              V,
              { webviewUrl: G, cacheKey: J } = this.getWebviewUrl({
                kdtId: u,
                isTabPage: q || this.isTabPage,
                currentIsHomePage: q,
                featureAlias: w,
                alias: x,
                needToUpdateGlobalKdtId: l,
                updateTime: L,
                hummerStartTime: S
                  ? (null == ee || null == (r = ee.globalData)
                      ? void 0
                      : r.hummerPerformanceTime) || new Date().getTime()
                  : "",
                isSnapshot: !S,
              });
            if (
              ((this.timelineSnapshotInfo = {
                url: encodeURIComponent("https://h5.youzan.com" + G),
                cacheKey: J,
                otherParams: "{}",
              }),
              S &&
                ((this.ctx.data.webviewFeatureUrl =
                  this.ctx.data.showCoverAd && !this._coverAdHide ? "" : G),
                (this.ctx.data.isWebviewFeature = !0),
                (this.webviewFeatureUrlStorage = G),
                this.logWxMonitorEnd({ type: "finish" })),
              (this.ctx.data.alias = (q && w) || x),
              D.indexOf(v) >= 0)
            ) {
              var Z = { showcaseTplfromRoute: encodeURIComponent(ie().route) };
              this.ctx.data.alias && (Z.alias = this.ctx.data.alias);
              var Y = n.a.add("/packages/showcase-template/index", Z);
              return i.default.navigate({ url: Y, type: "redirectTo" });
            }
            q ? ((V = y), (z = e.featureId || e.id)) : ((V = P), (z = e.id)),
              (this.pageType = V);
            var X = p.findIndex((e) => "video" === e.type);
            (this.ctx.data.extraData = Object(s.a)(
              {},
              this.ctx.data.extraData || {},
              {
                templateId: v,
                featureId: f,
                isHomePage: q,
                title: R,
                pageId: z,
                isVideo: X,
                isWebviewFeature: S,
                soldOutGoodsFlag: null == T ? void 0 : T.sold_out_goods_flag,
                logo: null == O ? void 0 : O.logo,
                decorateImageQuality: q
                  ? null == T
                    ? void 0
                    : T.decorate_image_quality
                  : void 0,
              }
            )),
              -1 === I.indexOf(v)
                ? (this.ctx.data.isShowFloatingNav = !0)
                : (this.ctx.data.isShowFloatingNav = !1),
              (this.ctx.data.showShopPopManager = !0),
              this.fetchShareSetting(V, z, u),
              (this.ctx.data.featureHotUpdate = E),
              this.handleFeatureComponents(p),
              (this.ctx.data.renderMode = d),
              _ && this.getVideoNumberInfo(_);
            var te = (p || []).find((e) => "config" === e.type);
            this.setpageBgColor(te),
              (this.title = R),
              this.updateTitleAndNavConfig(!0);
            var ae,
              { shopMetaInfo: oe = {} } = ee.getShopInfoSync();
            if (
              (ee.getShopConfigData().then(function (e) {
                void 0 === e && (e = {}),
                  (c.ctx.data.shopConfig = Object(s.a)({}, e));
              }),
              (this.ctx.data.shopMetaInfo = Object(s.a)({}, oe)),
              (this.ctx.data.buyerId = ee.getBuyerId() || 0),
              !q && !this.isTabPage)
            )
              this.ctx.data.showLotteryCode = !(
                null == (ae = this.options) || !ae.codeAlias
              );
            l && u && ee.updateKdtId(u, !1, { mark: 916 });
          }
        }
        updateTitleAndNavConfig(e) {
          var t;
          if (
            (void 0 === e && (e = !1),
            (null == (t = this.ctx.data.extraData) ? void 0 : t.templateId) !==
              _ || e)
          ) {
            var a = (this.ctx.data.featureComponents || []).find(
              (e) => "navigationbar_config" === e.type
            );
            (this.isImmersion =
              a &&
              Object.keys(a).length &&
              "global" !== a.navigationbar_config_type &&
              "immersion" === a.navigationbar_type),
              (this.ctx.data.navigationBarConfigData = a),
              this.calcNeedHideShopTopBar(),
              this.setPageTitle(this.title || "");
          }
        }
        getVideoNumberInfo(e) {
          i.default.$native.getChannelsLiveInfo &&
            i.default.$native.getChannelsLiveInfo({
              finderUserName: e,
              success: (e) => {
                i.default.$native.setStorageSync(
                  "channelsLiveInfo",
                  JSON.stringify(e)
                );
              },
              fail: (e) => {},
            });
        }
        setpageBgColor(e) {
          ee.getShopConfigData().then((t) => {
            var a =
              (1 == +e.is_global_setting ? t.background_color : e.color) ||
              "#f2f2f2";
            this.ctx.data.featurePageBgColor = a;
          });
        }
        setPageTitle(e) {
          var t, a;
          (t = e),
            (a = this.ctx),
            Promise.all([w.getShopConfigData(), w.getShopInfo()]).then((e) => {
              var [o, s] = e,
                {
                  feature_title: i,
                  page_title_suffix: r,
                  is_page_title_suffixed: n,
                } = o,
                c = ((null == s ? void 0 : s.base) && s.base.shop_name) || "",
                l = t;
              1 == +i && c && (l = c),
                1 == +n && r && (l += " - " + r),
                (a.data.pageTitle = l);
            });
        }
        addSalesmanParams(e) {
          var { url: t, sl: a, sls: o } = e,
            s = ee.getKdtId();
          return Object(E.a)({ url: t, sl: a, sls: o, kdtId: s });
        }
        getSharePagePath() {
          var e = this.getRealRouter();
          if (K.d.test(e)) {
            var t = (ee.globalData.tabbarOriginList || [])[Object(q.a)()],
              { pagePath: a } = t || {};
            e = a || e;
          }
          return e;
        }
        onShareAppMessage(e) {
          ee.trigger("feature_close_collect_tip");
          var t = ee.logger.getGlobal() || {},
            a = t.context || {},
            o = t.user || {},
            i = a.dc_ps || "";
          if (this.webviewShareConfig) {
            var n,
              c,
              l,
              { path: d } = this.webviewShareConfig || {};
            return (
              d && i && (this.webviewShareConfig.path = d + "&dc_ps=" + i),
              this.webviewShareConfig &&
              this.webviewShareConfig.imageUrl &&
              this.shareData &&
              this.shareData.imageUrl &&
              117 !==
                (null == (n = this.data) ||
                null == (c = n.theme) ||
                null == (l = c.extra)
                  ? void 0
                  : l.templateId)
                ? Object(s.a)({}, this.webviewShareConfig, {
                    imageUrl: this.shareData.imageUrl,
                  })
                : this.webviewShareConfig
            );
          }
          var { from: h, target: g = {} } = e || {},
            { dataset: p = {}, id: u } = g,
            { shareTag: m } = p,
            b = S[h],
            { title: f, imageUrl: v } = this.shareData || {},
            w = this.getSharePagePath(),
            x = [],
            y = Object(s.a)({}, this.options || {}, X, {
              share_cmpt: b,
              kdt_id: ee.getKdtId() || "",
            });
          this.isTabPage &&
            this.ctx.data.alias &&
            (y.alias = this.ctx.data.alias),
            i && (y.dc_ps = a.dc_ps || ""),
            o.uuid && (y.from_uuid = o.uuid || "");
          var { isMultiStore: P, offlineId: I } = this.ctx.data;
          P && (y.offlineId = I),
            Object(r.a)(y, (e, t) => {
              x.push(t + "=" + e);
            });
          var _ = {
            title: f || this.ctx.data.pageTitle || this.pageTitle,
            imageUrl: v,
          };
          "button" === h && m && x.push("shareTag=" + m),
            (_.path = w + "?" + x.join("&")),
            this.salesman &&
              (_.path = this.addSalesmanParams({
                url: _.path,
                sl: this.salesman && this.salesman.seller,
              })),
            this.isHomePage ||
              (_.path =
                "/pages/common/blank-page/index?weappSharePath=" +
                encodeURIComponent(_.path));
          var C = (this.shareData && this.shareData.loggerParams) || {};
          return (
            this.ctx.logger.log({
              et: "click",
              ei: "share",
              en: "转发",
              params: Object(s.a)({ share_cmpt: b }, C),
            }),
            "salesman" === u
              ? Object(s.a)({}, _, {
                  promise: new Promise((e) => {
                    setTimeout(() => {
                      e(_);
                    }, 300);
                  }),
                })
              : _
          );
        }
        onShareTimeline() {
          var e, t;
          this.timelineSnapshotInfo &&
            ((t = this.timelineSnapshotInfo),
            Object(m.default)({
              path: "/wscshop/poster/async-feature-screenshot.json",
              query: t,
            }));
          var a = this.options,
            o = [],
            i = a || {},
            { title: n, iconImageUrl: c } = this.shareData || {},
            l = {};
          this.salesman &&
            this.salesman.seller &&
            (l = Object(s.a)(
              {},
              this.getSalesmanParamsObject({ sl: this.salesman.seller })
            ));
          var d = Object(s.a)(
            {
              kdt_id: ee.getKdtId(),
              alias: this.ctx.data.alias,
              cacheKey:
                (null == (e = this.timelineSnapshotInfo)
                  ? void 0
                  : e.cacheKey) || "",
              shopAutoEnter: 1,
            },
            i,
            l
          );
          return (
            Object(r.a)(d, (e, t) => {
              o.push(t + "=" + e);
            }),
            { query: "" + o.join("&"), title: n, imageUrl: c }
          );
        }
        fetchShareSetting(e, t, a) {
          var o = this,
            { appIdentity: s, activityId: r, type: c } = this.options || {};
          if ("tableBooking" === c) {
            var { alias: l } = this.ctx.data;
            return (
              (this.ctx.data.tableBooking = !0),
              void f
                .get({
                  url: "/wscshop/poster/feature.json",
                  data: {
                    activity: { type: c },
                    posterType: "cover",
                    pageType: "micropage",
                    kdtId: a,
                    alias: l,
                    page: "pages/common/blank-page/index",
                    scene: {
                      page: "pages/home/feature/index",
                      guestKdtId: ee.getKdtId(),
                      kdtId: a,
                      alias: l,
                      shopAutoEnter: 1,
                      type: c,
                    },
                  },
                })
                .then((e) => {
                  var { value: t, title: a } = e;
                  (this.shareData = {
                    title: a,
                    imageUrl: t,
                    path: n.a.add("pages/home/feature/index", this.options),
                    isBooking: !0,
                  }),
                    this.ctx.event.emit("updateShareData", this.shareData);
                })
            );
          }
          s
            ? f
                .post({
                  url: "/wscshop/booking/invitePoster.json",
                  data: { pageId: t, kdtId: a, appIdentity: s, activityId: r },
                })
                .then((e) => {
                  var { posterUrl: t, title: a } = e;
                  this.shareData = { title: a, imageUrl: t };
                })
            : f
                .get({
                  url: "/wscshop/showcase/share/setting.json",
                  query: { kdtId: a, pageType: e, pageId: t },
                })
                .then(function (e) {
                  void 0 === e && (e = {});
                  var {
                      shareTitle: t = "",
                      bannerImageUrl: a = "",
                      iconUrl: s = "",
                    } = e,
                    r = i.default.$native.getSystemInfoSync() || {},
                    n = (e) =>
                      /android/i.test(r.system)
                        ? Object(U.a)(e, "!730x0.jpg").replace(/gif$/, "jpg")
                        : e,
                    c = n(a),
                    l = n(s);
                  t &&
                    (o.shareData = { title: t, imageUrl: c, iconImageUrl: l });
                })
                .catch((e) => {
                  this.logWxMonitorEnd({
                    type: "error",
                    detail: { err: e },
                    extra: { bizScene: "fS" },
                  });
                });
        }
        beforePageCreate() {
          this.ctx.logger.setPageAsyncLog();
          var e = this.ctx.watch("extraData", (t) => {
            var {
              isHomePage: a,
              pageId: o,
              templateId: s,
              title: i,
              isVideo: r,
            } = t;
            o &&
              (this.ctx.logger.setPageInitConfig({
                pageType: "f",
                pageId: o,
                title: i,
                eventParams: {
                  template_id: s,
                  is_home: a ? 1 : 0,
                  component: -1 !== r ? "dc_video" : "",
                },
              }),
              e && e());
          });
        }
      }
    },
    "K+km": function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("Fcif"),
        s = a("Zf9w");
      class i {
        constructor(e) {
          (this.ctx = e.ctx), this.initChannel();
        }
        initChannel() {
          Object(s.g)() &&
            this.ctx.process.define("setShareIcon", (e) =>
              Object(o.a)({}, e, { show: !1 })
            );
        }
      }
      i.lambdas = {
        getScene: s.m,
        checkIsHalfScreen: s.g,
        checkIsChannels: s.e,
        checkIsChannelsAsync: s.f,
        checkFromShowcase: s.d,
        checkFromFullScreenSceneAsync: () => {
          var e = Object(s.m)();
          return Promise.resolve(
            1175 === e || 1176 === e || 1195 === e || 1208 === e
          );
        },
        checkIsOpenByLiveBag: s.i,
        checkIsOpenByLiveGoodsShare: s.j,
        checkIsWxvideoLive: s.l,
        checkFromChannelsLive: s.b,
        checkFromChannelsOpenFlow: s.c,
        checkIsNeedSyncOrderScene: s.h,
        checkIsOpenedWxV3: s.k,
        getTradeModuleStatus: s.n,
        checkBeforeAddOrderPromise: s.a,
      };
    },
    VcW3: function (e, t) {
      e.exports = {
        d: "featureComLoaded;4;coverAdLoaded;4;isShowLoading;4",
        e: "",
        el: "",
        w: "",
        wc: "GlobalCustomLoading",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    "d+3z": function (e, t) {
      e.exports = {
        d: "kdtId;2;featureComponents;2;extraData;2;alias;2;pageTitle;2;isTabPage;2;isHomePage;2;shopMetaInfo;2;buyerId;2;seActivity;2;shopConfig;2;topNavFeatureComponents;2;hideShowcaseContainer;2;hideTopNavShowcaseContainer;2;featureHotUpdate;2;needHideShopTopBar;2;multistore;2;isShowLoading;2;featurePageBgColor;2;featureComLoaded;2;showCoverAd;2;homepageGray;2;preLoadImages;2;featurePageHide;2;isEnterShop;2;isWebviewFeature;2;isFromTimeline;2;usePreloadWebviewTicket;2;isShowStoreInfo;2;copyrightBgColor;2;shareTag;2;showSceneMarketSubscribe;2;crmFromScenePlanId;2;showShopPopManager;2;webviewFeatureUrl;2;navigationBarConfigData;2;renderMode;2;isShowFloatingNav;2;buyButtonStyle;2;showLotteryCode;2;addBaseHeight;2;timelineSnapshotInfo;2;coverAdLoaded;2;tableBooking;2;pageKey;2;themeCSS;6;offlineId;6;isMultiStore;4;openHideStore;4",
        e: "updateShareData",
        el: "share:show;share:query;topNavTabFeatureComponents:change",
        p: "coverAdHide;coverAdShow;onWebviewMessage;handleCloseSceneMarketSubscribe;getFeatureAlias;getCurrentPageType;getSharePath",
        pi: "autoEnterShop",
        li: "onPullDownRefresh;onPageShow;onPageHide;onShareAppMessage;onShareTimeline;onPageScroll;beforePageCreate;pageDestroyed",
      };
    },
    dlKd: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("31+o"),
        s = a.n(o);
      class i {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      i.widgets = { Main: s.a };
    },
    eVzT: function (e, t, a) {
      var o = a("Fcif"),
        s = a("esrA"),
        i = "@wsc-tee-decorate/feature-page-setup",
        r = "@wsc-tee-decorate/feature-specific-scene",
        n = "@wsc-tee-decorate/showcase-container",
        c = "@ext-tee-wsc-im/im-message-contact",
        l = "@wsc-tee-salesman/salesman-cube-block",
        d = "@wsc-tee-salesman/salesman-share-block",
        h = "@wsc-tee-decorate/feature-popup-container",
        g = "@wsc-tee-decorate/feature-user-authorize-popup",
        p = "@wsc-tee-decorate/cloud-open-process",
        u = "@wsc-tee-decorate/subscribe-message",
        m = "@ext-tee-wsc-im/subscription-message",
        b = Object(s.a)({
          a: {
            p: [
              {
                r: ["/pages/home/dashboard/index"],
                c: [
                  {
                    t: "c",
                    c: [{ t: "m", c: ["b1-10", "b1-14", "b1-0", "b1-2"] }],
                  },
                  { t: "c", c: [{ t: "m", c: ["b1-9"] }] },
                  {
                    t: "c",
                    c: [
                      {
                        t: "m",
                        c: [
                          "b1-12",
                          "b1-5",
                          "b1-8",
                          "b1-16",
                          "b1-17",
                          "b1-23",
                          "b1-22",
                          "b1-18",
                        ],
                      },
                    ],
                  },
                  {
                    t: "m",
                    c: ["@wsc-tee-common/app-content-append~VAtrAMhi"],
                  },
                ],
                m: [
                  "b1-1",
                  "b1-3",
                  "b1-4",
                  "b1-6",
                  "b1-7",
                  "b1-11",
                  "b1-13",
                  "b1-15",
                  "b1-19",
                  "b1-20",
                  "b1-21",
                  "b1-24",
                ],
              },
            ],
          },
          m: [
            [
              "b1-0",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { properties: { useAppStyleIcon: !0 }, stage: "pre" },
            ],
            [
              "b1-1",
              i,
              {
                e: {
                  "share:show": [["b1-9"], ["b1-5"]],
                  "share:query": [["b1-14"], ["b1-12"]],
                },
              },
              { stage: "pre" },
            ],
            ["b1-2", r, null, { stage: "pre" }],
            [
              "b1-3",
              n,
              {
                d: { shopInfo: ["@wsc-tee-shop/shop-core~NzurILNk", "shop"] },
                w: { DecorateComponent: "b1-21" },
                p: { requestWechatSubscribeMessagePush: [["b1-22"]] },
              },
              { stage: "normal" },
            ],
            [
              "b1-4",
              "@wsc-tee-decorate/navigation-bar",
              { d: { title: ["b1-1", "pageTitle"] } },
              { stage: "normal" },
            ],
            [
              "b1-5",
              "@wsc-tee-decorate/floating-nav",
              { d: { shopMetaInfo: "b1-1" }, w: { FloatingNavBg: "b1-5" } },
              { stage: "post" },
            ],
            ["b1-6", "@wsc-tee-decorate/jump-link", null, { stage: "normal" }],
            ["b1-7", c, null, { stage: "normal" }],
            [
              "b1-8",
              "@ext-tee-wsc-goods/goods-showcase",
              null,
              { stage: "post" },
            ],
            [
              "b1-9",
              "feature-page-container",
              {
                w: { Footer: ["b1-15", "Main"], ShopTopBar: ["b1-19", "Main"] },
              },
              { stage: "normal" },
            ],
            ["b1-10", "@wsc-tee-decorate/home-loading", null, { stage: "pre" }],
            ["b1-11", "@ext-tee-wsc-decorate/top-nav", null, { stage: "pre" }],
            [
              "b1-12",
              l,
              {
                d: {
                  shopBaseInfo: ["@wsc-tee-shop/shop-core~NzurILNk", "shop"],
                },
              },
              {
                properties: {
                  showGoodsDetail: !1,
                  scenes: "home_page",
                  sourceType: 6,
                  needBindRelation: !1,
                },
                stage: "post",
              },
            ],
            [
              "b1-13",
              "@ext-tee-wxvideo/wxvideo-utils",
              null,
              { stage: "normal" },
            ],
            ["b1-14", d, null, { properties: { sst: 1 }, stage: "pre" }],
            [
              "b1-15",
              "@wsc-tee-shop/footer",
              { d: { pageBgColor: ["b1-1", "copyrightBgColor"] } },
              { stage: "normal" },
            ],
            [
              "b1-16",
              h,
              {
                e: {
                  "floating:nav:update:position": [["b1-5"]],
                  "floating:nav:init": [["b1-5"]],
                },
                w: { DialogContent: "b1-21" },
                p: { createOrUpdateIndependentIcon: [["b1-5"]] },
              },
              { stage: "normal" },
            ],
            [
              "b1-17",
              "@ext-tee-wsc-goods/biz-sku-manage",
              {
                d: {
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
              },
              { properties: { cloudExcluded: !0 }, stage: "post" },
            ],
            ["b1-18", g, null, { stage: "normal" }],
            [
              "b1-19",
              "@wsc-tee-decorate/native-shop",
              null,
              { stage: "normal" },
            ],
            ["b1-20", p, null, { stage: "normal" }],
            [
              "b1-21",
              "@wsc-tee-decorate/feature-cloud",
              null,
              { stage: "pre" },
            ],
            ["b1-22", u, null, { stage: "post" }],
            ["b1-23", m, null, { stage: "post" }],
            ["b1-24", "global-custom-loading", null, { stage: "pre" }],
          ],
          e: [
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            [i, a("d+3z"), { stage: "pre", asyncInit: !0 }],
            [r, a("Dzdx")],
            [n, a("Y7pJ")],
            ["@wsc-tee-decorate/navigation-bar", a("/MSb")],
            ["@wsc-tee-decorate/floating-nav", a("oimI")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            [c, a("7xhV")],
            ["@ext-tee-wsc-goods/goods-showcase", a("q62V")],
            ["feature-page-container", a("00nS")],
            ["@wsc-tee-decorate/home-loading", a("VcW3")],
            ["@ext-tee-wsc-decorate/top-nav", a("sKZa")],
            [l, a("beL+")],
            ["@ext-tee-wxvideo/wxvideo-utils", a("Rl7e")],
            [d, a("uyeC")],
            ["@wsc-tee-shop/footer", a("+zL3")],
            [h, a("zwbD")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            [g, a("czXk")],
            ["@wsc-tee-decorate/native-shop", a("pnkF")],
            [p, a("+qgQ")],
            ["@wsc-tee-decorate/feature-cloud", a("hqCm")],
            [u, a("6HL7")],
            [m, a("7ueE")],
            ["global-custom-loading", a("w4Bf")],
          ],
        }),
        f = a("9ZMt"),
        v = a("rLrQ"),
        w = a("JAMj"),
        x = a("FJ+d"),
        S = a("xW8c"),
        y = a("Y0JT"),
        P = a("WlwD"),
        I = a("/pw/"),
        _ = a("2Pst"),
        C = a("5mDF"),
        D = a("jg2R"),
        T = a("gCzJ"),
        k = a.n(T);
      class O {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      O.widgets = { Main: k.a };
      var F = a("ua7N"),
        j = a("NV8i"),
        A = a("K+km"),
        L = a("bSoS"),
        H = a("qnge"),
        M = a("dlKd"),
        N = a("ygrD"),
        B = a("qwv7"),
        E = a("wxUV"),
        U = a("xBI0"),
        W = a("solT"),
        K = a("F6Qw"),
        q = a("bIWf"),
        R = a("4Bwu"),
        z = a.n(R);
      class V {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      V.widgets = { GlobalCustomLoading: z.a };
      var G = {
          config: b,
          builtinBundle: {
            "@ext-tee-wsc-decorate/page-style": v.a,
            "@wsc-tee-decorate/feature-page-setup": w.a,
            "@wsc-tee-decorate/feature-specific-scene": x.a,
            "@wsc-tee-decorate/showcase-container": S.a,
            "@wsc-tee-decorate/navigation-bar": y.a,
            "@wsc-tee-decorate/floating-nav": P.a,
            "@wsc-tee-decorate/jump-link": I.a,
            "@ext-tee-wsc-im/im-message-contact": _.a,
            "@ext-tee-wsc-goods/goods-showcase": C.a,
            "feature-page-container": D.a,
            "@wsc-tee-decorate/home-loading": O,
            "@ext-tee-wsc-decorate/top-nav": F.a,
            "@wsc-tee-salesman/salesman-cube-block": j.a,
            "@ext-tee-wxvideo/wxvideo-utils": A.a,
            "@wsc-tee-salesman/salesman-share-block": L.a,
            "@wsc-tee-shop/footer": H.a,
            "@wsc-tee-decorate/feature-popup-container": M.a,
            "@ext-tee-wsc-goods/biz-sku-manage": N.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": B.a,
            "@wsc-tee-decorate/native-shop": E.a,
            "@wsc-tee-decorate/cloud-open-process": U.a,
            "@wsc-tee-decorate/feature-cloud": W.a,
            "@wsc-tee-decorate/subscribe-message": K.a,
            "@ext-tee-wsc-im/subscription-message": q.a,
            "global-custom-loading": V,
          },
        },
        J = f.default.getGlobal("ranta-app-runtime"),
        Q = J.getPageOptions({
          rantaOptions: Object(o.a)({ page: "/pages/home/dashboard/index" }, G),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: J,
          tee: f.default,
          usedLifecycles: [
            "onAppShow",
            "pageDestroyed",
            "onPullDownRefresh",
            "onPageShow",
            "onPageHide",
            "onShareAppMessage",
            "onShareTimeline",
            "onPageScroll",
            "beforePageCreate",
            "onReachBottom",
            "beforePageMount",
          ],
        });
      f.default.page({ mixins: [Q] });
    },
    hqCm: function (e, t) {
      e.exports = {
        d: "alias;4",
        e: "",
        el: "",
        w: "DecorateComponent;DialogContent",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
        li: "pageDestroyed",
      };
    },
    jg2R: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("11c8"),
        s = a.n(o);
      class i {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      i.widgets = { Main: s.a };
    },
    oFuE: function (e, t, a) {
      var o = a("Fcif"),
        s = a("esrA"),
        i = "@wsc-tee-decorate/feature-page-setup",
        r = "@wsc-tee-decorate/showcase-container",
        n = "@ext-tee-wsc-im/im-message-contact",
        c = "@wsc-tee-decorate/feature-specific-scene",
        l = "@wsc-tee-salesman/salesman-cube-block",
        d = "@wsc-tee-salesman/salesman-share-block",
        h = "@wsc-tee-decorate/feature-popup-container",
        g = "@wsc-tee-decorate/feature-user-authorize-popup",
        p = "@wsc-tee-decorate/cloud-open-process",
        u = "@wsc-tee-decorate/subscribe-message",
        m = "@ext-tee-wsc-im/subscription-message",
        b = Object(s.a)({
          a: {
            p: [
              {
                r: ["/pages/home/feature/index"],
                c: [
                  {
                    t: "c",
                    c: [{ t: "m", c: ["b0-10", "b0-0", "b0-24", "b0-14"] }],
                  },
                  { t: "c", c: [{ t: "m", c: ["b0-9"] }] },
                  {
                    t: "c",
                    c: [
                      {
                        t: "m",
                        c: [
                          "b0-12",
                          "b0-5",
                          "b0-8",
                          "b0-22",
                          "b0-16",
                          "b0-17",
                          "b0-23",
                          "b0-18",
                        ],
                      },
                    ],
                  },
                  {
                    t: "m",
                    c: ["@wsc-tee-common/app-content-append~VAtrAMhi"],
                  },
                ],
                m: [
                  "b0-1",
                  "b0-2",
                  "b0-3",
                  "b0-4",
                  "b0-6",
                  "b0-7",
                  "b0-11",
                  "b0-13",
                  "b0-15",
                  "b0-19",
                  "b0-20",
                  "b0-21",
                ],
              },
            ],
          },
          m: [
            [
              "b0-0",
              "@ext-tee-wsc-decorate/page-style",
              null,
              { properties: { useAppStyleIcon: !0 }, stage: "pre" },
            ],
            ["b0-1", "page-attached-hook", null, { stage: "pre" }],
            [
              "b0-2",
              i,
              {
                e: {
                  "share:show": [["b0-9"], ["b0-5"]],
                  "share:query": [["b0-14"], ["b0-12"]],
                },
              },
              { stage: "pre" },
            ],
            [
              "b0-3",
              r,
              {
                d: { shopInfo: ["@wsc-tee-shop/shop-core~NzurILNk", "shop"] },
                w: { DecorateComponent: "b0-21" },
              },
              { stage: "normal" },
            ],
            [
              "b0-4",
              "@wsc-tee-decorate/navigation-bar",
              { d: { title: ["b0-2", "pageTitle"] } },
              { stage: "normal" },
            ],
            [
              "b0-5",
              "@wsc-tee-decorate/floating-nav",
              { w: { FloatingNavBg: "b0-5" } },
              { stage: "post" },
            ],
            ["b0-6", "@wsc-tee-decorate/jump-link", null, { stage: "normal" }],
            ["b0-7", n, null, { stage: "normal" }],
            [
              "b0-8",
              "@ext-tee-wsc-goods/goods-showcase",
              null,
              { stage: "post" },
            ],
            [
              "b0-9",
              "feature-page-container",
              {
                w: { Footer: ["b0-15", "Main"], ShopTopBar: ["b0-19", "Main"] },
              },
              { stage: "normal" },
            ],
            ["b0-10", c, null, { stage: "pre" }],
            ["b0-11", "@ext-tee-wsc-decorate/top-nav", null, { stage: "pre" }],
            [
              "b0-12",
              l,
              {
                d: {
                  shopBaseInfo: ["@wsc-tee-shop/shop-core~NzurILNk", "shop"],
                },
              },
              {
                properties: {
                  showGoodsDetail: !1,
                  scenes: "feature_page",
                  sourceType: 6,
                  needBindRelation: !1,
                },
                stage: "post",
              },
            ],
            [
              "b0-13",
              "@ext-tee-wxvideo/wxvideo-utils",
              null,
              { stage: "normal" },
            ],
            ["b0-14", d, null, { properties: { sst: 1 }, stage: "pre" }],
            [
              "b0-15",
              "@wsc-tee-shop/footer",
              { d: { pageBgColor: ["b0-2", "copyrightBgColor"] } },
              { stage: "normal" },
            ],
            [
              "b0-16",
              h,
              {
                e: {
                  "floating:nav:update:position": [["b0-5"]],
                  "floating:nav:init": [["b0-5"]],
                },
                w: { DialogContent: "b0-21" },
                p: { createOrUpdateIndependentIcon: [["b0-5"]] },
              },
              { stage: "pre" },
            ],
            [
              "b0-17",
              "@ext-tee-wsc-goods/biz-sku-manage",
              {
                d: {
                  themeVars: [
                    "@ext-tee-wsc-decorate/theme-color~EKBphALO",
                    "themeCSS",
                  ],
                },
              },
              { properties: { cloudExcluded: !0 }, stage: "post" },
            ],
            ["b0-18", g, null, { stage: "normal" }],
            [
              "b0-19",
              "@wsc-tee-decorate/native-shop",
              null,
              { stage: "normal" },
            ],
            ["b0-20", p, null, { stage: "normal" }],
            [
              "b0-21",
              "@wsc-tee-decorate/feature-cloud",
              null,
              { stage: "pre" },
            ],
            ["b0-22", u, null, { stage: "normal" }],
            ["b0-23", m, null, { stage: "normal" }],
            [
              "b0-24",
              "@ext-tee-wsc-goods/share-block",
              {
                e: {
                  "share:show": [["b0-9"]],
                  "share:query": null,
                  "share:optionMenu": null,
                },
                w: {
                  UserAuthorize: [
                    "@passport-tee/user-authorize~DDdJBmWG",
                    "Main",
                  ],
                },
                p: { setShareInfo: null },
              },
            ],
          ],
          e: [
            ["@ext-tee-wsc-decorate/page-style", a("8v1J")],
            ["page-attached-hook", a("Y7y7")],
            [i, a("d+3z"), { stage: "pre", asyncInit: !0 }],
            [r, a("Y7pJ")],
            ["@wsc-tee-decorate/navigation-bar", a("/MSb")],
            ["@wsc-tee-decorate/floating-nav", a("oimI")],
            ["@wsc-tee-decorate/jump-link", a("OgbJ")],
            [n, a("7xhV")],
            ["@ext-tee-wsc-goods/goods-showcase", a("q62V")],
            ["feature-page-container", a("00nS")],
            [c, a("Dzdx")],
            ["@ext-tee-wsc-decorate/top-nav", a("sKZa")],
            [l, a("beL+")],
            ["@ext-tee-wxvideo/wxvideo-utils", a("Rl7e")],
            [d, a("uyeC")],
            ["@wsc-tee-shop/footer", a("+zL3")],
            [h, a("zwbD")],
            ["@ext-tee-wsc-goods/biz-sku-manage", a("O8mO")],
            [g, a("czXk")],
            ["@wsc-tee-decorate/native-shop", a("pnkF")],
            [p, a("+qgQ")],
            ["@wsc-tee-decorate/feature-cloud", a("hqCm")],
            [u, a("6HL7")],
            [m, a("7ueE")],
            ["@ext-tee-wsc-goods/share-block", a("dMZ+")],
          ],
        }),
        f = a("9ZMt"),
        v = a("rLrQ"),
        w = getApp();
      function x() {
        var e = getCurrentPages(),
          t = "";
        try {
          t = e[e.length - 1].__wxExparserNodeId__;
        } catch (e) {}
        return t;
      }
      var S = getApp();
      var y = a("JAMj"),
        P = a("xW8c"),
        I = a("Y0JT"),
        _ = a("WlwD"),
        C = a("/pw/"),
        D = a("2Pst"),
        T = a("5mDF"),
        k = a("jg2R"),
        O = a("FJ+d"),
        F = a("ua7N"),
        j = a("NV8i"),
        A = a("K+km"),
        L = a("bSoS"),
        H = a("qnge"),
        M = a("dlKd"),
        N = a("ygrD"),
        B = a("qwv7"),
        E = a("wxUV"),
        U = a("xBI0"),
        W = a("solT"),
        K = a("F6Qw"),
        q = a("bIWf"),
        R = a("YW/I"),
        z = {
          config: b,
          builtinBundle: {
            "@ext-tee-wsc-decorate/page-style": v.a,
            "page-attached-hook": class {
              constructor(e) {
                (this.ctx = e.ctx), this.initEvent();
              }
              initEvent() {
                S.on("ranta-tab-page-ready-" + x(), () => {
                  this.triggerAttachedEvent();
                }),
                  this.triggerAttachedEvent();
              }
              triggerAttachedEvent() {
                var e;
                (e = { route: this.ctx.env.route, rantaCtx: this.ctx }),
                  w.trigger("async-page-attached-" + x(), e);
              }
              pageDestroyed() {
                S.off("ranta-tab-page-ready-" + x(), null);
              }
            },
            "@wsc-tee-decorate/feature-page-setup": y.a,
            "@wsc-tee-decorate/showcase-container": P.a,
            "@wsc-tee-decorate/navigation-bar": I.a,
            "@wsc-tee-decorate/floating-nav": _.a,
            "@wsc-tee-decorate/jump-link": C.a,
            "@ext-tee-wsc-im/im-message-contact": D.a,
            "@ext-tee-wsc-goods/goods-showcase": T.a,
            "feature-page-container": k.a,
            "@wsc-tee-decorate/feature-specific-scene": O.a,
            "@ext-tee-wsc-decorate/top-nav": F.a,
            "@wsc-tee-salesman/salesman-cube-block": j.a,
            "@ext-tee-wxvideo/wxvideo-utils": A.a,
            "@wsc-tee-salesman/salesman-share-block": L.a,
            "@wsc-tee-shop/footer": H.a,
            "@wsc-tee-decorate/feature-popup-container": M.a,
            "@ext-tee-wsc-goods/biz-sku-manage": N.a,
            "@wsc-tee-decorate/feature-user-authorize-popup": B.a,
            "@wsc-tee-decorate/native-shop": E.a,
            "@wsc-tee-decorate/cloud-open-process": U.a,
            "@wsc-tee-decorate/feature-cloud": W.a,
            "@wsc-tee-decorate/subscribe-message": K.a,
            "@ext-tee-wsc-im/subscription-message": q.a,
            "@ext-tee-wsc-goods/share-block": R.a,
          },
        },
        V = f.default.getGlobal("ranta-app-runtime"),
        G = V.getPageOptions({
          rantaOptions: Object(o.a)({ page: "/pages/home/feature/index" }, z),
          pageRuntimeName: "aWrDjnqdPEch",
          frameworkAppRuntime: V,
          tee: f.default,
          usedLifecycles: [
            "onAppShow",
            "beforePageCreate",
            "pageDestroyed",
            "onPullDownRefresh",
            "onPageShow",
            "onPageHide",
            "onShareAppMessage",
            "onShareTimeline",
            "onPageScroll",
            "onReachBottom",
            "beforePageMount",
          ],
        });
      f.default.page({ mixins: [G] });
    },
    pnkF: function (e, t) {
      e.exports = {
        d: "navigationBarConfigData;4;shopConfig;4;alias;4;tableBooking;4",
        e: "",
        el: "",
        w: "Main",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    sKZa: function (e, t) {
      e.exports = {
        d: "topNavFeatureComponents;6;themeColors;6",
        e: "topNavTabFeatureComponents:change",
        el: "",
        w: "TopNav",
        wc: "",
        wd: "TopNav",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    solT: function (e, t, a) {
      a.d(t, "a", function () {
        return h;
      });
      var o = a("VeA7"),
        s = a.n(o),
        i = a("wxb/"),
        r = a.n(i),
        n = a("Gc2q"),
        c = a.n(n),
        l = a("Tewj"),
        d = a("Na6L");
      class h {
        constructor(e) {
          (this.ctx = e.ctx),
            (this.beforeFetchHomepageFn = (e) => {
              var t = null == e ? void 0 : e.cb;
              delete e.cd;
              var a = this.ctx.cloud.emit("beforeFetchHomepage", e);
              if (a && Array.isArray(a)) return a[0];
              null == t || t(a);
            }),
            (this.aliasUnwatch = this.ctx.watch("alias", (e) => {
              this.alias = e;
            })),
            (this.emitOnPageScrollFn = this.emitOnPageScroll.bind(this)),
            l.default.on(
              "onPageScroll" + Object(d.a)(),
              this.emitOnPageScrollFn
            ),
            l.default.on("beforeFetchHomepage", this.beforeFetchHomepageFn);
        }
        pageDestroyed() {
          var e;
          l.default.off(
            "onPageScroll" + Object(d.a)(),
            this.emitOnPageScrollFn
          ),
            l.default.off("beforeFetchHomepage", this.beforeFetchHomepageFn),
            null == (e = this.aliasUnwatch) || e.call(this);
        }
        emitOnPageScroll(e) {
          this.ctx.cloud.emit("onPageScroll", e);
        }
      }
      h.widgets = { Main: s.a, DecorateComponent: r(), DialogContent: c() };
    },
    ua7N: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("g1FG"),
        s = a.n(o);
      class i {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      i.widgets = { TopNav: s.a };
    },
    w4Bf: function (e, t) {
      e.exports = {
        d: "",
        e: "",
        el: "",
        w: "GlobalCustomLoading",
        wc: "",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "",
        c: "",
        cc: "",
      };
    },
    wxUV: function (e, t, a) {
      a.d(t, "a", function () {
        return i;
      });
      var o = a("REVB"),
        s = a.n(o);
      class i {
        constructor(e) {
          this.ctx = e.ctx;
        }
      }
      i.widgets = { Main: s.a };
    },
    zwbD: function (e, t) {
      e.exports = {
        d: "shareTag;6;showSceneMarketSubscribe;6;crmFromScenePlanId;6;showShopPopManager;6;isHomePage;6;isWebviewFeature;6;showLotteryCode;6;extraData;6",
        e: "",
        el: "floating:nav:update:position;floating:nav:init",
        w: "",
        wc: "DialogContent",
        wd: "Main",
        l: "",
        lc: "",
        p: "",
        pi: "handleCloseSceneMarketSubscribe;createOrUpdateIndependentIcon",
        c: "",
        cc: "",
      };
    },
  });
