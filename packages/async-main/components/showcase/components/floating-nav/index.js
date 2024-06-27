"use strict";
var r = require("~/r");
r(
  "N8wx",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      JIO9: function (e, a, t) {
        t.d(a, "a", function () {
          return A;
        });
        var i = t("+I+c"),
          s = t("Fcif"),
          n = t("9ZMt"),
          o = t("US/N"),
          r = t("hHpg"),
          l = t("xers"),
          c = t.n(l),
          d = t("w2Y9"),
          h = t.n(d),
          p = t("tuFO"),
          g = t.n(p),
          v = t("ONqW"),
          u = (e) => {
            var { videoDynamicParams: a, linkTitle: t } = e;
            return Object(s.a)({}, a, {
              image_url: null == e ? void 0 : e.imageUrl,
              link_title: t,
            });
          },
          f = t("YeA1"),
          b = t("7WUL"),
          m = t("tmLU"),
          S = (t("4jn8"), t("2wjL")),
          y = t("R18q"),
          O = n.default.getApp();
        function T(e) {
          var a = O.getKdtId();
          Object(m.c)({
            navigatePath: "retail-shelf",
            navigateCb: (t) => {
              setTimeout(() => {
                y.a.mark.start(
                  "retail_shelf_init_" + O.globalData.shelfParams.mode
                ),
                  y.a.mark.start("retail_shelf_config");
                var i = "/" + e + "&prefetchKey=" + t + "&prefetchKdtId=" + a;
                n.default.$native.navigateTo({ url: i });
              }, 150);
            },
            prefetchCb: () => {
              var a,
                { mode: t, filter: i } = S.a.getAll(e) || {};
              return 0 !== t || i
                ? Promise.reject()
                : ((a = { mode: t }),
                  Object(o.default)({
                    path: "retail/h5/miniprogram/shelf-config/getFirstLevelConfigs",
                    method: "POST",
                    data: Object(s.a)({}, a, {
                      useSwitch: "v2",
                      supportUnavailableGoods: 2,
                    }),
                  }));
            },
          });
        }
        var _ = (e, a) => {
            n.default.$native.getSetting({
              success: (t) => {
                var i = t.authSetting["scope.userLocation"];
                void 0 === i || !0 === i
                  ? n.default.$native.getLocation({
                      type: "gcj02",
                      fail: () => {
                        null != a &&
                          a.handleShowAuthDialog &&
                          a.handleShowAuthDialog();
                      },
                      success: () => {
                        T(e);
                      },
                    })
                  : !1 === i && T(e);
              },
            });
          },
          C = (e, a) => {
            var { linkType: t, linkUrl: i } = e;
            [b.c.SELF, b.c.TAKEOUT, b.c.SaleToday, b.c.SaleAdvance].includes(t)
              ? ((O.globalData.shelfParams = { mode: b.d[t] }), _(b.e[t], a))
              : [b.c.SCAN_GO, b.c.FREE_GO].includes(t)
              ? (y.a.mark.start("scan_order_decorate"),
                n.default.navigate({ url: "/" + i }))
              : [b.c.SHELF_GOODS, b.c.SHELF_GROUP].includes(t)
              ? ((e) => {
                  var {
                      linkId: a,
                      linkType: t,
                      alias: i,
                      extraData: s = {},
                    } = e,
                    n = "shelf_goods" === t,
                    o = ((e, a, t) =>
                      e && a && t
                        ? a.includes(1) && t.includes(1)
                          ? 0
                          : 1
                        : 0)(
                      n,
                      s[n ? "groupSupportDeliveryType" : "deliveryType"],
                      n ? s.goodSupportDeliveryType : [1, 2, 3]
                    ),
                    r = { mode: o };
                  (O.globalData.shelfParams = { mode: o }),
                    "shelf_goods" === t &&
                      Object.assign(r, {
                        fromShared: 1,
                        sharedGoodsIdProp: a,
                        sharedGoodsAliasProp: i,
                      }),
                    _(h.a.add(b.f, r));
                })(e)
              : t === b.c.WX_SCAN_CODE &&
                (O.logger &&
                  O.logger.log({
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
          j = ["type"],
          w = [
            "/pages/home/dashboard/index",
            "/pages/goods/cart/index",
            "/pages/usercenter/dashboard/index",
            "/pages-retail/usercenter/dashboard-v2/index",
          ],
          k = (e) => {
            e && n.default.navigate({ url: e });
          },
          A = function (e, a) {
            void 0 === a && (a = {});
            var { dmc: t } = Object(f.a)(),
              { type: l = "" } = e,
              d = "",
              p = !1,
              {
                alias: m,
                linkType: S = "",
                linkId: y = "",
                linkUrl: O = "",
                linkTitle: T = "",
                extraData: _ = {},
                query: A = {},
                goodsAlias: I,
              } = e,
              {
                kdtId: D,
                banner_id: L,
                imageUrl: P,
                goodsPreloadOpt: x,
                title: N,
              } = a,
              U = { kdt_id: D },
              E = {};
            if ((L && (E.banner_id = L), "chat" === (l = S || l)));
            else if ("homepage" === l)
              t.switchTab("Home", Object(s.a)({}, E, U)).catch(() => {
                t.navigate("Home", Object(s.a)({}, E, U));
              });
            else if ("goods" === l && m) {
              var { image: G = {} } = x || {};
              t.navigate("GoodsDetail", Object(s.a)({ alias: m }, A, E), {
                bizParams: {
                  alias: m,
                  image: { url: P || G.url, width: G.width, height: G.height },
                  title: N,
                },
              });
            } else if ("feature" === l && m)
              t.navigate("Feature", Object(s.a)({ alias: m }, E));
            else if ("tag" === l) {
              var R = m ? { alias: m } : h.a.getAll(O);
              R.alias &&
                t.navigate(
                  "GoodsTag",
                  Object(s.a)({ alias: R.alias, title: T }, E)
                );
            } else if ("cart" === l)
              t.switchTab("Cart", Object(s.a)({}, E, U)).catch(() => {
                t.navigate("Cart", Object(s.a)({}, E, U));
              });
            else if ("usercenter" === l)
              t.switchTab("Usercenter", Object(s.a)({}, E, U)).catch(() => {
                t.navigate("Usercenter", Object(s.a)({}, E, U));
              });
            else if ("shopnote" === l)
              t.switchTab("Shopnote", Object(s.a)({}, E, U)).catch(() => {
                t.navigate("Shopnote", Object(s.a)({}, E, U));
              });
            else if ("allgoods" === l)
              t.navigate("AllGoodsList", Object(s.a)({ title: T }, E));
            else if ("coupon" === l)
              t.navigate(
                "CouponDetail",
                Object(s.a)(
                  {
                    id: e.link_id || e.linkId,
                    type:
                      7 === (e.coupon_type || e.couponType) ? "promocard" : "",
                  },
                  E
                )
              );
            else if ("point_card" === l)
              k(
                "/packages/pointstore/goods-details/index?goods_id=" +
                  e.pointGoodsId +
                  "&" +
                  L +
                  "=" +
                  L
              );
            else if ("pointsstore" === l)
              t.navigate("PointGoodsList", Object(s.a)({}, E, U));
            else if ("seckill" === l)
              t.navigate(
                "Seckill",
                Object(s.a)({ alias: m }, I ? { goodsAlias: I } : {}, E)
              );
            else if ("bargain" === l)
              t.navigate(
                "GoodsDetail",
                Object(s.a)(
                  {
                    alias: m,
                    umpType: e.umpType || "",
                    activityId: e.activityId,
                  },
                  E
                )
              );
            else if ("paidcolumn" === l)
              t.navigate("PaidContentColumn", Object(s.a)({ alias: m }, E));
            else if ("paidcontent" === l)
              t.navigate("PaidContentContent", Object(s.a)({ alias: m }, E));
            else if ("mypaidcontent" === l)
              t.navigate("PaidContentList", Object(s.a)({}, E, U));
            else if ("paidlive" === l)
              t.navigate("PaidContentLive", Object(s.a)({ alias: m }, E));
            else if ("allcourse" === l)
              t.navigate("EduGoodsList", Object(s.a)({}, E, U));
            else if (
              "course" === l ||
              "educourse" === l ||
              "allofflinecourse" === l ||
              "eduappointment" === l ||
              "course_group" === l ||
              "course_category" === l ||
              "edumoments" === l
            ) {
              var F = O.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5");
              t.navigate("EduWebview", Object(s.a)({ targetUrl: F }, E));
            } else if ("link" === l) {
              var { linkUrl: M } = e;
              M &&
                /mp.weixin.qq.com\/s/.test(M) &&
                t.navigate("CommonWebview", Object(s.a)({ src: M }, E));
            } else if ("weapplink" === l && "1" === _.linkType) {
              "/" !== (d = _.myWeappLink)[0] && (d = "/" + d);
              var Y = d.split("?")[0];
              if (
                (w.indexOf(Y) > -1 && (p = !0),
                0 ===
                  (d = h.a.remove(d, "shopAutoEnter")).indexOf(
                    "/pages/common/blank-page/index"
                  ))
              ) {
                var H = h.a.getAll(d);
                if (H.weappSharePath) {
                  var W = decodeURIComponent(H.weappSharePath);
                  (W = h.a.remove(W, "shopAutoEnter")),
                    (H.weappSharePath = W),
                    (d = h.a.add("/pages/common/blank-page/index", H));
                }
              }
              if (!c()(a) && !p) {
                var { banner_id: Z } = a;
                d = h.a.add(d, { banner_id: Z });
              }
              n.default.navigate({ url: d }).catch(() => {
                wx.reLaunch({ url: d });
              });
            } else if ("weapplink" === l && "2" === _.linkType)
              +_.useShortLink || +_.use_short_link
                ? n.default.$native.navigateToMiniProgram({
                    shortLink: _.shortLink || _.short_link,
                  })
                : n.default.$native.navigateToMiniProgram({
                    appId: _.otherWeappAppid || _.other_weapp_appid,
                    path: _.otherWeappLink || _.other_weapp_link,
                  });
            else if ("calendar_checkin" === l)
              t.navigate("Checkin", Object(s.a)({}, U, E));
            else if ("zodiac" === l)
              t.navigate("LuckyLottery", Object(s.a)({ alias: m }, E));
            else if ("shopnote_detail" === l)
              t.navigate("ShopnoteDetail", Object(s.a)({ noteAlias: m }, E));
            else if ("mp_article" === l)
              t.navigate("MpArticle", Object(s.a)({ noteAlias: m }, E));
            else if (
              "hotellist" === l ||
              "recharge_center" === l ||
              "point_coupon" === l ||
              "room_typelist" === l ||
              "combolist" === l
            )
              t.navigate("CommonWebview", Object(s.a)({ src: O }, E));
            else if ("period_list" === l)
              t.navigate("PeriodBuyList", Object(s.a)({}, U, E));
            else if ("point_store" === l)
              t.navigate("PointGoodsList", Object(s.a)({}, U, E));
            else if (
              "groupon" === l ||
              "collector_card" === l ||
              "gift_card" === l
            )
              O && n.default.navigate({ url: O });
            else if ("weapp_marketing_page" === l || "marketing_page" === l)
              t.navigate(
                "MarketingPage",
                Object(s.a)({}, U, E, { id: _.id || "" })
              );
            else if ("survey" === l || "guaguale" === l || "history" === l)
              k("");
            else if ("video_number" === l) {
              var q =
                n.default.$native.getStorageSync("channelsLiveInfo") || "";
              if (!q) return;
              var { feedId: $, nonceId: K } = JSON.parse(q);
              n.default.$native.openChannelsLive &&
                n.default.$native.openChannelsLive({
                  feedId: $,
                  nonceId: K,
                  finderUserName: y,
                });
            } else if ("social_fans" === l) {
              var { qrcode: B } = e,
                z = g()(
                  h.a.add("/v3/message/live-qrcode/member", {
                    kdtId: D,
                    activitiesId: B,
                  }),
                  "h5",
                  D
                );
              n.default.$native.navigateTo({
                url:
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(z),
              });
            } else if ("weapp_web_link" === l) k(h.a.add(O));
            else {
              if ("red-package" === l)
                return n.default.$native.showRedPackage({ url: O }), {};
              if ("member_code" === l)
                n.default.$native.navigateTo({
                  url: "/packages/member-code/index",
                });
              else if ("vipcenter" === l)
                n.default.$native.navigateTo({
                  url: "/packages/shop/levelcenter/free/index",
                });
              else if ("pay_vipcenter" === l)
                n.default.$native.navigateTo({
                  url: "/packages/shop/levelcenter/plus/index",
                });
              else if ("shop_ranking_list" === l) {
                var { tabType: J } = e;
                if (J) {
                  var V = g()(
                    h.a.add("/wscshop/showcase/shop-ranking-list", { type: J }),
                    "h5",
                    D
                  );
                  n.default.$native.navigateTo({
                    url:
                      "/pages/common/webview-page/index?src=" +
                      encodeURIComponent(V),
                  });
                }
              } else if ("video_number_dynamic" === l) {
                var {} = e,
                  X = Object(i.a)(e.videoDynamicParams, j);
                ((e) => {
                  var a = u(e);
                  Object(v.a)().log({
                    et: "click",
                    ei: "wxvideo_video_click",
                    en: "视频号动态点击",
                    params: a,
                  });
                })(e),
                  n.default.$native.openChannelsActivity &&
                    n.default.$native.openChannelsActivity(
                      Object(s.a)({}, X, {
                        success: () => {
                          ((e) => {
                            var a = u(e);
                            Object(v.a)().log({
                              et: "custom",
                              ei: "wxvideo_video_jump_success",
                              en: "视频号动态跳转成功",
                              params: a,
                            });
                          })(e);
                        },
                        fail: (a) => {
                          ((e, a) => {
                            var t = u(e);
                            Object(v.a)().log({
                              et: "custom",
                              ei: "wxvideo_video_jump_fail",
                              en: "视频号动态跳转失败",
                              params: Object(s.a)({}, t, {
                                error_msg: null == a ? void 0 : a.errMsg,
                              }),
                            });
                          })(e, a);
                        },
                      })
                    );
              } else if ("storelist" === l || "nearby_store_way" === l)
                n.default.$native.navigateTo({
                  url: "/packages/shop/physical-store/index",
                });
              else if ("goods_classify" === l)
                t.navigate("CommonWebview", Object(s.a)({ src: O }, E));
              else if (Object.values(b.c).includes(l)) {
                var { context: Q } = a;
                C(e, Q);
              } else
                ["booking_mall", "express_mall"].includes(l) &&
                  Object(o.default)({
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
      N8wx: function (e, a, t) {
        t.r(a);
        var i = t("Fcif"),
          s = t("rqVN"),
          n = t("zwWb"),
          o = t("a1Mm"),
          r = t("z1RG"),
          l = t("gNlG"),
          c = t("9KEa"),
          d = t("RY8z"),
          h = t("j02o"),
          p = t("0Ckh"),
          g = t("Dcfi"),
          v = t("BoIy"),
          u = t("lOyf"),
          f = t("WJU9"),
          b = t("hTAu"),
          m = t("Eagg"),
          S = t("xRet"),
          y = t("4jn8"),
          O = t("JIO9"),
          T = t("taYb"),
          _ = getApp(),
          { system: C } = Object(c.b)(),
          j = /android/i.test(C),
          w = Object(u.a)(),
          k = new f.a(),
          A =
            "https://b.yzcdn.cn/public_files/d54cce9404af18381038acb27935dafa.png",
          I = "/public_files/2018/08/29/4dde171ddb3d829e147799fb48e2b91d.png";
        function D() {
          var e = getCurrentPages();
          return e[e.length - 1];
        }
        Object(s.b)({
          externalClasses: ["custom-class"],
          behaviors: [l.a],
          properties: {
            salesman: { type: Object, value: {} },
            featureAlias: { type: String },
            hasShareBenefitActivity: { type: Boolean, value: !1 },
          },
          data: {
            active: !1,
            hidden: !1,
            isWxvideoLiveShow: !1,
            typeMap: p.i,
            iconTextMap: p.d,
            liveNav: null,
            mainFloatingNav: {},
            subFloatingNavs: [],
            normalList: [],
            independentList: [],
            skeletonNum: 0,
            isIphoneX: w,
            isTab: !1,
            shareCard: "",
            showSharePop: !1,
            showGoodsShowcase: !1,
            im: { sourceParam: "", businessId: "" },
            hasShareActivity: !1,
            shareActivityIcon: 0,
            isChannels: Object(m.b)(),
          },
          observers: {
            hasShareBenefitActivity(e) {
              this.setYZData({ hasShareActivity: e });
            },
          },
          attached() {
            if (!Object(m.b)()) {
              var e = D();
              (this.pageType = this.getPageType(e.route)),
                this.on && this.on(p.a.PULL_DOWN, this.handlePullDownRefresh),
                (this.lastScrollTop = 0),
                (this.justAttached = !0),
                (this.pageKey = Object(b.a)()),
                this.setYZData({ componentUniqueKey: this.pageKey }),
                this.setYZData({
                  gap: 58,
                  shareCard: p.g[this.pageType] || "",
                }),
                _.waitForEnterShop().then(() => {
                  Promise.all([
                    g.a.getNavData(this.pageType),
                    _.isSwitchTab(),
                    ...k.getExtraIconList(this.pageType),
                  ]).then(this.processNavData.bind(this));
                });
            }
          },
          detached() {
            this.delPageScrollControlSubscribe(
              this.scrollHandler,
              this,
              this.pageKey
            ),
              (this.hasSetPageScroll = !1),
              this.iconController && this.iconController.destroy(this);
          },
          methods: {
            updateShareStatus() {
              this.setData({ hasShareActivity: !0 }, this.checkShareGiftIcon);
            },
            updateWxvideoLiveStatus(e) {
              this.setData({
                isWxvideoLiveShow: null == e ? void 0 : e.detail,
              });
            },
            checkShareGiftIcon() {
              var {
                subFloatingNavs: e,
                independentList: a,
                normalList: t,
                hasShareActivity: i,
              } = this.data;
              if (e.find((e) => e.navType === p.i.SHARE) && i) {
                var s = a.findIndex((e) => e.navType === p.i.SHARE),
                  n = t.findIndex((e) => e.navType === p.i.SHARE);
                if (s > -1)
                  a[s].iconUrl.indexOf(I) > -1 &&
                    (this.setYZData({
                      ["independentList[" + s + "].iconUrl"]: A,
                    }),
                    this.setData({ "first.iconUrl": A }));
                else if (n > -1) {
                  t[n].iconUrl.indexOf(I) > -1 &&
                    this.setYZData({ ["normalList[" + n + "].iconUrl"]: A });
                }
              }
            },
            handleShare() {
              (this.pageType !== p.f.HOME && this.pageType !== p.f.FEATURE) ||
                this.openSharePop(p.h[this.pageType]),
                this.triggerEvent(p.a.SHARE);
            },
            onContactBack: d.a.contactBack,
            openSharePop(e) {
              this.setYZData({ shareCardPageType: e, showSharePop: !0 });
            },
            hideSharePop() {
              this.setYZData({ showSharePop: !1 });
            },
            handleMainNavTap() {
              var { active: e, normalList: a } = this.data;
              this.changeActive(!e, {}, () => {
                var { independentList: e } = this.data;
                this.updateSalesManIcon(a, e);
              });
            },
            handleNavTap(e) {
              var { navType: a } = e.currentTarget.dataset;
              if (a) {
                var t = this.data.subFloatingNavs.find((e) => e.navType === a),
                  i = _.globalData && _.globalData.isRetailApp;
                switch (a) {
                  case p.i.BACK_TO_TOP:
                    r.a.releaseStickyControlMap(),
                      wx.pageScrollTo({ scrollTop: 0, duration: j ? 0 : 300 });
                    break;
                  case p.i.SHARE:
                    this.handleShare();
                    break;
                  case p.i.HOME:
                    d.a.switchTab({ url: p.e[a] });
                    break;
                  case p.i.CART:
                    Object(y.a)({
                      path: "/pages/goods/cart/index",
                      fail() {
                        d.a.switchTab({ url: p.e[a] });
                      },
                    });
                    break;
                  case p.i.USERCENTER:
                    i
                      ? d.a.switchTab({ url: p.e[a + "-retail"] })
                      : Object(y.a)({
                          path: "/pages/usercenter/dashboard/index",
                          fail() {
                            d.a.switchTab({ url: p.e[a] });
                          },
                        });
                    break;
                  case p.i.GUANG_LIVE:
                    wx.navigateToMiniProgram({ appId: t.appId, path: t.path });
                    break;
                  case p.i.GOODS_SHOWCASE:
                    this.setYZData({ showGoodsShowcase: !0 });
                    break;
                  case p.i.SCAN:
                    Object(h.a)();
                    break;
                  default:
                    var s;
                    if (p.i.CUSTOME.includes(a))
                      try {
                        (s = T.a.toCamelCase(JSON.parse(t.extraData))) &&
                          Object(O.a)(s, { kdtId: getApp().getKdtId() });
                      } catch (e) {
                        _.logger.log(e);
                      }
                }
                this.data.active && this.changeActive(!1, {});
              }
            },
            closeGoodsShowcase() {
              this.setYZData({ showGoodsShowcase: !1 });
            },
            handleClosePanel() {
              this.changeActive(!1, {});
            },
            changeActive(e, a, t) {
              void 0 === a && (a = {}),
                void 0 === t && (t = () => {}),
                this.setYZData(Object(i.a)({ active: e }, a), t),
                this.data.isLine &&
                  this.iconController &&
                  this.iconController.setAlone(this, e);
            },
            processNavData(e, a) {
              var [t, i] = e;
              void 0 === a && (a = !1);
              var s = k.processNavData(t),
                { liveNav: n, mainFloatingNav: o } = s,
                { subFloatingNavs: r = [] } = s;
              if (
                0 ===
                (r = r.filter((e) => {
                  var { navType: a } = e;
                  return (
                    a !== p.i.WISH &&
                    (a === p.i.HOME
                      ? this.pageType !== p.f.HOME
                      : a === p.i.CART
                      ? this.pageType !== p.f.GOODS_DETAIL
                      : (a === p.i.CONTACT &&
                          _.getDefaultImData().then((e) => {
                            this.setYZData({ im: e });
                          }),
                        !0))
                  );
                })).length
              )
                return (
                  this.changeActive(!1, {
                    hidden: !1,
                    isTab: i,
                    subFloatingNavs: [],
                  }),
                  this.delPageScrollControlSubscribe(
                    this.scrollHandler,
                    this,
                    this.pageKey
                  ),
                  (this.hasSetPageScroll = !1),
                  void (
                    this.iconController &&
                    this.iconController.setIcon(this, {
                      priority: 100,
                      height: 0,
                    })
                  )
                );
              2 === o.floatingMode
                ? this.hasSetPageScroll ||
                  ((this.pageKey = this.setPageScrollControlSubscribe(
                    this.scrollHandler,
                    this
                  )),
                  (this.hasSetPageScroll = !0))
                : this.hasSetPageScroll &&
                  (this.delPageScrollControlSubscribe(
                    this.scrollHandler,
                    this,
                    this.pageKey
                  ),
                  (this.hasSetPageScroll = !1)),
                (o.foldedIconUrl = this.getCdnImageUrl(o.foldedIconUrl)),
                (o.unfoldedIconUrl = this.getCdnImageUrl(o.unfoldedIconUrl));
              var {
                normalList: l,
                independentList: c,
                isLine: d,
              } = this.getComputedSubNavList(r);
              this.setYZData(
                {
                  hidden: !1,
                  isTab: i,
                  liveNav: n,
                  mainFloatingNav: o,
                  subFloatingNavs: r,
                  first: r[0],
                  normalList: l,
                  independentList: c,
                  isLine: d,
                  skeletonNum: this.getSkeletonNum(l, d),
                  forbidShare: p.c[this.pageType] || !1,
                },
                this.checkShareGiftIcon
              ),
                this.whereIsCart &&
                  (this.on(p.a.ADD_CART, this.handleAddCart),
                  g.a.getCartCount(a).then((e) => {
                    this.refreshCartIcon(+e > 0);
                  })),
                this.updateSalesManIcon(l, c);
            },
            updateSalesManIcon(e, a) {
              var t,
                i = this.getVisibleNum(e, a);
              this.iconController
                ? this.iconController.setIcon(this, {
                    priority: 100,
                    height: 58 * i - 10,
                  })
                : (this.iconController =
                    null == (t = new v.a())
                      ? void 0
                      : t.setIcon(this, {
                          priority: 100,
                          height: 58 * i - 10,
                        }));
            },
            handleAddCart(e) {
              void 0 === e && (e = {}),
                "add" === e.type &&
                  (g.a.addCartCount(), this.refreshCartIcon(!0));
            },
            refreshCartIcon(e) {
              var [a, t] = this.whereIsCart;
              1 === this.data.subFloatingNavs.length
                ? this.setYZData({
                    "first.hasBadge": e,
                    "subFloatingNavs[0].hasBadge": e,
                  })
                : this.setYZData({ [a + "List[" + t + "].hasBadge"]: e });
            },
            handlePullDownRefresh() {
              this.setYZData({ active: !1 }),
                this.justAttached && this.pageType !== p.f.GOODS_DETAIL
                  ? (this.justAttached = !1)
                  : this.iconController &&
                    this.iconController.id === D().__wxExparserNodeId__ &&
                    (this.off(p.a.ADD_CART, this.handleAddCart),
                    Promise.all([
                      g.a.getNavData(this.pageType, !0),
                      ...k.getExtraIconList(this.pageType),
                    ]).then((e) => {
                      this.processNavData([e[0], this.data.isTab], !0);
                    }));
            },
            getComputedSubNavList(e) {
              var a = [],
                t = [],
                i = !1;
              return (
                (this.whereIsCart = null),
                e.forEach((e) => {
                  e.iconUrl = this.getCdnImageUrl(e.iconUrl);
                  var i = this.getItemTitle(e);
                  (e.customeTitle = i),
                    e.independent ? t.unshift(e) : a.push(e);
                }),
                a.length <= 3 && (a.reverse(), (i = !0)),
                a
                  .concat(t)
                  .some(
                    (e, t) =>
                      e.navType === p.i.CART &&
                      ((this.whereIsCart = e.independent
                        ? ["independent", t - a.length]
                        : ["normal", t]),
                      !0)
                  ),
                { normalList: a, independentList: t, isLine: i }
              );
            },
            getSkeletonNum(e, a) {
              if (a) return 0;
              var t = 3 - (e.length % 3);
              return 3 === t ? 0 : t;
            },
            getVisibleNum(e, a) {
              var t = a.length;
              return e.length > 0 && t++, t;
            },
            getCdnImageUrl: (e) => Object(o.a)(e, "!150x150.png"),
            getPageType(e) {
              var a,
                t = 0;
              S.d.test(e) &&
                (e = null == (a = D().attachedPage) ? void 0 : a.is);
              return (
                Object.keys(p.j).some((a) =>
                  p.j[a].some((i) => !!i.test(e) && ((t = a), !0))
                ),
                Number(t)
              );
            },
            getBasePosition: (e, a) => (a ? 114 : 80),
            scrollHandler(e) {
              this.__handleScroll ||
                (this.__handleScroll = Object(n.a)(this.handleScroll, 300)),
                this.__handleScroll(e);
            },
            handleScroll(e) {
              var { scrollTop: a } = e,
                { active: t, hidden: i } = this.data,
                s = a - this.lastScrollTop;
              if (a <= 50)
                return (
                  (this.lastScrollTop = a),
                  void (i && this.setYZData({ hidden: !1 }))
                );
              i
                ? ((this.lastScrollTop = a),
                  s < 0 && i && this.setYZData({ hidden: !1 }))
                : s < 0
                ? (this.lastScrollTop = a)
                : s > 50 &&
                  (!i && this.setYZData({ hidden: !0 }),
                  t && this.changeActive(!1),
                  (this.lastScrollTop = a));
            },
            getItemTitle(e) {
              try {
                if (p.i.CUSTOME.includes(e.navType)) {
                  var a = JSON.parse(e.extraData),
                    { title: t } = a;
                  return t;
                }
              } catch (e) {
                return "";
              }
            },
          },
        });
      },
      j02o: function (e, a, t) {
        t.d(a, "a", function () {
          return o;
        });
        var i = t("hHpg"),
          s = t("YeA1"),
          n = getApp();
        function o() {
          wx.scanCode({
            onlyFromCamera: !0,
            scanType: "barCode",
            success: (e) => {
              var a,
                { result: t } = e;
              ((a = { barcode: t }),
              n
                .request({
                  path: "/wsctrade/scancodebuy/goodsquery/list-by-barcode.json",
                  query: a,
                })
                .catch((e) => {
                  var { msg: a } = e;
                  Object(i.a)(a);
                })).then(function (e) {
                void 0 === e && (e = {});
                var { successList: a = [] } = e,
                  n = a[0];
                0 === a.length
                  ? Object(i.a)("商品条码未录入，请联系营业员")
                  : a.length > 1
                  ? Object(s.a)().dmc.navigate("Search", {
                      q: t,
                      searchType: 2,
                    })
                  : Object(s.a)().dmc.navigate("GoodsDetail", {
                      alias: n.alias,
                    });
              });
            },
          });
        }
      },
      zwWb: function (e, a, t) {
        var i = t("Ix7h");
        a.a = i.a;
      },
    }
  )
);
