"use strict";
var r = require("~/r");
r(
  "WBiS",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    WBiS: function (e, t, a) {
      a.r(t);
      var i = a("Fcif"),
        r = a("eijD"),
        s = a("a1Mm"),
        o = a("SVbq"),
        n = a("/duV"),
        c = a("taYb"),
        d = a("f9/1"),
        l = a("w2Y9"),
        h = a.n(l),
        u = a("9DLJ"),
        g = a("US/N"),
        b = {},
        p = (a("WMGV"), a("AGZf")),
        v = a("xih6");
      function f(e) {
        return Object(v.a)().some((t) => e.startsWith(t));
      }
      function T() {
        var e = getCurrentPages() || [];
        return f("/" + (e[e.length - 1] || {}).route);
      }
      var m = a("9ZMt"),
        O = getApp();
      function C(e) {
        void 0 === e && (e = {}), wx.redirectTo(e);
      }
      var I = a("PKOW"),
        j = {
          [I.c[I.b.CART].TRANS]: {
            subRoutes: [I.c[I.b.CART].NEW, I.c[I.b.CART].OLD],
          },
          [u.e.TRANS]: { subRoutes: [u.e.TEE, u.e.EXT, u.e.OLD] },
          [u.g.TRANS]: { subRoutes: [u.g.TEE, u.g.EXT, u.g.OLD] },
          [u.f.TRANS]: { subRoutes: [u.f.TEE, u.f.EXT, u.f.OLD] },
          [u.d.TRANS]: { subRoutes: [u.d.TEE, u.d.EXT, u.d.OLD] },
          [u.a.OLD]: { subRoutes: [u.a.OLD, u.a.NEW] },
          [u.l.TRANS]: { subRoutes: [u.l.PAGE] },
        };
      function S(e) {
        var t = e;
        if (!j[t])
          for (var a = Object.keys(j), i = 0; i < a.length; i++) {
            var { subRoutes: r } = j[a[i]];
            if (r && r.length)
              for (var s = 0; s < r.length; s++)
                if (e === r[s]) {
                  t = a[i];
                  break;
                }
            if (t !== e) break;
          }
        return t;
      }
      var y = a("DXKY"),
        x = a("tmLU"),
        w = a("U0uK"),
        A = a("Sipi"),
        P = a("YeA1"),
        k = a("4jn8"),
        N = a("xRet"),
        { dmc: R } = Object(P.a)(),
        D = getApp(),
        E = Object(w.a)().kdtId,
        L = {},
        _ = (e, t) => {
          (L[e] = t), Object(d.setEnterCacheConfig)("tabbarNavCacheMap", e, t);
        },
        K = {},
        M = {},
        q = (e) => /^http/.test(e),
        W = {
          props: {
            isNewIphone: Boolean,
            onlyColorText: Boolean,
            activePath: String,
            forceShow: Boolean,
            nativeSelectedIndex: Number,
            cloudConfig: { type: Object, default: () => ({}) },
          },
          data: () => ({
            navList: [],
            navStyleMap: u.i,
            selectedColor: "",
            color: "",
            navStyle: 1,
            customBackground: "",
            deviceType: D.deviceType || "",
            isTabPage: !1,
            cacheKdtId: "",
            selectedIndex: 0,
            brandNavStyle: 1,
            notCoexist: !1,
            imgMode: "center",
          }),
          computed: {
            isCart() {
              var { selectedIndex: e } = this,
                t = this.navList[e] || {};
              if (!t) return !1;
              var { pagePath: a = "" } = t;
              return Object(I.d)(a.split("?")[0], I.b.CART);
            },
            classes() {
              var { navStyle: e, deviceType: t } = this,
                a = "tab-bar";
              return [a, a + (3 === e ? "-float" : "-legacy"), t];
            },
            brandStyle() {
              return " background: " + this.customBackground;
            },
            commonStyle() {
              var e = this.customBackground || "#fcfcfc";
              return this.navStyle === u.i.MAIN_ICON ||
                this.navStyle === u.i.XUAN_FU ||
                (this.navStyle === u.i.DEFAULT && 1 === this.brandNavStyle)
                ? " background:" + e
                : "";
            },
            rudderStyle() {
              return this.navStyle === u.i.MAIN_ICON_STYLE_TWO
                ? "border: 0px;bottom: 19px"
                : " ";
            },
          },
          watch: {
            nativeSelectedIndex(e) {
              setTimeout(() => {
                this.selectedIndex = e;
              }, 0);
            },
            navStyle(e) {
              3 === e &&
                this.ctx &&
                (this.ctx.data.navHeight = this.deviceType ? 56 : 66);
            },
          },
          created() {
            this.weappNavInit();
          },
          methods: {
            changeTheme(e) {
              var t = this;
              return Object(r.a)(function* () {
                var {
                    color_mode: a,
                    color: r,
                    selected_color: s,
                    custom_background: o,
                  } = D.getNavConfig(),
                  n = a === u.b.SHOP,
                  c = yield D.getShopTheme(),
                  d = {
                    color: n ? u.c.UNACTIVATED : r,
                    selectedColor: n ? c.colors["main-bg"] : s,
                    customBackground: o,
                  },
                  l = L[e];
                _(e, Object(i.a)({}, l, d)), t.getCacheMap(e);
              })();
            },
            chainStoreAction() {
              var e = this;
              return Object(r.a)(function* () {
                if (D.forceUseHqTabbar())
                  return yield e.changeTheme(Object(n.e)()), !0;
              })();
            },
            weappNavInit() {
              var e = this;
              return Object(r.a)(function* () {
                var t = D.getKdtId() || E;
                e.initEvents(),
                  (yield e.chainStoreAction()) ||
                    (L[t] ? e.getCacheMap(t) : e.initNavData(t));
              })();
            },
            initEvents() {
              y.a.off("shop:theme:resolved", this.kdtIdChange.bind(this)),
                y.a.on("shop:theme:resolved", this.kdtIdChange.bind(this));
            },
            kdtIdChange() {
              var e = this;
              return Object(r.a)(function* () {
                var t = +D.getKdtId();
                if (e.data.cacheKdtId !== t) {
                  if (((e.cacheKdtId = t), yield e.chainStoreAction())) return;
                  if (L[t]) return void e.getCacheMap(t);
                  e.initNavData(t);
                }
              })();
            },
            navCommonClick(e) {
              this.wxSwitchTab(e);
            },
            spliceKdtIdAndKey: (e, t) =>
              Object(o.z)() &&
              !Object(d.getEnterCacheConfig)("hqHomeToOtherHome")
                ? "" + Object(n.e)() + e
                : "" + (t || D.getKdtId() || E) + e,
            getCurrentPage() {
              var e = getCurrentPages() || [];
              return e[e.length - 1] || {};
            },
            getCacheMap(e) {
              var t = this.getCurrentPage();
              if (
                !D.forceUseHqTabbar() &&
                t.options &&
                t.options.showcaseTplfromRoute
              )
                this.initNavData(e);
              else {
                var a = S(t.route),
                  r = K[this.spliceKdtIdAndKey(a)] || {
                    isTabPage: !1,
                    selectedIndex: this.nativeSelectedIndex || "",
                  },
                  s = Object(i.a)({}, L[e], r);
                M[e] && (D.globalData.tabbarOriginList = M[e]),
                  Object.assign(this.data, s),
                  setTimeout(() => {
                    this.setSelectedIndex(t, r.selectedIndex);
                  }, 0);
              }
            },
            initNavData(e, t) {
              void 0 === t && (t = {});
              var { count: a = 1, refresh: r = !1 } = t;
              ((e, t) => (
                (b[e] && !t) ||
                  (b[e] = Object(g.default)({
                    path: "/wscshop/weapp/custom_nav.json",
                    data: { kdt_id: e, useOmniChannel: !0 },
                  })),
                b[e]
              ))(e, r)
                .then((t) => {
                  var a = t.data || {},
                    {
                      list: r,
                      colorMode: s = u.b.CUSTOM,
                      navStyle: o = 1,
                      color: d,
                      selectedColor: l,
                      customBackground: h,
                      brandNavStyle: g = 1,
                      imgMode: b = "center",
                      notCoexist: p,
                    } = a,
                    v = 2 !== o && p;
                  (this.brandNavStyle = g), (this.imgMode = b);
                  var f = r;
                  D.trigger(N.b, f);
                  var T = this.processNavList(f, e),
                    m = Object(i.a)({}, T, { navStyle: o, notCoexist: v });
                  (M[e] = f),
                    (D.globalData.tabbarPageList =
                      (null == T ? void 0 : T.navList) || []),
                    (D.globalData.tabbarOriginList = f),
                    D.isChainStoreSync &&
                      +e === Object(n.e)() &&
                      (D.globalData.tabbarHqOriginList = c.a.toSnakeCase(f)),
                    -1 === m.selectedIndex &&
                      (m.selectedIndex = this.data.selectedIndex),
                    D.getShopTheme().then((t) => {
                      var a = D.getShopInfoSync(),
                        r = s === u.b.SHOP,
                        o = {
                          color: r ? u.c.UNACTIVATED : d,
                          selectedColor: r ? t.colors["main-bg"] : l,
                          customBackground: h,
                        };
                      r && delete m.selectedIndex,
                        _(
                          e,
                          Object(i.a)({}, m, o, {
                            isDecorateFollowHq: a.isDecorateFollowHq,
                          })
                        ),
                        Object.assign(this.data, L[e]);
                    });
                })
                .catch(() => {
                  a > 3 || this.initNavData(e, { count: a + 1, refresh: !0 });
                });
            },
            processNavList(e, t) {
              var a,
                r = !1,
                o = -1,
                n = this.getCurrentPage();
              if (n.options && n.options.showcaseTplfromRoute) {
                var c = decodeURIComponent(n.options.showcaseTplfromRoute);
                a = S(c);
              } else a = S(n.route);
              var d = e.map((e, n) => {
                var c = Object(i.a)({}, e),
                  {
                    iconPath: d,
                    selectedIconPath: l,
                    customPage: h,
                    pagePath: g,
                  } = c;
                q(d) && (c.iconPath = Object(s.a)(d, "!80x80.jpg")),
                  q(l) && (c.selectedIconPath = Object(s.a)(l, "!80x80.jpg"));
                var b = (function (e) {
                    var { customPage: t, pagePath: a } = e,
                      i = getApp(),
                      { isRetailApp: r } = i.globalData,
                      s =
                        t ||
                        a.startsWith("pages/home") ||
                        a.startsWith("pages/common/webview-page") ||
                        (r &&
                          "pages-retail/usercenter/dashboard-v2/index" === a)
                          ? a
                          : a.replace(/^pages(-|\/)/, "packages/");
                    return (
                      u.j.test(s) &&
                        (r && s === u.k.WSC && (s = u.k.RETAIL),
                        r || s !== u.k.RETAIL || (s = u.k.WSC)),
                      s
                    );
                  })({ customPage: h, pagePath: g }),
                  p = "";
                b &&
                  (b.startsWith("pages/home/tab") ||
                    b.startsWith("pages/home/dashboard")) &&
                  (p = this.spliceKdtIdAndKey(
                    b.replace(/^pages(-|\/)/, "packages/"),
                    t
                  )),
                  (c.pagePath = "/" + b + "?navIndex=" + n),
                  b === a && ((r = !0), (o = n));
                var v = this.spliceKdtIdAndKey(b, t);
                return (
                  K[v] || (K[v] = { isTabPage: !0, selectedIndex: n }),
                  p && !K[p] && (K[p] = { isTabPage: !0, selectedIndex: n }),
                  c
                );
              });
              return { isTabPage: r, selectedIndex: o, navList: d };
            },
            setSelectedIndex(e, t) {
              var { navIndex: a } = e.options || {};
              (isNaN(+a) && isNaN(+t)) || (this.selectedIndex = +(a || t));
            },
            jumpToMp(e) {
              1 == +e.use_short_link
                ? wx.navigateToMiniProgram({
                    shortLink: e.short_link,
                    fail() {
                      Object(p.a)("跳转其他小程序失败,可联系商家处理");
                    },
                  })
                : wx.navigateToMiniProgram({
                    appId: e.other_weapp_appid,
                    path: e.other_weapp_link,
                    fail() {
                      Object(p.a)("跳转其他小程序失败,可联系商家处理");
                    },
                  });
            },
            wxSwitchTab(e) {
              var t,
                a = this.navList[e],
                { extraData: r, pagePath: s } = a,
                o = e,
                { tabbarOriginList: n } = D.globalData,
                c = s.split("?")[0];
              if (Object(I.d)(c, I.b.CART)) return this.switchToCart(s);
              if (
                (function (e) {
                  return "/packages/retail-shelf/shelf/index" === e;
                })(c)
              )
                this.switchToRS(n, o);
              else {
                var d = n.find((e, t) => t === o);
                if (
                  "chat" !==
                  (null == d || null == (t = d.linkInfo) ? void 0 : t.linkType)
                ) {
                  if (r && "2" === r.link_type) return this.jumpToMp(r);
                  var l = {};
                  "feature" === (null == d ? void 0 : d.attachedId) &&
                    null != d &&
                    d.alias &&
                    (l.alias = d.alias),
                    Object(k.b)(n, {
                      tabBarIndex: o,
                      query: Object(i.a)({ navIndex: o }, l),
                      fail: () => {
                        this.switchTab(e);
                      },
                    });
                }
              }
            },
            switchTab(e) {
              var t = this.navList[e],
                { active: a, extra: i, pagePath: r } = t;
              if (!a) {
                !(function (e) {
                  var { path: t } = e;
                  O.logger &&
                    O.logger.log({
                      et: "click",
                      ei: "custom_tab_bar_before_navigate",
                      en: "自定义导航点击跳转",
                      params: {
                        kdt_id: O.getKdtId(),
                        version: O.getVersion(),
                        navigateUrl: t,
                      },
                    });
                })({ path: r }),
                  this.setRetailGlobalData(r);
                var s = getCurrentPages() || [],
                  o = r.split("?")[0],
                  n = u.h[o];
                if (n) {
                  var c = h.a.getAll(r),
                    d = s.length > 1 ? "reLaunch" : "redirectTo";
                  R[d](n, c);
                } else {
                  if (s.length > 1)
                    return (getCurrentPages() || []).some((e) => {
                      var { route: t } = e;
                      return Object(v.a)().indexOf("/" + t) > -1;
                    })
                      ? f(r)
                        ? R.switchTab(r)
                        : C({ url: r })
                      : wx.reLaunch({ url: r });
                  Object(I.d)(o, I.b.CART)
                    ? this.switchToCart(r)
                    : i && "2" === i.link_type
                    ? this.jumpToMp(i)
                    : f(r)
                    ? R.switchTab(r)
                    : T()
                    ? (function (e) {
                        void 0 === e && (e = {}),
                          (getCurrentPages() || []).length >= 10
                            ? this.redirect(e)
                            : wx.navigateTo(e);
                      })({ url: r })
                    : C({ url: r });
                }
              }
            },
            switchToCart(e) {
              var t = e.split("?")[0],
                a = {
                  store_id: D.getOfflineId() || 0,
                  supportReviveGroup: !0,
                  supportCombo: !0,
                };
              (a.excludedComboSubType = JSON.stringify([""])),
                Object(x.c)({
                  navigatePath: t,
                  navigateCb: (t) => {
                    var a =
                      getApp().globalData.isRetailApp && !Object(o.z)()
                        ? 200
                        : 0;
                    setTimeout(() => {
                      Object(I.f)({
                        url: e,
                        type: T() ? I.a.NAVIGATE : I.a.REDIRECT,
                        pageType: I.b.CART,
                        query: { prefetchKey: t },
                      });
                    }, a);
                  },
                  prefetchCb: () =>
                    Object(o.z)()
                      ? Promise.reject("进总部不走预请求")
                      : new Promise((e, t) => {
                          Object(g.default)({
                            data: a,
                            path: "/wsctrade/cartGoodstList.json",
                            method: "GET",
                          })
                            .then((t) => {
                              e(t);
                            })
                            .catch((e) => {
                              t(e);
                            });
                        }),
                });
              var i = "trade-cart-addon-prefetchkey_" + Date.now();
              Object(A.d)("trade-cart-addon-prefetchkey", i),
                Object(x.a)({
                  prefetchKey: i,
                  prefetchCb: () =>
                    Object(o.z)()
                      ? Promise.reject("进总部不走预请求")
                      : D.request({
                          path: "/wsctrade/cart/getCouponAddOnInfo.json",
                          method: "GET",
                          data: {
                            kdt_id: D.getKdtId() || 0,
                            store_id: D.getOfflineId() || 0,
                          },
                          withCredentials: !0,
                        }),
                });
            },
            setRetailGlobalData(e) {
              var t = e.match(/mode=(\d*)/);
              t && t[1] && (D.globalData.shelfParams = { mode: t[1] });
            },
            switchToRS(e, t) {
              var { pagePath: a, extra: r } = e[t];
              return (
                y.a.trigger(
                  "retail-shelf:switch-tab",
                  Object(i.a)({}, r, { switchType: "tab-click" })
                ),
                Object(k.b)(e, {
                  path: a,
                  query: r,
                  fail: () => {
                    this.switchTab(t);
                  },
                })
              );
            },
          },
          ud: !0,
        };
      t.default = m.default.component(W);
    },
  })
);
