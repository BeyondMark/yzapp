"use strict";
var r = require("~/r");
r(
  "864p",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "864p": function (e, a, t) {
      t.r(a);
      var i = t("Fcif"),
        n = t("lZq6"),
        o = t("GXW/"),
        s = t("taYb"),
        r = t("GFa9"),
        l = t("Eagg"),
        c = t("MLLI"),
        g = t("QLod"),
        h = t("z1RG"),
        {
          NEW_FEATURE_ROUTE: p,
          APP_FEATURE_ROUTE: d,
          NEW_MARKETING_PAGE_ROUTE: u,
          NEW_HOMEPAGE_ROUTE: v,
          APP_HOMEPAGE_ROUTE: _,
          OLD_GOODS_ROUTE: m,
          NEW_GOODS_ROUTE: f,
          TEMPLATE_ROUTE: O,
          TAB_THREE_ROUTE: T,
          APP_TAB_THREE_ROUTE: b,
          TAB_TWO_ROUTE: E,
          APP_TAB_TWO_ROUTE: y,
          TAB_ONE_ROUTE: P,
          APP_TAB_ONE_ROUTE: k,
          EXT_NEW_FEATURE_ROUTE: S,
          EXT_NEW_MARKETING_PAGE_ROUTE: C,
          EXT_TAB_ONE_ROUTE: j,
          EXT_TAB_TWO_ROUTE: w,
          EXT_TAB_THREE_ROUTE: U,
          EXT_NEW_HOMEPAGE_ROUTE: A,
          OLD_NEW_FEATURE_ROUTE: I,
          OLD_TAB_ONE_ROUTE: D,
          OLD_TAB_TWO_ROUTE: x,
          OLD_TAB_THREE_ROUTE: R,
          OLD_NEW_HOMEPAGE_ROUTE: N,
          USERCENTER_ROUTE: G,
          SHOPNOTE_DETAIL_ROUTE: L,
          PACKAGES_USERCENTER_ROUTE: M,
        } = g.b,
        F = {
          home: "onHomeTap",
          search: "onSearchTap",
          usercenter: "onUserCenterTap",
          shopcar: "onShopCarTap",
          allGoods: "onAllGoodsTap",
          marketingPage: "onMarketingPageTap",
        },
        W = {
          [p]: 0,
          [d]: 0,
          [u]: 0,
          [T]: 0,
          [b]: 0,
          [E]: 0,
          [y]: 0,
          [P]: 0,
          [k]: 0,
          [O]: 0,
          [O]: 5,
          [m]: 2,
          [f]: 2,
          [v]: 5,
          [_]: 5,
          [S]: 0,
          [C]: 0,
          [j]: 0,
          [w]: 0,
          [U]: 0,
          [A]: 5,
          [I]: 0,
          [D]: 0,
          [x]: 0,
          [R]: 0,
          [N]: 5,
          [L]: 6,
          [G]: 7,
          [M]: 7,
        },
        H = {
          navColor: "#ffffff",
          textColor: "#000000",
          sysPath: [],
          customPath: [],
          supportPages: ["0", "2", "5"],
          hotKeys: [],
        },
        B = t("JIO9"),
        K = (t("R18q"), t("jA1y")),
        q = function (e) {
          return (
            void 0 === e && (e = !0),
            Object(K.d)({
              path: "/wscshop/top-nav/getConfig.json",
              origin: "h5",
              data: { withCache: e },
            })
          );
        },
        $ = t("zMoS"),
        X = t("DXKY"),
        z = t("hTAu"),
        J = t("Ix7h"),
        V = t("YeA1"),
        Y = t("4jn8"),
        Q = t("Tewj"),
        { dmc: Z } = Object(V.a)(),
        ee = getApp(),
        {
          NEW_HOMEPAGE_ROUTE: ae,
          APP_HOMEPAGE_ROUTE: te,
          NEW_GOODS_ROUTE: ie,
          OLD_GOODS_ROUTE: ne,
          TEE_NEW_HOMEPAGE_ROUTE: oe,
          EXT_NEW_HOMEPAGE_ROUTE: se,
          EXT_CORE_HOMEPAGE_ROUTE: re,
          GOODS_DETAIL_TOUTE: le,
          KQ_GOODS_DETAIL: ce,
        } = g.b,
        ge = !1;
      Component({
        behaviors: [n.a, o.a],
        properties: {
          titleText: String,
          openCustomNav: Boolean,
          navigationbarConfigData: {
            type: Object,
            value: {},
            observer: "initImmersionData",
          },
          switchPageOptions: Object,
        },
        data: {
          canUseNav: !0,
          fontSizeSetting: 16,
          height: Object(g.e)(),
          paddingTop: Object(g.f)(),
          textWidth: 161,
          showImmersionMenuMain: !1,
          showMenuMain: !1,
          showMenuBack: !1,
          customIconStyle: "",
          isMenuOpen: !1,
          configData: H,
          isChannels: Object(l.b)(),
          useImmersion: !1,
          immersionUpShow: !1,
          cd: {},
          needPointClickNav: !1,
          contactExtra: { sourceParam: "", businessId: "" },
          specialSupport: !1,
          originImmersion: !1,
          opacityVal: 0,
          isReservation: !1,
        },
        attached() {
          this.getConfig(),
            this.getImInfo(),
            this.initReservationShare(),
            this.initOriginImmersion(),
            ee.on("app:chainstore:kdtid:update", () => {
              (ge = !1),
                this.isComponentHide ||
                ee.getEnterCacheConfig("proxyWxJumpPadding")
                  ? (this._cacheFunc = () => {
                      this.getConfig();
                    })
                  : this.getConfig();
            }),
            h.a.setStickyControlCheckItem("customNavigation", 9999999999, !0);
        },
        ready() {
          this.pageScrollFn = Object(J.a)(
            this.onPageScrollIntersectionObserver.bind(this),
            50
          );
        },
        destroyed() {
          X.a.off("onPageScroll" + this.getPageKey(), this.pageScrollFn),
            this.opacityFn &&
              Q.default.off("onNavOpacityChange", this.opacityFn);
        },
        pageLifetimes: {
          show() {
            this._cacheFunc && (this._cacheFunc(), (this._cacheFunc = null));
          },
        },
        methods: {
          initReservationShare() {
            var e = getCurrentPages(),
              { type: a } = e[e.length - 1].options || {};
            this.setData({ isReservation: "tableBooking" === a });
          },
          getShowComponentData() {
            var { configData: e, navigationbarConfigData: a } = this.data,
              t = Object($.a)(a, "shortcut_list", []),
              n = t.length > 0 && "back" === t[0].key;
            if (!this.isFirstPage() && !n) {
              var o =
                "https://img01.yzcdn.cn/upload_files/2023/08/16/FqxHFkCQQvsOpUbIqWR2aFIG_LfW.png";
              t.unshift({
                key: "back",
                show: 1,
                title: "返回",
                images: {
                  after_slide: o,
                  before_slide:
                    "https://img01.yzcdn.cn/upload_files/2023/08/16/FgCOwpyU3CBjnt9a6FBhKIUycPU3.png",
                  standard: o,
                },
              });
            }
            return (
              t && t.length && (t = t.filter((e) => e.show).slice(0, 3)),
              "global" === a.style_color_type &&
                e &&
                ((a.style_color_custom_background_color = e.navColor),
                (a.style_color_custom_font_color =
                  e.textColor && e.textColor.includes("#fff")
                    ? "white"
                    : "black")),
              Object(i.a)({}, a, { shortcut_list: t })
            );
          },
          init() {
            Object(g.h)();
            var { top: e, height: a, right: t, width: i, canUseNav: n } = g.a,
              o = Object(g.e)(!1),
              s = Object(c.b)(),
              { statusBarHeight: r } = s,
              { windowWidth: h, fontSizeSetting: p } = s,
              d = h - t,
              u = h - 2 * i - 4 * d,
              v = getCurrentPages(),
              { configData: _ } = this.data,
              m = v[v.length - 1].route,
              f = v.length > 1;
            !f && (m === le || m === ce) && (f = !0);
            var O = m === ae || m === te || m === oe || m === se || m === re;
            O && (f = !1),
              (0 !== m.indexOf(ie) && 0 !== m.indexOf(ne)) || (m = ie);
            var T,
              b,
              E,
              y =
                ((T = m),
                (b = this.data.configData.supportPages),
                void 0 !== (E = W[T]) &&
                  (b || []).map((e) => +e).indexOf(E) > -1),
              P = ((e) => g.c.includes(e))(m),
              k = _.sysPath.length + _.customPath.length > 1,
              S = Object(g.g)(m),
              { type: C, open: j } = S || {};
            "back" === C && (f = j);
            var w = (k && y) || ("home" === C ? j : !O),
              U = !1;
            ee.forceShowHome() && ((U = !0), (w = !0));
            var A =
              "width: " +
              (f ? i : a) +
              "px;height: " +
              a +
              "px;left: " +
              d +
              "px;top: " +
              e +
              "px;border-radius: " +
              o +
              "px;";
            Object(l.b)() &&
              (Object(l.a)() || (r = 0),
              (A =
                "width: 32px;height: 32px;left: 7px;top: " +
                (r + 3) +
                "px;border:none;"),
              (o = r + 40),
              (u = 173));
            var I = "top: " + (o + 13) + "px;left: " + d + "px",
              D = "left: " + ((f ? (i / 4) * 3 : a / 2) - 7) + "px";
            this.initImmersionData(),
              this.triggerEvent("set-height", o),
              this.setData({
                showMenuMain: w,
                showImmersionMenuMain: U,
                height: o,
                paddingTop: Object(g.f)(),
                fontSizeSetting: p,
                canUseNav: n,
                textWidth: u,
                showMenuBack: f,
                customIconStyle: A,
                openMenuStyle: I,
                openMenuAfterStyle: D,
                currentSupport: y,
                specialSupport: P,
                isSkyline: "skyline" === this.renderer,
              });
          },
          isFirstPage() {
            var e = getCurrentPages();
            return (
              !!(
                2 === e.length &&
                e[0] &&
                e[0].route &&
                e[0].route.includes("pages/common/blank-page/index")
              ) || !(e.length > 1)
            );
          },
          initImmersionData() {
            var { origin_immersion: e, navigationbar_config_type: a } =
                this.data.navigationbarConfigData || {},
              t = "onPageScroll" + this.getPageKey();
            if (e)
              return (
                Q.default.off(t, this.pageScrollFn),
                Q.default.on(t, this.pageScrollFn),
                void this.setData({ originImmersion: !0 })
              );
            var i = !1;
            if (Object.keys(this.data.navigationbarConfigData || {}).length) {
              if ("global" === a) return;
              i = !0;
              var n = this.getShowComponentData();
              X.a.off(t, this.pageScrollFn),
                Q.default.off(t, this.pageScrollFn),
                X.a.on(t, this.pageScrollFn),
                Q.default.on(t, this.pageScrollFn),
                this.setData({
                  cd: n,
                  useImmersion: i,
                  needPointClickNav: this.getNeedPointClickNav(),
                });
            }
          },
          getNeedPointClickNav() {
            var {
              useImmersion: e,
              immersionUpShow: a,
              navigationbarConfigData: t,
            } = this.data;
            return !(
              !e ||
              a ||
              "gaussianblur" === t.style_color_custom_type ||
              "immersion" !== t.navigationbar_type
            );
          },
          getPageKey() {
            return (
              this.__pageEventUniqueKey ||
                (this.__pageEventUniqueKey = Object(z.a)()),
              this.__pageEventUniqueKey
            );
          },
          onPageScrollIntersectionObserver(e) {
            if (this.data.originImmersion) {
              var a = 0;
              e.scrollTop > 10 && (a = 1), this.setData({ opacityVal: a });
            } else {
              var t = !1;
              e.scrollTop > 10 && (t = !0),
                t !== this.data.immersionUpShow &&
                  this.setData({ immersionUpShow: t }),
                wx.nextTick(() => {
                  this.setData({
                    needPointClickNav: this.getNeedPointClickNav(),
                  });
                });
            }
          },
          handleNavOpacity(e) {
            this.data.originImmersion && this.setData({ opacityVal: e });
          },
          getStoreConfig: () =>
            wx
              .getStorage("__TOP_NAV_CONFIG__")
              .then((e) => {
                var { time: a = 0, data: t = H } = e || {};
                return new Date().getTime() - a > 6e5 || !ge
                  ? q()
                  : { data: t, cache: !0 };
              })
              .catch(() => q()),
          getConfig() {
            (ee.isHqEnterShop() ? Promise.resolve() : ee.waitForEnterShop())
              .then(() =>
                this.isComponentHide
                  ? new Promise((e) => {
                      this._cacheFunc = () => {
                        e(this.getStoreConfig());
                      };
                    })
                  : this.getStoreConfig()
              )
              .then((e) => {
                var a,
                  t = getCurrentPages(),
                  n = t[t.length - 1].route,
                  o = Object(g.g)(n),
                  {
                    type: r,
                    open: l,
                    sysPath: c = [],
                    customPath: h = [],
                  } = o || {},
                  p = "menu" !== r || l;
                if (e && e.data && !e.cache) {
                  try {
                    var d = JSON.parse(e.data).find(
                      (e) => "shop_top_nav" === e.type
                    );
                    d && (a = s.a.toCamelCase(d));
                  } catch (e) {
                    a = H;
                  }
                  p && (a.sysPath.push(...c), a.customPath.push(...h)),
                    (a.sysPath = p
                      ? a.sysPath
                          .filter((e) => 1 === e.show)
                          .map((e, a, t) =>
                            Object(i.a)({}, e, {
                              _right:
                                (t.length > 4 && (a + 1) % 4 == 0) ||
                                a === t.length - 1
                                  ? 0
                                  : 24,
                            })
                          )
                      : []),
                    (a.customPath = p
                      ? a.customPath.map((e, t) =>
                          Object(i.a)({}, e, {
                            _right:
                              (a.customPath.length > 4 && (t + 1) % 4 == 0) ||
                              t === a.customPath.length - 1
                                ? 0
                                : 24,
                          })
                        )
                      : []),
                    wx.setStorage("__TOP_NAV_CONFIG__", {
                      data: a,
                      time: new Date().getTime(),
                    }),
                    (ge = !0);
                } else a = e.data;
                return a;
              })
              .catch((e) => {})
              .then((e) => {
                var { navigationbarConfigData: a } = this.data,
                  { special_nav_bg_color: t, special_nav_color: n } = a,
                  o = e || Object(i.a)({}, H);
                t && (o.navColor = t),
                  n && (o.textColor = n),
                  this.setData({ configData: o }, this.init.bind(this));
              });
          },
          onMenuTap() {
            ee.logger.log({
              et: "click",
              ei: "nav_button_weapp",
              en: "导航按钮点击",
              si: ee.getKdtId(),
              params: { is_show: Number(this.data.isMenuOpen) },
            });
            var {
              configData: { sysPath: e, customPath: a },
              currentSupport: t,
            } = this.data;
            t && e.length + a.length > 1
              ? this.onOpenMenuStatusChange()
              : this.onHomeTap();
          },
          onOpenMenuStatusChange() {
            this.setData({ isMenuOpen: !this.data.isMenuOpen });
          },
          onImmersionTap(e) {
            this[
              {
                search: "onSearchTap",
                marketingPage: "onMarketingPageTap",
                allGoods: "onAllGoodsTap",
                shopcar: "onShopCarTap",
                usercenter: "onUserCenterTap",
                home: "onHomeTap",
                back: "onBackTap",
              }[e.detail.key]
            ](),
              this.logNavTapEvent({ event_key: e.detail.key });
          },
          onMenuSysPathTap(e) {
            var { detail: a } = e;
            this[F[a]](), this.logNavTapEvent({ event_key: a });
          },
          onHomeTap() {
            r.a.switchTab({ url: "/" + te });
          },
          onUserCenterTap() {
            Z.switchTab("Usercenter").catch(() => {
              Z.navigate("Usercenter");
            });
          },
          onShopCarTap() {
            Object(Y.a)({
              path: "/pages/goods/cart/index",
              fail() {
                r.a.navigate({ url: "/packages/goods/cart/index" });
              },
            });
          },
          onAllGoodsTap() {
            Z.navigate("AllGoodsList");
          },
          onMarketingPageTap() {
            r.a.navigate({ url: "/packages/ext-marketing-page/index" });
          },
          onBackTap() {
            1 === getCurrentPages().length
              ? this.onHomeTap()
              : wx.navigateBack();
          },
          onSearchTap() {
            r.a.navigate({
              url: "/packages/shop/search-page/index?keepWords=&isFromList=1",
            });
          },
          onMenuCustomPathTap(e) {
            var { detail: a } = e;
            Object(B.a)(a, a),
              this.logNavTapEvent({
                event_key: "custom_path",
                custom_title: a.title,
                custom_url: a.link_url,
              });
          },
          handleScroll() {
            h.a.setStickyControlItem("customNavigation", this.data.height, !0);
          },
          getImInfo() {
            ee.getDefaultImData().then((e) => {
              this.setData({ contactExtra: e });
            });
          },
          openImmersiveStatus() {
            (this.opacityFn = Object(J.a)(this.handleNavOpacity, 50)),
              Q.default.on("onNavOpacityChange", this.opacityFn, this);
            Q.default.on(
              "onSetImmersiveReady",
              () => {
                Q.default.trigger("onSetImmersive", {
                  status: !0,
                  navHeight: this.data.height,
                });
              },
              this
            ),
              this.setData({ originImmersion: !0 });
          },
          initOriginImmersion() {
            var e = getCurrentPages(),
              a = e[e.length - 1].route;
            if (a === le || a === ce) {
              var t = "goods_detail_navigation_bar_style",
                i = ee.getShopConfigDataSync();
              0 === Object.keys(i).length
                ? ee.getShopConfigData().then((e) => {
                    "1" === e[t] && this.openImmersiveStatus();
                  })
                : "1" === i[t] && this.openImmersiveStatus();
            }
          },
          logNavTapEvent(e) {
            var a = getCurrentPages(),
              t = a[a.length - 1].route;
            ee.logger.log({
              et: "click",
              ei: "shortcut_item_click",
              en: "快捷按钮点击情况",
              si: ee.getKdtId(),
              params: Object(i.a)(
                { component: "navigation_bar_weapp", page_key: t },
                e
              ),
            });
          },
          handleShare() {
            this.triggerEvent("share");
          },
        },
      });
    },
    JIO9: function (e, a, t) {
      t.d(a, "a", function () {
        return j;
      });
      var i = t("+I+c"),
        n = t("Fcif"),
        o = t("9ZMt"),
        s = t("US/N"),
        r = t("hHpg"),
        l = t("xers"),
        c = t.n(l),
        g = t("w2Y9"),
        h = t.n(g),
        p = t("tuFO"),
        d = t.n(p),
        u = t("ONqW"),
        v = (e) => {
          var { videoDynamicParams: a, linkTitle: t } = e;
          return Object(n.a)({}, a, {
            image_url: null == e ? void 0 : e.imageUrl,
            link_title: t,
          });
        },
        _ = t("YeA1"),
        m = t("7WUL"),
        f = t("tmLU"),
        O = (t("4jn8"), t("2wjL")),
        T = t("R18q"),
        b = o.default.getApp();
      function E(e) {
        var a = b.getKdtId();
        Object(f.c)({
          navigatePath: "retail-shelf",
          navigateCb: (t) => {
            setTimeout(() => {
              T.a.mark.start(
                "retail_shelf_init_" + b.globalData.shelfParams.mode
              ),
                T.a.mark.start("retail_shelf_config");
              var i = "/" + e + "&prefetchKey=" + t + "&prefetchKdtId=" + a;
              o.default.$native.navigateTo({ url: i });
            }, 150);
          },
          prefetchCb: () => {
            var a,
              { mode: t, filter: i } = O.a.getAll(e) || {};
            return 0 !== t || i
              ? Promise.reject()
              : ((a = { mode: t }),
                Object(s.default)({
                  path: "retail/h5/miniprogram/shelf-config/getFirstLevelConfigs",
                  method: "POST",
                  data: Object(n.a)({}, a, {
                    useSwitch: "v2",
                    supportUnavailableGoods: 2,
                  }),
                }));
          },
        });
      }
      var y = (e, a) => {
          o.default.$native.getSetting({
            success: (t) => {
              var i = t.authSetting["scope.userLocation"];
              void 0 === i || !0 === i
                ? o.default.$native.getLocation({
                    type: "gcj02",
                    fail: () => {
                      null != a &&
                        a.handleShowAuthDialog &&
                        a.handleShowAuthDialog();
                    },
                    success: () => {
                      E(e);
                    },
                  })
                : !1 === i && E(e);
            },
          });
        },
        P = (e, a) => {
          var { linkType: t, linkUrl: i } = e;
          [m.c.SELF, m.c.TAKEOUT, m.c.SaleToday, m.c.SaleAdvance].includes(t)
            ? ((b.globalData.shelfParams = { mode: m.d[t] }), y(m.e[t], a))
            : [m.c.SCAN_GO, m.c.FREE_GO].includes(t)
            ? (T.a.mark.start("scan_order_decorate"),
              o.default.navigate({ url: "/" + i }))
            : [m.c.SHELF_GOODS, m.c.SHELF_GROUP].includes(t)
            ? ((e) => {
                var { linkId: a, linkType: t, alias: i, extraData: n = {} } = e,
                  o = "shelf_goods" === t,
                  s = ((e, a, t) =>
                    e && a && t ? (a.includes(1) && t.includes(1) ? 0 : 1) : 0)(
                    o,
                    n[o ? "groupSupportDeliveryType" : "deliveryType"],
                    o ? n.goodSupportDeliveryType : [1, 2, 3]
                  ),
                  r = { mode: s };
                (b.globalData.shelfParams = { mode: s }),
                  "shelf_goods" === t &&
                    Object.assign(r, {
                      fromShared: 1,
                      sharedGoodsIdProp: a,
                      sharedGoodsAliasProp: i,
                    }),
                  y(h.a.add(m.f, r));
              })(e)
            : t === m.c.WX_SCAN_CODE &&
              (b.logger &&
                b.logger.log({
                  et: "custom",
                  ei: "click_wx_scan_code",
                  en: "点击扫一扫链接",
                }),
              wx.scanCode({
                success: (e) => {
                  e.path
                    ? (Object(r.a)({
                        type: "success",
                        message: "识别成功，正在跳转",
                        duration: 0,
                      }),
                      wx.navigateTo({
                        url: "/" + e.path,
                        complete: () => {
                          r.a.clear();
                        },
                      }))
                    : r.a.fail("仅能扫此商家桌码/店铺码哦");
                },
                fail: () => {
                  r.a.error("识别失败");
                },
              }));
        },
        k = ["type"],
        S = [
          "/pages/home/dashboard/index",
          "/pages/goods/cart/index",
          "/pages/usercenter/dashboard/index",
          "/pages-retail/usercenter/dashboard-v2/index",
        ],
        C = (e) => {
          e && o.default.navigate({ url: e });
        },
        j = function (e, a) {
          void 0 === a && (a = {});
          var { dmc: t } = Object(_.a)(),
            { type: l = "" } = e,
            g = "",
            p = !1,
            {
              alias: f,
              linkType: O = "",
              linkId: T = "",
              linkUrl: b = "",
              linkTitle: E = "",
              extraData: y = {},
              query: j = {},
              goodsAlias: w,
            } = e,
            {
              kdtId: U,
              banner_id: A,
              imageUrl: I,
              goodsPreloadOpt: D,
              title: x,
            } = a,
            R = { kdt_id: U },
            N = {};
          if ((A && (N.banner_id = A), "chat" === (l = O || l)));
          else if ("homepage" === l)
            t.switchTab("Home", Object(n.a)({}, N, R)).catch(() => {
              t.navigate("Home", Object(n.a)({}, N, R));
            });
          else if ("goods" === l && f) {
            var { image: G = {} } = D || {};
            t.navigate("GoodsDetail", Object(n.a)({ alias: f }, j, N), {
              bizParams: {
                alias: f,
                image: { url: I || G.url, width: G.width, height: G.height },
                title: x,
              },
            });
          } else if ("feature" === l && f)
            t.navigate("Feature", Object(n.a)({ alias: f }, N));
          else if ("tag" === l) {
            var L = f ? { alias: f } : h.a.getAll(b);
            L.alias &&
              t.navigate(
                "GoodsTag",
                Object(n.a)({ alias: L.alias, title: E }, N)
              );
          } else if ("cart" === l)
            t.switchTab("Cart", Object(n.a)({}, N, R)).catch(() => {
              t.navigate("Cart", Object(n.a)({}, N, R));
            });
          else if ("usercenter" === l)
            t.switchTab("Usercenter", Object(n.a)({}, N, R)).catch(() => {
              t.navigate("Usercenter", Object(n.a)({}, N, R));
            });
          else if ("shopnote" === l)
            t.switchTab("Shopnote", Object(n.a)({}, N, R)).catch(() => {
              t.navigate("Shopnote", Object(n.a)({}, N, R));
            });
          else if ("allgoods" === l)
            t.navigate("AllGoodsList", Object(n.a)({ title: E }, N));
          else if ("coupon" === l)
            t.navigate(
              "CouponDetail",
              Object(n.a)(
                {
                  id: e.link_id || e.linkId,
                  type:
                    7 === (e.coupon_type || e.couponType) ? "promocard" : "",
                },
                N
              )
            );
          else if ("point_card" === l)
            C(
              "/packages/pointstore/goods-details/index?goods_id=" +
                e.pointGoodsId +
                "&" +
                A +
                "=" +
                A
            );
          else if ("pointsstore" === l)
            t.navigate("PointGoodsList", Object(n.a)({}, N, R));
          else if ("seckill" === l)
            t.navigate(
              "Seckill",
              Object(n.a)({ alias: f }, w ? { goodsAlias: w } : {}, N)
            );
          else if ("bargain" === l)
            t.navigate(
              "GoodsDetail",
              Object(n.a)(
                {
                  alias: f,
                  umpType: e.umpType || "",
                  activityId: e.activityId,
                },
                N
              )
            );
          else if ("paidcolumn" === l)
            t.navigate("PaidContentColumn", Object(n.a)({ alias: f }, N));
          else if ("paidcontent" === l)
            t.navigate("PaidContentContent", Object(n.a)({ alias: f }, N));
          else if ("mypaidcontent" === l)
            t.navigate("PaidContentList", Object(n.a)({}, N, R));
          else if ("paidlive" === l)
            t.navigate("PaidContentLive", Object(n.a)({ alias: f }, N));
          else if ("allcourse" === l)
            t.navigate("EduGoodsList", Object(n.a)({}, N, R));
          else if (
            "course" === l ||
            "educourse" === l ||
            "allofflinecourse" === l ||
            "eduappointment" === l ||
            "course_group" === l ||
            "course_category" === l ||
            "edumoments" === l
          ) {
            var M = b.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5");
            t.navigate("EduWebview", Object(n.a)({ targetUrl: M }, N));
          } else if ("link" === l) {
            var { linkUrl: F } = e;
            F &&
              /mp.weixin.qq.com\/s/.test(F) &&
              t.navigate("CommonWebview", Object(n.a)({ src: F }, N));
          } else if ("weapplink" === l && "1" === y.linkType) {
            "/" !== (g = y.myWeappLink)[0] && (g = "/" + g);
            var W = g.split("?")[0];
            if (
              (S.indexOf(W) > -1 && (p = !0),
              0 ===
                (g = h.a.remove(g, "shopAutoEnter")).indexOf(
                  "/pages/common/blank-page/index"
                ))
            ) {
              var H = h.a.getAll(g);
              if (H.weappSharePath) {
                var B = decodeURIComponent(H.weappSharePath);
                (B = h.a.remove(B, "shopAutoEnter")),
                  (H.weappSharePath = B),
                  (g = h.a.add("/pages/common/blank-page/index", H));
              }
            }
            if (!c()(a) && !p) {
              var { banner_id: K } = a;
              g = h.a.add(g, { banner_id: K });
            }
            o.default.navigate({ url: g }).catch(() => {
              wx.reLaunch({ url: g });
            });
          } else if ("weapplink" === l && "2" === y.linkType)
            +y.useShortLink || +y.use_short_link
              ? o.default.$native.navigateToMiniProgram({
                  shortLink: y.shortLink || y.short_link,
                })
              : o.default.$native.navigateToMiniProgram({
                  appId: y.otherWeappAppid || y.other_weapp_appid,
                  path: y.otherWeappLink || y.other_weapp_link,
                });
          else if ("calendar_checkin" === l)
            t.navigate("Checkin", Object(n.a)({}, R, N));
          else if ("zodiac" === l)
            t.navigate("LuckyLottery", Object(n.a)({ alias: f }, N));
          else if ("shopnote_detail" === l)
            t.navigate("ShopnoteDetail", Object(n.a)({ noteAlias: f }, N));
          else if ("mp_article" === l)
            t.navigate("MpArticle", Object(n.a)({ noteAlias: f }, N));
          else if (
            "hotellist" === l ||
            "recharge_center" === l ||
            "point_coupon" === l ||
            "room_typelist" === l ||
            "combolist" === l
          )
            t.navigate("CommonWebview", Object(n.a)({ src: b }, N));
          else if ("period_list" === l)
            t.navigate("PeriodBuyList", Object(n.a)({}, R, N));
          else if ("point_store" === l)
            t.navigate("PointGoodsList", Object(n.a)({}, R, N));
          else if (
            "groupon" === l ||
            "collector_card" === l ||
            "gift_card" === l
          )
            b && o.default.navigate({ url: b });
          else if ("weapp_marketing_page" === l || "marketing_page" === l)
            t.navigate(
              "MarketingPage",
              Object(n.a)({}, R, N, { id: y.id || "" })
            );
          else if ("survey" === l || "guaguale" === l || "history" === l) C("");
          else if ("video_number" === l) {
            var q = o.default.$native.getStorageSync("channelsLiveInfo") || "";
            if (!q) return;
            var { feedId: $, nonceId: X } = JSON.parse(q);
            o.default.$native.openChannelsLive &&
              o.default.$native.openChannelsLive({
                feedId: $,
                nonceId: X,
                finderUserName: T,
              });
          } else if ("social_fans" === l) {
            var { qrcode: z } = e,
              J = d()(
                h.a.add("/v3/message/live-qrcode/member", {
                  kdtId: U,
                  activitiesId: z,
                }),
                "h5",
                U
              );
            o.default.$native.navigateTo({
              url:
                "/pages/common/webview-page/index?src=" + encodeURIComponent(J),
            });
          } else if ("weapp_web_link" === l) C(h.a.add(b));
          else {
            if ("red-package" === l)
              return o.default.$native.showRedPackage({ url: b }), {};
            if ("member_code" === l)
              o.default.$native.navigateTo({
                url: "/packages/member-code/index",
              });
            else if ("vipcenter" === l)
              o.default.$native.navigateTo({
                url: "/packages/shop/levelcenter/free/index",
              });
            else if ("pay_vipcenter" === l)
              o.default.$native.navigateTo({
                url: "/packages/shop/levelcenter/plus/index",
              });
            else if ("shop_ranking_list" === l) {
              var { tabType: V } = e;
              if (V) {
                var Y = d()(
                  h.a.add("/wscshop/showcase/shop-ranking-list", { type: V }),
                  "h5",
                  U
                );
                o.default.$native.navigateTo({
                  url:
                    "/pages/common/webview-page/index?src=" +
                    encodeURIComponent(Y),
                });
              }
            } else if ("video_number_dynamic" === l) {
              var {} = e,
                Q = Object(i.a)(e.videoDynamicParams, k);
              ((e) => {
                var a = v(e);
                Object(u.a)().log({
                  et: "click",
                  ei: "wxvideo_video_click",
                  en: "视频号动态点击",
                  params: a,
                });
              })(e),
                o.default.$native.openChannelsActivity &&
                  o.default.$native.openChannelsActivity(
                    Object(n.a)({}, Q, {
                      success: () => {
                        ((e) => {
                          var a = v(e);
                          Object(u.a)().log({
                            et: "custom",
                            ei: "wxvideo_video_jump_success",
                            en: "视频号动态跳转成功",
                            params: a,
                          });
                        })(e);
                      },
                      fail: (a) => {
                        ((e, a) => {
                          var t = v(e);
                          Object(u.a)().log({
                            et: "custom",
                            ei: "wxvideo_video_jump_fail",
                            en: "视频号动态跳转失败",
                            params: Object(n.a)({}, t, {
                              error_msg: null == a ? void 0 : a.errMsg,
                            }),
                          });
                        })(e, a);
                      },
                    })
                  );
            } else if ("storelist" === l || "nearby_store_way" === l)
              o.default.$native.navigateTo({
                url: "/packages/shop/physical-store/index",
              });
            else if ("goods_classify" === l)
              t.navigate("CommonWebview", Object(n.a)({ src: b }, N));
            else if (Object.values(m.c).includes(l)) {
              var { context: Z } = a;
              P(e, Z);
            } else
              ["booking_mall", "express_mall"].includes(l) &&
                Object(s.default)({
                  method: "GET",
                  path: "wscdeco/decorate-api/getMallFeatureByType.json",
                  data: { type: l },
                }).then((e) => {
                  var { alias: a } = e;
                  a
                    ? t.navigate("Feature", { alias: a })
                    : Object(r.a)("未启用相关微页面");
                });
          }
        };
    },
  })
);
