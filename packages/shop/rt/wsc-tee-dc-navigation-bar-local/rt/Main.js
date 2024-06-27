"use strict";
var r = require("~/r");
r(
  "/Awk",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/Awk": function (t, e, a) {
        a.r(e);
        var n = a("Fcif"),
          i = a("nvdG"),
          h = a("taYb"),
          s = a("MLLI"),
          c = a("GFyo"),
          o = a("ScPz"),
          r = a("OSBj"),
          d = a("A7jD"),
          g = a("YeA1"),
          u = a("9ZMt"),
          p = a("w2Y9"),
          l = a.n(p),
          m = a("4jn8"),
          O = Object(s.b)(),
          {
            NEW_HOMEPAGE_ROUTE: f,
            APP_HOMEPAGE_ROUTE: b,
            NEW_GOODS_ROUTE: S,
            OLD_GOODS_ROUTE: x,
            TEE_NEW_HOMEPAGE_ROUTE: _,
            EXT_NEW_HOMEPAGE_ROUTE: P,
          } = o.b,
          T = !1,
          v = {
            data() {
              return {
                canUseNav: !0,
                fontSizeSetting: 16,
                height: Object(o.c)(),
                paddingTop: (O && O.statusBarHeight) || 20,
                textWidth: 161,
                showMenuMain: !1,
                showMenuBack: !1,
                customIconStyle: "",
                isMenuOpen: !1,
                configData: r.b,
                currentSupport: !1,
                openMenuStyle: "",
                openMenuAfterStyle: "",
                isHalfScreen: this.ctx.lambdas.checkIsHalfScreen(),
                title: "",
                imConfig: null,
              };
            },
            computed: {
              menuOrHomeIconClass() {
                if (this.configData.customPath)
                  return (
                    "nb__iconfont, nb__i-" +
                    (this.configData.customPath.length +
                      this.configData.sysPath.length >
                      1 && this.currentSupport
                      ? "menu"
                      : "home")
                  );
              },
            },
            created() {
              (this.unwatchKdtId = this.ctx.watch("kdtId", (t) => {
                setTimeout(() => {
                  t && (this.getConfig(), T && (T = !1));
                }, 1e3);
              })),
                Object(g.b)(this, ["title", "imConfig"]);
            },
            destroyed() {
              this.unwatchKdtId && this.unwatchKdtId();
            },
            methods: {
              onContactBack(t) {
                t && t.path && this.ctx.dmc.navigate(l.a.add(t.path, t.query));
              },
              init() {
                var t,
                  e,
                  { top: a, height: n, right: i, width: h, canUseNav: s } = o.a,
                  c = Object(o.c)(),
                  { statusBarHeight: d } = O,
                  { windowWidth: g, fontSizeSetting: u } = O,
                  p = g - i,
                  l = g - 2 * h - 4 * p,
                  m = getCurrentPages(),
                  { configData: T, isHalfScreen: v } = this.data,
                  M = this.$getPageRoute(),
                  w = m.length > 1,
                  E = M === f || M === b || M === _ || M === P;
                E && (w = !1),
                  (0 !== M.indexOf(S) && 0 !== M.indexOf(x)) || (M = S);
                var j = Object(r.a)(M, this.data.configData.supportPages),
                  y =
                    (((null == (t = T.sysPath) ? void 0 : t.length) +
                      (null == (e = T.customPath) ? void 0 : e.length) >
                      1 &&
                      j) ||
                      !E) &&
                    !v,
                  D =
                    "width: " +
                    (w ? h : n) +
                    "px;height: " +
                    n +
                    "px;left: " +
                    p +
                    "px;top: " +
                    a +
                    "px;border-radius: " +
                    c +
                    "px;";
                v &&
                  (this.ctx.lambdas.checkFromShowcase() || (d = 0),
                  (D =
                    "width: 32px;height: 32px;left: 7px;top: " +
                    (d + 3) +
                    "px;border:none;background:none"),
                  (c = d + 40),
                  (l = 173));
                var k = "top: " + (c + 13) + "px;left: " + p + "px",
                  C = "left: " + ((w ? (h / 4) * 3 : n / 2) - 7) + "px";
                (this.ctx.data.topNavHeight = c),
                  this.batchSetData({
                    showMenuMain: y,
                    height: c,
                    paddingTop: d,
                    fontSizeSetting: u,
                    canUseNav: s,
                    textWidth: l,
                    showMenuBack: w,
                    customIconStyle: D,
                    openMenuStyle: k,
                    openMenuAfterStyle: C,
                    currentSupport: j,
                  });
              },
              getConfig() {
                new Promise((t) =>
                  Object(c.c)("__TOP_NAV_CONFIG__").then((e) => {
                    var { time: a = 0, data: n = r.b } = e || {};
                    return new Date().getTime() - a > 6e5 || !T
                      ? t(Object(d.a)(this.ctx.data.kdtId))
                      : t({ data: n, cache: !0 });
                  })
                )
                  .then((t) => {
                    var e = {};
                    if (t && t.data && !t.cache) {
                      try {
                        var a = JSON.parse(t.data).find(
                          (t) => "shop_top_nav" === t.type
                        );
                        a && (e = h.a.toCamelCase(a));
                      } catch (t) {
                        e = r.b;
                      }
                      (e.sysPath = e.sysPath
                        .filter((t) => 1 === t.show)
                        .map((t, e, a) =>
                          Object(n.a)({}, t, {
                            _right:
                              (a.length > 4 && (e + 1) % 4 == 0) ||
                              e === a.length - 1
                                ? 0
                                : 24,
                          })
                        )),
                        (e.customPath = e.customPath.map((t, a) =>
                          Object(n.a)({}, t, {
                            _right:
                              (e.customPath.length > 4 && (a + 1) % 4 == 0) ||
                              a === e.customPath.length - 1
                                ? 0
                                : 24,
                          })
                        )),
                        Object(c.g)("__TOP_NAV_CONFIG__", {
                          data: e,
                          time: new Date().getTime(),
                        }),
                        (T = !0);
                    } else e = (null == t ? void 0 : t.data) || {};
                    return e;
                  })
                  .catch((t) => {})
                  .then((t) => {
                    this.batchSetData({ configData: t || r.b }, this.init);
                  });
              },
              onMenuTap() {
                var {
                  configData: { sysPath: t, customPath: e },
                  currentSupport: a,
                } = this.data;
                a && t.length + e.length > 1
                  ? this.onOpenMenuStatusChange()
                  : this.onHomeTap();
              },
              onOpenMenuStatusChange() {
                this.batchSetData({ isMenuOpen: !this.data.isMenuOpen });
              },
              onMenuSysPathTap(t) {
                var {
                  currentTarget: {
                    dataset: { key: e },
                  },
                } = t;
                this[r.c[e]]();
              },
              onHomeTap() {
                this.ctx.dmc.switchTab("/" + b);
              },
              onUserCenterTap() {
                Object(m.a)({
                  path: "/pages/usercenter/dashboard/index",
                  fail: () => {
                    this.ctx.dmc.navigate(
                      "/packages/usercenter/dashboard/index"
                    );
                  },
                });
              },
              onShopCarTap() {
                Object(m.a)({
                  path: "/pages/goods/cart/index",
                  fail: () => {
                    this.ctx.dmc.navigate("/packages/goods/cart/index");
                  },
                });
              },
              onAllGoodsTap() {
                this.ctx.dmc.navigate("AllGoodsList");
              },
              onMarketingPageTap() {
                this.ctx.dmc.navigate("MarketingPage");
              },
              onBackTap() {
                1 === getCurrentPages().length
                  ? this.onHomeTap()
                  : this.ctx.dmc.back();
              },
              onSearchTap() {
                var { hotKeys: t } = this.data.configData;
                this.ctx.dmc.navigate("Search", { hot: JSON.stringify(t) });
              },
              onMenuCustomPathTap(t) {
                var {
                  currentTarget: {
                    dataset: { item: e },
                  },
                } = t;
                Object(i.a)(e, !0);
              },
              handleScroll() {},
              batchSetData(t, e) {
                Object.entries(t).forEach((t) => {
                  var [e, a] = t;
                  this[e] = a;
                }),
                  e &&
                    this.$nextTick(() => {
                      e();
                    });
              },
            },
          };
        e.default = u.default.component(v);
      },
    }
  )
);
