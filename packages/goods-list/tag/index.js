"use strict";
var r = require("~/r");
r(
  "kf4H",
  Object.assign(
    {},
    require("../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      AiY9: function (e, a) {},
      EYwr: function (e, a) {},
      GZxp: function (e, a) {},
      JIO9: function (e, a, t) {
        t.d(a, "a", function () {
          return S;
        });
        var i = t("+I+c"),
          n = t("Fcif"),
          o = t("9ZMt"),
          s = t("US/N"),
          r = t("hHpg"),
          l = t("xers"),
          c = t.n(l),
          d = t("w2Y9"),
          u = t.n(d),
          p = t("tuFO"),
          m = t.n(p),
          g = t("ONqW"),
          v = (e) => {
            var { videoDynamicParams: a, linkTitle: t } = e;
            return Object(n.a)({}, a, {
              image_url: null == e ? void 0 : e.imageUrl,
              link_title: t,
            });
          },
          f = t("YeA1"),
          h = t("7WUL"),
          b = t("tmLU"),
          O = (t("4jn8"), t("2wjL")),
          j = t("R18q"),
          _ = o.default.getApp();
        function y(e) {
          var a = _.getKdtId();
          Object(b.c)({
            navigatePath: "retail-shelf",
            navigateCb: (t) => {
              setTimeout(() => {
                j.a.mark.start(
                  "retail_shelf_init_" + _.globalData.shelfParams.mode
                ),
                  j.a.mark.start("retail_shelf_config");
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
        var k = (e, a) => {
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
                        y(e);
                      },
                    })
                  : !1 === i && y(e);
              },
            });
          },
          w = (e, a) => {
            var { linkType: t, linkUrl: i } = e;
            [h.c.SELF, h.c.TAKEOUT, h.c.SaleToday, h.c.SaleAdvance].includes(t)
              ? ((_.globalData.shelfParams = { mode: h.d[t] }), k(h.e[t], a))
              : [h.c.SCAN_GO, h.c.FREE_GO].includes(t)
              ? (j.a.mark.start("scan_order_decorate"),
                o.default.navigate({ url: "/" + i }))
              : [h.c.SHELF_GOODS, h.c.SHELF_GROUP].includes(t)
              ? ((e) => {
                  var {
                      linkId: a,
                      linkType: t,
                      alias: i,
                      extraData: n = {},
                    } = e,
                    o = "shelf_goods" === t,
                    s = ((e, a, t) =>
                      e && a && t
                        ? a.includes(1) && t.includes(1)
                          ? 0
                          : 1
                        : 0)(
                      o,
                      n[o ? "groupSupportDeliveryType" : "deliveryType"],
                      o ? n.goodSupportDeliveryType : [1, 2, 3]
                    ),
                    r = { mode: s };
                  (_.globalData.shelfParams = { mode: s }),
                    "shelf_goods" === t &&
                      Object.assign(r, {
                        fromShared: 1,
                        sharedGoodsIdProp: a,
                        sharedGoodsAliasProp: i,
                      }),
                    k(u.a.add(h.f, r));
                })(e)
              : t === h.c.WX_SCAN_CODE &&
                (_.logger &&
                  _.logger.log({
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
          C = ["type"],
          T = [
            "/pages/home/dashboard/index",
            "/pages/goods/cart/index",
            "/pages/usercenter/dashboard/index",
            "/pages-retail/usercenter/dashboard-v2/index",
          ],
          x = (e) => {
            e && o.default.navigate({ url: e });
          },
          S = function (e, a) {
            void 0 === a && (a = {});
            var { dmc: t } = Object(f.a)(),
              { type: l = "" } = e,
              d = "",
              p = !1,
              {
                alias: b,
                linkType: O = "",
                linkId: j = "",
                linkUrl: _ = "",
                linkTitle: y = "",
                extraData: k = {},
                query: S = {},
                goodsAlias: L,
              } = e,
              {
                kdtId: P,
                banner_id: A,
                imageUrl: I,
                goodsPreloadOpt: D,
                title: U,
              } = a,
              G = { kdt_id: P },
              M = {};
            if ((A && (M.banner_id = A), "chat" === (l = O || l)));
            else if ("homepage" === l)
              t.switchTab("Home", Object(n.a)({}, M, G)).catch(() => {
                t.navigate("Home", Object(n.a)({}, M, G));
              });
            else if ("goods" === l && b) {
              var { image: $ = {} } = D || {};
              t.navigate("GoodsDetail", Object(n.a)({ alias: b }, S, M), {
                bizParams: {
                  alias: b,
                  image: { url: I || $.url, width: $.width, height: $.height },
                  title: U,
                },
              });
            } else if ("feature" === l && b)
              t.navigate("Feature", Object(n.a)({ alias: b }, M));
            else if ("tag" === l) {
              var q = b ? { alias: b } : u.a.getAll(_);
              q.alias &&
                t.navigate(
                  "GoodsTag",
                  Object(n.a)({ alias: q.alias, title: y }, M)
                );
            } else if ("cart" === l)
              t.switchTab("Cart", Object(n.a)({}, M, G)).catch(() => {
                t.navigate("Cart", Object(n.a)({}, M, G));
              });
            else if ("usercenter" === l)
              t.switchTab("Usercenter", Object(n.a)({}, M, G)).catch(() => {
                t.navigate("Usercenter", Object(n.a)({}, M, G));
              });
            else if ("shopnote" === l)
              t.switchTab("Shopnote", Object(n.a)({}, M, G)).catch(() => {
                t.navigate("Shopnote", Object(n.a)({}, M, G));
              });
            else if ("allgoods" === l)
              t.navigate("AllGoodsList", Object(n.a)({ title: y }, M));
            else if ("coupon" === l)
              t.navigate(
                "CouponDetail",
                Object(n.a)(
                  {
                    id: e.link_id || e.linkId,
                    type:
                      7 === (e.coupon_type || e.couponType) ? "promocard" : "",
                  },
                  M
                )
              );
            else if ("point_card" === l)
              x(
                "/packages/pointstore/goods-details/index?goods_id=" +
                  e.pointGoodsId +
                  "&" +
                  A +
                  "=" +
                  A
              );
            else if ("pointsstore" === l)
              t.navigate("PointGoodsList", Object(n.a)({}, M, G));
            else if ("seckill" === l)
              t.navigate(
                "Seckill",
                Object(n.a)({ alias: b }, L ? { goodsAlias: L } : {}, M)
              );
            else if ("bargain" === l)
              t.navigate(
                "GoodsDetail",
                Object(n.a)(
                  {
                    alias: b,
                    umpType: e.umpType || "",
                    activityId: e.activityId,
                  },
                  M
                )
              );
            else if ("paidcolumn" === l)
              t.navigate("PaidContentColumn", Object(n.a)({ alias: b }, M));
            else if ("paidcontent" === l)
              t.navigate("PaidContentContent", Object(n.a)({ alias: b }, M));
            else if ("mypaidcontent" === l)
              t.navigate("PaidContentList", Object(n.a)({}, M, G));
            else if ("paidlive" === l)
              t.navigate("PaidContentLive", Object(n.a)({ alias: b }, M));
            else if ("allcourse" === l)
              t.navigate("EduGoodsList", Object(n.a)({}, M, G));
            else if (
              "course" === l ||
              "educourse" === l ||
              "allofflinecourse" === l ||
              "eduappointment" === l ||
              "course_group" === l ||
              "course_category" === l ||
              "edumoments" === l
            ) {
              var E = _.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5");
              t.navigate("EduWebview", Object(n.a)({ targetUrl: E }, M));
            } else if ("link" === l) {
              var { linkUrl: F } = e;
              F &&
                /mp.weixin.qq.com\/s/.test(F) &&
                t.navigate("CommonWebview", Object(n.a)({ src: F }, M));
            } else if ("weapplink" === l && "1" === k.linkType) {
              "/" !== (d = k.myWeappLink)[0] && (d = "/" + d);
              var R = d.split("?")[0];
              if (
                (T.indexOf(R) > -1 && (p = !0),
                0 ===
                  (d = u.a.remove(d, "shopAutoEnter")).indexOf(
                    "/pages/common/blank-page/index"
                  ))
              ) {
                var W = u.a.getAll(d);
                if (W.weappSharePath) {
                  var N = decodeURIComponent(W.weappSharePath);
                  (N = u.a.remove(N, "shopAutoEnter")),
                    (W.weappSharePath = N),
                    (d = u.a.add("/pages/common/blank-page/index", W));
                }
              }
              if (!c()(a) && !p) {
                var { banner_id: H } = a;
                d = u.a.add(d, { banner_id: H });
              }
              o.default.navigate({ url: d }).catch(() => {
                wx.reLaunch({ url: d });
              });
            } else if ("weapplink" === l && "2" === k.linkType)
              +k.useShortLink || +k.use_short_link
                ? o.default.$native.navigateToMiniProgram({
                    shortLink: k.shortLink || k.short_link,
                  })
                : o.default.$native.navigateToMiniProgram({
                    appId: k.otherWeappAppid || k.other_weapp_appid,
                    path: k.otherWeappLink || k.other_weapp_link,
                  });
            else if ("calendar_checkin" === l)
              t.navigate("Checkin", Object(n.a)({}, G, M));
            else if ("zodiac" === l)
              t.navigate("LuckyLottery", Object(n.a)({ alias: b }, M));
            else if ("shopnote_detail" === l)
              t.navigate("ShopnoteDetail", Object(n.a)({ noteAlias: b }, M));
            else if ("mp_article" === l)
              t.navigate("MpArticle", Object(n.a)({ noteAlias: b }, M));
            else if (
              "hotellist" === l ||
              "recharge_center" === l ||
              "point_coupon" === l ||
              "room_typelist" === l ||
              "combolist" === l
            )
              t.navigate("CommonWebview", Object(n.a)({ src: _ }, M));
            else if ("period_list" === l)
              t.navigate("PeriodBuyList", Object(n.a)({}, G, M));
            else if ("point_store" === l)
              t.navigate("PointGoodsList", Object(n.a)({}, G, M));
            else if (
              "groupon" === l ||
              "collector_card" === l ||
              "gift_card" === l
            )
              _ && o.default.navigate({ url: _ });
            else if ("weapp_marketing_page" === l || "marketing_page" === l)
              t.navigate(
                "MarketingPage",
                Object(n.a)({}, G, M, { id: k.id || "" })
              );
            else if ("survey" === l || "guaguale" === l || "history" === l)
              x("");
            else if ("video_number" === l) {
              var K =
                o.default.$native.getStorageSync("channelsLiveInfo") || "";
              if (!K) return;
              var { feedId: Y, nonceId: z } = JSON.parse(K);
              o.default.$native.openChannelsLive &&
                o.default.$native.openChannelsLive({
                  feedId: Y,
                  nonceId: z,
                  finderUserName: j,
                });
            } else if ("social_fans" === l) {
              var { qrcode: B } = e,
                X = m()(
                  u.a.add("/v3/message/live-qrcode/member", {
                    kdtId: P,
                    activitiesId: B,
                  }),
                  "h5",
                  P
                );
              o.default.$native.navigateTo({
                url:
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(X),
              });
            } else if ("weapp_web_link" === l) x(u.a.add(_));
            else {
              if ("red-package" === l)
                return o.default.$native.showRedPackage({ url: _ }), {};
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
                var { tabType: Z } = e;
                if (Z) {
                  var J = m()(
                    u.a.add("/wscshop/showcase/shop-ranking-list", { type: Z }),
                    "h5",
                    P
                  );
                  o.default.$native.navigateTo({
                    url:
                      "/pages/common/webview-page/index?src=" +
                      encodeURIComponent(J),
                  });
                }
              } else if ("video_number_dynamic" === l) {
                var {} = e,
                  V = Object(i.a)(e.videoDynamicParams, C);
                ((e) => {
                  var a = v(e);
                  Object(g.a)().log({
                    et: "click",
                    ei: "wxvideo_video_click",
                    en: "视频号动态点击",
                    params: a,
                  });
                })(e),
                  o.default.$native.openChannelsActivity &&
                    o.default.$native.openChannelsActivity(
                      Object(n.a)({}, V, {
                        success: () => {
                          ((e) => {
                            var a = v(e);
                            Object(g.a)().log({
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
                            Object(g.a)().log({
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
                t.navigate("CommonWebview", Object(n.a)({ src: _ }, M));
              else if (Object.values(h.c).includes(l)) {
                var { context: Q } = a;
                w(e, Q);
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
      "K0L/": function (e, a) {},
      LniI: function (e, a) {},
      ML4D: function (e, a) {},
      P1Ym: function (e, a) {},
      RmQ0: function (e, a) {},
      b1kB: function (e, a) {},
      cqgp: function (e, a, t) {
        var i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var a, t = 1, i = arguments.length; t < i; t++)
                for (var n in (a = arguments[t]))
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              return e;
            }).apply(this, arguments);
        };
        a.a = function (e) {
          var a = e.profitRange,
            t = void 0 === a ? [] : a,
            n = e.commissionSendType,
            o = void 0 === n ? 0 : n,
            s = e.customPointsName,
            r = void 0 === s ? "积分" : s,
            l = e.commissionConfigDTO,
            c = t[0],
            d = t[1],
            u = (function (e) {
              var a = e.sendType,
                t = e.pointsName,
                i = e.config,
                n = e.maxCommission,
                o = e.minCommission,
                s = !!a;
              if (s && i) {
                var r = i.everyMoneyFen,
                  l = void 0 === r ? 0 : r,
                  c = i.points,
                  d = void 0 === c ? 0 : c;
                (n = parseInt(String(Math.floor(n / l) * d), 10)),
                  (o = parseInt(String(Math.floor(o / l) * d), 10));
              } else (n /= 100), (o /= 100);
              return {
                maxCommissionStr: s ? "" + n + t : "¥" + n,
                minCommissionStr: s ? "" + o + t : "¥" + o,
                maxCommissionAmount: n,
                minCommissionAmount: o,
              };
            })({
              sendType: o,
              pointsName: r,
              config: l,
              maxCommission: (d = d || c),
              minCommission: c,
            }),
            p = u.maxCommissionStr,
            m = u.minCommissionStr,
            g = u.maxCommissionAmount,
            v = g !== u.minCommissionAmount,
            f = {
              commissionText: "分享后最高赚" + p,
              commissionRangeText: "分享后预计可赚 " + m + " - " + p,
              commissionRange: t,
              maxCommission: g,
              unit: r,
              maxCommissionStr: g > 0 ? p : "",
              isMultiCommission: v,
            };
          return i(i({}, f), {
            compatibleCommissionText: v
              ? f.commissionRangeText
              : f.commissionText,
            compatibleCommission: v ? m + " - " + p : p,
          });
        };
      },
      cxMM: function (e, a) {},
      gKWa: function (e, a) {},
      gc3r: function (e, a, t) {
        t.d(a, "b", function () {
          return u;
        }),
          t.d(a, "a", function () {
            return p;
          });
        var i = t("Fcif"),
          n = t("jA1y"),
          o = t("vgcL"),
          s = t("2wjL"),
          r = t("u8kV"),
          l = t("rDSc"),
          c = t("8B9M"),
          d = function (e, a) {
            e || (!1 !== a.isNeedShareMore && this.setYZData({ salesman: a }));
          },
          u = (e) => {
            var a = Object(l.a)(Object(i.a)({}, e, { path: e.url }), "url");
            return Object(n.c)(a);
          },
          p = function (e) {
            var {
                scene: a,
                sst: t,
                gst: n,
                getSalesmanData: l = d,
                query: p,
              } = e,
              m = Object(c.a)() || {},
              g = m.getToken() || {},
              { route: v = "", options: f = {} } = Object(r.d)(),
              h = p || f,
              b = s.a.add(v, h),
              O = { gst: (n = n || Object(o.e)(a)), sst: t, sourceUrl: b },
              { yzUserId: j } = g;
            Object(o.f)({
              url: b,
              logParams: m.logger.getLogParams && m.logger.getLogParams(),
              userId: j,
              request: u,
            }),
              Object(o.a)(Object(i.a)({}, O)),
              Object(o.b)({}, l.bind(this));
          };
      },
      iNgw: function (e, a) {},
      jHjV: function (e, a, t) {
        function i(e, a, t) {
          for (var i = a.split("."), n = e, o = 0; o < i.length - 1; o++) {
            var s = i[o];
            (Object.prototype.hasOwnProperty.call(n, s) &&
              "object" == typeof n[s]) ||
              (n[s] = {}),
              (n = n[s]);
          }
          n[i[i.length - 1]] = t;
        }
        t.d(a, "a", function () {
          return i;
        });
      },
      kf4H: function (e, a, t) {
        t.r(a);
        t("L2rW"), t("E69o");
      },
      n0bX: function (e, a) {},
      vXaX: function (e, a) {},
      ygrD: function (e, a, t) {
        t.d(a, "a", function () {
          return s;
        });
        var i = t("K0L/"),
          n = t.n(i),
          o = t("9mFz");
        class s {
          constructor(e) {
            (this.onSkuSelected = Object(o.h)()),
              (this.ctx = e.ctx),
              this.initCloudData();
          }
          initCloudData() {}
        }
        s.widgets = { Main: n() };
      },
    }
  )
);
