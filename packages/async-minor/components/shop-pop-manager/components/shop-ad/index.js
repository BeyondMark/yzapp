"use strict";
var r = require("~/r");
r(
  "SwHE",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      SwHE: function (e, a, t) {
        t.r(a);
        var i = t("Fcif"),
          o = t("GFa9"),
          r = t("rqVN"),
          s = t("hIZB"),
          n = t("a1Mm"),
          l = t("pQaC"),
          d = t("asq2"),
          p = t("JxL/"),
          c = t("Yfvy"),
          h = t("MLLI"),
          u = getApp(),
          { logger: g } = u;
        Object(r.b)({
          behaviors: [d.a, p.a],
          properties: {
            popPosition: { type: Number, value: 1 },
            featureId: Number,
            targetKdtId: Number,
          },
          data: {
            adImage: "",
            adLinkType: "",
            adId: 0,
            visible: !1,
            imageStyle: {},
            slideStyleInfo: { swipeStyle: "", swipePreOrNextMargin: "0rpx" },
            closeIconStyle: {},
            adResource: {},
            isImLink: !1,
            isSwipe: !1,
            isSlide: !1,
            autoPlay: 1,
            swipeResource: [],
            swipeTime: 3e3,
            im: { sourceParam: "", businessId: "" },
            isShowHotArea: !1,
            swipeIndex: 0,
          },
          methods: {
            onContactBack: o.a.contactBack,
            closeAdPop() {
              this.onClickClose(), this.handleCloseAdpop();
            },
            getAdImageInfo() {
              return this.data.adImage;
            },
            handleSwiperChange(e) {
              var { current: a } = e.detail;
              this.setYZData({ swipeIndex: a });
            },
            handleCloseAdpop() {
              var { adId: e } = this.data;
              Object(l.a)(e)
                .then((e) => {
                  if (!e) throw new Error("关闭广告弹窗失败");
                })
                .catch((e) => {
                  throw new Error("关闭广告弹窗失败, " + e);
                });
            },
            handleClickAdPop(e) {
              var a,
                { isSwipe: t, swipeData: i } =
                  (null == e || null == (a = e.target) ? void 0 : a.dataset) ||
                  {};
              if (t) this.handleAreClick({ target: { dataset: { area: i } } });
              else {
                var { adLinkType: o, adResource: r } = this.data;
                this.logger(),
                  this.onOtherClose(!0),
                  this.handleCloseAdpop(),
                  Object(s.a)(o, r);
              }
            },
            handleAreClick(e) {
              var { area: a } = e.target.dataset,
                { link_type: t } = a;
              this.logger(),
                (() => {
                  this.onOtherClose(!0), this.handleCloseAdpop();
                })(),
                Object(s.a)(t, a);
            },
            getHotAreaData(e, a) {
              void 0 === a && (a = {});
              var { isSlide: t } = a,
                { screenWidth: i = 300 } = Object(h.b)(),
                o = e,
                r = Math.floor((i / 750) * (t ? 525 : 600)) / o.image_width;
              o.hot_areas = o.hot_areas || [];
              for (var s = o.hot_areas, n = 0; n < s.length; n++)
                (s[n].top = Math.floor(Number(s[n].start_y) * r)),
                  (s[n].left =
                    Math.floor(Number(s[n].start_x) * r) + (t ? 8 : 0)),
                  (s[n].width = Math.floor(
                    (Number(s[n].end_x) - Number(s[n].start_x)) * r
                  )),
                  (s[n].height = Math.floor(
                    (Number(s[n].end_y) - Number(s[n].start_y)) * r
                  ));
              return o;
            },
            logger(e) {
              void 0 === e && (e = {}),
                g &&
                  g.log(
                    Object(i.a)(
                      {
                        et: "click",
                        ei: "Ad_Click",
                        en: "图片广告打开次数",
                        si: u.getKdtId(),
                        params: Object(i.a)(
                          { component: "popup_ad", ad_id: this.data.adId },
                          this.cloudLoggerInfo,
                          e.params
                        ),
                      },
                      e
                    )
                  );
            },
          },
          attached() {
            (this.cloudLoggerInfo = Object(c.b)(
              "shop_ad_pop",
              Object(i.a)({}, this.getCloudLoggerInfo("pop_ad"))
            )),
              u.waitForEnterShop().then(() => {
                var { popPosition: e } = this.data,
                  a = { popPosition: e },
                  { targetKdtId: t, featureId: o } = this.properties;
                2 === e && o && (a.featureId = o),
                  t && (a.kdt_id = t),
                  Object(l.b)(a)
                    .then((e) => {
                      var a = e && e.id;
                      if (!a) return this.onOtherClose();
                      var t = JSON.parse(e.resource),
                        {
                          swipeTime: o,
                          imageCount: r,
                          swipeResource: s,
                          autoPlay: l = 1,
                        } = t,
                        d = this.getHotAreaData(t),
                        p =
                          "width: 600rpx; height: " +
                          (t.image_height / t.image_width) * 600 +
                          "rpx",
                        c = !1,
                        h = "chat" === t.weapp_link_type,
                        g =
                          null == t
                            ? void 0
                            : t.hot_areas.some((e) => "chat" === e.link_type);
                      null != t &&
                        t.hot_areas &&
                        null != t &&
                        t.hot_areas.length &&
                        (c = !0);
                      var m = 2 == +r,
                        f = 3 == +r,
                        _ = [],
                        { slideStyleInfo: v } = this.data;
                      if (m || f) {
                        var w = s[0],
                          { image_width: x, image_height: b } = w;
                        (p = f
                          ? "width: 525rpx; height: " +
                            (b / x) * 525 +
                            "rpx; margin: 0 16rpx"
                          : "width: 600rpx; height: " + (b / x) * 600 + "rpx;"),
                          (v.swipePreOrNextMargin = f ? "96.5rpx" : "0rpx"),
                          (v.swipeStyle =
                            "width: 100vw; height: " + (b / x) * 525 + "rpx"),
                          (_ = s.map((e) => {
                            var a =
                              this.getHotAreaData(e, { isSlide: f })
                                .hot_areas || [];
                            return Object(i.a)({}, e, {
                              isHotArea: a.length > 0,
                              image_url: Object(n.a)(e.image_url, "!730x0.jpg"),
                            });
                          }));
                      }
                      this.setYZData({
                        adImage: Object(n.a)(t.image_url, "!730x0.jpg"),
                        adLinkType: t.weapp_link_type || t.link_type,
                        adId: a,
                        visible: !0,
                        imageStyle: p,
                        adResource: d,
                        isImLink: h,
                        isShowHotArea: c,
                        isSwipe: m,
                        swipeTime: o,
                        isSlide: f,
                        slideStyleInfo: v,
                        autoPlay: l,
                        swipeResource: _,
                      });
                      var k =
                        !(!m && !f) &&
                        (s || []).some((e) => {
                          var a;
                          return (
                            "chat" === e.link_type ||
                            (null != (a = e.hot_areas) && a.length
                              ? e.hot_areas.some((e) => "chat" === e.link_type)
                              : void 0)
                          );
                        });
                      (h || g || k) &&
                        u.getDefaultImData().then((e) => {
                          this.setYZData({ im: e });
                        }),
                        this.logger({
                          et: "view",
                          ei: "Ad_view",
                          en: "图片广告曝光",
                        });
                    })
                    .catch((e) => {
                      this.onOtherClose();
                    });
              });
          },
        });
      },
      hIZB: function (e, a, t) {
        t.d(a, "a", function () {
          return u;
        });
        var i = t("GFa9"),
          o = t("yUfZ"),
          r = t("Fcif"),
          s = t("+I+c"),
          n = ["type"],
          l = getApp();
        var d = t("DXKY"),
          p = t("8B9M"),
          c = t("YeA1"),
          { dmc: h } = Object(c.a)();
        function u(e, a, t) {
          if ((void 0 === t && (t = {}), "offlinepage" === e))
            return (
              void 0 === (c = a.link_id) && (c = ""),
              void (
                c &&
                (Object(p.a)().setOfflineId(c),
                i.a.switchTab({ url: "/packages/home/dashboard/index" }))
              )
            );
          var c;
          if ("platform_coupon" !== e) {
            if ("video_number_dynamic" !== e) {
              if ("weapplink" === e) {
                var { extra_data: u } = a;
                if (u && "2" === u.link_type)
                  return void (+u.use_short_link
                    ? wx.navigateToMiniProgram({ shortLink: u.short_link })
                    : wx.navigateToMiniProgram({
                        appId: u.other_weapp_appid,
                        path: u.other_weapp_link,
                      }));
              }
              var {
                url: g,
                isTab: m,
                isReLaunch: f,
                dmcExtra: _,
              } = Object(o.a)(e, a, t);
              if (g || _) {
                var v = m ? "switchTab" : f ? "reLaunch" : "navigate";
                if (_) {
                  var { pageName: w, query: x } = _;
                  h[v](w, x);
                } else i.a[v]({ url: g });
              }
            } else
              !(function (e) {
                var { linkTitle: a } = e,
                  t = Object(s.a)(e.videoDynamicParams, n),
                  i = Object(r.a)({}, e.videoDynamicParams, {
                    image_url: null == e ? void 0 : e.imageUrl,
                    link_title: a,
                  });
                l.logger.log({
                  et: "click",
                  ei: "wxvideo_video_click",
                  en: "视频号动态点击",
                  params: i,
                }),
                  wx.openChannelsActivity &&
                    wx.openChannelsActivity(
                      Object(r.a)({}, t, {
                        success: () => {
                          l.logger.log({
                            et: "custom",
                            ei: "wxvideo_video_jump_success",
                            en: "视频号动态跳转成功",
                            params: i,
                          });
                        },
                        fail: (e) => {
                          l.logger.log({
                            et: "custom",
                            ei: "wxvideo_video_jump_fail",
                            en: "视频号动态跳转失败",
                            params: Object(r.a)({}, i, {
                              error_msg: null == e ? void 0 : e.errMsg,
                            }),
                          });
                        },
                      })
                    );
              })(a);
          } else d.a.trigger("feature-platform-coupon:open", a);
        }
      },
      yUfZ: function (e, a, t) {
        t.d(a, "a", function () {
          return m;
        });
        var i = t("Fcif"),
          o = t("8B9M"),
          r = t("x5Yp"),
          s = t("2wjL"),
          n = t("7WUL"),
          l = t("lRMv"),
          d = t("YeA1"),
          { dmc: p } = Object(d.a)(),
          c = "packages",
          h = Object(o.a)(),
          u = "/" + c + "/shop/goods/tag-list/index",
          g = "/" + c + "/shop/goods/all/index";
        function m(e, a, t) {
          var o = "",
            d = !1,
            p = !1,
            m = null,
            {
              alias: f,
              link_title: _ = "",
              link_url: v = "",
              link_id: w,
              extra_data: x = {},
            } = a,
            { banner_id: b } = t || {},
            k = {};
          if ((b && (k.banner_id = b), "goods" === e && f))
            o = "/pages/goods/detail/index?alias=" + f;
          else if ("tag" === e) {
            var y = f ? { alias: f } : s.a.getAll(v);
            y.alias &&
              ((o =
                u + "?alias=" + y.alias + "&title=" + encodeURIComponent(_)),
              (m = {
                pageName: "GoodsTag",
                query: { alias: y.alias, title: _ },
              }));
          } else if ("weappfeature" === e)
            o = "/pages/home/feature/index?id=" + w + "&title=" + _;
          else if ("feature" === e && f)
            o = "/pages/home/feature/index?alias=" + f;
          else if ("homepage" === e)
            (d = !0), (o = "/pages/home/dashboard/index");
          else if ("cart" === e) (d = !0), (o = "/" + c + "/goods/cart/index");
          else if ("usercenter" === e)
            (d = !0),
              (o = "/pages/usercenter/dashboard/index"),
              h.globalData.isRetailApp &&
                (o = "/" + c + "/retail/usercenter/dashboard-v2/index");
          else if ("allgoods" === e)
            (o = g + "?title=" + encodeURIComponent(_)),
              (m = { pageName: "AllGoodsList", query: { title: _ } });
          else if ("pointsstore" === e)
            o = "/" + c + "/ump/integral-store/index";
          else if ("coupon" === e)
            o =
              "/" +
              c +
              "/user/coupon/detail/index?id=" +
              a.link_id +
              (7 === a.coupon_type ? "&type=promocard" : "");
          else if ("seckill" === e)
            o = "/" + c + "/goods/seckill/index?alias=" + f;
          else if ("weapplink" === e && "1" === x.link_type) {
            var I;
            if (
              ("/" !== (o = x.my_weapp_link)[0] && (o = "/" + o),
              null != (I = Object(l.o)()) && I.client_enter_shop_linkto_switch)
            )
              try {
                var O = s.a.getAll(o) || {},
                  { subKdtId: j, sub_kdt_id: A, kdtId: C, kdt_id: S } = O,
                  R = j || A || C || S,
                  L = h.getKdtId(),
                  P = h.getHQKdtId();
                R && +R !== L && +R !== P && (p = !0),
                  Object(l.f)({ text: "[wx] 自定义外链处理ReLaunch" });
              } catch (e) {
                Object(l.f)({ text: "[wx] 自定义外链处理有误", err: e });
              }
            var N = o.split("?")[0];
            if (
              (n.a.indexOf(N) > -1 && (d = !0),
              0 ===
                (o = s.a.remove(o, "shopAutoEnter")).indexOf(
                  "/pages/common/blank-page/index"
                ))
            ) {
              var M = s.a.getAll(o);
              if (M.weappSharePath) {
                var T = decodeURIComponent(M.weappSharePath);
                (T = s.a.remove(T, "shopAutoEnter")),
                  (M.weappSharePath = encodeURIComponent(T)),
                  (o = s.a.add("/pages/common/blank-page/index", M));
              }
            }
          } else if ("paidcolumn" === e)
            o = "/" + c + "/paidcontent/column/index?alias=" + f;
          else if ("paidcontent" === e)
            o = "/" + c + "/paidcontent/content/index?alias=" + f;
          else if ("mypaidcontent" === e)
            o = "/" + c + "/paidcontent/list/index";
          else if ("paidlive" === e)
            o = "/" + c + "/paidcontent/live/index?alias=" + f;
          else if ("allcourse" === e) o = "/" + c + "/edu/goods/list/index";
          else if (
            "course" === e ||
            "educourse" === e ||
            "allofflinecourse" === e ||
            "eduappointment" === e ||
            "course_group" === e ||
            "course_category" === e ||
            "edumoments" === e
          )
            o =
              "/" +
              c +
              "/edu/webview/index?targetUrl=" +
              encodeURIComponent(
                v.replace(/^http(s)?:\/\/shop\d+-?\d+/, "https://h5")
              );
          else if ("link" === e) {
            var U = a.link_url;
            U &&
              /mp.weixin.qq.com\/s/.test(U) &&
              (o =
                "/pages/common/webview-page/index?src=" +
                encodeURIComponent(U));
          } else if ("shopnote" === e)
            (d = !0), (o = "/" + c + "/shop/shopnote/list/index");
          else if ("calendar_checkin" === e)
            o = "/" + c + "/shop/ump/sign-in/index";
          else if ("zodiac" === e)
            o = "/" + c + "/ump/new-lottery/casino/index?alias=" + a.alias;
          else if (["guaguale", "wheel", "crazyguess"].includes(e)) {
            var D = "";
            null != v && v.includes("lottery") && (D = "LuckyLottery"),
              null != v && v.includes("cards") && (D = "Cards"),
              null != v && v.includes("zodiac") && (D = "Zodiac"),
              null != v && v.includes("crazy") && (D = "CrazyGuess"),
              D && (m = { pageName: D, query: Object(i.a)({ alias: f }, k) });
          } else if ("shopnote_detail" === e)
            o = "/" + c + "/shop/shopnote/detail/index?noteAlias=" + a.alias;
          else if ("mp_article" === e)
            o =
              "/" +
              c +
              "/shop/shopnote/mparticle/detail/index?noteAlias=" +
              a.alias;
          else if ("hotellist" === e)
            o = "/pages/common/webview-page/index?src=" + encodeURIComponent(v);
          else if ("recharge_center" === e)
            o = "/pages/common/webview-page/index?src=" + encodeURIComponent(v);
          else {
            if ("red-package" === e) return wx.showRedPackage({ url: v }), {};
            "member_code" === e
              ? (o = "/" + c + "/member-code/index")
              : "vipcenter" === e
              ? (o = "/" + c + "/shop/levelcenter/free/index")
              : "weapp_marketing_page" === e || "marketing_page" === e
              ? (o = "/" + c + "/ext-marketing-page/index?id=" + (x.id || ""))
              : "storelist" === e || "nearby_store_way" === e
              ? (o = "/" + c + "/shop/physical-store/index")
              : "goods_classify" === e &&
                (o =
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(v));
          }
          return (
            Object(r.a)(t) || d || (o = s.a.add(o, t)),
            { url: o, isTab: d, isReLaunch: p, dmcExtra: m }
          );
        }
        !(function () {
          try {
            Promise.all([
              p.route.readRoute("AllGoodsList"),
              p.route.readRoute("GoodsTag"),
            ]).then((e) => {
              var [a, t] = e;
              (g = a.path), (u = t.path);
            });
          } catch (e) {}
        })();
      },
    }
  )
);
