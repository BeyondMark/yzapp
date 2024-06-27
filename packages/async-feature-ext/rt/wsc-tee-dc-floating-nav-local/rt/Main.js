"use strict";
var r = require("~/r");
r(
  "/jhn",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/jhn": function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          s = a("JdrY"),
          n = a("Tewj"),
          h = (a("AGZf"), a("YVLg")),
          o = a("PlO7"),
          r = a("Ix7h"),
          l = a("YeA1"),
          c = a("9ZMt"),
          d = a("KrsW"),
          p = a("/e9d"),
          g = a("hmrP"),
          v = a.n(g),
          u = a("2xJD"),
          S = a("KDJo"),
          f = a("qHGj"),
          I = a("YehF"),
          C = a("NY/N"),
          b = a("B5X6"),
          m = a("Pz1p"),
          O = a("w2Y9"),
          A = a.n(O),
          T = a("fChk"),
          y = a("taYb"),
          N = a("WKDq"),
          L = a("xRet"),
          x = a("4jn8"),
          P = Object(m.b)(),
          w = c.default.getApp(),
          j = v.a.isAndroid(),
          E = new C.a(),
          k =
            "https://b.yzcdn.cn/public_files/d54cce9404af18381038acb27935dafa.png",
          D = "/public_files/2018/08/29/4dde171ddb3d829e147799fb48e2b91d.png",
          U = {
            props: {
              customWish: { type: Boolean, default: !1 },
              needSetWscIconController: { type: Boolean, default: !1 },
              sourceFrom: { type: String, default: "default" },
            },
            data() {
              return {
                isShowContian: !1,
                active: !1,
                hidden: !1,
                typeMap: s.j,
                iconTextMap: s.e,
                liveNav: null,
                mainFloatingNav: {},
                subFloatingNavs: [],
                normalList: [],
                independentList: [],
                skeletonNum: 0,
                isIphoneX: P,
                im: { sourceParam: "", businessId: "" },
                isWxvideoLiveShow: !1,
                hasLivePop: !!this.ctx.widgets.LivePopup,
                hasShareActivity: !1,
                first: {},
                shareActivityIcon: 0,
                isLine: !1,
                forbidShare: !1,
                gap: 58,
                showPoster: !1,
                poster: "",
                showChannellive: !1,
                offlineId: Object(N.a)() || 0,
                showSharePop: !1,
                shareBlockStyle: "",
                isShowFloating: !1,
                shareCardPageType: "",
                alias: "",
                isShowFloatingNav: !0,
                reserveActivity: {},
                tableBooking: !1,
              };
            },
            externalClasses: ["custom-class"],
            computed: {
              firstImage() {
                return "background-image: url(" + this.first.iconUrl + ")";
              },
              mainFloatBg() {
                return (
                  "background-image: url(" +
                  this.mainFloatingNav.foldedIconUrl +
                  ")"
                );
              },
              mainFloatUnfoldedBg() {
                return (
                  "background-image: url(" +
                  this.mainFloatingNav.unfoldedIconUrl +
                  ")"
                );
              },
              subNavNum() {
                return this.getSubNavNum(this.subFloatingNavs);
              },
            },
            watch: {
              active() {
                this.needSetWscIconController &&
                  getApp().trigger(
                    "ranta-feature-event-floatingActive",
                    this.active
                  );
              },
            },
            created() {
              var t = this.$getPageRoute();
              L.d.test(t) && (t = this.ctx.env.route.slice(1)),
                (this.pageType = this.getPageType(t)),
                this.initPullDownRefresh(),
                (this.lastScrollTop = 0),
                (this.justAttached = !0),
                (this.hasSetShare = !1),
                (this.initScroll = !0),
                this.ctx.process.define(
                  "createOrUpdateIndependentIcon",
                  (t) => {
                    this.createOrUpdateIndependentIcon(t);
                  }
                ),
                (this.gap = 58),
                n.default.on(
                  "" + (s.a.UPDATE_ICON_POSITION + this.ctx.data.random),
                  this.handleIconPositionChange
                ),
                Object(l.c)(this, ["kdtId", "shopMetaInfo"], {
                  callback: () => {
                    this.initFloatNavData(), this.initLiveFloat();
                  },
                }),
                this.ctx.watch("tableBooking", (t) => {
                  this.tableBooking = t;
                }),
                this.ctx.watch("alias", (t) => {
                  this.alias = t;
                }),
                (this.showFloatingNavUnWatch = this.ctx.watch(
                  "isShowFloatingNav",
                  (t) => {
                    void 0 !== t && (this.isShowFloatingNav = t);
                  }
                )),
                (this.addBaseHeightUnWatch = this.ctx.watch(
                  "addBaseHeight",
                  (t) => {
                    this.createOrUpdateIndependentIcon({
                      type: "floatnav",
                      addBaseHeight: t,
                    });
                  }
                )),
                (this.unwatchSeActivity = this.ctx.watch("seActivity", (t) => {
                  t &&
                    t.activityAlias &&
                    ((this.hasShareActivity = !0), this.checkShareGiftIcon());
                }));
            },
            mounted() {
              this.ctx.event.emit("floating:nav:init");
              var {
                activityId: t,
                appIdentity: e,
                type: a,
              } = this.$getPageQuery();
              "tableBooking" === a &&
                ((this.reserveActivity = { type: a }),
                (this.shareCardPageType = "micropage")),
                t &&
                  (this.reserveActivity = {
                    activityId: t,
                    appIdentity: e,
                    type: a,
                  });
            },
            destroyed() {
              n.default.off(s.a.PAGE_SCROLL, this.scrollHandler),
                this.ctx.event.remove(s.a.ADD_CART, this.handleAddCart),
                (this.hasSetPageScroll = !1),
                this.iconController && this.iconController.destroy(this),
                this.unwatchOpenFloatGoods && this.unwatchOpenFloatGoods(),
                this.ctx.event.remove(
                  s.a.WISH_STATE_CHANGE,
                  this.handleWishStateChange
                ),
                this.showFloatingNavUnWatch && this.showFloatingNavUnWatch(),
                this.baseHeightUnWatch && this.this.baseHeightUnWatch(),
                n.default.off(
                  s.a.CREATE_OR_UPDATE_INDEPENDENT_ICON,
                  this.createOrUpdateIndependentIcon
                ),
                n.default.off(
                  "" + (s.a.UPDATE_ICON_POSITION + this.ctx.data.random),
                  this.handleIconPositionChange
                ),
                n.default.off(s.a.PULL_DOWN, this.handlePullDownRefresh);
            },
            methods: {
              handleShowContian() {
                this.isShowContian = !getApp().isShopHq();
              },
              handleIconPositionChange(t) {
                this.ctx.event.emit(s.a.UPDATE_ICON_POSITION, t);
              },
              initFloatNavData(t) {
                if (
                  (void 0 === t && (t = !1),
                  this.ctx.data.kdtId &&
                    this.ctx.data.shopMetaInfo &&
                    this.isShowFloatingNav)
                ) {
                  this.handleShowContian();
                  var e,
                    a = [o.a.getNavData(this.pageType, t, this.ctx.data.kdtId)],
                    { shopMetaInfo: i } = this.ctx.data;
                  if (0 === Object.entries(i).length)
                    i =
                      null == (e = w.getShopInfoSync())
                        ? void 0
                        : e.shopMetaInfo;
                  (!Object(u.d)(i) && !Object(S.e)(i)) ||
                  s.g.test(this.$getPageRoute()) ||
                  s.l.test(this.$getPageRoute())
                    ? a.push(Promise.resolve())
                    : a.push(
                        ...E.getExtraIconList(
                          this.pageType,
                          this.ctx.data.kdtId
                        )
                      ),
                    Promise.all(a)
                      .then((e) => {
                        this.processNavData([e[0]], t);
                      })
                      .catch((t) => {});
                }
              },
              initLiveFloat() {
                var t,
                  e,
                  { shopMetaInfo: a } = this.ctx.data,
                  i = Object(f.d)(a);
                null != (t = (e = this.ctx.lambdas).checkIsOpenByLiveBag) &&
                t.call(e)
                  ? (this.showChannellive = !1)
                  : i
                  ? (this.showChannellive = !0)
                  : Object(b.a)().then((t) => {
                      t && (this.showChannellive = !0);
                    });
              },
              onClosePoster() {
                this.showPoster = !1;
              },
              checkShareGiftIcon() {
                var {
                  subFloatingNavs: t,
                  independentList: e,
                  normalList: a,
                  hasShareActivity: n,
                } = this;
                if (t.find((t) => t.navType === s.j.SHARE) && n) {
                  var h = e.findIndex((t) => t.navType === s.j.SHARE),
                    o = a.findIndex((t) => t.navType === s.j.SHARE);
                  if (h > -1)
                    e[h].iconUrl.indexOf(D) > -1 &&
                      this.$set(
                        this.independentList,
                        h,
                        Object(i.a)({}, this.independentList[h], { iconUrl: k })
                      );
                  else if (o > -1) {
                    a[o].iconUrl.indexOf(D) > -1 &&
                      this.$set(
                        this.normalList,
                        o,
                        Object(i.a)({}, this.normalList[o], { iconUrl: k })
                      );
                  }
                }
              },
              handleShare() {
                (this.pageType !== s.h.HOME && this.pageType !== s.h.FEATURE) ||
                  this.openSharePop(s.i[this.pageType]),
                  this.ctx.event.emit(s.a.SHARE);
              },
              openSharePop(t) {
                (this.shareCardPageType = t), (this.showSharePop = !0);
              },
              updateShareStatus() {
                (this.hasShareActivity = !0), this.checkShareGiftIcon();
              },
              hideSharePop() {
                this.showSharePop = !1;
              },
              updateWxvideoLiveStatus(t) {
                this.isWxvideoLiveShow = t;
              },
              onContactBack(t) {
                t &&
                  t.path &&
                  c.default.navigate({ url: A.a.add(t.path, t.query) });
              },
              handleMainNavTap() {
                var {
                    independentList: t,
                    isLine: e,
                    active: a,
                    normalList: n,
                  } = this,
                  h = t.findIndex((t) => t.navType === s.j.SHARE),
                  o = h > -1 ? t[h] : null;
                if (e && this.pageShowTime > 0) this.changeActive(!a);
                else {
                  var r = {};
                  0 !== this.pageShowTime || a
                    ? a || (this.pauseShare = !0)
                    : (e && n.find((t) => t.navType === s.j.SHARE)
                        ? t.splice(h, 1)
                        : h > -1 &&
                          (o.isExtra
                            ? !e && t.splice(h, 1)
                            : o.iconUrl === s.c.iconUrl &&
                              t.splice(
                                h,
                                1,
                                Object(i.a)({}, o, {
                                  iconUrl:
                                    "https://img01.yzcdn.cn/public_files/2018/08/29/4dde171ddb3d829e147799fb48e2b91d.png",
                                  isReplace: !1,
                                })
                              )),
                      (r.independentList = t)),
                    this.changeActive(!a, r, () => {
                      var { independentList: t } = this;
                      this.updateSalesManIcon(n, t, e, !a);
                    });
                }
              },
              handleNavTap(t) {
                if (t.currentTarget) {
                  var { navType: e } = t.currentTarget.dataset;
                  if (e) {
                    var a = this.subFloatingNavs.find(
                        (t) => t.navType === Number(e)
                      ),
                      i = Object(I.e)(this.ctx.data.shopMetaInfo);
                    switch (e) {
                      case s.j.BACK_TO_TOP:
                        Object(T.a)({ scrollTop: 0, duration: j ? 0 : 300 });
                        break;
                      case s.j.SHARE:
                        this.handleShare();
                        break;
                      case s.j.HOME:
                        this.ctx.dmc.switchTab(s.f[e]);
                        break;
                      case s.j.CART:
                        Object(x.a)({
                          path: "/pages/goods/cart/index",
                          fail: () => {
                            this.ctx.dmc.navigate(s.f[e]);
                          },
                        });
                        break;
                      case s.j.USERCENTER:
                        i
                          ? this.ctx.dmc.navigate(s.f[e + "-retail"])
                          : Object(x.a)({
                              path: "/pages/usercenter/dashboard/index",
                              fail: () => {
                                this.ctx.dmc.navigate(s.f[e]);
                              },
                            });
                        break;
                      case s.j.GUANG_LIVE:
                        c.default.$native.navigateToMiniProgram({
                          appId: a.appId,
                          path: a.path,
                        });
                        break;
                      case s.j.GOODS_SHOWCASE:
                        this.ctx.logger.log({
                          et: "click",
                          ei: "click_goods_showcase_nav",
                          en: "点击逛一逛悬浮窗",
                        }),
                          this.ctx.event.emit(s.a.SHOW_GOODS_CASE);
                        break;
                      case s.j.SCAN:
                        Object(p.a)();
                        break;
                      default:
                        var n;
                        if (s.j.CUSTOME.includes(+e))
                          try {
                            (n = y.a.toCamelCase(JSON.parse(a.extraData))) &&
                              this.ctx.lambdas.jumpToLink(n, {
                                kdtId: this.ctx.data.kdtId,
                              });
                          } catch (t) {
                            this.ctx.logger && this.ctx.logger.log(t);
                          }
                    }
                    this.active && this.changeActive(!1, {});
                  }
                }
              },
              handleClosePanel() {
                this.changeActive(!1, {});
              },
              changeActive(t, e, a) {
                void 0 === e && (e = {}),
                  this.batchSetData(Object(i.a)({ active: t }, e)),
                  this.$nextTick(() => {
                    a && a();
                  }),
                  this.isLine &&
                    this.iconController &&
                    this.iconController.setAlone(t);
              },
              handleWishStateChange(t) {
                this.refreshCartOrWishIcon(s.j.WISH, t.isAdded);
              },
              refreshCartOrWishIcon(t, e) {
                var a = this.subFloatingNavs.map((a) =>
                    a.navType === t ? Object(i.a)({}, a, { hasBadge: e }) : a
                  ),
                  {
                    normalList: s,
                    independentList: n,
                    isLine: h,
                  } = this.getComputedSubNavList(a);
                this.batchSetData({
                  first: a[0],
                  normalList: s,
                  independentList: n,
                  isLine: h,
                  subFloatingNavs: a,
                });
              },
              processNavData(t, e) {
                var [a] = t;
                void 0 === e && (e = !1);
                var {
                  liveNav: i,
                  mainFloatingNav: h,
                  subFloatingNavs: r = [],
                } = E.processNavData(a);
                if (
                  0 ===
                  (r = r.filter((t) => {
                    var { navType: e, independent: a } = t;
                    return (
                      e !== s.j.WISH &&
                      (e === s.j.HOME
                        ? this.pageType !== s.h.HOME
                        : e === s.j.CART
                        ? this.pageType !== s.h.GOODS_DETAIL
                        : (e === s.j.CONTACT &&
                            w.getDefaultImData().then((t) => {
                              this.im = t;
                            }),
                          e === s.j.SHARE &&
                            ((this.hasSetShare = !0),
                            (this.shareActivityIcon = +a + 1)),
                          e === s.j.GOODS_SHOWCASE &&
                            (this.ctx.data.hasGoodsShowcase = !0),
                          !0))
                    );
                  })).length
                )
                  return (
                    this.changeActive(!1, { hidden: !1, subFloatingNavs: [] }),
                    n.default.off(s.a.PAGE_SCROLL, this.scrollHandler),
                    (this.hasSetPageScroll = !1),
                    void (
                      this.iconController &&
                      this.iconController.setIcon({
                        type: "floatnav",
                        priority: 100,
                        height: 0,
                        canGoaway: !1,
                      })
                    )
                  );
                2 === h.floatingMode
                  ? this.hasSetPageScroll ||
                    (n.default.on(s.a.PAGE_SCROLL, this.scrollHandler, this),
                    (this.hasSetPageScroll = !0))
                  : this.hasSetPageScroll &&
                    (n.default.off(s.a.PAGE_SCROLL, this.scrollHandler),
                    (this.hasSetPageScroll = !1)),
                  (h.foldedIconUrl = this.getCdnImageUrl(h.foldedIconUrl)),
                  (h.unfoldedIconUrl = this.getCdnImageUrl(h.unfoldedIconUrl));
                var {
                  normalList: l,
                  independentList: c,
                  isLine: d,
                } = this.getComputedSubNavList(r);
                this.batchSetData({
                  hidden: !1,
                  liveNav: i,
                  mainFloatingNav: h,
                  subFloatingNavs: r,
                  first: r[0],
                  normalList: l,
                  independentList: c,
                  isLine: d,
                  skeletonNum: this.getSkeletonNum(l, d),
                  forbidShare: s.d[this.pageType] || !1,
                }),
                  this.$nextTick(() => {
                    this.checkShareGiftIcon();
                  }),
                  this.whereIsCart &&
                    (this.ctx.event.listen(s.a.ADD_CART, this.handleAddCart),
                    o.a.getCartCount(e).then((t) => {
                      this.refreshCartIcon(+t > 0);
                    })),
                  this.$nextTick(() => {
                    var { active: t } = this;
                    this.updateSalesManIcon(l, c, d, t);
                  });
              },
              createOrUpdateIndependentIcon(t) {
                var {
                  priority: e,
                  height: a,
                  type: i,
                  canGoaway: s,
                  addBaseHeight: n,
                } = t;
                this.iconController ||
                  (this.iconController = new h.a(
                    this.$getPageRoute(),
                    30,
                    10,
                    this.needSetWscIconController,
                    this.ctx
                  )),
                  n && this.iconController.addBase(n),
                  this.iconController.setIcon({
                    priority: e,
                    height: a,
                    type: i,
                    canGoaway: s,
                  });
              },
              updateSalesManIcon(t, e, a, i) {
                var s = e.length;
                a && i && t.length > 0
                  ? (s += t.length + 1)
                  : t.length > 0 && s++,
                  this.createOrUpdateIndependentIcon({
                    priority: 100,
                    height: 58 * s - 10,
                    type: "floatnav",
                  });
              },
              handleAddCart(t) {
                void 0 === t && (t = ""),
                  "addCart" === t.type &&
                    (o.a.addCartCount(), this.refreshCartIcon(!0));
              },
              refreshCartIcon(t) {
                var [e, a] = this.whereIsCart;
                1 === this.subFloatingNavs.length
                  ? (this.hidden.first && (this.hidden.first.hasBadge = t),
                    (this.subFloatingNavs[0].hasBadge = t))
                  : (this[e + "List"][a].hasBadge = t);
              },
              getSubNavNum(t) {
                var e = 0,
                  a = 0;
                return (
                  t.forEach((t) => {
                    var { independent: i } = t;
                    i ? e++ : a++;
                  }),
                  0 === e && 1 === a && ((e = 1), (a = 0)),
                  a > 0 && e++,
                  { visible: e, hidden: a }
                );
              },
              handlePullDownRefresh() {
                (this.active = !1),
                  this.justAttached && this.pageType !== s.h.GOODS_DETAIL
                    ? (this.justAttached = !1)
                    : this.iconController &&
                      this.iconController.id === this.$getPageRoute() &&
                      (this.ctx.event.remove(s.a.ADD_CART, this.handleAddCart),
                      this.initFloatNavData(!0));
              },
              getComputedSubNavList(t) {
                var e = [],
                  a = [],
                  i = !1;
                return (
                  (this.whereIsCart = null),
                  t.forEach((t) => {
                    (t.iconUrl = this.getCdnImageUrl(t.iconUrl)),
                      t.independent ? a.unshift(t) : e.push(t);
                  }),
                  e.length <= 3 && (e.reverse(), (i = !0)),
                  e
                    .concat(a)
                    .some(
                      (t, a) =>
                        t.navType === s.j.CART &&
                        ((this.whereIsCart = t.independent
                          ? ["independent", a - e.length]
                          : ["normal", a]),
                        !0)
                    ),
                  { normalList: e, independentList: a, isLine: i }
                );
              },
              getSkeletonNum(t, e) {
                if (e) return 0;
                var a = 3 - (t.length % 3);
                return 3 === a ? 0 : a;
              },
              getVisibleNum(t, e, a) {
                var i = e.length;
                return (
                  a && t.length > 0 ? (i += t.length) : t.length > 0 && i++, i
                );
              },
              getCdnImageUrl: (t) => d.a.cdnImage(t, "!150x150.png"),
              getPageType(t) {
                var e = 0;
                return (
                  Object.keys(s.k).some((a) =>
                    s.k[a].some((i) => !!i.test(t) && ((e = a), !0))
                  ),
                  Number(e)
                );
              },
              scrollHandler(t) {
                this.__handleScroll ||
                  (this.__handleScroll = Object(r.a)(this.handleScroll, 300)),
                  this.__handleScroll(t);
              },
              handleScroll(t) {
                var e = 0;
                if (
                  ("web" === c.default.getEnv()
                    ? (e = window.scrollY)
                    : ({ scrollTop: e } = t),
                  this.initScroll)
                )
                  this.initScroll = !1;
                else {
                  var { active: a, hidden: i } = this,
                    s = e - this.lastScrollTop;
                  if (e <= 50)
                    return (
                      (this.lastScrollTop = e), void (i && (this.hidden = !1))
                    );
                  i
                    ? ((this.lastScrollTop = e),
                      s < 0 && i && (this.hidden = !1))
                    : s < 0
                    ? (this.lastScrollTop = e)
                    : s > 50 &&
                      (i || (this.hidden = !0),
                      a && this.changeActive(!1),
                      (this.lastScrollTop = e));
                }
              },
              initPullDownRefresh() {
                n.default.on(s.a.PULL_DOWN, this.handlePullDownRefresh);
              },
              batchSetData(t) {
                Object.entries(t).forEach((t) => {
                  var [e, a] = t;
                  this[e] = a;
                });
              },
            },
          };
        e.default = c.default.component(U);
      },
    }
  )
);
